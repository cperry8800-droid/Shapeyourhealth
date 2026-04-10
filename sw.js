const CACHE_NAME = 'shape-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/home.html',
  '/styles.css',
  '/app.js',
  '/logo.png',
  '/trainers.html',
  '/nutritionists.html',
  '/pricing.html',
  '/contact.html',
  '/landing.html',
  '/login.html',
  '/progress.html',
  '/nutrition-schedule.html',
  '/trainer-dashboard.html',
  '/messages.html',
  '/consultation.html',
  '/signup-client.html',
  '/signup-trainer.html',
  '/signup-nutritionist.html',
  '/signup-gym.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
