/* ============================================
   day-view.js — Vista individual de cada día
   The Love Dare App
   ============================================ */

const DayView = (() => {
  'use strict';

  let _currentDayId = 1;
  let _onDayChange = null;

  /** Render full day view into a container */
  function render(dayId, container) {
    _currentDayId = dayId;
    const day = BOOK_DATA.getDay(dayId);
    if (!day) return UI.renderNotFound(container);

    const progress = Store.getProgress();
    const dayState = progress[dayId - 1] || { status: 'pending' };

    container.innerHTML = UI.renderDayView(day, dayState, dayId, BOOK_DATA.getTotalDays());
    container.scrollTop = 0;

    _attachHandlers(container, day, dayId);
    _updateBottomNav(dayId);
    return container;
  }

  function _attachHandlers(container, day, dayId) {
    // Back button
    const backBtn = container.querySelector('.day-header__back');
    if (backBtn) {
      backBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = '#/home';
      });
    }

    // Day navigation (prev/next)
    const prevBtn = container.querySelector('.day-nav__prev');
    const nextBtn = container.querySelector('.day-nav__next');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (!prevBtn.disabled) navigate(-1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (!nextBtn.disabled) navigate(1);
      });
    }

    // Mark as complete button
    const doneBtn = container.querySelector('.day-challenge__done');
    if (doneBtn) {
      doneBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        Store.setDayStatus(dayId, 'done');
        // Play complete sound
        SoundManager.playComplete();
        // Celebrate
        if (window.Confetti) Confetti.fire();
        SoundManager.playConfetti();
        // Navigate to next day if available
        const total = BOOK_DATA.getTotalDays();
        if (dayId < total) {
          setTimeout(() => {
            window.location.hash = `#/day/${dayId + 1}`;
          }, 800);
        } else {
          // Re-render last day to show completed state
          const targetContainer = document.getElementById('app-content');
          render(dayId, targetContainer || container);
        }
      });
    }

    // Toggle expansion sections (reflection questions)
    const toggleBtns = container.querySelectorAll('.toggle-section__btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const section = btn.closest('.toggle-section');
        section.classList.toggle('toggle-section--open');
        const isOpen = section.classList.contains('toggle-section--open');
        btn.setAttribute('aria-expanded', isOpen);
      });
    });

    // Mood selectors
    const moodBtns = container.querySelectorAll('.mood-btn');
    moodBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        moodBtns.forEach(b => b.classList.remove('mood-btn--active'));
        btn.classList.add('mood-btn--active');
        Store.saveNote(dayId, { mood: btn.dataset.mood });
      });
    });

    // Note auto-save
    const noteArea = container.querySelector('.day-note__textarea');
    if (noteArea) {
      // Load existing note
      const note = Store.getNote(dayId);
      if (note && note.text) {
        noteArea.value = note.text;
      }

      let saveTimer = null;
      noteArea.addEventListener('input', () => {
        clearTimeout(saveTimer);
        saveTimer = setTimeout(() => {
          const existing = Store.getNote(dayId) || {};
          Store.saveNote(dayId, { ...existing, text: noteArea.value });
        }, 500);
      });
    }
  }

  function _updateBottomNav(dayId) {
    // Highlight the progress tab in bottom nav when in a day view
    const navItems = document.querySelectorAll('.bottom-nav__item');
    if (navItems) {
      navItems.forEach(item => item.classList.remove('bottom-nav__item--active'));
      // Keep the previous active, don't override nav
    }
  }

  /** Navigate to previous/next day */
  function navigate(dir) {
    const total = BOOK_DATA.getTotalDays();
    let next = _currentDayId + dir;
    if (next < 1) next = 1;
    if (next > total) next = total;
    if (next !== _currentDayId) {
      window.location.hash = `#/day/${next}`;
    }
  }

  function onDayChange(callback) {
    _onDayChange = callback;
  }

  function getCurrentDay() {
    return _currentDayId;
  }

  return { render, navigate, onDayChange, getCurrentDay };
})();
