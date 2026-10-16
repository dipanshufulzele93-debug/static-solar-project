import * as THREE from 'three';
import { EarthShader, AtmosphereShader } from '../shaders/astroShaders.js';
import { textureGenerator } from '../utils/textureGenerator.js';
import { OrbitalMechanics } from '../systems/OrbitalMechanics.js';

/**
 * Multi-layer Earth Component
 * Includes:
 * 1. Surface with day/night shader based on Sun direction + subtle city night lights
 * 2. Rotating translucent cloud layer
 * 3. Atmospheric scattering rim glow shader (thin limb layer, depthWrite: false)
 * 4. The Moon (Luna) with accurate orbit
 */
export class EarthMesh {
  constructor(planetData) {
    this.data = planetData;
    this.group = new THREE.Group();
    this.group.name = 'planet_earth';
    this.group.userData = {
      type: 'planet',
      data: planetData,
      name: planetData.name,
      clickable: true
    };

    this.radius = planetData.visualRadius || 6.2;
    this.axialTiltRad = ((planetData.axialTilt || 23.44) * Math.PI) / 180;

    this.buildEarth();
    this.buildMoon();
  }

  buildEarth() {
    this.planetContainer = new THREE.Group();
    this.planetContainer.rotation.z = this.axialTiltRad;
    this.group.add(this.planetContainer);

    // 1. Surface Mesh with Day/Night custom shader
    const surfaceGeo = new THREE.SphereGeometry(this.radius, 64, 64);
    const dayTexture = textureGenerator.getEarthDayTexture();
    const nightTexture = textureGenerator.getEarthNightTexture();

    this.earthUniforms = {
      dayMap: { value: dayTexture },
      nightMap: { value: nightTexture },
      sunDirection: { value: new THREE.Vector3(0, 0, 0) } // Origin is the Sun
    };

    const surfaceMat = new THREE.ShaderMaterial({
      uniforms: this.earthUniforms,
      vertexShader: EarthShader.vertexShader,
      fragmentShader: EarthShader.fragmentShader
    });

    this.surfaceMesh = new THREE.Mesh(surfaceGeo, surfaceMat);
    this.surfaceMesh.castShadow = true;
    this.surfaceMesh.receiveShadow = true;
    this.planetContainer.add(this.surfaceMesh);

    // 2. Cloud Sphere (subtly above surface)
    const cloudGeo = new THREE.SphereGeometry(this.radius * 1.015, 48, 48);
    const cloudTexture = textureGenerator.getEarthCloudsTexture();
    const cloudMat = new THREE.MeshStandardMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.NormalBlending,
      roughness: 0.9,
      metalness: 0.0,
      depthWrite: false
    });

    this.cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
    this.planetContainer.add(this.cloudMesh);

    // 3. Thin Atmosphere Scattering Rim Glow (Thin realistic edge)
    const atmosGeo = new THREE.SphereGeometry(this.radius * 1.035, 32, 32);
    const atmosMat = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color('#4ea8de') },
        intensity: { value: 0.85 },
        power: { value: 4.0 }
      },
      vertexShader: AtmosphereShader.vertexShader,
      fragmentShader: AtmosphereShader.fragmentShader,
      side: THREE.BackSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.atmosMesh = new THREE.Mesh(atmosGeo, atmosMat);
    this.group.add(this.atmosMesh);
  }

  buildMoon() {
    if (!this.data.moons || this.data.moons.length === 0) return;
    const moonData = this.data.moons[0];

    this.moonGroup = new THREE.Group();
    this.moonGroup.name = 'moon_luna';
    this.moonGroup.userData = {
      type: 'moon',
      data: moonData,
      name: moonData.name,
      clickable: true
    };

    const moonGeo = new THREE.SphereGeometry(moonData.visualRadius || 1.6, 32, 32);
    const moonTex = textureGenerator.getRockyPlanetTexture('#b0b0b0', 0.8);
    const moonMat = new THREE.MeshStandardMaterial({
      map: moonTex,
      roughness: 0.85,
      metalness: 0.0
    });

    this.moonMesh = new THREE.Mesh(moonGeo, moonMat);
    this.moonMesh.castShadow = true;
    this.moonMesh.receiveShadow = true;
    this.moonGroup.add(this.moonMesh);

    this.group.add(this.moonGroup);

    // Orbit trail for moon
    const moonOrbitLine = OrbitalMechanics.createOrbitPath(moonData.orbitalRadius, 0.0549, 5.14, '#7fa8c9', 64);
    this.group.add(moonOrbitLine);
  }

  update(deltaSec, elapsedDays) {
    if (this.surfaceMesh) {
      this.surfaceMesh.rotation.y += 0.015 * deltaSec * 60;
    }
    if (this.cloudMesh) {
      this.cloudMesh.rotation.y += 0.018 * deltaSec * 60;
    }

    if (this.moonGroup && this.data.moons && this.data.moons.length > 0) {
      const moonData = this.data.moons[0];
      const moonPos = OrbitalMechanics.calculatePosition(
        moonData.orbitalRadius,
        0.0549,
        5.14,
        moonData.orbitalPeriodDays,
        elapsedDays
      );
      this.moonGroup.position.copy(moonPos);
      this.moonMesh.rotation.y += 0.005 * deltaSec * 60;
    }
  }
}
