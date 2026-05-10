function V0(s, E) {
  for (var b = 0; b < E.length; b++) {
    const h = E[b];
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
  function b(c) {
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
    const l = b(c);
    fetch(c.href, l);
  }
})();
var sh =
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
var Dc = { exports: {} },
  Ni = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ch;
function q0() {
  if (ch) return Ni;
  ch = 1;
  var s = Symbol.for('react.transitional.element'),
    E = Symbol.for('react.fragment');
  function b(h, c, l) {
    var o = null;
    if ((l !== void 0 && (o = '' + l), c.key !== void 0 && (o = '' + c.key), 'key' in c)) {
      l = {};
      for (var d in c) d !== 'key' && (l[d] = c[d]);
    } else l = c;
    return ((c = l.ref), { $$typeof: s, type: h, key: o, ref: c !== void 0 ? c : null, props: l });
  }
  return ((Ni.Fragment = E), (Ni.jsx = b), (Ni.jsxs = b), Ni);
}
var oh;
function X0() {
  return (oh || ((oh = 1), (Dc.exports = q0())), Dc.exports);
}
var J = X0(),
  wc = { exports: {} },
  Ui = {},
  zc = { exports: {} },
  Nc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fh;
function Q0() {
  return (
    fh ||
      ((fh = 1),
      (function (s) {
        function E(A, U) {
          var q = A.length;
          A.push(U);
          e: for (; 0 < q; ) {
            var W = (q - 1) >>> 1,
              le = A[W];
            if (0 < c(le, U)) ((A[W] = U), (A[q] = le), (q = W));
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
            e: for (var W = 0, le = A.length, N = le >>> 1; W < N; ) {
              var Z = 2 * (W + 1) - 1,
                P = A[Z],
                ue = Z + 1,
                se = A[ue];
              if (0 > c(P, q))
                ue < le && 0 > c(se, P)
                  ? ((A[W] = se), (A[ue] = q), (W = ue))
                  : ((A[W] = P), (A[Z] = q), (W = Z));
              else if (ue < le && 0 > c(se, q)) ((A[W] = se), (A[ue] = q), (W = ue));
              else break e;
            }
          }
          return U;
        }
        function c(A, U) {
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
          S = !1,
          p = !1,
          C = !1,
          R = typeof setTimeout == 'function' ? setTimeout : null,
          z = typeof clearTimeout == 'function' ? clearTimeout : null,
          L = typeof setImmediate < 'u' ? setImmediate : null;
        function G(A) {
          for (var U = b(g); U !== null; ) {
            if (U.callback === null) h(g);
            else if (U.startTime <= A) (h(g), (U.sortIndex = U.expirationTime), E(f, U));
            else break;
            U = b(g);
          }
        }
        function T(A) {
          if (((p = !1), G(A), !S))
            if (b(f) !== null) ((S = !0), O || ((O = !0), V()));
            else {
              var U = b(g);
              U !== null && ae(T, U.startTime - A);
            }
        }
        var O = !1,
          D = -1,
          _ = 5,
          H = -1;
        function B() {
          return C ? !0 : !(s.unstable_now() - H < _);
        }
        function Y() {
          if (((C = !1), O)) {
            var A = s.unstable_now();
            H = A;
            var U = !0;
            try {
              e: {
                ((S = !1), p && ((p = !1), z(D), (D = -1)), (r = !0));
                var q = y;
                try {
                  t: {
                    for (G(A), v = b(f); v !== null && !(v.expirationTime > A && B()); ) {
                      var W = v.callback;
                      if (typeof W == 'function') {
                        ((v.callback = null), (y = v.priorityLevel));
                        var le = W(v.expirationTime <= A);
                        if (((A = s.unstable_now()), typeof le == 'function')) {
                          ((v.callback = le), G(A), (U = !0));
                          break t;
                        }
                        (v === b(f) && h(f), G(A));
                      } else h(f);
                      v = b(f);
                    }
                    if (v !== null) U = !0;
                    else {
                      var N = b(g);
                      (N !== null && ae(T, N.startTime - A), (U = !1));
                    }
                  }
                  break e;
                } finally {
                  ((v = null), (y = q), (r = !1));
                }
                U = void 0;
              }
            } finally {
              U ? V() : (O = !1);
            }
          }
        }
        var V;
        if (typeof L == 'function')
          V = function () {
            L(Y);
          };
        else if (typeof MessageChannel < 'u') {
          var $ = new MessageChannel(),
            ie = $.port2;
          (($.port1.onmessage = Y),
            (V = function () {
              ie.postMessage(null);
            }));
        } else
          V = function () {
            R(Y, 0);
          };
        function ae(A, U) {
          D = R(function () {
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
            var W = s.unstable_now();
            switch (
              (typeof q == 'object' && q !== null
                ? ((q = q.delay), (q = typeof q == 'number' && 0 < q ? W + q : W))
                : (q = W),
              A)
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
              (A = {
                id: m++,
                callback: U,
                priorityLevel: A,
                startTime: q,
                expirationTime: le,
                sortIndex: -1,
              }),
              q > W
                ? ((A.sortIndex = q),
                  E(g, A),
                  b(f) === null && A === b(g) && (p ? (z(D), (D = -1)) : (p = !0), ae(T, q - W)))
                : ((A.sortIndex = le), E(f, A), S || r || ((S = !0), O || ((O = !0), V()))),
              A
            );
          }),
          (s.unstable_shouldYield = B),
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
      })(Nc)),
    Nc
  );
}
var dh;
function Z0() {
  return (dh || ((dh = 1), (zc.exports = Q0())), zc.exports);
}
var Uc = { exports: {} },
  be = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mh;
function K0() {
  if (mh) return be;
  mh = 1;
  var s = Symbol.for('react.transitional.element'),
    E = Symbol.for('react.portal'),
    b = Symbol.for('react.fragment'),
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
  function L(N, Z, P) {
    ((this.props = N), (this.context = Z), (this.refs = C), (this.updater = P || S));
  }
  var G = (L.prototype = new z());
  ((G.constructor = L), p(G, R.prototype), (G.isPureReactComponent = !0));
  var T = Array.isArray;
  function O() {}
  var D = { H: null, A: null, T: null, S: null },
    _ = Object.prototype.hasOwnProperty;
  function H(N, Z, P) {
    var ue = P.ref;
    return { $$typeof: s, type: N, key: Z, ref: ue !== void 0 ? ue : null, props: P };
  }
  function B(N, Z) {
    return H(N.type, Z, N.props);
  }
  function Y(N) {
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
  var $ = /\/+/g;
  function ie(N, Z) {
    return typeof N == 'object' && N !== null && N.key != null ? V('' + N.key) : Z.toString(36);
  }
  function ae(N) {
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
  function A(N, Z, P, ue, se) {
    var ce = typeof N;
    (ce === 'undefined' || ce === 'boolean') && (N = null);
    var ve = !1;
    if (N === null) ve = !0;
    else
      switch (ce) {
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
              return ((ve = N._init), A(ve(N._payload), Z, P, ue, se));
          }
      }
    if (ve)
      return (
        (se = se(N)),
        (ve = ue === '' ? '.' + ie(N, 0) : ue),
        T(se)
          ? ((P = ''),
            ve != null && (P = ve.replace($, '$&/') + '/'),
            A(se, Z, P, '', function (Le) {
              return Le;
            }))
          : se != null &&
            (Y(se) &&
              (se = B(
                se,
                P +
                  (se.key == null || (N && N.key === se.key)
                    ? ''
                    : ('' + se.key).replace($, '$&/') + '/') +
                  ve
              )),
            Z.push(se)),
        1
      );
    ve = 0;
    var xe = ue === '' ? '.' : ue + ':';
    if (T(N))
      for (var Be = 0; Be < N.length; Be++)
        ((ue = N[Be]), (ce = xe + ie(ue, Be)), (ve += A(ue, Z, P, ce, se)));
    else if (((Be = r(N)), typeof Be == 'function'))
      for (N = Be.call(N), Be = 0; !(ue = N.next()).done; )
        ((ue = ue.value), (ce = xe + ie(ue, Be++)), (ve += A(ue, Z, P, ce, se)));
    else if (ce === 'object') {
      if (typeof N.then == 'function') return A(ae(N), Z, P, ue, se);
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
      se = 0;
    return (
      A(N, ue, '', '', function (ce) {
        return Z.call(P, ce, se++);
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
  var W =
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
    le = {
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
        if (!Y(N))
          throw Error('React.Children.only expected to receive a single React element child.');
        return N;
      },
    };
  return (
    (be.Activity = v),
    (be.Children = le),
    (be.Component = R),
    (be.Fragment = b),
    (be.Profiler = c),
    (be.PureComponent = L),
    (be.StrictMode = h),
    (be.Suspense = f),
    (be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D),
    (be.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (N) {
        return D.H.useMemoCache(N);
      },
    }),
    (be.cache = function (N) {
      return function () {
        return N.apply(null, arguments);
      };
    }),
    (be.cacheSignal = function () {
      return null;
    }),
    (be.cloneElement = function (N, Z, P) {
      if (N == null) throw Error('The argument must be a React element, but you passed ' + N + '.');
      var ue = p({}, N.props),
        se = N.key;
      if (Z != null)
        for (ce in (Z.key !== void 0 && (se = '' + Z.key), Z))
          !_.call(Z, ce) ||
            ce === 'key' ||
            ce === '__self' ||
            ce === '__source' ||
            (ce === 'ref' && Z.ref === void 0) ||
            (ue[ce] = Z[ce]);
      var ce = arguments.length - 2;
      if (ce === 1) ue.children = P;
      else if (1 < ce) {
        for (var ve = Array(ce), xe = 0; xe < ce; xe++) ve[xe] = arguments[xe + 2];
        ue.children = ve;
      }
      return H(N.type, se, ue);
    }),
    (be.createContext = function (N) {
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
    (be.createElement = function (N, Z, P) {
      var ue,
        se = {},
        ce = null;
      if (Z != null)
        for (ue in (Z.key !== void 0 && (ce = '' + Z.key), Z))
          _.call(Z, ue) && ue !== 'key' && ue !== '__self' && ue !== '__source' && (se[ue] = Z[ue]);
      var ve = arguments.length - 2;
      if (ve === 1) se.children = P;
      else if (1 < ve) {
        for (var xe = Array(ve), Be = 0; Be < ve; Be++) xe[Be] = arguments[Be + 2];
        se.children = xe;
      }
      if (N && N.defaultProps)
        for (ue in ((ve = N.defaultProps), ve)) se[ue] === void 0 && (se[ue] = ve[ue]);
      return H(N, ce, se);
    }),
    (be.createRef = function () {
      return { current: null };
    }),
    (be.forwardRef = function (N) {
      return { $$typeof: d, render: N };
    }),
    (be.isValidElement = Y),
    (be.lazy = function (N) {
      return { $$typeof: m, _payload: { _status: -1, _result: N }, _init: q };
    }),
    (be.memo = function (N, Z) {
      return { $$typeof: g, type: N, compare: Z === void 0 ? null : Z };
    }),
    (be.startTransition = function (N) {
      var Z = D.T,
        P = {};
      D.T = P;
      try {
        var ue = N(),
          se = D.S;
        (se !== null && se(P, ue),
          typeof ue == 'object' && ue !== null && typeof ue.then == 'function' && ue.then(O, W));
      } catch (ce) {
        W(ce);
      } finally {
        (Z !== null && P.types !== null && (Z.types = P.types), (D.T = Z));
      }
    }),
    (be.unstable_useCacheRefresh = function () {
      return D.H.useCacheRefresh();
    }),
    (be.use = function (N) {
      return D.H.use(N);
    }),
    (be.useActionState = function (N, Z, P) {
      return D.H.useActionState(N, Z, P);
    }),
    (be.useCallback = function (N, Z) {
      return D.H.useCallback(N, Z);
    }),
    (be.useContext = function (N) {
      return D.H.useContext(N);
    }),
    (be.useDebugValue = function () {}),
    (be.useDeferredValue = function (N, Z) {
      return D.H.useDeferredValue(N, Z);
    }),
    (be.useEffect = function (N, Z) {
      return D.H.useEffect(N, Z);
    }),
    (be.useEffectEvent = function (N) {
      return D.H.useEffectEvent(N);
    }),
    (be.useId = function () {
      return D.H.useId();
    }),
    (be.useImperativeHandle = function (N, Z, P) {
      return D.H.useImperativeHandle(N, Z, P);
    }),
    (be.useInsertionEffect = function (N, Z) {
      return D.H.useInsertionEffect(N, Z);
    }),
    (be.useLayoutEffect = function (N, Z) {
      return D.H.useLayoutEffect(N, Z);
    }),
    (be.useMemo = function (N, Z) {
      return D.H.useMemo(N, Z);
    }),
    (be.useOptimistic = function (N, Z) {
      return D.H.useOptimistic(N, Z);
    }),
    (be.useReducer = function (N, Z, P) {
      return D.H.useReducer(N, Z, P);
    }),
    (be.useRef = function (N) {
      return D.H.useRef(N);
    }),
    (be.useState = function (N) {
      return D.H.useState(N);
    }),
    (be.useSyncExternalStore = function (N, Z, P) {
      return D.H.useSyncExternalStore(N, Z, P);
    }),
    (be.useTransition = function () {
      return D.H.useTransition();
    }),
    (be.version = '19.2.5'),
    be
  );
}
var hh;
function ao() {
  return (hh || ((hh = 1), (Uc.exports = K0())), Uc.exports);
}
var Bc = { exports: {} },
  At = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vh;
function k0() {
  if (vh) return At;
  vh = 1;
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
    (At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
    (At.createPortal = function (f, g) {
      var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)) throw Error(E(299));
      return l(f, g, null, m);
    }),
    (At.flushSync = function (f) {
      var g = o.T,
        m = h.p;
      try {
        if (((o.T = null), (h.p = 2), f)) return f();
      } finally {
        ((o.T = g), (h.p = m), h.d.f());
      }
    }),
    (At.preconnect = function (f, g) {
      typeof f == 'string' &&
        (g
          ? ((g = g.crossOrigin),
            (g = typeof g == 'string' ? (g === 'use-credentials' ? g : '') : void 0))
          : (g = null),
        h.d.C(f, g));
    }),
    (At.prefetchDNS = function (f) {
      typeof f == 'string' && h.d.D(f);
    }),
    (At.preinit = function (f, g) {
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
    (At.preinitModule = function (f, g) {
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
    (At.preload = function (f, g) {
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
    (At.preloadModule = function (f, g) {
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
    (At.requestFormReset = function (f) {
      h.d.r(f);
    }),
    (At.unstable_batchedUpdates = function (f, g) {
      return f(g);
    }),
    (At.useFormState = function (f, g, m) {
      return o.H.useFormState(f, g, m);
    }),
    (At.useFormStatus = function () {
      return o.H.useHostTransitionStatus();
    }),
    (At.version = '19.2.5'),
    At
  );
}
var gh;
function J0() {
  if (gh) return Bc.exports;
  gh = 1;
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
  return (s(), (Bc.exports = k0()), Bc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yh;
function F0() {
  if (yh) return Ui;
  yh = 1;
  var s = Z0(),
    E = ao(),
    b = J0();
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
    L = Symbol.for('react.context'),
    G = Symbol.for('react.forward_ref'),
    T = Symbol.for('react.suspense'),
    O = Symbol.for('react.suspense_list'),
    D = Symbol.for('react.memo'),
    _ = Symbol.for('react.lazy'),
    H = Symbol.for('react.activity'),
    B = Symbol.for('react.memo_cache_sentinel'),
    Y = Symbol.iterator;
  function V(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (Y && e[Y]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var $ = Symbol.for('react.client.reference');
  function ie(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === $ ? null : e.displayName || e.name || null;
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
      case O:
        return 'SuspenseList';
      case H:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case S:
          return 'Portal';
        case L:
          return e.displayName || 'Context';
        case z:
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
        case _:
          ((t = e._payload), (e = e._init));
          try {
            return ie(e(t));
          } catch {}
      }
    return null;
  }
  var ae = Array.isArray,
    A = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = { pending: !1, data: null, method: null, action: null },
    W = [],
    le = -1;
  function N(e) {
    return { current: e };
  }
  function Z(e) {
    0 > le || ((e.current = W[le]), (W[le] = null), le--);
  }
  function P(e, t) {
    (le++, (W[le] = e.current), (e.current = t));
  }
  var ue = N(null),
    se = N(null),
    ce = N(null),
    ve = N(null);
  function xe(e, t) {
    switch ((P(ce, t), P(se, e), P(ue, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? wm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = wm(t)), (e = zm(t, e)));
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
  function Be() {
    (Z(ue), Z(se), Z(ce));
  }
  function Le(e) {
    e.memoizedState !== null && P(ve, e);
    var t = ue.current,
      n = zm(t, e.type);
    t !== n && (P(se, e), P(ue, n));
  }
  function Ye(e) {
    (se.current === e && (Z(ue), Z(se)), ve.current === e && (Z(ve), (Oi._currentValue = q)));
  }
  var Ve, We;
  function Qe(e) {
    if (Ve === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((Ve = (t && t[1]) || ''),
          (We =
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
      We
    );
  }
  var fe = !1;
  function wt(e, t) {
    if (!e || fe) return '';
    fe = !0;
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
                } catch (I) {
                  var F = I;
                }
                Reflect.construct(e, [], ne);
              } else {
                try {
                  ne.call();
                } catch (I) {
                  F = I;
                }
                e.call(ne.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (I) {
                F = I;
              }
              (ne = e()) && typeof ne.catch == 'function' && ne.catch(function () {});
            }
          } catch (I) {
            if (I && F && typeof I.stack == 'string') return [I.stack, F.stack];
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
        var j = x.split(`
`),
          k = M.split(`
`);
        for (i = a = 0; a < j.length && !j[a].includes('DetermineComponentFrameRoot'); ) a++;
        for (; i < k.length && !k[i].includes('DetermineComponentFrameRoot'); ) i++;
        if (a === j.length || i === k.length)
          for (a = j.length - 1, i = k.length - 1; 1 <= a && 0 <= i && j[a] !== k[i]; ) i--;
        for (; 1 <= a && 0 <= i; a--, i--)
          if (j[a] !== k[i]) {
            if (a !== 1 || i !== 1)
              do
                if ((a--, i--, 0 > i || j[a] !== k[i])) {
                  var ee =
                    `
` + j[a].replace(' at new ', ' at ');
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
      ((fe = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : '') ? Qe(n) : '';
  }
  function pe(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Qe(e.type);
      case 16:
        return Qe('Lazy');
      case 13:
        return e.child !== t && t !== null ? Qe('Suspense Fallback') : Qe('Suspense');
      case 19:
        return Qe('SuspenseList');
      case 0:
      case 15:
        return wt(e.type, !1);
      case 11:
        return wt(e.type.render, !1);
      case 1:
        return wt(e.type, !0);
      case 31:
        return Qe('Activity');
      default:
        return '';
    }
  }
  function qe(e) {
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
  var St = Object.prototype.hasOwnProperty,
    An = s.unstable_scheduleCallback,
    on = s.unstable_cancelCallback,
    zt = s.unstable_shouldYield,
    el = s.unstable_requestPaint,
    ut = s.unstable_now,
    Nt = s.unstable_getCurrentPriorityLevel,
    ke = s.unstable_ImmediatePriority,
    tl = s.unstable_UserBlockingPriority,
    Ft = s.unstable_NormalPriority,
    On = s.unstable_LowPriority,
    Dn = s.unstable_IdlePriority,
    xn = s.log,
    Ua = s.unstable_setDisableYieldValue,
    ra = null,
    _t = null;
  function fn(e) {
    if ((typeof xn == 'function' && Ua(e), _t && typeof _t.setStrictMode == 'function'))
      try {
        _t.setStrictMode(ra, e);
      } catch {}
  }
  var Ot = Math.clz32 ? Math.clz32 : br,
    Sr = Math.log,
    xr = Math.LN2;
  function br(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Sr(e) / xr) | 0)) | 0);
  }
  var nl = 256,
    dn = 262144,
    al = 4194304;
  function mn(e) {
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
  function ll(e, t, n) {
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
            ? (i = mn(a))
            : ((x &= M), x !== 0 ? (i = mn(x)) : n || ((n = M & ~e), n !== 0 && (i = mn(n)))))
        : ((M = a & ~u),
          M !== 0
            ? (i = mn(M))
            : x !== 0
              ? (i = mn(x))
              : n || ((n = a & ~e), n !== 0 && (i = mn(n)))),
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
  function Ba(e, t) {
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
  function Zi() {
    var e = al;
    return ((al <<= 1), (al & 62914560) === 0 && (al = 4194304), e);
  }
  function re(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ge(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function we(e, t, n, a, i, u) {
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
      j = e.expirationTimes,
      k = e.hiddenUpdates;
    for (n = x & ~n; 0 < n; ) {
      var ee = 31 - Ot(n),
        ne = 1 << ee;
      ((M[ee] = 0), (j[ee] = -1));
      var F = k[ee];
      if (F !== null)
        for (k[ee] = null, ee = 0; ee < F.length; ee++) {
          var I = F[ee];
          I !== null && (I.lane &= -536870913);
        }
      n &= ~ne;
    }
    (a !== 0 && Ee(e, a, 0),
      u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(x & ~t)));
  }
  function Ee(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - Ot(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function me(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var a = 31 - Ot(n),
        i = 1 << a;
      ((i & t) | (e[a] & t) && (e[a] |= t), (n &= ~i));
    }
  }
  function Se(e, t) {
    var n = t & -t;
    return ((n = (n & 42) !== 0 ? 1 : ze(n)), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n);
  }
  function ze(e) {
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
  function tt(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function He() {
    var e = U.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : th(e.type));
  }
  function nt(e, t) {
    var n = U.p;
    try {
      return ((U.p = e), t());
    } finally {
      U.p = n;
    }
  }
  var Ne = Math.random().toString(36).slice(2),
    Re = '__reactFiber$' + Ne,
    Ie = '__reactProps$' + Ne,
    Pe = '__reactContainer$' + Ne,
    xt = '__reactEvents$' + Ne,
    wn = '__reactListeners$' + Ne,
    hn = '__reactHandles$' + Ne,
    vn = '__reactResources$' + Ne,
    bn = '__reactMarker$' + Ne;
  function Ql(e) {
    (delete e[Re], delete e[Ie], delete e[xt], delete e[wn], delete e[hn]);
  }
  function zn(e) {
    var t = e[Re];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Pe] || n[Re])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Gm(e); e !== null; ) {
            if ((n = e[Re])) return n;
            e = Gm(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Nn(e) {
    if ((e = e[Re] || e[Pe])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Zl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(h(33));
  }
  function il(e) {
    var t = e[vn];
    return (t || (t = e[vn] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function bt(e) {
    e[bn] = !0;
  }
  var po = new Set(),
    So = {};
  function La(e, t) {
    (ul(e, t), ul(e + 'Capture', t));
  }
  function ul(e, t) {
    for (So[e] = t, e = 0; e < t.length; e++) po.add(t[e]);
  }
  var zv = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    xo = {},
    bo = {};
  function Nv(e) {
    return St.call(bo, e)
      ? !0
      : St.call(xo, e)
        ? !1
        : zv.test(e)
          ? (bo[e] = !0)
          : ((xo[e] = !0), !1);
  }
  function Ki(e, t, n) {
    if (Nv(t))
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
  function Un(e, t, n, a) {
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
  function $t(e) {
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
  function Eo(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Uv(e, t, n) {
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
  function Cr(e) {
    if (!e._valueTracker) {
      var t = Eo(e) ? 'checked' : 'value';
      e._valueTracker = Uv(e, t, '' + e[t]);
    }
  }
  function Co(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      a = '';
    return (
      e && (a = Eo(e) ? (e.checked ? 'true' : 'false') : e.value),
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
  var Bv = /[\n"\\]/g;
  function Wt(e) {
    return e.replace(Bv, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Tr(e, t, n, a, i, u, x, M) {
    ((e.name = ''),
      x != null && typeof x != 'function' && typeof x != 'symbol' && typeof x != 'boolean'
        ? (e.type = x)
        : e.removeAttribute('type'),
      t != null
        ? x === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + $t(t))
          : e.value !== '' + $t(t) && (e.value = '' + $t(t))
        : (x !== 'submit' && x !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Mr(e, x, $t(t))
        : n != null
          ? Mr(e, x, $t(n))
          : a != null && e.removeAttribute('value'),
      i == null && u != null && (e.defaultChecked = !!u),
      i != null && (e.checked = i && typeof i != 'function' && typeof i != 'symbol'),
      M != null && typeof M != 'function' && typeof M != 'symbol' && typeof M != 'boolean'
        ? (e.name = '' + $t(M))
        : e.removeAttribute('name'));
  }
  function To(e, t, n, a, i, u, x, M) {
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
      ((n = n != null ? '' + $t(n) : ''),
        (t = t != null ? '' + $t(t) : n),
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
      Cr(e));
  }
  function Mr(e, t, n) {
    (t === 'number' && Ji(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n);
  }
  function rl(e, t, n, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        ((i = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && a && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + $t(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          ((e[i].selected = !0), a && (e[i].defaultSelected = !0));
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Mo(e, t, n) {
    if (t != null && ((t = '' + $t(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + $t(n) : '';
  }
  function Ro(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(h(92));
        if (ae(a)) {
          if (1 < a.length) throw Error(h(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ''), (t = n));
    }
    ((n = $t(t)),
      (e.defaultValue = n),
      (a = e.textContent),
      a === n && a !== '' && a !== null && (e.value = a),
      Cr(e));
  }
  function sl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Lv = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function _o(e, t, n) {
    var a = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : a
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || Lv.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function Ao(e, t, n) {
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
      for (var i in t) ((a = t[i]), t.hasOwnProperty(i) && n[i] !== a && _o(e, i, a));
    } else for (var u in t) t.hasOwnProperty(u) && _o(e, u, t[u]);
  }
  function Rr(e) {
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
  var Hv = new Map([
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
    jv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Fi(e) {
    return jv.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Bn() {}
  var _r = null;
  function Ar(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var cl = null,
    ol = null;
  function Oo(e) {
    var t = Nn(e);
    if (t && (e = t.stateNode)) {
      var n = e[Ie] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Tr(
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
              n = n.querySelectorAll('input[name="' + Wt('' + t) + '"][type="radio"]'), t = 0;
              t < n.length;
              t++
            ) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var i = a[Ie] || null;
                if (!i) throw Error(h(90));
                Tr(
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
            for (t = 0; t < n.length; t++) ((a = n[t]), a.form === e.form && Co(a));
          }
          break e;
        case 'textarea':
          Mo(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && rl(e, !!n.multiple, t, !1));
      }
    }
  }
  var Or = !1;
  function Do(e, t, n) {
    if (Or) return e(t, n);
    Or = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Or = !1),
        (cl !== null || ol !== null) &&
          (Lu(), cl && ((t = cl), (e = ol), (ol = cl = null), Oo(t), e)))
      )
        for (t = 0; t < e.length; t++) Oo(e[t]);
    }
  }
  function Kl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[Ie] || null;
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
  var Ln = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Dr = !1;
  if (Ln)
    try {
      var kl = {};
      (Object.defineProperty(kl, 'passive', {
        get: function () {
          Dr = !0;
        },
      }),
        window.addEventListener('test', kl, kl),
        window.removeEventListener('test', kl, kl));
    } catch {
      Dr = !1;
    }
  var sa = null,
    wr = null,
    $i = null;
  function wo() {
    if ($i) return $i;
    var e,
      t = wr,
      n = t.length,
      a,
      i = 'value' in sa ? sa.value : sa.textContent,
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
  function zo() {
    return !1;
  }
  function Ut(e) {
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
          : zo),
        (this.isPropagationStopped = zo),
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
  var Ha = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Pi = Ut(Ha),
    Jl = v({}, Ha, { view: 0, detail: 0 }),
    Gv = Ut(Jl),
    zr,
    Nr,
    Fl,
    eu = v({}, Jl, {
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
      getModifierState: Br,
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
          : (e !== Fl &&
              (Fl && e.type === 'mousemove'
                ? ((zr = e.screenX - Fl.screenX), (Nr = e.screenY - Fl.screenY))
                : (Nr = zr = 0),
              (Fl = e)),
            zr);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Nr;
      },
    }),
    No = Ut(eu),
    Yv = v({}, eu, { dataTransfer: 0 }),
    Vv = Ut(Yv),
    qv = v({}, Jl, { relatedTarget: 0 }),
    Ur = Ut(qv),
    Xv = v({}, Ha, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qv = Ut(Xv),
    Zv = v({}, Ha, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Kv = Ut(Zv),
    kv = v({}, Ha, { data: 0 }),
    Uo = Ut(kv),
    Jv = {
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
    Fv = {
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
    $v = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Wv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $v[e]) ? !!t[e] : !1;
  }
  function Br() {
    return Wv;
  }
  var Iv = v({}, Jl, {
      key: function (e) {
        if (e.key) {
          var t = Jv[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Wi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Fv[e.keyCode] || 'Unidentified'
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
      getModifierState: Br,
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
    Pv = Ut(Iv),
    eg = v({}, eu, {
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
    Bo = Ut(eg),
    tg = v({}, Jl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Br,
    }),
    ng = Ut(tg),
    ag = v({}, Ha, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lg = Ut(ag),
    ig = v({}, eu, {
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
    ug = Ut(ig),
    rg = v({}, Ha, { newState: 0, oldState: 0 }),
    sg = Ut(rg),
    cg = [9, 13, 27, 32],
    Lr = Ln && 'CompositionEvent' in window,
    $l = null;
  Ln && 'documentMode' in document && ($l = document.documentMode);
  var og = Ln && 'TextEvent' in window && !$l,
    Lo = Ln && (!Lr || ($l && 8 < $l && 11 >= $l)),
    Ho = ' ',
    jo = !1;
  function Go(e, t) {
    switch (e) {
      case 'keyup':
        return cg.indexOf(t.keyCode) !== -1;
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
  function Yo(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var fl = !1;
  function fg(e, t) {
    switch (e) {
      case 'compositionend':
        return Yo(t);
      case 'keypress':
        return t.which !== 32 ? null : ((jo = !0), Ho);
      case 'textInput':
        return ((e = t.data), e === Ho && jo ? null : e);
      default:
        return null;
    }
  }
  function dg(e, t) {
    if (fl)
      return e === 'compositionend' || (!Lr && Go(e, t))
        ? ((e = wo()), ($i = wr = sa = null), (fl = !1), e)
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
        return Lo && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var mg = {
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
  function Vo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!mg[e.type] : t === 'textarea';
  }
  function qo(e, t, n, a) {
    (cl ? (ol ? ol.push(a) : (ol = [a])) : (cl = a),
      (t = Xu(t, 'onChange')),
      0 < t.length &&
        ((n = new Pi('onChange', 'change', null, n, a)), e.push({ event: n, listeners: t })));
  }
  var Wl = null,
    Il = null;
  function hg(e) {
    Mm(e, 0);
  }
  function tu(e) {
    var t = Zl(e);
    if (Co(t)) return e;
  }
  function Xo(e, t) {
    if (e === 'change') return t;
  }
  var Qo = !1;
  if (Ln) {
    var Hr;
    if (Ln) {
      var jr = 'oninput' in document;
      if (!jr) {
        var Zo = document.createElement('div');
        (Zo.setAttribute('oninput', 'return;'), (jr = typeof Zo.oninput == 'function'));
      }
      Hr = jr;
    } else Hr = !1;
    Qo = Hr && (!document.documentMode || 9 < document.documentMode);
  }
  function Ko() {
    Wl && (Wl.detachEvent('onpropertychange', ko), (Il = Wl = null));
  }
  function ko(e) {
    if (e.propertyName === 'value' && tu(Il)) {
      var t = [];
      (qo(t, Il, e, Ar(e)), Do(hg, t));
    }
  }
  function vg(e, t, n) {
    e === 'focusin'
      ? (Ko(), (Wl = t), (Il = n), Wl.attachEvent('onpropertychange', ko))
      : e === 'focusout' && Ko();
  }
  function gg(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return tu(Il);
  }
  function yg(e, t) {
    if (e === 'click') return tu(t);
  }
  function pg(e, t) {
    if (e === 'input' || e === 'change') return tu(t);
  }
  function Sg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Vt = typeof Object.is == 'function' ? Object.is : Sg;
  function Pl(e, t) {
    if (Vt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!St.call(t, i) || !Vt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Jo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Fo(e, t) {
    var n = Jo(e);
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
      n = Jo(n);
    }
  }
  function $o(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? $o(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Wo(e) {
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
  function Gr(e) {
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
  var xg = Ln && 'documentMode' in document && 11 >= document.documentMode,
    dl = null,
    Yr = null,
    ei = null,
    Vr = !1;
  function Io(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Vr ||
      dl == null ||
      dl !== Ji(a) ||
      ((a = dl),
      'selectionStart' in a && Gr(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (ei && Pl(ei, a)) ||
        ((ei = a),
        (a = Xu(Yr, 'onSelect')),
        0 < a.length &&
          ((t = new Pi('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: a }),
          (t.target = dl))));
  }
  function ja(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var ml = {
      animationend: ja('Animation', 'AnimationEnd'),
      animationiteration: ja('Animation', 'AnimationIteration'),
      animationstart: ja('Animation', 'AnimationStart'),
      transitionrun: ja('Transition', 'TransitionRun'),
      transitionstart: ja('Transition', 'TransitionStart'),
      transitioncancel: ja('Transition', 'TransitionCancel'),
      transitionend: ja('Transition', 'TransitionEnd'),
    },
    qr = {},
    Po = {};
  Ln &&
    ((Po = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ml.animationend.animation,
      delete ml.animationiteration.animation,
      delete ml.animationstart.animation),
    'TransitionEvent' in window || delete ml.transitionend.transition);
  function Ga(e) {
    if (qr[e]) return qr[e];
    if (!ml[e]) return e;
    var t = ml[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Po) return (qr[e] = t[n]);
    return e;
  }
  var ef = Ga('animationend'),
    tf = Ga('animationiteration'),
    nf = Ga('animationstart'),
    bg = Ga('transitionrun'),
    Eg = Ga('transitionstart'),
    Cg = Ga('transitioncancel'),
    af = Ga('transitionend'),
    lf = new Map(),
    Xr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  Xr.push('scrollEnd');
  function gn(e, t) {
    (lf.set(e, t), La(t, [e]));
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
    It = [],
    hl = 0,
    Qr = 0;
  function au() {
    for (var e = hl, t = (Qr = hl = 0); t < e; ) {
      var n = It[t];
      It[t++] = null;
      var a = It[t];
      It[t++] = null;
      var i = It[t];
      It[t++] = null;
      var u = It[t];
      if (((It[t++] = null), a !== null && i !== null)) {
        var x = a.pending;
        (x === null ? (i.next = i) : ((i.next = x.next), (x.next = i)), (a.pending = i));
      }
      u !== 0 && uf(n, i, u);
    }
  }
  function lu(e, t, n, a) {
    ((It[hl++] = e),
      (It[hl++] = t),
      (It[hl++] = n),
      (It[hl++] = a),
      (Qr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function Zr(e, t, n, a) {
    return (lu(e, t, n, a), iu(e));
  }
  function Ya(e, t) {
    return (lu(e, null, null, t), iu(e));
  }
  function uf(e, t, n) {
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
    if (50 < Ei) throw ((Ei = 0), (ec = null), Error(h(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var vl = {};
  function Tg(e, t, n, a) {
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
  function qt(e, t, n, a) {
    return new Tg(e, t, n, a);
  }
  function Kr(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Hn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = qt(e.tag, t, e.key, e.mode)),
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
  function rf(e, t) {
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
    if (((a = e), typeof e == 'function')) Kr(e) && (x = 1);
    else if (typeof e == 'string')
      x = O0(e, n, ue.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case H:
          return ((e = qt(31, n, t, i)), (e.elementType = H), (e.lanes = u), e);
        case p:
          return Va(n.children, i, u, t);
        case C:
          ((x = 8), (i |= 24));
          break;
        case R:
          return ((e = qt(12, n, t, i | 2)), (e.elementType = R), (e.lanes = u), e);
        case T:
          return ((e = qt(13, n, t, i)), (e.elementType = T), (e.lanes = u), e);
        case O:
          return ((e = qt(19, n, t, i)), (e.elementType = O), (e.lanes = u), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case L:
                x = 10;
                break e;
              case z:
                x = 9;
                break e;
              case G:
                x = 11;
                break e;
              case D:
                x = 14;
                break e;
              case _:
                ((x = 16), (a = null));
                break e;
            }
          ((x = 29), (n = Error(h(130, e === null ? 'null' : typeof e, ''))), (a = null));
      }
    return ((t = qt(x, n, t, i)), (t.elementType = e), (t.type = a), (t.lanes = u), t);
  }
  function Va(e, t, n, a) {
    return ((e = qt(7, e, a, t)), (e.lanes = n), e);
  }
  function kr(e, t, n) {
    return ((e = qt(6, e, null, t)), (e.lanes = n), e);
  }
  function sf(e) {
    var t = qt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Jr(e, t, n) {
    return (
      (t = qt(4, e.children !== null ? e.children : [], e.key, t)),
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
  function Pt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = cf.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: qe(t) }), cf.set(e, t), t);
    }
    return { value: e, source: t, stack: qe(t) };
  }
  var gl = [],
    yl = 0,
    ru = null,
    ti = 0,
    en = [],
    tn = 0,
    ca = null,
    En = 1,
    Cn = '';
  function jn(e, t) {
    ((gl[yl++] = ti), (gl[yl++] = ru), (ru = e), (ti = t));
  }
  function of(e, t, n) {
    ((en[tn++] = En), (en[tn++] = Cn), (en[tn++] = ca), (ca = e));
    var a = En;
    e = Cn;
    var i = 32 - Ot(a) - 1;
    ((a &= ~(1 << i)), (n += 1));
    var u = 32 - Ot(t) + i;
    if (30 < u) {
      var x = i - (i % 5);
      ((u = (a & ((1 << x) - 1)).toString(32)),
        (a >>= x),
        (i -= x),
        (En = (1 << (32 - Ot(t) + i)) | (n << i) | a),
        (Cn = u + e));
    } else ((En = (1 << u) | (n << i) | a), (Cn = e));
  }
  function Fr(e) {
    e.return !== null && (jn(e, 1), of(e, 1, 0));
  }
  function $r(e) {
    for (; e === ru; ) ((ru = gl[--yl]), (gl[yl] = null), (ti = gl[--yl]), (gl[yl] = null));
    for (; e === ca; )
      ((ca = en[--tn]),
        (en[tn] = null),
        (Cn = en[--tn]),
        (en[tn] = null),
        (En = en[--tn]),
        (en[tn] = null));
  }
  function ff(e, t) {
    ((en[tn++] = En), (en[tn++] = Cn), (en[tn++] = ca), (En = t.id), (Cn = t.overflow), (ca = e));
  }
  var Ct = null,
    at = null,
    Ue = !1,
    oa = null,
    nn = !1,
    Wr = Error(h(519));
  function fa(e) {
    var t = Error(
      h(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    );
    throw (ni(Pt(t, e)), Wr);
  }
  function df(e) {
    var t = e.stateNode,
      n = e.type,
      a = e.memoizedProps;
    switch (((t[Re] = e), (t[Ie] = a), n)) {
      case 'dialog':
        (Ae('cancel', t), Ae('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Ae('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < Ti.length; n++) Ae(Ti[n], t);
        break;
      case 'source':
        Ae('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Ae('error', t), Ae('load', t));
        break;
      case 'details':
        Ae('toggle', t);
        break;
      case 'input':
        (Ae('invalid', t),
          To(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
        break;
      case 'select':
        Ae('invalid', t);
        break;
      case 'textarea':
        (Ae('invalid', t), Ro(t, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      a.suppressHydrationWarning === !0 ||
      Om(t.textContent, n)
        ? (a.popover != null && (Ae('beforetoggle', t), Ae('toggle', t)),
          a.onScroll != null && Ae('scroll', t),
          a.onScrollEnd != null && Ae('scrollend', t),
          a.onClick != null && (t.onclick = Bn),
          (t = !0))
        : (t = !1),
      t || fa(e, !0));
  }
  function mf(e) {
    for (Ct = e.return; Ct; )
      switch (Ct.tag) {
        case 5:
        case 31:
        case 13:
          nn = !1;
          return;
        case 27:
        case 3:
          nn = !0;
          return;
        default:
          Ct = Ct.return;
      }
  }
  function pl(e) {
    if (e !== Ct) return !1;
    if (!Ue) return (mf(e), (Ue = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type), (n = !(n !== 'form' && n !== 'button') || vc(e.type, e.memoizedProps))),
        (n = !n)),
      n && at && fa(e),
      mf(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(h(317));
      at = jm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(h(317));
      at = jm(e);
    } else
      t === 27
        ? ((t = at), Ma(e.type) ? ((e = xc), (xc = null), (at = e)) : (at = t))
        : (at = Ct ? ln(e.stateNode.nextSibling) : null);
    return !0;
  }
  function qa() {
    ((at = Ct = null), (Ue = !1));
  }
  function Ir() {
    var e = oa;
    return (e !== null && (jt === null ? (jt = e) : jt.push.apply(jt, e), (oa = null)), e);
  }
  function ni(e) {
    oa === null ? (oa = [e]) : oa.push(e);
  }
  var Pr = N(null),
    Xa = null,
    Gn = null;
  function da(e, t, n) {
    (P(Pr, t._currentValue), (t._currentValue = n));
  }
  function Yn(e) {
    ((e._currentValue = Pr.current), Z(Pr));
  }
  function es(e, t, n) {
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
  function ts(e, t, n, a) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var u = i.dependencies;
      if (u !== null) {
        var x = i.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var M = u;
          u = i;
          for (var j = 0; j < t.length; j++)
            if (M.context === t[j]) {
              ((u.lanes |= n),
                (M = u.alternate),
                M !== null && (M.lanes |= n),
                es(u.return, n, e),
                a || (x = null));
              break e;
            }
          u = M.next;
        }
      } else if (i.tag === 18) {
        if (((x = i.return), x === null)) throw Error(h(341));
        ((x.lanes |= n), (u = x.alternate), u !== null && (u.lanes |= n), es(x, n, e), (x = null));
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
  function Sl(e, t, n, a) {
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
          Vt(i.pendingProps.value, x.value) || (e !== null ? e.push(M) : (e = [M]));
        }
      } else if (i === ve.current) {
        if (((x = i.alternate), x === null)) throw Error(h(387));
        x.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(Oi) : (e = [Oi]));
      }
      i = i.return;
    }
    (e !== null && ts(t, e, n, a), (t.flags |= 262144));
  }
  function su(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Vt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Qa(e) {
    ((Xa = e), (Gn = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function Tt(e) {
    return hf(Xa, e);
  }
  function cu(e, t) {
    return (Xa === null && Qa(e), hf(e, t));
  }
  function hf(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), Gn === null)) {
      if (e === null) throw Error(h(308));
      ((Gn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else Gn = Gn.next = t;
    return n;
  }
  var Mg =
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
    Rg = s.unstable_scheduleCallback,
    _g = s.unstable_NormalPriority,
    mt = {
      $$typeof: L,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ns() {
    return { controller: new Mg(), data: new Map(), refCount: 0 };
  }
  function ai(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Rg(_g, function () {
          e.controller.abort();
        }));
  }
  var li = null,
    as = 0,
    xl = 0,
    bl = null;
  function Ag(e, t) {
    if (li === null) {
      var n = (li = []);
      ((as = 0),
        (xl = uc()),
        (bl = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (as++, t.then(vf, vf), t);
  }
  function vf() {
    if (--as === 0 && li !== null) {
      bl !== null && (bl.status = 'fulfilled');
      var e = li;
      ((li = null), (xl = 0), (bl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Og(e, t) {
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
  var gf = A.S;
  A.S = function (e, t) {
    ((Pd = ut()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && Ag(e, t),
      gf !== null && gf(e, t));
  };
  var Za = N(null);
  function ls() {
    var e = Za.current;
    return e !== null ? e : et.pooledCache;
  }
  function ou(e, t) {
    t === null ? P(Za, Za.current) : P(Za, t.pool);
  }
  function yf() {
    var e = ls();
    return e === null ? null : { parent: mt._currentValue, pool: e };
  }
  var El = Error(h(460)),
    is = Error(h(474)),
    fu = Error(h(542)),
    du = { then: function () {} };
  function pf(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Sf(e, t, n) {
    switch (
      ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(Bn, Bn), (t = n)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), bf(e), e);
      default:
        if (typeof t.status == 'string') t.then(Bn, Bn);
        else {
          if (((e = et), e !== null && 100 < e.shellSuspendCounter)) throw Error(h(482));
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
            throw ((e = t.reason), bf(e), e);
        }
        throw ((ka = t), El);
    }
  }
  function Ka(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((ka = n), El) : n;
    }
  }
  var ka = null;
  function xf() {
    if (ka === null) throw Error(h(459));
    var e = ka;
    return ((ka = null), e);
  }
  function bf(e) {
    if (e === El || e === fu) throw Error(h(483));
  }
  var Cl = null,
    ii = 0;
  function mu(e) {
    var t = ii;
    return ((ii += 1), Cl === null && (Cl = []), Sf(Cl, e, t));
  }
  function ui(e, t) {
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
  function Ef(e) {
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
      return ((Q = Hn(Q, X)), (Q.index = 0), (Q.sibling = null), Q);
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
        ? ((X = kr(K, Q.mode, te)), (X.return = Q), X)
        : ((X = i(X, K)), (X.return = Q), X);
    }
    function j(Q, X, K, te) {
      var he = K.type;
      return he === p
        ? ee(Q, X, K.props.children, te, K.key)
        : X !== null &&
            (X.elementType === he ||
              (typeof he == 'object' && he !== null && he.$$typeof === _ && Ka(he) === X.type))
          ? ((X = i(X, K.props)), ui(X, K), (X.return = Q), X)
          : ((X = uu(K.type, K.key, K.props, null, Q.mode, te)), ui(X, K), (X.return = Q), X);
    }
    function k(Q, X, K, te) {
      return X === null ||
        X.tag !== 4 ||
        X.stateNode.containerInfo !== K.containerInfo ||
        X.stateNode.implementation !== K.implementation
        ? ((X = Jr(K, Q.mode, te)), (X.return = Q), X)
        : ((X = i(X, K.children || [])), (X.return = Q), X);
    }
    function ee(Q, X, K, te, he) {
      return X === null || X.tag !== 7
        ? ((X = Va(K, Q.mode, te, he)), (X.return = Q), X)
        : ((X = i(X, K)), (X.return = Q), X);
    }
    function ne(Q, X, K) {
      if ((typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint')
        return ((X = kr('' + X, Q.mode, K)), (X.return = Q), X);
      if (typeof X == 'object' && X !== null) {
        switch (X.$$typeof) {
          case r:
            return ((K = uu(X.type, X.key, X.props, null, Q.mode, K)), ui(K, X), (K.return = Q), K);
          case S:
            return ((X = Jr(X, Q.mode, K)), (X.return = Q), X);
          case _:
            return ((X = Ka(X)), ne(Q, X, K));
        }
        if (ae(X) || V(X)) return ((X = Va(X, Q.mode, K, null)), (X.return = Q), X);
        if (typeof X.then == 'function') return ne(Q, mu(X), K);
        if (X.$$typeof === L) return ne(Q, cu(Q, X), K);
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
            return K.key === he ? j(Q, X, K, te) : null;
          case S:
            return K.key === he ? k(Q, X, K, te) : null;
          case _:
            return ((K = Ka(K)), F(Q, X, K, te));
        }
        if (ae(K) || V(K)) return he !== null ? null : ee(Q, X, K, te, null);
        if (typeof K.then == 'function') return F(Q, X, mu(K), te);
        if (K.$$typeof === L) return F(Q, X, cu(Q, K), te);
        hu(Q, K);
      }
      return null;
    }
    function I(Q, X, K, te, he) {
      if ((typeof te == 'string' && te !== '') || typeof te == 'number' || typeof te == 'bigint')
        return ((Q = Q.get(K) || null), M(X, Q, '' + te, he));
      if (typeof te == 'object' && te !== null) {
        switch (te.$$typeof) {
          case r:
            return ((Q = Q.get(te.key === null ? K : te.key) || null), j(X, Q, te, he));
          case S:
            return ((Q = Q.get(te.key === null ? K : te.key) || null), k(X, Q, te, he));
          case _:
            return ((te = Ka(te)), I(Q, X, K, te, he));
        }
        if (ae(te) || V(te)) return ((Q = Q.get(K) || null), ee(X, Q, te, he, null));
        if (typeof te.then == 'function') return I(Q, X, K, mu(te), he);
        if (te.$$typeof === L) return I(Q, X, K, cu(X, te), he);
        hu(X, te);
      }
      return null;
    }
    function oe(Q, X, K, te) {
      for (
        var he = null, je = null, de = X, Me = (X = 0), De = null;
        de !== null && Me < K.length;
        Me++
      ) {
        de.index > Me ? ((De = de), (de = null)) : (De = de.sibling);
        var Ge = F(Q, de, K[Me], te);
        if (Ge === null) {
          de === null && (de = De);
          break;
        }
        (e && de && Ge.alternate === null && t(Q, de),
          (X = u(Ge, X, Me)),
          je === null ? (he = Ge) : (je.sibling = Ge),
          (je = Ge),
          (de = De));
      }
      if (Me === K.length) return (n(Q, de), Ue && jn(Q, Me), he);
      if (de === null) {
        for (; Me < K.length; Me++)
          ((de = ne(Q, K[Me], te)),
            de !== null &&
              ((X = u(de, X, Me)), je === null ? (he = de) : (je.sibling = de), (je = de)));
        return (Ue && jn(Q, Me), he);
      }
      for (de = a(de); Me < K.length; Me++)
        ((De = I(de, Q, Me, K[Me], te)),
          De !== null &&
            (e && De.alternate !== null && de.delete(De.key === null ? Me : De.key),
            (X = u(De, X, Me)),
            je === null ? (he = De) : (je.sibling = De),
            (je = De)));
      return (
        e &&
          de.forEach(function (Da) {
            return t(Q, Da);
          }),
        Ue && jn(Q, Me),
        he
      );
    }
    function ye(Q, X, K, te) {
      if (K == null) throw Error(h(151));
      for (
        var he = null, je = null, de = X, Me = (X = 0), De = null, Ge = K.next();
        de !== null && !Ge.done;
        Me++, Ge = K.next()
      ) {
        de.index > Me ? ((De = de), (de = null)) : (De = de.sibling);
        var Da = F(Q, de, Ge.value, te);
        if (Da === null) {
          de === null && (de = De);
          break;
        }
        (e && de && Da.alternate === null && t(Q, de),
          (X = u(Da, X, Me)),
          je === null ? (he = Da) : (je.sibling = Da),
          (je = Da),
          (de = De));
      }
      if (Ge.done) return (n(Q, de), Ue && jn(Q, Me), he);
      if (de === null) {
        for (; !Ge.done; Me++, Ge = K.next())
          ((Ge = ne(Q, Ge.value, te)),
            Ge !== null &&
              ((X = u(Ge, X, Me)), je === null ? (he = Ge) : (je.sibling = Ge), (je = Ge)));
        return (Ue && jn(Q, Me), he);
      }
      for (de = a(de); !Ge.done; Me++, Ge = K.next())
        ((Ge = I(de, Q, Me, Ge.value, te)),
          Ge !== null &&
            (e && Ge.alternate !== null && de.delete(Ge.key === null ? Me : Ge.key),
            (X = u(Ge, X, Me)),
            je === null ? (he = Ge) : (je.sibling = Ge),
            (je = Ge)));
      return (
        e &&
          de.forEach(function (Y0) {
            return t(Q, Y0);
          }),
        Ue && jn(Q, Me),
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
                    (typeof he == 'object' && he !== null && he.$$typeof === _ && Ka(he) === X.type)
                  ) {
                    (n(Q, X.sibling), (te = i(X, K.props)), ui(te, K), (te.return = Q), (Q = te));
                    break e;
                  }
                  n(Q, X);
                  break;
                } else t(Q, X);
                X = X.sibling;
              }
              K.type === p
                ? ((te = Va(K.props.children, Q.mode, te, K.key)), (te.return = Q), (Q = te))
                : ((te = uu(K.type, K.key, K.props, null, Q.mode, te)),
                  ui(te, K),
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
              ((te = Jr(K, Q.mode, te)), (te.return = Q), (Q = te));
            }
            return x(Q);
          case _:
            return ((K = Ka(K)), $e(Q, X, K, te));
        }
        if (ae(K)) return oe(Q, X, K, te);
        if (V(K)) {
          if (((he = V(K)), typeof he != 'function')) throw Error(h(150));
          return ((K = he.call(K)), ye(Q, X, K, te));
        }
        if (typeof K.then == 'function') return $e(Q, X, mu(K), te);
        if (K.$$typeof === L) return $e(Q, X, cu(Q, K), te);
        hu(Q, K);
      }
      return (typeof K == 'string' && K !== '') || typeof K == 'number' || typeof K == 'bigint'
        ? ((K = '' + K),
          X !== null && X.tag === 6
            ? (n(Q, X.sibling), (te = i(X, K)), (te.return = Q), (Q = te))
            : (n(Q, X), (te = kr(K, Q.mode, te)), (te.return = Q), (Q = te)),
          x(Q))
        : n(Q, X);
    }
    return function (Q, X, K, te) {
      try {
        ii = 0;
        var he = $e(Q, X, K, te);
        return ((Cl = null), he);
      } catch (de) {
        if (de === El || de === fu) throw de;
        var je = qt(29, de, null, Q.mode);
        return ((je.lanes = te), (je.return = Q), je);
      } finally {
      }
    };
  }
  var Ja = Ef(!0),
    Cf = Ef(!1),
    ma = !1;
  function us(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function rs(e, t) {
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
  function ha(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function va(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Xe & 2) !== 0)) {
      var i = a.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (a.pending = t),
        (t = iu(e)),
        uf(e, null, n),
        t
      );
    }
    return (lu(e, a, t, n), iu(e));
  }
  function ri(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), me(e, n));
    }
  }
  function ss(e, t) {
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
  var cs = !1;
  function si() {
    if (cs) {
      var e = bl;
      if (e !== null) throw e;
    }
  }
  function ci(e, t, n, a) {
    cs = !1;
    var i = e.updateQueue;
    ma = !1;
    var u = i.firstBaseUpdate,
      x = i.lastBaseUpdate,
      M = i.shared.pending;
    if (M !== null) {
      i.shared.pending = null;
      var j = M,
        k = j.next;
      ((j.next = null), x === null ? (u = k) : (x.next = k), (x = j));
      var ee = e.alternate;
      ee !== null &&
        ((ee = ee.updateQueue),
        (M = ee.lastBaseUpdate),
        M !== x && (M === null ? (ee.firstBaseUpdate = k) : (M.next = k), (ee.lastBaseUpdate = j)));
    }
    if (u !== null) {
      var ne = i.baseState;
      ((x = 0), (ee = k = j = null), (M = u));
      do {
        var F = M.lane & -536870913,
          I = F !== M.lane;
        if (I ? (Oe & F) === F : (a & F) === F) {
          (F !== 0 && F === xl && (cs = !0),
            ee !== null &&
              (ee = ee.next =
                { lane: 0, tag: M.tag, payload: M.payload, callback: null, next: null }));
          e: {
            var oe = e,
              ye = M;
            F = t;
            var $e = n;
            switch (ye.tag) {
              case 1:
                if (((oe = ye.payload), typeof oe == 'function')) {
                  ne = oe.call($e, ne, F);
                  break e;
                }
                ne = oe;
                break e;
              case 3:
                oe.flags = (oe.flags & -65537) | 128;
              case 0:
                if (
                  ((oe = ye.payload),
                  (F = typeof oe == 'function' ? oe.call($e, ne, F) : oe),
                  F == null)
                )
                  break e;
                ne = v({}, ne, F);
                break e;
              case 2:
                ma = !0;
            }
          }
          ((F = M.callback),
            F !== null &&
              ((e.flags |= 64),
              I && (e.flags |= 8192),
              (I = i.callbacks),
              I === null ? (i.callbacks = [F]) : I.push(F)));
        } else
          ((I = { lane: F, tag: M.tag, payload: M.payload, callback: M.callback, next: null }),
            ee === null ? ((k = ee = I), (j = ne)) : (ee = ee.next = I),
            (x |= F));
        if (((M = M.next), M === null)) {
          if (((M = i.shared.pending), M === null)) break;
          ((I = M),
            (M = I.next),
            (I.next = null),
            (i.lastBaseUpdate = I),
            (i.shared.pending = null));
        }
      } while (!0);
      (ee === null && (j = ne),
        (i.baseState = j),
        (i.firstBaseUpdate = k),
        (i.lastBaseUpdate = ee),
        u === null && (i.shared.lanes = 0),
        (xa |= x),
        (e.lanes = x),
        (e.memoizedState = ne));
    }
  }
  function Tf(e, t) {
    if (typeof e != 'function') throw Error(h(191, e));
    e.call(t);
  }
  function Mf(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Tf(n[e], t);
  }
  var Tl = N(null),
    vu = N(0);
  function Rf(e, t) {
    ((e = Fn), P(vu, e), P(Tl, t), (Fn = e | t.baseLanes));
  }
  function os() {
    (P(vu, Fn), P(Tl, Tl.current));
  }
  function fs() {
    ((Fn = vu.current), Z(Tl), Z(vu));
  }
  var Xt = N(null),
    an = null;
  function ga(e) {
    var t = e.alternate;
    (P(ot, ot.current & 1),
      P(Xt, e),
      an === null && (t === null || Tl.current !== null || t.memoizedState !== null) && (an = e));
  }
  function ds(e) {
    (P(ot, ot.current), P(Xt, e), an === null && (an = e));
  }
  function _f(e) {
    e.tag === 22 ? (P(ot, ot.current), P(Xt, e), an === null && (an = e)) : ya();
  }
  function ya() {
    (P(ot, ot.current), P(Xt, Xt.current));
  }
  function Qt(e) {
    (Z(Xt), an === e && (an = null), Z(ot));
  }
  var ot = N(0);
  function gu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || pc(n) || Sc(n))) return t;
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
  var Vn = 0,
    Ce = null,
    Je = null,
    ht = null,
    yu = !1,
    Ml = !1,
    Fa = !1,
    pu = 0,
    oi = 0,
    Rl = null,
    Dg = 0;
  function st() {
    throw Error(h(321));
  }
  function ms(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Vt(e[n], t[n])) return !1;
    return !0;
  }
  function hs(e, t, n, a, i, u) {
    return (
      (Vn = u),
      (Ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (A.H = e === null || e.memoizedState === null ? od : Os),
      (Fa = !1),
      (u = n(a, i)),
      (Fa = !1),
      Ml && (u = Of(t, n, a, i)),
      Af(e),
      u
    );
  }
  function Af(e) {
    A.H = mi;
    var t = Je !== null && Je.next !== null;
    if (((Vn = 0), (ht = Je = Ce = null), (yu = !1), (oi = 0), (Rl = null), t)) throw Error(h(300));
    e === null || vt || ((e = e.dependencies), e !== null && su(e) && (vt = !0));
  }
  function Of(e, t, n, a) {
    Ce = e;
    var i = 0;
    do {
      if ((Ml && (Rl = null), (oi = 0), (Ml = !1), 25 <= i)) throw Error(h(301));
      if (((i += 1), (ht = Je = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((A.H = fd), (u = t(n, a)));
    } while (Ml);
    return u;
  }
  function wg() {
    var e = A.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? fi(t) : t),
      (e = e.useState()[0]),
      (Je !== null ? Je.memoizedState : null) !== e && (Ce.flags |= 1024),
      t
    );
  }
  function vs() {
    var e = pu !== 0;
    return ((pu = 0), e);
  }
  function gs(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function ys(e) {
    if (yu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      yu = !1;
    }
    ((Vn = 0), (ht = Je = Ce = null), (Ml = !1), (oi = pu = 0), (Rl = null));
  }
  function Dt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (ht === null ? (Ce.memoizedState = ht = e) : (ht = ht.next = e), ht);
  }
  function ft() {
    if (Je === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var t = ht === null ? Ce.memoizedState : ht.next;
    if (t !== null) ((ht = t), (Je = e));
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
        ht === null ? (Ce.memoizedState = ht = e) : (ht = ht.next = e));
    }
    return ht;
  }
  function Su() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function fi(e) {
    var t = oi;
    return (
      (oi += 1),
      Rl === null && (Rl = []),
      (e = Sf(Rl, e, t)),
      (t = Ce),
      (ht === null ? t.memoizedState : ht.next) === null &&
        ((t = t.alternate), (A.H = t === null || t.memoizedState === null ? od : Os)),
      e
    );
  }
  function xu(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return fi(e);
      if (e.$$typeof === L) return Tt(e);
    }
    throw Error(h(438, String(e)));
  }
  function ps(e) {
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
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = B;
    return (t.index++, n);
  }
  function qn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function bu(e) {
    var t = ft();
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
        var x = i.next;
        ((i.next = u.next), (u.next = x));
      }
      ((t.baseQueue = i = u), (a.pending = null));
    }
    if (((u = e.baseState), i === null)) e.memoizedState = u;
    else {
      t = i.next;
      var M = (x = null),
        j = null,
        k = t,
        ee = !1;
      do {
        var ne = k.lane & -536870913;
        if (ne !== k.lane ? (Oe & ne) === ne : (Vn & ne) === ne) {
          var F = k.revertLane;
          if (F === 0)
            (j !== null &&
              (j = j.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: k.action,
                  hasEagerState: k.hasEagerState,
                  eagerState: k.eagerState,
                  next: null,
                }),
              ne === xl && (ee = !0));
          else if ((Vn & F) === F) {
            ((k = k.next), F === xl && (ee = !0));
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
              j === null ? ((M = j = ne), (x = u)) : (j = j.next = ne),
              (Ce.lanes |= F),
              (xa |= F));
          ((ne = k.action), Fa && n(u, ne), (u = k.hasEagerState ? k.eagerState : n(u, ne)));
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
            j === null ? ((M = j = F), (x = u)) : (j = j.next = F),
            (Ce.lanes |= ne),
            (xa |= ne));
        k = k.next;
      } while (k !== null && k !== t);
      if (
        (j === null ? (x = u) : (j.next = M),
        !Vt(u, e.memoizedState) && ((vt = !0), ee && ((n = bl), n !== null)))
      )
        throw n;
      ((e.memoizedState = u), (e.baseState = x), (e.baseQueue = j), (a.lastRenderedState = u));
    }
    return (i === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function xs(e) {
    var t = ft(),
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
      (Vt(u, t.memoizedState) || (vt = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, a];
  }
  function Df(e, t, n) {
    var a = Ce,
      i = ft(),
      u = Ue;
    if (u) {
      if (n === void 0) throw Error(h(407));
      n = n();
    } else n = t();
    var x = !Vt((Je || i).memoizedState, n);
    if (
      (x && ((i.memoizedState = n), (vt = !0)),
      (i = i.queue),
      Cs(Nf.bind(null, a, i, e), [e]),
      i.getSnapshot !== t || x || (ht !== null && ht.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        _l(9, { destroy: void 0 }, zf.bind(null, a, i, n, t), null),
        et === null)
      )
        throw Error(h(349));
      u || (Vn & 127) !== 0 || wf(a, t, n);
    }
    return n;
  }
  function wf(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = Su()), (Ce.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function zf(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), Uf(t) && Bf(e));
  }
  function Nf(e, t, n) {
    return n(function () {
      Uf(t) && Bf(e);
    });
  }
  function Uf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Vt(e, n);
    } catch {
      return !0;
    }
  }
  function Bf(e) {
    var t = Ya(e, 2);
    t !== null && Gt(t, e, 2);
  }
  function bs(e) {
    var t = Dt();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), Fa)) {
        fn(!0);
        try {
          n();
        } finally {
          fn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Lf(e, t, n, a) {
    return ((e.baseState = n), Ss(e, Je, typeof a == 'function' ? a : qn));
  }
  function zg(e, t, n, a, i) {
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
          ? ((u.next = t.pending = u), Hf(t, u))
          : ((u.next = n.next), (t.pending = n.next = u)));
    }
  }
  function Hf(e, t) {
    var n = t.action,
      a = t.payload,
      i = e.state;
    if (t.isTransition) {
      var u = A.T,
        x = {};
      A.T = x;
      try {
        var M = n(i, a),
          j = A.S;
        (j !== null && j(x, M), jf(e, t, M));
      } catch (k) {
        Es(e, t, k);
      } finally {
        (u !== null && x.types !== null && (u.types = x.types), (A.T = u));
      }
    } else
      try {
        ((u = n(i, a)), jf(e, t, u));
      } catch (k) {
        Es(e, t, k);
      }
  }
  function jf(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (a) {
            Gf(e, t, a);
          },
          function (a) {
            return Es(e, t, a);
          }
        )
      : Gf(e, t, n);
  }
  function Gf(e, t, n) {
    ((t.status = 'fulfilled'),
      (t.value = n),
      Yf(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Hf(e, n))));
  }
  function Es(e, t, n) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = 'rejected'), (t.reason = n), Yf(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function Yf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Vf(e, t) {
    return t;
  }
  function qf(e, t) {
    if (Ue) {
      var n = et.formState;
      if (n !== null) {
        e: {
          var a = Ce;
          if (Ue) {
            if (at) {
              t: {
                for (var i = at, u = nn; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break t;
                  }
                  if (((i = ln(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                ((u = i.data), (i = u === 'F!' || u === 'F' ? i : null));
              }
              if (i) {
                ((at = ln(i.nextSibling)), (a = i.data === 'F!'));
                break e;
              }
            }
            fa(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return (
      (n = Dt()),
      (n.memoizedState = n.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vf,
        lastRenderedState: t,
      }),
      (n.queue = a),
      (n = rd.bind(null, Ce, a)),
      (a.dispatch = n),
      (a = bs(!1)),
      (u = As.bind(null, Ce, !1, a.queue)),
      (a = Dt()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = i),
      (n = zg.bind(null, Ce, i, u, n)),
      (i.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    );
  }
  function Xf(e) {
    var t = ft();
    return Qf(t, Je, e);
  }
  function Qf(e, t, n) {
    if (
      ((t = Ss(e, t, Vf)[0]),
      (e = bu(qn)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = fi(t);
      } catch (x) {
        throw x === El ? fu : x;
      }
    else a = t;
    t = ft();
    var i = t.queue,
      u = i.dispatch;
    return (
      n !== t.memoizedState &&
        ((Ce.flags |= 2048), _l(9, { destroy: void 0 }, Ng.bind(null, i, n), null)),
      [a, u, e]
    );
  }
  function Ng(e, t) {
    e.action = t;
  }
  function Zf(e) {
    var t = ft(),
      n = Je;
    if (n !== null) return Qf(t, n, e);
    (ft(), (t = t.memoizedState), (n = ft()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = e), [t, a, !1]);
  }
  function _l(e, t, n, a) {
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
  function Kf() {
    return ft().memoizedState;
  }
  function Eu(e, t, n, a) {
    var i = Dt();
    ((Ce.flags |= e),
      (i.memoizedState = _l(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a)));
  }
  function Cu(e, t, n, a) {
    var i = ft();
    a = a === void 0 ? null : a;
    var u = i.memoizedState.inst;
    Je !== null && a !== null && ms(a, Je.memoizedState.deps)
      ? (i.memoizedState = _l(t, u, n, a))
      : ((Ce.flags |= e), (i.memoizedState = _l(1 | t, u, n, a)));
  }
  function kf(e, t) {
    Eu(8390656, 8, e, t);
  }
  function Cs(e, t) {
    Cu(2048, 8, e, t);
  }
  function Ug(e) {
    Ce.flags |= 4;
    var t = Ce.updateQueue;
    if (t === null) ((t = Su()), (Ce.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function Jf(e) {
    var t = ft().memoizedState;
    return (
      Ug({ ref: t, nextImpl: e }),
      function () {
        if ((Xe & 2) !== 0) throw Error(h(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Ff(e, t) {
    return Cu(4, 2, e, t);
  }
  function $f(e, t) {
    return Cu(4, 4, e, t);
  }
  function Wf(e, t) {
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
  function If(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), Cu(4, 4, Wf.bind(null, t, e), n));
  }
  function Ts() {}
  function Pf(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && ms(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
  }
  function ed(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && ms(t, a[1])) return a[0];
    if (((a = e()), Fa)) {
      fn(!0);
      try {
        e();
      } finally {
        fn(!1);
      }
    }
    return ((n.memoizedState = [a, t]), a);
  }
  function Ms(e, t, n) {
    return n === void 0 || ((Vn & 1073741824) !== 0 && (Oe & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = tm()), (Ce.lanes |= e), (xa |= e), n);
  }
  function td(e, t, n, a) {
    return Vt(n, t)
      ? n
      : Tl.current !== null
        ? ((e = Ms(e, n, a)), Vt(e, t) || (vt = !0), e)
        : (Vn & 42) === 0 || ((Vn & 1073741824) !== 0 && (Oe & 261930) === 0)
          ? ((vt = !0), (e.memoizedState = n))
          : ((e = tm()), (Ce.lanes |= e), (xa |= e), t);
  }
  function nd(e, t, n, a, i) {
    var u = U.p;
    U.p = u !== 0 && 8 > u ? u : 8;
    var x = A.T,
      M = {};
    ((A.T = M), As(e, !1, t, n));
    try {
      var j = i(),
        k = A.S;
      if (
        (k !== null && k(M, j), j !== null && typeof j == 'object' && typeof j.then == 'function')
      ) {
        var ee = Og(j, a);
        di(e, t, ee, kt(e));
      } else di(e, t, a, kt(e));
    } catch (ne) {
      di(e, t, { then: function () {}, status: 'rejected', reason: ne }, kt());
    } finally {
      ((U.p = u), x !== null && M.types !== null && (x.types = M.types), (A.T = x));
    }
  }
  function Bg() {}
  function Rs(e, t, n, a) {
    if (e.tag !== 5) throw Error(h(476));
    var i = ad(e).queue;
    nd(
      e,
      i,
      t,
      q,
      n === null
        ? Bg
        : function () {
            return (ld(e), n(a));
          }
    );
  }
  function ad(e) {
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
        lastRenderedReducer: qn,
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
          lastRenderedReducer: qn,
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
  function ld(e) {
    var t = ad(e);
    (t.next === null && (t = e.alternate.memoizedState), di(e, t.next.queue, {}, kt()));
  }
  function _s() {
    return Tt(Oi);
  }
  function id() {
    return ft().memoizedState;
  }
  function ud() {
    return ft().memoizedState;
  }
  function Lg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = kt();
          e = ha(n);
          var a = va(t, e, n);
          (a !== null && (Gt(a, t, n), ri(a, t, n)), (t = { cache: ns() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Hg(e, t, n) {
    var a = kt();
    ((n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Tu(e) ? sd(t, n) : ((n = Zr(e, t, n, a)), n !== null && (Gt(n, e, a), cd(n, t, a))));
  }
  function rd(e, t, n) {
    var a = kt();
    di(e, t, n, a);
  }
  function di(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Tu(e)) sd(t, i);
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
          if (((i.hasEagerState = !0), (i.eagerState = M), Vt(M, x)))
            return (lu(e, t, i, 0), et === null && au(), !1);
        } catch {
        } finally {
        }
      if (((n = Zr(e, t, i, a)), n !== null)) return (Gt(n, e, a), cd(n, t, a), !0);
    }
    return !1;
  }
  function As(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: uc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Tu(e))
    ) {
      if (t) throw Error(h(479));
    } else ((t = Zr(e, n, a, 2)), t !== null && Gt(t, e, 2));
  }
  function Tu(e) {
    var t = e.alternate;
    return e === Ce || (t !== null && t === Ce);
  }
  function sd(e, t) {
    Ml = yu = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function cd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), me(e, n));
    }
  }
  var mi = {
    readContext: Tt,
    use: xu,
    useCallback: st,
    useContext: st,
    useEffect: st,
    useImperativeHandle: st,
    useLayoutEffect: st,
    useInsertionEffect: st,
    useMemo: st,
    useReducer: st,
    useRef: st,
    useState: st,
    useDebugValue: st,
    useDeferredValue: st,
    useTransition: st,
    useSyncExternalStore: st,
    useId: st,
    useHostTransitionStatus: st,
    useFormState: st,
    useActionState: st,
    useOptimistic: st,
    useMemoCache: st,
    useCacheRefresh: st,
  };
  mi.useEffectEvent = st;
  var od = {
      readContext: Tt,
      use: xu,
      useCallback: function (e, t) {
        return ((Dt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Tt,
      useEffect: kf,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null), Eu(4194308, 4, Wf.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Eu(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Eu(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Dt();
        t = t === void 0 ? null : t;
        var a = e();
        if (Fa) {
          fn(!0);
          try {
            e();
          } finally {
            fn(!1);
          }
        }
        return ((n.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, n) {
        var a = Dt();
        if (n !== void 0) {
          var i = n(t);
          if (Fa) {
            fn(!0);
            try {
              n(t);
            } finally {
              fn(!1);
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
          (e = e.dispatch = Hg.bind(null, Ce, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Dt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = bs(e);
        var t = e.queue,
          n = rd.bind(null, Ce, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: Ts,
      useDeferredValue: function (e, t) {
        var n = Dt();
        return Ms(n, e, t);
      },
      useTransition: function () {
        var e = bs(!1);
        return ((e = nd.bind(null, Ce, e.queue, !0, !1)), (Dt().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, n) {
        var a = Ce,
          i = Dt();
        if (Ue) {
          if (n === void 0) throw Error(h(407));
          n = n();
        } else {
          if (((n = t()), et === null)) throw Error(h(349));
          (Oe & 127) !== 0 || wf(a, t, n);
        }
        i.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (i.queue = u),
          kf(Nf.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          _l(9, { destroy: void 0 }, zf.bind(null, a, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = Dt(),
          t = et.identifierPrefix;
        if (Ue) {
          var n = Cn,
            a = En;
          ((n = (a & ~(1 << (32 - Ot(a) - 1))).toString(32) + n),
            (t = '_' + t + 'R_' + n),
            (n = pu++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '_'));
        } else ((n = Dg++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: _s,
      useFormState: qf,
      useActionState: qf,
      useOptimistic: function (e) {
        var t = Dt();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((t.queue = n), (t = As.bind(null, Ce, !0, n)), (n.dispatch = t), [e, t]);
      },
      useMemoCache: ps,
      useCacheRefresh: function () {
        return (Dt().memoizedState = Lg.bind(null, Ce));
      },
      useEffectEvent: function (e) {
        var t = Dt(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((Xe & 2) !== 0) throw Error(h(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Os = {
      readContext: Tt,
      use: xu,
      useCallback: Pf,
      useContext: Tt,
      useEffect: Cs,
      useImperativeHandle: If,
      useInsertionEffect: Ff,
      useLayoutEffect: $f,
      useMemo: ed,
      useReducer: bu,
      useRef: Kf,
      useState: function () {
        return bu(qn);
      },
      useDebugValue: Ts,
      useDeferredValue: function (e, t) {
        var n = ft();
        return td(n, Je.memoizedState, e, t);
      },
      useTransition: function () {
        var e = bu(qn)[0],
          t = ft().memoizedState;
        return [typeof e == 'boolean' ? e : fi(e), t];
      },
      useSyncExternalStore: Df,
      useId: id,
      useHostTransitionStatus: _s,
      useFormState: Xf,
      useActionState: Xf,
      useOptimistic: function (e, t) {
        var n = ft();
        return Lf(n, Je, e, t);
      },
      useMemoCache: ps,
      useCacheRefresh: ud,
    };
  Os.useEffectEvent = Jf;
  var fd = {
    readContext: Tt,
    use: xu,
    useCallback: Pf,
    useContext: Tt,
    useEffect: Cs,
    useImperativeHandle: If,
    useInsertionEffect: Ff,
    useLayoutEffect: $f,
    useMemo: ed,
    useReducer: xs,
    useRef: Kf,
    useState: function () {
      return xs(qn);
    },
    useDebugValue: Ts,
    useDeferredValue: function (e, t) {
      var n = ft();
      return Je === null ? Ms(n, e, t) : td(n, Je.memoizedState, e, t);
    },
    useTransition: function () {
      var e = xs(qn)[0],
        t = ft().memoizedState;
      return [typeof e == 'boolean' ? e : fi(e), t];
    },
    useSyncExternalStore: Df,
    useId: id,
    useHostTransitionStatus: _s,
    useFormState: Zf,
    useActionState: Zf,
    useOptimistic: function (e, t) {
      var n = ft();
      return Je !== null ? Lf(n, Je, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: ps,
    useCacheRefresh: ud,
  };
  fd.useEffectEvent = Jf;
  function Ds(e, t, n, a) {
    ((t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : v({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var ws = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = kt(),
        i = ha(a);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = va(e, i, a)),
        t !== null && (Gt(t, e, a), ri(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = kt(),
        i = ha(a);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = va(e, i, a)),
        t !== null && (Gt(t, e, a), ri(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = kt(),
        a = ha(n);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = va(e, a, n)),
        t !== null && (Gt(t, e, n), ri(t, e, n)));
    },
  };
  function dd(e, t, n, a, i, u, x) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, u, x)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Pl(n, a) || !Pl(i, u)
          : !0
    );
  }
  function md(e, t, n, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && ws.enqueueReplaceState(t, t.state, null));
  }
  function $a(e, t) {
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
  function hd(e) {
    nu(e);
  }
  function vd(e) {
    console.error(e);
  }
  function gd(e) {
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
  function yd(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function zs(e, t, n) {
    return (
      (n = ha(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Mu(e, t);
      }),
      n
    );
  }
  function pd(e) {
    return ((e = ha(e)), (e.tag = 3), e);
  }
  function Sd(e, t, n, a) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == 'function') {
      var u = a.value;
      ((e.payload = function () {
        return i(u);
      }),
        (e.callback = function () {
          yd(t, n, a);
        }));
    }
    var x = n.stateNode;
    x !== null &&
      typeof x.componentDidCatch == 'function' &&
      (e.callback = function () {
        (yd(t, n, a),
          typeof i != 'function' && (ba === null ? (ba = new Set([this])) : ba.add(this)));
        var M = a.stack;
        this.componentDidCatch(a.value, { componentStack: M !== null ? M : '' });
      });
  }
  function jg(e, t, n, a, i) {
    if (((n.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((t = n.alternate), t !== null && Sl(t, n, i, !0), (n = Xt.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              an === null ? Hu() : n.alternate === null && ct === 0 && (ct = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = i),
              a === du
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  ac(e, a, i)),
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
                  ac(e, a, i)),
              !1
            );
        }
        throw Error(h(435, n.tag));
      }
      return (ac(e, a, i), Hu(), !1);
    }
    if (Ue)
      return (
        (t = Xt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            a !== Wr && ((e = Error(h(422), { cause: a })), ni(Pt(e, n))))
          : (a !== Wr && ((t = Error(h(423), { cause: a })), ni(Pt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (a = Pt(a, n)),
            (i = zs(e.stateNode, a, i)),
            ss(e, i),
            ct !== 4 && (ct = 2)),
        !1
      );
    var u = Error(h(520), { cause: a });
    if (((u = Pt(u, n)), bi === null ? (bi = [u]) : bi.push(u), ct !== 4 && (ct = 2), t === null))
      return !0;
    ((a = Pt(a, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = i & -i),
            (n.lanes |= e),
            (e = zs(n.stateNode, a, e)),
            ss(n, e),
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
                  (ba === null || !ba.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (i &= -i),
              (n.lanes |= i),
              (i = pd(i)),
              Sd(i, e, n, a),
              ss(n, i),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Ns = Error(h(461)),
    vt = !1;
  function Mt(e, t, n, a) {
    t.child = e === null ? Cf(t, null, n, a) : Ja(t, e.child, n, a);
  }
  function xd(e, t, n, a, i) {
    n = n.render;
    var u = t.ref;
    if ('ref' in a) {
      var x = {};
      for (var M in a) M !== 'ref' && (x[M] = a[M]);
    } else x = a;
    return (
      Qa(t),
      (a = hs(e, t, n, x, u, i)),
      (M = vs()),
      e !== null && !vt
        ? (gs(e, t, i), Xn(e, t, i))
        : (Ue && M && Fr(t), (t.flags |= 1), Mt(e, t, a, i), t.child)
    );
  }
  function bd(e, t, n, a, i) {
    if (e === null) {
      var u = n.type;
      return typeof u == 'function' && !Kr(u) && u.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = u), Ed(e, t, u, a, i))
        : ((e = uu(n.type, null, a, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !Vs(e, i))) {
      var x = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Pl), n(x, a) && e.ref === t.ref))
        return Xn(e, t, i);
    }
    return ((t.flags |= 1), (e = Hn(u, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Ed(e, t, n, a, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Pl(u, a) && e.ref === t.ref)
        if (((vt = !1), (t.pendingProps = a = u), Vs(e, i))) (e.flags & 131072) !== 0 && (vt = !0);
        else return ((t.lanes = e.lanes), Xn(e, t, i));
    }
    return Us(e, t, n, a, i);
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
        return Td(e, t, u, n, a);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ou(t, u !== null ? u.cachePool : null),
          u !== null ? Rf(t, u) : os(),
          _f(t));
      else return ((a = t.lanes = 536870912), Td(e, t, u !== null ? u.baseLanes | n : n, n, a));
    } else
      u !== null
        ? (ou(t, u.cachePool), Rf(t, u), ya(), (t.memoizedState = null))
        : (e !== null && ou(t, null), os(), ya());
    return (Mt(e, t, i, n), t.child);
  }
  function hi(e, t) {
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
  function Td(e, t, n, a, i) {
    var u = ls();
    return (
      (u = u === null ? null : { parent: mt._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && ou(t, null),
      os(),
      _f(t),
      e !== null && Sl(e, t, a, !0),
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
  function Md(e, t, n) {
    return (
      Ja(t, e.child, null, n),
      (e = Ru(t, t.pendingProps)),
      (e.flags |= 2),
      Qt(t),
      (t.memoizedState = null),
      e
    );
  }
  function Gg(e, t, n) {
    var a = t.pendingProps,
      i = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Ue) {
        if (a.mode === 'hidden') return ((e = Ru(t, a)), (t.lanes = 536870912), hi(null, e));
        if (
          (ds(t),
          (e = at)
            ? ((e = Hm(e, nn)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: ca !== null ? { id: En, overflow: Cn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = sf(e)),
                (n.return = t),
                (t.child = n),
                (Ct = t),
                (at = null)))
            : (e = null),
          e === null)
        )
          throw fa(t);
        return ((t.lanes = 536870912), null);
      }
      return Ru(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var x = u.dehydrated;
      if ((ds(t), i))
        if (t.flags & 256) ((t.flags &= -257), (t = Md(e, t, n)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(h(558));
      else if ((vt || Sl(e, t, n, !1), (i = (n & e.childLanes) !== 0), vt || i)) {
        if (((a = et), a !== null && ((x = Se(a, n)), x !== 0 && x !== u.retryLane)))
          throw ((u.retryLane = x), Ya(e, x), Gt(a, e, x), Ns);
        (Hu(), (t = Md(e, t, n)));
      } else
        ((e = u.treeContext),
          (at = ln(x.nextSibling)),
          (Ct = t),
          (Ue = !0),
          (oa = null),
          (nn = !1),
          e !== null && ff(t, e),
          (t = Ru(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Hn(e.child, { mode: a.mode, children: a.children })),
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
  function Us(e, t, n, a, i) {
    return (
      Qa(t),
      (n = hs(e, t, n, a, void 0, i)),
      (a = vs()),
      e !== null && !vt
        ? (gs(e, t, i), Xn(e, t, i))
        : (Ue && a && Fr(t), (t.flags |= 1), Mt(e, t, n, i), t.child)
    );
  }
  function Rd(e, t, n, a, i, u) {
    return (
      Qa(t),
      (t.updateQueue = null),
      (n = Of(t, a, n, i)),
      Af(e),
      (a = vs()),
      e !== null && !vt
        ? (gs(e, t, u), Xn(e, t, u))
        : (Ue && a && Fr(t), (t.flags |= 1), Mt(e, t, n, u), t.child)
    );
  }
  function _d(e, t, n, a, i) {
    if ((Qa(t), t.stateNode === null)) {
      var u = vl,
        x = n.contextType;
      (typeof x == 'object' && x !== null && (u = Tt(x)),
        (u = new n(a, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = ws),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        us(t),
        (x = n.contextType),
        (u.context = typeof x == 'object' && x !== null ? Tt(x) : vl),
        (u.state = t.memoizedState),
        (x = n.getDerivedStateFromProps),
        typeof x == 'function' && (Ds(t, n, x, a), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((x = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          x !== u.state && ws.enqueueReplaceState(u, u.state, null),
          ci(t, a, u, i),
          si(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var M = t.memoizedProps,
        j = $a(n, M);
      u.props = j;
      var k = u.context,
        ee = n.contextType;
      ((x = vl), typeof ee == 'object' && ee !== null && (x = Tt(ee)));
      var ne = n.getDerivedStateFromProps;
      ((ee = typeof ne == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (M = t.pendingProps !== M),
        ee ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((M || k !== x) && md(t, u, a, x)),
        (ma = !1));
      var F = t.memoizedState;
      ((u.state = F),
        ci(t, a, u, i),
        si(),
        (k = t.memoizedState),
        M || F !== k || ma
          ? (typeof ne == 'function' && (Ds(t, n, ne, a), (k = t.memoizedState)),
            (j = ma || dd(t, n, j, a, F, k, x))
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
            (a = j))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1)));
    } else {
      ((u = t.stateNode),
        rs(e, t),
        (x = t.memoizedProps),
        (ee = $a(n, x)),
        (u.props = ee),
        (ne = t.pendingProps),
        (F = u.context),
        (k = n.contextType),
        (j = vl),
        typeof k == 'object' && k !== null && (j = Tt(k)),
        (M = n.getDerivedStateFromProps),
        (k = typeof M == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((x !== ne || F !== j) && md(t, u, a, j)),
        (ma = !1),
        (F = t.memoizedState),
        (u.state = F),
        ci(t, a, u, i),
        si());
      var I = t.memoizedState;
      x !== ne || F !== I || ma || (e !== null && e.dependencies !== null && su(e.dependencies))
        ? (typeof M == 'function' && (Ds(t, n, M, a), (I = t.memoizedState)),
          (ee =
            ma ||
            dd(t, n, ee, a, F, I, j) ||
            (e !== null && e.dependencies !== null && su(e.dependencies)))
            ? (k ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(a, I, j),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(a, I, j)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (x === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (x === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = I)),
          (u.props = a),
          (u.state = I),
          (u.context = j),
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
            ? ((t.child = Ja(t, e.child, null, i)), (t.child = Ja(t, null, n, i)))
            : Mt(e, t, n, i),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Xn(e, t, i)),
      e
    );
  }
  function Ad(e, t, n, a) {
    return (qa(), (t.flags |= 256), Mt(e, t, n, a), t.child);
  }
  var Bs = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Ls(e) {
    return { baseLanes: e, cachePool: yf() };
  }
  function Hs(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Kt), e);
  }
  function Od(e, t, n) {
    var a = t.pendingProps,
      i = !1,
      u = (t.flags & 128) !== 0,
      x;
    if (
      ((x = u) || (x = e !== null && e.memoizedState === null ? !1 : (ot.current & 2) !== 0),
      x && ((i = !0), (t.flags &= -129)),
      (x = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ue) {
        if (
          (i ? ga(t) : ya(),
          (e = at)
            ? ((e = Hm(e, nn)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: ca !== null ? { id: En, overflow: Cn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = sf(e)),
                (n.return = t),
                (t.child = n),
                (Ct = t),
                (at = null)))
            : (e = null),
          e === null)
        )
          throw fa(t);
        return (Sc(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var M = a.children;
      return (
        (a = a.fallback),
        i
          ? (ya(),
            (i = t.mode),
            (M = Au({ mode: 'hidden', children: M }, i)),
            (a = Va(a, i, n, null)),
            (M.return = t),
            (a.return = t),
            (M.sibling = a),
            (t.child = M),
            (a = t.child),
            (a.memoizedState = Ls(n)),
            (a.childLanes = Hs(e, x, n)),
            (t.memoizedState = Bs),
            hi(null, a))
          : (ga(t), js(t, M))
      );
    }
    var j = e.memoizedState;
    if (j !== null && ((M = j.dehydrated), M !== null)) {
      if (u)
        t.flags & 256
          ? (ga(t), (t.flags &= -257), (t = Gs(e, t, n)))
          : t.memoizedState !== null
            ? (ya(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (ya(),
              (M = a.fallback),
              (i = t.mode),
              (a = Au({ mode: 'visible', children: a.children }, i)),
              (M = Va(M, i, n, null)),
              (M.flags |= 2),
              (a.return = t),
              (M.return = t),
              (a.sibling = M),
              (t.child = a),
              Ja(t, e.child, null, n),
              (a = t.child),
              (a.memoizedState = Ls(n)),
              (a.childLanes = Hs(e, x, n)),
              (t.memoizedState = Bs),
              (t = hi(null, a)));
      else if ((ga(t), Sc(M))) {
        if (((x = M.nextSibling && M.nextSibling.dataset), x)) var k = x.dgst;
        ((x = k),
          (a = Error(h(419))),
          (a.stack = ''),
          (a.digest = x),
          ni({ value: a, source: null, stack: null }),
          (t = Gs(e, t, n)));
      } else if ((vt || Sl(e, t, n, !1), (x = (n & e.childLanes) !== 0), vt || x)) {
        if (((x = et), x !== null && ((a = Se(x, n)), a !== 0 && a !== j.retryLane)))
          throw ((j.retryLane = a), Ya(e, a), Gt(x, e, a), Ns);
        (pc(M) || Hu(), (t = Gs(e, t, n)));
      } else
        pc(M)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = j.treeContext),
            (at = ln(M.nextSibling)),
            (Ct = t),
            (Ue = !0),
            (oa = null),
            (nn = !1),
            e !== null && ff(t, e),
            (t = js(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (ya(),
        (M = a.fallback),
        (i = t.mode),
        (j = e.child),
        (k = j.sibling),
        (a = Hn(j, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = j.subtreeFlags & 65011712),
        k !== null ? (M = Hn(k, M)) : ((M = Va(M, i, n, null)), (M.flags |= 2)),
        (M.return = t),
        (a.return = t),
        (a.sibling = M),
        (t.child = a),
        hi(null, a),
        (a = t.child),
        (M = e.child.memoizedState),
        M === null
          ? (M = Ls(n))
          : ((i = M.cachePool),
            i !== null
              ? ((j = mt._currentValue), (i = i.parent !== j ? { parent: j, pool: j } : i))
              : (i = yf()),
            (M = { baseLanes: M.baseLanes | n, cachePool: i })),
        (a.memoizedState = M),
        (a.childLanes = Hs(e, x, n)),
        (t.memoizedState = Bs),
        hi(e.child, a))
      : (ga(t),
        (n = e.child),
        (e = n.sibling),
        (n = Hn(n, { mode: 'visible', children: a.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((x = t.deletions), x === null ? ((t.deletions = [e]), (t.flags |= 16)) : x.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function js(e, t) {
    return ((t = Au({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function Au(e, t) {
    return ((e = qt(22, e, null, t)), (e.lanes = 0), e);
  }
  function Gs(e, t, n) {
    return (
      Ja(t, e.child, null, n),
      (e = js(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Dd(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), es(e.return, t, n));
  }
  function Ys(e, t, n, a, i, u) {
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
  function wd(e, t, n) {
    var a = t.pendingProps,
      i = a.revealOrder,
      u = a.tail;
    a = a.children;
    var x = ot.current,
      M = (x & 2) !== 0;
    if (
      (M ? ((x = (x & 1) | 2), (t.flags |= 128)) : (x &= 1),
      P(ot, x),
      Mt(e, t, a, n),
      (a = Ue ? ti : 0),
      !M && e !== null && (e.flags & 128) !== 0)
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
          ((e = n.alternate), e !== null && gu(e) === null && (i = n), (n = n.sibling));
        ((n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          Ys(t, !1, i, n, u, a));
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
        Ys(t, !0, n, null, u, a);
        break;
      case 'together':
        Ys(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Xn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (xa |= t.lanes), (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Sl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(h(153));
    if (t.child !== null) {
      for (e = t.child, n = Hn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = Hn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Vs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && su(e)));
  }
  function Yg(e, t, n) {
    switch (t.tag) {
      case 3:
        (xe(t, t.stateNode.containerInfo), da(t, mt, e.memoizedState.cache), qa());
        break;
      case 27:
      case 5:
        Le(t);
        break;
      case 4:
        xe(t, t.stateNode.containerInfo);
        break;
      case 10:
        da(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), ds(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ga(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Od(e, t, n)
              : (ga(t), (e = Xn(e, t, n)), e !== null ? e.sibling : null);
        ga(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((a = (n & t.childLanes) !== 0),
          a || (Sl(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
          i)
        ) {
          if (a) return wd(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          P(ot, ot.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Cd(e, t, n, t.pendingProps));
      case 24:
        da(t, mt, e.memoizedState.cache);
    }
    return Xn(e, t, n);
  }
  function zd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) vt = !0;
      else {
        if (!Vs(e, n) && (t.flags & 128) === 0) return ((vt = !1), Yg(e, t, n));
        vt = (e.flags & 131072) !== 0;
      }
    else ((vt = !1), Ue && (t.flags & 1048576) !== 0 && of(t, ti, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Ka(t.elementType)), (t.type = e), typeof e == 'function'))
            Kr(e)
              ? ((a = $a(e, a)), (t.tag = 1), (t = _d(null, t, e, a, n)))
              : ((t.tag = 0), (t = Us(null, t, e, a, n)));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === G) {
                ((t.tag = 11), (t = xd(null, t, e, a, n)));
                break e;
              } else if (i === D) {
                ((t.tag = 14), (t = bd(null, t, e, a, n)));
                break e;
              }
            }
            throw ((t = ie(e) || e), Error(h(306, t, '')));
          }
        }
        return t;
      case 0:
        return Us(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((a = t.type), (i = $a(a, t.pendingProps)), _d(e, t, a, i, n));
      case 3:
        e: {
          if ((xe(t, t.stateNode.containerInfo), e === null)) throw Error(h(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((i = u.element), rs(e, t), ci(t, a, null, n));
          var x = t.memoizedState;
          if (
            ((a = x.cache),
            da(t, mt, a),
            a !== u.cache && ts(t, [mt], n, !0),
            si(),
            (a = x.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: x.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Ad(e, t, a, n);
              break e;
            } else if (a !== i) {
              ((i = Pt(Error(h(424)), t)), ni(i), (t = Ad(e, t, a, n)));
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
                at = ln(e.firstChild),
                  Ct = t,
                  Ue = !0,
                  oa = null,
                  nn = !0,
                  n = Cf(t, null, a, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((qa(), a === i)) {
              t = Xn(e, t, n);
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
            ? (n = Xm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Ue ||
                ((n = t.type),
                (e = t.pendingProps),
                (a = Qu(ce.current).createElement(n)),
                (a[Re] = t),
                (a[Ie] = e),
                Rt(a, n, e),
                bt(a),
                (t.stateNode = a))
            : (t.memoizedState = Xm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Le(t),
          e === null &&
            Ue &&
            ((a = t.stateNode = Ym(t.type, t.pendingProps, ce.current)),
            (Ct = t),
            (nn = !0),
            (i = at),
            Ma(t.type) ? ((xc = i), (at = ln(a.firstChild))) : (at = i)),
          Mt(e, t, t.pendingProps.children, n),
          _u(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ue &&
            ((i = a = at) &&
              ((a = g0(a, t.type, t.pendingProps, nn)),
              a !== null
                ? ((t.stateNode = a), (Ct = t), (at = ln(a.firstChild)), (nn = !1), (i = !0))
                : (i = !1)),
            i || fa(t)),
          Le(t),
          (i = t.type),
          (u = t.pendingProps),
          (x = e !== null ? e.memoizedProps : null),
          (a = u.children),
          vc(i, u) ? (a = null) : x !== null && vc(i, x) && (t.flags |= 32),
          t.memoizedState !== null && ((i = hs(e, t, wg, null, null, n)), (Oi._currentValue = i)),
          _u(e, t),
          Mt(e, t, a, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ue &&
            ((e = n = at) &&
              ((n = y0(n, t.pendingProps, nn)),
              n !== null ? ((t.stateNode = n), (Ct = t), (at = null), (e = !0)) : (e = !1)),
            e || fa(t)),
          null
        );
      case 13:
        return Od(e, t, n);
      case 4:
        return (
          xe(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Ja(t, null, a, n)) : Mt(e, t, a, n),
          t.child
        );
      case 11:
        return xd(e, t, t.type, t.pendingProps, n);
      case 7:
        return (Mt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Mt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Mt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return ((a = t.pendingProps), da(t, t.type, a.value), Mt(e, t, a.children, n), t.child);
      case 9:
        return (
          (i = t.type._context),
          (a = t.pendingProps.children),
          Qa(t),
          (i = Tt(i)),
          (a = a(i)),
          (t.flags |= 1),
          Mt(e, t, a, n),
          t.child
        );
      case 14:
        return bd(e, t, t.type, t.pendingProps, n);
      case 15:
        return Ed(e, t, t.type, t.pendingProps, n);
      case 19:
        return wd(e, t, n);
      case 31:
        return Gg(e, t, n);
      case 22:
        return Cd(e, t, n, t.pendingProps);
      case 24:
        return (
          Qa(t),
          (a = Tt(mt)),
          e === null
            ? ((i = ls()),
              i === null &&
                ((i = et),
                (u = ns()),
                (i.pooledCache = u),
                u.refCount++,
                u !== null && (i.pooledCacheLanes |= n),
                (i = u)),
              (t.memoizedState = { parent: a, cache: i }),
              us(t),
              da(t, mt, i))
            : ((e.lanes & n) !== 0 && (rs(e, t), ci(t, null, null, n), si()),
              (i = e.memoizedState),
              (u = t.memoizedState),
              i.parent !== a
                ? ((i = { parent: a, cache: a }),
                  (t.memoizedState = i),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i),
                  da(t, mt, a))
                : ((a = u.cache), da(t, mt, a), a !== i.cache && ts(t, [mt], n, !0))),
          Mt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Qn(e) {
    e.flags |= 4;
  }
  function qs(e, t, n, a, i) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (i & 335544128) === i))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (im()) e.flags |= 8192;
        else throw ((ka = du), is);
    } else e.flags &= -16777217;
  }
  function Nd(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Jm(t)))
      if (im()) e.flags |= 8192;
      else throw ((ka = du), is);
  }
  function Ou(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? Zi() : 536870912), (e.lanes |= t), (wl |= t)));
  }
  function vi(e, t) {
    if (!Ue)
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
  function lt(e) {
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
  function Vg(e, t, n) {
    var a = t.pendingProps;
    switch (($r(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (lt(t), null);
      case 1:
        return (lt(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Yn(mt),
          Be(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (pl(t)
              ? Qn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ir())),
          lt(t),
          null
        );
      case 26:
        var i = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (Qn(t), u !== null ? (lt(t), Nd(t, u)) : (lt(t), qs(t, i, null, a, n)))
            : u
              ? u !== e.memoizedState
                ? (Qn(t), lt(t), Nd(t, u))
                : (lt(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== a && Qn(t), lt(t), qs(t, i, e, a, n)),
          null
        );
      case 27:
        if ((Ye(t), (n = ce.current), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Qn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(h(166));
            return (lt(t), null);
          }
          ((e = ue.current), pl(t) ? df(t) : ((e = Ym(i, a, n)), (t.stateNode = e), Qn(t)));
        }
        return (lt(t), null);
      case 5:
        if ((Ye(t), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Qn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(h(166));
            return (lt(t), null);
          }
          if (((u = ue.current), pl(t))) df(t);
          else {
            var x = Qu(ce.current);
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
            ((u[Re] = t), (u[Ie] = a));
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
            a && Qn(t);
          }
        }
        return (lt(t), qs(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Qn(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(h(166));
          if (((e = ce.current), pl(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (a = null), (i = Ct), i !== null))
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            ((e[Re] = t),
              (e = !!(
                e.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Om(e.nodeValue, n)
              )),
              e || fa(t, !0));
          } else ((e = Qu(e).createTextNode(a)), (e[Re] = t), (t.stateNode = e));
        }
        return (lt(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = pl(t)), n !== null)) {
            if (e === null) {
              if (!a) throw Error(h(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(h(557));
              e[Re] = t;
            } else (qa(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (lt(t), (e = !1));
          } else
            ((n = Ir()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (Qt(t), t) : (Qt(t), null);
          if ((t.flags & 128) !== 0) throw Error(h(558));
        }
        return (lt(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = pl(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(h(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(h(317));
              i[Re] = t;
            } else (qa(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (lt(t), (i = !1));
          } else
            ((i = Ir()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i),
              (i = !0));
          if (!i) return t.flags & 256 ? (Qt(t), t) : (Qt(t), null);
        }
        return (
          Qt(t),
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
              lt(t),
              null)
        );
      case 4:
        return (Be(), e === null && oc(t.stateNode.containerInfo), lt(t), null);
      case 10:
        return (Yn(t.type), lt(t), null);
      case 19:
        if ((Z(ot), (a = t.memoizedState), a === null)) return (lt(t), null);
        if (((i = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (i) vi(a, !1);
          else {
            if (ct !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = gu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      vi(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Ou(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (rf(n, e), (n = n.sibling));
                  return (P(ot, (ot.current & 1) | 2), Ue && jn(t, a.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            a.tail !== null &&
              ut() > Uu &&
              ((t.flags |= 128), (i = !0), vi(a, !1), (t.lanes = 4194304));
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
                vi(a, !0),
                a.tail === null && a.tailMode === 'hidden' && !u.alternate && !Ue)
              )
                return (lt(t), null);
            } else
              2 * ut() - a.renderingStartTime > Uu &&
                n !== 536870912 &&
                ((t.flags |= 128), (i = !0), vi(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = a.last), e !== null ? (e.sibling = u) : (t.child = u), (a.last = u));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = ut()),
            (e.sibling = null),
            (n = ot.current),
            P(ot, i ? (n & 1) | 2 : n & 1),
            Ue && jn(t, a.treeForkCount),
            e)
          : (lt(t), null);
      case 22:
      case 23:
        return (
          Qt(t),
          fs(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (lt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : lt(t),
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
          e !== null && Z(Za),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Yn(mt),
          lt(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function qg(e, t) {
    switch (($r(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          Yn(mt),
          Be(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (Ye(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Qt(t), t.alternate === null)) throw Error(h(340));
          qa();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 13:
        if ((Qt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(h(340));
          qa();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Z(ot), null);
      case 4:
        return (Be(), null);
      case 10:
        return (Yn(t.type), null);
      case 22:
      case 23:
        return (
          Qt(t),
          fs(),
          e !== null && Z(Za),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Yn(mt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ud(e, t) {
    switch (($r(t), t.tag)) {
      case 3:
        (Yn(mt), Be());
        break;
      case 26:
      case 27:
      case 5:
        Ye(t);
        break;
      case 4:
        Be();
        break;
      case 31:
        t.memoizedState !== null && Qt(t);
        break;
      case 13:
        Qt(t);
        break;
      case 19:
        Z(ot);
        break;
      case 10:
        Yn(t.type);
        break;
      case 22:
      case 23:
        (Qt(t), fs(), e !== null && Z(Za));
        break;
      case 24:
        Yn(mt);
    }
  }
  function gi(e, t) {
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
  function pa(e, t, n) {
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
              var j = n,
                k = M;
              try {
                k();
              } catch (ee) {
                Ke(i, j, ee);
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
  function Bd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Mf(t, n);
      } catch (a) {
        Ke(e, e.return, a);
      }
    }
  }
  function Ld(e, t, n) {
    ((n.props = $a(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      Ke(e, t, a);
    }
  }
  function yi(e, t) {
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
  function Tn(e, t) {
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
  function Hd(e) {
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
  function Xs(e, t, n) {
    try {
      var a = e.stateNode;
      (o0(a, e.type, n, t), (a[Ie] = t));
    } catch (i) {
      Ke(e, e.return, i);
    }
  }
  function jd(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Ma(e.type)) || e.tag === 4
    );
  }
  function Qs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || jd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if ((e.tag === 27 && Ma(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Zs(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = Bn)));
    else if (
      a !== 4 &&
      (a === 27 && Ma(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (Zs(e, t, n), e = e.sibling; e !== null; ) (Zs(e, t, n), (e = e.sibling));
  }
  function Du(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (a !== 4 && (a === 27 && Ma(e.type) && (n = e.stateNode), (e = e.child), e !== null))
      for (Du(e, t, n), e = e.sibling; e !== null; ) (Du(e, t, n), (e = e.sibling));
  }
  function Gd(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0]);
      (Rt(t, a, n), (t[Re] = e), (t[Ie] = n));
    } catch (u) {
      Ke(e, e.return, u);
    }
  }
  var Zn = !1,
    gt = !1,
    Ks = !1,
    Yd = typeof WeakSet == 'function' ? WeakSet : Set,
    Et = null;
  function Xg(e, t) {
    if (((e = e.containerInfo), (mc = Wu), (e = Wo(e)), Gr(e))) {
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
              j = -1,
              k = 0,
              ee = 0,
              ne = e,
              F = null;
            t: for (;;) {
              for (
                var I;
                ne !== n || (i !== 0 && ne.nodeType !== 3) || (M = x + i),
                  ne !== u || (a !== 0 && ne.nodeType !== 3) || (j = x + a),
                  ne.nodeType === 3 && (x += ne.nodeValue.length),
                  (I = ne.firstChild) !== null;
              )
                ((F = ne), (ne = I));
              for (;;) {
                if (ne === e) break t;
                if (
                  (F === n && ++k === i && (M = x),
                  F === u && ++ee === a && (j = x),
                  (I = ne.nextSibling) !== null)
                )
                  break;
                ((ne = F), (F = ne.parentNode));
              }
              ne = I;
            }
            n = M === -1 || j === -1 ? null : { start: M, end: j };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (hc = { focusedElem: e, selectionRange: n }, Wu = !1, Et = t; Et !== null; )
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
                  var oe = $a(n.type, i);
                  ((e = a.getSnapshotBeforeUpdate(oe, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (ye) {
                  Ke(n, n.return, ye);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) yc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      yc(e);
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
  function Vd(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (kn(e, n), a & 4 && gi(5, n));
        break;
      case 1:
        if ((kn(e, n), a & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (x) {
              Ke(n, n.return, x);
            }
          else {
            var i = $a(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (x) {
              Ke(n, n.return, x);
            }
          }
        (a & 64 && Bd(n), a & 512 && yi(n, n.return));
        break;
      case 3:
        if ((kn(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
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
            Mf(e, t);
          } catch (x) {
            Ke(n, n.return, x);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Gd(n);
      case 26:
      case 5:
        (kn(e, n), t === null && a & 4 && Hd(n), a & 512 && yi(n, n.return));
        break;
      case 12:
        kn(e, n);
        break;
      case 31:
        (kn(e, n), a & 4 && Qd(e, n));
        break;
      case 13:
        (kn(e, n),
          a & 4 && Zd(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((n = Ig.bind(null, n)), p0(e, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || Zn), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || gt), (i = Zn));
          var u = gt;
          ((Zn = a),
            (gt = t) && !u ? Jn(e, n, (n.subtreeFlags & 8772) !== 0) : kn(e, n),
            (Zn = i),
            (gt = u));
        }
        break;
      case 30:
        break;
      default:
        kn(e, n);
    }
  }
  function qd(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), qd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Ql(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var it = null,
    Bt = !1;
  function Kn(e, t, n) {
    for (n = n.child; n !== null; ) (Xd(e, t, n), (n = n.sibling));
  }
  function Xd(e, t, n) {
    if (_t && typeof _t.onCommitFiberUnmount == 'function')
      try {
        _t.onCommitFiberUnmount(ra, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (gt || Tn(n, t),
          Kn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        gt || Tn(n, t);
        var a = it,
          i = Bt;
        (Ma(n.type) && ((it = n.stateNode), (Bt = !1)),
          Kn(e, t, n),
          Ri(n.stateNode),
          (it = a),
          (Bt = i));
        break;
      case 5:
        gt || Tn(n, t);
      case 6:
        if (((a = it), (i = Bt), (it = null), Kn(e, t, n), (it = a), (Bt = i), it !== null))
          if (Bt)
            try {
              (it.nodeType === 9
                ? it.body
                : it.nodeName === 'HTML'
                  ? it.ownerDocument.body
                  : it
              ).removeChild(n.stateNode);
            } catch (u) {
              Ke(n, t, u);
            }
          else
            try {
              it.removeChild(n.stateNode);
            } catch (u) {
              Ke(n, t, u);
            }
        break;
      case 18:
        it !== null &&
          (Bt
            ? ((e = it),
              Bm(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                n.stateNode
              ),
              Gl(e))
            : Bm(it, n.stateNode));
        break;
      case 4:
        ((a = it),
          (i = Bt),
          (it = n.stateNode.containerInfo),
          (Bt = !0),
          Kn(e, t, n),
          (it = a),
          (Bt = i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (pa(2, n, t), gt || pa(4, n, t), Kn(e, t, n));
        break;
      case 1:
        (gt ||
          (Tn(n, t), (a = n.stateNode), typeof a.componentWillUnmount == 'function' && Ld(n, t, a)),
          Kn(e, t, n));
        break;
      case 21:
        Kn(e, t, n);
        break;
      case 22:
        ((gt = (a = gt) || n.memoizedState !== null), Kn(e, t, n), (gt = a));
        break;
      default:
        Kn(e, t, n);
    }
  }
  function Qd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Gl(e);
      } catch (n) {
        Ke(t, t.return, n);
      }
    }
  }
  function Zd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Gl(e);
      } catch (n) {
        Ke(t, t.return, n);
      }
  }
  function Qg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Yd()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Yd()),
          t
        );
      default:
        throw Error(h(435, e.tag));
    }
  }
  function wu(e, t) {
    var n = Qg(e);
    t.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var i = Pg.bind(null, e, a);
        a.then(i, i);
      }
    });
  }
  function Lt(e, t) {
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
              if (Ma(M.type)) {
                ((it = M.stateNode), (Bt = !1));
                break e;
              }
              break;
            case 5:
              ((it = M.stateNode), (Bt = !1));
              break e;
            case 3:
            case 4:
              ((it = M.stateNode.containerInfo), (Bt = !0));
              break e;
          }
          M = M.return;
        }
        if (it === null) throw Error(h(160));
        (Xd(u, x, i),
          (it = null),
          (Bt = !1),
          (u = i.alternate),
          u !== null && (u.return = null),
          (i.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (Kd(t, e), (t = t.sibling));
  }
  var yn = null;
  function Kd(e, t) {
    var n = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Lt(t, e), Ht(e), a & 4 && (pa(3, e, e.return), gi(3, e), pa(5, e, e.return)));
        break;
      case 1:
        (Lt(t, e),
          Ht(e),
          a & 512 && (gt || n === null || Tn(n, n.return)),
          a & 64 &&
            Zn &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var i = yn;
        if ((Lt(t, e), Ht(e), a & 512 && (gt || n === null || Tn(n, n.return)), a & 4)) {
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
                          u[bn] ||
                          u[Re] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = i.createElement(a)),
                          i.head.insertBefore(u, i.querySelector('head > title'))),
                        Rt(u, a, n),
                        (u[Re] = e),
                        bt(u),
                        (a = u));
                      break e;
                    case 'link':
                      var x = Km('link', 'href', i).get(a + (n.href || ''));
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
                      if ((x = Km('meta', 'content', i).get(a + (n.content || '')))) {
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
                  ((u[Re] = e), bt(u), (a = u));
                }
                e.stateNode = a;
              } else km(i, e.type, e.stateNode);
            else e.stateNode = Zm(i, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                a === null ? km(i, e.type, e.stateNode) : Zm(i, a, e.memoizedProps))
              : a === null && e.stateNode !== null && Xs(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Lt(t, e),
          Ht(e),
          a & 512 && (gt || n === null || Tn(n, n.return)),
          n !== null && a & 4 && Xs(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((Lt(t, e), Ht(e), a & 512 && (gt || n === null || Tn(n, n.return)), e.flags & 32)) {
          i = e.stateNode;
          try {
            sl(i, '');
          } catch (oe) {
            Ke(e, e.return, oe);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), Xs(e, i, n !== null ? n.memoizedProps : i)),
          a & 1024 && (Ks = !0));
        break;
      case 6:
        if ((Lt(t, e), Ht(e), a & 4)) {
          if (e.stateNode === null) throw Error(h(162));
          ((a = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = a;
          } catch (oe) {
            Ke(e, e.return, oe);
          }
        }
        break;
      case 3:
        if (
          ((ku = null),
          (i = yn),
          (yn = Zu(t.containerInfo)),
          Lt(t, e),
          (yn = i),
          Ht(e),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Gl(t.containerInfo);
          } catch (oe) {
            Ke(e, e.return, oe);
          }
        Ks && ((Ks = !1), kd(e));
        break;
      case 4:
        ((a = yn), (yn = Zu(e.stateNode.containerInfo)), Lt(t, e), Ht(e), (yn = a));
        break;
      case 12:
        (Lt(t, e), Ht(e));
        break;
      case 31:
        (Lt(t, e),
          Ht(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), wu(e, a))));
        break;
      case 13:
        (Lt(t, e),
          Ht(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (Nu = ut()),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), wu(e, a))));
        break;
      case 22:
        i = e.memoizedState !== null;
        var j = n !== null && n.memoizedState !== null,
          k = Zn,
          ee = gt;
        if (((Zn = k || i), (gt = ee || j), Lt(t, e), (gt = ee), (Zn = k), Ht(e), a & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (n === null || j || Zn || gt || Wa(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                j = n = t;
                try {
                  if (((u = j.stateNode), i))
                    ((x = u.style),
                      typeof x.setProperty == 'function'
                        ? x.setProperty('display', 'none', 'important')
                        : (x.display = 'none'));
                  else {
                    M = j.stateNode;
                    var ne = j.memoizedProps.style,
                      F = ne != null && ne.hasOwnProperty('display') ? ne.display : null;
                    M.style.display = F == null || typeof F == 'boolean' ? '' : ('' + F).trim();
                  }
                } catch (oe) {
                  Ke(j, j.return, oe);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                j = t;
                try {
                  j.stateNode.nodeValue = i ? '' : j.memoizedProps;
                } catch (oe) {
                  Ke(j, j.return, oe);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                j = t;
                try {
                  var I = j.stateNode;
                  i ? Lm(I, !0) : Lm(j.stateNode, !1);
                } catch (oe) {
                  Ke(j, j.return, oe);
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
        (Lt(t, e),
          Ht(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), wu(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Lt(t, e), Ht(e));
    }
  }
  function Ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (jd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(h(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode,
              u = Qs(e);
            Du(e, u, i);
            break;
          case 5:
            var x = n.stateNode;
            n.flags & 32 && (sl(x, ''), (n.flags &= -33));
            var M = Qs(e);
            Du(e, M, x);
            break;
          case 3:
          case 4:
            var j = n.stateNode.containerInfo,
              k = Qs(e);
            Zs(e, k, j);
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
  function kd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (kd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function kn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Vd(e, t.alternate, t), (t = t.sibling));
  }
  function Wa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (pa(4, t, t.return), Wa(t));
          break;
        case 1:
          Tn(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == 'function' && Ld(t, t.return, n), Wa(t));
          break;
        case 27:
          Ri(t.stateNode);
        case 26:
        case 5:
          (Tn(t, t.return), Wa(t));
          break;
        case 22:
          t.memoizedState === null && Wa(t);
          break;
        case 30:
          Wa(t);
          break;
        default:
          Wa(t);
      }
      e = e.sibling;
    }
  }
  function Jn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        i = e,
        u = t,
        x = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Jn(i, u, n), gi(4, u));
          break;
        case 1:
          if ((Jn(i, u, n), (a = u), (i = a.stateNode), typeof i.componentDidMount == 'function'))
            try {
              i.componentDidMount();
            } catch (k) {
              Ke(a, a.return, k);
            }
          if (((a = u), (i = a.updateQueue), i !== null)) {
            var M = a.stateNode;
            try {
              var j = i.shared.hiddenCallbacks;
              if (j !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < j.length; i++) Tf(j[i], M);
            } catch (k) {
              Ke(a, a.return, k);
            }
          }
          (n && x & 64 && Bd(u), yi(u, u.return));
          break;
        case 27:
          Gd(u);
        case 26:
        case 5:
          (Jn(i, u, n), n && a === null && x & 4 && Hd(u), yi(u, u.return));
          break;
        case 12:
          Jn(i, u, n);
          break;
        case 31:
          (Jn(i, u, n), n && x & 4 && Qd(i, u));
          break;
        case 13:
          (Jn(i, u, n), n && x & 4 && Zd(i, u));
          break;
        case 22:
          (u.memoizedState === null && Jn(i, u, n), yi(u, u.return));
          break;
        case 30:
          break;
        default:
          Jn(i, u, n);
      }
      t = t.sibling;
    }
  }
  function ks(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && ai(n)));
  }
  function Js(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && ai(e)));
  }
  function pn(e, t, n, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Jd(e, t, n, a), (t = t.sibling));
  }
  function Jd(e, t, n, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (pn(e, t, n, a), i & 2048 && gi(9, t));
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
            t !== e && (t.refCount++, e != null && ai(e))));
        break;
      case 12:
        if (i & 2048) {
          (pn(e, t, n, a), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              x = u.id,
              M = u.onPostCommit;
            typeof M == 'function' &&
              M(x, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (j) {
            Ke(t, t.return, j);
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
          (x = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? pn(e, t, n, a)
              : pi(e, t)
            : u._visibility & 2
              ? pn(e, t, n, a)
              : ((u._visibility |= 2), Al(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          i & 2048 && ks(x, t));
        break;
      case 24:
        (pn(e, t, n, a), i & 2048 && Js(t.alternate, t));
        break;
      default:
        pn(e, t, n, a);
    }
  }
  function Al(e, t, n, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e,
        x = t,
        M = n,
        j = a,
        k = x.flags;
      switch (x.tag) {
        case 0:
        case 11:
        case 15:
          (Al(u, x, M, j, i), gi(8, x));
          break;
        case 23:
          break;
        case 22:
          var ee = x.stateNode;
          (x.memoizedState !== null
            ? ee._visibility & 2
              ? Al(u, x, M, j, i)
              : pi(u, x)
            : ((ee._visibility |= 2), Al(u, x, M, j, i)),
            i && k & 2048 && ks(x.alternate, x));
          break;
        case 24:
          (Al(u, x, M, j, i), i && k & 2048 && Js(x.alternate, x));
          break;
        default:
          Al(u, x, M, j, i);
      }
      t = t.sibling;
    }
  }
  function pi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          a = t,
          i = a.flags;
        switch (a.tag) {
          case 22:
            (pi(n, a), i & 2048 && ks(a.alternate, a));
            break;
          case 24:
            (pi(n, a), i & 2048 && Js(a.alternate, a));
            break;
          default:
            pi(n, a);
        }
        t = t.sibling;
      }
  }
  var Si = 8192;
  function Ol(e, t, n) {
    if (e.subtreeFlags & Si) for (e = e.child; e !== null; ) (Fd(e, t, n), (e = e.sibling));
  }
  function Fd(e, t, n) {
    switch (e.tag) {
      case 26:
        (Ol(e, t, n),
          e.flags & Si && e.memoizedState !== null && D0(n, yn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Ol(e, t, n);
        break;
      case 3:
      case 4:
        var a = yn;
        ((yn = Zu(e.stateNode.containerInfo)), Ol(e, t, n), (yn = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Si), (Si = 16777216), Ol(e, t, n), (Si = a))
            : Ol(e, t, n));
        break;
      default:
        Ol(e, t, n);
    }
  }
  function $d(e) {
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
          ((Et = a), Id(a, e));
        }
      $d(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Wd(e), (e = e.sibling));
  }
  function Wd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (xi(e), e.flags & 2048 && pa(9, e, e.return));
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
          ? ((t._visibility &= -3), zu(e))
          : xi(e);
        break;
      default:
        xi(e);
    }
  }
  function zu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((Et = a), Id(a, e));
        }
      $d(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (pa(8, t, t.return), zu(t));
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
  function Id(e, t) {
    for (; Et !== null; ) {
      var n = Et;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          pa(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          ai(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (Et = a));
      else
        e: for (n = e; Et !== null; ) {
          a = Et;
          var i = a.sibling,
            u = a.return;
          if ((qd(a), a === n)) {
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
  var Zg = {
      getCacheForType: function (e) {
        var t = Tt(mt),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return Tt(mt).controller.signal;
      },
    },
    Kg = typeof WeakMap == 'function' ? WeakMap : Map,
    Xe = 0,
    et = null,
    _e = null,
    Oe = 0,
    Ze = 0,
    Zt = null,
    Sa = !1,
    Dl = !1,
    Fs = !1,
    Fn = 0,
    ct = 0,
    xa = 0,
    Ia = 0,
    $s = 0,
    Kt = 0,
    wl = 0,
    bi = null,
    jt = null,
    Ws = !1,
    Nu = 0,
    Pd = 0,
    Uu = 1 / 0,
    Bu = null,
    ba = null,
    yt = 0,
    Ea = null,
    zl = null,
    $n = 0,
    Is = 0,
    Ps = null,
    em = null,
    Ei = 0,
    ec = null;
  function kt() {
    return (Xe & 2) !== 0 && Oe !== 0 ? Oe & -Oe : A.T !== null ? uc() : He();
  }
  function tm() {
    if (Kt === 0)
      if ((Oe & 536870912) === 0 || Ue) {
        var e = dn;
        ((dn <<= 1), (dn & 3932160) === 0 && (dn = 262144), (Kt = e));
      } else Kt = 536870912;
    return ((e = Xt.current), e !== null && (e.flags |= 32), Kt);
  }
  function Gt(e, t, n) {
    (((e === et && (Ze === 2 || Ze === 9)) || e.cancelPendingCommit !== null) &&
      (Nl(e, 0), Ca(e, Oe, Kt, !1)),
      ge(e, n),
      ((Xe & 2) === 0 || e !== et) &&
        (e === et && ((Xe & 2) === 0 && (Ia |= n), ct === 4 && Ca(e, Oe, Kt, !1)), Mn(e)));
  }
  function nm(e, t, n) {
    if ((Xe & 6) !== 0) throw Error(h(327));
    var a = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Ba(e, t),
      i = a ? Fg(e, t) : nc(e, t, !0),
      u = a;
    do {
      if (i === 0) {
        Dl && !a && Ca(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !kg(n))) {
          ((i = nc(e, t, !1)), (u = !1));
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
              i = bi;
              var j = M.current.memoizedState.isDehydrated;
              if ((j && (Nl(M, x).flags |= 256), (x = nc(M, x, !1)), x !== 2)) {
                if (Fs && !j) {
                  ((M.errorRecoveryDisabledLanes |= u), (Ia |= u), (i = 4));
                  break e;
                }
                ((u = jt), (jt = i), u !== null && (jt === null ? (jt = u) : jt.push.apply(jt, u)));
              }
              i = x;
            }
            if (((u = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (Nl(e, 0), Ca(e, t, 0, !0));
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
              Ca(a, t, Kt, !Sa);
              break e;
            case 2:
              jt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && ((i = Nu + 300 - ut()), 10 < i)) {
            if ((Ca(a, t, Kt, !Sa), ll(a, 0, !0) !== 0)) break e;
            (($n = t),
              (a.timeoutHandle = Nm(
                am.bind(null, a, n, jt, Bu, Ws, t, Kt, Ia, wl, Sa, u, 'Throttled', -0, 0),
                i
              )));
            break e;
          }
          am(a, n, jt, Bu, Ws, t, Kt, Ia, wl, Sa, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Mn(e);
  }
  function am(e, t, n, a, i, u, x, M, j, k, ee, ne, F, I) {
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
        unsuspend: Bn,
      }),
        Fd(t, u, ne));
      var oe = (u & 62914560) === u ? Nu - ut() : (u & 4194048) === u ? Pd - ut() : 0;
      if (((oe = w0(ne, oe)), oe !== null)) {
        (($n = u),
          (e.cancelPendingCommit = oe(
            fm.bind(null, e, t, u, n, a, i, x, M, j, ee, ne, null, F, I)
          )),
          Ca(e, u, x, !k));
        return;
      }
    }
    fm(e, t, u, n, a, i, x, M, j);
  }
  function kg(e) {
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
            if (!Vt(u(), i)) return !1;
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
  function Ca(e, t, n, a) {
    ((t &= ~$s),
      (t &= ~Ia),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var i = t; 0 < i; ) {
      var u = 31 - Ot(i),
        x = 1 << u;
      ((a[u] = -1), (i &= ~x));
    }
    n !== 0 && Ee(e, n, t);
  }
  function Lu() {
    return (Xe & 6) === 0 ? (Ci(0), !1) : !0;
  }
  function tc() {
    if (_e !== null) {
      if (Ze === 0) var e = _e.return;
      else ((e = _e), (Gn = Xa = null), ys(e), (Cl = null), (ii = 0), (e = _e));
      for (; e !== null; ) (Ud(e.alternate, e), (e = e.return));
      _e = null;
    }
  }
  function Nl(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), m0(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      ($n = 0),
      tc(),
      (et = e),
      (_e = n = Hn(e.current, null)),
      (Oe = t),
      (Ze = 0),
      (Zt = null),
      (Sa = !1),
      (Dl = Ba(e, t)),
      (Fs = !1),
      (wl = Kt = $s = Ia = xa = ct = 0),
      (jt = bi = null),
      (Ws = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - Ot(a),
          u = 1 << i;
        ((t |= e[i]), (a &= ~u));
      }
    return ((Fn = t), au(), n);
  }
  function lm(e, t) {
    ((Ce = null),
      (A.H = mi),
      t === El || t === fu
        ? ((t = xf()), (Ze = 3))
        : t === is
          ? ((t = xf()), (Ze = 4))
          : (Ze =
              t === Ns
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (Zt = t),
      _e === null && ((ct = 1), Mu(e, Pt(t, e.current))));
  }
  function im() {
    var e = Xt.current;
    return e === null
      ? !0
      : (Oe & 4194048) === Oe
        ? an === null
        : (Oe & 62914560) === Oe || (Oe & 536870912) !== 0
          ? e === an
          : !1;
  }
  function um() {
    var e = A.H;
    return ((A.H = mi), e === null ? mi : e);
  }
  function rm() {
    var e = A.A;
    return ((A.A = Zg), e);
  }
  function Hu() {
    ((ct = 4),
      Sa || ((Oe & 4194048) !== Oe && Xt.current !== null) || (Dl = !0),
      ((xa & 134217727) === 0 && (Ia & 134217727) === 0) || et === null || Ca(et, Oe, Kt, !1));
  }
  function nc(e, t, n) {
    var a = Xe;
    Xe |= 2;
    var i = um(),
      u = rm();
    ((et !== e || Oe !== t) && ((Bu = null), Nl(e, t)), (t = !1));
    var x = ct;
    e: do
      try {
        if (Ze !== 0 && _e !== null) {
          var M = _e,
            j = Zt;
          switch (Ze) {
            case 8:
              (tc(), (x = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Xt.current === null && (t = !0);
              var k = Ze;
              if (((Ze = 0), (Zt = null), Ul(e, M, j, k), n && Dl)) {
                x = 0;
                break e;
              }
              break;
            default:
              ((k = Ze), (Ze = 0), (Zt = null), Ul(e, M, j, k));
          }
        }
        (Jg(), (x = ct));
        break;
      } catch (ee) {
        lm(e, ee);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Gn = Xa = null),
      (Xe = a),
      (A.H = i),
      (A.A = u),
      _e === null && ((et = null), (Oe = 0), au()),
      x
    );
  }
  function Jg() {
    for (; _e !== null; ) sm(_e);
  }
  function Fg(e, t) {
    var n = Xe;
    Xe |= 2;
    var a = um(),
      i = rm();
    et !== e || Oe !== t ? ((Bu = null), (Uu = ut() + 500), Nl(e, t)) : (Dl = Ba(e, t));
    e: do
      try {
        if (Ze !== 0 && _e !== null) {
          t = _e;
          var u = Zt;
          t: switch (Ze) {
            case 1:
              ((Ze = 0), (Zt = null), Ul(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (pf(u)) {
                ((Ze = 0), (Zt = null), cm(t));
                break;
              }
              ((t = function () {
                ((Ze !== 2 && Ze !== 9) || et !== e || (Ze = 7), Mn(e));
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
              pf(u) ? ((Ze = 0), (Zt = null), cm(t)) : ((Ze = 0), (Zt = null), Ul(e, t, u, 7));
              break;
            case 5:
              var x = null;
              switch (_e.tag) {
                case 26:
                  x = _e.memoizedState;
                case 5:
                case 27:
                  var M = _e;
                  if (x ? Jm(x) : M.stateNode.complete) {
                    ((Ze = 0), (Zt = null));
                    var j = M.sibling;
                    if (j !== null) _e = j;
                    else {
                      var k = M.return;
                      k !== null ? ((_e = k), ju(k)) : (_e = null);
                    }
                    break t;
                  }
              }
              ((Ze = 0), (Zt = null), Ul(e, t, u, 5));
              break;
            case 6:
              ((Ze = 0), (Zt = null), Ul(e, t, u, 6));
              break;
            case 8:
              (tc(), (ct = 6));
              break e;
            default:
              throw Error(h(462));
          }
        }
        $g();
        break;
      } catch (ee) {
        lm(e, ee);
      }
    while (!0);
    return (
      (Gn = Xa = null),
      (A.H = a),
      (A.A = i),
      (Xe = n),
      _e !== null ? 0 : ((et = null), (Oe = 0), au(), ct)
    );
  }
  function $g() {
    for (; _e !== null && !zt(); ) sm(_e);
  }
  function sm(e) {
    var t = zd(e.alternate, e, Fn);
    ((e.memoizedProps = e.pendingProps), t === null ? ju(e) : (_e = t));
  }
  function cm(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Rd(n, t, t.pendingProps, t.type, void 0, Oe);
        break;
      case 11:
        t = Rd(n, t, t.pendingProps, t.type.render, t.ref, Oe);
        break;
      case 5:
        ys(t);
      default:
        (Ud(n, t), (t = _e = rf(t, Fn)), (t = zd(n, t, Fn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? ju(e) : (_e = t));
  }
  function Ul(e, t, n, a) {
    ((Gn = Xa = null), ys(t), (Cl = null), (ii = 0));
    var i = t.return;
    try {
      if (jg(e, i, t, n, Oe)) {
        ((ct = 1), Mu(e, Pt(n, e.current)), (_e = null));
        return;
      }
    } catch (u) {
      if (i !== null) throw ((_e = i), u);
      ((ct = 1), Mu(e, Pt(n, e.current)), (_e = null));
      return;
    }
    t.flags & 32768
      ? (Ue || a === 1
          ? (e = !0)
          : Dl || (Oe & 536870912) !== 0
            ? (e = !1)
            : ((Sa = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Xt.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        om(t, e))
      : ju(t);
  }
  function ju(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        om(t, Sa);
        return;
      }
      e = t.return;
      var n = Vg(t.alternate, t, Fn);
      if (n !== null) {
        _e = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    ct === 0 && (ct = 5);
  }
  function om(e, t) {
    do {
      var n = qg(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (_e = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        _e = e;
        return;
      }
      _e = e = n;
    } while (e !== null);
    ((ct = 6), (_e = null));
  }
  function fm(e, t, n, a, i, u, x, M, j) {
    e.cancelPendingCommit = null;
    do Gu();
    while (yt !== 0);
    if ((Xe & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === e.current) throw Error(h(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Qr),
        we(e, n, u, x, M, j),
        e === et && ((_e = et = null), (Oe = 0)),
        (zl = t),
        (Ea = e),
        ($n = n),
        (Is = u),
        (Ps = i),
        (em = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            e0(Ft, function () {
              return (gm(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = A.T), (A.T = null), (i = U.p), (U.p = 2), (x = Xe), (Xe |= 4));
        try {
          Xg(e, t, n);
        } finally {
          ((Xe = x), (U.p = i), (A.T = a));
        }
      }
      ((yt = 1), dm(), mm(), hm());
    }
  }
  function dm() {
    if (yt === 1) {
      yt = 0;
      var e = Ea,
        t = zl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = A.T), (A.T = null));
        var a = U.p;
        U.p = 2;
        var i = Xe;
        Xe |= 4;
        try {
          Kd(t, e);
          var u = hc,
            x = Wo(e.containerInfo),
            M = u.focusedElem,
            j = u.selectionRange;
          if (x !== M && M && M.ownerDocument && $o(M.ownerDocument.documentElement, M)) {
            if (j !== null && Gr(M)) {
              var k = j.start,
                ee = j.end;
              if ((ee === void 0 && (ee = k), 'selectionStart' in M))
                ((M.selectionStart = k), (M.selectionEnd = Math.min(ee, M.value.length)));
              else {
                var ne = M.ownerDocument || document,
                  F = (ne && ne.defaultView) || window;
                if (F.getSelection) {
                  var I = F.getSelection(),
                    oe = M.textContent.length,
                    ye = Math.min(j.start, oe),
                    $e = j.end === void 0 ? ye : Math.min(j.end, oe);
                  !I.extend && ye > $e && ((x = $e), ($e = ye), (ye = x));
                  var Q = Fo(M, ye),
                    X = Fo(M, $e);
                  if (
                    Q &&
                    X &&
                    (I.rangeCount !== 1 ||
                      I.anchorNode !== Q.node ||
                      I.anchorOffset !== Q.offset ||
                      I.focusNode !== X.node ||
                      I.focusOffset !== X.offset)
                  ) {
                    var K = ne.createRange();
                    (K.setStart(Q.node, Q.offset),
                      I.removeAllRanges(),
                      ye > $e
                        ? (I.addRange(K), I.extend(X.node, X.offset))
                        : (K.setEnd(X.node, X.offset), I.addRange(K)));
                  }
                }
              }
            }
            for (ne = [], I = M; (I = I.parentNode); )
              I.nodeType === 1 && ne.push({ element: I, left: I.scrollLeft, top: I.scrollTop });
            for (typeof M.focus == 'function' && M.focus(), M = 0; M < ne.length; M++) {
              var te = ne[M];
              ((te.element.scrollLeft = te.left), (te.element.scrollTop = te.top));
            }
          }
          ((Wu = !!mc), (hc = mc = null));
        } finally {
          ((Xe = i), (U.p = a), (A.T = n));
        }
      }
      ((e.current = t), (yt = 2));
    }
  }
  function mm() {
    if (yt === 2) {
      yt = 0;
      var e = Ea,
        t = zl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = A.T), (A.T = null));
        var a = U.p;
        U.p = 2;
        var i = Xe;
        Xe |= 4;
        try {
          Vd(e, t.alternate, t);
        } finally {
          ((Xe = i), (U.p = a), (A.T = n));
        }
      }
      yt = 3;
    }
  }
  function hm() {
    if (yt === 4 || yt === 3) {
      ((yt = 0), el());
      var e = Ea,
        t = zl,
        n = $n,
        a = em;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (yt = 5)
        : ((yt = 0), (zl = Ea = null), vm(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (ba = null),
        tt(n),
        (t = t.stateNode),
        _t && typeof _t.onCommitFiberRoot == 'function')
      )
        try {
          _t.onCommitFiberRoot(ra, t, void 0, (t.current.flags & 128) === 128);
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
      (($n & 3) !== 0 && Gu(),
        Mn(e),
        (i = e.pendingLanes),
        (n & 261930) !== 0 && (i & 42) !== 0 ? (e === ec ? Ei++ : ((Ei = 0), (ec = e))) : (Ei = 0),
        Ci(0));
    }
  }
  function vm(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), ai(t)));
  }
  function Gu() {
    return (dm(), mm(), hm(), gm());
  }
  function gm() {
    if (yt !== 5) return !1;
    var e = Ea,
      t = Is;
    Is = 0;
    var n = tt($n),
      a = A.T,
      i = U.p;
    try {
      ((U.p = 32 > n ? 32 : n), (A.T = null), (n = Ps), (Ps = null));
      var u = Ea,
        x = $n;
      if (((yt = 0), (zl = Ea = null), ($n = 0), (Xe & 6) !== 0)) throw Error(h(331));
      var M = Xe;
      if (
        ((Xe |= 4),
        Wd(u.current),
        Jd(u, u.current, x, n),
        (Xe = M),
        Ci(0, !1),
        _t && typeof _t.onPostCommitFiberRoot == 'function')
      )
        try {
          _t.onPostCommitFiberRoot(ra, u);
        } catch {}
      return !0;
    } finally {
      ((U.p = i), (A.T = a), vm(e, t));
    }
  }
  function ym(e, t, n) {
    ((t = Pt(n, t)),
      (t = zs(e.stateNode, t, 2)),
      (e = va(e, t, 2)),
      e !== null && (ge(e, 2), Mn(e)));
  }
  function Ke(e, t, n) {
    if (e.tag === 3) ym(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ym(t, e, n);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (ba === null || !ba.has(a)))
          ) {
            ((e = Pt(n, e)),
              (n = pd(2)),
              (a = va(t, n, 2)),
              a !== null && (Sd(n, a, t, e), ge(a, 2), Mn(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ac(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Kg();
      var i = new Set();
      a.set(t, i);
    } else ((i = a.get(t)), i === void 0 && ((i = new Set()), a.set(t, i)));
    i.has(n) || ((Fs = !0), i.add(n), (e = Wg.bind(null, e, t, n)), t.then(e, e));
  }
  function Wg(e, t, n) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      et === e &&
        (Oe & n) === n &&
        (ct === 4 || (ct === 3 && (Oe & 62914560) === Oe && 300 > ut() - Nu)
          ? (Xe & 2) === 0 && Nl(e, 0)
          : ($s |= n),
        wl === Oe && (wl = 0)),
      Mn(e));
  }
  function pm(e, t) {
    (t === 0 && (t = Zi()), (e = Ya(e, t)), e !== null && (ge(e, t), Mn(e)));
  }
  function Ig(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), pm(e, n));
  }
  function Pg(e, t) {
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
    (a !== null && a.delete(t), pm(e, n));
  }
  function e0(e, t) {
    return An(e, t);
  }
  var Yu = null,
    Bl = null,
    lc = !1,
    Vu = !1,
    ic = !1,
    Ta = 0;
  function Mn(e) {
    (e !== Bl && e.next === null && (Bl === null ? (Yu = Bl = e) : (Bl = Bl.next = e)),
      (Vu = !0),
      lc || ((lc = !0), n0()));
  }
  function Ci(e, t) {
    if (!ic && Vu) {
      ic = !0;
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
            u !== 0 && ((n = !0), Em(a, u));
          } else
            ((u = Oe),
              (u = ll(
                a,
                a === et ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Ba(a, u) || ((n = !0), Em(a, u)));
          a = a.next;
        }
      while (n);
      ic = !1;
    }
  }
  function t0() {
    Sm();
  }
  function Sm() {
    Vu = lc = !1;
    var e = 0;
    Ta !== 0 && d0() && (e = Ta);
    for (var t = ut(), n = null, a = Yu; a !== null; ) {
      var i = a.next,
        u = xm(a, t);
      (u === 0
        ? ((a.next = null), n === null ? (Yu = i) : (n.next = i), i === null && (Bl = n))
        : ((n = a), (e !== 0 || (u & 3) !== 0) && (Vu = !0)),
        (a = i));
    }
    ((yt !== 0 && yt !== 5) || Ci(e), Ta !== 0 && (Ta = 0));
  }
  function xm(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        i = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var x = 31 - Ot(u),
        M = 1 << x,
        j = i[x];
      (j === -1
        ? ((M & n) === 0 || (M & a) !== 0) && (i[x] = Er(M, t))
        : j <= t && (e.expiredLanes |= M),
        (u &= ~M));
    }
    if (
      ((t = et),
      (n = Oe),
      (n = ll(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (a = e.callbackNode),
      n === 0 || (e === t && (Ze === 2 || Ze === 9)) || e.cancelPendingCommit !== null)
    )
      return (a !== null && a !== null && on(a), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((n & 3) === 0 || Ba(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((a !== null && on(a), tt(n))) {
        case 2:
        case 8:
          n = tl;
          break;
        case 32:
          n = Ft;
          break;
        case 268435456:
          n = Dn;
          break;
        default:
          n = Ft;
      }
      return (
        (a = bm.bind(null, e)),
        (n = An(n, a)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      a !== null && a !== null && on(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function bm(e, t) {
    if (yt !== 0 && yt !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Gu() && e.callbackNode !== n) return null;
    var a = Oe;
    return (
      (a = ll(e, e === et ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      a === 0
        ? null
        : (nm(e, a, t),
          xm(e, ut()),
          e.callbackNode != null && e.callbackNode === n ? bm.bind(null, e) : null)
    );
  }
  function Em(e, t) {
    if (Gu()) return null;
    nm(e, t, !0);
  }
  function n0() {
    h0(function () {
      (Xe & 6) !== 0 ? An(ke, t0) : Sm();
    });
  }
  function uc() {
    if (Ta === 0) {
      var e = xl;
      (e === 0 && ((e = nl), (nl <<= 1), (nl & 261888) === 0 && (nl = 256)), (Ta = e));
    }
    return Ta;
  }
  function Cm(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Fi('' + e);
  }
  function Tm(e, t) {
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
  function a0(e, t, n, a, i) {
    if (t === 'submit' && n && n.stateNode === i) {
      var u = Cm((i[Ie] || null).action),
        x = a.submitter;
      x &&
        ((t = (t = x[Ie] || null) ? Cm(t.formAction) : x.getAttribute('formAction')),
        t !== null && ((u = t), (x = null)));
      var M = new Pi('action', 'action', null, a, i);
      e.push({
        event: M,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ta !== 0) {
                  var j = x ? Tm(i, x) : new FormData(i);
                  Rs(n, { pending: !0, data: j, method: i.method, action: u }, null, j);
                }
              } else
                typeof u == 'function' &&
                  (M.preventDefault(),
                  (j = x ? Tm(i, x) : new FormData(i)),
                  Rs(n, { pending: !0, data: j, method: i.method, action: u }, u, j));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var rc = 0; rc < Xr.length; rc++) {
    var sc = Xr[rc],
      l0 = sc.toLowerCase(),
      i0 = sc[0].toUpperCase() + sc.slice(1);
    gn(l0, 'on' + i0);
  }
  (gn(ef, 'onAnimationEnd'),
    gn(tf, 'onAnimationIteration'),
    gn(nf, 'onAnimationStart'),
    gn('dblclick', 'onDoubleClick'),
    gn('focusin', 'onFocus'),
    gn('focusout', 'onBlur'),
    gn(bg, 'onTransitionRun'),
    gn(Eg, 'onTransitionStart'),
    gn(Cg, 'onTransitionCancel'),
    gn(af, 'onTransitionEnd'),
    ul('onMouseEnter', ['mouseout', 'mouseover']),
    ul('onMouseLeave', ['mouseout', 'mouseover']),
    ul('onPointerEnter', ['pointerout', 'pointerover']),
    ul('onPointerLeave', ['pointerout', 'pointerover']),
    La('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    La(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    La('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    La('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    La(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    La(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var Ti =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    u0 = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Ti)
    );
  function Mm(e, t) {
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
              j = M.instance,
              k = M.currentTarget;
            if (((M = M.listener), j !== u && i.isPropagationStopped())) break e;
            ((u = M), (i.currentTarget = k));
            try {
              u(i);
            } catch (ee) {
              nu(ee);
            }
            ((i.currentTarget = null), (u = j));
          }
        else
          for (x = 0; x < a.length; x++) {
            if (
              ((M = a[x]),
              (j = M.instance),
              (k = M.currentTarget),
              (M = M.listener),
              j !== u && i.isPropagationStopped())
            )
              break e;
            ((u = M), (i.currentTarget = k));
            try {
              u(i);
            } catch (ee) {
              nu(ee);
            }
            ((i.currentTarget = null), (u = j));
          }
      }
    }
  }
  function Ae(e, t) {
    var n = t[xt];
    n === void 0 && (n = t[xt] = new Set());
    var a = e + '__bubble';
    n.has(a) || (Rm(t, e, 2, !1), n.add(a));
  }
  function cc(e, t, n) {
    var a = 0;
    (t && (a |= 4), Rm(n, e, a, t));
  }
  var qu = '_reactListening' + Math.random().toString(36).slice(2);
  function oc(e) {
    if (!e[qu]) {
      ((e[qu] = !0),
        po.forEach(function (n) {
          n !== 'selectionchange' && (u0.has(n) || cc(n, !1, e), cc(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[qu] || ((t[qu] = !0), cc('selectionchange', !1, t));
    }
  }
  function Rm(e, t, n, a) {
    switch (th(t)) {
      case 2:
        var i = U0;
        break;
      case 8:
        i = B0;
        break;
      default:
        i = Mc;
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
  function fc(e, t, n, a, i) {
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
              var j = x.tag;
              if ((j === 3 || j === 4) && x.stateNode.containerInfo === i) return;
              x = x.return;
            }
          for (; M !== null; ) {
            if (((x = zn(M)), x === null)) return;
            if (((j = x.tag), j === 5 || j === 6 || j === 26 || j === 27)) {
              a = u = x;
              continue e;
            }
            M = M.parentNode;
          }
        }
        a = a.return;
      }
    Do(function () {
      var k = u,
        ee = Ar(n),
        ne = [];
      e: {
        var F = lf.get(e);
        if (F !== void 0) {
          var I = Pi,
            oe = e;
          switch (e) {
            case 'keypress':
              if (Wi(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              I = Pv;
              break;
            case 'focusin':
              ((oe = 'focus'), (I = Ur));
              break;
            case 'focusout':
              ((oe = 'blur'), (I = Ur));
              break;
            case 'beforeblur':
            case 'afterblur':
              I = Ur;
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
              I = No;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              I = Vv;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              I = ng;
              break;
            case ef:
            case tf:
            case nf:
              I = Qv;
              break;
            case af:
              I = lg;
              break;
            case 'scroll':
            case 'scrollend':
              I = Gv;
              break;
            case 'wheel':
              I = ug;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              I = Kv;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              I = Bo;
              break;
            case 'toggle':
            case 'beforetoggle':
              I = sg;
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
                ((te = Kl(X, Q)), te != null && ye.push(Mi(X, te, K))),
              $e)
            )
              break;
            X = X.return;
          }
          0 < ye.length && ((F = new I(F, oe, null, n, ee)), ne.push({ event: F, listeners: ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((F = e === 'mouseover' || e === 'pointerover'),
            (I = e === 'mouseout' || e === 'pointerout'),
            F && n !== _r && (oe = n.relatedTarget || n.fromElement) && (zn(oe) || oe[Pe]))
          )
            break e;
          if (
            (I || F) &&
            ((F =
              ee.window === ee
                ? ee
                : (F = ee.ownerDocument)
                  ? F.defaultView || F.parentWindow
                  : window),
            I
              ? ((oe = n.relatedTarget || n.toElement),
                (I = k),
                (oe = oe ? zn(oe) : null),
                oe !== null &&
                  (($e = l(oe)), (ye = oe.tag), oe !== $e || (ye !== 5 && ye !== 27 && ye !== 6)) &&
                  (oe = null))
              : ((I = null), (oe = k)),
            I !== oe)
          ) {
            if (
              ((ye = No),
              (te = 'onMouseLeave'),
              (Q = 'onMouseEnter'),
              (X = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((ye = Bo), (te = 'onPointerLeave'), (Q = 'onPointerEnter'), (X = 'pointer')),
              ($e = I == null ? F : Zl(I)),
              (K = oe == null ? F : Zl(oe)),
              (F = new ye(te, X + 'leave', I, n, ee)),
              (F.target = $e),
              (F.relatedTarget = K),
              (te = null),
              zn(ee) === k &&
                ((ye = new ye(Q, X + 'enter', oe, n, ee)),
                (ye.target = K),
                (ye.relatedTarget = $e),
                (te = ye)),
              ($e = te),
              I && oe)
            )
              t: {
                for (ye = r0, Q = I, X = oe, K = 0, te = Q; te; te = ye(te)) K++;
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
            (I !== null && _m(ne, F, I, ye, !1),
              oe !== null && $e !== null && _m(ne, $e, oe, ye, !0));
          }
        }
        e: {
          if (
            ((F = k ? Zl(k) : window),
            (I = F.nodeName && F.nodeName.toLowerCase()),
            I === 'select' || (I === 'input' && F.type === 'file'))
          )
            var je = Xo;
          else if (Vo(F))
            if (Qo) je = pg;
            else {
              je = gg;
              var de = vg;
            }
          else
            ((I = F.nodeName),
              !I || I.toLowerCase() !== 'input' || (F.type !== 'checkbox' && F.type !== 'radio')
                ? k && Rr(k.elementType) && (je = Xo)
                : (je = yg));
          if (je && (je = je(e, k))) {
            qo(ne, je, n, ee);
            break e;
          }
          (de && de(e, F, k),
            e === 'focusout' &&
              k &&
              F.type === 'number' &&
              k.memoizedProps.value != null &&
              Mr(F, 'number', F.value));
        }
        switch (((de = k ? Zl(k) : window), e)) {
          case 'focusin':
            (Vo(de) || de.contentEditable === 'true') && ((dl = de), (Yr = k), (ei = null));
            break;
          case 'focusout':
            ei = Yr = dl = null;
            break;
          case 'mousedown':
            Vr = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Vr = !1), Io(ne, n, ee));
            break;
          case 'selectionchange':
            if (xg) break;
          case 'keydown':
          case 'keyup':
            Io(ne, n, ee);
        }
        var Me;
        if (Lr)
          e: {
            switch (e) {
              case 'compositionstart':
                var De = 'onCompositionStart';
                break e;
              case 'compositionend':
                De = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                De = 'onCompositionUpdate';
                break e;
            }
            De = void 0;
          }
        else
          fl
            ? Go(e, n) && (De = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (De = 'onCompositionStart');
        (De &&
          (Lo &&
            n.locale !== 'ko' &&
            (fl || De !== 'onCompositionStart'
              ? De === 'onCompositionEnd' && fl && (Me = wo())
              : ((sa = ee), (wr = 'value' in sa ? sa.value : sa.textContent), (fl = !0))),
          (de = Xu(k, De)),
          0 < de.length &&
            ((De = new Uo(De, e, null, n, ee)),
            ne.push({ event: De, listeners: de }),
            Me ? (De.data = Me) : ((Me = Yo(n)), Me !== null && (De.data = Me)))),
          (Me = og ? fg(e, n) : dg(e, n)) &&
            ((De = Xu(k, 'onBeforeInput')),
            0 < De.length &&
              ((de = new Uo('onBeforeInput', 'beforeinput', null, n, ee)),
              ne.push({ event: de, listeners: De }),
              (de.data = Me))),
          a0(ne, e, k, n, ee));
      }
      Mm(ne, t);
    });
  }
  function Mi(e, t, n) {
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
          ((i = Kl(e, n)),
          i != null && a.unshift(Mi(e, i, u)),
          (i = Kl(e, t)),
          i != null && a.push(Mi(e, i, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function r0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function _m(e, t, n, a, i) {
    for (var u = t._reactName, x = []; n !== null && n !== a; ) {
      var M = n,
        j = M.alternate,
        k = M.stateNode;
      if (((M = M.tag), j !== null && j === a)) break;
      ((M !== 5 && M !== 26 && M !== 27) ||
        k === null ||
        ((j = k),
        i
          ? ((k = Kl(n, u)), k != null && x.unshift(Mi(n, k, j)))
          : i || ((k = Kl(n, u)), k != null && x.push(Mi(n, k, j)))),
        (n = n.return));
    }
    x.length !== 0 && e.push({ event: t, listeners: x });
  }
  var s0 = /\r\n?/g,
    c0 = /\u0000|\uFFFD/g;
  function Am(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        s0,
        `
`
      )
      .replace(c0, '');
  }
  function Om(e, t) {
    return ((t = Am(t)), Am(e) === t);
  }
  function Fe(e, t, n, a, i, u) {
    switch (n) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || sl(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && sl(e, '' + a);
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
        Ao(e, a, u);
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
        a != null && (e.onclick = Bn);
        break;
      case 'onScroll':
        a != null && Ae('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && Ae('scrollend', e);
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
        (Ae('beforetoggle', e), Ae('toggle', e), Ki(e, 'popover', a));
        break;
      case 'xlinkActuate':
        Un(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        Un(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        Un(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        Un(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        Un(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        Un(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        Un(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        Un(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        Un(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        Ki(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = Hv.get(n) || n), Ki(e, n, a));
    }
  }
  function dc(e, t, n, a, i, u) {
    switch (n) {
      case 'style':
        Ao(e, a, u);
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
          ? sl(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && sl(e, '' + a);
        break;
      case 'onScroll':
        a != null && Ae('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && Ae('scrollend', e);
        break;
      case 'onClick':
        a != null && (e.onclick = Bn);
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
        if (!So.hasOwnProperty(n))
          e: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((i = n.endsWith('Capture')),
              (t = n.slice(2, i ? n.length - 7 : void 0)),
              (u = e[Ie] || null),
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
        (Ae('error', e), Ae('load', e));
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
        Ae('invalid', e);
        var M = (u = x = i = null),
          j = null,
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
                  j = ee;
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
        To(e, u, M, j, k, x, i, !1);
        return;
      case 'select':
        (Ae('invalid', e), (a = x = u = null));
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
          t != null ? rl(e, !!a, t, !1) : n != null && rl(e, !!a, n, !0));
        return;
      case 'textarea':
        (Ae('invalid', e), (u = i = a = null));
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
        Ro(e, a, i, u);
        return;
      case 'option':
        for (j in n)
          if (n.hasOwnProperty(j) && ((a = n[j]), a != null))
            switch (j) {
              case 'selected':
                e.selected = a && typeof a != 'function' && typeof a != 'symbol';
                break;
              default:
                Fe(e, t, j, a, n, null);
            }
        return;
      case 'dialog':
        (Ae('beforetoggle', e), Ae('toggle', e), Ae('cancel', e), Ae('close', e));
        break;
      case 'iframe':
      case 'object':
        Ae('load', e);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < Ti.length; a++) Ae(Ti[a], e);
        break;
      case 'image':
        (Ae('error', e), Ae('load', e));
        break;
      case 'details':
        Ae('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (Ae('error', e), Ae('load', e));
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
        if (Rr(t)) {
          for (ee in n)
            n.hasOwnProperty(ee) && ((a = n[ee]), a !== void 0 && dc(e, t, ee, a, n, void 0));
          return;
        }
    }
    for (M in n) n.hasOwnProperty(M) && ((a = n[M]), a != null && Fe(e, t, M, a, n, null));
  }
  function o0(e, t, n, a) {
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
          j = null,
          k = null,
          ee = null;
        for (I in n) {
          var ne = n[I];
          if (n.hasOwnProperty(I) && ne != null)
            switch (I) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                j = ne;
              default:
                a.hasOwnProperty(I) || Fe(e, t, I, null, a, ne);
            }
        }
        for (var F in a) {
          var I = a[F];
          if (((ne = n[F]), a.hasOwnProperty(F) && (I != null || ne != null)))
            switch (F) {
              case 'type':
                u = I;
                break;
              case 'name':
                i = I;
                break;
              case 'checked':
                k = I;
                break;
              case 'defaultChecked':
                ee = I;
                break;
              case 'value':
                x = I;
                break;
              case 'defaultValue':
                M = I;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (I != null) throw Error(h(137, t));
                break;
              default:
                I !== ne && Fe(e, t, F, I, a, ne);
            }
        }
        Tr(e, x, M, j, k, ee, u, i);
        return;
      case 'select':
        I = x = M = F = null;
        for (u in n)
          if (((j = n[u]), n.hasOwnProperty(u) && j != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                I = j;
              default:
                a.hasOwnProperty(u) || Fe(e, t, u, null, a, j);
            }
        for (i in a)
          if (((u = a[i]), (j = n[i]), a.hasOwnProperty(i) && (u != null || j != null)))
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
                u !== j && Fe(e, t, i, u, a, j);
            }
        ((t = M),
          (n = x),
          (a = I),
          F != null
            ? rl(e, !!n, F, !1)
            : !!a != !!n && (t != null ? rl(e, !!n, t, !0) : rl(e, !!n, n ? [] : '', !1)));
        return;
      case 'textarea':
        I = F = null;
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
                I = i;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (i != null) throw Error(h(91));
                break;
              default:
                i !== u && Fe(e, t, x, i, a, u);
            }
        Mo(e, F, I);
        return;
      case 'option':
        for (var oe in n)
          if (((F = n[oe]), n.hasOwnProperty(oe) && F != null && !a.hasOwnProperty(oe)))
            switch (oe) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                Fe(e, t, oe, null, a, F);
            }
        for (j in a)
          if (((F = a[j]), (I = n[j]), a.hasOwnProperty(j) && F !== I && (F != null || I != null)))
            switch (j) {
              case 'selected':
                e.selected = F && typeof F != 'function' && typeof F != 'symbol';
                break;
              default:
                Fe(e, t, j, F, a, I);
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
          if (((F = a[k]), (I = n[k]), a.hasOwnProperty(k) && F !== I && (F != null || I != null)))
            switch (k) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (F != null) throw Error(h(137, t));
                break;
              default:
                Fe(e, t, k, F, a, I);
            }
        return;
      default:
        if (Rr(t)) {
          for (var $e in n)
            ((F = n[$e]),
              n.hasOwnProperty($e) &&
                F !== void 0 &&
                !a.hasOwnProperty($e) &&
                dc(e, t, $e, void 0, a, F));
          for (ee in a)
            ((F = a[ee]),
              (I = n[ee]),
              !a.hasOwnProperty(ee) ||
                F === I ||
                (F === void 0 && I === void 0) ||
                dc(e, t, ee, F, a, I));
          return;
        }
    }
    for (var Q in n)
      ((F = n[Q]),
        n.hasOwnProperty(Q) && F != null && !a.hasOwnProperty(Q) && Fe(e, t, Q, null, a, F));
    for (ne in a)
      ((F = a[ne]),
        (I = n[ne]),
        !a.hasOwnProperty(ne) || F === I || (F == null && I == null) || Fe(e, t, ne, F, a, I));
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
  function f0() {
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
        if (u && M && Dm(x)) {
          for (x = 0, M = i.responseEnd, a += 1; a < n.length; a++) {
            var j = n[a],
              k = j.startTime;
            if (k > M) break;
            var ee = j.transferSize,
              ne = j.initiatorType;
            ee && Dm(ne) && ((j = j.responseEnd), (x += ee * (j < M ? 1 : (M - k) / (j - k))));
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
  var mc = null,
    hc = null;
  function Qu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function wm(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function zm(e, t) {
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
  function vc(e, t) {
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
  var gc = null;
  function d0() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === gc ? !1 : ((gc = e), !0)) : ((gc = null), !1);
  }
  var Nm = typeof setTimeout == 'function' ? setTimeout : void 0,
    m0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Um = typeof Promise == 'function' ? Promise : void 0,
    h0 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Um < 'u'
          ? function (e) {
              return Um.resolve(null).then(e).catch(v0);
            }
          : Nm;
  function v0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ma(e) {
    return e === 'head';
  }
  function Bm(e, t) {
    var n = t,
      a = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === '/$' || n === '/&')) {
          if (a === 0) {
            (e.removeChild(i), Gl(t));
            return;
          }
          a--;
        } else if (n === '$' || n === '$?' || n === '$~' || n === '$!' || n === '&') a++;
        else if (n === 'html') Ri(e.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = e.ownerDocument.head), Ri(n));
          for (var u = n.firstChild; u; ) {
            var x = u.nextSibling,
              M = u.nodeName;
            (u[bn] ||
              M === 'SCRIPT' ||
              M === 'STYLE' ||
              (M === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(u),
              (u = x));
          }
        } else n === 'body' && Ri(e.ownerDocument.body);
      n = i;
    } while (n);
    Gl(t);
  }
  function Lm(e, t) {
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
  function yc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (yc(n), Ql(n));
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
  function g0(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (a) {
        if (!e[bn])
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
      if (((e = ln(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function y0(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) ||
        ((e = ln(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Hm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
        ((e = ln(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function pc(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function Sc(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
  }
  function p0(e, t) {
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
  function ln(e) {
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
  var xc = null;
  function jm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '/$' || n === '/&') {
          if (t === 0) return ln(e.nextSibling);
          t--;
        } else (n !== '$' && n !== '$!' && n !== '$?' && n !== '$~' && n !== '&') || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Gm(e) {
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
  function Ym(e, t, n) {
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
  function Ri(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Ql(e);
  }
  var un = new Map(),
    Vm = new Set();
  function Zu(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Wn = U.d;
  U.d = { f: S0, r: x0, D: b0, C: E0, L: C0, m: T0, X: R0, S: M0, M: _0 };
  function S0() {
    var e = Wn.f(),
      t = Lu();
    return e || t;
  }
  function x0(e) {
    var t = Nn(e);
    t !== null && t.tag === 5 && t.type === 'form' ? ld(t) : Wn.r(e);
  }
  var Ll = typeof document > 'u' ? null : document;
  function qm(e, t, n) {
    var a = Ll;
    if (a && typeof t == 'string' && t) {
      var i = Wt(t);
      ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof n == 'string' && (i += '[crossorigin="' + n + '"]'),
        Vm.has(i) ||
          (Vm.add(i),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(i) === null &&
            ((t = a.createElement('link')), Rt(t, 'link', e), bt(t), a.head.appendChild(t))));
    }
  }
  function b0(e) {
    (Wn.D(e), qm('dns-prefetch', e, null));
  }
  function E0(e, t) {
    (Wn.C(e, t), qm('preconnect', e, t));
  }
  function C0(e, t, n) {
    Wn.L(e, t, n);
    var a = Ll;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + Wt(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((i += '[imagesrcset="' + Wt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (i += '[imagesizes="' + Wt(n.imageSizes) + '"]'))
        : (i += '[href="' + Wt(e) + '"]');
      var u = i;
      switch (t) {
        case 'style':
          u = Hl(e);
          break;
        case 'script':
          u = jl(e);
      }
      un.has(u) ||
        ((e = v(
          { rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t },
          n
        )),
        un.set(u, e),
        a.querySelector(i) !== null ||
          (t === 'style' && a.querySelector(_i(u))) ||
          (t === 'script' && a.querySelector(Ai(u))) ||
          ((t = a.createElement('link')), Rt(t, 'link', e), bt(t), a.head.appendChild(t)));
    }
  }
  function T0(e, t) {
    Wn.m(e, t);
    var n = Ll;
    if (n && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        i = 'link[rel="modulepreload"][as="' + Wt(a) + '"][href="' + Wt(e) + '"]',
        u = i;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = jl(e);
      }
      if (
        !un.has(u) &&
        ((e = v({ rel: 'modulepreload', href: e }, t)), un.set(u, e), n.querySelector(i) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(Ai(u))) return;
        }
        ((a = n.createElement('link')), Rt(a, 'link', e), bt(a), n.head.appendChild(a));
      }
    }
  }
  function M0(e, t, n) {
    Wn.S(e, t, n);
    var a = Ll;
    if (a && e) {
      var i = il(a).hoistableStyles,
        u = Hl(e);
      t = t || 'default';
      var x = i.get(u);
      if (!x) {
        var M = { loading: 0, preload: null };
        if ((x = a.querySelector(_i(u)))) M.loading = 5;
        else {
          ((e = v({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = un.get(u)) && bc(e, n));
          var j = (x = a.createElement('link'));
          (bt(j),
            Rt(j, 'link', e),
            (j._p = new Promise(function (k, ee) {
              ((j.onload = k), (j.onerror = ee));
            })),
            j.addEventListener('load', function () {
              M.loading |= 1;
            }),
            j.addEventListener('error', function () {
              M.loading |= 2;
            }),
            (M.loading |= 4),
            Ku(x, t, a));
        }
        ((x = { type: 'stylesheet', instance: x, count: 1, state: M }), i.set(u, x));
      }
    }
  }
  function R0(e, t) {
    Wn.X(e, t);
    var n = Ll;
    if (n && e) {
      var a = il(n).hoistableScripts,
        i = jl(e),
        u = a.get(i);
      u ||
        ((u = n.querySelector(Ai(i))),
        u ||
          ((e = v({ src: e, async: !0 }, t)),
          (t = un.get(i)) && Ec(e, t),
          (u = n.createElement('script')),
          bt(u),
          Rt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(i, u));
    }
  }
  function _0(e, t) {
    Wn.M(e, t);
    var n = Ll;
    if (n && e) {
      var a = il(n).hoistableScripts,
        i = jl(e),
        u = a.get(i);
      u ||
        ((u = n.querySelector(Ai(i))),
        u ||
          ((e = v({ src: e, async: !0, type: 'module' }, t)),
          (t = un.get(i)) && Ec(e, t),
          (u = n.createElement('script')),
          bt(u),
          Rt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(i, u));
    }
  }
  function Xm(e, t, n, a) {
    var i = (i = ce.current) ? Zu(i) : null;
    if (!i) throw Error(h(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = Hl(n.href)),
            (n = il(i).hoistableStyles),
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
          e = Hl(n.href);
          var u = il(i).hoistableStyles,
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
              (u = i.querySelector(_i(e))) && !u._p && ((x.instance = u), (x.state.loading = 5)),
              un.has(e) ||
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
                un.set(e, n),
                u || A0(i, e, n, x.state))),
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
            ? ((t = jl(n)),
              (n = il(i).hoistableScripts),
              (a = n.get(t)),
              a || ((a = { type: 'script', instance: null, count: 0, state: null }), n.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(h(444, e));
    }
  }
  function Hl(e) {
    return 'href="' + Wt(e) + '"';
  }
  function _i(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Qm(e) {
    return v({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function A0(e, t, n, a) {
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
        bt(t),
        e.head.appendChild(t));
  }
  function jl(e) {
    return '[src="' + Wt(e) + '"]';
  }
  function Ai(e) {
    return 'script[async]' + e;
  }
  function Zm(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + Wt(n.href) + '"]');
          if (a) return ((t.instance = a), bt(a), a);
          var i = v({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            bt(a),
            Rt(a, 'style', i),
            Ku(a, n.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          i = Hl(n.href);
          var u = e.querySelector(_i(i));
          if (u) return ((t.state.loading |= 4), (t.instance = u), bt(u), u);
          ((a = Qm(n)),
            (i = un.get(i)) && bc(a, i),
            (u = (e.ownerDocument || e).createElement('link')),
            bt(u));
          var x = u;
          return (
            (x._p = new Promise(function (M, j) {
              ((x.onload = M), (x.onerror = j));
            })),
            Rt(u, 'link', a),
            (t.state.loading |= 4),
            Ku(u, n.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = jl(n.src)),
            (i = e.querySelector(Ai(u)))
              ? ((t.instance = i), bt(i), i)
              : ((a = n),
                (i = un.get(u)) && ((a = v({}, n)), Ec(a, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement('script')),
                bt(i),
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
  function bc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Ec(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var ku = null;
  function Km(e, t, n) {
    if (ku === null) {
      var a = new Map(),
        i = (ku = new Map());
      i.set(n, a);
    } else ((i = ku), (a = i.get(n)), a || ((a = new Map()), i.set(n, a)));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var u = n[i];
      if (
        !(u[bn] || u[Re] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
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
  function km(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null));
  }
  function O0(e, t, n) {
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
  function Jm(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function D0(e, t, n, a) {
    if (
      n.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var i = Hl(a.href),
          u = t.querySelector(_i(i));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = Ju.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = u),
            bt(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = Qm(a)),
          (i = un.get(i)) && bc(a, i),
          (u = u.createElement('link')),
          bt(u));
        var x = u;
        ((x._p = new Promise(function (M, j) {
          ((x.onload = M), (x.onerror = j));
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
  var Cc = 0;
  function w0(e, t) {
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
            0 < e.imgBytes && Cc === 0 && (Cc = 62500 * f0());
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
              (e.imgBytes > Cc ? 50 : 800) + t
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
        (e.count++, (Fu = new Map()), t.forEach(z0, e), (Fu = null), Ju.call(e)));
  }
  function z0(e, t) {
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
  var Oi = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0,
  };
  function N0(e, t, n, a, i, u, x, M, j) {
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
      (this.expirationTimes = re(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = re(0)),
      (this.hiddenUpdates = re(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = i),
      (this.onCaughtError = u),
      (this.onRecoverableError = x),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = j),
      (this.incompleteTransitions = new Map()));
  }
  function Fm(e, t, n, a, i, u, x, M, j, k, ee, ne) {
    return (
      (e = new N0(e, t, n, x, j, k, ee, ne, M)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = qt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = ns()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: n, cache: t }),
      us(u),
      e
    );
  }
  function $m(e) {
    return e ? ((e = vl), e) : vl;
  }
  function Wm(e, t, n, a, i, u) {
    ((i = $m(i)),
      a.context === null ? (a.context = i) : (a.pendingContext = i),
      (a = ha(t)),
      (a.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (n = va(e, a, t)),
      n !== null && (Gt(n, e, t), ri(n, e, t)));
  }
  function Im(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Tc(e, t) {
    (Im(e, t), (e = e.alternate) && Im(e, t));
  }
  function Pm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ya(e, 67108864);
      (t !== null && Gt(t, e, 67108864), Tc(e, 67108864));
    }
  }
  function eh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = kt();
      t = ze(t);
      var n = Ya(e, t);
      (n !== null && Gt(n, e, t), Tc(e, t));
    }
  }
  var Wu = !0;
  function U0(e, t, n, a) {
    var i = A.T;
    A.T = null;
    var u = U.p;
    try {
      ((U.p = 2), Mc(e, t, n, a));
    } finally {
      ((U.p = u), (A.T = i));
    }
  }
  function B0(e, t, n, a) {
    var i = A.T;
    A.T = null;
    var u = U.p;
    try {
      ((U.p = 8), Mc(e, t, n, a));
    } finally {
      ((U.p = u), (A.T = i));
    }
  }
  function Mc(e, t, n, a) {
    if (Wu) {
      var i = Rc(a);
      if (i === null) (fc(e, t, a, Iu, n), nh(e, a));
      else if (H0(i, e, t, n, a)) a.stopPropagation();
      else if ((nh(e, a), t & 4 && -1 < L0.indexOf(e))) {
        for (; i !== null; ) {
          var u = Nn(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var x = mn(u.pendingLanes);
                  if (x !== 0) {
                    var M = u;
                    for (M.pendingLanes |= 2, M.entangledLanes |= 2; x; ) {
                      var j = 1 << (31 - Ot(x));
                      ((M.entanglements[1] |= j), (x &= ~j));
                    }
                    (Mn(u), (Xe & 6) === 0 && ((Uu = ut() + 500), Ci(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((M = Ya(u, 2)), M !== null && Gt(M, u, 2), Lu(), Tc(u, 2));
            }
          if (((u = Rc(a)), u === null && fc(e, t, a, Iu, n), u === i)) break;
          i = u;
        }
        i !== null && a.stopPropagation();
      } else fc(e, t, a, null, n);
    }
  }
  function Rc(e) {
    return ((e = Ar(e)), _c(e));
  }
  var Iu = null;
  function _c(e) {
    if (((Iu = null), (e = zn(e)), e !== null)) {
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
    return ((Iu = e), null);
  }
  function th(e) {
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
        switch (Nt()) {
          case ke:
            return 2;
          case tl:
            return 8;
          case Ft:
          case On:
            return 32;
          case Dn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ac = !1,
    Ra = null,
    _a = null,
    Aa = null,
    Di = new Map(),
    wi = new Map(),
    Oa = [],
    L0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function nh(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Ra = null;
        break;
      case 'dragenter':
      case 'dragleave':
        _a = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Aa = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Di.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        wi.delete(t.pointerId);
    }
  }
  function zi(e, t, n, a, i, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [i],
        }),
        t !== null && ((t = Nn(t)), t !== null && Pm(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function H0(e, t, n, a, i) {
    switch (t) {
      case 'focusin':
        return ((Ra = zi(Ra, e, t, n, a, i)), !0);
      case 'dragenter':
        return ((_a = zi(_a, e, t, n, a, i)), !0);
      case 'mouseover':
        return ((Aa = zi(Aa, e, t, n, a, i)), !0);
      case 'pointerover':
        var u = i.pointerId;
        return (Di.set(u, zi(Di.get(u) || null, e, t, n, a, i)), !0);
      case 'gotpointercapture':
        return ((u = i.pointerId), wi.set(u, zi(wi.get(u) || null, e, t, n, a, i)), !0);
    }
    return !1;
  }
  function ah(e) {
    var t = zn(e.target);
    if (t !== null) {
      var n = l(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = o(n)), t !== null)) {
            ((e.blockedOn = t),
              nt(e.priority, function () {
                eh(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              nt(e.priority, function () {
                eh(n);
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
      var n = Rc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((_r = a), n.target.dispatchEvent(a), (_r = null));
      } else return ((t = Nn(n)), t !== null && Pm(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function lh(e, t, n) {
    Pu(e) && n.delete(t);
  }
  function j0() {
    ((Ac = !1),
      Ra !== null && Pu(Ra) && (Ra = null),
      _a !== null && Pu(_a) && (_a = null),
      Aa !== null && Pu(Aa) && (Aa = null),
      Di.forEach(lh),
      wi.forEach(lh));
  }
  function er(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ac || ((Ac = !0), s.unstable_scheduleCallback(s.unstable_NormalPriority, j0)));
  }
  var tr = null;
  function ih(e) {
    tr !== e &&
      ((tr = e),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        tr === e && (tr = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            a = e[t + 1],
            i = e[t + 2];
          if (typeof a != 'function') {
            if (_c(a || n) === null) continue;
            break;
          }
          var u = Nn(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Rs(u, { pending: !0, data: i, method: n.method, action: a }, a, i));
        }
      }));
  }
  function Gl(e) {
    function t(j) {
      return er(j, e);
    }
    (Ra !== null && er(Ra, e),
      _a !== null && er(_a, e),
      Aa !== null && er(Aa, e),
      Di.forEach(t),
      wi.forEach(t));
    for (var n = 0; n < Oa.length; n++) {
      var a = Oa[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Oa.length && ((n = Oa[0]), n.blockedOn === null); )
      (ah(n), n.blockedOn === null && Oa.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var i = n[a],
          u = n[a + 1],
          x = i[Ie] || null;
        if (typeof u == 'function') x || ih(n);
        else if (x) {
          var M = null;
          if (u && u.hasAttribute('formAction')) {
            if (((i = u), (x = u[Ie] || null))) M = x.formAction;
            else if (_c(i) !== null) continue;
          } else M = x.action;
          (typeof M == 'function' ? (n[a + 1] = M) : (n.splice(a, 3), (a -= 3)), ih(n));
        }
      }
  }
  function uh() {
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
  function Oc(e) {
    this._internalRoot = e;
  }
  ((nr.prototype.render = Oc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(h(409));
      var n = t.current,
        a = kt();
      Wm(n, a, e, t, null, null);
    }),
    (nr.prototype.unmount = Oc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Wm(e.current, 2, null, e, null, null), Lu(), (t[Pe] = null));
        }
      }));
  function nr(e) {
    this._internalRoot = e;
  }
  nr.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = He();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Oa.length && t !== 0 && t < Oa[n].priority; n++);
      (Oa.splice(n, 0, e), n === 0 && ah(e));
    }
  };
  var rh = E.version;
  if (rh !== '19.2.5') throw Error(h(527, rh, '19.2.5'));
  U.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(h(188))
        : ((e = Object.keys(e).join(',')), Error(h(268, e)));
    return ((e = g(t)), (e = e !== null ? m(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var G0 = {
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
        ((ra = ar.inject(G0)), (_t = ar));
      } catch {}
  }
  return (
    (Ui.createRoot = function (e, t) {
      if (!c(e)) throw Error(h(299));
      var n = !1,
        a = '',
        i = hd,
        u = vd,
        x = gd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (x = t.onRecoverableError)),
        (t = Fm(e, 1, !1, null, null, n, a, null, i, u, x, uh)),
        (e[Pe] = t.current),
        oc(e),
        new Oc(t)
      );
    }),
    (Ui.hydrateRoot = function (e, t, n) {
      if (!c(e)) throw Error(h(299));
      var a = !1,
        i = '',
        u = hd,
        x = vd,
        M = gd,
        j = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (x = n.onCaughtError),
          n.onRecoverableError !== void 0 && (M = n.onRecoverableError),
          n.formState !== void 0 && (j = n.formState)),
        (t = Fm(e, 1, !0, t, n ?? null, a, i, j, u, x, M, uh)),
        (t.context = $m(null)),
        (n = t.current),
        (a = kt()),
        (a = ze(a)),
        (i = ha(a)),
        (i.callback = null),
        va(n, i, a),
        (n = a),
        (t.current.lanes = n),
        ge(t, n),
        Mn(t),
        (e[Pe] = t.current),
        oc(e),
        new nr(t)
      );
    }),
    (Ui.version = '19.2.5'),
    Ui
  );
}
var ph;
function $0() {
  if (ph) return wc.exports;
  ph = 1;
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
  return (s(), (wc.exports = F0()), wc.exports);
}
var W0 = $0(),
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
 */ var Sh = 'popstate';
function xh(s) {
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
function I0(s = {}) {
  function E(h, c) {
    var g;
    let l = (g = c.state) == null ? void 0 : g.masked,
      { pathname: o, search: d, hash: f } = l || h.location;
    return kc(
      '',
      { pathname: o, search: d, hash: f },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || 'default',
      l
        ? { pathname: h.location.pathname, search: h.location.search, hash: h.location.hash }
        : void 0
    );
  }
  function b(h, c) {
    return typeof c == 'string' ? c : Vi(c);
  }
  return ey(E, b, null, s);
}
function rt(s, E) {
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
function P0() {
  return Math.random().toString(36).substring(2, 10);
}
function bh(s, E) {
  return {
    usr: s.state,
    key: s.key,
    idx: E,
    masked: s.unstable_mask ? { pathname: s.pathname, search: s.search, hash: s.hash } : void 0,
  };
}
function kc(s, E, b = null, h, c) {
  return {
    pathname: typeof s == 'string' ? s : s.pathname,
    search: '',
    hash: '',
    ...(typeof E == 'string' ? ql(E) : E),
    state: b,
    key: (E && E.key) || h || P0(),
    unstable_mask: c,
  };
}
function Vi({ pathname: s = '/', search: E = '', hash: b = '' }) {
  return (
    E && E !== '?' && (s += E.charAt(0) === '?' ? E : '?' + E),
    b && b !== '#' && (s += b.charAt(0) === '#' ? b : '#' + b),
    s
  );
}
function ql(s) {
  let E = {};
  if (s) {
    let b = s.indexOf('#');
    b >= 0 && ((E.hash = s.substring(b)), (s = s.substring(0, b)));
    let h = s.indexOf('?');
    (h >= 0 && ((E.search = s.substring(h)), (s = s.substring(0, h))), s && (E.pathname = s));
  }
  return E;
}
function ey(s, E, b, h = {}) {
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
    let C = m(),
      R = C == null ? null : C - g;
    ((g = C), f && f({ action: d, location: p.location, delta: R }));
  }
  function y(C, R) {
    d = 'PUSH';
    let z = xh(C) ? C : kc(p.location, C, R);
    g = m() + 1;
    let L = bh(z, g),
      G = p.createHref(z.unstable_mask || z);
    try {
      o.pushState(L, '', G);
    } catch (T) {
      if (T instanceof DOMException && T.name === 'DataCloneError') throw T;
      c.location.assign(G);
    }
    l && f && f({ action: d, location: p.location, delta: 1 });
  }
  function r(C, R) {
    d = 'REPLACE';
    let z = xh(C) ? C : kc(p.location, C, R);
    g = m();
    let L = bh(z, g),
      G = p.createHref(z.unstable_mask || z);
    (o.replaceState(L, '', G), l && f && f({ action: d, location: p.location, delta: 0 }));
  }
  function S(C) {
    return ty(C);
  }
  let p = {
    get action() {
      return d;
    },
    get location() {
      return s(c, o);
    },
    listen(C) {
      if (f) throw new Error('A history only accepts one active listener');
      return (
        c.addEventListener(Sh, v),
        (f = C),
        () => {
          (c.removeEventListener(Sh, v), (f = null));
        }
      );
    },
    createHref(C) {
      return E(c, C);
    },
    createURL: S,
    encodeLocation(C) {
      let R = S(C);
      return { pathname: R.pathname, search: R.search, hash: R.hash };
    },
    push: y,
    replace: r,
    go(C) {
      return o.go(C);
    },
  };
  return p;
}
function ty(s, E = !1) {
  let b = 'http://localhost';
  (typeof window < 'u' &&
    (b = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    rt(b, 'No window.location.(origin|href) available to create URL'));
  let h = typeof s == 'string' ? s : Vi(s);
  return ((h = h.replace(/ $/, '%20')), !E && h.startsWith('//') && (h = b + h), new URL(h, b));
}
function Yh(s, E, b = '/') {
  return ny(s, E, b, !1);
}
function ny(s, E, b, h) {
  let c = typeof E == 'string' ? ql(E) : E,
    l = la(c.pathname || '/', b);
  if (l == null) return null;
  let o = Vh(s);
  ay(o);
  let d = null;
  for (let f = 0; d == null && f < o.length; ++f) {
    let g = hy(l);
    d = dy(o[f], g, h);
  }
  return d;
}
function Vh(s, E = [], b = [], h = '', c = !1) {
  let l = (o, d, f = c, g) => {
    let m = {
      relativePath: g === void 0 ? o.path || '' : g,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: d,
      route: o,
    };
    if (m.relativePath.startsWith('/')) {
      if (!m.relativePath.startsWith(h) && f) return;
      (rt(
        m.relativePath.startsWith(h),
        `Absolute route path "${m.relativePath}" nested under path "${h}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (m.relativePath = m.relativePath.slice(h.length)));
    }
    let v = Sn([h, m.relativePath]),
      y = b.concat(m);
    (o.children &&
      o.children.length > 0 &&
      (rt(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${v}".`
      ),
      Vh(o.children, E, y, v, f)),
      !(o.path == null && !o.index) && E.push({ path: v, score: oy(v, o.index), routesMeta: y }));
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
  let [b, ...h] = E,
    c = b.endsWith('?'),
    l = b.replace(/\?$/, '');
  if (h.length === 0) return c ? [l, ''] : [l];
  let o = qh(h.join('/')),
    d = [];
  return (
    d.push(...o.map((f) => (f === '' ? l : [l, f].join('/')))),
    c && d.push(...o),
    d.map((f) => (s.startsWith('/') && f === '' ? '/' : f))
  );
}
function ay(s) {
  s.sort((E, b) =>
    E.score !== b.score
      ? b.score - E.score
      : fy(
          E.routesMeta.map((h) => h.childrenIndex),
          b.routesMeta.map((h) => h.childrenIndex)
        )
  );
}
var ly = /^:[\w-]+$/,
  iy = 3,
  uy = 2,
  ry = 1,
  sy = 10,
  cy = -2,
  Eh = (s) => s === '*';
function oy(s, E) {
  let b = s.split('/'),
    h = b.length;
  return (
    b.some(Eh) && (h += cy),
    E && (h += uy),
    b.filter((c) => !Eh(c)).reduce((c, l) => c + (ly.test(l) ? iy : l === '' ? ry : sy), h)
  );
}
function fy(s, E) {
  return s.length === E.length && s.slice(0, -1).every((h, c) => h === E[c])
    ? s[s.length - 1] - E[E.length - 1]
    : 0;
}
function dy(s, E, b = !1) {
  let { routesMeta: h } = s,
    c = {},
    l = '/',
    o = [];
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
    (Object.assign(c, v.params),
      o.push({
        params: c,
        pathname: Sn([l, v.pathname]),
        pathnameBase: py(Sn([l, v.pathnameBase])),
        route: y,
      }),
      v.pathnameBase !== '/' && (l = Sn([l, v.pathnameBase])));
  }
  return o;
}
function or(s, E) {
  typeof s == 'string' && (s = { path: s, caseSensitive: !1, end: !0 });
  let [b, h] = my(s.path, s.caseSensitive, s.end),
    c = E.match(b);
  if (!c) return null;
  let l = c[0],
    o = l.replace(/(.)\/+$/, '$1'),
    d = c.slice(1);
  return {
    params: h.reduce((g, { paramName: m, isOptional: v }, y) => {
      if (m === '*') {
        let S = d[y] || '';
        o = l.slice(0, l.length - S.length).replace(/(.)\/+$/, '$1');
      }
      const r = d[y];
      return (v && !r ? (g[m] = void 0) : (g[m] = (r || '').replace(/%2F/g, '/')), g);
    }, {}),
    pathname: l,
    pathnameBase: o,
    pattern: s,
  };
}
function my(s, E = !1, b = !0) {
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
      : b
        ? (c += '\\/*$')
        : s !== '' && s !== '/' && (c += '(?:(?=\\/|$))'),
    [new RegExp(c, E ? void 0 : 'i'), h]
  );
}
function hy(s) {
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
function la(s, E) {
  if (E === '/') return s;
  if (!s.toLowerCase().startsWith(E.toLowerCase())) return null;
  let b = E.endsWith('/') ? E.length - 1 : E.length,
    h = s.charAt(b);
  return h && h !== '/' ? null : s.slice(b) || '/';
}
var vy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function gy(s, E = '/') {
  let { pathname: b, search: h = '', hash: c = '' } = typeof s == 'string' ? ql(s) : s,
    l;
  return (
    b ? ((b = Qh(b)), b.startsWith('/') ? (l = Ch(b.substring(1), '/')) : (l = Ch(b, E))) : (l = E),
    { pathname: l, search: Sy(h), hash: xy(c) }
  );
}
function Ch(s, E) {
  let b = fr(E).split('/');
  return (
    s.split('/').forEach((c) => {
      c === '..' ? b.length > 1 && b.pop() : c !== '.' && b.push(c);
    }),
    b.length > 1 ? b.join('/') : '/'
  );
}
function Lc(s, E, b, h) {
  return `Cannot include a '${s}' character in a manually specified \`to.${E}\` field [${JSON.stringify(h)}].  Please separate it out to the \`to.${b}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function yy(s) {
  return s.filter((E, b) => b === 0 || (E.route.path && E.route.path.length > 0));
}
function Xh(s) {
  let E = yy(s);
  return E.map((b, h) => (h === E.length - 1 ? b.pathname : b.pathnameBase));
}
function lo(s, E, b, h = !1) {
  let c;
  typeof s == 'string'
    ? (c = ql(s))
    : ((c = { ...s }),
      rt(!c.pathname || !c.pathname.includes('?'), Lc('?', 'pathname', 'search', c)),
      rt(!c.pathname || !c.pathname.includes('#'), Lc('#', 'pathname', 'hash', c)),
      rt(!c.search || !c.search.includes('#'), Lc('#', 'search', 'hash', c)));
  let l = s === '' || c.pathname === '',
    o = l ? '/' : c.pathname,
    d;
  if (o == null) d = b;
  else {
    let v = E.length - 1;
    if (!h && o.startsWith('..')) {
      let y = o.split('/');
      for (; y[0] === '..'; ) (y.shift(), (v -= 1));
      c.pathname = y.join('/');
    }
    d = v >= 0 ? E[v] : '/';
  }
  let f = gy(c, d),
    g = o && o !== '/' && o.endsWith('/'),
    m = (l || o === '.') && b.endsWith('/');
  return (!f.pathname.endsWith('/') && (g || m) && (f.pathname += '/'), f);
}
var Qh = (s) => s.replace(/\/\/+/g, '/'),
  Sn = (s) => Qh(s.join('/')),
  fr = (s) => s.replace(/\/+$/, ''),
  py = (s) => fr(s).replace(/^\/*/, '/'),
  Sy = (s) => (!s || s === '?' ? '' : s.startsWith('?') ? s : '?' + s),
  xy = (s) => (!s || s === '#' ? '' : s.startsWith('#') ? s : '#' + s),
  by = class {
    constructor(s, E, b, h = !1) {
      ((this.status = s),
        (this.statusText = E || ''),
        (this.internal = h),
        b instanceof Error ? ((this.data = b.toString()), (this.error = b)) : (this.data = b));
    }
  };
function Ey(s) {
  return (
    s != null &&
    typeof s.status == 'number' &&
    typeof s.statusText == 'string' &&
    typeof s.internal == 'boolean' &&
    'data' in s
  );
}
function Cy(s) {
  let E = s.map((b) => b.route.path).filter(Boolean);
  return Sn(E) || '/';
}
var Zh =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function Kh(s, E) {
  let b = s;
  if (typeof b != 'string' || !vy.test(b)) return { absoluteURL: void 0, isExternal: !1, to: b };
  let h = b,
    c = !1;
  if (Zh)
    try {
      let l = new URL(window.location.href),
        o = b.startsWith('//') ? new URL(l.protocol + b) : new URL(b),
        d = la(o.pathname, E);
      o.origin === l.origin && d != null ? (b = d + o.search + o.hash) : (c = !0);
    } catch {
      _n(
        !1,
        `<Link to="${b}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: h, isExternal: c, to: b };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var kh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(kh);
var Ty = ['GET', ...kh];
new Set(Ty);
var Xl = w.createContext(null);
Xl.displayName = 'DataRouter';
var mr = w.createContext(null);
mr.displayName = 'DataRouterState';
var Jh = w.createContext(!1);
function My() {
  return w.useContext(Jh);
}
var Fh = w.createContext({ isTransitioning: !1 });
Fh.displayName = 'ViewTransition';
var Ry = w.createContext(new Map());
Ry.displayName = 'Fetchers';
var _y = w.createContext(null);
_y.displayName = 'Await';
var cn = w.createContext(null);
cn.displayName = 'Navigation';
var qi = w.createContext(null);
qi.displayName = 'Location';
var ia = w.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ia.displayName = 'Route';
var io = w.createContext(null);
io.displayName = 'RouteError';
var $h = 'REACT_ROUTER_ERROR',
  Ay = 'REDIRECT',
  Oy = 'ROUTE_ERROR_RESPONSE';
function Dy(s) {
  if (s.startsWith(`${$h}:${Ay}:{`))
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
function wy(s) {
  if (s.startsWith(`${$h}:${Oy}:{`))
    try {
      let E = JSON.parse(s.slice(40));
      if (
        typeof E == 'object' &&
        E &&
        typeof E.status == 'number' &&
        typeof E.statusText == 'string'
      )
        return new by(E.status, E.statusText, E.data);
    } catch {}
}
function zy(s, { relative: E } = {}) {
  rt(Xi(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: b, navigator: h } = w.useContext(cn),
    { hash: c, pathname: l, search: o } = Qi(s, { relative: E }),
    d = l;
  return (
    b !== '/' && (d = l === '/' ? b : Sn([b, l])),
    h.createHref({ pathname: d, search: o, hash: c })
  );
}
function Xi() {
  return w.useContext(qi) != null;
}
function ua() {
  return (
    rt(Xi(), 'useLocation() may be used only in the context of a <Router> component.'),
    w.useContext(qi).location
  );
}
var Wh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Ih(s) {
  w.useContext(cn).static || w.useLayoutEffect(s);
}
function Ny() {
  let { isDataRoute: s } = w.useContext(ia);
  return s ? Ky() : Uy();
}
function Uy() {
  rt(Xi(), 'useNavigate() may be used only in the context of a <Router> component.');
  let s = w.useContext(Xl),
    { basename: E, navigator: b } = w.useContext(cn),
    { matches: h } = w.useContext(ia),
    { pathname: c } = ua(),
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
          b.go(f);
          return;
        }
        let m = lo(f, JSON.parse(l), c, g.relative === 'path');
        (s == null && E !== '/' && (m.pathname = m.pathname === '/' ? E : Sn([E, m.pathname])),
          (g.replace ? b.replace : b.push)(m, g.state, g));
      },
      [E, b, l, c, s]
    )
  );
}
w.createContext(null);
function Qi(s, { relative: E } = {}) {
  let { matches: b } = w.useContext(ia),
    { pathname: h } = ua(),
    c = JSON.stringify(Xh(b));
  return w.useMemo(() => lo(s, JSON.parse(c), h, E === 'path'), [s, c, h, E]);
}
function By(s, E) {
  return Ph(s, E);
}
function Ph(s, E, b) {
  var C;
  rt(Xi(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: h } = w.useContext(cn),
    { matches: c } = w.useContext(ia),
    l = c[c.length - 1],
    o = l ? l.params : {},
    d = l ? l.pathname : '/',
    f = l ? l.pathnameBase : '/',
    g = l && l.route;
  {
    let R = (g && g.path) || '';
    tv(
      d,
      !g || R.endsWith('*') || R.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === '/' ? '*' : `${R}/*`}">.`
    );
  }
  let m = ua(),
    v;
  if (E) {
    let R = typeof E == 'string' ? ql(E) : E;
    (rt(
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
  let S = Yh(s, { pathname: r });
  (_n(g || S != null, `No routes matched location "${v.pathname}${v.search}${v.hash}" `),
    _n(
      S == null ||
        S[S.length - 1].route.element !== void 0 ||
        S[S.length - 1].route.Component !== void 0 ||
        S[S.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let p = Yy(
    S &&
      S.map((R) =>
        Object.assign({}, R, {
          params: Object.assign({}, o, R.params),
          pathname: Sn([
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
              : Sn([
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
    c,
    b
  );
  return E && p
    ? w.createElement(
        qi.Provider,
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
function Ly() {
  let s = Zy(),
    E = Ey(s) ? `${s.status} ${s.statusText}` : s instanceof Error ? s.message : JSON.stringify(s),
    b = s instanceof Error ? s.stack : null,
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
      b ? w.createElement('pre', { style: c }, b) : null,
      o
    )
  );
}
var Hy = w.createElement(Ly, null),
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
        const b = wy(s.digest);
        b && (s = b);
      }
      let E =
        s !== void 0
          ? w.createElement(
              ia.Provider,
              { value: this.props.routeContext },
              w.createElement(io.Provider, { value: s, children: this.props.component })
            )
          : this.props.children;
      return this.context ? w.createElement(jy, { error: s }, E) : E;
    }
  };
ev.contextType = Jh;
var Hc = new WeakMap();
function jy({ children: s, error: E }) {
  let { basename: b } = w.useContext(cn);
  if (typeof E == 'object' && E && 'digest' in E && typeof E.digest == 'string') {
    let h = Dy(E.digest);
    if (h) {
      let c = Hc.get(E);
      if (c) throw c;
      let l = Kh(h.location, b);
      if (Zh && !Hc.get(E))
        if (l.isExternal || h.reloadDocument) window.location.href = l.absoluteURL || l.to;
        else {
          const o = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(l.to, { replace: h.replace })
          );
          throw (Hc.set(E, o), o);
        }
      return w.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${l.absoluteURL || l.to}`,
      });
    }
  }
  return s;
}
function Gy({ routeContext: s, match: E, children: b }) {
  let h = w.useContext(Xl);
  return (
    h &&
      h.static &&
      h.staticContext &&
      (E.route.errorElement || E.route.ErrorBoundary) &&
      (h.staticContext._deepestRenderedBoundaryId = E.route.id),
    w.createElement(ia.Provider, { value: s }, b)
  );
}
function Yy(s, E = [], b) {
  let h = b == null ? void 0 : b.state;
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
    (rt(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(l).join(',')}`
    ),
      (c = c.slice(0, Math.min(c.length, m + 1))));
  }
  let o = !1,
    d = -1;
  if (b && h) {
    o = h.renderFallback;
    for (let m = 0; m < c.length; m++) {
      let v = c[m];
      if (((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (d = m), v.route.id)) {
        let { loaderData: y, errors: r } = h,
          S = v.route.loader && !y.hasOwnProperty(v.route.id) && (!r || r[v.route.id] === void 0);
        if (v.route.lazy || S) {
          (b.isStatic && (o = !0), d >= 0 ? (c = c.slice(0, d + 1)) : (c = [c[0]]));
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
              unstable_pattern: Cy(h.matches),
              errorInfo: v,
            });
          }
        : void 0;
  return c.reduceRight((m, v, y) => {
    let r,
      S = !1,
      p = null,
      C = null;
    h &&
      ((r = l && v.route.id ? l[v.route.id] : void 0),
      (p = v.route.errorElement || Hy),
      o &&
        (d < 0 && y === 0
          ? (tv(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (S = !0),
            (C = null))
          : d === y && ((S = !0), (C = v.route.hydrateFallbackElement || null))));
    let R = E.concat(c.slice(0, y + 1)),
      z = () => {
        let L;
        return (
          r
            ? (L = p)
            : S
              ? (L = C)
              : v.route.Component
                ? (L = w.createElement(v.route.Component, null))
                : v.route.element
                  ? (L = v.route.element)
                  : (L = m),
          w.createElement(Gy, {
            match: v,
            routeContext: { outlet: m, matches: R, isDataRoute: h != null },
            children: L,
          })
        );
      };
    return h && (v.route.ErrorBoundary || v.route.errorElement || y === 0)
      ? w.createElement(ev, {
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
function Vy(s) {
  let E = w.useContext(Xl);
  return (rt(E, uo(s)), E);
}
function qy(s) {
  let E = w.useContext(mr);
  return (rt(E, uo(s)), E);
}
function Xy(s) {
  let E = w.useContext(ia);
  return (rt(E, uo(s)), E);
}
function ro(s) {
  let E = Xy(s),
    b = E.matches[E.matches.length - 1];
  return (rt(b.route.id, `${s} can only be used on routes that contain a unique "id"`), b.route.id);
}
function Qy() {
  return ro('useRouteId');
}
function Zy() {
  var h;
  let s = w.useContext(io),
    E = qy('useRouteError'),
    b = ro('useRouteError');
  return s !== void 0 ? s : (h = E.errors) == null ? void 0 : h[b];
}
function Ky() {
  let { router: s } = Vy('useNavigate'),
    E = ro('useNavigate'),
    b = w.useRef(!1);
  return (
    Ih(() => {
      b.current = !0;
    }),
    w.useCallback(
      async (c, l = {}) => {
        (_n(b.current, Wh),
          b.current &&
            (typeof c == 'number'
              ? await s.navigate(c)
              : await s.navigate(c, { fromRouteId: E, ...l })));
      },
      [s, E]
    )
  );
}
var Th = {};
function tv(s, E, b) {
  !E && !Th[s] && ((Th[s] = !0), _n(!1, b));
}
w.memo(ky);
function ky({ routes: s, future: E, state: b, isStatic: h, onError: c }) {
  return Ph(s, void 0, { state: b, isStatic: h, onError: c });
}
function Jc(s) {
  rt(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function Jy({
  basename: s = '/',
  children: E = null,
  location: b,
  navigationType: h = 'POP',
  navigator: c,
  static: l = !1,
  unstable_useTransitions: o,
}) {
  rt(
    !Xi(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let d = s.replace(/^\/*/, '/'),
    f = w.useMemo(
      () => ({ basename: d, navigator: c, static: l, unstable_useTransitions: o, future: {} }),
      [d, c, l, o]
    );
  typeof b == 'string' && (b = ql(b));
  let {
      pathname: g = '/',
      search: m = '',
      hash: v = '',
      state: y = null,
      key: r = 'default',
      unstable_mask: S,
    } = b,
    p = w.useMemo(() => {
      let C = la(g, d);
      return C == null
        ? null
        : {
            location: { pathname: C, search: m, hash: v, state: y, key: r, unstable_mask: S },
            navigationType: h,
          };
    }, [d, g, m, v, y, r, h, S]);
  return (
    _n(
      p != null,
      `<Router basename="${d}"> is not able to match the URL "${g}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    p == null
      ? null
      : w.createElement(
          cn.Provider,
          { value: f },
          w.createElement(qi.Provider, { children: E, value: p })
        )
  );
}
function Fy({ children: s, location: E }) {
  return By(Fc(s), E);
}
function Fc(s, E = []) {
  let b = [];
  return (
    w.Children.forEach(s, (h, c) => {
      if (!w.isValidElement(h)) return;
      let l = [...E, c];
      if (h.type === w.Fragment) {
        b.push.apply(b, Fc(h.props.children, l));
        return;
      }
      (rt(
        h.type === Jc,
        `[${typeof h.type == 'string' ? h.type : h.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        rt(!h.props.index || !h.props.children, 'An index route cannot have child routes.'));
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
      (h.props.children && (o.children = Fc(h.props.children, l)), b.push(o));
    }),
    b
  );
}
var rr = 'get',
  sr = 'application/x-www-form-urlencoded';
function hr(s) {
  return typeof HTMLElement < 'u' && s instanceof HTMLElement;
}
function $y(s) {
  return hr(s) && s.tagName.toLowerCase() === 'button';
}
function Wy(s) {
  return hr(s) && s.tagName.toLowerCase() === 'form';
}
function Iy(s) {
  return hr(s) && s.tagName.toLowerCase() === 'input';
}
function Py(s) {
  return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
}
function ep(s, E) {
  return s.button === 0 && (!E || E === '_self') && !Py(s);
}
var lr = null;
function tp() {
  if (lr === null)
    try {
      (new FormData(document.createElement('form'), 0), (lr = !1));
    } catch {
      lr = !0;
    }
  return lr;
}
var np = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function jc(s) {
  return s != null && !np.has(s)
    ? (_n(
        !1,
        `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sr}"`
      ),
      null)
    : s;
}
function ap(s, E) {
  let b, h, c, l, o;
  if (Wy(s)) {
    let d = s.getAttribute('action');
    ((h = d ? la(d, E) : null),
      (b = s.getAttribute('method') || rr),
      (c = jc(s.getAttribute('enctype')) || sr),
      (l = new FormData(s)));
  } else if ($y(s) || (Iy(s) && (s.type === 'submit' || s.type === 'image'))) {
    let d = s.form;
    if (d == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let f = s.getAttribute('formaction') || d.getAttribute('action');
    if (
      ((h = f ? la(f, E) : null),
      (b = s.getAttribute('formmethod') || d.getAttribute('method') || rr),
      (c = jc(s.getAttribute('formenctype')) || jc(d.getAttribute('enctype')) || sr),
      (l = new FormData(d, s)),
      !tp())
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
    ((b = rr), (h = null), (c = sr), (o = s));
  }
  return (
    l && c === 'text/plain' && ((o = l), (l = void 0)),
    { action: h, method: b.toLowerCase(), encType: c, formData: l, body: o }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function so(s, E) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(E);
}
function nv(s, E, b, h) {
  let c =
    typeof s == 'string'
      ? new URL(s, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : s;
  return (
    b
      ? c.pathname.endsWith('/')
        ? (c.pathname = `${c.pathname}_.${h}`)
        : (c.pathname = `${c.pathname}.${h}`)
      : c.pathname === '/'
        ? (c.pathname = `_root.${h}`)
        : E && la(c.pathname, E) === '/'
          ? (c.pathname = `${fr(E)}/_root.${h}`)
          : (c.pathname = `${fr(c.pathname)}.${h}`),
    c
  );
}
async function lp(s, E) {
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
function ip(s) {
  return s == null
    ? !1
    : s.href == null
      ? s.rel === 'preload' && typeof s.imageSrcSet == 'string' && typeof s.imageSizes == 'string'
      : typeof s.rel == 'string' && typeof s.href == 'string';
}
async function up(s, E, b) {
  let h = await Promise.all(
    s.map(async (c) => {
      let l = E.routes[c.route.id];
      if (l) {
        let o = await lp(l, b);
        return o.links ? o.links() : [];
      }
      return [];
    })
  );
  return op(
    h
      .flat(1)
      .filter(ip)
      .filter((c) => c.rel === 'stylesheet' || c.rel === 'preload')
      .map((c) =>
        c.rel === 'stylesheet' ? { ...c, rel: 'prefetch', as: 'style' } : { ...c, rel: 'prefetch' }
      )
  );
}
function Mh(s, E, b, h, c, l) {
  let o = (f, g) => (b[g] ? f.route.id !== b[g].route.id : !0),
    d = (f, g) => {
      var m;
      return (
        b[g].pathname !== f.pathname ||
        (((m = b[g].route.path) == null ? void 0 : m.endsWith('*')) &&
          b[g].params['*'] !== f.params['*'])
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
function rp(s, E, { includeHydrateFallback: b } = {}) {
  return sp(
    s
      .map((h) => {
        let c = E.routes[h.route.id];
        if (!c) return [];
        let l = [c.module];
        return (
          c.clientActionModule && (l = l.concat(c.clientActionModule)),
          c.clientLoaderModule && (l = l.concat(c.clientLoaderModule)),
          b && c.hydrateFallbackModule && (l = l.concat(c.hydrateFallbackModule)),
          c.imports && (l = l.concat(c.imports)),
          l
        );
      })
      .flat(1)
  );
}
function sp(s) {
  return [...new Set(s)];
}
function cp(s) {
  let E = {},
    b = Object.keys(s).sort();
  for (let h of b) E[h] = s[h];
  return E;
}
function op(s, E) {
  let b = new Set();
  return (
    new Set(E),
    s.reduce((h, c) => {
      let l = JSON.stringify(cp(c));
      return (b.has(l) || (b.add(l), h.push({ key: l, link: c })), h);
    }, [])
  );
}
function co() {
  let s = w.useContext(Xl);
  return (so(s, 'You must render this element inside a <DataRouterContext.Provider> element'), s);
}
function fp() {
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
function dp(s, E) {
  let b = w.useContext(oo),
    [h, c] = w.useState(!1),
    [l, o] = w.useState(!1),
    { onFocus: d, onBlur: f, onMouseEnter: g, onMouseLeave: m, onTouchStart: v } = E,
    y = w.useRef(null);
  (w.useEffect(() => {
    if ((s === 'render' && o(!0), s === 'viewport')) {
      let p = (R) => {
          R.forEach((z) => {
            o(z.isIntersecting);
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
    S = () => {
      (c(!1), o(!1));
    };
  return b
    ? s !== 'intent'
      ? [l, y, {}]
      : [
          l,
          y,
          {
            onFocus: Bi(d, r),
            onBlur: Bi(f, S),
            onMouseEnter: Bi(g, r),
            onMouseLeave: Bi(m, S),
            onTouchStart: Bi(v, r),
          },
        ]
    : [!1, y, {}];
}
function Bi(s, E) {
  return (b) => {
    (s && s(b), b.defaultPrevented || E(b));
  };
}
function mp({ page: s, ...E }) {
  let b = My(),
    { router: h } = co(),
    c = w.useMemo(() => Yh(h.routes, s, h.basename), [h.routes, s, h.basename]);
  return c
    ? b
      ? w.createElement(vp, { page: s, matches: c, ...E })
      : w.createElement(gp, { page: s, matches: c, ...E })
    : null;
}
function hp(s) {
  let { manifest: E, routeModules: b } = fo(),
    [h, c] = w.useState([]);
  return (
    w.useEffect(() => {
      let l = !1;
      return (
        up(s, E, b).then((o) => {
          l || c(o);
        }),
        () => {
          l = !0;
        }
      );
    }, [s, E, b]),
    h
  );
}
function vp({ page: s, matches: E, ...b }) {
  let h = ua(),
    { future: c } = fo(),
    { basename: l } = co(),
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
    o.map((d) => w.createElement('link', { key: d, rel: 'prefetch', as: 'fetch', href: d, ...b }))
  );
}
function gp({ page: s, matches: E, ...b }) {
  let h = ua(),
    { future: c, manifest: l, routeModules: o } = fo(),
    { basename: d } = co(),
    { loaderData: f, matches: g } = fp(),
    m = w.useMemo(() => Mh(s, E, g, l, h, 'data'), [s, E, g, l, h]),
    v = w.useMemo(() => Mh(s, E, g, l, h, 'assets'), [s, E, g, l, h]),
    y = w.useMemo(() => {
      if (s === h.pathname + h.search + h.hash) return [];
      let p = new Set(),
        C = !1;
      if (
        (E.forEach((z) => {
          var G;
          let L = l.routes[z.route.id];
          !L ||
            !L.hasLoader ||
            ((!m.some((T) => T.route.id === z.route.id) &&
              z.route.id in f &&
              (G = o[z.route.id]) != null &&
              G.shouldRevalidate) ||
            L.hasClientLoader
              ? (C = !0)
              : p.add(z.route.id));
        }),
        p.size === 0)
      )
        return [];
      let R = nv(s, d, c.unstable_trailingSlashAwareDataRequests, 'data');
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
    }, [d, c.unstable_trailingSlashAwareDataRequests, f, h, l, m, E, s, o]),
    r = w.useMemo(() => rp(v, l), [v, l]),
    S = hp(v);
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
function yp(...s) {
  return (E) => {
    s.forEach((b) => {
      typeof b == 'function' ? b(E) : b != null && (b.current = E);
    });
  };
}
var pp =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  pp && (window.__reactRouterVersion = '7.14.2');
} catch {}
function Sp({ basename: s, children: E, unstable_useTransitions: b, window: h }) {
  let c = w.useRef();
  c.current == null && (c.current = I0({ window: h, v5Compat: !0 }));
  let l = c.current,
    [o, d] = w.useState({ action: l.action, location: l.location }),
    f = w.useCallback(
      (g) => {
        b === !1 ? d(g) : w.startTransition(() => d(g));
      },
      [b]
    );
  return (
    w.useLayoutEffect(() => l.listen(f), [l, f]),
    w.createElement(Jy, {
      basename: s,
      children: E,
      location: o.location,
      navigationType: o.action,
      navigator: l,
      unstable_useTransitions: b,
    })
  );
}
var av = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  lv = w.forwardRef(function (
    {
      onClick: E,
      discover: b = 'render',
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
      ...S
    },
    p
  ) {
    let { basename: C, navigator: R, unstable_useTransitions: z } = w.useContext(cn),
      L = typeof m == 'string' && av.test(m),
      G = Kh(m, C);
    m = G.to;
    let T = zy(m, { relative: c }),
      O = ua(),
      D = null;
    if (d) {
      let ae = lo(d, [], O.unstable_mask ? O.unstable_mask.pathname : '/', !0);
      (C !== '/' && (ae.pathname = ae.pathname === '/' ? C : Sn([C, ae.pathname])),
        (D = R.createHref(ae)));
    }
    let [_, H, B] = dp(h, S),
      Y = Cp(m, {
        replace: o,
        unstable_mask: d,
        state: f,
        target: g,
        preventScrollReset: v,
        relative: c,
        viewTransition: y,
        unstable_defaultShouldRevalidate: r,
        unstable_useTransitions: z,
      });
    function V(ae) {
      (E && E(ae), ae.defaultPrevented || Y(ae));
    }
    let $ = !(G.isExternal || l),
      ie = w.createElement('a', {
        ...S,
        ...B,
        href: ($ ? D : void 0) || G.absoluteURL || T,
        onClick: $ ? V : E,
        ref: yp(p, H),
        target: g,
        'data-discover': !L && b === 'render' ? 'true' : void 0,
      });
    return _ && !L ? w.createElement(w.Fragment, null, ie, w.createElement(mp, { page: T })) : ie;
  });
lv.displayName = 'Link';
var xp = w.forwardRef(function (
  {
    'aria-current': E = 'page',
    caseSensitive: b = !1,
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
  let v = Qi(o, { relative: g.relative }),
    y = ua(),
    r = w.useContext(mr),
    { navigator: S, basename: p } = w.useContext(cn),
    C = r != null && Ap(v) && d === !0,
    R = S.encodeLocation ? S.encodeLocation(v).pathname : v.pathname,
    z = y.pathname,
    L = r && r.navigation && r.navigation.location ? r.navigation.location.pathname : null;
  (b || ((z = z.toLowerCase()), (L = L ? L.toLowerCase() : null), (R = R.toLowerCase())),
    L && p && (L = la(L, p) || L));
  const G = R !== '/' && R.endsWith('/') ? R.length - 1 : R.length;
  let T = z === R || (!c && z.startsWith(R) && z.charAt(G) === '/'),
    O = L != null && (L === R || (!c && L.startsWith(R) && L.charAt(R.length) === '/')),
    D = { isActive: T, isPending: O, isTransitioning: C },
    _ = T ? E : void 0,
    H;
  typeof h == 'function'
    ? (H = h(D))
    : (H = [h, T ? 'active' : null, O ? 'pending' : null, C ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let B = typeof l == 'function' ? l(D) : l;
  return w.createElement(
    lv,
    { ...g, 'aria-current': _, className: H, ref: m, style: B, to: o, viewTransition: d },
    typeof f == 'function' ? f(D) : f
  );
});
xp.displayName = 'NavLink';
var bp = w.forwardRef(
  (
    {
      discover: s = 'render',
      fetcherKey: E,
      navigate: b,
      reloadDocument: h,
      replace: c,
      state: l,
      method: o = rr,
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
    let { unstable_useTransitions: p } = w.useContext(cn),
      C = Rp(),
      R = _p(d, { relative: g }),
      z = o.toLowerCase() === 'get' ? 'get' : 'post',
      L = typeof d == 'string' && av.test(d),
      G = (T) => {
        if ((f && f(T), T.defaultPrevented)) return;
        T.preventDefault();
        let O = T.nativeEvent.submitter,
          D = (O == null ? void 0 : O.getAttribute('formmethod')) || o,
          _ = () =>
            C(O || T.currentTarget, {
              fetcherKey: E,
              method: D,
              navigate: b,
              replace: c,
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
      onSubmit: h ? f : G,
      ...r,
      'data-discover': !L && s === 'render' ? 'true' : void 0,
    });
  }
);
bp.displayName = 'Form';
function Ep(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function iv(s) {
  let E = w.useContext(Xl);
  return (rt(E, Ep(s)), E);
}
function Cp(
  s,
  {
    target: E,
    replace: b,
    unstable_mask: h,
    state: c,
    preventScrollReset: l,
    relative: o,
    viewTransition: d,
    unstable_defaultShouldRevalidate: f,
    unstable_useTransitions: g,
  } = {}
) {
  let m = Ny(),
    v = ua(),
    y = Qi(s, { relative: o });
  return w.useCallback(
    (r) => {
      if (ep(r, E)) {
        r.preventDefault();
        let S = b !== void 0 ? b : Vi(v) === Vi(y),
          p = () =>
            m(s, {
              replace: S,
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
    [v, m, y, b, h, c, E, s, l, o, d, f, g]
  );
}
var Tp = 0,
  Mp = () => `__${String(++Tp)}__`;
function Rp() {
  let { router: s } = iv('useSubmit'),
    { basename: E } = w.useContext(cn),
    b = Qy(),
    h = s.fetch,
    c = s.navigate;
  return w.useCallback(
    async (l, o = {}) => {
      let { action: d, method: f, encType: g, formData: m, body: v } = ap(l, E);
      if (o.navigate === !1) {
        let y = o.fetcherKey || Mp();
        await h(y, b, o.action || d, {
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
          fromRouteId: b,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [h, c, E, b]
  );
}
function _p(s, { relative: E } = {}) {
  let { basename: b } = w.useContext(cn),
    h = w.useContext(ia);
  rt(h, 'useFormAction must be used inside a RouteContext');
  let [c] = h.matches.slice(-1),
    l = { ...Qi(s || '.', { relative: E }) },
    o = ua();
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
    b !== '/' && (l.pathname = l.pathname === '/' ? b : Sn([b, l.pathname])),
    Vi(l)
  );
}
function Ap(s, { relative: E } = {}) {
  let b = w.useContext(Fh);
  rt(
    b != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: h } = iv('useViewTransitionState'),
    c = Qi(s, { relative: E });
  if (!b.isTransitioning) return !1;
  let l = la(b.currentLocation.pathname, h) || b.currentLocation.pathname,
    o = la(b.nextLocation.pathname, h) || b.nextLocation.pathname;
  return or(c.pathname, o) != null || or(c.pathname, l) != null;
}
const Op = '_index_r8hfh_1',
  Dp = { index: Op },
  wp = '_layout_1m8bs_1',
  zp = '_top_bar_placeholder_1m8bs_10',
  Np = '_main_1m8bs_15',
  Up = '_field_wrapper_1m8bs_23',
  Bp = '_field_placeholder_1m8bs_28',
  Lp = '_skill_button_wrapper_1m8bs_35',
  Rn = {
    layout: wp,
    top_bar_placeholder: zp,
    main: Np,
    field_wrapper: Up,
    field_placeholder: Bp,
    skill_button_wrapper: Lp,
  },
  Hp = '_surface_6wr97_1',
  jp = '_canvas_layer_6wr97_11',
  Gp = '_game_over_line_6wr97_22',
  Gc = { surface: Hp, canvas_layer: jp, game_over_line: Gp },
  Yp = '_layer_1dvsy_1',
  Vp = '_effect_1dvsy_7',
  qp = '_ring_1dvsy_12',
  Xp = '_score_1dvsy_24',
  Qp = '_special_1dvsy_36',
  Li = { layer: Yp, effect: Vp, ring: qp, score: Xp, special: Qp },
  uv = w.memo(
    w.forwardRef((s, E) => {
      const b = w.useRef(null),
        h = w.useCallback((l) => {
          const o = b.current;
          if (!o) return;
          const d = document.createElement('div');
          ((d.className = `${Li.effect} ${l.isSpecial ? Li.special : ''}`),
            (d.style.left = `${l.x}px`),
            (d.style.top = `${l.y}px`),
            d.setAttribute('aria-hidden', 'true'));
          const f = document.createElement('span');
          ((f.className = Li.ring), d.appendChild(f));
          const g = () => {
            (f.removeEventListener('animationend', g), d.parentNode === o && o.removeChild(d));
          };
          if ((f.addEventListener('animationend', g), l.score > 0)) {
            const m = document.createElement('span');
            ((m.className = Li.score), (m.textContent = `+${l.score}`), d.appendChild(m));
          }
          o.appendChild(d);
        }, []),
        c = w.useCallback(() => {
          const l = b.current;
          if (l) for (; l.firstChild; ) l.removeChild(l.firstChild);
        }, []);
      return (
        w.useImperativeHandle(E, () => ({ add: h, clear: c }), [h, c]),
        J.jsx('div', { ref: b, className: Li.layer, 'aria-hidden': 'true' })
      );
    })
  );
uv.displayName = 'MergeEffect';
const Zp = '_line_1p32x_1',
  Kp = '_preview_wrap_1p32x_11',
  kp = '_preview_1p32x_11',
  Yc = { line: Zp, preview_wrap: Kp, preview: kp },
  Jp = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  rv = w.memo(
    w.forwardRef(({ initialX: s, fieldHeight: E, item: b }, h) => {
      const c = w.useRef(null),
        l = w.useRef(null),
        o = w.useRef((b == null ? void 0 : b.radius) ?? 0);
      if (
        ((o.current = (b == null ? void 0 : b.radius) ?? 0),
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
        !b)
      )
        return null;
      const d = b.radius * 2;
      return J.jsxs(J.Fragment, {
        children: [
          J.jsx('div', {
            ref: c,
            className: Yc.line,
            style: { height: `${E}px`, transform: `translate3d(${s}px, 0, 0)` },
            'aria-hidden': 'true',
          }),
          J.jsx('div', {
            ref: l,
            className: Yc.preview_wrap,
            style: {
              width: `${d}px`,
              height: `${d}px`,
              transform: `translate3d(${s - b.radius}px, 0, 0)`,
            },
            'aria-hidden': 'true',
            children: J.jsx('img', {
              src: Jp(b.svgPath),
              alt: '',
              'aria-hidden': 'true',
              className: Yc.preview,
            }),
          }),
        ],
      });
    })
  );
rv.displayName = 'DropIndicator';
const Fp = (s) => Math.max(0, Math.min(1, s)),
  $p = ({
    canvasContainerRef: s,
    fieldWidth: E,
    fieldHeight: b,
    gameOverLineY: h,
    currentItem: c,
    canInteract: l,
    onDrop: o,
    mergeEffectRef: d,
    isMagnetSelecting: f,
    onMagnetSelect: g,
  }) => {
    const m = w.useRef(null),
      v = w.useRef(null),
      y = w.useRef(0.5),
      r = w.useRef(null),
      S = w.useRef(c);
    S.current = c;
    const p = w.useRef(E);
    p.current = E;
    const C = w.useCallback((_) => {
        const H = S.current,
          B = p.current;
        return H ? Math.max(H.radius, Math.min(B - H.radius, _ * B)) : _ * B;
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
          const B = H.getBoundingClientRect(),
            Y = Fp((_ - B.left) / B.width);
          ((y.current = Y), R());
        },
        [R]
      );
    (w.useEffect(() => {
      ((y.current = 0.5), R());
    }, [c == null ? void 0 : c.level, R]),
      w.useEffect(
        () => () => {
          r.current !== null && (window.cancelAnimationFrame(r.current), (r.current = null));
        },
        []
      ));
    const L = l && !f,
      G = (_) => {
        var H;
        f || (L && (z(_.clientX), (H = m.current) == null || H.setPointerCapture(_.pointerId)));
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
      O = (_) => {
        var H;
        if (f) {
          const B = m.current;
          if (!B) return;
          const Y = B.getBoundingClientRect();
          g(_.clientX - Y.left, _.clientY - Y.top);
          return;
        }
        L &&
          (z(_.clientX),
          o(y.current),
          (H = m.current) == null || H.releasePointerCapture(_.pointerId));
      },
      D = C(0.5);
    return J.jsxs('div', {
      ref: m,
      className: Gc.surface,
      style: { width: `${E}px`, height: `${b}px` },
      onPointerDown: G,
      onPointerMove: T,
      onPointerUp: O,
      role: 'application',
      'aria-label': 'ゲームフィールド',
      children: [
        J.jsx('div', { ref: s, className: Gc.canvas_layer }),
        J.jsx('div', {
          className: Gc.game_over_line,
          style: { top: `${h}px` },
          'aria-hidden': 'true',
        }),
        L ? J.jsx(rv, { ref: v, initialX: D, fieldHeight: b, item: c }) : null,
        J.jsx(uv, { ref: d }),
      ],
    });
  },
  Wp = '_overlay_efysu_1',
  Ip = '_number_efysu_11',
  Rh = { overlay: Wp, number: Ip },
  sv = w.memo(({ seconds: s }) =>
    s === null
      ? null
      : J.jsx('div', {
          className: Rh.overlay,
          'aria-live': 'assertive',
          'aria-label': `ゲームオーバーまで${s}秒`,
          children: J.jsx('span', { className: Rh.number, children: s }, s),
        })
  );
sv.displayName = 'CountdownOverlay';
const Pp = '_overlay_o79hb_1',
  e1 = '_panel_o79hb_13',
  t1 = '_new_record_o79hb_24',
  n1 = '_title_o79hb_32',
  a1 = '_scores_o79hb_40',
  l1 = '_row_o79hb_46',
  i1 = '_gold_o79hb_64',
  u1 = '_restart_o79hb_69',
  In = {
    overlay: Pp,
    panel: e1,
    new_record: t1,
    title: n1,
    scores: a1,
    row: l1,
    gold: i1,
    restart: u1,
  },
  r1 = ({ score: s, bestScore: E, isNewRecord: b, onRestart: h }) =>
    J.jsx('div', {
      className: In.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'ゲームオーバー',
      children: J.jsxs('div', {
        className: In.panel,
        children: [
          b ? J.jsx('p', { className: In.new_record, children: '🎉 新記録！' }) : null,
          J.jsx('h2', { className: In.title, children: 'GAME OVER' }),
          J.jsxs('dl', {
            className: In.scores,
            children: [
              J.jsxs('div', {
                className: In.row,
                children: [
                  J.jsx('dt', { children: 'スコア' }),
                  J.jsx('dd', { className: b ? In.gold : '', children: s }),
                ],
              }),
              J.jsxs('div', {
                className: In.row,
                children: [J.jsx('dt', { children: 'ベスト' }), J.jsx('dd', { children: E })],
              }),
            ],
          }),
          J.jsx('button', {
            type: 'button',
            className: In.restart,
            onClick: h,
            children: 'もう一度あそぶ',
          }),
        ],
      }),
    }),
  s1 = '_root_1svqx_1',
  c1 = '_message_1svqx_13',
  o1 = '_icon_1svqx_30',
  f1 = '_text_1svqx_34',
  d1 = '_cancel_1svqx_38',
  Hi = { root: s1, message: c1, icon: o1, text: f1, cancel: d1 },
  cv = w.memo(({ active: s, onCancel: E }) =>
    s
      ? J.jsxs('div', {
          className: Hi.root,
          children: [
            J.jsxs('div', {
              className: Hi.message,
              children: [
                J.jsx('span', { className: Hi.icon, children: '🧲' }),
                J.jsx('span', { className: Hi.text, children: '引き寄せたいアイテムをタップ' }),
              ],
            }),
            J.jsx('button', {
              type: 'button',
              className: Hi.cancel,
              onClick: E,
              children: 'キャンセル',
            }),
          ],
        })
      : null
  );
cv.displayName = 'MagnetSelectingOverlay';
const m1 = '_gravity_flip_14l5j_1',
  h1 = '_arrow_14l5j_9',
  _h = { gravity_flip: m1, arrow: h1 },
  ov = w.memo(({ effect: s }) =>
    s === 'gravityFlip'
      ? J.jsx('div', {
          className: _h.gravity_flip,
          'aria-hidden': 'true',
          children: Array.from({ length: 6 }).map((E, b) =>
            J.jsx(
              'span',
              {
                className: _h.arrow,
                style: { left: `${(b + 1) * 14}%`, animationDelay: `${b * 0.12}s` },
                children: '⬆',
              },
              b
            )
          ),
        })
      : null
  );
ov.displayName = 'SkillEffectOverlay';
const v1 = '_backdrop_6euhx_1',
  g1 = '_drawer_6euhx_11',
  y1 = '_header_6euhx_23',
  p1 = '_title_6euhx_30',
  S1 = '_close_6euhx_38',
  x1 = '_row_6euhx_54',
  b1 = '_row_label_6euhx_62',
  E1 = '_suspend_6euhx_68',
  C1 = '_footer_6euhx_88',
  T1 = '_version_6euhx_94',
  rn = {
    backdrop: v1,
    drawer: g1,
    header: y1,
    title: p1,
    close: S1,
    row: x1,
    row_label: b1,
    suspend: E1,
    footer: C1,
    version: T1,
  },
  M1 = '_toggle_1ap46_1',
  R1 = { toggle: M1 },
  fv = w.memo(({ isOn: s, onToggle: E }) =>
    J.jsx('button', {
      type: 'button',
      className: R1.toggle,
      onClick: E,
      'aria-label': s ? 'サウンドをOFFにする' : 'サウンドをONにする',
      'aria-pressed': s,
      children: J.jsx('span', { 'aria-hidden': 'true', children: s ? '🔊' : '🔇' }),
    })
  );
fv.displayName = 'SoundToggle';
const _1 = '_toggle_15urq_1',
  A1 = { toggle: _1 },
  mo = [{ id: 'gumi', label: 'グミ' }],
  vr = 'gumi',
  ho = (s) => typeof s == 'string' && mo.some((E) => E.id === s),
  dv = w.memo(({ value: s, onChange: E }) => {
    const b = (h) => {
      const c = h.target.value;
      ho(c) && E(c);
    };
    return J.jsx('select', {
      className: A1.toggle,
      value: s,
      onChange: b,
      'aria-label': 'アセットテーマ',
      children: mo.map((h) => J.jsx('option', { value: h.id, children: h.label }, h.id)),
    });
  });
dv.displayName = 'ThemeToggle';
const vo = w.memo(
  ({
    open: s,
    onClose: E,
    themeId: b,
    onChangeTheme: h,
    isSoundOn: c,
    onToggleSound: l,
    canSuspend: o,
    onSuspend: d,
  }) =>
    s
      ? J.jsx('div', {
          className: rn.backdrop,
          onClick: E,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '設定',
          children: J.jsxs('aside', {
            className: rn.drawer,
            onClick: (f) => f.stopPropagation(),
            children: [
              J.jsxs('header', {
                className: rn.header,
                children: [
                  J.jsx('h2', { className: rn.title, children: '設定' }),
                  J.jsx('button', {
                    type: 'button',
                    className: rn.close,
                    onClick: E,
                    'aria-label': '設定を閉じる',
                    children: '✕',
                  }),
                ],
              }),
              J.jsxs('div', {
                className: rn.row,
                children: [
                  J.jsx('span', { className: rn.row_label, children: 'テーマ' }),
                  J.jsx(dv, { value: b, onChange: h }),
                ],
              }),
              J.jsxs('div', {
                className: rn.row,
                children: [
                  J.jsx('span', { className: rn.row_label, children: 'サウンド' }),
                  J.jsx(fv, { isOn: c, onToggle: l }),
                ],
              }),
              o
                ? J.jsx('button', {
                    type: 'button',
                    className: rn.suspend,
                    onClick: () => {
                      (d(), E());
                    },
                    children: '中断',
                  })
                : null,
              J.jsx('footer', {
                className: rn.footer,
                children: J.jsxs('span', { className: rn.version, children: ['v', '1.0.38'] }),
              }),
            ],
          }),
        })
      : null
);
vo.displayName = 'SettingsDrawer';
const O1 = '_button_12i3t_1',
  D1 = '_gauge_12i3t_23',
  w1 = '_gauge_track_12i3t_32',
  z1 = '_gauge_fill_12i3t_39',
  N1 = '_gauge_fill_full_12i3t_47',
  U1 = '_icon_12i3t_52',
  B1 = '_ready_12i3t_60',
  L1 = '_fully_ready_12i3t_65',
  wa = {
    button: O1,
    gauge: D1,
    gauge_track: w1,
    gauge_fill: z1,
    gauge_fill_full: N1,
    icon: U1,
    ready: B1,
    fully_ready: L1,
  },
  dr = 32,
  Ah = 40,
  Oh = 110,
  H1 = 360,
  Dh = (s) => {
    const E = ((s - 90) * Math.PI) / 180;
    return { x: Ah + dr * Math.cos(E), y: Ah + dr * Math.sin(E) };
  },
  j1 = (s, E) => {
    const b = Dh(s),
      h = Dh(E),
      c = E - s > 180 ? 1 : 0;
    return `M ${b.x} ${b.y} A ${dr} ${dr} 0 ${c} 1 ${h.x} ${h.y}`;
  },
  Vc = 1,
  mv = w.memo(({ gauge: s, segmentMax: E, segmentCount: b, canOpen: h, onClick: c }) => {
    const l = Math.round((s / (E * b)) * 100),
      o = H1 / b,
      d = o - Oh,
      f = Array.from({ length: b }, (v, y) => {
        const r = y * E;
        return Math.max(0, Math.min(E, s - r)) / E;
      }),
      m = f.filter((v) => v >= 1).length === b;
    return J.jsxs('button', {
      type: 'button',
      className: [wa.button, h ? wa.ready : '', m ? wa.fully_ready : ''].filter(Boolean).join(' '),
      onClick: c,
      disabled: !h,
      'aria-label': h ? '必殺技を選択' : `必殺技ゲージ ${l}%`,
      children: [
        J.jsx('svg', {
          className: wa.gauge,
          viewBox: '0 0 80 80',
          'aria-hidden': 'true',
          children: f.map((v, y) => {
            const r = y * o + d / 2,
              S = r + Oh,
              p = j1(r, S),
              C = v >= 1;
            return J.jsxs(
              'g',
              {
                children: [
                  J.jsx('path', { className: wa.gauge_track, d: p, pathLength: Vc }),
                  J.jsx('path', {
                    className: `${wa.gauge_fill} ${C ? wa.gauge_fill_full : ''}`,
                    d: p,
                    pathLength: Vc,
                    strokeDasharray: `${v} ${Vc - v}`,
                  }),
                ],
              },
              y
            );
          }),
        }),
        J.jsx('span', { className: wa.icon, 'aria-hidden': 'true', children: '⚡' }),
      ],
    });
  });
mv.displayName = 'SkillButton';
const G1 = '_backdrop_v7sbf_1',
  Y1 = '_menu_v7sbf_12',
  V1 = '_title_v7sbf_21',
  q1 = '_choices_v7sbf_30',
  X1 = '_choice_v7sbf_30',
  Q1 = '_choice_disabled_v7sbf_60',
  Z1 = '_choice_icon_v7sbf_65',
  K1 = '_choice_label_v7sbf_72',
  k1 = '_choice_uses_v7sbf_83',
  J1 = '_choice_desc_v7sbf_91',
  F1 = '_choice_cost_v7sbf_97',
  $1 = '_cost_pip_v7sbf_105',
  W1 = '_cancel_v7sbf_113',
  Jt = {
    backdrop: G1,
    menu: Y1,
    title: V1,
    choices: q1,
    choice: X1,
    choice_disabled: Q1,
    choice_icon: Z1,
    choice_label: K1,
    choice_uses: k1,
    choice_desc: J1,
    choice_cost: F1,
    cost_pip: $1,
    cancel: W1,
  },
  $c = 100,
  Wc = 3,
  dt = {
    gaugeMax: $c * Wc,
    segmentMax: $c,
    segmentCount: Wc,
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
  I1 = (s) => s,
  hv = { shake: 1, gravityFlip: 2, magnet: Wc },
  Yl = 3,
  ji = (s) => hv[s] * $c,
  P1 = [
    { kind: 'shake', icon: '🌪', label: 'シェイク', description: '盤面を揺らして詰まりを解す' },
    { kind: 'gravityFlip', icon: '⬆️', label: '重力反転', description: '3秒だけ重力を逆さに' },
    {
      kind: 'magnet',
      icon: '🧲',
      label: '同レベル吸引',
      description: 'タップしたアイテムと同レベルを 1 体ランダムに引き寄せ',
    },
  ],
  vv = w.memo(
    ({ open: s, onSelect: E, onClose: b, canUse: h, magnetUsesLeft: c, magnetMaxUses: l }) =>
      s
        ? J.jsx('div', {
            className: Jt.backdrop,
            onClick: b,
            role: 'dialog',
            'aria-modal': 'true',
            'aria-label': '必殺技を選択',
            children: J.jsxs('div', {
              className: Jt.menu,
              onClick: (o) => o.stopPropagation(),
              children: [
                J.jsx('h2', { className: Jt.title, children: '必殺技を選択' }),
                J.jsx('div', {
                  className: Jt.choices,
                  children: P1.map((o) => {
                    const d = hv[o.kind],
                      f = h[o.kind],
                      g = o.kind === 'magnet';
                    return J.jsxs(
                      'button',
                      {
                        type: 'button',
                        className: `${Jt.choice} ${f ? '' : Jt.choice_disabled}`,
                        onClick: () => f && E(o.kind),
                        disabled: !f,
                        children: [
                          J.jsx('span', {
                            className: Jt.choice_icon,
                            'aria-hidden': 'true',
                            children: o.icon,
                          }),
                          J.jsxs('span', {
                            className: Jt.choice_label,
                            children: [
                              o.label,
                              g
                                ? J.jsxs('span', {
                                    className: Jt.choice_uses,
                                    'aria-label': `残り ${c} 回 / 最大 ${l} 回`,
                                    children: ['残り ', c, '/', l, ' 回'],
                                  })
                                : null,
                            ],
                          }),
                          J.jsx('span', { className: Jt.choice_desc, children: o.description }),
                          J.jsx('span', {
                            className: Jt.choice_cost,
                            'aria-label': `コスト ${d} ゲージ`,
                            children: Array.from({ length: d }, (m, v) =>
                              J.jsx('span', { className: Jt.cost_pip }, v)
                            ),
                          }),
                        ],
                      },
                      o.kind
                    );
                  }),
                }),
                J.jsx('button', {
                  type: 'button',
                  className: Jt.cancel,
                  onClick: b,
                  children: 'キャンセル',
                }),
              ],
            }),
          })
        : null
  );
vv.displayName = 'SkillMenu';
const eS = '_top_bar_15roj_1',
  tS = '_right_15roj_12',
  nS = '_settings_15roj_18',
  qc = { top_bar: eS, right: tS, settings: nS },
  aS = '_next_1n5pn_1',
  lS = '_label_1n5pn_7',
  iS = '_thumb_1n5pn_14',
  uS = '_image_1n5pn_27',
  ir = { next: aS, label: lS, thumb: iS, image: uS },
  rS = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  gv = w.memo(({ item: s }) =>
    J.jsxs('div', {
      className: ir.next,
      children: [
        J.jsx('span', { className: ir.label, children: 'NEXT' }),
        J.jsx('div', {
          className: ir.thumb,
          'data-testid': 'next-item',
          children: s
            ? J.jsx('img', { src: rS(s.svgPath), alt: s.name, className: ir.image })
            : null,
        }),
      ],
    })
  );
gv.displayName = 'NextItemPreview';
const sS = '_score_display_pgke7_1',
  cS = '_row_pgke7_7',
  oS = '_label_pgke7_13',
  fS = '_value_pgke7_20',
  dS = '_label_small_pgke7_28',
  mS = '_value_small_pgke7_35',
  Pa = { score_display: sS, row: cS, label: oS, value: fS, label_small: dS, value_small: mS },
  yv = w.memo(({ score: s, bestScore: E }) =>
    J.jsxs('div', {
      className: Pa.score_display,
      children: [
        J.jsxs('div', {
          className: Pa.row,
          children: [
            J.jsx('span', { className: Pa.label, children: 'SCORE' }),
            J.jsx('span', { className: Pa.value, 'data-testid': 'score-value', children: s }),
          ],
        }),
        J.jsxs('div', {
          className: Pa.row,
          children: [
            J.jsx('span', { className: Pa.label_small, children: 'BEST' }),
            J.jsx('span', { className: Pa.value_small, children: E }),
          ],
        }),
      ],
    })
  );
yv.displayName = 'ScoreDisplay';
const hS = ({ score: s, bestScore: E, nextItem: b, onOpenSettings: h }) =>
  J.jsxs('header', {
    className: qc.top_bar,
    children: [
      J.jsx(yv, { score: s, bestScore: E }),
      J.jsxs('div', {
        className: qc.right,
        children: [
          J.jsx(gv, { item: b }),
          J.jsx('button', {
            type: 'button',
            className: qc.settings,
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
 */ var vS = cr.exports,
  wh;
function gS() {
  return (
    wh ||
      ((wh = 1),
      (function (s, E) {
        (function (h, c) {
          s.exports = c();
        })(vS, function () {
          return (function (b) {
            var h = {};
            function c(l) {
              if (h[l]) return h[l].exports;
              var o = (h[l] = { i: l, l: !1, exports: {} });
              return (b[l].call(o.exports, o, o.exports, c), (o.l = !0), o.exports);
            }
            return (
              (c.m = b),
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
            function (b, h) {
              var c = {};
              ((b.exports = c),
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
                          var S = o[y].apply(m, v);
                          typeof S < 'u' && (m = S);
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
                          !o && typeof sh < 'u' && (o = sh.decomp));
                      } catch {
                        o = null;
                      }
                      return o;
                    }));
                })());
            },
            function (b, h) {
              var c = {};
              ((b.exports = c),
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
            function (b, h) {
              var c = {};
              ((b.exports = c),
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
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
                        (v = o.cross(f[S], f[r])),
                        (y = o.mult(o.add(f[S], f[r]), v)),
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
                    for (var m = 0, v = 0, y = f, r, S, p = 0; p < y.length; p++)
                      ((S = (p + 1) % y.length),
                        (r = Math.abs(o.cross(y[S], y[p]))),
                        (m += r * (o.dot(y[S], y[S]) + o.dot(y[S], y[p]) + o.dot(y[p], y[p]))),
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
                        L;
                      for (L = 0; L < p; L++)
                        ((C = f[L]),
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
                        (r = o.sub(y, v)),
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
                      var L = o.normalise({ x: C.y - p.y, y: p.x - C.x }),
                        G = o.normalise({ x: R.y - C.y, y: C.x - R.x }),
                        T = Math.sqrt(2 * Math.pow(z, 2)),
                        O = o.mult(d.clone(L), z),
                        D = o.normalise(o.mult(o.add(L, G), 0.5)),
                        _ = o.sub(C, o.mult(D, T)),
                        H = m;
                      (m === -1 && (H = Math.pow(z, 0.32) * 1.75),
                        (H = d.clamp(H, v, y)),
                        H % 2 === 1 && (H += 1));
                      for (var B = Math.acos(o.dot(L, G)), Y = B / H, V = 0; V < H; V++)
                        r.push(o.add(o.rotate(O, Y * V), _));
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
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
                    var S = {
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
                    o.rotate(r.vertices, r.angle, r.position),
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
                    (S[0].body === r ? (r.vertices = S) : (r.vertices = o.create(S, r)),
                      (r.axes = v.fromVertices(r.vertices)),
                      (r.area = o.area(r.vertices)),
                      l.setMass(r, r.density * r.area));
                    var p = o.centre(r.vertices);
                    (o.translate(r.vertices, p, -1),
                      l.setInertia(r, l._inertiaScale * o.inertia(r.vertices, r.mass)),
                      o.translate(r.vertices, r.position),
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
                        o.clockwiseSort(z);
                        var L = o.hull(z),
                          G = o.centre(L);
                        (l.setVertices(r, L), o.translate(r.vertices, G));
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
                        o.translate(z.vertices, C),
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
                        o.rotate(z.vertices, C, r.position),
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
                        L = r.position.x - p.x,
                        G = r.position.y - p.y;
                      (l.setPosition(r, { x: p.x + (L * R - G * z), y: p.y + (L * z + G * R) }, C),
                        l.setAngle(r, r.angle + S, C));
                    }
                  }),
                  (l.scale = function (r, S, p, C) {
                    var R = 0,
                      z = 0;
                    C = C || r.position;
                    for (var L = 0; L < r.parts.length; L++) {
                      var G = r.parts[L];
                      (o.scale(G.vertices, S, p, C),
                        (G.axes = v.fromVertices(G.vertices)),
                        (G.area = o.area(G.vertices)),
                        l.setMass(G, r.density * G.area),
                        o.translate(G.vertices, { x: -G.position.x, y: -G.position.y }),
                        l.setInertia(G, l._inertiaScale * o.inertia(G.vertices, G.mass)),
                        o.translate(G.vertices, { x: G.position.x, y: G.position.y }),
                        L > 0 && ((R += G.area), (z += G.inertia)),
                        (G.position.x = C.x + (G.position.x - C.x) * S),
                        (G.position.y = C.y + (G.position.y - C.y) * p),
                        m.update(G.bounds, G.vertices, r.velocity));
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
                      L = (r.position.y - r.positionPrev.y) * C;
                    ((r.velocity.x = z * R + (r.force.x / r.mass) * p),
                      (r.velocity.y = L * R + (r.force.y / r.mass) * p),
                      (r.positionPrev.x = r.position.x),
                      (r.positionPrev.y = r.position.y),
                      (r.position.x += r.velocity.x),
                      (r.position.y += r.velocity.y),
                      (r.deltaTime = S),
                      (r.angularVelocity =
                        (r.angle - r.anglePrev) * R * C + (r.torque / r.inertia) * p),
                      (r.anglePrev = r.angle),
                      (r.angle += r.angularVelocity));
                    for (var G = 0; G < r.parts.length; G++) {
                      var T = r.parts[G];
                      (o.translate(T.vertices, r.velocity),
                        G > 0 && ((T.position.x += r.velocity.x), (T.position.y += r.velocity.y)),
                        r.angularVelocity !== 0 &&
                          (o.rotate(T.vertices, r.angularVelocity, r.position),
                          v.rotate(T.axes, r.angularVelocity),
                          G > 0 &&
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
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
                    if (S && o.keys(S).length > 0) {
                      (g || (g = {}), (m = f.split(' ')));
                      for (var p = 0; p < m.length; p++)
                        if (((v = m[p]), (y = S[v]), y)) {
                          ((r = o.clone(g, !1)), (r.name = v), (r.source = d));
                          for (var C = 0; C < y.length; C++) y[C].apply(d, [r]);
                        }
                    }
                  }));
              })();
            },
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
                      for (var S = 0; S < m.composites.length; S++) {
                        var p = m.composites[S];
                        l.setModified(p, v, y, r);
                      }
                  }),
                  (l.add = function (m, v) {
                    var y = [].concat(v);
                    o.trigger(m, 'beforeAdd', { object: v });
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
                    return (o.trigger(m, 'afterAdd', { object: v }), m);
                  }),
                  (l.remove = function (m, v, y) {
                    var r = [].concat(v);
                    o.trigger(m, 'beforeRemove', { object: v });
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
                    return (o.trigger(m, 'afterRemove', { object: v }), m);
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
                        L = z.position.x - y.x,
                        G = z.position.y - y.y;
                      (g.setPosition(z, { x: y.x + (L * S - G * p), y: y.y + (L * p + G * S) }),
                        g.rotate(z, v));
                    }
                    return m;
                  }),
                  (l.scale = function (m, v, y, r, S) {
                    for (var p = S ? l.allBodies(m) : m.bodies, C = 0; C < p.length; C++) {
                      var R = p[C],
                        z = R.position.x - r.x,
                        L = R.position.y - r.y;
                      (g.setPosition(R, { x: r.x + z * v, y: r.y + L * y }), g.scale(R, v, y));
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
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
                      var S = g[r],
                        p = o.getSpeed(S),
                        C = o.getAngularSpeed(S),
                        R = p * p + C * C;
                      if (S.force.x !== 0 || S.force.y !== 0) {
                        l.set(S, !1);
                        continue;
                      }
                      var z = Math.min(S.motion, R),
                        L = Math.max(S.motion, R);
                      ((S.motion = l._minBias * z + (1 - l._minBias) * L),
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
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
                      L = p.penetration,
                      G = p.supports,
                      T = C.overlap,
                      O = C.axis,
                      D = O.x,
                      _ = O.y,
                      H = y.position.x - v.position.x,
                      B = y.position.y - v.position.y;
                    (D * H + _ * B >= 0 && ((D = -D), (_ = -_)),
                      (R.x = D),
                      (R.y = _),
                      (z.x = -_),
                      (z.y = D),
                      (L.x = D * T),
                      (L.y = _ * T),
                      (p.depth = T));
                    var Y = l._findSupports(v, y, R, 1),
                      V = 0;
                    if (
                      (o.contains(v.vertices, Y[0]) && (G[V++] = Y[0]),
                      o.contains(v.vertices, Y[1]) && (G[V++] = Y[1]),
                      V < 2)
                    ) {
                      var $ = l._findSupports(y, v, R, -1);
                      (o.contains(y.vertices, $[0]) && (G[V++] = $[0]),
                        V < 2 && o.contains(y.vertices, $[1]) && (G[V++] = $[1]));
                    }
                    return (V === 0 && (G[V++] = Y[0]), (p.supportCount = V), p);
                  }),
                  (l._overlapAxes = function (v, y, r, S) {
                    var p = y.length,
                      C = r.length,
                      R = y[0].x,
                      z = y[0].y,
                      L = r[0].x,
                      G = r[0].y,
                      T = S.length,
                      O = Number.MAX_VALUE,
                      D = 0,
                      _,
                      H,
                      B,
                      Y,
                      V,
                      $;
                    for (V = 0; V < T; V++) {
                      var ie = S[V],
                        ae = ie.x,
                        A = ie.y,
                        U = R * ae + z * A,
                        q = L * ae + G * A,
                        W = U,
                        le = q;
                      for ($ = 1; $ < p; $ += 1)
                        ((Y = y[$].x * ae + y[$].y * A), Y > W ? (W = Y) : Y < U && (U = Y));
                      for ($ = 1; $ < C; $ += 1)
                        ((Y = r[$].x * ae + r[$].y * A), Y > le ? (le = Y) : Y < q && (q = Y));
                      if (
                        ((H = W - q),
                        (B = le - U),
                        (_ = H < B ? H : B),
                        _ < O && ((O = _), (D = V), _ <= 0))
                      )
                        break;
                    }
                    ((v.axis = S[D]), (v.overlap = O));
                  }),
                  (l._findSupports = function (v, y, r, S) {
                    var p = y.vertices,
                      C = p.length,
                      R = v.position.x,
                      z = v.position.y,
                      L = r.x * S,
                      G = r.y * S,
                      T = p[0],
                      O = T,
                      D = L * (R - O.x) + G * (z - O.y),
                      _,
                      H,
                      B;
                    for (B = 1; B < C; B += 1)
                      ((O = p[B]),
                        (H = L * (R - O.x) + G * (z - O.y)),
                        H < D && ((D = H), (T = O)));
                    return (
                      (_ = p[(C + T.index - 1) % C]),
                      (D = L * (R - _.x) + G * (z - _.y)),
                      (O = p[(T.index + 1) % C]),
                      L * (R - O.x) + G * (z - O.y) < D
                        ? ((f[0] = T), (f[1] = O), f)
                        : ((f[0] = T), (f[1] = _), f)
                    );
                  }));
              })();
            },
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
                        L = R;
                      if (
                        (S && (z = d.add(S.position, C)),
                        p && (L = d.add(p.position, R)),
                        !(!z || !L))
                      ) {
                        var G = d.sub(z, L),
                          T = d.magnitude(G);
                        T < l._minLength && (T = l._minLength);
                        var O = (T - y.length) / T,
                          D = y.stiffness >= 1 || y.length === 0,
                          _ = D ? y.stiffness * r : y.stiffness * r * r,
                          H = y.damping * r,
                          B = d.mult(G, O * _),
                          Y = (S ? S.inverseMass : 0) + (p ? p.inverseMass : 0),
                          V = (S ? S.inverseInertia : 0) + (p ? p.inverseInertia : 0),
                          $ = Y + V,
                          ie,
                          ae,
                          A,
                          U,
                          q;
                        if (H > 0) {
                          var W = d.create();
                          ((A = d.div(G, T)),
                            (q = d.sub(
                              (p && d.sub(p.position, p.positionPrev)) || W,
                              (S && d.sub(S.position, S.positionPrev)) || W
                            )),
                            (U = d.dot(A, q)));
                        }
                        (S &&
                          !S.isStatic &&
                          ((ae = S.inverseMass / Y),
                          (S.constraintImpulse.x -= B.x * ae),
                          (S.constraintImpulse.y -= B.y * ae),
                          (S.position.x -= B.x * ae),
                          (S.position.y -= B.y * ae),
                          H > 0 &&
                            ((S.positionPrev.x -= H * A.x * U * ae),
                            (S.positionPrev.y -= H * A.y * U * ae)),
                          (ie =
                            (d.cross(C, B) / $) *
                            l._torqueDampen *
                            S.inverseInertia *
                            (1 - y.angularStiffness)),
                          (S.constraintImpulse.angle -= ie),
                          (S.angle -= ie)),
                          p &&
                            !p.isStatic &&
                            ((ae = p.inverseMass / Y),
                            (p.constraintImpulse.x += B.x * ae),
                            (p.constraintImpulse.y += B.y * ae),
                            (p.position.x += B.x * ae),
                            (p.position.y += B.y * ae),
                            H > 0 &&
                              ((p.positionPrev.x += H * A.x * U * ae),
                              (p.positionPrev.y += H * A.y * U * ae)),
                            (ie =
                              (d.cross(R, B) / $) *
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
                      var S = y[r],
                        p = S.constraintImpulse;
                      if (!(S.isStatic || (p.x === 0 && p.y === 0 && p.angle === 0))) {
                        f.set(S, !1);
                        for (var C = 0; C < S.parts.length; C++) {
                          var R = S.parts[C];
                          (o.translate(R.vertices, p),
                            C > 0 && ((R.position.x += p.x), (R.position.y += p.y)),
                            p.angle !== 0 &&
                              (o.rotate(R.vertices, p.angle, S.position),
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
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
                          S;
                        ((S = r.x * m - r.y * v), (r.y = r.x * v + r.y * m), (r.x = S));
                      }
                  }));
              })();
            },
            function (b, h, c) {
              var l = {};
              b.exports = l;
              var o = c(3),
                d = c(0),
                f = c(4),
                g = c(1),
                m = c(2);
              (function () {
                ((l.rectangle = function (v, y, r, S, p) {
                  p = p || {};
                  var C = {
                    label: 'Rectangle Body',
                    position: { x: v, y },
                    vertices: o.fromPath('L 0 0 L ' + r + ' 0 L ' + r + ' ' + S + ' L 0 ' + S),
                  };
                  if (p.chamfer) {
                    var R = p.chamfer;
                    ((C.vertices = o.chamfer(
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
                      L = z + R,
                      G = L + z,
                      T;
                    p < 0.5
                      ? (T = 'L 0 0 L ' + z + ' ' + -S + ' L ' + L + ' ' + -S + ' L ' + G + ' 0')
                      : (T = 'L 0 0 L ' + L + ' ' + -S + ' L ' + G + ' 0');
                    var O = {
                      label: 'Trapezoid Body',
                      position: { x: v, y },
                      vertices: o.fromPath(T),
                    };
                    if (C.chamfer) {
                      var D = C.chamfer;
                      ((O.vertices = o.chamfer(
                        O.vertices,
                        D.radius,
                        D.quality,
                        D.qualityMin,
                        D.qualityMax
                      )),
                        delete C.chamfer);
                    }
                    return f.create(d.extend({}, O, C));
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
                    for (var C = (2 * Math.PI) / r, R = '', z = C * 0.5, L = 0; L < r; L += 1) {
                      var G = z + L * C,
                        T = Math.cos(G) * S,
                        O = Math.sin(G) * S;
                      R += 'L ' + T.toFixed(3) + ' ' + O.toFixed(3) + ' ';
                    }
                    var D = {
                      label: 'Polygon Body',
                      position: { x: v, y },
                      vertices: o.fromPath(R),
                    };
                    if (p.chamfer) {
                      var _ = p.chamfer;
                      ((D.vertices = o.chamfer(
                        D.vertices,
                        _.radius,
                        _.quality,
                        _.qualityMin,
                        _.qualityMax
                      )),
                        delete p.chamfer);
                    }
                    return f.create(d.extend({}, D, p));
                  }),
                  (l.fromVertices = function (v, y, r, S, p, C, R, z) {
                    var L = d.getDecomp(),
                      G,
                      T,
                      O,
                      D,
                      _,
                      H,
                      B,
                      Y,
                      V,
                      $,
                      ie;
                    for (
                      G = !!(L && L.quickDecomp),
                        S = S || {},
                        O = [],
                        p = typeof p < 'u' ? p : !1,
                        C = typeof C < 'u' ? C : 0.01,
                        R = typeof R < 'u' ? R : 10,
                        z = typeof z < 'u' ? z : 0.01,
                        d.isArray(r[0]) || (r = [r]),
                        $ = 0;
                      $ < r.length;
                      $ += 1
                    )
                      if (
                        ((H = r[$]),
                        (D = o.isConvex(H)),
                        (_ = !D),
                        _ &&
                          !G &&
                          d.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                          ),
                        D || !G)
                      )
                        (D ? (H = o.clockwiseSort(H)) : (H = o.hull(H)),
                          O.push({ position: { x: v, y }, vertices: H }));
                      else {
                        var ae = H.map(function (ce) {
                          return [ce.x, ce.y];
                        });
                        (L.makeCCW(ae),
                          C !== !1 && L.removeCollinearPoints(ae, C),
                          z !== !1 && L.removeDuplicatePoints && L.removeDuplicatePoints(ae, z));
                        var A = L.quickDecomp(ae);
                        for (B = 0; B < A.length; B++) {
                          var U = A[B],
                            q = U.map(function (ce) {
                              return { x: ce[0], y: ce[1] };
                            });
                          (R > 0 && o.area(q) < R) ||
                            O.push({ position: o.centre(q), vertices: q });
                        }
                      }
                    for (B = 0; B < O.length; B++) O[B] = f.create(d.extend(O[B], S));
                    if (p) {
                      var W = 5;
                      for (B = 0; B < O.length; B++) {
                        var le = O[B];
                        for (Y = B + 1; Y < O.length; Y++) {
                          var N = O[Y];
                          if (g.overlaps(le.bounds, N.bounds)) {
                            var Z = le.vertices,
                              P = N.vertices;
                            for (V = 0; V < le.vertices.length; V++)
                              for (ie = 0; ie < N.vertices.length; ie++) {
                                var ue = m.magnitudeSquared(m.sub(Z[(V + 1) % Z.length], P[ie])),
                                  se = m.magnitudeSquared(m.sub(Z[V], P[(ie + 1) % P.length]));
                                ue < W &&
                                  se < W &&
                                  ((Z[V].isInternal = !0), (P[ie].isInternal = !0));
                              }
                          }
                        }
                      }
                    }
                    return O.length > 1
                      ? ((T = f.create(d.extend({ parts: O.slice(0) }, S))),
                        f.setPosition(T, { x: v, y }),
                        T)
                      : O[0];
                  }));
              })();
            },
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
                      S = f.collisions,
                      p = 0,
                      C,
                      R;
                    for (m.sort(l._compareBoundsX), C = 0; C < v; C++) {
                      var z = m[C],
                        L = z.bounds,
                        G = z.bounds.max.x,
                        T = z.bounds.max.y,
                        O = z.bounds.min.y,
                        D = z.isStatic || z.isSleeping,
                        _ = z.parts.length,
                        H = _ === 1;
                      for (R = C + 1; R < v; R++) {
                        var B = m[R],
                          Y = B.bounds;
                        if (Y.min.x > G) break;
                        if (
                          !(T < Y.min.y || O > Y.max.y) &&
                          !(D && (B.isStatic || B.isSleeping)) &&
                          y(z.collisionFilter, B.collisionFilter)
                        ) {
                          var V = B.parts.length;
                          if (H && V === 1) {
                            var $ = r(z, B, g);
                            $ && (S[p++] = $);
                          } else
                            for (var ie = _ > 1 ? 1 : 0, ae = V > 1 ? 1 : 0, A = ie; A < _; A++)
                              for (var U = z.parts[A], L = U.bounds, q = ae; q < V; q++) {
                                var W = B.parts[q],
                                  Y = W.bounds;
                                if (
                                  !(
                                    L.min.x > Y.max.x ||
                                    L.max.x < Y.min.x ||
                                    L.max.y < Y.min.y ||
                                    L.min.y > Y.max.y
                                  )
                                ) {
                                  var $ = r(U, W, g);
                                  $ && (S[p++] = $);
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
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
                            S = l.resolve(y);
                          return (
                            S && !l.versionSatisfies(S.version, r.range)
                              ? (o.warn(
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
            function (b, h) {
              var c = {};
              ((b.exports = c),
                (function () {
                  c.create = function (l) {
                    return { vertex: l, normalImpulse: 0, tangentImpulse: 0 };
                  };
                })());
            },
            function (b, h, c) {
              var l = {};
              b.exports = l;
              var o = c(7),
                d = c(18),
                f = c(13),
                g = c(19),
                m = c(5),
                v = c(6),
                y = c(10),
                r = c(0),
                S = c(4);
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
                      L = p.detector,
                      G = p.pairs,
                      T = p.timing,
                      O = T.timestamp,
                      D;
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
                      B = v.allConstraints(z);
                    for (
                      z.isModified && (f.setBodies(L, H), v.setModified(z, !1, !1, !0)),
                        p.enableSleeping && o.update(H, C),
                        l._bodiesApplyGravity(H, p.gravity),
                        C > 0 && l._bodiesUpdate(H, C),
                        m.trigger(p, 'beforeSolve', _),
                        y.preSolveAll(H),
                        D = 0;
                      D < p.constraintIterations;
                      D++
                    )
                      y.solveAll(B, C);
                    y.postSolveAll(H);
                    var Y = f.collisions(L);
                    (g.update(G, Y, O),
                      p.enableSleeping && o.afterCollisions(G.list),
                      G.collisionStart.length > 0 &&
                        m.trigger(p, 'collisionStart', {
                          pairs: G.collisionStart,
                          timestamp: T.timestamp,
                          delta: C,
                        }));
                    var V = r.clamp(20 / p.positionIterations, 0, 1);
                    for (d.preSolvePosition(G.list), D = 0; D < p.positionIterations; D++)
                      d.solvePosition(G.list, C, V);
                    for (
                      d.postSolvePosition(H), y.preSolveAll(H), D = 0;
                      D < p.constraintIterations;
                      D++
                    )
                      y.solveAll(B, C);
                    for (
                      y.postSolveAll(H), d.preSolveVelocity(G.list), D = 0;
                      D < p.velocityIterations;
                      D++
                    )
                      d.solveVelocity(G.list, C);
                    return (
                      l._bodiesUpdateVelocities(H),
                      G.collisionActive.length > 0 &&
                        m.trigger(p, 'collisionActive', {
                          pairs: G.collisionActive,
                          timestamp: T.timestamp,
                          delta: C,
                        }),
                      G.collisionEnd.length > 0 &&
                        m.trigger(p, 'collisionEnd', {
                          pairs: G.collisionEnd,
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
                        var L = R[z];
                        (o.set(L, !1), (L.id = r.nextId()));
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
                      for (var L = 0; L < z; L++) {
                        var G = p[L];
                        G.isStatic ||
                          G.isSleeping ||
                          ((G.force.y += G.mass * C.y * R), (G.force.x += G.mass * C.x * R));
                      }
                  }),
                  (l._bodiesUpdate = function (p, C) {
                    for (var R = p.length, z = 0; z < R; z++) {
                      var L = p[z];
                      L.isStatic || L.isSleeping || S.update(L, C);
                    }
                  }),
                  (l._bodiesUpdateVelocities = function (p) {
                    for (var C = p.length, R = 0; R < C; R++) S.updateVelocities(p[R]);
                  }));
              })();
            },
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
                      S,
                      p,
                      C,
                      R,
                      z,
                      L,
                      G = l._positionDampen * (v || 1),
                      T = d.clamp(m / d._baseDelta, 0, 1),
                      O = g.length;
                    for (y = 0; y < O; y++)
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
                    for (y = 0; y < O; y++)
                      ((r = g[y]),
                        !(!r.isActive || r.isSensor) &&
                          ((S = r.collision),
                          (p = S.parentA),
                          (C = S.parentB),
                          (R = S.normal),
                          (L = r.separation - r.slop * T),
                          (p.isStatic || C.isStatic) && (L *= 2),
                          p.isStatic ||
                            p.isSleeping ||
                            ((z = G / p.totalContacts),
                            (p.positionImpulse.x += R.x * L * z),
                            (p.positionImpulse.y += R.y * L * z)),
                          C.isStatic ||
                            C.isSleeping ||
                            ((z = G / C.totalContacts),
                            (C.positionImpulse.x -= R.x * L * z),
                            (C.positionImpulse.y -= R.y * L * z))));
                  }),
                  (l.postSolvePosition = function (g) {
                    for (
                      var m = l._positionWarming,
                        v = g.length,
                        y = o.translate,
                        r = f.update,
                        S = 0;
                      S < v;
                      S++
                    ) {
                      var p = g[S],
                        C = p.positionImpulse,
                        R = C.x,
                        z = C.y,
                        L = p.velocity;
                      if (((p.totalContacts = 0), R !== 0 || z !== 0)) {
                        for (var G = 0; G < p.parts.length; G++) {
                          var T = p.parts[G];
                          (y(T.vertices, C),
                            r(T.bounds, T.vertices, L),
                            (T.position.x += R),
                            (T.position.y += z));
                        }
                        ((p.positionPrev.x += R),
                          (p.positionPrev.y += z),
                          R * L.x + z * L.y < 0
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
                          L = C.normal,
                          G = C.tangent;
                        for (y = 0; y < p; y++) {
                          var T = S[y],
                            O = T.vertex,
                            D = T.normalImpulse,
                            _ = T.tangentImpulse;
                          if (D !== 0 || _ !== 0) {
                            var H = L.x * D + G.x * _,
                              B = L.y * D + G.y * _;
                            (R.isStatic ||
                              R.isSleeping ||
                              ((R.positionPrev.x += H * R.inverseMass),
                              (R.positionPrev.y += B * R.inverseMass),
                              (R.anglePrev +=
                                R.inverseInertia *
                                ((O.x - R.position.x) * B - (O.y - R.position.y) * H))),
                              z.isStatic ||
                                z.isSleeping ||
                                ((z.positionPrev.x -= H * z.inverseMass),
                                (z.positionPrev.y -= B * z.inverseMass),
                                (z.anglePrev -=
                                  z.inverseInertia *
                                  ((O.x - z.position.x) * B - (O.y - z.position.y) * H))));
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
                      L,
                      G,
                      T,
                      O;
                    for (T = 0; T < z; T++) {
                      var D = g[T];
                      if (!(!D.isActive || D.isSensor)) {
                        var _ = D.collision,
                          H = _.parentA,
                          B = _.parentB,
                          Y = _.normal.x,
                          V = _.normal.y,
                          $ = _.tangent.x,
                          ie = _.tangent.y,
                          ae = D.inverseMass,
                          A = D.friction * D.frictionStatic * C,
                          U = D.contacts,
                          q = D.contactCount,
                          W = 1 / q,
                          le = H.position.x - H.positionPrev.x,
                          N = H.position.y - H.positionPrev.y,
                          Z = H.angle - H.anglePrev,
                          P = B.position.x - B.positionPrev.x,
                          ue = B.position.y - B.positionPrev.y,
                          se = B.angle - B.anglePrev;
                        for (O = 0; O < q; O++) {
                          var ce = U[O],
                            ve = ce.vertex,
                            xe = ve.x - H.position.x,
                            Be = ve.y - H.position.y,
                            Le = ve.x - B.position.x,
                            Ye = ve.y - B.position.y,
                            Ve = le - Be * Z,
                            We = N + xe * Z,
                            Qe = P - Ye * se,
                            fe = ue + Le * se,
                            wt = Ve - Qe,
                            pe = We - fe,
                            qe = Y * wt + V * pe,
                            St = $ * wt + ie * pe,
                            An = D.separation + qe,
                            on = Math.min(An, 1);
                          on = An < 0 ? 0 : on;
                          var zt = on * A;
                          St < -zt || St > zt
                            ? ((G = St > 0 ? St : -St),
                              (L = D.friction * (St > 0 ? 1 : -1) * r),
                              L < -G ? (L = -G) : L > G && (L = G))
                            : ((L = St), (G = R));
                          var el = xe * V - Be * Y,
                            ut = Le * V - Ye * Y,
                            Nt = W / (ae + H.inverseInertia * el * el + B.inverseInertia * ut * ut),
                            ke = (1 + D.restitution) * qe * Nt;
                          if (((L *= Nt), qe < S)) ce.normalImpulse = 0;
                          else {
                            var tl = ce.normalImpulse;
                            ((ce.normalImpulse += ke),
                              ce.normalImpulse > 0 && (ce.normalImpulse = 0),
                              (ke = ce.normalImpulse - tl));
                          }
                          if (St < -p || St > p) ce.tangentImpulse = 0;
                          else {
                            var Ft = ce.tangentImpulse;
                            ((ce.tangentImpulse += L),
                              ce.tangentImpulse < -G && (ce.tangentImpulse = -G),
                              ce.tangentImpulse > G && (ce.tangentImpulse = G),
                              (L = ce.tangentImpulse - Ft));
                          }
                          var On = Y * ke + $ * L,
                            Dn = V * ke + ie * L;
                          (H.isStatic ||
                            H.isSleeping ||
                            ((H.positionPrev.x += On * H.inverseMass),
                            (H.positionPrev.y += Dn * H.inverseMass),
                            (H.anglePrev += (xe * Dn - Be * On) * H.inverseInertia)),
                            B.isStatic ||
                              B.isSleeping ||
                              ((B.positionPrev.x -= On * B.inverseMass),
                              (B.positionPrev.y -= Dn * B.inverseMass),
                              (B.anglePrev -= (Le * Dn - Ye * On) * B.inverseInertia)));
                        }
                      }
                    }
                  }));
              })();
            },
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
                      S = f.table,
                      p = f.list,
                      C = p.length,
                      R = C,
                      z = f.collisionStart,
                      L = f.collisionEnd,
                      G = f.collisionActive,
                      T = g.length,
                      O = 0,
                      D = 0,
                      _ = 0,
                      H,
                      B,
                      Y;
                    for (Y = 0; Y < T; Y++)
                      ((H = g[Y]),
                        (B = H.pair),
                        B
                          ? (B.isActive && (G[_++] = B), v(B, H, m))
                          : ((B = y(H, m)), (S[B.id] = B), (z[O++] = B), (p[R++] = B)));
                    for (R = 0, C = p.length, Y = 0; Y < C; Y++)
                      ((B = p[Y]),
                        B.timeUpdated >= m
                          ? (p[R++] = B)
                          : (r(B, !1, m),
                            B.collision.bodyA.sleepCounter > 0 && B.collision.bodyB.sleepCounter > 0
                              ? (p[R++] = B)
                              : ((L[D++] = B), delete S[B.id])));
                    (p.length !== R && (p.length = R),
                      z.length !== O && (z.length = O),
                      L.length !== D && (L.length = D),
                      G.length !== _ && (G.length = _));
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
            function (b, h, c) {
              var l = (b.exports = c(21));
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
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
            function (b, h, c) {
              var l = {};
              b.exports = l;
              var o = c(6),
                d = c(10),
                f = c(0),
                g = c(4),
                m = c(12),
                v = f.deprecated;
              (function () {
                ((l.stack = function (y, r, S, p, C, R, z) {
                  for (
                    var L = o.create({ label: 'Stack' }), G = y, T = r, O, D = 0, _ = 0;
                    _ < p;
                    _++
                  ) {
                    for (var H = 0, B = 0; B < S; B++) {
                      var Y = z(G, T, B, _, O, D);
                      if (Y) {
                        var V = Y.bounds.max.y - Y.bounds.min.y,
                          $ = Y.bounds.max.x - Y.bounds.min.x;
                        (V > H && (H = V),
                          g.translate(Y, { x: $ * 0.5, y: V * 0.5 }),
                          (G = Y.bounds.max.x + C),
                          o.addBody(L, Y),
                          (O = Y),
                          (D += 1));
                      } else G += C;
                    }
                    ((T += H + R), (G = y));
                  }
                  return L;
                }),
                  (l.chain = function (y, r, S, p, C, R) {
                    for (var z = y.bodies, L = 1; L < z.length; L++) {
                      var G = z[L - 1],
                        T = z[L],
                        O = G.bounds.max.y - G.bounds.min.y,
                        D = G.bounds.max.x - G.bounds.min.x,
                        _ = T.bounds.max.y - T.bounds.min.y,
                        H = T.bounds.max.x - T.bounds.min.x,
                        B = {
                          bodyA: G,
                          pointA: { x: D * r, y: O * S },
                          bodyB: T,
                          pointB: { x: H * p, y: _ * C },
                        },
                        Y = f.extend(B, R);
                      o.addConstraint(y, d.create(Y));
                    }
                    return ((y.label += ' Chain'), y);
                  }),
                  (l.mesh = function (y, r, S, p, C) {
                    var R = y.bodies,
                      z,
                      L,
                      G,
                      T,
                      O;
                    for (z = 0; z < S; z++) {
                      for (L = 1; L < r; L++)
                        ((G = R[L - 1 + z * r]),
                          (T = R[L + z * r]),
                          o.addConstraint(y, d.create(f.extend({ bodyA: G, bodyB: T }, C))));
                      if (z > 0)
                        for (L = 0; L < r; L++)
                          ((G = R[L + (z - 1) * r]),
                            (T = R[L + z * r]),
                            o.addConstraint(y, d.create(f.extend({ bodyA: G, bodyB: T }, C))),
                            p &&
                              L > 0 &&
                              ((O = R[L - 1 + (z - 1) * r]),
                              o.addConstraint(y, d.create(f.extend({ bodyA: O, bodyB: T }, C)))),
                            p &&
                              L < r - 1 &&
                              ((O = R[L + 1 + (z - 1) * r]),
                              o.addConstraint(y, d.create(f.extend({ bodyA: O, bodyB: T }, C)))));
                    }
                    return ((y.label += ' Mesh'), y);
                  }),
                  (l.pyramid = function (y, r, S, p, C, R, z) {
                    return l.stack(y, r, S, p, C, R, function (L, G, T, O, D, _) {
                      var H = Math.min(p, Math.ceil(S / 2)),
                        B = D ? D.bounds.max.x - D.bounds.min.x : 0;
                      if (!(O > H)) {
                        O = H - O;
                        var Y = O,
                          V = S - 1 - O;
                        if (!(T < Y || T > V)) {
                          _ === 1 && g.translate(D, { x: (T + (S % 2 === 1 ? 1 : -1)) * B, y: 0 });
                          var $ = D ? T * B : 0;
                          return z(y + $ + T * C, G, T, O, D, _);
                        }
                      }
                    });
                  }),
                  (l.newtonsCradle = function (y, r, S, p, C) {
                    for (var R = o.create({ label: 'Newtons Cradle' }), z = 0; z < S; z++) {
                      var L = 1.9,
                        G = m.circle(y + z * (p * L), r + C, p, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        T = d.create({ pointA: { x: y + z * (p * L), y: r }, bodyB: G });
                      (o.addBody(R, G), o.addConstraint(R, T));
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
                      L = -S * 0.5 + z,
                      G = S * 0.5 - z,
                      T = 0,
                      O = o.create({ label: 'Car' }),
                      D = m.rectangle(y, r, S, p, {
                        collisionFilter: { group: R },
                        chamfer: { radius: p * 0.5 },
                        density: 2e-4,
                      }),
                      _ = m.circle(y + L, r + T, C, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      H = m.circle(y + G, r + T, C, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      B = d.create({
                        bodyB: D,
                        pointB: { x: L, y: T },
                        bodyA: _,
                        stiffness: 1,
                        length: 0,
                      }),
                      Y = d.create({
                        bodyB: D,
                        pointB: { x: G, y: T },
                        bodyA: H,
                        stiffness: 1,
                        length: 0,
                      });
                    return (
                      o.addBody(O, D),
                      o.addBody(O, _),
                      o.addBody(O, H),
                      o.addConstraint(O, B),
                      o.addConstraint(O, Y),
                      O
                    );
                  }),
                  v(l, 'car', 'Composites.car ➤ moved to car example'),
                  (l.softBody = function (y, r, S, p, C, R, z, L, G, T) {
                    ((G = f.extend({ inertia: 1 / 0 }, G)),
                      (T = f.extend({ stiffness: 0.2, render: { type: 'line', anchors: !1 } }, T)));
                    var O = l.stack(y, r, S, p, C, R, function (D, _) {
                      return m.circle(D, _, L, G);
                    });
                    return (l.mesh(O, S, p, z, T), (O.label = 'Soft Body'), O);
                  }),
                  v(l, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples'));
              })();
            },
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
                      S,
                      p,
                      C = v.world,
                      R = g.buckets,
                      z,
                      L,
                      G = !1;
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
                        var O = l._getRegion(g, T);
                        if (!T.region || O.id !== T.region.id || y) {
                          (!T.region || y) && (T.region = O);
                          var D = l._regionUnion(O, T.region);
                          for (S = D.startCol; S <= D.endCol; S++)
                            for (p = D.startRow; p <= D.endRow; p++) {
                              ((L = l._getBucketId(S, p)), (z = R[L]));
                              var _ =
                                  S >= O.startCol &&
                                  S <= O.endCol &&
                                  p >= O.startRow &&
                                  p <= O.endRow,
                                H =
                                  S >= T.region.startCol &&
                                  S <= T.region.endCol &&
                                  p >= T.region.startRow &&
                                  p <= T.region.endRow;
                              (!_ && H && H && z && l._bucketRemoveBody(g, z, T),
                                (T.region === O || (_ && !H) || y) &&
                                  (z || (z = l._createBucket(R, L)), l._bucketAddBody(g, z, T)));
                            }
                          ((T.region = O), (G = !0));
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
                      r = o.id,
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
                      r = o.id,
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
            function (b, h, c) {
              var l = {};
              b.exports = l;
              var o = c(3),
                d = c(7),
                f = c(14),
                g = c(5),
                m = c(13),
                v = c(10),
                y = c(6),
                r = c(0),
                S = c(1);
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
                    L = {
                      type: 'mouseConstraint',
                      mouse: R,
                      element: null,
                      body: null,
                      constraint: z,
                      collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                    },
                    G = r.extend(L, C);
                  return (
                    g.on(p, 'beforeUpdate', function () {
                      var T = y.allBodies(p.world);
                      (l.update(G, T), l._triggerEvents(G));
                    }),
                    G
                  );
                }),
                  (l.update = function (p, C) {
                    var R = p.mouse,
                      z = p.constraint,
                      L = p.body;
                    if (R.button === 0) {
                      if (z.bodyB) (d.set(z.bodyB, !1), (z.pointA = R.position));
                      else
                        for (var G = 0; G < C.length; G++)
                          if (
                            ((L = C[G]),
                            S.contains(L.bounds, R.position) &&
                              m.canCollide(L.collisionFilter, p.collisionFilter))
                          )
                            for (var T = L.parts.length > 1 ? 1 : 0; T < L.parts.length; T++) {
                              var O = L.parts[T];
                              if (o.contains(O.vertices, R.position)) {
                                ((z.pointA = R.position),
                                  (z.bodyB = p.body = L),
                                  (z.pointB = {
                                    x: R.position.x - L.position.x,
                                    y: R.position.y - L.position.y,
                                  }),
                                  (z.angleB = L.angle),
                                  d.set(L, !1),
                                  g.trigger(p, 'startdrag', { mouse: R, body: L }));
                                break;
                              }
                            }
                    } else
                      ((z.bodyB = p.body = null),
                        (z.pointB = null),
                        L && g.trigger(p, 'enddrag', { mouse: R, body: L }));
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
            function (b, h, c) {
              var l = {};
              b.exports = l;
              var o = c(2),
                d = c(8),
                f = c(1),
                g = c(12),
                m = c(3);
              (function () {
                ((l.collides = function (v, y) {
                  for (
                    var r = [], S = y.length, p = v.bounds, C = d.collides, R = f.overlaps, z = 0;
                    z < S;
                    z++
                  ) {
                    var L = y[z],
                      G = L.parts.length,
                      T = G === 1 ? 0 : 1;
                    if (R(L.bounds, p))
                      for (var O = T; O < G; O++) {
                        var D = L.parts[O];
                        if (R(D.bounds, p)) {
                          var _ = C(D, v);
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
                      var p = o.angle(y, r),
                        C = o.magnitude(o.sub(y, r)),
                        R = (r.x + y.x) * 0.5,
                        z = (r.y + y.y) * 0.5,
                        L = g.rectangle(R, z, C, S, { angle: p }),
                        G = l.collides(L, v),
                        T = 0;
                      T < G.length;
                      T += 1
                    ) {
                      var O = G[T];
                      O.body = O.bodyB = O.bodyA;
                    }
                    return G;
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
            function (b, h, c) {
              var l = {};
              b.exports = l;
              var o = c(4),
                d = c(0),
                f = c(6),
                g = c(1),
                m = c(5),
                v = c(2),
                y = c(14);
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
                      D = d.extend(O, T);
                    return (
                      D.canvas &&
                        ((D.canvas.width = D.options.width || D.canvas.width),
                        (D.canvas.height = D.options.height || D.canvas.height)),
                      (D.mouse = T.mouse),
                      (D.engine = T.engine),
                      (D.canvas = D.canvas || R(D.options.width, D.options.height)),
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
                  (l.run = function (T) {
                    (function O(D) {
                      ((T.frameRequestId = r(O)),
                        p(T, D),
                        l.world(T, D),
                        T.context.setTransform(
                          T.options.pixelRatio,
                          0,
                          0,
                          T.options.pixelRatio,
                          0,
                          0
                        ),
                        (T.options.showStats || T.options.showDebug) && l.stats(T, T.context, D),
                        (T.options.showPerformance || T.options.showDebug) &&
                          l.performance(T, T.context, D),
                        T.context.setTransform(1, 0, 0, 1, 0, 0));
                    })();
                  }),
                  (l.stop = function (T) {
                    S(T.frameRequestId);
                  }),
                  (l.setPixelRatio = function (T, O) {
                    var D = T.options,
                      _ = T.canvas;
                    (O === 'auto' && (O = z(_)),
                      (D.pixelRatio = O),
                      _.setAttribute('data-pixel-ratio', O),
                      (_.width = D.width * O),
                      (_.height = D.height * O),
                      (_.style.width = D.width + 'px'),
                      (_.style.height = D.height + 'px'));
                  }),
                  (l.setSize = function (T, O, D) {
                    ((T.options.width = O),
                      (T.options.height = D),
                      (T.bounds.max.x = T.bounds.min.x + O),
                      (T.bounds.max.y = T.bounds.min.y + D),
                      T.options.pixelRatio !== 1
                        ? l.setPixelRatio(T, T.options.pixelRatio)
                        : ((T.canvas.width = O), (T.canvas.height = D)));
                  }),
                  (l.lookAt = function (T, O, D, _) {
                    ((_ = typeof _ < 'u' ? _ : !0),
                      (O = d.isArray(O) ? O : [O]),
                      (D = D || { x: 0, y: 0 }));
                    for (
                      var H = { min: { x: 1 / 0, y: 1 / 0 }, max: { x: -1 / 0, y: -1 / 0 } }, B = 0;
                      B < O.length;
                      B += 1
                    ) {
                      var Y = O[B],
                        V = Y.bounds ? Y.bounds.min : Y.min || Y.position || Y,
                        $ = Y.bounds ? Y.bounds.max : Y.max || Y.position || Y;
                      V &&
                        $ &&
                        (V.x < H.min.x && (H.min.x = V.x),
                        $.x > H.max.x && (H.max.x = $.x),
                        V.y < H.min.y && (H.min.y = V.y),
                        $.y > H.max.y && (H.max.y = $.y));
                    }
                    var ie = H.max.x - H.min.x + 2 * D.x,
                      ae = H.max.y - H.min.y + 2 * D.y,
                      A = T.canvas.height,
                      U = T.canvas.width,
                      q = U / A,
                      W = ie / ae,
                      le = 1,
                      N = 1;
                    (W > q ? (N = W / q) : (le = q / W),
                      (T.options.hasBounds = !0),
                      (T.bounds.min.x = H.min.x),
                      (T.bounds.max.x = H.min.x + ie * le),
                      (T.bounds.min.y = H.min.y),
                      (T.bounds.max.y = H.min.y + ae * N),
                      _ &&
                        ((T.bounds.min.x += ie * 0.5 - ie * le * 0.5),
                        (T.bounds.max.x += ie * 0.5 - ie * le * 0.5),
                        (T.bounds.min.y += ae * 0.5 - ae * N * 0.5),
                        (T.bounds.max.y += ae * 0.5 - ae * N * 0.5)),
                      (T.bounds.min.x -= D.x),
                      (T.bounds.max.x -= D.x),
                      (T.bounds.min.y -= D.y),
                      (T.bounds.max.y -= D.y),
                      T.mouse &&
                        (y.setScale(T.mouse, {
                          x: (T.bounds.max.x - T.bounds.min.x) / T.canvas.width,
                          y: (T.bounds.max.y - T.bounds.min.y) / T.canvas.height,
                        }),
                        y.setOffset(T.mouse, T.bounds.min)));
                  }),
                  (l.startViewTransform = function (T) {
                    var O = T.bounds.max.x - T.bounds.min.x,
                      D = T.bounds.max.y - T.bounds.min.y,
                      _ = O / T.options.width,
                      H = D / T.options.height;
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
                  (l.world = function (T, O) {
                    var D = d.now(),
                      _ = T.engine,
                      H = _.world,
                      B = T.canvas,
                      Y = T.context,
                      V = T.options,
                      $ = T.timing,
                      ie = f.allBodies(H),
                      ae = f.allConstraints(H),
                      A = V.wireframes ? V.wireframeBackground : V.background,
                      U = [],
                      q = [],
                      W,
                      le = { timestamp: _.timing.timestamp };
                    if (
                      (m.trigger(T, 'beforeRender', le),
                      T.currentBackground !== A && G(T, A),
                      (Y.globalCompositeOperation = 'source-in'),
                      (Y.fillStyle = 'transparent'),
                      Y.fillRect(0, 0, B.width, B.height),
                      (Y.globalCompositeOperation = 'source-over'),
                      V.hasBounds)
                    ) {
                      for (W = 0; W < ie.length; W++) {
                        var N = ie[W];
                        g.overlaps(N.bounds, T.bounds) && U.push(N);
                      }
                      for (W = 0; W < ae.length; W++) {
                        var Z = ae[W],
                          P = Z.bodyA,
                          ue = Z.bodyB,
                          se = Z.pointA,
                          ce = Z.pointB;
                        (P && (se = v.add(P.position, Z.pointA)),
                          ue && (ce = v.add(ue.position, Z.pointB)),
                          !(!se || !ce) &&
                            (g.contains(T.bounds, se) || g.contains(T.bounds, ce)) &&
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
                      ((q = ae),
                        (U = ie),
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
                      ? l.bodies(T, U, Y)
                      : (V.showConvexHulls && l.bodyConvexHulls(T, U, Y),
                        l.bodyWireframes(T, U, Y)),
                      V.showBounds && l.bodyBounds(T, U, Y),
                      (V.showAxes || V.showAngleIndicator) && l.bodyAxes(T, U, Y),
                      V.showPositions && l.bodyPositions(T, U, Y),
                      V.showVelocity && l.bodyVelocity(T, U, Y),
                      V.showIds && l.bodyIds(T, U, Y),
                      V.showSeparations && l.separations(T, _.pairs.list, Y),
                      V.showCollisions && l.collisions(T, _.pairs.list, Y),
                      V.showVertexNumbers && l.vertexNumbers(T, U, Y),
                      V.showMousePosition && l.mousePosition(T, T.mouse, Y),
                      l.constraints(q, Y),
                      V.hasBounds && l.endViewTransform(T),
                      m.trigger(T, 'afterRender', le),
                      ($.lastElapsed = d.now() - D));
                  }),
                  (l.stats = function (T, O, D) {
                    for (
                      var _ = T.engine,
                        H = _.world,
                        B = f.allBodies(H),
                        Y = 0,
                        V = 55,
                        $ = 44,
                        ie = 0,
                        ae = 0,
                        A = 0;
                      A < B.length;
                      A += 1
                    )
                      Y += B[A].parts.length;
                    var U = {
                      Part: Y,
                      Body: B.length,
                      Cons: f.allConstraints(H).length,
                      Comp: f.allComposites(H).length,
                      Pair: _.pairs.list.length,
                    };
                    ((O.fillStyle = '#0e0f19'),
                      O.fillRect(ie, ae, V * 5.5, $),
                      (O.font = '12px Arial'),
                      (O.textBaseline = 'top'),
                      (O.textAlign = 'right'));
                    for (var q in U) {
                      var W = U[q];
                      ((O.fillStyle = '#aaa'),
                        O.fillText(q, ie + V, ae + 8),
                        (O.fillStyle = '#eee'),
                        O.fillText(W, ie + V, ae + 26),
                        (ie += V));
                    }
                  }),
                  (l.performance = function (T, O) {
                    var D = T.engine,
                      _ = T.timing,
                      H = _.deltaHistory,
                      B = _.elapsedHistory,
                      Y = _.timestampElapsedHistory,
                      V = _.engineDeltaHistory,
                      $ = _.engineUpdatesHistory,
                      ie = _.engineElapsedHistory,
                      ae = D.timing.lastUpdatesPerFrame,
                      A = D.timing.lastDelta,
                      U = C(H),
                      q = C(B),
                      W = C(V),
                      le = C($),
                      N = C(ie),
                      Z = C(Y),
                      P = Z / U || 0,
                      ue = Math.round(U / A),
                      se = 1e3 / U || 0,
                      ce = 4,
                      ve = 12,
                      xe = 60,
                      Be = 34,
                      Le = 10,
                      Ye = 69;
                    ((O.fillStyle = '#0e0f19'),
                      O.fillRect(0, 50, ve * 5 + xe * 6 + 22, Be),
                      l.status(
                        O,
                        Le,
                        Ye,
                        xe,
                        ce,
                        H.length,
                        Math.round(se) + ' fps',
                        se / l._goodFps,
                        function (Ve) {
                          return H[Ve] / U - 1;
                        }
                      ),
                      l.status(
                        O,
                        Le + ve + xe,
                        Ye,
                        xe,
                        ce,
                        V.length,
                        A.toFixed(2) + ' dt',
                        l._goodDelta / A,
                        function (Ve) {
                          return V[Ve] / W - 1;
                        }
                      ),
                      l.status(
                        O,
                        Le + (ve + xe) * 2,
                        Ye,
                        xe,
                        ce,
                        $.length,
                        ae + ' upf',
                        Math.pow(d.clamp(le / ue || 1, 0, 1), 4),
                        function (Ve) {
                          return $[Ve] / le - 1;
                        }
                      ),
                      l.status(
                        O,
                        Le + (ve + xe) * 3,
                        Ye,
                        xe,
                        ce,
                        ie.length,
                        N.toFixed(2) + ' ut',
                        1 - (ae * N) / l._goodFps,
                        function (Ve) {
                          return ie[Ve] / N - 1;
                        }
                      ),
                      l.status(
                        O,
                        Le + (ve + xe) * 4,
                        Ye,
                        xe,
                        ce,
                        B.length,
                        q.toFixed(2) + ' rt',
                        1 - q / l._goodFps,
                        function (Ve) {
                          return B[Ve] / q - 1;
                        }
                      ),
                      l.status(
                        O,
                        Le + (ve + xe) * 5,
                        Ye,
                        xe,
                        ce,
                        Y.length,
                        P.toFixed(2) + ' x',
                        P * P * P,
                        function (Ve) {
                          return (Y[Ve] / H[Ve] / P || 0) - 1;
                        }
                      ));
                  }),
                  (l.status = function (T, O, D, _, H, B, Y, V, $) {
                    ((T.strokeStyle = '#888'),
                      (T.fillStyle = '#444'),
                      (T.lineWidth = 1),
                      T.fillRect(O, D + 7, _, 1),
                      T.beginPath(),
                      T.moveTo(O, D + 7 - H * d.clamp(0.4 * $(0), -2, 2)));
                    for (var ie = 0; ie < _; ie += 1)
                      T.lineTo(O + ie, D + 7 - (ie < B ? H * d.clamp(0.4 * $(ie), -2, 2) : 0));
                    (T.stroke(),
                      (T.fillStyle = 'hsl(' + d.clamp(25 + 95 * V, 0, 120) + ',100%,60%)'),
                      T.fillRect(O, D - 7, 4, 4),
                      (T.font = '12px Arial'),
                      (T.textBaseline = 'middle'),
                      (T.textAlign = 'right'),
                      (T.fillStyle = '#eee'),
                      T.fillText(Y, O + _, D - 5));
                  }),
                  (l.constraints = function (T, O) {
                    for (var D = O, _ = 0; _ < T.length; _++) {
                      var H = T[_];
                      if (!(!H.render.visible || !H.pointA || !H.pointB)) {
                        var B = H.bodyA,
                          Y = H.bodyB,
                          V,
                          $;
                        if (
                          (B ? (V = v.add(B.position, H.pointA)) : (V = H.pointA),
                          H.render.type === 'pin')
                        )
                          (D.beginPath(), D.arc(V.x, V.y, 3, 0, 2 * Math.PI), D.closePath());
                        else {
                          if (
                            (Y ? ($ = v.add(Y.position, H.pointB)) : ($ = H.pointB),
                            D.beginPath(),
                            D.moveTo(V.x, V.y),
                            H.render.type === 'spring')
                          )
                            for (
                              var ie = v.sub($, V),
                                ae = v.perp(v.normalise(ie)),
                                A = Math.ceil(d.clamp(H.length / 5, 12, 20)),
                                U,
                                q = 1;
                              q < A;
                              q += 1
                            )
                              ((U = q % 2 === 0 ? 1 : -1),
                                D.lineTo(
                                  V.x + ie.x * (q / A) + ae.x * U * 4,
                                  V.y + ie.y * (q / A) + ae.y * U * 4
                                ));
                          D.lineTo($.x, $.y);
                        }
                        (H.render.lineWidth &&
                          ((D.lineWidth = H.render.lineWidth),
                          (D.strokeStyle = H.render.strokeStyle),
                          D.stroke()),
                          H.render.anchors &&
                            ((D.fillStyle = H.render.strokeStyle),
                            D.beginPath(),
                            D.arc(V.x, V.y, 3, 0, 2 * Math.PI),
                            D.arc($.x, $.y, 3, 0, 2 * Math.PI),
                            D.closePath(),
                            D.fill()));
                      }
                    }
                  }),
                  (l.bodies = function (T, O, D) {
                    var _ = D;
                    T.engine;
                    var H = T.options,
                      B = H.showInternalEdges || !H.wireframes,
                      Y,
                      V,
                      $,
                      ie;
                    for ($ = 0; $ < O.length; $++)
                      if (((Y = O[$]), !!Y.render.visible)) {
                        for (ie = Y.parts.length > 1 ? 1 : 0; ie < Y.parts.length; ie++)
                          if (((V = Y.parts[ie]), !!V.render.visible)) {
                            if (
                              (H.showSleeping && Y.isSleeping
                                ? (_.globalAlpha = 0.5 * V.render.opacity)
                                : V.render.opacity !== 1 && (_.globalAlpha = V.render.opacity),
                              V.render.sprite && V.render.sprite.texture && !H.wireframes)
                            ) {
                              var ae = V.render.sprite,
                                A = L(T, ae.texture);
                              (_.translate(V.position.x, V.position.y),
                                _.rotate(V.angle),
                                _.drawImage(
                                  A,
                                  A.width * -ae.xOffset * ae.xScale,
                                  A.height * -ae.yOffset * ae.yScale,
                                  A.width * ae.xScale,
                                  A.height * ae.yScale
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
                                  (!V.vertices[U - 1].isInternal || B
                                    ? _.lineTo(V.vertices[U].x, V.vertices[U].y)
                                    : _.moveTo(V.vertices[U].x, V.vertices[U].y),
                                    V.vertices[U].isInternal &&
                                      !B &&
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
                  (l.bodyWireframes = function (T, O, D) {
                    var _ = D,
                      H = T.options.showInternalEdges,
                      B,
                      Y,
                      V,
                      $,
                      ie;
                    for (_.beginPath(), V = 0; V < O.length; V++)
                      if (((B = O[V]), !!B.render.visible))
                        for (ie = B.parts.length > 1 ? 1 : 0; ie < B.parts.length; ie++) {
                          for (
                            Y = B.parts[ie], _.moveTo(Y.vertices[0].x, Y.vertices[0].y), $ = 1;
                            $ < Y.vertices.length;
                            $++
                          )
                            (!Y.vertices[$ - 1].isInternal || H
                              ? _.lineTo(Y.vertices[$].x, Y.vertices[$].y)
                              : _.moveTo(Y.vertices[$].x, Y.vertices[$].y),
                              Y.vertices[$].isInternal &&
                                !H &&
                                _.moveTo(
                                  Y.vertices[($ + 1) % Y.vertices.length].x,
                                  Y.vertices[($ + 1) % Y.vertices.length].y
                                ));
                          _.lineTo(Y.vertices[0].x, Y.vertices[0].y);
                        }
                    ((_.lineWidth = 1),
                      (_.strokeStyle = T.options.wireframeStrokeStyle),
                      _.stroke());
                  }),
                  (l.bodyConvexHulls = function (T, O, D) {
                    var _ = D,
                      H,
                      B,
                      Y;
                    for (_.beginPath(), B = 0; B < O.length; B++)
                      if (((H = O[B]), !(!H.render.visible || H.parts.length === 1))) {
                        for (
                          _.moveTo(H.vertices[0].x, H.vertices[0].y), Y = 1;
                          Y < H.vertices.length;
                          Y++
                        )
                          _.lineTo(H.vertices[Y].x, H.vertices[Y].y);
                        _.lineTo(H.vertices[0].x, H.vertices[0].y);
                      }
                    ((_.lineWidth = 1), (_.strokeStyle = 'rgba(255,255,255,0.2)'), _.stroke());
                  }),
                  (l.vertexNumbers = function (T, O, D) {
                    var _ = D,
                      H,
                      B,
                      Y;
                    for (H = 0; H < O.length; H++) {
                      var V = O[H].parts;
                      for (Y = V.length > 1 ? 1 : 0; Y < V.length; Y++) {
                        var $ = V[Y];
                        for (B = 0; B < $.vertices.length; B++)
                          ((_.fillStyle = 'rgba(255,255,255,0.2)'),
                            _.fillText(
                              H + '_' + B,
                              $.position.x + ($.vertices[B].x - $.position.x) * 0.8,
                              $.position.y + ($.vertices[B].y - $.position.y) * 0.8
                            ));
                      }
                    }
                  }),
                  (l.mousePosition = function (T, O, D) {
                    var _ = D;
                    ((_.fillStyle = 'rgba(255,255,255,0.8)'),
                      _.fillText(
                        O.position.x + '  ' + O.position.y,
                        O.position.x + 5,
                        O.position.y - 5
                      ));
                  }),
                  (l.bodyBounds = function (T, O, D) {
                    var _ = D;
                    T.engine;
                    var H = T.options;
                    _.beginPath();
                    for (var B = 0; B < O.length; B++) {
                      var Y = O[B];
                      if (Y.render.visible)
                        for (var V = O[B].parts, $ = V.length > 1 ? 1 : 0; $ < V.length; $++) {
                          var ie = V[$];
                          _.rect(
                            ie.bounds.min.x,
                            ie.bounds.min.y,
                            ie.bounds.max.x - ie.bounds.min.x,
                            ie.bounds.max.y - ie.bounds.min.y
                          );
                        }
                    }
                    (H.wireframes
                      ? (_.strokeStyle = 'rgba(255,255,255,0.08)')
                      : (_.strokeStyle = 'rgba(0,0,0,0.1)'),
                      (_.lineWidth = 1),
                      _.stroke());
                  }),
                  (l.bodyAxes = function (T, O, D) {
                    var _ = D;
                    T.engine;
                    var H = T.options,
                      B,
                      Y,
                      V,
                      $;
                    for (_.beginPath(), Y = 0; Y < O.length; Y++) {
                      var ie = O[Y],
                        ae = ie.parts;
                      if (ie.render.visible)
                        if (H.showAxes)
                          for (V = ae.length > 1 ? 1 : 0; V < ae.length; V++)
                            for (B = ae[V], $ = 0; $ < B.axes.length; $++) {
                              var A = B.axes[$];
                              (_.moveTo(B.position.x, B.position.y),
                                _.lineTo(B.position.x + A.x * 20, B.position.y + A.y * 20));
                            }
                        else
                          for (V = ae.length > 1 ? 1 : 0; V < ae.length; V++)
                            for (B = ae[V], $ = 0; $ < B.axes.length; $++)
                              (_.moveTo(B.position.x, B.position.y),
                                _.lineTo(
                                  (B.vertices[0].x + B.vertices[B.vertices.length - 1].x) / 2,
                                  (B.vertices[0].y + B.vertices[B.vertices.length - 1].y) / 2
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
                  (l.bodyPositions = function (T, O, D) {
                    var _ = D;
                    T.engine;
                    var H = T.options,
                      B,
                      Y,
                      V,
                      $;
                    for (_.beginPath(), V = 0; V < O.length; V++)
                      if (((B = O[V]), !!B.render.visible))
                        for ($ = 0; $ < B.parts.length; $++)
                          ((Y = B.parts[$]),
                            _.arc(Y.position.x, Y.position.y, 3, 0, 2 * Math.PI, !1),
                            _.closePath());
                    for (
                      H.wireframes
                        ? (_.fillStyle = 'indianred')
                        : (_.fillStyle = 'rgba(0,0,0,0.5)'),
                        _.fill(),
                        _.beginPath(),
                        V = 0;
                      V < O.length;
                      V++
                    )
                      ((B = O[V]),
                        B.render.visible &&
                          (_.arc(B.positionPrev.x, B.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                          _.closePath()));
                    ((_.fillStyle = 'rgba(255,165,0,0.8)'), _.fill());
                  }),
                  (l.bodyVelocity = function (T, O, D) {
                    var _ = D;
                    _.beginPath();
                    for (var H = 0; H < O.length; H++) {
                      var B = O[H];
                      if (B.render.visible) {
                        var Y = o.getVelocity(B);
                        (_.moveTo(B.position.x, B.position.y),
                          _.lineTo(B.position.x + Y.x, B.position.y + Y.y));
                      }
                    }
                    ((_.lineWidth = 3), (_.strokeStyle = 'cornflowerblue'), _.stroke());
                  }),
                  (l.bodyIds = function (T, O, D) {
                    var _ = D,
                      H,
                      B;
                    for (H = 0; H < O.length; H++)
                      if (O[H].render.visible) {
                        var Y = O[H].parts;
                        for (B = Y.length > 1 ? 1 : 0; B < Y.length; B++) {
                          var V = Y[B];
                          ((_.font = '12px Arial'),
                            (_.fillStyle = 'rgba(255,255,255,0.5)'),
                            _.fillText(V.id, V.position.x + 10, V.position.y - 10));
                        }
                      }
                  }),
                  (l.collisions = function (T, O, D) {
                    var _ = D,
                      H = T.options,
                      B,
                      Y,
                      V,
                      $;
                    for (_.beginPath(), V = 0; V < O.length; V++)
                      if (((B = O[V]), !!B.isActive))
                        for (Y = B.collision, $ = 0; $ < B.contactCount; $++) {
                          var ie = B.contacts[$],
                            ae = ie.vertex;
                          _.rect(ae.x - 1.5, ae.y - 1.5, 3.5, 3.5);
                        }
                    for (
                      H.wireframes
                        ? (_.fillStyle = 'rgba(255,255,255,0.7)')
                        : (_.fillStyle = 'orange'),
                        _.fill(),
                        _.beginPath(),
                        V = 0;
                      V < O.length;
                      V++
                    )
                      if (((B = O[V]), !!B.isActive && ((Y = B.collision), B.contactCount > 0))) {
                        var A = B.contacts[0].vertex.x,
                          U = B.contacts[0].vertex.y;
                        (B.contactCount === 2 &&
                          ((A = (B.contacts[0].vertex.x + B.contacts[1].vertex.x) / 2),
                          (U = (B.contacts[0].vertex.y + B.contacts[1].vertex.y) / 2)),
                          Y.bodyB === Y.supports[0].body || Y.bodyA.isStatic === !0
                            ? _.moveTo(A - Y.normal.x * 8, U - Y.normal.y * 8)
                            : _.moveTo(A + Y.normal.x * 8, U + Y.normal.y * 8),
                          _.lineTo(A, U));
                      }
                    (H.wireframes
                      ? (_.strokeStyle = 'rgba(255,165,0,0.7)')
                      : (_.strokeStyle = 'orange'),
                      (_.lineWidth = 1),
                      _.stroke());
                  }),
                  (l.separations = function (T, O, D) {
                    var _ = D,
                      H = T.options,
                      B,
                      Y,
                      V,
                      $,
                      ie;
                    for (_.beginPath(), ie = 0; ie < O.length; ie++)
                      if (((B = O[ie]), !!B.isActive)) {
                        ((Y = B.collision), (V = Y.bodyA), ($ = Y.bodyB));
                        var ae = 1;
                        (!$.isStatic && !V.isStatic && (ae = 0.5),
                          $.isStatic && (ae = 0),
                          _.moveTo($.position.x, $.position.y),
                          _.lineTo(
                            $.position.x - Y.penetration.x * ae,
                            $.position.y - Y.penetration.y * ae
                          ),
                          (ae = 1),
                          !$.isStatic && !V.isStatic && (ae = 0.5),
                          V.isStatic && (ae = 0),
                          _.moveTo(V.position.x, V.position.y),
                          _.lineTo(
                            V.position.x + Y.penetration.x * ae,
                            V.position.y + Y.penetration.y * ae
                          ));
                      }
                    (H.wireframes
                      ? (_.strokeStyle = 'rgba(255,165,0,0.5)')
                      : (_.strokeStyle = 'orange'),
                      _.stroke());
                  }),
                  (l.inspector = function (T, O) {
                    T.engine;
                    var D = T.selected,
                      _ = T.render,
                      H = _.options,
                      B;
                    if (H.hasBounds) {
                      var Y = _.bounds.max.x - _.bounds.min.x,
                        V = _.bounds.max.y - _.bounds.min.y,
                        $ = Y / _.options.width,
                        ie = V / _.options.height;
                      (O.scale(1 / $, 1 / ie), O.translate(-_.bounds.min.x, -_.bounds.min.y));
                    }
                    for (var ae = 0; ae < D.length; ae++) {
                      var A = D[ae].data;
                      switch (
                        (O.translate(0.5, 0.5),
                        (O.lineWidth = 1),
                        (O.strokeStyle = 'rgba(255,165,0,0.9)'),
                        O.setLineDash([1, 2]),
                        A.type)
                      ) {
                        case 'body':
                          ((B = A.bounds),
                            O.beginPath(),
                            O.rect(
                              Math.floor(B.min.x - 3),
                              Math.floor(B.min.y - 3),
                              Math.floor(B.max.x - B.min.x + 6),
                              Math.floor(B.max.y - B.min.y + 6)
                            ),
                            O.closePath(),
                            O.stroke());
                          break;
                        case 'constraint':
                          var U = A.pointA;
                          (A.bodyA && (U = A.pointB),
                            O.beginPath(),
                            O.arc(U.x, U.y, 10, 0, 2 * Math.PI),
                            O.closePath(),
                            O.stroke());
                          break;
                      }
                      (O.setLineDash([]), O.translate(-0.5, -0.5));
                    }
                    (T.selectStart !== null &&
                      (O.translate(0.5, 0.5),
                      (O.lineWidth = 1),
                      (O.strokeStyle = 'rgba(255,165,0,0.6)'),
                      (O.fillStyle = 'rgba(255,165,0,0.1)'),
                      (B = T.selectBounds),
                      O.beginPath(),
                      O.rect(
                        Math.floor(B.min.x),
                        Math.floor(B.min.y),
                        Math.floor(B.max.x - B.min.x),
                        Math.floor(B.max.y - B.min.y)
                      ),
                      O.closePath(),
                      O.stroke(),
                      O.fill(),
                      O.translate(-0.5, -0.5)),
                      H.hasBounds && O.setTransform(1, 0, 0, 1, 0, 0));
                  }));
                var p = function (T, O) {
                    var D = T.engine,
                      _ = T.timing,
                      H = _.historySize,
                      B = D.timing.timestamp;
                    ((_.delta = O - _.lastTime || l._goodDelta),
                      (_.lastTime = O),
                      (_.timestampElapsed = B - _.lastTimestamp || 0),
                      (_.lastTimestamp = B),
                      _.deltaHistory.unshift(_.delta),
                      (_.deltaHistory.length = Math.min(_.deltaHistory.length, H)),
                      _.engineDeltaHistory.unshift(D.timing.lastDelta),
                      (_.engineDeltaHistory.length = Math.min(_.engineDeltaHistory.length, H)),
                      _.timestampElapsedHistory.unshift(_.timestampElapsed),
                      (_.timestampElapsedHistory.length = Math.min(
                        _.timestampElapsedHistory.length,
                        H
                      )),
                      _.engineUpdatesHistory.unshift(D.timing.lastUpdatesPerFrame),
                      (_.engineUpdatesHistory.length = Math.min(_.engineUpdatesHistory.length, H)),
                      _.engineElapsedHistory.unshift(D.timing.lastElapsed),
                      (_.engineElapsedHistory.length = Math.min(_.engineElapsedHistory.length, H)),
                      _.elapsedHistory.unshift(_.lastElapsed),
                      (_.elapsedHistory.length = Math.min(_.elapsedHistory.length, H)));
                  },
                  C = function (T) {
                    for (var O = 0, D = 0; D < T.length; D += 1) O += T[D];
                    return O / T.length || 0;
                  },
                  R = function (T, O) {
                    var D = document.createElement('canvas');
                    return (
                      (D.width = T),
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
                  z = function (T) {
                    var O = T.getContext('2d'),
                      D = window.devicePixelRatio || 1,
                      _ =
                        O.webkitBackingStorePixelRatio ||
                        O.mozBackingStorePixelRatio ||
                        O.msBackingStorePixelRatio ||
                        O.oBackingStorePixelRatio ||
                        O.backingStorePixelRatio ||
                        1;
                    return D / _;
                  },
                  L = function (T, O) {
                    var D = T.textures[O];
                    return D || ((D = T.textures[O] = new Image()), (D.src = O), D);
                  },
                  G = function (T, O) {
                    var D = O;
                    (/(jpg|gif|png)$/.test(O) && (D = 'url(' + O + ')'),
                      (T.canvas.style.background = D),
                      (T.canvas.style.backgroundSize = 'contain'),
                      (T.currentBackground = O));
                  };
              })();
            },
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
                        L = g(z);
                      C = L || C;
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
                    var G = m.maxUpdates || Math.ceil(m.maxFrameTime / S),
                      T = { timestamp: v.timing.timestamp };
                    (o.trigger(m, 'beforeTick', T), o.trigger(m, 'tick', T));
                    for (var O = f.now(); S > 0 && m.timeBuffer >= S * l._timeBufferMargin; ) {
                      (o.trigger(m, 'beforeUpdate', T),
                        d.update(v, S),
                        o.trigger(m, 'afterUpdate', T),
                        (m.timeBuffer -= S),
                        (p += 1));
                      var D = f.now() - r,
                        _ = f.now() - O,
                        H = D + (l._elapsedNextEstimate * _) / p;
                      if (p >= G || H > m.maxFrameTime) {
                        m.lastUpdatesDeferred = Math.round(
                          Math.max(0, m.timeBuffer / S - l._timeBufferMargin)
                        );
                        break;
                      }
                    }
                    ((v.timing.lastUpdatesPerFrame = p),
                      o.trigger(m, 'afterTick', T),
                      m.frameDeltaHistory.length >= 100 &&
                        (m.lastUpdatesDeferred && Math.round(m.frameDelta / S) > G
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
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
            function (b, h, c) {
              var l = {};
              ((b.exports = l), c(1));
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
                    S,
                    p,
                    C,
                    R,
                    z,
                    L = [],
                    G,
                    T,
                    O = 0,
                    D = 0,
                    _ = 0;
                  f = f || 15;
                  var H = function (Y, V, $) {
                      var ie = $ % 2 === 1 && $ > 1;
                      if (!R || Y != R.x || V != R.y) {
                        R && ie ? ((G = R.x), (T = R.y)) : ((G = 0), (T = 0));
                        var ae = { x: G + Y, y: T + V };
                        ((ie || !R) && (R = ae), L.push(ae), (D = G + Y), (_ = T + V));
                      }
                    },
                    B = function (Y) {
                      var V = Y.pathSegTypeAsLetter.toUpperCase();
                      if (V !== 'Z') {
                        switch (V) {
                          case 'M':
                          case 'L':
                          case 'T':
                          case 'C':
                          case 'S':
                          case 'Q':
                            ((D = Y.x), (_ = Y.y));
                            break;
                          case 'H':
                            D = Y.x;
                            break;
                          case 'V':
                            _ = Y.y;
                            break;
                        }
                        H(D, _, Y.pathSegType);
                      }
                    };
                  for (
                    l._svgPathToAbsolute(d), v = d.getTotalLength(), S = [], g = 0;
                    g < d.pathSegList.numberOfItems;
                    g += 1
                  )
                    S.push(d.pathSegList.getItem(g));
                  for (p = S.concat(); O < v; ) {
                    if (((z = d.getPathSegAtLength(O)), (r = S[z]), r != C)) {
                      for (; p.length && p[0] != r; ) B(p.shift());
                      C = r;
                    }
                    switch (r.pathSegTypeAsLetter.toUpperCase()) {
                      case 'C':
                      case 'T':
                      case 'S':
                      case 'Q':
                      case 'A':
                        ((y = d.getPointAtLength(O)), H(y.x, y.y, 0));
                        break;
                    }
                    O += f;
                  }
                  for (g = 0, m = p.length; g < m; ++g) B(p[g]);
                  return L;
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
                      var L = S.getItem(z),
                        G = L.pathSegTypeAsLetter;
                      if (/[MLHVCSQTA]/.test(G)) ('x' in L && (p = L.x), 'y' in L && (C = L.y));
                      else
                        switch (
                          ('x1' in L && (m = p + L.x1),
                          'x2' in L && (y = p + L.x2),
                          'y1' in L && (v = C + L.y1),
                          'y2' in L && (r = C + L.y2),
                          'x' in L && (p += L.x),
                          'y' in L && (C += L.y),
                          G)
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
                                L.r1,
                                L.r2,
                                L.angle,
                                L.largeArcFlag,
                                L.sweepFlag
                              ),
                              z
                            );
                            break;
                          case 'z':
                          case 'Z':
                            ((p = f), (C = g));
                            break;
                        }
                      (G == 'M' || G == 'm') && ((f = p), (g = C));
                    }
                  }));
              })();
            },
            function (b, h, c) {
              var l = {};
              b.exports = l;
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
      })(cr)),
    cr.exports
  );
}
var yS = gS();
const Te = Gh(yS);
var Xc, zh;
function pS() {
  if (zh) return Xc;
  ((zh = 1),
    (Xc = {
      decomp: D,
      quickDecomp: Y,
      isSimple: H,
      removeCollinearPoints: V,
      removeDuplicatePoints: $,
      makeCCW: S,
    }));
  function s(A, U, q) {
    q = q || 0;
    var W = [0, 0],
      le,
      N,
      Z,
      P,
      ue,
      se,
      ce;
    return (
      (le = A[1][1] - A[0][1]),
      (N = A[0][0] - A[1][0]),
      (Z = le * A[0][0] + N * A[0][1]),
      (P = U[1][1] - U[0][1]),
      (ue = U[0][0] - U[1][0]),
      (se = P * U[0][0] + ue * U[0][1]),
      (ce = le * ue - P * N),
      ie(ce, 0, q) || ((W[0] = (ue * Z - N * se) / ce), (W[1] = (le * se - P * Z) / ce)),
      W
    );
  }
  function E(A, U, q, W) {
    var le = U[0] - A[0],
      N = U[1] - A[1],
      Z = W[0] - q[0],
      P = W[1] - q[1];
    if (Z * N - P * le === 0) return !1;
    var ue = (le * (q[1] - A[1]) + N * (A[0] - q[0])) / (Z * N - P * le),
      se = (Z * (A[1] - q[1]) + P * (q[0] - A[0])) / (P * le - Z * N);
    return ue >= 0 && ue <= 1 && se >= 0 && se <= 1;
  }
  function b(A, U, q) {
    return (U[0] - A[0]) * (q[1] - A[1]) - (q[0] - A[0]) * (U[1] - A[1]);
  }
  function h(A, U, q) {
    return b(A, U, q) > 0;
  }
  function c(A, U, q) {
    return b(A, U, q) >= 0;
  }
  function l(A, U, q) {
    return b(A, U, q) < 0;
  }
  function o(A, U, q) {
    return b(A, U, q) <= 0;
  }
  var d = [],
    f = [];
  function g(A, U, q, W) {
    if (W) {
      var le = d,
        N = f;
      ((le[0] = U[0] - A[0]), (le[1] = U[1] - A[1]), (N[0] = q[0] - U[0]), (N[1] = q[1] - U[1]));
      var Z = le[0] * N[0] + le[1] * N[1],
        P = Math.sqrt(le[0] * le[0] + le[1] * le[1]),
        ue = Math.sqrt(N[0] * N[0] + N[1] * N[1]),
        se = Math.acos(Z / (P * ue));
      return se < W;
    } else return b(A, U, q) === 0;
  }
  function m(A, U) {
    var q = U[0] - A[0],
      W = U[1] - A[1];
    return q * q + W * W;
  }
  function v(A, U) {
    var q = A.length;
    return A[U < 0 ? (U % q) + q : U % q];
  }
  function y(A) {
    A.length = 0;
  }
  function r(A, U, q, W) {
    for (var le = q; le < W; le++) A.push(U[le]);
  }
  function S(A) {
    for (var U = 0, q = A, W = 1; W < A.length; ++W)
      (q[W][1] < q[U][1] || (q[W][1] === q[U][1] && q[W][0] > q[U][0])) && (U = W);
    return h(v(A, U - 1), v(A, U), v(A, U + 1)) ? !1 : (p(A), !0);
  }
  function p(A) {
    for (var U = [], q = A.length, W = 0; W !== q; W++) U.push(A.pop());
    for (var W = 0; W !== q; W++) A[W] = U[W];
  }
  function C(A, U) {
    return l(v(A, U - 1), v(A, U), v(A, U + 1));
  }
  var R = [],
    z = [];
  function L(A, U, q) {
    var W,
      le,
      N = R,
      Z = z;
    if (c(v(A, U + 1), v(A, U), v(A, q)) && o(v(A, U - 1), v(A, U), v(A, q))) return !1;
    le = m(v(A, U), v(A, q));
    for (var P = 0; P !== A.length; ++P)
      if (
        !((P + 1) % A.length === U || P === U) &&
        c(v(A, U), v(A, q), v(A, P + 1)) &&
        o(v(A, U), v(A, q), v(A, P)) &&
        ((N[0] = v(A, U)),
        (N[1] = v(A, q)),
        (Z[0] = v(A, P)),
        (Z[1] = v(A, P + 1)),
        (W = s(N, Z)),
        m(v(A, U), W) < le)
      )
        return !1;
    return !0;
  }
  function G(A, U, q) {
    for (var W = 0; W !== A.length; ++W)
      if (
        !(W === U || W === q || (W + 1) % A.length === U || (W + 1) % A.length === q) &&
        E(v(A, U), v(A, q), v(A, W), v(A, W + 1))
      )
        return !1;
    return !0;
  }
  function T(A, U, q, W) {
    var le = W || [];
    if ((y(le), U < q)) for (var N = U; N <= q; N++) le.push(A[N]);
    else {
      for (var N = 0; N <= q; N++) le.push(A[N]);
      for (var N = U; N < A.length; N++) le.push(A[N]);
    }
    return le;
  }
  function O(A) {
    for (var U = [], q = [], W = [], le = [], N = Number.MAX_VALUE, Z = 0; Z < A.length; ++Z)
      if (C(A, Z)) {
        for (var P = 0; P < A.length; ++P)
          if (L(A, Z, P)) {
            ((q = O(T(A, Z, P, le))), (W = O(T(A, P, Z, le))));
            for (var ue = 0; ue < W.length; ue++) q.push(W[ue]);
            q.length < N && ((U = q), (N = q.length), U.push([v(A, Z), v(A, P)]));
          }
      }
    return U;
  }
  function D(A) {
    var U = O(A);
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
      for (var q = [A], W = 0; W < U.length; W++)
        for (var le = U[W], N = 0; N < q.length; N++) {
          var Z = q[N],
            P = _(Z, le);
          if (P) {
            (q.splice(N, 1), q.push(P[0], P[1]));
            break;
          }
        }
      return q;
    } else {
      var le = U,
        W = A.indexOf(le[0]),
        N = A.indexOf(le[1]);
      return W !== -1 && N !== -1 ? [T(A, W, N), T(A, N, W)] : !1;
    }
  }
  function H(A) {
    var U = A,
      q;
    for (q = 0; q < U.length - 1; q++)
      for (var W = 0; W < q - 1; W++) if (E(U[q], U[q + 1], U[W], U[W + 1])) return !1;
    for (q = 1; q < U.length - 2; q++) if (E(U[0], U[U.length - 1], U[q], U[q + 1])) return !1;
    return !0;
  }
  function B(A, U, q, W, le) {
    le = le || 0;
    var N = U[1] - A[1],
      Z = A[0] - U[0],
      P = N * A[0] + Z * A[1],
      ue = W[1] - q[1],
      se = q[0] - W[0],
      ce = ue * q[0] + se * q[1],
      ve = N * se - ue * Z;
    return ie(ve, 0, le) ? [0, 0] : [(se * P - Z * ce) / ve, (N * ce - ue * P) / ve];
  }
  function Y(A, U, q, W, le, N, Z) {
    ((N = N || 100),
      (Z = Z || 0),
      (le = le || 25),
      (U = typeof U < 'u' ? U : []),
      (q = q || []),
      (W = W || []));
    var P = [0, 0],
      ue = [0, 0],
      se = [0, 0],
      ce = 0,
      ve = 0,
      xe = 0,
      Be = 0,
      Le = 0,
      Ye = 0,
      Ve = 0,
      We = [],
      Qe = [],
      fe = A,
      wt = A;
    if (wt.length < 3) return U;
    if ((Z++, Z > N)) return (console.warn('quickDecomp: max level (' + N + ') reached.'), U);
    for (var pe = 0; pe < A.length; ++pe)
      if (C(fe, pe)) {
        (q.push(fe[pe]), (ce = ve = Number.MAX_VALUE));
        for (var qe = 0; qe < A.length; ++qe)
          (h(v(fe, pe - 1), v(fe, pe), v(fe, qe)) &&
            o(v(fe, pe - 1), v(fe, pe), v(fe, qe - 1)) &&
            ((se = B(v(fe, pe - 1), v(fe, pe), v(fe, qe), v(fe, qe - 1))),
            l(v(fe, pe + 1), v(fe, pe), se) &&
              ((xe = m(fe[pe], se)), xe < ve && ((ve = xe), (ue = se), (Ye = qe)))),
            h(v(fe, pe + 1), v(fe, pe), v(fe, qe + 1)) &&
              o(v(fe, pe + 1), v(fe, pe), v(fe, qe)) &&
              ((se = B(v(fe, pe + 1), v(fe, pe), v(fe, qe), v(fe, qe + 1))),
              h(v(fe, pe - 1), v(fe, pe), se) &&
                ((xe = m(fe[pe], se)), xe < ce && ((ce = xe), (P = se), (Le = qe)))));
        if (Ye === (Le + 1) % A.length)
          ((se[0] = (ue[0] + P[0]) / 2),
            (se[1] = (ue[1] + P[1]) / 2),
            W.push(se),
            pe < Le
              ? (r(We, fe, pe, Le + 1),
                We.push(se),
                Qe.push(se),
                Ye !== 0 && r(Qe, fe, Ye, fe.length),
                r(Qe, fe, 0, pe + 1))
              : (pe !== 0 && r(We, fe, pe, fe.length),
                r(We, fe, 0, Le + 1),
                We.push(se),
                Qe.push(se),
                r(Qe, fe, Ye, pe + 1)));
        else {
          if ((Ye > Le && (Le += A.length), (Be = Number.MAX_VALUE), Le < Ye)) return U;
          for (var qe = Ye; qe <= Le; ++qe)
            c(v(fe, pe - 1), v(fe, pe), v(fe, qe)) &&
              o(v(fe, pe + 1), v(fe, pe), v(fe, qe)) &&
              ((xe = m(v(fe, pe), v(fe, qe))),
              xe < Be && G(fe, pe, qe) && ((Be = xe), (Ve = qe % A.length)));
          pe < Ve
            ? (r(We, fe, pe, Ve + 1), Ve !== 0 && r(Qe, fe, Ve, wt.length), r(Qe, fe, 0, pe + 1))
            : (pe !== 0 && r(We, fe, pe, wt.length), r(We, fe, 0, Ve + 1), r(Qe, fe, Ve, pe + 1));
        }
        return (
          We.length < Qe.length
            ? (Y(We, U, q, W, le, N, Z), Y(Qe, U, q, W, le, N, Z))
            : (Y(Qe, U, q, W, le, N, Z), Y(We, U, q, W, le, N, Z)),
          U
        );
      }
    return (U.push(A), U);
  }
  function V(A, U) {
    for (var q = 0, W = A.length - 1; A.length > 3 && W >= 0; --W)
      g(v(A, W - 1), v(A, W), v(A, W + 1), U) && (A.splice(W % A.length, 1), q++);
    return q;
  }
  function $(A, U) {
    for (var q = A.length - 1; q >= 1; --q)
      for (var W = A[q], le = q - 1; le >= 0; --le)
        if (ae(W, A[le], U)) {
          A.splice(q, 1);
          continue;
        }
  }
  function ie(A, U, q) {
    return ((q = q || 0), Math.abs(A - U) <= q);
  }
  function ae(A, U, q) {
    return ie(A[0], U[0], q) && ie(A[1], U[1], q);
  }
  return Xc;
}
var pv = pS();
const SS = Gh(pv),
  xS = V0({ __proto__: null, default: SS }, [pv]),
  sn = {
    dropCooldownMs: 500,
    maxScoreHistory: 10,
    storageKeys: {
      bestScore: 'ochimono.bestScore',
      scoreHistory: 'ochimono.scoreHistory',
      isSoundOn: 'ochimono.isSoundOn',
      themeId: 'ochimono.themeId',
      suspended: 'ochimono.suspended',
    },
  },
  bS = { 1: 20, 2: 26, 3: 32, 4: 38, 5: 46, 6: 54, 7: 62, 8: 72, 9: 82, 10: 104 },
  ES = { 1: 0.5, 2: 0.5, 3: 0.45, 4: 0.45, 5: 0.4, 6: 0.4, 7: 0.35, 8: 0.35, 9: 0.3, 10: 0.25 },
  CS = {
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
  TS = {
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
    const b = String(E).padStart(2, '0');
    return `images/${s}/level${b}.png`;
  },
  MS = 256,
  Nh = {
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
  RS = (s) => (s * (s + 1)) / 2,
  _S = (s) => ({
    id: s,
    level: s,
    name: CS[s],
    theme: TS[s],
    radius: bS[s],
    restitution: ES[s],
    friction: 0.3,
    density: 0.001,
    score: RS(s),
    svgPath: Sv(vr, s),
    color: Nh[s].color,
    glowColor: Nh[s].glow,
  }),
  Na = 10,
  gr = Object.fromEntries(Array.from({ length: Na }, (s, E) => E + 1).map((s) => [s, _S(s)]));
Array.from({ length: Na }, (s, E) => gr[E + 1]);
const Qc = 3,
  AS = 360,
  OS = (s) => Math.min(1, s / AS),
  Uh = new Map(),
  ta = (s, E, b = vr) => {
    const h = `${s}|${E}|${b}`,
      c = Uh.get(h);
    if (c) return c;
    const l = gr[s],
      o = { ...l, radius: l.radius * OS(E), svgPath: Sv(b, s) };
    return (Uh.set(h, o), o);
  },
  na = {
    gravityY: 1.5,
    wallThickness: 150,
    gameOverLineOffset: 80,
    restingVelocityThreshold: 0.5,
    gameOverGracePeriodMs: 1e3,
    gameOverDangerLimitMs: 5e3,
  },
  aa = { wall: 1, item: 2, magnetTarget: 4 },
  xv = aa.wall | aa.item | aa.magnetTarget,
  DS = aa.wall | aa.magnetTarget,
  bv = typeof window < 'u' && typeof window.localStorage < 'u',
  yr = (s) => {
    if (!bv) return null;
    try {
      return window.localStorage.getItem(s);
    } catch {
      return null;
    }
  },
  pr = (s, E) => {
    if (bv)
      try {
        window.localStorage.setItem(s, E);
      } catch {}
  },
  Ev = () => {
    const s = yr(sn.storageKeys.bestScore);
    if (s === null) return 0;
    const E = Number(s);
    return Number.isFinite(E) ? E : 0;
  },
  wS = (s) => {
    pr(sn.storageKeys.bestScore, String(s));
  },
  zS = () => {
    const s = yr(sn.storageKeys.scoreHistory);
    if (s === null) return [];
    try {
      const E = JSON.parse(s);
      return Array.isArray(E) ? E.filter((b) => typeof b == 'number' && Number.isFinite(b)) : [];
    } catch {
      return [];
    }
  },
  NS = (s) => {
    const E = [s, ...zS()].slice(0, sn.maxScoreHistory);
    return (pr(sn.storageKeys.scoreHistory, JSON.stringify(E)), E);
  },
  Cv = () => {
    const s = yr(sn.storageKeys.isSoundOn);
    return s === null ? !0 : s === 'true';
  },
  Tv = (s) => {
    pr(sn.storageKeys.isSoundOn, String(s));
  },
  Mv = () => {
    const s = yr(sn.storageKeys.themeId);
    return ho(s) ? s : vr;
  },
  Ic = (s) => {
    pr(sn.storageKeys.themeId, s);
  },
  US = () => {
    const [s, E] = w.useState(0),
      [b, h] = w.useState(0),
      [c, l] = w.useState(!1),
      o = w.useRef(0),
      d = w.useRef(0);
    w.useEffect(() => {
      const y = Ev();
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
          r && ((d.current = y), wS(y), h(y)),
          NS(y),
          l(r),
          { isNewRecord: r, finalScore: y }
        );
      }, []);
    return { score: s, bestScore: b, isNewRecord: c, add: f, setRaw: g, reset: m, finalize: v };
  },
  BS = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  LS = { merge: 'sounds/punyu.mp3', special: 'sounds/punyu.mp3' },
  HS = 0.7,
  jS = () => {
    if (typeof window > 'u') return null;
    const s = window;
    return s.AudioContext ?? s.webkitAudioContext ?? null;
  },
  GS = () => {
    const [s, E] = w.useState(!0),
      b = w.useRef(null),
      h = w.useRef({});
    (w.useEffect(() => {
      E(Cv());
    }, []),
      w.useEffect(() => {
        const o = jS();
        if (!o) return;
        const d = new o();
        b.current = d;
        let f = !1;
        const g = {};
        return (
          (async () => {
            for (const [m, v] of Object.entries(LS))
              try {
                const r = await (await fetch(BS(v))).arrayBuffer();
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
    const c = w.useCallback(() => {
        E((o) => {
          const d = !o;
          return (Tv(d), d);
        });
      }, []),
      l = w.useCallback(
        (o) => {
          if (!s) return;
          const d = b.current,
            f = h.current[o];
          if (!d || !f) return;
          d.state === 'suspended' && d.resume().catch(() => {});
          const g = d.createBufferSource();
          g.buffer = f;
          const m = d.createGain();
          ((m.gain.value = HS), g.connect(m).connect(d.destination), g.start(0));
        },
        [s]
      );
    return { isSoundOn: s, toggle: c, play: l };
  },
  Rv = (s) => ({
    restitution: s.restitution,
    friction: s.friction,
    density: s.density,
    label: `item-${s.level}`,
    collisionFilter: { category: aa.item, mask: xv },
  }),
  _v = (s) => {
    for (const E of s.parts) E.render.visible = !1;
  },
  Av = (s, E, b) => {
    s.plugin.itemData = { level: E, consumed: !1, droppedAt: b };
  },
  YS = (s, E, b, h) => {
    const c = Te.Bodies.circle(E, b, s.radius, Rv(s));
    return (Av(c, s.level, h), _v(c), c);
  },
  VS = (s, E, b, h, c) => {
    if (c.length < 3) return null;
    const l = Te.Bodies.fromVertices(E, b, [c], Rv(s));
    return l ? (Av(l, s.level, h), _v(l), l) : null;
  },
  Pc = (s) => (s.parent && s.parent !== s ? s.parent : s),
  Pn = (s) => Pc(s).plugin.itemData,
  qS = (s, E) => {
    const b = na.wallThickness,
      h = {
        isStatic: !0,
        restitution: 0.2,
        friction: 0.5,
        label: 'wall',
        collisionFilter: { category: aa.wall },
      },
      c = Te.Bodies.rectangle(s / 2, E + b / 2, s + b * 2, b, h),
      l = Te.Bodies.rectangle(-b / 2, E / 2, b, E * 2, h),
      o = Te.Bodies.rectangle(s + b / 2, E / 2, b, E * 2, h),
      d = Te.Bodies.rectangle(s / 2, -b / 2, s + b * 2, b, { ...h, restitution: 0 });
    return { ground: c, leftWall: l, rightWall: o, ceiling: d };
  },
  XS = (s, E) => ({ x: (s.position.x + E.position.x) / 2, y: (s.position.y + E.position.y) / 2 }),
  QS = (s) => (s < 2 || s > Na ? 0 : gr[s].score),
  ZS = () => gr[Na].score,
  go = sn.storageKeys.suspended,
  KS = 1,
  Yt = (s) => typeof s == 'number' && Number.isFinite(s),
  kS = (s) => {
    if (typeof s != 'object' || s === null) return null;
    const E = s;
    return !Yt(E.level) || !Yt(E.x) || !Yt(E.y)
      ? null
      : {
          level: E.level,
          x: E.x,
          y: E.y,
          vx: Yt(E.vx) ? E.vx : 0,
          vy: Yt(E.vy) ? E.vy : 0,
          angle: Yt(E.angle) ? E.angle : 0,
          angularVelocity: Yt(E.angularVelocity) ? E.angularVelocity : 0,
        };
  },
  eo = () => {
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
      if (!Yt(b.score) || !Array.isArray(b.bodies)) return null;
      const h = [];
      for (const c of b.bodies) {
        const l = kS(c);
        l && h.push(l);
      }
      return {
        version: Yt(b.version) ? b.version : 0,
        savedAt: Yt(b.savedAt) ? b.savedAt : 0,
        score: b.score,
        themeId: ho(b.themeId) ? b.themeId : vr,
        currentItemLevel: Yt(b.currentItemLevel) ? b.currentItemLevel : 1,
        nextItemLevel: Yt(b.nextItemLevel) ? b.nextItemLevel : 1,
        skillGauge: Yt(b.skillGauge) ? b.skillGauge : 0,
        magnetUsesLeft: Yt(b.magnetUsesLeft) ? b.magnetUsesLeft : void 0,
        bodies: h,
      };
    } catch {
      return null;
    }
  },
  JS = (s) => {
    if (!(typeof window > 'u' || typeof window.localStorage > 'u'))
      try {
        const E = { ...s, version: KS, savedAt: Date.now() };
        window.localStorage.setItem(go, JSON.stringify(E));
      } catch {}
  },
  to = () => {
    if (!(typeof window > 'u' || typeof window.localStorage > 'u'))
      try {
        window.localStorage.removeItem(go);
      } catch {}
  },
  FS = 32,
  $S = 14,
  za = (s, E) => s * (1 << $S) + E,
  Gi = (s, E) => s[E + 3] >= FS,
  WS = (s, E, b) => {
    const h = [];
    for (let c = 0; c < b; c += 1)
      for (let l = 0; l < E; l += 1) {
        const o = (c * E + l) * 4;
        if (!Gi(s, o)) continue;
        ((c === 0 || !Gi(s, ((c - 1) * E + l) * 4)) &&
          h.push({
            fromKey: za(l, c),
            toKey: za(l + 1, c),
            from: { x: l, y: c },
            to: { x: l + 1, y: c },
          }),
          (l === E - 1 || !Gi(s, (c * E + (l + 1)) * 4)) &&
            h.push({
              fromKey: za(l + 1, c),
              toKey: za(l + 1, c + 1),
              from: { x: l + 1, y: c },
              to: { x: l + 1, y: c + 1 },
            }),
          (c === b - 1 || !Gi(s, ((c + 1) * E + l) * 4)) &&
            h.push({
              fromKey: za(l + 1, c + 1),
              toKey: za(l, c + 1),
              from: { x: l + 1, y: c + 1 },
              to: { x: l, y: c + 1 },
            }),
          (l === 0 || !Gi(s, (c * E + (l - 1)) * 4)) &&
            h.push({
              fromKey: za(l, c + 1),
              toKey: za(l, c),
              from: { x: l, y: c + 1 },
              to: { x: l, y: c },
            }));
      }
    return h;
  },
  IS = (s) => {
    const E = new Map();
    for (const c of s) {
      const l = E.get(c.fromKey);
      l ? l.push(c) : E.set(c.fromKey, [c]);
    }
    const b = new Set(),
      h = [];
    for (const c of s) {
      if (b.has(c)) continue;
      const l = [];
      let o = c;
      for (; o && !b.has(o); ) {
        (b.add(o), l.push(o.from));
        const d = E.get(o.toKey);
        o = d == null ? void 0 : d.find((f) => !b.has(f));
      }
      l.length >= 3 && h.push(l);
    }
    return h;
  },
  PS = (s, E, b) => {
    const h = b.x - E.x,
      c = b.y - E.y,
      l = Math.hypot(h, c);
    return l === 0
      ? Math.hypot(s.x - E.x, s.y - E.y)
      : Math.abs(c * s.x - h * s.y + b.x * E.y - b.y * E.x) / l;
  },
  no = (s, E) => {
    if (s.length <= 2) return s.slice();
    let b = 0,
      h = 0;
    const c = s.length - 1;
    for (let l = 1; l < c; l += 1) {
      const o = PS(s[l], s[0], s[c]);
      o > b && ((b = o), (h = l));
    }
    if (b > E) {
      const l = no(s.slice(0, h + 1), E),
        o = no(s.slice(h), E);
      return [...l, ...o.slice(1)];
    }
    return [s[0], s[c]];
  },
  ex = (s, E) => {
    if (s.length <= 3) return s;
    const b = [...s, s[0]],
      h = no(b, E);
    return (h.pop(), h);
  },
  tx = (s, E = {}) => {
    const b = E.simplifyEpsilon ?? 2,
      h = WS(s.data, s.width, s.height);
    if (h.length === 0) return null;
    const c = IS(h);
    if (c.length === 0) return null;
    let l = c[0];
    for (let o = 1; o < c.length; o += 1) c[o].length > l.length && (l = c[o]);
    return ex(l, b);
  },
  Yi = new Map(),
  Zc = new Map(),
  nx = (s) => {
    const E = s.length;
    if (E === 0) return { x: 0, y: 0 };
    if (E < 3) {
      let l = 0,
        o = 0;
      for (const d of s) ((l += d.x), (o += d.y));
      return { x: l / E, y: o / E };
    }
    let b = 0,
      h = 0,
      c = 0;
    for (let l = 0; l < E; l += 1) {
      const o = s[l],
        d = s[(l + 1) % E],
        f = o.x * d.y - d.x * o.y;
      ((b += (o.x + d.x) * f), (h += (o.y + d.y) * f), (c += f));
    }
    if (c === 0) {
      let l = 0,
        o = 0;
      for (const d of s) ((l += d.x), (o += d.y));
      return { x: l / E, y: o / E };
    }
    return { x: b / (3 * c), y: h / (3 * c) };
  },
  ax = async (s) => {
    const E = s.width,
      b = s.height;
    if (typeof OffscreenCanvas < 'u') {
      const o = new OffscreenCanvas(E, b).getContext('2d');
      if (!o) throw new Error('OffscreenCanvas 2D context unavailable');
      return (o.drawImage(s, 0, 0), o.getImageData(0, 0, E, b));
    }
    const h = document.createElement('canvas');
    ((h.width = E), (h.height = b));
    const c = h.getContext('2d');
    if (!c) throw new Error('Canvas 2D context unavailable');
    return (c.drawImage(s, 0, 0), c.getImageData(0, 0, E, b));
  },
  lx = async (s, E) => {
    const b = Yi.get(s);
    if (b !== void 0) return b;
    const h = Zc.get(s);
    if (h) return h;
    const c = (async () => {
      try {
        const l = await ax(E),
          o = tx(l);
        if (!o || o.length < 3) return (Yi.set(s, null), null);
        const d = nx(o),
          f = {
            vertices: o,
            centroidOffset: { x: d.x - l.width / 2, y: d.y - l.height / 2 },
            pngWidth: l.width,
            pngHeight: l.height,
          };
        return (Yi.set(s, f), f);
      } catch {
        return (Yi.set(s, null), null);
      } finally {
        Zc.delete(s);
      }
    })();
    return (Zc.set(s, c), c);
  },
  Ov = (s) => Yi.get(s) ?? null,
  ix = (s, E) => {
    const b = (E * 2) / s.pngWidth;
    return s.vertices.map((h) => ({
      x: (h.x - s.pngWidth / 2 - s.centroidOffset.x) * b,
      y: (h.y - s.pngHeight / 2 - s.centroidOffset.y) * b,
    }));
  };
Te.Common.setDecomp(xS);
const Bh = new Map(),
  yo = (s) => {
    const E = Bh.get(s);
    if (E) return E;
    const b = `/ochimono-game/${s}`.replace(/\/{2,}/g, '/');
    return (Bh.set(s, b), b);
  },
  ur = (s, E) => {
    const b = (E.radius * 2) / MS,
      h = yo(E.svgPath),
      c = Ov(h),
      l = c ? -c.centroidOffset.x * b : 0,
      o = c ? -c.centroidOffset.y * b : 0;
    s.plugin.itemRender = { textureUrl: h, scale: b, contourOffsetX: l, contourOffsetY: o };
  },
  Kc = (s, E, b, h) => {
    const c = yo(s.svgPath),
      l = Ov(c);
    if (l) {
      const o = ix(l, s.radius),
        d = VS(s, E, b, h, o);
      if (d) return d;
    }
    return YS(s, E, b, h);
  },
  Lh = new Set(),
  Hh = async (s, E) => {
    for (let b = 1; b <= Na; b += 1) {
      const h = ta(b, 1, s),
        c = yo(h.svgPath);
      if (!Lh.has(c)) {
        Lh.add(c);
        try {
          const o = await (await fetch(c)).blob(),
            d = await createImageBitmap(o);
          (E && (E.textures[c] = d), lx(c, d));
        } catch {
          const l = new Image();
          l.src = c;
        }
      }
    }
  },
  ux = ({ fieldWidth: s, fieldHeight: E }) => {
    const b = w.useRef(null),
      h = w.useRef(null),
      c = w.useRef(null),
      l = w.useRef(null),
      o = w.useRef(null),
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
      L = w.useRef('idle'),
      G = w.useRef(null),
      T = w.useRef(s),
      O = w.useRef(E),
      [D, _] = w.useState(() => Mv()),
      H = w.useRef(D);
    H.current = D;
    const B = US(),
      Y = GS(),
      V = w.useRef(B.add);
    V.current = B.add;
    const $ = w.useRef(Y.play);
    $.current = Y.play;
    const ie = w.useRef(B.finalize);
    ie.current = B.finalize;
    const [ae, A] = w.useState(0),
      U = w.useRef(0),
      q = w.useCallback((re) => {
        ((U.current = re), A(re));
      }, []),
      W = w.useCallback(
        (re) => {
          const ge = Math.min(dt.gaugeMax, U.current + re);
          ge !== U.current && q(ge);
        },
        [q]
      ),
      le = w.useRef(W);
    le.current = W;
    const [N, Z] = w.useState(!1),
      [P, ue] = w.useState(!1),
      se = w.useRef(!1),
      [ce, ve] = w.useState(!1),
      [xe, Be] = w.useState(Yl),
      Le = w.useRef(Yl),
      Ye = w.useCallback((re) => {
        ((Le.current = re), Be(re));
      }, []),
      Ve = w.useRef(!1),
      We = w.useRef(null),
      Qe = w.useRef(null),
      fe = w.useRef(null),
      wt = w.useRef(null),
      pe = w.useRef(new Set()),
      qe = w.useCallback((re) => {
        for (const ge of re.parts)
          ((ge.collisionFilter.category = aa.magnetTarget), (ge.collisionFilter.mask = DS));
        pe.current.add(re);
      }, []),
      St = w.useCallback(() => {
        for (const re of pe.current)
          for (const ge of re.parts)
            ((ge.collisionFilter.category = aa.item), (ge.collisionFilter.mask = xv));
        pe.current.clear();
      }, []),
      An = w.useCallback(() => {
        (St(),
          (fe.current = null),
          (wt.current = null),
          We.current === 'magnet' && (We.current = null));
      }, [St]),
      on = w.useRef(An);
    on.current = An;
    const zt = w.useRef(null),
      [el, ut] = w.useState(null),
      Nt = w.useRef(null),
      ke = w.useRef(new Set()),
      tl = w.useRef(1),
      Ft = w.useCallback(() => {
        let re;
        return ((re = Math.floor(Math.random() * Qc) + 1), ta(re, T.current, H.current));
      }, []);
    w.useEffect(() => {
      const re = b.current;
      if (!re) return;
      const ge = T.current,
        we = O.current,
        Ee = Te.Engine.create({ gravity: { x: 0, y: na.gravityY } }),
        me = Te.Render.create({
          element: re,
          engine: Ee,
          options: {
            width: ge,
            height: we,
            wireframes: !1,
            background: 'transparent',
            pixelRatio: Math.min(1.5, window.devicePixelRatio || 1),
          },
        }),
        { ground: Se, leftWall: ze, rightWall: tt, ceiling: He } = qS(ge, we);
      ([Se, ze, tt, He].forEach((Pe) => {
        Pe.render.visible = !1;
      }),
        Te.World.add(Ee.world, [Se, ze, tt, He]));
      const nt = ke.current,
        Ne = () => {
          const Pe = me.context,
            xt = me.textures;
          for (const wn of nt) {
            const hn = wn.plugin.itemRender;
            if (!hn) continue;
            const vn = xt[hn.textureUrl];
            if (!vn) continue;
            const bn = vn.width,
              Ql = vn.height,
              zn = bn * hn.scale,
              Nn = Ql * hn.scale;
            (Pe.save(),
              Pe.translate(wn.position.x, wn.position.y),
              Pe.rotate(wn.angle),
              Pe.translate(hn.contourOffsetX, hn.contourOffsetY),
              Pe.drawImage(vn, -zn / 2, -Nn / 2, zn, Nn),
              Pe.restore());
          }
        };
      (Te.Events.on(me, 'afterRender', Ne), Te.Render.run(me));
      const Re = Te.Runner.create();
      (Te.Runner.run(Re, Ee), (h.current = Ee), (c.current = me), (l.current = Re));
      for (const Pe of mo) Hh(Pe.id, me);
      const Ie = () => {
        document.hidden
          ? (Te.Runner.stop(Re), Te.Render.stop(me))
          : (Te.Render.run(me), Te.Runner.run(Re, Ee));
      };
      return (
        document.addEventListener('visibilitychange', Ie),
        () => {
          (document.removeEventListener('visibilitychange', Ie),
            Te.Events.off(me, 'afterRender', Ne),
            Te.Runner.stop(Re),
            Te.Render.stop(me),
            Te.World.clear(Ee.world, !1),
            Te.Engine.clear(Ee),
            me.canvas.parentNode && me.canvas.parentNode.removeChild(me.canvas),
            (me.textures = {}),
            (h.current = null),
            (c.current = null),
            (l.current = null),
            nt.clear());
        }
      );
    }, []);
    const On = w.useCallback((re, ge) => {
      var Ie;
      const we = h.current;
      if (!we) return;
      const Ee = Pc(re),
        me = Pc(ge),
        Se = Pn(Ee),
        ze = Pn(me);
      if (!Se || !ze || Se.consumed || ze.consumed || Se.level !== ze.level) return;
      ((Se.consumed = !0), (ze.consumed = !0));
      const tt = Se.level + 1,
        He = XS(Ee, me);
      (Te.World.remove(we.world, [Ee, me]), ke.current.delete(Ee), ke.current.delete(me));
      let nt = 0,
        Ne = !1,
        Re = I1(tt);
      if (tt > Na)
        ((nt = ZS()), (Ne = !0), (Re += dt.bonusOnSpecialElimination), $.current('special'));
      else {
        const Pe = ta(tt, T.current, H.current),
          xt = Kc(Pe, He.x, He.y, performance.now());
        (ur(xt, Pe),
          Te.World.add(we.world, xt),
          ke.current.add(xt),
          (nt = QS(tt)),
          (Ne = tt === Na),
          Ne && (Re += dt.bonusOnLevel10Created),
          $.current(Ne ? 'special' : 'merge'));
      }
      (V.current(nt),
        le.current(Re),
        (Ie = o.current) == null || Ie.add({ x: He.x, y: He.y, score: nt, isSpecial: Ne }));
    }, []);
    (w.useEffect(() => {
      const re = h.current;
      if (!re) return;
      const ge = (we) => {
        for (const Ee of we.pairs) On(Ee.bodyA, Ee.bodyB);
      };
      return (
        Te.Events.on(re, 'collisionStart', ge),
        () => {
          Te.Events.off(re, 'collisionStart', ge);
        }
      );
    }, [On]),
      w.useEffect(() => {
        const re = h.current;
        if (!re) return;
        const ge = na.gameOverLineOffset;
        let we = 0;
        const Ee = () => {
            ((zt.current = null), Nt.current !== null && ((Nt.current = null), ut(null)));
          },
          me = () => {
            if (fe.current !== null)
              if (performance.now() >= fe.current) on.current();
              else {
                const Re = [];
                for (const Ie of pe.current) {
                  const Pe = Pn(Ie);
                  Pe && !Pe.consumed && Re.push(Ie);
                }
                if (Re.length >= 2) {
                  let Ie = 0,
                    Pe = 0;
                  for (const xt of Re) ((Ie += xt.position.x), (Pe += xt.position.y));
                  ((Ie /= Re.length), (Pe /= Re.length));
                  for (const xt of Re) {
                    const wn = Ie - xt.position.x,
                      hn = Pe - xt.position.y,
                      vn = Math.hypot(wn, hn);
                    if (vn < 1) continue;
                    const bn = dt.magnet.forceMagnitude * xt.mass;
                    Te.Body.applyForce(xt, xt.position, { x: (wn / vn) * bn, y: (hn / vn) * bn });
                  }
                } else on.current();
              }
            if (L.current !== 'playing') return;
            if (Ve.current) {
              zt.current !== null &&
                ((zt.current = null), Nt.current !== null && ((Nt.current = null), ut(null)));
              return;
            }
            if (((we = (we + 1) % 6), we !== 0)) return;
            const Se = performance.now();
            let ze = !1;
            for (const Ne of ke.current) {
              const Re = Pn(Ne);
              if (
                !(!Re || Re.consumed) &&
                !(Se - Re.droppedAt < na.gameOverGracePeriodMs) &&
                !(Math.abs(Ne.velocity.y) > na.restingVelocityThreshold) &&
                Ne.bounds.min.y < ge
              ) {
                ze = !0;
                break;
              }
            }
            if (!ze) {
              Ee();
              return;
            }
            zt.current === null && (zt.current = Se);
            const tt = Se - zt.current,
              He = na.gameOverDangerLimitMs;
            if (tt >= He) {
              (Ee(), (L.current = 'gameover'), f('gameover'));
              const Ne = ie.current();
              $.current(Ne.isNewRecord ? 'highscore' : 'gameover');
              return;
            }
            const nt = Math.max(1, Math.ceil((He - tt) / 1e3));
            nt !== Nt.current && ((Nt.current = nt), ut(nt));
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
          Hh(D, c.current);
          for (const Ee of ke.current) {
            const me = Pn(Ee);
            if (!me || me.consumed) continue;
            const Se = ta(me.level, T.current, D);
            ur(Ee, Se);
          }
        }
        const ge = r.current ? ta(r.current.level, T.current, D) : null,
          we = S.current ? ta(S.current.level, T.current, D) : null;
        (p(ge), C(we));
      }, [D, p, C]));
    const Dn = w.useCallback((re) => {
        (_(re), Ic(re));
      }, []),
      xn = w.useCallback((re) => {
        ((se.current = re), ue(re));
      }, []),
      Ua = w.useCallback(
        (re) => {
          q(Math.max(0, U.current - re));
        },
        [q]
      ),
      ra = w.useCallback(() => {
        if (!h.current) return;
        We.current = 'shake';
        const { impulseMin: ge, impulseMax: we, upwardBias: Ee } = dt.shake;
        for (const me of ke.current) {
          const Se = Pn(me);
          if (!Se || Se.consumed) continue;
          const ze = Math.random() * Math.PI * 2,
            tt = ge + Math.random() * (we - ge),
            He = Math.cos(ze) * tt * me.mass,
            nt = (Math.sin(ze) * tt - Ee) * me.mass;
          Te.Body.applyForce(me, me.position, { x: He, y: nt });
        }
        ($.current('special'), (We.current = null));
      }, []),
      _t = w.useCallback(() => {
        const re = h.current;
        if (!re || Qe.current !== null) return;
        ((We.current = 'gravityFlip'), (Ve.current = !0));
        const ge = na.gravityY;
        re.gravity.y = ge * dt.gravityFlip.multiplier;
        const we = new Map(),
          Ee = new Map();
        for (const me of ke.current)
          (we.set(me, me.frictionAir),
            Ee.set(me, me.restitution),
            (me.frictionAir = dt.gravityFlip.frictionAir),
            Te.Body.setVelocity(me, { x: me.velocity.x, y: dt.gravityFlip.liftKickVelocity }));
        (ve(!0),
          $.current('special'),
          (Qe.current = window.setTimeout(() => {
            const me = h.current;
            me && (me.gravity.y = ge * dt.gravityFlip.slamGravityMultiplier);
            for (const Se of ke.current)
              ((Se.frictionAir = dt.gravityFlip.slamFrictionAir),
                Ee.has(Se) || Ee.set(Se, Se.restitution),
                (Se.restitution = dt.gravityFlip.slamRestitution),
                Te.Body.setVelocity(Se, { x: Se.velocity.x, y: dt.gravityFlip.slamKickVelocity }));
            (ve(!1),
              $.current('special'),
              (Qe.current = window.setTimeout(() => {
                const Se = h.current;
                Se && (Se.gravity.y = ge);
                for (const ze of ke.current)
                  ((ze.frictionAir = we.get(ze) ?? 0.01), (ze.restitution = Ee.get(ze) ?? 0.4));
                ((Qe.current = null),
                  (Ve.current = !1),
                  We.current === 'gravityFlip' && (We.current = null));
              }, dt.gravityFlip.slamDurationMs)));
          }, dt.gravityFlip.durationMs)));
      }, []),
      fn = w.useCallback(() => {
        ((We.current = 'magnet'), xn(!0));
      }, [xn]),
      Ot = w.useCallback(() => {
        se.current && (xn(!1), (We.current = null));
      }, [xn]),
      Sr = w.useCallback(
        (re, ge) => {
          if (!se.current) return;
          const we = Array.from(ke.current),
            Ee = Te.Query.point(we, { x: re, y: ge });
          if (Ee.length === 0) return;
          const me = Ee[0],
            Se = Pn(me);
          if (!Se) return;
          const ze = we.filter((He) => {
            if (He === me) return !1;
            const nt = Pn(He);
            return !!nt && !nt.consumed && nt.level === Se.level;
          });
          if (ze.length === 0 || Le.current <= 0) return;
          const tt = ze[Math.floor(Math.random() * ze.length)];
          (qe(me),
            qe(tt),
            (wt.current = Se.level),
            (fe.current = performance.now() + dt.magnet.durationMs),
            Ye(Le.current - 1),
            xn(!1),
            $.current('special'),
            Ua(ji('magnet')));
        },
        [Ua, xn, Ye, qe]
      ),
      xr = w.useCallback(() => {
        U.current < dt.segmentMax || (L.current === 'playing' && Z(!0));
      }, []),
      br = w.useCallback(() => {
        Z(!1);
      }, []),
      nl = w.useCallback(
        (re) => {
          const ge = ji(re);
          U.current < ge ||
            (re === 'magnet' && Le.current <= 0) ||
            (Z(!1),
            re === 'shake'
              ? (ra(), Ua(ge))
              : re === 'gravityFlip'
                ? (_t(), Ua(ge))
                : re === 'magnet' && fn());
        },
        [ra, _t, fn, Ua]
      ),
      dn = w.useCallback(() => {
        Qe.current !== null && (window.clearTimeout(Qe.current), (Qe.current = null));
        const re = h.current;
        (re && (re.gravity.y = na.gravityY),
          ve(!1),
          (Ve.current = !1),
          St(),
          (fe.current = null),
          (wt.current = null),
          (We.current = null),
          Z(!1),
          xn(!1),
          q(0));
      }, [xn, q, St]),
      al = w.useCallback(
        (re) => {
          const ge = h.current;
          if (!ge || L.current !== 'playing' || !R.current) return;
          const we = r.current;
          if (!we) return;
          const Ee = performance.now();
          if (Ee - z.current < sn.dropCooldownMs) return;
          const me = Math.max(0, Math.min(1, re)),
            Se = we.radius,
            ze = Se,
            tt = T.current - Se,
            He = ze + me * (tt - ze),
            nt = we.radius + 4,
            Ne = Kc(we, He, nt, Ee);
          (ur(Ne, we),
            Te.World.add(ge.world, Ne),
            ke.current.add(Ne),
            $.current('drop'),
            (R.current = !1),
            (z.current = Ee),
            G.current !== null && window.clearTimeout(G.current),
            (G.current = window.setTimeout(() => {
              ((G.current = null),
                L.current === 'playing' && (p(S.current), C(Ft()), (R.current = !0)));
            }, sn.dropCooldownMs)));
        },
        [Ft, p, C]
      ),
      mn = w.useCallback(() => {
        var re;
        (B.reset(),
          (re = o.current) == null || re.clear(),
          dn(),
          (zt.current = null),
          (Nt.current = null),
          ut(null),
          (tl.current = 1),
          Ye(Yl),
          p(Ft()),
          C(Ft()),
          (R.current = !0),
          (z.current = 0),
          (L.current = 'playing'),
          f('playing'));
      }, [B, Ft, dn, p, Ye, C]),
      ll = w.useCallback(() => {
        const re = h.current;
        if (re) {
          for (const ge of ke.current) Te.World.remove(re.world, ge);
          ke.current.clear();
        }
        (G.current !== null && (window.clearTimeout(G.current), (G.current = null)), mn());
      }, [mn]),
      Ba = w.useCallback(() => {
        var we, Ee, me;
        if (L.current !== 'playing') return;
        const re = [];
        for (const Se of ke.current) {
          const ze = Pn(Se);
          !ze ||
            ze.consumed ||
            re.push({
              level: ze.level,
              x: Se.position.x,
              y: Se.position.y,
              vx: Se.velocity.x,
              vy: Se.velocity.y,
              angle: Se.angle,
              angularVelocity: Se.angularVelocity,
            });
        }
        JS({
          score: B.score,
          themeId: H.current,
          currentItemLevel: ((we = r.current) == null ? void 0 : we.level) ?? 1,
          nextItemLevel: ((Ee = S.current) == null ? void 0 : Ee.level) ?? 1,
          skillGauge: U.current,
          magnetUsesLeft: Le.current,
          bodies: re,
        });
        const ge = h.current;
        if (ge) {
          for (const Se of ke.current) Te.World.remove(ge.world, Se);
          ke.current.clear();
        }
        (G.current !== null && (window.clearTimeout(G.current), (G.current = null)),
          (me = o.current) == null || me.clear(),
          dn(),
          (zt.current = null),
          (Nt.current = null),
          ut(null),
          p(null),
          C(null),
          B.reset(),
          (R.current = !0),
          (z.current = 0),
          (L.current = 'idle'),
          f('idle'));
      }, [dn, B, p, C]),
      Er = w.useCallback(
        (re) => {
          var tt;
          const ge = h.current;
          if (!ge) return;
          for (const He of ke.current) Te.World.remove(ge.world, He);
          (ke.current.clear(),
            G.current !== null && (window.clearTimeout(G.current), (G.current = null)),
            (tt = o.current) == null || tt.clear(),
            dn(),
            (zt.current = null),
            (Nt.current = null),
            ut(null),
            re.themeId !== H.current && (_(re.themeId), (H.current = re.themeId), Ic(re.themeId)));
          const we = performance.now();
          for (const He of re.bodies) {
            if (He.level < 1 || He.level > Na) continue;
            const nt = ta(He.level, T.current, re.themeId),
              Ne = Kc(nt, He.x, He.y, we);
            (Te.Body.setVelocity(Ne, { x: He.vx, y: He.vy }),
              Te.Body.setAngle(Ne, He.angle),
              Te.Body.setAngularVelocity(Ne, He.angularVelocity),
              ur(Ne, nt),
              Te.World.add(ge.world, Ne),
              ke.current.add(Ne));
          }
          const Ee =
              re.currentItemLevel >= 1 && re.currentItemLevel <= Qc ? re.currentItemLevel : 1,
            me = re.nextItemLevel >= 1 && re.nextItemLevel <= Qc ? re.nextItemLevel : 1;
          (p(ta(Ee, T.current, re.themeId)), C(ta(me, T.current, re.themeId)));
          const Se = Math.max(0, Math.min(dt.gaugeMax, re.skillGauge));
          q(Se);
          const ze = Math.max(0, Math.min(Yl, re.magnetUsesLeft ?? Yl));
          (Ye(ze),
            B.reset(),
            B.setRaw(Math.max(0, re.score)),
            (R.current = !0),
            (z.current = 0),
            (L.current = 'playing'),
            f('playing'));
        },
        [dn, B, p, Ye, C, q]
      ),
      Zi = na.gameOverLineOffset;
    return {
      status: d,
      score: B.score,
      bestScore: B.bestScore,
      isNewRecord: B.isNewRecord,
      currentItem: g,
      nextItem: v,
      isSoundOn: Y.isSoundOn,
      themeId: D,
      mergeEffectRef: o,
      canvasContainerRef: b,
      drop: al,
      start: mn,
      restart: ll,
      toggleSound: Y.toggle,
      setThemeId: Dn,
      fieldWidth: s,
      fieldHeight: E,
      gameOverLineY: Zi,
      skillGauge: ae,
      skillGaugeMax: dt.gaugeMax,
      skillSegmentMax: dt.segmentMax,
      skillSegmentCount: dt.segmentCount,
      canOpenSkillMenu: ae >= dt.segmentMax,
      canUseSkill: {
        shake: ae >= ji('shake'),
        gravityFlip: ae >= ji('gravityFlip'),
        magnet: ae >= ji('magnet') && xe > 0,
      },
      magnetUsesLeft: xe,
      magnetMaxUses: Yl,
      isSkillMenuOpen: N,
      openSkillMenu: xr,
      closeSkillMenu: br,
      selectSkill: nl,
      isMagnetSelecting: P,
      cancelMagnetSelecting: Ot,
      selectMagnetTarget: Sr,
      isGravityFlipped: ce,
      gameOverCountdown: el,
      suspend: Ba,
      resume: Er,
      loadSuspended: eo,
      clearSuspended: to,
    };
  },
  rx = ({ size: s, initialResume: E, onExitToTitle: b }) => {
    const h = ux({ fieldWidth: s.width, fieldHeight: s.height }),
      [c, l] = w.useState(!1),
      o = w.useCallback(() => l(!0), []),
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
          J.jsx(hS, {
            score: h.score,
            bestScore: h.bestScore,
            nextItem: h.nextItem,
            onOpenSettings: o,
          }),
          J.jsx('main', {
            className: Rn.main,
            children: J.jsxs('div', {
              className: Rn.field_wrapper,
              style: { width: `${s.width}px`, height: `${s.height}px` },
              children: [
                J.jsx($p, {
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
                J.jsx(ov, { effect: h.isGravityFlipped ? 'gravityFlip' : null }),
                J.jsx(cv, { active: h.isMagnetSelecting, onCancel: h.cancelMagnetSelecting }),
                J.jsx(sv, { seconds: h.status === 'playing' ? h.gameOverCountdown : null }),
                h.status === 'playing'
                  ? J.jsx('div', {
                      className: Rn.skill_button_wrapper,
                      children: J.jsx(mv, {
                        gauge: h.skillGauge,
                        segmentMax: h.skillSegmentMax,
                        segmentCount: h.skillSegmentCount,
                        canOpen: h.canOpenSkillMenu,
                        onClick: h.openSkillMenu,
                      }),
                    })
                  : null,
                h.status === 'gameover'
                  ? J.jsx(r1, {
                      score: h.score,
                      bestScore: h.bestScore,
                      isNewRecord: h.isNewRecord,
                      onRestart: h.restart,
                    })
                  : null,
              ],
            }),
          }),
          J.jsx(vv, {
            open: h.isSkillMenuOpen,
            onSelect: h.selectSkill,
            onClose: h.closeSkillMenu,
            canUse: h.canUseSkill,
            magnetUsesLeft: h.magnetUsesLeft,
            magnetMaxUses: h.magnetMaxUses,
          }),
          J.jsx(vo, {
            open: c,
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
  sx = ({ initialResume: s, onExitToTitle: E }) => {
    const b = w.useRef(null),
      [h, c] = w.useState(null);
    return (
      w.useLayoutEffect(() => {
        const l = b.current;
        if (!l) return;
        const o = l.getBoundingClientRect();
        c({ width: Math.floor(o.width), height: Math.floor(o.height) });
      }, []),
      h === null
        ? J.jsxs('div', {
            className: Rn.layout,
            children: [
              J.jsx('div', { className: Rn.top_bar_placeholder, 'aria-hidden': 'true' }),
              J.jsx('main', { ref: b, className: Rn.main }),
            ],
          })
        : J.jsx('div', {
            className: Rn.layout,
            children: J.jsx(rx, { size: h, initialResume: s, onExitToTitle: E }),
          })
    );
  },
  cx = '_banner_17jhg_1',
  ox = '_banner_info_17jhg_23',
  fx = '_message_17jhg_37',
  dx = '_button_17jhg_41',
  Vl = { banner: cx, banner_info: ox, message: fx, button: dx },
  mx = ({ banner: s, onApply: E }) =>
    s === null
      ? null
      : s.kind === 'has-update'
        ? J.jsxs('div', {
            className: Vl.banner,
            role: 'status',
            'aria-live': 'polite',
            children: [
              J.jsx('span', { className: Vl.message, children: '新しいバージョンがあります' }),
              J.jsx('button', {
                type: 'button',
                className: Vl.button,
                onClick: E,
                children: '更新',
              }),
            ],
          })
        : J.jsx('div', {
            className: `${Vl.banner} ${Vl.banner_info}`,
            role: 'status',
            'aria-live': 'polite',
            children: J.jsx('span', {
              className: Vl.message,
              children: '現在のバージョンは最新です',
            }),
          }),
  hx = '_backdrop_1weqi_1',
  vx = '_dialog_1weqi_12',
  gx = '_title_1weqi_22',
  yx = '_body_1weqi_30',
  px = '_actions_1weqi_36',
  Sx = '_button_1weqi_42',
  xx = '_yes_1weqi_57',
  bx = '_no_1weqi_63',
  ea = { backdrop: hx, dialog: vx, title: gx, body: yx, actions: px, button: Sx, yes: xx, no: bx },
  Dv = w.memo(({ open: s, onYes: E, onNo: b }) =>
    s
      ? J.jsx('div', {
          className: ea.backdrop,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '中断データの再開確認',
          children: J.jsxs('div', {
            className: ea.dialog,
            children: [
              J.jsx('h2', { className: ea.title, children: '中断データが見つかりました' }),
              J.jsx('p', { className: ea.body, children: '中断したところから再開しますか？' }),
              J.jsxs('div', {
                className: ea.actions,
                children: [
                  J.jsx('button', {
                    type: 'button',
                    className: `${ea.button} ${ea.yes}`,
                    onClick: E,
                    children: 'はい',
                  }),
                  J.jsx('button', {
                    type: 'button',
                    className: `${ea.button} ${ea.no}`,
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
Dv.displayName = 'ResumeDialog';
const Ex = '_screen_4fsd3_1',
  Cx = '_settings_4fsd3_10',
  Tx = '_hero_4fsd3_35',
  Mx = '_emojis_4fsd3_43',
  Rx = '_title_4fsd3_51',
  _x = '_lead_4fsd3_61',
  Ax = '_info_4fsd3_68',
  Ox = '_best_4fsd3_76',
  Dx = '_suspended_4fsd3_86',
  wx = '_suspended_badge_4fsd3_97',
  zx = '_suspended_score_4fsd3_104',
  Nx = '_info_label_4fsd3_110',
  Ux = '_info_value_4fsd3_117',
  Bx = '_actions_4fsd3_124',
  Lx = '_start_4fsd3_135',
  Hx = '_check_update_4fsd3_154',
  jx = '_version_4fsd3_176',
  pt = {
    screen: Ex,
    settings: Cx,
    hero: Tx,
    emojis: Mx,
    title: Rx,
    lead: _x,
    info: Ax,
    best: Ox,
    suspended: Dx,
    suspended_badge: wx,
    suspended_score: zx,
    info_label: Nx,
    info_value: Ux,
    actions: Bx,
    start: Lx,
    check_update: Hx,
    version: jx,
  },
  Gx = ({
    onStart: s,
    onCheckUpdate: E,
    isCheckingUpdate: b,
    bestScore: h,
    suspendedScore: c,
    onOpenSettings: l,
  }) => {
    const o = c !== null;
    return J.jsxs('div', {
      className: pt.screen,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'タイトル画面',
      children: [
        J.jsx('button', {
          type: 'button',
          className: pt.settings,
          onClick: l,
          'aria-label': '設定を開く',
          children: J.jsx('span', { 'aria-hidden': 'true', children: '⚙' }),
        }),
        J.jsxs('div', {
          className: pt.hero,
          children: [
            J.jsx('div', { className: pt.emojis, 'aria-hidden': 'true', children: '💖🍓🐱' }),
            J.jsx('h1', { className: pt.title, children: 'にゃんハートいちごパズル' }),
            J.jsxs('p', {
              className: pt.lead,
              children: [
                '同じアイテム同士をくっつけて',
                J.jsx('br', {}),
                'にゃんハートいちごをめざそう！',
              ],
            }),
          ],
        }),
        J.jsxs('div', {
          className: pt.info,
          children: [
            J.jsxs('div', {
              className: pt.best,
              'aria-label': `ベストスコア ${h}`,
              children: [
                J.jsx('span', { className: pt.info_label, children: 'BEST' }),
                J.jsx('span', { className: pt.info_value, children: h }),
              ],
            }),
            o
              ? J.jsxs('div', {
                  className: pt.suspended,
                  'aria-label': `中断データあり (スコア ${c})`,
                  children: [
                    J.jsx('span', { className: pt.suspended_badge, children: '中断データあり' }),
                    J.jsxs('span', {
                      className: pt.suspended_score,
                      children: [
                        J.jsx('span', { className: pt.info_label, children: 'SCORE' }),
                        J.jsx('span', { className: pt.info_value, children: c }),
                      ],
                    }),
                  ],
                })
              : null,
          ],
        }),
        J.jsxs('div', {
          className: pt.actions,
          children: [
            J.jsx('button', {
              type: 'button',
              className: pt.start,
              onClick: s,
              children: o ? '続きから始める' : 'スタート',
            }),
            J.jsx('button', {
              type: 'button',
              className: pt.check_update,
              onClick: E,
              disabled: b,
              children: b ? '確認中…' : '更新確認',
            }),
          ],
        }),
        J.jsxs('p', { className: pt.version, children: ['v', '1.0.38'] }),
      ],
    });
  },
  Yx = 'modulepreload',
  Vx = function (s) {
    return '/ochimono-game/' + s;
  },
  jh = {},
  qx = function (E, b, h) {
    let c = Promise.resolve();
    if (b && b.length > 0) {
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
        b.map((g) => {
          if (((g = Vx(g)), g in jh)) return;
          jh[g] = !0;
          const m = g.endsWith('.css'),
            v = m ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${g}"]${v}`)) return;
          const y = document.createElement('link');
          if (
            ((y.rel = m ? 'stylesheet' : Yx),
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
    function l(o) {
      const d = new Event('vite:preloadError', { cancelable: !0 });
      if (((d.payload = o), window.dispatchEvent(d), !d.defaultPrevented)) throw o;
    }
    return c.then((o) => {
      for (const d of o || []) d.status === 'rejected' && l(d.reason);
      return E().catch(l);
    });
  };
function Xx(s = {}) {
  const {
    immediate: E = !1,
    onNeedRefresh: b,
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
        ((d = await qx(async () => {
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
          l ? l('/ochimono-game/sw.js', y) : c == null || c(y);
        })
        .catch((y) => {
          o == null || o(y);
        });
    }
  }
  return ((f = v()), m);
}
function Qx(s = {}) {
  const {
      immediate: E = !0,
      onNeedRefresh: b,
      onOfflineReady: h,
      onRegistered: c,
      onRegisteredSW: l,
      onRegisterError: o,
    } = s,
    [d, f] = w.useState(!1),
    [g, m] = w.useState(!1),
    [v] = w.useState(() =>
      Xx({
        immediate: E,
        onOfflineReady() {
          (m(!0), h == null || h());
        },
        onNeedRefresh() {
          (f(!0), b == null || b());
        },
        onRegistered: c,
        onRegisteredSW: l,
        onRegisterError: o,
      })
    );
  return { needRefresh: [d, f], offlineReady: [g, m], updateServiceWorker: v };
}
const Zx = 2500,
  Kx = 1500,
  kx = () => {
    const s = w.useRef(null),
      {
        needRefresh: [E],
        updateServiceWorker: b,
      } = Qx({
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
                window.setTimeout(r, Kx);
              }));
          } catch {}
          (c(!1),
            f.current ||
              (o(!0),
              d.current !== null && window.clearTimeout(d.current),
              (d.current = window.setTimeout(() => {
                (o(!1), (d.current = null));
              }, Zx))));
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
  Jx = ({ onStart: s, onResume: E }) => {
    const [b] = w.useState(() => Ev()),
      [h, c] = w.useState(() => eo()),
      [l, o] = w.useState(() => Mv()),
      [d, f] = w.useState(() => Cv()),
      g = w.useCallback((_) => {
        (Ic(_), o(_));
      }, []),
      m = w.useCallback(() => {
        f((_) => {
          const H = !_;
          return (Tv(H), H);
        });
      }, []),
      [v, y] = w.useState(!1),
      r = w.useCallback(() => y(!0), []),
      S = w.useCallback(() => y(!1), []),
      [p, C] = w.useState(null),
      R = w.useCallback(() => {
        const _ = eo();
        _ ? C(_) : s();
      }, [s]),
      z = w.useCallback(() => {
        if (!p) return;
        const _ = p;
        (C(null), to(), c(null), E(_));
      }, [p, E]),
      L = w.useCallback(() => {
        (to(), C(null), c(null), s());
      }, [s]),
      { banner: G, checkForUpdate: T, isChecking: O, applyUpdate: D } = kx();
    return J.jsxs('div', {
      className: Rn.layout,
      children: [
        J.jsx('main', {
          className: Rn.main,
          children: J.jsx('div', {
            className: Rn.field_placeholder,
            children: J.jsx(Gx, {
              onStart: R,
              onCheckUpdate: T,
              isCheckingUpdate: O,
              bestScore: b,
              suspendedScore: (h == null ? void 0 : h.score) ?? null,
              onOpenSettings: r,
            }),
          }),
        }),
        J.jsx(mx, { banner: G, onApply: D }),
        J.jsx(vo, {
          open: v,
          onClose: S,
          themeId: l,
          onChangeTheme: g,
          isSoundOn: d,
          onToggleSound: m,
          canSuspend: !1,
          onSuspend: () => {},
        }),
        J.jsx(Dv, { open: p !== null, onYes: z, onNo: L }),
      ],
    });
  },
  Fx = () => {
    const [s, E] = w.useState({ kind: 'pre-start' }),
      b = w.useCallback(() => {
        E({ kind: 'in-game', resume: null });
      }, []),
      h = w.useCallback((l) => {
        E({ kind: 'in-game', resume: l });
      }, []),
      c = w.useCallback(() => {
        E({ kind: 'pre-start' });
      }, []);
    return s.kind === 'pre-start'
      ? J.jsx(Jx, { onStart: b, onResume: h })
      : J.jsx(sx, { initialResume: s.resume, onExitToTitle: c });
  },
  $x = () => J.jsx('div', { className: Dp.index, children: J.jsx(Fx, {}) }),
  Wx = () => J.jsx('div', { children: J.jsx('h1', { children: 'Not Found' }) });
function Ix() {
  return J.jsxs(Fy, {
    children: [
      J.jsx(Jc, { path: '/', element: J.jsx($x, {}) }),
      J.jsx(Jc, { path: '*', element: J.jsx(Wx, {}) }),
    ],
  });
}
const wv = document.getElementById('root');
if (!wv) throw new Error('Failed to find #root element');
W0.createRoot(wv).render(J.jsx(Sp, { basename: '/ochimono-game', children: J.jsx(Ix, {}) }));
