/* ============================================
   app.js — Main app init & event delegation
   The Love Dare App
   ============================================ */

(function () {
  'use strict';

  function init() {
    // Initialize theme
    ThemeManager.init();

    // Ensure progress data exists
    Store.init();

    // --- Register Routes ---

    // Home
    Router.register('home', () => {
      const day = Store.getCurrentDay();
      const stats = Store.getStats();
      return UI.renderHome(day, stats.done, stats.total, stats.streak);
    });

    // Day view
    Router.register('day/:id', (params) => {
      const dayId = parseInt(params.id, 10);
      const container = document.getElementById('app-content');
      container.innerHTML = '';
      DayView.render(dayId, container);
      return null; // DayView.render handles the container directly
    });

    // Progress / Stats dashboard
    Router.register('progress', () => {
      return StatsView.render();
    });

    // Journal
    Router.register('journal', () => {
      return JournalView.render();
    });

    // Init router (triggers first render)
    Router.init('home');

    // --- Play nav sound on route change ---
    window.addEventListener('hashchange', () => {
      SoundManager.playNav();
    });

    // --- Event Delegation ---
    setupEventDelegation();

    // --- Swipe navigation ---
    setupSwipe();

    // --- PWA Features ---
    initOnboarding();
    initSWUpdate();
  }

  /* ============================================
     ONBOARDING — Primera visita
     ============================================ */
  function initOnboarding() {
    if (localStorage.getItem('lovedare-onboarding-seen')) return;

    const overlay = document.createElement('div');
    overlay.className = 'onboarding-overlay';
    overlay.innerHTML = `
      <div class="onboarding-card">
        <div class="onboarding-heart">❤️</div>
        <h2 class="onboarding-title">Bienvenido al<br><strong>Desafío del Amor</strong></h2>
        <p class="onboarding-text">40 días para transformar tu relación con Dios y tu pareja.</p>
        <ul class="onboarding-list">
          <li>📖 <strong>Lee</strong> la lectura diaria</li>
          <li>🎯 <strong>Completa</strong> el reto de cada día</li>
          <li>📝 <strong>Escribe</strong> tus reflexiones</li>
          <li>📊 <strong>Sigue</strong> tu progreso</li>
        </ul>
        <button class="onboarding-btn">¡Comenzar!</button>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('.onboarding-btn').addEventListener('click', () => {
      overlay.classList.add('onboarding-exit');
      setTimeout(() => overlay.remove(), 400);
      localStorage.setItem('lovedare-onboarding-seen', 'true');
    });
  }

  /* ============================================
     SW Update — Notificar al usuario
     ============================================ */
  function initSWUpdate() {
    if (!('serviceWorker' in navigator)) return;

    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });

    navigator.serviceWorker.ready.then((reg) => {
      reg.addEventListener('updatefound', () => {
        const newSW = reg.installing;
        newSW.addEventListener('statechange', () => {
          if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
            // New version available
            showUpdateToast(reg);
          }
        });
      });
    });
  }

  function showUpdateToast(registration) {
    const toast = document.createElement('div');
    toast.className = 'update-toast';
    toast.innerHTML = `
      <span>📦 Nueva versión disponible</span>
      <button class="update-toast__btn">Actualizar</button>
    `;
    document.body.appendChild(toast);

    toast.querySelector('.update-toast__btn').addEventListener('click', () => {
      registration.waiting.postMessage('SKIP_WAITING');
    });

    // Auto-hide after 10s
    setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 10000);
  }

  /* ============================================
     Event Delegation
     ============================================ */
  function setupEventDelegation() {
    document.addEventListener('click', (e) => {
      // Navigate to day from home card
      const dayCard = e.target.closest('[data-action="open-day"]');
      if (dayCard) {
        const day = dayCard.dataset.day;
        if (day) {
          window.location.hash = `#/day/${day}`;
          return;
        }
      }

      // Navigate to day from grid cell
      const dayCell = e.target.closest('[data-day]');
      if (dayCell) {
        const day = dayCell.dataset.day;
        if (day) {
          window.location.hash = `#/day/${day}`;
          return;
        }
      }

      // Theme toggle
      const themeBtn = e.target.closest('#theme-toggle');
      if (themeBtn) {
        ThemeManager.toggle();
        return;
      }

      // Notification settings button
      const notifBtn = e.target.closest('[data-action="notifications"]');
      if (notifBtn) {
        e.preventDefault();
        setupDailyReminder();
        return;
      }

      // Export journal button
      const exportBtn = e.target.closest('[data-action="export-journal"]');
      if (exportBtn) {
        e.preventDefault();
        exportJournal();
        return;
      }

      // Sound toggle
      const soundBtn = e.target.closest('[data-action="toggle-sound"]');
      if (soundBtn) {
        const enabled = SoundManager.toggle();
        showToast(enabled ? '🔊 Sonidos activados' : '🔇 Sonidos desactivados');
        soundBtn.textContent = enabled ? '🔊 Sonidos' : '🔇 Sonidos';
        return;
      }

      // Share day quote
      const shareBtn = e.target.closest('[data-action="share-day"]');
      if (shareBtn) {
        e.preventDefault();
        const dayId = parseInt(shareBtn.dataset.day, 10);
        shareDayQuote(dayId);
        return;
      }

      // Voice dictation
      const voiceBtn = e.target.closest('[data-action="voice-input"]');
      if (voiceBtn) {
        e.preventDefault();
        const textarea = document.querySelector(voiceBtn.dataset.target);
        if (textarea) startVoiceInput(textarea);
        return;
      }
    });
  }

  /* ============================================
     NOTIFICACIONES — Recordatorio diario
     ============================================ */
  function setupDailyReminder() {
    if (!('Notification' in window)) {
      showToast('❌ Tu navegador no soporta notificaciones');
      return;
    }

    if (Notification.permission === 'granted') {
      scheduleNotification();
      return;
    }

    if (Notification.permission === 'denied') {
      showToast('❌ Notificaciones bloqueadas. Actívalas en ajustes del navegador.');
      return;
    }

    // Ask for permission
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        scheduleNotification();
      } else {
        showToast('❌ Permiso denegado');
      }
    });
  }

  function scheduleNotification() {
    // Use the service worker to show notification
    const regPromise = navigator.serviceWorker.ready;

    // Show test notification immediately
    regPromise.then((reg) => {
      reg.showNotification('🔔 Recordatorio activado', {
        body: 'Te recordaremos cada día hacer tu desafío.',
        icon: '/ElDesafioDelAmor-App/assets/icons/icon-192.png',
        tag: 'lovedare-reminder-setup',
        vibrate: [200, 100, 200]
      });
    });

    // Store the reminder preference
    const reminderTime = localStorage.getItem('lovedare-reminder-time');
    if (!reminderTime) {
      localStorage.setItem('lovedare-reminder-time', '09:00');
    }
    localStorage.setItem('lovedare-reminder-enabled', 'true');

    showToast('✅ Recordatorio diario activado a las 9:00 AM');
  }

  /* ============================================
     EXPORTAR DIARIO — Descargar como JSON
     ============================================ */
  function exportJournal() {
    const notes = Store.getNotes();
    const progress = Store.getProgress();

    if (!notes || notes.length === 0) {
      showToast('📝 No hay entradas en tu diario para exportar');
      return;
    }

    const exportData = {
      app: 'El Desafío del Amor',
      exportedAt: new Date().toISOString(),
      totalEntries: notes.length,
      totalCompleted: progress.filter(d => d.status === 'done').length,
      entries: notes.map(n => ({
        day: n.id,
        title: n.title,
        text: n.text,
        mood: n.mood || null,
        completedAt: n.completedAt || null,
        updatedAt: n.updatedAt
      }))
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `desafio-amor-diario-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast(`✅ Diario exportado (${notes.length} entradas)`);
  }

  /* ============================================
     COMPARTIR — Web Share API
     ============================================ */
  function shareDayQuote(dayId) {
    const days = BOOK_DATA.DAYS;
    const day = days.find(d => d.id === dayId);
    if (!day) return;

    const text = `📖 El Desafío del Amor — Día ${day.id}\n\n` +
      `"${day.title}"\n\n` +
      `📜 ${day.verse} — ${day.verseRef}\n\n` +
      `🎯 Reto: ${day.challenge}\n\n` +
      `Descarga la app: [URL de la app]`;

    if (navigator.share) {
      navigator.share({
        title: `Día ${day.id} — El Desafío del Amor`,
        text: text
      }).then(() => {
        showToast('✅ Compartido');
      }).catch(() => {
        // User cancelled or error
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(text).then(() => {
        showToast('📋 Texto copiado al portapapeles');
      }).catch(() => {
        showToast('❌ No se pudo compartir');
      });
    }
  }

  /* ============================================
     DICTADO POR VOZ — Web Speech API
     ============================================ */
  function startVoiceInput(textarea) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      showToast('❌ Tu navegador no soporta dictado por voz');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.continuous = false;
    recognition.interimResults = false;

    showToast('🎤 Escuchando... habla ahora');

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const existing = textarea.value;
      textarea.value = existing ? existing + '\n' + transcript : transcript;
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
      showToast('✅ Texto insertado');
      SoundManager.playTap();
    };

    recognition.onerror = (event) => {
      if (event.error === 'not-allowed') {
        showToast('❌ Permiso de micrófono denegado');
      } else if (event.error === 'no-speech') {
        showToast('🔇 No se detectó voz');
      } else {
        showToast(`❌ Error: ${event.error}`);
      }
    };

    recognition.onend = () => {
      // Cleanup
    };

    try {
      recognition.start();
    } catch (e) {
      showToast('❌ Error al iniciar dictado');
    }
  }

  /* ============================================
     TOAST — Notificación efímera en pantalla
     ============================================ */
  function showToast(message) {
    const existing = document.querySelector('.app-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'app-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('app-toast--exit');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  /* ============================================
     Swipe navigation
     ============================================ */
  function setupSwipe() {
    let startX = 0;

    document.addEventListener('touchstart', (e) => {
      if (!window.location.hash.includes('/day/')) return;
      startX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      if (!window.location.hash.includes('/day/')) return;
      const endX = e.changedTouches[0].screenX;
      const diff = startX - endX;
      if (Math.abs(diff) > 60) {
        if (diff > 0) DayView.navigate(1);
        else DayView.navigate(-1);
      }
    }, { passive: true });
  }

  // Boot when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
