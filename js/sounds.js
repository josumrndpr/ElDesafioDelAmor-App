/* ============================================
   sounds.js — Sonidos sutiles (Web Audio API)
   The Love Dare App
   ============================================ */
const SoundManager = (() => {
  'use strict';

  let ctx = null;
  let _enabled = false;

  const STORAGE_KEY = 'lovedare-sounds-enabled';

  function init() {
    _enabled = localStorage.getItem(STORAGE_KEY) === 'true';
  }

  function getContext() {
    if (!ctx) {
      const C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      ctx = new C();
    }
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    return ctx;
  }

  function playTone(freq, duration, type, volume) {
    if (!_enabled) return;
    const c = getContext();
    if (!c) return;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type || 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(volume || 0.08, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + duration);
    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(c.currentTime);
    osc.stop(c.currentTime + duration);
  }

  // --- Public sounds ---

  /** Tap/click sutil */
  function playTap() {
    playTone(1200, 0.06, 'sine', 0.05);
  }

  /** Day completed celebration */
  function playComplete() {
    if (!_enabled) return;
    const c = getContext();
    if (!c) return;
    const notes = [523, 659, 784, 1047]; // C5 E5 G5 C6
    notes.forEach((freq, i) => {
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const t = c.currentTime + i * 0.12;
      gain.gain.setValueAtTime(0.08, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start(t);
      osc.stop(t + 0.3);
    });
  }

  /** Navigation between views */
  function playNav() {
    playTone(800, 0.08, 'sine', 0.04);
  }

  /** Confetti burst */
  function playConfetti() {
    if (!_enabled) return;
    const c = getContext();
    if (!c) return;
    for (let i = 0; i < 6; i++) {
      const freq = 600 + Math.random() * 800;
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const t = c.currentTime + i * 0.05;
      gain.gain.setValueAtTime(0.04, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start(t);
      osc.stop(t + 0.2);
    }
  }

  /** Error / invalid action */
  function playError() {
    playTone(200, 0.15, 'sawtooth', 0.04);
    setTimeout(() => playTone(150, 0.2, 'sawtooth', 0.04), 150);
  }

  // --- Toggle ---
  function isEnabled() { return _enabled; }

  function toggle() {
    _enabled = !_enabled;
    localStorage.setItem(STORAGE_KEY, _enabled ? 'true' : 'false');
    if (_enabled) playTap();
    return _enabled;
  }

  function setEnabled(val) {
    _enabled = val;
    localStorage.setItem(STORAGE_KEY, val ? 'true' : 'false');
  }

  // Auto-init
  init();

  return {
    init,
    playTap,
    playComplete,
    playNav,
    playConfetti,
    playError,
    isEnabled,
    toggle,
    setEnabled
  };
})();
