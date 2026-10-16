import { objectRegistry } from '../data/ObjectRegistry.js';
import { audioSystem } from '../systems/AudioSystem.js';

/**
 * Astronomy Catalog Explorer Modal
 * Categorized browser with filters, live search, scientific badges, and one-click fly-to.
 */
export class CatalogUI {
  constructor(app) {
    this.app = app;
    this.modal = document.getElementById('catalog-modal');
    this.openBtn = document.getElementById('open-catalog-btn');
    this.closeBtn = document.getElementById('catalog-close-btn');
    this.filterButtons = document.querySelectorAll('.catalog-tab-btn');
    this.searchInput = document.getElementById('catalog-search-input');
    this.gridContainer = document.getElementById('catalog-grid');

    this.currentCategory = 'all';
    this.currentSearchQuery = '';

    this.setupEvents();
    this.updateTabCounts();
  }

  setupEvents() {
    if (this.openBtn) {
      this.openBtn.addEventListener('click', () => {
        audioSystem.playClick();
        this.open();
      });
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => {
        this.close();
      });
    }

    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        audioSystem.playClick();
        this.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentCategory = btn.dataset.category;
        this.renderGrid();
      });
    });

    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.currentSearchQuery = e.target.value.toLowerCase().trim();
        this.renderGrid();
      });
    }
  }

  open() {
    if (!this.modal) return;
    this.modal.classList.remove('hidden');
    this.renderGrid();
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.add('hidden');
  }

  updateTabCounts() {
    const counts = objectRegistry.getCounts();
    const countElements = {
      all: document.getElementById('count-all'),
      stars: document.getElementById('count-stars'),
      exoplanets: document.getElementById('count-exoplanets'),
      planets: document.getElementById('count-planets'),
      asteroids: document.getElementById('count-asteroids'),
      comets: document.getElementById('count-comets'),
      clusters: document.getElementById('count-clusters'),
      galaxies: document.getElementById('count-galaxies'),
      black_holes: document.getElementById('count-blackholes'),
      nebulae: document.getElementById('count-nebulae'),
      spacecraft: document.getElementById('count-spacecraft')
    };

    for (const [key, el] of Object.entries(countElements)) {
      if (el && counts[key] !== undefined) {
        el.textContent = `(${counts[key]})`;
      }
    }
  }

  renderGrid() {
    if (!this.gridContainer) return;
    this.gridContainer.innerHTML = '';

    let items = [];
    if (this.currentCategory === 'all') {
      items = objectRegistry.getByCategory('all');
    } else {
      const rawList = objectRegistry.getByCategory(this.currentCategory);
      items = rawList.map(raw => ({
        id: raw.id,
        name: raw.name,
        type: raw.type || raw.objectType || this.currentCategory,
        category: this.currentCategory,
        raw,
        distance: raw.distanceFromEarth || raw.distanceLy || (raw.distanceAU ? `${raw.distanceAU} AU` : (raw.location || 'Local'))
      }));
    }

    if (this.currentSearchQuery) {
      items = items.filter(it => {
        return it.name.toLowerCase().includes(this.currentSearchQuery) ||
               it.type.toLowerCase().includes(this.currentSearchQuery) ||
               (it.raw.catalogId && it.raw.catalogId.toLowerCase().includes(this.currentSearchQuery));
      });
    }

    if (items.length === 0) {
      this.gridContainer.innerHTML = `
        <div class="catalog-empty">
          <div style="font-size:24px; margin-bottom:8px;">🔍</div>
          No catalogued objects found matching your criteria.
        </div>
      `;
      return;
    }

    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'catalog-card';

      const raw = item.raw;
      const statusBadge = raw.status || 'REAL CATALOGUED OBJECT';
      const visStatus = raw.visualizationStatus ? `<div class="card-vis-status">VISUAL: ${raw.visualizationStatus}</div>` : '';
      const catalogId = raw.catalogId ? `<div class="card-catalog-id">${raw.catalogId}</div>` : '';
      const dist = item.distance ? `<div class="card-prop"><span>Distance:</span> ${item.distance}</div>` : '';
      const spec = raw.spectralType ? `<div class="card-prop"><span>Spectral:</span> ${raw.spectralType}</div>` : '';
      const mass = raw.mass ? `<div class="card-prop"><span>Mass:</span> ${raw.mass}</div>` : '';

      card.innerHTML = `
        <div class="card-header">
          <div class="card-title">${item.name}</div>
          <div class="card-badge">${statusBadge}</div>
        </div>
        ${catalogId}
        <div class="card-type">${item.type}</div>
        <div class="card-details">
          ${dist}
          ${spec}
          ${mass}
        </div>
        ${visStatus}
        <button class="card-fly-btn">🚀 Engage Intercept Course</button>
      `;

      const flyBtn = card.querySelector('.card-fly-btn');
      flyBtn.addEventListener('click', () => {
        audioSystem.playClick();
        this.close();
        this.app.selectObject(raw);
        this.app.flyToObject(raw);
      });

      this.gridContainer.appendChild(card);
    });
  }
}
