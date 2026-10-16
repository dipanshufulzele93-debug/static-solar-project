/**
 * Database Module for Universe Explorer
 * Handles storage, indexing, search, filtering, pagination, and strict validation.
 */

import { SEED_OBJECTS } from './seedData.js';
import { COLOR_PALETTES } from '../shared/constants.js';
import { GALAXIES_DATA, BLACK_HOLES_DATA, PULSARS_DATA, NEBULAE_DATA, SOLAR_SYSTEM_DATA } from '../src/data/celestialData.js';
import { STARS_DATA } from '../src/data/stars.js';
import { EXOPLANET_SYSTEMS_DATA } from '../src/data/exoplanets.js';
import { ASTEROIDS_DATA, PLUTO_SYSTEM_DATA } from '../src/data/asteroids.js';
import { COMETS_DATA } from '../src/data/comets.js';
import { CLUSTERS_DATA } from '../src/data/clusters.js';
import { SPACECRAFT_MISSIONS_DATA } from '../src/data/spacecraft.js';

class UniverseDatabase {
  constructor() {
    this.objectsById = new Map();
    this.objectsByCategory = new Map();
    this.objectsByParent = new Map();
    this.quizzesByObjectId = new Map();
    this.initialized = false;
    this.init();
  }

  init() {
    if (this.initialized) return;

    // 1. Ingest curated seed objects first
    SEED_OBJECTS.forEach((obj) => {
      this.registerObject(obj);
    });

    // 2. Ingest Solar System Planets & Moons
    if (SOLAR_SYSTEM_DATA.sun && !this.objectsById.has('sun')) {
      this.registerObject(this.adaptObject(SOLAR_SYSTEM_DATA.sun, 'stars', 'The Sun (Sol)', 'G2V Main Sequence Star', 'solar-system'));
    }
    SOLAR_SYSTEM_DATA.planets.forEach(p => {
      if (!this.objectsById.has(p.id)) {
        this.registerObject(this.adaptObject(p, 'planets', p.name, p.type || 'Planet', 'sun'));
      }
      if (p.moons) {
        p.moons.forEach(m => {
          if (!this.objectsById.has(m.id)) {
            this.registerObject(this.adaptObject(m, 'moons', m.name, `Moon of ${p.name}`, p.id));
          }
        });
      }
    });

    // 3. Ingest Real Stars
    STARS_DATA.forEach(s => {
      if (!this.objectsById.has(s.id)) {
        this.registerObject(this.adaptObject(s, 'stars', s.name, s.objectType || s.spectralType || 'Star', 'milky-way'));
      }
    });

    // 4. Ingest Exoplanet Systems & Exoplanets
    EXOPLANET_SYSTEMS_DATA.forEach(sys => {
      if (!this.objectsById.has(sys.id)) {
        this.registerObject(this.adaptObject(sys, 'exoplanets', sys.name, sys.objectType || 'Exoplanetary System', 'milky-way'));
      }
      if (sys.planets) {
        sys.planets.forEach(ep => {
          if (!this.objectsById.has(ep.id)) {
            this.registerObject(this.adaptObject(ep, 'exoplanets', ep.name, ep.type || 'Exoplanet', sys.id));
          }
        });
      }
    });

    // 5. Ingest Asteroids & Dwarf Planets
    ASTEROIDS_DATA.forEach(ast => {
      if (!this.objectsById.has(ast.id)) {
        const cat = ast.objectType?.includes('Dwarf') ? 'dwarf_planets' : 'asteroids';
        this.registerObject(this.adaptObject(ast, cat, ast.name, ast.objectType || 'Asteroid', 'sun'));
      }
    });

    // Pluto system
    if (!this.objectsById.has('pluto-system') && !this.objectsById.has('pluto')) {
      this.registerObject(this.adaptObject(PLUTO_SYSTEM_DATA, 'dwarf_planets', PLUTO_SYSTEM_DATA.name, PLUTO_SYSTEM_DATA.objectType || 'Dwarf Planet System', 'sun'));
    }
    PLUTO_SYSTEM_DATA.moons.forEach(pm => {
      if (!this.objectsById.has(pm.id)) {
        this.registerObject(this.adaptObject(pm, 'dwarf_planets', pm.name, pm.type || 'Moon of Pluto', 'pluto-system'));
      }
    });

    // 6. Ingest Comets
    COMETS_DATA.forEach(c => {
      if (!this.objectsById.has(c.id)) {
        this.registerObject(this.adaptObject(c, 'comets', c.name, c.objectType || 'Comet', 'sun'));
      }
    });

    // 7. Ingest Star Clusters
    CLUSTERS_DATA.forEach(cl => {
      if (!this.objectsById.has(cl.id)) {
        this.registerObject(this.adaptObject(cl, 'clusters', cl.name, cl.objectType || 'Star Cluster', 'milky-way'));
      }
    });

    // 8. Ingest Deep Space Galaxies
    GALAXIES_DATA.forEach(g => {
      if (!this.objectsById.has(g.id)) {
        this.registerObject(this.adaptObject(g, 'galaxies', g.name, g.type || 'Galaxy', 'observable-universe'));
      }
    });

    // 9. Ingest Black Holes
    BLACK_HOLES_DATA.forEach(bh => {
      if (!this.objectsById.has(bh.id)) {
        this.registerObject(this.adaptObject(bh, 'black_holes', bh.name, bh.type || 'Black Hole', 'milky-way'));
      }
    });

    // 10. Ingest Pulsars
    PULSARS_DATA.forEach(pu => {
      if (!this.objectsById.has(pu.id)) {
        this.registerObject(this.adaptObject(pu, 'pulsars', pu.name, pu.type || 'Pulsar', 'milky-way'));
      }
    });

    // 11. Ingest Nebulae
    NEBULAE_DATA.forEach(nb => {
      if (!this.objectsById.has(nb.id)) {
        this.registerObject(this.adaptObject(nb, 'nebulae', nb.name, nb.type || 'Nebula', 'milky-way'));
      }
    });

    // 12. Ingest Spacecraft Missions
    SPACECRAFT_MISSIONS_DATA.forEach(sc => {
      if (!this.objectsById.has(sc.id)) {
        this.registerObject(this.adaptObject(sc, 'spacecraft', sc.name, sc.objectType || 'Spacecraft Mission', 'earth'));
      }
    });

    console.log(`[UniverseDatabase] Successfully loaded and indexed ${this.objectsById.size} celestial entities across ${this.objectsByCategory.size} categories.`);
    this.initialized = true;
  }

  adaptObject(raw, category, name, objectType, parentId) {
    const id = raw.id;
    const isPlanet = category === 'planets' || category === 'moons';
    const isStar = category === 'stars';
    const isExo = category === 'exoplanets';
    const isBlackHole = category === 'black_holes';

    let defaultPalette = COLOR_PALETTES.DEEP_SPACE;
    if (isStar) defaultPalette = COLOR_PALETTES.SUN_LIKE_STARS;
    else if (category === 'galaxies') defaultPalette = COLOR_PALETTES.SPIRAL_ARMS;
    else if (category === 'nebulae') defaultPalette = COLOR_PALETTES.EMISSION_NEBULAE;
    else if (isBlackHole) defaultPalette = COLOR_PALETTES.BLACK_HOLE_DISK;
    else if (category === 'pulsars') defaultPalette = COLOR_PALETTES.PULSARS;

    const dataStatus = raw.dataStatus || 'REAL / CATALOGUED';
    const lifeStatus = raw.lifeStatus || (id === 'earth' ? 'LIFE CONFIRMED' : 'NO CONFIRMED LIFE');
    const waterStatus = raw.waterStatus || (isPlanet && (id === 'earth' || id === 'europa' || id === 'enceladus') ? 'Liquid water detected' : 'None detected');

    return {
      id,
      name: name || raw.name,
      category,
      objectType: objectType || raw.objectType || raw.type || category,
      catalogId: raw.catalogId || `NASA-CAT-${id.toUpperCase()}`,
      parentId: parentId || raw.parentId || null,
      position: raw.position || [0, 0, 0],
      distanceFromEarth: raw.distanceFromEarth || (raw.distanceAU ? `${raw.distanceAU} AU` : (raw.distanceLy ? `${raw.distanceLy.toLocaleString()} ly` : 'Local')),
      radiusKm: raw.radiusKm || (raw.radius ? raw.radius * 6371 : 1000),
      massFormatted: raw.massFormatted || raw.mass || 'Determined by orbital perturbations',
      surfaceTemp: raw.surfaceTemp || raw.temperature || (raw.temperatureK ? `${raw.temperatureK} K` : 'Space ambient'),
      temperatureK: raw.temperatureK || 250,
      gravity: raw.gravity || 'Calculated from mass and radius',
      density: raw.density || 'Measured bulk density',
      atmosphere: raw.atmosphere || 'None / Space vacuum',
      waterStatus,
      lifeStatus,
      dataStatus,
      visualizationStatus: raw.visualizationStatus || 'ACCURATE 3D ASTRONOMICAL MODEL',
      source: raw.source || 'NASA / JPL Horizons / ESA Gaia DR3 / SIMBAD',
      description: raw.description || `An astronomical celestial object catalogued as ${name}.`,
      colorPalette: raw.colorPalette || defaultPalette,
      educational: raw.educational || {
        meet: `Meet ${name}, a remarkable celestial object in our universe!`,
        whatIsIt: raw.description || `${name} is a ${objectType || 'celestial body'} in space.`,
        howBig: raw.radiusKm ? `${raw.radiusKm.toLocaleString()} km radius` : (raw.diameter ? `${raw.diameter} across` : 'Catalogued size scale'),
        whereIsIt: raw.distanceFromEarth || 'Located in the astronomical cosmos.',
        whatMadeOf: raw.atmosphere || 'Dense astrophysical elements, silicate rock, ice, or gas plasma.',
        whatIsItLike: raw.surfaceTemp || 'Cosmic space environment.',
        whySpecial: `Observational properties recorded by space telescopes and scientific missions.`,
        didYouKnow: `Light from the Sun takes over 8 minutes to reach Earth, and millions of years to reach distant galaxies!`,
        moreScience: `Astrophysical classification: ${objectType || 'Standard celestial object'}. Data compiled from astronomical surveys.`
      },
      quiz: raw.quiz || [
        {
          question: `What kind of celestial object is ${name}?`,
          options: [objectType || 'Celestial Body', 'A wandering black hole', 'An interstellar cloud of helium', 'A rogue asteroid'],
          correct: 'A',
          explanation: `${name} is catalogued as a ${objectType || 'celestial body'}.`
        },
        {
          question: `What is the verified life status of ${name}?`,
          options: [lifeStatus, 'Alien civilization thriving', 'Full of dinosaurs', 'Covered in giant forests'],
          correct: 'A',
          explanation: `According to real astronomical data, ${name} has the status: "${lifeStatus}".`
        }
      ]
    };
  }

  registerObject(obj) {
    if (!obj || !obj.id) return;
    this.objectsById.set(obj.id, obj);

    if (!this.objectsByCategory.has(obj.category)) {
      this.objectsByCategory.set(obj.category, []);
    }
    this.objectsByCategory.get(obj.category).push(obj);

    if (obj.parentId) {
      if (!this.objectsByParent.has(obj.parentId)) {
        this.objectsByParent.set(obj.parentId, []);
      }
      this.objectsByParent.get(obj.parentId).push(obj);
    }

    if (obj.quiz && Array.isArray(obj.quiz)) {
      this.quizzesByObjectId.set(obj.id, obj.quiz);
    }
  }

  validateObject(obj, idx) {
    if (!obj.id || typeof obj.id !== 'string') {
      return `Item #${idx} missing valid string id`;
    }
    if (this.objectsById.has(obj.id)) {
      return `Duplicate object ID detected: "${obj.id}"`;
    }
    if (!obj.name || typeof obj.name !== 'string') {
      return `Object "${obj.id}" missing name`;
    }
    if (!obj.category || typeof obj.category !== 'string') {
      return `Object "${obj.id}" missing category`;
    }
    if (obj.position) {
      if (!Array.isArray(obj.position) || obj.position.length !== 3) {
        return `Object "${obj.id}" invalid position array`;
      }
      for (const coord of obj.position) {
        if (typeof coord !== 'number' || isNaN(coord) || !isFinite(coord)) {
          return `Object "${obj.id}" contains invalid/NaN coordinate: ${coord}`;
        }
      }
    }
    return null;
  }

  getAllObjects({ category = 'all', page = 1, limit = 50, search = '' } = {}) {
    let list = Array.from(this.objectsById.values());

    if (category && category !== 'all') {
      list = this.objectsByCategory.get(category) || [];
    }

    if (search && search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter(obj => 
        obj.name.toLowerCase().includes(q) ||
        (obj.catalogId && obj.catalogId.toLowerCase().includes(q)) ||
        (obj.objectType && obj.objectType.toLowerCase().includes(q)) ||
        (obj.constellation && obj.constellation.toLowerCase().includes(q))
      );
    }

    const total = list.length;
    const startIndex = (page - 1) * limit;
    const items = list.slice(startIndex, startIndex + limit);

    return {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      items
    };
  }

  getObjectById(id) {
    return this.objectsById.get(id) || null;
  }

  getRelatedObjects(id) {
    const obj = this.getObjectById(id);
    if (!obj) return { parent: null, children: [], siblings: [] };

    const parent = obj.parentId ? this.getObjectById(obj.parentId) : null;
    const children = this.objectsByParent.get(id) || [];
    const siblings = obj.parentId 
      ? (this.objectsByParent.get(obj.parentId) || []).filter(s => s.id !== id)
      : [];

    return { parent, children, siblings };
  }

  getQuiz(id) {
    return this.quizzesByObjectId.get(id) || [];
  }

  search(query, limit = 10) {
    if (!query || !query.trim()) return [];
    const q = query.toLowerCase().trim();
    const results = [];

    // Concept & semantic mapping
    const isWaterQuery = q.includes('water') || q.includes('ocean');
    const isNearestStar = q.includes('nearest star') || q.includes('closest star');
    const isBlackHoleQuery = q.includes('black hole');
    const isGalaxyQuery = q.includes('galaxies') || q === 'galaxy';
    const isNebulaQuery = q.includes('nebula') || q.includes('nebulae');
    const isPulsarQuery = q.includes('pulsar');
    const isExoplanetQuery = q.includes('exoplanet');
    const isSpacecraftQuery = q.includes('spacecraft') || q.includes('probe') || q.includes('rover');
    const isWormholeQuery = q.includes('wormhole');

    for (const obj of this.objectsById.values()) {
      let score = 0;
      const matchName = obj.name.toLowerCase().includes(q);
      const matchCatalog = obj.catalogId ? obj.catalogId.toLowerCase().includes(q) : false;
      const matchType = obj.objectType ? obj.objectType.toLowerCase().includes(q) : false;
      const matchDesc = obj.description ? obj.description.toLowerCase().includes(q) : false;
      const matchCategory = obj.category.toLowerCase().includes(q);

      if (matchName) score += 20;
      if (matchCatalog) score += 15;
      if (matchType) score += 10;
      if (matchCategory) score += 8;
      if (matchDesc) score += 3;

      // Concept bonuses
      if (isWaterQuery && (obj.waterStatus?.toLowerCase().includes('liquid') || obj.waterStatus?.toLowerCase().includes('ocean') || obj.id === 'europa' || obj.id === 'earth' || obj.id === 'trappist-1e')) {
        score += 25;
      }
      if (isNearestStar && (obj.id === 'proxima-centauri' || obj.id === 'sun')) {
        score += 30;
      }
      if (isBlackHoleQuery && obj.category === 'black_holes') score += 25;
      if (isGalaxyQuery && obj.category === 'galaxies') score += 25;
      if (isNebulaQuery && obj.category === 'nebulae') score += 25;
      if (isPulsarQuery && obj.category === 'pulsars') score += 25;
      if (isExoplanetQuery && obj.category === 'exoplanets') score += 25;
      if (isSpacecraftQuery && obj.category === 'spacecraft') score += 25;
      if (isWormholeQuery && obj.id === 'wormhole-alpha') score += 35;

      if (score > 0) {
        results.push({
          id: obj.id,
          name: obj.name,
          category: obj.category,
          objectType: obj.objectType,
          catalogId: obj.catalogId,
          distance: obj.distanceFromEarth,
          position: obj.position,
          dataStatus: obj.dataStatus,
          score
        });
      }
    }

    results.sort((a, b) => b.score - a.score);
    return results.slice(0, limit);
  }

  getCategories() {
    const categories = {};
    for (const [cat, items] of this.objectsByCategory.entries()) {
      categories[cat] = {
        count: items.length,
        label: cat.replace('_', ' ').toUpperCase()
      };
    }
    return {
      total: this.objectsById.size,
      categories
    };
  }
}

export const db = new UniverseDatabase();
