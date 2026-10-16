import * as THREE from 'three';
import { SunShader } from '../shaders/astroShaders.js';

/**
 * Sun Visual Component
 * Dynamic photosphere with convective granulation shader, restrained corona glow,
 * and reliable omnidirectional point light illumination for all planets.
 */
export class SunMesh {
  constructor(sunData) {
    this.data = sunData;
    this.group = new THREE.Group();
    this.group.name = 'sun_root';
    this.group.userData = {
      type: 'sun',
      data: sunData,
      name: sunData.name,
      clickable: true
    };

    this.radius = sunData.visualRadius || 36;
    this.buildSun();
  }

  buildSun() {
    // 1. Photosphere with GLSL convective shader
    const sphereGeo = new THREE.SphereGeometry(this.radius, 64, 64);
    this.sunUniforms = {
      time: { value: 0 },
      sunColor: { value: new THREE.Color('#ff8c00') },
      coronaColor: { value: new THREE.Color('#ffe066') }
    };

    const sunMat = new THREE.ShaderMaterial({
      uniforms: this.sunUniforms,
      vertexShader: SunShader.vertexShader,
      fragmentShader: SunShader.fragmentShader
    });

    this.sunSphere = new THREE.Mesh(sphereGeo, sunMat);
    this.group.add(this.sunSphere);

    // 2. Restrained Inner Corona Glow (Thin limb layer)
    const coronaGeo = new THREE.SphereGeometry(this.radius * 1.08, 32, 32);
    const coronaMat = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0.35,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.coronaInner = new THREE.Mesh(coronaGeo, coronaMat);
    this.group.add(this.coronaInner);

    // 3. Subtle Outer Corona Halo (Does not wash out surrounding space)
    const outerHaloGeo = new THREE.SphereGeometry(this.radius * 1.25, 32, 32);
    const outerHaloMat = new THREE.MeshBasicMaterial({
      color: 0xff6600,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.coronaOuter = new THREE.Mesh(outerHaloGeo, outerHaloMat);
    this.group.add(this.coronaOuter);

    // 4. Primary Omnidirectional Sunlight
    // In Three.js, decay=0 ensures light reaches Mercury through Pluto with realistic contrast
    this.pointLight = new THREE.PointLight(0xfffdf5, 3.8, 0, 0);
    this.pointLight.castShadow = true;
    this.pointLight.shadow.bias = -0.001;
    this.group.add(this.pointLight);
  }

  update(deltaSec, totalTime) {
    if (this.sunUniforms) {
      this.sunUniforms.time.value = totalTime;
    }
    if (this.sunSphere) {
      this.sunSphere.rotation.y += 0.002 * deltaSec * 60;
    }
    if (this.coronaOuter) {
      this.coronaOuter.rotation.z += 0.001 * deltaSec * 60;
    }
  }
}
