/**
 * Spacecraft Flight HUD Overlay
 * Renders crosshair, speedometers, pitch ladder, heading tape, and target tracking brackets
 */
export class HUD {
  constructor() {
    this.container = document.getElementById('flight-hud');
    this.speedEl = document.getElementById('hud-speed-val');
    this.warpEl = document.getElementById('hud-warp-val');
    this.headingEl = document.getElementById('hud-heading-val');
    this.pitchEl = document.getElementById('hud-pitch-val');
    this.targetBracket = document.getElementById('hud-target-bracket');
    this.targetDistEl = document.getElementById('hud-target-dist');
  }

  show() {
    if (this.container) this.container.classList.remove('hidden');
  }

  hide() {
    if (this.container) this.container.classList.add('hidden');
  }

  update(telemetry, targetWorldPos = null, camera = null) {
    if (!this.container || this.container.classList.contains('hidden')) return;

    if (this.speedEl) this.speedEl.textContent = `${telemetry.speedKms} km/s`;
    if (this.warpEl) this.warpEl.textContent = `Warp ${telemetry.warpFactor}`;
    if (this.headingEl) this.headingEl.textContent = `${Math.round(telemetry.heading)}°`;
    if (this.pitchEl) this.pitchEl.textContent = `${(telemetry.position.y).toFixed(1)} AU-Y`;

    // Target tracking 2D screen bracket
    if (targetWorldPos && camera && this.targetBracket && this.targetDistEl) {
      const screenPos = targetWorldPos.clone().project(camera);
      // If target is in front of camera
      if (screenPos.z < 1) {
        const x = (screenPos.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-screenPos.y * 0.5 + 0.5) * window.innerHeight;
        this.targetBracket.style.display = 'block';
        this.targetBracket.style.transform = `translate(${x - 30}px, ${y - 30}px)`;

        const dist = camera.position.distanceTo(targetWorldPos);
        this.targetDistEl.textContent = `${(dist * 1.5).toFixed(1)} M-km`;
      } else {
        this.targetBracket.style.display = 'none';
      }
    } else if (this.targetBracket) {
      this.targetBracket.style.display = 'none';
    }
  }
}
