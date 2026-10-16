import * as THREE from 'three';
import { textureGenerator } from '../utils/textureGenerator.js';
import { OrbitalMechanics } from '../systems/OrbitalMechanics.js';

/**
 * Jupiter Component
 * Features:
 * 1. Gas giant sphere with procedural turbulent cloud bands and Great Red Spot
 * 2. 4 Galilean Moons (Io, Europa, Ganymede, Callisto) orbiting with correct relative periods
 */
export class JupiterMesh {
  constructor(planetData) {
    this.data = planetData;
    this.group = new THREE.Group();
    this.group.name = 'planet_jupiter';
    this.group.userData = {
      type: 'planet',
      data: planetData,
      name: planetData.name,
      clickable: true
    };

    this.radius = planetData.visualRadius || 18.0;
    this.moons = [];

    this.buildJupiter();
    this.buildGalileanMoons();
  }

  buildJupiter() {
    const geo = new THREE.SphereGeometry(this.radius, 64, 64);
    const texture = textureGenerator.getJupiterTexture();

    const mat = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.70,
      metalness: 0.0
    });

    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.group.add(this.mesh);
  }

  buildGalileanMoons() {
    if (!this.data.moons) return;

    this.data.moons.forEach((m) => {
      const moonGroup = new THREE.Group();
      moonGroup.name = `moon_${m.id}`;
      moonGroup.userData = {
        type: 'moon',
        data: m,
        name: m.name,
        clickable: true
      };

      const geo = new THREE.SphereGeometry(m.visualRadius, 24, 24);
      const tex = textureGenerator.getRockyPlanetTexture(m.color, 0.7);
      const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.80, metalness: 0.0 });

      const moonMesh = new THREE.Mesh(geo, mat);
      moonMesh.castShadow = true;
      moonMesh.receiveShadow = true;
      moonGroup.add(moonMesh);
      this.group.add(moonGroup);

      const orbitLine = OrbitalMechanics.createOrbitPath(m.orbitalRadius, 0.005, 0.2, '#bcaaa4', 48);
      this.group.add(orbitLine);

      this.moons.push({
        group: moonGroup,
        data: m
      });
    });
  }

  update(deltaSec, elapsedDays) {
    if (this.mesh) {
      this.mesh.rotation.y += 0.035 * deltaSec * 60;
    }

    this.moons.forEach((m) => {
      const pos = OrbitalMechanics.calculatePosition(
        m.data.orbitalRadius,
        0.005,
        0.2,
        m.data.orbitalPeriodDays,
        elapsedDays
      );
      m.group.position.copy(pos);
    });
  }
}
