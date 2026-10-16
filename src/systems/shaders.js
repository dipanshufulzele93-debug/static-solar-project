/**
 * GLSL SHADER SOURCES
 * All shader strings for Sun, planet atmospheres, and Earth day/night blending.
 */

const Shaders = (() => {

    // ── Sun ────────────────────────────────────────────────────────────────────
    const SUN_VERT = /* glsl */`
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
            vUv      = uv;
            vNormal  = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    const SUN_FRAG = /* glsl */`
        uniform float time;
        varying vec2  vUv;
        varying vec3  vNormal;

        /* — Value noise — */
        float hash(vec2 p, float seed) {
            float n = sin(dot(p, vec2(127.1, 311.7)) + seed) * 43758.5453;
            return fract(n);
        }
        float vNoise(vec2 p, float seed) {
            vec2 i = floor(p), f = fract(p);
            vec2 u = f * f * (3.0 - 2.0 * f);
            return mix(
                mix(hash(i,           seed), hash(i + vec2(1,0), seed), u.x),
                mix(hash(i + vec2(0,1),seed), hash(i + vec2(1,1), seed), u.x), u.y);
        }
        float fbm(vec2 p, float seed) {
            float v = 0.0, a = 0.5;
            for (int i = 0; i < 6; i++) {
                v += a * vNoise(p, seed);
                p  = p * 2.1 + vec2(1.7, 9.2);
                a *= 0.5;
            }
            return v;
        }

        void main() {
            float t  = time * 0.12;
            float n1 = fbm(vUv * 4.0 + t,  0.0);
            float n2 = fbm(vUv * 8.0 - t * 0.7 + n1 * 0.3, 7.0);
            float v  = n1 * 0.6 + n2 * 0.4;

            /* Colour: white-hot core → orange-red edge */
            vec3 c1 = vec3(1.00, 0.98, 0.85);   /* pale yellow-white */
            vec3 c2 = vec3(1.00, 0.65, 0.15);   /* amber */
            vec3 c3 = vec3(0.90, 0.25, 0.02);   /* dark red */
            vec3 col;
            if (v > 0.65)      col = mix(c2, c1, (v - 0.65) / 0.35);
            else               col = mix(c3, c2, v / 0.65);

            /* Limb-darkening */
            float limb = dot(vNormal, vec3(0.0, 0.0, 1.0));
            col *= (0.55 + 0.45 * abs(limb));

            /* Boost brightness so bloom kicks in */
            col *= 2.5;
            gl_FragColor = vec4(col, 1.0);
        }
    `;

    // ── Atmosphere rim glow ────────────────────────────────────────────────────
    const ATM_VERT = /* glsl */`
        varying vec3 vNormal;
        varying vec3 vViewDir;
        void main() {
            vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
            vNormal   = normalize(normalMatrix * normal);
            vViewDir  = normalize(-mvPos.xyz);
            gl_Position = projectionMatrix * mvPos;
        }
    `;

    const ATM_FRAG = /* glsl */`
        uniform vec3  atmoColor;
        uniform float atmoStrength;
        varying vec3  vNormal;
        varying vec3  vViewDir;
        void main() {
            float rim = 1.0 - abs(dot(vNormal, vViewDir));
            rim = pow(rim, 3.5) * atmoStrength;
            gl_FragColor = vec4(atmoColor, rim);
        }
    `;

    // ── Earth day / night blend ────────────────────────────────────────────────
    const EARTH_VERT = /* glsl */`
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        void main() {
            vUv      = uv;
            vNormal  = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
            vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    const EARTH_FRAG = /* glsl */`
        uniform sampler2D dayMap;
        uniform sampler2D nightMap;
        uniform sampler2D cloudMap;
        uniform vec3      sunPos;
        uniform float     cloudOffset;
        varying vec2      vUv;
        varying vec3      vNormal;
        varying vec3      vWorldPos;

        void main() {
            vec3  sunDir  = normalize(sunPos - vWorldPos);
            float diffuse = dot(vNormal, sunDir);
            float blend   = smoothstep(-0.15, 0.25, diffuse);

            vec2  cloudUv = vUv + vec2(cloudOffset, 0.0);
            vec4  cloud   = texture2D(cloudMap, cloudUv);
            vec4  day     = texture2D(dayMap,   vUv);
            vec4  night   = texture2D(nightMap, vUv);

            /* Mix day and cloud on bright side */
            vec4 dayFull  = mix(day,   vec4(1.0), cloud.a * 0.45 * blend);
            /* Night city lights — reduce near clouds */
            vec4 nightFull = night * (1.0 - cloud.a * 0.4);
            vec4 col       = mix(nightFull, dayFull, blend);

            /* Orange terminator glow */
            float term = smoothstep(-0.1, 0.0, diffuse) - smoothstep(0.0, 0.25, diffuse);
            col.rgb += vec3(0.55, 0.25, 0.05) * term * 0.4;

            /* Subtle diffuse shading */
            col.rgb *= (0.15 + 0.85 * clamp(diffuse, 0.0, 1.0));
            col.rgb  = mix(col.rgb, day.rgb * 0.9, blend * 0.15); // slight day lift

            gl_FragColor = vec4(col.rgb, 1.0);
        }
    `;

    return { SUN_VERT, SUN_FRAG, ATM_VERT, ATM_FRAG, EARTH_VERT, EARTH_FRAG };
})();
