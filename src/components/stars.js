/**
 * STARFIELD
 * Creates a 15,000-point star cloud with varied sizes, colors, and depths.
 * Uses PointsMaterial with vertex colors.
 */

const Starfield = (() => {

    const STAR_COLORS = [
        [1.00, 0.95, 0.88], // warm white
        [0.85, 0.92, 1.00], // cool blue-white
        [1.00, 1.00, 1.00], // pure white
        [1.00, 0.85, 0.65], // orange giant
        [0.78, 0.85, 1.00], // blue
        [1.00, 0.97, 0.72], // yellow dwarf
    ];

    function create(scene) {
        const COUNT = 15000;
        const geo = new THREE.BufferGeometry();
        const pos  = new Float32Array(COUNT * 3);
        const col  = new Float32Array(COUNT * 3);
        const size = new Float32Array(COUNT);

        for (let i = 0; i < COUNT; i++) {
            // Uniform sphere distribution
            const r     = 1800 + Math.random() * 900;
            const theta = Math.acos(2 * Math.random() - 1);
            const phi   = Math.random() * Math.PI * 2;
            pos[i*3]   = r * Math.sin(theta) * Math.cos(phi);
            pos[i*3+1] = r * Math.sin(theta) * Math.sin(phi);
            pos[i*3+2] = r * Math.cos(theta);

            const c    = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
            const brig = 0.4 + Math.random() * 0.6;
            col[i*3]   = c[0] * brig;
            col[i*3+1] = c[1] * brig;
            col[i*3+2] = c[2] * brig;

            size[i] = Math.random() < 0.02 ? 3.5 : (Math.random() < 0.15 ? 2.0 : 1.0);
        }

        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));
        geo.setAttribute('size',     new THREE.BufferAttribute(size, 1));

        const mat = new THREE.PointsMaterial({
            size: 1.8,
            vertexColors: true,
            transparent: true,
            opacity: 0.92,
            sizeAttenuation: false,
            depthWrite: false,
        });

        const stars = new THREE.Points(geo, mat);
        scene.add(stars);
        return stars;
    }

    return { create };
})();
