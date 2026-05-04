if (!self.define) {
  let e,
    i = {};
  const s = (s, r) => (
    (s = new URL(s + '.js', r).href),
    i[s] ||
      new Promise((i) => {
        if ('document' in self) {
          const e = document.createElement('script');
          ((e.src = s), (e.onload = i), document.head.appendChild(e));
        } else ((e = s), importScripts(s), i());
      }).then(() => {
        let e = i[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (r, c) => {
    const t = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (i[t]) return;
    let a = {};
    const m = (e) => s(e, t),
      n = { module: { uri: t }, exports: a, require: m };
    i[t] = Promise.all(r.map((e) => n[e] || m(e))).then((e) => (c(...e), a));
  };
}
define(['./workbox-8c29f6e4'], function (e) {
  'use strict';
  (self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: 'registerSW.js', revision: '6c365df04952b818a480a3b287e93568' },
        { url: 'index.html', revision: '60b0e486111c4d39cb4f8b0f67862d71' },
        { url: 'images/gumi/item_10_special.svg', revision: '5211b9853d1658f6d439fddcfea9cb0c' },
        { url: 'images/gumi/item_09_cat_l.svg', revision: 'ec621507c949f62b7a062f2e33dd26fc' },
        {
          url: 'images/gumi/item_08_strawberry_l.svg',
          revision: '798801fa9ac1e1289d5ecbcefe66c182',
        },
        { url: 'images/gumi/item_07_heart_l.svg', revision: '005fd63a6214364e00e84c29bbd1b835' },
        { url: 'images/gumi/item_06_cat_m.svg', revision: '87c460c35222a14bbc21d593f6032c82' },
        {
          url: 'images/gumi/item_05_strawberry_m.svg',
          revision: '58c83a15847cea7fdcc5faccbb4c3170',
        },
        { url: 'images/gumi/item_04_heart_m.svg', revision: 'e02dc8d3c4f15a26a479517cb2b7a572' },
        { url: 'images/gumi/item_03_cat_s.svg', revision: 'd00051f3d2f4f91a1ba8a168ecf28914' },
        {
          url: 'images/gumi/item_02_strawberry_s.svg',
          revision: '35ed7b8e795efc028f76d368f033d90d',
        },
        { url: 'images/gumi/item_01_heart_s.svg', revision: '7bbd11fd8efab01bc5eeb65c657c70e1' },
        { url: 'assets/index-DUV89TB8.css', revision: null },
        { url: 'assets/index-1B-0iP3r.js', revision: null },
        { url: 'robots.txt', revision: 'fa1ded1ed7c11438a9b0385b1e112850' },
        { url: 'manifest.webmanifest', revision: '1acff83b7884dc71aaf3c618e3d25456' },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL('index.html'))));
});
