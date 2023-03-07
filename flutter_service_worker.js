'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b95829010385d465b4e502ebbab42077",
"assets/AssetManifest.json": "47116de4416ae206aa91c0185561459f",
"assets/assets/icon/bilan.png": "2bb73f16b715fc1380f6d9ca84641c42",
"assets/assets/icon/card.png": "f7dcd54a10475aaaf7fb8bb9df5c23bd",
"assets/assets/icon/card.svg": "1705f6fbb6bc99c98521b7f4c509a6e2",
"assets/assets/icon/categorie.png": "e406f98840a9f0e916e37aaeaf670401",
"assets/assets/icon/cat_icon.png": "2aa7b95d6bbbae6137998d09bd49a8eb",
"assets/assets/icon/client.png": "af7a55a0fd57e3e0ded9c2b4b72b7819",
"assets/assets/icon/comande.png": "39a20d2c87dce513c6a2f56f5f5f2951",
"assets/assets/icon/commande.png": "f84d052eba2d9fb3f2c1001f1948fb45",
"assets/assets/icon/fail.fail.png": "ac7219a6278aeac599b63c2b4409dd51",
"assets/assets/icon/fournisseur2.png": "6af8f66557448152834b14604e393a5c",
"assets/assets/icon/google.png": "a8520c25c9b4eb9222dc3a9d6fdd81b5",
"assets/assets/icon/google.zip": "5a8b06d8e9f23d2215e801b306523ac7",
"assets/assets/icon/historique.png": "4ef6048d8631cd897ecfed149315205c",
"assets/assets/icon/home_load.json": "fb54677f8458b0f168a60ec2f18bd3d4",
"assets/assets/icon/horloge.png": "e05fbc12a278806b640901f1a92ab71b",
"assets/assets/icon/Illustration.png": "2a7c037e4052a073b231a8f6dc5d1c8f",
"assets/assets/icon/illustration.svg": "82eb68bfa6b4394756fbc4380f50477b",
"assets/assets/icon/menu.png": "2028045ea722de1f45d0c4ff481e2b53",
"assets/assets/icon/not_found.png": "ed4242fe6a16bb79bfc24fdfa927d423",
"assets/assets/icon/panier.png": "6615b22e8163adccfda5562498e7293d",
"assets/assets/icon/panier2.png": "5170ff0d68c03d2c612dab6f5763e7a1",
"assets/assets/icon/profil.png": "84bc89c29a6f55ff14495055bf2acffd",
"assets/assets/icon/recu.svg": "ab5b6b39c5460e6976665b59058472d1",
"assets/assets/icon/search_not.png": "064e6ad7eae503434770b22660e061f3",
"assets/assets/icon/shopping.png": "591dbc7374e1a7a56d5872c051f88f27",
"assets/assets/icon/stock.png": "3644c4310a5fa52250dc40b76160ccce",
"assets/assets/icon/user.png": "0a8feda6cc8f44a9ee43ea7daf2c0ab5",
"assets/assets/icon/user1.svg": "ac78a2fe02f78ee450dc2f75d4703254",
"assets/assets/icon/wallet.png": "faab4ee5b26c53d5294c1b0dececec61",
"assets/assets/icon/welcome.svg": "71f2518a63187cff56f5768110d16ac6",
"assets/FontManifest.json": "e01e822b3fef95dbc39ef1d7042ba279",
"assets/fonts/MaterialIcons-Regular.otf": "21b50bea112aa9479a58f0acd60244f7",
"assets/NOTICES": "31e8dfa86e0dab815530054e8b069790",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8330f52676613742abb983f1a144dd27",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "a2bbdbf8ee3e7b49dc5c43e73e125ec0",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "39be7f280b24d4a295190a3a2bd60f03",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "3e7c7e90ff8e206f4023c12e31b0d058",
"canvaskit/canvaskit.wasm": "35222aaf0d06f6dfba5b13782f7ff32e",
"canvaskit/chromium/canvaskit.js": "c5ff0f8767a7ea0962b15d1f1832002d",
"canvaskit/chromium/canvaskit.wasm": "7e8555fa0fbf19a88ba6ea83d02eda6d",
"canvaskit/skwasm.js": "3dbd05be6db4a4154ce733ff194dcae7",
"canvaskit/skwasm.wasm": "c0e1e265faeb6428fdeb9bc37be480f9",
"canvaskit/skwasm.worker.js": "23be0fdafa5ddef67734292a576f8fe3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "549bab8b994f1bb2f76787f7d940e1d8",
"/": "549bab8b994f1bb2f76787f7d940e1d8",
"main.dart.js": "12f49bb5a626f6ea2395262b1843ce14",
"manifest.json": "ed4faa9056f076376af7fb1c4f7c242d",
"version.json": "46822c46f88318f942c7fdb3ca2c74ee"};
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
