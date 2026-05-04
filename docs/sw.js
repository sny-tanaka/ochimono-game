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
  self.define = (r, a) => {
    const c = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (i[c]) return;
    let n = {};
    const f = (e) => s(e, c),
      t = { module: { uri: c }, exports: n, require: f };
    i[c] = Promise.all(r.map((e) => t[e] || f(e))).then((e) => (a(...e), n));
  };
}
define(['./workbox-8c29f6e4'], function (e) {
  'use strict';
  (self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: 'registerSW.js', revision: '6c365df04952b818a480a3b287e93568' },
        { url: 'index.html', revision: '3193cfdff455892a5776b2510e6fd431' },
        { url: 'icon-512.png', revision: 'a4e8fac1df09f9186affe8d3f3b981bb' },
        { url: 'icon-192.png', revision: '8179bef49d2480bac76293141a9851ba' },
        { url: 'images/gumi/item_10_special.svg', revision: '2d4a083747b65f5cb7631b21e4896b15' },
        { url: 'images/gumi/item_09_cat_l.svg', revision: '04495bd48f3d13b0883c198ae5c7aa86' },
        {
          url: 'images/gumi/item_08_strawberry_l.svg',
          revision: 'c168692493c45bdf3cc945b573e11c89',
        },
        { url: 'images/gumi/item_07_heart_l.svg', revision: '2fb6c705bbf4d79acabad740388c9efc' },
        { url: 'images/gumi/item_06_cat_m.svg', revision: '0719fa89cc9bac47e58fb9b727138b5c' },
        {
          url: 'images/gumi/item_05_strawberry_m.svg',
          revision: '4f024f78956c92b3f26d555f1dd72fd1',
        },
        { url: 'images/gumi/item_04_heart_m.svg', revision: '069531daa60d1c3381fd7c077744f351' },
        { url: 'images/gumi/item_03_cat_s.svg', revision: '405174eba0df75d10a6e4da70d944359' },
        {
          url: 'images/gumi/item_02_strawberry_s.svg',
          revision: 'c302e6c2f960fea748b2a0aca03f3982',
        },
        { url: 'images/gumi/item_01_heart_s.svg', revision: '44bab915a76475cd6968cdc8d3145199' },
        { url: 'assets/index-nQwWiKfY.css', revision: null },
        { url: 'assets/index-BOV-7yA5.js', revision: null },
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
