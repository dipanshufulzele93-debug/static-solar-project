import * as THREE from 'three';
import { audioSystem } from '../systems/AudioSystem.js';

/**
 * Player-Controllable Spacecraft
 * Features:
 * 1. Procedural 3D multi-part ship mesh
 * 2. 6-DOF physics with acceleration, dampening, and velocity
 * 3. Animated plasma thruster plume
 * 4. Cockpit & Third-person camera viewports
 * 5. Telemetry output (velocity, heading, g-force)
 */
export class Spacecraft {
  constructor(camera) {
    this.camera = camera;
    this.group = new THREE.Group();
    this.group.name = 'player_spacecraft';

    // Physics state
    this.position = new THREE.Vector3(0, 30, 200);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.quaternion = new THREE.Quaternion();
    this.speed = 0;
    this.maxSpeed = 800; // Units / sec
    this.thrustPower = 400;
    this.damping = 0.985;

    // Control inputs
    this.keys = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      up: false,
      down: false,
      rollLeft: false,
      rollRight: false,
      boost: false
    };

    this.flightModeActive = false;
    this.cameraMode = 'chase'; // 'chase', 'cockpit', 'free'

    this.buildShipMesh();
    this.setupKeyListeners();
  }

  buildShipMesh() {
    this.shipMesh = new THREE.Group();

    // 1. Fuselage
    const bodyGeo = new THREE.ConeGeometry(2.2, 9, 8);
    bodyGeo.rotateX(Math.PI / 2);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xd0d8e0,
      metalness: 0.85,
      roughness: 0.25
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    this.shipMesh.add(body);

    // 2. Cockpit Canopy Glass
    const cockpitGeo = new THREE.SphereGeometry(1.2, 16, 16);
    cockpitGeo.scale(0.8, 0.6, 1.8);
    cockpitGeo.translate(0, 0.7, 0.8);
    const cockpitMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.85
    });
    const cockpit = new THREE.Mesh(cockpitGeo, cockpitMat);
    this.shipMesh.add(cockpit);

    // 3. Delta Wings
    const wingGeo = new THREE.BoxGeometry(9.0, 0.2, 4.0);
    wingGeo.translate(0, -0.2, -1.2);
    const wingMat = new THREE.MeshStandardMaterial({
      color: 0x2c3e50,
      metalness: 0.7,
      roughness: 0.3
    });
    const wings = new THREE.Mesh(wingGeo, wingMat);
    this.shipMesh.add(wings);

    // 4. Warp / Sublight Engine Nacelles
    const nacelleGeo = new THREE.CylinderGeometry(0.6, 0.7, 5.5, 12);
    nacelleGeo.rotateX(Math.PI / 2);
    const nacelleMat = new THREE.MeshStandardMaterial({
      color: 0x1a252f,
      metalness: 0.8,
      roughness: 0.3
    });

    const nacelleL = new THREE.Mesh(nacelleGeo, nacelleMat);
    nacelleL.position.set(-4.2, 0.2, -1.2);
    this.shipMesh.add(nacelleL);

    const nacelleR = new THREE.Mesh(nacelleGeo, nacelleMat);
    nacelleR.position.set(4.2, 0.2, -1.2);
    this.shipMesh.add(nacelleR);

    // 5. Plasma Exhaust Thruster Plumes
    const plumeGeo = new THREE.ConeGeometry(0.5, 3.5, 12);
    plumeGeo.rotateX(-Math.PI / 2);
    plumeGeo.translate(0, 0, -4.5);
    this.plumeMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    this.plumeL = new THREE.Mesh(plumeGeo, this.plumeMat);
    this.plumeL.position.set(-4.2, 0.2, 0);
    this.shipMesh.add(this.plumeL);

    this.plumeR = new THREE.Mesh(plumeGeo, this.plumeMat);
    this.plumeR.position.set(4.2, 0.2, 0);
    this.shipMesh.add(this.plumeR);

    this.group.add(this.shipMesh);
    this.group.position.copy(this.position);
  }

  setupKeyListeners() {
    window.addEventListener('keydown', (e) => {
      if (!this.flightModeActive) return;
      switch (e.code) {
        case 'KeyW': this.keys.forward = true; break;
        case 'KeyS': this.keys.backward = true; break;
        case 'KeyA': this.keys.left = true; break;
        case 'KeyD': this.keys.right = true; break;
        case 'Space': this.keys.up = true; e.preventDefault(); break;
        case 'ShiftLeft':
        case 'ShiftRight': this.keys.boost = true; break;
        case 'KeyC': this.keys.down = true; break;
        case 'KeyQ': this.keys.rollLeft = true; break;
        case 'KeyE': this.keys.rollRight = true; break;
      }
    });

    window.addEventListener('keyup', (e) => {
      switch (e.code) {
        case 'KeyW': this.keys.forward = false; break;
        case 'KeyS': this.keys.backward = false; break;
        case 'KeyA': this.keys.left = false; break;
        case 'KeyD': this.keys.right = false; break;
        case 'Space': this.keys.up = false; break;
        case 'ShiftLeft':
        case 'ShiftRight': this.keys.boost = false; break;
        case 'KeyC': this.keys.down = false; break;
        case 'KeyQ': this.keys.rollLeft = false; break;
        case 'KeyE': this.keys.rollRight = false; break;
      }
    });
  }

  setFlightMode(active) {
    this.flightModeActive = active;
    this.group.visible = true;
    if (!active) {
      audioSystem.setEngineThrust(0);
    }
  }

  toggleCameraMode() {
    if (this.cameraMode === 'chase') this.cameraMode = 'cockpit';
    else if (this.cameraMode === 'cockpit') this.cameraMode = 'chase';
    return this.cameraMode;
  }

  update(deltaSec) {
    if (!this.flightModeActive) return;

    const moveVector = new THREE.Vector3();
    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(this.group.quaternion);
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.group.quaternion);
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.group.quaternion);

    let thrustMultiplier = this.keys.boost ? 2.5 : 1.0;
    let isThrusting = false;

    if (this.keys.forward) {
      moveVector.addScaledVector(forward, this.thrustPower * thrustMultiplier);
      isThrusting = true;
    }
    if (this.keys.backward) {
      moveVector.addScaledVector(forward, -this.thrustPower * 0.5);
    }
    if (this.keys.left) {
      moveVector.addScaledVector(right, -this.thrustPower * 0.6);
    }
    if (this.keys.right) {
      moveVector.addScaledVector(right, this.thrustPower * 0.6);
    }
    if (this.keys.up) {
      moveVector.addScaledVector(up, this.thrustPower * 0.6);
    }
    if (this.keys.down) {
      moveVector.addScaledVector(up, -this.thrustPower * 0.6);
    }

    // Roll rotation
    if (this.keys.rollLeft) {
      this.group.rotateZ(1.8 * deltaSec);
    }
    if (this.keys.rollRight) {
      this.group.rotateZ(-1.8 * deltaSec);
    }

    // Apply acceleration to velocity
    this.velocity.addScaledVector(moveVector, deltaSec);
    this.velocity.multiplyScalar(this.damping);

    // Limit maximum speed
    const currentMax = this.maxSpeed * (this.keys.boost ? 2.5 : 1.0);
    if (this.velocity.length() > currentMax) {
      this.velocity.setLength(currentMax);
    }

    this.group.position.addScaledVector(this.velocity, deltaSec);
    this.speed = this.velocity.length();

    // Sound and Visual Thruster Plume
    const thrustNorm = isThrusting ? (this.keys.boost ? 1.0 : 0.6) : (this.speed > 5 ? 0.2 : 0);
    audioSystem.setEngineThrust(thrustNorm);

    if (this.plumeMat) {
      const plumeScale = 0.5 + thrustNorm * 1.5;
      this.plumeL.scale.set(1, 1, plumeScale);
      this.plumeR.scale.set(1, 1, plumeScale);
      this.plumeMat.opacity = 0.3 + thrustNorm * 0.7;
    }

    // Update Camera position relative to ship
    if (this.cameraMode === 'chase') {
      const chaseOffset = new THREE.Vector3(0, 5, 22).applyQuaternion(this.group.quaternion);
      const targetCamPos = this.group.position.clone().add(chaseOffset);
      this.camera.position.lerp(targetCamPos, 0.12);
      this.camera.lookAt(this.group.position.clone().add(forward.clone().multiplyScalar(40)));
    } else if (this.cameraMode === 'cockpit') {
      const cockpitOffset = new THREE.Vector3(0, 0.8, 1.2).applyQuaternion(this.group.quaternion);
      this.camera.position.copy(this.group.position.clone().add(cockpitOffset));
      this.camera.quaternion.copy(this.group.quaternion);
    }
  }

  getTelemetry() {
    return {
      speedKms: (this.speed * 120).toFixed(0),
      warpFactor: (this.speed / 100).toFixed(2),
      position: this.group.position,
      heading: (this.group.rotation.y * (180 / Math.PI) % 360 + 360) % 360
    };
  }
}
