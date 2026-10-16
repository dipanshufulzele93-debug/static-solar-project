import * as THREE from 'three';
import { SCALES } from '../data/celestialData.js';

/**
 * Procedural Galaxy Particle System
 * Generates realistic spiral, barred, and elliptical galaxies with dynamic scale-aware opacity and LOD.
 * In Solar System mode, it smoothly recedes into a subtle deep-space background without obstructing planets.
 */
export class Galaxy {
  constructor(galaxyData) {
    this.data = galaxyData;
    this.group = new THREE.Group();
    this.group.name = `galaxy_${galaxyData.id}`;
    this.group.position.set(...galaxyData.position);
    this.group.userData = {
      type: 'galaxy',
      data: galaxyData,
      clickable: true,
      name: galaxyData.name
    };

    this.particleCount = galaxyData.particleCount || 40000;
    this.radius = galaxyData.radius || 3000;
    this.rotationSpeed = 0.00015;

    // Dynamic visibility properties
    this.targetOpacity = 0.12;
    this.currentOpacity = 0.12;
    this.targetSize = 2.2;
    this.currentSize = 2.2;
    this.targetCoreOpacity = 0.04;
    this.currentCoreOpacity = 0.04;

    this.buildGalaxy();
  }

  buildGalaxy() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.particleCount * 3);
    const colors = new Float32Array(this.particleCount * 3);

    const colorCore = new THREE.Color(this.data.colorCore || '#ffe099');
    const colorArms = new THREE.Color(this.data.colorArms || '#7fb9ff');
    const colorDust = new THREE.Color(this.data.colorDust || '#ff9070');

    const armCount = this.data.armCount ?? 4;
    const twist = this.data.armTwist ?? 3.5;
    const isElliptical = this.data.isElliptical || false;

    for (let i = 0; i < this.particleCount; i++) {
      const i3 = i * 3;

      if (isElliptical) {
        const r = Math.pow(Math.random(), 2.0) * this.radius;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.max(-1, Math.min(1, 2 * Math.random() - 1)));

        positions[i3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = r * Math.cos(phi) * 0.6;
        positions[i3 + 2] = r * Math.sin(phi) * Math.sin(theta);

        const mixRatio = r / this.radius;
        const starColor = colorCore.clone().lerp(colorArms, mixRatio);
        colors[i3] = starColor.r;
        colors[i3 + 1] = starColor.g;
        colors[i3 + 2] = starColor.b;
      } else {
        const r = Math.pow(Math.random(), 1.6) * this.radius;
        const armIndex = i % (armCount > 0 ? armCount : 1);
        const armAngle = armCount > 0 ? (armIndex * 2 * Math.PI) / armCount : 0;
        const spinAngle = (r / this.radius) * twist;

        const randomX = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (r * 0.22 + 20));
        const randomY = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (180 * (1.0 - r / this.radius) + 30));
        const randomZ = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (r * 0.22 + 20));

        const angle = armAngle + spinAngle;
        positions[i3] = Math.cos(angle) * r + randomX;
        positions[i3 + 1] = randomY;
        positions[i3 + 2] = Math.sin(angle) * r + randomZ;

        const distRatio = r / this.radius;
        let starColor;
        if (distRatio < 0.18) {
          starColor = colorCore.clone().lerp(new THREE.Color('#ffffff'), 0.5);
        } else if (distRatio < 0.45 && Math.random() < 0.25) {
          starColor = colorDust;
        } else {
          starColor = colorArms.clone().lerp(new THREE.Color('#ffffff'), Math.random() * 0.3);
        }

        colors[i3] = starColor.r;
        colors[i3 + 1] = starColor.g;
        colors[i3 + 2] = starColor.b;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle sprite texture (Soft radial gradient)
    const spriteCanvas = document.createElement('canvas');
    spriteCanvas.width = 32;
    spriteCanvas.height = 32;
    const ctx = spriteCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.3, 'rgba(230,240,255,0.7)');
    grad.addColorStop(0.7, 'rgba(150,180,255,0.15)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const spriteTexture = new THREE.CanvasTexture(spriteCanvas);

    this.pointsMaterial = new THREE.PointsMaterial({
      size: this.currentSize,
      map: spriteTexture,
      vertexColors: true,
      transparent: true,
      opacity: this.currentOpacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.points = new THREE.Points(geometry, this.pointsMaterial);
    this.group.add(this.points);

    // Central Core Glow
    const coreGeo = new THREE.SphereGeometry(this.radius * 0.08, 16, 16);
    this.coreMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(this.data.colorCore || '#ffe099'),
      transparent: true,
      opacity: this.currentCoreOpacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.coreMesh = new THREE.Mesh(coreGeo, this.coreMaterial);
    this.group.add(this.coreMesh);

    // Solar System marker (if inside Milky Way)
    if (this.data.containsSolarSystem) {
      this.addSolarSystemMarker();
    }
  }

  addSolarSystemMarker() {
    const ssDist = this.radius * 0.58;
    const ssAngle = 1.35;
    const markerPos = new THREE.Vector3(
      Math.cos(ssAngle) * ssDist,
      12,
      Math.sin(ssAngle) * ssDist
    );

    const markerGroup = new THREE.Group();
    markerGroup.name = 'solar_system_galaxy_marker';
    markerGroup.position.copy(markerPos);

    const dotGeo = new THREE.SphereGeometry(14, 12, 12);
    const dotMat = new THREE.MeshBasicMaterial({ color: 0xffea00 });
    const dot = new THREE.Mesh(dotGeo, dotMat);
    markerGroup.add(dot);

    const ringGeo = new THREE.RingGeometry(20, 24, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    markerGroup.add(ring);

    markerGroup.userData = {
      type: 'solar_system_entrance',
      name: 'Solar System (Orion Spur)',
      clickable: true
    };

    this.group.add(markerGroup);
    this.solarMarker = markerGroup;
  }

  setScaleMode(scaleKey) {
    switch (scaleKey) {
      case SCALES.UNIVERSE:
        this.targetOpacity = 0.85;
        this.targetSize = 8.5;
        this.targetCoreOpacity = 0.45;
        break;
      case SCALES.GALAXY:
        this.targetOpacity = 0.65;
        this.targetSize = 6.0;
        this.targetCoreOpacity = 0.35;
        break;
      case SCALES.SOLAR_SYSTEM:
        this.targetOpacity = 0.12;
        this.targetSize = 2.0;
        this.targetCoreOpacity = 0.04;
        break;
      case SCALES.PLANET_ORBIT:
      case SCALES.CLOSE_APPROACH:
        this.targetOpacity = 0.08;
        this.targetSize = 1.6;
        this.targetCoreOpacity = 0.02;
        break;
    }
  }

  update(deltaSec) {
    if (this.points) {
      this.points.rotation.y += this.rotationSpeed * deltaSec * 60;
    }
    if (this.solarMarker) {
      const ring = this.solarMarker.children[1];
      if (ring) {
        ring.rotation.z += 0.02;
      }
    }

    // Smoothly interpolate opacity & size based on scale
    this.currentOpacity += (this.targetOpacity - this.currentOpacity) * 0.08;
    this.currentSize += (this.targetSize - this.currentSize) * 0.08;
    this.currentCoreOpacity += (this.targetCoreOpacity - this.currentCoreOpacity) * 0.08;

    if (this.pointsMaterial) {
      this.pointsMaterial.opacity = this.currentOpacity;
      this.pointsMaterial.size = this.currentSize;
    }
    if (this.coreMaterial) {
      this.coreMaterial.opacity = this.currentCoreOpacity;
    }
  }
}
