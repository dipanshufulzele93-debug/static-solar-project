import * as THREE from 'three';

/**
 * Warp / Hyperspace Visual FX
 * Creates star-streak lines moving rapidly towards the camera during warp travel
 */
export class WarpEffect {
  constructor(camera, streakCount = 1200) {
    this.camera = camera;
    this.group = new THREE.Group();
    this.group.name = 'warp_effect_layer';
    this.active = false;
    this.intensity = 0;

    const positions = new Float32Array(streakCount * 6); // 2 vertices per streak line
    this.streakData = [];

    for (let i = 0; i < streakCount; i++) {
      const x = (Math.random() - 0.5) * 800;
      const y = (Math.random() - 0.5) * 800;
      const z = -Math.random() * 1200;
      const length = 40 + Math.random() * 90;
      const speed = 15 + Math.random() * 25;

      this.streakData.push({ x, y, z, length, speed });
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    this.material = new THREE.LineBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending
    });

    this.lines = new THREE.LineSegments(geometry, this.material);
    this.lines.visible = false;
    this.group.add(this.lines);
  }

  setWarp(active) {
    this.active = active;
    if (!active) {
      this.intensity = 0;
      this.lines.visible = false;
    }
  }

  update(deltaSec) {
    if (this.active) {
      this.intensity = Math.min(1.0, this.intensity + deltaSec * 3.0);
    } else {
      this.intensity = Math.max(0.0, this.intensity - deltaSec * 4.0);
    }

    this.material.opacity = this.intensity * 0.85;

    if (this.intensity <= 0.001) {
      this.lines.visible = false;
      return;
    }
    this.lines.visible = true;

    // Attach warp lines relative to camera
    this.group.position.copy(this.camera.position);
    this.group.quaternion.copy(this.camera.quaternion);

    const positions = this.lines.geometry.attributes.position.array;
    for (let i = 0; i < this.streakData.length; i++) {
      const s = this.streakData[i];
      s.z += s.speed * deltaSec * 60 * (1 + this.intensity * 2);
      if (s.z > 50) {
        s.z = -1200;
        s.x = (Math.random() - 0.5) * 800;
        s.y = (Math.random() - 0.5) * 800;
      }

      const idx = i * 6;
      // Start of line
      positions[idx] = s.x;
      positions[idx + 1] = s.y;
      positions[idx + 2] = s.z;
      // End of line
      positions[idx + 3] = s.x;
      positions[idx + 4] = s.y;
      positions[idx + 5] = s.z - s.length * (1 + this.intensity * 1.5);
    }

    this.lines.geometry.attributes.position.needsUpdate = true;
  }
}
