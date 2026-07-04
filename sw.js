/* ============================================
   sw.js — Service Worker (Cache-First + Stale-While-Revalidate)
   The Love Dare App v3
   ============================================ */

const CACHE_NAME = 'lovedare-v3';

// Derive base path dynamically from SW's own location
// e.g. https://josumrndpr.github.io/ElDesafioDelAmor-App/sw.js -> /ElDesafioDelAmor-App
const BASE = self.location.pathname.replace(/\/sw\.js$/, '');
const P = (p) => BASE + p;

const ASSETS = [
  P(''),
  P('/'),
  P('/index.html'),
  P('/manifest.json'),
  P('/favicon.ico'),
  P('/css/variables.css'),
  P('/css/reset.css'),
  P('/css/layout.css'),
  P('/css/components.css'),
  P('/css/animations.css'),
  P('/css/pages.css'),
  P('/js/ui.js'),
  P('/js/store.js'),
  P('/js/data.js'),
  P('/js/theme.js'),
  P('/js/router.js'),
  P('/js/confetti.js'),
  P('/js/day-view.js'),
  P('/js/journal.js'),
  P('/js/stats-view.js'),
  P('/js/sounds.js'),
  P('/js/app.js'),
  P('/assets/icons/icon-192.png'),
  P('/assets/icons/icon-512.png')
];

// Install: cache all assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean old caches + claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: stale-while-revalidate for most, network-first for data
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin GET requests
  if (url.origin !== self.location.origin || request.method !== 'GET') return;

  // Only handle requests within our app scope
  if (!url.pathname.startsWith(BASE + '/') && !url.pathname.startsWith(BASE)) return;

  // Skip ?v= query param for matching (cache-busting)
  const cleanUrl = url.origin + url.pathname;

  // API / data requests fallback to network only
  if (url.pathname.startsWith(BASE + '/api/')) {
    event.respondWith(networkFirst(request, cleanUrl));
    return;
  }

  // HTML navigation — network first, fallback to cache
  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, cleanUrl));
    return;
  }

  // Cache-first for assets (CSS, JS, images)
  event.respondWith(cacheFirst(request, cleanUrl));
});

async function cacheFirst(request, cleanUrl) {
  const cached = await caches.match(request);
  if (cached) return cached;

  // Try matching without ?v= params
  if (cleanUrl) {
    const cachedClean = await caches.match(cleanUrl);
    if (cachedClean) return cachedClean;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(cleanUrl || request, response.clone());
    }
    return response;
  } catch (error) {
    return new Response('Offline', { status: 503 });
  }
}

async function networkFirst(request, cleanUrl) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(cleanUrl || request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) return cached;
    if (cleanUrl) {
      const cachedClean = await caches.match(cleanUrl);
      if (cachedClean) return cachedClean;
    }
    return new Response('Offline', { status: 503 });
  }
}

// Listen for skip-waiting message (for update prompt)
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
