import * as THREE from 'three';
import { audioSystem } from './AudioSystem.js';

/**
 * Cinematic Autopilot & Intercept Travel System
 * Performs smooth, curved camera flights, warp transitions, and orbital docking
 */
export class TravelSystem {
  constructor(camera, controls, warpEffect) {
    this.camera = camera;
    this.controls = controls;
    this.warpEffect = warpEffect;

    this.isTravelling = false;
    this.travelProgress = 0;
    this.travelDuration = 2.5; // Seconds
    this.startCamPos = new THREE.Vector3();
    this.endCamPos = new THREE.Vector3();
    this.startLookAt = new THREE.Vector3();
    this.endLookAt = new THREE.Vector3();
    this.midPoint = new THREE.Vector3();
    this.targetObject = null;
    this.onArrivalCallback = null;
  }

  cancel() {
    if (!this.isTravelling) return;
    this.isTravelling = false;
    this.controls.enabled = true;
    if (this.warpEffect) this.warpEffect.setWarp(false);
  }

  flyTo(targetPosition, targetLookAt, targetObject = null, durationSec = 2.2, onArrival = null) {
    this.isTravelling = true;
    this.travelProgress = 0;
    this.travelDuration = durationSec;
    this.targetObject = targetObject;
    this.onArrivalCallback = onArrival;

    this.startCamPos.copy(this.camera.position);
    this.endCamPos.copy(targetPosition);

    this.startLookAt.copy(this.controls.target);
    this.endLookAt.copy(targetLookAt);

    // Calculate elevated midpoint for cinematic curved trajectory
    this.midPoint.addVectors(this.startCamPos, this.endCamPos).multiplyScalar(0.5);
    const flightDist = this.startCamPos.distanceTo(this.endCamPos);
    this.midPoint.y += flightDist * 0.25;

    // Trigger warp star-streak effect and audio if flight distance is long
    if (flightDist > 150) {
      if (this.warpEffect) this.warpEffect.setWarp(true);
      audioSystem.playWarpSound();
    }

    this.controls.enabled = false;
  }

  update(deltaSec) {
    if (!this.isTravelling) return;

    this.travelProgress += deltaSec / this.travelDuration;

    if (this.travelProgress >= 1.0) {
      // Arrival
      this.isTravelling = false;
      this.camera.position.copy(this.endCamPos);
      this.controls.target.copy(this.endLookAt);
      this.controls.enabled = true;

      if (this.warpEffect) this.warpEffect.setWarp(false);

      if (this.onArrivalCallback) {
        this.onArrivalCallback();
      }
      return;
    }

    // Smooth smoothstep ease
    const t = this.travelProgress;
    const easeT = t * t * (3 - 2 * t);

    // Quadratic Bezier interpolation for camera position
    const p0 = this.startCamPos;
    const p1 = this.midPoint;
    const p2 = this.endCamPos;

    // If target is moving, update p2 dynamically
    if (this.targetObject) {
      const currentTargetPos = new THREE.Vector3();
      this.targetObject.getWorldPosition(currentTargetPos);
      const offset = this.endCamPos.clone().sub(this.endLookAt);
      p2.copy(currentTargetPos.clone().add(offset));
      this.endLookAt.copy(currentTargetPos);
    }

    const currentPos = new THREE.Vector3()
      .addScaledVector(p0, (1 - easeT) * (1 - easeT))
      .addScaledVector(p1, 2 * (1 - easeT) * easeT)
      .addScaledVector(p2, easeT * easeT);

    this.camera.position.copy(currentPos);

    // Lerp look-at target
    const currentLookAt = new THREE.Vector3().lerpVectors(this.startLookAt, this.endLookAt, easeT);
    this.controls.target.copy(currentLookAt);
  }
}
