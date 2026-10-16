# 🌌 UNIVERSE EXPLORER

### Free-Fly 3D Astronomy Learning Experience for Class 5–10 Students

An interactive, real-time 3D universe exploration and astronomy learning platform built with **Three.js (r165)**, **WebGL**, **GLSL Shaders**, **Express.js**, and **Vite**.

Powered by an authoritative local astronomical database connected to real catalogue measurements from **NASA PDS**, **NASA JPL Horizons**, **NASA Exoplanet Archive**, **ESA Gaia DR3**, **SIMBAD**, and the **IAU Minor Planet Center**.

---

## 🌟 Key Features

### 1. 🚀 Free-Fly 3D Exploration & 6-DOF Navigation
- **True 3D Star Distribution**: Fly freely through stars, star clusters, galaxies, and planetary orbits — stars exist in real 3D space rather than as a flat skybox.
- **6-DOF Movement**: 
  - <kbd>W</kbd> / <kbd>S</kbd> : Fly Forward / Backward
  - <kbd>A</kbd> / <kbd>D</kbd> : Strafe Left / Right
  - <kbd>E</kbd> / <kbd>Space</kbd> : Vertical Thrust Up
  - <kbd>Q</kbd> : Vertical Thrust Down
  - <kbd>Shift</kbd> : Warp Speed Boost (×3.5 velocity)
  - <kbd>Mouse Drag</kbd> / Right-Click : Free Camera Look
- **Dynamic Speed Scaling**: Flight speed dynamically adjusts based on camera altitude and astronomical scale (from orbital maneuvers to intergalactic super-cruise).
- **Smooth, Instant Cancellable Fly-To**: Tap any movement key, drag the mouse, or press <kbd>ESC</kbd> at any time to instantly cancel an autopilot fly-to and resume free manual flight at the exact current position without camera snapping.

---

### 2. 📚 Real Astronomical Database & REST API
Clean, modular full-stack architecture:
```text
solar/
├── backend/            # Express.js REST API Server
│   └── server.js       # Endpoints: /api/objects, /api/search, /api/quiz, /api/systems
├── database/           # Astronomical schema, seed data, and local database engine
│   ├── db.js           # Query engine, search indexer, and data validator
│   ├── schema.sql      # Relational SQL schema
│   └── seedData.js     # NASA / ESA / SIMBAD catalogue entries & quizzes
├── shared/             # Shared constants, scale definitions, status badges
│   └── constants.js
├── src/                # Three.js 3D client application
│   ├── camera/         # FreeFlyController & 6-DOF controls
│   ├── components/     # Black holes, galaxies, pulsars, spacecraft, planets
│   ├── data/           # Client celestial registries & catalog lookup
│   ├── effects/        # 3D starfield, asteroid belts, warp streak effects
│   ├── planets/        # PBR procedural planet meshes & atmospheres
│   ├── shaders/        # GLSL accretion disks, relativistic jets, solar granulation
│   ├── systems/        # SceneManager, orbital mechanics, audio engine
│   └── ui/             # UIManager, CatalogUI, HUD telemetry, Quick Quiz
└── index.html          # Glassmorphism UI layout & learning drawers
```

#### Scientific Honesty & Data Accuracy Badges
Every celestial object clearly presents its scientific verification status:
- `REAL / CATALOGUED` : Directly measured by space missions / telescopes
- `OBSERVED` : Confirmed through optical, infrared, or radio imaging
- `INFERRED` : Derived from gravitational perturbations or atmospheric spectra
- `ESTIMATED` : Calculated via astrophysical models
- `UNKNOWN` : Unknown parameters remain labeled `UNKNOWN` (never fabricated)
- `PROCEDURAL VISUALIZATION` : Scientifically inspired 3D models for unmapped surfaces

---

### 3. 🎓 Dual-Level Astronomy Learning Mode (Easy Teacher vs More Science)
The information drawer features a one-click level switcher tailored for both Class 5–10 students and advanced astronomy enthusiasts:

- **🎒 Easy Explanation Mode**:
  - 🙋‍♂️ **"Meet this object"** — Warm, engaging teacher introduction.
  - ❓ **"What is it?"** — Direct, friendly conceptual breakdown.
  - 📏 **"How big is it?"** — Real-world tangible size comparisons.
  - 📍 **"Where is it?"** — Distance and cosmic location in the universe.
  - 🧱 **"What is it made of?"** — Core, mantle, atmospheric, or gas composition.
  - 🌡️ **"What is it like?"** — Surface temperature, climate, and environment.
  - 💧 **"Does it have water?"** — Ocean, ice sheet, or vapor presence.
  - 💨 **"Does it have an atmosphere?"** — Gas mix and radiation shield properties.
  - 🌱 **"Could life exist there?"** — Honest biological assessment based on scientific consensus.
  - ✨ **"What makes it special?"** — Core scientific wonder.
  - 💡 **"Did you know?"** — Fascinating astronomical trivia.

- **🔬 More Science Mode**:
  - Deep astrophysical parameters: spectral class, absolute luminosity, surface gravity, density, escape velocity, orbital eccentricity, semi-major axis, atmospheric scale height / pressure, magnetic field strength, and relativistic Kerr parameters for black holes.
  - Direct citations to **NASA Exoplanet Archive**, **ESA Gaia DR3**, **JPL Horizons**, **SIMBAD**, and the **Event Horizon Telescope (EHT)**.

#### Interactive Visual Learning Action Buttons
Click any button on the Information Panel to open interactive visual cards:
- `[🧠 WHY?]` : Answers fundamental questions (e.g. why Venus is hotter than Mercury).
- `[🔬 HOW?]` : Explains mechanics (e.g. how seasons work, how tides form).
- `[🔭 WHAT?]` : Detailed chemical composition and planetary anatomy.
- `[⚖️ COMPARE]` : Dynamic visual comparison with Earth, the Moon, and Jupiter.
- `[📏 SCALE]` : True astronomical scale ratios and mass figures.
- `[🔍 EVIDENCE]` : Telescopes and spacecraft missions that made the discoveries.
- `[💧 WATER]` : Exact water status (`Surface liquid`, `Ice sheet`, `Subsurface ocean`, `Vapor`, `Historical evidence`, `Unknown`).
- `[💨 ATMOSPHERE]` : Gas composition, atmospheric thickness, and surface pressure.
- `[🌱 LIFE]` : Honest biological status (`LIFE CONFIRMED`, `NO CONFIRMED LIFE`, `POTENTIALLY HABITABLE`, `UNKNOWN`, `UNSUITABLE FOR KNOWN LIFE`).

---

### 4. 🧠 Quick Quiz System
Whenever an object is inspected, a 2–3 question quiz is available based strictly on the facts presented in the popup:
- Immediate **Green / Red feedback** with audio cues.
- Concise explanations for each answer.
- **Score counter** and completion celebrations.
- **"Next Question"**, **"Retry"**, and **"Close"** controls.

---

### 5. 🕳️ Relativistic Black Holes, Cosmic Web & Hypothetical Wormholes
- **Supermassive Black Holes** (*Sagittarius A\**, *M87\**):
  - Black **Event Horizon** sphere (point of no return).
  - Glowing **Photon Ring** and **Einstein Gravitational Lensing Halo**.
  - **Relativistic Accretion Disk** GLSL shader with Doppler brightening & gravitational redshift.
  - Opposing polar **Relativistic Jets** blasting 5,000 light-years across space.
- **Cosmic Web & CMB Shell**:
  - 3D large-scale filament structure with galaxy supercluster nodes and cosmic voids.
  - Outer Cosmic Microwave Background radiation boundary shell shader.
- **Hypothetical Wormhole (Einstein-Rosen Bridge)**:
  - 3D curved spacetime throat connecting distant spatial coordinates.
  - Prominent **HYPOTHETICAL — NOT OBSERVED** scientific honesty badge.

---

### 6. 🗺️ Multi-Scale Top Navigation & Galactic HUD
Explore seamless multi-scale views via the top navigation bar:
- `🌌 MULTIVERSE` : Theoretical cosmic bubble inflation view.
- `🕸️ COSMIC WEB` : Filaments, cosmic voids, and CMB boundary.
- `🔭 UNIVERSE` : Deep space view of the observable universe.
- `🌀 GALAXIES` : Local Group navigation (Milky Way, Andromeda, Triangulum, Magellanic Clouds).
- `✨ MILKY WAY` : Barred spiral galaxy with 65,000 GPU particles.
- `☀️ SOLAR SYSTEM` : Heliocentric view of the Sun, planets, and asteroid belts.
- `🪐 PLANETS` : Terrestrial, gas giant, and ice giant planetary systems.
- `💧 HABITABILITY` : Ocean worlds (Europa, Enceladus) and temperate exoplanets (TRAPPIST-1e).
- `🕳️ BLACK HOLES` : Relativistic gravity wells.
- `🌀 WORMHOLE` : Einstein-Rosen Bridge (Hypothetical).
- `🛰️ SPACECRAFT` : Interplanetary probes (*Voyager 1*, *James Webb Space Telescope*).
- `🎓 LEARNING MODE` : Dedicated educational tour and quizzes.

**Galactic Locator HUD**: Displays real-time coordinates:
- `📍 YOU ARE HERE: Orion Spur, Milky Way`
- `🌌 DIST TO GALACTIC CENTER: ~26,670 ly`
- `🎯 TARGET DISTANCE: Live telemetry to focused body`

---

## 📡 REST API Reference

The backend runs on `http://localhost:3001` (proxied automatically via `/api` in the Vite frontend):

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service status, uptime, and number of loaded objects |
| `GET` | `/api/categories` | List of all celestial categories and object counts |
| `GET` | `/api/objects` | Paginated object listing (`?category=...&page=1&limit=50&search=...`) |
| `GET` | `/api/objects/:id` | Full scientific telemetry, Class 5–10 educational facts & quiz data |
| `GET` | `/api/search?q=:query` | Fast auto-complete global search across all names and catalogues |
| `GET` | `/api/systems/:id` | System hierarchy (parent star/planet, moons, companion bodies) |
| `GET` | `/api/quiz/:id` | Retrieve 2–3 quiz questions for a specific celestial body |
| `POST` | `/api/quiz/check` | Validate quiz answer, return explanation and correctness |

---

## 🛠️ Installation & Running Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- `npm` (comes with Node.js)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Backend API Server
```bash
npm run backend
```
*The API server will launch on `http://localhost:3001`.*

### 3. Start the Frontend Development Server
In a second terminal window (or run alongside):
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your web browser.

### 4. Build for Production
```bash
npm run build
```

---

## 🎮 Controls Quick Reference

| Action | Key / Control |
|---|---|
| **Free-Fly Forward / Back** | <kbd>W</kbd> / <kbd>S</kbd> or <kbd>↑</kbd> / <kbd>↓</kbd> |
| **Free-Fly Strafe Left / Right** | <kbd>A</kbd> / <kbd>D</kbd> or <kbd>←</kbd> / <kbd>→</kbd> |
| **Fly Up / Down** | <kbd>E</kbd> (Up) / <kbd>Q</kbd> (Down) |
| **Warp Speed Boost** | Hold <kbd>Shift</kbd> |
| **Free Look / Orbit** | Left-click + Drag / Right-click + Drag |
| **Inspect / Select Object** | Left-click on any visible 3D celestial object |
| **Cancel Fly-To Autopilot** | Tap <kbd>WASD</kbd>, move mouse, or press <kbd>ESC</kbd> |
| **Global Search** | Type in top search bar (`TRAPPIST-1e`, `Bennu`, `M87*`, `Earth`, etc.) |
| **Toggle Spacecraft Flight Mode** | Press <kbd>F</kbd> key or click `Spacecraft Mode (F)` |
| **Pause / Resume Time** | Press <kbd>Space</kbd> or click `Pause` |
| **Simulation Speed** | Click `Speed` (1× real-time up to 100,000×) |
| **Toggle Audio** | Click `Audio On / Off` |
