import { SCALES } from '../data/celestialData.js';

export const CAMERA_MODES = {
  FREE_EXPLORE: 'FREE_EXPLORE',
  ORBIT: 'ORBIT',
  FOLLOW: 'FOLLOW',
  PLANET: 'PLANET',
  HOME: 'HOME'
};

/**
 * Navigation System & Scale State Machine
 * Coordinates camera views, target focus tracking, and multi-scale hierarchy
 */
export class NavigationSystem {
  constructor(camera, controls) {
    this.camera = camera;
    this.controls = controls;

    this.currentScale = SCALES.SOLAR_SYSTEM;
    this.cameraMode = CAMERA_MODES.ORBIT;
    this.focusTarget = null; // Object3D or Vector3
    this.trackingObject = null; // When following a moving planet
    this.scaleChangeCallbacks = [];
    this.modeChangeCallbacks = [];
  }

  onScaleChange(callback) {
    this.scaleChangeCallbacks.push(callback);
  }

  onModeChange(callback) {
    this.modeChangeCallbacks.push(callback);
  }

  setCameraMode(mode, targetObj = null) {
    this.cameraMode = mode;
    if (targetObj) {
      this.trackingObject = targetObj;
    }

    switch (mode) {
      case CAMERA_MODES.FREE_EXPLORE:
        this.trackingObject = null;
        this.controls.enableRotate = true;
        this.controls.enablePan = true;
        this.controls.enableZoom = true;
        break;

      case CAMERA_MODES.ORBIT:
        this.controls.enableRotate = true;
        this.controls.enablePan = false;
        break;

      case CAMERA_MODES.FOLLOW:
        if (targetObj) {
          this.trackingObject = targetObj;
        }
        this.controls.enableRotate = true;
        this.controls.enablePan = false;
        break;

      case CAMERA_MODES.PLANET:
        this.controls.minDistance = 2;
        this.controls.maxDistance = 800;
        break;

      case CAMERA_MODES.HOME:
        this.trackingObject = null;
        this.setScale(SCALES.SOLAR_SYSTEM);
        break;
    }

    this.modeChangeCallbacks.forEach(cb => cb(mode, targetObj));
  }

  setScale(newScale, targetObj = null) {
    this.currentScale = newScale;

    switch (newScale) {
      case SCALES.MULTIVERSE:
      case SCALES.UNIVERSE:
        this.controls.minDistance = 2000;
        this.controls.maxDistance = 300000;
        this.trackingObject = null;
        break;

      case SCALES.GALAXY:
      case SCALES.GALAXIES:
      case SCALES.MILKY_WAY:
        this.controls.minDistance = 200;
        this.controls.maxDistance = 50000;
        this.trackingObject = null;
        break;

      case SCALES.SOLAR_SYSTEM:
        this.controls.minDistance = 15;
        this.controls.maxDistance = 8000;
        this.trackingObject = null;
        break;

      case SCALES.PLANET_ORBIT:
      case SCALES.CLOSE_APPROACH:
      case SCALES.PLANETS:
      case SCALES.HABITABILITY:
      case SCALES.BLACK_HOLES:
        this.controls.minDistance = 2;
        this.controls.maxDistance = 1500;
        if (targetObj) {
          this.trackingObject = targetObj;
        }
        break;
    }

    this.scaleChangeCallbacks.forEach(cb => cb(newScale, targetObj));
  }

  setFocusTarget(targetObj) {
    this.trackingObject = targetObj;
  }

  update() {
    // If tracking a moving planet, moon, or spacecraft, smoothly update controls.target
    if (this.trackingObject && (this.cameraMode === CAMERA_MODES.FOLLOW || this.cameraMode === CAMERA_MODES.ORBIT || this.cameraMode === CAMERA_MODES.PLANET)) {
      const worldPos = new THREE.Vector3();
      this.trackingObject.getWorldPosition(worldPos);

      // Smoothly update controls.target without jarring snapping
      this.controls.target.lerp(worldPos, 0.15);
    }
  }
}
