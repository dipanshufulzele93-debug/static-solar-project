import * as THREE from 'three';

/**
 * Procedural Texture Generator
 * Generates high quality procedural textures for all planets, atmospheres, rings, and stars.
 * Explicitly sets SRGBColorSpace for proper physically based rendering in Three.js.
 */
class TextureGenerator {
  constructor() {
    this.cache = new Map();
  }

  noise2D(x, y) {
    const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    return n - Math.floor(n);
  }

  smoothNoise(x, y) {
    const i = Math.floor(x);
    const j = Math.floor(y);
    const fx = x - i;
    const fy = y - j;

    const s = fx * fx * (3 - 2 * fx);
    const t = fy * fy * (3 - 2 * fy);

    const n00 = this.noise2D(i, j);
    const n10 = this.noise2D(i + 1, j);
    const n01 = this.noise2D(i, j + 1);
    const n11 = this.noise2D(i + 1, j + 1);

    const nx0 = n00 * (1 - s) + n10 * s;
    const nx1 = n01 * (1 - s) + n11 * s;

    return nx0 * (1 - t) + nx1 * t;
  }

  fbm(x, y, octaves = 6, lacunarity = 2.0, gain = 0.5) {
    let sum = 0;
    let amp = 1;
    let freq = 1;
    let max = 0;

    for (let i = 0; i < octaves; i++) {
      sum += this.smoothNoise(x * freq, y * freq) * amp;
      max += amp;
      amp *= gain;
      freq *= lacunarity;
    }
    return sum / max;
  }

  createCanvas(w = 256, h = 128) {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    return canvas;
  }

  wrapTexture(canvas, isColor = true) {
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    if (isColor) {
      texture.colorSpace = THREE.SRGBColorSpace;
    }
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    return texture;
  }

  getSunTexture() {
    if (this.cache.has('sun')) return this.cache.get('sun');
    const canvas = this.createCanvas(256, 128);
    const ctx = canvas.getContext('2d');
    const imgData = ctx.createImageData(canvas.width, canvas.height);
    const data = imgData.data;

    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const u = x / canvas.width;
        const v = y / canvas.height;
        const n = this.fbm(u * 8, v * 4, 3, 2.0, 0.5);

        const r = Math.min(255, Math.floor(255 * (0.92 + 0.08 * n)));
        const g = Math.min(255, Math.floor(190 * Math.pow(n, 1.1)));
        const b = Math.min(255, Math.floor(40 * Math.pow(n, 2.0)));

        const idx = (y * canvas.width + x) * 4;
        data[idx] = r;
        data[idx + 1] = g;
        data[idx + 2] = b;
        data[idx + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = this.wrapTexture(canvas, true);
    this.cache.set('sun', texture);
    return texture;
  }

  getEarthDayTexture() {
    if (this.cache.has('earth_day')) return this.cache.get('earth_day');
    const canvas = this.createCanvas(256, 128);
    const ctx = canvas.getContext('2d');
    const imgData = ctx.createImageData(canvas.width, canvas.height);
    const data = imgData.data;

    for (let y = 0; y < canvas.height; y++) {
      const lat = (y / canvas.height - 0.5) * Math.PI;
      const isPolar = Math.abs(lat) > 1.25;

      for (let x = 0; x < canvas.width; x++) {
        const lon = (x / canvas.width) * Math.PI * 2;
        const nx = Math.cos(lon) * Math.cos(lat);
        const ny = Math.sin(lat);
        const nz = Math.sin(lon) * Math.cos(lat);

        const landNoise = this.fbm((nx + 1) * 2.5, (ny + 1) * 2.5 + (nz + 1) * 2.5, 3, 2.0, 0.5);
        const idx = (y * canvas.width + x) * 4;

        if (isPolar) {
          data[idx] = 245;
          data[idx + 1] = 250;
          data[idx + 2] = 255;
        } else if (landNoise > 0.50) {
          data[idx] = 40 + Math.floor(60 * landNoise);
          data[idx + 1] = 120 + Math.floor(50 * landNoise);
          data[idx + 2] = 50;
        } else {
          data[idx] = 20;
          data[idx + 1] = 75 + Math.floor(40 * landNoise);
          data[idx + 2] = 180 + Math.floor(50 * landNoise);
        }
        data[idx + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = this.wrapTexture(canvas, true);
    this.cache.set('earth_day', texture);
    return texture;
  }

  getEarthCloudsTexture() {
    if (this.cache.has('earth_clouds')) return this.cache.get('earth_clouds');
    const canvas = this.createCanvas(256, 128);
    const ctx = canvas.getContext('2d');
    const imgData = ctx.createImageData(canvas.width, canvas.height);
    const data = imgData.data;

    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const u = x / canvas.width;
        const v = y / canvas.height;
        const n = this.fbm(u * 6, v * 3, 3, 2.0, 0.5);
        const alpha = Math.max(0, Math.min(1, (n - 0.48) * 3.0));

        const idx = (y * canvas.width + x) * 4;
        data[idx] = 255;
        data[idx + 1] = 255;
        data[idx + 2] = 255;
        data[idx + 3] = Math.floor(alpha * 220);
      }
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = this.wrapTexture(canvas, true);
    this.cache.set('earth_clouds', texture);
    return texture;
  }

  getEarthNightTexture() {
    if (this.cache.has('earth_night')) return this.cache.get('earth_night');
    const canvas = this.createCanvas(256, 128);
    const ctx = canvas.getContext('2d');
    const imgData = ctx.createImageData(canvas.width, canvas.height);
    const data = imgData.data;

    for (let y = 0; y < canvas.height; y++) {
      const lat = (y / canvas.height - 0.5) * Math.PI;
      for (let x = 0; x < canvas.width; x++) {
        const lon = (x / canvas.width) * Math.PI * 2;
        const nx = Math.cos(lon) * Math.cos(lat);
        const ny = Math.sin(lat);
        const nz = Math.sin(lon) * Math.cos(lat);

        const landNoise = this.fbm((nx + 1) * 2.5, (ny + 1) * 2.5 + (nz + 1) * 2.5, 3, 2.0, 0.5);
        const idx = (y * canvas.width + x) * 4;

        if (landNoise > 0.53 && Math.abs(lat) < 1.1) {
          const city = this.smoothNoise(nx * 12, ny * 12);
          if (city > 0.62) {
            data[idx] = 255;
            data[idx + 1] = 210;
            data[idx + 2] = 130;
            data[idx + 3] = 255;
            continue;
          }
        }
        data[idx] = 0;
        data[idx + 1] = 0;
        data[idx + 2] = 0;
        data[idx + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = this.wrapTexture(canvas, true);
    this.cache.set('earth_night', texture);
    return texture;
  }

  getJupiterTexture() {
    if (this.cache.has('jupiter')) return this.cache.get('jupiter');
    const canvas = this.createCanvas(256, 128);
    const ctx = canvas.getContext('2d');
    const imgData = ctx.createImageData(canvas.width, canvas.height);
    const data = imgData.data;

    for (let y = 0; y < canvas.height; y++) {
      const v = y / canvas.height;
      const bandFreq = Math.sin(v * Math.PI * 14);

      for (let x = 0; x < canvas.width; x++) {
        const u = x / canvas.width;
        const turb = this.fbm(u * 8, v * 4, 3, 2.0, 0.5);
        const val = 0.5 + 0.3 * bandFreq + 0.2 * turb;

        const grsX = (u - 0.62) * 8.0;
        const grsY = (v - 0.66) * 16.0;
        const grsDist = Math.sqrt(grsX * grsX + grsY * grsY);

        const idx = (y * canvas.width + x) * 4;
        if (grsDist < 1.0) {
          data[idx] = 235;
          data[idx + 1] = 95;
          data[idx + 2] = 70;
        } else {
          data[idx] = Math.floor(235 * val + 55 * (1 - val));
          data[idx + 1] = Math.floor(190 * val + 45 * (1 - val));
          data[idx + 2] = Math.floor(150 * val + 35 * (1 - val));
        }
        data[idx + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = this.wrapTexture(canvas, true);
    this.cache.set('jupiter', texture);
    return texture;
  }

  getSaturnTexture() {
    if (this.cache.has('saturn')) return this.cache.get('saturn');
    const canvas = this.createCanvas(256, 128);
    const ctx = canvas.getContext('2d');
    const imgData = ctx.createImageData(canvas.width, canvas.height);
    const data = imgData.data;

    for (let y = 0; y < canvas.height; y++) {
      const v = y / canvas.height;
      const band = Math.sin(v * Math.PI * 12) * 0.12;
      for (let x = 0; x < canvas.width; x++) {
        const u = x / canvas.width;
        const noise = this.smoothNoise(u * 6, v * 8) * 0.06;
        const brightness = 0.82 + band + noise;

        const idx = (y * canvas.width + x) * 4;
        data[idx] = Math.min(255, Math.floor(245 * brightness));
        data[idx + 1] = Math.min(255, Math.floor(225 * brightness));
        data[idx + 2] = Math.min(255, Math.floor(180 * brightness));
        data[idx + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = this.wrapTexture(canvas, true);
    this.cache.set('saturn', texture);
    return texture;
  }

  getSaturnRingsTexture() {
    if (this.cache.has('saturn_rings')) return this.cache.get('saturn_rings');
    const canvas = this.createCanvas(256, 16);
    const ctx = canvas.getContext('2d');
    const imgData = ctx.createImageData(canvas.width, canvas.height);
    const data = imgData.data;

    for (let x = 0; x < canvas.width; x++) {
      const r = x / canvas.width;
      let alpha = 0.85;
      let rColor = 235, gColor = 215, bColor = 175;

      if (r < 0.22) {
        alpha = 0.3 * (r / 0.22);
      } else if (r < 0.58) {
        alpha = 0.95;
      } else if (r < 0.65) {
        // Cassini division
        alpha = 0.04;
        rColor = 60; gColor = 55; bColor = 50;
      } else if (r < 0.94) {
        alpha = 0.8;
      } else {
        alpha = (1.0 - (r - 0.94) / 0.06) * 0.35;
      }

      for (let y = 0; y < canvas.height; y++) {
        const idx = (y * canvas.width + x) * 4;
        data[idx] = rColor;
        data[idx + 1] = gColor;
        data[idx + 2] = bColor;
        data[idx + 3] = Math.floor(alpha * 255);
      }
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = this.wrapTexture(canvas, true);
    this.cache.set('saturn_rings', texture);
    return texture;
  }

  getRockyPlanetTexture(baseColorHex = '#c1440e', craterDensity = 0.6) {
    const key = `rocky_${baseColorHex}`;
    if (this.cache.has(key)) return this.cache.get(key);

    const canvas = this.createCanvas(256, 128);
    const ctx = canvas.getContext('2d');
    const color = new THREE.Color(baseColorHex);
    const imgData = ctx.createImageData(canvas.width, canvas.height);
    const data = imgData.data;

    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const u = x / canvas.width;
        const v = y / canvas.height;
        const f = this.fbm(u * 8, v * 4, 3, 2.0, 0.5);

        const r = Math.min(255, Math.floor(color.r * 255 * (0.85 + 0.35 * f)));
        const g = Math.min(255, Math.floor(color.g * 255 * (0.85 + 0.35 * f)));
        const b = Math.min(255, Math.floor(color.b * 255 * (0.85 + 0.35 * f)));

        const idx = (y * canvas.width + x) * 4;
        data[idx] = r;
        data[idx + 1] = g;
        data[idx + 2] = b;
        data[idx + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = this.wrapTexture(canvas, true);
    this.cache.set(key, texture);
    return texture;
  }

  getIceGiantTexture(baseColorHex = '#4dd0e1') {
    const key = `ice_${baseColorHex}`;
    if (this.cache.has(key)) return this.cache.get(key);

    const canvas = this.createCanvas(256, 128);
    const ctx = canvas.getContext('2d');
    const color = new THREE.Color(baseColorHex);
    const imgData = ctx.createImageData(canvas.width, canvas.height);
    const data = imgData.data;

    for (let y = 0; y < canvas.height; y++) {
      const v = y / canvas.height;
      const subtleBands = Math.sin(v * Math.PI * 8) * 0.08;
      for (let x = 0; x < canvas.width; x++) {
        const u = x / canvas.width;
        const turb = this.smoothNoise(u * 6, v * 3) * 0.08;
        const factor = 0.95 + subtleBands + turb;

        const idx = (y * canvas.width + x) * 4;
        data[idx] = Math.min(255, Math.floor(color.r * 255 * factor));
        data[idx + 1] = Math.min(255, Math.floor(color.g * 255 * factor));
        data[idx + 2] = Math.min(255, Math.floor(color.b * 255 * factor));
        data[idx + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = this.wrapTexture(canvas, true);
    this.cache.set(key, texture);
    return texture;
  }
}

export const textureGenerator = new TextureGenerator();
