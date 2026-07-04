/* ============================================
   theme.js — Dark/Light mode manager
   The Love Dare App
   ============================================ */

const ThemeManager = (() => {
  'use strict';

  const STORAGE_KEY = 'lovedare-theme';

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateIcon(theme);
  }

  function toggle() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
    return next;
  }

  function updateIcon(theme) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const icon = theme === 'dark' ? 'lightMode' : 'darkMode';
    btn.innerHTML = UI.ICONS[icon] + '<span class="ripple"></span>';
  }

  function init() {
    const theme = getPreferredTheme();
    setTheme(theme);

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  return { init, toggle, getPreferredTheme, setTheme };
})();
