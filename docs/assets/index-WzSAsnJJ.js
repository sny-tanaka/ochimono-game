function Y0(s, E) {
  for (var b = 0; b < E.length; b++) {
    const h = E[b];
    if (typeof h != 'string' && !Array.isArray(h)) {
      for (const o in h)
        if (o !== 'default' && !(o in s)) {
          const l = Object.getOwnPropertyDescriptor(h, o);
          l && Object.defineProperty(s, o, l.get ? l : { enumerable: !0, get: () => h[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const E = document.createElement('link').relList;
  if (E && E.supports && E.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) h(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === 'childList')
        for (const c of l.addedNodes) c.tagName === 'LINK' && c.rel === 'modulepreload' && h(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function b(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (l.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (l.credentials = 'omit')
          : (l.credentials = 'same-origin'),
      l
    );
  }
  function h(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = b(o);
    fetch(o.href, l);
  }
})();
var rh =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function jh(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, 'default') ? s.default : s;
}
var wc = { exports: {} },
  Ui = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sh;
function V0() {
  if (sh) return Ui;
  sh = 1;
  var s = Symbol.for('react.transitional.element'),
    E = Symbol.for('react.fragment');
  function b(h, o, l) {
    var c = null;
    if ((l !== void 0 && (c = '' + l), o.key !== void 0 && (c = '' + o.key), 'key' in o)) {
      l = {};
      for (var d in o) d !== 'key' && (l[d] = o[d]);
    } else l = o;
    return ((o = l.ref), { $$typeof: s, type: h, key: c, ref: o !== void 0 ? o : null, props: l });
  }
  return ((Ui.Fragment = E), (Ui.jsx = b), (Ui.jsxs = b), Ui);
}
var ch;
function q0() {
  return (ch || ((ch = 1), (wc.exports = V0())), wc.exports);
}
var J = q0(),
  zc = { exports: {} },
  Bi = {},
  Nc = { exports: {} },
  Uc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oh;
function X0() {
  return (
    oh ||
      ((oh = 1),
      (function (s) {
        function E(A, U) {
          var q = A.length;
          A.push(U);
          e: for (; 0 < q; ) {
            var $ = (q - 1) >>> 1,
              ie = A[$];
            if (0 < o(ie, U)) ((A[$] = U), (A[q] = ie), (q = $));
            else break e;
          }
        }
        function b(A) {
          return A.length === 0 ? null : A[0];
        }
        function h(A) {
          if (A.length === 0) return null;
          var U = A[0],
            q = A.pop();
          if (q !== U) {
            A[0] = q;
            e: for (var $ = 0, ie = A.length, N = ie >>> 1; $ < N; ) {
              var Z = 2 * ($ + 1) - 1,
                P = A[Z],
                ue = Z + 1,
                ce = A[ue];
              if (0 > o(P, q))
                ue < ie && 0 > o(ce, P)
                  ? ((A[$] = ce), (A[ue] = q), ($ = ue))
                  : ((A[$] = P), (A[Z] = q), ($ = Z));
              else if (ue < ie && 0 > o(ce, q)) ((A[$] = ce), (A[ue] = q), ($ = ue));
              else break e;
            }
          }
          return U;
        }
        function o(A, U) {
          var q = A.sortIndex - U.sortIndex;
          return q !== 0 ? q : A.id - U.id;
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
          var c = Date,
            d = c.now();
          s.unstable_now = function () {
            return c.now() - d;
          };
        }
        var f = [],
          g = [],
          m = 1,
          v = null,
          y = 3,
          r = !1,
          S = !1,
          p = !1,
          C = !1,
          R = typeof setTimeout == 'function' ? setTimeout : null,
          z = typeof clearTimeout == 'function' ? clearTimeout : null,
          B = typeof setImmediate < 'u' ? setImmediate : null;
        function Y(A) {
          for (var U = b(g); U !== null; ) {
            if (U.callback === null) h(g);
            else if (U.startTime <= A) (h(g), (U.sortIndex = U.expirationTime), E(f, U));
            else break;
            U = b(g);
          }
        }
        function T(A) {
          if (((p = !1), Y(A), !S))
            if (b(f) !== null) ((S = !0), D || ((D = !0), V()));
            else {
              var U = b(g);
              U !== null && le(T, U.startTime - A);
            }
        }
        var D = !1,
          O = -1,
          _ = 5,
          H = -1;
        function L() {
          return C ? !0 : !(s.unstable_now() - H < _);
        }
        function j() {
          if (((C = !1), D)) {
            var A = s.unstable_now();
            H = A;
            var U = !0;
            try {
              e: {
                ((S = !1), p && ((p = !1), z(O), (O = -1)), (r = !0));
                var q = y;
                try {
                  t: {
                    for (Y(A), v = b(f); v !== null && !(v.expirationTime > A && L()); ) {
                      var $ = v.callback;
                      if (typeof $ == 'function') {
                        ((v.callback = null), (y = v.priorityLevel));
                        var ie = $(v.expirationTime <= A);
                        if (((A = s.unstable_now()), typeof ie == 'function')) {
                          ((v.callback = ie), Y(A), (U = !0));
                          break t;
                        }
                        (v === b(f) && h(f), Y(A));
                      } else h(f);
                      v = b(f);
                    }
                    if (v !== null) U = !0;
                    else {
                      var N = b(g);
                      (N !== null && le(T, N.startTime - A), (U = !1));
                    }
                  }
                  break e;
                } finally {
                  ((v = null), (y = q), (r = !1));
                }
                U = void 0;
              }
            } finally {
              U ? V() : (D = !1);
            }
          }
        }
        var V;
        if (typeof B == 'function')
          V = function () {
            B(j);
          };
        else if (typeof MessageChannel < 'u') {
          var I = new MessageChannel(),
            ae = I.port2;
          ((I.port1.onmessage = j),
            (V = function () {
              ae.postMessage(null);
            }));
        } else
          V = function () {
            R(j, 0);
          };
        function le(A, U) {
          O = R(function () {
            A(s.unstable_now());
          }, U);
        }
        ((s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (A) {
            A.callback = null;
          }),
          (s.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (_ = 0 < A ? Math.floor(1e3 / A) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return y;
          }),
          (s.unstable_next = function (A) {
            switch (y) {
              case 1:
              case 2:
              case 3:
                var U = 3;
                break;
              default:
                U = y;
            }
            var q = y;
            y = U;
            try {
              return A();
            } finally {
              y = q;
            }
          }),
          (s.unstable_requestPaint = function () {
            C = !0;
          }),
          (s.unstable_runWithPriority = function (A, U) {
            switch (A) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                A = 3;
            }
            var q = y;
            y = A;
            try {
              return U();
            } finally {
              y = q;
            }
          }),
          (s.unstable_scheduleCallback = function (A, U, q) {
            var $ = s.unstable_now();
            switch (
              (typeof q == 'object' && q !== null
                ? ((q = q.delay), (q = typeof q == 'number' && 0 < q ? $ + q : $))
                : (q = $),
              A)
            ) {
              case 1:
                var ie = -1;
                break;
              case 2:
                ie = 250;
                break;
              case 5:
                ie = 1073741823;
                break;
              case 4:
                ie = 1e4;
                break;
              default:
                ie = 5e3;
            }
            return (
              (ie = q + ie),
              (A = {
                id: m++,
                callback: U,
                priorityLevel: A,
                startTime: q,
                expirationTime: ie,
                sortIndex: -1,
              }),
              q > $
                ? ((A.sortIndex = q),
                  E(g, A),
                  b(f) === null && A === b(g) && (p ? (z(O), (O = -1)) : (p = !0), le(T, q - $)))
                : ((A.sortIndex = ie), E(f, A), S || r || ((S = !0), D || ((D = !0), V()))),
              A
            );
          }),
          (s.unstable_shouldYield = L),
          (s.unstable_wrapCallback = function (A) {
            var U = y;
            return function () {
              var q = y;
              y = U;
              try {
                return A.apply(this, arguments);
              } finally {
                y = q;
              }
            };
          }));
      })(Uc)),
    Uc
  );
}
var fh;
function Q0() {
  return (fh || ((fh = 1), (Nc.exports = X0())), Nc.exports);
}
var Bc = { exports: {} },
  Ee = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dh;
function Z0() {
  if (dh) return Ee;
  dh = 1;
  var s = Symbol.for('react.transitional.element'),
    E = Symbol.for('react.portal'),
    b = Symbol.for('react.fragment'),
    h = Symbol.for('react.strict_mode'),
    o = Symbol.for('react.profiler'),
    l = Symbol.for('react.consumer'),
    c = Symbol.for('react.context'),
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
  var S = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    p = Object.assign,
    C = {};
  function R(N, Z, P) {
    ((this.props = N), (this.context = Z), (this.refs = C), (this.updater = P || S));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (N, Z) {
      if (typeof N != 'object' && typeof N != 'function' && N != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, N, Z, 'setState');
    }),
    (R.prototype.forceUpdate = function (N) {
      this.updater.enqueueForceUpdate(this, N, 'forceUpdate');
    }));
  function z() {}
  z.prototype = R.prototype;
  function B(N, Z, P) {
    ((this.props = N), (this.context = Z), (this.refs = C), (this.updater = P || S));
  }
  var Y = (B.prototype = new z());
  ((Y.constructor = B), p(Y, R.prototype), (Y.isPureReactComponent = !0));
  var T = Array.isArray;
  function D() {}
  var O = { H: null, A: null, T: null, S: null },
    _ = Object.prototype.hasOwnProperty;
  function H(N, Z, P) {
    var ue = P.ref;
    return { $$typeof: s, type: N, key: Z, ref: ue !== void 0 ? ue : null, props: P };
  }
  function L(N, Z) {
    return H(N.type, Z, N.props);
  }
  function j(N) {
    return typeof N == 'object' && N !== null && N.$$typeof === s;
  }
  function V(N) {
    var Z = { '=': '=0', ':': '=2' };
    return (
      '$' +
      N.replace(/[=:]/g, function (P) {
        return Z[P];
      })
    );
  }
  var I = /\/+/g;
  function ae(N, Z) {
    return typeof N == 'object' && N !== null && N.key != null ? V('' + N.key) : Z.toString(36);
  }
  function le(N) {
    switch (N.status) {
      case 'fulfilled':
        return N.value;
      case 'rejected':
        throw N.reason;
      default:
        switch (
          (typeof N.status == 'string'
            ? N.then(D, D)
            : ((N.status = 'pending'),
              N.then(
                function (Z) {
                  N.status === 'pending' && ((N.status = 'fulfilled'), (N.value = Z));
                },
                function (Z) {
                  N.status === 'pending' && ((N.status = 'rejected'), (N.reason = Z));
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
  function A(N, Z, P, ue, ce) {
    var se = typeof N;
    (se === 'undefined' || se === 'boolean') && (N = null);
    var ve = !1;
    if (N === null) ve = !0;
    else
      switch (se) {
        case 'bigint':
        case 'string':
        case 'number':
          ve = !0;
          break;
        case 'object':
          switch (N.$$typeof) {
            case s:
            case E:
              ve = !0;
              break;
            case m:
              return ((ve = N._init), A(ve(N._payload), Z, P, ue, ce));
          }
      }
    if (ve)
      return (
        (ce = ce(N)),
        (ve = ue === '' ? '.' + ae(N, 0) : ue),
        T(ce)
          ? ((P = ''),
            ve != null && (P = ve.replace(I, '$&/') + '/'),
            A(ce, Z, P, '', function (ke) {
              return ke;
            }))
          : ce != null &&
            (j(ce) &&
              (ce = L(
                ce,
                P +
                  (ce.key == null || (N && N.key === ce.key)
                    ? ''
                    : ('' + ce.key).replace(I, '$&/') + '/') +
                  ve
              )),
            Z.push(ce)),
        1
      );
    ve = 0;
    var be = ue === '' ? '.' : ue + ':';
    if (T(N))
      for (var Ue = 0; Ue < N.length; Ue++)
        ((ue = N[Ue]), (se = be + ae(ue, Ue)), (ve += A(ue, Z, P, se, ce)));
    else if (((Ue = r(N)), typeof Ue == 'function'))
      for (N = Ue.call(N), Ue = 0; !(ue = N.next()).done; )
        ((ue = ue.value), (se = be + ae(ue, Ue++)), (ve += A(ue, Z, P, se, ce)));
    else if (se === 'object') {
      if (typeof N.then == 'function') return A(le(N), Z, P, ue, ce);
      throw (
        (Z = String(N)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (Z === '[object Object]' ? 'object with keys {' + Object.keys(N).join(', ') + '}' : Z) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return ve;
  }
  function U(N, Z, P) {
    if (N == null) return N;
    var ue = [],
      ce = 0;
    return (
      A(N, ue, '', '', function (se) {
        return Z.call(P, se, ce++);
      }),
      ue
    );
  }
  function q(N) {
    if (N._status === -1) {
      var Z = N._result;
      ((Z = Z()),
        Z.then(
          function (P) {
            (N._status === 0 || N._status === -1) && ((N._status = 1), (N._result = P));
          },
          function (P) {
            (N._status === 0 || N._status === -1) && ((N._status = 2), (N._result = P));
          }
        ),
        N._status === -1 && ((N._status = 0), (N._result = Z)));
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var $ =
      typeof reportError == 'function'
        ? reportError
        : function (N) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var Z = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof N == 'object' && N !== null && typeof N.message == 'string'
                    ? String(N.message)
                    : String(N),
                error: N,
              });
              if (!window.dispatchEvent(Z)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', N);
              return;
            }
            console.error(N);
          },
    ie = {
      map: U,
      forEach: function (N, Z, P) {
        U(
          N,
          function () {
            Z.apply(this, arguments);
          },
          P
        );
      },
      count: function (N) {
        var Z = 0;
        return (
          U(N, function () {
            Z++;
          }),
          Z
        );
      },
      toArray: function (N) {
        return (
          U(N, function (Z) {
            return Z;
          }) || []
        );
      },
      only: function (N) {
        if (!j(N))
          throw Error('React.Children.only expected to receive a single React element child.');
        return N;
      },
    };
  return (
    (Ee.Activity = v),
    (Ee.Children = ie),
    (Ee.Component = R),
    (Ee.Fragment = b),
    (Ee.Profiler = o),
    (Ee.PureComponent = B),
    (Ee.StrictMode = h),
    (Ee.Suspense = f),
    (Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O),
    (Ee.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (N) {
        return O.H.useMemoCache(N);
      },
    }),
    (Ee.cache = function (N) {
      return function () {
        return N.apply(null, arguments);
      };
    }),
    (Ee.cacheSignal = function () {
      return null;
    }),
    (Ee.cloneElement = function (N, Z, P) {
      if (N == null) throw Error('The argument must be a React element, but you passed ' + N + '.');
      var ue = p({}, N.props),
        ce = N.key;
      if (Z != null)
        for (se in (Z.key !== void 0 && (ce = '' + Z.key), Z))
          !_.call(Z, se) ||
            se === 'key' ||
            se === '__self' ||
            se === '__source' ||
            (se === 'ref' && Z.ref === void 0) ||
            (ue[se] = Z[se]);
      var se = arguments.length - 2;
      if (se === 1) ue.children = P;
      else if (1 < se) {
        for (var ve = Array(se), be = 0; be < se; be++) ve[be] = arguments[be + 2];
        ue.children = ve;
      }
      return H(N.type, ce, ue);
    }),
    (Ee.createContext = function (N) {
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
        (N.Consumer = { $$typeof: l, _context: N }),
        N
      );
    }),
    (Ee.createElement = function (N, Z, P) {
      var ue,
        ce = {},
        se = null;
      if (Z != null)
        for (ue in (Z.key !== void 0 && (se = '' + Z.key), Z))
          _.call(Z, ue) && ue !== 'key' && ue !== '__self' && ue !== '__source' && (ce[ue] = Z[ue]);
      var ve = arguments.length - 2;
      if (ve === 1) ce.children = P;
      else if (1 < ve) {
        for (var be = Array(ve), Ue = 0; Ue < ve; Ue++) be[Ue] = arguments[Ue + 2];
        ce.children = be;
      }
      if (N && N.defaultProps)
        for (ue in ((ve = N.defaultProps), ve)) ce[ue] === void 0 && (ce[ue] = ve[ue]);
      return H(N, se, ce);
    }),
    (Ee.createRef = function () {
      return { current: null };
    }),
    (Ee.forwardRef = function (N) {
      return { $$typeof: d, render: N };
    }),
    (Ee.isValidElement = j),
    (Ee.lazy = function (N) {
      return { $$typeof: m, _payload: { _status: -1, _result: N }, _init: q };
    }),
    (Ee.memo = function (N, Z) {
      return { $$typeof: g, type: N, compare: Z === void 0 ? null : Z };
    }),
    (Ee.startTransition = function (N) {
      var Z = O.T,
        P = {};
      O.T = P;
      try {
        var ue = N(),
          ce = O.S;
        (ce !== null && ce(P, ue),
          typeof ue == 'object' && ue !== null && typeof ue.then == 'function' && ue.then(D, $));
      } catch (se) {
        $(se);
      } finally {
        (Z !== null && P.types !== null && (Z.types = P.types), (O.T = Z));
      }
    }),
    (Ee.unstable_useCacheRefresh = function () {
      return O.H.useCacheRefresh();
    }),
    (Ee.use = function (N) {
      return O.H.use(N);
    }),
    (Ee.useActionState = function (N, Z, P) {
      return O.H.useActionState(N, Z, P);
    }),
    (Ee.useCallback = function (N, Z) {
      return O.H.useCallback(N, Z);
    }),
    (Ee.useContext = function (N) {
      return O.H.useContext(N);
    }),
    (Ee.useDebugValue = function () {}),
    (Ee.useDeferredValue = function (N, Z) {
      return O.H.useDeferredValue(N, Z);
    }),
    (Ee.useEffect = function (N, Z) {
      return O.H.useEffect(N, Z);
    }),
    (Ee.useEffectEvent = function (N) {
      return O.H.useEffectEvent(N);
    }),
    (Ee.useId = function () {
      return O.H.useId();
    }),
    (Ee.useImperativeHandle = function (N, Z, P) {
      return O.H.useImperativeHandle(N, Z, P);
    }),
    (Ee.useInsertionEffect = function (N, Z) {
      return O.H.useInsertionEffect(N, Z);
    }),
    (Ee.useLayoutEffect = function (N, Z) {
      return O.H.useLayoutEffect(N, Z);
    }),
    (Ee.useMemo = function (N, Z) {
      return O.H.useMemo(N, Z);
    }),
    (Ee.useOptimistic = function (N, Z) {
      return O.H.useOptimistic(N, Z);
    }),
    (Ee.useReducer = function (N, Z, P) {
      return O.H.useReducer(N, Z, P);
    }),
    (Ee.useRef = function (N) {
      return O.H.useRef(N);
    }),
    (Ee.useState = function (N) {
      return O.H.useState(N);
    }),
    (Ee.useSyncExternalStore = function (N, Z, P) {
      return O.H.useSyncExternalStore(N, Z, P);
    }),
    (Ee.useTransition = function () {
      return O.H.useTransition();
    }),
    (Ee.version = '19.2.5'),
    Ee
  );
}
var mh;
function ao() {
  return (mh || ((mh = 1), (Bc.exports = Z0())), Bc.exports);
}
var Lc = { exports: {} },
  Dt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hh;
function K0() {
  if (hh) return Dt;
  hh = 1;
  var s = ao();
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
  function b() {}
  var h = {
      d: {
        f: b,
        r: function () {
          throw Error(E(522));
        },
        D: b,
        C: b,
        L: b,
        m: b,
        X: b,
        S: b,
        M: b,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for('react.portal');
  function l(f, g, m) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: v == null ? null : '' + v,
      children: f,
      containerInfo: g,
      implementation: m,
    };
  }
  var c = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
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
      var g = c.T,
        m = h.p;
      try {
        if (((c.T = null), (h.p = 2), f)) return f();
      } finally {
        ((c.T = g), (h.p = m), h.d.f());
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
      return c.H.useFormState(f, g, m);
    }),
    (Dt.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (Dt.version = '19.2.5'),
    Dt
  );
}
var vh;
function k0() {
  if (vh) return Lc.exports;
  vh = 1;
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
  return (s(), (Lc.exports = K0()), Lc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gh;
function J0() {
  if (gh) return Bi;
  gh = 1;
  var s = Q0(),
    E = ao(),
    b = k0();
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
  function o(e) {
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
  function c(e) {
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
        for (var x = !1, M = i.child; M; ) {
          if (M === n) {
            ((x = !0), (n = i), (a = u));
            break;
          }
          if (M === a) {
            ((x = !0), (a = i), (n = u));
            break;
          }
          M = M.sibling;
        }
        if (!x) {
          for (M = u.child; M; ) {
            if (M === n) {
              ((x = !0), (n = u), (a = i));
              break;
            }
            if (M === a) {
              ((x = !0), (a = u), (n = i));
              break;
            }
            M = M.sibling;
          }
          if (!x) throw Error(h(189));
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
    S = Symbol.for('react.portal'),
    p = Symbol.for('react.fragment'),
    C = Symbol.for('react.strict_mode'),
    R = Symbol.for('react.profiler'),
    z = Symbol.for('react.consumer'),
    B = Symbol.for('react.context'),
    Y = Symbol.for('react.forward_ref'),
    T = Symbol.for('react.suspense'),
    D = Symbol.for('react.suspense_list'),
    O = Symbol.for('react.memo'),
    _ = Symbol.for('react.lazy'),
    H = Symbol.for('react.activity'),
    L = Symbol.for('react.memo_cache_sentinel'),
    j = Symbol.iterator;
  function V(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (j && e[j]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var I = Symbol.for('react.client.reference');
  function ae(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === I ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case p:
        return 'Fragment';
      case R:
        return 'Profiler';
      case C:
        return 'StrictMode';
      case T:
        return 'Suspense';
      case D:
        return 'SuspenseList';
      case H:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case S:
          return 'Portal';
        case B:
          return e.displayName || 'Context';
        case z:
          return (e._context.displayName || 'Context') + '.Consumer';
        case Y:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case O:
          return ((t = e.displayName || null), t !== null ? t : ae(e.type) || 'Memo');
        case _:
          ((t = e._payload), (e = e._init));
          try {
            return ae(e(t));
          } catch {}
      }
    return null;
  }
  var le = Array.isArray,
    A = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = { pending: !1, data: null, method: null, action: null },
    $ = [],
    ie = -1;
  function N(e) {
    return { current: e };
  }
  function Z(e) {
    0 > ie || ((e.current = $[ie]), ($[ie] = null), ie--);
  }
  function P(e, t) {
    (ie++, ($[ie] = e.current), (e.current = t));
  }
  var ue = N(null),
    ce = N(null),
    se = N(null),
    ve = N(null);
  function be(e, t) {
    switch ((P(se, t), P(ce, e), P(ue, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Dm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = Dm(t)), (e = wm(t, e)));
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
    (Z(ue), P(ue, e));
  }
  function Ue() {
    (Z(ue), Z(ce), Z(se));
  }
  function ke(e) {
    e.memoizedState !== null && P(ve, e);
    var t = ue.current,
      n = wm(t, e.type);
    t !== n && (P(ce, e), P(ue, n));
  }
  function qe(e) {
    (ce.current === e && (Z(ue), Z(ce)), ve.current === e && (Z(ve), (Di._currentValue = q)));
  }
  var Be, rt;
  function He(e) {
    if (Be === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((Be = (t && t[1]) || ''),
          (rt =
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
      Be +
      e +
      rt
    );
  }
  var oe = !1;
  function _t(e, t) {
    if (!e || oe) return '';
    oe = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var ne = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(ne.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(ne, []);
                } catch (W) {
                  var F = W;
                }
                Reflect.construct(e, [], ne);
              } else {
                try {
                  ne.call();
                } catch (W) {
                  F = W;
                }
                e.call(ne.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (W) {
                F = W;
              }
              (ne = e()) && typeof ne.catch == 'function' && ne.catch(function () {});
            }
          } catch (W) {
            if (W && F && typeof W.stack == 'string') return [W.stack, F.stack];
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
        x = u[0],
        M = u[1];
      if (x && M) {
        var G = x.split(`
`),
          k = M.split(`
`);
        for (i = a = 0; a < G.length && !G[a].includes('DetermineComponentFrameRoot'); ) a++;
        for (; i < k.length && !k[i].includes('DetermineComponentFrameRoot'); ) i++;
        if (a === G.length || i === k.length)
          for (a = G.length - 1, i = k.length - 1; 1 <= a && 0 <= i && G[a] !== k[i]; ) i--;
        for (; 1 <= a && 0 <= i; a--, i--)
          if (G[a] !== k[i]) {
            if (a !== 1 || i !== 1)
              do
                if ((a--, i--, 0 > i || G[a] !== k[i])) {
                  var ee =
                    `
` + G[a].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      ee.includes('<anonymous>') &&
                      (ee = ee.replace('<anonymous>', e.displayName)),
                    ee
                  );
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      ((oe = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : '') ? He(n) : '';
  }
  function pe(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return He(e.type);
      case 16:
        return He('Lazy');
      case 13:
        return e.child !== t && t !== null ? He('Suspense Fallback') : He('Suspense');
      case 19:
        return He('SuspenseList');
      case 0:
      case 15:
        return _t(e.type, !1);
      case 11:
        return _t(e.type.render, !1);
      case 1:
        return _t(e.type, !0);
      case 31:
        return He('Activity');
      default:
        return '';
    }
  }
  function je(e) {
    try {
      var t = '',
        n = null;
      do ((t += pe(e, n)), (n = e), (e = e.return));
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
  var xt = Object.prototype.hasOwnProperty,
    dn = s.unstable_scheduleCallback,
    En = s.unstable_cancelCallback,
    ua = s.unstable_shouldYield,
    zt = s.unstable_requestPaint,
    pt = s.unstable_now,
    mn = s.unstable_getCurrentPriorityLevel,
    bt = s.unstable_ImmediatePriority,
    Pe = s.unstable_UserBlockingPriority,
    ra = s.unstable_NormalPriority,
    It = s.unstable_LowPriority,
    Cn = s.unstable_IdlePriority,
    Sr = s.log,
    Tn = s.unstable_setDisableYieldValue,
    hn = null,
    At = null;
  function vn(e) {
    if ((typeof Sr == 'function' && Tn(e), At && typeof At.setStrictMode == 'function'))
      try {
        At.setStrictMode(hn, e);
      } catch {}
  }
  var Ot = Math.clz32 ? Math.clz32 : Er,
    xr = Math.log,
    br = Math.LN2;
  function Er(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((xr(e) / br) | 0)) | 0);
  }
  var al = 256,
    ll = 262144,
    gn = 4194304;
  function zn(e) {
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
  function sa(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0,
      u = e.suspendedLanes,
      x = e.pingedLanes;
    e = e.warmLanes;
    var M = a & 134217727;
    return (
      M !== 0
        ? ((a = M & ~u),
          a !== 0
            ? (i = zn(a))
            : ((x &= M), x !== 0 ? (i = zn(x)) : n || ((n = M & ~e), n !== 0 && (i = zn(n)))))
        : ((M = a & ~u),
          M !== 0
            ? (i = zn(M))
            : x !== 0
              ? (i = zn(x))
              : n || ((n = a & ~e), n !== 0 && (i = zn(n)))),
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
  function La(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function il(e, t) {
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
  function ul() {
    var e = gn;
    return ((gn <<= 1), (gn & 62914560) === 0 && (gn = 4194304), e);
  }
  function Zl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ha(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Cr(e, t, n, a, i, u) {
    var x = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var M = e.entanglements,
      G = e.expirationTimes,
      k = e.hiddenUpdates;
    for (n = x & ~n; 0 < n; ) {
      var ee = 31 - Ot(n),
        ne = 1 << ee;
      ((M[ee] = 0), (G[ee] = -1));
      var F = k[ee];
      if (F !== null)
        for (k[ee] = null, ee = 0; ee < F.length; ee++) {
          var W = F[ee];
          W !== null && (W.lane &= -536870913);
        }
      n &= ~ne;
    }
    (a !== 0 && re(e, a, 0),
      u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(x & ~t)));
  }
  function re(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - Ot(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function ge(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var a = 31 - Ot(n),
        i = 1 << a;
      ((i & t) | (e[a] & t) && (e[a] |= t), (n &= ~i));
    }
  }
  function _e(e, t) {
    var n = t & -t;
    return ((n = (n & 42) !== 0 ? 1 : Se(n)), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n);
  }
  function Se(e) {
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
  function me(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function Re() {
    var e = U.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : eh(e.type));
  }
  function Xe(e, t) {
    var n = U.p;
    try {
      return ((U.p = e), t());
    } finally {
      U.p = n;
    }
  }
  var Qe = Math.random().toString(36).slice(2),
    xe = '__reactFiber$' + Qe,
    Ae = '__reactProps$' + Qe,
    Le = '__reactContainer$' + Qe,
    nt = '__reactEvents$' + Qe,
    Nt = '__reactListeners$' + Qe,
    qt = '__reactHandles$' + Qe,
    Ie = '__reactResources$' + Qe,
    Mn = '__reactMarker$' + Qe;
  function yn(e) {
    (delete e[xe], delete e[Ae], delete e[nt], delete e[Nt], delete e[qt]);
  }
  function Et(e) {
    var t = e[xe];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Le] || n[xe])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = jm(e); e !== null; ) {
            if ((n = e[xe])) return n;
            e = jm(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Ut(e) {
    if ((e = e[xe] || e[Le])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function ja(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(h(33));
  }
  function ca(e) {
    var t = e[Ie];
    return (t || (t = e[Ie] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function st(e) {
    e[Mn] = !0;
  }
  var Kl = new Set(),
    po = {};
  function Ga(e, t) {
    (rl(e, t), rl(e + 'Capture', t));
  }
  function rl(e, t) {
    for (po[e] = t, e = 0; e < t.length; e++) Kl.add(t[e]);
  }
  var wv = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    So = {},
    xo = {};
  function zv(e) {
    return xt.call(xo, e)
      ? !0
      : xt.call(So, e)
        ? !1
        : wv.test(e)
          ? (xo[e] = !0)
          : ((So[e] = !0), !1);
  }
  function Ki(e, t, n) {
    if (zv(t))
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
  function ki(e, t, n) {
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
  function Nn(e, t, n, a) {
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
  function Pt(e) {
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
  function bo(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Nv(e, t, n) {
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
          set: function (x) {
            ((n = '' + x), u.call(this, x));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (x) {
            n = '' + x;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Tr(e) {
    if (!e._valueTracker) {
      var t = bo(e) ? 'checked' : 'value';
      e._valueTracker = Nv(e, t, '' + e[t]);
    }
  }
  function Eo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      a = '';
    return (
      e && (a = bo(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = a),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ji(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Uv = /[\n"\\]/g;
  function en(e) {
    return e.replace(Uv, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Mr(e, t, n, a, i, u, x, M) {
    ((e.name = ''),
      x != null && typeof x != 'function' && typeof x != 'symbol' && typeof x != 'boolean'
        ? (e.type = x)
        : e.removeAttribute('type'),
      t != null
        ? x === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Pt(t))
          : e.value !== '' + Pt(t) && (e.value = '' + Pt(t))
        : (x !== 'submit' && x !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Rr(e, x, Pt(t))
        : n != null
          ? Rr(e, x, Pt(n))
          : a != null && e.removeAttribute('value'),
      i == null && u != null && (e.defaultChecked = !!u),
      i != null && (e.checked = i && typeof i != 'function' && typeof i != 'symbol'),
      M != null && typeof M != 'function' && typeof M != 'symbol' && typeof M != 'boolean'
        ? (e.name = '' + Pt(M))
        : e.removeAttribute('name'));
  }
  function Co(e, t, n, a, i, u, x, M) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || n != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) {
        Tr(e);
        return;
      }
      ((n = n != null ? '' + Pt(n) : ''),
        (t = t != null ? '' + Pt(t) : n),
        M || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? i),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (e.checked = M ? e.checked : !!a),
      (e.defaultChecked = !!a),
      x != null &&
        typeof x != 'function' &&
        typeof x != 'symbol' &&
        typeof x != 'boolean' &&
        (e.name = x),
      Tr(e));
  }
  function Rr(e, t, n) {
    (t === 'number' && Ji(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n);
  }
  function sl(e, t, n, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        ((i = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && a && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + Pt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          ((e[i].selected = !0), a && (e[i].defaultSelected = !0));
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function To(e, t, n) {
    if (t != null && ((t = '' + Pt(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + Pt(n) : '';
  }
  function Mo(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(h(92));
        if (le(a)) {
          if (1 < a.length) throw Error(h(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ''), (t = n));
    }
    ((n = Pt(t)),
      (e.defaultValue = n),
      (a = e.textContent),
      a === n && a !== '' && a !== null && (e.value = a),
      Tr(e));
  }
  function cl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Bv = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function Ro(e, t, n) {
    var a = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : a
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || Bv.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function _o(e, t, n) {
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
      for (var i in t) ((a = t[i]), t.hasOwnProperty(i) && n[i] !== a && Ro(e, i, a));
    } else for (var u in t) t.hasOwnProperty(u) && Ro(e, u, t[u]);
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
  var Lv = new Map([
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
    Hv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Fi(e) {
    return Hv.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Un() {}
  var Ar = null;
  function Or(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ol = null,
    fl = null;
  function Ao(e) {
    var t = Ut(e);
    if (t && (e = t.stateNode)) {
      var n = e[Ae] || null;
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
              n = n.querySelectorAll('input[name="' + en('' + t) + '"][type="radio"]'), t = 0;
              t < n.length;
              t++
            ) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var i = a[Ae] || null;
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
            for (t = 0; t < n.length; t++) ((a = n[t]), a.form === e.form && Eo(a));
          }
          break e;
        case 'textarea':
          To(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && sl(e, !!n.multiple, t, !1));
      }
    }
  }
  var Dr = !1;
  function Oo(e, t, n) {
    if (Dr) return e(t, n);
    Dr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Dr = !1),
        (ol !== null || fl !== null) &&
          (Lu(), ol && ((t = ol), (e = fl), (fl = ol = null), Ao(t), e)))
      )
        for (t = 0; t < e.length; t++) Ao(e[t]);
    }
  }
  function kl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[Ae] || null;
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
  var Bn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    wr = !1;
  if (Bn)
    try {
      var Jl = {};
      (Object.defineProperty(Jl, 'passive', {
        get: function () {
          wr = !0;
        },
      }),
        window.addEventListener('test', Jl, Jl),
        window.removeEventListener('test', Jl, Jl));
    } catch {
      wr = !1;
    }
  var oa = null,
    zr = null,
    $i = null;
  function Do() {
    if ($i) return $i;
    var e,
      t = zr,
      n = t.length,
      a,
      i = 'value' in oa ? oa.value : oa.textContent,
      u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var x = n - e;
    for (a = 1; a <= x && t[n - a] === i[u - a]; a++);
    return ($i = i.slice(e, 1 < a ? 1 - a : void 0));
  }
  function Wi(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ii() {
    return !0;
  }
  function wo() {
    return !1;
  }
  function Bt(e) {
    function t(n, a, i, u, x) {
      ((this._reactName = n),
        (this._targetInst = i),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = x),
        (this.currentTarget = null));
      for (var M in e) e.hasOwnProperty(M) && ((n = e[M]), (this[M] = n ? n(u) : u[M]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Ii
          : wo),
        (this.isPropagationStopped = wo),
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
            (this.isDefaultPrevented = Ii));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ii));
        },
        persist: function () {},
        isPersistent: Ii,
      }),
      t
    );
  }
  var Ya = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Pi = Bt(Ya),
    Fl = v({}, Ya, { view: 0, detail: 0 }),
    jv = Bt(Fl),
    Nr,
    Ur,
    $l,
    eu = v({}, Fl, {
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
          : (e !== $l &&
              ($l && e.type === 'mousemove'
                ? ((Nr = e.screenX - $l.screenX), (Ur = e.screenY - $l.screenY))
                : (Ur = Nr = 0),
              ($l = e)),
            Nr);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Ur;
      },
    }),
    zo = Bt(eu),
    Gv = v({}, eu, { dataTransfer: 0 }),
    Yv = Bt(Gv),
    Vv = v({}, Fl, { relatedTarget: 0 }),
    Br = Bt(Vv),
    qv = v({}, Ya, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Xv = Bt(qv),
    Qv = v({}, Ya, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Zv = Bt(Qv),
    Kv = v({}, Ya, { data: 0 }),
    No = Bt(Kv),
    kv = {
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
    Jv = {
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
    Fv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function $v(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Fv[e]) ? !!t[e] : !1;
  }
  function Lr() {
    return $v;
  }
  var Wv = v({}, Fl, {
      key: function (e) {
        if (e.key) {
          var t = kv[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Wi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Jv[e.keyCode] || 'Unidentified'
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
        return e.type === 'keypress' ? Wi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Wi(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Iv = Bt(Wv),
    Pv = v({}, eu, {
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
    Uo = Bt(Pv),
    eg = v({}, Fl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Lr,
    }),
    tg = Bt(eg),
    ng = v({}, Ya, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ag = Bt(ng),
    lg = v({}, eu, {
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
    ig = Bt(lg),
    ug = v({}, Ya, { newState: 0, oldState: 0 }),
    rg = Bt(ug),
    sg = [9, 13, 27, 32],
    Hr = Bn && 'CompositionEvent' in window,
    Wl = null;
  Bn && 'documentMode' in document && (Wl = document.documentMode);
  var cg = Bn && 'TextEvent' in window && !Wl,
    Bo = Bn && (!Hr || (Wl && 8 < Wl && 11 >= Wl)),
    Lo = ' ',
    Ho = !1;
  function jo(e, t) {
    switch (e) {
      case 'keyup':
        return sg.indexOf(t.keyCode) !== -1;
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
  function Go(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var dl = !1;
  function og(e, t) {
    switch (e) {
      case 'compositionend':
        return Go(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Ho = !0), Lo);
      case 'textInput':
        return ((e = t.data), e === Lo && Ho ? null : e);
      default:
        return null;
    }
  }
  function fg(e, t) {
    if (dl)
      return e === 'compositionend' || (!Hr && jo(e, t))
        ? ((e = Do()), ($i = zr = oa = null), (dl = !1), e)
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
        return Bo && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var dg = {
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
  function Yo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!dg[e.type] : t === 'textarea';
  }
  function Vo(e, t, n, a) {
    (ol ? (fl ? fl.push(a) : (fl = [a])) : (ol = a),
      (t = Xu(t, 'onChange')),
      0 < t.length &&
        ((n = new Pi('onChange', 'change', null, n, a)), e.push({ event: n, listeners: t })));
  }
  var Il = null,
    Pl = null;
  function mg(e) {
    Tm(e, 0);
  }
  function tu(e) {
    var t = ja(e);
    if (Eo(t)) return e;
  }
  function qo(e, t) {
    if (e === 'change') return t;
  }
  var Xo = !1;
  if (Bn) {
    var jr;
    if (Bn) {
      var Gr = 'oninput' in document;
      if (!Gr) {
        var Qo = document.createElement('div');
        (Qo.setAttribute('oninput', 'return;'), (Gr = typeof Qo.oninput == 'function'));
      }
      jr = Gr;
    } else jr = !1;
    Xo = jr && (!document.documentMode || 9 < document.documentMode);
  }
  function Zo() {
    Il && (Il.detachEvent('onpropertychange', Ko), (Pl = Il = null));
  }
  function Ko(e) {
    if (e.propertyName === 'value' && tu(Pl)) {
      var t = [];
      (Vo(t, Pl, e, Or(e)), Oo(mg, t));
    }
  }
  function hg(e, t, n) {
    e === 'focusin'
      ? (Zo(), (Il = t), (Pl = n), Il.attachEvent('onpropertychange', Ko))
      : e === 'focusout' && Zo();
  }
  function vg(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return tu(Pl);
  }
  function gg(e, t) {
    if (e === 'click') return tu(t);
  }
  function yg(e, t) {
    if (e === 'input' || e === 'change') return tu(t);
  }
  function pg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Xt = typeof Object.is == 'function' ? Object.is : pg;
  function ei(e, t) {
    if (Xt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!xt.call(t, i) || !Xt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function ko(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Jo(e, t) {
    var n = ko(e);
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
      n = ko(n);
    }
  }
  function Fo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Fo(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function $o(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Ji(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ji(e.document);
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
  var Sg = Bn && 'documentMode' in document && 11 >= document.documentMode,
    ml = null,
    Vr = null,
    ti = null,
    qr = !1;
  function Wo(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    qr ||
      ml == null ||
      ml !== Ji(a) ||
      ((a = ml),
      'selectionStart' in a && Yr(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (ti && ei(ti, a)) ||
        ((ti = a),
        (a = Xu(Vr, 'onSelect')),
        0 < a.length &&
          ((t = new Pi('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: a }),
          (t.target = ml))));
  }
  function Va(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var hl = {
      animationend: Va('Animation', 'AnimationEnd'),
      animationiteration: Va('Animation', 'AnimationIteration'),
      animationstart: Va('Animation', 'AnimationStart'),
      transitionrun: Va('Transition', 'TransitionRun'),
      transitionstart: Va('Transition', 'TransitionStart'),
      transitioncancel: Va('Transition', 'TransitionCancel'),
      transitionend: Va('Transition', 'TransitionEnd'),
    },
    Xr = {},
    Io = {};
  Bn &&
    ((Io = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete hl.animationend.animation,
      delete hl.animationiteration.animation,
      delete hl.animationstart.animation),
    'TransitionEvent' in window || delete hl.transitionend.transition);
  function qa(e) {
    if (Xr[e]) return Xr[e];
    if (!hl[e]) return e;
    var t = hl[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Io) return (Xr[e] = t[n]);
    return e;
  }
  var Po = qa('animationend'),
    ef = qa('animationiteration'),
    tf = qa('animationstart'),
    xg = qa('transitionrun'),
    bg = qa('transitionstart'),
    Eg = qa('transitioncancel'),
    nf = qa('transitionend'),
    af = new Map(),
    Qr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  Qr.push('scrollEnd');
  function pn(e, t) {
    (af.set(e, t), Ga(t, [e]));
  }
  var nu =
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
    tn = [],
    vl = 0,
    Zr = 0;
  function au() {
    for (var e = vl, t = (Zr = vl = 0); t < e; ) {
      var n = tn[t];
      tn[t++] = null;
      var a = tn[t];
      tn[t++] = null;
      var i = tn[t];
      tn[t++] = null;
      var u = tn[t];
      if (((tn[t++] = null), a !== null && i !== null)) {
        var x = a.pending;
        (x === null ? (i.next = i) : ((i.next = x.next), (x.next = i)), (a.pending = i));
      }
      u !== 0 && lf(n, i, u);
    }
  }
  function lu(e, t, n, a) {
    ((tn[vl++] = e),
      (tn[vl++] = t),
      (tn[vl++] = n),
      (tn[vl++] = a),
      (Zr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function Kr(e, t, n, a) {
    return (lu(e, t, n, a), iu(e));
  }
  function Xa(e, t) {
    return (lu(e, null, null, t), iu(e));
  }
  function lf(e, t, n) {
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
          ((i = 31 - Ot(n)),
          (e = u.hiddenUpdates),
          (a = e[i]),
          a === null ? (e[i] = [t]) : a.push(t),
          (t.lane = n | 536870912)),
        u)
      : null;
  }
  function iu(e) {
    if (50 < Ci) throw ((Ci = 0), (tc = null), Error(h(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var gl = {};
  function Cg(e, t, n, a) {
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
  function Qt(e, t, n, a) {
    return new Cg(e, t, n, a);
  }
  function kr(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Ln(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Qt(e.tag, t, e.key, e.mode)),
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
  function uf(e, t) {
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
  function uu(e, t, n, a, i, u) {
    var x = 0;
    if (((a = e), typeof e == 'function')) kr(e) && (x = 1);
    else if (typeof e == 'string')
      x = A0(e, n, ue.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case H:
          return ((e = Qt(31, n, t, i)), (e.elementType = H), (e.lanes = u), e);
        case p:
          return Qa(n.children, i, u, t);
        case C:
          ((x = 8), (i |= 24));
          break;
        case R:
          return ((e = Qt(12, n, t, i | 2)), (e.elementType = R), (e.lanes = u), e);
        case T:
          return ((e = Qt(13, n, t, i)), (e.elementType = T), (e.lanes = u), e);
        case D:
          return ((e = Qt(19, n, t, i)), (e.elementType = D), (e.lanes = u), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case B:
                x = 10;
                break e;
              case z:
                x = 9;
                break e;
              case Y:
                x = 11;
                break e;
              case O:
                x = 14;
                break e;
              case _:
                ((x = 16), (a = null));
                break e;
            }
          ((x = 29), (n = Error(h(130, e === null ? 'null' : typeof e, ''))), (a = null));
      }
    return ((t = Qt(x, n, t, i)), (t.elementType = e), (t.type = a), (t.lanes = u), t);
  }
  function Qa(e, t, n, a) {
    return ((e = Qt(7, e, a, t)), (e.lanes = n), e);
  }
  function Jr(e, t, n) {
    return ((e = Qt(6, e, null, t)), (e.lanes = n), e);
  }
  function rf(e) {
    var t = Qt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Fr(e, t, n) {
    return (
      (t = Qt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var sf = new WeakMap();
  function nn(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = sf.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: je(t) }), sf.set(e, t), t);
    }
    return { value: e, source: t, stack: je(t) };
  }
  var yl = [],
    pl = 0,
    ru = null,
    ni = 0,
    an = [],
    ln = 0,
    fa = null,
    Rn = 1,
    _n = '';
  function Hn(e, t) {
    ((yl[pl++] = ni), (yl[pl++] = ru), (ru = e), (ni = t));
  }
  function cf(e, t, n) {
    ((an[ln++] = Rn), (an[ln++] = _n), (an[ln++] = fa), (fa = e));
    var a = Rn;
    e = _n;
    var i = 32 - Ot(a) - 1;
    ((a &= ~(1 << i)), (n += 1));
    var u = 32 - Ot(t) + i;
    if (30 < u) {
      var x = i - (i % 5);
      ((u = (a & ((1 << x) - 1)).toString(32)),
        (a >>= x),
        (i -= x),
        (Rn = (1 << (32 - Ot(t) + i)) | (n << i) | a),
        (_n = u + e));
    } else ((Rn = (1 << u) | (n << i) | a), (_n = e));
  }
  function $r(e) {
    e.return !== null && (Hn(e, 1), cf(e, 1, 0));
  }
  function Wr(e) {
    for (; e === ru; ) ((ru = yl[--pl]), (yl[pl] = null), (ni = yl[--pl]), (yl[pl] = null));
    for (; e === fa; )
      ((fa = an[--ln]),
        (an[ln] = null),
        (_n = an[--ln]),
        (an[ln] = null),
        (Rn = an[--ln]),
        (an[ln] = null));
  }
  function of(e, t) {
    ((an[ln++] = Rn), (an[ln++] = _n), (an[ln++] = fa), (Rn = t.id), (_n = t.overflow), (fa = e));
  }
  var Ct = null,
    et = null,
    Ne = !1,
    da = null,
    un = !1,
    Ir = Error(h(519));
  function ma(e) {
    var t = Error(
      h(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    );
    throw (ai(nn(t, e)), Ir);
  }
  function ff(e) {
    var t = e.stateNode,
      n = e.type,
      a = e.memoizedProps;
    switch (((t[xe] = e), (t[Ae] = a), n)) {
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
        for (n = 0; n < Mi.length; n++) De(Mi[n], t);
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
          Co(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
        break;
      case 'select':
        De('invalid', t);
        break;
      case 'textarea':
        (De('invalid', t), Mo(t, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      a.suppressHydrationWarning === !0 ||
      Am(t.textContent, n)
        ? (a.popover != null && (De('beforetoggle', t), De('toggle', t)),
          a.onScroll != null && De('scroll', t),
          a.onScrollEnd != null && De('scrollend', t),
          a.onClick != null && (t.onclick = Un),
          (t = !0))
        : (t = !1),
      t || ma(e, !0));
  }
  function df(e) {
    for (Ct = e.return; Ct; )
      switch (Ct.tag) {
        case 5:
        case 31:
        case 13:
          un = !1;
          return;
        case 27:
        case 3:
          un = !0;
          return;
        default:
          Ct = Ct.return;
      }
  }
  function Sl(e) {
    if (e !== Ct) return !1;
    if (!Ne) return (df(e), (Ne = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type), (n = !(n !== 'form' && n !== 'button') || gc(e.type, e.memoizedProps))),
        (n = !n)),
      n && et && ma(e),
      df(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(h(317));
      et = Hm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(h(317));
      et = Hm(e);
    } else
      t === 27
        ? ((t = et), _a(e.type) ? ((e = bc), (bc = null), (et = e)) : (et = t))
        : (et = Ct ? sn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Za() {
    ((et = Ct = null), (Ne = !1));
  }
  function Pr() {
    var e = da;
    return (e !== null && (Gt === null ? (Gt = e) : Gt.push.apply(Gt, e), (da = null)), e);
  }
  function ai(e) {
    da === null ? (da = [e]) : da.push(e);
  }
  var es = N(null),
    Ka = null,
    jn = null;
  function ha(e, t, n) {
    (P(es, t._currentValue), (t._currentValue = n));
  }
  function Gn(e) {
    ((e._currentValue = es.current), Z(es));
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
        var x = i.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var M = u;
          u = i;
          for (var G = 0; G < t.length; G++)
            if (M.context === t[G]) {
              ((u.lanes |= n),
                (M = u.alternate),
                M !== null && (M.lanes |= n),
                ts(u.return, n, e),
                a || (x = null));
              break e;
            }
          u = M.next;
        }
      } else if (i.tag === 18) {
        if (((x = i.return), x === null)) throw Error(h(341));
        ((x.lanes |= n), (u = x.alternate), u !== null && (u.lanes |= n), ts(x, n, e), (x = null));
      } else x = i.child;
      if (x !== null) x.return = i;
      else
        for (x = i; x !== null; ) {
          if (x === e) {
            x = null;
            break;
          }
          if (((i = x.sibling), i !== null)) {
            ((i.return = x.return), (x = i));
            break;
          }
          x = x.return;
        }
      i = x;
    }
  }
  function xl(e, t, n, a) {
    e = null;
    for (var i = t, u = !1; i !== null; ) {
      if (!u) {
        if ((i.flags & 524288) !== 0) u = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var x = i.alternate;
        if (x === null) throw Error(h(387));
        if (((x = x.memoizedProps), x !== null)) {
          var M = i.type;
          Xt(i.pendingProps.value, x.value) || (e !== null ? e.push(M) : (e = [M]));
        }
      } else if (i === ve.current) {
        if (((x = i.alternate), x === null)) throw Error(h(387));
        x.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(Di) : (e = [Di]));
      }
      i = i.return;
    }
    (e !== null && ns(t, e, n, a), (t.flags |= 262144));
  }
  function su(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Xt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function ka(e) {
    ((Ka = e), (jn = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function Tt(e) {
    return mf(Ka, e);
  }
  function cu(e, t) {
    return (Ka === null && ka(e), mf(e, t));
  }
  function mf(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), jn === null)) {
      if (e === null) throw Error(h(308));
      ((jn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else jn = jn.next = t;
    return n;
  }
  var Tg =
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
    Mg = s.unstable_scheduleCallback,
    Rg = s.unstable_NormalPriority,
    dt = {
      $$typeof: B,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function as() {
    return { controller: new Tg(), data: new Map(), refCount: 0 };
  }
  function li(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Mg(Rg, function () {
          e.controller.abort();
        }));
  }
  var ii = null,
    ls = 0,
    bl = 0,
    El = null;
  function _g(e, t) {
    if (ii === null) {
      var n = (ii = []);
      ((ls = 0),
        (bl = rc()),
        (El = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (ls++, t.then(hf, hf), t);
  }
  function hf() {
    if (--ls === 0 && ii !== null) {
      El !== null && (El.status = 'fulfilled');
      var e = ii;
      ((ii = null), (bl = 0), (El = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ag(e, t) {
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
  var vf = A.S;
  A.S = function (e, t) {
    ((Id = pt()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && _g(e, t),
      vf !== null && vf(e, t));
  };
  var Ja = N(null);
  function is() {
    var e = Ja.current;
    return e !== null ? e : We.pooledCache;
  }
  function ou(e, t) {
    t === null ? P(Ja, Ja.current) : P(Ja, t.pool);
  }
  function gf() {
    var e = is();
    return e === null ? null : { parent: dt._currentValue, pool: e };
  }
  var Cl = Error(h(460)),
    us = Error(h(474)),
    fu = Error(h(542)),
    du = { then: function () {} };
  function yf(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function pf(e, t, n) {
    switch (
      ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(Un, Un), (t = n)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), xf(e), e);
      default:
        if (typeof t.status == 'string') t.then(Un, Un);
        else {
          if (((e = We), e !== null && 100 < e.shellSuspendCounter)) throw Error(h(482));
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
            throw ((e = t.reason), xf(e), e);
        }
        throw (($a = t), Cl);
    }
  }
  function Fa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? (($a = n), Cl) : n;
    }
  }
  var $a = null;
  function Sf() {
    if ($a === null) throw Error(h(459));
    var e = $a;
    return (($a = null), e);
  }
  function xf(e) {
    if (e === Cl || e === fu) throw Error(h(483));
  }
  var Tl = null,
    ui = 0;
  function mu(e) {
    var t = ui;
    return ((ui += 1), Tl === null && (Tl = []), pf(Tl, e, t));
  }
  function ri(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function hu(e, t) {
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
  function bf(e) {
    function t(Q, X) {
      if (e) {
        var K = Q.deletions;
        K === null ? ((Q.deletions = [X]), (Q.flags |= 16)) : K.push(X);
      }
    }
    function n(Q, X) {
      if (!e) return null;
      for (; X !== null; ) (t(Q, X), (X = X.sibling));
      return null;
    }
    function a(Q) {
      for (var X = new Map(); Q !== null; )
        (Q.key !== null ? X.set(Q.key, Q) : X.set(Q.index, Q), (Q = Q.sibling));
      return X;
    }
    function i(Q, X) {
      return ((Q = Ln(Q, X)), (Q.index = 0), (Q.sibling = null), Q);
    }
    function u(Q, X, K) {
      return (
        (Q.index = K),
        e
          ? ((K = Q.alternate),
            K !== null
              ? ((K = K.index), K < X ? ((Q.flags |= 67108866), X) : K)
              : ((Q.flags |= 67108866), X))
          : ((Q.flags |= 1048576), X)
      );
    }
    function x(Q) {
      return (e && Q.alternate === null && (Q.flags |= 67108866), Q);
    }
    function M(Q, X, K, te) {
      return X === null || X.tag !== 6
        ? ((X = Jr(K, Q.mode, te)), (X.return = Q), X)
        : ((X = i(X, K)), (X.return = Q), X);
    }
    function G(Q, X, K, te) {
      var he = K.type;
      return he === p
        ? ee(Q, X, K.props.children, te, K.key)
        : X !== null &&
            (X.elementType === he ||
              (typeof he == 'object' && he !== null && he.$$typeof === _ && Fa(he) === X.type))
          ? ((X = i(X, K.props)), ri(X, K), (X.return = Q), X)
          : ((X = uu(K.type, K.key, K.props, null, Q.mode, te)), ri(X, K), (X.return = Q), X);
    }
    function k(Q, X, K, te) {
      return X === null ||
        X.tag !== 4 ||
        X.stateNode.containerInfo !== K.containerInfo ||
        X.stateNode.implementation !== K.implementation
        ? ((X = Fr(K, Q.mode, te)), (X.return = Q), X)
        : ((X = i(X, K.children || [])), (X.return = Q), X);
    }
    function ee(Q, X, K, te, he) {
      return X === null || X.tag !== 7
        ? ((X = Qa(K, Q.mode, te, he)), (X.return = Q), X)
        : ((X = i(X, K)), (X.return = Q), X);
    }
    function ne(Q, X, K) {
      if ((typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint')
        return ((X = Jr('' + X, Q.mode, K)), (X.return = Q), X);
      if (typeof X == 'object' && X !== null) {
        switch (X.$$typeof) {
          case r:
            return ((K = uu(X.type, X.key, X.props, null, Q.mode, K)), ri(K, X), (K.return = Q), K);
          case S:
            return ((X = Fr(X, Q.mode, K)), (X.return = Q), X);
          case _:
            return ((X = Fa(X)), ne(Q, X, K));
        }
        if (le(X) || V(X)) return ((X = Qa(X, Q.mode, K, null)), (X.return = Q), X);
        if (typeof X.then == 'function') return ne(Q, mu(X), K);
        if (X.$$typeof === B) return ne(Q, cu(Q, X), K);
        hu(Q, X);
      }
      return null;
    }
    function F(Q, X, K, te) {
      var he = X !== null ? X.key : null;
      if ((typeof K == 'string' && K !== '') || typeof K == 'number' || typeof K == 'bigint')
        return he !== null ? null : M(Q, X, '' + K, te);
      if (typeof K == 'object' && K !== null) {
        switch (K.$$typeof) {
          case r:
            return K.key === he ? G(Q, X, K, te) : null;
          case S:
            return K.key === he ? k(Q, X, K, te) : null;
          case _:
            return ((K = Fa(K)), F(Q, X, K, te));
        }
        if (le(K) || V(K)) return he !== null ? null : ee(Q, X, K, te, null);
        if (typeof K.then == 'function') return F(Q, X, mu(K), te);
        if (K.$$typeof === B) return F(Q, X, cu(Q, K), te);
        hu(Q, K);
      }
      return null;
    }
    function W(Q, X, K, te, he) {
      if ((typeof te == 'string' && te !== '') || typeof te == 'number' || typeof te == 'bigint')
        return ((Q = Q.get(K) || null), M(X, Q, '' + te, he));
      if (typeof te == 'object' && te !== null) {
        switch (te.$$typeof) {
          case r:
            return ((Q = Q.get(te.key === null ? K : te.key) || null), G(X, Q, te, he));
          case S:
            return ((Q = Q.get(te.key === null ? K : te.key) || null), k(X, Q, te, he));
          case _:
            return ((te = Fa(te)), W(Q, X, K, te, he));
        }
        if (le(te) || V(te)) return ((Q = Q.get(K) || null), ee(X, Q, te, he, null));
        if (typeof te.then == 'function') return W(Q, X, K, mu(te), he);
        if (te.$$typeof === B) return W(Q, X, K, cu(X, te), he);
        hu(X, te);
      }
      return null;
    }
    function fe(Q, X, K, te) {
      for (
        var he = null, Ge = null, de = X, Me = (X = 0), ze = null;
        de !== null && Me < K.length;
        Me++
      ) {
        de.index > Me ? ((ze = de), (de = null)) : (ze = de.sibling);
        var Ye = F(Q, de, K[Me], te);
        if (Ye === null) {
          de === null && (de = ze);
          break;
        }
        (e && de && Ye.alternate === null && t(Q, de),
          (X = u(Ye, X, Me)),
          Ge === null ? (he = Ye) : (Ge.sibling = Ye),
          (Ge = Ye),
          (de = ze));
      }
      if (Me === K.length) return (n(Q, de), Ne && Hn(Q, Me), he);
      if (de === null) {
        for (; Me < K.length; Me++)
          ((de = ne(Q, K[Me], te)),
            de !== null &&
              ((X = u(de, X, Me)), Ge === null ? (he = de) : (Ge.sibling = de), (Ge = de)));
        return (Ne && Hn(Q, Me), he);
      }
      for (de = a(de); Me < K.length; Me++)
        ((ze = W(de, Q, Me, K[Me], te)),
          ze !== null &&
            (e && ze.alternate !== null && de.delete(ze.key === null ? Me : ze.key),
            (X = u(ze, X, Me)),
            Ge === null ? (he = ze) : (Ge.sibling = ze),
            (Ge = ze)));
      return (
        e &&
          de.forEach(function (za) {
            return t(Q, za);
          }),
        Ne && Hn(Q, Me),
        he
      );
    }
    function ye(Q, X, K, te) {
      if (K == null) throw Error(h(151));
      for (
        var he = null, Ge = null, de = X, Me = (X = 0), ze = null, Ye = K.next();
        de !== null && !Ye.done;
        Me++, Ye = K.next()
      ) {
        de.index > Me ? ((ze = de), (de = null)) : (ze = de.sibling);
        var za = F(Q, de, Ye.value, te);
        if (za === null) {
          de === null && (de = ze);
          break;
        }
        (e && de && za.alternate === null && t(Q, de),
          (X = u(za, X, Me)),
          Ge === null ? (he = za) : (Ge.sibling = za),
          (Ge = za),
          (de = ze));
      }
      if (Ye.done) return (n(Q, de), Ne && Hn(Q, Me), he);
      if (de === null) {
        for (; !Ye.done; Me++, Ye = K.next())
          ((Ye = ne(Q, Ye.value, te)),
            Ye !== null &&
              ((X = u(Ye, X, Me)), Ge === null ? (he = Ye) : (Ge.sibling = Ye), (Ge = Ye)));
        return (Ne && Hn(Q, Me), he);
      }
      for (de = a(de); !Ye.done; Me++, Ye = K.next())
        ((Ye = W(de, Q, Me, Ye.value, te)),
          Ye !== null &&
            (e && Ye.alternate !== null && de.delete(Ye.key === null ? Me : Ye.key),
            (X = u(Ye, X, Me)),
            Ge === null ? (he = Ye) : (Ge.sibling = Ye),
            (Ge = Ye)));
      return (
        e &&
          de.forEach(function (G0) {
            return t(Q, G0);
          }),
        Ne && Hn(Q, Me),
        he
      );
    }
    function $e(Q, X, K, te) {
      if (
        (typeof K == 'object' &&
          K !== null &&
          K.type === p &&
          K.key === null &&
          (K = K.props.children),
        typeof K == 'object' && K !== null)
      ) {
        switch (K.$$typeof) {
          case r:
            e: {
              for (var he = K.key; X !== null; ) {
                if (X.key === he) {
                  if (((he = K.type), he === p)) {
                    if (X.tag === 7) {
                      (n(Q, X.sibling), (te = i(X, K.props.children)), (te.return = Q), (Q = te));
                      break e;
                    }
                  } else if (
                    X.elementType === he ||
                    (typeof he == 'object' && he !== null && he.$$typeof === _ && Fa(he) === X.type)
                  ) {
                    (n(Q, X.sibling), (te = i(X, K.props)), ri(te, K), (te.return = Q), (Q = te));
                    break e;
                  }
                  n(Q, X);
                  break;
                } else t(Q, X);
                X = X.sibling;
              }
              K.type === p
                ? ((te = Qa(K.props.children, Q.mode, te, K.key)), (te.return = Q), (Q = te))
                : ((te = uu(K.type, K.key, K.props, null, Q.mode, te)),
                  ri(te, K),
                  (te.return = Q),
                  (Q = te));
            }
            return x(Q);
          case S:
            e: {
              for (he = K.key; X !== null; ) {
                if (X.key === he)
                  if (
                    X.tag === 4 &&
                    X.stateNode.containerInfo === K.containerInfo &&
                    X.stateNode.implementation === K.implementation
                  ) {
                    (n(Q, X.sibling), (te = i(X, K.children || [])), (te.return = Q), (Q = te));
                    break e;
                  } else {
                    n(Q, X);
                    break;
                  }
                else t(Q, X);
                X = X.sibling;
              }
              ((te = Fr(K, Q.mode, te)), (te.return = Q), (Q = te));
            }
            return x(Q);
          case _:
            return ((K = Fa(K)), $e(Q, X, K, te));
        }
        if (le(K)) return fe(Q, X, K, te);
        if (V(K)) {
          if (((he = V(K)), typeof he != 'function')) throw Error(h(150));
          return ((K = he.call(K)), ye(Q, X, K, te));
        }
        if (typeof K.then == 'function') return $e(Q, X, mu(K), te);
        if (K.$$typeof === B) return $e(Q, X, cu(Q, K), te);
        hu(Q, K);
      }
      return (typeof K == 'string' && K !== '') || typeof K == 'number' || typeof K == 'bigint'
        ? ((K = '' + K),
          X !== null && X.tag === 6
            ? (n(Q, X.sibling), (te = i(X, K)), (te.return = Q), (Q = te))
            : (n(Q, X), (te = Jr(K, Q.mode, te)), (te.return = Q), (Q = te)),
          x(Q))
        : n(Q, X);
    }
    return function (Q, X, K, te) {
      try {
        ui = 0;
        var he = $e(Q, X, K, te);
        return ((Tl = null), he);
      } catch (de) {
        if (de === Cl || de === fu) throw de;
        var Ge = Qt(29, de, null, Q.mode);
        return ((Ge.lanes = te), (Ge.return = Q), Ge);
      } finally {
      }
    };
  }
  var Wa = bf(!0),
    Ef = bf(!1),
    va = !1;
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
  function ga(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ya(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Ve & 2) !== 0)) {
      var i = a.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (a.pending = t),
        (t = iu(e)),
        lf(e, null, n),
        t
      );
    }
    return (lu(e, a, t, n), iu(e));
  }
  function si(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), ge(e, n));
    }
  }
  function cs(e, t) {
    var n = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var i = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var x = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          (u === null ? (i = u = x) : (u = u.next = x), (n = n.next));
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
  var os = !1;
  function ci() {
    if (os) {
      var e = El;
      if (e !== null) throw e;
    }
  }
  function oi(e, t, n, a) {
    os = !1;
    var i = e.updateQueue;
    va = !1;
    var u = i.firstBaseUpdate,
      x = i.lastBaseUpdate,
      M = i.shared.pending;
    if (M !== null) {
      i.shared.pending = null;
      var G = M,
        k = G.next;
      ((G.next = null), x === null ? (u = k) : (x.next = k), (x = G));
      var ee = e.alternate;
      ee !== null &&
        ((ee = ee.updateQueue),
        (M = ee.lastBaseUpdate),
        M !== x && (M === null ? (ee.firstBaseUpdate = k) : (M.next = k), (ee.lastBaseUpdate = G)));
    }
    if (u !== null) {
      var ne = i.baseState;
      ((x = 0), (ee = k = G = null), (M = u));
      do {
        var F = M.lane & -536870913,
          W = F !== M.lane;
        if (W ? (we & F) === F : (a & F) === F) {
          (F !== 0 && F === bl && (os = !0),
            ee !== null &&
              (ee = ee.next =
                { lane: 0, tag: M.tag, payload: M.payload, callback: null, next: null }));
          e: {
            var fe = e,
              ye = M;
            F = t;
            var $e = n;
            switch (ye.tag) {
              case 1:
                if (((fe = ye.payload), typeof fe == 'function')) {
                  ne = fe.call($e, ne, F);
                  break e;
                }
                ne = fe;
                break e;
              case 3:
                fe.flags = (fe.flags & -65537) | 128;
              case 0:
                if (
                  ((fe = ye.payload),
                  (F = typeof fe == 'function' ? fe.call($e, ne, F) : fe),
                  F == null)
                )
                  break e;
                ne = v({}, ne, F);
                break e;
              case 2:
                va = !0;
            }
          }
          ((F = M.callback),
            F !== null &&
              ((e.flags |= 64),
              W && (e.flags |= 8192),
              (W = i.callbacks),
              W === null ? (i.callbacks = [F]) : W.push(F)));
        } else
          ((W = { lane: F, tag: M.tag, payload: M.payload, callback: M.callback, next: null }),
            ee === null ? ((k = ee = W), (G = ne)) : (ee = ee.next = W),
            (x |= F));
        if (((M = M.next), M === null)) {
          if (((M = i.shared.pending), M === null)) break;
          ((W = M),
            (M = W.next),
            (W.next = null),
            (i.lastBaseUpdate = W),
            (i.shared.pending = null));
        }
      } while (!0);
      (ee === null && (G = ne),
        (i.baseState = G),
        (i.firstBaseUpdate = k),
        (i.lastBaseUpdate = ee),
        u === null && (i.shared.lanes = 0),
        (Ea |= x),
        (e.lanes = x),
        (e.memoizedState = ne));
    }
  }
  function Cf(e, t) {
    if (typeof e != 'function') throw Error(h(191, e));
    e.call(t);
  }
  function Tf(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Cf(n[e], t);
  }
  var Ml = N(null),
    vu = N(0);
  function Mf(e, t) {
    ((e = Jn), P(vu, e), P(Ml, t), (Jn = e | t.baseLanes));
  }
  function fs() {
    (P(vu, Jn), P(Ml, Ml.current));
  }
  function ds() {
    ((Jn = vu.current), Z(Ml), Z(vu));
  }
  var Zt = N(null),
    rn = null;
  function pa(e) {
    var t = e.alternate;
    (P(ct, ct.current & 1),
      P(Zt, e),
      rn === null && (t === null || Ml.current !== null || t.memoizedState !== null) && (rn = e));
  }
  function ms(e) {
    (P(ct, ct.current), P(Zt, e), rn === null && (rn = e));
  }
  function Rf(e) {
    e.tag === 22 ? (P(ct, ct.current), P(Zt, e), rn === null && (rn = e)) : Sa();
  }
  function Sa() {
    (P(ct, ct.current), P(Zt, Zt.current));
  }
  function Kt(e) {
    (Z(Zt), rn === e && (rn = null), Z(ct));
  }
  var ct = N(0);
  function gu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Sc(n) || xc(n))) return t;
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
  var Yn = 0,
    Ce = null,
    Je = null,
    mt = null,
    yu = !1,
    Rl = !1,
    Ia = !1,
    pu = 0,
    fi = 0,
    _l = null,
    Og = 0;
  function it() {
    throw Error(h(321));
  }
  function hs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Xt(e[n], t[n])) return !1;
    return !0;
  }
  function vs(e, t, n, a, i, u) {
    return (
      (Yn = u),
      (Ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (A.H = e === null || e.memoizedState === null ? cd : Ds),
      (Ia = !1),
      (u = n(a, i)),
      (Ia = !1),
      Rl && (u = Af(t, n, a, i)),
      _f(e),
      u
    );
  }
  function _f(e) {
    A.H = hi;
    var t = Je !== null && Je.next !== null;
    if (((Yn = 0), (mt = Je = Ce = null), (yu = !1), (fi = 0), (_l = null), t)) throw Error(h(300));
    e === null || ht || ((e = e.dependencies), e !== null && su(e) && (ht = !0));
  }
  function Af(e, t, n, a) {
    Ce = e;
    var i = 0;
    do {
      if ((Rl && (_l = null), (fi = 0), (Rl = !1), 25 <= i)) throw Error(h(301));
      if (((i += 1), (mt = Je = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((A.H = od), (u = t(n, a)));
    } while (Rl);
    return u;
  }
  function Dg() {
    var e = A.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? di(t) : t),
      (e = e.useState()[0]),
      (Je !== null ? Je.memoizedState : null) !== e && (Ce.flags |= 1024),
      t
    );
  }
  function gs() {
    var e = pu !== 0;
    return ((pu = 0), e);
  }
  function ys(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function ps(e) {
    if (yu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      yu = !1;
    }
    ((Yn = 0), (mt = Je = Ce = null), (Rl = !1), (fi = pu = 0), (_l = null));
  }
  function wt() {
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
  function Su() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function di(e) {
    var t = fi;
    return (
      (fi += 1),
      _l === null && (_l = []),
      (e = pf(_l, e, t)),
      (t = Ce),
      (mt === null ? t.memoizedState : mt.next) === null &&
        ((t = t.alternate), (A.H = t === null || t.memoizedState === null ? cd : Ds)),
      e
    );
  }
  function xu(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return di(e);
      if (e.$$typeof === B) return Tt(e);
    }
    throw Error(h(438, String(e)));
  }
  function Ss(e) {
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
      n === null && ((n = Su()), (Ce.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = L;
    return (t.index++, n);
  }
  function Vn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function bu(e) {
    var t = ot();
    return xs(t, Je, e);
  }
  function xs(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = n;
    var i = e.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (i !== null) {
        var x = i.next;
        ((i.next = u.next), (u.next = x));
      }
      ((t.baseQueue = i = u), (a.pending = null));
    }
    if (((u = e.baseState), i === null)) e.memoizedState = u;
    else {
      t = i.next;
      var M = (x = null),
        G = null,
        k = t,
        ee = !1;
      do {
        var ne = k.lane & -536870913;
        if (ne !== k.lane ? (we & ne) === ne : (Yn & ne) === ne) {
          var F = k.revertLane;
          if (F === 0)
            (G !== null &&
              (G = G.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: k.action,
                  hasEagerState: k.hasEagerState,
                  eagerState: k.eagerState,
                  next: null,
                }),
              ne === bl && (ee = !0));
          else if ((Yn & F) === F) {
            ((k = k.next), F === bl && (ee = !0));
            continue;
          } else
            ((ne = {
              lane: 0,
              revertLane: k.revertLane,
              gesture: null,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null,
            }),
              G === null ? ((M = G = ne), (x = u)) : (G = G.next = ne),
              (Ce.lanes |= F),
              (Ea |= F));
          ((ne = k.action), Ia && n(u, ne), (u = k.hasEagerState ? k.eagerState : n(u, ne)));
        } else
          ((F = {
            lane: ne,
            revertLane: k.revertLane,
            gesture: k.gesture,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null,
          }),
            G === null ? ((M = G = F), (x = u)) : (G = G.next = F),
            (Ce.lanes |= ne),
            (Ea |= ne));
        k = k.next;
      } while (k !== null && k !== t);
      if (
        (G === null ? (x = u) : (G.next = M),
        !Xt(u, e.memoizedState) && ((ht = !0), ee && ((n = El), n !== null)))
      )
        throw n;
      ((e.memoizedState = u), (e.baseState = x), (e.baseQueue = G), (a.lastRenderedState = u));
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
      var x = (i = i.next);
      do ((u = e(u, x.action)), (x = x.next));
      while (x !== i);
      (Xt(u, t.memoizedState) || (ht = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, a];
  }
  function Of(e, t, n) {
    var a = Ce,
      i = ot(),
      u = Ne;
    if (u) {
      if (n === void 0) throw Error(h(407));
      n = n();
    } else n = t();
    var x = !Xt((Je || i).memoizedState, n);
    if (
      (x && ((i.memoizedState = n), (ht = !0)),
      (i = i.queue),
      Ts(zf.bind(null, a, i, e), [e]),
      i.getSnapshot !== t || x || (mt !== null && mt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Al(9, { destroy: void 0 }, wf.bind(null, a, i, n, t), null),
        We === null)
      )
        throw Error(h(349));
      u || (Yn & 127) !== 0 || Df(a, t, n);
    }
    return n;
  }
  function Df(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = Su()), (Ce.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function wf(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), Nf(t) && Uf(e));
  }
  function zf(e, t, n) {
    return n(function () {
      Nf(t) && Uf(e);
    });
  }
  function Nf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Xt(e, n);
    } catch {
      return !0;
    }
  }
  function Uf(e) {
    var t = Xa(e, 2);
    t !== null && Yt(t, e, 2);
  }
  function Es(e) {
    var t = wt();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), Ia)) {
        vn(!0);
        try {
          n();
        } finally {
          vn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Bf(e, t, n, a) {
    return ((e.baseState = n), xs(e, Je, typeof a == 'function' ? a : Vn));
  }
  function wg(e, t, n, a, i) {
    if (Tu(e)) throw Error(h(485));
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
        then: function (x) {
          u.listeners.push(x);
        },
      };
      (A.T !== null ? n(!0) : (u.isTransition = !1),
        a(u),
        (n = t.pending),
        n === null
          ? ((u.next = t.pending = u), Lf(t, u))
          : ((u.next = n.next), (t.pending = n.next = u)));
    }
  }
  function Lf(e, t) {
    var n = t.action,
      a = t.payload,
      i = e.state;
    if (t.isTransition) {
      var u = A.T,
        x = {};
      A.T = x;
      try {
        var M = n(i, a),
          G = A.S;
        (G !== null && G(x, M), Hf(e, t, M));
      } catch (k) {
        Cs(e, t, k);
      } finally {
        (u !== null && x.types !== null && (u.types = x.types), (A.T = u));
      }
    } else
      try {
        ((u = n(i, a)), Hf(e, t, u));
      } catch (k) {
        Cs(e, t, k);
      }
  }
  function Hf(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (a) {
            jf(e, t, a);
          },
          function (a) {
            return Cs(e, t, a);
          }
        )
      : jf(e, t, n);
  }
  function jf(e, t, n) {
    ((t.status = 'fulfilled'),
      (t.value = n),
      Gf(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Lf(e, n))));
  }
  function Cs(e, t, n) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = 'rejected'), (t.reason = n), Gf(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function Gf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Yf(e, t) {
    return t;
  }
  function Vf(e, t) {
    if (Ne) {
      var n = We.formState;
      if (n !== null) {
        e: {
          var a = Ce;
          if (Ne) {
            if (et) {
              t: {
                for (var i = et, u = un; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break t;
                  }
                  if (((i = sn(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                ((u = i.data), (i = u === 'F!' || u === 'F' ? i : null));
              }
              if (i) {
                ((et = sn(i.nextSibling)), (a = i.data === 'F!'));
                break e;
              }
            }
            ma(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return (
      (n = wt()),
      (n.memoizedState = n.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yf,
        lastRenderedState: t,
      }),
      (n.queue = a),
      (n = ud.bind(null, Ce, a)),
      (a.dispatch = n),
      (a = Es(!1)),
      (u = Os.bind(null, Ce, !1, a.queue)),
      (a = wt()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = i),
      (n = wg.bind(null, Ce, i, u, n)),
      (i.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    );
  }
  function qf(e) {
    var t = ot();
    return Xf(t, Je, e);
  }
  function Xf(e, t, n) {
    if (
      ((t = xs(e, t, Yf)[0]),
      (e = bu(Vn)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = di(t);
      } catch (x) {
        throw x === Cl ? fu : x;
      }
    else a = t;
    t = ot();
    var i = t.queue,
      u = i.dispatch;
    return (
      n !== t.memoizedState &&
        ((Ce.flags |= 2048), Al(9, { destroy: void 0 }, zg.bind(null, i, n), null)),
      [a, u, e]
    );
  }
  function zg(e, t) {
    e.action = t;
  }
  function Qf(e) {
    var t = ot(),
      n = Je;
    if (n !== null) return Xf(t, n, e);
    (ot(), (t = t.memoizedState), (n = ot()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = e), [t, a, !1]);
  }
  function Al(e, t, n, a) {
    return (
      (e = { tag: e, create: n, deps: a, inst: t, next: null }),
      (t = Ce.updateQueue),
      t === null && ((t = Su()), (Ce.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Zf() {
    return ot().memoizedState;
  }
  function Eu(e, t, n, a) {
    var i = wt();
    ((Ce.flags |= e),
      (i.memoizedState = Al(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a)));
  }
  function Cu(e, t, n, a) {
    var i = ot();
    a = a === void 0 ? null : a;
    var u = i.memoizedState.inst;
    Je !== null && a !== null && hs(a, Je.memoizedState.deps)
      ? (i.memoizedState = Al(t, u, n, a))
      : ((Ce.flags |= e), (i.memoizedState = Al(1 | t, u, n, a)));
  }
  function Kf(e, t) {
    Eu(8390656, 8, e, t);
  }
  function Ts(e, t) {
    Cu(2048, 8, e, t);
  }
  function Ng(e) {
    Ce.flags |= 4;
    var t = Ce.updateQueue;
    if (t === null) ((t = Su()), (Ce.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function kf(e) {
    var t = ot().memoizedState;
    return (
      Ng({ ref: t, nextImpl: e }),
      function () {
        if ((Ve & 2) !== 0) throw Error(h(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Jf(e, t) {
    return Cu(4, 2, e, t);
  }
  function Ff(e, t) {
    return Cu(4, 4, e, t);
  }
  function $f(e, t) {
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
  function Wf(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), Cu(4, 4, $f.bind(null, t, e), n));
  }
  function Ms() {}
  function If(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && hs(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
  }
  function Pf(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && hs(t, a[1])) return a[0];
    if (((a = e()), Ia)) {
      vn(!0);
      try {
        e();
      } finally {
        vn(!1);
      }
    }
    return ((n.memoizedState = [a, t]), a);
  }
  function Rs(e, t, n) {
    return n === void 0 || ((Yn & 1073741824) !== 0 && (we & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = em()), (Ce.lanes |= e), (Ea |= e), n);
  }
  function ed(e, t, n, a) {
    return Xt(n, t)
      ? n
      : Ml.current !== null
        ? ((e = Rs(e, n, a)), Xt(e, t) || (ht = !0), e)
        : (Yn & 42) === 0 || ((Yn & 1073741824) !== 0 && (we & 261930) === 0)
          ? ((ht = !0), (e.memoizedState = n))
          : ((e = em()), (Ce.lanes |= e), (Ea |= e), t);
  }
  function td(e, t, n, a, i) {
    var u = U.p;
    U.p = u !== 0 && 8 > u ? u : 8;
    var x = A.T,
      M = {};
    ((A.T = M), Os(e, !1, t, n));
    try {
      var G = i(),
        k = A.S;
      if (
        (k !== null && k(M, G), G !== null && typeof G == 'object' && typeof G.then == 'function')
      ) {
        var ee = Ag(G, a);
        mi(e, t, ee, Ft(e));
      } else mi(e, t, a, Ft(e));
    } catch (ne) {
      mi(e, t, { then: function () {}, status: 'rejected', reason: ne }, Ft());
    } finally {
      ((U.p = u), x !== null && M.types !== null && (x.types = M.types), (A.T = x));
    }
  }
  function Ug() {}
  function _s(e, t, n, a) {
    if (e.tag !== 5) throw Error(h(476));
    var i = nd(e).queue;
    td(
      e,
      i,
      t,
      q,
      n === null
        ? Ug
        : function () {
            return (ad(e), n(a));
          }
    );
  }
  function nd(e) {
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
        lastRenderedReducer: Vn,
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
          lastRenderedReducer: Vn,
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
  function ad(e) {
    var t = nd(e);
    (t.next === null && (t = e.alternate.memoizedState), mi(e, t.next.queue, {}, Ft()));
  }
  function As() {
    return Tt(Di);
  }
  function ld() {
    return ot().memoizedState;
  }
  function id() {
    return ot().memoizedState;
  }
  function Bg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Ft();
          e = ga(n);
          var a = ya(t, e, n);
          (a !== null && (Yt(a, t, n), si(a, t, n)), (t = { cache: as() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Lg(e, t, n) {
    var a = Ft();
    ((n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Tu(e) ? rd(t, n) : ((n = Kr(e, t, n, a)), n !== null && (Yt(n, e, a), sd(n, t, a))));
  }
  function ud(e, t, n) {
    var a = Ft();
    mi(e, t, n, a);
  }
  function mi(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Tu(e)) rd(t, i);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var x = t.lastRenderedState,
            M = u(x, n);
          if (((i.hasEagerState = !0), (i.eagerState = M), Xt(M, x)))
            return (lu(e, t, i, 0), We === null && au(), !1);
        } catch {
        } finally {
        }
      if (((n = Kr(e, t, i, a)), n !== null)) return (Yt(n, e, a), sd(n, t, a), !0);
    }
    return !1;
  }
  function Os(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: rc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Tu(e))
    ) {
      if (t) throw Error(h(479));
    } else ((t = Kr(e, n, a, 2)), t !== null && Yt(t, e, 2));
  }
  function Tu(e) {
    var t = e.alternate;
    return e === Ce || (t !== null && t === Ce);
  }
  function rd(e, t) {
    Rl = yu = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function sd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), ge(e, n));
    }
  }
  var hi = {
    readContext: Tt,
    use: xu,
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
  hi.useEffectEvent = it;
  var cd = {
      readContext: Tt,
      use: xu,
      useCallback: function (e, t) {
        return ((wt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Tt,
      useEffect: Kf,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null), Eu(4194308, 4, $f.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Eu(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Eu(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = wt();
        t = t === void 0 ? null : t;
        var a = e();
        if (Ia) {
          vn(!0);
          try {
            e();
          } finally {
            vn(!1);
          }
        }
        return ((n.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, n) {
        var a = wt();
        if (n !== void 0) {
          var i = n(t);
          if (Ia) {
            vn(!0);
            try {
              n(t);
            } finally {
              vn(!1);
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
          (e = e.dispatch = Lg.bind(null, Ce, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = wt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Es(e);
        var t = e.queue,
          n = ud.bind(null, Ce, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: Ms,
      useDeferredValue: function (e, t) {
        var n = wt();
        return Rs(n, e, t);
      },
      useTransition: function () {
        var e = Es(!1);
        return ((e = td.bind(null, Ce, e.queue, !0, !1)), (wt().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, n) {
        var a = Ce,
          i = wt();
        if (Ne) {
          if (n === void 0) throw Error(h(407));
          n = n();
        } else {
          if (((n = t()), We === null)) throw Error(h(349));
          (we & 127) !== 0 || Df(a, t, n);
        }
        i.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (i.queue = u),
          Kf(zf.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          Al(9, { destroy: void 0 }, wf.bind(null, a, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = wt(),
          t = We.identifierPrefix;
        if (Ne) {
          var n = _n,
            a = Rn;
          ((n = (a & ~(1 << (32 - Ot(a) - 1))).toString(32) + n),
            (t = '_' + t + 'R_' + n),
            (n = pu++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '_'));
        } else ((n = Og++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: As,
      useFormState: Vf,
      useActionState: Vf,
      useOptimistic: function (e) {
        var t = wt();
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
      useMemoCache: Ss,
      useCacheRefresh: function () {
        return (wt().memoizedState = Bg.bind(null, Ce));
      },
      useEffectEvent: function (e) {
        var t = wt(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((Ve & 2) !== 0) throw Error(h(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Ds = {
      readContext: Tt,
      use: xu,
      useCallback: If,
      useContext: Tt,
      useEffect: Ts,
      useImperativeHandle: Wf,
      useInsertionEffect: Jf,
      useLayoutEffect: Ff,
      useMemo: Pf,
      useReducer: bu,
      useRef: Zf,
      useState: function () {
        return bu(Vn);
      },
      useDebugValue: Ms,
      useDeferredValue: function (e, t) {
        var n = ot();
        return ed(n, Je.memoizedState, e, t);
      },
      useTransition: function () {
        var e = bu(Vn)[0],
          t = ot().memoizedState;
        return [typeof e == 'boolean' ? e : di(e), t];
      },
      useSyncExternalStore: Of,
      useId: ld,
      useHostTransitionStatus: As,
      useFormState: qf,
      useActionState: qf,
      useOptimistic: function (e, t) {
        var n = ot();
        return Bf(n, Je, e, t);
      },
      useMemoCache: Ss,
      useCacheRefresh: id,
    };
  Ds.useEffectEvent = kf;
  var od = {
    readContext: Tt,
    use: xu,
    useCallback: If,
    useContext: Tt,
    useEffect: Ts,
    useImperativeHandle: Wf,
    useInsertionEffect: Jf,
    useLayoutEffect: Ff,
    useMemo: Pf,
    useReducer: bs,
    useRef: Zf,
    useState: function () {
      return bs(Vn);
    },
    useDebugValue: Ms,
    useDeferredValue: function (e, t) {
      var n = ot();
      return Je === null ? Rs(n, e, t) : ed(n, Je.memoizedState, e, t);
    },
    useTransition: function () {
      var e = bs(Vn)[0],
        t = ot().memoizedState;
      return [typeof e == 'boolean' ? e : di(e), t];
    },
    useSyncExternalStore: Of,
    useId: ld,
    useHostTransitionStatus: As,
    useFormState: Qf,
    useActionState: Qf,
    useOptimistic: function (e, t) {
      var n = ot();
      return Je !== null ? Bf(n, Je, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: Ss,
    useCacheRefresh: id,
  };
  od.useEffectEvent = kf;
  function ws(e, t, n, a) {
    ((t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : v({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var zs = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = Ft(),
        i = ga(a);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = ya(e, i, a)),
        t !== null && (Yt(t, e, a), si(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = Ft(),
        i = ga(a);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = ya(e, i, a)),
        t !== null && (Yt(t, e, a), si(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ft(),
        a = ga(n);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = ya(e, a, n)),
        t !== null && (Yt(t, e, n), si(t, e, n)));
    },
  };
  function fd(e, t, n, a, i, u, x) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, u, x)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ei(n, a) || !ei(i, u)
          : !0
    );
  }
  function dd(e, t, n, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && zs.enqueueReplaceState(t, t.state, null));
  }
  function Pa(e, t) {
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
  function md(e) {
    nu(e);
  }
  function hd(e) {
    console.error(e);
  }
  function vd(e) {
    nu(e);
  }
  function Mu(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function gd(e, t, n) {
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
      (n = ga(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Mu(e, t);
      }),
      n
    );
  }
  function yd(e) {
    return ((e = ga(e)), (e.tag = 3), e);
  }
  function pd(e, t, n, a) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == 'function') {
      var u = a.value;
      ((e.payload = function () {
        return i(u);
      }),
        (e.callback = function () {
          gd(t, n, a);
        }));
    }
    var x = n.stateNode;
    x !== null &&
      typeof x.componentDidCatch == 'function' &&
      (e.callback = function () {
        (gd(t, n, a),
          typeof i != 'function' && (Ca === null ? (Ca = new Set([this])) : Ca.add(this)));
        var M = a.stack;
        this.componentDidCatch(a.value, { componentStack: M !== null ? M : '' });
      });
  }
  function Hg(e, t, n, a, i) {
    if (((n.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((t = n.alternate), t !== null && xl(t, n, i, !0), (n = Zt.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              rn === null ? Hu() : n.alternate === null && ut === 0 && (ut = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = i),
              a === du
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  lc(e, a, i)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === du
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                  lc(e, a, i)),
              !1
            );
        }
        throw Error(h(435, n.tag));
      }
      return (lc(e, a, i), Hu(), !1);
    }
    if (Ne)
      return (
        (t = Zt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            a !== Ir && ((e = Error(h(422), { cause: a })), ai(nn(e, n))))
          : (a !== Ir && ((t = Error(h(423), { cause: a })), ai(nn(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (a = nn(a, n)),
            (i = Ns(e.stateNode, a, i)),
            cs(e, i),
            ut !== 4 && (ut = 2)),
        !1
      );
    var u = Error(h(520), { cause: a });
    if (((u = nn(u, n)), Ei === null ? (Ei = [u]) : Ei.push(u), ut !== 4 && (ut = 2), t === null))
      return !0;
    ((a = nn(a, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = i & -i),
            (n.lanes |= e),
            (e = Ns(n.stateNode, a, e)),
            cs(n, e),
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
                  (Ca === null || !Ca.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (i &= -i),
              (n.lanes |= i),
              (i = yd(i)),
              pd(i, e, n, a),
              cs(n, i),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Us = Error(h(461)),
    ht = !1;
  function Mt(e, t, n, a) {
    t.child = e === null ? Ef(t, null, n, a) : Wa(t, e.child, n, a);
  }
  function Sd(e, t, n, a, i) {
    n = n.render;
    var u = t.ref;
    if ('ref' in a) {
      var x = {};
      for (var M in a) M !== 'ref' && (x[M] = a[M]);
    } else x = a;
    return (
      ka(t),
      (a = vs(e, t, n, x, u, i)),
      (M = gs()),
      e !== null && !ht
        ? (ys(e, t, i), qn(e, t, i))
        : (Ne && M && $r(t), (t.flags |= 1), Mt(e, t, a, i), t.child)
    );
  }
  function xd(e, t, n, a, i) {
    if (e === null) {
      var u = n.type;
      return typeof u == 'function' && !kr(u) && u.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = u), bd(e, t, u, a, i))
        : ((e = uu(n.type, null, a, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !qs(e, i))) {
      var x = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : ei), n(x, a) && e.ref === t.ref))
        return qn(e, t, i);
    }
    return ((t.flags |= 1), (e = Ln(u, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function bd(e, t, n, a, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (ei(u, a) && e.ref === t.ref)
        if (((ht = !1), (t.pendingProps = a = u), qs(e, i))) (e.flags & 131072) !== 0 && (ht = !0);
        else return ((t.lanes = e.lanes), qn(e, t, i));
    }
    return Bs(e, t, n, a, i);
  }
  function Ed(e, t, n, a) {
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
        return Cd(e, t, u, n, a);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ou(t, u !== null ? u.cachePool : null),
          u !== null ? Mf(t, u) : fs(),
          Rf(t));
      else return ((a = t.lanes = 536870912), Cd(e, t, u !== null ? u.baseLanes | n : n, n, a));
    } else
      u !== null
        ? (ou(t, u.cachePool), Mf(t, u), Sa(), (t.memoizedState = null))
        : (e !== null && ou(t, null), fs(), Sa());
    return (Mt(e, t, i, n), t.child);
  }
  function vi(e, t) {
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
  function Cd(e, t, n, a, i) {
    var u = is();
    return (
      (u = u === null ? null : { parent: dt._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && ou(t, null),
      fs(),
      Rf(t),
      e !== null && xl(e, t, a, !0),
      (t.childLanes = i),
      null
    );
  }
  function Ru(e, t) {
    return (
      (t = Au({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Td(e, t, n) {
    return (
      Wa(t, e.child, null, n),
      (e = Ru(t, t.pendingProps)),
      (e.flags |= 2),
      Kt(t),
      (t.memoizedState = null),
      e
    );
  }
  function jg(e, t, n) {
    var a = t.pendingProps,
      i = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Ne) {
        if (a.mode === 'hidden') return ((e = Ru(t, a)), (t.lanes = 536870912), vi(null, e));
        if (
          (ms(t),
          (e = et)
            ? ((e = Lm(e, un)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: fa !== null ? { id: Rn, overflow: _n } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = rf(e)),
                (n.return = t),
                (t.child = n),
                (Ct = t),
                (et = null)))
            : (e = null),
          e === null)
        )
          throw ma(t);
        return ((t.lanes = 536870912), null);
      }
      return Ru(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var x = u.dehydrated;
      if ((ms(t), i))
        if (t.flags & 256) ((t.flags &= -257), (t = Td(e, t, n)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(h(558));
      else if ((ht || xl(e, t, n, !1), (i = (n & e.childLanes) !== 0), ht || i)) {
        if (((a = We), a !== null && ((x = _e(a, n)), x !== 0 && x !== u.retryLane)))
          throw ((u.retryLane = x), Xa(e, x), Yt(a, e, x), Us);
        (Hu(), (t = Td(e, t, n)));
      } else
        ((e = u.treeContext),
          (et = sn(x.nextSibling)),
          (Ct = t),
          (Ne = !0),
          (da = null),
          (un = !1),
          e !== null && of(t, e),
          (t = Ru(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Ln(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function _u(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(h(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Bs(e, t, n, a, i) {
    return (
      ka(t),
      (n = vs(e, t, n, a, void 0, i)),
      (a = gs()),
      e !== null && !ht
        ? (ys(e, t, i), qn(e, t, i))
        : (Ne && a && $r(t), (t.flags |= 1), Mt(e, t, n, i), t.child)
    );
  }
  function Md(e, t, n, a, i, u) {
    return (
      ka(t),
      (t.updateQueue = null),
      (n = Af(t, a, n, i)),
      _f(e),
      (a = gs()),
      e !== null && !ht
        ? (ys(e, t, u), qn(e, t, u))
        : (Ne && a && $r(t), (t.flags |= 1), Mt(e, t, n, u), t.child)
    );
  }
  function Rd(e, t, n, a, i) {
    if ((ka(t), t.stateNode === null)) {
      var u = gl,
        x = n.contextType;
      (typeof x == 'object' && x !== null && (u = Tt(x)),
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
        (x = n.contextType),
        (u.context = typeof x == 'object' && x !== null ? Tt(x) : gl),
        (u.state = t.memoizedState),
        (x = n.getDerivedStateFromProps),
        typeof x == 'function' && (ws(t, n, x, a), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((x = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          x !== u.state && zs.enqueueReplaceState(u, u.state, null),
          oi(t, a, u, i),
          ci(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var M = t.memoizedProps,
        G = Pa(n, M);
      u.props = G;
      var k = u.context,
        ee = n.contextType;
      ((x = gl), typeof ee == 'object' && ee !== null && (x = Tt(ee)));
      var ne = n.getDerivedStateFromProps;
      ((ee = typeof ne == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (M = t.pendingProps !== M),
        ee ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((M || k !== x) && dd(t, u, a, x)),
        (va = !1));
      var F = t.memoizedState;
      ((u.state = F),
        oi(t, a, u, i),
        ci(),
        (k = t.memoizedState),
        M || F !== k || va
          ? (typeof ne == 'function' && (ws(t, n, ne, a), (k = t.memoizedState)),
            (G = va || fd(t, n, G, a, F, k, x))
              ? (ee ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = k)),
            (u.props = a),
            (u.state = k),
            (u.context = x),
            (a = G))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1)));
    } else {
      ((u = t.stateNode),
        ss(e, t),
        (x = t.memoizedProps),
        (ee = Pa(n, x)),
        (u.props = ee),
        (ne = t.pendingProps),
        (F = u.context),
        (k = n.contextType),
        (G = gl),
        typeof k == 'object' && k !== null && (G = Tt(k)),
        (M = n.getDerivedStateFromProps),
        (k = typeof M == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((x !== ne || F !== G) && dd(t, u, a, G)),
        (va = !1),
        (F = t.memoizedState),
        (u.state = F),
        oi(t, a, u, i),
        ci());
      var W = t.memoizedState;
      x !== ne || F !== W || va || (e !== null && e.dependencies !== null && su(e.dependencies))
        ? (typeof M == 'function' && (ws(t, n, M, a), (W = t.memoizedState)),
          (ee =
            va ||
            fd(t, n, ee, a, F, W, G) ||
            (e !== null && e.dependencies !== null && su(e.dependencies)))
            ? (k ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(a, W, G),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(a, W, G)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (x === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (x === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = W)),
          (u.props = a),
          (u.state = W),
          (u.context = G),
          (a = ee))
        : (typeof u.componentDidUpdate != 'function' ||
            (x === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (x === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      _u(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (n = a && typeof n.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = Wa(t, e.child, null, i)), (t.child = Wa(t, null, n, i)))
            : Mt(e, t, n, i),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = qn(e, t, i)),
      e
    );
  }
  function _d(e, t, n, a) {
    return (Za(), (t.flags |= 256), Mt(e, t, n, a), t.child);
  }
  var Ls = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Hs(e) {
    return { baseLanes: e, cachePool: gf() };
  }
  function js(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Jt), e);
  }
  function Ad(e, t, n) {
    var a = t.pendingProps,
      i = !1,
      u = (t.flags & 128) !== 0,
      x;
    if (
      ((x = u) || (x = e !== null && e.memoizedState === null ? !1 : (ct.current & 2) !== 0),
      x && ((i = !0), (t.flags &= -129)),
      (x = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ne) {
        if (
          (i ? pa(t) : Sa(),
          (e = et)
            ? ((e = Lm(e, un)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: fa !== null ? { id: Rn, overflow: _n } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = rf(e)),
                (n.return = t),
                (t.child = n),
                (Ct = t),
                (et = null)))
            : (e = null),
          e === null)
        )
          throw ma(t);
        return (xc(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var M = a.children;
      return (
        (a = a.fallback),
        i
          ? (Sa(),
            (i = t.mode),
            (M = Au({ mode: 'hidden', children: M }, i)),
            (a = Qa(a, i, n, null)),
            (M.return = t),
            (a.return = t),
            (M.sibling = a),
            (t.child = M),
            (a = t.child),
            (a.memoizedState = Hs(n)),
            (a.childLanes = js(e, x, n)),
            (t.memoizedState = Ls),
            vi(null, a))
          : (pa(t), Gs(t, M))
      );
    }
    var G = e.memoizedState;
    if (G !== null && ((M = G.dehydrated), M !== null)) {
      if (u)
        t.flags & 256
          ? (pa(t), (t.flags &= -257), (t = Ys(e, t, n)))
          : t.memoizedState !== null
            ? (Sa(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Sa(),
              (M = a.fallback),
              (i = t.mode),
              (a = Au({ mode: 'visible', children: a.children }, i)),
              (M = Qa(M, i, n, null)),
              (M.flags |= 2),
              (a.return = t),
              (M.return = t),
              (a.sibling = M),
              (t.child = a),
              Wa(t, e.child, null, n),
              (a = t.child),
              (a.memoizedState = Hs(n)),
              (a.childLanes = js(e, x, n)),
              (t.memoizedState = Ls),
              (t = vi(null, a)));
      else if ((pa(t), xc(M))) {
        if (((x = M.nextSibling && M.nextSibling.dataset), x)) var k = x.dgst;
        ((x = k),
          (a = Error(h(419))),
          (a.stack = ''),
          (a.digest = x),
          ai({ value: a, source: null, stack: null }),
          (t = Ys(e, t, n)));
      } else if ((ht || xl(e, t, n, !1), (x = (n & e.childLanes) !== 0), ht || x)) {
        if (((x = We), x !== null && ((a = _e(x, n)), a !== 0 && a !== G.retryLane)))
          throw ((G.retryLane = a), Xa(e, a), Yt(x, e, a), Us);
        (Sc(M) || Hu(), (t = Ys(e, t, n)));
      } else
        Sc(M)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = G.treeContext),
            (et = sn(M.nextSibling)),
            (Ct = t),
            (Ne = !0),
            (da = null),
            (un = !1),
            e !== null && of(t, e),
            (t = Gs(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (Sa(),
        (M = a.fallback),
        (i = t.mode),
        (G = e.child),
        (k = G.sibling),
        (a = Ln(G, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = G.subtreeFlags & 65011712),
        k !== null ? (M = Ln(k, M)) : ((M = Qa(M, i, n, null)), (M.flags |= 2)),
        (M.return = t),
        (a.return = t),
        (a.sibling = M),
        (t.child = a),
        vi(null, a),
        (a = t.child),
        (M = e.child.memoizedState),
        M === null
          ? (M = Hs(n))
          : ((i = M.cachePool),
            i !== null
              ? ((G = dt._currentValue), (i = i.parent !== G ? { parent: G, pool: G } : i))
              : (i = gf()),
            (M = { baseLanes: M.baseLanes | n, cachePool: i })),
        (a.memoizedState = M),
        (a.childLanes = js(e, x, n)),
        (t.memoizedState = Ls),
        vi(e.child, a))
      : (pa(t),
        (n = e.child),
        (e = n.sibling),
        (n = Ln(n, { mode: 'visible', children: a.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((x = t.deletions), x === null ? ((t.deletions = [e]), (t.flags |= 16)) : x.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Gs(e, t) {
    return ((t = Au({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function Au(e, t) {
    return ((e = Qt(22, e, null, t)), (e.lanes = 0), e);
  }
  function Ys(e, t, n) {
    return (
      Wa(t, e.child, null, n),
      (e = Gs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Od(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), ts(e.return, t, n));
  }
  function Vs(e, t, n, a, i, u) {
    var x = e.memoizedState;
    x === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: i,
          treeForkCount: u,
        })
      : ((x.isBackwards = t),
        (x.rendering = null),
        (x.renderingStartTime = 0),
        (x.last = a),
        (x.tail = n),
        (x.tailMode = i),
        (x.treeForkCount = u));
  }
  function Dd(e, t, n) {
    var a = t.pendingProps,
      i = a.revealOrder,
      u = a.tail;
    a = a.children;
    var x = ct.current,
      M = (x & 2) !== 0;
    if (
      (M ? ((x = (x & 1) | 2), (t.flags |= 128)) : (x &= 1),
      P(ct, x),
      Mt(e, t, a, n),
      (a = Ne ? ni : 0),
      !M && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Od(e, n, t);
        else if (e.tag === 19) Od(e, n, t);
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
          ((e = n.alternate), e !== null && gu(e) === null && (i = n), (n = n.sibling));
        ((n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          Vs(t, !1, i, n, u, a));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && gu(e) === null)) {
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
  function qn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Ea |= t.lanes), (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((xl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(h(153));
    if (t.child !== null) {
      for (e = t.child, n = Ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = Ln(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function qs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && su(e)));
  }
  function Gg(e, t, n) {
    switch (t.tag) {
      case 3:
        (be(t, t.stateNode.containerInfo), ha(t, dt, e.memoizedState.cache), Za());
        break;
      case 27:
      case 5:
        ke(t);
        break;
      case 4:
        be(t, t.stateNode.containerInfo);
        break;
      case 10:
        ha(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), ms(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (pa(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Ad(e, t, n)
              : (pa(t), (e = qn(e, t, n)), e !== null ? e.sibling : null);
        pa(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((a = (n & t.childLanes) !== 0),
          a || (xl(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
          i)
        ) {
          if (a) return Dd(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          P(ct, ct.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Ed(e, t, n, t.pendingProps));
      case 24:
        ha(t, dt, e.memoizedState.cache);
    }
    return qn(e, t, n);
  }
  function wd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) ht = !0;
      else {
        if (!qs(e, n) && (t.flags & 128) === 0) return ((ht = !1), Gg(e, t, n));
        ht = (e.flags & 131072) !== 0;
      }
    else ((ht = !1), Ne && (t.flags & 1048576) !== 0 && cf(t, ni, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Fa(t.elementType)), (t.type = e), typeof e == 'function'))
            kr(e)
              ? ((a = Pa(e, a)), (t.tag = 1), (t = Rd(null, t, e, a, n)))
              : ((t.tag = 0), (t = Bs(null, t, e, a, n)));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === Y) {
                ((t.tag = 11), (t = Sd(null, t, e, a, n)));
                break e;
              } else if (i === O) {
                ((t.tag = 14), (t = xd(null, t, e, a, n)));
                break e;
              }
            }
            throw ((t = ae(e) || e), Error(h(306, t, '')));
          }
        }
        return t;
      case 0:
        return Bs(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((a = t.type), (i = Pa(a, t.pendingProps)), Rd(e, t, a, i, n));
      case 3:
        e: {
          if ((be(t, t.stateNode.containerInfo), e === null)) throw Error(h(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((i = u.element), ss(e, t), oi(t, a, null, n));
          var x = t.memoizedState;
          if (
            ((a = x.cache),
            ha(t, dt, a),
            a !== u.cache && ns(t, [dt], n, !0),
            ci(),
            (a = x.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: x.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = _d(e, t, a, n);
              break e;
            } else if (a !== i) {
              ((i = nn(Error(h(424)), t)), ai(i), (t = _d(e, t, a, n)));
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
                et = sn(e.firstChild),
                  Ct = t,
                  Ne = !0,
                  da = null,
                  un = !0,
                  n = Ef(t, null, a, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((Za(), a === i)) {
              t = qn(e, t, n);
              break e;
            }
            Mt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          _u(e, t),
          e === null
            ? (n = qm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Ne ||
                ((n = t.type),
                (e = t.pendingProps),
                (a = Qu(se.current).createElement(n)),
                (a[xe] = t),
                (a[Ae] = e),
                Rt(a, n, e),
                st(a),
                (t.stateNode = a))
            : (t.memoizedState = qm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          ke(t),
          e === null &&
            Ne &&
            ((a = t.stateNode = Gm(t.type, t.pendingProps, se.current)),
            (Ct = t),
            (un = !0),
            (i = et),
            _a(t.type) ? ((bc = i), (et = sn(a.firstChild))) : (et = i)),
          Mt(e, t, t.pendingProps.children, n),
          _u(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ne &&
            ((i = a = et) &&
              ((a = v0(a, t.type, t.pendingProps, un)),
              a !== null
                ? ((t.stateNode = a), (Ct = t), (et = sn(a.firstChild)), (un = !1), (i = !0))
                : (i = !1)),
            i || ma(t)),
          ke(t),
          (i = t.type),
          (u = t.pendingProps),
          (x = e !== null ? e.memoizedProps : null),
          (a = u.children),
          gc(i, u) ? (a = null) : x !== null && gc(i, x) && (t.flags |= 32),
          t.memoizedState !== null && ((i = vs(e, t, Dg, null, null, n)), (Di._currentValue = i)),
          _u(e, t),
          Mt(e, t, a, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ne &&
            ((e = n = et) &&
              ((n = g0(n, t.pendingProps, un)),
              n !== null ? ((t.stateNode = n), (Ct = t), (et = null), (e = !0)) : (e = !1)),
            e || ma(t)),
          null
        );
      case 13:
        return Ad(e, t, n);
      case 4:
        return (
          be(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Wa(t, null, a, n)) : Mt(e, t, a, n),
          t.child
        );
      case 11:
        return Sd(e, t, t.type, t.pendingProps, n);
      case 7:
        return (Mt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Mt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Mt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return ((a = t.pendingProps), ha(t, t.type, a.value), Mt(e, t, a.children, n), t.child);
      case 9:
        return (
          (i = t.type._context),
          (a = t.pendingProps.children),
          ka(t),
          (i = Tt(i)),
          (a = a(i)),
          (t.flags |= 1),
          Mt(e, t, a, n),
          t.child
        );
      case 14:
        return xd(e, t, t.type, t.pendingProps, n);
      case 15:
        return bd(e, t, t.type, t.pendingProps, n);
      case 19:
        return Dd(e, t, n);
      case 31:
        return jg(e, t, n);
      case 22:
        return Ed(e, t, n, t.pendingProps);
      case 24:
        return (
          ka(t),
          (a = Tt(dt)),
          e === null
            ? ((i = is()),
              i === null &&
                ((i = We),
                (u = as()),
                (i.pooledCache = u),
                u.refCount++,
                u !== null && (i.pooledCacheLanes |= n),
                (i = u)),
              (t.memoizedState = { parent: a, cache: i }),
              rs(t),
              ha(t, dt, i))
            : ((e.lanes & n) !== 0 && (ss(e, t), oi(t, null, null, n), ci()),
              (i = e.memoizedState),
              (u = t.memoizedState),
              i.parent !== a
                ? ((i = { parent: a, cache: a }),
                  (t.memoizedState = i),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i),
                  ha(t, dt, a))
                : ((a = u.cache), ha(t, dt, a), a !== i.cache && ns(t, [dt], n, !0))),
          Mt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Xn(e) {
    e.flags |= 4;
  }
  function Xs(e, t, n, a, i) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (i & 335544128) === i))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (lm()) e.flags |= 8192;
        else throw (($a = du), us);
    } else e.flags &= -16777217;
  }
  function zd(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !km(t)))
      if (lm()) e.flags |= 8192;
      else throw (($a = du), us);
  }
  function Ou(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? ul() : 536870912), (e.lanes |= t), (zl |= t)));
  }
  function gi(e, t) {
    if (!Ne)
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
  function tt(e) {
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
  function Yg(e, t, n) {
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
        return (tt(t), null);
      case 1:
        return (tt(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Gn(dt),
          Ue(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Sl(t)
              ? Xn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Pr())),
          tt(t),
          null
        );
      case 26:
        var i = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (Xn(t), u !== null ? (tt(t), zd(t, u)) : (tt(t), Xs(t, i, null, a, n)))
            : u
              ? u !== e.memoizedState
                ? (Xn(t), tt(t), zd(t, u))
                : (tt(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== a && Xn(t), tt(t), Xs(t, i, e, a, n)),
          null
        );
      case 27:
        if ((qe(t), (n = se.current), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Xn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(h(166));
            return (tt(t), null);
          }
          ((e = ue.current), Sl(t) ? ff(t) : ((e = Gm(i, a, n)), (t.stateNode = e), Xn(t)));
        }
        return (tt(t), null);
      case 5:
        if ((qe(t), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Xn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(h(166));
            return (tt(t), null);
          }
          if (((u = ue.current), Sl(t))) ff(t);
          else {
            var x = Qu(se.current);
            switch (u) {
              case 1:
                u = x.createElementNS('http://www.w3.org/2000/svg', i);
                break;
              case 2:
                u = x.createElementNS('http://www.w3.org/1998/Math/MathML', i);
                break;
              default:
                switch (i) {
                  case 'svg':
                    u = x.createElementNS('http://www.w3.org/2000/svg', i);
                    break;
                  case 'math':
                    u = x.createElementNS('http://www.w3.org/1998/Math/MathML', i);
                    break;
                  case 'script':
                    ((u = x.createElement('div')),
                      (u.innerHTML = '<script><\/script>'),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case 'select':
                    ((u =
                      typeof a.is == 'string'
                        ? x.createElement('select', { is: a.is })
                        : x.createElement('select')),
                      a.multiple ? (u.multiple = !0) : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == 'string'
                        ? x.createElement(i, { is: a.is })
                        : x.createElement(i);
                }
            }
            ((u[xe] = t), (u[Ae] = a));
            e: for (x = t.child; x !== null; ) {
              if (x.tag === 5 || x.tag === 6) u.appendChild(x.stateNode);
              else if (x.tag !== 4 && x.tag !== 27 && x.child !== null) {
                ((x.child.return = x), (x = x.child));
                continue;
              }
              if (x === t) break e;
              for (; x.sibling === null; ) {
                if (x.return === null || x.return === t) break e;
                x = x.return;
              }
              ((x.sibling.return = x.return), (x = x.sibling));
            }
            t.stateNode = u;
            e: switch ((Rt(u, i, a), i)) {
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
            a && Xn(t);
          }
        }
        return (tt(t), Xs(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Xn(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(h(166));
          if (((e = se.current), Sl(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (a = null), (i = Ct), i !== null))
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            ((e[xe] = t),
              (e = !!(
                e.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Am(e.nodeValue, n)
              )),
              e || ma(t, !0));
          } else ((e = Qu(e).createTextNode(a)), (e[xe] = t), (t.stateNode = e));
        }
        return (tt(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = Sl(t)), n !== null)) {
            if (e === null) {
              if (!a) throw Error(h(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(h(557));
              e[xe] = t;
            } else (Za(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (tt(t), (e = !1));
          } else
            ((n = Pr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (Kt(t), t) : (Kt(t), null);
          if ((t.flags & 128) !== 0) throw Error(h(558));
        }
        return (tt(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = Sl(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(h(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(h(317));
              i[xe] = t;
            } else (Za(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (tt(t), (i = !1));
          } else
            ((i = Pr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i),
              (i = !0));
          if (!i) return t.flags & 256 ? (Kt(t), t) : (Kt(t), null);
        }
        return (
          Kt(t),
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
              Ou(t, t.updateQueue),
              tt(t),
              null)
        );
      case 4:
        return (Ue(), e === null && fc(t.stateNode.containerInfo), tt(t), null);
      case 10:
        return (Gn(t.type), tt(t), null);
      case 19:
        if ((Z(ct), (a = t.memoizedState), a === null)) return (tt(t), null);
        if (((i = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (i) gi(a, !1);
          else {
            if (ut !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = gu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      gi(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Ou(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (uf(n, e), (n = n.sibling));
                  return (P(ct, (ct.current & 1) | 2), Ne && Hn(t, a.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            a.tail !== null &&
              pt() > Uu &&
              ((t.flags |= 128), (i = !0), gi(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = gu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Ou(t, e),
                gi(a, !0),
                a.tail === null && a.tailMode === 'hidden' && !u.alternate && !Ne)
              )
                return (tt(t), null);
            } else
              2 * pt() - a.renderingStartTime > Uu &&
                n !== 536870912 &&
                ((t.flags |= 128), (i = !0), gi(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = a.last), e !== null ? (e.sibling = u) : (t.child = u), (a.last = u));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = pt()),
            (e.sibling = null),
            (n = ct.current),
            P(ct, i ? (n & 1) | 2 : n & 1),
            Ne && Hn(t, a.treeForkCount),
            e)
          : (tt(t), null);
      case 22:
      case 23:
        return (
          Kt(t),
          ds(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : tt(t),
          (n = t.updateQueue),
          n !== null && Ou(t, n.retryQueue),
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
          e !== null && Z(Ja),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Gn(dt),
          tt(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function Vg(e, t) {
    switch ((Wr(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          Gn(dt),
          Ue(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (qe(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Kt(t), t.alternate === null)) throw Error(h(340));
          Za();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 13:
        if ((Kt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(h(340));
          Za();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Z(ct), null);
      case 4:
        return (Ue(), null);
      case 10:
        return (Gn(t.type), null);
      case 22:
      case 23:
        return (
          Kt(t),
          ds(),
          e !== null && Z(Ja),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Gn(dt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Nd(e, t) {
    switch ((Wr(t), t.tag)) {
      case 3:
        (Gn(dt), Ue());
        break;
      case 26:
      case 27:
      case 5:
        qe(t);
        break;
      case 4:
        Ue();
        break;
      case 31:
        t.memoizedState !== null && Kt(t);
        break;
      case 13:
        Kt(t);
        break;
      case 19:
        Z(ct);
        break;
      case 10:
        Gn(t.type);
        break;
      case 22:
      case 23:
        (Kt(t), ds(), e !== null && Z(Ja));
        break;
      case 24:
        Gn(dt);
    }
  }
  function yi(e, t) {
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
              x = n.inst;
            ((a = u()), (x.destroy = a));
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (M) {
      Ke(t, t.return, M);
    }
  }
  function xa(e, t, n) {
    try {
      var a = t.updateQueue,
        i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var x = a.inst,
              M = x.destroy;
            if (M !== void 0) {
              ((x.destroy = void 0), (i = t));
              var G = n,
                k = M;
              try {
                k();
              } catch (ee) {
                Ke(i, G, ee);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (ee) {
      Ke(t, t.return, ee);
    }
  }
  function Ud(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Tf(t, n);
      } catch (a) {
        Ke(e, e.return, a);
      }
    }
  }
  function Bd(e, t, n) {
    ((n.props = Pa(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      Ke(e, t, a);
    }
  }
  function pi(e, t) {
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
      Ke(e, t, i);
    }
  }
  function An(e, t) {
    var n = e.ref,
      a = e.refCleanup;
    if (n !== null)
      if (typeof a == 'function')
        try {
          a();
        } catch (i) {
          Ke(e, t, i);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof n == 'function')
        try {
          n(null);
        } catch (i) {
          Ke(e, t, i);
        }
      else n.current = null;
  }
  function Ld(e) {
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
      Ke(e, e.return, i);
    }
  }
  function Qs(e, t, n) {
    try {
      var a = e.stateNode;
      (c0(a, e.type, n, t), (a[Ae] = t));
    } catch (i) {
      Ke(e, e.return, i);
    }
  }
  function Hd(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && _a(e.type)) || e.tag === 4
    );
  }
  function Zs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Hd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if ((e.tag === 27 && _a(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
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
            n != null || t.onclick !== null || (t.onclick = Un)));
    else if (
      a !== 4 &&
      (a === 27 && _a(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (Ks(e, t, n), e = e.sibling; e !== null; ) (Ks(e, t, n), (e = e.sibling));
  }
  function Du(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (a !== 4 && (a === 27 && _a(e.type) && (n = e.stateNode), (e = e.child), e !== null))
      for (Du(e, t, n), e = e.sibling; e !== null; ) (Du(e, t, n), (e = e.sibling));
  }
  function jd(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0]);
      (Rt(t, a, n), (t[xe] = e), (t[Ae] = n));
    } catch (u) {
      Ke(e, e.return, u);
    }
  }
  var Qn = !1,
    vt = !1,
    ks = !1,
    Gd = typeof WeakSet == 'function' ? WeakSet : Set,
    St = null;
  function qg(e, t) {
    if (((e = e.containerInfo), (hc = Wu), (e = $o(e)), Yr(e))) {
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
            var x = 0,
              M = -1,
              G = -1,
              k = 0,
              ee = 0,
              ne = e,
              F = null;
            t: for (;;) {
              for (
                var W;
                ne !== n || (i !== 0 && ne.nodeType !== 3) || (M = x + i),
                  ne !== u || (a !== 0 && ne.nodeType !== 3) || (G = x + a),
                  ne.nodeType === 3 && (x += ne.nodeValue.length),
                  (W = ne.firstChild) !== null;
              )
                ((F = ne), (ne = W));
              for (;;) {
                if (ne === e) break t;
                if (
                  (F === n && ++k === i && (M = x),
                  F === u && ++ee === a && (G = x),
                  (W = ne.nextSibling) !== null)
                )
                  break;
                ((ne = F), (F = ne.parentNode));
              }
              ne = W;
            }
            n = M === -1 || G === -1 ? null : { start: M, end: G };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (vc = { focusedElem: e, selectionRange: n }, Wu = !1, St = t; St !== null; )
      if (((t = St), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (St = e));
      else
        for (; St !== null; ) {
          switch (((t = St), (u = t.alternate), (e = t.flags), t.tag)) {
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
                  var fe = Pa(n.type, i);
                  ((e = a.getSnapshotBeforeUpdate(fe, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (ye) {
                  Ke(n, n.return, ye);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) pc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      pc(e);
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
            ((e.return = t.return), (St = e));
            break;
          }
          St = t.return;
        }
  }
  function Yd(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Kn(e, n), a & 4 && yi(5, n));
        break;
      case 1:
        if ((Kn(e, n), a & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (x) {
              Ke(n, n.return, x);
            }
          else {
            var i = Pa(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (x) {
              Ke(n, n.return, x);
            }
          }
        (a & 64 && Ud(n), a & 512 && pi(n, n.return));
        break;
      case 3:
        if ((Kn(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
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
            Tf(e, t);
          } catch (x) {
            Ke(n, n.return, x);
          }
        }
        break;
      case 27:
        t === null && a & 4 && jd(n);
      case 26:
      case 5:
        (Kn(e, n), t === null && a & 4 && Ld(n), a & 512 && pi(n, n.return));
        break;
      case 12:
        Kn(e, n);
        break;
      case 31:
        (Kn(e, n), a & 4 && Xd(e, n));
        break;
      case 13:
        (Kn(e, n),
          a & 4 && Qd(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((n = Wg.bind(null, n)), y0(e, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || Qn), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || vt), (i = Qn));
          var u = vt;
          ((Qn = a),
            (vt = t) && !u ? kn(e, n, (n.subtreeFlags & 8772) !== 0) : Kn(e, n),
            (Qn = i),
            (vt = u));
        }
        break;
      case 30:
        break;
      default:
        Kn(e, n);
    }
  }
  function Vd(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Vd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && yn(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var at = null,
    Lt = !1;
  function Zn(e, t, n) {
    for (n = n.child; n !== null; ) (qd(e, t, n), (n = n.sibling));
  }
  function qd(e, t, n) {
    if (At && typeof At.onCommitFiberUnmount == 'function')
      try {
        At.onCommitFiberUnmount(hn, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (vt || An(n, t),
          Zn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        vt || An(n, t);
        var a = at,
          i = Lt;
        (_a(n.type) && ((at = n.stateNode), (Lt = !1)),
          Zn(e, t, n),
          _i(n.stateNode),
          (at = a),
          (Lt = i));
        break;
      case 5:
        vt || An(n, t);
      case 6:
        if (((a = at), (i = Lt), (at = null), Zn(e, t, n), (at = a), (Lt = i), at !== null))
          if (Lt)
            try {
              (at.nodeType === 9
                ? at.body
                : at.nodeName === 'HTML'
                  ? at.ownerDocument.body
                  : at
              ).removeChild(n.stateNode);
            } catch (u) {
              Ke(n, t, u);
            }
          else
            try {
              at.removeChild(n.stateNode);
            } catch (u) {
              Ke(n, t, u);
            }
        break;
      case 18:
        at !== null &&
          (Lt
            ? ((e = at),
              Um(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                n.stateNode
              ),
              Yl(e))
            : Um(at, n.stateNode));
        break;
      case 4:
        ((a = at),
          (i = Lt),
          (at = n.stateNode.containerInfo),
          (Lt = !0),
          Zn(e, t, n),
          (at = a),
          (Lt = i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (xa(2, n, t), vt || xa(4, n, t), Zn(e, t, n));
        break;
      case 1:
        (vt ||
          (An(n, t), (a = n.stateNode), typeof a.componentWillUnmount == 'function' && Bd(n, t, a)),
          Zn(e, t, n));
        break;
      case 21:
        Zn(e, t, n);
        break;
      case 22:
        ((vt = (a = vt) || n.memoizedState !== null), Zn(e, t, n), (vt = a));
        break;
      default:
        Zn(e, t, n);
    }
  }
  function Xd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Yl(e);
      } catch (n) {
        Ke(t, t.return, n);
      }
    }
  }
  function Qd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Yl(e);
      } catch (n) {
        Ke(t, t.return, n);
      }
  }
  function Xg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Gd()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Gd()),
          t
        );
      default:
        throw Error(h(435, e.tag));
    }
  }
  function wu(e, t) {
    var n = Xg(e);
    t.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var i = Ig.bind(null, e, a);
        a.then(i, i);
      }
    });
  }
  function Ht(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a],
          u = e,
          x = t,
          M = x;
        e: for (; M !== null; ) {
          switch (M.tag) {
            case 27:
              if (_a(M.type)) {
                ((at = M.stateNode), (Lt = !1));
                break e;
              }
              break;
            case 5:
              ((at = M.stateNode), (Lt = !1));
              break e;
            case 3:
            case 4:
              ((at = M.stateNode.containerInfo), (Lt = !0));
              break e;
          }
          M = M.return;
        }
        if (at === null) throw Error(h(160));
        (qd(u, x, i),
          (at = null),
          (Lt = !1),
          (u = i.alternate),
          u !== null && (u.return = null),
          (i.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (Zd(t, e), (t = t.sibling));
  }
  var Sn = null;
  function Zd(e, t) {
    var n = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ht(t, e), jt(e), a & 4 && (xa(3, e, e.return), yi(3, e), xa(5, e, e.return)));
        break;
      case 1:
        (Ht(t, e),
          jt(e),
          a & 512 && (vt || n === null || An(n, n.return)),
          a & 64 &&
            Qn &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var i = Sn;
        if ((Ht(t, e), jt(e), a & 512 && (vt || n === null || An(n, n.return)), a & 4)) {
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
                          u[Mn] ||
                          u[xe] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = i.createElement(a)),
                          i.head.insertBefore(u, i.querySelector('head > title'))),
                        Rt(u, a, n),
                        (u[xe] = e),
                        st(u),
                        (a = u));
                      break e;
                    case 'link':
                      var x = Zm('link', 'href', i).get(a + (n.href || ''));
                      if (x) {
                        for (var M = 0; M < x.length; M++)
                          if (
                            ((u = x[M]),
                            u.getAttribute('href') ===
                              (n.href == null || n.href === '' ? null : n.href) &&
                              u.getAttribute('rel') === (n.rel == null ? null : n.rel) &&
                              u.getAttribute('title') === (n.title == null ? null : n.title) &&
                              u.getAttribute('crossorigin') ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            x.splice(M, 1);
                            break t;
                          }
                      }
                      ((u = i.createElement(a)), Rt(u, a, n), i.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((x = Zm('meta', 'content', i).get(a + (n.content || '')))) {
                        for (M = 0; M < x.length; M++)
                          if (
                            ((u = x[M]),
                            u.getAttribute('content') ===
                              (n.content == null ? null : '' + n.content) &&
                              u.getAttribute('name') === (n.name == null ? null : n.name) &&
                              u.getAttribute('property') ===
                                (n.property == null ? null : n.property) &&
                              u.getAttribute('http-equiv') ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              u.getAttribute('charset') === (n.charSet == null ? null : n.charSet))
                          ) {
                            x.splice(M, 1);
                            break t;
                          }
                      }
                      ((u = i.createElement(a)), Rt(u, a, n), i.head.appendChild(u));
                      break;
                    default:
                      throw Error(h(468, a));
                  }
                  ((u[xe] = e), st(u), (a = u));
                }
                e.stateNode = a;
              } else Km(i, e.type, e.stateNode);
            else e.stateNode = Qm(i, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                a === null ? Km(i, e.type, e.stateNode) : Qm(i, a, e.memoizedProps))
              : a === null && e.stateNode !== null && Qs(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Ht(t, e),
          jt(e),
          a & 512 && (vt || n === null || An(n, n.return)),
          n !== null && a & 4 && Qs(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((Ht(t, e), jt(e), a & 512 && (vt || n === null || An(n, n.return)), e.flags & 32)) {
          i = e.stateNode;
          try {
            cl(i, '');
          } catch (fe) {
            Ke(e, e.return, fe);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), Qs(e, i, n !== null ? n.memoizedProps : i)),
          a & 1024 && (ks = !0));
        break;
      case 6:
        if ((Ht(t, e), jt(e), a & 4)) {
          if (e.stateNode === null) throw Error(h(162));
          ((a = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = a;
          } catch (fe) {
            Ke(e, e.return, fe);
          }
        }
        break;
      case 3:
        if (
          ((ku = null),
          (i = Sn),
          (Sn = Zu(t.containerInfo)),
          Ht(t, e),
          (Sn = i),
          jt(e),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Yl(t.containerInfo);
          } catch (fe) {
            Ke(e, e.return, fe);
          }
        ks && ((ks = !1), Kd(e));
        break;
      case 4:
        ((a = Sn), (Sn = Zu(e.stateNode.containerInfo)), Ht(t, e), jt(e), (Sn = a));
        break;
      case 12:
        (Ht(t, e), jt(e));
        break;
      case 31:
        (Ht(t, e),
          jt(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), wu(e, a))));
        break;
      case 13:
        (Ht(t, e),
          jt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (Nu = pt()),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), wu(e, a))));
        break;
      case 22:
        i = e.memoizedState !== null;
        var G = n !== null && n.memoizedState !== null,
          k = Qn,
          ee = vt;
        if (((Qn = k || i), (vt = ee || G), Ht(t, e), (vt = ee), (Qn = k), jt(e), a & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (n === null || G || Qn || vt || el(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                G = n = t;
                try {
                  if (((u = G.stateNode), i))
                    ((x = u.style),
                      typeof x.setProperty == 'function'
                        ? x.setProperty('display', 'none', 'important')
                        : (x.display = 'none'));
                  else {
                    M = G.stateNode;
                    var ne = G.memoizedProps.style,
                      F = ne != null && ne.hasOwnProperty('display') ? ne.display : null;
                    M.style.display = F == null || typeof F == 'boolean' ? '' : ('' + F).trim();
                  }
                } catch (fe) {
                  Ke(G, G.return, fe);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                G = t;
                try {
                  G.stateNode.nodeValue = i ? '' : G.memoizedProps;
                } catch (fe) {
                  Ke(G, G.return, fe);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                G = t;
                try {
                  var W = G.stateNode;
                  i ? Bm(W, !0) : Bm(G.stateNode, !1);
                } catch (fe) {
                  Ke(G, G.return, fe);
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
          a !== null && ((n = a.retryQueue), n !== null && ((a.retryQueue = null), wu(e, n))));
        break;
      case 19:
        (Ht(t, e),
          jt(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), wu(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ht(t, e), jt(e));
    }
  }
  function jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (Hd(a)) {
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
            Du(e, u, i);
            break;
          case 5:
            var x = n.stateNode;
            n.flags & 32 && (cl(x, ''), (n.flags &= -33));
            var M = Zs(e);
            Du(e, M, x);
            break;
          case 3:
          case 4:
            var G = n.stateNode.containerInfo,
              k = Zs(e);
            Ks(e, k, G);
            break;
          default:
            throw Error(h(161));
        }
      } catch (ee) {
        Ke(e, e.return, ee);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Kd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Kd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function Kn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Yd(e, t.alternate, t), (t = t.sibling));
  }
  function el(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (xa(4, t, t.return), el(t));
          break;
        case 1:
          An(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == 'function' && Bd(t, t.return, n), el(t));
          break;
        case 27:
          _i(t.stateNode);
        case 26:
        case 5:
          (An(t, t.return), el(t));
          break;
        case 22:
          t.memoizedState === null && el(t);
          break;
        case 30:
          el(t);
          break;
        default:
          el(t);
      }
      e = e.sibling;
    }
  }
  function kn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        i = e,
        u = t,
        x = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (kn(i, u, n), yi(4, u));
          break;
        case 1:
          if ((kn(i, u, n), (a = u), (i = a.stateNode), typeof i.componentDidMount == 'function'))
            try {
              i.componentDidMount();
            } catch (k) {
              Ke(a, a.return, k);
            }
          if (((a = u), (i = a.updateQueue), i !== null)) {
            var M = a.stateNode;
            try {
              var G = i.shared.hiddenCallbacks;
              if (G !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < G.length; i++) Cf(G[i], M);
            } catch (k) {
              Ke(a, a.return, k);
            }
          }
          (n && x & 64 && Ud(u), pi(u, u.return));
          break;
        case 27:
          jd(u);
        case 26:
        case 5:
          (kn(i, u, n), n && a === null && x & 4 && Ld(u), pi(u, u.return));
          break;
        case 12:
          kn(i, u, n);
          break;
        case 31:
          (kn(i, u, n), n && x & 4 && Xd(i, u));
          break;
        case 13:
          (kn(i, u, n), n && x & 4 && Qd(i, u));
          break;
        case 22:
          (u.memoizedState === null && kn(i, u, n), pi(u, u.return));
          break;
        case 30:
          break;
        default:
          kn(i, u, n);
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
      e !== n && (e != null && e.refCount++, n != null && li(n)));
  }
  function Fs(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && li(e)));
  }
  function xn(e, t, n, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (kd(e, t, n, a), (t = t.sibling));
  }
  function kd(e, t, n, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (xn(e, t, n, a), i & 2048 && yi(9, t));
        break;
      case 1:
        xn(e, t, n, a);
        break;
      case 3:
        (xn(e, t, n, a),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && li(e))));
        break;
      case 12:
        if (i & 2048) {
          (xn(e, t, n, a), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              x = u.id,
              M = u.onPostCommit;
            typeof M == 'function' &&
              M(x, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (G) {
            Ke(t, t.return, G);
          }
        } else xn(e, t, n, a);
        break;
      case 31:
        xn(e, t, n, a);
        break;
      case 13:
        xn(e, t, n, a);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (x = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? xn(e, t, n, a)
              : Si(e, t)
            : u._visibility & 2
              ? xn(e, t, n, a)
              : ((u._visibility |= 2), Ol(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          i & 2048 && Js(x, t));
        break;
      case 24:
        (xn(e, t, n, a), i & 2048 && Fs(t.alternate, t));
        break;
      default:
        xn(e, t, n, a);
    }
  }
  function Ol(e, t, n, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e,
        x = t,
        M = n,
        G = a,
        k = x.flags;
      switch (x.tag) {
        case 0:
        case 11:
        case 15:
          (Ol(u, x, M, G, i), yi(8, x));
          break;
        case 23:
          break;
        case 22:
          var ee = x.stateNode;
          (x.memoizedState !== null
            ? ee._visibility & 2
              ? Ol(u, x, M, G, i)
              : Si(u, x)
            : ((ee._visibility |= 2), Ol(u, x, M, G, i)),
            i && k & 2048 && Js(x.alternate, x));
          break;
        case 24:
          (Ol(u, x, M, G, i), i && k & 2048 && Fs(x.alternate, x));
          break;
        default:
          Ol(u, x, M, G, i);
      }
      t = t.sibling;
    }
  }
  function Si(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          a = t,
          i = a.flags;
        switch (a.tag) {
          case 22:
            (Si(n, a), i & 2048 && Js(a.alternate, a));
            break;
          case 24:
            (Si(n, a), i & 2048 && Fs(a.alternate, a));
            break;
          default:
            Si(n, a);
        }
        t = t.sibling;
      }
  }
  var xi = 8192;
  function Dl(e, t, n) {
    if (e.subtreeFlags & xi) for (e = e.child; e !== null; ) (Jd(e, t, n), (e = e.sibling));
  }
  function Jd(e, t, n) {
    switch (e.tag) {
      case 26:
        (Dl(e, t, n),
          e.flags & xi && e.memoizedState !== null && O0(n, Sn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Dl(e, t, n);
        break;
      case 3:
      case 4:
        var a = Sn;
        ((Sn = Zu(e.stateNode.containerInfo)), Dl(e, t, n), (Sn = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = xi), (xi = 16777216), Dl(e, t, n), (xi = a))
            : Dl(e, t, n));
        break;
      default:
        Dl(e, t, n);
    }
  }
  function Fd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function bi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((St = a), Wd(a, e));
        }
      Fd(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) ($d(e), (e = e.sibling));
  }
  function $d(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (bi(e), e.flags & 2048 && xa(9, e, e.return));
        break;
      case 3:
        bi(e);
        break;
      case 12:
        bi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), zu(e))
          : bi(e);
        break;
      default:
        bi(e);
    }
  }
  function zu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((St = a), Wd(a, e));
        }
      Fd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (xa(8, t, t.return), zu(t));
          break;
        case 22:
          ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), zu(t)));
          break;
        default:
          zu(t);
      }
      e = e.sibling;
    }
  }
  function Wd(e, t) {
    for (; St !== null; ) {
      var n = St;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          xa(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          li(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (St = a));
      else
        e: for (n = e; St !== null; ) {
          a = St;
          var i = a.sibling,
            u = a.return;
          if ((Vd(a), a === n)) {
            St = null;
            break e;
          }
          if (i !== null) {
            ((i.return = u), (St = i));
            break e;
          }
          St = u;
        }
    }
  }
  var Qg = {
      getCacheForType: function (e) {
        var t = Tt(dt),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return Tt(dt).controller.signal;
      },
    },
    Zg = typeof WeakMap == 'function' ? WeakMap : Map,
    Ve = 0,
    We = null,
    Oe = null,
    we = 0,
    Ze = 0,
    kt = null,
    ba = !1,
    wl = !1,
    $s = !1,
    Jn = 0,
    ut = 0,
    Ea = 0,
    tl = 0,
    Ws = 0,
    Jt = 0,
    zl = 0,
    Ei = null,
    Gt = null,
    Is = !1,
    Nu = 0,
    Id = 0,
    Uu = 1 / 0,
    Bu = null,
    Ca = null,
    gt = 0,
    Ta = null,
    Nl = null,
    Fn = 0,
    Ps = 0,
    ec = null,
    Pd = null,
    Ci = 0,
    tc = null;
  function Ft() {
    return (Ve & 2) !== 0 && we !== 0 ? we & -we : A.T !== null ? rc() : Re();
  }
  function em() {
    if (Jt === 0)
      if ((we & 536870912) === 0 || Ne) {
        var e = ll;
        ((ll <<= 1), (ll & 3932160) === 0 && (ll = 262144), (Jt = e));
      } else Jt = 536870912;
    return ((e = Zt.current), e !== null && (e.flags |= 32), Jt);
  }
  function Yt(e, t, n) {
    (((e === We && (Ze === 2 || Ze === 9)) || e.cancelPendingCommit !== null) &&
      (Ul(e, 0), Ma(e, we, Jt, !1)),
      Ha(e, n),
      ((Ve & 2) === 0 || e !== We) &&
        (e === We && ((Ve & 2) === 0 && (tl |= n), ut === 4 && Ma(e, we, Jt, !1)), On(e)));
  }
  function tm(e, t, n) {
    if ((Ve & 6) !== 0) throw Error(h(327));
    var a = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || La(e, t),
      i = a ? Jg(e, t) : ac(e, t, !0),
      u = a;
    do {
      if (i === 0) {
        wl && !a && Ma(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !Kg(n))) {
          ((i = ac(e, t, !1)), (u = !1));
          continue;
        }
        if (i === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var x = 0;
          else
            ((x = e.pendingLanes & -536870913), (x = x !== 0 ? x : x & 536870912 ? 536870912 : 0));
          if (x !== 0) {
            t = x;
            e: {
              var M = e;
              i = Ei;
              var G = M.current.memoizedState.isDehydrated;
              if ((G && (Ul(M, x).flags |= 256), (x = ac(M, x, !1)), x !== 2)) {
                if ($s && !G) {
                  ((M.errorRecoveryDisabledLanes |= u), (tl |= u), (i = 4));
                  break e;
                }
                ((u = Gt), (Gt = i), u !== null && (Gt === null ? (Gt = u) : Gt.push.apply(Gt, u)));
              }
              i = x;
            }
            if (((u = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (Ul(e, 0), Ma(e, t, 0, !0));
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
              Ma(a, t, Jt, !ba);
              break e;
            case 2:
              Gt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && ((i = Nu + 300 - pt()), 10 < i)) {
            if ((Ma(a, t, Jt, !ba), sa(a, 0, !0) !== 0)) break e;
            ((Fn = t),
              (a.timeoutHandle = zm(
                nm.bind(null, a, n, Gt, Bu, Is, t, Jt, tl, zl, ba, u, 'Throttled', -0, 0),
                i
              )));
            break e;
          }
          nm(a, n, Gt, Bu, Is, t, Jt, tl, zl, ba, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    On(e);
  }
  function nm(e, t, n, a, i, u, x, M, G, k, ee, ne, F, W) {
    if (
      ((e.timeoutHandle = -1), (ne = t.subtreeFlags), ne & 8192 || (ne & 16785408) === 16785408)
    ) {
      ((ne = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Un,
      }),
        Jd(t, u, ne));
      var fe = (u & 62914560) === u ? Nu - pt() : (u & 4194048) === u ? Id - pt() : 0;
      if (((fe = D0(ne, fe)), fe !== null)) {
        ((Fn = u),
          (e.cancelPendingCommit = fe(
            om.bind(null, e, t, u, n, a, i, x, M, G, ee, ne, null, F, W)
          )),
          Ma(e, u, x, !k));
        return;
      }
    }
    om(e, t, u, n, a, i, x, M, G);
  }
  function Kg(e) {
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
            if (!Xt(u(), i)) return !1;
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
  function Ma(e, t, n, a) {
    ((t &= ~Ws),
      (t &= ~tl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var i = t; 0 < i; ) {
      var u = 31 - Ot(i),
        x = 1 << u;
      ((a[u] = -1), (i &= ~x));
    }
    n !== 0 && re(e, n, t);
  }
  function Lu() {
    return (Ve & 6) === 0 ? (Ti(0), !1) : !0;
  }
  function nc() {
    if (Oe !== null) {
      if (Ze === 0) var e = Oe.return;
      else ((e = Oe), (jn = Ka = null), ps(e), (Tl = null), (ui = 0), (e = Oe));
      for (; e !== null; ) (Nd(e.alternate, e), (e = e.return));
      Oe = null;
    }
  }
  function Ul(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), d0(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (Fn = 0),
      nc(),
      (We = e),
      (Oe = n = Ln(e.current, null)),
      (we = t),
      (Ze = 0),
      (kt = null),
      (ba = !1),
      (wl = La(e, t)),
      ($s = !1),
      (zl = Jt = Ws = tl = Ea = ut = 0),
      (Gt = Ei = null),
      (Is = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - Ot(a),
          u = 1 << i;
        ((t |= e[i]), (a &= ~u));
      }
    return ((Jn = t), au(), n);
  }
  function am(e, t) {
    ((Ce = null),
      (A.H = hi),
      t === Cl || t === fu
        ? ((t = Sf()), (Ze = 3))
        : t === us
          ? ((t = Sf()), (Ze = 4))
          : (Ze =
              t === Us
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (kt = t),
      Oe === null && ((ut = 1), Mu(e, nn(t, e.current))));
  }
  function lm() {
    var e = Zt.current;
    return e === null
      ? !0
      : (we & 4194048) === we
        ? rn === null
        : (we & 62914560) === we || (we & 536870912) !== 0
          ? e === rn
          : !1;
  }
  function im() {
    var e = A.H;
    return ((A.H = hi), e === null ? hi : e);
  }
  function um() {
    var e = A.A;
    return ((A.A = Qg), e);
  }
  function Hu() {
    ((ut = 4),
      ba || ((we & 4194048) !== we && Zt.current !== null) || (wl = !0),
      ((Ea & 134217727) === 0 && (tl & 134217727) === 0) || We === null || Ma(We, we, Jt, !1));
  }
  function ac(e, t, n) {
    var a = Ve;
    Ve |= 2;
    var i = im(),
      u = um();
    ((We !== e || we !== t) && ((Bu = null), Ul(e, t)), (t = !1));
    var x = ut;
    e: do
      try {
        if (Ze !== 0 && Oe !== null) {
          var M = Oe,
            G = kt;
          switch (Ze) {
            case 8:
              (nc(), (x = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Zt.current === null && (t = !0);
              var k = Ze;
              if (((Ze = 0), (kt = null), Bl(e, M, G, k), n && wl)) {
                x = 0;
                break e;
              }
              break;
            default:
              ((k = Ze), (Ze = 0), (kt = null), Bl(e, M, G, k));
          }
        }
        (kg(), (x = ut));
        break;
      } catch (ee) {
        am(e, ee);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (jn = Ka = null),
      (Ve = a),
      (A.H = i),
      (A.A = u),
      Oe === null && ((We = null), (we = 0), au()),
      x
    );
  }
  function kg() {
    for (; Oe !== null; ) rm(Oe);
  }
  function Jg(e, t) {
    var n = Ve;
    Ve |= 2;
    var a = im(),
      i = um();
    We !== e || we !== t ? ((Bu = null), (Uu = pt() + 500), Ul(e, t)) : (wl = La(e, t));
    e: do
      try {
        if (Ze !== 0 && Oe !== null) {
          t = Oe;
          var u = kt;
          t: switch (Ze) {
            case 1:
              ((Ze = 0), (kt = null), Bl(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (yf(u)) {
                ((Ze = 0), (kt = null), sm(t));
                break;
              }
              ((t = function () {
                ((Ze !== 2 && Ze !== 9) || We !== e || (Ze = 7), On(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              Ze = 7;
              break e;
            case 4:
              Ze = 5;
              break e;
            case 7:
              yf(u) ? ((Ze = 0), (kt = null), sm(t)) : ((Ze = 0), (kt = null), Bl(e, t, u, 7));
              break;
            case 5:
              var x = null;
              switch (Oe.tag) {
                case 26:
                  x = Oe.memoizedState;
                case 5:
                case 27:
                  var M = Oe;
                  if (x ? km(x) : M.stateNode.complete) {
                    ((Ze = 0), (kt = null));
                    var G = M.sibling;
                    if (G !== null) Oe = G;
                    else {
                      var k = M.return;
                      k !== null ? ((Oe = k), ju(k)) : (Oe = null);
                    }
                    break t;
                  }
              }
              ((Ze = 0), (kt = null), Bl(e, t, u, 5));
              break;
            case 6:
              ((Ze = 0), (kt = null), Bl(e, t, u, 6));
              break;
            case 8:
              (nc(), (ut = 6));
              break e;
            default:
              throw Error(h(462));
          }
        }
        Fg();
        break;
      } catch (ee) {
        am(e, ee);
      }
    while (!0);
    return (
      (jn = Ka = null),
      (A.H = a),
      (A.A = i),
      (Ve = n),
      Oe !== null ? 0 : ((We = null), (we = 0), au(), ut)
    );
  }
  function Fg() {
    for (; Oe !== null && !ua(); ) rm(Oe);
  }
  function rm(e) {
    var t = wd(e.alternate, e, Jn);
    ((e.memoizedProps = e.pendingProps), t === null ? ju(e) : (Oe = t));
  }
  function sm(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Md(n, t, t.pendingProps, t.type, void 0, we);
        break;
      case 11:
        t = Md(n, t, t.pendingProps, t.type.render, t.ref, we);
        break;
      case 5:
        ps(t);
      default:
        (Nd(n, t), (t = Oe = uf(t, Jn)), (t = wd(n, t, Jn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? ju(e) : (Oe = t));
  }
  function Bl(e, t, n, a) {
    ((jn = Ka = null), ps(t), (Tl = null), (ui = 0));
    var i = t.return;
    try {
      if (Hg(e, i, t, n, we)) {
        ((ut = 1), Mu(e, nn(n, e.current)), (Oe = null));
        return;
      }
    } catch (u) {
      if (i !== null) throw ((Oe = i), u);
      ((ut = 1), Mu(e, nn(n, e.current)), (Oe = null));
      return;
    }
    t.flags & 32768
      ? (Ne || a === 1
          ? (e = !0)
          : wl || (we & 536870912) !== 0
            ? (e = !1)
            : ((ba = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Zt.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        cm(t, e))
      : ju(t);
  }
  function ju(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        cm(t, ba);
        return;
      }
      e = t.return;
      var n = Yg(t.alternate, t, Jn);
      if (n !== null) {
        Oe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Oe = t;
        return;
      }
      Oe = t = e;
    } while (t !== null);
    ut === 0 && (ut = 5);
  }
  function cm(e, t) {
    do {
      var n = Vg(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (Oe = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Oe = e;
        return;
      }
      Oe = e = n;
    } while (e !== null);
    ((ut = 6), (Oe = null));
  }
  function om(e, t, n, a, i, u, x, M, G) {
    e.cancelPendingCommit = null;
    do Gu();
    while (gt !== 0);
    if ((Ve & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === e.current) throw Error(h(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Zr),
        Cr(e, n, u, x, M, G),
        e === We && ((Oe = We = null), (we = 0)),
        (Nl = t),
        (Ta = e),
        (Fn = n),
        (Ps = u),
        (ec = i),
        (Pd = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Pg(ra, function () {
              return (vm(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = A.T), (A.T = null), (i = U.p), (U.p = 2), (x = Ve), (Ve |= 4));
        try {
          qg(e, t, n);
        } finally {
          ((Ve = x), (U.p = i), (A.T = a));
        }
      }
      ((gt = 1), fm(), dm(), mm());
    }
  }
  function fm() {
    if (gt === 1) {
      gt = 0;
      var e = Ta,
        t = Nl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = A.T), (A.T = null));
        var a = U.p;
        U.p = 2;
        var i = Ve;
        Ve |= 4;
        try {
          Zd(t, e);
          var u = vc,
            x = $o(e.containerInfo),
            M = u.focusedElem,
            G = u.selectionRange;
          if (x !== M && M && M.ownerDocument && Fo(M.ownerDocument.documentElement, M)) {
            if (G !== null && Yr(M)) {
              var k = G.start,
                ee = G.end;
              if ((ee === void 0 && (ee = k), 'selectionStart' in M))
                ((M.selectionStart = k), (M.selectionEnd = Math.min(ee, M.value.length)));
              else {
                var ne = M.ownerDocument || document,
                  F = (ne && ne.defaultView) || window;
                if (F.getSelection) {
                  var W = F.getSelection(),
                    fe = M.textContent.length,
                    ye = Math.min(G.start, fe),
                    $e = G.end === void 0 ? ye : Math.min(G.end, fe);
                  !W.extend && ye > $e && ((x = $e), ($e = ye), (ye = x));
                  var Q = Jo(M, ye),
                    X = Jo(M, $e);
                  if (
                    Q &&
                    X &&
                    (W.rangeCount !== 1 ||
                      W.anchorNode !== Q.node ||
                      W.anchorOffset !== Q.offset ||
                      W.focusNode !== X.node ||
                      W.focusOffset !== X.offset)
                  ) {
                    var K = ne.createRange();
                    (K.setStart(Q.node, Q.offset),
                      W.removeAllRanges(),
                      ye > $e
                        ? (W.addRange(K), W.extend(X.node, X.offset))
                        : (K.setEnd(X.node, X.offset), W.addRange(K)));
                  }
                }
              }
            }
            for (ne = [], W = M; (W = W.parentNode); )
              W.nodeType === 1 && ne.push({ element: W, left: W.scrollLeft, top: W.scrollTop });
            for (typeof M.focus == 'function' && M.focus(), M = 0; M < ne.length; M++) {
              var te = ne[M];
              ((te.element.scrollLeft = te.left), (te.element.scrollTop = te.top));
            }
          }
          ((Wu = !!hc), (vc = hc = null));
        } finally {
          ((Ve = i), (U.p = a), (A.T = n));
        }
      }
      ((e.current = t), (gt = 2));
    }
  }
  function dm() {
    if (gt === 2) {
      gt = 0;
      var e = Ta,
        t = Nl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = A.T), (A.T = null));
        var a = U.p;
        U.p = 2;
        var i = Ve;
        Ve |= 4;
        try {
          Yd(e, t.alternate, t);
        } finally {
          ((Ve = i), (U.p = a), (A.T = n));
        }
      }
      gt = 3;
    }
  }
  function mm() {
    if (gt === 4 || gt === 3) {
      ((gt = 0), zt());
      var e = Ta,
        t = Nl,
        n = Fn,
        a = Pd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (gt = 5)
        : ((gt = 0), (Nl = Ta = null), hm(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (Ca = null),
        me(n),
        (t = t.stateNode),
        At && typeof At.onCommitFiberRoot == 'function')
      )
        try {
          At.onCommitFiberRoot(hn, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = A.T), (i = U.p), (U.p = 2), (A.T = null));
        try {
          for (var u = e.onRecoverableError, x = 0; x < a.length; x++) {
            var M = a[x];
            u(M.value, { componentStack: M.stack });
          }
        } finally {
          ((A.T = t), (U.p = i));
        }
      }
      ((Fn & 3) !== 0 && Gu(),
        On(e),
        (i = e.pendingLanes),
        (n & 261930) !== 0 && (i & 42) !== 0 ? (e === tc ? Ci++ : ((Ci = 0), (tc = e))) : (Ci = 0),
        Ti(0));
    }
  }
  function hm(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), li(t)));
  }
  function Gu() {
    return (fm(), dm(), mm(), vm());
  }
  function vm() {
    if (gt !== 5) return !1;
    var e = Ta,
      t = Ps;
    Ps = 0;
    var n = me(Fn),
      a = A.T,
      i = U.p;
    try {
      ((U.p = 32 > n ? 32 : n), (A.T = null), (n = ec), (ec = null));
      var u = Ta,
        x = Fn;
      if (((gt = 0), (Nl = Ta = null), (Fn = 0), (Ve & 6) !== 0)) throw Error(h(331));
      var M = Ve;
      if (
        ((Ve |= 4),
        $d(u.current),
        kd(u, u.current, x, n),
        (Ve = M),
        Ti(0, !1),
        At && typeof At.onPostCommitFiberRoot == 'function')
      )
        try {
          At.onPostCommitFiberRoot(hn, u);
        } catch {}
      return !0;
    } finally {
      ((U.p = i), (A.T = a), hm(e, t));
    }
  }
  function gm(e, t, n) {
    ((t = nn(n, t)),
      (t = Ns(e.stateNode, t, 2)),
      (e = ya(e, t, 2)),
      e !== null && (Ha(e, 2), On(e)));
  }
  function Ke(e, t, n) {
    if (e.tag === 3) gm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          gm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (Ca === null || !Ca.has(a)))
          ) {
            ((e = nn(n, e)),
              (n = yd(2)),
              (a = ya(t, n, 2)),
              a !== null && (pd(n, a, t, e), Ha(a, 2), On(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function lc(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Zg();
      var i = new Set();
      a.set(t, i);
    } else ((i = a.get(t)), i === void 0 && ((i = new Set()), a.set(t, i)));
    i.has(n) || (($s = !0), i.add(n), (e = $g.bind(null, e, t, n)), t.then(e, e));
  }
  function $g(e, t, n) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      We === e &&
        (we & n) === n &&
        (ut === 4 || (ut === 3 && (we & 62914560) === we && 300 > pt() - Nu)
          ? (Ve & 2) === 0 && Ul(e, 0)
          : (Ws |= n),
        zl === we && (zl = 0)),
      On(e));
  }
  function ym(e, t) {
    (t === 0 && (t = ul()), (e = Xa(e, t)), e !== null && (Ha(e, t), On(e)));
  }
  function Wg(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), ym(e, n));
  }
  function Ig(e, t) {
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
    (a !== null && a.delete(t), ym(e, n));
  }
  function Pg(e, t) {
    return dn(e, t);
  }
  var Yu = null,
    Ll = null,
    ic = !1,
    Vu = !1,
    uc = !1,
    Ra = 0;
  function On(e) {
    (e !== Ll && e.next === null && (Ll === null ? (Yu = Ll = e) : (Ll = Ll.next = e)),
      (Vu = !0),
      ic || ((ic = !0), t0()));
  }
  function Ti(e, t) {
    if (!uc && Vu) {
      uc = !0;
      do
        for (var n = !1, a = Yu; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var x = a.suspendedLanes,
                M = a.pingedLanes;
              ((u = (1 << (31 - Ot(42 | e) + 1)) - 1),
                (u &= i & ~(x & ~M)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((n = !0), bm(a, u));
          } else
            ((u = we),
              (u = sa(
                a,
                a === We ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || La(a, u) || ((n = !0), bm(a, u)));
          a = a.next;
        }
      while (n);
      uc = !1;
    }
  }
  function e0() {
    pm();
  }
  function pm() {
    Vu = ic = !1;
    var e = 0;
    Ra !== 0 && f0() && (e = Ra);
    for (var t = pt(), n = null, a = Yu; a !== null; ) {
      var i = a.next,
        u = Sm(a, t);
      (u === 0
        ? ((a.next = null), n === null ? (Yu = i) : (n.next = i), i === null && (Ll = n))
        : ((n = a), (e !== 0 || (u & 3) !== 0) && (Vu = !0)),
        (a = i));
    }
    ((gt !== 0 && gt !== 5) || Ti(e), Ra !== 0 && (Ra = 0));
  }
  function Sm(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        i = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var x = 31 - Ot(u),
        M = 1 << x,
        G = i[x];
      (G === -1
        ? ((M & n) === 0 || (M & a) !== 0) && (i[x] = il(M, t))
        : G <= t && (e.expiredLanes |= M),
        (u &= ~M));
    }
    if (
      ((t = We),
      (n = we),
      (n = sa(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (a = e.callbackNode),
      n === 0 || (e === t && (Ze === 2 || Ze === 9)) || e.cancelPendingCommit !== null)
    )
      return (a !== null && a !== null && En(a), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((n & 3) === 0 || La(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((a !== null && En(a), me(n))) {
        case 2:
        case 8:
          n = Pe;
          break;
        case 32:
          n = ra;
          break;
        case 268435456:
          n = Cn;
          break;
        default:
          n = ra;
      }
      return (
        (a = xm.bind(null, e)),
        (n = dn(n, a)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      a !== null && a !== null && En(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function xm(e, t) {
    if (gt !== 0 && gt !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Gu() && e.callbackNode !== n) return null;
    var a = we;
    return (
      (a = sa(e, e === We ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      a === 0
        ? null
        : (tm(e, a, t),
          Sm(e, pt()),
          e.callbackNode != null && e.callbackNode === n ? xm.bind(null, e) : null)
    );
  }
  function bm(e, t) {
    if (Gu()) return null;
    tm(e, t, !0);
  }
  function t0() {
    m0(function () {
      (Ve & 6) !== 0 ? dn(bt, e0) : pm();
    });
  }
  function rc() {
    if (Ra === 0) {
      var e = bl;
      (e === 0 && ((e = al), (al <<= 1), (al & 261888) === 0 && (al = 256)), (Ra = e));
    }
    return Ra;
  }
  function Em(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Fi('' + e);
  }
  function Cm(e, t) {
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
  function n0(e, t, n, a, i) {
    if (t === 'submit' && n && n.stateNode === i) {
      var u = Em((i[Ae] || null).action),
        x = a.submitter;
      x &&
        ((t = (t = x[Ae] || null) ? Em(t.formAction) : x.getAttribute('formAction')),
        t !== null && ((u = t), (x = null)));
      var M = new Pi('action', 'action', null, a, i);
      e.push({
        event: M,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ra !== 0) {
                  var G = x ? Cm(i, x) : new FormData(i);
                  _s(n, { pending: !0, data: G, method: i.method, action: u }, null, G);
                }
              } else
                typeof u == 'function' &&
                  (M.preventDefault(),
                  (G = x ? Cm(i, x) : new FormData(i)),
                  _s(n, { pending: !0, data: G, method: i.method, action: u }, u, G));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var sc = 0; sc < Qr.length; sc++) {
    var cc = Qr[sc],
      a0 = cc.toLowerCase(),
      l0 = cc[0].toUpperCase() + cc.slice(1);
    pn(a0, 'on' + l0);
  }
  (pn(Po, 'onAnimationEnd'),
    pn(ef, 'onAnimationIteration'),
    pn(tf, 'onAnimationStart'),
    pn('dblclick', 'onDoubleClick'),
    pn('focusin', 'onFocus'),
    pn('focusout', 'onBlur'),
    pn(xg, 'onTransitionRun'),
    pn(bg, 'onTransitionStart'),
    pn(Eg, 'onTransitionCancel'),
    pn(nf, 'onTransitionEnd'),
    rl('onMouseEnter', ['mouseout', 'mouseover']),
    rl('onMouseLeave', ['mouseout', 'mouseover']),
    rl('onPointerEnter', ['pointerout', 'pointerover']),
    rl('onPointerLeave', ['pointerout', 'pointerover']),
    Ga('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Ga(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Ga('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ga('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Ga(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Ga(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var Mi =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    i0 = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Mi)
    );
  function Tm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
        i = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var x = a.length - 1; 0 <= x; x--) {
            var M = a[x],
              G = M.instance,
              k = M.currentTarget;
            if (((M = M.listener), G !== u && i.isPropagationStopped())) break e;
            ((u = M), (i.currentTarget = k));
            try {
              u(i);
            } catch (ee) {
              nu(ee);
            }
            ((i.currentTarget = null), (u = G));
          }
        else
          for (x = 0; x < a.length; x++) {
            if (
              ((M = a[x]),
              (G = M.instance),
              (k = M.currentTarget),
              (M = M.listener),
              G !== u && i.isPropagationStopped())
            )
              break e;
            ((u = M), (i.currentTarget = k));
            try {
              u(i);
            } catch (ee) {
              nu(ee);
            }
            ((i.currentTarget = null), (u = G));
          }
      }
    }
  }
  function De(e, t) {
    var n = t[nt];
    n === void 0 && (n = t[nt] = new Set());
    var a = e + '__bubble';
    n.has(a) || (Mm(t, e, 2, !1), n.add(a));
  }
  function oc(e, t, n) {
    var a = 0;
    (t && (a |= 4), Mm(n, e, a, t));
  }
  var qu = '_reactListening' + Math.random().toString(36).slice(2);
  function fc(e) {
    if (!e[qu]) {
      ((e[qu] = !0),
        Kl.forEach(function (n) {
          n !== 'selectionchange' && (i0.has(n) || oc(n, !1, e), oc(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[qu] || ((t[qu] = !0), oc('selectionchange', !1, t));
    }
  }
  function Mm(e, t, n, a) {
    switch (eh(t)) {
      case 2:
        var i = N0;
        break;
      case 8:
        i = U0;
        break;
      default:
        i = Rc;
    }
    ((n = i.bind(null, t, n, e)),
      (i = void 0),
      !wr || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
      a
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1));
  }
  function dc(e, t, n, a, i) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var x = a.tag;
        if (x === 3 || x === 4) {
          var M = a.stateNode.containerInfo;
          if (M === i) break;
          if (x === 4)
            for (x = a.return; x !== null; ) {
              var G = x.tag;
              if ((G === 3 || G === 4) && x.stateNode.containerInfo === i) return;
              x = x.return;
            }
          for (; M !== null; ) {
            if (((x = Et(M)), x === null)) return;
            if (((G = x.tag), G === 5 || G === 6 || G === 26 || G === 27)) {
              a = u = x;
              continue e;
            }
            M = M.parentNode;
          }
        }
        a = a.return;
      }
    Oo(function () {
      var k = u,
        ee = Or(n),
        ne = [];
      e: {
        var F = af.get(e);
        if (F !== void 0) {
          var W = Pi,
            fe = e;
          switch (e) {
            case 'keypress':
              if (Wi(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              W = Iv;
              break;
            case 'focusin':
              ((fe = 'focus'), (W = Br));
              break;
            case 'focusout':
              ((fe = 'blur'), (W = Br));
              break;
            case 'beforeblur':
            case 'afterblur':
              W = Br;
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
              W = zo;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              W = Yv;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              W = tg;
              break;
            case Po:
            case ef:
            case tf:
              W = Xv;
              break;
            case nf:
              W = ag;
              break;
            case 'scroll':
            case 'scrollend':
              W = jv;
              break;
            case 'wheel':
              W = ig;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              W = Zv;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              W = Uo;
              break;
            case 'toggle':
            case 'beforetoggle':
              W = rg;
          }
          var ye = (t & 4) !== 0,
            $e = !ye && (e === 'scroll' || e === 'scrollend'),
            Q = ye ? (F !== null ? F + 'Capture' : null) : F;
          ye = [];
          for (var X = k, K; X !== null; ) {
            var te = X;
            if (
              ((K = te.stateNode),
              (te = te.tag),
              (te !== 5 && te !== 26 && te !== 27) ||
                K === null ||
                Q === null ||
                ((te = kl(X, Q)), te != null && ye.push(Ri(X, te, K))),
              $e)
            )
              break;
            X = X.return;
          }
          0 < ye.length && ((F = new W(F, fe, null, n, ee)), ne.push({ event: F, listeners: ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((F = e === 'mouseover' || e === 'pointerover'),
            (W = e === 'mouseout' || e === 'pointerout'),
            F && n !== Ar && (fe = n.relatedTarget || n.fromElement) && (Et(fe) || fe[Le]))
          )
            break e;
          if (
            (W || F) &&
            ((F =
              ee.window === ee
                ? ee
                : (F = ee.ownerDocument)
                  ? F.defaultView || F.parentWindow
                  : window),
            W
              ? ((fe = n.relatedTarget || n.toElement),
                (W = k),
                (fe = fe ? Et(fe) : null),
                fe !== null &&
                  (($e = l(fe)), (ye = fe.tag), fe !== $e || (ye !== 5 && ye !== 27 && ye !== 6)) &&
                  (fe = null))
              : ((W = null), (fe = k)),
            W !== fe)
          ) {
            if (
              ((ye = zo),
              (te = 'onMouseLeave'),
              (Q = 'onMouseEnter'),
              (X = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((ye = Uo), (te = 'onPointerLeave'), (Q = 'onPointerEnter'), (X = 'pointer')),
              ($e = W == null ? F : ja(W)),
              (K = fe == null ? F : ja(fe)),
              (F = new ye(te, X + 'leave', W, n, ee)),
              (F.target = $e),
              (F.relatedTarget = K),
              (te = null),
              Et(ee) === k &&
                ((ye = new ye(Q, X + 'enter', fe, n, ee)),
                (ye.target = K),
                (ye.relatedTarget = $e),
                (te = ye)),
              ($e = te),
              W && fe)
            )
              t: {
                for (ye = u0, Q = W, X = fe, K = 0, te = Q; te; te = ye(te)) K++;
                te = 0;
                for (var he = X; he; he = ye(he)) te++;
                for (; 0 < K - te; ) ((Q = ye(Q)), K--);
                for (; 0 < te - K; ) ((X = ye(X)), te--);
                for (; K--; ) {
                  if (Q === X || (X !== null && Q === X.alternate)) {
                    ye = Q;
                    break t;
                  }
                  ((Q = ye(Q)), (X = ye(X)));
                }
                ye = null;
              }
            else ye = null;
            (W !== null && Rm(ne, F, W, ye, !1),
              fe !== null && $e !== null && Rm(ne, $e, fe, ye, !0));
          }
        }
        e: {
          if (
            ((F = k ? ja(k) : window),
            (W = F.nodeName && F.nodeName.toLowerCase()),
            W === 'select' || (W === 'input' && F.type === 'file'))
          )
            var Ge = qo;
          else if (Yo(F))
            if (Xo) Ge = yg;
            else {
              Ge = vg;
              var de = hg;
            }
          else
            ((W = F.nodeName),
              !W || W.toLowerCase() !== 'input' || (F.type !== 'checkbox' && F.type !== 'radio')
                ? k && _r(k.elementType) && (Ge = qo)
                : (Ge = gg));
          if (Ge && (Ge = Ge(e, k))) {
            Vo(ne, Ge, n, ee);
            break e;
          }
          (de && de(e, F, k),
            e === 'focusout' &&
              k &&
              F.type === 'number' &&
              k.memoizedProps.value != null &&
              Rr(F, 'number', F.value));
        }
        switch (((de = k ? ja(k) : window), e)) {
          case 'focusin':
            (Yo(de) || de.contentEditable === 'true') && ((ml = de), (Vr = k), (ti = null));
            break;
          case 'focusout':
            ti = Vr = ml = null;
            break;
          case 'mousedown':
            qr = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((qr = !1), Wo(ne, n, ee));
            break;
          case 'selectionchange':
            if (Sg) break;
          case 'keydown':
          case 'keyup':
            Wo(ne, n, ee);
        }
        var Me;
        if (Hr)
          e: {
            switch (e) {
              case 'compositionstart':
                var ze = 'onCompositionStart';
                break e;
              case 'compositionend':
                ze = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                ze = 'onCompositionUpdate';
                break e;
            }
            ze = void 0;
          }
        else
          dl
            ? jo(e, n) && (ze = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (ze = 'onCompositionStart');
        (ze &&
          (Bo &&
            n.locale !== 'ko' &&
            (dl || ze !== 'onCompositionStart'
              ? ze === 'onCompositionEnd' && dl && (Me = Do())
              : ((oa = ee), (zr = 'value' in oa ? oa.value : oa.textContent), (dl = !0))),
          (de = Xu(k, ze)),
          0 < de.length &&
            ((ze = new No(ze, e, null, n, ee)),
            ne.push({ event: ze, listeners: de }),
            Me ? (ze.data = Me) : ((Me = Go(n)), Me !== null && (ze.data = Me)))),
          (Me = cg ? og(e, n) : fg(e, n)) &&
            ((ze = Xu(k, 'onBeforeInput')),
            0 < ze.length &&
              ((de = new No('onBeforeInput', 'beforeinput', null, n, ee)),
              ne.push({ event: de, listeners: ze }),
              (de.data = Me))),
          n0(ne, e, k, n, ee));
      }
      Tm(ne, t);
    });
  }
  function Ri(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Xu(e, t) {
    for (var n = t + 'Capture', a = []; e !== null; ) {
      var i = e,
        u = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          u === null ||
          ((i = kl(e, n)),
          i != null && a.unshift(Ri(e, i, u)),
          (i = kl(e, t)),
          i != null && a.push(Ri(e, i, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function u0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Rm(e, t, n, a, i) {
    for (var u = t._reactName, x = []; n !== null && n !== a; ) {
      var M = n,
        G = M.alternate,
        k = M.stateNode;
      if (((M = M.tag), G !== null && G === a)) break;
      ((M !== 5 && M !== 26 && M !== 27) ||
        k === null ||
        ((G = k),
        i
          ? ((k = kl(n, u)), k != null && x.unshift(Ri(n, k, G)))
          : i || ((k = kl(n, u)), k != null && x.push(Ri(n, k, G)))),
        (n = n.return));
    }
    x.length !== 0 && e.push({ event: t, listeners: x });
  }
  var r0 = /\r\n?/g,
    s0 = /\u0000|\uFFFD/g;
  function _m(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        r0,
        `
`
      )
      .replace(s0, '');
  }
  function Am(e, t) {
    return ((t = _m(t)), _m(e) === t);
  }
  function Fe(e, t, n, a, i, u) {
    switch (n) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || cl(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && cl(e, '' + a);
        break;
      case 'className':
        ki(e, 'class', a);
        break;
      case 'tabIndex':
        ki(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        ki(e, n, a);
        break;
      case 'style':
        _o(e, a, u);
        break;
      case 'data':
        if (t !== 'object') {
          ki(e, 'data', a);
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
        ((a = Fi('' + a)), e.setAttribute(n, a));
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
        ((a = Fi('' + a)), e.setAttribute(n, a));
        break;
      case 'onClick':
        a != null && (e.onclick = Un);
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
        ((n = Fi('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
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
        (De('beforetoggle', e), De('toggle', e), Ki(e, 'popover', a));
        break;
      case 'xlinkActuate':
        Nn(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        Nn(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        Nn(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        Nn(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        Nn(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        Nn(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        Nn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        Nn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        Nn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        Ki(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = Lv.get(n) || n), Ki(e, n, a));
    }
  }
  function mc(e, t, n, a, i, u) {
    switch (n) {
      case 'style':
        _o(e, a, u);
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
          ? cl(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && cl(e, '' + a);
        break;
      case 'onScroll':
        a != null && De('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && De('scrollend', e);
        break;
      case 'onClick':
        a != null && (e.onclick = Un);
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
        if (!po.hasOwnProperty(n))
          e: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((i = n.endsWith('Capture')),
              (t = n.slice(2, i ? n.length - 7 : void 0)),
              (u = e[Ae] || null),
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
            n in e ? (e[n] = a) : a === !0 ? e.setAttribute(n, '') : Ki(e, n, a);
          }
    }
  }
  function Rt(e, t, n) {
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
            var x = n[u];
            if (x != null)
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
                  Fe(e, t, u, x, n, null);
              }
          }
        (i && Fe(e, t, 'srcSet', n.srcSet, n, null), a && Fe(e, t, 'src', n.src, n, null));
        return;
      case 'input':
        De('invalid', e);
        var M = (u = x = i = null),
          G = null,
          k = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var ee = n[a];
            if (ee != null)
              switch (a) {
                case 'name':
                  i = ee;
                  break;
                case 'type':
                  x = ee;
                  break;
                case 'checked':
                  G = ee;
                  break;
                case 'defaultChecked':
                  k = ee;
                  break;
                case 'value':
                  u = ee;
                  break;
                case 'defaultValue':
                  M = ee;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (ee != null) throw Error(h(137, t));
                  break;
                default:
                  Fe(e, t, a, ee, n, null);
              }
          }
        Co(e, u, M, G, k, x, i, !1);
        return;
      case 'select':
        (De('invalid', e), (a = x = u = null));
        for (i in n)
          if (n.hasOwnProperty(i) && ((M = n[i]), M != null))
            switch (i) {
              case 'value':
                u = M;
                break;
              case 'defaultValue':
                x = M;
                break;
              case 'multiple':
                a = M;
              default:
                Fe(e, t, i, M, n, null);
            }
        ((t = u),
          (n = x),
          (e.multiple = !!a),
          t != null ? sl(e, !!a, t, !1) : n != null && sl(e, !!a, n, !0));
        return;
      case 'textarea':
        (De('invalid', e), (u = i = a = null));
        for (x in n)
          if (n.hasOwnProperty(x) && ((M = n[x]), M != null))
            switch (x) {
              case 'value':
                a = M;
                break;
              case 'defaultValue':
                i = M;
                break;
              case 'children':
                u = M;
                break;
              case 'dangerouslySetInnerHTML':
                if (M != null) throw Error(h(91));
                break;
              default:
                Fe(e, t, x, M, n, null);
            }
        Mo(e, a, i, u);
        return;
      case 'option':
        for (G in n)
          if (n.hasOwnProperty(G) && ((a = n[G]), a != null))
            switch (G) {
              case 'selected':
                e.selected = a && typeof a != 'function' && typeof a != 'symbol';
                break;
              default:
                Fe(e, t, G, a, n, null);
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
        for (a = 0; a < Mi.length; a++) De(Mi[a], e);
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
        for (k in n)
          if (n.hasOwnProperty(k) && ((a = n[k]), a != null))
            switch (k) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(h(137, t));
              default:
                Fe(e, t, k, a, n, null);
            }
        return;
      default:
        if (_r(t)) {
          for (ee in n)
            n.hasOwnProperty(ee) && ((a = n[ee]), a !== void 0 && mc(e, t, ee, a, n, void 0));
          return;
        }
    }
    for (M in n) n.hasOwnProperty(M) && ((a = n[M]), a != null && Fe(e, t, M, a, n, null));
  }
  function c0(e, t, n, a) {
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
          x = null,
          M = null,
          G = null,
          k = null,
          ee = null;
        for (W in n) {
          var ne = n[W];
          if (n.hasOwnProperty(W) && ne != null)
            switch (W) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                G = ne;
              default:
                a.hasOwnProperty(W) || Fe(e, t, W, null, a, ne);
            }
        }
        for (var F in a) {
          var W = a[F];
          if (((ne = n[F]), a.hasOwnProperty(F) && (W != null || ne != null)))
            switch (F) {
              case 'type':
                u = W;
                break;
              case 'name':
                i = W;
                break;
              case 'checked':
                k = W;
                break;
              case 'defaultChecked':
                ee = W;
                break;
              case 'value':
                x = W;
                break;
              case 'defaultValue':
                M = W;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (W != null) throw Error(h(137, t));
                break;
              default:
                W !== ne && Fe(e, t, F, W, a, ne);
            }
        }
        Mr(e, x, M, G, k, ee, u, i);
        return;
      case 'select':
        W = x = M = F = null;
        for (u in n)
          if (((G = n[u]), n.hasOwnProperty(u) && G != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                W = G;
              default:
                a.hasOwnProperty(u) || Fe(e, t, u, null, a, G);
            }
        for (i in a)
          if (((u = a[i]), (G = n[i]), a.hasOwnProperty(i) && (u != null || G != null)))
            switch (i) {
              case 'value':
                F = u;
                break;
              case 'defaultValue':
                M = u;
                break;
              case 'multiple':
                x = u;
              default:
                u !== G && Fe(e, t, i, u, a, G);
            }
        ((t = M),
          (n = x),
          (a = W),
          F != null
            ? sl(e, !!n, F, !1)
            : !!a != !!n && (t != null ? sl(e, !!n, t, !0) : sl(e, !!n, n ? [] : '', !1)));
        return;
      case 'textarea':
        W = F = null;
        for (M in n)
          if (((i = n[M]), n.hasOwnProperty(M) && i != null && !a.hasOwnProperty(M)))
            switch (M) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Fe(e, t, M, null, a, i);
            }
        for (x in a)
          if (((i = a[x]), (u = n[x]), a.hasOwnProperty(x) && (i != null || u != null)))
            switch (x) {
              case 'value':
                F = i;
                break;
              case 'defaultValue':
                W = i;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (i != null) throw Error(h(91));
                break;
              default:
                i !== u && Fe(e, t, x, i, a, u);
            }
        To(e, F, W);
        return;
      case 'option':
        for (var fe in n)
          if (((F = n[fe]), n.hasOwnProperty(fe) && F != null && !a.hasOwnProperty(fe)))
            switch (fe) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                Fe(e, t, fe, null, a, F);
            }
        for (G in a)
          if (((F = a[G]), (W = n[G]), a.hasOwnProperty(G) && F !== W && (F != null || W != null)))
            switch (G) {
              case 'selected':
                e.selected = F && typeof F != 'function' && typeof F != 'symbol';
                break;
              default:
                Fe(e, t, G, F, a, W);
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
        for (var ye in n)
          ((F = n[ye]),
            n.hasOwnProperty(ye) && F != null && !a.hasOwnProperty(ye) && Fe(e, t, ye, null, a, F));
        for (k in a)
          if (((F = a[k]), (W = n[k]), a.hasOwnProperty(k) && F !== W && (F != null || W != null)))
            switch (k) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (F != null) throw Error(h(137, t));
                break;
              default:
                Fe(e, t, k, F, a, W);
            }
        return;
      default:
        if (_r(t)) {
          for (var $e in n)
            ((F = n[$e]),
              n.hasOwnProperty($e) &&
                F !== void 0 &&
                !a.hasOwnProperty($e) &&
                mc(e, t, $e, void 0, a, F));
          for (ee in a)
            ((F = a[ee]),
              (W = n[ee]),
              !a.hasOwnProperty(ee) ||
                F === W ||
                (F === void 0 && W === void 0) ||
                mc(e, t, ee, F, a, W));
          return;
        }
    }
    for (var Q in n)
      ((F = n[Q]),
        n.hasOwnProperty(Q) && F != null && !a.hasOwnProperty(Q) && Fe(e, t, Q, null, a, F));
    for (ne in a)
      ((F = a[ne]),
        (W = n[ne]),
        !a.hasOwnProperty(ne) || F === W || (F == null && W == null) || Fe(e, t, ne, F, a, W));
  }
  function Om(e) {
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
  function o0() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType('resource'), a = 0;
        a < n.length;
        a++
      ) {
        var i = n[a],
          u = i.transferSize,
          x = i.initiatorType,
          M = i.duration;
        if (u && M && Om(x)) {
          for (x = 0, M = i.responseEnd, a += 1; a < n.length; a++) {
            var G = n[a],
              k = G.startTime;
            if (k > M) break;
            var ee = G.transferSize,
              ne = G.initiatorType;
            ee && Om(ne) && ((G = G.responseEnd), (x += ee * (G < M ? 1 : (M - k) / (G - k))));
          }
          if ((--a, (t += (8 * (u + x)) / (i.duration / 1e3)), e++, 10 < e)) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && ((e = navigator.connection.downlink), typeof e == 'number')
      ? e
      : 5;
  }
  var hc = null,
    vc = null;
  function Qu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Dm(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function wm(e, t) {
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
  function gc(e, t) {
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
  var yc = null;
  function f0() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === yc ? !1 : ((yc = e), !0)) : ((yc = null), !1);
  }
  var zm = typeof setTimeout == 'function' ? setTimeout : void 0,
    d0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Nm = typeof Promise == 'function' ? Promise : void 0,
    m0 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Nm < 'u'
          ? function (e) {
              return Nm.resolve(null).then(e).catch(h0);
            }
          : zm;
  function h0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function _a(e) {
    return e === 'head';
  }
  function Um(e, t) {
    var n = t,
      a = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === '/$' || n === '/&')) {
          if (a === 0) {
            (e.removeChild(i), Yl(t));
            return;
          }
          a--;
        } else if (n === '$' || n === '$?' || n === '$~' || n === '$!' || n === '&') a++;
        else if (n === 'html') _i(e.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = e.ownerDocument.head), _i(n));
          for (var u = n.firstChild; u; ) {
            var x = u.nextSibling,
              M = u.nodeName;
            (u[Mn] ||
              M === 'SCRIPT' ||
              M === 'STYLE' ||
              (M === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(u),
              (u = x));
          }
        } else n === 'body' && _i(e.ownerDocument.body);
      n = i;
    } while (n);
    Yl(t);
  }
  function Bm(e, t) {
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
  function pc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (pc(n), yn(n));
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
  function v0(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (a) {
        if (!e[Mn])
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
      if (((e = sn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function g0(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) ||
        ((e = sn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Lm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
        ((e = sn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Sc(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function xc(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
  }
  function y0(e, t) {
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
  function sn(e) {
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
  var bc = null;
  function Hm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '/$' || n === '/&') {
          if (t === 0) return sn(e.nextSibling);
          t--;
        } else (n !== '$' && n !== '$!' && n !== '$?' && n !== '$~' && n !== '&') || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function jm(e) {
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
  function Gm(e, t, n) {
    switch (((t = Qu(n)), e)) {
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
  function _i(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    yn(e);
  }
  var cn = new Map(),
    Ym = new Set();
  function Zu(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var $n = U.d;
  U.d = { f: p0, r: S0, D: x0, C: b0, L: E0, m: C0, X: M0, S: T0, M: R0 };
  function p0() {
    var e = $n.f(),
      t = Lu();
    return e || t;
  }
  function S0(e) {
    var t = Ut(e);
    t !== null && t.tag === 5 && t.type === 'form' ? ad(t) : $n.r(e);
  }
  var Hl = typeof document > 'u' ? null : document;
  function Vm(e, t, n) {
    var a = Hl;
    if (a && typeof t == 'string' && t) {
      var i = en(t);
      ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof n == 'string' && (i += '[crossorigin="' + n + '"]'),
        Ym.has(i) ||
          (Ym.add(i),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(i) === null &&
            ((t = a.createElement('link')), Rt(t, 'link', e), st(t), a.head.appendChild(t))));
    }
  }
  function x0(e) {
    ($n.D(e), Vm('dns-prefetch', e, null));
  }
  function b0(e, t) {
    ($n.C(e, t), Vm('preconnect', e, t));
  }
  function E0(e, t, n) {
    $n.L(e, t, n);
    var a = Hl;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + en(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((i += '[imagesrcset="' + en(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (i += '[imagesizes="' + en(n.imageSizes) + '"]'))
        : (i += '[href="' + en(e) + '"]');
      var u = i;
      switch (t) {
        case 'style':
          u = jl(e);
          break;
        case 'script':
          u = Gl(e);
      }
      cn.has(u) ||
        ((e = v(
          { rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t },
          n
        )),
        cn.set(u, e),
        a.querySelector(i) !== null ||
          (t === 'style' && a.querySelector(Ai(u))) ||
          (t === 'script' && a.querySelector(Oi(u))) ||
          ((t = a.createElement('link')), Rt(t, 'link', e), st(t), a.head.appendChild(t)));
    }
  }
  function C0(e, t) {
    $n.m(e, t);
    var n = Hl;
    if (n && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        i = 'link[rel="modulepreload"][as="' + en(a) + '"][href="' + en(e) + '"]',
        u = i;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Gl(e);
      }
      if (
        !cn.has(u) &&
        ((e = v({ rel: 'modulepreload', href: e }, t)), cn.set(u, e), n.querySelector(i) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(Oi(u))) return;
        }
        ((a = n.createElement('link')), Rt(a, 'link', e), st(a), n.head.appendChild(a));
      }
    }
  }
  function T0(e, t, n) {
    $n.S(e, t, n);
    var a = Hl;
    if (a && e) {
      var i = ca(a).hoistableStyles,
        u = jl(e);
      t = t || 'default';
      var x = i.get(u);
      if (!x) {
        var M = { loading: 0, preload: null };
        if ((x = a.querySelector(Ai(u)))) M.loading = 5;
        else {
          ((e = v({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = cn.get(u)) && Ec(e, n));
          var G = (x = a.createElement('link'));
          (st(G),
            Rt(G, 'link', e),
            (G._p = new Promise(function (k, ee) {
              ((G.onload = k), (G.onerror = ee));
            })),
            G.addEventListener('load', function () {
              M.loading |= 1;
            }),
            G.addEventListener('error', function () {
              M.loading |= 2;
            }),
            (M.loading |= 4),
            Ku(x, t, a));
        }
        ((x = { type: 'stylesheet', instance: x, count: 1, state: M }), i.set(u, x));
      }
    }
  }
  function M0(e, t) {
    $n.X(e, t);
    var n = Hl;
    if (n && e) {
      var a = ca(n).hoistableScripts,
        i = Gl(e),
        u = a.get(i);
      u ||
        ((u = n.querySelector(Oi(i))),
        u ||
          ((e = v({ src: e, async: !0 }, t)),
          (t = cn.get(i)) && Cc(e, t),
          (u = n.createElement('script')),
          st(u),
          Rt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(i, u));
    }
  }
  function R0(e, t) {
    $n.M(e, t);
    var n = Hl;
    if (n && e) {
      var a = ca(n).hoistableScripts,
        i = Gl(e),
        u = a.get(i);
      u ||
        ((u = n.querySelector(Oi(i))),
        u ||
          ((e = v({ src: e, async: !0, type: 'module' }, t)),
          (t = cn.get(i)) && Cc(e, t),
          (u = n.createElement('script')),
          st(u),
          Rt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(i, u));
    }
  }
  function qm(e, t, n, a) {
    var i = (i = se.current) ? Zu(i) : null;
    if (!i) throw Error(h(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = jl(n.href)),
            (n = ca(i).hoistableStyles),
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
          e = jl(n.href);
          var u = ca(i).hoistableStyles,
            x = u.get(e);
          if (
            (x ||
              ((i = i.ownerDocument || i),
              (x = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, x),
              (u = i.querySelector(Ai(e))) && !u._p && ((x.instance = u), (x.state.loading = 5)),
              cn.has(e) ||
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
                cn.set(e, n),
                u || _0(i, e, n, x.state))),
            t && a === null)
          )
            throw Error(h(528, ''));
          return x;
        }
        if (t && a !== null) throw Error(h(529, ''));
        return null;
      case 'script':
        return (
          (t = n.async),
          (n = n.src),
          typeof n == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = Gl(n)),
              (n = ca(i).hoistableScripts),
              (a = n.get(t)),
              a || ((a = { type: 'script', instance: null, count: 0, state: null }), n.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(h(444, e));
    }
  }
  function jl(e) {
    return 'href="' + en(e) + '"';
  }
  function Ai(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Xm(e) {
    return v({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function _0(e, t, n, a) {
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
        Rt(t, 'link', n),
        st(t),
        e.head.appendChild(t));
  }
  function Gl(e) {
    return '[src="' + en(e) + '"]';
  }
  function Oi(e) {
    return 'script[async]' + e;
  }
  function Qm(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + en(n.href) + '"]');
          if (a) return ((t.instance = a), st(a), a);
          var i = v({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            st(a),
            Rt(a, 'style', i),
            Ku(a, n.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          i = jl(n.href);
          var u = e.querySelector(Ai(i));
          if (u) return ((t.state.loading |= 4), (t.instance = u), st(u), u);
          ((a = Xm(n)),
            (i = cn.get(i)) && Ec(a, i),
            (u = (e.ownerDocument || e).createElement('link')),
            st(u));
          var x = u;
          return (
            (x._p = new Promise(function (M, G) {
              ((x.onload = M), (x.onerror = G));
            })),
            Rt(u, 'link', a),
            (t.state.loading |= 4),
            Ku(u, n.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = Gl(n.src)),
            (i = e.querySelector(Oi(u)))
              ? ((t.instance = i), st(i), i)
              : ((a = n),
                (i = cn.get(u)) && ((a = v({}, n)), Cc(a, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement('script')),
                st(i),
                Rt(i, 'link', a),
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
        ((a = t.instance), (t.state.loading |= 4), Ku(a, n.precedence, e));
    return t.instance;
  }
  function Ku(e, t, n) {
    for (
      var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        i = a.length ? a[a.length - 1] : null,
        u = i,
        x = 0;
      x < a.length;
      x++
    ) {
      var M = a[x];
      if (M.dataset.precedence === t) u = M;
      else if (u !== i) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function Ec(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Cc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var ku = null;
  function Zm(e, t, n) {
    if (ku === null) {
      var a = new Map(),
        i = (ku = new Map());
      i.set(n, a);
    } else ((i = ku), (a = i.get(n)), a || ((a = new Map()), i.set(n, a)));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var u = n[i];
      if (
        !(u[Mn] || u[xe] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var x = u.getAttribute(t) || '';
        x = e + x;
        var M = a.get(x);
        M ? M.push(u) : a.set(x, [u]);
      }
    }
    return a;
  }
  function Km(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null));
  }
  function A0(e, t, n) {
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
  function km(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function O0(e, t, n, a) {
    if (
      n.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var i = jl(a.href),
          u = t.querySelector(Ai(i));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = Ju.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = u),
            st(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = Xm(a)),
          (i = cn.get(i)) && Ec(a, i),
          (u = u.createElement('link')),
          st(u));
        var x = u;
        ((x._p = new Promise(function (M, G) {
          ((x.onload = M), (x.onerror = G));
        })),
          Rt(u, 'link', a),
          (n.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Ju.bind(e)),
          t.addEventListener('load', n),
          t.addEventListener('error', n)));
    }
  }
  var Tc = 0;
  function D0(e, t) {
    return (
      e.stylesheets && e.count === 0 && $u(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && $u(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Tc === 0 && (Tc = 62500 * o0());
            var i = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 && (e.stylesheets && $u(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > Tc ? 50 : 800) + t
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
  function Ju() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) $u(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Fu = null;
  function $u(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (Fu = new Map()), t.forEach(w0, e), (Fu = null), Ju.call(e)));
  }
  function w0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Fu.get(e);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), Fu.set(e, n));
        for (
          var i = e.querySelectorAll('link[data-precedence],style[data-precedence]'), u = 0;
          u < i.length;
          u++
        ) {
          var x = i[u];
          (x.nodeName === 'LINK' || x.getAttribute('media') !== 'not all') &&
            (n.set(x.dataset.precedence, x), (a = x));
        }
        a && n.set(null, a);
      }
      ((i = t.instance),
        (x = i.getAttribute('data-precedence')),
        (u = n.get(x) || a),
        u === a && n.set(null, i),
        n.set(x, i),
        this.count++,
        (a = Ju.bind(this)),
        i.addEventListener('load', a),
        i.addEventListener('error', a),
        u
          ? u.parentNode.insertBefore(i, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Di = {
    $$typeof: B,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0,
  };
  function z0(e, t, n, a, i, u, x, M, G) {
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
      (this.expirationTimes = Zl(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Zl(0)),
      (this.hiddenUpdates = Zl(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = i),
      (this.onCaughtError = u),
      (this.onRecoverableError = x),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = G),
      (this.incompleteTransitions = new Map()));
  }
  function Jm(e, t, n, a, i, u, x, M, G, k, ee, ne) {
    return (
      (e = new z0(e, t, n, x, G, k, ee, ne, M)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = Qt(3, null, null, t)),
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
  function Fm(e) {
    return e ? ((e = gl), e) : gl;
  }
  function $m(e, t, n, a, i, u) {
    ((i = Fm(i)),
      a.context === null ? (a.context = i) : (a.pendingContext = i),
      (a = ga(t)),
      (a.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (n = ya(e, a, t)),
      n !== null && (Yt(n, e, t), si(n, e, t)));
  }
  function Wm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Mc(e, t) {
    (Wm(e, t), (e = e.alternate) && Wm(e, t));
  }
  function Im(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Xa(e, 67108864);
      (t !== null && Yt(t, e, 67108864), Mc(e, 67108864));
    }
  }
  function Pm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ft();
      t = Se(t);
      var n = Xa(e, t);
      (n !== null && Yt(n, e, t), Mc(e, t));
    }
  }
  var Wu = !0;
  function N0(e, t, n, a) {
    var i = A.T;
    A.T = null;
    var u = U.p;
    try {
      ((U.p = 2), Rc(e, t, n, a));
    } finally {
      ((U.p = u), (A.T = i));
    }
  }
  function U0(e, t, n, a) {
    var i = A.T;
    A.T = null;
    var u = U.p;
    try {
      ((U.p = 8), Rc(e, t, n, a));
    } finally {
      ((U.p = u), (A.T = i));
    }
  }
  function Rc(e, t, n, a) {
    if (Wu) {
      var i = _c(a);
      if (i === null) (dc(e, t, a, Iu, n), th(e, a));
      else if (L0(i, e, t, n, a)) a.stopPropagation();
      else if ((th(e, a), t & 4 && -1 < B0.indexOf(e))) {
        for (; i !== null; ) {
          var u = Ut(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var x = zn(u.pendingLanes);
                  if (x !== 0) {
                    var M = u;
                    for (M.pendingLanes |= 2, M.entangledLanes |= 2; x; ) {
                      var G = 1 << (31 - Ot(x));
                      ((M.entanglements[1] |= G), (x &= ~G));
                    }
                    (On(u), (Ve & 6) === 0 && ((Uu = pt() + 500), Ti(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((M = Xa(u, 2)), M !== null && Yt(M, u, 2), Lu(), Mc(u, 2));
            }
          if (((u = _c(a)), u === null && dc(e, t, a, Iu, n), u === i)) break;
          i = u;
        }
        i !== null && a.stopPropagation();
      } else dc(e, t, a, null, n);
    }
  }
  function _c(e) {
    return ((e = Or(e)), Ac(e));
  }
  var Iu = null;
  function Ac(e) {
    if (((Iu = null), (e = Et(e)), e !== null)) {
      var t = l(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = c(t)), e !== null)) return e;
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
    return ((Iu = e), null);
  }
  function eh(e) {
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
        switch (mn()) {
          case bt:
            return 2;
          case Pe:
            return 8;
          case ra:
          case It:
            return 32;
          case Cn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Oc = !1,
    Aa = null,
    Oa = null,
    Da = null,
    wi = new Map(),
    zi = new Map(),
    wa = [],
    B0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function th(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Aa = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Oa = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Da = null;
        break;
      case 'pointerover':
      case 'pointerout':
        wi.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        zi.delete(t.pointerId);
    }
  }
  function Ni(e, t, n, a, i, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [i],
        }),
        t !== null && ((t = Ut(t)), t !== null && Im(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function L0(e, t, n, a, i) {
    switch (t) {
      case 'focusin':
        return ((Aa = Ni(Aa, e, t, n, a, i)), !0);
      case 'dragenter':
        return ((Oa = Ni(Oa, e, t, n, a, i)), !0);
      case 'mouseover':
        return ((Da = Ni(Da, e, t, n, a, i)), !0);
      case 'pointerover':
        var u = i.pointerId;
        return (wi.set(u, Ni(wi.get(u) || null, e, t, n, a, i)), !0);
      case 'gotpointercapture':
        return ((u = i.pointerId), zi.set(u, Ni(zi.get(u) || null, e, t, n, a, i)), !0);
    }
    return !1;
  }
  function nh(e) {
    var t = Et(e.target);
    if (t !== null) {
      var n = l(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = c(n)), t !== null)) {
            ((e.blockedOn = t),
              Xe(e.priority, function () {
                Pm(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              Xe(e.priority, function () {
                Pm(n);
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
  function Pu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = _c(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((Ar = a), n.target.dispatchEvent(a), (Ar = null));
      } else return ((t = Ut(n)), t !== null && Im(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function ah(e, t, n) {
    Pu(e) && n.delete(t);
  }
  function H0() {
    ((Oc = !1),
      Aa !== null && Pu(Aa) && (Aa = null),
      Oa !== null && Pu(Oa) && (Oa = null),
      Da !== null && Pu(Da) && (Da = null),
      wi.forEach(ah),
      zi.forEach(ah));
  }
  function er(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Oc || ((Oc = !0), s.unstable_scheduleCallback(s.unstable_NormalPriority, H0)));
  }
  var tr = null;
  function lh(e) {
    tr !== e &&
      ((tr = e),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        tr === e && (tr = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            a = e[t + 1],
            i = e[t + 2];
          if (typeof a != 'function') {
            if (Ac(a || n) === null) continue;
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
  function Yl(e) {
    function t(G) {
      return er(G, e);
    }
    (Aa !== null && er(Aa, e),
      Oa !== null && er(Oa, e),
      Da !== null && er(Da, e),
      wi.forEach(t),
      zi.forEach(t));
    for (var n = 0; n < wa.length; n++) {
      var a = wa[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < wa.length && ((n = wa[0]), n.blockedOn === null); )
      (nh(n), n.blockedOn === null && wa.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var i = n[a],
          u = n[a + 1],
          x = i[Ae] || null;
        if (typeof u == 'function') x || lh(n);
        else if (x) {
          var M = null;
          if (u && u.hasAttribute('formAction')) {
            if (((i = u), (x = u[Ae] || null))) M = x.formAction;
            else if (Ac(i) !== null) continue;
          } else M = x.action;
          (typeof M == 'function' ? (n[a + 1] = M) : (n.splice(a, 3), (a -= 3)), lh(n));
        }
      }
  }
  function ih() {
    function e(u) {
      u.canIntercept &&
        u.info === 'react-transition' &&
        u.intercept({
          handler: function () {
            return new Promise(function (x) {
              return (i = x);
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
  function Dc(e) {
    this._internalRoot = e;
  }
  ((nr.prototype.render = Dc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(h(409));
      var n = t.current,
        a = Ft();
      $m(n, a, e, t, null, null);
    }),
    (nr.prototype.unmount = Dc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          ($m(e.current, 2, null, e, null, null), Lu(), (t[Le] = null));
        }
      }));
  function nr(e) {
    this._internalRoot = e;
  }
  nr.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Re();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < wa.length && t !== 0 && t < wa[n].priority; n++);
      (wa.splice(n, 0, e), n === 0 && nh(e));
    }
  };
  var uh = E.version;
  if (uh !== '19.2.5') throw Error(h(527, uh, '19.2.5'));
  U.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(h(188))
        : ((e = Object.keys(e).join(',')), Error(h(268, e)));
    return ((e = g(t)), (e = e !== null ? m(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var j0 = {
    bundleType: 0,
    version: '19.2.5',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: A,
    reconcilerVersion: '19.2.5',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var ar = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ar.isDisabled && ar.supportsFiber)
      try {
        ((hn = ar.inject(j0)), (At = ar));
      } catch {}
  }
  return (
    (Bi.createRoot = function (e, t) {
      if (!o(e)) throw Error(h(299));
      var n = !1,
        a = '',
        i = md,
        u = hd,
        x = vd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (x = t.onRecoverableError)),
        (t = Jm(e, 1, !1, null, null, n, a, null, i, u, x, ih)),
        (e[Le] = t.current),
        fc(e),
        new Dc(t)
      );
    }),
    (Bi.hydrateRoot = function (e, t, n) {
      if (!o(e)) throw Error(h(299));
      var a = !1,
        i = '',
        u = md,
        x = hd,
        M = vd,
        G = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (x = n.onCaughtError),
          n.onRecoverableError !== void 0 && (M = n.onRecoverableError),
          n.formState !== void 0 && (G = n.formState)),
        (t = Jm(e, 1, !0, t, n ?? null, a, i, G, u, x, M, ih)),
        (t.context = Fm(null)),
        (n = t.current),
        (a = Ft()),
        (a = Se(a)),
        (i = ga(a)),
        (i.callback = null),
        ya(n, i, a),
        (n = a),
        (t.current.lanes = n),
        Ha(t, n),
        On(t),
        (e[Le] = t.current),
        fc(e),
        new nr(t)
      );
    }),
    (Bi.version = '19.2.5'),
    Bi
  );
}
var yh;
function F0() {
  if (yh) return zc.exports;
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
  return (s(), (zc.exports = J0()), zc.exports);
}
var $0 = F0(),
  w = ao();
/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var ph = 'popstate';
function Sh(s) {
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
function W0(s = {}) {
  function E(h, o) {
    var g;
    let l = (g = o.state) == null ? void 0 : g.masked,
      { pathname: c, search: d, hash: f } = l || h.location;
    return Jc(
      '',
      { pathname: c, search: d, hash: f },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default',
      l
        ? { pathname: h.location.pathname, search: h.location.search, hash: h.location.hash }
        : void 0
    );
  }
  function b(h, o) {
    return typeof o == 'string' ? o : qi(o);
  }
  return P0(E, b, null, s);
}
function lt(s, E) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(E);
}
function wn(s, E) {
  if (!s) {
    typeof console < 'u' && console.warn(E);
    try {
      throw new Error(E);
    } catch {}
  }
}
function I0() {
  return Math.random().toString(36).substring(2, 10);
}
function xh(s, E) {
  return {
    usr: s.state,
    key: s.key,
    idx: E,
    masked: s.unstable_mask ? { pathname: s.pathname, search: s.search, hash: s.hash } : void 0,
  };
}
function Jc(s, E, b = null, h, o) {
  return {
    pathname: typeof s == 'string' ? s : s.pathname,
    search: '',
    hash: '',
    ...(typeof E == 'string' ? Xl(E) : E),
    state: b,
    key: (E && E.key) || h || I0(),
    unstable_mask: o,
  };
}
function qi({ pathname: s = '/', search: E = '', hash: b = '' }) {
  return (
    E && E !== '?' && (s += E.charAt(0) === '?' ? E : '?' + E),
    b && b !== '#' && (s += b.charAt(0) === '#' ? b : '#' + b),
    s
  );
}
function Xl(s) {
  let E = {};
  if (s) {
    let b = s.indexOf('#');
    b >= 0 && ((E.hash = s.substring(b)), (s = s.substring(0, b)));
    let h = s.indexOf('?');
    (h >= 0 && ((E.search = s.substring(h)), (s = s.substring(0, h))), s && (E.pathname = s));
  }
  return E;
}
function P0(s, E, b, h = {}) {
  let { window: o = document.defaultView, v5Compat: l = !1 } = h,
    c = o.history,
    d = 'POP',
    f = null,
    g = m();
  g == null && ((g = 0), c.replaceState({ ...c.state, idx: g }, ''));
  function m() {
    return (c.state || { idx: null }).idx;
  }
  function v() {
    d = 'POP';
    let C = m(),
      R = C == null ? null : C - g;
    ((g = C), f && f({ action: d, location: p.location, delta: R }));
  }
  function y(C, R) {
    d = 'PUSH';
    let z = Sh(C) ? C : Jc(p.location, C, R);
    g = m() + 1;
    let B = xh(z, g),
      Y = p.createHref(z.unstable_mask || z);
    try {
      c.pushState(B, '', Y);
    } catch (T) {
      if (T instanceof DOMException && T.name === 'DataCloneError') throw T;
      o.location.assign(Y);
    }
    l && f && f({ action: d, location: p.location, delta: 1 });
  }
  function r(C, R) {
    d = 'REPLACE';
    let z = Sh(C) ? C : Jc(p.location, C, R);
    g = m();
    let B = xh(z, g),
      Y = p.createHref(z.unstable_mask || z);
    (c.replaceState(B, '', Y), l && f && f({ action: d, location: p.location, delta: 0 }));
  }
  function S(C) {
    return ey(C);
  }
  let p = {
    get action() {
      return d;
    },
    get location() {
      return s(o, c);
    },
    listen(C) {
      if (f) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(ph, v),
        (f = C),
        () => {
          (o.removeEventListener(ph, v), (f = null));
        }
      );
    },
    createHref(C) {
      return E(o, C);
    },
    createURL: S,
    encodeLocation(C) {
      let R = S(C);
      return { pathname: R.pathname, search: R.search, hash: R.hash };
    },
    push: y,
    replace: r,
    go(C) {
      return c.go(C);
    },
  };
  return p;
}
function ey(s, E = !1) {
  let b = 'http://localhost';
  (typeof window < 'u' &&
    (b = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    lt(b, 'No window.location.(origin|href) available to create URL'));
  let h = typeof s == 'string' ? s : qi(s);
  return ((h = h.replace(/ $/, '%20')), !E && h.startsWith('//') && (h = b + h), new URL(h, b));
}
function Gh(s, E, b = '/') {
  return ty(s, E, b, !1);
}
function ty(s, E, b, h) {
  let o = typeof E == 'string' ? Xl(E) : E,
    l = aa(o.pathname || '/', b);
  if (l == null) return null;
  let c = Yh(s);
  ny(c);
  let d = null;
  for (let f = 0; d == null && f < c.length; ++f) {
    let g = my(l);
    d = fy(c[f], g, h);
  }
  return d;
}
function Yh(s, E = [], b = [], h = '', o = !1) {
  let l = (c, d, f = o, g) => {
    let m = {
      relativePath: g === void 0 ? c.path || '' : g,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: d,
      route: c,
    };
    if (m.relativePath.startsWith('/')) {
      if (!m.relativePath.startsWith(h) && f) return;
      (lt(
        m.relativePath.startsWith(h),
        `Absolute route path "${m.relativePath}" nested under path "${h}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (m.relativePath = m.relativePath.slice(h.length)));
    }
    let v = bn([h, m.relativePath]),
      y = b.concat(m);
    (c.children &&
      c.children.length > 0 &&
      (lt(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${v}".`
      ),
      Yh(c.children, E, y, v, f)),
      !(c.path == null && !c.index) && E.push({ path: v, score: cy(v, c.index), routesMeta: y }));
  };
  return (
    s.forEach((c, d) => {
      var f;
      if (c.path === '' || !((f = c.path) != null && f.includes('?'))) l(c, d);
      else for (let g of Vh(c.path)) l(c, d, !0, g);
    }),
    E
  );
}
function Vh(s) {
  let E = s.split('/');
  if (E.length === 0) return [];
  let [b, ...h] = E,
    o = b.endsWith('?'),
    l = b.replace(/\?$/, '');
  if (h.length === 0) return o ? [l, ''] : [l];
  let c = Vh(h.join('/')),
    d = [];
  return (
    d.push(...c.map((f) => (f === '' ? l : [l, f].join('/')))),
    o && d.push(...c),
    d.map((f) => (s.startsWith('/') && f === '' ? '/' : f))
  );
}
function ny(s) {
  s.sort((E, b) =>
    E.score !== b.score
      ? b.score - E.score
      : oy(
          E.routesMeta.map((h) => h.childrenIndex),
          b.routesMeta.map((h) => h.childrenIndex)
        )
  );
}
var ay = /^:[\w-]+$/,
  ly = 3,
  iy = 2,
  uy = 1,
  ry = 10,
  sy = -2,
  bh = (s) => s === '*';
function cy(s, E) {
  let b = s.split('/'),
    h = b.length;
  return (
    b.some(bh) && (h += sy),
    E && (h += iy),
    b.filter((o) => !bh(o)).reduce((o, l) => o + (ay.test(l) ? ly : l === '' ? uy : ry), h)
  );
}
function oy(s, E) {
  return s.length === E.length && s.slice(0, -1).every((h, o) => h === E[o])
    ? s[s.length - 1] - E[E.length - 1]
    : 0;
}
function fy(s, E, b = !1) {
  let { routesMeta: h } = s,
    o = {},
    l = '/',
    c = [];
  for (let d = 0; d < h.length; ++d) {
    let f = h[d],
      g = d === h.length - 1,
      m = l === '/' ? E : E.slice(l.length) || '/',
      v = or({ path: f.relativePath, caseSensitive: f.caseSensitive, end: g }, m),
      y = f.route;
    if (
      (!v &&
        g &&
        b &&
        !h[h.length - 1].route.index &&
        (v = or({ path: f.relativePath, caseSensitive: f.caseSensitive, end: !1 }, m)),
      !v)
    )
      return null;
    (Object.assign(o, v.params),
      c.push({
        params: o,
        pathname: bn([l, v.pathname]),
        pathnameBase: yy(bn([l, v.pathnameBase])),
        route: y,
      }),
      v.pathnameBase !== '/' && (l = bn([l, v.pathnameBase])));
  }
  return c;
}
function or(s, E) {
  typeof s == 'string' && (s = { path: s, caseSensitive: !1, end: !0 });
  let [b, h] = dy(s.path, s.caseSensitive, s.end),
    o = E.match(b);
  if (!o) return null;
  let l = o[0],
    c = l.replace(/(.)\/+$/, '$1'),
    d = o.slice(1);
  return {
    params: h.reduce((g, { paramName: m, isOptional: v }, y) => {
      if (m === '*') {
        let S = d[y] || '';
        c = l.slice(0, l.length - S.length).replace(/(.)\/+$/, '$1');
      }
      const r = d[y];
      return (v && !r ? (g[m] = void 0) : (g[m] = (r || '').replace(/%2F/g, '/')), g);
    }, {}),
    pathname: l,
    pathnameBase: c,
    pattern: s,
  };
}
function dy(s, E = !1, b = !0) {
  wn(
    s === '*' || !s.endsWith('*') || s.endsWith('/*'),
    `Route path "${s}" will be treated as if it were "${s.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/, '/*')}".`
  );
  let h = [],
    o =
      '^' +
      s
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(/\/:([\w-]+)(\?)?/g, (c, d, f, g, m) => {
          if ((h.push({ paramName: d, isOptional: f != null }), f)) {
            let v = m.charAt(g + c.length);
            return v && v !== '/' ? '/([^\\/]*)' : '(?:/([^\\/]*))?';
          }
          return '/([^\\/]+)';
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    s.endsWith('*')
      ? (h.push({ paramName: '*' }), (o += s === '*' || s === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : b
        ? (o += '\\/*$')
        : s !== '' && s !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, E ? void 0 : 'i'), h]
  );
}
function my(s) {
  try {
    return s
      .split('/')
      .map((E) => decodeURIComponent(E).replace(/\//g, '%2F'))
      .join('/');
  } catch (E) {
    return (
      wn(
        !1,
        `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${E}).`
      ),
      s
    );
  }
}
function aa(s, E) {
  if (E === '/') return s;
  if (!s.toLowerCase().startsWith(E.toLowerCase())) return null;
  let b = E.endsWith('/') ? E.length - 1 : E.length,
    h = s.charAt(b);
  return h && h !== '/' ? null : s.slice(b) || '/';
}
var hy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function vy(s, E = '/') {
  let { pathname: b, search: h = '', hash: o = '' } = typeof s == 'string' ? Xl(s) : s,
    l;
  return (
    b ? ((b = Xh(b)), b.startsWith('/') ? (l = Eh(b.substring(1), '/')) : (l = Eh(b, E))) : (l = E),
    { pathname: l, search: py(h), hash: Sy(o) }
  );
}
function Eh(s, E) {
  let b = fr(E).split('/');
  return (
    s.split('/').forEach((o) => {
      o === '..' ? b.length > 1 && b.pop() : o !== '.' && b.push(o);
    }),
    b.length > 1 ? b.join('/') : '/'
  );
}
function Hc(s, E, b, h) {
  return `Cannot include a '${s}' character in a manually specified \`to.${E}\` field [${JSON.stringify(h)}].  Please separate it out to the \`to.${b}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function gy(s) {
  return s.filter((E, b) => b === 0 || (E.route.path && E.route.path.length > 0));
}
function qh(s) {
  let E = gy(s);
  return E.map((b, h) => (h === E.length - 1 ? b.pathname : b.pathnameBase));
}
function lo(s, E, b, h = !1) {
  let o;
  typeof s == 'string'
    ? (o = Xl(s))
    : ((o = { ...s }),
      lt(!o.pathname || !o.pathname.includes('?'), Hc('?', 'pathname', 'search', o)),
      lt(!o.pathname || !o.pathname.includes('#'), Hc('#', 'pathname', 'hash', o)),
      lt(!o.search || !o.search.includes('#'), Hc('#', 'search', 'hash', o)));
  let l = s === '' || o.pathname === '',
    c = l ? '/' : o.pathname,
    d;
  if (c == null) d = b;
  else {
    let v = E.length - 1;
    if (!h && c.startsWith('..')) {
      let y = c.split('/');
      for (; y[0] === '..'; ) (y.shift(), (v -= 1));
      o.pathname = y.join('/');
    }
    d = v >= 0 ? E[v] : '/';
  }
  let f = vy(o, d),
    g = c && c !== '/' && c.endsWith('/'),
    m = (l || c === '.') && b.endsWith('/');
  return (!f.pathname.endsWith('/') && (g || m) && (f.pathname += '/'), f);
}
var Xh = (s) => s.replace(/\/\/+/g, '/'),
  bn = (s) => Xh(s.join('/')),
  fr = (s) => s.replace(/\/+$/, ''),
  yy = (s) => fr(s).replace(/^\/*/, '/'),
  py = (s) => (!s || s === '?' ? '' : s.startsWith('?') ? s : '?' + s),
  Sy = (s) => (!s || s === '#' ? '' : s.startsWith('#') ? s : '#' + s),
  xy = class {
    constructor(s, E, b, h = !1) {
      ((this.status = s),
        (this.statusText = E || ''),
        (this.internal = h),
        b instanceof Error ? ((this.data = b.toString()), (this.error = b)) : (this.data = b));
    }
  };
function by(s) {
  return (
    s != null &&
    typeof s.status == 'number' &&
    typeof s.statusText == 'string' &&
    typeof s.internal == 'boolean' &&
    'data' in s
  );
}
function Ey(s) {
  let E = s.map((b) => b.route.path).filter(Boolean);
  return bn(E) || '/';
}
var Qh =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function Zh(s, E) {
  let b = s;
  if (typeof b != 'string' || !hy.test(b)) return { absoluteURL: void 0, isExternal: !1, to: b };
  let h = b,
    o = !1;
  if (Qh)
    try {
      let l = new URL(window.location.href),
        c = b.startsWith('//') ? new URL(l.protocol + b) : new URL(b),
        d = aa(c.pathname, E);
      c.origin === l.origin && d != null ? (b = d + c.search + c.hash) : (o = !0);
    } catch {
      wn(
        !1,
        `<Link to="${b}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: h, isExternal: o, to: b };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var Kh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Kh);
var Cy = ['GET', ...Kh];
new Set(Cy);
var Ql = w.createContext(null);
Ql.displayName = 'DataRouter';
var mr = w.createContext(null);
mr.displayName = 'DataRouterState';
var kh = w.createContext(!1);
function Ty() {
  return w.useContext(kh);
}
var Jh = w.createContext({ isTransitioning: !1 });
Jh.displayName = 'ViewTransition';
var My = w.createContext(new Map());
My.displayName = 'Fetchers';
var Ry = w.createContext(null);
Ry.displayName = 'Await';
var fn = w.createContext(null);
fn.displayName = 'Navigation';
var Xi = w.createContext(null);
Xi.displayName = 'Location';
var la = w.createContext({ outlet: null, matches: [], isDataRoute: !1 });
la.displayName = 'Route';
var io = w.createContext(null);
io.displayName = 'RouteError';
var Fh = 'REACT_ROUTER_ERROR',
  _y = 'REDIRECT',
  Ay = 'ROUTE_ERROR_RESPONSE';
function Oy(s) {
  if (s.startsWith(`${Fh}:${_y}:{`))
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
function Dy(s) {
  if (s.startsWith(`${Fh}:${Ay}:{`))
    try {
      let E = JSON.parse(s.slice(40));
      if (
        typeof E == 'object' &&
        E &&
        typeof E.status == 'number' &&
        typeof E.statusText == 'string'
      )
        return new xy(E.status, E.statusText, E.data);
    } catch {}
}
function wy(s, { relative: E } = {}) {
  lt(Qi(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: b, navigator: h } = w.useContext(fn),
    { hash: o, pathname: l, search: c } = Zi(s, { relative: E }),
    d = l;
  return (
    b !== '/' && (d = l === '/' ? b : bn([b, l])),
    h.createHref({ pathname: d, search: c, hash: o })
  );
}
function Qi() {
  return w.useContext(Xi) != null;
}
function ia() {
  return (
    lt(Qi(), 'useLocation() may be used only in the context of a <Router> component.'),
    w.useContext(Xi).location
  );
}
var $h =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Wh(s) {
  w.useContext(fn).static || w.useLayoutEffect(s);
}
function zy() {
  let { isDataRoute: s } = w.useContext(la);
  return s ? Zy() : Ny();
}
function Ny() {
  lt(Qi(), 'useNavigate() may be used only in the context of a <Router> component.');
  let s = w.useContext(Ql),
    { basename: E, navigator: b } = w.useContext(fn),
    { matches: h } = w.useContext(la),
    { pathname: o } = ia(),
    l = JSON.stringify(qh(h)),
    c = w.useRef(!1);
  return (
    Wh(() => {
      c.current = !0;
    }),
    w.useCallback(
      (f, g = {}) => {
        if ((wn(c.current, $h), !c.current)) return;
        if (typeof f == 'number') {
          b.go(f);
          return;
        }
        let m = lo(f, JSON.parse(l), o, g.relative === 'path');
        (s == null && E !== '/' && (m.pathname = m.pathname === '/' ? E : bn([E, m.pathname])),
          (g.replace ? b.replace : b.push)(m, g.state, g));
      },
      [E, b, l, o, s]
    )
  );
}
w.createContext(null);
function Zi(s, { relative: E } = {}) {
  let { matches: b } = w.useContext(la),
    { pathname: h } = ia(),
    o = JSON.stringify(qh(b));
  return w.useMemo(() => lo(s, JSON.parse(o), h, E === 'path'), [s, o, h, E]);
}
function Uy(s, E) {
  return Ih(s, E);
}
function Ih(s, E, b) {
  var C;
  lt(Qi(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: h } = w.useContext(fn),
    { matches: o } = w.useContext(la),
    l = o[o.length - 1],
    c = l ? l.params : {},
    d = l ? l.pathname : '/',
    f = l ? l.pathnameBase : '/',
    g = l && l.route;
  {
    let R = (g && g.path) || '';
    ev(
      d,
      !g || R.endsWith('*') || R.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === '/' ? '*' : `${R}/*`}">.`
    );
  }
  let m = ia(),
    v;
  if (E) {
    let R = typeof E == 'string' ? Xl(E) : E;
    (lt(
      f === '/' || ((C = R.pathname) == null ? void 0 : C.startsWith(f)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${R.pathname}" was given in the \`location\` prop.`
    ),
      (v = R));
  } else v = m;
  let y = v.pathname || '/',
    r = y;
  if (f !== '/') {
    let R = f.replace(/^\//, '').split('/');
    r = '/' + y.replace(/^\//, '').split('/').slice(R.length).join('/');
  }
  let S = Gh(s, { pathname: r });
  (wn(g || S != null, `No routes matched location "${v.pathname}${v.search}${v.hash}" `),
    wn(
      S == null ||
        S[S.length - 1].route.element !== void 0 ||
        S[S.length - 1].route.Component !== void 0 ||
        S[S.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let p = Gy(
    S &&
      S.map((R) =>
        Object.assign({}, R, {
          params: Object.assign({}, c, R.params),
          pathname: bn([
            f,
            h.encodeLocation
              ? h.encodeLocation(
                  R.pathname.replace(/%/g, '%25').replace(/\?/g, '%3F').replace(/#/g, '%23')
                ).pathname
              : R.pathname,
          ]),
          pathnameBase:
            R.pathnameBase === '/'
              ? f
              : bn([
                  f,
                  h.encodeLocation
                    ? h.encodeLocation(
                        R.pathnameBase
                          .replace(/%/g, '%25')
                          .replace(/\?/g, '%3F')
                          .replace(/#/g, '%23')
                      ).pathname
                    : R.pathnameBase,
                ]),
        })
      ),
    o,
    b
  );
  return E && p
    ? w.createElement(
        Xi.Provider,
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
function By() {
  let s = Qy(),
    E = by(s) ? `${s.status} ${s.statusText}` : s instanceof Error ? s.message : JSON.stringify(s),
    b = s instanceof Error ? s.stack : null,
    h = 'rgba(200,200,200, 0.5)',
    o = { padding: '0.5rem', backgroundColor: h },
    l = { padding: '2px 4px', backgroundColor: h },
    c = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', s),
    (c = w.createElement(
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
      b ? w.createElement('pre', { style: o }, b) : null,
      c
    )
  );
}
var Ly = w.createElement(By, null),
  Ph = class extends w.Component {
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
        const b = Dy(s.digest);
        b && (s = b);
      }
      let E =
        s !== void 0
          ? w.createElement(
              la.Provider,
              { value: this.props.routeContext },
              w.createElement(io.Provider, { value: s, children: this.props.component })
            )
          : this.props.children;
      return this.context ? w.createElement(Hy, { error: s }, E) : E;
    }
  };
Ph.contextType = kh;
var jc = new WeakMap();
function Hy({ children: s, error: E }) {
  let { basename: b } = w.useContext(fn);
  if (typeof E == 'object' && E && 'digest' in E && typeof E.digest == 'string') {
    let h = Oy(E.digest);
    if (h) {
      let o = jc.get(E);
      if (o) throw o;
      let l = Zh(h.location, b);
      if (Qh && !jc.get(E))
        if (l.isExternal || h.reloadDocument) window.location.href = l.absoluteURL || l.to;
        else {
          const c = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(l.to, { replace: h.replace })
          );
          throw (jc.set(E, c), c);
        }
      return w.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${l.absoluteURL || l.to}`,
      });
    }
  }
  return s;
}
function jy({ routeContext: s, match: E, children: b }) {
  let h = w.useContext(Ql);
  return (
    h &&
      h.static &&
      h.staticContext &&
      (E.route.errorElement || E.route.ErrorBoundary) &&
      (h.staticContext._deepestRenderedBoundaryId = E.route.id),
    w.createElement(la.Provider, { value: s }, b)
  );
}
function Gy(s, E = [], b) {
  let h = b == null ? void 0 : b.state;
  if (s == null) {
    if (!h) return null;
    if (h.errors) s = h.matches;
    else if (E.length === 0 && !h.initialized && h.matches.length > 0) s = h.matches;
    else return null;
  }
  let o = s,
    l = h == null ? void 0 : h.errors;
  if (l != null) {
    let m = o.findIndex((v) => v.route.id && (l == null ? void 0 : l[v.route.id]) !== void 0);
    (lt(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(l).join(',')}`
    ),
      (o = o.slice(0, Math.min(o.length, m + 1))));
  }
  let c = !1,
    d = -1;
  if (b && h) {
    c = h.renderFallback;
    for (let m = 0; m < o.length; m++) {
      let v = o[m];
      if (((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (d = m), v.route.id)) {
        let { loaderData: y, errors: r } = h,
          S = v.route.loader && !y.hasOwnProperty(v.route.id) && (!r || r[v.route.id] === void 0);
        if (v.route.lazy || S) {
          (b.isStatic && (c = !0), d >= 0 ? (o = o.slice(0, d + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  }
  let f = b == null ? void 0 : b.onError,
    g =
      h && f
        ? (m, v) => {
            var y, r;
            f(m, {
              location: h.location,
              params:
                ((r = (y = h.matches) == null ? void 0 : y[0]) == null ? void 0 : r.params) ?? {},
              unstable_pattern: Ey(h.matches),
              errorInfo: v,
            });
          }
        : void 0;
  return o.reduceRight((m, v, y) => {
    let r,
      S = !1,
      p = null,
      C = null;
    h &&
      ((r = l && v.route.id ? l[v.route.id] : void 0),
      (p = v.route.errorElement || Ly),
      c &&
        (d < 0 && y === 0
          ? (ev(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (S = !0),
            (C = null))
          : d === y && ((S = !0), (C = v.route.hydrateFallbackElement || null))));
    let R = E.concat(o.slice(0, y + 1)),
      z = () => {
        let B;
        return (
          r
            ? (B = p)
            : S
              ? (B = C)
              : v.route.Component
                ? (B = w.createElement(v.route.Component, null))
                : v.route.element
                  ? (B = v.route.element)
                  : (B = m),
          w.createElement(jy, {
            match: v,
            routeContext: { outlet: m, matches: R, isDataRoute: h != null },
            children: B,
          })
        );
      };
    return h && (v.route.ErrorBoundary || v.route.errorElement || y === 0)
      ? w.createElement(Ph, {
          location: h.location,
          revalidation: h.revalidation,
          component: p,
          error: r,
          children: z(),
          routeContext: { outlet: null, matches: R, isDataRoute: !0 },
          onError: g,
        })
      : z();
  }, null);
}
function uo(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Yy(s) {
  let E = w.useContext(Ql);
  return (lt(E, uo(s)), E);
}
function Vy(s) {
  let E = w.useContext(mr);
  return (lt(E, uo(s)), E);
}
function qy(s) {
  let E = w.useContext(la);
  return (lt(E, uo(s)), E);
}
function ro(s) {
  let E = qy(s),
    b = E.matches[E.matches.length - 1];
  return (lt(b.route.id, `${s} can only be used on routes that contain a unique "id"`), b.route.id);
}
function Xy() {
  return ro('useRouteId');
}
function Qy() {
  var h;
  let s = w.useContext(io),
    E = Vy('useRouteError'),
    b = ro('useRouteError');
  return s !== void 0 ? s : (h = E.errors) == null ? void 0 : h[b];
}
function Zy() {
  let { router: s } = Yy('useNavigate'),
    E = ro('useNavigate'),
    b = w.useRef(!1);
  return (
    Wh(() => {
      b.current = !0;
    }),
    w.useCallback(
      async (o, l = {}) => {
        (wn(b.current, $h),
          b.current &&
            (typeof o == 'number'
              ? await s.navigate(o)
              : await s.navigate(o, { fromRouteId: E, ...l })));
      },
      [s, E]
    )
  );
}
var Ch = {};
function ev(s, E, b) {
  !E && !Ch[s] && ((Ch[s] = !0), wn(!1, b));
}
w.memo(Ky);
function Ky({ routes: s, future: E, state: b, isStatic: h, onError: o }) {
  return Ih(s, void 0, { state: b, isStatic: h, onError: o });
}
function Fc(s) {
  lt(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function ky({
  basename: s = '/',
  children: E = null,
  location: b,
  navigationType: h = 'POP',
  navigator: o,
  static: l = !1,
  unstable_useTransitions: c,
}) {
  lt(
    !Qi(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let d = s.replace(/^\/*/, '/'),
    f = w.useMemo(
      () => ({ basename: d, navigator: o, static: l, unstable_useTransitions: c, future: {} }),
      [d, o, l, c]
    );
  typeof b == 'string' && (b = Xl(b));
  let {
      pathname: g = '/',
      search: m = '',
      hash: v = '',
      state: y = null,
      key: r = 'default',
      unstable_mask: S,
    } = b,
    p = w.useMemo(() => {
      let C = aa(g, d);
      return C == null
        ? null
        : {
            location: { pathname: C, search: m, hash: v, state: y, key: r, unstable_mask: S },
            navigationType: h,
          };
    }, [d, g, m, v, y, r, h, S]);
  return (
    wn(
      p != null,
      `<Router basename="${d}"> is not able to match the URL "${g}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    p == null
      ? null
      : w.createElement(
          fn.Provider,
          { value: f },
          w.createElement(Xi.Provider, { children: E, value: p })
        )
  );
}
function Jy({ children: s, location: E }) {
  return Uy($c(s), E);
}
function $c(s, E = []) {
  let b = [];
  return (
    w.Children.forEach(s, (h, o) => {
      if (!w.isValidElement(h)) return;
      let l = [...E, o];
      if (h.type === w.Fragment) {
        b.push.apply(b, $c(h.props.children, l));
        return;
      }
      (lt(
        h.type === Fc,
        `[${typeof h.type == 'string' ? h.type : h.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        lt(!h.props.index || !h.props.children, 'An index route cannot have child routes.'));
      let c = {
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
      (h.props.children && (c.children = $c(h.props.children, l)), b.push(c));
    }),
    b
  );
}
var rr = 'get',
  sr = 'application/x-www-form-urlencoded';
function hr(s) {
  return typeof HTMLElement < 'u' && s instanceof HTMLElement;
}
function Fy(s) {
  return hr(s) && s.tagName.toLowerCase() === 'button';
}
function $y(s) {
  return hr(s) && s.tagName.toLowerCase() === 'form';
}
function Wy(s) {
  return hr(s) && s.tagName.toLowerCase() === 'input';
}
function Iy(s) {
  return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
}
function Py(s, E) {
  return s.button === 0 && (!E || E === '_self') && !Iy(s);
}
var lr = null;
function ep() {
  if (lr === null)
    try {
      (new FormData(document.createElement('form'), 0), (lr = !1));
    } catch {
      lr = !0;
    }
  return lr;
}
var tp = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function Gc(s) {
  return s != null && !tp.has(s)
    ? (wn(
        !1,
        `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sr}"`
      ),
      null)
    : s;
}
function np(s, E) {
  let b, h, o, l, c;
  if ($y(s)) {
    let d = s.getAttribute('action');
    ((h = d ? aa(d, E) : null),
      (b = s.getAttribute('method') || rr),
      (o = Gc(s.getAttribute('enctype')) || sr),
      (l = new FormData(s)));
  } else if (Fy(s) || (Wy(s) && (s.type === 'submit' || s.type === 'image'))) {
    let d = s.form;
    if (d == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let f = s.getAttribute('formaction') || d.getAttribute('action');
    if (
      ((h = f ? aa(f, E) : null),
      (b = s.getAttribute('formmethod') || d.getAttribute('method') || rr),
      (o = Gc(s.getAttribute('formenctype')) || Gc(d.getAttribute('enctype')) || sr),
      (l = new FormData(d, s)),
      !ep())
    ) {
      let { name: g, type: m, value: v } = s;
      if (m === 'image') {
        let y = g ? `${g}.` : '';
        (l.append(`${y}x`, '0'), l.append(`${y}y`, '0'));
      } else g && l.append(g, v);
    }
  } else {
    if (hr(s))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((b = rr), (h = null), (o = sr), (c = s));
  }
  return (
    l && o === 'text/plain' && ((c = l), (l = void 0)),
    { action: h, method: b.toLowerCase(), encType: o, formData: l, body: c }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function so(s, E) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(E);
}
function tv(s, E, b, h) {
  let o =
    typeof s == 'string'
      ? new URL(s, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : s;
  return (
    b
      ? o.pathname.endsWith('/')
        ? (o.pathname = `${o.pathname}_.${h}`)
        : (o.pathname = `${o.pathname}.${h}`)
      : o.pathname === '/'
        ? (o.pathname = `_root.${h}`)
        : E && aa(o.pathname, E) === '/'
          ? (o.pathname = `${fr(E)}/_root.${h}`)
          : (o.pathname = `${fr(o.pathname)}.${h}`),
    o
  );
}
async function ap(s, E) {
  if (s.id in E) return E[s.id];
  try {
    let b = await import(s.module);
    return ((E[s.id] = b), b);
  } catch (b) {
    return (
      console.error(`Error loading route module \`${s.module}\`, reloading page...`),
      console.error(b),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function lp(s) {
  return s == null
    ? !1
    : s.href == null
      ? s.rel === 'preload' && typeof s.imageSrcSet == 'string' && typeof s.imageSizes == 'string'
      : typeof s.rel == 'string' && typeof s.href == 'string';
}
async function ip(s, E, b) {
  let h = await Promise.all(
    s.map(async (o) => {
      let l = E.routes[o.route.id];
      if (l) {
        let c = await ap(l, b);
        return c.links ? c.links() : [];
      }
      return [];
    })
  );
  return cp(
    h
      .flat(1)
      .filter(lp)
      .filter((o) => o.rel === 'stylesheet' || o.rel === 'preload')
      .map((o) =>
        o.rel === 'stylesheet' ? { ...o, rel: 'prefetch', as: 'style' } : { ...o, rel: 'prefetch' }
      )
  );
}
function Th(s, E, b, h, o, l) {
  let c = (f, g) => (b[g] ? f.route.id !== b[g].route.id : !0),
    d = (f, g) => {
      var m;
      return (
        b[g].pathname !== f.pathname ||
        (((m = b[g].route.path) == null ? void 0 : m.endsWith('*')) &&
          b[g].params['*'] !== f.params['*'])
      );
    };
  return l === 'assets'
    ? E.filter((f, g) => c(f, g) || d(f, g))
    : l === 'data'
      ? E.filter((f, g) => {
          var v;
          let m = h.routes[f.route.id];
          if (!m || !m.hasLoader) return !1;
          if (c(f, g) || d(f, g)) return !0;
          if (f.route.shouldRevalidate) {
            let y = f.route.shouldRevalidate({
              currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
              currentParams: ((v = b[0]) == null ? void 0 : v.params) || {},
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
function up(s, E, { includeHydrateFallback: b } = {}) {
  return rp(
    s
      .map((h) => {
        let o = E.routes[h.route.id];
        if (!o) return [];
        let l = [o.module];
        return (
          o.clientActionModule && (l = l.concat(o.clientActionModule)),
          o.clientLoaderModule && (l = l.concat(o.clientLoaderModule)),
          b && o.hydrateFallbackModule && (l = l.concat(o.hydrateFallbackModule)),
          o.imports && (l = l.concat(o.imports)),
          l
        );
      })
      .flat(1)
  );
}
function rp(s) {
  return [...new Set(s)];
}
function sp(s) {
  let E = {},
    b = Object.keys(s).sort();
  for (let h of b) E[h] = s[h];
  return E;
}
function cp(s, E) {
  let b = new Set();
  return (
    new Set(E),
    s.reduce((h, o) => {
      let l = JSON.stringify(sp(o));
      return (b.has(l) || (b.add(l), h.push({ key: l, link: o })), h);
    }, [])
  );
}
function co() {
  let s = w.useContext(Ql);
  return (so(s, 'You must render this element inside a <DataRouterContext.Provider> element'), s);
}
function op() {
  let s = w.useContext(mr);
  return (
    so(s, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    s
  );
}
var oo = w.createContext(void 0);
oo.displayName = 'FrameworkContext';
function fo() {
  let s = w.useContext(oo);
  return (so(s, 'You must render this element inside a <HydratedRouter> element'), s);
}
function fp(s, E) {
  let b = w.useContext(oo),
    [h, o] = w.useState(!1),
    [l, c] = w.useState(!1),
    { onFocus: d, onBlur: f, onMouseEnter: g, onMouseLeave: m, onTouchStart: v } = E,
    y = w.useRef(null);
  (w.useEffect(() => {
    if ((s === 'render' && c(!0), s === 'viewport')) {
      let p = (R) => {
          R.forEach((z) => {
            c(z.isIntersecting);
          });
        },
        C = new IntersectionObserver(p, { threshold: 0.5 });
      return (
        y.current && C.observe(y.current),
        () => {
          C.disconnect();
        }
      );
    }
  }, [s]),
    w.useEffect(() => {
      if (h) {
        let p = setTimeout(() => {
          c(!0);
        }, 100);
        return () => {
          clearTimeout(p);
        };
      }
    }, [h]));
  let r = () => {
      o(!0);
    },
    S = () => {
      (o(!1), c(!1));
    };
  return b
    ? s !== 'intent'
      ? [l, y, {}]
      : [
          l,
          y,
          {
            onFocus: Li(d, r),
            onBlur: Li(f, S),
            onMouseEnter: Li(g, r),
            onMouseLeave: Li(m, S),
            onTouchStart: Li(v, r),
          },
        ]
    : [!1, y, {}];
}
function Li(s, E) {
  return (b) => {
    (s && s(b), b.defaultPrevented || E(b));
  };
}
function dp({ page: s, ...E }) {
  let b = Ty(),
    { router: h } = co(),
    o = w.useMemo(() => Gh(h.routes, s, h.basename), [h.routes, s, h.basename]);
  return o
    ? b
      ? w.createElement(hp, { page: s, matches: o, ...E })
      : w.createElement(vp, { page: s, matches: o, ...E })
    : null;
}
function mp(s) {
  let { manifest: E, routeModules: b } = fo(),
    [h, o] = w.useState([]);
  return (
    w.useEffect(() => {
      let l = !1;
      return (
        ip(s, E, b).then((c) => {
          l || o(c);
        }),
        () => {
          l = !0;
        }
      );
    }, [s, E, b]),
    h
  );
}
function hp({ page: s, matches: E, ...b }) {
  let h = ia(),
    { future: o } = fo(),
    { basename: l } = co(),
    c = w.useMemo(() => {
      if (s === h.pathname + h.search + h.hash) return [];
      let d = tv(s, l, o.unstable_trailingSlashAwareDataRequests, 'rsc'),
        f = !1,
        g = [];
      for (let m of E)
        typeof m.route.shouldRevalidate == 'function' ? (f = !0) : g.push(m.route.id);
      return (
        f && g.length > 0 && d.searchParams.set('_routes', g.join(',')),
        [d.pathname + d.search]
      );
    }, [l, o.unstable_trailingSlashAwareDataRequests, s, h, E]);
  return w.createElement(
    w.Fragment,
    null,
    c.map((d) => w.createElement('link', { key: d, rel: 'prefetch', as: 'fetch', href: d, ...b }))
  );
}
function vp({ page: s, matches: E, ...b }) {
  let h = ia(),
    { future: o, manifest: l, routeModules: c } = fo(),
    { basename: d } = co(),
    { loaderData: f, matches: g } = op(),
    m = w.useMemo(() => Th(s, E, g, l, h, 'data'), [s, E, g, l, h]),
    v = w.useMemo(() => Th(s, E, g, l, h, 'assets'), [s, E, g, l, h]),
    y = w.useMemo(() => {
      if (s === h.pathname + h.search + h.hash) return [];
      let p = new Set(),
        C = !1;
      if (
        (E.forEach((z) => {
          var Y;
          let B = l.routes[z.route.id];
          !B ||
            !B.hasLoader ||
            ((!m.some((T) => T.route.id === z.route.id) &&
              z.route.id in f &&
              (Y = c[z.route.id]) != null &&
              Y.shouldRevalidate) ||
            B.hasClientLoader
              ? (C = !0)
              : p.add(z.route.id));
        }),
        p.size === 0)
      )
        return [];
      let R = tv(s, d, o.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        C &&
          p.size > 0 &&
          R.searchParams.set(
            '_routes',
            E.filter((z) => p.has(z.route.id))
              .map((z) => z.route.id)
              .join(',')
          ),
        [R.pathname + R.search]
      );
    }, [d, o.unstable_trailingSlashAwareDataRequests, f, h, l, m, E, s, c]),
    r = w.useMemo(() => up(v, l), [v, l]),
    S = mp(v);
  return w.createElement(
    w.Fragment,
    null,
    y.map((p) => w.createElement('link', { key: p, rel: 'prefetch', as: 'fetch', href: p, ...b })),
    r.map((p) => w.createElement('link', { key: p, rel: 'modulepreload', href: p, ...b })),
    S.map(({ key: p, link: C }) =>
      w.createElement('link', {
        key: p,
        nonce: b.nonce,
        ...C,
        crossOrigin: C.crossOrigin ?? b.crossOrigin,
      })
    )
  );
}
function gp(...s) {
  return (E) => {
    s.forEach((b) => {
      typeof b == 'function' ? b(E) : b != null && (b.current = E);
    });
  };
}
var yp =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  yp && (window.__reactRouterVersion = '7.14.2');
} catch {}
function pp({ basename: s, children: E, unstable_useTransitions: b, window: h }) {
  let o = w.useRef();
  o.current == null && (o.current = W0({ window: h, v5Compat: !0 }));
  let l = o.current,
    [c, d] = w.useState({ action: l.action, location: l.location }),
    f = w.useCallback(
      (g) => {
        b === !1 ? d(g) : w.startTransition(() => d(g));
      },
      [b]
    );
  return (
    w.useLayoutEffect(() => l.listen(f), [l, f]),
    w.createElement(ky, {
      basename: s,
      children: E,
      location: c.location,
      navigationType: c.action,
      navigator: l,
      unstable_useTransitions: b,
    })
  );
}
var nv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  av = w.forwardRef(function (
    {
      onClick: E,
      discover: b = 'render',
      prefetch: h = 'none',
      relative: o,
      reloadDocument: l,
      replace: c,
      unstable_mask: d,
      state: f,
      target: g,
      to: m,
      preventScrollReset: v,
      viewTransition: y,
      unstable_defaultShouldRevalidate: r,
      ...S
    },
    p
  ) {
    let { basename: C, navigator: R, unstable_useTransitions: z } = w.useContext(fn),
      B = typeof m == 'string' && nv.test(m),
      Y = Zh(m, C);
    m = Y.to;
    let T = wy(m, { relative: o }),
      D = ia(),
      O = null;
    if (d) {
      let le = lo(d, [], D.unstable_mask ? D.unstable_mask.pathname : '/', !0);
      (C !== '/' && (le.pathname = le.pathname === '/' ? C : bn([C, le.pathname])),
        (O = R.createHref(le)));
    }
    let [_, H, L] = fp(h, S),
      j = Ep(m, {
        replace: c,
        unstable_mask: d,
        state: f,
        target: g,
        preventScrollReset: v,
        relative: o,
        viewTransition: y,
        unstable_defaultShouldRevalidate: r,
        unstable_useTransitions: z,
      });
    function V(le) {
      (E && E(le), le.defaultPrevented || j(le));
    }
    let I = !(Y.isExternal || l),
      ae = w.createElement('a', {
        ...S,
        ...L,
        href: (I ? O : void 0) || Y.absoluteURL || T,
        onClick: I ? V : E,
        ref: gp(p, H),
        target: g,
        'data-discover': !B && b === 'render' ? 'true' : void 0,
      });
    return _ && !B ? w.createElement(w.Fragment, null, ae, w.createElement(dp, { page: T })) : ae;
  });
av.displayName = 'Link';
var Sp = w.forwardRef(function (
  {
    'aria-current': E = 'page',
    caseSensitive: b = !1,
    className: h = '',
    end: o = !1,
    style: l,
    to: c,
    viewTransition: d,
    children: f,
    ...g
  },
  m
) {
  let v = Zi(c, { relative: g.relative }),
    y = ia(),
    r = w.useContext(mr),
    { navigator: S, basename: p } = w.useContext(fn),
    C = r != null && _p(v) && d === !0,
    R = S.encodeLocation ? S.encodeLocation(v).pathname : v.pathname,
    z = y.pathname,
    B = r && r.navigation && r.navigation.location ? r.navigation.location.pathname : null;
  (b || ((z = z.toLowerCase()), (B = B ? B.toLowerCase() : null), (R = R.toLowerCase())),
    B && p && (B = aa(B, p) || B));
  const Y = R !== '/' && R.endsWith('/') ? R.length - 1 : R.length;
  let T = z === R || (!o && z.startsWith(R) && z.charAt(Y) === '/'),
    D = B != null && (B === R || (!o && B.startsWith(R) && B.charAt(R.length) === '/')),
    O = { isActive: T, isPending: D, isTransitioning: C },
    _ = T ? E : void 0,
    H;
  typeof h == 'function'
    ? (H = h(O))
    : (H = [h, T ? 'active' : null, D ? 'pending' : null, C ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let L = typeof l == 'function' ? l(O) : l;
  return w.createElement(
    av,
    { ...g, 'aria-current': _, className: H, ref: m, style: L, to: c, viewTransition: d },
    typeof f == 'function' ? f(O) : f
  );
});
Sp.displayName = 'NavLink';
var xp = w.forwardRef(
  (
    {
      discover: s = 'render',
      fetcherKey: E,
      navigate: b,
      reloadDocument: h,
      replace: o,
      state: l,
      method: c = rr,
      action: d,
      onSubmit: f,
      relative: g,
      preventScrollReset: m,
      viewTransition: v,
      unstable_defaultShouldRevalidate: y,
      ...r
    },
    S
  ) => {
    let { unstable_useTransitions: p } = w.useContext(fn),
      C = Mp(),
      R = Rp(d, { relative: g }),
      z = c.toLowerCase() === 'get' ? 'get' : 'post',
      B = typeof d == 'string' && nv.test(d),
      Y = (T) => {
        if ((f && f(T), T.defaultPrevented)) return;
        T.preventDefault();
        let D = T.nativeEvent.submitter,
          O = (D == null ? void 0 : D.getAttribute('formmethod')) || c,
          _ = () =>
            C(D || T.currentTarget, {
              fetcherKey: E,
              method: O,
              navigate: b,
              replace: o,
              state: l,
              relative: g,
              preventScrollReset: m,
              viewTransition: v,
              unstable_defaultShouldRevalidate: y,
            });
        p && b !== !1 ? w.startTransition(() => _()) : _();
      };
    return w.createElement('form', {
      ref: S,
      method: z,
      action: R,
      onSubmit: h ? f : Y,
      ...r,
      'data-discover': !B && s === 'render' ? 'true' : void 0,
    });
  }
);
xp.displayName = 'Form';
function bp(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function lv(s) {
  let E = w.useContext(Ql);
  return (lt(E, bp(s)), E);
}
function Ep(
  s,
  {
    target: E,
    replace: b,
    unstable_mask: h,
    state: o,
    preventScrollReset: l,
    relative: c,
    viewTransition: d,
    unstable_defaultShouldRevalidate: f,
    unstable_useTransitions: g,
  } = {}
) {
  let m = zy(),
    v = ia(),
    y = Zi(s, { relative: c });
  return w.useCallback(
    (r) => {
      if (Py(r, E)) {
        r.preventDefault();
        let S = b !== void 0 ? b : qi(v) === qi(y),
          p = () =>
            m(s, {
              replace: S,
              unstable_mask: h,
              state: o,
              preventScrollReset: l,
              relative: c,
              viewTransition: d,
              unstable_defaultShouldRevalidate: f,
            });
        g ? w.startTransition(() => p()) : p();
      }
    },
    [v, m, y, b, h, o, E, s, l, c, d, f, g]
  );
}
var Cp = 0,
  Tp = () => `__${String(++Cp)}__`;
function Mp() {
  let { router: s } = lv('useSubmit'),
    { basename: E } = w.useContext(fn),
    b = Xy(),
    h = s.fetch,
    o = s.navigate;
  return w.useCallback(
    async (l, c = {}) => {
      let { action: d, method: f, encType: g, formData: m, body: v } = np(l, E);
      if (c.navigate === !1) {
        let y = c.fetcherKey || Tp();
        await h(y, b, c.action || d, {
          unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
          preventScrollReset: c.preventScrollReset,
          formData: m,
          body: v,
          formMethod: c.method || f,
          formEncType: c.encType || g,
          flushSync: c.flushSync,
        });
      } else
        await o(c.action || d, {
          unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
          preventScrollReset: c.preventScrollReset,
          formData: m,
          body: v,
          formMethod: c.method || f,
          formEncType: c.encType || g,
          replace: c.replace,
          state: c.state,
          fromRouteId: b,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [h, o, E, b]
  );
}
function Rp(s, { relative: E } = {}) {
  let { basename: b } = w.useContext(fn),
    h = w.useContext(la);
  lt(h, 'useFormAction must be used inside a RouteContext');
  let [o] = h.matches.slice(-1),
    l = { ...Zi(s || '.', { relative: E }) },
    c = ia();
  if (s == null) {
    l.search = c.search;
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
      o.route.index &&
      (l.search = l.search ? l.search.replace(/^\?/, '?index&') : '?index'),
    b !== '/' && (l.pathname = l.pathname === '/' ? b : bn([b, l.pathname])),
    qi(l)
  );
}
function _p(s, { relative: E } = {}) {
  let b = w.useContext(Jh);
  lt(
    b != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: h } = lv('useViewTransitionState'),
    o = Zi(s, { relative: E });
  if (!b.isTransitioning) return !1;
  let l = aa(b.currentLocation.pathname, h) || b.currentLocation.pathname,
    c = aa(b.nextLocation.pathname, h) || b.nextLocation.pathname;
  return or(o.pathname, c) != null || or(o.pathname, l) != null;
}
const Ap = '_index_r8hfh_1',
  Op = { index: Ap },
  Dp = '_layout_1m8bs_1',
  wp = '_top_bar_placeholder_1m8bs_10',
  zp = '_main_1m8bs_15',
  Np = '_field_wrapper_1m8bs_23',
  Up = '_field_placeholder_1m8bs_28',
  Bp = '_skill_button_wrapper_1m8bs_35',
  Dn = {
    layout: Dp,
    top_bar_placeholder: wp,
    main: zp,
    field_wrapper: Np,
    field_placeholder: Up,
    skill_button_wrapper: Bp,
  },
  Lp = '_surface_6wr97_1',
  Hp = '_canvas_layer_6wr97_11',
  jp = '_game_over_line_6wr97_22',
  Yc = { surface: Lp, canvas_layer: Hp, game_over_line: jp },
  Gp = '_layer_1dvsy_1',
  Yp = '_effect_1dvsy_7',
  Vp = '_ring_1dvsy_12',
  qp = '_score_1dvsy_24',
  Xp = '_special_1dvsy_36',
  Hi = { layer: Gp, effect: Yp, ring: Vp, score: qp, special: Xp },
  iv = w.memo(
    w.forwardRef((s, E) => {
      const b = w.useRef(null),
        h = w.useCallback((l) => {
          const c = b.current;
          if (!c) return;
          const d = document.createElement('div');
          ((d.className = `${Hi.effect} ${l.isSpecial ? Hi.special : ''}`),
            (d.style.left = `${l.x}px`),
            (d.style.top = `${l.y}px`),
            d.setAttribute('aria-hidden', 'true'));
          const f = document.createElement('span');
          ((f.className = Hi.ring), d.appendChild(f));
          const g = () => {
            (f.removeEventListener('animationend', g), d.parentNode === c && c.removeChild(d));
          };
          if ((f.addEventListener('animationend', g), l.score > 0)) {
            const m = document.createElement('span');
            ((m.className = Hi.score), (m.textContent = `+${l.score}`), d.appendChild(m));
          }
          c.appendChild(d);
        }, []),
        o = w.useCallback(() => {
          const l = b.current;
          if (l) for (; l.firstChild; ) l.removeChild(l.firstChild);
        }, []);
      return (
        w.useImperativeHandle(E, () => ({ add: h, clear: o }), [h, o]),
        J.jsx('div', { ref: b, className: Hi.layer, 'aria-hidden': 'true' })
      );
    })
  );
iv.displayName = 'MergeEffect';
const Qp = '_line_1p32x_1',
  Zp = '_preview_wrap_1p32x_11',
  Kp = '_preview_1p32x_11',
  Vc = { line: Qp, preview_wrap: Zp, preview: Kp },
  kp = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  uv = w.memo(
    w.forwardRef(({ initialX: s, fieldHeight: E, item: b }, h) => {
      const o = w.useRef(null),
        l = w.useRef(null),
        c = w.useRef((b == null ? void 0 : b.radius) ?? 0);
      if (
        ((c.current = (b == null ? void 0 : b.radius) ?? 0),
        w.useImperativeHandle(
          h,
          () => ({
            setX: (f) => {
              const g = o.current,
                m = l.current;
              (g && (g.style.transform = `translate3d(${f}px, 0, 0)`),
                m && (m.style.transform = `translate3d(${f - c.current}px, 0, 0)`));
            },
          }),
          []
        ),
        !b)
      )
        return null;
      const d = b.radius * 2;
      return J.jsxs(J.Fragment, {
        children: [
          J.jsx('div', {
            ref: o,
            className: Vc.line,
            style: { height: `${E}px`, transform: `translate3d(${s}px, 0, 0)` },
            'aria-hidden': 'true',
          }),
          J.jsx('div', {
            ref: l,
            className: Vc.preview_wrap,
            style: {
              width: `${d}px`,
              height: `${d}px`,
              transform: `translate3d(${s - b.radius}px, 0, 0)`,
            },
            'aria-hidden': 'true',
            children: J.jsx('img', {
              src: kp(b.svgPath),
              alt: '',
              'aria-hidden': 'true',
              className: Vc.preview,
            }),
          }),
        ],
      });
    })
  );
uv.displayName = 'DropIndicator';
const Jp = (s) => Math.max(0, Math.min(1, s)),
  Fp = ({
    canvasContainerRef: s,
    fieldWidth: E,
    fieldHeight: b,
    gameOverLineY: h,
    currentItem: o,
    canInteract: l,
    onDrop: c,
    mergeEffectRef: d,
    isMagnetSelecting: f,
    onMagnetSelect: g,
  }) => {
    const m = w.useRef(null),
      v = w.useRef(null),
      y = w.useRef(0.5),
      r = w.useRef(null),
      S = w.useRef(o);
    S.current = o;
    const p = w.useRef(E);
    p.current = E;
    const C = w.useCallback((_) => {
        const H = S.current,
          L = p.current;
        return H ? Math.max(H.radius, Math.min(L - H.radius, _ * L)) : _ * L;
      }, []),
      R = w.useCallback(() => {
        r.current === null &&
          (r.current = window.requestAnimationFrame(() => {
            var _;
            ((r.current = null), (_ = v.current) == null || _.setX(C(y.current)));
          }));
      }, [C]),
      z = w.useCallback(
        (_) => {
          const H = m.current;
          if (!H) return;
          const L = H.getBoundingClientRect(),
            j = Jp((_ - L.left) / L.width);
          ((y.current = j), R());
        },
        [R]
      );
    (w.useEffect(() => {
      ((y.current = 0.5), R());
    }, [o == null ? void 0 : o.level, R]),
      w.useEffect(
        () => () => {
          r.current !== null && (window.cancelAnimationFrame(r.current), (r.current = null));
        },
        []
      ));
    const B = l && !f,
      Y = (_) => {
        var H;
        f || (B && (z(_.clientX), (H = m.current) == null || H.setPointerCapture(_.pointerId)));
      },
      T = (_) => {
        if (!f) {
          if (_.buttons === 0 && _.pointerType === 'mouse') {
            z(_.clientX);
            return;
          }
          z(_.clientX);
        }
      },
      D = (_) => {
        var H;
        if (f) {
          const L = m.current;
          if (!L) return;
          const j = L.getBoundingClientRect();
          g(_.clientX - j.left, _.clientY - j.top);
          return;
        }
        B &&
          (z(_.clientX),
          c(y.current),
          (H = m.current) == null || H.releasePointerCapture(_.pointerId));
      },
      O = C(0.5);
    return J.jsxs('div', {
      ref: m,
      className: Yc.surface,
      style: { width: `${E}px`, height: `${b}px` },
      onPointerDown: Y,
      onPointerMove: T,
      onPointerUp: D,
      role: 'application',
      'aria-label': 'ゲームフィールド',
      children: [
        J.jsx('div', { ref: s, className: Yc.canvas_layer }),
        J.jsx('div', {
          className: Yc.game_over_line,
          style: { top: `${h}px` },
          'aria-hidden': 'true',
        }),
        B ? J.jsx(uv, { ref: v, initialX: O, fieldHeight: b, item: o }) : null,
        J.jsx(iv, { ref: d }),
      ],
    });
  },
  $p = '_overlay_efysu_1',
  Wp = '_number_efysu_11',
  Mh = { overlay: $p, number: Wp },
  rv = w.memo(({ seconds: s }) =>
    s === null
      ? null
      : J.jsx('div', {
          className: Mh.overlay,
          'aria-live': 'assertive',
          'aria-label': `ゲームオーバーまで${s}秒`,
          children: J.jsx('span', { className: Mh.number, children: s }, s),
        })
  );
rv.displayName = 'CountdownOverlay';
const Ip = '_overlay_o79hb_1',
  Pp = '_panel_o79hb_13',
  e1 = '_new_record_o79hb_24',
  t1 = '_title_o79hb_32',
  n1 = '_scores_o79hb_40',
  a1 = '_row_o79hb_46',
  l1 = '_gold_o79hb_64',
  i1 = '_restart_o79hb_69',
  Wn = {
    overlay: Ip,
    panel: Pp,
    new_record: e1,
    title: t1,
    scores: n1,
    row: a1,
    gold: l1,
    restart: i1,
  },
  u1 = ({ score: s, bestScore: E, isNewRecord: b, onRestart: h }) =>
    J.jsx('div', {
      className: Wn.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'ゲームオーバー',
      children: J.jsxs('div', {
        className: Wn.panel,
        children: [
          b ? J.jsx('p', { className: Wn.new_record, children: '🎉 新記録！' }) : null,
          J.jsx('h2', { className: Wn.title, children: 'GAME OVER' }),
          J.jsxs('dl', {
            className: Wn.scores,
            children: [
              J.jsxs('div', {
                className: Wn.row,
                children: [
                  J.jsx('dt', { children: 'スコア' }),
                  J.jsx('dd', { className: b ? Wn.gold : '', children: s }),
                ],
              }),
              J.jsxs('div', {
                className: Wn.row,
                children: [J.jsx('dt', { children: 'ベスト' }), J.jsx('dd', { children: E })],
              }),
            ],
          }),
          J.jsx('button', {
            type: 'button',
            className: Wn.restart,
            onClick: h,
            children: 'もう一度あそぶ',
          }),
        ],
      }),
    }),
  r1 = '_root_1svqx_1',
  s1 = '_message_1svqx_13',
  c1 = '_icon_1svqx_30',
  o1 = '_text_1svqx_34',
  f1 = '_cancel_1svqx_38',
  ji = { root: r1, message: s1, icon: c1, text: o1, cancel: f1 },
  sv = w.memo(({ active: s, onCancel: E }) =>
    s
      ? J.jsxs('div', {
          className: ji.root,
          children: [
            J.jsxs('div', {
              className: ji.message,
              children: [
                J.jsx('span', { className: ji.icon, children: '🧲' }),
                J.jsx('span', { className: ji.text, children: '引き寄せたいアイテムをタップ' }),
              ],
            }),
            J.jsx('button', {
              type: 'button',
              className: ji.cancel,
              onClick: E,
              children: 'キャンセル',
            }),
          ],
        })
      : null
  );
sv.displayName = 'MagnetSelectingOverlay';
const d1 = '_gravity_flip_14l5j_1',
  m1 = '_arrow_14l5j_9',
  Rh = { gravity_flip: d1, arrow: m1 },
  cv = w.memo(({ effect: s }) =>
    s === 'gravityFlip'
      ? J.jsx('div', {
          className: Rh.gravity_flip,
          'aria-hidden': 'true',
          children: Array.from({ length: 6 }).map((E, b) =>
            J.jsx(
              'span',
              {
                className: Rh.arrow,
                style: { left: `${(b + 1) * 14}%`, animationDelay: `${b * 0.12}s` },
                children: '⬆',
              },
              b
            )
          ),
        })
      : null
  );
cv.displayName = 'SkillEffectOverlay';
const h1 = '_backdrop_6euhx_1',
  v1 = '_drawer_6euhx_11',
  g1 = '_header_6euhx_23',
  y1 = '_title_6euhx_30',
  p1 = '_close_6euhx_38',
  S1 = '_row_6euhx_54',
  x1 = '_row_label_6euhx_62',
  b1 = '_suspend_6euhx_68',
  E1 = '_footer_6euhx_88',
  C1 = '_version_6euhx_94',
  on = {
    backdrop: h1,
    drawer: v1,
    header: g1,
    title: y1,
    close: p1,
    row: S1,
    row_label: x1,
    suspend: b1,
    footer: E1,
    version: C1,
  },
  T1 = '_toggle_1ap46_1',
  M1 = { toggle: T1 },
  ov = w.memo(({ isOn: s, onToggle: E }) =>
    J.jsx('button', {
      type: 'button',
      className: M1.toggle,
      onClick: E,
      'aria-label': s ? 'サウンドをOFFにする' : 'サウンドをONにする',
      'aria-pressed': s,
      children: J.jsx('span', { 'aria-hidden': 'true', children: s ? '🔊' : '🔇' }),
    })
  );
ov.displayName = 'SoundToggle';
const R1 = '_toggle_15urq_1',
  _1 = { toggle: R1 },
  mo = [{ id: 'gumi', label: 'グミ' }],
  vr = 'gumi',
  ho = (s) => typeof s == 'string' && mo.some((E) => E.id === s),
  fv = w.memo(({ value: s, onChange: E }) => {
    const b = (h) => {
      const o = h.target.value;
      ho(o) && E(o);
    };
    return J.jsx('select', {
      className: _1.toggle,
      value: s,
      onChange: b,
      'aria-label': 'アセットテーマ',
      children: mo.map((h) => J.jsx('option', { value: h.id, children: h.label }, h.id)),
    });
  });
fv.displayName = 'ThemeToggle';
const vo = w.memo(
  ({
    open: s,
    onClose: E,
    themeId: b,
    onChangeTheme: h,
    isSoundOn: o,
    onToggleSound: l,
    canSuspend: c,
    onSuspend: d,
  }) =>
    s
      ? J.jsx('div', {
          className: on.backdrop,
          onClick: E,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '設定',
          children: J.jsxs('aside', {
            className: on.drawer,
            onClick: (f) => f.stopPropagation(),
            children: [
              J.jsxs('header', {
                className: on.header,
                children: [
                  J.jsx('h2', { className: on.title, children: '設定' }),
                  J.jsx('button', {
                    type: 'button',
                    className: on.close,
                    onClick: E,
                    'aria-label': '設定を閉じる',
                    children: '✕',
                  }),
                ],
              }),
              J.jsxs('div', {
                className: on.row,
                children: [
                  J.jsx('span', { className: on.row_label, children: 'テーマ' }),
                  J.jsx(fv, { value: b, onChange: h }),
                ],
              }),
              J.jsxs('div', {
                className: on.row,
                children: [
                  J.jsx('span', { className: on.row_label, children: 'サウンド' }),
                  J.jsx(ov, { isOn: o, onToggle: l }),
                ],
              }),
              c
                ? J.jsx('button', {
                    type: 'button',
                    className: on.suspend,
                    onClick: () => {
                      (d(), E());
                    },
                    children: '中断',
                  })
                : null,
              J.jsx('footer', {
                className: on.footer,
                children: J.jsxs('span', { className: on.version, children: ['v', '1.0.40'] }),
              }),
            ],
          }),
        })
      : null
);
vo.displayName = 'SettingsDrawer';
const A1 = '_button_12i3t_1',
  O1 = '_gauge_12i3t_23',
  D1 = '_gauge_track_12i3t_32',
  w1 = '_gauge_fill_12i3t_39',
  z1 = '_gauge_fill_full_12i3t_47',
  N1 = '_icon_12i3t_52',
  U1 = '_ready_12i3t_60',
  B1 = '_fully_ready_12i3t_65',
  Na = {
    button: A1,
    gauge: O1,
    gauge_track: D1,
    gauge_fill: w1,
    gauge_fill_full: z1,
    icon: N1,
    ready: U1,
    fully_ready: B1,
  },
  dr = 32,
  _h = 40,
  Ah = 110,
  L1 = 360,
  Oh = (s) => {
    const E = ((s - 90) * Math.PI) / 180;
    return { x: _h + dr * Math.cos(E), y: _h + dr * Math.sin(E) };
  },
  H1 = (s, E) => {
    const b = Oh(s),
      h = Oh(E),
      o = E - s > 180 ? 1 : 0;
    return `M ${b.x} ${b.y} A ${dr} ${dr} 0 ${o} 1 ${h.x} ${h.y}`;
  },
  qc = 1,
  dv = w.memo(({ gauge: s, segmentMax: E, segmentCount: b, canOpen: h, onClick: o }) => {
    const l = Math.round((s / (E * b)) * 100),
      c = L1 / b,
      d = c - Ah,
      f = Array.from({ length: b }, (v, y) => {
        const r = y * E;
        return Math.max(0, Math.min(E, s - r)) / E;
      }),
      m = f.filter((v) => v >= 1).length === b;
    return J.jsxs('button', {
      type: 'button',
      className: [Na.button, h ? Na.ready : '', m ? Na.fully_ready : ''].filter(Boolean).join(' '),
      onClick: o,
      disabled: !h,
      'aria-label': h ? '必殺技を選択' : `必殺技ゲージ ${l}%`,
      children: [
        J.jsx('svg', {
          className: Na.gauge,
          viewBox: '0 0 80 80',
          'aria-hidden': 'true',
          children: f.map((v, y) => {
            const r = y * c + d / 2,
              S = r + Ah,
              p = H1(r, S),
              C = v >= 1;
            return J.jsxs(
              'g',
              {
                children: [
                  J.jsx('path', { className: Na.gauge_track, d: p, pathLength: qc }),
                  J.jsx('path', {
                    className: `${Na.gauge_fill} ${C ? Na.gauge_fill_full : ''}`,
                    d: p,
                    pathLength: qc,
                    strokeDasharray: `${v} ${qc - v}`,
                  }),
                ],
              },
              y
            );
          }),
        }),
        J.jsx('span', { className: Na.icon, 'aria-hidden': 'true', children: '⚡' }),
      ],
    });
  });
dv.displayName = 'SkillButton';
const j1 = '_backdrop_v7sbf_1',
  G1 = '_menu_v7sbf_12',
  Y1 = '_title_v7sbf_21',
  V1 = '_choices_v7sbf_30',
  q1 = '_choice_v7sbf_30',
  X1 = '_choice_disabled_v7sbf_60',
  Q1 = '_choice_icon_v7sbf_65',
  Z1 = '_choice_label_v7sbf_72',
  K1 = '_choice_uses_v7sbf_83',
  k1 = '_choice_desc_v7sbf_91',
  J1 = '_choice_cost_v7sbf_97',
  F1 = '_cost_pip_v7sbf_105',
  $1 = '_cancel_v7sbf_113',
  $t = {
    backdrop: j1,
    menu: G1,
    title: Y1,
    choices: V1,
    choice: q1,
    choice_disabled: X1,
    choice_icon: Q1,
    choice_label: Z1,
    choice_uses: K1,
    choice_desc: k1,
    choice_cost: J1,
    cost_pip: F1,
    cancel: $1,
  },
  Wc = 100,
  Ic = 3,
  ft = {
    gaugeMax: Wc * Ic,
    segmentMax: Wc,
    segmentCount: Ic,
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
  W1 = (s) => s,
  mv = { shake: 1, gravityFlip: 2, magnet: Ic },
  Vl = 3,
  Gi = (s) => mv[s] * Wc,
  I1 = [
    { kind: 'shake', icon: '🌪', label: 'シェイク', description: '盤面を揺らして詰まりを解す' },
    { kind: 'gravityFlip', icon: '⬆️', label: '重力反転', description: '3秒だけ重力を逆さに' },
    {
      kind: 'magnet',
      icon: '🧲',
      label: '同レベル吸引',
      description: 'タップしたアイテムと同レベルを 1 体ランダムに引き寄せ',
    },
  ],
  hv = w.memo(
    ({ open: s, onSelect: E, onClose: b, canUse: h, magnetUsesLeft: o, magnetMaxUses: l }) =>
      s
        ? J.jsx('div', {
            className: $t.backdrop,
            onClick: b,
            role: 'dialog',
            'aria-modal': 'true',
            'aria-label': '必殺技を選択',
            children: J.jsxs('div', {
              className: $t.menu,
              onClick: (c) => c.stopPropagation(),
              children: [
                J.jsx('h2', { className: $t.title, children: '必殺技を選択' }),
                J.jsx('div', {
                  className: $t.choices,
                  children: I1.map((c) => {
                    const d = mv[c.kind],
                      f = h[c.kind],
                      g = c.kind === 'magnet';
                    return J.jsxs(
                      'button',
                      {
                        type: 'button',
                        className: `${$t.choice} ${f ? '' : $t.choice_disabled}`,
                        onClick: () => f && E(c.kind),
                        disabled: !f,
                        children: [
                          J.jsx('span', {
                            className: $t.choice_icon,
                            'aria-hidden': 'true',
                            children: c.icon,
                          }),
                          J.jsxs('span', {
                            className: $t.choice_label,
                            children: [
                              c.label,
                              g
                                ? J.jsxs('span', {
                                    className: $t.choice_uses,
                                    'aria-label': `残り ${o} 回 / 最大 ${l} 回`,
                                    children: ['残り ', o, '/', l, ' 回'],
                                  })
                                : null,
                            ],
                          }),
                          J.jsx('span', { className: $t.choice_desc, children: c.description }),
                          J.jsx('span', {
                            className: $t.choice_cost,
                            'aria-label': `コスト ${d} ゲージ`,
                            children: Array.from({ length: d }, (m, v) =>
                              J.jsx('span', { className: $t.cost_pip }, v)
                            ),
                          }),
                        ],
                      },
                      c.kind
                    );
                  }),
                }),
                J.jsx('button', {
                  type: 'button',
                  className: $t.cancel,
                  onClick: b,
                  children: 'キャンセル',
                }),
              ],
            }),
          })
        : null
  );
hv.displayName = 'SkillMenu';
const P1 = '_top_bar_15roj_1',
  eS = '_right_15roj_12',
  tS = '_settings_15roj_18',
  Xc = { top_bar: P1, right: eS, settings: tS },
  nS = '_next_1n5pn_1',
  aS = '_label_1n5pn_7',
  lS = '_thumb_1n5pn_14',
  iS = '_image_1n5pn_27',
  ir = { next: nS, label: aS, thumb: lS, image: iS },
  uS = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  vv = w.memo(({ item: s }) =>
    J.jsxs('div', {
      className: ir.next,
      children: [
        J.jsx('span', { className: ir.label, children: 'NEXT' }),
        J.jsx('div', {
          className: ir.thumb,
          'data-testid': 'next-item',
          children: s
            ? J.jsx('img', { src: uS(s.svgPath), alt: s.name, className: ir.image })
            : null,
        }),
      ],
    })
  );
vv.displayName = 'NextItemPreview';
const rS = '_score_display_pgke7_1',
  sS = '_row_pgke7_7',
  cS = '_label_pgke7_13',
  oS = '_value_pgke7_20',
  fS = '_label_small_pgke7_28',
  dS = '_value_small_pgke7_35',
  nl = { score_display: rS, row: sS, label: cS, value: oS, label_small: fS, value_small: dS },
  gv = w.memo(({ score: s, bestScore: E }) =>
    J.jsxs('div', {
      className: nl.score_display,
      children: [
        J.jsxs('div', {
          className: nl.row,
          children: [
            J.jsx('span', { className: nl.label, children: 'SCORE' }),
            J.jsx('span', { className: nl.value, 'data-testid': 'score-value', children: s }),
          ],
        }),
        J.jsxs('div', {
          className: nl.row,
          children: [
            J.jsx('span', { className: nl.label_small, children: 'BEST' }),
            J.jsx('span', { className: nl.value_small, children: E }),
          ],
        }),
      ],
    })
  );
gv.displayName = 'ScoreDisplay';
const mS = ({ score: s, bestScore: E, nextItem: b, onOpenSettings: h }) =>
  J.jsxs('header', {
    className: Xc.top_bar,
    children: [
      J.jsx(gv, { score: s, bestScore: E }),
      J.jsxs('div', {
        className: Xc.right,
        children: [
          J.jsx(vv, { item: b }),
          J.jsx('button', {
            type: 'button',
            className: Xc.settings,
            onClick: h,
            'aria-label': '設定を開く',
            children: J.jsx('span', { 'aria-hidden': 'true', children: '⚙' }),
          }),
        ],
      }),
    ],
  });
var cr = { exports: {} };
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
 */ var hS = cr.exports,
  Dh;
function vS() {
  return (
    Dh ||
      ((Dh = 1),
      (function (s, E) {
        (function (h, o) {
          s.exports = o();
        })(hS, function () {
          return (function (b) {
            var h = {};
            function o(l) {
              if (h[l]) return h[l].exports;
              var c = (h[l] = { i: l, l: !1, exports: {} });
              return (b[l].call(c.exports, c, c.exports, o), (c.l = !0), c.exports);
            }
            return (
              (o.m = b),
              (o.c = h),
              (o.d = function (l, c, d) {
                o.o(l, c) || Object.defineProperty(l, c, { enumerable: !0, get: d });
              }),
              (o.r = function (l) {
                (typeof Symbol < 'u' &&
                  Symbol.toStringTag &&
                  Object.defineProperty(l, Symbol.toStringTag, { value: 'Module' }),
                  Object.defineProperty(l, '__esModule', { value: !0 }));
              }),
              (o.t = function (l, c) {
                if (
                  (c & 1 && (l = o(l)),
                  c & 8 || (c & 4 && typeof l == 'object' && l && l.__esModule))
                )
                  return l;
                var d = Object.create(null);
                if (
                  (o.r(d),
                  Object.defineProperty(d, 'default', { enumerable: !0, value: l }),
                  c & 2 && typeof l != 'string')
                )
                  for (var f in l)
                    o.d(
                      d,
                      f,
                      function (g) {
                        return l[g];
                      }.bind(null, f)
                    );
                return d;
              }),
              (o.n = function (l) {
                var c =
                  l && l.__esModule
                    ? function () {
                        return l.default;
                      }
                    : function () {
                        return l;
                      };
                return (o.d(c, 'a', c), c);
              }),
              (o.o = function (l, c) {
                return Object.prototype.hasOwnProperty.call(l, c);
              }),
              (o.p = ''),
              o((o.s = 20))
            );
          })([
            function (b, h) {
              var o = {};
              ((b.exports = o),
                (function () {
                  ((o._baseDelta = 1e3 / 60),
                    (o._nextId = 0),
                    (o._seed = 0),
                    (o._nowStartTime = +new Date()),
                    (o._warnedOnce = {}),
                    (o._decomp = null),
                    (o.extend = function (c, d) {
                      var f, g;
                      typeof d == 'boolean' ? ((f = 2), (g = d)) : ((f = 1), (g = !0));
                      for (var m = f; m < arguments.length; m++) {
                        var v = arguments[m];
                        if (v)
                          for (var y in v)
                            g &&
                            v[y] &&
                            v[y].constructor === Object &&
                            (!c[y] || c[y].constructor === Object)
                              ? ((c[y] = c[y] || {}), o.extend(c[y], g, v[y]))
                              : (c[y] = v[y]);
                      }
                      return c;
                    }),
                    (o.clone = function (c, d) {
                      return o.extend({}, d, c);
                    }),
                    (o.keys = function (c) {
                      if (Object.keys) return Object.keys(c);
                      var d = [];
                      for (var f in c) d.push(f);
                      return d;
                    }),
                    (o.values = function (c) {
                      var d = [];
                      if (Object.keys) {
                        for (var f = Object.keys(c), g = 0; g < f.length; g++) d.push(c[f[g]]);
                        return d;
                      }
                      for (var m in c) d.push(c[m]);
                      return d;
                    }),
                    (o.get = function (c, d, f, g) {
                      d = d.split('.').slice(f, g);
                      for (var m = 0; m < d.length; m += 1) c = c[d[m]];
                      return c;
                    }),
                    (o.set = function (c, d, f, g, m) {
                      var v = d.split('.').slice(g, m);
                      return ((o.get(c, d, 0, -1)[v[v.length - 1]] = f), f);
                    }),
                    (o.shuffle = function (c) {
                      for (var d = c.length - 1; d > 0; d--) {
                        var f = Math.floor(o.random() * (d + 1)),
                          g = c[d];
                        ((c[d] = c[f]), (c[f] = g));
                      }
                      return c;
                    }),
                    (o.choose = function (c) {
                      return c[Math.floor(o.random() * c.length)];
                    }),
                    (o.isElement = function (c) {
                      return typeof HTMLElement < 'u'
                        ? c instanceof HTMLElement
                        : !!(c && c.nodeType && c.nodeName);
                    }),
                    (o.isArray = function (c) {
                      return Object.prototype.toString.call(c) === '[object Array]';
                    }),
                    (o.isFunction = function (c) {
                      return typeof c == 'function';
                    }),
                    (o.isPlainObject = function (c) {
                      return typeof c == 'object' && c.constructor === Object;
                    }),
                    (o.isString = function (c) {
                      return toString.call(c) === '[object String]';
                    }),
                    (o.clamp = function (c, d, f) {
                      return c < d ? d : c > f ? f : c;
                    }),
                    (o.sign = function (c) {
                      return c < 0 ? -1 : 1;
                    }),
                    (o.now = function () {
                      if (typeof window < 'u' && window.performance) {
                        if (window.performance.now) return window.performance.now();
                        if (window.performance.webkitNow) return window.performance.webkitNow();
                      }
                      return Date.now ? Date.now() : new Date() - o._nowStartTime;
                    }),
                    (o.random = function (c, d) {
                      return (
                        (c = typeof c < 'u' ? c : 0),
                        (d = typeof d < 'u' ? d : 1),
                        c + l() * (d - c)
                      );
                    }));
                  var l = function () {
                    return ((o._seed = (o._seed * 9301 + 49297) % 233280), o._seed / 233280);
                  };
                  ((o.colorToNumber = function (c) {
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
                    (o.logLevel = 1),
                    (o.log = function () {
                      console &&
                        o.logLevel > 0 &&
                        o.logLevel <= 3 &&
                        console.log.apply(
                          console,
                          ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                        );
                    }),
                    (o.info = function () {
                      console &&
                        o.logLevel > 0 &&
                        o.logLevel <= 2 &&
                        console.info.apply(
                          console,
                          ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                        );
                    }),
                    (o.warn = function () {
                      console &&
                        o.logLevel > 0 &&
                        o.logLevel <= 3 &&
                        console.warn.apply(
                          console,
                          ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                        );
                    }),
                    (o.warnOnce = function () {
                      var c = Array.prototype.slice.call(arguments).join(' ');
                      o._warnedOnce[c] || (o.warn(c), (o._warnedOnce[c] = !0));
                    }),
                    (o.deprecated = function (c, d, f) {
                      c[d] = o.chain(function () {
                        o.warnOnce('🔅 deprecated 🔅', f);
                      }, c[d]);
                    }),
                    (o.nextId = function () {
                      return o._nextId++;
                    }),
                    (o.indexOf = function (c, d) {
                      if (c.indexOf) return c.indexOf(d);
                      for (var f = 0; f < c.length; f++) if (c[f] === d) return f;
                      return -1;
                    }),
                    (o.map = function (c, d) {
                      if (c.map) return c.map(d);
                      for (var f = [], g = 0; g < c.length; g += 1) f.push(d(c[g]));
                      return f;
                    }),
                    (o.topologicalSort = function (c) {
                      var d = [],
                        f = [],
                        g = [];
                      for (var m in c) !f[m] && !g[m] && o._topologicalSort(m, f, g, c, d);
                      return d;
                    }),
                    (o._topologicalSort = function (c, d, f, g, m) {
                      var v = g[c] || [];
                      f[c] = !0;
                      for (var y = 0; y < v.length; y += 1) {
                        var r = v[y];
                        f[r] || d[r] || o._topologicalSort(r, d, f, g, m);
                      }
                      ((f[c] = !1), (d[c] = !0), m.push(c));
                    }),
                    (o.chain = function () {
                      for (var c = [], d = 0; d < arguments.length; d += 1) {
                        var f = arguments[d];
                        f._chained ? c.push.apply(c, f._chained) : c.push(f);
                      }
                      var g = function () {
                        for (
                          var m, v = new Array(arguments.length), y = 0, r = arguments.length;
                          y < r;
                          y++
                        )
                          v[y] = arguments[y];
                        for (y = 0; y < c.length; y += 1) {
                          var S = c[y].apply(m, v);
                          typeof S < 'u' && (m = S);
                        }
                        return m;
                      };
                      return ((g._chained = c), g);
                    }),
                    (o.chainPathBefore = function (c, d, f) {
                      return o.set(c, d, o.chain(f, o.get(c, d)));
                    }),
                    (o.chainPathAfter = function (c, d, f) {
                      return o.set(c, d, o.chain(o.get(c, d), f));
                    }),
                    (o.setDecomp = function (c) {
                      o._decomp = c;
                    }),
                    (o.getDecomp = function () {
                      var c = o._decomp;
                      try {
                        (!c && typeof window < 'u' && (c = window.decomp),
                          !c && typeof rh < 'u' && (c = rh.decomp));
                      } catch {
                        c = null;
                      }
                      return c;
                    }));
                })());
            },
            function (b, h) {
              var o = {};
              ((b.exports = o),
                (function () {
                  ((o.create = function (l) {
                    var c = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
                    return (l && o.update(c, l), c);
                  }),
                    (o.update = function (l, c, d) {
                      ((l.min.x = 1 / 0),
                        (l.max.x = -1 / 0),
                        (l.min.y = 1 / 0),
                        (l.max.y = -1 / 0));
                      for (var f = 0; f < c.length; f++) {
                        var g = c[f];
                        (g.x > l.max.x && (l.max.x = g.x),
                          g.x < l.min.x && (l.min.x = g.x),
                          g.y > l.max.y && (l.max.y = g.y),
                          g.y < l.min.y && (l.min.y = g.y));
                      }
                      d &&
                        (d.x > 0 ? (l.max.x += d.x) : (l.min.x += d.x),
                        d.y > 0 ? (l.max.y += d.y) : (l.min.y += d.y));
                    }),
                    (o.contains = function (l, c) {
                      return c.x >= l.min.x && c.x <= l.max.x && c.y >= l.min.y && c.y <= l.max.y;
                    }),
                    (o.overlaps = function (l, c) {
                      return (
                        l.min.x <= c.max.x &&
                        l.max.x >= c.min.x &&
                        l.max.y >= c.min.y &&
                        l.min.y <= c.max.y
                      );
                    }),
                    (o.translate = function (l, c) {
                      ((l.min.x += c.x), (l.max.x += c.x), (l.min.y += c.y), (l.max.y += c.y));
                    }),
                    (o.shift = function (l, c) {
                      var d = l.max.x - l.min.x,
                        f = l.max.y - l.min.y;
                      ((l.min.x = c.x), (l.max.x = c.x + d), (l.min.y = c.y), (l.max.y = c.y + f));
                    }));
                })());
            },
            function (b, h) {
              var o = {};
              ((b.exports = o),
                (function () {
                  ((o.create = function (l, c) {
                    return { x: l || 0, y: c || 0 };
                  }),
                    (o.clone = function (l) {
                      return { x: l.x, y: l.y };
                    }),
                    (o.magnitude = function (l) {
                      return Math.sqrt(l.x * l.x + l.y * l.y);
                    }),
                    (o.magnitudeSquared = function (l) {
                      return l.x * l.x + l.y * l.y;
                    }),
                    (o.rotate = function (l, c, d) {
                      var f = Math.cos(c),
                        g = Math.sin(c);
                      d || (d = {});
                      var m = l.x * f - l.y * g;
                      return ((d.y = l.x * g + l.y * f), (d.x = m), d);
                    }),
                    (o.rotateAbout = function (l, c, d, f) {
                      var g = Math.cos(c),
                        m = Math.sin(c);
                      f || (f = {});
                      var v = d.x + ((l.x - d.x) * g - (l.y - d.y) * m);
                      return ((f.y = d.y + ((l.x - d.x) * m + (l.y - d.y) * g)), (f.x = v), f);
                    }),
                    (o.normalise = function (l) {
                      var c = o.magnitude(l);
                      return c === 0 ? { x: 0, y: 0 } : { x: l.x / c, y: l.y / c };
                    }),
                    (o.dot = function (l, c) {
                      return l.x * c.x + l.y * c.y;
                    }),
                    (o.cross = function (l, c) {
                      return l.x * c.y - l.y * c.x;
                    }),
                    (o.cross3 = function (l, c, d) {
                      return (c.x - l.x) * (d.y - l.y) - (c.y - l.y) * (d.x - l.x);
                    }),
                    (o.add = function (l, c, d) {
                      return (d || (d = {}), (d.x = l.x + c.x), (d.y = l.y + c.y), d);
                    }),
                    (o.sub = function (l, c, d) {
                      return (d || (d = {}), (d.x = l.x - c.x), (d.y = l.y - c.y), d);
                    }),
                    (o.mult = function (l, c) {
                      return { x: l.x * c, y: l.y * c };
                    }),
                    (o.div = function (l, c) {
                      return { x: l.x / c, y: l.y / c };
                    }),
                    (o.perp = function (l, c) {
                      return ((c = c === !0 ? -1 : 1), { x: c * -l.y, y: c * l.x });
                    }),
                    (o.neg = function (l) {
                      return { x: -l.x, y: -l.y };
                    }),
                    (o.angle = function (l, c) {
                      return Math.atan2(c.y - l.y, c.x - l.x);
                    }),
                    (o._temp = [
                      o.create(),
                      o.create(),
                      o.create(),
                      o.create(),
                      o.create(),
                      o.create(),
                    ]));
                })());
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(2),
                d = o(0);
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
                      f.replace(m, function (y, r, S) {
                        v.push({ x: parseFloat(r), y: parseFloat(S) });
                      }),
                      l.create(v, g)
                    );
                  }),
                  (l.centre = function (f) {
                    for (
                      var g = l.area(f, !0), m = { x: 0, y: 0 }, v, y, r, S = 0;
                      S < f.length;
                      S++
                    )
                      ((r = (S + 1) % f.length),
                        (v = c.cross(f[S], f[r])),
                        (y = c.mult(c.add(f[S], f[r]), v)),
                        (m = c.add(m, y)));
                    return c.div(m, 6 * g);
                  }),
                  (l.mean = function (f) {
                    for (var g = { x: 0, y: 0 }, m = 0; m < f.length; m++)
                      ((g.x += f[m].x), (g.y += f[m].y));
                    return c.div(g, f.length);
                  }),
                  (l.area = function (f, g) {
                    for (var m = 0, v = f.length - 1, y = 0; y < f.length; y++)
                      ((m += (f[v].x - f[y].x) * (f[v].y + f[y].y)), (v = y));
                    return g ? m / 2 : Math.abs(m) / 2;
                  }),
                  (l.inertia = function (f, g) {
                    for (var m = 0, v = 0, y = f, r, S, p = 0; p < y.length; p++)
                      ((S = (p + 1) % y.length),
                        (r = Math.abs(c.cross(y[S], y[p]))),
                        (m += r * (c.dot(y[S], y[S]) + c.dot(y[S], y[p]) + c.dot(y[p], y[p]))),
                        (v += r));
                    return (g / 6) * (m / v);
                  }),
                  (l.translate = function (f, g, m) {
                    m = typeof m < 'u' ? m : 1;
                    var v = f.length,
                      y = g.x * m,
                      r = g.y * m,
                      S;
                    for (S = 0; S < v; S++) ((f[S].x += y), (f[S].y += r));
                    return f;
                  }),
                  (l.rotate = function (f, g, m) {
                    if (g !== 0) {
                      var v = Math.cos(g),
                        y = Math.sin(g),
                        r = m.x,
                        S = m.y,
                        p = f.length,
                        C,
                        R,
                        z,
                        B;
                      for (B = 0; B < p; B++)
                        ((C = f[B]),
                          (R = C.x - r),
                          (z = C.y - S),
                          (C.x = r + (R * v - z * y)),
                          (C.y = S + (R * y + z * v)));
                      return f;
                    }
                  }),
                  (l.contains = function (f, g) {
                    for (var m = g.x, v = g.y, y = f.length, r = f[y - 1], S, p = 0; p < y; p++) {
                      if (((S = f[p]), (m - r.x) * (S.y - r.y) + (v - r.y) * (r.x - S.x) > 0))
                        return !1;
                      r = S;
                    }
                    return !0;
                  }),
                  (l.scale = function (f, g, m, v) {
                    if (g === 1 && m === 1) return f;
                    v = v || l.centre(f);
                    for (var y, r, S = 0; S < f.length; S++)
                      ((y = f[S]),
                        (r = c.sub(y, v)),
                        (f[S].x = v.x + r.x * g),
                        (f[S].y = v.y + r.y * m));
                    return f;
                  }),
                  (l.chamfer = function (f, g, m, v, y) {
                    (typeof g == 'number' ? (g = [g]) : (g = g || [8]),
                      (m = typeof m < 'u' ? m : -1),
                      (v = v || 2),
                      (y = y || 14));
                    for (var r = [], S = 0; S < f.length; S++) {
                      var p = f[S - 1 >= 0 ? S - 1 : f.length - 1],
                        C = f[S],
                        R = f[(S + 1) % f.length],
                        z = g[S < g.length ? S : g.length - 1];
                      if (z === 0) {
                        r.push(C);
                        continue;
                      }
                      var B = c.normalise({ x: C.y - p.y, y: p.x - C.x }),
                        Y = c.normalise({ x: R.y - C.y, y: C.x - R.x }),
                        T = Math.sqrt(2 * Math.pow(z, 2)),
                        D = c.mult(d.clone(B), z),
                        O = c.normalise(c.mult(c.add(B, Y), 0.5)),
                        _ = c.sub(C, c.mult(O, T)),
                        H = m;
                      (m === -1 && (H = Math.pow(z, 0.32) * 1.75),
                        (H = d.clamp(H, v, y)),
                        H % 2 === 1 && (H += 1));
                      for (var L = Math.acos(c.dot(B, Y)), j = L / H, V = 0; V < H; V++)
                        r.push(c.add(c.rotate(D, j * V), _));
                    }
                    return r;
                  }),
                  (l.clockwiseSort = function (f) {
                    var g = l.mean(f);
                    return (
                      f.sort(function (m, v) {
                        return c.angle(g, m) - c.angle(g, v);
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
                      S;
                    if (m < 3) return null;
                    for (v = 0; v < m; v++)
                      if (
                        ((y = (v + 1) % m),
                        (r = (v + 2) % m),
                        (S = (f[y].x - f[v].x) * (f[r].y - f[y].y)),
                        (S -= (f[y].y - f[v].y) * (f[r].x - f[y].x)),
                        S < 0 ? (g |= 1) : S > 0 && (g |= 2),
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
                        f.sort(function (r, S) {
                          var p = r.x - S.x;
                          return p !== 0 ? p : r.y - S.y;
                        }),
                        y = 0;
                      y < f.length;
                      y += 1
                    ) {
                      for (
                        v = f[y];
                        m.length >= 2 && c.cross3(m[m.length - 2], m[m.length - 1], v) <= 0;
                      )
                        m.pop();
                      m.push(v);
                    }
                    for (y = f.length - 1; y >= 0; y -= 1) {
                      for (
                        v = f[y];
                        g.length >= 2 && c.cross3(g[g.length - 2], g[g.length - 1], v) <= 0;
                      )
                        g.pop();
                      g.push(v);
                    }
                    return (g.pop(), m.pop(), g.concat(m));
                  }));
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(3),
                d = o(2),
                f = o(7),
                g = o(0),
                m = o(1),
                v = o(11);
              (function () {
                ((l._timeCorrection = !0),
                  (l._inertiaScale = 4),
                  (l._nextCollidingGroupId = 1),
                  (l._nextNonCollidingGroupId = -1),
                  (l._nextCategory = 1),
                  (l._baseDelta = 1e3 / 60),
                  (l.create = function (r) {
                    var S = {
                        id: g.nextId(),
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
                      p = g.extend(S, r);
                    return (y(p, r), p);
                  }),
                  (l.nextGroup = function (r) {
                    return r ? l._nextNonCollidingGroupId-- : l._nextCollidingGroupId++;
                  }),
                  (l.nextCategory = function () {
                    return ((l._nextCategory = l._nextCategory << 1), l._nextCategory);
                  }));
                var y = function (r, S) {
                  ((S = S || {}),
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
                    c.rotate(r.vertices, r.angle, r.position),
                    v.rotate(r.axes, r.angle),
                    m.update(r.bounds, r.vertices, r.velocity),
                    l.set(r, {
                      axes: S.axes || r.axes,
                      area: S.area || r.area,
                      mass: S.mass || r.mass,
                      inertia: S.inertia || r.inertia,
                    }));
                  var p = r.isStatic
                      ? '#14151f'
                      : g.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1']),
                    C = r.isStatic ? '#555' : '#ccc',
                    R = r.isStatic && r.render.fillStyle === null ? 1 : 0;
                  ((r.render.fillStyle = r.render.fillStyle || p),
                    (r.render.strokeStyle = r.render.strokeStyle || C),
                    (r.render.lineWidth = r.render.lineWidth || R),
                    (r.render.sprite.xOffset +=
                      -(r.bounds.min.x - r.position.x) / (r.bounds.max.x - r.bounds.min.x)),
                    (r.render.sprite.yOffset +=
                      -(r.bounds.min.y - r.position.y) / (r.bounds.max.y - r.bounds.min.y)));
                };
                ((l.set = function (r, S, p) {
                  var C;
                  typeof S == 'string' && ((C = S), (S = {}), (S[C] = p));
                  for (C in S)
                    if (Object.prototype.hasOwnProperty.call(S, C))
                      switch (((p = S[C]), C)) {
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
                          r[C] = p;
                      }
                }),
                  (l.setStatic = function (r, S) {
                    for (var p = 0; p < r.parts.length; p++) {
                      var C = r.parts[p];
                      (S
                        ? (C.isStatic ||
                            (C._original = {
                              restitution: C.restitution,
                              friction: C.friction,
                              mass: C.mass,
                              inertia: C.inertia,
                              density: C.density,
                              inverseMass: C.inverseMass,
                              inverseInertia: C.inverseInertia,
                            }),
                          (C.restitution = 0),
                          (C.friction = 1),
                          (C.mass = C.inertia = C.density = 1 / 0),
                          (C.inverseMass = C.inverseInertia = 0),
                          (C.positionPrev.x = C.position.x),
                          (C.positionPrev.y = C.position.y),
                          (C.anglePrev = C.angle),
                          (C.angularVelocity = 0),
                          (C.speed = 0),
                          (C.angularSpeed = 0),
                          (C.motion = 0))
                        : C._original &&
                          ((C.restitution = C._original.restitution),
                          (C.friction = C._original.friction),
                          (C.mass = C._original.mass),
                          (C.inertia = C._original.inertia),
                          (C.density = C._original.density),
                          (C.inverseMass = C._original.inverseMass),
                          (C.inverseInertia = C._original.inverseInertia),
                          (C._original = null)),
                        (C.isStatic = S));
                    }
                  }),
                  (l.setMass = function (r, S) {
                    var p = r.inertia / (r.mass / 6);
                    ((r.inertia = p * (S / 6)),
                      (r.inverseInertia = 1 / r.inertia),
                      (r.mass = S),
                      (r.inverseMass = 1 / r.mass),
                      (r.density = r.mass / r.area));
                  }),
                  (l.setDensity = function (r, S) {
                    (l.setMass(r, S * r.area), (r.density = S));
                  }),
                  (l.setInertia = function (r, S) {
                    ((r.inertia = S), (r.inverseInertia = 1 / r.inertia));
                  }),
                  (l.setVertices = function (r, S) {
                    (S[0].body === r ? (r.vertices = S) : (r.vertices = c.create(S, r)),
                      (r.axes = v.fromVertices(r.vertices)),
                      (r.area = c.area(r.vertices)),
                      l.setMass(r, r.density * r.area));
                    var p = c.centre(r.vertices);
                    (c.translate(r.vertices, p, -1),
                      l.setInertia(r, l._inertiaScale * c.inertia(r.vertices, r.mass)),
                      c.translate(r.vertices, r.position),
                      m.update(r.bounds, r.vertices, r.velocity));
                  }),
                  (l.setParts = function (r, S, p) {
                    var C;
                    for (
                      S = S.slice(0), r.parts.length = 0, r.parts.push(r), r.parent = r, C = 0;
                      C < S.length;
                      C++
                    ) {
                      var R = S[C];
                      R !== r && ((R.parent = r), r.parts.push(R));
                    }
                    if (r.parts.length !== 1) {
                      if (((p = typeof p < 'u' ? p : !0), p)) {
                        var z = [];
                        for (C = 0; C < S.length; C++) z = z.concat(S[C].vertices);
                        c.clockwiseSort(z);
                        var B = c.hull(z),
                          Y = c.centre(B);
                        (l.setVertices(r, B), c.translate(r.vertices, Y));
                      }
                      var T = l._totalProperties(r);
                      ((r.area = T.area),
                        (r.parent = r),
                        (r.position.x = T.centre.x),
                        (r.position.y = T.centre.y),
                        (r.positionPrev.x = T.centre.x),
                        (r.positionPrev.y = T.centre.y),
                        l.setMass(r, T.mass),
                        l.setInertia(r, T.inertia),
                        l.setPosition(r, T.centre));
                    }
                  }),
                  (l.setCentre = function (r, S, p) {
                    p
                      ? ((r.positionPrev.x += S.x),
                        (r.positionPrev.y += S.y),
                        (r.position.x += S.x),
                        (r.position.y += S.y))
                      : ((r.positionPrev.x = S.x - (r.position.x - r.positionPrev.x)),
                        (r.positionPrev.y = S.y - (r.position.y - r.positionPrev.y)),
                        (r.position.x = S.x),
                        (r.position.y = S.y));
                  }),
                  (l.setPosition = function (r, S, p) {
                    var C = d.sub(S, r.position);
                    p
                      ? ((r.positionPrev.x = r.position.x),
                        (r.positionPrev.y = r.position.y),
                        (r.velocity.x = C.x),
                        (r.velocity.y = C.y),
                        (r.speed = d.magnitude(C)))
                      : ((r.positionPrev.x += C.x), (r.positionPrev.y += C.y));
                    for (var R = 0; R < r.parts.length; R++) {
                      var z = r.parts[R];
                      ((z.position.x += C.x),
                        (z.position.y += C.y),
                        c.translate(z.vertices, C),
                        m.update(z.bounds, z.vertices, r.velocity));
                    }
                  }),
                  (l.setAngle = function (r, S, p) {
                    var C = S - r.angle;
                    p
                      ? ((r.anglePrev = r.angle),
                        (r.angularVelocity = C),
                        (r.angularSpeed = Math.abs(C)))
                      : (r.anglePrev += C);
                    for (var R = 0; R < r.parts.length; R++) {
                      var z = r.parts[R];
                      ((z.angle += C),
                        c.rotate(z.vertices, C, r.position),
                        v.rotate(z.axes, C),
                        m.update(z.bounds, z.vertices, r.velocity),
                        R > 0 && d.rotateAbout(z.position, C, r.position, z.position));
                    }
                  }),
                  (l.setVelocity = function (r, S) {
                    var p = r.deltaTime / l._baseDelta;
                    ((r.positionPrev.x = r.position.x - S.x * p),
                      (r.positionPrev.y = r.position.y - S.y * p),
                      (r.velocity.x = (r.position.x - r.positionPrev.x) / p),
                      (r.velocity.y = (r.position.y - r.positionPrev.y) / p),
                      (r.speed = d.magnitude(r.velocity)));
                  }),
                  (l.getVelocity = function (r) {
                    var S = l._baseDelta / r.deltaTime;
                    return {
                      x: (r.position.x - r.positionPrev.x) * S,
                      y: (r.position.y - r.positionPrev.y) * S,
                    };
                  }),
                  (l.getSpeed = function (r) {
                    return d.magnitude(l.getVelocity(r));
                  }),
                  (l.setSpeed = function (r, S) {
                    l.setVelocity(r, d.mult(d.normalise(l.getVelocity(r)), S));
                  }),
                  (l.setAngularVelocity = function (r, S) {
                    var p = r.deltaTime / l._baseDelta;
                    ((r.anglePrev = r.angle - S * p),
                      (r.angularVelocity = (r.angle - r.anglePrev) / p),
                      (r.angularSpeed = Math.abs(r.angularVelocity)));
                  }),
                  (l.getAngularVelocity = function (r) {
                    return ((r.angle - r.anglePrev) * l._baseDelta) / r.deltaTime;
                  }),
                  (l.getAngularSpeed = function (r) {
                    return Math.abs(l.getAngularVelocity(r));
                  }),
                  (l.setAngularSpeed = function (r, S) {
                    l.setAngularVelocity(r, g.sign(l.getAngularVelocity(r)) * S);
                  }),
                  (l.translate = function (r, S, p) {
                    l.setPosition(r, d.add(r.position, S), p);
                  }),
                  (l.rotate = function (r, S, p, C) {
                    if (!p) l.setAngle(r, r.angle + S, C);
                    else {
                      var R = Math.cos(S),
                        z = Math.sin(S),
                        B = r.position.x - p.x,
                        Y = r.position.y - p.y;
                      (l.setPosition(r, { x: p.x + (B * R - Y * z), y: p.y + (B * z + Y * R) }, C),
                        l.setAngle(r, r.angle + S, C));
                    }
                  }),
                  (l.scale = function (r, S, p, C) {
                    var R = 0,
                      z = 0;
                    C = C || r.position;
                    for (var B = 0; B < r.parts.length; B++) {
                      var Y = r.parts[B];
                      (c.scale(Y.vertices, S, p, C),
                        (Y.axes = v.fromVertices(Y.vertices)),
                        (Y.area = c.area(Y.vertices)),
                        l.setMass(Y, r.density * Y.area),
                        c.translate(Y.vertices, { x: -Y.position.x, y: -Y.position.y }),
                        l.setInertia(Y, l._inertiaScale * c.inertia(Y.vertices, Y.mass)),
                        c.translate(Y.vertices, { x: Y.position.x, y: Y.position.y }),
                        B > 0 && ((R += Y.area), (z += Y.inertia)),
                        (Y.position.x = C.x + (Y.position.x - C.x) * S),
                        (Y.position.y = C.y + (Y.position.y - C.y) * p),
                        m.update(Y.bounds, Y.vertices, r.velocity));
                    }
                    (r.parts.length > 1 &&
                      ((r.area = R),
                      r.isStatic || (l.setMass(r, r.density * R), l.setInertia(r, z))),
                      r.circleRadius &&
                        (S === p ? (r.circleRadius *= S) : (r.circleRadius = null)));
                  }),
                  (l.update = function (r, S) {
                    S = (typeof S < 'u' ? S : 1e3 / 60) * r.timeScale;
                    var p = S * S,
                      C = l._timeCorrection ? S / (r.deltaTime || S) : 1,
                      R = 1 - r.frictionAir * (S / g._baseDelta),
                      z = (r.position.x - r.positionPrev.x) * C,
                      B = (r.position.y - r.positionPrev.y) * C;
                    ((r.velocity.x = z * R + (r.force.x / r.mass) * p),
                      (r.velocity.y = B * R + (r.force.y / r.mass) * p),
                      (r.positionPrev.x = r.position.x),
                      (r.positionPrev.y = r.position.y),
                      (r.position.x += r.velocity.x),
                      (r.position.y += r.velocity.y),
                      (r.deltaTime = S),
                      (r.angularVelocity =
                        (r.angle - r.anglePrev) * R * C + (r.torque / r.inertia) * p),
                      (r.anglePrev = r.angle),
                      (r.angle += r.angularVelocity));
                    for (var Y = 0; Y < r.parts.length; Y++) {
                      var T = r.parts[Y];
                      (c.translate(T.vertices, r.velocity),
                        Y > 0 && ((T.position.x += r.velocity.x), (T.position.y += r.velocity.y)),
                        r.angularVelocity !== 0 &&
                          (c.rotate(T.vertices, r.angularVelocity, r.position),
                          v.rotate(T.axes, r.angularVelocity),
                          Y > 0 &&
                            d.rotateAbout(T.position, r.angularVelocity, r.position, T.position)),
                        m.update(T.bounds, T.vertices, r.velocity));
                    }
                  }),
                  (l.updateVelocities = function (r) {
                    var S = l._baseDelta / r.deltaTime,
                      p = r.velocity;
                    ((p.x = (r.position.x - r.positionPrev.x) * S),
                      (p.y = (r.position.y - r.positionPrev.y) * S),
                      (r.speed = Math.sqrt(p.x * p.x + p.y * p.y)),
                      (r.angularVelocity = (r.angle - r.anglePrev) * S),
                      (r.angularSpeed = Math.abs(r.angularVelocity)));
                  }),
                  (l.applyForce = function (r, S, p) {
                    var C = { x: S.x - r.position.x, y: S.y - r.position.y };
                    ((r.force.x += p.x), (r.force.y += p.y), (r.torque += C.x * p.y - C.y * p.x));
                  }),
                  (l._totalProperties = function (r) {
                    for (
                      var S = { mass: 0, area: 0, inertia: 0, centre: { x: 0, y: 0 } },
                        p = r.parts.length === 1 ? 0 : 1;
                      p < r.parts.length;
                      p++
                    ) {
                      var C = r.parts[p],
                        R = C.mass !== 1 / 0 ? C.mass : 1;
                      ((S.mass += R),
                        (S.area += C.area),
                        (S.inertia += C.inertia),
                        (S.centre = d.add(S.centre, d.mult(C.position, R))));
                    }
                    return ((S.centre = d.div(S.centre, S.mass)), S);
                  }));
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(0);
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
                    typeof f == 'function' && ((g = f), (f = c.keys(d.events).join(' ')));
                    for (var m = f.split(' '), v = 0; v < m.length; v++) {
                      var y = d.events[m[v]],
                        r = [];
                      if (g && y) for (var S = 0; S < y.length; S++) y[S] !== g && r.push(y[S]);
                      d.events[m[v]] = r;
                    }
                  }),
                  (l.trigger = function (d, f, g) {
                    var m,
                      v,
                      y,
                      r,
                      S = d.events;
                    if (S && c.keys(S).length > 0) {
                      (g || (g = {}), (m = f.split(' ')));
                      for (var p = 0; p < m.length; p++)
                        if (((v = m[p]), (y = S[v]), y)) {
                          ((r = c.clone(g, !1)), (r.name = v), (r.source = d));
                          for (var C = 0; C < y.length; C++) y[C].apply(d, [r]);
                        }
                    }
                  }));
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(5),
                d = o(0),
                f = o(1),
                g = o(4);
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
                      for (var S = 0; S < m.composites.length; S++) {
                        var p = m.composites[S];
                        l.setModified(p, v, y, r);
                      }
                  }),
                  (l.add = function (m, v) {
                    var y = [].concat(v);
                    c.trigger(m, 'beforeAdd', { object: v });
                    for (var r = 0; r < y.length; r++) {
                      var S = y[r];
                      switch (S.type) {
                        case 'body':
                          if (S.parent !== S) {
                            d.warn(
                              'Composite.add: skipped adding a compound body part (you must add its parent instead)'
                            );
                            break;
                          }
                          l.addBody(m, S);
                          break;
                        case 'constraint':
                          l.addConstraint(m, S);
                          break;
                        case 'composite':
                          l.addComposite(m, S);
                          break;
                        case 'mouseConstraint':
                          l.addConstraint(m, S.constraint);
                          break;
                      }
                    }
                    return (c.trigger(m, 'afterAdd', { object: v }), m);
                  }),
                  (l.remove = function (m, v, y) {
                    var r = [].concat(v);
                    c.trigger(m, 'beforeRemove', { object: v });
                    for (var S = 0; S < r.length; S++) {
                      var p = r[S];
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
                    return (c.trigger(m, 'afterRemove', { object: v }), m);
                  }),
                  (l.addComposite = function (m, v) {
                    return (m.composites.push(v), (v.parent = m), l.setModified(m, !0, !0, !1), m);
                  }),
                  (l.removeComposite = function (m, v, y) {
                    var r = d.indexOf(m.composites, v);
                    if (r !== -1) {
                      var S = l.allBodies(v);
                      l.removeCompositeAt(m, r);
                      for (var p = 0; p < S.length; p++) S[p].sleepCounter = 0;
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
                      for (var S = 0; S < m.composites.length; S++)
                        l.removeBody(m.composites[S], v, !0);
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
                      for (var S = 0; S < m.composites.length; S++)
                        l.removeConstraint(m.composites[S], v, !0);
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
                        ? (m.bodies = m.bodies.filter(function (S) {
                            return S.isStatic;
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
                    var r, S;
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
                      ? ((S = r.filter(function (p) {
                          return p.id.toString() === v.toString();
                        })),
                        S.length === 0 ? null : S[0])
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
                    for (var r = y ? l.allBodies(m) : m.bodies, S = 0; S < r.length; S++)
                      g.translate(r[S], v);
                    return m;
                  }),
                  (l.rotate = function (m, v, y, r) {
                    for (
                      var S = Math.cos(v),
                        p = Math.sin(v),
                        C = r ? l.allBodies(m) : m.bodies,
                        R = 0;
                      R < C.length;
                      R++
                    ) {
                      var z = C[R],
                        B = z.position.x - y.x,
                        Y = z.position.y - y.y;
                      (g.setPosition(z, { x: y.x + (B * S - Y * p), y: y.y + (B * p + Y * S) }),
                        g.rotate(z, v));
                    }
                    return m;
                  }),
                  (l.scale = function (m, v, y, r, S) {
                    for (var p = S ? l.allBodies(m) : m.bodies, C = 0; C < p.length; C++) {
                      var R = p[C],
                        z = R.position.x - r.x,
                        B = R.position.y - r.y;
                      (g.setPosition(R, { x: r.x + z * v, y: r.y + B * y }), g.scale(R, v, y));
                    }
                    return m;
                  }),
                  (l.bounds = function (m) {
                    for (var v = l.allBodies(m), y = [], r = 0; r < v.length; r += 1) {
                      var S = v[r];
                      y.push(S.bounds.min, S.bounds.max);
                    }
                    return f.create(y);
                  }));
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(4),
                d = o(5),
                f = o(0);
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
                      var S = g[r],
                        p = c.getSpeed(S),
                        C = c.getAngularSpeed(S),
                        R = p * p + C * C;
                      if (S.force.x !== 0 || S.force.y !== 0) {
                        l.set(S, !1);
                        continue;
                      }
                      var z = Math.min(S.motion, R),
                        B = Math.max(S.motion, R);
                      ((S.motion = l._minBias * z + (1 - l._minBias) * B),
                        S.sleepThreshold > 0 && S.motion < y
                          ? ((S.sleepCounter += 1),
                            S.sleepCounter >= S.sleepThreshold / v && l.set(S, !0))
                          : S.sleepCounter > 0 && (S.sleepCounter -= 1));
                    }
                  }),
                  (l.afterCollisions = function (g) {
                    for (var m = l._motionSleepThreshold, v = 0; v < g.length; v++) {
                      var y = g[v];
                      if (y.isActive) {
                        var r = y.collision,
                          S = r.bodyA.parent,
                          p = r.bodyB.parent;
                        if (
                          !((S.isSleeping && p.isSleeping) || S.isStatic || p.isStatic) &&
                          (S.isSleeping || p.isSleeping)
                        ) {
                          var C = S.isSleeping && !S.isStatic ? S : p,
                            R = C === S ? p : S;
                          !C.isStatic && R.motion > m && l.set(C, !1);
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
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(3),
                d = o(9);
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
                    var S = r && r.table[d.id(v, y)],
                      p;
                    (S
                      ? (p = S.collision)
                      : ((p = l.create(v, y)),
                        (p.collided = !0),
                        (p.bodyA = v.id < y.id ? v : y),
                        (p.bodyB = v.id < y.id ? y : v),
                        (p.parentA = p.bodyA.parent),
                        (p.parentB = p.bodyB.parent)),
                      (v = p.bodyA),
                      (y = p.bodyB));
                    var C;
                    g.overlap < m.overlap ? (C = g) : (C = m);
                    var R = p.normal,
                      z = p.tangent,
                      B = p.penetration,
                      Y = p.supports,
                      T = C.overlap,
                      D = C.axis,
                      O = D.x,
                      _ = D.y,
                      H = y.position.x - v.position.x,
                      L = y.position.y - v.position.y;
                    (O * H + _ * L >= 0 && ((O = -O), (_ = -_)),
                      (R.x = O),
                      (R.y = _),
                      (z.x = -_),
                      (z.y = O),
                      (B.x = O * T),
                      (B.y = _ * T),
                      (p.depth = T));
                    var j = l._findSupports(v, y, R, 1),
                      V = 0;
                    if (
                      (c.contains(v.vertices, j[0]) && (Y[V++] = j[0]),
                      c.contains(v.vertices, j[1]) && (Y[V++] = j[1]),
                      V < 2)
                    ) {
                      var I = l._findSupports(y, v, R, -1);
                      (c.contains(y.vertices, I[0]) && (Y[V++] = I[0]),
                        V < 2 && c.contains(y.vertices, I[1]) && (Y[V++] = I[1]));
                    }
                    return (V === 0 && (Y[V++] = j[0]), (p.supportCount = V), p);
                  }),
                  (l._overlapAxes = function (v, y, r, S) {
                    var p = y.length,
                      C = r.length,
                      R = y[0].x,
                      z = y[0].y,
                      B = r[0].x,
                      Y = r[0].y,
                      T = S.length,
                      D = Number.MAX_VALUE,
                      O = 0,
                      _,
                      H,
                      L,
                      j,
                      V,
                      I;
                    for (V = 0; V < T; V++) {
                      var ae = S[V],
                        le = ae.x,
                        A = ae.y,
                        U = R * le + z * A,
                        q = B * le + Y * A,
                        $ = U,
                        ie = q;
                      for (I = 1; I < p; I += 1)
                        ((j = y[I].x * le + y[I].y * A), j > $ ? ($ = j) : j < U && (U = j));
                      for (I = 1; I < C; I += 1)
                        ((j = r[I].x * le + r[I].y * A), j > ie ? (ie = j) : j < q && (q = j));
                      if (
                        ((H = $ - q),
                        (L = ie - U),
                        (_ = H < L ? H : L),
                        _ < D && ((D = _), (O = V), _ <= 0))
                      )
                        break;
                    }
                    ((v.axis = S[O]), (v.overlap = D));
                  }),
                  (l._findSupports = function (v, y, r, S) {
                    var p = y.vertices,
                      C = p.length,
                      R = v.position.x,
                      z = v.position.y,
                      B = r.x * S,
                      Y = r.y * S,
                      T = p[0],
                      D = T,
                      O = B * (R - D.x) + Y * (z - D.y),
                      _,
                      H,
                      L;
                    for (L = 1; L < C; L += 1)
                      ((D = p[L]),
                        (H = B * (R - D.x) + Y * (z - D.y)),
                        H < O && ((O = H), (T = D)));
                    return (
                      (_ = p[(C + T.index - 1) % C]),
                      (O = B * (R - _.x) + Y * (z - _.y)),
                      (D = p[(T.index + 1) % C]),
                      B * (R - D.x) + Y * (z - D.y) < O
                        ? ((f[0] = T), (f[1] = D), f)
                        : ((f[0] = T), (f[1] = _), f)
                    );
                  }));
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(16);
              (function () {
                ((l.create = function (d, f) {
                  var g = d.bodyA,
                    m = d.bodyB,
                    v = {
                      id: l.id(g, m),
                      bodyA: g,
                      bodyB: m,
                      collision: d,
                      contacts: [c.create(), c.create()],
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
                      S = f.parentB;
                    ((d.isActive = !0),
                      (d.timeUpdated = g),
                      (d.collision = f),
                      (d.separation = f.depth),
                      (d.inverseMass = r.inverseMass + S.inverseMass),
                      (d.friction = r.friction < S.friction ? r.friction : S.friction),
                      (d.frictionStatic =
                        r.frictionStatic > S.frictionStatic ? r.frictionStatic : S.frictionStatic),
                      (d.restitution =
                        r.restitution > S.restitution ? r.restitution : S.restitution),
                      (d.slop = r.slop > S.slop ? r.slop : S.slop),
                      (d.contactCount = v),
                      (f.pair = d));
                    var p = m[0],
                      C = y[0],
                      R = m[1],
                      z = y[1];
                    ((z.vertex === p || C.vertex === R) && ((y[1] = C), (y[0] = C = z), (z = y[1])),
                      (C.vertex = p),
                      (z.vertex = R));
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
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(3),
                d = o(2),
                f = o(7),
                g = o(1),
                m = o(11),
                v = o(0);
              (function () {
                ((l._warming = 0.4),
                  (l._torqueDampen = 1),
                  (l._minLength = 1e-6),
                  (l.create = function (y) {
                    var r = y;
                    (r.bodyA && !r.pointA && (r.pointA = { x: 0, y: 0 }),
                      r.bodyB && !r.pointB && (r.pointB = { x: 0, y: 0 }));
                    var S = r.bodyA ? d.add(r.bodyA.position, r.pointA) : r.pointA,
                      p = r.bodyB ? d.add(r.bodyB.position, r.pointB) : r.pointB,
                      C = d.magnitude(d.sub(S, p));
                    ((r.length = typeof r.length < 'u' ? r.length : C),
                      (r.id = r.id || v.nextId()),
                      (r.label = r.label || 'Constraint'),
                      (r.type = 'constraint'),
                      (r.stiffness = r.stiffness || (r.length > 0 ? 1 : 0.7)),
                      (r.damping = r.damping || 0),
                      (r.angularStiffness = r.angularStiffness || 0),
                      (r.angleA = r.bodyA ? r.bodyA.angle : r.angleA),
                      (r.angleB = r.bodyB ? r.bodyB.angle : r.angleB),
                      (r.plugin = {}));
                    var R = {
                      visible: !0,
                      lineWidth: 2,
                      strokeStyle: '#ffffff',
                      type: 'line',
                      anchors: !0,
                    };
                    return (
                      r.length === 0 && r.stiffness > 0.1
                        ? ((R.type = 'pin'), (R.anchors = !1))
                        : r.stiffness < 0.9 && (R.type = 'spring'),
                      (r.render = v.extend(R, r.render)),
                      r
                    );
                  }),
                  (l.preSolveAll = function (y) {
                    for (var r = 0; r < y.length; r += 1) {
                      var S = y[r],
                        p = S.constraintImpulse;
                      S.isStatic ||
                        (p.x === 0 && p.y === 0 && p.angle === 0) ||
                        ((S.position.x += p.x), (S.position.y += p.y), (S.angle += p.angle));
                    }
                  }),
                  (l.solveAll = function (y, r) {
                    for (var S = v.clamp(r / v._baseDelta, 0, 1), p = 0; p < y.length; p += 1) {
                      var C = y[p],
                        R = !C.bodyA || (C.bodyA && C.bodyA.isStatic),
                        z = !C.bodyB || (C.bodyB && C.bodyB.isStatic);
                      (R || z) && l.solve(y[p], S);
                    }
                    for (p = 0; p < y.length; p += 1)
                      ((C = y[p]),
                        (R = !C.bodyA || (C.bodyA && C.bodyA.isStatic)),
                        (z = !C.bodyB || (C.bodyB && C.bodyB.isStatic)),
                        !R && !z && l.solve(y[p], S));
                  }),
                  (l.solve = function (y, r) {
                    var S = y.bodyA,
                      p = y.bodyB,
                      C = y.pointA,
                      R = y.pointB;
                    if (!(!S && !p)) {
                      (S &&
                        !S.isStatic &&
                        (d.rotate(C, S.angle - y.angleA, C), (y.angleA = S.angle)),
                        p &&
                          !p.isStatic &&
                          (d.rotate(R, p.angle - y.angleB, R), (y.angleB = p.angle)));
                      var z = C,
                        B = R;
                      if (
                        (S && (z = d.add(S.position, C)),
                        p && (B = d.add(p.position, R)),
                        !(!z || !B))
                      ) {
                        var Y = d.sub(z, B),
                          T = d.magnitude(Y);
                        T < l._minLength && (T = l._minLength);
                        var D = (T - y.length) / T,
                          O = y.stiffness >= 1 || y.length === 0,
                          _ = O ? y.stiffness * r : y.stiffness * r * r,
                          H = y.damping * r,
                          L = d.mult(Y, D * _),
                          j = (S ? S.inverseMass : 0) + (p ? p.inverseMass : 0),
                          V = (S ? S.inverseInertia : 0) + (p ? p.inverseInertia : 0),
                          I = j + V,
                          ae,
                          le,
                          A,
                          U,
                          q;
                        if (H > 0) {
                          var $ = d.create();
                          ((A = d.div(Y, T)),
                            (q = d.sub(
                              (p && d.sub(p.position, p.positionPrev)) || $,
                              (S && d.sub(S.position, S.positionPrev)) || $
                            )),
                            (U = d.dot(A, q)));
                        }
                        (S &&
                          !S.isStatic &&
                          ((le = S.inverseMass / j),
                          (S.constraintImpulse.x -= L.x * le),
                          (S.constraintImpulse.y -= L.y * le),
                          (S.position.x -= L.x * le),
                          (S.position.y -= L.y * le),
                          H > 0 &&
                            ((S.positionPrev.x -= H * A.x * U * le),
                            (S.positionPrev.y -= H * A.y * U * le)),
                          (ae =
                            (d.cross(C, L) / I) *
                            l._torqueDampen *
                            S.inverseInertia *
                            (1 - y.angularStiffness)),
                          (S.constraintImpulse.angle -= ae),
                          (S.angle -= ae)),
                          p &&
                            !p.isStatic &&
                            ((le = p.inverseMass / j),
                            (p.constraintImpulse.x += L.x * le),
                            (p.constraintImpulse.y += L.y * le),
                            (p.position.x += L.x * le),
                            (p.position.y += L.y * le),
                            H > 0 &&
                              ((p.positionPrev.x += H * A.x * U * le),
                              (p.positionPrev.y += H * A.y * U * le)),
                            (ae =
                              (d.cross(R, L) / I) *
                              l._torqueDampen *
                              p.inverseInertia *
                              (1 - y.angularStiffness)),
                            (p.constraintImpulse.angle += ae),
                            (p.angle += ae)));
                      }
                    }
                  }),
                  (l.postSolveAll = function (y) {
                    for (var r = 0; r < y.length; r++) {
                      var S = y[r],
                        p = S.constraintImpulse;
                      if (!(S.isStatic || (p.x === 0 && p.y === 0 && p.angle === 0))) {
                        f.set(S, !1);
                        for (var C = 0; C < S.parts.length; C++) {
                          var R = S.parts[C];
                          (c.translate(R.vertices, p),
                            C > 0 && ((R.position.x += p.x), (R.position.y += p.y)),
                            p.angle !== 0 &&
                              (c.rotate(R.vertices, p.angle, S.position),
                              m.rotate(R.axes, p.angle),
                              C > 0 && d.rotateAbout(R.position, p.angle, S.position, R.position)),
                            g.update(R.bounds, R.vertices, S.velocity));
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
                      S = (y.bodyA ? y.bodyA.position.y : 0) + (y.pointA ? y.pointA.y : 0),
                      p = (y.bodyB ? y.bodyB.position.x : 0) + (y.pointB ? y.pointB.x : 0),
                      C = (y.bodyB ? y.bodyB.position.y : 0) + (y.pointB ? y.pointB.y : 0),
                      R = r - p,
                      z = S - C;
                    return Math.sqrt(R * R + z * z);
                  }));
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(2),
                d = o(0);
              (function () {
                ((l.fromVertices = function (f) {
                  for (var g = {}, m = 0; m < f.length; m++) {
                    var v = (m + 1) % f.length,
                      y = c.normalise({ x: f[v].y - f[m].y, y: f[m].x - f[v].x }),
                      r = y.y === 0 ? 1 / 0 : y.x / y.y;
                    ((r = r.toFixed(3).toString()), (g[r] = y));
                  }
                  return d.values(g);
                }),
                  (l.rotate = function (f, g) {
                    if (g !== 0)
                      for (var m = Math.cos(g), v = Math.sin(g), y = 0; y < f.length; y++) {
                        var r = f[y],
                          S;
                        ((S = r.x * m - r.y * v), (r.y = r.x * v + r.y * m), (r.x = S));
                      }
                  }));
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(3),
                d = o(0),
                f = o(4),
                g = o(1),
                m = o(2);
              (function () {
                ((l.rectangle = function (v, y, r, S, p) {
                  p = p || {};
                  var C = {
                    label: 'Rectangle Body',
                    position: { x: v, y },
                    vertices: c.fromPath('L 0 0 L ' + r + ' 0 L ' + r + ' ' + S + ' L 0 ' + S),
                  };
                  if (p.chamfer) {
                    var R = p.chamfer;
                    ((C.vertices = c.chamfer(
                      C.vertices,
                      R.radius,
                      R.quality,
                      R.qualityMin,
                      R.qualityMax
                    )),
                      delete p.chamfer);
                  }
                  return f.create(d.extend({}, C, p));
                }),
                  (l.trapezoid = function (v, y, r, S, p, C) {
                    ((C = C || {}),
                      p >= 1 && d.warn('Bodies.trapezoid: slope parameter must be < 1.'),
                      (p *= 0.5));
                    var R = (1 - p * 2) * r,
                      z = r * p,
                      B = z + R,
                      Y = B + z,
                      T;
                    p < 0.5
                      ? (T = 'L 0 0 L ' + z + ' ' + -S + ' L ' + B + ' ' + -S + ' L ' + Y + ' 0')
                      : (T = 'L 0 0 L ' + B + ' ' + -S + ' L ' + Y + ' 0');
                    var D = {
                      label: 'Trapezoid Body',
                      position: { x: v, y },
                      vertices: c.fromPath(T),
                    };
                    if (C.chamfer) {
                      var O = C.chamfer;
                      ((D.vertices = c.chamfer(
                        D.vertices,
                        O.radius,
                        O.quality,
                        O.qualityMin,
                        O.qualityMax
                      )),
                        delete C.chamfer);
                    }
                    return f.create(d.extend({}, D, C));
                  }),
                  (l.circle = function (v, y, r, S, p) {
                    S = S || {};
                    var C = { label: 'Circle Body', circleRadius: r };
                    p = p || 25;
                    var R = Math.ceil(Math.max(10, Math.min(p, r)));
                    return (R % 2 === 1 && (R += 1), l.polygon(v, y, R, r, d.extend({}, C, S)));
                  }),
                  (l.polygon = function (v, y, r, S, p) {
                    if (((p = p || {}), r < 3)) return l.circle(v, y, S, p);
                    for (var C = (2 * Math.PI) / r, R = '', z = C * 0.5, B = 0; B < r; B += 1) {
                      var Y = z + B * C,
                        T = Math.cos(Y) * S,
                        D = Math.sin(Y) * S;
                      R += 'L ' + T.toFixed(3) + ' ' + D.toFixed(3) + ' ';
                    }
                    var O = {
                      label: 'Polygon Body',
                      position: { x: v, y },
                      vertices: c.fromPath(R),
                    };
                    if (p.chamfer) {
                      var _ = p.chamfer;
                      ((O.vertices = c.chamfer(
                        O.vertices,
                        _.radius,
                        _.quality,
                        _.qualityMin,
                        _.qualityMax
                      )),
                        delete p.chamfer);
                    }
                    return f.create(d.extend({}, O, p));
                  }),
                  (l.fromVertices = function (v, y, r, S, p, C, R, z) {
                    var B = d.getDecomp(),
                      Y,
                      T,
                      D,
                      O,
                      _,
                      H,
                      L,
                      j,
                      V,
                      I,
                      ae;
                    for (
                      Y = !!(B && B.quickDecomp),
                        S = S || {},
                        D = [],
                        p = typeof p < 'u' ? p : !1,
                        C = typeof C < 'u' ? C : 0.01,
                        R = typeof R < 'u' ? R : 10,
                        z = typeof z < 'u' ? z : 0.01,
                        d.isArray(r[0]) || (r = [r]),
                        I = 0;
                      I < r.length;
                      I += 1
                    )
                      if (
                        ((H = r[I]),
                        (O = c.isConvex(H)),
                        (_ = !O),
                        _ &&
                          !Y &&
                          d.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                          ),
                        O || !Y)
                      )
                        (O ? (H = c.clockwiseSort(H)) : (H = c.hull(H)),
                          D.push({ position: { x: v, y }, vertices: H }));
                      else {
                        var le = H.map(function (se) {
                          return [se.x, se.y];
                        });
                        (B.makeCCW(le),
                          C !== !1 && B.removeCollinearPoints(le, C),
                          z !== !1 && B.removeDuplicatePoints && B.removeDuplicatePoints(le, z));
                        var A = B.quickDecomp(le);
                        for (L = 0; L < A.length; L++) {
                          var U = A[L],
                            q = U.map(function (se) {
                              return { x: se[0], y: se[1] };
                            });
                          (R > 0 && c.area(q) < R) ||
                            D.push({ position: c.centre(q), vertices: q });
                        }
                      }
                    for (L = 0; L < D.length; L++) D[L] = f.create(d.extend(D[L], S));
                    if (p) {
                      var $ = 5;
                      for (L = 0; L < D.length; L++) {
                        var ie = D[L];
                        for (j = L + 1; j < D.length; j++) {
                          var N = D[j];
                          if (g.overlaps(ie.bounds, N.bounds)) {
                            var Z = ie.vertices,
                              P = N.vertices;
                            for (V = 0; V < ie.vertices.length; V++)
                              for (ae = 0; ae < N.vertices.length; ae++) {
                                var ue = m.magnitudeSquared(m.sub(Z[(V + 1) % Z.length], P[ae])),
                                  ce = m.magnitudeSquared(m.sub(Z[V], P[(ae + 1) % P.length]));
                                ue < $ &&
                                  ce < $ &&
                                  ((Z[V].isInternal = !0), (P[ae].isInternal = !0));
                              }
                          }
                        }
                      }
                    }
                    return D.length > 1
                      ? ((T = f.create(d.extend({ parts: D.slice(0) }, S))),
                        f.setPosition(T, { x: v, y }),
                        T)
                      : D[0];
                  }));
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(0),
                d = o(8);
              (function () {
                ((l.create = function (f) {
                  var g = { bodies: [], collisions: [], pairs: null };
                  return c.extend(g, f);
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
                      S = f.collisions,
                      p = 0,
                      C,
                      R;
                    for (m.sort(l._compareBoundsX), C = 0; C < v; C++) {
                      var z = m[C],
                        B = z.bounds,
                        Y = z.bounds.max.x,
                        T = z.bounds.max.y,
                        D = z.bounds.min.y,
                        O = z.isStatic || z.isSleeping,
                        _ = z.parts.length,
                        H = _ === 1;
                      for (R = C + 1; R < v; R++) {
                        var L = m[R],
                          j = L.bounds;
                        if (j.min.x > Y) break;
                        if (
                          !(T < j.min.y || D > j.max.y) &&
                          !(O && (L.isStatic || L.isSleeping)) &&
                          y(z.collisionFilter, L.collisionFilter)
                        ) {
                          var V = L.parts.length;
                          if (H && V === 1) {
                            var I = r(z, L, g);
                            I && (S[p++] = I);
                          } else
                            for (var ae = _ > 1 ? 1 : 0, le = V > 1 ? 1 : 0, A = ae; A < _; A++)
                              for (var U = z.parts[A], B = U.bounds, q = le; q < V; q++) {
                                var $ = L.parts[q],
                                  j = $.bounds;
                                if (
                                  !(
                                    B.min.x > j.max.x ||
                                    B.max.x < j.min.x ||
                                    B.max.y < j.min.y ||
                                    B.min.y > j.max.y
                                  )
                                ) {
                                  var I = r(U, $, g);
                                  I && (S[p++] = I);
                                }
                              }
                        }
                      }
                    }
                    return (S.length !== p && (S.length = p), S);
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
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(0);
              (function () {
                ((l.create = function (d) {
                  var f = {};
                  return (
                    d ||
                      c.log(
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
                      S = d.changedTouches,
                      p,
                      C;
                    return (
                      S
                        ? ((p = S[0].pageX - m.left - y), (C = S[0].pageY - m.top - r))
                        : ((p = d.pageX - m.left - y), (C = d.pageY - m.top - r)),
                      {
                        x: p / ((f.clientWidth / (f.width || f.clientWidth)) * g),
                        y: C / ((f.clientHeight / (f.height || f.clientHeight)) * g),
                      }
                    );
                  }));
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(0);
              (function () {
                ((l._registry = {}),
                  (l.register = function (d) {
                    if (
                      (l.isPlugin(d) ||
                        c.warn(
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
                        ? (c.warn(
                            'Plugin.register:',
                            l.toString(f),
                            'was upgraded to',
                            l.toString(d)
                          ),
                          (l._registry[d.name] = d))
                        : g < m
                          ? c.warn(
                              'Plugin.register:',
                              l.toString(f),
                              'can not be downgraded to',
                              l.toString(d)
                            )
                          : d !== f &&
                            c.warn(
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
                      c.warn(
                        'Plugin.use:',
                        l.toString(d),
                        'does not specify any dependencies to install.'
                      );
                      return;
                    }
                    for (
                      var g = l.dependencies(d), m = c.topologicalSort(g), v = [], y = 0;
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
                            (c.warn(
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
                            : (c.warn(
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
                    v.length > 0 && c.info(v.join('  '));
                  }),
                  (l.dependencies = function (d, f) {
                    var g = l.dependencyParse(d),
                      m = g.name;
                    if (((f = f || {}), !(m in f))) {
                      ((d = l.resolve(d) || d),
                        (f[m] = c.map(d.uses || [], function (y) {
                          l.isPlugin(y) && l.register(y);
                          var r = l.dependencyParse(y),
                            S = l.resolve(y);
                          return (
                            S && !l.versionSatisfies(S.version, r.range)
                              ? (c.warn(
                                  'Plugin.dependencies:',
                                  l.toString(S),
                                  'does not satisfy',
                                  l.toString(r),
                                  'used by',
                                  l.toString(g) + '.'
                                ),
                                (S._warned = !0),
                                (d._warned = !0))
                              : S ||
                                (c.warn(
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
                    if (c.isString(d)) {
                      var f = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                      return (
                        f.test(d) ||
                          c.warn('Plugin.dependencyParse:', d, 'is not a valid dependency string.'),
                        { name: d.split('@')[0], range: d.split('@')[1] || '*' }
                      );
                    }
                    return { name: d.name, range: d.range || d.version };
                  }),
                  (l.versionParse = function (d) {
                    var f = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                    f.test(d) ||
                      c.warn('Plugin.versionParse:', d, 'is not a valid version or range.');
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
            function (b, h) {
              var o = {};
              ((b.exports = o),
                (function () {
                  o.create = function (l) {
                    return { vertex: l, normalImpulse: 0, tangentImpulse: 0 };
                  };
                })());
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(7),
                d = o(18),
                f = o(13),
                g = o(19),
                m = o(5),
                v = o(6),
                y = o(10),
                r = o(0),
                S = o(4);
              (function () {
                ((l._deltaMax = 1e3 / 60),
                  (l.create = function (p) {
                    p = p || {};
                    var C = {
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
                      R = r.extend(C, p);
                    return (
                      (R.world = p.world || v.create({ label: 'World' })),
                      (R.pairs = p.pairs || g.create()),
                      (R.detector = p.detector || f.create()),
                      (R.detector.pairs = R.pairs),
                      (R.grid = { buckets: [] }),
                      (R.world.gravity = R.gravity),
                      (R.broadphase = R.grid),
                      (R.metrics = {}),
                      R
                    );
                  }),
                  (l.update = function (p, C) {
                    var R = r.now(),
                      z = p.world,
                      B = p.detector,
                      Y = p.pairs,
                      T = p.timing,
                      D = T.timestamp,
                      O;
                    (C > l._deltaMax &&
                      r.warnOnce(
                        'Matter.Engine.update: delta argument is recommended to be less than or equal to',
                        l._deltaMax.toFixed(3),
                        'ms.'
                      ),
                      (C = typeof C < 'u' ? C : r._baseDelta),
                      (C *= T.timeScale),
                      (T.timestamp += C),
                      (T.lastDelta = C));
                    var _ = { timestamp: T.timestamp, delta: C };
                    m.trigger(p, 'beforeUpdate', _);
                    var H = v.allBodies(z),
                      L = v.allConstraints(z);
                    for (
                      z.isModified && (f.setBodies(B, H), v.setModified(z, !1, !1, !0)),
                        p.enableSleeping && c.update(H, C),
                        l._bodiesApplyGravity(H, p.gravity),
                        C > 0 && l._bodiesUpdate(H, C),
                        m.trigger(p, 'beforeSolve', _),
                        y.preSolveAll(H),
                        O = 0;
                      O < p.constraintIterations;
                      O++
                    )
                      y.solveAll(L, C);
                    y.postSolveAll(H);
                    var j = f.collisions(B);
                    (g.update(Y, j, D),
                      p.enableSleeping && c.afterCollisions(Y.list),
                      Y.collisionStart.length > 0 &&
                        m.trigger(p, 'collisionStart', {
                          pairs: Y.collisionStart,
                          timestamp: T.timestamp,
                          delta: C,
                        }));
                    var V = r.clamp(20 / p.positionIterations, 0, 1);
                    for (d.preSolvePosition(Y.list), O = 0; O < p.positionIterations; O++)
                      d.solvePosition(Y.list, C, V);
                    for (
                      d.postSolvePosition(H), y.preSolveAll(H), O = 0;
                      O < p.constraintIterations;
                      O++
                    )
                      y.solveAll(L, C);
                    for (
                      y.postSolveAll(H), d.preSolveVelocity(Y.list), O = 0;
                      O < p.velocityIterations;
                      O++
                    )
                      d.solveVelocity(Y.list, C);
                    return (
                      l._bodiesUpdateVelocities(H),
                      Y.collisionActive.length > 0 &&
                        m.trigger(p, 'collisionActive', {
                          pairs: Y.collisionActive,
                          timestamp: T.timestamp,
                          delta: C,
                        }),
                      Y.collisionEnd.length > 0 &&
                        m.trigger(p, 'collisionEnd', {
                          pairs: Y.collisionEnd,
                          timestamp: T.timestamp,
                          delta: C,
                        }),
                      l._bodiesClearForces(H),
                      m.trigger(p, 'afterUpdate', _),
                      (p.timing.lastElapsed = r.now() - R),
                      p
                    );
                  }),
                  (l.merge = function (p, C) {
                    if ((r.extend(p, C), C.world)) {
                      ((p.world = C.world), l.clear(p));
                      for (var R = v.allBodies(p.world), z = 0; z < R.length; z++) {
                        var B = R[z];
                        (c.set(B, !1), (B.id = r.nextId()));
                      }
                    }
                  }),
                  (l.clear = function (p) {
                    (g.clear(p.pairs), f.clear(p.detector));
                  }),
                  (l._bodiesClearForces = function (p) {
                    for (var C = p.length, R = 0; R < C; R++) {
                      var z = p[R];
                      ((z.force.x = 0), (z.force.y = 0), (z.torque = 0));
                    }
                  }),
                  (l._bodiesApplyGravity = function (p, C) {
                    var R = typeof C.scale < 'u' ? C.scale : 0.001,
                      z = p.length;
                    if (!((C.x === 0 && C.y === 0) || R === 0))
                      for (var B = 0; B < z; B++) {
                        var Y = p[B];
                        Y.isStatic ||
                          Y.isSleeping ||
                          ((Y.force.y += Y.mass * C.y * R), (Y.force.x += Y.mass * C.x * R));
                      }
                  }),
                  (l._bodiesUpdate = function (p, C) {
                    for (var R = p.length, z = 0; z < R; z++) {
                      var B = p[z];
                      B.isStatic || B.isSleeping || S.update(B, C);
                    }
                  }),
                  (l._bodiesUpdateVelocities = function (p) {
                    for (var C = p.length, R = 0; R < C; R++) S.updateVelocities(p[R]);
                  }));
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(3),
                d = o(0),
                f = o(1);
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
                      S,
                      p,
                      C,
                      R,
                      z,
                      B,
                      Y = l._positionDampen * (v || 1),
                      T = d.clamp(m / d._baseDelta, 0, 1),
                      D = g.length;
                    for (y = 0; y < D; y++)
                      ((r = g[y]),
                        !(!r.isActive || r.isSensor) &&
                          ((S = r.collision),
                          (p = S.parentA),
                          (C = S.parentB),
                          (R = S.normal),
                          (r.separation =
                            S.depth +
                            R.x * (C.positionImpulse.x - p.positionImpulse.x) +
                            R.y * (C.positionImpulse.y - p.positionImpulse.y))));
                    for (y = 0; y < D; y++)
                      ((r = g[y]),
                        !(!r.isActive || r.isSensor) &&
                          ((S = r.collision),
                          (p = S.parentA),
                          (C = S.parentB),
                          (R = S.normal),
                          (B = r.separation - r.slop * T),
                          (p.isStatic || C.isStatic) && (B *= 2),
                          p.isStatic ||
                            p.isSleeping ||
                            ((z = Y / p.totalContacts),
                            (p.positionImpulse.x += R.x * B * z),
                            (p.positionImpulse.y += R.y * B * z)),
                          C.isStatic ||
                            C.isSleeping ||
                            ((z = Y / C.totalContacts),
                            (C.positionImpulse.x -= R.x * B * z),
                            (C.positionImpulse.y -= R.y * B * z))));
                  }),
                  (l.postSolvePosition = function (g) {
                    for (
                      var m = l._positionWarming,
                        v = g.length,
                        y = c.translate,
                        r = f.update,
                        S = 0;
                      S < v;
                      S++
                    ) {
                      var p = g[S],
                        C = p.positionImpulse,
                        R = C.x,
                        z = C.y,
                        B = p.velocity;
                      if (((p.totalContacts = 0), R !== 0 || z !== 0)) {
                        for (var Y = 0; Y < p.parts.length; Y++) {
                          var T = p.parts[Y];
                          (y(T.vertices, C),
                            r(T.bounds, T.vertices, B),
                            (T.position.x += R),
                            (T.position.y += z));
                        }
                        ((p.positionPrev.x += R),
                          (p.positionPrev.y += z),
                          R * B.x + z * B.y < 0
                            ? ((C.x = 0), (C.y = 0))
                            : ((C.x *= m), (C.y *= m)));
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
                        var S = r.contacts,
                          p = r.contactCount,
                          C = r.collision,
                          R = C.parentA,
                          z = C.parentB,
                          B = C.normal,
                          Y = C.tangent;
                        for (y = 0; y < p; y++) {
                          var T = S[y],
                            D = T.vertex,
                            O = T.normalImpulse,
                            _ = T.tangentImpulse;
                          if (O !== 0 || _ !== 0) {
                            var H = B.x * O + Y.x * _,
                              L = B.y * O + Y.y * _;
                            (R.isStatic ||
                              R.isSleeping ||
                              ((R.positionPrev.x += H * R.inverseMass),
                              (R.positionPrev.y += L * R.inverseMass),
                              (R.anglePrev +=
                                R.inverseInertia *
                                ((D.x - R.position.x) * L - (D.y - R.position.y) * H))),
                              z.isStatic ||
                                z.isSleeping ||
                                ((z.positionPrev.x -= H * z.inverseMass),
                                (z.positionPrev.y -= L * z.inverseMass),
                                (z.anglePrev -=
                                  z.inverseInertia *
                                  ((D.x - z.position.x) * L - (D.y - z.position.y) * H))));
                          }
                        }
                      }
                    }
                  }),
                  (l.solveVelocity = function (g, m) {
                    var v = m / d._baseDelta,
                      y = v * v,
                      r = y * v,
                      S = -l._restingThresh * v,
                      p = l._restingThreshTangent,
                      C = l._frictionNormalMultiplier * v,
                      R = l._frictionMaxStatic,
                      z = g.length,
                      B,
                      Y,
                      T,
                      D;
                    for (T = 0; T < z; T++) {
                      var O = g[T];
                      if (!(!O.isActive || O.isSensor)) {
                        var _ = O.collision,
                          H = _.parentA,
                          L = _.parentB,
                          j = _.normal.x,
                          V = _.normal.y,
                          I = _.tangent.x,
                          ae = _.tangent.y,
                          le = O.inverseMass,
                          A = O.friction * O.frictionStatic * C,
                          U = O.contacts,
                          q = O.contactCount,
                          $ = 1 / q,
                          ie = H.position.x - H.positionPrev.x,
                          N = H.position.y - H.positionPrev.y,
                          Z = H.angle - H.anglePrev,
                          P = L.position.x - L.positionPrev.x,
                          ue = L.position.y - L.positionPrev.y,
                          ce = L.angle - L.anglePrev;
                        for (D = 0; D < q; D++) {
                          var se = U[D],
                            ve = se.vertex,
                            be = ve.x - H.position.x,
                            Ue = ve.y - H.position.y,
                            ke = ve.x - L.position.x,
                            qe = ve.y - L.position.y,
                            Be = ie - Ue * Z,
                            rt = N + be * Z,
                            He = P - qe * ce,
                            oe = ue + ke * ce,
                            _t = Be - He,
                            pe = rt - oe,
                            je = j * _t + V * pe,
                            xt = I * _t + ae * pe,
                            dn = O.separation + je,
                            En = Math.min(dn, 1);
                          En = dn < 0 ? 0 : En;
                          var ua = En * A;
                          xt < -ua || xt > ua
                            ? ((Y = xt > 0 ? xt : -xt),
                              (B = O.friction * (xt > 0 ? 1 : -1) * r),
                              B < -Y ? (B = -Y) : B > Y && (B = Y))
                            : ((B = xt), (Y = R));
                          var zt = be * V - Ue * j,
                            pt = ke * V - qe * j,
                            mn = $ / (le + H.inverseInertia * zt * zt + L.inverseInertia * pt * pt),
                            bt = (1 + O.restitution) * je * mn;
                          if (((B *= mn), je < S)) se.normalImpulse = 0;
                          else {
                            var Pe = se.normalImpulse;
                            ((se.normalImpulse += bt),
                              se.normalImpulse > 0 && (se.normalImpulse = 0),
                              (bt = se.normalImpulse - Pe));
                          }
                          if (xt < -p || xt > p) se.tangentImpulse = 0;
                          else {
                            var ra = se.tangentImpulse;
                            ((se.tangentImpulse += B),
                              se.tangentImpulse < -Y && (se.tangentImpulse = -Y),
                              se.tangentImpulse > Y && (se.tangentImpulse = Y),
                              (B = se.tangentImpulse - ra));
                          }
                          var It = j * bt + I * B,
                            Cn = V * bt + ae * B;
                          (H.isStatic ||
                            H.isSleeping ||
                            ((H.positionPrev.x += It * H.inverseMass),
                            (H.positionPrev.y += Cn * H.inverseMass),
                            (H.anglePrev += (be * Cn - Ue * It) * H.inverseInertia)),
                            L.isStatic ||
                              L.isSleeping ||
                              ((L.positionPrev.x -= It * L.inverseMass),
                              (L.positionPrev.y -= Cn * L.inverseMass),
                              (L.anglePrev -= (ke * Cn - qe * It) * L.inverseInertia)));
                        }
                      }
                    }
                  }));
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(9),
                d = o(0);
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
                    var v = c.update,
                      y = c.create,
                      r = c.setActive,
                      S = f.table,
                      p = f.list,
                      C = p.length,
                      R = C,
                      z = f.collisionStart,
                      B = f.collisionEnd,
                      Y = f.collisionActive,
                      T = g.length,
                      D = 0,
                      O = 0,
                      _ = 0,
                      H,
                      L,
                      j;
                    for (j = 0; j < T; j++)
                      ((H = g[j]),
                        (L = H.pair),
                        L
                          ? (L.isActive && (Y[_++] = L), v(L, H, m))
                          : ((L = y(H, m)), (S[L.id] = L), (z[D++] = L), (p[R++] = L)));
                    for (R = 0, C = p.length, j = 0; j < C; j++)
                      ((L = p[j]),
                        L.timeUpdated >= m
                          ? (p[R++] = L)
                          : (r(L, !1, m),
                            L.collision.bodyA.sleepCounter > 0 && L.collision.bodyB.sleepCounter > 0
                              ? (p[R++] = L)
                              : ((B[O++] = L), delete S[L.id])));
                    (p.length !== R && (p.length = R),
                      z.length !== D && (z.length = D),
                      B.length !== O && (B.length = O),
                      Y.length !== _ && (Y.length = _));
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
            function (b, h, o) {
              var l = (b.exports = o(21));
              ((l.Axes = o(11)),
                (l.Bodies = o(12)),
                (l.Body = o(4)),
                (l.Bounds = o(1)),
                (l.Collision = o(8)),
                (l.Common = o(0)),
                (l.Composite = o(6)),
                (l.Composites = o(22)),
                (l.Constraint = o(10)),
                (l.Contact = o(16)),
                (l.Detector = o(13)),
                (l.Engine = o(17)),
                (l.Events = o(5)),
                (l.Grid = o(23)),
                (l.Mouse = o(14)),
                (l.MouseConstraint = o(24)),
                (l.Pair = o(9)),
                (l.Pairs = o(19)),
                (l.Plugin = o(15)),
                (l.Query = o(25)),
                (l.Render = o(26)),
                (l.Resolver = o(18)),
                (l.Runner = o(27)),
                (l.SAT = o(28)),
                (l.Sleeping = o(7)),
                (l.Svg = o(29)),
                (l.Vector = o(2)),
                (l.Vertices = o(3)),
                (l.World = o(30)),
                (l.Engine.run = l.Runner.run),
                l.Common.deprecated(
                  l.Engine,
                  'run',
                  'Engine.run ➤ use Matter.Runner.run(engine) instead'
                ));
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(15),
                d = o(0);
              (function () {
                ((l.name = 'matter-js'),
                  (l.version = '0.20.0'),
                  (l.uses = []),
                  (l.used = []),
                  (l.use = function () {
                    c.use(l, Array.prototype.slice.call(arguments));
                  }),
                  (l.before = function (f, g) {
                    return ((f = f.replace(/^Matter./, '')), d.chainPathBefore(l, f, g));
                  }),
                  (l.after = function (f, g) {
                    return ((f = f.replace(/^Matter./, '')), d.chainPathAfter(l, f, g));
                  }));
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(6),
                d = o(10),
                f = o(0),
                g = o(4),
                m = o(12),
                v = f.deprecated;
              (function () {
                ((l.stack = function (y, r, S, p, C, R, z) {
                  for (
                    var B = c.create({ label: 'Stack' }), Y = y, T = r, D, O = 0, _ = 0;
                    _ < p;
                    _++
                  ) {
                    for (var H = 0, L = 0; L < S; L++) {
                      var j = z(Y, T, L, _, D, O);
                      if (j) {
                        var V = j.bounds.max.y - j.bounds.min.y,
                          I = j.bounds.max.x - j.bounds.min.x;
                        (V > H && (H = V),
                          g.translate(j, { x: I * 0.5, y: V * 0.5 }),
                          (Y = j.bounds.max.x + C),
                          c.addBody(B, j),
                          (D = j),
                          (O += 1));
                      } else Y += C;
                    }
                    ((T += H + R), (Y = y));
                  }
                  return B;
                }),
                  (l.chain = function (y, r, S, p, C, R) {
                    for (var z = y.bodies, B = 1; B < z.length; B++) {
                      var Y = z[B - 1],
                        T = z[B],
                        D = Y.bounds.max.y - Y.bounds.min.y,
                        O = Y.bounds.max.x - Y.bounds.min.x,
                        _ = T.bounds.max.y - T.bounds.min.y,
                        H = T.bounds.max.x - T.bounds.min.x,
                        L = {
                          bodyA: Y,
                          pointA: { x: O * r, y: D * S },
                          bodyB: T,
                          pointB: { x: H * p, y: _ * C },
                        },
                        j = f.extend(L, R);
                      c.addConstraint(y, d.create(j));
                    }
                    return ((y.label += ' Chain'), y);
                  }),
                  (l.mesh = function (y, r, S, p, C) {
                    var R = y.bodies,
                      z,
                      B,
                      Y,
                      T,
                      D;
                    for (z = 0; z < S; z++) {
                      for (B = 1; B < r; B++)
                        ((Y = R[B - 1 + z * r]),
                          (T = R[B + z * r]),
                          c.addConstraint(y, d.create(f.extend({ bodyA: Y, bodyB: T }, C))));
                      if (z > 0)
                        for (B = 0; B < r; B++)
                          ((Y = R[B + (z - 1) * r]),
                            (T = R[B + z * r]),
                            c.addConstraint(y, d.create(f.extend({ bodyA: Y, bodyB: T }, C))),
                            p &&
                              B > 0 &&
                              ((D = R[B - 1 + (z - 1) * r]),
                              c.addConstraint(y, d.create(f.extend({ bodyA: D, bodyB: T }, C)))),
                            p &&
                              B < r - 1 &&
                              ((D = R[B + 1 + (z - 1) * r]),
                              c.addConstraint(y, d.create(f.extend({ bodyA: D, bodyB: T }, C)))));
                    }
                    return ((y.label += ' Mesh'), y);
                  }),
                  (l.pyramid = function (y, r, S, p, C, R, z) {
                    return l.stack(y, r, S, p, C, R, function (B, Y, T, D, O, _) {
                      var H = Math.min(p, Math.ceil(S / 2)),
                        L = O ? O.bounds.max.x - O.bounds.min.x : 0;
                      if (!(D > H)) {
                        D = H - D;
                        var j = D,
                          V = S - 1 - D;
                        if (!(T < j || T > V)) {
                          _ === 1 && g.translate(O, { x: (T + (S % 2 === 1 ? 1 : -1)) * L, y: 0 });
                          var I = O ? T * L : 0;
                          return z(y + I + T * C, Y, T, D, O, _);
                        }
                      }
                    });
                  }),
                  (l.newtonsCradle = function (y, r, S, p, C) {
                    for (var R = c.create({ label: 'Newtons Cradle' }), z = 0; z < S; z++) {
                      var B = 1.9,
                        Y = m.circle(y + z * (p * B), r + C, p, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        T = d.create({ pointA: { x: y + z * (p * B), y: r }, bodyB: Y });
                      (c.addBody(R, Y), c.addConstraint(R, T));
                    }
                    return R;
                  }),
                  v(
                    l,
                    'newtonsCradle',
                    'Composites.newtonsCradle ➤ moved to newtonsCradle example'
                  ),
                  (l.car = function (y, r, S, p, C) {
                    var R = g.nextGroup(!0),
                      z = 20,
                      B = -S * 0.5 + z,
                      Y = S * 0.5 - z,
                      T = 0,
                      D = c.create({ label: 'Car' }),
                      O = m.rectangle(y, r, S, p, {
                        collisionFilter: { group: R },
                        chamfer: { radius: p * 0.5 },
                        density: 2e-4,
                      }),
                      _ = m.circle(y + B, r + T, C, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      H = m.circle(y + Y, r + T, C, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      L = d.create({
                        bodyB: O,
                        pointB: { x: B, y: T },
                        bodyA: _,
                        stiffness: 1,
                        length: 0,
                      }),
                      j = d.create({
                        bodyB: O,
                        pointB: { x: Y, y: T },
                        bodyA: H,
                        stiffness: 1,
                        length: 0,
                      });
                    return (
                      c.addBody(D, O),
                      c.addBody(D, _),
                      c.addBody(D, H),
                      c.addConstraint(D, L),
                      c.addConstraint(D, j),
                      D
                    );
                  }),
                  v(l, 'car', 'Composites.car ➤ moved to car example'),
                  (l.softBody = function (y, r, S, p, C, R, z, B, Y, T) {
                    ((Y = f.extend({ inertia: 1 / 0 }, Y)),
                      (T = f.extend({ stiffness: 0.2, render: { type: 'line', anchors: !1 } }, T)));
                    var D = l.stack(y, r, S, p, C, R, function (O, _) {
                      return m.circle(O, _, B, Y);
                    });
                    return (l.mesh(D, S, p, z, T), (D.label = 'Soft Body'), D);
                  }),
                  v(l, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples'));
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(9),
                d = o(0),
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
                      S,
                      p,
                      C = v.world,
                      R = g.buckets,
                      z,
                      B,
                      Y = !1;
                    for (r = 0; r < m.length; r++) {
                      var T = m[r];
                      if (
                        !(T.isSleeping && !y) &&
                        !(
                          C.bounds &&
                          (T.bounds.max.x < C.bounds.min.x ||
                            T.bounds.min.x > C.bounds.max.x ||
                            T.bounds.max.y < C.bounds.min.y ||
                            T.bounds.min.y > C.bounds.max.y)
                        )
                      ) {
                        var D = l._getRegion(g, T);
                        if (!T.region || D.id !== T.region.id || y) {
                          (!T.region || y) && (T.region = D);
                          var O = l._regionUnion(D, T.region);
                          for (S = O.startCol; S <= O.endCol; S++)
                            for (p = O.startRow; p <= O.endRow; p++) {
                              ((B = l._getBucketId(S, p)), (z = R[B]));
                              var _ =
                                  S >= D.startCol &&
                                  S <= D.endCol &&
                                  p >= D.startRow &&
                                  p <= D.endRow,
                                H =
                                  S >= T.region.startCol &&
                                  S <= T.region.endCol &&
                                  p >= T.region.startRow &&
                                  p <= T.region.endRow;
                              (!_ && H && H && z && l._bucketRemoveBody(g, z, T),
                                (T.region === D || (_ && !H) || y) &&
                                  (z || (z = l._createBucket(R, B)), l._bucketAddBody(g, z, T)));
                            }
                          ((T.region = D), (Y = !0));
                        }
                      }
                    }
                    Y && (g.pairsList = l._createActivePairsList(g));
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
                      S = Math.max(g.endRow, m.endRow);
                    return l._createRegion(v, y, r, S);
                  }),
                  (l._getRegion = function (g, m) {
                    var v = m.bounds,
                      y = Math.floor(v.min.x / g.bucketWidth),
                      r = Math.floor(v.max.x / g.bucketWidth),
                      S = Math.floor(v.min.y / g.bucketHeight),
                      p = Math.floor(v.max.y / g.bucketHeight);
                    return l._createRegion(y, r, S, p);
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
                      r = c.id,
                      S = m.length,
                      p;
                    for (p = 0; p < S; p++) {
                      var C = m[p];
                      if (!(v.id === C.id || (v.isStatic && C.isStatic))) {
                        var R = r(v, C),
                          z = y[R];
                        z ? (z[2] += 1) : (y[R] = [v, C, 1]);
                      }
                    }
                    m.push(v);
                  }),
                  (l._bucketRemoveBody = function (g, m, v) {
                    var y = g.pairs,
                      r = c.id,
                      S;
                    m.splice(d.indexOf(m, v), 1);
                    var p = m.length;
                    for (S = 0; S < p; S++) {
                      var C = y[r(v, m[S])];
                      C && (C[2] -= 1);
                    }
                  }),
                  (l._createActivePairsList = function (g) {
                    var m,
                      v = g.pairs,
                      y = d.keys(v),
                      r = y.length,
                      S = [],
                      p;
                    for (p = 0; p < r; p++) ((m = v[y[p]]), m[2] > 0 ? S.push(m) : delete v[y[p]]);
                    return S;
                  }));
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(3),
                d = o(7),
                f = o(14),
                g = o(5),
                m = o(13),
                v = o(10),
                y = o(6),
                r = o(0),
                S = o(1);
              (function () {
                ((l.create = function (p, C) {
                  var R = (p ? p.mouse : null) || (C ? C.mouse : null);
                  R ||
                    (p && p.render && p.render.canvas
                      ? (R = f.create(p.render.canvas))
                      : C && C.element
                        ? (R = f.create(C.element))
                        : ((R = f.create()),
                          r.warn(
                            'MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected'
                          )));
                  var z = v.create({
                      label: 'Mouse Constraint',
                      pointA: R.position,
                      pointB: { x: 0, y: 0 },
                      length: 0.01,
                      stiffness: 0.1,
                      angularStiffness: 1,
                      render: { strokeStyle: '#90EE90', lineWidth: 3 },
                    }),
                    B = {
                      type: 'mouseConstraint',
                      mouse: R,
                      element: null,
                      body: null,
                      constraint: z,
                      collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                    },
                    Y = r.extend(B, C);
                  return (
                    g.on(p, 'beforeUpdate', function () {
                      var T = y.allBodies(p.world);
                      (l.update(Y, T), l._triggerEvents(Y));
                    }),
                    Y
                  );
                }),
                  (l.update = function (p, C) {
                    var R = p.mouse,
                      z = p.constraint,
                      B = p.body;
                    if (R.button === 0) {
                      if (z.bodyB) (d.set(z.bodyB, !1), (z.pointA = R.position));
                      else
                        for (var Y = 0; Y < C.length; Y++)
                          if (
                            ((B = C[Y]),
                            S.contains(B.bounds, R.position) &&
                              m.canCollide(B.collisionFilter, p.collisionFilter))
                          )
                            for (var T = B.parts.length > 1 ? 1 : 0; T < B.parts.length; T++) {
                              var D = B.parts[T];
                              if (c.contains(D.vertices, R.position)) {
                                ((z.pointA = R.position),
                                  (z.bodyB = p.body = B),
                                  (z.pointB = {
                                    x: R.position.x - B.position.x,
                                    y: R.position.y - B.position.y,
                                  }),
                                  (z.angleB = B.angle),
                                  d.set(B, !1),
                                  g.trigger(p, 'startdrag', { mouse: R, body: B }));
                                break;
                              }
                            }
                    } else
                      ((z.bodyB = p.body = null),
                        (z.pointB = null),
                        B && g.trigger(p, 'enddrag', { mouse: R, body: B }));
                  }),
                  (l._triggerEvents = function (p) {
                    var C = p.mouse,
                      R = C.sourceEvents;
                    (R.mousemove && g.trigger(p, 'mousemove', { mouse: C }),
                      R.mousedown && g.trigger(p, 'mousedown', { mouse: C }),
                      R.mouseup && g.trigger(p, 'mouseup', { mouse: C }),
                      f.clearSourceEvents(C));
                  }));
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(2),
                d = o(8),
                f = o(1),
                g = o(12),
                m = o(3);
              (function () {
                ((l.collides = function (v, y) {
                  for (
                    var r = [], S = y.length, p = v.bounds, C = d.collides, R = f.overlaps, z = 0;
                    z < S;
                    z++
                  ) {
                    var B = y[z],
                      Y = B.parts.length,
                      T = Y === 1 ? 0 : 1;
                    if (R(B.bounds, p))
                      for (var D = T; D < Y; D++) {
                        var O = B.parts[D];
                        if (R(O.bounds, p)) {
                          var _ = C(O, v);
                          if (_) {
                            r.push(_);
                            break;
                          }
                        }
                      }
                  }
                  return r;
                }),
                  (l.ray = function (v, y, r, S) {
                    S = S || 1e-100;
                    for (
                      var p = c.angle(y, r),
                        C = c.magnitude(c.sub(y, r)),
                        R = (r.x + y.x) * 0.5,
                        z = (r.y + y.y) * 0.5,
                        B = g.rectangle(R, z, C, S, { angle: p }),
                        Y = l.collides(B, v),
                        T = 0;
                      T < Y.length;
                      T += 1
                    ) {
                      var D = Y[T];
                      D.body = D.bodyB = D.bodyA;
                    }
                    return Y;
                  }),
                  (l.region = function (v, y, r) {
                    for (var S = [], p = 0; p < v.length; p++) {
                      var C = v[p],
                        R = f.overlaps(C.bounds, y);
                      ((R && !r) || (!R && r)) && S.push(C);
                    }
                    return S;
                  }),
                  (l.point = function (v, y) {
                    for (var r = [], S = 0; S < v.length; S++) {
                      var p = v[S];
                      if (f.contains(p.bounds, y))
                        for (var C = p.parts.length === 1 ? 0 : 1; C < p.parts.length; C++) {
                          var R = p.parts[C];
                          if (f.contains(R.bounds, y) && m.contains(R.vertices, y)) {
                            r.push(p);
                            break;
                          }
                        }
                    }
                    return r;
                  }));
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(4),
                d = o(0),
                f = o(6),
                g = o(1),
                m = o(5),
                v = o(2),
                y = o(14);
              (function () {
                var r, S;
                (typeof window < 'u' &&
                  ((r =
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (T) {
                      window.setTimeout(function () {
                        T(d.now());
                      }, 1e3 / 60);
                    }),
                  (S =
                    window.cancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    window.webkitCancelAnimationFrame ||
                    window.msCancelAnimationFrame)),
                  (l._goodFps = 30),
                  (l._goodDelta = 1e3 / 60),
                  (l.create = function (T) {
                    var D = {
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
                      O = d.extend(D, T);
                    return (
                      O.canvas &&
                        ((O.canvas.width = O.options.width || O.canvas.width),
                        (O.canvas.height = O.options.height || O.canvas.height)),
                      (O.mouse = T.mouse),
                      (O.engine = T.engine),
                      (O.canvas = O.canvas || R(O.options.width, O.options.height)),
                      (O.context = O.canvas.getContext('2d')),
                      (O.textures = {}),
                      (O.bounds = O.bounds || {
                        min: { x: 0, y: 0 },
                        max: { x: O.canvas.width, y: O.canvas.height },
                      }),
                      (O.controller = l),
                      (O.options.showBroadphase = !1),
                      O.options.pixelRatio !== 1 && l.setPixelRatio(O, O.options.pixelRatio),
                      d.isElement(O.element) && O.element.appendChild(O.canvas),
                      O
                    );
                  }),
                  (l.run = function (T) {
                    (function D(O) {
                      ((T.frameRequestId = r(D)),
                        p(T, O),
                        l.world(T, O),
                        T.context.setTransform(
                          T.options.pixelRatio,
                          0,
                          0,
                          T.options.pixelRatio,
                          0,
                          0
                        ),
                        (T.options.showStats || T.options.showDebug) && l.stats(T, T.context, O),
                        (T.options.showPerformance || T.options.showDebug) &&
                          l.performance(T, T.context, O),
                        T.context.setTransform(1, 0, 0, 1, 0, 0));
                    })();
                  }),
                  (l.stop = function (T) {
                    S(T.frameRequestId);
                  }),
                  (l.setPixelRatio = function (T, D) {
                    var O = T.options,
                      _ = T.canvas;
                    (D === 'auto' && (D = z(_)),
                      (O.pixelRatio = D),
                      _.setAttribute('data-pixel-ratio', D),
                      (_.width = O.width * D),
                      (_.height = O.height * D),
                      (_.style.width = O.width + 'px'),
                      (_.style.height = O.height + 'px'));
                  }),
                  (l.setSize = function (T, D, O) {
                    ((T.options.width = D),
                      (T.options.height = O),
                      (T.bounds.max.x = T.bounds.min.x + D),
                      (T.bounds.max.y = T.bounds.min.y + O),
                      T.options.pixelRatio !== 1
                        ? l.setPixelRatio(T, T.options.pixelRatio)
                        : ((T.canvas.width = D), (T.canvas.height = O)));
                  }),
                  (l.lookAt = function (T, D, O, _) {
                    ((_ = typeof _ < 'u' ? _ : !0),
                      (D = d.isArray(D) ? D : [D]),
                      (O = O || { x: 0, y: 0 }));
                    for (
                      var H = { min: { x: 1 / 0, y: 1 / 0 }, max: { x: -1 / 0, y: -1 / 0 } }, L = 0;
                      L < D.length;
                      L += 1
                    ) {
                      var j = D[L],
                        V = j.bounds ? j.bounds.min : j.min || j.position || j,
                        I = j.bounds ? j.bounds.max : j.max || j.position || j;
                      V &&
                        I &&
                        (V.x < H.min.x && (H.min.x = V.x),
                        I.x > H.max.x && (H.max.x = I.x),
                        V.y < H.min.y && (H.min.y = V.y),
                        I.y > H.max.y && (H.max.y = I.y));
                    }
                    var ae = H.max.x - H.min.x + 2 * O.x,
                      le = H.max.y - H.min.y + 2 * O.y,
                      A = T.canvas.height,
                      U = T.canvas.width,
                      q = U / A,
                      $ = ae / le,
                      ie = 1,
                      N = 1;
                    ($ > q ? (N = $ / q) : (ie = q / $),
                      (T.options.hasBounds = !0),
                      (T.bounds.min.x = H.min.x),
                      (T.bounds.max.x = H.min.x + ae * ie),
                      (T.bounds.min.y = H.min.y),
                      (T.bounds.max.y = H.min.y + le * N),
                      _ &&
                        ((T.bounds.min.x += ae * 0.5 - ae * ie * 0.5),
                        (T.bounds.max.x += ae * 0.5 - ae * ie * 0.5),
                        (T.bounds.min.y += le * 0.5 - le * N * 0.5),
                        (T.bounds.max.y += le * 0.5 - le * N * 0.5)),
                      (T.bounds.min.x -= O.x),
                      (T.bounds.max.x -= O.x),
                      (T.bounds.min.y -= O.y),
                      (T.bounds.max.y -= O.y),
                      T.mouse &&
                        (y.setScale(T.mouse, {
                          x: (T.bounds.max.x - T.bounds.min.x) / T.canvas.width,
                          y: (T.bounds.max.y - T.bounds.min.y) / T.canvas.height,
                        }),
                        y.setOffset(T.mouse, T.bounds.min)));
                  }),
                  (l.startViewTransform = function (T) {
                    var D = T.bounds.max.x - T.bounds.min.x,
                      O = T.bounds.max.y - T.bounds.min.y,
                      _ = D / T.options.width,
                      H = O / T.options.height;
                    (T.context.setTransform(
                      T.options.pixelRatio / _,
                      0,
                      0,
                      T.options.pixelRatio / H,
                      0,
                      0
                    ),
                      T.context.translate(-T.bounds.min.x, -T.bounds.min.y));
                  }),
                  (l.endViewTransform = function (T) {
                    T.context.setTransform(T.options.pixelRatio, 0, 0, T.options.pixelRatio, 0, 0);
                  }),
                  (l.world = function (T, D) {
                    var O = d.now(),
                      _ = T.engine,
                      H = _.world,
                      L = T.canvas,
                      j = T.context,
                      V = T.options,
                      I = T.timing,
                      ae = f.allBodies(H),
                      le = f.allConstraints(H),
                      A = V.wireframes ? V.wireframeBackground : V.background,
                      U = [],
                      q = [],
                      $,
                      ie = { timestamp: _.timing.timestamp };
                    if (
                      (m.trigger(T, 'beforeRender', ie),
                      T.currentBackground !== A && Y(T, A),
                      (j.globalCompositeOperation = 'source-in'),
                      (j.fillStyle = 'transparent'),
                      j.fillRect(0, 0, L.width, L.height),
                      (j.globalCompositeOperation = 'source-over'),
                      V.hasBounds)
                    ) {
                      for ($ = 0; $ < ae.length; $++) {
                        var N = ae[$];
                        g.overlaps(N.bounds, T.bounds) && U.push(N);
                      }
                      for ($ = 0; $ < le.length; $++) {
                        var Z = le[$],
                          P = Z.bodyA,
                          ue = Z.bodyB,
                          ce = Z.pointA,
                          se = Z.pointB;
                        (P && (ce = v.add(P.position, Z.pointA)),
                          ue && (se = v.add(ue.position, Z.pointB)),
                          !(!ce || !se) &&
                            (g.contains(T.bounds, ce) || g.contains(T.bounds, se)) &&
                            q.push(Z));
                      }
                      (l.startViewTransform(T),
                        T.mouse &&
                          (y.setScale(T.mouse, {
                            x: (T.bounds.max.x - T.bounds.min.x) / T.options.width,
                            y: (T.bounds.max.y - T.bounds.min.y) / T.options.height,
                          }),
                          y.setOffset(T.mouse, T.bounds.min)));
                    } else
                      ((q = le),
                        (U = ae),
                        T.options.pixelRatio !== 1 &&
                          T.context.setTransform(
                            T.options.pixelRatio,
                            0,
                            0,
                            T.options.pixelRatio,
                            0,
                            0
                          ));
                    (!V.wireframes || (_.enableSleeping && V.showSleeping)
                      ? l.bodies(T, U, j)
                      : (V.showConvexHulls && l.bodyConvexHulls(T, U, j),
                        l.bodyWireframes(T, U, j)),
                      V.showBounds && l.bodyBounds(T, U, j),
                      (V.showAxes || V.showAngleIndicator) && l.bodyAxes(T, U, j),
                      V.showPositions && l.bodyPositions(T, U, j),
                      V.showVelocity && l.bodyVelocity(T, U, j),
                      V.showIds && l.bodyIds(T, U, j),
                      V.showSeparations && l.separations(T, _.pairs.list, j),
                      V.showCollisions && l.collisions(T, _.pairs.list, j),
                      V.showVertexNumbers && l.vertexNumbers(T, U, j),
                      V.showMousePosition && l.mousePosition(T, T.mouse, j),
                      l.constraints(q, j),
                      V.hasBounds && l.endViewTransform(T),
                      m.trigger(T, 'afterRender', ie),
                      (I.lastElapsed = d.now() - O));
                  }),
                  (l.stats = function (T, D, O) {
                    for (
                      var _ = T.engine,
                        H = _.world,
                        L = f.allBodies(H),
                        j = 0,
                        V = 55,
                        I = 44,
                        ae = 0,
                        le = 0,
                        A = 0;
                      A < L.length;
                      A += 1
                    )
                      j += L[A].parts.length;
                    var U = {
                      Part: j,
                      Body: L.length,
                      Cons: f.allConstraints(H).length,
                      Comp: f.allComposites(H).length,
                      Pair: _.pairs.list.length,
                    };
                    ((D.fillStyle = '#0e0f19'),
                      D.fillRect(ae, le, V * 5.5, I),
                      (D.font = '12px Arial'),
                      (D.textBaseline = 'top'),
                      (D.textAlign = 'right'));
                    for (var q in U) {
                      var $ = U[q];
                      ((D.fillStyle = '#aaa'),
                        D.fillText(q, ae + V, le + 8),
                        (D.fillStyle = '#eee'),
                        D.fillText($, ae + V, le + 26),
                        (ae += V));
                    }
                  }),
                  (l.performance = function (T, D) {
                    var O = T.engine,
                      _ = T.timing,
                      H = _.deltaHistory,
                      L = _.elapsedHistory,
                      j = _.timestampElapsedHistory,
                      V = _.engineDeltaHistory,
                      I = _.engineUpdatesHistory,
                      ae = _.engineElapsedHistory,
                      le = O.timing.lastUpdatesPerFrame,
                      A = O.timing.lastDelta,
                      U = C(H),
                      q = C(L),
                      $ = C(V),
                      ie = C(I),
                      N = C(ae),
                      Z = C(j),
                      P = Z / U || 0,
                      ue = Math.round(U / A),
                      ce = 1e3 / U || 0,
                      se = 4,
                      ve = 12,
                      be = 60,
                      Ue = 34,
                      ke = 10,
                      qe = 69;
                    ((D.fillStyle = '#0e0f19'),
                      D.fillRect(0, 50, ve * 5 + be * 6 + 22, Ue),
                      l.status(
                        D,
                        ke,
                        qe,
                        be,
                        se,
                        H.length,
                        Math.round(ce) + ' fps',
                        ce / l._goodFps,
                        function (Be) {
                          return H[Be] / U - 1;
                        }
                      ),
                      l.status(
                        D,
                        ke + ve + be,
                        qe,
                        be,
                        se,
                        V.length,
                        A.toFixed(2) + ' dt',
                        l._goodDelta / A,
                        function (Be) {
                          return V[Be] / $ - 1;
                        }
                      ),
                      l.status(
                        D,
                        ke + (ve + be) * 2,
                        qe,
                        be,
                        se,
                        I.length,
                        le + ' upf',
                        Math.pow(d.clamp(ie / ue || 1, 0, 1), 4),
                        function (Be) {
                          return I[Be] / ie - 1;
                        }
                      ),
                      l.status(
                        D,
                        ke + (ve + be) * 3,
                        qe,
                        be,
                        se,
                        ae.length,
                        N.toFixed(2) + ' ut',
                        1 - (le * N) / l._goodFps,
                        function (Be) {
                          return ae[Be] / N - 1;
                        }
                      ),
                      l.status(
                        D,
                        ke + (ve + be) * 4,
                        qe,
                        be,
                        se,
                        L.length,
                        q.toFixed(2) + ' rt',
                        1 - q / l._goodFps,
                        function (Be) {
                          return L[Be] / q - 1;
                        }
                      ),
                      l.status(
                        D,
                        ke + (ve + be) * 5,
                        qe,
                        be,
                        se,
                        j.length,
                        P.toFixed(2) + ' x',
                        P * P * P,
                        function (Be) {
                          return (j[Be] / H[Be] / P || 0) - 1;
                        }
                      ));
                  }),
                  (l.status = function (T, D, O, _, H, L, j, V, I) {
                    ((T.strokeStyle = '#888'),
                      (T.fillStyle = '#444'),
                      (T.lineWidth = 1),
                      T.fillRect(D, O + 7, _, 1),
                      T.beginPath(),
                      T.moveTo(D, O + 7 - H * d.clamp(0.4 * I(0), -2, 2)));
                    for (var ae = 0; ae < _; ae += 1)
                      T.lineTo(D + ae, O + 7 - (ae < L ? H * d.clamp(0.4 * I(ae), -2, 2) : 0));
                    (T.stroke(),
                      (T.fillStyle = 'hsl(' + d.clamp(25 + 95 * V, 0, 120) + ',100%,60%)'),
                      T.fillRect(D, O - 7, 4, 4),
                      (T.font = '12px Arial'),
                      (T.textBaseline = 'middle'),
                      (T.textAlign = 'right'),
                      (T.fillStyle = '#eee'),
                      T.fillText(j, D + _, O - 5));
                  }),
                  (l.constraints = function (T, D) {
                    for (var O = D, _ = 0; _ < T.length; _++) {
                      var H = T[_];
                      if (!(!H.render.visible || !H.pointA || !H.pointB)) {
                        var L = H.bodyA,
                          j = H.bodyB,
                          V,
                          I;
                        if (
                          (L ? (V = v.add(L.position, H.pointA)) : (V = H.pointA),
                          H.render.type === 'pin')
                        )
                          (O.beginPath(), O.arc(V.x, V.y, 3, 0, 2 * Math.PI), O.closePath());
                        else {
                          if (
                            (j ? (I = v.add(j.position, H.pointB)) : (I = H.pointB),
                            O.beginPath(),
                            O.moveTo(V.x, V.y),
                            H.render.type === 'spring')
                          )
                            for (
                              var ae = v.sub(I, V),
                                le = v.perp(v.normalise(ae)),
                                A = Math.ceil(d.clamp(H.length / 5, 12, 20)),
                                U,
                                q = 1;
                              q < A;
                              q += 1
                            )
                              ((U = q % 2 === 0 ? 1 : -1),
                                O.lineTo(
                                  V.x + ae.x * (q / A) + le.x * U * 4,
                                  V.y + ae.y * (q / A) + le.y * U * 4
                                ));
                          O.lineTo(I.x, I.y);
                        }
                        (H.render.lineWidth &&
                          ((O.lineWidth = H.render.lineWidth),
                          (O.strokeStyle = H.render.strokeStyle),
                          O.stroke()),
                          H.render.anchors &&
                            ((O.fillStyle = H.render.strokeStyle),
                            O.beginPath(),
                            O.arc(V.x, V.y, 3, 0, 2 * Math.PI),
                            O.arc(I.x, I.y, 3, 0, 2 * Math.PI),
                            O.closePath(),
                            O.fill()));
                      }
                    }
                  }),
                  (l.bodies = function (T, D, O) {
                    var _ = O;
                    T.engine;
                    var H = T.options,
                      L = H.showInternalEdges || !H.wireframes,
                      j,
                      V,
                      I,
                      ae;
                    for (I = 0; I < D.length; I++)
                      if (((j = D[I]), !!j.render.visible)) {
                        for (ae = j.parts.length > 1 ? 1 : 0; ae < j.parts.length; ae++)
                          if (((V = j.parts[ae]), !!V.render.visible)) {
                            if (
                              (H.showSleeping && j.isSleeping
                                ? (_.globalAlpha = 0.5 * V.render.opacity)
                                : V.render.opacity !== 1 && (_.globalAlpha = V.render.opacity),
                              V.render.sprite && V.render.sprite.texture && !H.wireframes)
                            ) {
                              var le = V.render.sprite,
                                A = B(T, le.texture);
                              (_.translate(V.position.x, V.position.y),
                                _.rotate(V.angle),
                                _.drawImage(
                                  A,
                                  A.width * -le.xOffset * le.xScale,
                                  A.height * -le.yOffset * le.yScale,
                                  A.width * le.xScale,
                                  A.height * le.yScale
                                ),
                                _.rotate(-V.angle),
                                _.translate(-V.position.x, -V.position.y));
                            } else {
                              if (V.circleRadius)
                                (_.beginPath(),
                                  _.arc(
                                    V.position.x,
                                    V.position.y,
                                    V.circleRadius,
                                    0,
                                    2 * Math.PI
                                  ));
                              else {
                                (_.beginPath(), _.moveTo(V.vertices[0].x, V.vertices[0].y));
                                for (var U = 1; U < V.vertices.length; U++)
                                  (!V.vertices[U - 1].isInternal || L
                                    ? _.lineTo(V.vertices[U].x, V.vertices[U].y)
                                    : _.moveTo(V.vertices[U].x, V.vertices[U].y),
                                    V.vertices[U].isInternal &&
                                      !L &&
                                      _.moveTo(
                                        V.vertices[(U + 1) % V.vertices.length].x,
                                        V.vertices[(U + 1) % V.vertices.length].y
                                      ));
                                (_.lineTo(V.vertices[0].x, V.vertices[0].y), _.closePath());
                              }
                              H.wireframes
                                ? ((_.lineWidth = 1),
                                  (_.strokeStyle = T.options.wireframeStrokeStyle),
                                  _.stroke())
                                : ((_.fillStyle = V.render.fillStyle),
                                  V.render.lineWidth &&
                                    ((_.lineWidth = V.render.lineWidth),
                                    (_.strokeStyle = V.render.strokeStyle),
                                    _.stroke()),
                                  _.fill());
                            }
                            _.globalAlpha = 1;
                          }
                      }
                  }),
                  (l.bodyWireframes = function (T, D, O) {
                    var _ = O,
                      H = T.options.showInternalEdges,
                      L,
                      j,
                      V,
                      I,
                      ae;
                    for (_.beginPath(), V = 0; V < D.length; V++)
                      if (((L = D[V]), !!L.render.visible))
                        for (ae = L.parts.length > 1 ? 1 : 0; ae < L.parts.length; ae++) {
                          for (
                            j = L.parts[ae], _.moveTo(j.vertices[0].x, j.vertices[0].y), I = 1;
                            I < j.vertices.length;
                            I++
                          )
                            (!j.vertices[I - 1].isInternal || H
                              ? _.lineTo(j.vertices[I].x, j.vertices[I].y)
                              : _.moveTo(j.vertices[I].x, j.vertices[I].y),
                              j.vertices[I].isInternal &&
                                !H &&
                                _.moveTo(
                                  j.vertices[(I + 1) % j.vertices.length].x,
                                  j.vertices[(I + 1) % j.vertices.length].y
                                ));
                          _.lineTo(j.vertices[0].x, j.vertices[0].y);
                        }
                    ((_.lineWidth = 1),
                      (_.strokeStyle = T.options.wireframeStrokeStyle),
                      _.stroke());
                  }),
                  (l.bodyConvexHulls = function (T, D, O) {
                    var _ = O,
                      H,
                      L,
                      j;
                    for (_.beginPath(), L = 0; L < D.length; L++)
                      if (((H = D[L]), !(!H.render.visible || H.parts.length === 1))) {
                        for (
                          _.moveTo(H.vertices[0].x, H.vertices[0].y), j = 1;
                          j < H.vertices.length;
                          j++
                        )
                          _.lineTo(H.vertices[j].x, H.vertices[j].y);
                        _.lineTo(H.vertices[0].x, H.vertices[0].y);
                      }
                    ((_.lineWidth = 1), (_.strokeStyle = 'rgba(255,255,255,0.2)'), _.stroke());
                  }),
                  (l.vertexNumbers = function (T, D, O) {
                    var _ = O,
                      H,
                      L,
                      j;
                    for (H = 0; H < D.length; H++) {
                      var V = D[H].parts;
                      for (j = V.length > 1 ? 1 : 0; j < V.length; j++) {
                        var I = V[j];
                        for (L = 0; L < I.vertices.length; L++)
                          ((_.fillStyle = 'rgba(255,255,255,0.2)'),
                            _.fillText(
                              H + '_' + L,
                              I.position.x + (I.vertices[L].x - I.position.x) * 0.8,
                              I.position.y + (I.vertices[L].y - I.position.y) * 0.8
                            ));
                      }
                    }
                  }),
                  (l.mousePosition = function (T, D, O) {
                    var _ = O;
                    ((_.fillStyle = 'rgba(255,255,255,0.8)'),
                      _.fillText(
                        D.position.x + '  ' + D.position.y,
                        D.position.x + 5,
                        D.position.y - 5
                      ));
                  }),
                  (l.bodyBounds = function (T, D, O) {
                    var _ = O;
                    T.engine;
                    var H = T.options;
                    _.beginPath();
                    for (var L = 0; L < D.length; L++) {
                      var j = D[L];
                      if (j.render.visible)
                        for (var V = D[L].parts, I = V.length > 1 ? 1 : 0; I < V.length; I++) {
                          var ae = V[I];
                          _.rect(
                            ae.bounds.min.x,
                            ae.bounds.min.y,
                            ae.bounds.max.x - ae.bounds.min.x,
                            ae.bounds.max.y - ae.bounds.min.y
                          );
                        }
                    }
                    (H.wireframes
                      ? (_.strokeStyle = 'rgba(255,255,255,0.08)')
                      : (_.strokeStyle = 'rgba(0,0,0,0.1)'),
                      (_.lineWidth = 1),
                      _.stroke());
                  }),
                  (l.bodyAxes = function (T, D, O) {
                    var _ = O;
                    T.engine;
                    var H = T.options,
                      L,
                      j,
                      V,
                      I;
                    for (_.beginPath(), j = 0; j < D.length; j++) {
                      var ae = D[j],
                        le = ae.parts;
                      if (ae.render.visible)
                        if (H.showAxes)
                          for (V = le.length > 1 ? 1 : 0; V < le.length; V++)
                            for (L = le[V], I = 0; I < L.axes.length; I++) {
                              var A = L.axes[I];
                              (_.moveTo(L.position.x, L.position.y),
                                _.lineTo(L.position.x + A.x * 20, L.position.y + A.y * 20));
                            }
                        else
                          for (V = le.length > 1 ? 1 : 0; V < le.length; V++)
                            for (L = le[V], I = 0; I < L.axes.length; I++)
                              (_.moveTo(L.position.x, L.position.y),
                                _.lineTo(
                                  (L.vertices[0].x + L.vertices[L.vertices.length - 1].x) / 2,
                                  (L.vertices[0].y + L.vertices[L.vertices.length - 1].y) / 2
                                ));
                    }
                    (H.wireframes
                      ? ((_.strokeStyle = 'indianred'), (_.lineWidth = 1))
                      : ((_.strokeStyle = 'rgba(255, 255, 255, 0.4)'),
                        (_.globalCompositeOperation = 'overlay'),
                        (_.lineWidth = 2)),
                      _.stroke(),
                      (_.globalCompositeOperation = 'source-over'));
                  }),
                  (l.bodyPositions = function (T, D, O) {
                    var _ = O;
                    T.engine;
                    var H = T.options,
                      L,
                      j,
                      V,
                      I;
                    for (_.beginPath(), V = 0; V < D.length; V++)
                      if (((L = D[V]), !!L.render.visible))
                        for (I = 0; I < L.parts.length; I++)
                          ((j = L.parts[I]),
                            _.arc(j.position.x, j.position.y, 3, 0, 2 * Math.PI, !1),
                            _.closePath());
                    for (
                      H.wireframes
                        ? (_.fillStyle = 'indianred')
                        : (_.fillStyle = 'rgba(0,0,0,0.5)'),
                        _.fill(),
                        _.beginPath(),
                        V = 0;
                      V < D.length;
                      V++
                    )
                      ((L = D[V]),
                        L.render.visible &&
                          (_.arc(L.positionPrev.x, L.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                          _.closePath()));
                    ((_.fillStyle = 'rgba(255,165,0,0.8)'), _.fill());
                  }),
                  (l.bodyVelocity = function (T, D, O) {
                    var _ = O;
                    _.beginPath();
                    for (var H = 0; H < D.length; H++) {
                      var L = D[H];
                      if (L.render.visible) {
                        var j = c.getVelocity(L);
                        (_.moveTo(L.position.x, L.position.y),
                          _.lineTo(L.position.x + j.x, L.position.y + j.y));
                      }
                    }
                    ((_.lineWidth = 3), (_.strokeStyle = 'cornflowerblue'), _.stroke());
                  }),
                  (l.bodyIds = function (T, D, O) {
                    var _ = O,
                      H,
                      L;
                    for (H = 0; H < D.length; H++)
                      if (D[H].render.visible) {
                        var j = D[H].parts;
                        for (L = j.length > 1 ? 1 : 0; L < j.length; L++) {
                          var V = j[L];
                          ((_.font = '12px Arial'),
                            (_.fillStyle = 'rgba(255,255,255,0.5)'),
                            _.fillText(V.id, V.position.x + 10, V.position.y - 10));
                        }
                      }
                  }),
                  (l.collisions = function (T, D, O) {
                    var _ = O,
                      H = T.options,
                      L,
                      j,
                      V,
                      I;
                    for (_.beginPath(), V = 0; V < D.length; V++)
                      if (((L = D[V]), !!L.isActive))
                        for (j = L.collision, I = 0; I < L.contactCount; I++) {
                          var ae = L.contacts[I],
                            le = ae.vertex;
                          _.rect(le.x - 1.5, le.y - 1.5, 3.5, 3.5);
                        }
                    for (
                      H.wireframes
                        ? (_.fillStyle = 'rgba(255,255,255,0.7)')
                        : (_.fillStyle = 'orange'),
                        _.fill(),
                        _.beginPath(),
                        V = 0;
                      V < D.length;
                      V++
                    )
                      if (((L = D[V]), !!L.isActive && ((j = L.collision), L.contactCount > 0))) {
                        var A = L.contacts[0].vertex.x,
                          U = L.contacts[0].vertex.y;
                        (L.contactCount === 2 &&
                          ((A = (L.contacts[0].vertex.x + L.contacts[1].vertex.x) / 2),
                          (U = (L.contacts[0].vertex.y + L.contacts[1].vertex.y) / 2)),
                          j.bodyB === j.supports[0].body || j.bodyA.isStatic === !0
                            ? _.moveTo(A - j.normal.x * 8, U - j.normal.y * 8)
                            : _.moveTo(A + j.normal.x * 8, U + j.normal.y * 8),
                          _.lineTo(A, U));
                      }
                    (H.wireframes
                      ? (_.strokeStyle = 'rgba(255,165,0,0.7)')
                      : (_.strokeStyle = 'orange'),
                      (_.lineWidth = 1),
                      _.stroke());
                  }),
                  (l.separations = function (T, D, O) {
                    var _ = O,
                      H = T.options,
                      L,
                      j,
                      V,
                      I,
                      ae;
                    for (_.beginPath(), ae = 0; ae < D.length; ae++)
                      if (((L = D[ae]), !!L.isActive)) {
                        ((j = L.collision), (V = j.bodyA), (I = j.bodyB));
                        var le = 1;
                        (!I.isStatic && !V.isStatic && (le = 0.5),
                          I.isStatic && (le = 0),
                          _.moveTo(I.position.x, I.position.y),
                          _.lineTo(
                            I.position.x - j.penetration.x * le,
                            I.position.y - j.penetration.y * le
                          ),
                          (le = 1),
                          !I.isStatic && !V.isStatic && (le = 0.5),
                          V.isStatic && (le = 0),
                          _.moveTo(V.position.x, V.position.y),
                          _.lineTo(
                            V.position.x + j.penetration.x * le,
                            V.position.y + j.penetration.y * le
                          ));
                      }
                    (H.wireframes
                      ? (_.strokeStyle = 'rgba(255,165,0,0.5)')
                      : (_.strokeStyle = 'orange'),
                      _.stroke());
                  }),
                  (l.inspector = function (T, D) {
                    T.engine;
                    var O = T.selected,
                      _ = T.render,
                      H = _.options,
                      L;
                    if (H.hasBounds) {
                      var j = _.bounds.max.x - _.bounds.min.x,
                        V = _.bounds.max.y - _.bounds.min.y,
                        I = j / _.options.width,
                        ae = V / _.options.height;
                      (D.scale(1 / I, 1 / ae), D.translate(-_.bounds.min.x, -_.bounds.min.y));
                    }
                    for (var le = 0; le < O.length; le++) {
                      var A = O[le].data;
                      switch (
                        (D.translate(0.5, 0.5),
                        (D.lineWidth = 1),
                        (D.strokeStyle = 'rgba(255,165,0,0.9)'),
                        D.setLineDash([1, 2]),
                        A.type)
                      ) {
                        case 'body':
                          ((L = A.bounds),
                            D.beginPath(),
                            D.rect(
                              Math.floor(L.min.x - 3),
                              Math.floor(L.min.y - 3),
                              Math.floor(L.max.x - L.min.x + 6),
                              Math.floor(L.max.y - L.min.y + 6)
                            ),
                            D.closePath(),
                            D.stroke());
                          break;
                        case 'constraint':
                          var U = A.pointA;
                          (A.bodyA && (U = A.pointB),
                            D.beginPath(),
                            D.arc(U.x, U.y, 10, 0, 2 * Math.PI),
                            D.closePath(),
                            D.stroke());
                          break;
                      }
                      (D.setLineDash([]), D.translate(-0.5, -0.5));
                    }
                    (T.selectStart !== null &&
                      (D.translate(0.5, 0.5),
                      (D.lineWidth = 1),
                      (D.strokeStyle = 'rgba(255,165,0,0.6)'),
                      (D.fillStyle = 'rgba(255,165,0,0.1)'),
                      (L = T.selectBounds),
                      D.beginPath(),
                      D.rect(
                        Math.floor(L.min.x),
                        Math.floor(L.min.y),
                        Math.floor(L.max.x - L.min.x),
                        Math.floor(L.max.y - L.min.y)
                      ),
                      D.closePath(),
                      D.stroke(),
                      D.fill(),
                      D.translate(-0.5, -0.5)),
                      H.hasBounds && D.setTransform(1, 0, 0, 1, 0, 0));
                  }));
                var p = function (T, D) {
                    var O = T.engine,
                      _ = T.timing,
                      H = _.historySize,
                      L = O.timing.timestamp;
                    ((_.delta = D - _.lastTime || l._goodDelta),
                      (_.lastTime = D),
                      (_.timestampElapsed = L - _.lastTimestamp || 0),
                      (_.lastTimestamp = L),
                      _.deltaHistory.unshift(_.delta),
                      (_.deltaHistory.length = Math.min(_.deltaHistory.length, H)),
                      _.engineDeltaHistory.unshift(O.timing.lastDelta),
                      (_.engineDeltaHistory.length = Math.min(_.engineDeltaHistory.length, H)),
                      _.timestampElapsedHistory.unshift(_.timestampElapsed),
                      (_.timestampElapsedHistory.length = Math.min(
                        _.timestampElapsedHistory.length,
                        H
                      )),
                      _.engineUpdatesHistory.unshift(O.timing.lastUpdatesPerFrame),
                      (_.engineUpdatesHistory.length = Math.min(_.engineUpdatesHistory.length, H)),
                      _.engineElapsedHistory.unshift(O.timing.lastElapsed),
                      (_.engineElapsedHistory.length = Math.min(_.engineElapsedHistory.length, H)),
                      _.elapsedHistory.unshift(_.lastElapsed),
                      (_.elapsedHistory.length = Math.min(_.elapsedHistory.length, H)));
                  },
                  C = function (T) {
                    for (var D = 0, O = 0; O < T.length; O += 1) D += T[O];
                    return D / T.length || 0;
                  },
                  R = function (T, D) {
                    var O = document.createElement('canvas');
                    return (
                      (O.width = T),
                      (O.height = D),
                      (O.oncontextmenu = function () {
                        return !1;
                      }),
                      (O.onselectstart = function () {
                        return !1;
                      }),
                      O
                    );
                  },
                  z = function (T) {
                    var D = T.getContext('2d'),
                      O = window.devicePixelRatio || 1,
                      _ =
                        D.webkitBackingStorePixelRatio ||
                        D.mozBackingStorePixelRatio ||
                        D.msBackingStorePixelRatio ||
                        D.oBackingStorePixelRatio ||
                        D.backingStorePixelRatio ||
                        1;
                    return O / _;
                  },
                  B = function (T, D) {
                    var O = T.textures[D];
                    return O || ((O = T.textures[D] = new Image()), (O.src = D), O);
                  },
                  Y = function (T, D) {
                    var O = D;
                    (/(jpg|gif|png)$/.test(D) && (O = 'url(' + D + ')'),
                      (T.canvas.style.background = O),
                      (T.canvas.style.backgroundSize = 'contain'),
                      (T.currentBackground = D));
                  };
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(5),
                d = o(17),
                f = o(0);
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
                      S = m.delta,
                      p = 0,
                      C = y - m.timeLastTick;
                    if (
                      ((!C || !m.timeLastTick || C > Math.max(l._maxFrameDelta, m.maxFrameTime)) &&
                        (C = m.frameDelta || l._frameDeltaFallback),
                      m.frameDeltaSmoothing)
                    ) {
                      (m.frameDeltaHistory.push(C),
                        (m.frameDeltaHistory = m.frameDeltaHistory.slice(
                          -m.frameDeltaHistorySize
                        )));
                      var R = m.frameDeltaHistory.slice(0).sort(),
                        z = m.frameDeltaHistory.slice(
                          R.length * l._smoothingLowerBound,
                          R.length * l._smoothingUpperBound
                        ),
                        B = g(z);
                      C = B || C;
                    }
                    (m.frameDeltaSnapping && (C = 1e3 / Math.round(1e3 / C)),
                      (m.frameDelta = C),
                      (m.timeLastTick = y),
                      (m.timeBuffer += m.frameDelta),
                      (m.timeBuffer = f.clamp(
                        m.timeBuffer,
                        0,
                        m.frameDelta + S * l._timeBufferMargin
                      )),
                      (m.lastUpdatesDeferred = 0));
                    var Y = m.maxUpdates || Math.ceil(m.maxFrameTime / S),
                      T = { timestamp: v.timing.timestamp };
                    (c.trigger(m, 'beforeTick', T), c.trigger(m, 'tick', T));
                    for (var D = f.now(); S > 0 && m.timeBuffer >= S * l._timeBufferMargin; ) {
                      (c.trigger(m, 'beforeUpdate', T),
                        d.update(v, S),
                        c.trigger(m, 'afterUpdate', T),
                        (m.timeBuffer -= S),
                        (p += 1));
                      var O = f.now() - r,
                        _ = f.now() - D,
                        H = O + (l._elapsedNextEstimate * _) / p;
                      if (p >= Y || H > m.maxFrameTime) {
                        m.lastUpdatesDeferred = Math.round(
                          Math.max(0, m.timeBuffer / S - l._timeBufferMargin)
                        );
                        break;
                      }
                    }
                    ((v.timing.lastUpdatesPerFrame = p),
                      c.trigger(m, 'afterTick', T),
                      m.frameDeltaHistory.length >= 100 &&
                        (m.lastUpdatesDeferred && Math.round(m.frameDelta / S) > Y
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
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(8),
                d = o(0),
                f = d.deprecated;
              (function () {
                ((l.collides = function (g, m) {
                  return c.collides(g, m);
                }),
                  f(l, 'collides', 'SAT.collides ➤ replaced by Collision.collides'));
              })();
            },
            function (b, h, o) {
              var l = {};
              ((b.exports = l), o(1));
              var c = o(0);
              (function () {
                ((l.pathToVertices = function (d, f) {
                  typeof window < 'u' &&
                    !('SVGPathSeg' in window) &&
                    c.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
                  var g,
                    m,
                    v,
                    y,
                    r,
                    S,
                    p,
                    C,
                    R,
                    z,
                    B = [],
                    Y,
                    T,
                    D = 0,
                    O = 0,
                    _ = 0;
                  f = f || 15;
                  var H = function (j, V, I) {
                      var ae = I % 2 === 1 && I > 1;
                      if (!R || j != R.x || V != R.y) {
                        R && ae ? ((Y = R.x), (T = R.y)) : ((Y = 0), (T = 0));
                        var le = { x: Y + j, y: T + V };
                        ((ae || !R) && (R = le), B.push(le), (O = Y + j), (_ = T + V));
                      }
                    },
                    L = function (j) {
                      var V = j.pathSegTypeAsLetter.toUpperCase();
                      if (V !== 'Z') {
                        switch (V) {
                          case 'M':
                          case 'L':
                          case 'T':
                          case 'C':
                          case 'S':
                          case 'Q':
                            ((O = j.x), (_ = j.y));
                            break;
                          case 'H':
                            O = j.x;
                            break;
                          case 'V':
                            _ = j.y;
                            break;
                        }
                        H(O, _, j.pathSegType);
                      }
                    };
                  for (
                    l._svgPathToAbsolute(d), v = d.getTotalLength(), S = [], g = 0;
                    g < d.pathSegList.numberOfItems;
                    g += 1
                  )
                    S.push(d.pathSegList.getItem(g));
                  for (p = S.concat(); D < v; ) {
                    if (((z = d.getPathSegAtLength(D)), (r = S[z]), r != C)) {
                      for (; p.length && p[0] != r; ) L(p.shift());
                      C = r;
                    }
                    switch (r.pathSegTypeAsLetter.toUpperCase()) {
                      case 'C':
                      case 'T':
                      case 'S':
                      case 'Q':
                      case 'A':
                        ((y = d.getPointAtLength(D)), H(y.x, y.y, 0));
                        break;
                    }
                    D += f;
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
                        S = d.pathSegList,
                        p = 0,
                        C = 0,
                        R = S.numberOfItems,
                        z = 0;
                      z < R;
                      ++z
                    ) {
                      var B = S.getItem(z),
                        Y = B.pathSegTypeAsLetter;
                      if (/[MLHVCSQTA]/.test(Y)) ('x' in B && (p = B.x), 'y' in B && (C = B.y));
                      else
                        switch (
                          ('x1' in B && (m = p + B.x1),
                          'x2' in B && (y = p + B.x2),
                          'y1' in B && (v = C + B.y1),
                          'y2' in B && (r = C + B.y2),
                          'x' in B && (p += B.x),
                          'y' in B && (C += B.y),
                          Y)
                        ) {
                          case 'm':
                            S.replaceItem(d.createSVGPathSegMovetoAbs(p, C), z);
                            break;
                          case 'l':
                            S.replaceItem(d.createSVGPathSegLinetoAbs(p, C), z);
                            break;
                          case 'h':
                            S.replaceItem(d.createSVGPathSegLinetoHorizontalAbs(p), z);
                            break;
                          case 'v':
                            S.replaceItem(d.createSVGPathSegLinetoVerticalAbs(C), z);
                            break;
                          case 'c':
                            S.replaceItem(d.createSVGPathSegCurvetoCubicAbs(p, C, m, v, y, r), z);
                            break;
                          case 's':
                            S.replaceItem(d.createSVGPathSegCurvetoCubicSmoothAbs(p, C, y, r), z);
                            break;
                          case 'q':
                            S.replaceItem(d.createSVGPathSegCurvetoQuadraticAbs(p, C, m, v), z);
                            break;
                          case 't':
                            S.replaceItem(d.createSVGPathSegCurvetoQuadraticSmoothAbs(p, C), z);
                            break;
                          case 'a':
                            S.replaceItem(
                              d.createSVGPathSegArcAbs(
                                p,
                                C,
                                B.r1,
                                B.r2,
                                B.angle,
                                B.largeArcFlag,
                                B.sweepFlag
                              ),
                              z
                            );
                            break;
                          case 'z':
                          case 'Z':
                            ((p = f), (C = g));
                            break;
                        }
                      (Y == 'M' || Y == 'm') && ((f = p), (g = C));
                    }
                  }));
              })();
            },
            function (b, h, o) {
              var l = {};
              b.exports = l;
              var c = o(6);
              (o(0),
                (function () {
                  ((l.create = c.create),
                    (l.add = c.add),
                    (l.remove = c.remove),
                    (l.clear = c.clear),
                    (l.addComposite = c.addComposite),
                    (l.addBody = c.addBody),
                    (l.addConstraint = c.addConstraint));
                })());
            },
          ]);
        });
      })(cr)),
    cr.exports
  );
}
var gS = vS();
const Te = jh(gS);
var Qc, wh;
function yS() {
  if (wh) return Qc;
  ((wh = 1),
    (Qc = {
      decomp: O,
      quickDecomp: j,
      isSimple: H,
      removeCollinearPoints: V,
      removeDuplicatePoints: I,
      makeCCW: S,
    }));
  function s(A, U, q) {
    q = q || 0;
    var $ = [0, 0],
      ie,
      N,
      Z,
      P,
      ue,
      ce,
      se;
    return (
      (ie = A[1][1] - A[0][1]),
      (N = A[0][0] - A[1][0]),
      (Z = ie * A[0][0] + N * A[0][1]),
      (P = U[1][1] - U[0][1]),
      (ue = U[0][0] - U[1][0]),
      (ce = P * U[0][0] + ue * U[0][1]),
      (se = ie * ue - P * N),
      ae(se, 0, q) || (($[0] = (ue * Z - N * ce) / se), ($[1] = (ie * ce - P * Z) / se)),
      $
    );
  }
  function E(A, U, q, $) {
    var ie = U[0] - A[0],
      N = U[1] - A[1],
      Z = $[0] - q[0],
      P = $[1] - q[1];
    if (Z * N - P * ie === 0) return !1;
    var ue = (ie * (q[1] - A[1]) + N * (A[0] - q[0])) / (Z * N - P * ie),
      ce = (Z * (A[1] - q[1]) + P * (q[0] - A[0])) / (P * ie - Z * N);
    return ue >= 0 && ue <= 1 && ce >= 0 && ce <= 1;
  }
  function b(A, U, q) {
    return (U[0] - A[0]) * (q[1] - A[1]) - (q[0] - A[0]) * (U[1] - A[1]);
  }
  function h(A, U, q) {
    return b(A, U, q) > 0;
  }
  function o(A, U, q) {
    return b(A, U, q) >= 0;
  }
  function l(A, U, q) {
    return b(A, U, q) < 0;
  }
  function c(A, U, q) {
    return b(A, U, q) <= 0;
  }
  var d = [],
    f = [];
  function g(A, U, q, $) {
    if ($) {
      var ie = d,
        N = f;
      ((ie[0] = U[0] - A[0]), (ie[1] = U[1] - A[1]), (N[0] = q[0] - U[0]), (N[1] = q[1] - U[1]));
      var Z = ie[0] * N[0] + ie[1] * N[1],
        P = Math.sqrt(ie[0] * ie[0] + ie[1] * ie[1]),
        ue = Math.sqrt(N[0] * N[0] + N[1] * N[1]),
        ce = Math.acos(Z / (P * ue));
      return ce < $;
    } else return b(A, U, q) === 0;
  }
  function m(A, U) {
    var q = U[0] - A[0],
      $ = U[1] - A[1];
    return q * q + $ * $;
  }
  function v(A, U) {
    var q = A.length;
    return A[U < 0 ? (U % q) + q : U % q];
  }
  function y(A) {
    A.length = 0;
  }
  function r(A, U, q, $) {
    for (var ie = q; ie < $; ie++) A.push(U[ie]);
  }
  function S(A) {
    for (var U = 0, q = A, $ = 1; $ < A.length; ++$)
      (q[$][1] < q[U][1] || (q[$][1] === q[U][1] && q[$][0] > q[U][0])) && (U = $);
    return h(v(A, U - 1), v(A, U), v(A, U + 1)) ? !1 : (p(A), !0);
  }
  function p(A) {
    for (var U = [], q = A.length, $ = 0; $ !== q; $++) U.push(A.pop());
    for (var $ = 0; $ !== q; $++) A[$] = U[$];
  }
  function C(A, U) {
    return l(v(A, U - 1), v(A, U), v(A, U + 1));
  }
  var R = [],
    z = [];
  function B(A, U, q) {
    var $,
      ie,
      N = R,
      Z = z;
    if (o(v(A, U + 1), v(A, U), v(A, q)) && c(v(A, U - 1), v(A, U), v(A, q))) return !1;
    ie = m(v(A, U), v(A, q));
    for (var P = 0; P !== A.length; ++P)
      if (
        !((P + 1) % A.length === U || P === U) &&
        o(v(A, U), v(A, q), v(A, P + 1)) &&
        c(v(A, U), v(A, q), v(A, P)) &&
        ((N[0] = v(A, U)),
        (N[1] = v(A, q)),
        (Z[0] = v(A, P)),
        (Z[1] = v(A, P + 1)),
        ($ = s(N, Z)),
        m(v(A, U), $) < ie)
      )
        return !1;
    return !0;
  }
  function Y(A, U, q) {
    for (var $ = 0; $ !== A.length; ++$)
      if (
        !($ === U || $ === q || ($ + 1) % A.length === U || ($ + 1) % A.length === q) &&
        E(v(A, U), v(A, q), v(A, $), v(A, $ + 1))
      )
        return !1;
    return !0;
  }
  function T(A, U, q, $) {
    var ie = $ || [];
    if ((y(ie), U < q)) for (var N = U; N <= q; N++) ie.push(A[N]);
    else {
      for (var N = 0; N <= q; N++) ie.push(A[N]);
      for (var N = U; N < A.length; N++) ie.push(A[N]);
    }
    return ie;
  }
  function D(A) {
    for (var U = [], q = [], $ = [], ie = [], N = Number.MAX_VALUE, Z = 0; Z < A.length; ++Z)
      if (C(A, Z)) {
        for (var P = 0; P < A.length; ++P)
          if (B(A, Z, P)) {
            ((q = D(T(A, Z, P, ie))), ($ = D(T(A, P, Z, ie))));
            for (var ue = 0; ue < $.length; ue++) q.push($[ue]);
            q.length < N && ((U = q), (N = q.length), U.push([v(A, Z), v(A, P)]));
          }
      }
    return U;
  }
  function O(A) {
    var U = D(A);
    return U.length > 0 ? _(A, U) : [A];
  }
  function _(A, U) {
    if (U.length === 0) return [A];
    if (
      U instanceof Array &&
      U.length &&
      U[0] instanceof Array &&
      U[0].length === 2 &&
      U[0][0] instanceof Array
    ) {
      for (var q = [A], $ = 0; $ < U.length; $++)
        for (var ie = U[$], N = 0; N < q.length; N++) {
          var Z = q[N],
            P = _(Z, ie);
          if (P) {
            (q.splice(N, 1), q.push(P[0], P[1]));
            break;
          }
        }
      return q;
    } else {
      var ie = U,
        $ = A.indexOf(ie[0]),
        N = A.indexOf(ie[1]);
      return $ !== -1 && N !== -1 ? [T(A, $, N), T(A, N, $)] : !1;
    }
  }
  function H(A) {
    var U = A,
      q;
    for (q = 0; q < U.length - 1; q++)
      for (var $ = 0; $ < q - 1; $++) if (E(U[q], U[q + 1], U[$], U[$ + 1])) return !1;
    for (q = 1; q < U.length - 2; q++) if (E(U[0], U[U.length - 1], U[q], U[q + 1])) return !1;
    return !0;
  }
  function L(A, U, q, $, ie) {
    ie = ie || 0;
    var N = U[1] - A[1],
      Z = A[0] - U[0],
      P = N * A[0] + Z * A[1],
      ue = $[1] - q[1],
      ce = q[0] - $[0],
      se = ue * q[0] + ce * q[1],
      ve = N * ce - ue * Z;
    return ae(ve, 0, ie) ? [0, 0] : [(ce * P - Z * se) / ve, (N * se - ue * P) / ve];
  }
  function j(A, U, q, $, ie, N, Z) {
    ((N = N || 100),
      (Z = Z || 0),
      (ie = ie || 25),
      (U = typeof U < 'u' ? U : []),
      (q = q || []),
      ($ = $ || []));
    var P = [0, 0],
      ue = [0, 0],
      ce = [0, 0],
      se = 0,
      ve = 0,
      be = 0,
      Ue = 0,
      ke = 0,
      qe = 0,
      Be = 0,
      rt = [],
      He = [],
      oe = A,
      _t = A;
    if (_t.length < 3) return U;
    if ((Z++, Z > N)) return (console.warn('quickDecomp: max level (' + N + ') reached.'), U);
    for (var pe = 0; pe < A.length; ++pe)
      if (C(oe, pe)) {
        (q.push(oe[pe]), (se = ve = Number.MAX_VALUE));
        for (var je = 0; je < A.length; ++je)
          (h(v(oe, pe - 1), v(oe, pe), v(oe, je)) &&
            c(v(oe, pe - 1), v(oe, pe), v(oe, je - 1)) &&
            ((ce = L(v(oe, pe - 1), v(oe, pe), v(oe, je), v(oe, je - 1))),
            l(v(oe, pe + 1), v(oe, pe), ce) &&
              ((be = m(oe[pe], ce)), be < ve && ((ve = be), (ue = ce), (qe = je)))),
            h(v(oe, pe + 1), v(oe, pe), v(oe, je + 1)) &&
              c(v(oe, pe + 1), v(oe, pe), v(oe, je)) &&
              ((ce = L(v(oe, pe + 1), v(oe, pe), v(oe, je), v(oe, je + 1))),
              h(v(oe, pe - 1), v(oe, pe), ce) &&
                ((be = m(oe[pe], ce)), be < se && ((se = be), (P = ce), (ke = je)))));
        if (qe === (ke + 1) % A.length)
          ((ce[0] = (ue[0] + P[0]) / 2),
            (ce[1] = (ue[1] + P[1]) / 2),
            $.push(ce),
            pe < ke
              ? (r(rt, oe, pe, ke + 1),
                rt.push(ce),
                He.push(ce),
                qe !== 0 && r(He, oe, qe, oe.length),
                r(He, oe, 0, pe + 1))
              : (pe !== 0 && r(rt, oe, pe, oe.length),
                r(rt, oe, 0, ke + 1),
                rt.push(ce),
                He.push(ce),
                r(He, oe, qe, pe + 1)));
        else {
          if ((qe > ke && (ke += A.length), (Ue = Number.MAX_VALUE), ke < qe)) return U;
          for (var je = qe; je <= ke; ++je)
            o(v(oe, pe - 1), v(oe, pe), v(oe, je)) &&
              c(v(oe, pe + 1), v(oe, pe), v(oe, je)) &&
              ((be = m(v(oe, pe), v(oe, je))),
              be < Ue && Y(oe, pe, je) && ((Ue = be), (Be = je % A.length)));
          pe < Be
            ? (r(rt, oe, pe, Be + 1), Be !== 0 && r(He, oe, Be, _t.length), r(He, oe, 0, pe + 1))
            : (pe !== 0 && r(rt, oe, pe, _t.length), r(rt, oe, 0, Be + 1), r(He, oe, Be, pe + 1));
        }
        return (
          rt.length < He.length
            ? (j(rt, U, q, $, ie, N, Z), j(He, U, q, $, ie, N, Z))
            : (j(He, U, q, $, ie, N, Z), j(rt, U, q, $, ie, N, Z)),
          U
        );
      }
    return (U.push(A), U);
  }
  function V(A, U) {
    for (var q = 0, $ = A.length - 1; A.length > 3 && $ >= 0; --$)
      g(v(A, $ - 1), v(A, $), v(A, $ + 1), U) && (A.splice($ % A.length, 1), q++);
    return q;
  }
  function I(A, U) {
    for (var q = A.length - 1; q >= 1; --q)
      for (var $ = A[q], ie = q - 1; ie >= 0; --ie)
        if (le($, A[ie], U)) {
          A.splice(q, 1);
          continue;
        }
  }
  function ae(A, U, q) {
    return ((q = q || 0), Math.abs(A - U) <= q);
  }
  function le(A, U, q) {
    return ae(A[0], U[0], q) && ae(A[1], U[1], q);
  }
  return Qc;
}
var yv = yS();
const pS = jh(yv),
  SS = Y0({ __proto__: null, default: pS }, [yv]),
  Wt = {
    dropCooldownMs: 500,
    maxScoreHistory: 10,
    autoSaveIntervalMs: 3e3,
    storageKeys: {
      bestScore: 'ochimono.bestScore',
      scoreHistory: 'ochimono.scoreHistory',
      isSoundOn: 'ochimono.isSoundOn',
      themeId: 'ochimono.themeId',
      suspended: 'ochimono.suspended',
    },
  },
  xS = { 1: 20, 2: 26, 3: 32, 4: 38, 5: 46, 6: 54, 7: 62, 8: 72, 9: 82, 10: 104 },
  bS = { 1: 0.5, 2: 0.5, 3: 0.45, 4: 0.45, 5: 0.4, 6: 0.4, 7: 0.35, 8: 0.35, 9: 0.3, 10: 0.25 },
  ES = {
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
  CS = {
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
  pv = (s, E) => {
    const b = String(E).padStart(2, '0');
    return `images/${s}/level${b}.png`;
  },
  TS = 256,
  zh = {
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
  MS = (s) => (s * (s + 1)) / 2,
  RS = (s) => ({
    id: s,
    level: s,
    name: ES[s],
    theme: CS[s],
    radius: xS[s],
    restitution: bS[s],
    friction: 0.3,
    density: 0.001,
    score: MS(s),
    svgPath: pv(vr, s),
    color: zh[s].color,
    glowColor: zh[s].glow,
  }),
  Ba = 10,
  gr = Object.fromEntries(Array.from({ length: Ba }, (s, E) => E + 1).map((s) => [s, RS(s)]));
Array.from({ length: Ba }, (s, E) => gr[E + 1]);
const Zc = 3,
  _S = 360,
  AS = (s) => Math.min(1, s / _S),
  Nh = new Map(),
  ea = (s, E, b = vr) => {
    const h = `${s}|${E}|${b}`,
      o = Nh.get(h);
    if (o) return o;
    const l = gr[s],
      c = { ...l, radius: l.radius * AS(E), svgPath: pv(b, s) };
    return (Nh.set(h, c), c);
  },
  ta = {
    gravityY: 1.5,
    wallThickness: 150,
    gameOverLineOffset: 80,
    restingVelocityThreshold: 0.5,
    gameOverGracePeriodMs: 1e3,
    gameOverDangerLimitMs: 5e3,
  },
  na = { wall: 1, item: 2, magnetTarget: 4 },
  Sv = na.wall | na.item | na.magnetTarget,
  OS = na.wall | na.magnetTarget,
  xv = typeof window < 'u' && typeof window.localStorage < 'u',
  yr = (s) => {
    if (!xv) return null;
    try {
      return window.localStorage.getItem(s);
    } catch {
      return null;
    }
  },
  pr = (s, E) => {
    if (xv)
      try {
        window.localStorage.setItem(s, E);
      } catch {}
  },
  bv = () => {
    const s = yr(Wt.storageKeys.bestScore);
    if (s === null) return 0;
    const E = Number(s);
    return Number.isFinite(E) ? E : 0;
  },
  DS = (s) => {
    pr(Wt.storageKeys.bestScore, String(s));
  },
  wS = () => {
    const s = yr(Wt.storageKeys.scoreHistory);
    if (s === null) return [];
    try {
      const E = JSON.parse(s);
      return Array.isArray(E) ? E.filter((b) => typeof b == 'number' && Number.isFinite(b)) : [];
    } catch {
      return [];
    }
  },
  zS = (s) => {
    const E = [s, ...wS()].slice(0, Wt.maxScoreHistory);
    return (pr(Wt.storageKeys.scoreHistory, JSON.stringify(E)), E);
  },
  Ev = () => {
    const s = yr(Wt.storageKeys.isSoundOn);
    return s === null ? !0 : s === 'true';
  },
  Cv = (s) => {
    pr(Wt.storageKeys.isSoundOn, String(s));
  },
  Tv = () => {
    const s = yr(Wt.storageKeys.themeId);
    return ho(s) ? s : vr;
  },
  Pc = (s) => {
    pr(Wt.storageKeys.themeId, s);
  },
  NS = () => {
    const [s, E] = w.useState(0),
      [b, h] = w.useState(0),
      [o, l] = w.useState(!1),
      c = w.useRef(0),
      d = w.useRef(0);
    w.useEffect(() => {
      const y = bv();
      ((d.current = y), h(y));
    }, []);
    const f = w.useCallback((y) => {
        ((c.current += y), E(c.current));
      }, []),
      g = w.useCallback((y) => {
        ((c.current = y), E(y));
      }, []),
      m = w.useCallback(() => {
        ((c.current = 0), E(0), l(!1));
      }, []),
      v = w.useCallback(() => {
        const y = c.current,
          r = y > d.current;
        return (
          r && ((d.current = y), DS(y), h(y)),
          zS(y),
          l(r),
          { isNewRecord: r, finalScore: y }
        );
      }, []);
    return { score: s, bestScore: b, isNewRecord: o, add: f, setRaw: g, reset: m, finalize: v };
  },
  US = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  BS = { merge: 'sounds/punyu.mp3', special: 'sounds/punyu.mp3' },
  LS = 0.7,
  HS = () => {
    if (typeof window > 'u') return null;
    const s = window;
    return s.AudioContext ?? s.webkitAudioContext ?? null;
  },
  jS = () => {
    const [s, E] = w.useState(!0),
      b = w.useRef(null),
      h = w.useRef({});
    (w.useEffect(() => {
      E(Ev());
    }, []),
      w.useEffect(() => {
        const c = HS();
        if (!c) return;
        const d = new c();
        b.current = d;
        let f = !1;
        const g = {};
        return (
          (async () => {
            for (const [m, v] of Object.entries(BS))
              try {
                const r = await (await fetch(US(v))).arrayBuffer();
                if (f) return;
                const S = await d.decodeAudioData(r);
                if (f) return;
                g[m] = S;
              } catch {}
            h.current = g;
          })(),
          () => {
            ((f = !0), d.close().catch(() => {}), (b.current = null), (h.current = {}));
          }
        );
      }, []));
    const o = w.useCallback(() => {
        E((c) => {
          const d = !c;
          return (Cv(d), d);
        });
      }, []),
      l = w.useCallback(
        (c) => {
          if (!s) return;
          const d = b.current,
            f = h.current[c];
          if (!d || !f) return;
          d.state === 'suspended' && d.resume().catch(() => {});
          const g = d.createBufferSource();
          g.buffer = f;
          const m = d.createGain();
          ((m.gain.value = LS), g.connect(m).connect(d.destination), g.start(0));
        },
        [s]
      );
    return { isSoundOn: s, toggle: o, play: l };
  },
  Mv = (s) => ({
    restitution: s.restitution,
    friction: s.friction,
    density: s.density,
    label: `item-${s.level}`,
    collisionFilter: { category: na.item, mask: Sv },
  }),
  Rv = (s) => {
    for (const E of s.parts) E.render.visible = !1;
  },
  _v = (s, E, b) => {
    s.plugin.itemData = { level: E, consumed: !1, droppedAt: b };
  },
  GS = (s, E, b, h) => {
    const o = Te.Bodies.circle(E, b, s.radius, Mv(s));
    return (_v(o, s.level, h), Rv(o), o);
  },
  YS = (s, E, b, h, o) => {
    if (o.length < 3) return null;
    const l = Te.Bodies.fromVertices(E, b, [o], Mv(s));
    return l ? (_v(l, s.level, h), Rv(l), l) : null;
  },
  eo = (s) => (s.parent && s.parent !== s ? s.parent : s),
  In = (s) => eo(s).plugin.itemData,
  VS = (s, E) => {
    const b = ta.wallThickness,
      h = {
        isStatic: !0,
        restitution: 0.2,
        friction: 0.5,
        label: 'wall',
        collisionFilter: { category: na.wall },
      },
      o = Te.Bodies.rectangle(s / 2, E + b / 2, s + b * 2, b, h),
      l = Te.Bodies.rectangle(-b / 2, E / 2, b, E * 2, h),
      c = Te.Bodies.rectangle(s + b / 2, E / 2, b, E * 2, h),
      d = Te.Bodies.rectangle(s / 2, -b / 2, s + b * 2, b, { ...h, restitution: 0 });
    return { ground: o, leftWall: l, rightWall: c, ceiling: d };
  },
  qS = (s, E) => ({ x: (s.position.x + E.position.x) / 2, y: (s.position.y + E.position.y) / 2 }),
  XS = (s) => (s < 2 || s > Ba ? 0 : gr[s].score),
  QS = () => gr[Ba].score,
  go = Wt.storageKeys.suspended,
  ZS = 1,
  Vt = (s) => typeof s == 'number' && Number.isFinite(s),
  KS = (s) => {
    if (typeof s != 'object' || s === null) return null;
    const E = s;
    return !Vt(E.level) || !Vt(E.x) || !Vt(E.y)
      ? null
      : {
          level: E.level,
          x: E.x,
          y: E.y,
          vx: Vt(E.vx) ? E.vx : 0,
          vy: Vt(E.vy) ? E.vy : 0,
          angle: Vt(E.angle) ? E.angle : 0,
          angularVelocity: Vt(E.angularVelocity) ? E.angularVelocity : 0,
        };
  },
  to = () => {
    if (typeof window > 'u' || typeof window.localStorage > 'u') return null;
    let s = null;
    try {
      s = window.localStorage.getItem(go);
    } catch {
      return null;
    }
    if (s === null) return null;
    try {
      const E = JSON.parse(s);
      if (typeof E != 'object' || E === null) return null;
      const b = E;
      if (!Vt(b.score) || !Array.isArray(b.bodies)) return null;
      const h = [];
      for (const o of b.bodies) {
        const l = KS(o);
        l && h.push(l);
      }
      return {
        version: Vt(b.version) ? b.version : 0,
        savedAt: Vt(b.savedAt) ? b.savedAt : 0,
        score: b.score,
        themeId: ho(b.themeId) ? b.themeId : vr,
        currentItemLevel: Vt(b.currentItemLevel) ? b.currentItemLevel : 1,
        nextItemLevel: Vt(b.nextItemLevel) ? b.nextItemLevel : 1,
        skillGauge: Vt(b.skillGauge) ? b.skillGauge : 0,
        magnetUsesLeft: Vt(b.magnetUsesLeft) ? b.magnetUsesLeft : void 0,
        bodies: h,
      };
    } catch {
      return null;
    }
  },
  kS = (s) => {
    if (!(typeof window > 'u' || typeof window.localStorage > 'u'))
      try {
        const E = { ...s, version: ZS, savedAt: Date.now() };
        window.localStorage.setItem(go, JSON.stringify(E));
      } catch {}
  },
  Uh = () => {
    if (!(typeof window > 'u' || typeof window.localStorage > 'u'))
      try {
        window.localStorage.removeItem(go);
      } catch {}
  },
  JS = 32,
  FS = 14,
  Ua = (s, E) => s * (1 << FS) + E,
  Yi = (s, E) => s[E + 3] >= JS,
  $S = (s, E, b) => {
    const h = [];
    for (let o = 0; o < b; o += 1)
      for (let l = 0; l < E; l += 1) {
        const c = (o * E + l) * 4;
        if (!Yi(s, c)) continue;
        ((o === 0 || !Yi(s, ((o - 1) * E + l) * 4)) &&
          h.push({
            fromKey: Ua(l, o),
            toKey: Ua(l + 1, o),
            from: { x: l, y: o },
            to: { x: l + 1, y: o },
          }),
          (l === E - 1 || !Yi(s, (o * E + (l + 1)) * 4)) &&
            h.push({
              fromKey: Ua(l + 1, o),
              toKey: Ua(l + 1, o + 1),
              from: { x: l + 1, y: o },
              to: { x: l + 1, y: o + 1 },
            }),
          (o === b - 1 || !Yi(s, ((o + 1) * E + l) * 4)) &&
            h.push({
              fromKey: Ua(l + 1, o + 1),
              toKey: Ua(l, o + 1),
              from: { x: l + 1, y: o + 1 },
              to: { x: l, y: o + 1 },
            }),
          (l === 0 || !Yi(s, (o * E + (l - 1)) * 4)) &&
            h.push({
              fromKey: Ua(l, o + 1),
              toKey: Ua(l, o),
              from: { x: l, y: o + 1 },
              to: { x: l, y: o },
            }));
      }
    return h;
  },
  WS = (s) => {
    const E = new Map();
    for (const o of s) {
      const l = E.get(o.fromKey);
      l ? l.push(o) : E.set(o.fromKey, [o]);
    }
    const b = new Set(),
      h = [];
    for (const o of s) {
      if (b.has(o)) continue;
      const l = [];
      let c = o;
      for (; c && !b.has(c); ) {
        (b.add(c), l.push(c.from));
        const d = E.get(c.toKey);
        c = d == null ? void 0 : d.find((f) => !b.has(f));
      }
      l.length >= 3 && h.push(l);
    }
    return h;
  },
  IS = (s, E, b) => {
    const h = b.x - E.x,
      o = b.y - E.y,
      l = Math.hypot(h, o);
    return l === 0
      ? Math.hypot(s.x - E.x, s.y - E.y)
      : Math.abs(o * s.x - h * s.y + b.x * E.y - b.y * E.x) / l;
  },
  no = (s, E) => {
    if (s.length <= 2) return s.slice();
    let b = 0,
      h = 0;
    const o = s.length - 1;
    for (let l = 1; l < o; l += 1) {
      const c = IS(s[l], s[0], s[o]);
      c > b && ((b = c), (h = l));
    }
    if (b > E) {
      const l = no(s.slice(0, h + 1), E),
        c = no(s.slice(h), E);
      return [...l, ...c.slice(1)];
    }
    return [s[0], s[o]];
  },
  PS = (s, E) => {
    if (s.length <= 3) return s;
    const b = [...s, s[0]],
      h = no(b, E);
    return (h.pop(), h);
  },
  ex = (s, E = {}) => {
    const b = E.simplifyEpsilon ?? 2,
      h = $S(s.data, s.width, s.height);
    if (h.length === 0) return null;
    const o = WS(h);
    if (o.length === 0) return null;
    let l = o[0];
    for (let c = 1; c < o.length; c += 1) o[c].length > l.length && (l = o[c]);
    return PS(l, b);
  },
  Vi = new Map(),
  Kc = new Map(),
  tx = (s) => {
    const E = s.length;
    if (E === 0) return { x: 0, y: 0 };
    if (E < 3) {
      let l = 0,
        c = 0;
      for (const d of s) ((l += d.x), (c += d.y));
      return { x: l / E, y: c / E };
    }
    let b = 0,
      h = 0,
      o = 0;
    for (let l = 0; l < E; l += 1) {
      const c = s[l],
        d = s[(l + 1) % E],
        f = c.x * d.y - d.x * c.y;
      ((b += (c.x + d.x) * f), (h += (c.y + d.y) * f), (o += f));
    }
    if (o === 0) {
      let l = 0,
        c = 0;
      for (const d of s) ((l += d.x), (c += d.y));
      return { x: l / E, y: c / E };
    }
    return { x: b / (3 * o), y: h / (3 * o) };
  },
  nx = async (s) => {
    const E = s.width,
      b = s.height;
    if (typeof OffscreenCanvas < 'u') {
      const c = new OffscreenCanvas(E, b).getContext('2d');
      if (!c) throw new Error('OffscreenCanvas 2D context unavailable');
      return (c.drawImage(s, 0, 0), c.getImageData(0, 0, E, b));
    }
    const h = document.createElement('canvas');
    ((h.width = E), (h.height = b));
    const o = h.getContext('2d');
    if (!o) throw new Error('Canvas 2D context unavailable');
    return (o.drawImage(s, 0, 0), o.getImageData(0, 0, E, b));
  },
  ax = async (s, E) => {
    const b = Vi.get(s);
    if (b !== void 0) return b;
    const h = Kc.get(s);
    if (h) return h;
    const o = (async () => {
      try {
        const l = await nx(E),
          c = ex(l);
        if (!c || c.length < 3) return (Vi.set(s, null), null);
        const d = tx(c),
          f = {
            vertices: c,
            centroidOffset: { x: d.x - l.width / 2, y: d.y - l.height / 2 },
            pngWidth: l.width,
            pngHeight: l.height,
          };
        return (Vi.set(s, f), f);
      } catch {
        return (Vi.set(s, null), null);
      } finally {
        Kc.delete(s);
      }
    })();
    return (Kc.set(s, o), o);
  },
  Av = (s) => Vi.get(s) ?? null,
  lx = (s, E) => {
    const b = (E * 2) / s.pngWidth;
    return s.vertices.map((h) => ({
      x: (h.x - s.pngWidth / 2 - s.centroidOffset.x) * b,
      y: (h.y - s.pngHeight / 2 - s.centroidOffset.y) * b,
    }));
  };
Te.Common.setDecomp(SS);
const Bh = new Map(),
  yo = (s) => {
    const E = Bh.get(s);
    if (E) return E;
    const b = `/ochimono-game/${s}`.replace(/\/{2,}/g, '/');
    return (Bh.set(s, b), b);
  },
  ur = (s, E) => {
    const b = (E.radius * 2) / TS,
      h = yo(E.svgPath),
      o = Av(h),
      l = o ? -o.centroidOffset.x * b : 0,
      c = o ? -o.centroidOffset.y * b : 0;
    s.plugin.itemRender = { textureUrl: h, scale: b, contourOffsetX: l, contourOffsetY: c };
  },
  kc = (s, E, b, h) => {
    const o = yo(s.svgPath),
      l = Av(o);
    if (l) {
      const c = lx(l, s.radius),
        d = YS(s, E, b, h, c);
      if (d) return d;
    }
    return GS(s, E, b, h);
  },
  Lh = async (s, E, b) => {
    for (let h = 1; h <= Ba; h += 1) {
      const o = ea(h, 1, s),
        l = yo(o.svgPath);
      if (!b.has(l)) {
        b.add(l);
        try {
          const d = await (await fetch(l)).blob(),
            f = await createImageBitmap(d);
          (E && (E.textures[l] = f), ax(l, f));
        } catch {
          const c = new Image();
          c.src = l;
        }
      }
    }
  },
  ix = ({ fieldWidth: s, fieldHeight: E }) => {
    const b = w.useRef(null),
      h = w.useRef(null),
      o = w.useRef(null),
      l = w.useRef(null),
      c = w.useRef(null),
      [d, f] = w.useState('idle'),
      [g, m] = w.useState(null),
      [v, y] = w.useState(null),
      r = w.useRef(null),
      S = w.useRef(null),
      p = w.useCallback((re) => {
        ((r.current = re), m(re));
      }, []),
      C = w.useCallback((re) => {
        ((S.current = re), y(re));
      }, []),
      R = w.useRef(!0),
      z = w.useRef(0),
      B = w.useRef('idle'),
      Y = w.useRef(null),
      T = w.useRef(s),
      D = w.useRef(E),
      O = w.useRef(new Set()),
      [_, H] = w.useState(() => Tv()),
      L = w.useRef(_);
    L.current = _;
    const j = NS(),
      V = jS(),
      I = w.useRef(j.add);
    I.current = j.add;
    const ae = w.useRef(V.play);
    ae.current = V.play;
    const le = w.useRef(j.finalize);
    le.current = j.finalize;
    const [A, U] = w.useState(0),
      q = w.useRef(0),
      $ = w.useCallback((re) => {
        ((q.current = re), U(re));
      }, []),
      ie = w.useCallback(
        (re) => {
          const ge = Math.min(ft.gaugeMax, q.current + re);
          ge !== q.current && $(ge);
        },
        [$]
      ),
      N = w.useRef(ie);
    N.current = ie;
    const [Z, P] = w.useState(!1),
      [ue, ce] = w.useState(!1),
      se = w.useRef(!1),
      [ve, be] = w.useState(!1),
      [Ue, ke] = w.useState(Vl),
      qe = w.useRef(Vl),
      Be = w.useCallback((re) => {
        ((qe.current = re), ke(re));
      }, []),
      rt = w.useRef(!1),
      He = w.useRef(null),
      oe = w.useRef(null),
      _t = w.useRef(null),
      pe = w.useRef(null),
      je = w.useRef(new Set()),
      xt = w.useCallback((re) => {
        for (const ge of re.parts)
          ((ge.collisionFilter.category = na.magnetTarget), (ge.collisionFilter.mask = OS));
        je.current.add(re);
      }, []),
      dn = w.useCallback(() => {
        for (const re of je.current)
          for (const ge of re.parts)
            ((ge.collisionFilter.category = na.item), (ge.collisionFilter.mask = Sv));
        je.current.clear();
      }, []),
      En = w.useCallback(() => {
        (dn(),
          (_t.current = null),
          (pe.current = null),
          He.current === 'magnet' && (He.current = null));
      }, [dn]),
      ua = w.useRef(En);
    ua.current = En;
    const zt = w.useRef(null),
      [pt, mn] = w.useState(null),
      bt = w.useRef(null),
      Pe = w.useRef(new Set()),
      ra = w.useRef(1),
      It = w.useCallback(() => {
        let re;
        return ((re = Math.floor(Math.random() * Zc) + 1), ea(re, T.current, L.current));
      }, []);
    w.useEffect(() => {
      const re = b.current;
      if (!re) return;
      const ge = T.current,
        _e = D.current,
        Se = Te.Engine.create({ gravity: { x: 0, y: ta.gravityY } }),
        me = Te.Render.create({
          element: re,
          engine: Se,
          options: {
            width: ge,
            height: _e,
            wireframes: !1,
            background: 'transparent',
            pixelRatio: Math.min(1.5, window.devicePixelRatio || 1),
          },
        }),
        { ground: Re, leftWall: Xe, rightWall: Qe, ceiling: xe } = VS(ge, _e);
      ([Re, Xe, Qe, xe].forEach((Ie) => {
        Ie.render.visible = !1;
      }),
        Te.World.add(Se.world, [Re, Xe, Qe, xe]));
      const Ae = Pe.current,
        Le = () => {
          const Ie = me.context,
            Mn = me.textures;
          for (const yn of Ae) {
            const Et = yn.plugin.itemRender;
            if (!Et) continue;
            const Ut = Mn[Et.textureUrl];
            if (!Ut) continue;
            const ja = Ut.width,
              ca = Ut.height,
              st = ja * Et.scale,
              Kl = ca * Et.scale;
            (Ie.save(),
              Ie.translate(yn.position.x, yn.position.y),
              Ie.rotate(yn.angle),
              Ie.translate(Et.contourOffsetX, Et.contourOffsetY),
              Ie.drawImage(Ut, -st / 2, -Kl / 2, st, Kl),
              Ie.restore());
          }
        };
      (Te.Events.on(me, 'afterRender', Le), Te.Render.run(me));
      const nt = Te.Runner.create();
      (Te.Runner.run(nt, Se),
        (h.current = Se),
        (o.current = me),
        (l.current = nt),
        (O.current = new Set()));
      for (const Ie of mo) Lh(Ie.id, me, O.current);
      const Nt = () => {
        document.hidden
          ? (ul.current(), Te.Runner.stop(nt), Te.Render.stop(me))
          : (Te.Render.run(me), Te.Runner.run(nt, Se));
      };
      document.addEventListener('visibilitychange', Nt);
      const qt = window.setInterval(() => {
        ul.current();
      }, Wt.autoSaveIntervalMs);
      return () => {
        (document.removeEventListener('visibilitychange', Nt),
          window.clearInterval(qt),
          Te.Events.off(me, 'afterRender', Le),
          Te.Runner.stop(nt),
          Te.Render.stop(me),
          Te.World.clear(Se.world, !1),
          Te.Engine.clear(Se),
          me.canvas.parentNode && me.canvas.parentNode.removeChild(me.canvas),
          (me.textures = {}),
          (h.current = null),
          (o.current = null),
          (l.current = null),
          Ae.clear());
      };
    }, []);
    const Cn = w.useCallback((re, ge) => {
      var Nt;
      const _e = h.current;
      if (!_e) return;
      const Se = eo(re),
        me = eo(ge),
        Re = In(Se),
        Xe = In(me);
      if (!Re || !Xe || Re.consumed || Xe.consumed || Re.level !== Xe.level) return;
      ((Re.consumed = !0), (Xe.consumed = !0));
      const Qe = Re.level + 1,
        xe = qS(Se, me);
      (Te.World.remove(_e.world, [Se, me]), Pe.current.delete(Se), Pe.current.delete(me));
      let Ae = 0,
        Le = !1,
        nt = W1(Qe);
      if (Qe > Ba)
        ((Ae = QS()), (Le = !0), (nt += ft.bonusOnSpecialElimination), ae.current('special'));
      else {
        const qt = ea(Qe, T.current, L.current),
          Ie = kc(qt, xe.x, xe.y, performance.now());
        (ur(Ie, qt),
          Te.World.add(_e.world, Ie),
          Pe.current.add(Ie),
          (Ae = XS(Qe)),
          (Le = Qe === Ba),
          Le && (nt += ft.bonusOnLevel10Created),
          ae.current(Le ? 'special' : 'merge'));
      }
      (I.current(Ae),
        N.current(nt),
        (Nt = c.current) == null || Nt.add({ x: xe.x, y: xe.y, score: Ae, isSpecial: Le }));
    }, []);
    (w.useEffect(() => {
      const re = h.current;
      if (!re) return;
      const ge = (_e) => {
        for (const Se of _e.pairs) Cn(Se.bodyA, Se.bodyB);
      };
      return (
        Te.Events.on(re, 'collisionStart', ge),
        () => {
          Te.Events.off(re, 'collisionStart', ge);
        }
      );
    }, [Cn]),
      w.useEffect(() => {
        const re = h.current;
        if (!re) return;
        const ge = ta.gameOverLineOffset;
        let _e = 0;
        const Se = () => {
            ((zt.current = null), bt.current !== null && ((bt.current = null), mn(null)));
          },
          me = () => {
            if (_t.current !== null)
              if (performance.now() >= _t.current) ua.current();
              else {
                const nt = [];
                for (const Nt of je.current) {
                  const qt = In(Nt);
                  qt && !qt.consumed && nt.push(Nt);
                }
                if (nt.length >= 2) {
                  let Nt = 0,
                    qt = 0;
                  for (const Ie of nt) ((Nt += Ie.position.x), (qt += Ie.position.y));
                  ((Nt /= nt.length), (qt /= nt.length));
                  for (const Ie of nt) {
                    const Mn = Nt - Ie.position.x,
                      yn = qt - Ie.position.y,
                      Et = Math.hypot(Mn, yn);
                    if (Et < 1) continue;
                    const Ut = ft.magnet.forceMagnitude * Ie.mass;
                    Te.Body.applyForce(Ie, Ie.position, { x: (Mn / Et) * Ut, y: (yn / Et) * Ut });
                  }
                } else ua.current();
              }
            if (B.current !== 'playing') return;
            if (rt.current) {
              zt.current !== null &&
                ((zt.current = null), bt.current !== null && ((bt.current = null), mn(null)));
              return;
            }
            if (((_e = (_e + 1) % 6), _e !== 0)) return;
            const Re = performance.now();
            let Xe = !1;
            for (const Le of Pe.current) {
              const nt = In(Le);
              if (
                !(!nt || nt.consumed) &&
                !(Re - nt.droppedAt < ta.gameOverGracePeriodMs) &&
                !(Math.abs(Le.velocity.y) > ta.restingVelocityThreshold) &&
                Le.bounds.min.y < ge
              ) {
                Xe = !0;
                break;
              }
            }
            if (!Xe) {
              Se();
              return;
            }
            zt.current === null && (zt.current = Re);
            const Qe = Re - zt.current,
              xe = ta.gameOverDangerLimitMs;
            if (Qe >= xe) {
              (Se(), (B.current = 'gameover'), f('gameover'), Uh());
              const Le = le.current();
              ae.current(Le.isNewRecord ? 'highscore' : 'gameover');
              return;
            }
            const Ae = Math.max(1, Math.ceil((xe - Qe) / 1e3));
            Ae !== bt.current && ((bt.current = Ae), mn(Ae));
          };
        return (
          Te.Events.on(re, 'afterUpdate', me),
          () => {
            Te.Events.off(re, 'afterUpdate', me);
          }
        );
      }, []),
      w.useEffect(() => {
        if (h.current) {
          Lh(_, o.current, O.current);
          for (const Se of Pe.current) {
            const me = In(Se);
            if (!me || me.consumed) continue;
            const Re = ea(me.level, T.current, _);
            ur(Se, Re);
          }
        }
        const ge = r.current ? ea(r.current.level, T.current, _) : null,
          _e = S.current ? ea(S.current.level, T.current, _) : null;
        (p(ge), C(_e));
      }, [_, p, C]));
    const Sr = w.useCallback((re) => {
        (H(re), Pc(re));
      }, []),
      Tn = w.useCallback((re) => {
        ((se.current = re), ce(re));
      }, []),
      hn = w.useCallback(
        (re) => {
          $(Math.max(0, q.current - re));
        },
        [$]
      ),
      At = w.useCallback(() => {
        if (!h.current) return;
        He.current = 'shake';
        const { impulseMin: ge, impulseMax: _e, upwardBias: Se } = ft.shake;
        for (const me of Pe.current) {
          const Re = In(me);
          if (!Re || Re.consumed) continue;
          const Xe = Math.random() * Math.PI * 2,
            Qe = ge + Math.random() * (_e - ge),
            xe = Math.cos(Xe) * Qe * me.mass,
            Ae = (Math.sin(Xe) * Qe - Se) * me.mass;
          Te.Body.applyForce(me, me.position, { x: xe, y: Ae });
        }
        (ae.current('special'), (He.current = null));
      }, []),
      vn = w.useCallback(() => {
        const re = h.current;
        if (!re || oe.current !== null) return;
        ((He.current = 'gravityFlip'), (rt.current = !0));
        const ge = ta.gravityY;
        re.gravity.y = ge * ft.gravityFlip.multiplier;
        const _e = new Map(),
          Se = new Map();
        for (const me of Pe.current)
          (_e.set(me, me.frictionAir),
            Se.set(me, me.restitution),
            (me.frictionAir = ft.gravityFlip.frictionAir),
            Te.Body.setVelocity(me, { x: me.velocity.x, y: ft.gravityFlip.liftKickVelocity }));
        (be(!0),
          ae.current('special'),
          (oe.current = window.setTimeout(() => {
            const me = h.current;
            me && (me.gravity.y = ge * ft.gravityFlip.slamGravityMultiplier);
            for (const Re of Pe.current)
              ((Re.frictionAir = ft.gravityFlip.slamFrictionAir),
                Se.has(Re) || Se.set(Re, Re.restitution),
                (Re.restitution = ft.gravityFlip.slamRestitution),
                Te.Body.setVelocity(Re, { x: Re.velocity.x, y: ft.gravityFlip.slamKickVelocity }));
            (be(!1),
              ae.current('special'),
              (oe.current = window.setTimeout(() => {
                const Re = h.current;
                Re && (Re.gravity.y = ge);
                for (const Xe of Pe.current)
                  ((Xe.frictionAir = _e.get(Xe) ?? 0.01), (Xe.restitution = Se.get(Xe) ?? 0.4));
                ((oe.current = null),
                  (rt.current = !1),
                  He.current === 'gravityFlip' && (He.current = null));
              }, ft.gravityFlip.slamDurationMs)));
          }, ft.gravityFlip.durationMs)));
      }, []),
      Ot = w.useCallback(() => {
        ((He.current = 'magnet'), Tn(!0));
      }, [Tn]),
      xr = w.useCallback(() => {
        se.current && (Tn(!1), (He.current = null));
      }, [Tn]),
      br = w.useCallback(
        (re, ge) => {
          if (!se.current) return;
          const _e = Array.from(Pe.current),
            Se = Te.Query.point(_e, { x: re, y: ge });
          if (Se.length === 0) return;
          const me = Se[0],
            Re = In(me);
          if (!Re) return;
          const Xe = _e.filter((xe) => {
            if (xe === me) return !1;
            const Ae = In(xe);
            return !!Ae && !Ae.consumed && Ae.level === Re.level;
          });
          if (Xe.length === 0 || qe.current <= 0) return;
          const Qe = Xe[Math.floor(Math.random() * Xe.length)];
          (xt(me),
            xt(Qe),
            (pe.current = Re.level),
            (_t.current = performance.now() + ft.magnet.durationMs),
            Be(qe.current - 1),
            Tn(!1),
            ae.current('special'),
            hn(Gi('magnet')));
        },
        [hn, Tn, Be, xt]
      ),
      Er = w.useCallback(() => {
        q.current < ft.segmentMax || (B.current === 'playing' && P(!0));
      }, []),
      al = w.useCallback(() => {
        P(!1);
      }, []),
      ll = w.useCallback(
        (re) => {
          const ge = Gi(re);
          q.current < ge ||
            (re === 'magnet' && qe.current <= 0) ||
            (P(!1),
            re === 'shake'
              ? (At(), hn(ge))
              : re === 'gravityFlip'
                ? (vn(), hn(ge))
                : re === 'magnet' && Ot());
        },
        [At, vn, Ot, hn]
      ),
      gn = w.useCallback(() => {
        oe.current !== null && (window.clearTimeout(oe.current), (oe.current = null));
        const re = h.current;
        (re && (re.gravity.y = ta.gravityY),
          be(!1),
          (rt.current = !1),
          dn(),
          (_t.current = null),
          (pe.current = null),
          (He.current = null),
          P(!1),
          Tn(!1),
          $(0));
      }, [Tn, $, dn]),
      zn = w.useCallback(
        (re) => {
          const ge = h.current;
          if (!ge || B.current !== 'playing' || !R.current) return;
          const _e = r.current;
          if (!_e) return;
          const Se = performance.now();
          if (Se - z.current < Wt.dropCooldownMs) return;
          const me = Math.max(0, Math.min(1, re)),
            Re = _e.radius,
            Xe = Re,
            Qe = T.current - Re,
            xe = Xe + me * (Qe - Xe),
            Ae = _e.radius + 4,
            Le = kc(_e, xe, Ae, Se);
          (ur(Le, _e),
            Te.World.add(ge.world, Le),
            Pe.current.add(Le),
            ae.current('drop'),
            (R.current = !1),
            (z.current = Se),
            Y.current !== null && window.clearTimeout(Y.current),
            (Y.current = window.setTimeout(() => {
              ((Y.current = null),
                B.current === 'playing' && (p(S.current), C(It()), (R.current = !0)));
            }, Wt.dropCooldownMs)));
        },
        [It, p, C]
      ),
      sa = w.useCallback(() => {
        var re;
        (j.reset(),
          (re = c.current) == null || re.clear(),
          gn(),
          (zt.current = null),
          (bt.current = null),
          mn(null),
          (ra.current = 1),
          Be(Vl),
          p(It()),
          C(It()),
          (R.current = !0),
          (z.current = 0),
          (B.current = 'playing'),
          f('playing'));
      }, [j, It, gn, p, Be, C]),
      La = w.useCallback(() => {
        const re = h.current;
        if (re) {
          for (const ge of Pe.current) Te.World.remove(re.world, ge);
          Pe.current.clear();
        }
        (Y.current !== null && (window.clearTimeout(Y.current), (Y.current = null)), sa());
      }, [sa]),
      il = w.useCallback(() => {
        var ge, _e;
        if (B.current !== 'playing') return;
        const re = [];
        for (const Se of Pe.current) {
          const me = In(Se);
          !me ||
            me.consumed ||
            re.push({
              level: me.level,
              x: Se.position.x,
              y: Se.position.y,
              vx: Se.velocity.x,
              vy: Se.velocity.y,
              angle: Se.angle,
              angularVelocity: Se.angularVelocity,
            });
        }
        (re.length === 0 && j.score === 0) ||
          kS({
            score: j.score,
            themeId: L.current,
            currentItemLevel: ((ge = r.current) == null ? void 0 : ge.level) ?? 1,
            nextItemLevel: ((_e = S.current) == null ? void 0 : _e.level) ?? 1,
            skillGauge: q.current,
            magnetUsesLeft: qe.current,
            bodies: re,
          });
      }, [j]),
      ul = w.useRef(il);
    ul.current = il;
    const Zl = w.useCallback(() => {
        var ge;
        if (B.current !== 'playing') return;
        il();
        const re = h.current;
        if (re) {
          for (const _e of Pe.current) Te.World.remove(re.world, _e);
          Pe.current.clear();
        }
        (Y.current !== null && (window.clearTimeout(Y.current), (Y.current = null)),
          (ge = c.current) == null || ge.clear(),
          gn(),
          (zt.current = null),
          (bt.current = null),
          mn(null),
          p(null),
          C(null),
          j.reset(),
          (R.current = !0),
          (z.current = 0),
          (B.current = 'idle'),
          f('idle'));
      }, [il, gn, j, p, C]),
      Ha = w.useCallback(
        (re) => {
          var Qe;
          const ge = h.current;
          if (!ge) return;
          for (const xe of Pe.current) Te.World.remove(ge.world, xe);
          (Pe.current.clear(),
            Y.current !== null && (window.clearTimeout(Y.current), (Y.current = null)),
            (Qe = c.current) == null || Qe.clear(),
            gn(),
            (zt.current = null),
            (bt.current = null),
            mn(null),
            re.themeId !== L.current && (H(re.themeId), (L.current = re.themeId), Pc(re.themeId)));
          const _e = performance.now();
          for (const xe of re.bodies) {
            if (xe.level < 1 || xe.level > Ba) continue;
            const Ae = ea(xe.level, T.current, re.themeId),
              Le = kc(Ae, xe.x, xe.y, _e);
            (Te.Body.setVelocity(Le, { x: xe.vx, y: xe.vy }),
              Te.Body.setAngle(Le, xe.angle),
              Te.Body.setAngularVelocity(Le, xe.angularVelocity),
              ur(Le, Ae),
              Te.World.add(ge.world, Le),
              Pe.current.add(Le));
          }
          const Se =
              re.currentItemLevel >= 1 && re.currentItemLevel <= Zc ? re.currentItemLevel : 1,
            me = re.nextItemLevel >= 1 && re.nextItemLevel <= Zc ? re.nextItemLevel : 1;
          (p(ea(Se, T.current, re.themeId)), C(ea(me, T.current, re.themeId)));
          const Re = Math.max(0, Math.min(ft.gaugeMax, re.skillGauge));
          $(Re);
          const Xe = Math.max(0, Math.min(Vl, re.magnetUsesLeft ?? Vl));
          (Be(Xe),
            j.reset(),
            j.setRaw(Math.max(0, re.score)),
            (R.current = !0),
            (z.current = 0),
            (B.current = 'playing'),
            f('playing'));
        },
        [gn, j, p, Be, C, $]
      ),
      Cr = ta.gameOverLineOffset;
    return {
      status: d,
      score: j.score,
      bestScore: j.bestScore,
      isNewRecord: j.isNewRecord,
      currentItem: g,
      nextItem: v,
      isSoundOn: V.isSoundOn,
      themeId: _,
      mergeEffectRef: c,
      canvasContainerRef: b,
      drop: zn,
      start: sa,
      restart: La,
      toggleSound: V.toggle,
      setThemeId: Sr,
      fieldWidth: s,
      fieldHeight: E,
      gameOverLineY: Cr,
      skillGauge: A,
      skillGaugeMax: ft.gaugeMax,
      skillSegmentMax: ft.segmentMax,
      skillSegmentCount: ft.segmentCount,
      canOpenSkillMenu: A >= ft.segmentMax,
      canUseSkill: {
        shake: A >= Gi('shake'),
        gravityFlip: A >= Gi('gravityFlip'),
        magnet: A >= Gi('magnet') && Ue > 0,
      },
      magnetUsesLeft: Ue,
      magnetMaxUses: Vl,
      isSkillMenuOpen: Z,
      openSkillMenu: Er,
      closeSkillMenu: al,
      selectSkill: ll,
      isMagnetSelecting: ue,
      cancelMagnetSelecting: xr,
      selectMagnetTarget: br,
      isGravityFlipped: ve,
      gameOverCountdown: pt,
      suspend: Zl,
      resume: Ha,
      loadSuspended: to,
      clearSuspended: Uh,
    };
  },
  ux = ({ size: s, initialResume: E, onExitToTitle: b }) => {
    const h = ix({ fieldWidth: s.width, fieldHeight: s.height }),
      [o, l] = w.useState(!1),
      c = w.useCallback(() => l(!0), []),
      d = w.useCallback(() => l(!1), []),
      f = w.useCallback(() => {
        (h.suspend(), b());
      }, [h, b]),
      g = w.useRef(!1);
    return (
      w.useEffect(() => {
        g.current || ((g.current = !0), E ? h.resume(E) : h.start());
      }, [h, E]),
      J.jsxs(J.Fragment, {
        children: [
          J.jsx(mS, {
            score: h.score,
            bestScore: h.bestScore,
            nextItem: h.nextItem,
            onOpenSettings: c,
          }),
          J.jsx('main', {
            className: Dn.main,
            children: J.jsxs('div', {
              className: Dn.field_wrapper,
              style: { width: `${s.width}px`, height: `${s.height}px` },
              children: [
                J.jsx(Fp, {
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
                }),
                J.jsx(cv, { effect: h.isGravityFlipped ? 'gravityFlip' : null }),
                J.jsx(sv, { active: h.isMagnetSelecting, onCancel: h.cancelMagnetSelecting }),
                J.jsx(rv, { seconds: h.status === 'playing' ? h.gameOverCountdown : null }),
                h.status === 'playing'
                  ? J.jsx('div', {
                      className: Dn.skill_button_wrapper,
                      children: J.jsx(dv, {
                        gauge: h.skillGauge,
                        segmentMax: h.skillSegmentMax,
                        segmentCount: h.skillSegmentCount,
                        canOpen: h.canOpenSkillMenu,
                        onClick: h.openSkillMenu,
                      }),
                    })
                  : null,
                h.status === 'gameover'
                  ? J.jsx(u1, {
                      score: h.score,
                      bestScore: h.bestScore,
                      isNewRecord: h.isNewRecord,
                      onRestart: h.restart,
                    })
                  : null,
              ],
            }),
          }),
          J.jsx(hv, {
            open: h.isSkillMenuOpen,
            onSelect: h.selectSkill,
            onClose: h.closeSkillMenu,
            canUse: h.canUseSkill,
            magnetUsesLeft: h.magnetUsesLeft,
            magnetMaxUses: h.magnetMaxUses,
          }),
          J.jsx(vo, {
            open: o,
            onClose: d,
            themeId: h.themeId,
            onChangeTheme: h.setThemeId,
            isSoundOn: h.isSoundOn,
            onToggleSound: h.toggleSound,
            canSuspend: h.status === 'playing',
            onSuspend: f,
          }),
        ],
      })
    );
  },
  rx = ({ initialResume: s, onExitToTitle: E }) => {
    const b = w.useRef(null),
      [h, o] = w.useState(null);
    return (
      w.useLayoutEffect(() => {
        const l = b.current;
        if (!l) return;
        const c = l.getBoundingClientRect();
        o({ width: Math.floor(c.width), height: Math.floor(c.height) });
      }, []),
      h === null
        ? J.jsxs('div', {
            className: Dn.layout,
            children: [
              J.jsx('div', { className: Dn.top_bar_placeholder, 'aria-hidden': 'true' }),
              J.jsx('main', { ref: b, className: Dn.main }),
            ],
          })
        : J.jsx('div', {
            className: Dn.layout,
            children: J.jsx(ux, { size: h, initialResume: s, onExitToTitle: E }),
          })
    );
  },
  sx = '_banner_17jhg_1',
  cx = '_banner_info_17jhg_23',
  ox = '_message_17jhg_37',
  fx = '_button_17jhg_41',
  ql = { banner: sx, banner_info: cx, message: ox, button: fx },
  dx = ({ banner: s, onApply: E }) =>
    s === null
      ? null
      : s.kind === 'has-update'
        ? J.jsxs('div', {
            className: ql.banner,
            role: 'status',
            'aria-live': 'polite',
            children: [
              J.jsx('span', { className: ql.message, children: '新しいバージョンがあります' }),
              J.jsx('button', {
                type: 'button',
                className: ql.button,
                onClick: E,
                children: '更新',
              }),
            ],
          })
        : J.jsx('div', {
            className: `${ql.banner} ${ql.banner_info}`,
            role: 'status',
            'aria-live': 'polite',
            children: J.jsx('span', {
              className: ql.message,
              children: '現在のバージョンは最新です',
            }),
          }),
  mx = '_backdrop_1weqi_1',
  hx = '_dialog_1weqi_12',
  vx = '_title_1weqi_22',
  gx = '_body_1weqi_30',
  yx = '_actions_1weqi_36',
  px = '_button_1weqi_42',
  Sx = '_yes_1weqi_57',
  xx = '_no_1weqi_63',
  Pn = { backdrop: mx, dialog: hx, title: vx, body: gx, actions: yx, button: px, yes: Sx, no: xx },
  Ov = w.memo(({ open: s, onYes: E, onNo: b }) =>
    s
      ? J.jsx('div', {
          className: Pn.backdrop,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '中断データの再開確認',
          children: J.jsxs('div', {
            className: Pn.dialog,
            children: [
              J.jsx('h2', { className: Pn.title, children: '中断データが見つかりました' }),
              J.jsx('p', { className: Pn.body, children: '中断したところから再開しますか？' }),
              J.jsxs('div', {
                className: Pn.actions,
                children: [
                  J.jsx('button', {
                    type: 'button',
                    className: `${Pn.button} ${Pn.yes}`,
                    onClick: E,
                    children: 'はい',
                  }),
                  J.jsx('button', {
                    type: 'button',
                    className: `${Pn.button} ${Pn.no}`,
                    onClick: b,
                    children: 'いいえ',
                  }),
                ],
              }),
            ],
          }),
        })
      : null
  );
Ov.displayName = 'ResumeDialog';
const bx = '_screen_4fsd3_1',
  Ex = '_settings_4fsd3_10',
  Cx = '_hero_4fsd3_35',
  Tx = '_emojis_4fsd3_43',
  Mx = '_title_4fsd3_51',
  Rx = '_lead_4fsd3_61',
  _x = '_info_4fsd3_68',
  Ax = '_best_4fsd3_76',
  Ox = '_suspended_4fsd3_86',
  Dx = '_suspended_badge_4fsd3_97',
  wx = '_suspended_score_4fsd3_104',
  zx = '_info_label_4fsd3_110',
  Nx = '_info_value_4fsd3_117',
  Ux = '_actions_4fsd3_124',
  Bx = '_start_4fsd3_135',
  Lx = '_check_update_4fsd3_154',
  Hx = '_version_4fsd3_176',
  yt = {
    screen: bx,
    settings: Ex,
    hero: Cx,
    emojis: Tx,
    title: Mx,
    lead: Rx,
    info: _x,
    best: Ax,
    suspended: Ox,
    suspended_badge: Dx,
    suspended_score: wx,
    info_label: zx,
    info_value: Nx,
    actions: Ux,
    start: Bx,
    check_update: Lx,
    version: Hx,
  },
  jx = ({
    onStart: s,
    onCheckUpdate: E,
    isCheckingUpdate: b,
    bestScore: h,
    suspendedScore: o,
    onOpenSettings: l,
  }) => {
    const c = o !== null;
    return J.jsxs('div', {
      className: yt.screen,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'タイトル画面',
      children: [
        J.jsx('button', {
          type: 'button',
          className: yt.settings,
          onClick: l,
          'aria-label': '設定を開く',
          children: J.jsx('span', { 'aria-hidden': 'true', children: '⚙' }),
        }),
        J.jsxs('div', {
          className: yt.hero,
          children: [
            J.jsx('div', { className: yt.emojis, 'aria-hidden': 'true', children: '💖🍓🐱' }),
            J.jsx('h1', { className: yt.title, children: 'にゃんハートいちごパズル' }),
            J.jsxs('p', {
              className: yt.lead,
              children: [
                '同じアイテム同士をくっつけて',
                J.jsx('br', {}),
                'にゃんハートいちごをめざそう！',
              ],
            }),
          ],
        }),
        J.jsxs('div', {
          className: yt.info,
          children: [
            J.jsxs('div', {
              className: yt.best,
              'aria-label': `ベストスコア ${h}`,
              children: [
                J.jsx('span', { className: yt.info_label, children: 'BEST' }),
                J.jsx('span', { className: yt.info_value, children: h }),
              ],
            }),
            c
              ? J.jsxs('div', {
                  className: yt.suspended,
                  'aria-label': `中断データあり (スコア ${o})`,
                  children: [
                    J.jsx('span', { className: yt.suspended_badge, children: '中断データあり' }),
                    J.jsxs('span', {
                      className: yt.suspended_score,
                      children: [
                        J.jsx('span', { className: yt.info_label, children: 'SCORE' }),
                        J.jsx('span', { className: yt.info_value, children: o }),
                      ],
                    }),
                  ],
                })
              : null,
          ],
        }),
        J.jsxs('div', {
          className: yt.actions,
          children: [
            J.jsx('button', {
              type: 'button',
              className: yt.start,
              onClick: s,
              children: c ? '続きから始める' : 'スタート',
            }),
            J.jsx('button', {
              type: 'button',
              className: yt.check_update,
              onClick: E,
              disabled: b,
              children: b ? '確認中…' : '更新確認',
            }),
          ],
        }),
        J.jsxs('p', { className: yt.version, children: ['v', '1.0.40'] }),
      ],
    });
  },
  Gx = 'modulepreload',
  Yx = function (s) {
    return '/ochimono-game/' + s;
  },
  Hh = {},
  Vx = function (E, b, h) {
    let o = Promise.resolve();
    if (b && b.length > 0) {
      let c = function (g) {
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
      o = c(
        b.map((g) => {
          if (((g = Yx(g)), g in Hh)) return;
          Hh[g] = !0;
          const m = g.endsWith('.css'),
            v = m ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${g}"]${v}`)) return;
          const y = document.createElement('link');
          if (
            ((y.rel = m ? 'stylesheet' : Gx),
            m || (y.as = 'script'),
            (y.crossOrigin = ''),
            (y.href = g),
            f && y.setAttribute('nonce', f),
            document.head.appendChild(y),
            m)
          )
            return new Promise((r, S) => {
              (y.addEventListener('load', r),
                y.addEventListener('error', () => S(new Error(`Unable to preload CSS for ${g}`))));
            });
        })
      );
    }
    function l(c) {
      const d = new Event('vite:preloadError', { cancelable: !0 });
      if (((d.payload = c), window.dispatchEvent(d), !d.defaultPrevented)) throw c;
    }
    return o.then((c) => {
      for (const d of c || []) d.status === 'rejected' && l(d.reason);
      return E().catch(l);
    });
  };
function qx(s = {}) {
  const {
    immediate: E = !1,
    onNeedRefresh: b,
    onOfflineReady: h,
    onRegistered: o,
    onRegisteredSW: l,
    onRegisterError: c,
  } = s;
  let d, f, g;
  const m = async (y = !0) => {
    (await f, g == null || g());
  };
  async function v() {
    if ('serviceWorker' in navigator) {
      if (
        ((d = await Vx(async () => {
          const { Workbox: y } = await import('./workbox-window.prod.es5-BIl4cyR9.js');
          return { Workbox: y };
        }, [])
          .then(
            ({ Workbox: y }) =>
              new y('/ochimono-game/sw.js', { scope: '/ochimono-game/', type: 'classic' })
          )
          .catch((y) => {
            c == null || c(y);
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
              d.addEventListener('controlling', (S) => {
                S.isUpdate && window.location.reload();
              }),
            b == null || b());
        };
        (d.addEventListener('installed', (S) => {
          typeof S.isUpdate > 'u'
            ? typeof S.isExternal < 'u' && S.isExternal
              ? r()
              : !y && (h == null || h())
            : S.isUpdate || h == null || h();
        }),
          d.addEventListener('waiting', r));
      }
      d.register({ immediate: E })
        .then((y) => {
          l ? l('/ochimono-game/sw.js', y) : o == null || o(y);
        })
        .catch((y) => {
          c == null || c(y);
        });
    }
  }
  return ((f = v()), m);
}
function Xx(s = {}) {
  const {
      immediate: E = !0,
      onNeedRefresh: b,
      onOfflineReady: h,
      onRegistered: o,
      onRegisteredSW: l,
      onRegisterError: c,
    } = s,
    [d, f] = w.useState(!1),
    [g, m] = w.useState(!1),
    [v] = w.useState(() =>
      qx({
        immediate: E,
        onOfflineReady() {
          (m(!0), h == null || h());
        },
        onNeedRefresh() {
          (f(!0), b == null || b());
        },
        onRegistered: o,
        onRegisteredSW: l,
        onRegisterError: c,
      })
    );
  return { needRefresh: [d, f], offlineReady: [g, m], updateServiceWorker: v };
}
const Qx = 2500,
  Zx = 1500,
  Kx = () => {
    const s = w.useRef(null),
      {
        needRefresh: [E],
        updateServiceWorker: b,
      } = Xx({
        onRegisteredSW: (y, r) => {
          s.current = r ?? null;
        },
      }),
      [h, o] = w.useState(!1),
      [l, c] = w.useState(!1),
      d = w.useRef(null),
      f = w.useRef(E);
    w.useEffect(() => {
      f.current = E;
    }, [E]);
    const g = w.useCallback(async () => {
        if (!h && !f.current) {
          (o(!0), c(!1));
          try {
            const y = s.current;
            (y && (await y.update()),
              await new Promise((r) => {
                window.setTimeout(r, Zx);
              }));
          } catch {}
          (o(!1),
            f.current ||
              (c(!0),
              d.current !== null && window.clearTimeout(d.current),
              (d.current = window.setTimeout(() => {
                (c(!1), (d.current = null));
              }, Qx))));
        }
      }, [h]),
      m = w.useCallback(() => {
        b(!0);
      }, [b]);
    return {
      banner: E ? { kind: 'has-update' } : l ? { kind: 'up-to-date' } : null,
      checkForUpdate: g,
      isChecking: h,
      applyUpdate: m,
    };
  },
  kx = ({ onStart: s, onResume: E }) => {
    const [b] = w.useState(() => bv()),
      [h] = w.useState(() => to()),
      [o, l] = w.useState(() => Tv()),
      [c, d] = w.useState(() => Ev()),
      f = w.useCallback((O) => {
        (Pc(O), l(O));
      }, []),
      g = w.useCallback(() => {
        d((O) => {
          const _ = !O;
          return (Cv(_), _);
        });
      }, []),
      [m, v] = w.useState(!1),
      y = w.useCallback(() => v(!0), []),
      r = w.useCallback(() => v(!1), []),
      [S, p] = w.useState(null),
      C = w.useCallback(() => {
        const O = to();
        O ? p(O) : s();
      }, [s]),
      R = w.useCallback(() => {
        if (!S) return;
        const O = S;
        (p(null), E(O));
      }, [S, E]),
      z = w.useCallback(() => {
        (p(null), s());
      }, [s]),
      { banner: B, checkForUpdate: Y, isChecking: T, applyUpdate: D } = Kx();
    return J.jsxs('div', {
      className: Dn.layout,
      children: [
        J.jsx('main', {
          className: Dn.main,
          children: J.jsx('div', {
            className: Dn.field_placeholder,
            children: J.jsx(jx, {
              onStart: C,
              onCheckUpdate: Y,
              isCheckingUpdate: T,
              bestScore: b,
              suspendedScore: (h == null ? void 0 : h.score) ?? null,
              onOpenSettings: y,
            }),
          }),
        }),
        J.jsx(dx, { banner: B, onApply: D }),
        J.jsx(vo, {
          open: m,
          onClose: r,
          themeId: o,
          onChangeTheme: f,
          isSoundOn: c,
          onToggleSound: g,
          canSuspend: !1,
          onSuspend: () => {},
        }),
        J.jsx(Ov, { open: S !== null, onYes: R, onNo: z }),
      ],
    });
  },
  Jx = () => {
    const [s, E] = w.useState({ kind: 'pre-start' }),
      b = w.useCallback(() => {
        E({ kind: 'in-game', resume: null });
      }, []),
      h = w.useCallback((l) => {
        E({ kind: 'in-game', resume: l });
      }, []),
      o = w.useCallback(() => {
        E({ kind: 'pre-start' });
      }, []);
    return s.kind === 'pre-start'
      ? J.jsx(kx, { onStart: b, onResume: h })
      : J.jsx(rx, { initialResume: s.resume, onExitToTitle: o });
  },
  Fx = () => J.jsx('div', { className: Op.index, children: J.jsx(Jx, {}) }),
  $x = () => J.jsx('div', { children: J.jsx('h1', { children: 'Not Found' }) });
function Wx() {
  return J.jsxs(Jy, {
    children: [
      J.jsx(Fc, { path: '/', element: J.jsx(Fx, {}) }),
      J.jsx(Fc, { path: '*', element: J.jsx($x, {}) }),
    ],
  });
}
const Dv = document.getElementById('root');
if (!Dv) throw new Error('Failed to find #root element');
$0.createRoot(Dv).render(J.jsx(pp, { basename: '/ochimono-game', children: J.jsx(Wx, {}) }));
