/* ============================================
   ui.js — DOM helpers, render, templates
   The Love Dare App
   ============================================ */

const UI = (() => {
  'use strict';

  // --- DOM helpers ---
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  function createElement(tag, attrs = {}, children = []) {
    const el = document.createElement(tag);
    for (const [key, val] of Object.entries(attrs)) {
      if (key === 'className') el.className = val;
      else if (key === 'dataset') Object.assign(el.dataset, val);
      else if (key === 'style' && typeof val === 'object') Object.assign(el.style, val);
      else if (key.startsWith('on')) el.addEventListener(key.slice(2), val);
      else if (key === 'innerHTML') el.innerHTML = val;
      else el.setAttribute(key, val);
    }
    for (const child of children) {
      if (child == null) continue;
      if (typeof child === 'string') el.appendChild(document.createTextNode(child));
      else el.appendChild(child);
    }
    return el;
  }

  function clearContainer(el) {
    while (el.firstChild) el.removeChild(el.firstChild);
  }

  function formatDate(date = new Date()) {
    const d = date instanceof Date ? date : new Date(date);
    return d.toLocaleDateString('es-ES', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  function shortDate(date = new Date()) {
    const d = date instanceof Date ? date : new Date(date);
    return d.toLocaleDateString('es-ES', {
      month: 'short', day: 'numeric'
    });
  }

  // --- Icons (SVG) ---
  const ICONS = {
    home: `<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
    grid: `<svg viewBox="0 0 24 24"><path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z"/></svg>`,
    journal: `<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,
    darkMode: `<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>`,
    lightMode: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5"/><g stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="12" y1="1" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="23"/><line x1="1" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="23" y2="12"/><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/></g></svg>`,
    arrowForward: `<svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`,
    arrowBack: `<svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>`,
    check: `<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`,
    close: `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,
    heart: `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    star: `<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,
    fire: `<svg viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>`,
    menu: `<svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`,
  };

  // Mood emojis for day view
  const ICONS_BY_MOOD = ['😊', '😐', '😢', '😡', '🙏', '❤️', '💌'];

  // --- Templates ---

  function headerBadge(text) {
    return createElement('span', {
      className: 'current-day-card__badge',
      innerHTML: text
    });
  }

  function emptyState(icon, title, text) {
    const el = createElement('div', { className: 'empty-state' });
    el.innerHTML = `
      <div class="empty-state__icon">${icon}</div>
      <div class="empty-state__title">${title}</div>
      <div class="empty-state__text">${text}</div>
    `;
    return el;
  }

  function verseCard(text, ref) {
    const el = createElement('div', { className: 'verse-card' });
    el.innerHTML = `
      <div class="verse-card__text">${text}</div>
      <div class="verse-card__ref">— ${ref}</div>
    `;
    return el;
  }

  function dayCell(day, status = 'pending') {
    const el = createElement('div', {
      className: `day-cell day-cell--${status}`,
      dataset: { day },
      role: 'button',
      tabindex: '0',
      'aria-label': `Día ${day}`
    });
    el.innerHTML = `<span class="day-cell__number">${day}</span>`;
    return el;
  }

  function circularProgress(percent) {
    const radius = 48;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;
    const el = createElement('div', { className: 'circular-progress' });
    el.innerHTML = `
      <svg viewBox="0 0 100 100">
        <circle class="circular-progress__bg" cx="50" cy="50" r="${radius}" />
        <circle class="circular-progress__fill" cx="50" cy="50" r="${radius}"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${offset}" />
      </svg>
      <div class="circular-progress__text">${Math.round(percent)}%</div>
    `;
    return el;
  }

  function bottomSheet(title, content) {
    const overlay = createElement('div', { className: 'modal-overlay', hidden: true });
    overlay.innerHTML = `
      <div class="modal-sheet" role="dialog" aria-modal="true">
        <div class="modal-sheet__handle"></div>
        <div class="modal-sheet__title">${title}</div>
        <div class="modal-sheet__content"></div>
      </div>
    `;
    const contentArea = overlay.querySelector('.modal-sheet__content');
    if (typeof content === 'string') contentArea.innerHTML = content;
    else contentArea.appendChild(content);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.hidden = true;
    });

    return overlay;
  }

  // --- Render helpers ---

  function renderHome(day, completed, total, streak) {
    const el = createElement('div');
    el.innerHTML = `
      <div class="hero">
        <div class="hero__icon">${ICONS.heart}</div>
        <div class="hero__title">El Desafío<br>del Amor</div>
        <div class="hero__subtitle">40 días para transformar tu relación</div>
      </div>
    `;

    // Current day card
    const dayCard = createElement('div', {
      className: 'current-day-card',
      role: 'button',
      tabindex: '0',
      dataset: { action: 'open-day', day }
    });
    dayCard.innerHTML = `
      <div class="current-day-card__badge">Día actual</div>
      <div class="current-day-card__day">Día ${day}</div>
      <div class="current-day-card__theme">Continúa tu desafío</div>
      <div class="current-day-card__cta">
        Abrir día ${day}
        ${ICONS.arrowForward}
      </div>
    `;
    el.appendChild(dayCard);

    // Stats row
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    const stats = createElement('div', { className: 'home-stats' });
    stats.innerHTML = `
      <div class="home-stat">
        <div class="home-stat__number">${completed}</div>
        <div class="home-stat__label">Completados</div>
      </div>
      <div class="home-stat">
        <div class="home-stat__number">${pct}%</div>
        <div class="home-stat__label">Progreso</div>
      </div>
      <div class="home-stat">
        <div class="home-stat__number">${40 - completed}</div>
        <div class="home-stat__label">Restantes</div>
      </div>
    `;
    el.appendChild(stats);

    // Streak if any
    if (streak > 0) {
      const streakEl = createElement('div', { className: 'streak' });
      streakEl.innerHTML = `
        <span class="streak__fire">${ICONS.fire}</span>
        <span>${streak} días consecutivos</span>
      `;
      el.appendChild(streakEl);
    }

    // Quote
    const quote = createElement('div', { className: 'home-quote' });
    quote.innerHTML = `
      <div class="home-quote__text">El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.</div>
      <div class="home-quote__source">— 1 Corintios 13:4</div>
    `;
    el.appendChild(quote);

    return el;
  }

  function renderDayGrid(progress) {
    const el = createElement('div');
    el.innerHTML = `
      <div class="progress-header">
        <div class="progress-header__title">40 Días de Amor</div>
        <div class="progress-header__subtitle">Tu viaje día a día</div>
      </div>
    `;

    // Progress stats bar
    const done = progress.filter(p => p.status === 'done').length;
    const current = progress.filter(p => p.status === 'current').length;
    const pending = progress.filter(p => p.status === 'pending').length;
    const statsBar = createElement('div', { className: 'progress-stats-bar' });
    statsBar.innerHTML = `
      <div class="progress-stat">
        <span class="progress-stat__dot pending"></span>
        <span class="progress-stat__count">${pending}</span> pendientes
      </div>
      <div class="progress-stat">
        <span class="progress-stat__dot current"></span>
        <span class="progress-stat__count">${current}</span> en curso
      </div>
      <div class="progress-stat">
        <span class="progress-stat__dot done"></span>
        <span class="progress-stat__count">${done}</span> completados
      </div>
    `;
    el.appendChild(statsBar);

    // Progress bar
    const pct = progress.length > 0 ? Math.round((done / progress.length) * 100) : 0;
    const progressBar = createElement('div', { className: 'progress-bar' });
    progressBar.innerHTML = `<div class="progress-bar__fill" style="width:${pct}%"></div>`;
    el.appendChild(progressBar);

    // Day grid
    const grid = createElement('div', { className: 'day-grid stagger' });
    progress.forEach(p => {
      const cell = dayCell(p.day, p.status);
      grid.appendChild(cell);
    });
    el.appendChild(grid);

    return el;
  }

  function renderJournal() {
    const el = createElement('div');
    el.innerHTML = `
      <div class="journal-header">
        <div class="journal-header__icon">📝</div>
        <div class="journal-header__title">Mi Diario</div>
        <div class="journal-header__text">Tus notas y reflexiones de cada día del desafío aparecerán aquí</div>
      </div>
      <div class="journal-empty">
        <div class="journal-empty__icon">📖</div>
        <div class="journal-empty__title">Aún no hay notas</div>
        <div class="journal-empty__text">Completa días del desafío y escribe tus reflexiones. Tus entradas aparecerán aquí.</div>
      </div>
    `;
    return el;
  }

  function renderNotFound(container) {
    container.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 24px;text-align:center;gap:16px;">
        <div style="font-size:64px;">📭</div>
        <h2 style="margin:0;color:var(--md-on-surface);font-size:1.5rem;">Día no encontrado</h2>
        <p style="color:var(--md-on-surface-variant);margin:0;">Vuelve al inicio para ver los días disponibles</p>
      </div>
    `;
  }

  /** Full day view template */
  function renderDayView(day, dayState, currentDay, totalDays) {
    const isDone = dayState.status === 'done';
    const isCurrent = dayState.status === 'current' || (!isDone && currentDay === day.id);
    const note = Store.getNote(day.id);
    const mood = (note && note.mood) ? note.mood : '';

    const questionsHTML = day.reflectionQuestions.map((q, i) => `
      <div class="reflection-item">
        <span class="reflection-item__number">${i + 1}</span>
        <p class="reflection-item__question">${q}</p>
      </div>
    `).join('');

    const moodsHTML = ICONS_BY_MOOD.map(emoji => `
      <button class="mood-btn ${mood === emoji ? 'mood-btn--active' : ''}" data-mood="${emoji}" aria-label="Estado de ánimo ${emoji}">
        ${emoji}
      </button>
    `).join('');

    return `
      <div class="day-view animate-fadeSlideUp">
        <!-- Header -->
        <div class="day-header" style="background-color: var(--day-header-bg);">
          <button class="day-header__back" aria-label="Volver">
            ${ICONS.arrowBack}
          </button>
          <div class="day-header__content">
            <div class="day-header__number">DÍA ${day.id} DE ${totalDays}</div>
            <h1 class="day-header__title">${day.title}</h1>
            ${isDone ? '<span class="day-header__badge">✅ Completado</span>' : ''}
          </div>
          <button class="day-header__share" data-action="share-day" data-day="${day.id}" aria-label="Compartir">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
          </button>
        </div>

        <div class="day-body">
          <!-- Verse -->
          <div class="day-verse">
            <div class="day-verse__icon">📖</div>
            <blockquote class="day-verse__text">${day.verseText}</blockquote>
            <cite class="day-verse__ref">— ${day.verse}</cite>
          </div>

          <!-- Summary / Reading -->
          <div class="day-section">
            <h2 class="day-section__title">📖 Lectura</h2>
            <p class="day-section__text">${day.summary}</p>
          </div>

          <!-- Daily Challenge -->
          <div class="day-challenge">
            <div class="day-challenge__icon">🎯</div>
            <h2 class="day-challenge__title">Reto de Hoy</h2>
            <p class="day-challenge__text">${day.challenge}</p>
            <button class="btn btn--primary btn--full day-challenge__done">
              ${isDone ? '✅ Completado' : '✓ Marcar como completado'}
            </button>
          </div>

          <!-- Reflection Questions (collapsible) -->
          <div class="toggle-section">
            <button class="toggle-section__btn" aria-expanded="false">
              <span>💭 Reflexión</span>
              <span class="toggle-section__arrow">▼</span>
            </button>
            <div class="toggle-section__content">
              <p class="toggle-section__hint">Responde estas preguntas en tu corazón o escríbelas en tu diario personal.</p>
              ${questionsHTML}
            </div>
          </div>

          <!-- Mood Tracker -->
          <div class="day-mood">
            <h2 class="day-section__title">😊 ¿Cómo te sientes hoy?</h2>
            <div class="day-mood__options">
              ${moodsHTML}
            </div>
          </div>

          <!-- Personal Notes -->
          <div class="day-note">
            <h2 class="day-section__title">✍️ Notas Personales</h2>
            <div class="day-note__input-row">
              <textarea class="day-note__textarea" placeholder="Escribe aquí tus reflexiones, pensamientos y aprendizajes de hoy..." rows="5"></textarea>
              <button class="day-note__voice btn btn--icon" data-action="voice-input" data-target="#app-content .day-note__textarea" aria-label="Dictado por voz">
                🎤
              </button>
            </div>
            <p class="day-note__hint">Se guarda automáticamente al escribir. Solo tú puedes verlo.</p>
          </div>

          <!-- Navigation between days -->
          <div class="day-nav">
            <button class="btn btn--outline day-nav__prev" ${currentDay <= 1 ? 'disabled' : ''}>
              ${ICONS.arrowBack} Día anterior
            </button>
            <button class="btn btn--outline day-nav__next" ${currentDay >= totalDays ? 'disabled' : ''}>
              Siguiente día ${ICONS.arrowForward}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  return {
    $, $$, createElement, clearContainer, formatDate, shortDate,
    ICONS, headerBadge, emptyState, verseCard, dayCell,
    circularProgress, bottomSheet, ICONS_BY_MOOD,
    renderHome,
    renderDayView, renderNotFound
  };
})();
