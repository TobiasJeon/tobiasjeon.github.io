'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b13d96f25c8592cb2b7573fe8656aab9",
"index.html": "7de5b0f82d8cd3353bf9139db487463f",
"/": "7de5b0f82d8cd3353bf9139db487463f",
"main.dart.js": "fa24f5680f5ef6bd3763384d1ea9c3d3",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9f2d2adbf25249467db1acca3b2827bb",
"assets/AssetManifest.json": "e293b405ac540ef566105b6be9c87fd9",
"assets/NOTICES": "dbd26308fe1472e9af61b4983af35347",
"assets/FontManifest.json": "7ea1baf17b742d8283d3ea5ff47b2bc0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "10cc5328b6310a5c4655b66c80096d40",
"assets/fonts/MaterialIcons-Regular.otf": "c8c1ba3671e4227370aa34310c313f45",
"assets/assets/top_slide_5.PNG": "214c5689c32c66fcc255b86f0c9a2d1f",
"assets/assets/SB%2520%25EC%2596%25B4%25EA%25B7%25B8%25EB%25A1%259COTF%2520L.otf": "19fae75d970e52dfabd83cbe03e11090",
"assets/assets/SB%2520%25EC%2596%25B4%25EA%25B7%25B8%25EB%25A1%259COTF%2520M.otf": "e207a4da3431ef4b23595f775d4b066e",
"assets/assets/top_slide_4.PNG": "df4ad298eb1ae4ae356916bba3669d2e",
"assets/assets/top_slide_1.PNG": "8a7be24c51ace8ff54c528147a333c45",
"assets/assets/top_slide_3.PNG": "c2be38a9541c46f04038a8da1d86a406",
"assets/assets/top_slide_2.PNG": "217317ce67ecac72b03b667b6b350442",
"assets/assets/mid_slide_4.jpg": "648af590da319329995494930cc9bcf5",
"assets/assets/mid_slide_1.jpg": "78a9d7f96096f83089bee6f1d0913b9e",
"assets/assets/mid_slide_3.jpg": "82def136ec34c3abd83900793c617372",
"assets/assets/mid_slide_2.jpg": "2e79362f91145e76cc5c49023292ccc0",
"assets/assets/IDP1_3.png": "9e22c85c881907d3bba269a876b278f1",
"assets/assets/IDP3_1.png": "5a2cff4cbcc01eca6f7f4c79b0dc6142",
"assets/assets/susung_emblem.png": "eef9b9c987d582bc7945ba72e7ac687f",
"assets/assets/IDP1_2.png": "ab6c4caa6101c23f95403358f9a4c7a5",
"assets/assets/IDP3_2.png": "644c4a2cebc4eef65b35a96bf1c79b08",
"assets/assets/IDP3_3.png": "3c568ae2c8baf6a833d765ff008a075f",
"assets/assets/IDP1_1.png": "ee7c54133b48ab3faf2566973f6c71ff",
"assets/assets/banner_detail_1.png": "944d0b89c745e546cb3a9479f1c0d145",
"assets/assets/IDP3_6.png": "e1d0fa2151f0de4bb4c6991aa486c28e",
"assets/assets/IDP3_4.png": "277673bf899b2e46b2d9fc7c2e2187bd",
"assets/assets/banner_detail_2.png": "dab4d4e3613ff3fa32312ef5de58519d",
"assets/assets/IDP3_5.png": "b28311e072c81a0dd9370065588b9982",
"assets/assets/IDP2_2.png": "434d88cb22947c977ed17b1318e6f7b9",
"assets/assets/IDP4_4.png": "d137c38333755cbc601fc6e9784ada0a",
"assets/assets/IDP2_1.png": "ca7073c355ce04ba8eaeebe0bff846cf",
"assets/assets/IDP4_2.png": "5a0fcc24552f5baa4a85ccb4a0f7732a",
"assets/assets/Ex_picture.png": "8c88bd09976a4858c5cd74c7cc80262e",
"assets/assets/IDP4_3.png": "e1ed67ae2f2d70b1d4e9f6c6b92cccb9",
"assets/assets/banner_ad_2.png": "9db16ae9400c3d996e4d5dc455388f97",
"assets/assets/IDP4_1.png": "27b15cd2c9b71ba6ef3f5da2395dc2d4",
"assets/assets/SB%2520%25EC%2596%25B4%25EA%25B7%25B8%25EB%25A1%259COTF%2520B.otf": "016c9a0960a895796ac46f34700711b7",
"assets/assets/banner_ad_1.png": "cf4f72b8c839a9a7777d475058ca37e8",
"canvaskit/skwasm.js": "831c0eebc8462d12790b0fadf3ab6a8a",
"canvaskit/skwasm.wasm": "3a6c96d95c7c32b0c4ec4f40d46ece9c",
"canvaskit/chromium/canvaskit.js": "0447cabd24385be0436ab8429d76621c",
"canvaskit/chromium/canvaskit.wasm": "09add09980b36dad0e7e526cebf2efd2",
"canvaskit/canvaskit.js": "45bec3a754fba62b2d8f23c38895f029",
"canvaskit/canvaskit.wasm": "0e48543e876031155ae29b08564e270b",
"canvaskit/skwasm.worker.js": "7ec8c65402d6cd2a341a5d66aa3d021f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
