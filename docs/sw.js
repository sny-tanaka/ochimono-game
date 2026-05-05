if (!self.define) {
  let e,
    i = {};
  const a = (a, r) => (
    (a = new URL(a + '.js', r).href),
    i[a] ||
      new Promise((i) => {
        if ('document' in self) {
          const e = document.createElement('script');
          ((e.src = a), (e.onload = i), document.head.appendChild(e));
        } else ((e = a), importScripts(a), i());
      }).then(() => {
        let e = i[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (r, l) => {
    const n = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (i[n]) return;
    let s = {};
    const d = (e) => a(e, n),
      o = { module: { uri: n }, exports: s, require: d };
    i[n] = Promise.all(r.map((e) => o[e] || d(e))).then((e) => (l(...e), s));
  };
}
define(['./workbox-1ef09536'], function (e) {
  'use strict';
  (self.addEventListener('message', (e) => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: 'index.html', revision: '93b1fcce5724741358684950b9584618' },
        { url: 'icon-512.png', revision: 'a4e8fac1df09f9186affe8d3f3b981bb' },
        { url: 'icon-192.png', revision: '8179bef49d2480bac76293141a9851ba' },
        { url: 'sounds/punyu.mp3', revision: 'a36dc54f82e9199637f75dad46b2d7c9' },
        { url: 'images/other/level10.png', revision: '697a079a30a8ef809ccaed1c4da4b0b7' },
        { url: 'images/other/level09.png', revision: '0e8753d7362998d6fd892022523bc0c3' },
        { url: 'images/other/level08.png', revision: '17d5f7450eb28369e3cd17808d2981ad' },
        { url: 'images/other/level07.png', revision: 'bdffa3b97e21e83a09f813af2ab74df8' },
        { url: 'images/other/level06.png', revision: 'aa12678a0d92d81e828fdc6eba1bed20' },
        { url: 'images/other/level05.png', revision: 'a78f24610b4cb8bf32c4d06d90c67c05' },
        { url: 'images/other/level04.png', revision: 'a79fb4ccb30d33181ba0205bae7b2ae1' },
        { url: 'images/other/level03.png', revision: '94f2b802e9146566e2d869cdadc2ed46' },
        { url: 'images/other/level02.png', revision: '27de8023b13180567a123b5f3278d6ae' },
        { url: 'images/other/level01.png', revision: 'dc3baaa14ec9dc5f2b70eb2db0ab3b18' },
        { url: 'images/gumi/level10.png', revision: '697a079a30a8ef809ccaed1c4da4b0b7' },
        { url: 'images/gumi/level09.png', revision: '0e8753d7362998d6fd892022523bc0c3' },
        { url: 'images/gumi/level08.png', revision: '17d5f7450eb28369e3cd17808d2981ad' },
        { url: 'images/gumi/level07.png', revision: 'bdffa3b97e21e83a09f813af2ab74df8' },
        { url: 'images/gumi/level06.png', revision: 'aa12678a0d92d81e828fdc6eba1bed20' },
        { url: 'images/gumi/level05.png', revision: 'a78f24610b4cb8bf32c4d06d90c67c05' },
        { url: 'images/gumi/level04.png', revision: 'a79fb4ccb30d33181ba0205bae7b2ae1' },
        { url: 'images/gumi/level03.png', revision: '94f2b802e9146566e2d869cdadc2ed46' },
        { url: 'images/gumi/level02.png', revision: '27de8023b13180567a123b5f3278d6ae' },
        { url: 'images/gumi/level01.png', revision: 'dc3baaa14ec9dc5f2b70eb2db0ab3b18' },
        { url: 'assets/workbox-window.prod.es5-BIl4cyR9.js', revision: null },
        { url: 'assets/index-CMSe-DIf.js', revision: null },
        { url: 'assets/index-CE7q-SDE.css', revision: null },
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
