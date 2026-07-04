/* ============================================
   store.js — State & progress persistence
   The Love Dare App
   ============================================ */

const Store = (() => {
  'use strict';

  const STORAGE_PROGRESS = 'lovedare-progress';

  function getDefaultProgress() {
    const arr = [];
    for (let i = 1; i <= 40; i++) {
      arr.push({ day: i, status: i === 1 ? 'current' : 'pending' });
    }
    return arr;
  }

  function init() {
    if (!localStorage.getItem(STORAGE_PROGRESS)) {
      saveProgress(getDefaultProgress());
    }
  }

  function getProgress() {
    try {
      const data = localStorage.getItem(STORAGE_PROGRESS);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length === 40) return parsed;
      }
    } catch (e) {
      console.warn('Failed to parse progress:', e);
    }
    return getDefaultProgress();
  }

  function saveProgress(progress) {
    try {
      localStorage.setItem(STORAGE_PROGRESS, JSON.stringify(progress));
    } catch (e) {
      console.warn('Failed to save progress:', e);
    }
  }

  function getDayStatus(day) {
    const progress = getProgress();
    const entry = progress.find(p => p.day === day);
    return entry ? entry.status : 'pending';
  }

  function setDayStatus(day, status) {
    const progress = getProgress();
    const idx = progress.findIndex(p => p.day === day);
    if (idx !== -1) {
      progress[idx].status = status;
      // If marking as done, advance the next pending day to 'current'
      if (status === 'done' && idx + 1 < progress.length) {
        const next = progress[idx + 1];
        if (next && next.status === 'pending') {
          next.status = 'current';
        }
      }
      saveProgress(progress);
    }
  }

  // --- Notes persistence ---
  function getNotes() {
    try {
      const data = localStorage.getItem('lovedare-notes');
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  function saveNotes(notes) {
    try {
      localStorage.setItem('lovedare-notes', JSON.stringify(notes));
    } catch (e) {
      console.warn('Failed to save notes:', e);
    }
  }

  function getNote(day) {
    const notes = getNotes();
    return notes[day] || null;
  }

  function saveNote(day, data) {
    const notes = getNotes();
    notes[day] = { ...(notes[day] || {}), ...data, updatedAt: new Date().toISOString() };
    saveNotes(notes);
  }

  function getStats() {
    const progress = getProgress();
    const done = progress.filter(p => p.status === 'done').length;
    const current = progress.filter(p => p.status === 'current').length;
    const pending = progress.filter(p => p.status === 'pending').length;
    
    // Calculate streak (consecutive completed days only)
    let streak = 0;
    for (let i = 0; i < progress.length; i++) {
      if (progress[i].status === 'done') streak++;
      else break;
    }

    return {
      total: 40,
      done,
      current,
      pending,
      streak,
      percent: Math.round((done / 40) * 100)
    };
  }

  function getCurrentDay() {
    const progress = getProgress();
    const current = progress.find(p => p.status === 'current');
    return current ? current.day : 1;
  }

  return { init, getProgress, saveProgress, getDayStatus, setDayStatus, getStats, getCurrentDay, getDefaultProgress, getNote, getNotes, saveNote };
})();
