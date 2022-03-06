self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll(["./","./app.js", "./styles.css", "./images/logo192.png"]);
    })
  );
});

self.addEventListener("activate", function (event) {
  console.log("[Service Worker] Activating Service Worker.....", event);
  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
