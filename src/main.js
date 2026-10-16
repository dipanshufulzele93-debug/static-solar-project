import { App } from './App.js';

/**
 * Bootstrap entry point for Universe Explorer
 */
function init() {
  if (window.__app_initialized) return;
  window.__app_initialized = true;

  try {
    console.log('🌌 Initializing Universe Explorer...');
    const app = new App();
    window.app = app;

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      app.update();
    }

    animate();
    console.log('✨ Universe Explorer initialized and animation loop running.');
  } catch (err) {
    console.error('❌ Failed to initialize Universe Explorer:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
