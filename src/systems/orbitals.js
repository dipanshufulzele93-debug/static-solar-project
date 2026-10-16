/**
 * ORBITAL MECHANICS ENGINE
 * Computes 3D positions for each body using simplified Keplerian circular orbits.
 * Inclinations are applied as tilts in the XZ plane.
 */

const Orbitals = (() => {
    /**
     * Compute angle (radians) for a body at simTime (days).
     * @param {number} periodDays - Orbital period in Earth days
     * @param {number} timeDays   - Elapsed simulation time in days
     * @param {number} phase      - Initial phase offset (radians)
     */
    function getAngle(periodDays, timeDays, phase = 0) {
        if (periodDays <= 0) return 0;
        return (timeDays / periodDays) * Math.PI * 2 + phase;
    }

    /**
     * Compute world position for a body orbiting the origin.
     * Inclination rotates the orbit plane around the X axis.
     */
    function getPosition(orbitRadius, angle, inclinationDeg) {
        const inc = THREE.MathUtils.degToRad(inclinationDeg || 0);
        const x = Math.cos(angle) * orbitRadius;
        const z = Math.sin(angle) * orbitRadius;
        // Inclination rotates around X axis (tilt the orbit plane)
        const y = Math.sin(inc) * z;
        const zFinal = Math.cos(inc) * z;
        return new THREE.Vector3(x, y, zFinal);
    }

    /**
     * Compute Moon's world position relative to Earth's current world position.
     */
    function getMoonPosition(earthWorldPos, moonData, timeDays) {
        const angle = getAngle(moonData.orbitalPeriod, timeDays, 0.7);
        const r = moonData.orbitRadius;
        const inc = THREE.MathUtils.degToRad(moonData.inclination || 5.14);
        const x = Math.cos(angle) * r;
        const z = Math.sin(angle) * r;
        const y = Math.sin(inc) * z;
        const zFinal = Math.cos(inc) * z;
        return earthWorldPos.clone().add(new THREE.Vector3(x, y, zFinal));
    }

    /**
     * Get the self-rotation angle for a planet's axial spin.
     * rotationPeriodDays: negative means retrograde.
     */
    function getRotationY(rotationPeriodDays, timeDays) {
        if (rotationPeriodDays === 0) return 0;
        return (timeDays / Math.abs(rotationPeriodDays)) * Math.PI * 2 * Math.sign(rotationPeriodDays) * (-1);
    }

    return { getAngle, getPosition, getMoonPosition, getRotationY };
})();
