const VERSION='daykit-v2';
self.addEventListener('install',event=>event.waitUntil(caches.open(VERSION).then(cache=>cache.addAll(['./','./manifest.webmanifest','./favicon.svg'])).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==VERSION).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET'||new URL(request.url).origin!==location.origin)return;
  event.respondWith(fetch(request).then(response=>{
    if(response.ok){const copy=response.clone();caches.open(VERSION).then(cache=>cache.put(request,copy));}
    return response;
  }).catch(()=>caches.match(request).then(cached=>cached||caches.match(new URL('./',location.href)))));
});
