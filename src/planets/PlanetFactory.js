import * as THREE from 'three';
import { textureGenerator } from '../utils/textureGenerator.js';
import { AtmosphereShader } from '../shaders/astroShaders.js';
import { OrbitalMechanics } from '../systems/OrbitalMechanics.js';

/**
 * Planet Factory
 * Instantiates tailored 3D celestial bodies for Mercury, Venus, Mars, Uranus, Neptune, and Pluto
 */
export class PlanetFactory {
  static createPlanet(planetData) {
    const group = new THREE.Group();
    group.name = `planet_${planetData.id}`;
    group.userData = {
      type: 'planet',
      data: planetData,
      name: planetData.name,
      clickable: true
    };

    const radius = planetData.visualRadius || 4.0;
    const axialTiltRad = ((planetData.axialTilt || 0) * Math.PI) / 180;

    const tiltedGroup = new THREE.Group();
    tiltedGroup.rotation.z = axialTiltRad;
    group.add(tiltedGroup);

    // 1. Generate Surface Mesh
    const geo = new THREE.SphereGeometry(radius, 48, 48);
    let tex;

    switch (planetData.textureStyle) {
      case 'rocky-gray':
        tex = textureGenerator.getRockyPlanetTexture('#a8a8a8', 0.9);
        break;
      case 'dense-atmosphere':
        tex = textureGenerator.getRockyPlanetTexture('#f2d49b', 0.2);
        break;
      case 'martian-red':
        tex = textureGenerator.getRockyPlanetTexture('#c84c16', 0.7);
        break;
      case 'ice-cyan':
        tex = textureGenerator.getIceGiantTexture('#5ee2f0');
        break;
      case 'deep-blue':
        tex = textureGenerator.getIceGiantTexture('#2997ff');
        break;
      case 'pluto-heart':
        tex = textureGenerator.getRockyPlanetTexture('#cbb5ad', 0.5);
        break;
      default:
        tex = textureGenerator.getRockyPlanetTexture(planetData.color || '#999999', 0.5);
    }

    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.75,
      metalness: 0.0
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    tiltedGroup.add(mesh);

    // 2. Add Atmosphere Rim Glow for planets with atmosphere (Venus, Mars, Uranus, Neptune)
    if (planetData.id === 'venus' || planetData.id === 'mars' || planetData.id === 'uranus' || planetData.id === 'neptune') {
      const atmosColor = planetData.id === 'venus' ? '#ffe099' :
                         planetData.id === 'mars' ? '#ff9980' :
                         planetData.id === 'uranus' ? '#80deea' : '#42a5f5';

      const atmosGeo = new THREE.SphereGeometry(radius * 1.035, 32, 32);
      const atmosMat = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(atmosColor) },
          intensity: { value: 0.75 },
          power: { value: 4.0 }
        },
        vertexShader: AtmosphereShader.vertexShader,
        fragmentShader: AtmosphereShader.fragmentShader,
        side: THREE.BackSide,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const atmosMesh = new THREE.Mesh(atmosGeo, atmosMat);
      group.add(atmosMesh);
    }

    // 3. Add Thin Rings for Uranus
    if (planetData.id === 'uranus') {
      const ringGeo = new THREE.RingGeometry(radius * 1.5, radius * 2.0, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x80deea,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35,
        depthWrite: false
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      tiltedGroup.add(ring);
    }

    // 4. Moons for Mars, Neptune, etc.
    const moonsList = [];
    if (planetData.moons && planetData.moons.length > 0) {
      planetData.moons.forEach((m) => {
        const moonGroup = new THREE.Group();
        moonGroup.name = `moon_${m.id}`;
        moonGroup.userData = {
          type: 'moon',
          data: m,
          name: m.name,
          clickable: true
        };

        const mGeo = new THREE.SphereGeometry(m.visualRadius, 16, 16);
        const mTex = textureGenerator.getRockyPlanetTexture(m.color, 0.5);
        const mMat = new THREE.MeshStandardMaterial({ map: mTex, roughness: 0.85, metalness: 0.0 });
        const mMesh = new THREE.Mesh(mGeo, mMat);
        mMesh.castShadow = true;
        mMesh.receiveShadow = true;
        moonGroup.add(mMesh);
        group.add(moonGroup);

        const orbitLine = OrbitalMechanics.createOrbitPath(m.orbitalRadius, 0.01, 1.0, '#90a4ae', 32);
        group.add(orbitLine);

        moonsList.push({
          group: moonGroup,
          data: m
        });
      });
    }

    return {
      group,
      mesh,
      moons: moonsList,
      update: (deltaSec, elapsedDays) => {
        mesh.rotation.y += 0.02 * deltaSec * 60;
        moonsList.forEach((m) => {
          const pos = OrbitalMechanics.calculatePosition(
            m.data.orbitalRadius,
            0.01,
            1.0,
            m.data.orbitalPeriodDays,
            elapsedDays
          );
          m.group.position.copy(pos);
        });
      }
    };
  }
}
