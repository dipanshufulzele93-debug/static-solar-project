/**
 * Shared scientific constants, scale keys, habitability states, and data accuracy labels.
 */

export const SCALES = {
  MULTIVERSE: 'MULTIVERSE',
  UNIVERSE: 'UNIVERSE',
  GALAXIES: 'GALAXIES',
  GALAXY: 'GALAXY',
  MILKY_WAY: 'MILKY_WAY',
  SOLAR_SYSTEM: 'SOLAR_SYSTEM',
  PLANETS: 'PLANETS',
  PLANET_ORBIT: 'PLANET_ORBIT',
  HABITABILITY: 'HABITABILITY',
  BLACK_HOLES: 'BLACK_HOLES',
  SPACECRAFT: 'SPACECRAFT',
  LEARNING: 'LEARNING',
  CLOSE_APPROACH: 'CLOSE_APPROACH'
};

export const DATA_STATUS = {
  REAL_CATALOGUED: 'REAL / CATALOGUED',
  OBSERVED: 'OBSERVED',
  INFERRED: 'INFERRED',
  ESTIMATED: 'ESTIMATED',
  UNKNOWN: 'UNKNOWN',
  THEORETICAL: 'THEORETICAL',
  PROCEDURAL_VISUALIZATION: 'PROCEDURAL VISUALIZATION',
  PHYSICS_INSPIRED: 'PHYSICS-INSPIRED VISUALIZATION'
};

export const LIFE_STATUS = {
  LIFE_CONFIRMED: 'LIFE CONFIRMED',
  NO_CONFIRMED_LIFE: 'NO CONFIRMED LIFE',
  POTENTIALLY_HABITABLE: 'POTENTIALLY HABITABLE',
  UNKNOWN: 'UNKNOWN',
  UNSUITABLE_FOR_KNOWN_LIFE: 'UNSUITABLE FOR KNOWN LIFE'
};

export const WATER_STATUS = {
  SURFACE_LIQUID: 'Surface liquid water oceans',
  ICE_SHEET: 'Surface water ice & frost',
  SUBSURFACE_OCEAN: 'Global subsurface ocean beneath ice crust',
  WATER_VAPOR: 'Atmospheric water vapor / steam clouds',
  HISTORICAL_EVIDENCE: 'Ancient dried riverbeds / mineral evidence',
  UNKNOWN: 'Unknown / Not detected',
  TRACE_OR_NONE: 'Trace water or none detected'
};

export const SCIENTIFIC_SOURCES = {
  NASA: 'NASA Planetary Data System (PDS)',
  NASA_JPL: 'NASA Jet Propulsion Laboratory (JPL Horizons)',
  NASA_EXOPLANET: 'NASA Exoplanet Archive (Caltech/IPAC)',
  ESA: 'European Space Agency (ESA / Gaia Mission DR3)',
  SIMBAD: 'SIMBAD Astronomical Database (Strasbourg CDS)',
  MPC: 'IAU Minor Planet Center (MPC)',
  EHT: 'Event Horizon Telescope Collaboration'
};

export const COLOR_PALETTES = {
  DEEP_SPACE: ['#000000', '#020617'],
  GALACTIC_DISK: ['#080A18', '#1E3A8A', '#312E81'],
  GALACTIC_BULGE: ['#2B0F0F', '#7C2D12', '#F59E0B'],
  SPIRAL_ARMS: ['#111827', '#2563EB', '#7DD3FC'],
  YOUNG_BLUE_STARS: ['#60A5FA', '#BFDBFE', '#FFFFFF'],
  SUN_LIKE_STARS: ['#FFF7CC', '#FDE68A', '#F59E0B'],
  RED_STARS: ['#7F1D1D', '#DC2626', '#FB7185'],
  EMISSION_NEBULAE: ['#DC2626', '#F97316', '#EC4899', '#7C3AED'],
  REFLECTION_NEBULAE: ['#1D4ED8', '#60A5FA', '#C4B5FD'],
  DARK_NEBULAE: ['#000000', '#111827'],
  GLOBULAR_CLUSTERS: ['#312E81', '#7C3AED', '#FDE68A'],
  PULSARS: ['#0EA5E9', '#67E8F9', '#FFFFFF'],
  MAGNETARS: ['#4C1D95', '#7C3AED', '#67E8F9'],
  WHITE_DWARFS: ['#CBD5E1', '#F8FAFC', '#FFFFFF'],
  BLACK_HOLE_DISK: ['#7C2D12', '#F59E0B', '#FFFFFF'],
  COSMIC_WEB: ['#020617', '#164E63', '#7C3AED'],
  WORMHOLE: ['#1E1B4B', '#9333EA', '#06B6D4', '#FFFFFF'],
  MULTIVERSE: ['#0F172A', '#6366F1', '#EC4899', '#38BDF8']
};
