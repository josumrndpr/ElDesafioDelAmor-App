/* ============================================
   router.js — Hash-based SPA Router
   The Love Dare App
   ============================================ */

const Router = (() => {
  'use strict';

  // Routes: [{ pattern: RegExp, keys: [...paramNames], handler: fn }]
  const routes = [];
  let currentRoute = null;
  let currentParams = {};
  let onRouteChange = null;

  function register(pattern, handler) {
    // Support named params like /day/:id
    const keys = [];
    if (pattern.includes(':')) {
      const regexStr = pattern.replace(/:([a-zA-Z_]+)/g, (_, key) => {
        keys.push(key);
        return '([^/]+)';
      });
      routes.push({ regex: new RegExp(`^${regexStr}$`), keys, handler });
    } else {
      routes.push({ regex: new RegExp(`^${pattern}$`), keys: [], handler });
    }
  }

  function matchRoute(path) {
    for (const route of routes) {
      const match = path.match(route.regex);
      if (match) {
        const params = {};
        route.keys.forEach((key, i) => {
          params[key] = decodeURIComponent(match[i + 1]);
        });
        return { handler: route.handler, params };
      }
    }
    return null;
  }

  function navigate(hash) {
    const raw = hash.replace(/^#\/?/, '') || 'home';

    // Check if same route with same params
    const matched = matchRoute(raw);
    if (!matched) {
      console.warn(`Route not found: ${raw}`);
      navigate('/home');
      return;
    }

    // If same handler and same params, skip
    if (currentRoute === raw) return;

    currentRoute = raw;
    currentParams = matched.params;

    // Update active nav item (only for static top-level routes)
    document.querySelectorAll('.bottom-nav__item').forEach(item => {
      const itemRoute = item.dataset.route;
      const isHome = raw === 'home' || raw.startsWith('day/');
      const isActive = isHome ? itemRoute === 'home' : itemRoute === raw;
      item.classList.toggle('active', isActive);
    });

    // Render
    const content = document.getElementById('app-content');
    content.classList.remove('app-enter');
    const view = matched.handler(matched.params);
    if (view instanceof Node) {
      content.innerHTML = '';
      content.appendChild(view);
    }
    // Trigger fade-in animation
    requestAnimationFrame(() => {
      content.classList.add('app-enter');
    });
    // If handler manipulates content directly (like DayView.render), it's already done

    if (onRouteChange) onRouteChange(raw, matched.params);
  }

  function getCurrentParams() {
    return { ...currentParams };
  }

  function init(defaultRoute = 'home') {
    window.addEventListener('hashchange', () => navigate(window.location.hash));

    // Handle initial load
    const hash = window.location.hash || `#/${defaultRoute}`;
    if (!window.location.hash) {
      window.location.hash = hash;
    }
    navigate(hash);

    // Set up click handlers for nav items
    document.querySelectorAll('.bottom-nav__item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const route = item.dataset.route;
        window.location.hash = `#/${route}`;
      });
    });
  }

  function setOnRouteChange(callback) {
    onRouteChange = callback;
  }

  return { register, navigate, init, setOnRouteChange, getCurrentParams };
})();
