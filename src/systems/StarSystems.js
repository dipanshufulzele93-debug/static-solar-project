import * as THREE from 'three';
import { STARS_DATA } from '../data/stars.js';
import { EXOPLANET_SYSTEMS_DATA } from '../data/exoplanets.js';
import { SunShader } from '../shaders/astroShaders.js';
import { textureGenerator } from '../utils/textureGenerator.js';
import { OrbitalMechanics } from './OrbitalMechanics.js';
import { PlanetFactory } from '../planets/PlanetFactory.js';

/**
 * Star & Exoplanetary Systems Engine
 * Renders real catalogued stellar classifications (O, B, A, F, G, K, M, White Dwarfs)
 * and complete exoplanetary systems (e.g. TRAPPIST-1, Kepler-186, 51 Pegasi) with Keplerian orbits.
 */
export class StarSystems {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'star_and_exoplanet_systems_root';
    this.scene.add(this.group);

    this.stars = [];
    this.exoplanetSystems = [];

    this.buildStars();
    this.buildExoplanetSystems();
  }

  buildStars() {
    STARS_DATA.forEach((sData) => {
      const starGroup = new THREE.Group();
      starGroup.name = `star_${sData.id}`;
      starGroup.position.set(...sData.position);
      starGroup.userData = {
        type: 'star',
        data: sData,
        name: sData.name,
        clickable: true
      };

      const radius = sData.visualRadius || 15.0;

      // Photosphere with specialized convective GLSL shader
      const sphereGeo = new THREE.SphereGeometry(radius, 48, 48);
      const uniforms = {
        time: { value: 0 },
        sunColor: { value: new THREE.Color(sData.color || '#ff8c00') },
        coronaColor: { value: new THREE.Color(sData.coronaColor || '#ffdd55') }
      };

      const mat = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: SunShader.vertexShader,
        fragmentShader: SunShader.fragmentShader
      });

      const mesh = new THREE.Mesh(sphereGeo, mat);
      starGroup.add(mesh);

      // Subtle Corona Glow
      const coronaGeo = new THREE.SphereGeometry(radius * 1.12, 24, 24);
      const coronaMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(sData.color || '#ff8c00'),
        transparent: true,
        opacity: 0.25,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const corona = new THREE.Mesh(coronaGeo, coronaMat);
      starGroup.add(corona);

      // Stellar point light
      const pLight = new THREE.PointLight(new THREE.Color(sData.color || '#ffffff'), 1.8, 1200, 1.2);
      starGroup.add(pLight);

      this.group.add(starGroup);
      this.stars.push({
        id: sData.id,
        data: sData,
        group: starGroup,
        uniforms
      });
    });
  }

  buildExoplanetSystems() {
    EXOPLANET_SYSTEMS_DATA.forEach((sysData) => {
      const sysGroup = new THREE.Group();
      sysGroup.name = `exosystem_${sysData.id}`;
      sysGroup.position.set(...sysData.position);
      sysGroup.userData = {
        type: 'exoplanet_system',
        data: sysData,
        name: sysData.name,
        clickable: true
      };

      // 1. Host Star
      const starData = sysData.star;
      const sRadius = starData.visualRadius || 12.0;
      const starGeo = new THREE.SphereGeometry(sRadius, 36, 36);
      const uniforms = {
        time: { value: 0 },
        sunColor: { value: new THREE.Color(starData.color || '#ff5522') },
        coronaColor: { value: new THREE.Color('#ffaa66') }
      };
      const starMat = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: SunShader.vertexShader,
        fragmentShader: SunShader.fragmentShader
      });
      const starMesh = new THREE.Mesh(starGeo, starMat);
      starMesh.userData = {
        type: 'star',
        data: starData,
        name: starData.name,
        clickable: true
      };
      sysGroup.add(starMesh);

      // Star point light for exoplanet illumination
      const sysLight = new THREE.PointLight(new THREE.Color(starData.color || '#ffeedd'), 3.2, 0, 0);
      sysGroup.add(sysLight);

      // 2. Exoplanets
      const planetsList = [];
      if (sysData.planets) {
        sysData.planets.forEach((epData) => {
          const planetObj = PlanetFactory.createPlanet(epData);
          sysGroup.add(planetObj.group);

          // Orbit line
          const orbitLine = OrbitalMechanics.createOrbitPath(
            epData.semiMajorAxis,
            epData.eccentricity || 0.01,
            epData.inclination || 0.0,
            epData.color || '#4682b4',
            64
          );
          sysGroup.add(orbitLine);

          planetsList.push({
            data: epData,
            instance: planetObj,
            group: planetObj.group
          });
        });
      }

      this.group.add(sysGroup);
      this.exoplanetSystems.push({
        id: sysData.id,
        data: sysData,
        group: sysGroup,
        uniforms,
        planets: planetsList
      });
    });
  }

  update(deltaSec, elapsedDays, totalTime) {
    // Update individual stars shaders
    this.stars.forEach(s => {
      if (s.uniforms) s.uniforms.time.value = totalTime;
      s.group.children[0].rotation.y += 0.003 * deltaSec * 60;
    });

    // Update exoplanet systems
    this.exoplanetSystems.forEach(sys => {
      if (sys.uniforms) sys.uniforms.time.value = totalTime;

      sys.planets.forEach(p => {
        const pos = OrbitalMechanics.calculatePosition(
          p.data.semiMajorAxis,
          p.data.eccentricity || 0.01,
          p.data.inclination || 0.0,
          p.data.orbitalPeriodDays,
          elapsedDays
        );
        p.group.position.copy(pos);
        if (p.instance.update) {
          p.instance.update(deltaSec, elapsedDays);
        }
      });
    });
  }
}
