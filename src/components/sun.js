/**
 * SUN COMPONENT
 * Creates the animated Sun mesh, corona glow layers, and point light.
 */

const SunComponent = (() => {
    let sunMesh, sunGlows = [], sunMat;
    let time = 0;

    function create(scene) {
        const data = PLANET_DATA.sun;

        // ── Main sphere with animated GLSL shader ──────────────────────────────
        const geo  = new THREE.SphereGeometry(data.radius, 64, 32);
        sunMat = new THREE.ShaderMaterial({
            uniforms: { time: { value: 0 } },
            vertexShader:   Shaders.SUN_VERT,
            fragmentShader: Shaders.SUN_FRAG,
        });
        sunMesh = new THREE.Mesh(geo, sunMat);
        sunMesh.userData.planetKey = 'sun';
        sunMesh.renderOrder = 0;
        scene.add(sunMesh);

        // ── Multi-layer corona glows ───────────────────────────────────────────
        const glowDefs = [
            { scale: 1.25, color: 0xFFCC22, opacity: 0.12 },
            { scale: 1.60, color: 0xFF8800, opacity: 0.07 },
            { scale: 2.20, color: 0xFF4400, opacity: 0.035 },
        ];
        glowDefs.forEach(def => {
            const gGeo = new THREE.SphereGeometry(data.radius * def.scale, 32, 16);
            const gMat = new THREE.MeshBasicMaterial({
                color: def.color,
                transparent: true,
                opacity: def.opacity,
                side: THREE.BackSide,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
            });
            const gMesh = new THREE.Mesh(gGeo, gMat);
            scene.add(gMesh);
            sunGlows.push(gMesh);
        });

        // ── Point light (primary illumination for all planets) ─────────────────
        const sunLight = new THREE.PointLight(0xFFEECC, 3.0, 0, 0);
        scene.add(sunLight);

        // ── Soft ambient for deep-space visibility ─────────────────────────────
        const ambient = new THREE.AmbientLight(0x0a0f1f, 1.0);
        scene.add(ambient);

        return { sunMesh, sunLight };
    }

    function update(deltaSeconds, speedMult) {
        time += deltaSeconds * 0.5;
        if (sunMat) sunMat.uniforms.time.value = time;
        // Gentle glow pulse
        if (sunGlows.length) {
            const pulse = 0.9 + 0.1 * Math.sin(time * 0.8);
            sunGlows.forEach((g, i) => {
                g.material.opacity = [0.12, 0.07, 0.035][i] * pulse;
            });
        }
    }

    return { create, update };
})();
