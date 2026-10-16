import * as THREE from 'three';
import { COLOR_PALETTES } from '../../shared/constants.js';

/**
 * Multiverse 3D Component
 * Renders multiple distinct theoretical bubble universes spanning cosmic inflation space.
 * Clearly labeled: HYPOTHETICAL / THEORETICAL — NOT OBSERVED
 */
export class Multiverse {
  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'multiverse_realm';
    this.group.position.set(0, 120000, 180000);

    this.universes = [
      {
        id: 'observable-universe',
        name: 'Our Observable Universe',
        type: 'Standard Lambda-CDM Universe',
        position: [0, 0, 0],
        radius: 4500,
        palette: COLOR_PALETTES.COSMIC_WEB,
        dataStatus: 'CONFIRMED / REAL CATALOGUED',
        description: 'Our home cosmos containing ~2 trillion galaxies and 93 billion light-years diameter.',
        laws: 'Standard Model physics, c = 299,792 km/s, H₀ ≈ 67.4 km/s/Mpc'
      },
      {
        id: 'universe-bubble-alpha',
        name: 'Bubble Universe Alpha (High Dark Energy)',
        type: 'Theoretical Bubble Universe',
        position: [-16000, 4500, -8000],
        radius: 3800,
        palette: ['#4C1D95', '#EC4899', '#38BDF8'],
        dataStatus: 'THEORETICAL / HYPOTHETICAL (NOT OBSERVED)',
        description: 'A theoretical bubble where dark energy density is 10× higher, accelerating expansion rapidly.',
        laws: 'Accelerated cosmic inflation, matter sparsely distributed'
      },
      {
        id: 'universe-bubble-beta',
        name: 'Domain Beta (Compact Gravity Realm)',
        type: 'Hypothetical High-G Universe',
        position: [18000, -3500, -10000],
        radius: 3200,
        palette: ['#065F46', '#10B981', '#F59E0B'],
        dataStatus: 'THEORETICAL / HYPOTHETICAL (NOT OBSERVED)',
        description: 'A theoretical universe model with a stronger gravitational constant G, producing hyper-dense stars.',
        laws: 'G is 4× stronger, shorter stellar lifespans'
      },
      {
        id: 'universe-bubble-gamma',
        name: 'Anti-De Sitter Bubble Gamma',
        type: 'Hypothetical Hyperbolic Universe',
        position: [9000, 12000, -18000],
        radius: 4000,
        palette: ['#1E1B4B', '#6366F1', '#A855F7'],
        dataStatus: 'THEORETICAL / HYPOTHETICAL (NOT OBSERVED)',
        description: 'A spacetime bubble with negative cosmological constant producing negative curvature.',
        laws: 'AdS/CFT duality theoretical testbed'
      },
      {
        id: 'universe-bubble-delta',
        name: 'Eternal Inflation Realm Delta',
        type: 'Primordial Inflationary Foam',
        position: [-12000, -10000, 12000],
        radius: 4200,
        palette: ['#7C2D12', '#EA580C', '#FDE047'],
        dataStatus: 'THEORETICAL / HYPOTHETICAL (NOT OBSERVED)',
        description: 'A pocket of perpetually inflating false vacuum continuously budding daughter universes.',
        laws: 'Eternal chaotic inflation (Guth-Linde model)'
      }
    ];

    this.bubbleMeshes = [];
    this.buildMultiverse();
  }

  buildMultiverse() {
    this.universes.forEach((uData) => {
      const bubbleGroup = new THREE.Group();
      bubbleGroup.name = `multiverse_${uData.id}`;
      bubbleGroup.position.set(...uData.position);
      bubbleGroup.userData = {
        type: 'multiverse_universe',
        data: uData,
        name: uData.name,
        clickable: true
      };

      const color1 = new THREE.Color(uData.palette[0]);
      const color2 = new THREE.Color(uData.palette[1]);
      const color3 = new THREE.Color(uData.palette[2] || '#ffffff');

      // 1. Outer Translucent Boundary Membrane
      const membraneGeo = new THREE.IcosahedronGeometry(uData.radius, 4);
      const membraneMat = new THREE.MeshStandardMaterial({
        color: color2,
        emissive: color1,
        emissiveIntensity: 0.35,
        transparent: true,
        opacity: 0.32,
        roughness: 0.2,
        metalness: 0.1,
        wireframe: false,
        side: THREE.DoubleSide
      });
      const membraneMesh = new THREE.Mesh(membraneGeo, membraneMat);
      bubbleGroup.add(membraneMesh);

      // 2. Wireframe Lattice Grid
      const wireMat = new THREE.MeshBasicMaterial({
        color: color3,
        wireframe: true,
        transparent: true,
        opacity: 0.18
      });
      const wireMesh = new THREE.Mesh(membraneGeo, wireMat);
      bubbleGroup.add(wireMesh);

      // 3. Interior Galaxy Cluster Swarm
      const pointCount = 1800;
      const pointPositions = new Float32Array(pointCount * 3);
      const pointColors = new Float32Array(pointCount * 3);

      for (let i = 0; i < pointCount; i++) {
        const r = Math.pow(Math.random(), 0.5) * (uData.radius * 0.85);
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.max(-1, Math.min(1, 2 * Math.random() - 1)));

        pointPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        pointPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pointPositions[i * 3 + 2] = r * Math.cos(phi);

        const mixColor = color1.clone().lerp(color3, Math.random());
        pointColors[i * 3] = mixColor.r;
        pointColors[i * 3 + 1] = mixColor.g;
        pointColors[i * 3 + 2] = mixColor.b;
      }

      const pointGeo = new THREE.BufferGeometry();
      pointGeo.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
      pointGeo.setAttribute('color', new THREE.BufferAttribute(pointColors, 3));

      const pointMat = new THREE.PointsMaterial({
        size: 32,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending
      });

      const clusterPoints = new THREE.Points(pointGeo, pointMat);
      bubbleGroup.add(clusterPoints);

      this.group.add(bubbleGroup);
      this.bubbleMeshes.push({
        group: bubbleGroup,
        membrane: membraneMesh,
        wire: wireMesh,
        clusters: clusterPoints,
        data: uData
      });
    });
  }

  update(deltaSec) {
    this.bubbleMeshes.forEach((b, idx) => {
      const speed = 0.04 * (idx % 2 === 0 ? 1 : -1);
      b.group.rotation.y += speed * deltaSec;
      b.membrane.rotation.x += speed * 0.5 * deltaSec;
    });
  }
}
