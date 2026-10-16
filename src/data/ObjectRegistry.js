import { GALAXIES_DATA, BLACK_HOLES_DATA, PULSARS_DATA, NEBULAE_DATA, SOLAR_SYSTEM_DATA } from './celestialData.js';
import { STARS_DATA } from './stars.js';
import { EXOPLANET_SYSTEMS_DATA } from './exoplanets.js';
import { ASTEROIDS_DATA, PLUTO_SYSTEM_DATA } from './asteroids.js';
import { COMETS_DATA } from './comets.js';
import { CLUSTERS_DATA } from './clusters.js';
import { SPACECRAFT_MISSIONS_DATA } from './spacecraft.js';

/**
 * Unified Central Astronomical Registry
 * Provides indexing, fast searching, category filtering, and metadata lookup for all objects.
 */
class ObjectRegistry {
  constructor() {
    this.objectsById = new Map();
    this.objectsByCategory = {
      stars: [],
      planets: [],
      exoplanets: [],
      exoplanet_systems: [],
      asteroids: [],
      dwarf_planets: [],
      comets: [],
      clusters: [],
      galaxies: [],
      black_holes: [],
      pulsars: [],
      nebulae: [],
      spacecraft: []
    };
    this.allSearchableList = [];
    this.init();
  }

  init() {
    // 1. Solar System Sun & Planets
    this.register(SOLAR_SYSTEM_DATA.sun, 'stars', 'The Sun (Sol)', 'Star (Yellow Dwarf G2V)');
    SOLAR_SYSTEM_DATA.planets.forEach(p => {
      this.register(p, 'planets', p.name, p.type);
      if (p.moons) {
        p.moons.forEach(m => this.register(m, 'planets', m.name, `Moon of ${p.name}`));
      }
    });

    // 2. Real Stars
    STARS_DATA.forEach(s => this.register(s, 'stars', s.name, s.objectType || s.spectralType));

    // 3. Exoplanet Systems & Exoplanets
    EXOPLANET_SYSTEMS_DATA.forEach(sys => {
      this.register(sys, 'exoplanet_systems', sys.name, sys.objectType);
      if (sys.planets) {
        sys.planets.forEach(ep => {
          ep.parentSystemId = sys.id;
          ep.star = sys.star;
          this.register(ep, 'exoplanets', ep.name, ep.type);
        });
      }
    });

    // 4. Real Asteroids & Minor Planets
    ASTEROIDS_DATA.forEach(ast => {
      const cat = ast.objectType.includes('Dwarf Planet') ? 'dwarf_planets' : 'asteroids';
      this.register(ast, cat, ast.name, ast.objectType);
    });

    // Pluto system
    this.register(PLUTO_SYSTEM_DATA, 'dwarf_planets', PLUTO_SYSTEM_DATA.name, PLUTO_SYSTEM_DATA.objectType);
    PLUTO_SYSTEM_DATA.moons.forEach(pm => this.register(pm, 'dwarf_planets', pm.name, pm.type || 'Moon of Pluto'));

    // 5. Comets
    COMETS_DATA.forEach(c => this.register(c, 'comets', c.name, c.objectType));

    // 6. Star Clusters
    CLUSTERS_DATA.forEach(cl => this.register(cl, 'clusters', cl.name, cl.objectType));

    // 7. Galaxies
    GALAXIES_DATA.forEach(g => this.register(g, 'galaxies', g.name, g.type));

    // 8. Black Holes
    BLACK_HOLES_DATA.forEach(bh => this.register(bh, 'black_holes', bh.name, bh.type));

    // 9. Pulsars
    PULSARS_DATA.forEach(pu => this.register(pu, 'pulsars', pu.name, pu.type));

    // 10. Nebulae
    NEBULAE_DATA.forEach(nb => this.register(nb, 'nebulae', nb.name, nb.type));

    // 11. Spacecraft Missions
    SPACECRAFT_MISSIONS_DATA.forEach(sc => this.register(sc, 'spacecraft', sc.name, sc.objectType));
  }

  register(obj, category, name, type) {
    if (!obj || !obj.id) return;
    this.objectsById.set(obj.id, { raw: obj, category, name: name || obj.name, type: type || obj.type || category });

    if (this.objectsByCategory[category]) {
      this.objectsByCategory[category].push(obj);
    }

    this.allSearchableList.push({
      id: obj.id,
      name: name || obj.name,
      type: type || obj.type || category,
      category,
      raw: obj,
      distance: obj.distanceFromEarth || obj.distanceLy || (obj.distanceAU ? `${obj.distanceAU} AU` : (obj.location || 'Local'))
    });
  }

  get(id) {
    return this.objectsById.get(id);
  }

  getByCategory(category) {
    if (category === 'all') return this.allSearchableList;
    return this.objectsByCategory[category] || [];
  }

  search(query) {
    if (!query) return [];
    const q = query.toLowerCase().trim();
    return this.allSearchableList.filter(item => {
      return item.name.toLowerCase().includes(q) ||
             item.type.toLowerCase().includes(q) ||
             (item.raw.catalogId && item.raw.catalogId.toLowerCase().includes(q)) ||
             (item.raw.constellation && item.raw.constellation.toLowerCase().includes(q));
    });
  }

  getCounts() {
    return {
      all: this.allSearchableList.length,
      stars: (this.objectsByCategory.stars || []).length,
      planets: (this.objectsByCategory.planets || []).length,
      exoplanets: (this.objectsByCategory.exoplanets || []).length,
      exoplanet_systems: (this.objectsByCategory.exoplanet_systems || []).length,
      asteroids: (this.objectsByCategory.asteroids || []).length + (this.objectsByCategory.dwarf_planets || []).length,
      comets: (this.objectsByCategory.comets || []).length,
      clusters: (this.objectsByCategory.clusters || []).length,
      galaxies: (this.objectsByCategory.galaxies || []).length,
      black_holes: (this.objectsByCategory.black_holes || []).length,
      pulsars: (this.objectsByCategory.pulsars || []).length,
      nebulae: (this.objectsByCategory.nebulae || []).length,
      spacecraft: (this.objectsByCategory.spacecraft || []).length
    };
  }
}

export const objectRegistry = new ObjectRegistry();
