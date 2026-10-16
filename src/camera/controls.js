import * as THREE from 'three';

/**
 * Enhanced Free-Fly 6-DOF & Camera Navigation Controller
 * Provides:
 * - Smooth WASD (Forward/Back/Left/Right)
 * - QE / Space (Down/Up vertical thrust)
 * - Shift (Warp Speed Boost ×3.5)
 * - Mouse Look & OrbitControls sync
 * - Dynamic velocity scaling based on cosmic scale / altitude
 * - Smooth, instant cancellable fly-to transitions
 */
export class FreeFlyController {
  constructor(camera, controls, domElement = document.body) {
    this.camera = camera;
    this.controls = controls;
    this.domElement = domElement;

    // Movement key states
    this.keys = {
      forward: false,   // W / ArrowUp
      backward: false,  // S / ArrowDown
      left: false,      // A / ArrowLeft
      right: false,     // D / ArrowRight
      up: false,        // E / Space / PageUp
      down: false,      // Q / PageDown
      boost: false      // Shift
    };

    // Velocity & physics vectors
    this.velocity = new THREE.Vector3();
    this.moveDir = new THREE.Vector3();
    this.damping = 0.88;
    this.baseSpeed = 60.0;
    this.boostMultiplier = 3.5;
    this.speedScale = 1.0;

    // On user input callback (used to interrupt/cancel fly-to autopilot)
    this.onUserInterrupt = null;

    // Pointer lock & mouse-look states
    this.isPointerLocked = false;
    this.mouseLookEnabled = false;

    this.setupListeners();
  }

  setupListeners() {
    window.addEventListener('keydown', (e) => this.onKeyDown(e));
    window.addEventListener('keyup', (e) => this.onKeyUp(e));

    // Mouse wheel camera dolly along look vector
    if (this.domElement) {
      this.domElement.addEventListener('wheel', (e) => this.onWheel(e), { passive: false });
    }
  }

  onWheel(e) {
    if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
      return;
    }

    if (this.onUserInterrupt) this.onUserInterrupt();

    // Calculate move direction and dynamic scale
    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion).normalize();
    const camDist = this.camera.position.length();
    const stepSize = Math.max(10, camDist * 0.08) * (e.deltaY < 0 ? 1 : -1);

    const deltaPos = forward.clone().multiplyScalar(stepSize);
    this.camera.position.add(deltaPos);
    this.controls.target.add(deltaPos);
  }

  onKeyDown(e) {
    // Ignore keystrokes when typing in text fields
    if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
      return;
    }

    let handled = true;
    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.keys.forward = true;
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.keys.backward = true;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.keys.left = true;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.keys.right = true;
        break;
      case 'KeyE':
      case 'Space':
      case 'PageUp':
        this.keys.up = true;
        break;
      case 'KeyQ':
      case 'PageDown':
        this.keys.down = true;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.keys.boost = true;
        break;
      case 'Escape':
        if (this.onUserInterrupt) this.onUserInterrupt();
        break;
      default:
        handled = false;
        break;
    }

    if (handled && (this.keys.forward || this.keys.backward || this.keys.left || this.keys.right || this.keys.up || this.keys.down)) {
      if (this.onUserInterrupt) {
        this.onUserInterrupt();
      }
    }
  }

  onKeyUp(e) {
    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.keys.forward = false;
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.keys.backward = false;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.keys.left = false;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.keys.right = false;
        break;
      case 'KeyE':
      case 'Space':
      case 'PageUp':
        this.keys.up = false;
        break;
      case 'KeyQ':
      case 'PageDown':
        this.keys.down = false;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.keys.boost = false;
        break;
    }
  }

  isMoving() {
    return this.keys.forward || this.keys.backward || this.keys.left || this.keys.right || this.keys.up || this.keys.down;
  }

  update(deltaSec) {
    if (!this.controls || !this.controls.enabled) return;

    // Calculate dynamic speed scaling based on camera distance from center
    const camDist = this.camera.position.length();
    let dynamicSpeed = Math.max(15, camDist * 0.45);
    if (this.keys.boost) dynamicSpeed *= this.boostMultiplier;

    // Calculate forward & right vectors from camera rotation
    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion).normalize();
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion).normalize();
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion).normalize();

    this.moveDir.set(0, 0, 0);

    if (this.keys.forward) this.moveDir.add(forward);
    if (this.keys.backward) this.moveDir.addScaledVector(forward, -1);
    if (this.keys.right) this.moveDir.add(right);
    if (this.keys.left) this.moveDir.addScaledVector(right, -1);
    if (this.keys.up) this.moveDir.add(up);
    if (this.keys.down) this.moveDir.addScaledVector(up, -1);

    if (this.moveDir.lengthSq() > 0.0001) {
      this.moveDir.normalize();
      const targetVel = this.moveDir.clone().multiplyScalar(dynamicSpeed);
      this.velocity.lerp(targetVel, 0.25);
    } else {
      this.velocity.multiplyScalar(this.damping);
    }

    if (this.velocity.lengthSq() > 0.01) {
      const step = this.velocity.clone().multiplyScalar(deltaSec);
      this.camera.position.add(step);
      this.controls.target.add(step);
    }
  }
}
