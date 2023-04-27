'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b13d96f25c8592cb2b7573fe8656aab9",
"index.html": "e495df6561130ba4c7f0680c326cab78",
"/": "e495df6561130ba4c7f0680c326cab78",
"main.dart.js": "f949a942a64fc8cb0507a6b24b774c56",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9f2d2adbf25249467db1acca3b2827bb",
"assets/AssetManifest.json": "0a1536512842f36365bed0e0402e629c",
"assets/NOTICES": "dbd26308fe1472e9af61b4983af35347",
"assets/FontManifest.json": "7ea1baf17b742d8283d3ea5ff47b2bc0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "cc8121f3e27e28fd86d2793ce1e7a6af",
"assets/fonts/MaterialIcons-Regular.otf": "c8c1ba3671e4227370aa34310c313f45",
"assets/assets/top_slide_5.jpg": "ce1c29fa584cd2cbac24984323ca750e",
"assets/assets/SB%2520%25EC%2596%25B4%25EA%25B7%25B8%25EB%25A1%259COTF%2520L.otf": "19fae75d970e52dfabd83cbe03e11090",
"assets/assets/SB%2520%25EC%2596%25B4%25EA%25B7%25B8%25EB%25A1%259COTF%2520M.otf": "e207a4da3431ef4b23595f775d4b066e",
"assets/assets/top_slide_4.jpg": "d8ace08b0dd93ccef4b18e88c5647e3d",
"assets/assets/top_slide_1.jpg": "7604c1c313e02411124c0500fddac16b",
"assets/assets/top_slide_3.jpg": "2c57530cc0199d3d9787e96678a967af",
"assets/assets/top_slide_2.jpg": "be5b0eb744a55045b1c133efc4c9d9cb",
"assets/assets/mid_slide_4.jpg": "648af590da319329995494930cc9bcf5",
"assets/assets/mid_slide_1.jpg": "78a9d7f96096f83089bee6f1d0913b9e",
"assets/assets/mid_slide_3.jpg": "82def136ec34c3abd83900793c617372",
"assets/assets/mid_slide_2.jpg": "2e79362f91145e76cc5c49023292ccc0",
"assets/assets/susung_emblem.jpg": "61b77726f2905b61e09cd3de49315c4c",
"assets/assets/IDP3_1.jpg": "b8e2fcc4ca2552929178d9b895a4ebac",
"assets/assets/IDP1_3.jpg": "7143ec101de38427498b80c50dee9228",
"assets/assets/IDP1_2.jpg": "9fef2b5bea64891d72b3f638e8bce085",
"assets/assets/IDP3_2.jpg": "a0de1e8b0c13058cab4db4d676b13636",
"assets/assets/IDP1_1.jpg": "118cd630996cfb445f711d4f613039a9",
"assets/assets/IDP3_3.jpg": "156d11a58fee7cf97bb9c8ea990d9595",
"assets/assets/IDP3_6.jpg": "a37ae014cedabedb0fd7d65184ff4e79",
"assets/assets/banner_detail_1.jpg": "613c7e2f5bf3c523ac4ea7ae8fa2a1f7",
"assets/assets/IDP3_4.jpg": "a052ea8f42241d0e9f078f9e0dea8a3a",
"assets/assets/IDP3_5.jpg": "e444591a9cf4556bb0d892a7942a1d8d",
"assets/assets/banner_detail_2.jpg": "f4a0dab1526b48cf9d2bfc5f9fa1aff7",
"assets/assets/IDP2_2.jpg": "a5d0d493b4b9c988f8585f6fc5f5f1d6",
"assets/assets/IDP4_4.jpg": "04def97a6ab6b1d95d75299307dc241f",
"assets/assets/IDP2_1.jpg": "89dbd4501f0dbf4edba8573458d8ef8e",
"assets/assets/IDP4_2.jpg": "3b2ebb97ce7cb096e8e731ac2a91a9d9",
"assets/assets/IDP4_3.jpg": "2e3060e29c20ab3475c24694f11c477c",
"assets/assets/Ex_picture.jpg": "39d2d508f57e8de035188fbf37d5892f",
"assets/assets/banner_ad_2.jpg": "111624bd816eb8941fec2f6a17a92c3f",
"assets/assets/IDP4_1.jpg": "490e715506d58ef155ce94cf41762814",
"assets/assets/SB%2520%25EC%2596%25B4%25EA%25B7%25B8%25EB%25A1%259COTF%2520B.otf": "016c9a0960a895796ac46f34700711b7",
"assets/assets/banner_ad_1.jpg": "faea39da2cd050ac5e2f910b794e7655",
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
