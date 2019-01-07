const cacheName = 'restaurant-reviews-v1';

const filesToCache = [
    '/',
    'css/styles.css',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'img/1_small.jpg',
    'img/2_small.jpg',
    'img/3_small.jpg',
    'img/4_small.jpg',
    'img/5_small.jpg',
    'img/6_small.jpg',
    'img/7_small.jpg',
    'img/8_small.jpg',
    'img/9_small.jpg',
    'img/10_small.jpg',
    'js/dbhelper.js',
    'js/main.js',
    'js/restaurant_info.js',
    'index.html',
    'restaurant.html'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(response => {
                return caches.open(cacheName).then(cache => {
                  cache.put(event.request, response.clone());
                  return response;
                });
            });
        })
    );
});