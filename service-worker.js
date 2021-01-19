self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        // Main page
        '/',
        // Script that registers service worker
        '/register-service-worker.js'
      ])
    })
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      // Real fetch if cache doesn't have it
      .then(async response => response || await fetch(e.request))
    )
})
