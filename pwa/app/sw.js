/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/croissant.png",
    "revision": "164ef686cae1774929e0017afc103724"
  },
  {
    "url": "assets/icon144.png",
    "revision": "8586225346587f1abb83d5a6a1f79f6c"
  },
  {
    "url": "index.html",
    "revision": "b4f629b52fc630640da57af21a410b07"
  },
  {
    "url": "lib/phaser.min.js",
    "revision": "37faafc9439e5eff625f9cc531a681ed"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "5fb260282f7c71c6d0c1acacd0f10076"
  },
  {
    "url": "src/index.js",
    "revision": "a7291c50ad5086abcc3ae637116a2ff5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
