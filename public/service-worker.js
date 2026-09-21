const CACHE_NAME = 'cuaca-pj-v8';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Network first for API calls
  if (event.request.url.includes('nominatim.openstreetmap.org') ||
      event.request.url.includes('open-meteo.com')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (!response || response.status !== 200) {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request).then(cached => {
            if (!cached) return cached;

            // Beritahu aplikasi bahawa respons ini datang daripada cache. Aplikasi
            // kemudiannya memilih bacaan jam sebelumnya dan melabelkannya dengan jelas.
            const headers = new Headers(cached.headers);
            headers.set('X-Cuaca-Data-Source', 'cache');
            return new Response(cached.body, {
              status: cached.status,
              statusText: cached.statusText,
              headers
            });
          });
        })
    );
    return;
  }

  // Cache first for static assets
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    }).catch(() => {
      return caches.match('/index.html');
    })
  );
});
