/* ============================================
   confetti.js — Mini confetti celebration
   The Love Dare App
   ============================================ */

const Confetti = (() => {
  'use strict';

  const COLORS = ['#D32F2F', '#FF7043', '#FDD835', '#66BB6A', '#42A5F5', '#AB47BC', '#FF6F00'];

  function fire(count = 60) {
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden;';
    document.body.appendChild(container);

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const size = 6 + Math.random() * 8;
      const left = Math.random() * 100;
      const delay = Math.random() * 0.5;
      const duration = 1.5 + Math.random() * 2;
      const rotation = Math.random() * 360;

      el.style.cssText = `
        position:absolute;
        top:-10px;
        left:${left}%;
        width:${size}px;
        height:${size * 1.5}px;
        background:${color};
        border-radius:2px;
        opacity:0;
        transform:rotate(${rotation}deg);
        animation:confetti-fall ${duration}s ease-in ${delay}s forwards;
      `;
      container.appendChild(el);
    }

    // Cleanup after animation
    setTimeout(() => {
      if (container.parentNode) container.parentNode.removeChild(container);
    }, 4000);
  }

  // Inject keyframe if not exists
  if (!document.getElementById('confetti-style')) {
    const style = document.createElement('style');
    style.id = 'confetti-style';
    style.textContent = `
      @keyframes confetti-fall {
        0% { opacity:1; transform:translateY(0) rotate(0deg) scale(1); }
        100% { opacity:0; transform:translateY(100vh) rotate(720deg) scale(0.3); }
      }
    `;
    document.head.appendChild(style);
  }

  return { fire };
})();
