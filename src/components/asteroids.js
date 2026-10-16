/**
 * ASTEROID BELT + KUIPER BELT
 * Uses InstancedMesh for GPU-efficient rendering of thousands of asteroids.
 * Each instance has randomised orbit radius, speed, phase, inclination, and scale.
 */

const Asteroids = (() => {
    let beltMesh, kuiperMesh;
    let beltData = [], kuiperData = [];
    const dummy = new THREE.Object3D();

    // ── Asteroid Belt (Mars – Jupiter) ────────────────────────────────────────
    function createBelt(scene) {
        const COUNT = 7000;
        const geo   = new THREE.IcosahedronGeometry(1, 0); // unit icosahedron
        const mat   = new THREE.MeshStandardMaterial({
            color: 0x8A8880,
            roughness: 0.95,
            metalness: 0.05,
        });

        beltMesh = new THREE.InstancedMesh(geo, mat, COUNT);
        beltMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        beltMesh.receiveShadow = false;
        beltMesh.castShadow    = false;

        const rMin = PLANET_DATA.mars.orbitRadius + 3;
        const rMax = PLANET_DATA.jupiter.orbitRadius - 4;

        for (let i = 0; i < COUNT; i++) {
            const angle   = Math.random() * Math.PI * 2;
            const radius  = rMin + Math.random() * (rMax - rMin);
            const yOff    = (Math.random() - 0.5) * 4;
            const scale   = (0.04 + Math.random() * 0.12);
            const speed   = 0.25 + Math.random() * 0.6;  // orbit speed factor (relative to Earth=1)
            const phase   = Math.random() * Math.PI * 2;
            const incl    = (Math.random() - 0.5) * 0.4; // slight inclination
            const rotX    = Math.random() * Math.PI * 2;
            const rotY    = Math.random() * Math.PI * 2;
            const rotZ    = Math.random() * Math.PI * 2;
            const spinRate = (Math.random() - 0.5) * 0.03; // per-frame spin

            beltData.push({ angle, radius, yOff, scale, speed, phase, incl, rotX, rotY, rotZ, spinRate });

            dummy.position.set(
                Math.cos(angle) * radius,
                yOff + Math.sin(incl) * radius * 0.05,
                Math.sin(angle) * radius
            );
            dummy.scale.setScalar(scale);
            dummy.rotation.set(rotX, rotY, rotZ);
            dummy.updateMatrix();
            beltMesh.setMatrixAt(i, dummy.matrix);
        }

        beltMesh.instanceMatrix.needsUpdate = true;
        scene.add(beltMesh);
        return beltMesh;
    }

    // ── Kuiper Belt (beyond Neptune) ─────────────────────────────────────────
    function createKuiper(scene) {
        const COUNT = 2500;
        const geo   = new THREE.IcosahedronGeometry(1, 0);
        const mat   = new THREE.MeshStandardMaterial({
            color: 0x706880,
            roughness: 0.9,
        });

        kuiperMesh = new THREE.InstancedMesh(geo, mat, COUNT);
        kuiperMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

        const rMin = PLANET_DATA.neptune.orbitRadius + 8;
        const rMax = rMin + 60;

        for (let i = 0; i < COUNT; i++) {
            const angle  = Math.random() * Math.PI * 2;
            const radius = rMin + Math.random() * (rMax - rMin);
            const yOff   = (Math.random() - 0.5) * 10;
            const scale  = (0.05 + Math.random() * 0.15);
            const speed  = 0.04 + Math.random() * 0.08;
            const phase  = Math.random() * Math.PI * 2;
            const spinRate = (Math.random() - 0.5) * 0.01;

            kuiperData.push({ angle, radius, yOff, scale, speed, phase, spinRate });

            dummy.position.set(Math.cos(angle) * radius, yOff, Math.sin(angle) * radius);
            dummy.scale.setScalar(scale);
            dummy.rotation.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, 0);
            dummy.updateMatrix();
            kuiperMesh.setMatrixAt(i, dummy.matrix);
        }
        kuiperMesh.instanceMatrix.needsUpdate = true;
        scene.add(kuiperMesh);
        return kuiperMesh;
    }

    // ── Per-frame update ──────────────────────────────────────────────────────
    function update(simTimeDays) {
        if (beltMesh) {
            const earthPeriod = PLANET_DATA.earth.orbitalPeriod;
            for (let i = 0; i < beltData.length; i++) {
                const a = beltData[i];
                // Angular velocity proportional to Earth's (simplified Kepler)
                const angle = a.phase + (simTimeDays / earthPeriod) * Math.PI * 2 * a.speed;
                dummy.position.set(
                    Math.cos(angle) * a.radius,
                    a.yOff + Math.sin(a.incl) * a.radius * 0.05,
                    Math.sin(angle) * a.radius
                );
                dummy.scale.setScalar(a.scale);
                dummy.rotation.set(a.rotX + simTimeDays * a.spinRate,
                                   a.rotY,
                                   a.rotZ);
                dummy.updateMatrix();
                beltMesh.setMatrixAt(i, dummy.matrix);
            }
            beltMesh.instanceMatrix.needsUpdate = true;
        }

        if (kuiperMesh) {
            const earthPeriod = PLANET_DATA.earth.orbitalPeriod;
            for (let i = 0; i < kuiperData.length; i++) {
                const a = kuiperData[i];
                const angle = a.phase + (simTimeDays / earthPeriod) * Math.PI * 2 * a.speed;
                dummy.position.set(Math.cos(angle) * a.radius, a.yOff, Math.sin(angle) * a.radius);
                dummy.scale.setScalar(a.scale);
                dummy.rotation.set(0, angle * 0.5, 0);
                dummy.updateMatrix();
                kuiperMesh.setMatrixAt(i, dummy.matrix);
            }
            kuiperMesh.instanceMatrix.needsUpdate = true;
        }
    }

    function setVisible(v) {
        if (beltMesh)   beltMesh.visible   = v;
        if (kuiperMesh) kuiperMesh.visible  = v;
    }

    return { createBelt, createKuiper, update, setVisible };
})();
