/**
 * RAYCASTER
 * Mouse hover + click detection for planets.
 * Maintains a list of clickable objects (planet meshes).
 */

const RaycasterSystem = (() => {
    const raycaster = new THREE.Raycaster();
    const mouse     = new THREE.Vector2(-9999, -9999);
    let camera, renderer;
    let clickables = []; // THREE.Mesh list
    let hovered    = null;

    function init(cam, ren) {
        camera   = cam;
        renderer = ren;
    }

    function register(mesh) {
        if (!clickables.includes(mesh)) clickables.push(mesh);
    }

    function setMouse(event) {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x =  ((event.clientX - rect.left) / rect.width)  * 2 - 1;
        mouse.y = -((event.clientY - rect.top)  / rect.height) * 2 + 1;
    }

    /**
     * Called every frame. Returns the currently hovered planet key or null.
     */
    function updateHover() {
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(clickables, false);
        const newHover = hits.length ? hits[0].object.userData.planetKey : null;
        if (newHover !== hovered) {
            hovered = newHover;
        }
        return hovered;
    }

    /**
     * Click: returns planet key at current mouse position, or null.
     */
    function getClickTarget() {
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(clickables, false);
        return hits.length ? hits[0].object.userData.planetKey : null;
    }

    return { init, register, setMouse, updateHover, getClickTarget };
})();
