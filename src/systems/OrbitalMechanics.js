import * as THREE from 'three';

/**
 * Orbital Mechanics Engine
 * Implements Keplerian orbital elements:
 * a: semi-major axis
 * e: eccentricity
 * i: inclination (degrees)
 * P: orbital period (days)
 * Solves Kepler's Equation M = E - e*sin(E) using Newton-Raphson iteration
 */
export class OrbitalMechanics {
  /**
   * Solves Kepler's Equation for Eccentric Anomaly E
   * @param {number} M - Mean anomaly (radians)
   * @param {number} e - Eccentricity (0 to 1)
   * @returns {number} E - Eccentric Anomaly (radians)
   */
  static solveKepler(M, e) {
    let E = M;
    for (let i = 0; i < 6; i++) {
      const f = E - e * Math.sin(E) - M;
      const fPrime = 1 - e * Math.cos(E);
      const delta = f / fPrime;
      E -= delta;
      if (Math.abs(delta) < 1e-6) break;
    }
    return E;
  }

  /**
   * Computes 3D position from Keplerian elements
   * @param {number} a - Semi-major axis
   * @param {number} e - Eccentricity
   * @param {number} incDeg - Inclination in degrees
   * @param {number} periodDays - Orbital period in days
   * @param {number} elapsedDays - Time in simulation days
   * @param {number} initialPhase - Initial angle offset (radians)
   * @returns {THREE.Vector3}
   */
  static calculatePosition(a, e, incDeg, periodDays, elapsedDays, initialPhase = 0) {
    if (periodDays === 0) return new THREE.Vector3(0, 0, 0);

    const meanMotion = (2 * Math.PI) / periodDays;
    const M = (meanMotion * elapsedDays + initialPhase) % (2 * Math.PI);
    const E = this.solveKepler(M, e);

    // Orbital plane coordinates (P, Q)
    const xOrb = a * (Math.cos(E) - e);
    const zOrb = a * Math.sqrt(1 - e * e) * Math.sin(E);

    // Apply inclination rotation around X-axis
    const incRad = (incDeg * Math.PI) / 180;
    const x = xOrb;
    const y = -zOrb * Math.sin(incRad);
    const z = zOrb * Math.cos(incRad);

    return new THREE.Vector3(x, y, z);
  }

  /**
   * Generates a 3D line geometry for the elliptical orbit path
   * @param {number} a - Semi-major axis
   * @param {number} e - Eccentricity
   * @param {number} incDeg - Inclination in degrees
   * @param {string} colorHex - Orbit line color
   * @param {number} segments - Number of segments in ellipse
   * @returns {THREE.Line}
   */
  static createOrbitPath(a, e, incDeg, colorHex = '#4a7299', segments = 128) {
    const points = [];
    const incRad = (incDeg * Math.PI) / 180;

    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const r = (a * (1 - e * e)) / (1 + e * Math.cos(theta));
      const xOrb = r * Math.cos(theta);
      const zOrb = r * Math.sin(theta);

      const x = xOrb;
      const y = -zOrb * Math.sin(incRad);
      const z = zOrb * Math.cos(incRad);
      points.push(new THREE.Vector3(x, y, z));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(colorHex),
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const line = new THREE.Line(geometry, material);
    line.name = 'orbit_path';
    return line;
  }
}
