import * as THREE from 'three';
import { SOLAR_SYSTEM_DATA } from '../data/celestialData.js';
import { SunMesh } from '../planets/SunMesh.js';
import { EarthMesh } from '../planets/EarthMesh.js';
import { JupiterMesh } from '../planets/JupiterMesh.js';
import { SaturnMesh } from '../planets/SaturnMesh.js';
import { PlanetFactory } from '../planets/PlanetFactory.js';
import { AsteroidBelt, CometSystem } from '../effects/AsteroidBelt.js';
import { OrbitalMechanics } from './OrbitalMechanics.js';

/**
 * Solar System Scene Graph
 * Assembles Sun, all 8 planets + Pluto, moons, asteroid & Kuiper belts, and comets
 */
export class SolarSystem {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'solar_system_root';
    this.scene.add(this.group);

    this.planets = [];
    this.orbitLines = [];
    this.showOrbits = true;

    this.buildSystem();
  }

  buildSystem() {
    // 1. Sun
    this.sun = new SunMesh(SOLAR_SYSTEM_DATA.sun);
    this.group.add(this.sun.group);

    // 2. Planets
    SOLAR_SYSTEM_DATA.planets.forEach((pData) => {
      let planetObj;

      if (pData.id === 'earth') {
        planetObj = new EarthMesh(pData);
      } else if (pData.id === 'jupiter') {
        planetObj = new JupiterMesh(pData);
      } else if (pData.id === 'saturn') {
        planetObj = new SaturnMesh(pData);
      } else {
        planetObj = PlanetFactory.createPlanet(pData);
      }

      this.group.add(planetObj.group);
      this.planets.push({
        id: pData.id,
        data: pData,
        instance: planetObj,
        group: planetObj.group
      });

      // 3. Orbit Trail Line
      const orbitLine = OrbitalMechanics.createOrbitPath(
        pData.semiMajorAxis,
        pData.eccentricity,
        pData.inclination,
        pData.color || '#3a88c8',
        128
      );
      this.group.add(orbitLine);
      this.orbitLines.push(orbitLine);
    });

    // 4. Asteroid Belt (Between Mars at 175 and Jupiter at 260)
    this.mainAsteroidBelt = new AsteroidBelt(195, 230, 2200, 'main_asteroid_belt');
    this.group.add(this.mainAsteroidBelt.group);

    // 5. Kuiper Belt (Beyond Neptune at 510)
    this.kuiperBelt = new AsteroidBelt(540, 680, 1600, 'kuiper_belt');
    this.group.add(this.kuiperBelt.group);

    // 6. Comets (Halley's Comet: 75-year period)
    this.halleyComet = new CometSystem('halley', 280, 0.967, 75.3 * 365.25, '#00e5ff');
    this.group.add(this.halleyComet.group);
  }

  toggleOrbits(visible) {
    this.showOrbits = visible;
    this.orbitLines.forEach(line => {
      line.visible = visible;
    });
  }

  update(deltaSec, elapsedDays, totalTime) {
    // 1. Update Sun
    if (this.sun) {
      this.sun.update(deltaSec, totalTime);
    }

    // 2. Update Planets positions and self-rotations
    this.planets.forEach((p) => {
      const pos = OrbitalMechanics.calculatePosition(
        p.data.semiMajorAxis,
        p.data.eccentricity,
        p.data.inclination,
        p.data.orbitalPeriodDays,
        elapsedDays
      );
      p.group.position.copy(pos);

      // Self rotation & moon updates
      if (p.instance.update) {
        p.instance.update(deltaSec, elapsedDays, totalTime);
      }
    });

    // 3. Update Asteroid & Kuiper Belts
    if (this.mainAsteroidBelt) {
      this.mainAsteroidBelt.update(deltaSec);
    }
    if (this.kuiperBelt) {
      this.kuiperBelt.update(deltaSec);
    }

    // 4. Update Comet
    if (this.halleyComet) {
      const cometPos = OrbitalMechanics.calculatePosition(
        this.halleyComet.semiMajorAxis,
        this.halleyComet.eccentricity,
        18.0,
        this.halleyComet.periodDays,
        elapsedDays
      );
      this.halleyComet.update(cometPos);
    }
  }

  getPlanetById(id) {
    return this.planets.find(p => p.id === id);
  }
}
