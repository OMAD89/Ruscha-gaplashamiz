const CACHE = 'business-rus-v1';
const ASSETS = ['./index.html','./app.js','./lessons.js','./manifest.json','./icon-192.png','./icon-512.png'];

self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));
  self.skipWaiting();
});

self.addEventListener('activate', (e)=>{
  e.waitUntil(
    caches.keys().then(keys=> Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e)=>{
  e.respondWith(
    caches.match(e.request).then(cached=> cached || fetch(e.request).then(res=>{
      const resClone = res.clone();
      caches.open(CACHE).then(c=>c.put(e.request, resClone));
      return res;
    }).catch(()=> cached))
  );
});
