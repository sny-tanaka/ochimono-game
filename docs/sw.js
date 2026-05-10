if (!self.define) {
  let e,
    i = {};
  const n = (n, s) => (
    (n = new URL(n + '.js', s).href),
    i[n] ||
      new Promise((i) => {
        if ('document' in self) {
          const e = document.createElement('script');
          ((e.src = n), (e.onload = i), document.head.appendChild(e));
        } else ((e = n), importScripts(n), i());
      }).then(() => {
        let e = i[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, r) => {
    const l = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (i[l]) return;
    let a = {};
    const f = (e) => n(e, l),
      d = { module: { uri: l }, exports: a, require: f };
    i[l] = Promise.all(s.map((e) => d[e] || f(e))).then((e) => (r(...e), a));
  };
}
define(['./workbox-1ef09536'], function (e) {
  'use strict';
  (self.addEventListener('message', (e) => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: 'index.html', revision: '46a5de54c05aa4679f2ee773f5eceb6e' },
        { url: 'icon-512.png', revision: 'a4e8fac1df09f9186affe8d3f3b981bb' },
        { url: 'icon-192.png', revision: '8179bef49d2480bac76293141a9851ba' },
        { url: 'sounds/punyu.mp3', revision: 'a36dc54f82e9199637f75dad46b2d7c9' },
        { url: 'images/gumi/level10.png', revision: '5d76b4e44716960869659191673746f2' },
        { url: 'images/gumi/level09.png', revision: '6c8aa8dc4be2e43ddc6609bf55ac6f10' },
        { url: 'images/gumi/level08.png', revision: 'b647427391718f0abdab64242be410c4' },
        { url: 'images/gumi/level07.png', revision: 'bdffa3b97e21e83a09f813af2ab74df8' },
        { url: 'images/gumi/level06.png', revision: 'e5c2b71edf48a364278bd5f2140657dd' },
        { url: 'images/gumi/level05.png', revision: 'a78f24610b4cb8bf32c4d06d90c67c05' },
        { url: 'images/gumi/level04.png', revision: 'a79fb4ccb30d33181ba0205bae7b2ae1' },
        { url: 'images/gumi/level03.png', revision: 'd168f87e04aff58728a391647af216d0' },
        { url: 'images/gumi/level02.png', revision: '27de8023b13180567a123b5f3278d6ae' },
        { url: 'images/gumi/level01.png', revision: 'dc3baaa14ec9dc5f2b70eb2db0ab3b18' },
        { url: 'assets/workbox-window.prod.es5-BIl4cyR9.js', revision: null },
        { url: 'assets/index-BTp4Vv0r.js', revision: null },
        { url: 'assets/index-BEkKeObq.css', revision: null },
        { url: 'icon-192.png', revision: '8179bef49d2480bac76293141a9851ba' },
        { url: 'icon-512.png', revision: 'a4e8fac1df09f9186affe8d3f3b981bb' },
        { url: 'robots.txt', revision: 'fa1ded1ed7c11438a9b0385b1e112850' },
        { url: 'manifest.webmanifest', revision: 'd5562cdf8970f02c7b87798ae7ef4ca4' },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL('index.html'))));
});
