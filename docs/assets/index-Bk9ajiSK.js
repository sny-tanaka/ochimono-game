(function () {
  const b = document.createElement('link').relList;
  if (b && b.supports && b.supports('modulepreload')) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) E(h);
  new MutationObserver((h) => {
    for (const i of h)
      if (i.type === 'childList')
        for (const c of i.addedNodes) c.tagName === 'LINK' && c.rel === 'modulepreload' && E(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function M(h) {
    const i = {};
    return (
      h.integrity && (i.integrity = h.integrity),
      h.referrerPolicy && (i.referrerPolicy = h.referrerPolicy),
      h.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : h.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function E(h) {
    if (h.ep) return;
    h.ep = !0;
    const i = M(h);
    fetch(h.href, i);
  }
})();
var xh =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function B0(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, 'default') ? o.default : o;
}
var ks = { exports: {} },
  Fa = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eh;
function U0() {
  if (Eh) return Fa;
  Eh = 1;
  var o = Symbol.for('react.transitional.element'),
    b = Symbol.for('react.fragment');
  function M(E, h, i) {
    var c = null;
    if ((i !== void 0 && (c = '' + i), h.key !== void 0 && (c = '' + h.key), 'key' in h)) {
      i = {};
      for (var m in h) m !== 'key' && (i[m] = h[m]);
    } else i = h;
    return ((h = i.ref), { $$typeof: o, type: E, key: c, ref: h !== void 0 ? h : null, props: i });
  }
  return ((Fa.Fragment = b), (Fa.jsx = M), (Fa.jsxs = M), Fa);
}
var Th;
function N0() {
  return (Th || ((Th = 1), (ks.exports = U0())), ks.exports);
}
var ue = N0(),
  Ps = { exports: {} },
  $a = {},
  Is = { exports: {} },
  eo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bh;
function w0() {
  return (
    bh ||
      ((bh = 1),
      (function (o) {
        function b(G, X) {
          var I = G.length;
          G.push(X);
          e: for (; 0 < I; ) {
            var ne = (I - 1) >>> 1,
              re = G[ne];
            if (0 < h(re, X)) ((G[ne] = X), (G[I] = re), (I = ne));
            else break e;
          }
        }
        function M(G) {
          return G.length === 0 ? null : G[0];
        }
        function E(G) {
          if (G.length === 0) return null;
          var X = G[0],
            I = G.pop();
          if (I !== X) {
            G[0] = I;
            e: for (var ne = 0, re = G.length, N = re >>> 1; ne < N; ) {
              var J = 2 * (ne + 1) - 1,
                te = G[J],
                ae = J + 1,
                se = G[ae];
              if (0 > h(te, I))
                ae < re && 0 > h(se, te)
                  ? ((G[ne] = se), (G[ae] = I), (ne = ae))
                  : ((G[ne] = te), (G[J] = I), (ne = J));
              else if (ae < re && 0 > h(se, I)) ((G[ne] = se), (G[ae] = I), (ne = ae));
              else break e;
            }
          }
          return X;
        }
        function h(G, X) {
          var I = G.sortIndex - X.sortIndex;
          return I !== 0 ? I : G.id - X.id;
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
          v = !1,
          x = !1,
          C = typeof setTimeout == 'function' ? setTimeout : null,
          O = typeof clearTimeout == 'function' ? clearTimeout : null,
          B = typeof setImmediate < 'u' ? setImmediate : null;
        function j(G) {
          for (var X = M(d); X !== null; ) {
            if (X.callback === null) E(d);
            else if (X.startTime <= G) (E(d), (X.sortIndex = X.expirationTime), b(s, X));
            else break;
            X = M(d);
          }
        }
        function T(G) {
          if (((v = !1), j(G), !y))
            if (M(s) !== null) ((y = !0), R || ((R = !0), _()));
            else {
              var X = M(d);
              X !== null && ee(T, X.startTime - G);
            }
        }
        var R = !1,
          D = -1,
          z = 5,
          w = -1;
        function U() {
          return x ? !0 : !(o.unstable_now() - w < z);
        }
        function L() {
          if (((x = !1), R)) {
            var G = o.unstable_now();
            w = G;
            var X = !0;
            try {
              e: {
                ((y = !1), v && ((v = !1), O(D), (D = -1)), (r = !0));
                var I = S;
                try {
                  t: {
                    for (j(G), g = M(s); g !== null && !(g.expirationTime > G && U()); ) {
                      var ne = g.callback;
                      if (typeof ne == 'function') {
                        ((g.callback = null), (S = g.priorityLevel));
                        var re = ne(g.expirationTime <= G);
                        if (((G = o.unstable_now()), typeof re == 'function')) {
                          ((g.callback = re), j(G), (X = !0));
                          break t;
                        }
                        (g === M(s) && E(s), j(G));
                      } else E(s);
                      g = M(s);
                    }
                    if (g !== null) X = !0;
                    else {
                      var N = M(d);
                      (N !== null && ee(T, N.startTime - G), (X = !1));
                    }
                  }
                  break e;
                } finally {
                  ((g = null), (S = I), (r = !1));
                }
                X = void 0;
              }
            } finally {
              X ? _() : (R = !1);
            }
          }
        }
        var _;
        if (typeof B == 'function')
          _ = function () {
            B(L);
          };
        else if (typeof MessageChannel < 'u') {
          var $ = new MessageChannel(),
            le = $.port2;
          (($.port1.onmessage = L),
            (_ = function () {
              le.postMessage(null);
            }));
        } else
          _ = function () {
            C(L, 0);
          };
        function ee(G, X) {
          D = C(function () {
            G(o.unstable_now());
          }, X);
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
              : (z = 0 < G ? Math.floor(1e3 / G) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (o.unstable_next = function (G) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = S;
            }
            var I = S;
            S = X;
            try {
              return G();
            } finally {
              S = I;
            }
          }),
          (o.unstable_requestPaint = function () {
            x = !0;
          }),
          (o.unstable_runWithPriority = function (G, X) {
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
            var I = S;
            S = G;
            try {
              return X();
            } finally {
              S = I;
            }
          }),
          (o.unstable_scheduleCallback = function (G, X, I) {
            var ne = o.unstable_now();
            switch (
              (typeof I == 'object' && I !== null
                ? ((I = I.delay), (I = typeof I == 'number' && 0 < I ? ne + I : ne))
                : (I = ne),
              G)
            ) {
              case 1:
                var re = -1;
                break;
              case 2:
                re = 250;
                break;
              case 5:
                re = 1073741823;
                break;
              case 4:
                re = 1e4;
                break;
              default:
                re = 5e3;
            }
            return (
              (re = I + re),
              (G = {
                id: f++,
                callback: X,
                priorityLevel: G,
                startTime: I,
                expirationTime: re,
                sortIndex: -1,
              }),
              I > ne
                ? ((G.sortIndex = I),
                  b(d, G),
                  M(s) === null && G === M(d) && (v ? (O(D), (D = -1)) : (v = !0), ee(T, I - ne)))
                : ((G.sortIndex = re), b(s, G), y || r || ((y = !0), R || ((R = !0), _()))),
              G
            );
          }),
          (o.unstable_shouldYield = U),
          (o.unstable_wrapCallback = function (G) {
            var X = S;
            return function () {
              var I = S;
              S = X;
              try {
                return G.apply(this, arguments);
              } finally {
                S = I;
              }
            };
          }));
      })(eo)),
    eo
  );
}
var Mh;
function H0() {
  return (Mh || ((Mh = 1), (Is.exports = w0())), Is.exports);
}
var to = { exports: {} },
  me = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ah;
function _0() {
  if (Ah) return me;
  Ah = 1;
  var o = Symbol.for('react.transitional.element'),
    b = Symbol.for('react.portal'),
    M = Symbol.for('react.fragment'),
    E = Symbol.for('react.strict_mode'),
    h = Symbol.for('react.profiler'),
    i = Symbol.for('react.consumer'),
    c = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    s = Symbol.for('react.suspense'),
    d = Symbol.for('react.memo'),
    f = Symbol.for('react.lazy'),
    g = Symbol.for('react.activity'),
    S = Symbol.iterator;
  function r(N) {
    return N === null || typeof N != 'object'
      ? null
      : ((N = (S && N[S]) || N['@@iterator']), typeof N == 'function' ? N : null);
  }
  var y = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    v = Object.assign,
    x = {};
  function C(N, J, te) {
    ((this.props = N), (this.context = J), (this.refs = x), (this.updater = te || y));
  }
  ((C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (N, J) {
      if (typeof N != 'object' && typeof N != 'function' && N != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, N, J, 'setState');
    }),
    (C.prototype.forceUpdate = function (N) {
      this.updater.enqueueForceUpdate(this, N, 'forceUpdate');
    }));
  function O() {}
  O.prototype = C.prototype;
  function B(N, J, te) {
    ((this.props = N), (this.context = J), (this.refs = x), (this.updater = te || y));
  }
  var j = (B.prototype = new O());
  ((j.constructor = B), v(j, C.prototype), (j.isPureReactComponent = !0));
  var T = Array.isArray;
  function R() {}
  var D = { H: null, A: null, T: null, S: null },
    z = Object.prototype.hasOwnProperty;
  function w(N, J, te) {
    var ae = te.ref;
    return { $$typeof: o, type: N, key: J, ref: ae !== void 0 ? ae : null, props: te };
  }
  function U(N, J) {
    return w(N.type, J, N.props);
  }
  function L(N) {
    return typeof N == 'object' && N !== null && N.$$typeof === o;
  }
  function _(N) {
    var J = { '=': '=0', ':': '=2' };
    return (
      '$' +
      N.replace(/[=:]/g, function (te) {
        return J[te];
      })
    );
  }
  var $ = /\/+/g;
  function le(N, J) {
    return typeof N == 'object' && N !== null && N.key != null ? _('' + N.key) : J.toString(36);
  }
  function ee(N) {
    switch (N.status) {
      case 'fulfilled':
        return N.value;
      case 'rejected':
        throw N.reason;
      default:
        switch (
          (typeof N.status == 'string'
            ? N.then(R, R)
            : ((N.status = 'pending'),
              N.then(
                function (J) {
                  N.status === 'pending' && ((N.status = 'fulfilled'), (N.value = J));
                },
                function (J) {
                  N.status === 'pending' && ((N.status = 'rejected'), (N.reason = J));
                }
              )),
          N.status)
        ) {
          case 'fulfilled':
            return N.value;
          case 'rejected':
            throw N.reason;
        }
    }
    throw N;
  }
  function G(N, J, te, ae, se) {
    var ie = typeof N;
    (ie === 'undefined' || ie === 'boolean') && (N = null);
    var de = !1;
    if (N === null) de = !0;
    else
      switch (ie) {
        case 'bigint':
        case 'string':
        case 'number':
          de = !0;
          break;
        case 'object':
          switch (N.$$typeof) {
            case o:
            case b:
              de = !0;
              break;
            case f:
              return ((de = N._init), G(de(N._payload), J, te, ae, se));
          }
      }
    if (de)
      return (
        (se = se(N)),
        (de = ae === '' ? '.' + le(N, 0) : ae),
        T(se)
          ? ((te = ''),
            de != null && (te = de.replace($, '$&/') + '/'),
            G(se, J, te, '', function (tt) {
              return tt;
            }))
          : se != null &&
            (L(se) &&
              (se = U(
                se,
                te +
                  (se.key == null || (N && N.key === se.key)
                    ? ''
                    : ('' + se.key).replace($, '$&/') + '/') +
                  de
              )),
            J.push(se)),
        1
      );
    de = 0;
    var ye = ae === '' ? '.' : ae + ':';
    if (T(N))
      for (var Ue = 0; Ue < N.length; Ue++)
        ((ae = N[Ue]), (ie = ye + le(ae, Ue)), (de += G(ae, J, te, ie, se)));
    else if (((Ue = r(N)), typeof Ue == 'function'))
      for (N = Ue.call(N), Ue = 0; !(ae = N.next()).done; )
        ((ae = ae.value), (ie = ye + le(ae, Ue++)), (de += G(ae, J, te, ie, se)));
    else if (ie === 'object') {
      if (typeof N.then == 'function') return G(ee(N), J, te, ae, se);
      throw (
        (J = String(N)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (J === '[object Object]' ? 'object with keys {' + Object.keys(N).join(', ') + '}' : J) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return de;
  }
  function X(N, J, te) {
    if (N == null) return N;
    var ae = [],
      se = 0;
    return (
      G(N, ae, '', '', function (ie) {
        return J.call(te, ie, se++);
      }),
      ae
    );
  }
  function I(N) {
    if (N._status === -1) {
      var J = N._result;
      ((J = J()),
        J.then(
          function (te) {
            (N._status === 0 || N._status === -1) && ((N._status = 1), (N._result = te));
          },
          function (te) {
            (N._status === 0 || N._status === -1) && ((N._status = 2), (N._result = te));
          }
        ),
        N._status === -1 && ((N._status = 0), (N._result = J)));
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var ne =
      typeof reportError == 'function'
        ? reportError
        : function (N) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var J = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof N == 'object' && N !== null && typeof N.message == 'string'
                    ? String(N.message)
                    : String(N),
                error: N,
              });
              if (!window.dispatchEvent(J)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', N);
              return;
            }
            console.error(N);
          },
    re = {
      map: X,
      forEach: function (N, J, te) {
        X(
          N,
          function () {
            J.apply(this, arguments);
          },
          te
        );
      },
      count: function (N) {
        var J = 0;
        return (
          X(N, function () {
            J++;
          }),
          J
        );
      },
      toArray: function (N) {
        return (
          X(N, function (J) {
            return J;
          }) || []
        );
      },
      only: function (N) {
        if (!L(N))
          throw Error('React.Children.only expected to receive a single React element child.');
        return N;
      },
    };
  return (
    (me.Activity = g),
    (me.Children = re),
    (me.Component = C),
    (me.Fragment = M),
    (me.Profiler = h),
    (me.PureComponent = B),
    (me.StrictMode = E),
    (me.Suspense = s),
    (me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D),
    (me.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (N) {
        return D.H.useMemoCache(N);
      },
    }),
    (me.cache = function (N) {
      return function () {
        return N.apply(null, arguments);
      };
    }),
    (me.cacheSignal = function () {
      return null;
    }),
    (me.cloneElement = function (N, J, te) {
      if (N == null) throw Error('The argument must be a React element, but you passed ' + N + '.');
      var ae = v({}, N.props),
        se = N.key;
      if (J != null)
        for (ie in (J.key !== void 0 && (se = '' + J.key), J))
          !z.call(J, ie) ||
            ie === 'key' ||
            ie === '__self' ||
            ie === '__source' ||
            (ie === 'ref' && J.ref === void 0) ||
            (ae[ie] = J[ie]);
      var ie = arguments.length - 2;
      if (ie === 1) ae.children = te;
      else if (1 < ie) {
        for (var de = Array(ie), ye = 0; ye < ie; ye++) de[ye] = arguments[ye + 2];
        ae.children = de;
      }
      return w(N.type, se, ae);
    }),
    (me.createContext = function (N) {
      return (
        (N = {
          $$typeof: c,
          _currentValue: N,
          _currentValue2: N,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (N.Provider = N),
        (N.Consumer = { $$typeof: i, _context: N }),
        N
      );
    }),
    (me.createElement = function (N, J, te) {
      var ae,
        se = {},
        ie = null;
      if (J != null)
        for (ae in (J.key !== void 0 && (ie = '' + J.key), J))
          z.call(J, ae) && ae !== 'key' && ae !== '__self' && ae !== '__source' && (se[ae] = J[ae]);
      var de = arguments.length - 2;
      if (de === 1) se.children = te;
      else if (1 < de) {
        for (var ye = Array(de), Ue = 0; Ue < de; Ue++) ye[Ue] = arguments[Ue + 2];
        se.children = ye;
      }
      if (N && N.defaultProps)
        for (ae in ((de = N.defaultProps), de)) se[ae] === void 0 && (se[ae] = de[ae]);
      return w(N, ie, se);
    }),
    (me.createRef = function () {
      return { current: null };
    }),
    (me.forwardRef = function (N) {
      return { $$typeof: m, render: N };
    }),
    (me.isValidElement = L),
    (me.lazy = function (N) {
      return { $$typeof: f, _payload: { _status: -1, _result: N }, _init: I };
    }),
    (me.memo = function (N, J) {
      return { $$typeof: d, type: N, compare: J === void 0 ? null : J };
    }),
    (me.startTransition = function (N) {
      var J = D.T,
        te = {};
      D.T = te;
      try {
        var ae = N(),
          se = D.S;
        (se !== null && se(te, ae),
          typeof ae == 'object' && ae !== null && typeof ae.then == 'function' && ae.then(R, ne));
      } catch (ie) {
        ne(ie);
      } finally {
        (J !== null && te.types !== null && (J.types = te.types), (D.T = J));
      }
    }),
    (me.unstable_useCacheRefresh = function () {
      return D.H.useCacheRefresh();
    }),
    (me.use = function (N) {
      return D.H.use(N);
    }),
    (me.useActionState = function (N, J, te) {
      return D.H.useActionState(N, J, te);
    }),
    (me.useCallback = function (N, J) {
      return D.H.useCallback(N, J);
    }),
    (me.useContext = function (N) {
      return D.H.useContext(N);
    }),
    (me.useDebugValue = function () {}),
    (me.useDeferredValue = function (N, J) {
      return D.H.useDeferredValue(N, J);
    }),
    (me.useEffect = function (N, J) {
      return D.H.useEffect(N, J);
    }),
    (me.useEffectEvent = function (N) {
      return D.H.useEffectEvent(N);
    }),
    (me.useId = function () {
      return D.H.useId();
    }),
    (me.useImperativeHandle = function (N, J, te) {
      return D.H.useImperativeHandle(N, J, te);
    }),
    (me.useInsertionEffect = function (N, J) {
      return D.H.useInsertionEffect(N, J);
    }),
    (me.useLayoutEffect = function (N, J) {
      return D.H.useLayoutEffect(N, J);
    }),
    (me.useMemo = function (N, J) {
      return D.H.useMemo(N, J);
    }),
    (me.useOptimistic = function (N, J) {
      return D.H.useOptimistic(N, J);
    }),
    (me.useReducer = function (N, J, te) {
      return D.H.useReducer(N, J, te);
    }),
    (me.useRef = function (N) {
      return D.H.useRef(N);
    }),
    (me.useState = function (N) {
      return D.H.useState(N);
    }),
    (me.useSyncExternalStore = function (N, J, te) {
      return D.H.useSyncExternalStore(N, J, te);
    }),
    (me.useTransition = function () {
      return D.H.useTransition();
    }),
    (me.version = '19.2.5'),
    me
  );
}
var Ch;
function ho() {
  return (Ch || ((Ch = 1), (to.exports = _0())), to.exports);
}
var lo = { exports: {} },
  nt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rh;
function L0() {
  if (Rh) return nt;
  Rh = 1;
  var o = ho();
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
    h = Symbol.for('react.portal');
  function i(s, d, f) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
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
    (nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E),
    (nt.createPortal = function (s, d) {
      var f = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!d || (d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)) throw Error(b(299));
      return i(s, d, null, f);
    }),
    (nt.flushSync = function (s) {
      var d = c.T,
        f = E.p;
      try {
        if (((c.T = null), (E.p = 2), s)) return s();
      } finally {
        ((c.T = d), (E.p = f), E.d.f());
      }
    }),
    (nt.preconnect = function (s, d) {
      typeof s == 'string' &&
        (d
          ? ((d = d.crossOrigin),
            (d = typeof d == 'string' ? (d === 'use-credentials' ? d : '') : void 0))
          : (d = null),
        E.d.C(s, d));
    }),
    (nt.prefetchDNS = function (s) {
      typeof s == 'string' && E.d.D(s);
    }),
    (nt.preinit = function (s, d) {
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
    (nt.preinitModule = function (s, d) {
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
    (nt.preload = function (s, d) {
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
    (nt.preloadModule = function (s, d) {
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
    (nt.requestFormReset = function (s) {
      E.d.r(s);
    }),
    (nt.unstable_batchedUpdates = function (s, d) {
      return s(d);
    }),
    (nt.useFormState = function (s, d, f) {
      return c.H.useFormState(s, d, f);
    }),
    (nt.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (nt.version = '19.2.5'),
    nt
  );
}
var zh;
function j0() {
  if (zh) return lo.exports;
  zh = 1;
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
  return (o(), (lo.exports = L0()), lo.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dh;
function Y0() {
  if (Dh) return $a;
  Dh = 1;
  var o = H0(),
    b = ho(),
    M = j0();
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
  function h(e) {
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
    for (var l = e, n = t; ; ) {
      var a = l.return;
      if (a === null) break;
      var u = a.alternate;
      if (u === null) {
        if (((n = a.return), n !== null)) {
          l = n;
          continue;
        }
        break;
      }
      if (a.child === u.child) {
        for (u = a.child; u; ) {
          if (u === l) return (s(a), e);
          if (u === n) return (s(a), t);
          u = u.sibling;
        }
        throw Error(E(188));
      }
      if (l.return !== n.return) ((l = a), (n = u));
      else {
        for (var p = !1, A = a.child; A; ) {
          if (A === l) {
            ((p = !0), (l = a), (n = u));
            break;
          }
          if (A === n) {
            ((p = !0), (n = a), (l = u));
            break;
          }
          A = A.sibling;
        }
        if (!p) {
          for (A = u.child; A; ) {
            if (A === l) {
              ((p = !0), (l = u), (n = a));
              break;
            }
            if (A === n) {
              ((p = !0), (n = u), (l = a));
              break;
            }
            A = A.sibling;
          }
          if (!p) throw Error(E(189));
        }
      }
      if (l.alternate !== n) throw Error(E(190));
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
    v = Symbol.for('react.fragment'),
    x = Symbol.for('react.strict_mode'),
    C = Symbol.for('react.profiler'),
    O = Symbol.for('react.consumer'),
    B = Symbol.for('react.context'),
    j = Symbol.for('react.forward_ref'),
    T = Symbol.for('react.suspense'),
    R = Symbol.for('react.suspense_list'),
    D = Symbol.for('react.memo'),
    z = Symbol.for('react.lazy'),
    w = Symbol.for('react.activity'),
    U = Symbol.for('react.memo_cache_sentinel'),
    L = Symbol.iterator;
  function _(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (L && e[L]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var $ = Symbol.for('react.client.reference');
  function le(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === $ ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case v:
        return 'Fragment';
      case C:
        return 'Profiler';
      case x:
        return 'StrictMode';
      case T:
        return 'Suspense';
      case R:
        return 'SuspenseList';
      case w:
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
        case j:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case D:
          return ((t = e.displayName || null), t !== null ? t : le(e.type) || 'Memo');
        case z:
          ((t = e._payload), (e = e._init));
          try {
            return le(e(t));
          } catch {}
      }
    return null;
  }
  var ee = Array.isArray,
    G = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    I = { pending: !1, data: null, method: null, action: null },
    ne = [],
    re = -1;
  function N(e) {
    return { current: e };
  }
  function J(e) {
    0 > re || ((e.current = ne[re]), (ne[re] = null), re--);
  }
  function te(e, t) {
    (re++, (ne[re] = e.current), (e.current = t));
  }
  var ae = N(null),
    se = N(null),
    ie = N(null),
    de = N(null);
  function ye(e, t) {
    switch ((te(ie, t), te(se, e), te(ae, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Xd(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = Xd(t)), (e = Qd(t, e)));
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
    (J(ae), te(ae, e));
  }
  function Ue() {
    (J(ae), J(se), J(ie));
  }
  function tt(e) {
    e.memoizedState !== null && te(de, e);
    var t = ae.current,
      l = Qd(t, e.type);
    t !== l && (te(se, e), te(ae, l));
  }
  function at(e) {
    (se.current === e && (J(ae), J(se)), de.current === e && (J(de), (Qa._currentValue = I)));
  }
  var Je, ii;
  function Qt(e) {
    if (Je === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((Je = (t && t[1]) || ''),
          (ii =
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
      ii
    );
  }
  var ta = !1;
  function sn(e, t) {
    if (!e || ta) return '';
    ta = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var P = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(P.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(P, []);
                } catch (F) {
                  var K = F;
                }
                Reflect.construct(e, [], P);
              } else {
                try {
                  P.call();
                } catch (F) {
                  K = F;
                }
                e.call(P.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (F) {
                K = F;
              }
              (P = e()) && typeof P.catch == 'function' && P.catch(function () {});
            }
          } catch (F) {
            if (F && K && typeof F.stack == 'string') return [F.stack, K.stack];
          }
          return [null, null];
        },
      };
      n.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var a = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, 'name');
      a &&
        a.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var u = n.DetermineComponentFrameRoot(),
        p = u[0],
        A = u[1];
      if (p && A) {
        var H = p.split(`
`),
          Z = A.split(`
`);
        for (a = n = 0; n < H.length && !H[n].includes('DetermineComponentFrameRoot'); ) n++;
        for (; a < Z.length && !Z[a].includes('DetermineComponentFrameRoot'); ) a++;
        if (n === H.length || a === Z.length)
          for (n = H.length - 1, a = Z.length - 1; 1 <= n && 0 <= a && H[n] !== Z[a]; ) a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (H[n] !== Z[a]) {
            if (n !== 1 || a !== 1)
              do
                if ((n--, a--, 0 > a || H[n] !== Z[a])) {
                  var W =
                    `
` + H[n].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      W.includes('<anonymous>') &&
                      (W = W.replace('<anonymous>', e.displayName)),
                    W
                  );
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      ((ta = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : '') ? Qt(l) : '';
  }
  function ui(e, t) {
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
        return sn(e.type, !1);
      case 11:
        return sn(e.type.render, !1);
      case 1:
        return sn(e.type, !0);
      case 31:
        return Qt('Activity');
      default:
        return '';
    }
  }
  function on(e) {
    try {
      var t = '',
        l = null;
      do ((t += ui(e, l)), (l = e), (e = e.return));
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  var ht = Object.prototype.hasOwnProperty,
    fn = o.unstable_scheduleCallback,
    jl = o.unstable_cancelCallback,
    ri = o.unstable_shouldYield,
    si = o.unstable_requestPaint,
    lt = o.unstable_now,
    oi = o.unstable_getCurrentPriorityLevel,
    Yl = o.unstable_ImmediatePriority,
    fi = o.unstable_UserBlockingPriority,
    cn = o.unstable_NormalPriority,
    dn = o.unstable_LowPriority,
    Gl = o.unstable_IdlePriority,
    hm = o.log,
    mm = o.unstable_setDisableYieldValue,
    la = null,
    mt = null;
  function hl(e) {
    if ((typeof hm == 'function' && mm(e), mt && typeof mt.setStrictMode == 'function'))
      try {
        mt.setStrictMode(la, e);
      } catch {}
  }
  var vt = Math.clz32 ? Math.clz32 : ym,
    vm = Math.log,
    gm = Math.LN2;
  function ym(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((vm(e) / gm) | 0)) | 0);
  }
  var ci = 256,
    di = 262144,
    hi = 4194304;
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
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var a = 0,
      u = e.suspendedLanes,
      p = e.pingedLanes;
    e = e.warmLanes;
    var A = n & 134217727;
    return (
      A !== 0
        ? ((n = A & ~u),
          n !== 0
            ? (a = Vl(n))
            : ((p &= A), p !== 0 ? (a = Vl(p)) : l || ((l = A & ~e), l !== 0 && (a = Vl(l)))))
        : ((A = n & ~u),
          A !== 0
            ? (a = Vl(A))
            : p !== 0
              ? (a = Vl(p))
              : l || ((l = n & ~e), l !== 0 && (a = Vl(l)))),
      a === 0
        ? 0
        : t !== 0 &&
            t !== a &&
            (t & u) === 0 &&
            ((u = a & -a), (l = t & -t), u >= l || (u === 32 && (l & 4194048) !== 0))
          ? t
          : a
    );
  }
  function na(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function pm(e, t) {
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
  function bo() {
    var e = hi;
    return ((hi <<= 1), (hi & 62914560) === 0 && (hi = 4194304), e);
  }
  function Yu(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function aa(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Sm(e, t, l, n, a, u) {
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
      H = e.expirationTimes,
      Z = e.hiddenUpdates;
    for (l = p & ~l; 0 < l; ) {
      var W = 31 - vt(l),
        P = 1 << W;
      ((A[W] = 0), (H[W] = -1));
      var K = Z[W];
      if (K !== null)
        for (Z[W] = null, W = 0; W < K.length; W++) {
          var F = K[W];
          F !== null && (F.lane &= -536870913);
        }
      l &= ~P;
    }
    (n !== 0 && Mo(e, n, 0),
      u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(p & ~t)));
  }
  function Mo(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var n = 31 - vt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[n] = e.entanglements[n] | 1073741824 | (l & 261930)));
  }
  function Ao(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var n = 31 - vt(l),
        a = 1 << n;
      ((a & t) | (e[n] & t) && (e[n] |= t), (l &= ~a));
    }
  }
  function Co(e, t) {
    var l = t & -t;
    return ((l = (l & 42) !== 0 ? 1 : Gu(l)), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l);
  }
  function Gu(e) {
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
  function Vu(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function Ro() {
    var e = X.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : hh(e.type));
  }
  function zo(e, t) {
    var l = X.p;
    try {
      return ((X.p = e), t());
    } finally {
      X.p = l;
    }
  }
  var ml = Math.random().toString(36).slice(2),
    We = '__reactFiber$' + ml,
    ut = '__reactProps$' + ml,
    hn = '__reactContainer$' + ml,
    qu = '__reactEvents$' + ml,
    xm = '__reactListeners$' + ml,
    Em = '__reactHandles$' + ml,
    Do = '__reactResources$' + ml,
    ia = '__reactMarker$' + ml;
  function Xu(e) {
    (delete e[We], delete e[ut], delete e[qu], delete e[xm], delete e[Em]);
  }
  function mn(e) {
    var t = e[We];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[hn] || l[We])) {
        if (((l = t.alternate), t.child !== null || (l !== null && l.child !== null)))
          for (e = kd(e); e !== null; ) {
            if ((l = e[We])) return l;
            e = kd(e);
          }
        return t;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function vn(e) {
    if ((e = e[We] || e[hn])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function ua(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(E(33));
  }
  function gn(e) {
    var t = e[Do];
    return (t || (t = e[Do] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function Fe(e) {
    e[ia] = !0;
  }
  var Oo = new Set(),
    Bo = {};
  function ql(e, t) {
    (yn(e, t), yn(e + 'Capture', t));
  }
  function yn(e, t) {
    for (Bo[e] = t, e = 0; e < t.length; e++) Oo.add(t[e]);
  }
  var Tm = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Uo = {},
    No = {};
  function bm(e) {
    return ht.call(No, e)
      ? !0
      : ht.call(Uo, e)
        ? !1
        : Tm.test(e)
          ? (No[e] = !0)
          : ((Uo[e] = !0), !1);
  }
  function vi(e, t, l) {
    if (bm(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var n = t.toLowerCase().slice(0, 5);
            if (n !== 'data-' && n !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + l);
      }
  }
  function gi(e, t, l) {
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
  function Zt(e, t, l, n) {
    if (n === null) e.removeAttribute(l);
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, '' + n);
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
  function wo(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Mm(e, t, l) {
    var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var a = n.get,
        u = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (p) {
            ((l = '' + p), u.call(this, p));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
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
  function Qu(e) {
    if (!e._valueTracker) {
      var t = wo(e) ? 'checked' : 'value';
      e._valueTracker = Mm(e, t, '' + e[t]);
    }
  }
  function Ho(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      n = '';
    return (
      e && (n = wo(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = n),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function yi(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Am = /[\n"\\]/g;
  function Mt(e) {
    return e.replace(Am, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Zu(e, t, l, n, a, u, p, A) {
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
        ? Ku(e, p, bt(t))
        : l != null
          ? Ku(e, p, bt(l))
          : n != null && e.removeAttribute('value'),
      a == null && u != null && (e.defaultChecked = !!u),
      a != null && (e.checked = a && typeof a != 'function' && typeof a != 'symbol'),
      A != null && typeof A != 'function' && typeof A != 'symbol' && typeof A != 'boolean'
        ? (e.name = '' + bt(A))
        : e.removeAttribute('name'));
  }
  function _o(e, t, l, n, a, u, p, A) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) {
        Qu(e);
        return;
      }
      ((l = l != null ? '' + bt(l) : ''),
        (t = t != null ? '' + bt(t) : l),
        A || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = n ?? a),
      (n = typeof n != 'function' && typeof n != 'symbol' && !!n),
      (e.checked = A ? e.checked : !!n),
      (e.defaultChecked = !!n),
      p != null &&
        typeof p != 'function' &&
        typeof p != 'symbol' &&
        typeof p != 'boolean' &&
        (e.name = p),
      Qu(e));
  }
  function Ku(e, t, l) {
    (t === 'number' && yi(e.ownerDocument) === e) ||
      e.defaultValue === '' + l ||
      (e.defaultValue = '' + l);
  }
  function pn(e, t, l, n) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < l.length; a++) t['$' + l[a]] = !0;
      for (l = 0; l < e.length; l++)
        ((a = t.hasOwnProperty('$' + e[l].value)),
          e[l].selected !== a && (e[l].selected = a),
          a && n && (e[l].defaultSelected = !0));
    } else {
      for (l = '' + bt(l), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === l) {
          ((e[a].selected = !0), n && (e[a].defaultSelected = !0));
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Lo(e, t, l) {
    if (t != null && ((t = '' + bt(t)), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? '' + bt(l) : '';
  }
  function jo(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(E(92));
        if (ee(n)) {
          if (1 < n.length) throw Error(E(93));
          n = n[0];
        }
        l = n;
      }
      (l == null && (l = ''), (t = l));
    }
    ((l = bt(t)),
      (e.defaultValue = l),
      (n = e.textContent),
      n === l && n !== '' && n !== null && (e.value = n),
      Qu(e));
  }
  function Sn(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Cm = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function Yo(e, t, l) {
    var n = t.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === ''
      ? n
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : n
        ? e.setProperty(t, l)
        : typeof l != 'number' || l === 0 || Cm.has(t)
          ? t === 'float'
            ? (e.cssFloat = l)
            : (e[t] = ('' + l).trim())
          : (e[t] = l + 'px');
  }
  function Go(e, t, l) {
    if (t != null && typeof t != 'object') throw Error(E(62));
    if (((e = e.style), l != null)) {
      for (var n in l)
        !l.hasOwnProperty(n) ||
          (t != null && t.hasOwnProperty(n)) ||
          (n.indexOf('--') === 0
            ? e.setProperty(n, '')
            : n === 'float'
              ? (e.cssFloat = '')
              : (e[n] = ''));
      for (var a in t) ((n = t[a]), t.hasOwnProperty(a) && l[a] !== n && Yo(e, a, n));
    } else for (var u in t) t.hasOwnProperty(u) && Yo(e, u, t[u]);
  }
  function Ju(e) {
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
  var Rm = new Map([
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
    zm =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pi(e) {
    return zm.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Kt() {}
  var Fu = null;
  function $u(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var xn = null,
    En = null;
  function Vo(e) {
    var t = vn(e);
    if (t && (e = t.stateNode)) {
      var l = e[ut] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Zu(
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
              var n = l[t];
              if (n !== e && n.form === e.form) {
                var a = n[ut] || null;
                if (!a) throw Error(E(90));
                Zu(
                  n,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (t = 0; t < l.length; t++) ((n = l[t]), n.form === e.form && Ho(n));
          }
          break e;
        case 'textarea':
          Lo(e, l.value, l.defaultValue);
          break e;
        case 'select':
          ((t = l.value), t != null && pn(e, !!l.multiple, t, !1));
      }
    }
  }
  var Wu = !1;
  function qo(e, t, l) {
    if (Wu) return e(t, l);
    Wu = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (
        ((Wu = !1),
        (xn !== null || En !== null) &&
          (iu(), xn && ((t = xn), (e = En), (En = xn = null), Vo(t), e)))
      )
        for (t = 0; t < e.length; t++) Vo(e[t]);
    }
  }
  function ra(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var n = l[ut] || null;
    if (n === null) return null;
    l = n[t];
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
        ((n = !n.disabled) ||
          ((e = e.type),
          (n = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !n));
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
    ku = !1;
  if (Jt)
    try {
      var sa = {};
      (Object.defineProperty(sa, 'passive', {
        get: function () {
          ku = !0;
        },
      }),
        window.addEventListener('test', sa, sa),
        window.removeEventListener('test', sa, sa));
    } catch {
      ku = !1;
    }
  var vl = null,
    Pu = null,
    Si = null;
  function Xo() {
    if (Si) return Si;
    var e,
      t = Pu,
      l = t.length,
      n,
      a = 'value' in vl ? vl.value : vl.textContent,
      u = a.length;
    for (e = 0; e < l && t[e] === a[e]; e++);
    var p = l - e;
    for (n = 1; n <= p && t[l - n] === a[u - n]; n++);
    return (Si = a.slice(e, 1 < n ? 1 - n : void 0));
  }
  function xi(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ei() {
    return !0;
  }
  function Qo() {
    return !1;
  }
  function rt(e) {
    function t(l, n, a, u, p) {
      ((this._reactName = l),
        (this._targetInst = a),
        (this.type = n),
        (this.nativeEvent = u),
        (this.target = p),
        (this.currentTarget = null));
      for (var A in e) e.hasOwnProperty(A) && ((l = e[A]), (this[A] = l ? l(u) : u[A]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Ei
          : Qo),
        (this.isPropagationStopped = Qo),
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
            (this.isDefaultPrevented = Ei));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = Ei));
        },
        persist: function () {},
        isPersistent: Ei,
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
    Ti = rt(Xl),
    oa = g({}, Xl, { view: 0, detail: 0 }),
    Dm = rt(oa),
    Iu,
    er,
    fa,
    bi = g({}, oa, {
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
      getModifierState: lr,
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
          : (e !== fa &&
              (fa && e.type === 'mousemove'
                ? ((Iu = e.screenX - fa.screenX), (er = e.screenY - fa.screenY))
                : (er = Iu = 0),
              (fa = e)),
            Iu);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : er;
      },
    }),
    Zo = rt(bi),
    Om = g({}, bi, { dataTransfer: 0 }),
    Bm = rt(Om),
    Um = g({}, oa, { relatedTarget: 0 }),
    tr = rt(Um),
    Nm = g({}, Xl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    wm = rt(Nm),
    Hm = g({}, Xl, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    _m = rt(Hm),
    Lm = g({}, Xl, { data: 0 }),
    Ko = rt(Lm),
    jm = {
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
    Ym = {
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
    Gm = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Vm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Gm[e]) ? !!t[e] : !1;
  }
  function lr() {
    return Vm;
  }
  var qm = g({}, oa, {
      key: function (e) {
        if (e.key) {
          var t = jm[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = xi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Ym[e.keyCode] || 'Unidentified'
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
      getModifierState: lr,
      charCode: function (e) {
        return e.type === 'keypress' ? xi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? xi(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Xm = rt(qm),
    Qm = g({}, bi, {
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
    Jo = rt(Qm),
    Zm = g({}, oa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: lr,
    }),
    Km = rt(Zm),
    Jm = g({}, Xl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fm = rt(Jm),
    $m = g({}, bi, {
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
    Wm = rt($m),
    km = g({}, Xl, { newState: 0, oldState: 0 }),
    Pm = rt(km),
    Im = [9, 13, 27, 32],
    nr = Jt && 'CompositionEvent' in window,
    ca = null;
  Jt && 'documentMode' in document && (ca = document.documentMode);
  var ev = Jt && 'TextEvent' in window && !ca,
    Fo = Jt && (!nr || (ca && 8 < ca && 11 >= ca)),
    $o = ' ',
    Wo = !1;
  function ko(e, t) {
    switch (e) {
      case 'keyup':
        return Im.indexOf(t.keyCode) !== -1;
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
  function Po(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Tn = !1;
  function tv(e, t) {
    switch (e) {
      case 'compositionend':
        return Po(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Wo = !0), $o);
      case 'textInput':
        return ((e = t.data), e === $o && Wo ? null : e);
      default:
        return null;
    }
  }
  function lv(e, t) {
    if (Tn)
      return e === 'compositionend' || (!nr && ko(e, t))
        ? ((e = Xo()), (Si = Pu = vl = null), (Tn = !1), e)
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
        return Fo && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var nv = {
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
  function Io(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!nv[e.type] : t === 'textarea';
  }
  function ef(e, t, l, n) {
    (xn ? (En ? En.push(n) : (En = [n])) : (xn = n),
      (t = du(t, 'onChange')),
      0 < t.length &&
        ((l = new Ti('onChange', 'change', null, l, n)), e.push({ event: l, listeners: t })));
  }
  var da = null,
    ha = null;
  function av(e) {
    Ld(e, 0);
  }
  function Mi(e) {
    var t = ua(e);
    if (Ho(t)) return e;
  }
  function tf(e, t) {
    if (e === 'change') return t;
  }
  var lf = !1;
  if (Jt) {
    var ar;
    if (Jt) {
      var ir = 'oninput' in document;
      if (!ir) {
        var nf = document.createElement('div');
        (nf.setAttribute('oninput', 'return;'), (ir = typeof nf.oninput == 'function'));
      }
      ar = ir;
    } else ar = !1;
    lf = ar && (!document.documentMode || 9 < document.documentMode);
  }
  function af() {
    da && (da.detachEvent('onpropertychange', uf), (ha = da = null));
  }
  function uf(e) {
    if (e.propertyName === 'value' && Mi(ha)) {
      var t = [];
      (ef(t, ha, e, $u(e)), qo(av, t));
    }
  }
  function iv(e, t, l) {
    e === 'focusin'
      ? (af(), (da = t), (ha = l), da.attachEvent('onpropertychange', uf))
      : e === 'focusout' && af();
  }
  function uv(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Mi(ha);
  }
  function rv(e, t) {
    if (e === 'click') return Mi(t);
  }
  function sv(e, t) {
    if (e === 'input' || e === 'change') return Mi(t);
  }
  function ov(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var gt = typeof Object.is == 'function' ? Object.is : ov;
  function ma(e, t) {
    if (gt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var l = Object.keys(e),
      n = Object.keys(t);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!ht.call(t, a) || !gt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function rf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function sf(e, t) {
    var l = rf(e);
    e = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (((n = e + l.textContent.length), e <= t && n >= t)) return { node: l, offset: t - e };
        e = n;
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
      l = rf(l);
    }
  }
  function of(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? of(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ff(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = yi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = yi(e.document);
    }
    return t;
  }
  function ur(e) {
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
  var fv = Jt && 'documentMode' in document && 11 >= document.documentMode,
    bn = null,
    rr = null,
    va = null,
    sr = !1;
  function cf(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    sr ||
      bn == null ||
      bn !== yi(n) ||
      ((n = bn),
      'selectionStart' in n && ur(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (va && ma(va, n)) ||
        ((va = n),
        (n = du(rr, 'onSelect')),
        0 < n.length &&
          ((t = new Ti('onSelect', 'select', null, t, l)),
          e.push({ event: t, listeners: n }),
          (t.target = bn))));
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
  var Mn = {
      animationend: Ql('Animation', 'AnimationEnd'),
      animationiteration: Ql('Animation', 'AnimationIteration'),
      animationstart: Ql('Animation', 'AnimationStart'),
      transitionrun: Ql('Transition', 'TransitionRun'),
      transitionstart: Ql('Transition', 'TransitionStart'),
      transitioncancel: Ql('Transition', 'TransitionCancel'),
      transitionend: Ql('Transition', 'TransitionEnd'),
    },
    or = {},
    df = {};
  Jt &&
    ((df = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Mn.animationend.animation,
      delete Mn.animationiteration.animation,
      delete Mn.animationstart.animation),
    'TransitionEvent' in window || delete Mn.transitionend.transition);
  function Zl(e) {
    if (or[e]) return or[e];
    if (!Mn[e]) return e;
    var t = Mn[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in df) return (or[e] = t[l]);
    return e;
  }
  var hf = Zl('animationend'),
    mf = Zl('animationiteration'),
    vf = Zl('animationstart'),
    cv = Zl('transitionrun'),
    dv = Zl('transitionstart'),
    hv = Zl('transitioncancel'),
    gf = Zl('transitionend'),
    yf = new Map(),
    fr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  fr.push('scrollEnd');
  function Ht(e, t) {
    (yf.set(e, t), ql(t, [e]));
  }
  var Ai =
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
    An = 0,
    cr = 0;
  function Ci() {
    for (var e = An, t = (cr = An = 0); t < e; ) {
      var l = At[t];
      At[t++] = null;
      var n = At[t];
      At[t++] = null;
      var a = At[t];
      At[t++] = null;
      var u = At[t];
      if (((At[t++] = null), n !== null && a !== null)) {
        var p = n.pending;
        (p === null ? (a.next = a) : ((a.next = p.next), (p.next = a)), (n.pending = a));
      }
      u !== 0 && pf(l, a, u);
    }
  }
  function Ri(e, t, l, n) {
    ((At[An++] = e),
      (At[An++] = t),
      (At[An++] = l),
      (At[An++] = n),
      (cr |= n),
      (e.lanes |= n),
      (e = e.alternate),
      e !== null && (e.lanes |= n));
  }
  function dr(e, t, l, n) {
    return (Ri(e, t, l, n), zi(e));
  }
  function Kl(e, t) {
    return (Ri(e, null, null, t), zi(e));
  }
  function pf(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, u = e.return; u !== null; )
      ((u.childLanes |= l),
        (n = u.alternate),
        n !== null && (n.childLanes |= l),
        u.tag === 22 && ((e = u.stateNode), e === null || e._visibility & 1 || (a = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3
      ? ((u = e.stateNode),
        a &&
          t !== null &&
          ((a = 31 - vt(l)),
          (e = u.hiddenUpdates),
          (n = e[a]),
          n === null ? (e[a] = [t]) : n.push(t),
          (t.lane = l | 536870912)),
        u)
      : null;
  }
  function zi(e) {
    if (50 < La) throw ((La = 0), (Es = null), Error(E(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Cn = {};
  function mv(e, t, l, n) {
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
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function yt(e, t, l, n) {
    return new mv(e, t, l, n);
  }
  function hr(e) {
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
  function Sf(e, t) {
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
  function Di(e, t, l, n, a, u) {
    var p = 0;
    if (((n = e), typeof e == 'function')) hr(e) && (p = 1);
    else if (typeof e == 'string')
      p = S0(e, l, ae.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case w:
          return ((e = yt(31, l, t, a)), (e.elementType = w), (e.lanes = u), e);
        case v:
          return Jl(l.children, a, u, t);
        case x:
          ((p = 8), (a |= 24));
          break;
        case C:
          return ((e = yt(12, l, t, a | 2)), (e.elementType = C), (e.lanes = u), e);
        case T:
          return ((e = yt(13, l, t, a)), (e.elementType = T), (e.lanes = u), e);
        case R:
          return ((e = yt(19, l, t, a)), (e.elementType = R), (e.lanes = u), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case B:
                p = 10;
                break e;
              case O:
                p = 9;
                break e;
              case j:
                p = 11;
                break e;
              case D:
                p = 14;
                break e;
              case z:
                ((p = 16), (n = null));
                break e;
            }
          ((p = 29), (l = Error(E(130, e === null ? 'null' : typeof e, ''))), (n = null));
      }
    return ((t = yt(p, l, t, a)), (t.elementType = e), (t.type = n), (t.lanes = u), t);
  }
  function Jl(e, t, l, n) {
    return ((e = yt(7, e, n, t)), (e.lanes = l), e);
  }
  function mr(e, t, l) {
    return ((e = yt(6, e, null, t)), (e.lanes = l), e);
  }
  function xf(e) {
    var t = yt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function vr(e, t, l) {
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
  var Ef = new WeakMap();
  function Ct(e, t) {
    if (typeof e == 'object' && e !== null) {
      var l = Ef.get(e);
      return l !== void 0 ? l : ((t = { value: e, source: t, stack: on(t) }), Ef.set(e, t), t);
    }
    return { value: e, source: t, stack: on(t) };
  }
  var Rn = [],
    zn = 0,
    Oi = null,
    ga = 0,
    Rt = [],
    zt = 0,
    gl = null,
    Yt = 1,
    Gt = '';
  function $t(e, t) {
    ((Rn[zn++] = ga), (Rn[zn++] = Oi), (Oi = e), (ga = t));
  }
  function Tf(e, t, l) {
    ((Rt[zt++] = Yt), (Rt[zt++] = Gt), (Rt[zt++] = gl), (gl = e));
    var n = Yt;
    e = Gt;
    var a = 32 - vt(n) - 1;
    ((n &= ~(1 << a)), (l += 1));
    var u = 32 - vt(t) + a;
    if (30 < u) {
      var p = a - (a % 5);
      ((u = (n & ((1 << p) - 1)).toString(32)),
        (n >>= p),
        (a -= p),
        (Yt = (1 << (32 - vt(t) + a)) | (l << a) | n),
        (Gt = u + e));
    } else ((Yt = (1 << u) | (l << a) | n), (Gt = e));
  }
  function gr(e) {
    e.return !== null && ($t(e, 1), Tf(e, 1, 0));
  }
  function yr(e) {
    for (; e === Oi; ) ((Oi = Rn[--zn]), (Rn[zn] = null), (ga = Rn[--zn]), (Rn[zn] = null));
    for (; e === gl; )
      ((gl = Rt[--zt]),
        (Rt[zt] = null),
        (Gt = Rt[--zt]),
        (Rt[zt] = null),
        (Yt = Rt[--zt]),
        (Rt[zt] = null));
  }
  function bf(e, t) {
    ((Rt[zt++] = Yt), (Rt[zt++] = Gt), (Rt[zt++] = gl), (Yt = t.id), (Gt = t.overflow), (gl = e));
  }
  var ke = null,
    we = null,
    Te = !1,
    yl = null,
    Dt = !1,
    pr = Error(E(519));
  function pl(e) {
    var t = Error(
      E(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    );
    throw (ya(Ct(t, e)), pr);
  }
  function Mf(e) {
    var t = e.stateNode,
      l = e.type,
      n = e.memoizedProps;
    switch (((t[We] = e), (t[ut] = n), l)) {
      case 'dialog':
        (Se('cancel', t), Se('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Se('load', t);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Ya.length; l++) Se(Ya[l], t);
        break;
      case 'source':
        Se('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Se('error', t), Se('load', t));
        break;
      case 'details':
        Se('toggle', t);
        break;
      case 'input':
        (Se('invalid', t),
          _o(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0));
        break;
      case 'select':
        Se('invalid', t);
        break;
      case 'textarea':
        (Se('invalid', t), jo(t, n.value, n.defaultValue, n.children));
    }
    ((l = n.children),
      (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
      t.textContent === '' + l ||
      n.suppressHydrationWarning === !0 ||
      Vd(t.textContent, l)
        ? (n.popover != null && (Se('beforetoggle', t), Se('toggle', t)),
          n.onScroll != null && Se('scroll', t),
          n.onScrollEnd != null && Se('scrollend', t),
          n.onClick != null && (t.onclick = Kt),
          (t = !0))
        : (t = !1),
      t || pl(e, !0));
  }
  function Af(e) {
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
  function Dn(e) {
    if (e !== ke) return !1;
    if (!Te) return (Af(e), (Te = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type), (l = !(l !== 'form' && l !== 'button') || _s(e.type, e.memoizedProps))),
        (l = !l)),
      l && we && pl(e),
      Af(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(E(317));
      we = Wd(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(E(317));
      we = Wd(e);
    } else
      t === 27
        ? ((t = we), Ul(e.type) ? ((e = Vs), (Vs = null), (we = e)) : (we = t))
        : (we = ke ? Bt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Fl() {
    ((we = ke = null), (Te = !1));
  }
  function Sr() {
    var e = yl;
    return (e !== null && (ct === null ? (ct = e) : ct.push.apply(ct, e), (yl = null)), e);
  }
  function ya(e) {
    yl === null ? (yl = [e]) : yl.push(e);
  }
  var xr = N(null),
    $l = null,
    Wt = null;
  function Sl(e, t, l) {
    (te(xr, t._currentValue), (t._currentValue = l));
  }
  function kt(e) {
    ((e._currentValue = xr.current), J(xr));
  }
  function Er(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Tr(e, t, l, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var p = a.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var A = u;
          u = a;
          for (var H = 0; H < t.length; H++)
            if (A.context === t[H]) {
              ((u.lanes |= l),
                (A = u.alternate),
                A !== null && (A.lanes |= l),
                Er(u.return, l, e),
                n || (p = null));
              break e;
            }
          u = A.next;
        }
      } else if (a.tag === 18) {
        if (((p = a.return), p === null)) throw Error(E(341));
        ((p.lanes |= l), (u = p.alternate), u !== null && (u.lanes |= l), Er(p, l, e), (p = null));
      } else p = a.child;
      if (p !== null) p.return = a;
      else
        for (p = a; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (((a = p.sibling), a !== null)) {
            ((a.return = p.return), (p = a));
            break;
          }
          p = p.return;
        }
      a = p;
    }
  }
  function On(e, t, l, n) {
    e = null;
    for (var a = t, u = !1; a !== null; ) {
      if (!u) {
        if ((a.flags & 524288) !== 0) u = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var p = a.alternate;
        if (p === null) throw Error(E(387));
        if (((p = p.memoizedProps), p !== null)) {
          var A = a.type;
          gt(a.pendingProps.value, p.value) || (e !== null ? e.push(A) : (e = [A]));
        }
      } else if (a === de.current) {
        if (((p = a.alternate), p === null)) throw Error(E(387));
        p.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
          (e !== null ? e.push(Qa) : (e = [Qa]));
      }
      a = a.return;
    }
    (e !== null && Tr(t, e, l, n), (t.flags |= 262144));
  }
  function Bi(e) {
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
    return Cf($l, e);
  }
  function Ui(e, t) {
    return ($l === null && Wl(e), Cf(e, t));
  }
  function Cf(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Wt === null)) {
      if (e === null) throw Error(E(308));
      ((Wt = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else Wt = Wt.next = t;
    return l;
  }
  var vv =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, n) {
                  e.push(n);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                }));
            };
          },
    gv = o.unstable_scheduleCallback,
    yv = o.unstable_NormalPriority,
    qe = {
      $$typeof: B,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function br() {
    return { controller: new vv(), data: new Map(), refCount: 0 };
  }
  function pa(e) {
    (e.refCount--,
      e.refCount === 0 &&
        gv(yv, function () {
          e.controller.abort();
        }));
  }
  var Sa = null,
    Mr = 0,
    Bn = 0,
    Un = null;
  function pv(e, t) {
    if (Sa === null) {
      var l = (Sa = []);
      ((Mr = 0),
        (Bn = Rs()),
        (Un = {
          status: 'pending',
          value: void 0,
          then: function (n) {
            l.push(n);
          },
        }));
    }
    return (Mr++, t.then(Rf, Rf), t);
  }
  function Rf() {
    if (--Mr === 0 && Sa !== null) {
      Un !== null && (Un.status = 'fulfilled');
      var e = Sa;
      ((Sa = null), (Bn = 0), (Un = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Sv(e, t) {
    var l = [],
      n = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (a) {
          l.push(a);
        },
      };
    return (
      e.then(
        function () {
          ((n.status = 'fulfilled'), (n.value = t));
          for (var a = 0; a < l.length; a++) (0, l[a])(t);
        },
        function (a) {
          for (n.status = 'rejected', n.reason = a, a = 0; a < l.length; a++) (0, l[a])(void 0);
        }
      ),
      n
    );
  }
  var zf = G.S;
  G.S = function (e, t) {
    ((cd = lt()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && pv(e, t),
      zf !== null && zf(e, t));
  };
  var kl = N(null);
  function Ar() {
    var e = kl.current;
    return e !== null ? e : Ne.pooledCache;
  }
  function Ni(e, t) {
    t === null ? te(kl, kl.current) : te(kl, t.pool);
  }
  function Df() {
    var e = Ar();
    return e === null ? null : { parent: qe._currentValue, pool: e };
  }
  var Nn = Error(E(460)),
    Cr = Error(E(474)),
    wi = Error(E(542)),
    Hi = { then: function () {} };
  function Of(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Bf(e, t, l) {
    switch (
      ((l = e[l]), l === void 0 ? e.push(t) : l !== t && (t.then(Kt, Kt), (t = l)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Nf(e), e);
      default:
        if (typeof t.status == 'string') t.then(Kt, Kt);
        else {
          if (((e = Ne), e !== null && 100 < e.shellSuspendCounter)) throw Error(E(482));
          ((e = t),
            (e.status = 'pending'),
            e.then(
              function (n) {
                if (t.status === 'pending') {
                  var a = t;
                  ((a.status = 'fulfilled'), (a.value = n));
                }
              },
              function (n) {
                if (t.status === 'pending') {
                  var a = t;
                  ((a.status = 'rejected'), (a.reason = n));
                }
              }
            ));
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), Nf(e), e);
        }
        throw ((Il = t), Nn);
    }
  }
  function Pl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == 'object' && typeof l.then == 'function' ? ((Il = l), Nn) : l;
    }
  }
  var Il = null;
  function Uf() {
    if (Il === null) throw Error(E(459));
    var e = Il;
    return ((Il = null), e);
  }
  function Nf(e) {
    if (e === Nn || e === wi) throw Error(E(483));
  }
  var wn = null,
    xa = 0;
  function _i(e) {
    var t = xa;
    return ((xa += 1), wn === null && (wn = []), Bf(wn, e, t));
  }
  function Ea(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Li(e, t) {
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
  function wf(e) {
    function t(V, Y) {
      if (e) {
        var Q = V.deletions;
        Q === null ? ((V.deletions = [Y]), (V.flags |= 16)) : Q.push(Y);
      }
    }
    function l(V, Y) {
      if (!e) return null;
      for (; Y !== null; ) (t(V, Y), (Y = Y.sibling));
      return null;
    }
    function n(V) {
      for (var Y = new Map(); V !== null; )
        (V.key !== null ? Y.set(V.key, V) : Y.set(V.index, V), (V = V.sibling));
      return Y;
    }
    function a(V, Y) {
      return ((V = Ft(V, Y)), (V.index = 0), (V.sibling = null), V);
    }
    function u(V, Y, Q) {
      return (
        (V.index = Q),
        e
          ? ((Q = V.alternate),
            Q !== null
              ? ((Q = Q.index), Q < Y ? ((V.flags |= 67108866), Y) : Q)
              : ((V.flags |= 67108866), Y))
          : ((V.flags |= 1048576), Y)
      );
    }
    function p(V) {
      return (e && V.alternate === null && (V.flags |= 67108866), V);
    }
    function A(V, Y, Q, k) {
      return Y === null || Y.tag !== 6
        ? ((Y = mr(Q, V.mode, k)), (Y.return = V), Y)
        : ((Y = a(Y, Q)), (Y.return = V), Y);
    }
    function H(V, Y, Q, k) {
      var ce = Q.type;
      return ce === v
        ? W(V, Y, Q.props.children, k, Q.key)
        : Y !== null &&
            (Y.elementType === ce ||
              (typeof ce == 'object' && ce !== null && ce.$$typeof === z && Pl(ce) === Y.type))
          ? ((Y = a(Y, Q.props)), Ea(Y, Q), (Y.return = V), Y)
          : ((Y = Di(Q.type, Q.key, Q.props, null, V.mode, k)), Ea(Y, Q), (Y.return = V), Y);
    }
    function Z(V, Y, Q, k) {
      return Y === null ||
        Y.tag !== 4 ||
        Y.stateNode.containerInfo !== Q.containerInfo ||
        Y.stateNode.implementation !== Q.implementation
        ? ((Y = vr(Q, V.mode, k)), (Y.return = V), Y)
        : ((Y = a(Y, Q.children || [])), (Y.return = V), Y);
    }
    function W(V, Y, Q, k, ce) {
      return Y === null || Y.tag !== 7
        ? ((Y = Jl(Q, V.mode, k, ce)), (Y.return = V), Y)
        : ((Y = a(Y, Q)), (Y.return = V), Y);
    }
    function P(V, Y, Q) {
      if ((typeof Y == 'string' && Y !== '') || typeof Y == 'number' || typeof Y == 'bigint')
        return ((Y = mr('' + Y, V.mode, Q)), (Y.return = V), Y);
      if (typeof Y == 'object' && Y !== null) {
        switch (Y.$$typeof) {
          case r:
            return ((Q = Di(Y.type, Y.key, Y.props, null, V.mode, Q)), Ea(Q, Y), (Q.return = V), Q);
          case y:
            return ((Y = vr(Y, V.mode, Q)), (Y.return = V), Y);
          case z:
            return ((Y = Pl(Y)), P(V, Y, Q));
        }
        if (ee(Y) || _(Y)) return ((Y = Jl(Y, V.mode, Q, null)), (Y.return = V), Y);
        if (typeof Y.then == 'function') return P(V, _i(Y), Q);
        if (Y.$$typeof === B) return P(V, Ui(V, Y), Q);
        Li(V, Y);
      }
      return null;
    }
    function K(V, Y, Q, k) {
      var ce = Y !== null ? Y.key : null;
      if ((typeof Q == 'string' && Q !== '') || typeof Q == 'number' || typeof Q == 'bigint')
        return ce !== null ? null : A(V, Y, '' + Q, k);
      if (typeof Q == 'object' && Q !== null) {
        switch (Q.$$typeof) {
          case r:
            return Q.key === ce ? H(V, Y, Q, k) : null;
          case y:
            return Q.key === ce ? Z(V, Y, Q, k) : null;
          case z:
            return ((Q = Pl(Q)), K(V, Y, Q, k));
        }
        if (ee(Q) || _(Q)) return ce !== null ? null : W(V, Y, Q, k, null);
        if (typeof Q.then == 'function') return K(V, Y, _i(Q), k);
        if (Q.$$typeof === B) return K(V, Y, Ui(V, Q), k);
        Li(V, Q);
      }
      return null;
    }
    function F(V, Y, Q, k, ce) {
      if ((typeof k == 'string' && k !== '') || typeof k == 'number' || typeof k == 'bigint')
        return ((V = V.get(Q) || null), A(Y, V, '' + k, ce));
      if (typeof k == 'object' && k !== null) {
        switch (k.$$typeof) {
          case r:
            return ((V = V.get(k.key === null ? Q : k.key) || null), H(Y, V, k, ce));
          case y:
            return ((V = V.get(k.key === null ? Q : k.key) || null), Z(Y, V, k, ce));
          case z:
            return ((k = Pl(k)), F(V, Y, Q, k, ce));
        }
        if (ee(k) || _(k)) return ((V = V.get(Q) || null), W(Y, V, k, ce, null));
        if (typeof k.then == 'function') return F(V, Y, Q, _i(k), ce);
        if (k.$$typeof === B) return F(V, Y, Q, Ui(Y, k), ce);
        Li(Y, k);
      }
      return null;
    }
    function oe(V, Y, Q, k) {
      for (
        var ce = null, be = null, fe = Y, ge = (Y = 0), Ee = null;
        fe !== null && ge < Q.length;
        ge++
      ) {
        fe.index > ge ? ((Ee = fe), (fe = null)) : (Ee = fe.sibling);
        var Me = K(V, fe, Q[ge], k);
        if (Me === null) {
          fe === null && (fe = Ee);
          break;
        }
        (e && fe && Me.alternate === null && t(V, fe),
          (Y = u(Me, Y, ge)),
          be === null ? (ce = Me) : (be.sibling = Me),
          (be = Me),
          (fe = Ee));
      }
      if (ge === Q.length) return (l(V, fe), Te && $t(V, ge), ce);
      if (fe === null) {
        for (; ge < Q.length; ge++)
          ((fe = P(V, Q[ge], k)),
            fe !== null &&
              ((Y = u(fe, Y, ge)), be === null ? (ce = fe) : (be.sibling = fe), (be = fe)));
        return (Te && $t(V, ge), ce);
      }
      for (fe = n(fe); ge < Q.length; ge++)
        ((Ee = F(fe, V, ge, Q[ge], k)),
          Ee !== null &&
            (e && Ee.alternate !== null && fe.delete(Ee.key === null ? ge : Ee.key),
            (Y = u(Ee, Y, ge)),
            be === null ? (ce = Ee) : (be.sibling = Ee),
            (be = Ee)));
      return (
        e &&
          fe.forEach(function (Ll) {
            return t(V, Ll);
          }),
        Te && $t(V, ge),
        ce
      );
    }
    function he(V, Y, Q, k) {
      if (Q == null) throw Error(E(151));
      for (
        var ce = null, be = null, fe = Y, ge = (Y = 0), Ee = null, Me = Q.next();
        fe !== null && !Me.done;
        ge++, Me = Q.next()
      ) {
        fe.index > ge ? ((Ee = fe), (fe = null)) : (Ee = fe.sibling);
        var Ll = K(V, fe, Me.value, k);
        if (Ll === null) {
          fe === null && (fe = Ee);
          break;
        }
        (e && fe && Ll.alternate === null && t(V, fe),
          (Y = u(Ll, Y, ge)),
          be === null ? (ce = Ll) : (be.sibling = Ll),
          (be = Ll),
          (fe = Ee));
      }
      if (Me.done) return (l(V, fe), Te && $t(V, ge), ce);
      if (fe === null) {
        for (; !Me.done; ge++, Me = Q.next())
          ((Me = P(V, Me.value, k)),
            Me !== null &&
              ((Y = u(Me, Y, ge)), be === null ? (ce = Me) : (be.sibling = Me), (be = Me)));
        return (Te && $t(V, ge), ce);
      }
      for (fe = n(fe); !Me.done; ge++, Me = Q.next())
        ((Me = F(fe, V, ge, Me.value, k)),
          Me !== null &&
            (e && Me.alternate !== null && fe.delete(Me.key === null ? ge : Me.key),
            (Y = u(Me, Y, ge)),
            be === null ? (ce = Me) : (be.sibling = Me),
            (be = Me)));
      return (
        e &&
          fe.forEach(function (O0) {
            return t(V, O0);
          }),
        Te && $t(V, ge),
        ce
      );
    }
    function Be(V, Y, Q, k) {
      if (
        (typeof Q == 'object' &&
          Q !== null &&
          Q.type === v &&
          Q.key === null &&
          (Q = Q.props.children),
        typeof Q == 'object' && Q !== null)
      ) {
        switch (Q.$$typeof) {
          case r:
            e: {
              for (var ce = Q.key; Y !== null; ) {
                if (Y.key === ce) {
                  if (((ce = Q.type), ce === v)) {
                    if (Y.tag === 7) {
                      (l(V, Y.sibling), (k = a(Y, Q.props.children)), (k.return = V), (V = k));
                      break e;
                    }
                  } else if (
                    Y.elementType === ce ||
                    (typeof ce == 'object' && ce !== null && ce.$$typeof === z && Pl(ce) === Y.type)
                  ) {
                    (l(V, Y.sibling), (k = a(Y, Q.props)), Ea(k, Q), (k.return = V), (V = k));
                    break e;
                  }
                  l(V, Y);
                  break;
                } else t(V, Y);
                Y = Y.sibling;
              }
              Q.type === v
                ? ((k = Jl(Q.props.children, V.mode, k, Q.key)), (k.return = V), (V = k))
                : ((k = Di(Q.type, Q.key, Q.props, null, V.mode, k)),
                  Ea(k, Q),
                  (k.return = V),
                  (V = k));
            }
            return p(V);
          case y:
            e: {
              for (ce = Q.key; Y !== null; ) {
                if (Y.key === ce)
                  if (
                    Y.tag === 4 &&
                    Y.stateNode.containerInfo === Q.containerInfo &&
                    Y.stateNode.implementation === Q.implementation
                  ) {
                    (l(V, Y.sibling), (k = a(Y, Q.children || [])), (k.return = V), (V = k));
                    break e;
                  } else {
                    l(V, Y);
                    break;
                  }
                else t(V, Y);
                Y = Y.sibling;
              }
              ((k = vr(Q, V.mode, k)), (k.return = V), (V = k));
            }
            return p(V);
          case z:
            return ((Q = Pl(Q)), Be(V, Y, Q, k));
        }
        if (ee(Q)) return oe(V, Y, Q, k);
        if (_(Q)) {
          if (((ce = _(Q)), typeof ce != 'function')) throw Error(E(150));
          return ((Q = ce.call(Q)), he(V, Y, Q, k));
        }
        if (typeof Q.then == 'function') return Be(V, Y, _i(Q), k);
        if (Q.$$typeof === B) return Be(V, Y, Ui(V, Q), k);
        Li(V, Q);
      }
      return (typeof Q == 'string' && Q !== '') || typeof Q == 'number' || typeof Q == 'bigint'
        ? ((Q = '' + Q),
          Y !== null && Y.tag === 6
            ? (l(V, Y.sibling), (k = a(Y, Q)), (k.return = V), (V = k))
            : (l(V, Y), (k = mr(Q, V.mode, k)), (k.return = V), (V = k)),
          p(V))
        : l(V, Y);
    }
    return function (V, Y, Q, k) {
      try {
        xa = 0;
        var ce = Be(V, Y, Q, k);
        return ((wn = null), ce);
      } catch (fe) {
        if (fe === Nn || fe === wi) throw fe;
        var be = yt(29, fe, null, V.mode);
        return ((be.lanes = k), (be.return = V), be);
      } finally {
      }
    };
  }
  var en = wf(!0),
    Hf = wf(!1),
    xl = !1;
  function Rr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function zr(e, t) {
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
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (Ae & 2) !== 0)) {
      var a = n.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (n.pending = t),
        (t = zi(e)),
        pf(e, null, l),
        t
      );
    }
    return (Ri(e, n, t, l), zi(e));
  }
  function Ta(e, t, l) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (l |= n), (t.lanes = l), Ao(e, l));
    }
  }
  function Dr(e, t) {
    var l = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), l === n)) {
      var a = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var p = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
          (u === null ? (a = u = p) : (u = u.next = p), (l = l.next));
        } while (l !== null);
        u === null ? (a = u = t) : (u = u.next = t);
      } else a = u = t;
      ((l = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: u,
        shared: n.shared,
        callbacks: n.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t));
  }
  var Or = !1;
  function ba() {
    if (Or) {
      var e = Un;
      if (e !== null) throw e;
    }
  }
  function Ma(e, t, l, n) {
    Or = !1;
    var a = e.updateQueue;
    xl = !1;
    var u = a.firstBaseUpdate,
      p = a.lastBaseUpdate,
      A = a.shared.pending;
    if (A !== null) {
      a.shared.pending = null;
      var H = A,
        Z = H.next;
      ((H.next = null), p === null ? (u = Z) : (p.next = Z), (p = H));
      var W = e.alternate;
      W !== null &&
        ((W = W.updateQueue),
        (A = W.lastBaseUpdate),
        A !== p && (A === null ? (W.firstBaseUpdate = Z) : (A.next = Z), (W.lastBaseUpdate = H)));
    }
    if (u !== null) {
      var P = a.baseState;
      ((p = 0), (W = Z = H = null), (A = u));
      do {
        var K = A.lane & -536870913,
          F = K !== A.lane;
        if (F ? (xe & K) === K : (n & K) === K) {
          (K !== 0 && K === Bn && (Or = !0),
            W !== null &&
              (W = W.next =
                { lane: 0, tag: A.tag, payload: A.payload, callback: null, next: null }));
          e: {
            var oe = e,
              he = A;
            K = t;
            var Be = l;
            switch (he.tag) {
              case 1:
                if (((oe = he.payload), typeof oe == 'function')) {
                  P = oe.call(Be, P, K);
                  break e;
                }
                P = oe;
                break e;
              case 3:
                oe.flags = (oe.flags & -65537) | 128;
              case 0:
                if (
                  ((oe = he.payload),
                  (K = typeof oe == 'function' ? oe.call(Be, P, K) : oe),
                  K == null)
                )
                  break e;
                P = g({}, P, K);
                break e;
              case 2:
                xl = !0;
            }
          }
          ((K = A.callback),
            K !== null &&
              ((e.flags |= 64),
              F && (e.flags |= 8192),
              (F = a.callbacks),
              F === null ? (a.callbacks = [K]) : F.push(K)));
        } else
          ((F = { lane: K, tag: A.tag, payload: A.payload, callback: A.callback, next: null }),
            W === null ? ((Z = W = F), (H = P)) : (W = W.next = F),
            (p |= K));
        if (((A = A.next), A === null)) {
          if (((A = a.shared.pending), A === null)) break;
          ((F = A),
            (A = F.next),
            (F.next = null),
            (a.lastBaseUpdate = F),
            (a.shared.pending = null));
        }
      } while (!0);
      (W === null && (H = P),
        (a.baseState = H),
        (a.firstBaseUpdate = Z),
        (a.lastBaseUpdate = W),
        u === null && (a.shared.lanes = 0),
        (Rl |= p),
        (e.lanes = p),
        (e.memoizedState = P));
    }
  }
  function _f(e, t) {
    if (typeof e != 'function') throw Error(E(191, e));
    e.call(t);
  }
  function Lf(e, t) {
    var l = e.callbacks;
    if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) _f(l[e], t);
  }
  var Hn = N(null),
    ji = N(0);
  function jf(e, t) {
    ((e = ul), te(ji, e), te(Hn, t), (ul = e | t.baseLanes));
  }
  function Br() {
    (te(ji, ul), te(Hn, Hn.current));
  }
  function Ur() {
    ((ul = ji.current), J(Hn), J(ji));
  }
  var pt = N(null),
    Ot = null;
  function bl(e) {
    var t = e.alternate;
    (te(Ge, Ge.current & 1),
      te(pt, e),
      Ot === null && (t === null || Hn.current !== null || t.memoizedState !== null) && (Ot = e));
  }
  function Nr(e) {
    (te(Ge, Ge.current), te(pt, e), Ot === null && (Ot = e));
  }
  function Yf(e) {
    e.tag === 22 ? (te(Ge, Ge.current), te(pt, e), Ot === null && (Ot = e)) : Ml();
  }
  function Ml() {
    (te(Ge, Ge.current), te(pt, pt.current));
  }
  function St(e) {
    (J(pt), Ot === e && (Ot = null), J(Ge));
  }
  var Ge = N(0);
  function Yi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || Ys(l) || Gs(l))) return t;
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
    ve = null,
    De = null,
    Xe = null,
    Gi = !1,
    _n = !1,
    tn = !1,
    Vi = 0,
    Aa = 0,
    Ln = null,
    xv = 0;
  function je() {
    throw Error(E(321));
  }
  function wr(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++) if (!gt(e[l], t[l])) return !1;
    return !0;
  }
  function Hr(e, t, l, n, a, u) {
    return (
      (Pt = u),
      (ve = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (G.H = e === null || e.memoizedState === null ? Tc : Wr),
      (tn = !1),
      (u = l(n, a)),
      (tn = !1),
      _n && (u = Vf(t, l, n, a)),
      Gf(e),
      u
    );
  }
  function Gf(e) {
    G.H = za;
    var t = De !== null && De.next !== null;
    if (((Pt = 0), (Xe = De = ve = null), (Gi = !1), (Aa = 0), (Ln = null), t)) throw Error(E(300));
    e === null || Qe || ((e = e.dependencies), e !== null && Bi(e) && (Qe = !0));
  }
  function Vf(e, t, l, n) {
    ve = e;
    var a = 0;
    do {
      if ((_n && (Ln = null), (Aa = 0), (_n = !1), 25 <= a)) throw Error(E(301));
      if (((a += 1), (Xe = De = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((G.H = bc), (u = t(l, n)));
    } while (_n);
    return u;
  }
  function Ev() {
    var e = G.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? Ca(t) : t),
      (e = e.useState()[0]),
      (De !== null ? De.memoizedState : null) !== e && (ve.flags |= 1024),
      t
    );
  }
  function _r() {
    var e = Vi !== 0;
    return ((Vi = 0), e);
  }
  function Lr(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function jr(e) {
    if (Gi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Gi = !1;
    }
    ((Pt = 0), (Xe = De = ve = null), (_n = !1), (Aa = Vi = 0), (Ln = null));
  }
  function it() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Xe === null ? (ve.memoizedState = Xe = e) : (Xe = Xe.next = e), Xe);
  }
  function Ve() {
    if (De === null) {
      var e = ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = De.next;
    var t = Xe === null ? ve.memoizedState : Xe.next;
    if (t !== null) ((Xe = t), (De = e));
    else {
      if (e === null) throw ve.alternate === null ? Error(E(467)) : Error(E(310));
      ((De = e),
        (e = {
          memoizedState: De.memoizedState,
          baseState: De.baseState,
          baseQueue: De.baseQueue,
          queue: De.queue,
          next: null,
        }),
        Xe === null ? (ve.memoizedState = Xe = e) : (Xe = Xe.next = e));
    }
    return Xe;
  }
  function qi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ca(e) {
    var t = Aa;
    return (
      (Aa += 1),
      Ln === null && (Ln = []),
      (e = Bf(Ln, e, t)),
      (t = ve),
      (Xe === null ? t.memoizedState : Xe.next) === null &&
        ((t = t.alternate), (G.H = t === null || t.memoizedState === null ? Tc : Wr)),
      e
    );
  }
  function Xi(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return Ca(e);
      if (e.$$typeof === B) return Pe(e);
    }
    throw Error(E(438, String(e)));
  }
  function Yr(e) {
    var t = null,
      l = ve.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var n = ve.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (t = {
              data: n.data.map(function (a) {
                return a.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = qi()), (ve.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++) l[n] = U;
    return (t.index++, l);
  }
  function It(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Qi(e) {
    var t = Ve();
    return Gr(t, De, e);
  }
  function Gr(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = l;
    var a = e.baseQueue,
      u = n.pending;
    if (u !== null) {
      if (a !== null) {
        var p = a.next;
        ((a.next = u.next), (u.next = p));
      }
      ((t.baseQueue = a = u), (n.pending = null));
    }
    if (((u = e.baseState), a === null)) e.memoizedState = u;
    else {
      t = a.next;
      var A = (p = null),
        H = null,
        Z = t,
        W = !1;
      do {
        var P = Z.lane & -536870913;
        if (P !== Z.lane ? (xe & P) === P : (Pt & P) === P) {
          var K = Z.revertLane;
          if (K === 0)
            (H !== null &&
              (H = H.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: Z.action,
                  hasEagerState: Z.hasEagerState,
                  eagerState: Z.eagerState,
                  next: null,
                }),
              P === Bn && (W = !0));
          else if ((Pt & K) === K) {
            ((Z = Z.next), K === Bn && (W = !0));
            continue;
          } else
            ((P = {
              lane: 0,
              revertLane: Z.revertLane,
              gesture: null,
              action: Z.action,
              hasEagerState: Z.hasEagerState,
              eagerState: Z.eagerState,
              next: null,
            }),
              H === null ? ((A = H = P), (p = u)) : (H = H.next = P),
              (ve.lanes |= K),
              (Rl |= K));
          ((P = Z.action), tn && l(u, P), (u = Z.hasEagerState ? Z.eagerState : l(u, P)));
        } else
          ((K = {
            lane: P,
            revertLane: Z.revertLane,
            gesture: Z.gesture,
            action: Z.action,
            hasEagerState: Z.hasEagerState,
            eagerState: Z.eagerState,
            next: null,
          }),
            H === null ? ((A = H = K), (p = u)) : (H = H.next = K),
            (ve.lanes |= P),
            (Rl |= P));
        Z = Z.next;
      } while (Z !== null && Z !== t);
      if (
        (H === null ? (p = u) : (H.next = A),
        !gt(u, e.memoizedState) && ((Qe = !0), W && ((l = Un), l !== null)))
      )
        throw l;
      ((e.memoizedState = u), (e.baseState = p), (e.baseQueue = H), (n.lastRenderedState = u));
    }
    return (a === null && (n.lanes = 0), [e.memoizedState, n.dispatch]);
  }
  function Vr(e) {
    var t = Ve(),
      l = t.queue;
    if (l === null) throw Error(E(311));
    l.lastRenderedReducer = e;
    var n = l.dispatch,
      a = l.pending,
      u = t.memoizedState;
    if (a !== null) {
      l.pending = null;
      var p = (a = a.next);
      do ((u = e(u, p.action)), (p = p.next));
      while (p !== a);
      (gt(u, t.memoizedState) || (Qe = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, n];
  }
  function qf(e, t, l) {
    var n = ve,
      a = Ve(),
      u = Te;
    if (u) {
      if (l === void 0) throw Error(E(407));
      l = l();
    } else l = t();
    var p = !gt((De || a).memoizedState, l);
    if (
      (p && ((a.memoizedState = l), (Qe = !0)),
      (a = a.queue),
      Qr(Zf.bind(null, n, a, e), [e]),
      a.getSnapshot !== t || p || (Xe !== null && Xe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        jn(9, { destroy: void 0 }, Qf.bind(null, n, a, l, t), null),
        Ne === null)
      )
        throw Error(E(349));
      u || (Pt & 127) !== 0 || Xf(n, t, l);
    }
    return l;
  }
  function Xf(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = ve.updateQueue),
      t === null
        ? ((t = qi()), (ve.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function Qf(e, t, l, n) {
    ((t.value = l), (t.getSnapshot = n), Kf(t) && Jf(e));
  }
  function Zf(e, t, l) {
    return l(function () {
      Kf(t) && Jf(e);
    });
  }
  function Kf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !gt(e, l);
    } catch {
      return !0;
    }
  }
  function Jf(e) {
    var t = Kl(e, 2);
    t !== null && dt(t, e, 2);
  }
  function qr(e) {
    var t = it();
    if (typeof e == 'function') {
      var l = e;
      if (((e = l()), tn)) {
        hl(!0);
        try {
          l();
        } finally {
          hl(!1);
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
  function Ff(e, t, l, n) {
    return ((e.baseState = l), Gr(e, De, typeof n == 'function' ? n : It));
  }
  function Tv(e, t, l, n, a) {
    if (Ji(e)) throw Error(E(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: a,
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
        n(u),
        (l = t.pending),
        l === null
          ? ((u.next = t.pending = u), $f(t, u))
          : ((u.next = l.next), (t.pending = l.next = u)));
    }
  }
  function $f(e, t) {
    var l = t.action,
      n = t.payload,
      a = e.state;
    if (t.isTransition) {
      var u = G.T,
        p = {};
      G.T = p;
      try {
        var A = l(a, n),
          H = G.S;
        (H !== null && H(p, A), Wf(e, t, A));
      } catch (Z) {
        Xr(e, t, Z);
      } finally {
        (u !== null && p.types !== null && (u.types = p.types), (G.T = u));
      }
    } else
      try {
        ((u = l(a, n)), Wf(e, t, u));
      } catch (Z) {
        Xr(e, t, Z);
      }
  }
  function Wf(e, t, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function'
      ? l.then(
          function (n) {
            kf(e, t, n);
          },
          function (n) {
            return Xr(e, t, n);
          }
        )
      : kf(e, t, l);
  }
  function kf(e, t, l) {
    ((t.status = 'fulfilled'),
      (t.value = l),
      Pf(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next), l === t ? (e.pending = null) : ((l = l.next), (t.next = l), $f(e, l))));
  }
  function Xr(e, t, l) {
    var n = e.pending;
    if (((e.pending = null), n !== null)) {
      n = n.next;
      do ((t.status = 'rejected'), (t.reason = l), Pf(t), (t = t.next));
      while (t !== n);
    }
    e.action = null;
  }
  function Pf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function If(e, t) {
    return t;
  }
  function ec(e, t) {
    if (Te) {
      var l = Ne.formState;
      if (l !== null) {
        e: {
          var n = ve;
          if (Te) {
            if (we) {
              t: {
                for (var a = we, u = Dt; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break t;
                  }
                  if (((a = Bt(a.nextSibling)), a === null)) {
                    a = null;
                    break t;
                  }
                }
                ((u = a.data), (a = u === 'F!' || u === 'F' ? a : null));
              }
              if (a) {
                ((we = Bt(a.nextSibling)), (n = a.data === 'F!'));
                break e;
              }
            }
            pl(n);
          }
          n = !1;
        }
        n && (t = l[0]);
      }
    }
    return (
      (l = it()),
      (l.memoizedState = l.baseState = t),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: If,
        lastRenderedState: t,
      }),
      (l.queue = n),
      (l = Sc.bind(null, ve, n)),
      (n.dispatch = l),
      (n = qr(!1)),
      (u = $r.bind(null, ve, !1, n.queue)),
      (n = it()),
      (a = { state: t, dispatch: null, action: e, pending: null }),
      (n.queue = a),
      (l = Tv.bind(null, ve, a, u, l)),
      (a.dispatch = l),
      (n.memoizedState = e),
      [t, l, !1]
    );
  }
  function tc(e) {
    var t = Ve();
    return lc(t, De, e);
  }
  function lc(e, t, l) {
    if (
      ((t = Gr(e, t, If)[0]),
      (e = Qi(It)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var n = Ca(t);
      } catch (p) {
        throw p === Nn ? wi : p;
      }
    else n = t;
    t = Ve();
    var a = t.queue,
      u = a.dispatch;
    return (
      l !== t.memoizedState &&
        ((ve.flags |= 2048), jn(9, { destroy: void 0 }, bv.bind(null, a, l), null)),
      [n, u, e]
    );
  }
  function bv(e, t) {
    e.action = t;
  }
  function nc(e) {
    var t = Ve(),
      l = De;
    if (l !== null) return lc(t, l, e);
    (Ve(), (t = t.memoizedState), (l = Ve()));
    var n = l.queue.dispatch;
    return ((l.memoizedState = e), [t, n, !1]);
  }
  function jn(e, t, l, n) {
    return (
      (e = { tag: e, create: l, deps: n, inst: t, next: null }),
      (t = ve.updateQueue),
      t === null && ((t = qi()), (ve.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((n = l.next), (l.next = e), (e.next = n), (t.lastEffect = e)),
      e
    );
  }
  function ac() {
    return Ve().memoizedState;
  }
  function Zi(e, t, l, n) {
    var a = it();
    ((ve.flags |= e),
      (a.memoizedState = jn(1 | t, { destroy: void 0 }, l, n === void 0 ? null : n)));
  }
  function Ki(e, t, l, n) {
    var a = Ve();
    n = n === void 0 ? null : n;
    var u = a.memoizedState.inst;
    De !== null && n !== null && wr(n, De.memoizedState.deps)
      ? (a.memoizedState = jn(t, u, l, n))
      : ((ve.flags |= e), (a.memoizedState = jn(1 | t, u, l, n)));
  }
  function ic(e, t) {
    Zi(8390656, 8, e, t);
  }
  function Qr(e, t) {
    Ki(2048, 8, e, t);
  }
  function Mv(e) {
    ve.flags |= 4;
    var t = ve.updateQueue;
    if (t === null) ((t = qi()), (ve.updateQueue = t), (t.events = [e]));
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function uc(e) {
    var t = Ve().memoizedState;
    return (
      Mv({ ref: t, nextImpl: e }),
      function () {
        if ((Ae & 2) !== 0) throw Error(E(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function rc(e, t) {
    return Ki(4, 2, e, t);
  }
  function sc(e, t) {
    return Ki(4, 4, e, t);
  }
  function oc(e, t) {
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
  function fc(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), Ki(4, 4, oc.bind(null, t, e), l));
  }
  function Zr() {}
  function cc(e, t) {
    var l = Ve();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && wr(t, n[1]) ? n[0] : ((l.memoizedState = [e, t]), e);
  }
  function dc(e, t) {
    var l = Ve();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && wr(t, n[1])) return n[0];
    if (((n = e()), tn)) {
      hl(!0);
      try {
        e();
      } finally {
        hl(!1);
      }
    }
    return ((l.memoizedState = [n, t]), n);
  }
  function Kr(e, t, l) {
    return l === void 0 || ((Pt & 1073741824) !== 0 && (xe & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = hd()), (ve.lanes |= e), (Rl |= e), l);
  }
  function hc(e, t, l, n) {
    return gt(l, t)
      ? l
      : Hn.current !== null
        ? ((e = Kr(e, l, n)), gt(e, t) || (Qe = !0), e)
        : (Pt & 42) === 0 || ((Pt & 1073741824) !== 0 && (xe & 261930) === 0)
          ? ((Qe = !0), (e.memoizedState = l))
          : ((e = hd()), (ve.lanes |= e), (Rl |= e), t);
  }
  function mc(e, t, l, n, a) {
    var u = X.p;
    X.p = u !== 0 && 8 > u ? u : 8;
    var p = G.T,
      A = {};
    ((G.T = A), $r(e, !1, t, l));
    try {
      var H = a(),
        Z = G.S;
      if (
        (Z !== null && Z(A, H), H !== null && typeof H == 'object' && typeof H.then == 'function')
      ) {
        var W = Sv(H, n);
        Ra(e, t, W, Tt(e));
      } else Ra(e, t, n, Tt(e));
    } catch (P) {
      Ra(e, t, { then: function () {}, status: 'rejected', reason: P }, Tt());
    } finally {
      ((X.p = u), p !== null && A.types !== null && (p.types = A.types), (G.T = p));
    }
  }
  function Av() {}
  function Jr(e, t, l, n) {
    if (e.tag !== 5) throw Error(E(476));
    var a = vc(e).queue;
    mc(
      e,
      a,
      t,
      I,
      l === null
        ? Av
        : function () {
            return (gc(e), l(n));
          }
    );
  }
  function vc(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: It,
        lastRenderedState: I,
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
  function gc(e) {
    var t = vc(e);
    (t.next === null && (t = e.alternate.memoizedState), Ra(e, t.next.queue, {}, Tt()));
  }
  function Fr() {
    return Pe(Qa);
  }
  function yc() {
    return Ve().memoizedState;
  }
  function pc() {
    return Ve().memoizedState;
  }
  function Cv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Tt();
          e = El(l);
          var n = Tl(t, e, l);
          (n !== null && (dt(n, t, l), Ta(n, t, l)), (t = { cache: br() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Rv(e, t, l) {
    var n = Tt();
    ((l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ji(e) ? xc(t, l) : ((l = dr(e, t, l, n)), l !== null && (dt(l, e, n), Ec(l, t, n))));
  }
  function Sc(e, t, l) {
    var n = Tt();
    Ra(e, t, l, n);
  }
  function Ra(e, t, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ji(e)) xc(t, a);
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
          if (((a.hasEagerState = !0), (a.eagerState = A), gt(A, p)))
            return (Ri(e, t, a, 0), Ne === null && Ci(), !1);
        } catch {
        } finally {
        }
      if (((l = dr(e, t, a, n)), l !== null)) return (dt(l, e, n), Ec(l, t, n), !0);
    }
    return !1;
  }
  function $r(e, t, l, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: Rs(),
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ji(e))
    ) {
      if (t) throw Error(E(479));
    } else ((t = dr(e, l, n, 2)), t !== null && dt(t, e, 2));
  }
  function Ji(e) {
    var t = e.alternate;
    return e === ve || (t !== null && t === ve);
  }
  function xc(e, t) {
    _n = Gi = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (e.pending = t));
  }
  function Ec(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (l |= n), (t.lanes = l), Ao(e, l));
    }
  }
  var za = {
    readContext: Pe,
    use: Xi,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useLayoutEffect: je,
    useInsertionEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useSyncExternalStore: je,
    useId: je,
    useHostTransitionStatus: je,
    useFormState: je,
    useActionState: je,
    useOptimistic: je,
    useMemoCache: je,
    useCacheRefresh: je,
  };
  za.useEffectEvent = je;
  var Tc = {
      readContext: Pe,
      use: Xi,
      useCallback: function (e, t) {
        return ((it().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Pe,
      useEffect: ic,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null), Zi(4194308, 4, oc.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return Zi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Zi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = it();
        t = t === void 0 ? null : t;
        var n = e();
        if (tn) {
          hl(!0);
          try {
            e();
          } finally {
            hl(!1);
          }
        }
        return ((l.memoizedState = [n, t]), n);
      },
      useReducer: function (e, t, l) {
        var n = it();
        if (l !== void 0) {
          var a = l(t);
          if (tn) {
            hl(!0);
            try {
              l(t);
            } finally {
              hl(!1);
            }
          }
        } else a = t;
        return (
          (n.memoizedState = n.baseState = a),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: a,
          }),
          (n.queue = e),
          (e = e.dispatch = Rv.bind(null, ve, e)),
          [n.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = it();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = qr(e);
        var t = e.queue,
          l = Sc.bind(null, ve, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: Zr,
      useDeferredValue: function (e, t) {
        var l = it();
        return Kr(l, e, t);
      },
      useTransition: function () {
        var e = qr(!1);
        return ((e = mc.bind(null, ve, e.queue, !0, !1)), (it().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, l) {
        var n = ve,
          a = it();
        if (Te) {
          if (l === void 0) throw Error(E(407));
          l = l();
        } else {
          if (((l = t()), Ne === null)) throw Error(E(349));
          (xe & 127) !== 0 || Xf(n, t, l);
        }
        a.memoizedState = l;
        var u = { value: l, getSnapshot: t };
        return (
          (a.queue = u),
          ic(Zf.bind(null, n, u, e), [e]),
          (n.flags |= 2048),
          jn(9, { destroy: void 0 }, Qf.bind(null, n, u, l, t), null),
          l
        );
      },
      useId: function () {
        var e = it(),
          t = Ne.identifierPrefix;
        if (Te) {
          var l = Gt,
            n = Yt;
          ((l = (n & ~(1 << (32 - vt(n) - 1))).toString(32) + l),
            (t = '_' + t + 'R_' + l),
            (l = Vi++),
            0 < l && (t += 'H' + l.toString(32)),
            (t += '_'));
        } else ((l = xv++), (t = '_' + t + 'r_' + l.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Fr,
      useFormState: ec,
      useActionState: ec,
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
        return ((t.queue = l), (t = $r.bind(null, ve, !0, l)), (l.dispatch = t), [e, t]);
      },
      useMemoCache: Yr,
      useCacheRefresh: function () {
        return (it().memoizedState = Cv.bind(null, ve));
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
    Wr = {
      readContext: Pe,
      use: Xi,
      useCallback: cc,
      useContext: Pe,
      useEffect: Qr,
      useImperativeHandle: fc,
      useInsertionEffect: rc,
      useLayoutEffect: sc,
      useMemo: dc,
      useReducer: Qi,
      useRef: ac,
      useState: function () {
        return Qi(It);
      },
      useDebugValue: Zr,
      useDeferredValue: function (e, t) {
        var l = Ve();
        return hc(l, De.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Qi(It)[0],
          t = Ve().memoizedState;
        return [typeof e == 'boolean' ? e : Ca(e), t];
      },
      useSyncExternalStore: qf,
      useId: yc,
      useHostTransitionStatus: Fr,
      useFormState: tc,
      useActionState: tc,
      useOptimistic: function (e, t) {
        var l = Ve();
        return Ff(l, De, e, t);
      },
      useMemoCache: Yr,
      useCacheRefresh: pc,
    };
  Wr.useEffectEvent = uc;
  var bc = {
    readContext: Pe,
    use: Xi,
    useCallback: cc,
    useContext: Pe,
    useEffect: Qr,
    useImperativeHandle: fc,
    useInsertionEffect: rc,
    useLayoutEffect: sc,
    useMemo: dc,
    useReducer: Vr,
    useRef: ac,
    useState: function () {
      return Vr(It);
    },
    useDebugValue: Zr,
    useDeferredValue: function (e, t) {
      var l = Ve();
      return De === null ? Kr(l, e, t) : hc(l, De.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Vr(It)[0],
        t = Ve().memoizedState;
      return [typeof e == 'boolean' ? e : Ca(e), t];
    },
    useSyncExternalStore: qf,
    useId: yc,
    useHostTransitionStatus: Fr,
    useFormState: nc,
    useActionState: nc,
    useOptimistic: function (e, t) {
      var l = Ve();
      return De !== null ? Ff(l, De, e, t) : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: Yr,
    useCacheRefresh: pc,
  };
  bc.useEffectEvent = uc;
  function kr(e, t, l, n) {
    ((t = e.memoizedState),
      (l = l(n, t)),
      (l = l == null ? t : g({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var Pr = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var n = Tt(),
        a = El(n);
      ((a.payload = t),
        l != null && (a.callback = l),
        (t = Tl(e, a, n)),
        t !== null && (dt(t, e, n), Ta(t, e, n)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var n = Tt(),
        a = El(n);
      ((a.tag = 1),
        (a.payload = t),
        l != null && (a.callback = l),
        (t = Tl(e, a, n)),
        t !== null && (dt(t, e, n), Ta(t, e, n)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = Tt(),
        n = El(l);
      ((n.tag = 2),
        t != null && (n.callback = t),
        (t = Tl(e, n, l)),
        t !== null && (dt(t, e, l), Ta(t, e, l)));
    },
  };
  function Mc(e, t, l, n, a, u, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(n, u, p)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ma(l, n) || !ma(a, u)
          : !0
    );
  }
  function Ac(e, t, l, n) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(l, n),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(l, n),
      t.state !== e && Pr.enqueueReplaceState(t, t.state, null));
  }
  function ln(e, t) {
    var l = t;
    if ('ref' in t) {
      l = {};
      for (var n in t) n !== 'ref' && (l[n] = t[n]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = g({}, l));
      for (var a in e) l[a] === void 0 && (l[a] = e[a]);
    }
    return l;
  }
  function Cc(e) {
    Ai(e);
  }
  function Rc(e) {
    console.error(e);
  }
  function zc(e) {
    Ai(e);
  }
  function Fi(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Dc(e, t, l) {
    try {
      var n = e.onCaughtError;
      n(l.value, { componentStack: l.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Ir(e, t, l) {
    return (
      (l = El(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Fi(e, t);
      }),
      l
    );
  }
  function Oc(e) {
    return ((e = El(e)), (e.tag = 3), e);
  }
  function Bc(e, t, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == 'function') {
      var u = n.value;
      ((e.payload = function () {
        return a(u);
      }),
        (e.callback = function () {
          Dc(t, l, n);
        }));
    }
    var p = l.stateNode;
    p !== null &&
      typeof p.componentDidCatch == 'function' &&
      (e.callback = function () {
        (Dc(t, l, n),
          typeof a != 'function' && (zl === null ? (zl = new Set([this])) : zl.add(this)));
        var A = n.stack;
        this.componentDidCatch(n.value, { componentStack: A !== null ? A : '' });
      });
  }
  function zv(e, t, l, n, a) {
    if (((l.flags |= 32768), n !== null && typeof n == 'object' && typeof n.then == 'function')) {
      if (((t = l.alternate), t !== null && On(t, l, a, !0), (l = pt.current), l !== null)) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Ot === null ? uu() : l.alternate === null && Ye === 0 && (Ye = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = a),
              n === Hi
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([n])) : t.add(n),
                  Ms(e, n, a)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              n === Hi
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([n]) }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue), l === null ? (t.retryQueue = new Set([n])) : l.add(n)),
                  Ms(e, n, a)),
              !1
            );
        }
        throw Error(E(435, l.tag));
      }
      return (Ms(e, n, a), uu(), !1);
    }
    if (Te)
      return (
        (t = pt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = a),
            n !== pr && ((e = Error(E(422), { cause: n })), ya(Ct(e, l))))
          : (n !== pr && ((t = Error(E(423), { cause: n })), ya(Ct(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (a &= -a),
            (e.lanes |= a),
            (n = Ct(n, l)),
            (a = Ir(e.stateNode, n, a)),
            Dr(e, a),
            Ye !== 4 && (Ye = 2)),
        !1
      );
    var u = Error(E(520), { cause: n });
    if (((u = Ct(u, l)), _a === null ? (_a = [u]) : _a.push(u), Ye !== 4 && (Ye = 2), t === null))
      return !0;
    ((n = Ct(n, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = a & -a),
            (l.lanes |= e),
            (e = Ir(l.stateNode, n, e)),
            Dr(l, e),
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
              (a &= -a),
              (l.lanes |= a),
              (a = Oc(a)),
              Bc(a, e, l, n),
              Dr(l, a),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var es = Error(E(461)),
    Qe = !1;
  function Ie(e, t, l, n) {
    t.child = e === null ? Hf(t, null, l, n) : en(t, e.child, l, n);
  }
  function Uc(e, t, l, n, a) {
    l = l.render;
    var u = t.ref;
    if ('ref' in n) {
      var p = {};
      for (var A in n) A !== 'ref' && (p[A] = n[A]);
    } else p = n;
    return (
      Wl(t),
      (n = Hr(e, t, l, p, u, a)),
      (A = _r()),
      e !== null && !Qe
        ? (Lr(e, t, a), el(e, t, a))
        : (Te && A && gr(t), (t.flags |= 1), Ie(e, t, n, a), t.child)
    );
  }
  function Nc(e, t, l, n, a) {
    if (e === null) {
      var u = l.type;
      return typeof u == 'function' && !hr(u) && u.defaultProps === void 0 && l.compare === null
        ? ((t.tag = 15), (t.type = u), wc(e, t, u, n, a))
        : ((e = Di(l.type, null, n, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !ss(e, a))) {
      var p = u.memoizedProps;
      if (((l = l.compare), (l = l !== null ? l : ma), l(p, n) && e.ref === t.ref))
        return el(e, t, a);
    }
    return ((t.flags |= 1), (e = Ft(u, n)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function wc(e, t, l, n, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (ma(u, n) && e.ref === t.ref)
        if (((Qe = !1), (t.pendingProps = n = u), ss(e, a))) (e.flags & 131072) !== 0 && (Qe = !0);
        else return ((t.lanes = e.lanes), el(e, t, a));
    }
    return ts(e, t, l, n, a);
  }
  function Hc(e, t, l, n) {
    var a = n.children,
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
      n.mode === 'hidden')
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (n = t.child = e.child, a = 0; n !== null; )
            ((a = a | n.lanes | n.childLanes), (n = n.sibling));
          n = a & ~u;
        } else ((n = 0), (t.child = null));
        return _c(e, t, u, l, n);
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ni(t, u !== null ? u.cachePool : null),
          u !== null ? jf(t, u) : Br(),
          Yf(t));
      else return ((n = t.lanes = 536870912), _c(e, t, u !== null ? u.baseLanes | l : l, l, n));
    } else
      u !== null
        ? (Ni(t, u.cachePool), jf(t, u), Ml(), (t.memoizedState = null))
        : (e !== null && Ni(t, null), Br(), Ml());
    return (Ie(e, t, a, l), t.child);
  }
  function Da(e, t) {
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
  function _c(e, t, l, n, a) {
    var u = Ar();
    return (
      (u = u === null ? null : { parent: qe._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && Ni(t, null),
      Br(),
      Yf(t),
      e !== null && On(e, t, n, !0),
      (t.childLanes = a),
      null
    );
  }
  function $i(e, t) {
    return (
      (t = ki({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Lc(e, t, l) {
    return (
      en(t, e.child, null, l),
      (e = $i(t, t.pendingProps)),
      (e.flags |= 2),
      St(t),
      (t.memoizedState = null),
      e
    );
  }
  function Dv(e, t, l) {
    var n = t.pendingProps,
      a = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Te) {
        if (n.mode === 'hidden') return ((e = $i(t, n)), (t.lanes = 536870912), Da(null, e));
        if (
          (Nr(t),
          (e = we)
            ? ((e = $d(e, Dt)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: gl !== null ? { id: Yt, overflow: Gt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = xf(e)),
                (l.return = t),
                (t.child = l),
                (ke = t),
                (we = null)))
            : (e = null),
          e === null)
        )
          throw pl(t);
        return ((t.lanes = 536870912), null);
      }
      return $i(t, n);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var p = u.dehydrated;
      if ((Nr(t), a))
        if (t.flags & 256) ((t.flags &= -257), (t = Lc(e, t, l)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(E(558));
      else if ((Qe || On(e, t, l, !1), (a = (l & e.childLanes) !== 0), Qe || a)) {
        if (((n = Ne), n !== null && ((p = Co(n, l)), p !== 0 && p !== u.retryLane)))
          throw ((u.retryLane = p), Kl(e, p), dt(n, e, p), es);
        (uu(), (t = Lc(e, t, l)));
      } else
        ((e = u.treeContext),
          (we = Bt(p.nextSibling)),
          (ke = t),
          (Te = !0),
          (yl = null),
          (Dt = !1),
          e !== null && bf(t, e),
          (t = $i(t, n)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Ft(e.child, { mode: n.mode, children: n.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Wi(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(E(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function ts(e, t, l, n, a) {
    return (
      Wl(t),
      (l = Hr(e, t, l, n, void 0, a)),
      (n = _r()),
      e !== null && !Qe
        ? (Lr(e, t, a), el(e, t, a))
        : (Te && n && gr(t), (t.flags |= 1), Ie(e, t, l, a), t.child)
    );
  }
  function jc(e, t, l, n, a, u) {
    return (
      Wl(t),
      (t.updateQueue = null),
      (l = Vf(t, n, l, a)),
      Gf(e),
      (n = _r()),
      e !== null && !Qe
        ? (Lr(e, t, u), el(e, t, u))
        : (Te && n && gr(t), (t.flags |= 1), Ie(e, t, l, u), t.child)
    );
  }
  function Yc(e, t, l, n, a) {
    if ((Wl(t), t.stateNode === null)) {
      var u = Cn,
        p = l.contextType;
      (typeof p == 'object' && p !== null && (u = Pe(p)),
        (u = new l(n, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Pr),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = n),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Rr(t),
        (p = l.contextType),
        (u.context = typeof p == 'object' && p !== null ? Pe(p) : Cn),
        (u.state = t.memoizedState),
        (p = l.getDerivedStateFromProps),
        typeof p == 'function' && (kr(t, l, p, n), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((p = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          p !== u.state && Pr.enqueueReplaceState(u, u.state, null),
          Ma(t, n, u, a),
          ba(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (n = !0));
    } else if (e === null) {
      u = t.stateNode;
      var A = t.memoizedProps,
        H = ln(l, A);
      u.props = H;
      var Z = u.context,
        W = l.contextType;
      ((p = Cn), typeof W == 'object' && W !== null && (p = Pe(W)));
      var P = l.getDerivedStateFromProps;
      ((W = typeof P == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (A = t.pendingProps !== A),
        W ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((A || Z !== p) && Ac(t, u, n, p)),
        (xl = !1));
      var K = t.memoizedState;
      ((u.state = K),
        Ma(t, n, u, a),
        ba(),
        (Z = t.memoizedState),
        A || K !== Z || xl
          ? (typeof P == 'function' && (kr(t, l, P, n), (Z = t.memoizedState)),
            (H = xl || Mc(t, l, H, n, K, Z, p))
              ? (W ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = n),
                (t.memoizedState = Z)),
            (u.props = n),
            (u.state = Z),
            (u.context = p),
            (n = H))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (n = !1)));
    } else {
      ((u = t.stateNode),
        zr(e, t),
        (p = t.memoizedProps),
        (W = ln(l, p)),
        (u.props = W),
        (P = t.pendingProps),
        (K = u.context),
        (Z = l.contextType),
        (H = Cn),
        typeof Z == 'object' && Z !== null && (H = Pe(Z)),
        (A = l.getDerivedStateFromProps),
        (Z = typeof A == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((p !== P || K !== H) && Ac(t, u, n, H)),
        (xl = !1),
        (K = t.memoizedState),
        (u.state = K),
        Ma(t, n, u, a),
        ba());
      var F = t.memoizedState;
      p !== P || K !== F || xl || (e !== null && e.dependencies !== null && Bi(e.dependencies))
        ? (typeof A == 'function' && (kr(t, l, A, n), (F = t.memoizedState)),
          (W =
            xl ||
            Mc(t, l, W, n, K, F, H) ||
            (e !== null && e.dependencies !== null && Bi(e.dependencies)))
            ? (Z ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(n, F, H),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(n, F, H)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (p === e.memoizedProps && K === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (p === e.memoizedProps && K === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = F)),
          (u.props = n),
          (u.state = F),
          (u.context = H),
          (n = W))
        : (typeof u.componentDidUpdate != 'function' ||
            (p === e.memoizedProps && K === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (p === e.memoizedProps && K === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1));
    }
    return (
      (u = n),
      Wi(e, t),
      (n = (t.flags & 128) !== 0),
      u || n
        ? ((u = t.stateNode),
          (l = n && typeof l.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && n
            ? ((t.child = en(t, e.child, null, a)), (t.child = en(t, null, l, a)))
            : Ie(e, t, l, a),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = el(e, t, a)),
      e
    );
  }
  function Gc(e, t, l, n) {
    return (Fl(), (t.flags |= 256), Ie(e, t, l, n), t.child);
  }
  var ls = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function ns(e) {
    return { baseLanes: e, cachePool: Df() };
  }
  function as(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= Et), e);
  }
  function Vc(e, t, l) {
    var n = t.pendingProps,
      a = !1,
      u = (t.flags & 128) !== 0,
      p;
    if (
      ((p = u) || (p = e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0),
      p && ((a = !0), (t.flags &= -129)),
      (p = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Te) {
        if (
          (a ? bl(t) : Ml(),
          (e = we)
            ? ((e = $d(e, Dt)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: gl !== null ? { id: Yt, overflow: Gt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = xf(e)),
                (l.return = t),
                (t.child = l),
                (ke = t),
                (we = null)))
            : (e = null),
          e === null)
        )
          throw pl(t);
        return (Gs(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var A = n.children;
      return (
        (n = n.fallback),
        a
          ? (Ml(),
            (a = t.mode),
            (A = ki({ mode: 'hidden', children: A }, a)),
            (n = Jl(n, a, l, null)),
            (A.return = t),
            (n.return = t),
            (A.sibling = n),
            (t.child = A),
            (n = t.child),
            (n.memoizedState = ns(l)),
            (n.childLanes = as(e, p, l)),
            (t.memoizedState = ls),
            Da(null, n))
          : (bl(t), is(t, A))
      );
    }
    var H = e.memoizedState;
    if (H !== null && ((A = H.dehydrated), A !== null)) {
      if (u)
        t.flags & 256
          ? (bl(t), (t.flags &= -257), (t = us(e, t, l)))
          : t.memoizedState !== null
            ? (Ml(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Ml(),
              (A = n.fallback),
              (a = t.mode),
              (n = ki({ mode: 'visible', children: n.children }, a)),
              (A = Jl(A, a, l, null)),
              (A.flags |= 2),
              (n.return = t),
              (A.return = t),
              (n.sibling = A),
              (t.child = n),
              en(t, e.child, null, l),
              (n = t.child),
              (n.memoizedState = ns(l)),
              (n.childLanes = as(e, p, l)),
              (t.memoizedState = ls),
              (t = Da(null, n)));
      else if ((bl(t), Gs(A))) {
        if (((p = A.nextSibling && A.nextSibling.dataset), p)) var Z = p.dgst;
        ((p = Z),
          (n = Error(E(419))),
          (n.stack = ''),
          (n.digest = p),
          ya({ value: n, source: null, stack: null }),
          (t = us(e, t, l)));
      } else if ((Qe || On(e, t, l, !1), (p = (l & e.childLanes) !== 0), Qe || p)) {
        if (((p = Ne), p !== null && ((n = Co(p, l)), n !== 0 && n !== H.retryLane)))
          throw ((H.retryLane = n), Kl(e, n), dt(p, e, n), es);
        (Ys(A) || uu(), (t = us(e, t, l)));
      } else
        Ys(A)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = H.treeContext),
            (we = Bt(A.nextSibling)),
            (ke = t),
            (Te = !0),
            (yl = null),
            (Dt = !1),
            e !== null && bf(t, e),
            (t = is(t, n.children)),
            (t.flags |= 4096));
      return t;
    }
    return a
      ? (Ml(),
        (A = n.fallback),
        (a = t.mode),
        (H = e.child),
        (Z = H.sibling),
        (n = Ft(H, { mode: 'hidden', children: n.children })),
        (n.subtreeFlags = H.subtreeFlags & 65011712),
        Z !== null ? (A = Ft(Z, A)) : ((A = Jl(A, a, l, null)), (A.flags |= 2)),
        (A.return = t),
        (n.return = t),
        (n.sibling = A),
        (t.child = n),
        Da(null, n),
        (n = t.child),
        (A = e.child.memoizedState),
        A === null
          ? (A = ns(l))
          : ((a = A.cachePool),
            a !== null
              ? ((H = qe._currentValue), (a = a.parent !== H ? { parent: H, pool: H } : a))
              : (a = Df()),
            (A = { baseLanes: A.baseLanes | l, cachePool: a })),
        (n.memoizedState = A),
        (n.childLanes = as(e, p, l)),
        (t.memoizedState = ls),
        Da(e.child, n))
      : (bl(t),
        (l = e.child),
        (e = l.sibling),
        (l = Ft(l, { mode: 'visible', children: n.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((p = t.deletions), p === null ? ((t.deletions = [e]), (t.flags |= 16)) : p.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function is(e, t) {
    return ((t = ki({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function ki(e, t) {
    return ((e = yt(22, e, null, t)), (e.lanes = 0), e);
  }
  function us(e, t, l) {
    return (
      en(t, e.child, null, l),
      (e = is(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function qc(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    (n !== null && (n.lanes |= t), Er(e.return, t, l));
  }
  function rs(e, t, l, n, a, u) {
    var p = e.memoizedState;
    p === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: l,
          tailMode: a,
          treeForkCount: u,
        })
      : ((p.isBackwards = t),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = n),
        (p.tail = l),
        (p.tailMode = a),
        (p.treeForkCount = u));
  }
  function Xc(e, t, l) {
    var n = t.pendingProps,
      a = n.revealOrder,
      u = n.tail;
    n = n.children;
    var p = Ge.current,
      A = (p & 2) !== 0;
    if (
      (A ? ((p = (p & 1) | 2), (t.flags |= 128)) : (p &= 1),
      te(Ge, p),
      Ie(e, t, n, l),
      (n = Te ? ga : 0),
      !A && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qc(e, l, t);
        else if (e.tag === 19) qc(e, l, t);
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
    switch (a) {
      case 'forwards':
        for (l = t.child, a = null; l !== null; )
          ((e = l.alternate), e !== null && Yi(e) === null && (a = l), (l = l.sibling));
        ((l = a),
          l === null ? ((a = t.child), (t.child = null)) : ((a = l.sibling), (l.sibling = null)),
          rs(t, !1, a, l, u, n));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (l = null, a = t.child, t.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && Yi(e) === null)) {
            t.child = a;
            break;
          }
          ((e = a.sibling), (a.sibling = l), (l = a), (a = e));
        }
        rs(t, !0, l, null, u, n);
        break;
      case 'together':
        rs(t, !1, null, null, void 0, n);
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
        if ((On(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(E(153));
    if (t.child !== null) {
      for (e = t.child, l = Ft(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        ((e = e.sibling), (l = l.sibling = Ft(e, e.pendingProps)), (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function ss(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Bi(e)));
  }
  function Ov(e, t, l) {
    switch (t.tag) {
      case 3:
        (ye(t, t.stateNode.containerInfo), Sl(t, qe, e.memoizedState.cache), Fl());
        break;
      case 27:
      case 5:
        tt(t);
        break;
      case 4:
        ye(t, t.stateNode.containerInfo);
        break;
      case 10:
        Sl(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Nr(t), null);
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null
            ? (bl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? Vc(e, t, l)
              : (bl(t), (e = el(e, t, l)), e !== null ? e.sibling : null);
        bl(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (
          ((n = (l & t.childLanes) !== 0),
          n || (On(e, t, l, !1), (n = (l & t.childLanes) !== 0)),
          a)
        ) {
          if (n) return Xc(e, t, l);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          te(Ge, Ge.current),
          n)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Hc(e, t, l, t.pendingProps));
      case 24:
        Sl(t, qe, e.memoizedState.cache);
    }
    return el(e, t, l);
  }
  function Qc(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Qe = !0;
      else {
        if (!ss(e, l) && (t.flags & 128) === 0) return ((Qe = !1), Ov(e, t, l));
        Qe = (e.flags & 131072) !== 0;
      }
    else ((Qe = !1), Te && (t.flags & 1048576) !== 0 && Tf(t, ga, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (((e = Pl(t.elementType)), (t.type = e), typeof e == 'function'))
            hr(e)
              ? ((n = ln(e, n)), (t.tag = 1), (t = Yc(null, t, e, n, l)))
              : ((t.tag = 0), (t = ts(null, t, e, n, l)));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === j) {
                ((t.tag = 11), (t = Uc(null, t, e, n, l)));
                break e;
              } else if (a === D) {
                ((t.tag = 14), (t = Nc(null, t, e, n, l)));
                break e;
              }
            }
            throw ((t = le(e) || e), Error(E(306, t, '')));
          }
        }
        return t;
      case 0:
        return ts(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((n = t.type), (a = ln(n, t.pendingProps)), Yc(e, t, n, a, l));
      case 3:
        e: {
          if ((ye(t, t.stateNode.containerInfo), e === null)) throw Error(E(387));
          n = t.pendingProps;
          var u = t.memoizedState;
          ((a = u.element), zr(e, t), Ma(t, n, null, l));
          var p = t.memoizedState;
          if (
            ((n = p.cache),
            Sl(t, qe, n),
            n !== u.cache && Tr(t, [qe], l, !0),
            ba(),
            (n = p.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: n, isDehydrated: !1, cache: p.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Gc(e, t, n, l);
              break e;
            } else if (n !== a) {
              ((a = Ct(Error(E(424)), t)), ya(a), (t = Gc(e, t, n, l)));
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
                we = Bt(e.firstChild),
                  ke = t,
                  Te = !0,
                  yl = null,
                  Dt = !0,
                  l = Hf(t, null, n, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            }
          else {
            if ((Fl(), n === a)) {
              t = el(e, t, l);
              break e;
            }
            Ie(e, t, n, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Wi(e, t),
          e === null
            ? (l = th(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : Te ||
                ((l = t.type),
                (e = t.pendingProps),
                (n = hu(ie.current).createElement(l)),
                (n[We] = t),
                (n[ut] = e),
                et(n, l, e),
                Fe(n),
                (t.stateNode = n))
            : (t.memoizedState = th(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          tt(t),
          e === null &&
            Te &&
            ((n = t.stateNode = Pd(t.type, t.pendingProps, ie.current)),
            (ke = t),
            (Dt = !0),
            (a = we),
            Ul(t.type) ? ((Vs = a), (we = Bt(n.firstChild))) : (we = a)),
          Ie(e, t, t.pendingProps.children, l),
          Wi(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Te &&
            ((a = n = we) &&
              ((n = u0(n, t.type, t.pendingProps, Dt)),
              n !== null
                ? ((t.stateNode = n), (ke = t), (we = Bt(n.firstChild)), (Dt = !1), (a = !0))
                : (a = !1)),
            a || pl(t)),
          tt(t),
          (a = t.type),
          (u = t.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (n = u.children),
          _s(a, u) ? (n = null) : p !== null && _s(a, p) && (t.flags |= 32),
          t.memoizedState !== null && ((a = Hr(e, t, Ev, null, null, l)), (Qa._currentValue = a)),
          Wi(e, t),
          Ie(e, t, n, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            Te &&
            ((e = l = we) &&
              ((l = r0(l, t.pendingProps, Dt)),
              l !== null ? ((t.stateNode = l), (ke = t), (we = null), (e = !0)) : (e = !1)),
            e || pl(t)),
          null
        );
      case 13:
        return Vc(e, t, l);
      case 4:
        return (
          ye(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = en(t, null, n, l)) : Ie(e, t, n, l),
          t.child
        );
      case 11:
        return Uc(e, t, t.type, t.pendingProps, l);
      case 7:
        return (Ie(e, t, t.pendingProps, l), t.child);
      case 8:
        return (Ie(e, t, t.pendingProps.children, l), t.child);
      case 12:
        return (Ie(e, t, t.pendingProps.children, l), t.child);
      case 10:
        return ((n = t.pendingProps), Sl(t, t.type, n.value), Ie(e, t, n.children, l), t.child);
      case 9:
        return (
          (a = t.type._context),
          (n = t.pendingProps.children),
          Wl(t),
          (a = Pe(a)),
          (n = n(a)),
          (t.flags |= 1),
          Ie(e, t, n, l),
          t.child
        );
      case 14:
        return Nc(e, t, t.type, t.pendingProps, l);
      case 15:
        return wc(e, t, t.type, t.pendingProps, l);
      case 19:
        return Xc(e, t, l);
      case 31:
        return Dv(e, t, l);
      case 22:
        return Hc(e, t, l, t.pendingProps);
      case 24:
        return (
          Wl(t),
          (n = Pe(qe)),
          e === null
            ? ((a = Ar()),
              a === null &&
                ((a = Ne),
                (u = br()),
                (a.pooledCache = u),
                u.refCount++,
                u !== null && (a.pooledCacheLanes |= l),
                (a = u)),
              (t.memoizedState = { parent: n, cache: a }),
              Rr(t),
              Sl(t, qe, a))
            : ((e.lanes & l) !== 0 && (zr(e, t), Ma(t, null, null, l), ba()),
              (a = e.memoizedState),
              (u = t.memoizedState),
              a.parent !== n
                ? ((a = { parent: n, cache: n }),
                  (t.memoizedState = a),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
                  Sl(t, qe, n))
                : ((n = u.cache), Sl(t, qe, n), n !== a.cache && Tr(t, [qe], l, !0))),
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
  function os(e, t, l, n, a) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (a & 335544128) === a))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (yd()) e.flags |= 8192;
        else throw ((Il = Hi), Cr);
    } else e.flags &= -16777217;
  }
  function Zc(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !uh(t)))
      if (yd()) e.flags |= 8192;
      else throw ((Il = Hi), Cr);
  }
  function Pi(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? bo() : 536870912), (e.lanes |= t), (qn |= t)));
  }
  function Oa(e, t) {
    if (!Te)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var l = null; t !== null; ) (t.alternate !== null && (l = t), (t = t.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case 'collapsed':
          l = e.tail;
          for (var n = null; l !== null; ) (l.alternate !== null && (n = l), (l = l.sibling));
          n === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function He(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      n = 0;
    if (t)
      for (var a = e.child; a !== null; )
        ((l |= a.lanes | a.childLanes),
          (n |= a.subtreeFlags & 65011712),
          (n |= a.flags & 65011712),
          (a.return = e),
          (a = a.sibling));
    else
      for (a = e.child; a !== null; )
        ((l |= a.lanes | a.childLanes),
          (n |= a.subtreeFlags),
          (n |= a.flags),
          (a.return = e),
          (a = a.sibling));
    return ((e.subtreeFlags |= n), (e.childLanes = l), t);
  }
  function Bv(e, t, l) {
    var n = t.pendingProps;
    switch ((yr(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (He(t), null);
      case 1:
        return (He(t), null);
      case 3:
        return (
          (l = t.stateNode),
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          kt(qe),
          Ue(),
          l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Dn(t)
              ? tl(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Sr())),
          He(t),
          null
        );
      case 26:
        var a = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (tl(t), u !== null ? (He(t), Zc(t, u)) : (He(t), os(t, a, null, n, l)))
            : u
              ? u !== e.memoizedState
                ? (tl(t), He(t), Zc(t, u))
                : (He(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== n && tl(t), He(t), os(t, a, e, n, l)),
          null
        );
      case 27:
        if ((at(t), (l = ie.current), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== n && tl(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(E(166));
            return (He(t), null);
          }
          ((e = ae.current), Dn(t) ? Mf(t) : ((e = Pd(a, n, l)), (t.stateNode = e), tl(t)));
        }
        return (He(t), null);
      case 5:
        if ((at(t), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== n && tl(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(E(166));
            return (He(t), null);
          }
          if (((u = ae.current), Dn(t))) Mf(t);
          else {
            var p = hu(ie.current);
            switch (u) {
              case 1:
                u = p.createElementNS('http://www.w3.org/2000/svg', a);
                break;
              case 2:
                u = p.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                break;
              default:
                switch (a) {
                  case 'svg':
                    u = p.createElementNS('http://www.w3.org/2000/svg', a);
                    break;
                  case 'math':
                    u = p.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                    break;
                  case 'script':
                    ((u = p.createElement('div')),
                      (u.innerHTML = '<script><\/script>'),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case 'select':
                    ((u =
                      typeof n.is == 'string'
                        ? p.createElement('select', { is: n.is })
                        : p.createElement('select')),
                      n.multiple ? (u.multiple = !0) : n.size && (u.size = n.size));
                    break;
                  default:
                    u =
                      typeof n.is == 'string'
                        ? p.createElement(a, { is: n.is })
                        : p.createElement(a);
                }
            }
            ((u[We] = t), (u[ut] = n));
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
            e: switch ((et(u, a, n), a)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                n = !!n.autoFocus;
                break e;
              case 'img':
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && tl(t);
          }
        }
        return (He(t), os(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== n && tl(t);
        else {
          if (typeof n != 'string' && t.stateNode === null) throw Error(E(166));
          if (((e = ie.current), Dn(t))) {
            if (((e = t.stateNode), (l = t.memoizedProps), (n = null), (a = ke), a !== null))
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            ((e[We] = t),
              (e = !!(
                e.nodeValue === l ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                Vd(e.nodeValue, l)
              )),
              e || pl(t, !0));
          } else ((e = hu(e).createTextNode(n)), (e[We] = t), (t.stateNode = e));
        }
        return (He(t), null);
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((n = Dn(t)), l !== null)) {
            if (e === null) {
              if (!n) throw Error(E(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(E(557));
              e[We] = t;
            } else (Fl(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (He(t), (e = !1));
          } else
            ((l = Sr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l),
              (e = !0));
          if (!e) return t.flags & 256 ? (St(t), t) : (St(t), null);
          if ((t.flags & 128) !== 0) throw Error(E(558));
        }
        return (He(t), null);
      case 13:
        if (
          ((n = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((a = Dn(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(E(318));
              if (((a = t.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
                throw Error(E(317));
              a[We] = t;
            } else (Fl(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (He(t), (a = !1));
          } else
            ((a = Sr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
              (a = !0));
          if (!a) return t.flags & 256 ? (St(t), t) : (St(t), null);
        }
        return (
          St(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = l), t)
            : ((l = n !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
                ((n = t.child),
                (a = null),
                n.alternate !== null &&
                  n.alternate.memoizedState !== null &&
                  n.alternate.memoizedState.cachePool !== null &&
                  (a = n.alternate.memoizedState.cachePool.pool),
                (u = null),
                n.memoizedState !== null &&
                  n.memoizedState.cachePool !== null &&
                  (u = n.memoizedState.cachePool.pool),
                u !== a && (n.flags |= 2048)),
              l !== e && l && (t.child.flags |= 8192),
              Pi(t, t.updateQueue),
              He(t),
              null)
        );
      case 4:
        return (Ue(), e === null && Bs(t.stateNode.containerInfo), He(t), null);
      case 10:
        return (kt(t.type), He(t), null);
      case 19:
        if ((J(Ge), (n = t.memoizedState), n === null)) return (He(t), null);
        if (((a = (t.flags & 128) !== 0), (u = n.rendering), u === null))
          if (a) Oa(n, !1);
          else {
            if (Ye !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Yi(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Oa(n, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Pi(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;
                  )
                    (Sf(l, e), (l = l.sibling));
                  return (te(Ge, (Ge.current & 1) | 2), Te && $t(t, n.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            n.tail !== null &&
              lt() > nu &&
              ((t.flags |= 128), (a = !0), Oa(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Yi(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Pi(t, e),
                Oa(n, !0),
                n.tail === null && n.tailMode === 'hidden' && !u.alternate && !Te)
              )
                return (He(t), null);
            } else
              2 * lt() - n.renderingStartTime > nu &&
                l !== 536870912 &&
                ((t.flags |= 128), (a = !0), Oa(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = n.last), e !== null ? (e.sibling = u) : (t.child = u), (n.last = u));
        }
        return n.tail !== null
          ? ((e = n.tail),
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = lt()),
            (e.sibling = null),
            (l = Ge.current),
            te(Ge, a ? (l & 1) | 2 : l & 1),
            Te && $t(t, n.treeForkCount),
            e)
          : (He(t), null);
      case 22:
      case 23:
        return (
          St(t),
          Ur(),
          (n = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== n && (t.flags |= 8192)
            : n && (t.flags |= 8192),
          n
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (He(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : He(t),
          (l = t.updateQueue),
          l !== null && Pi(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (n = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          n !== l && (t.flags |= 2048),
          e !== null && J(kl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          kt(qe),
          He(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(E(156, t.tag));
  }
  function Uv(e, t) {
    switch ((yr(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          kt(qe),
          Ue(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (at(t), null);
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
        return (J(Ge), null);
      case 4:
        return (Ue(), null);
      case 10:
        return (kt(t.type), null);
      case 22:
      case 23:
        return (
          St(t),
          Ur(),
          e !== null && J(kl),
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
  function Kc(e, t) {
    switch ((yr(t), t.tag)) {
      case 3:
        (kt(qe), Ue());
        break;
      case 26:
      case 27:
      case 5:
        at(t);
        break;
      case 4:
        Ue();
        break;
      case 31:
        t.memoizedState !== null && St(t);
        break;
      case 13:
        St(t);
        break;
      case 19:
        J(Ge);
        break;
      case 10:
        kt(t.type);
        break;
      case 22:
      case 23:
        (St(t), Ur(), e !== null && J(kl));
        break;
      case 24:
        kt(qe);
    }
  }
  function Ba(e, t) {
    try {
      var l = t.updateQueue,
        n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        l = a;
        do {
          if ((l.tag & e) === e) {
            n = void 0;
            var u = l.create,
              p = l.inst;
            ((n = u()), (p.destroy = n));
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (A) {
      Re(t, t.return, A);
    }
  }
  function Al(e, t, l) {
    try {
      var n = t.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            var p = n.inst,
              A = p.destroy;
            if (A !== void 0) {
              ((p.destroy = void 0), (a = t));
              var H = l,
                Z = A;
              try {
                Z();
              } catch (W) {
                Re(a, H, W);
              }
            }
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (W) {
      Re(t, t.return, W);
    }
  }
  function Jc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Lf(t, l);
      } catch (n) {
        Re(e, e.return, n);
      }
    }
  }
  function Fc(e, t, l) {
    ((l.props = ln(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (n) {
      Re(e, t, n);
    }
  }
  function Ua(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof l == 'function' ? (e.refCleanup = l(n)) : (l.current = n);
      }
    } catch (a) {
      Re(e, t, a);
    }
  }
  function Vt(e, t) {
    var l = e.ref,
      n = e.refCleanup;
    if (l !== null)
      if (typeof n == 'function')
        try {
          n();
        } catch (a) {
          Re(e, t, a);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof l == 'function')
        try {
          l(null);
        } catch (a) {
          Re(e, t, a);
        }
      else l.current = null;
  }
  function $c(e) {
    var t = e.type,
      l = e.memoizedProps,
      n = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && n.focus();
          break e;
        case 'img':
          l.src ? (n.src = l.src) : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (a) {
      Re(e, e.return, a);
    }
  }
  function fs(e, t, l) {
    try {
      var n = e.stateNode;
      (e0(n, e.type, l, t), (n[ut] = t));
    } catch (a) {
      Re(e, e.return, a);
    }
  }
  function Wc(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Ul(e.type)) || e.tag === 4
    );
  }
  function cs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Wc(e.return)) return null;
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
  function ds(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
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
      n !== 4 &&
      (n === 27 && Ul(e.type) && ((l = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (ds(e, t, l), e = e.sibling; e !== null; ) (ds(e, t, l), (e = e.sibling));
  }
  function Ii(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6) ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (n !== 4 && (n === 27 && Ul(e.type) && (l = e.stateNode), (e = e.child), e !== null))
      for (Ii(e, t, l), e = e.sibling; e !== null; ) (Ii(e, t, l), (e = e.sibling));
  }
  function kc(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var n = e.type, a = t.attributes; a.length; ) t.removeAttributeNode(a[0]);
      (et(t, n, l), (t[We] = e), (t[ut] = l));
    } catch (u) {
      Re(e, e.return, u);
    }
  }
  var ll = !1,
    Ze = !1,
    hs = !1,
    Pc = typeof WeakSet == 'function' ? WeakSet : Set,
    $e = null;
  function Nv(e, t) {
    if (((e = e.containerInfo), (ws = xu), (e = ff(e)), ur(e))) {
      if ('selectionStart' in e) var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var a = n.anchorOffset,
              u = n.focusNode;
            n = n.focusOffset;
            try {
              (l.nodeType, u.nodeType);
            } catch {
              l = null;
              break e;
            }
            var p = 0,
              A = -1,
              H = -1,
              Z = 0,
              W = 0,
              P = e,
              K = null;
            t: for (;;) {
              for (
                var F;
                P !== l || (a !== 0 && P.nodeType !== 3) || (A = p + a),
                  P !== u || (n !== 0 && P.nodeType !== 3) || (H = p + n),
                  P.nodeType === 3 && (p += P.nodeValue.length),
                  (F = P.firstChild) !== null;
              )
                ((K = P), (P = F));
              for (;;) {
                if (P === e) break t;
                if (
                  (K === l && ++Z === a && (A = p),
                  K === u && ++W === n && (H = p),
                  (F = P.nextSibling) !== null)
                )
                  break;
                ((P = K), (K = P.parentNode));
              }
              P = F;
            }
            l = A === -1 || H === -1 ? null : { start: A, end: H };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Hs = { focusedElem: e, selectionRange: l }, xu = !1, $e = t; $e !== null; )
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
                for (l = 0; l < e.length; l++) ((a = e[l]), (a.ref.impl = a.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                ((e = void 0),
                  (l = t),
                  (a = u.memoizedProps),
                  (u = u.memoizedState),
                  (n = l.stateNode));
                try {
                  var oe = ln(l.type, a);
                  ((e = n.getSnapshotBeforeUpdate(oe, u)),
                    (n.__reactInternalSnapshotBeforeUpdate = e));
                } catch (he) {
                  Re(l, l.return, he);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)) js(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      js(e);
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
  function Ic(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (al(e, l), n & 4 && Ba(5, l));
        break;
      case 1:
        if ((al(e, l), n & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (p) {
              Re(l, l.return, p);
            }
          else {
            var a = ln(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (p) {
              Re(l, l.return, p);
            }
          }
        (n & 64 && Jc(l), n & 512 && Ua(l, l.return));
        break;
      case 3:
        if ((al(e, l), n & 64 && ((e = l.updateQueue), e !== null))) {
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
            Lf(e, t);
          } catch (p) {
            Re(l, l.return, p);
          }
        }
        break;
      case 27:
        t === null && n & 4 && kc(l);
      case 26:
      case 5:
        (al(e, l), t === null && n & 4 && $c(l), n & 512 && Ua(l, l.return));
        break;
      case 12:
        al(e, l);
        break;
      case 31:
        (al(e, l), n & 4 && ld(e, l));
        break;
      case 13:
        (al(e, l),
          n & 4 && nd(e, l),
          n & 64 &&
            ((e = l.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((l = qv.bind(null, l)), s0(e, l)))));
        break;
      case 22:
        if (((n = l.memoizedState !== null || ll), !n)) {
          ((t = (t !== null && t.memoizedState !== null) || Ze), (a = ll));
          var u = Ze;
          ((ll = n),
            (Ze = t) && !u ? il(e, l, (l.subtreeFlags & 8772) !== 0) : al(e, l),
            (ll = a),
            (Ze = u));
        }
        break;
      case 30:
        break;
      default:
        al(e, l);
    }
  }
  function ed(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ed(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Xu(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var _e = null,
    st = !1;
  function nl(e, t, l) {
    for (l = l.child; l !== null; ) (td(e, t, l), (l = l.sibling));
  }
  function td(e, t, l) {
    if (mt && typeof mt.onCommitFiberUnmount == 'function')
      try {
        mt.onCommitFiberUnmount(la, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Ze || Vt(l, t),
          nl(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        Ze || Vt(l, t);
        var n = _e,
          a = st;
        (Ul(l.type) && ((_e = l.stateNode), (st = !1)),
          nl(e, t, l),
          Va(l.stateNode),
          (_e = n),
          (st = a));
        break;
      case 5:
        Ze || Vt(l, t);
      case 6:
        if (((n = _e), (a = st), (_e = null), nl(e, t, l), (_e = n), (st = a), _e !== null))
          if (st)
            try {
              (_e.nodeType === 9
                ? _e.body
                : _e.nodeName === 'HTML'
                  ? _e.ownerDocument.body
                  : _e
              ).removeChild(l.stateNode);
            } catch (u) {
              Re(l, t, u);
            }
          else
            try {
              _e.removeChild(l.stateNode);
            } catch (u) {
              Re(l, t, u);
            }
        break;
      case 18:
        _e !== null &&
          (st
            ? ((e = _e),
              Jd(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                l.stateNode
              ),
              Wn(e))
            : Jd(_e, l.stateNode));
        break;
      case 4:
        ((n = _e),
          (a = st),
          (_e = l.stateNode.containerInfo),
          (st = !0),
          nl(e, t, l),
          (_e = n),
          (st = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Al(2, l, t), Ze || Al(4, l, t), nl(e, t, l));
        break;
      case 1:
        (Ze ||
          (Vt(l, t), (n = l.stateNode), typeof n.componentWillUnmount == 'function' && Fc(l, t, n)),
          nl(e, t, l));
        break;
      case 21:
        nl(e, t, l);
        break;
      case 22:
        ((Ze = (n = Ze) || l.memoizedState !== null), nl(e, t, l), (Ze = n));
        break;
      default:
        nl(e, t, l);
    }
  }
  function ld(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Wn(e);
      } catch (l) {
        Re(t, t.return, l);
      }
    }
  }
  function nd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Wn(e);
      } catch (l) {
        Re(t, t.return, l);
      }
  }
  function wv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Pc()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Pc()),
          t
        );
      default:
        throw Error(E(435, e.tag));
    }
  }
  function eu(e, t) {
    var l = wv(e);
    t.forEach(function (n) {
      if (!l.has(n)) {
        l.add(n);
        var a = Xv.bind(null, e, n);
        n.then(a, a);
      }
    });
  }
  function ot(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n],
          u = e,
          p = t,
          A = p;
        e: for (; A !== null; ) {
          switch (A.tag) {
            case 27:
              if (Ul(A.type)) {
                ((_e = A.stateNode), (st = !1));
                break e;
              }
              break;
            case 5:
              ((_e = A.stateNode), (st = !1));
              break e;
            case 3:
            case 4:
              ((_e = A.stateNode.containerInfo), (st = !0));
              break e;
          }
          A = A.return;
        }
        if (_e === null) throw Error(E(160));
        (td(u, p, a),
          (_e = null),
          (st = !1),
          (u = a.alternate),
          u !== null && (u.return = null),
          (a.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (ad(t, e), (t = t.sibling));
  }
  var _t = null;
  function ad(e, t) {
    var l = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ot(t, e), ft(e), n & 4 && (Al(3, e, e.return), Ba(3, e), Al(5, e, e.return)));
        break;
      case 1:
        (ot(t, e),
          ft(e),
          n & 512 && (Ze || l === null || Vt(l, l.return)),
          n & 64 &&
            ll &&
            ((e = e.updateQueue),
            e !== null &&
              ((n = e.callbacks),
              n !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? n : l.concat(n))))));
        break;
      case 26:
        var a = _t;
        if ((ot(t, e), ft(e), n & 512 && (Ze || l === null || Vt(l, l.return)), n & 4)) {
          var u = l !== null ? l.memoizedState : null;
          if (((n = e.memoizedState), l === null))
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  ((n = e.type), (l = e.memoizedProps), (a = a.ownerDocument || a));
                  t: switch (n) {
                    case 'title':
                      ((u = a.getElementsByTagName('title')[0]),
                        (!u ||
                          u[ia] ||
                          u[We] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = a.createElement(n)),
                          a.head.insertBefore(u, a.querySelector('head > title'))),
                        et(u, n, l),
                        (u[We] = e),
                        Fe(u),
                        (n = u));
                      break e;
                    case 'link':
                      var p = ah('link', 'href', a).get(n + (l.href || ''));
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
                      ((u = a.createElement(n)), et(u, n, l), a.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((p = ah('meta', 'content', a).get(n + (l.content || '')))) {
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
                      ((u = a.createElement(n)), et(u, n, l), a.head.appendChild(u));
                      break;
                    default:
                      throw Error(E(468, n));
                  }
                  ((u[We] = e), Fe(u), (n = u));
                }
                e.stateNode = n;
              } else ih(a, e.type, e.stateNode);
            else e.stateNode = nh(a, n, e.memoizedProps);
          else
            u !== n
              ? (u === null
                  ? l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                n === null ? ih(a, e.type, e.stateNode) : nh(a, n, e.memoizedProps))
              : n === null && e.stateNode !== null && fs(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (ot(t, e),
          ft(e),
          n & 512 && (Ze || l === null || Vt(l, l.return)),
          l !== null && n & 4 && fs(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if ((ot(t, e), ft(e), n & 512 && (Ze || l === null || Vt(l, l.return)), e.flags & 32)) {
          a = e.stateNode;
          try {
            Sn(a, '');
          } catch (oe) {
            Re(e, e.return, oe);
          }
        }
        (n & 4 &&
          e.stateNode != null &&
          ((a = e.memoizedProps), fs(e, a, l !== null ? l.memoizedProps : a)),
          n & 1024 && (hs = !0));
        break;
      case 6:
        if ((ot(t, e), ft(e), n & 4)) {
          if (e.stateNode === null) throw Error(E(162));
          ((n = e.memoizedProps), (l = e.stateNode));
          try {
            l.nodeValue = n;
          } catch (oe) {
            Re(e, e.return, oe);
          }
        }
        break;
      case 3:
        if (
          ((gu = null),
          (a = _t),
          (_t = mu(t.containerInfo)),
          ot(t, e),
          (_t = a),
          ft(e),
          n & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Wn(t.containerInfo);
          } catch (oe) {
            Re(e, e.return, oe);
          }
        hs && ((hs = !1), id(e));
        break;
      case 4:
        ((n = _t), (_t = mu(e.stateNode.containerInfo)), ot(t, e), ft(e), (_t = n));
        break;
      case 12:
        (ot(t, e), ft(e));
        break;
      case 31:
        (ot(t, e),
          ft(e),
          n & 4 && ((n = e.updateQueue), n !== null && ((e.updateQueue = null), eu(e, n))));
        break;
      case 13:
        (ot(t, e),
          ft(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (l !== null && l.memoizedState !== null) &&
            (lu = lt()),
          n & 4 && ((n = e.updateQueue), n !== null && ((e.updateQueue = null), eu(e, n))));
        break;
      case 22:
        a = e.memoizedState !== null;
        var H = l !== null && l.memoizedState !== null,
          Z = ll,
          W = Ze;
        if (((ll = Z || a), (Ze = W || H), ot(t, e), (Ze = W), (ll = Z), ft(e), n & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = a ? t._visibility & -2 : t._visibility | 1,
              a && (l === null || H || ll || Ze || nn(e)),
              l = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                H = l = t;
                try {
                  if (((u = H.stateNode), a))
                    ((p = u.style),
                      typeof p.setProperty == 'function'
                        ? p.setProperty('display', 'none', 'important')
                        : (p.display = 'none'));
                  else {
                    A = H.stateNode;
                    var P = H.memoizedProps.style,
                      K = P != null && P.hasOwnProperty('display') ? P.display : null;
                    A.style.display = K == null || typeof K == 'boolean' ? '' : ('' + K).trim();
                  }
                } catch (oe) {
                  Re(H, H.return, oe);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                H = t;
                try {
                  H.stateNode.nodeValue = a ? '' : H.memoizedProps;
                } catch (oe) {
                  Re(H, H.return, oe);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                H = t;
                try {
                  var F = H.stateNode;
                  a ? Fd(F, !0) : Fd(H.stateNode, !1);
                } catch (oe) {
                  Re(H, H.return, oe);
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
        n & 4 &&
          ((n = e.updateQueue),
          n !== null && ((l = n.retryQueue), l !== null && ((n.retryQueue = null), eu(e, l))));
        break;
      case 19:
        (ot(t, e),
          ft(e),
          n & 4 && ((n = e.updateQueue), n !== null && ((e.updateQueue = null), eu(e, n))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ot(t, e), ft(e));
    }
  }
  function ft(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, n = e.return; n !== null; ) {
          if (Wc(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(E(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode,
              u = cs(e);
            Ii(e, u, a);
            break;
          case 5:
            var p = l.stateNode;
            l.flags & 32 && (Sn(p, ''), (l.flags &= -33));
            var A = cs(e);
            Ii(e, A, p);
            break;
          case 3:
          case 4:
            var H = l.stateNode.containerInfo,
              Z = cs(e);
            ds(e, Z, H);
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
  function id(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (id(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function al(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Ic(e, t.alternate, t), (t = t.sibling));
  }
  function nn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Al(4, t, t.return), nn(t));
          break;
        case 1:
          Vt(t, t.return);
          var l = t.stateNode;
          (typeof l.componentWillUnmount == 'function' && Fc(t, t.return, l), nn(t));
          break;
        case 27:
          Va(t.stateNode);
        case 26:
        case 5:
          (Vt(t, t.return), nn(t));
          break;
        case 22:
          t.memoizedState === null && nn(t);
          break;
        case 30:
          nn(t);
          break;
        default:
          nn(t);
      }
      e = e.sibling;
    }
  }
  function il(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate,
        a = e,
        u = t,
        p = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (il(a, u, l), Ba(4, u));
          break;
        case 1:
          if ((il(a, u, l), (n = u), (a = n.stateNode), typeof a.componentDidMount == 'function'))
            try {
              a.componentDidMount();
            } catch (Z) {
              Re(n, n.return, Z);
            }
          if (((n = u), (a = n.updateQueue), a !== null)) {
            var A = n.stateNode;
            try {
              var H = a.shared.hiddenCallbacks;
              if (H !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < H.length; a++) _f(H[a], A);
            } catch (Z) {
              Re(n, n.return, Z);
            }
          }
          (l && p & 64 && Jc(u), Ua(u, u.return));
          break;
        case 27:
          kc(u);
        case 26:
        case 5:
          (il(a, u, l), l && n === null && p & 4 && $c(u), Ua(u, u.return));
          break;
        case 12:
          il(a, u, l);
          break;
        case 31:
          (il(a, u, l), l && p & 4 && ld(a, u));
          break;
        case 13:
          (il(a, u, l), l && p & 4 && nd(a, u));
          break;
        case 22:
          (u.memoizedState === null && il(a, u, l), Ua(u, u.return));
          break;
        case 30:
          break;
        default:
          il(a, u, l);
      }
      t = t.sibling;
    }
  }
  function ms(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && pa(l)));
  }
  function vs(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && pa(e)));
  }
  function Lt(e, t, l, n) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (ud(e, t, l, n), (t = t.sibling));
  }
  function ud(e, t, l, n) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Lt(e, t, l, n), a & 2048 && Ba(9, t));
        break;
      case 1:
        Lt(e, t, l, n);
        break;
      case 3:
        (Lt(e, t, l, n),
          a & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && pa(e))));
        break;
      case 12:
        if (a & 2048) {
          (Lt(e, t, l, n), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              p = u.id,
              A = u.onPostCommit;
            typeof A == 'function' &&
              A(p, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (H) {
            Re(t, t.return, H);
          }
        } else Lt(e, t, l, n);
        break;
      case 31:
        Lt(e, t, l, n);
        break;
      case 13:
        Lt(e, t, l, n);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (p = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? Lt(e, t, l, n)
              : Na(e, t)
            : u._visibility & 2
              ? Lt(e, t, l, n)
              : ((u._visibility |= 2), Yn(e, t, l, n, (t.subtreeFlags & 10256) !== 0 || !1)),
          a & 2048 && ms(p, t));
        break;
      case 24:
        (Lt(e, t, l, n), a & 2048 && vs(t.alternate, t));
        break;
      default:
        Lt(e, t, l, n);
    }
  }
  function Yn(e, t, l, n, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e,
        p = t,
        A = l,
        H = n,
        Z = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          (Yn(u, p, A, H, a), Ba(8, p));
          break;
        case 23:
          break;
        case 22:
          var W = p.stateNode;
          (p.memoizedState !== null
            ? W._visibility & 2
              ? Yn(u, p, A, H, a)
              : Na(u, p)
            : ((W._visibility |= 2), Yn(u, p, A, H, a)),
            a && Z & 2048 && ms(p.alternate, p));
          break;
        case 24:
          (Yn(u, p, A, H, a), a && Z & 2048 && vs(p.alternate, p));
          break;
        default:
          Yn(u, p, A, H, a);
      }
      t = t.sibling;
    }
  }
  function Na(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          n = t,
          a = n.flags;
        switch (n.tag) {
          case 22:
            (Na(l, n), a & 2048 && ms(n.alternate, n));
            break;
          case 24:
            (Na(l, n), a & 2048 && vs(n.alternate, n));
            break;
          default:
            Na(l, n);
        }
        t = t.sibling;
      }
  }
  var wa = 8192;
  function Gn(e, t, l) {
    if (e.subtreeFlags & wa) for (e = e.child; e !== null; ) (rd(e, t, l), (e = e.sibling));
  }
  function rd(e, t, l) {
    switch (e.tag) {
      case 26:
        (Gn(e, t, l),
          e.flags & wa && e.memoizedState !== null && x0(l, _t, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Gn(e, t, l);
        break;
      case 3:
      case 4:
        var n = _t;
        ((_t = mu(e.stateNode.containerInfo)), Gn(e, t, l), (_t = n));
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = wa), (wa = 16777216), Gn(e, t, l), (wa = n))
            : Gn(e, t, l));
        break;
      default:
        Gn(e, t, l);
    }
  }
  function sd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function Ha(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          (($e = n), fd(n, e));
        }
      sd(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (od(e), (e = e.sibling));
  }
  function od(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ha(e), e.flags & 2048 && Al(9, e, e.return));
        break;
      case 3:
        Ha(e);
        break;
      case 12:
        Ha(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), tu(e))
          : Ha(e);
        break;
      default:
        Ha(e);
    }
  }
  function tu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          (($e = n), fd(n, e));
        }
      sd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Al(8, t, t.return), tu(t));
          break;
        case 22:
          ((l = t.stateNode), l._visibility & 2 && ((l._visibility &= -3), tu(t)));
          break;
        default:
          tu(t);
      }
      e = e.sibling;
    }
  }
  function fd(e, t) {
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
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          pa(l.memoizedState.cache);
      }
      if (((n = l.child), n !== null)) ((n.return = l), ($e = n));
      else
        e: for (l = e; $e !== null; ) {
          n = $e;
          var a = n.sibling,
            u = n.return;
          if ((ed(n), n === l)) {
            $e = null;
            break e;
          }
          if (a !== null) {
            ((a.return = u), ($e = a));
            break e;
          }
          $e = u;
        }
    }
  }
  var Hv = {
      getCacheForType: function (e) {
        var t = Pe(qe),
          l = t.data.get(e);
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
      },
      cacheSignal: function () {
        return Pe(qe).controller.signal;
      },
    },
    _v = typeof WeakMap == 'function' ? WeakMap : Map,
    Ae = 0,
    Ne = null,
    pe = null,
    xe = 0,
    Ce = 0,
    xt = null,
    Cl = !1,
    Vn = !1,
    gs = !1,
    ul = 0,
    Ye = 0,
    Rl = 0,
    an = 0,
    ys = 0,
    Et = 0,
    qn = 0,
    _a = null,
    ct = null,
    ps = !1,
    lu = 0,
    cd = 0,
    nu = 1 / 0,
    au = null,
    zl = null,
    Ke = 0,
    Dl = null,
    Xn = null,
    rl = 0,
    Ss = 0,
    xs = null,
    dd = null,
    La = 0,
    Es = null;
  function Tt() {
    return (Ae & 2) !== 0 && xe !== 0 ? xe & -xe : G.T !== null ? Rs() : Ro();
  }
  function hd() {
    if (Et === 0)
      if ((xe & 536870912) === 0 || Te) {
        var e = di;
        ((di <<= 1), (di & 3932160) === 0 && (di = 262144), (Et = e));
      } else Et = 536870912;
    return ((e = pt.current), e !== null && (e.flags |= 32), Et);
  }
  function dt(e, t, l) {
    (((e === Ne && (Ce === 2 || Ce === 9)) || e.cancelPendingCommit !== null) &&
      (Qn(e, 0), Ol(e, xe, Et, !1)),
      aa(e, l),
      ((Ae & 2) === 0 || e !== Ne) &&
        (e === Ne && ((Ae & 2) === 0 && (an |= l), Ye === 4 && Ol(e, xe, Et, !1)), qt(e)));
  }
  function md(e, t, l) {
    if ((Ae & 6) !== 0) throw Error(E(327));
    var n = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || na(e, t),
      a = n ? Yv(e, t) : bs(e, t, !0),
      u = n;
    do {
      if (a === 0) {
        Vn && !n && Ol(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), u && !Lv(l))) {
          ((a = bs(e, t, !1)), (u = !1));
          continue;
        }
        if (a === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var p = 0;
          else
            ((p = e.pendingLanes & -536870913), (p = p !== 0 ? p : p & 536870912 ? 536870912 : 0));
          if (p !== 0) {
            t = p;
            e: {
              var A = e;
              a = _a;
              var H = A.current.memoizedState.isDehydrated;
              if ((H && (Qn(A, p).flags |= 256), (p = bs(A, p, !1)), p !== 2)) {
                if (gs && !H) {
                  ((A.errorRecoveryDisabledLanes |= u), (an |= u), (a = 4));
                  break e;
                }
                ((u = ct), (ct = a), u !== null && (ct === null ? (ct = u) : ct.push.apply(ct, u)));
              }
              a = p;
            }
            if (((u = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          (Qn(e, 0), Ol(e, t, 0, !0));
          break;
        }
        e: {
          switch (((n = e), (u = a), u)) {
            case 0:
            case 1:
              throw Error(E(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ol(n, t, Et, !Cl);
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
          if ((t & 62914560) === t && ((a = lu + 300 - lt()), 10 < a)) {
            if ((Ol(n, t, Et, !Cl), mi(n, 0, !0) !== 0)) break e;
            ((rl = t),
              (n.timeoutHandle = Zd(
                vd.bind(null, n, l, ct, au, ps, t, Et, an, qn, Cl, u, 'Throttled', -0, 0),
                a
              )));
            break e;
          }
          vd(n, l, ct, au, ps, t, Et, an, qn, Cl, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    qt(e);
  }
  function vd(e, t, l, n, a, u, p, A, H, Z, W, P, K, F) {
    if (((e.timeoutHandle = -1), (P = t.subtreeFlags), P & 8192 || (P & 16785408) === 16785408)) {
      ((P = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Kt,
      }),
        rd(t, u, P));
      var oe = (u & 62914560) === u ? lu - lt() : (u & 4194048) === u ? cd - lt() : 0;
      if (((oe = E0(P, oe)), oe !== null)) {
        ((rl = u),
          (e.cancelPendingCommit = oe(bd.bind(null, e, t, u, l, n, a, p, A, H, W, P, null, K, F))),
          Ol(e, u, p, !Z));
        return;
      }
    }
    bd(e, t, u, l, n, a, p, A, H);
  }
  function Lv(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var n = 0; n < l.length; n++) {
          var a = l[n],
            u = a.getSnapshot;
          a = a.value;
          try {
            if (!gt(u(), a)) return !1;
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
  function Ol(e, t, l, n) {
    ((t &= ~ys),
      (t &= ~an),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      n && (e.warmLanes |= t),
      (n = e.expirationTimes));
    for (var a = t; 0 < a; ) {
      var u = 31 - vt(a),
        p = 1 << u;
      ((n[u] = -1), (a &= ~p));
    }
    l !== 0 && Mo(e, l, t);
  }
  function iu() {
    return (Ae & 6) === 0 ? (ja(0), !1) : !0;
  }
  function Ts() {
    if (pe !== null) {
      if (Ce === 0) var e = pe.return;
      else ((e = pe), (Wt = $l = null), jr(e), (wn = null), (xa = 0), (e = pe));
      for (; e !== null; ) (Kc(e.alternate, e), (e = e.return));
      pe = null;
    }
  }
  function Qn(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), n0(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (rl = 0),
      Ts(),
      (Ne = e),
      (pe = l = Ft(e.current, null)),
      (xe = t),
      (Ce = 0),
      (xt = null),
      (Cl = !1),
      (Vn = na(e, t)),
      (gs = !1),
      (qn = Et = ys = an = Rl = Ye = 0),
      (ct = _a = null),
      (ps = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - vt(n),
          u = 1 << a;
        ((t |= e[a]), (n &= ~u));
      }
    return ((ul = t), Ci(), l);
  }
  function gd(e, t) {
    ((ve = null),
      (G.H = za),
      t === Nn || t === wi
        ? ((t = Uf()), (Ce = 3))
        : t === Cr
          ? ((t = Uf()), (Ce = 4))
          : (Ce =
              t === es
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (xt = t),
      pe === null && ((Ye = 1), Fi(e, Ct(t, e.current))));
  }
  function yd() {
    var e = pt.current;
    return e === null
      ? !0
      : (xe & 4194048) === xe
        ? Ot === null
        : (xe & 62914560) === xe || (xe & 536870912) !== 0
          ? e === Ot
          : !1;
  }
  function pd() {
    var e = G.H;
    return ((G.H = za), e === null ? za : e);
  }
  function Sd() {
    var e = G.A;
    return ((G.A = Hv), e);
  }
  function uu() {
    ((Ye = 4),
      Cl || ((xe & 4194048) !== xe && pt.current !== null) || (Vn = !0),
      ((Rl & 134217727) === 0 && (an & 134217727) === 0) || Ne === null || Ol(Ne, xe, Et, !1));
  }
  function bs(e, t, l) {
    var n = Ae;
    Ae |= 2;
    var a = pd(),
      u = Sd();
    ((Ne !== e || xe !== t) && ((au = null), Qn(e, t)), (t = !1));
    var p = Ye;
    e: do
      try {
        if (Ce !== 0 && pe !== null) {
          var A = pe,
            H = xt;
          switch (Ce) {
            case 8:
              (Ts(), (p = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              pt.current === null && (t = !0);
              var Z = Ce;
              if (((Ce = 0), (xt = null), Zn(e, A, H, Z), l && Vn)) {
                p = 0;
                break e;
              }
              break;
            default:
              ((Z = Ce), (Ce = 0), (xt = null), Zn(e, A, H, Z));
          }
        }
        (jv(), (p = Ye));
        break;
      } catch (W) {
        gd(e, W);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Wt = $l = null),
      (Ae = n),
      (G.H = a),
      (G.A = u),
      pe === null && ((Ne = null), (xe = 0), Ci()),
      p
    );
  }
  function jv() {
    for (; pe !== null; ) xd(pe);
  }
  function Yv(e, t) {
    var l = Ae;
    Ae |= 2;
    var n = pd(),
      a = Sd();
    Ne !== e || xe !== t ? ((au = null), (nu = lt() + 500), Qn(e, t)) : (Vn = na(e, t));
    e: do
      try {
        if (Ce !== 0 && pe !== null) {
          t = pe;
          var u = xt;
          t: switch (Ce) {
            case 1:
              ((Ce = 0), (xt = null), Zn(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (Of(u)) {
                ((Ce = 0), (xt = null), Ed(t));
                break;
              }
              ((t = function () {
                ((Ce !== 2 && Ce !== 9) || Ne !== e || (Ce = 7), qt(e));
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
              Of(u) ? ((Ce = 0), (xt = null), Ed(t)) : ((Ce = 0), (xt = null), Zn(e, t, u, 7));
              break;
            case 5:
              var p = null;
              switch (pe.tag) {
                case 26:
                  p = pe.memoizedState;
                case 5:
                case 27:
                  var A = pe;
                  if (p ? uh(p) : A.stateNode.complete) {
                    ((Ce = 0), (xt = null));
                    var H = A.sibling;
                    if (H !== null) pe = H;
                    else {
                      var Z = A.return;
                      Z !== null ? ((pe = Z), ru(Z)) : (pe = null);
                    }
                    break t;
                  }
              }
              ((Ce = 0), (xt = null), Zn(e, t, u, 5));
              break;
            case 6:
              ((Ce = 0), (xt = null), Zn(e, t, u, 6));
              break;
            case 8:
              (Ts(), (Ye = 6));
              break e;
            default:
              throw Error(E(462));
          }
        }
        Gv();
        break;
      } catch (W) {
        gd(e, W);
      }
    while (!0);
    return (
      (Wt = $l = null),
      (G.H = n),
      (G.A = a),
      (Ae = l),
      pe !== null ? 0 : ((Ne = null), (xe = 0), Ci(), Ye)
    );
  }
  function Gv() {
    for (; pe !== null && !ri(); ) xd(pe);
  }
  function xd(e) {
    var t = Qc(e.alternate, e, ul);
    ((e.memoizedProps = e.pendingProps), t === null ? ru(e) : (pe = t));
  }
  function Ed(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = jc(l, t, t.pendingProps, t.type, void 0, xe);
        break;
      case 11:
        t = jc(l, t, t.pendingProps, t.type.render, t.ref, xe);
        break;
      case 5:
        jr(t);
      default:
        (Kc(l, t), (t = pe = Sf(t, ul)), (t = Qc(l, t, ul)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? ru(e) : (pe = t));
  }
  function Zn(e, t, l, n) {
    ((Wt = $l = null), jr(t), (wn = null), (xa = 0));
    var a = t.return;
    try {
      if (zv(e, a, t, l, xe)) {
        ((Ye = 1), Fi(e, Ct(l, e.current)), (pe = null));
        return;
      }
    } catch (u) {
      if (a !== null) throw ((pe = a), u);
      ((Ye = 1), Fi(e, Ct(l, e.current)), (pe = null));
      return;
    }
    t.flags & 32768
      ? (Te || n === 1
          ? (e = !0)
          : Vn || (xe & 536870912) !== 0
            ? (e = !1)
            : ((Cl = e = !0),
              (n === 2 || n === 9 || n === 3 || n === 6) &&
                ((n = pt.current), n !== null && n.tag === 13 && (n.flags |= 16384))),
        Td(t, e))
      : ru(t);
  }
  function ru(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Td(t, Cl);
        return;
      }
      e = t.return;
      var l = Bv(t.alternate, t, ul);
      if (l !== null) {
        pe = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        pe = t;
        return;
      }
      pe = t = e;
    } while (t !== null);
    Ye === 0 && (Ye = 5);
  }
  function Td(e, t) {
    do {
      var l = Uv(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (pe = l));
        return;
      }
      if (
        ((l = e.return),
        l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        pe = e;
        return;
      }
      pe = e = l;
    } while (e !== null);
    ((Ye = 6), (pe = null));
  }
  function bd(e, t, l, n, a, u, p, A, H) {
    e.cancelPendingCommit = null;
    do su();
    while (Ke !== 0);
    if ((Ae & 6) !== 0) throw Error(E(327));
    if (t !== null) {
      if (t === e.current) throw Error(E(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= cr),
        Sm(e, l, u, p, A, H),
        e === Ne && ((pe = Ne = null), (xe = 0)),
        (Xn = t),
        (Dl = e),
        (rl = l),
        (Ss = u),
        (xs = a),
        (dd = n),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Qv(cn, function () {
              return (zd(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (n = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || n)
      ) {
        ((n = G.T), (G.T = null), (a = X.p), (X.p = 2), (p = Ae), (Ae |= 4));
        try {
          Nv(e, t, l);
        } finally {
          ((Ae = p), (X.p = a), (G.T = n));
        }
      }
      ((Ke = 1), Md(), Ad(), Cd());
    }
  }
  function Md() {
    if (Ke === 1) {
      Ke = 0;
      var e = Dl,
        t = Xn,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ((l = G.T), (G.T = null));
        var n = X.p;
        X.p = 2;
        var a = Ae;
        Ae |= 4;
        try {
          ad(t, e);
          var u = Hs,
            p = ff(e.containerInfo),
            A = u.focusedElem,
            H = u.selectionRange;
          if (p !== A && A && A.ownerDocument && of(A.ownerDocument.documentElement, A)) {
            if (H !== null && ur(A)) {
              var Z = H.start,
                W = H.end;
              if ((W === void 0 && (W = Z), 'selectionStart' in A))
                ((A.selectionStart = Z), (A.selectionEnd = Math.min(W, A.value.length)));
              else {
                var P = A.ownerDocument || document,
                  K = (P && P.defaultView) || window;
                if (K.getSelection) {
                  var F = K.getSelection(),
                    oe = A.textContent.length,
                    he = Math.min(H.start, oe),
                    Be = H.end === void 0 ? he : Math.min(H.end, oe);
                  !F.extend && he > Be && ((p = Be), (Be = he), (he = p));
                  var V = sf(A, he),
                    Y = sf(A, Be);
                  if (
                    V &&
                    Y &&
                    (F.rangeCount !== 1 ||
                      F.anchorNode !== V.node ||
                      F.anchorOffset !== V.offset ||
                      F.focusNode !== Y.node ||
                      F.focusOffset !== Y.offset)
                  ) {
                    var Q = P.createRange();
                    (Q.setStart(V.node, V.offset),
                      F.removeAllRanges(),
                      he > Be
                        ? (F.addRange(Q), F.extend(Y.node, Y.offset))
                        : (Q.setEnd(Y.node, Y.offset), F.addRange(Q)));
                  }
                }
              }
            }
            for (P = [], F = A; (F = F.parentNode); )
              F.nodeType === 1 && P.push({ element: F, left: F.scrollLeft, top: F.scrollTop });
            for (typeof A.focus == 'function' && A.focus(), A = 0; A < P.length; A++) {
              var k = P[A];
              ((k.element.scrollLeft = k.left), (k.element.scrollTop = k.top));
            }
          }
          ((xu = !!ws), (Hs = ws = null));
        } finally {
          ((Ae = a), (X.p = n), (G.T = l));
        }
      }
      ((e.current = t), (Ke = 2));
    }
  }
  function Ad() {
    if (Ke === 2) {
      Ke = 0;
      var e = Dl,
        t = Xn,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = G.T), (G.T = null));
        var n = X.p;
        X.p = 2;
        var a = Ae;
        Ae |= 4;
        try {
          Ic(e, t.alternate, t);
        } finally {
          ((Ae = a), (X.p = n), (G.T = l));
        }
      }
      Ke = 3;
    }
  }
  function Cd() {
    if (Ke === 4 || Ke === 3) {
      ((Ke = 0), si());
      var e = Dl,
        t = Xn,
        l = rl,
        n = dd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ke = 5)
        : ((Ke = 0), (Xn = Dl = null), Rd(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (
        (a === 0 && (zl = null),
        Vu(l),
        (t = t.stateNode),
        mt && typeof mt.onCommitFiberRoot == 'function')
      )
        try {
          mt.onCommitFiberRoot(la, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (n !== null) {
        ((t = G.T), (a = X.p), (X.p = 2), (G.T = null));
        try {
          for (var u = e.onRecoverableError, p = 0; p < n.length; p++) {
            var A = n[p];
            u(A.value, { componentStack: A.stack });
          }
        } finally {
          ((G.T = t), (X.p = a));
        }
      }
      ((rl & 3) !== 0 && su(),
        qt(e),
        (a = e.pendingLanes),
        (l & 261930) !== 0 && (a & 42) !== 0 ? (e === Es ? La++ : ((La = 0), (Es = e))) : (La = 0),
        ja(0));
    }
  }
  function Rd(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), pa(t)));
  }
  function su() {
    return (Md(), Ad(), Cd(), zd());
  }
  function zd() {
    if (Ke !== 5) return !1;
    var e = Dl,
      t = Ss;
    Ss = 0;
    var l = Vu(rl),
      n = G.T,
      a = X.p;
    try {
      ((X.p = 32 > l ? 32 : l), (G.T = null), (l = xs), (xs = null));
      var u = Dl,
        p = rl;
      if (((Ke = 0), (Xn = Dl = null), (rl = 0), (Ae & 6) !== 0)) throw Error(E(331));
      var A = Ae;
      if (
        ((Ae |= 4),
        od(u.current),
        ud(u, u.current, p, l),
        (Ae = A),
        ja(0, !1),
        mt && typeof mt.onPostCommitFiberRoot == 'function')
      )
        try {
          mt.onPostCommitFiberRoot(la, u);
        } catch {}
      return !0;
    } finally {
      ((X.p = a), (G.T = n), Rd(e, t));
    }
  }
  function Dd(e, t, l) {
    ((t = Ct(l, t)),
      (t = Ir(e.stateNode, t, 2)),
      (e = Tl(e, t, 2)),
      e !== null && (aa(e, 2), qt(e)));
  }
  function Re(e, t, l) {
    if (e.tag === 3) Dd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Dd(t, e, l);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof n.componentDidCatch == 'function' && (zl === null || !zl.has(n)))
          ) {
            ((e = Ct(l, e)),
              (l = Oc(2)),
              (n = Tl(t, l, 2)),
              n !== null && (Bc(l, n, t, e), aa(n, 2), qt(n)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ms(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new _v();
      var a = new Set();
      n.set(t, a);
    } else ((a = n.get(t)), a === void 0 && ((a = new Set()), n.set(t, a)));
    a.has(l) || ((gs = !0), a.add(l), (e = Vv.bind(null, e, t, l)), t.then(e, e));
  }
  function Vv(e, t, l) {
    var n = e.pingCache;
    (n !== null && n.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      Ne === e &&
        (xe & l) === l &&
        (Ye === 4 || (Ye === 3 && (xe & 62914560) === xe && 300 > lt() - lu)
          ? (Ae & 2) === 0 && Qn(e, 0)
          : (ys |= l),
        qn === xe && (qn = 0)),
      qt(e));
  }
  function Od(e, t) {
    (t === 0 && (t = bo()), (e = Kl(e, t)), e !== null && (aa(e, t), qt(e)));
  }
  function qv(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), Od(e, l));
  }
  function Xv(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode,
          a = e.memoizedState;
        a !== null && (l = a.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(E(314));
    }
    (n !== null && n.delete(t), Od(e, l));
  }
  function Qv(e, t) {
    return fn(e, t);
  }
  var ou = null,
    Kn = null,
    As = !1,
    fu = !1,
    Cs = !1,
    Bl = 0;
  function qt(e) {
    (e !== Kn && e.next === null && (Kn === null ? (ou = Kn = e) : (Kn = Kn.next = e)),
      (fu = !0),
      As || ((As = !0), Kv()));
  }
  function ja(e, t) {
    if (!Cs && fu) {
      Cs = !0;
      do
        for (var l = !1, n = ou; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var p = n.suspendedLanes,
                A = n.pingedLanes;
              ((u = (1 << (31 - vt(42 | e) + 1)) - 1),
                (u &= a & ~(p & ~A)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((l = !0), wd(n, u));
          } else
            ((u = xe),
              (u = mi(
                n,
                n === Ne ? u : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1
              )),
              (u & 3) === 0 || na(n, u) || ((l = !0), wd(n, u)));
          n = n.next;
        }
      while (l);
      Cs = !1;
    }
  }
  function Zv() {
    Bd();
  }
  function Bd() {
    fu = As = !1;
    var e = 0;
    Bl !== 0 && l0() && (e = Bl);
    for (var t = lt(), l = null, n = ou; n !== null; ) {
      var a = n.next,
        u = Ud(n, t);
      (u === 0
        ? ((n.next = null), l === null ? (ou = a) : (l.next = a), a === null && (Kn = l))
        : ((l = n), (e !== 0 || (u & 3) !== 0) && (fu = !0)),
        (n = a));
    }
    ((Ke !== 0 && Ke !== 5) || ja(e), Bl !== 0 && (Bl = 0));
  }
  function Ud(e, t) {
    for (
      var l = e.suspendedLanes,
        n = e.pingedLanes,
        a = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var p = 31 - vt(u),
        A = 1 << p,
        H = a[p];
      (H === -1
        ? ((A & l) === 0 || (A & n) !== 0) && (a[p] = pm(A, t))
        : H <= t && (e.expiredLanes |= A),
        (u &= ~A));
    }
    if (
      ((t = Ne),
      (l = xe),
      (l = mi(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (n = e.callbackNode),
      l === 0 || (e === t && (Ce === 2 || Ce === 9)) || e.cancelPendingCommit !== null)
    )
      return (n !== null && n !== null && jl(n), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((l & 3) === 0 || na(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((n !== null && jl(n), Vu(l))) {
        case 2:
        case 8:
          l = fi;
          break;
        case 32:
          l = cn;
          break;
        case 268435456:
          l = Gl;
          break;
        default:
          l = cn;
      }
      return (
        (n = Nd.bind(null, e)),
        (l = fn(l, n)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      n !== null && n !== null && jl(n),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Nd(e, t) {
    if (Ke !== 0 && Ke !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (su() && e.callbackNode !== l) return null;
    var n = xe;
    return (
      (n = mi(e, e === Ne ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      n === 0
        ? null
        : (md(e, n, t),
          Ud(e, lt()),
          e.callbackNode != null && e.callbackNode === l ? Nd.bind(null, e) : null)
    );
  }
  function wd(e, t) {
    if (su()) return null;
    md(e, t, !0);
  }
  function Kv() {
    a0(function () {
      (Ae & 6) !== 0 ? fn(Yl, Zv) : Bd();
    });
  }
  function Rs() {
    if (Bl === 0) {
      var e = Bn;
      (e === 0 && ((e = ci), (ci <<= 1), (ci & 261888) === 0 && (ci = 256)), (Bl = e));
    }
    return Bl;
  }
  function Hd(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : pi('' + e);
  }
  function _d(e, t) {
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
  function Jv(e, t, l, n, a) {
    if (t === 'submit' && l && l.stateNode === a) {
      var u = Hd((a[ut] || null).action),
        p = n.submitter;
      p &&
        ((t = (t = p[ut] || null) ? Hd(t.formAction) : p.getAttribute('formAction')),
        t !== null && ((u = t), (p = null)));
      var A = new Ti('action', 'action', null, n, a);
      e.push({
        event: A,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (Bl !== 0) {
                  var H = p ? _d(a, p) : new FormData(a);
                  Jr(l, { pending: !0, data: H, method: a.method, action: u }, null, H);
                }
              } else
                typeof u == 'function' &&
                  (A.preventDefault(),
                  (H = p ? _d(a, p) : new FormData(a)),
                  Jr(l, { pending: !0, data: H, method: a.method, action: u }, u, H));
            },
            currentTarget: a,
          },
        ],
      });
    }
  }
  for (var zs = 0; zs < fr.length; zs++) {
    var Ds = fr[zs],
      Fv = Ds.toLowerCase(),
      $v = Ds[0].toUpperCase() + Ds.slice(1);
    Ht(Fv, 'on' + $v);
  }
  (Ht(hf, 'onAnimationEnd'),
    Ht(mf, 'onAnimationIteration'),
    Ht(vf, 'onAnimationStart'),
    Ht('dblclick', 'onDoubleClick'),
    Ht('focusin', 'onFocus'),
    Ht('focusout', 'onBlur'),
    Ht(cv, 'onTransitionRun'),
    Ht(dv, 'onTransitionStart'),
    Ht(hv, 'onTransitionCancel'),
    Ht(gf, 'onTransitionEnd'),
    yn('onMouseEnter', ['mouseout', 'mouseover']),
    yn('onMouseLeave', ['mouseout', 'mouseover']),
    yn('onPointerEnter', ['pointerout', 'pointerover']),
    yn('onPointerLeave', ['pointerout', 'pointerover']),
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
  var Ya =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Wv = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Ya)
    );
  function Ld(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l],
        a = n.event;
      n = n.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var p = n.length - 1; 0 <= p; p--) {
            var A = n[p],
              H = A.instance,
              Z = A.currentTarget;
            if (((A = A.listener), H !== u && a.isPropagationStopped())) break e;
            ((u = A), (a.currentTarget = Z));
            try {
              u(a);
            } catch (W) {
              Ai(W);
            }
            ((a.currentTarget = null), (u = H));
          }
        else
          for (p = 0; p < n.length; p++) {
            if (
              ((A = n[p]),
              (H = A.instance),
              (Z = A.currentTarget),
              (A = A.listener),
              H !== u && a.isPropagationStopped())
            )
              break e;
            ((u = A), (a.currentTarget = Z));
            try {
              u(a);
            } catch (W) {
              Ai(W);
            }
            ((a.currentTarget = null), (u = H));
          }
      }
    }
  }
  function Se(e, t) {
    var l = t[qu];
    l === void 0 && (l = t[qu] = new Set());
    var n = e + '__bubble';
    l.has(n) || (jd(t, e, 2, !1), l.add(n));
  }
  function Os(e, t, l) {
    var n = 0;
    (t && (n |= 4), jd(l, e, n, t));
  }
  var cu = '_reactListening' + Math.random().toString(36).slice(2);
  function Bs(e) {
    if (!e[cu]) {
      ((e[cu] = !0),
        Oo.forEach(function (l) {
          l !== 'selectionchange' && (Wv.has(l) || Os(l, !1, e), Os(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[cu] || ((t[cu] = !0), Os('selectionchange', !1, t));
    }
  }
  function jd(e, t, l, n) {
    switch (hh(t)) {
      case 2:
        var a = M0;
        break;
      case 8:
        a = A0;
        break;
      default:
        a = Ks;
    }
    ((l = a.bind(null, t, l, e)),
      (a = void 0),
      !ku || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (a = !0),
      n
        ? a !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: a })
          : e.addEventListener(t, l, !0)
        : a !== void 0
          ? e.addEventListener(t, l, { passive: a })
          : e.addEventListener(t, l, !1));
  }
  function Us(e, t, l, n, a) {
    var u = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (;;) {
        if (n === null) return;
        var p = n.tag;
        if (p === 3 || p === 4) {
          var A = n.stateNode.containerInfo;
          if (A === a) break;
          if (p === 4)
            for (p = n.return; p !== null; ) {
              var H = p.tag;
              if ((H === 3 || H === 4) && p.stateNode.containerInfo === a) return;
              p = p.return;
            }
          for (; A !== null; ) {
            if (((p = mn(A)), p === null)) return;
            if (((H = p.tag), H === 5 || H === 6 || H === 26 || H === 27)) {
              n = u = p;
              continue e;
            }
            A = A.parentNode;
          }
        }
        n = n.return;
      }
    qo(function () {
      var Z = u,
        W = $u(l),
        P = [];
      e: {
        var K = yf.get(e);
        if (K !== void 0) {
          var F = Ti,
            oe = e;
          switch (e) {
            case 'keypress':
              if (xi(l) === 0) break e;
            case 'keydown':
            case 'keyup':
              F = Xm;
              break;
            case 'focusin':
              ((oe = 'focus'), (F = tr));
              break;
            case 'focusout':
              ((oe = 'blur'), (F = tr));
              break;
            case 'beforeblur':
            case 'afterblur':
              F = tr;
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
              F = Zo;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              F = Bm;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              F = Km;
              break;
            case hf:
            case mf:
            case vf:
              F = wm;
              break;
            case gf:
              F = Fm;
              break;
            case 'scroll':
            case 'scrollend':
              F = Dm;
              break;
            case 'wheel':
              F = Wm;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              F = _m;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              F = Jo;
              break;
            case 'toggle':
            case 'beforetoggle':
              F = Pm;
          }
          var he = (t & 4) !== 0,
            Be = !he && (e === 'scroll' || e === 'scrollend'),
            V = he ? (K !== null ? K + 'Capture' : null) : K;
          he = [];
          for (var Y = Z, Q; Y !== null; ) {
            var k = Y;
            if (
              ((Q = k.stateNode),
              (k = k.tag),
              (k !== 5 && k !== 26 && k !== 27) ||
                Q === null ||
                V === null ||
                ((k = ra(Y, V)), k != null && he.push(Ga(Y, k, Q))),
              Be)
            )
              break;
            Y = Y.return;
          }
          0 < he.length && ((K = new F(K, oe, null, l, W)), P.push({ event: K, listeners: he }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((K = e === 'mouseover' || e === 'pointerover'),
            (F = e === 'mouseout' || e === 'pointerout'),
            K && l !== Fu && (oe = l.relatedTarget || l.fromElement) && (mn(oe) || oe[hn]))
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
              ? ((oe = l.relatedTarget || l.toElement),
                (F = Z),
                (oe = oe ? mn(oe) : null),
                oe !== null &&
                  ((Be = i(oe)), (he = oe.tag), oe !== Be || (he !== 5 && he !== 27 && he !== 6)) &&
                  (oe = null))
              : ((F = null), (oe = Z)),
            F !== oe)
          ) {
            if (
              ((he = Zo),
              (k = 'onMouseLeave'),
              (V = 'onMouseEnter'),
              (Y = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((he = Jo), (k = 'onPointerLeave'), (V = 'onPointerEnter'), (Y = 'pointer')),
              (Be = F == null ? K : ua(F)),
              (Q = oe == null ? K : ua(oe)),
              (K = new he(k, Y + 'leave', F, l, W)),
              (K.target = Be),
              (K.relatedTarget = Q),
              (k = null),
              mn(W) === Z &&
                ((he = new he(V, Y + 'enter', oe, l, W)),
                (he.target = Q),
                (he.relatedTarget = Be),
                (k = he)),
              (Be = k),
              F && oe)
            )
              t: {
                for (he = kv, V = F, Y = oe, Q = 0, k = V; k; k = he(k)) Q++;
                k = 0;
                for (var ce = Y; ce; ce = he(ce)) k++;
                for (; 0 < Q - k; ) ((V = he(V)), Q--);
                for (; 0 < k - Q; ) ((Y = he(Y)), k--);
                for (; Q--; ) {
                  if (V === Y || (Y !== null && V === Y.alternate)) {
                    he = V;
                    break t;
                  }
                  ((V = he(V)), (Y = he(Y)));
                }
                he = null;
              }
            else he = null;
            (F !== null && Yd(P, K, F, he, !1),
              oe !== null && Be !== null && Yd(P, Be, oe, he, !0));
          }
        }
        e: {
          if (
            ((K = Z ? ua(Z) : window),
            (F = K.nodeName && K.nodeName.toLowerCase()),
            F === 'select' || (F === 'input' && K.type === 'file'))
          )
            var be = tf;
          else if (Io(K))
            if (lf) be = sv;
            else {
              be = uv;
              var fe = iv;
            }
          else
            ((F = K.nodeName),
              !F || F.toLowerCase() !== 'input' || (K.type !== 'checkbox' && K.type !== 'radio')
                ? Z && Ju(Z.elementType) && (be = tf)
                : (be = rv));
          if (be && (be = be(e, Z))) {
            ef(P, be, l, W);
            break e;
          }
          (fe && fe(e, K, Z),
            e === 'focusout' &&
              Z &&
              K.type === 'number' &&
              Z.memoizedProps.value != null &&
              Ku(K, 'number', K.value));
        }
        switch (((fe = Z ? ua(Z) : window), e)) {
          case 'focusin':
            (Io(fe) || fe.contentEditable === 'true') && ((bn = fe), (rr = Z), (va = null));
            break;
          case 'focusout':
            va = rr = bn = null;
            break;
          case 'mousedown':
            sr = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((sr = !1), cf(P, l, W));
            break;
          case 'selectionchange':
            if (fv) break;
          case 'keydown':
          case 'keyup':
            cf(P, l, W);
        }
        var ge;
        if (nr)
          e: {
            switch (e) {
              case 'compositionstart':
                var Ee = 'onCompositionStart';
                break e;
              case 'compositionend':
                Ee = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Ee = 'onCompositionUpdate';
                break e;
            }
            Ee = void 0;
          }
        else
          Tn
            ? ko(e, l) && (Ee = 'onCompositionEnd')
            : e === 'keydown' && l.keyCode === 229 && (Ee = 'onCompositionStart');
        (Ee &&
          (Fo &&
            l.locale !== 'ko' &&
            (Tn || Ee !== 'onCompositionStart'
              ? Ee === 'onCompositionEnd' && Tn && (ge = Xo())
              : ((vl = W), (Pu = 'value' in vl ? vl.value : vl.textContent), (Tn = !0))),
          (fe = du(Z, Ee)),
          0 < fe.length &&
            ((Ee = new Ko(Ee, e, null, l, W)),
            P.push({ event: Ee, listeners: fe }),
            ge ? (Ee.data = ge) : ((ge = Po(l)), ge !== null && (Ee.data = ge)))),
          (ge = ev ? tv(e, l) : lv(e, l)) &&
            ((Ee = du(Z, 'onBeforeInput')),
            0 < Ee.length &&
              ((fe = new Ko('onBeforeInput', 'beforeinput', null, l, W)),
              P.push({ event: fe, listeners: Ee }),
              (fe.data = ge))),
          Jv(P, e, Z, l, W));
      }
      Ld(P, t);
    });
  }
  function Ga(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function du(e, t) {
    for (var l = t + 'Capture', n = []; e !== null; ) {
      var a = e,
        u = a.stateNode;
      if (
        ((a = a.tag),
        (a !== 5 && a !== 26 && a !== 27) ||
          u === null ||
          ((a = ra(e, l)),
          a != null && n.unshift(Ga(e, a, u)),
          (a = ra(e, t)),
          a != null && n.push(Ga(e, a, u))),
        e.tag === 3)
      )
        return n;
      e = e.return;
    }
    return [];
  }
  function kv(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Yd(e, t, l, n, a) {
    for (var u = t._reactName, p = []; l !== null && l !== n; ) {
      var A = l,
        H = A.alternate,
        Z = A.stateNode;
      if (((A = A.tag), H !== null && H === n)) break;
      ((A !== 5 && A !== 26 && A !== 27) ||
        Z === null ||
        ((H = Z),
        a
          ? ((Z = ra(l, u)), Z != null && p.unshift(Ga(l, Z, H)))
          : a || ((Z = ra(l, u)), Z != null && p.push(Ga(l, Z, H)))),
        (l = l.return));
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Pv = /\r\n?/g,
    Iv = /\u0000|\uFFFD/g;
  function Gd(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Pv,
        `
`
      )
      .replace(Iv, '');
  }
  function Vd(e, t) {
    return ((t = Gd(t)), Gd(e) === t);
  }
  function Oe(e, t, l, n, a, u) {
    switch (l) {
      case 'children':
        typeof n == 'string'
          ? t === 'body' || (t === 'textarea' && n === '') || Sn(e, n)
          : (typeof n == 'number' || typeof n == 'bigint') && t !== 'body' && Sn(e, '' + n);
        break;
      case 'className':
        gi(e, 'class', n);
        break;
      case 'tabIndex':
        gi(e, 'tabindex', n);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        gi(e, l, n);
        break;
      case 'style':
        Go(e, n, u);
        break;
      case 'data':
        if (t !== 'object') {
          gi(e, 'data', n);
          break;
        }
      case 'src':
      case 'href':
        if (n === '' && (t !== 'a' || l !== 'href')) {
          e.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == 'function' || typeof n == 'symbol' || typeof n == 'boolean') {
          e.removeAttribute(l);
          break;
        }
        ((n = pi('' + n)), e.setAttribute(l, n));
        break;
      case 'action':
      case 'formAction':
        if (typeof n == 'function') {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == 'function' &&
            (l === 'formAction'
              ? (t !== 'input' && Oe(e, t, 'name', a.name, a, null),
                Oe(e, t, 'formEncType', a.formEncType, a, null),
                Oe(e, t, 'formMethod', a.formMethod, a, null),
                Oe(e, t, 'formTarget', a.formTarget, a, null))
              : (Oe(e, t, 'encType', a.encType, a, null),
                Oe(e, t, 'method', a.method, a, null),
                Oe(e, t, 'target', a.target, a, null)));
        if (n == null || typeof n == 'symbol' || typeof n == 'boolean') {
          e.removeAttribute(l);
          break;
        }
        ((n = pi('' + n)), e.setAttribute(l, n));
        break;
      case 'onClick':
        n != null && (e.onclick = Kt);
        break;
      case 'onScroll':
        n != null && Se('scroll', e);
        break;
      case 'onScrollEnd':
        n != null && Se('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (n != null) {
          if (typeof n != 'object' || !('__html' in n)) throw Error(E(61));
          if (((l = n.__html), l != null)) {
            if (a.children != null) throw Error(E(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'multiple':
        e.multiple = n && typeof n != 'function' && typeof n != 'symbol';
        break;
      case 'muted':
        e.muted = n && typeof n != 'function' && typeof n != 'symbol';
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
        if (n == null || typeof n == 'function' || typeof n == 'boolean' || typeof n == 'symbol') {
          e.removeAttribute('xlink:href');
          break;
        }
        ((l = pi('' + n)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        n != null && typeof n != 'function' && typeof n != 'symbol'
          ? e.setAttribute(l, '' + n)
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
        n && typeof n != 'function' && typeof n != 'symbol'
          ? e.setAttribute(l, '')
          : e.removeAttribute(l);
        break;
      case 'capture':
      case 'download':
        n === !0
          ? e.setAttribute(l, '')
          : n !== !1 && n != null && typeof n != 'function' && typeof n != 'symbol'
            ? e.setAttribute(l, n)
            : e.removeAttribute(l);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        n != null && typeof n != 'function' && typeof n != 'symbol' && !isNaN(n) && 1 <= n
          ? e.setAttribute(l, n)
          : e.removeAttribute(l);
        break;
      case 'rowSpan':
      case 'start':
        n == null || typeof n == 'function' || typeof n == 'symbol' || isNaN(n)
          ? e.removeAttribute(l)
          : e.setAttribute(l, n);
        break;
      case 'popover':
        (Se('beforetoggle', e), Se('toggle', e), vi(e, 'popover', n));
        break;
      case 'xlinkActuate':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', n);
        break;
      case 'xlinkArcrole':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', n);
        break;
      case 'xlinkRole':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', n);
        break;
      case 'xlinkShow':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', n);
        break;
      case 'xlinkTitle':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', n);
        break;
      case 'xlinkType':
        Zt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', n);
        break;
      case 'xmlBase':
        Zt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', n);
        break;
      case 'xmlLang':
        Zt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', n);
        break;
      case 'xmlSpace':
        Zt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', n);
        break;
      case 'is':
        vi(e, 'is', n);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) || (l[0] !== 'o' && l[0] !== 'O') || (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = Rm.get(l) || l), vi(e, l, n));
    }
  }
  function Ns(e, t, l, n, a, u) {
    switch (l) {
      case 'style':
        Go(e, n, u);
        break;
      case 'dangerouslySetInnerHTML':
        if (n != null) {
          if (typeof n != 'object' || !('__html' in n)) throw Error(E(61));
          if (((l = n.__html), l != null)) {
            if (a.children != null) throw Error(E(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'children':
        typeof n == 'string'
          ? Sn(e, n)
          : (typeof n == 'number' || typeof n == 'bigint') && Sn(e, '' + n);
        break;
      case 'onScroll':
        n != null && Se('scroll', e);
        break;
      case 'onScrollEnd':
        n != null && Se('scrollend', e);
        break;
      case 'onClick':
        n != null && (e.onclick = Kt);
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
        if (!Bo.hasOwnProperty(l))
          e: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((a = l.endsWith('Capture')),
              (t = l.slice(2, a ? l.length - 7 : void 0)),
              (u = e[ut] || null),
              (u = u != null ? u[l] : null),
              typeof u == 'function' && e.removeEventListener(t, u, a),
              typeof n == 'function')
            ) {
              (typeof u != 'function' &&
                u !== null &&
                (l in e ? (e[l] = null) : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, n, a));
              break e;
            }
            l in e ? (e[l] = n) : n === !0 ? e.setAttribute(l, '') : vi(e, l, n);
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
        (Se('error', e), Se('load', e));
        var n = !1,
          a = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var p = l[u];
            if (p != null)
              switch (u) {
                case 'src':
                  n = !0;
                  break;
                case 'srcSet':
                  a = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(E(137, t));
                default:
                  Oe(e, t, u, p, l, null);
              }
          }
        (a && Oe(e, t, 'srcSet', l.srcSet, l, null), n && Oe(e, t, 'src', l.src, l, null));
        return;
      case 'input':
        Se('invalid', e);
        var A = (u = p = a = null),
          H = null,
          Z = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var W = l[n];
            if (W != null)
              switch (n) {
                case 'name':
                  a = W;
                  break;
                case 'type':
                  p = W;
                  break;
                case 'checked':
                  H = W;
                  break;
                case 'defaultChecked':
                  Z = W;
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
                  Oe(e, t, n, W, l, null);
              }
          }
        _o(e, u, A, H, Z, p, a, !1);
        return;
      case 'select':
        (Se('invalid', e), (n = p = u = null));
        for (a in l)
          if (l.hasOwnProperty(a) && ((A = l[a]), A != null))
            switch (a) {
              case 'value':
                u = A;
                break;
              case 'defaultValue':
                p = A;
                break;
              case 'multiple':
                n = A;
              default:
                Oe(e, t, a, A, l, null);
            }
        ((t = u),
          (l = p),
          (e.multiple = !!n),
          t != null ? pn(e, !!n, t, !1) : l != null && pn(e, !!n, l, !0));
        return;
      case 'textarea':
        (Se('invalid', e), (u = a = n = null));
        for (p in l)
          if (l.hasOwnProperty(p) && ((A = l[p]), A != null))
            switch (p) {
              case 'value':
                n = A;
                break;
              case 'defaultValue':
                a = A;
                break;
              case 'children':
                u = A;
                break;
              case 'dangerouslySetInnerHTML':
                if (A != null) throw Error(E(91));
                break;
              default:
                Oe(e, t, p, A, l, null);
            }
        jo(e, n, a, u);
        return;
      case 'option':
        for (H in l)
          if (l.hasOwnProperty(H) && ((n = l[H]), n != null))
            switch (H) {
              case 'selected':
                e.selected = n && typeof n != 'function' && typeof n != 'symbol';
                break;
              default:
                Oe(e, t, H, n, l, null);
            }
        return;
      case 'dialog':
        (Se('beforetoggle', e), Se('toggle', e), Se('cancel', e), Se('close', e));
        break;
      case 'iframe':
      case 'object':
        Se('load', e);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < Ya.length; n++) Se(Ya[n], e);
        break;
      case 'image':
        (Se('error', e), Se('load', e));
        break;
      case 'details':
        Se('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (Se('error', e), Se('load', e));
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
        for (Z in l)
          if (l.hasOwnProperty(Z) && ((n = l[Z]), n != null))
            switch (Z) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(E(137, t));
              default:
                Oe(e, t, Z, n, l, null);
            }
        return;
      default:
        if (Ju(t)) {
          for (W in l)
            l.hasOwnProperty(W) && ((n = l[W]), n !== void 0 && Ns(e, t, W, n, l, void 0));
          return;
        }
    }
    for (A in l) l.hasOwnProperty(A) && ((n = l[A]), n != null && Oe(e, t, A, n, l, null));
  }
  function e0(e, t, l, n) {
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
        var a = null,
          u = null,
          p = null,
          A = null,
          H = null,
          Z = null,
          W = null;
        for (F in l) {
          var P = l[F];
          if (l.hasOwnProperty(F) && P != null)
            switch (F) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                H = P;
              default:
                n.hasOwnProperty(F) || Oe(e, t, F, null, n, P);
            }
        }
        for (var K in n) {
          var F = n[K];
          if (((P = l[K]), n.hasOwnProperty(K) && (F != null || P != null)))
            switch (K) {
              case 'type':
                u = F;
                break;
              case 'name':
                a = F;
                break;
              case 'checked':
                Z = F;
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
                F !== P && Oe(e, t, K, F, n, P);
            }
        }
        Zu(e, p, A, H, Z, W, u, a);
        return;
      case 'select':
        F = p = A = K = null;
        for (u in l)
          if (((H = l[u]), l.hasOwnProperty(u) && H != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                F = H;
              default:
                n.hasOwnProperty(u) || Oe(e, t, u, null, n, H);
            }
        for (a in n)
          if (((u = n[a]), (H = l[a]), n.hasOwnProperty(a) && (u != null || H != null)))
            switch (a) {
              case 'value':
                K = u;
                break;
              case 'defaultValue':
                A = u;
                break;
              case 'multiple':
                p = u;
              default:
                u !== H && Oe(e, t, a, u, n, H);
            }
        ((t = A),
          (l = p),
          (n = F),
          K != null
            ? pn(e, !!l, K, !1)
            : !!n != !!l && (t != null ? pn(e, !!l, t, !0) : pn(e, !!l, l ? [] : '', !1)));
        return;
      case 'textarea':
        F = K = null;
        for (A in l)
          if (((a = l[A]), l.hasOwnProperty(A) && a != null && !n.hasOwnProperty(A)))
            switch (A) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Oe(e, t, A, null, n, a);
            }
        for (p in n)
          if (((a = n[p]), (u = l[p]), n.hasOwnProperty(p) && (a != null || u != null)))
            switch (p) {
              case 'value':
                K = a;
                break;
              case 'defaultValue':
                F = a;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (a != null) throw Error(E(91));
                break;
              default:
                a !== u && Oe(e, t, p, a, n, u);
            }
        Lo(e, K, F);
        return;
      case 'option':
        for (var oe in l)
          if (((K = l[oe]), l.hasOwnProperty(oe) && K != null && !n.hasOwnProperty(oe)))
            switch (oe) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                Oe(e, t, oe, null, n, K);
            }
        for (H in n)
          if (((K = n[H]), (F = l[H]), n.hasOwnProperty(H) && K !== F && (K != null || F != null)))
            switch (H) {
              case 'selected':
                e.selected = K && typeof K != 'function' && typeof K != 'symbol';
                break;
              default:
                Oe(e, t, H, K, n, F);
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
        for (var he in l)
          ((K = l[he]),
            l.hasOwnProperty(he) && K != null && !n.hasOwnProperty(he) && Oe(e, t, he, null, n, K));
        for (Z in n)
          if (((K = n[Z]), (F = l[Z]), n.hasOwnProperty(Z) && K !== F && (K != null || F != null)))
            switch (Z) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (K != null) throw Error(E(137, t));
                break;
              default:
                Oe(e, t, Z, K, n, F);
            }
        return;
      default:
        if (Ju(t)) {
          for (var Be in l)
            ((K = l[Be]),
              l.hasOwnProperty(Be) &&
                K !== void 0 &&
                !n.hasOwnProperty(Be) &&
                Ns(e, t, Be, void 0, n, K));
          for (W in n)
            ((K = n[W]),
              (F = l[W]),
              !n.hasOwnProperty(W) ||
                K === F ||
                (K === void 0 && F === void 0) ||
                Ns(e, t, W, K, n, F));
          return;
        }
    }
    for (var V in l)
      ((K = l[V]),
        l.hasOwnProperty(V) && K != null && !n.hasOwnProperty(V) && Oe(e, t, V, null, n, K));
    for (P in n)
      ((K = n[P]),
        (F = l[P]),
        !n.hasOwnProperty(P) || K === F || (K == null && F == null) || Oe(e, t, P, K, n, F));
  }
  function qd(e) {
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
  function t0() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType('resource'), n = 0;
        n < l.length;
        n++
      ) {
        var a = l[n],
          u = a.transferSize,
          p = a.initiatorType,
          A = a.duration;
        if (u && A && qd(p)) {
          for (p = 0, A = a.responseEnd, n += 1; n < l.length; n++) {
            var H = l[n],
              Z = H.startTime;
            if (Z > A) break;
            var W = H.transferSize,
              P = H.initiatorType;
            W && qd(P) && ((H = H.responseEnd), (p += W * (H < A ? 1 : (A - Z) / (H - Z))));
          }
          if ((--n, (t += (8 * (u + p)) / (a.duration / 1e3)), e++, 10 < e)) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && ((e = navigator.connection.downlink), typeof e == 'number')
      ? e
      : 5;
  }
  var ws = null,
    Hs = null;
  function hu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Xd(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Qd(e, t) {
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
  function _s(e, t) {
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
  var Ls = null;
  function l0() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === Ls ? !1 : ((Ls = e), !0)) : ((Ls = null), !1);
  }
  var Zd = typeof setTimeout == 'function' ? setTimeout : void 0,
    n0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Kd = typeof Promise == 'function' ? Promise : void 0,
    a0 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Kd < 'u'
          ? function (e) {
              return Kd.resolve(null).then(e).catch(i0);
            }
          : Zd;
  function i0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ul(e) {
    return e === 'head';
  }
  function Jd(e, t) {
    var l = t,
      n = 0;
    do {
      var a = l.nextSibling;
      if ((e.removeChild(l), a && a.nodeType === 8))
        if (((l = a.data), l === '/$' || l === '/&')) {
          if (n === 0) {
            (e.removeChild(a), Wn(t));
            return;
          }
          n--;
        } else if (l === '$' || l === '$?' || l === '$~' || l === '$!' || l === '&') n++;
        else if (l === 'html') Va(e.ownerDocument.documentElement);
        else if (l === 'head') {
          ((l = e.ownerDocument.head), Va(l));
          for (var u = l.firstChild; u; ) {
            var p = u.nextSibling,
              A = u.nodeName;
            (u[ia] ||
              A === 'SCRIPT' ||
              A === 'STYLE' ||
              (A === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              l.removeChild(u),
              (u = p));
          }
        } else l === 'body' && Va(e.ownerDocument.body);
      l = a;
    } while (l);
    Wn(t);
  }
  function Fd(e, t) {
    var l = e;
    e = 0;
    do {
      var n = l.nextSibling;
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
        n && n.nodeType === 8)
      )
        if (((l = n.data), l === '/$')) {
          if (e === 0) break;
          e--;
        } else (l !== '$' && l !== '$?' && l !== '$~' && l !== '$!') || e++;
      l = n;
    } while (l);
  }
  function js(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (js(l), Xu(l));
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
  function u0(e, t, l, n) {
    for (; e.nodeType === 1; ) {
      var a = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (n) {
        if (!e[ia])
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
                u !== a.rel ||
                e.getAttribute('href') !== (a.href == null || a.href === '' ? null : a.href) ||
                e.getAttribute('crossorigin') !== (a.crossOrigin == null ? null : a.crossOrigin) ||
                e.getAttribute('title') !== (a.title == null ? null : a.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((u = e.getAttribute('src')),
                (u !== (a.src == null ? null : a.src) ||
                  e.getAttribute('type') !== (a.type == null ? null : a.type) ||
                  e.getAttribute('crossorigin') !==
                    (a.crossOrigin == null ? null : a.crossOrigin)) &&
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
        var u = a.name == null ? null : '' + a.name;
        if (a.type === 'hidden' && e.getAttribute('name') === u) return e;
      } else return e;
      if (((e = Bt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function r0(e, t, l) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !l) ||
        ((e = Bt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function $d(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
        ((e = Bt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ys(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function Gs(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
  }
  function s0(e, t) {
    var l = e.ownerDocument;
    if (e.data === '$~') e._reactRetry = t;
    else if (e.data !== '$?' || l.readyState !== 'loading') t();
    else {
      var n = function () {
        (t(), l.removeEventListener('DOMContentLoaded', n));
      };
      (l.addEventListener('DOMContentLoaded', n), (e._reactRetry = n));
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
  var Vs = null;
  function Wd(e) {
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
  function kd(e) {
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
  function Pd(e, t, l) {
    switch (((t = hu(l)), e)) {
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
  function Va(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Xu(e);
  }
  var Ut = new Map(),
    Id = new Set();
  function mu(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var sl = X.d;
  X.d = { f: o0, r: f0, D: c0, C: d0, L: h0, m: m0, X: g0, S: v0, M: y0 };
  function o0() {
    var e = sl.f(),
      t = iu();
    return e || t;
  }
  function f0(e) {
    var t = vn(e);
    t !== null && t.tag === 5 && t.type === 'form' ? gc(t) : sl.r(e);
  }
  var Jn = typeof document > 'u' ? null : document;
  function eh(e, t, l) {
    var n = Jn;
    if (n && typeof t == 'string' && t) {
      var a = Mt(t);
      ((a = 'link[rel="' + e + '"][href="' + a + '"]'),
        typeof l == 'string' && (a += '[crossorigin="' + l + '"]'),
        Id.has(a) ||
          (Id.add(a),
          (e = { rel: e, crossOrigin: l, href: t }),
          n.querySelector(a) === null &&
            ((t = n.createElement('link')), et(t, 'link', e), Fe(t), n.head.appendChild(t))));
    }
  }
  function c0(e) {
    (sl.D(e), eh('dns-prefetch', e, null));
  }
  function d0(e, t) {
    (sl.C(e, t), eh('preconnect', e, t));
  }
  function h0(e, t, l) {
    sl.L(e, t, l);
    var n = Jn;
    if (n && e && t) {
      var a = 'link[rel="preload"][as="' + Mt(t) + '"]';
      t === 'image' && l && l.imageSrcSet
        ? ((a += '[imagesrcset="' + Mt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == 'string' && (a += '[imagesizes="' + Mt(l.imageSizes) + '"]'))
        : (a += '[href="' + Mt(e) + '"]');
      var u = a;
      switch (t) {
        case 'style':
          u = Fn(e);
          break;
        case 'script':
          u = $n(e);
      }
      Ut.has(u) ||
        ((e = g(
          { rel: 'preload', href: t === 'image' && l && l.imageSrcSet ? void 0 : e, as: t },
          l
        )),
        Ut.set(u, e),
        n.querySelector(a) !== null ||
          (t === 'style' && n.querySelector(qa(u))) ||
          (t === 'script' && n.querySelector(Xa(u))) ||
          ((t = n.createElement('link')), et(t, 'link', e), Fe(t), n.head.appendChild(t)));
    }
  }
  function m0(e, t) {
    sl.m(e, t);
    var l = Jn;
    if (l && e) {
      var n = t && typeof t.as == 'string' ? t.as : 'script',
        a = 'link[rel="modulepreload"][as="' + Mt(n) + '"][href="' + Mt(e) + '"]',
        u = a;
      switch (n) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = $n(e);
      }
      if (
        !Ut.has(u) &&
        ((e = g({ rel: 'modulepreload', href: e }, t)), Ut.set(u, e), l.querySelector(a) === null)
      ) {
        switch (n) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(Xa(u))) return;
        }
        ((n = l.createElement('link')), et(n, 'link', e), Fe(n), l.head.appendChild(n));
      }
    }
  }
  function v0(e, t, l) {
    sl.S(e, t, l);
    var n = Jn;
    if (n && e) {
      var a = gn(n).hoistableStyles,
        u = Fn(e);
      t = t || 'default';
      var p = a.get(u);
      if (!p) {
        var A = { loading: 0, preload: null };
        if ((p = n.querySelector(qa(u)))) A.loading = 5;
        else {
          ((e = g({ rel: 'stylesheet', href: e, 'data-precedence': t }, l)),
            (l = Ut.get(u)) && qs(e, l));
          var H = (p = n.createElement('link'));
          (Fe(H),
            et(H, 'link', e),
            (H._p = new Promise(function (Z, W) {
              ((H.onload = Z), (H.onerror = W));
            })),
            H.addEventListener('load', function () {
              A.loading |= 1;
            }),
            H.addEventListener('error', function () {
              A.loading |= 2;
            }),
            (A.loading |= 4),
            vu(p, t, n));
        }
        ((p = { type: 'stylesheet', instance: p, count: 1, state: A }), a.set(u, p));
      }
    }
  }
  function g0(e, t) {
    sl.X(e, t);
    var l = Jn;
    if (l && e) {
      var n = gn(l).hoistableScripts,
        a = $n(e),
        u = n.get(a);
      u ||
        ((u = l.querySelector(Xa(a))),
        u ||
          ((e = g({ src: e, async: !0 }, t)),
          (t = Ut.get(a)) && Xs(e, t),
          (u = l.createElement('script')),
          Fe(u),
          et(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        n.set(a, u));
    }
  }
  function y0(e, t) {
    sl.M(e, t);
    var l = Jn;
    if (l && e) {
      var n = gn(l).hoistableScripts,
        a = $n(e),
        u = n.get(a);
      u ||
        ((u = l.querySelector(Xa(a))),
        u ||
          ((e = g({ src: e, async: !0, type: 'module' }, t)),
          (t = Ut.get(a)) && Xs(e, t),
          (u = l.createElement('script')),
          Fe(u),
          et(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        n.set(a, u));
    }
  }
  function th(e, t, l, n) {
    var a = (a = ie.current) ? mu(a) : null;
    if (!a) throw Error(E(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string'
          ? ((t = Fn(l.href)),
            (l = gn(a).hoistableStyles),
            (n = l.get(t)),
            n || ((n = { type: 'style', instance: null, count: 0, state: null }), l.set(t, n)),
            n)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          l.rel === 'stylesheet' &&
          typeof l.href == 'string' &&
          typeof l.precedence == 'string'
        ) {
          e = Fn(l.href);
          var u = gn(a).hoistableStyles,
            p = u.get(e);
          if (
            (p ||
              ((a = a.ownerDocument || a),
              (p = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, p),
              (u = a.querySelector(qa(e))) && !u._p && ((p.instance = u), (p.state.loading = 5)),
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
                u || p0(a, e, l, p.state))),
            t && n === null)
          )
            throw Error(E(528, ''));
          return p;
        }
        if (t && n !== null) throw Error(E(529, ''));
        return null;
      case 'script':
        return (
          (t = l.async),
          (l = l.src),
          typeof l == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = $n(l)),
              (l = gn(a).hoistableScripts),
              (n = l.get(t)),
              n || ((n = { type: 'script', instance: null, count: 0, state: null }), l.set(t, n)),
              n)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(E(444, e));
    }
  }
  function Fn(e) {
    return 'href="' + Mt(e) + '"';
  }
  function qa(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function lh(e) {
    return g({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function p0(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (n.loading = 1)
      : ((t = e.createElement('link')),
        (n.preload = t),
        t.addEventListener('load', function () {
          return (n.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (n.loading |= 2);
        }),
        et(t, 'link', l),
        Fe(t),
        e.head.appendChild(t));
  }
  function $n(e) {
    return '[src="' + Mt(e) + '"]';
  }
  function Xa(e) {
    return 'script[async]' + e;
  }
  function nh(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var n = e.querySelector('style[data-href~="' + Mt(l.href) + '"]');
          if (n) return ((t.instance = n), Fe(n), n);
          var a = g({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (n = (e.ownerDocument || e).createElement('style')),
            Fe(n),
            et(n, 'style', a),
            vu(n, l.precedence, e),
            (t.instance = n)
          );
        case 'stylesheet':
          a = Fn(l.href);
          var u = e.querySelector(qa(a));
          if (u) return ((t.state.loading |= 4), (t.instance = u), Fe(u), u);
          ((n = lh(l)),
            (a = Ut.get(a)) && qs(n, a),
            (u = (e.ownerDocument || e).createElement('link')),
            Fe(u));
          var p = u;
          return (
            (p._p = new Promise(function (A, H) {
              ((p.onload = A), (p.onerror = H));
            })),
            et(u, 'link', n),
            (t.state.loading |= 4),
            vu(u, l.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = $n(l.src)),
            (a = e.querySelector(Xa(u)))
              ? ((t.instance = a), Fe(a), a)
              : ((n = l),
                (a = Ut.get(u)) && ((n = g({}, l)), Xs(n, a)),
                (e = e.ownerDocument || e),
                (a = e.createElement('script')),
                Fe(a),
                et(a, 'link', n),
                e.head.appendChild(a),
                (t.instance = a))
          );
        case 'void':
          return null;
        default:
          throw Error(E(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((n = t.instance), (t.state.loading |= 4), vu(n, l.precedence, e));
    return t.instance;
  }
  function vu(e, t, l) {
    for (
      var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        a = n.length ? n[n.length - 1] : null,
        u = a,
        p = 0;
      p < n.length;
      p++
    ) {
      var A = n[p];
      if (A.dataset.precedence === t) u = A;
      else if (u !== a) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function qs(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Xs(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var gu = null;
  function ah(e, t, l) {
    if (gu === null) {
      var n = new Map(),
        a = (gu = new Map());
      a.set(l, n);
    } else ((a = gu), (n = a.get(l)), n || ((n = new Map()), a.set(l, n)));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++) {
      var u = l[a];
      if (
        !(u[ia] || u[We] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var p = u.getAttribute(t) || '';
        p = e + p;
        var A = n.get(p);
        A ? A.push(u) : n.set(p, [u]);
      }
    }
    return n;
  }
  function ih(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(l, t === 'title' ? e.querySelector('head > title') : null));
  }
  function S0(e, t, l) {
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
  function uh(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function x0(e, t, l, n) {
    if (
      l.type === 'stylesheet' &&
      (typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var a = Fn(n.href),
          u = t.querySelector(qa(a));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = yu.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = u),
            Fe(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (n = lh(n)),
          (a = Ut.get(a)) && qs(n, a),
          (u = u.createElement('link')),
          Fe(u));
        var p = u;
        ((p._p = new Promise(function (A, H) {
          ((p.onload = A), (p.onerror = H));
        })),
          et(u, 'link', n),
          (l.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = yu.bind(e)),
          t.addEventListener('load', l),
          t.addEventListener('error', l)));
    }
  }
  var Qs = 0;
  function E0(e, t) {
    return (
      e.stylesheets && e.count === 0 && Su(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var n = setTimeout(function () {
              if ((e.stylesheets && Su(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Qs === 0 && (Qs = 62500 * t0());
            var a = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 && (e.stylesheets && Su(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > Qs ? 50 : 800) + t
            );
            return (
              (e.unsuspend = l),
              function () {
                ((e.unsuspend = null), clearTimeout(n), clearTimeout(a));
              }
            );
          }
        : null
    );
  }
  function yu() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Su(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var pu = null;
  function Su(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (pu = new Map()), t.forEach(T0, e), (pu = null), yu.call(e)));
  }
  function T0(e, t) {
    if (!(t.state.loading & 4)) {
      var l = pu.get(e);
      if (l) var n = l.get(null);
      else {
        ((l = new Map()), pu.set(e, l));
        for (
          var a = e.querySelectorAll('link[data-precedence],style[data-precedence]'), u = 0;
          u < a.length;
          u++
        ) {
          var p = a[u];
          (p.nodeName === 'LINK' || p.getAttribute('media') !== 'not all') &&
            (l.set(p.dataset.precedence, p), (n = p));
        }
        n && l.set(null, n);
      }
      ((a = t.instance),
        (p = a.getAttribute('data-precedence')),
        (u = l.get(p) || n),
        u === n && l.set(null, a),
        l.set(p, a),
        this.count++,
        (n = yu.bind(this)),
        a.addEventListener('load', n),
        a.addEventListener('error', n),
        u
          ? u.parentNode.insertBefore(a, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(a, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Qa = {
    $$typeof: B,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0,
  };
  function b0(e, t, l, n, a, u, p, A, H) {
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
      (this.expirationTimes = Yu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Yu(0)),
      (this.hiddenUpdates = Yu(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = a),
      (this.onCaughtError = u),
      (this.onRecoverableError = p),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = H),
      (this.incompleteTransitions = new Map()));
  }
  function rh(e, t, l, n, a, u, p, A, H, Z, W, P) {
    return (
      (e = new b0(e, t, l, p, H, Z, W, P, A)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = yt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = br()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: n, isDehydrated: l, cache: t }),
      Rr(u),
      e
    );
  }
  function sh(e) {
    return e ? ((e = Cn), e) : Cn;
  }
  function oh(e, t, l, n, a, u) {
    ((a = sh(a)),
      n.context === null ? (n.context = a) : (n.pendingContext = a),
      (n = El(t)),
      (n.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (n.callback = u),
      (l = Tl(e, n, t)),
      l !== null && (dt(l, e, t), Ta(l, e, t)));
  }
  function fh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Zs(e, t) {
    (fh(e, t), (e = e.alternate) && fh(e, t));
  }
  function ch(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Kl(e, 67108864);
      (t !== null && dt(t, e, 67108864), Zs(e, 67108864));
    }
  }
  function dh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Tt();
      t = Gu(t);
      var l = Kl(e, t);
      (l !== null && dt(l, e, t), Zs(e, t));
    }
  }
  var xu = !0;
  function M0(e, t, l, n) {
    var a = G.T;
    G.T = null;
    var u = X.p;
    try {
      ((X.p = 2), Ks(e, t, l, n));
    } finally {
      ((X.p = u), (G.T = a));
    }
  }
  function A0(e, t, l, n) {
    var a = G.T;
    G.T = null;
    var u = X.p;
    try {
      ((X.p = 8), Ks(e, t, l, n));
    } finally {
      ((X.p = u), (G.T = a));
    }
  }
  function Ks(e, t, l, n) {
    if (xu) {
      var a = Js(n);
      if (a === null) (Us(e, t, n, Eu, l), mh(e, n));
      else if (R0(a, e, t, l, n)) n.stopPropagation();
      else if ((mh(e, n), t & 4 && -1 < C0.indexOf(e))) {
        for (; a !== null; ) {
          var u = vn(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var p = Vl(u.pendingLanes);
                  if (p !== 0) {
                    var A = u;
                    for (A.pendingLanes |= 2, A.entangledLanes |= 2; p; ) {
                      var H = 1 << (31 - vt(p));
                      ((A.entanglements[1] |= H), (p &= ~H));
                    }
                    (qt(u), (Ae & 6) === 0 && ((nu = lt() + 500), ja(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((A = Kl(u, 2)), A !== null && dt(A, u, 2), iu(), Zs(u, 2));
            }
          if (((u = Js(n)), u === null && Us(e, t, n, Eu, l), u === a)) break;
          a = u;
        }
        a !== null && n.stopPropagation();
      } else Us(e, t, n, null, l);
    }
  }
  function Js(e) {
    return ((e = $u(e)), Fs(e));
  }
  var Eu = null;
  function Fs(e) {
    if (((Eu = null), (e = mn(e)), e !== null)) {
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
    return ((Eu = e), null);
  }
  function hh(e) {
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
        switch (oi()) {
          case Yl:
            return 2;
          case fi:
            return 8;
          case cn:
          case dn:
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
  var $s = !1,
    Nl = null,
    wl = null,
    Hl = null,
    Za = new Map(),
    Ka = new Map(),
    _l = [],
    C0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function mh(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Nl = null;
        break;
      case 'dragenter':
      case 'dragleave':
        wl = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Hl = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Za.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Ka.delete(t.pointerId);
    }
  }
  function Ja(e, t, l, n, a, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: n,
          nativeEvent: u,
          targetContainers: [a],
        }),
        t !== null && ((t = vn(t)), t !== null && ch(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function R0(e, t, l, n, a) {
    switch (t) {
      case 'focusin':
        return ((Nl = Ja(Nl, e, t, l, n, a)), !0);
      case 'dragenter':
        return ((wl = Ja(wl, e, t, l, n, a)), !0);
      case 'mouseover':
        return ((Hl = Ja(Hl, e, t, l, n, a)), !0);
      case 'pointerover':
        var u = a.pointerId;
        return (Za.set(u, Ja(Za.get(u) || null, e, t, l, n, a)), !0);
      case 'gotpointercapture':
        return ((u = a.pointerId), Ka.set(u, Ja(Ka.get(u) || null, e, t, l, n, a)), !0);
    }
    return !1;
  }
  function vh(e) {
    var t = mn(e.target);
    if (t !== null) {
      var l = i(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = c(l)), t !== null)) {
            ((e.blockedOn = t),
              zo(e.priority, function () {
                dh(l);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = m(l)), t !== null)) {
            ((e.blockedOn = t),
              zo(e.priority, function () {
                dh(l);
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
  function Tu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Js(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(l.type, l);
        ((Fu = n), l.target.dispatchEvent(n), (Fu = null));
      } else return ((t = vn(l)), t !== null && ch(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function gh(e, t, l) {
    Tu(e) && l.delete(t);
  }
  function z0() {
    (($s = !1),
      Nl !== null && Tu(Nl) && (Nl = null),
      wl !== null && Tu(wl) && (wl = null),
      Hl !== null && Tu(Hl) && (Hl = null),
      Za.forEach(gh),
      Ka.forEach(gh));
  }
  function bu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      $s || (($s = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, z0)));
  }
  var Mu = null;
  function yh(e) {
    Mu !== e &&
      ((Mu = e),
      o.unstable_scheduleCallback(o.unstable_NormalPriority, function () {
        Mu === e && (Mu = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            n = e[t + 1],
            a = e[t + 2];
          if (typeof n != 'function') {
            if (Fs(n || l) === null) continue;
            break;
          }
          var u = vn(l);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Jr(u, { pending: !0, data: a, method: l.method, action: n }, n, a));
        }
      }));
  }
  function Wn(e) {
    function t(H) {
      return bu(H, e);
    }
    (Nl !== null && bu(Nl, e),
      wl !== null && bu(wl, e),
      Hl !== null && bu(Hl, e),
      Za.forEach(t),
      Ka.forEach(t));
    for (var l = 0; l < _l.length; l++) {
      var n = _l[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < _l.length && ((l = _l[0]), l.blockedOn === null); )
      (vh(l), l.blockedOn === null && _l.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (n = 0; n < l.length; n += 3) {
        var a = l[n],
          u = l[n + 1],
          p = a[ut] || null;
        if (typeof u == 'function') p || yh(l);
        else if (p) {
          var A = null;
          if (u && u.hasAttribute('formAction')) {
            if (((a = u), (p = u[ut] || null))) A = p.formAction;
            else if (Fs(a) !== null) continue;
          } else A = p.action;
          (typeof A == 'function' ? (l[n + 1] = A) : (l.splice(n, 3), (n -= 3)), yh(l));
        }
      }
  }
  function ph() {
    function e(u) {
      u.canIntercept &&
        u.info === 'react-transition' &&
        u.intercept({
          handler: function () {
            return new Promise(function (p) {
              return (a = p);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function t() {
      (a !== null && (a(), (a = null)), n || setTimeout(l, 20));
    }
    function l() {
      if (!n && !navigation.transition) {
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
      var n = !1,
        a = null;
      return (
        navigation.addEventListener('navigate', e),
        navigation.addEventListener('navigatesuccess', t),
        navigation.addEventListener('navigateerror', t),
        setTimeout(l, 100),
        function () {
          ((n = !0),
            navigation.removeEventListener('navigate', e),
            navigation.removeEventListener('navigatesuccess', t),
            navigation.removeEventListener('navigateerror', t),
            a !== null && (a(), (a = null)));
        }
      );
    }
  }
  function Ws(e) {
    this._internalRoot = e;
  }
  ((Au.prototype.render = Ws.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(E(409));
      var l = t.current,
        n = Tt();
      oh(l, n, e, t, null, null);
    }),
    (Au.prototype.unmount = Ws.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (oh(e.current, 2, null, e, null, null), iu(), (t[hn] = null));
        }
      }));
  function Au(e) {
    this._internalRoot = e;
  }
  Au.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ro();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < _l.length && t !== 0 && t < _l[l].priority; l++);
      (_l.splice(l, 0, e), l === 0 && vh(e));
    }
  };
  var Sh = b.version;
  if (Sh !== '19.2.5') throw Error(E(527, Sh, '19.2.5'));
  X.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(E(188))
        : ((e = Object.keys(e).join(',')), Error(E(268, e)));
    return ((e = d(t)), (e = e !== null ? f(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var D0 = {
    bundleType: 0,
    version: '19.2.5',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: G,
    reconcilerVersion: '19.2.5',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Cu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cu.isDisabled && Cu.supportsFiber)
      try {
        ((la = Cu.inject(D0)), (mt = Cu));
      } catch {}
  }
  return (
    ($a.createRoot = function (e, t) {
      if (!h(e)) throw Error(E(299));
      var l = !1,
        n = '',
        a = Cc,
        u = Rc,
        p = zc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (a = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (p = t.onRecoverableError)),
        (t = rh(e, 1, !1, null, null, l, n, null, a, u, p, ph)),
        (e[hn] = t.current),
        Bs(e),
        new Ws(t)
      );
    }),
    ($a.hydrateRoot = function (e, t, l) {
      if (!h(e)) throw Error(E(299));
      var n = !1,
        a = '',
        u = Cc,
        p = Rc,
        A = zc,
        H = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (n = !0),
          l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (p = l.onCaughtError),
          l.onRecoverableError !== void 0 && (A = l.onRecoverableError),
          l.formState !== void 0 && (H = l.formState)),
        (t = rh(e, 1, !0, t, l ?? null, n, a, H, u, p, A, ph)),
        (t.context = sh(null)),
        (l = t.current),
        (n = Tt()),
        (n = Gu(n)),
        (a = El(n)),
        (a.callback = null),
        Tl(l, a, n),
        (l = n),
        (t.current.lanes = l),
        aa(t, l),
        qt(t),
        (e[hn] = t.current),
        Bs(e),
        new Au(t)
      );
    }),
    ($a.version = '19.2.5'),
    $a
  );
}
var Oh;
function G0() {
  if (Oh) return Ps.exports;
  Oh = 1;
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
  return (o(), (Ps.exports = Y0()), Ps.exports);
}
var V0 = G0(),
  q = ho();
/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Bh = 'popstate';
function Uh(o) {
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
function q0(o = {}) {
  function b(E, h) {
    var d;
    let i = (d = h.state) == null ? void 0 : d.masked,
      { pathname: c, search: m, hash: s } = i || E.location;
    return oo(
      '',
      { pathname: c, search: m, hash: s },
      (h.state && h.state.usr) || null,
      (h.state && h.state.key) || 'default',
      i
        ? { pathname: E.location.pathname, search: E.location.search, hash: E.location.hash }
        : void 0
    );
  }
  function M(E, h) {
    return typeof h == 'string' ? h : ti(h);
  }
  return Q0(b, M, null, o);
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
function X0() {
  return Math.random().toString(36).substring(2, 10);
}
function Nh(o, b) {
  return {
    usr: o.state,
    key: o.key,
    idx: b,
    masked: o.unstable_mask ? { pathname: o.pathname, search: o.search, hash: o.hash } : void 0,
  };
}
function oo(o, b, M = null, E, h) {
  return {
    pathname: typeof o == 'string' ? o : o.pathname,
    search: '',
    hash: '',
    ...(typeof b == 'string' ? In(b) : b),
    state: M,
    key: (b && b.key) || E || X0(),
    unstable_mask: h,
  };
}
function ti({ pathname: o = '/', search: b = '', hash: M = '' }) {
  return (
    b && b !== '?' && (o += b.charAt(0) === '?' ? b : '?' + b),
    M && M !== '#' && (o += M.charAt(0) === '#' ? M : '#' + M),
    o
  );
}
function In(o) {
  let b = {};
  if (o) {
    let M = o.indexOf('#');
    M >= 0 && ((b.hash = o.substring(M)), (o = o.substring(0, M)));
    let E = o.indexOf('?');
    (E >= 0 && ((b.search = o.substring(E)), (o = o.substring(0, E))), o && (b.pathname = o));
  }
  return b;
}
function Q0(o, b, M, E = {}) {
  let { window: h = document.defaultView, v5Compat: i = !1 } = E,
    c = h.history,
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
    ((d = x), s && s({ action: m, location: v.location, delta: C }));
  }
  function S(x, C) {
    m = 'PUSH';
    let O = Uh(x) ? x : oo(v.location, x, C);
    d = f() + 1;
    let B = Nh(O, d),
      j = v.createHref(O.unstable_mask || O);
    try {
      c.pushState(B, '', j);
    } catch (T) {
      if (T instanceof DOMException && T.name === 'DataCloneError') throw T;
      h.location.assign(j);
    }
    i && s && s({ action: m, location: v.location, delta: 1 });
  }
  function r(x, C) {
    m = 'REPLACE';
    let O = Uh(x) ? x : oo(v.location, x, C);
    d = f();
    let B = Nh(O, d),
      j = v.createHref(O.unstable_mask || O);
    (c.replaceState(B, '', j), i && s && s({ action: m, location: v.location, delta: 0 }));
  }
  function y(x) {
    return Z0(x);
  }
  let v = {
    get action() {
      return m;
    },
    get location() {
      return o(h, c);
    },
    listen(x) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        h.addEventListener(Bh, g),
        (s = x),
        () => {
          (h.removeEventListener(Bh, g), (s = null));
        }
      );
    },
    createHref(x) {
      return b(h, x);
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
  return v;
}
function Z0(o, b = !1) {
  let M = 'http://localhost';
  (typeof window < 'u' &&
    (M = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    Le(M, 'No window.location.(origin|href) available to create URL'));
  let E = typeof o == 'string' ? o : ti(o);
  return ((E = E.replace(/ $/, '%20')), !b && E.startsWith('//') && (E = M + E), new URL(E, M));
}
function qh(o, b, M = '/') {
  return K0(o, b, M, !1);
}
function K0(o, b, M, E) {
  let h = typeof b == 'string' ? In(b) : b,
    i = fl(h.pathname || '/', M);
  if (i == null) return null;
  let c = Xh(o);
  J0(c);
  let m = null;
  for (let s = 0; m == null && s < c.length; ++s) {
    let d = ag(i);
    m = lg(c[s], d, E);
  }
  return m;
}
function Xh(o, b = [], M = [], E = '', h = !1) {
  let i = (c, m, s = h, d) => {
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
    let g = jt([E, f.relativePath]),
      S = M.concat(f);
    (c.children &&
      c.children.length > 0 &&
      (Le(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
      ),
      Xh(c.children, b, S, g, s)),
      !(c.path == null && !c.index) && b.push({ path: g, score: eg(g, c.index), routesMeta: S }));
  };
  return (
    o.forEach((c, m) => {
      var s;
      if (c.path === '' || !((s = c.path) != null && s.includes('?'))) i(c, m);
      else for (let d of Qh(c.path)) i(c, m, !0, d);
    }),
    b
  );
}
function Qh(o) {
  let b = o.split('/');
  if (b.length === 0) return [];
  let [M, ...E] = b,
    h = M.endsWith('?'),
    i = M.replace(/\?$/, '');
  if (E.length === 0) return h ? [i, ''] : [i];
  let c = Qh(E.join('/')),
    m = [];
  return (
    m.push(...c.map((s) => (s === '' ? i : [i, s].join('/')))),
    h && m.push(...c),
    m.map((s) => (o.startsWith('/') && s === '' ? '/' : s))
  );
}
function J0(o) {
  o.sort((b, M) =>
    b.score !== M.score
      ? M.score - b.score
      : tg(
          b.routesMeta.map((E) => E.childrenIndex),
          M.routesMeta.map((E) => E.childrenIndex)
        )
  );
}
var F0 = /^:[\w-]+$/,
  $0 = 3,
  W0 = 2,
  k0 = 1,
  P0 = 10,
  I0 = -2,
  wh = (o) => o === '*';
function eg(o, b) {
  let M = o.split('/'),
    E = M.length;
  return (
    M.some(wh) && (E += I0),
    b && (E += W0),
    M.filter((h) => !wh(h)).reduce((h, i) => h + (F0.test(i) ? $0 : i === '' ? k0 : P0), E)
  );
}
function tg(o, b) {
  return o.length === b.length && o.slice(0, -1).every((E, h) => E === b[h])
    ? o[o.length - 1] - b[b.length - 1]
    : 0;
}
function lg(o, b, M = !1) {
  let { routesMeta: E } = o,
    h = {},
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
    (Object.assign(h, g.params),
      c.push({
        params: h,
        pathname: jt([i, g.pathname]),
        pathnameBase: sg(jt([i, g.pathnameBase])),
        route: S,
      }),
      g.pathnameBase !== '/' && (i = jt([i, g.pathnameBase])));
  }
  return c;
}
function Uu(o, b) {
  typeof o == 'string' && (o = { path: o, caseSensitive: !1, end: !0 });
  let [M, E] = ng(o.path, o.caseSensitive, o.end),
    h = b.match(M);
  if (!h) return null;
  let i = h[0],
    c = i.replace(/(.)\/+$/, '$1'),
    m = h.slice(1);
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
function ng(o, b = !1, M = !0) {
  Xt(
    o === '*' || !o.endsWith('*') || o.endsWith('/*'),
    `Route path "${o}" will be treated as if it were "${o.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/, '/*')}".`
  );
  let E = [],
    h =
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
      ? (E.push({ paramName: '*' }), (h += o === '*' || o === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : M
        ? (h += '\\/*$')
        : o !== '' && o !== '/' && (h += '(?:(?=\\/|$))'),
    [new RegExp(h, b ? void 0 : 'i'), E]
  );
}
function ag(o) {
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
function fl(o, b) {
  if (b === '/') return o;
  if (!o.toLowerCase().startsWith(b.toLowerCase())) return null;
  let M = b.endsWith('/') ? b.length - 1 : b.length,
    E = o.charAt(M);
  return E && E !== '/' ? null : o.slice(M) || '/';
}
var ig = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function ug(o, b = '/') {
  let { pathname: M, search: E = '', hash: h = '' } = typeof o == 'string' ? In(o) : o,
    i;
  return (
    M ? ((M = Kh(M)), M.startsWith('/') ? (i = Hh(M.substring(1), '/')) : (i = Hh(M, b))) : (i = b),
    { pathname: i, search: og(E), hash: fg(h) }
  );
}
function Hh(o, b) {
  let M = Nu(b).split('/');
  return (
    o.split('/').forEach((h) => {
      h === '..' ? M.length > 1 && M.pop() : h !== '.' && M.push(h);
    }),
    M.length > 1 ? M.join('/') : '/'
  );
}
function no(o, b, M, E) {
  return `Cannot include a '${o}' character in a manually specified \`to.${b}\` field [${JSON.stringify(E)}].  Please separate it out to the \`to.${M}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function rg(o) {
  return o.filter((b, M) => M === 0 || (b.route.path && b.route.path.length > 0));
}
function Zh(o) {
  let b = rg(o);
  return b.map((M, E) => (E === b.length - 1 ? M.pathname : M.pathnameBase));
}
function mo(o, b, M, E = !1) {
  let h;
  typeof o == 'string'
    ? (h = In(o))
    : ((h = { ...o }),
      Le(!h.pathname || !h.pathname.includes('?'), no('?', 'pathname', 'search', h)),
      Le(!h.pathname || !h.pathname.includes('#'), no('#', 'pathname', 'hash', h)),
      Le(!h.search || !h.search.includes('#'), no('#', 'search', 'hash', h)));
  let i = o === '' || h.pathname === '',
    c = i ? '/' : h.pathname,
    m;
  if (c == null) m = M;
  else {
    let g = b.length - 1;
    if (!E && c.startsWith('..')) {
      let S = c.split('/');
      for (; S[0] === '..'; ) (S.shift(), (g -= 1));
      h.pathname = S.join('/');
    }
    m = g >= 0 ? b[g] : '/';
  }
  let s = ug(h, m),
    d = c && c !== '/' && c.endsWith('/'),
    f = (i || c === '.') && M.endsWith('/');
  return (!s.pathname.endsWith('/') && (d || f) && (s.pathname += '/'), s);
}
var Kh = (o) => o.replace(/\/\/+/g, '/'),
  jt = (o) => Kh(o.join('/')),
  Nu = (o) => o.replace(/\/+$/, ''),
  sg = (o) => Nu(o).replace(/^\/*/, '/'),
  og = (o) => (!o || o === '?' ? '' : o.startsWith('?') ? o : '?' + o),
  fg = (o) => (!o || o === '#' ? '' : o.startsWith('#') ? o : '#' + o),
  cg = class {
    constructor(o, b, M, E = !1) {
      ((this.status = o),
        (this.statusText = b || ''),
        (this.internal = E),
        M instanceof Error ? ((this.data = M.toString()), (this.error = M)) : (this.data = M));
    }
  };
function dg(o) {
  return (
    o != null &&
    typeof o.status == 'number' &&
    typeof o.statusText == 'string' &&
    typeof o.internal == 'boolean' &&
    'data' in o
  );
}
function hg(o) {
  let b = o.map((M) => M.route.path).filter(Boolean);
  return jt(b) || '/';
}
var Jh =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function Fh(o, b) {
  let M = o;
  if (typeof M != 'string' || !ig.test(M)) return { absoluteURL: void 0, isExternal: !1, to: M };
  let E = M,
    h = !1;
  if (Jh)
    try {
      let i = new URL(window.location.href),
        c = M.startsWith('//') ? new URL(i.protocol + M) : new URL(M),
        m = fl(c.pathname, b);
      c.origin === i.origin && m != null ? (M = m + c.search + c.hash) : (h = !0);
    } catch {
      Xt(
        !1,
        `<Link to="${M}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: E, isExternal: h, to: M };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var $h = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set($h);
var mg = ['GET', ...$h];
new Set(mg);
var ea = q.createContext(null);
ea.displayName = 'DataRouter';
var wu = q.createContext(null);
wu.displayName = 'DataRouterState';
var Wh = q.createContext(!1);
function vg() {
  return q.useContext(Wh);
}
var kh = q.createContext({ isTransitioning: !1 });
kh.displayName = 'ViewTransition';
var gg = q.createContext(new Map());
gg.displayName = 'Fetchers';
var yg = q.createContext(null);
yg.displayName = 'Await';
var wt = q.createContext(null);
wt.displayName = 'Navigation';
var li = q.createContext(null);
li.displayName = 'Location';
var cl = q.createContext({ outlet: null, matches: [], isDataRoute: !1 });
cl.displayName = 'Route';
var vo = q.createContext(null);
vo.displayName = 'RouteError';
var Ph = 'REACT_ROUTER_ERROR',
  pg = 'REDIRECT',
  Sg = 'ROUTE_ERROR_RESPONSE';
function xg(o) {
  if (o.startsWith(`${Ph}:${pg}:{`))
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
function Eg(o) {
  if (o.startsWith(`${Ph}:${Sg}:{`))
    try {
      let b = JSON.parse(o.slice(40));
      if (
        typeof b == 'object' &&
        b &&
        typeof b.status == 'number' &&
        typeof b.statusText == 'string'
      )
        return new cg(b.status, b.statusText, b.data);
    } catch {}
}
function Tg(o, { relative: b } = {}) {
  Le(ni(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: M, navigator: E } = q.useContext(wt),
    { hash: h, pathname: i, search: c } = ai(o, { relative: b }),
    m = i;
  return (
    M !== '/' && (m = i === '/' ? M : jt([M, i])),
    E.createHref({ pathname: m, search: c, hash: h })
  );
}
function ni() {
  return q.useContext(li) != null;
}
function dl() {
  return (
    Le(ni(), 'useLocation() may be used only in the context of a <Router> component.'),
    q.useContext(li).location
  );
}
var Ih =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function em(o) {
  q.useContext(wt).static || q.useLayoutEffect(o);
}
function bg() {
  let { isDataRoute: o } = q.useContext(cl);
  return o ? _g() : Mg();
}
function Mg() {
  Le(ni(), 'useNavigate() may be used only in the context of a <Router> component.');
  let o = q.useContext(ea),
    { basename: b, navigator: M } = q.useContext(wt),
    { matches: E } = q.useContext(cl),
    { pathname: h } = dl(),
    i = JSON.stringify(Zh(E)),
    c = q.useRef(!1);
  return (
    em(() => {
      c.current = !0;
    }),
    q.useCallback(
      (s, d = {}) => {
        if ((Xt(c.current, Ih), !c.current)) return;
        if (typeof s == 'number') {
          M.go(s);
          return;
        }
        let f = mo(s, JSON.parse(i), h, d.relative === 'path');
        (o == null && b !== '/' && (f.pathname = f.pathname === '/' ? b : jt([b, f.pathname])),
          (d.replace ? M.replace : M.push)(f, d.state, d));
      },
      [b, M, i, h, o]
    )
  );
}
q.createContext(null);
function ai(o, { relative: b } = {}) {
  let { matches: M } = q.useContext(cl),
    { pathname: E } = dl(),
    h = JSON.stringify(Zh(M));
  return q.useMemo(() => mo(o, JSON.parse(h), E, b === 'path'), [o, h, E, b]);
}
function Ag(o, b) {
  return tm(o, b);
}
function tm(o, b, M) {
  var x;
  Le(ni(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: E } = q.useContext(wt),
    { matches: h } = q.useContext(cl),
    i = h[h.length - 1],
    c = i ? i.params : {},
    m = i ? i.pathname : '/',
    s = i ? i.pathnameBase : '/',
    d = i && i.route;
  {
    let C = (d && d.path) || '';
    nm(
      m,
      !d || C.endsWith('*') || C.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C === '/' ? '*' : `${C}/*`}">.`
    );
  }
  let f = dl(),
    g;
  if (b) {
    let C = typeof b == 'string' ? In(b) : b;
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
  let y = qh(o, { pathname: r });
  (Xt(d || y != null, `No routes matched location "${g.pathname}${g.search}${g.hash}" `),
    Xt(
      y == null ||
        y[y.length - 1].route.element !== void 0 ||
        y[y.length - 1].route.Component !== void 0 ||
        y[y.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let v = Og(
    y &&
      y.map((C) =>
        Object.assign({}, C, {
          params: Object.assign({}, c, C.params),
          pathname: jt([
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
              : jt([
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
    h,
    M
  );
  return b && v
    ? q.createElement(
        li.Provider,
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
        v
      )
    : v;
}
function Cg() {
  let o = Hg(),
    b = dg(o) ? `${o.status} ${o.statusText}` : o instanceof Error ? o.message : JSON.stringify(o),
    M = o instanceof Error ? o.stack : null,
    E = 'rgba(200,200,200, 0.5)',
    h = { padding: '0.5rem', backgroundColor: E },
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
      M ? q.createElement('pre', { style: h }, M) : null,
      c
    )
  );
}
var Rg = q.createElement(Cg, null),
  lm = class extends q.Component {
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
        const M = Eg(o.digest);
        M && (o = M);
      }
      let b =
        o !== void 0
          ? q.createElement(
              cl.Provider,
              { value: this.props.routeContext },
              q.createElement(vo.Provider, { value: o, children: this.props.component })
            )
          : this.props.children;
      return this.context ? q.createElement(zg, { error: o }, b) : b;
    }
  };
lm.contextType = Wh;
var ao = new WeakMap();
function zg({ children: o, error: b }) {
  let { basename: M } = q.useContext(wt);
  if (typeof b == 'object' && b && 'digest' in b && typeof b.digest == 'string') {
    let E = xg(b.digest);
    if (E) {
      let h = ao.get(b);
      if (h) throw h;
      let i = Fh(E.location, M);
      if (Jh && !ao.get(b))
        if (i.isExternal || E.reloadDocument) window.location.href = i.absoluteURL || i.to;
        else {
          const c = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, { replace: E.replace })
          );
          throw (ao.set(b, c), c);
        }
      return q.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${i.absoluteURL || i.to}`,
      });
    }
  }
  return o;
}
function Dg({ routeContext: o, match: b, children: M }) {
  let E = q.useContext(ea);
  return (
    E &&
      E.static &&
      E.staticContext &&
      (b.route.errorElement || b.route.ErrorBoundary) &&
      (E.staticContext._deepestRenderedBoundaryId = b.route.id),
    q.createElement(cl.Provider, { value: o }, M)
  );
}
function Og(o, b = [], M) {
  let E = M == null ? void 0 : M.state;
  if (o == null) {
    if (!E) return null;
    if (E.errors) o = E.matches;
    else if (b.length === 0 && !E.initialized && E.matches.length > 0) o = E.matches;
    else return null;
  }
  let h = o,
    i = E == null ? void 0 : E.errors;
  if (i != null) {
    let f = h.findIndex((g) => g.route.id && (i == null ? void 0 : i[g.route.id]) !== void 0);
    (Le(
      f >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(',')}`
    ),
      (h = h.slice(0, Math.min(h.length, f + 1))));
  }
  let c = !1,
    m = -1;
  if (M && E) {
    c = E.renderFallback;
    for (let f = 0; f < h.length; f++) {
      let g = h[f];
      if (((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (m = f), g.route.id)) {
        let { loaderData: S, errors: r } = E,
          y = g.route.loader && !S.hasOwnProperty(g.route.id) && (!r || r[g.route.id] === void 0);
        if (g.route.lazy || y) {
          (M.isStatic && (c = !0), m >= 0 ? (h = h.slice(0, m + 1)) : (h = [h[0]]));
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
              unstable_pattern: hg(E.matches),
              errorInfo: g,
            });
          }
        : void 0;
  return h.reduceRight((f, g, S) => {
    let r,
      y = !1,
      v = null,
      x = null;
    E &&
      ((r = i && g.route.id ? i[g.route.id] : void 0),
      (v = g.route.errorElement || Rg),
      c &&
        (m < 0 && S === 0
          ? (nm(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (y = !0),
            (x = null))
          : m === S && ((y = !0), (x = g.route.hydrateFallbackElement || null))));
    let C = b.concat(h.slice(0, S + 1)),
      O = () => {
        let B;
        return (
          r
            ? (B = v)
            : y
              ? (B = x)
              : g.route.Component
                ? (B = q.createElement(g.route.Component, null))
                : g.route.element
                  ? (B = g.route.element)
                  : (B = f),
          q.createElement(Dg, {
            match: g,
            routeContext: { outlet: f, matches: C, isDataRoute: E != null },
            children: B,
          })
        );
      };
    return E && (g.route.ErrorBoundary || g.route.errorElement || S === 0)
      ? q.createElement(lm, {
          location: E.location,
          revalidation: E.revalidation,
          component: v,
          error: r,
          children: O(),
          routeContext: { outlet: null, matches: C, isDataRoute: !0 },
          onError: d,
        })
      : O();
  }, null);
}
function go(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Bg(o) {
  let b = q.useContext(ea);
  return (Le(b, go(o)), b);
}
function Ug(o) {
  let b = q.useContext(wu);
  return (Le(b, go(o)), b);
}
function Ng(o) {
  let b = q.useContext(cl);
  return (Le(b, go(o)), b);
}
function yo(o) {
  let b = Ng(o),
    M = b.matches[b.matches.length - 1];
  return (Le(M.route.id, `${o} can only be used on routes that contain a unique "id"`), M.route.id);
}
function wg() {
  return yo('useRouteId');
}
function Hg() {
  var E;
  let o = q.useContext(vo),
    b = Ug('useRouteError'),
    M = yo('useRouteError');
  return o !== void 0 ? o : (E = b.errors) == null ? void 0 : E[M];
}
function _g() {
  let { router: o } = Bg('useNavigate'),
    b = yo('useNavigate'),
    M = q.useRef(!1);
  return (
    em(() => {
      M.current = !0;
    }),
    q.useCallback(
      async (h, i = {}) => {
        (Xt(M.current, Ih),
          M.current &&
            (typeof h == 'number'
              ? await o.navigate(h)
              : await o.navigate(h, { fromRouteId: b, ...i })));
      },
      [o, b]
    )
  );
}
var _h = {};
function nm(o, b, M) {
  !b && !_h[o] && ((_h[o] = !0), Xt(!1, M));
}
q.memo(Lg);
function Lg({ routes: o, future: b, state: M, isStatic: E, onError: h }) {
  return tm(o, void 0, { state: M, isStatic: E, onError: h });
}
function fo(o) {
  Le(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function jg({
  basename: o = '/',
  children: b = null,
  location: M,
  navigationType: E = 'POP',
  navigator: h,
  static: i = !1,
  unstable_useTransitions: c,
}) {
  Le(
    !ni(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let m = o.replace(/^\/*/, '/'),
    s = q.useMemo(
      () => ({ basename: m, navigator: h, static: i, unstable_useTransitions: c, future: {} }),
      [m, h, i, c]
    );
  typeof M == 'string' && (M = In(M));
  let {
      pathname: d = '/',
      search: f = '',
      hash: g = '',
      state: S = null,
      key: r = 'default',
      unstable_mask: y,
    } = M,
    v = q.useMemo(() => {
      let x = fl(d, m);
      return x == null
        ? null
        : {
            location: { pathname: x, search: f, hash: g, state: S, key: r, unstable_mask: y },
            navigationType: E,
          };
    }, [m, d, f, g, S, r, E, y]);
  return (
    Xt(
      v != null,
      `<Router basename="${m}"> is not able to match the URL "${d}${f}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    v == null
      ? null
      : q.createElement(
          wt.Provider,
          { value: s },
          q.createElement(li.Provider, { children: b, value: v })
        )
  );
}
function Yg({ children: o, location: b }) {
  return Ag(co(o), b);
}
function co(o, b = []) {
  let M = [];
  return (
    q.Children.forEach(o, (E, h) => {
      if (!q.isValidElement(E)) return;
      let i = [...b, h];
      if (E.type === q.Fragment) {
        M.push.apply(M, co(E.props.children, i));
        return;
      }
      (Le(
        E.type === fo,
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
      (E.props.children && (c.children = co(E.props.children, i)), M.push(c));
    }),
    M
  );
}
var Du = 'get',
  Ou = 'application/x-www-form-urlencoded';
function Hu(o) {
  return typeof HTMLElement < 'u' && o instanceof HTMLElement;
}
function Gg(o) {
  return Hu(o) && o.tagName.toLowerCase() === 'button';
}
function Vg(o) {
  return Hu(o) && o.tagName.toLowerCase() === 'form';
}
function qg(o) {
  return Hu(o) && o.tagName.toLowerCase() === 'input';
}
function Xg(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function Qg(o, b) {
  return o.button === 0 && (!b || b === '_self') && !Xg(o);
}
var Ru = null;
function Zg() {
  if (Ru === null)
    try {
      (new FormData(document.createElement('form'), 0), (Ru = !1));
    } catch {
      Ru = !0;
    }
  return Ru;
}
var Kg = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function io(o) {
  return o != null && !Kg.has(o)
    ? (Xt(
        !1,
        `"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ou}"`
      ),
      null)
    : o;
}
function Jg(o, b) {
  let M, E, h, i, c;
  if (Vg(o)) {
    let m = o.getAttribute('action');
    ((E = m ? fl(m, b) : null),
      (M = o.getAttribute('method') || Du),
      (h = io(o.getAttribute('enctype')) || Ou),
      (i = new FormData(o)));
  } else if (Gg(o) || (qg(o) && (o.type === 'submit' || o.type === 'image'))) {
    let m = o.form;
    if (m == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let s = o.getAttribute('formaction') || m.getAttribute('action');
    if (
      ((E = s ? fl(s, b) : null),
      (M = o.getAttribute('formmethod') || m.getAttribute('method') || Du),
      (h = io(o.getAttribute('formenctype')) || io(m.getAttribute('enctype')) || Ou),
      (i = new FormData(m, o)),
      !Zg())
    ) {
      let { name: d, type: f, value: g } = o;
      if (f === 'image') {
        let S = d ? `${d}.` : '';
        (i.append(`${S}x`, '0'), i.append(`${S}y`, '0'));
      } else d && i.append(d, g);
    }
  } else {
    if (Hu(o))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((M = Du), (E = null), (h = Ou), (c = o));
  }
  return (
    i && h === 'text/plain' && ((c = i), (i = void 0)),
    { action: E, method: M.toLowerCase(), encType: h, formData: i, body: c }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function po(o, b) {
  if (o === !1 || o === null || typeof o > 'u') throw new Error(b);
}
function am(o, b, M, E) {
  let h =
    typeof o == 'string'
      ? new URL(o, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : o;
  return (
    M
      ? h.pathname.endsWith('/')
        ? (h.pathname = `${h.pathname}_.${E}`)
        : (h.pathname = `${h.pathname}.${E}`)
      : h.pathname === '/'
        ? (h.pathname = `_root.${E}`)
        : b && fl(h.pathname, b) === '/'
          ? (h.pathname = `${Nu(b)}/_root.${E}`)
          : (h.pathname = `${Nu(h.pathname)}.${E}`),
    h
  );
}
async function Fg(o, b) {
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
function $g(o) {
  return o == null
    ? !1
    : o.href == null
      ? o.rel === 'preload' && typeof o.imageSrcSet == 'string' && typeof o.imageSizes == 'string'
      : typeof o.rel == 'string' && typeof o.href == 'string';
}
async function Wg(o, b, M) {
  let E = await Promise.all(
    o.map(async (h) => {
      let i = b.routes[h.route.id];
      if (i) {
        let c = await Fg(i, M);
        return c.links ? c.links() : [];
      }
      return [];
    })
  );
  return ey(
    E.flat(1)
      .filter($g)
      .filter((h) => h.rel === 'stylesheet' || h.rel === 'preload')
      .map((h) =>
        h.rel === 'stylesheet' ? { ...h, rel: 'prefetch', as: 'style' } : { ...h, rel: 'prefetch' }
      )
  );
}
function Lh(o, b, M, E, h, i) {
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
              currentUrl: new URL(h.pathname + h.search + h.hash, window.origin),
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
function kg(o, b, { includeHydrateFallback: M } = {}) {
  return Pg(
    o
      .map((E) => {
        let h = b.routes[E.route.id];
        if (!h) return [];
        let i = [h.module];
        return (
          h.clientActionModule && (i = i.concat(h.clientActionModule)),
          h.clientLoaderModule && (i = i.concat(h.clientLoaderModule)),
          M && h.hydrateFallbackModule && (i = i.concat(h.hydrateFallbackModule)),
          h.imports && (i = i.concat(h.imports)),
          i
        );
      })
      .flat(1)
  );
}
function Pg(o) {
  return [...new Set(o)];
}
function Ig(o) {
  let b = {},
    M = Object.keys(o).sort();
  for (let E of M) b[E] = o[E];
  return b;
}
function ey(o, b) {
  let M = new Set();
  return (
    new Set(b),
    o.reduce((E, h) => {
      let i = JSON.stringify(Ig(h));
      return (M.has(i) || (M.add(i), E.push({ key: i, link: h })), E);
    }, [])
  );
}
function So() {
  let o = q.useContext(ea);
  return (po(o, 'You must render this element inside a <DataRouterContext.Provider> element'), o);
}
function ty() {
  let o = q.useContext(wu);
  return (
    po(o, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    o
  );
}
var xo = q.createContext(void 0);
xo.displayName = 'FrameworkContext';
function Eo() {
  let o = q.useContext(xo);
  return (po(o, 'You must render this element inside a <HydratedRouter> element'), o);
}
function ly(o, b) {
  let M = q.useContext(xo),
    [E, h] = q.useState(!1),
    [i, c] = q.useState(!1),
    { onFocus: m, onBlur: s, onMouseEnter: d, onMouseLeave: f, onTouchStart: g } = b,
    S = q.useRef(null);
  (q.useEffect(() => {
    if ((o === 'render' && c(!0), o === 'viewport')) {
      let v = (C) => {
          C.forEach((O) => {
            c(O.isIntersecting);
          });
        },
        x = new IntersectionObserver(v, { threshold: 0.5 });
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
        let v = setTimeout(() => {
          c(!0);
        }, 100);
        return () => {
          clearTimeout(v);
        };
      }
    }, [E]));
  let r = () => {
      h(!0);
    },
    y = () => {
      (h(!1), c(!1));
    };
  return M
    ? o !== 'intent'
      ? [i, S, {}]
      : [
          i,
          S,
          {
            onFocus: Wa(m, r),
            onBlur: Wa(s, y),
            onMouseEnter: Wa(d, r),
            onMouseLeave: Wa(f, y),
            onTouchStart: Wa(g, r),
          },
        ]
    : [!1, S, {}];
}
function Wa(o, b) {
  return (M) => {
    (o && o(M), M.defaultPrevented || b(M));
  };
}
function ny({ page: o, ...b }) {
  let M = vg(),
    { router: E } = So(),
    h = q.useMemo(() => qh(E.routes, o, E.basename), [E.routes, o, E.basename]);
  return h
    ? M
      ? q.createElement(iy, { page: o, matches: h, ...b })
      : q.createElement(uy, { page: o, matches: h, ...b })
    : null;
}
function ay(o) {
  let { manifest: b, routeModules: M } = Eo(),
    [E, h] = q.useState([]);
  return (
    q.useEffect(() => {
      let i = !1;
      return (
        Wg(o, b, M).then((c) => {
          i || h(c);
        }),
        () => {
          i = !0;
        }
      );
    }, [o, b, M]),
    E
  );
}
function iy({ page: o, matches: b, ...M }) {
  let E = dl(),
    { future: h } = Eo(),
    { basename: i } = So(),
    c = q.useMemo(() => {
      if (o === E.pathname + E.search + E.hash) return [];
      let m = am(o, i, h.unstable_trailingSlashAwareDataRequests, 'rsc'),
        s = !1,
        d = [];
      for (let f of b)
        typeof f.route.shouldRevalidate == 'function' ? (s = !0) : d.push(f.route.id);
      return (
        s && d.length > 0 && m.searchParams.set('_routes', d.join(',')),
        [m.pathname + m.search]
      );
    }, [i, h.unstable_trailingSlashAwareDataRequests, o, E, b]);
  return q.createElement(
    q.Fragment,
    null,
    c.map((m) => q.createElement('link', { key: m, rel: 'prefetch', as: 'fetch', href: m, ...M }))
  );
}
function uy({ page: o, matches: b, ...M }) {
  let E = dl(),
    { future: h, manifest: i, routeModules: c } = Eo(),
    { basename: m } = So(),
    { loaderData: s, matches: d } = ty(),
    f = q.useMemo(() => Lh(o, b, d, i, E, 'data'), [o, b, d, i, E]),
    g = q.useMemo(() => Lh(o, b, d, i, E, 'assets'), [o, b, d, i, E]),
    S = q.useMemo(() => {
      if (o === E.pathname + E.search + E.hash) return [];
      let v = new Set(),
        x = !1;
      if (
        (b.forEach((O) => {
          var j;
          let B = i.routes[O.route.id];
          !B ||
            !B.hasLoader ||
            ((!f.some((T) => T.route.id === O.route.id) &&
              O.route.id in s &&
              (j = c[O.route.id]) != null &&
              j.shouldRevalidate) ||
            B.hasClientLoader
              ? (x = !0)
              : v.add(O.route.id));
        }),
        v.size === 0)
      )
        return [];
      let C = am(o, m, h.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        x &&
          v.size > 0 &&
          C.searchParams.set(
            '_routes',
            b
              .filter((O) => v.has(O.route.id))
              .map((O) => O.route.id)
              .join(',')
          ),
        [C.pathname + C.search]
      );
    }, [m, h.unstable_trailingSlashAwareDataRequests, s, E, i, f, b, o, c]),
    r = q.useMemo(() => kg(g, i), [g, i]),
    y = ay(g);
  return q.createElement(
    q.Fragment,
    null,
    S.map((v) => q.createElement('link', { key: v, rel: 'prefetch', as: 'fetch', href: v, ...M })),
    r.map((v) => q.createElement('link', { key: v, rel: 'modulepreload', href: v, ...M })),
    y.map(({ key: v, link: x }) =>
      q.createElement('link', {
        key: v,
        nonce: M.nonce,
        ...x,
        crossOrigin: x.crossOrigin ?? M.crossOrigin,
      })
    )
  );
}
function ry(...o) {
  return (b) => {
    o.forEach((M) => {
      typeof M == 'function' ? M(b) : M != null && (M.current = b);
    });
  };
}
var sy =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  sy && (window.__reactRouterVersion = '7.14.2');
} catch {}
function oy({ basename: o, children: b, unstable_useTransitions: M, window: E }) {
  let h = q.useRef();
  h.current == null && (h.current = q0({ window: E, v5Compat: !0 }));
  let i = h.current,
    [c, m] = q.useState({ action: i.action, location: i.location }),
    s = q.useCallback(
      (d) => {
        M === !1 ? m(d) : q.startTransition(() => m(d));
      },
      [M]
    );
  return (
    q.useLayoutEffect(() => i.listen(s), [i, s]),
    q.createElement(jg, {
      basename: o,
      children: b,
      location: c.location,
      navigationType: c.action,
      navigator: i,
      unstable_useTransitions: M,
    })
  );
}
var im = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  um = q.forwardRef(function (
    {
      onClick: b,
      discover: M = 'render',
      prefetch: E = 'none',
      relative: h,
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
    v
  ) {
    let { basename: x, navigator: C, unstable_useTransitions: O } = q.useContext(wt),
      B = typeof f == 'string' && im.test(f),
      j = Fh(f, x);
    f = j.to;
    let T = Tg(f, { relative: h }),
      R = dl(),
      D = null;
    if (m) {
      let ee = mo(m, [], R.unstable_mask ? R.unstable_mask.pathname : '/', !0);
      (x !== '/' && (ee.pathname = ee.pathname === '/' ? x : jt([x, ee.pathname])),
        (D = C.createHref(ee)));
    }
    let [z, w, U] = ly(E, y),
      L = hy(f, {
        replace: c,
        unstable_mask: m,
        state: s,
        target: d,
        preventScrollReset: g,
        relative: h,
        viewTransition: S,
        unstable_defaultShouldRevalidate: r,
        unstable_useTransitions: O,
      });
    function _(ee) {
      (b && b(ee), ee.defaultPrevented || L(ee));
    }
    let $ = !(j.isExternal || i),
      le = q.createElement('a', {
        ...y,
        ...U,
        href: ($ ? D : void 0) || j.absoluteURL || T,
        onClick: $ ? _ : b,
        ref: ry(v, w),
        target: d,
        'data-discover': !B && M === 'render' ? 'true' : void 0,
      });
    return z && !B ? q.createElement(q.Fragment, null, le, q.createElement(ny, { page: T })) : le;
  });
um.displayName = 'Link';
var fy = q.forwardRef(function (
  {
    'aria-current': b = 'page',
    caseSensitive: M = !1,
    className: E = '',
    end: h = !1,
    style: i,
    to: c,
    viewTransition: m,
    children: s,
    ...d
  },
  f
) {
  let g = ai(c, { relative: d.relative }),
    S = dl(),
    r = q.useContext(wu),
    { navigator: y, basename: v } = q.useContext(wt),
    x = r != null && py(g) && m === !0,
    C = y.encodeLocation ? y.encodeLocation(g).pathname : g.pathname,
    O = S.pathname,
    B = r && r.navigation && r.navigation.location ? r.navigation.location.pathname : null;
  (M || ((O = O.toLowerCase()), (B = B ? B.toLowerCase() : null), (C = C.toLowerCase())),
    B && v && (B = fl(B, v) || B));
  const j = C !== '/' && C.endsWith('/') ? C.length - 1 : C.length;
  let T = O === C || (!h && O.startsWith(C) && O.charAt(j) === '/'),
    R = B != null && (B === C || (!h && B.startsWith(C) && B.charAt(C.length) === '/')),
    D = { isActive: T, isPending: R, isTransitioning: x },
    z = T ? b : void 0,
    w;
  typeof E == 'function'
    ? (w = E(D))
    : (w = [E, T ? 'active' : null, R ? 'pending' : null, x ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let U = typeof i == 'function' ? i(D) : i;
  return q.createElement(
    um,
    { ...d, 'aria-current': z, className: w, ref: f, style: U, to: c, viewTransition: m },
    typeof s == 'function' ? s(D) : s
  );
});
fy.displayName = 'NavLink';
var cy = q.forwardRef(
  (
    {
      discover: o = 'render',
      fetcherKey: b,
      navigate: M,
      reloadDocument: E,
      replace: h,
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
    let { unstable_useTransitions: v } = q.useContext(wt),
      x = gy(),
      C = yy(m, { relative: d }),
      O = c.toLowerCase() === 'get' ? 'get' : 'post',
      B = typeof m == 'string' && im.test(m),
      j = (T) => {
        if ((s && s(T), T.defaultPrevented)) return;
        T.preventDefault();
        let R = T.nativeEvent.submitter,
          D = (R == null ? void 0 : R.getAttribute('formmethod')) || c,
          z = () =>
            x(R || T.currentTarget, {
              fetcherKey: b,
              method: D,
              navigate: M,
              replace: h,
              state: i,
              relative: d,
              preventScrollReset: f,
              viewTransition: g,
              unstable_defaultShouldRevalidate: S,
            });
        v && M !== !1 ? q.startTransition(() => z()) : z();
      };
    return q.createElement('form', {
      ref: y,
      method: O,
      action: C,
      onSubmit: E ? s : j,
      ...r,
      'data-discover': !B && o === 'render' ? 'true' : void 0,
    });
  }
);
cy.displayName = 'Form';
function dy(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function rm(o) {
  let b = q.useContext(ea);
  return (Le(b, dy(o)), b);
}
function hy(
  o,
  {
    target: b,
    replace: M,
    unstable_mask: E,
    state: h,
    preventScrollReset: i,
    relative: c,
    viewTransition: m,
    unstable_defaultShouldRevalidate: s,
    unstable_useTransitions: d,
  } = {}
) {
  let f = bg(),
    g = dl(),
    S = ai(o, { relative: c });
  return q.useCallback(
    (r) => {
      if (Qg(r, b)) {
        r.preventDefault();
        let y = M !== void 0 ? M : ti(g) === ti(S),
          v = () =>
            f(o, {
              replace: y,
              unstable_mask: E,
              state: h,
              preventScrollReset: i,
              relative: c,
              viewTransition: m,
              unstable_defaultShouldRevalidate: s,
            });
        d ? q.startTransition(() => v()) : v();
      }
    },
    [g, f, S, M, E, h, b, o, i, c, m, s, d]
  );
}
var my = 0,
  vy = () => `__${String(++my)}__`;
function gy() {
  let { router: o } = rm('useSubmit'),
    { basename: b } = q.useContext(wt),
    M = wg(),
    E = o.fetch,
    h = o.navigate;
  return q.useCallback(
    async (i, c = {}) => {
      let { action: m, method: s, encType: d, formData: f, body: g } = Jg(i, b);
      if (c.navigate === !1) {
        let S = c.fetcherKey || vy();
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
        await h(c.action || m, {
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
    [E, h, b, M]
  );
}
function yy(o, { relative: b } = {}) {
  let { basename: M } = q.useContext(wt),
    E = q.useContext(cl);
  Le(E, 'useFormAction must be used inside a RouteContext');
  let [h] = E.matches.slice(-1),
    i = { ...ai(o || '.', { relative: b }) },
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
      h.route.index &&
      (i.search = i.search ? i.search.replace(/^\?/, '?index&') : '?index'),
    M !== '/' && (i.pathname = i.pathname === '/' ? M : jt([M, i.pathname])),
    ti(i)
  );
}
function py(o, { relative: b } = {}) {
  let M = q.useContext(kh);
  Le(
    M != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: E } = rm('useViewTransitionState'),
    h = ai(o, { relative: b });
  if (!M.isTransitioning) return !1;
  let i = fl(M.currentLocation.pathname, E) || M.currentLocation.pathname,
    c = fl(M.nextLocation.pathname, E) || M.nextLocation.pathname;
  return Uu(h.pathname, c) != null || Uu(h.pathname, i) != null;
}
const Sy = '_index_r8hfh_1',
  xy = { index: Sy },
  Ey = '_layout_r42u5_1',
  Ty = '_top_bar_placeholder_r42u5_10',
  by = '_main_r42u5_15',
  My = '_field_wrapper_r42u5_23',
  kn = { layout: Ey, top_bar_placeholder: Ty, main: by, field_wrapper: My },
  Ay = '_surface_6wr97_1',
  Cy = '_canvas_layer_6wr97_11',
  Ry = '_game_over_line_6wr97_22',
  uo = { surface: Ay, canvas_layer: Cy, game_over_line: Ry },
  zy = '_layer_z1h0v_1',
  Dy = '_effect_z1h0v_7',
  Oy = '_ring_z1h0v_12',
  By = '_score_z1h0v_24',
  Uy = '_special_z1h0v_36',
  ka = { layer: zy, effect: Dy, ring: Oy, score: By, special: Uy },
  Ny = ({ effects: o }) =>
    ue.jsx('div', {
      className: ka.layer,
      'aria-hidden': 'true',
      children: o.map((b) =>
        ue.jsxs(
          'div',
          {
            className: `${ka.effect} ${b.isSpecial ? ka.special : ''}`,
            style: { left: `${b.x}px`, top: `${b.y}px` },
            children: [
              ue.jsx('span', { className: ka.ring }),
              b.score > 0
                ? ue.jsxs('span', { className: ka.score, children: ['+', b.score] })
                : null,
            ],
          },
          b.id
        )
      ),
    }),
  wy = '_line_1ia7c_1',
  Hy = '_preview_1ia7c_9',
  jh = { line: wy, preview: Hy },
  _y = (o) => `/ochimono-game/${o}`.replace(/\/{2,}/g, '/'),
  Ly = ({ x: o, fieldHeight: b, item: M }) => {
    if (!M) return null;
    const E = M.radius * 2;
    return ue.jsxs(ue.Fragment, {
      children: [
        ue.jsx('div', {
          className: jh.line,
          style: { left: `${o}px`, height: `${b}px` },
          'aria-hidden': 'true',
        }),
        ue.jsx('img', {
          src: _y(M.svgPath),
          alt: '',
          'aria-hidden': 'true',
          className: jh.preview,
          style: { left: `${o - M.radius}px`, width: `${E}px`, height: `${E}px` },
        }),
      ],
    });
  },
  jy = (o) => Math.max(0, Math.min(1, o)),
  Yy = ({
    canvasContainerRef: o,
    fieldWidth: b,
    fieldHeight: M,
    gameOverLineY: E,
    currentItem: h,
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
          B = jy((x - O.left) / O.width);
        f(B);
      }, []);
    q.useEffect(() => {
      f(0.5);
    }, [h == null ? void 0 : h.level]);
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
      v = h ? Math.max(h.radius, Math.min(b - h.radius, d * b)) : d * b;
    return ue.jsxs('div', {
      ref: s,
      className: uo.surface,
      style: { width: `${b}px`, height: `${M}px` },
      onPointerDown: S,
      onPointerMove: r,
      onPointerUp: y,
      role: 'application',
      'aria-label': 'ゲームフィールド',
      children: [
        ue.jsx('div', { ref: o, className: uo.canvas_layer }),
        ue.jsx('div', {
          className: uo.game_over_line,
          style: { top: `${E}px` },
          'aria-hidden': 'true',
        }),
        c ? ue.jsx(Ly, { x: v, fieldHeight: M, item: h }) : null,
        ue.jsx(Ny, { effects: i }),
      ],
    });
  },
  Gy = '_overlay_o79hb_1',
  Vy = '_panel_o79hb_13',
  qy = '_new_record_o79hb_24',
  Xy = '_title_o79hb_32',
  Qy = '_scores_o79hb_40',
  Zy = '_row_o79hb_46',
  Ky = '_gold_o79hb_64',
  Jy = '_restart_o79hb_69',
  ol = {
    overlay: Gy,
    panel: Vy,
    new_record: qy,
    title: Xy,
    scores: Qy,
    row: Zy,
    gold: Ky,
    restart: Jy,
  },
  Fy = ({ score: o, bestScore: b, isNewRecord: M, onRestart: E }) =>
    ue.jsx('div', {
      className: ol.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'ゲームオーバー',
      children: ue.jsxs('div', {
        className: ol.panel,
        children: [
          M ? ue.jsx('p', { className: ol.new_record, children: '🎉 新記録！' }) : null,
          ue.jsx('h2', { className: ol.title, children: 'GAME OVER' }),
          ue.jsxs('dl', {
            className: ol.scores,
            children: [
              ue.jsxs('div', {
                className: ol.row,
                children: [
                  ue.jsx('dt', { children: 'スコア' }),
                  ue.jsx('dd', { className: M ? ol.gold : '', children: o }),
                ],
              }),
              ue.jsxs('div', {
                className: ol.row,
                children: [ue.jsx('dt', { children: 'ベスト' }), ue.jsx('dd', { children: b })],
              }),
            ],
          }),
          ue.jsx('button', {
            type: 'button',
            className: ol.restart,
            onClick: E,
            children: 'もう一度あそぶ',
          }),
        ],
      }),
    }),
  $y = '_overlay_1xsci_1',
  Wy = '_panel_1xsci_12',
  ky = '_title_1xsci_22',
  Py = '_lead_1xsci_30',
  Iy = '_start_1xsci_37',
  Pa = { overlay: $y, panel: Wy, title: ky, lead: Py, start: Iy },
  ep = ({ onStart: o }) =>
    ue.jsx('div', {
      className: Pa.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'スタート画面',
      children: ue.jsxs('div', {
        className: Pa.panel,
        children: [
          ue.jsxs('h2', {
            className: Pa.title,
            children: ['💖🍓🐱', ue.jsx('br', {}), 'にゃんハートいちごパズル'],
          }),
          ue.jsxs('p', {
            className: Pa.lead,
            children: [
              '同じアイテム同士をくっつけて',
              ue.jsx('br', {}),
              'にゃんハートいちごをめざそう！',
            ],
          }),
          ue.jsx('button', {
            type: 'button',
            className: Pa.start,
            onClick: o,
            children: 'スタート',
          }),
        ],
      }),
    }),
  tp = '_top_bar_1dke1_1',
  lp = '_right_1dke1_12',
  np = '_version_1dke1_18',
  ro = { top_bar: tp, right: lp, version: np },
  ap = '_next_1n5pn_1',
  ip = '_label_1n5pn_7',
  up = '_thumb_1n5pn_14',
  rp = '_image_1n5pn_27',
  zu = { next: ap, label: ip, thumb: up, image: rp },
  sp = (o) => `/ochimono-game/${o}`.replace(/\/{2,}/g, '/'),
  op = ({ item: o }) =>
    ue.jsxs('div', {
      className: zu.next,
      children: [
        ue.jsx('span', { className: zu.label, children: 'NEXT' }),
        ue.jsx('div', {
          className: zu.thumb,
          'data-testid': 'next-item',
          children: o
            ? ue.jsx('img', { src: sp(o.svgPath), alt: o.name, className: zu.image })
            : null,
        }),
      ],
    }),
  fp = '_score_display_pgke7_1',
  cp = '_row_pgke7_7',
  dp = '_label_pgke7_13',
  hp = '_value_pgke7_20',
  mp = '_label_small_pgke7_28',
  vp = '_value_small_pgke7_35',
  un = { score_display: fp, row: cp, label: dp, value: hp, label_small: mp, value_small: vp },
  gp = ({ score: o, bestScore: b }) =>
    ue.jsxs('div', {
      className: un.score_display,
      children: [
        ue.jsxs('div', {
          className: un.row,
          children: [
            ue.jsx('span', { className: un.label, children: 'SCORE' }),
            ue.jsx('span', { className: un.value, 'data-testid': 'score-value', children: o }),
          ],
        }),
        ue.jsxs('div', {
          className: un.row,
          children: [
            ue.jsx('span', { className: un.label_small, children: 'BEST' }),
            ue.jsx('span', { className: un.value_small, children: b }),
          ],
        }),
      ],
    }),
  yp = '_toggle_1ap46_1',
  pp = { toggle: yp },
  Sp = ({ isOn: o, onToggle: b }) =>
    ue.jsx('button', {
      type: 'button',
      className: pp.toggle,
      onClick: b,
      'aria-label': o ? 'サウンドをOFFにする' : 'サウンドをONにする',
      'aria-pressed': o,
      children: ue.jsx('span', { 'aria-hidden': 'true', children: o ? '🔊' : '🔇' }),
    }),
  xp = '_toggle_15urq_1',
  Ep = { toggle: xp },
  sm = [
    { id: 'gumi', label: 'グミ' },
    { id: 'other', label: 'その他' },
  ],
  To = 'gumi',
  om = (o) => typeof o == 'string' && sm.some((b) => b.id === o),
  Tp = ({ value: o, onChange: b }) => {
    const M = (E) => {
      const h = E.target.value;
      om(h) && b(h);
    };
    return ue.jsx('select', {
      className: Ep.toggle,
      value: o,
      onChange: M,
      'aria-label': 'アセットテーマ',
      children: sm.map((E) => ue.jsx('option', { value: E.id, children: E.label }, E.id)),
    });
  },
  bp = ({
    score: o,
    bestScore: b,
    nextItem: M,
    isSoundOn: E,
    onToggleSound: h,
    themeId: i,
    onChangeTheme: c,
  }) =>
    ue.jsxs('header', {
      className: ro.top_bar,
      children: [
        ue.jsx(gp, { score: o, bestScore: b }),
        ue.jsxs('div', {
          className: ro.right,
          children: [
            ue.jsx(op, { item: M }),
            ue.jsx(Tp, { value: i, onChange: c }),
            ue.jsx(Sp, { isOn: E, onToggle: h }),
            ue.jsxs('span', {
              className: ro.version,
              'aria-label': 'ビルドバージョン',
              children: ['v', '1.0.2'],
            }),
          ],
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
 */ var Mp = Bu.exports,
  Yh;
function Ap() {
  return (
    Yh ||
      ((Yh = 1),
      (function (o, b) {
        (function (E, h) {
          o.exports = h();
        })(Mp, function () {
          return (function (M) {
            var E = {};
            function h(i) {
              if (E[i]) return E[i].exports;
              var c = (E[i] = { i, l: !1, exports: {} });
              return (M[i].call(c.exports, c, c.exports, h), (c.l = !0), c.exports);
            }
            return (
              (h.m = M),
              (h.c = E),
              (h.d = function (i, c, m) {
                h.o(i, c) || Object.defineProperty(i, c, { enumerable: !0, get: m });
              }),
              (h.r = function (i) {
                (typeof Symbol < 'u' &&
                  Symbol.toStringTag &&
                  Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }),
                  Object.defineProperty(i, '__esModule', { value: !0 }));
              }),
              (h.t = function (i, c) {
                if (
                  (c & 1 && (i = h(i)),
                  c & 8 || (c & 4 && typeof i == 'object' && i && i.__esModule))
                )
                  return i;
                var m = Object.create(null);
                if (
                  (h.r(m),
                  Object.defineProperty(m, 'default', { enumerable: !0, value: i }),
                  c & 2 && typeof i != 'string')
                )
                  for (var s in i)
                    h.d(
                      m,
                      s,
                      function (d) {
                        return i[d];
                      }.bind(null, s)
                    );
                return m;
              }),
              (h.n = function (i) {
                var c =
                  i && i.__esModule
                    ? function () {
                        return i.default;
                      }
                    : function () {
                        return i;
                      };
                return (h.d(c, 'a', c), c);
              }),
              (h.o = function (i, c) {
                return Object.prototype.hasOwnProperty.call(i, c);
              }),
              (h.p = ''),
              h((h.s = 20))
            );
          })([
            function (M, E) {
              var h = {};
              ((M.exports = h),
                (function () {
                  ((h._baseDelta = 1e3 / 60),
                    (h._nextId = 0),
                    (h._seed = 0),
                    (h._nowStartTime = +new Date()),
                    (h._warnedOnce = {}),
                    (h._decomp = null),
                    (h.extend = function (c, m) {
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
                              ? ((c[S] = c[S] || {}), h.extend(c[S], d, g[S]))
                              : (c[S] = g[S]);
                      }
                      return c;
                    }),
                    (h.clone = function (c, m) {
                      return h.extend({}, m, c);
                    }),
                    (h.keys = function (c) {
                      if (Object.keys) return Object.keys(c);
                      var m = [];
                      for (var s in c) m.push(s);
                      return m;
                    }),
                    (h.values = function (c) {
                      var m = [];
                      if (Object.keys) {
                        for (var s = Object.keys(c), d = 0; d < s.length; d++) m.push(c[s[d]]);
                        return m;
                      }
                      for (var f in c) m.push(c[f]);
                      return m;
                    }),
                    (h.get = function (c, m, s, d) {
                      m = m.split('.').slice(s, d);
                      for (var f = 0; f < m.length; f += 1) c = c[m[f]];
                      return c;
                    }),
                    (h.set = function (c, m, s, d, f) {
                      var g = m.split('.').slice(d, f);
                      return ((h.get(c, m, 0, -1)[g[g.length - 1]] = s), s);
                    }),
                    (h.shuffle = function (c) {
                      for (var m = c.length - 1; m > 0; m--) {
                        var s = Math.floor(h.random() * (m + 1)),
                          d = c[m];
                        ((c[m] = c[s]), (c[s] = d));
                      }
                      return c;
                    }),
                    (h.choose = function (c) {
                      return c[Math.floor(h.random() * c.length)];
                    }),
                    (h.isElement = function (c) {
                      return typeof HTMLElement < 'u'
                        ? c instanceof HTMLElement
                        : !!(c && c.nodeType && c.nodeName);
                    }),
                    (h.isArray = function (c) {
                      return Object.prototype.toString.call(c) === '[object Array]';
                    }),
                    (h.isFunction = function (c) {
                      return typeof c == 'function';
                    }),
                    (h.isPlainObject = function (c) {
                      return typeof c == 'object' && c.constructor === Object;
                    }),
                    (h.isString = function (c) {
                      return toString.call(c) === '[object String]';
                    }),
                    (h.clamp = function (c, m, s) {
                      return c < m ? m : c > s ? s : c;
                    }),
                    (h.sign = function (c) {
                      return c < 0 ? -1 : 1;
                    }),
                    (h.now = function () {
                      if (typeof window < 'u' && window.performance) {
                        if (window.performance.now) return window.performance.now();
                        if (window.performance.webkitNow) return window.performance.webkitNow();
                      }
                      return Date.now ? Date.now() : new Date() - h._nowStartTime;
                    }),
                    (h.random = function (c, m) {
                      return (
                        (c = typeof c < 'u' ? c : 0),
                        (m = typeof m < 'u' ? m : 1),
                        c + i() * (m - c)
                      );
                    }));
                  var i = function () {
                    return ((h._seed = (h._seed * 9301 + 49297) % 233280), h._seed / 233280);
                  };
                  ((h.colorToNumber = function (c) {
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
                    (h.logLevel = 1),
                    (h.log = function () {
                      console &&
                        h.logLevel > 0 &&
                        h.logLevel <= 3 &&
                        console.log.apply(
                          console,
                          ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                        );
                    }),
                    (h.info = function () {
                      console &&
                        h.logLevel > 0 &&
                        h.logLevel <= 2 &&
                        console.info.apply(
                          console,
                          ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                        );
                    }),
                    (h.warn = function () {
                      console &&
                        h.logLevel > 0 &&
                        h.logLevel <= 3 &&
                        console.warn.apply(
                          console,
                          ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                        );
                    }),
                    (h.warnOnce = function () {
                      var c = Array.prototype.slice.call(arguments).join(' ');
                      h._warnedOnce[c] || (h.warn(c), (h._warnedOnce[c] = !0));
                    }),
                    (h.deprecated = function (c, m, s) {
                      c[m] = h.chain(function () {
                        h.warnOnce('🔅 deprecated 🔅', s);
                      }, c[m]);
                    }),
                    (h.nextId = function () {
                      return h._nextId++;
                    }),
                    (h.indexOf = function (c, m) {
                      if (c.indexOf) return c.indexOf(m);
                      for (var s = 0; s < c.length; s++) if (c[s] === m) return s;
                      return -1;
                    }),
                    (h.map = function (c, m) {
                      if (c.map) return c.map(m);
                      for (var s = [], d = 0; d < c.length; d += 1) s.push(m(c[d]));
                      return s;
                    }),
                    (h.topologicalSort = function (c) {
                      var m = [],
                        s = [],
                        d = [];
                      for (var f in c) !s[f] && !d[f] && h._topologicalSort(f, s, d, c, m);
                      return m;
                    }),
                    (h._topologicalSort = function (c, m, s, d, f) {
                      var g = d[c] || [];
                      s[c] = !0;
                      for (var S = 0; S < g.length; S += 1) {
                        var r = g[S];
                        s[r] || m[r] || h._topologicalSort(r, m, s, d, f);
                      }
                      ((s[c] = !1), (m[c] = !0), f.push(c));
                    }),
                    (h.chain = function () {
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
                    (h.chainPathBefore = function (c, m, s) {
                      return h.set(c, m, h.chain(s, h.get(c, m)));
                    }),
                    (h.chainPathAfter = function (c, m, s) {
                      return h.set(c, m, h.chain(h.get(c, m), s));
                    }),
                    (h.setDecomp = function (c) {
                      h._decomp = c;
                    }),
                    (h.getDecomp = function () {
                      var c = h._decomp;
                      try {
                        (!c && typeof window < 'u' && (c = window.decomp),
                          !c && typeof xh < 'u' && (c = xh.decomp));
                      } catch {
                        c = null;
                      }
                      return c;
                    }));
                })());
            },
            function (M, E) {
              var h = {};
              ((M.exports = h),
                (function () {
                  ((h.create = function (i) {
                    var c = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
                    return (i && h.update(c, i), c);
                  }),
                    (h.update = function (i, c, m) {
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
                    (h.contains = function (i, c) {
                      return c.x >= i.min.x && c.x <= i.max.x && c.y >= i.min.y && c.y <= i.max.y;
                    }),
                    (h.overlaps = function (i, c) {
                      return (
                        i.min.x <= c.max.x &&
                        i.max.x >= c.min.x &&
                        i.max.y >= c.min.y &&
                        i.min.y <= c.max.y
                      );
                    }),
                    (h.translate = function (i, c) {
                      ((i.min.x += c.x), (i.max.x += c.x), (i.min.y += c.y), (i.max.y += c.y));
                    }),
                    (h.shift = function (i, c) {
                      var m = i.max.x - i.min.x,
                        s = i.max.y - i.min.y;
                      ((i.min.x = c.x), (i.max.x = c.x + m), (i.min.y = c.y), (i.max.y = c.y + s));
                    }));
                })());
            },
            function (M, E) {
              var h = {};
              ((M.exports = h),
                (function () {
                  ((h.create = function (i, c) {
                    return { x: i || 0, y: c || 0 };
                  }),
                    (h.clone = function (i) {
                      return { x: i.x, y: i.y };
                    }),
                    (h.magnitude = function (i) {
                      return Math.sqrt(i.x * i.x + i.y * i.y);
                    }),
                    (h.magnitudeSquared = function (i) {
                      return i.x * i.x + i.y * i.y;
                    }),
                    (h.rotate = function (i, c, m) {
                      var s = Math.cos(c),
                        d = Math.sin(c);
                      m || (m = {});
                      var f = i.x * s - i.y * d;
                      return ((m.y = i.x * d + i.y * s), (m.x = f), m);
                    }),
                    (h.rotateAbout = function (i, c, m, s) {
                      var d = Math.cos(c),
                        f = Math.sin(c);
                      s || (s = {});
                      var g = m.x + ((i.x - m.x) * d - (i.y - m.y) * f);
                      return ((s.y = m.y + ((i.x - m.x) * f + (i.y - m.y) * d)), (s.x = g), s);
                    }),
                    (h.normalise = function (i) {
                      var c = h.magnitude(i);
                      return c === 0 ? { x: 0, y: 0 } : { x: i.x / c, y: i.y / c };
                    }),
                    (h.dot = function (i, c) {
                      return i.x * c.x + i.y * c.y;
                    }),
                    (h.cross = function (i, c) {
                      return i.x * c.y - i.y * c.x;
                    }),
                    (h.cross3 = function (i, c, m) {
                      return (c.x - i.x) * (m.y - i.y) - (c.y - i.y) * (m.x - i.x);
                    }),
                    (h.add = function (i, c, m) {
                      return (m || (m = {}), (m.x = i.x + c.x), (m.y = i.y + c.y), m);
                    }),
                    (h.sub = function (i, c, m) {
                      return (m || (m = {}), (m.x = i.x - c.x), (m.y = i.y - c.y), m);
                    }),
                    (h.mult = function (i, c) {
                      return { x: i.x * c, y: i.y * c };
                    }),
                    (h.div = function (i, c) {
                      return { x: i.x / c, y: i.y / c };
                    }),
                    (h.perp = function (i, c) {
                      return ((c = c === !0 ? -1 : 1), { x: c * -i.y, y: c * i.x });
                    }),
                    (h.neg = function (i) {
                      return { x: -i.x, y: -i.y };
                    }),
                    (h.angle = function (i, c) {
                      return Math.atan2(c.y - i.y, c.x - i.x);
                    }),
                    (h._temp = [
                      h.create(),
                      h.create(),
                      h.create(),
                      h.create(),
                      h.create(),
                      h.create(),
                    ]));
                })());
            },
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(2),
                m = h(0);
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
                    for (var f = 0, g = 0, S = s, r, y, v = 0; v < S.length; v++)
                      ((y = (v + 1) % S.length),
                        (r = Math.abs(c.cross(S[y], S[v]))),
                        (f += r * (c.dot(S[y], S[y]) + c.dot(S[y], S[v]) + c.dot(S[v], S[v]))),
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
                        v = s.length,
                        x,
                        C,
                        O,
                        B;
                      for (B = 0; B < v; B++)
                        ((x = s[B]),
                          (C = x.x - r),
                          (O = x.y - y),
                          (x.x = r + (C * g - O * S)),
                          (x.y = y + (C * S + O * g)));
                      return s;
                    }
                  }),
                  (i.contains = function (s, d) {
                    for (var f = d.x, g = d.y, S = s.length, r = s[S - 1], y, v = 0; v < S; v++) {
                      if (((y = s[v]), (f - r.x) * (y.y - r.y) + (g - r.y) * (r.x - y.x) > 0))
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
                      var v = s[y - 1 >= 0 ? y - 1 : s.length - 1],
                        x = s[y],
                        C = s[(y + 1) % s.length],
                        O = d[y < d.length ? y : d.length - 1];
                      if (O === 0) {
                        r.push(x);
                        continue;
                      }
                      var B = c.normalise({ x: x.y - v.y, y: v.x - x.x }),
                        j = c.normalise({ x: C.y - x.y, y: x.x - C.x }),
                        T = Math.sqrt(2 * Math.pow(O, 2)),
                        R = c.mult(m.clone(B), O),
                        D = c.normalise(c.mult(c.add(B, j), 0.5)),
                        z = c.sub(x, c.mult(D, T)),
                        w = f;
                      (f === -1 && (w = Math.pow(O, 0.32) * 1.75),
                        (w = m.clamp(w, g, S)),
                        w % 2 === 1 && (w += 1));
                      for (var U = Math.acos(c.dot(B, j)), L = U / w, _ = 0; _ < w; _++)
                        r.push(c.add(c.rotate(R, L * _), z));
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
                          var v = r.x - y.x;
                          return v !== 0 ? v : r.y - y.y;
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
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(3),
                m = h(2),
                s = h(7),
                d = h(0),
                f = h(1),
                g = h(11);
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
                      v = d.extend(y, r);
                    return (S(v, r), v);
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
                  var v = r.isStatic
                      ? '#14151f'
                      : d.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1']),
                    x = r.isStatic ? '#555' : '#ccc',
                    C = r.isStatic && r.render.fillStyle === null ? 1 : 0;
                  ((r.render.fillStyle = r.render.fillStyle || v),
                    (r.render.strokeStyle = r.render.strokeStyle || x),
                    (r.render.lineWidth = r.render.lineWidth || C),
                    (r.render.sprite.xOffset +=
                      -(r.bounds.min.x - r.position.x) / (r.bounds.max.x - r.bounds.min.x)),
                    (r.render.sprite.yOffset +=
                      -(r.bounds.min.y - r.position.y) / (r.bounds.max.y - r.bounds.min.y)));
                };
                ((i.set = function (r, y, v) {
                  var x;
                  typeof y == 'string' && ((x = y), (y = {}), (y[x] = v));
                  for (x in y)
                    if (Object.prototype.hasOwnProperty.call(y, x))
                      switch (((v = y[x]), x)) {
                        case 'isStatic':
                          i.setStatic(r, v);
                          break;
                        case 'isSleeping':
                          s.set(r, v);
                          break;
                        case 'mass':
                          i.setMass(r, v);
                          break;
                        case 'density':
                          i.setDensity(r, v);
                          break;
                        case 'inertia':
                          i.setInertia(r, v);
                          break;
                        case 'vertices':
                          i.setVertices(r, v);
                          break;
                        case 'position':
                          i.setPosition(r, v);
                          break;
                        case 'angle':
                          i.setAngle(r, v);
                          break;
                        case 'velocity':
                          i.setVelocity(r, v);
                          break;
                        case 'angularVelocity':
                          i.setAngularVelocity(r, v);
                          break;
                        case 'speed':
                          i.setSpeed(r, v);
                          break;
                        case 'angularSpeed':
                          i.setAngularSpeed(r, v);
                          break;
                        case 'parts':
                          i.setParts(r, v);
                          break;
                        case 'centre':
                          i.setCentre(r, v);
                          break;
                        default:
                          r[x] = v;
                      }
                }),
                  (i.setStatic = function (r, y) {
                    for (var v = 0; v < r.parts.length; v++) {
                      var x = r.parts[v];
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
                    var v = r.inertia / (r.mass / 6);
                    ((r.inertia = v * (y / 6)),
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
                    var v = c.centre(r.vertices);
                    (c.translate(r.vertices, v, -1),
                      i.setInertia(r, i._inertiaScale * c.inertia(r.vertices, r.mass)),
                      c.translate(r.vertices, r.position),
                      f.update(r.bounds, r.vertices, r.velocity));
                  }),
                  (i.setParts = function (r, y, v) {
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
                      if (((v = typeof v < 'u' ? v : !0), v)) {
                        var O = [];
                        for (x = 0; x < y.length; x++) O = O.concat(y[x].vertices);
                        c.clockwiseSort(O);
                        var B = c.hull(O),
                          j = c.centre(B);
                        (i.setVertices(r, B), c.translate(r.vertices, j));
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
                  (i.setCentre = function (r, y, v) {
                    v
                      ? ((r.positionPrev.x += y.x),
                        (r.positionPrev.y += y.y),
                        (r.position.x += y.x),
                        (r.position.y += y.y))
                      : ((r.positionPrev.x = y.x - (r.position.x - r.positionPrev.x)),
                        (r.positionPrev.y = y.y - (r.position.y - r.positionPrev.y)),
                        (r.position.x = y.x),
                        (r.position.y = y.y));
                  }),
                  (i.setPosition = function (r, y, v) {
                    var x = m.sub(y, r.position);
                    v
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
                  (i.setAngle = function (r, y, v) {
                    var x = y - r.angle;
                    v
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
                    var v = r.deltaTime / i._baseDelta;
                    ((r.positionPrev.x = r.position.x - y.x * v),
                      (r.positionPrev.y = r.position.y - y.y * v),
                      (r.velocity.x = (r.position.x - r.positionPrev.x) / v),
                      (r.velocity.y = (r.position.y - r.positionPrev.y) / v),
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
                    var v = r.deltaTime / i._baseDelta;
                    ((r.anglePrev = r.angle - y * v),
                      (r.angularVelocity = (r.angle - r.anglePrev) / v),
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
                  (i.translate = function (r, y, v) {
                    i.setPosition(r, m.add(r.position, y), v);
                  }),
                  (i.rotate = function (r, y, v, x) {
                    if (!v) i.setAngle(r, r.angle + y, x);
                    else {
                      var C = Math.cos(y),
                        O = Math.sin(y),
                        B = r.position.x - v.x,
                        j = r.position.y - v.y;
                      (i.setPosition(r, { x: v.x + (B * C - j * O), y: v.y + (B * O + j * C) }, x),
                        i.setAngle(r, r.angle + y, x));
                    }
                  }),
                  (i.scale = function (r, y, v, x) {
                    var C = 0,
                      O = 0;
                    x = x || r.position;
                    for (var B = 0; B < r.parts.length; B++) {
                      var j = r.parts[B];
                      (c.scale(j.vertices, y, v, x),
                        (j.axes = g.fromVertices(j.vertices)),
                        (j.area = c.area(j.vertices)),
                        i.setMass(j, r.density * j.area),
                        c.translate(j.vertices, { x: -j.position.x, y: -j.position.y }),
                        i.setInertia(j, i._inertiaScale * c.inertia(j.vertices, j.mass)),
                        c.translate(j.vertices, { x: j.position.x, y: j.position.y }),
                        B > 0 && ((C += j.area), (O += j.inertia)),
                        (j.position.x = x.x + (j.position.x - x.x) * y),
                        (j.position.y = x.y + (j.position.y - x.y) * v),
                        f.update(j.bounds, j.vertices, r.velocity));
                    }
                    (r.parts.length > 1 &&
                      ((r.area = C),
                      r.isStatic || (i.setMass(r, r.density * C), i.setInertia(r, O))),
                      r.circleRadius &&
                        (y === v ? (r.circleRadius *= y) : (r.circleRadius = null)));
                  }),
                  (i.update = function (r, y) {
                    y = (typeof y < 'u' ? y : 1e3 / 60) * r.timeScale;
                    var v = y * y,
                      x = i._timeCorrection ? y / (r.deltaTime || y) : 1,
                      C = 1 - r.frictionAir * (y / d._baseDelta),
                      O = (r.position.x - r.positionPrev.x) * x,
                      B = (r.position.y - r.positionPrev.y) * x;
                    ((r.velocity.x = O * C + (r.force.x / r.mass) * v),
                      (r.velocity.y = B * C + (r.force.y / r.mass) * v),
                      (r.positionPrev.x = r.position.x),
                      (r.positionPrev.y = r.position.y),
                      (r.position.x += r.velocity.x),
                      (r.position.y += r.velocity.y),
                      (r.deltaTime = y),
                      (r.angularVelocity =
                        (r.angle - r.anglePrev) * C * x + (r.torque / r.inertia) * v),
                      (r.anglePrev = r.angle),
                      (r.angle += r.angularVelocity));
                    for (var j = 0; j < r.parts.length; j++) {
                      var T = r.parts[j];
                      (c.translate(T.vertices, r.velocity),
                        j > 0 && ((T.position.x += r.velocity.x), (T.position.y += r.velocity.y)),
                        r.angularVelocity !== 0 &&
                          (c.rotate(T.vertices, r.angularVelocity, r.position),
                          g.rotate(T.axes, r.angularVelocity),
                          j > 0 &&
                            m.rotateAbout(T.position, r.angularVelocity, r.position, T.position)),
                        f.update(T.bounds, T.vertices, r.velocity));
                    }
                  }),
                  (i.updateVelocities = function (r) {
                    var y = i._baseDelta / r.deltaTime,
                      v = r.velocity;
                    ((v.x = (r.position.x - r.positionPrev.x) * y),
                      (v.y = (r.position.y - r.positionPrev.y) * y),
                      (r.speed = Math.sqrt(v.x * v.x + v.y * v.y)),
                      (r.angularVelocity = (r.angle - r.anglePrev) * y),
                      (r.angularSpeed = Math.abs(r.angularVelocity)));
                  }),
                  (i.applyForce = function (r, y, v) {
                    var x = { x: y.x - r.position.x, y: y.y - r.position.y };
                    ((r.force.x += v.x), (r.force.y += v.y), (r.torque += x.x * v.y - x.y * v.x));
                  }),
                  (i._totalProperties = function (r) {
                    for (
                      var y = { mass: 0, area: 0, inertia: 0, centre: { x: 0, y: 0 } },
                        v = r.parts.length === 1 ? 0 : 1;
                      v < r.parts.length;
                      v++
                    ) {
                      var x = r.parts[v],
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
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(0);
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
                      for (var v = 0; v < f.length; v++)
                        if (((g = f[v]), (S = y[g]), S)) {
                          ((r = c.clone(d, !1)), (r.name = g), (r.source = m));
                          for (var x = 0; x < S.length; x++) S[x].apply(m, [r]);
                        }
                    }
                  }));
              })();
            },
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(5),
                m = h(0),
                s = h(1),
                d = h(4);
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
                        var v = f.composites[y];
                        i.setModified(v, g, S, r);
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
                      var v = r[y];
                      switch (v.type) {
                        case 'body':
                          i.removeBody(f, v, S);
                          break;
                        case 'constraint':
                          i.removeConstraint(f, v, S);
                          break;
                        case 'composite':
                          i.removeComposite(f, v, S);
                          break;
                        case 'mouseConstraint':
                          i.removeConstraint(f, v.constraint);
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
                      for (var v = 0; v < y.length; v++) y[v].sleepCounter = 0;
                    }
                    if (S)
                      for (var v = 0; v < f.composites.length; v++)
                        i.removeComposite(f.composites[v], g, !0);
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
                      ? ((y = r.filter(function (v) {
                          return v.id.toString() === g.toString();
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
                        v = Math.sin(g),
                        x = r ? i.allBodies(f) : f.bodies,
                        C = 0;
                      C < x.length;
                      C++
                    ) {
                      var O = x[C],
                        B = O.position.x - S.x,
                        j = O.position.y - S.y;
                      (d.setPosition(O, { x: S.x + (B * y - j * v), y: S.y + (B * v + j * y) }),
                        d.rotate(O, g));
                    }
                    return f;
                  }),
                  (i.scale = function (f, g, S, r, y) {
                    for (var v = y ? i.allBodies(f) : f.bodies, x = 0; x < v.length; x++) {
                      var C = v[x],
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
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(4),
                m = h(5),
                s = h(0);
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
                        v = c.getSpeed(y),
                        x = c.getAngularSpeed(y),
                        C = v * v + x * x;
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
                          v = r.bodyB.parent;
                        if (
                          !((y.isSleeping && v.isSleeping) || y.isStatic || v.isStatic) &&
                          (y.isSleeping || v.isSleeping)
                        ) {
                          var x = y.isSleeping && !y.isStatic ? y : v,
                            C = x === y ? v : y;
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
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(3),
                m = h(9);
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
                      v;
                    (y
                      ? (v = y.collision)
                      : ((v = i.create(g, S)),
                        (v.collided = !0),
                        (v.bodyA = g.id < S.id ? g : S),
                        (v.bodyB = g.id < S.id ? S : g),
                        (v.parentA = v.bodyA.parent),
                        (v.parentB = v.bodyB.parent)),
                      (g = v.bodyA),
                      (S = v.bodyB));
                    var x;
                    d.overlap < f.overlap ? (x = d) : (x = f);
                    var C = v.normal,
                      O = v.tangent,
                      B = v.penetration,
                      j = v.supports,
                      T = x.overlap,
                      R = x.axis,
                      D = R.x,
                      z = R.y,
                      w = S.position.x - g.position.x,
                      U = S.position.y - g.position.y;
                    (D * w + z * U >= 0 && ((D = -D), (z = -z)),
                      (C.x = D),
                      (C.y = z),
                      (O.x = -z),
                      (O.y = D),
                      (B.x = D * T),
                      (B.y = z * T),
                      (v.depth = T));
                    var L = i._findSupports(g, S, C, 1),
                      _ = 0;
                    if (
                      (c.contains(g.vertices, L[0]) && (j[_++] = L[0]),
                      c.contains(g.vertices, L[1]) && (j[_++] = L[1]),
                      _ < 2)
                    ) {
                      var $ = i._findSupports(S, g, C, -1);
                      (c.contains(S.vertices, $[0]) && (j[_++] = $[0]),
                        _ < 2 && c.contains(S.vertices, $[1]) && (j[_++] = $[1]));
                    }
                    return (_ === 0 && (j[_++] = L[0]), (v.supportCount = _), v);
                  }),
                  (i._overlapAxes = function (g, S, r, y) {
                    var v = S.length,
                      x = r.length,
                      C = S[0].x,
                      O = S[0].y,
                      B = r[0].x,
                      j = r[0].y,
                      T = y.length,
                      R = Number.MAX_VALUE,
                      D = 0,
                      z,
                      w,
                      U,
                      L,
                      _,
                      $;
                    for (_ = 0; _ < T; _++) {
                      var le = y[_],
                        ee = le.x,
                        G = le.y,
                        X = C * ee + O * G,
                        I = B * ee + j * G,
                        ne = X,
                        re = I;
                      for ($ = 1; $ < v; $ += 1)
                        ((L = S[$].x * ee + S[$].y * G), L > ne ? (ne = L) : L < X && (X = L));
                      for ($ = 1; $ < x; $ += 1)
                        ((L = r[$].x * ee + r[$].y * G), L > re ? (re = L) : L < I && (I = L));
                      if (
                        ((w = ne - I),
                        (U = re - X),
                        (z = w < U ? w : U),
                        z < R && ((R = z), (D = _), z <= 0))
                      )
                        break;
                    }
                    ((g.axis = y[D]), (g.overlap = R));
                  }),
                  (i._findSupports = function (g, S, r, y) {
                    var v = S.vertices,
                      x = v.length,
                      C = g.position.x,
                      O = g.position.y,
                      B = r.x * y,
                      j = r.y * y,
                      T = v[0],
                      R = T,
                      D = B * (C - R.x) + j * (O - R.y),
                      z,
                      w,
                      U;
                    for (U = 1; U < x; U += 1)
                      ((R = v[U]),
                        (w = B * (C - R.x) + j * (O - R.y)),
                        w < D && ((D = w), (T = R)));
                    return (
                      (z = v[(x + T.index - 1) % x]),
                      (D = B * (C - z.x) + j * (O - z.y)),
                      (R = v[(T.index + 1) % x]),
                      B * (C - R.x) + j * (O - R.y) < D
                        ? ((s[0] = T), (s[1] = R), s)
                        : ((s[0] = T), (s[1] = z), s)
                    );
                  }));
              })();
            },
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(16);
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
                    var v = f[0],
                      x = S[0],
                      C = f[1],
                      O = S[1];
                    ((O.vertex === v || x.vertex === C) && ((S[1] = x), (S[0] = x = O), (O = S[1])),
                      (x.vertex = v),
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
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(3),
                m = h(2),
                s = h(7),
                d = h(1),
                f = h(11),
                g = h(0);
              (function () {
                ((i._warming = 0.4),
                  (i._torqueDampen = 1),
                  (i._minLength = 1e-6),
                  (i.create = function (S) {
                    var r = S;
                    (r.bodyA && !r.pointA && (r.pointA = { x: 0, y: 0 }),
                      r.bodyB && !r.pointB && (r.pointB = { x: 0, y: 0 }));
                    var y = r.bodyA ? m.add(r.bodyA.position, r.pointA) : r.pointA,
                      v = r.bodyB ? m.add(r.bodyB.position, r.pointB) : r.pointB,
                      x = m.magnitude(m.sub(y, v));
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
                        v = y.constraintImpulse;
                      y.isStatic ||
                        (v.x === 0 && v.y === 0 && v.angle === 0) ||
                        ((y.position.x += v.x), (y.position.y += v.y), (y.angle += v.angle));
                    }
                  }),
                  (i.solveAll = function (S, r) {
                    for (var y = g.clamp(r / g._baseDelta, 0, 1), v = 0; v < S.length; v += 1) {
                      var x = S[v],
                        C = !x.bodyA || (x.bodyA && x.bodyA.isStatic),
                        O = !x.bodyB || (x.bodyB && x.bodyB.isStatic);
                      (C || O) && i.solve(S[v], y);
                    }
                    for (v = 0; v < S.length; v += 1)
                      ((x = S[v]),
                        (C = !x.bodyA || (x.bodyA && x.bodyA.isStatic)),
                        (O = !x.bodyB || (x.bodyB && x.bodyB.isStatic)),
                        !C && !O && i.solve(S[v], y));
                  }),
                  (i.solve = function (S, r) {
                    var y = S.bodyA,
                      v = S.bodyB,
                      x = S.pointA,
                      C = S.pointB;
                    if (!(!y && !v)) {
                      (y &&
                        !y.isStatic &&
                        (m.rotate(x, y.angle - S.angleA, x), (S.angleA = y.angle)),
                        v &&
                          !v.isStatic &&
                          (m.rotate(C, v.angle - S.angleB, C), (S.angleB = v.angle)));
                      var O = x,
                        B = C;
                      if (
                        (y && (O = m.add(y.position, x)),
                        v && (B = m.add(v.position, C)),
                        !(!O || !B))
                      ) {
                        var j = m.sub(O, B),
                          T = m.magnitude(j);
                        T < i._minLength && (T = i._minLength);
                        var R = (T - S.length) / T,
                          D = S.stiffness >= 1 || S.length === 0,
                          z = D ? S.stiffness * r : S.stiffness * r * r,
                          w = S.damping * r,
                          U = m.mult(j, R * z),
                          L = (y ? y.inverseMass : 0) + (v ? v.inverseMass : 0),
                          _ = (y ? y.inverseInertia : 0) + (v ? v.inverseInertia : 0),
                          $ = L + _,
                          le,
                          ee,
                          G,
                          X,
                          I;
                        if (w > 0) {
                          var ne = m.create();
                          ((G = m.div(j, T)),
                            (I = m.sub(
                              (v && m.sub(v.position, v.positionPrev)) || ne,
                              (y && m.sub(y.position, y.positionPrev)) || ne
                            )),
                            (X = m.dot(G, I)));
                        }
                        (y &&
                          !y.isStatic &&
                          ((ee = y.inverseMass / L),
                          (y.constraintImpulse.x -= U.x * ee),
                          (y.constraintImpulse.y -= U.y * ee),
                          (y.position.x -= U.x * ee),
                          (y.position.y -= U.y * ee),
                          w > 0 &&
                            ((y.positionPrev.x -= w * G.x * X * ee),
                            (y.positionPrev.y -= w * G.y * X * ee)),
                          (le =
                            (m.cross(x, U) / $) *
                            i._torqueDampen *
                            y.inverseInertia *
                            (1 - S.angularStiffness)),
                          (y.constraintImpulse.angle -= le),
                          (y.angle -= le)),
                          v &&
                            !v.isStatic &&
                            ((ee = v.inverseMass / L),
                            (v.constraintImpulse.x += U.x * ee),
                            (v.constraintImpulse.y += U.y * ee),
                            (v.position.x += U.x * ee),
                            (v.position.y += U.y * ee),
                            w > 0 &&
                              ((v.positionPrev.x += w * G.x * X * ee),
                              (v.positionPrev.y += w * G.y * X * ee)),
                            (le =
                              (m.cross(C, U) / $) *
                              i._torqueDampen *
                              v.inverseInertia *
                              (1 - S.angularStiffness)),
                            (v.constraintImpulse.angle += le),
                            (v.angle += le)));
                      }
                    }
                  }),
                  (i.postSolveAll = function (S) {
                    for (var r = 0; r < S.length; r++) {
                      var y = S[r],
                        v = y.constraintImpulse;
                      if (!(y.isStatic || (v.x === 0 && v.y === 0 && v.angle === 0))) {
                        s.set(y, !1);
                        for (var x = 0; x < y.parts.length; x++) {
                          var C = y.parts[x];
                          (c.translate(C.vertices, v),
                            x > 0 && ((C.position.x += v.x), (C.position.y += v.y)),
                            v.angle !== 0 &&
                              (c.rotate(C.vertices, v.angle, y.position),
                              f.rotate(C.axes, v.angle),
                              x > 0 && m.rotateAbout(C.position, v.angle, y.position, C.position)),
                            d.update(C.bounds, C.vertices, y.velocity));
                        }
                        ((v.angle *= i._warming), (v.x *= i._warming), (v.y *= i._warming));
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
                      v = (S.bodyB ? S.bodyB.position.x : 0) + (S.pointB ? S.pointB.x : 0),
                      x = (S.bodyB ? S.bodyB.position.y : 0) + (S.pointB ? S.pointB.y : 0),
                      C = r - v,
                      O = y - x;
                    return Math.sqrt(C * C + O * O);
                  }));
              })();
            },
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(2),
                m = h(0);
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
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(3),
                m = h(0),
                s = h(4),
                d = h(1),
                f = h(2);
              (function () {
                ((i.rectangle = function (g, S, r, y, v) {
                  v = v || {};
                  var x = {
                    label: 'Rectangle Body',
                    position: { x: g, y: S },
                    vertices: c.fromPath('L 0 0 L ' + r + ' 0 L ' + r + ' ' + y + ' L 0 ' + y),
                  };
                  if (v.chamfer) {
                    var C = v.chamfer;
                    ((x.vertices = c.chamfer(
                      x.vertices,
                      C.radius,
                      C.quality,
                      C.qualityMin,
                      C.qualityMax
                    )),
                      delete v.chamfer);
                  }
                  return s.create(m.extend({}, x, v));
                }),
                  (i.trapezoid = function (g, S, r, y, v, x) {
                    ((x = x || {}),
                      v >= 1 && m.warn('Bodies.trapezoid: slope parameter must be < 1.'),
                      (v *= 0.5));
                    var C = (1 - v * 2) * r,
                      O = r * v,
                      B = O + C,
                      j = B + O,
                      T;
                    v < 0.5
                      ? (T = 'L 0 0 L ' + O + ' ' + -y + ' L ' + B + ' ' + -y + ' L ' + j + ' 0')
                      : (T = 'L 0 0 L ' + B + ' ' + -y + ' L ' + j + ' 0');
                    var R = {
                      label: 'Trapezoid Body',
                      position: { x: g, y: S },
                      vertices: c.fromPath(T),
                    };
                    if (x.chamfer) {
                      var D = x.chamfer;
                      ((R.vertices = c.chamfer(
                        R.vertices,
                        D.radius,
                        D.quality,
                        D.qualityMin,
                        D.qualityMax
                      )),
                        delete x.chamfer);
                    }
                    return s.create(m.extend({}, R, x));
                  }),
                  (i.circle = function (g, S, r, y, v) {
                    y = y || {};
                    var x = { label: 'Circle Body', circleRadius: r };
                    v = v || 25;
                    var C = Math.ceil(Math.max(10, Math.min(v, r)));
                    return (C % 2 === 1 && (C += 1), i.polygon(g, S, C, r, m.extend({}, x, y)));
                  }),
                  (i.polygon = function (g, S, r, y, v) {
                    if (((v = v || {}), r < 3)) return i.circle(g, S, y, v);
                    for (var x = (2 * Math.PI) / r, C = '', O = x * 0.5, B = 0; B < r; B += 1) {
                      var j = O + B * x,
                        T = Math.cos(j) * y,
                        R = Math.sin(j) * y;
                      C += 'L ' + T.toFixed(3) + ' ' + R.toFixed(3) + ' ';
                    }
                    var D = {
                      label: 'Polygon Body',
                      position: { x: g, y: S },
                      vertices: c.fromPath(C),
                    };
                    if (v.chamfer) {
                      var z = v.chamfer;
                      ((D.vertices = c.chamfer(
                        D.vertices,
                        z.radius,
                        z.quality,
                        z.qualityMin,
                        z.qualityMax
                      )),
                        delete v.chamfer);
                    }
                    return s.create(m.extend({}, D, v));
                  }),
                  (i.fromVertices = function (g, S, r, y, v, x, C, O) {
                    var B = m.getDecomp(),
                      j,
                      T,
                      R,
                      D,
                      z,
                      w,
                      U,
                      L,
                      _,
                      $,
                      le;
                    for (
                      j = !!(B && B.quickDecomp),
                        y = y || {},
                        R = [],
                        v = typeof v < 'u' ? v : !1,
                        x = typeof x < 'u' ? x : 0.01,
                        C = typeof C < 'u' ? C : 10,
                        O = typeof O < 'u' ? O : 0.01,
                        m.isArray(r[0]) || (r = [r]),
                        $ = 0;
                      $ < r.length;
                      $ += 1
                    )
                      if (
                        ((w = r[$]),
                        (D = c.isConvex(w)),
                        (z = !D),
                        z &&
                          !j &&
                          m.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                          ),
                        D || !j)
                      )
                        (D ? (w = c.clockwiseSort(w)) : (w = c.hull(w)),
                          R.push({ position: { x: g, y: S }, vertices: w }));
                      else {
                        var ee = w.map(function (ie) {
                          return [ie.x, ie.y];
                        });
                        (B.makeCCW(ee),
                          x !== !1 && B.removeCollinearPoints(ee, x),
                          O !== !1 && B.removeDuplicatePoints && B.removeDuplicatePoints(ee, O));
                        var G = B.quickDecomp(ee);
                        for (U = 0; U < G.length; U++) {
                          var X = G[U],
                            I = X.map(function (ie) {
                              return { x: ie[0], y: ie[1] };
                            });
                          (C > 0 && c.area(I) < C) ||
                            R.push({ position: c.centre(I), vertices: I });
                        }
                      }
                    for (U = 0; U < R.length; U++) R[U] = s.create(m.extend(R[U], y));
                    if (v) {
                      var ne = 5;
                      for (U = 0; U < R.length; U++) {
                        var re = R[U];
                        for (L = U + 1; L < R.length; L++) {
                          var N = R[L];
                          if (d.overlaps(re.bounds, N.bounds)) {
                            var J = re.vertices,
                              te = N.vertices;
                            for (_ = 0; _ < re.vertices.length; _++)
                              for (le = 0; le < N.vertices.length; le++) {
                                var ae = f.magnitudeSquared(f.sub(J[(_ + 1) % J.length], te[le])),
                                  se = f.magnitudeSquared(f.sub(J[_], te[(le + 1) % te.length]));
                                ae < ne &&
                                  se < ne &&
                                  ((J[_].isInternal = !0), (te[le].isInternal = !0));
                              }
                          }
                        }
                      }
                    }
                    return R.length > 1
                      ? ((T = s.create(m.extend({ parts: R.slice(0) }, y))),
                        s.setPosition(T, { x: g, y: S }),
                        T)
                      : R[0];
                  }));
              })();
            },
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(0),
                m = h(8);
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
                      v = 0,
                      x,
                      C;
                    for (f.sort(i._compareBoundsX), x = 0; x < g; x++) {
                      var O = f[x],
                        B = O.bounds,
                        j = O.bounds.max.x,
                        T = O.bounds.max.y,
                        R = O.bounds.min.y,
                        D = O.isStatic || O.isSleeping,
                        z = O.parts.length,
                        w = z === 1;
                      for (C = x + 1; C < g; C++) {
                        var U = f[C],
                          L = U.bounds;
                        if (L.min.x > j) break;
                        if (
                          !(T < L.min.y || R > L.max.y) &&
                          !(D && (U.isStatic || U.isSleeping)) &&
                          S(O.collisionFilter, U.collisionFilter)
                        ) {
                          var _ = U.parts.length;
                          if (w && _ === 1) {
                            var $ = r(O, U, d);
                            $ && (y[v++] = $);
                          } else
                            for (var le = z > 1 ? 1 : 0, ee = _ > 1 ? 1 : 0, G = le; G < z; G++)
                              for (var X = O.parts[G], B = X.bounds, I = ee; I < _; I++) {
                                var ne = U.parts[I],
                                  L = ne.bounds;
                                if (
                                  !(
                                    B.min.x > L.max.x ||
                                    B.max.x < L.min.x ||
                                    B.max.y < L.min.y ||
                                    B.min.y > L.max.y
                                  )
                                ) {
                                  var $ = r(X, ne, d);
                                  $ && (y[v++] = $);
                                }
                              }
                        }
                      }
                    }
                    return (y.length !== v && (y.length = v), y);
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
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(0);
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
                      v,
                      x;
                    return (
                      y
                        ? ((v = y[0].pageX - f.left - S), (x = y[0].pageY - f.top - r))
                        : ((v = m.pageX - f.left - S), (x = m.pageY - f.top - r)),
                      {
                        x: v / ((s.clientWidth / (s.width || s.clientWidth)) * d),
                        y: x / ((s.clientHeight / (s.height || s.clientHeight)) * d),
                      }
                    );
                  }));
              })();
            },
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(0);
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
              var h = {};
              ((M.exports = h),
                (function () {
                  h.create = function (i) {
                    return { vertex: i, normalImpulse: 0, tangentImpulse: 0 };
                  };
                })());
            },
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(7),
                m = h(18),
                s = h(13),
                d = h(19),
                f = h(5),
                g = h(6),
                S = h(10),
                r = h(0),
                y = h(4);
              (function () {
                ((i._deltaMax = 1e3 / 60),
                  (i.create = function (v) {
                    v = v || {};
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
                      C = r.extend(x, v);
                    return (
                      (C.world = v.world || g.create({ label: 'World' })),
                      (C.pairs = v.pairs || d.create()),
                      (C.detector = v.detector || s.create()),
                      (C.detector.pairs = C.pairs),
                      (C.grid = { buckets: [] }),
                      (C.world.gravity = C.gravity),
                      (C.broadphase = C.grid),
                      (C.metrics = {}),
                      C
                    );
                  }),
                  (i.update = function (v, x) {
                    var C = r.now(),
                      O = v.world,
                      B = v.detector,
                      j = v.pairs,
                      T = v.timing,
                      R = T.timestamp,
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
                    var z = { timestamp: T.timestamp, delta: x };
                    f.trigger(v, 'beforeUpdate', z);
                    var w = g.allBodies(O),
                      U = g.allConstraints(O);
                    for (
                      O.isModified && (s.setBodies(B, w), g.setModified(O, !1, !1, !0)),
                        v.enableSleeping && c.update(w, x),
                        i._bodiesApplyGravity(w, v.gravity),
                        x > 0 && i._bodiesUpdate(w, x),
                        f.trigger(v, 'beforeSolve', z),
                        S.preSolveAll(w),
                        D = 0;
                      D < v.constraintIterations;
                      D++
                    )
                      S.solveAll(U, x);
                    S.postSolveAll(w);
                    var L = s.collisions(B);
                    (d.update(j, L, R),
                      v.enableSleeping && c.afterCollisions(j.list),
                      j.collisionStart.length > 0 &&
                        f.trigger(v, 'collisionStart', {
                          pairs: j.collisionStart,
                          timestamp: T.timestamp,
                          delta: x,
                        }));
                    var _ = r.clamp(20 / v.positionIterations, 0, 1);
                    for (m.preSolvePosition(j.list), D = 0; D < v.positionIterations; D++)
                      m.solvePosition(j.list, x, _);
                    for (
                      m.postSolvePosition(w), S.preSolveAll(w), D = 0;
                      D < v.constraintIterations;
                      D++
                    )
                      S.solveAll(U, x);
                    for (
                      S.postSolveAll(w), m.preSolveVelocity(j.list), D = 0;
                      D < v.velocityIterations;
                      D++
                    )
                      m.solveVelocity(j.list, x);
                    return (
                      i._bodiesUpdateVelocities(w),
                      j.collisionActive.length > 0 &&
                        f.trigger(v, 'collisionActive', {
                          pairs: j.collisionActive,
                          timestamp: T.timestamp,
                          delta: x,
                        }),
                      j.collisionEnd.length > 0 &&
                        f.trigger(v, 'collisionEnd', {
                          pairs: j.collisionEnd,
                          timestamp: T.timestamp,
                          delta: x,
                        }),
                      i._bodiesClearForces(w),
                      f.trigger(v, 'afterUpdate', z),
                      (v.timing.lastElapsed = r.now() - C),
                      v
                    );
                  }),
                  (i.merge = function (v, x) {
                    if ((r.extend(v, x), x.world)) {
                      ((v.world = x.world), i.clear(v));
                      for (var C = g.allBodies(v.world), O = 0; O < C.length; O++) {
                        var B = C[O];
                        (c.set(B, !1), (B.id = r.nextId()));
                      }
                    }
                  }),
                  (i.clear = function (v) {
                    (d.clear(v.pairs), s.clear(v.detector));
                  }),
                  (i._bodiesClearForces = function (v) {
                    for (var x = v.length, C = 0; C < x; C++) {
                      var O = v[C];
                      ((O.force.x = 0), (O.force.y = 0), (O.torque = 0));
                    }
                  }),
                  (i._bodiesApplyGravity = function (v, x) {
                    var C = typeof x.scale < 'u' ? x.scale : 0.001,
                      O = v.length;
                    if (!((x.x === 0 && x.y === 0) || C === 0))
                      for (var B = 0; B < O; B++) {
                        var j = v[B];
                        j.isStatic ||
                          j.isSleeping ||
                          ((j.force.y += j.mass * x.y * C), (j.force.x += j.mass * x.x * C));
                      }
                  }),
                  (i._bodiesUpdate = function (v, x) {
                    for (var C = v.length, O = 0; O < C; O++) {
                      var B = v[O];
                      B.isStatic || B.isSleeping || y.update(B, x);
                    }
                  }),
                  (i._bodiesUpdateVelocities = function (v) {
                    for (var x = v.length, C = 0; C < x; C++) y.updateVelocities(v[C]);
                  }));
              })();
            },
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(3),
                m = h(0),
                s = h(1);
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
                      v,
                      x,
                      C,
                      O,
                      B,
                      j = i._positionDampen * (g || 1),
                      T = m.clamp(f / m._baseDelta, 0, 1),
                      R = d.length;
                    for (S = 0; S < R; S++)
                      ((r = d[S]),
                        !(!r.isActive || r.isSensor) &&
                          ((y = r.collision),
                          (v = y.parentA),
                          (x = y.parentB),
                          (C = y.normal),
                          (r.separation =
                            y.depth +
                            C.x * (x.positionImpulse.x - v.positionImpulse.x) +
                            C.y * (x.positionImpulse.y - v.positionImpulse.y))));
                    for (S = 0; S < R; S++)
                      ((r = d[S]),
                        !(!r.isActive || r.isSensor) &&
                          ((y = r.collision),
                          (v = y.parentA),
                          (x = y.parentB),
                          (C = y.normal),
                          (B = r.separation - r.slop * T),
                          (v.isStatic || x.isStatic) && (B *= 2),
                          v.isStatic ||
                            v.isSleeping ||
                            ((O = j / v.totalContacts),
                            (v.positionImpulse.x += C.x * B * O),
                            (v.positionImpulse.y += C.y * B * O)),
                          x.isStatic ||
                            x.isSleeping ||
                            ((O = j / x.totalContacts),
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
                      var v = d[y],
                        x = v.positionImpulse,
                        C = x.x,
                        O = x.y,
                        B = v.velocity;
                      if (((v.totalContacts = 0), C !== 0 || O !== 0)) {
                        for (var j = 0; j < v.parts.length; j++) {
                          var T = v.parts[j];
                          (S(T.vertices, x),
                            r(T.bounds, T.vertices, B),
                            (T.position.x += C),
                            (T.position.y += O));
                        }
                        ((v.positionPrev.x += C),
                          (v.positionPrev.y += O),
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
                          v = r.contactCount,
                          x = r.collision,
                          C = x.parentA,
                          O = x.parentB,
                          B = x.normal,
                          j = x.tangent;
                        for (S = 0; S < v; S++) {
                          var T = y[S],
                            R = T.vertex,
                            D = T.normalImpulse,
                            z = T.tangentImpulse;
                          if (D !== 0 || z !== 0) {
                            var w = B.x * D + j.x * z,
                              U = B.y * D + j.y * z;
                            (C.isStatic ||
                              C.isSleeping ||
                              ((C.positionPrev.x += w * C.inverseMass),
                              (C.positionPrev.y += U * C.inverseMass),
                              (C.anglePrev +=
                                C.inverseInertia *
                                ((R.x - C.position.x) * U - (R.y - C.position.y) * w))),
                              O.isStatic ||
                                O.isSleeping ||
                                ((O.positionPrev.x -= w * O.inverseMass),
                                (O.positionPrev.y -= U * O.inverseMass),
                                (O.anglePrev -=
                                  O.inverseInertia *
                                  ((R.x - O.position.x) * U - (R.y - O.position.y) * w))));
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
                      v = i._restingThreshTangent,
                      x = i._frictionNormalMultiplier * g,
                      C = i._frictionMaxStatic,
                      O = d.length,
                      B,
                      j,
                      T,
                      R;
                    for (T = 0; T < O; T++) {
                      var D = d[T];
                      if (!(!D.isActive || D.isSensor)) {
                        var z = D.collision,
                          w = z.parentA,
                          U = z.parentB,
                          L = z.normal.x,
                          _ = z.normal.y,
                          $ = z.tangent.x,
                          le = z.tangent.y,
                          ee = D.inverseMass,
                          G = D.friction * D.frictionStatic * x,
                          X = D.contacts,
                          I = D.contactCount,
                          ne = 1 / I,
                          re = w.position.x - w.positionPrev.x,
                          N = w.position.y - w.positionPrev.y,
                          J = w.angle - w.anglePrev,
                          te = U.position.x - U.positionPrev.x,
                          ae = U.position.y - U.positionPrev.y,
                          se = U.angle - U.anglePrev;
                        for (R = 0; R < I; R++) {
                          var ie = X[R],
                            de = ie.vertex,
                            ye = de.x - w.position.x,
                            Ue = de.y - w.position.y,
                            tt = de.x - U.position.x,
                            at = de.y - U.position.y,
                            Je = re - Ue * J,
                            ii = N + ye * J,
                            Qt = te - at * se,
                            ta = ae + tt * se,
                            sn = Je - Qt,
                            ui = ii - ta,
                            on = L * sn + _ * ui,
                            ht = $ * sn + le * ui,
                            fn = D.separation + on,
                            jl = Math.min(fn, 1);
                          jl = fn < 0 ? 0 : jl;
                          var ri = jl * G;
                          ht < -ri || ht > ri
                            ? ((j = ht > 0 ? ht : -ht),
                              (B = D.friction * (ht > 0 ? 1 : -1) * r),
                              B < -j ? (B = -j) : B > j && (B = j))
                            : ((B = ht), (j = C));
                          var si = ye * _ - Ue * L,
                            lt = tt * _ - at * L,
                            oi =
                              ne / (ee + w.inverseInertia * si * si + U.inverseInertia * lt * lt),
                            Yl = (1 + D.restitution) * on * oi;
                          if (((B *= oi), on < y)) ie.normalImpulse = 0;
                          else {
                            var fi = ie.normalImpulse;
                            ((ie.normalImpulse += Yl),
                              ie.normalImpulse > 0 && (ie.normalImpulse = 0),
                              (Yl = ie.normalImpulse - fi));
                          }
                          if (ht < -v || ht > v) ie.tangentImpulse = 0;
                          else {
                            var cn = ie.tangentImpulse;
                            ((ie.tangentImpulse += B),
                              ie.tangentImpulse < -j && (ie.tangentImpulse = -j),
                              ie.tangentImpulse > j && (ie.tangentImpulse = j),
                              (B = ie.tangentImpulse - cn));
                          }
                          var dn = L * Yl + $ * B,
                            Gl = _ * Yl + le * B;
                          (w.isStatic ||
                            w.isSleeping ||
                            ((w.positionPrev.x += dn * w.inverseMass),
                            (w.positionPrev.y += Gl * w.inverseMass),
                            (w.anglePrev += (ye * Gl - Ue * dn) * w.inverseInertia)),
                            U.isStatic ||
                              U.isSleeping ||
                              ((U.positionPrev.x -= dn * U.inverseMass),
                              (U.positionPrev.y -= Gl * U.inverseMass),
                              (U.anglePrev -= (tt * Gl - at * dn) * U.inverseInertia)));
                        }
                      }
                    }
                  }));
              })();
            },
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(9),
                m = h(0);
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
                      v = s.list,
                      x = v.length,
                      C = x,
                      O = s.collisionStart,
                      B = s.collisionEnd,
                      j = s.collisionActive,
                      T = d.length,
                      R = 0,
                      D = 0,
                      z = 0,
                      w,
                      U,
                      L;
                    for (L = 0; L < T; L++)
                      ((w = d[L]),
                        (U = w.pair),
                        U
                          ? (U.isActive && (j[z++] = U), g(U, w, f))
                          : ((U = S(w, f)), (y[U.id] = U), (O[R++] = U), (v[C++] = U)));
                    for (C = 0, x = v.length, L = 0; L < x; L++)
                      ((U = v[L]),
                        U.timeUpdated >= f
                          ? (v[C++] = U)
                          : (r(U, !1, f),
                            U.collision.bodyA.sleepCounter > 0 && U.collision.bodyB.sleepCounter > 0
                              ? (v[C++] = U)
                              : ((B[D++] = U), delete y[U.id])));
                    (v.length !== C && (v.length = C),
                      O.length !== R && (O.length = R),
                      B.length !== D && (B.length = D),
                      j.length !== z && (j.length = z));
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
            function (M, E, h) {
              var i = (M.exports = h(21));
              ((i.Axes = h(11)),
                (i.Bodies = h(12)),
                (i.Body = h(4)),
                (i.Bounds = h(1)),
                (i.Collision = h(8)),
                (i.Common = h(0)),
                (i.Composite = h(6)),
                (i.Composites = h(22)),
                (i.Constraint = h(10)),
                (i.Contact = h(16)),
                (i.Detector = h(13)),
                (i.Engine = h(17)),
                (i.Events = h(5)),
                (i.Grid = h(23)),
                (i.Mouse = h(14)),
                (i.MouseConstraint = h(24)),
                (i.Pair = h(9)),
                (i.Pairs = h(19)),
                (i.Plugin = h(15)),
                (i.Query = h(25)),
                (i.Render = h(26)),
                (i.Resolver = h(18)),
                (i.Runner = h(27)),
                (i.SAT = h(28)),
                (i.Sleeping = h(7)),
                (i.Svg = h(29)),
                (i.Vector = h(2)),
                (i.Vertices = h(3)),
                (i.World = h(30)),
                (i.Engine.run = i.Runner.run),
                i.Common.deprecated(
                  i.Engine,
                  'run',
                  'Engine.run ➤ use Matter.Runner.run(engine) instead'
                ));
            },
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(15),
                m = h(0);
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
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(6),
                m = h(10),
                s = h(0),
                d = h(4),
                f = h(12),
                g = s.deprecated;
              (function () {
                ((i.stack = function (S, r, y, v, x, C, O) {
                  for (
                    var B = c.create({ label: 'Stack' }), j = S, T = r, R, D = 0, z = 0;
                    z < v;
                    z++
                  ) {
                    for (var w = 0, U = 0; U < y; U++) {
                      var L = O(j, T, U, z, R, D);
                      if (L) {
                        var _ = L.bounds.max.y - L.bounds.min.y,
                          $ = L.bounds.max.x - L.bounds.min.x;
                        (_ > w && (w = _),
                          d.translate(L, { x: $ * 0.5, y: _ * 0.5 }),
                          (j = L.bounds.max.x + x),
                          c.addBody(B, L),
                          (R = L),
                          (D += 1));
                      } else j += x;
                    }
                    ((T += w + C), (j = S));
                  }
                  return B;
                }),
                  (i.chain = function (S, r, y, v, x, C) {
                    for (var O = S.bodies, B = 1; B < O.length; B++) {
                      var j = O[B - 1],
                        T = O[B],
                        R = j.bounds.max.y - j.bounds.min.y,
                        D = j.bounds.max.x - j.bounds.min.x,
                        z = T.bounds.max.y - T.bounds.min.y,
                        w = T.bounds.max.x - T.bounds.min.x,
                        U = {
                          bodyA: j,
                          pointA: { x: D * r, y: R * y },
                          bodyB: T,
                          pointB: { x: w * v, y: z * x },
                        },
                        L = s.extend(U, C);
                      c.addConstraint(S, m.create(L));
                    }
                    return ((S.label += ' Chain'), S);
                  }),
                  (i.mesh = function (S, r, y, v, x) {
                    var C = S.bodies,
                      O,
                      B,
                      j,
                      T,
                      R;
                    for (O = 0; O < y; O++) {
                      for (B = 1; B < r; B++)
                        ((j = C[B - 1 + O * r]),
                          (T = C[B + O * r]),
                          c.addConstraint(S, m.create(s.extend({ bodyA: j, bodyB: T }, x))));
                      if (O > 0)
                        for (B = 0; B < r; B++)
                          ((j = C[B + (O - 1) * r]),
                            (T = C[B + O * r]),
                            c.addConstraint(S, m.create(s.extend({ bodyA: j, bodyB: T }, x))),
                            v &&
                              B > 0 &&
                              ((R = C[B - 1 + (O - 1) * r]),
                              c.addConstraint(S, m.create(s.extend({ bodyA: R, bodyB: T }, x)))),
                            v &&
                              B < r - 1 &&
                              ((R = C[B + 1 + (O - 1) * r]),
                              c.addConstraint(S, m.create(s.extend({ bodyA: R, bodyB: T }, x)))));
                    }
                    return ((S.label += ' Mesh'), S);
                  }),
                  (i.pyramid = function (S, r, y, v, x, C, O) {
                    return i.stack(S, r, y, v, x, C, function (B, j, T, R, D, z) {
                      var w = Math.min(v, Math.ceil(y / 2)),
                        U = D ? D.bounds.max.x - D.bounds.min.x : 0;
                      if (!(R > w)) {
                        R = w - R;
                        var L = R,
                          _ = y - 1 - R;
                        if (!(T < L || T > _)) {
                          z === 1 && d.translate(D, { x: (T + (y % 2 === 1 ? 1 : -1)) * U, y: 0 });
                          var $ = D ? T * U : 0;
                          return O(S + $ + T * x, j, T, R, D, z);
                        }
                      }
                    });
                  }),
                  (i.newtonsCradle = function (S, r, y, v, x) {
                    for (var C = c.create({ label: 'Newtons Cradle' }), O = 0; O < y; O++) {
                      var B = 1.9,
                        j = f.circle(S + O * (v * B), r + x, v, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        T = m.create({ pointA: { x: S + O * (v * B), y: r }, bodyB: j });
                      (c.addBody(C, j), c.addConstraint(C, T));
                    }
                    return C;
                  }),
                  g(
                    i,
                    'newtonsCradle',
                    'Composites.newtonsCradle ➤ moved to newtonsCradle example'
                  ),
                  (i.car = function (S, r, y, v, x) {
                    var C = d.nextGroup(!0),
                      O = 20,
                      B = -y * 0.5 + O,
                      j = y * 0.5 - O,
                      T = 0,
                      R = c.create({ label: 'Car' }),
                      D = f.rectangle(S, r, y, v, {
                        collisionFilter: { group: C },
                        chamfer: { radius: v * 0.5 },
                        density: 2e-4,
                      }),
                      z = f.circle(S + B, r + T, x, {
                        collisionFilter: { group: C },
                        friction: 0.8,
                      }),
                      w = f.circle(S + j, r + T, x, {
                        collisionFilter: { group: C },
                        friction: 0.8,
                      }),
                      U = m.create({
                        bodyB: D,
                        pointB: { x: B, y: T },
                        bodyA: z,
                        stiffness: 1,
                        length: 0,
                      }),
                      L = m.create({
                        bodyB: D,
                        pointB: { x: j, y: T },
                        bodyA: w,
                        stiffness: 1,
                        length: 0,
                      });
                    return (
                      c.addBody(R, D),
                      c.addBody(R, z),
                      c.addBody(R, w),
                      c.addConstraint(R, U),
                      c.addConstraint(R, L),
                      R
                    );
                  }),
                  g(i, 'car', 'Composites.car ➤ moved to car example'),
                  (i.softBody = function (S, r, y, v, x, C, O, B, j, T) {
                    ((j = s.extend({ inertia: 1 / 0 }, j)),
                      (T = s.extend({ stiffness: 0.2, render: { type: 'line', anchors: !1 } }, T)));
                    var R = i.stack(S, r, y, v, x, C, function (D, z) {
                      return f.circle(D, z, B, j);
                    });
                    return (i.mesh(R, y, v, O, T), (R.label = 'Soft Body'), R);
                  }),
                  g(i, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples'));
              })();
            },
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(9),
                m = h(0),
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
                      v,
                      x = g.world,
                      C = d.buckets,
                      O,
                      B,
                      j = !1;
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
                        var R = i._getRegion(d, T);
                        if (!T.region || R.id !== T.region.id || S) {
                          (!T.region || S) && (T.region = R);
                          var D = i._regionUnion(R, T.region);
                          for (y = D.startCol; y <= D.endCol; y++)
                            for (v = D.startRow; v <= D.endRow; v++) {
                              ((B = i._getBucketId(y, v)), (O = C[B]));
                              var z =
                                  y >= R.startCol &&
                                  y <= R.endCol &&
                                  v >= R.startRow &&
                                  v <= R.endRow,
                                w =
                                  y >= T.region.startCol &&
                                  y <= T.region.endCol &&
                                  v >= T.region.startRow &&
                                  v <= T.region.endRow;
                              (!z && w && w && O && i._bucketRemoveBody(d, O, T),
                                (T.region === R || (z && !w) || S) &&
                                  (O || (O = i._createBucket(C, B)), i._bucketAddBody(d, O, T)));
                            }
                          ((T.region = R), (j = !0));
                        }
                      }
                    }
                    j && (d.pairsList = i._createActivePairsList(d));
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
                      v = Math.floor(g.max.y / d.bucketHeight);
                    return i._createRegion(S, r, y, v);
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
                      v;
                    for (v = 0; v < y; v++) {
                      var x = f[v];
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
                    var v = f.length;
                    for (y = 0; y < v; y++) {
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
                      v;
                    for (v = 0; v < r; v++) ((f = g[S[v]]), f[2] > 0 ? y.push(f) : delete g[S[v]]);
                    return y;
                  }));
              })();
            },
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(3),
                m = h(7),
                s = h(14),
                d = h(5),
                f = h(13),
                g = h(10),
                S = h(6),
                r = h(0),
                y = h(1);
              (function () {
                ((i.create = function (v, x) {
                  var C = (v ? v.mouse : null) || (x ? x.mouse : null);
                  C ||
                    (v && v.render && v.render.canvas
                      ? (C = s.create(v.render.canvas))
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
                    j = r.extend(B, x);
                  return (
                    d.on(v, 'beforeUpdate', function () {
                      var T = S.allBodies(v.world);
                      (i.update(j, T), i._triggerEvents(j));
                    }),
                    j
                  );
                }),
                  (i.update = function (v, x) {
                    var C = v.mouse,
                      O = v.constraint,
                      B = v.body;
                    if (C.button === 0) {
                      if (O.bodyB) (m.set(O.bodyB, !1), (O.pointA = C.position));
                      else
                        for (var j = 0; j < x.length; j++)
                          if (
                            ((B = x[j]),
                            y.contains(B.bounds, C.position) &&
                              f.canCollide(B.collisionFilter, v.collisionFilter))
                          )
                            for (var T = B.parts.length > 1 ? 1 : 0; T < B.parts.length; T++) {
                              var R = B.parts[T];
                              if (c.contains(R.vertices, C.position)) {
                                ((O.pointA = C.position),
                                  (O.bodyB = v.body = B),
                                  (O.pointB = {
                                    x: C.position.x - B.position.x,
                                    y: C.position.y - B.position.y,
                                  }),
                                  (O.angleB = B.angle),
                                  m.set(B, !1),
                                  d.trigger(v, 'startdrag', { mouse: C, body: B }));
                                break;
                              }
                            }
                    } else
                      ((O.bodyB = v.body = null),
                        (O.pointB = null),
                        B && d.trigger(v, 'enddrag', { mouse: C, body: B }));
                  }),
                  (i._triggerEvents = function (v) {
                    var x = v.mouse,
                      C = x.sourceEvents;
                    (C.mousemove && d.trigger(v, 'mousemove', { mouse: x }),
                      C.mousedown && d.trigger(v, 'mousedown', { mouse: x }),
                      C.mouseup && d.trigger(v, 'mouseup', { mouse: x }),
                      s.clearSourceEvents(x));
                  }));
              })();
            },
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(2),
                m = h(8),
                s = h(1),
                d = h(12),
                f = h(3);
              (function () {
                ((i.collides = function (g, S) {
                  for (
                    var r = [], y = S.length, v = g.bounds, x = m.collides, C = s.overlaps, O = 0;
                    O < y;
                    O++
                  ) {
                    var B = S[O],
                      j = B.parts.length,
                      T = j === 1 ? 0 : 1;
                    if (C(B.bounds, v))
                      for (var R = T; R < j; R++) {
                        var D = B.parts[R];
                        if (C(D.bounds, v)) {
                          var z = x(D, g);
                          if (z) {
                            r.push(z);
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
                      var v = c.angle(S, r),
                        x = c.magnitude(c.sub(S, r)),
                        C = (r.x + S.x) * 0.5,
                        O = (r.y + S.y) * 0.5,
                        B = d.rectangle(C, O, x, y, { angle: v }),
                        j = i.collides(B, g),
                        T = 0;
                      T < j.length;
                      T += 1
                    ) {
                      var R = j[T];
                      R.body = R.bodyB = R.bodyA;
                    }
                    return j;
                  }),
                  (i.region = function (g, S, r) {
                    for (var y = [], v = 0; v < g.length; v++) {
                      var x = g[v],
                        C = s.overlaps(x.bounds, S);
                      ((C && !r) || (!C && r)) && y.push(x);
                    }
                    return y;
                  }),
                  (i.point = function (g, S) {
                    for (var r = [], y = 0; y < g.length; y++) {
                      var v = g[y];
                      if (s.contains(v.bounds, S))
                        for (var x = v.parts.length === 1 ? 0 : 1; x < v.parts.length; x++) {
                          var C = v.parts[x];
                          if (s.contains(C.bounds, S) && f.contains(C.vertices, S)) {
                            r.push(v);
                            break;
                          }
                        }
                    }
                    return r;
                  }));
              })();
            },
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(4),
                m = h(0),
                s = h(6),
                d = h(1),
                f = h(5),
                g = h(2),
                S = h(14);
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
                    var R = {
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
                      D = m.extend(R, T);
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
                    (function R(D) {
                      ((T.frameRequestId = r(R)),
                        v(T, D),
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
                  (i.setPixelRatio = function (T, R) {
                    var D = T.options,
                      z = T.canvas;
                    (R === 'auto' && (R = O(z)),
                      (D.pixelRatio = R),
                      z.setAttribute('data-pixel-ratio', R),
                      (z.width = D.width * R),
                      (z.height = D.height * R),
                      (z.style.width = D.width + 'px'),
                      (z.style.height = D.height + 'px'));
                  }),
                  (i.setSize = function (T, R, D) {
                    ((T.options.width = R),
                      (T.options.height = D),
                      (T.bounds.max.x = T.bounds.min.x + R),
                      (T.bounds.max.y = T.bounds.min.y + D),
                      T.options.pixelRatio !== 1
                        ? i.setPixelRatio(T, T.options.pixelRatio)
                        : ((T.canvas.width = R), (T.canvas.height = D)));
                  }),
                  (i.lookAt = function (T, R, D, z) {
                    ((z = typeof z < 'u' ? z : !0),
                      (R = m.isArray(R) ? R : [R]),
                      (D = D || { x: 0, y: 0 }));
                    for (
                      var w = { min: { x: 1 / 0, y: 1 / 0 }, max: { x: -1 / 0, y: -1 / 0 } }, U = 0;
                      U < R.length;
                      U += 1
                    ) {
                      var L = R[U],
                        _ = L.bounds ? L.bounds.min : L.min || L.position || L,
                        $ = L.bounds ? L.bounds.max : L.max || L.position || L;
                      _ &&
                        $ &&
                        (_.x < w.min.x && (w.min.x = _.x),
                        $.x > w.max.x && (w.max.x = $.x),
                        _.y < w.min.y && (w.min.y = _.y),
                        $.y > w.max.y && (w.max.y = $.y));
                    }
                    var le = w.max.x - w.min.x + 2 * D.x,
                      ee = w.max.y - w.min.y + 2 * D.y,
                      G = T.canvas.height,
                      X = T.canvas.width,
                      I = X / G,
                      ne = le / ee,
                      re = 1,
                      N = 1;
                    (ne > I ? (N = ne / I) : (re = I / ne),
                      (T.options.hasBounds = !0),
                      (T.bounds.min.x = w.min.x),
                      (T.bounds.max.x = w.min.x + le * re),
                      (T.bounds.min.y = w.min.y),
                      (T.bounds.max.y = w.min.y + ee * N),
                      z &&
                        ((T.bounds.min.x += le * 0.5 - le * re * 0.5),
                        (T.bounds.max.x += le * 0.5 - le * re * 0.5),
                        (T.bounds.min.y += ee * 0.5 - ee * N * 0.5),
                        (T.bounds.max.y += ee * 0.5 - ee * N * 0.5)),
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
                    var R = T.bounds.max.x - T.bounds.min.x,
                      D = T.bounds.max.y - T.bounds.min.y,
                      z = R / T.options.width,
                      w = D / T.options.height;
                    (T.context.setTransform(
                      T.options.pixelRatio / z,
                      0,
                      0,
                      T.options.pixelRatio / w,
                      0,
                      0
                    ),
                      T.context.translate(-T.bounds.min.x, -T.bounds.min.y));
                  }),
                  (i.endViewTransform = function (T) {
                    T.context.setTransform(T.options.pixelRatio, 0, 0, T.options.pixelRatio, 0, 0);
                  }),
                  (i.world = function (T, R) {
                    var D = m.now(),
                      z = T.engine,
                      w = z.world,
                      U = T.canvas,
                      L = T.context,
                      _ = T.options,
                      $ = T.timing,
                      le = s.allBodies(w),
                      ee = s.allConstraints(w),
                      G = _.wireframes ? _.wireframeBackground : _.background,
                      X = [],
                      I = [],
                      ne,
                      re = { timestamp: z.timing.timestamp };
                    if (
                      (f.trigger(T, 'beforeRender', re),
                      T.currentBackground !== G && j(T, G),
                      (L.globalCompositeOperation = 'source-in'),
                      (L.fillStyle = 'transparent'),
                      L.fillRect(0, 0, U.width, U.height),
                      (L.globalCompositeOperation = 'source-over'),
                      _.hasBounds)
                    ) {
                      for (ne = 0; ne < le.length; ne++) {
                        var N = le[ne];
                        d.overlaps(N.bounds, T.bounds) && X.push(N);
                      }
                      for (ne = 0; ne < ee.length; ne++) {
                        var J = ee[ne],
                          te = J.bodyA,
                          ae = J.bodyB,
                          se = J.pointA,
                          ie = J.pointB;
                        (te && (se = g.add(te.position, J.pointA)),
                          ae && (ie = g.add(ae.position, J.pointB)),
                          !(!se || !ie) &&
                            (d.contains(T.bounds, se) || d.contains(T.bounds, ie)) &&
                            I.push(J));
                      }
                      (i.startViewTransform(T),
                        T.mouse &&
                          (S.setScale(T.mouse, {
                            x: (T.bounds.max.x - T.bounds.min.x) / T.options.width,
                            y: (T.bounds.max.y - T.bounds.min.y) / T.options.height,
                          }),
                          S.setOffset(T.mouse, T.bounds.min)));
                    } else
                      ((I = ee),
                        (X = le),
                        T.options.pixelRatio !== 1 &&
                          T.context.setTransform(
                            T.options.pixelRatio,
                            0,
                            0,
                            T.options.pixelRatio,
                            0,
                            0
                          ));
                    (!_.wireframes || (z.enableSleeping && _.showSleeping)
                      ? i.bodies(T, X, L)
                      : (_.showConvexHulls && i.bodyConvexHulls(T, X, L),
                        i.bodyWireframes(T, X, L)),
                      _.showBounds && i.bodyBounds(T, X, L),
                      (_.showAxes || _.showAngleIndicator) && i.bodyAxes(T, X, L),
                      _.showPositions && i.bodyPositions(T, X, L),
                      _.showVelocity && i.bodyVelocity(T, X, L),
                      _.showIds && i.bodyIds(T, X, L),
                      _.showSeparations && i.separations(T, z.pairs.list, L),
                      _.showCollisions && i.collisions(T, z.pairs.list, L),
                      _.showVertexNumbers && i.vertexNumbers(T, X, L),
                      _.showMousePosition && i.mousePosition(T, T.mouse, L),
                      i.constraints(I, L),
                      _.hasBounds && i.endViewTransform(T),
                      f.trigger(T, 'afterRender', re),
                      ($.lastElapsed = m.now() - D));
                  }),
                  (i.stats = function (T, R, D) {
                    for (
                      var z = T.engine,
                        w = z.world,
                        U = s.allBodies(w),
                        L = 0,
                        _ = 55,
                        $ = 44,
                        le = 0,
                        ee = 0,
                        G = 0;
                      G < U.length;
                      G += 1
                    )
                      L += U[G].parts.length;
                    var X = {
                      Part: L,
                      Body: U.length,
                      Cons: s.allConstraints(w).length,
                      Comp: s.allComposites(w).length,
                      Pair: z.pairs.list.length,
                    };
                    ((R.fillStyle = '#0e0f19'),
                      R.fillRect(le, ee, _ * 5.5, $),
                      (R.font = '12px Arial'),
                      (R.textBaseline = 'top'),
                      (R.textAlign = 'right'));
                    for (var I in X) {
                      var ne = X[I];
                      ((R.fillStyle = '#aaa'),
                        R.fillText(I, le + _, ee + 8),
                        (R.fillStyle = '#eee'),
                        R.fillText(ne, le + _, ee + 26),
                        (le += _));
                    }
                  }),
                  (i.performance = function (T, R) {
                    var D = T.engine,
                      z = T.timing,
                      w = z.deltaHistory,
                      U = z.elapsedHistory,
                      L = z.timestampElapsedHistory,
                      _ = z.engineDeltaHistory,
                      $ = z.engineUpdatesHistory,
                      le = z.engineElapsedHistory,
                      ee = D.timing.lastUpdatesPerFrame,
                      G = D.timing.lastDelta,
                      X = x(w),
                      I = x(U),
                      ne = x(_),
                      re = x($),
                      N = x(le),
                      J = x(L),
                      te = J / X || 0,
                      ae = Math.round(X / G),
                      se = 1e3 / X || 0,
                      ie = 4,
                      de = 12,
                      ye = 60,
                      Ue = 34,
                      tt = 10,
                      at = 69;
                    ((R.fillStyle = '#0e0f19'),
                      R.fillRect(0, 50, de * 5 + ye * 6 + 22, Ue),
                      i.status(
                        R,
                        tt,
                        at,
                        ye,
                        ie,
                        w.length,
                        Math.round(se) + ' fps',
                        se / i._goodFps,
                        function (Je) {
                          return w[Je] / X - 1;
                        }
                      ),
                      i.status(
                        R,
                        tt + de + ye,
                        at,
                        ye,
                        ie,
                        _.length,
                        G.toFixed(2) + ' dt',
                        i._goodDelta / G,
                        function (Je) {
                          return _[Je] / ne - 1;
                        }
                      ),
                      i.status(
                        R,
                        tt + (de + ye) * 2,
                        at,
                        ye,
                        ie,
                        $.length,
                        ee + ' upf',
                        Math.pow(m.clamp(re / ae || 1, 0, 1), 4),
                        function (Je) {
                          return $[Je] / re - 1;
                        }
                      ),
                      i.status(
                        R,
                        tt + (de + ye) * 3,
                        at,
                        ye,
                        ie,
                        le.length,
                        N.toFixed(2) + ' ut',
                        1 - (ee * N) / i._goodFps,
                        function (Je) {
                          return le[Je] / N - 1;
                        }
                      ),
                      i.status(
                        R,
                        tt + (de + ye) * 4,
                        at,
                        ye,
                        ie,
                        U.length,
                        I.toFixed(2) + ' rt',
                        1 - I / i._goodFps,
                        function (Je) {
                          return U[Je] / I - 1;
                        }
                      ),
                      i.status(
                        R,
                        tt + (de + ye) * 5,
                        at,
                        ye,
                        ie,
                        L.length,
                        te.toFixed(2) + ' x',
                        te * te * te,
                        function (Je) {
                          return (L[Je] / w[Je] / te || 0) - 1;
                        }
                      ));
                  }),
                  (i.status = function (T, R, D, z, w, U, L, _, $) {
                    ((T.strokeStyle = '#888'),
                      (T.fillStyle = '#444'),
                      (T.lineWidth = 1),
                      T.fillRect(R, D + 7, z, 1),
                      T.beginPath(),
                      T.moveTo(R, D + 7 - w * m.clamp(0.4 * $(0), -2, 2)));
                    for (var le = 0; le < z; le += 1)
                      T.lineTo(R + le, D + 7 - (le < U ? w * m.clamp(0.4 * $(le), -2, 2) : 0));
                    (T.stroke(),
                      (T.fillStyle = 'hsl(' + m.clamp(25 + 95 * _, 0, 120) + ',100%,60%)'),
                      T.fillRect(R, D - 7, 4, 4),
                      (T.font = '12px Arial'),
                      (T.textBaseline = 'middle'),
                      (T.textAlign = 'right'),
                      (T.fillStyle = '#eee'),
                      T.fillText(L, R + z, D - 5));
                  }),
                  (i.constraints = function (T, R) {
                    for (var D = R, z = 0; z < T.length; z++) {
                      var w = T[z];
                      if (!(!w.render.visible || !w.pointA || !w.pointB)) {
                        var U = w.bodyA,
                          L = w.bodyB,
                          _,
                          $;
                        if (
                          (U ? (_ = g.add(U.position, w.pointA)) : (_ = w.pointA),
                          w.render.type === 'pin')
                        )
                          (D.beginPath(), D.arc(_.x, _.y, 3, 0, 2 * Math.PI), D.closePath());
                        else {
                          if (
                            (L ? ($ = g.add(L.position, w.pointB)) : ($ = w.pointB),
                            D.beginPath(),
                            D.moveTo(_.x, _.y),
                            w.render.type === 'spring')
                          )
                            for (
                              var le = g.sub($, _),
                                ee = g.perp(g.normalise(le)),
                                G = Math.ceil(m.clamp(w.length / 5, 12, 20)),
                                X,
                                I = 1;
                              I < G;
                              I += 1
                            )
                              ((X = I % 2 === 0 ? 1 : -1),
                                D.lineTo(
                                  _.x + le.x * (I / G) + ee.x * X * 4,
                                  _.y + le.y * (I / G) + ee.y * X * 4
                                ));
                          D.lineTo($.x, $.y);
                        }
                        (w.render.lineWidth &&
                          ((D.lineWidth = w.render.lineWidth),
                          (D.strokeStyle = w.render.strokeStyle),
                          D.stroke()),
                          w.render.anchors &&
                            ((D.fillStyle = w.render.strokeStyle),
                            D.beginPath(),
                            D.arc(_.x, _.y, 3, 0, 2 * Math.PI),
                            D.arc($.x, $.y, 3, 0, 2 * Math.PI),
                            D.closePath(),
                            D.fill()));
                      }
                    }
                  }),
                  (i.bodies = function (T, R, D) {
                    var z = D;
                    T.engine;
                    var w = T.options,
                      U = w.showInternalEdges || !w.wireframes,
                      L,
                      _,
                      $,
                      le;
                    for ($ = 0; $ < R.length; $++)
                      if (((L = R[$]), !!L.render.visible)) {
                        for (le = L.parts.length > 1 ? 1 : 0; le < L.parts.length; le++)
                          if (((_ = L.parts[le]), !!_.render.visible)) {
                            if (
                              (w.showSleeping && L.isSleeping
                                ? (z.globalAlpha = 0.5 * _.render.opacity)
                                : _.render.opacity !== 1 && (z.globalAlpha = _.render.opacity),
                              _.render.sprite && _.render.sprite.texture && !w.wireframes)
                            ) {
                              var ee = _.render.sprite,
                                G = B(T, ee.texture);
                              (z.translate(_.position.x, _.position.y),
                                z.rotate(_.angle),
                                z.drawImage(
                                  G,
                                  G.width * -ee.xOffset * ee.xScale,
                                  G.height * -ee.yOffset * ee.yScale,
                                  G.width * ee.xScale,
                                  G.height * ee.yScale
                                ),
                                z.rotate(-_.angle),
                                z.translate(-_.position.x, -_.position.y));
                            } else {
                              if (_.circleRadius)
                                (z.beginPath(),
                                  z.arc(
                                    _.position.x,
                                    _.position.y,
                                    _.circleRadius,
                                    0,
                                    2 * Math.PI
                                  ));
                              else {
                                (z.beginPath(), z.moveTo(_.vertices[0].x, _.vertices[0].y));
                                for (var X = 1; X < _.vertices.length; X++)
                                  (!_.vertices[X - 1].isInternal || U
                                    ? z.lineTo(_.vertices[X].x, _.vertices[X].y)
                                    : z.moveTo(_.vertices[X].x, _.vertices[X].y),
                                    _.vertices[X].isInternal &&
                                      !U &&
                                      z.moveTo(
                                        _.vertices[(X + 1) % _.vertices.length].x,
                                        _.vertices[(X + 1) % _.vertices.length].y
                                      ));
                                (z.lineTo(_.vertices[0].x, _.vertices[0].y), z.closePath());
                              }
                              w.wireframes
                                ? ((z.lineWidth = 1),
                                  (z.strokeStyle = T.options.wireframeStrokeStyle),
                                  z.stroke())
                                : ((z.fillStyle = _.render.fillStyle),
                                  _.render.lineWidth &&
                                    ((z.lineWidth = _.render.lineWidth),
                                    (z.strokeStyle = _.render.strokeStyle),
                                    z.stroke()),
                                  z.fill());
                            }
                            z.globalAlpha = 1;
                          }
                      }
                  }),
                  (i.bodyWireframes = function (T, R, D) {
                    var z = D,
                      w = T.options.showInternalEdges,
                      U,
                      L,
                      _,
                      $,
                      le;
                    for (z.beginPath(), _ = 0; _ < R.length; _++)
                      if (((U = R[_]), !!U.render.visible))
                        for (le = U.parts.length > 1 ? 1 : 0; le < U.parts.length; le++) {
                          for (
                            L = U.parts[le], z.moveTo(L.vertices[0].x, L.vertices[0].y), $ = 1;
                            $ < L.vertices.length;
                            $++
                          )
                            (!L.vertices[$ - 1].isInternal || w
                              ? z.lineTo(L.vertices[$].x, L.vertices[$].y)
                              : z.moveTo(L.vertices[$].x, L.vertices[$].y),
                              L.vertices[$].isInternal &&
                                !w &&
                                z.moveTo(
                                  L.vertices[($ + 1) % L.vertices.length].x,
                                  L.vertices[($ + 1) % L.vertices.length].y
                                ));
                          z.lineTo(L.vertices[0].x, L.vertices[0].y);
                        }
                    ((z.lineWidth = 1),
                      (z.strokeStyle = T.options.wireframeStrokeStyle),
                      z.stroke());
                  }),
                  (i.bodyConvexHulls = function (T, R, D) {
                    var z = D,
                      w,
                      U,
                      L;
                    for (z.beginPath(), U = 0; U < R.length; U++)
                      if (((w = R[U]), !(!w.render.visible || w.parts.length === 1))) {
                        for (
                          z.moveTo(w.vertices[0].x, w.vertices[0].y), L = 1;
                          L < w.vertices.length;
                          L++
                        )
                          z.lineTo(w.vertices[L].x, w.vertices[L].y);
                        z.lineTo(w.vertices[0].x, w.vertices[0].y);
                      }
                    ((z.lineWidth = 1), (z.strokeStyle = 'rgba(255,255,255,0.2)'), z.stroke());
                  }),
                  (i.vertexNumbers = function (T, R, D) {
                    var z = D,
                      w,
                      U,
                      L;
                    for (w = 0; w < R.length; w++) {
                      var _ = R[w].parts;
                      for (L = _.length > 1 ? 1 : 0; L < _.length; L++) {
                        var $ = _[L];
                        for (U = 0; U < $.vertices.length; U++)
                          ((z.fillStyle = 'rgba(255,255,255,0.2)'),
                            z.fillText(
                              w + '_' + U,
                              $.position.x + ($.vertices[U].x - $.position.x) * 0.8,
                              $.position.y + ($.vertices[U].y - $.position.y) * 0.8
                            ));
                      }
                    }
                  }),
                  (i.mousePosition = function (T, R, D) {
                    var z = D;
                    ((z.fillStyle = 'rgba(255,255,255,0.8)'),
                      z.fillText(
                        R.position.x + '  ' + R.position.y,
                        R.position.x + 5,
                        R.position.y - 5
                      ));
                  }),
                  (i.bodyBounds = function (T, R, D) {
                    var z = D;
                    T.engine;
                    var w = T.options;
                    z.beginPath();
                    for (var U = 0; U < R.length; U++) {
                      var L = R[U];
                      if (L.render.visible)
                        for (var _ = R[U].parts, $ = _.length > 1 ? 1 : 0; $ < _.length; $++) {
                          var le = _[$];
                          z.rect(
                            le.bounds.min.x,
                            le.bounds.min.y,
                            le.bounds.max.x - le.bounds.min.x,
                            le.bounds.max.y - le.bounds.min.y
                          );
                        }
                    }
                    (w.wireframes
                      ? (z.strokeStyle = 'rgba(255,255,255,0.08)')
                      : (z.strokeStyle = 'rgba(0,0,0,0.1)'),
                      (z.lineWidth = 1),
                      z.stroke());
                  }),
                  (i.bodyAxes = function (T, R, D) {
                    var z = D;
                    T.engine;
                    var w = T.options,
                      U,
                      L,
                      _,
                      $;
                    for (z.beginPath(), L = 0; L < R.length; L++) {
                      var le = R[L],
                        ee = le.parts;
                      if (le.render.visible)
                        if (w.showAxes)
                          for (_ = ee.length > 1 ? 1 : 0; _ < ee.length; _++)
                            for (U = ee[_], $ = 0; $ < U.axes.length; $++) {
                              var G = U.axes[$];
                              (z.moveTo(U.position.x, U.position.y),
                                z.lineTo(U.position.x + G.x * 20, U.position.y + G.y * 20));
                            }
                        else
                          for (_ = ee.length > 1 ? 1 : 0; _ < ee.length; _++)
                            for (U = ee[_], $ = 0; $ < U.axes.length; $++)
                              (z.moveTo(U.position.x, U.position.y),
                                z.lineTo(
                                  (U.vertices[0].x + U.vertices[U.vertices.length - 1].x) / 2,
                                  (U.vertices[0].y + U.vertices[U.vertices.length - 1].y) / 2
                                ));
                    }
                    (w.wireframes
                      ? ((z.strokeStyle = 'indianred'), (z.lineWidth = 1))
                      : ((z.strokeStyle = 'rgba(255, 255, 255, 0.4)'),
                        (z.globalCompositeOperation = 'overlay'),
                        (z.lineWidth = 2)),
                      z.stroke(),
                      (z.globalCompositeOperation = 'source-over'));
                  }),
                  (i.bodyPositions = function (T, R, D) {
                    var z = D;
                    T.engine;
                    var w = T.options,
                      U,
                      L,
                      _,
                      $;
                    for (z.beginPath(), _ = 0; _ < R.length; _++)
                      if (((U = R[_]), !!U.render.visible))
                        for ($ = 0; $ < U.parts.length; $++)
                          ((L = U.parts[$]),
                            z.arc(L.position.x, L.position.y, 3, 0, 2 * Math.PI, !1),
                            z.closePath());
                    for (
                      w.wireframes
                        ? (z.fillStyle = 'indianred')
                        : (z.fillStyle = 'rgba(0,0,0,0.5)'),
                        z.fill(),
                        z.beginPath(),
                        _ = 0;
                      _ < R.length;
                      _++
                    )
                      ((U = R[_]),
                        U.render.visible &&
                          (z.arc(U.positionPrev.x, U.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                          z.closePath()));
                    ((z.fillStyle = 'rgba(255,165,0,0.8)'), z.fill());
                  }),
                  (i.bodyVelocity = function (T, R, D) {
                    var z = D;
                    z.beginPath();
                    for (var w = 0; w < R.length; w++) {
                      var U = R[w];
                      if (U.render.visible) {
                        var L = c.getVelocity(U);
                        (z.moveTo(U.position.x, U.position.y),
                          z.lineTo(U.position.x + L.x, U.position.y + L.y));
                      }
                    }
                    ((z.lineWidth = 3), (z.strokeStyle = 'cornflowerblue'), z.stroke());
                  }),
                  (i.bodyIds = function (T, R, D) {
                    var z = D,
                      w,
                      U;
                    for (w = 0; w < R.length; w++)
                      if (R[w].render.visible) {
                        var L = R[w].parts;
                        for (U = L.length > 1 ? 1 : 0; U < L.length; U++) {
                          var _ = L[U];
                          ((z.font = '12px Arial'),
                            (z.fillStyle = 'rgba(255,255,255,0.5)'),
                            z.fillText(_.id, _.position.x + 10, _.position.y - 10));
                        }
                      }
                  }),
                  (i.collisions = function (T, R, D) {
                    var z = D,
                      w = T.options,
                      U,
                      L,
                      _,
                      $;
                    for (z.beginPath(), _ = 0; _ < R.length; _++)
                      if (((U = R[_]), !!U.isActive))
                        for (L = U.collision, $ = 0; $ < U.contactCount; $++) {
                          var le = U.contacts[$],
                            ee = le.vertex;
                          z.rect(ee.x - 1.5, ee.y - 1.5, 3.5, 3.5);
                        }
                    for (
                      w.wireframes
                        ? (z.fillStyle = 'rgba(255,255,255,0.7)')
                        : (z.fillStyle = 'orange'),
                        z.fill(),
                        z.beginPath(),
                        _ = 0;
                      _ < R.length;
                      _++
                    )
                      if (((U = R[_]), !!U.isActive && ((L = U.collision), U.contactCount > 0))) {
                        var G = U.contacts[0].vertex.x,
                          X = U.contacts[0].vertex.y;
                        (U.contactCount === 2 &&
                          ((G = (U.contacts[0].vertex.x + U.contacts[1].vertex.x) / 2),
                          (X = (U.contacts[0].vertex.y + U.contacts[1].vertex.y) / 2)),
                          L.bodyB === L.supports[0].body || L.bodyA.isStatic === !0
                            ? z.moveTo(G - L.normal.x * 8, X - L.normal.y * 8)
                            : z.moveTo(G + L.normal.x * 8, X + L.normal.y * 8),
                          z.lineTo(G, X));
                      }
                    (w.wireframes
                      ? (z.strokeStyle = 'rgba(255,165,0,0.7)')
                      : (z.strokeStyle = 'orange'),
                      (z.lineWidth = 1),
                      z.stroke());
                  }),
                  (i.separations = function (T, R, D) {
                    var z = D,
                      w = T.options,
                      U,
                      L,
                      _,
                      $,
                      le;
                    for (z.beginPath(), le = 0; le < R.length; le++)
                      if (((U = R[le]), !!U.isActive)) {
                        ((L = U.collision), (_ = L.bodyA), ($ = L.bodyB));
                        var ee = 1;
                        (!$.isStatic && !_.isStatic && (ee = 0.5),
                          $.isStatic && (ee = 0),
                          z.moveTo($.position.x, $.position.y),
                          z.lineTo(
                            $.position.x - L.penetration.x * ee,
                            $.position.y - L.penetration.y * ee
                          ),
                          (ee = 1),
                          !$.isStatic && !_.isStatic && (ee = 0.5),
                          _.isStatic && (ee = 0),
                          z.moveTo(_.position.x, _.position.y),
                          z.lineTo(
                            _.position.x + L.penetration.x * ee,
                            _.position.y + L.penetration.y * ee
                          ));
                      }
                    (w.wireframes
                      ? (z.strokeStyle = 'rgba(255,165,0,0.5)')
                      : (z.strokeStyle = 'orange'),
                      z.stroke());
                  }),
                  (i.inspector = function (T, R) {
                    T.engine;
                    var D = T.selected,
                      z = T.render,
                      w = z.options,
                      U;
                    if (w.hasBounds) {
                      var L = z.bounds.max.x - z.bounds.min.x,
                        _ = z.bounds.max.y - z.bounds.min.y,
                        $ = L / z.options.width,
                        le = _ / z.options.height;
                      (R.scale(1 / $, 1 / le), R.translate(-z.bounds.min.x, -z.bounds.min.y));
                    }
                    for (var ee = 0; ee < D.length; ee++) {
                      var G = D[ee].data;
                      switch (
                        (R.translate(0.5, 0.5),
                        (R.lineWidth = 1),
                        (R.strokeStyle = 'rgba(255,165,0,0.9)'),
                        R.setLineDash([1, 2]),
                        G.type)
                      ) {
                        case 'body':
                          ((U = G.bounds),
                            R.beginPath(),
                            R.rect(
                              Math.floor(U.min.x - 3),
                              Math.floor(U.min.y - 3),
                              Math.floor(U.max.x - U.min.x + 6),
                              Math.floor(U.max.y - U.min.y + 6)
                            ),
                            R.closePath(),
                            R.stroke());
                          break;
                        case 'constraint':
                          var X = G.pointA;
                          (G.bodyA && (X = G.pointB),
                            R.beginPath(),
                            R.arc(X.x, X.y, 10, 0, 2 * Math.PI),
                            R.closePath(),
                            R.stroke());
                          break;
                      }
                      (R.setLineDash([]), R.translate(-0.5, -0.5));
                    }
                    (T.selectStart !== null &&
                      (R.translate(0.5, 0.5),
                      (R.lineWidth = 1),
                      (R.strokeStyle = 'rgba(255,165,0,0.6)'),
                      (R.fillStyle = 'rgba(255,165,0,0.1)'),
                      (U = T.selectBounds),
                      R.beginPath(),
                      R.rect(
                        Math.floor(U.min.x),
                        Math.floor(U.min.y),
                        Math.floor(U.max.x - U.min.x),
                        Math.floor(U.max.y - U.min.y)
                      ),
                      R.closePath(),
                      R.stroke(),
                      R.fill(),
                      R.translate(-0.5, -0.5)),
                      w.hasBounds && R.setTransform(1, 0, 0, 1, 0, 0));
                  }));
                var v = function (T, R) {
                    var D = T.engine,
                      z = T.timing,
                      w = z.historySize,
                      U = D.timing.timestamp;
                    ((z.delta = R - z.lastTime || i._goodDelta),
                      (z.lastTime = R),
                      (z.timestampElapsed = U - z.lastTimestamp || 0),
                      (z.lastTimestamp = U),
                      z.deltaHistory.unshift(z.delta),
                      (z.deltaHistory.length = Math.min(z.deltaHistory.length, w)),
                      z.engineDeltaHistory.unshift(D.timing.lastDelta),
                      (z.engineDeltaHistory.length = Math.min(z.engineDeltaHistory.length, w)),
                      z.timestampElapsedHistory.unshift(z.timestampElapsed),
                      (z.timestampElapsedHistory.length = Math.min(
                        z.timestampElapsedHistory.length,
                        w
                      )),
                      z.engineUpdatesHistory.unshift(D.timing.lastUpdatesPerFrame),
                      (z.engineUpdatesHistory.length = Math.min(z.engineUpdatesHistory.length, w)),
                      z.engineElapsedHistory.unshift(D.timing.lastElapsed),
                      (z.engineElapsedHistory.length = Math.min(z.engineElapsedHistory.length, w)),
                      z.elapsedHistory.unshift(z.lastElapsed),
                      (z.elapsedHistory.length = Math.min(z.elapsedHistory.length, w)));
                  },
                  x = function (T) {
                    for (var R = 0, D = 0; D < T.length; D += 1) R += T[D];
                    return R / T.length || 0;
                  },
                  C = function (T, R) {
                    var D = document.createElement('canvas');
                    return (
                      (D.width = T),
                      (D.height = R),
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
                    var R = T.getContext('2d'),
                      D = window.devicePixelRatio || 1,
                      z =
                        R.webkitBackingStorePixelRatio ||
                        R.mozBackingStorePixelRatio ||
                        R.msBackingStorePixelRatio ||
                        R.oBackingStorePixelRatio ||
                        R.backingStorePixelRatio ||
                        1;
                    return D / z;
                  },
                  B = function (T, R) {
                    var D = T.textures[R];
                    return D || ((D = T.textures[R] = new Image()), (D.src = R), D);
                  },
                  j = function (T, R) {
                    var D = R;
                    (/(jpg|gif|png)$/.test(R) && (D = 'url(' + R + ')'),
                      (T.canvas.style.background = D),
                      (T.canvas.style.backgroundSize = 'contain'),
                      (T.currentBackground = R));
                  };
              })();
            },
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(5),
                m = h(17),
                s = h(0);
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
                      v = 0,
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
                    var j = f.maxUpdates || Math.ceil(f.maxFrameTime / y),
                      T = { timestamp: g.timing.timestamp };
                    (c.trigger(f, 'beforeTick', T), c.trigger(f, 'tick', T));
                    for (var R = s.now(); y > 0 && f.timeBuffer >= y * i._timeBufferMargin; ) {
                      (c.trigger(f, 'beforeUpdate', T),
                        m.update(g, y),
                        c.trigger(f, 'afterUpdate', T),
                        (f.timeBuffer -= y),
                        (v += 1));
                      var D = s.now() - r,
                        z = s.now() - R,
                        w = D + (i._elapsedNextEstimate * z) / v;
                      if (v >= j || w > f.maxFrameTime) {
                        f.lastUpdatesDeferred = Math.round(
                          Math.max(0, f.timeBuffer / y - i._timeBufferMargin)
                        );
                        break;
                      }
                    }
                    ((g.timing.lastUpdatesPerFrame = v),
                      c.trigger(f, 'afterTick', T),
                      f.frameDeltaHistory.length >= 100 &&
                        (f.lastUpdatesDeferred && Math.round(f.frameDelta / y) > j
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
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(8),
                m = h(0),
                s = m.deprecated;
              (function () {
                ((i.collides = function (d, f) {
                  return c.collides(d, f);
                }),
                  s(i, 'collides', 'SAT.collides ➤ replaced by Collision.collides'));
              })();
            },
            function (M, E, h) {
              var i = {};
              ((M.exports = i), h(1));
              var c = h(0);
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
                    v,
                    x,
                    C,
                    O,
                    B = [],
                    j,
                    T,
                    R = 0,
                    D = 0,
                    z = 0;
                  s = s || 15;
                  var w = function (L, _, $) {
                      var le = $ % 2 === 1 && $ > 1;
                      if (!C || L != C.x || _ != C.y) {
                        C && le ? ((j = C.x), (T = C.y)) : ((j = 0), (T = 0));
                        var ee = { x: j + L, y: T + _ };
                        ((le || !C) && (C = ee), B.push(ee), (D = j + L), (z = T + _));
                      }
                    },
                    U = function (L) {
                      var _ = L.pathSegTypeAsLetter.toUpperCase();
                      if (_ !== 'Z') {
                        switch (_) {
                          case 'M':
                          case 'L':
                          case 'T':
                          case 'C':
                          case 'S':
                          case 'Q':
                            ((D = L.x), (z = L.y));
                            break;
                          case 'H':
                            D = L.x;
                            break;
                          case 'V':
                            z = L.y;
                            break;
                        }
                        w(D, z, L.pathSegType);
                      }
                    };
                  for (
                    i._svgPathToAbsolute(m), g = m.getTotalLength(), y = [], d = 0;
                    d < m.pathSegList.numberOfItems;
                    d += 1
                  )
                    y.push(m.pathSegList.getItem(d));
                  for (v = y.concat(); R < g; ) {
                    if (((O = m.getPathSegAtLength(R)), (r = y[O]), r != x)) {
                      for (; v.length && v[0] != r; ) U(v.shift());
                      x = r;
                    }
                    switch (r.pathSegTypeAsLetter.toUpperCase()) {
                      case 'C':
                      case 'T':
                      case 'S':
                      case 'Q':
                      case 'A':
                        ((S = m.getPointAtLength(R)), w(S.x, S.y, 0));
                        break;
                    }
                    R += s;
                  }
                  for (d = 0, f = v.length; d < f; ++d) U(v[d]);
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
                        v = 0,
                        x = 0,
                        C = y.numberOfItems,
                        O = 0;
                      O < C;
                      ++O
                    ) {
                      var B = y.getItem(O),
                        j = B.pathSegTypeAsLetter;
                      if (/[MLHVCSQTA]/.test(j)) ('x' in B && (v = B.x), 'y' in B && (x = B.y));
                      else
                        switch (
                          ('x1' in B && (f = v + B.x1),
                          'x2' in B && (S = v + B.x2),
                          'y1' in B && (g = x + B.y1),
                          'y2' in B && (r = x + B.y2),
                          'x' in B && (v += B.x),
                          'y' in B && (x += B.y),
                          j)
                        ) {
                          case 'm':
                            y.replaceItem(m.createSVGPathSegMovetoAbs(v, x), O);
                            break;
                          case 'l':
                            y.replaceItem(m.createSVGPathSegLinetoAbs(v, x), O);
                            break;
                          case 'h':
                            y.replaceItem(m.createSVGPathSegLinetoHorizontalAbs(v), O);
                            break;
                          case 'v':
                            y.replaceItem(m.createSVGPathSegLinetoVerticalAbs(x), O);
                            break;
                          case 'c':
                            y.replaceItem(m.createSVGPathSegCurvetoCubicAbs(v, x, f, g, S, r), O);
                            break;
                          case 's':
                            y.replaceItem(m.createSVGPathSegCurvetoCubicSmoothAbs(v, x, S, r), O);
                            break;
                          case 'q':
                            y.replaceItem(m.createSVGPathSegCurvetoQuadraticAbs(v, x, f, g), O);
                            break;
                          case 't':
                            y.replaceItem(m.createSVGPathSegCurvetoQuadraticSmoothAbs(v, x), O);
                            break;
                          case 'a':
                            y.replaceItem(
                              m.createSVGPathSegArcAbs(
                                v,
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
                            ((v = s), (x = d));
                            break;
                        }
                      (j == 'M' || j == 'm') && ((s = v), (d = x));
                    }
                  }));
              })();
            },
            function (M, E, h) {
              var i = {};
              M.exports = i;
              var c = h(6);
              (h(0),
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
var Cp = Ap();
const ze = B0(Cp),
  Nt = {
    dropCooldownMs: 500,
    maxScoreHistory: 10,
    mergeEffectDurationMs: 700,
    storageKeys: {
      bestScore: 'ochimono.bestScore',
      scoreHistory: 'ochimono.scoreHistory',
      isSoundOn: 'ochimono.isSoundOn',
      themeId: 'ochimono.themeId',
    },
  },
  Rp = { 1: 20, 2: 26, 3: 32, 4: 38, 5: 45, 6: 52, 7: 60, 8: 68, 9: 76, 10: 86 },
  zp = { 1: 0.5, 2: 0.5, 3: 0.45, 4: 0.45, 5: 0.4, 6: 0.4, 7: 0.35, 8: 0.35, 9: 0.3, 10: 0.25 },
  Dp = {
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
  Op = {
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
  fm = (o, b) => {
    const M = String(b).padStart(2, '0');
    return `images/${o}/level${M}.png`;
  },
  Bp = 256,
  Gh = {
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
  Up = (o) => (o * (o + 1)) / 2,
  Np = (o) => ({
    id: o,
    level: o,
    name: Dp[o],
    theme: Op[o],
    radius: Rp[o],
    restitution: zp[o],
    friction: 0.3,
    density: 0.001,
    score: Up(o),
    svgPath: fm(To, o),
    color: Gh[o].color,
    glowColor: Gh[o].glow,
  }),
  Pn = 10,
  _u = Object.fromEntries(Array.from({ length: Pn }, (o, b) => b + 1).map((o) => [o, Np(o)]));
Array.from({ length: Pn }, (o, b) => _u[b + 1]);
const wp = 3,
  Hp = 360,
  _p = (o) => Math.min(1, o / Hp),
  Ia = (o, b, M = To) => {
    const E = _u[o];
    return { ...E, radius: E.radius * _p(b), svgPath: fm(M, o) };
  },
  rn = {
    gravityY: 1.5,
    wallThickness: 20,
    gameOverLineOffset: 80,
    restingVelocityThreshold: 0.5,
    gameOverGracePeriodMs: 1e3,
  },
  cm = typeof window < 'u' && typeof window.localStorage < 'u',
  Lu = (o) => {
    if (!cm) return null;
    try {
      return window.localStorage.getItem(o);
    } catch {
      return null;
    }
  },
  ju = (o, b) => {
    if (cm)
      try {
        window.localStorage.setItem(o, b);
      } catch {}
  },
  Lp = () => {
    const o = Lu(Nt.storageKeys.bestScore);
    if (o === null) return 0;
    const b = Number(o);
    return Number.isFinite(b) ? b : 0;
  },
  jp = (o) => {
    ju(Nt.storageKeys.bestScore, String(o));
  },
  Yp = () => {
    const o = Lu(Nt.storageKeys.scoreHistory);
    if (o === null) return [];
    try {
      const b = JSON.parse(o);
      return Array.isArray(b) ? b.filter((M) => typeof M == 'number' && Number.isFinite(M)) : [];
    } catch {
      return [];
    }
  },
  Gp = (o) => {
    const b = [o, ...Yp()].slice(0, Nt.maxScoreHistory);
    return (ju(Nt.storageKeys.scoreHistory, JSON.stringify(b)), b);
  },
  Vp = () => {
    const o = Lu(Nt.storageKeys.isSoundOn);
    return o === null ? !0 : o === 'true';
  },
  qp = (o) => {
    ju(Nt.storageKeys.isSoundOn, String(o));
  },
  Xp = () => {
    const o = Lu(Nt.storageKeys.themeId);
    return om(o) ? o : To;
  },
  Qp = (o) => {
    ju(Nt.storageKeys.themeId, o);
  },
  Zp = () => {
    const [o, b] = q.useState(0),
      [M, E] = q.useState(0),
      [h, i] = q.useState(!1),
      c = q.useRef(0),
      m = q.useRef(0);
    q.useEffect(() => {
      const g = Lp();
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
          S && ((m.current = g), jp(g), E(g)),
          Gp(g),
          i(S),
          { isNewRecord: S, finalScore: g }
        );
      }, []);
    return { score: o, bestScore: M, isNewRecord: h, add: s, reset: d, finalize: f };
  },
  Kp = (o) => `/ochimono-game/${o}`.replace(/\/{2,}/g, '/'),
  Jp = { merge: 'sounds/punyu.mp3', special: 'sounds/punyu.mp3' },
  Fp = () => {
    const [o, b] = q.useState(!0),
      M = q.useRef({});
    (q.useEffect(() => {
      b(Vp());
    }, []),
      q.useEffect(() => {
        const i = {};
        for (const [c, m] of Object.entries(Jp)) {
          const s = new Audio(Kp(m));
          ((s.preload = 'auto'), (s.volume = 0.7), (i[c] = s));
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
          return (qp(c), c);
        });
      }, []),
      h = q.useCallback(
        (i) => {
          if (!o) return;
          const c = M.current[i];
          c && (c.pause(), (c.currentTime = 0), c.play().catch(() => {}));
        },
        [o]
      );
    return { isSoundOn: o, toggle: E, play: h };
  },
  Vh = (o, b, M, E) => {
    const h = ze.Bodies.circle(b, M, o.radius, {
      restitution: o.restitution,
      friction: o.friction,
      density: o.density,
      label: `item-${o.level}`,
    });
    return ((h.plugin.itemData = { level: o.level, consumed: !1, droppedAt: E }), h);
  },
  ei = (o) => o.plugin.itemData,
  $p = (o, b) => {
    const M = rn.wallThickness,
      E = { isStatic: !0, restitution: 0.2, friction: 0.5, label: 'wall' },
      h = ze.Bodies.rectangle(o / 2, b + M / 2, o + M * 2, M, E),
      i = ze.Bodies.rectangle(-M / 2, b / 2, M, b * 2, E),
      c = ze.Bodies.rectangle(o + M / 2, b / 2, M, b * 2, E);
    return { ground: h, leftWall: i, rightWall: c };
  },
  Wp = (o, b) => ({ x: (o.position.x + b.position.x) / 2, y: (o.position.y + b.position.y) / 2 }),
  kp = (o) => (o < 2 || o > Pn ? 0 : _u[o].score),
  Pp = () => _u[Pn].score,
  Ip = (o) => `/ochimono-game/${o}`.replace(/\/{2,}/g, '/'),
  so = (o, b) => {
    const M = (b.radius * 2) / Bp;
    o.render.sprite = { texture: Ip(b.svgPath), xScale: M, yScale: M, xOffset: 0.5, yOffset: 0.5 };
  },
  e1 = ({ fieldWidth: o, fieldHeight: b }) => {
    const M = q.useRef(null),
      E = q.useRef(null),
      h = q.useRef(null),
      i = q.useRef(null),
      [c, m] = q.useState('idle'),
      [s, d] = q.useState(null),
      [f, g] = q.useState(null),
      [S, r] = q.useState([]),
      y = q.useRef(!0),
      v = q.useRef(0),
      x = q.useRef('idle'),
      C = q.useRef(o),
      O = q.useRef(b),
      [B, j] = q.useState(() => Xp()),
      T = q.useRef(B);
    T.current = B;
    const R = Zp(),
      D = Fp(),
      z = () => {
        const X = Math.floor(Math.random() * wp) + 1;
        return Ia(X, C.current, T.current);
      };
    q.useEffect(() => {
      const X = M.current;
      if (!X) return;
      const I = C.current,
        ne = O.current,
        re = ze.Engine.create({ gravity: { x: 0, y: rn.gravityY } }),
        N = ze.Render.create({
          element: X,
          engine: re,
          options: {
            width: I,
            height: ne,
            wireframes: !1,
            background: 'transparent',
            pixelRatio: Math.min(1.5, window.devicePixelRatio || 1),
          },
        }),
        { ground: J, leftWall: te, rightWall: ae } = $p(I, ne);
      ([J, te, ae].forEach((de) => {
        de.render.visible = !1;
      }),
        ze.World.add(re.world, [J, te, ae]),
        ze.Render.run(N));
      const se = ze.Runner.create();
      (ze.Runner.run(se, re), (E.current = re), (h.current = N), (i.current = se));
      const ie = () => {
        document.hidden
          ? (ze.Runner.stop(se), ze.Render.stop(N))
          : (ze.Render.run(N), ze.Runner.run(se, re));
      };
      return (
        document.addEventListener('visibilitychange', ie),
        () => {
          (document.removeEventListener('visibilitychange', ie),
            ze.Runner.stop(se),
            ze.Render.stop(N),
            ze.World.clear(re.world, !1),
            ze.Engine.clear(re),
            N.canvas.parentNode && N.canvas.parentNode.removeChild(N.canvas),
            (N.textures = {}),
            (E.current = null),
            (h.current = null),
            (i.current = null));
        }
      );
    }, []);
    const w = q.useCallback(
      (X, I) => {
        const ne = E.current;
        if (!ne) return;
        const re = ei(X),
          N = ei(I);
        if (!re || !N || re.consumed || N.consumed || re.level !== N.level) return;
        ((re.consumed = !0), (N.consumed = !0));
        const J = re.level + 1,
          te = Wp(X, I);
        ze.World.remove(ne.world, [X, I]);
        let ae = 0,
          se = !1;
        if (J > Pn) ((ae = Pp()), (se = !0), D.play('special'));
        else {
          const de = Ia(J, C.current, T.current),
            ye = Vh(de, te.x, te.y, performance.now());
          (so(ye, de),
            ze.World.add(ne.world, ye),
            (ae = kp(J)),
            (se = J === Pn),
            D.play(se ? 'special' : 'merge'));
        }
        R.add(ae);
        const ie = {
          id: `${performance.now()}-${Math.random().toString(36).slice(2)}`,
          x: te.x,
          y: te.y,
          level: J,
          score: ae,
          isSpecial: se,
          createdAt: performance.now(),
        };
        (r((de) => [...de, ie]),
          window.setTimeout(() => {
            r((de) => de.filter((ye) => ye.id !== ie.id));
          }, Nt.mergeEffectDurationMs));
      },
      [R, D]
    );
    q.useEffect(() => {
      const X = E.current;
      if (!X) return;
      const I = (ne) => {
        for (const re of ne.pairs) w(re.bodyA, re.bodyB);
      };
      return (
        ze.Events.on(X, 'collisionStart', I),
        () => {
          ze.Events.off(X, 'collisionStart', I);
        }
      );
    }, [w]);
    const U = q.useRef(R.finalize);
    U.current = R.finalize;
    const L = q.useRef(D.play);
    ((L.current = D.play),
      q.useEffect(() => {
        const X = E.current;
        if (!X) return;
        const I = rn.gameOverLineOffset,
          ne = () => {
            if (x.current !== 'playing') return;
            const re = performance.now(),
              N = ze.Composite.allBodies(X.world);
            for (const J of N) {
              const te = ei(J);
              if (
                !(!te || te.consumed) &&
                !(re - te.droppedAt < rn.gameOverGracePeriodMs) &&
                !(Math.abs(J.velocity.y) > rn.restingVelocityThreshold) &&
                J.position.y - J.circleRadius < I
              ) {
                ((x.current = 'gameover'), m('gameover'));
                const ae = U.current();
                L.current(ae.isNewRecord ? 'highscore' : 'gameover');
                return;
              }
            }
          };
        return (
          ze.Events.on(X, 'afterUpdate', ne),
          () => {
            ze.Events.off(X, 'afterUpdate', ne);
          }
        );
      }, []),
      q.useEffect(() => {
        const X = E.current;
        if (X)
          for (const I of ze.Composite.allBodies(X.world)) {
            const ne = ei(I);
            if (!ne || ne.consumed) continue;
            const re = Ia(ne.level, C.current, B);
            so(I, re);
          }
        (d((I) => (I ? Ia(I.level, C.current, B) : null)),
          g((I) => (I ? Ia(I.level, C.current, B) : null)));
      }, [B]));
    const _ = q.useCallback((X) => {
        (j(X), Qp(X));
      }, []),
      $ = q.useCallback(
        (X) => {
          const I = E.current;
          if (!I || x.current !== 'playing' || !y.current || !s) return;
          const ne = performance.now();
          if (ne - v.current < Nt.dropCooldownMs) return;
          const re = Math.max(0, Math.min(1, X)),
            N = s.radius + rn.wallThickness / 2,
            J = N,
            te = C.current - N,
            ae = J + re * (te - J),
            se = s.radius + 4,
            ie = Vh(s, ae, se, ne);
          (so(ie, s),
            ze.World.add(I.world, ie),
            D.play('drop'),
            (y.current = !1),
            (v.current = ne),
            window.setTimeout(() => {
              x.current === 'playing' && (d(f), g(z()), (y.current = !0));
            }, Nt.dropCooldownMs));
        },
        [s, f, D]
      ),
      le = q.useCallback(() => {
        (R.reset(),
          r([]),
          d(z()),
          g(z()),
          (y.current = !0),
          (v.current = 0),
          (x.current = 'playing'),
          m('playing'));
      }, [R]),
      ee = q.useCallback(() => {
        const X = E.current;
        if (X) {
          const I = ze.Composite.allBodies(X.world);
          for (const ne of I) ei(ne) && ze.World.remove(X.world, ne);
        }
        le();
      }, [le]),
      G = rn.gameOverLineOffset;
    return {
      status: c,
      score: R.score,
      bestScore: R.bestScore,
      isNewRecord: R.isNewRecord,
      currentItem: s,
      nextItem: f,
      isSoundOn: D.isSoundOn,
      themeId: B,
      mergeEffects: S,
      canvasContainerRef: M,
      drop: $,
      start: le,
      restart: ee,
      toggleSound: D.toggle,
      setThemeId: _,
      fieldWidth: o,
      fieldHeight: b,
      gameOverLineY: G,
    };
  },
  t1 = ({ size: o }) => {
    const b = e1({ fieldWidth: o.width, fieldHeight: o.height });
    return ue.jsxs(ue.Fragment, {
      children: [
        ue.jsx(bp, {
          score: b.score,
          bestScore: b.bestScore,
          nextItem: b.nextItem,
          isSoundOn: b.isSoundOn,
          onToggleSound: b.toggleSound,
          themeId: b.themeId,
          onChangeTheme: b.setThemeId,
        }),
        ue.jsx('main', {
          className: kn.main,
          children: ue.jsxs('div', {
            className: kn.field_wrapper,
            style: { width: `${o.width}px`, height: `${o.height}px` },
            children: [
              ue.jsx(Yy, {
                canvasContainerRef: b.canvasContainerRef,
                fieldWidth: o.width,
                fieldHeight: o.height,
                gameOverLineY: b.gameOverLineY,
                currentItem: b.currentItem,
                mergeEffects: b.mergeEffects,
                canInteract: b.status === 'playing',
                onDrop: b.drop,
              }),
              b.status === 'idle' ? ue.jsx(ep, { onStart: b.start }) : null,
              b.status === 'gameover'
                ? ue.jsx(Fy, {
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
  l1 = () => {
    const o = q.useRef(null),
      [b, M] = q.useState(null);
    return (
      q.useLayoutEffect(() => {
        const E = o.current;
        if (!E) return;
        const h = E.getBoundingClientRect();
        M({ width: Math.floor(h.width), height: Math.floor(h.height) });
      }, []),
      b === null
        ? ue.jsxs('div', {
            className: kn.layout,
            children: [
              ue.jsx('div', { className: kn.top_bar_placeholder, 'aria-hidden': 'true' }),
              ue.jsx('main', { ref: o, className: kn.main }),
            ],
          })
        : ue.jsx('div', { className: kn.layout, children: ue.jsx(t1, { size: b }) })
    );
  },
  n1 = () => ue.jsx('div', { className: xy.index, children: ue.jsx(l1, {}) }),
  a1 = () => ue.jsx('div', { children: ue.jsx('h1', { children: 'Not Found' }) });
function i1() {
  return ue.jsxs(Yg, {
    children: [
      ue.jsx(fo, { path: '/', element: ue.jsx(n1, {}) }),
      ue.jsx(fo, { path: '*', element: ue.jsx(a1, {}) }),
    ],
  });
}
const dm = document.getElementById('root');
if (!dm) throw new Error('Failed to find #root element');
V0.createRoot(dm).render(ue.jsx(oy, { basename: '/ochimono-game', children: ue.jsx(i1, {}) }));
