/**
 * SATURN RINGS
 * Creates a realistic multi-layered 3D ring system around Saturn.
 * Each layer uses RingGeometry with corrected UV mapping and DoubleSide rendering.
 */

const SaturnRings = (() => {

    function create(planetRadius) {
        const group = new THREE.Group();

        const layers = [
            { inner: 1.15, outer: 1.50, color: 0xB09870, opacity: 0.25, name: 'C Ring' },
            { inner: 1.52, outer: 1.95, color: 0xCCB090, opacity: 0.65, name: 'B Ring' },
            { inner: 1.97, outer: 2.30, color: 0xC0A080, opacity: 0.45, name: 'A Ring' },
            { inner: 2.34, outer: 2.50, color: 0x998866, opacity: 0.15, name: 'F Ring' },
            { inner: 2.80, outer: 3.00, color: 0x887766, opacity: 0.05, name: 'E Ring' },
        ];

        layers.forEach(layer => {
            const geo = new THREE.RingGeometry(
                planetRadius * layer.inner,
                planetRadius * layer.outer,
                160, 4
            );

            // Fix UVs so the texture (if any) maps radially
            const pos = geo.attributes.position;
            const uv  = geo.attributes.uv;
            const tmp = new THREE.Vector3();
            const outerR = planetRadius * layer.outer;
            for (let i = 0; i < pos.count; i++) {
                tmp.fromBufferAttribute(pos, i);
                uv.setXY(i, tmp.length() / outerR, 0);
            }
            uv.needsUpdate = true;

            const mat = new THREE.MeshBasicMaterial({
                color: layer.color,
                transparent: true,
                opacity: layer.opacity,
                side: THREE.DoubleSide,
                depthWrite: false,
                blending: THREE.NormalBlending,
            });

            const mesh = new THREE.Mesh(geo, mat);
            mesh.rotation.x = Math.PI / 2; // lay flat
            group.add(mesh);
        });

        return group;
    }

    return { create };
})();
