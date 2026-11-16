self.addEventListener('fetch', (event) => {
  // Service worker mínimo requerido para PWA
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});

