import * as THREE from 'three';
import { BlackHoleAccretionShader, RelativisticJetShader } from '../shaders/astroShaders.js';

/**
 * Black Hole Object
 * Implements:
 * 1. Pitch black Event Horizon sphere
 * 2. Photon sphere ring
 * 3. Relativistic Accretion Disk (GLSL shader with Doppler beaming & gravitational redshift)
 * 4. Opposing Polar Relativistic Jets
 */
export class BlackHole {
  constructor(data) {
    this.data = data;
    this.group = new THREE.Group();
    this.group.name = `blackhole_${data.id}`;
    this.group.position.set(...data.position);
    this.group.userData = {
      type: 'black_hole',
      data: data,
      name: data.name,
      clickable: true
    };

    this.eventHorizonRadius = data.eventHorizonSize || 60;
    this.diskInner = data.diskInnerRadius || 90;
    this.diskOuter = data.diskOuterRadius || 300;
    this.jetHeight = data.jetHeight || 500;

    this.buildBlackHole();
  }

  buildBlackHole() {
    // 1. Event Horizon (Perfect light absorber)
    const horizonGeo = new THREE.SphereGeometry(this.eventHorizonRadius, 32, 32);
    const horizonMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    this.horizonMesh = new THREE.Mesh(horizonGeo, horizonMat);
    this.group.add(this.horizonMesh);

    // 2. Photon Ring & Gravitational Lensing Halo (Einstein Ring)
    const photonRingGeo = new THREE.RingGeometry(
      this.eventHorizonRadius * 1.01,
      this.eventHorizonRadius * 1.35,
      64
    );
    const photonRingMat = new THREE.MeshBasicMaterial({
      color: 0xffe8cc,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.photonRing = new THREE.Mesh(photonRingGeo, photonRingMat);
    this.photonRing.rotation.x = Math.PI / 2;
    this.group.add(this.photonRing);

    // Gravitational Lensing Spherical Shell
    const lensGeo = new THREE.SphereGeometry(this.eventHorizonRadius * 1.45, 32, 32);
    const lensMat = new THREE.MeshBasicMaterial({
      color: 0xffaa44,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false
    });
    this.lensMesh = new THREE.Mesh(lensGeo, lensMat);
    this.group.add(this.lensMesh);

    // 3. Accretion Disk with Custom GLSL Shader
    const diskGeo = new THREE.PlaneGeometry(this.diskOuter * 2, this.diskOuter * 2);
    this.accretionUniforms = {
      time: { value: 0 },
      innerColor: { value: new THREE.Color(this.data.diskColorInner || '#ffffff') },
      midColor: { value: new THREE.Color(this.data.diskColorMid || '#ff9100') },
      outerColor: { value: new THREE.Color(this.data.diskColorOuter || '#d50000') },
      innerRadius: { value: this.diskInner / this.diskOuter },
      outerRadius: { value: 1.0 }
    };

    this.accretionMat = new THREE.ShaderMaterial({
      uniforms: this.accretionUniforms,
      vertexShader: BlackHoleAccretionShader.vertexShader,
      fragmentShader: BlackHoleAccretionShader.fragmentShader,
      side: THREE.DoubleSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.accretionDisk = new THREE.Mesh(diskGeo, this.accretionMat);
    this.accretionDisk.rotation.x = Math.PI / 2;
    this.group.add(this.accretionDisk);

    // 4. Polar Relativistic Jets (North and South)
    this.buildJets();
  }

  buildJets() {
    this.jetUniforms = {
      time: { value: 0 },
      jetColor: { value: new THREE.Color(this.data.jetColor || '#00e5ff') }
    };

    const jetMat = new THREE.ShaderMaterial({
      uniforms: this.jetUniforms,
      vertexShader: RelativisticJetShader.vertexShader,
      fragmentShader: RelativisticJetShader.fragmentShader,
      side: THREE.DoubleSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    // North Jet
    const jetGeoN = new THREE.CylinderGeometry(this.eventHorizonRadius * 0.4, 2, this.jetHeight, 16, 1, true);
    jetGeoN.translate(0, this.jetHeight / 2, 0);
    this.jetN = new THREE.Mesh(jetGeoN, jetMat);
    this.group.add(this.jetN);

    // South Jet
    const jetGeoS = new THREE.CylinderGeometry(this.eventHorizonRadius * 0.4, 2, this.jetHeight, 16, 1, true);
    jetGeoS.translate(0, -this.jetHeight / 2, 0);
    jetGeoS.rotateX(Math.PI);
    this.jetS = new THREE.Mesh(jetGeoS, jetMat);
    this.group.add(this.jetS);
  }

  update(deltaSec, totalTime) {
    if (this.accretionUniforms) {
      this.accretionUniforms.time.value = totalTime;
    }
    if (this.jetUniforms) {
      this.jetUniforms.time.value = totalTime;
    }
    if (this.photonRing) {
      this.photonRing.rotation.z += 0.01;
    }
  }
}
