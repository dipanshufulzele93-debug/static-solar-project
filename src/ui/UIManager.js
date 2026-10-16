import { SCALES, DATA_STATUS, LIFE_STATUS, WATER_STATUS } from '../../shared/constants.js';
import { objectRegistry } from '../data/ObjectRegistry.js';
import { audioSystem } from '../systems/AudioSystem.js';

/**
 * Enhanced UIManager
 * Coordinates:
 * - Top navigation bar (Multiverse, Galaxies, Solar System, Habitability, Black Holes, Spacecraft, Learning)
 * - Class 5-10 Kid-Friendly Educational modules (What, Why, How, Scale, Evidence, Water, Atmosphere, Life)
 * - Interactive Visual Learning Display & Size comparisons
 * - 🧠 Quick Quiz system with scoring, feedback, retry, and explanations
 * - Real astronomical database API integration
 * - Galactic locator and HUD telemetry updates
 */
export class UIManager {
  constructor(app) {
    this.app = app;
    this.currentSelectedObject = null;
    this.currentQuizData = [];
    this.currentQuizIndex = 0;
    this.quizScore = 0;
    this.activeVisualTab = null;

    this.setupDOMElements();
    this.setupEventListeners();
    this.populateSidebar();
    this.setupSearch();
  }

  setupDOMElements() {
    this.navButtons = document.querySelectorAll('.nav-btn');
    this.breadcrumbBar = document.getElementById('breadcrumb-bar');
    this.brandLogo = document.getElementById('brand-logo');

    // Right Drawer Info Elements
    this.infoPanel = document.getElementById('info-panel');
    this.infoBadgeRow = document.getElementById('info-badge-row');
    this.infoTitle = document.getElementById('info-title');
    this.infoType = document.getElementById('info-type');
    this.infoCloseBtn = document.getElementById('info-close-btn');
    this.infoMinimizeBtn = document.getElementById('info-min-btn');
    this.flyToTargetBtn = document.getElementById('fly-to-target-btn');
    this.takeQuizBtn = document.getElementById('take-quiz-btn');

    // Level Switcher Elements
    this.levelBtnEasy = document.getElementById('level-btn-easy');
    this.levelBtnScience = document.getElementById('level-btn-science');
    this.easyModeContent = document.getElementById('easy-mode-content');
    this.scienceModeContent = document.getElementById('science-mode-content');

    // Educational Elements (Class 5–10 Teacher Progressive Sequence)
    this.learnMeetText = document.getElementById('learn-meet-text');
    this.learnWhatText = document.getElementById('learn-what-text');
    this.learnSizeText = document.getElementById('learn-size-text');
    this.learnWhereText = document.getElementById('learn-where-text');
    this.learnMadeText = document.getElementById('learn-made-text');
    this.learnLikeText = document.getElementById('learn-like-text');
    this.learnWaterText = document.getElementById('learn-water-text');
    this.learnAtmoText = document.getElementById('learn-atmo-text');
    this.learnLifeText = document.getElementById('learn-life-text');
    this.learnSpecialText = document.getElementById('learn-special-text');
    this.learnFactText = document.getElementById('learn-fact-text');
    this.scienceSummaryText = document.getElementById('science-summary-text');

    this.visualButtons = document.querySelectorAll('.v-btn[data-tab]');
    this.visualLearningContainer = document.getElementById('visual-learning-container');
    this.visualLearningTitle = document.getElementById('visual-learning-title');
    this.visualLearningContent = document.getElementById('visual-learning-content');

    // Quiz Elements
    this.quizContainer = document.getElementById('quiz-container');
    this.quizQuestionText = document.getElementById('quiz-question-text');
    this.quizOptionsList = document.getElementById('quiz-options-list');
    this.quizFeedbackBox = document.getElementById('quiz-feedback-box');
    this.quizScoreIndicator = document.getElementById('quiz-score-indicator');
    this.quizNextBtn = document.getElementById('quiz-next-btn');
    this.quizRetryBtn = document.getElementById('quiz-retry-btn');

    // Stats Grid
    this.infoStatsGrid = document.getElementById('info-stats-grid');

    // Search Elements
    this.searchInput = document.getElementById('search-input');
    this.searchResults = document.getElementById('search-results');

    // Time & HUD Controls
    this.simSpeedBtn = document.getElementById('sim-speed-btn');
    this.simSpeedLabel = document.getElementById('sim-speed-label');
    this.simPauseBtn = document.getElementById('sim-pause-btn');
    this.simDateLabel = document.getElementById('sim-date-label');
    this.targetDistIndicator = document.getElementById('target-dist-indicator');

    this.toggleFlightBtn = document.getElementById('toggle-flight-btn');
    this.toggleOrbitsBtn = document.getElementById('toggle-orbits-btn');
    this.toggleSoundBtn = document.getElementById('toggle-sound-btn');
    this.qualitySelect = document.getElementById('quality-select');

    // Camera Mode Buttons (Free Explore, Orbit, Follow, Planet, Home)
    this.camModeButtons = document.querySelectorAll('.cam-mode-btn');

    this.hoverTooltip = document.getElementById('hover-tooltip');
    this.toastContainer = document.getElementById('toast-container');
  }

  setupEventListeners() {
    // Brand logo returns to Solar System
    if (this.brandLogo) {
      this.brandLogo.addEventListener('click', () => {
        audioSystem.playClick();
        this.app.switchScale(SCALES.SOLAR_SYSTEM);
      });
    }

    // Camera Mode Selection Buttons
    this.camModeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.camMode;
        audioSystem.playClick();
        this.camModeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (mode === 'HOME') {
          this.app.switchScale(SCALES.SOLAR_SYSTEM);
        } else {
          this.app.navSystem.setCameraMode(mode, this.currentSelectedObject);
          if (mode === 'FREE_EXPLORE') {
            this.showToast('Free 6-DOF Exploration', 'Use WASD to fly, QE for vertical thrust, Shift for speed boost, and mouse to look around freely.');
          } else if (mode === 'FOLLOW' && this.currentSelectedObject) {
            this.showToast('Follow Trajectory', `Tracking ${this.currentSelectedObject.name || 'object'} along orbital flight.`);
          }
        }
      });
    });

    // Level Switcher Tabs: Easy Explanation vs More Science
    if (this.levelBtnEasy && this.levelBtnScience) {
      this.levelBtnEasy.addEventListener('click', () => {
        audioSystem.playClick();
        this.setLevelMode('easy');
      });

      this.levelBtnScience.addEventListener('click', () => {
        audioSystem.playClick();
        this.setLevelMode('science');
      });
    }

    // Top Navigation Scale/Mode buttons
    this.navButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetScale = btn.dataset.scale;
        audioSystem.playClick();
        this.app.switchScale(targetScale);
      });
    });

    // Info panel close
    if (this.infoCloseBtn) {
      this.infoCloseBtn.addEventListener('click', () => {
        this.closeInfoPanel();
      });
    }

    // Info panel minimize / expand
    if (this.infoMinimizeBtn) {
      this.infoMinimizeBtn.addEventListener('click', () => {
        if (this.infoPanel) {
          const isMin = this.infoPanel.classList.toggle('minimized');
          this.infoMinimizeBtn.textContent = isMin ? '▲' : '▼';
        }
      });
    }

    // Fly to target button
    if (this.flyToTargetBtn) {
      this.flyToTargetBtn.addEventListener('click', () => {
        if (this.currentSelectedObject) {
          audioSystem.playClick();
          this.app.flyToObject(this.currentSelectedObject);
        }
      });
    }

    // Take Quiz quick button
    if (this.takeQuizBtn) {
      this.takeQuizBtn.addEventListener('click', () => {
        audioSystem.playClick();
        if (this.quizContainer) {
          this.quizContainer.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Visual Learning Buttons (WHY, HOW, WHAT, COMPARE, SCALE, EVIDENCE, WATER, ATMOSPHERE, LIFE)
    this.visualButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabKey = btn.dataset.tab;
        this.toggleVisualTab(tabKey, btn);
      });
    });

    // Quiz Next / Retry buttons
    if (this.quizNextBtn) {
      this.quizNextBtn.addEventListener('click', () => {
        this.currentQuizIndex++;
        this.renderQuizQuestion();
      });
    }

    if (this.quizRetryBtn) {
      this.quizRetryBtn.addEventListener('click', () => {
        this.currentQuizIndex = 0;
        this.quizScore = 0;
        this.renderQuizQuestion();
      });
    }

    // Time controls
    if (this.simPauseBtn) {
      this.simPauseBtn.addEventListener('click', () => {
        const isPaused = this.app.simClock.togglePause();
        this.simPauseBtn.textContent = isPaused ? '▶ Resume' : '⏸ Pause';
        this.simPauseBtn.classList.toggle('active', isPaused);
        audioSystem.playClick();
      });
    }

    if (this.simSpeedBtn) {
      this.simSpeedBtn.addEventListener('click', () => {
        const newLabel = this.app.simClock.cycleSpeed();
        if (this.simSpeedLabel) this.simSpeedLabel.textContent = newLabel;
        audioSystem.playClick();
      });
    }

    // Spacecraft mode toggle
    if (this.toggleFlightBtn) {
      this.toggleFlightBtn.addEventListener('click', () => {
        audioSystem.playClick();
        this.app.toggleFlightMode();
      });
    }

    // Orbit paths toggle
    if (this.toggleOrbitsBtn) {
      this.toggleOrbitsBtn.addEventListener('click', () => {
        audioSystem.playClick();
        const active = this.app.solarSystem.showOrbits;
        this.app.solarSystem.toggleOrbits(!active);
        this.toggleOrbitsBtn.classList.toggle('active', !active);
      });
    }

    // Sound toggle
    if (this.toggleSoundBtn) {
      this.toggleSoundBtn.addEventListener('click', () => {
        const isMuted = audioSystem.toggleMute();
        this.toggleSoundBtn.textContent = isMuted ? '🔇 Audio Off' : '🔊 Audio On';
        this.toggleSoundBtn.classList.toggle('active', !isMuted);
      });
    }

    // Quality selector
    if (this.qualitySelect) {
      this.qualitySelect.addEventListener('change', (e) => {
        this.app.sceneManager.setQuality(e.target.value);
      });
    }

    // Keyboard shortcuts
    window.addEventListener('keydown', (e) => {
      if (document.activeElement === this.searchInput || document.activeElement?.id === 'catalog-search-input') return;
      if (e.code === 'Space' && !this.app.spacecraft.flightModeActive && !this.app.freeFlyController.isMoving()) {
        if (this.simPauseBtn) this.simPauseBtn.click();
      }
      if (e.code === 'KeyF') {
        this.app.toggleFlightMode();
      }
      if (e.code === 'Escape') {
        if (this.app.travelSystem.isTravelling) {
          this.app.travelSystem.cancel();
          this.showToast('Autopilot Cancelled', 'Switched to free camera flight.');
        } else {
          this.closeInfoPanel();
        }
      }
    });
  }

  toggleVisualTab(tabKey, activeBtn) {
    audioSystem.playClick();

    if (this.activeVisualTab === tabKey && this.visualLearningContainer.classList.contains('active')) {
      this.visualLearningContainer.classList.remove('active');
      this.visualButtons.forEach(b => b.classList.remove('active'));
      this.activeVisualTab = null;
      return;
    }

    this.activeVisualTab = tabKey;
    this.visualButtons.forEach(b => b.classList.toggle('active', b === activeBtn));

    const data = this.currentSelectedObject;
    if (!data) return;

    const edu = data.educational || {};
    let title = '';
    let content = '';

    switch (tabKey) {
      case 'why':
        title = `🧠 WHY: ${edu.whyQuestion || `Why is ${data.name} like this?`}`;
        content = edu.whyAnswer || data.description || 'Scientific mechanisms explain this world’s distinct features.';
        break;

      case 'how':
        title = `🔬 HOW: ${edu.howQuestion || `How does ${data.name} work?`}`;
        content = edu.howAnswer || `Orbital dynamics, stellar radiation, and planetary geology govern ${data.name}.`;
        break;

      case 'what':
        title = `🔭 WHAT: Composition & Anatomy`;
        content = `
          <strong>Core Nature:</strong> ${data.objectType || data.type || 'Celestial Object'}<br>
          <strong>Atmosphere:</strong> ${data.atmosphere || 'UNKNOWN / None'}<br>
          <strong>Magnetic Field:</strong> ${data.magneticField || 'UNKNOWN / None detected'}
        `;
        break;

      case 'compare':
        title = `⚖️ SIZE & SCALE COMPARISON`;
        content = this.generateSizeComparisonHTML(data);
        break;

      case 'scale':
        title = `📏 COSMIC SCALE`;
        content = `
          <strong>Radius:</strong> ${data.radiusKm ? `${data.radiusKm.toLocaleString()} km` : (data.radius ? `${data.radius} units` : 'UNKNOWN')}<br>
          <strong>Mass:</strong> ${data.massFormatted || data.mass || 'UNKNOWN'}<br>
          <strong>Distance from Earth:</strong> ${data.distanceFromEarth || (data.distanceAU ? `${data.distanceAU} AU` : 'UNKNOWN')}
        `;
        break;

      case 'evidence':
        title = `🔍 SCIENTIFIC EVIDENCE & OBSERVATIONS`;
        content = `
          <strong>Data Status:</strong> ${data.dataStatus || 'REAL / CATALOGUED'}<br>
          <strong>Source / Missions:</strong> ${data.source || 'NASA / JPL / ESA Scientific Observatories'}<br>
          <strong>Evidence:</strong> ${edu.evidenceText || 'Verified through spectroscopic measurements and orbital radar scans.'}
        `;
        break;

      case 'water':
        title = `💧 WATER & ICE STATUS`;
        content = `
          <strong>Classification:</strong> ${data.waterStatus || 'UNKNOWN'}<br>
          <strong>Details:</strong> ${data.waterDetails || 'No significant water reservoir detected.'}
        `;
        break;

      case 'atmosphere':
        title = `💨 ATMOSPHERE & CLIMATE`;
        content = `
          <strong>Composition:</strong> ${data.atmosphere || 'UNKNOWN'}<br>
          <strong>Pressure / Thickness:</strong> ${data.atmosphereThickness || (data.atmospherePressure ? `${data.atmospherePressure} bar` : 'UNKNOWN')}
        `;
        break;

      case 'life':
        title = `🌱 HABITABILITY & LIFE STATUS`;
        content = `
          <strong>Life Status:</strong> <span style="color:${data.lifeStatus === LIFE_STATUS.LIFE_CONFIRMED ? '#00e676' : '#ffb300'}; font-weight:700;">${data.lifeStatus || 'UNKNOWN'}</span><br>
          <strong>Habitability Assessment:</strong> ${data.habitability || 'Hostile extreme environment.'}
        `;
        break;
    }

    if (this.visualLearningTitle) this.visualLearningTitle.innerHTML = title;
    if (this.visualLearningContent) this.visualLearningContent.innerHTML = content;
    this.visualLearningContainer.classList.add('active');
  }

  generateSizeComparisonHTML(data) {
    const rKm = data.radiusKm || 6371;
    const earthR = 6371;
    const moonR = 1737;
    const jupiterR = 69911;

    const ratioEarth = (rKm / earthR).toFixed(2);
    const ratioMoon = (rKm / moonR).toFixed(2);
    const ratioJupiter = (rKm / jupiterR).toFixed(2);

    return `
      <div style="display:flex; flex-direction:column; gap:6px; margin-top:4px;">
        <div><strong>Relative to Earth (6,371 km):</strong> ${ratioEarth}× Earth radius</div>
        <div><strong>Relative to Moon (1,737 km):</strong> ${ratioMoon}× Moon radius</div>
        <div><strong>Relative to Jupiter (69,911 km):</strong> ${ratioJupiter}× Jupiter radius</div>
        <div style="background:rgba(0,0,0,0.4); border-radius:4px; height:12px; position:relative; margin-top:4px; overflow:hidden;">
          <div style="width:${Math.min(100, Math.max(5, (rKm / earthR) * 50))}%; height:100%; background:linear-gradient(90deg, var(--accent-cyan), var(--accent-gold)); border-radius:4px;"></div>
        </div>
      </div>
    `;
  }

  setLevelMode(mode) {
    if (mode === 'easy') {
      if (this.levelBtnEasy) {
        this.levelBtnEasy.classList.add('active');
        this.levelBtnEasy.style.background = 'var(--accent-cyan)';
        this.levelBtnEasy.style.color = '#010308';
      }
      if (this.levelBtnScience) {
        this.levelBtnScience.classList.remove('active');
        this.levelBtnScience.style.background = 'transparent';
        this.levelBtnScience.style.color = 'var(--text-dim)';
      }
      if (this.easyModeContent) this.easyModeContent.style.display = 'flex';
      if (this.scienceModeContent) this.scienceModeContent.style.display = 'none';
    } else {
      if (this.levelBtnScience) {
        this.levelBtnScience.classList.add('active');
        this.levelBtnScience.style.background = 'var(--accent-magenta)';
        this.levelBtnScience.style.color = '#fff';
      }
      if (this.levelBtnEasy) {
        this.levelBtnEasy.classList.remove('active');
        this.levelBtnEasy.style.background = 'transparent';
        this.levelBtnEasy.style.color = 'var(--text-dim)';
      }
      if (this.easyModeContent) this.easyModeContent.style.display = 'none';
      if (this.scienceModeContent) this.scienceModeContent.style.display = 'flex';
    }
  }

  async showInfoPanel(data) {
    if (!this.infoPanel) return;
    this.currentSelectedObject = data;

    // Try fetching freshest detailed object from backend API with fallback
    try {
      const res = await fetch(`/api/objects/${data.id}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.object) {
          data = { ...data, ...json.object };
          this.currentSelectedObject = data;
        }
      }
    } catch (e) {
      // Offline / local fallback continues seamlessly
    }

    // Default to Easy explanation level
    this.setLevelMode('easy');

    // Badges: Real catalog status, Hypothetical/Theoretical warning, & Procedural visualization warning
    if (this.infoBadgeRow) {
      const isReal = data.dataStatus || data.status || DATA_STATUS.REAL_CATALOGUED;
      const isHypo = isReal.includes('HYPOTHETICAL') || isReal.includes('THEORETICAL');
      const badgeStyle = isHypo ? 'background:rgba(224,64,251,0.25); border-color:#e040fb; color:#e040fb; font-weight:800;' : '';
      const visStatus = data.visualizationStatus || 'ACCURATE MODEL';

      this.infoBadgeRow.innerHTML = `
        <span class="badge-real" style="${badgeStyle}">${isReal}</span>
        ${data.catalogId ? `<span class="badge-real" style="border-color:var(--accent-gold); color:var(--accent-gold);">${data.catalogId}</span>` : ''}
        <span class="badge-vis">VISUAL: ${visStatus}</span>
      `;
    }

    if (this.infoTitle) this.infoTitle.textContent = data.name || 'Celestial Body';
    if (this.infoType) this.infoType.textContent = data.objectType || data.type || '';

    // Class 5-10 Educational text & Structured Teacher Sequence
    const edu = data.educational || {};

    if (this.learnMeetText) {
      this.learnMeetText.textContent = edu.meet || (data.name ? `Meet ${data.name}, an awe-inspiring astronomical marvel!` : 'Meet this incredible cosmic wonder!');
    }
    if (this.learnWhatText) {
      this.learnWhatText.textContent = edu.whatIsIt || data.description || 'A fascinating celestial body observed in the cosmos.';
    }
    if (this.learnSizeText) {
      this.learnSizeText.textContent = edu.howBig || (data.radiusKm ? `${data.radiusKm.toLocaleString()} km radius` : (data.radius ? `${data.radius} km radius` : 'Measured astronomical scale'));
    }
    if (this.learnWhereText) {
      this.learnWhereText.textContent = edu.whereIsIt || data.distanceFromEarth || (data.distanceAU ? `${data.distanceAU} AU from Sun` : (data.location || 'Deep space coordinate'));
    }
    if (this.learnMadeText) {
      this.learnMadeText.textContent = edu.whatMadeOf || data.composition || data.atmosphere || 'Dense astrophysical elements and cosmic plasma.';
    }
    if (this.learnLikeText) {
      this.learnLikeText.textContent = edu.whatIsItLike || edu.whatLike || data.surfaceTemp || (data.temperatureK ? `${data.temperatureK} K` : 'Unique cosmic space environment.');
    }
    if (this.learnWaterText) {
      this.learnWaterText.textContent = edu.doesItHaveWater || data.waterStatus || data.waterDetails || 'No liquid surface water detected.';
    }
    if (this.learnAtmoText) {
      this.learnAtmoText.textContent = edu.doesItHaveAtmosphere || data.atmosphere || 'Trace exosphere / vacuum space environment.';
    }
    if (this.learnLifeText) {
      this.learnLifeText.textContent = edu.couldLifeExist || data.lifeStatus || data.habitability || 'Extreme hostile environment.';
    }
    if (this.learnSpecialText) {
      this.learnSpecialText.textContent = edu.whySpecial || data.habitability || data.specialFeatures || 'Key astronomical properties observed.';
    }
    if (this.learnFactText) {
      this.learnFactText.textContent = edu.didYouKnow || 'Light travels across the universe at 299,792 km per second!';
    }

    // Science Mode Detailed Astrophysics Summary
    if (this.scienceSummaryText) {
      this.scienceSummaryText.innerHTML = `
        <div style="margin-bottom:6px;"><strong>Astrophysical Overview:</strong> ${edu.moreScience || data.description || 'Data compiled from astronomical survey catalogs.'}</div>
        <div style="display:flex; flex-direction:column; gap:3px; font-size:10.5px; background:rgba(0,0,0,0.3); padding:8px; border-radius:6px;">
          <div>• <strong>Spectral / Structural Class:</strong> ${data.spectralType || data.objectType || data.type || 'N/A'}</div>
          <div>• <strong>Gravitational Surface Acceleration:</strong> ${data.gravity || 'N/A'}</div>
          <div>• <strong>Density / State:</strong> ${data.density || 'N/A'}</div>
          <div>• <strong>Magnetic Field:</strong> ${data.magneticField || 'N/A'}</div>
          <div>• <strong>Observational Authority:</strong> ${data.source || 'NASA / JPL Horizons / ESA Gaia / SIMBAD'}</div>
        </div>
      `;
    }

    // Reset visual tab
    if (this.visualLearningContainer) {
      this.visualLearningContainer.classList.remove('active');
      this.visualButtons.forEach(b => b.classList.remove('active'));
      this.activeVisualTab = null;
    }

    // Populate Scientific Telemetry Grid
    if (this.infoStatsGrid) {
      this.infoStatsGrid.innerHTML = '';
      const statKeys = [
        ['Mass', data.massFormatted || data.mass || 'UNKNOWN'],
        ['Radius', data.radiusKm ? `${data.radiusKm.toLocaleString()} km` : (data.radius || data.diameterLy || 'UNKNOWN')],
        ['Surface Temp', data.surfaceTemp || (data.temperatureK ? `${data.temperatureK} K` : 'UNKNOWN')],
        ['Distance', data.distanceFromEarth || (data.distanceAU ? `${data.distanceAU} AU` : 'UNKNOWN')],
        ['Orbit Period', data.orbitalPeriod || (data.orbitalPeriodDays ? `${data.orbitalPeriodDays.toFixed(1)} days` : 'UNKNOWN')],
        ['Rotation', data.rotationPeriod || (data.rotationPeriodHours ? `${Math.abs(data.rotationPeriodHours).toFixed(1)} hrs` : 'UNKNOWN')],
        ['Gravity', data.gravity || 'UNKNOWN'],
        ['Atmosphere', data.atmosphere || 'UNKNOWN'],
        ['Water Status', data.waterStatus || 'UNKNOWN'],
        ['Life Status', data.lifeStatus || 'UNKNOWN'],
        ['Source / Ref', data.source || 'NASA / JPL / ESA']
      ];

      statKeys.forEach(([label, val]) => {
        const row = document.createElement('div');
        row.className = 'stat-card';
        row.innerHTML = `
          <div class="stat-label">${label}</div>
          <div class="stat-val">${val}</div>
        `;
        this.infoStatsGrid.appendChild(row);
      });
    }

    // Load Quiz for this object
    this.loadQuizForObject(data);

    // Update target indicator in HUD
    if (this.targetDistIndicator) {
      this.targetDistIndicator.innerHTML = `🎯 <strong>TARGET:</strong> ${data.name} (${data.distanceFromEarth || (data.distanceAU ? `${data.distanceAU} AU` : 'In Range')})`;
    }

    this.infoPanel.classList.remove('hidden');
    this.infoPanel.classList.remove('minimized');
    if (this.infoMinimizeBtn) this.infoMinimizeBtn.textContent = '▼';
  }

  loadQuizForObject(data) {
    this.currentQuizData = data.quiz || [];
    this.currentQuizIndex = 0;
    this.quizScore = 0;

    // If data.quiz is empty, synthesize 2 simple Class 5-10 questions directly from the object's visible data
    if (this.currentQuizData.length === 0) {
      const name = data.name || 'this celestial body';
      const type = data.objectType || data.type || 'astronomical body';
      this.currentQuizData = [
        {
          question: `What kind of object is ${name}?`,
          options: [type, 'A wandering black hole', 'An interstellar cloud of helium', 'A rogue artificial satellite'],
          correct: 'A',
          explanation: `${name} is catalogued as a ${type}.`
        },
        {
          question: `What is the life status of ${name}?`,
          options: [
            data.lifeStatus || 'NO CONFIRMED LIFE',
            'Alien civilization thriving',
            'Full of dinosaurs',
            'Covered in tropical forests'
          ],
          correct: 'A',
          explanation: `According to real astronomical data, ${name} is marked as "${data.lifeStatus || 'NO CONFIRMED LIFE'}".`
        }
      ];
    }

    this.renderQuizQuestion();
  }

  renderQuizQuestion() {
    if (!this.quizContainer || !this.quizQuestionText) return;

    if (this.currentQuizIndex >= this.currentQuizData.length) {
      // Quiz complete
      this.quizQuestionText.textContent = `🎉 Quiz Completed! You scored ${this.quizScore} / ${this.currentQuizData.length}!`;
      this.quizOptionsList.innerHTML = '';
      this.quizFeedbackBox.className = 'quiz-feedback show success';
      this.quizFeedbackBox.textContent = `Great job exploring ${this.currentSelectedObject?.name || 'space'}! Keep discovering new worlds.`;
      if (this.quizNextBtn) this.quizNextBtn.style.display = 'none';
      if (this.quizRetryBtn) this.quizRetryBtn.style.display = 'inline-block';
      if (this.quizScoreIndicator) this.quizScoreIndicator.textContent = `Score: ${this.quizScore}/${this.currentQuizData.length} ⭐`;
      return;
    }

    const q = this.currentQuizData[this.currentQuizIndex];
    this.quizQuestionText.textContent = `Q${this.currentQuizIndex + 1}: ${q.question}`;
    this.quizOptionsList.innerHTML = '';
    this.quizFeedbackBox.className = 'quiz-feedback';
    this.quizFeedbackBox.style.display = 'none';

    if (this.quizNextBtn) this.quizNextBtn.style.display = 'none';
    if (this.quizRetryBtn) this.quizRetryBtn.style.display = 'none';
    if (this.quizScoreIndicator) {
      this.quizScoreIndicator.textContent = `Question ${this.currentQuizIndex + 1}/${this.currentQuizData.length} | Score: ${this.quizScore}`;
    }

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, optIdx) => {
      const letter = letters[optIdx];
      const btn = document.createElement('button');
      btn.className = 'quiz-opt-btn';
      btn.innerHTML = `<strong>${letter}.</strong> ${optText}`;

      btn.addEventListener('click', () => {
        this.handleQuizAnswer(letter, q, btn);
      });

      this.quizOptionsList.appendChild(btn);
    });
  }

  handleQuizAnswer(selectedLetter, questionObj, clickedBtn) {
    // Disable all buttons in list
    const allBtns = this.quizOptionsList.querySelectorAll('.quiz-opt-btn');
    allBtns.forEach(b => b.disabled = true);

    const isCorrect = selectedLetter.toUpperCase() === questionObj.correct.toUpperCase();

    if (isCorrect) {
      clickedBtn.classList.add('correct');
      audioSystem.playDiscoveryChime();
      this.quizScore++;
      this.quizFeedbackBox.className = 'quiz-feedback show success';
      this.quizFeedbackBox.innerHTML = `✅ <strong>Correct!</strong> ${questionObj.explanation}`;
    } else {
      clickedBtn.classList.add('wrong');
      // Highlight correct one
      const letters = ['A', 'B', 'C', 'D'];
      allBtns.forEach((b, idx) => {
        if (letters[idx] === questionObj.correct.toUpperCase()) {
          b.classList.add('correct');
        }
      });
      audioSystem.playClick();
      this.quizFeedbackBox.className = 'quiz-feedback show failure';
      this.quizFeedbackBox.innerHTML = `❌ <strong>Not quite!</strong> ${questionObj.explanation}`;
    }

    if (this.quizScoreIndicator) {
      this.quizScoreIndicator.textContent = `Score: ${this.quizScore}/${this.currentQuizData.length}`;
    }

    if (this.quizNextBtn) {
      this.quizNextBtn.style.display = 'inline-block';
    }
  }

  closeInfoPanel() {
    if (this.infoPanel) {
      this.infoPanel.classList.add('hidden');
    }
    this.currentSelectedObject = null;
    if (this.targetDistIndicator) {
      this.targetDistIndicator.innerHTML = `🎯 <strong>TARGET:</strong> None`;
    }
  }

  updateBreadcrumb(scaleKey, currentObjectName = null) {
    if (!this.breadcrumbBar) return;
    let html = '';

    const createCrumb = (label, scale) => {
      return `<span class="crumb-link" data-scale="${scale}">${label}</span>`;
    };

    switch (scaleKey) {
      case SCALES.MULTIVERSE:
        html = `<span class="crumb-active">MULTIVERSE</span>`;
        break;
      case SCALES.UNIVERSE:
        html = `${createCrumb('MULTIVERSE', SCALES.MULTIVERSE)} &gt; <span class="crumb-active">OBSERVABLE UNIVERSE</span>`;
        break;
      case SCALES.GALAXIES:
      case SCALES.GALAXY:
      case SCALES.MILKY_WAY:
        html = `${createCrumb('UNIVERSE', SCALES.UNIVERSE)} &gt; <span class="crumb-active">MILKY WAY GALAXY</span>`;
        break;
      case SCALES.SOLAR_SYSTEM:
      case SCALES.PLANETS:
        html = `${createCrumb('UNIVERSE', SCALES.UNIVERSE)} &gt; ${createCrumb('MILKY WAY', SCALES.MILKY_WAY)} &gt; <span class="crumb-active">SOLAR SYSTEM</span>`;
        break;
      case SCALES.PLANET_ORBIT:
      case SCALES.CLOSE_APPROACH:
      case SCALES.HABITABILITY:
      case SCALES.BLACK_HOLES:
      case SCALES.SPACECRAFT:
      case SCALES.LEARNING:
        const objName = currentObjectName || 'CELESTIAL OBJECT';
        html = `${createCrumb('UNIVERSE', SCALES.UNIVERSE)} &gt; ${createCrumb('MILKY WAY', SCALES.MILKY_WAY)} &gt; ${createCrumb('SOLAR SYSTEM', SCALES.SOLAR_SYSTEM)} &gt; <span class="crumb-active">${objName.toUpperCase()}</span>`;
        break;
    }

    this.breadcrumbBar.innerHTML = html;

    // Attach click listeners to breadcrumbs
    this.breadcrumbBar.querySelectorAll('.crumb-link').forEach(link => {
      link.addEventListener('click', () => {
        const targetScale = link.dataset.scale;
        audioSystem.playClick();
        this.app.switchScale(targetScale);
      });
    });
  }

  updateScaleUI(currentScale) {
    this.navButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.scale === currentScale);
    });
  }

  populateSidebar() {
    const listContainer = document.getElementById('sidebar-objects-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    const addSection = (title) => {
      const header = document.createElement('div');
      header.className = 'sidebar-section-title';
      header.textContent = title;
      listContainer.appendChild(header);
    };

    // Group 1: Solar System
    addSection('SOLAR SYSTEM');
    const planets = objectRegistry.getByCategory('planets');
    planets.forEach(p => {
      listContainer.appendChild(this.createSidebarItem(p.name, p.id === 'sun' ? 'Star' : 'Planet', () => {
        this.app.selectObject(p);
        this.app.flyToObject(p);
      }));
    });

    // Group 2: Exoplanet Systems
    addSection('HABITABLE EXOPLANETS');
    const exoplanets = objectRegistry.getByCategory('exoplanets');
    exoplanets.slice(0, 6).forEach(exo => {
      listContainer.appendChild(this.createSidebarItem(exo.name, 'Exoplanet', () => {
        this.app.selectObject(exo);
        this.app.flyToObject(exo);
      }));
    });

    // Group 3: Real Stars
    addSection('NEARBY STARS');
    const stars = objectRegistry.getByCategory('stars');
    stars.slice(0, 6).forEach(st => {
      listContainer.appendChild(this.createSidebarItem(st.name, st.spectralType || 'Star', () => {
        this.app.selectObject(st);
        this.app.flyToObject(st);
      }));
    });

    // Group 4: Asteroids & Minor Planets
    addSection('ASTEROIDS & DWARFS');
    const asteroids = objectRegistry.getByCategory('asteroids');
    asteroids.slice(0, 6).forEach(ast => {
      listContainer.appendChild(this.createSidebarItem(ast.name, ast.objectType || 'Asteroid', () => {
        this.app.selectObject(ast);
        this.app.flyToObject(ast);
      }));
    });

    // Group 5: Black Holes & Pulsars
    addSection('BLACK HOLES & PULSARS');
    const blackholes = objectRegistry.getByCategory('black_holes');
    blackholes.forEach(bh => {
      listContainer.appendChild(this.createSidebarItem(bh.name, 'Black Hole', () => {
        this.app.selectObject(bh);
        this.app.flyToObject(bh);
      }));
    });

    const pulsars = objectRegistry.getByCategory('pulsars');
    pulsars.forEach(pu => {
      listContainer.appendChild(this.createSidebarItem(pu.name, 'Pulsar', () => {
        this.app.selectObject(pu);
        this.app.flyToObject(pu);
      }));
    });

    // Group 6: Galaxies & Nebulae
    addSection('GALAXIES & NEBULAE');
    const galaxies = objectRegistry.getByCategory('galaxies');
    galaxies.slice(0, 4).forEach(gx => {
      listContainer.appendChild(this.createSidebarItem(gx.name, 'Galaxy', () => {
        this.app.selectObject(gx);
        this.app.flyToObject(gx);
      }));
    });

    const nebulae = objectRegistry.getByCategory('nebulae');
    nebulae.slice(0, 4).forEach(nb => {
      listContainer.appendChild(this.createSidebarItem(nb.name, 'Nebula', () => {
        this.app.selectObject(nb);
        this.app.flyToObject(nb);
      }));
    });

    // Group 7: Spacecraft Missions
    addSection('SPACECRAFT MISSIONS');
    const spacecraft = objectRegistry.getByCategory('spacecraft');
    spacecraft.slice(0, 5).forEach(sc => {
      listContainer.appendChild(this.createSidebarItem(sc.name, 'Probe', () => {
        this.app.selectObject(sc);
        this.app.flyToObject(sc);
      }));
    });
  }

  createSidebarItem(name, type, onClick) {
    const item = document.createElement('div');
    item.className = 'sidebar-item';
    item.innerHTML = `
      <span class="item-name">${name}</span>
      <span class="item-type">${type}</span>
    `;
    item.addEventListener('click', () => {
      audioSystem.playClick();
      onClick();
    });
    return item;
  }

  setupSearch() {
    if (!this.searchInput || !this.searchResults) return;

    this.searchInput.addEventListener('input', async (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        this.searchResults.classList.add('hidden');
        return;
      }

      let matches = [];

      // Query API backend first
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.results) {
            matches = json.results.map(r => {
              const reg = objectRegistry.get(r.id);
              return {
                id: r.id,
                name: r.name,
                type: r.objectType || r.category,
                distance: r.distance || 'Catalogued',
                raw: reg?.raw || r
              };
            });
          }
        }
      } catch (err) {
        // Fallback to local registry
      }

      if (matches.length === 0) {
        matches = objectRegistry.search(query);
      }

      this.searchResults.innerHTML = '';
      if (matches.length === 0) {
        this.searchResults.innerHTML = `<div class="search-item-empty">No astronomical catalog entries found</div>`;
      } else {
        matches.slice(0, 10).forEach(m => {
          const item = document.createElement('div');
          item.className = 'search-item';
          item.innerHTML = `
            <div>
              <div class="s-name">${m.name}</div>
              <div style="font-size:9.5px; color:#94a3b8;">${m.distance || 'Catalogue position'}</div>
            </div>
            <span class="s-type">${m.type}</span>
          `;
          item.addEventListener('click', () => {
            this.searchInput.value = '';
            this.searchResults.classList.add('hidden');
            audioSystem.playClick();
            this.app.selectObject(m.raw);
            this.app.flyToObject(m.raw);
          });
          this.searchResults.appendChild(item);
        });
      }
      this.searchResults.classList.remove('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!this.searchInput.contains(e.target) && !this.searchResults.contains(e.target)) {
        this.searchResults.classList.add('hidden');
      }
    });
  }

  showTooltip(text, clientX, clientY) {
    if (!this.hoverTooltip) return;
    if (!text) {
      this.hoverTooltip.style.display = 'none';
      return;
    }
    this.hoverTooltip.style.display = 'block';
    this.hoverTooltip.style.left = `${clientX + 14}px`;
    this.hoverTooltip.style.top = `${clientY + 14}px`;
    this.hoverTooltip.textContent = text;
  }

  showToast(title, message) {
    if (!this.toastContainer) return;
    audioSystem.playDiscoveryChime();

    const toast = document.createElement('div');
    toast.className = 'discovery-toast';
    toast.innerHTML = `
      <div class="toast-header">✨ DISCOVERY LOGGED</div>
      <div class="toast-title">${title}</div>
      <div class="toast-body">${message}</div>
    `;
    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 600);
    }, 4500);
  }

  updateTimeDisplay(clockData) {
    if (this.simDateLabel) {
      this.simDateLabel.textContent = clockData.currentDateStr;
    }
  }

  updateScaleUI(scaleKey) {
    if (!this.navButtons) return;
    this.navButtons.forEach(btn => {
      const match = btn.dataset.scale === scaleKey;
      btn.classList.toggle('active', match);
    });
  }

  updateBreadcrumb(scaleKey, objectName = null) {
    if (!this.breadcrumbBar) return;
    
    let crumbs = [];
    switch (scaleKey) {
      case 'MULTIVERSE':
        crumbs = [{ label: 'MULTIVERSE', scale: 'MULTIVERSE', active: !objectName }];
        break;
      case 'COSMIC_WEB':
        crumbs = [
          { label: 'MULTIVERSE', scale: 'MULTIVERSE' },
          { label: 'COSMIC WEB', scale: 'COSMIC_WEB', active: !objectName }
        ];
        break;
      case 'UNIVERSE':
        crumbs = [
          { label: 'MULTIVERSE', scale: 'MULTIVERSE' },
          { label: 'OBSERVABLE UNIVERSE', scale: 'UNIVERSE', active: !objectName }
        ];
        break;
      case 'GALAXIES':
        crumbs = [
          { label: 'UNIVERSE', scale: 'UNIVERSE' },
          { label: 'LOCAL GROUP GALAXIES', scale: 'GALAXIES', active: !objectName }
        ];
        break;
      case 'MILKY_WAY':
      case 'GALAXY':
        crumbs = [
          { label: 'UNIVERSE', scale: 'UNIVERSE' },
          { label: 'MILKY WAY', scale: 'MILKY_WAY', active: !objectName }
        ];
        break;
      case 'SOLAR_SYSTEM':
        crumbs = [
          { label: 'UNIVERSE', scale: 'UNIVERSE' },
          { label: 'MILKY WAY', scale: 'MILKY_WAY' },
          { label: 'SOLAR SYSTEM', scale: 'SOLAR_SYSTEM', active: !objectName }
        ];
        break;
      case 'PLANETS':
      case 'PLANET_ORBIT':
      case 'HABITABILITY':
        crumbs = [
          { label: 'UNIVERSE', scale: 'UNIVERSE' },
          { label: 'MILKY WAY', scale: 'MILKY_WAY' },
          { label: 'SOLAR SYSTEM', scale: 'SOLAR_SYSTEM' },
          { label: objectName ? objectName.toUpperCase() : 'PLANETS', scale: 'PLANETS', active: true }
        ];
        break;
      case 'BLACK_HOLES':
        crumbs = [
          { label: 'UNIVERSE', scale: 'UNIVERSE' },
          { label: 'MILKY WAY', scale: 'MILKY_WAY' },
          { label: objectName ? objectName.toUpperCase() : 'BLACK HOLES', scale: 'BLACK_HOLES', active: true }
        ];
        break;
      case 'WORMHOLE':
        crumbs = [
          { label: 'UNIVERSE', scale: 'UNIVERSE' },
          { label: 'SPACETIME ANOMALIES', scale: 'WORMHOLE' },
          { label: 'EINSTEIN-ROSEN BRIDGE', scale: 'WORMHOLE', active: true }
        ];
        break;
      case 'SPACECRAFT':
        crumbs = [
          { label: 'SOLAR SYSTEM', scale: 'SOLAR_SYSTEM' },
          { label: 'FLEET MISSIONS', scale: 'SPACECRAFT', active: !objectName }
        ];
        break;
      default:
        crumbs = [
          { label: 'UNIVERSE', scale: 'UNIVERSE' },
          { label: 'SOLAR SYSTEM', scale: 'SOLAR_SYSTEM', active: !objectName }
        ];
    }

    if (objectName && !crumbs.some(c => c.label === objectName.toUpperCase())) {
      crumbs.push({ label: objectName.toUpperCase(), active: true });
    }

    this.breadcrumbBar.innerHTML = crumbs.map((c, i) => {
      const isLast = i === crumbs.length - 1;
      if (isLast || c.active) {
        return `<span class="crumb-active">${c.label}</span>`;
      } else {
        return `<span class="crumb-link" data-scale="${c.scale}" style="cursor:pointer; color:var(--accent-cyan);">${c.label}</span> &gt; `;
      }
    }).join('');

    // Attach click listeners to breadcrumb links
    this.breadcrumbBar.querySelectorAll('.crumb-link').forEach(link => {
      link.addEventListener('click', () => {
        const scale = link.dataset.scale;
        if (scale) {
          audioSystem.playClick();
          this.app.switchScale(scale);
        }
      });
    });
  }
}
