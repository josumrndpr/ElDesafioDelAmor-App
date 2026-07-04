/* ============================================
   sw.js — Service Worker (Cache-First + Stale-While-Revalidate)
   The Love Dare App v2
   ============================================ */

const CACHE_NAME = 'lovedare-v2';

const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/css/variables.css',
  '/css/reset.css',
  '/css/layout.css',
  '/css/components.css',
  '/css/animations.css',
  '/css/pages.css',
  '/js/ui.js',
  '/js/store.js',
  '/js/data.js',
  '/js/theme.js',
  '/js/router.js',
  '/js/confetti.js',
  '/js/day-view.js',
  '/js/journal.js',
  '/js/stats-view.js',
  '/js/app.js',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',
  '/assets/icons/icon-192.svg',
  '/assets/icons/icon-512.svg'
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

  // Skip ?v= query param for matching (cache-busting)
  const cleanUrl = url.origin + url.pathname;

  // API / data requests fallback to network only
  if (url.pathname.startsWith('/api/')) {
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
