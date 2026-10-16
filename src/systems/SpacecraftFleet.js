import * as THREE from 'three';
import { SPACECRAFT_MISSIONS_DATA } from '../data/spacecraft.js';

/**
 * Spacecraft Missions Fleet Engine
 * Generates tailored 3D models for Voyager 1 & 2, New Horizons, Pioneer 10/11, Cassini, Juno, OSIRIS-REx, JWST, Hubble.
 */
export class SpacecraftFleet {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'spacecraft_fleet_root';
    this.scene.add(this.group);

    this.spacecraft = [];
    this.buildFleet();
  }

  buildFleet() {
    SPACECRAFT_MISSIONS_DATA.forEach((scData) => {
      const craftGroup = new THREE.Group();
      craftGroup.name = `spacecraft_${scData.id}`;
      craftGroup.position.set(...scData.position);
      craftGroup.userData = {
        type: 'spacecraft',
        data: scData,
        name: scData.name,
        clickable: true
      };

      const scale = scData.visualScale || 1.0;

      if (scData.id === 'jwst') {
        // JWST: 5-layer kite sunshield + gold hexagonal primary mirror
        const shieldGeo = new THREE.BoxGeometry(6.0 * scale, 0.1, 3.5 * scale);
        const shieldMat = new THREE.MeshStandardMaterial({ color: 0x90a4ae, metalness: 0.8, roughness: 0.2 });
        const shield = new THREE.Mesh(shieldGeo, shieldMat);
        craftGroup.add(shield);

        const mirrorGeo = new THREE.CylinderGeometry(1.8 * scale, 1.8 * scale, 0.2, 6);
        mirrorGeo.rotateX(Math.PI / 3);
        const mirrorMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.95, roughness: 0.1 });
        const mirror = new THREE.Mesh(mirrorGeo, mirrorMat);
        mirror.position.set(0, 1.2 * scale, 0);
        craftGroup.add(mirror);
      } else if (scData.id === 'hubble') {
        // Hubble: Cylindrical silver tube + solar panels + aperture door
        const tubeGeo = new THREE.CylinderGeometry(0.8 * scale, 0.8 * scale, 3.5 * scale, 16);
        tubeGeo.rotateZ(Math.PI / 2);
        const tubeMat = new THREE.MeshStandardMaterial({ color: 0xd9e2ec, metalness: 0.85, roughness: 0.2 });
        const tube = new THREE.Mesh(tubeGeo, tubeMat);
        craftGroup.add(tube);

        const panelGeo = new THREE.BoxGeometry(0.1, 1.2 * scale, 4.2 * scale);
        const panelMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, metalness: 0.6, roughness: 0.3 });
        const panels = new THREE.Mesh(panelGeo, panelMat);
        craftGroup.add(panels);
      } else {
        // Voyager / Pioneer / Cassini deep space probe dish + bus
        const busGeo = new THREE.BoxGeometry(1.4 * scale, 1.0 * scale, 1.4 * scale);
        const busMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.7, roughness: 0.3 });
        const bus = new THREE.Mesh(busGeo, busMat);
        craftGroup.add(bus);

        const dishGeo = new THREE.ConeGeometry(2.4 * scale, 0.6 * scale, 24, 1, true);
        dishGeo.rotateX(Math.PI);
        const dishMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.8, roughness: 0.2 });
        const dish = new THREE.Mesh(dishGeo, dishMat);
        dish.position.y = 1.2 * scale;
        craftGroup.add(dish);

        // RTG Boom & Magnetometer boom
        const boomGeo = new THREE.CylinderGeometry(0.08, 0.08, 3.8 * scale, 8);
        boomGeo.rotateZ(Math.PI / 3);
        const boomMat = new THREE.MeshStandardMaterial({ color: 0x334155 });
        const boom = new THREE.Mesh(boomGeo, boomMat);
        boom.position.set(1.5 * scale, -0.4 * scale, 0);
        craftGroup.add(boom);
      }

      this.group.add(craftGroup);
      this.spacecraft.push({
        id: scData.id,
        data: scData,
        group: craftGroup
      });
    });
  }

  update(deltaSec) {
    this.spacecraft.forEach(sc => {
      sc.group.rotation.y += 0.005 * deltaSec * 60;
    });
  }
}
