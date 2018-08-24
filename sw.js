// Followed instructions from https://developers.google.com/web/fundamentals/codelabs/offline/
const cacheName = `restaurant-reviews`;
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        `/`,
        `index.html`,
        `restaurant.html`,
        `/css/styles.css`,
        `/js/main.js`,
        `/js/restaurant_info.js`
      ])
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
