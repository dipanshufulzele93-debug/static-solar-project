import * as THREE from 'three';
import { PulsarBeamShader } from '../shaders/astroShaders.js';

/**
 * Pulsar / Neutron Star Component
 * Implements:
 * 1. Rapidly spinning tiny high-density neutron core
 * 2. Tilted magnetic dipole field line toroids
 * 3. Dual sweeping relativistic radiation beam cones
 */
export class Pulsar {
  constructor(data) {
    this.data = data;
    this.group = new THREE.Group();
    this.group.name = `pulsar_${data.id}`;
    this.group.position.set(...data.position);
    this.group.userData = {
      type: 'pulsar',
      data: data,
      name: data.name,
      clickable: true
    };

    this.radius = data.radius || 15;
    this.spinSpeed = data.spinSpeed || 12.0;
    this.beamLength = data.beamLength || 350;
    this.beamRadius = data.beamRadius || 35;

    this.buildPulsar();
  }

  buildPulsar() {
    // 1. Neutron Star Core
    const coreGeo = new THREE.SphereGeometry(this.radius, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.coreMesh = new THREE.Mesh(coreGeo, coreMat);
    this.group.add(this.coreMesh);

    // 2. Magnetic Axis Group (Tilted by ~30 deg relative to rotation axis)
    this.magneticGroup = new THREE.Group();
    this.magneticGroup.rotation.z = 0.55;
    this.group.add(this.magneticGroup);

    // 3. Radiation Beams (North & South magnetic poles)
    this.beamUniforms = {
      time: { value: 0 },
      beamColor: { value: new THREE.Color(this.data.color || '#00e5ff') },
      pulseFreq: { value: this.spinSpeed * 2.0 }
    };

    const beamMat = new THREE.ShaderMaterial({
      uniforms: this.beamUniforms,
      vertexShader: PulsarBeamShader.vertexShader,
      fragmentShader: PulsarBeamShader.fragmentShader,
      side: THREE.DoubleSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const coneGeoN = new THREE.ConeGeometry(this.beamRadius, this.beamLength, 24, 1, true);
    coneGeoN.translate(0, this.beamLength / 2, 0);
    this.beamN = new THREE.Mesh(coneGeoN, beamMat);
    this.magneticGroup.add(this.beamN);

    const coneGeoS = new THREE.ConeGeometry(this.beamRadius, this.beamLength, 24, 1, true);
    coneGeoS.translate(0, -this.beamLength / 2, 0);
    coneGeoS.rotateX(Math.PI);
    this.beamS = new THREE.Mesh(coneGeoS, beamMat);
    this.magneticGroup.add(this.beamS);

    // 4. Magnetic Dipole Field Rings
    const fieldGeo = new THREE.TorusGeometry(this.radius * 2.8, 0.8, 8, 32);
    const fieldMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(this.data.color || '#00e5ff'),
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    const fieldMesh = new THREE.Mesh(fieldGeo, fieldMat);
    fieldMesh.rotation.x = Math.PI / 2;
    this.magneticGroup.add(fieldMesh);
  }

  update(deltaSec, totalTime) {
    // Rapid spin
    this.group.rotation.y += this.spinSpeed * deltaSec;
    if (this.beamUniforms) {
      this.beamUniforms.time.value = totalTime;
    }
  }
}

/**
 * Volumetric Particle Nebula Component
 */
export class Nebula {
  constructor(data) {
    this.data = data;
    this.group = new THREE.Group();
    this.group.name = `nebula_${data.id}`;
    this.group.position.set(...data.position);
    this.group.userData = {
      type: 'nebula',
      data: data,
      name: data.name,
      clickable: true
    };

    this.buildNebula();
  }

  buildNebula() {
    const count = this.data.particleCount || 3500;
    const radius = this.data.radius || 250;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const colorPalette = (this.data.colors || ['#ff007f', '#7f00ff', '#00e5ff']).map(c => new THREE.Color(c));

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Irregular gas cloud shape using overlapping Gaussian clusters
      const clusterAngle = Math.random() * Math.PI * 2;
      const clusterOffset = (Math.random() - 0.5) * radius * 0.6;

      const r = Math.pow(Math.random(), 1.4) * radius;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.max(-1, Math.min(1, 2 * Math.random() - 1)));

      positions[i3] = r * Math.sin(phi) * Math.cos(theta) + Math.cos(clusterAngle) * clusterOffset;
      positions[i3 + 1] = r * Math.cos(phi) * 0.7 + (Math.random() - 0.5) * 40;
      positions[i3 + 2] = r * Math.sin(phi) * Math.sin(theta) + Math.sin(clusterAngle) * clusterOffset;

      const colIndex = Math.floor(Math.random() * colorPalette.length);
      const chosenColor = colorPalette[colIndex];
      colors[i3] = chosenColor.r;
      colors[i3 + 1] = chosenColor.g;
      colors[i3 + 2] = chosenColor.b;

      sizes[i] = Math.random() * 25.0 + 10.0;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Soft cloud particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,0.7)');
    grad.addColorStop(0.4, 'rgba(200,220,255,0.3)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);

    const mat = new THREE.PointsMaterial({
      size: 32.0,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.points = new THREE.Points(geometry, mat);
    this.group.add(this.points);
  }

  update(deltaSec) {
    if (this.points) {
      this.points.rotation.y += 0.0002 * deltaSec * 60;
    }
  }
}
