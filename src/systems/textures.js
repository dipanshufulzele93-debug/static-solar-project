/**
 * PROCEDURAL TEXTURE GENERATORS
 * All planet surfaces are generated on HTML5 Canvas — no external images needed.
 * Textures are created once during init and reused.
 */

const TextureGen = (() => {

    // ── Noise helpers ──────────────────────────────────────────────────────────
    function hash(x, y, seed) {
        let n = Math.sin(x * 127.1 + y * 311.7 + seed * 74.3) * 43758.5453;
        return n - Math.floor(n);
    }

    function smoothNoise(x, y, seed) {
        const ix = Math.floor(x), iy = Math.floor(y);
        const fx = x - ix, fy = y - iy;
        const ux = fx * fx * (3 - 2 * fx);
        const uy = fy * fy * (3 - 2 * fy);
        const h00 = hash(ix, iy, seed);
        const h10 = hash(ix + 1, iy, seed);
        const h01 = hash(ix, iy + 1, seed);
        const h11 = hash(ix + 1, iy + 1, seed);
        return (h00 * (1 - ux) + h10 * ux) * (1 - uy) + (h01 * (1 - ux) + h11 * ux) * uy;
    }

    function fbm(x, y, octaves, seed, lacunarity = 2.0, gain = 0.5) {
        let v = 0, amp = 0.5, freq = 1;
        for (let i = 0; i < octaves; i++) {
            v += amp * smoothNoise(x * freq, y * freq, seed + i * 37);
            amp *= gain;
            freq *= lacunarity;
        }
        return v;
    }

    function lerp(a, b, t) { return a + (b - a) * t; }
    function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

    // ── Canvas pixel helpers ───────────────────────────────────────────────────
    function makeCanvas(w, h) {
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        return c;
    }

    function pixelLoop(canvas, fn) {
        const ctx = canvas.getContext('2d');
        const img = ctx.createImageData(canvas.width, canvas.height);
        const d = img.data;
        const W = canvas.width, H = canvas.height;
        for (let y = 0; y < H; y++) {
            for (let x = 0; x < W; x++) {
                const [r, g, b] = fn(x / W, y / H, x, y);
                const i = (y * W + x) * 4;
                d[i] = clamp(r, 0, 255);
                d[i + 1] = clamp(g, 0, 255);
                d[i + 2] = clamp(b, 0, 255);
                d[i + 3] = 255;
            }
        }
        ctx.putImageData(img, 0, 0);
    }

    function toTexture(canvas) {
        const t = new THREE.CanvasTexture(canvas);
        t.needsUpdate = true;
        return t;
    }

    // ── Planet textures ────────────────────────────────────────────────────────

    function mercury() {
        const c = makeCanvas(512, 256);
        pixelLoop(c, (nx, ny) => {
            const n = fbm(nx * 9, ny * 5, 6, 11);
            const base = 90 + n * 100;
            // Reddish dust tinge
            return [base + 18, base + 8, base - 5];
        });
        // Draw craters
        const ctx = c.getContext('2d');
        for (let i = 0; i < 40; i++) {
            const cx = Math.random() * 512, cy = Math.random() * 256;
            const r = Math.random() * 12 + 3;
            const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
            grd.addColorStop(0, 'rgba(60,55,55,0.7)');
            grd.addColorStop(0.6, 'rgba(130,125,120,0.2)');
            grd.addColorStop(1, 'rgba(160,155,150,0)');
            ctx.fillStyle = grd;
            ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
        }
        return toTexture(c);
    }

    function venus() {
        const c = makeCanvas(512, 256);
        pixelLoop(c, (nx, ny) => {
            const n = fbm(nx * 6, ny * 3, 5, 22);
            const band = fbm(nx * 3, ny * 8, 3, 33);
            const v = n * 0.7 + band * 0.3;
            const r = 220 + v * 30;
            const g = 170 + v * 40;
            const b = 60 + v * 20;
            return [r, g, b];
        });
        return toTexture(c);
    }

    function earthDay() {
        const W = 1024, H = 512;
        const c = makeCanvas(W, H);
        pixelLoop(c, (nx, ny) => {
            // Latitude in -1..1
            const lat = ny * 2 - 1;
            // Continent noise
            const continent = fbm(nx * 4, ny * 3.5, 7, 44);
            const detail = fbm(nx * 10, ny * 8, 4, 55);
            const isLand = continent > 0.54;

            let r, g, b;
            if (isLand) {
                // Terrain height
                const elev = (continent - 0.54) / 0.46;
                if (elev > 0.7) { // Mountains
                    const snow = clamp((elev - 0.7) / 0.3, 0, 1);
                    r = lerp(140, 255, snow); g = lerp(120, 255, snow); b = lerp(100, 255, snow);
                } else { // Plains / forest
                    const lush = detail * 0.5 + 0.5;
                    r = lerp(60, 100, lush);
                    g = lerp(90, 140, lush);
                    b = lerp(40, 60, lush);
                }
                // Desert near equator for some regions
                if (continent < 0.60 && Math.abs(lat) < 0.3) {
                    const d = hash(nx * 15, ny * 15, 77);
                    if (d > 0.6) { r = lerp(r, 200, 0.6); g = lerp(g, 170, 0.6); b = lerp(b, 90, 0.4); }
                }
            } else {
                // Ocean — depth based on noise
                const depth = fbm(nx * 5, ny * 4, 4, 66);
                r = lerp(10, 40, depth);
                g = lerp(50, 100, depth);
                b = lerp(130, 200, depth);
            }

            // Polar ice
            const pole = Math.abs(lat);
            if (pole > 0.82) {
                const blend = clamp((pole - 0.82) / 0.12, 0, 1);
                r = lerp(r, 240, blend); g = lerp(g, 245, blend); b = lerp(b, 255, blend);
            }
            return [r, g, b];
        });
        return toTexture(c);
    }

    function earthNight() {
        const W = 512, H = 256;
        const c = makeCanvas(W, H);
        pixelLoop(c, (nx, ny) => {
            // Base very dark blue-black
            return [4, 6, 14];
        });
        // City lights as random bright dots clustered on land areas
        const ctx = c.getContext('2d');
        ctx.globalCompositeOperation = 'lighter';
        for (let i = 0; i < 1200; i++) {
            const cx = Math.random() * W, cy = Math.random() * H;
            const r = Math.random() * 3 + 0.5;
            // Skip poles
            if (cy < 20 || cy > H - 20) continue;
            const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 3);
            grd.addColorStop(0, `rgba(255,220,100,${0.6 + Math.random() * 0.4})`);
            grd.addColorStop(1, 'rgba(255,180,50,0)');
            ctx.fillStyle = grd;
            ctx.beginPath(); ctx.arc(cx, cy, r * 3, 0, Math.PI * 2); ctx.fill();
        }
        return toTexture(c);
    }

    function earthClouds() {
        const W = 512, H = 256;
        const c = makeCanvas(W, H);
        const ctx = c.getContext('2d');
        const img = ctx.createImageData(W, H);
        const d = img.data;
        for (let y = 0; y < H; y++) {
            for (let x = 0; x < W; x++) {
                const nx = x / W, ny = y / H;
                const n = fbm(nx * 7, ny * 4, 5, 99);
                const cloud = Math.max(0, n - 0.45) / 0.55;
                const alpha = clamp(cloud * 255 * 1.4, 0, 220);
                const i = (y * W + x) * 4;
                d[i] = 255; d[i + 1] = 255; d[i + 2] = 255; d[i + 3] = alpha;
            }
        }
        ctx.putImageData(img, 0, 0);
        const t = new THREE.CanvasTexture(c);
        t.needsUpdate = true;
        return t;
    }

    function mars() {
        const c = makeCanvas(512, 256);
        pixelLoop(c, (nx, ny) => {
            const n = fbm(nx * 7, ny * 4, 6, 111);
            const detail = fbm(nx * 14, ny * 8, 4, 222);
            const base = n * 0.65 + detail * 0.35;
            const r = 175 + base * 65;
            const g = 70 + base * 40;
            const b = 45 + base * 20;
            // Polar ice caps
            const lat = Math.abs(ny * 2 - 1);
            if (lat > 0.88) {
                const bl = clamp((lat - 0.88) / 0.1, 0, 1);
                return [lerp(r, 240, bl), lerp(g, 240, bl), lerp(b, 255, bl)];
            }
            return [r, g, b];
        });
        return toTexture(c);
    }

    function jupiter() {
        const c = makeCanvas(512, 256);
        pixelLoop(c, (nx, ny) => {
            // Horizontal bands
            const bandFreq = 18;
            const warp = fbm(nx * 3, ny * 6, 3, 333) * 0.08;
            const band = fbm(nx * 1.5, (ny + warp) * bandFreq, 3, 444);
            const stripe = Math.sin((ny + warp) * Math.PI * bandFreq) * 0.5 + 0.5;
            const mixed = band * 0.4 + stripe * 0.6;

            const r = lerp(165, 220, mixed);
            const g = lerp(110, 175, mixed);
            const b = lerp(60, 110, mixed);
            // Hint of the Great Red Spot
            const spotX = 0.25, spotY = 0.42, spotRX = 0.06, spotRY = 0.04;
            const dx = (nx - spotX) / spotRX;
            const dy = (ny - spotY) / spotRY;
            if (dx * dx + dy * dy < 1.0) {
                const blend = 1.0 - Math.sqrt(dx * dx + dy * dy);
                return [lerp(r, 200, blend * 0.7), lerp(g, 80, blend * 0.5), lerp(b, 60, blend * 0.5)];
            }
            return [r, g, b];
        });
        return toTexture(c);
    }

    function saturn() {
        const c = makeCanvas(512, 256);
        pixelLoop(c, (nx, ny) => {
            const band = Math.sin(ny * Math.PI * 12) * 0.5 + 0.5;
            const n = fbm(nx * 3, ny * 5, 3, 555);
            const v = band * 0.6 + n * 0.4;
            const r = lerp(200, 235, v);
            const g = lerp(175, 215, v);
            const b = lerp(100, 150, v);
            return [r, g, b];
        });
        return toTexture(c);
    }

    function uranus() {
        const c = makeCanvas(256, 128);
        pixelLoop(c, (nx, ny) => {
            const n = fbm(nx * 3, ny * 2, 3, 666) * 0.25;
            const r = lerp(100, 130, n);
            const g = lerp(200, 230, n);
            const b = lerp(200, 235, n);
            return [r, g, b];
        });
        return toTexture(c);
    }

    function neptune() {
        const c = makeCanvas(256, 128);
        pixelLoop(c, (nx, ny) => {
            const n = fbm(nx * 4, ny * 3, 4, 777);
            const band = Math.sin(ny * Math.PI * 6) * 0.2;
            const v = n * 0.7 + band * 0.3 + 0.15;
            const r = lerp(30, 70, v);
            const g = lerp(50, 100, v);
            const b = lerp(180, 240, v);
            return [r, g, b];
        });
        return toTexture(c);
    }

    function moon() {
        const c = makeCanvas(512, 256);
        pixelLoop(c, (nx, ny) => {
            const n = fbm(nx * 8, ny * 5, 5, 888);
            const base = 110 + n * 80;
            return [base - 5, base - 8, base - 5];
        });
        const ctx = c.getContext('2d');
        for (let i = 0; i < 30; i++) {
            const cx = Math.random() * 512, cy = Math.random() * 256;
            const r = Math.random() * 10 + 2;
            const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
            grd.addColorStop(0, 'rgba(70,70,70,0.6)');
            grd.addColorStop(0.7, 'rgba(140,140,140,0.1)');
            grd.addColorStop(1, 'rgba(180,180,180,0)');
            ctx.fillStyle = grd;
            ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
        }
        return toTexture(c);
    }

    return { mercury, venus, earthDay, earthNight, earthClouds, mars, jupiter, saturn, uranus, neptune, moon };
})();
