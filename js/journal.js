/* ============================================
   journal.js — Journal timeline view
   The Love Dare App
   ============================================ */
const JournalView = (() => {
  'use strict';

  function getAllEntries() {
    const allNotes = Store.getNotes();
    const days = BOOK_DATA.DAYS;
    const entries = [];

    for (const dayIdStr of Object.keys(allNotes)) {
      const dayId = parseInt(dayIdStr, 10);
      const note = allNotes[dayIdStr];
      const day = days.find(d => d.id === dayId);
      if (!day) continue;

      const hasContent = (note.text && note.text.trim()) || note.mood;
      if (!hasContent) continue;

      entries.push({
        id: dayId,
        title: day.title,
        text: (note.text || '').trim(),
        mood: note.mood || '',
        updatedAt: note.updatedAt || ''
      });
    }

    return entries;
  }

  function formatDate(isoString) {
    if (!isoString) return '';
    try {
      const date = new Date(isoString);
      const now = new Date();
      const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

      if (diffDays === 0) return 'Hoy';
      if (diffDays === 1) return 'Ayer';

      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    } catch (e) {
      return '';
    }
  }

  function render() {
    const container = document.createElement('div');
    container.className = 'journal-page animate-fadeSlideUp';

    const entries = getAllEntries();

    // Sort: newest first
    entries.sort((a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || ''));

    const count = entries.length;

    // Header
    const header = document.createElement('div');
    header.className = 'journal-page__header';
    header.innerHTML = `
      <div class="journal-page__icon">📔</div>
      <h1 class="journal-page__title">Mi Diario</h1>
      <p class="journal-page__subtitle">
        ${count > 0
          ? `${count} ${count === 1 ? 'entrada' : 'entradas'} en tu diario`
          : 'Tus notas y reflexiones de cada día'}
      </p>
    `;
    container.appendChild(header);

    if (count === 0) {
      // Empty state
      const empty = document.createElement('div');
      empty.className = 'journal-empty';
      empty.innerHTML = `
        <div class="journal-empty__icon">📖</div>
        <div class="journal-empty__title">Aún no hay entradas</div>
        <div class="journal-empty__text">
          Completa días del desafío y escribe tus reflexiones en cada uno.
          Tus notas y estados de ánimo aparecerán aquí.
        </div>
      `;
      container.appendChild(empty);
      appendActions(container);
      return container;
    }

    // Timeline
    const timeline = document.createElement('div');
    timeline.className = 'journal-timeline';

    entries.forEach((entry, index) => {
      const isFirst = index === 0;
      const isLast = index === entries.length - 1;

      const card = document.createElement('div');
      card.className = 'journal-entry';
      // Stagger entry animation
      const delay = Math.min(index * 60, 600);
      card.style.animationDelay = `${delay}ms`;
      card.setAttribute('data-day', entry.id);
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `Ir al día ${entry.id}: ${entry.title}`);

      const previewText = entry.text.length > 120
        ? entry.text.substring(0, 120) + '…'
        : entry.text;

      card.innerHTML = `
        <div class="journal-entry__line ${isFirst ? 'journal-entry__line--first' : ''} ${isLast ? 'journal-entry__line--last' : ''}">
          <div class="journal-entry__dot"></div>
        </div>
        <div class="journal-entry__content">
          <div class="journal-entry__header">
            <span class="journal-entry__day-badge">Día ${entry.id}</span>
            ${entry.mood ? `<span class="journal-entry__mood">${entry.mood}</span>` : ''}
            <span class="journal-entry__date">${formatDate(entry.updatedAt)}</span>
          </div>
          <h3 class="journal-entry__title">${entry.title}</h3>
          ${entry.text ? `
            <div class="journal-entry__text">
              <svg viewBox="0 0 24 24" class="journal-entry__quote-icon"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" fill="currentColor"/></svg>
              ${previewText}
            </div>
          ` : ''}
        </div>
      `;

      // Click handler — navigate to day
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        window.location.hash = `#/day/${entry.id}`;
      });

      // Keyboard support
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.location.hash = `#/day/${entry.id}`;
        }
      });

      timeline.appendChild(card);
    });

    container.appendChild(timeline);

    appendActions(container);
    return container;
  }

  function appendActions(container) {
    const actions = document.createElement('div');
    actions.className = 'journal-actions';
    actions.innerHTML = `
      <button class="btn btn--outlined journal-actions__btn" data-action="export-journal">
        📥 Exportar diario
      </button>
      <button class="btn btn--outlined journal-actions__btn" data-action="notifications">
        🔔 Recordatorio diario
      </button>
      <button class="btn btn--outlined journal-actions__btn" data-action="toggle-sound">
        ${SoundManager.isEnabled() ? '🔊 Sonidos' : '🔇 Sonidos'}
      </button>
    `;
    container.appendChild(actions);
  }

  return { render };
})();
