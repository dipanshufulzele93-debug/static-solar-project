/**
 * Simulation Clock
 * Controls astronomical time progression, speed multipliers, and pause/resume.
 */
export class SimClock {
  constructor() {
    this.isPaused = false;
    this.speedIndex = 1; // 1x default
    this.speedMultipliers = [0.1, 1, 10, 100, 1000, 10000, 100000];
    this.speedLabels = ['0.1×', '1× (Real)', '10×', '100×', '1,000×', '10,000×', '100,000×'];
    
    this.currentTime = new Date();
    this.elapsedSimDays = 0;
    this.lastRealTimestamp = performance.now();
    this.deltaSeconds = 0;
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    return this.isPaused;
  }

  setSpeedIndex(index) {
    if (index >= 0 && index < this.speedMultipliers.length) {
      this.speedIndex = index;
    }
  }

  cycleSpeed() {
    this.speedIndex = (this.speedIndex + 1) % this.speedMultipliers.length;
    return this.getSpeedLabel();
  }

  getSpeedMultiplier() {
    return this.isPaused ? 0 : this.speedMultipliers[this.speedIndex];
  }

  getSpeedLabel() {
    if (this.isPaused) return 'PAUSED';
    return this.speedLabels[this.speedIndex];
  }

  update() {
    const now = performance.now();
    const realDeltaSec = Math.min((now - this.lastRealTimestamp) / 1000, 0.1);
    this.lastRealTimestamp = now;

    if (!this.isPaused) {
      // 1 real second = 1 sim day at 1x speed for visual orbital dynamics
      const mult = this.speedMultipliers[this.speedIndex];
      const deltaDays = (realDeltaSec * mult) / 10.0;
      this.elapsedSimDays += deltaDays;
      this.deltaSeconds = realDeltaSec;
      
      const msToAdd = deltaDays * 86400000;
      this.currentTime = new Date(this.currentTime.getTime() + msToAdd);
    } else {
      this.deltaSeconds = 0;
    }

    return {
      deltaSeconds: this.deltaSeconds,
      elapsedSimDays: this.elapsedSimDays,
      currentDateStr: this.currentTime.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      speedLabel: this.getSpeedLabel()
    };
  }
}
