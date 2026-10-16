import * as THREE from 'three';
import { SCALES, GALAXIES_DATA, BLACK_HOLES_DATA, PULSARS_DATA, NEBULAE_DATA, SOLAR_SYSTEM_DATA } from './data/celestialData.js';
import { STARS_DATA } from './data/stars.js';
import { EXOPLANET_SYSTEMS_DATA } from './data/exoplanets.js';
import { ASTEROIDS_DATA, PLUTO_SYSTEM_DATA } from './data/asteroids.js';
import { COMETS_DATA } from './data/comets.js';
import { CLUSTERS_DATA } from './data/clusters.js';
import { SPACECRAFT_MISSIONS_DATA } from './data/spacecraft.js';
import { objectRegistry } from './data/ObjectRegistry.js';

import { SceneManager } from './systems/SceneManager.js';
import { SimClock } from './systems/SimClock.js';
import { StarField } from './effects/StarField.js';
import { SolarSystem } from './systems/SolarSystem.js';
import { UniverseSystem } from './systems/UniverseSystem.js';
import { StarSystems } from './systems/StarSystems.js';
import { AsteroidCatalog } from './systems/AsteroidCatalog.js';
import { ClusterSystem } from './systems/ClusterSystem.js';
import { SpacecraftFleet } from './systems/SpacecraftFleet.js';
import { Spacecraft } from './components/Spacecraft.js';
import { WarpEffect } from './effects/WarpEffect.js';
import { NavigationSystem } from './systems/NavigationSystem.js';
import { TravelSystem } from './systems/TravelSystem.js';
import { RaycasterSystem } from './systems/RaycasterSystem.js';
import { FreeFlyController } from './camera/controls.js';
import { HUD } from './ui/HUD.js';
import { UIManager } from './ui/UIManager.js';
import { CatalogUI } from './ui/CatalogUI.js';

export class App {
  constructor() {
    console.log('[App] Step 0: container & clock');
    this.container = document.getElementById('canvas-container');
    this.simClock = new SimClock();

    // 1. Scene & Rendering Core
    console.log('[App] Step 1: SceneManager');
    this.sceneManager = new SceneManager(this.container);
    this.scene = this.sceneManager.scene;
    this.camera = this.sceneManager.camera;
    this.controls = this.sceneManager.controls;

    // 2. Cosmic Background & Effects
    console.log('[App] Step 2: StarField & Warp');
    this.starField = new StarField(18000, 90000);
    this.scene.add(this.starField.group);

    this.warpEffect = new WarpEffect(this.camera, 1200);
    this.scene.add(this.warpEffect.group);

    // 3. Multi-scale Astronomical Systems
    console.log('[App] Step 3.1: SolarSystem');
    this.solarSystem = new SolarSystem(this.scene);
    console.log('[App] Step 3.2: UniverseSystem');
    this.universeSystem = new UniverseSystem(this.scene);
    console.log('[App] Step 3.3: StarSystems');
    this.starSystems = new StarSystems(this.scene);
    console.log('[App] Step 3.4: AsteroidCatalog');
    this.asteroidCatalog = new AsteroidCatalog(this.scene);
    console.log('[App] Step 3.5: ClusterSystem');
    this.clusterSystem = new ClusterSystem(this.scene);
    console.log('[App] Step 3.6: SpacecraftFleet');
    this.spacecraftFleet = new SpacecraftFleet(this.scene);

    // 4. Spacecraft Player Vessel
    console.log('[App] Step 4: Spacecraft');
    this.spacecraft = new Spacecraft(this.camera);
    this.scene.add(this.spacecraft.group);
    this.spacecraft.group.visible = false;

    // 5. Navigation & Autopilot Travel
    console.log('[App] Step 5: Navigation & Travel');
    this.navSystem = new NavigationSystem(this.camera, this.controls);
    this.travelSystem = new TravelSystem(this.camera, this.controls, this.warpEffect);

    // 6. Free-Fly 6-DOF WASD/QE Camera Controller
    console.log('[App] Step 6: FreeFlyController');
    this.freeFlyController = new FreeFlyController(this.camera, this.controls, this.container);
    this.freeFlyController.onUserInterrupt = () => {
      if (this.travelSystem.isTravelling) {
        this.travelSystem.cancel();
      }
    };

    // 7. Raycaster
    console.log('[App] Step 7: RaycasterSystem');
    this.raycasterSystem = new RaycasterSystem(this.camera, this.scene, this.sceneManager.renderer.domElement);

    // 8. 3D Selection Target Ring
    console.log('[App] Step 8: Selection Ring');
    this.buildSelectionIndicator();

    // 9. HUD & UI Controllers
    console.log('[App] Step 9: HUD & UI');
    this.hud = new HUD();
    this.catalogUI = new CatalogUI(this);
    this.ui = new UIManager(this);

    this.discoveredObjects = new Set();
    this.totalTime = 0;
    this.selectedTargetObject = null;

    this.setupInteractionHandlers();

    // Default start at Solar System scale directly without initial flight delay
    this.camera.position.set(0, 380, 720);
    this.controls.target.set(0, 0, 0);
    this.navSystem.setScale(SCALES.SOLAR_SYSTEM);
    this.universeSystem.setScaleMode(SCALES.SOLAR_SYSTEM);
    this.ui.updateScaleUI(SCALES.SOLAR_SYSTEM);
    this.ui.updateBreadcrumb(SCALES.SOLAR_SYSTEM);
    console.log('[App] Finished constructor successfully!');
  }

  buildSelectionIndicator() {
    const ringGeo = new THREE.RingGeometry(1.2, 1.35, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    this.selectionRing = new THREE.Mesh(ringGeo, ringMat);
    this.selectionRing.rotation.x = Math.PI / 2;
    this.selectionRing.visible = false;
    this.scene.add(this.selectionRing);
  }

  setupInteractionHandlers() {
    this.raycasterSystem.onSelect((obj) => {
      const data = obj.userData?.data;
      if (data) {
        this.selectObject(data, obj);
      }
    });

    this.raycasterSystem.onHover((obj) => {
      if (obj && obj.userData?.name) {
        this.ui.showTooltip(`${obj.userData.name} (${obj.userData.type || ''})`, window.event?.clientX, window.event?.clientY);
      } else {
        this.ui.showTooltip(null);
      }
    });
  }

  selectObject(data, objMesh = null) {
    this.selectedTargetObject = objMesh || this.findMeshForData(data);
    this.ui.showInfoPanel(data);
    this.ui.updateBreadcrumb(this.navSystem.currentScale, data.name);

    if (this.selectionRing && this.selectedTargetObject) {
      const visualR = data.visualRadius || data.eventHorizonSize || (data.radius ? data.radius * 0.05 : 8);
      this.selectionRing.scale.setScalar(visualR * 1.5);
      this.selectionRing.visible = true;
    }

    if (!this.discoveredObjects.has(data.id || data.name)) {
      this.discoveredObjects.add(data.id || data.name);
      this.ui.showToast(data.name, `New discovery logged: ${data.objectType || data.type || 'Celestial Body'}`);
    }
  }

  findMeshForData(data) {
    if (!data) return null;
    if (data.id === 'sun') return this.solarSystem.sun.group;

    // Solar system planets
    const pEntry = this.solarSystem.getPlanetById(data.id);
    if (pEntry) return pEntry.group;

    // Real stars
    const sEntry = this.starSystems.stars.find(s => s.id === data.id);
    if (sEntry) return sEntry.group;

    // Exoplanet systems & exoplanets
    const exoSys = this.starSystems.exoplanetSystems.find(sys => sys.id === data.id || sys.id === data.parentSystemId);
    if (exoSys) {
      if (data.parentSystemId) {
        const ep = exoSys.planets.find(p => p.data.id === data.id);
        if (ep) return ep.group;
      }
      return exoSys.group;
    }

    // Asteroids & Pluto
    const astEntry = this.asteroidCatalog.asteroids.find(a => a.id === data.id);
    if (astEntry) return astEntry.group;
    if (data.id === 'pluto-system' || data.id === 'pluto') return this.asteroidCatalog.plutoGroup;

    // Comets
    const cometEntry = this.asteroidCatalog.comets.find(c => c.id === data.id);
    if (cometEntry) return cometEntry.instance.group;

    // Clusters
    const clEntry = this.clusterSystem.clusters.find(c => c.id === data.id);
    if (clEntry) return clEntry.group;

    // Spacecraft
    const scEntry = this.spacecraftFleet.spacecraft.find(sc => sc.id === data.id);
    if (scEntry) return scEntry.group;

    // Wormholes
    const whEntry = this.universeSystem.wormholes.find(w => w.id === data.id);
    if (whEntry) return whEntry.group;

    // Multiverse bubbles
    if (this.universeSystem.multiverse) {
      const mb = this.universeSystem.multiverse.bubbleMeshes.find(b => b.data.id === data.id);
      if (mb) return mb.group;
    }

    // Cosmic Web & CMB
    if (data.id === 'cosmic-web' && this.universeSystem.cosmicWeb) return this.universeSystem.cosmicWeb.points;
    if (data.id === 'cmb' && this.universeSystem.cosmicWeb) return this.universeSystem.cosmicWeb.cmbMesh;

    // Galaxies, Black holes, Pulsars, Nebulae
    const gEntry = this.universeSystem.galaxies.find(g => g.id === data.id);
    if (gEntry) return gEntry.group;
    const bhEntry = this.universeSystem.blackHoles.find(b => b.id === data.id);
    if (bhEntry) return bhEntry.group;
    const puEntry = this.universeSystem.pulsars.find(p => p.id === data.id);
    if (puEntry) return puEntry.group;
    const nbEntry = this.universeSystem.nebulae.find(n => n.id === data.id);
    if (nbEntry) return nbEntry.group;

    return null;
  }

  flyToObject(data) {
    const worldPos = new THREE.Vector3();
    const targetMesh = this.findMeshForData(data);

    if (targetMesh) {
      targetMesh.getWorldPosition(worldPos);
    } else if (data.position) {
      worldPos.set(...data.position);
    }

    // Determine target scale & camera distance
    const visualR = data.visualRadius || data.eventHorizonSize || (data.radius ? data.radius * 0.08 : 10);
    const distOffset = Math.max(12, visualR * 4.2 + 10);

    let camPos;
    if (data.id === 'sun' || worldPos.lengthSq() < 10) {
      camPos = new THREE.Vector3(0, 50, 160);
      this.navSystem.setScale(SCALES.PLANET_ORBIT, targetMesh);
    } else {
      // Approach from Sunlit / illuminated side
      const centerToTarget = worldPos.clone().normalize();
      const sideOffset = new THREE.Vector3(-centerToTarget.z, 0.4, centerToTarget.x).normalize();
      const approachDir = centerToTarget.clone().multiplyScalar(0.7).add(sideOffset.multiplyScalar(0.7)).normalize();
      camPos = worldPos.clone().add(approachDir.multiplyScalar(distOffset));
      this.navSystem.setScale(SCALES.PLANET_ORBIT, targetMesh);
    }

    this.travelSystem.flyTo(camPos, worldPos, targetMesh, 2.2);
  }

  switchScale(scaleKey) {
    this.navSystem.setScale(scaleKey);
    this.universeSystem.setScaleMode(scaleKey);
    this.ui.updateScaleUI(scaleKey);
    this.ui.updateBreadcrumb(scaleKey);

    if (this.selectionRing && (scaleKey === SCALES.UNIVERSE || scaleKey === SCALES.MULTIVERSE || scaleKey === SCALES.SOLAR_SYSTEM)) {
      this.selectionRing.visible = false;
    }

    switch (scaleKey) {
      case SCALES.MULTIVERSE:
        this.travelSystem.flyTo(new THREE.Vector3(0, 140000, 220000), new THREE.Vector3(0, 120000, 180000), null, 2.8);
        this.ui.showToast('Multiverse Inflation Realm', 'THEORETICAL — Exploring hypothetical bubble universes spanning cosmic inflation space.');
        break;

      case 'WORMHOLE':
        const wh = this.universeSystem.wormholes[0];
        if (wh) {
          this.selectObject(wh.data);
          this.flyToObject(wh.data);
          this.ui.showToast('Hypothetical Wormhole', 'HYPOTHETICAL — Einstein-Rosen Bridge spacetime shortcut (Not observed).');
        }
        break;

      case 'COSMIC_WEB':
      case SCALES.UNIVERSE:
        this.travelSystem.flyTo(new THREE.Vector3(0, 45000, 75000), new THREE.Vector3(0, 0, 0), null, 2.8);
        break;

      case SCALES.GALAXIES:
        this.travelSystem.flyTo(new THREE.Vector3(30000, 18000, 40000), new THREE.Vector3(0, -4500, -22000), null, 2.6);
        this.ui.showToast('Local Group Galaxies', 'Navigating Milky Way, Andromeda, Triangulum, and Magellanic Clouds.');
        break;

      case SCALES.MILKY_WAY:
      case SCALES.GALAXY:
        this.travelSystem.flyTo(new THREE.Vector3(0, 6500, 11000), new THREE.Vector3(0, -4500, -22000), null, 2.5);
        break;

      case SCALES.SOLAR_SYSTEM:
        this.travelSystem.flyTo(new THREE.Vector3(0, 380, 720), new THREE.Vector3(0, 0, 0), null, 2.2);
        break;

      case SCALES.PLANETS:
      case SCALES.PLANET_ORBIT:
        this.selectPlanet('earth');
        break;

      case SCALES.HABITABILITY:
        const europa = objectRegistry.get('europa');
        if (europa) {
          this.selectObject(europa.raw);
          this.flyToObject(europa.raw);
          this.ui.showToast('Ocean Worlds', 'Europa: Subsurface liquid water ocean beneath icy crust.');
        }
        break;

      case SCALES.BLACK_HOLES:
        const sgrA = objectRegistry.get('sagittarius-a');
        if (sgrA) {
          this.selectObject(sgrA.raw);
          this.flyToObject(sgrA.raw);
          this.ui.showToast('Black Hole Physics', 'Sagittarius A*: Relativistic accretion disk & gravitational lensing.');
        }
        break;

      case SCALES.SPACECRAFT:
        const voyager = objectRegistry.get('voyager-1');
        if (voyager) {
          this.selectObject(voyager.raw);
          this.flyToObject(voyager.raw);
          this.ui.showToast('Interstellar Probe', 'Voyager 1: Most distant human-made object at >160 AU.');
        }
        break;

      case SCALES.LEARNING:
        this.selectPlanet('earth');
        this.ui.showToast('Class 5–10 Learning', 'Explore Earth, take the Quick Quiz, and compare worlds!');
        break;
    }
  }

  selectSun() {
    this.selectObject(SOLAR_SYSTEM_DATA.sun);
    this.flyToObject(SOLAR_SYSTEM_DATA.sun);
  }

  selectPlanet(id) {
    const entry = objectRegistry.get(id);
    if (entry) {
      this.selectObject(entry.raw);
      this.flyToObject(entry.raw);
    }
  }

  toggleFlightMode() {
    const active = !this.spacecraft.flightModeActive;
    this.spacecraft.setFlightMode(active);

    if (active) {
      this.controls.enabled = false;
      this.hud.show();
      const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
      this.spacecraft.group.position.copy(this.camera.position).addScaledVector(forward, 25);
      this.spacecraft.group.quaternion.copy(this.camera.quaternion);
      this.spacecraft.velocity.set(0, 0, 0);
    } else {
      this.controls.enabled = true;
      this.hud.hide();
    }

    if (this.ui.toggleFlightBtn) {
      this.ui.toggleFlightBtn.classList.toggle('active', active);
      this.ui.toggleFlightBtn.textContent = active ? '🚀 Exit Spacecraft (F)' : '🚀 Spacecraft Mode (F)';
    }
  }

  update() {
    const clockInfo = this.simClock.update();
    const deltaSec = clockInfo.deltaSeconds;
    this.totalTime += deltaSec;

    // 1. Update Celestial Systems
    this.solarSystem.update(deltaSec, clockInfo.elapsedSimDays, this.totalTime);
    this.universeSystem.update(deltaSec, this.totalTime);
    this.starSystems.update(deltaSec, clockInfo.elapsedSimDays, this.totalTime);
    this.asteroidCatalog.update(deltaSec, clockInfo.elapsedSimDays);
    this.clusterSystem.update(deltaSec);
    this.spacecraftFleet.update(deltaSec);

    // 2. Selection Ring Tracking
    if (this.selectionRing && this.selectionRing.visible && this.selectedTargetObject) {
      const targetPos = new THREE.Vector3();
      this.selectedTargetObject.getWorldPosition(targetPos);
      this.selectionRing.position.copy(targetPos);
      this.selectionRing.rotation.z += 0.015 * deltaSec * 60;
    }

    // 3. Update Controls and Camera
    if (this.spacecraft.flightModeActive) {
      this.spacecraft.update(deltaSec);
      const telemetry = this.spacecraft.getTelemetry();
      this.hud.update(telemetry, this.controls.target, this.camera);
    } else {
      this.freeFlyController.update(deltaSec);
      this.controls.update();
      this.navSystem.update();
    }

    // 4. Update Travel Autopilot & Effects
    this.travelSystem.update(deltaSec);
    this.warpEffect.update(deltaSec);

    // 5. Update Raycaster Hover Detection
    this.raycasterSystem.update();

    // 6. Update UI Time
    this.ui.updateTimeDisplay(clockInfo);

    // 7. Render Frame
    this.sceneManager.render();
  }
}
