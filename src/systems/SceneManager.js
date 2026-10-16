import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Scene Manager
 * Controls WebGLRenderer with modern color management (sRGB), ACESFilmic tone mapping,
 * balanced ambient & directional lighting, PerspectiveCamera, and OrbitControls.
 */
export class SceneManager {
  constructor(container) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x010206);

    // Dynamic camera setup
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      300000
    );
    this.camera.position.set(0, 220, 520);

    // Renderer setup with modern color space and ACESFilmic ToneMapping
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      logarithmicDepthBuffer: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.appendChild(this.renderer.domElement);

    // OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.screenSpacePanning = false;
    this.controls.minDistance = 2;
    this.controls.maxDistance = 200000;
    this.controls.maxPolarAngle = Math.PI;

    // Environmental / Ambient lighting: ensures dark side of planets remains subtly readable without pitch black void
    this.ambientLight = new THREE.AmbientLight(0x283850, 0.55);
    this.scene.add(this.ambientLight);

    // Subtle cosmic hemisphere light (starlight from above, galactic dust bounce from below)
    this.hemiLight = new THREE.HemisphereLight(0x406085, 0x182030, 0.40);
    this.scene.add(this.hemiLight);

    // Window resize handler
    window.addEventListener('resize', () => this.onWindowResize());
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  setQuality(quality) {
    switch (quality) {
      case 'low':
        this.renderer.setPixelRatio(1.0);
        this.renderer.shadowMap.enabled = false;
        break;
      case 'medium':
        this.renderer.setPixelRatio(1.0);
        this.renderer.shadowMap.enabled = true;
        break;
      case 'high':
      case 'ultra':
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        break;
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
