import * as THREE from 'three';
import { CMBShader } from '../shaders/astroShaders.js';

/**
 * Cosmic Web & Large-Scale Universe Structure
 * Visualizes:
 * 1. Dark matter filaments and galaxy cluster nodes
 * 2. Cosmic Microwave Background (CMB) boundary sphere
 */
export class CosmicWeb {
  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'cosmic_web_system';
    this.buildCMBSphere();
    this.buildFilaments();
  }

  buildCMBSphere() {
    // Outer CMB Sphere at the edge of the observable horizon
    const cmbGeo = new THREE.SphereGeometry(140000, 48, 48);
    this.cmbUniforms = { time: { value: 0 } };
    const cmbMat = new THREE.ShaderMaterial({
      uniforms: this.cmbUniforms,
      vertexShader: CMBShader.vertexShader,
      fragmentShader: CMBShader.fragmentShader,
      side: THREE.BackSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.cmbMesh = new THREE.Mesh(cmbGeo, cmbMat);
    this.cmbMesh.userData = {
      name: 'Cosmic Microwave Background (CMB)',
      type: 'Relic Radiation',
      clickable: true,
      data: {
        id: 'cmb',
        name: 'Cosmic Microwave Background (CMB)',
        objectType: 'Relic Radiation of the Big Bang',
        distanceFromEarth: '13.8 Billion Light-Years',
        surfaceTemp: '2.7255 K (-270.42 °C)',
        dataStatus: 'CONFIRMED / REAL CATALOGUED'
      }
    };
    this.group.add(this.cmbMesh);
  }

  buildFilaments() {
    // 3D Filaments using Instanced Points & connecting glowing lines
    const count = 12000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const c1 = new THREE.Color('#4fc3f7');
    const c2 = new THREE.Color('#ab47bc');
    const c3 = new THREE.Color('#ffb74d');

    for (let i = 0; i < count; i++) {
      // Clustered filamentary distribution with voids
      const u = Math.random();
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.max(-1, Math.min(1, 2 * Math.random() - 1)));
      const r = 25000 + Math.pow(u, 0.7) * 90000;

      // Tendril modulation
      const noise = Math.sin(theta * 6.0) * Math.cos(phi * 4.0);
      const modR = r * (0.85 + 0.25 * noise);

      const x = modR * Math.sin(phi) * Math.cos(theta);
      const y = modR * Math.sin(phi) * Math.sin(theta) * 0.75;
      const z = modR * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const col = u < 0.4 ? c1 : (u < 0.8 ? c2 : c3);
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 140,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.points = new THREE.Points(geo, mat);
    this.points.userData = {
      name: 'Cosmic Web Filaments',
      type: 'Large-Scale Structure',
      clickable: true,
      data: {
        id: 'cosmic-web',
        name: 'The Cosmic Web & Voids',
        objectType: 'Large-Scale Structure of Spacetime',
        distanceFromEarth: 'Spans billions of light-years',
        dataStatus: 'OBSERVED / 3D SURVEY CONFIRMED'
      }
    };
    this.group.add(this.points);
  }

  update(deltaSec, totalTime) {
    if (this.cmbUniforms) {
      this.cmbUniforms.time.value = totalTime;
    }
    if (this.points) {
      this.points.rotation.y += 0.0002;
    }
  }
}
