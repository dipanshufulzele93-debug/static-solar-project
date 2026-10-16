/**
 * EARTH COMPONENT
 * Earth uses a custom GLSL shader for day/night blending, clouds, and city lights.
 * Separate mesh for cloud layer with independent rotation.
 */

const EarthComponent = (() => {

    let earthBodyMesh, cloudMesh;
    let earthMat, cloudOffset = 0;

    function create(scene) {
        const data = PLANET_DATA.earth;

        // Orbit pivot (inclination = 0 for Earth)
        const orbitPivot = new THREE.Group();
        scene.add(orbitPivot);

        const bodyGroup = new THREE.Group();
        orbitPivot.add(bodyGroup);

        // ── Generate textures ──────────────────────────────────────────────────
        const dayMap   = TextureGen.earthDay();
        const nightMap = TextureGen.earthNight();
        const cloudMap = TextureGen.earthClouds();

        // ── Earth sphere with day/night GLSL shader ────────────────────────────
        const geo = new THREE.SphereGeometry(data.radius, 64, 32);
        earthMat  = new THREE.ShaderMaterial({
            uniforms: {
                dayMap:      { value: dayMap },
                nightMap:    { value: nightMap },
                cloudMap:    { value: cloudMap },
                sunPos:      { value: new THREE.Vector3(0, 0, 0) },
                cloudOffset: { value: 0.0 },
            },
            vertexShader:   Shaders.EARTH_VERT,
            fragmentShader: Shaders.EARTH_FRAG,
        });

        earthBodyMesh = new THREE.Mesh(geo, earthMat);
        earthBodyMesh.userData.planetKey = 'earth';
        earthBodyMesh.rotation.z = THREE.MathUtils.degToRad(data.axialTilt);
        earthBodyMesh.castShadow    = true;
        earthBodyMesh.receiveShadow = true;
        bodyGroup.add(earthBodyMesh);

        // ── Atmosphere glow ────────────────────────────────────────────────────
        const atmGeo = new THREE.SphereGeometry(data.radius * 1.18, 32, 16);
        const atmMat = new THREE.ShaderMaterial({
            uniforms: {
                atmoColor:    { value: new THREE.Color(0x4499FF) },
                atmoStrength: { value: 1.3 },
            },
            vertexShader:   Shaders.ATM_VERT,
            fragmentShader: Shaders.ATM_FRAG,
            transparent:    true,
            blending:       THREE.AdditiveBlending,
            side:           THREE.BackSide,
            depthWrite:     false,
        });
        bodyGroup.add(new THREE.Mesh(atmGeo, atmMat));

        return { bodyGroup, bodyMesh: earthBodyMesh, orbitPivot };
    }

    function update(deltaSeconds, speedMult) {
        // Cloud layer drifts slowly
        cloudOffset += deltaSeconds * 0.00005 * speedMult;
        if (earthMat) {
            earthMat.uniforms.cloudOffset.value = cloudOffset % 1.0;
        }
    }

    function setSunPosition(worldPos) {
        if (earthMat) earthMat.uniforms.sunPos.value.copy(worldPos);
    }

    return { create, update, setSunPosition };
})();
