import * as THREE from 'three';
import { textureGenerator } from '../utils/textureGenerator.js';
import { OrbitalMechanics } from '../systems/OrbitalMechanics.js';

/**
 * Saturn Component
 * Features:
 * 1. Gas giant body with pale gold atmospheric banding
 * 2. 5-layer ring system with Cassini division and double-sided light transmission
 * 3. 26.73° Axial Tilt
 * 4. Titan and Enceladus moons
 */
export class SaturnMesh {
  constructor(planetData) {
    this.data = planetData;
    this.group = new THREE.Group();
    this.group.name = 'planet_saturn';
    this.group.userData = {
      type: 'planet',
      data: planetData,
      name: planetData.name,
      clickable: true
    };

    this.radius = planetData.visualRadius || 15.0;
    this.axialTiltRad = ((planetData.axialTilt || 26.73) * Math.PI) / 180;
    this.moons = [];

    this.buildSaturn();
    this.buildMoons();
  }

  buildSaturn() {
    this.tiltedGroup = new THREE.Group();
    this.tiltedGroup.rotation.z = this.axialTiltRad;
    this.group.add(this.tiltedGroup);

    // 1. Gas Giant Body
    const bodyGeo = new THREE.SphereGeometry(this.radius, 64, 64);
    const bodyTex = textureGenerator.getSaturnTexture();
    const bodyMat = new THREE.MeshStandardMaterial({
      map: bodyTex,
      roughness: 0.70,
      metalness: 0.0
    });

    this.bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    this.bodyMesh.castShadow = true;
    this.bodyMesh.receiveShadow = true;
    this.tiltedGroup.add(this.bodyMesh);

    // 2. Ring System
    const innerR = this.data.ringInnerRadius || 19.0;
    const outerR = this.data.ringOuterRadius || 38.0;

    const ringGeo = new THREE.RingGeometry(innerR, outerR, 96);
    const pos = ringGeo.attributes.position;
    const v3 = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v3.fromBufferAttribute(pos, i);
      ringGeo.attributes.uv.setXY(i, (v3.length() - innerR) / (outerR - innerR), 0);
    }

    const ringTex = textureGenerator.getSaturnRingsTexture();
    const ringMat = new THREE.MeshStandardMaterial({
      map: ringTex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95,
      roughness: 0.75,
      metalness: 0.0
    });

    this.ringMesh = new THREE.Mesh(ringGeo, ringMat);
    this.ringMesh.rotation.x = Math.PI / 2;
    this.ringMesh.castShadow = true;
    this.ringMesh.receiveShadow = true;
    this.tiltedGroup.add(this.ringMesh);
  }

  buildMoons() {
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
      const tex = textureGenerator.getRockyPlanetTexture(m.color, 0.6);
      const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85, metalness: 0.0 });

      const moonMesh = new THREE.Mesh(geo, mat);
      moonMesh.castShadow = true;
      moonMesh.receiveShadow = true;
      moonGroup.add(moonMesh);
      this.group.add(moonGroup);

      const orbitLine = OrbitalMechanics.createOrbitPath(m.orbitalRadius, 0.02, 0.3, '#faedcd', 48);
      this.group.add(orbitLine);

      this.moons.push({
        group: moonGroup,
        data: m
      });
    });
  }

  update(deltaSec, elapsedDays) {
    if (this.bodyMesh) {
      this.bodyMesh.rotation.y += 0.03 * deltaSec * 60;
    }

    this.moons.forEach((m) => {
      const pos = OrbitalMechanics.calculatePosition(
        m.data.orbitalRadius,
        0.02,
        0.3,
        m.data.orbitalPeriodDays,
        elapsedDays
      );
      m.group.position.copy(pos);
    });
  }
}
