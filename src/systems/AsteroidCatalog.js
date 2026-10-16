import * as THREE from 'three';
import { ASTEROIDS_DATA, PLUTO_SYSTEM_DATA } from '../data/asteroids.js';
import { COMETS_DATA } from '../data/comets.js';
import { textureGenerator } from '../utils/textureGenerator.js';
import { OrbitalMechanics } from './OrbitalMechanics.js';
import { CometSystem } from '../effects/AsteroidBelt.js';

/**
 * Real Named Asteroids, Dwarf Planets & Comets Catalog Engine
 */
export class AsteroidCatalog {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'real_asteroids_catalog_root';
    this.scene.add(this.group);

    this.asteroids = [];
    this.comets = [];

    this.buildAsteroids();
    this.buildPlutoSystem();
    this.buildComets();
  }

  buildAsteroids() {
    ASTEROIDS_DATA.forEach((astData) => {
      const astGroup = new THREE.Group();
      astGroup.name = `asteroid_${astData.id}`;
      astGroup.userData = {
        type: 'asteroid',
        data: astData,
        name: astData.name,
        clickable: true
      };

      let geo;
      const radius = astData.visualRadius || 1.2;

      if (astData.isIrregular) {
        // Diamond / Rubble-pile shape for Bennu, Ryugu, Apophis
        geo = new THREE.OctahedronGeometry(radius, 2);
        const pos = geo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const vx = pos.getX(i);
          const vy = pos.getY(i);
          const vz = pos.getZ(i);
          const noise = 1.0 + (Math.sin(vx * 5.0) + Math.cos(vy * 5.0) + Math.sin(vz * 5.0)) * 0.12;
          pos.setXYZ(i, vx * noise, vy * noise, vz * noise);
        }
        geo.computeVertexNormals();
      } else if (astData.isEllipsoidal) {
        // Haumea rugby ball ellipsoid
        geo = new THREE.SphereGeometry(radius, 32, 32);
        geo.scale(1.8, 1.0, 0.9);
      } else {
        geo = new THREE.SphereGeometry(radius, 32, 32);
      }

      const tex = textureGenerator.getRockyPlanetTexture(astData.color || '#888888', 0.8);
      const mat = new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.88,
        metalness: 0.0
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      astGroup.add(mesh);

      // Ceres Occator Crater bright spots
      if (astData.hasBrightSpots) {
        const spotGeo = new THREE.SphereGeometry(radius * 0.18, 8, 8);
        const spotMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const spot = new THREE.Mesh(spotGeo, spotMat);
        spot.position.set(0, radius * 0.85, radius * 0.45);
        astGroup.add(spot);
      }

      // Orbit path line
      const orbitLine = OrbitalMechanics.createOrbitPath(
        astData.semiMajorAxis,
        astData.eccentricity,
        astData.inclination,
        '#6b7280',
        96
      );
      this.group.add(orbitLine);

      this.group.add(astGroup);
      this.asteroids.push({
        id: astData.id,
        data: astData,
        group: astGroup,
        mesh
      });
    });
  }

  buildPlutoSystem() {
    this.plutoGroup = new THREE.Group();
    this.plutoGroup.name = 'pluto_system_complex';
    this.plutoGroup.userData = {
      type: 'dwarf_planet',
      data: PLUTO_SYSTEM_DATA,
      name: PLUTO_SYSTEM_DATA.name,
      clickable: true
    };

    // Pluto Primary Body
    const plutoGeo = new THREE.SphereGeometry(2.2, 36, 36);
    const plutoTex = textureGenerator.getRockyPlanetTexture('#cbb5ad', 0.5);
    const plutoMat = new THREE.MeshStandardMaterial({ map: plutoTex, roughness: 0.8, metalness: 0.0 });
    this.plutoMesh = new THREE.Mesh(plutoGeo, plutoMat);
    this.plutoGroup.add(this.plutoMesh);

    // Moons (Charon, Styx, Nix, Kerberos, Hydra)
    this.plutoMoons = [];
    PLUTO_SYSTEM_DATA.moons.forEach((m) => {
      const mGroup = new THREE.Group();
      mGroup.name = `moon_${m.id}`;
      mGroup.userData = {
        type: 'moon',
        data: m,
        name: m.name,
        clickable: true
      };

      const mGeo = new THREE.SphereGeometry(m.visualRadius, 16, 16);
      const mTex = textureGenerator.getRockyPlanetTexture(m.color, 0.7);
      const mMat = new THREE.MeshStandardMaterial({ map: mTex, roughness: 0.85, metalness: 0.0 });
      const mMesh = new THREE.Mesh(mGeo, mMat);
      mGroup.add(mMesh);
      this.plutoGroup.add(mGroup);

      const orbitLine = OrbitalMechanics.createOrbitPath(m.orbitalRadius, 0.005, 0.5, '#9ca3af', 32);
      this.plutoGroup.add(orbitLine);

      this.plutoMoons.push({ data: m, group: mGroup });
    });

    this.group.add(this.plutoGroup);
  }

  buildComets() {
    COMETS_DATA.forEach((cData) => {
      const comet = new CometSystem(cData.id, cData.semiMajorAxis, cData.eccentricity, cData.periodDays, cData.color || '#00e5ff');
      comet.group.userData = {
        type: 'comet',
        data: cData,
        name: cData.name,
        clickable: true
      };

      const orbitLine = OrbitalMechanics.createOrbitPath(cData.semiMajorAxis, cData.eccentricity, cData.inclination, cData.color || '#00e5ff', 128);
      this.group.add(orbitLine);

      this.group.add(comet.group);
      this.comets.push({
        id: cData.id,
        data: cData,
        instance: comet
      });
    });
  }

  update(deltaSec, elapsedDays) {
    // Update asteroids
    this.asteroids.forEach(a => {
      const pos = OrbitalMechanics.calculatePosition(
        a.data.semiMajorAxis,
        a.data.eccentricity,
        a.data.inclination,
        a.data.orbitalPeriodDays,
        elapsedDays
      );
      a.group.position.copy(pos);
      a.mesh.rotation.y += 0.02 * deltaSec * 60;
    });

    // Update Pluto and moons
    if (this.plutoGroup) {
      const plutoPos = OrbitalMechanics.calculatePosition(590, 0.2488, 17.16, 90560.0, elapsedDays);
      this.plutoGroup.position.copy(plutoPos);
      if (this.plutoMesh) this.plutoMesh.rotation.y += 0.01 * deltaSec * 60;

      this.plutoMoons.forEach(pm => {
        const mPos = OrbitalMechanics.calculatePosition(pm.data.orbitalRadius, 0.005, 0.5, pm.data.orbitalPeriodDays, elapsedDays);
        pm.group.position.copy(mPos);
      });
    }

    // Update Comets
    this.comets.forEach(c => {
      const cometPos = OrbitalMechanics.calculatePosition(
        c.data.semiMajorAxis,
        c.data.eccentricity,
        c.data.inclination,
        c.data.periodDays,
        elapsedDays
      );
      c.instance.update(cometPos);
    });
  }
}
