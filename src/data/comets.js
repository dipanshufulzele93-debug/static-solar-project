/**
 * Real Named Comets Dataset
 * Astronomical data from NASA JPL Solar System Dynamics / Minor Planet Center
 */

export const COMETS_DATA = [
  {
    id: 'halley',
    name: "1P/Halley (Halley's Comet)",
    catalogId: '1P/Halley',
    objectType: 'Periodic Comet (Halley-Type)',
    status: 'REAL CATALOGUED OBJECT',
    visualizationStatus: 'SCIENTIFIC 3D COMET WITH DUST & ION TAILS',
    semiMajorAxis: 280,
    eccentricity: 0.967,
    inclination: 17.8, // Retrograde orbit
    periodDays: 75.3 * 365.25,
    perihelionAU: '0.586 AU',
    aphelionAU: '35.1 AU (Beyond Neptune)',
    nucleusDiameterKm: '15 × 8 × 8 km (Peanut shaped)',
    discoveryYear: 'Recorded since 240 BCE / 1705 (Edmond Halley prediction)',
    nextPerihelion: 'July 28, 2061',
    description: 'The most famous periodic comet, returning to the inner Solar System every 75–76 years. Its dark nucleus expels volatile gas and dust jets creating glowing tails spanning millions of kilometers.',
    source: 'NASA JPL Small-Body Database / ESA Giotto Mission',
    color: '#00e5ff'
  },
  {
    id: 'hale-bopp',
    name: 'C/1995 O1 (Hale-Bopp)',
    catalogId: 'C/1995 O1',
    objectType: 'Long-Period Giant Comet ("The Great Comet of 1997")',
    status: 'REAL CATALOGUED OBJECT',
    visualizationStatus: 'SCIENTIFIC 3D COMET WITH DUST & ION TAILS',
    semiMajorAxis: 460,
    eccentricity: 0.995,
    inclination: 89.4, // Near-vertical polar orbit
    periodDays: 2533 * 365.25,
    perihelionAU: '0.914 AU',
    aphelionAU: '370.8 AU',
    nucleusDiameterKm: '~60 km (Colossal nucleus)',
    discoveryYear: '1995 (Alan Hale & Thomas Bopp)',
    description: 'One of the brightest comets in modern history, visible to the naked eye for a record-breaking 18 months in 1996–1997 with vivid blue gas and white curved dust tails.',
    source: 'NASA JPL / ESO',
    color: '#38bdf8'
  },
  {
    id: '67p',
    name: '67P/Churyumov–Gerasimenko',
    catalogId: '67P/C-G',
    objectType: 'Jupiter-Family Contact Binary Comet',
    status: 'REAL CATALOGUED OBJECT',
    visualizationStatus: 'ROSETTA MISSION RECONSTRUCTED NUCLEUS',
    semiMajorAxis: 245,
    eccentricity: 0.641,
    inclination: 7.04,
    periodDays: 6.44 * 365.25,
    perihelionAU: '1.24 AU',
    aphelionAU: '5.68 AU',
    nucleusDiameterKm: '4.1 × 3.3 × 1.8 km (Rubber duck shape)',
    discoveryYear: '1969 (Klim Churyumov & Svetlana Gerasimenko)',
    description: 'The famous target of ESA’s historic Rosetta orbiter and Philae lander (2014–2016), discovering a dual-lobed contact binary structure, organic macromolecules, and molecular oxygen.',
    source: 'ESA Rosetta Mission / Nature (2014)',
    color: '#a7f3d0'
  }
];
