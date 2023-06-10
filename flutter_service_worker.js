'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6b7d3bda62781b59472d3f5c986f8d62",
".git/config": "778217ed8a33669d92fdd503d3390436",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "86cb262dcf26ac7f9eb2947e62cf5ad4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2d2be43b967165328afb16cb828cb484",
".git/logs/refs/heads/master": "2d2be43b967165328afb16cb828cb484",
".git/logs/refs/remotes/origin/master": "b4d8f12a01cb207439d28611b41fe3fd",
".git/objects/11/fd4199a1b5bf61d81066d579dc0cabd61995d8": "afee78c17cb9e5286e680df289070654",
".git/objects/13/956921dcb4607ffcd7fe5d153a8ae2cd1ea287": "ca4d8d72e0c7ceec0e3ea00974b26343",
".git/objects/13/ef2215baae1dd99ad697ed9e385f0e60224b80": "6034426c4221101bbc92988926440939",
".git/objects/17/31004201a84b93d6af556506eb80dab76fff31": "eb3c3c3bf137adc6e3386f515a34e53a",
".git/objects/18/aa85df55ae849228e9e1012d8d318eb4289e9a": "c1dbb1b4e4387b6c9d27c4d013e10ab1",
".git/objects/18/c6e69365a816522d1f442215362671c7313c07": "cdda3a3d50625b393a84113f9ea3e463",
".git/objects/19/6f45dc6a51d6b8da33c496a6a9359e04d51fa3": "e93eaaf93a09ba1b73d60ef886b82421",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/68cdf2d256ddc99cbdf1bf1b5edf24a0e35d7a": "8131df17f325b3f49b1583140bbf8d04",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/31/eca9b9dea1889fac76c81735c2527b30549210": "a02995bfe7201e11dd1049b3421b9667",
".git/objects/35/85995ac87c5f6c3ee84f0d12d98ab7144e5026": "c5f00e6446495a50660e4ffb4dd0e068",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/02033be188d297e2bc72d3a4a2dc012d8edb6c": "b397380af601e64aa7c1ebf937aefc5f",
".git/objects/53/ccf4f1d637f12e02b3566a88ae88e81e8cd592": "db61ec3590fa62b098541b0d136c2c77",
".git/objects/5f/94cc0f50900d9e822d8861f21080e8bb47561e": "528f61873ea1df1bb9cc7f0c3ed6c5fe",
".git/objects/61/5d0242216930ed8c8a75bfa3202ccd597a4999": "2363ad0967e2474df8dfd5c95e02f13c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/80486eb28e2bc4ffc4e99aed09bd67620831e5": "a8c6c0055f7ef96275c8c2ef6028d1a9",
".git/objects/7c/b10ce8c37cf02397314a767e50cb444f788bf0": "ea7b85ec34343bb9b85d00f11fd49e2e",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/82/02aa859ebfb3dcbd76e762f0b53c8415c0ef5b": "88c8acb8252c14d5821d6716bf5b4580",
".git/objects/84/7b0b689a9652ba400e120f67e59af06108bb0f": "5f4e234df22fef2d028414bd5503f7b9",
".git/objects/86/342f6af2946aa6ad4d66330be6b84c89551264": "a311482a5c8957914cd24658979ce2b9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa2fbace3dffa8992e57a860e4e94aa77b9ce2": "286119e91559514ddffd1ba764189546",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/3cb35f31e0ea0f94a0aa90de314e60dae4c132": "f31fe21b88e7e106189010cf5d23457b",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/39983bc02d27c0c95d504f8be1eabd435fbfa2": "c734748be3b1f26bb28758cf9f85aa54",
".git/objects/9d/7ee606008d2eee071b2f9b87737a9bae6d2bd6": "dcaf60ae51ede858a31503dda6444f39",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b6/b935d77d3b8a8f7ab544a251f9f41f453de149": "738ab8f93a1d04f1a1ffc9a34a9d9519",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/ae22fee91bcd8964294b332cef7df25f1a4c6d": "807ef0d0d4fed9185ebe2ef2e322aecd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/36faa5f0cd467f329b95d924fec5f2de62c51f": "7200d999dfa3839b515284a301d3bb3b",
".git/objects/bf/7396dec5f502bc5b5efabfad1e036321baf5f2": "9bd41e5ff9967b377d36716d81599c18",
".git/objects/c4/717c236f9bd339da40c2ca904ef1dfc136a0f9": "4c9e9a2b86b88cf949d6852d0fd41c04",
".git/objects/c6/276c8aade10576809d5e7b5a96a0971e6110c2": "f65b0cfc6a6ff5c2640cb14f5dc71b0d",
".git/objects/c9/5624f6c8bf5b6e4b3f8d8c099b3c87470cce8d": "60f19dd60bee54ddea7b352559a0edb0",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/5a9ed9484ba4e18fb3564d045192049948b084": "82b544cb850baf4b914a4e89bd554e3e",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d4/8bc84cb68f100521f0769c061962d75f8c1d35": "b91d911a6965d8705fa753a568fb889d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/c6a46d0000bb84d7b4437f2fae33b30e5b4e44": "8ebed8b8d2496622c451c1f9614ee3f6",
".git/objects/dd/89a7763d7b7734d4b7fa5d2ebd96bc5dda82ac": "9995e93212c4d8d06c6982fb45a4e6c0",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/df754cee4371163d4b9359c61590585ba24c12": "5474fdebb1d756c7db23675aedb44ef5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/cf1892b781bb212291c03b10b55381e6e78ed1": "d685906435ea657d5e215a526f9d68a6",
".git/objects/ea/dd495c46d25ad1b7659c969e0c3964ff489315": "8b4045fa4c3a52a4535c06a75b3514a8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/0b6138cd0f63fe9c97b187abcb5b9dd410f1f6": "9d2a5a9567f07f522e2c610199d7bf75",
".git/refs/heads/master": "469276c6dcd00f752e4291d8d01cde61",
".git/refs/remotes/origin/master": "469276c6dcd00f752e4291d8d01cde61",
"assets/AssetManifest.json": "63679ad5f9e67744de40212cd93a4928",
"assets/assets/font/Ro.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/images/chat-bubble.png": "30d086b045379f73f390566c3766f6e9",
"assets/assets/images/chat.png": "804cef366b3e52e54b0bf95004d072fc",
"assets/assets/images/pi.png": "7593d379558558244de9545212abdf6a",
"assets/FontManifest.json": "a2c37bb5cfa3fb4472963c7e7d2d846b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8f2b7ab052dfcf4ace9901a3769cab3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "d073695f17547f733f5dd82c89b4d4d1",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "892ab03dec5a5cbc2370e3d48a905ad7",
"/": "892ab03dec5a5cbc2370e3d48a905ad7",
"main.dart.js": "f70891c89de097563d8b73256ee385a6",
"manifest.json": "bbf1db930c12447169cb5a37bbc9beca",
"version.json": "bfe7e3a8ff90c7dbe6eb9af70fb61215"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
