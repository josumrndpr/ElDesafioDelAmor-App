/* ============================================
   stats-view.js — Dashboard de estadísticas e insignias
   The Love Dare App
   ============================================ */
const StatsView = (() => {
  'use strict';

  const BADGES = [
    { id: 'first-day', icon: '🏁', title: 'Primer paso', desc: 'Completa tu primer día', check: s => s.done >= 1 },
    { id: 'week-1', icon: '🔥', title: '1 semana', desc: 'Completa 7 días consecutivos', check: s => s.streak >= 7 },
    { id: 'week-2', icon: '🔥', title: '2 semanas', desc: 'Completa 14 días consecutivos', check: s => s.streak >= 14 },
    { id: 'week-3', icon: '🔥', title: '3 semanas', desc: 'Completa 21 días consecutivos', check: s => s.streak >= 21 },
    { id: 'champion', icon: '🏆', title: 'Campeón', desc: 'Completa los 40 días', check: s => s.done >= 40 },
    { id: 'writer', icon: '📝', title: 'Escritor', desc: 'Escribe tu primera nota', check: s => s.notes > 0 },
    { id: 'versatile', icon: '🎭', title: 'Versátil', desc: 'Usa 3+ estados de ánimo distintos', check: s => s.moods >= 3 },
    { id: 'dedicated', icon: '💎', title: 'Dedicado', desc: 'Sin días perdidos (racha = progreso)', check: s => s.streak === s.done && s.done > 0 }
  ];

  // Mood score mapping (same as day-view.js)
  const MOOD_SCORES = {
    '😊': 5, '❤️': 4, '🙏': 3, '😐': 2, '😢': 1, '😡': 0
  };

  function getWeeklyMoods() {
    const notes = Store.getNotes();
    const days = Object.keys(notes).map(Number).sort((a, b) => b - a);
    const result = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dayLabels = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
      const entry = { label: dayLabels[d.getDay()], date: d, mood: null, score: 0, note: '' };

      // Find a note matching this date
      for (const dayNum of days) {
        const note = notes[String(dayNum)];
        if (!note || !note.updatedAt) continue;
        const noteDate = new Date(note.updatedAt);
        noteDate.setHours(0, 0, 0, 0);
        if (noteDate.getTime() === d.getTime()) {
          entry.mood = note.mood || null;
          entry.score = MOOD_SCORES[note.mood] || 0;
          entry.note = (note.text || '').substring(0, 60);
          break;
        }
      }
      result.push(entry);
    }
    return result;
  }

  function getMoodCounts() {
    const notes = Store.getNotes();
    const counts = {};
    for (const dayId of Object.keys(notes)) {
      const mood = notes[dayId].mood;
      if (mood && MOOD_SCORES[mood] !== undefined) {
        counts[mood] = (counts[mood] || 0) + 1;
      }
    }
    return counts;
  }

  function getStatsData() {
    const base = Store.getStats();
    const moodCounts = getMoodCounts();
    const notes = Store.getNotes();

    let notesCount = 0;
    let moodTypes = 0;
    let topMood = null;
    let topCount = 0;

    for (const dayId of Object.keys(notes)) {
      const note = notes[dayId];
      if (note.text && note.text.trim()) notesCount++;
    }

    moodTypes = Object.keys(moodCounts).length;
    for (const [mood, count] of Object.entries(moodCounts)) {
      if (count > topCount) { topCount = count; topMood = mood; }
    }

    return { ...base, notes: notesCount, moods: moodTypes, topMood, topCount };
  }

  function render() {
    const el = document.createElement('div');
    el.className = 'stats-page';
    const s = getStatsData();

    // Header
    const header = document.createElement('div');
    header.className = 'stats-page__header';
    header.innerHTML = `
      <div class="stats-page__icon">📊</div>
      <h1 class="stats-page__title">Estadísticas</h1>
      <p class="stats-page__subtitle">Tu progreso general</p>
    `;
    el.appendChild(header);

    // Circular progress
    const circleSection = document.createElement('div');
    circleSection.className = 'stats-circle-section';
    const r = 68;
    const circumference = 2 * Math.PI * r;
    const offset = circumference - (s.percent / 100) * circumference;
    circleSection.innerHTML = `
      <div class="stats-circle">
        <svg viewBox="0 0 160 160" class="stats-circle__svg">
          <circle cx="80" cy="80" r="${r}" fill="none" stroke="var(--md-outline-variant)" stroke-width="10"/>
          <circle cx="80" cy="80" r="${r}" fill="none" stroke="var(--md-primary)" stroke-width="10"
            stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"
            stroke-linecap="round" transform="rotate(-90 80 80)"/>
        </svg>
        <div class="stats-circle__text">
          <span class="stats-circle__pct">${s.percent}%</span>
          <span class="stats-circle__label">completado</span>
        </div>
      </div>
      <p class="stats-circle__info">${s.done} de ${s.total} días completados</p>
    `;
    el.appendChild(circleSection);

    // Stats grid (4 cards)
    const grid = document.createElement('div');
    grid.className = 'stats-grid';
    grid.innerHTML = `
      <div class="stats-card">
        <div class="stats-card__icon">✅</div>
        <div class="stats-card__value">${s.done}/${s.total}</div>
        <div class="stats-card__label">Completados</div>
      </div>
      <div class="stats-card">
        <div class="stats-card__icon">🔥</div>
        <div class="stats-card__value">${s.streak}</div>
        <div class="stats-card__label">Racha actual</div>
      </div>
      <div class="stats-card">
        <div class="stats-card__icon">📝</div>
        <div class="stats-card__value">${s.notes}</div>
        <div class="stats-card__label">Notas escritas</div>
      </div>
      <div class="stats-card">
        <div class="stats-card__icon">${s.topMood || '😊'}</div>
        <div class="stats-card__value">${s.topMood ? Math.round((s.topCount / (s.notes || 1)) * 100) + '%' : '—'}</div>
        <div class="stats-card__label">Ánimo frecuente</div>
      </div>
    `;
    el.appendChild(grid);

    // Weekly mood chart
    const weekly = getWeeklyMoods();
    const hasMoods = weekly.some(w => w.mood !== null);
    if (hasMoods) {
      const chartSection = document.createElement('div');
      chartSection.className = 'stats-section';
      chartSection.innerHTML = `<h2 class="stats-section__title">📈 Ánimo semanal</h2>`;
      const chart = document.createElement('div');
      chart.className = 'mood-chart';
      weekly.forEach(w => {
        const bar = document.createElement('div');
        bar.className = 'mood-chart__bar';
        const maxScore = 5;
        const pct = w.mood ? Math.max((w.score / maxScore) * 100, 5) : 5;
        bar.innerHTML = `
          <div class="mood-chart__emoji">${w.mood || ''}</div>
          <div class="mood-chart__fill-wrap">
            <div class="mood-chart__fill ${w.mood ? 'mood-chart__fill--active' : ''}" style="height:${pct}%"></div>
          </div>
          <div class="mood-chart__label">${w.label}</div>
        `;
        chart.appendChild(bar);
      });
      chartSection.appendChild(chart);
      el.appendChild(chartSection);
    }

    // Badges section
    const badgesSection = document.createElement('div');
    badgesSection.className = 'stats-section badges-section';
    badgesSection.innerHTML = `<h2 class="stats-section__title">🎖️ Insignias</h2>`;
    const badgesGrid = document.createElement('div');
    badgesGrid.className = 'badges-grid';
    BADGES.forEach(b => {
      const unlocked = b.check(s);
      const card = document.createElement('div');
      card.className = `badge-card ${unlocked ? 'badge-card--unlocked' : 'badge-card--locked'}`;
      card.innerHTML = `
        <div class="badge-card__icon">${b.icon}</div>
        <div class="badge-card__title">${b.title}</div>
        <div class="badge-card__desc">${b.desc}</div>
        ${unlocked ? '<div class="badge-card__check">✅</div>' : '<div class="badge-card__lock">🔒</div>'}
      `;
      badgesGrid.appendChild(card);
    });
    badgesSection.appendChild(badgesGrid);
    el.appendChild(badgesSection);

    // Day grid — quick navigation
    const progress = Store.getProgress();
    if (progress && progress.length) {
      const gridSection = document.createElement('div');
      gridSection.className = 'stats-section';
      gridSection.innerHTML = `<h2 class="stats-section__title">📅 Navegación rápida</h2>`;
      const grid = document.createElement('div');
      grid.className = 'day-grid';
      progress.forEach(p => {
        const cell = document.createElement('div');
        cell.className = `day-cell day-cell--${p.status}`;
        cell.dataset.day = String(p.day);
        cell.role = 'button';
        cell.tabIndex = 0;
        cell.setAttribute('aria-label', `Día ${p.day}`);
        cell.innerHTML = `<span class="day-cell__number">${p.day}</span>`;
        grid.appendChild(cell);
      });
      gridSection.appendChild(grid);
      el.appendChild(gridSection);
    }

    return el;
  }

  return { render };
})();