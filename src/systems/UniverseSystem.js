import * as THREE from 'three';
import {
  GALAXIES_DATA,
  BLACK_HOLES_DATA,
  PULSARS_DATA,
  NEBULAE_DATA,
  PROBES_DATA
} from '../data/celestialData.js';
import { Galaxy } from '../components/Galaxy.js';
import { BlackHole } from '../components/BlackHole.js';
import { Pulsar, Nebula } from '../components/Pulsar.js';
import { Wormhole } from '../components/Wormhole.js';
import { CosmicWeb } from '../components/CosmicWeb.js';
import { Multiverse } from '../components/Multiverse.js';

/**
 * Universe Scene Graph
 * Contains Deep Space Galaxies, Supermassive Black Holes, Pulsars, Nebulae, Probes,
 * Cosmic Web structure, Hypothetical Wormholes, and Multiverse Inflation Bubbles.
 */
export class UniverseSystem {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'universe_root';
    this.scene.add(this.group);

    this.galaxies = [];
    this.blackHoles = [];
    this.pulsars = [];
    this.nebulae = [];
    this.probes = [];
    this.wormholes = [];
    this.cosmicWeb = null;
    this.multiverse = null;

    this.buildUniverse();
  }

  buildUniverse() {
    // 0a. Multiverse Bubble Universes
    this.multiverse = new Multiverse();
    this.group.add(this.multiverse.group);

    // 0b. Cosmic Web & CMB Shell
    this.cosmicWeb = new CosmicWeb();
    this.group.add(this.cosmicWeb.group);

    // 0c. Hypothetical Wormhole
    const wormhole = new Wormhole({
      id: 'wormhole-alpha',
      name: 'Einstein-Rosen Bridge (Wormhole)',
      position: [15000, 3500, -12000],
      radius: 450,
      dataStatus: 'THEORETICAL / HYPOTHETICAL (NOT OBSERVED)'
    });
    this.group.add(wormhole.group);
    this.wormholes.push({
      id: 'wormhole-alpha',
      data: wormhole.data,
      instance: wormhole,
      group: wormhole.group
    });
    // 1. Galaxies
    GALAXIES_DATA.forEach((gData) => {
      const galaxy = new Galaxy(gData);
      this.group.add(galaxy.group);
      this.galaxies.push({
        id: gData.id,
        data: gData,
        instance: galaxy,
        group: galaxy.group
      });
    });

    // 2. Black Holes
    BLACK_HOLES_DATA.forEach((bhData) => {
      const blackHole = new BlackHole(bhData);
      this.group.add(blackHole.group);
      this.blackHoles.push({
        id: bhData.id,
        data: bhData,
        instance: blackHole,
        group: blackHole.group
      });
    });

    // 3. Pulsars
    PULSARS_DATA.forEach((pData) => {
      const pulsar = new Pulsar(pData);
      this.group.add(pulsar.group);
      this.pulsars.push({
        id: pData.id,
        data: pData,
        instance: pulsar,
        group: pulsar.group
      });
    });

    // 4. Nebulae
    NEBULAE_DATA.forEach((nData) => {
      const nebula = new Nebula(nData);
      this.group.add(nebula.group);
      this.nebulae.push({
        id: nData.id,
        data: nData,
        instance: nebula,
        group: nebula.group
      });
    });

    // 5. Deep Space Probes
    PROBES_DATA.forEach((prData) => {
      const probeGroup = new THREE.Group();
      probeGroup.name = `probe_${prData.id}`;
      probeGroup.position.set(...prData.position);
      probeGroup.userData = {
        type: 'probe',
        data: prData,
        name: prData.name,
        clickable: true
      };

      const bodyGeo = new THREE.CylinderGeometry(0.8, 1.2, 2.0, 8);
      const bodyMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.8, roughness: 0.2 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      probeGroup.add(body);

      const dishGeo = new THREE.ConeGeometry(2.2, 0.6, 16, 1, true);
      dishGeo.rotateX(Math.PI);
      const dishMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.9, roughness: 0.1 });
      const dish = new THREE.Mesh(dishGeo, dishMat);
      dish.position.y = 1.4;
      probeGroup.add(dish);

      const panelGeo = new THREE.BoxGeometry(4.0, 0.1, 1.5);
      const panelMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.9, roughness: 0.3 });
      const panel = new THREE.Mesh(panelGeo, panelMat);
      probeGroup.add(panel);

      this.group.add(probeGroup);
      this.probes.push({
        id: prData.id,
        data: prData,
        group: probeGroup
      });
    });
  }

  setScaleMode(scaleKey) {
    this.galaxies.forEach(g => {
      if (g.instance.setScaleMode) g.instance.setScaleMode(scaleKey);
    });
  }

  update(deltaSec, totalTime) {
    if (this.multiverse) {
      this.multiverse.update(deltaSec);
    }

    if (this.cosmicWeb) {
      this.cosmicWeb.update(deltaSec, totalTime);
    }

    this.wormholes.forEach(w => {
      if (w.instance.update) w.instance.update(deltaSec, totalTime);
    });

    this.galaxies.forEach(g => {
      if (g.instance.update) g.instance.update(deltaSec);
    });

    this.blackHoles.forEach(bh => {
      if (bh.instance.update) bh.instance.update(deltaSec, totalTime);
    });

    this.pulsars.forEach(p => {
      if (p.instance.update) p.instance.update(deltaSec, totalTime);
    });

    this.nebulae.forEach(n => {
      if (n.instance.update) n.instance.update(deltaSec);
    });

    this.probes.forEach(pr => {
      pr.group.rotation.y += 0.005 * deltaSec * 60;
    });
  }
}
