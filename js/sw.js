let CACHE_NAME = "restaurant_cache";
let urlsToCache = ["/", "/restaurant.html", "/css/", "/js/", "/img/", "/data/"];

self.addEventListener("install", function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});
