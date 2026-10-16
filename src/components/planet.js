/**
 * PLANET FACTORY
 * Creates all planets (except Earth which has a custom shader).
 * Returns a planet object containing the scene group, body mesh, and axial-tilt mesh.
 */

const PlanetFactory = (() => {

    // Atmosphere colours keyed by planet
    const ATM_COLORS = {
        venus:   new THREE.Color(0xFFCC88),
        earth:   new THREE.Color(0x4488FF),
        mars:    new THREE.Color(0xFF6633),
        jupiter: new THREE.Color(0xCC9944),
        saturn:  new THREE.Color(0xDDCC88),
        uranus:  new THREE.Color(0x88DDDD),
        neptune: new THREE.Color(0x4466FF),
        moon:    null,
        mercury: null,
    };

    const ATM_STRENGTH = {
        venus: 1.8, earth: 1.2, mars: 0.5, jupiter: 0.7,
        saturn: 0.7, uranus: 0.9, neptune: 1.0,
    };

    // Retrieve or generate the texture for a planet key
    function getTexture(key) {
        switch (key) {
            case 'mercury': return TextureGen.mercury();
            case 'venus':   return TextureGen.venus();
            case 'mars':    return TextureGen.mars();
            case 'jupiter': return TextureGen.jupiter();
            case 'saturn':  return TextureGen.saturn();
            case 'uranus':  return TextureGen.uranus();
            case 'neptune': return TextureGen.neptune();
            case 'moon':    return TextureGen.moon();
            default:        return null;
        }
    }

    /**
     * Build a planet and add it to the scene.
     * Returns { bodyGroup, bodyMesh, orbitPivot }
     *   - orbitPivot: Group sitting at scene origin, rotated by inclination
     *   - bodyGroup:  Group positioned on the orbit ring
     *   - bodyMesh:   The actual Mesh (used for raycasting & rotation)
     */
    function create(key, scene) {
        const data = PLANET_DATA[key];
        if (!data) return null;

        // orbitPivot holds the whole orbit, tilted by inclination
        const orbitPivot = new THREE.Group();
        orbitPivot.rotation.x = THREE.MathUtils.degToRad(data.inclination || 0);
        scene.add(orbitPivot);

        // bodyGroup is placed along the orbit ring
        const bodyGroup = new THREE.Group();
        orbitPivot.add(bodyGroup);

        // ── Planet body ────────────────────────────────────────────────────────
        const geo = new THREE.SphereGeometry(data.radius, 64, 32);
        const tex = getTexture(key);

        const mat = new THREE.MeshStandardMaterial({
            map: tex,
            roughness: key === 'moon' ? 0.95 : 0.75,
            metalness: 0.0,
        });

        const bodyMesh = new THREE.Mesh(geo, mat);
        bodyMesh.userData.planetKey = key;
        // Axial tilt rotates around Z axis
        bodyMesh.rotation.z = THREE.MathUtils.degToRad(data.axialTilt || 0);
        bodyMesh.castShadow    = true;
        bodyMesh.receiveShadow = true;
        bodyGroup.add(bodyMesh);

        // ── Atmosphere glow ────────────────────────────────────────────────────
        const atmColor = ATM_COLORS[key];
        if (atmColor) {
            const atmGeo = new THREE.SphereGeometry(data.radius * 1.18, 32, 16);
            const atmMat = new THREE.ShaderMaterial({
                uniforms: {
                    atmoColor:    { value: atmColor },
                    atmoStrength: { value: ATM_STRENGTH[key] || 0.6 },
                },
                vertexShader:   Shaders.ATM_VERT,
                fragmentShader: Shaders.ATM_FRAG,
                transparent:    true,
                blending:       THREE.AdditiveBlending,
                side:           THREE.BackSide,
                depthWrite:     false,
            });
            bodyGroup.add(new THREE.Mesh(atmGeo, atmMat));
        }

        // ── Saturn's rings ─────────────────────────────────────────────────────
        if (key === 'saturn') {
            const rings = SaturnRings.create(data.radius);
            // Rings tilt with planet axial tilt
            rings.rotation.z = THREE.MathUtils.degToRad(data.axialTilt || 0);
            bodyGroup.add(rings);
        }

        return { bodyGroup, bodyMesh, orbitPivot };
    }

    return { create };
})();
