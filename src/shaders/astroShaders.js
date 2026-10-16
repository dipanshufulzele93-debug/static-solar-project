import * as THREE from 'three';

/**
 * Custom GLSL Shaders for Universe Explorer
 * Highly optimized, physically inspired GLSL shaders
 */

export const SunShader = {
  uniforms: {
    time: { value: 0 },
    sunColor: { value: new THREE.Color('#ff8c00') },
    coronaColor: { value: new THREE.Color('#ffe066') }
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform vec3 sunColor;
    uniform vec3 coronaColor;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;

    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }

    void main() {
      vec3 pos = normalize(vWorldPosition) * 3.5;
      float n1 = snoise(pos + vec3(0.0, 0.0, time * 0.18));
      float n2 = snoise(pos * 2.5 - vec3(time * 0.25, 0.0, 0.0));
      float granulation = snoise(pos * 8.0 + vec3(0.0, time * 0.4, 0.0));
      
      float pattern = (n1 * 0.5 + n2 * 0.35 + granulation * 0.15) * 0.5 + 0.5;
      
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
      
      vec3 col = mix(sunColor, coronaColor, pow(pattern, 1.8));
      col += vec3(1.0, 0.92, 0.7) * pow(rim, 2.5) * 1.8;
      
      gl_FragColor = vec4(col, 1.0);
    }
  `
};

export const EarthShader = {
  uniforms: {
    dayMap: { value: null },
    nightMap: { value: null },
    sunDirection: { value: new THREE.Vector3(1, 0, 0) }
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    void main() {
      vUv = uv;
      vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: `
    uniform sampler2D dayMap;
    uniform sampler2D nightMap;
    uniform vec3 sunDirection;
    varying vec2 vUv;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;

    void main() {
      vec3 dayColor = texture2D(dayMap, vUv).rgb;
      vec3 nightColor = texture2D(nightMap, vUv).rgb;

      // Sun incident angle
      vec3 sunDir = normalize(sunDirection - vWorldPosition);
      float sunDot = dot(vWorldNormal, sunDir);

      // Smooth terminator transition (-0.1 to 0.15)
      float dayFactor = smoothstep(-0.08, 0.18, sunDot);
      float directLight = max(0.0, sunDot) * 1.15;
      float ambientLight = 0.16; // Subtle ambient so night side is not pitch black

      vec3 dayIlluminated = dayColor * (directLight + ambientLight);
      vec3 nightIlluminated = dayColor * ambientLight + nightColor * (1.0 - dayFactor) * 0.85;

      vec3 finalColor = mix(nightIlluminated, dayIlluminated, dayFactor);
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

export const AtmosphereShader = {
  uniforms: {
    color: { value: new THREE.Color('#4ea8de') },
    intensity: { value: 0.9 },
    power: { value: 3.5 }
  },
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: `
    uniform vec3 color;
    uniform float intensity;
    uniform float power;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;

    void main() {
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
      float glow = pow(rim, power) * intensity;
      gl_FragColor = vec4(color, glow);
    }
  `
};

export const BlackHoleAccretionShader = {
  uniforms: {
    time: { value: 0 },
    innerColor: { value: new THREE.Color('#ffffff') },
    midColor: { value: new THREE.Color('#ff9100') },
    outerColor: { value: new THREE.Color('#d50000') },
    innerRadius: { value: 0.28 },
    outerRadius: { value: 1.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    void main() {
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform vec3 innerColor;
    uniform vec3 midColor;
    uniform vec3 outerColor;
    uniform float innerRadius;
    uniform float outerRadius;
    varying vec2 vUv;
    varying vec3 vWorldPosition;

    void main() {
      vec2 center = vUv - vec2(0.5);
      float dist = length(center) * 2.0;

      if (dist < innerRadius || dist > outerRadius) {
        discard;
      }

      float angle = atan(center.y, center.x);
      float spiral = sin(angle * 6.0 - dist * 14.0 + time * 3.5) * 0.5 + 0.5;
      float fineSwirl = sin(angle * 18.0 - dist * 32.0 + time * 6.0) * 0.5 + 0.5;
      
      // Doppler beaming effect
      float doppler = sin(angle - 0.4) * 0.45 + 0.55;
      float normR = (dist - innerRadius) / (outerRadius - innerRadius);
      
      vec3 col = mix(innerColor, midColor, smoothstep(0.0, 0.4, normR));
      col = mix(col, outerColor, smoothstep(0.4, 1.0, normR));
      
      col *= (0.7 + 0.3 * spiral + 0.15 * fineSwirl) * doppler * 2.2;
      
      float photonRing = 1.0 - smoothstep(innerRadius, innerRadius + 0.04, dist);
      col += vec3(1.0, 1.0, 1.0) * photonRing * 3.5;

      float alpha = smoothstep(innerRadius, innerRadius + 0.03, dist) * 
                    (1.0 - smoothstep(outerRadius - 0.08, outerRadius, dist)) * doppler;

      gl_FragColor = vec4(col, alpha);
    }
  `
};

export const RelativisticJetShader = {
  uniforms: {
    time: { value: 0 },
    jetColor: { value: new THREE.Color('#00e5ff') }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform vec3 jetColor;
    varying vec2 vUv;

    void main() {
      float y = vUv.y;
      float x = abs(vUv.x - 0.5) * 2.0;
      
      float pulse = sin(y * 25.0 - time * 8.0) * 0.5 + 0.5;
      float intensity = (1.0 - x) * (1.0 - y * 0.5) * (0.8 + 0.4 * pulse);
      
      vec3 col = jetColor * intensity * 2.5 + vec3(0.5, 0.8, 1.0) * pow(1.0 - x, 4.0) * 2.0;
      float alpha = intensity * (1.0 - y * 0.8) * 0.9;
      
      gl_FragColor = vec4(col, alpha);
    }
  `
};

export const PulsarBeamShader = {
  uniforms: {
    time: { value: 0 },
    beamColor: { value: new THREE.Color('#00e5ff') },
    pulseFreq: { value: 12.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform vec3 beamColor;
    uniform float pulseFreq;
    varying vec2 vUv;

    void main() {
      float y = vUv.y;
      float x = abs(vUv.x - 0.5) * 2.0;
      float pulse = sin(time * pulseFreq) * 0.4 + 0.6;
      
      float core = pow(1.0 - x, 3.0);
      vec3 col = beamColor * core * 3.0 * pulse + vec3(1.0) * pow(1.0 - x, 6.0) * pulse;
      float alpha = core * (1.0 - y * 0.7) * pulse * 0.85;
      
      gl_FragColor = vec4(col, alpha);
    }
  `
};

export const WormholeShader = {
  uniforms: {
    time: { value: 0 },
    throatColor: { value: new THREE.Color('#9c27b0') },
    rimColor: { value: new THREE.Color('#00e5ff') }
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform vec3 throatColor;
    uniform vec3 rimColor;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;

    void main() {
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      float rim = 1.0 - abs(dot(viewDir, vNormal));
      
      vec2 center = vUv - 0.5;
      float dist = length(center) * 2.0;
      float angle = atan(center.y, center.x);
      
      // Spacetime distortion swirl
      float swirl = sin(angle * 8.0 - dist * 12.0 + time * 2.5) * 0.5 + 0.5;
      float ripples = sin(dist * 28.0 - time * 4.0) * 0.5 + 0.5;
      
      vec3 col = mix(throatColor, rimColor, pow(rim, 1.5));
      col += vec3(0.3, 0.7, 1.0) * swirl * 0.6;
      col += vec3(1.0, 0.8, 0.4) * ripples * pow(1.0 - dist, 2.0) * 0.8;
      
      float alpha = smoothstep(0.0, 0.3, dist) * (0.4 + 0.6 * pow(rim, 2.0));
      gl_FragColor = vec4(col, alpha);
    }
  `
};

export const CMBShader = {
  uniforms: {
    time: { value: 0 }
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
      // Procedural CMB multipole temperature fluctuations (Planck anisotropy mock)
      vec3 p = normalize(vPosition) * 12.0;
      float n1 = sin(p.x * 2.5 + p.y * 1.8) * cos(p.z * 2.2);
      float n2 = sin(p.y * 5.0 - p.x * 3.2) * cos(p.x * 4.1 + p.z * 3.8);
      float n3 = sin(p.z * 11.0 + p.x * 9.0) * cos(p.y * 8.5);
      
      float val = (n1 * 0.5 + n2 * 0.35 + n3 * 0.15) * 0.5 + 0.5;
      
      // Planck color palette (Red -> Orange -> Cyan -> Deep Blue)
      vec3 cCold = vec3(0.05, 0.15, 0.55);
      vec3 cMid = vec3(0.0, 0.65, 0.85);
      vec3 cWarm = vec3(0.95, 0.6, 0.1);
      vec3 cHot = vec3(0.85, 0.15, 0.1);
      
      vec3 col = val < 0.35 ? mix(cCold, cMid, val / 0.35) :
                 val < 0.7 ? mix(cMid, cWarm, (val - 0.35) / 0.35) :
                 mix(cWarm, cHot, (val - 0.7) / 0.3);
                 
      gl_FragColor = vec4(col, 0.18);
    }
  `
};

