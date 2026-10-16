import * as THREE from 'three';
import { WormholeShader } from '../shaders/astroShaders.js';

/**
 * Hypothetical Wormhole (Einstein-Rosen Bridge) 3D Component
 * Clearly identified as: HYPOTHETICAL — NOT OBSERVED
 */
export class Wormhole {
  constructor(data) {
    this.data = data || {
      id: 'wormhole-alpha',
      name: 'Einstein-Rosen Bridge (Wormhole)',
      position: [15000, 3500, -12000],
      radius: 450,
      dataStatus: 'THEORETICAL / HYPOTHETICAL (NOT OBSERVED)'
    };

    this.group = new THREE.Group();
    this.group.name = `wormhole_${this.data.id}`;
    this.group.position.set(...this.data.position);
    this.group.userData = {
      type: 'wormhole',
      data: this.data,
      name: this.data.name,
      clickable: true
    };

    this.buildWormhole();
  }

  buildWormhole() {
    const radius = this.data.radius || 450;

    // 1. Spacetime Entrance Sphere Throat
    const sphereGeo = new THREE.SphereGeometry(radius, 48, 48);
    this.uniforms = {
      time: { value: 0 },
      throatColor: { value: new THREE.Color('#9c27b0') },
      rimColor: { value: new THREE.Color('#00e5ff') }
    };

    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: WormholeShader.vertexShader,
      fragmentShader: WormholeShader.fragmentShader,
      side: THREE.DoubleSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.mesh = new THREE.Mesh(sphereGeo, this.material);
    this.group.add(this.mesh);

    // 2. Outer Gravitational Lensing Distorted Rings
    const ringGeo = new THREE.RingGeometry(radius * 1.05, radius * 1.65, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.lensingRing = new THREE.Mesh(ringGeo, ringMat);
    this.lensingRing.rotation.x = Math.PI / 3;
    this.group.add(this.lensingRing);

    const ringGeo2 = new THREE.RingGeometry(radius * 1.2, radius * 1.9, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xe040fb,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.lensingRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    this.lensingRing2.rotation.y = Math.PI / 4;
    this.group.add(this.lensingRing2);
  }

  update(deltaSec, totalTime) {
    if (this.uniforms) {
      this.uniforms.time.value = totalTime;
    }
    if (this.lensingRing) {
      this.lensingRing.rotation.z += 0.008;
    }
    if (this.lensingRing2) {
      this.lensingRing2.rotation.x += 0.005;
    }
  }
}
