(function () {
  const b = document.createElement('link').relList;
  if (b && b.supports && b.supports('modulepreload')) return;
  for (const v of document.querySelectorAll('link[rel="modulepreload"]')) E(v);
  new MutationObserver((v) => {
    for (const i of v)
      if (i.type === 'childList')
        for (const c of i.addedNodes) c.tagName === 'LINK' && c.rel === 'modulepreload' && E(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function M(v) {
    const i = {};
    return (
      v.integrity && (i.integrity = v.integrity),
      v.referrerPolicy && (i.referrerPolicy = v.referrerPolicy),
      v.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : v.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function E(v) {
    if (v.ep) return;
    v.ep = !0;
    const i = M(v);
    fetch(v.href, i);
  }
})();
var ym =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function R0(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, 'default') ? o.default : o;
}
var Fs = { exports: {} },
  Fn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pm;
function z0() {
  if (pm) return Fn;
  pm = 1;
  var o = Symbol.for('react.transitional.element'),
    b = Symbol.for('react.fragment');
  function M(E, v, i) {
    var c = null;
    if ((i !== void 0 && (c = '' + i), v.key !== void 0 && (c = '' + v.key), 'key' in v)) {
      i = {};
      for (var m in v) m !== 'key' && (i[m] = v[m]);
    } else i = v;
    return ((v = i.ref), { $$typeof: o, type: E, key: c, ref: v !== void 0 ? v : null, props: i });
  }
  return ((Fn.Fragment = b), (Fn.jsx = M), (Fn.jsxs = M), Fn);
}
var Sm;
function D0() {
  return (Sm || ((Sm = 1), (Fs.exports = z0())), Fs.exports);
}
var ae = D0(),
  $s = { exports: {} },
  $n = {},
  Ws = { exports: {} },
  ks = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xm;
function O0() {
  return (
    xm ||
      ((xm = 1),
      (function (o) {
        function b(G, Z) {
          var te = G.length;
          G.push(Z);
          e: for (; 0 < te; ) {
            var ne = (te - 1) >>> 1,
              fe = G[ne];
            if (0 < v(fe, Z)) ((G[ne] = Z), (G[te] = fe), (te = ne));
            else break e;
          }
        }
        function M(G) {
          return G.length === 0 ? null : G[0];
        }
        function E(G) {
          if (G.length === 0) return null;
          var Z = G[0],
            te = G.pop();
          if (te !== Z) {
            G[0] = te;
            e: for (var ne = 0, fe = G.length, H = fe >>> 1; ne < H; ) {
              var $ = 2 * (ne + 1) - 1,
                le = G[$],
                ie = $ + 1,
                ce = G[ie];
              if (0 > v(le, te))
                ie < fe && 0 > v(ce, le)
                  ? ((G[ne] = ce), (G[ie] = te), (ne = ie))
                  : ((G[ne] = le), (G[$] = te), (ne = $));
              else if (ie < fe && 0 > v(ce, te)) ((G[ne] = ce), (G[ie] = te), (ne = ie));
              else break e;
            }
          }
          return Z;
        }
        function v(G, Z) {
          var te = G.sortIndex - Z.sortIndex;
          return te !== 0 ? te : G.id - Z.id;
        }
        if (
          ((o.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var i = performance;
          o.unstable_now = function () {
            return i.now();
          };
        } else {
          var c = Date,
            m = c.now();
          o.unstable_now = function () {
            return c.now() - m;
          };
        }
        var s = [],
          d = [],
          f = 1,
          g = null,
          S = 3,
          r = !1,
          y = !1,
          h = !1,
          x = !1,
          C = typeof setTimeout == 'function' ? setTimeout : null,
          O = typeof clearTimeout == 'function' ? clearTimeout : null,
          B = typeof setImmediate < 'u' ? setImmediate : null;
        function L(G) {
          for (var Z = M(d); Z !== null; ) {
            if (Z.callback === null) E(d);
            else if (Z.startTime <= G) (E(d), (Z.sortIndex = Z.expirationTime), b(s, Z));
            else break;
            Z = M(d);
          }
        }
        function T(G) {
          if (((h = !1), L(G), !y))
            if (M(s) !== null) ((y = !0), z || ((z = !0), N()));
            else {
              var Z = M(d);
              Z !== null && k(T, Z.startTime - G);
            }
        }
        var z = !1,
          D = -1,
          R = 5,
          _ = -1;
        function U() {
          return x ? !0 : !(o.unstable_now() - _ < R);
        }
        function Y() {
          if (((x = !1), z)) {
            var G = o.unstable_now();
            _ = G;
            var Z = !0;
            try {
              e: {
                ((y = !1), h && ((h = !1), O(D), (D = -1)), (r = !0));
                var te = S;
                try {
                  t: {
                    for (L(G), g = M(s); g !== null && !(g.expirationTime > G && U()); ) {
                      var ne = g.callback;
                      if (typeof ne == 'function') {
                        ((g.callback = null), (S = g.priorityLevel));
                        var fe = ne(g.expirationTime <= G);
                        if (((G = o.unstable_now()), typeof fe == 'function')) {
                          ((g.callback = fe), L(G), (Z = !0));
                          break t;
                        }
                        (g === M(s) && E(s), L(G));
                      } else E(s);
                      g = M(s);
                    }
                    if (g !== null) Z = !0;
                    else {
                      var H = M(d);
                      (H !== null && k(T, H.startTime - G), (Z = !1));
                    }
                  }
                  break e;
                } finally {
                  ((g = null), (S = te), (r = !1));
                }
                Z = void 0;
              }
            } finally {
              Z ? N() : (z = !1);
            }
          }
        }
        var N;
        if (typeof B == 'function')
          N = function () {
            B(Y);
          };
        else if (typeof MessageChannel < 'u') {
          var J = new MessageChannel(),
            I = J.port2;
          ((J.port1.onmessage = Y),
            (N = function () {
              I.postMessage(null);
            }));
        } else
          N = function () {
            C(Y, 0);
          };
        function k(G, Z) {
          D = C(function () {
            G(o.unstable_now());
          }, Z);
        }
        ((o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (G) {
            G.callback = null;
          }),
          (o.unstable_forceFrameRate = function (G) {
            0 > G || 125 < G
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (R = 0 < G ? Math.floor(1e3 / G) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (o.unstable_next = function (G) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = S;
            }
            var te = S;
            S = Z;
            try {
              return G();
            } finally {
              S = te;
            }
          }),
          (o.unstable_requestPaint = function () {
            x = !0;
          }),
          (o.unstable_runWithPriority = function (G, Z) {
            switch (G) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                G = 3;
            }
            var te = S;
            S = G;
            try {
              return Z();
            } finally {
              S = te;
            }
          }),
          (o.unstable_scheduleCallback = function (G, Z, te) {
            var ne = o.unstable_now();
            switch (
              (typeof te == 'object' && te !== null
                ? ((te = te.delay), (te = typeof te == 'number' && 0 < te ? ne + te : ne))
                : (te = ne),
              G)
            ) {
              case 1:
                var fe = -1;
                break;
              case 2:
                fe = 250;
                break;
              case 5:
                fe = 1073741823;
                break;
              case 4:
                fe = 1e4;
                break;
              default:
                fe = 5e3;
            }
            return (
              (fe = te + fe),
              (G = {
                id: f++,
                callback: Z,
                priorityLevel: G,
                startTime: te,
                expirationTime: fe,
                sortIndex: -1,
              }),
              te > ne
                ? ((G.sortIndex = te),
                  b(d, G),
                  M(s) === null && G === M(d) && (h ? (O(D), (D = -1)) : (h = !0), k(T, te - ne)))
                : ((G.sortIndex = fe), b(s, G), y || r || ((y = !0), z || ((z = !0), N()))),
              G
            );
          }),
          (o.unstable_shouldYield = U),
          (o.unstable_wrapCallback = function (G) {
            var Z = S;
            return function () {
              var te = S;
              S = Z;
              try {
                return G.apply(this, arguments);
              } finally {
                S = te;
              }
            };
          }));
      })(ks)),
    ks
  );
}
var Em;
function B0() {
  return (Em || ((Em = 1), (Ws.exports = O0())), Ws.exports);
}
var Ps = { exports: {} },
  me = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tm;
function U0() {
  if (Tm) return me;
  Tm = 1;
  var o = Symbol.for('react.transitional.element'),
    b = Symbol.for('react.portal'),
    M = Symbol.for('react.fragment'),
    E = Symbol.for('react.strict_mode'),
    v = Symbol.for('react.profiler'),
    i = Symbol.for('react.consumer'),
    c = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    s = Symbol.for('react.suspense'),
    d = Symbol.for('react.memo'),
    f = Symbol.for('react.lazy'),
    g = Symbol.for('react.activity'),
    S = Symbol.iterator;
  function r(H) {
    return H === null || typeof H != 'object'
      ? null
      : ((H = (S && H[S]) || H['@@iterator']), typeof H == 'function' ? H : null);
  }
  var y = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    h = Object.assign,
    x = {};
  function C(H, $, le) {
    ((this.props = H), (this.context = $), (this.refs = x), (this.updater = le || y));
  }
  ((C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (H, $) {
      if (typeof H != 'object' && typeof H != 'function' && H != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, H, $, 'setState');
    }),
    (C.prototype.forceUpdate = function (H) {
      this.updater.enqueueForceUpdate(this, H, 'forceUpdate');
    }));
  function O() {}
  O.prototype = C.prototype;
  function B(H, $, le) {
    ((this.props = H), (this.context = $), (this.refs = x), (this.updater = le || y));
  }
  var L = (B.prototype = new O());
  ((L.constructor = B), h(L, C.prototype), (L.isPureReactComponent = !0));
  var T = Array.isArray;
  function z() {}
  var D = { H: null, A: null, T: null, S: null },
    R = Object.prototype.hasOwnProperty;
  function _(H, $, le) {
    var ie = le.ref;
    return { $$typeof: o, type: H, key: $, ref: ie !== void 0 ? ie : null, props: le };
  }
  function U(H, $) {
    return _(H.type, $, H.props);
  }
  function Y(H) {
    return typeof H == 'object' && H !== null && H.$$typeof === o;
  }
  function N(H) {
    var $ = { '=': '=0', ':': '=2' };
    return (
      '$' +
      H.replace(/[=:]/g, function (le) {
        return $[le];
      })
    );
  }
  var J = /\/+/g;
  function I(H, $) {
    return typeof H == 'object' && H !== null && H.key != null ? N('' + H.key) : $.toString(36);
  }
  function k(H) {
    switch (H.status) {
      case 'fulfilled':
        return H.value;
      case 'rejected':
        throw H.reason;
      default:
        switch (
          (typeof H.status == 'string'
            ? H.then(z, z)
            : ((H.status = 'pending'),
              H.then(
                function ($) {
                  H.status === 'pending' && ((H.status = 'fulfilled'), (H.value = $));
                },
                function ($) {
                  H.status === 'pending' && ((H.status = 'rejected'), (H.reason = $));
                }
              )),
          H.status)
        ) {
          case 'fulfilled':
            return H.value;
          case 'rejected':
            throw H.reason;
        }
    }
    throw H;
  }
  function G(H, $, le, ie, ce) {
    var ue = typeof H;
    (ue === 'undefined' || ue === 'boolean') && (H = null);
    var ve = !1;
    if (H === null) ve = !0;
    else
      switch (ue) {
        case 'bigint':
        case 'string':
        case 'number':
          ve = !0;
          break;
        case 'object':
          switch (H.$$typeof) {
            case o:
            case b:
              ve = !0;
              break;
            case f:
              return ((ve = H._init), G(ve(H._payload), $, le, ie, ce));
          }
      }
    if (ve)
      return (
        (ce = ce(H)),
        (ve = ie === '' ? '.' + I(H, 0) : ie),
        T(ce)
          ? ((le = ''),
            ve != null && (le = ve.replace(J, '$&/') + '/'),
            G(ce, $, le, '', function (tt) {
              return tt;
            }))
          : ce != null &&
            (Y(ce) &&
              (ce = U(
                ce,
                le +
                  (ce.key == null || (H && H.key === ce.key)
                    ? ''
                    : ('' + ce.key).replace(J, '$&/') + '/') +
                  ve
              )),
            $.push(ce)),
        1
      );
    ve = 0;
    var Te = ie === '' ? '.' : ie + ':';
    if (T(H))
      for (var Be = 0; Be < H.length; Be++)
        ((ie = H[Be]), (ue = Te + I(ie, Be)), (ve += G(ie, $, le, ue, ce)));
    else if (((Be = r(H)), typeof Be == 'function'))
      for (H = Be.call(H), Be = 0; !(ie = H.next()).done; )
        ((ie = ie.value), (ue = Te + I(ie, Be++)), (ve += G(ie, $, le, ue, ce)));
    else if (ue === 'object') {
      if (typeof H.then == 'function') return G(k(H), $, le, ie, ce);
      throw (
        ($ = String(H)),
        Error(
          'Objects are not valid as a React child (found: ' +
            ($ === '[object Object]' ? 'object with keys {' + Object.keys(H).join(', ') + '}' : $) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return ve;
  }
  function Z(H, $, le) {
    if (H == null) return H;
    var ie = [],
      ce = 0;
    return (
      G(H, ie, '', '', function (ue) {
        return $.call(le, ue, ce++);
      }),
      ie
    );
  }
  function te(H) {
    if (H._status === -1) {
      var $ = H._result;
      (($ = $()),
        $.then(
          function (le) {
            (H._status === 0 || H._status === -1) && ((H._status = 1), (H._result = le));
          },
          function (le) {
            (H._status === 0 || H._status === -1) && ((H._status = 2), (H._result = le));
          }
        ),
        H._status === -1 && ((H._status = 0), (H._result = $)));
    }
    if (H._status === 1) return H._result.default;
    throw H._result;
  }
  var ne =
      typeof reportError == 'function'
        ? reportError
        : function (H) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var $ = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof H == 'object' && H !== null && typeof H.message == 'string'
                    ? String(H.message)
                    : String(H),
                error: H,
              });
              if (!window.dispatchEvent($)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', H);
              return;
            }
            console.error(H);
          },
    fe = {
      map: Z,
      forEach: function (H, $, le) {
        Z(
          H,
          function () {
            $.apply(this, arguments);
          },
          le
        );
      },
      count: function (H) {
        var $ = 0;
        return (
          Z(H, function () {
            $++;
          }),
          $
        );
      },
      toArray: function (H) {
        return (
          Z(H, function ($) {
            return $;
          }) || []
        );
      },
      only: function (H) {
        if (!Y(H))
          throw Error('React.Children.only expected to receive a single React element child.');
        return H;
      },
    };
  return (
    (me.Activity = g),
    (me.Children = fe),
    (me.Component = C),
    (me.Fragment = M),
    (me.Profiler = v),
    (me.PureComponent = B),
    (me.StrictMode = E),
    (me.Suspense = s),
    (me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D),
    (me.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (H) {
        return D.H.useMemoCache(H);
      },
    }),
    (me.cache = function (H) {
      return function () {
        return H.apply(null, arguments);
      };
    }),
    (me.cacheSignal = function () {
      return null;
    }),
    (me.cloneElement = function (H, $, le) {
      if (H == null) throw Error('The argument must be a React element, but you passed ' + H + '.');
      var ie = h({}, H.props),
        ce = H.key;
      if ($ != null)
        for (ue in ($.key !== void 0 && (ce = '' + $.key), $))
          !R.call($, ue) ||
            ue === 'key' ||
            ue === '__self' ||
            ue === '__source' ||
            (ue === 'ref' && $.ref === void 0) ||
            (ie[ue] = $[ue]);
      var ue = arguments.length - 2;
      if (ue === 1) ie.children = le;
      else if (1 < ue) {
        for (var ve = Array(ue), Te = 0; Te < ue; Te++) ve[Te] = arguments[Te + 2];
        ie.children = ve;
      }
      return _(H.type, ce, ie);
    }),
    (me.createContext = function (H) {
      return (
        (H = {
          $$typeof: c,
          _currentValue: H,
          _currentValue2: H,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (H.Provider = H),
        (H.Consumer = { $$typeof: i, _context: H }),
        H
      );
    }),
    (me.createElement = function (H, $, le) {
      var ie,
        ce = {},
        ue = null;
      if ($ != null)
        for (ie in ($.key !== void 0 && (ue = '' + $.key), $))
          R.call($, ie) && ie !== 'key' && ie !== '__self' && ie !== '__source' && (ce[ie] = $[ie]);
      var ve = arguments.length - 2;
      if (ve === 1) ce.children = le;
      else if (1 < ve) {
        for (var Te = Array(ve), Be = 0; Be < ve; Be++) Te[Be] = arguments[Be + 2];
        ce.children = Te;
      }
      if (H && H.defaultProps)
        for (ie in ((ve = H.defaultProps), ve)) ce[ie] === void 0 && (ce[ie] = ve[ie]);
      return _(H, ue, ce);
    }),
    (me.createRef = function () {
      return { current: null };
    }),
    (me.forwardRef = function (H) {
      return { $$typeof: m, render: H };
    }),
    (me.isValidElement = Y),
    (me.lazy = function (H) {
      return { $$typeof: f, _payload: { _status: -1, _result: H }, _init: te };
    }),
    (me.memo = function (H, $) {
      return { $$typeof: d, type: H, compare: $ === void 0 ? null : $ };
    }),
    (me.startTransition = function (H) {
      var $ = D.T,
        le = {};
      D.T = le;
      try {
        var ie = H(),
          ce = D.S;
        (ce !== null && ce(le, ie),
          typeof ie == 'object' && ie !== null && typeof ie.then == 'function' && ie.then(z, ne));
      } catch (ue) {
        ne(ue);
      } finally {
        ($ !== null && le.types !== null && ($.types = le.types), (D.T = $));
      }
    }),
    (me.unstable_useCacheRefresh = function () {
      return D.H.useCacheRefresh();
    }),
    (me.use = function (H) {
      return D.H.use(H);
    }),
    (me.useActionState = function (H, $, le) {
      return D.H.useActionState(H, $, le);
    }),
    (me.useCallback = function (H, $) {
      return D.H.useCallback(H, $);
    }),
    (me.useContext = function (H) {
      return D.H.useContext(H);
    }),
    (me.useDebugValue = function () {}),
    (me.useDeferredValue = function (H, $) {
      return D.H.useDeferredValue(H, $);
    }),
    (me.useEffect = function (H, $) {
      return D.H.useEffect(H, $);
    }),
    (me.useEffectEvent = function (H) {
      return D.H.useEffectEvent(H);
    }),
    (me.useId = function () {
      return D.H.useId();
    }),
    (me.useImperativeHandle = function (H, $, le) {
      return D.H.useImperativeHandle(H, $, le);
    }),
    (me.useInsertionEffect = function (H, $) {
      return D.H.useInsertionEffect(H, $);
    }),
    (me.useLayoutEffect = function (H, $) {
      return D.H.useLayoutEffect(H, $);
    }),
    (me.useMemo = function (H, $) {
      return D.H.useMemo(H, $);
    }),
    (me.useOptimistic = function (H, $) {
      return D.H.useOptimistic(H, $);
    }),
    (me.useReducer = function (H, $, le) {
      return D.H.useReducer(H, $, le);
    }),
    (me.useRef = function (H) {
      return D.H.useRef(H);
    }),
    (me.useState = function (H) {
      return D.H.useState(H);
    }),
    (me.useSyncExternalStore = function (H, $, le) {
      return D.H.useSyncExternalStore(H, $, le);
    }),
    (me.useTransition = function () {
      return D.H.useTransition();
    }),
    (me.version = '19.2.5'),
    me
  );
}
var bm;
function ff() {
  return (bm || ((bm = 1), (Ps.exports = U0())), Ps.exports);
}
var Is = { exports: {} },
  at = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mm;
function N0() {
  if (Mm) return at;
  Mm = 1;
  var o = ff();
  function b(s) {
    var d = 'https://react.dev/errors/' + s;
    if (1 < arguments.length) {
      d += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var f = 2; f < arguments.length; f++) d += '&args[]=' + encodeURIComponent(arguments[f]);
    }
    return (
      'Minified React error #' +
      s +
      '; visit ' +
      d +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function M() {}
  var E = {
      d: {
        f: M,
        r: function () {
          throw Error(b(522));
        },
        D: M,
        C: M,
        L: M,
        m: M,
        X: M,
        S: M,
        M,
      },
      p: 0,
      findDOMNode: null,
    },
    v = Symbol.for('react.portal');
  function i(s, d, f) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: v,
      key: g == null ? null : '' + g,
      children: s,
      containerInfo: d,
      implementation: f,
    };
  }
  var c = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(s, d) {
    if (s === 'font') return '';
    if (typeof d == 'string') return d === 'use-credentials' ? d : '';
  }
  return (
    (at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E),
    (at.createPortal = function (s, d) {
      var f = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!d || (d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)) throw Error(b(299));
      return i(s, d, null, f);
    }),
    (at.flushSync = function (s) {
      var d = c.T,
        f = E.p;
      try {
        if (((c.T = null), (E.p = 2), s)) return s();
      } finally {
        ((c.T = d), (E.p = f), E.d.f());
      }
    }),
    (at.preconnect = function (s, d) {
      typeof s == 'string' &&
        (d
          ? ((d = d.crossOrigin),
            (d = typeof d == 'string' ? (d === 'use-credentials' ? d : '') : void 0))
          : (d = null),
        E.d.C(s, d));
    }),
    (at.prefetchDNS = function (s) {
      typeof s == 'string' && E.d.D(s);
    }),
    (at.preinit = function (s, d) {
      if (typeof s == 'string' && d && typeof d.as == 'string') {
        var f = d.as,
          g = m(f, d.crossOrigin),
          S = typeof d.integrity == 'string' ? d.integrity : void 0,
          r = typeof d.fetchPriority == 'string' ? d.fetchPriority : void 0;
        f === 'style'
          ? E.d.S(s, typeof d.precedence == 'string' ? d.precedence : void 0, {
              crossOrigin: g,
              integrity: S,
              fetchPriority: r,
            })
          : f === 'script' &&
            E.d.X(s, {
              crossOrigin: g,
              integrity: S,
              fetchPriority: r,
              nonce: typeof d.nonce == 'string' ? d.nonce : void 0,
            });
      }
    }),
    (at.preinitModule = function (s, d) {
      if (typeof s == 'string')
        if (typeof d == 'object' && d !== null) {
          if (d.as == null || d.as === 'script') {
            var f = m(d.as, d.crossOrigin);
            E.d.M(s, {
              crossOrigin: f,
              integrity: typeof d.integrity == 'string' ? d.integrity : void 0,
              nonce: typeof d.nonce == 'string' ? d.nonce : void 0,
            });
          }
        } else d == null && E.d.M(s);
    }),
    (at.preload = function (s, d) {
      if (typeof s == 'string' && typeof d == 'object' && d !== null && typeof d.as == 'string') {
        var f = d.as,
          g = m(f, d.crossOrigin);
        E.d.L(s, f, {
          crossOrigin: g,
          integrity: typeof d.integrity == 'string' ? d.integrity : void 0,
          nonce: typeof d.nonce == 'string' ? d.nonce : void 0,
          type: typeof d.type == 'string' ? d.type : void 0,
          fetchPriority: typeof d.fetchPriority == 'string' ? d.fetchPriority : void 0,
          referrerPolicy: typeof d.referrerPolicy == 'string' ? d.referrerPolicy : void 0,
          imageSrcSet: typeof d.imageSrcSet == 'string' ? d.imageSrcSet : void 0,
          imageSizes: typeof d.imageSizes == 'string' ? d.imageSizes : void 0,
          media: typeof d.media == 'string' ? d.media : void 0,
        });
      }
    }),
    (at.preloadModule = function (s, d) {
      if (typeof s == 'string')
        if (d) {
          var f = m(d.as, d.crossOrigin);
          E.d.m(s, {
            as: typeof d.as == 'string' && d.as !== 'script' ? d.as : void 0,
            crossOrigin: f,
            integrity: typeof d.integrity == 'string' ? d.integrity : void 0,
          });
        } else E.d.m(s);
    }),
    (at.requestFormReset = function (s) {
      E.d.r(s);
    }),
    (at.unstable_batchedUpdates = function (s, d) {
      return s(d);
    }),
    (at.useFormState = function (s, d, f) {
      return c.H.useFormState(s, d, f);
    }),
    (at.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (at.version = '19.2.5'),
    at
  );
}
var Am;
function _0() {
  if (Am) return Is.exports;
  Am = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (b) {
        console.error(b);
      }
  }
  return (o(), (Is.exports = N0()), Is.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cm;
function w0() {
  if (Cm) return $n;
  Cm = 1;
  var o = B0(),
    b = ff(),
    M = _0();
  function E(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) t += '&args[]=' + encodeURIComponent(arguments[l]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function v(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function i(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function c(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function s(e) {
    if (i(e) !== e) throw Error(E(188));
  }
  function d(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = i(e)), t === null)) throw Error(E(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return (s(n), e);
          if (u === a) return (s(n), t);
          u = u.sibling;
        }
        throw Error(E(188));
      }
      if (l.return !== a.return) ((l = n), (a = u));
      else {
        for (var p = !1, A = n.child; A; ) {
          if (A === l) {
            ((p = !0), (l = n), (a = u));
            break;
          }
          if (A === a) {
            ((p = !0), (a = n), (l = u));
            break;
          }
          A = A.sibling;
        }
        if (!p) {
          for (A = u.child; A; ) {
            if (A === l) {
              ((p = !0), (l = u), (a = n));
              break;
            }
            if (A === a) {
              ((p = !0), (a = u), (l = n));
              break;
            }
            A = A.sibling;
          }
          if (!p) throw Error(E(189));
        }
      }
      if (l.alternate !== a) throw Error(E(190));
    }
    if (l.tag !== 3) throw Error(E(188));
    return l.stateNode.current === l ? e : t;
  }
  function f(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = f(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign,
    S = Symbol.for('react.element'),
    r = Symbol.for('react.transitional.element'),
    y = Symbol.for('react.portal'),
    h = Symbol.for('react.fragment'),
    x = Symbol.for('react.strict_mode'),
    C = Symbol.for('react.profiler'),
    O = Symbol.for('react.consumer'),
    B = Symbol.for('react.context'),
    L = Symbol.for('react.forward_ref'),
    T = Symbol.for('react.suspense'),
    z = Symbol.for('react.suspense_list'),
    D = Symbol.for('react.memo'),
    R = Symbol.for('react.lazy'),
    _ = Symbol.for('react.activity'),
    U = Symbol.for('react.memo_cache_sentinel'),
    Y = Symbol.iterator;
  function N(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (Y && e[Y]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var J = Symbol.for('react.client.reference');
  function I(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === J ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case h:
        return 'Fragment';
      case C:
        return 'Profiler';
      case x:
        return 'StrictMode';
      case T:
        return 'Suspense';
      case z:
        return 'SuspenseList';
      case _:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case y:
          return 'Portal';
        case B:
          return e.displayName || 'Context';
        case O:
          return (e._context.displayName || 'Context') + '.Consumer';
        case L:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case D:
          return ((t = e.displayName || null), t !== null ? t : I(e.type) || 'Memo');
        case R:
          ((t = e._payload), (e = e._init));
          try {
            return I(e(t));
          } catch {}
      }
    return null;
  }
  var k = Array.isArray,
    G = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    te = { pending: !1, data: null, method: null, action: null },
    ne = [],
    fe = -1;
  function H(e) {
    return { current: e };
  }
  function $(e) {
    0 > fe || ((e.current = ne[fe]), (ne[fe] = null), fe--);
  }
  function le(e, t) {
    (fe++, (ne[fe] = e.current), (e.current = t));
  }
  var ie = H(null),
    ce = H(null),
    ue = H(null),
    ve = H(null);
  function Te(e, t) {
    switch ((le(ue, t), le(ce, e), le(ie, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Gd(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = Gd(t)), (e = Vd(t, e)));
        else
          switch (e) {
            case 'svg':
              e = 1;
              break;
            case 'math':
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ($(ie), le(ie, e));
  }
  function Be() {
    ($(ie), $(ce), $(ue));
  }
  function tt(e) {
    e.memoizedState !== null && le(ve, e);
    var t = ie.current,
      l = Vd(t, e.type);
    t !== l && (le(ce, e), le(ie, l));
  }
  function nt(e) {
    (ce.current === e && ($(ie), $(ce)), ve.current === e && ($(ve), (Qn._currentValue = te)));
  }
  var Je, ni;
  function Qt(e) {
    if (Je === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((Je = (t && t[1]) || ''),
          (ni =
            -1 <
            l.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < l.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return (
      `
` +
      Je +
      e +
      ni
    );
  }
  var en = !1;
  function ra(e, t) {
    if (!e || en) return '';
    en = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var ee = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(ee.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(ee, []);
                } catch (F) {
                  var K = F;
                }
                Reflect.construct(e, [], ee);
              } else {
                try {
                  ee.call();
                } catch (F) {
                  K = F;
                }
                e.call(ee.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (F) {
                K = F;
              }
              (ee = e()) && typeof ee.catch == 'function' && ee.catch(function () {});
            }
          } catch (F) {
            if (F && K && typeof F.stack == 'string') return [F.stack, K.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name');
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var u = a.DetermineComponentFrameRoot(),
        p = u[0],
        A = u[1];
      if (p && A) {
        var w = p.split(`
`),
          Q = A.split(`
`);
        for (n = a = 0; a < w.length && !w[a].includes('DetermineComponentFrameRoot'); ) a++;
        for (; n < Q.length && !Q[n].includes('DetermineComponentFrameRoot'); ) n++;
        if (a === w.length || n === Q.length)
          for (a = w.length - 1, n = Q.length - 1; 1 <= a && 0 <= n && w[a] !== Q[n]; ) n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (w[a] !== Q[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || w[a] !== Q[n])) {
                  var W =
                    `
` + w[a].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      W.includes('<anonymous>') &&
                      (W = W.replace('<anonymous>', e.displayName)),
                    W
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((en = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : '') ? Qt(l) : '';
  }
  function ii(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Qt(e.type);
      case 16:
        return Qt('Lazy');
      case 13:
        return e.child !== t && t !== null ? Qt('Suspense Fallback') : Qt('Suspense');
      case 19:
        return Qt('SuspenseList');
      case 0:
      case 15:
        return ra(e.type, !1);
      case 11:
        return ra(e.type.render, !1);
      case 1:
        return ra(e.type, !0);
      case 31:
        return Qt('Activity');
      default:
        return '';
    }
  }
  function sa(e) {
    try {
      var t = '',
        l = null;
      do ((t += ii(e, l)), (l = e), (e = e.return));
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var mt = Object.prototype.hasOwnProperty,
    fa = o.unstable_scheduleCallback,
    Yl = o.unstable_cancelCallback,
    ui = o.unstable_shouldYield,
    ri = o.unstable_requestPaint,
    lt = o.unstable_now,
    si = o.unstable_getCurrentPriorityLevel,
    jl = o.unstable_ImmediatePriority,
    fi = o.unstable_UserBlockingPriority,
    oa = o.unstable_NormalPriority,
    ca = o.unstable_LowPriority,
    Gl = o.unstable_IdlePriority,
    fv = o.log,
    ov = o.unstable_setDisableYieldValue,
    tn = null,
    vt = null;
  function ml(e) {
    if ((typeof fv == 'function' && ov(e), vt && typeof vt.setStrictMode == 'function'))
      try {
        vt.setStrictMode(tn, e);
      } catch {}
  }
  var ht = Math.clz32 ? Math.clz32 : mv,
    cv = Math.log,
    dv = Math.LN2;
  function mv(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((cv(e) / dv) | 0)) | 0);
  }
  var oi = 256,
    ci = 262144,
    di = 4194304;
  function Vl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function mi(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = e.suspendedLanes,
      p = e.pingedLanes;
    e = e.warmLanes;
    var A = a & 134217727;
    return (
      A !== 0
        ? ((a = A & ~u),
          a !== 0
            ? (n = Vl(a))
            : ((p &= A), p !== 0 ? (n = Vl(p)) : l || ((l = A & ~e), l !== 0 && (n = Vl(l)))))
        : ((A = a & ~u),
          A !== 0
            ? (n = Vl(A))
            : p !== 0
              ? (n = Vl(p))
              : l || ((l = a & ~e), l !== 0 && (n = Vl(l)))),
      n === 0
        ? 0
        : t !== 0 &&
            t !== n &&
            (t & u) === 0 &&
            ((u = n & -n), (l = t & -t), u >= l || (u === 32 && (l & 4194048) !== 0))
          ? t
          : n
    );
  }
  function ln(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function vv(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function xf() {
    var e = di;
    return ((di <<= 1), (di & 62914560) === 0 && (di = 4194304), e);
  }
  function Hu(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function an(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function hv(e, t, l, a, n, u) {
    var p = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var A = e.entanglements,
      w = e.expirationTimes,
      Q = e.hiddenUpdates;
    for (l = p & ~l; 0 < l; ) {
      var W = 31 - ht(l),
        ee = 1 << W;
      ((A[W] = 0), (w[W] = -1));
      var K = Q[W];
      if (K !== null)
        for (Q[W] = null, W = 0; W < K.length; W++) {
          var F = K[W];
          F !== null && (F.lane &= -536870913);
        }
      l &= ~ee;
    }
    (a !== 0 && Ef(e, a, 0),
      u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(p & ~t)));
  }
  function Ef(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - ht(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function Tf(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - ht(l),
        n = 1 << a;
      ((n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n));
    }
  }
  function bf(e, t) {
    var l = t & -t;
    return ((l = (l & 42) !== 0 ? 1 : Lu(l)), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l);
  }
  function Lu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Yu(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function Mf() {
    var e = Z.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : om(e.type));
  }
  function Af(e, t) {
    var l = Z.p;
    try {
      return ((Z.p = e), t());
    } finally {
      Z.p = l;
    }
  }
  var vl = Math.random().toString(36).slice(2),
    We = '__reactFiber$' + vl,
    ut = '__reactProps$' + vl,
    da = '__reactContainer$' + vl,
    ju = '__reactEvents$' + vl,
    gv = '__reactListeners$' + vl,
    yv = '__reactHandles$' + vl,
    Cf = '__reactResources$' + vl,
    nn = '__reactMarker$' + vl;
  function Gu(e) {
    (delete e[We], delete e[ut], delete e[ju], delete e[gv], delete e[yv]);
  }
  function ma(e) {
    var t = e[We];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[da] || l[We])) {
        if (((l = t.alternate), t.child !== null || (l !== null && l.child !== null)))
          for (e = Fd(e); e !== null; ) {
            if ((l = e[We])) return l;
            e = Fd(e);
          }
        return t;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function va(e) {
    if ((e = e[We] || e[da])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function un(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(E(33));
  }
  function ha(e) {
    var t = e[Cf];
    return (t || (t = e[Cf] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function Fe(e) {
    e[nn] = !0;
  }
  var Rf = new Set(),
    zf = {};
  function ql(e, t) {
    (ga(e, t), ga(e + 'Capture', t));
  }
  function ga(e, t) {
    for (zf[e] = t, e = 0; e < t.length; e++) Rf.add(t[e]);
  }
  var pv = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Df = {},
    Of = {};
  function Sv(e) {
    return mt.call(Of, e)
      ? !0
      : mt.call(Df, e)
        ? !1
        : pv.test(e)
          ? (Of[e] = !0)
          : ((Df[e] = !0), !1);
  }
  function vi(e, t, l) {
    if (Sv(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var a = t.toLowerCase().slice(0, 5);
            if (a !== 'data-' && a !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + l);
      }
  }
  function hi(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + l);
    }
  }
  function Zt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, '' + a);
    }
  }
  function bt(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Bf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function xv(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < 'u' &&
      typeof a.get == 'function' &&
      typeof a.set == 'function'
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (p) {
            ((l = '' + p), u.call(this, p));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (p) {
            l = '' + p;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Vu(e) {
    if (!e._valueTracker) {
      var t = Bf(e) ? 'checked' : 'value';
      e._valueTracker = xv(e, t, '' + e[t]);
    }
  }
  function Uf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = '';
    return (
      e && (a = Bf(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function gi(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ev = /[\n"\\]/g;
  function Mt(e) {
    return e.replace(Ev, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function qu(e, t, l, a, n, u, p, A) {
    ((e.name = ''),
      p != null && typeof p != 'function' && typeof p != 'symbol' && typeof p != 'boolean'
        ? (e.type = p)
        : e.removeAttribute('type'),
      t != null
        ? p === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + bt(t))
          : e.value !== '' + bt(t) && (e.value = '' + bt(t))
        : (p !== 'submit' && p !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Xu(e, p, bt(t))
        : l != null
          ? Xu(e, p, bt(l))
          : a != null && e.removeAttribute('value'),
      n == null && u != null && (e.defaultChecked = !!u),
      n != null && (e.checked = n && typeof n != 'function' && typeof n != 'symbol'),
      A != null && typeof A != 'function' && typeof A != 'symbol' && typeof A != 'boolean'
        ? (e.name = '' + bt(A))
        : e.removeAttribute('name'));
  }
  function Nf(e, t, l, a, n, u, p, A) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) {
        Vu(e);
        return;
      }
      ((l = l != null ? '' + bt(l) : ''),
        (t = t != null ? '' + bt(t) : l),
        A || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? n),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (e.checked = A ? e.checked : !!a),
      (e.defaultChecked = !!a),
      p != null &&
        typeof p != 'function' &&
        typeof p != 'symbol' &&
        typeof p != 'boolean' &&
        (e.name = p),
      Vu(e));
  }
  function Xu(e, t, l) {
    (t === 'number' && gi(e.ownerDocument) === e) ||
      e.defaultValue === '' + l ||
      (e.defaultValue = '' + l);
  }
  function ya(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t['$' + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        ((n = t.hasOwnProperty('$' + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0));
    } else {
      for (l = '' + bt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          ((e[n].selected = !0), a && (e[n].defaultSelected = !0));
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function _f(e, t, l) {
    if (t != null && ((t = '' + bt(t)), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? '' + bt(l) : '';
  }
  function wf(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(E(92));
        if (k(a)) {
          if (1 < a.length) throw Error(E(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ''), (t = l));
    }
    ((l = bt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== '' && a !== null && (e.value = a),
      Vu(e));
  }
  function pa(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Tv = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function Hf(e, t, l) {
    var a = t.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : a
        ? e.setProperty(t, l)
        : typeof l != 'number' || l === 0 || Tv.has(t)
          ? t === 'float'
            ? (e.cssFloat = l)
            : (e[t] = ('' + l).trim())
          : (e[t] = l + 'px');
  }
  function Lf(e, t, l) {
    if (t != null && typeof t != 'object') throw Error(E(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0
            ? e.setProperty(a, '')
            : a === 'float'
              ? (e.cssFloat = '')
              : (e[a] = ''));
      for (var n in t) ((a = t[n]), t.hasOwnProperty(n) && l[n] !== a && Hf(e, n, a));
    } else for (var u in t) t.hasOwnProperty(u) && Hf(e, u, t[u]);
  }
  function Qu(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var bv = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    Mv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yi(e) {
    return Mv.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Kt() {}
  var Zu = null;
  function Ku(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Sa = null,
    xa = null;
  function Yf(e) {
    var t = va(e);
    if (t && (e = t.stateNode)) {
      var l = e[ut] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (qu(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (t = l.name),
            l.type === 'radio' && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll('input[name="' + Mt('' + t) + '"][type="radio"]'), t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[ut] || null;
                if (!n) throw Error(E(90));
                qu(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < l.length; t++) ((a = l[t]), a.form === e.form && Uf(a));
          }
          break e;
        case 'textarea':
          _f(e, l.value, l.defaultValue);
          break e;
        case 'select':
          ((t = l.value), t != null && ya(e, !!l.multiple, t, !1));
      }
    }
  }
  var Ju = !1;
  function jf(e, t, l) {
    if (Ju) return e(t, l);
    Ju = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Ju = !1),
        (Sa !== null || xa !== null) &&
          (nu(), Sa && ((t = Sa), (e = xa), (xa = Sa = null), Yf(t), e)))
      )
        for (t = 0; t < e.length; t++) Yf(e[t]);
    }
  }
  function rn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[ut] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != 'function') throw Error(E(231, t, typeof l));
    return l;
  }
  var Jt = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Fu = !1;
  if (Jt)
    try {
      var sn = {};
      (Object.defineProperty(sn, 'passive', {
        get: function () {
          Fu = !0;
        },
      }),
        window.addEventListener('test', sn, sn),
        window.removeEventListener('test', sn, sn));
    } catch {
      Fu = !1;
    }
  var hl = null,
    $u = null,
    pi = null;
  function Gf() {
    if (pi) return pi;
    var e,
      t = $u,
      l = t.length,
      a,
      n = 'value' in hl ? hl.value : hl.textContent,
      u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var p = l - e;
    for (a = 1; a <= p && t[l - a] === n[u - a]; a++);
    return (pi = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function Si(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function xi() {
    return !0;
  }
  function Vf() {
    return !1;
  }
  function rt(e) {
    function t(l, a, n, u, p) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = p),
        (this.currentTarget = null));
      for (var A in e) e.hasOwnProperty(A) && ((l = e[A]), (this[A] = l ? l(u) : u[A]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? xi
          : Vf),
        (this.isPropagationStopped = Vf),
        this
      );
    }
    return (
      g(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = xi));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = xi));
        },
        persist: function () {},
        isPersistent: xi,
      }),
      t
    );
  }
  var Xl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ei = rt(Xl),
    fn = g({}, Xl, { view: 0, detail: 0 }),
    Av = rt(fn),
    Wu,
    ku,
    on,
    Ti = g({}, fn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Iu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== on &&
              (on && e.type === 'mousemove'
                ? ((Wu = e.screenX - on.screenX), (ku = e.screenY - on.screenY))
                : (ku = Wu = 0),
              (on = e)),
            Wu);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : ku;
      },
    }),
    qf = rt(Ti),
    Cv = g({}, Ti, { dataTransfer: 0 }),
    Rv = rt(Cv),
    zv = g({}, fn, { relatedTarget: 0 }),
    Pu = rt(zv),
    Dv = g({}, Xl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ov = rt(Dv),
    Bv = g({}, Xl, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Uv = rt(Bv),
    Nv = g({}, Xl, { data: 0 }),
    Xf = rt(Nv),
    _v = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    wv = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Hv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Lv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Hv[e]) ? !!t[e] : !1;
  }
  function Iu() {
    return Lv;
  }
  var Yv = g({}, fn, {
      key: function (e) {
        if (e.key) {
          var t = _v[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Si(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? wv[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Iu,
      charCode: function (e) {
        return e.type === 'keypress' ? Si(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Si(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    jv = rt(Yv),
    Gv = g({}, Ti, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Qf = rt(Gv),
    Vv = g({}, fn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Iu,
    }),
    qv = rt(Vv),
    Xv = g({}, Xl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qv = rt(Xv),
    Zv = g({}, Ti, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Kv = rt(Zv),
    Jv = g({}, Xl, { newState: 0, oldState: 0 }),
    Fv = rt(Jv),
    $v = [9, 13, 27, 32],
    er = Jt && 'CompositionEvent' in window,
    cn = null;
  Jt && 'documentMode' in document && (cn = document.documentMode);
  var Wv = Jt && 'TextEvent' in window && !cn,
    Zf = Jt && (!er || (cn && 8 < cn && 11 >= cn)),
    Kf = ' ',
    Jf = !1;
  function Ff(e, t) {
    switch (e) {
      case 'keyup':
        return $v.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function $f(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Ea = !1;
  function kv(e, t) {
    switch (e) {
      case 'compositionend':
        return $f(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Jf = !0), Kf);
      case 'textInput':
        return ((e = t.data), e === Kf && Jf ? null : e);
      default:
        return null;
    }
  }
  function Pv(e, t) {
    if (Ea)
      return e === 'compositionend' || (!er && Ff(e, t))
        ? ((e = Gf()), (pi = $u = hl = null), (Ea = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Zf && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Iv = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Wf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Iv[e.type] : t === 'textarea';
  }
  function kf(e, t, l, a) {
    (Sa ? (xa ? xa.push(a) : (xa = [a])) : (Sa = a),
      (t = cu(t, 'onChange')),
      0 < t.length &&
        ((l = new Ei('onChange', 'change', null, l, a)), e.push({ event: l, listeners: t })));
  }
  var dn = null,
    mn = null;
  function eh(e) {
    _d(e, 0);
  }
  function bi(e) {
    var t = un(e);
    if (Uf(t)) return e;
  }
  function Pf(e, t) {
    if (e === 'change') return t;
  }
  var If = !1;
  if (Jt) {
    var tr;
    if (Jt) {
      var lr = 'oninput' in document;
      if (!lr) {
        var eo = document.createElement('div');
        (eo.setAttribute('oninput', 'return;'), (lr = typeof eo.oninput == 'function'));
      }
      tr = lr;
    } else tr = !1;
    If = tr && (!document.documentMode || 9 < document.documentMode);
  }
  function to() {
    dn && (dn.detachEvent('onpropertychange', lo), (mn = dn = null));
  }
  function lo(e) {
    if (e.propertyName === 'value' && bi(mn)) {
      var t = [];
      (kf(t, mn, e, Ku(e)), jf(eh, t));
    }
  }
  function th(e, t, l) {
    e === 'focusin'
      ? (to(), (dn = t), (mn = l), dn.attachEvent('onpropertychange', lo))
      : e === 'focusout' && to();
  }
  function lh(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return bi(mn);
  }
  function ah(e, t) {
    if (e === 'click') return bi(t);
  }
  function nh(e, t) {
    if (e === 'input' || e === 'change') return bi(t);
  }
  function ih(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var gt = typeof Object.is == 'function' ? Object.is : ih;
  function vn(e, t) {
    if (gt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!mt.call(t, n) || !gt(e[n], t[n])) return !1;
    }
    return !0;
  }
  function ao(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function no(e, t) {
    var l = ao(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t)) return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = ao(l);
    }
  }
  function io(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? io(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function uo(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = gi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = gi(e.document);
    }
    return t;
  }
  function ar(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var uh = Jt && 'documentMode' in document && 11 >= document.documentMode,
    Ta = null,
    nr = null,
    hn = null,
    ir = !1;
  function ro(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ir ||
      Ta == null ||
      Ta !== gi(a) ||
      ((a = Ta),
      'selectionStart' in a && ar(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (hn && vn(hn, a)) ||
        ((hn = a),
        (a = cu(nr, 'onSelect')),
        0 < a.length &&
          ((t = new Ei('onSelect', 'select', null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = Ta))));
  }
  function Ql(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l['Webkit' + e] = 'webkit' + t),
      (l['Moz' + e] = 'moz' + t),
      l
    );
  }
  var ba = {
      animationend: Ql('Animation', 'AnimationEnd'),
      animationiteration: Ql('Animation', 'AnimationIteration'),
      animationstart: Ql('Animation', 'AnimationStart'),
      transitionrun: Ql('Transition', 'TransitionRun'),
      transitionstart: Ql('Transition', 'TransitionStart'),
      transitioncancel: Ql('Transition', 'TransitionCancel'),
      transitionend: Ql('Transition', 'TransitionEnd'),
    },
    ur = {},
    so = {};
  Jt &&
    ((so = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ba.animationend.animation,
      delete ba.animationiteration.animation,
      delete ba.animationstart.animation),
    'TransitionEvent' in window || delete ba.transitionend.transition);
  function Zl(e) {
    if (ur[e]) return ur[e];
    if (!ba[e]) return e;
    var t = ba[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in so) return (ur[e] = t[l]);
    return e;
  }
  var fo = Zl('animationend'),
    oo = Zl('animationiteration'),
    co = Zl('animationstart'),
    rh = Zl('transitionrun'),
    sh = Zl('transitionstart'),
    fh = Zl('transitioncancel'),
    mo = Zl('transitionend'),
    vo = new Map(),
    rr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  rr.push('scrollEnd');
  function _t(e, t) {
    (vo.set(e, t), ql(t, [e]));
  }
  var Mi =
      typeof reportError == 'function'
        ? reportError
        : function (e) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var t = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == 'object' && e !== null && typeof e.message == 'string'
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', e);
              return;
            }
            console.error(e);
          },
    At = [],
    Ma = 0,
    sr = 0;
  function Ai() {
    for (var e = Ma, t = (sr = Ma = 0); t < e; ) {
      var l = At[t];
      At[t++] = null;
      var a = At[t];
      At[t++] = null;
      var n = At[t];
      At[t++] = null;
      var u = At[t];
      if (((At[t++] = null), a !== null && n !== null)) {
        var p = a.pending;
        (p === null ? (n.next = n) : ((n.next = p.next), (p.next = n)), (a.pending = n));
      }
      u !== 0 && ho(l, n, u);
    }
  }
  function Ci(e, t, l, a) {
    ((At[Ma++] = e),
      (At[Ma++] = t),
      (At[Ma++] = l),
      (At[Ma++] = a),
      (sr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function fr(e, t, l, a) {
    return (Ci(e, t, l, a), Ri(e));
  }
  function Kl(e, t) {
    return (Ci(e, null, null, t), Ri(e));
  }
  function ho(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      ((u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 && ((e = u.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3
      ? ((u = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - ht(l)),
          (e = u.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        u)
      : null;
  }
  function Ri(e) {
    if (50 < Ln) throw ((Ln = 0), (ps = null), Error(E(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Aa = {};
  function oh(e, t, l, a) {
    ((this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function yt(e, t, l, a) {
    return new oh(e, t, l, a);
  }
  function or(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Ft(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = yt(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function go(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function zi(e, t, l, a, n, u) {
    var p = 0;
    if (((a = e), typeof e == 'function')) or(e) && (p = 1);
    else if (typeof e == 'string')
      p = h0(e, l, ie.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case _:
          return ((e = yt(31, l, t, n)), (e.elementType = _), (e.lanes = u), e);
        case h:
          return Jl(l.children, n, u, t);
        case x:
          ((p = 8), (n |= 24));
          break;
        case C:
          return ((e = yt(12, l, t, n | 2)), (e.elementType = C), (e.lanes = u), e);
        case T:
          return ((e = yt(13, l, t, n)), (e.elementType = T), (e.lanes = u), e);
        case z:
          return ((e = yt(19, l, t, n)), (e.elementType = z), (e.lanes = u), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case B:
                p = 10;
                break e;
              case O:
                p = 9;
                break e;
              case L:
                p = 11;
                break e;
              case D:
                p = 14;
                break e;
              case R:
                ((p = 16), (a = null));
                break e;
            }
          ((p = 29), (l = Error(E(130, e === null ? 'null' : typeof e, ''))), (a = null));
      }
    return ((t = yt(p, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = u), t);
  }
  function Jl(e, t, l, a) {
    return ((e = yt(7, e, a, t)), (e.lanes = l), e);
  }
  function cr(e, t, l) {
    return ((e = yt(6, e, null, t)), (e.lanes = l), e);
  }
  function yo(e) {
    var t = yt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function dr(e, t, l) {
    return (
      (t = yt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var po = new WeakMap();
  function Ct(e, t) {
    if (typeof e == 'object' && e !== null) {
      var l = po.get(e);
      return l !== void 0 ? l : ((t = { value: e, source: t, stack: sa(t) }), po.set(e, t), t);
    }
    return { value: e, source: t, stack: sa(t) };
  }
  var Ca = [],
    Ra = 0,
    Di = null,
    gn = 0,
    Rt = [],
    zt = 0,
    gl = null,
    Yt = 1,
    jt = '';
  function $t(e, t) {
    ((Ca[Ra++] = gn), (Ca[Ra++] = Di), (Di = e), (gn = t));
  }
  function So(e, t, l) {
    ((Rt[zt++] = Yt), (Rt[zt++] = jt), (Rt[zt++] = gl), (gl = e));
    var a = Yt;
    e = jt;
    var n = 32 - ht(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var u = 32 - ht(t) + n;
    if (30 < u) {
      var p = n - (n % 5);
      ((u = (a & ((1 << p) - 1)).toString(32)),
        (a >>= p),
        (n -= p),
        (Yt = (1 << (32 - ht(t) + n)) | (l << n) | a),
        (jt = u + e));
    } else ((Yt = (1 << u) | (l << n) | a), (jt = e));
  }
  function mr(e) {
    e.return !== null && ($t(e, 1), So(e, 1, 0));
  }
  function vr(e) {
    for (; e === Di; ) ((Di = Ca[--Ra]), (Ca[Ra] = null), (gn = Ca[--Ra]), (Ca[Ra] = null));
    for (; e === gl; )
      ((gl = Rt[--zt]),
        (Rt[zt] = null),
        (jt = Rt[--zt]),
        (Rt[zt] = null),
        (Yt = Rt[--zt]),
        (Rt[zt] = null));
  }
  function xo(e, t) {
    ((Rt[zt++] = Yt), (Rt[zt++] = jt), (Rt[zt++] = gl), (Yt = t.id), (jt = t.overflow), (gl = e));
  }
  var ke = null,
    Ne = null,
    Ee = !1,
    yl = null,
    Dt = !1,
    hr = Error(E(519));
  function pl(e) {
    var t = Error(
      E(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    );
    throw (yn(Ct(t, e)), hr);
  }
  function Eo(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[We] = e), (t[ut] = a), l)) {
      case 'dialog':
        (pe('cancel', t), pe('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        pe('load', t);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < jn.length; l++) pe(jn[l], t);
        break;
      case 'source':
        pe('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (pe('error', t), pe('load', t));
        break;
      case 'details':
        pe('toggle', t);
        break;
      case 'input':
        (pe('invalid', t),
          Nf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
        break;
      case 'select':
        pe('invalid', t);
        break;
      case 'textarea':
        (pe('invalid', t), wf(t, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
      t.textContent === '' + l ||
      a.suppressHydrationWarning === !0 ||
      Yd(t.textContent, l)
        ? (a.popover != null && (pe('beforetoggle', t), pe('toggle', t)),
          a.onScroll != null && pe('scroll', t),
          a.onScrollEnd != null && pe('scrollend', t),
          a.onClick != null && (t.onclick = Kt),
          (t = !0))
        : (t = !1),
      t || pl(e, !0));
  }
  function To(e) {
    for (ke = e.return; ke; )
      switch (ke.tag) {
        case 5:
        case 31:
        case 13:
          Dt = !1;
          return;
        case 27:
        case 3:
          Dt = !0;
          return;
        default:
          ke = ke.return;
      }
  }
  function za(e) {
    if (e !== ke) return !1;
    if (!Ee) return (To(e), (Ee = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type), (l = !(l !== 'form' && l !== 'button') || Ns(e.type, e.memoizedProps))),
        (l = !l)),
      l && Ne && pl(e),
      To(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(E(317));
      Ne = Jd(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(E(317));
      Ne = Jd(e);
    } else
      t === 27
        ? ((t = Ne), Ul(e.type) ? ((e = Ys), (Ys = null), (Ne = e)) : (Ne = t))
        : (Ne = ke ? Bt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Fl() {
    ((Ne = ke = null), (Ee = !1));
  }
  function gr() {
    var e = yl;
    return (e !== null && (ct === null ? (ct = e) : ct.push.apply(ct, e), (yl = null)), e);
  }
  function yn(e) {
    yl === null ? (yl = [e]) : yl.push(e);
  }
  var yr = H(null),
    $l = null,
    Wt = null;
  function Sl(e, t, l) {
    (le(yr, t._currentValue), (t._currentValue = l));
  }
  function kt(e) {
    ((e._currentValue = yr.current), $(yr));
  }
  function pr(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Sr(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var p = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var A = u;
          u = n;
          for (var w = 0; w < t.length; w++)
            if (A.context === t[w]) {
              ((u.lanes |= l),
                (A = u.alternate),
                A !== null && (A.lanes |= l),
                pr(u.return, l, e),
                a || (p = null));
              break e;
            }
          u = A.next;
        }
      } else if (n.tag === 18) {
        if (((p = n.return), p === null)) throw Error(E(341));
        ((p.lanes |= l), (u = p.alternate), u !== null && (u.lanes |= l), pr(p, l, e), (p = null));
      } else p = n.child;
      if (p !== null) p.return = n;
      else
        for (p = n; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (((n = p.sibling), n !== null)) {
            ((n.return = p.return), (p = n));
            break;
          }
          p = p.return;
        }
      n = p;
    }
  }
  function Da(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var p = n.alternate;
        if (p === null) throw Error(E(387));
        if (((p = p.memoizedProps), p !== null)) {
          var A = n.type;
          gt(n.pendingProps.value, p.value) || (e !== null ? e.push(A) : (e = [A]));
        }
      } else if (n === ve.current) {
        if (((p = n.alternate), p === null)) throw Error(E(387));
        p.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Qn) : (e = [Qn]));
      }
      n = n.return;
    }
    (e !== null && Sr(t, e, l, a), (t.flags |= 262144));
  }
  function Oi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!gt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Wl(e) {
    (($l = e), (Wt = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function Pe(e) {
    return bo($l, e);
  }
  function Bi(e, t) {
    return ($l === null && Wl(e), bo(e, t));
  }
  function bo(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Wt === null)) {
      if (e === null) throw Error(E(308));
      ((Wt = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else Wt = Wt.next = t;
    return l;
  }
  var ch =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                }));
            };
          },
    dh = o.unstable_scheduleCallback,
    mh = o.unstable_NormalPriority,
    qe = {
      $$typeof: B,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function xr() {
    return { controller: new ch(), data: new Map(), refCount: 0 };
  }
  function pn(e) {
    (e.refCount--,
      e.refCount === 0 &&
        dh(mh, function () {
          e.controller.abort();
        }));
  }
  var Sn = null,
    Er = 0,
    Oa = 0,
    Ba = null;
  function vh(e, t) {
    if (Sn === null) {
      var l = (Sn = []);
      ((Er = 0),
        (Oa = Ms()),
        (Ba = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (Er++, t.then(Mo, Mo), t);
  }
  function Mo() {
    if (--Er === 0 && Sn !== null) {
      Ba !== null && (Ba.status = 'fulfilled');
      var e = Sn;
      ((Sn = null), (Oa = 0), (Ba = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function hh(e, t) {
    var l = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = 'fulfilled'), (a.value = t));
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = 'rejected', a.reason = n, n = 0; n < l.length; n++) (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var Ao = G.S;
  G.S = function (e, t) {
    ((sd = lt()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && vh(e, t),
      Ao !== null && Ao(e, t));
  };
  var kl = H(null);
  function Tr() {
    var e = kl.current;
    return e !== null ? e : Ue.pooledCache;
  }
  function Ui(e, t) {
    t === null ? le(kl, kl.current) : le(kl, t.pool);
  }
  function Co() {
    var e = Tr();
    return e === null ? null : { parent: qe._currentValue, pool: e };
  }
  var Ua = Error(E(460)),
    br = Error(E(474)),
    Ni = Error(E(542)),
    _i = { then: function () {} };
  function Ro(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function zo(e, t, l) {
    switch (
      ((l = e[l]), l === void 0 ? e.push(t) : l !== t && (t.then(Kt, Kt), (t = l)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Oo(e), e);
      default:
        if (typeof t.status == 'string') t.then(Kt, Kt);
        else {
          if (((e = Ue), e !== null && 100 < e.shellSuspendCounter)) throw Error(E(482));
          ((e = t),
            (e.status = 'pending'),
            e.then(
              function (a) {
                if (t.status === 'pending') {
                  var n = t;
                  ((n.status = 'fulfilled'), (n.value = a));
                }
              },
              function (a) {
                if (t.status === 'pending') {
                  var n = t;
                  ((n.status = 'rejected'), (n.reason = a));
                }
              }
            ));
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), Oo(e), e);
        }
        throw ((Il = t), Ua);
    }
  }
  function Pl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == 'object' && typeof l.then == 'function' ? ((Il = l), Ua) : l;
    }
  }
  var Il = null;
  function Do() {
    if (Il === null) throw Error(E(459));
    var e = Il;
    return ((Il = null), e);
  }
  function Oo(e) {
    if (e === Ua || e === Ni) throw Error(E(483));
  }
  var Na = null,
    xn = 0;
  function wi(e) {
    var t = xn;
    return ((xn += 1), Na === null && (Na = []), zo(Na, e, t));
  }
  function En(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Hi(e, t) {
    throw t.$$typeof === S
      ? Error(E(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          E(
            31,
            e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e
          )
        ));
  }
  function Bo(e) {
    function t(V, j) {
      if (e) {
        var X = V.deletions;
        X === null ? ((V.deletions = [j]), (V.flags |= 16)) : X.push(j);
      }
    }
    function l(V, j) {
      if (!e) return null;
      for (; j !== null; ) (t(V, j), (j = j.sibling));
      return null;
    }
    function a(V) {
      for (var j = new Map(); V !== null; )
        (V.key !== null ? j.set(V.key, V) : j.set(V.index, V), (V = V.sibling));
      return j;
    }
    function n(V, j) {
      return ((V = Ft(V, j)), (V.index = 0), (V.sibling = null), V);
    }
    function u(V, j, X) {
      return (
        (V.index = X),
        e
          ? ((X = V.alternate),
            X !== null
              ? ((X = X.index), X < j ? ((V.flags |= 67108866), j) : X)
              : ((V.flags |= 67108866), j))
          : ((V.flags |= 1048576), j)
      );
    }
    function p(V) {
      return (e && V.alternate === null && (V.flags |= 67108866), V);
    }
    function A(V, j, X, P) {
      return j === null || j.tag !== 6
        ? ((j = cr(X, V.mode, P)), (j.return = V), j)
        : ((j = n(j, X)), (j.return = V), j);
    }
    function w(V, j, X, P) {
      var oe = X.type;
      return oe === h
        ? W(V, j, X.props.children, P, X.key)
        : j !== null &&
            (j.elementType === oe ||
              (typeof oe == 'object' && oe !== null && oe.$$typeof === R && Pl(oe) === j.type))
          ? ((j = n(j, X.props)), En(j, X), (j.return = V), j)
          : ((j = zi(X.type, X.key, X.props, null, V.mode, P)), En(j, X), (j.return = V), j);
    }
    function Q(V, j, X, P) {
      return j === null ||
        j.tag !== 4 ||
        j.stateNode.containerInfo !== X.containerInfo ||
        j.stateNode.implementation !== X.implementation
        ? ((j = dr(X, V.mode, P)), (j.return = V), j)
        : ((j = n(j, X.children || [])), (j.return = V), j);
    }
    function W(V, j, X, P, oe) {
      return j === null || j.tag !== 7
        ? ((j = Jl(X, V.mode, P, oe)), (j.return = V), j)
        : ((j = n(j, X)), (j.return = V), j);
    }
    function ee(V, j, X) {
      if ((typeof j == 'string' && j !== '') || typeof j == 'number' || typeof j == 'bigint')
        return ((j = cr('' + j, V.mode, X)), (j.return = V), j);
      if (typeof j == 'object' && j !== null) {
        switch (j.$$typeof) {
          case r:
            return ((X = zi(j.type, j.key, j.props, null, V.mode, X)), En(X, j), (X.return = V), X);
          case y:
            return ((j = dr(j, V.mode, X)), (j.return = V), j);
          case R:
            return ((j = Pl(j)), ee(V, j, X));
        }
        if (k(j) || N(j)) return ((j = Jl(j, V.mode, X, null)), (j.return = V), j);
        if (typeof j.then == 'function') return ee(V, wi(j), X);
        if (j.$$typeof === B) return ee(V, Bi(V, j), X);
        Hi(V, j);
      }
      return null;
    }
    function K(V, j, X, P) {
      var oe = j !== null ? j.key : null;
      if ((typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint')
        return oe !== null ? null : A(V, j, '' + X, P);
      if (typeof X == 'object' && X !== null) {
        switch (X.$$typeof) {
          case r:
            return X.key === oe ? w(V, j, X, P) : null;
          case y:
            return X.key === oe ? Q(V, j, X, P) : null;
          case R:
            return ((X = Pl(X)), K(V, j, X, P));
        }
        if (k(X) || N(X)) return oe !== null ? null : W(V, j, X, P, null);
        if (typeof X.then == 'function') return K(V, j, wi(X), P);
        if (X.$$typeof === B) return K(V, j, Bi(V, X), P);
        Hi(V, X);
      }
      return null;
    }
    function F(V, j, X, P, oe) {
      if ((typeof P == 'string' && P !== '') || typeof P == 'number' || typeof P == 'bigint')
        return ((V = V.get(X) || null), A(j, V, '' + P, oe));
      if (typeof P == 'object' && P !== null) {
        switch (P.$$typeof) {
          case r:
            return ((V = V.get(P.key === null ? X : P.key) || null), w(j, V, P, oe));
          case y:
            return ((V = V.get(P.key === null ? X : P.key) || null), Q(j, V, P, oe));
          case R:
            return ((P = Pl(P)), F(V, j, X, P, oe));
        }
        if (k(P) || N(P)) return ((V = V.get(X) || null), W(j, V, P, oe, null));
        if (typeof P.then == 'function') return F(V, j, X, wi(P), oe);
        if (P.$$typeof === B) return F(V, j, X, Bi(j, P), oe);
        Hi(j, P);
      }
      return null;
    }
    function re(V, j, X, P) {
      for (
        var oe = null, be = null, se = j, ge = (j = 0), xe = null;
        se !== null && ge < X.length;
        ge++
      ) {
        se.index > ge ? ((xe = se), (se = null)) : (xe = se.sibling);
        var Me = K(V, se, X[ge], P);
        if (Me === null) {
          se === null && (se = xe);
          break;
        }
        (e && se && Me.alternate === null && t(V, se),
          (j = u(Me, j, ge)),
          be === null ? (oe = Me) : (be.sibling = Me),
          (be = Me),
          (se = xe));
      }
      if (ge === X.length) return (l(V, se), Ee && $t(V, ge), oe);
      if (se === null) {
        for (; ge < X.length; ge++)
          ((se = ee(V, X[ge], P)),
            se !== null &&
              ((j = u(se, j, ge)), be === null ? (oe = se) : (be.sibling = se), (be = se)));
        return (Ee && $t(V, ge), oe);
      }
      for (se = a(se); ge < X.length; ge++)
        ((xe = F(se, V, ge, X[ge], P)),
          xe !== null &&
            (e && xe.alternate !== null && se.delete(xe.key === null ? ge : xe.key),
            (j = u(xe, j, ge)),
            be === null ? (oe = xe) : (be.sibling = xe),
            (be = xe)));
      return (
        e &&
          se.forEach(function (Ll) {
            return t(V, Ll);
          }),
        Ee && $t(V, ge),
        oe
      );
    }
    function de(V, j, X, P) {
      if (X == null) throw Error(E(151));
      for (
        var oe = null, be = null, se = j, ge = (j = 0), xe = null, Me = X.next();
        se !== null && !Me.done;
        ge++, Me = X.next()
      ) {
        se.index > ge ? ((xe = se), (se = null)) : (xe = se.sibling);
        var Ll = K(V, se, Me.value, P);
        if (Ll === null) {
          se === null && (se = xe);
          break;
        }
        (e && se && Ll.alternate === null && t(V, se),
          (j = u(Ll, j, ge)),
          be === null ? (oe = Ll) : (be.sibling = Ll),
          (be = Ll),
          (se = xe));
      }
      if (Me.done) return (l(V, se), Ee && $t(V, ge), oe);
      if (se === null) {
        for (; !Me.done; ge++, Me = X.next())
          ((Me = ee(V, Me.value, P)),
            Me !== null &&
              ((j = u(Me, j, ge)), be === null ? (oe = Me) : (be.sibling = Me), (be = Me)));
        return (Ee && $t(V, ge), oe);
      }
      for (se = a(se); !Me.done; ge++, Me = X.next())
        ((Me = F(se, V, ge, Me.value, P)),
          Me !== null &&
            (e && Me.alternate !== null && se.delete(Me.key === null ? ge : Me.key),
            (j = u(Me, j, ge)),
            be === null ? (oe = Me) : (be.sibling = Me),
            (be = Me)));
      return (
        e &&
          se.forEach(function (C0) {
            return t(V, C0);
          }),
        Ee && $t(V, ge),
        oe
      );
    }
    function Oe(V, j, X, P) {
      if (
        (typeof X == 'object' &&
          X !== null &&
          X.type === h &&
          X.key === null &&
          (X = X.props.children),
        typeof X == 'object' && X !== null)
      ) {
        switch (X.$$typeof) {
          case r:
            e: {
              for (var oe = X.key; j !== null; ) {
                if (j.key === oe) {
                  if (((oe = X.type), oe === h)) {
                    if (j.tag === 7) {
                      (l(V, j.sibling), (P = n(j, X.props.children)), (P.return = V), (V = P));
                      break e;
                    }
                  } else if (
                    j.elementType === oe ||
                    (typeof oe == 'object' && oe !== null && oe.$$typeof === R && Pl(oe) === j.type)
                  ) {
                    (l(V, j.sibling), (P = n(j, X.props)), En(P, X), (P.return = V), (V = P));
                    break e;
                  }
                  l(V, j);
                  break;
                } else t(V, j);
                j = j.sibling;
              }
              X.type === h
                ? ((P = Jl(X.props.children, V.mode, P, X.key)), (P.return = V), (V = P))
                : ((P = zi(X.type, X.key, X.props, null, V.mode, P)),
                  En(P, X),
                  (P.return = V),
                  (V = P));
            }
            return p(V);
          case y:
            e: {
              for (oe = X.key; j !== null; ) {
                if (j.key === oe)
                  if (
                    j.tag === 4 &&
                    j.stateNode.containerInfo === X.containerInfo &&
                    j.stateNode.implementation === X.implementation
                  ) {
                    (l(V, j.sibling), (P = n(j, X.children || [])), (P.return = V), (V = P));
                    break e;
                  } else {
                    l(V, j);
                    break;
                  }
                else t(V, j);
                j = j.sibling;
              }
              ((P = dr(X, V.mode, P)), (P.return = V), (V = P));
            }
            return p(V);
          case R:
            return ((X = Pl(X)), Oe(V, j, X, P));
        }
        if (k(X)) return re(V, j, X, P);
        if (N(X)) {
          if (((oe = N(X)), typeof oe != 'function')) throw Error(E(150));
          return ((X = oe.call(X)), de(V, j, X, P));
        }
        if (typeof X.then == 'function') return Oe(V, j, wi(X), P);
        if (X.$$typeof === B) return Oe(V, j, Bi(V, X), P);
        Hi(V, X);
      }
      return (typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint'
        ? ((X = '' + X),
          j !== null && j.tag === 6
            ? (l(V, j.sibling), (P = n(j, X)), (P.return = V), (V = P))
            : (l(V, j), (P = cr(X, V.mode, P)), (P.return = V), (V = P)),
          p(V))
        : l(V, j);
    }
    return function (V, j, X, P) {
      try {
        xn = 0;
        var oe = Oe(V, j, X, P);
        return ((Na = null), oe);
      } catch (se) {
        if (se === Ua || se === Ni) throw se;
        var be = yt(29, se, null, V.mode);
        return ((be.lanes = P), (be.return = V), be);
      } finally {
      }
    };
  }
  var ea = Bo(!0),
    Uo = Bo(!1),
    xl = !1;
  function Mr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ar(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function El(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Tl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Ae & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = Ri(e)),
        ho(e, null, l),
        t
      );
    }
    return (Ci(e, a, t, l), Ri(e));
  }
  function Tn(e, t, l) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Tf(e, l));
    }
  }
  function Cr(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var p = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
          (u === null ? (n = u = p) : (u = u.next = p), (l = l.next));
        } while (l !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t));
  }
  var Rr = !1;
  function bn() {
    if (Rr) {
      var e = Ba;
      if (e !== null) throw e;
    }
  }
  function Mn(e, t, l, a) {
    Rr = !1;
    var n = e.updateQueue;
    xl = !1;
    var u = n.firstBaseUpdate,
      p = n.lastBaseUpdate,
      A = n.shared.pending;
    if (A !== null) {
      n.shared.pending = null;
      var w = A,
        Q = w.next;
      ((w.next = null), p === null ? (u = Q) : (p.next = Q), (p = w));
      var W = e.alternate;
      W !== null &&
        ((W = W.updateQueue),
        (A = W.lastBaseUpdate),
        A !== p && (A === null ? (W.firstBaseUpdate = Q) : (A.next = Q), (W.lastBaseUpdate = w)));
    }
    if (u !== null) {
      var ee = n.baseState;
      ((p = 0), (W = Q = w = null), (A = u));
      do {
        var K = A.lane & -536870913,
          F = K !== A.lane;
        if (F ? (Se & K) === K : (a & K) === K) {
          (K !== 0 && K === Oa && (Rr = !0),
            W !== null &&
              (W = W.next =
                { lane: 0, tag: A.tag, payload: A.payload, callback: null, next: null }));
          e: {
            var re = e,
              de = A;
            K = t;
            var Oe = l;
            switch (de.tag) {
              case 1:
                if (((re = de.payload), typeof re == 'function')) {
                  ee = re.call(Oe, ee, K);
                  break e;
                }
                ee = re;
                break e;
              case 3:
                re.flags = (re.flags & -65537) | 128;
              case 0:
                if (
                  ((re = de.payload),
                  (K = typeof re == 'function' ? re.call(Oe, ee, K) : re),
                  K == null)
                )
                  break e;
                ee = g({}, ee, K);
                break e;
              case 2:
                xl = !0;
            }
          }
          ((K = A.callback),
            K !== null &&
              ((e.flags |= 64),
              F && (e.flags |= 8192),
              (F = n.callbacks),
              F === null ? (n.callbacks = [K]) : F.push(K)));
        } else
          ((F = { lane: K, tag: A.tag, payload: A.payload, callback: A.callback, next: null }),
            W === null ? ((Q = W = F), (w = ee)) : (W = W.next = F),
            (p |= K));
        if (((A = A.next), A === null)) {
          if (((A = n.shared.pending), A === null)) break;
          ((F = A),
            (A = F.next),
            (F.next = null),
            (n.lastBaseUpdate = F),
            (n.shared.pending = null));
        }
      } while (!0);
      (W === null && (w = ee),
        (n.baseState = w),
        (n.firstBaseUpdate = Q),
        (n.lastBaseUpdate = W),
        u === null && (n.shared.lanes = 0),
        (Rl |= p),
        (e.lanes = p),
        (e.memoizedState = ee));
    }
  }
  function No(e, t) {
    if (typeof e != 'function') throw Error(E(191, e));
    e.call(t);
  }
  function _o(e, t) {
    var l = e.callbacks;
    if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) No(l[e], t);
  }
  var _a = H(null),
    Li = H(0);
  function wo(e, t) {
    ((e = ul), le(Li, e), le(_a, t), (ul = e | t.baseLanes));
  }
  function zr() {
    (le(Li, ul), le(_a, _a.current));
  }
  function Dr() {
    ((ul = Li.current), $(_a), $(Li));
  }
  var pt = H(null),
    Ot = null;
  function bl(e) {
    var t = e.alternate;
    (le(Ge, Ge.current & 1),
      le(pt, e),
      Ot === null && (t === null || _a.current !== null || t.memoizedState !== null) && (Ot = e));
  }
  function Or(e) {
    (le(Ge, Ge.current), le(pt, e), Ot === null && (Ot = e));
  }
  function Ho(e) {
    e.tag === 22 ? (le(Ge, Ge.current), le(pt, e), Ot === null && (Ot = e)) : Ml();
  }
  function Ml() {
    (le(Ge, Ge.current), le(pt, pt.current));
  }
  function St(e) {
    ($(pt), Ot === e && (Ot = null), $(Ge));
  }
  var Ge = H(0);
  function Yi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || Hs(l) || Ls(l))) return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === 'forwards' ||
          t.memoizedProps.revealOrder === 'backwards' ||
          t.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
          t.memoizedProps.revealOrder === 'together')
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Pt = 0,
    he = null,
    ze = null,
    Xe = null,
    ji = !1,
    wa = !1,
    ta = !1,
    Gi = 0,
    An = 0,
    Ha = null,
    gh = 0;
  function Ye() {
    throw Error(E(321));
  }
  function Br(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++) if (!gt(e[l], t[l])) return !1;
    return !0;
  }
  function Ur(e, t, l, a, n, u) {
    return (
      (Pt = u),
      (he = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (G.H = e === null || e.memoizedState === null ? Sc : Jr),
      (ta = !1),
      (u = l(a, n)),
      (ta = !1),
      wa && (u = Yo(t, l, a, n)),
      Lo(e),
      u
    );
  }
  function Lo(e) {
    G.H = zn;
    var t = ze !== null && ze.next !== null;
    if (((Pt = 0), (Xe = ze = he = null), (ji = !1), (An = 0), (Ha = null), t)) throw Error(E(300));
    e === null || Qe || ((e = e.dependencies), e !== null && Oi(e) && (Qe = !0));
  }
  function Yo(e, t, l, a) {
    he = e;
    var n = 0;
    do {
      if ((wa && (Ha = null), (An = 0), (wa = !1), 25 <= n)) throw Error(E(301));
      if (((n += 1), (Xe = ze = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((G.H = xc), (u = t(l, a)));
    } while (wa);
    return u;
  }
  function yh() {
    var e = G.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? Cn(t) : t),
      (e = e.useState()[0]),
      (ze !== null ? ze.memoizedState : null) !== e && (he.flags |= 1024),
      t
    );
  }
  function Nr() {
    var e = Gi !== 0;
    return ((Gi = 0), e);
  }
  function _r(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function wr(e) {
    if (ji) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      ji = !1;
    }
    ((Pt = 0), (Xe = ze = he = null), (wa = !1), (An = Gi = 0), (Ha = null));
  }
  function it() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Xe === null ? (he.memoizedState = Xe = e) : (Xe = Xe.next = e), Xe);
  }
  function Ve() {
    if (ze === null) {
      var e = he.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ze.next;
    var t = Xe === null ? he.memoizedState : Xe.next;
    if (t !== null) ((Xe = t), (ze = e));
    else {
      if (e === null) throw he.alternate === null ? Error(E(467)) : Error(E(310));
      ((ze = e),
        (e = {
          memoizedState: ze.memoizedState,
          baseState: ze.baseState,
          baseQueue: ze.baseQueue,
          queue: ze.queue,
          next: null,
        }),
        Xe === null ? (he.memoizedState = Xe = e) : (Xe = Xe.next = e));
    }
    return Xe;
  }
  function Vi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Cn(e) {
    var t = An;
    return (
      (An += 1),
      Ha === null && (Ha = []),
      (e = zo(Ha, e, t)),
      (t = he),
      (Xe === null ? t.memoizedState : Xe.next) === null &&
        ((t = t.alternate), (G.H = t === null || t.memoizedState === null ? Sc : Jr)),
      e
    );
  }
  function qi(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return Cn(e);
      if (e.$$typeof === B) return Pe(e);
    }
    throw Error(E(438, String(e)));
  }
  function Hr(e) {
    var t = null,
      l = he.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = he.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = Vi()), (he.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = U;
    return (t.index++, l);
  }
  function It(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Xi(e) {
    var t = Ve();
    return Lr(t, ze, e);
  }
  function Lr(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(E(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var p = n.next;
        ((n.next = u.next), (u.next = p));
      }
      ((t.baseQueue = n = u), (a.pending = null));
    }
    if (((u = e.baseState), n === null)) e.memoizedState = u;
    else {
      t = n.next;
      var A = (p = null),
        w = null,
        Q = t,
        W = !1;
      do {
        var ee = Q.lane & -536870913;
        if (ee !== Q.lane ? (Se & ee) === ee : (Pt & ee) === ee) {
          var K = Q.revertLane;
          if (K === 0)
            (w !== null &&
              (w = w.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: Q.action,
                  hasEagerState: Q.hasEagerState,
                  eagerState: Q.eagerState,
                  next: null,
                }),
              ee === Oa && (W = !0));
          else if ((Pt & K) === K) {
            ((Q = Q.next), K === Oa && (W = !0));
            continue;
          } else
            ((ee = {
              lane: 0,
              revertLane: Q.revertLane,
              gesture: null,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null,
            }),
              w === null ? ((A = w = ee), (p = u)) : (w = w.next = ee),
              (he.lanes |= K),
              (Rl |= K));
          ((ee = Q.action), ta && l(u, ee), (u = Q.hasEagerState ? Q.eagerState : l(u, ee)));
        } else
          ((K = {
            lane: ee,
            revertLane: Q.revertLane,
            gesture: Q.gesture,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null,
          }),
            w === null ? ((A = w = K), (p = u)) : (w = w.next = K),
            (he.lanes |= ee),
            (Rl |= ee));
        Q = Q.next;
      } while (Q !== null && Q !== t);
      if (
        (w === null ? (p = u) : (w.next = A),
        !gt(u, e.memoizedState) && ((Qe = !0), W && ((l = Ba), l !== null)))
      )
        throw l;
      ((e.memoizedState = u), (e.baseState = p), (e.baseQueue = w), (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function Yr(e) {
    var t = Ve(),
      l = t.queue;
    if (l === null) throw Error(E(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var p = (n = n.next);
      do ((u = e(u, p.action)), (p = p.next));
      while (p !== n);
      (gt(u, t.memoizedState) || (Qe = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, a];
  }
  function jo(e, t, l) {
    var a = he,
      n = Ve(),
      u = Ee;
    if (u) {
      if (l === void 0) throw Error(E(407));
      l = l();
    } else l = t();
    var p = !gt((ze || n).memoizedState, l);
    if (
      (p && ((n.memoizedState = l), (Qe = !0)),
      (n = n.queue),
      Vr(qo.bind(null, a, n, e), [e]),
      n.getSnapshot !== t || p || (Xe !== null && Xe.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        La(9, { destroy: void 0 }, Vo.bind(null, a, n, l, t), null),
        Ue === null)
      )
        throw Error(E(349));
      u || (Pt & 127) !== 0 || Go(a, t, l);
    }
    return l;
  }
  function Go(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = he.updateQueue),
      t === null
        ? ((t = Vi()), (he.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function Vo(e, t, l, a) {
    ((t.value = l), (t.getSnapshot = a), Xo(t) && Qo(e));
  }
  function qo(e, t, l) {
    return l(function () {
      Xo(t) && Qo(e);
    });
  }
  function Xo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !gt(e, l);
    } catch {
      return !0;
    }
  }
  function Qo(e) {
    var t = Kl(e, 2);
    t !== null && dt(t, e, 2);
  }
  function jr(e) {
    var t = it();
    if (typeof e == 'function') {
      var l = e;
      if (((e = l()), ta)) {
        ml(!0);
        try {
          l();
        } finally {
          ml(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: It,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Zo(e, t, l, a) {
    return ((e.baseState = l), Lr(e, ze, typeof a == 'function' ? a : It));
  }
  function ph(e, t, l, a, n) {
    if (Ki(e)) throw Error(E(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (p) {
          u.listeners.push(p);
        },
      };
      (G.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = t.pending),
        l === null
          ? ((u.next = t.pending = u), Ko(t, u))
          : ((u.next = l.next), (t.pending = l.next = u)));
    }
  }
  function Ko(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var u = G.T,
        p = {};
      G.T = p;
      try {
        var A = l(n, a),
          w = G.S;
        (w !== null && w(p, A), Jo(e, t, A));
      } catch (Q) {
        Gr(e, t, Q);
      } finally {
        (u !== null && p.types !== null && (u.types = p.types), (G.T = u));
      }
    } else
      try {
        ((u = l(n, a)), Jo(e, t, u));
      } catch (Q) {
        Gr(e, t, Q);
      }
  }
  function Jo(e, t, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function'
      ? l.then(
          function (a) {
            Fo(e, t, a);
          },
          function (a) {
            return Gr(e, t, a);
          }
        )
      : Fo(e, t, l);
  }
  function Fo(e, t, l) {
    ((t.status = 'fulfilled'),
      (t.value = l),
      $o(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next), l === t ? (e.pending = null) : ((l = l.next), (t.next = l), Ko(e, l))));
  }
  function Gr(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = 'rejected'), (t.reason = l), $o(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function $o(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Wo(e, t) {
    return t;
  }
  function ko(e, t) {
    if (Ee) {
      var l = Ue.formState;
      if (l !== null) {
        e: {
          var a = he;
          if (Ee) {
            if (Ne) {
              t: {
                for (var n = Ne, u = Dt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = Bt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                ((u = n.data), (n = u === 'F!' || u === 'F' ? n : null));
              }
              if (n) {
                ((Ne = Bt(n.nextSibling)), (a = n.data === 'F!'));
                break e;
              }
            }
            pl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = it()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wo,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = gc.bind(null, he, a)),
      (a.dispatch = l),
      (a = jr(!1)),
      (u = Kr.bind(null, he, !1, a.queue)),
      (a = it()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = ph.bind(null, he, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function Po(e) {
    var t = Ve();
    return Io(t, ze, e);
  }
  function Io(e, t, l) {
    if (
      ((t = Lr(e, t, Wo)[0]),
      (e = Xi(It)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = Cn(t);
      } catch (p) {
        throw p === Ua ? Ni : p;
      }
    else a = t;
    t = Ve();
    var n = t.queue,
      u = n.dispatch;
    return (
      l !== t.memoizedState &&
        ((he.flags |= 2048), La(9, { destroy: void 0 }, Sh.bind(null, n, l), null)),
      [a, u, e]
    );
  }
  function Sh(e, t) {
    e.action = t;
  }
  function ec(e) {
    var t = Ve(),
      l = ze;
    if (l !== null) return Io(t, l, e);
    (Ve(), (t = t.memoizedState), (l = Ve()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = e), [t, a, !1]);
  }
  function La(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = he.updateQueue),
      t === null && ((t = Vi()), (he.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function tc() {
    return Ve().memoizedState;
  }
  function Qi(e, t, l, a) {
    var n = it();
    ((he.flags |= e),
      (n.memoizedState = La(1 | t, { destroy: void 0 }, l, a === void 0 ? null : a)));
  }
  function Zi(e, t, l, a) {
    var n = Ve();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    ze !== null && a !== null && Br(a, ze.memoizedState.deps)
      ? (n.memoizedState = La(t, u, l, a))
      : ((he.flags |= e), (n.memoizedState = La(1 | t, u, l, a)));
  }
  function lc(e, t) {
    Qi(8390656, 8, e, t);
  }
  function Vr(e, t) {
    Zi(2048, 8, e, t);
  }
  function xh(e) {
    he.flags |= 4;
    var t = he.updateQueue;
    if (t === null) ((t = Vi()), (he.updateQueue = t), (t.events = [e]));
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function ac(e) {
    var t = Ve().memoizedState;
    return (
      xh({ ref: t, nextImpl: e }),
      function () {
        if ((Ae & 2) !== 0) throw Error(E(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function nc(e, t) {
    return Zi(4, 2, e, t);
  }
  function ic(e, t) {
    return Zi(4, 4, e, t);
  }
  function uc(e, t) {
    if (typeof t == 'function') {
      e = e();
      var l = t(e);
      return function () {
        typeof l == 'function' ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function rc(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), Zi(4, 4, uc.bind(null, t, e), l));
  }
  function qr() {}
  function sc(e, t) {
    var l = Ve();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Br(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function fc(e, t) {
    var l = Ve();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Br(t, a[1])) return a[0];
    if (((a = e()), ta)) {
      ml(!0);
      try {
        e();
      } finally {
        ml(!1);
      }
    }
    return ((l.memoizedState = [a, t]), a);
  }
  function Xr(e, t, l) {
    return l === void 0 || ((Pt & 1073741824) !== 0 && (Se & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = od()), (he.lanes |= e), (Rl |= e), l);
  }
  function oc(e, t, l, a) {
    return gt(l, t)
      ? l
      : _a.current !== null
        ? ((e = Xr(e, l, a)), gt(e, t) || (Qe = !0), e)
        : (Pt & 42) === 0 || ((Pt & 1073741824) !== 0 && (Se & 261930) === 0)
          ? ((Qe = !0), (e.memoizedState = l))
          : ((e = od()), (he.lanes |= e), (Rl |= e), t);
  }
  function cc(e, t, l, a, n) {
    var u = Z.p;
    Z.p = u !== 0 && 8 > u ? u : 8;
    var p = G.T,
      A = {};
    ((G.T = A), Kr(e, !1, t, l));
    try {
      var w = n(),
        Q = G.S;
      if (
        (Q !== null && Q(A, w), w !== null && typeof w == 'object' && typeof w.then == 'function')
      ) {
        var W = hh(w, a);
        Rn(e, t, W, Tt(e));
      } else Rn(e, t, a, Tt(e));
    } catch (ee) {
      Rn(e, t, { then: function () {}, status: 'rejected', reason: ee }, Tt());
    } finally {
      ((Z.p = u), p !== null && A.types !== null && (p.types = A.types), (G.T = p));
    }
  }
  function Eh() {}
  function Qr(e, t, l, a) {
    if (e.tag !== 5) throw Error(E(476));
    var n = dc(e).queue;
    cc(
      e,
      n,
      t,
      te,
      l === null
        ? Eh
        : function () {
            return (mc(e), l(a));
          }
    );
  }
  function dc(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: te,
      baseState: te,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: It,
        lastRenderedState: te,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: It,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function mc(e) {
    var t = dc(e);
    (t.next === null && (t = e.alternate.memoizedState), Rn(e, t.next.queue, {}, Tt()));
  }
  function Zr() {
    return Pe(Qn);
  }
  function vc() {
    return Ve().memoizedState;
  }
  function hc() {
    return Ve().memoizedState;
  }
  function Th(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Tt();
          e = El(l);
          var a = Tl(t, e, l);
          (a !== null && (dt(a, t, l), Tn(a, t, l)), (t = { cache: xr() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function bh(e, t, l) {
    var a = Tt();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ki(e) ? yc(t, l) : ((l = fr(e, t, l, a)), l !== null && (dt(l, e, a), pc(l, t, a))));
  }
  function gc(e, t, l) {
    var a = Tt();
    Rn(e, t, l, a);
  }
  function Rn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ki(e)) yc(t, n);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var p = t.lastRenderedState,
            A = u(p, l);
          if (((n.hasEagerState = !0), (n.eagerState = A), gt(A, p)))
            return (Ci(e, t, n, 0), Ue === null && Ai(), !1);
        } catch {
        } finally {
        }
      if (((l = fr(e, t, n, a)), l !== null)) return (dt(l, e, a), pc(l, t, a), !0);
    }
    return !1;
  }
  function Kr(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Ms(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ki(e))
    ) {
      if (t) throw Error(E(479));
    } else ((t = fr(e, l, a, 2)), t !== null && dt(t, e, 2));
  }
  function Ki(e) {
    var t = e.alternate;
    return e === he || (t !== null && t === he);
  }
  function yc(e, t) {
    wa = ji = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (e.pending = t));
  }
  function pc(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Tf(e, l));
    }
  }
  var zn = {
    readContext: Pe,
    use: qi,
    useCallback: Ye,
    useContext: Ye,
    useEffect: Ye,
    useImperativeHandle: Ye,
    useLayoutEffect: Ye,
    useInsertionEffect: Ye,
    useMemo: Ye,
    useReducer: Ye,
    useRef: Ye,
    useState: Ye,
    useDebugValue: Ye,
    useDeferredValue: Ye,
    useTransition: Ye,
    useSyncExternalStore: Ye,
    useId: Ye,
    useHostTransitionStatus: Ye,
    useFormState: Ye,
    useActionState: Ye,
    useOptimistic: Ye,
    useMemoCache: Ye,
    useCacheRefresh: Ye,
  };
  zn.useEffectEvent = Ye;
  var Sc = {
      readContext: Pe,
      use: qi,
      useCallback: function (e, t) {
        return ((it().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Pe,
      useEffect: lc,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null), Qi(4194308, 4, uc.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return Qi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Qi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = it();
        t = t === void 0 ? null : t;
        var a = e();
        if (ta) {
          ml(!0);
          try {
            e();
          } finally {
            ml(!1);
          }
        }
        return ((l.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, l) {
        var a = it();
        if (l !== void 0) {
          var n = l(t);
          if (ta) {
            ml(!0);
            try {
              l(t);
            } finally {
              ml(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = bh.bind(null, he, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = it();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = jr(e);
        var t = e.queue,
          l = gc.bind(null, he, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: qr,
      useDeferredValue: function (e, t) {
        var l = it();
        return Xr(l, e, t);
      },
      useTransition: function () {
        var e = jr(!1);
        return ((e = cc.bind(null, he, e.queue, !0, !1)), (it().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, l) {
        var a = he,
          n = it();
        if (Ee) {
          if (l === void 0) throw Error(E(407));
          l = l();
        } else {
          if (((l = t()), Ue === null)) throw Error(E(349));
          (Se & 127) !== 0 || Go(a, t, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: t };
        return (
          (n.queue = u),
          lc(qo.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          La(9, { destroy: void 0 }, Vo.bind(null, a, u, l, t), null),
          l
        );
      },
      useId: function () {
        var e = it(),
          t = Ue.identifierPrefix;
        if (Ee) {
          var l = jt,
            a = Yt;
          ((l = (a & ~(1 << (32 - ht(a) - 1))).toString(32) + l),
            (t = '_' + t + 'R_' + l),
            (l = Gi++),
            0 < l && (t += 'H' + l.toString(32)),
            (t += '_'));
        } else ((l = gh++), (t = '_' + t + 'r_' + l.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Zr,
      useFormState: ko,
      useActionState: ko,
      useOptimistic: function (e) {
        var t = it();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((t.queue = l), (t = Kr.bind(null, he, !0, l)), (l.dispatch = t), [e, t]);
      },
      useMemoCache: Hr,
      useCacheRefresh: function () {
        return (it().memoizedState = Th.bind(null, he));
      },
      useEffectEvent: function (e) {
        var t = it(),
          l = { impl: e };
        return (
          (t.memoizedState = l),
          function () {
            if ((Ae & 2) !== 0) throw Error(E(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Jr = {
      readContext: Pe,
      use: qi,
      useCallback: sc,
      useContext: Pe,
      useEffect: Vr,
      useImperativeHandle: rc,
      useInsertionEffect: nc,
      useLayoutEffect: ic,
      useMemo: fc,
      useReducer: Xi,
      useRef: tc,
      useState: function () {
        return Xi(It);
      },
      useDebugValue: qr,
      useDeferredValue: function (e, t) {
        var l = Ve();
        return oc(l, ze.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Xi(It)[0],
          t = Ve().memoizedState;
        return [typeof e == 'boolean' ? e : Cn(e), t];
      },
      useSyncExternalStore: jo,
      useId: vc,
      useHostTransitionStatus: Zr,
      useFormState: Po,
      useActionState: Po,
      useOptimistic: function (e, t) {
        var l = Ve();
        return Zo(l, ze, e, t);
      },
      useMemoCache: Hr,
      useCacheRefresh: hc,
    };
  Jr.useEffectEvent = ac;
  var xc = {
    readContext: Pe,
    use: qi,
    useCallback: sc,
    useContext: Pe,
    useEffect: Vr,
    useImperativeHandle: rc,
    useInsertionEffect: nc,
    useLayoutEffect: ic,
    useMemo: fc,
    useReducer: Yr,
    useRef: tc,
    useState: function () {
      return Yr(It);
    },
    useDebugValue: qr,
    useDeferredValue: function (e, t) {
      var l = Ve();
      return ze === null ? Xr(l, e, t) : oc(l, ze.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Yr(It)[0],
        t = Ve().memoizedState;
      return [typeof e == 'boolean' ? e : Cn(e), t];
    },
    useSyncExternalStore: jo,
    useId: vc,
    useHostTransitionStatus: Zr,
    useFormState: ec,
    useActionState: ec,
    useOptimistic: function (e, t) {
      var l = Ve();
      return ze !== null ? Zo(l, ze, e, t) : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: Hr,
    useCacheRefresh: hc,
  };
  xc.useEffectEvent = ac;
  function Fr(e, t, l, a) {
    ((t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : g({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var $r = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = Tt(),
        n = El(a);
      ((n.payload = t),
        l != null && (n.callback = l),
        (t = Tl(e, n, a)),
        t !== null && (dt(t, e, a), Tn(t, e, a)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = Tt(),
        n = El(a);
      ((n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = Tl(e, n, a)),
        t !== null && (dt(t, e, a), Tn(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = Tt(),
        a = El(l);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = Tl(e, a, l)),
        t !== null && (dt(t, e, l), Tn(t, e, l)));
    },
  };
  function Ec(e, t, l, a, n, u, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, u, p)
        : t.prototype && t.prototype.isPureReactComponent
          ? !vn(l, a) || !vn(n, u)
          : !0
    );
  }
  function Tc(e, t, l, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && $r.enqueueReplaceState(t, t.state, null));
  }
  function la(e, t) {
    var l = t;
    if ('ref' in t) {
      l = {};
      for (var a in t) a !== 'ref' && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = g({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function bc(e) {
    Mi(e);
  }
  function Mc(e) {
    console.error(e);
  }
  function Ac(e) {
    Mi(e);
  }
  function Ji(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Cc(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, { componentStack: l.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Wr(e, t, l) {
    return (
      (l = El(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Ji(e, t);
      }),
      l
    );
  }
  function Rc(e) {
    return ((e = El(e)), (e.tag = 3), e);
  }
  function zc(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == 'function') {
      var u = a.value;
      ((e.payload = function () {
        return n(u);
      }),
        (e.callback = function () {
          Cc(t, l, a);
        }));
    }
    var p = l.stateNode;
    p !== null &&
      typeof p.componentDidCatch == 'function' &&
      (e.callback = function () {
        (Cc(t, l, a),
          typeof n != 'function' && (zl === null ? (zl = new Set([this])) : zl.add(this)));
        var A = a.stack;
        this.componentDidCatch(a.value, { componentStack: A !== null ? A : '' });
      });
  }
  function Mh(e, t, l, a, n) {
    if (((l.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((t = l.alternate), t !== null && Da(t, l, n, !0), (l = pt.current), l !== null)) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Ot === null ? iu() : l.alternate === null && je === 0 && (je = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === _i
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  Es(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === _i
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue), l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  Es(e, a, n)),
              !1
            );
        }
        throw Error(E(435, l.tag));
      }
      return (Es(e, a, n), iu(), !1);
    }
    if (Ee)
      return (
        (t = pt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== hr && ((e = Error(E(422), { cause: a })), yn(Ct(e, l))))
          : (a !== hr && ((t = Error(E(423), { cause: a })), yn(Ct(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = Ct(a, l)),
            (n = Wr(e.stateNode, a, n)),
            Cr(e, n),
            je !== 4 && (je = 2)),
        !1
      );
    var u = Error(E(520), { cause: a });
    if (((u = Ct(u, l)), Hn === null ? (Hn = [u]) : Hn.push(u), je !== 4 && (je = 2), t === null))
      return !0;
    ((a = Ct(a, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = Wr(l.stateNode, a, e)),
            Cr(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (u !== null &&
                  typeof u.componentDidCatch == 'function' &&
                  (zl === null || !zl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = Rc(n)),
              zc(n, e, l, a),
              Cr(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var kr = Error(E(461)),
    Qe = !1;
  function Ie(e, t, l, a) {
    t.child = e === null ? Uo(t, null, l, a) : ea(t, e.child, l, a);
  }
  function Dc(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ('ref' in a) {
      var p = {};
      for (var A in a) A !== 'ref' && (p[A] = a[A]);
    } else p = a;
    return (
      Wl(t),
      (a = Ur(e, t, l, p, u, n)),
      (A = Nr()),
      e !== null && !Qe
        ? (_r(e, t, n), el(e, t, n))
        : (Ee && A && mr(t), (t.flags |= 1), Ie(e, t, a, n), t.child)
    );
  }
  function Oc(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == 'function' && !or(u) && u.defaultProps === void 0 && l.compare === null
        ? ((t.tag = 15), (t.type = u), Bc(e, t, u, a, n))
        : ((e = zi(l.type, null, a, t, t.mode, n)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !is(e, n))) {
      var p = u.memoizedProps;
      if (((l = l.compare), (l = l !== null ? l : vn), l(p, a) && e.ref === t.ref))
        return el(e, t, n);
    }
    return ((t.flags |= 1), (e = Ft(u, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Bc(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (vn(u, a) && e.ref === t.ref)
        if (((Qe = !1), (t.pendingProps = a = u), is(e, n))) (e.flags & 131072) !== 0 && (Qe = !0);
        else return ((t.lanes = e.lanes), el(e, t, n));
    }
    return Pr(e, t, l, a, n);
  }
  function Uc(e, t, l, a) {
    var n = a.children,
      u = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === 'hidden')
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (a = t.child = e.child, n = 0; a !== null; )
            ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~u;
        } else ((a = 0), (t.child = null));
        return Nc(e, t, u, l, a);
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ui(t, u !== null ? u.cachePool : null),
          u !== null ? wo(t, u) : zr(),
          Ho(t));
      else return ((a = t.lanes = 536870912), Nc(e, t, u !== null ? u.baseLanes | l : l, l, a));
    } else
      u !== null
        ? (Ui(t, u.cachePool), wo(t, u), Ml(), (t.memoizedState = null))
        : (e !== null && Ui(t, null), zr(), Ml());
    return (Ie(e, t, n, l), t.child);
  }
  function Dn(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Nc(e, t, l, a, n) {
    var u = Tr();
    return (
      (u = u === null ? null : { parent: qe._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && Ui(t, null),
      zr(),
      Ho(t),
      e !== null && Da(e, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function Fi(e, t) {
    return (
      (t = Wi({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function _c(e, t, l) {
    return (
      ea(t, e.child, null, l),
      (e = Fi(t, t.pendingProps)),
      (e.flags |= 2),
      St(t),
      (t.memoizedState = null),
      e
    );
  }
  function Ah(e, t, l) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Ee) {
        if (a.mode === 'hidden') return ((e = Fi(t, a)), (t.lanes = 536870912), Dn(null, e));
        if (
          (Or(t),
          (e = Ne)
            ? ((e = Kd(e, Dt)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: gl !== null ? { id: Yt, overflow: jt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = yo(e)),
                (l.return = t),
                (t.child = l),
                (ke = t),
                (Ne = null)))
            : (e = null),
          e === null)
        )
          throw pl(t);
        return ((t.lanes = 536870912), null);
      }
      return Fi(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var p = u.dehydrated;
      if ((Or(t), n))
        if (t.flags & 256) ((t.flags &= -257), (t = _c(e, t, l)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(E(558));
      else if ((Qe || Da(e, t, l, !1), (n = (l & e.childLanes) !== 0), Qe || n)) {
        if (((a = Ue), a !== null && ((p = bf(a, l)), p !== 0 && p !== u.retryLane)))
          throw ((u.retryLane = p), Kl(e, p), dt(a, e, p), kr);
        (iu(), (t = _c(e, t, l)));
      } else
        ((e = u.treeContext),
          (Ne = Bt(p.nextSibling)),
          (ke = t),
          (Ee = !0),
          (yl = null),
          (Dt = !1),
          e !== null && xo(t, e),
          (t = Fi(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Ft(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function $i(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(E(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Pr(e, t, l, a, n) {
    return (
      Wl(t),
      (l = Ur(e, t, l, a, void 0, n)),
      (a = Nr()),
      e !== null && !Qe
        ? (_r(e, t, n), el(e, t, n))
        : (Ee && a && mr(t), (t.flags |= 1), Ie(e, t, l, n), t.child)
    );
  }
  function wc(e, t, l, a, n, u) {
    return (
      Wl(t),
      (t.updateQueue = null),
      (l = Yo(t, a, l, n)),
      Lo(e),
      (a = Nr()),
      e !== null && !Qe
        ? (_r(e, t, u), el(e, t, u))
        : (Ee && a && mr(t), (t.flags |= 1), Ie(e, t, l, u), t.child)
    );
  }
  function Hc(e, t, l, a, n) {
    if ((Wl(t), t.stateNode === null)) {
      var u = Aa,
        p = l.contextType;
      (typeof p == 'object' && p !== null && (u = Pe(p)),
        (u = new l(a, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = $r),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Mr(t),
        (p = l.contextType),
        (u.context = typeof p == 'object' && p !== null ? Pe(p) : Aa),
        (u.state = t.memoizedState),
        (p = l.getDerivedStateFromProps),
        typeof p == 'function' && (Fr(t, l, p, a), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((p = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          p !== u.state && $r.enqueueReplaceState(u, u.state, null),
          Mn(t, a, u, n),
          bn(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var A = t.memoizedProps,
        w = la(l, A);
      u.props = w;
      var Q = u.context,
        W = l.contextType;
      ((p = Aa), typeof W == 'object' && W !== null && (p = Pe(W)));
      var ee = l.getDerivedStateFromProps;
      ((W = typeof ee == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (A = t.pendingProps !== A),
        W ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((A || Q !== p) && Tc(t, u, a, p)),
        (xl = !1));
      var K = t.memoizedState;
      ((u.state = K),
        Mn(t, a, u, n),
        bn(),
        (Q = t.memoizedState),
        A || K !== Q || xl
          ? (typeof ee == 'function' && (Fr(t, l, ee, a), (Q = t.memoizedState)),
            (w = xl || Ec(t, l, w, a, K, Q, p))
              ? (W ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = Q)),
            (u.props = a),
            (u.state = Q),
            (u.context = p),
            (a = w))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1)));
    } else {
      ((u = t.stateNode),
        Ar(e, t),
        (p = t.memoizedProps),
        (W = la(l, p)),
        (u.props = W),
        (ee = t.pendingProps),
        (K = u.context),
        (Q = l.contextType),
        (w = Aa),
        typeof Q == 'object' && Q !== null && (w = Pe(Q)),
        (A = l.getDerivedStateFromProps),
        (Q = typeof A == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((p !== ee || K !== w) && Tc(t, u, a, w)),
        (xl = !1),
        (K = t.memoizedState),
        (u.state = K),
        Mn(t, a, u, n),
        bn());
      var F = t.memoizedState;
      p !== ee || K !== F || xl || (e !== null && e.dependencies !== null && Oi(e.dependencies))
        ? (typeof A == 'function' && (Fr(t, l, A, a), (F = t.memoizedState)),
          (W =
            xl ||
            Ec(t, l, W, a, K, F, w) ||
            (e !== null && e.dependencies !== null && Oi(e.dependencies)))
            ? (Q ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(a, F, w),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(a, F, w)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (p === e.memoizedProps && K === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (p === e.memoizedProps && K === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = F)),
          (u.props = a),
          (u.state = F),
          (u.context = w),
          (a = W))
        : (typeof u.componentDidUpdate != 'function' ||
            (p === e.memoizedProps && K === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (p === e.memoizedProps && K === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      $i(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (l = a && typeof l.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = ea(t, e.child, null, n)), (t.child = ea(t, null, l, n)))
            : Ie(e, t, l, n),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = el(e, t, n)),
      e
    );
  }
  function Lc(e, t, l, a) {
    return (Fl(), (t.flags |= 256), Ie(e, t, l, a), t.child);
  }
  var Ir = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function es(e) {
    return { baseLanes: e, cachePool: Co() };
  }
  function ts(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= Et), e);
  }
  function Yc(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      p;
    if (
      ((p = u) || (p = e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0),
      p && ((n = !0), (t.flags &= -129)),
      (p = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ee) {
        if (
          (n ? bl(t) : Ml(),
          (e = Ne)
            ? ((e = Kd(e, Dt)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: gl !== null ? { id: Yt, overflow: jt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = yo(e)),
                (l.return = t),
                (t.child = l),
                (ke = t),
                (Ne = null)))
            : (e = null),
          e === null)
        )
          throw pl(t);
        return (Ls(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var A = a.children;
      return (
        (a = a.fallback),
        n
          ? (Ml(),
            (n = t.mode),
            (A = Wi({ mode: 'hidden', children: A }, n)),
            (a = Jl(a, n, l, null)),
            (A.return = t),
            (a.return = t),
            (A.sibling = a),
            (t.child = A),
            (a = t.child),
            (a.memoizedState = es(l)),
            (a.childLanes = ts(e, p, l)),
            (t.memoizedState = Ir),
            Dn(null, a))
          : (bl(t), ls(t, A))
      );
    }
    var w = e.memoizedState;
    if (w !== null && ((A = w.dehydrated), A !== null)) {
      if (u)
        t.flags & 256
          ? (bl(t), (t.flags &= -257), (t = as(e, t, l)))
          : t.memoizedState !== null
            ? (Ml(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Ml(),
              (A = a.fallback),
              (n = t.mode),
              (a = Wi({ mode: 'visible', children: a.children }, n)),
              (A = Jl(A, n, l, null)),
              (A.flags |= 2),
              (a.return = t),
              (A.return = t),
              (a.sibling = A),
              (t.child = a),
              ea(t, e.child, null, l),
              (a = t.child),
              (a.memoizedState = es(l)),
              (a.childLanes = ts(e, p, l)),
              (t.memoizedState = Ir),
              (t = Dn(null, a)));
      else if ((bl(t), Ls(A))) {
        if (((p = A.nextSibling && A.nextSibling.dataset), p)) var Q = p.dgst;
        ((p = Q),
          (a = Error(E(419))),
          (a.stack = ''),
          (a.digest = p),
          yn({ value: a, source: null, stack: null }),
          (t = as(e, t, l)));
      } else if ((Qe || Da(e, t, l, !1), (p = (l & e.childLanes) !== 0), Qe || p)) {
        if (((p = Ue), p !== null && ((a = bf(p, l)), a !== 0 && a !== w.retryLane)))
          throw ((w.retryLane = a), Kl(e, a), dt(p, e, a), kr);
        (Hs(A) || iu(), (t = as(e, t, l)));
      } else
        Hs(A)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = w.treeContext),
            (Ne = Bt(A.nextSibling)),
            (ke = t),
            (Ee = !0),
            (yl = null),
            (Dt = !1),
            e !== null && xo(t, e),
            (t = ls(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (Ml(),
        (A = a.fallback),
        (n = t.mode),
        (w = e.child),
        (Q = w.sibling),
        (a = Ft(w, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = w.subtreeFlags & 65011712),
        Q !== null ? (A = Ft(Q, A)) : ((A = Jl(A, n, l, null)), (A.flags |= 2)),
        (A.return = t),
        (a.return = t),
        (a.sibling = A),
        (t.child = a),
        Dn(null, a),
        (a = t.child),
        (A = e.child.memoizedState),
        A === null
          ? (A = es(l))
          : ((n = A.cachePool),
            n !== null
              ? ((w = qe._currentValue), (n = n.parent !== w ? { parent: w, pool: w } : n))
              : (n = Co()),
            (A = { baseLanes: A.baseLanes | l, cachePool: n })),
        (a.memoizedState = A),
        (a.childLanes = ts(e, p, l)),
        (t.memoizedState = Ir),
        Dn(e.child, a))
      : (bl(t),
        (l = e.child),
        (e = l.sibling),
        (l = Ft(l, { mode: 'visible', children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((p = t.deletions), p === null ? ((t.deletions = [e]), (t.flags |= 16)) : p.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function ls(e, t) {
    return ((t = Wi({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function Wi(e, t) {
    return ((e = yt(22, e, null, t)), (e.lanes = 0), e);
  }
  function as(e, t, l) {
    return (
      ea(t, e.child, null, l),
      (e = ls(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function jc(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), pr(e.return, t, l));
  }
  function ns(e, t, l, a, n, u) {
    var p = e.memoizedState;
    p === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: u,
        })
      : ((p.isBackwards = t),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = a),
        (p.tail = l),
        (p.tailMode = n),
        (p.treeForkCount = u));
  }
  function Gc(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var p = Ge.current,
      A = (p & 2) !== 0;
    if (
      (A ? ((p = (p & 1) | 2), (t.flags |= 128)) : (p &= 1),
      le(Ge, p),
      Ie(e, t, a, l),
      (a = Ee ? gn : 0),
      !A && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && jc(e, l, t);
        else if (e.tag === 19) jc(e, l, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (n) {
      case 'forwards':
        for (l = t.child, n = null; l !== null; )
          ((e = l.alternate), e !== null && Yi(e) === null && (n = l), (l = l.sibling));
        ((l = n),
          l === null ? ((n = t.child), (t.child = null)) : ((n = l.sibling), (l.sibling = null)),
          ns(t, !1, n, l, u, a));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && Yi(e) === null)) {
            t.child = n;
            break;
          }
          ((e = n.sibling), (n.sibling = l), (l = n), (n = e));
        }
        ns(t, !0, l, null, u, a);
        break;
      case 'together':
        ns(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function el(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Rl |= t.lanes), (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Da(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(E(153));
    if (t.child !== null) {
      for (e = t.child, l = Ft(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        ((e = e.sibling), (l = l.sibling = Ft(e, e.pendingProps)), (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function is(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Oi(e)));
  }
  function Ch(e, t, l) {
    switch (t.tag) {
      case 3:
        (Te(t, t.stateNode.containerInfo), Sl(t, qe, e.memoizedState.cache), Fl());
        break;
      case 27:
      case 5:
        tt(t);
        break;
      case 4:
        Te(t, t.stateNode.containerInfo);
        break;
      case 10:
        Sl(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Or(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (bl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? Yc(e, t, l)
              : (bl(t), (e = el(e, t, l)), e !== null ? e.sibling : null);
        bl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (Da(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return Gc(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null && ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          le(Ge, Ge.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Uc(e, t, l, t.pendingProps));
      case 24:
        Sl(t, qe, e.memoizedState.cache);
    }
    return el(e, t, l);
  }
  function Vc(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Qe = !0;
      else {
        if (!is(e, l) && (t.flags & 128) === 0) return ((Qe = !1), Ch(e, t, l));
        Qe = (e.flags & 131072) !== 0;
      }
    else ((Qe = !1), Ee && (t.flags & 1048576) !== 0 && So(t, gn, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Pl(t.elementType)), (t.type = e), typeof e == 'function'))
            or(e)
              ? ((a = la(e, a)), (t.tag = 1), (t = Hc(null, t, e, a, l)))
              : ((t.tag = 0), (t = Pr(null, t, e, a, l)));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === L) {
                ((t.tag = 11), (t = Dc(null, t, e, a, l)));
                break e;
              } else if (n === D) {
                ((t.tag = 14), (t = Oc(null, t, e, a, l)));
                break e;
              }
            }
            throw ((t = I(e) || e), Error(E(306, t, '')));
          }
        }
        return t;
      case 0:
        return Pr(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((a = t.type), (n = la(a, t.pendingProps)), Hc(e, t, a, n, l));
      case 3:
        e: {
          if ((Te(t, t.stateNode.containerInfo), e === null)) throw Error(E(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((n = u.element), Ar(e, t), Mn(t, a, null, l));
          var p = t.memoizedState;
          if (
            ((a = p.cache),
            Sl(t, qe, a),
            a !== u.cache && Sr(t, [qe], l, !0),
            bn(),
            (a = p.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: p.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Lc(e, t, a, l);
              break e;
            } else if (a !== n) {
              ((n = Ct(Error(E(424)), t)), yn(n), (t = Lc(e, t, a, l)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (
                Ne = Bt(e.firstChild),
                  ke = t,
                  Ee = !0,
                  yl = null,
                  Dt = !0,
                  l = Uo(t, null, a, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            }
          else {
            if ((Fl(), a === n)) {
              t = el(e, t, l);
              break e;
            }
            Ie(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          $i(e, t),
          e === null
            ? (l = Pd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : Ee ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = du(ue.current).createElement(l)),
                (a[We] = t),
                (a[ut] = e),
                et(a, l, e),
                Fe(a),
                (t.stateNode = a))
            : (t.memoizedState = Pd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          tt(t),
          e === null &&
            Ee &&
            ((a = t.stateNode = $d(t.type, t.pendingProps, ue.current)),
            (ke = t),
            (Dt = !0),
            (n = Ne),
            Ul(t.type) ? ((Ys = n), (Ne = Bt(a.firstChild))) : (Ne = n)),
          Ie(e, t, t.pendingProps.children, l),
          $i(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ee &&
            ((n = a = Ne) &&
              ((a = l0(a, t.type, t.pendingProps, Dt)),
              a !== null
                ? ((t.stateNode = a), (ke = t), (Ne = Bt(a.firstChild)), (Dt = !1), (n = !0))
                : (n = !1)),
            n || pl(t)),
          tt(t),
          (n = t.type),
          (u = t.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (a = u.children),
          Ns(n, u) ? (a = null) : p !== null && Ns(n, p) && (t.flags |= 32),
          t.memoizedState !== null && ((n = Ur(e, t, yh, null, null, l)), (Qn._currentValue = n)),
          $i(e, t),
          Ie(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ee &&
            ((e = l = Ne) &&
              ((l = a0(l, t.pendingProps, Dt)),
              l !== null ? ((t.stateNode = l), (ke = t), (Ne = null), (e = !0)) : (e = !1)),
            e || pl(t)),
          null
        );
      case 13:
        return Yc(e, t, l);
      case 4:
        return (
          Te(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = ea(t, null, a, l)) : Ie(e, t, a, l),
          t.child
        );
      case 11:
        return Dc(e, t, t.type, t.pendingProps, l);
      case 7:
        return (Ie(e, t, t.pendingProps, l), t.child);
      case 8:
        return (Ie(e, t, t.pendingProps.children, l), t.child);
      case 12:
        return (Ie(e, t, t.pendingProps.children, l), t.child);
      case 10:
        return ((a = t.pendingProps), Sl(t, t.type, a.value), Ie(e, t, a.children, l), t.child);
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Wl(t),
          (n = Pe(n)),
          (a = a(n)),
          (t.flags |= 1),
          Ie(e, t, a, l),
          t.child
        );
      case 14:
        return Oc(e, t, t.type, t.pendingProps, l);
      case 15:
        return Bc(e, t, t.type, t.pendingProps, l);
      case 19:
        return Gc(e, t, l);
      case 31:
        return Ah(e, t, l);
      case 22:
        return Uc(e, t, l, t.pendingProps);
      case 24:
        return (
          Wl(t),
          (a = Pe(qe)),
          e === null
            ? ((n = Tr()),
              n === null &&
                ((n = Ue),
                (u = xr()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              Mr(t),
              Sl(t, qe, n))
            : ((e.lanes & l) !== 0 && (Ar(e, t), Mn(t, null, null, l), bn()),
              (n = e.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
                  Sl(t, qe, a))
                : ((a = u.cache), Sl(t, qe, a), a !== n.cache && Sr(t, [qe], l, !0))),
          Ie(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(E(156, t.tag));
  }
  function tl(e) {
    e.flags |= 4;
  }
  function us(e, t, l, a, n) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (n & 335544128) === n))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (vd()) e.flags |= 8192;
        else throw ((Il = _i), br);
    } else e.flags &= -16777217;
  }
  function qc(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !am(t)))
      if (vd()) e.flags |= 8192;
      else throw ((Il = _i), br);
  }
  function ki(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? xf() : 536870912), (e.lanes |= t), (Va |= t)));
  }
  function On(e, t) {
    if (!Ee)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var l = null; t !== null; ) (t.alternate !== null && (l = t), (t = t.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case 'collapsed':
          l = e.tail;
          for (var a = null; l !== null; ) (l.alternate !== null && (a = l), (l = l.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function _e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling));
    else
      for (n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = l), t);
  }
  function Rh(e, t, l) {
    var a = t.pendingProps;
    switch ((vr(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (_e(t), null);
      case 1:
        return (_e(t), null);
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          kt(qe),
          Be(),
          l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (za(t)
              ? tl(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), gr())),
          _e(t),
          null
        );
      case 26:
        var n = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (tl(t), u !== null ? (_e(t), qc(t, u)) : (_e(t), us(t, n, null, a, l)))
            : u
              ? u !== e.memoizedState
                ? (tl(t), _e(t), qc(t, u))
                : (_e(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== a && tl(t), _e(t), us(t, n, e, a, l)),
          null
        );
      case 27:
        if ((nt(t), (l = ue.current), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && tl(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(E(166));
            return (_e(t), null);
          }
          ((e = ie.current), za(t) ? Eo(t) : ((e = $d(n, a, l)), (t.stateNode = e), tl(t)));
        }
        return (_e(t), null);
      case 5:
        if ((nt(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && tl(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(E(166));
            return (_e(t), null);
          }
          if (((u = ie.current), za(t))) Eo(t);
          else {
            var p = du(ue.current);
            switch (u) {
              case 1:
                u = p.createElementNS('http://www.w3.org/2000/svg', n);
                break;
              case 2:
                u = p.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                break;
              default:
                switch (n) {
                  case 'svg':
                    u = p.createElementNS('http://www.w3.org/2000/svg', n);
                    break;
                  case 'math':
                    u = p.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                    break;
                  case 'script':
                    ((u = p.createElement('div')),
                      (u.innerHTML = '<script><\/script>'),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case 'select':
                    ((u =
                      typeof a.is == 'string'
                        ? p.createElement('select', { is: a.is })
                        : p.createElement('select')),
                      a.multiple ? (u.multiple = !0) : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == 'string'
                        ? p.createElement(n, { is: a.is })
                        : p.createElement(n);
                }
            }
            ((u[We] = t), (u[ut] = a));
            e: for (p = t.child; p !== null; ) {
              if (p.tag === 5 || p.tag === 6) u.appendChild(p.stateNode);
              else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                ((p.child.return = p), (p = p.child));
                continue;
              }
              if (p === t) break e;
              for (; p.sibling === null; ) {
                if (p.return === null || p.return === t) break e;
                p = p.return;
              }
              ((p.sibling.return = p.return), (p = p.sibling));
            }
            t.stateNode = u;
            e: switch ((et(u, n, a), n)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                a = !!a.autoFocus;
                break e;
              case 'img':
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && tl(t);
          }
        }
        return (_e(t), us(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && tl(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(E(166));
          if (((e = ue.current), za(t))) {
            if (((e = t.stateNode), (l = t.memoizedProps), (a = null), (n = ke), n !== null))
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((e[We] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Yd(e.nodeValue, l)
              )),
              e || pl(t, !0));
          } else ((e = du(e).createTextNode(a)), (e[We] = t), (t.stateNode = e));
        }
        return (_e(t), null);
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = za(t)), l !== null)) {
            if (e === null) {
              if (!a) throw Error(E(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(E(557));
              e[We] = t;
            } else (Fl(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (_e(t), (e = !1));
          } else
            ((l = gr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l),
              (e = !0));
          if (!e) return t.flags & 256 ? (St(t), t) : (St(t), null);
          if ((t.flags & 128) !== 0) throw Error(E(558));
        }
        return (_e(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = za(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(E(318));
              if (((n = t.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
                throw Error(E(317));
              n[We] = t;
            } else (Fl(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (_e(t), (n = !1));
          } else
            ((n = gr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return t.flags & 256 ? (St(t), t) : (St(t), null);
        }
        return (
          St(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = l), t)
            : ((l = a !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
                ((a = t.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              l !== e && l && (t.child.flags |= 8192),
              ki(t, t.updateQueue),
              _e(t),
              null)
        );
      case 4:
        return (Be(), e === null && zs(t.stateNode.containerInfo), _e(t), null);
      case 10:
        return (kt(t.type), _e(t), null);
      case 19:
        if (($(Ge), (a = t.memoizedState), a === null)) return (_e(t), null);
        if (((n = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) On(a, !1);
          else {
            if (je !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Yi(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      On(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      ki(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;
                  )
                    (go(l, e), (l = l.sibling));
                  return (le(Ge, (Ge.current & 1) | 2), Ee && $t(t, a.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            a.tail !== null &&
              lt() > lu &&
              ((t.flags |= 128), (n = !0), On(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = Yi(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                ki(t, e),
                On(a, !0),
                a.tail === null && a.tailMode === 'hidden' && !u.alternate && !Ee)
              )
                return (_e(t), null);
            } else
              2 * lt() - a.renderingStartTime > lu &&
                l !== 536870912 &&
                ((t.flags |= 128), (n = !0), On(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = a.last), e !== null ? (e.sibling = u) : (t.child = u), (a.last = u));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = lt()),
            (e.sibling = null),
            (l = Ge.current),
            le(Ge, n ? (l & 1) | 2 : l & 1),
            Ee && $t(t, a.treeForkCount),
            e)
          : (_e(t), null);
      case 22:
      case 23:
        return (
          St(t),
          Dr(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : _e(t),
          (l = t.updateQueue),
          l !== null && ki(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && $(kl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          kt(qe),
          _e(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(E(156, t.tag));
  }
  function zh(e, t) {
    switch ((vr(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          kt(qe),
          Be(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (nt(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((St(t), t.alternate === null)) throw Error(E(340));
          Fl();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 13:
        if ((St(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(E(340));
          Fl();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return ($(Ge), null);
      case 4:
        return (Be(), null);
      case 10:
        return (kt(t.type), null);
      case 22:
      case 23:
        return (
          St(t),
          Dr(),
          e !== null && $(kl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (kt(qe), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xc(e, t) {
    switch ((vr(t), t.tag)) {
      case 3:
        (kt(qe), Be());
        break;
      case 26:
      case 27:
      case 5:
        nt(t);
        break;
      case 4:
        Be();
        break;
      case 31:
        t.memoizedState !== null && St(t);
        break;
      case 13:
        St(t);
        break;
      case 19:
        $(Ge);
        break;
      case 10:
        kt(t.type);
        break;
      case 22:
      case 23:
        (St(t), Dr(), e !== null && $(kl));
        break;
      case 24:
        kt(qe);
    }
  }
  function Bn(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create,
              p = l.inst;
            ((a = u()), (p.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (A) {
      Re(t, t.return, A);
    }
  }
  function Al(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var p = a.inst,
              A = p.destroy;
            if (A !== void 0) {
              ((p.destroy = void 0), (n = t));
              var w = l,
                Q = A;
              try {
                Q();
              } catch (W) {
                Re(n, w, W);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (W) {
      Re(t, t.return, W);
    }
  }
  function Qc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        _o(t, l);
      } catch (a) {
        Re(e, e.return, a);
      }
    }
  }
  function Zc(e, t, l) {
    ((l.props = la(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      Re(e, t, a);
    }
  }
  function Un(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == 'function' ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      Re(e, t, n);
    }
  }
  function Gt(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == 'function')
        try {
          a();
        } catch (n) {
          Re(e, t, n);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof l == 'function')
        try {
          l(null);
        } catch (n) {
          Re(e, t, n);
        }
      else l.current = null;
  }
  function Kc(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && a.focus();
          break e;
        case 'img':
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      Re(e, e.return, n);
    }
  }
  function rs(e, t, l) {
    try {
      var a = e.stateNode;
      (Wh(a, e.type, l, t), (a[ut] = t));
    } catch (n) {
      Re(e, e.return, n);
    }
  }
  function Jc(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Ul(e.type)) || e.tag === 4
    );
  }
  function ss(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Jc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if ((e.tag === 27 && Ul(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function fs(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === 'HTML'
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, t)
          : ((t = l.nodeType === 9 ? l.body : l.nodeName === 'HTML' ? l.ownerDocument.body : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = Kt)));
    else if (
      a !== 4 &&
      (a === 27 && Ul(e.type) && ((l = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (fs(e, t, l), e = e.sibling; e !== null; ) (fs(e, t, l), (e = e.sibling));
  }
  function Pi(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6) ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (a !== 4 && (a === 27 && Ul(e.type) && (l = e.stateNode), (e = e.child), e !== null))
      for (Pi(e, t, l), e = e.sibling; e !== null; ) (Pi(e, t, l), (e = e.sibling));
  }
  function Fc(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
      (et(t, a, l), (t[We] = e), (t[ut] = l));
    } catch (u) {
      Re(e, e.return, u);
    }
  }
  var ll = !1,
    Ze = !1,
    os = !1,
    $c = typeof WeakSet == 'function' ? WeakSet : Set,
    $e = null;
  function Dh(e, t) {
    if (((e = e.containerInfo), (Bs = Su), (e = uo(e)), ar(e))) {
      if ('selectionStart' in e) var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              (l.nodeType, u.nodeType);
            } catch {
              l = null;
              break e;
            }
            var p = 0,
              A = -1,
              w = -1,
              Q = 0,
              W = 0,
              ee = e,
              K = null;
            t: for (;;) {
              for (
                var F;
                ee !== l || (n !== 0 && ee.nodeType !== 3) || (A = p + n),
                  ee !== u || (a !== 0 && ee.nodeType !== 3) || (w = p + a),
                  ee.nodeType === 3 && (p += ee.nodeValue.length),
                  (F = ee.firstChild) !== null;
              )
                ((K = ee), (ee = F));
              for (;;) {
                if (ee === e) break t;
                if (
                  (K === l && ++Q === n && (A = p),
                  K === u && ++W === a && (w = p),
                  (F = ee.nextSibling) !== null)
                )
                  break;
                ((ee = K), (K = ee.parentNode));
              }
              ee = F;
            }
            l = A === -1 || w === -1 ? null : { start: A, end: w };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Us = { focusedElem: e, selectionRange: l }, Su = !1, $e = t; $e !== null; )
      if (((t = $e), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), ($e = e));
      else
        for (; $e !== null; ) {
          switch (((t = $e), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue), (e = e !== null ? e.events : null), e !== null)
              )
                for (l = 0; l < e.length; l++) ((n = e[l]), (n.ref.impl = n.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                ((e = void 0),
                  (l = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode));
                try {
                  var re = la(l.type, n);
                  ((e = a.getSnapshotBeforeUpdate(re, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (de) {
                  Re(l, l.return, de);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)) ws(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      ws(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(E(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), ($e = e));
            break;
          }
          $e = t.return;
        }
  }
  function Wc(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (nl(e, l), a & 4 && Bn(5, l));
        break;
      case 1:
        if ((nl(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (p) {
              Re(l, l.return, p);
            }
          else {
            var n = la(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (p) {
              Re(l, l.return, p);
            }
          }
        (a & 64 && Qc(l), a & 512 && Un(l, l.return));
        break;
      case 3:
        if ((nl(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            _o(e, t);
          } catch (p) {
            Re(l, l.return, p);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Fc(l);
      case 26:
      case 5:
        (nl(e, l), t === null && a & 4 && Kc(l), a & 512 && Un(l, l.return));
        break;
      case 12:
        nl(e, l);
        break;
      case 31:
        (nl(e, l), a & 4 && Ic(e, l));
        break;
      case 13:
        (nl(e, l),
          a & 4 && ed(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((l = Yh.bind(null, l)), n0(e, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || ll), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Ze), (n = ll));
          var u = Ze;
          ((ll = a),
            (Ze = t) && !u ? il(e, l, (l.subtreeFlags & 8772) !== 0) : nl(e, l),
            (ll = n),
            (Ze = u));
        }
        break;
      case 30:
        break;
      default:
        nl(e, l);
    }
  }
  function kc(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), kc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Gu(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var we = null,
    st = !1;
  function al(e, t, l) {
    for (l = l.child; l !== null; ) (Pc(e, t, l), (l = l.sibling));
  }
  function Pc(e, t, l) {
    if (vt && typeof vt.onCommitFiberUnmount == 'function')
      try {
        vt.onCommitFiberUnmount(tn, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Ze || Gt(l, t),
          al(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        Ze || Gt(l, t);
        var a = we,
          n = st;
        (Ul(l.type) && ((we = l.stateNode), (st = !1)),
          al(e, t, l),
          Vn(l.stateNode),
          (we = a),
          (st = n));
        break;
      case 5:
        Ze || Gt(l, t);
      case 6:
        if (((a = we), (n = st), (we = null), al(e, t, l), (we = a), (st = n), we !== null))
          if (st)
            try {
              (we.nodeType === 9
                ? we.body
                : we.nodeName === 'HTML'
                  ? we.ownerDocument.body
                  : we
              ).removeChild(l.stateNode);
            } catch (u) {
              Re(l, t, u);
            }
          else
            try {
              we.removeChild(l.stateNode);
            } catch (u) {
              Re(l, t, u);
            }
        break;
      case 18:
        we !== null &&
          (st
            ? ((e = we),
              Qd(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                l.stateNode
              ),
              $a(e))
            : Qd(we, l.stateNode));
        break;
      case 4:
        ((a = we),
          (n = st),
          (we = l.stateNode.containerInfo),
          (st = !0),
          al(e, t, l),
          (we = a),
          (st = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Al(2, l, t), Ze || Al(4, l, t), al(e, t, l));
        break;
      case 1:
        (Ze ||
          (Gt(l, t), (a = l.stateNode), typeof a.componentWillUnmount == 'function' && Zc(l, t, a)),
          al(e, t, l));
        break;
      case 21:
        al(e, t, l);
        break;
      case 22:
        ((Ze = (a = Ze) || l.memoizedState !== null), al(e, t, l), (Ze = a));
        break;
      default:
        al(e, t, l);
    }
  }
  function Ic(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        $a(e);
      } catch (l) {
        Re(t, t.return, l);
      }
    }
  }
  function ed(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        $a(e);
      } catch (l) {
        Re(t, t.return, l);
      }
  }
  function Oh(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new $c()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new $c()),
          t
        );
      default:
        throw Error(E(435, e.tag));
    }
  }
  function Ii(e, t) {
    var l = Oh(e);
    t.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = jh.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function ft(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = e,
          p = t,
          A = p;
        e: for (; A !== null; ) {
          switch (A.tag) {
            case 27:
              if (Ul(A.type)) {
                ((we = A.stateNode), (st = !1));
                break e;
              }
              break;
            case 5:
              ((we = A.stateNode), (st = !1));
              break e;
            case 3:
            case 4:
              ((we = A.stateNode.containerInfo), (st = !0));
              break e;
          }
          A = A.return;
        }
        if (we === null) throw Error(E(160));
        (Pc(u, p, n),
          (we = null),
          (st = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (td(t, e), (t = t.sibling));
  }
  var wt = null;
  function td(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ft(t, e), ot(e), a & 4 && (Al(3, e, e.return), Bn(3, e), Al(5, e, e.return)));
        break;
      case 1:
        (ft(t, e),
          ot(e),
          a & 512 && (Ze || l === null || Gt(l, l.return)),
          a & 64 &&
            ll &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var n = wt;
        if ((ft(t, e), ot(e), a & 512 && (Ze || l === null || Gt(l, l.return)), a & 4)) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type), (l = e.memoizedProps), (n = n.ownerDocument || n));
                  t: switch (a) {
                    case 'title':
                      ((u = n.getElementsByTagName('title')[0]),
                        (!u ||
                          u[nn] ||
                          u[We] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(u, n.querySelector('head > title'))),
                        et(u, a, l),
                        (u[We] = e),
                        Fe(u),
                        (a = u));
                      break e;
                    case 'link':
                      var p = tm('link', 'href', n).get(a + (l.href || ''));
                      if (p) {
                        for (var A = 0; A < p.length; A++)
                          if (
                            ((u = p[A]),
                            u.getAttribute('href') ===
                              (l.href == null || l.href === '' ? null : l.href) &&
                              u.getAttribute('rel') === (l.rel == null ? null : l.rel) &&
                              u.getAttribute('title') === (l.title == null ? null : l.title) &&
                              u.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            p.splice(A, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(a)), et(u, a, l), n.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((p = tm('meta', 'content', n).get(a + (l.content || '')))) {
                        for (A = 0; A < p.length; A++)
                          if (
                            ((u = p[A]),
                            u.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              u.getAttribute('name') === (l.name == null ? null : l.name) &&
                              u.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute('charset') === (l.charSet == null ? null : l.charSet))
                          ) {
                            p.splice(A, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(a)), et(u, a, l), n.head.appendChild(u));
                      break;
                    default:
                      throw Error(E(468, a));
                  }
                  ((u[We] = e), Fe(u), (a = u));
                }
                e.stateNode = a;
              } else lm(n, e.type, e.stateNode);
            else e.stateNode = em(n, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null ? lm(n, e.type, e.stateNode) : em(n, a, e.memoizedProps))
              : a === null && e.stateNode !== null && rs(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (ft(t, e),
          ot(e),
          a & 512 && (Ze || l === null || Gt(l, l.return)),
          l !== null && a & 4 && rs(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if ((ft(t, e), ot(e), a & 512 && (Ze || l === null || Gt(l, l.return)), e.flags & 32)) {
          n = e.stateNode;
          try {
            pa(n, '');
          } catch (re) {
            Re(e, e.return, re);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), rs(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (os = !0));
        break;
      case 6:
        if ((ft(t, e), ot(e), a & 4)) {
          if (e.stateNode === null) throw Error(E(162));
          ((a = e.memoizedProps), (l = e.stateNode));
          try {
            l.nodeValue = a;
          } catch (re) {
            Re(e, e.return, re);
          }
        }
        break;
      case 3:
        if (
          ((hu = null),
          (n = wt),
          (wt = mu(t.containerInfo)),
          ft(t, e),
          (wt = n),
          ot(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            $a(t.containerInfo);
          } catch (re) {
            Re(e, e.return, re);
          }
        os && ((os = !1), ld(e));
        break;
      case 4:
        ((a = wt), (wt = mu(e.stateNode.containerInfo)), ft(t, e), ot(e), (wt = a));
        break;
      case 12:
        (ft(t, e), ot(e));
        break;
      case 31:
        (ft(t, e),
          ot(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Ii(e, a))));
        break;
      case 13:
        (ft(t, e),
          ot(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (l !== null && l.memoizedState !== null) &&
            (tu = lt()),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Ii(e, a))));
        break;
      case 22:
        n = e.memoizedState !== null;
        var w = l !== null && l.memoizedState !== null,
          Q = ll,
          W = Ze;
        if (((ll = Q || n), (Ze = W || w), ft(t, e), (Ze = W), (ll = Q), ot(e), a & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || w || ll || Ze || aa(e)),
              l = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                w = l = t;
                try {
                  if (((u = w.stateNode), n))
                    ((p = u.style),
                      typeof p.setProperty == 'function'
                        ? p.setProperty('display', 'none', 'important')
                        : (p.display = 'none'));
                  else {
                    A = w.stateNode;
                    var ee = w.memoizedProps.style,
                      K = ee != null && ee.hasOwnProperty('display') ? ee.display : null;
                    A.style.display = K == null || typeof K == 'boolean' ? '' : ('' + K).trim();
                  }
                } catch (re) {
                  Re(w, w.return, re);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                w = t;
                try {
                  w.stateNode.nodeValue = n ? '' : w.memoizedProps;
                } catch (re) {
                  Re(w, w.return, re);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                w = t;
                try {
                  var F = w.stateNode;
                  n ? Zd(F, !0) : Zd(w.stateNode, !1);
                } catch (re) {
                  Re(w, w.return, re);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (l === t && (l = null), (t = t.return));
            }
            (l === t && (l = null), (t.sibling.return = t.return), (t = t.sibling));
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null && ((l = a.retryQueue), l !== null && ((a.retryQueue = null), Ii(e, l))));
        break;
      case 19:
        (ft(t, e),
          ot(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Ii(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ft(t, e), ot(e));
    }
  }
  function ot(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (Jc(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(E(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = ss(e);
            Pi(e, u, n);
            break;
          case 5:
            var p = l.stateNode;
            l.flags & 32 && (pa(p, ''), (l.flags &= -33));
            var A = ss(e);
            Pi(e, A, p);
            break;
          case 3:
          case 4:
            var w = l.stateNode.containerInfo,
              Q = ss(e);
            fs(e, Q, w);
            break;
          default:
            throw Error(E(161));
        }
      } catch (W) {
        Re(e, e.return, W);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ld(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (ld(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function nl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Wc(e, t.alternate, t), (t = t.sibling));
  }
  function aa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Al(4, t, t.return), aa(t));
          break;
        case 1:
          Gt(t, t.return);
          var l = t.stateNode;
          (typeof l.componentWillUnmount == 'function' && Zc(t, t.return, l), aa(t));
          break;
        case 27:
          Vn(t.stateNode);
        case 26:
        case 5:
          (Gt(t, t.return), aa(t));
          break;
        case 22:
          t.memoizedState === null && aa(t);
          break;
        case 30:
          aa(t);
          break;
        default:
          aa(t);
      }
      e = e.sibling;
    }
  }
  function il(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        u = t,
        p = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (il(n, u, l), Bn(4, u));
          break;
        case 1:
          if ((il(n, u, l), (a = u), (n = a.stateNode), typeof n.componentDidMount == 'function'))
            try {
              n.componentDidMount();
            } catch (Q) {
              Re(a, a.return, Q);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var A = a.stateNode;
            try {
              var w = n.shared.hiddenCallbacks;
              if (w !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < w.length; n++) No(w[n], A);
            } catch (Q) {
              Re(a, a.return, Q);
            }
          }
          (l && p & 64 && Qc(u), Un(u, u.return));
          break;
        case 27:
          Fc(u);
        case 26:
        case 5:
          (il(n, u, l), l && a === null && p & 4 && Kc(u), Un(u, u.return));
          break;
        case 12:
          il(n, u, l);
          break;
        case 31:
          (il(n, u, l), l && p & 4 && Ic(n, u));
          break;
        case 13:
          (il(n, u, l), l && p & 4 && ed(n, u));
          break;
        case 22:
          (u.memoizedState === null && il(n, u, l), Un(u, u.return));
          break;
        case 30:
          break;
        default:
          il(n, u, l);
      }
      t = t.sibling;
    }
  }
  function cs(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && pn(l)));
  }
  function ds(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && pn(e)));
  }
  function Ht(e, t, l, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (ad(e, t, l, a), (t = t.sibling));
  }
  function ad(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Ht(e, t, l, a), n & 2048 && Bn(9, t));
        break;
      case 1:
        Ht(e, t, l, a);
        break;
      case 3:
        (Ht(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && pn(e))));
        break;
      case 12:
        if (n & 2048) {
          (Ht(e, t, l, a), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              p = u.id,
              A = u.onPostCommit;
            typeof A == 'function' &&
              A(p, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (w) {
            Re(t, t.return, w);
          }
        } else Ht(e, t, l, a);
        break;
      case 31:
        Ht(e, t, l, a);
        break;
      case 13:
        Ht(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (p = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? Ht(e, t, l, a)
              : Nn(e, t)
            : u._visibility & 2
              ? Ht(e, t, l, a)
              : ((u._visibility |= 2), Ya(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && cs(p, t));
        break;
      case 24:
        (Ht(e, t, l, a), n & 2048 && ds(t.alternate, t));
        break;
      default:
        Ht(e, t, l, a);
    }
  }
  function Ya(e, t, l, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e,
        p = t,
        A = l,
        w = a,
        Q = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          (Ya(u, p, A, w, n), Bn(8, p));
          break;
        case 23:
          break;
        case 22:
          var W = p.stateNode;
          (p.memoizedState !== null
            ? W._visibility & 2
              ? Ya(u, p, A, w, n)
              : Nn(u, p)
            : ((W._visibility |= 2), Ya(u, p, A, w, n)),
            n && Q & 2048 && cs(p.alternate, p));
          break;
        case 24:
          (Ya(u, p, A, w, n), n && Q & 2048 && ds(p.alternate, p));
          break;
        default:
          Ya(u, p, A, w, n);
      }
      t = t.sibling;
    }
  }
  function Nn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (Nn(l, a), n & 2048 && cs(a.alternate, a));
            break;
          case 24:
            (Nn(l, a), n & 2048 && ds(a.alternate, a));
            break;
          default:
            Nn(l, a);
        }
        t = t.sibling;
      }
  }
  var _n = 8192;
  function ja(e, t, l) {
    if (e.subtreeFlags & _n) for (e = e.child; e !== null; ) (nd(e, t, l), (e = e.sibling));
  }
  function nd(e, t, l) {
    switch (e.tag) {
      case 26:
        (ja(e, t, l),
          e.flags & _n && e.memoizedState !== null && g0(l, wt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        ja(e, t, l);
        break;
      case 3:
      case 4:
        var a = wt;
        ((wt = mu(e.stateNode.containerInfo)), ja(e, t, l), (wt = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = _n), (_n = 16777216), ja(e, t, l), (_n = a))
            : ja(e, t, l));
        break;
      default:
        ja(e, t, l);
    }
  }
  function id(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function wn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (($e = a), rd(a, e));
        }
      id(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (ud(e), (e = e.sibling));
  }
  function ud(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (wn(e), e.flags & 2048 && Al(9, e, e.return));
        break;
      case 3:
        wn(e);
        break;
      case 12:
        wn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), eu(e))
          : wn(e);
        break;
      default:
        wn(e);
    }
  }
  function eu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (($e = a), rd(a, e));
        }
      id(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Al(8, t, t.return), eu(t));
          break;
        case 22:
          ((l = t.stateNode), l._visibility & 2 && ((l._visibility &= -3), eu(t)));
          break;
        default:
          eu(t);
      }
      e = e.sibling;
    }
  }
  function rd(e, t) {
    for (; $e !== null; ) {
      var l = $e;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Al(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          pn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), ($e = a));
      else
        e: for (l = e; $e !== null; ) {
          a = $e;
          var n = a.sibling,
            u = a.return;
          if ((kc(a), a === l)) {
            $e = null;
            break e;
          }
          if (n !== null) {
            ((n.return = u), ($e = n));
            break e;
          }
          $e = u;
        }
    }
  }
  var Bh = {
      getCacheForType: function (e) {
        var t = Pe(qe),
          l = t.data.get(e);
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
      },
      cacheSignal: function () {
        return Pe(qe).controller.signal;
      },
    },
    Uh = typeof WeakMap == 'function' ? WeakMap : Map,
    Ae = 0,
    Ue = null,
    ye = null,
    Se = 0,
    Ce = 0,
    xt = null,
    Cl = !1,
    Ga = !1,
    ms = !1,
    ul = 0,
    je = 0,
    Rl = 0,
    na = 0,
    vs = 0,
    Et = 0,
    Va = 0,
    Hn = null,
    ct = null,
    hs = !1,
    tu = 0,
    sd = 0,
    lu = 1 / 0,
    au = null,
    zl = null,
    Ke = 0,
    Dl = null,
    qa = null,
    rl = 0,
    gs = 0,
    ys = null,
    fd = null,
    Ln = 0,
    ps = null;
  function Tt() {
    return (Ae & 2) !== 0 && Se !== 0 ? Se & -Se : G.T !== null ? Ms() : Mf();
  }
  function od() {
    if (Et === 0)
      if ((Se & 536870912) === 0 || Ee) {
        var e = ci;
        ((ci <<= 1), (ci & 3932160) === 0 && (ci = 262144), (Et = e));
      } else Et = 536870912;
    return ((e = pt.current), e !== null && (e.flags |= 32), Et);
  }
  function dt(e, t, l) {
    (((e === Ue && (Ce === 2 || Ce === 9)) || e.cancelPendingCommit !== null) &&
      (Xa(e, 0), Ol(e, Se, Et, !1)),
      an(e, l),
      ((Ae & 2) === 0 || e !== Ue) &&
        (e === Ue && ((Ae & 2) === 0 && (na |= l), je === 4 && Ol(e, Se, Et, !1)), Vt(e)));
  }
  function cd(e, t, l) {
    if ((Ae & 6) !== 0) throw Error(E(327));
    var a = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || ln(e, t),
      n = a ? wh(e, t) : xs(e, t, !0),
      u = a;
    do {
      if (n === 0) {
        Ga && !a && Ol(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), u && !Nh(l))) {
          ((n = xs(e, t, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var p = 0;
          else
            ((p = e.pendingLanes & -536870913), (p = p !== 0 ? p : p & 536870912 ? 536870912 : 0));
          if (p !== 0) {
            t = p;
            e: {
              var A = e;
              n = Hn;
              var w = A.current.memoizedState.isDehydrated;
              if ((w && (Xa(A, p).flags |= 256), (p = xs(A, p, !1)), p !== 2)) {
                if (ms && !w) {
                  ((A.errorRecoveryDisabledLanes |= u), (na |= u), (n = 4));
                  break e;
                }
                ((u = ct), (ct = n), u !== null && (ct === null ? (ct = u) : ct.push.apply(ct, u)));
              }
              n = p;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (Xa(e, 0), Ol(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (u = n), u)) {
            case 0:
            case 1:
              throw Error(E(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ol(a, t, Et, !Cl);
              break e;
            case 2:
              ct = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(E(329));
          }
          if ((t & 62914560) === t && ((n = tu + 300 - lt()), 10 < n)) {
            if ((Ol(a, t, Et, !Cl), mi(a, 0, !0) !== 0)) break e;
            ((rl = t),
              (a.timeoutHandle = qd(
                dd.bind(null, a, l, ct, au, hs, t, Et, na, Va, Cl, u, 'Throttled', -0, 0),
                n
              )));
            break e;
          }
          dd(a, l, ct, au, hs, t, Et, na, Va, Cl, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Vt(e);
  }
  function dd(e, t, l, a, n, u, p, A, w, Q, W, ee, K, F) {
    if (
      ((e.timeoutHandle = -1), (ee = t.subtreeFlags), ee & 8192 || (ee & 16785408) === 16785408)
    ) {
      ((ee = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Kt,
      }),
        nd(t, u, ee));
      var re = (u & 62914560) === u ? tu - lt() : (u & 4194048) === u ? sd - lt() : 0;
      if (((re = y0(ee, re)), re !== null)) {
        ((rl = u),
          (e.cancelPendingCommit = re(xd.bind(null, e, t, u, l, a, n, p, A, w, W, ee, null, K, F))),
          Ol(e, u, p, !Q));
        return;
      }
    }
    xd(e, t, u, l, a, n, p, A, w);
  }
  function Nh(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!gt(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null)) ((l.return = t), (t = l));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Ol(e, t, l, a) {
    ((t &= ~vs),
      (t &= ~na),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var n = t; 0 < n; ) {
      var u = 31 - ht(n),
        p = 1 << u;
      ((a[u] = -1), (n &= ~p));
    }
    l !== 0 && Ef(e, l, t);
  }
  function nu() {
    return (Ae & 6) === 0 ? (Yn(0), !1) : !0;
  }
  function Ss() {
    if (ye !== null) {
      if (Ce === 0) var e = ye.return;
      else ((e = ye), (Wt = $l = null), wr(e), (Na = null), (xn = 0), (e = ye));
      for (; e !== null; ) (Xc(e.alternate, e), (e = e.return));
      ye = null;
    }
  }
  function Xa(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), Ih(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (rl = 0),
      Ss(),
      (Ue = e),
      (ye = l = Ft(e.current, null)),
      (Se = t),
      (Ce = 0),
      (xt = null),
      (Cl = !1),
      (Ga = ln(e, t)),
      (ms = !1),
      (Va = Et = vs = na = Rl = je = 0),
      (ct = Hn = null),
      (hs = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ht(a),
          u = 1 << n;
        ((t |= e[n]), (a &= ~u));
      }
    return ((ul = t), Ai(), l);
  }
  function md(e, t) {
    ((he = null),
      (G.H = zn),
      t === Ua || t === Ni
        ? ((t = Do()), (Ce = 3))
        : t === br
          ? ((t = Do()), (Ce = 4))
          : (Ce =
              t === kr
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (xt = t),
      ye === null && ((je = 1), Ji(e, Ct(t, e.current))));
  }
  function vd() {
    var e = pt.current;
    return e === null
      ? !0
      : (Se & 4194048) === Se
        ? Ot === null
        : (Se & 62914560) === Se || (Se & 536870912) !== 0
          ? e === Ot
          : !1;
  }
  function hd() {
    var e = G.H;
    return ((G.H = zn), e === null ? zn : e);
  }
  function gd() {
    var e = G.A;
    return ((G.A = Bh), e);
  }
  function iu() {
    ((je = 4),
      Cl || ((Se & 4194048) !== Se && pt.current !== null) || (Ga = !0),
      ((Rl & 134217727) === 0 && (na & 134217727) === 0) || Ue === null || Ol(Ue, Se, Et, !1));
  }
  function xs(e, t, l) {
    var a = Ae;
    Ae |= 2;
    var n = hd(),
      u = gd();
    ((Ue !== e || Se !== t) && ((au = null), Xa(e, t)), (t = !1));
    var p = je;
    e: do
      try {
        if (Ce !== 0 && ye !== null) {
          var A = ye,
            w = xt;
          switch (Ce) {
            case 8:
              (Ss(), (p = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              pt.current === null && (t = !0);
              var Q = Ce;
              if (((Ce = 0), (xt = null), Qa(e, A, w, Q), l && Ga)) {
                p = 0;
                break e;
              }
              break;
            default:
              ((Q = Ce), (Ce = 0), (xt = null), Qa(e, A, w, Q));
          }
        }
        (_h(), (p = je));
        break;
      } catch (W) {
        md(e, W);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Wt = $l = null),
      (Ae = a),
      (G.H = n),
      (G.A = u),
      ye === null && ((Ue = null), (Se = 0), Ai()),
      p
    );
  }
  function _h() {
    for (; ye !== null; ) yd(ye);
  }
  function wh(e, t) {
    var l = Ae;
    Ae |= 2;
    var a = hd(),
      n = gd();
    Ue !== e || Se !== t ? ((au = null), (lu = lt() + 500), Xa(e, t)) : (Ga = ln(e, t));
    e: do
      try {
        if (Ce !== 0 && ye !== null) {
          t = ye;
          var u = xt;
          t: switch (Ce) {
            case 1:
              ((Ce = 0), (xt = null), Qa(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (Ro(u)) {
                ((Ce = 0), (xt = null), pd(t));
                break;
              }
              ((t = function () {
                ((Ce !== 2 && Ce !== 9) || Ue !== e || (Ce = 7), Vt(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              Ce = 7;
              break e;
            case 4:
              Ce = 5;
              break e;
            case 7:
              Ro(u) ? ((Ce = 0), (xt = null), pd(t)) : ((Ce = 0), (xt = null), Qa(e, t, u, 7));
              break;
            case 5:
              var p = null;
              switch (ye.tag) {
                case 26:
                  p = ye.memoizedState;
                case 5:
                case 27:
                  var A = ye;
                  if (p ? am(p) : A.stateNode.complete) {
                    ((Ce = 0), (xt = null));
                    var w = A.sibling;
                    if (w !== null) ye = w;
                    else {
                      var Q = A.return;
                      Q !== null ? ((ye = Q), uu(Q)) : (ye = null);
                    }
                    break t;
                  }
              }
              ((Ce = 0), (xt = null), Qa(e, t, u, 5));
              break;
            case 6:
              ((Ce = 0), (xt = null), Qa(e, t, u, 6));
              break;
            case 8:
              (Ss(), (je = 6));
              break e;
            default:
              throw Error(E(462));
          }
        }
        Hh();
        break;
      } catch (W) {
        md(e, W);
      }
    while (!0);
    return (
      (Wt = $l = null),
      (G.H = a),
      (G.A = n),
      (Ae = l),
      ye !== null ? 0 : ((Ue = null), (Se = 0), Ai(), je)
    );
  }
  function Hh() {
    for (; ye !== null && !ui(); ) yd(ye);
  }
  function yd(e) {
    var t = Vc(e.alternate, e, ul);
    ((e.memoizedProps = e.pendingProps), t === null ? uu(e) : (ye = t));
  }
  function pd(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = wc(l, t, t.pendingProps, t.type, void 0, Se);
        break;
      case 11:
        t = wc(l, t, t.pendingProps, t.type.render, t.ref, Se);
        break;
      case 5:
        wr(t);
      default:
        (Xc(l, t), (t = ye = go(t, ul)), (t = Vc(l, t, ul)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? uu(e) : (ye = t));
  }
  function Qa(e, t, l, a) {
    ((Wt = $l = null), wr(t), (Na = null), (xn = 0));
    var n = t.return;
    try {
      if (Mh(e, n, t, l, Se)) {
        ((je = 1), Ji(e, Ct(l, e.current)), (ye = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((ye = n), u);
      ((je = 1), Ji(e, Ct(l, e.current)), (ye = null));
      return;
    }
    t.flags & 32768
      ? (Ee || a === 1
          ? (e = !0)
          : Ga || (Se & 536870912) !== 0
            ? (e = !1)
            : ((Cl = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = pt.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        Sd(t, e))
      : uu(t);
  }
  function uu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Sd(t, Cl);
        return;
      }
      e = t.return;
      var l = Rh(t.alternate, t, ul);
      if (l !== null) {
        ye = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ye = t;
        return;
      }
      ye = t = e;
    } while (t !== null);
    je === 0 && (je = 5);
  }
  function Sd(e, t) {
    do {
      var l = zh(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (ye = l));
        return;
      }
      if (
        ((l = e.return),
        l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ye = e;
        return;
      }
      ye = e = l;
    } while (e !== null);
    ((je = 6), (ye = null));
  }
  function xd(e, t, l, a, n, u, p, A, w) {
    e.cancelPendingCommit = null;
    do ru();
    while (Ke !== 0);
    if ((Ae & 6) !== 0) throw Error(E(327));
    if (t !== null) {
      if (t === e.current) throw Error(E(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= sr),
        hv(e, l, u, p, A, w),
        e === Ue && ((ye = Ue = null), (Se = 0)),
        (qa = t),
        (Dl = e),
        (rl = l),
        (gs = u),
        (ys = n),
        (fd = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Gh(oa, function () {
              return (Ad(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = G.T), (G.T = null), (n = Z.p), (Z.p = 2), (p = Ae), (Ae |= 4));
        try {
          Dh(e, t, l);
        } finally {
          ((Ae = p), (Z.p = n), (G.T = a));
        }
      }
      ((Ke = 1), Ed(), Td(), bd());
    }
  }
  function Ed() {
    if (Ke === 1) {
      Ke = 0;
      var e = Dl,
        t = qa,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ((l = G.T), (G.T = null));
        var a = Z.p;
        Z.p = 2;
        var n = Ae;
        Ae |= 4;
        try {
          td(t, e);
          var u = Us,
            p = uo(e.containerInfo),
            A = u.focusedElem,
            w = u.selectionRange;
          if (p !== A && A && A.ownerDocument && io(A.ownerDocument.documentElement, A)) {
            if (w !== null && ar(A)) {
              var Q = w.start,
                W = w.end;
              if ((W === void 0 && (W = Q), 'selectionStart' in A))
                ((A.selectionStart = Q), (A.selectionEnd = Math.min(W, A.value.length)));
              else {
                var ee = A.ownerDocument || document,
                  K = (ee && ee.defaultView) || window;
                if (K.getSelection) {
                  var F = K.getSelection(),
                    re = A.textContent.length,
                    de = Math.min(w.start, re),
                    Oe = w.end === void 0 ? de : Math.min(w.end, re);
                  !F.extend && de > Oe && ((p = Oe), (Oe = de), (de = p));
                  var V = no(A, de),
                    j = no(A, Oe);
                  if (
                    V &&
                    j &&
                    (F.rangeCount !== 1 ||
                      F.anchorNode !== V.node ||
                      F.anchorOffset !== V.offset ||
                      F.focusNode !== j.node ||
                      F.focusOffset !== j.offset)
                  ) {
                    var X = ee.createRange();
                    (X.setStart(V.node, V.offset),
                      F.removeAllRanges(),
                      de > Oe
                        ? (F.addRange(X), F.extend(j.node, j.offset))
                        : (X.setEnd(j.node, j.offset), F.addRange(X)));
                  }
                }
              }
            }
            for (ee = [], F = A; (F = F.parentNode); )
              F.nodeType === 1 && ee.push({ element: F, left: F.scrollLeft, top: F.scrollTop });
            for (typeof A.focus == 'function' && A.focus(), A = 0; A < ee.length; A++) {
              var P = ee[A];
              ((P.element.scrollLeft = P.left), (P.element.scrollTop = P.top));
            }
          }
          ((Su = !!Bs), (Us = Bs = null));
        } finally {
          ((Ae = n), (Z.p = a), (G.T = l));
        }
      }
      ((e.current = t), (Ke = 2));
    }
  }
  function Td() {
    if (Ke === 2) {
      Ke = 0;
      var e = Dl,
        t = qa,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = G.T), (G.T = null));
        var a = Z.p;
        Z.p = 2;
        var n = Ae;
        Ae |= 4;
        try {
          Wc(e, t.alternate, t);
        } finally {
          ((Ae = n), (Z.p = a), (G.T = l));
        }
      }
      Ke = 3;
    }
  }
  function bd() {
    if (Ke === 4 || Ke === 3) {
      ((Ke = 0), ri());
      var e = Dl,
        t = qa,
        l = rl,
        a = fd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ke = 5)
        : ((Ke = 0), (qa = Dl = null), Md(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (zl = null),
        Yu(l),
        (t = t.stateNode),
        vt && typeof vt.onCommitFiberRoot == 'function')
      )
        try {
          vt.onCommitFiberRoot(tn, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = G.T), (n = Z.p), (Z.p = 2), (G.T = null));
        try {
          for (var u = e.onRecoverableError, p = 0; p < a.length; p++) {
            var A = a[p];
            u(A.value, { componentStack: A.stack });
          }
        } finally {
          ((G.T = t), (Z.p = n));
        }
      }
      ((rl & 3) !== 0 && ru(),
        Vt(e),
        (n = e.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0 ? (e === ps ? Ln++ : ((Ln = 0), (ps = e))) : (Ln = 0),
        Yn(0));
    }
  }
  function Md(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), pn(t)));
  }
  function ru() {
    return (Ed(), Td(), bd(), Ad());
  }
  function Ad() {
    if (Ke !== 5) return !1;
    var e = Dl,
      t = gs;
    gs = 0;
    var l = Yu(rl),
      a = G.T,
      n = Z.p;
    try {
      ((Z.p = 32 > l ? 32 : l), (G.T = null), (l = ys), (ys = null));
      var u = Dl,
        p = rl;
      if (((Ke = 0), (qa = Dl = null), (rl = 0), (Ae & 6) !== 0)) throw Error(E(331));
      var A = Ae;
      if (
        ((Ae |= 4),
        ud(u.current),
        ad(u, u.current, p, l),
        (Ae = A),
        Yn(0, !1),
        vt && typeof vt.onPostCommitFiberRoot == 'function')
      )
        try {
          vt.onPostCommitFiberRoot(tn, u);
        } catch {}
      return !0;
    } finally {
      ((Z.p = n), (G.T = a), Md(e, t));
    }
  }
  function Cd(e, t, l) {
    ((t = Ct(l, t)),
      (t = Wr(e.stateNode, t, 2)),
      (e = Tl(e, t, 2)),
      e !== null && (an(e, 2), Vt(e)));
  }
  function Re(e, t, l) {
    if (e.tag === 3) Cd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Cd(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (zl === null || !zl.has(a)))
          ) {
            ((e = Ct(l, e)),
              (l = Rc(2)),
              (a = Tl(t, l, 2)),
              a !== null && (zc(l, a, t, e), an(a, 2), Vt(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Es(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Uh();
      var n = new Set();
      a.set(t, n);
    } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
    n.has(l) || ((ms = !0), n.add(l), (e = Lh.bind(null, e, t, l)), t.then(e, e));
  }
  function Lh(e, t, l) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      Ue === e &&
        (Se & l) === l &&
        (je === 4 || (je === 3 && (Se & 62914560) === Se && 300 > lt() - tu)
          ? (Ae & 2) === 0 && Xa(e, 0)
          : (vs |= l),
        Va === Se && (Va = 0)),
      Vt(e));
  }
  function Rd(e, t) {
    (t === 0 && (t = xf()), (e = Kl(e, t)), e !== null && (an(e, t), Vt(e)));
  }
  function Yh(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), Rd(e, l));
  }
  function jh(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(E(314));
    }
    (a !== null && a.delete(t), Rd(e, l));
  }
  function Gh(e, t) {
    return fa(e, t);
  }
  var su = null,
    Za = null,
    Ts = !1,
    fu = !1,
    bs = !1,
    Bl = 0;
  function Vt(e) {
    (e !== Za && e.next === null && (Za === null ? (su = Za = e) : (Za = Za.next = e)),
      (fu = !0),
      Ts || ((Ts = !0), qh()));
  }
  function Yn(e, t) {
    if (!bs && fu) {
      bs = !0;
      do
        for (var l = !1, a = su; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var p = a.suspendedLanes,
                A = a.pingedLanes;
              ((u = (1 << (31 - ht(42 | e) + 1)) - 1),
                (u &= n & ~(p & ~A)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((l = !0), Bd(a, u));
          } else
            ((u = Se),
              (u = mi(
                a,
                a === Ue ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || ln(a, u) || ((l = !0), Bd(a, u)));
          a = a.next;
        }
      while (l);
      bs = !1;
    }
  }
  function Vh() {
    zd();
  }
  function zd() {
    fu = Ts = !1;
    var e = 0;
    Bl !== 0 && Ph() && (e = Bl);
    for (var t = lt(), l = null, a = su; a !== null; ) {
      var n = a.next,
        u = Dd(a, t);
      (u === 0
        ? ((a.next = null), l === null ? (su = n) : (l.next = n), n === null && (Za = l))
        : ((l = a), (e !== 0 || (u & 3) !== 0) && (fu = !0)),
        (a = n));
    }
    ((Ke !== 0 && Ke !== 5) || Yn(e), Bl !== 0 && (Bl = 0));
  }
  function Dd(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var p = 31 - ht(u),
        A = 1 << p,
        w = n[p];
      (w === -1
        ? ((A & l) === 0 || (A & a) !== 0) && (n[p] = vv(A, t))
        : w <= t && (e.expiredLanes |= A),
        (u &= ~A));
    }
    if (
      ((t = Ue),
      (l = Se),
      (l = mi(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (a = e.callbackNode),
      l === 0 || (e === t && (Ce === 2 || Ce === 9)) || e.cancelPendingCommit !== null)
    )
      return (a !== null && a !== null && Yl(a), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((l & 3) === 0 || ln(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && Yl(a), Yu(l))) {
        case 2:
        case 8:
          l = fi;
          break;
        case 32:
          l = oa;
          break;
        case 268435456:
          l = Gl;
          break;
        default:
          l = oa;
      }
      return (
        (a = Od.bind(null, e)),
        (l = fa(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && Yl(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Od(e, t) {
    if (Ke !== 0 && Ke !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (ru() && e.callbackNode !== l) return null;
    var a = Se;
    return (
      (a = mi(e, e === Ue ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      a === 0
        ? null
        : (cd(e, a, t),
          Dd(e, lt()),
          e.callbackNode != null && e.callbackNode === l ? Od.bind(null, e) : null)
    );
  }
  function Bd(e, t) {
    if (ru()) return null;
    cd(e, t, !0);
  }
  function qh() {
    e0(function () {
      (Ae & 6) !== 0 ? fa(jl, Vh) : zd();
    });
  }
  function Ms() {
    if (Bl === 0) {
      var e = Oa;
      (e === 0 && ((e = oi), (oi <<= 1), (oi & 261888) === 0 && (oi = 256)), (Bl = e));
    }
    return Bl;
  }
  function Ud(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : yi('' + e);
  }
  function Nd(e, t) {
    var l = t.ownerDocument.createElement('input');
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute('form', e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function Xh(e, t, l, a, n) {
    if (t === 'submit' && l && l.stateNode === n) {
      var u = Ud((n[ut] || null).action),
        p = a.submitter;
      p &&
        ((t = (t = p[ut] || null) ? Ud(t.formAction) : p.getAttribute('formAction')),
        t !== null && ((u = t), (p = null)));
      var A = new Ei('action', 'action', null, a, n);
      e.push({
        event: A,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Bl !== 0) {
                  var w = p ? Nd(n, p) : new FormData(n);
                  Qr(l, { pending: !0, data: w, method: n.method, action: u }, null, w);
                }
              } else
                typeof u == 'function' &&
                  (A.preventDefault(),
                  (w = p ? Nd(n, p) : new FormData(n)),
                  Qr(l, { pending: !0, data: w, method: n.method, action: u }, u, w));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var As = 0; As < rr.length; As++) {
    var Cs = rr[As],
      Qh = Cs.toLowerCase(),
      Zh = Cs[0].toUpperCase() + Cs.slice(1);
    _t(Qh, 'on' + Zh);
  }
  (_t(fo, 'onAnimationEnd'),
    _t(oo, 'onAnimationIteration'),
    _t(co, 'onAnimationStart'),
    _t('dblclick', 'onDoubleClick'),
    _t('focusin', 'onFocus'),
    _t('focusout', 'onBlur'),
    _t(rh, 'onTransitionRun'),
    _t(sh, 'onTransitionStart'),
    _t(fh, 'onTransitionCancel'),
    _t(mo, 'onTransitionEnd'),
    ga('onMouseEnter', ['mouseout', 'mouseover']),
    ga('onMouseLeave', ['mouseout', 'mouseover']),
    ga('onPointerEnter', ['pointerout', 'pointerover']),
    ga('onPointerLeave', ['pointerout', 'pointerover']),
    ql('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    ql(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    ql('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    ql('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    ql(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    ql(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var jn =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Kh = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(jn)
    );
  function _d(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var p = a.length - 1; 0 <= p; p--) {
            var A = a[p],
              w = A.instance,
              Q = A.currentTarget;
            if (((A = A.listener), w !== u && n.isPropagationStopped())) break e;
            ((u = A), (n.currentTarget = Q));
            try {
              u(n);
            } catch (W) {
              Mi(W);
            }
            ((n.currentTarget = null), (u = w));
          }
        else
          for (p = 0; p < a.length; p++) {
            if (
              ((A = a[p]),
              (w = A.instance),
              (Q = A.currentTarget),
              (A = A.listener),
              w !== u && n.isPropagationStopped())
            )
              break e;
            ((u = A), (n.currentTarget = Q));
            try {
              u(n);
            } catch (W) {
              Mi(W);
            }
            ((n.currentTarget = null), (u = w));
          }
      }
    }
  }
  function pe(e, t) {
    var l = t[ju];
    l === void 0 && (l = t[ju] = new Set());
    var a = e + '__bubble';
    l.has(a) || (wd(t, e, 2, !1), l.add(a));
  }
  function Rs(e, t, l) {
    var a = 0;
    (t && (a |= 4), wd(l, e, a, t));
  }
  var ou = '_reactListening' + Math.random().toString(36).slice(2);
  function zs(e) {
    if (!e[ou]) {
      ((e[ou] = !0),
        Rf.forEach(function (l) {
          l !== 'selectionchange' && (Kh.has(l) || Rs(l, !1, e), Rs(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ou] || ((t[ou] = !0), Rs('selectionchange', !1, t));
    }
  }
  function wd(e, t, l, a) {
    switch (om(t)) {
      case 2:
        var n = x0;
        break;
      case 8:
        n = E0;
        break;
      default:
        n = Xs;
    }
    ((l = n.bind(null, t, l, e)),
      (n = void 0),
      !Fu || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
          ? e.addEventListener(t, l, { passive: n })
          : e.addEventListener(t, l, !1));
  }
  function Ds(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var p = a.tag;
        if (p === 3 || p === 4) {
          var A = a.stateNode.containerInfo;
          if (A === n) break;
          if (p === 4)
            for (p = a.return; p !== null; ) {
              var w = p.tag;
              if ((w === 3 || w === 4) && p.stateNode.containerInfo === n) return;
              p = p.return;
            }
          for (; A !== null; ) {
            if (((p = ma(A)), p === null)) return;
            if (((w = p.tag), w === 5 || w === 6 || w === 26 || w === 27)) {
              a = u = p;
              continue e;
            }
            A = A.parentNode;
          }
        }
        a = a.return;
      }
    jf(function () {
      var Q = u,
        W = Ku(l),
        ee = [];
      e: {
        var K = vo.get(e);
        if (K !== void 0) {
          var F = Ei,
            re = e;
          switch (e) {
            case 'keypress':
              if (Si(l) === 0) break e;
            case 'keydown':
            case 'keyup':
              F = jv;
              break;
            case 'focusin':
              ((re = 'focus'), (F = Pu));
              break;
            case 'focusout':
              ((re = 'blur'), (F = Pu));
              break;
            case 'beforeblur':
            case 'afterblur':
              F = Pu;
              break;
            case 'click':
              if (l.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              F = qf;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              F = Rv;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              F = qv;
              break;
            case fo:
            case oo:
            case co:
              F = Ov;
              break;
            case mo:
              F = Qv;
              break;
            case 'scroll':
            case 'scrollend':
              F = Av;
              break;
            case 'wheel':
              F = Kv;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              F = Uv;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              F = Qf;
              break;
            case 'toggle':
            case 'beforetoggle':
              F = Fv;
          }
          var de = (t & 4) !== 0,
            Oe = !de && (e === 'scroll' || e === 'scrollend'),
            V = de ? (K !== null ? K + 'Capture' : null) : K;
          de = [];
          for (var j = Q, X; j !== null; ) {
            var P = j;
            if (
              ((X = P.stateNode),
              (P = P.tag),
              (P !== 5 && P !== 26 && P !== 27) ||
                X === null ||
                V === null ||
                ((P = rn(j, V)), P != null && de.push(Gn(j, P, X))),
              Oe)
            )
              break;
            j = j.return;
          }
          0 < de.length && ((K = new F(K, re, null, l, W)), ee.push({ event: K, listeners: de }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((K = e === 'mouseover' || e === 'pointerover'),
            (F = e === 'mouseout' || e === 'pointerout'),
            K && l !== Zu && (re = l.relatedTarget || l.fromElement) && (ma(re) || re[da]))
          )
            break e;
          if (
            (F || K) &&
            ((K =
              W.window === W
                ? W
                : (K = W.ownerDocument)
                  ? K.defaultView || K.parentWindow
                  : window),
            F
              ? ((re = l.relatedTarget || l.toElement),
                (F = Q),
                (re = re ? ma(re) : null),
                re !== null &&
                  ((Oe = i(re)), (de = re.tag), re !== Oe || (de !== 5 && de !== 27 && de !== 6)) &&
                  (re = null))
              : ((F = null), (re = Q)),
            F !== re)
          ) {
            if (
              ((de = qf),
              (P = 'onMouseLeave'),
              (V = 'onMouseEnter'),
              (j = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((de = Qf), (P = 'onPointerLeave'), (V = 'onPointerEnter'), (j = 'pointer')),
              (Oe = F == null ? K : un(F)),
              (X = re == null ? K : un(re)),
              (K = new de(P, j + 'leave', F, l, W)),
              (K.target = Oe),
              (K.relatedTarget = X),
              (P = null),
              ma(W) === Q &&
                ((de = new de(V, j + 'enter', re, l, W)),
                (de.target = X),
                (de.relatedTarget = Oe),
                (P = de)),
              (Oe = P),
              F && re)
            )
              t: {
                for (de = Jh, V = F, j = re, X = 0, P = V; P; P = de(P)) X++;
                P = 0;
                for (var oe = j; oe; oe = de(oe)) P++;
                for (; 0 < X - P; ) ((V = de(V)), X--);
                for (; 0 < P - X; ) ((j = de(j)), P--);
                for (; X--; ) {
                  if (V === j || (j !== null && V === j.alternate)) {
                    de = V;
                    break t;
                  }
                  ((V = de(V)), (j = de(j)));
                }
                de = null;
              }
            else de = null;
            (F !== null && Hd(ee, K, F, de, !1),
              re !== null && Oe !== null && Hd(ee, Oe, re, de, !0));
          }
        }
        e: {
          if (
            ((K = Q ? un(Q) : window),
            (F = K.nodeName && K.nodeName.toLowerCase()),
            F === 'select' || (F === 'input' && K.type === 'file'))
          )
            var be = Pf;
          else if (Wf(K))
            if (If) be = nh;
            else {
              be = lh;
              var se = th;
            }
          else
            ((F = K.nodeName),
              !F || F.toLowerCase() !== 'input' || (K.type !== 'checkbox' && K.type !== 'radio')
                ? Q && Qu(Q.elementType) && (be = Pf)
                : (be = ah));
          if (be && (be = be(e, Q))) {
            kf(ee, be, l, W);
            break e;
          }
          (se && se(e, K, Q),
            e === 'focusout' &&
              Q &&
              K.type === 'number' &&
              Q.memoizedProps.value != null &&
              Xu(K, 'number', K.value));
        }
        switch (((se = Q ? un(Q) : window), e)) {
          case 'focusin':
            (Wf(se) || se.contentEditable === 'true') && ((Ta = se), (nr = Q), (hn = null));
            break;
          case 'focusout':
            hn = nr = Ta = null;
            break;
          case 'mousedown':
            ir = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((ir = !1), ro(ee, l, W));
            break;
          case 'selectionchange':
            if (uh) break;
          case 'keydown':
          case 'keyup':
            ro(ee, l, W);
        }
        var ge;
        if (er)
          e: {
            switch (e) {
              case 'compositionstart':
                var xe = 'onCompositionStart';
                break e;
              case 'compositionend':
                xe = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                xe = 'onCompositionUpdate';
                break e;
            }
            xe = void 0;
          }
        else
          Ea
            ? Ff(e, l) && (xe = 'onCompositionEnd')
            : e === 'keydown' && l.keyCode === 229 && (xe = 'onCompositionStart');
        (xe &&
          (Zf &&
            l.locale !== 'ko' &&
            (Ea || xe !== 'onCompositionStart'
              ? xe === 'onCompositionEnd' && Ea && (ge = Gf())
              : ((hl = W), ($u = 'value' in hl ? hl.value : hl.textContent), (Ea = !0))),
          (se = cu(Q, xe)),
          0 < se.length &&
            ((xe = new Xf(xe, e, null, l, W)),
            ee.push({ event: xe, listeners: se }),
            ge ? (xe.data = ge) : ((ge = $f(l)), ge !== null && (xe.data = ge)))),
          (ge = Wv ? kv(e, l) : Pv(e, l)) &&
            ((xe = cu(Q, 'onBeforeInput')),
            0 < xe.length &&
              ((se = new Xf('onBeforeInput', 'beforeinput', null, l, W)),
              ee.push({ event: se, listeners: xe }),
              (se.data = ge))),
          Xh(ee, e, Q, l, W));
      }
      _d(ee, t);
    });
  }
  function Gn(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function cu(e, t) {
    for (var l = t + 'Capture', a = []; e !== null; ) {
      var n = e,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = rn(e, l)),
          n != null && a.unshift(Gn(e, n, u)),
          (n = rn(e, t)),
          n != null && a.push(Gn(e, n, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function Jh(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Hd(e, t, l, a, n) {
    for (var u = t._reactName, p = []; l !== null && l !== a; ) {
      var A = l,
        w = A.alternate,
        Q = A.stateNode;
      if (((A = A.tag), w !== null && w === a)) break;
      ((A !== 5 && A !== 26 && A !== 27) ||
        Q === null ||
        ((w = Q),
        n
          ? ((Q = rn(l, u)), Q != null && p.unshift(Gn(l, Q, w)))
          : n || ((Q = rn(l, u)), Q != null && p.push(Gn(l, Q, w)))),
        (l = l.return));
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Fh = /\r\n?/g,
    $h = /\u0000|\uFFFD/g;
  function Ld(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Fh,
        `
`
      )
      .replace($h, '');
  }
  function Yd(e, t) {
    return ((t = Ld(t)), Ld(e) === t);
  }
  function De(e, t, l, a, n, u) {
    switch (l) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || pa(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && pa(e, '' + a);
        break;
      case 'className':
        hi(e, 'class', a);
        break;
      case 'tabIndex':
        hi(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        hi(e, l, a);
        break;
      case 'style':
        Lf(e, a, u);
        break;
      case 'data':
        if (t !== 'object') {
          hi(e, 'data', a);
          break;
        }
      case 'src':
      case 'href':
        if (a === '' && (t !== 'a' || l !== 'href')) {
          e.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == 'function' || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(l);
          break;
        }
        ((a = yi('' + a)), e.setAttribute(l, a));
        break;
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == 'function' &&
            (l === 'formAction'
              ? (t !== 'input' && De(e, t, 'name', n.name, n, null),
                De(e, t, 'formEncType', n.formEncType, n, null),
                De(e, t, 'formMethod', n.formMethod, n, null),
                De(e, t, 'formTarget', n.formTarget, n, null))
              : (De(e, t, 'encType', n.encType, n, null),
                De(e, t, 'method', n.method, n, null),
                De(e, t, 'target', n.target, n, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(l);
          break;
        }
        ((a = yi('' + a)), e.setAttribute(l, a));
        break;
      case 'onClick':
        a != null && (e.onclick = Kt);
        break;
      case 'onScroll':
        a != null && pe('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && pe('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(E(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(E(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'multiple':
        e.multiple = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'muted':
        e.muted = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (a == null || typeof a == 'function' || typeof a == 'boolean' || typeof a == 'symbol') {
          e.removeAttribute('xlink:href');
          break;
        }
        ((l = yi('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        a != null && typeof a != 'function' && typeof a != 'symbol'
          ? e.setAttribute(l, '' + a)
          : e.removeAttribute(l);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        a && typeof a != 'function' && typeof a != 'symbol'
          ? e.setAttribute(l, '')
          : e.removeAttribute(l);
        break;
      case 'capture':
      case 'download':
        a === !0
          ? e.setAttribute(l, '')
          : a !== !1 && a != null && typeof a != 'function' && typeof a != 'symbol'
            ? e.setAttribute(l, a)
            : e.removeAttribute(l);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        a != null && typeof a != 'function' && typeof a != 'symbol' && !isNaN(a) && 1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case 'rowSpan':
      case 'start':
        a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case 'popover':
        (pe('beforetoggle', e), pe('toggle', e), vi(e, 'popover', a));
        break;
      case 'xlinkActuate':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        Zt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        Zt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        Zt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        vi(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) || (l[0] !== 'o' && l[0] !== 'O') || (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = bv.get(l) || l), vi(e, l, a));
    }
  }
  function Os(e, t, l, a, n, u) {
    switch (l) {
      case 'style':
        Lf(e, a, u);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(E(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(E(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'children':
        typeof a == 'string'
          ? pa(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && pa(e, '' + a);
        break;
      case 'onScroll':
        a != null && pe('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && pe('scrollend', e);
        break;
      case 'onClick':
        a != null && (e.onclick = Kt);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!zf.hasOwnProperty(l))
          e: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((n = l.endsWith('Capture')),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (u = e[ut] || null),
              (u = u != null ? u[l] : null),
              typeof u == 'function' && e.removeEventListener(t, u, n),
              typeof a == 'function')
            ) {
              (typeof u != 'function' &&
                u !== null &&
                (l in e ? (e[l] = null) : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n));
              break e;
            }
            l in e ? (e[l] = a) : a === !0 ? e.setAttribute(l, '') : vi(e, l, a);
          }
    }
  }
  function et(e, t, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        (pe('error', e), pe('load', e));
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var p = l[u];
            if (p != null)
              switch (u) {
                case 'src':
                  a = !0;
                  break;
                case 'srcSet':
                  n = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(E(137, t));
                default:
                  De(e, t, u, p, l, null);
              }
          }
        (n && De(e, t, 'srcSet', l.srcSet, l, null), a && De(e, t, 'src', l.src, l, null));
        return;
      case 'input':
        pe('invalid', e);
        var A = (u = p = n = null),
          w = null,
          Q = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var W = l[a];
            if (W != null)
              switch (a) {
                case 'name':
                  n = W;
                  break;
                case 'type':
                  p = W;
                  break;
                case 'checked':
                  w = W;
                  break;
                case 'defaultChecked':
                  Q = W;
                  break;
                case 'value':
                  u = W;
                  break;
                case 'defaultValue':
                  A = W;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (W != null) throw Error(E(137, t));
                  break;
                default:
                  De(e, t, a, W, l, null);
              }
          }
        Nf(e, u, A, w, Q, p, n, !1);
        return;
      case 'select':
        (pe('invalid', e), (a = p = u = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((A = l[n]), A != null))
            switch (n) {
              case 'value':
                u = A;
                break;
              case 'defaultValue':
                p = A;
                break;
              case 'multiple':
                a = A;
              default:
                De(e, t, n, A, l, null);
            }
        ((t = u),
          (l = p),
          (e.multiple = !!a),
          t != null ? ya(e, !!a, t, !1) : l != null && ya(e, !!a, l, !0));
        return;
      case 'textarea':
        (pe('invalid', e), (u = n = a = null));
        for (p in l)
          if (l.hasOwnProperty(p) && ((A = l[p]), A != null))
            switch (p) {
              case 'value':
                a = A;
                break;
              case 'defaultValue':
                n = A;
                break;
              case 'children':
                u = A;
                break;
              case 'dangerouslySetInnerHTML':
                if (A != null) throw Error(E(91));
                break;
              default:
                De(e, t, p, A, l, null);
            }
        wf(e, a, n, u);
        return;
      case 'option':
        for (w in l)
          if (l.hasOwnProperty(w) && ((a = l[w]), a != null))
            switch (w) {
              case 'selected':
                e.selected = a && typeof a != 'function' && typeof a != 'symbol';
                break;
              default:
                De(e, t, w, a, l, null);
            }
        return;
      case 'dialog':
        (pe('beforetoggle', e), pe('toggle', e), pe('cancel', e), pe('close', e));
        break;
      case 'iframe':
      case 'object':
        pe('load', e);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < jn.length; a++) pe(jn[a], e);
        break;
      case 'image':
        (pe('error', e), pe('load', e));
        break;
      case 'details':
        pe('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (pe('error', e), pe('load', e));
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (Q in l)
          if (l.hasOwnProperty(Q) && ((a = l[Q]), a != null))
            switch (Q) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(E(137, t));
              default:
                De(e, t, Q, a, l, null);
            }
        return;
      default:
        if (Qu(t)) {
          for (W in l)
            l.hasOwnProperty(W) && ((a = l[W]), a !== void 0 && Os(e, t, W, a, l, void 0));
          return;
        }
    }
    for (A in l) l.hasOwnProperty(A) && ((a = l[A]), a != null && De(e, t, A, a, l, null));
  }
  function Wh(e, t, l, a) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var n = null,
          u = null,
          p = null,
          A = null,
          w = null,
          Q = null,
          W = null;
        for (F in l) {
          var ee = l[F];
          if (l.hasOwnProperty(F) && ee != null)
            switch (F) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                w = ee;
              default:
                a.hasOwnProperty(F) || De(e, t, F, null, a, ee);
            }
        }
        for (var K in a) {
          var F = a[K];
          if (((ee = l[K]), a.hasOwnProperty(K) && (F != null || ee != null)))
            switch (K) {
              case 'type':
                u = F;
                break;
              case 'name':
                n = F;
                break;
              case 'checked':
                Q = F;
                break;
              case 'defaultChecked':
                W = F;
                break;
              case 'value':
                p = F;
                break;
              case 'defaultValue':
                A = F;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (F != null) throw Error(E(137, t));
                break;
              default:
                F !== ee && De(e, t, K, F, a, ee);
            }
        }
        qu(e, p, A, w, Q, W, u, n);
        return;
      case 'select':
        F = p = A = K = null;
        for (u in l)
          if (((w = l[u]), l.hasOwnProperty(u) && w != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                F = w;
              default:
                a.hasOwnProperty(u) || De(e, t, u, null, a, w);
            }
        for (n in a)
          if (((u = a[n]), (w = l[n]), a.hasOwnProperty(n) && (u != null || w != null)))
            switch (n) {
              case 'value':
                K = u;
                break;
              case 'defaultValue':
                A = u;
                break;
              case 'multiple':
                p = u;
              default:
                u !== w && De(e, t, n, u, a, w);
            }
        ((t = A),
          (l = p),
          (a = F),
          K != null
            ? ya(e, !!l, K, !1)
            : !!a != !!l && (t != null ? ya(e, !!l, t, !0) : ya(e, !!l, l ? [] : '', !1)));
        return;
      case 'textarea':
        F = K = null;
        for (A in l)
          if (((n = l[A]), l.hasOwnProperty(A) && n != null && !a.hasOwnProperty(A)))
            switch (A) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                De(e, t, A, null, a, n);
            }
        for (p in a)
          if (((n = a[p]), (u = l[p]), a.hasOwnProperty(p) && (n != null || u != null)))
            switch (p) {
              case 'value':
                K = n;
                break;
              case 'defaultValue':
                F = n;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (n != null) throw Error(E(91));
                break;
              default:
                n !== u && De(e, t, p, n, a, u);
            }
        _f(e, K, F);
        return;
      case 'option':
        for (var re in l)
          if (((K = l[re]), l.hasOwnProperty(re) && K != null && !a.hasOwnProperty(re)))
            switch (re) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                De(e, t, re, null, a, K);
            }
        for (w in a)
          if (((K = a[w]), (F = l[w]), a.hasOwnProperty(w) && K !== F && (K != null || F != null)))
            switch (w) {
              case 'selected':
                e.selected = K && typeof K != 'function' && typeof K != 'symbol';
                break;
              default:
                De(e, t, w, K, a, F);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var de in l)
          ((K = l[de]),
            l.hasOwnProperty(de) && K != null && !a.hasOwnProperty(de) && De(e, t, de, null, a, K));
        for (Q in a)
          if (((K = a[Q]), (F = l[Q]), a.hasOwnProperty(Q) && K !== F && (K != null || F != null)))
            switch (Q) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (K != null) throw Error(E(137, t));
                break;
              default:
                De(e, t, Q, K, a, F);
            }
        return;
      default:
        if (Qu(t)) {
          for (var Oe in l)
            ((K = l[Oe]),
              l.hasOwnProperty(Oe) &&
                K !== void 0 &&
                !a.hasOwnProperty(Oe) &&
                Os(e, t, Oe, void 0, a, K));
          for (W in a)
            ((K = a[W]),
              (F = l[W]),
              !a.hasOwnProperty(W) ||
                K === F ||
                (K === void 0 && F === void 0) ||
                Os(e, t, W, K, a, F));
          return;
        }
    }
    for (var V in l)
      ((K = l[V]),
        l.hasOwnProperty(V) && K != null && !a.hasOwnProperty(V) && De(e, t, V, null, a, K));
    for (ee in a)
      ((K = a[ee]),
        (F = l[ee]),
        !a.hasOwnProperty(ee) || K === F || (K == null && F == null) || De(e, t, ee, K, a, F));
  }
  function jd(e) {
    switch (e) {
      case 'css':
      case 'script':
      case 'font':
      case 'img':
      case 'image':
      case 'input':
      case 'link':
        return !0;
      default:
        return !1;
    }
  }
  function kh() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType('resource'), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          u = n.transferSize,
          p = n.initiatorType,
          A = n.duration;
        if (u && A && jd(p)) {
          for (p = 0, A = n.responseEnd, a += 1; a < l.length; a++) {
            var w = l[a],
              Q = w.startTime;
            if (Q > A) break;
            var W = w.transferSize,
              ee = w.initiatorType;
            W && jd(ee) && ((w = w.responseEnd), (p += W * (w < A ? 1 : (A - Q) / (w - Q))));
          }
          if ((--a, (t += (8 * (u + p)) / (n.duration / 1e3)), e++, 10 < e)) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && ((e = navigator.connection.downlink), typeof e == 'number')
      ? e
      : 5;
  }
  var Bs = null,
    Us = null;
  function du(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Gd(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Vd(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function Ns(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var _s = null;
  function Ph() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === _s ? !1 : ((_s = e), !0)) : ((_s = null), !1);
  }
  var qd = typeof setTimeout == 'function' ? setTimeout : void 0,
    Ih = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Xd = typeof Promise == 'function' ? Promise : void 0,
    e0 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Xd < 'u'
          ? function (e) {
              return Xd.resolve(null).then(e).catch(t0);
            }
          : qd;
  function t0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ul(e) {
    return e === 'head';
  }
  function Qd(e, t) {
    var l = t,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((e.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === '/$' || l === '/&')) {
          if (a === 0) {
            (e.removeChild(n), $a(t));
            return;
          }
          a--;
        } else if (l === '$' || l === '$?' || l === '$~' || l === '$!' || l === '&') a++;
        else if (l === 'html') Vn(e.ownerDocument.documentElement);
        else if (l === 'head') {
          ((l = e.ownerDocument.head), Vn(l));
          for (var u = l.firstChild; u; ) {
            var p = u.nextSibling,
              A = u.nodeName;
            (u[nn] ||
              A === 'SCRIPT' ||
              A === 'STYLE' ||
              (A === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              l.removeChild(u),
              (u = p));
          }
        } else l === 'body' && Vn(e.ownerDocument.body);
      l = n;
    } while (l);
    $a(t);
  }
  function Zd(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? t
            ? ((l._stashedDisplay = l.style.display), (l.style.display = 'none'))
            : ((l.style.display = l._stashedDisplay || ''),
              l.getAttribute('style') === '' && l.removeAttribute('style'))
          : l.nodeType === 3 &&
            (t
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ''))
              : (l.nodeValue = l._stashedText || '')),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === '/$')) {
          if (e === 0) break;
          e--;
        } else (l !== '$' && l !== '$?' && l !== '$~' && l !== '$!') || e++;
      l = a;
    } while (l);
  }
  function ws(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (ws(l), Gu(l));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(l);
    }
  }
  function l0(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (a) {
        if (!e[nn])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((u = e.getAttribute('rel')),
                u === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                u !== n.rel ||
                e.getAttribute('href') !== (n.href == null || n.href === '' ? null : n.href) ||
                e.getAttribute('crossorigin') !== (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute('title') !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((u = e.getAttribute('src')),
                (u !== (n.src == null ? null : n.src) ||
                  e.getAttribute('type') !== (n.type == null ? null : n.type) ||
                  e.getAttribute('crossorigin') !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var u = n.name == null ? null : '' + n.name;
        if (n.type === 'hidden' && e.getAttribute('name') === u) return e;
      } else return e;
      if (((e = Bt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function a0(e, t, l) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !l) ||
        ((e = Bt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Kd(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
        ((e = Bt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Hs(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function Ls(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
  }
  function n0(e, t) {
    var l = e.ownerDocument;
    if (e.data === '$~') e._reactRetry = t;
    else if (e.data !== '$?' || l.readyState !== 'loading') t();
    else {
      var a = function () {
        (t(), l.removeEventListener('DOMContentLoaded', a));
      };
      (l.addEventListener('DOMContentLoaded', a), (e._reactRetry = a));
    }
  }
  function Bt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === '$' ||
            t === '$!' ||
            t === '$?' ||
            t === '$~' ||
            t === '&' ||
            t === 'F!' ||
            t === 'F')
        )
          break;
        if (t === '/$' || t === '/&') return null;
      }
    }
    return e;
  }
  var Ys = null;
  function Jd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === '/$' || l === '/&') {
          if (t === 0) return Bt(e.nextSibling);
          t--;
        } else (l !== '$' && l !== '$!' && l !== '$?' && l !== '$~' && l !== '&') || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Fd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === '$' || l === '$!' || l === '$?' || l === '$~' || l === '&') {
          if (t === 0) return e;
          t--;
        } else (l !== '/$' && l !== '/&') || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function $d(e, t, l) {
    switch (((t = du(l)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(E(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(E(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(E(454));
        return e;
      default:
        throw Error(E(451));
    }
  }
  function Vn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Gu(e);
  }
  var Ut = new Map(),
    Wd = new Set();
  function mu(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var sl = Z.d;
  Z.d = { f: i0, r: u0, D: r0, C: s0, L: f0, m: o0, X: d0, S: c0, M: m0 };
  function i0() {
    var e = sl.f(),
      t = nu();
    return e || t;
  }
  function u0(e) {
    var t = va(e);
    t !== null && t.tag === 5 && t.type === 'form' ? mc(t) : sl.r(e);
  }
  var Ka = typeof document > 'u' ? null : document;
  function kd(e, t, l) {
    var a = Ka;
    if (a && typeof t == 'string' && t) {
      var n = Mt(t);
      ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
        Wd.has(n) ||
          (Wd.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement('link')), et(t, 'link', e), Fe(t), a.head.appendChild(t))));
    }
  }
  function r0(e) {
    (sl.D(e), kd('dns-prefetch', e, null));
  }
  function s0(e, t) {
    (sl.C(e, t), kd('preconnect', e, t));
  }
  function f0(e, t, l) {
    sl.L(e, t, l);
    var a = Ka;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + Mt(t) + '"]';
      t === 'image' && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + Mt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == 'string' && (n += '[imagesizes="' + Mt(l.imageSizes) + '"]'))
        : (n += '[href="' + Mt(e) + '"]');
      var u = n;
      switch (t) {
        case 'style':
          u = Ja(e);
          break;
        case 'script':
          u = Fa(e);
      }
      Ut.has(u) ||
        ((e = g(
          { rel: 'preload', href: t === 'image' && l && l.imageSrcSet ? void 0 : e, as: t },
          l
        )),
        Ut.set(u, e),
        a.querySelector(n) !== null ||
          (t === 'style' && a.querySelector(qn(u))) ||
          (t === 'script' && a.querySelector(Xn(u))) ||
          ((t = a.createElement('link')), et(t, 'link', e), Fe(t), a.head.appendChild(t)));
    }
  }
  function o0(e, t) {
    sl.m(e, t);
    var l = Ka;
    if (l && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        n = 'link[rel="modulepreload"][as="' + Mt(a) + '"][href="' + Mt(e) + '"]',
        u = n;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Fa(e);
      }
      if (
        !Ut.has(u) &&
        ((e = g({ rel: 'modulepreload', href: e }, t)), Ut.set(u, e), l.querySelector(n) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(Xn(u))) return;
        }
        ((a = l.createElement('link')), et(a, 'link', e), Fe(a), l.head.appendChild(a));
      }
    }
  }
  function c0(e, t, l) {
    sl.S(e, t, l);
    var a = Ka;
    if (a && e) {
      var n = ha(a).hoistableStyles,
        u = Ja(e);
      t = t || 'default';
      var p = n.get(u);
      if (!p) {
        var A = { loading: 0, preload: null };
        if ((p = a.querySelector(qn(u)))) A.loading = 5;
        else {
          ((e = g({ rel: 'stylesheet', href: e, 'data-precedence': t }, l)),
            (l = Ut.get(u)) && js(e, l));
          var w = (p = a.createElement('link'));
          (Fe(w),
            et(w, 'link', e),
            (w._p = new Promise(function (Q, W) {
              ((w.onload = Q), (w.onerror = W));
            })),
            w.addEventListener('load', function () {
              A.loading |= 1;
            }),
            w.addEventListener('error', function () {
              A.loading |= 2;
            }),
            (A.loading |= 4),
            vu(p, t, a));
        }
        ((p = { type: 'stylesheet', instance: p, count: 1, state: A }), n.set(u, p));
      }
    }
  }
  function d0(e, t) {
    sl.X(e, t);
    var l = Ka;
    if (l && e) {
      var a = ha(l).hoistableScripts,
        n = Fa(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Xn(n))),
        u ||
          ((e = g({ src: e, async: !0 }, t)),
          (t = Ut.get(n)) && Gs(e, t),
          (u = l.createElement('script')),
          Fe(u),
          et(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function m0(e, t) {
    sl.M(e, t);
    var l = Ka;
    if (l && e) {
      var a = ha(l).hoistableScripts,
        n = Fa(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Xn(n))),
        u ||
          ((e = g({ src: e, async: !0, type: 'module' }, t)),
          (t = Ut.get(n)) && Gs(e, t),
          (u = l.createElement('script')),
          Fe(u),
          et(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Pd(e, t, l, a) {
    var n = (n = ue.current) ? mu(n) : null;
    if (!n) throw Error(E(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string'
          ? ((t = Ja(l.href)),
            (l = ha(n).hoistableStyles),
            (a = l.get(t)),
            a || ((a = { type: 'style', instance: null, count: 0, state: null }), l.set(t, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          l.rel === 'stylesheet' &&
          typeof l.href == 'string' &&
          typeof l.precedence == 'string'
        ) {
          e = Ja(l.href);
          var u = ha(n).hoistableStyles,
            p = u.get(e);
          if (
            (p ||
              ((n = n.ownerDocument || n),
              (p = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, p),
              (u = n.querySelector(qn(e))) && !u._p && ((p.instance = u), (p.state.loading = 5)),
              Ut.has(e) ||
                ((l = {
                  rel: 'preload',
                  as: 'style',
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Ut.set(e, l),
                u || v0(n, e, l, p.state))),
            t && a === null)
          )
            throw Error(E(528, ''));
          return p;
        }
        if (t && a !== null) throw Error(E(529, ''));
        return null;
      case 'script':
        return (
          (t = l.async),
          (l = l.src),
          typeof l == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = Fa(l)),
              (l = ha(n).hoistableScripts),
              (a = l.get(t)),
              a || ((a = { type: 'script', instance: null, count: 0, state: null }), l.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(E(444, e));
    }
  }
  function Ja(e) {
    return 'href="' + Mt(e) + '"';
  }
  function qn(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Id(e) {
    return g({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function v0(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (a.loading = 1)
      : ((t = e.createElement('link')),
        (a.preload = t),
        t.addEventListener('load', function () {
          return (a.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (a.loading |= 2);
        }),
        et(t, 'link', l),
        Fe(t),
        e.head.appendChild(t));
  }
  function Fa(e) {
    return '[src="' + Mt(e) + '"]';
  }
  function Xn(e) {
    return 'script[async]' + e;
  }
  function em(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + Mt(l.href) + '"]');
          if (a) return ((t.instance = a), Fe(a), a);
          var n = g({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            Fe(a),
            et(a, 'style', n),
            vu(a, l.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          n = Ja(l.href);
          var u = e.querySelector(qn(n));
          if (u) return ((t.state.loading |= 4), (t.instance = u), Fe(u), u);
          ((a = Id(l)),
            (n = Ut.get(n)) && js(a, n),
            (u = (e.ownerDocument || e).createElement('link')),
            Fe(u));
          var p = u;
          return (
            (p._p = new Promise(function (A, w) {
              ((p.onload = A), (p.onerror = w));
            })),
            et(u, 'link', a),
            (t.state.loading |= 4),
            vu(u, l.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = Fa(l.src)),
            (n = e.querySelector(Xn(u)))
              ? ((t.instance = n), Fe(n), n)
              : ((a = l),
                (n = Ut.get(u)) && ((a = g({}, l)), Gs(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement('script')),
                Fe(n),
                et(n, 'link', a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case 'void':
          return null;
        default:
          throw Error(E(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), vu(a, l.precedence, e));
    return t.instance;
  }
  function vu(e, t, l) {
    for (
      var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        p = 0;
      p < a.length;
      p++
    ) {
      var A = a[p];
      if (A.dataset.precedence === t) u = A;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function js(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Gs(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var hu = null;
  function tm(e, t, l) {
    if (hu === null) {
      var a = new Map(),
        n = (hu = new Map());
      n.set(l, a);
    } else ((n = hu), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
      var u = l[n];
      if (
        !(u[nn] || u[We] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var p = u.getAttribute(t) || '';
        p = e + p;
        var A = a.get(p);
        A ? A.push(u) : a.set(p, [u]);
      }
    }
    return a;
  }
  function lm(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(l, t === 'title' ? e.querySelector('head > title') : null));
  }
  function h0(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof t.precedence != 'string' || typeof t.href != 'string' || t.href === '') break;
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case 'stylesheet':
            return ((e = t.disabled), typeof t.precedence == 'string' && e == null);
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function am(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function g0(e, t, l, a) {
    if (
      l.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = Ja(a.href),
          u = t.querySelector(qn(n));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = gu.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = u),
            Fe(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = Id(a)),
          (n = Ut.get(n)) && js(a, n),
          (u = u.createElement('link')),
          Fe(u));
        var p = u;
        ((p._p = new Promise(function (A, w) {
          ((p.onload = A), (p.onerror = w));
        })),
          et(u, 'link', a),
          (l.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = gu.bind(e)),
          t.addEventListener('load', l),
          t.addEventListener('error', l)));
    }
  }
  var Vs = 0;
  function y0(e, t) {
    return (
      e.stylesheets && e.count === 0 && pu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((e.stylesheets && pu(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Vs === 0 && (Vs = 62500 * kh());
            var n = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 && (e.stylesheets && pu(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > Vs ? 50 : 800) + t
            );
            return (
              (e.unsuspend = l),
              function () {
                ((e.unsuspend = null), clearTimeout(a), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function gu() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) pu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var yu = null;
  function pu(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (yu = new Map()), t.forEach(p0, e), (yu = null), gu.call(e)));
  }
  function p0(e, t) {
    if (!(t.state.loading & 4)) {
      var l = yu.get(e);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), yu.set(e, l));
        for (
          var n = e.querySelectorAll('link[data-precedence],style[data-precedence]'), u = 0;
          u < n.length;
          u++
        ) {
          var p = n[u];
          (p.nodeName === 'LINK' || p.getAttribute('media') !== 'not all') &&
            (l.set(p.dataset.precedence, p), (a = p));
        }
        a && l.set(null, a);
      }
      ((n = t.instance),
        (p = n.getAttribute('data-precedence')),
        (u = l.get(p) || a),
        u === a && l.set(null, n),
        l.set(p, n),
        this.count++,
        (a = gu.bind(this)),
        n.addEventListener('load', a),
        n.addEventListener('error', a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Qn = {
    $$typeof: B,
    Provider: null,
    Consumer: null,
    _currentValue: te,
    _currentValue2: te,
    _threadCount: 0,
  };
  function S0(e, t, l, a, n, u, p, A, w) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Hu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Hu(0)),
      (this.hiddenUpdates = Hu(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = p),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = w),
      (this.incompleteTransitions = new Map()));
  }
  function nm(e, t, l, a, n, u, p, A, w, Q, W, ee) {
    return (
      (e = new S0(e, t, l, p, w, Q, W, ee, A)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = yt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = xr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: t }),
      Mr(u),
      e
    );
  }
  function im(e) {
    return e ? ((e = Aa), e) : Aa;
  }
  function um(e, t, l, a, n, u) {
    ((n = im(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = El(t)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = Tl(e, a, t)),
      l !== null && (dt(l, e, t), Tn(l, e, t)));
  }
  function rm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function qs(e, t) {
    (rm(e, t), (e = e.alternate) && rm(e, t));
  }
  function sm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Kl(e, 67108864);
      (t !== null && dt(t, e, 67108864), qs(e, 67108864));
    }
  }
  function fm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Tt();
      t = Lu(t);
      var l = Kl(e, t);
      (l !== null && dt(l, e, t), qs(e, t));
    }
  }
  var Su = !0;
  function x0(e, t, l, a) {
    var n = G.T;
    G.T = null;
    var u = Z.p;
    try {
      ((Z.p = 2), Xs(e, t, l, a));
    } finally {
      ((Z.p = u), (G.T = n));
    }
  }
  function E0(e, t, l, a) {
    var n = G.T;
    G.T = null;
    var u = Z.p;
    try {
      ((Z.p = 8), Xs(e, t, l, a));
    } finally {
      ((Z.p = u), (G.T = n));
    }
  }
  function Xs(e, t, l, a) {
    if (Su) {
      var n = Qs(a);
      if (n === null) (Ds(e, t, a, xu, l), cm(e, a));
      else if (b0(n, e, t, l, a)) a.stopPropagation();
      else if ((cm(e, a), t & 4 && -1 < T0.indexOf(e))) {
        for (; n !== null; ) {
          var u = va(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var p = Vl(u.pendingLanes);
                  if (p !== 0) {
                    var A = u;
                    for (A.pendingLanes |= 2, A.entangledLanes |= 2; p; ) {
                      var w = 1 << (31 - ht(p));
                      ((A.entanglements[1] |= w), (p &= ~w));
                    }
                    (Vt(u), (Ae & 6) === 0 && ((lu = lt() + 500), Yn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((A = Kl(u, 2)), A !== null && dt(A, u, 2), nu(), qs(u, 2));
            }
          if (((u = Qs(a)), u === null && Ds(e, t, a, xu, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else Ds(e, t, a, null, l);
    }
  }
  function Qs(e) {
    return ((e = Ku(e)), Zs(e));
  }
  var xu = null;
  function Zs(e) {
    if (((xu = null), (e = ma(e)), e !== null)) {
      var t = i(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = c(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = m(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((xu = e), null);
  }
  function om(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (si()) {
          case jl:
            return 2;
          case fi:
            return 8;
          case oa:
          case ca:
            return 32;
          case Gl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ks = !1,
    Nl = null,
    _l = null,
    wl = null,
    Zn = new Map(),
    Kn = new Map(),
    Hl = [],
    T0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function cm(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Nl = null;
        break;
      case 'dragenter':
      case 'dragleave':
        _l = null;
        break;
      case 'mouseover':
      case 'mouseout':
        wl = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Zn.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Kn.delete(t.pointerId);
    }
  }
  function Jn(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = va(t)), t !== null && sm(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function b0(e, t, l, a, n) {
    switch (t) {
      case 'focusin':
        return ((Nl = Jn(Nl, e, t, l, a, n)), !0);
      case 'dragenter':
        return ((_l = Jn(_l, e, t, l, a, n)), !0);
      case 'mouseover':
        return ((wl = Jn(wl, e, t, l, a, n)), !0);
      case 'pointerover':
        var u = n.pointerId;
        return (Zn.set(u, Jn(Zn.get(u) || null, e, t, l, a, n)), !0);
      case 'gotpointercapture':
        return ((u = n.pointerId), Kn.set(u, Jn(Kn.get(u) || null, e, t, l, a, n)), !0);
    }
    return !1;
  }
  function dm(e) {
    var t = ma(e.target);
    if (t !== null) {
      var l = i(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = c(l)), t !== null)) {
            ((e.blockedOn = t),
              Af(e.priority, function () {
                fm(l);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = m(l)), t !== null)) {
            ((e.blockedOn = t),
              Af(e.priority, function () {
                fm(l);
              }));
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Eu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Qs(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((Zu = a), l.target.dispatchEvent(a), (Zu = null));
      } else return ((t = va(l)), t !== null && sm(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function mm(e, t, l) {
    Eu(e) && l.delete(t);
  }
  function M0() {
    ((Ks = !1),
      Nl !== null && Eu(Nl) && (Nl = null),
      _l !== null && Eu(_l) && (_l = null),
      wl !== null && Eu(wl) && (wl = null),
      Zn.forEach(mm),
      Kn.forEach(mm));
  }
  function Tu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ks || ((Ks = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, M0)));
  }
  var bu = null;
  function vm(e) {
    bu !== e &&
      ((bu = e),
      o.unstable_scheduleCallback(o.unstable_NormalPriority, function () {
        bu === e && (bu = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != 'function') {
            if (Zs(a || l) === null) continue;
            break;
          }
          var u = va(l);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Qr(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function $a(e) {
    function t(w) {
      return Tu(w, e);
    }
    (Nl !== null && Tu(Nl, e),
      _l !== null && Tu(_l, e),
      wl !== null && Tu(wl, e),
      Zn.forEach(t),
      Kn.forEach(t));
    for (var l = 0; l < Hl.length; l++) {
      var a = Hl[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Hl.length && ((l = Hl[0]), l.blockedOn === null); )
      (dm(l), l.blockedOn === null && Hl.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          p = n[ut] || null;
        if (typeof u == 'function') p || vm(l);
        else if (p) {
          var A = null;
          if (u && u.hasAttribute('formAction')) {
            if (((n = u), (p = u[ut] || null))) A = p.formAction;
            else if (Zs(n) !== null) continue;
          } else A = p.action;
          (typeof A == 'function' ? (l[a + 1] = A) : (l.splice(a, 3), (a -= 3)), vm(l));
        }
      }
  }
  function hm() {
    function e(u) {
      u.canIntercept &&
        u.info === 'react-transition' &&
        u.intercept({
          handler: function () {
            return new Promise(function (p) {
              return (n = p);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function t() {
      (n !== null && (n(), (n = null)), a || setTimeout(l, 20));
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: 'react-transition',
            history: 'replace',
          });
      }
    }
    if (typeof navigation == 'object') {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener('navigate', e),
        navigation.addEventListener('navigatesuccess', t),
        navigation.addEventListener('navigateerror', t),
        setTimeout(l, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener('navigate', e),
            navigation.removeEventListener('navigatesuccess', t),
            navigation.removeEventListener('navigateerror', t),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function Js(e) {
    this._internalRoot = e;
  }
  ((Mu.prototype.render = Js.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(E(409));
      var l = t.current,
        a = Tt();
      um(l, a, e, t, null, null);
    }),
    (Mu.prototype.unmount = Js.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (um(e.current, 2, null, e, null, null), nu(), (t[da] = null));
        }
      }));
  function Mu(e) {
    this._internalRoot = e;
  }
  Mu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Mf();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Hl.length && t !== 0 && t < Hl[l].priority; l++);
      (Hl.splice(l, 0, e), l === 0 && dm(e));
    }
  };
  var gm = b.version;
  if (gm !== '19.2.5') throw Error(E(527, gm, '19.2.5'));
  Z.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(E(188))
        : ((e = Object.keys(e).join(',')), Error(E(268, e)));
    return ((e = d(t)), (e = e !== null ? f(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var A0 = {
    bundleType: 0,
    version: '19.2.5',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: G,
    reconcilerVersion: '19.2.5',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Au.isDisabled && Au.supportsFiber)
      try {
        ((tn = Au.inject(A0)), (vt = Au));
      } catch {}
  }
  return (
    ($n.createRoot = function (e, t) {
      if (!v(e)) throw Error(E(299));
      var l = !1,
        a = '',
        n = bc,
        u = Mc,
        p = Ac;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (p = t.onRecoverableError)),
        (t = nm(e, 1, !1, null, null, l, a, null, n, u, p, hm)),
        (e[da] = t.current),
        zs(e),
        new Js(t)
      );
    }),
    ($n.hydrateRoot = function (e, t, l) {
      if (!v(e)) throw Error(E(299));
      var a = !1,
        n = '',
        u = bc,
        p = Mc,
        A = Ac,
        w = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (p = l.onCaughtError),
          l.onRecoverableError !== void 0 && (A = l.onRecoverableError),
          l.formState !== void 0 && (w = l.formState)),
        (t = nm(e, 1, !0, t, l ?? null, a, n, w, u, p, A, hm)),
        (t.context = im(null)),
        (l = t.current),
        (a = Tt()),
        (a = Lu(a)),
        (n = El(a)),
        (n.callback = null),
        Tl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        an(t, l),
        Vt(t),
        (e[da] = t.current),
        zs(e),
        new Mu(t)
      );
    }),
    ($n.version = '19.2.5'),
    $n
  );
}
var Rm;
function H0() {
  if (Rm) return $s.exports;
  Rm = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (b) {
        console.error(b);
      }
  }
  return (o(), ($s.exports = w0()), $s.exports);
}
var L0 = H0(),
  q = ff();
/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var zm = 'popstate';
function Dm(o) {
  return (
    typeof o == 'object' &&
    o != null &&
    'pathname' in o &&
    'search' in o &&
    'hash' in o &&
    'state' in o &&
    'key' in o
  );
}
function Y0(o = {}) {
  function b(E, v) {
    var d;
    let i = (d = v.state) == null ? void 0 : d.masked,
      { pathname: c, search: m, hash: s } = i || E.location;
    return uf(
      '',
      { pathname: c, search: m, hash: s },
      (v.state && v.state.usr) || null,
      (v.state && v.state.key) || 'default',
      i
        ? { pathname: E.location.pathname, search: E.location.search, hash: E.location.hash }
        : void 0
    );
  }
  function M(E, v) {
    return typeof v == 'string' ? v : In(v);
  }
  return G0(b, M, null, o);
}
function Le(o, b) {
  if (o === !1 || o === null || typeof o > 'u') throw new Error(b);
}
function Xt(o, b) {
  if (!o) {
    typeof console < 'u' && console.warn(b);
    try {
      throw new Error(b);
    } catch {}
  }
}
function j0() {
  return Math.random().toString(36).substring(2, 10);
}
function Om(o, b) {
  return {
    usr: o.state,
    key: o.key,
    idx: b,
    masked: o.unstable_mask ? { pathname: o.pathname, search: o.search, hash: o.hash } : void 0,
  };
}
function uf(o, b, M = null, E, v) {
  return {
    pathname: typeof o == 'string' ? o : o.pathname,
    search: '',
    hash: '',
    ...(typeof b == 'string' ? Pa(b) : b),
    state: M,
    key: (b && b.key) || E || j0(),
    unstable_mask: v,
  };
}
function In({ pathname: o = '/', search: b = '', hash: M = '' }) {
  return (
    b && b !== '?' && (o += b.charAt(0) === '?' ? b : '?' + b),
    M && M !== '#' && (o += M.charAt(0) === '#' ? M : '#' + M),
    o
  );
}
function Pa(o) {
  let b = {};
  if (o) {
    let M = o.indexOf('#');
    M >= 0 && ((b.hash = o.substring(M)), (o = o.substring(0, M)));
    let E = o.indexOf('?');
    (E >= 0 && ((b.search = o.substring(E)), (o = o.substring(0, E))), o && (b.pathname = o));
  }
  return b;
}
function G0(o, b, M, E = {}) {
  let { window: v = document.defaultView, v5Compat: i = !1 } = E,
    c = v.history,
    m = 'POP',
    s = null,
    d = f();
  d == null && ((d = 0), c.replaceState({ ...c.state, idx: d }, ''));
  function f() {
    return (c.state || { idx: null }).idx;
  }
  function g() {
    m = 'POP';
    let x = f(),
      C = x == null ? null : x - d;
    ((d = x), s && s({ action: m, location: h.location, delta: C }));
  }
  function S(x, C) {
    m = 'PUSH';
    let O = Dm(x) ? x : uf(h.location, x, C);
    d = f() + 1;
    let B = Om(O, d),
      L = h.createHref(O.unstable_mask || O);
    try {
      c.pushState(B, '', L);
    } catch (T) {
      if (T instanceof DOMException && T.name === 'DataCloneError') throw T;
      v.location.assign(L);
    }
    i && s && s({ action: m, location: h.location, delta: 1 });
  }
  function r(x, C) {
    m = 'REPLACE';
    let O = Dm(x) ? x : uf(h.location, x, C);
    d = f();
    let B = Om(O, d),
      L = h.createHref(O.unstable_mask || O);
    (c.replaceState(B, '', L), i && s && s({ action: m, location: h.location, delta: 0 }));
  }
  function y(x) {
    return V0(x);
  }
  let h = {
    get action() {
      return m;
    },
    get location() {
      return o(v, c);
    },
    listen(x) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        v.addEventListener(zm, g),
        (s = x),
        () => {
          (v.removeEventListener(zm, g), (s = null));
        }
      );
    },
    createHref(x) {
      return b(v, x);
    },
    createURL: y,
    encodeLocation(x) {
      let C = y(x);
      return { pathname: C.pathname, search: C.search, hash: C.hash };
    },
    push: S,
    replace: r,
    go(x) {
      return c.go(x);
    },
  };
  return h;
}
function V0(o, b = !1) {
  let M = 'http://localhost';
  (typeof window < 'u' &&
    (M = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    Le(M, 'No window.location.(origin|href) available to create URL'));
  let E = typeof o == 'string' ? o : In(o);
  return ((E = E.replace(/ $/, '%20')), !b && E.startsWith('//') && (E = M + E), new URL(E, M));
}
function Vm(o, b, M = '/') {
  return q0(o, b, M, !1);
}
function q0(o, b, M, E) {
  let v = typeof b == 'string' ? Pa(b) : b,
    i = ol(v.pathname || '/', M);
  if (i == null) return null;
  let c = qm(o);
  X0(c);
  let m = null;
  for (let s = 0; m == null && s < c.length; ++s) {
    let d = eg(i);
    m = P0(c[s], d, E);
  }
  return m;
}
function qm(o, b = [], M = [], E = '', v = !1) {
  let i = (c, m, s = v, d) => {
    let f = {
      relativePath: d === void 0 ? c.path || '' : d,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: m,
      route: c,
    };
    if (f.relativePath.startsWith('/')) {
      if (!f.relativePath.startsWith(E) && s) return;
      (Le(
        f.relativePath.startsWith(E),
        `Absolute route path "${f.relativePath}" nested under path "${E}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (f.relativePath = f.relativePath.slice(E.length)));
    }
    let g = Lt([E, f.relativePath]),
      S = M.concat(f);
    (c.children &&
      c.children.length > 0 &&
      (Le(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
      ),
      qm(c.children, b, S, g, s)),
      !(c.path == null && !c.index) && b.push({ path: g, score: W0(g, c.index), routesMeta: S }));
  };
  return (
    o.forEach((c, m) => {
      var s;
      if (c.path === '' || !((s = c.path) != null && s.includes('?'))) i(c, m);
      else for (let d of Xm(c.path)) i(c, m, !0, d);
    }),
    b
  );
}
function Xm(o) {
  let b = o.split('/');
  if (b.length === 0) return [];
  let [M, ...E] = b,
    v = M.endsWith('?'),
    i = M.replace(/\?$/, '');
  if (E.length === 0) return v ? [i, ''] : [i];
  let c = Xm(E.join('/')),
    m = [];
  return (
    m.push(...c.map((s) => (s === '' ? i : [i, s].join('/')))),
    v && m.push(...c),
    m.map((s) => (o.startsWith('/') && s === '' ? '/' : s))
  );
}
function X0(o) {
  o.sort((b, M) =>
    b.score !== M.score
      ? M.score - b.score
      : k0(
          b.routesMeta.map((E) => E.childrenIndex),
          M.routesMeta.map((E) => E.childrenIndex)
        )
  );
}
var Q0 = /^:[\w-]+$/,
  Z0 = 3,
  K0 = 2,
  J0 = 1,
  F0 = 10,
  $0 = -2,
  Bm = (o) => o === '*';
function W0(o, b) {
  let M = o.split('/'),
    E = M.length;
  return (
    M.some(Bm) && (E += $0),
    b && (E += K0),
    M.filter((v) => !Bm(v)).reduce((v, i) => v + (Q0.test(i) ? Z0 : i === '' ? J0 : F0), E)
  );
}
function k0(o, b) {
  return o.length === b.length && o.slice(0, -1).every((E, v) => E === b[v])
    ? o[o.length - 1] - b[b.length - 1]
    : 0;
}
function P0(o, b, M = !1) {
  let { routesMeta: E } = o,
    v = {},
    i = '/',
    c = [];
  for (let m = 0; m < E.length; ++m) {
    let s = E[m],
      d = m === E.length - 1,
      f = i === '/' ? b : b.slice(i.length) || '/',
      g = Uu({ path: s.relativePath, caseSensitive: s.caseSensitive, end: d }, f),
      S = s.route;
    if (
      (!g &&
        d &&
        M &&
        !E[E.length - 1].route.index &&
        (g = Uu({ path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 }, f)),
      !g)
    )
      return null;
    (Object.assign(v, g.params),
      c.push({
        params: v,
        pathname: Lt([i, g.pathname]),
        pathnameBase: ng(Lt([i, g.pathnameBase])),
        route: S,
      }),
      g.pathnameBase !== '/' && (i = Lt([i, g.pathnameBase])));
  }
  return c;
}
function Uu(o, b) {
  typeof o == 'string' && (o = { path: o, caseSensitive: !1, end: !0 });
  let [M, E] = I0(o.path, o.caseSensitive, o.end),
    v = b.match(M);
  if (!v) return null;
  let i = v[0],
    c = i.replace(/(.)\/+$/, '$1'),
    m = v.slice(1);
  return {
    params: E.reduce((d, { paramName: f, isOptional: g }, S) => {
      if (f === '*') {
        let y = m[S] || '';
        c = i.slice(0, i.length - y.length).replace(/(.)\/+$/, '$1');
      }
      const r = m[S];
      return (g && !r ? (d[f] = void 0) : (d[f] = (r || '').replace(/%2F/g, '/')), d);
    }, {}),
    pathname: i,
    pathnameBase: c,
    pattern: o,
  };
}
function I0(o, b = !1, M = !0) {
  Xt(
    o === '*' || !o.endsWith('*') || o.endsWith('/*'),
    `Route path "${o}" will be treated as if it were "${o.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/, '/*')}".`
  );
  let E = [],
    v =
      '^' +
      o
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(/\/:([\w-]+)(\?)?/g, (c, m, s, d, f) => {
          if ((E.push({ paramName: m, isOptional: s != null }), s)) {
            let g = f.charAt(d + c.length);
            return g && g !== '/' ? '/([^\\/]*)' : '(?:/([^\\/]*))?';
          }
          return '/([^\\/]+)';
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    o.endsWith('*')
      ? (E.push({ paramName: '*' }), (v += o === '*' || o === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : M
        ? (v += '\\/*$')
        : o !== '' && o !== '/' && (v += '(?:(?=\\/|$))'),
    [new RegExp(v, b ? void 0 : 'i'), E]
  );
}
function eg(o) {
  try {
    return o
      .split('/')
      .map((b) => decodeURIComponent(b).replace(/\//g, '%2F'))
      .join('/');
  } catch (b) {
    return (
      Xt(
        !1,
        `The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${b}).`
      ),
      o
    );
  }
}
function ol(o, b) {
  if (b === '/') return o;
  if (!o.toLowerCase().startsWith(b.toLowerCase())) return null;
  let M = b.endsWith('/') ? b.length - 1 : b.length,
    E = o.charAt(M);
  return E && E !== '/' ? null : o.slice(M) || '/';
}
var tg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function lg(o, b = '/') {
  let { pathname: M, search: E = '', hash: v = '' } = typeof o == 'string' ? Pa(o) : o,
    i;
  return (
    M ? ((M = Zm(M)), M.startsWith('/') ? (i = Um(M.substring(1), '/')) : (i = Um(M, b))) : (i = b),
    { pathname: i, search: ig(E), hash: ug(v) }
  );
}
function Um(o, b) {
  let M = Nu(b).split('/');
  return (
    o.split('/').forEach((v) => {
      v === '..' ? M.length > 1 && M.pop() : v !== '.' && M.push(v);
    }),
    M.length > 1 ? M.join('/') : '/'
  );
}
function ef(o, b, M, E) {
  return `Cannot include a '${o}' character in a manually specified \`to.${b}\` field [${JSON.stringify(E)}].  Please separate it out to the \`to.${M}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ag(o) {
  return o.filter((b, M) => M === 0 || (b.route.path && b.route.path.length > 0));
}
function Qm(o) {
  let b = ag(o);
  return b.map((M, E) => (E === b.length - 1 ? M.pathname : M.pathnameBase));
}
function of(o, b, M, E = !1) {
  let v;
  typeof o == 'string'
    ? (v = Pa(o))
    : ((v = { ...o }),
      Le(!v.pathname || !v.pathname.includes('?'), ef('?', 'pathname', 'search', v)),
      Le(!v.pathname || !v.pathname.includes('#'), ef('#', 'pathname', 'hash', v)),
      Le(!v.search || !v.search.includes('#'), ef('#', 'search', 'hash', v)));
  let i = o === '' || v.pathname === '',
    c = i ? '/' : v.pathname,
    m;
  if (c == null) m = M;
  else {
    let g = b.length - 1;
    if (!E && c.startsWith('..')) {
      let S = c.split('/');
      for (; S[0] === '..'; ) (S.shift(), (g -= 1));
      v.pathname = S.join('/');
    }
    m = g >= 0 ? b[g] : '/';
  }
  let s = lg(v, m),
    d = c && c !== '/' && c.endsWith('/'),
    f = (i || c === '.') && M.endsWith('/');
  return (!s.pathname.endsWith('/') && (d || f) && (s.pathname += '/'), s);
}
var Zm = (o) => o.replace(/\/\/+/g, '/'),
  Lt = (o) => Zm(o.join('/')),
  Nu = (o) => o.replace(/\/+$/, ''),
  ng = (o) => Nu(o).replace(/^\/*/, '/'),
  ig = (o) => (!o || o === '?' ? '' : o.startsWith('?') ? o : '?' + o),
  ug = (o) => (!o || o === '#' ? '' : o.startsWith('#') ? o : '#' + o),
  rg = class {
    constructor(o, b, M, E = !1) {
      ((this.status = o),
        (this.statusText = b || ''),
        (this.internal = E),
        M instanceof Error ? ((this.data = M.toString()), (this.error = M)) : (this.data = M));
    }
  };
function sg(o) {
  return (
    o != null &&
    typeof o.status == 'number' &&
    typeof o.statusText == 'string' &&
    typeof o.internal == 'boolean' &&
    'data' in o
  );
}
function fg(o) {
  let b = o.map((M) => M.route.path).filter(Boolean);
  return Lt(b) || '/';
}
var Km =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function Jm(o, b) {
  let M = o;
  if (typeof M != 'string' || !tg.test(M)) return { absoluteURL: void 0, isExternal: !1, to: M };
  let E = M,
    v = !1;
  if (Km)
    try {
      let i = new URL(window.location.href),
        c = M.startsWith('//') ? new URL(i.protocol + M) : new URL(M),
        m = ol(c.pathname, b);
      c.origin === i.origin && m != null ? (M = m + c.search + c.hash) : (v = !0);
    } catch {
      Xt(
        !1,
        `<Link to="${M}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: E, isExternal: v, to: M };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var Fm = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Fm);
var og = ['GET', ...Fm];
new Set(og);
var Ia = q.createContext(null);
Ia.displayName = 'DataRouter';
var _u = q.createContext(null);
_u.displayName = 'DataRouterState';
var $m = q.createContext(!1);
function cg() {
  return q.useContext($m);
}
var Wm = q.createContext({ isTransitioning: !1 });
Wm.displayName = 'ViewTransition';
var dg = q.createContext(new Map());
dg.displayName = 'Fetchers';
var mg = q.createContext(null);
mg.displayName = 'Await';
var Nt = q.createContext(null);
Nt.displayName = 'Navigation';
var ei = q.createContext(null);
ei.displayName = 'Location';
var cl = q.createContext({ outlet: null, matches: [], isDataRoute: !1 });
cl.displayName = 'Route';
var cf = q.createContext(null);
cf.displayName = 'RouteError';
var km = 'REACT_ROUTER_ERROR',
  vg = 'REDIRECT',
  hg = 'ROUTE_ERROR_RESPONSE';
function gg(o) {
  if (o.startsWith(`${km}:${vg}:{`))
    try {
      let b = JSON.parse(o.slice(28));
      if (
        typeof b == 'object' &&
        b &&
        typeof b.status == 'number' &&
        typeof b.statusText == 'string' &&
        typeof b.location == 'string' &&
        typeof b.reloadDocument == 'boolean' &&
        typeof b.replace == 'boolean'
      )
        return b;
    } catch {}
}
function yg(o) {
  if (o.startsWith(`${km}:${hg}:{`))
    try {
      let b = JSON.parse(o.slice(40));
      if (
        typeof b == 'object' &&
        b &&
        typeof b.status == 'number' &&
        typeof b.statusText == 'string'
      )
        return new rg(b.status, b.statusText, b.data);
    } catch {}
}
function pg(o, { relative: b } = {}) {
  Le(ti(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: M, navigator: E } = q.useContext(Nt),
    { hash: v, pathname: i, search: c } = li(o, { relative: b }),
    m = i;
  return (
    M !== '/' && (m = i === '/' ? M : Lt([M, i])),
    E.createHref({ pathname: m, search: c, hash: v })
  );
}
function ti() {
  return q.useContext(ei) != null;
}
function dl() {
  return (
    Le(ti(), 'useLocation() may be used only in the context of a <Router> component.'),
    q.useContext(ei).location
  );
}
var Pm =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Im(o) {
  q.useContext(Nt).static || q.useLayoutEffect(o);
}
function Sg() {
  let { isDataRoute: o } = q.useContext(cl);
  return o ? Ug() : xg();
}
function xg() {
  Le(ti(), 'useNavigate() may be used only in the context of a <Router> component.');
  let o = q.useContext(Ia),
    { basename: b, navigator: M } = q.useContext(Nt),
    { matches: E } = q.useContext(cl),
    { pathname: v } = dl(),
    i = JSON.stringify(Qm(E)),
    c = q.useRef(!1);
  return (
    Im(() => {
      c.current = !0;
    }),
    q.useCallback(
      (s, d = {}) => {
        if ((Xt(c.current, Pm), !c.current)) return;
        if (typeof s == 'number') {
          M.go(s);
          return;
        }
        let f = of(s, JSON.parse(i), v, d.relative === 'path');
        (o == null && b !== '/' && (f.pathname = f.pathname === '/' ? b : Lt([b, f.pathname])),
          (d.replace ? M.replace : M.push)(f, d.state, d));
      },
      [b, M, i, v, o]
    )
  );
}
q.createContext(null);
function li(o, { relative: b } = {}) {
  let { matches: M } = q.useContext(cl),
    { pathname: E } = dl(),
    v = JSON.stringify(Qm(M));
  return q.useMemo(() => of(o, JSON.parse(v), E, b === 'path'), [o, v, E, b]);
}
function Eg(o, b) {
  return ev(o, b);
}
function ev(o, b, M) {
  var x;
  Le(ti(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: E } = q.useContext(Nt),
    { matches: v } = q.useContext(cl),
    i = v[v.length - 1],
    c = i ? i.params : {},
    m = i ? i.pathname : '/',
    s = i ? i.pathnameBase : '/',
    d = i && i.route;
  {
    let C = (d && d.path) || '';
    lv(
      m,
      !d || C.endsWith('*') || C.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C === '/' ? '*' : `${C}/*`}">.`
    );
  }
  let f = dl(),
    g;
  if (b) {
    let C = typeof b == 'string' ? Pa(b) : b;
    (Le(
      s === '/' || ((x = C.pathname) == null ? void 0 : x.startsWith(s)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${C.pathname}" was given in the \`location\` prop.`
    ),
      (g = C));
  } else g = f;
  let S = g.pathname || '/',
    r = S;
  if (s !== '/') {
    let C = s.replace(/^\//, '').split('/');
    r = '/' + S.replace(/^\//, '').split('/').slice(C.length).join('/');
  }
  let y = Vm(o, { pathname: r });
  (Xt(d || y != null, `No routes matched location "${g.pathname}${g.search}${g.hash}" `),
    Xt(
      y == null ||
        y[y.length - 1].route.element !== void 0 ||
        y[y.length - 1].route.Component !== void 0 ||
        y[y.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let h = Cg(
    y &&
      y.map((C) =>
        Object.assign({}, C, {
          params: Object.assign({}, c, C.params),
          pathname: Lt([
            s,
            E.encodeLocation
              ? E.encodeLocation(
                  C.pathname.replace(/%/g, '%25').replace(/\?/g, '%3F').replace(/#/g, '%23')
                ).pathname
              : C.pathname,
          ]),
          pathnameBase:
            C.pathnameBase === '/'
              ? s
              : Lt([
                  s,
                  E.encodeLocation
                    ? E.encodeLocation(
                        C.pathnameBase
                          .replace(/%/g, '%25')
                          .replace(/\?/g, '%3F')
                          .replace(/#/g, '%23')
                      ).pathname
                    : C.pathnameBase,
                ]),
        })
      ),
    v,
    M
  );
  return b && h
    ? q.createElement(
        ei.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              unstable_mask: void 0,
              ...g,
            },
            navigationType: 'POP',
          },
        },
        h
      )
    : h;
}
function Tg() {
  let o = Bg(),
    b = sg(o) ? `${o.status} ${o.statusText}` : o instanceof Error ? o.message : JSON.stringify(o),
    M = o instanceof Error ? o.stack : null,
    E = 'rgba(200,200,200, 0.5)',
    v = { padding: '0.5rem', backgroundColor: E },
    i = { padding: '2px 4px', backgroundColor: E },
    c = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', o),
    (c = q.createElement(
      q.Fragment,
      null,
      q.createElement('p', null, '💿 Hey developer 👋'),
      q.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        q.createElement('code', { style: i }, 'ErrorBoundary'),
        ' or',
        ' ',
        q.createElement('code', { style: i }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    q.createElement(
      q.Fragment,
      null,
      q.createElement('h2', null, 'Unexpected Application Error!'),
      q.createElement('h3', { style: { fontStyle: 'italic' } }, b),
      M ? q.createElement('pre', { style: v }, M) : null,
      c
    )
  );
}
var bg = q.createElement(Tg, null),
  tv = class extends q.Component {
    constructor(o) {
      (super(o),
        (this.state = { location: o.location, revalidation: o.revalidation, error: o.error }));
    }
    static getDerivedStateFromError(o) {
      return { error: o };
    }
    static getDerivedStateFromProps(o, b) {
      return b.location !== o.location || (b.revalidation !== 'idle' && o.revalidation === 'idle')
        ? { error: o.error, location: o.location, revalidation: o.revalidation }
        : {
            error: o.error !== void 0 ? o.error : b.error,
            location: b.location,
            revalidation: o.revalidation || b.revalidation,
          };
    }
    componentDidCatch(o, b) {
      this.props.onError
        ? this.props.onError(o, b)
        : console.error('React Router caught the following error during render', o);
    }
    render() {
      let o = this.state.error;
      if (
        this.context &&
        typeof o == 'object' &&
        o &&
        'digest' in o &&
        typeof o.digest == 'string'
      ) {
        const M = yg(o.digest);
        M && (o = M);
      }
      let b =
        o !== void 0
          ? q.createElement(
              cl.Provider,
              { value: this.props.routeContext },
              q.createElement(cf.Provider, { value: o, children: this.props.component })
            )
          : this.props.children;
      return this.context ? q.createElement(Mg, { error: o }, b) : b;
    }
  };
tv.contextType = $m;
var tf = new WeakMap();
function Mg({ children: o, error: b }) {
  let { basename: M } = q.useContext(Nt);
  if (typeof b == 'object' && b && 'digest' in b && typeof b.digest == 'string') {
    let E = gg(b.digest);
    if (E) {
      let v = tf.get(b);
      if (v) throw v;
      let i = Jm(E.location, M);
      if (Km && !tf.get(b))
        if (i.isExternal || E.reloadDocument) window.location.href = i.absoluteURL || i.to;
        else {
          const c = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, { replace: E.replace })
          );
          throw (tf.set(b, c), c);
        }
      return q.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${i.absoluteURL || i.to}`,
      });
    }
  }
  return o;
}
function Ag({ routeContext: o, match: b, children: M }) {
  let E = q.useContext(Ia);
  return (
    E &&
      E.static &&
      E.staticContext &&
      (b.route.errorElement || b.route.ErrorBoundary) &&
      (E.staticContext._deepestRenderedBoundaryId = b.route.id),
    q.createElement(cl.Provider, { value: o }, M)
  );
}
function Cg(o, b = [], M) {
  let E = M == null ? void 0 : M.state;
  if (o == null) {
    if (!E) return null;
    if (E.errors) o = E.matches;
    else if (b.length === 0 && !E.initialized && E.matches.length > 0) o = E.matches;
    else return null;
  }
  let v = o,
    i = E == null ? void 0 : E.errors;
  if (i != null) {
    let f = v.findIndex((g) => g.route.id && (i == null ? void 0 : i[g.route.id]) !== void 0);
    (Le(
      f >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(',')}`
    ),
      (v = v.slice(0, Math.min(v.length, f + 1))));
  }
  let c = !1,
    m = -1;
  if (M && E) {
    c = E.renderFallback;
    for (let f = 0; f < v.length; f++) {
      let g = v[f];
      if (((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (m = f), g.route.id)) {
        let { loaderData: S, errors: r } = E,
          y = g.route.loader && !S.hasOwnProperty(g.route.id) && (!r || r[g.route.id] === void 0);
        if (g.route.lazy || y) {
          (M.isStatic && (c = !0), m >= 0 ? (v = v.slice(0, m + 1)) : (v = [v[0]]));
          break;
        }
      }
    }
  }
  let s = M == null ? void 0 : M.onError,
    d =
      E && s
        ? (f, g) => {
            var S, r;
            s(f, {
              location: E.location,
              params:
                ((r = (S = E.matches) == null ? void 0 : S[0]) == null ? void 0 : r.params) ?? {},
              unstable_pattern: fg(E.matches),
              errorInfo: g,
            });
          }
        : void 0;
  return v.reduceRight((f, g, S) => {
    let r,
      y = !1,
      h = null,
      x = null;
    E &&
      ((r = i && g.route.id ? i[g.route.id] : void 0),
      (h = g.route.errorElement || bg),
      c &&
        (m < 0 && S === 0
          ? (lv(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (y = !0),
            (x = null))
          : m === S && ((y = !0), (x = g.route.hydrateFallbackElement || null))));
    let C = b.concat(v.slice(0, S + 1)),
      O = () => {
        let B;
        return (
          r
            ? (B = h)
            : y
              ? (B = x)
              : g.route.Component
                ? (B = q.createElement(g.route.Component, null))
                : g.route.element
                  ? (B = g.route.element)
                  : (B = f),
          q.createElement(Ag, {
            match: g,
            routeContext: { outlet: f, matches: C, isDataRoute: E != null },
            children: B,
          })
        );
      };
    return E && (g.route.ErrorBoundary || g.route.errorElement || S === 0)
      ? q.createElement(tv, {
          location: E.location,
          revalidation: E.revalidation,
          component: h,
          error: r,
          children: O(),
          routeContext: { outlet: null, matches: C, isDataRoute: !0 },
          onError: d,
        })
      : O();
  }, null);
}
function df(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Rg(o) {
  let b = q.useContext(Ia);
  return (Le(b, df(o)), b);
}
function zg(o) {
  let b = q.useContext(_u);
  return (Le(b, df(o)), b);
}
function Dg(o) {
  let b = q.useContext(cl);
  return (Le(b, df(o)), b);
}
function mf(o) {
  let b = Dg(o),
    M = b.matches[b.matches.length - 1];
  return (Le(M.route.id, `${o} can only be used on routes that contain a unique "id"`), M.route.id);
}
function Og() {
  return mf('useRouteId');
}
function Bg() {
  var E;
  let o = q.useContext(cf),
    b = zg('useRouteError'),
    M = mf('useRouteError');
  return o !== void 0 ? o : (E = b.errors) == null ? void 0 : E[M];
}
function Ug() {
  let { router: o } = Rg('useNavigate'),
    b = mf('useNavigate'),
    M = q.useRef(!1);
  return (
    Im(() => {
      M.current = !0;
    }),
    q.useCallback(
      async (v, i = {}) => {
        (Xt(M.current, Pm),
          M.current &&
            (typeof v == 'number'
              ? await o.navigate(v)
              : await o.navigate(v, { fromRouteId: b, ...i })));
      },
      [o, b]
    )
  );
}
var Nm = {};
function lv(o, b, M) {
  !b && !Nm[o] && ((Nm[o] = !0), Xt(!1, M));
}
q.memo(Ng);
function Ng({ routes: o, future: b, state: M, isStatic: E, onError: v }) {
  return ev(o, void 0, { state: M, isStatic: E, onError: v });
}
function rf(o) {
  Le(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function _g({
  basename: o = '/',
  children: b = null,
  location: M,
  navigationType: E = 'POP',
  navigator: v,
  static: i = !1,
  unstable_useTransitions: c,
}) {
  Le(
    !ti(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let m = o.replace(/^\/*/, '/'),
    s = q.useMemo(
      () => ({ basename: m, navigator: v, static: i, unstable_useTransitions: c, future: {} }),
      [m, v, i, c]
    );
  typeof M == 'string' && (M = Pa(M));
  let {
      pathname: d = '/',
      search: f = '',
      hash: g = '',
      state: S = null,
      key: r = 'default',
      unstable_mask: y,
    } = M,
    h = q.useMemo(() => {
      let x = ol(d, m);
      return x == null
        ? null
        : {
            location: { pathname: x, search: f, hash: g, state: S, key: r, unstable_mask: y },
            navigationType: E,
          };
    }, [m, d, f, g, S, r, E, y]);
  return (
    Xt(
      h != null,
      `<Router basename="${m}"> is not able to match the URL "${d}${f}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    h == null
      ? null
      : q.createElement(
          Nt.Provider,
          { value: s },
          q.createElement(ei.Provider, { children: b, value: h })
        )
  );
}
function wg({ children: o, location: b }) {
  return Eg(sf(o), b);
}
function sf(o, b = []) {
  let M = [];
  return (
    q.Children.forEach(o, (E, v) => {
      if (!q.isValidElement(E)) return;
      let i = [...b, v];
      if (E.type === q.Fragment) {
        M.push.apply(M, sf(E.props.children, i));
        return;
      }
      (Le(
        E.type === rf,
        `[${typeof E.type == 'string' ? E.type : E.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Le(!E.props.index || !E.props.children, 'An index route cannot have child routes.'));
      let c = {
        id: E.props.id || i.join('-'),
        caseSensitive: E.props.caseSensitive,
        element: E.props.element,
        Component: E.props.Component,
        index: E.props.index,
        path: E.props.path,
        middleware: E.props.middleware,
        loader: E.props.loader,
        action: E.props.action,
        hydrateFallbackElement: E.props.hydrateFallbackElement,
        HydrateFallback: E.props.HydrateFallback,
        errorElement: E.props.errorElement,
        ErrorBoundary: E.props.ErrorBoundary,
        hasErrorBoundary:
          E.props.hasErrorBoundary === !0 ||
          E.props.ErrorBoundary != null ||
          E.props.errorElement != null,
        shouldRevalidate: E.props.shouldRevalidate,
        handle: E.props.handle,
        lazy: E.props.lazy,
      };
      (E.props.children && (c.children = sf(E.props.children, i)), M.push(c));
    }),
    M
  );
}
var Du = 'get',
  Ou = 'application/x-www-form-urlencoded';
function wu(o) {
  return typeof HTMLElement < 'u' && o instanceof HTMLElement;
}
function Hg(o) {
  return wu(o) && o.tagName.toLowerCase() === 'button';
}
function Lg(o) {
  return wu(o) && o.tagName.toLowerCase() === 'form';
}
function Yg(o) {
  return wu(o) && o.tagName.toLowerCase() === 'input';
}
function jg(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function Gg(o, b) {
  return o.button === 0 && (!b || b === '_self') && !jg(o);
}
var Cu = null;
function Vg() {
  if (Cu === null)
    try {
      (new FormData(document.createElement('form'), 0), (Cu = !1));
    } catch {
      Cu = !0;
    }
  return Cu;
}
var qg = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function lf(o) {
  return o != null && !qg.has(o)
    ? (Xt(
        !1,
        `"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ou}"`
      ),
      null)
    : o;
}
function Xg(o, b) {
  let M, E, v, i, c;
  if (Lg(o)) {
    let m = o.getAttribute('action');
    ((E = m ? ol(m, b) : null),
      (M = o.getAttribute('method') || Du),
      (v = lf(o.getAttribute('enctype')) || Ou),
      (i = new FormData(o)));
  } else if (Hg(o) || (Yg(o) && (o.type === 'submit' || o.type === 'image'))) {
    let m = o.form;
    if (m == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let s = o.getAttribute('formaction') || m.getAttribute('action');
    if (
      ((E = s ? ol(s, b) : null),
      (M = o.getAttribute('formmethod') || m.getAttribute('method') || Du),
      (v = lf(o.getAttribute('formenctype')) || lf(m.getAttribute('enctype')) || Ou),
      (i = new FormData(m, o)),
      !Vg())
    ) {
      let { name: d, type: f, value: g } = o;
      if (f === 'image') {
        let S = d ? `${d}.` : '';
        (i.append(`${S}x`, '0'), i.append(`${S}y`, '0'));
      } else d && i.append(d, g);
    }
  } else {
    if (wu(o))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((M = Du), (E = null), (v = Ou), (c = o));
  }
  return (
    i && v === 'text/plain' && ((c = i), (i = void 0)),
    { action: E, method: M.toLowerCase(), encType: v, formData: i, body: c }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function vf(o, b) {
  if (o === !1 || o === null || typeof o > 'u') throw new Error(b);
}
function av(o, b, M, E) {
  let v =
    typeof o == 'string'
      ? new URL(o, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : o;
  return (
    M
      ? v.pathname.endsWith('/')
        ? (v.pathname = `${v.pathname}_.${E}`)
        : (v.pathname = `${v.pathname}.${E}`)
      : v.pathname === '/'
        ? (v.pathname = `_root.${E}`)
        : b && ol(v.pathname, b) === '/'
          ? (v.pathname = `${Nu(b)}/_root.${E}`)
          : (v.pathname = `${Nu(v.pathname)}.${E}`),
    v
  );
}
async function Qg(o, b) {
  if (o.id in b) return b[o.id];
  try {
    let M = await import(o.module);
    return ((b[o.id] = M), M);
  } catch (M) {
    return (
      console.error(`Error loading route module \`${o.module}\`, reloading page...`),
      console.error(M),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Zg(o) {
  return o == null
    ? !1
    : o.href == null
      ? o.rel === 'preload' && typeof o.imageSrcSet == 'string' && typeof o.imageSizes == 'string'
      : typeof o.rel == 'string' && typeof o.href == 'string';
}
async function Kg(o, b, M) {
  let E = await Promise.all(
    o.map(async (v) => {
      let i = b.routes[v.route.id];
      if (i) {
        let c = await Qg(i, M);
        return c.links ? c.links() : [];
      }
      return [];
    })
  );
  return Wg(
    E.flat(1)
      .filter(Zg)
      .filter((v) => v.rel === 'stylesheet' || v.rel === 'preload')
      .map((v) =>
        v.rel === 'stylesheet' ? { ...v, rel: 'prefetch', as: 'style' } : { ...v, rel: 'prefetch' }
      )
  );
}
function _m(o, b, M, E, v, i) {
  let c = (s, d) => (M[d] ? s.route.id !== M[d].route.id : !0),
    m = (s, d) => {
      var f;
      return (
        M[d].pathname !== s.pathname ||
        (((f = M[d].route.path) == null ? void 0 : f.endsWith('*')) &&
          M[d].params['*'] !== s.params['*'])
      );
    };
  return i === 'assets'
    ? b.filter((s, d) => c(s, d) || m(s, d))
    : i === 'data'
      ? b.filter((s, d) => {
          var g;
          let f = E.routes[s.route.id];
          if (!f || !f.hasLoader) return !1;
          if (c(s, d) || m(s, d)) return !0;
          if (s.route.shouldRevalidate) {
            let S = s.route.shouldRevalidate({
              currentUrl: new URL(v.pathname + v.search + v.hash, window.origin),
              currentParams: ((g = M[0]) == null ? void 0 : g.params) || {},
              nextUrl: new URL(o, window.origin),
              nextParams: s.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof S == 'boolean') return S;
          }
          return !0;
        })
      : [];
}
function Jg(o, b, { includeHydrateFallback: M } = {}) {
  return Fg(
    o
      .map((E) => {
        let v = b.routes[E.route.id];
        if (!v) return [];
        let i = [v.module];
        return (
          v.clientActionModule && (i = i.concat(v.clientActionModule)),
          v.clientLoaderModule && (i = i.concat(v.clientLoaderModule)),
          M && v.hydrateFallbackModule && (i = i.concat(v.hydrateFallbackModule)),
          v.imports && (i = i.concat(v.imports)),
          i
        );
      })
      .flat(1)
  );
}
function Fg(o) {
  return [...new Set(o)];
}
function $g(o) {
  let b = {},
    M = Object.keys(o).sort();
  for (let E of M) b[E] = o[E];
  return b;
}
function Wg(o, b) {
  let M = new Set();
  return (
    new Set(b),
    o.reduce((E, v) => {
      let i = JSON.stringify($g(v));
      return (M.has(i) || (M.add(i), E.push({ key: i, link: v })), E);
    }, [])
  );
}
function hf() {
  let o = q.useContext(Ia);
  return (vf(o, 'You must render this element inside a <DataRouterContext.Provider> element'), o);
}
function kg() {
  let o = q.useContext(_u);
  return (
    vf(o, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    o
  );
}
var gf = q.createContext(void 0);
gf.displayName = 'FrameworkContext';
function yf() {
  let o = q.useContext(gf);
  return (vf(o, 'You must render this element inside a <HydratedRouter> element'), o);
}
function Pg(o, b) {
  let M = q.useContext(gf),
    [E, v] = q.useState(!1),
    [i, c] = q.useState(!1),
    { onFocus: m, onBlur: s, onMouseEnter: d, onMouseLeave: f, onTouchStart: g } = b,
    S = q.useRef(null);
  (q.useEffect(() => {
    if ((o === 'render' && c(!0), o === 'viewport')) {
      let h = (C) => {
          C.forEach((O) => {
            c(O.isIntersecting);
          });
        },
        x = new IntersectionObserver(h, { threshold: 0.5 });
      return (
        S.current && x.observe(S.current),
        () => {
          x.disconnect();
        }
      );
    }
  }, [o]),
    q.useEffect(() => {
      if (E) {
        let h = setTimeout(() => {
          c(!0);
        }, 100);
        return () => {
          clearTimeout(h);
        };
      }
    }, [E]));
  let r = () => {
      v(!0);
    },
    y = () => {
      (v(!1), c(!1));
    };
  return M
    ? o !== 'intent'
      ? [i, S, {}]
      : [
          i,
          S,
          {
            onFocus: Wn(m, r),
            onBlur: Wn(s, y),
            onMouseEnter: Wn(d, r),
            onMouseLeave: Wn(f, y),
            onTouchStart: Wn(g, r),
          },
        ]
    : [!1, S, {}];
}
function Wn(o, b) {
  return (M) => {
    (o && o(M), M.defaultPrevented || b(M));
  };
}
function Ig({ page: o, ...b }) {
  let M = cg(),
    { router: E } = hf(),
    v = q.useMemo(() => Vm(E.routes, o, E.basename), [E.routes, o, E.basename]);
  return v
    ? M
      ? q.createElement(ty, { page: o, matches: v, ...b })
      : q.createElement(ly, { page: o, matches: v, ...b })
    : null;
}
function ey(o) {
  let { manifest: b, routeModules: M } = yf(),
    [E, v] = q.useState([]);
  return (
    q.useEffect(() => {
      let i = !1;
      return (
        Kg(o, b, M).then((c) => {
          i || v(c);
        }),
        () => {
          i = !0;
        }
      );
    }, [o, b, M]),
    E
  );
}
function ty({ page: o, matches: b, ...M }) {
  let E = dl(),
    { future: v } = yf(),
    { basename: i } = hf(),
    c = q.useMemo(() => {
      if (o === E.pathname + E.search + E.hash) return [];
      let m = av(o, i, v.unstable_trailingSlashAwareDataRequests, 'rsc'),
        s = !1,
        d = [];
      for (let f of b)
        typeof f.route.shouldRevalidate == 'function' ? (s = !0) : d.push(f.route.id);
      return (
        s && d.length > 0 && m.searchParams.set('_routes', d.join(',')),
        [m.pathname + m.search]
      );
    }, [i, v.unstable_trailingSlashAwareDataRequests, o, E, b]);
  return q.createElement(
    q.Fragment,
    null,
    c.map((m) => q.createElement('link', { key: m, rel: 'prefetch', as: 'fetch', href: m, ...M }))
  );
}
function ly({ page: o, matches: b, ...M }) {
  let E = dl(),
    { future: v, manifest: i, routeModules: c } = yf(),
    { basename: m } = hf(),
    { loaderData: s, matches: d } = kg(),
    f = q.useMemo(() => _m(o, b, d, i, E, 'data'), [o, b, d, i, E]),
    g = q.useMemo(() => _m(o, b, d, i, E, 'assets'), [o, b, d, i, E]),
    S = q.useMemo(() => {
      if (o === E.pathname + E.search + E.hash) return [];
      let h = new Set(),
        x = !1;
      if (
        (b.forEach((O) => {
          var L;
          let B = i.routes[O.route.id];
          !B ||
            !B.hasLoader ||
            ((!f.some((T) => T.route.id === O.route.id) &&
              O.route.id in s &&
              (L = c[O.route.id]) != null &&
              L.shouldRevalidate) ||
            B.hasClientLoader
              ? (x = !0)
              : h.add(O.route.id));
        }),
        h.size === 0)
      )
        return [];
      let C = av(o, m, v.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        x &&
          h.size > 0 &&
          C.searchParams.set(
            '_routes',
            b
              .filter((O) => h.has(O.route.id))
              .map((O) => O.route.id)
              .join(',')
          ),
        [C.pathname + C.search]
      );
    }, [m, v.unstable_trailingSlashAwareDataRequests, s, E, i, f, b, o, c]),
    r = q.useMemo(() => Jg(g, i), [g, i]),
    y = ey(g);
  return q.createElement(
    q.Fragment,
    null,
    S.map((h) => q.createElement('link', { key: h, rel: 'prefetch', as: 'fetch', href: h, ...M })),
    r.map((h) => q.createElement('link', { key: h, rel: 'modulepreload', href: h, ...M })),
    y.map(({ key: h, link: x }) =>
      q.createElement('link', {
        key: h,
        nonce: M.nonce,
        ...x,
        crossOrigin: x.crossOrigin ?? M.crossOrigin,
      })
    )
  );
}
function ay(...o) {
  return (b) => {
    o.forEach((M) => {
      typeof M == 'function' ? M(b) : M != null && (M.current = b);
    });
  };
}
var ny =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  ny && (window.__reactRouterVersion = '7.14.2');
} catch {}
function iy({ basename: o, children: b, unstable_useTransitions: M, window: E }) {
  let v = q.useRef();
  v.current == null && (v.current = Y0({ window: E, v5Compat: !0 }));
  let i = v.current,
    [c, m] = q.useState({ action: i.action, location: i.location }),
    s = q.useCallback(
      (d) => {
        M === !1 ? m(d) : q.startTransition(() => m(d));
      },
      [M]
    );
  return (
    q.useLayoutEffect(() => i.listen(s), [i, s]),
    q.createElement(_g, {
      basename: o,
      children: b,
      location: c.location,
      navigationType: c.action,
      navigator: i,
      unstable_useTransitions: M,
    })
  );
}
var nv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  iv = q.forwardRef(function (
    {
      onClick: b,
      discover: M = 'render',
      prefetch: E = 'none',
      relative: v,
      reloadDocument: i,
      replace: c,
      unstable_mask: m,
      state: s,
      target: d,
      to: f,
      preventScrollReset: g,
      viewTransition: S,
      unstable_defaultShouldRevalidate: r,
      ...y
    },
    h
  ) {
    let { basename: x, navigator: C, unstable_useTransitions: O } = q.useContext(Nt),
      B = typeof f == 'string' && nv.test(f),
      L = Jm(f, x);
    f = L.to;
    let T = pg(f, { relative: v }),
      z = dl(),
      D = null;
    if (m) {
      let k = of(m, [], z.unstable_mask ? z.unstable_mask.pathname : '/', !0);
      (x !== '/' && (k.pathname = k.pathname === '/' ? x : Lt([x, k.pathname])),
        (D = C.createHref(k)));
    }
    let [R, _, U] = Pg(E, y),
      Y = fy(f, {
        replace: c,
        unstable_mask: m,
        state: s,
        target: d,
        preventScrollReset: g,
        relative: v,
        viewTransition: S,
        unstable_defaultShouldRevalidate: r,
        unstable_useTransitions: O,
      });
    function N(k) {
      (b && b(k), k.defaultPrevented || Y(k));
    }
    let J = !(L.isExternal || i),
      I = q.createElement('a', {
        ...y,
        ...U,
        href: (J ? D : void 0) || L.absoluteURL || T,
        onClick: J ? N : b,
        ref: ay(h, _),
        target: d,
        'data-discover': !B && M === 'render' ? 'true' : void 0,
      });
    return R && !B ? q.createElement(q.Fragment, null, I, q.createElement(Ig, { page: T })) : I;
  });
iv.displayName = 'Link';
var uy = q.forwardRef(function (
  {
    'aria-current': b = 'page',
    caseSensitive: M = !1,
    className: E = '',
    end: v = !1,
    style: i,
    to: c,
    viewTransition: m,
    children: s,
    ...d
  },
  f
) {
  let g = li(c, { relative: d.relative }),
    S = dl(),
    r = q.useContext(_u),
    { navigator: y, basename: h } = q.useContext(Nt),
    x = r != null && vy(g) && m === !0,
    C = y.encodeLocation ? y.encodeLocation(g).pathname : g.pathname,
    O = S.pathname,
    B = r && r.navigation && r.navigation.location ? r.navigation.location.pathname : null;
  (M || ((O = O.toLowerCase()), (B = B ? B.toLowerCase() : null), (C = C.toLowerCase())),
    B && h && (B = ol(B, h) || B));
  const L = C !== '/' && C.endsWith('/') ? C.length - 1 : C.length;
  let T = O === C || (!v && O.startsWith(C) && O.charAt(L) === '/'),
    z = B != null && (B === C || (!v && B.startsWith(C) && B.charAt(C.length) === '/')),
    D = { isActive: T, isPending: z, isTransitioning: x },
    R = T ? b : void 0,
    _;
  typeof E == 'function'
    ? (_ = E(D))
    : (_ = [E, T ? 'active' : null, z ? 'pending' : null, x ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let U = typeof i == 'function' ? i(D) : i;
  return q.createElement(
    iv,
    { ...d, 'aria-current': R, className: _, ref: f, style: U, to: c, viewTransition: m },
    typeof s == 'function' ? s(D) : s
  );
});
uy.displayName = 'NavLink';
var ry = q.forwardRef(
  (
    {
      discover: o = 'render',
      fetcherKey: b,
      navigate: M,
      reloadDocument: E,
      replace: v,
      state: i,
      method: c = Du,
      action: m,
      onSubmit: s,
      relative: d,
      preventScrollReset: f,
      viewTransition: g,
      unstable_defaultShouldRevalidate: S,
      ...r
    },
    y
  ) => {
    let { unstable_useTransitions: h } = q.useContext(Nt),
      x = dy(),
      C = my(m, { relative: d }),
      O = c.toLowerCase() === 'get' ? 'get' : 'post',
      B = typeof m == 'string' && nv.test(m),
      L = (T) => {
        if ((s && s(T), T.defaultPrevented)) return;
        T.preventDefault();
        let z = T.nativeEvent.submitter,
          D = (z == null ? void 0 : z.getAttribute('formmethod')) || c,
          R = () =>
            x(z || T.currentTarget, {
              fetcherKey: b,
              method: D,
              navigate: M,
              replace: v,
              state: i,
              relative: d,
              preventScrollReset: f,
              viewTransition: g,
              unstable_defaultShouldRevalidate: S,
            });
        h && M !== !1 ? q.startTransition(() => R()) : R();
      };
    return q.createElement('form', {
      ref: y,
      method: O,
      action: C,
      onSubmit: E ? s : L,
      ...r,
      'data-discover': !B && o === 'render' ? 'true' : void 0,
    });
  }
);
ry.displayName = 'Form';
function sy(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function uv(o) {
  let b = q.useContext(Ia);
  return (Le(b, sy(o)), b);
}
function fy(
  o,
  {
    target: b,
    replace: M,
    unstable_mask: E,
    state: v,
    preventScrollReset: i,
    relative: c,
    viewTransition: m,
    unstable_defaultShouldRevalidate: s,
    unstable_useTransitions: d,
  } = {}
) {
  let f = Sg(),
    g = dl(),
    S = li(o, { relative: c });
  return q.useCallback(
    (r) => {
      if (Gg(r, b)) {
        r.preventDefault();
        let y = M !== void 0 ? M : In(g) === In(S),
          h = () =>
            f(o, {
              replace: y,
              unstable_mask: E,
              state: v,
              preventScrollReset: i,
              relative: c,
              viewTransition: m,
              unstable_defaultShouldRevalidate: s,
            });
        d ? q.startTransition(() => h()) : h();
      }
    },
    [g, f, S, M, E, v, b, o, i, c, m, s, d]
  );
}
var oy = 0,
  cy = () => `__${String(++oy)}__`;
function dy() {
  let { router: o } = uv('useSubmit'),
    { basename: b } = q.useContext(Nt),
    M = Og(),
    E = o.fetch,
    v = o.navigate;
  return q.useCallback(
    async (i, c = {}) => {
      let { action: m, method: s, encType: d, formData: f, body: g } = Xg(i, b);
      if (c.navigate === !1) {
        let S = c.fetcherKey || cy();
        await E(S, M, c.action || m, {
          unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
          preventScrollReset: c.preventScrollReset,
          formData: f,
          body: g,
          formMethod: c.method || s,
          formEncType: c.encType || d,
          flushSync: c.flushSync,
        });
      } else
        await v(c.action || m, {
          unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
          preventScrollReset: c.preventScrollReset,
          formData: f,
          body: g,
          formMethod: c.method || s,
          formEncType: c.encType || d,
          replace: c.replace,
          state: c.state,
          fromRouteId: M,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [E, v, b, M]
  );
}
function my(o, { relative: b } = {}) {
  let { basename: M } = q.useContext(Nt),
    E = q.useContext(cl);
  Le(E, 'useFormAction must be used inside a RouteContext');
  let [v] = E.matches.slice(-1),
    i = { ...li(o || '.', { relative: b }) },
    c = dl();
  if (o == null) {
    i.search = c.search;
    let m = new URLSearchParams(i.search),
      s = m.getAll('index');
    if (s.some((f) => f === '')) {
      (m.delete('index'), s.filter((g) => g).forEach((g) => m.append('index', g)));
      let f = m.toString();
      i.search = f ? `?${f}` : '';
    }
  }
  return (
    (!o || o === '.') &&
      v.route.index &&
      (i.search = i.search ? i.search.replace(/^\?/, '?index&') : '?index'),
    M !== '/' && (i.pathname = i.pathname === '/' ? M : Lt([M, i.pathname])),
    In(i)
  );
}
function vy(o, { relative: b } = {}) {
  let M = q.useContext(Wm);
  Le(
    M != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: E } = uv('useViewTransitionState'),
    v = li(o, { relative: b });
  if (!M.isTransitioning) return !1;
  let i = ol(M.currentLocation.pathname, E) || M.currentLocation.pathname,
    c = ol(M.nextLocation.pathname, E) || M.nextLocation.pathname;
  return Uu(v.pathname, c) != null || Uu(v.pathname, i) != null;
}
const hy = '_index_r8hfh_1',
  gy = { index: hy },
  yy = '_layout_2udzi_1',
  py = '_top_bar_placeholder_2udzi_10',
  Sy = '_main_2udzi_14',
  xy = '_field_wrapper_2udzi_22',
  Wa = { layout: yy, top_bar_placeholder: py, main: Sy, field_wrapper: xy },
  Ey = '_surface_6wr97_1',
  Ty = '_canvas_layer_6wr97_11',
  by = '_game_over_line_6wr97_22',
  af = { surface: Ey, canvas_layer: Ty, game_over_line: by },
  My = '_layer_z1h0v_1',
  Ay = '_effect_z1h0v_7',
  Cy = '_ring_z1h0v_12',
  Ry = '_score_z1h0v_24',
  zy = '_special_z1h0v_36',
  kn = { layer: My, effect: Ay, ring: Cy, score: Ry, special: zy },
  Dy = ({ effects: o }) =>
    ae.jsx('div', {
      className: kn.layer,
      'aria-hidden': 'true',
      children: o.map((b) =>
        ae.jsxs(
          'div',
          {
            className: `${kn.effect} ${b.isSpecial ? kn.special : ''}`,
            style: { left: `${b.x}px`, top: `${b.y}px` },
            children: [
              ae.jsx('span', { className: kn.ring }),
              b.score > 0
                ? ae.jsxs('span', { className: kn.score, children: ['+', b.score] })
                : null,
            ],
          },
          b.id
        )
      ),
    }),
  Oy = '_line_1ia7c_1',
  By = '_preview_1ia7c_9',
  wm = { line: Oy, preview: By },
  Uy = (o) => `/ochimono-game/${o}`.replace(/\/{2,}/g, '/'),
  Ny = ({ x: o, fieldHeight: b, item: M }) => {
    if (!M) return null;
    const E = M.radius * 2;
    return ae.jsxs(ae.Fragment, {
      children: [
        ae.jsx('div', {
          className: wm.line,
          style: { left: `${o}px`, height: `${b}px` },
          'aria-hidden': 'true',
        }),
        ae.jsx('img', {
          src: Uy(M.svgPath),
          alt: '',
          'aria-hidden': 'true',
          className: wm.preview,
          style: { left: `${o - M.radius}px`, width: `${E}px`, height: `${E}px` },
        }),
      ],
    });
  },
  _y = (o) => Math.max(0, Math.min(1, o)),
  wy = ({
    canvasContainerRef: o,
    fieldWidth: b,
    fieldHeight: M,
    gameOverLineY: E,
    currentItem: v,
    mergeEffects: i,
    canInteract: c,
    onDrop: m,
  }) => {
    const s = q.useRef(null),
      [d, f] = q.useState(0.5),
      g = q.useCallback((x) => {
        const C = s.current;
        if (!C) return;
        const O = C.getBoundingClientRect(),
          B = _y((x - O.left) / O.width);
        f(B);
      }, []);
    q.useEffect(() => {
      f(0.5);
    }, [v == null ? void 0 : v.level]);
    const S = (x) => {
        var C;
        c && (g(x.clientX), (C = s.current) == null || C.setPointerCapture(x.pointerId));
      },
      r = (x) => {
        if (x.buttons === 0 && x.pointerType === 'mouse') {
          g(x.clientX);
          return;
        }
        g(x.clientX);
      },
      y = (x) => {
        var C;
        c && (g(x.clientX), m(d), (C = s.current) == null || C.releasePointerCapture(x.pointerId));
      },
      h = v ? Math.max(v.radius, Math.min(b - v.radius, d * b)) : d * b;
    return ae.jsxs('div', {
      ref: s,
      className: af.surface,
      style: { width: `${b}px`, height: `${M}px` },
      onPointerDown: S,
      onPointerMove: r,
      onPointerUp: y,
      role: 'application',
      'aria-label': 'ゲームフィールド',
      children: [
        ae.jsx('div', { ref: o, className: af.canvas_layer }),
        ae.jsx('div', {
          className: af.game_over_line,
          style: { top: `${E}px` },
          'aria-hidden': 'true',
        }),
        c ? ae.jsx(Ny, { x: h, fieldHeight: M, item: v }) : null,
        ae.jsx(Dy, { effects: i }),
      ],
    });
  },
  Hy = '_overlay_o79hb_1',
  Ly = '_panel_o79hb_13',
  Yy = '_new_record_o79hb_24',
  jy = '_title_o79hb_32',
  Gy = '_scores_o79hb_40',
  Vy = '_row_o79hb_46',
  qy = '_gold_o79hb_64',
  Xy = '_restart_o79hb_69',
  fl = {
    overlay: Hy,
    panel: Ly,
    new_record: Yy,
    title: jy,
    scores: Gy,
    row: Vy,
    gold: qy,
    restart: Xy,
  },
  Qy = ({ score: o, bestScore: b, isNewRecord: M, onRestart: E }) =>
    ae.jsx('div', {
      className: fl.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'ゲームオーバー',
      children: ae.jsxs('div', {
        className: fl.panel,
        children: [
          M ? ae.jsx('p', { className: fl.new_record, children: '🎉 新記録！' }) : null,
          ae.jsx('h2', { className: fl.title, children: 'GAME OVER' }),
          ae.jsxs('dl', {
            className: fl.scores,
            children: [
              ae.jsxs('div', {
                className: fl.row,
                children: [
                  ae.jsx('dt', { children: 'スコア' }),
                  ae.jsx('dd', { className: M ? fl.gold : '', children: o }),
                ],
              }),
              ae.jsxs('div', {
                className: fl.row,
                children: [ae.jsx('dt', { children: 'ベスト' }), ae.jsx('dd', { children: b })],
              }),
            ],
          }),
          ae.jsx('button', {
            type: 'button',
            className: fl.restart,
            onClick: E,
            children: 'もう一度あそぶ',
          }),
        ],
      }),
    }),
  Zy = '_overlay_1xsci_1',
  Ky = '_panel_1xsci_12',
  Jy = '_title_1xsci_22',
  Fy = '_lead_1xsci_30',
  $y = '_start_1xsci_37',
  Pn = { overlay: Zy, panel: Ky, title: Jy, lead: Fy, start: $y },
  Wy = ({ onStart: o }) =>
    ae.jsx('div', {
      className: Pn.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'スタート画面',
      children: ae.jsxs('div', {
        className: Pn.panel,
        children: [
          ae.jsxs('h2', {
            className: Pn.title,
            children: ['💖🍓🐱', ae.jsx('br', {}), 'にゃんハートいちごパズル'],
          }),
          ae.jsxs('p', {
            className: Pn.lead,
            children: [
              '同じアイテム同士をくっつけて',
              ae.jsx('br', {}),
              'にゃんハートいちごをめざそう！',
            ],
          }),
          ae.jsx('button', {
            type: 'button',
            className: Pn.start,
            onClick: o,
            children: 'スタート',
          }),
        ],
      }),
    }),
  ky = '_top_bar_ra5x3_1',
  Py = '_right_ra5x3_11',
  Hm = { top_bar: ky, right: Py },
  Iy = '_next_1h3di_1',
  ep = '_label_1h3di_7',
  tp = '_thumb_1h3di_14',
  lp = '_image_1h3di_26',
  Ru = { next: Iy, label: ep, thumb: tp, image: lp },
  ap = (o) => `/ochimono-game/${o}`.replace(/\/{2,}/g, '/'),
  np = ({ item: o }) =>
    ae.jsxs('div', {
      className: Ru.next,
      children: [
        ae.jsx('span', { className: Ru.label, children: 'NEXT' }),
        ae.jsx('div', {
          className: Ru.thumb,
          'data-testid': 'next-item',
          children: o
            ? ae.jsx('img', { src: ap(o.svgPath), alt: o.name, className: Ru.image })
            : null,
        }),
      ],
    }),
  ip = '_score_display_pgke7_1',
  up = '_row_pgke7_7',
  rp = '_label_pgke7_13',
  sp = '_value_pgke7_20',
  fp = '_label_small_pgke7_28',
  op = '_value_small_pgke7_35',
  ia = { score_display: ip, row: up, label: rp, value: sp, label_small: fp, value_small: op },
  cp = ({ score: o, bestScore: b }) =>
    ae.jsxs('div', {
      className: ia.score_display,
      children: [
        ae.jsxs('div', {
          className: ia.row,
          children: [
            ae.jsx('span', { className: ia.label, children: 'SCORE' }),
            ae.jsx('span', { className: ia.value, 'data-testid': 'score-value', children: o }),
          ],
        }),
        ae.jsxs('div', {
          className: ia.row,
          children: [
            ae.jsx('span', { className: ia.label_small, children: 'BEST' }),
            ae.jsx('span', { className: ia.value_small, children: b }),
          ],
        }),
      ],
    }),
  dp = '_toggle_1ap46_1',
  mp = { toggle: dp },
  vp = ({ isOn: o, onToggle: b }) =>
    ae.jsx('button', {
      type: 'button',
      className: mp.toggle,
      onClick: b,
      'aria-label': o ? 'サウンドをOFFにする' : 'サウンドをONにする',
      'aria-pressed': o,
      children: ae.jsx('span', { 'aria-hidden': 'true', children: o ? '🔊' : '🔇' }),
    }),
  hp = ({ score: o, bestScore: b, nextItem: M, isSoundOn: E, onToggleSound: v }) =>
    ae.jsxs('header', {
      className: Hm.top_bar,
      children: [
        ae.jsx(cp, { score: o, bestScore: b }),
        ae.jsxs('div', {
          className: Hm.right,
          children: [ae.jsx(np, { item: M }), ae.jsx(vp, { isOn: E, onToggle: v })],
        }),
      ],
    });
var Bu = { exports: {} };
/*!
 * matter-js 0.20.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) Liam Brummitt and contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var gp = Bu.exports,
  Lm;
function yp() {
  return (
    Lm ||
      ((Lm = 1),
      (function (o, b) {
        (function (E, v) {
          o.exports = v();
        })(gp, function () {
          return (function (M) {
            var E = {};
            function v(i) {
              if (E[i]) return E[i].exports;
              var c = (E[i] = { i, l: !1, exports: {} });
              return (M[i].call(c.exports, c, c.exports, v), (c.l = !0), c.exports);
            }
            return (
              (v.m = M),
              (v.c = E),
              (v.d = function (i, c, m) {
                v.o(i, c) || Object.defineProperty(i, c, { enumerable: !0, get: m });
              }),
              (v.r = function (i) {
                (typeof Symbol < 'u' &&
                  Symbol.toStringTag &&
                  Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }),
                  Object.defineProperty(i, '__esModule', { value: !0 }));
              }),
              (v.t = function (i, c) {
                if (
                  (c & 1 && (i = v(i)),
                  c & 8 || (c & 4 && typeof i == 'object' && i && i.__esModule))
                )
                  return i;
                var m = Object.create(null);
                if (
                  (v.r(m),
                  Object.defineProperty(m, 'default', { enumerable: !0, value: i }),
                  c & 2 && typeof i != 'string')
                )
                  for (var s in i)
                    v.d(
                      m,
                      s,
                      function (d) {
                        return i[d];
                      }.bind(null, s)
                    );
                return m;
              }),
              (v.n = function (i) {
                var c =
                  i && i.__esModule
                    ? function () {
                        return i.default;
                      }
                    : function () {
                        return i;
                      };
                return (v.d(c, 'a', c), c);
              }),
              (v.o = function (i, c) {
                return Object.prototype.hasOwnProperty.call(i, c);
              }),
              (v.p = ''),
              v((v.s = 20))
            );
          })([
            function (M, E) {
              var v = {};
              ((M.exports = v),
                (function () {
                  ((v._baseDelta = 1e3 / 60),
                    (v._nextId = 0),
                    (v._seed = 0),
                    (v._nowStartTime = +new Date()),
                    (v._warnedOnce = {}),
                    (v._decomp = null),
                    (v.extend = function (c, m) {
                      var s, d;
                      typeof m == 'boolean' ? ((s = 2), (d = m)) : ((s = 1), (d = !0));
                      for (var f = s; f < arguments.length; f++) {
                        var g = arguments[f];
                        if (g)
                          for (var S in g)
                            d &&
                            g[S] &&
                            g[S].constructor === Object &&
                            (!c[S] || c[S].constructor === Object)
                              ? ((c[S] = c[S] || {}), v.extend(c[S], d, g[S]))
                              : (c[S] = g[S]);
                      }
                      return c;
                    }),
                    (v.clone = function (c, m) {
                      return v.extend({}, m, c);
                    }),
                    (v.keys = function (c) {
                      if (Object.keys) return Object.keys(c);
                      var m = [];
                      for (var s in c) m.push(s);
                      return m;
                    }),
                    (v.values = function (c) {
                      var m = [];
                      if (Object.keys) {
                        for (var s = Object.keys(c), d = 0; d < s.length; d++) m.push(c[s[d]]);
                        return m;
                      }
                      for (var f in c) m.push(c[f]);
                      return m;
                    }),
                    (v.get = function (c, m, s, d) {
                      m = m.split('.').slice(s, d);
                      for (var f = 0; f < m.length; f += 1) c = c[m[f]];
                      return c;
                    }),
                    (v.set = function (c, m, s, d, f) {
                      var g = m.split('.').slice(d, f);
                      return ((v.get(c, m, 0, -1)[g[g.length - 1]] = s), s);
                    }),
                    (v.shuffle = function (c) {
                      for (var m = c.length - 1; m > 0; m--) {
                        var s = Math.floor(v.random() * (m + 1)),
                          d = c[m];
                        ((c[m] = c[s]), (c[s] = d));
                      }
                      return c;
                    }),
                    (v.choose = function (c) {
                      return c[Math.floor(v.random() * c.length)];
                    }),
                    (v.isElement = function (c) {
                      return typeof HTMLElement < 'u'
                        ? c instanceof HTMLElement
                        : !!(c && c.nodeType && c.nodeName);
                    }),
                    (v.isArray = function (c) {
                      return Object.prototype.toString.call(c) === '[object Array]';
                    }),
                    (v.isFunction = function (c) {
                      return typeof c == 'function';
                    }),
                    (v.isPlainObject = function (c) {
                      return typeof c == 'object' && c.constructor === Object;
                    }),
                    (v.isString = function (c) {
                      return toString.call(c) === '[object String]';
                    }),
                    (v.clamp = function (c, m, s) {
                      return c < m ? m : c > s ? s : c;
                    }),
                    (v.sign = function (c) {
                      return c < 0 ? -1 : 1;
                    }),
                    (v.now = function () {
                      if (typeof window < 'u' && window.performance) {
                        if (window.performance.now) return window.performance.now();
                        if (window.performance.webkitNow) return window.performance.webkitNow();
                      }
                      return Date.now ? Date.now() : new Date() - v._nowStartTime;
                    }),
                    (v.random = function (c, m) {
                      return (
                        (c = typeof c < 'u' ? c : 0),
                        (m = typeof m < 'u' ? m : 1),
                        c + i() * (m - c)
                      );
                    }));
                  var i = function () {
                    return ((v._seed = (v._seed * 9301 + 49297) % 233280), v._seed / 233280);
                  };
                  ((v.colorToNumber = function (c) {
                    return (
                      (c = c.replace('#', '')),
                      c.length == 3 &&
                        (c =
                          c.charAt(0) +
                          c.charAt(0) +
                          c.charAt(1) +
                          c.charAt(1) +
                          c.charAt(2) +
                          c.charAt(2)),
                      parseInt(c, 16)
                    );
                  }),
                    (v.logLevel = 1),
                    (v.log = function () {
                      console &&
                        v.logLevel > 0 &&
                        v.logLevel <= 3 &&
                        console.log.apply(
                          console,
                          ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                        );
                    }),
                    (v.info = function () {
                      console &&
                        v.logLevel > 0 &&
                        v.logLevel <= 2 &&
                        console.info.apply(
                          console,
                          ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                        );
                    }),
                    (v.warn = function () {
                      console &&
                        v.logLevel > 0 &&
                        v.logLevel <= 3 &&
                        console.warn.apply(
                          console,
                          ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                        );
                    }),
                    (v.warnOnce = function () {
                      var c = Array.prototype.slice.call(arguments).join(' ');
                      v._warnedOnce[c] || (v.warn(c), (v._warnedOnce[c] = !0));
                    }),
                    (v.deprecated = function (c, m, s) {
                      c[m] = v.chain(function () {
                        v.warnOnce('🔅 deprecated 🔅', s);
                      }, c[m]);
                    }),
                    (v.nextId = function () {
                      return v._nextId++;
                    }),
                    (v.indexOf = function (c, m) {
                      if (c.indexOf) return c.indexOf(m);
                      for (var s = 0; s < c.length; s++) if (c[s] === m) return s;
                      return -1;
                    }),
                    (v.map = function (c, m) {
                      if (c.map) return c.map(m);
                      for (var s = [], d = 0; d < c.length; d += 1) s.push(m(c[d]));
                      return s;
                    }),
                    (v.topologicalSort = function (c) {
                      var m = [],
                        s = [],
                        d = [];
                      for (var f in c) !s[f] && !d[f] && v._topologicalSort(f, s, d, c, m);
                      return m;
                    }),
                    (v._topologicalSort = function (c, m, s, d, f) {
                      var g = d[c] || [];
                      s[c] = !0;
                      for (var S = 0; S < g.length; S += 1) {
                        var r = g[S];
                        s[r] || m[r] || v._topologicalSort(r, m, s, d, f);
                      }
                      ((s[c] = !1), (m[c] = !0), f.push(c));
                    }),
                    (v.chain = function () {
                      for (var c = [], m = 0; m < arguments.length; m += 1) {
                        var s = arguments[m];
                        s._chained ? c.push.apply(c, s._chained) : c.push(s);
                      }
                      var d = function () {
                        for (
                          var f, g = new Array(arguments.length), S = 0, r = arguments.length;
                          S < r;
                          S++
                        )
                          g[S] = arguments[S];
                        for (S = 0; S < c.length; S += 1) {
                          var y = c[S].apply(f, g);
                          typeof y < 'u' && (f = y);
                        }
                        return f;
                      };
                      return ((d._chained = c), d);
                    }),
                    (v.chainPathBefore = function (c, m, s) {
                      return v.set(c, m, v.chain(s, v.get(c, m)));
                    }),
                    (v.chainPathAfter = function (c, m, s) {
                      return v.set(c, m, v.chain(v.get(c, m), s));
                    }),
                    (v.setDecomp = function (c) {
                      v._decomp = c;
                    }),
                    (v.getDecomp = function () {
                      var c = v._decomp;
                      try {
                        (!c && typeof window < 'u' && (c = window.decomp),
                          !c && typeof ym < 'u' && (c = ym.decomp));
                      } catch {
                        c = null;
                      }
                      return c;
                    }));
                })());
            },
            function (M, E) {
              var v = {};
              ((M.exports = v),
                (function () {
                  ((v.create = function (i) {
                    var c = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
                    return (i && v.update(c, i), c);
                  }),
                    (v.update = function (i, c, m) {
                      ((i.min.x = 1 / 0),
                        (i.max.x = -1 / 0),
                        (i.min.y = 1 / 0),
                        (i.max.y = -1 / 0));
                      for (var s = 0; s < c.length; s++) {
                        var d = c[s];
                        (d.x > i.max.x && (i.max.x = d.x),
                          d.x < i.min.x && (i.min.x = d.x),
                          d.y > i.max.y && (i.max.y = d.y),
                          d.y < i.min.y && (i.min.y = d.y));
                      }
                      m &&
                        (m.x > 0 ? (i.max.x += m.x) : (i.min.x += m.x),
                        m.y > 0 ? (i.max.y += m.y) : (i.min.y += m.y));
                    }),
                    (v.contains = function (i, c) {
                      return c.x >= i.min.x && c.x <= i.max.x && c.y >= i.min.y && c.y <= i.max.y;
                    }),
                    (v.overlaps = function (i, c) {
                      return (
                        i.min.x <= c.max.x &&
                        i.max.x >= c.min.x &&
                        i.max.y >= c.min.y &&
                        i.min.y <= c.max.y
                      );
                    }),
                    (v.translate = function (i, c) {
                      ((i.min.x += c.x), (i.max.x += c.x), (i.min.y += c.y), (i.max.y += c.y));
                    }),
                    (v.shift = function (i, c) {
                      var m = i.max.x - i.min.x,
                        s = i.max.y - i.min.y;
                      ((i.min.x = c.x), (i.max.x = c.x + m), (i.min.y = c.y), (i.max.y = c.y + s));
                    }));
                })());
            },
            function (M, E) {
              var v = {};
              ((M.exports = v),
                (function () {
                  ((v.create = function (i, c) {
                    return { x: i || 0, y: c || 0 };
                  }),
                    (v.clone = function (i) {
                      return { x: i.x, y: i.y };
                    }),
                    (v.magnitude = function (i) {
                      return Math.sqrt(i.x * i.x + i.y * i.y);
                    }),
                    (v.magnitudeSquared = function (i) {
                      return i.x * i.x + i.y * i.y;
                    }),
                    (v.rotate = function (i, c, m) {
                      var s = Math.cos(c),
                        d = Math.sin(c);
                      m || (m = {});
                      var f = i.x * s - i.y * d;
                      return ((m.y = i.x * d + i.y * s), (m.x = f), m);
                    }),
                    (v.rotateAbout = function (i, c, m, s) {
                      var d = Math.cos(c),
                        f = Math.sin(c);
                      s || (s = {});
                      var g = m.x + ((i.x - m.x) * d - (i.y - m.y) * f);
                      return ((s.y = m.y + ((i.x - m.x) * f + (i.y - m.y) * d)), (s.x = g), s);
                    }),
                    (v.normalise = function (i) {
                      var c = v.magnitude(i);
                      return c === 0 ? { x: 0, y: 0 } : { x: i.x / c, y: i.y / c };
                    }),
                    (v.dot = function (i, c) {
                      return i.x * c.x + i.y * c.y;
                    }),
                    (v.cross = function (i, c) {
                      return i.x * c.y - i.y * c.x;
                    }),
                    (v.cross3 = function (i, c, m) {
                      return (c.x - i.x) * (m.y - i.y) - (c.y - i.y) * (m.x - i.x);
                    }),
                    (v.add = function (i, c, m) {
                      return (m || (m = {}), (m.x = i.x + c.x), (m.y = i.y + c.y), m);
                    }),
                    (v.sub = function (i, c, m) {
                      return (m || (m = {}), (m.x = i.x - c.x), (m.y = i.y - c.y), m);
                    }),
                    (v.mult = function (i, c) {
                      return { x: i.x * c, y: i.y * c };
                    }),
                    (v.div = function (i, c) {
                      return { x: i.x / c, y: i.y / c };
                    }),
                    (v.perp = function (i, c) {
                      return ((c = c === !0 ? -1 : 1), { x: c * -i.y, y: c * i.x });
                    }),
                    (v.neg = function (i) {
                      return { x: -i.x, y: -i.y };
                    }),
                    (v.angle = function (i, c) {
                      return Math.atan2(c.y - i.y, c.x - i.x);
                    }),
                    (v._temp = [
                      v.create(),
                      v.create(),
                      v.create(),
                      v.create(),
                      v.create(),
                      v.create(),
                    ]));
                })());
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(2),
                m = v(0);
              (function () {
                ((i.create = function (s, d) {
                  for (var f = [], g = 0; g < s.length; g++) {
                    var S = s[g],
                      r = { x: S.x, y: S.y, index: g, body: d, isInternal: !1 };
                    f.push(r);
                  }
                  return f;
                }),
                  (i.fromPath = function (s, d) {
                    var f = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                      g = [];
                    return (
                      s.replace(f, function (S, r, y) {
                        g.push({ x: parseFloat(r), y: parseFloat(y) });
                      }),
                      i.create(g, d)
                    );
                  }),
                  (i.centre = function (s) {
                    for (
                      var d = i.area(s, !0), f = { x: 0, y: 0 }, g, S, r, y = 0;
                      y < s.length;
                      y++
                    )
                      ((r = (y + 1) % s.length),
                        (g = c.cross(s[y], s[r])),
                        (S = c.mult(c.add(s[y], s[r]), g)),
                        (f = c.add(f, S)));
                    return c.div(f, 6 * d);
                  }),
                  (i.mean = function (s) {
                    for (var d = { x: 0, y: 0 }, f = 0; f < s.length; f++)
                      ((d.x += s[f].x), (d.y += s[f].y));
                    return c.div(d, s.length);
                  }),
                  (i.area = function (s, d) {
                    for (var f = 0, g = s.length - 1, S = 0; S < s.length; S++)
                      ((f += (s[g].x - s[S].x) * (s[g].y + s[S].y)), (g = S));
                    return d ? f / 2 : Math.abs(f) / 2;
                  }),
                  (i.inertia = function (s, d) {
                    for (var f = 0, g = 0, S = s, r, y, h = 0; h < S.length; h++)
                      ((y = (h + 1) % S.length),
                        (r = Math.abs(c.cross(S[y], S[h]))),
                        (f += r * (c.dot(S[y], S[y]) + c.dot(S[y], S[h]) + c.dot(S[h], S[h]))),
                        (g += r));
                    return (d / 6) * (f / g);
                  }),
                  (i.translate = function (s, d, f) {
                    f = typeof f < 'u' ? f : 1;
                    var g = s.length,
                      S = d.x * f,
                      r = d.y * f,
                      y;
                    for (y = 0; y < g; y++) ((s[y].x += S), (s[y].y += r));
                    return s;
                  }),
                  (i.rotate = function (s, d, f) {
                    if (d !== 0) {
                      var g = Math.cos(d),
                        S = Math.sin(d),
                        r = f.x,
                        y = f.y,
                        h = s.length,
                        x,
                        C,
                        O,
                        B;
                      for (B = 0; B < h; B++)
                        ((x = s[B]),
                          (C = x.x - r),
                          (O = x.y - y),
                          (x.x = r + (C * g - O * S)),
                          (x.y = y + (C * S + O * g)));
                      return s;
                    }
                  }),
                  (i.contains = function (s, d) {
                    for (var f = d.x, g = d.y, S = s.length, r = s[S - 1], y, h = 0; h < S; h++) {
                      if (((y = s[h]), (f - r.x) * (y.y - r.y) + (g - r.y) * (r.x - y.x) > 0))
                        return !1;
                      r = y;
                    }
                    return !0;
                  }),
                  (i.scale = function (s, d, f, g) {
                    if (d === 1 && f === 1) return s;
                    g = g || i.centre(s);
                    for (var S, r, y = 0; y < s.length; y++)
                      ((S = s[y]),
                        (r = c.sub(S, g)),
                        (s[y].x = g.x + r.x * d),
                        (s[y].y = g.y + r.y * f));
                    return s;
                  }),
                  (i.chamfer = function (s, d, f, g, S) {
                    (typeof d == 'number' ? (d = [d]) : (d = d || [8]),
                      (f = typeof f < 'u' ? f : -1),
                      (g = g || 2),
                      (S = S || 14));
                    for (var r = [], y = 0; y < s.length; y++) {
                      var h = s[y - 1 >= 0 ? y - 1 : s.length - 1],
                        x = s[y],
                        C = s[(y + 1) % s.length],
                        O = d[y < d.length ? y : d.length - 1];
                      if (O === 0) {
                        r.push(x);
                        continue;
                      }
                      var B = c.normalise({ x: x.y - h.y, y: h.x - x.x }),
                        L = c.normalise({ x: C.y - x.y, y: x.x - C.x }),
                        T = Math.sqrt(2 * Math.pow(O, 2)),
                        z = c.mult(m.clone(B), O),
                        D = c.normalise(c.mult(c.add(B, L), 0.5)),
                        R = c.sub(x, c.mult(D, T)),
                        _ = f;
                      (f === -1 && (_ = Math.pow(O, 0.32) * 1.75),
                        (_ = m.clamp(_, g, S)),
                        _ % 2 === 1 && (_ += 1));
                      for (var U = Math.acos(c.dot(B, L)), Y = U / _, N = 0; N < _; N++)
                        r.push(c.add(c.rotate(z, Y * N), R));
                    }
                    return r;
                  }),
                  (i.clockwiseSort = function (s) {
                    var d = i.mean(s);
                    return (
                      s.sort(function (f, g) {
                        return c.angle(d, f) - c.angle(d, g);
                      }),
                      s
                    );
                  }),
                  (i.isConvex = function (s) {
                    var d = 0,
                      f = s.length,
                      g,
                      S,
                      r,
                      y;
                    if (f < 3) return null;
                    for (g = 0; g < f; g++)
                      if (
                        ((S = (g + 1) % f),
                        (r = (g + 2) % f),
                        (y = (s[S].x - s[g].x) * (s[r].y - s[S].y)),
                        (y -= (s[S].y - s[g].y) * (s[r].x - s[S].x)),
                        y < 0 ? (d |= 1) : y > 0 && (d |= 2),
                        d === 3)
                      )
                        return !1;
                    return d !== 0 ? !0 : null;
                  }),
                  (i.hull = function (s) {
                    var d = [],
                      f = [],
                      g,
                      S;
                    for (
                      s = s.slice(0),
                        s.sort(function (r, y) {
                          var h = r.x - y.x;
                          return h !== 0 ? h : r.y - y.y;
                        }),
                        S = 0;
                      S < s.length;
                      S += 1
                    ) {
                      for (
                        g = s[S];
                        f.length >= 2 && c.cross3(f[f.length - 2], f[f.length - 1], g) <= 0;
                      )
                        f.pop();
                      f.push(g);
                    }
                    for (S = s.length - 1; S >= 0; S -= 1) {
                      for (
                        g = s[S];
                        d.length >= 2 && c.cross3(d[d.length - 2], d[d.length - 1], g) <= 0;
                      )
                        d.pop();
                      d.push(g);
                    }
                    return (d.pop(), f.pop(), d.concat(f));
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(3),
                m = v(2),
                s = v(7),
                d = v(0),
                f = v(1),
                g = v(11);
              (function () {
                ((i._timeCorrection = !0),
                  (i._inertiaScale = 4),
                  (i._nextCollidingGroupId = 1),
                  (i._nextNonCollidingGroupId = -1),
                  (i._nextCategory = 1),
                  (i._baseDelta = 1e3 / 60),
                  (i.create = function (r) {
                    var y = {
                        id: d.nextId(),
                        type: 'body',
                        label: 'Body',
                        parts: [],
                        plugin: {},
                        angle: 0,
                        vertices: c.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
                        position: { x: 0, y: 0 },
                        force: { x: 0, y: 0 },
                        torque: 0,
                        positionImpulse: { x: 0, y: 0 },
                        constraintImpulse: { x: 0, y: 0, angle: 0 },
                        totalContacts: 0,
                        speed: 0,
                        angularSpeed: 0,
                        velocity: { x: 0, y: 0 },
                        angularVelocity: 0,
                        isSensor: !1,
                        isStatic: !1,
                        isSleeping: !1,
                        motion: 0,
                        sleepThreshold: 60,
                        density: 0.001,
                        restitution: 0,
                        friction: 0.1,
                        frictionStatic: 0.5,
                        frictionAir: 0.01,
                        collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                        slop: 0.05,
                        timeScale: 1,
                        render: {
                          visible: !0,
                          opacity: 1,
                          strokeStyle: null,
                          fillStyle: null,
                          lineWidth: null,
                          sprite: { xScale: 1, yScale: 1, xOffset: 0, yOffset: 0 },
                        },
                        events: null,
                        bounds: null,
                        chamfer: null,
                        circleRadius: 0,
                        positionPrev: null,
                        anglePrev: 0,
                        parent: null,
                        axes: null,
                        area: 0,
                        mass: 0,
                        inertia: 0,
                        deltaTime: 16.666666666666668,
                        _original: null,
                      },
                      h = d.extend(y, r);
                    return (S(h, r), h);
                  }),
                  (i.nextGroup = function (r) {
                    return r ? i._nextNonCollidingGroupId-- : i._nextCollidingGroupId++;
                  }),
                  (i.nextCategory = function () {
                    return ((i._nextCategory = i._nextCategory << 1), i._nextCategory);
                  }));
                var S = function (r, y) {
                  ((y = y || {}),
                    i.set(r, {
                      bounds: r.bounds || f.create(r.vertices),
                      positionPrev: r.positionPrev || m.clone(r.position),
                      anglePrev: r.anglePrev || r.angle,
                      vertices: r.vertices,
                      parts: r.parts || [r],
                      isStatic: r.isStatic,
                      isSleeping: r.isSleeping,
                      parent: r.parent || r,
                    }),
                    c.rotate(r.vertices, r.angle, r.position),
                    g.rotate(r.axes, r.angle),
                    f.update(r.bounds, r.vertices, r.velocity),
                    i.set(r, {
                      axes: y.axes || r.axes,
                      area: y.area || r.area,
                      mass: y.mass || r.mass,
                      inertia: y.inertia || r.inertia,
                    }));
                  var h = r.isStatic
                      ? '#14151f'
                      : d.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1']),
                    x = r.isStatic ? '#555' : '#ccc',
                    C = r.isStatic && r.render.fillStyle === null ? 1 : 0;
                  ((r.render.fillStyle = r.render.fillStyle || h),
                    (r.render.strokeStyle = r.render.strokeStyle || x),
                    (r.render.lineWidth = r.render.lineWidth || C),
                    (r.render.sprite.xOffset +=
                      -(r.bounds.min.x - r.position.x) / (r.bounds.max.x - r.bounds.min.x)),
                    (r.render.sprite.yOffset +=
                      -(r.bounds.min.y - r.position.y) / (r.bounds.max.y - r.bounds.min.y)));
                };
                ((i.set = function (r, y, h) {
                  var x;
                  typeof y == 'string' && ((x = y), (y = {}), (y[x] = h));
                  for (x in y)
                    if (Object.prototype.hasOwnProperty.call(y, x))
                      switch (((h = y[x]), x)) {
                        case 'isStatic':
                          i.setStatic(r, h);
                          break;
                        case 'isSleeping':
                          s.set(r, h);
                          break;
                        case 'mass':
                          i.setMass(r, h);
                          break;
                        case 'density':
                          i.setDensity(r, h);
                          break;
                        case 'inertia':
                          i.setInertia(r, h);
                          break;
                        case 'vertices':
                          i.setVertices(r, h);
                          break;
                        case 'position':
                          i.setPosition(r, h);
                          break;
                        case 'angle':
                          i.setAngle(r, h);
                          break;
                        case 'velocity':
                          i.setVelocity(r, h);
                          break;
                        case 'angularVelocity':
                          i.setAngularVelocity(r, h);
                          break;
                        case 'speed':
                          i.setSpeed(r, h);
                          break;
                        case 'angularSpeed':
                          i.setAngularSpeed(r, h);
                          break;
                        case 'parts':
                          i.setParts(r, h);
                          break;
                        case 'centre':
                          i.setCentre(r, h);
                          break;
                        default:
                          r[x] = h;
                      }
                }),
                  (i.setStatic = function (r, y) {
                    for (var h = 0; h < r.parts.length; h++) {
                      var x = r.parts[h];
                      (y
                        ? (x.isStatic ||
                            (x._original = {
                              restitution: x.restitution,
                              friction: x.friction,
                              mass: x.mass,
                              inertia: x.inertia,
                              density: x.density,
                              inverseMass: x.inverseMass,
                              inverseInertia: x.inverseInertia,
                            }),
                          (x.restitution = 0),
                          (x.friction = 1),
                          (x.mass = x.inertia = x.density = 1 / 0),
                          (x.inverseMass = x.inverseInertia = 0),
                          (x.positionPrev.x = x.position.x),
                          (x.positionPrev.y = x.position.y),
                          (x.anglePrev = x.angle),
                          (x.angularVelocity = 0),
                          (x.speed = 0),
                          (x.angularSpeed = 0),
                          (x.motion = 0))
                        : x._original &&
                          ((x.restitution = x._original.restitution),
                          (x.friction = x._original.friction),
                          (x.mass = x._original.mass),
                          (x.inertia = x._original.inertia),
                          (x.density = x._original.density),
                          (x.inverseMass = x._original.inverseMass),
                          (x.inverseInertia = x._original.inverseInertia),
                          (x._original = null)),
                        (x.isStatic = y));
                    }
                  }),
                  (i.setMass = function (r, y) {
                    var h = r.inertia / (r.mass / 6);
                    ((r.inertia = h * (y / 6)),
                      (r.inverseInertia = 1 / r.inertia),
                      (r.mass = y),
                      (r.inverseMass = 1 / r.mass),
                      (r.density = r.mass / r.area));
                  }),
                  (i.setDensity = function (r, y) {
                    (i.setMass(r, y * r.area), (r.density = y));
                  }),
                  (i.setInertia = function (r, y) {
                    ((r.inertia = y), (r.inverseInertia = 1 / r.inertia));
                  }),
                  (i.setVertices = function (r, y) {
                    (y[0].body === r ? (r.vertices = y) : (r.vertices = c.create(y, r)),
                      (r.axes = g.fromVertices(r.vertices)),
                      (r.area = c.area(r.vertices)),
                      i.setMass(r, r.density * r.area));
                    var h = c.centre(r.vertices);
                    (c.translate(r.vertices, h, -1),
                      i.setInertia(r, i._inertiaScale * c.inertia(r.vertices, r.mass)),
                      c.translate(r.vertices, r.position),
                      f.update(r.bounds, r.vertices, r.velocity));
                  }),
                  (i.setParts = function (r, y, h) {
                    var x;
                    for (
                      y = y.slice(0), r.parts.length = 0, r.parts.push(r), r.parent = r, x = 0;
                      x < y.length;
                      x++
                    ) {
                      var C = y[x];
                      C !== r && ((C.parent = r), r.parts.push(C));
                    }
                    if (r.parts.length !== 1) {
                      if (((h = typeof h < 'u' ? h : !0), h)) {
                        var O = [];
                        for (x = 0; x < y.length; x++) O = O.concat(y[x].vertices);
                        c.clockwiseSort(O);
                        var B = c.hull(O),
                          L = c.centre(B);
                        (i.setVertices(r, B), c.translate(r.vertices, L));
                      }
                      var T = i._totalProperties(r);
                      ((r.area = T.area),
                        (r.parent = r),
                        (r.position.x = T.centre.x),
                        (r.position.y = T.centre.y),
                        (r.positionPrev.x = T.centre.x),
                        (r.positionPrev.y = T.centre.y),
                        i.setMass(r, T.mass),
                        i.setInertia(r, T.inertia),
                        i.setPosition(r, T.centre));
                    }
                  }),
                  (i.setCentre = function (r, y, h) {
                    h
                      ? ((r.positionPrev.x += y.x),
                        (r.positionPrev.y += y.y),
                        (r.position.x += y.x),
                        (r.position.y += y.y))
                      : ((r.positionPrev.x = y.x - (r.position.x - r.positionPrev.x)),
                        (r.positionPrev.y = y.y - (r.position.y - r.positionPrev.y)),
                        (r.position.x = y.x),
                        (r.position.y = y.y));
                  }),
                  (i.setPosition = function (r, y, h) {
                    var x = m.sub(y, r.position);
                    h
                      ? ((r.positionPrev.x = r.position.x),
                        (r.positionPrev.y = r.position.y),
                        (r.velocity.x = x.x),
                        (r.velocity.y = x.y),
                        (r.speed = m.magnitude(x)))
                      : ((r.positionPrev.x += x.x), (r.positionPrev.y += x.y));
                    for (var C = 0; C < r.parts.length; C++) {
                      var O = r.parts[C];
                      ((O.position.x += x.x),
                        (O.position.y += x.y),
                        c.translate(O.vertices, x),
                        f.update(O.bounds, O.vertices, r.velocity));
                    }
                  }),
                  (i.setAngle = function (r, y, h) {
                    var x = y - r.angle;
                    h
                      ? ((r.anglePrev = r.angle),
                        (r.angularVelocity = x),
                        (r.angularSpeed = Math.abs(x)))
                      : (r.anglePrev += x);
                    for (var C = 0; C < r.parts.length; C++) {
                      var O = r.parts[C];
                      ((O.angle += x),
                        c.rotate(O.vertices, x, r.position),
                        g.rotate(O.axes, x),
                        f.update(O.bounds, O.vertices, r.velocity),
                        C > 0 && m.rotateAbout(O.position, x, r.position, O.position));
                    }
                  }),
                  (i.setVelocity = function (r, y) {
                    var h = r.deltaTime / i._baseDelta;
                    ((r.positionPrev.x = r.position.x - y.x * h),
                      (r.positionPrev.y = r.position.y - y.y * h),
                      (r.velocity.x = (r.position.x - r.positionPrev.x) / h),
                      (r.velocity.y = (r.position.y - r.positionPrev.y) / h),
                      (r.speed = m.magnitude(r.velocity)));
                  }),
                  (i.getVelocity = function (r) {
                    var y = i._baseDelta / r.deltaTime;
                    return {
                      x: (r.position.x - r.positionPrev.x) * y,
                      y: (r.position.y - r.positionPrev.y) * y,
                    };
                  }),
                  (i.getSpeed = function (r) {
                    return m.magnitude(i.getVelocity(r));
                  }),
                  (i.setSpeed = function (r, y) {
                    i.setVelocity(r, m.mult(m.normalise(i.getVelocity(r)), y));
                  }),
                  (i.setAngularVelocity = function (r, y) {
                    var h = r.deltaTime / i._baseDelta;
                    ((r.anglePrev = r.angle - y * h),
                      (r.angularVelocity = (r.angle - r.anglePrev) / h),
                      (r.angularSpeed = Math.abs(r.angularVelocity)));
                  }),
                  (i.getAngularVelocity = function (r) {
                    return ((r.angle - r.anglePrev) * i._baseDelta) / r.deltaTime;
                  }),
                  (i.getAngularSpeed = function (r) {
                    return Math.abs(i.getAngularVelocity(r));
                  }),
                  (i.setAngularSpeed = function (r, y) {
                    i.setAngularVelocity(r, d.sign(i.getAngularVelocity(r)) * y);
                  }),
                  (i.translate = function (r, y, h) {
                    i.setPosition(r, m.add(r.position, y), h);
                  }),
                  (i.rotate = function (r, y, h, x) {
                    if (!h) i.setAngle(r, r.angle + y, x);
                    else {
                      var C = Math.cos(y),
                        O = Math.sin(y),
                        B = r.position.x - h.x,
                        L = r.position.y - h.y;
                      (i.setPosition(r, { x: h.x + (B * C - L * O), y: h.y + (B * O + L * C) }, x),
                        i.setAngle(r, r.angle + y, x));
                    }
                  }),
                  (i.scale = function (r, y, h, x) {
                    var C = 0,
                      O = 0;
                    x = x || r.position;
                    for (var B = 0; B < r.parts.length; B++) {
                      var L = r.parts[B];
                      (c.scale(L.vertices, y, h, x),
                        (L.axes = g.fromVertices(L.vertices)),
                        (L.area = c.area(L.vertices)),
                        i.setMass(L, r.density * L.area),
                        c.translate(L.vertices, { x: -L.position.x, y: -L.position.y }),
                        i.setInertia(L, i._inertiaScale * c.inertia(L.vertices, L.mass)),
                        c.translate(L.vertices, { x: L.position.x, y: L.position.y }),
                        B > 0 && ((C += L.area), (O += L.inertia)),
                        (L.position.x = x.x + (L.position.x - x.x) * y),
                        (L.position.y = x.y + (L.position.y - x.y) * h),
                        f.update(L.bounds, L.vertices, r.velocity));
                    }
                    (r.parts.length > 1 &&
                      ((r.area = C),
                      r.isStatic || (i.setMass(r, r.density * C), i.setInertia(r, O))),
                      r.circleRadius &&
                        (y === h ? (r.circleRadius *= y) : (r.circleRadius = null)));
                  }),
                  (i.update = function (r, y) {
                    y = (typeof y < 'u' ? y : 1e3 / 60) * r.timeScale;
                    var h = y * y,
                      x = i._timeCorrection ? y / (r.deltaTime || y) : 1,
                      C = 1 - r.frictionAir * (y / d._baseDelta),
                      O = (r.position.x - r.positionPrev.x) * x,
                      B = (r.position.y - r.positionPrev.y) * x;
                    ((r.velocity.x = O * C + (r.force.x / r.mass) * h),
                      (r.velocity.y = B * C + (r.force.y / r.mass) * h),
                      (r.positionPrev.x = r.position.x),
                      (r.positionPrev.y = r.position.y),
                      (r.position.x += r.velocity.x),
                      (r.position.y += r.velocity.y),
                      (r.deltaTime = y),
                      (r.angularVelocity =
                        (r.angle - r.anglePrev) * C * x + (r.torque / r.inertia) * h),
                      (r.anglePrev = r.angle),
                      (r.angle += r.angularVelocity));
                    for (var L = 0; L < r.parts.length; L++) {
                      var T = r.parts[L];
                      (c.translate(T.vertices, r.velocity),
                        L > 0 && ((T.position.x += r.velocity.x), (T.position.y += r.velocity.y)),
                        r.angularVelocity !== 0 &&
                          (c.rotate(T.vertices, r.angularVelocity, r.position),
                          g.rotate(T.axes, r.angularVelocity),
                          L > 0 &&
                            m.rotateAbout(T.position, r.angularVelocity, r.position, T.position)),
                        f.update(T.bounds, T.vertices, r.velocity));
                    }
                  }),
                  (i.updateVelocities = function (r) {
                    var y = i._baseDelta / r.deltaTime,
                      h = r.velocity;
                    ((h.x = (r.position.x - r.positionPrev.x) * y),
                      (h.y = (r.position.y - r.positionPrev.y) * y),
                      (r.speed = Math.sqrt(h.x * h.x + h.y * h.y)),
                      (r.angularVelocity = (r.angle - r.anglePrev) * y),
                      (r.angularSpeed = Math.abs(r.angularVelocity)));
                  }),
                  (i.applyForce = function (r, y, h) {
                    var x = { x: y.x - r.position.x, y: y.y - r.position.y };
                    ((r.force.x += h.x), (r.force.y += h.y), (r.torque += x.x * h.y - x.y * h.x));
                  }),
                  (i._totalProperties = function (r) {
                    for (
                      var y = { mass: 0, area: 0, inertia: 0, centre: { x: 0, y: 0 } },
                        h = r.parts.length === 1 ? 0 : 1;
                      h < r.parts.length;
                      h++
                    ) {
                      var x = r.parts[h],
                        C = x.mass !== 1 / 0 ? x.mass : 1;
                      ((y.mass += C),
                        (y.area += x.area),
                        (y.inertia += x.inertia),
                        (y.centre = m.add(y.centre, m.mult(x.position, C))));
                    }
                    return ((y.centre = m.div(y.centre, y.mass)), y);
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(0);
              (function () {
                ((i.on = function (m, s, d) {
                  for (var f = s.split(' '), g, S = 0; S < f.length; S++)
                    ((g = f[S]),
                      (m.events = m.events || {}),
                      (m.events[g] = m.events[g] || []),
                      m.events[g].push(d));
                  return d;
                }),
                  (i.off = function (m, s, d) {
                    if (!s) {
                      m.events = {};
                      return;
                    }
                    typeof s == 'function' && ((d = s), (s = c.keys(m.events).join(' ')));
                    for (var f = s.split(' '), g = 0; g < f.length; g++) {
                      var S = m.events[f[g]],
                        r = [];
                      if (d && S) for (var y = 0; y < S.length; y++) S[y] !== d && r.push(S[y]);
                      m.events[f[g]] = r;
                    }
                  }),
                  (i.trigger = function (m, s, d) {
                    var f,
                      g,
                      S,
                      r,
                      y = m.events;
                    if (y && c.keys(y).length > 0) {
                      (d || (d = {}), (f = s.split(' ')));
                      for (var h = 0; h < f.length; h++)
                        if (((g = f[h]), (S = y[g]), S)) {
                          ((r = c.clone(d, !1)), (r.name = g), (r.source = m));
                          for (var x = 0; x < S.length; x++) S[x].apply(m, [r]);
                        }
                    }
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(5),
                m = v(0),
                s = v(1),
                d = v(4);
              (function () {
                ((i.create = function (f) {
                  return m.extend(
                    {
                      id: m.nextId(),
                      type: 'composite',
                      parent: null,
                      isModified: !1,
                      bodies: [],
                      constraints: [],
                      composites: [],
                      label: 'Composite',
                      plugin: {},
                      cache: { allBodies: null, allConstraints: null, allComposites: null },
                    },
                    f
                  );
                }),
                  (i.setModified = function (f, g, S, r) {
                    if (
                      ((f.isModified = g),
                      g &&
                        f.cache &&
                        ((f.cache.allBodies = null),
                        (f.cache.allConstraints = null),
                        (f.cache.allComposites = null)),
                      S && f.parent && i.setModified(f.parent, g, S, r),
                      r)
                    )
                      for (var y = 0; y < f.composites.length; y++) {
                        var h = f.composites[y];
                        i.setModified(h, g, S, r);
                      }
                  }),
                  (i.add = function (f, g) {
                    var S = [].concat(g);
                    c.trigger(f, 'beforeAdd', { object: g });
                    for (var r = 0; r < S.length; r++) {
                      var y = S[r];
                      switch (y.type) {
                        case 'body':
                          if (y.parent !== y) {
                            m.warn(
                              'Composite.add: skipped adding a compound body part (you must add its parent instead)'
                            );
                            break;
                          }
                          i.addBody(f, y);
                          break;
                        case 'constraint':
                          i.addConstraint(f, y);
                          break;
                        case 'composite':
                          i.addComposite(f, y);
                          break;
                        case 'mouseConstraint':
                          i.addConstraint(f, y.constraint);
                          break;
                      }
                    }
                    return (c.trigger(f, 'afterAdd', { object: g }), f);
                  }),
                  (i.remove = function (f, g, S) {
                    var r = [].concat(g);
                    c.trigger(f, 'beforeRemove', { object: g });
                    for (var y = 0; y < r.length; y++) {
                      var h = r[y];
                      switch (h.type) {
                        case 'body':
                          i.removeBody(f, h, S);
                          break;
                        case 'constraint':
                          i.removeConstraint(f, h, S);
                          break;
                        case 'composite':
                          i.removeComposite(f, h, S);
                          break;
                        case 'mouseConstraint':
                          i.removeConstraint(f, h.constraint);
                          break;
                      }
                    }
                    return (c.trigger(f, 'afterRemove', { object: g }), f);
                  }),
                  (i.addComposite = function (f, g) {
                    return (f.composites.push(g), (g.parent = f), i.setModified(f, !0, !0, !1), f);
                  }),
                  (i.removeComposite = function (f, g, S) {
                    var r = m.indexOf(f.composites, g);
                    if (r !== -1) {
                      var y = i.allBodies(g);
                      i.removeCompositeAt(f, r);
                      for (var h = 0; h < y.length; h++) y[h].sleepCounter = 0;
                    }
                    if (S)
                      for (var h = 0; h < f.composites.length; h++)
                        i.removeComposite(f.composites[h], g, !0);
                    return f;
                  }),
                  (i.removeCompositeAt = function (f, g) {
                    return (f.composites.splice(g, 1), i.setModified(f, !0, !0, !1), f);
                  }),
                  (i.addBody = function (f, g) {
                    return (f.bodies.push(g), i.setModified(f, !0, !0, !1), f);
                  }),
                  (i.removeBody = function (f, g, S) {
                    var r = m.indexOf(f.bodies, g);
                    if ((r !== -1 && (i.removeBodyAt(f, r), (g.sleepCounter = 0)), S))
                      for (var y = 0; y < f.composites.length; y++)
                        i.removeBody(f.composites[y], g, !0);
                    return f;
                  }),
                  (i.removeBodyAt = function (f, g) {
                    return (f.bodies.splice(g, 1), i.setModified(f, !0, !0, !1), f);
                  }),
                  (i.addConstraint = function (f, g) {
                    return (f.constraints.push(g), i.setModified(f, !0, !0, !1), f);
                  }),
                  (i.removeConstraint = function (f, g, S) {
                    var r = m.indexOf(f.constraints, g);
                    if ((r !== -1 && i.removeConstraintAt(f, r), S))
                      for (var y = 0; y < f.composites.length; y++)
                        i.removeConstraint(f.composites[y], g, !0);
                    return f;
                  }),
                  (i.removeConstraintAt = function (f, g) {
                    return (f.constraints.splice(g, 1), i.setModified(f, !0, !0, !1), f);
                  }),
                  (i.clear = function (f, g, S) {
                    if (S)
                      for (var r = 0; r < f.composites.length; r++) i.clear(f.composites[r], g, !0);
                    return (
                      g
                        ? (f.bodies = f.bodies.filter(function (y) {
                            return y.isStatic;
                          }))
                        : (f.bodies.length = 0),
                      (f.constraints.length = 0),
                      (f.composites.length = 0),
                      i.setModified(f, !0, !0, !1),
                      f
                    );
                  }),
                  (i.allBodies = function (f) {
                    if (f.cache && f.cache.allBodies) return f.cache.allBodies;
                    for (var g = [].concat(f.bodies), S = 0; S < f.composites.length; S++)
                      g = g.concat(i.allBodies(f.composites[S]));
                    return (f.cache && (f.cache.allBodies = g), g);
                  }),
                  (i.allConstraints = function (f) {
                    if (f.cache && f.cache.allConstraints) return f.cache.allConstraints;
                    for (var g = [].concat(f.constraints), S = 0; S < f.composites.length; S++)
                      g = g.concat(i.allConstraints(f.composites[S]));
                    return (f.cache && (f.cache.allConstraints = g), g);
                  }),
                  (i.allComposites = function (f) {
                    if (f.cache && f.cache.allComposites) return f.cache.allComposites;
                    for (var g = [].concat(f.composites), S = 0; S < f.composites.length; S++)
                      g = g.concat(i.allComposites(f.composites[S]));
                    return (f.cache && (f.cache.allComposites = g), g);
                  }),
                  (i.get = function (f, g, S) {
                    var r, y;
                    switch (S) {
                      case 'body':
                        r = i.allBodies(f);
                        break;
                      case 'constraint':
                        r = i.allConstraints(f);
                        break;
                      case 'composite':
                        r = i.allComposites(f).concat(f);
                        break;
                    }
                    return r
                      ? ((y = r.filter(function (h) {
                          return h.id.toString() === g.toString();
                        })),
                        y.length === 0 ? null : y[0])
                      : null;
                  }),
                  (i.move = function (f, g, S) {
                    return (i.remove(f, g), i.add(S, g), f);
                  }),
                  (i.rebase = function (f) {
                    for (
                      var g = i.allBodies(f).concat(i.allConstraints(f)).concat(i.allComposites(f)),
                        S = 0;
                      S < g.length;
                      S++
                    )
                      g[S].id = m.nextId();
                    return f;
                  }),
                  (i.translate = function (f, g, S) {
                    for (var r = S ? i.allBodies(f) : f.bodies, y = 0; y < r.length; y++)
                      d.translate(r[y], g);
                    return f;
                  }),
                  (i.rotate = function (f, g, S, r) {
                    for (
                      var y = Math.cos(g),
                        h = Math.sin(g),
                        x = r ? i.allBodies(f) : f.bodies,
                        C = 0;
                      C < x.length;
                      C++
                    ) {
                      var O = x[C],
                        B = O.position.x - S.x,
                        L = O.position.y - S.y;
                      (d.setPosition(O, { x: S.x + (B * y - L * h), y: S.y + (B * h + L * y) }),
                        d.rotate(O, g));
                    }
                    return f;
                  }),
                  (i.scale = function (f, g, S, r, y) {
                    for (var h = y ? i.allBodies(f) : f.bodies, x = 0; x < h.length; x++) {
                      var C = h[x],
                        O = C.position.x - r.x,
                        B = C.position.y - r.y;
                      (d.setPosition(C, { x: r.x + O * g, y: r.y + B * S }), d.scale(C, g, S));
                    }
                    return f;
                  }),
                  (i.bounds = function (f) {
                    for (var g = i.allBodies(f), S = [], r = 0; r < g.length; r += 1) {
                      var y = g[r];
                      S.push(y.bounds.min, y.bounds.max);
                    }
                    return s.create(S);
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(4),
                m = v(5),
                s = v(0);
              (function () {
                ((i._motionWakeThreshold = 0.18),
                  (i._motionSleepThreshold = 0.08),
                  (i._minBias = 0.9),
                  (i.update = function (d, f) {
                    for (
                      var g = f / s._baseDelta, S = i._motionSleepThreshold, r = 0;
                      r < d.length;
                      r++
                    ) {
                      var y = d[r],
                        h = c.getSpeed(y),
                        x = c.getAngularSpeed(y),
                        C = h * h + x * x;
                      if (y.force.x !== 0 || y.force.y !== 0) {
                        i.set(y, !1);
                        continue;
                      }
                      var O = Math.min(y.motion, C),
                        B = Math.max(y.motion, C);
                      ((y.motion = i._minBias * O + (1 - i._minBias) * B),
                        y.sleepThreshold > 0 && y.motion < S
                          ? ((y.sleepCounter += 1),
                            y.sleepCounter >= y.sleepThreshold / g && i.set(y, !0))
                          : y.sleepCounter > 0 && (y.sleepCounter -= 1));
                    }
                  }),
                  (i.afterCollisions = function (d) {
                    for (var f = i._motionSleepThreshold, g = 0; g < d.length; g++) {
                      var S = d[g];
                      if (S.isActive) {
                        var r = S.collision,
                          y = r.bodyA.parent,
                          h = r.bodyB.parent;
                        if (
                          !((y.isSleeping && h.isSleeping) || y.isStatic || h.isStatic) &&
                          (y.isSleeping || h.isSleeping)
                        ) {
                          var x = y.isSleeping && !y.isStatic ? y : h,
                            C = x === y ? h : y;
                          !x.isStatic && C.motion > f && i.set(x, !1);
                        }
                      }
                    }
                  }),
                  (i.set = function (d, f) {
                    var g = d.isSleeping;
                    f
                      ? ((d.isSleeping = !0),
                        (d.sleepCounter = d.sleepThreshold),
                        (d.positionImpulse.x = 0),
                        (d.positionImpulse.y = 0),
                        (d.positionPrev.x = d.position.x),
                        (d.positionPrev.y = d.position.y),
                        (d.anglePrev = d.angle),
                        (d.speed = 0),
                        (d.angularSpeed = 0),
                        (d.motion = 0),
                        g || m.trigger(d, 'sleepStart'))
                      : ((d.isSleeping = !1), (d.sleepCounter = 0), g && m.trigger(d, 'sleepEnd'));
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(3),
                m = v(9);
              (function () {
                var s = [],
                  d = { overlap: 0, axis: null },
                  f = { overlap: 0, axis: null };
                ((i.create = function (g, S) {
                  return {
                    pair: null,
                    collided: !1,
                    bodyA: g,
                    bodyB: S,
                    parentA: g.parent,
                    parentB: S.parent,
                    depth: 0,
                    normal: { x: 0, y: 0 },
                    tangent: { x: 0, y: 0 },
                    penetration: { x: 0, y: 0 },
                    supports: [null, null],
                    supportCount: 0,
                  };
                }),
                  (i.collides = function (g, S, r) {
                    if (
                      (i._overlapAxes(d, g.vertices, S.vertices, g.axes),
                      d.overlap <= 0 ||
                        (i._overlapAxes(f, S.vertices, g.vertices, S.axes), f.overlap <= 0))
                    )
                      return null;
                    var y = r && r.table[m.id(g, S)],
                      h;
                    (y
                      ? (h = y.collision)
                      : ((h = i.create(g, S)),
                        (h.collided = !0),
                        (h.bodyA = g.id < S.id ? g : S),
                        (h.bodyB = g.id < S.id ? S : g),
                        (h.parentA = h.bodyA.parent),
                        (h.parentB = h.bodyB.parent)),
                      (g = h.bodyA),
                      (S = h.bodyB));
                    var x;
                    d.overlap < f.overlap ? (x = d) : (x = f);
                    var C = h.normal,
                      O = h.tangent,
                      B = h.penetration,
                      L = h.supports,
                      T = x.overlap,
                      z = x.axis,
                      D = z.x,
                      R = z.y,
                      _ = S.position.x - g.position.x,
                      U = S.position.y - g.position.y;
                    (D * _ + R * U >= 0 && ((D = -D), (R = -R)),
                      (C.x = D),
                      (C.y = R),
                      (O.x = -R),
                      (O.y = D),
                      (B.x = D * T),
                      (B.y = R * T),
                      (h.depth = T));
                    var Y = i._findSupports(g, S, C, 1),
                      N = 0;
                    if (
                      (c.contains(g.vertices, Y[0]) && (L[N++] = Y[0]),
                      c.contains(g.vertices, Y[1]) && (L[N++] = Y[1]),
                      N < 2)
                    ) {
                      var J = i._findSupports(S, g, C, -1);
                      (c.contains(S.vertices, J[0]) && (L[N++] = J[0]),
                        N < 2 && c.contains(S.vertices, J[1]) && (L[N++] = J[1]));
                    }
                    return (N === 0 && (L[N++] = Y[0]), (h.supportCount = N), h);
                  }),
                  (i._overlapAxes = function (g, S, r, y) {
                    var h = S.length,
                      x = r.length,
                      C = S[0].x,
                      O = S[0].y,
                      B = r[0].x,
                      L = r[0].y,
                      T = y.length,
                      z = Number.MAX_VALUE,
                      D = 0,
                      R,
                      _,
                      U,
                      Y,
                      N,
                      J;
                    for (N = 0; N < T; N++) {
                      var I = y[N],
                        k = I.x,
                        G = I.y,
                        Z = C * k + O * G,
                        te = B * k + L * G,
                        ne = Z,
                        fe = te;
                      for (J = 1; J < h; J += 1)
                        ((Y = S[J].x * k + S[J].y * G), Y > ne ? (ne = Y) : Y < Z && (Z = Y));
                      for (J = 1; J < x; J += 1)
                        ((Y = r[J].x * k + r[J].y * G), Y > fe ? (fe = Y) : Y < te && (te = Y));
                      if (
                        ((_ = ne - te),
                        (U = fe - Z),
                        (R = _ < U ? _ : U),
                        R < z && ((z = R), (D = N), R <= 0))
                      )
                        break;
                    }
                    ((g.axis = y[D]), (g.overlap = z));
                  }),
                  (i._findSupports = function (g, S, r, y) {
                    var h = S.vertices,
                      x = h.length,
                      C = g.position.x,
                      O = g.position.y,
                      B = r.x * y,
                      L = r.y * y,
                      T = h[0],
                      z = T,
                      D = B * (C - z.x) + L * (O - z.y),
                      R,
                      _,
                      U;
                    for (U = 1; U < x; U += 1)
                      ((z = h[U]),
                        (_ = B * (C - z.x) + L * (O - z.y)),
                        _ < D && ((D = _), (T = z)));
                    return (
                      (R = h[(x + T.index - 1) % x]),
                      (D = B * (C - R.x) + L * (O - R.y)),
                      (z = h[(T.index + 1) % x]),
                      B * (C - z.x) + L * (O - z.y) < D
                        ? ((s[0] = T), (s[1] = z), s)
                        : ((s[0] = T), (s[1] = R), s)
                    );
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(16);
              (function () {
                ((i.create = function (m, s) {
                  var d = m.bodyA,
                    f = m.bodyB,
                    g = {
                      id: i.id(d, f),
                      bodyA: d,
                      bodyB: f,
                      collision: m,
                      contacts: [c.create(), c.create()],
                      contactCount: 0,
                      separation: 0,
                      isActive: !0,
                      isSensor: d.isSensor || f.isSensor,
                      timeCreated: s,
                      timeUpdated: s,
                      inverseMass: 0,
                      friction: 0,
                      frictionStatic: 0,
                      restitution: 0,
                      slop: 0,
                    };
                  return (i.update(g, m, s), g);
                }),
                  (i.update = function (m, s, d) {
                    var f = s.supports,
                      g = s.supportCount,
                      S = m.contacts,
                      r = s.parentA,
                      y = s.parentB;
                    ((m.isActive = !0),
                      (m.timeUpdated = d),
                      (m.collision = s),
                      (m.separation = s.depth),
                      (m.inverseMass = r.inverseMass + y.inverseMass),
                      (m.friction = r.friction < y.friction ? r.friction : y.friction),
                      (m.frictionStatic =
                        r.frictionStatic > y.frictionStatic ? r.frictionStatic : y.frictionStatic),
                      (m.restitution =
                        r.restitution > y.restitution ? r.restitution : y.restitution),
                      (m.slop = r.slop > y.slop ? r.slop : y.slop),
                      (m.contactCount = g),
                      (s.pair = m));
                    var h = f[0],
                      x = S[0],
                      C = f[1],
                      O = S[1];
                    ((O.vertex === h || x.vertex === C) && ((S[1] = x), (S[0] = x = O), (O = S[1])),
                      (x.vertex = h),
                      (O.vertex = C));
                  }),
                  (i.setActive = function (m, s, d) {
                    s
                      ? ((m.isActive = !0), (m.timeUpdated = d))
                      : ((m.isActive = !1), (m.contactCount = 0));
                  }),
                  (i.id = function (m, s) {
                    return m.id < s.id
                      ? m.id.toString(36) + ':' + s.id.toString(36)
                      : s.id.toString(36) + ':' + m.id.toString(36);
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(3),
                m = v(2),
                s = v(7),
                d = v(1),
                f = v(11),
                g = v(0);
              (function () {
                ((i._warming = 0.4),
                  (i._torqueDampen = 1),
                  (i._minLength = 1e-6),
                  (i.create = function (S) {
                    var r = S;
                    (r.bodyA && !r.pointA && (r.pointA = { x: 0, y: 0 }),
                      r.bodyB && !r.pointB && (r.pointB = { x: 0, y: 0 }));
                    var y = r.bodyA ? m.add(r.bodyA.position, r.pointA) : r.pointA,
                      h = r.bodyB ? m.add(r.bodyB.position, r.pointB) : r.pointB,
                      x = m.magnitude(m.sub(y, h));
                    ((r.length = typeof r.length < 'u' ? r.length : x),
                      (r.id = r.id || g.nextId()),
                      (r.label = r.label || 'Constraint'),
                      (r.type = 'constraint'),
                      (r.stiffness = r.stiffness || (r.length > 0 ? 1 : 0.7)),
                      (r.damping = r.damping || 0),
                      (r.angularStiffness = r.angularStiffness || 0),
                      (r.angleA = r.bodyA ? r.bodyA.angle : r.angleA),
                      (r.angleB = r.bodyB ? r.bodyB.angle : r.angleB),
                      (r.plugin = {}));
                    var C = {
                      visible: !0,
                      lineWidth: 2,
                      strokeStyle: '#ffffff',
                      type: 'line',
                      anchors: !0,
                    };
                    return (
                      r.length === 0 && r.stiffness > 0.1
                        ? ((C.type = 'pin'), (C.anchors = !1))
                        : r.stiffness < 0.9 && (C.type = 'spring'),
                      (r.render = g.extend(C, r.render)),
                      r
                    );
                  }),
                  (i.preSolveAll = function (S) {
                    for (var r = 0; r < S.length; r += 1) {
                      var y = S[r],
                        h = y.constraintImpulse;
                      y.isStatic ||
                        (h.x === 0 && h.y === 0 && h.angle === 0) ||
                        ((y.position.x += h.x), (y.position.y += h.y), (y.angle += h.angle));
                    }
                  }),
                  (i.solveAll = function (S, r) {
                    for (var y = g.clamp(r / g._baseDelta, 0, 1), h = 0; h < S.length; h += 1) {
                      var x = S[h],
                        C = !x.bodyA || (x.bodyA && x.bodyA.isStatic),
                        O = !x.bodyB || (x.bodyB && x.bodyB.isStatic);
                      (C || O) && i.solve(S[h], y);
                    }
                    for (h = 0; h < S.length; h += 1)
                      ((x = S[h]),
                        (C = !x.bodyA || (x.bodyA && x.bodyA.isStatic)),
                        (O = !x.bodyB || (x.bodyB && x.bodyB.isStatic)),
                        !C && !O && i.solve(S[h], y));
                  }),
                  (i.solve = function (S, r) {
                    var y = S.bodyA,
                      h = S.bodyB,
                      x = S.pointA,
                      C = S.pointB;
                    if (!(!y && !h)) {
                      (y &&
                        !y.isStatic &&
                        (m.rotate(x, y.angle - S.angleA, x), (S.angleA = y.angle)),
                        h &&
                          !h.isStatic &&
                          (m.rotate(C, h.angle - S.angleB, C), (S.angleB = h.angle)));
                      var O = x,
                        B = C;
                      if (
                        (y && (O = m.add(y.position, x)),
                        h && (B = m.add(h.position, C)),
                        !(!O || !B))
                      ) {
                        var L = m.sub(O, B),
                          T = m.magnitude(L);
                        T < i._minLength && (T = i._minLength);
                        var z = (T - S.length) / T,
                          D = S.stiffness >= 1 || S.length === 0,
                          R = D ? S.stiffness * r : S.stiffness * r * r,
                          _ = S.damping * r,
                          U = m.mult(L, z * R),
                          Y = (y ? y.inverseMass : 0) + (h ? h.inverseMass : 0),
                          N = (y ? y.inverseInertia : 0) + (h ? h.inverseInertia : 0),
                          J = Y + N,
                          I,
                          k,
                          G,
                          Z,
                          te;
                        if (_ > 0) {
                          var ne = m.create();
                          ((G = m.div(L, T)),
                            (te = m.sub(
                              (h && m.sub(h.position, h.positionPrev)) || ne,
                              (y && m.sub(y.position, y.positionPrev)) || ne
                            )),
                            (Z = m.dot(G, te)));
                        }
                        (y &&
                          !y.isStatic &&
                          ((k = y.inverseMass / Y),
                          (y.constraintImpulse.x -= U.x * k),
                          (y.constraintImpulse.y -= U.y * k),
                          (y.position.x -= U.x * k),
                          (y.position.y -= U.y * k),
                          _ > 0 &&
                            ((y.positionPrev.x -= _ * G.x * Z * k),
                            (y.positionPrev.y -= _ * G.y * Z * k)),
                          (I =
                            (m.cross(x, U) / J) *
                            i._torqueDampen *
                            y.inverseInertia *
                            (1 - S.angularStiffness)),
                          (y.constraintImpulse.angle -= I),
                          (y.angle -= I)),
                          h &&
                            !h.isStatic &&
                            ((k = h.inverseMass / Y),
                            (h.constraintImpulse.x += U.x * k),
                            (h.constraintImpulse.y += U.y * k),
                            (h.position.x += U.x * k),
                            (h.position.y += U.y * k),
                            _ > 0 &&
                              ((h.positionPrev.x += _ * G.x * Z * k),
                              (h.positionPrev.y += _ * G.y * Z * k)),
                            (I =
                              (m.cross(C, U) / J) *
                              i._torqueDampen *
                              h.inverseInertia *
                              (1 - S.angularStiffness)),
                            (h.constraintImpulse.angle += I),
                            (h.angle += I)));
                      }
                    }
                  }),
                  (i.postSolveAll = function (S) {
                    for (var r = 0; r < S.length; r++) {
                      var y = S[r],
                        h = y.constraintImpulse;
                      if (!(y.isStatic || (h.x === 0 && h.y === 0 && h.angle === 0))) {
                        s.set(y, !1);
                        for (var x = 0; x < y.parts.length; x++) {
                          var C = y.parts[x];
                          (c.translate(C.vertices, h),
                            x > 0 && ((C.position.x += h.x), (C.position.y += h.y)),
                            h.angle !== 0 &&
                              (c.rotate(C.vertices, h.angle, y.position),
                              f.rotate(C.axes, h.angle),
                              x > 0 && m.rotateAbout(C.position, h.angle, y.position, C.position)),
                            d.update(C.bounds, C.vertices, y.velocity));
                        }
                        ((h.angle *= i._warming), (h.x *= i._warming), (h.y *= i._warming));
                      }
                    }
                  }),
                  (i.pointAWorld = function (S) {
                    return {
                      x: (S.bodyA ? S.bodyA.position.x : 0) + (S.pointA ? S.pointA.x : 0),
                      y: (S.bodyA ? S.bodyA.position.y : 0) + (S.pointA ? S.pointA.y : 0),
                    };
                  }),
                  (i.pointBWorld = function (S) {
                    return {
                      x: (S.bodyB ? S.bodyB.position.x : 0) + (S.pointB ? S.pointB.x : 0),
                      y: (S.bodyB ? S.bodyB.position.y : 0) + (S.pointB ? S.pointB.y : 0),
                    };
                  }),
                  (i.currentLength = function (S) {
                    var r = (S.bodyA ? S.bodyA.position.x : 0) + (S.pointA ? S.pointA.x : 0),
                      y = (S.bodyA ? S.bodyA.position.y : 0) + (S.pointA ? S.pointA.y : 0),
                      h = (S.bodyB ? S.bodyB.position.x : 0) + (S.pointB ? S.pointB.x : 0),
                      x = (S.bodyB ? S.bodyB.position.y : 0) + (S.pointB ? S.pointB.y : 0),
                      C = r - h,
                      O = y - x;
                    return Math.sqrt(C * C + O * O);
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(2),
                m = v(0);
              (function () {
                ((i.fromVertices = function (s) {
                  for (var d = {}, f = 0; f < s.length; f++) {
                    var g = (f + 1) % s.length,
                      S = c.normalise({ x: s[g].y - s[f].y, y: s[f].x - s[g].x }),
                      r = S.y === 0 ? 1 / 0 : S.x / S.y;
                    ((r = r.toFixed(3).toString()), (d[r] = S));
                  }
                  return m.values(d);
                }),
                  (i.rotate = function (s, d) {
                    if (d !== 0)
                      for (var f = Math.cos(d), g = Math.sin(d), S = 0; S < s.length; S++) {
                        var r = s[S],
                          y;
                        ((y = r.x * f - r.y * g), (r.y = r.x * g + r.y * f), (r.x = y));
                      }
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(3),
                m = v(0),
                s = v(4),
                d = v(1),
                f = v(2);
              (function () {
                ((i.rectangle = function (g, S, r, y, h) {
                  h = h || {};
                  var x = {
                    label: 'Rectangle Body',
                    position: { x: g, y: S },
                    vertices: c.fromPath('L 0 0 L ' + r + ' 0 L ' + r + ' ' + y + ' L 0 ' + y),
                  };
                  if (h.chamfer) {
                    var C = h.chamfer;
                    ((x.vertices = c.chamfer(
                      x.vertices,
                      C.radius,
                      C.quality,
                      C.qualityMin,
                      C.qualityMax
                    )),
                      delete h.chamfer);
                  }
                  return s.create(m.extend({}, x, h));
                }),
                  (i.trapezoid = function (g, S, r, y, h, x) {
                    ((x = x || {}),
                      h >= 1 && m.warn('Bodies.trapezoid: slope parameter must be < 1.'),
                      (h *= 0.5));
                    var C = (1 - h * 2) * r,
                      O = r * h,
                      B = O + C,
                      L = B + O,
                      T;
                    h < 0.5
                      ? (T = 'L 0 0 L ' + O + ' ' + -y + ' L ' + B + ' ' + -y + ' L ' + L + ' 0')
                      : (T = 'L 0 0 L ' + B + ' ' + -y + ' L ' + L + ' 0');
                    var z = {
                      label: 'Trapezoid Body',
                      position: { x: g, y: S },
                      vertices: c.fromPath(T),
                    };
                    if (x.chamfer) {
                      var D = x.chamfer;
                      ((z.vertices = c.chamfer(
                        z.vertices,
                        D.radius,
                        D.quality,
                        D.qualityMin,
                        D.qualityMax
                      )),
                        delete x.chamfer);
                    }
                    return s.create(m.extend({}, z, x));
                  }),
                  (i.circle = function (g, S, r, y, h) {
                    y = y || {};
                    var x = { label: 'Circle Body', circleRadius: r };
                    h = h || 25;
                    var C = Math.ceil(Math.max(10, Math.min(h, r)));
                    return (C % 2 === 1 && (C += 1), i.polygon(g, S, C, r, m.extend({}, x, y)));
                  }),
                  (i.polygon = function (g, S, r, y, h) {
                    if (((h = h || {}), r < 3)) return i.circle(g, S, y, h);
                    for (var x = (2 * Math.PI) / r, C = '', O = x * 0.5, B = 0; B < r; B += 1) {
                      var L = O + B * x,
                        T = Math.cos(L) * y,
                        z = Math.sin(L) * y;
                      C += 'L ' + T.toFixed(3) + ' ' + z.toFixed(3) + ' ';
                    }
                    var D = {
                      label: 'Polygon Body',
                      position: { x: g, y: S },
                      vertices: c.fromPath(C),
                    };
                    if (h.chamfer) {
                      var R = h.chamfer;
                      ((D.vertices = c.chamfer(
                        D.vertices,
                        R.radius,
                        R.quality,
                        R.qualityMin,
                        R.qualityMax
                      )),
                        delete h.chamfer);
                    }
                    return s.create(m.extend({}, D, h));
                  }),
                  (i.fromVertices = function (g, S, r, y, h, x, C, O) {
                    var B = m.getDecomp(),
                      L,
                      T,
                      z,
                      D,
                      R,
                      _,
                      U,
                      Y,
                      N,
                      J,
                      I;
                    for (
                      L = !!(B && B.quickDecomp),
                        y = y || {},
                        z = [],
                        h = typeof h < 'u' ? h : !1,
                        x = typeof x < 'u' ? x : 0.01,
                        C = typeof C < 'u' ? C : 10,
                        O = typeof O < 'u' ? O : 0.01,
                        m.isArray(r[0]) || (r = [r]),
                        J = 0;
                      J < r.length;
                      J += 1
                    )
                      if (
                        ((_ = r[J]),
                        (D = c.isConvex(_)),
                        (R = !D),
                        R &&
                          !L &&
                          m.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                          ),
                        D || !L)
                      )
                        (D ? (_ = c.clockwiseSort(_)) : (_ = c.hull(_)),
                          z.push({ position: { x: g, y: S }, vertices: _ }));
                      else {
                        var k = _.map(function (ue) {
                          return [ue.x, ue.y];
                        });
                        (B.makeCCW(k),
                          x !== !1 && B.removeCollinearPoints(k, x),
                          O !== !1 && B.removeDuplicatePoints && B.removeDuplicatePoints(k, O));
                        var G = B.quickDecomp(k);
                        for (U = 0; U < G.length; U++) {
                          var Z = G[U],
                            te = Z.map(function (ue) {
                              return { x: ue[0], y: ue[1] };
                            });
                          (C > 0 && c.area(te) < C) ||
                            z.push({ position: c.centre(te), vertices: te });
                        }
                      }
                    for (U = 0; U < z.length; U++) z[U] = s.create(m.extend(z[U], y));
                    if (h) {
                      var ne = 5;
                      for (U = 0; U < z.length; U++) {
                        var fe = z[U];
                        for (Y = U + 1; Y < z.length; Y++) {
                          var H = z[Y];
                          if (d.overlaps(fe.bounds, H.bounds)) {
                            var $ = fe.vertices,
                              le = H.vertices;
                            for (N = 0; N < fe.vertices.length; N++)
                              for (I = 0; I < H.vertices.length; I++) {
                                var ie = f.magnitudeSquared(f.sub($[(N + 1) % $.length], le[I])),
                                  ce = f.magnitudeSquared(f.sub($[N], le[(I + 1) % le.length]));
                                ie < ne &&
                                  ce < ne &&
                                  (($[N].isInternal = !0), (le[I].isInternal = !0));
                              }
                          }
                        }
                      }
                    }
                    return z.length > 1
                      ? ((T = s.create(m.extend({ parts: z.slice(0) }, y))),
                        s.setPosition(T, { x: g, y: S }),
                        T)
                      : z[0];
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(0),
                m = v(8);
              (function () {
                ((i.create = function (s) {
                  var d = { bodies: [], collisions: [], pairs: null };
                  return c.extend(d, s);
                }),
                  (i.setBodies = function (s, d) {
                    s.bodies = d.slice(0);
                  }),
                  (i.clear = function (s) {
                    ((s.bodies = []), (s.collisions = []));
                  }),
                  (i.collisions = function (s) {
                    var d = s.pairs,
                      f = s.bodies,
                      g = f.length,
                      S = i.canCollide,
                      r = m.collides,
                      y = s.collisions,
                      h = 0,
                      x,
                      C;
                    for (f.sort(i._compareBoundsX), x = 0; x < g; x++) {
                      var O = f[x],
                        B = O.bounds,
                        L = O.bounds.max.x,
                        T = O.bounds.max.y,
                        z = O.bounds.min.y,
                        D = O.isStatic || O.isSleeping,
                        R = O.parts.length,
                        _ = R === 1;
                      for (C = x + 1; C < g; C++) {
                        var U = f[C],
                          Y = U.bounds;
                        if (Y.min.x > L) break;
                        if (
                          !(T < Y.min.y || z > Y.max.y) &&
                          !(D && (U.isStatic || U.isSleeping)) &&
                          S(O.collisionFilter, U.collisionFilter)
                        ) {
                          var N = U.parts.length;
                          if (_ && N === 1) {
                            var J = r(O, U, d);
                            J && (y[h++] = J);
                          } else
                            for (var I = R > 1 ? 1 : 0, k = N > 1 ? 1 : 0, G = I; G < R; G++)
                              for (var Z = O.parts[G], B = Z.bounds, te = k; te < N; te++) {
                                var ne = U.parts[te],
                                  Y = ne.bounds;
                                if (
                                  !(
                                    B.min.x > Y.max.x ||
                                    B.max.x < Y.min.x ||
                                    B.max.y < Y.min.y ||
                                    B.min.y > Y.max.y
                                  )
                                ) {
                                  var J = r(Z, ne, d);
                                  J && (y[h++] = J);
                                }
                              }
                        }
                      }
                    }
                    return (y.length !== h && (y.length = h), y);
                  }),
                  (i.canCollide = function (s, d) {
                    return s.group === d.group && s.group !== 0
                      ? s.group > 0
                      : (s.mask & d.category) !== 0 && (d.mask & s.category) !== 0;
                  }),
                  (i._compareBoundsX = function (s, d) {
                    return s.bounds.min.x - d.bounds.min.x;
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(0);
              (function () {
                ((i.create = function (m) {
                  var s = {};
                  return (
                    m ||
                      c.log(
                        'Mouse.create: element was undefined, defaulting to document.body',
                        'warn'
                      ),
                    (s.element = m || document.body),
                    (s.absolute = { x: 0, y: 0 }),
                    (s.position = { x: 0, y: 0 }),
                    (s.mousedownPosition = { x: 0, y: 0 }),
                    (s.mouseupPosition = { x: 0, y: 0 }),
                    (s.offset = { x: 0, y: 0 }),
                    (s.scale = { x: 1, y: 1 }),
                    (s.wheelDelta = 0),
                    (s.button = -1),
                    (s.pixelRatio = parseInt(s.element.getAttribute('data-pixel-ratio'), 10) || 1),
                    (s.sourceEvents = {
                      mousemove: null,
                      mousedown: null,
                      mouseup: null,
                      mousewheel: null,
                    }),
                    (s.mousemove = function (d) {
                      var f = i._getRelativeMousePosition(d, s.element, s.pixelRatio),
                        g = d.changedTouches;
                      (g && ((s.button = 0), d.preventDefault()),
                        (s.absolute.x = f.x),
                        (s.absolute.y = f.y),
                        (s.position.x = s.absolute.x * s.scale.x + s.offset.x),
                        (s.position.y = s.absolute.y * s.scale.y + s.offset.y),
                        (s.sourceEvents.mousemove = d));
                    }),
                    (s.mousedown = function (d) {
                      var f = i._getRelativeMousePosition(d, s.element, s.pixelRatio),
                        g = d.changedTouches;
                      (g ? ((s.button = 0), d.preventDefault()) : (s.button = d.button),
                        (s.absolute.x = f.x),
                        (s.absolute.y = f.y),
                        (s.position.x = s.absolute.x * s.scale.x + s.offset.x),
                        (s.position.y = s.absolute.y * s.scale.y + s.offset.y),
                        (s.mousedownPosition.x = s.position.x),
                        (s.mousedownPosition.y = s.position.y),
                        (s.sourceEvents.mousedown = d));
                    }),
                    (s.mouseup = function (d) {
                      var f = i._getRelativeMousePosition(d, s.element, s.pixelRatio),
                        g = d.changedTouches;
                      (g && d.preventDefault(),
                        (s.button = -1),
                        (s.absolute.x = f.x),
                        (s.absolute.y = f.y),
                        (s.position.x = s.absolute.x * s.scale.x + s.offset.x),
                        (s.position.y = s.absolute.y * s.scale.y + s.offset.y),
                        (s.mouseupPosition.x = s.position.x),
                        (s.mouseupPosition.y = s.position.y),
                        (s.sourceEvents.mouseup = d));
                    }),
                    (s.mousewheel = function (d) {
                      ((s.wheelDelta = Math.max(-1, Math.min(1, d.wheelDelta || -d.detail))),
                        d.preventDefault(),
                        (s.sourceEvents.mousewheel = d));
                    }),
                    i.setElement(s, s.element),
                    s
                  );
                }),
                  (i.setElement = function (m, s) {
                    ((m.element = s),
                      s.addEventListener('mousemove', m.mousemove, { passive: !0 }),
                      s.addEventListener('mousedown', m.mousedown, { passive: !0 }),
                      s.addEventListener('mouseup', m.mouseup, { passive: !0 }),
                      s.addEventListener('wheel', m.mousewheel, { passive: !1 }),
                      s.addEventListener('touchmove', m.mousemove, { passive: !1 }),
                      s.addEventListener('touchstart', m.mousedown, { passive: !1 }),
                      s.addEventListener('touchend', m.mouseup, { passive: !1 }));
                  }),
                  (i.clearSourceEvents = function (m) {
                    ((m.sourceEvents.mousemove = null),
                      (m.sourceEvents.mousedown = null),
                      (m.sourceEvents.mouseup = null),
                      (m.sourceEvents.mousewheel = null),
                      (m.wheelDelta = 0));
                  }),
                  (i.setOffset = function (m, s) {
                    ((m.offset.x = s.x),
                      (m.offset.y = s.y),
                      (m.position.x = m.absolute.x * m.scale.x + m.offset.x),
                      (m.position.y = m.absolute.y * m.scale.y + m.offset.y));
                  }),
                  (i.setScale = function (m, s) {
                    ((m.scale.x = s.x),
                      (m.scale.y = s.y),
                      (m.position.x = m.absolute.x * m.scale.x + m.offset.x),
                      (m.position.y = m.absolute.y * m.scale.y + m.offset.y));
                  }),
                  (i._getRelativeMousePosition = function (m, s, d) {
                    var f = s.getBoundingClientRect(),
                      g = document.documentElement || document.body.parentNode || document.body,
                      S = window.pageXOffset !== void 0 ? window.pageXOffset : g.scrollLeft,
                      r = window.pageYOffset !== void 0 ? window.pageYOffset : g.scrollTop,
                      y = m.changedTouches,
                      h,
                      x;
                    return (
                      y
                        ? ((h = y[0].pageX - f.left - S), (x = y[0].pageY - f.top - r))
                        : ((h = m.pageX - f.left - S), (x = m.pageY - f.top - r)),
                      {
                        x: h / ((s.clientWidth / (s.width || s.clientWidth)) * d),
                        y: x / ((s.clientHeight / (s.height || s.clientHeight)) * d),
                      }
                    );
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(0);
              (function () {
                ((i._registry = {}),
                  (i.register = function (m) {
                    if (
                      (i.isPlugin(m) ||
                        c.warn(
                          'Plugin.register:',
                          i.toString(m),
                          'does not implement all required fields.'
                        ),
                      m.name in i._registry)
                    ) {
                      var s = i._registry[m.name],
                        d = i.versionParse(m.version).number,
                        f = i.versionParse(s.version).number;
                      d > f
                        ? (c.warn(
                            'Plugin.register:',
                            i.toString(s),
                            'was upgraded to',
                            i.toString(m)
                          ),
                          (i._registry[m.name] = m))
                        : d < f
                          ? c.warn(
                              'Plugin.register:',
                              i.toString(s),
                              'can not be downgraded to',
                              i.toString(m)
                            )
                          : m !== s &&
                            c.warn(
                              'Plugin.register:',
                              i.toString(m),
                              'is already registered to different plugin object'
                            );
                    } else i._registry[m.name] = m;
                    return m;
                  }),
                  (i.resolve = function (m) {
                    return i._registry[i.dependencyParse(m).name];
                  }),
                  (i.toString = function (m) {
                    return typeof m == 'string'
                      ? m
                      : (m.name || 'anonymous') + '@' + (m.version || m.range || '0.0.0');
                  }),
                  (i.isPlugin = function (m) {
                    return m && m.name && m.version && m.install;
                  }),
                  (i.isUsed = function (m, s) {
                    return m.used.indexOf(s) > -1;
                  }),
                  (i.isFor = function (m, s) {
                    var d = m.for && i.dependencyParse(m.for);
                    return !m.for || (s.name === d.name && i.versionSatisfies(s.version, d.range));
                  }),
                  (i.use = function (m, s) {
                    if (((m.uses = (m.uses || []).concat(s || [])), m.uses.length === 0)) {
                      c.warn(
                        'Plugin.use:',
                        i.toString(m),
                        'does not specify any dependencies to install.'
                      );
                      return;
                    }
                    for (
                      var d = i.dependencies(m), f = c.topologicalSort(d), g = [], S = 0;
                      S < f.length;
                      S += 1
                    )
                      if (f[S] !== m.name) {
                        var r = i.resolve(f[S]);
                        if (!r) {
                          g.push('❌ ' + f[S]);
                          continue;
                        }
                        i.isUsed(m, r.name) ||
                          (i.isFor(r, m) ||
                            (c.warn(
                              'Plugin.use:',
                              i.toString(r),
                              'is for',
                              r.for,
                              'but installed on',
                              i.toString(m) + '.'
                            ),
                            (r._warned = !0)),
                          r.install
                            ? r.install(m)
                            : (c.warn(
                                'Plugin.use:',
                                i.toString(r),
                                'does not specify an install function.'
                              ),
                              (r._warned = !0)),
                          r._warned
                            ? (g.push('🔶 ' + i.toString(r)), delete r._warned)
                            : g.push('✅ ' + i.toString(r)),
                          m.used.push(r.name));
                      }
                    g.length > 0 && c.info(g.join('  '));
                  }),
                  (i.dependencies = function (m, s) {
                    var d = i.dependencyParse(m),
                      f = d.name;
                    if (((s = s || {}), !(f in s))) {
                      ((m = i.resolve(m) || m),
                        (s[f] = c.map(m.uses || [], function (S) {
                          i.isPlugin(S) && i.register(S);
                          var r = i.dependencyParse(S),
                            y = i.resolve(S);
                          return (
                            y && !i.versionSatisfies(y.version, r.range)
                              ? (c.warn(
                                  'Plugin.dependencies:',
                                  i.toString(y),
                                  'does not satisfy',
                                  i.toString(r),
                                  'used by',
                                  i.toString(d) + '.'
                                ),
                                (y._warned = !0),
                                (m._warned = !0))
                              : y ||
                                (c.warn(
                                  'Plugin.dependencies:',
                                  i.toString(S),
                                  'used by',
                                  i.toString(d),
                                  'could not be resolved.'
                                ),
                                (m._warned = !0)),
                            r.name
                          );
                        })));
                      for (var g = 0; g < s[f].length; g += 1) i.dependencies(s[f][g], s);
                      return s;
                    }
                  }),
                  (i.dependencyParse = function (m) {
                    if (c.isString(m)) {
                      var s = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                      return (
                        s.test(m) ||
                          c.warn('Plugin.dependencyParse:', m, 'is not a valid dependency string.'),
                        { name: m.split('@')[0], range: m.split('@')[1] || '*' }
                      );
                    }
                    return { name: m.name, range: m.range || m.version };
                  }),
                  (i.versionParse = function (m) {
                    var s = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                    s.test(m) ||
                      c.warn('Plugin.versionParse:', m, 'is not a valid version or range.');
                    var d = s.exec(m),
                      f = Number(d[4]),
                      g = Number(d[5]),
                      S = Number(d[6]);
                    return {
                      isRange: !!(d[1] || d[2]),
                      version: d[3],
                      range: m,
                      operator: d[1] || d[2] || '',
                      major: f,
                      minor: g,
                      patch: S,
                      parts: [f, g, S],
                      prerelease: d[7],
                      number: f * 1e8 + g * 1e4 + S,
                    };
                  }),
                  (i.versionSatisfies = function (m, s) {
                    s = s || '*';
                    var d = i.versionParse(s),
                      f = i.versionParse(m);
                    if (d.isRange) {
                      if (d.operator === '*' || m === '*') return !0;
                      if (d.operator === '>') return f.number > d.number;
                      if (d.operator === '>=') return f.number >= d.number;
                      if (d.operator === '~')
                        return f.major === d.major && f.minor === d.minor && f.patch >= d.patch;
                      if (d.operator === '^')
                        return d.major > 0
                          ? f.major === d.major && f.number >= d.number
                          : d.minor > 0
                            ? f.minor === d.minor && f.patch >= d.patch
                            : f.patch === d.patch;
                    }
                    return m === s || m === '*';
                  }));
              })();
            },
            function (M, E) {
              var v = {};
              ((M.exports = v),
                (function () {
                  v.create = function (i) {
                    return { vertex: i, normalImpulse: 0, tangentImpulse: 0 };
                  };
                })());
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(7),
                m = v(18),
                s = v(13),
                d = v(19),
                f = v(5),
                g = v(6),
                S = v(10),
                r = v(0),
                y = v(4);
              (function () {
                ((i._deltaMax = 1e3 / 60),
                  (i.create = function (h) {
                    h = h || {};
                    var x = {
                        positionIterations: 6,
                        velocityIterations: 4,
                        constraintIterations: 2,
                        enableSleeping: !1,
                        events: [],
                        plugin: {},
                        gravity: { x: 0, y: 1, scale: 0.001 },
                        timing: {
                          timestamp: 0,
                          timeScale: 1,
                          lastDelta: 0,
                          lastElapsed: 0,
                          lastUpdatesPerFrame: 0,
                        },
                      },
                      C = r.extend(x, h);
                    return (
                      (C.world = h.world || g.create({ label: 'World' })),
                      (C.pairs = h.pairs || d.create()),
                      (C.detector = h.detector || s.create()),
                      (C.detector.pairs = C.pairs),
                      (C.grid = { buckets: [] }),
                      (C.world.gravity = C.gravity),
                      (C.broadphase = C.grid),
                      (C.metrics = {}),
                      C
                    );
                  }),
                  (i.update = function (h, x) {
                    var C = r.now(),
                      O = h.world,
                      B = h.detector,
                      L = h.pairs,
                      T = h.timing,
                      z = T.timestamp,
                      D;
                    (x > i._deltaMax &&
                      r.warnOnce(
                        'Matter.Engine.update: delta argument is recommended to be less than or equal to',
                        i._deltaMax.toFixed(3),
                        'ms.'
                      ),
                      (x = typeof x < 'u' ? x : r._baseDelta),
                      (x *= T.timeScale),
                      (T.timestamp += x),
                      (T.lastDelta = x));
                    var R = { timestamp: T.timestamp, delta: x };
                    f.trigger(h, 'beforeUpdate', R);
                    var _ = g.allBodies(O),
                      U = g.allConstraints(O);
                    for (
                      O.isModified && (s.setBodies(B, _), g.setModified(O, !1, !1, !0)),
                        h.enableSleeping && c.update(_, x),
                        i._bodiesApplyGravity(_, h.gravity),
                        x > 0 && i._bodiesUpdate(_, x),
                        f.trigger(h, 'beforeSolve', R),
                        S.preSolveAll(_),
                        D = 0;
                      D < h.constraintIterations;
                      D++
                    )
                      S.solveAll(U, x);
                    S.postSolveAll(_);
                    var Y = s.collisions(B);
                    (d.update(L, Y, z),
                      h.enableSleeping && c.afterCollisions(L.list),
                      L.collisionStart.length > 0 &&
                        f.trigger(h, 'collisionStart', {
                          pairs: L.collisionStart,
                          timestamp: T.timestamp,
                          delta: x,
                        }));
                    var N = r.clamp(20 / h.positionIterations, 0, 1);
                    for (m.preSolvePosition(L.list), D = 0; D < h.positionIterations; D++)
                      m.solvePosition(L.list, x, N);
                    for (
                      m.postSolvePosition(_), S.preSolveAll(_), D = 0;
                      D < h.constraintIterations;
                      D++
                    )
                      S.solveAll(U, x);
                    for (
                      S.postSolveAll(_), m.preSolveVelocity(L.list), D = 0;
                      D < h.velocityIterations;
                      D++
                    )
                      m.solveVelocity(L.list, x);
                    return (
                      i._bodiesUpdateVelocities(_),
                      L.collisionActive.length > 0 &&
                        f.trigger(h, 'collisionActive', {
                          pairs: L.collisionActive,
                          timestamp: T.timestamp,
                          delta: x,
                        }),
                      L.collisionEnd.length > 0 &&
                        f.trigger(h, 'collisionEnd', {
                          pairs: L.collisionEnd,
                          timestamp: T.timestamp,
                          delta: x,
                        }),
                      i._bodiesClearForces(_),
                      f.trigger(h, 'afterUpdate', R),
                      (h.timing.lastElapsed = r.now() - C),
                      h
                    );
                  }),
                  (i.merge = function (h, x) {
                    if ((r.extend(h, x), x.world)) {
                      ((h.world = x.world), i.clear(h));
                      for (var C = g.allBodies(h.world), O = 0; O < C.length; O++) {
                        var B = C[O];
                        (c.set(B, !1), (B.id = r.nextId()));
                      }
                    }
                  }),
                  (i.clear = function (h) {
                    (d.clear(h.pairs), s.clear(h.detector));
                  }),
                  (i._bodiesClearForces = function (h) {
                    for (var x = h.length, C = 0; C < x; C++) {
                      var O = h[C];
                      ((O.force.x = 0), (O.force.y = 0), (O.torque = 0));
                    }
                  }),
                  (i._bodiesApplyGravity = function (h, x) {
                    var C = typeof x.scale < 'u' ? x.scale : 0.001,
                      O = h.length;
                    if (!((x.x === 0 && x.y === 0) || C === 0))
                      for (var B = 0; B < O; B++) {
                        var L = h[B];
                        L.isStatic ||
                          L.isSleeping ||
                          ((L.force.y += L.mass * x.y * C), (L.force.x += L.mass * x.x * C));
                      }
                  }),
                  (i._bodiesUpdate = function (h, x) {
                    for (var C = h.length, O = 0; O < C; O++) {
                      var B = h[O];
                      B.isStatic || B.isSleeping || y.update(B, x);
                    }
                  }),
                  (i._bodiesUpdateVelocities = function (h) {
                    for (var x = h.length, C = 0; C < x; C++) y.updateVelocities(h[C]);
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(3),
                m = v(0),
                s = v(1);
              (function () {
                ((i._restingThresh = 2),
                  (i._restingThreshTangent = Math.sqrt(6)),
                  (i._positionDampen = 0.9),
                  (i._positionWarming = 0.8),
                  (i._frictionNormalMultiplier = 5),
                  (i._frictionMaxStatic = Number.MAX_VALUE),
                  (i.preSolvePosition = function (d) {
                    var f,
                      g,
                      S,
                      r = d.length;
                    for (f = 0; f < r; f++)
                      ((g = d[f]),
                        g.isActive &&
                          ((S = g.contactCount),
                          (g.collision.parentA.totalContacts += S),
                          (g.collision.parentB.totalContacts += S)));
                  }),
                  (i.solvePosition = function (d, f, g) {
                    var S,
                      r,
                      y,
                      h,
                      x,
                      C,
                      O,
                      B,
                      L = i._positionDampen * (g || 1),
                      T = m.clamp(f / m._baseDelta, 0, 1),
                      z = d.length;
                    for (S = 0; S < z; S++)
                      ((r = d[S]),
                        !(!r.isActive || r.isSensor) &&
                          ((y = r.collision),
                          (h = y.parentA),
                          (x = y.parentB),
                          (C = y.normal),
                          (r.separation =
                            y.depth +
                            C.x * (x.positionImpulse.x - h.positionImpulse.x) +
                            C.y * (x.positionImpulse.y - h.positionImpulse.y))));
                    for (S = 0; S < z; S++)
                      ((r = d[S]),
                        !(!r.isActive || r.isSensor) &&
                          ((y = r.collision),
                          (h = y.parentA),
                          (x = y.parentB),
                          (C = y.normal),
                          (B = r.separation - r.slop * T),
                          (h.isStatic || x.isStatic) && (B *= 2),
                          h.isStatic ||
                            h.isSleeping ||
                            ((O = L / h.totalContacts),
                            (h.positionImpulse.x += C.x * B * O),
                            (h.positionImpulse.y += C.y * B * O)),
                          x.isStatic ||
                            x.isSleeping ||
                            ((O = L / x.totalContacts),
                            (x.positionImpulse.x -= C.x * B * O),
                            (x.positionImpulse.y -= C.y * B * O))));
                  }),
                  (i.postSolvePosition = function (d) {
                    for (
                      var f = i._positionWarming,
                        g = d.length,
                        S = c.translate,
                        r = s.update,
                        y = 0;
                      y < g;
                      y++
                    ) {
                      var h = d[y],
                        x = h.positionImpulse,
                        C = x.x,
                        O = x.y,
                        B = h.velocity;
                      if (((h.totalContacts = 0), C !== 0 || O !== 0)) {
                        for (var L = 0; L < h.parts.length; L++) {
                          var T = h.parts[L];
                          (S(T.vertices, x),
                            r(T.bounds, T.vertices, B),
                            (T.position.x += C),
                            (T.position.y += O));
                        }
                        ((h.positionPrev.x += C),
                          (h.positionPrev.y += O),
                          C * B.x + O * B.y < 0
                            ? ((x.x = 0), (x.y = 0))
                            : ((x.x *= f), (x.y *= f)));
                      }
                    }
                  }),
                  (i.preSolveVelocity = function (d) {
                    var f = d.length,
                      g,
                      S;
                    for (g = 0; g < f; g++) {
                      var r = d[g];
                      if (!(!r.isActive || r.isSensor)) {
                        var y = r.contacts,
                          h = r.contactCount,
                          x = r.collision,
                          C = x.parentA,
                          O = x.parentB,
                          B = x.normal,
                          L = x.tangent;
                        for (S = 0; S < h; S++) {
                          var T = y[S],
                            z = T.vertex,
                            D = T.normalImpulse,
                            R = T.tangentImpulse;
                          if (D !== 0 || R !== 0) {
                            var _ = B.x * D + L.x * R,
                              U = B.y * D + L.y * R;
                            (C.isStatic ||
                              C.isSleeping ||
                              ((C.positionPrev.x += _ * C.inverseMass),
                              (C.positionPrev.y += U * C.inverseMass),
                              (C.anglePrev +=
                                C.inverseInertia *
                                ((z.x - C.position.x) * U - (z.y - C.position.y) * _))),
                              O.isStatic ||
                                O.isSleeping ||
                                ((O.positionPrev.x -= _ * O.inverseMass),
                                (O.positionPrev.y -= U * O.inverseMass),
                                (O.anglePrev -=
                                  O.inverseInertia *
                                  ((z.x - O.position.x) * U - (z.y - O.position.y) * _))));
                          }
                        }
                      }
                    }
                  }),
                  (i.solveVelocity = function (d, f) {
                    var g = f / m._baseDelta,
                      S = g * g,
                      r = S * g,
                      y = -i._restingThresh * g,
                      h = i._restingThreshTangent,
                      x = i._frictionNormalMultiplier * g,
                      C = i._frictionMaxStatic,
                      O = d.length,
                      B,
                      L,
                      T,
                      z;
                    for (T = 0; T < O; T++) {
                      var D = d[T];
                      if (!(!D.isActive || D.isSensor)) {
                        var R = D.collision,
                          _ = R.parentA,
                          U = R.parentB,
                          Y = R.normal.x,
                          N = R.normal.y,
                          J = R.tangent.x,
                          I = R.tangent.y,
                          k = D.inverseMass,
                          G = D.friction * D.frictionStatic * x,
                          Z = D.contacts,
                          te = D.contactCount,
                          ne = 1 / te,
                          fe = _.position.x - _.positionPrev.x,
                          H = _.position.y - _.positionPrev.y,
                          $ = _.angle - _.anglePrev,
                          le = U.position.x - U.positionPrev.x,
                          ie = U.position.y - U.positionPrev.y,
                          ce = U.angle - U.anglePrev;
                        for (z = 0; z < te; z++) {
                          var ue = Z[z],
                            ve = ue.vertex,
                            Te = ve.x - _.position.x,
                            Be = ve.y - _.position.y,
                            tt = ve.x - U.position.x,
                            nt = ve.y - U.position.y,
                            Je = fe - Be * $,
                            ni = H + Te * $,
                            Qt = le - nt * ce,
                            en = ie + tt * ce,
                            ra = Je - Qt,
                            ii = ni - en,
                            sa = Y * ra + N * ii,
                            mt = J * ra + I * ii,
                            fa = D.separation + sa,
                            Yl = Math.min(fa, 1);
                          Yl = fa < 0 ? 0 : Yl;
                          var ui = Yl * G;
                          mt < -ui || mt > ui
                            ? ((L = mt > 0 ? mt : -mt),
                              (B = D.friction * (mt > 0 ? 1 : -1) * r),
                              B < -L ? (B = -L) : B > L && (B = L))
                            : ((B = mt), (L = C));
                          var ri = Te * N - Be * Y,
                            lt = tt * N - nt * Y,
                            si = ne / (k + _.inverseInertia * ri * ri + U.inverseInertia * lt * lt),
                            jl = (1 + D.restitution) * sa * si;
                          if (((B *= si), sa < y)) ue.normalImpulse = 0;
                          else {
                            var fi = ue.normalImpulse;
                            ((ue.normalImpulse += jl),
                              ue.normalImpulse > 0 && (ue.normalImpulse = 0),
                              (jl = ue.normalImpulse - fi));
                          }
                          if (mt < -h || mt > h) ue.tangentImpulse = 0;
                          else {
                            var oa = ue.tangentImpulse;
                            ((ue.tangentImpulse += B),
                              ue.tangentImpulse < -L && (ue.tangentImpulse = -L),
                              ue.tangentImpulse > L && (ue.tangentImpulse = L),
                              (B = ue.tangentImpulse - oa));
                          }
                          var ca = Y * jl + J * B,
                            Gl = N * jl + I * B;
                          (_.isStatic ||
                            _.isSleeping ||
                            ((_.positionPrev.x += ca * _.inverseMass),
                            (_.positionPrev.y += Gl * _.inverseMass),
                            (_.anglePrev += (Te * Gl - Be * ca) * _.inverseInertia)),
                            U.isStatic ||
                              U.isSleeping ||
                              ((U.positionPrev.x -= ca * U.inverseMass),
                              (U.positionPrev.y -= Gl * U.inverseMass),
                              (U.anglePrev -= (tt * Gl - nt * ca) * U.inverseInertia)));
                        }
                      }
                    }
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(9),
                m = v(0);
              (function () {
                ((i.create = function (s) {
                  return m.extend(
                    {
                      table: {},
                      list: [],
                      collisionStart: [],
                      collisionActive: [],
                      collisionEnd: [],
                    },
                    s
                  );
                }),
                  (i.update = function (s, d, f) {
                    var g = c.update,
                      S = c.create,
                      r = c.setActive,
                      y = s.table,
                      h = s.list,
                      x = h.length,
                      C = x,
                      O = s.collisionStart,
                      B = s.collisionEnd,
                      L = s.collisionActive,
                      T = d.length,
                      z = 0,
                      D = 0,
                      R = 0,
                      _,
                      U,
                      Y;
                    for (Y = 0; Y < T; Y++)
                      ((_ = d[Y]),
                        (U = _.pair),
                        U
                          ? (U.isActive && (L[R++] = U), g(U, _, f))
                          : ((U = S(_, f)), (y[U.id] = U), (O[z++] = U), (h[C++] = U)));
                    for (C = 0, x = h.length, Y = 0; Y < x; Y++)
                      ((U = h[Y]),
                        U.timeUpdated >= f
                          ? (h[C++] = U)
                          : (r(U, !1, f),
                            U.collision.bodyA.sleepCounter > 0 && U.collision.bodyB.sleepCounter > 0
                              ? (h[C++] = U)
                              : ((B[D++] = U), delete y[U.id])));
                    (h.length !== C && (h.length = C),
                      O.length !== z && (O.length = z),
                      B.length !== D && (B.length = D),
                      L.length !== R && (L.length = R));
                  }),
                  (i.clear = function (s) {
                    return (
                      (s.table = {}),
                      (s.list.length = 0),
                      (s.collisionStart.length = 0),
                      (s.collisionActive.length = 0),
                      (s.collisionEnd.length = 0),
                      s
                    );
                  }));
              })();
            },
            function (M, E, v) {
              var i = (M.exports = v(21));
              ((i.Axes = v(11)),
                (i.Bodies = v(12)),
                (i.Body = v(4)),
                (i.Bounds = v(1)),
                (i.Collision = v(8)),
                (i.Common = v(0)),
                (i.Composite = v(6)),
                (i.Composites = v(22)),
                (i.Constraint = v(10)),
                (i.Contact = v(16)),
                (i.Detector = v(13)),
                (i.Engine = v(17)),
                (i.Events = v(5)),
                (i.Grid = v(23)),
                (i.Mouse = v(14)),
                (i.MouseConstraint = v(24)),
                (i.Pair = v(9)),
                (i.Pairs = v(19)),
                (i.Plugin = v(15)),
                (i.Query = v(25)),
                (i.Render = v(26)),
                (i.Resolver = v(18)),
                (i.Runner = v(27)),
                (i.SAT = v(28)),
                (i.Sleeping = v(7)),
                (i.Svg = v(29)),
                (i.Vector = v(2)),
                (i.Vertices = v(3)),
                (i.World = v(30)),
                (i.Engine.run = i.Runner.run),
                i.Common.deprecated(
                  i.Engine,
                  'run',
                  'Engine.run ➤ use Matter.Runner.run(engine) instead'
                ));
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(15),
                m = v(0);
              (function () {
                ((i.name = 'matter-js'),
                  (i.version = '0.20.0'),
                  (i.uses = []),
                  (i.used = []),
                  (i.use = function () {
                    c.use(i, Array.prototype.slice.call(arguments));
                  }),
                  (i.before = function (s, d) {
                    return ((s = s.replace(/^Matter./, '')), m.chainPathBefore(i, s, d));
                  }),
                  (i.after = function (s, d) {
                    return ((s = s.replace(/^Matter./, '')), m.chainPathAfter(i, s, d));
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(6),
                m = v(10),
                s = v(0),
                d = v(4),
                f = v(12),
                g = s.deprecated;
              (function () {
                ((i.stack = function (S, r, y, h, x, C, O) {
                  for (
                    var B = c.create({ label: 'Stack' }), L = S, T = r, z, D = 0, R = 0;
                    R < h;
                    R++
                  ) {
                    for (var _ = 0, U = 0; U < y; U++) {
                      var Y = O(L, T, U, R, z, D);
                      if (Y) {
                        var N = Y.bounds.max.y - Y.bounds.min.y,
                          J = Y.bounds.max.x - Y.bounds.min.x;
                        (N > _ && (_ = N),
                          d.translate(Y, { x: J * 0.5, y: N * 0.5 }),
                          (L = Y.bounds.max.x + x),
                          c.addBody(B, Y),
                          (z = Y),
                          (D += 1));
                      } else L += x;
                    }
                    ((T += _ + C), (L = S));
                  }
                  return B;
                }),
                  (i.chain = function (S, r, y, h, x, C) {
                    for (var O = S.bodies, B = 1; B < O.length; B++) {
                      var L = O[B - 1],
                        T = O[B],
                        z = L.bounds.max.y - L.bounds.min.y,
                        D = L.bounds.max.x - L.bounds.min.x,
                        R = T.bounds.max.y - T.bounds.min.y,
                        _ = T.bounds.max.x - T.bounds.min.x,
                        U = {
                          bodyA: L,
                          pointA: { x: D * r, y: z * y },
                          bodyB: T,
                          pointB: { x: _ * h, y: R * x },
                        },
                        Y = s.extend(U, C);
                      c.addConstraint(S, m.create(Y));
                    }
                    return ((S.label += ' Chain'), S);
                  }),
                  (i.mesh = function (S, r, y, h, x) {
                    var C = S.bodies,
                      O,
                      B,
                      L,
                      T,
                      z;
                    for (O = 0; O < y; O++) {
                      for (B = 1; B < r; B++)
                        ((L = C[B - 1 + O * r]),
                          (T = C[B + O * r]),
                          c.addConstraint(S, m.create(s.extend({ bodyA: L, bodyB: T }, x))));
                      if (O > 0)
                        for (B = 0; B < r; B++)
                          ((L = C[B + (O - 1) * r]),
                            (T = C[B + O * r]),
                            c.addConstraint(S, m.create(s.extend({ bodyA: L, bodyB: T }, x))),
                            h &&
                              B > 0 &&
                              ((z = C[B - 1 + (O - 1) * r]),
                              c.addConstraint(S, m.create(s.extend({ bodyA: z, bodyB: T }, x)))),
                            h &&
                              B < r - 1 &&
                              ((z = C[B + 1 + (O - 1) * r]),
                              c.addConstraint(S, m.create(s.extend({ bodyA: z, bodyB: T }, x)))));
                    }
                    return ((S.label += ' Mesh'), S);
                  }),
                  (i.pyramid = function (S, r, y, h, x, C, O) {
                    return i.stack(S, r, y, h, x, C, function (B, L, T, z, D, R) {
                      var _ = Math.min(h, Math.ceil(y / 2)),
                        U = D ? D.bounds.max.x - D.bounds.min.x : 0;
                      if (!(z > _)) {
                        z = _ - z;
                        var Y = z,
                          N = y - 1 - z;
                        if (!(T < Y || T > N)) {
                          R === 1 && d.translate(D, { x: (T + (y % 2 === 1 ? 1 : -1)) * U, y: 0 });
                          var J = D ? T * U : 0;
                          return O(S + J + T * x, L, T, z, D, R);
                        }
                      }
                    });
                  }),
                  (i.newtonsCradle = function (S, r, y, h, x) {
                    for (var C = c.create({ label: 'Newtons Cradle' }), O = 0; O < y; O++) {
                      var B = 1.9,
                        L = f.circle(S + O * (h * B), r + x, h, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        T = m.create({ pointA: { x: S + O * (h * B), y: r }, bodyB: L });
                      (c.addBody(C, L), c.addConstraint(C, T));
                    }
                    return C;
                  }),
                  g(
                    i,
                    'newtonsCradle',
                    'Composites.newtonsCradle ➤ moved to newtonsCradle example'
                  ),
                  (i.car = function (S, r, y, h, x) {
                    var C = d.nextGroup(!0),
                      O = 20,
                      B = -y * 0.5 + O,
                      L = y * 0.5 - O,
                      T = 0,
                      z = c.create({ label: 'Car' }),
                      D = f.rectangle(S, r, y, h, {
                        collisionFilter: { group: C },
                        chamfer: { radius: h * 0.5 },
                        density: 2e-4,
                      }),
                      R = f.circle(S + B, r + T, x, {
                        collisionFilter: { group: C },
                        friction: 0.8,
                      }),
                      _ = f.circle(S + L, r + T, x, {
                        collisionFilter: { group: C },
                        friction: 0.8,
                      }),
                      U = m.create({
                        bodyB: D,
                        pointB: { x: B, y: T },
                        bodyA: R,
                        stiffness: 1,
                        length: 0,
                      }),
                      Y = m.create({
                        bodyB: D,
                        pointB: { x: L, y: T },
                        bodyA: _,
                        stiffness: 1,
                        length: 0,
                      });
                    return (
                      c.addBody(z, D),
                      c.addBody(z, R),
                      c.addBody(z, _),
                      c.addConstraint(z, U),
                      c.addConstraint(z, Y),
                      z
                    );
                  }),
                  g(i, 'car', 'Composites.car ➤ moved to car example'),
                  (i.softBody = function (S, r, y, h, x, C, O, B, L, T) {
                    ((L = s.extend({ inertia: 1 / 0 }, L)),
                      (T = s.extend({ stiffness: 0.2, render: { type: 'line', anchors: !1 } }, T)));
                    var z = i.stack(S, r, y, h, x, C, function (D, R) {
                      return f.circle(D, R, B, L);
                    });
                    return (i.mesh(z, y, h, O, T), (z.label = 'Soft Body'), z);
                  }),
                  g(i, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples'));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(9),
                m = v(0),
                s = m.deprecated;
              (function () {
                ((i.create = function (d) {
                  var f = {
                    buckets: {},
                    pairs: {},
                    pairsList: [],
                    bucketWidth: 48,
                    bucketHeight: 48,
                  };
                  return m.extend(f, d);
                }),
                  (i.update = function (d, f, g, S) {
                    var r,
                      y,
                      h,
                      x = g.world,
                      C = d.buckets,
                      O,
                      B,
                      L = !1;
                    for (r = 0; r < f.length; r++) {
                      var T = f[r];
                      if (
                        !(T.isSleeping && !S) &&
                        !(
                          x.bounds &&
                          (T.bounds.max.x < x.bounds.min.x ||
                            T.bounds.min.x > x.bounds.max.x ||
                            T.bounds.max.y < x.bounds.min.y ||
                            T.bounds.min.y > x.bounds.max.y)
                        )
                      ) {
                        var z = i._getRegion(d, T);
                        if (!T.region || z.id !== T.region.id || S) {
                          (!T.region || S) && (T.region = z);
                          var D = i._regionUnion(z, T.region);
                          for (y = D.startCol; y <= D.endCol; y++)
                            for (h = D.startRow; h <= D.endRow; h++) {
                              ((B = i._getBucketId(y, h)), (O = C[B]));
                              var R =
                                  y >= z.startCol &&
                                  y <= z.endCol &&
                                  h >= z.startRow &&
                                  h <= z.endRow,
                                _ =
                                  y >= T.region.startCol &&
                                  y <= T.region.endCol &&
                                  h >= T.region.startRow &&
                                  h <= T.region.endRow;
                              (!R && _ && _ && O && i._bucketRemoveBody(d, O, T),
                                (T.region === z || (R && !_) || S) &&
                                  (O || (O = i._createBucket(C, B)), i._bucketAddBody(d, O, T)));
                            }
                          ((T.region = z), (L = !0));
                        }
                      }
                    }
                    L && (d.pairsList = i._createActivePairsList(d));
                  }),
                  s(i, 'update', 'Grid.update ➤ replaced by Matter.Detector'),
                  (i.clear = function (d) {
                    ((d.buckets = {}), (d.pairs = {}), (d.pairsList = []));
                  }),
                  s(i, 'clear', 'Grid.clear ➤ replaced by Matter.Detector'),
                  (i._regionUnion = function (d, f) {
                    var g = Math.min(d.startCol, f.startCol),
                      S = Math.max(d.endCol, f.endCol),
                      r = Math.min(d.startRow, f.startRow),
                      y = Math.max(d.endRow, f.endRow);
                    return i._createRegion(g, S, r, y);
                  }),
                  (i._getRegion = function (d, f) {
                    var g = f.bounds,
                      S = Math.floor(g.min.x / d.bucketWidth),
                      r = Math.floor(g.max.x / d.bucketWidth),
                      y = Math.floor(g.min.y / d.bucketHeight),
                      h = Math.floor(g.max.y / d.bucketHeight);
                    return i._createRegion(S, r, y, h);
                  }),
                  (i._createRegion = function (d, f, g, S) {
                    return {
                      id: d + ',' + f + ',' + g + ',' + S,
                      startCol: d,
                      endCol: f,
                      startRow: g,
                      endRow: S,
                    };
                  }),
                  (i._getBucketId = function (d, f) {
                    return 'C' + d + 'R' + f;
                  }),
                  (i._createBucket = function (d, f) {
                    var g = (d[f] = []);
                    return g;
                  }),
                  (i._bucketAddBody = function (d, f, g) {
                    var S = d.pairs,
                      r = c.id,
                      y = f.length,
                      h;
                    for (h = 0; h < y; h++) {
                      var x = f[h];
                      if (!(g.id === x.id || (g.isStatic && x.isStatic))) {
                        var C = r(g, x),
                          O = S[C];
                        O ? (O[2] += 1) : (S[C] = [g, x, 1]);
                      }
                    }
                    f.push(g);
                  }),
                  (i._bucketRemoveBody = function (d, f, g) {
                    var S = d.pairs,
                      r = c.id,
                      y;
                    f.splice(m.indexOf(f, g), 1);
                    var h = f.length;
                    for (y = 0; y < h; y++) {
                      var x = S[r(g, f[y])];
                      x && (x[2] -= 1);
                    }
                  }),
                  (i._createActivePairsList = function (d) {
                    var f,
                      g = d.pairs,
                      S = m.keys(g),
                      r = S.length,
                      y = [],
                      h;
                    for (h = 0; h < r; h++) ((f = g[S[h]]), f[2] > 0 ? y.push(f) : delete g[S[h]]);
                    return y;
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(3),
                m = v(7),
                s = v(14),
                d = v(5),
                f = v(13),
                g = v(10),
                S = v(6),
                r = v(0),
                y = v(1);
              (function () {
                ((i.create = function (h, x) {
                  var C = (h ? h.mouse : null) || (x ? x.mouse : null);
                  C ||
                    (h && h.render && h.render.canvas
                      ? (C = s.create(h.render.canvas))
                      : x && x.element
                        ? (C = s.create(x.element))
                        : ((C = s.create()),
                          r.warn(
                            'MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected'
                          )));
                  var O = g.create({
                      label: 'Mouse Constraint',
                      pointA: C.position,
                      pointB: { x: 0, y: 0 },
                      length: 0.01,
                      stiffness: 0.1,
                      angularStiffness: 1,
                      render: { strokeStyle: '#90EE90', lineWidth: 3 },
                    }),
                    B = {
                      type: 'mouseConstraint',
                      mouse: C,
                      element: null,
                      body: null,
                      constraint: O,
                      collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                    },
                    L = r.extend(B, x);
                  return (
                    d.on(h, 'beforeUpdate', function () {
                      var T = S.allBodies(h.world);
                      (i.update(L, T), i._triggerEvents(L));
                    }),
                    L
                  );
                }),
                  (i.update = function (h, x) {
                    var C = h.mouse,
                      O = h.constraint,
                      B = h.body;
                    if (C.button === 0) {
                      if (O.bodyB) (m.set(O.bodyB, !1), (O.pointA = C.position));
                      else
                        for (var L = 0; L < x.length; L++)
                          if (
                            ((B = x[L]),
                            y.contains(B.bounds, C.position) &&
                              f.canCollide(B.collisionFilter, h.collisionFilter))
                          )
                            for (var T = B.parts.length > 1 ? 1 : 0; T < B.parts.length; T++) {
                              var z = B.parts[T];
                              if (c.contains(z.vertices, C.position)) {
                                ((O.pointA = C.position),
                                  (O.bodyB = h.body = B),
                                  (O.pointB = {
                                    x: C.position.x - B.position.x,
                                    y: C.position.y - B.position.y,
                                  }),
                                  (O.angleB = B.angle),
                                  m.set(B, !1),
                                  d.trigger(h, 'startdrag', { mouse: C, body: B }));
                                break;
                              }
                            }
                    } else
                      ((O.bodyB = h.body = null),
                        (O.pointB = null),
                        B && d.trigger(h, 'enddrag', { mouse: C, body: B }));
                  }),
                  (i._triggerEvents = function (h) {
                    var x = h.mouse,
                      C = x.sourceEvents;
                    (C.mousemove && d.trigger(h, 'mousemove', { mouse: x }),
                      C.mousedown && d.trigger(h, 'mousedown', { mouse: x }),
                      C.mouseup && d.trigger(h, 'mouseup', { mouse: x }),
                      s.clearSourceEvents(x));
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(2),
                m = v(8),
                s = v(1),
                d = v(12),
                f = v(3);
              (function () {
                ((i.collides = function (g, S) {
                  for (
                    var r = [], y = S.length, h = g.bounds, x = m.collides, C = s.overlaps, O = 0;
                    O < y;
                    O++
                  ) {
                    var B = S[O],
                      L = B.parts.length,
                      T = L === 1 ? 0 : 1;
                    if (C(B.bounds, h))
                      for (var z = T; z < L; z++) {
                        var D = B.parts[z];
                        if (C(D.bounds, h)) {
                          var R = x(D, g);
                          if (R) {
                            r.push(R);
                            break;
                          }
                        }
                      }
                  }
                  return r;
                }),
                  (i.ray = function (g, S, r, y) {
                    y = y || 1e-100;
                    for (
                      var h = c.angle(S, r),
                        x = c.magnitude(c.sub(S, r)),
                        C = (r.x + S.x) * 0.5,
                        O = (r.y + S.y) * 0.5,
                        B = d.rectangle(C, O, x, y, { angle: h }),
                        L = i.collides(B, g),
                        T = 0;
                      T < L.length;
                      T += 1
                    ) {
                      var z = L[T];
                      z.body = z.bodyB = z.bodyA;
                    }
                    return L;
                  }),
                  (i.region = function (g, S, r) {
                    for (var y = [], h = 0; h < g.length; h++) {
                      var x = g[h],
                        C = s.overlaps(x.bounds, S);
                      ((C && !r) || (!C && r)) && y.push(x);
                    }
                    return y;
                  }),
                  (i.point = function (g, S) {
                    for (var r = [], y = 0; y < g.length; y++) {
                      var h = g[y];
                      if (s.contains(h.bounds, S))
                        for (var x = h.parts.length === 1 ? 0 : 1; x < h.parts.length; x++) {
                          var C = h.parts[x];
                          if (s.contains(C.bounds, S) && f.contains(C.vertices, S)) {
                            r.push(h);
                            break;
                          }
                        }
                    }
                    return r;
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(4),
                m = v(0),
                s = v(6),
                d = v(1),
                f = v(5),
                g = v(2),
                S = v(14);
              (function () {
                var r, y;
                (typeof window < 'u' &&
                  ((r =
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (T) {
                      window.setTimeout(function () {
                        T(m.now());
                      }, 1e3 / 60);
                    }),
                  (y =
                    window.cancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    window.webkitCancelAnimationFrame ||
                    window.msCancelAnimationFrame)),
                  (i._goodFps = 30),
                  (i._goodDelta = 1e3 / 60),
                  (i.create = function (T) {
                    var z = {
                        engine: null,
                        element: null,
                        canvas: null,
                        mouse: null,
                        frameRequestId: null,
                        timing: {
                          historySize: 60,
                          delta: 0,
                          deltaHistory: [],
                          lastTime: 0,
                          lastTimestamp: 0,
                          lastElapsed: 0,
                          timestampElapsed: 0,
                          timestampElapsedHistory: [],
                          engineDeltaHistory: [],
                          engineElapsedHistory: [],
                          engineUpdatesHistory: [],
                          elapsedHistory: [],
                        },
                        options: {
                          width: 800,
                          height: 600,
                          pixelRatio: 1,
                          background: '#14151f',
                          wireframeBackground: '#14151f',
                          wireframeStrokeStyle: '#bbb',
                          hasBounds: !!T.bounds,
                          enabled: !0,
                          wireframes: !0,
                          showSleeping: !0,
                          showDebug: !1,
                          showStats: !1,
                          showPerformance: !1,
                          showBounds: !1,
                          showVelocity: !1,
                          showCollisions: !1,
                          showSeparations: !1,
                          showAxes: !1,
                          showPositions: !1,
                          showAngleIndicator: !1,
                          showIds: !1,
                          showVertexNumbers: !1,
                          showConvexHulls: !1,
                          showInternalEdges: !1,
                          showMousePosition: !1,
                        },
                      },
                      D = m.extend(z, T);
                    return (
                      D.canvas &&
                        ((D.canvas.width = D.options.width || D.canvas.width),
                        (D.canvas.height = D.options.height || D.canvas.height)),
                      (D.mouse = T.mouse),
                      (D.engine = T.engine),
                      (D.canvas = D.canvas || C(D.options.width, D.options.height)),
                      (D.context = D.canvas.getContext('2d')),
                      (D.textures = {}),
                      (D.bounds = D.bounds || {
                        min: { x: 0, y: 0 },
                        max: { x: D.canvas.width, y: D.canvas.height },
                      }),
                      (D.controller = i),
                      (D.options.showBroadphase = !1),
                      D.options.pixelRatio !== 1 && i.setPixelRatio(D, D.options.pixelRatio),
                      m.isElement(D.element) && D.element.appendChild(D.canvas),
                      D
                    );
                  }),
                  (i.run = function (T) {
                    (function z(D) {
                      ((T.frameRequestId = r(z)),
                        h(T, D),
                        i.world(T, D),
                        T.context.setTransform(
                          T.options.pixelRatio,
                          0,
                          0,
                          T.options.pixelRatio,
                          0,
                          0
                        ),
                        (T.options.showStats || T.options.showDebug) && i.stats(T, T.context, D),
                        (T.options.showPerformance || T.options.showDebug) &&
                          i.performance(T, T.context, D),
                        T.context.setTransform(1, 0, 0, 1, 0, 0));
                    })();
                  }),
                  (i.stop = function (T) {
                    y(T.frameRequestId);
                  }),
                  (i.setPixelRatio = function (T, z) {
                    var D = T.options,
                      R = T.canvas;
                    (z === 'auto' && (z = O(R)),
                      (D.pixelRatio = z),
                      R.setAttribute('data-pixel-ratio', z),
                      (R.width = D.width * z),
                      (R.height = D.height * z),
                      (R.style.width = D.width + 'px'),
                      (R.style.height = D.height + 'px'));
                  }),
                  (i.setSize = function (T, z, D) {
                    ((T.options.width = z),
                      (T.options.height = D),
                      (T.bounds.max.x = T.bounds.min.x + z),
                      (T.bounds.max.y = T.bounds.min.y + D),
                      T.options.pixelRatio !== 1
                        ? i.setPixelRatio(T, T.options.pixelRatio)
                        : ((T.canvas.width = z), (T.canvas.height = D)));
                  }),
                  (i.lookAt = function (T, z, D, R) {
                    ((R = typeof R < 'u' ? R : !0),
                      (z = m.isArray(z) ? z : [z]),
                      (D = D || { x: 0, y: 0 }));
                    for (
                      var _ = { min: { x: 1 / 0, y: 1 / 0 }, max: { x: -1 / 0, y: -1 / 0 } }, U = 0;
                      U < z.length;
                      U += 1
                    ) {
                      var Y = z[U],
                        N = Y.bounds ? Y.bounds.min : Y.min || Y.position || Y,
                        J = Y.bounds ? Y.bounds.max : Y.max || Y.position || Y;
                      N &&
                        J &&
                        (N.x < _.min.x && (_.min.x = N.x),
                        J.x > _.max.x && (_.max.x = J.x),
                        N.y < _.min.y && (_.min.y = N.y),
                        J.y > _.max.y && (_.max.y = J.y));
                    }
                    var I = _.max.x - _.min.x + 2 * D.x,
                      k = _.max.y - _.min.y + 2 * D.y,
                      G = T.canvas.height,
                      Z = T.canvas.width,
                      te = Z / G,
                      ne = I / k,
                      fe = 1,
                      H = 1;
                    (ne > te ? (H = ne / te) : (fe = te / ne),
                      (T.options.hasBounds = !0),
                      (T.bounds.min.x = _.min.x),
                      (T.bounds.max.x = _.min.x + I * fe),
                      (T.bounds.min.y = _.min.y),
                      (T.bounds.max.y = _.min.y + k * H),
                      R &&
                        ((T.bounds.min.x += I * 0.5 - I * fe * 0.5),
                        (T.bounds.max.x += I * 0.5 - I * fe * 0.5),
                        (T.bounds.min.y += k * 0.5 - k * H * 0.5),
                        (T.bounds.max.y += k * 0.5 - k * H * 0.5)),
                      (T.bounds.min.x -= D.x),
                      (T.bounds.max.x -= D.x),
                      (T.bounds.min.y -= D.y),
                      (T.bounds.max.y -= D.y),
                      T.mouse &&
                        (S.setScale(T.mouse, {
                          x: (T.bounds.max.x - T.bounds.min.x) / T.canvas.width,
                          y: (T.bounds.max.y - T.bounds.min.y) / T.canvas.height,
                        }),
                        S.setOffset(T.mouse, T.bounds.min)));
                  }),
                  (i.startViewTransform = function (T) {
                    var z = T.bounds.max.x - T.bounds.min.x,
                      D = T.bounds.max.y - T.bounds.min.y,
                      R = z / T.options.width,
                      _ = D / T.options.height;
                    (T.context.setTransform(
                      T.options.pixelRatio / R,
                      0,
                      0,
                      T.options.pixelRatio / _,
                      0,
                      0
                    ),
                      T.context.translate(-T.bounds.min.x, -T.bounds.min.y));
                  }),
                  (i.endViewTransform = function (T) {
                    T.context.setTransform(T.options.pixelRatio, 0, 0, T.options.pixelRatio, 0, 0);
                  }),
                  (i.world = function (T, z) {
                    var D = m.now(),
                      R = T.engine,
                      _ = R.world,
                      U = T.canvas,
                      Y = T.context,
                      N = T.options,
                      J = T.timing,
                      I = s.allBodies(_),
                      k = s.allConstraints(_),
                      G = N.wireframes ? N.wireframeBackground : N.background,
                      Z = [],
                      te = [],
                      ne,
                      fe = { timestamp: R.timing.timestamp };
                    if (
                      (f.trigger(T, 'beforeRender', fe),
                      T.currentBackground !== G && L(T, G),
                      (Y.globalCompositeOperation = 'source-in'),
                      (Y.fillStyle = 'transparent'),
                      Y.fillRect(0, 0, U.width, U.height),
                      (Y.globalCompositeOperation = 'source-over'),
                      N.hasBounds)
                    ) {
                      for (ne = 0; ne < I.length; ne++) {
                        var H = I[ne];
                        d.overlaps(H.bounds, T.bounds) && Z.push(H);
                      }
                      for (ne = 0; ne < k.length; ne++) {
                        var $ = k[ne],
                          le = $.bodyA,
                          ie = $.bodyB,
                          ce = $.pointA,
                          ue = $.pointB;
                        (le && (ce = g.add(le.position, $.pointA)),
                          ie && (ue = g.add(ie.position, $.pointB)),
                          !(!ce || !ue) &&
                            (d.contains(T.bounds, ce) || d.contains(T.bounds, ue)) &&
                            te.push($));
                      }
                      (i.startViewTransform(T),
                        T.mouse &&
                          (S.setScale(T.mouse, {
                            x: (T.bounds.max.x - T.bounds.min.x) / T.options.width,
                            y: (T.bounds.max.y - T.bounds.min.y) / T.options.height,
                          }),
                          S.setOffset(T.mouse, T.bounds.min)));
                    } else
                      ((te = k),
                        (Z = I),
                        T.options.pixelRatio !== 1 &&
                          T.context.setTransform(
                            T.options.pixelRatio,
                            0,
                            0,
                            T.options.pixelRatio,
                            0,
                            0
                          ));
                    (!N.wireframes || (R.enableSleeping && N.showSleeping)
                      ? i.bodies(T, Z, Y)
                      : (N.showConvexHulls && i.bodyConvexHulls(T, Z, Y),
                        i.bodyWireframes(T, Z, Y)),
                      N.showBounds && i.bodyBounds(T, Z, Y),
                      (N.showAxes || N.showAngleIndicator) && i.bodyAxes(T, Z, Y),
                      N.showPositions && i.bodyPositions(T, Z, Y),
                      N.showVelocity && i.bodyVelocity(T, Z, Y),
                      N.showIds && i.bodyIds(T, Z, Y),
                      N.showSeparations && i.separations(T, R.pairs.list, Y),
                      N.showCollisions && i.collisions(T, R.pairs.list, Y),
                      N.showVertexNumbers && i.vertexNumbers(T, Z, Y),
                      N.showMousePosition && i.mousePosition(T, T.mouse, Y),
                      i.constraints(te, Y),
                      N.hasBounds && i.endViewTransform(T),
                      f.trigger(T, 'afterRender', fe),
                      (J.lastElapsed = m.now() - D));
                  }),
                  (i.stats = function (T, z, D) {
                    for (
                      var R = T.engine,
                        _ = R.world,
                        U = s.allBodies(_),
                        Y = 0,
                        N = 55,
                        J = 44,
                        I = 0,
                        k = 0,
                        G = 0;
                      G < U.length;
                      G += 1
                    )
                      Y += U[G].parts.length;
                    var Z = {
                      Part: Y,
                      Body: U.length,
                      Cons: s.allConstraints(_).length,
                      Comp: s.allComposites(_).length,
                      Pair: R.pairs.list.length,
                    };
                    ((z.fillStyle = '#0e0f19'),
                      z.fillRect(I, k, N * 5.5, J),
                      (z.font = '12px Arial'),
                      (z.textBaseline = 'top'),
                      (z.textAlign = 'right'));
                    for (var te in Z) {
                      var ne = Z[te];
                      ((z.fillStyle = '#aaa'),
                        z.fillText(te, I + N, k + 8),
                        (z.fillStyle = '#eee'),
                        z.fillText(ne, I + N, k + 26),
                        (I += N));
                    }
                  }),
                  (i.performance = function (T, z) {
                    var D = T.engine,
                      R = T.timing,
                      _ = R.deltaHistory,
                      U = R.elapsedHistory,
                      Y = R.timestampElapsedHistory,
                      N = R.engineDeltaHistory,
                      J = R.engineUpdatesHistory,
                      I = R.engineElapsedHistory,
                      k = D.timing.lastUpdatesPerFrame,
                      G = D.timing.lastDelta,
                      Z = x(_),
                      te = x(U),
                      ne = x(N),
                      fe = x(J),
                      H = x(I),
                      $ = x(Y),
                      le = $ / Z || 0,
                      ie = Math.round(Z / G),
                      ce = 1e3 / Z || 0,
                      ue = 4,
                      ve = 12,
                      Te = 60,
                      Be = 34,
                      tt = 10,
                      nt = 69;
                    ((z.fillStyle = '#0e0f19'),
                      z.fillRect(0, 50, ve * 5 + Te * 6 + 22, Be),
                      i.status(
                        z,
                        tt,
                        nt,
                        Te,
                        ue,
                        _.length,
                        Math.round(ce) + ' fps',
                        ce / i._goodFps,
                        function (Je) {
                          return _[Je] / Z - 1;
                        }
                      ),
                      i.status(
                        z,
                        tt + ve + Te,
                        nt,
                        Te,
                        ue,
                        N.length,
                        G.toFixed(2) + ' dt',
                        i._goodDelta / G,
                        function (Je) {
                          return N[Je] / ne - 1;
                        }
                      ),
                      i.status(
                        z,
                        tt + (ve + Te) * 2,
                        nt,
                        Te,
                        ue,
                        J.length,
                        k + ' upf',
                        Math.pow(m.clamp(fe / ie || 1, 0, 1), 4),
                        function (Je) {
                          return J[Je] / fe - 1;
                        }
                      ),
                      i.status(
                        z,
                        tt + (ve + Te) * 3,
                        nt,
                        Te,
                        ue,
                        I.length,
                        H.toFixed(2) + ' ut',
                        1 - (k * H) / i._goodFps,
                        function (Je) {
                          return I[Je] / H - 1;
                        }
                      ),
                      i.status(
                        z,
                        tt + (ve + Te) * 4,
                        nt,
                        Te,
                        ue,
                        U.length,
                        te.toFixed(2) + ' rt',
                        1 - te / i._goodFps,
                        function (Je) {
                          return U[Je] / te - 1;
                        }
                      ),
                      i.status(
                        z,
                        tt + (ve + Te) * 5,
                        nt,
                        Te,
                        ue,
                        Y.length,
                        le.toFixed(2) + ' x',
                        le * le * le,
                        function (Je) {
                          return (Y[Je] / _[Je] / le || 0) - 1;
                        }
                      ));
                  }),
                  (i.status = function (T, z, D, R, _, U, Y, N, J) {
                    ((T.strokeStyle = '#888'),
                      (T.fillStyle = '#444'),
                      (T.lineWidth = 1),
                      T.fillRect(z, D + 7, R, 1),
                      T.beginPath(),
                      T.moveTo(z, D + 7 - _ * m.clamp(0.4 * J(0), -2, 2)));
                    for (var I = 0; I < R; I += 1)
                      T.lineTo(z + I, D + 7 - (I < U ? _ * m.clamp(0.4 * J(I), -2, 2) : 0));
                    (T.stroke(),
                      (T.fillStyle = 'hsl(' + m.clamp(25 + 95 * N, 0, 120) + ',100%,60%)'),
                      T.fillRect(z, D - 7, 4, 4),
                      (T.font = '12px Arial'),
                      (T.textBaseline = 'middle'),
                      (T.textAlign = 'right'),
                      (T.fillStyle = '#eee'),
                      T.fillText(Y, z + R, D - 5));
                  }),
                  (i.constraints = function (T, z) {
                    for (var D = z, R = 0; R < T.length; R++) {
                      var _ = T[R];
                      if (!(!_.render.visible || !_.pointA || !_.pointB)) {
                        var U = _.bodyA,
                          Y = _.bodyB,
                          N,
                          J;
                        if (
                          (U ? (N = g.add(U.position, _.pointA)) : (N = _.pointA),
                          _.render.type === 'pin')
                        )
                          (D.beginPath(), D.arc(N.x, N.y, 3, 0, 2 * Math.PI), D.closePath());
                        else {
                          if (
                            (Y ? (J = g.add(Y.position, _.pointB)) : (J = _.pointB),
                            D.beginPath(),
                            D.moveTo(N.x, N.y),
                            _.render.type === 'spring')
                          )
                            for (
                              var I = g.sub(J, N),
                                k = g.perp(g.normalise(I)),
                                G = Math.ceil(m.clamp(_.length / 5, 12, 20)),
                                Z,
                                te = 1;
                              te < G;
                              te += 1
                            )
                              ((Z = te % 2 === 0 ? 1 : -1),
                                D.lineTo(
                                  N.x + I.x * (te / G) + k.x * Z * 4,
                                  N.y + I.y * (te / G) + k.y * Z * 4
                                ));
                          D.lineTo(J.x, J.y);
                        }
                        (_.render.lineWidth &&
                          ((D.lineWidth = _.render.lineWidth),
                          (D.strokeStyle = _.render.strokeStyle),
                          D.stroke()),
                          _.render.anchors &&
                            ((D.fillStyle = _.render.strokeStyle),
                            D.beginPath(),
                            D.arc(N.x, N.y, 3, 0, 2 * Math.PI),
                            D.arc(J.x, J.y, 3, 0, 2 * Math.PI),
                            D.closePath(),
                            D.fill()));
                      }
                    }
                  }),
                  (i.bodies = function (T, z, D) {
                    var R = D;
                    T.engine;
                    var _ = T.options,
                      U = _.showInternalEdges || !_.wireframes,
                      Y,
                      N,
                      J,
                      I;
                    for (J = 0; J < z.length; J++)
                      if (((Y = z[J]), !!Y.render.visible)) {
                        for (I = Y.parts.length > 1 ? 1 : 0; I < Y.parts.length; I++)
                          if (((N = Y.parts[I]), !!N.render.visible)) {
                            if (
                              (_.showSleeping && Y.isSleeping
                                ? (R.globalAlpha = 0.5 * N.render.opacity)
                                : N.render.opacity !== 1 && (R.globalAlpha = N.render.opacity),
                              N.render.sprite && N.render.sprite.texture && !_.wireframes)
                            ) {
                              var k = N.render.sprite,
                                G = B(T, k.texture);
                              (R.translate(N.position.x, N.position.y),
                                R.rotate(N.angle),
                                R.drawImage(
                                  G,
                                  G.width * -k.xOffset * k.xScale,
                                  G.height * -k.yOffset * k.yScale,
                                  G.width * k.xScale,
                                  G.height * k.yScale
                                ),
                                R.rotate(-N.angle),
                                R.translate(-N.position.x, -N.position.y));
                            } else {
                              if (N.circleRadius)
                                (R.beginPath(),
                                  R.arc(
                                    N.position.x,
                                    N.position.y,
                                    N.circleRadius,
                                    0,
                                    2 * Math.PI
                                  ));
                              else {
                                (R.beginPath(), R.moveTo(N.vertices[0].x, N.vertices[0].y));
                                for (var Z = 1; Z < N.vertices.length; Z++)
                                  (!N.vertices[Z - 1].isInternal || U
                                    ? R.lineTo(N.vertices[Z].x, N.vertices[Z].y)
                                    : R.moveTo(N.vertices[Z].x, N.vertices[Z].y),
                                    N.vertices[Z].isInternal &&
                                      !U &&
                                      R.moveTo(
                                        N.vertices[(Z + 1) % N.vertices.length].x,
                                        N.vertices[(Z + 1) % N.vertices.length].y
                                      ));
                                (R.lineTo(N.vertices[0].x, N.vertices[0].y), R.closePath());
                              }
                              _.wireframes
                                ? ((R.lineWidth = 1),
                                  (R.strokeStyle = T.options.wireframeStrokeStyle),
                                  R.stroke())
                                : ((R.fillStyle = N.render.fillStyle),
                                  N.render.lineWidth &&
                                    ((R.lineWidth = N.render.lineWidth),
                                    (R.strokeStyle = N.render.strokeStyle),
                                    R.stroke()),
                                  R.fill());
                            }
                            R.globalAlpha = 1;
                          }
                      }
                  }),
                  (i.bodyWireframes = function (T, z, D) {
                    var R = D,
                      _ = T.options.showInternalEdges,
                      U,
                      Y,
                      N,
                      J,
                      I;
                    for (R.beginPath(), N = 0; N < z.length; N++)
                      if (((U = z[N]), !!U.render.visible))
                        for (I = U.parts.length > 1 ? 1 : 0; I < U.parts.length; I++) {
                          for (
                            Y = U.parts[I], R.moveTo(Y.vertices[0].x, Y.vertices[0].y), J = 1;
                            J < Y.vertices.length;
                            J++
                          )
                            (!Y.vertices[J - 1].isInternal || _
                              ? R.lineTo(Y.vertices[J].x, Y.vertices[J].y)
                              : R.moveTo(Y.vertices[J].x, Y.vertices[J].y),
                              Y.vertices[J].isInternal &&
                                !_ &&
                                R.moveTo(
                                  Y.vertices[(J + 1) % Y.vertices.length].x,
                                  Y.vertices[(J + 1) % Y.vertices.length].y
                                ));
                          R.lineTo(Y.vertices[0].x, Y.vertices[0].y);
                        }
                    ((R.lineWidth = 1),
                      (R.strokeStyle = T.options.wireframeStrokeStyle),
                      R.stroke());
                  }),
                  (i.bodyConvexHulls = function (T, z, D) {
                    var R = D,
                      _,
                      U,
                      Y;
                    for (R.beginPath(), U = 0; U < z.length; U++)
                      if (((_ = z[U]), !(!_.render.visible || _.parts.length === 1))) {
                        for (
                          R.moveTo(_.vertices[0].x, _.vertices[0].y), Y = 1;
                          Y < _.vertices.length;
                          Y++
                        )
                          R.lineTo(_.vertices[Y].x, _.vertices[Y].y);
                        R.lineTo(_.vertices[0].x, _.vertices[0].y);
                      }
                    ((R.lineWidth = 1), (R.strokeStyle = 'rgba(255,255,255,0.2)'), R.stroke());
                  }),
                  (i.vertexNumbers = function (T, z, D) {
                    var R = D,
                      _,
                      U,
                      Y;
                    for (_ = 0; _ < z.length; _++) {
                      var N = z[_].parts;
                      for (Y = N.length > 1 ? 1 : 0; Y < N.length; Y++) {
                        var J = N[Y];
                        for (U = 0; U < J.vertices.length; U++)
                          ((R.fillStyle = 'rgba(255,255,255,0.2)'),
                            R.fillText(
                              _ + '_' + U,
                              J.position.x + (J.vertices[U].x - J.position.x) * 0.8,
                              J.position.y + (J.vertices[U].y - J.position.y) * 0.8
                            ));
                      }
                    }
                  }),
                  (i.mousePosition = function (T, z, D) {
                    var R = D;
                    ((R.fillStyle = 'rgba(255,255,255,0.8)'),
                      R.fillText(
                        z.position.x + '  ' + z.position.y,
                        z.position.x + 5,
                        z.position.y - 5
                      ));
                  }),
                  (i.bodyBounds = function (T, z, D) {
                    var R = D;
                    T.engine;
                    var _ = T.options;
                    R.beginPath();
                    for (var U = 0; U < z.length; U++) {
                      var Y = z[U];
                      if (Y.render.visible)
                        for (var N = z[U].parts, J = N.length > 1 ? 1 : 0; J < N.length; J++) {
                          var I = N[J];
                          R.rect(
                            I.bounds.min.x,
                            I.bounds.min.y,
                            I.bounds.max.x - I.bounds.min.x,
                            I.bounds.max.y - I.bounds.min.y
                          );
                        }
                    }
                    (_.wireframes
                      ? (R.strokeStyle = 'rgba(255,255,255,0.08)')
                      : (R.strokeStyle = 'rgba(0,0,0,0.1)'),
                      (R.lineWidth = 1),
                      R.stroke());
                  }),
                  (i.bodyAxes = function (T, z, D) {
                    var R = D;
                    T.engine;
                    var _ = T.options,
                      U,
                      Y,
                      N,
                      J;
                    for (R.beginPath(), Y = 0; Y < z.length; Y++) {
                      var I = z[Y],
                        k = I.parts;
                      if (I.render.visible)
                        if (_.showAxes)
                          for (N = k.length > 1 ? 1 : 0; N < k.length; N++)
                            for (U = k[N], J = 0; J < U.axes.length; J++) {
                              var G = U.axes[J];
                              (R.moveTo(U.position.x, U.position.y),
                                R.lineTo(U.position.x + G.x * 20, U.position.y + G.y * 20));
                            }
                        else
                          for (N = k.length > 1 ? 1 : 0; N < k.length; N++)
                            for (U = k[N], J = 0; J < U.axes.length; J++)
                              (R.moveTo(U.position.x, U.position.y),
                                R.lineTo(
                                  (U.vertices[0].x + U.vertices[U.vertices.length - 1].x) / 2,
                                  (U.vertices[0].y + U.vertices[U.vertices.length - 1].y) / 2
                                ));
                    }
                    (_.wireframes
                      ? ((R.strokeStyle = 'indianred'), (R.lineWidth = 1))
                      : ((R.strokeStyle = 'rgba(255, 255, 255, 0.4)'),
                        (R.globalCompositeOperation = 'overlay'),
                        (R.lineWidth = 2)),
                      R.stroke(),
                      (R.globalCompositeOperation = 'source-over'));
                  }),
                  (i.bodyPositions = function (T, z, D) {
                    var R = D;
                    T.engine;
                    var _ = T.options,
                      U,
                      Y,
                      N,
                      J;
                    for (R.beginPath(), N = 0; N < z.length; N++)
                      if (((U = z[N]), !!U.render.visible))
                        for (J = 0; J < U.parts.length; J++)
                          ((Y = U.parts[J]),
                            R.arc(Y.position.x, Y.position.y, 3, 0, 2 * Math.PI, !1),
                            R.closePath());
                    for (
                      _.wireframes
                        ? (R.fillStyle = 'indianred')
                        : (R.fillStyle = 'rgba(0,0,0,0.5)'),
                        R.fill(),
                        R.beginPath(),
                        N = 0;
                      N < z.length;
                      N++
                    )
                      ((U = z[N]),
                        U.render.visible &&
                          (R.arc(U.positionPrev.x, U.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                          R.closePath()));
                    ((R.fillStyle = 'rgba(255,165,0,0.8)'), R.fill());
                  }),
                  (i.bodyVelocity = function (T, z, D) {
                    var R = D;
                    R.beginPath();
                    for (var _ = 0; _ < z.length; _++) {
                      var U = z[_];
                      if (U.render.visible) {
                        var Y = c.getVelocity(U);
                        (R.moveTo(U.position.x, U.position.y),
                          R.lineTo(U.position.x + Y.x, U.position.y + Y.y));
                      }
                    }
                    ((R.lineWidth = 3), (R.strokeStyle = 'cornflowerblue'), R.stroke());
                  }),
                  (i.bodyIds = function (T, z, D) {
                    var R = D,
                      _,
                      U;
                    for (_ = 0; _ < z.length; _++)
                      if (z[_].render.visible) {
                        var Y = z[_].parts;
                        for (U = Y.length > 1 ? 1 : 0; U < Y.length; U++) {
                          var N = Y[U];
                          ((R.font = '12px Arial'),
                            (R.fillStyle = 'rgba(255,255,255,0.5)'),
                            R.fillText(N.id, N.position.x + 10, N.position.y - 10));
                        }
                      }
                  }),
                  (i.collisions = function (T, z, D) {
                    var R = D,
                      _ = T.options,
                      U,
                      Y,
                      N,
                      J;
                    for (R.beginPath(), N = 0; N < z.length; N++)
                      if (((U = z[N]), !!U.isActive))
                        for (Y = U.collision, J = 0; J < U.contactCount; J++) {
                          var I = U.contacts[J],
                            k = I.vertex;
                          R.rect(k.x - 1.5, k.y - 1.5, 3.5, 3.5);
                        }
                    for (
                      _.wireframes
                        ? (R.fillStyle = 'rgba(255,255,255,0.7)')
                        : (R.fillStyle = 'orange'),
                        R.fill(),
                        R.beginPath(),
                        N = 0;
                      N < z.length;
                      N++
                    )
                      if (((U = z[N]), !!U.isActive && ((Y = U.collision), U.contactCount > 0))) {
                        var G = U.contacts[0].vertex.x,
                          Z = U.contacts[0].vertex.y;
                        (U.contactCount === 2 &&
                          ((G = (U.contacts[0].vertex.x + U.contacts[1].vertex.x) / 2),
                          (Z = (U.contacts[0].vertex.y + U.contacts[1].vertex.y) / 2)),
                          Y.bodyB === Y.supports[0].body || Y.bodyA.isStatic === !0
                            ? R.moveTo(G - Y.normal.x * 8, Z - Y.normal.y * 8)
                            : R.moveTo(G + Y.normal.x * 8, Z + Y.normal.y * 8),
                          R.lineTo(G, Z));
                      }
                    (_.wireframes
                      ? (R.strokeStyle = 'rgba(255,165,0,0.7)')
                      : (R.strokeStyle = 'orange'),
                      (R.lineWidth = 1),
                      R.stroke());
                  }),
                  (i.separations = function (T, z, D) {
                    var R = D,
                      _ = T.options,
                      U,
                      Y,
                      N,
                      J,
                      I;
                    for (R.beginPath(), I = 0; I < z.length; I++)
                      if (((U = z[I]), !!U.isActive)) {
                        ((Y = U.collision), (N = Y.bodyA), (J = Y.bodyB));
                        var k = 1;
                        (!J.isStatic && !N.isStatic && (k = 0.5),
                          J.isStatic && (k = 0),
                          R.moveTo(J.position.x, J.position.y),
                          R.lineTo(
                            J.position.x - Y.penetration.x * k,
                            J.position.y - Y.penetration.y * k
                          ),
                          (k = 1),
                          !J.isStatic && !N.isStatic && (k = 0.5),
                          N.isStatic && (k = 0),
                          R.moveTo(N.position.x, N.position.y),
                          R.lineTo(
                            N.position.x + Y.penetration.x * k,
                            N.position.y + Y.penetration.y * k
                          ));
                      }
                    (_.wireframes
                      ? (R.strokeStyle = 'rgba(255,165,0,0.5)')
                      : (R.strokeStyle = 'orange'),
                      R.stroke());
                  }),
                  (i.inspector = function (T, z) {
                    T.engine;
                    var D = T.selected,
                      R = T.render,
                      _ = R.options,
                      U;
                    if (_.hasBounds) {
                      var Y = R.bounds.max.x - R.bounds.min.x,
                        N = R.bounds.max.y - R.bounds.min.y,
                        J = Y / R.options.width,
                        I = N / R.options.height;
                      (z.scale(1 / J, 1 / I), z.translate(-R.bounds.min.x, -R.bounds.min.y));
                    }
                    for (var k = 0; k < D.length; k++) {
                      var G = D[k].data;
                      switch (
                        (z.translate(0.5, 0.5),
                        (z.lineWidth = 1),
                        (z.strokeStyle = 'rgba(255,165,0,0.9)'),
                        z.setLineDash([1, 2]),
                        G.type)
                      ) {
                        case 'body':
                          ((U = G.bounds),
                            z.beginPath(),
                            z.rect(
                              Math.floor(U.min.x - 3),
                              Math.floor(U.min.y - 3),
                              Math.floor(U.max.x - U.min.x + 6),
                              Math.floor(U.max.y - U.min.y + 6)
                            ),
                            z.closePath(),
                            z.stroke());
                          break;
                        case 'constraint':
                          var Z = G.pointA;
                          (G.bodyA && (Z = G.pointB),
                            z.beginPath(),
                            z.arc(Z.x, Z.y, 10, 0, 2 * Math.PI),
                            z.closePath(),
                            z.stroke());
                          break;
                      }
                      (z.setLineDash([]), z.translate(-0.5, -0.5));
                    }
                    (T.selectStart !== null &&
                      (z.translate(0.5, 0.5),
                      (z.lineWidth = 1),
                      (z.strokeStyle = 'rgba(255,165,0,0.6)'),
                      (z.fillStyle = 'rgba(255,165,0,0.1)'),
                      (U = T.selectBounds),
                      z.beginPath(),
                      z.rect(
                        Math.floor(U.min.x),
                        Math.floor(U.min.y),
                        Math.floor(U.max.x - U.min.x),
                        Math.floor(U.max.y - U.min.y)
                      ),
                      z.closePath(),
                      z.stroke(),
                      z.fill(),
                      z.translate(-0.5, -0.5)),
                      _.hasBounds && z.setTransform(1, 0, 0, 1, 0, 0));
                  }));
                var h = function (T, z) {
                    var D = T.engine,
                      R = T.timing,
                      _ = R.historySize,
                      U = D.timing.timestamp;
                    ((R.delta = z - R.lastTime || i._goodDelta),
                      (R.lastTime = z),
                      (R.timestampElapsed = U - R.lastTimestamp || 0),
                      (R.lastTimestamp = U),
                      R.deltaHistory.unshift(R.delta),
                      (R.deltaHistory.length = Math.min(R.deltaHistory.length, _)),
                      R.engineDeltaHistory.unshift(D.timing.lastDelta),
                      (R.engineDeltaHistory.length = Math.min(R.engineDeltaHistory.length, _)),
                      R.timestampElapsedHistory.unshift(R.timestampElapsed),
                      (R.timestampElapsedHistory.length = Math.min(
                        R.timestampElapsedHistory.length,
                        _
                      )),
                      R.engineUpdatesHistory.unshift(D.timing.lastUpdatesPerFrame),
                      (R.engineUpdatesHistory.length = Math.min(R.engineUpdatesHistory.length, _)),
                      R.engineElapsedHistory.unshift(D.timing.lastElapsed),
                      (R.engineElapsedHistory.length = Math.min(R.engineElapsedHistory.length, _)),
                      R.elapsedHistory.unshift(R.lastElapsed),
                      (R.elapsedHistory.length = Math.min(R.elapsedHistory.length, _)));
                  },
                  x = function (T) {
                    for (var z = 0, D = 0; D < T.length; D += 1) z += T[D];
                    return z / T.length || 0;
                  },
                  C = function (T, z) {
                    var D = document.createElement('canvas');
                    return (
                      (D.width = T),
                      (D.height = z),
                      (D.oncontextmenu = function () {
                        return !1;
                      }),
                      (D.onselectstart = function () {
                        return !1;
                      }),
                      D
                    );
                  },
                  O = function (T) {
                    var z = T.getContext('2d'),
                      D = window.devicePixelRatio || 1,
                      R =
                        z.webkitBackingStorePixelRatio ||
                        z.mozBackingStorePixelRatio ||
                        z.msBackingStorePixelRatio ||
                        z.oBackingStorePixelRatio ||
                        z.backingStorePixelRatio ||
                        1;
                    return D / R;
                  },
                  B = function (T, z) {
                    var D = T.textures[z];
                    return D || ((D = T.textures[z] = new Image()), (D.src = z), D);
                  },
                  L = function (T, z) {
                    var D = z;
                    (/(jpg|gif|png)$/.test(z) && (D = 'url(' + z + ')'),
                      (T.canvas.style.background = D),
                      (T.canvas.style.backgroundSize = 'contain'),
                      (T.currentBackground = z));
                  };
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(5),
                m = v(17),
                s = v(0);
              (function () {
                ((i._maxFrameDelta = 1e3 / 15),
                  (i._frameDeltaFallback = 1e3 / 60),
                  (i._timeBufferMargin = 1.5),
                  (i._elapsedNextEstimate = 1),
                  (i._smoothingLowerBound = 0.1),
                  (i._smoothingUpperBound = 0.9),
                  (i.create = function (f) {
                    var g = {
                        delta: 16.666666666666668,
                        frameDelta: null,
                        frameDeltaSmoothing: !0,
                        frameDeltaSnapping: !0,
                        frameDeltaHistory: [],
                        frameDeltaHistorySize: 100,
                        frameRequestId: null,
                        timeBuffer: 0,
                        timeLastTick: null,
                        maxUpdates: null,
                        maxFrameTime: 33.333333333333336,
                        lastUpdatesDeferred: 0,
                        enabled: !0,
                      },
                      S = s.extend(g, f);
                    return ((S.fps = 0), S);
                  }),
                  (i.run = function (f, g) {
                    return (
                      (f.timeBuffer = i._frameDeltaFallback),
                      (function S(r) {
                        ((f.frameRequestId = i._onNextFrame(f, S)),
                          r && f.enabled && i.tick(f, g, r));
                      })(),
                      f
                    );
                  }),
                  (i.tick = function (f, g, S) {
                    var r = s.now(),
                      y = f.delta,
                      h = 0,
                      x = S - f.timeLastTick;
                    if (
                      ((!x || !f.timeLastTick || x > Math.max(i._maxFrameDelta, f.maxFrameTime)) &&
                        (x = f.frameDelta || i._frameDeltaFallback),
                      f.frameDeltaSmoothing)
                    ) {
                      (f.frameDeltaHistory.push(x),
                        (f.frameDeltaHistory = f.frameDeltaHistory.slice(
                          -f.frameDeltaHistorySize
                        )));
                      var C = f.frameDeltaHistory.slice(0).sort(),
                        O = f.frameDeltaHistory.slice(
                          C.length * i._smoothingLowerBound,
                          C.length * i._smoothingUpperBound
                        ),
                        B = d(O);
                      x = B || x;
                    }
                    (f.frameDeltaSnapping && (x = 1e3 / Math.round(1e3 / x)),
                      (f.frameDelta = x),
                      (f.timeLastTick = S),
                      (f.timeBuffer += f.frameDelta),
                      (f.timeBuffer = s.clamp(
                        f.timeBuffer,
                        0,
                        f.frameDelta + y * i._timeBufferMargin
                      )),
                      (f.lastUpdatesDeferred = 0));
                    var L = f.maxUpdates || Math.ceil(f.maxFrameTime / y),
                      T = { timestamp: g.timing.timestamp };
                    (c.trigger(f, 'beforeTick', T), c.trigger(f, 'tick', T));
                    for (var z = s.now(); y > 0 && f.timeBuffer >= y * i._timeBufferMargin; ) {
                      (c.trigger(f, 'beforeUpdate', T),
                        m.update(g, y),
                        c.trigger(f, 'afterUpdate', T),
                        (f.timeBuffer -= y),
                        (h += 1));
                      var D = s.now() - r,
                        R = s.now() - z,
                        _ = D + (i._elapsedNextEstimate * R) / h;
                      if (h >= L || _ > f.maxFrameTime) {
                        f.lastUpdatesDeferred = Math.round(
                          Math.max(0, f.timeBuffer / y - i._timeBufferMargin)
                        );
                        break;
                      }
                    }
                    ((g.timing.lastUpdatesPerFrame = h),
                      c.trigger(f, 'afterTick', T),
                      f.frameDeltaHistory.length >= 100 &&
                        (f.lastUpdatesDeferred && Math.round(f.frameDelta / y) > L
                          ? s.warnOnce('Matter.Runner: runner reached runner.maxUpdates, see docs.')
                          : f.lastUpdatesDeferred &&
                            s.warnOnce(
                              'Matter.Runner: runner reached runner.maxFrameTime, see docs.'
                            ),
                        typeof f.isFixed < 'u' &&
                          s.warnOnce('Matter.Runner: runner.isFixed is now redundant, see docs.'),
                        (f.deltaMin || f.deltaMax) &&
                          s.warnOnce(
                            'Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs.'
                          ),
                        f.fps !== 0 &&
                          s.warnOnce(
                            'Matter.Runner: runner.fps was replaced by runner.delta, see docs.'
                          )));
                  }),
                  (i.stop = function (f) {
                    i._cancelNextFrame(f);
                  }),
                  (i._onNextFrame = function (f, g) {
                    if (typeof window < 'u' && window.requestAnimationFrame)
                      f.frameRequestId = window.requestAnimationFrame(g);
                    else
                      throw new Error(
                        'Matter.Runner: missing required global window.requestAnimationFrame.'
                      );
                    return f.frameRequestId;
                  }),
                  (i._cancelNextFrame = function (f) {
                    if (typeof window < 'u' && window.cancelAnimationFrame)
                      window.cancelAnimationFrame(f.frameRequestId);
                    else
                      throw new Error(
                        'Matter.Runner: missing required global window.cancelAnimationFrame.'
                      );
                  }));
                var d = function (f) {
                  for (var g = 0, S = f.length, r = 0; r < S; r += 1) g += f[r];
                  return g / S || 0;
                };
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(8),
                m = v(0),
                s = m.deprecated;
              (function () {
                ((i.collides = function (d, f) {
                  return c.collides(d, f);
                }),
                  s(i, 'collides', 'SAT.collides ➤ replaced by Collision.collides'));
              })();
            },
            function (M, E, v) {
              var i = {};
              ((M.exports = i), v(1));
              var c = v(0);
              (function () {
                ((i.pathToVertices = function (m, s) {
                  typeof window < 'u' &&
                    !('SVGPathSeg' in window) &&
                    c.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
                  var d,
                    f,
                    g,
                    S,
                    r,
                    y,
                    h,
                    x,
                    C,
                    O,
                    B = [],
                    L,
                    T,
                    z = 0,
                    D = 0,
                    R = 0;
                  s = s || 15;
                  var _ = function (Y, N, J) {
                      var I = J % 2 === 1 && J > 1;
                      if (!C || Y != C.x || N != C.y) {
                        C && I ? ((L = C.x), (T = C.y)) : ((L = 0), (T = 0));
                        var k = { x: L + Y, y: T + N };
                        ((I || !C) && (C = k), B.push(k), (D = L + Y), (R = T + N));
                      }
                    },
                    U = function (Y) {
                      var N = Y.pathSegTypeAsLetter.toUpperCase();
                      if (N !== 'Z') {
                        switch (N) {
                          case 'M':
                          case 'L':
                          case 'T':
                          case 'C':
                          case 'S':
                          case 'Q':
                            ((D = Y.x), (R = Y.y));
                            break;
                          case 'H':
                            D = Y.x;
                            break;
                          case 'V':
                            R = Y.y;
                            break;
                        }
                        _(D, R, Y.pathSegType);
                      }
                    };
                  for (
                    i._svgPathToAbsolute(m), g = m.getTotalLength(), y = [], d = 0;
                    d < m.pathSegList.numberOfItems;
                    d += 1
                  )
                    y.push(m.pathSegList.getItem(d));
                  for (h = y.concat(); z < g; ) {
                    if (((O = m.getPathSegAtLength(z)), (r = y[O]), r != x)) {
                      for (; h.length && h[0] != r; ) U(h.shift());
                      x = r;
                    }
                    switch (r.pathSegTypeAsLetter.toUpperCase()) {
                      case 'C':
                      case 'T':
                      case 'S':
                      case 'Q':
                      case 'A':
                        ((S = m.getPointAtLength(z)), _(S.x, S.y, 0));
                        break;
                    }
                    z += s;
                  }
                  for (d = 0, f = h.length; d < f; ++d) U(h[d]);
                  return B;
                }),
                  (i._svgPathToAbsolute = function (m) {
                    for (
                      var s,
                        d,
                        f,
                        g,
                        S,
                        r,
                        y = m.pathSegList,
                        h = 0,
                        x = 0,
                        C = y.numberOfItems,
                        O = 0;
                      O < C;
                      ++O
                    ) {
                      var B = y.getItem(O),
                        L = B.pathSegTypeAsLetter;
                      if (/[MLHVCSQTA]/.test(L)) ('x' in B && (h = B.x), 'y' in B && (x = B.y));
                      else
                        switch (
                          ('x1' in B && (f = h + B.x1),
                          'x2' in B && (S = h + B.x2),
                          'y1' in B && (g = x + B.y1),
                          'y2' in B && (r = x + B.y2),
                          'x' in B && (h += B.x),
                          'y' in B && (x += B.y),
                          L)
                        ) {
                          case 'm':
                            y.replaceItem(m.createSVGPathSegMovetoAbs(h, x), O);
                            break;
                          case 'l':
                            y.replaceItem(m.createSVGPathSegLinetoAbs(h, x), O);
                            break;
                          case 'h':
                            y.replaceItem(m.createSVGPathSegLinetoHorizontalAbs(h), O);
                            break;
                          case 'v':
                            y.replaceItem(m.createSVGPathSegLinetoVerticalAbs(x), O);
                            break;
                          case 'c':
                            y.replaceItem(m.createSVGPathSegCurvetoCubicAbs(h, x, f, g, S, r), O);
                            break;
                          case 's':
                            y.replaceItem(m.createSVGPathSegCurvetoCubicSmoothAbs(h, x, S, r), O);
                            break;
                          case 'q':
                            y.replaceItem(m.createSVGPathSegCurvetoQuadraticAbs(h, x, f, g), O);
                            break;
                          case 't':
                            y.replaceItem(m.createSVGPathSegCurvetoQuadraticSmoothAbs(h, x), O);
                            break;
                          case 'a':
                            y.replaceItem(
                              m.createSVGPathSegArcAbs(
                                h,
                                x,
                                B.r1,
                                B.r2,
                                B.angle,
                                B.largeArcFlag,
                                B.sweepFlag
                              ),
                              O
                            );
                            break;
                          case 'z':
                          case 'Z':
                            ((h = s), (x = d));
                            break;
                        }
                      (L == 'M' || L == 'm') && ((s = h), (d = x));
                    }
                  }));
              })();
            },
            function (M, E, v) {
              var i = {};
              M.exports = i;
              var c = v(6);
              (v(0),
                (function () {
                  ((i.create = c.create),
                    (i.add = c.add),
                    (i.remove = c.remove),
                    (i.clear = c.clear),
                    (i.addComposite = c.addComposite),
                    (i.addBody = c.addBody),
                    (i.addConstraint = c.addConstraint));
                })());
            },
          ]);
        });
      })(Bu)),
    Bu.exports
  );
}
var pp = yp();
const He = R0(pp),
  qt = {
    dropCooldownMs: 500,
    maxScoreHistory: 10,
    mergeEffectDurationMs: 700,
    storageKeys: {
      bestScore: 'ochimono.bestScore',
      scoreHistory: 'ochimono.scoreHistory',
      isSoundOn: 'ochimono.isSoundOn',
    },
  },
  Sp = { 1: 20, 2: 32, 3: 46, 4: 58, 5: 72, 6: 86, 7: 98, 8: 112, 9: 128, 10: 150 },
  xp = { 1: 0.5, 2: 0.5, 3: 0.45, 4: 0.45, 5: 0.4, 6: 0.4, 7: 0.35, 8: 0.35, 9: 0.3, 10: 0.25 },
  Ep = {
    1: '小ハート',
    2: '小イチゴ',
    3: '小ネコ',
    4: '中ハート',
    5: '中イチゴ',
    6: '中ネコ',
    7: '大ハート',
    8: '大イチゴ',
    9: '大ネコ',
    10: 'にゃんハートいちご',
  },
  Tp = {
    1: 'heart',
    2: 'strawberry',
    3: 'cat',
    4: 'heart',
    5: 'strawberry',
    6: 'cat',
    7: 'heart',
    8: 'strawberry',
    9: 'cat',
    10: 'special',
  },
  bp = {
    1: 'images/gumi/item_01_heart_s.svg',
    2: 'images/gumi/item_02_strawberry_s.svg',
    3: 'images/gumi/item_03_cat_s.svg',
    4: 'images/gumi/item_04_heart_m.svg',
    5: 'images/gumi/item_05_strawberry_m.svg',
    6: 'images/gumi/item_06_cat_m.svg',
    7: 'images/gumi/item_07_heart_l.svg',
    8: 'images/gumi/item_08_strawberry_l.svg',
    9: 'images/gumi/item_09_cat_l.svg',
    10: 'images/gumi/item_10_special.svg',
  },
  Ym = {
    1: { color: '#FF8FAB', glow: '#FFD6E0' },
    2: { color: '#FF3B4E', glow: '#FFC1C8' },
    3: { color: '#FAFAFA', glow: '#FFE4E1' },
    4: { color: '#64D8FF', glow: '#C8F0FF' },
    5: { color: '#FF3B4E', glow: '#FFC1C8' },
    6: { color: '#C8A882', glow: '#F0E0C8' },
    7: { color: '#FFD740', glow: '#FFF1B0' },
    8: { color: '#FF3B4E', glow: '#FFC1C8' },
    9: { color: '#424242', glow: '#FFB6D9' },
    10: { color: '#FF6FB5', glow: '#FFFFFF' },
  },
  Mp = (o) => (o * (o + 1)) / 2,
  Ap = (o) => ({
    id: o,
    level: o,
    name: Ep[o],
    theme: Tp[o],
    radius: Sp[o],
    restitution: xp[o],
    friction: 0.3,
    density: 0.001,
    score: Mp(o),
    svgPath: bp[o],
    color: Ym[o].color,
    glowColor: Ym[o].glow,
  }),
  ka = 10,
  ai = Object.fromEntries(Array.from({ length: ka }, (o, b) => b + 1).map((o) => [o, Ap(o)]));
Array.from({ length: ka }, (o, b) => ai[b + 1]);
const Cp = 3,
  ua = {
    gravityY: 1.5,
    wallThickness: 20,
    gameOverLineOffset: 80,
    restingVelocityThreshold: 0.5,
    gameOverGracePeriodMs: 1e3,
  },
  rv = typeof window < 'u' && typeof window.localStorage < 'u',
  pf = (o) => {
    if (!rv) return null;
    try {
      return window.localStorage.getItem(o);
    } catch {
      return null;
    }
  },
  Sf = (o, b) => {
    if (rv)
      try {
        window.localStorage.setItem(o, b);
      } catch {}
  },
  Rp = () => {
    const o = pf(qt.storageKeys.bestScore);
    if (o === null) return 0;
    const b = Number(o);
    return Number.isFinite(b) ? b : 0;
  },
  zp = (o) => {
    Sf(qt.storageKeys.bestScore, String(o));
  },
  Dp = () => {
    const o = pf(qt.storageKeys.scoreHistory);
    if (o === null) return [];
    try {
      const b = JSON.parse(o);
      return Array.isArray(b) ? b.filter((M) => typeof M == 'number' && Number.isFinite(M)) : [];
    } catch {
      return [];
    }
  },
  Op = (o) => {
    const b = [o, ...Dp()].slice(0, qt.maxScoreHistory);
    return (Sf(qt.storageKeys.scoreHistory, JSON.stringify(b)), b);
  },
  Bp = () => {
    const o = pf(qt.storageKeys.isSoundOn);
    return o === null ? !0 : o === 'true';
  },
  Up = (o) => {
    Sf(qt.storageKeys.isSoundOn, String(o));
  },
  Np = () => {
    const [o, b] = q.useState(0),
      [M, E] = q.useState(0),
      [v, i] = q.useState(!1),
      c = q.useRef(0),
      m = q.useRef(0);
    q.useEffect(() => {
      const g = Rp();
      ((m.current = g), E(g));
    }, []);
    const s = q.useCallback((g) => {
        ((c.current += g), b(c.current));
      }, []),
      d = q.useCallback(() => {
        ((c.current = 0), b(0), i(!1));
      }, []),
      f = q.useCallback(() => {
        const g = c.current,
          S = g > m.current;
        return (
          S && ((m.current = g), zp(g), E(g)),
          Op(g),
          i(S),
          { isNewRecord: S, finalScore: g }
        );
      }, []);
    return { score: o, bestScore: M, isNewRecord: v, add: s, reset: d, finalize: f };
  },
  _p = (o) => `/ochimono-game/${o}`.replace(/\/{2,}/g, '/'),
  wp = { merge: 'sounds/punyu.mp3', special: 'sounds/punyu.mp3' },
  Hp = () => {
    const [o, b] = q.useState(!0),
      M = q.useRef({});
    (q.useEffect(() => {
      b(Bp());
    }, []),
      q.useEffect(() => {
        const i = {};
        for (const [c, m] of Object.entries(wp)) {
          const s = new Audio(_p(m));
          ((s.preload = 'auto'), (i[c] = s));
        }
        return (
          (M.current = i),
          () => {
            for (const c of Object.values(i)) c == null || c.pause();
            M.current = {};
          }
        );
      }, []));
    const E = q.useCallback(() => {
        b((i) => {
          const c = !i;
          return (Up(c), c);
        });
      }, []),
      v = q.useCallback(
        (i) => {
          if (!o) return;
          const c = M.current[i];
          if (!c) return;
          const m = c.cloneNode();
          ((m.volume = 0.7), m.play().catch(() => {}));
        },
        [o]
      );
    return { isSoundOn: o, toggle: E, play: v };
  },
  jm = (o, b, M, E) => {
    const v = He.Bodies.circle(b, M, o.radius, {
      restitution: o.restitution,
      friction: o.friction,
      density: o.density,
      label: `item-${o.level}`,
    });
    return ((v.plugin.itemData = { level: o.level, consumed: !1, droppedAt: E }), v);
  },
  zu = (o) => o.plugin.itemData,
  Lp = (o, b) => {
    const M = ua.wallThickness,
      E = { isStatic: !0, restitution: 0.2, friction: 0.5, label: 'wall' },
      v = He.Bodies.rectangle(o / 2, b + M / 2, o + M * 2, M, E),
      i = He.Bodies.rectangle(-M / 2, b / 2, M, b * 2, E),
      c = He.Bodies.rectangle(o + M / 2, b / 2, M, b * 2, E);
    return { ground: v, leftWall: i, rightWall: c };
  },
  Yp = (o, b) => ({ x: (o.position.x + b.position.x) / 2, y: (o.position.y + b.position.y) / 2 }),
  jp = (o) => ai[o] ?? null,
  Gp = (o) => (o < 2 || o > ka ? 0 : ai[o].score),
  Vp = () => ai[ka].score,
  nf = () => {
    const o = Math.floor(Math.random() * Cp) + 1;
    return ai[o];
  },
  qp = (o) => `/ochimono-game/${o}`.replace(/\/{2,}/g, '/'),
  Gm = (o, b) => {
    const M = (b.radius * 2) / 100;
    o.render.sprite = { texture: qp(b.svgPath), xScale: M, yScale: M, xOffset: 0.5, yOffset: 0.5 };
  },
  Xp = ({ fieldWidth: o, fieldHeight: b }) => {
    const M = q.useRef(null),
      E = q.useRef(null),
      v = q.useRef(null),
      i = q.useRef(null),
      [c, m] = q.useState('idle'),
      [s, d] = q.useState(null),
      [f, g] = q.useState(null),
      [S, r] = q.useState([]),
      y = q.useRef(!0),
      h = q.useRef(0),
      x = q.useRef('idle'),
      C = q.useRef(o),
      O = q.useRef(b),
      B = Np(),
      L = Hp();
    q.useEffect(() => {
      const N = M.current;
      if (!N) return;
      const J = C.current,
        I = O.current,
        k = He.Engine.create({ gravity: { x: 0, y: ua.gravityY } }),
        G = He.Render.create({
          element: N,
          engine: k,
          options: {
            width: J,
            height: I,
            wireframes: !1,
            background: 'transparent',
            pixelRatio: window.devicePixelRatio || 1,
          },
        }),
        { ground: Z, leftWall: te, rightWall: ne } = Lp(J, I);
      ([Z, te, ne].forEach((H) => {
        H.render.visible = !1;
      }),
        He.World.add(k.world, [Z, te, ne]),
        He.Render.run(G));
      const fe = He.Runner.create();
      return (
        He.Runner.run(fe, k),
        (E.current = k),
        (v.current = G),
        (i.current = fe),
        () => {
          (He.Runner.stop(fe),
            He.Render.stop(G),
            He.World.clear(k.world, !1),
            He.Engine.clear(k),
            G.canvas.parentNode && G.canvas.parentNode.removeChild(G.canvas),
            (G.textures = {}),
            (E.current = null),
            (v.current = null),
            (i.current = null));
        }
      );
    }, []);
    const T = q.useCallback(
      (N, J) => {
        const I = E.current;
        if (!I) return;
        const k = zu(N),
          G = zu(J);
        if (!k || !G || k.consumed || G.consumed || k.level !== G.level) return;
        ((k.consumed = !0), (G.consumed = !0));
        const Z = k.level + 1,
          te = Yp(N, J);
        He.World.remove(I.world, [N, J]);
        let ne = 0,
          fe = !1;
        if (Z > ka) ((ne = Vp()), (fe = !0), L.play('special'));
        else {
          const $ = jp(Z);
          if ($) {
            const le = jm($, te.x, te.y, performance.now());
            (Gm(le, $), He.World.add(I.world, le));
          }
          ((ne = Gp(Z)), (fe = Z === ka), L.play(fe ? 'special' : 'merge'));
        }
        B.add(ne);
        const H = {
          id: `${performance.now()}-${Math.random().toString(36).slice(2)}`,
          x: te.x,
          y: te.y,
          level: Z,
          score: ne,
          isSpecial: fe,
          createdAt: performance.now(),
        };
        (r(($) => [...$, H]),
          window.setTimeout(() => {
            r(($) => $.filter((le) => le.id !== H.id));
          }, qt.mergeEffectDurationMs));
      },
      [B, L]
    );
    q.useEffect(() => {
      const N = E.current;
      if (!N) return;
      const J = (I) => {
        for (const k of I.pairs) T(k.bodyA, k.bodyB);
      };
      return (
        He.Events.on(N, 'collisionStart', J),
        () => {
          He.Events.off(N, 'collisionStart', J);
        }
      );
    }, [T]);
    const z = q.useRef(B.finalize);
    z.current = B.finalize;
    const D = q.useRef(L.play);
    ((D.current = L.play),
      q.useEffect(() => {
        const N = E.current;
        if (!N) return;
        const J = ua.gameOverLineOffset,
          I = () => {
            if (x.current !== 'playing') return;
            const k = performance.now(),
              G = He.Composite.allBodies(N.world);
            for (const Z of G) {
              const te = zu(Z);
              if (
                !(!te || te.consumed) &&
                !(k - te.droppedAt < ua.gameOverGracePeriodMs) &&
                !(Math.abs(Z.velocity.y) > ua.restingVelocityThreshold) &&
                Z.position.y - Z.circleRadius < J
              ) {
                ((x.current = 'gameover'), m('gameover'));
                const ne = z.current();
                D.current(ne.isNewRecord ? 'highscore' : 'gameover');
                return;
              }
            }
          };
        return (
          He.Events.on(N, 'afterUpdate', I),
          () => {
            He.Events.off(N, 'afterUpdate', I);
          }
        );
      }, []));
    const R = q.useCallback(
        (N) => {
          const J = E.current;
          if (!J || x.current !== 'playing' || !y.current || !s) return;
          const I = performance.now();
          if (I - h.current < qt.dropCooldownMs) return;
          const k = Math.max(0, Math.min(1, N)),
            G = s.radius + ua.wallThickness / 2,
            Z = G,
            te = C.current - G,
            ne = Z + k * (te - Z),
            fe = s.radius + 4,
            H = jm(s, ne, fe, I);
          (Gm(H, s),
            He.World.add(J.world, H),
            L.play('drop'),
            (y.current = !1),
            (h.current = I),
            window.setTimeout(() => {
              x.current === 'playing' && (d(f), g(nf()), (y.current = !0));
            }, qt.dropCooldownMs));
        },
        [s, f, L]
      ),
      _ = q.useCallback(() => {
        (B.reset(),
          r([]),
          d(nf()),
          g(nf()),
          (y.current = !0),
          (h.current = 0),
          (x.current = 'playing'),
          m('playing'));
      }, [B]),
      U = q.useCallback(() => {
        const N = E.current;
        if (N) {
          const J = He.Composite.allBodies(N.world);
          for (const I of J) zu(I) && He.World.remove(N.world, I);
        }
        _();
      }, [_]),
      Y = ua.gameOverLineOffset;
    return {
      status: c,
      score: B.score,
      bestScore: B.bestScore,
      isNewRecord: B.isNewRecord,
      currentItem: s,
      nextItem: f,
      isSoundOn: L.isSoundOn,
      mergeEffects: S,
      canvasContainerRef: M,
      drop: R,
      start: _,
      restart: U,
      toggleSound: L.toggle,
      fieldWidth: o,
      fieldHeight: b,
      gameOverLineY: Y,
    };
  },
  Qp = ({ size: o }) => {
    const b = Xp({ fieldWidth: o.width, fieldHeight: o.height });
    return ae.jsxs(ae.Fragment, {
      children: [
        ae.jsx(hp, {
          score: b.score,
          bestScore: b.bestScore,
          nextItem: b.nextItem,
          isSoundOn: b.isSoundOn,
          onToggleSound: b.toggleSound,
        }),
        ae.jsx('main', {
          className: Wa.main,
          children: ae.jsxs('div', {
            className: Wa.field_wrapper,
            style: { width: `${o.width}px`, height: `${o.height}px` },
            children: [
              ae.jsx(wy, {
                canvasContainerRef: b.canvasContainerRef,
                fieldWidth: o.width,
                fieldHeight: o.height,
                gameOverLineY: b.gameOverLineY,
                currentItem: b.currentItem,
                mergeEffects: b.mergeEffects,
                canInteract: b.status === 'playing',
                onDrop: b.drop,
              }),
              b.status === 'idle' ? ae.jsx(Wy, { onStart: b.start }) : null,
              b.status === 'gameover'
                ? ae.jsx(Qy, {
                    score: b.score,
                    bestScore: b.bestScore,
                    isNewRecord: b.isNewRecord,
                    onRestart: b.restart,
                  })
                : null,
            ],
          }),
        }),
      ],
    });
  },
  Zp = () => {
    const o = q.useRef(null),
      [b, M] = q.useState(null);
    return (
      q.useLayoutEffect(() => {
        const E = o.current;
        if (!E) return;
        const v = E.getBoundingClientRect();
        M({ width: Math.floor(v.width), height: Math.floor(v.height) });
      }, []),
      b === null
        ? ae.jsxs('div', {
            className: Wa.layout,
            children: [
              ae.jsx('div', { className: Wa.top_bar_placeholder, 'aria-hidden': 'true' }),
              ae.jsx('main', { ref: o, className: Wa.main }),
            ],
          })
        : ae.jsx('div', { className: Wa.layout, children: ae.jsx(Qp, { size: b }) })
    );
  },
  Kp = () => ae.jsx('div', { className: gy.index, children: ae.jsx(Zp, {}) }),
  Jp = () => ae.jsx('div', { children: ae.jsx('h1', { children: 'Not Found' }) });
function Fp() {
  return ae.jsxs(wg, {
    children: [
      ae.jsx(rf, { path: '/', element: ae.jsx(Kp, {}) }),
      ae.jsx(rf, { path: '*', element: ae.jsx(Jp, {}) }),
    ],
  });
}
const sv = document.getElementById('root');
if (!sv) throw new Error('Failed to find #root element');
L0.createRoot(sv).render(ae.jsx(iy, { basename: '/ochimono-game', children: ae.jsx(Fp, {}) }));
