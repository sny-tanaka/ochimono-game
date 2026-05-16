function Z0(s, E) {
  for (var S = 0; S < E.length; S++) {
    const h = E[S];
    if (typeof h != 'string' && !Array.isArray(h)) {
      for (const c in h)
        if (c !== 'default' && !(c in s)) {
          const l = Object.getOwnPropertyDescriptor(h, c);
          l && Object.defineProperty(s, c, l.get ? l : { enumerable: !0, get: () => h[c] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const E = document.createElement('link').relList;
  if (E && E.supports && E.supports('modulepreload')) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) h(c);
  new MutationObserver((c) => {
    for (const l of c)
      if (l.type === 'childList')
        for (const o of l.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && h(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function S(c) {
    const l = {};
    return (
      c.integrity && (l.integrity = c.integrity),
      c.referrerPolicy && (l.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === 'use-credentials'
        ? (l.credentials = 'include')
        : c.crossOrigin === 'anonymous'
          ? (l.credentials = 'omit')
          : (l.credentials = 'same-origin'),
      l
    );
  }
  function h(c) {
    if (c.ep) return;
    c.ep = !0;
    const l = S(c);
    fetch(c.href, l);
  }
})();
var oh =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function Gh(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, 'default') ? s.default : s;
}
var zo = { exports: {} },
  zi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ch;
function K0() {
  if (ch) return zi;
  ch = 1;
  var s = Symbol.for('react.transitional.element'),
    E = Symbol.for('react.fragment');
  function S(h, c, l) {
    var o = null;
    if ((l !== void 0 && (o = '' + l), c.key !== void 0 && (o = '' + c.key), 'key' in c)) {
      l = {};
      for (var d in c) d !== 'key' && (l[d] = c[d]);
    } else l = c;
    return ((c = l.ref), { $$typeof: s, type: h, key: o, ref: c !== void 0 ? c : null, props: l });
  }
  return ((zi.Fragment = E), (zi.jsx = S), (zi.jsxs = S), zi);
}
var fh;
function k0() {
  return (fh || ((fh = 1), (zo.exports = K0())), zo.exports);
}
var K = k0(),
  No = { exports: {} },
  Ni = {},
  Uo = { exports: {} },
  Bo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dh;
function J0() {
  return (
    dh ||
      ((dh = 1),
      (function (s) {
        function E(M, z) {
          var q = M.length;
          M.push(z);
          e: for (; 0 < q; ) {
            var F = (q - 1) >>> 1,
              le = M[F];
            if (0 < c(le, z)) ((M[F] = z), (M[q] = le), (q = F));
            else break e;
          }
        }
        function S(M) {
          return M.length === 0 ? null : M[0];
        }
        function h(M) {
          if (M.length === 0) return null;
          var z = M[0],
            q = M.pop();
          if (q !== z) {
            M[0] = q;
            e: for (var F = 0, le = M.length, N = le >>> 1; F < N; ) {
              var Q = 2 * (F + 1) - 1,
                ee = M[Q],
                ue = Q + 1,
                oe = M[ue];
              if (0 > c(ee, q))
                ue < le && 0 > c(oe, ee)
                  ? ((M[F] = oe), (M[ue] = q), (F = ue))
                  : ((M[F] = ee), (M[Q] = q), (F = Q));
              else if (ue < le && 0 > c(oe, q)) ((M[F] = oe), (M[ue] = q), (F = ue));
              else break e;
            }
          }
          return z;
        }
        function c(M, z) {
          var q = M.sortIndex - z.sortIndex;
          return q !== 0 ? q : M.id - z.id;
        }
        if (
          ((s.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var l = performance;
          s.unstable_now = function () {
            return l.now();
          };
        } else {
          var o = Date,
            d = o.now();
          s.unstable_now = function () {
            return o.now() - d;
          };
        }
        var f = [],
          g = [],
          m = 1,
          v = null,
          y = 3,
          r = !1,
          x = !1,
          p = !1,
          T = !1,
          _ = typeof setTimeout == 'function' ? setTimeout : null,
          U = typeof clearTimeout == 'function' ? clearTimeout : null,
          B = typeof setImmediate < 'u' ? setImmediate : null;
        function G(M) {
          for (var z = S(g); z !== null; ) {
            if (z.callback === null) h(g);
            else if (z.startTime <= M) (h(g), (z.sortIndex = z.expirationTime), E(f, z));
            else break;
            z = S(g);
          }
        }
        function C(M) {
          if (((p = !1), G(M), !x))
            if (S(f) !== null) ((x = !0), O || ((O = !0), V()));
            else {
              var z = S(g);
              z !== null && W(C, z.startTime - M);
            }
        }
        var O = !1,
          D = -1,
          A = 5,
          j = -1;
        function L() {
          return T ? !0 : !(s.unstable_now() - j < A);
        }
        function H() {
          if (((T = !1), O)) {
            var M = s.unstable_now();
            j = M;
            var z = !0;
            try {
              e: {
                ((x = !1), p && ((p = !1), U(D), (D = -1)), (r = !0));
                var q = y;
                try {
                  t: {
                    for (G(M), v = S(f); v !== null && !(v.expirationTime > M && L()); ) {
                      var F = v.callback;
                      if (typeof F == 'function') {
                        ((v.callback = null), (y = v.priorityLevel));
                        var le = F(v.expirationTime <= M);
                        if (((M = s.unstable_now()), typeof le == 'function')) {
                          ((v.callback = le), G(M), (z = !0));
                          break t;
                        }
                        (v === S(f) && h(f), G(M));
                      } else h(f);
                      v = S(f);
                    }
                    if (v !== null) z = !0;
                    else {
                      var N = S(g);
                      (N !== null && W(C, N.startTime - M), (z = !1));
                    }
                  }
                  break e;
                } finally {
                  ((v = null), (y = q), (r = !1));
                }
                z = void 0;
              }
            } finally {
              z ? V() : (O = !1);
            }
          }
        }
        var V;
        if (typeof B == 'function')
          V = function () {
            B(H);
          };
        else if (typeof MessageChannel < 'u') {
          var P = new MessageChannel(),
            ie = P.port2;
          ((P.port1.onmessage = H),
            (V = function () {
              ie.postMessage(null);
            }));
        } else
          V = function () {
            _(H, 0);
          };
        function W(M, z) {
          D = _(function () {
            M(s.unstable_now());
          }, z);
        }
        ((s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (s.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (A = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return y;
          }),
          (s.unstable_next = function (M) {
            switch (y) {
              case 1:
              case 2:
              case 3:
                var z = 3;
                break;
              default:
                z = y;
            }
            var q = y;
            y = z;
            try {
              return M();
            } finally {
              y = q;
            }
          }),
          (s.unstable_requestPaint = function () {
            T = !0;
          }),
          (s.unstable_runWithPriority = function (M, z) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var q = y;
            y = M;
            try {
              return z();
            } finally {
              y = q;
            }
          }),
          (s.unstable_scheduleCallback = function (M, z, q) {
            var F = s.unstable_now();
            switch (
              (typeof q == 'object' && q !== null
                ? ((q = q.delay), (q = typeof q == 'number' && 0 < q ? F + q : F))
                : (q = F),
              M)
            ) {
              case 1:
                var le = -1;
                break;
              case 2:
                le = 250;
                break;
              case 5:
                le = 1073741823;
                break;
              case 4:
                le = 1e4;
                break;
              default:
                le = 5e3;
            }
            return (
              (le = q + le),
              (M = {
                id: m++,
                callback: z,
                priorityLevel: M,
                startTime: q,
                expirationTime: le,
                sortIndex: -1,
              }),
              q > F
                ? ((M.sortIndex = q),
                  E(g, M),
                  S(f) === null && M === S(g) && (p ? (U(D), (D = -1)) : (p = !0), W(C, q - F)))
                : ((M.sortIndex = le), E(f, M), x || r || ((x = !0), O || ((O = !0), V()))),
              M
            );
          }),
          (s.unstable_shouldYield = L),
          (s.unstable_wrapCallback = function (M) {
            var z = y;
            return function () {
              var q = y;
              y = z;
              try {
                return M.apply(this, arguments);
              } finally {
                y = q;
              }
            };
          }));
      })(Bo)),
    Bo
  );
}
var mh;
function F0() {
  return (mh || ((mh = 1), (Uo.exports = J0())), Uo.exports);
}
var Lo = { exports: {} },
  Te = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hh;
function $0() {
  if (hh) return Te;
  hh = 1;
  var s = Symbol.for('react.transitional.element'),
    E = Symbol.for('react.portal'),
    S = Symbol.for('react.fragment'),
    h = Symbol.for('react.strict_mode'),
    c = Symbol.for('react.profiler'),
    l = Symbol.for('react.consumer'),
    o = Symbol.for('react.context'),
    d = Symbol.for('react.forward_ref'),
    f = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    m = Symbol.for('react.lazy'),
    v = Symbol.for('react.activity'),
    y = Symbol.iterator;
  function r(N) {
    return N === null || typeof N != 'object'
      ? null
      : ((N = (y && N[y]) || N['@@iterator']), typeof N == 'function' ? N : null);
  }
  var x = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    p = Object.assign,
    T = {};
  function _(N, Q, ee) {
    ((this.props = N), (this.context = Q), (this.refs = T), (this.updater = ee || x));
  }
  ((_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (N, Q) {
      if (typeof N != 'object' && typeof N != 'function' && N != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, N, Q, 'setState');
    }),
    (_.prototype.forceUpdate = function (N) {
      this.updater.enqueueForceUpdate(this, N, 'forceUpdate');
    }));
  function U() {}
  U.prototype = _.prototype;
  function B(N, Q, ee) {
    ((this.props = N), (this.context = Q), (this.refs = T), (this.updater = ee || x));
  }
  var G = (B.prototype = new U());
  ((G.constructor = B), p(G, _.prototype), (G.isPureReactComponent = !0));
  var C = Array.isArray;
  function O() {}
  var D = { H: null, A: null, T: null, S: null },
    A = Object.prototype.hasOwnProperty;
  function j(N, Q, ee) {
    var ue = ee.ref;
    return { $$typeof: s, type: N, key: Q, ref: ue !== void 0 ? ue : null, props: ee };
  }
  function L(N, Q) {
    return j(N.type, Q, N.props);
  }
  function H(N) {
    return typeof N == 'object' && N !== null && N.$$typeof === s;
  }
  function V(N) {
    var Q = { '=': '=0', ':': '=2' };
    return (
      '$' +
      N.replace(/[=:]/g, function (ee) {
        return Q[ee];
      })
    );
  }
  var P = /\/+/g;
  function ie(N, Q) {
    return typeof N == 'object' && N !== null && N.key != null ? V('' + N.key) : Q.toString(36);
  }
  function W(N) {
    switch (N.status) {
      case 'fulfilled':
        return N.value;
      case 'rejected':
        throw N.reason;
      default:
        switch (
          (typeof N.status == 'string'
            ? N.then(O, O)
            : ((N.status = 'pending'),
              N.then(
                function (Q) {
                  N.status === 'pending' && ((N.status = 'fulfilled'), (N.value = Q));
                },
                function (Q) {
                  N.status === 'pending' && ((N.status = 'rejected'), (N.reason = Q));
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
  function M(N, Q, ee, ue, oe) {
    var se = typeof N;
    (se === 'undefined' || se === 'boolean') && (N = null);
    var ge = !1;
    if (N === null) ge = !0;
    else
      switch (se) {
        case 'bigint':
        case 'string':
        case 'number':
          ge = !0;
          break;
        case 'object':
          switch (N.$$typeof) {
            case s:
            case E:
              ge = !0;
              break;
            case m:
              return ((ge = N._init), M(ge(N._payload), Q, ee, ue, oe));
          }
      }
    if (ge)
      return (
        (oe = oe(N)),
        (ge = ue === '' ? '.' + ie(N, 0) : ue),
        C(oe)
          ? ((ee = ''),
            ge != null && (ee = ge.replace(P, '$&/') + '/'),
            M(oe, Q, ee, '', function (Ze) {
              return Ze;
            }))
          : oe != null &&
            (H(oe) &&
              (oe = L(
                oe,
                ee +
                  (oe.key == null || (N && N.key === oe.key)
                    ? ''
                    : ('' + oe.key).replace(P, '$&/') + '/') +
                  ge
              )),
            Q.push(oe)),
        1
      );
    ge = 0;
    var Se = ue === '' ? '.' : ue + ':';
    if (C(N))
      for (var Ue = 0; Ue < N.length; Ue++)
        ((ue = N[Ue]), (se = Se + ie(ue, Ue)), (ge += M(ue, Q, ee, se, oe)));
    else if (((Ue = r(N)), typeof Ue == 'function'))
      for (N = Ue.call(N), Ue = 0; !(ue = N.next()).done; )
        ((ue = ue.value), (se = Se + ie(ue, Ue++)), (ge += M(ue, Q, ee, se, oe)));
    else if (se === 'object') {
      if (typeof N.then == 'function') return M(W(N), Q, ee, ue, oe);
      throw (
        (Q = String(N)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (Q === '[object Object]' ? 'object with keys {' + Object.keys(N).join(', ') + '}' : Q) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return ge;
  }
  function z(N, Q, ee) {
    if (N == null) return N;
    var ue = [],
      oe = 0;
    return (
      M(N, ue, '', '', function (se) {
        return Q.call(ee, se, oe++);
      }),
      ue
    );
  }
  function q(N) {
    if (N._status === -1) {
      var Q = N._result;
      ((Q = Q()),
        Q.then(
          function (ee) {
            (N._status === 0 || N._status === -1) && ((N._status = 1), (N._result = ee));
          },
          function (ee) {
            (N._status === 0 || N._status === -1) && ((N._status = 2), (N._result = ee));
          }
        ),
        N._status === -1 && ((N._status = 0), (N._result = Q)));
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var F =
      typeof reportError == 'function'
        ? reportError
        : function (N) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var Q = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof N == 'object' && N !== null && typeof N.message == 'string'
                    ? String(N.message)
                    : String(N),
                error: N,
              });
              if (!window.dispatchEvent(Q)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', N);
              return;
            }
            console.error(N);
          },
    le = {
      map: z,
      forEach: function (N, Q, ee) {
        z(
          N,
          function () {
            Q.apply(this, arguments);
          },
          ee
        );
      },
      count: function (N) {
        var Q = 0;
        return (
          z(N, function () {
            Q++;
          }),
          Q
        );
      },
      toArray: function (N) {
        return (
          z(N, function (Q) {
            return Q;
          }) || []
        );
      },
      only: function (N) {
        if (!H(N))
          throw Error('React.Children.only expected to receive a single React element child.');
        return N;
      },
    };
  return (
    (Te.Activity = v),
    (Te.Children = le),
    (Te.Component = _),
    (Te.Fragment = S),
    (Te.Profiler = c),
    (Te.PureComponent = B),
    (Te.StrictMode = h),
    (Te.Suspense = f),
    (Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D),
    (Te.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (N) {
        return D.H.useMemoCache(N);
      },
    }),
    (Te.cache = function (N) {
      return function () {
        return N.apply(null, arguments);
      };
    }),
    (Te.cacheSignal = function () {
      return null;
    }),
    (Te.cloneElement = function (N, Q, ee) {
      if (N == null) throw Error('The argument must be a React element, but you passed ' + N + '.');
      var ue = p({}, N.props),
        oe = N.key;
      if (Q != null)
        for (se in (Q.key !== void 0 && (oe = '' + Q.key), Q))
          !A.call(Q, se) ||
            se === 'key' ||
            se === '__self' ||
            se === '__source' ||
            (se === 'ref' && Q.ref === void 0) ||
            (ue[se] = Q[se]);
      var se = arguments.length - 2;
      if (se === 1) ue.children = ee;
      else if (1 < se) {
        for (var ge = Array(se), Se = 0; Se < se; Se++) ge[Se] = arguments[Se + 2];
        ue.children = ge;
      }
      return j(N.type, oe, ue);
    }),
    (Te.createContext = function (N) {
      return (
        (N = {
          $$typeof: o,
          _currentValue: N,
          _currentValue2: N,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (N.Provider = N),
        (N.Consumer = { $$typeof: l, _context: N }),
        N
      );
    }),
    (Te.createElement = function (N, Q, ee) {
      var ue,
        oe = {},
        se = null;
      if (Q != null)
        for (ue in (Q.key !== void 0 && (se = '' + Q.key), Q))
          A.call(Q, ue) && ue !== 'key' && ue !== '__self' && ue !== '__source' && (oe[ue] = Q[ue]);
      var ge = arguments.length - 2;
      if (ge === 1) oe.children = ee;
      else if (1 < ge) {
        for (var Se = Array(ge), Ue = 0; Ue < ge; Ue++) Se[Ue] = arguments[Ue + 2];
        oe.children = Se;
      }
      if (N && N.defaultProps)
        for (ue in ((ge = N.defaultProps), ge)) oe[ue] === void 0 && (oe[ue] = ge[ue]);
      return j(N, se, oe);
    }),
    (Te.createRef = function () {
      return { current: null };
    }),
    (Te.forwardRef = function (N) {
      return { $$typeof: d, render: N };
    }),
    (Te.isValidElement = H),
    (Te.lazy = function (N) {
      return { $$typeof: m, _payload: { _status: -1, _result: N }, _init: q };
    }),
    (Te.memo = function (N, Q) {
      return { $$typeof: g, type: N, compare: Q === void 0 ? null : Q };
    }),
    (Te.startTransition = function (N) {
      var Q = D.T,
        ee = {};
      D.T = ee;
      try {
        var ue = N(),
          oe = D.S;
        (oe !== null && oe(ee, ue),
          typeof ue == 'object' && ue !== null && typeof ue.then == 'function' && ue.then(O, F));
      } catch (se) {
        F(se);
      } finally {
        (Q !== null && ee.types !== null && (Q.types = ee.types), (D.T = Q));
      }
    }),
    (Te.unstable_useCacheRefresh = function () {
      return D.H.useCacheRefresh();
    }),
    (Te.use = function (N) {
      return D.H.use(N);
    }),
    (Te.useActionState = function (N, Q, ee) {
      return D.H.useActionState(N, Q, ee);
    }),
    (Te.useCallback = function (N, Q) {
      return D.H.useCallback(N, Q);
    }),
    (Te.useContext = function (N) {
      return D.H.useContext(N);
    }),
    (Te.useDebugValue = function () {}),
    (Te.useDeferredValue = function (N, Q) {
      return D.H.useDeferredValue(N, Q);
    }),
    (Te.useEffect = function (N, Q) {
      return D.H.useEffect(N, Q);
    }),
    (Te.useEffectEvent = function (N) {
      return D.H.useEffectEvent(N);
    }),
    (Te.useId = function () {
      return D.H.useId();
    }),
    (Te.useImperativeHandle = function (N, Q, ee) {
      return D.H.useImperativeHandle(N, Q, ee);
    }),
    (Te.useInsertionEffect = function (N, Q) {
      return D.H.useInsertionEffect(N, Q);
    }),
    (Te.useLayoutEffect = function (N, Q) {
      return D.H.useLayoutEffect(N, Q);
    }),
    (Te.useMemo = function (N, Q) {
      return D.H.useMemo(N, Q);
    }),
    (Te.useOptimistic = function (N, Q) {
      return D.H.useOptimistic(N, Q);
    }),
    (Te.useReducer = function (N, Q, ee) {
      return D.H.useReducer(N, Q, ee);
    }),
    (Te.useRef = function (N) {
      return D.H.useRef(N);
    }),
    (Te.useState = function (N) {
      return D.H.useState(N);
    }),
    (Te.useSyncExternalStore = function (N, Q, ee) {
      return D.H.useSyncExternalStore(N, Q, ee);
    }),
    (Te.useTransition = function () {
      return D.H.useTransition();
    }),
    (Te.version = '19.2.5'),
    Te
  );
}
var vh;
function uc() {
  return (vh || ((vh = 1), (Lo.exports = $0())), Lo.exports);
}
var Ho = { exports: {} },
  Dt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gh;
function W0() {
  if (gh) return Dt;
  gh = 1;
  var s = uc();
  function E(f) {
    var g = 'https://react.dev/errors/' + f;
    if (1 < arguments.length) {
      g += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++) g += '&args[]=' + encodeURIComponent(arguments[m]);
    }
    return (
      'Minified React error #' +
      f +
      '; visit ' +
      g +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function S() {}
  var h = {
      d: {
        f: S,
        r: function () {
          throw Error(E(522));
        },
        D: S,
        C: S,
        L: S,
        m: S,
        X: S,
        S,
        M: S,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for('react.portal');
  function l(f, g, m) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: v == null ? null : '' + v,
      children: f,
      containerInfo: g,
      implementation: m,
    };
  }
  var o = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(f, g) {
    if (f === 'font') return '';
    if (typeof g == 'string') return g === 'use-credentials' ? g : '';
  }
  return (
    (Dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
    (Dt.createPortal = function (f, g) {
      var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)) throw Error(E(299));
      return l(f, g, null, m);
    }),
    (Dt.flushSync = function (f) {
      var g = o.T,
        m = h.p;
      try {
        if (((o.T = null), (h.p = 2), f)) return f();
      } finally {
        ((o.T = g), (h.p = m), h.d.f());
      }
    }),
    (Dt.preconnect = function (f, g) {
      typeof f == 'string' &&
        (g
          ? ((g = g.crossOrigin),
            (g = typeof g == 'string' ? (g === 'use-credentials' ? g : '') : void 0))
          : (g = null),
        h.d.C(f, g));
    }),
    (Dt.prefetchDNS = function (f) {
      typeof f == 'string' && h.d.D(f);
    }),
    (Dt.preinit = function (f, g) {
      if (typeof f == 'string' && g && typeof g.as == 'string') {
        var m = g.as,
          v = d(m, g.crossOrigin),
          y = typeof g.integrity == 'string' ? g.integrity : void 0,
          r = typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0;
        m === 'style'
          ? h.d.S(f, typeof g.precedence == 'string' ? g.precedence : void 0, {
              crossOrigin: v,
              integrity: y,
              fetchPriority: r,
            })
          : m === 'script' &&
            h.d.X(f, {
              crossOrigin: v,
              integrity: y,
              fetchPriority: r,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
      }
    }),
    (Dt.preinitModule = function (f, g) {
      if (typeof f == 'string')
        if (typeof g == 'object' && g !== null) {
          if (g.as == null || g.as === 'script') {
            var m = d(g.as, g.crossOrigin);
            h.d.M(f, {
              crossOrigin: m,
              integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
          }
        } else g == null && h.d.M(f);
    }),
    (Dt.preload = function (f, g) {
      if (typeof f == 'string' && typeof g == 'object' && g !== null && typeof g.as == 'string') {
        var m = g.as,
          v = d(m, g.crossOrigin);
        h.d.L(f, m, {
          crossOrigin: v,
          integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
          type: typeof g.type == 'string' ? g.type : void 0,
          fetchPriority: typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0,
          referrerPolicy: typeof g.referrerPolicy == 'string' ? g.referrerPolicy : void 0,
          imageSrcSet: typeof g.imageSrcSet == 'string' ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == 'string' ? g.imageSizes : void 0,
          media: typeof g.media == 'string' ? g.media : void 0,
        });
      }
    }),
    (Dt.preloadModule = function (f, g) {
      if (typeof f == 'string')
        if (g) {
          var m = d(g.as, g.crossOrigin);
          h.d.m(f, {
            as: typeof g.as == 'string' && g.as !== 'script' ? g.as : void 0,
            crossOrigin: m,
            integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          });
        } else h.d.m(f);
    }),
    (Dt.requestFormReset = function (f) {
      h.d.r(f);
    }),
    (Dt.unstable_batchedUpdates = function (f, g) {
      return f(g);
    }),
    (Dt.useFormState = function (f, g, m) {
      return o.H.useFormState(f, g, m);
    }),
    (Dt.useFormStatus = function () {
      return o.H.useHostTransitionStatus();
    }),
    (Dt.version = '19.2.5'),
    Dt
  );
}
var yh;
function I0() {
  if (yh) return Ho.exports;
  yh = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (E) {
        console.error(E);
      }
  }
  return (s(), (Ho.exports = W0()), Ho.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ph;
function P0() {
  if (ph) return Ni;
  ph = 1;
  var s = F0(),
    E = uc(),
    S = I0();
  function h(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function c(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function l(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function o(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function d(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function f(e) {
    if (l(e) !== e) throw Error(h(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = l(e)), t === null)) throw Error(h(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var u = i.alternate;
      if (u === null) {
        if (((a = i.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (i.child === u.child) {
        for (u = i.child; u; ) {
          if (u === n) return (f(i), e);
          if (u === a) return (f(i), t);
          u = u.sibling;
        }
        throw Error(h(188));
      }
      if (n.return !== a.return) ((n = i), (a = u));
      else {
        for (var b = !1, R = i.child; R; ) {
          if (R === n) {
            ((b = !0), (n = i), (a = u));
            break;
          }
          if (R === a) {
            ((b = !0), (a = i), (n = u));
            break;
          }
          R = R.sibling;
        }
        if (!b) {
          for (R = u.child; R; ) {
            if (R === n) {
              ((b = !0), (n = u), (a = i));
              break;
            }
            if (R === a) {
              ((b = !0), (a = u), (n = i));
              break;
            }
            R = R.sibling;
          }
          if (!b) throw Error(h(189));
        }
      }
      if (n.alternate !== a) throw Error(h(190));
    }
    if (n.tag !== 3) throw Error(h(188));
    return n.stateNode.current === n ? e : t;
  }
  function m(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = m(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign,
    y = Symbol.for('react.element'),
    r = Symbol.for('react.transitional.element'),
    x = Symbol.for('react.portal'),
    p = Symbol.for('react.fragment'),
    T = Symbol.for('react.strict_mode'),
    _ = Symbol.for('react.profiler'),
    U = Symbol.for('react.consumer'),
    B = Symbol.for('react.context'),
    G = Symbol.for('react.forward_ref'),
    C = Symbol.for('react.suspense'),
    O = Symbol.for('react.suspense_list'),
    D = Symbol.for('react.memo'),
    A = Symbol.for('react.lazy'),
    j = Symbol.for('react.activity'),
    L = Symbol.for('react.memo_cache_sentinel'),
    H = Symbol.iterator;
  function V(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (H && e[H]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var P = Symbol.for('react.client.reference');
  function ie(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === P ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case p:
        return 'Fragment';
      case _:
        return 'Profiler';
      case T:
        return 'StrictMode';
      case C:
        return 'Suspense';
      case O:
        return 'SuspenseList';
      case j:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case x:
          return 'Portal';
        case B:
          return e.displayName || 'Context';
        case U:
          return (e._context.displayName || 'Context') + '.Consumer';
        case G:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case D:
          return ((t = e.displayName || null), t !== null ? t : ie(e.type) || 'Memo');
        case A:
          ((t = e._payload), (e = e._init));
          try {
            return ie(e(t));
          } catch {}
      }
    return null;
  }
  var W = Array.isArray,
    M = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    z = S.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = { pending: !1, data: null, method: null, action: null },
    F = [],
    le = -1;
  function N(e) {
    return { current: e };
  }
  function Q(e) {
    0 > le || ((e.current = F[le]), (F[le] = null), le--);
  }
  function ee(e, t) {
    (le++, (F[le] = e.current), (e.current = t));
  }
  var ue = N(null),
    oe = N(null),
    se = N(null),
    ge = N(null);
  function Se(e, t) {
    switch ((ee(se, t), ee(oe, e), ee(ue, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? zm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = zm(t)), (e = Nm(t, e)));
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
    (Q(ue), ee(ue, e));
  }
  function Ue() {
    (Q(ue), Q(oe), Q(se));
  }
  function Ze(e) {
    e.memoizedState !== null && ee(ge, e);
    var t = ue.current,
      n = Nm(t, e.type);
    t !== n && (ee(oe, e), ee(ue, n));
  }
  function Ke(e) {
    (oe.current === e && (Q(ue), Q(oe)), ge.current === e && (Q(ge), (Ai._currentValue = q)));
  }
  var Ve, bt;
  function We(e) {
    if (Ve === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((Ve = (t && t[1]) || ''),
          (bt =
            -1 <
            n.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < n.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return (
      `
` +
      Ve +
      e +
      bt
    );
  }
  var fe = !1;
  function zt(e, t) {
    if (!e || fe) return '';
    fe = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var ae = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(ae.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(ae, []);
                } catch (I) {
                  var $ = I;
                }
                Reflect.construct(e, [], ae);
              } else {
                try {
                  ae.call();
                } catch (I) {
                  $ = I;
                }
                e.call(ae.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (I) {
                $ = I;
              }
              (ae = e()) && typeof ae.catch == 'function' && ae.catch(function () {});
            }
          } catch (I) {
            if (I && $ && typeof I.stack == 'string') return [I.stack, $.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var i = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name');
      i &&
        i.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var u = a.DetermineComponentFrameRoot(),
        b = u[0],
        R = u[1];
      if (b && R) {
        var Y = b.split(`
`),
          J = R.split(`
`);
        for (i = a = 0; a < Y.length && !Y[a].includes('DetermineComponentFrameRoot'); ) a++;
        for (; i < J.length && !J[i].includes('DetermineComponentFrameRoot'); ) i++;
        if (a === Y.length || i === J.length)
          for (a = Y.length - 1, i = J.length - 1; 1 <= a && 0 <= i && Y[a] !== J[i]; ) i--;
        for (; 1 <= a && 0 <= i; a--, i--)
          if (Y[a] !== J[i]) {
            if (a !== 1 || i !== 1)
              do
                if ((a--, i--, 0 > i || Y[a] !== J[i])) {
                  var te =
                    `
` + Y[a].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      te.includes('<anonymous>') &&
                      (te = te.replace('<anonymous>', e.displayName)),
                    te
                  );
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      ((fe = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : '') ? We(n) : '';
  }
  function he(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return We(e.type);
      case 16:
        return We('Lazy');
      case 13:
        return e.child !== t && t !== null ? We('Suspense Fallback') : We('Suspense');
      case 19:
        return We('SuspenseList');
      case 0:
      case 15:
        return zt(e.type, !1);
      case 11:
        return zt(e.type.render, !1);
      case 1:
        return zt(e.type, !0);
      case 31:
        return We('Activity');
      default:
        return '';
    }
  }
  function Be(e) {
    try {
      var t = '',
        n = null;
      do ((t += he(e, n)), (n = e), (e = e.return));
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
  var gt = Object.prototype.hasOwnProperty,
    Sn = s.unstable_scheduleCallback,
    tn = s.unstable_cancelCallback,
    aa = s.unstable_shouldYield,
    An = s.unstable_requestPaint,
    yt = s.unstable_now,
    la = s.unstable_getCurrentPriorityLevel,
    Tt = s.unstable_ImmediatePriority,
    Pa = s.unstable_UserBlockingPriority,
    Kt = s.unstable_NormalPriority,
    Ot = s.unstable_LowPriority,
    ke = s.unstable_IdlePriority,
    br = s.log,
    Na = s.unstable_setDisableYieldValue,
    ia = null,
    Nt = null;
  function Ct(e) {
    if ((typeof br == 'function' && Na(e), Nt && typeof Nt.setStrictMode == 'function'))
      try {
        Nt.setStrictMode(ia, e);
      } catch {}
  }
  var pt = Math.clz32 ? Math.clz32 : Ji,
    Ki = Math.log,
    ki = Math.LN2;
  function Ji(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ki(e) / ki) | 0)) | 0);
  }
  var el = 256,
    tl = 262144,
    nl = 4194304;
  function On(e) {
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
  function al(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0,
      u = e.suspendedLanes,
      b = e.pingedLanes;
    e = e.warmLanes;
    var R = a & 134217727;
    return (
      R !== 0
        ? ((a = R & ~u),
          a !== 0
            ? (i = On(a))
            : ((b &= R), b !== 0 ? (i = On(b)) : n || ((n = R & ~e), n !== 0 && (i = On(n)))))
        : ((R = a & ~u),
          R !== 0
            ? (i = On(R))
            : b !== 0
              ? (i = On(b))
              : n || ((n = a & ~e), n !== 0 && (i = On(n)))),
      i === 0
        ? 0
        : t !== 0 &&
            t !== i &&
            (t & u) === 0 &&
            ((u = i & -i), (n = t & -t), u >= n || (u === 32 && (n & 4194048) !== 0))
          ? t
          : i
    );
  }
  function nn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Er(e, t) {
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
  function ll() {
    var e = nl;
    return ((nl <<= 1), (nl & 62914560) === 0 && (nl = 4194304), e);
  }
  function Xl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ua(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Tr(e, t, n, a, i, u) {
    var b = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var R = e.entanglements,
      Y = e.expirationTimes,
      J = e.hiddenUpdates;
    for (n = b & ~n; 0 < n; ) {
      var te = 31 - pt(n),
        ae = 1 << te;
      ((R[te] = 0), (Y[te] = -1));
      var $ = J[te];
      if ($ !== null)
        for (J[te] = null, te = 0; te < $.length; te++) {
          var I = $[te];
          I !== null && (I.lane &= -536870913);
        }
      n &= ~ae;
    }
    (a !== 0 && Fi(e, a, 0),
      u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(b & ~t)));
  }
  function Fi(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - pt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function re(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var a = 31 - pt(n),
        i = 1 << a;
      ((i & t) | (e[a] & t) && (e[a] |= t), (n &= ~i));
    }
  }
  function ye(e, t) {
    var n = t & -t;
    return ((n = (n & 42) !== 0 ? 1 : Oe(n)), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n);
  }
  function Oe(e) {
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
  function be(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function me() {
    var e = z.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : nh(e.type));
  }
  function xe(e, t) {
    var n = z.p;
    try {
      return ((z.p = e), t());
    } finally {
      z.p = n;
    }
  }
  var _e = Math.random().toString(36).slice(2),
    Ae = '__reactFiber$' + _e,
    Ee = '__reactProps$' + _e,
    qe = '__reactContainer$' + _e,
    Ye = '__reactEvents$' + _e,
    lt = '__reactListeners$' + _e,
    Lt = '__reactHandles$' + _e,
    nt = '__reactResources$' + _e,
    ft = '__reactMarker$' + _e;
  function vn(e) {
    (delete e[Ae], delete e[Ee], delete e[Ye], delete e[lt], delete e[Lt]);
  }
  function wt(e) {
    var t = e[Ae];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[qe] || n[Ae])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Ym(e); e !== null; ) {
            if ((n = e[Ae])) return n;
            e = Ym(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Ut(e) {
    if ((e = e[Ae] || e[qe])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function bn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(h(33));
  }
  function ua(e) {
    var t = e[nt];
    return (t || (t = e[nt] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function rt(e) {
    e[ft] = !0;
  }
  var Ql = new Set(),
    Sc = {};
  function Ba(e, t) {
    (il(e, t), il(e + 'Capture', t));
  }
  function il(e, t) {
    for (Sc[e] = t, e = 0; e < t.length; e++) Ql.add(t[e]);
  }
  var Lv = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    bc = {},
    Ec = {};
  function Hv(e) {
    return gt.call(Ec, e)
      ? !0
      : gt.call(bc, e)
        ? !1
        : Lv.test(e)
          ? (Ec[e] = !0)
          : ((bc[e] = !0), !1);
  }
  function $i(e, t, n) {
    if (Hv(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
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
        e.setAttribute(t, '' + n);
      }
  }
  function Wi(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + n);
    }
  }
  function wn(e, t, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, '' + a);
    }
  }
  function an(e) {
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
  function Tc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function jv(e, t, n) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < 'u' &&
      typeof a.get == 'function' &&
      typeof a.set == 'function'
    ) {
      var i = a.get,
        u = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (b) {
            ((n = '' + b), u.call(this, b));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (b) {
            n = '' + b;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Cr(e) {
    if (!e._valueTracker) {
      var t = Tc(e) ? 'checked' : 'value';
      e._valueTracker = jv(e, t, '' + e[t]);
    }
  }
  function Cc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      a = '';
    return (
      e && (a = Tc(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = a),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ii(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Gv = /[\n"\\]/g;
  function ln(e) {
    return e.replace(Gv, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Mr(e, t, n, a, i, u, b, R) {
    ((e.name = ''),
      b != null && typeof b != 'function' && typeof b != 'symbol' && typeof b != 'boolean'
        ? (e.type = b)
        : e.removeAttribute('type'),
      t != null
        ? b === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + an(t))
          : e.value !== '' + an(t) && (e.value = '' + an(t))
        : (b !== 'submit' && b !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Rr(e, b, an(t))
        : n != null
          ? Rr(e, b, an(n))
          : a != null && e.removeAttribute('value'),
      i == null && u != null && (e.defaultChecked = !!u),
      i != null && (e.checked = i && typeof i != 'function' && typeof i != 'symbol'),
      R != null && typeof R != 'function' && typeof R != 'symbol' && typeof R != 'boolean'
        ? (e.name = '' + an(R))
        : e.removeAttribute('name'));
  }
  function Mc(e, t, n, a, i, u, b, R) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || n != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) {
        Cr(e);
        return;
      }
      ((n = n != null ? '' + an(n) : ''),
        (t = t != null ? '' + an(t) : n),
        R || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? i),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (e.checked = R ? e.checked : !!a),
      (e.defaultChecked = !!a),
      b != null &&
        typeof b != 'function' &&
        typeof b != 'symbol' &&
        typeof b != 'boolean' &&
        (e.name = b),
      Cr(e));
  }
  function Rr(e, t, n) {
    (t === 'number' && Ii(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n);
  }
  function ul(e, t, n, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        ((i = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && a && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + an(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          ((e[i].selected = !0), a && (e[i].defaultSelected = !0));
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Rc(e, t, n) {
    if (t != null && ((t = '' + an(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + an(n) : '';
  }
  function _c(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(h(92));
        if (W(a)) {
          if (1 < a.length) throw Error(h(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ''), (t = n));
    }
    ((n = an(t)),
      (e.defaultValue = n),
      (a = e.textContent),
      a === n && a !== '' && a !== null && (e.value = a),
      Cr(e));
  }
  function rl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Yv = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function Ac(e, t, n) {
    var a = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : a
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || Yv.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function Oc(e, t, n) {
    if (t != null && typeof t != 'object') throw Error(h(62));
    if (((e = e.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0
            ? e.setProperty(a, '')
            : a === 'float'
              ? (e.cssFloat = '')
              : (e[a] = ''));
      for (var i in t) ((a = t[i]), t.hasOwnProperty(i) && n[i] !== a && Ac(e, i, a));
    } else for (var u in t) t.hasOwnProperty(u) && Ac(e, u, t[u]);
  }
  function _r(e) {
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
  var Vv = new Map([
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
    qv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Pi(e) {
    return qv.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Dn() {}
  var Ar = null;
  function Or(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var sl = null,
    ol = null;
  function wc(e) {
    var t = Ut(e);
    if (t && (e = t.stateNode)) {
      var n = e[Ee] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Mr(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (t = n.name),
            n.type === 'radio' && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name="' + ln('' + t) + '"][type="radio"]'), t = 0;
              t < n.length;
              t++
            ) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var i = a[Ee] || null;
                if (!i) throw Error(h(90));
                Mr(
                  a,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name
                );
              }
            }
            for (t = 0; t < n.length; t++) ((a = n[t]), a.form === e.form && Cc(a));
          }
          break e;
        case 'textarea':
          Rc(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && ul(e, !!n.multiple, t, !1));
      }
    }
  }
  var wr = !1;
  function Dc(e, t, n) {
    if (wr) return e(t, n);
    wr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((wr = !1),
        (sl !== null || ol !== null) &&
          (Yu(), sl && ((t = sl), (e = ol), (ol = sl = null), wc(t), e)))
      )
        for (t = 0; t < e.length; t++) wc(e[t]);
    }
  }
  function Zl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[Ee] || null;
    if (a === null) return null;
    n = a[t];
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
    if (n && typeof n != 'function') throw Error(h(231, t, typeof n));
    return n;
  }
  var zn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Dr = !1;
  if (zn)
    try {
      var Kl = {};
      (Object.defineProperty(Kl, 'passive', {
        get: function () {
          Dr = !0;
        },
      }),
        window.addEventListener('test', Kl, Kl),
        window.removeEventListener('test', Kl, Kl));
    } catch {
      Dr = !1;
    }
  var ra = null,
    zr = null,
    eu = null;
  function zc() {
    if (eu) return eu;
    var e,
      t = zr,
      n = t.length,
      a,
      i = 'value' in ra ? ra.value : ra.textContent,
      u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var b = n - e;
    for (a = 1; a <= b && t[n - a] === i[u - a]; a++);
    return (eu = i.slice(e, 1 < a ? 1 - a : void 0));
  }
  function tu(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function nu() {
    return !0;
  }
  function Nc() {
    return !1;
  }
  function Ht(e) {
    function t(n, a, i, u, b) {
      ((this._reactName = n),
        (this._targetInst = i),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = b),
        (this.currentTarget = null));
      for (var R in e) e.hasOwnProperty(R) && ((n = e[R]), (this[R] = n ? n(u) : u[R]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? nu
          : Nc),
        (this.isPropagationStopped = Nc),
        this
      );
    }
    return (
      v(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = nu));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = nu));
        },
        persist: function () {},
        isPersistent: nu,
      }),
      t
    );
  }
  var La = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    au = Ht(La),
    kl = v({}, La, { view: 0, detail: 0 }),
    Xv = Ht(kl),
    Nr,
    Ur,
    Jl,
    lu = v({}, kl, {
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
      getModifierState: Lr,
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
          : (e !== Jl &&
              (Jl && e.type === 'mousemove'
                ? ((Nr = e.screenX - Jl.screenX), (Ur = e.screenY - Jl.screenY))
                : (Ur = Nr = 0),
              (Jl = e)),
            Nr);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Ur;
      },
    }),
    Uc = Ht(lu),
    Qv = v({}, lu, { dataTransfer: 0 }),
    Zv = Ht(Qv),
    Kv = v({}, kl, { relatedTarget: 0 }),
    Br = Ht(Kv),
    kv = v({}, La, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jv = Ht(kv),
    Fv = v({}, La, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    $v = Ht(Fv),
    Wv = v({}, La, { data: 0 }),
    Bc = Ht(Wv),
    Iv = {
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
    Pv = {
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
    eg = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function tg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = eg[e]) ? !!t[e] : !1;
  }
  function Lr() {
    return tg;
  }
  var ng = v({}, kl, {
      key: function (e) {
        if (e.key) {
          var t = Iv[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = tu(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Pv[e.keyCode] || 'Unidentified'
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
      getModifierState: Lr,
      charCode: function (e) {
        return e.type === 'keypress' ? tu(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? tu(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    ag = Ht(ng),
    lg = v({}, lu, {
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
    Lc = Ht(lg),
    ig = v({}, kl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Lr,
    }),
    ug = Ht(ig),
    rg = v({}, La, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sg = Ht(rg),
    og = v({}, lu, {
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
    cg = Ht(og),
    fg = v({}, La, { newState: 0, oldState: 0 }),
    dg = Ht(fg),
    mg = [9, 13, 27, 32],
    Hr = zn && 'CompositionEvent' in window,
    Fl = null;
  zn && 'documentMode' in document && (Fl = document.documentMode);
  var hg = zn && 'TextEvent' in window && !Fl,
    Hc = zn && (!Hr || (Fl && 8 < Fl && 11 >= Fl)),
    jc = ' ',
    Gc = !1;
  function Yc(e, t) {
    switch (e) {
      case 'keyup':
        return mg.indexOf(t.keyCode) !== -1;
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
  function Vc(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var cl = !1;
  function vg(e, t) {
    switch (e) {
      case 'compositionend':
        return Vc(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Gc = !0), jc);
      case 'textInput':
        return ((e = t.data), e === jc && Gc ? null : e);
      default:
        return null;
    }
  }
  function gg(e, t) {
    if (cl)
      return e === 'compositionend' || (!Hr && Yc(e, t))
        ? ((e = zc()), (eu = zr = ra = null), (cl = !1), e)
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
        return Hc && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var yg = {
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
  function qc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!yg[e.type] : t === 'textarea';
  }
  function Xc(e, t, n, a) {
    (sl ? (ol ? ol.push(a) : (ol = [a])) : (sl = a),
      (t = ku(t, 'onChange')),
      0 < t.length &&
        ((n = new au('onChange', 'change', null, n, a)), e.push({ event: n, listeners: t })));
  }
  var $l = null,
    Wl = null;
  function pg(e) {
    Rm(e, 0);
  }
  function iu(e) {
    var t = bn(e);
    if (Cc(t)) return e;
  }
  function Qc(e, t) {
    if (e === 'change') return t;
  }
  var Zc = !1;
  if (zn) {
    var jr;
    if (zn) {
      var Gr = 'oninput' in document;
      if (!Gr) {
        var Kc = document.createElement('div');
        (Kc.setAttribute('oninput', 'return;'), (Gr = typeof Kc.oninput == 'function'));
      }
      jr = Gr;
    } else jr = !1;
    Zc = jr && (!document.documentMode || 9 < document.documentMode);
  }
  function kc() {
    $l && ($l.detachEvent('onpropertychange', Jc), (Wl = $l = null));
  }
  function Jc(e) {
    if (e.propertyName === 'value' && iu(Wl)) {
      var t = [];
      (Xc(t, Wl, e, Or(e)), Dc(pg, t));
    }
  }
  function xg(e, t, n) {
    e === 'focusin'
      ? (kc(), ($l = t), (Wl = n), $l.attachEvent('onpropertychange', Jc))
      : e === 'focusout' && kc();
  }
  function Sg(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return iu(Wl);
  }
  function bg(e, t) {
    if (e === 'click') return iu(t);
  }
  function Eg(e, t) {
    if (e === 'input' || e === 'change') return iu(t);
  }
  function Tg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var kt = typeof Object.is == 'function' ? Object.is : Tg;
  function Il(e, t) {
    if (kt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!gt.call(t, i) || !kt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Fc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $c(e, t) {
    var n = Fc(e);
    e = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = e + n.textContent.length), e <= t && a >= t)) return { node: n, offset: t - e };
        e = a;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Fc(n);
    }
  }
  function Wc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Wc(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ic(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Ii(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ii(e.document);
    }
    return t;
  }
  function Yr(e) {
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
  var Cg = zn && 'documentMode' in document && 11 >= document.documentMode,
    fl = null,
    Vr = null,
    Pl = null,
    qr = !1;
  function Pc(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    qr ||
      fl == null ||
      fl !== Ii(a) ||
      ((a = fl),
      'selectionStart' in a && Yr(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Pl && Il(Pl, a)) ||
        ((Pl = a),
        (a = ku(Vr, 'onSelect')),
        0 < a.length &&
          ((t = new au('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: a }),
          (t.target = fl))));
  }
  function Ha(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var dl = {
      animationend: Ha('Animation', 'AnimationEnd'),
      animationiteration: Ha('Animation', 'AnimationIteration'),
      animationstart: Ha('Animation', 'AnimationStart'),
      transitionrun: Ha('Transition', 'TransitionRun'),
      transitionstart: Ha('Transition', 'TransitionStart'),
      transitioncancel: Ha('Transition', 'TransitionCancel'),
      transitionend: Ha('Transition', 'TransitionEnd'),
    },
    Xr = {},
    ef = {};
  zn &&
    ((ef = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete dl.animationend.animation,
      delete dl.animationiteration.animation,
      delete dl.animationstart.animation),
    'TransitionEvent' in window || delete dl.transitionend.transition);
  function ja(e) {
    if (Xr[e]) return Xr[e];
    if (!dl[e]) return e;
    var t = dl[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ef) return (Xr[e] = t[n]);
    return e;
  }
  var tf = ja('animationend'),
    nf = ja('animationiteration'),
    af = ja('animationstart'),
    Mg = ja('transitionrun'),
    Rg = ja('transitionstart'),
    _g = ja('transitioncancel'),
    lf = ja('transitionend'),
    uf = new Map(),
    Qr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  Qr.push('scrollEnd');
  function gn(e, t) {
    (uf.set(e, t), Ba(t, [e]));
  }
  var uu =
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
    un = [],
    ml = 0,
    Zr = 0;
  function ru() {
    for (var e = ml, t = (Zr = ml = 0); t < e; ) {
      var n = un[t];
      un[t++] = null;
      var a = un[t];
      un[t++] = null;
      var i = un[t];
      un[t++] = null;
      var u = un[t];
      if (((un[t++] = null), a !== null && i !== null)) {
        var b = a.pending;
        (b === null ? (i.next = i) : ((i.next = b.next), (b.next = i)), (a.pending = i));
      }
      u !== 0 && rf(n, i, u);
    }
  }
  function su(e, t, n, a) {
    ((un[ml++] = e),
      (un[ml++] = t),
      (un[ml++] = n),
      (un[ml++] = a),
      (Zr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function Kr(e, t, n, a) {
    return (su(e, t, n, a), ou(e));
  }
  function Ga(e, t) {
    return (su(e, null, null, t), ou(e));
  }
  function rf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var i = !1, u = e.return; u !== null; )
      ((u.childLanes |= n),
        (a = u.alternate),
        a !== null && (a.childLanes |= n),
        u.tag === 22 && ((e = u.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3
      ? ((u = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - pt(n)),
          (e = u.hiddenUpdates),
          (a = e[i]),
          a === null ? (e[i] = [t]) : a.push(t),
          (t.lane = n | 536870912)),
        u)
      : null;
  }
  function ou(e) {
    if (50 < bi) throw ((bi = 0), (to = null), Error(h(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var hl = {};
  function Ag(e, t, n, a) {
    ((this.tag = e),
      (this.key = n),
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
  function Jt(e, t, n, a) {
    return new Ag(e, t, n, a);
  }
  function kr(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Nn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Jt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function sf(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function cu(e, t, n, a, i, u) {
    var b = 0;
    if (((a = e), typeof e == 'function')) kr(e) && (b = 1);
    else if (typeof e == 'string')
      b = N0(e, n, ue.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case j:
          return ((e = Jt(31, n, t, i)), (e.elementType = j), (e.lanes = u), e);
        case p:
          return Ya(n.children, i, u, t);
        case T:
          ((b = 8), (i |= 24));
          break;
        case _:
          return ((e = Jt(12, n, t, i | 2)), (e.elementType = _), (e.lanes = u), e);
        case C:
          return ((e = Jt(13, n, t, i)), (e.elementType = C), (e.lanes = u), e);
        case O:
          return ((e = Jt(19, n, t, i)), (e.elementType = O), (e.lanes = u), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case B:
                b = 10;
                break e;
              case U:
                b = 9;
                break e;
              case G:
                b = 11;
                break e;
              case D:
                b = 14;
                break e;
              case A:
                ((b = 16), (a = null));
                break e;
            }
          ((b = 29), (n = Error(h(130, e === null ? 'null' : typeof e, ''))), (a = null));
      }
    return ((t = Jt(b, n, t, i)), (t.elementType = e), (t.type = a), (t.lanes = u), t);
  }
  function Ya(e, t, n, a) {
    return ((e = Jt(7, e, a, t)), (e.lanes = n), e);
  }
  function Jr(e, t, n) {
    return ((e = Jt(6, e, null, t)), (e.lanes = n), e);
  }
  function of(e) {
    var t = Jt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Fr(e, t, n) {
    return (
      (t = Jt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var cf = new WeakMap();
  function rn(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = cf.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: Be(t) }), cf.set(e, t), t);
    }
    return { value: e, source: t, stack: Be(t) };
  }
  var vl = [],
    gl = 0,
    fu = null,
    ei = 0,
    sn = [],
    on = 0,
    sa = null,
    En = 1,
    Tn = '';
  function Un(e, t) {
    ((vl[gl++] = ei), (vl[gl++] = fu), (fu = e), (ei = t));
  }
  function ff(e, t, n) {
    ((sn[on++] = En), (sn[on++] = Tn), (sn[on++] = sa), (sa = e));
    var a = En;
    e = Tn;
    var i = 32 - pt(a) - 1;
    ((a &= ~(1 << i)), (n += 1));
    var u = 32 - pt(t) + i;
    if (30 < u) {
      var b = i - (i % 5);
      ((u = (a & ((1 << b) - 1)).toString(32)),
        (a >>= b),
        (i -= b),
        (En = (1 << (32 - pt(t) + i)) | (n << i) | a),
        (Tn = u + e));
    } else ((En = (1 << u) | (n << i) | a), (Tn = e));
  }
  function $r(e) {
    e.return !== null && (Un(e, 1), ff(e, 1, 0));
  }
  function Wr(e) {
    for (; e === fu; ) ((fu = vl[--gl]), (vl[gl] = null), (ei = vl[--gl]), (vl[gl] = null));
    for (; e === sa; )
      ((sa = sn[--on]),
        (sn[on] = null),
        (Tn = sn[--on]),
        (sn[on] = null),
        (En = sn[--on]),
        (sn[on] = null));
  }
  function df(e, t) {
    ((sn[on++] = En), (sn[on++] = Tn), (sn[on++] = sa), (En = t.id), (Tn = t.overflow), (sa = e));
  }
  var Mt = null,
    Pe = null,
    Le = !1,
    oa = null,
    cn = !1,
    Ir = Error(h(519));
  function ca(e) {
    var t = Error(
      h(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    );
    throw (ti(rn(t, e)), Ir);
  }
  function mf(e) {
    var t = e.stateNode,
      n = e.type,
      a = e.memoizedProps;
    switch (((t[Ae] = e), (t[Ee] = a), n)) {
      case 'dialog':
        (De('cancel', t), De('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        De('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < Ti.length; n++) De(Ti[n], t);
        break;
      case 'source':
        De('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (De('error', t), De('load', t));
        break;
      case 'details':
        De('toggle', t);
        break;
      case 'input':
        (De('invalid', t),
          Mc(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
        break;
      case 'select':
        De('invalid', t);
        break;
      case 'textarea':
        (De('invalid', t), _c(t, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      a.suppressHydrationWarning === !0 ||
      wm(t.textContent, n)
        ? (a.popover != null && (De('beforetoggle', t), De('toggle', t)),
          a.onScroll != null && De('scroll', t),
          a.onScrollEnd != null && De('scrollend', t),
          a.onClick != null && (t.onclick = Dn),
          (t = !0))
        : (t = !1),
      t || ca(e, !0));
  }
  function hf(e) {
    for (Mt = e.return; Mt; )
      switch (Mt.tag) {
        case 5:
        case 31:
        case 13:
          cn = !1;
          return;
        case 27:
        case 3:
          cn = !0;
          return;
        default:
          Mt = Mt.return;
      }
  }
  function yl(e) {
    if (e !== Mt) return !1;
    if (!Le) return (hf(e), (Le = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type), (n = !(n !== 'form' && n !== 'button') || yo(e.type, e.memoizedProps))),
        (n = !n)),
      n && Pe && ca(e),
      hf(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(h(317));
      Pe = Gm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(h(317));
      Pe = Gm(e);
    } else
      t === 27
        ? ((t = Pe), Ca(e.type) ? ((e = Eo), (Eo = null), (Pe = e)) : (Pe = t))
        : (Pe = Mt ? dn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Va() {
    ((Pe = Mt = null), (Le = !1));
  }
  function Pr() {
    var e = oa;
    return (e !== null && (Vt === null ? (Vt = e) : Vt.push.apply(Vt, e), (oa = null)), e);
  }
  function ti(e) {
    oa === null ? (oa = [e]) : oa.push(e);
  }
  var es = N(null),
    qa = null,
    Bn = null;
  function fa(e, t, n) {
    (ee(es, t._currentValue), (t._currentValue = n));
  }
  function Ln(e) {
    ((e._currentValue = es.current), Q(es));
  }
  function ts(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function ns(e, t, n, a) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var u = i.dependencies;
      if (u !== null) {
        var b = i.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var R = u;
          u = i;
          for (var Y = 0; Y < t.length; Y++)
            if (R.context === t[Y]) {
              ((u.lanes |= n),
                (R = u.alternate),
                R !== null && (R.lanes |= n),
                ts(u.return, n, e),
                a || (b = null));
              break e;
            }
          u = R.next;
        }
      } else if (i.tag === 18) {
        if (((b = i.return), b === null)) throw Error(h(341));
        ((b.lanes |= n), (u = b.alternate), u !== null && (u.lanes |= n), ts(b, n, e), (b = null));
      } else b = i.child;
      if (b !== null) b.return = i;
      else
        for (b = i; b !== null; ) {
          if (b === e) {
            b = null;
            break;
          }
          if (((i = b.sibling), i !== null)) {
            ((i.return = b.return), (b = i));
            break;
          }
          b = b.return;
        }
      i = b;
    }
  }
  function pl(e, t, n, a) {
    e = null;
    for (var i = t, u = !1; i !== null; ) {
      if (!u) {
        if ((i.flags & 524288) !== 0) u = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var b = i.alternate;
        if (b === null) throw Error(h(387));
        if (((b = b.memoizedProps), b !== null)) {
          var R = i.type;
          kt(i.pendingProps.value, b.value) || (e !== null ? e.push(R) : (e = [R]));
        }
      } else if (i === ge.current) {
        if (((b = i.alternate), b === null)) throw Error(h(387));
        b.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(Ai) : (e = [Ai]));
      }
      i = i.return;
    }
    (e !== null && ns(t, e, n, a), (t.flags |= 262144));
  }
  function du(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!kt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Xa(e) {
    ((qa = e), (Bn = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function Rt(e) {
    return vf(qa, e);
  }
  function mu(e, t) {
    return (qa === null && Xa(e), vf(e, t));
  }
  function vf(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), Bn === null)) {
      if (e === null) throw Error(h(308));
      ((Bn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else Bn = Bn.next = t;
    return n;
  }
  var Og =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    wg = s.unstable_scheduleCallback,
    Dg = s.unstable_NormalPriority,
    dt = {
      $$typeof: B,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function as() {
    return { controller: new Og(), data: new Map(), refCount: 0 };
  }
  function ni(e) {
    (e.refCount--,
      e.refCount === 0 &&
        wg(Dg, function () {
          e.controller.abort();
        }));
  }
  var ai = null,
    ls = 0,
    xl = 0,
    Sl = null;
  function zg(e, t) {
    if (ai === null) {
      var n = (ai = []);
      ((ls = 0),
        (xl = ro()),
        (Sl = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (ls++, t.then(gf, gf), t);
  }
  function gf() {
    if (--ls === 0 && ai !== null) {
      Sl !== null && (Sl.status = 'fulfilled');
      var e = ai;
      ((ai = null), (xl = 0), (Sl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ng(e, t) {
    var n = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (i) {
          n.push(i);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = 'fulfilled'), (a.value = t));
          for (var i = 0; i < n.length; i++) (0, n[i])(t);
        },
        function (i) {
          for (a.status = 'rejected', a.reason = i, i = 0; i < n.length; i++) (0, n[i])(void 0);
        }
      ),
      a
    );
  }
  var yf = M.S;
  M.S = function (e, t) {
    ((em = yt()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && zg(e, t),
      yf !== null && yf(e, t));
  };
  var Qa = N(null);
  function is() {
    var e = Qa.current;
    return e !== null ? e : Ie.pooledCache;
  }
  function hu(e, t) {
    t === null ? ee(Qa, Qa.current) : ee(Qa, t.pool);
  }
  function pf() {
    var e = is();
    return e === null ? null : { parent: dt._currentValue, pool: e };
  }
  var bl = Error(h(460)),
    us = Error(h(474)),
    vu = Error(h(542)),
    gu = { then: function () {} };
  function xf(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Sf(e, t, n) {
    switch (
      ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(Dn, Dn), (t = n)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Ef(e), e);
      default:
        if (typeof t.status == 'string') t.then(Dn, Dn);
        else {
          if (((e = Ie), e !== null && 100 < e.shellSuspendCounter)) throw Error(h(482));
          ((e = t),
            (e.status = 'pending'),
            e.then(
              function (a) {
                if (t.status === 'pending') {
                  var i = t;
                  ((i.status = 'fulfilled'), (i.value = a));
                }
              },
              function (a) {
                if (t.status === 'pending') {
                  var i = t;
                  ((i.status = 'rejected'), (i.reason = a));
                }
              }
            ));
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), Ef(e), e);
        }
        throw ((Ka = t), bl);
    }
  }
  function Za(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((Ka = n), bl) : n;
    }
  }
  var Ka = null;
  function bf() {
    if (Ka === null) throw Error(h(459));
    var e = Ka;
    return ((Ka = null), e);
  }
  function Ef(e) {
    if (e === bl || e === vu) throw Error(h(483));
  }
  var El = null,
    li = 0;
  function yu(e) {
    var t = li;
    return ((li += 1), El === null && (El = []), Sf(El, e, t));
  }
  function ii(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function pu(e, t) {
    throw t.$$typeof === y
      ? Error(h(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          h(
            31,
            e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e
          )
        ));
  }
  function Tf(e) {
    function t(Z, X) {
      if (e) {
        var k = Z.deletions;
        k === null ? ((Z.deletions = [X]), (Z.flags |= 16)) : k.push(X);
      }
    }
    function n(Z, X) {
      if (!e) return null;
      for (; X !== null; ) (t(Z, X), (X = X.sibling));
      return null;
    }
    function a(Z) {
      for (var X = new Map(); Z !== null; )
        (Z.key !== null ? X.set(Z.key, Z) : X.set(Z.index, Z), (Z = Z.sibling));
      return X;
    }
    function i(Z, X) {
      return ((Z = Nn(Z, X)), (Z.index = 0), (Z.sibling = null), Z);
    }
    function u(Z, X, k) {
      return (
        (Z.index = k),
        e
          ? ((k = Z.alternate),
            k !== null
              ? ((k = k.index), k < X ? ((Z.flags |= 67108866), X) : k)
              : ((Z.flags |= 67108866), X))
          : ((Z.flags |= 1048576), X)
      );
    }
    function b(Z) {
      return (e && Z.alternate === null && (Z.flags |= 67108866), Z);
    }
    function R(Z, X, k, ne) {
      return X === null || X.tag !== 6
        ? ((X = Jr(k, Z.mode, ne)), (X.return = Z), X)
        : ((X = i(X, k)), (X.return = Z), X);
    }
    function Y(Z, X, k, ne) {
      var ve = k.type;
      return ve === p
        ? te(Z, X, k.props.children, ne, k.key)
        : X !== null &&
            (X.elementType === ve ||
              (typeof ve == 'object' && ve !== null && ve.$$typeof === A && Za(ve) === X.type))
          ? ((X = i(X, k.props)), ii(X, k), (X.return = Z), X)
          : ((X = cu(k.type, k.key, k.props, null, Z.mode, ne)), ii(X, k), (X.return = Z), X);
    }
    function J(Z, X, k, ne) {
      return X === null ||
        X.tag !== 4 ||
        X.stateNode.containerInfo !== k.containerInfo ||
        X.stateNode.implementation !== k.implementation
        ? ((X = Fr(k, Z.mode, ne)), (X.return = Z), X)
        : ((X = i(X, k.children || [])), (X.return = Z), X);
    }
    function te(Z, X, k, ne, ve) {
      return X === null || X.tag !== 7
        ? ((X = Ya(k, Z.mode, ne, ve)), (X.return = Z), X)
        : ((X = i(X, k)), (X.return = Z), X);
    }
    function ae(Z, X, k) {
      if ((typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint')
        return ((X = Jr('' + X, Z.mode, k)), (X.return = Z), X);
      if (typeof X == 'object' && X !== null) {
        switch (X.$$typeof) {
          case r:
            return ((k = cu(X.type, X.key, X.props, null, Z.mode, k)), ii(k, X), (k.return = Z), k);
          case x:
            return ((X = Fr(X, Z.mode, k)), (X.return = Z), X);
          case A:
            return ((X = Za(X)), ae(Z, X, k));
        }
        if (W(X) || V(X)) return ((X = Ya(X, Z.mode, k, null)), (X.return = Z), X);
        if (typeof X.then == 'function') return ae(Z, yu(X), k);
        if (X.$$typeof === B) return ae(Z, mu(Z, X), k);
        pu(Z, X);
      }
      return null;
    }
    function $(Z, X, k, ne) {
      var ve = X !== null ? X.key : null;
      if ((typeof k == 'string' && k !== '') || typeof k == 'number' || typeof k == 'bigint')
        return ve !== null ? null : R(Z, X, '' + k, ne);
      if (typeof k == 'object' && k !== null) {
        switch (k.$$typeof) {
          case r:
            return k.key === ve ? Y(Z, X, k, ne) : null;
          case x:
            return k.key === ve ? J(Z, X, k, ne) : null;
          case A:
            return ((k = Za(k)), $(Z, X, k, ne));
        }
        if (W(k) || V(k)) return ve !== null ? null : te(Z, X, k, ne, null);
        if (typeof k.then == 'function') return $(Z, X, yu(k), ne);
        if (k.$$typeof === B) return $(Z, X, mu(Z, k), ne);
        pu(Z, k);
      }
      return null;
    }
    function I(Z, X, k, ne, ve) {
      if ((typeof ne == 'string' && ne !== '') || typeof ne == 'number' || typeof ne == 'bigint')
        return ((Z = Z.get(k) || null), R(X, Z, '' + ne, ve));
      if (typeof ne == 'object' && ne !== null) {
        switch (ne.$$typeof) {
          case r:
            return ((Z = Z.get(ne.key === null ? k : ne.key) || null), Y(X, Z, ne, ve));
          case x:
            return ((Z = Z.get(ne.key === null ? k : ne.key) || null), J(X, Z, ne, ve));
          case A:
            return ((ne = Za(ne)), I(Z, X, k, ne, ve));
        }
        if (W(ne) || V(ne)) return ((Z = Z.get(k) || null), te(X, Z, ne, ve, null));
        if (typeof ne.then == 'function') return I(Z, X, k, yu(ne), ve);
        if (ne.$$typeof === B) return I(Z, X, k, mu(X, ne), ve);
        pu(X, ne);
      }
      return null;
    }
    function ce(Z, X, k, ne) {
      for (
        var ve = null, He = null, de = X, Re = (X = 0), Ne = null;
        de !== null && Re < k.length;
        Re++
      ) {
        de.index > Re ? ((Ne = de), (de = null)) : (Ne = de.sibling);
        var je = $(Z, de, k[Re], ne);
        if (je === null) {
          de === null && (de = Ne);
          break;
        }
        (e && de && je.alternate === null && t(Z, de),
          (X = u(je, X, Re)),
          He === null ? (ve = je) : (He.sibling = je),
          (He = je),
          (de = Ne));
      }
      if (Re === k.length) return (n(Z, de), Le && Un(Z, Re), ve);
      if (de === null) {
        for (; Re < k.length; Re++)
          ((de = ae(Z, k[Re], ne)),
            de !== null &&
              ((X = u(de, X, Re)), He === null ? (ve = de) : (He.sibling = de), (He = de)));
        return (Le && Un(Z, Re), ve);
      }
      for (de = a(de); Re < k.length; Re++)
        ((Ne = I(de, Z, Re, k[Re], ne)),
          Ne !== null &&
            (e && Ne.alternate !== null && de.delete(Ne.key === null ? Re : Ne.key),
            (X = u(Ne, X, Re)),
            He === null ? (ve = Ne) : (He.sibling = Ne),
            (He = Ne)));
      return (
        e &&
          de.forEach(function (Oa) {
            return t(Z, Oa);
          }),
        Le && Un(Z, Re),
        ve
      );
    }
    function pe(Z, X, k, ne) {
      if (k == null) throw Error(h(151));
      for (
        var ve = null, He = null, de = X, Re = (X = 0), Ne = null, je = k.next();
        de !== null && !je.done;
        Re++, je = k.next()
      ) {
        de.index > Re ? ((Ne = de), (de = null)) : (Ne = de.sibling);
        var Oa = $(Z, de, je.value, ne);
        if (Oa === null) {
          de === null && (de = Ne);
          break;
        }
        (e && de && Oa.alternate === null && t(Z, de),
          (X = u(Oa, X, Re)),
          He === null ? (ve = Oa) : (He.sibling = Oa),
          (He = Oa),
          (de = Ne));
      }
      if (je.done) return (n(Z, de), Le && Un(Z, Re), ve);
      if (de === null) {
        for (; !je.done; Re++, je = k.next())
          ((je = ae(Z, je.value, ne)),
            je !== null &&
              ((X = u(je, X, Re)), He === null ? (ve = je) : (He.sibling = je), (He = je)));
        return (Le && Un(Z, Re), ve);
      }
      for (de = a(de); !je.done; Re++, je = k.next())
        ((je = I(de, Z, Re, je.value, ne)),
          je !== null &&
            (e && je.alternate !== null && de.delete(je.key === null ? Re : je.key),
            (X = u(je, X, Re)),
            He === null ? (ve = je) : (He.sibling = je),
            (He = je)));
      return (
        e &&
          de.forEach(function (Q0) {
            return t(Z, Q0);
          }),
        Le && Un(Z, Re),
        ve
      );
    }
    function $e(Z, X, k, ne) {
      if (
        (typeof k == 'object' &&
          k !== null &&
          k.type === p &&
          k.key === null &&
          (k = k.props.children),
        typeof k == 'object' && k !== null)
      ) {
        switch (k.$$typeof) {
          case r:
            e: {
              for (var ve = k.key; X !== null; ) {
                if (X.key === ve) {
                  if (((ve = k.type), ve === p)) {
                    if (X.tag === 7) {
                      (n(Z, X.sibling), (ne = i(X, k.props.children)), (ne.return = Z), (Z = ne));
                      break e;
                    }
                  } else if (
                    X.elementType === ve ||
                    (typeof ve == 'object' && ve !== null && ve.$$typeof === A && Za(ve) === X.type)
                  ) {
                    (n(Z, X.sibling), (ne = i(X, k.props)), ii(ne, k), (ne.return = Z), (Z = ne));
                    break e;
                  }
                  n(Z, X);
                  break;
                } else t(Z, X);
                X = X.sibling;
              }
              k.type === p
                ? ((ne = Ya(k.props.children, Z.mode, ne, k.key)), (ne.return = Z), (Z = ne))
                : ((ne = cu(k.type, k.key, k.props, null, Z.mode, ne)),
                  ii(ne, k),
                  (ne.return = Z),
                  (Z = ne));
            }
            return b(Z);
          case x:
            e: {
              for (ve = k.key; X !== null; ) {
                if (X.key === ve)
                  if (
                    X.tag === 4 &&
                    X.stateNode.containerInfo === k.containerInfo &&
                    X.stateNode.implementation === k.implementation
                  ) {
                    (n(Z, X.sibling), (ne = i(X, k.children || [])), (ne.return = Z), (Z = ne));
                    break e;
                  } else {
                    n(Z, X);
                    break;
                  }
                else t(Z, X);
                X = X.sibling;
              }
              ((ne = Fr(k, Z.mode, ne)), (ne.return = Z), (Z = ne));
            }
            return b(Z);
          case A:
            return ((k = Za(k)), $e(Z, X, k, ne));
        }
        if (W(k)) return ce(Z, X, k, ne);
        if (V(k)) {
          if (((ve = V(k)), typeof ve != 'function')) throw Error(h(150));
          return ((k = ve.call(k)), pe(Z, X, k, ne));
        }
        if (typeof k.then == 'function') return $e(Z, X, yu(k), ne);
        if (k.$$typeof === B) return $e(Z, X, mu(Z, k), ne);
        pu(Z, k);
      }
      return (typeof k == 'string' && k !== '') || typeof k == 'number' || typeof k == 'bigint'
        ? ((k = '' + k),
          X !== null && X.tag === 6
            ? (n(Z, X.sibling), (ne = i(X, k)), (ne.return = Z), (Z = ne))
            : (n(Z, X), (ne = Jr(k, Z.mode, ne)), (ne.return = Z), (Z = ne)),
          b(Z))
        : n(Z, X);
    }
    return function (Z, X, k, ne) {
      try {
        li = 0;
        var ve = $e(Z, X, k, ne);
        return ((El = null), ve);
      } catch (de) {
        if (de === bl || de === vu) throw de;
        var He = Jt(29, de, null, Z.mode);
        return ((He.lanes = ne), (He.return = Z), He);
      } finally {
      }
    };
  }
  var ka = Tf(!0),
    Cf = Tf(!1),
    da = !1;
  function rs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ss(e, t) {
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
  function ma(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ha(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Ge & 2) !== 0)) {
      var i = a.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (a.pending = t),
        (t = ou(e)),
        rf(e, null, n),
        t
      );
    }
    return (su(e, a, t, n), ou(e));
  }
  function ui(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), re(e, n));
    }
  }
  function os(e, t) {
    var n = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var i = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var b = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          (u === null ? (i = u = b) : (u = u.next = b), (n = n.next));
        } while (n !== null);
        u === null ? (i = u = t) : (u = u.next = t);
      } else i = u = t;
      ((n = {
        baseState: a.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var cs = !1;
  function ri() {
    if (cs) {
      var e = Sl;
      if (e !== null) throw e;
    }
  }
  function si(e, t, n, a) {
    cs = !1;
    var i = e.updateQueue;
    da = !1;
    var u = i.firstBaseUpdate,
      b = i.lastBaseUpdate,
      R = i.shared.pending;
    if (R !== null) {
      i.shared.pending = null;
      var Y = R,
        J = Y.next;
      ((Y.next = null), b === null ? (u = J) : (b.next = J), (b = Y));
      var te = e.alternate;
      te !== null &&
        ((te = te.updateQueue),
        (R = te.lastBaseUpdate),
        R !== b && (R === null ? (te.firstBaseUpdate = J) : (R.next = J), (te.lastBaseUpdate = Y)));
    }
    if (u !== null) {
      var ae = i.baseState;
      ((b = 0), (te = J = Y = null), (R = u));
      do {
        var $ = R.lane & -536870913,
          I = $ !== R.lane;
        if (I ? (ze & $) === $ : (a & $) === $) {
          ($ !== 0 && $ === xl && (cs = !0),
            te !== null &&
              (te = te.next =
                { lane: 0, tag: R.tag, payload: R.payload, callback: null, next: null }));
          e: {
            var ce = e,
              pe = R;
            $ = t;
            var $e = n;
            switch (pe.tag) {
              case 1:
                if (((ce = pe.payload), typeof ce == 'function')) {
                  ae = ce.call($e, ae, $);
                  break e;
                }
                ae = ce;
                break e;
              case 3:
                ce.flags = (ce.flags & -65537) | 128;
              case 0:
                if (
                  ((ce = pe.payload),
                  ($ = typeof ce == 'function' ? ce.call($e, ae, $) : ce),
                  $ == null)
                )
                  break e;
                ae = v({}, ae, $);
                break e;
              case 2:
                da = !0;
            }
          }
          (($ = R.callback),
            $ !== null &&
              ((e.flags |= 64),
              I && (e.flags |= 8192),
              (I = i.callbacks),
              I === null ? (i.callbacks = [$]) : I.push($)));
        } else
          ((I = { lane: $, tag: R.tag, payload: R.payload, callback: R.callback, next: null }),
            te === null ? ((J = te = I), (Y = ae)) : (te = te.next = I),
            (b |= $));
        if (((R = R.next), R === null)) {
          if (((R = i.shared.pending), R === null)) break;
          ((I = R),
            (R = I.next),
            (I.next = null),
            (i.lastBaseUpdate = I),
            (i.shared.pending = null));
        }
      } while (!0);
      (te === null && (Y = ae),
        (i.baseState = Y),
        (i.firstBaseUpdate = J),
        (i.lastBaseUpdate = te),
        u === null && (i.shared.lanes = 0),
        (xa |= b),
        (e.lanes = b),
        (e.memoizedState = ae));
    }
  }
  function Mf(e, t) {
    if (typeof e != 'function') throw Error(h(191, e));
    e.call(t);
  }
  function Rf(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Mf(n[e], t);
  }
  var Tl = N(null),
    xu = N(0);
  function _f(e, t) {
    ((e = Zn), ee(xu, e), ee(Tl, t), (Zn = e | t.baseLanes));
  }
  function fs() {
    (ee(xu, Zn), ee(Tl, Tl.current));
  }
  function ds() {
    ((Zn = xu.current), Q(Tl), Q(xu));
  }
  var Ft = N(null),
    fn = null;
  function va(e) {
    var t = e.alternate;
    (ee(st, st.current & 1),
      ee(Ft, e),
      fn === null && (t === null || Tl.current !== null || t.memoizedState !== null) && (fn = e));
  }
  function ms(e) {
    (ee(st, st.current), ee(Ft, e), fn === null && (fn = e));
  }
  function Af(e) {
    e.tag === 22 ? (ee(st, st.current), ee(Ft, e), fn === null && (fn = e)) : ga();
  }
  function ga() {
    (ee(st, st.current), ee(Ft, Ft.current));
  }
  function $t(e) {
    (Q(Ft), fn === e && (fn = null), Q(st));
  }
  var st = N(0);
  function Su(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || So(n) || bo(n))) return t;
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
  var Hn = 0,
    Ce = null,
    Je = null,
    mt = null,
    bu = !1,
    Cl = !1,
    Ja = !1,
    Eu = 0,
    oi = 0,
    Ml = null,
    Ug = 0;
  function it() {
    throw Error(h(321));
  }
  function hs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return !1;
    return !0;
  }
  function vs(e, t, n, a, i, u) {
    return (
      (Hn = u),
      (Ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (M.H = e === null || e.memoizedState === null ? fd : ws),
      (Ja = !1),
      (u = n(a, i)),
      (Ja = !1),
      Cl && (u = wf(t, n, a, i)),
      Of(e),
      u
    );
  }
  function Of(e) {
    M.H = di;
    var t = Je !== null && Je.next !== null;
    if (((Hn = 0), (mt = Je = Ce = null), (bu = !1), (oi = 0), (Ml = null), t)) throw Error(h(300));
    e === null || ht || ((e = e.dependencies), e !== null && du(e) && (ht = !0));
  }
  function wf(e, t, n, a) {
    Ce = e;
    var i = 0;
    do {
      if ((Cl && (Ml = null), (oi = 0), (Cl = !1), 25 <= i)) throw Error(h(301));
      if (((i += 1), (mt = Je = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((M.H = dd), (u = t(n, a)));
    } while (Cl);
    return u;
  }
  function Bg() {
    var e = M.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? ci(t) : t),
      (e = e.useState()[0]),
      (Je !== null ? Je.memoizedState : null) !== e && (Ce.flags |= 1024),
      t
    );
  }
  function gs() {
    var e = Eu !== 0;
    return ((Eu = 0), e);
  }
  function ys(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function ps(e) {
    if (bu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      bu = !1;
    }
    ((Hn = 0), (mt = Je = Ce = null), (Cl = !1), (oi = Eu = 0), (Ml = null));
  }
  function Bt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (mt === null ? (Ce.memoizedState = mt = e) : (mt = mt.next = e), mt);
  }
  function ot() {
    if (Je === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var t = mt === null ? Ce.memoizedState : mt.next;
    if (t !== null) ((mt = t), (Je = e));
    else {
      if (e === null) throw Ce.alternate === null ? Error(h(467)) : Error(h(310));
      ((Je = e),
        (e = {
          memoizedState: Je.memoizedState,
          baseState: Je.baseState,
          baseQueue: Je.baseQueue,
          queue: Je.queue,
          next: null,
        }),
        mt === null ? (Ce.memoizedState = mt = e) : (mt = mt.next = e));
    }
    return mt;
  }
  function Tu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ci(e) {
    var t = oi;
    return (
      (oi += 1),
      Ml === null && (Ml = []),
      (e = Sf(Ml, e, t)),
      (t = Ce),
      (mt === null ? t.memoizedState : mt.next) === null &&
        ((t = t.alternate), (M.H = t === null || t.memoizedState === null ? fd : ws)),
      e
    );
  }
  function Cu(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return ci(e);
      if (e.$$typeof === B) return Rt(e);
    }
    throw Error(h(438, String(e)));
  }
  function xs(e) {
    var t = null,
      n = Ce.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var a = Ce.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (i) {
                return i.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = Tu()), (Ce.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = L;
    return (t.index++, n);
  }
  function jn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Mu(e) {
    var t = ot();
    return Ss(t, Je, e);
  }
  function Ss(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = n;
    var i = e.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (i !== null) {
        var b = i.next;
        ((i.next = u.next), (u.next = b));
      }
      ((t.baseQueue = i = u), (a.pending = null));
    }
    if (((u = e.baseState), i === null)) e.memoizedState = u;
    else {
      t = i.next;
      var R = (b = null),
        Y = null,
        J = t,
        te = !1;
      do {
        var ae = J.lane & -536870913;
        if (ae !== J.lane ? (ze & ae) === ae : (Hn & ae) === ae) {
          var $ = J.revertLane;
          if ($ === 0)
            (Y !== null &&
              (Y = Y.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: J.action,
                  hasEagerState: J.hasEagerState,
                  eagerState: J.eagerState,
                  next: null,
                }),
              ae === xl && (te = !0));
          else if ((Hn & $) === $) {
            ((J = J.next), $ === xl && (te = !0));
            continue;
          } else
            ((ae = {
              lane: 0,
              revertLane: J.revertLane,
              gesture: null,
              action: J.action,
              hasEagerState: J.hasEagerState,
              eagerState: J.eagerState,
              next: null,
            }),
              Y === null ? ((R = Y = ae), (b = u)) : (Y = Y.next = ae),
              (Ce.lanes |= $),
              (xa |= $));
          ((ae = J.action), Ja && n(u, ae), (u = J.hasEagerState ? J.eagerState : n(u, ae)));
        } else
          (($ = {
            lane: ae,
            revertLane: J.revertLane,
            gesture: J.gesture,
            action: J.action,
            hasEagerState: J.hasEagerState,
            eagerState: J.eagerState,
            next: null,
          }),
            Y === null ? ((R = Y = $), (b = u)) : (Y = Y.next = $),
            (Ce.lanes |= ae),
            (xa |= ae));
        J = J.next;
      } while (J !== null && J !== t);
      if (
        (Y === null ? (b = u) : (Y.next = R),
        !kt(u, e.memoizedState) && ((ht = !0), te && ((n = Sl), n !== null)))
      )
        throw n;
      ((e.memoizedState = u), (e.baseState = b), (e.baseQueue = Y), (a.lastRenderedState = u));
    }
    return (i === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function bs(e) {
    var t = ot(),
      n = t.queue;
    if (n === null) throw Error(h(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch,
      i = n.pending,
      u = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var b = (i = i.next);
      do ((u = e(u, b.action)), (b = b.next));
      while (b !== i);
      (kt(u, t.memoizedState) || (ht = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, a];
  }
  function Df(e, t, n) {
    var a = Ce,
      i = ot(),
      u = Le;
    if (u) {
      if (n === void 0) throw Error(h(407));
      n = n();
    } else n = t();
    var b = !kt((Je || i).memoizedState, n);
    if (
      (b && ((i.memoizedState = n), (ht = !0)),
      (i = i.queue),
      Cs(Uf.bind(null, a, i, e), [e]),
      i.getSnapshot !== t || b || (mt !== null && mt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Rl(9, { destroy: void 0 }, Nf.bind(null, a, i, n, t), null),
        Ie === null)
      )
        throw Error(h(349));
      u || (Hn & 127) !== 0 || zf(a, t, n);
    }
    return n;
  }
  function zf(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = Tu()), (Ce.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Nf(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), Bf(t) && Lf(e));
  }
  function Uf(e, t, n) {
    return n(function () {
      Bf(t) && Lf(e);
    });
  }
  function Bf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !kt(e, n);
    } catch {
      return !0;
    }
  }
  function Lf(e) {
    var t = Ga(e, 2);
    t !== null && qt(t, e, 2);
  }
  function Es(e) {
    var t = Bt();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), Ja)) {
        Ct(!0);
        try {
          n();
        } finally {
          Ct(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Hf(e, t, n, a) {
    return ((e.baseState = n), Ss(e, Je, typeof a == 'function' ? a : jn));
  }
  function Lg(e, t, n, a, i) {
    if (Au(e)) throw Error(h(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (b) {
          u.listeners.push(b);
        },
      };
      (M.T !== null ? n(!0) : (u.isTransition = !1),
        a(u),
        (n = t.pending),
        n === null
          ? ((u.next = t.pending = u), jf(t, u))
          : ((u.next = n.next), (t.pending = n.next = u)));
    }
  }
  function jf(e, t) {
    var n = t.action,
      a = t.payload,
      i = e.state;
    if (t.isTransition) {
      var u = M.T,
        b = {};
      M.T = b;
      try {
        var R = n(i, a),
          Y = M.S;
        (Y !== null && Y(b, R), Gf(e, t, R));
      } catch (J) {
        Ts(e, t, J);
      } finally {
        (u !== null && b.types !== null && (u.types = b.types), (M.T = u));
      }
    } else
      try {
        ((u = n(i, a)), Gf(e, t, u));
      } catch (J) {
        Ts(e, t, J);
      }
  }
  function Gf(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (a) {
            Yf(e, t, a);
          },
          function (a) {
            return Ts(e, t, a);
          }
        )
      : Yf(e, t, n);
  }
  function Yf(e, t, n) {
    ((t.status = 'fulfilled'),
      (t.value = n),
      Vf(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), jf(e, n))));
  }
  function Ts(e, t, n) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = 'rejected'), (t.reason = n), Vf(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function Vf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function qf(e, t) {
    return t;
  }
  function Xf(e, t) {
    if (Le) {
      var n = Ie.formState;
      if (n !== null) {
        e: {
          var a = Ce;
          if (Le) {
            if (Pe) {
              t: {
                for (var i = Pe, u = cn; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break t;
                  }
                  if (((i = dn(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                ((u = i.data), (i = u === 'F!' || u === 'F' ? i : null));
              }
              if (i) {
                ((Pe = dn(i.nextSibling)), (a = i.data === 'F!'));
                break e;
              }
            }
            ca(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return (
      (n = Bt()),
      (n.memoizedState = n.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qf,
        lastRenderedState: t,
      }),
      (n.queue = a),
      (n = sd.bind(null, Ce, a)),
      (a.dispatch = n),
      (a = Es(!1)),
      (u = Os.bind(null, Ce, !1, a.queue)),
      (a = Bt()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = i),
      (n = Lg.bind(null, Ce, i, u, n)),
      (i.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    );
  }
  function Qf(e) {
    var t = ot();
    return Zf(t, Je, e);
  }
  function Zf(e, t, n) {
    if (
      ((t = Ss(e, t, qf)[0]),
      (e = Mu(jn)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = ci(t);
      } catch (b) {
        throw b === bl ? vu : b;
      }
    else a = t;
    t = ot();
    var i = t.queue,
      u = i.dispatch;
    return (
      n !== t.memoizedState &&
        ((Ce.flags |= 2048), Rl(9, { destroy: void 0 }, Hg.bind(null, i, n), null)),
      [a, u, e]
    );
  }
  function Hg(e, t) {
    e.action = t;
  }
  function Kf(e) {
    var t = ot(),
      n = Je;
    if (n !== null) return Zf(t, n, e);
    (ot(), (t = t.memoizedState), (n = ot()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = e), [t, a, !1]);
  }
  function Rl(e, t, n, a) {
    return (
      (e = { tag: e, create: n, deps: a, inst: t, next: null }),
      (t = Ce.updateQueue),
      t === null && ((t = Tu()), (Ce.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function kf() {
    return ot().memoizedState;
  }
  function Ru(e, t, n, a) {
    var i = Bt();
    ((Ce.flags |= e),
      (i.memoizedState = Rl(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a)));
  }
  function _u(e, t, n, a) {
    var i = ot();
    a = a === void 0 ? null : a;
    var u = i.memoizedState.inst;
    Je !== null && a !== null && hs(a, Je.memoizedState.deps)
      ? (i.memoizedState = Rl(t, u, n, a))
      : ((Ce.flags |= e), (i.memoizedState = Rl(1 | t, u, n, a)));
  }
  function Jf(e, t) {
    Ru(8390656, 8, e, t);
  }
  function Cs(e, t) {
    _u(2048, 8, e, t);
  }
  function jg(e) {
    Ce.flags |= 4;
    var t = Ce.updateQueue;
    if (t === null) ((t = Tu()), (Ce.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function Ff(e) {
    var t = ot().memoizedState;
    return (
      jg({ ref: t, nextImpl: e }),
      function () {
        if ((Ge & 2) !== 0) throw Error(h(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function $f(e, t) {
    return _u(4, 2, e, t);
  }
  function Wf(e, t) {
    return _u(4, 4, e, t);
  }
  function If(e, t) {
    if (typeof t == 'function') {
      e = e();
      var n = t(e);
      return function () {
        typeof n == 'function' ? n() : t(null);
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
  function Pf(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), _u(4, 4, If.bind(null, t, e), n));
  }
  function Ms() {}
  function ed(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && hs(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
  }
  function td(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && hs(t, a[1])) return a[0];
    if (((a = e()), Ja)) {
      Ct(!0);
      try {
        e();
      } finally {
        Ct(!1);
      }
    }
    return ((n.memoizedState = [a, t]), a);
  }
  function Rs(e, t, n) {
    return n === void 0 || ((Hn & 1073741824) !== 0 && (ze & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = nm()), (Ce.lanes |= e), (xa |= e), n);
  }
  function nd(e, t, n, a) {
    return kt(n, t)
      ? n
      : Tl.current !== null
        ? ((e = Rs(e, n, a)), kt(e, t) || (ht = !0), e)
        : (Hn & 42) === 0 || ((Hn & 1073741824) !== 0 && (ze & 261930) === 0)
          ? ((ht = !0), (e.memoizedState = n))
          : ((e = nm()), (Ce.lanes |= e), (xa |= e), t);
  }
  function ad(e, t, n, a, i) {
    var u = z.p;
    z.p = u !== 0 && 8 > u ? u : 8;
    var b = M.T,
      R = {};
    ((M.T = R), Os(e, !1, t, n));
    try {
      var Y = i(),
        J = M.S;
      if (
        (J !== null && J(R, Y), Y !== null && typeof Y == 'object' && typeof Y.then == 'function')
      ) {
        var te = Ng(Y, a);
        fi(e, t, te, Pt(e));
      } else fi(e, t, a, Pt(e));
    } catch (ae) {
      fi(e, t, { then: function () {}, status: 'rejected', reason: ae }, Pt());
    } finally {
      ((z.p = u), b !== null && R.types !== null && (b.types = R.types), (M.T = b));
    }
  }
  function Gg() {}
  function _s(e, t, n, a) {
    if (e.tag !== 5) throw Error(h(476));
    var i = ld(e).queue;
    ad(
      e,
      i,
      t,
      q,
      n === null
        ? Gg
        : function () {
            return (id(e), n(a));
          }
    );
  }
  function ld(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jn,
        lastRenderedState: q,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: jn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function id(e) {
    var t = ld(e);
    (t.next === null && (t = e.alternate.memoizedState), fi(e, t.next.queue, {}, Pt()));
  }
  function As() {
    return Rt(Ai);
  }
  function ud() {
    return ot().memoizedState;
  }
  function rd() {
    return ot().memoizedState;
  }
  function Yg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Pt();
          e = ma(n);
          var a = ha(t, e, n);
          (a !== null && (qt(a, t, n), ui(a, t, n)), (t = { cache: as() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Vg(e, t, n) {
    var a = Pt();
    ((n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Au(e) ? od(t, n) : ((n = Kr(e, t, n, a)), n !== null && (qt(n, e, a), cd(n, t, a))));
  }
  function sd(e, t, n) {
    var a = Pt();
    fi(e, t, n, a);
  }
  function fi(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Au(e)) od(t, i);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var b = t.lastRenderedState,
            R = u(b, n);
          if (((i.hasEagerState = !0), (i.eagerState = R), kt(R, b)))
            return (su(e, t, i, 0), Ie === null && ru(), !1);
        } catch {
        } finally {
        }
      if (((n = Kr(e, t, i, a)), n !== null)) return (qt(n, e, a), cd(n, t, a), !0);
    }
    return !1;
  }
  function Os(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: ro(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Au(e))
    ) {
      if (t) throw Error(h(479));
    } else ((t = Kr(e, n, a, 2)), t !== null && qt(t, e, 2));
  }
  function Au(e) {
    var t = e.alternate;
    return e === Ce || (t !== null && t === Ce);
  }
  function od(e, t) {
    Cl = bu = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function cd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), re(e, n));
    }
  }
  var di = {
    readContext: Rt,
    use: Cu,
    useCallback: it,
    useContext: it,
    useEffect: it,
    useImperativeHandle: it,
    useLayoutEffect: it,
    useInsertionEffect: it,
    useMemo: it,
    useReducer: it,
    useRef: it,
    useState: it,
    useDebugValue: it,
    useDeferredValue: it,
    useTransition: it,
    useSyncExternalStore: it,
    useId: it,
    useHostTransitionStatus: it,
    useFormState: it,
    useActionState: it,
    useOptimistic: it,
    useMemoCache: it,
    useCacheRefresh: it,
  };
  di.useEffectEvent = it;
  var fd = {
      readContext: Rt,
      use: Cu,
      useCallback: function (e, t) {
        return ((Bt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Rt,
      useEffect: Jf,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null), Ru(4194308, 4, If.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Ru(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Ru(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Bt();
        t = t === void 0 ? null : t;
        var a = e();
        if (Ja) {
          Ct(!0);
          try {
            e();
          } finally {
            Ct(!1);
          }
        }
        return ((n.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, n) {
        var a = Bt();
        if (n !== void 0) {
          var i = n(t);
          if (Ja) {
            Ct(!0);
            try {
              n(t);
            } finally {
              Ct(!1);
            }
          }
        } else i = t;
        return (
          (a.memoizedState = a.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (a.queue = e),
          (e = e.dispatch = Vg.bind(null, Ce, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Bt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Es(e);
        var t = e.queue,
          n = sd.bind(null, Ce, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: Ms,
      useDeferredValue: function (e, t) {
        var n = Bt();
        return Rs(n, e, t);
      },
      useTransition: function () {
        var e = Es(!1);
        return ((e = ad.bind(null, Ce, e.queue, !0, !1)), (Bt().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, n) {
        var a = Ce,
          i = Bt();
        if (Le) {
          if (n === void 0) throw Error(h(407));
          n = n();
        } else {
          if (((n = t()), Ie === null)) throw Error(h(349));
          (ze & 127) !== 0 || zf(a, t, n);
        }
        i.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (i.queue = u),
          Jf(Uf.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          Rl(9, { destroy: void 0 }, Nf.bind(null, a, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = Bt(),
          t = Ie.identifierPrefix;
        if (Le) {
          var n = Tn,
            a = En;
          ((n = (a & ~(1 << (32 - pt(a) - 1))).toString(32) + n),
            (t = '_' + t + 'R_' + n),
            (n = Eu++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '_'));
        } else ((n = Ug++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: As,
      useFormState: Xf,
      useActionState: Xf,
      useOptimistic: function (e) {
        var t = Bt();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((t.queue = n), (t = Os.bind(null, Ce, !0, n)), (n.dispatch = t), [e, t]);
      },
      useMemoCache: xs,
      useCacheRefresh: function () {
        return (Bt().memoizedState = Yg.bind(null, Ce));
      },
      useEffectEvent: function (e) {
        var t = Bt(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((Ge & 2) !== 0) throw Error(h(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ws = {
      readContext: Rt,
      use: Cu,
      useCallback: ed,
      useContext: Rt,
      useEffect: Cs,
      useImperativeHandle: Pf,
      useInsertionEffect: $f,
      useLayoutEffect: Wf,
      useMemo: td,
      useReducer: Mu,
      useRef: kf,
      useState: function () {
        return Mu(jn);
      },
      useDebugValue: Ms,
      useDeferredValue: function (e, t) {
        var n = ot();
        return nd(n, Je.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Mu(jn)[0],
          t = ot().memoizedState;
        return [typeof e == 'boolean' ? e : ci(e), t];
      },
      useSyncExternalStore: Df,
      useId: ud,
      useHostTransitionStatus: As,
      useFormState: Qf,
      useActionState: Qf,
      useOptimistic: function (e, t) {
        var n = ot();
        return Hf(n, Je, e, t);
      },
      useMemoCache: xs,
      useCacheRefresh: rd,
    };
  ws.useEffectEvent = Ff;
  var dd = {
    readContext: Rt,
    use: Cu,
    useCallback: ed,
    useContext: Rt,
    useEffect: Cs,
    useImperativeHandle: Pf,
    useInsertionEffect: $f,
    useLayoutEffect: Wf,
    useMemo: td,
    useReducer: bs,
    useRef: kf,
    useState: function () {
      return bs(jn);
    },
    useDebugValue: Ms,
    useDeferredValue: function (e, t) {
      var n = ot();
      return Je === null ? Rs(n, e, t) : nd(n, Je.memoizedState, e, t);
    },
    useTransition: function () {
      var e = bs(jn)[0],
        t = ot().memoizedState;
      return [typeof e == 'boolean' ? e : ci(e), t];
    },
    useSyncExternalStore: Df,
    useId: ud,
    useHostTransitionStatus: As,
    useFormState: Kf,
    useActionState: Kf,
    useOptimistic: function (e, t) {
      var n = ot();
      return Je !== null ? Hf(n, Je, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: xs,
    useCacheRefresh: rd,
  };
  dd.useEffectEvent = Ff;
  function Ds(e, t, n, a) {
    ((t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : v({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var zs = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = Pt(),
        i = ma(a);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = ha(e, i, a)),
        t !== null && (qt(t, e, a), ui(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = Pt(),
        i = ma(a);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = ha(e, i, a)),
        t !== null && (qt(t, e, a), ui(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Pt(),
        a = ma(n);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = ha(e, a, n)),
        t !== null && (qt(t, e, n), ui(t, e, n)));
    },
  };
  function md(e, t, n, a, i, u, b) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, u, b)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Il(n, a) || !Il(i, u)
          : !0
    );
  }
  function hd(e, t, n, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && zs.enqueueReplaceState(t, t.state, null));
  }
  function Fa(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var a in t) a !== 'ref' && (n[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = v({}, n));
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
    }
    return n;
  }
  function vd(e) {
    uu(e);
  }
  function gd(e) {
    console.error(e);
  }
  function yd(e) {
    uu(e);
  }
  function Ou(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function pd(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Ns(e, t, n) {
    return (
      (n = ma(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Ou(e, t);
      }),
      n
    );
  }
  function xd(e) {
    return ((e = ma(e)), (e.tag = 3), e);
  }
  function Sd(e, t, n, a) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == 'function') {
      var u = a.value;
      ((e.payload = function () {
        return i(u);
      }),
        (e.callback = function () {
          pd(t, n, a);
        }));
    }
    var b = n.stateNode;
    b !== null &&
      typeof b.componentDidCatch == 'function' &&
      (e.callback = function () {
        (pd(t, n, a),
          typeof i != 'function' && (Sa === null ? (Sa = new Set([this])) : Sa.add(this)));
        var R = a.stack;
        this.componentDidCatch(a.value, { componentStack: R !== null ? R : '' });
      });
  }
  function qg(e, t, n, a, i) {
    if (((n.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((t = n.alternate), t !== null && pl(t, n, i, !0), (n = Ft.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              fn === null ? Vu() : n.alternate === null && ut === 0 && (ut = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = i),
              a === gu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  lo(e, a, i)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === gu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                  lo(e, a, i)),
              !1
            );
        }
        throw Error(h(435, n.tag));
      }
      return (lo(e, a, i), Vu(), !1);
    }
    if (Le)
      return (
        (t = Ft.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            a !== Ir && ((e = Error(h(422), { cause: a })), ti(rn(e, n))))
          : (a !== Ir && ((t = Error(h(423), { cause: a })), ti(rn(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (a = rn(a, n)),
            (i = Ns(e.stateNode, a, i)),
            os(e, i),
            ut !== 4 && (ut = 2)),
        !1
      );
    var u = Error(h(520), { cause: a });
    if (((u = rn(u, n)), Si === null ? (Si = [u]) : Si.push(u), ut !== 4 && (ut = 2), t === null))
      return !0;
    ((a = rn(a, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = i & -i),
            (n.lanes |= e),
            (e = Ns(n.stateNode, a, e)),
            os(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (u = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (u !== null &&
                  typeof u.componentDidCatch == 'function' &&
                  (Sa === null || !Sa.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (i &= -i),
              (n.lanes |= i),
              (i = xd(i)),
              Sd(i, e, n, a),
              os(n, i),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Us = Error(h(461)),
    ht = !1;
  function _t(e, t, n, a) {
    t.child = e === null ? Cf(t, null, n, a) : ka(t, e.child, n, a);
  }
  function bd(e, t, n, a, i) {
    n = n.render;
    var u = t.ref;
    if ('ref' in a) {
      var b = {};
      for (var R in a) R !== 'ref' && (b[R] = a[R]);
    } else b = a;
    return (
      Xa(t),
      (a = vs(e, t, n, b, u, i)),
      (R = gs()),
      e !== null && !ht
        ? (ys(e, t, i), Gn(e, t, i))
        : (Le && R && $r(t), (t.flags |= 1), _t(e, t, a, i), t.child)
    );
  }
  function Ed(e, t, n, a, i) {
    if (e === null) {
      var u = n.type;
      return typeof u == 'function' && !kr(u) && u.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = u), Td(e, t, u, a, i))
        : ((e = cu(n.type, null, a, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !qs(e, i))) {
      var b = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Il), n(b, a) && e.ref === t.ref))
        return Gn(e, t, i);
    }
    return ((t.flags |= 1), (e = Nn(u, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Td(e, t, n, a, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Il(u, a) && e.ref === t.ref)
        if (((ht = !1), (t.pendingProps = a = u), qs(e, i))) (e.flags & 131072) !== 0 && (ht = !0);
        else return ((t.lanes = e.lanes), Gn(e, t, i));
    }
    return Bs(e, t, n, a, i);
  }
  function Cd(e, t, n, a) {
    var i = a.children,
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
        if (((u = u !== null ? u.baseLanes | n : n), e !== null)) {
          for (a = t.child = e.child, i = 0; a !== null; )
            ((i = i | a.lanes | a.childLanes), (a = a.sibling));
          a = i & ~u;
        } else ((a = 0), (t.child = null));
        return Md(e, t, u, n, a);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && hu(t, u !== null ? u.cachePool : null),
          u !== null ? _f(t, u) : fs(),
          Af(t));
      else return ((a = t.lanes = 536870912), Md(e, t, u !== null ? u.baseLanes | n : n, n, a));
    } else
      u !== null
        ? (hu(t, u.cachePool), _f(t, u), ga(), (t.memoizedState = null))
        : (e !== null && hu(t, null), fs(), ga());
    return (_t(e, t, i, n), t.child);
  }
  function mi(e, t) {
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
  function Md(e, t, n, a, i) {
    var u = is();
    return (
      (u = u === null ? null : { parent: dt._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && hu(t, null),
      fs(),
      Af(t),
      e !== null && pl(e, t, a, !0),
      (t.childLanes = i),
      null
    );
  }
  function wu(e, t) {
    return (
      (t = zu({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Rd(e, t, n) {
    return (
      ka(t, e.child, null, n),
      (e = wu(t, t.pendingProps)),
      (e.flags |= 2),
      $t(t),
      (t.memoizedState = null),
      e
    );
  }
  function Xg(e, t, n) {
    var a = t.pendingProps,
      i = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Le) {
        if (a.mode === 'hidden') return ((e = wu(t, a)), (t.lanes = 536870912), mi(null, e));
        if (
          (ms(t),
          (e = Pe)
            ? ((e = jm(e, cn)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: sa !== null ? { id: En, overflow: Tn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = of(e)),
                (n.return = t),
                (t.child = n),
                (Mt = t),
                (Pe = null)))
            : (e = null),
          e === null)
        )
          throw ca(t);
        return ((t.lanes = 536870912), null);
      }
      return wu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var b = u.dehydrated;
      if ((ms(t), i))
        if (t.flags & 256) ((t.flags &= -257), (t = Rd(e, t, n)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(h(558));
      else if ((ht || pl(e, t, n, !1), (i = (n & e.childLanes) !== 0), ht || i)) {
        if (((a = Ie), a !== null && ((b = ye(a, n)), b !== 0 && b !== u.retryLane)))
          throw ((u.retryLane = b), Ga(e, b), qt(a, e, b), Us);
        (Vu(), (t = Rd(e, t, n)));
      } else
        ((e = u.treeContext),
          (Pe = dn(b.nextSibling)),
          (Mt = t),
          (Le = !0),
          (oa = null),
          (cn = !1),
          e !== null && df(t, e),
          (t = wu(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Nn(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Du(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(h(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Bs(e, t, n, a, i) {
    return (
      Xa(t),
      (n = vs(e, t, n, a, void 0, i)),
      (a = gs()),
      e !== null && !ht
        ? (ys(e, t, i), Gn(e, t, i))
        : (Le && a && $r(t), (t.flags |= 1), _t(e, t, n, i), t.child)
    );
  }
  function _d(e, t, n, a, i, u) {
    return (
      Xa(t),
      (t.updateQueue = null),
      (n = wf(t, a, n, i)),
      Of(e),
      (a = gs()),
      e !== null && !ht
        ? (ys(e, t, u), Gn(e, t, u))
        : (Le && a && $r(t), (t.flags |= 1), _t(e, t, n, u), t.child)
    );
  }
  function Ad(e, t, n, a, i) {
    if ((Xa(t), t.stateNode === null)) {
      var u = hl,
        b = n.contextType;
      (typeof b == 'object' && b !== null && (u = Rt(b)),
        (u = new n(a, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = zs),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        rs(t),
        (b = n.contextType),
        (u.context = typeof b == 'object' && b !== null ? Rt(b) : hl),
        (u.state = t.memoizedState),
        (b = n.getDerivedStateFromProps),
        typeof b == 'function' && (Ds(t, n, b, a), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((b = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          b !== u.state && zs.enqueueReplaceState(u, u.state, null),
          si(t, a, u, i),
          ri(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var R = t.memoizedProps,
        Y = Fa(n, R);
      u.props = Y;
      var J = u.context,
        te = n.contextType;
      ((b = hl), typeof te == 'object' && te !== null && (b = Rt(te)));
      var ae = n.getDerivedStateFromProps;
      ((te = typeof ae == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (R = t.pendingProps !== R),
        te ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((R || J !== b) && hd(t, u, a, b)),
        (da = !1));
      var $ = t.memoizedState;
      ((u.state = $),
        si(t, a, u, i),
        ri(),
        (J = t.memoizedState),
        R || $ !== J || da
          ? (typeof ae == 'function' && (Ds(t, n, ae, a), (J = t.memoizedState)),
            (Y = da || md(t, n, Y, a, $, J, b))
              ? (te ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = J)),
            (u.props = a),
            (u.state = J),
            (u.context = b),
            (a = Y))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1)));
    } else {
      ((u = t.stateNode),
        ss(e, t),
        (b = t.memoizedProps),
        (te = Fa(n, b)),
        (u.props = te),
        (ae = t.pendingProps),
        ($ = u.context),
        (J = n.contextType),
        (Y = hl),
        typeof J == 'object' && J !== null && (Y = Rt(J)),
        (R = n.getDerivedStateFromProps),
        (J = typeof R == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((b !== ae || $ !== Y) && hd(t, u, a, Y)),
        (da = !1),
        ($ = t.memoizedState),
        (u.state = $),
        si(t, a, u, i),
        ri());
      var I = t.memoizedState;
      b !== ae || $ !== I || da || (e !== null && e.dependencies !== null && du(e.dependencies))
        ? (typeof R == 'function' && (Ds(t, n, R, a), (I = t.memoizedState)),
          (te =
            da ||
            md(t, n, te, a, $, I, Y) ||
            (e !== null && e.dependencies !== null && du(e.dependencies)))
            ? (J ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(a, I, Y),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(a, I, Y)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (b === e.memoizedProps && $ === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (b === e.memoizedProps && $ === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = I)),
          (u.props = a),
          (u.state = I),
          (u.context = Y),
          (a = te))
        : (typeof u.componentDidUpdate != 'function' ||
            (b === e.memoizedProps && $ === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (b === e.memoizedProps && $ === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Du(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (n = a && typeof n.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = ka(t, e.child, null, i)), (t.child = ka(t, null, n, i)))
            : _t(e, t, n, i),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Gn(e, t, i)),
      e
    );
  }
  function Od(e, t, n, a) {
    return (Va(), (t.flags |= 256), _t(e, t, n, a), t.child);
  }
  var Ls = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Hs(e) {
    return { baseLanes: e, cachePool: pf() };
  }
  function js(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= It), e);
  }
  function wd(e, t, n) {
    var a = t.pendingProps,
      i = !1,
      u = (t.flags & 128) !== 0,
      b;
    if (
      ((b = u) || (b = e !== null && e.memoizedState === null ? !1 : (st.current & 2) !== 0),
      b && ((i = !0), (t.flags &= -129)),
      (b = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Le) {
        if (
          (i ? va(t) : ga(),
          (e = Pe)
            ? ((e = jm(e, cn)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: sa !== null ? { id: En, overflow: Tn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = of(e)),
                (n.return = t),
                (t.child = n),
                (Mt = t),
                (Pe = null)))
            : (e = null),
          e === null)
        )
          throw ca(t);
        return (bo(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var R = a.children;
      return (
        (a = a.fallback),
        i
          ? (ga(),
            (i = t.mode),
            (R = zu({ mode: 'hidden', children: R }, i)),
            (a = Ya(a, i, n, null)),
            (R.return = t),
            (a.return = t),
            (R.sibling = a),
            (t.child = R),
            (a = t.child),
            (a.memoizedState = Hs(n)),
            (a.childLanes = js(e, b, n)),
            (t.memoizedState = Ls),
            mi(null, a))
          : (va(t), Gs(t, R))
      );
    }
    var Y = e.memoizedState;
    if (Y !== null && ((R = Y.dehydrated), R !== null)) {
      if (u)
        t.flags & 256
          ? (va(t), (t.flags &= -257), (t = Ys(e, t, n)))
          : t.memoizedState !== null
            ? (ga(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (ga(),
              (R = a.fallback),
              (i = t.mode),
              (a = zu({ mode: 'visible', children: a.children }, i)),
              (R = Ya(R, i, n, null)),
              (R.flags |= 2),
              (a.return = t),
              (R.return = t),
              (a.sibling = R),
              (t.child = a),
              ka(t, e.child, null, n),
              (a = t.child),
              (a.memoizedState = Hs(n)),
              (a.childLanes = js(e, b, n)),
              (t.memoizedState = Ls),
              (t = mi(null, a)));
      else if ((va(t), bo(R))) {
        if (((b = R.nextSibling && R.nextSibling.dataset), b)) var J = b.dgst;
        ((b = J),
          (a = Error(h(419))),
          (a.stack = ''),
          (a.digest = b),
          ti({ value: a, source: null, stack: null }),
          (t = Ys(e, t, n)));
      } else if ((ht || pl(e, t, n, !1), (b = (n & e.childLanes) !== 0), ht || b)) {
        if (((b = Ie), b !== null && ((a = ye(b, n)), a !== 0 && a !== Y.retryLane)))
          throw ((Y.retryLane = a), Ga(e, a), qt(b, e, a), Us);
        (So(R) || Vu(), (t = Ys(e, t, n)));
      } else
        So(R)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = Y.treeContext),
            (Pe = dn(R.nextSibling)),
            (Mt = t),
            (Le = !0),
            (oa = null),
            (cn = !1),
            e !== null && df(t, e),
            (t = Gs(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (ga(),
        (R = a.fallback),
        (i = t.mode),
        (Y = e.child),
        (J = Y.sibling),
        (a = Nn(Y, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = Y.subtreeFlags & 65011712),
        J !== null ? (R = Nn(J, R)) : ((R = Ya(R, i, n, null)), (R.flags |= 2)),
        (R.return = t),
        (a.return = t),
        (a.sibling = R),
        (t.child = a),
        mi(null, a),
        (a = t.child),
        (R = e.child.memoizedState),
        R === null
          ? (R = Hs(n))
          : ((i = R.cachePool),
            i !== null
              ? ((Y = dt._currentValue), (i = i.parent !== Y ? { parent: Y, pool: Y } : i))
              : (i = pf()),
            (R = { baseLanes: R.baseLanes | n, cachePool: i })),
        (a.memoizedState = R),
        (a.childLanes = js(e, b, n)),
        (t.memoizedState = Ls),
        mi(e.child, a))
      : (va(t),
        (n = e.child),
        (e = n.sibling),
        (n = Nn(n, { mode: 'visible', children: a.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((b = t.deletions), b === null ? ((t.deletions = [e]), (t.flags |= 16)) : b.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Gs(e, t) {
    return ((t = zu({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function zu(e, t) {
    return ((e = Jt(22, e, null, t)), (e.lanes = 0), e);
  }
  function Ys(e, t, n) {
    return (
      ka(t, e.child, null, n),
      (e = Gs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Dd(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), ts(e.return, t, n));
  }
  function Vs(e, t, n, a, i, u) {
    var b = e.memoizedState;
    b === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: i,
          treeForkCount: u,
        })
      : ((b.isBackwards = t),
        (b.rendering = null),
        (b.renderingStartTime = 0),
        (b.last = a),
        (b.tail = n),
        (b.tailMode = i),
        (b.treeForkCount = u));
  }
  function zd(e, t, n) {
    var a = t.pendingProps,
      i = a.revealOrder,
      u = a.tail;
    a = a.children;
    var b = st.current,
      R = (b & 2) !== 0;
    if (
      (R ? ((b = (b & 1) | 2), (t.flags |= 128)) : (b &= 1),
      ee(st, b),
      _t(e, t, a, n),
      (a = Le ? ei : 0),
      !R && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Dd(e, n, t);
        else if (e.tag === 19) Dd(e, n, t);
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
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate), e !== null && Su(e) === null && (i = n), (n = n.sibling));
        ((n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          Vs(t, !1, i, n, u, a));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Su(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        Vs(t, !0, n, null, u, a);
        break;
      case 'together':
        Vs(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Gn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (xa |= t.lanes), (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((pl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(h(153));
    if (t.child !== null) {
      for (e = t.child, n = Nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = Nn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function qs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && du(e)));
  }
  function Qg(e, t, n) {
    switch (t.tag) {
      case 3:
        (Se(t, t.stateNode.containerInfo), fa(t, dt, e.memoizedState.cache), Va());
        break;
      case 27:
      case 5:
        Ze(t);
        break;
      case 4:
        Se(t, t.stateNode.containerInfo);
        break;
      case 10:
        fa(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), ms(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (va(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? wd(e, t, n)
              : (va(t), (e = Gn(e, t, n)), e !== null ? e.sibling : null);
        va(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((a = (n & t.childLanes) !== 0),
          a || (pl(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
          i)
        ) {
          if (a) return zd(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          ee(st, st.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Cd(e, t, n, t.pendingProps));
      case 24:
        fa(t, dt, e.memoizedState.cache);
    }
    return Gn(e, t, n);
  }
  function Nd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) ht = !0;
      else {
        if (!qs(e, n) && (t.flags & 128) === 0) return ((ht = !1), Qg(e, t, n));
        ht = (e.flags & 131072) !== 0;
      }
    else ((ht = !1), Le && (t.flags & 1048576) !== 0 && ff(t, ei, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Za(t.elementType)), (t.type = e), typeof e == 'function'))
            kr(e)
              ? ((a = Fa(e, a)), (t.tag = 1), (t = Ad(null, t, e, a, n)))
              : ((t.tag = 0), (t = Bs(null, t, e, a, n)));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === G) {
                ((t.tag = 11), (t = bd(null, t, e, a, n)));
                break e;
              } else if (i === D) {
                ((t.tag = 14), (t = Ed(null, t, e, a, n)));
                break e;
              }
            }
            throw ((t = ie(e) || e), Error(h(306, t, '')));
          }
        }
        return t;
      case 0:
        return Bs(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((a = t.type), (i = Fa(a, t.pendingProps)), Ad(e, t, a, i, n));
      case 3:
        e: {
          if ((Se(t, t.stateNode.containerInfo), e === null)) throw Error(h(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((i = u.element), ss(e, t), si(t, a, null, n));
          var b = t.memoizedState;
          if (
            ((a = b.cache),
            fa(t, dt, a),
            a !== u.cache && ns(t, [dt], n, !0),
            ri(),
            (a = b.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: b.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Od(e, t, a, n);
              break e;
            } else if (a !== i) {
              ((i = rn(Error(h(424)), t)), ti(i), (t = Od(e, t, a, n)));
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
                Pe = dn(e.firstChild),
                  Mt = t,
                  Le = !0,
                  oa = null,
                  cn = !0,
                  n = Cf(t, null, a, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((Va(), a === i)) {
              t = Gn(e, t, n);
              break e;
            }
            _t(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Du(e, t),
          e === null
            ? (n = Qm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Le ||
                ((n = t.type),
                (e = t.pendingProps),
                (a = Ju(se.current).createElement(n)),
                (a[Ae] = t),
                (a[Ee] = e),
                At(a, n, e),
                rt(a),
                (t.stateNode = a))
            : (t.memoizedState = Qm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Ze(t),
          e === null &&
            Le &&
            ((a = t.stateNode = Vm(t.type, t.pendingProps, se.current)),
            (Mt = t),
            (cn = !0),
            (i = Pe),
            Ca(t.type) ? ((Eo = i), (Pe = dn(a.firstChild))) : (Pe = i)),
          _t(e, t, t.pendingProps.children, n),
          Du(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Le &&
            ((i = a = Pe) &&
              ((a = S0(a, t.type, t.pendingProps, cn)),
              a !== null
                ? ((t.stateNode = a), (Mt = t), (Pe = dn(a.firstChild)), (cn = !1), (i = !0))
                : (i = !1)),
            i || ca(t)),
          Ze(t),
          (i = t.type),
          (u = t.pendingProps),
          (b = e !== null ? e.memoizedProps : null),
          (a = u.children),
          yo(i, u) ? (a = null) : b !== null && yo(i, b) && (t.flags |= 32),
          t.memoizedState !== null && ((i = vs(e, t, Bg, null, null, n)), (Ai._currentValue = i)),
          Du(e, t),
          _t(e, t, a, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Le &&
            ((e = n = Pe) &&
              ((n = b0(n, t.pendingProps, cn)),
              n !== null ? ((t.stateNode = n), (Mt = t), (Pe = null), (e = !0)) : (e = !1)),
            e || ca(t)),
          null
        );
      case 13:
        return wd(e, t, n);
      case 4:
        return (
          Se(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = ka(t, null, a, n)) : _t(e, t, a, n),
          t.child
        );
      case 11:
        return bd(e, t, t.type, t.pendingProps, n);
      case 7:
        return (_t(e, t, t.pendingProps, n), t.child);
      case 8:
        return (_t(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (_t(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return ((a = t.pendingProps), fa(t, t.type, a.value), _t(e, t, a.children, n), t.child);
      case 9:
        return (
          (i = t.type._context),
          (a = t.pendingProps.children),
          Xa(t),
          (i = Rt(i)),
          (a = a(i)),
          (t.flags |= 1),
          _t(e, t, a, n),
          t.child
        );
      case 14:
        return Ed(e, t, t.type, t.pendingProps, n);
      case 15:
        return Td(e, t, t.type, t.pendingProps, n);
      case 19:
        return zd(e, t, n);
      case 31:
        return Xg(e, t, n);
      case 22:
        return Cd(e, t, n, t.pendingProps);
      case 24:
        return (
          Xa(t),
          (a = Rt(dt)),
          e === null
            ? ((i = is()),
              i === null &&
                ((i = Ie),
                (u = as()),
                (i.pooledCache = u),
                u.refCount++,
                u !== null && (i.pooledCacheLanes |= n),
                (i = u)),
              (t.memoizedState = { parent: a, cache: i }),
              rs(t),
              fa(t, dt, i))
            : ((e.lanes & n) !== 0 && (ss(e, t), si(t, null, null, n), ri()),
              (i = e.memoizedState),
              (u = t.memoizedState),
              i.parent !== a
                ? ((i = { parent: a, cache: a }),
                  (t.memoizedState = i),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i),
                  fa(t, dt, a))
                : ((a = u.cache), fa(t, dt, a), a !== i.cache && ns(t, [dt], n, !0))),
          _t(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Yn(e) {
    e.flags |= 4;
  }
  function Xs(e, t, n, a, i) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (i & 335544128) === i))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (um()) e.flags |= 8192;
        else throw ((Ka = gu), us);
    } else e.flags &= -16777217;
  }
  function Ud(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Fm(t)))
      if (um()) e.flags |= 8192;
      else throw ((Ka = gu), us);
  }
  function Nu(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? ll() : 536870912), (e.lanes |= t), (wl |= t)));
  }
  function hi(e, t) {
    if (!Le)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; ) (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var a = null; n !== null; ) (n.alternate !== null && (a = n), (n = n.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function et(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      a = 0;
    if (t)
      for (var i = e.child; i !== null; )
        ((n |= i.lanes | i.childLanes),
          (a |= i.subtreeFlags & 65011712),
          (a |= i.flags & 65011712),
          (i.return = e),
          (i = i.sibling));
    else
      for (i = e.child; i !== null; )
        ((n |= i.lanes | i.childLanes),
          (a |= i.subtreeFlags),
          (a |= i.flags),
          (i.return = e),
          (i = i.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = n), t);
  }
  function Zg(e, t, n) {
    var a = t.pendingProps;
    switch ((Wr(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (et(t), null);
      case 1:
        return (et(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Ln(dt),
          Ue(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (yl(t)
              ? Yn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Pr())),
          et(t),
          null
        );
      case 26:
        var i = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (Yn(t), u !== null ? (et(t), Ud(t, u)) : (et(t), Xs(t, i, null, a, n)))
            : u
              ? u !== e.memoizedState
                ? (Yn(t), et(t), Ud(t, u))
                : (et(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== a && Yn(t), et(t), Xs(t, i, e, a, n)),
          null
        );
      case 27:
        if ((Ke(t), (n = se.current), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Yn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(h(166));
            return (et(t), null);
          }
          ((e = ue.current), yl(t) ? mf(t) : ((e = Vm(i, a, n)), (t.stateNode = e), Yn(t)));
        }
        return (et(t), null);
      case 5:
        if ((Ke(t), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Yn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(h(166));
            return (et(t), null);
          }
          if (((u = ue.current), yl(t))) mf(t);
          else {
            var b = Ju(se.current);
            switch (u) {
              case 1:
                u = b.createElementNS('http://www.w3.org/2000/svg', i);
                break;
              case 2:
                u = b.createElementNS('http://www.w3.org/1998/Math/MathML', i);
                break;
              default:
                switch (i) {
                  case 'svg':
                    u = b.createElementNS('http://www.w3.org/2000/svg', i);
                    break;
                  case 'math':
                    u = b.createElementNS('http://www.w3.org/1998/Math/MathML', i);
                    break;
                  case 'script':
                    ((u = b.createElement('div')),
                      (u.innerHTML = '<script><\/script>'),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case 'select':
                    ((u =
                      typeof a.is == 'string'
                        ? b.createElement('select', { is: a.is })
                        : b.createElement('select')),
                      a.multiple ? (u.multiple = !0) : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == 'string'
                        ? b.createElement(i, { is: a.is })
                        : b.createElement(i);
                }
            }
            ((u[Ae] = t), (u[Ee] = a));
            e: for (b = t.child; b !== null; ) {
              if (b.tag === 5 || b.tag === 6) u.appendChild(b.stateNode);
              else if (b.tag !== 4 && b.tag !== 27 && b.child !== null) {
                ((b.child.return = b), (b = b.child));
                continue;
              }
              if (b === t) break e;
              for (; b.sibling === null; ) {
                if (b.return === null || b.return === t) break e;
                b = b.return;
              }
              ((b.sibling.return = b.return), (b = b.sibling));
            }
            t.stateNode = u;
            e: switch ((At(u, i, a), i)) {
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
            a && Yn(t);
          }
        }
        return (et(t), Xs(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Yn(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(h(166));
          if (((e = se.current), yl(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (a = null), (i = Mt), i !== null))
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            ((e[Ae] = t),
              (e = !!(
                e.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                wm(e.nodeValue, n)
              )),
              e || ca(t, !0));
          } else ((e = Ju(e).createTextNode(a)), (e[Ae] = t), (t.stateNode = e));
        }
        return (et(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = yl(t)), n !== null)) {
            if (e === null) {
              if (!a) throw Error(h(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(h(557));
              e[Ae] = t;
            } else (Va(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (et(t), (e = !1));
          } else
            ((n = Pr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? ($t(t), t) : ($t(t), null);
          if ((t.flags & 128) !== 0) throw Error(h(558));
        }
        return (et(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = yl(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(h(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(h(317));
              i[Ae] = t;
            } else (Va(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (et(t), (i = !1));
          } else
            ((i = Pr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i),
              (i = !0));
          if (!i) return t.flags & 256 ? ($t(t), t) : ($t(t), null);
        }
        return (
          $t(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = a !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((a = t.child),
                (i = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (i = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== i && (a.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              Nu(t, t.updateQueue),
              et(t),
              null)
        );
      case 4:
        return (Ue(), e === null && fo(t.stateNode.containerInfo), et(t), null);
      case 10:
        return (Ln(t.type), et(t), null);
      case 19:
        if ((Q(st), (a = t.memoizedState), a === null)) return (et(t), null);
        if (((i = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (i) hi(a, !1);
          else {
            if (ut !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Su(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      hi(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Nu(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (sf(n, e), (n = n.sibling));
                  return (ee(st, (st.current & 1) | 2), Le && Un(t, a.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            a.tail !== null &&
              yt() > ju &&
              ((t.flags |= 128), (i = !0), hi(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = Su(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Nu(t, e),
                hi(a, !0),
                a.tail === null && a.tailMode === 'hidden' && !u.alternate && !Le)
              )
                return (et(t), null);
            } else
              2 * yt() - a.renderingStartTime > ju &&
                n !== 536870912 &&
                ((t.flags |= 128), (i = !0), hi(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = a.last), e !== null ? (e.sibling = u) : (t.child = u), (a.last = u));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = yt()),
            (e.sibling = null),
            (n = st.current),
            ee(st, i ? (n & 1) | 2 : n & 1),
            Le && Un(t, a.treeForkCount),
            e)
          : (et(t), null);
      case 22:
      case 23:
        return (
          $t(t),
          ds(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (et(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : et(t),
          (n = t.updateQueue),
          n !== null && Nu(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== n && (t.flags |= 2048),
          e !== null && Q(Qa),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Ln(dt),
          et(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function Kg(e, t) {
    switch ((Wr(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          Ln(dt),
          Ue(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (Ke(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if (($t(t), t.alternate === null)) throw Error(h(340));
          Va();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 13:
        if (($t(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(h(340));
          Va();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Q(st), null);
      case 4:
        return (Ue(), null);
      case 10:
        return (Ln(t.type), null);
      case 22:
      case 23:
        return (
          $t(t),
          ds(),
          e !== null && Q(Qa),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Ln(dt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Bd(e, t) {
    switch ((Wr(t), t.tag)) {
      case 3:
        (Ln(dt), Ue());
        break;
      case 26:
      case 27:
      case 5:
        Ke(t);
        break;
      case 4:
        Ue();
        break;
      case 31:
        t.memoizedState !== null && $t(t);
        break;
      case 13:
        $t(t);
        break;
      case 19:
        Q(st);
        break;
      case 10:
        Ln(t.type);
        break;
      case 22:
      case 23:
        ($t(t), ds(), e !== null && Q(Qa));
        break;
      case 24:
        Ln(dt);
    }
  }
  function vi(e, t) {
    try {
      var n = t.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var u = n.create,
              b = n.inst;
            ((a = u()), (b.destroy = a));
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (R) {
      Qe(t, t.return, R);
    }
  }
  function ya(e, t, n) {
    try {
      var a = t.updateQueue,
        i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var b = a.inst,
              R = b.destroy;
            if (R !== void 0) {
              ((b.destroy = void 0), (i = t));
              var Y = n,
                J = R;
              try {
                J();
              } catch (te) {
                Qe(i, Y, te);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (te) {
      Qe(t, t.return, te);
    }
  }
  function Ld(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Rf(t, n);
      } catch (a) {
        Qe(e, e.return, a);
      }
    }
  }
  function Hd(e, t, n) {
    ((n.props = Fa(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      Qe(e, t, a);
    }
  }
  function gi(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
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
        typeof n == 'function' ? (e.refCleanup = n(a)) : (n.current = a);
      }
    } catch (i) {
      Qe(e, t, i);
    }
  }
  function Cn(e, t) {
    var n = e.ref,
      a = e.refCleanup;
    if (n !== null)
      if (typeof a == 'function')
        try {
          a();
        } catch (i) {
          Qe(e, t, i);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof n == 'function')
        try {
          n(null);
        } catch (i) {
          Qe(e, t, i);
        }
      else n.current = null;
  }
  function jd(e) {
    var t = e.type,
      n = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          n.autoFocus && a.focus();
          break e;
        case 'img':
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (i) {
      Qe(e, e.return, i);
    }
  }
  function Qs(e, t, n) {
    try {
      var a = e.stateNode;
      (h0(a, e.type, n, t), (a[Ee] = t));
    } catch (i) {
      Qe(e, e.return, i);
    }
  }
  function Gd(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Ca(e.type)) || e.tag === 4
    );
  }
  function Zs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Gd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if ((e.tag === 27 && Ca(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ks(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === 'HTML'
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t = n.nodeType === 9 ? n.body : n.nodeName === 'HTML' ? n.ownerDocument.body : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Dn)));
    else if (
      a !== 4 &&
      (a === 27 && Ca(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (Ks(e, t, n), e = e.sibling; e !== null; ) (Ks(e, t, n), (e = e.sibling));
  }
  function Uu(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (a !== 4 && (a === 27 && Ca(e.type) && (n = e.stateNode), (e = e.child), e !== null))
      for (Uu(e, t, n), e = e.sibling; e !== null; ) (Uu(e, t, n), (e = e.sibling));
  }
  function Yd(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0]);
      (At(t, a, n), (t[Ae] = e), (t[Ee] = n));
    } catch (u) {
      Qe(e, e.return, u);
    }
  }
  var Vn = !1,
    vt = !1,
    ks = !1,
    Vd = typeof WeakSet == 'function' ? WeakSet : Set,
    Et = null;
  function kg(e, t) {
    if (((e = e.containerInfo), (vo = tr), (e = Ic(e)), Yr(e))) {
      if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var i = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              (n.nodeType, u.nodeType);
            } catch {
              n = null;
              break e;
            }
            var b = 0,
              R = -1,
              Y = -1,
              J = 0,
              te = 0,
              ae = e,
              $ = null;
            t: for (;;) {
              for (
                var I;
                ae !== n || (i !== 0 && ae.nodeType !== 3) || (R = b + i),
                  ae !== u || (a !== 0 && ae.nodeType !== 3) || (Y = b + a),
                  ae.nodeType === 3 && (b += ae.nodeValue.length),
                  (I = ae.firstChild) !== null;
              )
                (($ = ae), (ae = I));
              for (;;) {
                if (ae === e) break t;
                if (
                  ($ === n && ++J === i && (R = b),
                  $ === u && ++te === a && (Y = b),
                  (I = ae.nextSibling) !== null)
                )
                  break;
                ((ae = $), ($ = ae.parentNode));
              }
              ae = I;
            }
            n = R === -1 || Y === -1 ? null : { start: R, end: Y };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (go = { focusedElem: e, selectionRange: n }, tr = !1, Et = t; Et !== null; )
      if (((t = Et), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (Et = e));
      else
        for (; Et !== null; ) {
          switch (((t = Et), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue), (e = e !== null ? e.events : null), e !== null)
              )
                for (n = 0; n < e.length; n++) ((i = e[n]), (i.ref.impl = i.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                ((e = void 0),
                  (n = t),
                  (i = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = n.stateNode));
                try {
                  var ce = Fa(n.type, i);
                  ((e = a.getSnapshotBeforeUpdate(ce, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (pe) {
                  Qe(n, n.return, pe);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) xo(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      xo(e);
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
              if ((e & 1024) !== 0) throw Error(h(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Et = e));
            break;
          }
          Et = t.return;
        }
  }
  function qd(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Xn(e, n), a & 4 && vi(5, n));
        break;
      case 1:
        if ((Xn(e, n), a & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (b) {
              Qe(n, n.return, b);
            }
          else {
            var i = Fa(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (b) {
              Qe(n, n.return, b);
            }
          }
        (a & 64 && Ld(n), a & 512 && gi(n, n.return));
        break;
      case 3:
        if ((Xn(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Rf(e, t);
          } catch (b) {
            Qe(n, n.return, b);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Yd(n);
      case 26:
      case 5:
        (Xn(e, n), t === null && a & 4 && jd(n), a & 512 && gi(n, n.return));
        break;
      case 12:
        Xn(e, n);
        break;
      case 31:
        (Xn(e, n), a & 4 && Zd(e, n));
        break;
      case 13:
        (Xn(e, n),
          a & 4 && Kd(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((n = n0.bind(null, n)), E0(e, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || Vn), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || vt), (i = Vn));
          var u = vt;
          ((Vn = a),
            (vt = t) && !u ? Qn(e, n, (n.subtreeFlags & 8772) !== 0) : Xn(e, n),
            (Vn = i),
            (vt = u));
        }
        break;
      case 30:
        break;
      default:
        Xn(e, n);
    }
  }
  function Xd(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Xd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && vn(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var tt = null,
    jt = !1;
  function qn(e, t, n) {
    for (n = n.child; n !== null; ) (Qd(e, t, n), (n = n.sibling));
  }
  function Qd(e, t, n) {
    if (Nt && typeof Nt.onCommitFiberUnmount == 'function')
      try {
        Nt.onCommitFiberUnmount(ia, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (vt || Cn(n, t),
          qn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        vt || Cn(n, t);
        var a = tt,
          i = jt;
        (Ca(n.type) && ((tt = n.stateNode), (jt = !1)),
          qn(e, t, n),
          Mi(n.stateNode),
          (tt = a),
          (jt = i));
        break;
      case 5:
        vt || Cn(n, t);
      case 6:
        if (((a = tt), (i = jt), (tt = null), qn(e, t, n), (tt = a), (jt = i), tt !== null))
          if (jt)
            try {
              (tt.nodeType === 9
                ? tt.body
                : tt.nodeName === 'HTML'
                  ? tt.ownerDocument.body
                  : tt
              ).removeChild(n.stateNode);
            } catch (u) {
              Qe(n, t, u);
            }
          else
            try {
              tt.removeChild(n.stateNode);
            } catch (u) {
              Qe(n, t, u);
            }
        break;
      case 18:
        tt !== null &&
          (jt
            ? ((e = tt),
              Lm(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                n.stateNode
              ),
              jl(e))
            : Lm(tt, n.stateNode));
        break;
      case 4:
        ((a = tt),
          (i = jt),
          (tt = n.stateNode.containerInfo),
          (jt = !0),
          qn(e, t, n),
          (tt = a),
          (jt = i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ya(2, n, t), vt || ya(4, n, t), qn(e, t, n));
        break;
      case 1:
        (vt ||
          (Cn(n, t), (a = n.stateNode), typeof a.componentWillUnmount == 'function' && Hd(n, t, a)),
          qn(e, t, n));
        break;
      case 21:
        qn(e, t, n);
        break;
      case 22:
        ((vt = (a = vt) || n.memoizedState !== null), qn(e, t, n), (vt = a));
        break;
      default:
        qn(e, t, n);
    }
  }
  function Zd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        jl(e);
      } catch (n) {
        Qe(t, t.return, n);
      }
    }
  }
  function Kd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        jl(e);
      } catch (n) {
        Qe(t, t.return, n);
      }
  }
  function Jg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Vd()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Vd()),
          t
        );
      default:
        throw Error(h(435, e.tag));
    }
  }
  function Bu(e, t) {
    var n = Jg(e);
    t.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var i = a0.bind(null, e, a);
        a.then(i, i);
      }
    });
  }
  function Gt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a],
          u = e,
          b = t,
          R = b;
        e: for (; R !== null; ) {
          switch (R.tag) {
            case 27:
              if (Ca(R.type)) {
                ((tt = R.stateNode), (jt = !1));
                break e;
              }
              break;
            case 5:
              ((tt = R.stateNode), (jt = !1));
              break e;
            case 3:
            case 4:
              ((tt = R.stateNode.containerInfo), (jt = !0));
              break e;
          }
          R = R.return;
        }
        if (tt === null) throw Error(h(160));
        (Qd(u, b, i),
          (tt = null),
          (jt = !1),
          (u = i.alternate),
          u !== null && (u.return = null),
          (i.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (kd(t, e), (t = t.sibling));
  }
  var yn = null;
  function kd(e, t) {
    var n = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Gt(t, e), Yt(e), a & 4 && (ya(3, e, e.return), vi(3, e), ya(5, e, e.return)));
        break;
      case 1:
        (Gt(t, e),
          Yt(e),
          a & 512 && (vt || n === null || Cn(n, n.return)),
          a & 64 &&
            Vn &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var i = yn;
        if ((Gt(t, e), Yt(e), a & 512 && (vt || n === null || Cn(n, n.return)), a & 4)) {
          var u = n !== null ? n.memoizedState : null;
          if (((a = e.memoizedState), n === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type), (n = e.memoizedProps), (i = i.ownerDocument || i));
                  t: switch (a) {
                    case 'title':
                      ((u = i.getElementsByTagName('title')[0]),
                        (!u ||
                          u[ft] ||
                          u[Ae] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = i.createElement(a)),
                          i.head.insertBefore(u, i.querySelector('head > title'))),
                        At(u, a, n),
                        (u[Ae] = e),
                        rt(u),
                        (a = u));
                      break e;
                    case 'link':
                      var b = km('link', 'href', i).get(a + (n.href || ''));
                      if (b) {
                        for (var R = 0; R < b.length; R++)
                          if (
                            ((u = b[R]),
                            u.getAttribute('href') ===
                              (n.href == null || n.href === '' ? null : n.href) &&
                              u.getAttribute('rel') === (n.rel == null ? null : n.rel) &&
                              u.getAttribute('title') === (n.title == null ? null : n.title) &&
                              u.getAttribute('crossorigin') ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            b.splice(R, 1);
                            break t;
                          }
                      }
                      ((u = i.createElement(a)), At(u, a, n), i.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((b = km('meta', 'content', i).get(a + (n.content || '')))) {
                        for (R = 0; R < b.length; R++)
                          if (
                            ((u = b[R]),
                            u.getAttribute('content') ===
                              (n.content == null ? null : '' + n.content) &&
                              u.getAttribute('name') === (n.name == null ? null : n.name) &&
                              u.getAttribute('property') ===
                                (n.property == null ? null : n.property) &&
                              u.getAttribute('http-equiv') ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              u.getAttribute('charset') === (n.charSet == null ? null : n.charSet))
                          ) {
                            b.splice(R, 1);
                            break t;
                          }
                      }
                      ((u = i.createElement(a)), At(u, a, n), i.head.appendChild(u));
                      break;
                    default:
                      throw Error(h(468, a));
                  }
                  ((u[Ae] = e), rt(u), (a = u));
                }
                e.stateNode = a;
              } else Jm(i, e.type, e.stateNode);
            else e.stateNode = Km(i, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                a === null ? Jm(i, e.type, e.stateNode) : Km(i, a, e.memoizedProps))
              : a === null && e.stateNode !== null && Qs(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Gt(t, e),
          Yt(e),
          a & 512 && (vt || n === null || Cn(n, n.return)),
          n !== null && a & 4 && Qs(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((Gt(t, e), Yt(e), a & 512 && (vt || n === null || Cn(n, n.return)), e.flags & 32)) {
          i = e.stateNode;
          try {
            rl(i, '');
          } catch (ce) {
            Qe(e, e.return, ce);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), Qs(e, i, n !== null ? n.memoizedProps : i)),
          a & 1024 && (ks = !0));
        break;
      case 6:
        if ((Gt(t, e), Yt(e), a & 4)) {
          if (e.stateNode === null) throw Error(h(162));
          ((a = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = a;
          } catch (ce) {
            Qe(e, e.return, ce);
          }
        }
        break;
      case 3:
        if (
          ((Wu = null),
          (i = yn),
          (yn = Fu(t.containerInfo)),
          Gt(t, e),
          (yn = i),
          Yt(e),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            jl(t.containerInfo);
          } catch (ce) {
            Qe(e, e.return, ce);
          }
        ks && ((ks = !1), Jd(e));
        break;
      case 4:
        ((a = yn), (yn = Fu(e.stateNode.containerInfo)), Gt(t, e), Yt(e), (yn = a));
        break;
      case 12:
        (Gt(t, e), Yt(e));
        break;
      case 31:
        (Gt(t, e),
          Yt(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Bu(e, a))));
        break;
      case 13:
        (Gt(t, e),
          Yt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (Hu = yt()),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Bu(e, a))));
        break;
      case 22:
        i = e.memoizedState !== null;
        var Y = n !== null && n.memoizedState !== null,
          J = Vn,
          te = vt;
        if (((Vn = J || i), (vt = te || Y), Gt(t, e), (vt = te), (Vn = J), Yt(e), a & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (n === null || Y || Vn || vt || $a(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                Y = n = t;
                try {
                  if (((u = Y.stateNode), i))
                    ((b = u.style),
                      typeof b.setProperty == 'function'
                        ? b.setProperty('display', 'none', 'important')
                        : (b.display = 'none'));
                  else {
                    R = Y.stateNode;
                    var ae = Y.memoizedProps.style,
                      $ = ae != null && ae.hasOwnProperty('display') ? ae.display : null;
                    R.style.display = $ == null || typeof $ == 'boolean' ? '' : ('' + $).trim();
                  }
                } catch (ce) {
                  Qe(Y, Y.return, ce);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                Y = t;
                try {
                  Y.stateNode.nodeValue = i ? '' : Y.memoizedProps;
                } catch (ce) {
                  Qe(Y, Y.return, ce);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                Y = t;
                try {
                  var I = Y.stateNode;
                  i ? Hm(I, !0) : Hm(Y.stateNode, !1);
                } catch (ce) {
                  Qe(Y, Y.return, ce);
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
              (n === t && (n = null), (t = t.return));
            }
            (n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling));
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null && ((n = a.retryQueue), n !== null && ((a.retryQueue = null), Bu(e, n))));
        break;
      case 19:
        (Gt(t, e),
          Yt(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Bu(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Gt(t, e), Yt(e));
    }
  }
  function Yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (Gd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(h(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode,
              u = Zs(e);
            Uu(e, u, i);
            break;
          case 5:
            var b = n.stateNode;
            n.flags & 32 && (rl(b, ''), (n.flags &= -33));
            var R = Zs(e);
            Uu(e, R, b);
            break;
          case 3:
          case 4:
            var Y = n.stateNode.containerInfo,
              J = Zs(e);
            Ks(e, J, Y);
            break;
          default:
            throw Error(h(161));
        }
      } catch (te) {
        Qe(e, e.return, te);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Jd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Jd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function Xn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (qd(e, t.alternate, t), (t = t.sibling));
  }
  function $a(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ya(4, t, t.return), $a(t));
          break;
        case 1:
          Cn(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == 'function' && Hd(t, t.return, n), $a(t));
          break;
        case 27:
          Mi(t.stateNode);
        case 26:
        case 5:
          (Cn(t, t.return), $a(t));
          break;
        case 22:
          t.memoizedState === null && $a(t);
          break;
        case 30:
          $a(t);
          break;
        default:
          $a(t);
      }
      e = e.sibling;
    }
  }
  function Qn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        i = e,
        u = t,
        b = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Qn(i, u, n), vi(4, u));
          break;
        case 1:
          if ((Qn(i, u, n), (a = u), (i = a.stateNode), typeof i.componentDidMount == 'function'))
            try {
              i.componentDidMount();
            } catch (J) {
              Qe(a, a.return, J);
            }
          if (((a = u), (i = a.updateQueue), i !== null)) {
            var R = a.stateNode;
            try {
              var Y = i.shared.hiddenCallbacks;
              if (Y !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < Y.length; i++) Mf(Y[i], R);
            } catch (J) {
              Qe(a, a.return, J);
            }
          }
          (n && b & 64 && Ld(u), gi(u, u.return));
          break;
        case 27:
          Yd(u);
        case 26:
        case 5:
          (Qn(i, u, n), n && a === null && b & 4 && jd(u), gi(u, u.return));
          break;
        case 12:
          Qn(i, u, n);
          break;
        case 31:
          (Qn(i, u, n), n && b & 4 && Zd(i, u));
          break;
        case 13:
          (Qn(i, u, n), n && b & 4 && Kd(i, u));
          break;
        case 22:
          (u.memoizedState === null && Qn(i, u, n), gi(u, u.return));
          break;
        case 30:
          break;
        default:
          Qn(i, u, n);
      }
      t = t.sibling;
    }
  }
  function Js(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && ni(n)));
  }
  function Fs(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && ni(e)));
  }
  function pn(e, t, n, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Fd(e, t, n, a), (t = t.sibling));
  }
  function Fd(e, t, n, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (pn(e, t, n, a), i & 2048 && vi(9, t));
        break;
      case 1:
        pn(e, t, n, a);
        break;
      case 3:
        (pn(e, t, n, a),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && ni(e))));
        break;
      case 12:
        if (i & 2048) {
          (pn(e, t, n, a), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              b = u.id,
              R = u.onPostCommit;
            typeof R == 'function' &&
              R(b, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (Y) {
            Qe(t, t.return, Y);
          }
        } else pn(e, t, n, a);
        break;
      case 31:
        pn(e, t, n, a);
        break;
      case 13:
        pn(e, t, n, a);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (b = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? pn(e, t, n, a)
              : yi(e, t)
            : u._visibility & 2
              ? pn(e, t, n, a)
              : ((u._visibility |= 2), _l(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          i & 2048 && Js(b, t));
        break;
      case 24:
        (pn(e, t, n, a), i & 2048 && Fs(t.alternate, t));
        break;
      default:
        pn(e, t, n, a);
    }
  }
  function _l(e, t, n, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e,
        b = t,
        R = n,
        Y = a,
        J = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          (_l(u, b, R, Y, i), vi(8, b));
          break;
        case 23:
          break;
        case 22:
          var te = b.stateNode;
          (b.memoizedState !== null
            ? te._visibility & 2
              ? _l(u, b, R, Y, i)
              : yi(u, b)
            : ((te._visibility |= 2), _l(u, b, R, Y, i)),
            i && J & 2048 && Js(b.alternate, b));
          break;
        case 24:
          (_l(u, b, R, Y, i), i && J & 2048 && Fs(b.alternate, b));
          break;
        default:
          _l(u, b, R, Y, i);
      }
      t = t.sibling;
    }
  }
  function yi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          a = t,
          i = a.flags;
        switch (a.tag) {
          case 22:
            (yi(n, a), i & 2048 && Js(a.alternate, a));
            break;
          case 24:
            (yi(n, a), i & 2048 && Fs(a.alternate, a));
            break;
          default:
            yi(n, a);
        }
        t = t.sibling;
      }
  }
  var pi = 8192;
  function Al(e, t, n) {
    if (e.subtreeFlags & pi) for (e = e.child; e !== null; ) ($d(e, t, n), (e = e.sibling));
  }
  function $d(e, t, n) {
    switch (e.tag) {
      case 26:
        (Al(e, t, n),
          e.flags & pi && e.memoizedState !== null && U0(n, yn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Al(e, t, n);
        break;
      case 3:
      case 4:
        var a = yn;
        ((yn = Fu(e.stateNode.containerInfo)), Al(e, t, n), (yn = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = pi), (pi = 16777216), Al(e, t, n), (pi = a))
            : Al(e, t, n));
        break;
      default:
        Al(e, t, n);
    }
  }
  function Wd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function xi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((Et = a), Pd(a, e));
        }
      Wd(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Id(e), (e = e.sibling));
  }
  function Id(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (xi(e), e.flags & 2048 && ya(9, e, e.return));
        break;
      case 3:
        xi(e);
        break;
      case 12:
        xi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Lu(e))
          : xi(e);
        break;
      default:
        xi(e);
    }
  }
  function Lu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((Et = a), Pd(a, e));
        }
      Wd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (ya(8, t, t.return), Lu(t));
          break;
        case 22:
          ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), Lu(t)));
          break;
        default:
          Lu(t);
      }
      e = e.sibling;
    }
  }
  function Pd(e, t) {
    for (; Et !== null; ) {
      var n = Et;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ya(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          ni(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (Et = a));
      else
        e: for (n = e; Et !== null; ) {
          a = Et;
          var i = a.sibling,
            u = a.return;
          if ((Xd(a), a === n)) {
            Et = null;
            break e;
          }
          if (i !== null) {
            ((i.return = u), (Et = i));
            break e;
          }
          Et = u;
        }
    }
  }
  var Fg = {
      getCacheForType: function (e) {
        var t = Rt(dt),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return Rt(dt).controller.signal;
      },
    },
    $g = typeof WeakMap == 'function' ? WeakMap : Map,
    Ge = 0,
    Ie = null,
    we = null,
    ze = 0,
    Xe = 0,
    Wt = null,
    pa = !1,
    Ol = !1,
    $s = !1,
    Zn = 0,
    ut = 0,
    xa = 0,
    Wa = 0,
    Ws = 0,
    It = 0,
    wl = 0,
    Si = null,
    Vt = null,
    Is = !1,
    Hu = 0,
    em = 0,
    ju = 1 / 0,
    Gu = null,
    Sa = null,
    xt = 0,
    ba = null,
    Dl = null,
    Kn = 0,
    Ps = 0,
    eo = null,
    tm = null,
    bi = 0,
    to = null;
  function Pt() {
    return (Ge & 2) !== 0 && ze !== 0 ? ze & -ze : M.T !== null ? ro() : me();
  }
  function nm() {
    if (It === 0)
      if ((ze & 536870912) === 0 || Le) {
        var e = tl;
        ((tl <<= 1), (tl & 3932160) === 0 && (tl = 262144), (It = e));
      } else It = 536870912;
    return ((e = Ft.current), e !== null && (e.flags |= 32), It);
  }
  function qt(e, t, n) {
    (((e === Ie && (Xe === 2 || Xe === 9)) || e.cancelPendingCommit !== null) &&
      (zl(e, 0), Ea(e, ze, It, !1)),
      Ua(e, n),
      ((Ge & 2) === 0 || e !== Ie) &&
        (e === Ie && ((Ge & 2) === 0 && (Wa |= n), ut === 4 && Ea(e, ze, It, !1)), Mn(e)));
  }
  function am(e, t, n) {
    if ((Ge & 6) !== 0) throw Error(h(327));
    var a = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || nn(e, t),
      i = a ? Pg(e, t) : ao(e, t, !0),
      u = a;
    do {
      if (i === 0) {
        Ol && !a && Ea(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !Wg(n))) {
          ((i = ao(e, t, !1)), (u = !1));
          continue;
        }
        if (i === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var b = 0;
          else
            ((b = e.pendingLanes & -536870913), (b = b !== 0 ? b : b & 536870912 ? 536870912 : 0));
          if (b !== 0) {
            t = b;
            e: {
              var R = e;
              i = Si;
              var Y = R.current.memoizedState.isDehydrated;
              if ((Y && (zl(R, b).flags |= 256), (b = ao(R, b, !1)), b !== 2)) {
                if ($s && !Y) {
                  ((R.errorRecoveryDisabledLanes |= u), (Wa |= u), (i = 4));
                  break e;
                }
                ((u = Vt), (Vt = i), u !== null && (Vt === null ? (Vt = u) : Vt.push.apply(Vt, u)));
              }
              i = b;
            }
            if (((u = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (zl(e, 0), Ea(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (u = i), u)) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ea(a, t, It, !pa);
              break e;
            case 2:
              Vt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && ((i = Hu + 300 - yt()), 10 < i)) {
            if ((Ea(a, t, It, !pa), al(a, 0, !0) !== 0)) break e;
            ((Kn = t),
              (a.timeoutHandle = Um(
                lm.bind(null, a, n, Vt, Gu, Is, t, It, Wa, wl, pa, u, 'Throttled', -0, 0),
                i
              )));
            break e;
          }
          lm(a, n, Vt, Gu, Is, t, It, Wa, wl, pa, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Mn(e);
  }
  function lm(e, t, n, a, i, u, b, R, Y, J, te, ae, $, I) {
    if (
      ((e.timeoutHandle = -1), (ae = t.subtreeFlags), ae & 8192 || (ae & 16785408) === 16785408)
    ) {
      ((ae = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Dn,
      }),
        $d(t, u, ae));
      var ce = (u & 62914560) === u ? Hu - yt() : (u & 4194048) === u ? em - yt() : 0;
      if (((ce = B0(ae, ce)), ce !== null)) {
        ((Kn = u),
          (e.cancelPendingCommit = ce(
            dm.bind(null, e, t, u, n, a, i, b, R, Y, te, ae, null, $, I)
          )),
          Ea(e, u, b, !J));
        return;
      }
    }
    dm(e, t, u, n, a, i, b, R, Y);
  }
  function Wg(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var i = n[a],
            u = i.getSnapshot;
          i = i.value;
          try {
            if (!kt(u(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
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
  function Ea(e, t, n, a) {
    ((t &= ~Ws),
      (t &= ~Wa),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var i = t; 0 < i; ) {
      var u = 31 - pt(i),
        b = 1 << u;
      ((a[u] = -1), (i &= ~b));
    }
    n !== 0 && Fi(e, n, t);
  }
  function Yu() {
    return (Ge & 6) === 0 ? (Ei(0), !1) : !0;
  }
  function no() {
    if (we !== null) {
      if (Xe === 0) var e = we.return;
      else ((e = we), (Bn = qa = null), ps(e), (El = null), (li = 0), (e = we));
      for (; e !== null; ) (Bd(e.alternate, e), (e = e.return));
      we = null;
    }
  }
  function zl(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), y0(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (Kn = 0),
      no(),
      (Ie = e),
      (we = n = Nn(e.current, null)),
      (ze = t),
      (Xe = 0),
      (Wt = null),
      (pa = !1),
      (Ol = nn(e, t)),
      ($s = !1),
      (wl = It = Ws = Wa = xa = ut = 0),
      (Vt = Si = null),
      (Is = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - pt(a),
          u = 1 << i;
        ((t |= e[i]), (a &= ~u));
      }
    return ((Zn = t), ru(), n);
  }
  function im(e, t) {
    ((Ce = null),
      (M.H = di),
      t === bl || t === vu
        ? ((t = bf()), (Xe = 3))
        : t === us
          ? ((t = bf()), (Xe = 4))
          : (Xe =
              t === Us
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (Wt = t),
      we === null && ((ut = 1), Ou(e, rn(t, e.current))));
  }
  function um() {
    var e = Ft.current;
    return e === null
      ? !0
      : (ze & 4194048) === ze
        ? fn === null
        : (ze & 62914560) === ze || (ze & 536870912) !== 0
          ? e === fn
          : !1;
  }
  function rm() {
    var e = M.H;
    return ((M.H = di), e === null ? di : e);
  }
  function sm() {
    var e = M.A;
    return ((M.A = Fg), e);
  }
  function Vu() {
    ((ut = 4),
      pa || ((ze & 4194048) !== ze && Ft.current !== null) || (Ol = !0),
      ((xa & 134217727) === 0 && (Wa & 134217727) === 0) || Ie === null || Ea(Ie, ze, It, !1));
  }
  function ao(e, t, n) {
    var a = Ge;
    Ge |= 2;
    var i = rm(),
      u = sm();
    ((Ie !== e || ze !== t) && ((Gu = null), zl(e, t)), (t = !1));
    var b = ut;
    e: do
      try {
        if (Xe !== 0 && we !== null) {
          var R = we,
            Y = Wt;
          switch (Xe) {
            case 8:
              (no(), (b = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ft.current === null && (t = !0);
              var J = Xe;
              if (((Xe = 0), (Wt = null), Nl(e, R, Y, J), n && Ol)) {
                b = 0;
                break e;
              }
              break;
            default:
              ((J = Xe), (Xe = 0), (Wt = null), Nl(e, R, Y, J));
          }
        }
        (Ig(), (b = ut));
        break;
      } catch (te) {
        im(e, te);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Bn = qa = null),
      (Ge = a),
      (M.H = i),
      (M.A = u),
      we === null && ((Ie = null), (ze = 0), ru()),
      b
    );
  }
  function Ig() {
    for (; we !== null; ) om(we);
  }
  function Pg(e, t) {
    var n = Ge;
    Ge |= 2;
    var a = rm(),
      i = sm();
    Ie !== e || ze !== t ? ((Gu = null), (ju = yt() + 500), zl(e, t)) : (Ol = nn(e, t));
    e: do
      try {
        if (Xe !== 0 && we !== null) {
          t = we;
          var u = Wt;
          t: switch (Xe) {
            case 1:
              ((Xe = 0), (Wt = null), Nl(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (xf(u)) {
                ((Xe = 0), (Wt = null), cm(t));
                break;
              }
              ((t = function () {
                ((Xe !== 2 && Xe !== 9) || Ie !== e || (Xe = 7), Mn(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              Xe = 7;
              break e;
            case 4:
              Xe = 5;
              break e;
            case 7:
              xf(u) ? ((Xe = 0), (Wt = null), cm(t)) : ((Xe = 0), (Wt = null), Nl(e, t, u, 7));
              break;
            case 5:
              var b = null;
              switch (we.tag) {
                case 26:
                  b = we.memoizedState;
                case 5:
                case 27:
                  var R = we;
                  if (b ? Fm(b) : R.stateNode.complete) {
                    ((Xe = 0), (Wt = null));
                    var Y = R.sibling;
                    if (Y !== null) we = Y;
                    else {
                      var J = R.return;
                      J !== null ? ((we = J), qu(J)) : (we = null);
                    }
                    break t;
                  }
              }
              ((Xe = 0), (Wt = null), Nl(e, t, u, 5));
              break;
            case 6:
              ((Xe = 0), (Wt = null), Nl(e, t, u, 6));
              break;
            case 8:
              (no(), (ut = 6));
              break e;
            default:
              throw Error(h(462));
          }
        }
        e0();
        break;
      } catch (te) {
        im(e, te);
      }
    while (!0);
    return (
      (Bn = qa = null),
      (M.H = a),
      (M.A = i),
      (Ge = n),
      we !== null ? 0 : ((Ie = null), (ze = 0), ru(), ut)
    );
  }
  function e0() {
    for (; we !== null && !aa(); ) om(we);
  }
  function om(e) {
    var t = Nd(e.alternate, e, Zn);
    ((e.memoizedProps = e.pendingProps), t === null ? qu(e) : (we = t));
  }
  function cm(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = _d(n, t, t.pendingProps, t.type, void 0, ze);
        break;
      case 11:
        t = _d(n, t, t.pendingProps, t.type.render, t.ref, ze);
        break;
      case 5:
        ps(t);
      default:
        (Bd(n, t), (t = we = sf(t, Zn)), (t = Nd(n, t, Zn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? qu(e) : (we = t));
  }
  function Nl(e, t, n, a) {
    ((Bn = qa = null), ps(t), (El = null), (li = 0));
    var i = t.return;
    try {
      if (qg(e, i, t, n, ze)) {
        ((ut = 1), Ou(e, rn(n, e.current)), (we = null));
        return;
      }
    } catch (u) {
      if (i !== null) throw ((we = i), u);
      ((ut = 1), Ou(e, rn(n, e.current)), (we = null));
      return;
    }
    t.flags & 32768
      ? (Le || a === 1
          ? (e = !0)
          : Ol || (ze & 536870912) !== 0
            ? (e = !1)
            : ((pa = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Ft.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        fm(t, e))
      : qu(t);
  }
  function qu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        fm(t, pa);
        return;
      }
      e = t.return;
      var n = Zg(t.alternate, t, Zn);
      if (n !== null) {
        we = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        we = t;
        return;
      }
      we = t = e;
    } while (t !== null);
    ut === 0 && (ut = 5);
  }
  function fm(e, t) {
    do {
      var n = Kg(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (we = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        we = e;
        return;
      }
      we = e = n;
    } while (e !== null);
    ((ut = 6), (we = null));
  }
  function dm(e, t, n, a, i, u, b, R, Y) {
    e.cancelPendingCommit = null;
    do Xu();
    while (xt !== 0);
    if ((Ge & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === e.current) throw Error(h(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Zr),
        Tr(e, n, u, b, R, Y),
        e === Ie && ((we = Ie = null), (ze = 0)),
        (Dl = t),
        (ba = e),
        (Kn = n),
        (Ps = u),
        (eo = i),
        (tm = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            l0(Kt, function () {
              return (ym(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = M.T), (M.T = null), (i = z.p), (z.p = 2), (b = Ge), (Ge |= 4));
        try {
          kg(e, t, n);
        } finally {
          ((Ge = b), (z.p = i), (M.T = a));
        }
      }
      ((xt = 1), mm(), hm(), vm());
    }
  }
  function mm() {
    if (xt === 1) {
      xt = 0;
      var e = ba,
        t = Dl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = M.T), (M.T = null));
        var a = z.p;
        z.p = 2;
        var i = Ge;
        Ge |= 4;
        try {
          kd(t, e);
          var u = go,
            b = Ic(e.containerInfo),
            R = u.focusedElem,
            Y = u.selectionRange;
          if (b !== R && R && R.ownerDocument && Wc(R.ownerDocument.documentElement, R)) {
            if (Y !== null && Yr(R)) {
              var J = Y.start,
                te = Y.end;
              if ((te === void 0 && (te = J), 'selectionStart' in R))
                ((R.selectionStart = J), (R.selectionEnd = Math.min(te, R.value.length)));
              else {
                var ae = R.ownerDocument || document,
                  $ = (ae && ae.defaultView) || window;
                if ($.getSelection) {
                  var I = $.getSelection(),
                    ce = R.textContent.length,
                    pe = Math.min(Y.start, ce),
                    $e = Y.end === void 0 ? pe : Math.min(Y.end, ce);
                  !I.extend && pe > $e && ((b = $e), ($e = pe), (pe = b));
                  var Z = $c(R, pe),
                    X = $c(R, $e);
                  if (
                    Z &&
                    X &&
                    (I.rangeCount !== 1 ||
                      I.anchorNode !== Z.node ||
                      I.anchorOffset !== Z.offset ||
                      I.focusNode !== X.node ||
                      I.focusOffset !== X.offset)
                  ) {
                    var k = ae.createRange();
                    (k.setStart(Z.node, Z.offset),
                      I.removeAllRanges(),
                      pe > $e
                        ? (I.addRange(k), I.extend(X.node, X.offset))
                        : (k.setEnd(X.node, X.offset), I.addRange(k)));
                  }
                }
              }
            }
            for (ae = [], I = R; (I = I.parentNode); )
              I.nodeType === 1 && ae.push({ element: I, left: I.scrollLeft, top: I.scrollTop });
            for (typeof R.focus == 'function' && R.focus(), R = 0; R < ae.length; R++) {
              var ne = ae[R];
              ((ne.element.scrollLeft = ne.left), (ne.element.scrollTop = ne.top));
            }
          }
          ((tr = !!vo), (go = vo = null));
        } finally {
          ((Ge = i), (z.p = a), (M.T = n));
        }
      }
      ((e.current = t), (xt = 2));
    }
  }
  function hm() {
    if (xt === 2) {
      xt = 0;
      var e = ba,
        t = Dl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = M.T), (M.T = null));
        var a = z.p;
        z.p = 2;
        var i = Ge;
        Ge |= 4;
        try {
          qd(e, t.alternate, t);
        } finally {
          ((Ge = i), (z.p = a), (M.T = n));
        }
      }
      xt = 3;
    }
  }
  function vm() {
    if (xt === 4 || xt === 3) {
      ((xt = 0), An());
      var e = ba,
        t = Dl,
        n = Kn,
        a = tm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (xt = 5)
        : ((xt = 0), (Dl = ba = null), gm(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (Sa = null),
        be(n),
        (t = t.stateNode),
        Nt && typeof Nt.onCommitFiberRoot == 'function')
      )
        try {
          Nt.onCommitFiberRoot(ia, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = M.T), (i = z.p), (z.p = 2), (M.T = null));
        try {
          for (var u = e.onRecoverableError, b = 0; b < a.length; b++) {
            var R = a[b];
            u(R.value, { componentStack: R.stack });
          }
        } finally {
          ((M.T = t), (z.p = i));
        }
      }
      ((Kn & 3) !== 0 && Xu(),
        Mn(e),
        (i = e.pendingLanes),
        (n & 261930) !== 0 && (i & 42) !== 0 ? (e === to ? bi++ : ((bi = 0), (to = e))) : (bi = 0),
        Ei(0));
    }
  }
  function gm(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), ni(t)));
  }
  function Xu() {
    return (mm(), hm(), vm(), ym());
  }
  function ym() {
    if (xt !== 5) return !1;
    var e = ba,
      t = Ps;
    Ps = 0;
    var n = be(Kn),
      a = M.T,
      i = z.p;
    try {
      ((z.p = 32 > n ? 32 : n), (M.T = null), (n = eo), (eo = null));
      var u = ba,
        b = Kn;
      if (((xt = 0), (Dl = ba = null), (Kn = 0), (Ge & 6) !== 0)) throw Error(h(331));
      var R = Ge;
      if (
        ((Ge |= 4),
        Id(u.current),
        Fd(u, u.current, b, n),
        (Ge = R),
        Ei(0, !1),
        Nt && typeof Nt.onPostCommitFiberRoot == 'function')
      )
        try {
          Nt.onPostCommitFiberRoot(ia, u);
        } catch {}
      return !0;
    } finally {
      ((z.p = i), (M.T = a), gm(e, t));
    }
  }
  function pm(e, t, n) {
    ((t = rn(n, t)),
      (t = Ns(e.stateNode, t, 2)),
      (e = ha(e, t, 2)),
      e !== null && (Ua(e, 2), Mn(e)));
  }
  function Qe(e, t, n) {
    if (e.tag === 3) pm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          pm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (Sa === null || !Sa.has(a)))
          ) {
            ((e = rn(n, e)),
              (n = xd(2)),
              (a = ha(t, n, 2)),
              a !== null && (Sd(n, a, t, e), Ua(a, 2), Mn(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function lo(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new $g();
      var i = new Set();
      a.set(t, i);
    } else ((i = a.get(t)), i === void 0 && ((i = new Set()), a.set(t, i)));
    i.has(n) || (($s = !0), i.add(n), (e = t0.bind(null, e, t, n)), t.then(e, e));
  }
  function t0(e, t, n) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Ie === e &&
        (ze & n) === n &&
        (ut === 4 || (ut === 3 && (ze & 62914560) === ze && 300 > yt() - Hu)
          ? (Ge & 2) === 0 && zl(e, 0)
          : (Ws |= n),
        wl === ze && (wl = 0)),
      Mn(e));
  }
  function xm(e, t) {
    (t === 0 && (t = ll()), (e = Ga(e, t)), e !== null && (Ua(e, t), Mn(e)));
  }
  function n0(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), xm(e, n));
  }
  function a0(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    (a !== null && a.delete(t), xm(e, n));
  }
  function l0(e, t) {
    return Sn(e, t);
  }
  var Qu = null,
    Ul = null,
    io = !1,
    Zu = !1,
    uo = !1,
    Ta = 0;
  function Mn(e) {
    (e !== Ul && e.next === null && (Ul === null ? (Qu = Ul = e) : (Ul = Ul.next = e)),
      (Zu = !0),
      io || ((io = !0), u0()));
  }
  function Ei(e, t) {
    if (!uo && Zu) {
      uo = !0;
      do
        for (var n = !1, a = Qu; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var b = a.suspendedLanes,
                R = a.pingedLanes;
              ((u = (1 << (31 - pt(42 | e) + 1)) - 1),
                (u &= i & ~(b & ~R)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((n = !0), Tm(a, u));
          } else
            ((u = ze),
              (u = al(
                a,
                a === Ie ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || nn(a, u) || ((n = !0), Tm(a, u)));
          a = a.next;
        }
      while (n);
      uo = !1;
    }
  }
  function i0() {
    Sm();
  }
  function Sm() {
    Zu = io = !1;
    var e = 0;
    Ta !== 0 && g0() && (e = Ta);
    for (var t = yt(), n = null, a = Qu; a !== null; ) {
      var i = a.next,
        u = bm(a, t);
      (u === 0
        ? ((a.next = null), n === null ? (Qu = i) : (n.next = i), i === null && (Ul = n))
        : ((n = a), (e !== 0 || (u & 3) !== 0) && (Zu = !0)),
        (a = i));
    }
    ((xt !== 0 && xt !== 5) || Ei(e), Ta !== 0 && (Ta = 0));
  }
  function bm(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        i = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var b = 31 - pt(u),
        R = 1 << b,
        Y = i[b];
      (Y === -1
        ? ((R & n) === 0 || (R & a) !== 0) && (i[b] = Er(R, t))
        : Y <= t && (e.expiredLanes |= R),
        (u &= ~R));
    }
    if (
      ((t = Ie),
      (n = ze),
      (n = al(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (a = e.callbackNode),
      n === 0 || (e === t && (Xe === 2 || Xe === 9)) || e.cancelPendingCommit !== null)
    )
      return (a !== null && a !== null && tn(a), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((n & 3) === 0 || nn(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((a !== null && tn(a), be(n))) {
        case 2:
        case 8:
          n = Pa;
          break;
        case 32:
          n = Kt;
          break;
        case 268435456:
          n = ke;
          break;
        default:
          n = Kt;
      }
      return (
        (a = Em.bind(null, e)),
        (n = Sn(n, a)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      a !== null && a !== null && tn(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Em(e, t) {
    if (xt !== 0 && xt !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Xu() && e.callbackNode !== n) return null;
    var a = ze;
    return (
      (a = al(e, e === Ie ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      a === 0
        ? null
        : (am(e, a, t),
          bm(e, yt()),
          e.callbackNode != null && e.callbackNode === n ? Em.bind(null, e) : null)
    );
  }
  function Tm(e, t) {
    if (Xu()) return null;
    am(e, t, !0);
  }
  function u0() {
    p0(function () {
      (Ge & 6) !== 0 ? Sn(Tt, i0) : Sm();
    });
  }
  function ro() {
    if (Ta === 0) {
      var e = xl;
      (e === 0 && ((e = el), (el <<= 1), (el & 261888) === 0 && (el = 256)), (Ta = e));
    }
    return Ta;
  }
  function Cm(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Pi('' + e);
  }
  function Mm(e, t) {
    var n = t.ownerDocument.createElement('input');
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute('form', e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function r0(e, t, n, a, i) {
    if (t === 'submit' && n && n.stateNode === i) {
      var u = Cm((i[Ee] || null).action),
        b = a.submitter;
      b &&
        ((t = (t = b[Ee] || null) ? Cm(t.formAction) : b.getAttribute('formAction')),
        t !== null && ((u = t), (b = null)));
      var R = new au('action', 'action', null, a, i);
      e.push({
        event: R,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ta !== 0) {
                  var Y = b ? Mm(i, b) : new FormData(i);
                  _s(n, { pending: !0, data: Y, method: i.method, action: u }, null, Y);
                }
              } else
                typeof u == 'function' &&
                  (R.preventDefault(),
                  (Y = b ? Mm(i, b) : new FormData(i)),
                  _s(n, { pending: !0, data: Y, method: i.method, action: u }, u, Y));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var so = 0; so < Qr.length; so++) {
    var oo = Qr[so],
      s0 = oo.toLowerCase(),
      o0 = oo[0].toUpperCase() + oo.slice(1);
    gn(s0, 'on' + o0);
  }
  (gn(tf, 'onAnimationEnd'),
    gn(nf, 'onAnimationIteration'),
    gn(af, 'onAnimationStart'),
    gn('dblclick', 'onDoubleClick'),
    gn('focusin', 'onFocus'),
    gn('focusout', 'onBlur'),
    gn(Mg, 'onTransitionRun'),
    gn(Rg, 'onTransitionStart'),
    gn(_g, 'onTransitionCancel'),
    gn(lf, 'onTransitionEnd'),
    il('onMouseEnter', ['mouseout', 'mouseover']),
    il('onMouseLeave', ['mouseout', 'mouseover']),
    il('onPointerEnter', ['pointerout', 'pointerover']),
    il('onPointerLeave', ['pointerout', 'pointerover']),
    Ba('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Ba(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Ba('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ba('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Ba(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Ba(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var Ti =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    c0 = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Ti)
    );
  function Rm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
        i = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var b = a.length - 1; 0 <= b; b--) {
            var R = a[b],
              Y = R.instance,
              J = R.currentTarget;
            if (((R = R.listener), Y !== u && i.isPropagationStopped())) break e;
            ((u = R), (i.currentTarget = J));
            try {
              u(i);
            } catch (te) {
              uu(te);
            }
            ((i.currentTarget = null), (u = Y));
          }
        else
          for (b = 0; b < a.length; b++) {
            if (
              ((R = a[b]),
              (Y = R.instance),
              (J = R.currentTarget),
              (R = R.listener),
              Y !== u && i.isPropagationStopped())
            )
              break e;
            ((u = R), (i.currentTarget = J));
            try {
              u(i);
            } catch (te) {
              uu(te);
            }
            ((i.currentTarget = null), (u = Y));
          }
      }
    }
  }
  function De(e, t) {
    var n = t[Ye];
    n === void 0 && (n = t[Ye] = new Set());
    var a = e + '__bubble';
    n.has(a) || (_m(t, e, 2, !1), n.add(a));
  }
  function co(e, t, n) {
    var a = 0;
    (t && (a |= 4), _m(n, e, a, t));
  }
  var Ku = '_reactListening' + Math.random().toString(36).slice(2);
  function fo(e) {
    if (!e[Ku]) {
      ((e[Ku] = !0),
        Ql.forEach(function (n) {
          n !== 'selectionchange' && (c0.has(n) || co(n, !1, e), co(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ku] || ((t[Ku] = !0), co('selectionchange', !1, t));
    }
  }
  function _m(e, t, n, a) {
    switch (nh(t)) {
      case 2:
        var i = j0;
        break;
      case 8:
        i = G0;
        break;
      default:
        i = _o;
    }
    ((n = i.bind(null, t, n, e)),
      (i = void 0),
      !Dr || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
      a
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1));
  }
  function mo(e, t, n, a, i) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var b = a.tag;
        if (b === 3 || b === 4) {
          var R = a.stateNode.containerInfo;
          if (R === i) break;
          if (b === 4)
            for (b = a.return; b !== null; ) {
              var Y = b.tag;
              if ((Y === 3 || Y === 4) && b.stateNode.containerInfo === i) return;
              b = b.return;
            }
          for (; R !== null; ) {
            if (((b = wt(R)), b === null)) return;
            if (((Y = b.tag), Y === 5 || Y === 6 || Y === 26 || Y === 27)) {
              a = u = b;
              continue e;
            }
            R = R.parentNode;
          }
        }
        a = a.return;
      }
    Dc(function () {
      var J = u,
        te = Or(n),
        ae = [];
      e: {
        var $ = uf.get(e);
        if ($ !== void 0) {
          var I = au,
            ce = e;
          switch (e) {
            case 'keypress':
              if (tu(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              I = ag;
              break;
            case 'focusin':
              ((ce = 'focus'), (I = Br));
              break;
            case 'focusout':
              ((ce = 'blur'), (I = Br));
              break;
            case 'beforeblur':
            case 'afterblur':
              I = Br;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              I = Uc;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              I = Zv;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              I = ug;
              break;
            case tf:
            case nf:
            case af:
              I = Jv;
              break;
            case lf:
              I = sg;
              break;
            case 'scroll':
            case 'scrollend':
              I = Xv;
              break;
            case 'wheel':
              I = cg;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              I = $v;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              I = Lc;
              break;
            case 'toggle':
            case 'beforetoggle':
              I = dg;
          }
          var pe = (t & 4) !== 0,
            $e = !pe && (e === 'scroll' || e === 'scrollend'),
            Z = pe ? ($ !== null ? $ + 'Capture' : null) : $;
          pe = [];
          for (var X = J, k; X !== null; ) {
            var ne = X;
            if (
              ((k = ne.stateNode),
              (ne = ne.tag),
              (ne !== 5 && ne !== 26 && ne !== 27) ||
                k === null ||
                Z === null ||
                ((ne = Zl(X, Z)), ne != null && pe.push(Ci(X, ne, k))),
              $e)
            )
              break;
            X = X.return;
          }
          0 < pe.length && (($ = new I($, ce, null, n, te)), ae.push({ event: $, listeners: pe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            (($ = e === 'mouseover' || e === 'pointerover'),
            (I = e === 'mouseout' || e === 'pointerout'),
            $ && n !== Ar && (ce = n.relatedTarget || n.fromElement) && (wt(ce) || ce[qe]))
          )
            break e;
          if (
            (I || $) &&
            (($ =
              te.window === te
                ? te
                : ($ = te.ownerDocument)
                  ? $.defaultView || $.parentWindow
                  : window),
            I
              ? ((ce = n.relatedTarget || n.toElement),
                (I = J),
                (ce = ce ? wt(ce) : null),
                ce !== null &&
                  (($e = l(ce)), (pe = ce.tag), ce !== $e || (pe !== 5 && pe !== 27 && pe !== 6)) &&
                  (ce = null))
              : ((I = null), (ce = J)),
            I !== ce)
          ) {
            if (
              ((pe = Uc),
              (ne = 'onMouseLeave'),
              (Z = 'onMouseEnter'),
              (X = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((pe = Lc), (ne = 'onPointerLeave'), (Z = 'onPointerEnter'), (X = 'pointer')),
              ($e = I == null ? $ : bn(I)),
              (k = ce == null ? $ : bn(ce)),
              ($ = new pe(ne, X + 'leave', I, n, te)),
              ($.target = $e),
              ($.relatedTarget = k),
              (ne = null),
              wt(te) === J &&
                ((pe = new pe(Z, X + 'enter', ce, n, te)),
                (pe.target = k),
                (pe.relatedTarget = $e),
                (ne = pe)),
              ($e = ne),
              I && ce)
            )
              t: {
                for (pe = f0, Z = I, X = ce, k = 0, ne = Z; ne; ne = pe(ne)) k++;
                ne = 0;
                for (var ve = X; ve; ve = pe(ve)) ne++;
                for (; 0 < k - ne; ) ((Z = pe(Z)), k--);
                for (; 0 < ne - k; ) ((X = pe(X)), ne--);
                for (; k--; ) {
                  if (Z === X || (X !== null && Z === X.alternate)) {
                    pe = Z;
                    break t;
                  }
                  ((Z = pe(Z)), (X = pe(X)));
                }
                pe = null;
              }
            else pe = null;
            (I !== null && Am(ae, $, I, pe, !1),
              ce !== null && $e !== null && Am(ae, $e, ce, pe, !0));
          }
        }
        e: {
          if (
            (($ = J ? bn(J) : window),
            (I = $.nodeName && $.nodeName.toLowerCase()),
            I === 'select' || (I === 'input' && $.type === 'file'))
          )
            var He = Qc;
          else if (qc($))
            if (Zc) He = Eg;
            else {
              He = Sg;
              var de = xg;
            }
          else
            ((I = $.nodeName),
              !I || I.toLowerCase() !== 'input' || ($.type !== 'checkbox' && $.type !== 'radio')
                ? J && _r(J.elementType) && (He = Qc)
                : (He = bg));
          if (He && (He = He(e, J))) {
            Xc(ae, He, n, te);
            break e;
          }
          (de && de(e, $, J),
            e === 'focusout' &&
              J &&
              $.type === 'number' &&
              J.memoizedProps.value != null &&
              Rr($, 'number', $.value));
        }
        switch (((de = J ? bn(J) : window), e)) {
          case 'focusin':
            (qc(de) || de.contentEditable === 'true') && ((fl = de), (Vr = J), (Pl = null));
            break;
          case 'focusout':
            Pl = Vr = fl = null;
            break;
          case 'mousedown':
            qr = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((qr = !1), Pc(ae, n, te));
            break;
          case 'selectionchange':
            if (Cg) break;
          case 'keydown':
          case 'keyup':
            Pc(ae, n, te);
        }
        var Re;
        if (Hr)
          e: {
            switch (e) {
              case 'compositionstart':
                var Ne = 'onCompositionStart';
                break e;
              case 'compositionend':
                Ne = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Ne = 'onCompositionUpdate';
                break e;
            }
            Ne = void 0;
          }
        else
          cl
            ? Yc(e, n) && (Ne = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (Ne = 'onCompositionStart');
        (Ne &&
          (Hc &&
            n.locale !== 'ko' &&
            (cl || Ne !== 'onCompositionStart'
              ? Ne === 'onCompositionEnd' && cl && (Re = zc())
              : ((ra = te), (zr = 'value' in ra ? ra.value : ra.textContent), (cl = !0))),
          (de = ku(J, Ne)),
          0 < de.length &&
            ((Ne = new Bc(Ne, e, null, n, te)),
            ae.push({ event: Ne, listeners: de }),
            Re ? (Ne.data = Re) : ((Re = Vc(n)), Re !== null && (Ne.data = Re)))),
          (Re = hg ? vg(e, n) : gg(e, n)) &&
            ((Ne = ku(J, 'onBeforeInput')),
            0 < Ne.length &&
              ((de = new Bc('onBeforeInput', 'beforeinput', null, n, te)),
              ae.push({ event: de, listeners: Ne }),
              (de.data = Re))),
          r0(ae, e, J, n, te));
      }
      Rm(ae, t);
    });
  }
  function Ci(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ku(e, t) {
    for (var n = t + 'Capture', a = []; e !== null; ) {
      var i = e,
        u = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          u === null ||
          ((i = Zl(e, n)),
          i != null && a.unshift(Ci(e, i, u)),
          (i = Zl(e, t)),
          i != null && a.push(Ci(e, i, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function f0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Am(e, t, n, a, i) {
    for (var u = t._reactName, b = []; n !== null && n !== a; ) {
      var R = n,
        Y = R.alternate,
        J = R.stateNode;
      if (((R = R.tag), Y !== null && Y === a)) break;
      ((R !== 5 && R !== 26 && R !== 27) ||
        J === null ||
        ((Y = J),
        i
          ? ((J = Zl(n, u)), J != null && b.unshift(Ci(n, J, Y)))
          : i || ((J = Zl(n, u)), J != null && b.push(Ci(n, J, Y)))),
        (n = n.return));
    }
    b.length !== 0 && e.push({ event: t, listeners: b });
  }
  var d0 = /\r\n?/g,
    m0 = /\u0000|\uFFFD/g;
  function Om(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        d0,
        `
`
      )
      .replace(m0, '');
  }
  function wm(e, t) {
    return ((t = Om(t)), Om(e) === t);
  }
  function Fe(e, t, n, a, i, u) {
    switch (n) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || rl(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && rl(e, '' + a);
        break;
      case 'className':
        Wi(e, 'class', a);
        break;
      case 'tabIndex':
        Wi(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Wi(e, n, a);
        break;
      case 'style':
        Oc(e, a, u);
        break;
      case 'data':
        if (t !== 'object') {
          Wi(e, 'data', a);
          break;
        }
      case 'src':
      case 'href':
        if (a === '' && (t !== 'a' || n !== 'href')) {
          e.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == 'function' || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        ((a = Pi('' + a)), e.setAttribute(n, a));
        break;
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == 'function' &&
            (n === 'formAction'
              ? (t !== 'input' && Fe(e, t, 'name', i.name, i, null),
                Fe(e, t, 'formEncType', i.formEncType, i, null),
                Fe(e, t, 'formMethod', i.formMethod, i, null),
                Fe(e, t, 'formTarget', i.formTarget, i, null))
              : (Fe(e, t, 'encType', i.encType, i, null),
                Fe(e, t, 'method', i.method, i, null),
                Fe(e, t, 'target', i.target, i, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        ((a = Pi('' + a)), e.setAttribute(n, a));
        break;
      case 'onClick':
        a != null && (e.onclick = Dn);
        break;
      case 'onScroll':
        a != null && De('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && De('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(h(61));
          if (((n = a.__html), n != null)) {
            if (i.children != null) throw Error(h(60));
            e.innerHTML = n;
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
        ((n = Pi('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
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
          ? e.setAttribute(n, '' + a)
          : e.removeAttribute(n);
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
          ? e.setAttribute(n, '')
          : e.removeAttribute(n);
        break;
      case 'capture':
      case 'download':
        a === !0
          ? e.setAttribute(n, '')
          : a !== !1 && a != null && typeof a != 'function' && typeof a != 'symbol'
            ? e.setAttribute(n, a)
            : e.removeAttribute(n);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        a != null && typeof a != 'function' && typeof a != 'symbol' && !isNaN(a) && 1 <= a
          ? e.setAttribute(n, a)
          : e.removeAttribute(n);
        break;
      case 'rowSpan':
      case 'start':
        a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
          ? e.removeAttribute(n)
          : e.setAttribute(n, a);
        break;
      case 'popover':
        (De('beforetoggle', e), De('toggle', e), $i(e, 'popover', a));
        break;
      case 'xlinkActuate':
        wn(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        wn(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        wn(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        wn(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        wn(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        wn(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        wn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        wn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        wn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        $i(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = Vv.get(n) || n), $i(e, n, a));
    }
  }
  function ho(e, t, n, a, i, u) {
    switch (n) {
      case 'style':
        Oc(e, a, u);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(h(61));
          if (((n = a.__html), n != null)) {
            if (i.children != null) throw Error(h(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'children':
        typeof a == 'string'
          ? rl(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && rl(e, '' + a);
        break;
      case 'onScroll':
        a != null && De('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && De('scrollend', e);
        break;
      case 'onClick':
        a != null && (e.onclick = Dn);
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
        if (!Sc.hasOwnProperty(n))
          e: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((i = n.endsWith('Capture')),
              (t = n.slice(2, i ? n.length - 7 : void 0)),
              (u = e[Ee] || null),
              (u = u != null ? u[n] : null),
              typeof u == 'function' && e.removeEventListener(t, u, i),
              typeof a == 'function')
            ) {
              (typeof u != 'function' &&
                u !== null &&
                (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, a, i));
              break e;
            }
            n in e ? (e[n] = a) : a === !0 ? e.setAttribute(n, '') : $i(e, n, a);
          }
    }
  }
  function At(e, t, n) {
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
        (De('error', e), De('load', e));
        var a = !1,
          i = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var b = n[u];
            if (b != null)
              switch (u) {
                case 'src':
                  a = !0;
                  break;
                case 'srcSet':
                  i = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(h(137, t));
                default:
                  Fe(e, t, u, b, n, null);
              }
          }
        (i && Fe(e, t, 'srcSet', n.srcSet, n, null), a && Fe(e, t, 'src', n.src, n, null));
        return;
      case 'input':
        De('invalid', e);
        var R = (u = b = i = null),
          Y = null,
          J = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var te = n[a];
            if (te != null)
              switch (a) {
                case 'name':
                  i = te;
                  break;
                case 'type':
                  b = te;
                  break;
                case 'checked':
                  Y = te;
                  break;
                case 'defaultChecked':
                  J = te;
                  break;
                case 'value':
                  u = te;
                  break;
                case 'defaultValue':
                  R = te;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (te != null) throw Error(h(137, t));
                  break;
                default:
                  Fe(e, t, a, te, n, null);
              }
          }
        Mc(e, u, R, Y, J, b, i, !1);
        return;
      case 'select':
        (De('invalid', e), (a = b = u = null));
        for (i in n)
          if (n.hasOwnProperty(i) && ((R = n[i]), R != null))
            switch (i) {
              case 'value':
                u = R;
                break;
              case 'defaultValue':
                b = R;
                break;
              case 'multiple':
                a = R;
              default:
                Fe(e, t, i, R, n, null);
            }
        ((t = u),
          (n = b),
          (e.multiple = !!a),
          t != null ? ul(e, !!a, t, !1) : n != null && ul(e, !!a, n, !0));
        return;
      case 'textarea':
        (De('invalid', e), (u = i = a = null));
        for (b in n)
          if (n.hasOwnProperty(b) && ((R = n[b]), R != null))
            switch (b) {
              case 'value':
                a = R;
                break;
              case 'defaultValue':
                i = R;
                break;
              case 'children':
                u = R;
                break;
              case 'dangerouslySetInnerHTML':
                if (R != null) throw Error(h(91));
                break;
              default:
                Fe(e, t, b, R, n, null);
            }
        _c(e, a, i, u);
        return;
      case 'option':
        for (Y in n)
          if (n.hasOwnProperty(Y) && ((a = n[Y]), a != null))
            switch (Y) {
              case 'selected':
                e.selected = a && typeof a != 'function' && typeof a != 'symbol';
                break;
              default:
                Fe(e, t, Y, a, n, null);
            }
        return;
      case 'dialog':
        (De('beforetoggle', e), De('toggle', e), De('cancel', e), De('close', e));
        break;
      case 'iframe':
      case 'object':
        De('load', e);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < Ti.length; a++) De(Ti[a], e);
        break;
      case 'image':
        (De('error', e), De('load', e));
        break;
      case 'details':
        De('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (De('error', e), De('load', e));
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
        for (J in n)
          if (n.hasOwnProperty(J) && ((a = n[J]), a != null))
            switch (J) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(h(137, t));
              default:
                Fe(e, t, J, a, n, null);
            }
        return;
      default:
        if (_r(t)) {
          for (te in n)
            n.hasOwnProperty(te) && ((a = n[te]), a !== void 0 && ho(e, t, te, a, n, void 0));
          return;
        }
    }
    for (R in n) n.hasOwnProperty(R) && ((a = n[R]), a != null && Fe(e, t, R, a, n, null));
  }
  function h0(e, t, n, a) {
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
        var i = null,
          u = null,
          b = null,
          R = null,
          Y = null,
          J = null,
          te = null;
        for (I in n) {
          var ae = n[I];
          if (n.hasOwnProperty(I) && ae != null)
            switch (I) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                Y = ae;
              default:
                a.hasOwnProperty(I) || Fe(e, t, I, null, a, ae);
            }
        }
        for (var $ in a) {
          var I = a[$];
          if (((ae = n[$]), a.hasOwnProperty($) && (I != null || ae != null)))
            switch ($) {
              case 'type':
                u = I;
                break;
              case 'name':
                i = I;
                break;
              case 'checked':
                J = I;
                break;
              case 'defaultChecked':
                te = I;
                break;
              case 'value':
                b = I;
                break;
              case 'defaultValue':
                R = I;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (I != null) throw Error(h(137, t));
                break;
              default:
                I !== ae && Fe(e, t, $, I, a, ae);
            }
        }
        Mr(e, b, R, Y, J, te, u, i);
        return;
      case 'select':
        I = b = R = $ = null;
        for (u in n)
          if (((Y = n[u]), n.hasOwnProperty(u) && Y != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                I = Y;
              default:
                a.hasOwnProperty(u) || Fe(e, t, u, null, a, Y);
            }
        for (i in a)
          if (((u = a[i]), (Y = n[i]), a.hasOwnProperty(i) && (u != null || Y != null)))
            switch (i) {
              case 'value':
                $ = u;
                break;
              case 'defaultValue':
                R = u;
                break;
              case 'multiple':
                b = u;
              default:
                u !== Y && Fe(e, t, i, u, a, Y);
            }
        ((t = R),
          (n = b),
          (a = I),
          $ != null
            ? ul(e, !!n, $, !1)
            : !!a != !!n && (t != null ? ul(e, !!n, t, !0) : ul(e, !!n, n ? [] : '', !1)));
        return;
      case 'textarea':
        I = $ = null;
        for (R in n)
          if (((i = n[R]), n.hasOwnProperty(R) && i != null && !a.hasOwnProperty(R)))
            switch (R) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Fe(e, t, R, null, a, i);
            }
        for (b in a)
          if (((i = a[b]), (u = n[b]), a.hasOwnProperty(b) && (i != null || u != null)))
            switch (b) {
              case 'value':
                $ = i;
                break;
              case 'defaultValue':
                I = i;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (i != null) throw Error(h(91));
                break;
              default:
                i !== u && Fe(e, t, b, i, a, u);
            }
        Rc(e, $, I);
        return;
      case 'option':
        for (var ce in n)
          if ((($ = n[ce]), n.hasOwnProperty(ce) && $ != null && !a.hasOwnProperty(ce)))
            switch (ce) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                Fe(e, t, ce, null, a, $);
            }
        for (Y in a)
          if ((($ = a[Y]), (I = n[Y]), a.hasOwnProperty(Y) && $ !== I && ($ != null || I != null)))
            switch (Y) {
              case 'selected':
                e.selected = $ && typeof $ != 'function' && typeof $ != 'symbol';
                break;
              default:
                Fe(e, t, Y, $, a, I);
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
        for (var pe in n)
          (($ = n[pe]),
            n.hasOwnProperty(pe) && $ != null && !a.hasOwnProperty(pe) && Fe(e, t, pe, null, a, $));
        for (J in a)
          if ((($ = a[J]), (I = n[J]), a.hasOwnProperty(J) && $ !== I && ($ != null || I != null)))
            switch (J) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if ($ != null) throw Error(h(137, t));
                break;
              default:
                Fe(e, t, J, $, a, I);
            }
        return;
      default:
        if (_r(t)) {
          for (var $e in n)
            (($ = n[$e]),
              n.hasOwnProperty($e) &&
                $ !== void 0 &&
                !a.hasOwnProperty($e) &&
                ho(e, t, $e, void 0, a, $));
          for (te in a)
            (($ = a[te]),
              (I = n[te]),
              !a.hasOwnProperty(te) ||
                $ === I ||
                ($ === void 0 && I === void 0) ||
                ho(e, t, te, $, a, I));
          return;
        }
    }
    for (var Z in n)
      (($ = n[Z]),
        n.hasOwnProperty(Z) && $ != null && !a.hasOwnProperty(Z) && Fe(e, t, Z, null, a, $));
    for (ae in a)
      (($ = a[ae]),
        (I = n[ae]),
        !a.hasOwnProperty(ae) || $ === I || ($ == null && I == null) || Fe(e, t, ae, $, a, I));
  }
  function Dm(e) {
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
  function v0() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType('resource'), a = 0;
        a < n.length;
        a++
      ) {
        var i = n[a],
          u = i.transferSize,
          b = i.initiatorType,
          R = i.duration;
        if (u && R && Dm(b)) {
          for (b = 0, R = i.responseEnd, a += 1; a < n.length; a++) {
            var Y = n[a],
              J = Y.startTime;
            if (J > R) break;
            var te = Y.transferSize,
              ae = Y.initiatorType;
            te && Dm(ae) && ((Y = Y.responseEnd), (b += te * (Y < R ? 1 : (R - J) / (Y - J))));
          }
          if ((--a, (t += (8 * (u + b)) / (i.duration / 1e3)), e++, 10 < e)) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && ((e = navigator.connection.downlink), typeof e == 'number')
      ? e
      : 5;
  }
  var vo = null,
    go = null;
  function Ju(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function zm(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Nm(e, t) {
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
  function yo(e, t) {
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
  var po = null;
  function g0() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === po ? !1 : ((po = e), !0)) : ((po = null), !1);
  }
  var Um = typeof setTimeout == 'function' ? setTimeout : void 0,
    y0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Bm = typeof Promise == 'function' ? Promise : void 0,
    p0 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Bm < 'u'
          ? function (e) {
              return Bm.resolve(null).then(e).catch(x0);
            }
          : Um;
  function x0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ca(e) {
    return e === 'head';
  }
  function Lm(e, t) {
    var n = t,
      a = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === '/$' || n === '/&')) {
          if (a === 0) {
            (e.removeChild(i), jl(t));
            return;
          }
          a--;
        } else if (n === '$' || n === '$?' || n === '$~' || n === '$!' || n === '&') a++;
        else if (n === 'html') Mi(e.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = e.ownerDocument.head), Mi(n));
          for (var u = n.firstChild; u; ) {
            var b = u.nextSibling,
              R = u.nodeName;
            (u[ft] ||
              R === 'SCRIPT' ||
              R === 'STYLE' ||
              (R === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(u),
              (u = b));
          }
        } else n === 'body' && Mi(e.ownerDocument.body);
      n = i;
    } while (n);
    jl(t);
  }
  function Hm(e, t) {
    var n = e;
    e = 0;
    do {
      var a = n.nextSibling;
      if (
        (n.nodeType === 1
          ? t
            ? ((n._stashedDisplay = n.style.display), (n.style.display = 'none'))
            : ((n.style.display = n._stashedDisplay || ''),
              n.getAttribute('style') === '' && n.removeAttribute('style'))
          : n.nodeType === 3 &&
            (t
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ''))
              : (n.nodeValue = n._stashedText || '')),
        a && a.nodeType === 8)
      )
        if (((n = a.data), n === '/$')) {
          if (e === 0) break;
          e--;
        } else (n !== '$' && n !== '$?' && n !== '$~' && n !== '$!') || e++;
      n = a;
    } while (n);
  }
  function xo(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (xo(n), vn(n));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (n.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(n);
    }
  }
  function S0(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (a) {
        if (!e[ft])
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
                u !== i.rel ||
                e.getAttribute('href') !== (i.href == null || i.href === '' ? null : i.href) ||
                e.getAttribute('crossorigin') !== (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute('title') !== (i.title == null ? null : i.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((u = e.getAttribute('src')),
                (u !== (i.src == null ? null : i.src) ||
                  e.getAttribute('type') !== (i.type == null ? null : i.type) ||
                  e.getAttribute('crossorigin') !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
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
        var u = i.name == null ? null : '' + i.name;
        if (i.type === 'hidden' && e.getAttribute('name') === u) return e;
      } else return e;
      if (((e = dn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function b0(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) ||
        ((e = dn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function jm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
        ((e = dn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function So(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function bo(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
  }
  function E0(e, t) {
    var n = e.ownerDocument;
    if (e.data === '$~') e._reactRetry = t;
    else if (e.data !== '$?' || n.readyState !== 'loading') t();
    else {
      var a = function () {
        (t(), n.removeEventListener('DOMContentLoaded', a));
      };
      (n.addEventListener('DOMContentLoaded', a), (e._reactRetry = a));
    }
  }
  function dn(e) {
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
  var Eo = null;
  function Gm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '/$' || n === '/&') {
          if (t === 0) return dn(e.nextSibling);
          t--;
        } else (n !== '$' && n !== '$!' && n !== '$?' && n !== '$~' && n !== '&') || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Ym(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?' || n === '$~' || n === '&') {
          if (t === 0) return e;
          t--;
        } else (n !== '/$' && n !== '/&') || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Vm(e, t, n) {
    switch (((t = Ju(n)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(h(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(h(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(h(454));
        return e;
      default:
        throw Error(h(451));
    }
  }
  function Mi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    vn(e);
  }
  var mn = new Map(),
    qm = new Set();
  function Fu(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var kn = z.d;
  z.d = { f: T0, r: C0, D: M0, C: R0, L: _0, m: A0, X: w0, S: O0, M: D0 };
  function T0() {
    var e = kn.f(),
      t = Yu();
    return e || t;
  }
  function C0(e) {
    var t = Ut(e);
    t !== null && t.tag === 5 && t.type === 'form' ? id(t) : kn.r(e);
  }
  var Bl = typeof document > 'u' ? null : document;
  function Xm(e, t, n) {
    var a = Bl;
    if (a && typeof t == 'string' && t) {
      var i = ln(t);
      ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof n == 'string' && (i += '[crossorigin="' + n + '"]'),
        qm.has(i) ||
          (qm.add(i),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(i) === null &&
            ((t = a.createElement('link')), At(t, 'link', e), rt(t), a.head.appendChild(t))));
    }
  }
  function M0(e) {
    (kn.D(e), Xm('dns-prefetch', e, null));
  }
  function R0(e, t) {
    (kn.C(e, t), Xm('preconnect', e, t));
  }
  function _0(e, t, n) {
    kn.L(e, t, n);
    var a = Bl;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + ln(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((i += '[imagesrcset="' + ln(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (i += '[imagesizes="' + ln(n.imageSizes) + '"]'))
        : (i += '[href="' + ln(e) + '"]');
      var u = i;
      switch (t) {
        case 'style':
          u = Ll(e);
          break;
        case 'script':
          u = Hl(e);
      }
      mn.has(u) ||
        ((e = v(
          { rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t },
          n
        )),
        mn.set(u, e),
        a.querySelector(i) !== null ||
          (t === 'style' && a.querySelector(Ri(u))) ||
          (t === 'script' && a.querySelector(_i(u))) ||
          ((t = a.createElement('link')), At(t, 'link', e), rt(t), a.head.appendChild(t)));
    }
  }
  function A0(e, t) {
    kn.m(e, t);
    var n = Bl;
    if (n && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        i = 'link[rel="modulepreload"][as="' + ln(a) + '"][href="' + ln(e) + '"]',
        u = i;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Hl(e);
      }
      if (
        !mn.has(u) &&
        ((e = v({ rel: 'modulepreload', href: e }, t)), mn.set(u, e), n.querySelector(i) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(_i(u))) return;
        }
        ((a = n.createElement('link')), At(a, 'link', e), rt(a), n.head.appendChild(a));
      }
    }
  }
  function O0(e, t, n) {
    kn.S(e, t, n);
    var a = Bl;
    if (a && e) {
      var i = ua(a).hoistableStyles,
        u = Ll(e);
      t = t || 'default';
      var b = i.get(u);
      if (!b) {
        var R = { loading: 0, preload: null };
        if ((b = a.querySelector(Ri(u)))) R.loading = 5;
        else {
          ((e = v({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = mn.get(u)) && To(e, n));
          var Y = (b = a.createElement('link'));
          (rt(Y),
            At(Y, 'link', e),
            (Y._p = new Promise(function (J, te) {
              ((Y.onload = J), (Y.onerror = te));
            })),
            Y.addEventListener('load', function () {
              R.loading |= 1;
            }),
            Y.addEventListener('error', function () {
              R.loading |= 2;
            }),
            (R.loading |= 4),
            $u(b, t, a));
        }
        ((b = { type: 'stylesheet', instance: b, count: 1, state: R }), i.set(u, b));
      }
    }
  }
  function w0(e, t) {
    kn.X(e, t);
    var n = Bl;
    if (n && e) {
      var a = ua(n).hoistableScripts,
        i = Hl(e),
        u = a.get(i);
      u ||
        ((u = n.querySelector(_i(i))),
        u ||
          ((e = v({ src: e, async: !0 }, t)),
          (t = mn.get(i)) && Co(e, t),
          (u = n.createElement('script')),
          rt(u),
          At(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(i, u));
    }
  }
  function D0(e, t) {
    kn.M(e, t);
    var n = Bl;
    if (n && e) {
      var a = ua(n).hoistableScripts,
        i = Hl(e),
        u = a.get(i);
      u ||
        ((u = n.querySelector(_i(i))),
        u ||
          ((e = v({ src: e, async: !0, type: 'module' }, t)),
          (t = mn.get(i)) && Co(e, t),
          (u = n.createElement('script')),
          rt(u),
          At(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(i, u));
    }
  }
  function Qm(e, t, n, a) {
    var i = (i = se.current) ? Fu(i) : null;
    if (!i) throw Error(h(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = Ll(n.href)),
            (n = ua(i).hoistableStyles),
            (a = n.get(t)),
            a || ((a = { type: 'style', instance: null, count: 0, state: null }), n.set(t, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          n.rel === 'stylesheet' &&
          typeof n.href == 'string' &&
          typeof n.precedence == 'string'
        ) {
          e = Ll(n.href);
          var u = ua(i).hoistableStyles,
            b = u.get(e);
          if (
            (b ||
              ((i = i.ownerDocument || i),
              (b = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, b),
              (u = i.querySelector(Ri(e))) && !u._p && ((b.instance = u), (b.state.loading = 5)),
              mn.has(e) ||
                ((n = {
                  rel: 'preload',
                  as: 'style',
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                mn.set(e, n),
                u || z0(i, e, n, b.state))),
            t && a === null)
          )
            throw Error(h(528, ''));
          return b;
        }
        if (t && a !== null) throw Error(h(529, ''));
        return null;
      case 'script':
        return (
          (t = n.async),
          (n = n.src),
          typeof n == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = Hl(n)),
              (n = ua(i).hoistableScripts),
              (a = n.get(t)),
              a || ((a = { type: 'script', instance: null, count: 0, state: null }), n.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(h(444, e));
    }
  }
  function Ll(e) {
    return 'href="' + ln(e) + '"';
  }
  function Ri(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Zm(e) {
    return v({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function z0(e, t, n, a) {
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
        At(t, 'link', n),
        rt(t),
        e.head.appendChild(t));
  }
  function Hl(e) {
    return '[src="' + ln(e) + '"]';
  }
  function _i(e) {
    return 'script[async]' + e;
  }
  function Km(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + ln(n.href) + '"]');
          if (a) return ((t.instance = a), rt(a), a);
          var i = v({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            rt(a),
            At(a, 'style', i),
            $u(a, n.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          i = Ll(n.href);
          var u = e.querySelector(Ri(i));
          if (u) return ((t.state.loading |= 4), (t.instance = u), rt(u), u);
          ((a = Zm(n)),
            (i = mn.get(i)) && To(a, i),
            (u = (e.ownerDocument || e).createElement('link')),
            rt(u));
          var b = u;
          return (
            (b._p = new Promise(function (R, Y) {
              ((b.onload = R), (b.onerror = Y));
            })),
            At(u, 'link', a),
            (t.state.loading |= 4),
            $u(u, n.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = Hl(n.src)),
            (i = e.querySelector(_i(u)))
              ? ((t.instance = i), rt(i), i)
              : ((a = n),
                (i = mn.get(u)) && ((a = v({}, n)), Co(a, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement('script')),
                rt(i),
                At(i, 'link', a),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case 'void':
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), $u(a, n.precedence, e));
    return t.instance;
  }
  function $u(e, t, n) {
    for (
      var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        i = a.length ? a[a.length - 1] : null,
        u = i,
        b = 0;
      b < a.length;
      b++
    ) {
      var R = a[b];
      if (R.dataset.precedence === t) u = R;
      else if (u !== i) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function To(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Co(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Wu = null;
  function km(e, t, n) {
    if (Wu === null) {
      var a = new Map(),
        i = (Wu = new Map());
      i.set(n, a);
    } else ((i = Wu), (a = i.get(n)), a || ((a = new Map()), i.set(n, a)));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var u = n[i];
      if (
        !(u[ft] || u[Ae] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var b = u.getAttribute(t) || '';
        b = e + b;
        var R = a.get(b);
        R ? R.push(u) : a.set(b, [u]);
      }
    }
    return a;
  }
  function Jm(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null));
  }
  function N0(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
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
  function Fm(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function U0(e, t, n, a) {
    if (
      n.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var i = Ll(a.href),
          u = t.querySelector(Ri(i));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = Iu.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = u),
            rt(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = Zm(a)),
          (i = mn.get(i)) && To(a, i),
          (u = u.createElement('link')),
          rt(u));
        var b = u;
        ((b._p = new Promise(function (R, Y) {
          ((b.onload = R), (b.onerror = Y));
        })),
          At(u, 'link', a),
          (n.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Iu.bind(e)),
          t.addEventListener('load', n),
          t.addEventListener('error', n)));
    }
  }
  var Mo = 0;
  function B0(e, t) {
    return (
      e.stylesheets && e.count === 0 && er(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && er(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Mo === 0 && (Mo = 62500 * v0());
            var i = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 && (e.stylesheets && er(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > Mo ? 50 : 800) + t
            );
            return (
              (e.unsuspend = n),
              function () {
                ((e.unsuspend = null), clearTimeout(a), clearTimeout(i));
              }
            );
          }
        : null
    );
  }
  function Iu() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) er(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Pu = null;
  function er(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (Pu = new Map()), t.forEach(L0, e), (Pu = null), Iu.call(e)));
  }
  function L0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Pu.get(e);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), Pu.set(e, n));
        for (
          var i = e.querySelectorAll('link[data-precedence],style[data-precedence]'), u = 0;
          u < i.length;
          u++
        ) {
          var b = i[u];
          (b.nodeName === 'LINK' || b.getAttribute('media') !== 'not all') &&
            (n.set(b.dataset.precedence, b), (a = b));
        }
        a && n.set(null, a);
      }
      ((i = t.instance),
        (b = i.getAttribute('data-precedence')),
        (u = n.get(b) || a),
        u === a && n.set(null, i),
        n.set(b, i),
        this.count++,
        (a = Iu.bind(this)),
        i.addEventListener('load', a),
        i.addEventListener('error', a),
        u
          ? u.parentNode.insertBefore(i, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Ai = {
    $$typeof: B,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0,
  };
  function H0(e, t, n, a, i, u, b, R, Y) {
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
      (this.expirationTimes = Xl(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Xl(0)),
      (this.hiddenUpdates = Xl(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = i),
      (this.onCaughtError = u),
      (this.onRecoverableError = b),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = Y),
      (this.incompleteTransitions = new Map()));
  }
  function $m(e, t, n, a, i, u, b, R, Y, J, te, ae) {
    return (
      (e = new H0(e, t, n, b, Y, J, te, ae, R)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = Jt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = as()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: n, cache: t }),
      rs(u),
      e
    );
  }
  function Wm(e) {
    return e ? ((e = hl), e) : hl;
  }
  function Im(e, t, n, a, i, u) {
    ((i = Wm(i)),
      a.context === null ? (a.context = i) : (a.pendingContext = i),
      (a = ma(t)),
      (a.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (n = ha(e, a, t)),
      n !== null && (qt(n, e, t), ui(n, e, t)));
  }
  function Pm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ro(e, t) {
    (Pm(e, t), (e = e.alternate) && Pm(e, t));
  }
  function eh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ga(e, 67108864);
      (t !== null && qt(t, e, 67108864), Ro(e, 67108864));
    }
  }
  function th(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Pt();
      t = Oe(t);
      var n = Ga(e, t);
      (n !== null && qt(n, e, t), Ro(e, t));
    }
  }
  var tr = !0;
  function j0(e, t, n, a) {
    var i = M.T;
    M.T = null;
    var u = z.p;
    try {
      ((z.p = 2), _o(e, t, n, a));
    } finally {
      ((z.p = u), (M.T = i));
    }
  }
  function G0(e, t, n, a) {
    var i = M.T;
    M.T = null;
    var u = z.p;
    try {
      ((z.p = 8), _o(e, t, n, a));
    } finally {
      ((z.p = u), (M.T = i));
    }
  }
  function _o(e, t, n, a) {
    if (tr) {
      var i = Ao(a);
      if (i === null) (mo(e, t, a, nr, n), ah(e, a));
      else if (V0(i, e, t, n, a)) a.stopPropagation();
      else if ((ah(e, a), t & 4 && -1 < Y0.indexOf(e))) {
        for (; i !== null; ) {
          var u = Ut(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var b = On(u.pendingLanes);
                  if (b !== 0) {
                    var R = u;
                    for (R.pendingLanes |= 2, R.entangledLanes |= 2; b; ) {
                      var Y = 1 << (31 - pt(b));
                      ((R.entanglements[1] |= Y), (b &= ~Y));
                    }
                    (Mn(u), (Ge & 6) === 0 && ((ju = yt() + 500), Ei(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((R = Ga(u, 2)), R !== null && qt(R, u, 2), Yu(), Ro(u, 2));
            }
          if (((u = Ao(a)), u === null && mo(e, t, a, nr, n), u === i)) break;
          i = u;
        }
        i !== null && a.stopPropagation();
      } else mo(e, t, a, null, n);
    }
  }
  function Ao(e) {
    return ((e = Or(e)), Oo(e));
  }
  var nr = null;
  function Oo(e) {
    if (((nr = null), (e = wt(e)), e !== null)) {
      var t = l(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = o(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = d(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((nr = e), null);
  }
  function nh(e) {
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
        switch (la()) {
          case Tt:
            return 2;
          case Pa:
            return 8;
          case Kt:
          case Ot:
            return 32;
          case ke:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wo = !1,
    Ma = null,
    Ra = null,
    _a = null,
    Oi = new Map(),
    wi = new Map(),
    Aa = [],
    Y0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function ah(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Ma = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Ra = null;
        break;
      case 'mouseover':
      case 'mouseout':
        _a = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Oi.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        wi.delete(t.pointerId);
    }
  }
  function Di(e, t, n, a, i, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [i],
        }),
        t !== null && ((t = Ut(t)), t !== null && eh(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function V0(e, t, n, a, i) {
    switch (t) {
      case 'focusin':
        return ((Ma = Di(Ma, e, t, n, a, i)), !0);
      case 'dragenter':
        return ((Ra = Di(Ra, e, t, n, a, i)), !0);
      case 'mouseover':
        return ((_a = Di(_a, e, t, n, a, i)), !0);
      case 'pointerover':
        var u = i.pointerId;
        return (Oi.set(u, Di(Oi.get(u) || null, e, t, n, a, i)), !0);
      case 'gotpointercapture':
        return ((u = i.pointerId), wi.set(u, Di(wi.get(u) || null, e, t, n, a, i)), !0);
    }
    return !1;
  }
  function lh(e) {
    var t = wt(e.target);
    if (t !== null) {
      var n = l(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = o(n)), t !== null)) {
            ((e.blockedOn = t),
              xe(e.priority, function () {
                th(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              xe(e.priority, function () {
                th(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ar(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ao(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((Ar = a), n.target.dispatchEvent(a), (Ar = null));
      } else return ((t = Ut(n)), t !== null && eh(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function ih(e, t, n) {
    ar(e) && n.delete(t);
  }
  function q0() {
    ((wo = !1),
      Ma !== null && ar(Ma) && (Ma = null),
      Ra !== null && ar(Ra) && (Ra = null),
      _a !== null && ar(_a) && (_a = null),
      Oi.forEach(ih),
      wi.forEach(ih));
  }
  function lr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      wo || ((wo = !0), s.unstable_scheduleCallback(s.unstable_NormalPriority, q0)));
  }
  var ir = null;
  function uh(e) {
    ir !== e &&
      ((ir = e),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        ir === e && (ir = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            a = e[t + 1],
            i = e[t + 2];
          if (typeof a != 'function') {
            if (Oo(a || n) === null) continue;
            break;
          }
          var u = Ut(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            _s(u, { pending: !0, data: i, method: n.method, action: a }, a, i));
        }
      }));
  }
  function jl(e) {
    function t(Y) {
      return lr(Y, e);
    }
    (Ma !== null && lr(Ma, e),
      Ra !== null && lr(Ra, e),
      _a !== null && lr(_a, e),
      Oi.forEach(t),
      wi.forEach(t));
    for (var n = 0; n < Aa.length; n++) {
      var a = Aa[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Aa.length && ((n = Aa[0]), n.blockedOn === null); )
      (lh(n), n.blockedOn === null && Aa.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var i = n[a],
          u = n[a + 1],
          b = i[Ee] || null;
        if (typeof u == 'function') b || uh(n);
        else if (b) {
          var R = null;
          if (u && u.hasAttribute('formAction')) {
            if (((i = u), (b = u[Ee] || null))) R = b.formAction;
            else if (Oo(i) !== null) continue;
          } else R = b.action;
          (typeof R == 'function' ? (n[a + 1] = R) : (n.splice(a, 3), (a -= 3)), uh(n));
        }
      }
  }
  function rh() {
    function e(u) {
      u.canIntercept &&
        u.info === 'react-transition' &&
        u.intercept({
          handler: function () {
            return new Promise(function (b) {
              return (i = b);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function t() {
      (i !== null && (i(), (i = null)), a || setTimeout(n, 20));
    }
    function n() {
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
        i = null;
      return (
        navigation.addEventListener('navigate', e),
        navigation.addEventListener('navigatesuccess', t),
        navigation.addEventListener('navigateerror', t),
        setTimeout(n, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener('navigate', e),
            navigation.removeEventListener('navigatesuccess', t),
            navigation.removeEventListener('navigateerror', t),
            i !== null && (i(), (i = null)));
        }
      );
    }
  }
  function Do(e) {
    this._internalRoot = e;
  }
  ((ur.prototype.render = Do.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(h(409));
      var n = t.current,
        a = Pt();
      Im(n, a, e, t, null, null);
    }),
    (ur.prototype.unmount = Do.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Im(e.current, 2, null, e, null, null), Yu(), (t[qe] = null));
        }
      }));
  function ur(e) {
    this._internalRoot = e;
  }
  ur.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = me();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Aa.length && t !== 0 && t < Aa[n].priority; n++);
      (Aa.splice(n, 0, e), n === 0 && lh(e));
    }
  };
  var sh = E.version;
  if (sh !== '19.2.5') throw Error(h(527, sh, '19.2.5'));
  z.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(h(188))
        : ((e = Object.keys(e).join(',')), Error(h(268, e)));
    return ((e = g(t)), (e = e !== null ? m(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var X0 = {
    bundleType: 0,
    version: '19.2.5',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: M,
    reconcilerVersion: '19.2.5',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!rr.isDisabled && rr.supportsFiber)
      try {
        ((ia = rr.inject(X0)), (Nt = rr));
      } catch {}
  }
  return (
    (Ni.createRoot = function (e, t) {
      if (!c(e)) throw Error(h(299));
      var n = !1,
        a = '',
        i = vd,
        u = gd,
        b = yd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (b = t.onRecoverableError)),
        (t = $m(e, 1, !1, null, null, n, a, null, i, u, b, rh)),
        (e[qe] = t.current),
        fo(e),
        new Do(t)
      );
    }),
    (Ni.hydrateRoot = function (e, t, n) {
      if (!c(e)) throw Error(h(299));
      var a = !1,
        i = '',
        u = vd,
        b = gd,
        R = yd,
        Y = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (b = n.onCaughtError),
          n.onRecoverableError !== void 0 && (R = n.onRecoverableError),
          n.formState !== void 0 && (Y = n.formState)),
        (t = $m(e, 1, !0, t, n ?? null, a, i, Y, u, b, R, rh)),
        (t.context = Wm(null)),
        (n = t.current),
        (a = Pt()),
        (a = Oe(a)),
        (i = ma(a)),
        (i.callback = null),
        ha(n, i, a),
        (n = a),
        (t.current.lanes = n),
        Ua(t, n),
        Mn(t),
        (e[qe] = t.current),
        fo(e),
        new ur(t)
      );
    }),
    (Ni.version = '19.2.5'),
    Ni
  );
}
var xh;
function ey() {
  if (xh) return No.exports;
  xh = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (E) {
        console.error(E);
      }
  }
  return (s(), (No.exports = P0()), No.exports);
}
var ty = ey(),
  w = uc();
/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Sh = 'popstate';
function bh(s) {
  return (
    typeof s == 'object' &&
    s != null &&
    'pathname' in s &&
    'search' in s &&
    'hash' in s &&
    'state' in s &&
    'key' in s
  );
}
function ny(s = {}) {
  function E(h, c) {
    var g;
    let l = (g = c.state) == null ? void 0 : g.masked,
      { pathname: o, search: d, hash: f } = l || h.location;
    return Fo(
      '',
      { pathname: o, search: d, hash: f },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || 'default',
      l
        ? { pathname: h.location.pathname, search: h.location.search, hash: h.location.hash }
        : void 0
    );
  }
  function S(h, c) {
    return typeof c == 'string' ? c : Yi(c);
  }
  return ly(E, S, null, s);
}
function at(s, E) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(E);
}
function _n(s, E) {
  if (!s) {
    typeof console < 'u' && console.warn(E);
    try {
      throw new Error(E);
    } catch {}
  }
}
function ay() {
  return Math.random().toString(36).substring(2, 10);
}
function Eh(s, E) {
  return {
    usr: s.state,
    key: s.key,
    idx: E,
    masked: s.unstable_mask ? { pathname: s.pathname, search: s.search, hash: s.hash } : void 0,
  };
}
function Fo(s, E, S = null, h, c) {
  return {
    pathname: typeof s == 'string' ? s : s.pathname,
    search: '',
    hash: '',
    ...(typeof E == 'string' ? Vl(E) : E),
    state: S,
    key: (E && E.key) || h || ay(),
    unstable_mask: c,
  };
}
function Yi({ pathname: s = '/', search: E = '', hash: S = '' }) {
  return (
    E && E !== '?' && (s += E.charAt(0) === '?' ? E : '?' + E),
    S && S !== '#' && (s += S.charAt(0) === '#' ? S : '#' + S),
    s
  );
}
function Vl(s) {
  let E = {};
  if (s) {
    let S = s.indexOf('#');
    S >= 0 && ((E.hash = s.substring(S)), (s = s.substring(0, S)));
    let h = s.indexOf('?');
    (h >= 0 && ((E.search = s.substring(h)), (s = s.substring(0, h))), s && (E.pathname = s));
  }
  return E;
}
function ly(s, E, S, h = {}) {
  let { window: c = document.defaultView, v5Compat: l = !1 } = h,
    o = c.history,
    d = 'POP',
    f = null,
    g = m();
  g == null && ((g = 0), o.replaceState({ ...o.state, idx: g }, ''));
  function m() {
    return (o.state || { idx: null }).idx;
  }
  function v() {
    d = 'POP';
    let T = m(),
      _ = T == null ? null : T - g;
    ((g = T), f && f({ action: d, location: p.location, delta: _ }));
  }
  function y(T, _) {
    d = 'PUSH';
    let U = bh(T) ? T : Fo(p.location, T, _);
    g = m() + 1;
    let B = Eh(U, g),
      G = p.createHref(U.unstable_mask || U);
    try {
      o.pushState(B, '', G);
    } catch (C) {
      if (C instanceof DOMException && C.name === 'DataCloneError') throw C;
      c.location.assign(G);
    }
    l && f && f({ action: d, location: p.location, delta: 1 });
  }
  function r(T, _) {
    d = 'REPLACE';
    let U = bh(T) ? T : Fo(p.location, T, _);
    g = m();
    let B = Eh(U, g),
      G = p.createHref(U.unstable_mask || U);
    (o.replaceState(B, '', G), l && f && f({ action: d, location: p.location, delta: 0 }));
  }
  function x(T) {
    return iy(T);
  }
  let p = {
    get action() {
      return d;
    },
    get location() {
      return s(c, o);
    },
    listen(T) {
      if (f) throw new Error('A history only accepts one active listener');
      return (
        c.addEventListener(Sh, v),
        (f = T),
        () => {
          (c.removeEventListener(Sh, v), (f = null));
        }
      );
    },
    createHref(T) {
      return E(c, T);
    },
    createURL: x,
    encodeLocation(T) {
      let _ = x(T);
      return { pathname: _.pathname, search: _.search, hash: _.hash };
    },
    push: y,
    replace: r,
    go(T) {
      return o.go(T);
    },
  };
  return p;
}
function iy(s, E = !1) {
  let S = 'http://localhost';
  (typeof window < 'u' &&
    (S = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    at(S, 'No window.location.(origin|href) available to create URL'));
  let h = typeof s == 'string' ? s : Yi(s);
  return ((h = h.replace(/ $/, '%20')), !E && h.startsWith('//') && (h = S + h), new URL(h, S));
}
function Yh(s, E, S = '/') {
  return uy(s, E, S, !1);
}
function uy(s, E, S, h) {
  let c = typeof E == 'string' ? Vl(E) : E,
    l = ea(c.pathname || '/', S);
  if (l == null) return null;
  let o = Vh(s);
  ry(o);
  let d = null;
  for (let f = 0; d == null && f < o.length; ++f) {
    let g = py(l);
    d = gy(o[f], g, h);
  }
  return d;
}
function Vh(s, E = [], S = [], h = '', c = !1) {
  let l = (o, d, f = c, g) => {
    let m = {
      relativePath: g === void 0 ? o.path || '' : g,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: d,
      route: o,
    };
    if (m.relativePath.startsWith('/')) {
      if (!m.relativePath.startsWith(h) && f) return;
      (at(
        m.relativePath.startsWith(h),
        `Absolute route path "${m.relativePath}" nested under path "${h}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (m.relativePath = m.relativePath.slice(h.length)));
    }
    let v = xn([h, m.relativePath]),
      y = S.concat(m);
    (o.children &&
      o.children.length > 0 &&
      (at(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${v}".`
      ),
      Vh(o.children, E, y, v, f)),
      !(o.path == null && !o.index) && E.push({ path: v, score: hy(v, o.index), routesMeta: y }));
  };
  return (
    s.forEach((o, d) => {
      var f;
      if (o.path === '' || !((f = o.path) != null && f.includes('?'))) l(o, d);
      else for (let g of qh(o.path)) l(o, d, !0, g);
    }),
    E
  );
}
function qh(s) {
  let E = s.split('/');
  if (E.length === 0) return [];
  let [S, ...h] = E,
    c = S.endsWith('?'),
    l = S.replace(/\?$/, '');
  if (h.length === 0) return c ? [l, ''] : [l];
  let o = qh(h.join('/')),
    d = [];
  return (
    d.push(...o.map((f) => (f === '' ? l : [l, f].join('/')))),
    c && d.push(...o),
    d.map((f) => (s.startsWith('/') && f === '' ? '/' : f))
  );
}
function ry(s) {
  s.sort((E, S) =>
    E.score !== S.score
      ? S.score - E.score
      : vy(
          E.routesMeta.map((h) => h.childrenIndex),
          S.routesMeta.map((h) => h.childrenIndex)
        )
  );
}
var sy = /^:[\w-]+$/,
  oy = 3,
  cy = 2,
  fy = 1,
  dy = 10,
  my = -2,
  Th = (s) => s === '*';
function hy(s, E) {
  let S = s.split('/'),
    h = S.length;
  return (
    S.some(Th) && (h += my),
    E && (h += cy),
    S.filter((c) => !Th(c)).reduce((c, l) => c + (sy.test(l) ? oy : l === '' ? fy : dy), h)
  );
}
function vy(s, E) {
  return s.length === E.length && s.slice(0, -1).every((h, c) => h === E[c])
    ? s[s.length - 1] - E[E.length - 1]
    : 0;
}
function gy(s, E, S = !1) {
  let { routesMeta: h } = s,
    c = {},
    l = '/',
    o = [];
  for (let d = 0; d < h.length; ++d) {
    let f = h[d],
      g = d === h.length - 1,
      m = l === '/' ? E : E.slice(l.length) || '/',
      v = hr({ path: f.relativePath, caseSensitive: f.caseSensitive, end: g }, m),
      y = f.route;
    if (
      (!v &&
        g &&
        S &&
        !h[h.length - 1].route.index &&
        (v = hr({ path: f.relativePath, caseSensitive: f.caseSensitive, end: !1 }, m)),
      !v)
    )
      return null;
    (Object.assign(c, v.params),
      o.push({
        params: c,
        pathname: xn([l, v.pathname]),
        pathnameBase: Ey(xn([l, v.pathnameBase])),
        route: y,
      }),
      v.pathnameBase !== '/' && (l = xn([l, v.pathnameBase])));
  }
  return o;
}
function hr(s, E) {
  typeof s == 'string' && (s = { path: s, caseSensitive: !1, end: !0 });
  let [S, h] = yy(s.path, s.caseSensitive, s.end),
    c = E.match(S);
  if (!c) return null;
  let l = c[0],
    o = l.replace(/(.)\/+$/, '$1'),
    d = c.slice(1);
  return {
    params: h.reduce((g, { paramName: m, isOptional: v }, y) => {
      if (m === '*') {
        let x = d[y] || '';
        o = l.slice(0, l.length - x.length).replace(/(.)\/+$/, '$1');
      }
      const r = d[y];
      return (v && !r ? (g[m] = void 0) : (g[m] = (r || '').replace(/%2F/g, '/')), g);
    }, {}),
    pathname: l,
    pathnameBase: o,
    pattern: s,
  };
}
function yy(s, E = !1, S = !0) {
  _n(
    s === '*' || !s.endsWith('*') || s.endsWith('/*'),
    `Route path "${s}" will be treated as if it were "${s.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/, '/*')}".`
  );
  let h = [],
    c =
      '^' +
      s
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(/\/:([\w-]+)(\?)?/g, (o, d, f, g, m) => {
          if ((h.push({ paramName: d, isOptional: f != null }), f)) {
            let v = m.charAt(g + o.length);
            return v && v !== '/' ? '/([^\\/]*)' : '(?:/([^\\/]*))?';
          }
          return '/([^\\/]+)';
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    s.endsWith('*')
      ? (h.push({ paramName: '*' }), (c += s === '*' || s === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : S
        ? (c += '\\/*$')
        : s !== '' && s !== '/' && (c += '(?:(?=\\/|$))'),
    [new RegExp(c, E ? void 0 : 'i'), h]
  );
}
function py(s) {
  try {
    return s
      .split('/')
      .map((E) => decodeURIComponent(E).replace(/\//g, '%2F'))
      .join('/');
  } catch (E) {
    return (
      _n(
        !1,
        `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${E}).`
      ),
      s
    );
  }
}
function ea(s, E) {
  if (E === '/') return s;
  if (!s.toLowerCase().startsWith(E.toLowerCase())) return null;
  let S = E.endsWith('/') ? E.length - 1 : E.length,
    h = s.charAt(S);
  return h && h !== '/' ? null : s.slice(S) || '/';
}
var xy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Sy(s, E = '/') {
  let { pathname: S, search: h = '', hash: c = '' } = typeof s == 'string' ? Vl(s) : s,
    l;
  return (
    S ? ((S = Qh(S)), S.startsWith('/') ? (l = Ch(S.substring(1), '/')) : (l = Ch(S, E))) : (l = E),
    { pathname: l, search: Ty(h), hash: Cy(c) }
  );
}
function Ch(s, E) {
  let S = vr(E).split('/');
  return (
    s.split('/').forEach((c) => {
      c === '..' ? S.length > 1 && S.pop() : c !== '.' && S.push(c);
    }),
    S.length > 1 ? S.join('/') : '/'
  );
}
function jo(s, E, S, h) {
  return `Cannot include a '${s}' character in a manually specified \`to.${E}\` field [${JSON.stringify(h)}].  Please separate it out to the \`to.${S}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function by(s) {
  return s.filter((E, S) => S === 0 || (E.route.path && E.route.path.length > 0));
}
function Xh(s) {
  let E = by(s);
  return E.map((S, h) => (h === E.length - 1 ? S.pathname : S.pathnameBase));
}
function rc(s, E, S, h = !1) {
  let c;
  typeof s == 'string'
    ? (c = Vl(s))
    : ((c = { ...s }),
      at(!c.pathname || !c.pathname.includes('?'), jo('?', 'pathname', 'search', c)),
      at(!c.pathname || !c.pathname.includes('#'), jo('#', 'pathname', 'hash', c)),
      at(!c.search || !c.search.includes('#'), jo('#', 'search', 'hash', c)));
  let l = s === '' || c.pathname === '',
    o = l ? '/' : c.pathname,
    d;
  if (o == null) d = S;
  else {
    let v = E.length - 1;
    if (!h && o.startsWith('..')) {
      let y = o.split('/');
      for (; y[0] === '..'; ) (y.shift(), (v -= 1));
      c.pathname = y.join('/');
    }
    d = v >= 0 ? E[v] : '/';
  }
  let f = Sy(c, d),
    g = o && o !== '/' && o.endsWith('/'),
    m = (l || o === '.') && S.endsWith('/');
  return (!f.pathname.endsWith('/') && (g || m) && (f.pathname += '/'), f);
}
var Qh = (s) => s.replace(/\/\/+/g, '/'),
  xn = (s) => Qh(s.join('/')),
  vr = (s) => s.replace(/\/+$/, ''),
  Ey = (s) => vr(s).replace(/^\/*/, '/'),
  Ty = (s) => (!s || s === '?' ? '' : s.startsWith('?') ? s : '?' + s),
  Cy = (s) => (!s || s === '#' ? '' : s.startsWith('#') ? s : '#' + s),
  My = class {
    constructor(s, E, S, h = !1) {
      ((this.status = s),
        (this.statusText = E || ''),
        (this.internal = h),
        S instanceof Error ? ((this.data = S.toString()), (this.error = S)) : (this.data = S));
    }
  };
function Ry(s) {
  return (
    s != null &&
    typeof s.status == 'number' &&
    typeof s.statusText == 'string' &&
    typeof s.internal == 'boolean' &&
    'data' in s
  );
}
function _y(s) {
  let E = s.map((S) => S.route.path).filter(Boolean);
  return xn(E) || '/';
}
var Zh =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function Kh(s, E) {
  let S = s;
  if (typeof S != 'string' || !xy.test(S)) return { absoluteURL: void 0, isExternal: !1, to: S };
  let h = S,
    c = !1;
  if (Zh)
    try {
      let l = new URL(window.location.href),
        o = S.startsWith('//') ? new URL(l.protocol + S) : new URL(S),
        d = ea(o.pathname, E);
      o.origin === l.origin && d != null ? (S = d + o.search + o.hash) : (c = !0);
    } catch {
      _n(
        !1,
        `<Link to="${S}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: h, isExternal: c, to: S };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var kh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(kh);
var Ay = ['GET', ...kh];
new Set(Ay);
var ql = w.createContext(null);
ql.displayName = 'DataRouter';
var yr = w.createContext(null);
yr.displayName = 'DataRouterState';
var Jh = w.createContext(!1);
function Oy() {
  return w.useContext(Jh);
}
var Fh = w.createContext({ isTransitioning: !1 });
Fh.displayName = 'ViewTransition';
var wy = w.createContext(new Map());
wy.displayName = 'Fetchers';
var Dy = w.createContext(null);
Dy.displayName = 'Await';
var hn = w.createContext(null);
hn.displayName = 'Navigation';
var Vi = w.createContext(null);
Vi.displayName = 'Location';
var ta = w.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ta.displayName = 'Route';
var sc = w.createContext(null);
sc.displayName = 'RouteError';
var $h = 'REACT_ROUTER_ERROR',
  zy = 'REDIRECT',
  Ny = 'ROUTE_ERROR_RESPONSE';
function Uy(s) {
  if (s.startsWith(`${$h}:${zy}:{`))
    try {
      let E = JSON.parse(s.slice(28));
      if (
        typeof E == 'object' &&
        E &&
        typeof E.status == 'number' &&
        typeof E.statusText == 'string' &&
        typeof E.location == 'string' &&
        typeof E.reloadDocument == 'boolean' &&
        typeof E.replace == 'boolean'
      )
        return E;
    } catch {}
}
function By(s) {
  if (s.startsWith(`${$h}:${Ny}:{`))
    try {
      let E = JSON.parse(s.slice(40));
      if (
        typeof E == 'object' &&
        E &&
        typeof E.status == 'number' &&
        typeof E.statusText == 'string'
      )
        return new My(E.status, E.statusText, E.data);
    } catch {}
}
function Ly(s, { relative: E } = {}) {
  at(qi(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: S, navigator: h } = w.useContext(hn),
    { hash: c, pathname: l, search: o } = Xi(s, { relative: E }),
    d = l;
  return (
    S !== '/' && (d = l === '/' ? S : xn([S, l])),
    h.createHref({ pathname: d, search: o, hash: c })
  );
}
function qi() {
  return w.useContext(Vi) != null;
}
function na() {
  return (
    at(qi(), 'useLocation() may be used only in the context of a <Router> component.'),
    w.useContext(Vi).location
  );
}
var Wh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Ih(s) {
  w.useContext(hn).static || w.useLayoutEffect(s);
}
function Hy() {
  let { isDataRoute: s } = w.useContext(ta);
  return s ? $y() : jy();
}
function jy() {
  at(qi(), 'useNavigate() may be used only in the context of a <Router> component.');
  let s = w.useContext(ql),
    { basename: E, navigator: S } = w.useContext(hn),
    { matches: h } = w.useContext(ta),
    { pathname: c } = na(),
    l = JSON.stringify(Xh(h)),
    o = w.useRef(!1);
  return (
    Ih(() => {
      o.current = !0;
    }),
    w.useCallback(
      (f, g = {}) => {
        if ((_n(o.current, Wh), !o.current)) return;
        if (typeof f == 'number') {
          S.go(f);
          return;
        }
        let m = rc(f, JSON.parse(l), c, g.relative === 'path');
        (s == null && E !== '/' && (m.pathname = m.pathname === '/' ? E : xn([E, m.pathname])),
          (g.replace ? S.replace : S.push)(m, g.state, g));
      },
      [E, S, l, c, s]
    )
  );
}
w.createContext(null);
function Xi(s, { relative: E } = {}) {
  let { matches: S } = w.useContext(ta),
    { pathname: h } = na(),
    c = JSON.stringify(Xh(S));
  return w.useMemo(() => rc(s, JSON.parse(c), h, E === 'path'), [s, c, h, E]);
}
function Gy(s, E) {
  return Ph(s, E);
}
function Ph(s, E, S) {
  var T;
  at(qi(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: h } = w.useContext(hn),
    { matches: c } = w.useContext(ta),
    l = c[c.length - 1],
    o = l ? l.params : {},
    d = l ? l.pathname : '/',
    f = l ? l.pathnameBase : '/',
    g = l && l.route;
  {
    let _ = (g && g.path) || '';
    tv(
      d,
      !g || _.endsWith('*') || _.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_ === '/' ? '*' : `${_}/*`}">.`
    );
  }
  let m = na(),
    v;
  if (E) {
    let _ = typeof E == 'string' ? Vl(E) : E;
    (at(
      f === '/' || ((T = _.pathname) == null ? void 0 : T.startsWith(f)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${_.pathname}" was given in the \`location\` prop.`
    ),
      (v = _));
  } else v = m;
  let y = v.pathname || '/',
    r = y;
  if (f !== '/') {
    let _ = f.replace(/^\//, '').split('/');
    r = '/' + y.replace(/^\//, '').split('/').slice(_.length).join('/');
  }
  let x = Yh(s, { pathname: r });
  (_n(g || x != null, `No routes matched location "${v.pathname}${v.search}${v.hash}" `),
    _n(
      x == null ||
        x[x.length - 1].route.element !== void 0 ||
        x[x.length - 1].route.Component !== void 0 ||
        x[x.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let p = Qy(
    x &&
      x.map((_) =>
        Object.assign({}, _, {
          params: Object.assign({}, o, _.params),
          pathname: xn([
            f,
            h.encodeLocation
              ? h.encodeLocation(
                  _.pathname.replace(/%/g, '%25').replace(/\?/g, '%3F').replace(/#/g, '%23')
                ).pathname
              : _.pathname,
          ]),
          pathnameBase:
            _.pathnameBase === '/'
              ? f
              : xn([
                  f,
                  h.encodeLocation
                    ? h.encodeLocation(
                        _.pathnameBase
                          .replace(/%/g, '%25')
                          .replace(/\?/g, '%3F')
                          .replace(/#/g, '%23')
                      ).pathname
                    : _.pathnameBase,
                ]),
        })
      ),
    c,
    S
  );
  return E && p
    ? w.createElement(
        Vi.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              unstable_mask: void 0,
              ...v,
            },
            navigationType: 'POP',
          },
        },
        p
      )
    : p;
}
function Yy() {
  let s = Fy(),
    E = Ry(s) ? `${s.status} ${s.statusText}` : s instanceof Error ? s.message : JSON.stringify(s),
    S = s instanceof Error ? s.stack : null,
    h = 'rgba(200,200,200, 0.5)',
    c = { padding: '0.5rem', backgroundColor: h },
    l = { padding: '2px 4px', backgroundColor: h },
    o = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', s),
    (o = w.createElement(
      w.Fragment,
      null,
      w.createElement('p', null, '💿 Hey developer 👋'),
      w.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        w.createElement('code', { style: l }, 'ErrorBoundary'),
        ' or',
        ' ',
        w.createElement('code', { style: l }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    w.createElement(
      w.Fragment,
      null,
      w.createElement('h2', null, 'Unexpected Application Error!'),
      w.createElement('h3', { style: { fontStyle: 'italic' } }, E),
      S ? w.createElement('pre', { style: c }, S) : null,
      o
    )
  );
}
var Vy = w.createElement(Yy, null),
  ev = class extends w.Component {
    constructor(s) {
      (super(s),
        (this.state = { location: s.location, revalidation: s.revalidation, error: s.error }));
    }
    static getDerivedStateFromError(s) {
      return { error: s };
    }
    static getDerivedStateFromProps(s, E) {
      return E.location !== s.location || (E.revalidation !== 'idle' && s.revalidation === 'idle')
        ? { error: s.error, location: s.location, revalidation: s.revalidation }
        : {
            error: s.error !== void 0 ? s.error : E.error,
            location: E.location,
            revalidation: s.revalidation || E.revalidation,
          };
    }
    componentDidCatch(s, E) {
      this.props.onError
        ? this.props.onError(s, E)
        : console.error('React Router caught the following error during render', s);
    }
    render() {
      let s = this.state.error;
      if (
        this.context &&
        typeof s == 'object' &&
        s &&
        'digest' in s &&
        typeof s.digest == 'string'
      ) {
        const S = By(s.digest);
        S && (s = S);
      }
      let E =
        s !== void 0
          ? w.createElement(
              ta.Provider,
              { value: this.props.routeContext },
              w.createElement(sc.Provider, { value: s, children: this.props.component })
            )
          : this.props.children;
      return this.context ? w.createElement(qy, { error: s }, E) : E;
    }
  };
ev.contextType = Jh;
var Go = new WeakMap();
function qy({ children: s, error: E }) {
  let { basename: S } = w.useContext(hn);
  if (typeof E == 'object' && E && 'digest' in E && typeof E.digest == 'string') {
    let h = Uy(E.digest);
    if (h) {
      let c = Go.get(E);
      if (c) throw c;
      let l = Kh(h.location, S);
      if (Zh && !Go.get(E))
        if (l.isExternal || h.reloadDocument) window.location.href = l.absoluteURL || l.to;
        else {
          const o = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(l.to, { replace: h.replace })
          );
          throw (Go.set(E, o), o);
        }
      return w.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${l.absoluteURL || l.to}`,
      });
    }
  }
  return s;
}
function Xy({ routeContext: s, match: E, children: S }) {
  let h = w.useContext(ql);
  return (
    h &&
      h.static &&
      h.staticContext &&
      (E.route.errorElement || E.route.ErrorBoundary) &&
      (h.staticContext._deepestRenderedBoundaryId = E.route.id),
    w.createElement(ta.Provider, { value: s }, S)
  );
}
function Qy(s, E = [], S) {
  let h = S == null ? void 0 : S.state;
  if (s == null) {
    if (!h) return null;
    if (h.errors) s = h.matches;
    else if (E.length === 0 && !h.initialized && h.matches.length > 0) s = h.matches;
    else return null;
  }
  let c = s,
    l = h == null ? void 0 : h.errors;
  if (l != null) {
    let m = c.findIndex((v) => v.route.id && (l == null ? void 0 : l[v.route.id]) !== void 0);
    (at(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(l).join(',')}`
    ),
      (c = c.slice(0, Math.min(c.length, m + 1))));
  }
  let o = !1,
    d = -1;
  if (S && h) {
    o = h.renderFallback;
    for (let m = 0; m < c.length; m++) {
      let v = c[m];
      if (((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (d = m), v.route.id)) {
        let { loaderData: y, errors: r } = h,
          x = v.route.loader && !y.hasOwnProperty(v.route.id) && (!r || r[v.route.id] === void 0);
        if (v.route.lazy || x) {
          (S.isStatic && (o = !0), d >= 0 ? (c = c.slice(0, d + 1)) : (c = [c[0]]));
          break;
        }
      }
    }
  }
  let f = S == null ? void 0 : S.onError,
    g =
      h && f
        ? (m, v) => {
            var y, r;
            f(m, {
              location: h.location,
              params:
                ((r = (y = h.matches) == null ? void 0 : y[0]) == null ? void 0 : r.params) ?? {},
              unstable_pattern: _y(h.matches),
              errorInfo: v,
            });
          }
        : void 0;
  return c.reduceRight((m, v, y) => {
    let r,
      x = !1,
      p = null,
      T = null;
    h &&
      ((r = l && v.route.id ? l[v.route.id] : void 0),
      (p = v.route.errorElement || Vy),
      o &&
        (d < 0 && y === 0
          ? (tv(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (x = !0),
            (T = null))
          : d === y && ((x = !0), (T = v.route.hydrateFallbackElement || null))));
    let _ = E.concat(c.slice(0, y + 1)),
      U = () => {
        let B;
        return (
          r
            ? (B = p)
            : x
              ? (B = T)
              : v.route.Component
                ? (B = w.createElement(v.route.Component, null))
                : v.route.element
                  ? (B = v.route.element)
                  : (B = m),
          w.createElement(Xy, {
            match: v,
            routeContext: { outlet: m, matches: _, isDataRoute: h != null },
            children: B,
          })
        );
      };
    return h && (v.route.ErrorBoundary || v.route.errorElement || y === 0)
      ? w.createElement(ev, {
          location: h.location,
          revalidation: h.revalidation,
          component: p,
          error: r,
          children: U(),
          routeContext: { outlet: null, matches: _, isDataRoute: !0 },
          onError: g,
        })
      : U();
  }, null);
}
function oc(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Zy(s) {
  let E = w.useContext(ql);
  return (at(E, oc(s)), E);
}
function Ky(s) {
  let E = w.useContext(yr);
  return (at(E, oc(s)), E);
}
function ky(s) {
  let E = w.useContext(ta);
  return (at(E, oc(s)), E);
}
function cc(s) {
  let E = ky(s),
    S = E.matches[E.matches.length - 1];
  return (at(S.route.id, `${s} can only be used on routes that contain a unique "id"`), S.route.id);
}
function Jy() {
  return cc('useRouteId');
}
function Fy() {
  var h;
  let s = w.useContext(sc),
    E = Ky('useRouteError'),
    S = cc('useRouteError');
  return s !== void 0 ? s : (h = E.errors) == null ? void 0 : h[S];
}
function $y() {
  let { router: s } = Zy('useNavigate'),
    E = cc('useNavigate'),
    S = w.useRef(!1);
  return (
    Ih(() => {
      S.current = !0;
    }),
    w.useCallback(
      async (c, l = {}) => {
        (_n(S.current, Wh),
          S.current &&
            (typeof c == 'number'
              ? await s.navigate(c)
              : await s.navigate(c, { fromRouteId: E, ...l })));
      },
      [s, E]
    )
  );
}
var Mh = {};
function tv(s, E, S) {
  !E && !Mh[s] && ((Mh[s] = !0), _n(!1, S));
}
w.memo(Wy);
function Wy({ routes: s, future: E, state: S, isStatic: h, onError: c }) {
  return Ph(s, void 0, { state: S, isStatic: h, onError: c });
}
function $o(s) {
  at(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function Iy({
  basename: s = '/',
  children: E = null,
  location: S,
  navigationType: h = 'POP',
  navigator: c,
  static: l = !1,
  unstable_useTransitions: o,
}) {
  at(
    !qi(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let d = s.replace(/^\/*/, '/'),
    f = w.useMemo(
      () => ({ basename: d, navigator: c, static: l, unstable_useTransitions: o, future: {} }),
      [d, c, l, o]
    );
  typeof S == 'string' && (S = Vl(S));
  let {
      pathname: g = '/',
      search: m = '',
      hash: v = '',
      state: y = null,
      key: r = 'default',
      unstable_mask: x,
    } = S,
    p = w.useMemo(() => {
      let T = ea(g, d);
      return T == null
        ? null
        : {
            location: { pathname: T, search: m, hash: v, state: y, key: r, unstable_mask: x },
            navigationType: h,
          };
    }, [d, g, m, v, y, r, h, x]);
  return (
    _n(
      p != null,
      `<Router basename="${d}"> is not able to match the URL "${g}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    p == null
      ? null
      : w.createElement(
          hn.Provider,
          { value: f },
          w.createElement(Vi.Provider, { children: E, value: p })
        )
  );
}
function Py({ children: s, location: E }) {
  return Gy(Wo(s), E);
}
function Wo(s, E = []) {
  let S = [];
  return (
    w.Children.forEach(s, (h, c) => {
      if (!w.isValidElement(h)) return;
      let l = [...E, c];
      if (h.type === w.Fragment) {
        S.push.apply(S, Wo(h.props.children, l));
        return;
      }
      (at(
        h.type === $o,
        `[${typeof h.type == 'string' ? h.type : h.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        at(!h.props.index || !h.props.children, 'An index route cannot have child routes.'));
      let o = {
        id: h.props.id || l.join('-'),
        caseSensitive: h.props.caseSensitive,
        element: h.props.element,
        Component: h.props.Component,
        index: h.props.index,
        path: h.props.path,
        middleware: h.props.middleware,
        loader: h.props.loader,
        action: h.props.action,
        hydrateFallbackElement: h.props.hydrateFallbackElement,
        HydrateFallback: h.props.HydrateFallback,
        errorElement: h.props.errorElement,
        ErrorBoundary: h.props.ErrorBoundary,
        hasErrorBoundary:
          h.props.hasErrorBoundary === !0 ||
          h.props.ErrorBoundary != null ||
          h.props.errorElement != null,
        shouldRevalidate: h.props.shouldRevalidate,
        handle: h.props.handle,
        lazy: h.props.lazy,
      };
      (h.props.children && (o.children = Wo(h.props.children, l)), S.push(o));
    }),
    S
  );
}
var fr = 'get',
  dr = 'application/x-www-form-urlencoded';
function pr(s) {
  return typeof HTMLElement < 'u' && s instanceof HTMLElement;
}
function ep(s) {
  return pr(s) && s.tagName.toLowerCase() === 'button';
}
function tp(s) {
  return pr(s) && s.tagName.toLowerCase() === 'form';
}
function np(s) {
  return pr(s) && s.tagName.toLowerCase() === 'input';
}
function ap(s) {
  return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
}
function lp(s, E) {
  return s.button === 0 && (!E || E === '_self') && !ap(s);
}
var sr = null;
function ip() {
  if (sr === null)
    try {
      (new FormData(document.createElement('form'), 0), (sr = !1));
    } catch {
      sr = !0;
    }
  return sr;
}
var up = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function Yo(s) {
  return s != null && !up.has(s)
    ? (_n(
        !1,
        `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${dr}"`
      ),
      null)
    : s;
}
function rp(s, E) {
  let S, h, c, l, o;
  if (tp(s)) {
    let d = s.getAttribute('action');
    ((h = d ? ea(d, E) : null),
      (S = s.getAttribute('method') || fr),
      (c = Yo(s.getAttribute('enctype')) || dr),
      (l = new FormData(s)));
  } else if (ep(s) || (np(s) && (s.type === 'submit' || s.type === 'image'))) {
    let d = s.form;
    if (d == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let f = s.getAttribute('formaction') || d.getAttribute('action');
    if (
      ((h = f ? ea(f, E) : null),
      (S = s.getAttribute('formmethod') || d.getAttribute('method') || fr),
      (c = Yo(s.getAttribute('formenctype')) || Yo(d.getAttribute('enctype')) || dr),
      (l = new FormData(d, s)),
      !ip())
    ) {
      let { name: g, type: m, value: v } = s;
      if (m === 'image') {
        let y = g ? `${g}.` : '';
        (l.append(`${y}x`, '0'), l.append(`${y}y`, '0'));
      } else g && l.append(g, v);
    }
  } else {
    if (pr(s))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((S = fr), (h = null), (c = dr), (o = s));
  }
  return (
    l && c === 'text/plain' && ((o = l), (l = void 0)),
    { action: h, method: S.toLowerCase(), encType: c, formData: l, body: o }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function fc(s, E) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(E);
}
function nv(s, E, S, h) {
  let c =
    typeof s == 'string'
      ? new URL(s, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : s;
  return (
    S
      ? c.pathname.endsWith('/')
        ? (c.pathname = `${c.pathname}_.${h}`)
        : (c.pathname = `${c.pathname}.${h}`)
      : c.pathname === '/'
        ? (c.pathname = `_root.${h}`)
        : E && ea(c.pathname, E) === '/'
          ? (c.pathname = `${vr(E)}/_root.${h}`)
          : (c.pathname = `${vr(c.pathname)}.${h}`),
    c
  );
}
async function sp(s, E) {
  if (s.id in E) return E[s.id];
  try {
    let S = await import(s.module);
    return ((E[s.id] = S), S);
  } catch (S) {
    return (
      console.error(`Error loading route module \`${s.module}\`, reloading page...`),
      console.error(S),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function op(s) {
  return s == null
    ? !1
    : s.href == null
      ? s.rel === 'preload' && typeof s.imageSrcSet == 'string' && typeof s.imageSizes == 'string'
      : typeof s.rel == 'string' && typeof s.href == 'string';
}
async function cp(s, E, S) {
  let h = await Promise.all(
    s.map(async (c) => {
      let l = E.routes[c.route.id];
      if (l) {
        let o = await sp(l, S);
        return o.links ? o.links() : [];
      }
      return [];
    })
  );
  return hp(
    h
      .flat(1)
      .filter(op)
      .filter((c) => c.rel === 'stylesheet' || c.rel === 'preload')
      .map((c) =>
        c.rel === 'stylesheet' ? { ...c, rel: 'prefetch', as: 'style' } : { ...c, rel: 'prefetch' }
      )
  );
}
function Rh(s, E, S, h, c, l) {
  let o = (f, g) => (S[g] ? f.route.id !== S[g].route.id : !0),
    d = (f, g) => {
      var m;
      return (
        S[g].pathname !== f.pathname ||
        (((m = S[g].route.path) == null ? void 0 : m.endsWith('*')) &&
          S[g].params['*'] !== f.params['*'])
      );
    };
  return l === 'assets'
    ? E.filter((f, g) => o(f, g) || d(f, g))
    : l === 'data'
      ? E.filter((f, g) => {
          var v;
          let m = h.routes[f.route.id];
          if (!m || !m.hasLoader) return !1;
          if (o(f, g) || d(f, g)) return !0;
          if (f.route.shouldRevalidate) {
            let y = f.route.shouldRevalidate({
              currentUrl: new URL(c.pathname + c.search + c.hash, window.origin),
              currentParams: ((v = S[0]) == null ? void 0 : v.params) || {},
              nextUrl: new URL(s, window.origin),
              nextParams: f.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof y == 'boolean') return y;
          }
          return !0;
        })
      : [];
}
function fp(s, E, { includeHydrateFallback: S } = {}) {
  return dp(
    s
      .map((h) => {
        let c = E.routes[h.route.id];
        if (!c) return [];
        let l = [c.module];
        return (
          c.clientActionModule && (l = l.concat(c.clientActionModule)),
          c.clientLoaderModule && (l = l.concat(c.clientLoaderModule)),
          S && c.hydrateFallbackModule && (l = l.concat(c.hydrateFallbackModule)),
          c.imports && (l = l.concat(c.imports)),
          l
        );
      })
      .flat(1)
  );
}
function dp(s) {
  return [...new Set(s)];
}
function mp(s) {
  let E = {},
    S = Object.keys(s).sort();
  for (let h of S) E[h] = s[h];
  return E;
}
function hp(s, E) {
  let S = new Set();
  return (
    new Set(E),
    s.reduce((h, c) => {
      let l = JSON.stringify(mp(c));
      return (S.has(l) || (S.add(l), h.push({ key: l, link: c })), h);
    }, [])
  );
}
function dc() {
  let s = w.useContext(ql);
  return (fc(s, 'You must render this element inside a <DataRouterContext.Provider> element'), s);
}
function vp() {
  let s = w.useContext(yr);
  return (
    fc(s, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    s
  );
}
var mc = w.createContext(void 0);
mc.displayName = 'FrameworkContext';
function hc() {
  let s = w.useContext(mc);
  return (fc(s, 'You must render this element inside a <HydratedRouter> element'), s);
}
function gp(s, E) {
  let S = w.useContext(mc),
    [h, c] = w.useState(!1),
    [l, o] = w.useState(!1),
    { onFocus: d, onBlur: f, onMouseEnter: g, onMouseLeave: m, onTouchStart: v } = E,
    y = w.useRef(null);
  (w.useEffect(() => {
    if ((s === 'render' && o(!0), s === 'viewport')) {
      let p = (_) => {
          _.forEach((U) => {
            o(U.isIntersecting);
          });
        },
        T = new IntersectionObserver(p, { threshold: 0.5 });
      return (
        y.current && T.observe(y.current),
        () => {
          T.disconnect();
        }
      );
    }
  }, [s]),
    w.useEffect(() => {
      if (h) {
        let p = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(p);
        };
      }
    }, [h]));
  let r = () => {
      c(!0);
    },
    x = () => {
      (c(!1), o(!1));
    };
  return S
    ? s !== 'intent'
      ? [l, y, {}]
      : [
          l,
          y,
          {
            onFocus: Ui(d, r),
            onBlur: Ui(f, x),
            onMouseEnter: Ui(g, r),
            onMouseLeave: Ui(m, x),
            onTouchStart: Ui(v, r),
          },
        ]
    : [!1, y, {}];
}
function Ui(s, E) {
  return (S) => {
    (s && s(S), S.defaultPrevented || E(S));
  };
}
function yp({ page: s, ...E }) {
  let S = Oy(),
    { router: h } = dc(),
    c = w.useMemo(() => Yh(h.routes, s, h.basename), [h.routes, s, h.basename]);
  return c
    ? S
      ? w.createElement(xp, { page: s, matches: c, ...E })
      : w.createElement(Sp, { page: s, matches: c, ...E })
    : null;
}
function pp(s) {
  let { manifest: E, routeModules: S } = hc(),
    [h, c] = w.useState([]);
  return (
    w.useEffect(() => {
      let l = !1;
      return (
        cp(s, E, S).then((o) => {
          l || c(o);
        }),
        () => {
          l = !0;
        }
      );
    }, [s, E, S]),
    h
  );
}
function xp({ page: s, matches: E, ...S }) {
  let h = na(),
    { future: c } = hc(),
    { basename: l } = dc(),
    o = w.useMemo(() => {
      if (s === h.pathname + h.search + h.hash) return [];
      let d = nv(s, l, c.unstable_trailingSlashAwareDataRequests, 'rsc'),
        f = !1,
        g = [];
      for (let m of E)
        typeof m.route.shouldRevalidate == 'function' ? (f = !0) : g.push(m.route.id);
      return (
        f && g.length > 0 && d.searchParams.set('_routes', g.join(',')),
        [d.pathname + d.search]
      );
    }, [l, c.unstable_trailingSlashAwareDataRequests, s, h, E]);
  return w.createElement(
    w.Fragment,
    null,
    o.map((d) => w.createElement('link', { key: d, rel: 'prefetch', as: 'fetch', href: d, ...S }))
  );
}
function Sp({ page: s, matches: E, ...S }) {
  let h = na(),
    { future: c, manifest: l, routeModules: o } = hc(),
    { basename: d } = dc(),
    { loaderData: f, matches: g } = vp(),
    m = w.useMemo(() => Rh(s, E, g, l, h, 'data'), [s, E, g, l, h]),
    v = w.useMemo(() => Rh(s, E, g, l, h, 'assets'), [s, E, g, l, h]),
    y = w.useMemo(() => {
      if (s === h.pathname + h.search + h.hash) return [];
      let p = new Set(),
        T = !1;
      if (
        (E.forEach((U) => {
          var G;
          let B = l.routes[U.route.id];
          !B ||
            !B.hasLoader ||
            ((!m.some((C) => C.route.id === U.route.id) &&
              U.route.id in f &&
              (G = o[U.route.id]) != null &&
              G.shouldRevalidate) ||
            B.hasClientLoader
              ? (T = !0)
              : p.add(U.route.id));
        }),
        p.size === 0)
      )
        return [];
      let _ = nv(s, d, c.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        T &&
          p.size > 0 &&
          _.searchParams.set(
            '_routes',
            E.filter((U) => p.has(U.route.id))
              .map((U) => U.route.id)
              .join(',')
          ),
        [_.pathname + _.search]
      );
    }, [d, c.unstable_trailingSlashAwareDataRequests, f, h, l, m, E, s, o]),
    r = w.useMemo(() => fp(v, l), [v, l]),
    x = pp(v);
  return w.createElement(
    w.Fragment,
    null,
    y.map((p) => w.createElement('link', { key: p, rel: 'prefetch', as: 'fetch', href: p, ...S })),
    r.map((p) => w.createElement('link', { key: p, rel: 'modulepreload', href: p, ...S })),
    x.map(({ key: p, link: T }) =>
      w.createElement('link', {
        key: p,
        nonce: S.nonce,
        ...T,
        crossOrigin: T.crossOrigin ?? S.crossOrigin,
      })
    )
  );
}
function bp(...s) {
  return (E) => {
    s.forEach((S) => {
      typeof S == 'function' ? S(E) : S != null && (S.current = E);
    });
  };
}
var Ep =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  Ep && (window.__reactRouterVersion = '7.14.2');
} catch {}
function Tp({ basename: s, children: E, unstable_useTransitions: S, window: h }) {
  let c = w.useRef();
  c.current == null && (c.current = ny({ window: h, v5Compat: !0 }));
  let l = c.current,
    [o, d] = w.useState({ action: l.action, location: l.location }),
    f = w.useCallback(
      (g) => {
        S === !1 ? d(g) : w.startTransition(() => d(g));
      },
      [S]
    );
  return (
    w.useLayoutEffect(() => l.listen(f), [l, f]),
    w.createElement(Iy, {
      basename: s,
      children: E,
      location: o.location,
      navigationType: o.action,
      navigator: l,
      unstable_useTransitions: S,
    })
  );
}
var av = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  lv = w.forwardRef(function (
    {
      onClick: E,
      discover: S = 'render',
      prefetch: h = 'none',
      relative: c,
      reloadDocument: l,
      replace: o,
      unstable_mask: d,
      state: f,
      target: g,
      to: m,
      preventScrollReset: v,
      viewTransition: y,
      unstable_defaultShouldRevalidate: r,
      ...x
    },
    p
  ) {
    let { basename: T, navigator: _, unstable_useTransitions: U } = w.useContext(hn),
      B = typeof m == 'string' && av.test(m),
      G = Kh(m, T);
    m = G.to;
    let C = Ly(m, { relative: c }),
      O = na(),
      D = null;
    if (d) {
      let W = rc(d, [], O.unstable_mask ? O.unstable_mask.pathname : '/', !0);
      (T !== '/' && (W.pathname = W.pathname === '/' ? T : xn([T, W.pathname])),
        (D = _.createHref(W)));
    }
    let [A, j, L] = gp(h, x),
      H = _p(m, {
        replace: o,
        unstable_mask: d,
        state: f,
        target: g,
        preventScrollReset: v,
        relative: c,
        viewTransition: y,
        unstable_defaultShouldRevalidate: r,
        unstable_useTransitions: U,
      });
    function V(W) {
      (E && E(W), W.defaultPrevented || H(W));
    }
    let P = !(G.isExternal || l),
      ie = w.createElement('a', {
        ...x,
        ...L,
        href: (P ? D : void 0) || G.absoluteURL || C,
        onClick: P ? V : E,
        ref: bp(p, j),
        target: g,
        'data-discover': !B && S === 'render' ? 'true' : void 0,
      });
    return A && !B ? w.createElement(w.Fragment, null, ie, w.createElement(yp, { page: C })) : ie;
  });
lv.displayName = 'Link';
var Cp = w.forwardRef(function (
  {
    'aria-current': E = 'page',
    caseSensitive: S = !1,
    className: h = '',
    end: c = !1,
    style: l,
    to: o,
    viewTransition: d,
    children: f,
    ...g
  },
  m
) {
  let v = Xi(o, { relative: g.relative }),
    y = na(),
    r = w.useContext(yr),
    { navigator: x, basename: p } = w.useContext(hn),
    T = r != null && zp(v) && d === !0,
    _ = x.encodeLocation ? x.encodeLocation(v).pathname : v.pathname,
    U = y.pathname,
    B = r && r.navigation && r.navigation.location ? r.navigation.location.pathname : null;
  (S || ((U = U.toLowerCase()), (B = B ? B.toLowerCase() : null), (_ = _.toLowerCase())),
    B && p && (B = ea(B, p) || B));
  const G = _ !== '/' && _.endsWith('/') ? _.length - 1 : _.length;
  let C = U === _ || (!c && U.startsWith(_) && U.charAt(G) === '/'),
    O = B != null && (B === _ || (!c && B.startsWith(_) && B.charAt(_.length) === '/')),
    D = { isActive: C, isPending: O, isTransitioning: T },
    A = C ? E : void 0,
    j;
  typeof h == 'function'
    ? (j = h(D))
    : (j = [h, C ? 'active' : null, O ? 'pending' : null, T ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let L = typeof l == 'function' ? l(D) : l;
  return w.createElement(
    lv,
    { ...g, 'aria-current': A, className: j, ref: m, style: L, to: o, viewTransition: d },
    typeof f == 'function' ? f(D) : f
  );
});
Cp.displayName = 'NavLink';
var Mp = w.forwardRef(
  (
    {
      discover: s = 'render',
      fetcherKey: E,
      navigate: S,
      reloadDocument: h,
      replace: c,
      state: l,
      method: o = fr,
      action: d,
      onSubmit: f,
      relative: g,
      preventScrollReset: m,
      viewTransition: v,
      unstable_defaultShouldRevalidate: y,
      ...r
    },
    x
  ) => {
    let { unstable_useTransitions: p } = w.useContext(hn),
      T = wp(),
      _ = Dp(d, { relative: g }),
      U = o.toLowerCase() === 'get' ? 'get' : 'post',
      B = typeof d == 'string' && av.test(d),
      G = (C) => {
        if ((f && f(C), C.defaultPrevented)) return;
        C.preventDefault();
        let O = C.nativeEvent.submitter,
          D = (O == null ? void 0 : O.getAttribute('formmethod')) || o,
          A = () =>
            T(O || C.currentTarget, {
              fetcherKey: E,
              method: D,
              navigate: S,
              replace: c,
              state: l,
              relative: g,
              preventScrollReset: m,
              viewTransition: v,
              unstable_defaultShouldRevalidate: y,
            });
        p && S !== !1 ? w.startTransition(() => A()) : A();
      };
    return w.createElement('form', {
      ref: x,
      method: U,
      action: _,
      onSubmit: h ? f : G,
      ...r,
      'data-discover': !B && s === 'render' ? 'true' : void 0,
    });
  }
);
Mp.displayName = 'Form';
function Rp(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function iv(s) {
  let E = w.useContext(ql);
  return (at(E, Rp(s)), E);
}
function _p(
  s,
  {
    target: E,
    replace: S,
    unstable_mask: h,
    state: c,
    preventScrollReset: l,
    relative: o,
    viewTransition: d,
    unstable_defaultShouldRevalidate: f,
    unstable_useTransitions: g,
  } = {}
) {
  let m = Hy(),
    v = na(),
    y = Xi(s, { relative: o });
  return w.useCallback(
    (r) => {
      if (lp(r, E)) {
        r.preventDefault();
        let x = S !== void 0 ? S : Yi(v) === Yi(y),
          p = () =>
            m(s, {
              replace: x,
              unstable_mask: h,
              state: c,
              preventScrollReset: l,
              relative: o,
              viewTransition: d,
              unstable_defaultShouldRevalidate: f,
            });
        g ? w.startTransition(() => p()) : p();
      }
    },
    [v, m, y, S, h, c, E, s, l, o, d, f, g]
  );
}
var Ap = 0,
  Op = () => `__${String(++Ap)}__`;
function wp() {
  let { router: s } = iv('useSubmit'),
    { basename: E } = w.useContext(hn),
    S = Jy(),
    h = s.fetch,
    c = s.navigate;
  return w.useCallback(
    async (l, o = {}) => {
      let { action: d, method: f, encType: g, formData: m, body: v } = rp(l, E);
      if (o.navigate === !1) {
        let y = o.fetcherKey || Op();
        await h(y, S, o.action || d, {
          unstable_defaultShouldRevalidate: o.unstable_defaultShouldRevalidate,
          preventScrollReset: o.preventScrollReset,
          formData: m,
          body: v,
          formMethod: o.method || f,
          formEncType: o.encType || g,
          flushSync: o.flushSync,
        });
      } else
        await c(o.action || d, {
          unstable_defaultShouldRevalidate: o.unstable_defaultShouldRevalidate,
          preventScrollReset: o.preventScrollReset,
          formData: m,
          body: v,
          formMethod: o.method || f,
          formEncType: o.encType || g,
          replace: o.replace,
          state: o.state,
          fromRouteId: S,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [h, c, E, S]
  );
}
function Dp(s, { relative: E } = {}) {
  let { basename: S } = w.useContext(hn),
    h = w.useContext(ta);
  at(h, 'useFormAction must be used inside a RouteContext');
  let [c] = h.matches.slice(-1),
    l = { ...Xi(s || '.', { relative: E }) },
    o = na();
  if (s == null) {
    l.search = o.search;
    let d = new URLSearchParams(l.search),
      f = d.getAll('index');
    if (f.some((m) => m === '')) {
      (d.delete('index'), f.filter((v) => v).forEach((v) => d.append('index', v)));
      let m = d.toString();
      l.search = m ? `?${m}` : '';
    }
  }
  return (
    (!s || s === '.') &&
      c.route.index &&
      (l.search = l.search ? l.search.replace(/^\?/, '?index&') : '?index'),
    S !== '/' && (l.pathname = l.pathname === '/' ? S : xn([S, l.pathname])),
    Yi(l)
  );
}
function zp(s, { relative: E } = {}) {
  let S = w.useContext(Fh);
  at(
    S != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: h } = iv('useViewTransitionState'),
    c = Xi(s, { relative: E });
  if (!S.isTransitioning) return !1;
  let l = ea(S.currentLocation.pathname, h) || S.currentLocation.pathname,
    o = ea(S.nextLocation.pathname, h) || S.nextLocation.pathname;
  return hr(c.pathname, o) != null || hr(c.pathname, l) != null;
}
const Np = '_index_r8hfh_1',
  Up = { index: Np },
  Bp = '_layout_xgktr_1',
  Lp = '_top_bar_placeholder_xgktr_10',
  Hp = '_main_xgktr_15',
  jp = '_field_wrapper_xgktr_24',
  Gp = '_field_placeholder_xgktr_29',
  Yp = '_skill_button_wrapper_xgktr_36',
  Rn = {
    layout: Bp,
    top_bar_placeholder: Lp,
    main: Hp,
    field_wrapper: jp,
    field_placeholder: Gp,
    skill_button_wrapper: Yp,
  },
  Vp = '_surface_6wr97_1',
  qp = '_canvas_layer_6wr97_11',
  Xp = '_game_over_line_6wr97_22',
  Vo = { surface: Vp, canvas_layer: qp, game_over_line: Xp },
  Qp = '_layer_1dvsy_1',
  Zp = '_effect_1dvsy_7',
  Kp = '_ring_1dvsy_12',
  kp = '_score_1dvsy_24',
  Jp = '_special_1dvsy_36',
  Bi = { layer: Qp, effect: Zp, ring: Kp, score: kp, special: Jp },
  uv = w.memo(
    w.forwardRef((s, E) => {
      const S = w.useRef(null),
        h = w.useCallback((l) => {
          const o = S.current;
          if (!o) return;
          const d = document.createElement('div');
          ((d.className = `${Bi.effect} ${l.isSpecial ? Bi.special : ''}`),
            (d.style.left = `${l.x}px`),
            (d.style.top = `${l.y}px`),
            d.setAttribute('aria-hidden', 'true'));
          const f = document.createElement('span');
          ((f.className = Bi.ring), d.appendChild(f));
          const g = () => {
            (f.removeEventListener('animationend', g), d.parentNode === o && o.removeChild(d));
          };
          if ((f.addEventListener('animationend', g), l.score > 0)) {
            const m = document.createElement('span');
            ((m.className = Bi.score), (m.textContent = `+${l.score}`), d.appendChild(m));
          }
          o.appendChild(d);
        }, []),
        c = w.useCallback(() => {
          const l = S.current;
          if (l) for (; l.firstChild; ) l.removeChild(l.firstChild);
        }, []);
      return (
        w.useImperativeHandle(E, () => ({ add: h, clear: c }), [h, c]),
        K.jsx('div', { ref: S, className: Bi.layer, 'aria-hidden': 'true' })
      );
    })
  );
uv.displayName = 'MergeEffect';
const Fp = '_line_1p32x_1',
  $p = '_preview_wrap_1p32x_11',
  Wp = '_preview_1p32x_11',
  qo = { line: Fp, preview_wrap: $p, preview: Wp },
  Ip = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  rv = w.memo(
    w.forwardRef(({ initialX: s, fieldHeight: E, item: S }, h) => {
      const c = w.useRef(null),
        l = w.useRef(null),
        o = w.useRef((S == null ? void 0 : S.radius) ?? 0);
      if (
        ((o.current = (S == null ? void 0 : S.radius) ?? 0),
        w.useImperativeHandle(
          h,
          () => ({
            setX: (f) => {
              const g = c.current,
                m = l.current;
              (g && (g.style.transform = `translate3d(${f}px, 0, 0)`),
                m && (m.style.transform = `translate3d(${f - o.current}px, 0, 0)`));
            },
          }),
          []
        ),
        !S)
      )
        return null;
      const d = S.radius * 2;
      return K.jsxs(K.Fragment, {
        children: [
          K.jsx('div', {
            ref: c,
            className: qo.line,
            style: { height: `${E}px`, transform: `translate3d(${s}px, 0, 0)` },
            'aria-hidden': 'true',
          }),
          K.jsx('div', {
            ref: l,
            className: qo.preview_wrap,
            style: {
              width: `${d}px`,
              height: `${d}px`,
              transform: `translate3d(${s - S.radius}px, 0, 0)`,
            },
            'aria-hidden': 'true',
            children: K.jsx('img', {
              src: Ip(S.svgPath),
              alt: '',
              'aria-hidden': 'true',
              className: qo.preview,
            }),
          }),
        ],
      });
    })
  );
rv.displayName = 'DropIndicator';
const Zt = {
    dropCooldownMs: 500,
    maxScoreHistory: 10,
    storageKeys: {
      bestScore: 'ochimono.bestScore',
      scoreHistory: 'ochimono.scoreHistory',
      isSoundOn: 'ochimono.isSoundOn',
      themeId: 'ochimono.themeId',
      suspended: 'ochimono.suspended',
      isGyroOn: 'ochimono.isGyroOn',
    },
  },
  Io = { maxTiltDeg: 20, gammaToFieldSign: -1, smoothing: 0.18 },
  Pp = (s) => Math.max(0, Math.min(1, s)),
  e1 = ({
    canvasContainerRef: s,
    fieldWidth: E,
    fieldHeight: S,
    gameOverLineY: h,
    currentItem: c,
    canInteract: l,
    onDrop: o,
    mergeEffectRef: d,
    isMagnetSelecting: f,
    onMagnetSelect: g,
    gyroEnabled: m,
    gyroAngleRadRef: v,
  }) => {
    const y = w.useRef(null),
      r = w.useRef(null),
      x = w.useRef(0),
      p = w.useRef(1),
      T = w.useCallback((W) => {
        const M = G.current,
          z = C.current,
          q = Math.abs(Math.cos(W)),
          F = Math.abs(Math.sin(W)),
          le = M * q + z * F,
          N = M * F + z * q;
        return Math.min(1, M / le, z / N);
      }, []),
      _ = w.useRef(0.5),
      U = w.useRef(null),
      B = w.useRef(c);
    B.current = c;
    const G = w.useRef(E);
    G.current = E;
    const C = w.useRef(S);
    C.current = S;
    const O = w.useCallback((W, M) => {
        const z = y.current;
        if (!z) return { x: 0, y: 0 };
        const q = z.getBoundingClientRect(),
          F = q.left + q.width / 2,
          le = q.top + q.height / 2,
          N = p.current || 1,
          Q = (W - F) / N,
          ee = (M - le) / N,
          ue = -x.current,
          oe = Math.cos(ue),
          se = Math.sin(ue),
          ge = Q * oe - ee * se,
          Se = Q * se + ee * oe;
        return { x: G.current / 2 + ge, y: C.current / 2 + Se };
      }, []),
      D = w.useCallback((W) => {
        const M = B.current,
          z = G.current;
        return M ? Math.max(M.radius, Math.min(z - M.radius, W * z)) : W * z;
      }, []),
      A = w.useCallback(() => {
        U.current === null &&
          (U.current = window.requestAnimationFrame(() => {
            var W;
            ((U.current = null), (W = r.current) == null || W.setX(D(_.current)));
          }));
      }, [D]),
      j = w.useCallback(
        (W, M) => {
          const z = Pp(O(W, M).x / G.current);
          ((_.current = z), A());
        },
        [A, O]
      );
    (w.useEffect(() => {
      ((_.current = 0.5), A());
    }, [c == null ? void 0 : c.level, A]),
      w.useEffect(
        () => () => {
          U.current !== null && (window.cancelAnimationFrame(U.current), (U.current = null));
        },
        []
      ),
      w.useEffect(() => {
        const W = y.current;
        if (!W) return;
        if (!m) {
          ((x.current = 0), (p.current = 1), (W.style.transform = ''));
          return;
        }
        let M = 0;
        const z = () => {
          const q = v.current,
            F = x.current,
            le = F + (q - F) * Io.smoothing;
          x.current = Math.abs(le - q) < 1e-4 ? q : le;
          const N = T(x.current);
          ((p.current = N),
            (W.style.transform = `rotate(${x.current}rad) scale(${N})`),
            (M = window.requestAnimationFrame(z)));
        };
        return (
          (M = window.requestAnimationFrame(z)),
          () => {
            (window.cancelAnimationFrame(M),
              (x.current = 0),
              (p.current = 1),
              (W.style.transform = ''));
          }
        );
      }, [m, v, T]));
    const L = l && !f,
      H = (W) => {
        var M;
        f ||
          (L &&
            (j(W.clientX, W.clientY), (M = y.current) == null || M.setPointerCapture(W.pointerId)));
      },
      V = (W) => {
        if (!f) {
          if (W.buttons === 0 && W.pointerType === 'mouse') {
            j(W.clientX, W.clientY);
            return;
          }
          j(W.clientX, W.clientY);
        }
      },
      P = (W) => {
        var M;
        if (f) {
          const z = O(W.clientX, W.clientY);
          g(z.x, z.y);
          return;
        }
        L &&
          (j(W.clientX, W.clientY),
          o(_.current),
          (M = y.current) == null || M.releasePointerCapture(W.pointerId));
      },
      ie = D(0.5);
    return K.jsxs('div', {
      ref: y,
      className: Vo.surface,
      style: { width: `${E}px`, height: `${S}px` },
      onPointerDown: H,
      onPointerMove: V,
      onPointerUp: P,
      role: 'application',
      'aria-label': 'ゲームフィールド',
      children: [
        K.jsx('div', { ref: s, className: Vo.canvas_layer }),
        K.jsx('div', {
          className: Vo.game_over_line,
          style: { top: `${h}px` },
          'aria-hidden': 'true',
        }),
        L ? K.jsx(rv, { ref: r, initialX: ie, fieldHeight: S, item: c }) : null,
        K.jsx(uv, { ref: d }),
      ],
    });
  },
  t1 = '_overlay_efysu_1',
  n1 = '_number_efysu_11',
  _h = { overlay: t1, number: n1 },
  sv = w.memo(({ seconds: s }) =>
    s === null
      ? null
      : K.jsx('div', {
          className: _h.overlay,
          'aria-live': 'assertive',
          'aria-label': `ゲームオーバーまで${s}秒`,
          children: K.jsx('span', { className: _h.number, children: s }, s),
        })
  );
sv.displayName = 'CountdownOverlay';
const a1 = '_overlay_o79hb_1',
  l1 = '_panel_o79hb_13',
  i1 = '_new_record_o79hb_24',
  u1 = '_title_o79hb_32',
  r1 = '_scores_o79hb_40',
  s1 = '_row_o79hb_46',
  o1 = '_gold_o79hb_64',
  c1 = '_restart_o79hb_69',
  Jn = {
    overlay: a1,
    panel: l1,
    new_record: i1,
    title: u1,
    scores: r1,
    row: s1,
    gold: o1,
    restart: c1,
  },
  f1 = ({ score: s, bestScore: E, isNewRecord: S, onRestart: h }) =>
    K.jsx('div', {
      className: Jn.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'ゲームオーバー',
      children: K.jsxs('div', {
        className: Jn.panel,
        children: [
          S ? K.jsx('p', { className: Jn.new_record, children: '🎉 新記録！' }) : null,
          K.jsx('h2', { className: Jn.title, children: 'GAME OVER' }),
          K.jsxs('dl', {
            className: Jn.scores,
            children: [
              K.jsxs('div', {
                className: Jn.row,
                children: [
                  K.jsx('dt', { children: 'スコア' }),
                  K.jsx('dd', { className: S ? Jn.gold : '', children: s }),
                ],
              }),
              K.jsxs('div', {
                className: Jn.row,
                children: [K.jsx('dt', { children: 'ベスト' }), K.jsx('dd', { children: E })],
              }),
            ],
          }),
          K.jsx('button', {
            type: 'button',
            className: Jn.restart,
            onClick: h,
            children: 'もう一度あそぶ',
          }),
        ],
      }),
    }),
  d1 = '_root_1svqx_1',
  m1 = '_message_1svqx_13',
  h1 = '_icon_1svqx_30',
  v1 = '_text_1svqx_34',
  g1 = '_cancel_1svqx_38',
  Li = { root: d1, message: m1, icon: h1, text: v1, cancel: g1 },
  ov = w.memo(({ active: s, onCancel: E }) =>
    s
      ? K.jsxs('div', {
          className: Li.root,
          children: [
            K.jsxs('div', {
              className: Li.message,
              children: [
                K.jsx('span', { className: Li.icon, children: '🧲' }),
                K.jsx('span', { className: Li.text, children: '引き寄せたいアイテムをタップ' }),
              ],
            }),
            K.jsx('button', {
              type: 'button',
              className: Li.cancel,
              onClick: E,
              children: 'キャンセル',
            }),
          ],
        })
      : null
  );
ov.displayName = 'MagnetSelectingOverlay';
const y1 = '_gravity_flip_14l5j_1',
  p1 = '_arrow_14l5j_9',
  Ah = { gravity_flip: y1, arrow: p1 },
  cv = w.memo(({ effect: s }) =>
    s === 'gravityFlip'
      ? K.jsx('div', {
          className: Ah.gravity_flip,
          'aria-hidden': 'true',
          children: Array.from({ length: 6 }).map((E, S) =>
            K.jsx(
              'span',
              {
                className: Ah.arrow,
                style: { left: `${(S + 1) * 14}%`, animationDelay: `${S * 0.12}s` },
                children: '⬆',
              },
              S
            )
          ),
        })
      : null
  );
cv.displayName = 'SkillEffectOverlay';
const x1 = '_backdrop_6euhx_1',
  S1 = '_drawer_6euhx_11',
  b1 = '_header_6euhx_23',
  E1 = '_title_6euhx_30',
  T1 = '_close_6euhx_38',
  C1 = '_row_6euhx_54',
  M1 = '_row_label_6euhx_62',
  R1 = '_suspend_6euhx_68',
  _1 = '_footer_6euhx_88',
  A1 = '_version_6euhx_94',
  Xt = {
    backdrop: x1,
    drawer: S1,
    header: b1,
    title: E1,
    close: T1,
    row: C1,
    row_label: M1,
    suspend: R1,
    footer: _1,
    version: A1,
  },
  O1 = '_toggle_1ap46_1',
  w1 = { toggle: O1 },
  fv = w.memo(({ isOn: s, onToggle: E }) =>
    K.jsx('button', {
      type: 'button',
      className: w1.toggle,
      onClick: E,
      'aria-label': s ? 'ジャイロをOFFにする' : 'ジャイロをONにする',
      'aria-pressed': s,
      children: K.jsx('span', { 'aria-hidden': 'true', children: s ? '🧭' : '🚫' }),
    })
  );
fv.displayName = 'GyroToggle';
const D1 = '_toggle_1ap46_1',
  z1 = { toggle: D1 },
  dv = w.memo(({ isOn: s, onToggle: E }) =>
    K.jsx('button', {
      type: 'button',
      className: z1.toggle,
      onClick: E,
      'aria-label': s ? 'サウンドをOFFにする' : 'サウンドをONにする',
      'aria-pressed': s,
      children: K.jsx('span', { 'aria-hidden': 'true', children: s ? '🔊' : '🔇' }),
    })
  );
dv.displayName = 'SoundToggle';
const N1 = '_toggle_15urq_1',
  U1 = { toggle: N1 },
  vc = [{ id: 'gumi', label: 'グミ' }],
  xr = 'gumi',
  gc = (s) => typeof s == 'string' && vc.some((E) => E.id === s),
  mv = w.memo(({ value: s, onChange: E }) => {
    const S = (h) => {
      const c = h.target.value;
      gc(c) && E(c);
    };
    return K.jsx('select', {
      className: U1.toggle,
      value: s,
      onChange: S,
      'aria-label': 'アセットテーマ',
      children: vc.map((h) => K.jsx('option', { value: h.id, children: h.label }, h.id)),
    });
  });
mv.displayName = 'ThemeToggle';
const yc = w.memo(
  ({
    open: s,
    onClose: E,
    themeId: S,
    onChangeTheme: h,
    isSoundOn: c,
    onToggleSound: l,
    isGyroOn: o,
    onToggleGyro: d,
    canSuspend: f,
    onSuspend: g,
  }) =>
    s
      ? K.jsx('div', {
          className: Xt.backdrop,
          onClick: E,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '設定',
          children: K.jsxs('aside', {
            className: Xt.drawer,
            onClick: (m) => m.stopPropagation(),
            children: [
              K.jsxs('header', {
                className: Xt.header,
                children: [
                  K.jsx('h2', { className: Xt.title, children: '設定' }),
                  K.jsx('button', {
                    type: 'button',
                    className: Xt.close,
                    onClick: E,
                    'aria-label': '設定を閉じる',
                    children: '✕',
                  }),
                ],
              }),
              K.jsxs('div', {
                className: Xt.row,
                children: [
                  K.jsx('span', { className: Xt.row_label, children: 'テーマ' }),
                  K.jsx(mv, { value: S, onChange: h }),
                ],
              }),
              K.jsxs('div', {
                className: Xt.row,
                children: [
                  K.jsx('span', { className: Xt.row_label, children: 'サウンド' }),
                  K.jsx(dv, { isOn: c, onToggle: l }),
                ],
              }),
              K.jsxs('div', {
                className: Xt.row,
                children: [
                  K.jsx('span', { className: Xt.row_label, children: 'ジャイロ（傾き操作）' }),
                  K.jsx(fv, { isOn: o, onToggle: d }),
                ],
              }),
              f
                ? K.jsx('button', {
                    type: 'button',
                    className: Xt.suspend,
                    onClick: () => {
                      (g(), E());
                    },
                    children: '中断',
                  })
                : null,
              K.jsx('footer', {
                className: Xt.footer,
                children: K.jsxs('span', { className: Xt.version, children: ['v', '1.0.40'] }),
              }),
            ],
          }),
        })
      : null
);
yc.displayName = 'SettingsDrawer';
const B1 = '_button_12i3t_1',
  L1 = '_gauge_12i3t_23',
  H1 = '_gauge_track_12i3t_32',
  j1 = '_gauge_fill_12i3t_39',
  G1 = '_gauge_fill_full_12i3t_47',
  Y1 = '_icon_12i3t_52',
  V1 = '_ready_12i3t_60',
  q1 = '_fully_ready_12i3t_65',
  wa = {
    button: B1,
    gauge: L1,
    gauge_track: H1,
    gauge_fill: j1,
    gauge_fill_full: G1,
    icon: Y1,
    ready: V1,
    fully_ready: q1,
  },
  gr = 32,
  Oh = 40,
  wh = 110,
  X1 = 360,
  Dh = (s) => {
    const E = ((s - 90) * Math.PI) / 180;
    return { x: Oh + gr * Math.cos(E), y: Oh + gr * Math.sin(E) };
  },
  Q1 = (s, E) => {
    const S = Dh(s),
      h = Dh(E),
      c = E - s > 180 ? 1 : 0;
    return `M ${S.x} ${S.y} A ${gr} ${gr} 0 ${c} 1 ${h.x} ${h.y}`;
  },
  Xo = 1,
  hv = w.memo(({ gauge: s, segmentMax: E, segmentCount: S, canOpen: h, onClick: c }) => {
    const l = Math.round((s / (E * S)) * 100),
      o = X1 / S,
      d = o - wh,
      f = Array.from({ length: S }, (v, y) => {
        const r = y * E;
        return Math.max(0, Math.min(E, s - r)) / E;
      }),
      m = f.filter((v) => v >= 1).length === S;
    return K.jsxs('button', {
      type: 'button',
      className: [wa.button, h ? wa.ready : '', m ? wa.fully_ready : ''].filter(Boolean).join(' '),
      onClick: c,
      disabled: !h,
      'aria-label': h ? '必殺技を選択' : `必殺技ゲージ ${l}%`,
      children: [
        K.jsx('svg', {
          className: wa.gauge,
          viewBox: '0 0 80 80',
          'aria-hidden': 'true',
          children: f.map((v, y) => {
            const r = y * o + d / 2,
              x = r + wh,
              p = Q1(r, x),
              T = v >= 1;
            return K.jsxs(
              'g',
              {
                children: [
                  K.jsx('path', { className: wa.gauge_track, d: p, pathLength: Xo }),
                  K.jsx('path', {
                    className: `${wa.gauge_fill} ${T ? wa.gauge_fill_full : ''}`,
                    d: p,
                    pathLength: Xo,
                    strokeDasharray: `${v} ${Xo - v}`,
                  }),
                ],
              },
              y
            );
          }),
        }),
        K.jsx('span', { className: wa.icon, 'aria-hidden': 'true', children: '⚡' }),
      ],
    });
  });
hv.displayName = 'SkillButton';
const Z1 = '_backdrop_v7sbf_1',
  K1 = '_menu_v7sbf_12',
  k1 = '_title_v7sbf_21',
  J1 = '_choices_v7sbf_30',
  F1 = '_choice_v7sbf_30',
  $1 = '_choice_disabled_v7sbf_60',
  W1 = '_choice_icon_v7sbf_65',
  I1 = '_choice_label_v7sbf_72',
  P1 = '_choice_uses_v7sbf_83',
  ex = '_choice_desc_v7sbf_91',
  tx = '_choice_cost_v7sbf_97',
  nx = '_cost_pip_v7sbf_105',
  ax = '_cancel_v7sbf_113',
  en = {
    backdrop: Z1,
    menu: K1,
    title: k1,
    choices: J1,
    choice: F1,
    choice_disabled: $1,
    choice_icon: W1,
    choice_label: I1,
    choice_uses: P1,
    choice_desc: ex,
    choice_cost: tx,
    cost_pip: nx,
    cancel: ax,
  },
  Po = 100,
  ec = 3,
  ct = {
    gaugeMax: Po * ec,
    segmentMax: Po,
    segmentCount: ec,
    bonusOnLevel10Created: 8,
    bonusOnSpecialElimination: 25,
    shake: { impulseMin: 0.04, impulseMax: 0.12, upwardBias: 0.05 },
    gravityFlip: {
      durationMs: 3e3,
      multiplier: -1.5,
      frictionAir: 0.05,
      liftKickVelocity: -8,
      slamGravityMultiplier: 3.5,
      slamFrictionAir: 0,
      slamDurationMs: 800,
      slamRestitution: 0.85,
      slamKickVelocity: 16,
    },
    magnet: { durationMs: 2500, forceMagnitude: 0.005 },
  },
  lx = (s) => s,
  vv = { shake: 1, gravityFlip: 2, magnet: ec },
  Gl = 3,
  Hi = (s) => vv[s] * Po,
  ix = [
    { kind: 'shake', icon: '🌪', label: 'シェイク', description: '盤面を揺らして詰まりを解す' },
    { kind: 'gravityFlip', icon: '⬆️', label: '重力反転', description: '3秒だけ重力を逆さに' },
    {
      kind: 'magnet',
      icon: '🧲',
      label: '同レベル吸引',
      description: 'タップしたアイテムと同レベルを 1 体ランダムに引き寄せ',
    },
  ],
  gv = w.memo(
    ({ open: s, onSelect: E, onClose: S, canUse: h, magnetUsesLeft: c, magnetMaxUses: l }) =>
      s
        ? K.jsx('div', {
            className: en.backdrop,
            onClick: S,
            role: 'dialog',
            'aria-modal': 'true',
            'aria-label': '必殺技を選択',
            children: K.jsxs('div', {
              className: en.menu,
              onClick: (o) => o.stopPropagation(),
              children: [
                K.jsx('h2', { className: en.title, children: '必殺技を選択' }),
                K.jsx('div', {
                  className: en.choices,
                  children: ix.map((o) => {
                    const d = vv[o.kind],
                      f = h[o.kind],
                      g = o.kind === 'magnet';
                    return K.jsxs(
                      'button',
                      {
                        type: 'button',
                        className: `${en.choice} ${f ? '' : en.choice_disabled}`,
                        onClick: () => f && E(o.kind),
                        disabled: !f,
                        children: [
                          K.jsx('span', {
                            className: en.choice_icon,
                            'aria-hidden': 'true',
                            children: o.icon,
                          }),
                          K.jsxs('span', {
                            className: en.choice_label,
                            children: [
                              o.label,
                              g
                                ? K.jsxs('span', {
                                    className: en.choice_uses,
                                    'aria-label': `残り ${c} 回 / 最大 ${l} 回`,
                                    children: ['残り ', c, '/', l, ' 回'],
                                  })
                                : null,
                            ],
                          }),
                          K.jsx('span', { className: en.choice_desc, children: o.description }),
                          K.jsx('span', {
                            className: en.choice_cost,
                            'aria-label': `コスト ${d} ゲージ`,
                            children: Array.from({ length: d }, (m, v) =>
                              K.jsx('span', { className: en.cost_pip }, v)
                            ),
                          }),
                        ],
                      },
                      o.kind
                    );
                  }),
                }),
                K.jsx('button', {
                  type: 'button',
                  className: en.cancel,
                  onClick: S,
                  children: 'キャンセル',
                }),
              ],
            }),
          })
        : null
  );
gv.displayName = 'SkillMenu';
const ux = '_top_bar_15roj_1',
  rx = '_right_15roj_12',
  sx = '_settings_15roj_18',
  Qo = { top_bar: ux, right: rx, settings: sx },
  ox = '_next_1n5pn_1',
  cx = '_label_1n5pn_7',
  fx = '_thumb_1n5pn_14',
  dx = '_image_1n5pn_27',
  or = { next: ox, label: cx, thumb: fx, image: dx },
  mx = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  yv = w.memo(({ item: s }) =>
    K.jsxs('div', {
      className: or.next,
      children: [
        K.jsx('span', { className: or.label, children: 'NEXT' }),
        K.jsx('div', {
          className: or.thumb,
          'data-testid': 'next-item',
          children: s
            ? K.jsx('img', { src: mx(s.svgPath), alt: s.name, className: or.image })
            : null,
        }),
      ],
    })
  );
yv.displayName = 'NextItemPreview';
const hx = '_score_display_pgke7_1',
  vx = '_row_pgke7_7',
  gx = '_label_pgke7_13',
  yx = '_value_pgke7_20',
  px = '_label_small_pgke7_28',
  xx = '_value_small_pgke7_35',
  Ia = { score_display: hx, row: vx, label: gx, value: yx, label_small: px, value_small: xx },
  pv = w.memo(({ score: s, bestScore: E }) =>
    K.jsxs('div', {
      className: Ia.score_display,
      children: [
        K.jsxs('div', {
          className: Ia.row,
          children: [
            K.jsx('span', { className: Ia.label, children: 'SCORE' }),
            K.jsx('span', { className: Ia.value, 'data-testid': 'score-value', children: s }),
          ],
        }),
        K.jsxs('div', {
          className: Ia.row,
          children: [
            K.jsx('span', { className: Ia.label_small, children: 'BEST' }),
            K.jsx('span', { className: Ia.value_small, children: E }),
          ],
        }),
      ],
    })
  );
pv.displayName = 'ScoreDisplay';
const Sx = ({ score: s, bestScore: E, nextItem: S, onOpenSettings: h }) =>
  K.jsxs('header', {
    className: Qo.top_bar,
    children: [
      K.jsx(pv, { score: s, bestScore: E }),
      K.jsxs('div', {
        className: Qo.right,
        children: [
          K.jsx(yv, { item: S }),
          K.jsx('button', {
            type: 'button',
            className: Qo.settings,
            onClick: h,
            'aria-label': '設定を開く',
            children: K.jsx('span', { 'aria-hidden': 'true', children: '⚙' }),
          }),
        ],
      }),
    ],
  });
var mr = { exports: {} };
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
 */ var bx = mr.exports,
  zh;
function Ex() {
  return (
    zh ||
      ((zh = 1),
      (function (s, E) {
        (function (h, c) {
          s.exports = c();
        })(bx, function () {
          return (function (S) {
            var h = {};
            function c(l) {
              if (h[l]) return h[l].exports;
              var o = (h[l] = { i: l, l: !1, exports: {} });
              return (S[l].call(o.exports, o, o.exports, c), (o.l = !0), o.exports);
            }
            return (
              (c.m = S),
              (c.c = h),
              (c.d = function (l, o, d) {
                c.o(l, o) || Object.defineProperty(l, o, { enumerable: !0, get: d });
              }),
              (c.r = function (l) {
                (typeof Symbol < 'u' &&
                  Symbol.toStringTag &&
                  Object.defineProperty(l, Symbol.toStringTag, { value: 'Module' }),
                  Object.defineProperty(l, '__esModule', { value: !0 }));
              }),
              (c.t = function (l, o) {
                if (
                  (o & 1 && (l = c(l)),
                  o & 8 || (o & 4 && typeof l == 'object' && l && l.__esModule))
                )
                  return l;
                var d = Object.create(null);
                if (
                  (c.r(d),
                  Object.defineProperty(d, 'default', { enumerable: !0, value: l }),
                  o & 2 && typeof l != 'string')
                )
                  for (var f in l)
                    c.d(
                      d,
                      f,
                      function (g) {
                        return l[g];
                      }.bind(null, f)
                    );
                return d;
              }),
              (c.n = function (l) {
                var o =
                  l && l.__esModule
                    ? function () {
                        return l.default;
                      }
                    : function () {
                        return l;
                      };
                return (c.d(o, 'a', o), o);
              }),
              (c.o = function (l, o) {
                return Object.prototype.hasOwnProperty.call(l, o);
              }),
              (c.p = ''),
              c((c.s = 20))
            );
          })([
            function (S, h) {
              var c = {};
              ((S.exports = c),
                (function () {
                  ((c._baseDelta = 1e3 / 60),
                    (c._nextId = 0),
                    (c._seed = 0),
                    (c._nowStartTime = +new Date()),
                    (c._warnedOnce = {}),
                    (c._decomp = null),
                    (c.extend = function (o, d) {
                      var f, g;
                      typeof d == 'boolean' ? ((f = 2), (g = d)) : ((f = 1), (g = !0));
                      for (var m = f; m < arguments.length; m++) {
                        var v = arguments[m];
                        if (v)
                          for (var y in v)
                            g &&
                            v[y] &&
                            v[y].constructor === Object &&
                            (!o[y] || o[y].constructor === Object)
                              ? ((o[y] = o[y] || {}), c.extend(o[y], g, v[y]))
                              : (o[y] = v[y]);
                      }
                      return o;
                    }),
                    (c.clone = function (o, d) {
                      return c.extend({}, d, o);
                    }),
                    (c.keys = function (o) {
                      if (Object.keys) return Object.keys(o);
                      var d = [];
                      for (var f in o) d.push(f);
                      return d;
                    }),
                    (c.values = function (o) {
                      var d = [];
                      if (Object.keys) {
                        for (var f = Object.keys(o), g = 0; g < f.length; g++) d.push(o[f[g]]);
                        return d;
                      }
                      for (var m in o) d.push(o[m]);
                      return d;
                    }),
                    (c.get = function (o, d, f, g) {
                      d = d.split('.').slice(f, g);
                      for (var m = 0; m < d.length; m += 1) o = o[d[m]];
                      return o;
                    }),
                    (c.set = function (o, d, f, g, m) {
                      var v = d.split('.').slice(g, m);
                      return ((c.get(o, d, 0, -1)[v[v.length - 1]] = f), f);
                    }),
                    (c.shuffle = function (o) {
                      for (var d = o.length - 1; d > 0; d--) {
                        var f = Math.floor(c.random() * (d + 1)),
                          g = o[d];
                        ((o[d] = o[f]), (o[f] = g));
                      }
                      return o;
                    }),
                    (c.choose = function (o) {
                      return o[Math.floor(c.random() * o.length)];
                    }),
                    (c.isElement = function (o) {
                      return typeof HTMLElement < 'u'
                        ? o instanceof HTMLElement
                        : !!(o && o.nodeType && o.nodeName);
                    }),
                    (c.isArray = function (o) {
                      return Object.prototype.toString.call(o) === '[object Array]';
                    }),
                    (c.isFunction = function (o) {
                      return typeof o == 'function';
                    }),
                    (c.isPlainObject = function (o) {
                      return typeof o == 'object' && o.constructor === Object;
                    }),
                    (c.isString = function (o) {
                      return toString.call(o) === '[object String]';
                    }),
                    (c.clamp = function (o, d, f) {
                      return o < d ? d : o > f ? f : o;
                    }),
                    (c.sign = function (o) {
                      return o < 0 ? -1 : 1;
                    }),
                    (c.now = function () {
                      if (typeof window < 'u' && window.performance) {
                        if (window.performance.now) return window.performance.now();
                        if (window.performance.webkitNow) return window.performance.webkitNow();
                      }
                      return Date.now ? Date.now() : new Date() - c._nowStartTime;
                    }),
                    (c.random = function (o, d) {
                      return (
                        (o = typeof o < 'u' ? o : 0),
                        (d = typeof d < 'u' ? d : 1),
                        o + l() * (d - o)
                      );
                    }));
                  var l = function () {
                    return ((c._seed = (c._seed * 9301 + 49297) % 233280), c._seed / 233280);
                  };
                  ((c.colorToNumber = function (o) {
                    return (
                      (o = o.replace('#', '')),
                      o.length == 3 &&
                        (o =
                          o.charAt(0) +
                          o.charAt(0) +
                          o.charAt(1) +
                          o.charAt(1) +
                          o.charAt(2) +
                          o.charAt(2)),
                      parseInt(o, 16)
                    );
                  }),
                    (c.logLevel = 1),
                    (c.log = function () {
                      console &&
                        c.logLevel > 0 &&
                        c.logLevel <= 3 &&
                        console.log.apply(
                          console,
                          ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                        );
                    }),
                    (c.info = function () {
                      console &&
                        c.logLevel > 0 &&
                        c.logLevel <= 2 &&
                        console.info.apply(
                          console,
                          ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                        );
                    }),
                    (c.warn = function () {
                      console &&
                        c.logLevel > 0 &&
                        c.logLevel <= 3 &&
                        console.warn.apply(
                          console,
                          ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                        );
                    }),
                    (c.warnOnce = function () {
                      var o = Array.prototype.slice.call(arguments).join(' ');
                      c._warnedOnce[o] || (c.warn(o), (c._warnedOnce[o] = !0));
                    }),
                    (c.deprecated = function (o, d, f) {
                      o[d] = c.chain(function () {
                        c.warnOnce('🔅 deprecated 🔅', f);
                      }, o[d]);
                    }),
                    (c.nextId = function () {
                      return c._nextId++;
                    }),
                    (c.indexOf = function (o, d) {
                      if (o.indexOf) return o.indexOf(d);
                      for (var f = 0; f < o.length; f++) if (o[f] === d) return f;
                      return -1;
                    }),
                    (c.map = function (o, d) {
                      if (o.map) return o.map(d);
                      for (var f = [], g = 0; g < o.length; g += 1) f.push(d(o[g]));
                      return f;
                    }),
                    (c.topologicalSort = function (o) {
                      var d = [],
                        f = [],
                        g = [];
                      for (var m in o) !f[m] && !g[m] && c._topologicalSort(m, f, g, o, d);
                      return d;
                    }),
                    (c._topologicalSort = function (o, d, f, g, m) {
                      var v = g[o] || [];
                      f[o] = !0;
                      for (var y = 0; y < v.length; y += 1) {
                        var r = v[y];
                        f[r] || d[r] || c._topologicalSort(r, d, f, g, m);
                      }
                      ((f[o] = !1), (d[o] = !0), m.push(o));
                    }),
                    (c.chain = function () {
                      for (var o = [], d = 0; d < arguments.length; d += 1) {
                        var f = arguments[d];
                        f._chained ? o.push.apply(o, f._chained) : o.push(f);
                      }
                      var g = function () {
                        for (
                          var m, v = new Array(arguments.length), y = 0, r = arguments.length;
                          y < r;
                          y++
                        )
                          v[y] = arguments[y];
                        for (y = 0; y < o.length; y += 1) {
                          var x = o[y].apply(m, v);
                          typeof x < 'u' && (m = x);
                        }
                        return m;
                      };
                      return ((g._chained = o), g);
                    }),
                    (c.chainPathBefore = function (o, d, f) {
                      return c.set(o, d, c.chain(f, c.get(o, d)));
                    }),
                    (c.chainPathAfter = function (o, d, f) {
                      return c.set(o, d, c.chain(c.get(o, d), f));
                    }),
                    (c.setDecomp = function (o) {
                      c._decomp = o;
                    }),
                    (c.getDecomp = function () {
                      var o = c._decomp;
                      try {
                        (!o && typeof window < 'u' && (o = window.decomp),
                          !o && typeof oh < 'u' && (o = oh.decomp));
                      } catch {
                        o = null;
                      }
                      return o;
                    }));
                })());
            },
            function (S, h) {
              var c = {};
              ((S.exports = c),
                (function () {
                  ((c.create = function (l) {
                    var o = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
                    return (l && c.update(o, l), o);
                  }),
                    (c.update = function (l, o, d) {
                      ((l.min.x = 1 / 0),
                        (l.max.x = -1 / 0),
                        (l.min.y = 1 / 0),
                        (l.max.y = -1 / 0));
                      for (var f = 0; f < o.length; f++) {
                        var g = o[f];
                        (g.x > l.max.x && (l.max.x = g.x),
                          g.x < l.min.x && (l.min.x = g.x),
                          g.y > l.max.y && (l.max.y = g.y),
                          g.y < l.min.y && (l.min.y = g.y));
                      }
                      d &&
                        (d.x > 0 ? (l.max.x += d.x) : (l.min.x += d.x),
                        d.y > 0 ? (l.max.y += d.y) : (l.min.y += d.y));
                    }),
                    (c.contains = function (l, o) {
                      return o.x >= l.min.x && o.x <= l.max.x && o.y >= l.min.y && o.y <= l.max.y;
                    }),
                    (c.overlaps = function (l, o) {
                      return (
                        l.min.x <= o.max.x &&
                        l.max.x >= o.min.x &&
                        l.max.y >= o.min.y &&
                        l.min.y <= o.max.y
                      );
                    }),
                    (c.translate = function (l, o) {
                      ((l.min.x += o.x), (l.max.x += o.x), (l.min.y += o.y), (l.max.y += o.y));
                    }),
                    (c.shift = function (l, o) {
                      var d = l.max.x - l.min.x,
                        f = l.max.y - l.min.y;
                      ((l.min.x = o.x), (l.max.x = o.x + d), (l.min.y = o.y), (l.max.y = o.y + f));
                    }));
                })());
            },
            function (S, h) {
              var c = {};
              ((S.exports = c),
                (function () {
                  ((c.create = function (l, o) {
                    return { x: l || 0, y: o || 0 };
                  }),
                    (c.clone = function (l) {
                      return { x: l.x, y: l.y };
                    }),
                    (c.magnitude = function (l) {
                      return Math.sqrt(l.x * l.x + l.y * l.y);
                    }),
                    (c.magnitudeSquared = function (l) {
                      return l.x * l.x + l.y * l.y;
                    }),
                    (c.rotate = function (l, o, d) {
                      var f = Math.cos(o),
                        g = Math.sin(o);
                      d || (d = {});
                      var m = l.x * f - l.y * g;
                      return ((d.y = l.x * g + l.y * f), (d.x = m), d);
                    }),
                    (c.rotateAbout = function (l, o, d, f) {
                      var g = Math.cos(o),
                        m = Math.sin(o);
                      f || (f = {});
                      var v = d.x + ((l.x - d.x) * g - (l.y - d.y) * m);
                      return ((f.y = d.y + ((l.x - d.x) * m + (l.y - d.y) * g)), (f.x = v), f);
                    }),
                    (c.normalise = function (l) {
                      var o = c.magnitude(l);
                      return o === 0 ? { x: 0, y: 0 } : { x: l.x / o, y: l.y / o };
                    }),
                    (c.dot = function (l, o) {
                      return l.x * o.x + l.y * o.y;
                    }),
                    (c.cross = function (l, o) {
                      return l.x * o.y - l.y * o.x;
                    }),
                    (c.cross3 = function (l, o, d) {
                      return (o.x - l.x) * (d.y - l.y) - (o.y - l.y) * (d.x - l.x);
                    }),
                    (c.add = function (l, o, d) {
                      return (d || (d = {}), (d.x = l.x + o.x), (d.y = l.y + o.y), d);
                    }),
                    (c.sub = function (l, o, d) {
                      return (d || (d = {}), (d.x = l.x - o.x), (d.y = l.y - o.y), d);
                    }),
                    (c.mult = function (l, o) {
                      return { x: l.x * o, y: l.y * o };
                    }),
                    (c.div = function (l, o) {
                      return { x: l.x / o, y: l.y / o };
                    }),
                    (c.perp = function (l, o) {
                      return ((o = o === !0 ? -1 : 1), { x: o * -l.y, y: o * l.x });
                    }),
                    (c.neg = function (l) {
                      return { x: -l.x, y: -l.y };
                    }),
                    (c.angle = function (l, o) {
                      return Math.atan2(o.y - l.y, o.x - l.x);
                    }),
                    (c._temp = [
                      c.create(),
                      c.create(),
                      c.create(),
                      c.create(),
                      c.create(),
                      c.create(),
                    ]));
                })());
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(2),
                d = c(0);
              (function () {
                ((l.create = function (f, g) {
                  for (var m = [], v = 0; v < f.length; v++) {
                    var y = f[v],
                      r = { x: y.x, y: y.y, index: v, body: g, isInternal: !1 };
                    m.push(r);
                  }
                  return m;
                }),
                  (l.fromPath = function (f, g) {
                    var m = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                      v = [];
                    return (
                      f.replace(m, function (y, r, x) {
                        v.push({ x: parseFloat(r), y: parseFloat(x) });
                      }),
                      l.create(v, g)
                    );
                  }),
                  (l.centre = function (f) {
                    for (
                      var g = l.area(f, !0), m = { x: 0, y: 0 }, v, y, r, x = 0;
                      x < f.length;
                      x++
                    )
                      ((r = (x + 1) % f.length),
                        (v = o.cross(f[x], f[r])),
                        (y = o.mult(o.add(f[x], f[r]), v)),
                        (m = o.add(m, y)));
                    return o.div(m, 6 * g);
                  }),
                  (l.mean = function (f) {
                    for (var g = { x: 0, y: 0 }, m = 0; m < f.length; m++)
                      ((g.x += f[m].x), (g.y += f[m].y));
                    return o.div(g, f.length);
                  }),
                  (l.area = function (f, g) {
                    for (var m = 0, v = f.length - 1, y = 0; y < f.length; y++)
                      ((m += (f[v].x - f[y].x) * (f[v].y + f[y].y)), (v = y));
                    return g ? m / 2 : Math.abs(m) / 2;
                  }),
                  (l.inertia = function (f, g) {
                    for (var m = 0, v = 0, y = f, r, x, p = 0; p < y.length; p++)
                      ((x = (p + 1) % y.length),
                        (r = Math.abs(o.cross(y[x], y[p]))),
                        (m += r * (o.dot(y[x], y[x]) + o.dot(y[x], y[p]) + o.dot(y[p], y[p]))),
                        (v += r));
                    return (g / 6) * (m / v);
                  }),
                  (l.translate = function (f, g, m) {
                    m = typeof m < 'u' ? m : 1;
                    var v = f.length,
                      y = g.x * m,
                      r = g.y * m,
                      x;
                    for (x = 0; x < v; x++) ((f[x].x += y), (f[x].y += r));
                    return f;
                  }),
                  (l.rotate = function (f, g, m) {
                    if (g !== 0) {
                      var v = Math.cos(g),
                        y = Math.sin(g),
                        r = m.x,
                        x = m.y,
                        p = f.length,
                        T,
                        _,
                        U,
                        B;
                      for (B = 0; B < p; B++)
                        ((T = f[B]),
                          (_ = T.x - r),
                          (U = T.y - x),
                          (T.x = r + (_ * v - U * y)),
                          (T.y = x + (_ * y + U * v)));
                      return f;
                    }
                  }),
                  (l.contains = function (f, g) {
                    for (var m = g.x, v = g.y, y = f.length, r = f[y - 1], x, p = 0; p < y; p++) {
                      if (((x = f[p]), (m - r.x) * (x.y - r.y) + (v - r.y) * (r.x - x.x) > 0))
                        return !1;
                      r = x;
                    }
                    return !0;
                  }),
                  (l.scale = function (f, g, m, v) {
                    if (g === 1 && m === 1) return f;
                    v = v || l.centre(f);
                    for (var y, r, x = 0; x < f.length; x++)
                      ((y = f[x]),
                        (r = o.sub(y, v)),
                        (f[x].x = v.x + r.x * g),
                        (f[x].y = v.y + r.y * m));
                    return f;
                  }),
                  (l.chamfer = function (f, g, m, v, y) {
                    (typeof g == 'number' ? (g = [g]) : (g = g || [8]),
                      (m = typeof m < 'u' ? m : -1),
                      (v = v || 2),
                      (y = y || 14));
                    for (var r = [], x = 0; x < f.length; x++) {
                      var p = f[x - 1 >= 0 ? x - 1 : f.length - 1],
                        T = f[x],
                        _ = f[(x + 1) % f.length],
                        U = g[x < g.length ? x : g.length - 1];
                      if (U === 0) {
                        r.push(T);
                        continue;
                      }
                      var B = o.normalise({ x: T.y - p.y, y: p.x - T.x }),
                        G = o.normalise({ x: _.y - T.y, y: T.x - _.x }),
                        C = Math.sqrt(2 * Math.pow(U, 2)),
                        O = o.mult(d.clone(B), U),
                        D = o.normalise(o.mult(o.add(B, G), 0.5)),
                        A = o.sub(T, o.mult(D, C)),
                        j = m;
                      (m === -1 && (j = Math.pow(U, 0.32) * 1.75),
                        (j = d.clamp(j, v, y)),
                        j % 2 === 1 && (j += 1));
                      for (var L = Math.acos(o.dot(B, G)), H = L / j, V = 0; V < j; V++)
                        r.push(o.add(o.rotate(O, H * V), A));
                    }
                    return r;
                  }),
                  (l.clockwiseSort = function (f) {
                    var g = l.mean(f);
                    return (
                      f.sort(function (m, v) {
                        return o.angle(g, m) - o.angle(g, v);
                      }),
                      f
                    );
                  }),
                  (l.isConvex = function (f) {
                    var g = 0,
                      m = f.length,
                      v,
                      y,
                      r,
                      x;
                    if (m < 3) return null;
                    for (v = 0; v < m; v++)
                      if (
                        ((y = (v + 1) % m),
                        (r = (v + 2) % m),
                        (x = (f[y].x - f[v].x) * (f[r].y - f[y].y)),
                        (x -= (f[y].y - f[v].y) * (f[r].x - f[y].x)),
                        x < 0 ? (g |= 1) : x > 0 && (g |= 2),
                        g === 3)
                      )
                        return !1;
                    return g !== 0 ? !0 : null;
                  }),
                  (l.hull = function (f) {
                    var g = [],
                      m = [],
                      v,
                      y;
                    for (
                      f = f.slice(0),
                        f.sort(function (r, x) {
                          var p = r.x - x.x;
                          return p !== 0 ? p : r.y - x.y;
                        }),
                        y = 0;
                      y < f.length;
                      y += 1
                    ) {
                      for (
                        v = f[y];
                        m.length >= 2 && o.cross3(m[m.length - 2], m[m.length - 1], v) <= 0;
                      )
                        m.pop();
                      m.push(v);
                    }
                    for (y = f.length - 1; y >= 0; y -= 1) {
                      for (
                        v = f[y];
                        g.length >= 2 && o.cross3(g[g.length - 2], g[g.length - 1], v) <= 0;
                      )
                        g.pop();
                      g.push(v);
                    }
                    return (g.pop(), m.pop(), g.concat(m));
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(3),
                d = c(2),
                f = c(7),
                g = c(0),
                m = c(1),
                v = c(11);
              (function () {
                ((l._timeCorrection = !0),
                  (l._inertiaScale = 4),
                  (l._nextCollidingGroupId = 1),
                  (l._nextNonCollidingGroupId = -1),
                  (l._nextCategory = 1),
                  (l._baseDelta = 1e3 / 60),
                  (l.create = function (r) {
                    var x = {
                        id: g.nextId(),
                        type: 'body',
                        label: 'Body',
                        parts: [],
                        plugin: {},
                        angle: 0,
                        vertices: o.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
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
                      p = g.extend(x, r);
                    return (y(p, r), p);
                  }),
                  (l.nextGroup = function (r) {
                    return r ? l._nextNonCollidingGroupId-- : l._nextCollidingGroupId++;
                  }),
                  (l.nextCategory = function () {
                    return ((l._nextCategory = l._nextCategory << 1), l._nextCategory);
                  }));
                var y = function (r, x) {
                  ((x = x || {}),
                    l.set(r, {
                      bounds: r.bounds || m.create(r.vertices),
                      positionPrev: r.positionPrev || d.clone(r.position),
                      anglePrev: r.anglePrev || r.angle,
                      vertices: r.vertices,
                      parts: r.parts || [r],
                      isStatic: r.isStatic,
                      isSleeping: r.isSleeping,
                      parent: r.parent || r,
                    }),
                    o.rotate(r.vertices, r.angle, r.position),
                    v.rotate(r.axes, r.angle),
                    m.update(r.bounds, r.vertices, r.velocity),
                    l.set(r, {
                      axes: x.axes || r.axes,
                      area: x.area || r.area,
                      mass: x.mass || r.mass,
                      inertia: x.inertia || r.inertia,
                    }));
                  var p = r.isStatic
                      ? '#14151f'
                      : g.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1']),
                    T = r.isStatic ? '#555' : '#ccc',
                    _ = r.isStatic && r.render.fillStyle === null ? 1 : 0;
                  ((r.render.fillStyle = r.render.fillStyle || p),
                    (r.render.strokeStyle = r.render.strokeStyle || T),
                    (r.render.lineWidth = r.render.lineWidth || _),
                    (r.render.sprite.xOffset +=
                      -(r.bounds.min.x - r.position.x) / (r.bounds.max.x - r.bounds.min.x)),
                    (r.render.sprite.yOffset +=
                      -(r.bounds.min.y - r.position.y) / (r.bounds.max.y - r.bounds.min.y)));
                };
                ((l.set = function (r, x, p) {
                  var T;
                  typeof x == 'string' && ((T = x), (x = {}), (x[T] = p));
                  for (T in x)
                    if (Object.prototype.hasOwnProperty.call(x, T))
                      switch (((p = x[T]), T)) {
                        case 'isStatic':
                          l.setStatic(r, p);
                          break;
                        case 'isSleeping':
                          f.set(r, p);
                          break;
                        case 'mass':
                          l.setMass(r, p);
                          break;
                        case 'density':
                          l.setDensity(r, p);
                          break;
                        case 'inertia':
                          l.setInertia(r, p);
                          break;
                        case 'vertices':
                          l.setVertices(r, p);
                          break;
                        case 'position':
                          l.setPosition(r, p);
                          break;
                        case 'angle':
                          l.setAngle(r, p);
                          break;
                        case 'velocity':
                          l.setVelocity(r, p);
                          break;
                        case 'angularVelocity':
                          l.setAngularVelocity(r, p);
                          break;
                        case 'speed':
                          l.setSpeed(r, p);
                          break;
                        case 'angularSpeed':
                          l.setAngularSpeed(r, p);
                          break;
                        case 'parts':
                          l.setParts(r, p);
                          break;
                        case 'centre':
                          l.setCentre(r, p);
                          break;
                        default:
                          r[T] = p;
                      }
                }),
                  (l.setStatic = function (r, x) {
                    for (var p = 0; p < r.parts.length; p++) {
                      var T = r.parts[p];
                      (x
                        ? (T.isStatic ||
                            (T._original = {
                              restitution: T.restitution,
                              friction: T.friction,
                              mass: T.mass,
                              inertia: T.inertia,
                              density: T.density,
                              inverseMass: T.inverseMass,
                              inverseInertia: T.inverseInertia,
                            }),
                          (T.restitution = 0),
                          (T.friction = 1),
                          (T.mass = T.inertia = T.density = 1 / 0),
                          (T.inverseMass = T.inverseInertia = 0),
                          (T.positionPrev.x = T.position.x),
                          (T.positionPrev.y = T.position.y),
                          (T.anglePrev = T.angle),
                          (T.angularVelocity = 0),
                          (T.speed = 0),
                          (T.angularSpeed = 0),
                          (T.motion = 0))
                        : T._original &&
                          ((T.restitution = T._original.restitution),
                          (T.friction = T._original.friction),
                          (T.mass = T._original.mass),
                          (T.inertia = T._original.inertia),
                          (T.density = T._original.density),
                          (T.inverseMass = T._original.inverseMass),
                          (T.inverseInertia = T._original.inverseInertia),
                          (T._original = null)),
                        (T.isStatic = x));
                    }
                  }),
                  (l.setMass = function (r, x) {
                    var p = r.inertia / (r.mass / 6);
                    ((r.inertia = p * (x / 6)),
                      (r.inverseInertia = 1 / r.inertia),
                      (r.mass = x),
                      (r.inverseMass = 1 / r.mass),
                      (r.density = r.mass / r.area));
                  }),
                  (l.setDensity = function (r, x) {
                    (l.setMass(r, x * r.area), (r.density = x));
                  }),
                  (l.setInertia = function (r, x) {
                    ((r.inertia = x), (r.inverseInertia = 1 / r.inertia));
                  }),
                  (l.setVertices = function (r, x) {
                    (x[0].body === r ? (r.vertices = x) : (r.vertices = o.create(x, r)),
                      (r.axes = v.fromVertices(r.vertices)),
                      (r.area = o.area(r.vertices)),
                      l.setMass(r, r.density * r.area));
                    var p = o.centre(r.vertices);
                    (o.translate(r.vertices, p, -1),
                      l.setInertia(r, l._inertiaScale * o.inertia(r.vertices, r.mass)),
                      o.translate(r.vertices, r.position),
                      m.update(r.bounds, r.vertices, r.velocity));
                  }),
                  (l.setParts = function (r, x, p) {
                    var T;
                    for (
                      x = x.slice(0), r.parts.length = 0, r.parts.push(r), r.parent = r, T = 0;
                      T < x.length;
                      T++
                    ) {
                      var _ = x[T];
                      _ !== r && ((_.parent = r), r.parts.push(_));
                    }
                    if (r.parts.length !== 1) {
                      if (((p = typeof p < 'u' ? p : !0), p)) {
                        var U = [];
                        for (T = 0; T < x.length; T++) U = U.concat(x[T].vertices);
                        o.clockwiseSort(U);
                        var B = o.hull(U),
                          G = o.centre(B);
                        (l.setVertices(r, B), o.translate(r.vertices, G));
                      }
                      var C = l._totalProperties(r);
                      ((r.area = C.area),
                        (r.parent = r),
                        (r.position.x = C.centre.x),
                        (r.position.y = C.centre.y),
                        (r.positionPrev.x = C.centre.x),
                        (r.positionPrev.y = C.centre.y),
                        l.setMass(r, C.mass),
                        l.setInertia(r, C.inertia),
                        l.setPosition(r, C.centre));
                    }
                  }),
                  (l.setCentre = function (r, x, p) {
                    p
                      ? ((r.positionPrev.x += x.x),
                        (r.positionPrev.y += x.y),
                        (r.position.x += x.x),
                        (r.position.y += x.y))
                      : ((r.positionPrev.x = x.x - (r.position.x - r.positionPrev.x)),
                        (r.positionPrev.y = x.y - (r.position.y - r.positionPrev.y)),
                        (r.position.x = x.x),
                        (r.position.y = x.y));
                  }),
                  (l.setPosition = function (r, x, p) {
                    var T = d.sub(x, r.position);
                    p
                      ? ((r.positionPrev.x = r.position.x),
                        (r.positionPrev.y = r.position.y),
                        (r.velocity.x = T.x),
                        (r.velocity.y = T.y),
                        (r.speed = d.magnitude(T)))
                      : ((r.positionPrev.x += T.x), (r.positionPrev.y += T.y));
                    for (var _ = 0; _ < r.parts.length; _++) {
                      var U = r.parts[_];
                      ((U.position.x += T.x),
                        (U.position.y += T.y),
                        o.translate(U.vertices, T),
                        m.update(U.bounds, U.vertices, r.velocity));
                    }
                  }),
                  (l.setAngle = function (r, x, p) {
                    var T = x - r.angle;
                    p
                      ? ((r.anglePrev = r.angle),
                        (r.angularVelocity = T),
                        (r.angularSpeed = Math.abs(T)))
                      : (r.anglePrev += T);
                    for (var _ = 0; _ < r.parts.length; _++) {
                      var U = r.parts[_];
                      ((U.angle += T),
                        o.rotate(U.vertices, T, r.position),
                        v.rotate(U.axes, T),
                        m.update(U.bounds, U.vertices, r.velocity),
                        _ > 0 && d.rotateAbout(U.position, T, r.position, U.position));
                    }
                  }),
                  (l.setVelocity = function (r, x) {
                    var p = r.deltaTime / l._baseDelta;
                    ((r.positionPrev.x = r.position.x - x.x * p),
                      (r.positionPrev.y = r.position.y - x.y * p),
                      (r.velocity.x = (r.position.x - r.positionPrev.x) / p),
                      (r.velocity.y = (r.position.y - r.positionPrev.y) / p),
                      (r.speed = d.magnitude(r.velocity)));
                  }),
                  (l.getVelocity = function (r) {
                    var x = l._baseDelta / r.deltaTime;
                    return {
                      x: (r.position.x - r.positionPrev.x) * x,
                      y: (r.position.y - r.positionPrev.y) * x,
                    };
                  }),
                  (l.getSpeed = function (r) {
                    return d.magnitude(l.getVelocity(r));
                  }),
                  (l.setSpeed = function (r, x) {
                    l.setVelocity(r, d.mult(d.normalise(l.getVelocity(r)), x));
                  }),
                  (l.setAngularVelocity = function (r, x) {
                    var p = r.deltaTime / l._baseDelta;
                    ((r.anglePrev = r.angle - x * p),
                      (r.angularVelocity = (r.angle - r.anglePrev) / p),
                      (r.angularSpeed = Math.abs(r.angularVelocity)));
                  }),
                  (l.getAngularVelocity = function (r) {
                    return ((r.angle - r.anglePrev) * l._baseDelta) / r.deltaTime;
                  }),
                  (l.getAngularSpeed = function (r) {
                    return Math.abs(l.getAngularVelocity(r));
                  }),
                  (l.setAngularSpeed = function (r, x) {
                    l.setAngularVelocity(r, g.sign(l.getAngularVelocity(r)) * x);
                  }),
                  (l.translate = function (r, x, p) {
                    l.setPosition(r, d.add(r.position, x), p);
                  }),
                  (l.rotate = function (r, x, p, T) {
                    if (!p) l.setAngle(r, r.angle + x, T);
                    else {
                      var _ = Math.cos(x),
                        U = Math.sin(x),
                        B = r.position.x - p.x,
                        G = r.position.y - p.y;
                      (l.setPosition(r, { x: p.x + (B * _ - G * U), y: p.y + (B * U + G * _) }, T),
                        l.setAngle(r, r.angle + x, T));
                    }
                  }),
                  (l.scale = function (r, x, p, T) {
                    var _ = 0,
                      U = 0;
                    T = T || r.position;
                    for (var B = 0; B < r.parts.length; B++) {
                      var G = r.parts[B];
                      (o.scale(G.vertices, x, p, T),
                        (G.axes = v.fromVertices(G.vertices)),
                        (G.area = o.area(G.vertices)),
                        l.setMass(G, r.density * G.area),
                        o.translate(G.vertices, { x: -G.position.x, y: -G.position.y }),
                        l.setInertia(G, l._inertiaScale * o.inertia(G.vertices, G.mass)),
                        o.translate(G.vertices, { x: G.position.x, y: G.position.y }),
                        B > 0 && ((_ += G.area), (U += G.inertia)),
                        (G.position.x = T.x + (G.position.x - T.x) * x),
                        (G.position.y = T.y + (G.position.y - T.y) * p),
                        m.update(G.bounds, G.vertices, r.velocity));
                    }
                    (r.parts.length > 1 &&
                      ((r.area = _),
                      r.isStatic || (l.setMass(r, r.density * _), l.setInertia(r, U))),
                      r.circleRadius &&
                        (x === p ? (r.circleRadius *= x) : (r.circleRadius = null)));
                  }),
                  (l.update = function (r, x) {
                    x = (typeof x < 'u' ? x : 1e3 / 60) * r.timeScale;
                    var p = x * x,
                      T = l._timeCorrection ? x / (r.deltaTime || x) : 1,
                      _ = 1 - r.frictionAir * (x / g._baseDelta),
                      U = (r.position.x - r.positionPrev.x) * T,
                      B = (r.position.y - r.positionPrev.y) * T;
                    ((r.velocity.x = U * _ + (r.force.x / r.mass) * p),
                      (r.velocity.y = B * _ + (r.force.y / r.mass) * p),
                      (r.positionPrev.x = r.position.x),
                      (r.positionPrev.y = r.position.y),
                      (r.position.x += r.velocity.x),
                      (r.position.y += r.velocity.y),
                      (r.deltaTime = x),
                      (r.angularVelocity =
                        (r.angle - r.anglePrev) * _ * T + (r.torque / r.inertia) * p),
                      (r.anglePrev = r.angle),
                      (r.angle += r.angularVelocity));
                    for (var G = 0; G < r.parts.length; G++) {
                      var C = r.parts[G];
                      (o.translate(C.vertices, r.velocity),
                        G > 0 && ((C.position.x += r.velocity.x), (C.position.y += r.velocity.y)),
                        r.angularVelocity !== 0 &&
                          (o.rotate(C.vertices, r.angularVelocity, r.position),
                          v.rotate(C.axes, r.angularVelocity),
                          G > 0 &&
                            d.rotateAbout(C.position, r.angularVelocity, r.position, C.position)),
                        m.update(C.bounds, C.vertices, r.velocity));
                    }
                  }),
                  (l.updateVelocities = function (r) {
                    var x = l._baseDelta / r.deltaTime,
                      p = r.velocity;
                    ((p.x = (r.position.x - r.positionPrev.x) * x),
                      (p.y = (r.position.y - r.positionPrev.y) * x),
                      (r.speed = Math.sqrt(p.x * p.x + p.y * p.y)),
                      (r.angularVelocity = (r.angle - r.anglePrev) * x),
                      (r.angularSpeed = Math.abs(r.angularVelocity)));
                  }),
                  (l.applyForce = function (r, x, p) {
                    var T = { x: x.x - r.position.x, y: x.y - r.position.y };
                    ((r.force.x += p.x), (r.force.y += p.y), (r.torque += T.x * p.y - T.y * p.x));
                  }),
                  (l._totalProperties = function (r) {
                    for (
                      var x = { mass: 0, area: 0, inertia: 0, centre: { x: 0, y: 0 } },
                        p = r.parts.length === 1 ? 0 : 1;
                      p < r.parts.length;
                      p++
                    ) {
                      var T = r.parts[p],
                        _ = T.mass !== 1 / 0 ? T.mass : 1;
                      ((x.mass += _),
                        (x.area += T.area),
                        (x.inertia += T.inertia),
                        (x.centre = d.add(x.centre, d.mult(T.position, _))));
                    }
                    return ((x.centre = d.div(x.centre, x.mass)), x);
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(0);
              (function () {
                ((l.on = function (d, f, g) {
                  for (var m = f.split(' '), v, y = 0; y < m.length; y++)
                    ((v = m[y]),
                      (d.events = d.events || {}),
                      (d.events[v] = d.events[v] || []),
                      d.events[v].push(g));
                  return g;
                }),
                  (l.off = function (d, f, g) {
                    if (!f) {
                      d.events = {};
                      return;
                    }
                    typeof f == 'function' && ((g = f), (f = o.keys(d.events).join(' ')));
                    for (var m = f.split(' '), v = 0; v < m.length; v++) {
                      var y = d.events[m[v]],
                        r = [];
                      if (g && y) for (var x = 0; x < y.length; x++) y[x] !== g && r.push(y[x]);
                      d.events[m[v]] = r;
                    }
                  }),
                  (l.trigger = function (d, f, g) {
                    var m,
                      v,
                      y,
                      r,
                      x = d.events;
                    if (x && o.keys(x).length > 0) {
                      (g || (g = {}), (m = f.split(' ')));
                      for (var p = 0; p < m.length; p++)
                        if (((v = m[p]), (y = x[v]), y)) {
                          ((r = o.clone(g, !1)), (r.name = v), (r.source = d));
                          for (var T = 0; T < y.length; T++) y[T].apply(d, [r]);
                        }
                    }
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(5),
                d = c(0),
                f = c(1),
                g = c(4);
              (function () {
                ((l.create = function (m) {
                  return d.extend(
                    {
                      id: d.nextId(),
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
                    m
                  );
                }),
                  (l.setModified = function (m, v, y, r) {
                    if (
                      ((m.isModified = v),
                      v &&
                        m.cache &&
                        ((m.cache.allBodies = null),
                        (m.cache.allConstraints = null),
                        (m.cache.allComposites = null)),
                      y && m.parent && l.setModified(m.parent, v, y, r),
                      r)
                    )
                      for (var x = 0; x < m.composites.length; x++) {
                        var p = m.composites[x];
                        l.setModified(p, v, y, r);
                      }
                  }),
                  (l.add = function (m, v) {
                    var y = [].concat(v);
                    o.trigger(m, 'beforeAdd', { object: v });
                    for (var r = 0; r < y.length; r++) {
                      var x = y[r];
                      switch (x.type) {
                        case 'body':
                          if (x.parent !== x) {
                            d.warn(
                              'Composite.add: skipped adding a compound body part (you must add its parent instead)'
                            );
                            break;
                          }
                          l.addBody(m, x);
                          break;
                        case 'constraint':
                          l.addConstraint(m, x);
                          break;
                        case 'composite':
                          l.addComposite(m, x);
                          break;
                        case 'mouseConstraint':
                          l.addConstraint(m, x.constraint);
                          break;
                      }
                    }
                    return (o.trigger(m, 'afterAdd', { object: v }), m);
                  }),
                  (l.remove = function (m, v, y) {
                    var r = [].concat(v);
                    o.trigger(m, 'beforeRemove', { object: v });
                    for (var x = 0; x < r.length; x++) {
                      var p = r[x];
                      switch (p.type) {
                        case 'body':
                          l.removeBody(m, p, y);
                          break;
                        case 'constraint':
                          l.removeConstraint(m, p, y);
                          break;
                        case 'composite':
                          l.removeComposite(m, p, y);
                          break;
                        case 'mouseConstraint':
                          l.removeConstraint(m, p.constraint);
                          break;
                      }
                    }
                    return (o.trigger(m, 'afterRemove', { object: v }), m);
                  }),
                  (l.addComposite = function (m, v) {
                    return (m.composites.push(v), (v.parent = m), l.setModified(m, !0, !0, !1), m);
                  }),
                  (l.removeComposite = function (m, v, y) {
                    var r = d.indexOf(m.composites, v);
                    if (r !== -1) {
                      var x = l.allBodies(v);
                      l.removeCompositeAt(m, r);
                      for (var p = 0; p < x.length; p++) x[p].sleepCounter = 0;
                    }
                    if (y)
                      for (var p = 0; p < m.composites.length; p++)
                        l.removeComposite(m.composites[p], v, !0);
                    return m;
                  }),
                  (l.removeCompositeAt = function (m, v) {
                    return (m.composites.splice(v, 1), l.setModified(m, !0, !0, !1), m);
                  }),
                  (l.addBody = function (m, v) {
                    return (m.bodies.push(v), l.setModified(m, !0, !0, !1), m);
                  }),
                  (l.removeBody = function (m, v, y) {
                    var r = d.indexOf(m.bodies, v);
                    if ((r !== -1 && (l.removeBodyAt(m, r), (v.sleepCounter = 0)), y))
                      for (var x = 0; x < m.composites.length; x++)
                        l.removeBody(m.composites[x], v, !0);
                    return m;
                  }),
                  (l.removeBodyAt = function (m, v) {
                    return (m.bodies.splice(v, 1), l.setModified(m, !0, !0, !1), m);
                  }),
                  (l.addConstraint = function (m, v) {
                    return (m.constraints.push(v), l.setModified(m, !0, !0, !1), m);
                  }),
                  (l.removeConstraint = function (m, v, y) {
                    var r = d.indexOf(m.constraints, v);
                    if ((r !== -1 && l.removeConstraintAt(m, r), y))
                      for (var x = 0; x < m.composites.length; x++)
                        l.removeConstraint(m.composites[x], v, !0);
                    return m;
                  }),
                  (l.removeConstraintAt = function (m, v) {
                    return (m.constraints.splice(v, 1), l.setModified(m, !0, !0, !1), m);
                  }),
                  (l.clear = function (m, v, y) {
                    if (y)
                      for (var r = 0; r < m.composites.length; r++) l.clear(m.composites[r], v, !0);
                    return (
                      v
                        ? (m.bodies = m.bodies.filter(function (x) {
                            return x.isStatic;
                          }))
                        : (m.bodies.length = 0),
                      (m.constraints.length = 0),
                      (m.composites.length = 0),
                      l.setModified(m, !0, !0, !1),
                      m
                    );
                  }),
                  (l.allBodies = function (m) {
                    if (m.cache && m.cache.allBodies) return m.cache.allBodies;
                    for (var v = [].concat(m.bodies), y = 0; y < m.composites.length; y++)
                      v = v.concat(l.allBodies(m.composites[y]));
                    return (m.cache && (m.cache.allBodies = v), v);
                  }),
                  (l.allConstraints = function (m) {
                    if (m.cache && m.cache.allConstraints) return m.cache.allConstraints;
                    for (var v = [].concat(m.constraints), y = 0; y < m.composites.length; y++)
                      v = v.concat(l.allConstraints(m.composites[y]));
                    return (m.cache && (m.cache.allConstraints = v), v);
                  }),
                  (l.allComposites = function (m) {
                    if (m.cache && m.cache.allComposites) return m.cache.allComposites;
                    for (var v = [].concat(m.composites), y = 0; y < m.composites.length; y++)
                      v = v.concat(l.allComposites(m.composites[y]));
                    return (m.cache && (m.cache.allComposites = v), v);
                  }),
                  (l.get = function (m, v, y) {
                    var r, x;
                    switch (y) {
                      case 'body':
                        r = l.allBodies(m);
                        break;
                      case 'constraint':
                        r = l.allConstraints(m);
                        break;
                      case 'composite':
                        r = l.allComposites(m).concat(m);
                        break;
                    }
                    return r
                      ? ((x = r.filter(function (p) {
                          return p.id.toString() === v.toString();
                        })),
                        x.length === 0 ? null : x[0])
                      : null;
                  }),
                  (l.move = function (m, v, y) {
                    return (l.remove(m, v), l.add(y, v), m);
                  }),
                  (l.rebase = function (m) {
                    for (
                      var v = l.allBodies(m).concat(l.allConstraints(m)).concat(l.allComposites(m)),
                        y = 0;
                      y < v.length;
                      y++
                    )
                      v[y].id = d.nextId();
                    return m;
                  }),
                  (l.translate = function (m, v, y) {
                    for (var r = y ? l.allBodies(m) : m.bodies, x = 0; x < r.length; x++)
                      g.translate(r[x], v);
                    return m;
                  }),
                  (l.rotate = function (m, v, y, r) {
                    for (
                      var x = Math.cos(v),
                        p = Math.sin(v),
                        T = r ? l.allBodies(m) : m.bodies,
                        _ = 0;
                      _ < T.length;
                      _++
                    ) {
                      var U = T[_],
                        B = U.position.x - y.x,
                        G = U.position.y - y.y;
                      (g.setPosition(U, { x: y.x + (B * x - G * p), y: y.y + (B * p + G * x) }),
                        g.rotate(U, v));
                    }
                    return m;
                  }),
                  (l.scale = function (m, v, y, r, x) {
                    for (var p = x ? l.allBodies(m) : m.bodies, T = 0; T < p.length; T++) {
                      var _ = p[T],
                        U = _.position.x - r.x,
                        B = _.position.y - r.y;
                      (g.setPosition(_, { x: r.x + U * v, y: r.y + B * y }), g.scale(_, v, y));
                    }
                    return m;
                  }),
                  (l.bounds = function (m) {
                    for (var v = l.allBodies(m), y = [], r = 0; r < v.length; r += 1) {
                      var x = v[r];
                      y.push(x.bounds.min, x.bounds.max);
                    }
                    return f.create(y);
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(4),
                d = c(5),
                f = c(0);
              (function () {
                ((l._motionWakeThreshold = 0.18),
                  (l._motionSleepThreshold = 0.08),
                  (l._minBias = 0.9),
                  (l.update = function (g, m) {
                    for (
                      var v = m / f._baseDelta, y = l._motionSleepThreshold, r = 0;
                      r < g.length;
                      r++
                    ) {
                      var x = g[r],
                        p = o.getSpeed(x),
                        T = o.getAngularSpeed(x),
                        _ = p * p + T * T;
                      if (x.force.x !== 0 || x.force.y !== 0) {
                        l.set(x, !1);
                        continue;
                      }
                      var U = Math.min(x.motion, _),
                        B = Math.max(x.motion, _);
                      ((x.motion = l._minBias * U + (1 - l._minBias) * B),
                        x.sleepThreshold > 0 && x.motion < y
                          ? ((x.sleepCounter += 1),
                            x.sleepCounter >= x.sleepThreshold / v && l.set(x, !0))
                          : x.sleepCounter > 0 && (x.sleepCounter -= 1));
                    }
                  }),
                  (l.afterCollisions = function (g) {
                    for (var m = l._motionSleepThreshold, v = 0; v < g.length; v++) {
                      var y = g[v];
                      if (y.isActive) {
                        var r = y.collision,
                          x = r.bodyA.parent,
                          p = r.bodyB.parent;
                        if (
                          !((x.isSleeping && p.isSleeping) || x.isStatic || p.isStatic) &&
                          (x.isSleeping || p.isSleeping)
                        ) {
                          var T = x.isSleeping && !x.isStatic ? x : p,
                            _ = T === x ? p : x;
                          !T.isStatic && _.motion > m && l.set(T, !1);
                        }
                      }
                    }
                  }),
                  (l.set = function (g, m) {
                    var v = g.isSleeping;
                    m
                      ? ((g.isSleeping = !0),
                        (g.sleepCounter = g.sleepThreshold),
                        (g.positionImpulse.x = 0),
                        (g.positionImpulse.y = 0),
                        (g.positionPrev.x = g.position.x),
                        (g.positionPrev.y = g.position.y),
                        (g.anglePrev = g.angle),
                        (g.speed = 0),
                        (g.angularSpeed = 0),
                        (g.motion = 0),
                        v || d.trigger(g, 'sleepStart'))
                      : ((g.isSleeping = !1), (g.sleepCounter = 0), v && d.trigger(g, 'sleepEnd'));
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(3),
                d = c(9);
              (function () {
                var f = [],
                  g = { overlap: 0, axis: null },
                  m = { overlap: 0, axis: null };
                ((l.create = function (v, y) {
                  return {
                    pair: null,
                    collided: !1,
                    bodyA: v,
                    bodyB: y,
                    parentA: v.parent,
                    parentB: y.parent,
                    depth: 0,
                    normal: { x: 0, y: 0 },
                    tangent: { x: 0, y: 0 },
                    penetration: { x: 0, y: 0 },
                    supports: [null, null],
                    supportCount: 0,
                  };
                }),
                  (l.collides = function (v, y, r) {
                    if (
                      (l._overlapAxes(g, v.vertices, y.vertices, v.axes),
                      g.overlap <= 0 ||
                        (l._overlapAxes(m, y.vertices, v.vertices, y.axes), m.overlap <= 0))
                    )
                      return null;
                    var x = r && r.table[d.id(v, y)],
                      p;
                    (x
                      ? (p = x.collision)
                      : ((p = l.create(v, y)),
                        (p.collided = !0),
                        (p.bodyA = v.id < y.id ? v : y),
                        (p.bodyB = v.id < y.id ? y : v),
                        (p.parentA = p.bodyA.parent),
                        (p.parentB = p.bodyB.parent)),
                      (v = p.bodyA),
                      (y = p.bodyB));
                    var T;
                    g.overlap < m.overlap ? (T = g) : (T = m);
                    var _ = p.normal,
                      U = p.tangent,
                      B = p.penetration,
                      G = p.supports,
                      C = T.overlap,
                      O = T.axis,
                      D = O.x,
                      A = O.y,
                      j = y.position.x - v.position.x,
                      L = y.position.y - v.position.y;
                    (D * j + A * L >= 0 && ((D = -D), (A = -A)),
                      (_.x = D),
                      (_.y = A),
                      (U.x = -A),
                      (U.y = D),
                      (B.x = D * C),
                      (B.y = A * C),
                      (p.depth = C));
                    var H = l._findSupports(v, y, _, 1),
                      V = 0;
                    if (
                      (o.contains(v.vertices, H[0]) && (G[V++] = H[0]),
                      o.contains(v.vertices, H[1]) && (G[V++] = H[1]),
                      V < 2)
                    ) {
                      var P = l._findSupports(y, v, _, -1);
                      (o.contains(y.vertices, P[0]) && (G[V++] = P[0]),
                        V < 2 && o.contains(y.vertices, P[1]) && (G[V++] = P[1]));
                    }
                    return (V === 0 && (G[V++] = H[0]), (p.supportCount = V), p);
                  }),
                  (l._overlapAxes = function (v, y, r, x) {
                    var p = y.length,
                      T = r.length,
                      _ = y[0].x,
                      U = y[0].y,
                      B = r[0].x,
                      G = r[0].y,
                      C = x.length,
                      O = Number.MAX_VALUE,
                      D = 0,
                      A,
                      j,
                      L,
                      H,
                      V,
                      P;
                    for (V = 0; V < C; V++) {
                      var ie = x[V],
                        W = ie.x,
                        M = ie.y,
                        z = _ * W + U * M,
                        q = B * W + G * M,
                        F = z,
                        le = q;
                      for (P = 1; P < p; P += 1)
                        ((H = y[P].x * W + y[P].y * M), H > F ? (F = H) : H < z && (z = H));
                      for (P = 1; P < T; P += 1)
                        ((H = r[P].x * W + r[P].y * M), H > le ? (le = H) : H < q && (q = H));
                      if (
                        ((j = F - q),
                        (L = le - z),
                        (A = j < L ? j : L),
                        A < O && ((O = A), (D = V), A <= 0))
                      )
                        break;
                    }
                    ((v.axis = x[D]), (v.overlap = O));
                  }),
                  (l._findSupports = function (v, y, r, x) {
                    var p = y.vertices,
                      T = p.length,
                      _ = v.position.x,
                      U = v.position.y,
                      B = r.x * x,
                      G = r.y * x,
                      C = p[0],
                      O = C,
                      D = B * (_ - O.x) + G * (U - O.y),
                      A,
                      j,
                      L;
                    for (L = 1; L < T; L += 1)
                      ((O = p[L]),
                        (j = B * (_ - O.x) + G * (U - O.y)),
                        j < D && ((D = j), (C = O)));
                    return (
                      (A = p[(T + C.index - 1) % T]),
                      (D = B * (_ - A.x) + G * (U - A.y)),
                      (O = p[(C.index + 1) % T]),
                      B * (_ - O.x) + G * (U - O.y) < D
                        ? ((f[0] = C), (f[1] = O), f)
                        : ((f[0] = C), (f[1] = A), f)
                    );
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(16);
              (function () {
                ((l.create = function (d, f) {
                  var g = d.bodyA,
                    m = d.bodyB,
                    v = {
                      id: l.id(g, m),
                      bodyA: g,
                      bodyB: m,
                      collision: d,
                      contacts: [o.create(), o.create()],
                      contactCount: 0,
                      separation: 0,
                      isActive: !0,
                      isSensor: g.isSensor || m.isSensor,
                      timeCreated: f,
                      timeUpdated: f,
                      inverseMass: 0,
                      friction: 0,
                      frictionStatic: 0,
                      restitution: 0,
                      slop: 0,
                    };
                  return (l.update(v, d, f), v);
                }),
                  (l.update = function (d, f, g) {
                    var m = f.supports,
                      v = f.supportCount,
                      y = d.contacts,
                      r = f.parentA,
                      x = f.parentB;
                    ((d.isActive = !0),
                      (d.timeUpdated = g),
                      (d.collision = f),
                      (d.separation = f.depth),
                      (d.inverseMass = r.inverseMass + x.inverseMass),
                      (d.friction = r.friction < x.friction ? r.friction : x.friction),
                      (d.frictionStatic =
                        r.frictionStatic > x.frictionStatic ? r.frictionStatic : x.frictionStatic),
                      (d.restitution =
                        r.restitution > x.restitution ? r.restitution : x.restitution),
                      (d.slop = r.slop > x.slop ? r.slop : x.slop),
                      (d.contactCount = v),
                      (f.pair = d));
                    var p = m[0],
                      T = y[0],
                      _ = m[1],
                      U = y[1];
                    ((U.vertex === p || T.vertex === _) && ((y[1] = T), (y[0] = T = U), (U = y[1])),
                      (T.vertex = p),
                      (U.vertex = _));
                  }),
                  (l.setActive = function (d, f, g) {
                    f
                      ? ((d.isActive = !0), (d.timeUpdated = g))
                      : ((d.isActive = !1), (d.contactCount = 0));
                  }),
                  (l.id = function (d, f) {
                    return d.id < f.id
                      ? d.id.toString(36) + ':' + f.id.toString(36)
                      : f.id.toString(36) + ':' + d.id.toString(36);
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(3),
                d = c(2),
                f = c(7),
                g = c(1),
                m = c(11),
                v = c(0);
              (function () {
                ((l._warming = 0.4),
                  (l._torqueDampen = 1),
                  (l._minLength = 1e-6),
                  (l.create = function (y) {
                    var r = y;
                    (r.bodyA && !r.pointA && (r.pointA = { x: 0, y: 0 }),
                      r.bodyB && !r.pointB && (r.pointB = { x: 0, y: 0 }));
                    var x = r.bodyA ? d.add(r.bodyA.position, r.pointA) : r.pointA,
                      p = r.bodyB ? d.add(r.bodyB.position, r.pointB) : r.pointB,
                      T = d.magnitude(d.sub(x, p));
                    ((r.length = typeof r.length < 'u' ? r.length : T),
                      (r.id = r.id || v.nextId()),
                      (r.label = r.label || 'Constraint'),
                      (r.type = 'constraint'),
                      (r.stiffness = r.stiffness || (r.length > 0 ? 1 : 0.7)),
                      (r.damping = r.damping || 0),
                      (r.angularStiffness = r.angularStiffness || 0),
                      (r.angleA = r.bodyA ? r.bodyA.angle : r.angleA),
                      (r.angleB = r.bodyB ? r.bodyB.angle : r.angleB),
                      (r.plugin = {}));
                    var _ = {
                      visible: !0,
                      lineWidth: 2,
                      strokeStyle: '#ffffff',
                      type: 'line',
                      anchors: !0,
                    };
                    return (
                      r.length === 0 && r.stiffness > 0.1
                        ? ((_.type = 'pin'), (_.anchors = !1))
                        : r.stiffness < 0.9 && (_.type = 'spring'),
                      (r.render = v.extend(_, r.render)),
                      r
                    );
                  }),
                  (l.preSolveAll = function (y) {
                    for (var r = 0; r < y.length; r += 1) {
                      var x = y[r],
                        p = x.constraintImpulse;
                      x.isStatic ||
                        (p.x === 0 && p.y === 0 && p.angle === 0) ||
                        ((x.position.x += p.x), (x.position.y += p.y), (x.angle += p.angle));
                    }
                  }),
                  (l.solveAll = function (y, r) {
                    for (var x = v.clamp(r / v._baseDelta, 0, 1), p = 0; p < y.length; p += 1) {
                      var T = y[p],
                        _ = !T.bodyA || (T.bodyA && T.bodyA.isStatic),
                        U = !T.bodyB || (T.bodyB && T.bodyB.isStatic);
                      (_ || U) && l.solve(y[p], x);
                    }
                    for (p = 0; p < y.length; p += 1)
                      ((T = y[p]),
                        (_ = !T.bodyA || (T.bodyA && T.bodyA.isStatic)),
                        (U = !T.bodyB || (T.bodyB && T.bodyB.isStatic)),
                        !_ && !U && l.solve(y[p], x));
                  }),
                  (l.solve = function (y, r) {
                    var x = y.bodyA,
                      p = y.bodyB,
                      T = y.pointA,
                      _ = y.pointB;
                    if (!(!x && !p)) {
                      (x &&
                        !x.isStatic &&
                        (d.rotate(T, x.angle - y.angleA, T), (y.angleA = x.angle)),
                        p &&
                          !p.isStatic &&
                          (d.rotate(_, p.angle - y.angleB, _), (y.angleB = p.angle)));
                      var U = T,
                        B = _;
                      if (
                        (x && (U = d.add(x.position, T)),
                        p && (B = d.add(p.position, _)),
                        !(!U || !B))
                      ) {
                        var G = d.sub(U, B),
                          C = d.magnitude(G);
                        C < l._minLength && (C = l._minLength);
                        var O = (C - y.length) / C,
                          D = y.stiffness >= 1 || y.length === 0,
                          A = D ? y.stiffness * r : y.stiffness * r * r,
                          j = y.damping * r,
                          L = d.mult(G, O * A),
                          H = (x ? x.inverseMass : 0) + (p ? p.inverseMass : 0),
                          V = (x ? x.inverseInertia : 0) + (p ? p.inverseInertia : 0),
                          P = H + V,
                          ie,
                          W,
                          M,
                          z,
                          q;
                        if (j > 0) {
                          var F = d.create();
                          ((M = d.div(G, C)),
                            (q = d.sub(
                              (p && d.sub(p.position, p.positionPrev)) || F,
                              (x && d.sub(x.position, x.positionPrev)) || F
                            )),
                            (z = d.dot(M, q)));
                        }
                        (x &&
                          !x.isStatic &&
                          ((W = x.inverseMass / H),
                          (x.constraintImpulse.x -= L.x * W),
                          (x.constraintImpulse.y -= L.y * W),
                          (x.position.x -= L.x * W),
                          (x.position.y -= L.y * W),
                          j > 0 &&
                            ((x.positionPrev.x -= j * M.x * z * W),
                            (x.positionPrev.y -= j * M.y * z * W)),
                          (ie =
                            (d.cross(T, L) / P) *
                            l._torqueDampen *
                            x.inverseInertia *
                            (1 - y.angularStiffness)),
                          (x.constraintImpulse.angle -= ie),
                          (x.angle -= ie)),
                          p &&
                            !p.isStatic &&
                            ((W = p.inverseMass / H),
                            (p.constraintImpulse.x += L.x * W),
                            (p.constraintImpulse.y += L.y * W),
                            (p.position.x += L.x * W),
                            (p.position.y += L.y * W),
                            j > 0 &&
                              ((p.positionPrev.x += j * M.x * z * W),
                              (p.positionPrev.y += j * M.y * z * W)),
                            (ie =
                              (d.cross(_, L) / P) *
                              l._torqueDampen *
                              p.inverseInertia *
                              (1 - y.angularStiffness)),
                            (p.constraintImpulse.angle += ie),
                            (p.angle += ie)));
                      }
                    }
                  }),
                  (l.postSolveAll = function (y) {
                    for (var r = 0; r < y.length; r++) {
                      var x = y[r],
                        p = x.constraintImpulse;
                      if (!(x.isStatic || (p.x === 0 && p.y === 0 && p.angle === 0))) {
                        f.set(x, !1);
                        for (var T = 0; T < x.parts.length; T++) {
                          var _ = x.parts[T];
                          (o.translate(_.vertices, p),
                            T > 0 && ((_.position.x += p.x), (_.position.y += p.y)),
                            p.angle !== 0 &&
                              (o.rotate(_.vertices, p.angle, x.position),
                              m.rotate(_.axes, p.angle),
                              T > 0 && d.rotateAbout(_.position, p.angle, x.position, _.position)),
                            g.update(_.bounds, _.vertices, x.velocity));
                        }
                        ((p.angle *= l._warming), (p.x *= l._warming), (p.y *= l._warming));
                      }
                    }
                  }),
                  (l.pointAWorld = function (y) {
                    return {
                      x: (y.bodyA ? y.bodyA.position.x : 0) + (y.pointA ? y.pointA.x : 0),
                      y: (y.bodyA ? y.bodyA.position.y : 0) + (y.pointA ? y.pointA.y : 0),
                    };
                  }),
                  (l.pointBWorld = function (y) {
                    return {
                      x: (y.bodyB ? y.bodyB.position.x : 0) + (y.pointB ? y.pointB.x : 0),
                      y: (y.bodyB ? y.bodyB.position.y : 0) + (y.pointB ? y.pointB.y : 0),
                    };
                  }),
                  (l.currentLength = function (y) {
                    var r = (y.bodyA ? y.bodyA.position.x : 0) + (y.pointA ? y.pointA.x : 0),
                      x = (y.bodyA ? y.bodyA.position.y : 0) + (y.pointA ? y.pointA.y : 0),
                      p = (y.bodyB ? y.bodyB.position.x : 0) + (y.pointB ? y.pointB.x : 0),
                      T = (y.bodyB ? y.bodyB.position.y : 0) + (y.pointB ? y.pointB.y : 0),
                      _ = r - p,
                      U = x - T;
                    return Math.sqrt(_ * _ + U * U);
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(2),
                d = c(0);
              (function () {
                ((l.fromVertices = function (f) {
                  for (var g = {}, m = 0; m < f.length; m++) {
                    var v = (m + 1) % f.length,
                      y = o.normalise({ x: f[v].y - f[m].y, y: f[m].x - f[v].x }),
                      r = y.y === 0 ? 1 / 0 : y.x / y.y;
                    ((r = r.toFixed(3).toString()), (g[r] = y));
                  }
                  return d.values(g);
                }),
                  (l.rotate = function (f, g) {
                    if (g !== 0)
                      for (var m = Math.cos(g), v = Math.sin(g), y = 0; y < f.length; y++) {
                        var r = f[y],
                          x;
                        ((x = r.x * m - r.y * v), (r.y = r.x * v + r.y * m), (r.x = x));
                      }
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(3),
                d = c(0),
                f = c(4),
                g = c(1),
                m = c(2);
              (function () {
                ((l.rectangle = function (v, y, r, x, p) {
                  p = p || {};
                  var T = {
                    label: 'Rectangle Body',
                    position: { x: v, y },
                    vertices: o.fromPath('L 0 0 L ' + r + ' 0 L ' + r + ' ' + x + ' L 0 ' + x),
                  };
                  if (p.chamfer) {
                    var _ = p.chamfer;
                    ((T.vertices = o.chamfer(
                      T.vertices,
                      _.radius,
                      _.quality,
                      _.qualityMin,
                      _.qualityMax
                    )),
                      delete p.chamfer);
                  }
                  return f.create(d.extend({}, T, p));
                }),
                  (l.trapezoid = function (v, y, r, x, p, T) {
                    ((T = T || {}),
                      p >= 1 && d.warn('Bodies.trapezoid: slope parameter must be < 1.'),
                      (p *= 0.5));
                    var _ = (1 - p * 2) * r,
                      U = r * p,
                      B = U + _,
                      G = B + U,
                      C;
                    p < 0.5
                      ? (C = 'L 0 0 L ' + U + ' ' + -x + ' L ' + B + ' ' + -x + ' L ' + G + ' 0')
                      : (C = 'L 0 0 L ' + B + ' ' + -x + ' L ' + G + ' 0');
                    var O = {
                      label: 'Trapezoid Body',
                      position: { x: v, y },
                      vertices: o.fromPath(C),
                    };
                    if (T.chamfer) {
                      var D = T.chamfer;
                      ((O.vertices = o.chamfer(
                        O.vertices,
                        D.radius,
                        D.quality,
                        D.qualityMin,
                        D.qualityMax
                      )),
                        delete T.chamfer);
                    }
                    return f.create(d.extend({}, O, T));
                  }),
                  (l.circle = function (v, y, r, x, p) {
                    x = x || {};
                    var T = { label: 'Circle Body', circleRadius: r };
                    p = p || 25;
                    var _ = Math.ceil(Math.max(10, Math.min(p, r)));
                    return (_ % 2 === 1 && (_ += 1), l.polygon(v, y, _, r, d.extend({}, T, x)));
                  }),
                  (l.polygon = function (v, y, r, x, p) {
                    if (((p = p || {}), r < 3)) return l.circle(v, y, x, p);
                    for (var T = (2 * Math.PI) / r, _ = '', U = T * 0.5, B = 0; B < r; B += 1) {
                      var G = U + B * T,
                        C = Math.cos(G) * x,
                        O = Math.sin(G) * x;
                      _ += 'L ' + C.toFixed(3) + ' ' + O.toFixed(3) + ' ';
                    }
                    var D = {
                      label: 'Polygon Body',
                      position: { x: v, y },
                      vertices: o.fromPath(_),
                    };
                    if (p.chamfer) {
                      var A = p.chamfer;
                      ((D.vertices = o.chamfer(
                        D.vertices,
                        A.radius,
                        A.quality,
                        A.qualityMin,
                        A.qualityMax
                      )),
                        delete p.chamfer);
                    }
                    return f.create(d.extend({}, D, p));
                  }),
                  (l.fromVertices = function (v, y, r, x, p, T, _, U) {
                    var B = d.getDecomp(),
                      G,
                      C,
                      O,
                      D,
                      A,
                      j,
                      L,
                      H,
                      V,
                      P,
                      ie;
                    for (
                      G = !!(B && B.quickDecomp),
                        x = x || {},
                        O = [],
                        p = typeof p < 'u' ? p : !1,
                        T = typeof T < 'u' ? T : 0.01,
                        _ = typeof _ < 'u' ? _ : 10,
                        U = typeof U < 'u' ? U : 0.01,
                        d.isArray(r[0]) || (r = [r]),
                        P = 0;
                      P < r.length;
                      P += 1
                    )
                      if (
                        ((j = r[P]),
                        (D = o.isConvex(j)),
                        (A = !D),
                        A &&
                          !G &&
                          d.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                          ),
                        D || !G)
                      )
                        (D ? (j = o.clockwiseSort(j)) : (j = o.hull(j)),
                          O.push({ position: { x: v, y }, vertices: j }));
                      else {
                        var W = j.map(function (se) {
                          return [se.x, se.y];
                        });
                        (B.makeCCW(W),
                          T !== !1 && B.removeCollinearPoints(W, T),
                          U !== !1 && B.removeDuplicatePoints && B.removeDuplicatePoints(W, U));
                        var M = B.quickDecomp(W);
                        for (L = 0; L < M.length; L++) {
                          var z = M[L],
                            q = z.map(function (se) {
                              return { x: se[0], y: se[1] };
                            });
                          (_ > 0 && o.area(q) < _) ||
                            O.push({ position: o.centre(q), vertices: q });
                        }
                      }
                    for (L = 0; L < O.length; L++) O[L] = f.create(d.extend(O[L], x));
                    if (p) {
                      var F = 5;
                      for (L = 0; L < O.length; L++) {
                        var le = O[L];
                        for (H = L + 1; H < O.length; H++) {
                          var N = O[H];
                          if (g.overlaps(le.bounds, N.bounds)) {
                            var Q = le.vertices,
                              ee = N.vertices;
                            for (V = 0; V < le.vertices.length; V++)
                              for (ie = 0; ie < N.vertices.length; ie++) {
                                var ue = m.magnitudeSquared(m.sub(Q[(V + 1) % Q.length], ee[ie])),
                                  oe = m.magnitudeSquared(m.sub(Q[V], ee[(ie + 1) % ee.length]));
                                ue < F &&
                                  oe < F &&
                                  ((Q[V].isInternal = !0), (ee[ie].isInternal = !0));
                              }
                          }
                        }
                      }
                    }
                    return O.length > 1
                      ? ((C = f.create(d.extend({ parts: O.slice(0) }, x))),
                        f.setPosition(C, { x: v, y }),
                        C)
                      : O[0];
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(0),
                d = c(8);
              (function () {
                ((l.create = function (f) {
                  var g = { bodies: [], collisions: [], pairs: null };
                  return o.extend(g, f);
                }),
                  (l.setBodies = function (f, g) {
                    f.bodies = g.slice(0);
                  }),
                  (l.clear = function (f) {
                    ((f.bodies = []), (f.collisions = []));
                  }),
                  (l.collisions = function (f) {
                    var g = f.pairs,
                      m = f.bodies,
                      v = m.length,
                      y = l.canCollide,
                      r = d.collides,
                      x = f.collisions,
                      p = 0,
                      T,
                      _;
                    for (m.sort(l._compareBoundsX), T = 0; T < v; T++) {
                      var U = m[T],
                        B = U.bounds,
                        G = U.bounds.max.x,
                        C = U.bounds.max.y,
                        O = U.bounds.min.y,
                        D = U.isStatic || U.isSleeping,
                        A = U.parts.length,
                        j = A === 1;
                      for (_ = T + 1; _ < v; _++) {
                        var L = m[_],
                          H = L.bounds;
                        if (H.min.x > G) break;
                        if (
                          !(C < H.min.y || O > H.max.y) &&
                          !(D && (L.isStatic || L.isSleeping)) &&
                          y(U.collisionFilter, L.collisionFilter)
                        ) {
                          var V = L.parts.length;
                          if (j && V === 1) {
                            var P = r(U, L, g);
                            P && (x[p++] = P);
                          } else
                            for (var ie = A > 1 ? 1 : 0, W = V > 1 ? 1 : 0, M = ie; M < A; M++)
                              for (var z = U.parts[M], B = z.bounds, q = W; q < V; q++) {
                                var F = L.parts[q],
                                  H = F.bounds;
                                if (
                                  !(
                                    B.min.x > H.max.x ||
                                    B.max.x < H.min.x ||
                                    B.max.y < H.min.y ||
                                    B.min.y > H.max.y
                                  )
                                ) {
                                  var P = r(z, F, g);
                                  P && (x[p++] = P);
                                }
                              }
                        }
                      }
                    }
                    return (x.length !== p && (x.length = p), x);
                  }),
                  (l.canCollide = function (f, g) {
                    return f.group === g.group && f.group !== 0
                      ? f.group > 0
                      : (f.mask & g.category) !== 0 && (g.mask & f.category) !== 0;
                  }),
                  (l._compareBoundsX = function (f, g) {
                    return f.bounds.min.x - g.bounds.min.x;
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(0);
              (function () {
                ((l.create = function (d) {
                  var f = {};
                  return (
                    d ||
                      o.log(
                        'Mouse.create: element was undefined, defaulting to document.body',
                        'warn'
                      ),
                    (f.element = d || document.body),
                    (f.absolute = { x: 0, y: 0 }),
                    (f.position = { x: 0, y: 0 }),
                    (f.mousedownPosition = { x: 0, y: 0 }),
                    (f.mouseupPosition = { x: 0, y: 0 }),
                    (f.offset = { x: 0, y: 0 }),
                    (f.scale = { x: 1, y: 1 }),
                    (f.wheelDelta = 0),
                    (f.button = -1),
                    (f.pixelRatio = parseInt(f.element.getAttribute('data-pixel-ratio'), 10) || 1),
                    (f.sourceEvents = {
                      mousemove: null,
                      mousedown: null,
                      mouseup: null,
                      mousewheel: null,
                    }),
                    (f.mousemove = function (g) {
                      var m = l._getRelativeMousePosition(g, f.element, f.pixelRatio),
                        v = g.changedTouches;
                      (v && ((f.button = 0), g.preventDefault()),
                        (f.absolute.x = m.x),
                        (f.absolute.y = m.y),
                        (f.position.x = f.absolute.x * f.scale.x + f.offset.x),
                        (f.position.y = f.absolute.y * f.scale.y + f.offset.y),
                        (f.sourceEvents.mousemove = g));
                    }),
                    (f.mousedown = function (g) {
                      var m = l._getRelativeMousePosition(g, f.element, f.pixelRatio),
                        v = g.changedTouches;
                      (v ? ((f.button = 0), g.preventDefault()) : (f.button = g.button),
                        (f.absolute.x = m.x),
                        (f.absolute.y = m.y),
                        (f.position.x = f.absolute.x * f.scale.x + f.offset.x),
                        (f.position.y = f.absolute.y * f.scale.y + f.offset.y),
                        (f.mousedownPosition.x = f.position.x),
                        (f.mousedownPosition.y = f.position.y),
                        (f.sourceEvents.mousedown = g));
                    }),
                    (f.mouseup = function (g) {
                      var m = l._getRelativeMousePosition(g, f.element, f.pixelRatio),
                        v = g.changedTouches;
                      (v && g.preventDefault(),
                        (f.button = -1),
                        (f.absolute.x = m.x),
                        (f.absolute.y = m.y),
                        (f.position.x = f.absolute.x * f.scale.x + f.offset.x),
                        (f.position.y = f.absolute.y * f.scale.y + f.offset.y),
                        (f.mouseupPosition.x = f.position.x),
                        (f.mouseupPosition.y = f.position.y),
                        (f.sourceEvents.mouseup = g));
                    }),
                    (f.mousewheel = function (g) {
                      ((f.wheelDelta = Math.max(-1, Math.min(1, g.wheelDelta || -g.detail))),
                        g.preventDefault(),
                        (f.sourceEvents.mousewheel = g));
                    }),
                    l.setElement(f, f.element),
                    f
                  );
                }),
                  (l.setElement = function (d, f) {
                    ((d.element = f),
                      f.addEventListener('mousemove', d.mousemove, { passive: !0 }),
                      f.addEventListener('mousedown', d.mousedown, { passive: !0 }),
                      f.addEventListener('mouseup', d.mouseup, { passive: !0 }),
                      f.addEventListener('wheel', d.mousewheel, { passive: !1 }),
                      f.addEventListener('touchmove', d.mousemove, { passive: !1 }),
                      f.addEventListener('touchstart', d.mousedown, { passive: !1 }),
                      f.addEventListener('touchend', d.mouseup, { passive: !1 }));
                  }),
                  (l.clearSourceEvents = function (d) {
                    ((d.sourceEvents.mousemove = null),
                      (d.sourceEvents.mousedown = null),
                      (d.sourceEvents.mouseup = null),
                      (d.sourceEvents.mousewheel = null),
                      (d.wheelDelta = 0));
                  }),
                  (l.setOffset = function (d, f) {
                    ((d.offset.x = f.x),
                      (d.offset.y = f.y),
                      (d.position.x = d.absolute.x * d.scale.x + d.offset.x),
                      (d.position.y = d.absolute.y * d.scale.y + d.offset.y));
                  }),
                  (l.setScale = function (d, f) {
                    ((d.scale.x = f.x),
                      (d.scale.y = f.y),
                      (d.position.x = d.absolute.x * d.scale.x + d.offset.x),
                      (d.position.y = d.absolute.y * d.scale.y + d.offset.y));
                  }),
                  (l._getRelativeMousePosition = function (d, f, g) {
                    var m = f.getBoundingClientRect(),
                      v = document.documentElement || document.body.parentNode || document.body,
                      y = window.pageXOffset !== void 0 ? window.pageXOffset : v.scrollLeft,
                      r = window.pageYOffset !== void 0 ? window.pageYOffset : v.scrollTop,
                      x = d.changedTouches,
                      p,
                      T;
                    return (
                      x
                        ? ((p = x[0].pageX - m.left - y), (T = x[0].pageY - m.top - r))
                        : ((p = d.pageX - m.left - y), (T = d.pageY - m.top - r)),
                      {
                        x: p / ((f.clientWidth / (f.width || f.clientWidth)) * g),
                        y: T / ((f.clientHeight / (f.height || f.clientHeight)) * g),
                      }
                    );
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(0);
              (function () {
                ((l._registry = {}),
                  (l.register = function (d) {
                    if (
                      (l.isPlugin(d) ||
                        o.warn(
                          'Plugin.register:',
                          l.toString(d),
                          'does not implement all required fields.'
                        ),
                      d.name in l._registry)
                    ) {
                      var f = l._registry[d.name],
                        g = l.versionParse(d.version).number,
                        m = l.versionParse(f.version).number;
                      g > m
                        ? (o.warn(
                            'Plugin.register:',
                            l.toString(f),
                            'was upgraded to',
                            l.toString(d)
                          ),
                          (l._registry[d.name] = d))
                        : g < m
                          ? o.warn(
                              'Plugin.register:',
                              l.toString(f),
                              'can not be downgraded to',
                              l.toString(d)
                            )
                          : d !== f &&
                            o.warn(
                              'Plugin.register:',
                              l.toString(d),
                              'is already registered to different plugin object'
                            );
                    } else l._registry[d.name] = d;
                    return d;
                  }),
                  (l.resolve = function (d) {
                    return l._registry[l.dependencyParse(d).name];
                  }),
                  (l.toString = function (d) {
                    return typeof d == 'string'
                      ? d
                      : (d.name || 'anonymous') + '@' + (d.version || d.range || '0.0.0');
                  }),
                  (l.isPlugin = function (d) {
                    return d && d.name && d.version && d.install;
                  }),
                  (l.isUsed = function (d, f) {
                    return d.used.indexOf(f) > -1;
                  }),
                  (l.isFor = function (d, f) {
                    var g = d.for && l.dependencyParse(d.for);
                    return !d.for || (f.name === g.name && l.versionSatisfies(f.version, g.range));
                  }),
                  (l.use = function (d, f) {
                    if (((d.uses = (d.uses || []).concat(f || [])), d.uses.length === 0)) {
                      o.warn(
                        'Plugin.use:',
                        l.toString(d),
                        'does not specify any dependencies to install.'
                      );
                      return;
                    }
                    for (
                      var g = l.dependencies(d), m = o.topologicalSort(g), v = [], y = 0;
                      y < m.length;
                      y += 1
                    )
                      if (m[y] !== d.name) {
                        var r = l.resolve(m[y]);
                        if (!r) {
                          v.push('❌ ' + m[y]);
                          continue;
                        }
                        l.isUsed(d, r.name) ||
                          (l.isFor(r, d) ||
                            (o.warn(
                              'Plugin.use:',
                              l.toString(r),
                              'is for',
                              r.for,
                              'but installed on',
                              l.toString(d) + '.'
                            ),
                            (r._warned = !0)),
                          r.install
                            ? r.install(d)
                            : (o.warn(
                                'Plugin.use:',
                                l.toString(r),
                                'does not specify an install function.'
                              ),
                              (r._warned = !0)),
                          r._warned
                            ? (v.push('🔶 ' + l.toString(r)), delete r._warned)
                            : v.push('✅ ' + l.toString(r)),
                          d.used.push(r.name));
                      }
                    v.length > 0 && o.info(v.join('  '));
                  }),
                  (l.dependencies = function (d, f) {
                    var g = l.dependencyParse(d),
                      m = g.name;
                    if (((f = f || {}), !(m in f))) {
                      ((d = l.resolve(d) || d),
                        (f[m] = o.map(d.uses || [], function (y) {
                          l.isPlugin(y) && l.register(y);
                          var r = l.dependencyParse(y),
                            x = l.resolve(y);
                          return (
                            x && !l.versionSatisfies(x.version, r.range)
                              ? (o.warn(
                                  'Plugin.dependencies:',
                                  l.toString(x),
                                  'does not satisfy',
                                  l.toString(r),
                                  'used by',
                                  l.toString(g) + '.'
                                ),
                                (x._warned = !0),
                                (d._warned = !0))
                              : x ||
                                (o.warn(
                                  'Plugin.dependencies:',
                                  l.toString(y),
                                  'used by',
                                  l.toString(g),
                                  'could not be resolved.'
                                ),
                                (d._warned = !0)),
                            r.name
                          );
                        })));
                      for (var v = 0; v < f[m].length; v += 1) l.dependencies(f[m][v], f);
                      return f;
                    }
                  }),
                  (l.dependencyParse = function (d) {
                    if (o.isString(d)) {
                      var f = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                      return (
                        f.test(d) ||
                          o.warn('Plugin.dependencyParse:', d, 'is not a valid dependency string.'),
                        { name: d.split('@')[0], range: d.split('@')[1] || '*' }
                      );
                    }
                    return { name: d.name, range: d.range || d.version };
                  }),
                  (l.versionParse = function (d) {
                    var f = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                    f.test(d) ||
                      o.warn('Plugin.versionParse:', d, 'is not a valid version or range.');
                    var g = f.exec(d),
                      m = Number(g[4]),
                      v = Number(g[5]),
                      y = Number(g[6]);
                    return {
                      isRange: !!(g[1] || g[2]),
                      version: g[3],
                      range: d,
                      operator: g[1] || g[2] || '',
                      major: m,
                      minor: v,
                      patch: y,
                      parts: [m, v, y],
                      prerelease: g[7],
                      number: m * 1e8 + v * 1e4 + y,
                    };
                  }),
                  (l.versionSatisfies = function (d, f) {
                    f = f || '*';
                    var g = l.versionParse(f),
                      m = l.versionParse(d);
                    if (g.isRange) {
                      if (g.operator === '*' || d === '*') return !0;
                      if (g.operator === '>') return m.number > g.number;
                      if (g.operator === '>=') return m.number >= g.number;
                      if (g.operator === '~')
                        return m.major === g.major && m.minor === g.minor && m.patch >= g.patch;
                      if (g.operator === '^')
                        return g.major > 0
                          ? m.major === g.major && m.number >= g.number
                          : g.minor > 0
                            ? m.minor === g.minor && m.patch >= g.patch
                            : m.patch === g.patch;
                    }
                    return d === f || d === '*';
                  }));
              })();
            },
            function (S, h) {
              var c = {};
              ((S.exports = c),
                (function () {
                  c.create = function (l) {
                    return { vertex: l, normalImpulse: 0, tangentImpulse: 0 };
                  };
                })());
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(7),
                d = c(18),
                f = c(13),
                g = c(19),
                m = c(5),
                v = c(6),
                y = c(10),
                r = c(0),
                x = c(4);
              (function () {
                ((l._deltaMax = 1e3 / 60),
                  (l.create = function (p) {
                    p = p || {};
                    var T = {
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
                      _ = r.extend(T, p);
                    return (
                      (_.world = p.world || v.create({ label: 'World' })),
                      (_.pairs = p.pairs || g.create()),
                      (_.detector = p.detector || f.create()),
                      (_.detector.pairs = _.pairs),
                      (_.grid = { buckets: [] }),
                      (_.world.gravity = _.gravity),
                      (_.broadphase = _.grid),
                      (_.metrics = {}),
                      _
                    );
                  }),
                  (l.update = function (p, T) {
                    var _ = r.now(),
                      U = p.world,
                      B = p.detector,
                      G = p.pairs,
                      C = p.timing,
                      O = C.timestamp,
                      D;
                    (T > l._deltaMax &&
                      r.warnOnce(
                        'Matter.Engine.update: delta argument is recommended to be less than or equal to',
                        l._deltaMax.toFixed(3),
                        'ms.'
                      ),
                      (T = typeof T < 'u' ? T : r._baseDelta),
                      (T *= C.timeScale),
                      (C.timestamp += T),
                      (C.lastDelta = T));
                    var A = { timestamp: C.timestamp, delta: T };
                    m.trigger(p, 'beforeUpdate', A);
                    var j = v.allBodies(U),
                      L = v.allConstraints(U);
                    for (
                      U.isModified && (f.setBodies(B, j), v.setModified(U, !1, !1, !0)),
                        p.enableSleeping && o.update(j, T),
                        l._bodiesApplyGravity(j, p.gravity),
                        T > 0 && l._bodiesUpdate(j, T),
                        m.trigger(p, 'beforeSolve', A),
                        y.preSolveAll(j),
                        D = 0;
                      D < p.constraintIterations;
                      D++
                    )
                      y.solveAll(L, T);
                    y.postSolveAll(j);
                    var H = f.collisions(B);
                    (g.update(G, H, O),
                      p.enableSleeping && o.afterCollisions(G.list),
                      G.collisionStart.length > 0 &&
                        m.trigger(p, 'collisionStart', {
                          pairs: G.collisionStart,
                          timestamp: C.timestamp,
                          delta: T,
                        }));
                    var V = r.clamp(20 / p.positionIterations, 0, 1);
                    for (d.preSolvePosition(G.list), D = 0; D < p.positionIterations; D++)
                      d.solvePosition(G.list, T, V);
                    for (
                      d.postSolvePosition(j), y.preSolveAll(j), D = 0;
                      D < p.constraintIterations;
                      D++
                    )
                      y.solveAll(L, T);
                    for (
                      y.postSolveAll(j), d.preSolveVelocity(G.list), D = 0;
                      D < p.velocityIterations;
                      D++
                    )
                      d.solveVelocity(G.list, T);
                    return (
                      l._bodiesUpdateVelocities(j),
                      G.collisionActive.length > 0 &&
                        m.trigger(p, 'collisionActive', {
                          pairs: G.collisionActive,
                          timestamp: C.timestamp,
                          delta: T,
                        }),
                      G.collisionEnd.length > 0 &&
                        m.trigger(p, 'collisionEnd', {
                          pairs: G.collisionEnd,
                          timestamp: C.timestamp,
                          delta: T,
                        }),
                      l._bodiesClearForces(j),
                      m.trigger(p, 'afterUpdate', A),
                      (p.timing.lastElapsed = r.now() - _),
                      p
                    );
                  }),
                  (l.merge = function (p, T) {
                    if ((r.extend(p, T), T.world)) {
                      ((p.world = T.world), l.clear(p));
                      for (var _ = v.allBodies(p.world), U = 0; U < _.length; U++) {
                        var B = _[U];
                        (o.set(B, !1), (B.id = r.nextId()));
                      }
                    }
                  }),
                  (l.clear = function (p) {
                    (g.clear(p.pairs), f.clear(p.detector));
                  }),
                  (l._bodiesClearForces = function (p) {
                    for (var T = p.length, _ = 0; _ < T; _++) {
                      var U = p[_];
                      ((U.force.x = 0), (U.force.y = 0), (U.torque = 0));
                    }
                  }),
                  (l._bodiesApplyGravity = function (p, T) {
                    var _ = typeof T.scale < 'u' ? T.scale : 0.001,
                      U = p.length;
                    if (!((T.x === 0 && T.y === 0) || _ === 0))
                      for (var B = 0; B < U; B++) {
                        var G = p[B];
                        G.isStatic ||
                          G.isSleeping ||
                          ((G.force.y += G.mass * T.y * _), (G.force.x += G.mass * T.x * _));
                      }
                  }),
                  (l._bodiesUpdate = function (p, T) {
                    for (var _ = p.length, U = 0; U < _; U++) {
                      var B = p[U];
                      B.isStatic || B.isSleeping || x.update(B, T);
                    }
                  }),
                  (l._bodiesUpdateVelocities = function (p) {
                    for (var T = p.length, _ = 0; _ < T; _++) x.updateVelocities(p[_]);
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(3),
                d = c(0),
                f = c(1);
              (function () {
                ((l._restingThresh = 2),
                  (l._restingThreshTangent = Math.sqrt(6)),
                  (l._positionDampen = 0.9),
                  (l._positionWarming = 0.8),
                  (l._frictionNormalMultiplier = 5),
                  (l._frictionMaxStatic = Number.MAX_VALUE),
                  (l.preSolvePosition = function (g) {
                    var m,
                      v,
                      y,
                      r = g.length;
                    for (m = 0; m < r; m++)
                      ((v = g[m]),
                        v.isActive &&
                          ((y = v.contactCount),
                          (v.collision.parentA.totalContacts += y),
                          (v.collision.parentB.totalContacts += y)));
                  }),
                  (l.solvePosition = function (g, m, v) {
                    var y,
                      r,
                      x,
                      p,
                      T,
                      _,
                      U,
                      B,
                      G = l._positionDampen * (v || 1),
                      C = d.clamp(m / d._baseDelta, 0, 1),
                      O = g.length;
                    for (y = 0; y < O; y++)
                      ((r = g[y]),
                        !(!r.isActive || r.isSensor) &&
                          ((x = r.collision),
                          (p = x.parentA),
                          (T = x.parentB),
                          (_ = x.normal),
                          (r.separation =
                            x.depth +
                            _.x * (T.positionImpulse.x - p.positionImpulse.x) +
                            _.y * (T.positionImpulse.y - p.positionImpulse.y))));
                    for (y = 0; y < O; y++)
                      ((r = g[y]),
                        !(!r.isActive || r.isSensor) &&
                          ((x = r.collision),
                          (p = x.parentA),
                          (T = x.parentB),
                          (_ = x.normal),
                          (B = r.separation - r.slop * C),
                          (p.isStatic || T.isStatic) && (B *= 2),
                          p.isStatic ||
                            p.isSleeping ||
                            ((U = G / p.totalContacts),
                            (p.positionImpulse.x += _.x * B * U),
                            (p.positionImpulse.y += _.y * B * U)),
                          T.isStatic ||
                            T.isSleeping ||
                            ((U = G / T.totalContacts),
                            (T.positionImpulse.x -= _.x * B * U),
                            (T.positionImpulse.y -= _.y * B * U))));
                  }),
                  (l.postSolvePosition = function (g) {
                    for (
                      var m = l._positionWarming,
                        v = g.length,
                        y = o.translate,
                        r = f.update,
                        x = 0;
                      x < v;
                      x++
                    ) {
                      var p = g[x],
                        T = p.positionImpulse,
                        _ = T.x,
                        U = T.y,
                        B = p.velocity;
                      if (((p.totalContacts = 0), _ !== 0 || U !== 0)) {
                        for (var G = 0; G < p.parts.length; G++) {
                          var C = p.parts[G];
                          (y(C.vertices, T),
                            r(C.bounds, C.vertices, B),
                            (C.position.x += _),
                            (C.position.y += U));
                        }
                        ((p.positionPrev.x += _),
                          (p.positionPrev.y += U),
                          _ * B.x + U * B.y < 0
                            ? ((T.x = 0), (T.y = 0))
                            : ((T.x *= m), (T.y *= m)));
                      }
                    }
                  }),
                  (l.preSolveVelocity = function (g) {
                    var m = g.length,
                      v,
                      y;
                    for (v = 0; v < m; v++) {
                      var r = g[v];
                      if (!(!r.isActive || r.isSensor)) {
                        var x = r.contacts,
                          p = r.contactCount,
                          T = r.collision,
                          _ = T.parentA,
                          U = T.parentB,
                          B = T.normal,
                          G = T.tangent;
                        for (y = 0; y < p; y++) {
                          var C = x[y],
                            O = C.vertex,
                            D = C.normalImpulse,
                            A = C.tangentImpulse;
                          if (D !== 0 || A !== 0) {
                            var j = B.x * D + G.x * A,
                              L = B.y * D + G.y * A;
                            (_.isStatic ||
                              _.isSleeping ||
                              ((_.positionPrev.x += j * _.inverseMass),
                              (_.positionPrev.y += L * _.inverseMass),
                              (_.anglePrev +=
                                _.inverseInertia *
                                ((O.x - _.position.x) * L - (O.y - _.position.y) * j))),
                              U.isStatic ||
                                U.isSleeping ||
                                ((U.positionPrev.x -= j * U.inverseMass),
                                (U.positionPrev.y -= L * U.inverseMass),
                                (U.anglePrev -=
                                  U.inverseInertia *
                                  ((O.x - U.position.x) * L - (O.y - U.position.y) * j))));
                          }
                        }
                      }
                    }
                  }),
                  (l.solveVelocity = function (g, m) {
                    var v = m / d._baseDelta,
                      y = v * v,
                      r = y * v,
                      x = -l._restingThresh * v,
                      p = l._restingThreshTangent,
                      T = l._frictionNormalMultiplier * v,
                      _ = l._frictionMaxStatic,
                      U = g.length,
                      B,
                      G,
                      C,
                      O;
                    for (C = 0; C < U; C++) {
                      var D = g[C];
                      if (!(!D.isActive || D.isSensor)) {
                        var A = D.collision,
                          j = A.parentA,
                          L = A.parentB,
                          H = A.normal.x,
                          V = A.normal.y,
                          P = A.tangent.x,
                          ie = A.tangent.y,
                          W = D.inverseMass,
                          M = D.friction * D.frictionStatic * T,
                          z = D.contacts,
                          q = D.contactCount,
                          F = 1 / q,
                          le = j.position.x - j.positionPrev.x,
                          N = j.position.y - j.positionPrev.y,
                          Q = j.angle - j.anglePrev,
                          ee = L.position.x - L.positionPrev.x,
                          ue = L.position.y - L.positionPrev.y,
                          oe = L.angle - L.anglePrev;
                        for (O = 0; O < q; O++) {
                          var se = z[O],
                            ge = se.vertex,
                            Se = ge.x - j.position.x,
                            Ue = ge.y - j.position.y,
                            Ze = ge.x - L.position.x,
                            Ke = ge.y - L.position.y,
                            Ve = le - Ue * Q,
                            bt = N + Se * Q,
                            We = ee - Ke * oe,
                            fe = ue + Ze * oe,
                            zt = Ve - We,
                            he = bt - fe,
                            Be = H * zt + V * he,
                            gt = P * zt + ie * he,
                            Sn = D.separation + Be,
                            tn = Math.min(Sn, 1);
                          tn = Sn < 0 ? 0 : tn;
                          var aa = tn * M;
                          gt < -aa || gt > aa
                            ? ((G = gt > 0 ? gt : -gt),
                              (B = D.friction * (gt > 0 ? 1 : -1) * r),
                              B < -G ? (B = -G) : B > G && (B = G))
                            : ((B = gt), (G = _));
                          var An = Se * V - Ue * H,
                            yt = Ze * V - Ke * H,
                            la = F / (W + j.inverseInertia * An * An + L.inverseInertia * yt * yt),
                            Tt = (1 + D.restitution) * Be * la;
                          if (((B *= la), Be < x)) se.normalImpulse = 0;
                          else {
                            var Pa = se.normalImpulse;
                            ((se.normalImpulse += Tt),
                              se.normalImpulse > 0 && (se.normalImpulse = 0),
                              (Tt = se.normalImpulse - Pa));
                          }
                          if (gt < -p || gt > p) se.tangentImpulse = 0;
                          else {
                            var Kt = se.tangentImpulse;
                            ((se.tangentImpulse += B),
                              se.tangentImpulse < -G && (se.tangentImpulse = -G),
                              se.tangentImpulse > G && (se.tangentImpulse = G),
                              (B = se.tangentImpulse - Kt));
                          }
                          var Ot = H * Tt + P * B,
                            ke = V * Tt + ie * B;
                          (j.isStatic ||
                            j.isSleeping ||
                            ((j.positionPrev.x += Ot * j.inverseMass),
                            (j.positionPrev.y += ke * j.inverseMass),
                            (j.anglePrev += (Se * ke - Ue * Ot) * j.inverseInertia)),
                            L.isStatic ||
                              L.isSleeping ||
                              ((L.positionPrev.x -= Ot * L.inverseMass),
                              (L.positionPrev.y -= ke * L.inverseMass),
                              (L.anglePrev -= (Ze * ke - Ke * Ot) * L.inverseInertia)));
                        }
                      }
                    }
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(9),
                d = c(0);
              (function () {
                ((l.create = function (f) {
                  return d.extend(
                    {
                      table: {},
                      list: [],
                      collisionStart: [],
                      collisionActive: [],
                      collisionEnd: [],
                    },
                    f
                  );
                }),
                  (l.update = function (f, g, m) {
                    var v = o.update,
                      y = o.create,
                      r = o.setActive,
                      x = f.table,
                      p = f.list,
                      T = p.length,
                      _ = T,
                      U = f.collisionStart,
                      B = f.collisionEnd,
                      G = f.collisionActive,
                      C = g.length,
                      O = 0,
                      D = 0,
                      A = 0,
                      j,
                      L,
                      H;
                    for (H = 0; H < C; H++)
                      ((j = g[H]),
                        (L = j.pair),
                        L
                          ? (L.isActive && (G[A++] = L), v(L, j, m))
                          : ((L = y(j, m)), (x[L.id] = L), (U[O++] = L), (p[_++] = L)));
                    for (_ = 0, T = p.length, H = 0; H < T; H++)
                      ((L = p[H]),
                        L.timeUpdated >= m
                          ? (p[_++] = L)
                          : (r(L, !1, m),
                            L.collision.bodyA.sleepCounter > 0 && L.collision.bodyB.sleepCounter > 0
                              ? (p[_++] = L)
                              : ((B[D++] = L), delete x[L.id])));
                    (p.length !== _ && (p.length = _),
                      U.length !== O && (U.length = O),
                      B.length !== D && (B.length = D),
                      G.length !== A && (G.length = A));
                  }),
                  (l.clear = function (f) {
                    return (
                      (f.table = {}),
                      (f.list.length = 0),
                      (f.collisionStart.length = 0),
                      (f.collisionActive.length = 0),
                      (f.collisionEnd.length = 0),
                      f
                    );
                  }));
              })();
            },
            function (S, h, c) {
              var l = (S.exports = c(21));
              ((l.Axes = c(11)),
                (l.Bodies = c(12)),
                (l.Body = c(4)),
                (l.Bounds = c(1)),
                (l.Collision = c(8)),
                (l.Common = c(0)),
                (l.Composite = c(6)),
                (l.Composites = c(22)),
                (l.Constraint = c(10)),
                (l.Contact = c(16)),
                (l.Detector = c(13)),
                (l.Engine = c(17)),
                (l.Events = c(5)),
                (l.Grid = c(23)),
                (l.Mouse = c(14)),
                (l.MouseConstraint = c(24)),
                (l.Pair = c(9)),
                (l.Pairs = c(19)),
                (l.Plugin = c(15)),
                (l.Query = c(25)),
                (l.Render = c(26)),
                (l.Resolver = c(18)),
                (l.Runner = c(27)),
                (l.SAT = c(28)),
                (l.Sleeping = c(7)),
                (l.Svg = c(29)),
                (l.Vector = c(2)),
                (l.Vertices = c(3)),
                (l.World = c(30)),
                (l.Engine.run = l.Runner.run),
                l.Common.deprecated(
                  l.Engine,
                  'run',
                  'Engine.run ➤ use Matter.Runner.run(engine) instead'
                ));
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(15),
                d = c(0);
              (function () {
                ((l.name = 'matter-js'),
                  (l.version = '0.20.0'),
                  (l.uses = []),
                  (l.used = []),
                  (l.use = function () {
                    o.use(l, Array.prototype.slice.call(arguments));
                  }),
                  (l.before = function (f, g) {
                    return ((f = f.replace(/^Matter./, '')), d.chainPathBefore(l, f, g));
                  }),
                  (l.after = function (f, g) {
                    return ((f = f.replace(/^Matter./, '')), d.chainPathAfter(l, f, g));
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(6),
                d = c(10),
                f = c(0),
                g = c(4),
                m = c(12),
                v = f.deprecated;
              (function () {
                ((l.stack = function (y, r, x, p, T, _, U) {
                  for (
                    var B = o.create({ label: 'Stack' }), G = y, C = r, O, D = 0, A = 0;
                    A < p;
                    A++
                  ) {
                    for (var j = 0, L = 0; L < x; L++) {
                      var H = U(G, C, L, A, O, D);
                      if (H) {
                        var V = H.bounds.max.y - H.bounds.min.y,
                          P = H.bounds.max.x - H.bounds.min.x;
                        (V > j && (j = V),
                          g.translate(H, { x: P * 0.5, y: V * 0.5 }),
                          (G = H.bounds.max.x + T),
                          o.addBody(B, H),
                          (O = H),
                          (D += 1));
                      } else G += T;
                    }
                    ((C += j + _), (G = y));
                  }
                  return B;
                }),
                  (l.chain = function (y, r, x, p, T, _) {
                    for (var U = y.bodies, B = 1; B < U.length; B++) {
                      var G = U[B - 1],
                        C = U[B],
                        O = G.bounds.max.y - G.bounds.min.y,
                        D = G.bounds.max.x - G.bounds.min.x,
                        A = C.bounds.max.y - C.bounds.min.y,
                        j = C.bounds.max.x - C.bounds.min.x,
                        L = {
                          bodyA: G,
                          pointA: { x: D * r, y: O * x },
                          bodyB: C,
                          pointB: { x: j * p, y: A * T },
                        },
                        H = f.extend(L, _);
                      o.addConstraint(y, d.create(H));
                    }
                    return ((y.label += ' Chain'), y);
                  }),
                  (l.mesh = function (y, r, x, p, T) {
                    var _ = y.bodies,
                      U,
                      B,
                      G,
                      C,
                      O;
                    for (U = 0; U < x; U++) {
                      for (B = 1; B < r; B++)
                        ((G = _[B - 1 + U * r]),
                          (C = _[B + U * r]),
                          o.addConstraint(y, d.create(f.extend({ bodyA: G, bodyB: C }, T))));
                      if (U > 0)
                        for (B = 0; B < r; B++)
                          ((G = _[B + (U - 1) * r]),
                            (C = _[B + U * r]),
                            o.addConstraint(y, d.create(f.extend({ bodyA: G, bodyB: C }, T))),
                            p &&
                              B > 0 &&
                              ((O = _[B - 1 + (U - 1) * r]),
                              o.addConstraint(y, d.create(f.extend({ bodyA: O, bodyB: C }, T)))),
                            p &&
                              B < r - 1 &&
                              ((O = _[B + 1 + (U - 1) * r]),
                              o.addConstraint(y, d.create(f.extend({ bodyA: O, bodyB: C }, T)))));
                    }
                    return ((y.label += ' Mesh'), y);
                  }),
                  (l.pyramid = function (y, r, x, p, T, _, U) {
                    return l.stack(y, r, x, p, T, _, function (B, G, C, O, D, A) {
                      var j = Math.min(p, Math.ceil(x / 2)),
                        L = D ? D.bounds.max.x - D.bounds.min.x : 0;
                      if (!(O > j)) {
                        O = j - O;
                        var H = O,
                          V = x - 1 - O;
                        if (!(C < H || C > V)) {
                          A === 1 && g.translate(D, { x: (C + (x % 2 === 1 ? 1 : -1)) * L, y: 0 });
                          var P = D ? C * L : 0;
                          return U(y + P + C * T, G, C, O, D, A);
                        }
                      }
                    });
                  }),
                  (l.newtonsCradle = function (y, r, x, p, T) {
                    for (var _ = o.create({ label: 'Newtons Cradle' }), U = 0; U < x; U++) {
                      var B = 1.9,
                        G = m.circle(y + U * (p * B), r + T, p, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        C = d.create({ pointA: { x: y + U * (p * B), y: r }, bodyB: G });
                      (o.addBody(_, G), o.addConstraint(_, C));
                    }
                    return _;
                  }),
                  v(
                    l,
                    'newtonsCradle',
                    'Composites.newtonsCradle ➤ moved to newtonsCradle example'
                  ),
                  (l.car = function (y, r, x, p, T) {
                    var _ = g.nextGroup(!0),
                      U = 20,
                      B = -x * 0.5 + U,
                      G = x * 0.5 - U,
                      C = 0,
                      O = o.create({ label: 'Car' }),
                      D = m.rectangle(y, r, x, p, {
                        collisionFilter: { group: _ },
                        chamfer: { radius: p * 0.5 },
                        density: 2e-4,
                      }),
                      A = m.circle(y + B, r + C, T, {
                        collisionFilter: { group: _ },
                        friction: 0.8,
                      }),
                      j = m.circle(y + G, r + C, T, {
                        collisionFilter: { group: _ },
                        friction: 0.8,
                      }),
                      L = d.create({
                        bodyB: D,
                        pointB: { x: B, y: C },
                        bodyA: A,
                        stiffness: 1,
                        length: 0,
                      }),
                      H = d.create({
                        bodyB: D,
                        pointB: { x: G, y: C },
                        bodyA: j,
                        stiffness: 1,
                        length: 0,
                      });
                    return (
                      o.addBody(O, D),
                      o.addBody(O, A),
                      o.addBody(O, j),
                      o.addConstraint(O, L),
                      o.addConstraint(O, H),
                      O
                    );
                  }),
                  v(l, 'car', 'Composites.car ➤ moved to car example'),
                  (l.softBody = function (y, r, x, p, T, _, U, B, G, C) {
                    ((G = f.extend({ inertia: 1 / 0 }, G)),
                      (C = f.extend({ stiffness: 0.2, render: { type: 'line', anchors: !1 } }, C)));
                    var O = l.stack(y, r, x, p, T, _, function (D, A) {
                      return m.circle(D, A, B, G);
                    });
                    return (l.mesh(O, x, p, U, C), (O.label = 'Soft Body'), O);
                  }),
                  v(l, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples'));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(9),
                d = c(0),
                f = d.deprecated;
              (function () {
                ((l.create = function (g) {
                  var m = {
                    buckets: {},
                    pairs: {},
                    pairsList: [],
                    bucketWidth: 48,
                    bucketHeight: 48,
                  };
                  return d.extend(m, g);
                }),
                  (l.update = function (g, m, v, y) {
                    var r,
                      x,
                      p,
                      T = v.world,
                      _ = g.buckets,
                      U,
                      B,
                      G = !1;
                    for (r = 0; r < m.length; r++) {
                      var C = m[r];
                      if (
                        !(C.isSleeping && !y) &&
                        !(
                          T.bounds &&
                          (C.bounds.max.x < T.bounds.min.x ||
                            C.bounds.min.x > T.bounds.max.x ||
                            C.bounds.max.y < T.bounds.min.y ||
                            C.bounds.min.y > T.bounds.max.y)
                        )
                      ) {
                        var O = l._getRegion(g, C);
                        if (!C.region || O.id !== C.region.id || y) {
                          (!C.region || y) && (C.region = O);
                          var D = l._regionUnion(O, C.region);
                          for (x = D.startCol; x <= D.endCol; x++)
                            for (p = D.startRow; p <= D.endRow; p++) {
                              ((B = l._getBucketId(x, p)), (U = _[B]));
                              var A =
                                  x >= O.startCol &&
                                  x <= O.endCol &&
                                  p >= O.startRow &&
                                  p <= O.endRow,
                                j =
                                  x >= C.region.startCol &&
                                  x <= C.region.endCol &&
                                  p >= C.region.startRow &&
                                  p <= C.region.endRow;
                              (!A && j && j && U && l._bucketRemoveBody(g, U, C),
                                (C.region === O || (A && !j) || y) &&
                                  (U || (U = l._createBucket(_, B)), l._bucketAddBody(g, U, C)));
                            }
                          ((C.region = O), (G = !0));
                        }
                      }
                    }
                    G && (g.pairsList = l._createActivePairsList(g));
                  }),
                  f(l, 'update', 'Grid.update ➤ replaced by Matter.Detector'),
                  (l.clear = function (g) {
                    ((g.buckets = {}), (g.pairs = {}), (g.pairsList = []));
                  }),
                  f(l, 'clear', 'Grid.clear ➤ replaced by Matter.Detector'),
                  (l._regionUnion = function (g, m) {
                    var v = Math.min(g.startCol, m.startCol),
                      y = Math.max(g.endCol, m.endCol),
                      r = Math.min(g.startRow, m.startRow),
                      x = Math.max(g.endRow, m.endRow);
                    return l._createRegion(v, y, r, x);
                  }),
                  (l._getRegion = function (g, m) {
                    var v = m.bounds,
                      y = Math.floor(v.min.x / g.bucketWidth),
                      r = Math.floor(v.max.x / g.bucketWidth),
                      x = Math.floor(v.min.y / g.bucketHeight),
                      p = Math.floor(v.max.y / g.bucketHeight);
                    return l._createRegion(y, r, x, p);
                  }),
                  (l._createRegion = function (g, m, v, y) {
                    return {
                      id: g + ',' + m + ',' + v + ',' + y,
                      startCol: g,
                      endCol: m,
                      startRow: v,
                      endRow: y,
                    };
                  }),
                  (l._getBucketId = function (g, m) {
                    return 'C' + g + 'R' + m;
                  }),
                  (l._createBucket = function (g, m) {
                    var v = (g[m] = []);
                    return v;
                  }),
                  (l._bucketAddBody = function (g, m, v) {
                    var y = g.pairs,
                      r = o.id,
                      x = m.length,
                      p;
                    for (p = 0; p < x; p++) {
                      var T = m[p];
                      if (!(v.id === T.id || (v.isStatic && T.isStatic))) {
                        var _ = r(v, T),
                          U = y[_];
                        U ? (U[2] += 1) : (y[_] = [v, T, 1]);
                      }
                    }
                    m.push(v);
                  }),
                  (l._bucketRemoveBody = function (g, m, v) {
                    var y = g.pairs,
                      r = o.id,
                      x;
                    m.splice(d.indexOf(m, v), 1);
                    var p = m.length;
                    for (x = 0; x < p; x++) {
                      var T = y[r(v, m[x])];
                      T && (T[2] -= 1);
                    }
                  }),
                  (l._createActivePairsList = function (g) {
                    var m,
                      v = g.pairs,
                      y = d.keys(v),
                      r = y.length,
                      x = [],
                      p;
                    for (p = 0; p < r; p++) ((m = v[y[p]]), m[2] > 0 ? x.push(m) : delete v[y[p]]);
                    return x;
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(3),
                d = c(7),
                f = c(14),
                g = c(5),
                m = c(13),
                v = c(10),
                y = c(6),
                r = c(0),
                x = c(1);
              (function () {
                ((l.create = function (p, T) {
                  var _ = (p ? p.mouse : null) || (T ? T.mouse : null);
                  _ ||
                    (p && p.render && p.render.canvas
                      ? (_ = f.create(p.render.canvas))
                      : T && T.element
                        ? (_ = f.create(T.element))
                        : ((_ = f.create()),
                          r.warn(
                            'MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected'
                          )));
                  var U = v.create({
                      label: 'Mouse Constraint',
                      pointA: _.position,
                      pointB: { x: 0, y: 0 },
                      length: 0.01,
                      stiffness: 0.1,
                      angularStiffness: 1,
                      render: { strokeStyle: '#90EE90', lineWidth: 3 },
                    }),
                    B = {
                      type: 'mouseConstraint',
                      mouse: _,
                      element: null,
                      body: null,
                      constraint: U,
                      collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                    },
                    G = r.extend(B, T);
                  return (
                    g.on(p, 'beforeUpdate', function () {
                      var C = y.allBodies(p.world);
                      (l.update(G, C), l._triggerEvents(G));
                    }),
                    G
                  );
                }),
                  (l.update = function (p, T) {
                    var _ = p.mouse,
                      U = p.constraint,
                      B = p.body;
                    if (_.button === 0) {
                      if (U.bodyB) (d.set(U.bodyB, !1), (U.pointA = _.position));
                      else
                        for (var G = 0; G < T.length; G++)
                          if (
                            ((B = T[G]),
                            x.contains(B.bounds, _.position) &&
                              m.canCollide(B.collisionFilter, p.collisionFilter))
                          )
                            for (var C = B.parts.length > 1 ? 1 : 0; C < B.parts.length; C++) {
                              var O = B.parts[C];
                              if (o.contains(O.vertices, _.position)) {
                                ((U.pointA = _.position),
                                  (U.bodyB = p.body = B),
                                  (U.pointB = {
                                    x: _.position.x - B.position.x,
                                    y: _.position.y - B.position.y,
                                  }),
                                  (U.angleB = B.angle),
                                  d.set(B, !1),
                                  g.trigger(p, 'startdrag', { mouse: _, body: B }));
                                break;
                              }
                            }
                    } else
                      ((U.bodyB = p.body = null),
                        (U.pointB = null),
                        B && g.trigger(p, 'enddrag', { mouse: _, body: B }));
                  }),
                  (l._triggerEvents = function (p) {
                    var T = p.mouse,
                      _ = T.sourceEvents;
                    (_.mousemove && g.trigger(p, 'mousemove', { mouse: T }),
                      _.mousedown && g.trigger(p, 'mousedown', { mouse: T }),
                      _.mouseup && g.trigger(p, 'mouseup', { mouse: T }),
                      f.clearSourceEvents(T));
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(2),
                d = c(8),
                f = c(1),
                g = c(12),
                m = c(3);
              (function () {
                ((l.collides = function (v, y) {
                  for (
                    var r = [], x = y.length, p = v.bounds, T = d.collides, _ = f.overlaps, U = 0;
                    U < x;
                    U++
                  ) {
                    var B = y[U],
                      G = B.parts.length,
                      C = G === 1 ? 0 : 1;
                    if (_(B.bounds, p))
                      for (var O = C; O < G; O++) {
                        var D = B.parts[O];
                        if (_(D.bounds, p)) {
                          var A = T(D, v);
                          if (A) {
                            r.push(A);
                            break;
                          }
                        }
                      }
                  }
                  return r;
                }),
                  (l.ray = function (v, y, r, x) {
                    x = x || 1e-100;
                    for (
                      var p = o.angle(y, r),
                        T = o.magnitude(o.sub(y, r)),
                        _ = (r.x + y.x) * 0.5,
                        U = (r.y + y.y) * 0.5,
                        B = g.rectangle(_, U, T, x, { angle: p }),
                        G = l.collides(B, v),
                        C = 0;
                      C < G.length;
                      C += 1
                    ) {
                      var O = G[C];
                      O.body = O.bodyB = O.bodyA;
                    }
                    return G;
                  }),
                  (l.region = function (v, y, r) {
                    for (var x = [], p = 0; p < v.length; p++) {
                      var T = v[p],
                        _ = f.overlaps(T.bounds, y);
                      ((_ && !r) || (!_ && r)) && x.push(T);
                    }
                    return x;
                  }),
                  (l.point = function (v, y) {
                    for (var r = [], x = 0; x < v.length; x++) {
                      var p = v[x];
                      if (f.contains(p.bounds, y))
                        for (var T = p.parts.length === 1 ? 0 : 1; T < p.parts.length; T++) {
                          var _ = p.parts[T];
                          if (f.contains(_.bounds, y) && m.contains(_.vertices, y)) {
                            r.push(p);
                            break;
                          }
                        }
                    }
                    return r;
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(4),
                d = c(0),
                f = c(6),
                g = c(1),
                m = c(5),
                v = c(2),
                y = c(14);
              (function () {
                var r, x;
                (typeof window < 'u' &&
                  ((r =
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (C) {
                      window.setTimeout(function () {
                        C(d.now());
                      }, 1e3 / 60);
                    }),
                  (x =
                    window.cancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    window.webkitCancelAnimationFrame ||
                    window.msCancelAnimationFrame)),
                  (l._goodFps = 30),
                  (l._goodDelta = 1e3 / 60),
                  (l.create = function (C) {
                    var O = {
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
                          hasBounds: !!C.bounds,
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
                      D = d.extend(O, C);
                    return (
                      D.canvas &&
                        ((D.canvas.width = D.options.width || D.canvas.width),
                        (D.canvas.height = D.options.height || D.canvas.height)),
                      (D.mouse = C.mouse),
                      (D.engine = C.engine),
                      (D.canvas = D.canvas || _(D.options.width, D.options.height)),
                      (D.context = D.canvas.getContext('2d')),
                      (D.textures = {}),
                      (D.bounds = D.bounds || {
                        min: { x: 0, y: 0 },
                        max: { x: D.canvas.width, y: D.canvas.height },
                      }),
                      (D.controller = l),
                      (D.options.showBroadphase = !1),
                      D.options.pixelRatio !== 1 && l.setPixelRatio(D, D.options.pixelRatio),
                      d.isElement(D.element) && D.element.appendChild(D.canvas),
                      D
                    );
                  }),
                  (l.run = function (C) {
                    (function O(D) {
                      ((C.frameRequestId = r(O)),
                        p(C, D),
                        l.world(C, D),
                        C.context.setTransform(
                          C.options.pixelRatio,
                          0,
                          0,
                          C.options.pixelRatio,
                          0,
                          0
                        ),
                        (C.options.showStats || C.options.showDebug) && l.stats(C, C.context, D),
                        (C.options.showPerformance || C.options.showDebug) &&
                          l.performance(C, C.context, D),
                        C.context.setTransform(1, 0, 0, 1, 0, 0));
                    })();
                  }),
                  (l.stop = function (C) {
                    x(C.frameRequestId);
                  }),
                  (l.setPixelRatio = function (C, O) {
                    var D = C.options,
                      A = C.canvas;
                    (O === 'auto' && (O = U(A)),
                      (D.pixelRatio = O),
                      A.setAttribute('data-pixel-ratio', O),
                      (A.width = D.width * O),
                      (A.height = D.height * O),
                      (A.style.width = D.width + 'px'),
                      (A.style.height = D.height + 'px'));
                  }),
                  (l.setSize = function (C, O, D) {
                    ((C.options.width = O),
                      (C.options.height = D),
                      (C.bounds.max.x = C.bounds.min.x + O),
                      (C.bounds.max.y = C.bounds.min.y + D),
                      C.options.pixelRatio !== 1
                        ? l.setPixelRatio(C, C.options.pixelRatio)
                        : ((C.canvas.width = O), (C.canvas.height = D)));
                  }),
                  (l.lookAt = function (C, O, D, A) {
                    ((A = typeof A < 'u' ? A : !0),
                      (O = d.isArray(O) ? O : [O]),
                      (D = D || { x: 0, y: 0 }));
                    for (
                      var j = { min: { x: 1 / 0, y: 1 / 0 }, max: { x: -1 / 0, y: -1 / 0 } }, L = 0;
                      L < O.length;
                      L += 1
                    ) {
                      var H = O[L],
                        V = H.bounds ? H.bounds.min : H.min || H.position || H,
                        P = H.bounds ? H.bounds.max : H.max || H.position || H;
                      V &&
                        P &&
                        (V.x < j.min.x && (j.min.x = V.x),
                        P.x > j.max.x && (j.max.x = P.x),
                        V.y < j.min.y && (j.min.y = V.y),
                        P.y > j.max.y && (j.max.y = P.y));
                    }
                    var ie = j.max.x - j.min.x + 2 * D.x,
                      W = j.max.y - j.min.y + 2 * D.y,
                      M = C.canvas.height,
                      z = C.canvas.width,
                      q = z / M,
                      F = ie / W,
                      le = 1,
                      N = 1;
                    (F > q ? (N = F / q) : (le = q / F),
                      (C.options.hasBounds = !0),
                      (C.bounds.min.x = j.min.x),
                      (C.bounds.max.x = j.min.x + ie * le),
                      (C.bounds.min.y = j.min.y),
                      (C.bounds.max.y = j.min.y + W * N),
                      A &&
                        ((C.bounds.min.x += ie * 0.5 - ie * le * 0.5),
                        (C.bounds.max.x += ie * 0.5 - ie * le * 0.5),
                        (C.bounds.min.y += W * 0.5 - W * N * 0.5),
                        (C.bounds.max.y += W * 0.5 - W * N * 0.5)),
                      (C.bounds.min.x -= D.x),
                      (C.bounds.max.x -= D.x),
                      (C.bounds.min.y -= D.y),
                      (C.bounds.max.y -= D.y),
                      C.mouse &&
                        (y.setScale(C.mouse, {
                          x: (C.bounds.max.x - C.bounds.min.x) / C.canvas.width,
                          y: (C.bounds.max.y - C.bounds.min.y) / C.canvas.height,
                        }),
                        y.setOffset(C.mouse, C.bounds.min)));
                  }),
                  (l.startViewTransform = function (C) {
                    var O = C.bounds.max.x - C.bounds.min.x,
                      D = C.bounds.max.y - C.bounds.min.y,
                      A = O / C.options.width,
                      j = D / C.options.height;
                    (C.context.setTransform(
                      C.options.pixelRatio / A,
                      0,
                      0,
                      C.options.pixelRatio / j,
                      0,
                      0
                    ),
                      C.context.translate(-C.bounds.min.x, -C.bounds.min.y));
                  }),
                  (l.endViewTransform = function (C) {
                    C.context.setTransform(C.options.pixelRatio, 0, 0, C.options.pixelRatio, 0, 0);
                  }),
                  (l.world = function (C, O) {
                    var D = d.now(),
                      A = C.engine,
                      j = A.world,
                      L = C.canvas,
                      H = C.context,
                      V = C.options,
                      P = C.timing,
                      ie = f.allBodies(j),
                      W = f.allConstraints(j),
                      M = V.wireframes ? V.wireframeBackground : V.background,
                      z = [],
                      q = [],
                      F,
                      le = { timestamp: A.timing.timestamp };
                    if (
                      (m.trigger(C, 'beforeRender', le),
                      C.currentBackground !== M && G(C, M),
                      (H.globalCompositeOperation = 'source-in'),
                      (H.fillStyle = 'transparent'),
                      H.fillRect(0, 0, L.width, L.height),
                      (H.globalCompositeOperation = 'source-over'),
                      V.hasBounds)
                    ) {
                      for (F = 0; F < ie.length; F++) {
                        var N = ie[F];
                        g.overlaps(N.bounds, C.bounds) && z.push(N);
                      }
                      for (F = 0; F < W.length; F++) {
                        var Q = W[F],
                          ee = Q.bodyA,
                          ue = Q.bodyB,
                          oe = Q.pointA,
                          se = Q.pointB;
                        (ee && (oe = v.add(ee.position, Q.pointA)),
                          ue && (se = v.add(ue.position, Q.pointB)),
                          !(!oe || !se) &&
                            (g.contains(C.bounds, oe) || g.contains(C.bounds, se)) &&
                            q.push(Q));
                      }
                      (l.startViewTransform(C),
                        C.mouse &&
                          (y.setScale(C.mouse, {
                            x: (C.bounds.max.x - C.bounds.min.x) / C.options.width,
                            y: (C.bounds.max.y - C.bounds.min.y) / C.options.height,
                          }),
                          y.setOffset(C.mouse, C.bounds.min)));
                    } else
                      ((q = W),
                        (z = ie),
                        C.options.pixelRatio !== 1 &&
                          C.context.setTransform(
                            C.options.pixelRatio,
                            0,
                            0,
                            C.options.pixelRatio,
                            0,
                            0
                          ));
                    (!V.wireframes || (A.enableSleeping && V.showSleeping)
                      ? l.bodies(C, z, H)
                      : (V.showConvexHulls && l.bodyConvexHulls(C, z, H),
                        l.bodyWireframes(C, z, H)),
                      V.showBounds && l.bodyBounds(C, z, H),
                      (V.showAxes || V.showAngleIndicator) && l.bodyAxes(C, z, H),
                      V.showPositions && l.bodyPositions(C, z, H),
                      V.showVelocity && l.bodyVelocity(C, z, H),
                      V.showIds && l.bodyIds(C, z, H),
                      V.showSeparations && l.separations(C, A.pairs.list, H),
                      V.showCollisions && l.collisions(C, A.pairs.list, H),
                      V.showVertexNumbers && l.vertexNumbers(C, z, H),
                      V.showMousePosition && l.mousePosition(C, C.mouse, H),
                      l.constraints(q, H),
                      V.hasBounds && l.endViewTransform(C),
                      m.trigger(C, 'afterRender', le),
                      (P.lastElapsed = d.now() - D));
                  }),
                  (l.stats = function (C, O, D) {
                    for (
                      var A = C.engine,
                        j = A.world,
                        L = f.allBodies(j),
                        H = 0,
                        V = 55,
                        P = 44,
                        ie = 0,
                        W = 0,
                        M = 0;
                      M < L.length;
                      M += 1
                    )
                      H += L[M].parts.length;
                    var z = {
                      Part: H,
                      Body: L.length,
                      Cons: f.allConstraints(j).length,
                      Comp: f.allComposites(j).length,
                      Pair: A.pairs.list.length,
                    };
                    ((O.fillStyle = '#0e0f19'),
                      O.fillRect(ie, W, V * 5.5, P),
                      (O.font = '12px Arial'),
                      (O.textBaseline = 'top'),
                      (O.textAlign = 'right'));
                    for (var q in z) {
                      var F = z[q];
                      ((O.fillStyle = '#aaa'),
                        O.fillText(q, ie + V, W + 8),
                        (O.fillStyle = '#eee'),
                        O.fillText(F, ie + V, W + 26),
                        (ie += V));
                    }
                  }),
                  (l.performance = function (C, O) {
                    var D = C.engine,
                      A = C.timing,
                      j = A.deltaHistory,
                      L = A.elapsedHistory,
                      H = A.timestampElapsedHistory,
                      V = A.engineDeltaHistory,
                      P = A.engineUpdatesHistory,
                      ie = A.engineElapsedHistory,
                      W = D.timing.lastUpdatesPerFrame,
                      M = D.timing.lastDelta,
                      z = T(j),
                      q = T(L),
                      F = T(V),
                      le = T(P),
                      N = T(ie),
                      Q = T(H),
                      ee = Q / z || 0,
                      ue = Math.round(z / M),
                      oe = 1e3 / z || 0,
                      se = 4,
                      ge = 12,
                      Se = 60,
                      Ue = 34,
                      Ze = 10,
                      Ke = 69;
                    ((O.fillStyle = '#0e0f19'),
                      O.fillRect(0, 50, ge * 5 + Se * 6 + 22, Ue),
                      l.status(
                        O,
                        Ze,
                        Ke,
                        Se,
                        se,
                        j.length,
                        Math.round(oe) + ' fps',
                        oe / l._goodFps,
                        function (Ve) {
                          return j[Ve] / z - 1;
                        }
                      ),
                      l.status(
                        O,
                        Ze + ge + Se,
                        Ke,
                        Se,
                        se,
                        V.length,
                        M.toFixed(2) + ' dt',
                        l._goodDelta / M,
                        function (Ve) {
                          return V[Ve] / F - 1;
                        }
                      ),
                      l.status(
                        O,
                        Ze + (ge + Se) * 2,
                        Ke,
                        Se,
                        se,
                        P.length,
                        W + ' upf',
                        Math.pow(d.clamp(le / ue || 1, 0, 1), 4),
                        function (Ve) {
                          return P[Ve] / le - 1;
                        }
                      ),
                      l.status(
                        O,
                        Ze + (ge + Se) * 3,
                        Ke,
                        Se,
                        se,
                        ie.length,
                        N.toFixed(2) + ' ut',
                        1 - (W * N) / l._goodFps,
                        function (Ve) {
                          return ie[Ve] / N - 1;
                        }
                      ),
                      l.status(
                        O,
                        Ze + (ge + Se) * 4,
                        Ke,
                        Se,
                        se,
                        L.length,
                        q.toFixed(2) + ' rt',
                        1 - q / l._goodFps,
                        function (Ve) {
                          return L[Ve] / q - 1;
                        }
                      ),
                      l.status(
                        O,
                        Ze + (ge + Se) * 5,
                        Ke,
                        Se,
                        se,
                        H.length,
                        ee.toFixed(2) + ' x',
                        ee * ee * ee,
                        function (Ve) {
                          return (H[Ve] / j[Ve] / ee || 0) - 1;
                        }
                      ));
                  }),
                  (l.status = function (C, O, D, A, j, L, H, V, P) {
                    ((C.strokeStyle = '#888'),
                      (C.fillStyle = '#444'),
                      (C.lineWidth = 1),
                      C.fillRect(O, D + 7, A, 1),
                      C.beginPath(),
                      C.moveTo(O, D + 7 - j * d.clamp(0.4 * P(0), -2, 2)));
                    for (var ie = 0; ie < A; ie += 1)
                      C.lineTo(O + ie, D + 7 - (ie < L ? j * d.clamp(0.4 * P(ie), -2, 2) : 0));
                    (C.stroke(),
                      (C.fillStyle = 'hsl(' + d.clamp(25 + 95 * V, 0, 120) + ',100%,60%)'),
                      C.fillRect(O, D - 7, 4, 4),
                      (C.font = '12px Arial'),
                      (C.textBaseline = 'middle'),
                      (C.textAlign = 'right'),
                      (C.fillStyle = '#eee'),
                      C.fillText(H, O + A, D - 5));
                  }),
                  (l.constraints = function (C, O) {
                    for (var D = O, A = 0; A < C.length; A++) {
                      var j = C[A];
                      if (!(!j.render.visible || !j.pointA || !j.pointB)) {
                        var L = j.bodyA,
                          H = j.bodyB,
                          V,
                          P;
                        if (
                          (L ? (V = v.add(L.position, j.pointA)) : (V = j.pointA),
                          j.render.type === 'pin')
                        )
                          (D.beginPath(), D.arc(V.x, V.y, 3, 0, 2 * Math.PI), D.closePath());
                        else {
                          if (
                            (H ? (P = v.add(H.position, j.pointB)) : (P = j.pointB),
                            D.beginPath(),
                            D.moveTo(V.x, V.y),
                            j.render.type === 'spring')
                          )
                            for (
                              var ie = v.sub(P, V),
                                W = v.perp(v.normalise(ie)),
                                M = Math.ceil(d.clamp(j.length / 5, 12, 20)),
                                z,
                                q = 1;
                              q < M;
                              q += 1
                            )
                              ((z = q % 2 === 0 ? 1 : -1),
                                D.lineTo(
                                  V.x + ie.x * (q / M) + W.x * z * 4,
                                  V.y + ie.y * (q / M) + W.y * z * 4
                                ));
                          D.lineTo(P.x, P.y);
                        }
                        (j.render.lineWidth &&
                          ((D.lineWidth = j.render.lineWidth),
                          (D.strokeStyle = j.render.strokeStyle),
                          D.stroke()),
                          j.render.anchors &&
                            ((D.fillStyle = j.render.strokeStyle),
                            D.beginPath(),
                            D.arc(V.x, V.y, 3, 0, 2 * Math.PI),
                            D.arc(P.x, P.y, 3, 0, 2 * Math.PI),
                            D.closePath(),
                            D.fill()));
                      }
                    }
                  }),
                  (l.bodies = function (C, O, D) {
                    var A = D;
                    C.engine;
                    var j = C.options,
                      L = j.showInternalEdges || !j.wireframes,
                      H,
                      V,
                      P,
                      ie;
                    for (P = 0; P < O.length; P++)
                      if (((H = O[P]), !!H.render.visible)) {
                        for (ie = H.parts.length > 1 ? 1 : 0; ie < H.parts.length; ie++)
                          if (((V = H.parts[ie]), !!V.render.visible)) {
                            if (
                              (j.showSleeping && H.isSleeping
                                ? (A.globalAlpha = 0.5 * V.render.opacity)
                                : V.render.opacity !== 1 && (A.globalAlpha = V.render.opacity),
                              V.render.sprite && V.render.sprite.texture && !j.wireframes)
                            ) {
                              var W = V.render.sprite,
                                M = B(C, W.texture);
                              (A.translate(V.position.x, V.position.y),
                                A.rotate(V.angle),
                                A.drawImage(
                                  M,
                                  M.width * -W.xOffset * W.xScale,
                                  M.height * -W.yOffset * W.yScale,
                                  M.width * W.xScale,
                                  M.height * W.yScale
                                ),
                                A.rotate(-V.angle),
                                A.translate(-V.position.x, -V.position.y));
                            } else {
                              if (V.circleRadius)
                                (A.beginPath(),
                                  A.arc(
                                    V.position.x,
                                    V.position.y,
                                    V.circleRadius,
                                    0,
                                    2 * Math.PI
                                  ));
                              else {
                                (A.beginPath(), A.moveTo(V.vertices[0].x, V.vertices[0].y));
                                for (var z = 1; z < V.vertices.length; z++)
                                  (!V.vertices[z - 1].isInternal || L
                                    ? A.lineTo(V.vertices[z].x, V.vertices[z].y)
                                    : A.moveTo(V.vertices[z].x, V.vertices[z].y),
                                    V.vertices[z].isInternal &&
                                      !L &&
                                      A.moveTo(
                                        V.vertices[(z + 1) % V.vertices.length].x,
                                        V.vertices[(z + 1) % V.vertices.length].y
                                      ));
                                (A.lineTo(V.vertices[0].x, V.vertices[0].y), A.closePath());
                              }
                              j.wireframes
                                ? ((A.lineWidth = 1),
                                  (A.strokeStyle = C.options.wireframeStrokeStyle),
                                  A.stroke())
                                : ((A.fillStyle = V.render.fillStyle),
                                  V.render.lineWidth &&
                                    ((A.lineWidth = V.render.lineWidth),
                                    (A.strokeStyle = V.render.strokeStyle),
                                    A.stroke()),
                                  A.fill());
                            }
                            A.globalAlpha = 1;
                          }
                      }
                  }),
                  (l.bodyWireframes = function (C, O, D) {
                    var A = D,
                      j = C.options.showInternalEdges,
                      L,
                      H,
                      V,
                      P,
                      ie;
                    for (A.beginPath(), V = 0; V < O.length; V++)
                      if (((L = O[V]), !!L.render.visible))
                        for (ie = L.parts.length > 1 ? 1 : 0; ie < L.parts.length; ie++) {
                          for (
                            H = L.parts[ie], A.moveTo(H.vertices[0].x, H.vertices[0].y), P = 1;
                            P < H.vertices.length;
                            P++
                          )
                            (!H.vertices[P - 1].isInternal || j
                              ? A.lineTo(H.vertices[P].x, H.vertices[P].y)
                              : A.moveTo(H.vertices[P].x, H.vertices[P].y),
                              H.vertices[P].isInternal &&
                                !j &&
                                A.moveTo(
                                  H.vertices[(P + 1) % H.vertices.length].x,
                                  H.vertices[(P + 1) % H.vertices.length].y
                                ));
                          A.lineTo(H.vertices[0].x, H.vertices[0].y);
                        }
                    ((A.lineWidth = 1),
                      (A.strokeStyle = C.options.wireframeStrokeStyle),
                      A.stroke());
                  }),
                  (l.bodyConvexHulls = function (C, O, D) {
                    var A = D,
                      j,
                      L,
                      H;
                    for (A.beginPath(), L = 0; L < O.length; L++)
                      if (((j = O[L]), !(!j.render.visible || j.parts.length === 1))) {
                        for (
                          A.moveTo(j.vertices[0].x, j.vertices[0].y), H = 1;
                          H < j.vertices.length;
                          H++
                        )
                          A.lineTo(j.vertices[H].x, j.vertices[H].y);
                        A.lineTo(j.vertices[0].x, j.vertices[0].y);
                      }
                    ((A.lineWidth = 1), (A.strokeStyle = 'rgba(255,255,255,0.2)'), A.stroke());
                  }),
                  (l.vertexNumbers = function (C, O, D) {
                    var A = D,
                      j,
                      L,
                      H;
                    for (j = 0; j < O.length; j++) {
                      var V = O[j].parts;
                      for (H = V.length > 1 ? 1 : 0; H < V.length; H++) {
                        var P = V[H];
                        for (L = 0; L < P.vertices.length; L++)
                          ((A.fillStyle = 'rgba(255,255,255,0.2)'),
                            A.fillText(
                              j + '_' + L,
                              P.position.x + (P.vertices[L].x - P.position.x) * 0.8,
                              P.position.y + (P.vertices[L].y - P.position.y) * 0.8
                            ));
                      }
                    }
                  }),
                  (l.mousePosition = function (C, O, D) {
                    var A = D;
                    ((A.fillStyle = 'rgba(255,255,255,0.8)'),
                      A.fillText(
                        O.position.x + '  ' + O.position.y,
                        O.position.x + 5,
                        O.position.y - 5
                      ));
                  }),
                  (l.bodyBounds = function (C, O, D) {
                    var A = D;
                    C.engine;
                    var j = C.options;
                    A.beginPath();
                    for (var L = 0; L < O.length; L++) {
                      var H = O[L];
                      if (H.render.visible)
                        for (var V = O[L].parts, P = V.length > 1 ? 1 : 0; P < V.length; P++) {
                          var ie = V[P];
                          A.rect(
                            ie.bounds.min.x,
                            ie.bounds.min.y,
                            ie.bounds.max.x - ie.bounds.min.x,
                            ie.bounds.max.y - ie.bounds.min.y
                          );
                        }
                    }
                    (j.wireframes
                      ? (A.strokeStyle = 'rgba(255,255,255,0.08)')
                      : (A.strokeStyle = 'rgba(0,0,0,0.1)'),
                      (A.lineWidth = 1),
                      A.stroke());
                  }),
                  (l.bodyAxes = function (C, O, D) {
                    var A = D;
                    C.engine;
                    var j = C.options,
                      L,
                      H,
                      V,
                      P;
                    for (A.beginPath(), H = 0; H < O.length; H++) {
                      var ie = O[H],
                        W = ie.parts;
                      if (ie.render.visible)
                        if (j.showAxes)
                          for (V = W.length > 1 ? 1 : 0; V < W.length; V++)
                            for (L = W[V], P = 0; P < L.axes.length; P++) {
                              var M = L.axes[P];
                              (A.moveTo(L.position.x, L.position.y),
                                A.lineTo(L.position.x + M.x * 20, L.position.y + M.y * 20));
                            }
                        else
                          for (V = W.length > 1 ? 1 : 0; V < W.length; V++)
                            for (L = W[V], P = 0; P < L.axes.length; P++)
                              (A.moveTo(L.position.x, L.position.y),
                                A.lineTo(
                                  (L.vertices[0].x + L.vertices[L.vertices.length - 1].x) / 2,
                                  (L.vertices[0].y + L.vertices[L.vertices.length - 1].y) / 2
                                ));
                    }
                    (j.wireframes
                      ? ((A.strokeStyle = 'indianred'), (A.lineWidth = 1))
                      : ((A.strokeStyle = 'rgba(255, 255, 255, 0.4)'),
                        (A.globalCompositeOperation = 'overlay'),
                        (A.lineWidth = 2)),
                      A.stroke(),
                      (A.globalCompositeOperation = 'source-over'));
                  }),
                  (l.bodyPositions = function (C, O, D) {
                    var A = D;
                    C.engine;
                    var j = C.options,
                      L,
                      H,
                      V,
                      P;
                    for (A.beginPath(), V = 0; V < O.length; V++)
                      if (((L = O[V]), !!L.render.visible))
                        for (P = 0; P < L.parts.length; P++)
                          ((H = L.parts[P]),
                            A.arc(H.position.x, H.position.y, 3, 0, 2 * Math.PI, !1),
                            A.closePath());
                    for (
                      j.wireframes
                        ? (A.fillStyle = 'indianred')
                        : (A.fillStyle = 'rgba(0,0,0,0.5)'),
                        A.fill(),
                        A.beginPath(),
                        V = 0;
                      V < O.length;
                      V++
                    )
                      ((L = O[V]),
                        L.render.visible &&
                          (A.arc(L.positionPrev.x, L.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                          A.closePath()));
                    ((A.fillStyle = 'rgba(255,165,0,0.8)'), A.fill());
                  }),
                  (l.bodyVelocity = function (C, O, D) {
                    var A = D;
                    A.beginPath();
                    for (var j = 0; j < O.length; j++) {
                      var L = O[j];
                      if (L.render.visible) {
                        var H = o.getVelocity(L);
                        (A.moveTo(L.position.x, L.position.y),
                          A.lineTo(L.position.x + H.x, L.position.y + H.y));
                      }
                    }
                    ((A.lineWidth = 3), (A.strokeStyle = 'cornflowerblue'), A.stroke());
                  }),
                  (l.bodyIds = function (C, O, D) {
                    var A = D,
                      j,
                      L;
                    for (j = 0; j < O.length; j++)
                      if (O[j].render.visible) {
                        var H = O[j].parts;
                        for (L = H.length > 1 ? 1 : 0; L < H.length; L++) {
                          var V = H[L];
                          ((A.font = '12px Arial'),
                            (A.fillStyle = 'rgba(255,255,255,0.5)'),
                            A.fillText(V.id, V.position.x + 10, V.position.y - 10));
                        }
                      }
                  }),
                  (l.collisions = function (C, O, D) {
                    var A = D,
                      j = C.options,
                      L,
                      H,
                      V,
                      P;
                    for (A.beginPath(), V = 0; V < O.length; V++)
                      if (((L = O[V]), !!L.isActive))
                        for (H = L.collision, P = 0; P < L.contactCount; P++) {
                          var ie = L.contacts[P],
                            W = ie.vertex;
                          A.rect(W.x - 1.5, W.y - 1.5, 3.5, 3.5);
                        }
                    for (
                      j.wireframes
                        ? (A.fillStyle = 'rgba(255,255,255,0.7)')
                        : (A.fillStyle = 'orange'),
                        A.fill(),
                        A.beginPath(),
                        V = 0;
                      V < O.length;
                      V++
                    )
                      if (((L = O[V]), !!L.isActive && ((H = L.collision), L.contactCount > 0))) {
                        var M = L.contacts[0].vertex.x,
                          z = L.contacts[0].vertex.y;
                        (L.contactCount === 2 &&
                          ((M = (L.contacts[0].vertex.x + L.contacts[1].vertex.x) / 2),
                          (z = (L.contacts[0].vertex.y + L.contacts[1].vertex.y) / 2)),
                          H.bodyB === H.supports[0].body || H.bodyA.isStatic === !0
                            ? A.moveTo(M - H.normal.x * 8, z - H.normal.y * 8)
                            : A.moveTo(M + H.normal.x * 8, z + H.normal.y * 8),
                          A.lineTo(M, z));
                      }
                    (j.wireframes
                      ? (A.strokeStyle = 'rgba(255,165,0,0.7)')
                      : (A.strokeStyle = 'orange'),
                      (A.lineWidth = 1),
                      A.stroke());
                  }),
                  (l.separations = function (C, O, D) {
                    var A = D,
                      j = C.options,
                      L,
                      H,
                      V,
                      P,
                      ie;
                    for (A.beginPath(), ie = 0; ie < O.length; ie++)
                      if (((L = O[ie]), !!L.isActive)) {
                        ((H = L.collision), (V = H.bodyA), (P = H.bodyB));
                        var W = 1;
                        (!P.isStatic && !V.isStatic && (W = 0.5),
                          P.isStatic && (W = 0),
                          A.moveTo(P.position.x, P.position.y),
                          A.lineTo(
                            P.position.x - H.penetration.x * W,
                            P.position.y - H.penetration.y * W
                          ),
                          (W = 1),
                          !P.isStatic && !V.isStatic && (W = 0.5),
                          V.isStatic && (W = 0),
                          A.moveTo(V.position.x, V.position.y),
                          A.lineTo(
                            V.position.x + H.penetration.x * W,
                            V.position.y + H.penetration.y * W
                          ));
                      }
                    (j.wireframes
                      ? (A.strokeStyle = 'rgba(255,165,0,0.5)')
                      : (A.strokeStyle = 'orange'),
                      A.stroke());
                  }),
                  (l.inspector = function (C, O) {
                    C.engine;
                    var D = C.selected,
                      A = C.render,
                      j = A.options,
                      L;
                    if (j.hasBounds) {
                      var H = A.bounds.max.x - A.bounds.min.x,
                        V = A.bounds.max.y - A.bounds.min.y,
                        P = H / A.options.width,
                        ie = V / A.options.height;
                      (O.scale(1 / P, 1 / ie), O.translate(-A.bounds.min.x, -A.bounds.min.y));
                    }
                    for (var W = 0; W < D.length; W++) {
                      var M = D[W].data;
                      switch (
                        (O.translate(0.5, 0.5),
                        (O.lineWidth = 1),
                        (O.strokeStyle = 'rgba(255,165,0,0.9)'),
                        O.setLineDash([1, 2]),
                        M.type)
                      ) {
                        case 'body':
                          ((L = M.bounds),
                            O.beginPath(),
                            O.rect(
                              Math.floor(L.min.x - 3),
                              Math.floor(L.min.y - 3),
                              Math.floor(L.max.x - L.min.x + 6),
                              Math.floor(L.max.y - L.min.y + 6)
                            ),
                            O.closePath(),
                            O.stroke());
                          break;
                        case 'constraint':
                          var z = M.pointA;
                          (M.bodyA && (z = M.pointB),
                            O.beginPath(),
                            O.arc(z.x, z.y, 10, 0, 2 * Math.PI),
                            O.closePath(),
                            O.stroke());
                          break;
                      }
                      (O.setLineDash([]), O.translate(-0.5, -0.5));
                    }
                    (C.selectStart !== null &&
                      (O.translate(0.5, 0.5),
                      (O.lineWidth = 1),
                      (O.strokeStyle = 'rgba(255,165,0,0.6)'),
                      (O.fillStyle = 'rgba(255,165,0,0.1)'),
                      (L = C.selectBounds),
                      O.beginPath(),
                      O.rect(
                        Math.floor(L.min.x),
                        Math.floor(L.min.y),
                        Math.floor(L.max.x - L.min.x),
                        Math.floor(L.max.y - L.min.y)
                      ),
                      O.closePath(),
                      O.stroke(),
                      O.fill(),
                      O.translate(-0.5, -0.5)),
                      j.hasBounds && O.setTransform(1, 0, 0, 1, 0, 0));
                  }));
                var p = function (C, O) {
                    var D = C.engine,
                      A = C.timing,
                      j = A.historySize,
                      L = D.timing.timestamp;
                    ((A.delta = O - A.lastTime || l._goodDelta),
                      (A.lastTime = O),
                      (A.timestampElapsed = L - A.lastTimestamp || 0),
                      (A.lastTimestamp = L),
                      A.deltaHistory.unshift(A.delta),
                      (A.deltaHistory.length = Math.min(A.deltaHistory.length, j)),
                      A.engineDeltaHistory.unshift(D.timing.lastDelta),
                      (A.engineDeltaHistory.length = Math.min(A.engineDeltaHistory.length, j)),
                      A.timestampElapsedHistory.unshift(A.timestampElapsed),
                      (A.timestampElapsedHistory.length = Math.min(
                        A.timestampElapsedHistory.length,
                        j
                      )),
                      A.engineUpdatesHistory.unshift(D.timing.lastUpdatesPerFrame),
                      (A.engineUpdatesHistory.length = Math.min(A.engineUpdatesHistory.length, j)),
                      A.engineElapsedHistory.unshift(D.timing.lastElapsed),
                      (A.engineElapsedHistory.length = Math.min(A.engineElapsedHistory.length, j)),
                      A.elapsedHistory.unshift(A.lastElapsed),
                      (A.elapsedHistory.length = Math.min(A.elapsedHistory.length, j)));
                  },
                  T = function (C) {
                    for (var O = 0, D = 0; D < C.length; D += 1) O += C[D];
                    return O / C.length || 0;
                  },
                  _ = function (C, O) {
                    var D = document.createElement('canvas');
                    return (
                      (D.width = C),
                      (D.height = O),
                      (D.oncontextmenu = function () {
                        return !1;
                      }),
                      (D.onselectstart = function () {
                        return !1;
                      }),
                      D
                    );
                  },
                  U = function (C) {
                    var O = C.getContext('2d'),
                      D = window.devicePixelRatio || 1,
                      A =
                        O.webkitBackingStorePixelRatio ||
                        O.mozBackingStorePixelRatio ||
                        O.msBackingStorePixelRatio ||
                        O.oBackingStorePixelRatio ||
                        O.backingStorePixelRatio ||
                        1;
                    return D / A;
                  },
                  B = function (C, O) {
                    var D = C.textures[O];
                    return D || ((D = C.textures[O] = new Image()), (D.src = O), D);
                  },
                  G = function (C, O) {
                    var D = O;
                    (/(jpg|gif|png)$/.test(O) && (D = 'url(' + O + ')'),
                      (C.canvas.style.background = D),
                      (C.canvas.style.backgroundSize = 'contain'),
                      (C.currentBackground = O));
                  };
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(5),
                d = c(17),
                f = c(0);
              (function () {
                ((l._maxFrameDelta = 1e3 / 15),
                  (l._frameDeltaFallback = 1e3 / 60),
                  (l._timeBufferMargin = 1.5),
                  (l._elapsedNextEstimate = 1),
                  (l._smoothingLowerBound = 0.1),
                  (l._smoothingUpperBound = 0.9),
                  (l.create = function (m) {
                    var v = {
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
                      y = f.extend(v, m);
                    return ((y.fps = 0), y);
                  }),
                  (l.run = function (m, v) {
                    return (
                      (m.timeBuffer = l._frameDeltaFallback),
                      (function y(r) {
                        ((m.frameRequestId = l._onNextFrame(m, y)),
                          r && m.enabled && l.tick(m, v, r));
                      })(),
                      m
                    );
                  }),
                  (l.tick = function (m, v, y) {
                    var r = f.now(),
                      x = m.delta,
                      p = 0,
                      T = y - m.timeLastTick;
                    if (
                      ((!T || !m.timeLastTick || T > Math.max(l._maxFrameDelta, m.maxFrameTime)) &&
                        (T = m.frameDelta || l._frameDeltaFallback),
                      m.frameDeltaSmoothing)
                    ) {
                      (m.frameDeltaHistory.push(T),
                        (m.frameDeltaHistory = m.frameDeltaHistory.slice(
                          -m.frameDeltaHistorySize
                        )));
                      var _ = m.frameDeltaHistory.slice(0).sort(),
                        U = m.frameDeltaHistory.slice(
                          _.length * l._smoothingLowerBound,
                          _.length * l._smoothingUpperBound
                        ),
                        B = g(U);
                      T = B || T;
                    }
                    (m.frameDeltaSnapping && (T = 1e3 / Math.round(1e3 / T)),
                      (m.frameDelta = T),
                      (m.timeLastTick = y),
                      (m.timeBuffer += m.frameDelta),
                      (m.timeBuffer = f.clamp(
                        m.timeBuffer,
                        0,
                        m.frameDelta + x * l._timeBufferMargin
                      )),
                      (m.lastUpdatesDeferred = 0));
                    var G = m.maxUpdates || Math.ceil(m.maxFrameTime / x),
                      C = { timestamp: v.timing.timestamp };
                    (o.trigger(m, 'beforeTick', C), o.trigger(m, 'tick', C));
                    for (var O = f.now(); x > 0 && m.timeBuffer >= x * l._timeBufferMargin; ) {
                      (o.trigger(m, 'beforeUpdate', C),
                        d.update(v, x),
                        o.trigger(m, 'afterUpdate', C),
                        (m.timeBuffer -= x),
                        (p += 1));
                      var D = f.now() - r,
                        A = f.now() - O,
                        j = D + (l._elapsedNextEstimate * A) / p;
                      if (p >= G || j > m.maxFrameTime) {
                        m.lastUpdatesDeferred = Math.round(
                          Math.max(0, m.timeBuffer / x - l._timeBufferMargin)
                        );
                        break;
                      }
                    }
                    ((v.timing.lastUpdatesPerFrame = p),
                      o.trigger(m, 'afterTick', C),
                      m.frameDeltaHistory.length >= 100 &&
                        (m.lastUpdatesDeferred && Math.round(m.frameDelta / x) > G
                          ? f.warnOnce('Matter.Runner: runner reached runner.maxUpdates, see docs.')
                          : m.lastUpdatesDeferred &&
                            f.warnOnce(
                              'Matter.Runner: runner reached runner.maxFrameTime, see docs.'
                            ),
                        typeof m.isFixed < 'u' &&
                          f.warnOnce('Matter.Runner: runner.isFixed is now redundant, see docs.'),
                        (m.deltaMin || m.deltaMax) &&
                          f.warnOnce(
                            'Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs.'
                          ),
                        m.fps !== 0 &&
                          f.warnOnce(
                            'Matter.Runner: runner.fps was replaced by runner.delta, see docs.'
                          )));
                  }),
                  (l.stop = function (m) {
                    l._cancelNextFrame(m);
                  }),
                  (l._onNextFrame = function (m, v) {
                    if (typeof window < 'u' && window.requestAnimationFrame)
                      m.frameRequestId = window.requestAnimationFrame(v);
                    else
                      throw new Error(
                        'Matter.Runner: missing required global window.requestAnimationFrame.'
                      );
                    return m.frameRequestId;
                  }),
                  (l._cancelNextFrame = function (m) {
                    if (typeof window < 'u' && window.cancelAnimationFrame)
                      window.cancelAnimationFrame(m.frameRequestId);
                    else
                      throw new Error(
                        'Matter.Runner: missing required global window.cancelAnimationFrame.'
                      );
                  }));
                var g = function (m) {
                  for (var v = 0, y = m.length, r = 0; r < y; r += 1) v += m[r];
                  return v / y || 0;
                };
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(8),
                d = c(0),
                f = d.deprecated;
              (function () {
                ((l.collides = function (g, m) {
                  return o.collides(g, m);
                }),
                  f(l, 'collides', 'SAT.collides ➤ replaced by Collision.collides'));
              })();
            },
            function (S, h, c) {
              var l = {};
              ((S.exports = l), c(1));
              var o = c(0);
              (function () {
                ((l.pathToVertices = function (d, f) {
                  typeof window < 'u' &&
                    !('SVGPathSeg' in window) &&
                    o.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
                  var g,
                    m,
                    v,
                    y,
                    r,
                    x,
                    p,
                    T,
                    _,
                    U,
                    B = [],
                    G,
                    C,
                    O = 0,
                    D = 0,
                    A = 0;
                  f = f || 15;
                  var j = function (H, V, P) {
                      var ie = P % 2 === 1 && P > 1;
                      if (!_ || H != _.x || V != _.y) {
                        _ && ie ? ((G = _.x), (C = _.y)) : ((G = 0), (C = 0));
                        var W = { x: G + H, y: C + V };
                        ((ie || !_) && (_ = W), B.push(W), (D = G + H), (A = C + V));
                      }
                    },
                    L = function (H) {
                      var V = H.pathSegTypeAsLetter.toUpperCase();
                      if (V !== 'Z') {
                        switch (V) {
                          case 'M':
                          case 'L':
                          case 'T':
                          case 'C':
                          case 'S':
                          case 'Q':
                            ((D = H.x), (A = H.y));
                            break;
                          case 'H':
                            D = H.x;
                            break;
                          case 'V':
                            A = H.y;
                            break;
                        }
                        j(D, A, H.pathSegType);
                      }
                    };
                  for (
                    l._svgPathToAbsolute(d), v = d.getTotalLength(), x = [], g = 0;
                    g < d.pathSegList.numberOfItems;
                    g += 1
                  )
                    x.push(d.pathSegList.getItem(g));
                  for (p = x.concat(); O < v; ) {
                    if (((U = d.getPathSegAtLength(O)), (r = x[U]), r != T)) {
                      for (; p.length && p[0] != r; ) L(p.shift());
                      T = r;
                    }
                    switch (r.pathSegTypeAsLetter.toUpperCase()) {
                      case 'C':
                      case 'T':
                      case 'S':
                      case 'Q':
                      case 'A':
                        ((y = d.getPointAtLength(O)), j(y.x, y.y, 0));
                        break;
                    }
                    O += f;
                  }
                  for (g = 0, m = p.length; g < m; ++g) L(p[g]);
                  return B;
                }),
                  (l._svgPathToAbsolute = function (d) {
                    for (
                      var f,
                        g,
                        m,
                        v,
                        y,
                        r,
                        x = d.pathSegList,
                        p = 0,
                        T = 0,
                        _ = x.numberOfItems,
                        U = 0;
                      U < _;
                      ++U
                    ) {
                      var B = x.getItem(U),
                        G = B.pathSegTypeAsLetter;
                      if (/[MLHVCSQTA]/.test(G)) ('x' in B && (p = B.x), 'y' in B && (T = B.y));
                      else
                        switch (
                          ('x1' in B && (m = p + B.x1),
                          'x2' in B && (y = p + B.x2),
                          'y1' in B && (v = T + B.y1),
                          'y2' in B && (r = T + B.y2),
                          'x' in B && (p += B.x),
                          'y' in B && (T += B.y),
                          G)
                        ) {
                          case 'm':
                            x.replaceItem(d.createSVGPathSegMovetoAbs(p, T), U);
                            break;
                          case 'l':
                            x.replaceItem(d.createSVGPathSegLinetoAbs(p, T), U);
                            break;
                          case 'h':
                            x.replaceItem(d.createSVGPathSegLinetoHorizontalAbs(p), U);
                            break;
                          case 'v':
                            x.replaceItem(d.createSVGPathSegLinetoVerticalAbs(T), U);
                            break;
                          case 'c':
                            x.replaceItem(d.createSVGPathSegCurvetoCubicAbs(p, T, m, v, y, r), U);
                            break;
                          case 's':
                            x.replaceItem(d.createSVGPathSegCurvetoCubicSmoothAbs(p, T, y, r), U);
                            break;
                          case 'q':
                            x.replaceItem(d.createSVGPathSegCurvetoQuadraticAbs(p, T, m, v), U);
                            break;
                          case 't':
                            x.replaceItem(d.createSVGPathSegCurvetoQuadraticSmoothAbs(p, T), U);
                            break;
                          case 'a':
                            x.replaceItem(
                              d.createSVGPathSegArcAbs(
                                p,
                                T,
                                B.r1,
                                B.r2,
                                B.angle,
                                B.largeArcFlag,
                                B.sweepFlag
                              ),
                              U
                            );
                            break;
                          case 'z':
                          case 'Z':
                            ((p = f), (T = g));
                            break;
                        }
                      (G == 'M' || G == 'm') && ((f = p), (g = T));
                    }
                  }));
              })();
            },
            function (S, h, c) {
              var l = {};
              S.exports = l;
              var o = c(6);
              (c(0),
                (function () {
                  ((l.create = o.create),
                    (l.add = o.add),
                    (l.remove = o.remove),
                    (l.clear = o.clear),
                    (l.addComposite = o.addComposite),
                    (l.addBody = o.addBody),
                    (l.addConstraint = o.addConstraint));
                })());
            },
          ]);
        });
      })(mr)),
    mr.exports
  );
}
var Tx = Ex();
const Me = Gh(Tx);
var Zo, Nh;
function Cx() {
  if (Nh) return Zo;
  ((Nh = 1),
    (Zo = {
      decomp: D,
      quickDecomp: H,
      isSimple: j,
      removeCollinearPoints: V,
      removeDuplicatePoints: P,
      makeCCW: x,
    }));
  function s(M, z, q) {
    q = q || 0;
    var F = [0, 0],
      le,
      N,
      Q,
      ee,
      ue,
      oe,
      se;
    return (
      (le = M[1][1] - M[0][1]),
      (N = M[0][0] - M[1][0]),
      (Q = le * M[0][0] + N * M[0][1]),
      (ee = z[1][1] - z[0][1]),
      (ue = z[0][0] - z[1][0]),
      (oe = ee * z[0][0] + ue * z[0][1]),
      (se = le * ue - ee * N),
      ie(se, 0, q) || ((F[0] = (ue * Q - N * oe) / se), (F[1] = (le * oe - ee * Q) / se)),
      F
    );
  }
  function E(M, z, q, F) {
    var le = z[0] - M[0],
      N = z[1] - M[1],
      Q = F[0] - q[0],
      ee = F[1] - q[1];
    if (Q * N - ee * le === 0) return !1;
    var ue = (le * (q[1] - M[1]) + N * (M[0] - q[0])) / (Q * N - ee * le),
      oe = (Q * (M[1] - q[1]) + ee * (q[0] - M[0])) / (ee * le - Q * N);
    return ue >= 0 && ue <= 1 && oe >= 0 && oe <= 1;
  }
  function S(M, z, q) {
    return (z[0] - M[0]) * (q[1] - M[1]) - (q[0] - M[0]) * (z[1] - M[1]);
  }
  function h(M, z, q) {
    return S(M, z, q) > 0;
  }
  function c(M, z, q) {
    return S(M, z, q) >= 0;
  }
  function l(M, z, q) {
    return S(M, z, q) < 0;
  }
  function o(M, z, q) {
    return S(M, z, q) <= 0;
  }
  var d = [],
    f = [];
  function g(M, z, q, F) {
    if (F) {
      var le = d,
        N = f;
      ((le[0] = z[0] - M[0]), (le[1] = z[1] - M[1]), (N[0] = q[0] - z[0]), (N[1] = q[1] - z[1]));
      var Q = le[0] * N[0] + le[1] * N[1],
        ee = Math.sqrt(le[0] * le[0] + le[1] * le[1]),
        ue = Math.sqrt(N[0] * N[0] + N[1] * N[1]),
        oe = Math.acos(Q / (ee * ue));
      return oe < F;
    } else return S(M, z, q) === 0;
  }
  function m(M, z) {
    var q = z[0] - M[0],
      F = z[1] - M[1];
    return q * q + F * F;
  }
  function v(M, z) {
    var q = M.length;
    return M[z < 0 ? (z % q) + q : z % q];
  }
  function y(M) {
    M.length = 0;
  }
  function r(M, z, q, F) {
    for (var le = q; le < F; le++) M.push(z[le]);
  }
  function x(M) {
    for (var z = 0, q = M, F = 1; F < M.length; ++F)
      (q[F][1] < q[z][1] || (q[F][1] === q[z][1] && q[F][0] > q[z][0])) && (z = F);
    return h(v(M, z - 1), v(M, z), v(M, z + 1)) ? !1 : (p(M), !0);
  }
  function p(M) {
    for (var z = [], q = M.length, F = 0; F !== q; F++) z.push(M.pop());
    for (var F = 0; F !== q; F++) M[F] = z[F];
  }
  function T(M, z) {
    return l(v(M, z - 1), v(M, z), v(M, z + 1));
  }
  var _ = [],
    U = [];
  function B(M, z, q) {
    var F,
      le,
      N = _,
      Q = U;
    if (c(v(M, z + 1), v(M, z), v(M, q)) && o(v(M, z - 1), v(M, z), v(M, q))) return !1;
    le = m(v(M, z), v(M, q));
    for (var ee = 0; ee !== M.length; ++ee)
      if (
        !((ee + 1) % M.length === z || ee === z) &&
        c(v(M, z), v(M, q), v(M, ee + 1)) &&
        o(v(M, z), v(M, q), v(M, ee)) &&
        ((N[0] = v(M, z)),
        (N[1] = v(M, q)),
        (Q[0] = v(M, ee)),
        (Q[1] = v(M, ee + 1)),
        (F = s(N, Q)),
        m(v(M, z), F) < le)
      )
        return !1;
    return !0;
  }
  function G(M, z, q) {
    for (var F = 0; F !== M.length; ++F)
      if (
        !(F === z || F === q || (F + 1) % M.length === z || (F + 1) % M.length === q) &&
        E(v(M, z), v(M, q), v(M, F), v(M, F + 1))
      )
        return !1;
    return !0;
  }
  function C(M, z, q, F) {
    var le = F || [];
    if ((y(le), z < q)) for (var N = z; N <= q; N++) le.push(M[N]);
    else {
      for (var N = 0; N <= q; N++) le.push(M[N]);
      for (var N = z; N < M.length; N++) le.push(M[N]);
    }
    return le;
  }
  function O(M) {
    for (var z = [], q = [], F = [], le = [], N = Number.MAX_VALUE, Q = 0; Q < M.length; ++Q)
      if (T(M, Q)) {
        for (var ee = 0; ee < M.length; ++ee)
          if (B(M, Q, ee)) {
            ((q = O(C(M, Q, ee, le))), (F = O(C(M, ee, Q, le))));
            for (var ue = 0; ue < F.length; ue++) q.push(F[ue]);
            q.length < N && ((z = q), (N = q.length), z.push([v(M, Q), v(M, ee)]));
          }
      }
    return z;
  }
  function D(M) {
    var z = O(M);
    return z.length > 0 ? A(M, z) : [M];
  }
  function A(M, z) {
    if (z.length === 0) return [M];
    if (
      z instanceof Array &&
      z.length &&
      z[0] instanceof Array &&
      z[0].length === 2 &&
      z[0][0] instanceof Array
    ) {
      for (var q = [M], F = 0; F < z.length; F++)
        for (var le = z[F], N = 0; N < q.length; N++) {
          var Q = q[N],
            ee = A(Q, le);
          if (ee) {
            (q.splice(N, 1), q.push(ee[0], ee[1]));
            break;
          }
        }
      return q;
    } else {
      var le = z,
        F = M.indexOf(le[0]),
        N = M.indexOf(le[1]);
      return F !== -1 && N !== -1 ? [C(M, F, N), C(M, N, F)] : !1;
    }
  }
  function j(M) {
    var z = M,
      q;
    for (q = 0; q < z.length - 1; q++)
      for (var F = 0; F < q - 1; F++) if (E(z[q], z[q + 1], z[F], z[F + 1])) return !1;
    for (q = 1; q < z.length - 2; q++) if (E(z[0], z[z.length - 1], z[q], z[q + 1])) return !1;
    return !0;
  }
  function L(M, z, q, F, le) {
    le = le || 0;
    var N = z[1] - M[1],
      Q = M[0] - z[0],
      ee = N * M[0] + Q * M[1],
      ue = F[1] - q[1],
      oe = q[0] - F[0],
      se = ue * q[0] + oe * q[1],
      ge = N * oe - ue * Q;
    return ie(ge, 0, le) ? [0, 0] : [(oe * ee - Q * se) / ge, (N * se - ue * ee) / ge];
  }
  function H(M, z, q, F, le, N, Q) {
    ((N = N || 100),
      (Q = Q || 0),
      (le = le || 25),
      (z = typeof z < 'u' ? z : []),
      (q = q || []),
      (F = F || []));
    var ee = [0, 0],
      ue = [0, 0],
      oe = [0, 0],
      se = 0,
      ge = 0,
      Se = 0,
      Ue = 0,
      Ze = 0,
      Ke = 0,
      Ve = 0,
      bt = [],
      We = [],
      fe = M,
      zt = M;
    if (zt.length < 3) return z;
    if ((Q++, Q > N)) return (console.warn('quickDecomp: max level (' + N + ') reached.'), z);
    for (var he = 0; he < M.length; ++he)
      if (T(fe, he)) {
        (q.push(fe[he]), (se = ge = Number.MAX_VALUE));
        for (var Be = 0; Be < M.length; ++Be)
          (h(v(fe, he - 1), v(fe, he), v(fe, Be)) &&
            o(v(fe, he - 1), v(fe, he), v(fe, Be - 1)) &&
            ((oe = L(v(fe, he - 1), v(fe, he), v(fe, Be), v(fe, Be - 1))),
            l(v(fe, he + 1), v(fe, he), oe) &&
              ((Se = m(fe[he], oe)), Se < ge && ((ge = Se), (ue = oe), (Ke = Be)))),
            h(v(fe, he + 1), v(fe, he), v(fe, Be + 1)) &&
              o(v(fe, he + 1), v(fe, he), v(fe, Be)) &&
              ((oe = L(v(fe, he + 1), v(fe, he), v(fe, Be), v(fe, Be + 1))),
              h(v(fe, he - 1), v(fe, he), oe) &&
                ((Se = m(fe[he], oe)), Se < se && ((se = Se), (ee = oe), (Ze = Be)))));
        if (Ke === (Ze + 1) % M.length)
          ((oe[0] = (ue[0] + ee[0]) / 2),
            (oe[1] = (ue[1] + ee[1]) / 2),
            F.push(oe),
            he < Ze
              ? (r(bt, fe, he, Ze + 1),
                bt.push(oe),
                We.push(oe),
                Ke !== 0 && r(We, fe, Ke, fe.length),
                r(We, fe, 0, he + 1))
              : (he !== 0 && r(bt, fe, he, fe.length),
                r(bt, fe, 0, Ze + 1),
                bt.push(oe),
                We.push(oe),
                r(We, fe, Ke, he + 1)));
        else {
          if ((Ke > Ze && (Ze += M.length), (Ue = Number.MAX_VALUE), Ze < Ke)) return z;
          for (var Be = Ke; Be <= Ze; ++Be)
            c(v(fe, he - 1), v(fe, he), v(fe, Be)) &&
              o(v(fe, he + 1), v(fe, he), v(fe, Be)) &&
              ((Se = m(v(fe, he), v(fe, Be))),
              Se < Ue && G(fe, he, Be) && ((Ue = Se), (Ve = Be % M.length)));
          he < Ve
            ? (r(bt, fe, he, Ve + 1), Ve !== 0 && r(We, fe, Ve, zt.length), r(We, fe, 0, he + 1))
            : (he !== 0 && r(bt, fe, he, zt.length), r(bt, fe, 0, Ve + 1), r(We, fe, Ve, he + 1));
        }
        return (
          bt.length < We.length
            ? (H(bt, z, q, F, le, N, Q), H(We, z, q, F, le, N, Q))
            : (H(We, z, q, F, le, N, Q), H(bt, z, q, F, le, N, Q)),
          z
        );
      }
    return (z.push(M), z);
  }
  function V(M, z) {
    for (var q = 0, F = M.length - 1; M.length > 3 && F >= 0; --F)
      g(v(M, F - 1), v(M, F), v(M, F + 1), z) && (M.splice(F % M.length, 1), q++);
    return q;
  }
  function P(M, z) {
    for (var q = M.length - 1; q >= 1; --q)
      for (var F = M[q], le = q - 1; le >= 0; --le)
        if (W(F, M[le], z)) {
          M.splice(q, 1);
          continue;
        }
  }
  function ie(M, z, q) {
    return ((q = q || 0), Math.abs(M - z) <= q);
  }
  function W(M, z, q) {
    return ie(M[0], z[0], q) && ie(M[1], z[1], q);
  }
  return Zo;
}
var xv = Cx();
const Mx = Gh(xv),
  Rx = Z0({ __proto__: null, default: Mx }, [xv]),
  _x = { 1: 20, 2: 26, 3: 32, 4: 38, 5: 46, 6: 54, 7: 62, 8: 72, 9: 82, 10: 104 },
  Ax = { 1: 0.5, 2: 0.5, 3: 0.45, 4: 0.45, 5: 0.4, 6: 0.4, 7: 0.35, 8: 0.35, 9: 0.3, 10: 0.25 },
  Ox = {
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
  wx = {
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
  Sv = (s, E) => {
    const S = String(E).padStart(2, '0');
    return `images/${s}/level${S}.png`;
  },
  Dx = 256,
  Uh = {
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
  zx = (s) => (s * (s + 1)) / 2,
  Nx = (s) => ({
    id: s,
    level: s,
    name: Ox[s],
    theme: wx[s],
    radius: _x[s],
    restitution: Ax[s],
    friction: 0.3,
    density: 0.001,
    score: zx(s),
    svgPath: Sv(xr, s),
    color: Uh[s].color,
    glowColor: Uh[s].glow,
  }),
  za = 10,
  Sr = Object.fromEntries(Array.from({ length: za }, (s, E) => E + 1).map((s) => [s, Nx(s)]));
Array.from({ length: za }, (s, E) => Sr[E + 1]);
const Ko = 3,
  Ux = 360,
  Bx = (s) => Math.min(1, s / Ux),
  Bh = new Map(),
  Wn = (s, E, S = xr) => {
    const h = `${s}|${E}|${S}`,
      c = Bh.get(h);
    if (c) return c;
    const l = Sr[s],
      o = { ...l, radius: l.radius * Bx(E), svgPath: Sv(S, s) };
    return (Bh.set(h, o), o);
  },
  In = {
    gravityY: 1.5,
    wallThickness: 150,
    gameOverLineOffset: 80,
    restingVelocityThreshold: 0.5,
    gameOverGracePeriodMs: 1e3,
    gameOverDangerLimitMs: 5e3,
  },
  Pn = { wall: 1, item: 2, magnetTarget: 4 },
  bv = Pn.wall | Pn.item | Pn.magnetTarget,
  Lx = Pn.wall | Pn.magnetTarget,
  Ev = async () => {
    if (typeof window > 'u') return !1;
    const s = window.DeviceOrientationEvent;
    if (s && typeof s.requestPermission == 'function')
      try {
        return (await s.requestPermission()) === 'granted';
      } catch {
        return !1;
      }
    return !0;
  },
  Hx = (s) => {
    const E = w.useRef(0);
    return (
      w.useEffect(() => {
        if (!s) {
          E.current = 0;
          return;
        }
        const S = (Io.maxTiltDeg * Math.PI) / 180,
          h = (l) => Math.max(-S, Math.min(S, l)),
          c = (l) => {
            const o = l.gamma ?? 0,
              d = h((o * Io.gammaToFieldSign * Math.PI) / 180);
            E.current = d;
          };
        return (
          window.addEventListener('deviceorientation', c),
          () => {
            (window.removeEventListener('deviceorientation', c), (E.current = 0));
          }
        );
      }, [s]),
      { angleRadRef: E }
    );
  },
  Tv = typeof window < 'u' && typeof window.localStorage < 'u',
  Qi = (s) => {
    if (!Tv) return null;
    try {
      return window.localStorage.getItem(s);
    } catch {
      return null;
    }
  },
  Zi = (s, E) => {
    if (Tv)
      try {
        window.localStorage.setItem(s, E);
      } catch {}
  },
  Cv = () => {
    const s = Qi(Zt.storageKeys.bestScore);
    if (s === null) return 0;
    const E = Number(s);
    return Number.isFinite(E) ? E : 0;
  },
  jx = (s) => {
    Zi(Zt.storageKeys.bestScore, String(s));
  },
  Gx = () => {
    const s = Qi(Zt.storageKeys.scoreHistory);
    if (s === null) return [];
    try {
      const E = JSON.parse(s);
      return Array.isArray(E) ? E.filter((S) => typeof S == 'number' && Number.isFinite(S)) : [];
    } catch {
      return [];
    }
  },
  Yx = (s) => {
    const E = [s, ...Gx()].slice(0, Zt.maxScoreHistory);
    return (Zi(Zt.storageKeys.scoreHistory, JSON.stringify(E)), E);
  },
  Mv = () => {
    const s = Qi(Zt.storageKeys.isSoundOn);
    return s === null ? !0 : s === 'true';
  },
  Rv = (s) => {
    Zi(Zt.storageKeys.isSoundOn, String(s));
  },
  _v = () => Qi(Zt.storageKeys.isGyroOn) === 'true',
  Av = (s) => {
    Zi(Zt.storageKeys.isGyroOn, String(s));
  },
  Ov = () => {
    const s = Qi(Zt.storageKeys.themeId);
    return gc(s) ? s : xr;
  },
  tc = (s) => {
    Zi(Zt.storageKeys.themeId, s);
  },
  Vx = () => {
    const [s, E] = w.useState(0),
      [S, h] = w.useState(0),
      [c, l] = w.useState(!1),
      o = w.useRef(0),
      d = w.useRef(0);
    w.useEffect(() => {
      const y = Cv();
      ((d.current = y), h(y));
    }, []);
    const f = w.useCallback((y) => {
        ((o.current += y), E(o.current));
      }, []),
      g = w.useCallback((y) => {
        ((o.current = y), E(y));
      }, []),
      m = w.useCallback(() => {
        ((o.current = 0), E(0), l(!1));
      }, []),
      v = w.useCallback(() => {
        const y = o.current,
          r = y > d.current;
        return (
          r && ((d.current = y), jx(y), h(y)),
          Yx(y),
          l(r),
          { isNewRecord: r, finalScore: y }
        );
      }, []);
    return { score: s, bestScore: S, isNewRecord: c, add: f, setRaw: g, reset: m, finalize: v };
  },
  qx = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  Xx = { merge: 'sounds/punyu.mp3', special: 'sounds/punyu.mp3' },
  Qx = 0.7,
  Zx = () => {
    if (typeof window > 'u') return null;
    const s = window;
    return s.AudioContext ?? s.webkitAudioContext ?? null;
  },
  Kx = () => {
    const [s, E] = w.useState(!0),
      S = w.useRef(null),
      h = w.useRef({});
    (w.useEffect(() => {
      E(Mv());
    }, []),
      w.useEffect(() => {
        const o = Zx();
        if (!o) return;
        const d = new o();
        S.current = d;
        let f = !1;
        const g = {};
        return (
          (async () => {
            for (const [m, v] of Object.entries(Xx))
              try {
                const r = await (await fetch(qx(v))).arrayBuffer();
                if (f) return;
                const x = await d.decodeAudioData(r);
                if (f) return;
                g[m] = x;
              } catch {}
            h.current = g;
          })(),
          () => {
            ((f = !0), d.close().catch(() => {}), (S.current = null), (h.current = {}));
          }
        );
      }, []));
    const c = w.useCallback(() => {
        E((o) => {
          const d = !o;
          return (Rv(d), d);
        });
      }, []),
      l = w.useCallback(
        (o) => {
          if (!s) return;
          const d = S.current,
            f = h.current[o];
          if (!d || !f) return;
          d.state === 'suspended' && d.resume().catch(() => {});
          const g = d.createBufferSource();
          g.buffer = f;
          const m = d.createGain();
          ((m.gain.value = Qx), g.connect(m).connect(d.destination), g.start(0));
        },
        [s]
      );
    return { isSoundOn: s, toggle: c, play: l };
  },
  wv = (s) => ({
    restitution: s.restitution,
    friction: s.friction,
    density: s.density,
    label: `item-${s.level}`,
    collisionFilter: { category: Pn.item, mask: bv },
  }),
  Dv = (s) => {
    for (const E of s.parts) E.render.visible = !1;
  },
  zv = (s, E, S) => {
    s.plugin.itemData = { level: E, consumed: !1, droppedAt: S };
  },
  kx = (s, E, S, h) => {
    const c = Me.Bodies.circle(E, S, s.radius, wv(s));
    return (zv(c, s.level, h), Dv(c), c);
  },
  Jx = (s, E, S, h, c) => {
    if (c.length < 3) return null;
    const l = Me.Bodies.fromVertices(E, S, [c], wv(s));
    return l ? (zv(l, s.level, h), Dv(l), l) : null;
  },
  nc = (s) => (s.parent && s.parent !== s ? s.parent : s),
  Fn = (s) => nc(s).plugin.itemData,
  Fx = (s, E) => {
    const S = In.wallThickness,
      h = {
        isStatic: !0,
        restitution: 0.2,
        friction: 0.5,
        label: 'wall',
        collisionFilter: { category: Pn.wall },
      },
      c = Me.Bodies.rectangle(s / 2, E + S / 2, s + S * 2, S, h),
      l = Me.Bodies.rectangle(-S / 2, E / 2, S, E * 2, h),
      o = Me.Bodies.rectangle(s + S / 2, E / 2, S, E * 2, h),
      d = Me.Bodies.rectangle(s / 2, -S / 2, s + S * 2, S, { ...h, restitution: 0 });
    return { ground: c, leftWall: l, rightWall: o, ceiling: d };
  },
  $x = (s, E) => ({ x: (s.position.x + E.position.x) / 2, y: (s.position.y + E.position.y) / 2 }),
  Wx = (s) => (s < 2 || s > za ? 0 : Sr[s].score),
  Ix = () => Sr[za].score,
  pc = Zt.storageKeys.suspended,
  Px = 1,
  Qt = (s) => typeof s == 'number' && Number.isFinite(s),
  eS = (s) => {
    if (typeof s != 'object' || s === null) return null;
    const E = s;
    return !Qt(E.level) || !Qt(E.x) || !Qt(E.y)
      ? null
      : {
          level: E.level,
          x: E.x,
          y: E.y,
          vx: Qt(E.vx) ? E.vx : 0,
          vy: Qt(E.vy) ? E.vy : 0,
          angle: Qt(E.angle) ? E.angle : 0,
          angularVelocity: Qt(E.angularVelocity) ? E.angularVelocity : 0,
        };
  },
  ac = () => {
    if (typeof window > 'u' || typeof window.localStorage > 'u') return null;
    let s = null;
    try {
      s = window.localStorage.getItem(pc);
    } catch {
      return null;
    }
    if (s === null) return null;
    try {
      const E = JSON.parse(s);
      if (typeof E != 'object' || E === null) return null;
      const S = E;
      if (!Qt(S.score) || !Array.isArray(S.bodies)) return null;
      const h = [];
      for (const c of S.bodies) {
        const l = eS(c);
        l && h.push(l);
      }
      return {
        version: Qt(S.version) ? S.version : 0,
        savedAt: Qt(S.savedAt) ? S.savedAt : 0,
        score: S.score,
        themeId: gc(S.themeId) ? S.themeId : xr,
        currentItemLevel: Qt(S.currentItemLevel) ? S.currentItemLevel : 1,
        nextItemLevel: Qt(S.nextItemLevel) ? S.nextItemLevel : 1,
        skillGauge: Qt(S.skillGauge) ? S.skillGauge : 0,
        magnetUsesLeft: Qt(S.magnetUsesLeft) ? S.magnetUsesLeft : void 0,
        bodies: h,
      };
    } catch {
      return null;
    }
  },
  tS = (s) => {
    if (!(typeof window > 'u' || typeof window.localStorage > 'u'))
      try {
        const E = { ...s, version: Px, savedAt: Date.now() };
        window.localStorage.setItem(pc, JSON.stringify(E));
      } catch {}
  },
  lc = () => {
    if (!(typeof window > 'u' || typeof window.localStorage > 'u'))
      try {
        window.localStorage.removeItem(pc);
      } catch {}
  },
  nS = 32,
  aS = 14,
  Da = (s, E) => s * (1 << aS) + E,
  ji = (s, E) => s[E + 3] >= nS,
  lS = (s, E, S) => {
    const h = [];
    for (let c = 0; c < S; c += 1)
      for (let l = 0; l < E; l += 1) {
        const o = (c * E + l) * 4;
        if (!ji(s, o)) continue;
        ((c === 0 || !ji(s, ((c - 1) * E + l) * 4)) &&
          h.push({
            fromKey: Da(l, c),
            toKey: Da(l + 1, c),
            from: { x: l, y: c },
            to: { x: l + 1, y: c },
          }),
          (l === E - 1 || !ji(s, (c * E + (l + 1)) * 4)) &&
            h.push({
              fromKey: Da(l + 1, c),
              toKey: Da(l + 1, c + 1),
              from: { x: l + 1, y: c },
              to: { x: l + 1, y: c + 1 },
            }),
          (c === S - 1 || !ji(s, ((c + 1) * E + l) * 4)) &&
            h.push({
              fromKey: Da(l + 1, c + 1),
              toKey: Da(l, c + 1),
              from: { x: l + 1, y: c + 1 },
              to: { x: l, y: c + 1 },
            }),
          (l === 0 || !ji(s, (c * E + (l - 1)) * 4)) &&
            h.push({
              fromKey: Da(l, c + 1),
              toKey: Da(l, c),
              from: { x: l, y: c + 1 },
              to: { x: l, y: c },
            }));
      }
    return h;
  },
  iS = (s) => {
    const E = new Map();
    for (const c of s) {
      const l = E.get(c.fromKey);
      l ? l.push(c) : E.set(c.fromKey, [c]);
    }
    const S = new Set(),
      h = [];
    for (const c of s) {
      if (S.has(c)) continue;
      const l = [];
      let o = c;
      for (; o && !S.has(o); ) {
        (S.add(o), l.push(o.from));
        const d = E.get(o.toKey);
        o = d == null ? void 0 : d.find((f) => !S.has(f));
      }
      l.length >= 3 && h.push(l);
    }
    return h;
  },
  uS = (s, E, S) => {
    const h = S.x - E.x,
      c = S.y - E.y,
      l = Math.hypot(h, c);
    return l === 0
      ? Math.hypot(s.x - E.x, s.y - E.y)
      : Math.abs(c * s.x - h * s.y + S.x * E.y - S.y * E.x) / l;
  },
  ic = (s, E) => {
    if (s.length <= 2) return s.slice();
    let S = 0,
      h = 0;
    const c = s.length - 1;
    for (let l = 1; l < c; l += 1) {
      const o = uS(s[l], s[0], s[c]);
      o > S && ((S = o), (h = l));
    }
    if (S > E) {
      const l = ic(s.slice(0, h + 1), E),
        o = ic(s.slice(h), E);
      return [...l, ...o.slice(1)];
    }
    return [s[0], s[c]];
  },
  rS = (s, E) => {
    if (s.length <= 3) return s;
    const S = [...s, s[0]],
      h = ic(S, E);
    return (h.pop(), h);
  },
  sS = (s, E = {}) => {
    const S = E.simplifyEpsilon ?? 2,
      h = lS(s.data, s.width, s.height);
    if (h.length === 0) return null;
    const c = iS(h);
    if (c.length === 0) return null;
    let l = c[0];
    for (let o = 1; o < c.length; o += 1) c[o].length > l.length && (l = c[o]);
    return rS(l, S);
  },
  Gi = new Map(),
  ko = new Map(),
  oS = (s) => {
    const E = s.length;
    if (E === 0) return { x: 0, y: 0 };
    if (E < 3) {
      let l = 0,
        o = 0;
      for (const d of s) ((l += d.x), (o += d.y));
      return { x: l / E, y: o / E };
    }
    let S = 0,
      h = 0,
      c = 0;
    for (let l = 0; l < E; l += 1) {
      const o = s[l],
        d = s[(l + 1) % E],
        f = o.x * d.y - d.x * o.y;
      ((S += (o.x + d.x) * f), (h += (o.y + d.y) * f), (c += f));
    }
    if (c === 0) {
      let l = 0,
        o = 0;
      for (const d of s) ((l += d.x), (o += d.y));
      return { x: l / E, y: o / E };
    }
    return { x: S / (3 * c), y: h / (3 * c) };
  },
  cS = async (s) => {
    const E = s.width,
      S = s.height;
    if (typeof OffscreenCanvas < 'u') {
      const o = new OffscreenCanvas(E, S).getContext('2d');
      if (!o) throw new Error('OffscreenCanvas 2D context unavailable');
      return (o.drawImage(s, 0, 0), o.getImageData(0, 0, E, S));
    }
    const h = document.createElement('canvas');
    ((h.width = E), (h.height = S));
    const c = h.getContext('2d');
    if (!c) throw new Error('Canvas 2D context unavailable');
    return (c.drawImage(s, 0, 0), c.getImageData(0, 0, E, S));
  },
  fS = async (s, E) => {
    const S = Gi.get(s);
    if (S !== void 0) return S;
    const h = ko.get(s);
    if (h) return h;
    const c = (async () => {
      try {
        const l = await cS(E),
          o = sS(l);
        if (!o || o.length < 3) return (Gi.set(s, null), null);
        const d = oS(o),
          f = {
            vertices: o,
            centroidOffset: { x: d.x - l.width / 2, y: d.y - l.height / 2 },
            pngWidth: l.width,
            pngHeight: l.height,
          };
        return (Gi.set(s, f), f);
      } catch {
        return (Gi.set(s, null), null);
      } finally {
        ko.delete(s);
      }
    })();
    return (ko.set(s, c), c);
  },
  Nv = (s) => Gi.get(s) ?? null,
  dS = (s, E) => {
    const S = (E * 2) / s.pngWidth;
    return s.vertices.map((h) => ({
      x: (h.x - s.pngWidth / 2 - s.centroidOffset.x) * S,
      y: (h.y - s.pngHeight / 2 - s.centroidOffset.y) * S,
    }));
  };
Me.Common.setDecomp(Rx);
const Lh = new Map(),
  xc = (s) => {
    const E = Lh.get(s);
    if (E) return E;
    const S = `/ochimono-game/${s}`.replace(/\/{2,}/g, '/');
    return (Lh.set(s, S), S);
  },
  cr = (s, E) => {
    const S = (E.radius * 2) / Dx,
      h = xc(E.svgPath),
      c = Nv(h),
      l = c ? -c.centroidOffset.x * S : 0,
      o = c ? -c.centroidOffset.y * S : 0;
    s.plugin.itemRender = { textureUrl: h, scale: S, contourOffsetX: l, contourOffsetY: o };
  },
  Jo = (s, E, S, h) => {
    const c = xc(s.svgPath),
      l = Nv(c);
    if (l) {
      const o = dS(l, s.radius),
        d = Jx(s, E, S, h, o);
      if (d) return d;
    }
    return kx(s, E, S, h);
  },
  Hh = async (s, E, S) => {
    for (let h = 1; h <= za; h += 1) {
      const c = Wn(h, 1, s),
        l = xc(c.svgPath);
      if (!S.has(l)) {
        S.add(l);
        try {
          const d = await (await fetch(l)).blob(),
            f = await createImageBitmap(d);
          (E && (E.textures[l] = f), fS(l, f));
        } catch {
          const o = new Image();
          o.src = l;
        }
      }
    }
  },
  mS = ({ fieldWidth: s, fieldHeight: E }) => {
    const S = w.useRef(null),
      h = w.useRef(null),
      c = w.useRef(null),
      l = w.useRef(null),
      o = w.useRef(null),
      [d, f] = w.useState('idle'),
      [g, m] = w.useState(null),
      [v, y] = w.useState(null),
      r = w.useRef(null),
      x = w.useRef(null),
      p = w.useCallback((re) => {
        ((r.current = re), m(re));
      }, []),
      T = w.useCallback((re) => {
        ((x.current = re), y(re));
      }, []),
      _ = w.useRef(!0),
      U = w.useRef(0),
      B = w.useRef('idle'),
      G = w.useRef(null),
      C = w.useRef(s),
      O = w.useRef(E),
      D = w.useRef(new Set()),
      [A, j] = w.useState(() => Ov()),
      L = w.useRef(A);
    L.current = A;
    const H = Vx(),
      V = Kx(),
      [P, ie] = w.useState(() => _v()),
      W = w.useCallback(() => {
        ie((re) => {
          const ye = !re;
          return (ye && Ev(), Av(ye), ye);
        });
      }, []),
      M = w.useRef(H.add);
    M.current = H.add;
    const z = w.useRef(V.play);
    z.current = V.play;
    const q = w.useRef(H.finalize);
    q.current = H.finalize;
    const [F, le] = w.useState(0),
      N = w.useRef(0),
      Q = w.useCallback((re) => {
        ((N.current = re), le(re));
      }, []),
      ee = w.useCallback(
        (re) => {
          const ye = Math.min(ct.gaugeMax, N.current + re);
          ye !== N.current && Q(ye);
        },
        [Q]
      ),
      ue = w.useRef(ee);
    ue.current = ee;
    const [oe, se] = w.useState(!1),
      [ge, Se] = w.useState(!1),
      Ue = w.useRef(!1),
      [Ze, Ke] = w.useState(!1),
      [Ve, bt] = w.useState(Gl),
      We = w.useRef(Gl),
      fe = w.useCallback((re) => {
        ((We.current = re), bt(re));
      }, []),
      zt = w.useRef(!1),
      he = w.useRef(null),
      Be = w.useRef(null),
      gt = w.useRef(null),
      Sn = w.useRef(null),
      tn = w.useRef(new Set()),
      aa = w.useCallback((re) => {
        for (const ye of re.parts)
          ((ye.collisionFilter.category = Pn.magnetTarget), (ye.collisionFilter.mask = Lx));
        tn.current.add(re);
      }, []),
      An = w.useCallback(() => {
        for (const re of tn.current)
          for (const ye of re.parts)
            ((ye.collisionFilter.category = Pn.item), (ye.collisionFilter.mask = bv));
        tn.current.clear();
      }, []),
      yt = w.useCallback(() => {
        (An(),
          (gt.current = null),
          (Sn.current = null),
          he.current === 'magnet' && (he.current = null));
      }, [An]),
      la = w.useRef(yt);
    la.current = yt;
    const Tt = w.useRef(null),
      [Pa, Kt] = w.useState(null),
      Ot = w.useRef(null),
      ke = w.useRef(new Set()),
      br = w.useRef(1),
      Na = w.useCallback(() => {
        let re;
        return ((re = Math.floor(Math.random() * Ko) + 1), Wn(re, C.current, L.current));
      }, []);
    w.useEffect(() => {
      const re = S.current;
      if (!re) return;
      const ye = C.current,
        Oe = O.current,
        be = Me.Engine.create({ gravity: { x: 0, y: In.gravityY } }),
        me = Me.Render.create({
          element: re,
          engine: be,
          options: {
            width: ye,
            height: Oe,
            wireframes: !1,
            background: 'transparent',
            pixelRatio: Math.min(1.5, window.devicePixelRatio || 1),
          },
        }),
        { ground: xe, leftWall: _e, rightWall: Ae, ceiling: Ee } = Fx(ye, Oe);
      ([xe, _e, Ae, Ee].forEach((nt) => {
        nt.render.visible = !1;
      }),
        Me.World.add(be.world, [xe, _e, Ae, Ee]));
      const qe = ke.current,
        Ye = () => {
          const nt = me.context,
            ft = me.textures;
          for (const vn of qe) {
            const wt = vn.plugin.itemRender;
            if (!wt) continue;
            const Ut = ft[wt.textureUrl];
            if (!Ut) continue;
            const bn = Ut.width,
              ua = Ut.height,
              rt = bn * wt.scale,
              Ql = ua * wt.scale;
            (nt.save(),
              nt.translate(vn.position.x, vn.position.y),
              nt.rotate(vn.angle),
              nt.translate(wt.contourOffsetX, wt.contourOffsetY),
              nt.drawImage(Ut, -rt / 2, -Ql / 2, rt, Ql),
              nt.restore());
          }
        };
      (Me.Events.on(me, 'afterRender', Ye), Me.Render.run(me));
      const lt = Me.Runner.create();
      (Me.Runner.run(lt, be),
        (h.current = be),
        (c.current = me),
        (l.current = lt),
        (D.current = new Set()));
      for (const nt of vc) Hh(nt.id, me, D.current);
      const Lt = () => {
        document.hidden
          ? (Me.Runner.stop(lt), Me.Render.stop(me))
          : (Me.Render.run(me), Me.Runner.run(lt, be));
      };
      return (
        document.addEventListener('visibilitychange', Lt),
        () => {
          (document.removeEventListener('visibilitychange', Lt),
            Me.Events.off(me, 'afterRender', Ye),
            Me.Runner.stop(lt),
            Me.Render.stop(me),
            Me.World.clear(be.world, !1),
            Me.Engine.clear(be),
            me.canvas.parentNode && me.canvas.parentNode.removeChild(me.canvas),
            (me.textures = {}),
            (h.current = null),
            (c.current = null),
            (l.current = null),
            qe.clear());
        }
      );
    }, []);
    const ia = w.useCallback((re, ye) => {
      var Lt;
      const Oe = h.current;
      if (!Oe) return;
      const be = nc(re),
        me = nc(ye),
        xe = Fn(be),
        _e = Fn(me);
      if (!xe || !_e || xe.consumed || _e.consumed || xe.level !== _e.level) return;
      ((xe.consumed = !0), (_e.consumed = !0));
      const Ae = xe.level + 1,
        Ee = $x(be, me);
      (Me.World.remove(Oe.world, [be, me]), ke.current.delete(be), ke.current.delete(me));
      let qe = 0,
        Ye = !1,
        lt = lx(Ae);
      if (Ae > za)
        ((qe = Ix()), (Ye = !0), (lt += ct.bonusOnSpecialElimination), z.current('special'));
      else {
        const nt = Wn(Ae, C.current, L.current),
          ft = Jo(nt, Ee.x, Ee.y, performance.now());
        (cr(ft, nt),
          Me.World.add(Oe.world, ft),
          ke.current.add(ft),
          (qe = Wx(Ae)),
          (Ye = Ae === za),
          Ye && (lt += ct.bonusOnLevel10Created),
          z.current(Ye ? 'special' : 'merge'));
      }
      (M.current(qe),
        ue.current(lt),
        (Lt = o.current) == null || Lt.add({ x: Ee.x, y: Ee.y, score: qe, isSpecial: Ye }));
    }, []);
    (w.useEffect(() => {
      const re = h.current;
      if (!re) return;
      const ye = (Oe) => {
        for (const be of Oe.pairs) ia(be.bodyA, be.bodyB);
      };
      return (
        Me.Events.on(re, 'collisionStart', ye),
        () => {
          Me.Events.off(re, 'collisionStart', ye);
        }
      );
    }, [ia]),
      w.useEffect(() => {
        const re = h.current;
        if (!re) return;
        const ye = In.gameOverLineOffset;
        let Oe = 0;
        const be = () => {
            ((Tt.current = null), Ot.current !== null && ((Ot.current = null), Kt(null)));
          },
          me = () => {
            if (gt.current !== null)
              if (performance.now() >= gt.current) la.current();
              else {
                const lt = [];
                for (const Lt of tn.current) {
                  const nt = Fn(Lt);
                  nt && !nt.consumed && lt.push(Lt);
                }
                if (lt.length >= 2) {
                  let Lt = 0,
                    nt = 0;
                  for (const ft of lt) ((Lt += ft.position.x), (nt += ft.position.y));
                  ((Lt /= lt.length), (nt /= lt.length));
                  for (const ft of lt) {
                    const vn = Lt - ft.position.x,
                      wt = nt - ft.position.y,
                      Ut = Math.hypot(vn, wt);
                    if (Ut < 1) continue;
                    const bn = ct.magnet.forceMagnitude * ft.mass;
                    Me.Body.applyForce(ft, ft.position, { x: (vn / Ut) * bn, y: (wt / Ut) * bn });
                  }
                } else la.current();
              }
            if (B.current !== 'playing') return;
            if (zt.current) {
              Tt.current !== null &&
                ((Tt.current = null), Ot.current !== null && ((Ot.current = null), Kt(null)));
              return;
            }
            if (((Oe = (Oe + 1) % 6), Oe !== 0)) return;
            const xe = performance.now();
            let _e = !1;
            for (const Ye of ke.current) {
              const lt = Fn(Ye);
              if (
                !(!lt || lt.consumed) &&
                !(xe - lt.droppedAt < In.gameOverGracePeriodMs) &&
                !(Math.abs(Ye.velocity.y) > In.restingVelocityThreshold) &&
                Ye.bounds.min.y < ye
              ) {
                _e = !0;
                break;
              }
            }
            if (!_e) {
              be();
              return;
            }
            Tt.current === null && (Tt.current = xe);
            const Ae = xe - Tt.current,
              Ee = In.gameOverDangerLimitMs;
            if (Ae >= Ee) {
              (be(), (B.current = 'gameover'), f('gameover'));
              const Ye = q.current();
              z.current(Ye.isNewRecord ? 'highscore' : 'gameover');
              return;
            }
            const qe = Math.max(1, Math.ceil((Ee - Ae) / 1e3));
            qe !== Ot.current && ((Ot.current = qe), Kt(qe));
          };
        return (
          Me.Events.on(re, 'afterUpdate', me),
          () => {
            Me.Events.off(re, 'afterUpdate', me);
          }
        );
      }, []),
      w.useEffect(() => {
        if (h.current) {
          Hh(A, c.current, D.current);
          for (const be of ke.current) {
            const me = Fn(be);
            if (!me || me.consumed) continue;
            const xe = Wn(me.level, C.current, A);
            cr(be, xe);
          }
        }
        const ye = r.current ? Wn(r.current.level, C.current, A) : null,
          Oe = x.current ? Wn(x.current.level, C.current, A) : null;
        (p(ye), T(Oe));
      }, [A, p, T]));
    const Nt = w.useCallback((re) => {
        (j(re), tc(re));
      }, []),
      Ct = w.useCallback((re) => {
        ((Ue.current = re), Se(re));
      }, []),
      pt = w.useCallback(
        (re) => {
          Q(Math.max(0, N.current - re));
        },
        [Q]
      ),
      Ki = w.useCallback(() => {
        if (!h.current) return;
        he.current = 'shake';
        const { impulseMin: ye, impulseMax: Oe, upwardBias: be } = ct.shake;
        for (const me of ke.current) {
          const xe = Fn(me);
          if (!xe || xe.consumed) continue;
          const _e = Math.random() * Math.PI * 2,
            Ae = ye + Math.random() * (Oe - ye),
            Ee = Math.cos(_e) * Ae * me.mass,
            qe = (Math.sin(_e) * Ae - be) * me.mass;
          Me.Body.applyForce(me, me.position, { x: Ee, y: qe });
        }
        (z.current('special'), (he.current = null));
      }, []),
      ki = w.useCallback(() => {
        const re = h.current;
        if (!re || Be.current !== null) return;
        ((he.current = 'gravityFlip'), (zt.current = !0));
        const ye = In.gravityY;
        re.gravity.y = ye * ct.gravityFlip.multiplier;
        const Oe = new Map(),
          be = new Map();
        for (const me of ke.current)
          (Oe.set(me, me.frictionAir),
            be.set(me, me.restitution),
            (me.frictionAir = ct.gravityFlip.frictionAir),
            Me.Body.setVelocity(me, { x: me.velocity.x, y: ct.gravityFlip.liftKickVelocity }));
        (Ke(!0),
          z.current('special'),
          (Be.current = window.setTimeout(() => {
            const me = h.current;
            me && (me.gravity.y = ye * ct.gravityFlip.slamGravityMultiplier);
            for (const xe of ke.current)
              ((xe.frictionAir = ct.gravityFlip.slamFrictionAir),
                be.has(xe) || be.set(xe, xe.restitution),
                (xe.restitution = ct.gravityFlip.slamRestitution),
                Me.Body.setVelocity(xe, { x: xe.velocity.x, y: ct.gravityFlip.slamKickVelocity }));
            (Ke(!1),
              z.current('special'),
              (Be.current = window.setTimeout(() => {
                const xe = h.current;
                xe && (xe.gravity.y = ye);
                for (const _e of ke.current)
                  ((_e.frictionAir = Oe.get(_e) ?? 0.01), (_e.restitution = be.get(_e) ?? 0.4));
                ((Be.current = null),
                  (zt.current = !1),
                  he.current === 'gravityFlip' && (he.current = null));
              }, ct.gravityFlip.slamDurationMs)));
          }, ct.gravityFlip.durationMs)));
      }, []),
      Ji = w.useCallback(() => {
        ((he.current = 'magnet'), Ct(!0));
      }, [Ct]),
      el = w.useCallback(() => {
        Ue.current && (Ct(!1), (he.current = null));
      }, [Ct]),
      tl = w.useCallback(
        (re, ye) => {
          if (!Ue.current) return;
          const Oe = Array.from(ke.current),
            be = Me.Query.point(Oe, { x: re, y: ye });
          if (be.length === 0) return;
          const me = be[0],
            xe = Fn(me);
          if (!xe) return;
          const _e = Oe.filter((Ee) => {
            if (Ee === me) return !1;
            const qe = Fn(Ee);
            return !!qe && !qe.consumed && qe.level === xe.level;
          });
          if (_e.length === 0 || We.current <= 0) return;
          const Ae = _e[Math.floor(Math.random() * _e.length)];
          (aa(me),
            aa(Ae),
            (Sn.current = xe.level),
            (gt.current = performance.now() + ct.magnet.durationMs),
            fe(We.current - 1),
            Ct(!1),
            z.current('special'),
            pt(Hi('magnet')));
        },
        [pt, Ct, fe, aa]
      ),
      nl = w.useCallback(() => {
        N.current < ct.segmentMax || (B.current === 'playing' && se(!0));
      }, []),
      On = w.useCallback(() => {
        se(!1);
      }, []),
      al = w.useCallback(
        (re) => {
          const ye = Hi(re);
          N.current < ye ||
            (re === 'magnet' && We.current <= 0) ||
            (se(!1),
            re === 'shake'
              ? (Ki(), pt(ye))
              : re === 'gravityFlip'
                ? (ki(), pt(ye))
                : re === 'magnet' && Ji());
        },
        [Ki, ki, Ji, pt]
      ),
      nn = w.useCallback(() => {
        Be.current !== null && (window.clearTimeout(Be.current), (Be.current = null));
        const re = h.current;
        (re && (re.gravity.y = In.gravityY),
          Ke(!1),
          (zt.current = !1),
          An(),
          (gt.current = null),
          (Sn.current = null),
          (he.current = null),
          se(!1),
          Ct(!1),
          Q(0));
      }, [Ct, Q, An]),
      Er = w.useCallback(
        (re) => {
          const ye = h.current;
          if (!ye || B.current !== 'playing' || !_.current) return;
          const Oe = r.current;
          if (!Oe) return;
          const be = performance.now();
          if (be - U.current < Zt.dropCooldownMs) return;
          const me = Math.max(0, Math.min(1, re)),
            xe = Oe.radius,
            _e = xe,
            Ae = C.current - xe,
            Ee = _e + me * (Ae - _e),
            qe = Oe.radius + 4,
            Ye = Jo(Oe, Ee, qe, be);
          (cr(Ye, Oe),
            Me.World.add(ye.world, Ye),
            ke.current.add(Ye),
            z.current('drop'),
            (_.current = !1),
            (U.current = be),
            G.current !== null && window.clearTimeout(G.current),
            (G.current = window.setTimeout(() => {
              ((G.current = null),
                B.current === 'playing' && (p(x.current), T(Na()), (_.current = !0)));
            }, Zt.dropCooldownMs)));
        },
        [Na, p, T]
      ),
      ll = w.useCallback(() => {
        var re;
        (H.reset(),
          (re = o.current) == null || re.clear(),
          nn(),
          (Tt.current = null),
          (Ot.current = null),
          Kt(null),
          (br.current = 1),
          fe(Gl),
          p(Na()),
          T(Na()),
          (_.current = !0),
          (U.current = 0),
          (B.current = 'playing'),
          f('playing'));
      }, [H, Na, nn, p, fe, T]),
      Xl = w.useCallback(() => {
        const re = h.current;
        if (re) {
          for (const ye of ke.current) Me.World.remove(re.world, ye);
          ke.current.clear();
        }
        (G.current !== null && (window.clearTimeout(G.current), (G.current = null)), ll());
      }, [ll]),
      Ua = w.useCallback(() => {
        var Oe, be, me;
        if (B.current !== 'playing') return;
        const re = [];
        for (const xe of ke.current) {
          const _e = Fn(xe);
          !_e ||
            _e.consumed ||
            re.push({
              level: _e.level,
              x: xe.position.x,
              y: xe.position.y,
              vx: xe.velocity.x,
              vy: xe.velocity.y,
              angle: xe.angle,
              angularVelocity: xe.angularVelocity,
            });
        }
        tS({
          score: H.score,
          themeId: L.current,
          currentItemLevel: ((Oe = r.current) == null ? void 0 : Oe.level) ?? 1,
          nextItemLevel: ((be = x.current) == null ? void 0 : be.level) ?? 1,
          skillGauge: N.current,
          magnetUsesLeft: We.current,
          bodies: re,
        });
        const ye = h.current;
        if (ye) {
          for (const xe of ke.current) Me.World.remove(ye.world, xe);
          ke.current.clear();
        }
        (G.current !== null && (window.clearTimeout(G.current), (G.current = null)),
          (me = o.current) == null || me.clear(),
          nn(),
          (Tt.current = null),
          (Ot.current = null),
          Kt(null),
          p(null),
          T(null),
          H.reset(),
          (_.current = !0),
          (U.current = 0),
          (B.current = 'idle'),
          f('idle'));
      }, [nn, H, p, T]),
      Tr = w.useCallback(
        (re) => {
          var Ae;
          const ye = h.current;
          if (!ye) return;
          for (const Ee of ke.current) Me.World.remove(ye.world, Ee);
          (ke.current.clear(),
            G.current !== null && (window.clearTimeout(G.current), (G.current = null)),
            (Ae = o.current) == null || Ae.clear(),
            nn(),
            (Tt.current = null),
            (Ot.current = null),
            Kt(null),
            re.themeId !== L.current && (j(re.themeId), (L.current = re.themeId), tc(re.themeId)));
          const Oe = performance.now();
          for (const Ee of re.bodies) {
            if (Ee.level < 1 || Ee.level > za) continue;
            const qe = Wn(Ee.level, C.current, re.themeId),
              Ye = Jo(qe, Ee.x, Ee.y, Oe);
            (Me.Body.setVelocity(Ye, { x: Ee.vx, y: Ee.vy }),
              Me.Body.setAngle(Ye, Ee.angle),
              Me.Body.setAngularVelocity(Ye, Ee.angularVelocity),
              cr(Ye, qe),
              Me.World.add(ye.world, Ye),
              ke.current.add(Ye));
          }
          const be =
              re.currentItemLevel >= 1 && re.currentItemLevel <= Ko ? re.currentItemLevel : 1,
            me = re.nextItemLevel >= 1 && re.nextItemLevel <= Ko ? re.nextItemLevel : 1;
          (p(Wn(be, C.current, re.themeId)), T(Wn(me, C.current, re.themeId)));
          const xe = Math.max(0, Math.min(ct.gaugeMax, re.skillGauge));
          Q(xe);
          const _e = Math.max(0, Math.min(Gl, re.magnetUsesLeft ?? Gl));
          (fe(_e),
            H.reset(),
            H.setRaw(Math.max(0, re.score)),
            (_.current = !0),
            (U.current = 0),
            (B.current = 'playing'),
            f('playing'));
        },
        [nn, H, p, fe, T, Q]
      ),
      Fi = In.gameOverLineOffset;
    return {
      status: d,
      score: H.score,
      bestScore: H.bestScore,
      isNewRecord: H.isNewRecord,
      currentItem: g,
      nextItem: v,
      isSoundOn: V.isSoundOn,
      isGyroOn: P,
      toggleGyro: W,
      themeId: A,
      mergeEffectRef: o,
      canvasContainerRef: S,
      drop: Er,
      start: ll,
      restart: Xl,
      toggleSound: V.toggle,
      setThemeId: Nt,
      fieldWidth: s,
      fieldHeight: E,
      gameOverLineY: Fi,
      skillGauge: F,
      skillGaugeMax: ct.gaugeMax,
      skillSegmentMax: ct.segmentMax,
      skillSegmentCount: ct.segmentCount,
      canOpenSkillMenu: F >= ct.segmentMax,
      canUseSkill: {
        shake: F >= Hi('shake'),
        gravityFlip: F >= Hi('gravityFlip'),
        magnet: F >= Hi('magnet') && Ve > 0,
      },
      magnetUsesLeft: Ve,
      magnetMaxUses: Gl,
      isSkillMenuOpen: oe,
      openSkillMenu: nl,
      closeSkillMenu: On,
      selectSkill: al,
      isMagnetSelecting: ge,
      cancelMagnetSelecting: el,
      selectMagnetTarget: tl,
      isGravityFlipped: Ze,
      gameOverCountdown: Pa,
      suspend: Ua,
      resume: Tr,
      loadSuspended: ac,
      clearSuspended: lc,
    };
  },
  hS = ({ size: s, initialResume: E, onExitToTitle: S }) => {
    const h = mS({ fieldWidth: s.width, fieldHeight: s.height }),
      { angleRadRef: c } = Hx(h.isGyroOn),
      [l, o] = w.useState(!1),
      d = w.useCallback(() => o(!0), []),
      f = w.useCallback(() => o(!1), []),
      g = w.useCallback(() => {
        (h.suspend(), S());
      }, [h, S]),
      m = w.useRef(!1);
    return (
      w.useEffect(() => {
        m.current || ((m.current = !0), E ? h.resume(E) : h.start());
      }, [h, E]),
      K.jsxs(K.Fragment, {
        children: [
          K.jsx(Sx, {
            score: h.score,
            bestScore: h.bestScore,
            nextItem: h.nextItem,
            onOpenSettings: d,
          }),
          K.jsx('main', {
            className: Rn.main,
            children: K.jsxs('div', {
              className: Rn.field_wrapper,
              style: { width: `${s.width}px`, height: `${s.height}px` },
              children: [
                K.jsx(e1, {
                  canvasContainerRef: h.canvasContainerRef,
                  fieldWidth: s.width,
                  fieldHeight: s.height,
                  gameOverLineY: h.gameOverLineY,
                  currentItem: h.currentItem,
                  mergeEffectRef: h.mergeEffectRef,
                  canInteract: h.status === 'playing',
                  onDrop: h.drop,
                  isMagnetSelecting: h.isMagnetSelecting,
                  onMagnetSelect: h.selectMagnetTarget,
                  gyroEnabled: h.isGyroOn,
                  gyroAngleRadRef: c,
                }),
                K.jsx(cv, { effect: h.isGravityFlipped ? 'gravityFlip' : null }),
                K.jsx(ov, { active: h.isMagnetSelecting, onCancel: h.cancelMagnetSelecting }),
                K.jsx(sv, { seconds: h.status === 'playing' ? h.gameOverCountdown : null }),
                h.status === 'playing'
                  ? K.jsx('div', {
                      className: Rn.skill_button_wrapper,
                      children: K.jsx(hv, {
                        gauge: h.skillGauge,
                        segmentMax: h.skillSegmentMax,
                        segmentCount: h.skillSegmentCount,
                        canOpen: h.canOpenSkillMenu,
                        onClick: h.openSkillMenu,
                      }),
                    })
                  : null,
                h.status === 'gameover'
                  ? K.jsx(f1, {
                      score: h.score,
                      bestScore: h.bestScore,
                      isNewRecord: h.isNewRecord,
                      onRestart: h.restart,
                    })
                  : null,
              ],
            }),
          }),
          K.jsx(gv, {
            open: h.isSkillMenuOpen,
            onSelect: h.selectSkill,
            onClose: h.closeSkillMenu,
            canUse: h.canUseSkill,
            magnetUsesLeft: h.magnetUsesLeft,
            magnetMaxUses: h.magnetMaxUses,
          }),
          K.jsx(yc, {
            open: l,
            onClose: f,
            themeId: h.themeId,
            onChangeTheme: h.setThemeId,
            isSoundOn: h.isSoundOn,
            onToggleSound: h.toggleSound,
            isGyroOn: h.isGyroOn,
            onToggleGyro: h.toggleGyro,
            canSuspend: h.status === 'playing',
            onSuspend: g,
          }),
        ],
      })
    );
  },
  vS = ({ initialResume: s, onExitToTitle: E }) => {
    const S = w.useRef(null),
      [h, c] = w.useState(null);
    return (
      w.useLayoutEffect(() => {
        const l = S.current;
        if (!l) return;
        const o = l.getBoundingClientRect();
        c({ width: Math.floor(o.width), height: Math.floor(o.height) });
      }, []),
      h === null
        ? K.jsxs('div', {
            className: Rn.layout,
            children: [
              K.jsx('div', { className: Rn.top_bar_placeholder, 'aria-hidden': 'true' }),
              K.jsx('main', { ref: S, className: Rn.main }),
            ],
          })
        : K.jsx('div', {
            className: Rn.layout,
            children: K.jsx(hS, { size: h, initialResume: s, onExitToTitle: E }),
          })
    );
  },
  gS = '_banner_17jhg_1',
  yS = '_banner_info_17jhg_23',
  pS = '_message_17jhg_37',
  xS = '_button_17jhg_41',
  Yl = { banner: gS, banner_info: yS, message: pS, button: xS },
  SS = ({ banner: s, onApply: E }) =>
    s === null
      ? null
      : s.kind === 'has-update'
        ? K.jsxs('div', {
            className: Yl.banner,
            role: 'status',
            'aria-live': 'polite',
            children: [
              K.jsx('span', { className: Yl.message, children: '新しいバージョンがあります' }),
              K.jsx('button', {
                type: 'button',
                className: Yl.button,
                onClick: E,
                children: '更新',
              }),
            ],
          })
        : K.jsx('div', {
            className: `${Yl.banner} ${Yl.banner_info}`,
            role: 'status',
            'aria-live': 'polite',
            children: K.jsx('span', {
              className: Yl.message,
              children: '現在のバージョンは最新です',
            }),
          }),
  bS = '_backdrop_1weqi_1',
  ES = '_dialog_1weqi_12',
  TS = '_title_1weqi_22',
  CS = '_body_1weqi_30',
  MS = '_actions_1weqi_36',
  RS = '_button_1weqi_42',
  _S = '_yes_1weqi_57',
  AS = '_no_1weqi_63',
  $n = { backdrop: bS, dialog: ES, title: TS, body: CS, actions: MS, button: RS, yes: _S, no: AS },
  Uv = w.memo(({ open: s, onYes: E, onNo: S }) =>
    s
      ? K.jsx('div', {
          className: $n.backdrop,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '中断データの再開確認',
          children: K.jsxs('div', {
            className: $n.dialog,
            children: [
              K.jsx('h2', { className: $n.title, children: '中断データが見つかりました' }),
              K.jsx('p', { className: $n.body, children: '中断したところから再開しますか？' }),
              K.jsxs('div', {
                className: $n.actions,
                children: [
                  K.jsx('button', {
                    type: 'button',
                    className: `${$n.button} ${$n.yes}`,
                    onClick: E,
                    children: 'はい',
                  }),
                  K.jsx('button', {
                    type: 'button',
                    className: `${$n.button} ${$n.no}`,
                    onClick: S,
                    children: 'いいえ',
                  }),
                ],
              }),
            ],
          }),
        })
      : null
  );
Uv.displayName = 'ResumeDialog';
const OS = '_screen_4fsd3_1',
  wS = '_settings_4fsd3_10',
  DS = '_hero_4fsd3_35',
  zS = '_emojis_4fsd3_43',
  NS = '_title_4fsd3_51',
  US = '_lead_4fsd3_61',
  BS = '_info_4fsd3_68',
  LS = '_best_4fsd3_76',
  HS = '_suspended_4fsd3_86',
  jS = '_suspended_badge_4fsd3_97',
  GS = '_suspended_score_4fsd3_104',
  YS = '_info_label_4fsd3_110',
  VS = '_info_value_4fsd3_117',
  qS = '_actions_4fsd3_124',
  XS = '_start_4fsd3_135',
  QS = '_check_update_4fsd3_154',
  ZS = '_version_4fsd3_176',
  St = {
    screen: OS,
    settings: wS,
    hero: DS,
    emojis: zS,
    title: NS,
    lead: US,
    info: BS,
    best: LS,
    suspended: HS,
    suspended_badge: jS,
    suspended_score: GS,
    info_label: YS,
    info_value: VS,
    actions: qS,
    start: XS,
    check_update: QS,
    version: ZS,
  },
  KS = ({
    onStart: s,
    onCheckUpdate: E,
    isCheckingUpdate: S,
    bestScore: h,
    suspendedScore: c,
    onOpenSettings: l,
  }) => {
    const o = c !== null;
    return K.jsxs('div', {
      className: St.screen,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'タイトル画面',
      children: [
        K.jsx('button', {
          type: 'button',
          className: St.settings,
          onClick: l,
          'aria-label': '設定を開く',
          children: K.jsx('span', { 'aria-hidden': 'true', children: '⚙' }),
        }),
        K.jsxs('div', {
          className: St.hero,
          children: [
            K.jsx('div', { className: St.emojis, 'aria-hidden': 'true', children: '💖🍓🐱' }),
            K.jsx('h1', { className: St.title, children: 'にゃんハートいちごパズル' }),
            K.jsxs('p', {
              className: St.lead,
              children: [
                '同じアイテム同士をくっつけて',
                K.jsx('br', {}),
                'にゃんハートいちごをめざそう！',
              ],
            }),
          ],
        }),
        K.jsxs('div', {
          className: St.info,
          children: [
            K.jsxs('div', {
              className: St.best,
              'aria-label': `ベストスコア ${h}`,
              children: [
                K.jsx('span', { className: St.info_label, children: 'BEST' }),
                K.jsx('span', { className: St.info_value, children: h }),
              ],
            }),
            o
              ? K.jsxs('div', {
                  className: St.suspended,
                  'aria-label': `中断データあり (スコア ${c})`,
                  children: [
                    K.jsx('span', { className: St.suspended_badge, children: '中断データあり' }),
                    K.jsxs('span', {
                      className: St.suspended_score,
                      children: [
                        K.jsx('span', { className: St.info_label, children: 'SCORE' }),
                        K.jsx('span', { className: St.info_value, children: c }),
                      ],
                    }),
                  ],
                })
              : null,
          ],
        }),
        K.jsxs('div', {
          className: St.actions,
          children: [
            K.jsx('button', {
              type: 'button',
              className: St.start,
              onClick: s,
              children: o ? '続きから始める' : 'スタート',
            }),
            K.jsx('button', {
              type: 'button',
              className: St.check_update,
              onClick: E,
              disabled: S,
              children: S ? '確認中…' : '更新確認',
            }),
          ],
        }),
        K.jsxs('p', { className: St.version, children: ['v', '1.0.40'] }),
      ],
    });
  },
  kS = 'modulepreload',
  JS = function (s) {
    return '/ochimono-game/' + s;
  },
  jh = {},
  FS = function (E, S, h) {
    let c = Promise.resolve();
    if (S && S.length > 0) {
      let o = function (g) {
        return Promise.all(
          g.map((m) =>
            Promise.resolve(m).then(
              (v) => ({ status: 'fulfilled', value: v }),
              (v) => ({ status: 'rejected', reason: v })
            )
          )
        );
      };
      document.getElementsByTagName('link');
      const d = document.querySelector('meta[property=csp-nonce]'),
        f = (d == null ? void 0 : d.nonce) || (d == null ? void 0 : d.getAttribute('nonce'));
      c = o(
        S.map((g) => {
          if (((g = JS(g)), g in jh)) return;
          jh[g] = !0;
          const m = g.endsWith('.css'),
            v = m ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${g}"]${v}`)) return;
          const y = document.createElement('link');
          if (
            ((y.rel = m ? 'stylesheet' : kS),
            m || (y.as = 'script'),
            (y.crossOrigin = ''),
            (y.href = g),
            f && y.setAttribute('nonce', f),
            document.head.appendChild(y),
            m)
          )
            return new Promise((r, x) => {
              (y.addEventListener('load', r),
                y.addEventListener('error', () => x(new Error(`Unable to preload CSS for ${g}`))));
            });
        })
      );
    }
    function l(o) {
      const d = new Event('vite:preloadError', { cancelable: !0 });
      if (((d.payload = o), window.dispatchEvent(d), !d.defaultPrevented)) throw o;
    }
    return c.then((o) => {
      for (const d of o || []) d.status === 'rejected' && l(d.reason);
      return E().catch(l);
    });
  };
function $S(s = {}) {
  const {
    immediate: E = !1,
    onNeedRefresh: S,
    onOfflineReady: h,
    onRegistered: c,
    onRegisteredSW: l,
    onRegisterError: o,
  } = s;
  let d, f, g;
  const m = async (y = !0) => {
    (await f, g == null || g());
  };
  async function v() {
    if ('serviceWorker' in navigator) {
      if (
        ((d = await FS(async () => {
          const { Workbox: y } = await import('./workbox-window.prod.es5-BIl4cyR9.js');
          return { Workbox: y };
        }, [])
          .then(
            ({ Workbox: y }) =>
              new y('/ochimono-game/sw.js', { scope: '/ochimono-game/', type: 'classic' })
          )
          .catch((y) => {
            o == null || o(y);
          })),
        !d)
      )
        return;
      g = () => {
        d == null || d.messageSkipWaiting();
      };
      {
        let y = !1;
        const r = () => {
          ((y = !0),
            d == null ||
              d.addEventListener('controlling', (x) => {
                x.isUpdate && window.location.reload();
              }),
            S == null || S());
        };
        (d.addEventListener('installed', (x) => {
          typeof x.isUpdate > 'u'
            ? typeof x.isExternal < 'u' && x.isExternal
              ? r()
              : !y && (h == null || h())
            : x.isUpdate || h == null || h();
        }),
          d.addEventListener('waiting', r));
      }
      d.register({ immediate: E })
        .then((y) => {
          l ? l('/ochimono-game/sw.js', y) : c == null || c(y);
        })
        .catch((y) => {
          o == null || o(y);
        });
    }
  }
  return ((f = v()), m);
}
function WS(s = {}) {
  const {
      immediate: E = !0,
      onNeedRefresh: S,
      onOfflineReady: h,
      onRegistered: c,
      onRegisteredSW: l,
      onRegisterError: o,
    } = s,
    [d, f] = w.useState(!1),
    [g, m] = w.useState(!1),
    [v] = w.useState(() =>
      $S({
        immediate: E,
        onOfflineReady() {
          (m(!0), h == null || h());
        },
        onNeedRefresh() {
          (f(!0), S == null || S());
        },
        onRegistered: c,
        onRegisteredSW: l,
        onRegisterError: o,
      })
    );
  return { needRefresh: [d, f], offlineReady: [g, m], updateServiceWorker: v };
}
const IS = 2500,
  PS = 1500,
  e2 = () => {
    const s = w.useRef(null),
      {
        needRefresh: [E],
        updateServiceWorker: S,
      } = WS({
        onRegisteredSW: (y, r) => {
          s.current = r ?? null;
        },
      }),
      [h, c] = w.useState(!1),
      [l, o] = w.useState(!1),
      d = w.useRef(null),
      f = w.useRef(E);
    w.useEffect(() => {
      f.current = E;
    }, [E]);
    const g = w.useCallback(async () => {
        if (!h && !f.current) {
          (c(!0), o(!1));
          try {
            const y = s.current;
            (y && (await y.update()),
              await new Promise((r) => {
                window.setTimeout(r, PS);
              }));
          } catch {}
          (c(!1),
            f.current ||
              (o(!0),
              d.current !== null && window.clearTimeout(d.current),
              (d.current = window.setTimeout(() => {
                (o(!1), (d.current = null));
              }, IS))));
        }
      }, [h]),
      m = w.useCallback(() => {
        S(!0);
      }, [S]);
    return {
      banner: E ? { kind: 'has-update' } : l ? { kind: 'up-to-date' } : null,
      checkForUpdate: g,
      isChecking: h,
      applyUpdate: m,
    };
  },
  t2 = ({ onStart: s, onResume: E }) => {
    const [S] = w.useState(() => Cv()),
      [h, c] = w.useState(() => ac()),
      [l, o] = w.useState(() => Ov()),
      [d, f] = w.useState(() => Mv()),
      g = w.useCallback((H) => {
        (tc(H), o(H));
      }, []),
      m = w.useCallback(() => {
        f((H) => {
          const V = !H;
          return (Rv(V), V);
        });
      }, []),
      [v, y] = w.useState(() => _v()),
      r = w.useCallback(() => {
        y((H) => {
          const V = !H;
          return (V && Ev(), Av(V), V);
        });
      }, []),
      [x, p] = w.useState(!1),
      T = w.useCallback(() => p(!0), []),
      _ = w.useCallback(() => p(!1), []),
      [U, B] = w.useState(null),
      G = w.useCallback(() => {
        const H = ac();
        H ? B(H) : s();
      }, [s]),
      C = w.useCallback(() => {
        if (!U) return;
        const H = U;
        (B(null), lc(), c(null), E(H));
      }, [U, E]),
      O = w.useCallback(() => {
        (lc(), B(null), c(null), s());
      }, [s]),
      { banner: D, checkForUpdate: A, isChecking: j, applyUpdate: L } = e2();
    return K.jsxs('div', {
      className: Rn.layout,
      children: [
        K.jsx('main', {
          className: Rn.main,
          children: K.jsx('div', {
            className: Rn.field_placeholder,
            children: K.jsx(KS, {
              onStart: G,
              onCheckUpdate: A,
              isCheckingUpdate: j,
              bestScore: S,
              suspendedScore: (h == null ? void 0 : h.score) ?? null,
              onOpenSettings: T,
            }),
          }),
        }),
        K.jsx(SS, { banner: D, onApply: L }),
        K.jsx(yc, {
          open: x,
          onClose: _,
          themeId: l,
          onChangeTheme: g,
          isSoundOn: d,
          onToggleSound: m,
          isGyroOn: v,
          onToggleGyro: r,
          canSuspend: !1,
          onSuspend: () => {},
        }),
        K.jsx(Uv, { open: U !== null, onYes: C, onNo: O }),
      ],
    });
  },
  n2 = () => {
    const [s, E] = w.useState({ kind: 'pre-start' }),
      S = w.useCallback(() => {
        E({ kind: 'in-game', resume: null });
      }, []),
      h = w.useCallback((l) => {
        E({ kind: 'in-game', resume: l });
      }, []),
      c = w.useCallback(() => {
        E({ kind: 'pre-start' });
      }, []);
    return s.kind === 'pre-start'
      ? K.jsx(t2, { onStart: S, onResume: h })
      : K.jsx(vS, { initialResume: s.resume, onExitToTitle: c });
  },
  a2 = () => K.jsx('div', { className: Up.index, children: K.jsx(n2, {}) }),
  l2 = () => K.jsx('div', { children: K.jsx('h1', { children: 'Not Found' }) });
function i2() {
  return K.jsxs(Py, {
    children: [
      K.jsx($o, { path: '/', element: K.jsx(a2, {}) }),
      K.jsx($o, { path: '*', element: K.jsx(l2, {}) }),
    ],
  });
}
const Bv = document.getElementById('root');
if (!Bv) throw new Error('Failed to find #root element');
ty.createRoot(Bv).render(K.jsx(Tp, { basename: '/ochimono-game', children: K.jsx(i2, {}) }));
