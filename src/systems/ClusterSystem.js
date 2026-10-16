import * as THREE from 'three';
import { CLUSTERS_DATA } from '../data/clusters.js';

/**
 * Star Clusters System
 * Generates 3D volumetric GPU star cluster clouds for Pleiades, Hyades, Omega Centauri, 47 Tucanae
 */
export class ClusterSystem {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'star_clusters_root';
    this.scene.add(this.group);

    this.clusters = [];
    this.buildClusters();
  }

  buildClusters() {
    CLUSTERS_DATA.forEach((clData) => {
      const clusterGroup = new THREE.Group();
      clusterGroup.name = `cluster_${clData.id}`;
      clusterGroup.position.set(...clData.position);
      clusterGroup.userData = {
        type: 'star_cluster',
        data: clData,
        name: clData.name,
        clickable: true
      };

      const count = clData.particleCount || 1000;
      const radius = clData.radius || 300;

      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);

      const baseColor = new THREE.Color(clData.color || '#a8d5ff');
      const coreColor = new THREE.Color(clData.coreColor || '#ffffff');

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        // King-model / Plummer-like cluster density falloff towards center
        const r = Math.pow(Math.random(), 2.2) * radius;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.max(-1, Math.min(1, 2 * Math.random() - 1)));

        positions[i3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = r * Math.cos(phi);
        positions[i3 + 2] = r * Math.sin(phi) * Math.sin(theta);

        const mixRatio = r / radius;
        const c = coreColor.clone().lerp(baseColor, mixRatio);
        colors[i3] = c.r;
        colors[i3 + 1] = c.g;
        colors[i3 + 2] = c.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      // Particle texture
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.3, 'rgba(200,230,255,0.8)');
      grad.addColorStop(0.8, 'rgba(120,180,255,0.15)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);

      const texture = new THREE.CanvasTexture(canvas);

      const material = new THREE.PointsMaterial({
        size: 5.5,
        map: texture,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      const points = new THREE.Points(geometry, material);
      clusterGroup.add(points);

      // Core glow
      const coreGeo = new THREE.SphereGeometry(radius * 0.15, 16, 16);
      const coreMat = new THREE.MeshBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      clusterGroup.add(coreMesh);

      this.group.add(clusterGroup);
      this.clusters.push({
        id: clData.id,
        data: clData,
        group: clusterGroup,
        points
      });
    });
  }

  update(deltaSec) {
    this.clusters.forEach(cl => {
      cl.points.rotation.y += 0.0003 * deltaSec * 60;
    });
  }
}
