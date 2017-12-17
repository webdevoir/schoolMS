"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["fonts/Simple-Line-Icons.0cb0b9c589c0624c9c78dd3d83e946f6.woff2","0cb0b9c589c0624c9c78dd3d83e946f6"],["fonts/Simple-Line-Icons.2fe2efe63441d830b1acd106c1fe8734.svg","2fe2efe63441d830b1acd106c1fe8734"],["fonts/Simple-Line-Icons.78f07e2c2a535c26ef21d95e41bd7175.woff","78f07e2c2a535c26ef21d95e41bd7175"],["fonts/Simple-Line-Icons.d2285965fe34b05465047401b8595dd0.ttf","d2285965fe34b05465047401b8595dd0"],["fonts/Simple-Line-Icons.f33df365d6d0255b586f2920355e94d7.eot","f33df365d6d0255b586f2920355e94d7"],["fonts/fontawesome-webfont.674f50d287a8c48dc19ba404d20fe713.eot","674f50d287a8c48dc19ba404d20fe713"],["fonts/fontawesome-webfont.912ec66d7572ff821749319396470bde.svg","912ec66d7572ff821749319396470bde"],["fonts/fontawesome-webfont.af7ae505a9eed503f8b8e6982036873e.woff2","af7ae505a9eed503f8b8e6982036873e"],["fonts/fontawesome-webfont.b06871f281fee6b241d60582ae9369b9.ttf","b06871f281fee6b241d60582ae9369b9"],["fonts/fontawesome-webfont.fee66e712a8a08eef5805a46892932ad.woff","fee66e712a8a08eef5805a46892932ad"],["img/favicon.ico","0c34b449548f3e7badfa9be6ef443cc0"],["img/favicon.png","950bc15cf6edcf560345ba99fe53c823"],["img/logo.19def320725abffb8e65d758abbc6b6d.png","19def320725abffb8e65d758abbc6b6d"],["img/logo.png","19def320725abffb8e65d758abbc6b6d"],["img/logo1.png","51c14bb29ce062a0ca7f805d35304e7c"],["index.bundle.js","3e64b6dab662391d14263c2013483e9d"],["index.fonts.css","d72f885ebb97f563d32384d9b237780c"],["index.html","543be7079adf87592156ea2850ddae2a"],["index.styles.css","0f46e6559747095915e53a9a632e3392"],["manifest.json","b4b20fa1d6e8a8a1d7a99a1481c88967"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("http://localhost:5000/index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});