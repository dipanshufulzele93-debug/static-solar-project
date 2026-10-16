import * as THREE from 'three';

/**
 * Multi-depth Cosmic Starfield with realistic stellar brightness distribution
 * Layered into distant dim stars and subtle medium stars with spectral color temperatures
 */
export class StarField {
  constructor(starCount = 18000, radius = 90000) {
    this.group = new THREE.Group();
    this.group.name = 'starfield';

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const spectralColors = [
      new THREE.Color('#9bb0ff'), // Class O/B (Blue-white)
      new THREE.Color('#cad7ff'), // Class A (White)
      new THREE.Color('#f8f9ff'), // Class F (Yellow-white)
      new THREE.Color('#fff4e8'), // Class G (Yellow, Sun-like)
      new THREE.Color('#ffd2a1'), // Class K (Orange)
      new THREE.Color('#ffb070')  // Class M (Red dwarf)
    ];

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const r = radius * (0.35 + 0.65 * Math.cbrt(Math.random()));
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.cos(phi);
      positions[i3 + 2] = r * Math.sin(phi) * Math.sin(theta);

      const baseColor = spectralColors[Math.floor(Math.random() * spectralColors.length)];
      // Subtle brightness variation (80% dim stars, 20% medium stars)
      const brightness = Math.random() < 0.85 ? (0.25 + Math.random() * 0.35) : (0.65 + Math.random() * 0.35);

      colors[i3] = baseColor.r * brightness;
      colors[i3 + 1] = baseColor.g * brightness;
      colors[i3 + 2] = baseColor.b * brightness;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Star point texture with soft gaussian falloff
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.25, 'rgba(230,240,255,0.7)');
    grad.addColorStop(0.7, 'rgba(150,180,255,0.1)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 1.6,
      sizeAttenuation: false,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.points = new THREE.Points(geometry, material);
    this.group.add(this.points);
  }
}
