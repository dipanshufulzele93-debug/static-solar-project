import * as THREE from 'three';
import { audioSystem } from './AudioSystem.js';

/**
 * Raycaster & Pointer Interaction Engine
 * Detects hover and clicks on all multi-scale celestial bodies
 */
export class RaycasterSystem {
  constructor(camera, scene, domElement) {
    this.camera = camera;
    this.scene = scene;
    this.domElement = domElement;

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-1000, -1000);
    this.hoveredObject = null;
    this.onSelectCallback = null;
    this.onHoverCallback = null;

    this.setupListeners();
  }

  setupListeners() {
    this.domElement.addEventListener('mousemove', (e) => {
      const rect = this.domElement.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    });

    this.domElement.addEventListener('click', (e) => {
      // Ignore click if user was dragging OrbitControls
      if (this.hoveredObject && this.onSelectCallback) {
        audioSystem.playClick();
        this.onSelectCallback(this.hoveredObject);
      }
    });
  }

  onSelect(callback) {
    this.onSelectCallback = callback;
  }

  onHover(callback) {
    this.onHoverCallback = callback;
  }

  update() {
    if (this.mouse.x < -1 || this.mouse.x > 1 || this.mouse.y < -1 || this.mouse.y > 1) {
      return;
    }

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);

    let foundClickable = null;

    for (let i = 0; i < intersects.length; i++) {
      let obj = intersects[i].object;
      // Traverse up to find userData with clickable
      while (obj && obj !== this.scene) {
        if (obj.userData && obj.userData.clickable) {
          foundClickable = obj;
          break;
        }
        obj = obj.parent;
      }
      if (foundClickable) break;
    }

    if (foundClickable !== this.hoveredObject) {
      this.hoveredObject = foundClickable;
      this.domElement.style.cursor = foundClickable ? 'pointer' : 'default';

      if (this.onHoverCallback) {
        this.onHoverCallback(foundClickable);
      }
    }
  }
}
