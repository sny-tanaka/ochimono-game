function Ng(s, S) {
  for (var b = 0; b < S.length; b++) {
    const y = S[b];
    if (typeof y != 'string' && !Array.isArray(y)) {
      for (const c in y)
        if (c !== 'default' && !(c in s)) {
          const a = Object.getOwnPropertyDescriptor(y, c);
          a && Object.defineProperty(s, c, a.get ? a : { enumerable: !0, get: () => y[c] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const S = document.createElement('link').relList;
  if (S && S.supports && S.supports('modulepreload')) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) y(c);
  new MutationObserver((c) => {
    for (const a of c)
      if (a.type === 'childList')
        for (const f of a.addedNodes) f.tagName === 'LINK' && f.rel === 'modulepreload' && y(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function b(c) {
    const a = {};
    return (
      c.integrity && (a.integrity = c.integrity),
      c.referrerPolicy && (a.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === 'use-credentials'
        ? (a.credentials = 'include')
        : c.crossOrigin === 'anonymous'
          ? (a.credentials = 'omit')
          : (a.credentials = 'same-origin'),
      a
    );
  }
  function y(c) {
    if (c.ep) return;
    c.ep = !0;
    const a = b(c);
    fetch(c.href, a);
  }
})();
var nh =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function Bh(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, 'default') ? s.default : s;
}
var _c = { exports: {} },
  Oi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lh;
function Bg() {
  if (lh) return Oi;
  lh = 1;
  var s = Symbol.for('react.transitional.element'),
    S = Symbol.for('react.fragment');
  function b(y, c, a) {
    var f = null;
    if ((a !== void 0 && (f = '' + a), c.key !== void 0 && (f = '' + c.key), 'key' in c)) {
      a = {};
      for (var m in c) m !== 'key' && (a[m] = c[m]);
    } else a = c;
    return ((c = a.ref), { $$typeof: s, type: y, key: f, ref: c !== void 0 ? c : null, props: a });
  }
  return ((Oi.Fragment = S), (Oi.jsx = b), (Oi.jsxs = b), Oi);
}
var ah;
function Ug() {
  return (ah || ((ah = 1), (_c.exports = Bg())), _c.exports);
}
var I = Ug(),
  Oc = { exports: {} },
  Di = {},
  Dc = { exports: {} },
  wc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ih;
function Hg() {
  return (
    ih ||
      ((ih = 1),
      (function (s) {
        function S(A, N) {
          var q = A.length;
          A.push(N);
          e: for (; 0 < q; ) {
            var $ = (q - 1) >>> 1,
              ae = A[$];
            if (0 < c(ae, N)) ((A[$] = N), (A[q] = ae), (q = $));
            else break e;
          }
        }
        function b(A) {
          return A.length === 0 ? null : A[0];
        }
        function y(A) {
          if (A.length === 0) return null;
          var N = A[0],
            q = A.pop();
          if (q !== N) {
            A[0] = q;
            e: for (var $ = 0, ae = A.length, z = ae >>> 1; $ < z; ) {
              var Z = 2 * ($ + 1) - 1,
                P = A[Z],
                ue = Z + 1,
                se = A[ue];
              if (0 > c(P, q))
                ue < ae && 0 > c(se, P)
                  ? ((A[$] = se), (A[ue] = q), ($ = ue))
                  : ((A[$] = P), (A[Z] = q), ($ = Z));
              else if (ue < ae && 0 > c(se, q)) ((A[$] = se), (A[ue] = q), ($ = ue));
              else break e;
            }
          }
          return N;
        }
        function c(A, N) {
          var q = A.sortIndex - N.sortIndex;
          return q !== 0 ? q : A.id - N.id;
        }
        if (
          ((s.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var a = performance;
          s.unstable_now = function () {
            return a.now();
          };
        } else {
          var f = Date,
            m = f.now();
          s.unstable_now = function () {
            return f.now() - m;
          };
        }
        var o = [],
          v = [],
          d = 1,
          h = null,
          g = 3,
          r = !1,
          x = !1,
          p = !1,
          C = !1,
          R = typeof setTimeout == 'function' ? setTimeout : null,
          w = typeof clearTimeout == 'function' ? clearTimeout : null,
          U = typeof setImmediate < 'u' ? setImmediate : null;
        function G(A) {
          for (var N = b(v); N !== null; ) {
            if (N.callback === null) y(v);
            else if (N.startTime <= A) (y(v), (N.sortIndex = N.expirationTime), S(o, N));
            else break;
            N = b(v);
          }
        }
        function M(A) {
          if (((p = !1), G(A), !x))
            if (b(o) !== null) ((x = !0), O || ((O = !0), V()));
            else {
              var N = b(v);
              N !== null && le(M, N.startTime - A);
            }
        }
        var O = !1,
          D = -1,
          _ = 5,
          L = -1;
        function B() {
          return C ? !0 : !(s.unstable_now() - L < _);
        }
        function Y() {
          if (((C = !1), O)) {
            var A = s.unstable_now();
            L = A;
            var N = !0;
            try {
              e: {
                ((x = !1), p && ((p = !1), w(D), (D = -1)), (r = !0));
                var q = g;
                try {
                  t: {
                    for (G(A), h = b(o); h !== null && !(h.expirationTime > A && B()); ) {
                      var $ = h.callback;
                      if (typeof $ == 'function') {
                        ((h.callback = null), (g = h.priorityLevel));
                        var ae = $(h.expirationTime <= A);
                        if (((A = s.unstable_now()), typeof ae == 'function')) {
                          ((h.callback = ae), G(A), (N = !0));
                          break t;
                        }
                        (h === b(o) && y(o), G(A));
                      } else y(o);
                      h = b(o);
                    }
                    if (h !== null) N = !0;
                    else {
                      var z = b(v);
                      (z !== null && le(M, z.startTime - A), (N = !1));
                    }
                  }
                  break e;
                } finally {
                  ((h = null), (g = q), (r = !1));
                }
                N = void 0;
              }
            } finally {
              N ? V() : (O = !1);
            }
          }
        }
        var V;
        if (typeof U == 'function')
          V = function () {
            U(Y);
          };
        else if (typeof MessageChannel < 'u') {
          var F = new MessageChannel(),
            ie = F.port2;
          ((F.port1.onmessage = Y),
            (V = function () {
              ie.postMessage(null);
            }));
        } else
          V = function () {
            R(Y, 0);
          };
        function le(A, N) {
          D = R(function () {
            A(s.unstable_now());
          }, N);
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
            return g;
          }),
          (s.unstable_next = function (A) {
            switch (g) {
              case 1:
              case 2:
              case 3:
                var N = 3;
                break;
              default:
                N = g;
            }
            var q = g;
            g = N;
            try {
              return A();
            } finally {
              g = q;
            }
          }),
          (s.unstable_requestPaint = function () {
            C = !0;
          }),
          (s.unstable_runWithPriority = function (A, N) {
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
            var q = g;
            g = A;
            try {
              return N();
            } finally {
              g = q;
            }
          }),
          (s.unstable_scheduleCallback = function (A, N, q) {
            var $ = s.unstable_now();
            switch (
              (typeof q == 'object' && q !== null
                ? ((q = q.delay), (q = typeof q == 'number' && 0 < q ? $ + q : $))
                : (q = $),
              A)
            ) {
              case 1:
                var ae = -1;
                break;
              case 2:
                ae = 250;
                break;
              case 5:
                ae = 1073741823;
                break;
              case 4:
                ae = 1e4;
                break;
              default:
                ae = 5e3;
            }
            return (
              (ae = q + ae),
              (A = {
                id: d++,
                callback: N,
                priorityLevel: A,
                startTime: q,
                expirationTime: ae,
                sortIndex: -1,
              }),
              q > $
                ? ((A.sortIndex = q),
                  S(v, A),
                  b(o) === null && A === b(v) && (p ? (w(D), (D = -1)) : (p = !0), le(M, q - $)))
                : ((A.sortIndex = ae), S(o, A), x || r || ((x = !0), O || ((O = !0), V()))),
              A
            );
          }),
          (s.unstable_shouldYield = B),
          (s.unstable_wrapCallback = function (A) {
            var N = g;
            return function () {
              var q = g;
              g = N;
              try {
                return A.apply(this, arguments);
              } finally {
                g = q;
              }
            };
          }));
      })(wc)),
    wc
  );
}
var uh;
function Lg() {
  return (uh || ((uh = 1), (Dc.exports = Hg())), Dc.exports);
}
var zc = { exports: {} },
  be = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rh;
function jg() {
  if (rh) return be;
  rh = 1;
  var s = Symbol.for('react.transitional.element'),
    S = Symbol.for('react.portal'),
    b = Symbol.for('react.fragment'),
    y = Symbol.for('react.strict_mode'),
    c = Symbol.for('react.profiler'),
    a = Symbol.for('react.consumer'),
    f = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    o = Symbol.for('react.suspense'),
    v = Symbol.for('react.memo'),
    d = Symbol.for('react.lazy'),
    h = Symbol.for('react.activity'),
    g = Symbol.iterator;
  function r(z) {
    return z === null || typeof z != 'object'
      ? null
      : ((z = (g && z[g]) || z['@@iterator']), typeof z == 'function' ? z : null);
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
    C = {};
  function R(z, Z, P) {
    ((this.props = z), (this.context = Z), (this.refs = C), (this.updater = P || x));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (z, Z) {
      if (typeof z != 'object' && typeof z != 'function' && z != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, z, Z, 'setState');
    }),
    (R.prototype.forceUpdate = function (z) {
      this.updater.enqueueForceUpdate(this, z, 'forceUpdate');
    }));
  function w() {}
  w.prototype = R.prototype;
  function U(z, Z, P) {
    ((this.props = z), (this.context = Z), (this.refs = C), (this.updater = P || x));
  }
  var G = (U.prototype = new w());
  ((G.constructor = U), p(G, R.prototype), (G.isPureReactComponent = !0));
  var M = Array.isArray;
  function O() {}
  var D = { H: null, A: null, T: null, S: null },
    _ = Object.prototype.hasOwnProperty;
  function L(z, Z, P) {
    var ue = P.ref;
    return { $$typeof: s, type: z, key: Z, ref: ue !== void 0 ? ue : null, props: P };
  }
  function B(z, Z) {
    return L(z.type, Z, z.props);
  }
  function Y(z) {
    return typeof z == 'object' && z !== null && z.$$typeof === s;
  }
  function V(z) {
    var Z = { '=': '=0', ':': '=2' };
    return (
      '$' +
      z.replace(/[=:]/g, function (P) {
        return Z[P];
      })
    );
  }
  var F = /\/+/g;
  function ie(z, Z) {
    return typeof z == 'object' && z !== null && z.key != null ? V('' + z.key) : Z.toString(36);
  }
  function le(z) {
    switch (z.status) {
      case 'fulfilled':
        return z.value;
      case 'rejected':
        throw z.reason;
      default:
        switch (
          (typeof z.status == 'string'
            ? z.then(O, O)
            : ((z.status = 'pending'),
              z.then(
                function (Z) {
                  z.status === 'pending' && ((z.status = 'fulfilled'), (z.value = Z));
                },
                function (Z) {
                  z.status === 'pending' && ((z.status = 'rejected'), (z.reason = Z));
                }
              )),
          z.status)
        ) {
          case 'fulfilled':
            return z.value;
          case 'rejected':
            throw z.reason;
        }
    }
    throw z;
  }
  function A(z, Z, P, ue, se) {
    var ce = typeof z;
    (ce === 'undefined' || ce === 'boolean') && (z = null);
    var ve = !1;
    if (z === null) ve = !0;
    else
      switch (ce) {
        case 'bigint':
        case 'string':
        case 'number':
          ve = !0;
          break;
        case 'object':
          switch (z.$$typeof) {
            case s:
            case S:
              ve = !0;
              break;
            case d:
              return ((ve = z._init), A(ve(z._payload), Z, P, ue, se));
          }
      }
    if (ve)
      return (
        (se = se(z)),
        (ve = ue === '' ? '.' + ie(z, 0) : ue),
        M(se)
          ? ((P = ''),
            ve != null && (P = ve.replace(F, '$&/') + '/'),
            A(se, Z, P, '', function (Be) {
              return Be;
            }))
          : se != null &&
            (Y(se) &&
              (se = B(
                se,
                P +
                  (se.key == null || (z && z.key === se.key)
                    ? ''
                    : ('' + se.key).replace(F, '$&/') + '/') +
                  ve
              )),
            Z.push(se)),
        1
      );
    ve = 0;
    var Se = ue === '' ? '.' : ue + ':';
    if (M(z))
      for (var Ce = 0; Ce < z.length; Ce++)
        ((ue = z[Ce]), (ce = Se + ie(ue, Ce)), (ve += A(ue, Z, P, ce, se)));
    else if (((Ce = r(z)), typeof Ce == 'function'))
      for (z = Ce.call(z), Ce = 0; !(ue = z.next()).done; )
        ((ue = ue.value), (ce = Se + ie(ue, Ce++)), (ve += A(ue, Z, P, ce, se)));
    else if (ce === 'object') {
      if (typeof z.then == 'function') return A(le(z), Z, P, ue, se);
      throw (
        (Z = String(z)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (Z === '[object Object]' ? 'object with keys {' + Object.keys(z).join(', ') + '}' : Z) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return ve;
  }
  function N(z, Z, P) {
    if (z == null) return z;
    var ue = [],
      se = 0;
    return (
      A(z, ue, '', '', function (ce) {
        return Z.call(P, ce, se++);
      }),
      ue
    );
  }
  function q(z) {
    if (z._status === -1) {
      var Z = z._result;
      ((Z = Z()),
        Z.then(
          function (P) {
            (z._status === 0 || z._status === -1) && ((z._status = 1), (z._result = P));
          },
          function (P) {
            (z._status === 0 || z._status === -1) && ((z._status = 2), (z._result = P));
          }
        ),
        z._status === -1 && ((z._status = 0), (z._result = Z)));
    }
    if (z._status === 1) return z._result.default;
    throw z._result;
  }
  var $ =
      typeof reportError == 'function'
        ? reportError
        : function (z) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var Z = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof z == 'object' && z !== null && typeof z.message == 'string'
                    ? String(z.message)
                    : String(z),
                error: z,
              });
              if (!window.dispatchEvent(Z)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', z);
              return;
            }
            console.error(z);
          },
    ae = {
      map: N,
      forEach: function (z, Z, P) {
        N(
          z,
          function () {
            Z.apply(this, arguments);
          },
          P
        );
      },
      count: function (z) {
        var Z = 0;
        return (
          N(z, function () {
            Z++;
          }),
          Z
        );
      },
      toArray: function (z) {
        return (
          N(z, function (Z) {
            return Z;
          }) || []
        );
      },
      only: function (z) {
        if (!Y(z))
          throw Error('React.Children.only expected to receive a single React element child.');
        return z;
      },
    };
  return (
    (be.Activity = h),
    (be.Children = ae),
    (be.Component = R),
    (be.Fragment = b),
    (be.Profiler = c),
    (be.PureComponent = U),
    (be.StrictMode = y),
    (be.Suspense = o),
    (be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D),
    (be.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (z) {
        return D.H.useMemoCache(z);
      },
    }),
    (be.cache = function (z) {
      return function () {
        return z.apply(null, arguments);
      };
    }),
    (be.cacheSignal = function () {
      return null;
    }),
    (be.cloneElement = function (z, Z, P) {
      if (z == null) throw Error('The argument must be a React element, but you passed ' + z + '.');
      var ue = p({}, z.props),
        se = z.key;
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
        for (var ve = Array(ce), Se = 0; Se < ce; Se++) ve[Se] = arguments[Se + 2];
        ue.children = ve;
      }
      return L(z.type, se, ue);
    }),
    (be.createContext = function (z) {
      return (
        (z = {
          $$typeof: f,
          _currentValue: z,
          _currentValue2: z,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (z.Provider = z),
        (z.Consumer = { $$typeof: a, _context: z }),
        z
      );
    }),
    (be.createElement = function (z, Z, P) {
      var ue,
        se = {},
        ce = null;
      if (Z != null)
        for (ue in (Z.key !== void 0 && (ce = '' + Z.key), Z))
          _.call(Z, ue) && ue !== 'key' && ue !== '__self' && ue !== '__source' && (se[ue] = Z[ue]);
      var ve = arguments.length - 2;
      if (ve === 1) se.children = P;
      else if (1 < ve) {
        for (var Se = Array(ve), Ce = 0; Ce < ve; Ce++) Se[Ce] = arguments[Ce + 2];
        se.children = Se;
      }
      if (z && z.defaultProps)
        for (ue in ((ve = z.defaultProps), ve)) se[ue] === void 0 && (se[ue] = ve[ue]);
      return L(z, ce, se);
    }),
    (be.createRef = function () {
      return { current: null };
    }),
    (be.forwardRef = function (z) {
      return { $$typeof: m, render: z };
    }),
    (be.isValidElement = Y),
    (be.lazy = function (z) {
      return { $$typeof: d, _payload: { _status: -1, _result: z }, _init: q };
    }),
    (be.memo = function (z, Z) {
      return { $$typeof: v, type: z, compare: Z === void 0 ? null : Z };
    }),
    (be.startTransition = function (z) {
      var Z = D.T,
        P = {};
      D.T = P;
      try {
        var ue = z(),
          se = D.S;
        (se !== null && se(P, ue),
          typeof ue == 'object' && ue !== null && typeof ue.then == 'function' && ue.then(O, $));
      } catch (ce) {
        $(ce);
      } finally {
        (Z !== null && P.types !== null && (Z.types = P.types), (D.T = Z));
      }
    }),
    (be.unstable_useCacheRefresh = function () {
      return D.H.useCacheRefresh();
    }),
    (be.use = function (z) {
      return D.H.use(z);
    }),
    (be.useActionState = function (z, Z, P) {
      return D.H.useActionState(z, Z, P);
    }),
    (be.useCallback = function (z, Z) {
      return D.H.useCallback(z, Z);
    }),
    (be.useContext = function (z) {
      return D.H.useContext(z);
    }),
    (be.useDebugValue = function () {}),
    (be.useDeferredValue = function (z, Z) {
      return D.H.useDeferredValue(z, Z);
    }),
    (be.useEffect = function (z, Z) {
      return D.H.useEffect(z, Z);
    }),
    (be.useEffectEvent = function (z) {
      return D.H.useEffectEvent(z);
    }),
    (be.useId = function () {
      return D.H.useId();
    }),
    (be.useImperativeHandle = function (z, Z, P) {
      return D.H.useImperativeHandle(z, Z, P);
    }),
    (be.useInsertionEffect = function (z, Z) {
      return D.H.useInsertionEffect(z, Z);
    }),
    (be.useLayoutEffect = function (z, Z) {
      return D.H.useLayoutEffect(z, Z);
    }),
    (be.useMemo = function (z, Z) {
      return D.H.useMemo(z, Z);
    }),
    (be.useOptimistic = function (z, Z) {
      return D.H.useOptimistic(z, Z);
    }),
    (be.useReducer = function (z, Z, P) {
      return D.H.useReducer(z, Z, P);
    }),
    (be.useRef = function (z) {
      return D.H.useRef(z);
    }),
    (be.useState = function (z) {
      return D.H.useState(z);
    }),
    (be.useSyncExternalStore = function (z, Z, P) {
      return D.H.useSyncExternalStore(z, Z, P);
    }),
    (be.useTransition = function () {
      return D.H.useTransition();
    }),
    (be.version = '19.2.5'),
    be
  );
}
var sh;
function Ic() {
  return (sh || ((sh = 1), (zc.exports = jg())), zc.exports);
}
var Nc = { exports: {} },
  _t = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ch;
function Gg() {
  if (ch) return _t;
  ch = 1;
  var s = Ic();
  function S(o) {
    var v = 'https://react.dev/errors/' + o;
    if (1 < arguments.length) {
      v += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var d = 2; d < arguments.length; d++) v += '&args[]=' + encodeURIComponent(arguments[d]);
    }
    return (
      'Minified React error #' +
      o +
      '; visit ' +
      v +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function b() {}
  var y = {
      d: {
        f: b,
        r: function () {
          throw Error(S(522));
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
  function a(o, v, d) {
    var h = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: h == null ? null : '' + h,
      children: o,
      containerInfo: v,
      implementation: d,
    };
  }
  var f = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(o, v) {
    if (o === 'font') return '';
    if (typeof v == 'string') return v === 'use-credentials' ? v : '';
  }
  return (
    (_t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y),
    (_t.createPortal = function (o, v) {
      var d = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!v || (v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)) throw Error(S(299));
      return a(o, v, null, d);
    }),
    (_t.flushSync = function (o) {
      var v = f.T,
        d = y.p;
      try {
        if (((f.T = null), (y.p = 2), o)) return o();
      } finally {
        ((f.T = v), (y.p = d), y.d.f());
      }
    }),
    (_t.preconnect = function (o, v) {
      typeof o == 'string' &&
        (v
          ? ((v = v.crossOrigin),
            (v = typeof v == 'string' ? (v === 'use-credentials' ? v : '') : void 0))
          : (v = null),
        y.d.C(o, v));
    }),
    (_t.prefetchDNS = function (o) {
      typeof o == 'string' && y.d.D(o);
    }),
    (_t.preinit = function (o, v) {
      if (typeof o == 'string' && v && typeof v.as == 'string') {
        var d = v.as,
          h = m(d, v.crossOrigin),
          g = typeof v.integrity == 'string' ? v.integrity : void 0,
          r = typeof v.fetchPriority == 'string' ? v.fetchPriority : void 0;
        d === 'style'
          ? y.d.S(o, typeof v.precedence == 'string' ? v.precedence : void 0, {
              crossOrigin: h,
              integrity: g,
              fetchPriority: r,
            })
          : d === 'script' &&
            y.d.X(o, {
              crossOrigin: h,
              integrity: g,
              fetchPriority: r,
              nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
            });
      }
    }),
    (_t.preinitModule = function (o, v) {
      if (typeof o == 'string')
        if (typeof v == 'object' && v !== null) {
          if (v.as == null || v.as === 'script') {
            var d = m(v.as, v.crossOrigin);
            y.d.M(o, {
              crossOrigin: d,
              integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
              nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
            });
          }
        } else v == null && y.d.M(o);
    }),
    (_t.preload = function (o, v) {
      if (typeof o == 'string' && typeof v == 'object' && v !== null && typeof v.as == 'string') {
        var d = v.as,
          h = m(d, v.crossOrigin);
        y.d.L(o, d, {
          crossOrigin: h,
          integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
          nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
          type: typeof v.type == 'string' ? v.type : void 0,
          fetchPriority: typeof v.fetchPriority == 'string' ? v.fetchPriority : void 0,
          referrerPolicy: typeof v.referrerPolicy == 'string' ? v.referrerPolicy : void 0,
          imageSrcSet: typeof v.imageSrcSet == 'string' ? v.imageSrcSet : void 0,
          imageSizes: typeof v.imageSizes == 'string' ? v.imageSizes : void 0,
          media: typeof v.media == 'string' ? v.media : void 0,
        });
      }
    }),
    (_t.preloadModule = function (o, v) {
      if (typeof o == 'string')
        if (v) {
          var d = m(v.as, v.crossOrigin);
          y.d.m(o, {
            as: typeof v.as == 'string' && v.as !== 'script' ? v.as : void 0,
            crossOrigin: d,
            integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
          });
        } else y.d.m(o);
    }),
    (_t.requestFormReset = function (o) {
      y.d.r(o);
    }),
    (_t.unstable_batchedUpdates = function (o, v) {
      return o(v);
    }),
    (_t.useFormState = function (o, v, d) {
      return f.H.useFormState(o, v, d);
    }),
    (_t.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (_t.version = '19.2.5'),
    _t
  );
}
var oh;
function Yg() {
  if (oh) return Nc.exports;
  oh = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (S) {
        console.error(S);
      }
  }
  return (s(), (Nc.exports = Gg()), Nc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fh;
function Vg() {
  if (fh) return Di;
  fh = 1;
  var s = Lg(),
    S = Ic(),
    b = Yg();
  function y(e) {
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
  function a(e) {
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
  function f(e) {
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
  function o(e) {
    if (a(e) !== e) throw Error(y(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = a(e)), t === null)) throw Error(y(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var u = i.alternate;
      if (u === null) {
        if (((l = i.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (i.child === u.child) {
        for (u = i.child; u; ) {
          if (u === n) return (o(i), e);
          if (u === l) return (o(i), t);
          u = u.sibling;
        }
        throw Error(y(188));
      }
      if (n.return !== l.return) ((n = i), (l = u));
      else {
        for (var E = !1, T = i.child; T; ) {
          if (T === n) {
            ((E = !0), (n = i), (l = u));
            break;
          }
          if (T === l) {
            ((E = !0), (l = i), (n = u));
            break;
          }
          T = T.sibling;
        }
        if (!E) {
          for (T = u.child; T; ) {
            if (T === n) {
              ((E = !0), (n = u), (l = i));
              break;
            }
            if (T === l) {
              ((E = !0), (l = u), (n = i));
              break;
            }
            T = T.sibling;
          }
          if (!E) throw Error(y(189));
        }
      }
      if (n.alternate !== l) throw Error(y(190));
    }
    if (n.tag !== 3) throw Error(y(188));
    return n.stateNode.current === n ? e : t;
  }
  function d(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = d(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var h = Object.assign,
    g = Symbol.for('react.element'),
    r = Symbol.for('react.transitional.element'),
    x = Symbol.for('react.portal'),
    p = Symbol.for('react.fragment'),
    C = Symbol.for('react.strict_mode'),
    R = Symbol.for('react.profiler'),
    w = Symbol.for('react.consumer'),
    U = Symbol.for('react.context'),
    G = Symbol.for('react.forward_ref'),
    M = Symbol.for('react.suspense'),
    O = Symbol.for('react.suspense_list'),
    D = Symbol.for('react.memo'),
    _ = Symbol.for('react.lazy'),
    L = Symbol.for('react.activity'),
    B = Symbol.for('react.memo_cache_sentinel'),
    Y = Symbol.iterator;
  function V(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (Y && e[Y]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var F = Symbol.for('react.client.reference');
  function ie(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === F ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case p:
        return 'Fragment';
      case R:
        return 'Profiler';
      case C:
        return 'StrictMode';
      case M:
        return 'Suspense';
      case O:
        return 'SuspenseList';
      case L:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case x:
          return 'Portal';
        case U:
          return e.displayName || 'Context';
        case w:
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
  var le = Array.isArray,
    A = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    N = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = { pending: !1, data: null, method: null, action: null },
    $ = [],
    ae = -1;
  function z(e) {
    return { current: e };
  }
  function Z(e) {
    0 > ae || ((e.current = $[ae]), ($[ae] = null), ae--);
  }
  function P(e, t) {
    (ae++, ($[ae] = e.current), (e.current = t));
  }
  var ue = z(null),
    se = z(null),
    ce = z(null),
    ve = z(null);
  function Se(e, t) {
    switch ((P(ce, t), P(se, e), P(ue, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Tm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = Tm(t)), (e = Rm(t, e)));
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
  function Ce() {
    (Z(ue), Z(se), Z(ce));
  }
  function Be(e) {
    e.memoizedState !== null && P(ve, e);
    var t = ue.current,
      n = Rm(t, e.type);
    t !== n && (P(se, e), P(ue, n));
  }
  function Ye(e) {
    (se.current === e && (Z(ue), Z(se)), ve.current === e && (Z(ve), (Ti._currentValue = q)));
  }
  var Ve, st;
  function Fe(e) {
    if (Ve === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((Ve = (t && t[1]) || ''),
          (st =
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
      st
    );
  }
  var fe = !1;
  function Yt(e, t) {
    if (!e || fe) return '';
    fe = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
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
                  var J = W;
                }
                Reflect.construct(e, [], ne);
              } else {
                try {
                  ne.call();
                } catch (W) {
                  J = W;
                }
                e.call(ne.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (W) {
                J = W;
              }
              (ne = e()) && typeof ne.catch == 'function' && ne.catch(function () {});
            }
          } catch (W) {
            if (W && J && typeof W.stack == 'string') return [W.stack, J.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var i = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, 'name');
      i &&
        i.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var u = l.DetermineComponentFrameRoot(),
        E = u[0],
        T = u[1];
      if (E && T) {
        var j = E.split(`
`),
          k = T.split(`
`);
        for (i = l = 0; l < j.length && !j[l].includes('DetermineComponentFrameRoot'); ) l++;
        for (; i < k.length && !k[i].includes('DetermineComponentFrameRoot'); ) i++;
        if (l === j.length || i === k.length)
          for (l = j.length - 1, i = k.length - 1; 1 <= l && 0 <= i && j[l] !== k[i]; ) i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (j[l] !== k[i]) {
            if (l !== 1 || i !== 1)
              do
                if ((l--, i--, 0 > i || j[l] !== k[i])) {
                  var ee =
                    `
` + j[l].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      ee.includes('<anonymous>') &&
                      (ee = ee.replace('<anonymous>', e.displayName)),
                    ee
                  );
                }
              while (1 <= l && 0 <= i);
            break;
          }
      }
    } finally {
      ((fe = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : '') ? Fe(n) : '';
  }
  function pe(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Fe(e.type);
      case 16:
        return Fe('Lazy');
      case 13:
        return e.child !== t && t !== null ? Fe('Suspense Fallback') : Fe('Suspense');
      case 19:
        return Fe('SuspenseList');
      case 0:
      case 15:
        return Yt(e.type, !1);
      case 11:
        return Yt(e.type.render, !1);
      case 1:
        return Yt(e.type, !0);
      case 31:
        return Fe('Activity');
      default:
        return '';
    }
  }
  function Ae(e) {
    try {
      var t = '',
        n = null;
      do ((t += pe(e, n)), (n = e), (e = e.return));
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var Ot = Object.prototype.hasOwnProperty,
    Vt = s.unstable_scheduleCallback,
    bt = s.unstable_cancelCallback,
    $e = s.unstable_shouldYield,
    Fl = s.unstable_requestPaint,
    it = s.unstable_now,
    _l = s.unstable_getCurrentPriorityLevel,
    Mn = s.unstable_ImmediatePriority,
    qt = s.unstable_UserBlockingPriority,
    Wt = s.unstable_NormalPriority,
    Tn = s.unstable_LowPriority,
    yn = s.unstable_IdlePriority,
    qi = s.log,
    yr = s.unstable_setDisableYieldValue,
    Ol = null,
    Dt = null;
  function pn(e) {
    if ((typeof qi == 'function' && yr(e), Dt && typeof Dt.setStrictMode == 'function'))
      try {
        Dt.setStrictMode(Ol, e);
      } catch {}
  }
  var wt = Math.clz32 ? Math.clz32 : ja,
    el = Math.log,
    pr = Math.LN2;
  function ja(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((el(e) / pr) | 0)) | 0);
  }
  var $l = 256,
    Wl = 262144,
    Il = 4194304;
  function Rn(e) {
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
  function re(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var i = 0,
      u = e.suspendedLanes,
      E = e.pingedLanes;
    e = e.warmLanes;
    var T = l & 134217727;
    return (
      T !== 0
        ? ((l = T & ~u),
          l !== 0
            ? (i = Rn(l))
            : ((E &= T), E !== 0 ? (i = Rn(E)) : n || ((n = T & ~e), n !== 0 && (i = Rn(n)))))
        : ((T = l & ~u),
          T !== 0
            ? (i = Rn(T))
            : E !== 0
              ? (i = Rn(E))
              : n || ((n = l & ~e), n !== 0 && (i = Rn(n)))),
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
  function xe(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ze(e, t) {
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
  function Ee() {
    var e = Il;
    return ((Il <<= 1), (Il & 62914560) === 0 && (Il = 4194304), e);
  }
  function me(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ge(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Ue(e, t, n, l, i, u) {
    var E = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var T = e.entanglements,
      j = e.expirationTimes,
      k = e.hiddenUpdates;
    for (n = E & ~n; 0 < n; ) {
      var ee = 31 - wt(n),
        ne = 1 << ee;
      ((T[ee] = 0), (j[ee] = -1));
      var J = k[ee];
      if (J !== null)
        for (k[ee] = null, ee = 0; ee < J.length; ee++) {
          var W = J[ee];
          W !== null && (W.lane &= -536870913);
        }
      n &= ~ne;
    }
    (l !== 0 && He(e, l, 0),
      u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(E & ~t)));
  }
  function He(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - wt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 261930)));
  }
  function et(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - wt(n),
        i = 1 << l;
      ((i & t) | (e[l] & t) && (e[l] |= t), (n &= ~i));
    }
  }
  function Qe(e, t) {
    var n = t & -t;
    return ((n = (n & 42) !== 0 ? 1 : dt(n)), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n);
  }
  function dt(e) {
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
  function lt(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function At() {
    var e = N.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Fm(e.type));
  }
  function mt(e, t) {
    var n = N.p;
    try {
      return ((N.p = e), t());
    } finally {
      N.p = n;
    }
  }
  var pt = Math.random().toString(36).slice(2),
    We = '__reactFiber$' + pt,
    tt = '__reactProps$' + pt,
    zt = '__reactContainer$' + pt,
    tl = '__reactEvents$' + pt,
    xr = '__reactListeners$' + pt,
    Xi = '__reactHandles$' + pt,
    Ga = '__reactResources$' + pt,
    Ya = '__reactMarker$' + pt;
  function Sr(e) {
    (delete e[We], delete e[tt], delete e[tl], delete e[xr], delete e[Xi]);
  }
  function Pl(e) {
    var t = e[We];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[zt] || n[We])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Nm(e); e !== null; ) {
            if ((n = e[We])) return n;
            e = Nm(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function ea(e) {
    if ((e = e[We] || e[zt])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Va(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(y(33));
  }
  function ta(e) {
    var t = e[Ga];
    return (t || (t = e[Ga] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function St(e) {
    e[Ya] = !0;
  }
  var fo = new Set(),
    mo = {};
  function Dl(e, t) {
    (na(e, t), na(e + 'Capture', t));
  }
  function na(e, t) {
    for (mo[e] = t, e = 0; e < t.length; e++) fo.add(t[e]);
  }
  var Mv = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    ho = {},
    vo = {};
  function Tv(e) {
    return Ot.call(vo, e)
      ? !0
      : Ot.call(ho, e)
        ? !1
        : Mv.test(e)
          ? (vo[e] = !0)
          : ((ho[e] = !0), !1);
  }
  function Qi(e, t, n) {
    if (Tv(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var l = t.toLowerCase().slice(0, 5);
            if (l !== 'data-' && l !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + n);
      }
  }
  function Zi(e, t, n) {
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
  function An(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, '' + l);
    }
  }
  function It(e) {
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
  function go(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Rv(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof l < 'u' &&
      typeof l.get == 'function' &&
      typeof l.set == 'function'
    ) {
      var i = l.get,
        u = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (E) {
            ((n = '' + E), u.call(this, E));
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (E) {
            n = '' + E;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Er(e) {
    if (!e._valueTracker) {
      var t = go(e) ? 'checked' : 'value';
      e._valueTracker = Rv(e, t, '' + e[t]);
    }
  }
  function yo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = '';
    return (
      e && (l = go(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ki(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Av = /[\n"\\]/g;
  function Pt(e) {
    return e.replace(Av, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function br(e, t, n, l, i, u, E, T) {
    ((e.name = ''),
      E != null && typeof E != 'function' && typeof E != 'symbol' && typeof E != 'boolean'
        ? (e.type = E)
        : e.removeAttribute('type'),
      t != null
        ? E === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + It(t))
          : e.value !== '' + It(t) && (e.value = '' + It(t))
        : (E !== 'submit' && E !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Cr(e, E, It(t))
        : n != null
          ? Cr(e, E, It(n))
          : l != null && e.removeAttribute('value'),
      i == null && u != null && (e.defaultChecked = !!u),
      i != null && (e.checked = i && typeof i != 'function' && typeof i != 'symbol'),
      T != null && typeof T != 'function' && typeof T != 'symbol' && typeof T != 'boolean'
        ? (e.name = '' + It(T))
        : e.removeAttribute('name'));
  }
  function po(e, t, n, l, i, u, E, T) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || n != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) {
        Er(e);
        return;
      }
      ((n = n != null ? '' + It(n) : ''),
        (t = t != null ? '' + It(t) : n),
        T || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? i),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (e.checked = T ? e.checked : !!l),
      (e.defaultChecked = !!l),
      E != null &&
        typeof E != 'function' &&
        typeof E != 'symbol' &&
        typeof E != 'boolean' &&
        (e.name = E),
      Er(e));
  }
  function Cr(e, t, n) {
    (t === 'number' && Ki(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n);
  }
  function la(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        ((i = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && l && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + It(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          ((e[i].selected = !0), l && (e[i].defaultSelected = !0));
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function xo(e, t, n) {
    if (t != null && ((t = '' + It(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + It(n) : '';
  }
  function So(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(y(92));
        if (le(l)) {
          if (1 < l.length) throw Error(y(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ''), (t = n));
    }
    ((n = It(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== '' && l !== null && (e.value = l),
      Er(e));
  }
  function aa(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var _v = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function Eo(e, t, n) {
    var l = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? l
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : l
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || _v.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function bo(e, t, n) {
    if (t != null && typeof t != 'object') throw Error(y(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0
            ? e.setProperty(l, '')
            : l === 'float'
              ? (e.cssFloat = '')
              : (e[l] = ''));
      for (var i in t) ((l = t[i]), t.hasOwnProperty(i) && n[i] !== l && Eo(e, i, l));
    } else for (var u in t) t.hasOwnProperty(u) && Eo(e, u, t[u]);
  }
  function Mr(e) {
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
  var Ov = new Map([
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
    Dv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ki(e) {
    return Dv.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function _n() {}
  var Tr = null;
  function Rr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ia = null,
    ua = null;
  function Co(e) {
    var t = ea(e);
    if (t && (e = t.stateNode)) {
      var n = e[tt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (br(
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
              n = n.querySelectorAll('input[name="' + Pt('' + t) + '"][type="radio"]'), t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var i = l[tt] || null;
                if (!i) throw Error(y(90));
                br(
                  l,
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
            for (t = 0; t < n.length; t++) ((l = n[t]), l.form === e.form && yo(l));
          }
          break e;
        case 'textarea':
          xo(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && la(e, !!n.multiple, t, !1));
      }
    }
  }
  var Ar = !1;
  function Mo(e, t, n) {
    if (Ar) return e(t, n);
    Ar = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((Ar = !1),
        (ia !== null || ua !== null) &&
          (Bu(), ia && ((t = ia), (e = ua), (ua = ia = null), Co(t), e)))
      )
        for (t = 0; t < e.length; t++) Co(e[t]);
    }
  }
  function qa(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[tt] || null;
    if (l === null) return null;
    n = l[t];
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
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(y(231, t, typeof n));
    return n;
  }
  var On = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    _r = !1;
  if (On)
    try {
      var Xa = {};
      (Object.defineProperty(Xa, 'passive', {
        get: function () {
          _r = !0;
        },
      }),
        window.addEventListener('test', Xa, Xa),
        window.removeEventListener('test', Xa, Xa));
    } catch {
      _r = !1;
    }
  var nl = null,
    Or = null,
    Ji = null;
  function To() {
    if (Ji) return Ji;
    var e,
      t = Or,
      n = t.length,
      l,
      i = 'value' in nl ? nl.value : nl.textContent,
      u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var E = n - e;
    for (l = 1; l <= E && t[n - l] === i[u - l]; l++);
    return (Ji = i.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Fi(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function $i() {
    return !0;
  }
  function Ro() {
    return !1;
  }
  function Bt(e) {
    function t(n, l, i, u, E) {
      ((this._reactName = n),
        (this._targetInst = i),
        (this.type = l),
        (this.nativeEvent = u),
        (this.target = E),
        (this.currentTarget = null));
      for (var T in e) e.hasOwnProperty(T) && ((n = e[T]), (this[T] = n ? n(u) : u[T]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? $i
          : Ro),
        (this.isPropagationStopped = Ro),
        this
      );
    }
    return (
      h(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = $i));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = $i));
        },
        persist: function () {},
        isPersistent: $i,
      }),
      t
    );
  }
  var wl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Wi = Bt(wl),
    Qa = h({}, wl, { view: 0, detail: 0 }),
    wv = Bt(Qa),
    Dr,
    wr,
    Za,
    Ii = h({}, Qa, {
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
      getModifierState: Nr,
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
          : (e !== Za &&
              (Za && e.type === 'mousemove'
                ? ((Dr = e.screenX - Za.screenX), (wr = e.screenY - Za.screenY))
                : (wr = Dr = 0),
              (Za = e)),
            Dr);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : wr;
      },
    }),
    Ao = Bt(Ii),
    zv = h({}, Ii, { dataTransfer: 0 }),
    Nv = Bt(zv),
    Bv = h({}, Qa, { relatedTarget: 0 }),
    zr = Bt(Bv),
    Uv = h({}, wl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hv = Bt(Uv),
    Lv = h({}, wl, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    jv = Bt(Lv),
    Gv = h({}, wl, { data: 0 }),
    _o = Bt(Gv),
    Yv = {
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
    Vv = {
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
    qv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Xv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = qv[e]) ? !!t[e] : !1;
  }
  function Nr() {
    return Xv;
  }
  var Qv = h({}, Qa, {
      key: function (e) {
        if (e.key) {
          var t = Yv[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Fi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Vv[e.keyCode] || 'Unidentified'
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
      getModifierState: Nr,
      charCode: function (e) {
        return e.type === 'keypress' ? Fi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Fi(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Zv = Bt(Qv),
    Kv = h({}, Ii, {
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
    Oo = Bt(Kv),
    kv = h({}, Qa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Nr,
    }),
    Jv = Bt(kv),
    Fv = h({}, wl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $v = Bt(Fv),
    Wv = h({}, Ii, {
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
    Iv = Bt(Wv),
    Pv = h({}, wl, { newState: 0, oldState: 0 }),
    e0 = Bt(Pv),
    t0 = [9, 13, 27, 32],
    Br = On && 'CompositionEvent' in window,
    Ka = null;
  On && 'documentMode' in document && (Ka = document.documentMode);
  var n0 = On && 'TextEvent' in window && !Ka,
    Do = On && (!Br || (Ka && 8 < Ka && 11 >= Ka)),
    wo = ' ',
    zo = !1;
  function No(e, t) {
    switch (e) {
      case 'keyup':
        return t0.indexOf(t.keyCode) !== -1;
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
  function Bo(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var ra = !1;
  function l0(e, t) {
    switch (e) {
      case 'compositionend':
        return Bo(t);
      case 'keypress':
        return t.which !== 32 ? null : ((zo = !0), wo);
      case 'textInput':
        return ((e = t.data), e === wo && zo ? null : e);
      default:
        return null;
    }
  }
  function a0(e, t) {
    if (ra)
      return e === 'compositionend' || (!Br && No(e, t))
        ? ((e = To()), (Ji = Or = nl = null), (ra = !1), e)
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
        return Do && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var i0 = {
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
  function Uo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!i0[e.type] : t === 'textarea';
  }
  function Ho(e, t, n, l) {
    (ia ? (ua ? ua.push(l) : (ua = [l])) : (ia = l),
      (t = Vu(t, 'onChange')),
      0 < t.length &&
        ((n = new Wi('onChange', 'change', null, n, l)), e.push({ event: n, listeners: t })));
  }
  var ka = null,
    Ja = null;
  function u0(e) {
    xm(e, 0);
  }
  function Pi(e) {
    var t = Va(e);
    if (yo(t)) return e;
  }
  function Lo(e, t) {
    if (e === 'change') return t;
  }
  var jo = !1;
  if (On) {
    var Ur;
    if (On) {
      var Hr = 'oninput' in document;
      if (!Hr) {
        var Go = document.createElement('div');
        (Go.setAttribute('oninput', 'return;'), (Hr = typeof Go.oninput == 'function'));
      }
      Ur = Hr;
    } else Ur = !1;
    jo = Ur && (!document.documentMode || 9 < document.documentMode);
  }
  function Yo() {
    ka && (ka.detachEvent('onpropertychange', Vo), (Ja = ka = null));
  }
  function Vo(e) {
    if (e.propertyName === 'value' && Pi(Ja)) {
      var t = [];
      (Ho(t, Ja, e, Rr(e)), Mo(u0, t));
    }
  }
  function r0(e, t, n) {
    e === 'focusin'
      ? (Yo(), (ka = t), (Ja = n), ka.attachEvent('onpropertychange', Vo))
      : e === 'focusout' && Yo();
  }
  function s0(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Pi(Ja);
  }
  function c0(e, t) {
    if (e === 'click') return Pi(t);
  }
  function o0(e, t) {
    if (e === 'input' || e === 'change') return Pi(t);
  }
  function f0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Xt = typeof Object.is == 'function' ? Object.is : f0;
  function Fa(e, t) {
    if (Xt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var i = n[l];
      if (!Ot.call(t, i) || !Xt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function qo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Xo(e, t) {
    var n = qo(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t)) return { node: n, offset: t - e };
        e = l;
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
      n = qo(n);
    }
  }
  function Qo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Qo(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Zo(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Ki(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ki(e.document);
    }
    return t;
  }
  function Lr(e) {
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
  var d0 = On && 'documentMode' in document && 11 >= document.documentMode,
    sa = null,
    jr = null,
    $a = null,
    Gr = !1;
  function Ko(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Gr ||
      sa == null ||
      sa !== Ki(l) ||
      ((l = sa),
      'selectionStart' in l && Lr(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      ($a && Fa($a, l)) ||
        (($a = l),
        (l = Vu(jr, 'onSelect')),
        0 < l.length &&
          ((t = new Wi('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = sa))));
  }
  function zl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var ca = {
      animationend: zl('Animation', 'AnimationEnd'),
      animationiteration: zl('Animation', 'AnimationIteration'),
      animationstart: zl('Animation', 'AnimationStart'),
      transitionrun: zl('Transition', 'TransitionRun'),
      transitionstart: zl('Transition', 'TransitionStart'),
      transitioncancel: zl('Transition', 'TransitionCancel'),
      transitionend: zl('Transition', 'TransitionEnd'),
    },
    Yr = {},
    ko = {};
  On &&
    ((ko = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ca.animationend.animation,
      delete ca.animationiteration.animation,
      delete ca.animationstart.animation),
    'TransitionEvent' in window || delete ca.transitionend.transition);
  function Nl(e) {
    if (Yr[e]) return Yr[e];
    if (!ca[e]) return e;
    var t = ca[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ko) return (Yr[e] = t[n]);
    return e;
  }
  var Jo = Nl('animationend'),
    Fo = Nl('animationiteration'),
    $o = Nl('animationstart'),
    m0 = Nl('transitionrun'),
    h0 = Nl('transitionstart'),
    v0 = Nl('transitioncancel'),
    Wo = Nl('transitionend'),
    Io = new Map(),
    Vr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  Vr.push('scrollEnd');
  function mn(e, t) {
    (Io.set(e, t), Dl(t, [e]));
  }
  var eu =
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
    en = [],
    oa = 0,
    qr = 0;
  function tu() {
    for (var e = oa, t = (qr = oa = 0); t < e; ) {
      var n = en[t];
      en[t++] = null;
      var l = en[t];
      en[t++] = null;
      var i = en[t];
      en[t++] = null;
      var u = en[t];
      if (((en[t++] = null), l !== null && i !== null)) {
        var E = l.pending;
        (E === null ? (i.next = i) : ((i.next = E.next), (E.next = i)), (l.pending = i));
      }
      u !== 0 && Po(n, i, u);
    }
  }
  function nu(e, t, n, l) {
    ((en[oa++] = e),
      (en[oa++] = t),
      (en[oa++] = n),
      (en[oa++] = l),
      (qr |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function Xr(e, t, n, l) {
    return (nu(e, t, n, l), lu(e));
  }
  function Bl(e, t) {
    return (nu(e, null, null, t), lu(e));
  }
  function Po(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var i = !1, u = e.return; u !== null; )
      ((u.childLanes |= n),
        (l = u.alternate),
        l !== null && (l.childLanes |= n),
        u.tag === 22 && ((e = u.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3
      ? ((u = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - wt(n)),
          (e = u.hiddenUpdates),
          (l = e[i]),
          l === null ? (e[i] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        u)
      : null;
  }
  function lu(e) {
    if (50 < pi) throw ((pi = 0), (Is = null), Error(y(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var fa = {};
  function g0(e, t, n, l) {
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
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Qt(e, t, n, l) {
    return new g0(e, t, n, l);
  }
  function Qr(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Dn(e, t) {
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
  function ef(e, t) {
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
  function au(e, t, n, l, i, u) {
    var E = 0;
    if (((l = e), typeof e == 'function')) Qr(e) && (E = 1);
    else if (typeof e == 'string')
      E = Eg(e, n, ue.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case L:
          return ((e = Qt(31, n, t, i)), (e.elementType = L), (e.lanes = u), e);
        case p:
          return Ul(n.children, i, u, t);
        case C:
          ((E = 8), (i |= 24));
          break;
        case R:
          return ((e = Qt(12, n, t, i | 2)), (e.elementType = R), (e.lanes = u), e);
        case M:
          return ((e = Qt(13, n, t, i)), (e.elementType = M), (e.lanes = u), e);
        case O:
          return ((e = Qt(19, n, t, i)), (e.elementType = O), (e.lanes = u), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case U:
                E = 10;
                break e;
              case w:
                E = 9;
                break e;
              case G:
                E = 11;
                break e;
              case D:
                E = 14;
                break e;
              case _:
                ((E = 16), (l = null));
                break e;
            }
          ((E = 29), (n = Error(y(130, e === null ? 'null' : typeof e, ''))), (l = null));
      }
    return ((t = Qt(E, n, t, i)), (t.elementType = e), (t.type = l), (t.lanes = u), t);
  }
  function Ul(e, t, n, l) {
    return ((e = Qt(7, e, l, t)), (e.lanes = n), e);
  }
  function Zr(e, t, n) {
    return ((e = Qt(6, e, null, t)), (e.lanes = n), e);
  }
  function tf(e) {
    var t = Qt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Kr(e, t, n) {
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
  var nf = new WeakMap();
  function tn(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = nf.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: Ae(t) }), nf.set(e, t), t);
    }
    return { value: e, source: t, stack: Ae(t) };
  }
  var da = [],
    ma = 0,
    iu = null,
    Wa = 0,
    nn = [],
    ln = 0,
    ll = null,
    xn = 1,
    Sn = '';
  function wn(e, t) {
    ((da[ma++] = Wa), (da[ma++] = iu), (iu = e), (Wa = t));
  }
  function lf(e, t, n) {
    ((nn[ln++] = xn), (nn[ln++] = Sn), (nn[ln++] = ll), (ll = e));
    var l = xn;
    e = Sn;
    var i = 32 - wt(l) - 1;
    ((l &= ~(1 << i)), (n += 1));
    var u = 32 - wt(t) + i;
    if (30 < u) {
      var E = i - (i % 5);
      ((u = (l & ((1 << E) - 1)).toString(32)),
        (l >>= E),
        (i -= E),
        (xn = (1 << (32 - wt(t) + i)) | (n << i) | l),
        (Sn = u + e));
    } else ((xn = (1 << u) | (n << i) | l), (Sn = e));
  }
  function kr(e) {
    e.return !== null && (wn(e, 1), lf(e, 1, 0));
  }
  function Jr(e) {
    for (; e === iu; ) ((iu = da[--ma]), (da[ma] = null), (Wa = da[--ma]), (da[ma] = null));
    for (; e === ll; )
      ((ll = nn[--ln]),
        (nn[ln] = null),
        (Sn = nn[--ln]),
        (nn[ln] = null),
        (xn = nn[--ln]),
        (nn[ln] = null));
  }
  function af(e, t) {
    ((nn[ln++] = xn), (nn[ln++] = Sn), (nn[ln++] = ll), (xn = t.id), (Sn = t.overflow), (ll = e));
  }
  var Ct = null,
    Ie = null,
    Ne = !1,
    al = null,
    an = !1,
    Fr = Error(y(519));
  function il(e) {
    var t = Error(
      y(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    );
    throw (Ia(tn(t, e)), Fr);
  }
  function uf(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[We] = e), (t[tt] = l), n)) {
      case 'dialog':
        (Oe('cancel', t), Oe('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Oe('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < Si.length; n++) Oe(Si[n], t);
        break;
      case 'source':
        Oe('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Oe('error', t), Oe('load', t));
        break;
      case 'details':
        Oe('toggle', t);
        break;
      case 'input':
        (Oe('invalid', t),
          po(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0));
        break;
      case 'select':
        Oe('invalid', t);
        break;
      case 'textarea':
        (Oe('invalid', t), So(t, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      l.suppressHydrationWarning === !0 ||
      Cm(t.textContent, n)
        ? (l.popover != null && (Oe('beforetoggle', t), Oe('toggle', t)),
          l.onScroll != null && Oe('scroll', t),
          l.onScrollEnd != null && Oe('scrollend', t),
          l.onClick != null && (t.onclick = _n),
          (t = !0))
        : (t = !1),
      t || il(e, !0));
  }
  function rf(e) {
    for (Ct = e.return; Ct; )
      switch (Ct.tag) {
        case 5:
        case 31:
        case 13:
          an = !1;
          return;
        case 27:
        case 3:
          an = !0;
          return;
        default:
          Ct = Ct.return;
      }
  }
  function ha(e) {
    if (e !== Ct) return !1;
    if (!Ne) return (rf(e), (Ne = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type), (n = !(n !== 'form' && n !== 'button') || mc(e.type, e.memoizedProps))),
        (n = !n)),
      n && Ie && il(e),
      rf(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(y(317));
      Ie = zm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(y(317));
      Ie = zm(e);
    } else
      t === 27
        ? ((t = Ie), xl(e.type) ? ((e = pc), (pc = null), (Ie = e)) : (Ie = t))
        : (Ie = Ct ? rn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Hl() {
    ((Ie = Ct = null), (Ne = !1));
  }
  function $r() {
    var e = al;
    return (e !== null && (jt === null ? (jt = e) : jt.push.apply(jt, e), (al = null)), e);
  }
  function Ia(e) {
    al === null ? (al = [e]) : al.push(e);
  }
  var Wr = z(null),
    Ll = null,
    zn = null;
  function ul(e, t, n) {
    (P(Wr, t._currentValue), (t._currentValue = n));
  }
  function Nn(e) {
    ((e._currentValue = Wr.current), Z(Wr));
  }
  function Ir(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Pr(e, t, n, l) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var u = i.dependencies;
      if (u !== null) {
        var E = i.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var T = u;
          u = i;
          for (var j = 0; j < t.length; j++)
            if (T.context === t[j]) {
              ((u.lanes |= n),
                (T = u.alternate),
                T !== null && (T.lanes |= n),
                Ir(u.return, n, e),
                l || (E = null));
              break e;
            }
          u = T.next;
        }
      } else if (i.tag === 18) {
        if (((E = i.return), E === null)) throw Error(y(341));
        ((E.lanes |= n), (u = E.alternate), u !== null && (u.lanes |= n), Ir(E, n, e), (E = null));
      } else E = i.child;
      if (E !== null) E.return = i;
      else
        for (E = i; E !== null; ) {
          if (E === e) {
            E = null;
            break;
          }
          if (((i = E.sibling), i !== null)) {
            ((i.return = E.return), (E = i));
            break;
          }
          E = E.return;
        }
      i = E;
    }
  }
  function va(e, t, n, l) {
    e = null;
    for (var i = t, u = !1; i !== null; ) {
      if (!u) {
        if ((i.flags & 524288) !== 0) u = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var E = i.alternate;
        if (E === null) throw Error(y(387));
        if (((E = E.memoizedProps), E !== null)) {
          var T = i.type;
          Xt(i.pendingProps.value, E.value) || (e !== null ? e.push(T) : (e = [T]));
        }
      } else if (i === ve.current) {
        if (((E = i.alternate), E === null)) throw Error(y(387));
        E.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(Ti) : (e = [Ti]));
      }
      i = i.return;
    }
    (e !== null && Pr(t, e, n, l), (t.flags |= 262144));
  }
  function uu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Xt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function jl(e) {
    ((Ll = e), (zn = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function Mt(e) {
    return sf(Ll, e);
  }
  function ru(e, t) {
    return (Ll === null && jl(e), sf(e, t));
  }
  function sf(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), zn === null)) {
      if (e === null) throw Error(y(308));
      ((zn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else zn = zn.next = t;
    return n;
  }
  var y0 =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    p0 = s.unstable_scheduleCallback,
    x0 = s.unstable_NormalPriority,
    ht = {
      $$typeof: U,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function es() {
    return { controller: new y0(), data: new Map(), refCount: 0 };
  }
  function Pa(e) {
    (e.refCount--,
      e.refCount === 0 &&
        p0(x0, function () {
          e.controller.abort();
        }));
  }
  var ei = null,
    ts = 0,
    ga = 0,
    ya = null;
  function S0(e, t) {
    if (ei === null) {
      var n = (ei = []);
      ((ts = 0),
        (ga = ac()),
        (ya = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (ts++, t.then(cf, cf), t);
  }
  function cf() {
    if (--ts === 0 && ei !== null) {
      ya !== null && (ya.status = 'fulfilled');
      var e = ei;
      ((ei = null), (ga = 0), (ya = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function E0(e, t) {
    var n = [],
      l = {
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
          ((l.status = 'fulfilled'), (l.value = t));
          for (var i = 0; i < n.length; i++) (0, n[i])(t);
        },
        function (i) {
          for (l.status = 'rejected', l.reason = i, i = 0; i < n.length; i++) (0, n[i])(void 0);
        }
      ),
      l
    );
  }
  var of = A.S;
  A.S = function (e, t) {
    ((kd = it()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && S0(e, t),
      of !== null && of(e, t));
  };
  var Gl = z(null);
  function ns() {
    var e = Gl.current;
    return e !== null ? e : Je.pooledCache;
  }
  function su(e, t) {
    t === null ? P(Gl, Gl.current) : P(Gl, t.pool);
  }
  function ff() {
    var e = ns();
    return e === null ? null : { parent: ht._currentValue, pool: e };
  }
  var pa = Error(y(460)),
    ls = Error(y(474)),
    cu = Error(y(542)),
    ou = { then: function () {} };
  function df(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function mf(e, t, n) {
    switch (
      ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(_n, _n), (t = n)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), vf(e), e);
      default:
        if (typeof t.status == 'string') t.then(_n, _n);
        else {
          if (((e = Je), e !== null && 100 < e.shellSuspendCounter)) throw Error(y(482));
          ((e = t),
            (e.status = 'pending'),
            e.then(
              function (l) {
                if (t.status === 'pending') {
                  var i = t;
                  ((i.status = 'fulfilled'), (i.value = l));
                }
              },
              function (l) {
                if (t.status === 'pending') {
                  var i = t;
                  ((i.status = 'rejected'), (i.reason = l));
                }
              }
            ));
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), vf(e), e);
        }
        throw ((Vl = t), pa);
    }
  }
  function Yl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((Vl = n), pa) : n;
    }
  }
  var Vl = null;
  function hf() {
    if (Vl === null) throw Error(y(459));
    var e = Vl;
    return ((Vl = null), e);
  }
  function vf(e) {
    if (e === pa || e === cu) throw Error(y(483));
  }
  var xa = null,
    ti = 0;
  function fu(e) {
    var t = ti;
    return ((ti += 1), xa === null && (xa = []), mf(xa, e, t));
  }
  function ni(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function du(e, t) {
    throw t.$$typeof === g
      ? Error(y(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          y(
            31,
            e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e
          )
        ));
  }
  function gf(e) {
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
    function l(Q) {
      for (var X = new Map(); Q !== null; )
        (Q.key !== null ? X.set(Q.key, Q) : X.set(Q.index, Q), (Q = Q.sibling));
      return X;
    }
    function i(Q, X) {
      return ((Q = Dn(Q, X)), (Q.index = 0), (Q.sibling = null), Q);
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
    function E(Q) {
      return (e && Q.alternate === null && (Q.flags |= 67108866), Q);
    }
    function T(Q, X, K, te) {
      return X === null || X.tag !== 6
        ? ((X = Zr(K, Q.mode, te)), (X.return = Q), X)
        : ((X = i(X, K)), (X.return = Q), X);
    }
    function j(Q, X, K, te) {
      var he = K.type;
      return he === p
        ? ee(Q, X, K.props.children, te, K.key)
        : X !== null &&
            (X.elementType === he ||
              (typeof he == 'object' && he !== null && he.$$typeof === _ && Yl(he) === X.type))
          ? ((X = i(X, K.props)), ni(X, K), (X.return = Q), X)
          : ((X = au(K.type, K.key, K.props, null, Q.mode, te)), ni(X, K), (X.return = Q), X);
    }
    function k(Q, X, K, te) {
      return X === null ||
        X.tag !== 4 ||
        X.stateNode.containerInfo !== K.containerInfo ||
        X.stateNode.implementation !== K.implementation
        ? ((X = Kr(K, Q.mode, te)), (X.return = Q), X)
        : ((X = i(X, K.children || [])), (X.return = Q), X);
    }
    function ee(Q, X, K, te, he) {
      return X === null || X.tag !== 7
        ? ((X = Ul(K, Q.mode, te, he)), (X.return = Q), X)
        : ((X = i(X, K)), (X.return = Q), X);
    }
    function ne(Q, X, K) {
      if ((typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint')
        return ((X = Zr('' + X, Q.mode, K)), (X.return = Q), X);
      if (typeof X == 'object' && X !== null) {
        switch (X.$$typeof) {
          case r:
            return ((K = au(X.type, X.key, X.props, null, Q.mode, K)), ni(K, X), (K.return = Q), K);
          case x:
            return ((X = Kr(X, Q.mode, K)), (X.return = Q), X);
          case _:
            return ((X = Yl(X)), ne(Q, X, K));
        }
        if (le(X) || V(X)) return ((X = Ul(X, Q.mode, K, null)), (X.return = Q), X);
        if (typeof X.then == 'function') return ne(Q, fu(X), K);
        if (X.$$typeof === U) return ne(Q, ru(Q, X), K);
        du(Q, X);
      }
      return null;
    }
    function J(Q, X, K, te) {
      var he = X !== null ? X.key : null;
      if ((typeof K == 'string' && K !== '') || typeof K == 'number' || typeof K == 'bigint')
        return he !== null ? null : T(Q, X, '' + K, te);
      if (typeof K == 'object' && K !== null) {
        switch (K.$$typeof) {
          case r:
            return K.key === he ? j(Q, X, K, te) : null;
          case x:
            return K.key === he ? k(Q, X, K, te) : null;
          case _:
            return ((K = Yl(K)), J(Q, X, K, te));
        }
        if (le(K) || V(K)) return he !== null ? null : ee(Q, X, K, te, null);
        if (typeof K.then == 'function') return J(Q, X, fu(K), te);
        if (K.$$typeof === U) return J(Q, X, ru(Q, K), te);
        du(Q, K);
      }
      return null;
    }
    function W(Q, X, K, te, he) {
      if ((typeof te == 'string' && te !== '') || typeof te == 'number' || typeof te == 'bigint')
        return ((Q = Q.get(K) || null), T(X, Q, '' + te, he));
      if (typeof te == 'object' && te !== null) {
        switch (te.$$typeof) {
          case r:
            return ((Q = Q.get(te.key === null ? K : te.key) || null), j(X, Q, te, he));
          case x:
            return ((Q = Q.get(te.key === null ? K : te.key) || null), k(X, Q, te, he));
          case _:
            return ((te = Yl(te)), W(Q, X, K, te, he));
        }
        if (le(te) || V(te)) return ((Q = Q.get(K) || null), ee(X, Q, te, he, null));
        if (typeof te.then == 'function') return W(Q, X, K, fu(te), he);
        if (te.$$typeof === U) return W(Q, X, K, ru(X, te), he);
        du(X, te);
      }
      return null;
    }
    function oe(Q, X, K, te) {
      for (
        var he = null, Le = null, de = X, Re = (X = 0), we = null;
        de !== null && Re < K.length;
        Re++
      ) {
        de.index > Re ? ((we = de), (de = null)) : (we = de.sibling);
        var je = J(Q, de, K[Re], te);
        if (je === null) {
          de === null && (de = we);
          break;
        }
        (e && de && je.alternate === null && t(Q, de),
          (X = u(je, X, Re)),
          Le === null ? (he = je) : (Le.sibling = je),
          (Le = je),
          (de = we));
      }
      if (Re === K.length) return (n(Q, de), Ne && wn(Q, Re), he);
      if (de === null) {
        for (; Re < K.length; Re++)
          ((de = ne(Q, K[Re], te)),
            de !== null &&
              ((X = u(de, X, Re)), Le === null ? (he = de) : (Le.sibling = de), (Le = de)));
        return (Ne && wn(Q, Re), he);
      }
      for (de = l(de); Re < K.length; Re++)
        ((we = W(de, Q, Re, K[Re], te)),
          we !== null &&
            (e && we.alternate !== null && de.delete(we.key === null ? Re : we.key),
            (X = u(we, X, Re)),
            Le === null ? (he = we) : (Le.sibling = we),
            (Le = we)));
      return (
        e &&
          de.forEach(function (Ml) {
            return t(Q, Ml);
          }),
        Ne && wn(Q, Re),
        he
      );
    }
    function ye(Q, X, K, te) {
      if (K == null) throw Error(y(151));
      for (
        var he = null, Le = null, de = X, Re = (X = 0), we = null, je = K.next();
        de !== null && !je.done;
        Re++, je = K.next()
      ) {
        de.index > Re ? ((we = de), (de = null)) : (we = de.sibling);
        var Ml = J(Q, de, je.value, te);
        if (Ml === null) {
          de === null && (de = we);
          break;
        }
        (e && de && Ml.alternate === null && t(Q, de),
          (X = u(Ml, X, Re)),
          Le === null ? (he = Ml) : (Le.sibling = Ml),
          (Le = Ml),
          (de = we));
      }
      if (je.done) return (n(Q, de), Ne && wn(Q, Re), he);
      if (de === null) {
        for (; !je.done; Re++, je = K.next())
          ((je = ne(Q, je.value, te)),
            je !== null &&
              ((X = u(je, X, Re)), Le === null ? (he = je) : (Le.sibling = je), (Le = je)));
        return (Ne && wn(Q, Re), he);
      }
      for (de = l(de); !je.done; Re++, je = K.next())
        ((je = W(de, Q, Re, je.value, te)),
          je !== null &&
            (e && je.alternate !== null && de.delete(je.key === null ? Re : je.key),
            (X = u(je, X, Re)),
            Le === null ? (he = je) : (Le.sibling = je),
            (Le = je)));
      return (
        e &&
          de.forEach(function (zg) {
            return t(Q, zg);
          }),
        Ne && wn(Q, Re),
        he
      );
    }
    function ke(Q, X, K, te) {
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
                    (typeof he == 'object' && he !== null && he.$$typeof === _ && Yl(he) === X.type)
                  ) {
                    (n(Q, X.sibling), (te = i(X, K.props)), ni(te, K), (te.return = Q), (Q = te));
                    break e;
                  }
                  n(Q, X);
                  break;
                } else t(Q, X);
                X = X.sibling;
              }
              K.type === p
                ? ((te = Ul(K.props.children, Q.mode, te, K.key)), (te.return = Q), (Q = te))
                : ((te = au(K.type, K.key, K.props, null, Q.mode, te)),
                  ni(te, K),
                  (te.return = Q),
                  (Q = te));
            }
            return E(Q);
          case x:
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
              ((te = Kr(K, Q.mode, te)), (te.return = Q), (Q = te));
            }
            return E(Q);
          case _:
            return ((K = Yl(K)), ke(Q, X, K, te));
        }
        if (le(K)) return oe(Q, X, K, te);
        if (V(K)) {
          if (((he = V(K)), typeof he != 'function')) throw Error(y(150));
          return ((K = he.call(K)), ye(Q, X, K, te));
        }
        if (typeof K.then == 'function') return ke(Q, X, fu(K), te);
        if (K.$$typeof === U) return ke(Q, X, ru(Q, K), te);
        du(Q, K);
      }
      return (typeof K == 'string' && K !== '') || typeof K == 'number' || typeof K == 'bigint'
        ? ((K = '' + K),
          X !== null && X.tag === 6
            ? (n(Q, X.sibling), (te = i(X, K)), (te.return = Q), (Q = te))
            : (n(Q, X), (te = Zr(K, Q.mode, te)), (te.return = Q), (Q = te)),
          E(Q))
        : n(Q, X);
    }
    return function (Q, X, K, te) {
      try {
        ti = 0;
        var he = ke(Q, X, K, te);
        return ((xa = null), he);
      } catch (de) {
        if (de === pa || de === cu) throw de;
        var Le = Qt(29, de, null, Q.mode);
        return ((Le.lanes = te), (Le.return = Q), Le);
      } finally {
      }
    };
  }
  var ql = gf(!0),
    yf = gf(!1),
    rl = !1;
  function as(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function is(e, t) {
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
  function sl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function cl(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ge & 2) !== 0)) {
      var i = l.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (l.pending = t),
        (t = lu(e)),
        Po(e, null, n),
        t
      );
    }
    return (nu(e, l, t, n), lu(e));
  }
  function li(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), et(e, n));
    }
  }
  function us(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var i = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var E = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          (u === null ? (i = u = E) : (u = u.next = E), (n = n.next));
        } while (n !== null);
        u === null ? (i = u = t) : (u = u.next = t);
      } else i = u = t;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var rs = !1;
  function ai() {
    if (rs) {
      var e = ya;
      if (e !== null) throw e;
    }
  }
  function ii(e, t, n, l) {
    rs = !1;
    var i = e.updateQueue;
    rl = !1;
    var u = i.firstBaseUpdate,
      E = i.lastBaseUpdate,
      T = i.shared.pending;
    if (T !== null) {
      i.shared.pending = null;
      var j = T,
        k = j.next;
      ((j.next = null), E === null ? (u = k) : (E.next = k), (E = j));
      var ee = e.alternate;
      ee !== null &&
        ((ee = ee.updateQueue),
        (T = ee.lastBaseUpdate),
        T !== E && (T === null ? (ee.firstBaseUpdate = k) : (T.next = k), (ee.lastBaseUpdate = j)));
    }
    if (u !== null) {
      var ne = i.baseState;
      ((E = 0), (ee = k = j = null), (T = u));
      do {
        var J = T.lane & -536870913,
          W = J !== T.lane;
        if (W ? (De & J) === J : (l & J) === J) {
          (J !== 0 && J === ga && (rs = !0),
            ee !== null &&
              (ee = ee.next =
                { lane: 0, tag: T.tag, payload: T.payload, callback: null, next: null }));
          e: {
            var oe = e,
              ye = T;
            J = t;
            var ke = n;
            switch (ye.tag) {
              case 1:
                if (((oe = ye.payload), typeof oe == 'function')) {
                  ne = oe.call(ke, ne, J);
                  break e;
                }
                ne = oe;
                break e;
              case 3:
                oe.flags = (oe.flags & -65537) | 128;
              case 0:
                if (
                  ((oe = ye.payload),
                  (J = typeof oe == 'function' ? oe.call(ke, ne, J) : oe),
                  J == null)
                )
                  break e;
                ne = h({}, ne, J);
                break e;
              case 2:
                rl = !0;
            }
          }
          ((J = T.callback),
            J !== null &&
              ((e.flags |= 64),
              W && (e.flags |= 8192),
              (W = i.callbacks),
              W === null ? (i.callbacks = [J]) : W.push(J)));
        } else
          ((W = { lane: J, tag: T.tag, payload: T.payload, callback: T.callback, next: null }),
            ee === null ? ((k = ee = W), (j = ne)) : (ee = ee.next = W),
            (E |= J));
        if (((T = T.next), T === null)) {
          if (((T = i.shared.pending), T === null)) break;
          ((W = T),
            (T = W.next),
            (W.next = null),
            (i.lastBaseUpdate = W),
            (i.shared.pending = null));
        }
      } while (!0);
      (ee === null && (j = ne),
        (i.baseState = j),
        (i.firstBaseUpdate = k),
        (i.lastBaseUpdate = ee),
        u === null && (i.shared.lanes = 0),
        (hl |= E),
        (e.lanes = E),
        (e.memoizedState = ne));
    }
  }
  function pf(e, t) {
    if (typeof e != 'function') throw Error(y(191, e));
    e.call(t);
  }
  function xf(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) pf(n[e], t);
  }
  var Sa = z(null),
    mu = z(0);
  function Sf(e, t) {
    ((e = qn), P(mu, e), P(Sa, t), (qn = e | t.baseLanes));
  }
  function ss() {
    (P(mu, qn), P(Sa, Sa.current));
  }
  function cs() {
    ((qn = mu.current), Z(Sa), Z(mu));
  }
  var Zt = z(null),
    un = null;
  function ol(e) {
    var t = e.alternate;
    (P(ct, ct.current & 1),
      P(Zt, e),
      un === null && (t === null || Sa.current !== null || t.memoizedState !== null) && (un = e));
  }
  function os(e) {
    (P(ct, ct.current), P(Zt, e), un === null && (un = e));
  }
  function Ef(e) {
    e.tag === 22 ? (P(ct, ct.current), P(Zt, e), un === null && (un = e)) : fl();
  }
  function fl() {
    (P(ct, ct.current), P(Zt, Zt.current));
  }
  function Kt(e) {
    (Z(Zt), un === e && (un = null), Z(ct));
  }
  var ct = z(0);
  function hu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || gc(n) || yc(n))) return t;
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
  var Bn = 0,
    Me = null,
    Ze = null,
    vt = null,
    vu = !1,
    Ea = !1,
    Xl = !1,
    gu = 0,
    ui = 0,
    ba = null,
    b0 = 0;
  function ut() {
    throw Error(y(321));
  }
  function fs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Xt(e[n], t[n])) return !1;
    return !0;
  }
  function ds(e, t, n, l, i, u) {
    return (
      (Bn = u),
      (Me = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (A.H = e === null || e.memoizedState === null ? ad : As),
      (Xl = !1),
      (u = n(l, i)),
      (Xl = !1),
      Ea && (u = Cf(t, n, l, i)),
      bf(e),
      u
    );
  }
  function bf(e) {
    A.H = ci;
    var t = Ze !== null && Ze.next !== null;
    if (((Bn = 0), (vt = Ze = Me = null), (vu = !1), (ui = 0), (ba = null), t)) throw Error(y(300));
    e === null || gt || ((e = e.dependencies), e !== null && uu(e) && (gt = !0));
  }
  function Cf(e, t, n, l) {
    Me = e;
    var i = 0;
    do {
      if ((Ea && (ba = null), (ui = 0), (Ea = !1), 25 <= i)) throw Error(y(301));
      if (((i += 1), (vt = Ze = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((A.H = id), (u = t(n, l)));
    } while (Ea);
    return u;
  }
  function C0() {
    var e = A.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? ri(t) : t),
      (e = e.useState()[0]),
      (Ze !== null ? Ze.memoizedState : null) !== e && (Me.flags |= 1024),
      t
    );
  }
  function ms() {
    var e = gu !== 0;
    return ((gu = 0), e);
  }
  function hs(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function vs(e) {
    if (vu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      vu = !1;
    }
    ((Bn = 0), (vt = Ze = Me = null), (Ea = !1), (ui = gu = 0), (ba = null));
  }
  function Nt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (vt === null ? (Me.memoizedState = vt = e) : (vt = vt.next = e), vt);
  }
  function ot() {
    if (Ze === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ze.next;
    var t = vt === null ? Me.memoizedState : vt.next;
    if (t !== null) ((vt = t), (Ze = e));
    else {
      if (e === null) throw Me.alternate === null ? Error(y(467)) : Error(y(310));
      ((Ze = e),
        (e = {
          memoizedState: Ze.memoizedState,
          baseState: Ze.baseState,
          baseQueue: Ze.baseQueue,
          queue: Ze.queue,
          next: null,
        }),
        vt === null ? (Me.memoizedState = vt = e) : (vt = vt.next = e));
    }
    return vt;
  }
  function yu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ri(e) {
    var t = ui;
    return (
      (ui += 1),
      ba === null && (ba = []),
      (e = mf(ba, e, t)),
      (t = Me),
      (vt === null ? t.memoizedState : vt.next) === null &&
        ((t = t.alternate), (A.H = t === null || t.memoizedState === null ? ad : As)),
      e
    );
  }
  function pu(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return ri(e);
      if (e.$$typeof === U) return Mt(e);
    }
    throw Error(y(438, String(e)));
  }
  function gs(e) {
    var t = null,
      n = Me.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = Me.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (i) {
                return i.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = yu()), (Me.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = B;
    return (t.index++, n);
  }
  function Un(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function xu(e) {
    var t = ot();
    return ys(t, Ze, e);
  }
  function ys(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(y(311));
    l.lastRenderedReducer = n;
    var i = e.baseQueue,
      u = l.pending;
    if (u !== null) {
      if (i !== null) {
        var E = i.next;
        ((i.next = u.next), (u.next = E));
      }
      ((t.baseQueue = i = u), (l.pending = null));
    }
    if (((u = e.baseState), i === null)) e.memoizedState = u;
    else {
      t = i.next;
      var T = (E = null),
        j = null,
        k = t,
        ee = !1;
      do {
        var ne = k.lane & -536870913;
        if (ne !== k.lane ? (De & ne) === ne : (Bn & ne) === ne) {
          var J = k.revertLane;
          if (J === 0)
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
              ne === ga && (ee = !0));
          else if ((Bn & J) === J) {
            ((k = k.next), J === ga && (ee = !0));
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
              j === null ? ((T = j = ne), (E = u)) : (j = j.next = ne),
              (Me.lanes |= J),
              (hl |= J));
          ((ne = k.action), Xl && n(u, ne), (u = k.hasEagerState ? k.eagerState : n(u, ne)));
        } else
          ((J = {
            lane: ne,
            revertLane: k.revertLane,
            gesture: k.gesture,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null,
          }),
            j === null ? ((T = j = J), (E = u)) : (j = j.next = J),
            (Me.lanes |= ne),
            (hl |= ne));
        k = k.next;
      } while (k !== null && k !== t);
      if (
        (j === null ? (E = u) : (j.next = T),
        !Xt(u, e.memoizedState) && ((gt = !0), ee && ((n = ya), n !== null)))
      )
        throw n;
      ((e.memoizedState = u), (e.baseState = E), (e.baseQueue = j), (l.lastRenderedState = u));
    }
    return (i === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function ps(e) {
    var t = ot(),
      n = t.queue;
    if (n === null) throw Error(y(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      i = n.pending,
      u = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var E = (i = i.next);
      do ((u = e(u, E.action)), (E = E.next));
      while (E !== i);
      (Xt(u, t.memoizedState) || (gt = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, l];
  }
  function Mf(e, t, n) {
    var l = Me,
      i = ot(),
      u = Ne;
    if (u) {
      if (n === void 0) throw Error(y(407));
      n = n();
    } else n = t();
    var E = !Xt((Ze || i).memoizedState, n);
    if (
      (E && ((i.memoizedState = n), (gt = !0)),
      (i = i.queue),
      Es(Af.bind(null, l, i, e), [e]),
      i.getSnapshot !== t || E || (vt !== null && vt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Ca(9, { destroy: void 0 }, Rf.bind(null, l, i, n, t), null),
        Je === null)
      )
        throw Error(y(349));
      u || (Bn & 127) !== 0 || Tf(l, t, n);
    }
    return n;
  }
  function Tf(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Me.updateQueue),
      t === null
        ? ((t = yu()), (Me.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Rf(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), _f(t) && Of(e));
  }
  function Af(e, t, n) {
    return n(function () {
      _f(t) && Of(e);
    });
  }
  function _f(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Xt(e, n);
    } catch {
      return !0;
    }
  }
  function Of(e) {
    var t = Bl(e, 2);
    t !== null && Gt(t, e, 2);
  }
  function xs(e) {
    var t = Nt();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), Xl)) {
        pn(!0);
        try {
          n();
        } finally {
          pn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Un,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Df(e, t, n, l) {
    return ((e.baseState = n), ys(e, Ze, typeof l == 'function' ? l : Un));
  }
  function M0(e, t, n, l, i) {
    if (bu(e)) throw Error(y(485));
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
        then: function (E) {
          u.listeners.push(E);
        },
      };
      (A.T !== null ? n(!0) : (u.isTransition = !1),
        l(u),
        (n = t.pending),
        n === null
          ? ((u.next = t.pending = u), wf(t, u))
          : ((u.next = n.next), (t.pending = n.next = u)));
    }
  }
  function wf(e, t) {
    var n = t.action,
      l = t.payload,
      i = e.state;
    if (t.isTransition) {
      var u = A.T,
        E = {};
      A.T = E;
      try {
        var T = n(i, l),
          j = A.S;
        (j !== null && j(E, T), zf(e, t, T));
      } catch (k) {
        Ss(e, t, k);
      } finally {
        (u !== null && E.types !== null && (u.types = E.types), (A.T = u));
      }
    } else
      try {
        ((u = n(i, l)), zf(e, t, u));
      } catch (k) {
        Ss(e, t, k);
      }
  }
  function zf(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (l) {
            Nf(e, t, l);
          },
          function (l) {
            return Ss(e, t, l);
          }
        )
      : Nf(e, t, n);
  }
  function Nf(e, t, n) {
    ((t.status = 'fulfilled'),
      (t.value = n),
      Bf(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), wf(e, n))));
  }
  function Ss(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = 'rejected'), (t.reason = n), Bf(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function Bf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Uf(e, t) {
    return t;
  }
  function Hf(e, t) {
    if (Ne) {
      var n = Je.formState;
      if (n !== null) {
        e: {
          var l = Me;
          if (Ne) {
            if (Ie) {
              t: {
                for (var i = Ie, u = an; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break t;
                  }
                  if (((i = rn(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                ((u = i.data), (i = u === 'F!' || u === 'F' ? i : null));
              }
              if (i) {
                ((Ie = rn(i.nextSibling)), (l = i.data === 'F!'));
                break e;
              }
            }
            il(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = Nt()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Uf,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = td.bind(null, Me, l)),
      (l.dispatch = n),
      (l = xs(!1)),
      (u = Rs.bind(null, Me, !1, l.queue)),
      (l = Nt()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = i),
      (n = M0.bind(null, Me, i, u, n)),
      (i.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function Lf(e) {
    var t = ot();
    return jf(t, Ze, e);
  }
  function jf(e, t, n) {
    if (
      ((t = ys(e, t, Uf)[0]),
      (e = xu(Un)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var l = ri(t);
      } catch (E) {
        throw E === pa ? cu : E;
      }
    else l = t;
    t = ot();
    var i = t.queue,
      u = i.dispatch;
    return (
      n !== t.memoizedState &&
        ((Me.flags |= 2048), Ca(9, { destroy: void 0 }, T0.bind(null, i, n), null)),
      [l, u, e]
    );
  }
  function T0(e, t) {
    e.action = t;
  }
  function Gf(e) {
    var t = ot(),
      n = Ze;
    if (n !== null) return jf(t, n, e);
    (ot(), (t = t.memoizedState), (n = ot()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = e), [t, l, !1]);
  }
  function Ca(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = Me.updateQueue),
      t === null && ((t = yu()), (Me.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Yf() {
    return ot().memoizedState;
  }
  function Su(e, t, n, l) {
    var i = Nt();
    ((Me.flags |= e),
      (i.memoizedState = Ca(1 | t, { destroy: void 0 }, n, l === void 0 ? null : l)));
  }
  function Eu(e, t, n, l) {
    var i = ot();
    l = l === void 0 ? null : l;
    var u = i.memoizedState.inst;
    Ze !== null && l !== null && fs(l, Ze.memoizedState.deps)
      ? (i.memoizedState = Ca(t, u, n, l))
      : ((Me.flags |= e), (i.memoizedState = Ca(1 | t, u, n, l)));
  }
  function Vf(e, t) {
    Su(8390656, 8, e, t);
  }
  function Es(e, t) {
    Eu(2048, 8, e, t);
  }
  function R0(e) {
    Me.flags |= 4;
    var t = Me.updateQueue;
    if (t === null) ((t = yu()), (Me.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function qf(e) {
    var t = ot().memoizedState;
    return (
      R0({ ref: t, nextImpl: e }),
      function () {
        if ((Ge & 2) !== 0) throw Error(y(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Xf(e, t) {
    return Eu(4, 2, e, t);
  }
  function Qf(e, t) {
    return Eu(4, 4, e, t);
  }
  function Zf(e, t) {
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
  function Kf(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), Eu(4, 4, Zf.bind(null, t, e), n));
  }
  function bs() {}
  function kf(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && fs(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function Jf(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && fs(t, l[1])) return l[0];
    if (((l = e()), Xl)) {
      pn(!0);
      try {
        e();
      } finally {
        pn(!1);
      }
    }
    return ((n.memoizedState = [l, t]), l);
  }
  function Cs(e, t, n) {
    return n === void 0 || ((Bn & 1073741824) !== 0 && (De & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Fd()), (Me.lanes |= e), (hl |= e), n);
  }
  function Ff(e, t, n, l) {
    return Xt(n, t)
      ? n
      : Sa.current !== null
        ? ((e = Cs(e, n, l)), Xt(e, t) || (gt = !0), e)
        : (Bn & 42) === 0 || ((Bn & 1073741824) !== 0 && (De & 261930) === 0)
          ? ((gt = !0), (e.memoizedState = n))
          : ((e = Fd()), (Me.lanes |= e), (hl |= e), t);
  }
  function $f(e, t, n, l, i) {
    var u = N.p;
    N.p = u !== 0 && 8 > u ? u : 8;
    var E = A.T,
      T = {};
    ((A.T = T), Rs(e, !1, t, n));
    try {
      var j = i(),
        k = A.S;
      if (
        (k !== null && k(T, j), j !== null && typeof j == 'object' && typeof j.then == 'function')
      ) {
        var ee = E0(j, l);
        si(e, t, ee, Ft(e));
      } else si(e, t, l, Ft(e));
    } catch (ne) {
      si(e, t, { then: function () {}, status: 'rejected', reason: ne }, Ft());
    } finally {
      ((N.p = u), E !== null && T.types !== null && (E.types = T.types), (A.T = E));
    }
  }
  function A0() {}
  function Ms(e, t, n, l) {
    if (e.tag !== 5) throw Error(y(476));
    var i = Wf(e).queue;
    $f(
      e,
      i,
      t,
      q,
      n === null
        ? A0
        : function () {
            return (If(e), n(l));
          }
    );
  }
  function Wf(e) {
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
        lastRenderedReducer: Un,
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
          lastRenderedReducer: Un,
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
  function If(e) {
    var t = Wf(e);
    (t.next === null && (t = e.alternate.memoizedState), si(e, t.next.queue, {}, Ft()));
  }
  function Ts() {
    return Mt(Ti);
  }
  function Pf() {
    return ot().memoizedState;
  }
  function ed() {
    return ot().memoizedState;
  }
  function _0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Ft();
          e = sl(n);
          var l = cl(t, e, n);
          (l !== null && (Gt(l, t, n), li(l, t, n)), (t = { cache: es() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function O0(e, t, n) {
    var l = Ft();
    ((n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      bu(e) ? nd(t, n) : ((n = Xr(e, t, n, l)), n !== null && (Gt(n, e, l), ld(n, t, l))));
  }
  function td(e, t, n) {
    var l = Ft();
    si(e, t, n, l);
  }
  function si(e, t, n, l) {
    var i = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (bu(e)) nd(t, i);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var E = t.lastRenderedState,
            T = u(E, n);
          if (((i.hasEagerState = !0), (i.eagerState = T), Xt(T, E)))
            return (nu(e, t, i, 0), Je === null && tu(), !1);
        } catch {
        } finally {
        }
      if (((n = Xr(e, t, i, l)), n !== null)) return (Gt(n, e, l), ld(n, t, l), !0);
    }
    return !1;
  }
  function Rs(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: ac(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      bu(e))
    ) {
      if (t) throw Error(y(479));
    } else ((t = Xr(e, n, l, 2)), t !== null && Gt(t, e, 2));
  }
  function bu(e) {
    var t = e.alternate;
    return e === Me || (t !== null && t === Me);
  }
  function nd(e, t) {
    Ea = vu = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function ld(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), et(e, n));
    }
  }
  var ci = {
    readContext: Mt,
    use: pu,
    useCallback: ut,
    useContext: ut,
    useEffect: ut,
    useImperativeHandle: ut,
    useLayoutEffect: ut,
    useInsertionEffect: ut,
    useMemo: ut,
    useReducer: ut,
    useRef: ut,
    useState: ut,
    useDebugValue: ut,
    useDeferredValue: ut,
    useTransition: ut,
    useSyncExternalStore: ut,
    useId: ut,
    useHostTransitionStatus: ut,
    useFormState: ut,
    useActionState: ut,
    useOptimistic: ut,
    useMemoCache: ut,
    useCacheRefresh: ut,
  };
  ci.useEffectEvent = ut;
  var ad = {
      readContext: Mt,
      use: pu,
      useCallback: function (e, t) {
        return ((Nt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Mt,
      useEffect: Vf,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null), Su(4194308, 4, Zf.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Su(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Su(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Nt();
        t = t === void 0 ? null : t;
        var l = e();
        if (Xl) {
          pn(!0);
          try {
            e();
          } finally {
            pn(!1);
          }
        }
        return ((n.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, n) {
        var l = Nt();
        if (n !== void 0) {
          var i = n(t);
          if (Xl) {
            pn(!0);
            try {
              n(t);
            } finally {
              pn(!1);
            }
          }
        } else i = t;
        return (
          (l.memoizedState = l.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (l.queue = e),
          (e = e.dispatch = O0.bind(null, Me, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Nt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = xs(e);
        var t = e.queue,
          n = td.bind(null, Me, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: bs,
      useDeferredValue: function (e, t) {
        var n = Nt();
        return Cs(n, e, t);
      },
      useTransition: function () {
        var e = xs(!1);
        return ((e = $f.bind(null, Me, e.queue, !0, !1)), (Nt().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, n) {
        var l = Me,
          i = Nt();
        if (Ne) {
          if (n === void 0) throw Error(y(407));
          n = n();
        } else {
          if (((n = t()), Je === null)) throw Error(y(349));
          (De & 127) !== 0 || Tf(l, t, n);
        }
        i.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (i.queue = u),
          Vf(Af.bind(null, l, u, e), [e]),
          (l.flags |= 2048),
          Ca(9, { destroy: void 0 }, Rf.bind(null, l, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = Nt(),
          t = Je.identifierPrefix;
        if (Ne) {
          var n = Sn,
            l = xn;
          ((n = (l & ~(1 << (32 - wt(l) - 1))).toString(32) + n),
            (t = '_' + t + 'R_' + n),
            (n = gu++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '_'));
        } else ((n = b0++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Ts,
      useFormState: Hf,
      useActionState: Hf,
      useOptimistic: function (e) {
        var t = Nt();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((t.queue = n), (t = Rs.bind(null, Me, !0, n)), (n.dispatch = t), [e, t]);
      },
      useMemoCache: gs,
      useCacheRefresh: function () {
        return (Nt().memoizedState = _0.bind(null, Me));
      },
      useEffectEvent: function (e) {
        var t = Nt(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((Ge & 2) !== 0) throw Error(y(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    As = {
      readContext: Mt,
      use: pu,
      useCallback: kf,
      useContext: Mt,
      useEffect: Es,
      useImperativeHandle: Kf,
      useInsertionEffect: Xf,
      useLayoutEffect: Qf,
      useMemo: Jf,
      useReducer: xu,
      useRef: Yf,
      useState: function () {
        return xu(Un);
      },
      useDebugValue: bs,
      useDeferredValue: function (e, t) {
        var n = ot();
        return Ff(n, Ze.memoizedState, e, t);
      },
      useTransition: function () {
        var e = xu(Un)[0],
          t = ot().memoizedState;
        return [typeof e == 'boolean' ? e : ri(e), t];
      },
      useSyncExternalStore: Mf,
      useId: Pf,
      useHostTransitionStatus: Ts,
      useFormState: Lf,
      useActionState: Lf,
      useOptimistic: function (e, t) {
        var n = ot();
        return Df(n, Ze, e, t);
      },
      useMemoCache: gs,
      useCacheRefresh: ed,
    };
  As.useEffectEvent = qf;
  var id = {
    readContext: Mt,
    use: pu,
    useCallback: kf,
    useContext: Mt,
    useEffect: Es,
    useImperativeHandle: Kf,
    useInsertionEffect: Xf,
    useLayoutEffect: Qf,
    useMemo: Jf,
    useReducer: ps,
    useRef: Yf,
    useState: function () {
      return ps(Un);
    },
    useDebugValue: bs,
    useDeferredValue: function (e, t) {
      var n = ot();
      return Ze === null ? Cs(n, e, t) : Ff(n, Ze.memoizedState, e, t);
    },
    useTransition: function () {
      var e = ps(Un)[0],
        t = ot().memoizedState;
      return [typeof e == 'boolean' ? e : ri(e), t];
    },
    useSyncExternalStore: Mf,
    useId: Pf,
    useHostTransitionStatus: Ts,
    useFormState: Gf,
    useActionState: Gf,
    useOptimistic: function (e, t) {
      var n = ot();
      return Ze !== null ? Df(n, Ze, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: gs,
    useCacheRefresh: ed,
  };
  id.useEffectEvent = qf;
  function _s(e, t, n, l) {
    ((t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : h({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Os = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = Ft(),
        i = sl(l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = cl(e, i, l)),
        t !== null && (Gt(t, e, l), li(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = Ft(),
        i = sl(l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = cl(e, i, l)),
        t !== null && (Gt(t, e, l), li(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ft(),
        l = sl(n);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = cl(e, l, n)),
        t !== null && (Gt(t, e, n), li(t, e, n)));
    },
  };
  function ud(e, t, n, l, i, u, E) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(l, u, E)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Fa(n, l) || !Fa(i, u)
          : !0
    );
  }
  function rd(e, t, n, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Os.enqueueReplaceState(t, t.state, null));
  }
  function Ql(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var l in t) l !== 'ref' && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = h({}, n));
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
    }
    return n;
  }
  function sd(e) {
    eu(e);
  }
  function cd(e) {
    console.error(e);
  }
  function od(e) {
    eu(e);
  }
  function Cu(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function fd(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Ds(e, t, n) {
    return (
      (n = sl(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Cu(e, t);
      }),
      n
    );
  }
  function dd(e) {
    return ((e = sl(e)), (e.tag = 3), e);
  }
  function md(e, t, n, l) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == 'function') {
      var u = l.value;
      ((e.payload = function () {
        return i(u);
      }),
        (e.callback = function () {
          fd(t, n, l);
        }));
    }
    var E = n.stateNode;
    E !== null &&
      typeof E.componentDidCatch == 'function' &&
      (e.callback = function () {
        (fd(t, n, l),
          typeof i != 'function' && (vl === null ? (vl = new Set([this])) : vl.add(this)));
        var T = l.stack;
        this.componentDidCatch(l.value, { componentStack: T !== null ? T : '' });
      });
  }
  function D0(e, t, n, l, i) {
    if (((n.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
      if (((t = n.alternate), t !== null && va(t, n, i, !0), (n = Zt.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              un === null ? Uu() : n.alternate === null && rt === 0 && (rt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = i),
              l === ou
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  tc(e, l, i)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === ou
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  tc(e, l, i)),
              !1
            );
        }
        throw Error(y(435, n.tag));
      }
      return (tc(e, l, i), Uu(), !1);
    }
    if (Ne)
      return (
        (t = Zt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            l !== Fr && ((e = Error(y(422), { cause: l })), Ia(tn(e, n))))
          : (l !== Fr && ((t = Error(y(423), { cause: l })), Ia(tn(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (l = tn(l, n)),
            (i = Ds(e.stateNode, l, i)),
            us(e, i),
            rt !== 4 && (rt = 2)),
        !1
      );
    var u = Error(y(520), { cause: l });
    if (((u = tn(u, n)), yi === null ? (yi = [u]) : yi.push(u), rt !== 4 && (rt = 2), t === null))
      return !0;
    ((l = tn(l, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = i & -i),
            (n.lanes |= e),
            (e = Ds(n.stateNode, l, e)),
            us(n, e),
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
                  (vl === null || !vl.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (i &= -i),
              (n.lanes |= i),
              (i = dd(i)),
              md(i, e, n, l),
              us(n, i),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ws = Error(y(461)),
    gt = !1;
  function Tt(e, t, n, l) {
    t.child = e === null ? yf(t, null, n, l) : ql(t, e.child, n, l);
  }
  function hd(e, t, n, l, i) {
    n = n.render;
    var u = t.ref;
    if ('ref' in l) {
      var E = {};
      for (var T in l) T !== 'ref' && (E[T] = l[T]);
    } else E = l;
    return (
      jl(t),
      (l = ds(e, t, n, E, u, i)),
      (T = ms()),
      e !== null && !gt
        ? (hs(e, t, i), Hn(e, t, i))
        : (Ne && T && kr(t), (t.flags |= 1), Tt(e, t, l, i), t.child)
    );
  }
  function vd(e, t, n, l, i) {
    if (e === null) {
      var u = n.type;
      return typeof u == 'function' && !Qr(u) && u.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = u), gd(e, t, u, l, i))
        : ((e = au(n.type, null, l, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !Gs(e, i))) {
      var E = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Fa), n(E, l) && e.ref === t.ref))
        return Hn(e, t, i);
    }
    return ((t.flags |= 1), (e = Dn(u, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function gd(e, t, n, l, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Fa(u, l) && e.ref === t.ref)
        if (((gt = !1), (t.pendingProps = l = u), Gs(e, i))) (e.flags & 131072) !== 0 && (gt = !0);
        else return ((t.lanes = e.lanes), Hn(e, t, i));
    }
    return zs(e, t, n, l, i);
  }
  function yd(e, t, n, l) {
    var i = l.children,
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
      l.mode === 'hidden')
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | n : n), e !== null)) {
          for (l = t.child = e.child, i = 0; l !== null; )
            ((i = i | l.lanes | l.childLanes), (l = l.sibling));
          l = i & ~u;
        } else ((l = 0), (t.child = null));
        return pd(e, t, u, n, l);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && su(t, u !== null ? u.cachePool : null),
          u !== null ? Sf(t, u) : ss(),
          Ef(t));
      else return ((l = t.lanes = 536870912), pd(e, t, u !== null ? u.baseLanes | n : n, n, l));
    } else
      u !== null
        ? (su(t, u.cachePool), Sf(t, u), fl(), (t.memoizedState = null))
        : (e !== null && su(t, null), ss(), fl());
    return (Tt(e, t, i, n), t.child);
  }
  function oi(e, t) {
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
  function pd(e, t, n, l, i) {
    var u = ns();
    return (
      (u = u === null ? null : { parent: ht._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && su(t, null),
      ss(),
      Ef(t),
      e !== null && va(e, t, l, !0),
      (t.childLanes = i),
      null
    );
  }
  function Mu(e, t) {
    return (
      (t = Ru({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function xd(e, t, n) {
    return (
      ql(t, e.child, null, n),
      (e = Mu(t, t.pendingProps)),
      (e.flags |= 2),
      Kt(t),
      (t.memoizedState = null),
      e
    );
  }
  function w0(e, t, n) {
    var l = t.pendingProps,
      i = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Ne) {
        if (l.mode === 'hidden') return ((e = Mu(t, l)), (t.lanes = 536870912), oi(null, e));
        if (
          (os(t),
          (e = Ie)
            ? ((e = wm(e, an)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: ll !== null ? { id: xn, overflow: Sn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = tf(e)),
                (n.return = t),
                (t.child = n),
                (Ct = t),
                (Ie = null)))
            : (e = null),
          e === null)
        )
          throw il(t);
        return ((t.lanes = 536870912), null);
      }
      return Mu(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var E = u.dehydrated;
      if ((os(t), i))
        if (t.flags & 256) ((t.flags &= -257), (t = xd(e, t, n)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(y(558));
      else if ((gt || va(e, t, n, !1), (i = (n & e.childLanes) !== 0), gt || i)) {
        if (((l = Je), l !== null && ((E = Qe(l, n)), E !== 0 && E !== u.retryLane)))
          throw ((u.retryLane = E), Bl(e, E), Gt(l, e, E), ws);
        (Uu(), (t = xd(e, t, n)));
      } else
        ((e = u.treeContext),
          (Ie = rn(E.nextSibling)),
          (Ct = t),
          (Ne = !0),
          (al = null),
          (an = !1),
          e !== null && af(t, e),
          (t = Mu(t, l)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Dn(e.child, { mode: l.mode, children: l.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Tu(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(y(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function zs(e, t, n, l, i) {
    return (
      jl(t),
      (n = ds(e, t, n, l, void 0, i)),
      (l = ms()),
      e !== null && !gt
        ? (hs(e, t, i), Hn(e, t, i))
        : (Ne && l && kr(t), (t.flags |= 1), Tt(e, t, n, i), t.child)
    );
  }
  function Sd(e, t, n, l, i, u) {
    return (
      jl(t),
      (t.updateQueue = null),
      (n = Cf(t, l, n, i)),
      bf(e),
      (l = ms()),
      e !== null && !gt
        ? (hs(e, t, u), Hn(e, t, u))
        : (Ne && l && kr(t), (t.flags |= 1), Tt(e, t, n, u), t.child)
    );
  }
  function Ed(e, t, n, l, i) {
    if ((jl(t), t.stateNode === null)) {
      var u = fa,
        E = n.contextType;
      (typeof E == 'object' && E !== null && (u = Mt(E)),
        (u = new n(l, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Os),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = l),
        (u.state = t.memoizedState),
        (u.refs = {}),
        as(t),
        (E = n.contextType),
        (u.context = typeof E == 'object' && E !== null ? Mt(E) : fa),
        (u.state = t.memoizedState),
        (E = n.getDerivedStateFromProps),
        typeof E == 'function' && (_s(t, n, E, l), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((E = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          E !== u.state && Os.enqueueReplaceState(u, u.state, null),
          ii(t, l, u, i),
          ai(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      u = t.stateNode;
      var T = t.memoizedProps,
        j = Ql(n, T);
      u.props = j;
      var k = u.context,
        ee = n.contextType;
      ((E = fa), typeof ee == 'object' && ee !== null && (E = Mt(ee)));
      var ne = n.getDerivedStateFromProps;
      ((ee = typeof ne == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (T = t.pendingProps !== T),
        ee ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((T || k !== E) && rd(t, u, l, E)),
        (rl = !1));
      var J = t.memoizedState;
      ((u.state = J),
        ii(t, l, u, i),
        ai(),
        (k = t.memoizedState),
        T || J !== k || rl
          ? (typeof ne == 'function' && (_s(t, n, ne, l), (k = t.memoizedState)),
            (j = rl || ud(t, n, j, l, J, k, E))
              ? (ee ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = k)),
            (u.props = l),
            (u.state = k),
            (u.context = E),
            (l = j))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (l = !1)));
    } else {
      ((u = t.stateNode),
        is(e, t),
        (E = t.memoizedProps),
        (ee = Ql(n, E)),
        (u.props = ee),
        (ne = t.pendingProps),
        (J = u.context),
        (k = n.contextType),
        (j = fa),
        typeof k == 'object' && k !== null && (j = Mt(k)),
        (T = n.getDerivedStateFromProps),
        (k = typeof T == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((E !== ne || J !== j) && rd(t, u, l, j)),
        (rl = !1),
        (J = t.memoizedState),
        (u.state = J),
        ii(t, l, u, i),
        ai());
      var W = t.memoizedState;
      E !== ne || J !== W || rl || (e !== null && e.dependencies !== null && uu(e.dependencies))
        ? (typeof T == 'function' && (_s(t, n, T, l), (W = t.memoizedState)),
          (ee =
            rl ||
            ud(t, n, ee, l, J, W, j) ||
            (e !== null && e.dependencies !== null && uu(e.dependencies)))
            ? (k ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(l, W, j),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(l, W, j)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (E === e.memoizedProps && J === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (E === e.memoizedProps && J === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = W)),
          (u.props = l),
          (u.state = W),
          (u.context = j),
          (l = ee))
        : (typeof u.componentDidUpdate != 'function' ||
            (E === e.memoizedProps && J === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (E === e.memoizedProps && J === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (u = l),
      Tu(e, t),
      (l = (t.flags & 128) !== 0),
      u || l
        ? ((u = t.stateNode),
          (n = l && typeof n.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = ql(t, e.child, null, i)), (t.child = ql(t, null, n, i)))
            : Tt(e, t, n, i),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Hn(e, t, i)),
      e
    );
  }
  function bd(e, t, n, l) {
    return (Hl(), (t.flags |= 256), Tt(e, t, n, l), t.child);
  }
  var Ns = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Bs(e) {
    return { baseLanes: e, cachePool: ff() };
  }
  function Us(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Jt), e);
  }
  function Cd(e, t, n) {
    var l = t.pendingProps,
      i = !1,
      u = (t.flags & 128) !== 0,
      E;
    if (
      ((E = u) || (E = e !== null && e.memoizedState === null ? !1 : (ct.current & 2) !== 0),
      E && ((i = !0), (t.flags &= -129)),
      (E = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ne) {
        if (
          (i ? ol(t) : fl(),
          (e = Ie)
            ? ((e = wm(e, an)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: ll !== null ? { id: xn, overflow: Sn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = tf(e)),
                (n.return = t),
                (t.child = n),
                (Ct = t),
                (Ie = null)))
            : (e = null),
          e === null)
        )
          throw il(t);
        return (yc(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var T = l.children;
      return (
        (l = l.fallback),
        i
          ? (fl(),
            (i = t.mode),
            (T = Ru({ mode: 'hidden', children: T }, i)),
            (l = Ul(l, i, n, null)),
            (T.return = t),
            (l.return = t),
            (T.sibling = l),
            (t.child = T),
            (l = t.child),
            (l.memoizedState = Bs(n)),
            (l.childLanes = Us(e, E, n)),
            (t.memoizedState = Ns),
            oi(null, l))
          : (ol(t), Hs(t, T))
      );
    }
    var j = e.memoizedState;
    if (j !== null && ((T = j.dehydrated), T !== null)) {
      if (u)
        t.flags & 256
          ? (ol(t), (t.flags &= -257), (t = Ls(e, t, n)))
          : t.memoizedState !== null
            ? (fl(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (fl(),
              (T = l.fallback),
              (i = t.mode),
              (l = Ru({ mode: 'visible', children: l.children }, i)),
              (T = Ul(T, i, n, null)),
              (T.flags |= 2),
              (l.return = t),
              (T.return = t),
              (l.sibling = T),
              (t.child = l),
              ql(t, e.child, null, n),
              (l = t.child),
              (l.memoizedState = Bs(n)),
              (l.childLanes = Us(e, E, n)),
              (t.memoizedState = Ns),
              (t = oi(null, l)));
      else if ((ol(t), yc(T))) {
        if (((E = T.nextSibling && T.nextSibling.dataset), E)) var k = E.dgst;
        ((E = k),
          (l = Error(y(419))),
          (l.stack = ''),
          (l.digest = E),
          Ia({ value: l, source: null, stack: null }),
          (t = Ls(e, t, n)));
      } else if ((gt || va(e, t, n, !1), (E = (n & e.childLanes) !== 0), gt || E)) {
        if (((E = Je), E !== null && ((l = Qe(E, n)), l !== 0 && l !== j.retryLane)))
          throw ((j.retryLane = l), Bl(e, l), Gt(E, e, l), ws);
        (gc(T) || Uu(), (t = Ls(e, t, n)));
      } else
        gc(T)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = j.treeContext),
            (Ie = rn(T.nextSibling)),
            (Ct = t),
            (Ne = !0),
            (al = null),
            (an = !1),
            e !== null && af(t, e),
            (t = Hs(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (fl(),
        (T = l.fallback),
        (i = t.mode),
        (j = e.child),
        (k = j.sibling),
        (l = Dn(j, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = j.subtreeFlags & 65011712),
        k !== null ? (T = Dn(k, T)) : ((T = Ul(T, i, n, null)), (T.flags |= 2)),
        (T.return = t),
        (l.return = t),
        (l.sibling = T),
        (t.child = l),
        oi(null, l),
        (l = t.child),
        (T = e.child.memoizedState),
        T === null
          ? (T = Bs(n))
          : ((i = T.cachePool),
            i !== null
              ? ((j = ht._currentValue), (i = i.parent !== j ? { parent: j, pool: j } : i))
              : (i = ff()),
            (T = { baseLanes: T.baseLanes | n, cachePool: i })),
        (l.memoizedState = T),
        (l.childLanes = Us(e, E, n)),
        (t.memoizedState = Ns),
        oi(e.child, l))
      : (ol(t),
        (n = e.child),
        (e = n.sibling),
        (n = Dn(n, { mode: 'visible', children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((E = t.deletions), E === null ? ((t.deletions = [e]), (t.flags |= 16)) : E.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Hs(e, t) {
    return ((t = Ru({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function Ru(e, t) {
    return ((e = Qt(22, e, null, t)), (e.lanes = 0), e);
  }
  function Ls(e, t, n) {
    return (
      ql(t, e.child, null, n),
      (e = Hs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Md(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), Ir(e.return, t, n));
  }
  function js(e, t, n, l, i, u) {
    var E = e.memoizedState;
    E === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: i,
          treeForkCount: u,
        })
      : ((E.isBackwards = t),
        (E.rendering = null),
        (E.renderingStartTime = 0),
        (E.last = l),
        (E.tail = n),
        (E.tailMode = i),
        (E.treeForkCount = u));
  }
  function Td(e, t, n) {
    var l = t.pendingProps,
      i = l.revealOrder,
      u = l.tail;
    l = l.children;
    var E = ct.current,
      T = (E & 2) !== 0;
    if (
      (T ? ((E = (E & 1) | 2), (t.flags |= 128)) : (E &= 1),
      P(ct, E),
      Tt(e, t, l, n),
      (l = Ne ? Wa : 0),
      !T && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Md(e, n, t);
        else if (e.tag === 19) Md(e, n, t);
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
          ((e = n.alternate), e !== null && hu(e) === null && (i = n), (n = n.sibling));
        ((n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          js(t, !1, i, n, u, l));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && hu(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        js(t, !0, n, null, u, l);
        break;
      case 'together':
        js(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Hn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (hl |= t.lanes), (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((va(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(y(153));
    if (t.child !== null) {
      for (e = t.child, n = Dn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = Dn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Gs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && uu(e)));
  }
  function z0(e, t, n) {
    switch (t.tag) {
      case 3:
        (Se(t, t.stateNode.containerInfo), ul(t, ht, e.memoizedState.cache), Hl());
        break;
      case 27:
      case 5:
        Be(t);
        break;
      case 4:
        Se(t, t.stateNode.containerInfo);
        break;
      case 10:
        ul(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), os(t), null);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (ol(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Cd(e, t, n)
              : (ol(t), (e = Hn(e, t, n)), e !== null ? e.sibling : null);
        ol(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (va(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          i)
        ) {
          if (l) return Td(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          P(ct, ct.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), yd(e, t, n, t.pendingProps));
      case 24:
        ul(t, ht, e.memoizedState.cache);
    }
    return Hn(e, t, n);
  }
  function Rd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) gt = !0;
      else {
        if (!Gs(e, n) && (t.flags & 128) === 0) return ((gt = !1), z0(e, t, n));
        gt = (e.flags & 131072) !== 0;
      }
    else ((gt = !1), Ne && (t.flags & 1048576) !== 0 && lf(t, Wa, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = Yl(t.elementType)), (t.type = e), typeof e == 'function'))
            Qr(e)
              ? ((l = Ql(e, l)), (t.tag = 1), (t = Ed(null, t, e, l, n)))
              : ((t.tag = 0), (t = zs(null, t, e, l, n)));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === G) {
                ((t.tag = 11), (t = hd(null, t, e, l, n)));
                break e;
              } else if (i === D) {
                ((t.tag = 14), (t = vd(null, t, e, l, n)));
                break e;
              }
            }
            throw ((t = ie(e) || e), Error(y(306, t, '')));
          }
        }
        return t;
      case 0:
        return zs(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((l = t.type), (i = Ql(l, t.pendingProps)), Ed(e, t, l, i, n));
      case 3:
        e: {
          if ((Se(t, t.stateNode.containerInfo), e === null)) throw Error(y(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          ((i = u.element), is(e, t), ii(t, l, null, n));
          var E = t.memoizedState;
          if (
            ((l = E.cache),
            ul(t, ht, l),
            l !== u.cache && Pr(t, [ht], n, !0),
            ai(),
            (l = E.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: l, isDehydrated: !1, cache: E.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = bd(e, t, l, n);
              break e;
            } else if (l !== i) {
              ((i = tn(Error(y(424)), t)), Ia(i), (t = bd(e, t, l, n)));
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
                Ie = rn(e.firstChild),
                  Ct = t,
                  Ne = !0,
                  al = null,
                  an = !0,
                  n = yf(t, null, l, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((Hl(), l === i)) {
              t = Hn(e, t, n);
              break e;
            }
            Tt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Tu(e, t),
          e === null
            ? (n = Lm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Ne ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = qu(ce.current).createElement(n)),
                (l[We] = t),
                (l[tt] = e),
                Rt(l, n, e),
                St(l),
                (t.stateNode = l))
            : (t.memoizedState = Lm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Be(t),
          e === null &&
            Ne &&
            ((l = t.stateNode = Bm(t.type, t.pendingProps, ce.current)),
            (Ct = t),
            (an = !0),
            (i = Ie),
            xl(t.type) ? ((pc = i), (Ie = rn(l.firstChild))) : (Ie = i)),
          Tt(e, t, t.pendingProps.children, n),
          Tu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ne &&
            ((i = l = Ie) &&
              ((l = sg(l, t.type, t.pendingProps, an)),
              l !== null
                ? ((t.stateNode = l), (Ct = t), (Ie = rn(l.firstChild)), (an = !1), (i = !0))
                : (i = !1)),
            i || il(t)),
          Be(t),
          (i = t.type),
          (u = t.pendingProps),
          (E = e !== null ? e.memoizedProps : null),
          (l = u.children),
          mc(i, u) ? (l = null) : E !== null && mc(i, E) && (t.flags |= 32),
          t.memoizedState !== null && ((i = ds(e, t, C0, null, null, n)), (Ti._currentValue = i)),
          Tu(e, t),
          Tt(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ne &&
            ((e = n = Ie) &&
              ((n = cg(n, t.pendingProps, an)),
              n !== null ? ((t.stateNode = n), (Ct = t), (Ie = null), (e = !0)) : (e = !1)),
            e || il(t)),
          null
        );
      case 13:
        return Cd(e, t, n);
      case 4:
        return (
          Se(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = ql(t, null, l, n)) : Tt(e, t, l, n),
          t.child
        );
      case 11:
        return hd(e, t, t.type, t.pendingProps, n);
      case 7:
        return (Tt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Tt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Tt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return ((l = t.pendingProps), ul(t, t.type, l.value), Tt(e, t, l.children, n), t.child);
      case 9:
        return (
          (i = t.type._context),
          (l = t.pendingProps.children),
          jl(t),
          (i = Mt(i)),
          (l = l(i)),
          (t.flags |= 1),
          Tt(e, t, l, n),
          t.child
        );
      case 14:
        return vd(e, t, t.type, t.pendingProps, n);
      case 15:
        return gd(e, t, t.type, t.pendingProps, n);
      case 19:
        return Td(e, t, n);
      case 31:
        return w0(e, t, n);
      case 22:
        return yd(e, t, n, t.pendingProps);
      case 24:
        return (
          jl(t),
          (l = Mt(ht)),
          e === null
            ? ((i = ns()),
              i === null &&
                ((i = Je),
                (u = es()),
                (i.pooledCache = u),
                u.refCount++,
                u !== null && (i.pooledCacheLanes |= n),
                (i = u)),
              (t.memoizedState = { parent: l, cache: i }),
              as(t),
              ul(t, ht, i))
            : ((e.lanes & n) !== 0 && (is(e, t), ii(t, null, null, n), ai()),
              (i = e.memoizedState),
              (u = t.memoizedState),
              i.parent !== l
                ? ((i = { parent: l, cache: l }),
                  (t.memoizedState = i),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i),
                  ul(t, ht, l))
                : ((l = u.cache), ul(t, ht, l), l !== i.cache && Pr(t, [ht], n, !0))),
          Tt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(y(156, t.tag));
  }
  function Ln(e) {
    e.flags |= 4;
  }
  function Ys(e, t, n, l, i) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (i & 335544128) === i))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Pd()) e.flags |= 8192;
        else throw ((Vl = ou), ls);
    } else e.flags &= -16777217;
  }
  function Ad(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !qm(t)))
      if (Pd()) e.flags |= 8192;
      else throw ((Vl = ou), ls);
  }
  function Au(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? Ee() : 536870912), (e.lanes |= t), (Aa |= t)));
  }
  function fi(e, t) {
    if (!Ne)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; ) (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var l = null; n !== null; ) (n.alternate !== null && (l = n), (n = n.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var i = e.child; i !== null; )
        ((n |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags & 65011712),
          (l |= i.flags & 65011712),
          (i.return = e),
          (i = i.sibling));
    else
      for (i = e.child; i !== null; )
        ((n |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags),
          (l |= i.flags),
          (i.return = e),
          (i = i.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = n), t);
  }
  function N0(e, t, n) {
    var l = t.pendingProps;
    switch ((Jr(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Pe(t), null);
      case 1:
        return (Pe(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Nn(ht),
          Ce(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (ha(t)
              ? Ln(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), $r())),
          Pe(t),
          null
        );
      case 26:
        var i = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (Ln(t), u !== null ? (Pe(t), Ad(t, u)) : (Pe(t), Ys(t, i, null, l, n)))
            : u
              ? u !== e.memoizedState
                ? (Ln(t), Pe(t), Ad(t, u))
                : (Pe(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== l && Ln(t), Pe(t), Ys(t, i, e, l, n)),
          null
        );
      case 27:
        if ((Ye(t), (n = ce.current), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Ln(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(y(166));
            return (Pe(t), null);
          }
          ((e = ue.current), ha(t) ? uf(t) : ((e = Bm(i, l, n)), (t.stateNode = e), Ln(t)));
        }
        return (Pe(t), null);
      case 5:
        if ((Ye(t), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Ln(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(y(166));
            return (Pe(t), null);
          }
          if (((u = ue.current), ha(t))) uf(t);
          else {
            var E = qu(ce.current);
            switch (u) {
              case 1:
                u = E.createElementNS('http://www.w3.org/2000/svg', i);
                break;
              case 2:
                u = E.createElementNS('http://www.w3.org/1998/Math/MathML', i);
                break;
              default:
                switch (i) {
                  case 'svg':
                    u = E.createElementNS('http://www.w3.org/2000/svg', i);
                    break;
                  case 'math':
                    u = E.createElementNS('http://www.w3.org/1998/Math/MathML', i);
                    break;
                  case 'script':
                    ((u = E.createElement('div')),
                      (u.innerHTML = '<script><\/script>'),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case 'select':
                    ((u =
                      typeof l.is == 'string'
                        ? E.createElement('select', { is: l.is })
                        : E.createElement('select')),
                      l.multiple ? (u.multiple = !0) : l.size && (u.size = l.size));
                    break;
                  default:
                    u =
                      typeof l.is == 'string'
                        ? E.createElement(i, { is: l.is })
                        : E.createElement(i);
                }
            }
            ((u[We] = t), (u[tt] = l));
            e: for (E = t.child; E !== null; ) {
              if (E.tag === 5 || E.tag === 6) u.appendChild(E.stateNode);
              else if (E.tag !== 4 && E.tag !== 27 && E.child !== null) {
                ((E.child.return = E), (E = E.child));
                continue;
              }
              if (E === t) break e;
              for (; E.sibling === null; ) {
                if (E.return === null || E.return === t) break e;
                E = E.return;
              }
              ((E.sibling.return = E.return), (E = E.sibling));
            }
            t.stateNode = u;
            e: switch ((Rt(u, i, l), i)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                l = !!l.autoFocus;
                break e;
              case 'img':
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Ln(t);
          }
        }
        return (Pe(t), Ys(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Ln(t);
        else {
          if (typeof l != 'string' && t.stateNode === null) throw Error(y(166));
          if (((e = ce.current), ha(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (l = null), (i = Ct), i !== null))
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            ((e[We] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Cm(e.nodeValue, n)
              )),
              e || il(t, !0));
          } else ((e = qu(e).createTextNode(l)), (e[We] = t), (t.stateNode = e));
        }
        return (Pe(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = ha(t)), n !== null)) {
            if (e === null) {
              if (!l) throw Error(y(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(y(557));
              e[We] = t;
            } else (Hl(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Pe(t), (e = !1));
          } else
            ((n = $r()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (Kt(t), t) : (Kt(t), null);
          if ((t.flags & 128) !== 0) throw Error(y(558));
        }
        return (Pe(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = ha(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(y(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(y(317));
              i[We] = t;
            } else (Hl(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Pe(t), (i = !1));
          } else
            ((i = $r()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i),
              (i = !0));
          if (!i) return t.flags & 256 ? (Kt(t), t) : (Kt(t), null);
        }
        return (
          Kt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = l !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((l = t.child),
                (i = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (i = l.alternate.memoizedState.cachePool.pool),
                (u = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (u = l.memoizedState.cachePool.pool),
                u !== i && (l.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              Au(t, t.updateQueue),
              Pe(t),
              null)
        );
      case 4:
        return (Ce(), e === null && sc(t.stateNode.containerInfo), Pe(t), null);
      case 10:
        return (Nn(t.type), Pe(t), null);
      case 19:
        if ((Z(ct), (l = t.memoizedState), l === null)) return (Pe(t), null);
        if (((i = (t.flags & 128) !== 0), (u = l.rendering), u === null))
          if (i) fi(l, !1);
          else {
            if (rt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = hu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      fi(l, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Au(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (ef(n, e), (n = n.sibling));
                  return (P(ct, (ct.current & 1) | 2), Ne && wn(t, l.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            l.tail !== null &&
              it() > zu &&
              ((t.flags |= 128), (i = !0), fi(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = hu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Au(t, e),
                fi(l, !0),
                l.tail === null && l.tailMode === 'hidden' && !u.alternate && !Ne)
              )
                return (Pe(t), null);
            } else
              2 * it() - l.renderingStartTime > zu &&
                n !== 536870912 &&
                ((t.flags |= 128), (i = !0), fi(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = l.last), e !== null ? (e.sibling = u) : (t.child = u), (l.last = u));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = it()),
            (e.sibling = null),
            (n = ct.current),
            P(ct, i ? (n & 1) | 2 : n & 1),
            Ne && wn(t, l.treeForkCount),
            e)
          : (Pe(t), null);
      case 22:
      case 23:
        return (
          Kt(t),
          cs(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Pe(t),
          (n = t.updateQueue),
          n !== null && Au(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && Z(Gl),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Nn(ht),
          Pe(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(y(156, t.tag));
  }
  function B0(e, t) {
    switch ((Jr(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          Nn(ht),
          Ce(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (Ye(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Kt(t), t.alternate === null)) throw Error(y(340));
          Hl();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 13:
        if ((Kt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(y(340));
          Hl();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Z(ct), null);
      case 4:
        return (Ce(), null);
      case 10:
        return (Nn(t.type), null);
      case 22:
      case 23:
        return (
          Kt(t),
          cs(),
          e !== null && Z(Gl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Nn(ht), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _d(e, t) {
    switch ((Jr(t), t.tag)) {
      case 3:
        (Nn(ht), Ce());
        break;
      case 26:
      case 27:
      case 5:
        Ye(t);
        break;
      case 4:
        Ce();
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
        Nn(t.type);
        break;
      case 22:
      case 23:
        (Kt(t), cs(), e !== null && Z(Gl));
        break;
      case 24:
        Nn(ht);
    }
  }
  function di(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var u = n.create,
              E = n.inst;
            ((l = u()), (E.destroy = l));
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (T) {
      Xe(t, t.return, T);
    }
  }
  function dl(e, t, n) {
    try {
      var l = t.updateQueue,
        i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var E = l.inst,
              T = E.destroy;
            if (T !== void 0) {
              ((E.destroy = void 0), (i = t));
              var j = n,
                k = T;
              try {
                k();
              } catch (ee) {
                Xe(i, j, ee);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (ee) {
      Xe(t, t.return, ee);
    }
  }
  function Od(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        xf(t, n);
      } catch (l) {
        Xe(e, e.return, l);
      }
    }
  }
  function Dd(e, t, n) {
    ((n.props = Ql(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      Xe(e, t, l);
    }
  }
  function mi(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == 'function' ? (e.refCleanup = n(l)) : (n.current = l);
      }
    } catch (i) {
      Xe(e, t, i);
    }
  }
  function En(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (i) {
          Xe(e, t, i);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof n == 'function')
        try {
          n(null);
        } catch (i) {
          Xe(e, t, i);
        }
      else n.current = null;
  }
  function wd(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          n.autoFocus && l.focus();
          break e;
        case 'img':
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (i) {
      Xe(e, e.return, i);
    }
  }
  function Vs(e, t, n) {
    try {
      var l = e.stateNode;
      (ng(l, e.type, n, t), (l[tt] = t));
    } catch (i) {
      Xe(e, e.return, i);
    }
  }
  function zd(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && xl(e.type)) || e.tag === 4
    );
  }
  function qs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || zd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if ((e.tag === 27 && xl(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Xs(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
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
            n != null || t.onclick !== null || (t.onclick = _n)));
    else if (
      l !== 4 &&
      (l === 27 && xl(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (Xs(e, t, n), e = e.sibling; e !== null; ) (Xs(e, t, n), (e = e.sibling));
  }
  function _u(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (l !== 4 && (l === 27 && xl(e.type) && (n = e.stateNode), (e = e.child), e !== null))
      for (_u(e, t, n), e = e.sibling; e !== null; ) (_u(e, t, n), (e = e.sibling));
  }
  function Nd(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0]);
      (Rt(t, l, n), (t[We] = e), (t[tt] = n));
    } catch (u) {
      Xe(e, e.return, u);
    }
  }
  var jn = !1,
    yt = !1,
    Qs = !1,
    Bd = typeof WeakSet == 'function' ? WeakSet : Set,
    Et = null;
  function U0(e, t) {
    if (((e = e.containerInfo), (fc = Fu), (e = Zo(e)), Lr(e))) {
      if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var i = l.anchorOffset,
              u = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, u.nodeType);
            } catch {
              n = null;
              break e;
            }
            var E = 0,
              T = -1,
              j = -1,
              k = 0,
              ee = 0,
              ne = e,
              J = null;
            t: for (;;) {
              for (
                var W;
                ne !== n || (i !== 0 && ne.nodeType !== 3) || (T = E + i),
                  ne !== u || (l !== 0 && ne.nodeType !== 3) || (j = E + l),
                  ne.nodeType === 3 && (E += ne.nodeValue.length),
                  (W = ne.firstChild) !== null;
              )
                ((J = ne), (ne = W));
              for (;;) {
                if (ne === e) break t;
                if (
                  (J === n && ++k === i && (T = E),
                  J === u && ++ee === l && (j = E),
                  (W = ne.nextSibling) !== null)
                )
                  break;
                ((ne = J), (J = ne.parentNode));
              }
              ne = W;
            }
            n = T === -1 || j === -1 ? null : { start: T, end: j };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (dc = { focusedElem: e, selectionRange: n }, Fu = !1, Et = t; Et !== null; )
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
                  (l = n.stateNode));
                try {
                  var oe = Ql(n.type, i);
                  ((e = l.getSnapshotBeforeUpdate(oe, u)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (ye) {
                  Xe(n, n.return, ye);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) vc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      vc(e);
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
              if ((e & 1024) !== 0) throw Error(y(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Et = e));
            break;
          }
          Et = t.return;
        }
  }
  function Ud(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Yn(e, n), l & 4 && di(5, n));
        break;
      case 1:
        if ((Yn(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (E) {
              Xe(n, n.return, E);
            }
          else {
            var i = Ql(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (E) {
              Xe(n, n.return, E);
            }
          }
        (l & 64 && Od(n), l & 512 && mi(n, n.return));
        break;
      case 3:
        if ((Yn(e, n), l & 64 && ((e = n.updateQueue), e !== null))) {
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
            xf(e, t);
          } catch (E) {
            Xe(n, n.return, E);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Nd(n);
      case 26:
      case 5:
        (Yn(e, n), t === null && l & 4 && wd(n), l & 512 && mi(n, n.return));
        break;
      case 12:
        Yn(e, n);
        break;
      case 31:
        (Yn(e, n), l & 4 && jd(e, n));
        break;
      case 13:
        (Yn(e, n),
          l & 4 && Gd(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((n = Q0.bind(null, n)), og(e, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || jn), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || yt), (i = jn));
          var u = yt;
          ((jn = l),
            (yt = t) && !u ? Vn(e, n, (n.subtreeFlags & 8772) !== 0) : Yn(e, n),
            (jn = i),
            (yt = u));
        }
        break;
      case 30:
        break;
      default:
        Yn(e, n);
    }
  }
  function Hd(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Hd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Sr(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var nt = null,
    Ut = !1;
  function Gn(e, t, n) {
    for (n = n.child; n !== null; ) (Ld(e, t, n), (n = n.sibling));
  }
  function Ld(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == 'function')
      try {
        Dt.onCommitFiberUnmount(Ol, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (yt || En(n, t),
          Gn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        yt || En(n, t);
        var l = nt,
          i = Ut;
        (xl(n.type) && ((nt = n.stateNode), (Ut = !1)),
          Gn(e, t, n),
          bi(n.stateNode),
          (nt = l),
          (Ut = i));
        break;
      case 5:
        yt || En(n, t);
      case 6:
        if (((l = nt), (i = Ut), (nt = null), Gn(e, t, n), (nt = l), (Ut = i), nt !== null))
          if (Ut)
            try {
              (nt.nodeType === 9
                ? nt.body
                : nt.nodeName === 'HTML'
                  ? nt.ownerDocument.body
                  : nt
              ).removeChild(n.stateNode);
            } catch (u) {
              Xe(n, t, u);
            }
          else
            try {
              nt.removeChild(n.stateNode);
            } catch (u) {
              Xe(n, t, u);
            }
        break;
      case 18:
        nt !== null &&
          (Ut
            ? ((e = nt),
              Om(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                n.stateNode
              ),
              Ua(e))
            : Om(nt, n.stateNode));
        break;
      case 4:
        ((l = nt),
          (i = Ut),
          (nt = n.stateNode.containerInfo),
          (Ut = !0),
          Gn(e, t, n),
          (nt = l),
          (Ut = i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (dl(2, n, t), yt || dl(4, n, t), Gn(e, t, n));
        break;
      case 1:
        (yt ||
          (En(n, t), (l = n.stateNode), typeof l.componentWillUnmount == 'function' && Dd(n, t, l)),
          Gn(e, t, n));
        break;
      case 21:
        Gn(e, t, n);
        break;
      case 22:
        ((yt = (l = yt) || n.memoizedState !== null), Gn(e, t, n), (yt = l));
        break;
      default:
        Gn(e, t, n);
    }
  }
  function jd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Ua(e);
      } catch (n) {
        Xe(t, t.return, n);
      }
    }
  }
  function Gd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ua(e);
      } catch (n) {
        Xe(t, t.return, n);
      }
  }
  function H0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Bd()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Bd()),
          t
        );
      default:
        throw Error(y(435, e.tag));
    }
  }
  function Ou(e, t) {
    var n = H0(e);
    t.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var i = Z0.bind(null, e, l);
        l.then(i, i);
      }
    });
  }
  function Ht(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var i = n[l],
          u = e,
          E = t,
          T = E;
        e: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
              if (xl(T.type)) {
                ((nt = T.stateNode), (Ut = !1));
                break e;
              }
              break;
            case 5:
              ((nt = T.stateNode), (Ut = !1));
              break e;
            case 3:
            case 4:
              ((nt = T.stateNode.containerInfo), (Ut = !0));
              break e;
          }
          T = T.return;
        }
        if (nt === null) throw Error(y(160));
        (Ld(u, E, i),
          (nt = null),
          (Ut = !1),
          (u = i.alternate),
          u !== null && (u.return = null),
          (i.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (Yd(t, e), (t = t.sibling));
  }
  var hn = null;
  function Yd(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ht(t, e), Lt(e), l & 4 && (dl(3, e, e.return), di(3, e), dl(5, e, e.return)));
        break;
      case 1:
        (Ht(t, e),
          Lt(e),
          l & 512 && (yt || n === null || En(n, n.return)),
          l & 64 &&
            jn &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? l : n.concat(l))))));
        break;
      case 26:
        var i = hn;
        if ((Ht(t, e), Lt(e), l & 512 && (yt || n === null || En(n, n.return)), l & 4)) {
          var u = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type), (n = e.memoizedProps), (i = i.ownerDocument || i));
                  t: switch (l) {
                    case 'title':
                      ((u = i.getElementsByTagName('title')[0]),
                        (!u ||
                          u[Ya] ||
                          u[We] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = i.createElement(l)),
                          i.head.insertBefore(u, i.querySelector('head > title'))),
                        Rt(u, l, n),
                        (u[We] = e),
                        St(u),
                        (l = u));
                      break e;
                    case 'link':
                      var E = Ym('link', 'href', i).get(l + (n.href || ''));
                      if (E) {
                        for (var T = 0; T < E.length; T++)
                          if (
                            ((u = E[T]),
                            u.getAttribute('href') ===
                              (n.href == null || n.href === '' ? null : n.href) &&
                              u.getAttribute('rel') === (n.rel == null ? null : n.rel) &&
                              u.getAttribute('title') === (n.title == null ? null : n.title) &&
                              u.getAttribute('crossorigin') ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            E.splice(T, 1);
                            break t;
                          }
                      }
                      ((u = i.createElement(l)), Rt(u, l, n), i.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((E = Ym('meta', 'content', i).get(l + (n.content || '')))) {
                        for (T = 0; T < E.length; T++)
                          if (
                            ((u = E[T]),
                            u.getAttribute('content') ===
                              (n.content == null ? null : '' + n.content) &&
                              u.getAttribute('name') === (n.name == null ? null : n.name) &&
                              u.getAttribute('property') ===
                                (n.property == null ? null : n.property) &&
                              u.getAttribute('http-equiv') ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              u.getAttribute('charset') === (n.charSet == null ? null : n.charSet))
                          ) {
                            E.splice(T, 1);
                            break t;
                          }
                      }
                      ((u = i.createElement(l)), Rt(u, l, n), i.head.appendChild(u));
                      break;
                    default:
                      throw Error(y(468, l));
                  }
                  ((u[We] = e), St(u), (l = u));
                }
                e.stateNode = l;
              } else Vm(i, e.type, e.stateNode);
            else e.stateNode = Gm(i, l, e.memoizedProps);
          else
            u !== l
              ? (u === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                l === null ? Vm(i, e.type, e.stateNode) : Gm(i, l, e.memoizedProps))
              : l === null && e.stateNode !== null && Vs(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Ht(t, e),
          Lt(e),
          l & 512 && (yt || n === null || En(n, n.return)),
          n !== null && l & 4 && Vs(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((Ht(t, e), Lt(e), l & 512 && (yt || n === null || En(n, n.return)), e.flags & 32)) {
          i = e.stateNode;
          try {
            aa(i, '');
          } catch (oe) {
            Xe(e, e.return, oe);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), Vs(e, i, n !== null ? n.memoizedProps : i)),
          l & 1024 && (Qs = !0));
        break;
      case 6:
        if ((Ht(t, e), Lt(e), l & 4)) {
          if (e.stateNode === null) throw Error(y(162));
          ((l = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = l;
          } catch (oe) {
            Xe(e, e.return, oe);
          }
        }
        break;
      case 3:
        if (
          ((Zu = null),
          (i = hn),
          (hn = Xu(t.containerInfo)),
          Ht(t, e),
          (hn = i),
          Lt(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ua(t.containerInfo);
          } catch (oe) {
            Xe(e, e.return, oe);
          }
        Qs && ((Qs = !1), Vd(e));
        break;
      case 4:
        ((l = hn), (hn = Xu(e.stateNode.containerInfo)), Ht(t, e), Lt(e), (hn = l));
        break;
      case 12:
        (Ht(t, e), Lt(e));
        break;
      case 31:
        (Ht(t, e),
          Lt(e),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Ou(e, l))));
        break;
      case 13:
        (Ht(t, e),
          Lt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (wu = it()),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Ou(e, l))));
        break;
      case 22:
        i = e.memoizedState !== null;
        var j = n !== null && n.memoizedState !== null,
          k = jn,
          ee = yt;
        if (((jn = k || i), (yt = ee || j), Ht(t, e), (yt = ee), (jn = k), Lt(e), l & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (n === null || j || jn || yt || Zl(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                j = n = t;
                try {
                  if (((u = j.stateNode), i))
                    ((E = u.style),
                      typeof E.setProperty == 'function'
                        ? E.setProperty('display', 'none', 'important')
                        : (E.display = 'none'));
                  else {
                    T = j.stateNode;
                    var ne = j.memoizedProps.style,
                      J = ne != null && ne.hasOwnProperty('display') ? ne.display : null;
                    T.style.display = J == null || typeof J == 'boolean' ? '' : ('' + J).trim();
                  }
                } catch (oe) {
                  Xe(j, j.return, oe);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                j = t;
                try {
                  j.stateNode.nodeValue = i ? '' : j.memoizedProps;
                } catch (oe) {
                  Xe(j, j.return, oe);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                j = t;
                try {
                  var W = j.stateNode;
                  i ? Dm(W, !0) : Dm(j.stateNode, !1);
                } catch (oe) {
                  Xe(j, j.return, oe);
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
        l & 4 &&
          ((l = e.updateQueue),
          l !== null && ((n = l.retryQueue), n !== null && ((l.retryQueue = null), Ou(e, n))));
        break;
      case 19:
        (Ht(t, e),
          Lt(e),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Ou(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ht(t, e), Lt(e));
    }
  }
  function Lt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (zd(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(y(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode,
              u = qs(e);
            _u(e, u, i);
            break;
          case 5:
            var E = n.stateNode;
            n.flags & 32 && (aa(E, ''), (n.flags &= -33));
            var T = qs(e);
            _u(e, T, E);
            break;
          case 3:
          case 4:
            var j = n.stateNode.containerInfo,
              k = qs(e);
            Xs(e, k, j);
            break;
          default:
            throw Error(y(161));
        }
      } catch (ee) {
        Xe(e, e.return, ee);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Vd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Vd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function Yn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Ud(e, t.alternate, t), (t = t.sibling));
  }
  function Zl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (dl(4, t, t.return), Zl(t));
          break;
        case 1:
          En(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == 'function' && Dd(t, t.return, n), Zl(t));
          break;
        case 27:
          bi(t.stateNode);
        case 26:
        case 5:
          (En(t, t.return), Zl(t));
          break;
        case 22:
          t.memoizedState === null && Zl(t);
          break;
        case 30:
          Zl(t);
          break;
        default:
          Zl(t);
      }
      e = e.sibling;
    }
  }
  function Vn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        i = e,
        u = t,
        E = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Vn(i, u, n), di(4, u));
          break;
        case 1:
          if ((Vn(i, u, n), (l = u), (i = l.stateNode), typeof i.componentDidMount == 'function'))
            try {
              i.componentDidMount();
            } catch (k) {
              Xe(l, l.return, k);
            }
          if (((l = u), (i = l.updateQueue), i !== null)) {
            var T = l.stateNode;
            try {
              var j = i.shared.hiddenCallbacks;
              if (j !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < j.length; i++) pf(j[i], T);
            } catch (k) {
              Xe(l, l.return, k);
            }
          }
          (n && E & 64 && Od(u), mi(u, u.return));
          break;
        case 27:
          Nd(u);
        case 26:
        case 5:
          (Vn(i, u, n), n && l === null && E & 4 && wd(u), mi(u, u.return));
          break;
        case 12:
          Vn(i, u, n);
          break;
        case 31:
          (Vn(i, u, n), n && E & 4 && jd(i, u));
          break;
        case 13:
          (Vn(i, u, n), n && E & 4 && Gd(i, u));
          break;
        case 22:
          (u.memoizedState === null && Vn(i, u, n), mi(u, u.return));
          break;
        case 30:
          break;
        default:
          Vn(i, u, n);
      }
      t = t.sibling;
    }
  }
  function Zs(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Pa(n)));
  }
  function Ks(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Pa(e)));
  }
  function vn(e, t, n, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (qd(e, t, n, l), (t = t.sibling));
  }
  function qd(e, t, n, l) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (vn(e, t, n, l), i & 2048 && di(9, t));
        break;
      case 1:
        vn(e, t, n, l);
        break;
      case 3:
        (vn(e, t, n, l),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Pa(e))));
        break;
      case 12:
        if (i & 2048) {
          (vn(e, t, n, l), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              E = u.id,
              T = u.onPostCommit;
            typeof T == 'function' &&
              T(E, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (j) {
            Xe(t, t.return, j);
          }
        } else vn(e, t, n, l);
        break;
      case 31:
        vn(e, t, n, l);
        break;
      case 13:
        vn(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (E = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? vn(e, t, n, l)
              : hi(e, t)
            : u._visibility & 2
              ? vn(e, t, n, l)
              : ((u._visibility |= 2), Ma(e, t, n, l, (t.subtreeFlags & 10256) !== 0 || !1)),
          i & 2048 && Zs(E, t));
        break;
      case 24:
        (vn(e, t, n, l), i & 2048 && Ks(t.alternate, t));
        break;
      default:
        vn(e, t, n, l);
    }
  }
  function Ma(e, t, n, l, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e,
        E = t,
        T = n,
        j = l,
        k = E.flags;
      switch (E.tag) {
        case 0:
        case 11:
        case 15:
          (Ma(u, E, T, j, i), di(8, E));
          break;
        case 23:
          break;
        case 22:
          var ee = E.stateNode;
          (E.memoizedState !== null
            ? ee._visibility & 2
              ? Ma(u, E, T, j, i)
              : hi(u, E)
            : ((ee._visibility |= 2), Ma(u, E, T, j, i)),
            i && k & 2048 && Zs(E.alternate, E));
          break;
        case 24:
          (Ma(u, E, T, j, i), i && k & 2048 && Ks(E.alternate, E));
          break;
        default:
          Ma(u, E, T, j, i);
      }
      t = t.sibling;
    }
  }
  function hi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          i = l.flags;
        switch (l.tag) {
          case 22:
            (hi(n, l), i & 2048 && Zs(l.alternate, l));
            break;
          case 24:
            (hi(n, l), i & 2048 && Ks(l.alternate, l));
            break;
          default:
            hi(n, l);
        }
        t = t.sibling;
      }
  }
  var vi = 8192;
  function Ta(e, t, n) {
    if (e.subtreeFlags & vi) for (e = e.child; e !== null; ) (Xd(e, t, n), (e = e.sibling));
  }
  function Xd(e, t, n) {
    switch (e.tag) {
      case 26:
        (Ta(e, t, n),
          e.flags & vi && e.memoizedState !== null && bg(n, hn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Ta(e, t, n);
        break;
      case 3:
      case 4:
        var l = hn;
        ((hn = Xu(e.stateNode.containerInfo)), Ta(e, t, n), (hn = l));
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = vi), (vi = 16777216), Ta(e, t, n), (vi = l))
            : Ta(e, t, n));
        break;
      default:
        Ta(e, t, n);
    }
  }
  function Qd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function gi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((Et = l), Kd(l, e));
        }
      Qd(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Zd(e), (e = e.sibling));
  }
  function Zd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (gi(e), e.flags & 2048 && dl(9, e, e.return));
        break;
      case 3:
        gi(e);
        break;
      case 12:
        gi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Du(e))
          : gi(e);
        break;
      default:
        gi(e);
    }
  }
  function Du(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((Et = l), Kd(l, e));
        }
      Qd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (dl(8, t, t.return), Du(t));
          break;
        case 22:
          ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), Du(t)));
          break;
        default:
          Du(t);
      }
      e = e.sibling;
    }
  }
  function Kd(e, t) {
    for (; Et !== null; ) {
      var n = Et;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          dl(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Pa(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (Et = l));
      else
        e: for (n = e; Et !== null; ) {
          l = Et;
          var i = l.sibling,
            u = l.return;
          if ((Hd(l), l === n)) {
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
  var L0 = {
      getCacheForType: function (e) {
        var t = Mt(ht),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return Mt(ht).controller.signal;
      },
    },
    j0 = typeof WeakMap == 'function' ? WeakMap : Map,
    Ge = 0,
    Je = null,
    _e = null,
    De = 0,
    qe = 0,
    kt = null,
    ml = !1,
    Ra = !1,
    ks = !1,
    qn = 0,
    rt = 0,
    hl = 0,
    Kl = 0,
    Js = 0,
    Jt = 0,
    Aa = 0,
    yi = null,
    jt = null,
    Fs = !1,
    wu = 0,
    kd = 0,
    zu = 1 / 0,
    Nu = null,
    vl = null,
    xt = 0,
    gl = null,
    _a = null,
    Xn = 0,
    $s = 0,
    Ws = null,
    Jd = null,
    pi = 0,
    Is = null;
  function Ft() {
    return (Ge & 2) !== 0 && De !== 0 ? De & -De : A.T !== null ? ac() : At();
  }
  function Fd() {
    if (Jt === 0)
      if ((De & 536870912) === 0 || Ne) {
        var e = Wl;
        ((Wl <<= 1), (Wl & 3932160) === 0 && (Wl = 262144), (Jt = e));
      } else Jt = 536870912;
    return ((e = Zt.current), e !== null && (e.flags |= 32), Jt);
  }
  function Gt(e, t, n) {
    (((e === Je && (qe === 2 || qe === 9)) || e.cancelPendingCommit !== null) &&
      (Oa(e, 0), yl(e, De, Jt, !1)),
      ge(e, n),
      ((Ge & 2) === 0 || e !== Je) &&
        (e === Je && ((Ge & 2) === 0 && (Kl |= n), rt === 4 && yl(e, De, Jt, !1)), bn(e)));
  }
  function $d(e, t, n) {
    if ((Ge & 6) !== 0) throw Error(y(327));
    var l = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || xe(e, t),
      i = l ? V0(e, t) : ec(e, t, !0),
      u = l;
    do {
      if (i === 0) {
        Ra && !l && yl(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !G0(n))) {
          ((i = ec(e, t, !1)), (u = !1));
          continue;
        }
        if (i === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var E = 0;
          else
            ((E = e.pendingLanes & -536870913), (E = E !== 0 ? E : E & 536870912 ? 536870912 : 0));
          if (E !== 0) {
            t = E;
            e: {
              var T = e;
              i = yi;
              var j = T.current.memoizedState.isDehydrated;
              if ((j && (Oa(T, E).flags |= 256), (E = ec(T, E, !1)), E !== 2)) {
                if (ks && !j) {
                  ((T.errorRecoveryDisabledLanes |= u), (Kl |= u), (i = 4));
                  break e;
                }
                ((u = jt), (jt = i), u !== null && (jt === null ? (jt = u) : jt.push.apply(jt, u)));
              }
              i = E;
            }
            if (((u = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (Oa(e, 0), yl(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (u = i), u)) {
            case 0:
            case 1:
              throw Error(y(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              yl(l, t, Jt, !ml);
              break e;
            case 2:
              jt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(y(329));
          }
          if ((t & 62914560) === t && ((i = wu + 300 - it()), 10 < i)) {
            if ((yl(l, t, Jt, !ml), re(l, 0, !0) !== 0)) break e;
            ((Xn = t),
              (l.timeoutHandle = Am(
                Wd.bind(null, l, n, jt, Nu, Fs, t, Jt, Kl, Aa, ml, u, 'Throttled', -0, 0),
                i
              )));
            break e;
          }
          Wd(l, n, jt, Nu, Fs, t, Jt, Kl, Aa, ml, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    bn(e);
  }
  function Wd(e, t, n, l, i, u, E, T, j, k, ee, ne, J, W) {
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
        unsuspend: _n,
      }),
        Xd(t, u, ne));
      var oe = (u & 62914560) === u ? wu - it() : (u & 4194048) === u ? kd - it() : 0;
      if (((oe = Cg(ne, oe)), oe !== null)) {
        ((Xn = u),
          (e.cancelPendingCommit = oe(
            im.bind(null, e, t, u, n, l, i, E, T, j, ee, ne, null, J, W)
          )),
          yl(e, u, E, !k));
        return;
      }
    }
    im(e, t, u, n, l, i, E, T, j);
  }
  function G0(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var i = n[l],
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
  function yl(e, t, n, l) {
    ((t &= ~Js),
      (t &= ~Kl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var i = t; 0 < i; ) {
      var u = 31 - wt(i),
        E = 1 << u;
      ((l[u] = -1), (i &= ~E));
    }
    n !== 0 && He(e, n, t);
  }
  function Bu() {
    return (Ge & 6) === 0 ? (xi(0), !1) : !0;
  }
  function Ps() {
    if (_e !== null) {
      if (qe === 0) var e = _e.return;
      else ((e = _e), (zn = Ll = null), vs(e), (xa = null), (ti = 0), (e = _e));
      for (; e !== null; ) (_d(e.alternate, e), (e = e.return));
      _e = null;
    }
  }
  function Oa(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), ig(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (Xn = 0),
      Ps(),
      (Je = e),
      (_e = n = Dn(e.current, null)),
      (De = t),
      (qe = 0),
      (kt = null),
      (ml = !1),
      (Ra = xe(e, t)),
      (ks = !1),
      (Aa = Jt = Js = Kl = hl = rt = 0),
      (jt = yi = null),
      (Fs = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var i = 31 - wt(l),
          u = 1 << i;
        ((t |= e[i]), (l &= ~u));
      }
    return ((qn = t), tu(), n);
  }
  function Id(e, t) {
    ((Me = null),
      (A.H = ci),
      t === pa || t === cu
        ? ((t = hf()), (qe = 3))
        : t === ls
          ? ((t = hf()), (qe = 4))
          : (qe =
              t === ws
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (kt = t),
      _e === null && ((rt = 1), Cu(e, tn(t, e.current))));
  }
  function Pd() {
    var e = Zt.current;
    return e === null
      ? !0
      : (De & 4194048) === De
        ? un === null
        : (De & 62914560) === De || (De & 536870912) !== 0
          ? e === un
          : !1;
  }
  function em() {
    var e = A.H;
    return ((A.H = ci), e === null ? ci : e);
  }
  function tm() {
    var e = A.A;
    return ((A.A = L0), e);
  }
  function Uu() {
    ((rt = 4),
      ml || ((De & 4194048) !== De && Zt.current !== null) || (Ra = !0),
      ((hl & 134217727) === 0 && (Kl & 134217727) === 0) || Je === null || yl(Je, De, Jt, !1));
  }
  function ec(e, t, n) {
    var l = Ge;
    Ge |= 2;
    var i = em(),
      u = tm();
    ((Je !== e || De !== t) && ((Nu = null), Oa(e, t)), (t = !1));
    var E = rt;
    e: do
      try {
        if (qe !== 0 && _e !== null) {
          var T = _e,
            j = kt;
          switch (qe) {
            case 8:
              (Ps(), (E = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Zt.current === null && (t = !0);
              var k = qe;
              if (((qe = 0), (kt = null), Da(e, T, j, k), n && Ra)) {
                E = 0;
                break e;
              }
              break;
            default:
              ((k = qe), (qe = 0), (kt = null), Da(e, T, j, k));
          }
        }
        (Y0(), (E = rt));
        break;
      } catch (ee) {
        Id(e, ee);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (zn = Ll = null),
      (Ge = l),
      (A.H = i),
      (A.A = u),
      _e === null && ((Je = null), (De = 0), tu()),
      E
    );
  }
  function Y0() {
    for (; _e !== null; ) nm(_e);
  }
  function V0(e, t) {
    var n = Ge;
    Ge |= 2;
    var l = em(),
      i = tm();
    Je !== e || De !== t ? ((Nu = null), (zu = it() + 500), Oa(e, t)) : (Ra = xe(e, t));
    e: do
      try {
        if (qe !== 0 && _e !== null) {
          t = _e;
          var u = kt;
          t: switch (qe) {
            case 1:
              ((qe = 0), (kt = null), Da(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (df(u)) {
                ((qe = 0), (kt = null), lm(t));
                break;
              }
              ((t = function () {
                ((qe !== 2 && qe !== 9) || Je !== e || (qe = 7), bn(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              qe = 7;
              break e;
            case 4:
              qe = 5;
              break e;
            case 7:
              df(u) ? ((qe = 0), (kt = null), lm(t)) : ((qe = 0), (kt = null), Da(e, t, u, 7));
              break;
            case 5:
              var E = null;
              switch (_e.tag) {
                case 26:
                  E = _e.memoizedState;
                case 5:
                case 27:
                  var T = _e;
                  if (E ? qm(E) : T.stateNode.complete) {
                    ((qe = 0), (kt = null));
                    var j = T.sibling;
                    if (j !== null) _e = j;
                    else {
                      var k = T.return;
                      k !== null ? ((_e = k), Hu(k)) : (_e = null);
                    }
                    break t;
                  }
              }
              ((qe = 0), (kt = null), Da(e, t, u, 5));
              break;
            case 6:
              ((qe = 0), (kt = null), Da(e, t, u, 6));
              break;
            case 8:
              (Ps(), (rt = 6));
              break e;
            default:
              throw Error(y(462));
          }
        }
        q0();
        break;
      } catch (ee) {
        Id(e, ee);
      }
    while (!0);
    return (
      (zn = Ll = null),
      (A.H = l),
      (A.A = i),
      (Ge = n),
      _e !== null ? 0 : ((Je = null), (De = 0), tu(), rt)
    );
  }
  function q0() {
    for (; _e !== null && !$e(); ) nm(_e);
  }
  function nm(e) {
    var t = Rd(e.alternate, e, qn);
    ((e.memoizedProps = e.pendingProps), t === null ? Hu(e) : (_e = t));
  }
  function lm(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Sd(n, t, t.pendingProps, t.type, void 0, De);
        break;
      case 11:
        t = Sd(n, t, t.pendingProps, t.type.render, t.ref, De);
        break;
      case 5:
        vs(t);
      default:
        (_d(n, t), (t = _e = ef(t, qn)), (t = Rd(n, t, qn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Hu(e) : (_e = t));
  }
  function Da(e, t, n, l) {
    ((zn = Ll = null), vs(t), (xa = null), (ti = 0));
    var i = t.return;
    try {
      if (D0(e, i, t, n, De)) {
        ((rt = 1), Cu(e, tn(n, e.current)), (_e = null));
        return;
      }
    } catch (u) {
      if (i !== null) throw ((_e = i), u);
      ((rt = 1), Cu(e, tn(n, e.current)), (_e = null));
      return;
    }
    t.flags & 32768
      ? (Ne || l === 1
          ? (e = !0)
          : Ra || (De & 536870912) !== 0
            ? (e = !1)
            : ((ml = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Zt.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        am(t, e))
      : Hu(t);
  }
  function Hu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        am(t, ml);
        return;
      }
      e = t.return;
      var n = N0(t.alternate, t, qn);
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
    rt === 0 && (rt = 5);
  }
  function am(e, t) {
    do {
      var n = B0(e.alternate, e);
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
    ((rt = 6), (_e = null));
  }
  function im(e, t, n, l, i, u, E, T, j) {
    e.cancelPendingCommit = null;
    do Lu();
    while (xt !== 0);
    if ((Ge & 6) !== 0) throw Error(y(327));
    if (t !== null) {
      if (t === e.current) throw Error(y(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= qr),
        Ue(e, n, u, E, T, j),
        e === Je && ((_e = Je = null), (De = 0)),
        (_a = t),
        (gl = e),
        (Xn = n),
        ($s = u),
        (Ws = i),
        (Jd = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            K0(Wt, function () {
              return (om(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = A.T), (A.T = null), (i = N.p), (N.p = 2), (E = Ge), (Ge |= 4));
        try {
          U0(e, t, n);
        } finally {
          ((Ge = E), (N.p = i), (A.T = l));
        }
      }
      ((xt = 1), um(), rm(), sm());
    }
  }
  function um() {
    if (xt === 1) {
      xt = 0;
      var e = gl,
        t = _a,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = A.T), (A.T = null));
        var l = N.p;
        N.p = 2;
        var i = Ge;
        Ge |= 4;
        try {
          Yd(t, e);
          var u = dc,
            E = Zo(e.containerInfo),
            T = u.focusedElem,
            j = u.selectionRange;
          if (E !== T && T && T.ownerDocument && Qo(T.ownerDocument.documentElement, T)) {
            if (j !== null && Lr(T)) {
              var k = j.start,
                ee = j.end;
              if ((ee === void 0 && (ee = k), 'selectionStart' in T))
                ((T.selectionStart = k), (T.selectionEnd = Math.min(ee, T.value.length)));
              else {
                var ne = T.ownerDocument || document,
                  J = (ne && ne.defaultView) || window;
                if (J.getSelection) {
                  var W = J.getSelection(),
                    oe = T.textContent.length,
                    ye = Math.min(j.start, oe),
                    ke = j.end === void 0 ? ye : Math.min(j.end, oe);
                  !W.extend && ye > ke && ((E = ke), (ke = ye), (ye = E));
                  var Q = Xo(T, ye),
                    X = Xo(T, ke);
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
                      ye > ke
                        ? (W.addRange(K), W.extend(X.node, X.offset))
                        : (K.setEnd(X.node, X.offset), W.addRange(K)));
                  }
                }
              }
            }
            for (ne = [], W = T; (W = W.parentNode); )
              W.nodeType === 1 && ne.push({ element: W, left: W.scrollLeft, top: W.scrollTop });
            for (typeof T.focus == 'function' && T.focus(), T = 0; T < ne.length; T++) {
              var te = ne[T];
              ((te.element.scrollLeft = te.left), (te.element.scrollTop = te.top));
            }
          }
          ((Fu = !!fc), (dc = fc = null));
        } finally {
          ((Ge = i), (N.p = l), (A.T = n));
        }
      }
      ((e.current = t), (xt = 2));
    }
  }
  function rm() {
    if (xt === 2) {
      xt = 0;
      var e = gl,
        t = _a,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = A.T), (A.T = null));
        var l = N.p;
        N.p = 2;
        var i = Ge;
        Ge |= 4;
        try {
          Ud(e, t.alternate, t);
        } finally {
          ((Ge = i), (N.p = l), (A.T = n));
        }
      }
      xt = 3;
    }
  }
  function sm() {
    if (xt === 4 || xt === 3) {
      ((xt = 0), Fl());
      var e = gl,
        t = _a,
        n = Xn,
        l = Jd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (xt = 5)
        : ((xt = 0), (_a = gl = null), cm(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (vl = null),
        lt(n),
        (t = t.stateNode),
        Dt && typeof Dt.onCommitFiberRoot == 'function')
      )
        try {
          Dt.onCommitFiberRoot(Ol, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = A.T), (i = N.p), (N.p = 2), (A.T = null));
        try {
          for (var u = e.onRecoverableError, E = 0; E < l.length; E++) {
            var T = l[E];
            u(T.value, { componentStack: T.stack });
          }
        } finally {
          ((A.T = t), (N.p = i));
        }
      }
      ((Xn & 3) !== 0 && Lu(),
        bn(e),
        (i = e.pendingLanes),
        (n & 261930) !== 0 && (i & 42) !== 0 ? (e === Is ? pi++ : ((pi = 0), (Is = e))) : (pi = 0),
        xi(0));
    }
  }
  function cm(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Pa(t)));
  }
  function Lu() {
    return (um(), rm(), sm(), om());
  }
  function om() {
    if (xt !== 5) return !1;
    var e = gl,
      t = $s;
    $s = 0;
    var n = lt(Xn),
      l = A.T,
      i = N.p;
    try {
      ((N.p = 32 > n ? 32 : n), (A.T = null), (n = Ws), (Ws = null));
      var u = gl,
        E = Xn;
      if (((xt = 0), (_a = gl = null), (Xn = 0), (Ge & 6) !== 0)) throw Error(y(331));
      var T = Ge;
      if (
        ((Ge |= 4),
        Zd(u.current),
        qd(u, u.current, E, n),
        (Ge = T),
        xi(0, !1),
        Dt && typeof Dt.onPostCommitFiberRoot == 'function')
      )
        try {
          Dt.onPostCommitFiberRoot(Ol, u);
        } catch {}
      return !0;
    } finally {
      ((N.p = i), (A.T = l), cm(e, t));
    }
  }
  function fm(e, t, n) {
    ((t = tn(n, t)),
      (t = Ds(e.stateNode, t, 2)),
      (e = cl(e, t, 2)),
      e !== null && (ge(e, 2), bn(e)));
  }
  function Xe(e, t, n) {
    if (e.tag === 3) fm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          fm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (vl === null || !vl.has(l)))
          ) {
            ((e = tn(n, e)),
              (n = dd(2)),
              (l = cl(t, n, 2)),
              l !== null && (md(n, l, t, e), ge(l, 2), bn(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function tc(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new j0();
      var i = new Set();
      l.set(t, i);
    } else ((i = l.get(t)), i === void 0 && ((i = new Set()), l.set(t, i)));
    i.has(n) || ((ks = !0), i.add(n), (e = X0.bind(null, e, t, n)), t.then(e, e));
  }
  function X0(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Je === e &&
        (De & n) === n &&
        (rt === 4 || (rt === 3 && (De & 62914560) === De && 300 > it() - wu)
          ? (Ge & 2) === 0 && Oa(e, 0)
          : (Js |= n),
        Aa === De && (Aa = 0)),
      bn(e));
  }
  function dm(e, t) {
    (t === 0 && (t = Ee()), (e = Bl(e, t)), e !== null && (ge(e, t), bn(e)));
  }
  function Q0(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), dm(e, n));
  }
  function Z0(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(y(314));
    }
    (l !== null && l.delete(t), dm(e, n));
  }
  function K0(e, t) {
    return Vt(e, t);
  }
  var ju = null,
    wa = null,
    nc = !1,
    Gu = !1,
    lc = !1,
    pl = 0;
  function bn(e) {
    (e !== wa && e.next === null && (wa === null ? (ju = wa = e) : (wa = wa.next = e)),
      (Gu = !0),
      nc || ((nc = !0), J0()));
  }
  function xi(e, t) {
    if (!lc && Gu) {
      lc = !0;
      do
        for (var n = !1, l = ju; l !== null; ) {
          if (e !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var E = l.suspendedLanes,
                T = l.pingedLanes;
              ((u = (1 << (31 - wt(42 | e) + 1)) - 1),
                (u &= i & ~(E & ~T)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((n = !0), gm(l, u));
          } else
            ((u = De),
              (u = re(
                l,
                l === Je ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (u & 3) === 0 || xe(l, u) || ((n = !0), gm(l, u)));
          l = l.next;
        }
      while (n);
      lc = !1;
    }
  }
  function k0() {
    mm();
  }
  function mm() {
    Gu = nc = !1;
    var e = 0;
    pl !== 0 && ag() && (e = pl);
    for (var t = it(), n = null, l = ju; l !== null; ) {
      var i = l.next,
        u = hm(l, t);
      (u === 0
        ? ((l.next = null), n === null ? (ju = i) : (n.next = i), i === null && (wa = n))
        : ((n = l), (e !== 0 || (u & 3) !== 0) && (Gu = !0)),
        (l = i));
    }
    ((xt !== 0 && xt !== 5) || xi(e), pl !== 0 && (pl = 0));
  }
  function hm(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        i = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var E = 31 - wt(u),
        T = 1 << E,
        j = i[E];
      (j === -1
        ? ((T & n) === 0 || (T & l) !== 0) && (i[E] = ze(T, t))
        : j <= t && (e.expiredLanes |= T),
        (u &= ~T));
    }
    if (
      ((t = Je),
      (n = De),
      (n = re(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (l = e.callbackNode),
      n === 0 || (e === t && (qe === 2 || qe === 9)) || e.cancelPendingCommit !== null)
    )
      return (l !== null && l !== null && bt(l), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((n & 3) === 0 || xe(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && bt(l), lt(n))) {
        case 2:
        case 8:
          n = qt;
          break;
        case 32:
          n = Wt;
          break;
        case 268435456:
          n = yn;
          break;
        default:
          n = Wt;
      }
      return (
        (l = vm.bind(null, e)),
        (n = Vt(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && bt(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function vm(e, t) {
    if (xt !== 0 && xt !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Lu() && e.callbackNode !== n) return null;
    var l = De;
    return (
      (l = re(e, e === Je ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      l === 0
        ? null
        : ($d(e, l, t),
          hm(e, it()),
          e.callbackNode != null && e.callbackNode === n ? vm.bind(null, e) : null)
    );
  }
  function gm(e, t) {
    if (Lu()) return null;
    $d(e, t, !0);
  }
  function J0() {
    ug(function () {
      (Ge & 6) !== 0 ? Vt(Mn, k0) : mm();
    });
  }
  function ac() {
    if (pl === 0) {
      var e = ga;
      (e === 0 && ((e = $l), ($l <<= 1), ($l & 261888) === 0 && ($l = 256)), (pl = e));
    }
    return pl;
  }
  function ym(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : ki('' + e);
  }
  function pm(e, t) {
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
  function F0(e, t, n, l, i) {
    if (t === 'submit' && n && n.stateNode === i) {
      var u = ym((i[tt] || null).action),
        E = l.submitter;
      E &&
        ((t = (t = E[tt] || null) ? ym(t.formAction) : E.getAttribute('formAction')),
        t !== null && ((u = t), (E = null)));
      var T = new Wi('action', 'action', null, l, i);
      e.push({
        event: T,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (pl !== 0) {
                  var j = E ? pm(i, E) : new FormData(i);
                  Ms(n, { pending: !0, data: j, method: i.method, action: u }, null, j);
                }
              } else
                typeof u == 'function' &&
                  (T.preventDefault(),
                  (j = E ? pm(i, E) : new FormData(i)),
                  Ms(n, { pending: !0, data: j, method: i.method, action: u }, u, j));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var ic = 0; ic < Vr.length; ic++) {
    var uc = Vr[ic],
      $0 = uc.toLowerCase(),
      W0 = uc[0].toUpperCase() + uc.slice(1);
    mn($0, 'on' + W0);
  }
  (mn(Jo, 'onAnimationEnd'),
    mn(Fo, 'onAnimationIteration'),
    mn($o, 'onAnimationStart'),
    mn('dblclick', 'onDoubleClick'),
    mn('focusin', 'onFocus'),
    mn('focusout', 'onBlur'),
    mn(m0, 'onTransitionRun'),
    mn(h0, 'onTransitionStart'),
    mn(v0, 'onTransitionCancel'),
    mn(Wo, 'onTransitionEnd'),
    na('onMouseEnter', ['mouseout', 'mouseover']),
    na('onMouseLeave', ['mouseout', 'mouseover']),
    na('onPointerEnter', ['pointerout', 'pointerover']),
    na('onPointerLeave', ['pointerout', 'pointerover']),
    Dl('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Dl(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Dl('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Dl('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Dl(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Dl(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var Si =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    I0 = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Si)
    );
  function xm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        i = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var E = l.length - 1; 0 <= E; E--) {
            var T = l[E],
              j = T.instance,
              k = T.currentTarget;
            if (((T = T.listener), j !== u && i.isPropagationStopped())) break e;
            ((u = T), (i.currentTarget = k));
            try {
              u(i);
            } catch (ee) {
              eu(ee);
            }
            ((i.currentTarget = null), (u = j));
          }
        else
          for (E = 0; E < l.length; E++) {
            if (
              ((T = l[E]),
              (j = T.instance),
              (k = T.currentTarget),
              (T = T.listener),
              j !== u && i.isPropagationStopped())
            )
              break e;
            ((u = T), (i.currentTarget = k));
            try {
              u(i);
            } catch (ee) {
              eu(ee);
            }
            ((i.currentTarget = null), (u = j));
          }
      }
    }
  }
  function Oe(e, t) {
    var n = t[tl];
    n === void 0 && (n = t[tl] = new Set());
    var l = e + '__bubble';
    n.has(l) || (Sm(t, e, 2, !1), n.add(l));
  }
  function rc(e, t, n) {
    var l = 0;
    (t && (l |= 4), Sm(n, e, l, t));
  }
  var Yu = '_reactListening' + Math.random().toString(36).slice(2);
  function sc(e) {
    if (!e[Yu]) {
      ((e[Yu] = !0),
        fo.forEach(function (n) {
          n !== 'selectionchange' && (I0.has(n) || rc(n, !1, e), rc(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Yu] || ((t[Yu] = !0), rc('selectionchange', !1, t));
    }
  }
  function Sm(e, t, n, l) {
    switch (Fm(t)) {
      case 2:
        var i = Rg;
        break;
      case 8:
        i = Ag;
        break;
      default:
        i = Cc;
    }
    ((n = i.bind(null, t, n, e)),
      (i = void 0),
      !_r || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
      l
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1));
  }
  function cc(e, t, n, l, i) {
    var u = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var E = l.tag;
        if (E === 3 || E === 4) {
          var T = l.stateNode.containerInfo;
          if (T === i) break;
          if (E === 4)
            for (E = l.return; E !== null; ) {
              var j = E.tag;
              if ((j === 3 || j === 4) && E.stateNode.containerInfo === i) return;
              E = E.return;
            }
          for (; T !== null; ) {
            if (((E = Pl(T)), E === null)) return;
            if (((j = E.tag), j === 5 || j === 6 || j === 26 || j === 27)) {
              l = u = E;
              continue e;
            }
            T = T.parentNode;
          }
        }
        l = l.return;
      }
    Mo(function () {
      var k = u,
        ee = Rr(n),
        ne = [];
      e: {
        var J = Io.get(e);
        if (J !== void 0) {
          var W = Wi,
            oe = e;
          switch (e) {
            case 'keypress':
              if (Fi(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              W = Zv;
              break;
            case 'focusin':
              ((oe = 'focus'), (W = zr));
              break;
            case 'focusout':
              ((oe = 'blur'), (W = zr));
              break;
            case 'beforeblur':
            case 'afterblur':
              W = zr;
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
              W = Ao;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              W = Nv;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              W = Jv;
              break;
            case Jo:
            case Fo:
            case $o:
              W = Hv;
              break;
            case Wo:
              W = $v;
              break;
            case 'scroll':
            case 'scrollend':
              W = wv;
              break;
            case 'wheel':
              W = Iv;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              W = jv;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              W = Oo;
              break;
            case 'toggle':
            case 'beforetoggle':
              W = e0;
          }
          var ye = (t & 4) !== 0,
            ke = !ye && (e === 'scroll' || e === 'scrollend'),
            Q = ye ? (J !== null ? J + 'Capture' : null) : J;
          ye = [];
          for (var X = k, K; X !== null; ) {
            var te = X;
            if (
              ((K = te.stateNode),
              (te = te.tag),
              (te !== 5 && te !== 26 && te !== 27) ||
                K === null ||
                Q === null ||
                ((te = qa(X, Q)), te != null && ye.push(Ei(X, te, K))),
              ke)
            )
              break;
            X = X.return;
          }
          0 < ye.length && ((J = new W(J, oe, null, n, ee)), ne.push({ event: J, listeners: ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((J = e === 'mouseover' || e === 'pointerover'),
            (W = e === 'mouseout' || e === 'pointerout'),
            J && n !== Tr && (oe = n.relatedTarget || n.fromElement) && (Pl(oe) || oe[zt]))
          )
            break e;
          if (
            (W || J) &&
            ((J =
              ee.window === ee
                ? ee
                : (J = ee.ownerDocument)
                  ? J.defaultView || J.parentWindow
                  : window),
            W
              ? ((oe = n.relatedTarget || n.toElement),
                (W = k),
                (oe = oe ? Pl(oe) : null),
                oe !== null &&
                  ((ke = a(oe)), (ye = oe.tag), oe !== ke || (ye !== 5 && ye !== 27 && ye !== 6)) &&
                  (oe = null))
              : ((W = null), (oe = k)),
            W !== oe)
          ) {
            if (
              ((ye = Ao),
              (te = 'onMouseLeave'),
              (Q = 'onMouseEnter'),
              (X = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((ye = Oo), (te = 'onPointerLeave'), (Q = 'onPointerEnter'), (X = 'pointer')),
              (ke = W == null ? J : Va(W)),
              (K = oe == null ? J : Va(oe)),
              (J = new ye(te, X + 'leave', W, n, ee)),
              (J.target = ke),
              (J.relatedTarget = K),
              (te = null),
              Pl(ee) === k &&
                ((ye = new ye(Q, X + 'enter', oe, n, ee)),
                (ye.target = K),
                (ye.relatedTarget = ke),
                (te = ye)),
              (ke = te),
              W && oe)
            )
              t: {
                for (ye = P0, Q = W, X = oe, K = 0, te = Q; te; te = ye(te)) K++;
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
            (W !== null && Em(ne, J, W, ye, !1),
              oe !== null && ke !== null && Em(ne, ke, oe, ye, !0));
          }
        }
        e: {
          if (
            ((J = k ? Va(k) : window),
            (W = J.nodeName && J.nodeName.toLowerCase()),
            W === 'select' || (W === 'input' && J.type === 'file'))
          )
            var Le = Lo;
          else if (Uo(J))
            if (jo) Le = o0;
            else {
              Le = s0;
              var de = r0;
            }
          else
            ((W = J.nodeName),
              !W || W.toLowerCase() !== 'input' || (J.type !== 'checkbox' && J.type !== 'radio')
                ? k && Mr(k.elementType) && (Le = Lo)
                : (Le = c0));
          if (Le && (Le = Le(e, k))) {
            Ho(ne, Le, n, ee);
            break e;
          }
          (de && de(e, J, k),
            e === 'focusout' &&
              k &&
              J.type === 'number' &&
              k.memoizedProps.value != null &&
              Cr(J, 'number', J.value));
        }
        switch (((de = k ? Va(k) : window), e)) {
          case 'focusin':
            (Uo(de) || de.contentEditable === 'true') && ((sa = de), (jr = k), ($a = null));
            break;
          case 'focusout':
            $a = jr = sa = null;
            break;
          case 'mousedown':
            Gr = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Gr = !1), Ko(ne, n, ee));
            break;
          case 'selectionchange':
            if (d0) break;
          case 'keydown':
          case 'keyup':
            Ko(ne, n, ee);
        }
        var Re;
        if (Br)
          e: {
            switch (e) {
              case 'compositionstart':
                var we = 'onCompositionStart';
                break e;
              case 'compositionend':
                we = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                we = 'onCompositionUpdate';
                break e;
            }
            we = void 0;
          }
        else
          ra
            ? No(e, n) && (we = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (we = 'onCompositionStart');
        (we &&
          (Do &&
            n.locale !== 'ko' &&
            (ra || we !== 'onCompositionStart'
              ? we === 'onCompositionEnd' && ra && (Re = To())
              : ((nl = ee), (Or = 'value' in nl ? nl.value : nl.textContent), (ra = !0))),
          (de = Vu(k, we)),
          0 < de.length &&
            ((we = new _o(we, e, null, n, ee)),
            ne.push({ event: we, listeners: de }),
            Re ? (we.data = Re) : ((Re = Bo(n)), Re !== null && (we.data = Re)))),
          (Re = n0 ? l0(e, n) : a0(e, n)) &&
            ((we = Vu(k, 'onBeforeInput')),
            0 < we.length &&
              ((de = new _o('onBeforeInput', 'beforeinput', null, n, ee)),
              ne.push({ event: de, listeners: we }),
              (de.data = Re))),
          F0(ne, e, k, n, ee));
      }
      xm(ne, t);
    });
  }
  function Ei(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Vu(e, t) {
    for (var n = t + 'Capture', l = []; e !== null; ) {
      var i = e,
        u = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          u === null ||
          ((i = qa(e, n)),
          i != null && l.unshift(Ei(e, i, u)),
          (i = qa(e, t)),
          i != null && l.push(Ei(e, i, u))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function P0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Em(e, t, n, l, i) {
    for (var u = t._reactName, E = []; n !== null && n !== l; ) {
      var T = n,
        j = T.alternate,
        k = T.stateNode;
      if (((T = T.tag), j !== null && j === l)) break;
      ((T !== 5 && T !== 26 && T !== 27) ||
        k === null ||
        ((j = k),
        i
          ? ((k = qa(n, u)), k != null && E.unshift(Ei(n, k, j)))
          : i || ((k = qa(n, u)), k != null && E.push(Ei(n, k, j)))),
        (n = n.return));
    }
    E.length !== 0 && e.push({ event: t, listeners: E });
  }
  var eg = /\r\n?/g,
    tg = /\u0000|\uFFFD/g;
  function bm(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        eg,
        `
`
      )
      .replace(tg, '');
  }
  function Cm(e, t) {
    return ((t = bm(t)), bm(e) === t);
  }
  function Ke(e, t, n, l, i, u) {
    switch (n) {
      case 'children':
        typeof l == 'string'
          ? t === 'body' || (t === 'textarea' && l === '') || aa(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && t !== 'body' && aa(e, '' + l);
        break;
      case 'className':
        Zi(e, 'class', l);
        break;
      case 'tabIndex':
        Zi(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Zi(e, n, l);
        break;
      case 'style':
        bo(e, l, u);
        break;
      case 'data':
        if (t !== 'object') {
          Zi(e, 'data', l);
          break;
        }
      case 'src':
      case 'href':
        if (l === '' && (t !== 'a' || n !== 'href')) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == 'function' || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        ((l = ki('' + l)), e.setAttribute(n, l));
        break;
      case 'action':
      case 'formAction':
        if (typeof l == 'function') {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == 'function' &&
            (n === 'formAction'
              ? (t !== 'input' && Ke(e, t, 'name', i.name, i, null),
                Ke(e, t, 'formEncType', i.formEncType, i, null),
                Ke(e, t, 'formMethod', i.formMethod, i, null),
                Ke(e, t, 'formTarget', i.formTarget, i, null))
              : (Ke(e, t, 'encType', i.encType, i, null),
                Ke(e, t, 'method', i.method, i, null),
                Ke(e, t, 'target', i.target, i, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        ((l = ki('' + l)), e.setAttribute(n, l));
        break;
      case 'onClick':
        l != null && (e.onclick = _n);
        break;
      case 'onScroll':
        l != null && Oe('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Oe('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(y(61));
          if (((n = l.__html), n != null)) {
            if (i.children != null) throw Error(y(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'multiple':
        e.multiple = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'muted':
        e.muted = l && typeof l != 'function' && typeof l != 'symbol';
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
        if (l == null || typeof l == 'function' || typeof l == 'boolean' || typeof l == 'symbol') {
          e.removeAttribute('xlink:href');
          break;
        }
        ((n = ki('' + l)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        l != null && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(n, '' + l)
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
        l && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(n, '')
          : e.removeAttribute(n);
        break;
      case 'capture':
      case 'download':
        l === !0
          ? e.setAttribute(n, '')
          : l !== !1 && l != null && typeof l != 'function' && typeof l != 'symbol'
            ? e.setAttribute(n, l)
            : e.removeAttribute(n);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        l != null && typeof l != 'function' && typeof l != 'symbol' && !isNaN(l) && 1 <= l
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case 'rowSpan':
      case 'start':
        l == null || typeof l == 'function' || typeof l == 'symbol' || isNaN(l)
          ? e.removeAttribute(n)
          : e.setAttribute(n, l);
        break;
      case 'popover':
        (Oe('beforetoggle', e), Oe('toggle', e), Qi(e, 'popover', l));
        break;
      case 'xlinkActuate':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        An(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        An(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        An(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        Qi(e, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = Ov.get(n) || n), Qi(e, n, l));
    }
  }
  function oc(e, t, n, l, i, u) {
    switch (n) {
      case 'style':
        bo(e, l, u);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(y(61));
          if (((n = l.__html), n != null)) {
            if (i.children != null) throw Error(y(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'children':
        typeof l == 'string'
          ? aa(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && aa(e, '' + l);
        break;
      case 'onScroll':
        l != null && Oe('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Oe('scrollend', e);
        break;
      case 'onClick':
        l != null && (e.onclick = _n);
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
        if (!mo.hasOwnProperty(n))
          e: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((i = n.endsWith('Capture')),
              (t = n.slice(2, i ? n.length - 7 : void 0)),
              (u = e[tt] || null),
              (u = u != null ? u[n] : null),
              typeof u == 'function' && e.removeEventListener(t, u, i),
              typeof l == 'function')
            ) {
              (typeof u != 'function' &&
                u !== null &&
                (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, i));
              break e;
            }
            n in e ? (e[n] = l) : l === !0 ? e.setAttribute(n, '') : Qi(e, n, l);
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
        (Oe('error', e), Oe('load', e));
        var l = !1,
          i = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var E = n[u];
            if (E != null)
              switch (u) {
                case 'src':
                  l = !0;
                  break;
                case 'srcSet':
                  i = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(y(137, t));
                default:
                  Ke(e, t, u, E, n, null);
              }
          }
        (i && Ke(e, t, 'srcSet', n.srcSet, n, null), l && Ke(e, t, 'src', n.src, n, null));
        return;
      case 'input':
        Oe('invalid', e);
        var T = (u = E = i = null),
          j = null,
          k = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var ee = n[l];
            if (ee != null)
              switch (l) {
                case 'name':
                  i = ee;
                  break;
                case 'type':
                  E = ee;
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
                  T = ee;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (ee != null) throw Error(y(137, t));
                  break;
                default:
                  Ke(e, t, l, ee, n, null);
              }
          }
        po(e, u, T, j, k, E, i, !1);
        return;
      case 'select':
        (Oe('invalid', e), (l = E = u = null));
        for (i in n)
          if (n.hasOwnProperty(i) && ((T = n[i]), T != null))
            switch (i) {
              case 'value':
                u = T;
                break;
              case 'defaultValue':
                E = T;
                break;
              case 'multiple':
                l = T;
              default:
                Ke(e, t, i, T, n, null);
            }
        ((t = u),
          (n = E),
          (e.multiple = !!l),
          t != null ? la(e, !!l, t, !1) : n != null && la(e, !!l, n, !0));
        return;
      case 'textarea':
        (Oe('invalid', e), (u = i = l = null));
        for (E in n)
          if (n.hasOwnProperty(E) && ((T = n[E]), T != null))
            switch (E) {
              case 'value':
                l = T;
                break;
              case 'defaultValue':
                i = T;
                break;
              case 'children':
                u = T;
                break;
              case 'dangerouslySetInnerHTML':
                if (T != null) throw Error(y(91));
                break;
              default:
                Ke(e, t, E, T, n, null);
            }
        So(e, l, i, u);
        return;
      case 'option':
        for (j in n)
          if (n.hasOwnProperty(j) && ((l = n[j]), l != null))
            switch (j) {
              case 'selected':
                e.selected = l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                Ke(e, t, j, l, n, null);
            }
        return;
      case 'dialog':
        (Oe('beforetoggle', e), Oe('toggle', e), Oe('cancel', e), Oe('close', e));
        break;
      case 'iframe':
      case 'object':
        Oe('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Si.length; l++) Oe(Si[l], e);
        break;
      case 'image':
        (Oe('error', e), Oe('load', e));
        break;
      case 'details':
        Oe('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (Oe('error', e), Oe('load', e));
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
          if (n.hasOwnProperty(k) && ((l = n[k]), l != null))
            switch (k) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(y(137, t));
              default:
                Ke(e, t, k, l, n, null);
            }
        return;
      default:
        if (Mr(t)) {
          for (ee in n)
            n.hasOwnProperty(ee) && ((l = n[ee]), l !== void 0 && oc(e, t, ee, l, n, void 0));
          return;
        }
    }
    for (T in n) n.hasOwnProperty(T) && ((l = n[T]), l != null && Ke(e, t, T, l, n, null));
  }
  function ng(e, t, n, l) {
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
          E = null,
          T = null,
          j = null,
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
                j = ne;
              default:
                l.hasOwnProperty(W) || Ke(e, t, W, null, l, ne);
            }
        }
        for (var J in l) {
          var W = l[J];
          if (((ne = n[J]), l.hasOwnProperty(J) && (W != null || ne != null)))
            switch (J) {
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
                E = W;
                break;
              case 'defaultValue':
                T = W;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (W != null) throw Error(y(137, t));
                break;
              default:
                W !== ne && Ke(e, t, J, W, l, ne);
            }
        }
        br(e, E, T, j, k, ee, u, i);
        return;
      case 'select':
        W = E = T = J = null;
        for (u in n)
          if (((j = n[u]), n.hasOwnProperty(u) && j != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                W = j;
              default:
                l.hasOwnProperty(u) || Ke(e, t, u, null, l, j);
            }
        for (i in l)
          if (((u = l[i]), (j = n[i]), l.hasOwnProperty(i) && (u != null || j != null)))
            switch (i) {
              case 'value':
                J = u;
                break;
              case 'defaultValue':
                T = u;
                break;
              case 'multiple':
                E = u;
              default:
                u !== j && Ke(e, t, i, u, l, j);
            }
        ((t = T),
          (n = E),
          (l = W),
          J != null
            ? la(e, !!n, J, !1)
            : !!l != !!n && (t != null ? la(e, !!n, t, !0) : la(e, !!n, n ? [] : '', !1)));
        return;
      case 'textarea':
        W = J = null;
        for (T in n)
          if (((i = n[T]), n.hasOwnProperty(T) && i != null && !l.hasOwnProperty(T)))
            switch (T) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Ke(e, t, T, null, l, i);
            }
        for (E in l)
          if (((i = l[E]), (u = n[E]), l.hasOwnProperty(E) && (i != null || u != null)))
            switch (E) {
              case 'value':
                J = i;
                break;
              case 'defaultValue':
                W = i;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (i != null) throw Error(y(91));
                break;
              default:
                i !== u && Ke(e, t, E, i, l, u);
            }
        xo(e, J, W);
        return;
      case 'option':
        for (var oe in n)
          if (((J = n[oe]), n.hasOwnProperty(oe) && J != null && !l.hasOwnProperty(oe)))
            switch (oe) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                Ke(e, t, oe, null, l, J);
            }
        for (j in l)
          if (((J = l[j]), (W = n[j]), l.hasOwnProperty(j) && J !== W && (J != null || W != null)))
            switch (j) {
              case 'selected':
                e.selected = J && typeof J != 'function' && typeof J != 'symbol';
                break;
              default:
                Ke(e, t, j, J, l, W);
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
          ((J = n[ye]),
            n.hasOwnProperty(ye) && J != null && !l.hasOwnProperty(ye) && Ke(e, t, ye, null, l, J));
        for (k in l)
          if (((J = l[k]), (W = n[k]), l.hasOwnProperty(k) && J !== W && (J != null || W != null)))
            switch (k) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (J != null) throw Error(y(137, t));
                break;
              default:
                Ke(e, t, k, J, l, W);
            }
        return;
      default:
        if (Mr(t)) {
          for (var ke in n)
            ((J = n[ke]),
              n.hasOwnProperty(ke) &&
                J !== void 0 &&
                !l.hasOwnProperty(ke) &&
                oc(e, t, ke, void 0, l, J));
          for (ee in l)
            ((J = l[ee]),
              (W = n[ee]),
              !l.hasOwnProperty(ee) ||
                J === W ||
                (J === void 0 && W === void 0) ||
                oc(e, t, ee, J, l, W));
          return;
        }
    }
    for (var Q in n)
      ((J = n[Q]),
        n.hasOwnProperty(Q) && J != null && !l.hasOwnProperty(Q) && Ke(e, t, Q, null, l, J));
    for (ne in l)
      ((J = l[ne]),
        (W = n[ne]),
        !l.hasOwnProperty(ne) || J === W || (J == null && W == null) || Ke(e, t, ne, J, l, W));
  }
  function Mm(e) {
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
  function lg() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType('resource'), l = 0;
        l < n.length;
        l++
      ) {
        var i = n[l],
          u = i.transferSize,
          E = i.initiatorType,
          T = i.duration;
        if (u && T && Mm(E)) {
          for (E = 0, T = i.responseEnd, l += 1; l < n.length; l++) {
            var j = n[l],
              k = j.startTime;
            if (k > T) break;
            var ee = j.transferSize,
              ne = j.initiatorType;
            ee && Mm(ne) && ((j = j.responseEnd), (E += ee * (j < T ? 1 : (T - k) / (j - k))));
          }
          if ((--l, (t += (8 * (u + E)) / (i.duration / 1e3)), e++, 10 < e)) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && ((e = navigator.connection.downlink), typeof e == 'number')
      ? e
      : 5;
  }
  var fc = null,
    dc = null;
  function qu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Tm(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Rm(e, t) {
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
  function mc(e, t) {
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
  var hc = null;
  function ag() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === hc ? !1 : ((hc = e), !0)) : ((hc = null), !1);
  }
  var Am = typeof setTimeout == 'function' ? setTimeout : void 0,
    ig = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    _m = typeof Promise == 'function' ? Promise : void 0,
    ug =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof _m < 'u'
          ? function (e) {
              return _m.resolve(null).then(e).catch(rg);
            }
          : Am;
  function rg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function xl(e) {
    return e === 'head';
  }
  function Om(e, t) {
    var n = t,
      l = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === '/$' || n === '/&')) {
          if (l === 0) {
            (e.removeChild(i), Ua(t));
            return;
          }
          l--;
        } else if (n === '$' || n === '$?' || n === '$~' || n === '$!' || n === '&') l++;
        else if (n === 'html') bi(e.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = e.ownerDocument.head), bi(n));
          for (var u = n.firstChild; u; ) {
            var E = u.nextSibling,
              T = u.nodeName;
            (u[Ya] ||
              T === 'SCRIPT' ||
              T === 'STYLE' ||
              (T === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(u),
              (u = E));
          }
        } else n === 'body' && bi(e.ownerDocument.body);
      n = i;
    } while (n);
    Ua(t);
  }
  function Dm(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
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
        l && l.nodeType === 8)
      )
        if (((n = l.data), n === '/$')) {
          if (e === 0) break;
          e--;
        } else (n !== '$' && n !== '$?' && n !== '$~' && n !== '$!') || e++;
      n = l;
    } while (n);
  }
  function vc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (vc(n), Sr(n));
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
  function sg(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (l) {
        if (!e[Ya])
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
      if (((e = rn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function cg(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) ||
        ((e = rn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function wm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
        ((e = rn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function gc(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function yc(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
  }
  function og(e, t) {
    var n = e.ownerDocument;
    if (e.data === '$~') e._reactRetry = t;
    else if (e.data !== '$?' || n.readyState !== 'loading') t();
    else {
      var l = function () {
        (t(), n.removeEventListener('DOMContentLoaded', l));
      };
      (n.addEventListener('DOMContentLoaded', l), (e._reactRetry = l));
    }
  }
  function rn(e) {
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
  var pc = null;
  function zm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '/$' || n === '/&') {
          if (t === 0) return rn(e.nextSibling);
          t--;
        } else (n !== '$' && n !== '$!' && n !== '$?' && n !== '$~' && n !== '&') || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Nm(e) {
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
  function Bm(e, t, n) {
    switch (((t = qu(n)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(y(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(y(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(y(454));
        return e;
      default:
        throw Error(y(451));
    }
  }
  function bi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Sr(e);
  }
  var sn = new Map(),
    Um = new Set();
  function Xu(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Qn = N.d;
  N.d = { f: fg, r: dg, D: mg, C: hg, L: vg, m: gg, X: pg, S: yg, M: xg };
  function fg() {
    var e = Qn.f(),
      t = Bu();
    return e || t;
  }
  function dg(e) {
    var t = ea(e);
    t !== null && t.tag === 5 && t.type === 'form' ? If(t) : Qn.r(e);
  }
  var za = typeof document > 'u' ? null : document;
  function Hm(e, t, n) {
    var l = za;
    if (l && typeof t == 'string' && t) {
      var i = Pt(t);
      ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof n == 'string' && (i += '[crossorigin="' + n + '"]'),
        Um.has(i) ||
          (Um.add(i),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(i) === null &&
            ((t = l.createElement('link')), Rt(t, 'link', e), St(t), l.head.appendChild(t))));
    }
  }
  function mg(e) {
    (Qn.D(e), Hm('dns-prefetch', e, null));
  }
  function hg(e, t) {
    (Qn.C(e, t), Hm('preconnect', e, t));
  }
  function vg(e, t, n) {
    Qn.L(e, t, n);
    var l = za;
    if (l && e && t) {
      var i = 'link[rel="preload"][as="' + Pt(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((i += '[imagesrcset="' + Pt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (i += '[imagesizes="' + Pt(n.imageSizes) + '"]'))
        : (i += '[href="' + Pt(e) + '"]');
      var u = i;
      switch (t) {
        case 'style':
          u = Na(e);
          break;
        case 'script':
          u = Ba(e);
      }
      sn.has(u) ||
        ((e = h(
          { rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t },
          n
        )),
        sn.set(u, e),
        l.querySelector(i) !== null ||
          (t === 'style' && l.querySelector(Ci(u))) ||
          (t === 'script' && l.querySelector(Mi(u))) ||
          ((t = l.createElement('link')), Rt(t, 'link', e), St(t), l.head.appendChild(t)));
    }
  }
  function gg(e, t) {
    Qn.m(e, t);
    var n = za;
    if (n && e) {
      var l = t && typeof t.as == 'string' ? t.as : 'script',
        i = 'link[rel="modulepreload"][as="' + Pt(l) + '"][href="' + Pt(e) + '"]',
        u = i;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Ba(e);
      }
      if (
        !sn.has(u) &&
        ((e = h({ rel: 'modulepreload', href: e }, t)), sn.set(u, e), n.querySelector(i) === null)
      ) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(Mi(u))) return;
        }
        ((l = n.createElement('link')), Rt(l, 'link', e), St(l), n.head.appendChild(l));
      }
    }
  }
  function yg(e, t, n) {
    Qn.S(e, t, n);
    var l = za;
    if (l && e) {
      var i = ta(l).hoistableStyles,
        u = Na(e);
      t = t || 'default';
      var E = i.get(u);
      if (!E) {
        var T = { loading: 0, preload: null };
        if ((E = l.querySelector(Ci(u)))) T.loading = 5;
        else {
          ((e = h({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = sn.get(u)) && xc(e, n));
          var j = (E = l.createElement('link'));
          (St(j),
            Rt(j, 'link', e),
            (j._p = new Promise(function (k, ee) {
              ((j.onload = k), (j.onerror = ee));
            })),
            j.addEventListener('load', function () {
              T.loading |= 1;
            }),
            j.addEventListener('error', function () {
              T.loading |= 2;
            }),
            (T.loading |= 4),
            Qu(E, t, l));
        }
        ((E = { type: 'stylesheet', instance: E, count: 1, state: T }), i.set(u, E));
      }
    }
  }
  function pg(e, t) {
    Qn.X(e, t);
    var n = za;
    if (n && e) {
      var l = ta(n).hoistableScripts,
        i = Ba(e),
        u = l.get(i);
      u ||
        ((u = n.querySelector(Mi(i))),
        u ||
          ((e = h({ src: e, async: !0 }, t)),
          (t = sn.get(i)) && Sc(e, t),
          (u = n.createElement('script')),
          St(u),
          Rt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        l.set(i, u));
    }
  }
  function xg(e, t) {
    Qn.M(e, t);
    var n = za;
    if (n && e) {
      var l = ta(n).hoistableScripts,
        i = Ba(e),
        u = l.get(i);
      u ||
        ((u = n.querySelector(Mi(i))),
        u ||
          ((e = h({ src: e, async: !0, type: 'module' }, t)),
          (t = sn.get(i)) && Sc(e, t),
          (u = n.createElement('script')),
          St(u),
          Rt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        l.set(i, u));
    }
  }
  function Lm(e, t, n, l) {
    var i = (i = ce.current) ? Xu(i) : null;
    if (!i) throw Error(y(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = Na(n.href)),
            (n = ta(i).hoistableStyles),
            (l = n.get(t)),
            l || ((l = { type: 'style', instance: null, count: 0, state: null }), n.set(t, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          n.rel === 'stylesheet' &&
          typeof n.href == 'string' &&
          typeof n.precedence == 'string'
        ) {
          e = Na(n.href);
          var u = ta(i).hoistableStyles,
            E = u.get(e);
          if (
            (E ||
              ((i = i.ownerDocument || i),
              (E = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, E),
              (u = i.querySelector(Ci(e))) && !u._p && ((E.instance = u), (E.state.loading = 5)),
              sn.has(e) ||
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
                sn.set(e, n),
                u || Sg(i, e, n, E.state))),
            t && l === null)
          )
            throw Error(y(528, ''));
          return E;
        }
        if (t && l !== null) throw Error(y(529, ''));
        return null;
      case 'script':
        return (
          (t = n.async),
          (n = n.src),
          typeof n == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = Ba(n)),
              (n = ta(i).hoistableScripts),
              (l = n.get(t)),
              l || ((l = { type: 'script', instance: null, count: 0, state: null }), n.set(t, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(y(444, e));
    }
  }
  function Na(e) {
    return 'href="' + Pt(e) + '"';
  }
  function Ci(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function jm(e) {
    return h({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function Sg(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (l.loading = 1)
      : ((t = e.createElement('link')),
        (l.preload = t),
        t.addEventListener('load', function () {
          return (l.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (l.loading |= 2);
        }),
        Rt(t, 'link', n),
        St(t),
        e.head.appendChild(t));
  }
  function Ba(e) {
    return '[src="' + Pt(e) + '"]';
  }
  function Mi(e) {
    return 'script[async]' + e;
  }
  function Gm(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + Pt(n.href) + '"]');
          if (l) return ((t.instance = l), St(l), l);
          var i = h({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            St(l),
            Rt(l, 'style', i),
            Qu(l, n.precedence, e),
            (t.instance = l)
          );
        case 'stylesheet':
          i = Na(n.href);
          var u = e.querySelector(Ci(i));
          if (u) return ((t.state.loading |= 4), (t.instance = u), St(u), u);
          ((l = jm(n)),
            (i = sn.get(i)) && xc(l, i),
            (u = (e.ownerDocument || e).createElement('link')),
            St(u));
          var E = u;
          return (
            (E._p = new Promise(function (T, j) {
              ((E.onload = T), (E.onerror = j));
            })),
            Rt(u, 'link', l),
            (t.state.loading |= 4),
            Qu(u, n.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = Ba(n.src)),
            (i = e.querySelector(Mi(u)))
              ? ((t.instance = i), St(i), i)
              : ((l = n),
                (i = sn.get(u)) && ((l = h({}, n)), Sc(l, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement('script')),
                St(i),
                Rt(i, 'link', l),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case 'void':
          return null;
        default:
          throw Error(y(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), Qu(l, n.precedence, e));
    return t.instance;
  }
  function Qu(e, t, n) {
    for (
      var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        i = l.length ? l[l.length - 1] : null,
        u = i,
        E = 0;
      E < l.length;
      E++
    ) {
      var T = l[E];
      if (T.dataset.precedence === t) u = T;
      else if (u !== i) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function xc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Sc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Zu = null;
  function Ym(e, t, n) {
    if (Zu === null) {
      var l = new Map(),
        i = (Zu = new Map());
      i.set(n, l);
    } else ((i = Zu), (l = i.get(n)), l || ((l = new Map()), i.set(n, l)));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var u = n[i];
      if (
        !(u[Ya] || u[We] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var E = u.getAttribute(t) || '';
        E = e + E;
        var T = l.get(E);
        T ? T.push(u) : l.set(E, [u]);
      }
    }
    return l;
  }
  function Vm(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null));
  }
  function Eg(e, t, n) {
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
  function qm(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function bg(e, t, n, l) {
    if (
      n.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var i = Na(l.href),
          u = t.querySelector(Ci(i));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = Ku.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = u),
            St(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (l = jm(l)),
          (i = sn.get(i)) && xc(l, i),
          (u = u.createElement('link')),
          St(u));
        var E = u;
        ((E._p = new Promise(function (T, j) {
          ((E.onload = T), (E.onerror = j));
        })),
          Rt(u, 'link', l),
          (n.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Ku.bind(e)),
          t.addEventListener('load', n),
          t.addEventListener('error', n)));
    }
  }
  var Ec = 0;
  function Cg(e, t) {
    return (
      e.stylesheets && e.count === 0 && Ju(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((e.stylesheets && Ju(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Ec === 0 && (Ec = 62500 * lg());
            var i = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 && (e.stylesheets && Ju(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > Ec ? 50 : 800) + t
            );
            return (
              (e.unsuspend = n),
              function () {
                ((e.unsuspend = null), clearTimeout(l), clearTimeout(i));
              }
            );
          }
        : null
    );
  }
  function Ku() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Ju(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var ku = null;
  function Ju(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (ku = new Map()), t.forEach(Mg, e), (ku = null), Ku.call(e)));
  }
  function Mg(e, t) {
    if (!(t.state.loading & 4)) {
      var n = ku.get(e);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), ku.set(e, n));
        for (
          var i = e.querySelectorAll('link[data-precedence],style[data-precedence]'), u = 0;
          u < i.length;
          u++
        ) {
          var E = i[u];
          (E.nodeName === 'LINK' || E.getAttribute('media') !== 'not all') &&
            (n.set(E.dataset.precedence, E), (l = E));
        }
        l && n.set(null, l);
      }
      ((i = t.instance),
        (E = i.getAttribute('data-precedence')),
        (u = n.get(E) || l),
        u === l && n.set(null, i),
        n.set(E, i),
        this.count++,
        (l = Ku.bind(this)),
        i.addEventListener('load', l),
        i.addEventListener('error', l),
        u
          ? u.parentNode.insertBefore(i, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Ti = {
    $$typeof: U,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0,
  };
  function Tg(e, t, n, l, i, u, E, T, j) {
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
      (this.expirationTimes = me(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = me(0)),
      (this.hiddenUpdates = me(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = i),
      (this.onCaughtError = u),
      (this.onRecoverableError = E),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = j),
      (this.incompleteTransitions = new Map()));
  }
  function Xm(e, t, n, l, i, u, E, T, j, k, ee, ne) {
    return (
      (e = new Tg(e, t, n, E, j, k, ee, ne, T)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = Qt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = es()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: l, isDehydrated: n, cache: t }),
      as(u),
      e
    );
  }
  function Qm(e) {
    return e ? ((e = fa), e) : fa;
  }
  function Zm(e, t, n, l, i, u) {
    ((i = Qm(i)),
      l.context === null ? (l.context = i) : (l.pendingContext = i),
      (l = sl(t)),
      (l.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (l.callback = u),
      (n = cl(e, l, t)),
      n !== null && (Gt(n, e, t), li(n, e, t)));
  }
  function Km(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function bc(e, t) {
    (Km(e, t), (e = e.alternate) && Km(e, t));
  }
  function km(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Bl(e, 67108864);
      (t !== null && Gt(t, e, 67108864), bc(e, 67108864));
    }
  }
  function Jm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ft();
      t = dt(t);
      var n = Bl(e, t);
      (n !== null && Gt(n, e, t), bc(e, t));
    }
  }
  var Fu = !0;
  function Rg(e, t, n, l) {
    var i = A.T;
    A.T = null;
    var u = N.p;
    try {
      ((N.p = 2), Cc(e, t, n, l));
    } finally {
      ((N.p = u), (A.T = i));
    }
  }
  function Ag(e, t, n, l) {
    var i = A.T;
    A.T = null;
    var u = N.p;
    try {
      ((N.p = 8), Cc(e, t, n, l));
    } finally {
      ((N.p = u), (A.T = i));
    }
  }
  function Cc(e, t, n, l) {
    if (Fu) {
      var i = Mc(l);
      if (i === null) (cc(e, t, l, $u, n), $m(e, l));
      else if (Og(i, e, t, n, l)) l.stopPropagation();
      else if (($m(e, l), t & 4 && -1 < _g.indexOf(e))) {
        for (; i !== null; ) {
          var u = ea(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var E = Rn(u.pendingLanes);
                  if (E !== 0) {
                    var T = u;
                    for (T.pendingLanes |= 2, T.entangledLanes |= 2; E; ) {
                      var j = 1 << (31 - wt(E));
                      ((T.entanglements[1] |= j), (E &= ~j));
                    }
                    (bn(u), (Ge & 6) === 0 && ((zu = it() + 500), xi(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((T = Bl(u, 2)), T !== null && Gt(T, u, 2), Bu(), bc(u, 2));
            }
          if (((u = Mc(l)), u === null && cc(e, t, l, $u, n), u === i)) break;
          i = u;
        }
        i !== null && l.stopPropagation();
      } else cc(e, t, l, null, n);
    }
  }
  function Mc(e) {
    return ((e = Rr(e)), Tc(e));
  }
  var $u = null;
  function Tc(e) {
    if ((($u = null), (e = Pl(e)), e !== null)) {
      var t = a(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = f(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = m(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (($u = e), null);
  }
  function Fm(e) {
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
        switch (_l()) {
          case Mn:
            return 2;
          case qt:
            return 8;
          case Wt:
          case Tn:
            return 32;
          case yn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Rc = !1,
    Sl = null,
    El = null,
    bl = null,
    Ri = new Map(),
    Ai = new Map(),
    Cl = [],
    _g =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function $m(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Sl = null;
        break;
      case 'dragenter':
      case 'dragleave':
        El = null;
        break;
      case 'mouseover':
      case 'mouseout':
        bl = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Ri.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Ai.delete(t.pointerId);
    }
  }
  function _i(e, t, n, l, i, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [i],
        }),
        t !== null && ((t = ea(t)), t !== null && km(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function Og(e, t, n, l, i) {
    switch (t) {
      case 'focusin':
        return ((Sl = _i(Sl, e, t, n, l, i)), !0);
      case 'dragenter':
        return ((El = _i(El, e, t, n, l, i)), !0);
      case 'mouseover':
        return ((bl = _i(bl, e, t, n, l, i)), !0);
      case 'pointerover':
        var u = i.pointerId;
        return (Ri.set(u, _i(Ri.get(u) || null, e, t, n, l, i)), !0);
      case 'gotpointercapture':
        return ((u = i.pointerId), Ai.set(u, _i(Ai.get(u) || null, e, t, n, l, i)), !0);
    }
    return !1;
  }
  function Wm(e) {
    var t = Pl(e.target);
    if (t !== null) {
      var n = a(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = f(n)), t !== null)) {
            ((e.blockedOn = t),
              mt(e.priority, function () {
                Jm(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = m(n)), t !== null)) {
            ((e.blockedOn = t),
              mt(e.priority, function () {
                Jm(n);
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
  function Wu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Mc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((Tr = l), n.target.dispatchEvent(l), (Tr = null));
      } else return ((t = ea(n)), t !== null && km(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Im(e, t, n) {
    Wu(e) && n.delete(t);
  }
  function Dg() {
    ((Rc = !1),
      Sl !== null && Wu(Sl) && (Sl = null),
      El !== null && Wu(El) && (El = null),
      bl !== null && Wu(bl) && (bl = null),
      Ri.forEach(Im),
      Ai.forEach(Im));
  }
  function Iu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Rc || ((Rc = !0), s.unstable_scheduleCallback(s.unstable_NormalPriority, Dg)));
  }
  var Pu = null;
  function Pm(e) {
    Pu !== e &&
      ((Pu = e),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        Pu === e && (Pu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            i = e[t + 2];
          if (typeof l != 'function') {
            if (Tc(l || n) === null) continue;
            break;
          }
          var u = ea(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Ms(u, { pending: !0, data: i, method: n.method, action: l }, l, i));
        }
      }));
  }
  function Ua(e) {
    function t(j) {
      return Iu(j, e);
    }
    (Sl !== null && Iu(Sl, e),
      El !== null && Iu(El, e),
      bl !== null && Iu(bl, e),
      Ri.forEach(t),
      Ai.forEach(t));
    for (var n = 0; n < Cl.length; n++) {
      var l = Cl[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Cl.length && ((n = Cl[0]), n.blockedOn === null); )
      (Wm(n), n.blockedOn === null && Cl.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var i = n[l],
          u = n[l + 1],
          E = i[tt] || null;
        if (typeof u == 'function') E || Pm(n);
        else if (E) {
          var T = null;
          if (u && u.hasAttribute('formAction')) {
            if (((i = u), (E = u[tt] || null))) T = E.formAction;
            else if (Tc(i) !== null) continue;
          } else T = E.action;
          (typeof T == 'function' ? (n[l + 1] = T) : (n.splice(l, 3), (l -= 3)), Pm(n));
        }
      }
  }
  function eh() {
    function e(u) {
      u.canIntercept &&
        u.info === 'react-transition' &&
        u.intercept({
          handler: function () {
            return new Promise(function (E) {
              return (i = E);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function t() {
      (i !== null && (i(), (i = null)), l || setTimeout(n, 20));
    }
    function n() {
      if (!l && !navigation.transition) {
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
      var l = !1,
        i = null;
      return (
        navigation.addEventListener('navigate', e),
        navigation.addEventListener('navigatesuccess', t),
        navigation.addEventListener('navigateerror', t),
        setTimeout(n, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener('navigate', e),
            navigation.removeEventListener('navigatesuccess', t),
            navigation.removeEventListener('navigateerror', t),
            i !== null && (i(), (i = null)));
        }
      );
    }
  }
  function Ac(e) {
    this._internalRoot = e;
  }
  ((er.prototype.render = Ac.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(y(409));
      var n = t.current,
        l = Ft();
      Zm(n, l, e, t, null, null);
    }),
    (er.prototype.unmount = Ac.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Zm(e.current, 2, null, e, null, null), Bu(), (t[zt] = null));
        }
      }));
  function er(e) {
    this._internalRoot = e;
  }
  er.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = At();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Cl.length && t !== 0 && t < Cl[n].priority; n++);
      (Cl.splice(n, 0, e), n === 0 && Wm(e));
    }
  };
  var th = S.version;
  if (th !== '19.2.5') throw Error(y(527, th, '19.2.5'));
  N.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(y(188))
        : ((e = Object.keys(e).join(',')), Error(y(268, e)));
    return ((e = v(t)), (e = e !== null ? d(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var wg = {
    bundleType: 0,
    version: '19.2.5',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: A,
    reconcilerVersion: '19.2.5',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!tr.isDisabled && tr.supportsFiber)
      try {
        ((Ol = tr.inject(wg)), (Dt = tr));
      } catch {}
  }
  return (
    (Di.createRoot = function (e, t) {
      if (!c(e)) throw Error(y(299));
      var n = !1,
        l = '',
        i = sd,
        u = cd,
        E = od;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (E = t.onRecoverableError)),
        (t = Xm(e, 1, !1, null, null, n, l, null, i, u, E, eh)),
        (e[zt] = t.current),
        sc(e),
        new Ac(t)
      );
    }),
    (Di.hydrateRoot = function (e, t, n) {
      if (!c(e)) throw Error(y(299));
      var l = !1,
        i = '',
        u = sd,
        E = cd,
        T = od,
        j = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (E = n.onCaughtError),
          n.onRecoverableError !== void 0 && (T = n.onRecoverableError),
          n.formState !== void 0 && (j = n.formState)),
        (t = Xm(e, 1, !0, t, n ?? null, l, i, j, u, E, T, eh)),
        (t.context = Qm(null)),
        (n = t.current),
        (l = Ft()),
        (l = dt(l)),
        (i = sl(l)),
        (i.callback = null),
        cl(n, i, l),
        (n = l),
        (t.current.lanes = n),
        ge(t, n),
        bn(t),
        (e[zt] = t.current),
        sc(e),
        new er(t)
      );
    }),
    (Di.version = '19.2.5'),
    Di
  );
}
var dh;
function qg() {
  if (dh) return Oc.exports;
  dh = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (S) {
        console.error(S);
      }
  }
  return (s(), (Oc.exports = Vg()), Oc.exports);
}
var Xg = qg(),
  H = Ic();
/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var mh = 'popstate';
function hh(s) {
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
function Qg(s = {}) {
  function S(y, c) {
    var v;
    let a = (v = c.state) == null ? void 0 : v.masked,
      { pathname: f, search: m, hash: o } = a || y.location;
    return Kc(
      '',
      { pathname: f, search: m, hash: o },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || 'default',
      a
        ? { pathname: y.location.pathname, search: y.location.search, hash: y.location.hash }
        : void 0
    );
  }
  function b(y, c) {
    return typeof c == 'string' ? c : ji(c);
  }
  return Kg(S, b, null, s);
}
function at(s, S) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(S);
}
function Cn(s, S) {
  if (!s) {
    typeof console < 'u' && console.warn(S);
    try {
      throw new Error(S);
    } catch {}
  }
}
function Zg() {
  return Math.random().toString(36).substring(2, 10);
}
function vh(s, S) {
  return {
    usr: s.state,
    key: s.key,
    idx: S,
    masked: s.unstable_mask ? { pathname: s.pathname, search: s.search, hash: s.hash } : void 0,
  };
}
function Kc(s, S, b = null, y, c) {
  return {
    pathname: typeof s == 'string' ? s : s.pathname,
    search: '',
    hash: '',
    ...(typeof S == 'string' ? Ha(S) : S),
    state: b,
    key: (S && S.key) || y || Zg(),
    unstable_mask: c,
  };
}
function ji({ pathname: s = '/', search: S = '', hash: b = '' }) {
  return (
    S && S !== '?' && (s += S.charAt(0) === '?' ? S : '?' + S),
    b && b !== '#' && (s += b.charAt(0) === '#' ? b : '#' + b),
    s
  );
}
function Ha(s) {
  let S = {};
  if (s) {
    let b = s.indexOf('#');
    b >= 0 && ((S.hash = s.substring(b)), (s = s.substring(0, b)));
    let y = s.indexOf('?');
    (y >= 0 && ((S.search = s.substring(y)), (s = s.substring(0, y))), s && (S.pathname = s));
  }
  return S;
}
function Kg(s, S, b, y = {}) {
  let { window: c = document.defaultView, v5Compat: a = !1 } = y,
    f = c.history,
    m = 'POP',
    o = null,
    v = d();
  v == null && ((v = 0), f.replaceState({ ...f.state, idx: v }, ''));
  function d() {
    return (f.state || { idx: null }).idx;
  }
  function h() {
    m = 'POP';
    let C = d(),
      R = C == null ? null : C - v;
    ((v = C), o && o({ action: m, location: p.location, delta: R }));
  }
  function g(C, R) {
    m = 'PUSH';
    let w = hh(C) ? C : Kc(p.location, C, R);
    v = d() + 1;
    let U = vh(w, v),
      G = p.createHref(w.unstable_mask || w);
    try {
      f.pushState(U, '', G);
    } catch (M) {
      if (M instanceof DOMException && M.name === 'DataCloneError') throw M;
      c.location.assign(G);
    }
    a && o && o({ action: m, location: p.location, delta: 1 });
  }
  function r(C, R) {
    m = 'REPLACE';
    let w = hh(C) ? C : Kc(p.location, C, R);
    v = d();
    let U = vh(w, v),
      G = p.createHref(w.unstable_mask || w);
    (f.replaceState(U, '', G), a && o && o({ action: m, location: p.location, delta: 0 }));
  }
  function x(C) {
    return kg(C);
  }
  let p = {
    get action() {
      return m;
    },
    get location() {
      return s(c, f);
    },
    listen(C) {
      if (o) throw new Error('A history only accepts one active listener');
      return (
        c.addEventListener(mh, h),
        (o = C),
        () => {
          (c.removeEventListener(mh, h), (o = null));
        }
      );
    },
    createHref(C) {
      return S(c, C);
    },
    createURL: x,
    encodeLocation(C) {
      let R = x(C);
      return { pathname: R.pathname, search: R.search, hash: R.hash };
    },
    push: g,
    replace: r,
    go(C) {
      return f.go(C);
    },
  };
  return p;
}
function kg(s, S = !1) {
  let b = 'http://localhost';
  (typeof window < 'u' &&
    (b = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    at(b, 'No window.location.(origin|href) available to create URL'));
  let y = typeof s == 'string' ? s : ji(s);
  return ((y = y.replace(/ $/, '%20')), !S && y.startsWith('//') && (y = b + y), new URL(y, b));
}
function Uh(s, S, b = '/') {
  return Jg(s, S, b, !1);
}
function Jg(s, S, b, y) {
  let c = typeof S == 'string' ? Ha(S) : S,
    a = Wn(c.pathname || '/', b);
  if (a == null) return null;
  let f = Hh(s);
  Fg(f);
  let m = null;
  for (let o = 0; m == null && o < f.length; ++o) {
    let v = uy(a);
    m = ay(f[o], v, y);
  }
  return m;
}
function Hh(s, S = [], b = [], y = '', c = !1) {
  let a = (f, m, o = c, v) => {
    let d = {
      relativePath: v === void 0 ? f.path || '' : v,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: m,
      route: f,
    };
    if (d.relativePath.startsWith('/')) {
      if (!d.relativePath.startsWith(y) && o) return;
      (at(
        d.relativePath.startsWith(y),
        `Absolute route path "${d.relativePath}" nested under path "${y}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (d.relativePath = d.relativePath.slice(y.length)));
    }
    let h = gn([y, d.relativePath]),
      g = b.concat(d);
    (f.children &&
      f.children.length > 0 &&
      (at(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${h}".`
      ),
      Hh(f.children, S, g, h, o)),
      !(f.path == null && !f.index) && S.push({ path: h, score: ny(h, f.index), routesMeta: g }));
  };
  return (
    s.forEach((f, m) => {
      var o;
      if (f.path === '' || !((o = f.path) != null && o.includes('?'))) a(f, m);
      else for (let v of Lh(f.path)) a(f, m, !0, v);
    }),
    S
  );
}
function Lh(s) {
  let S = s.split('/');
  if (S.length === 0) return [];
  let [b, ...y] = S,
    c = b.endsWith('?'),
    a = b.replace(/\?$/, '');
  if (y.length === 0) return c ? [a, ''] : [a];
  let f = Lh(y.join('/')),
    m = [];
  return (
    m.push(...f.map((o) => (o === '' ? a : [a, o].join('/')))),
    c && m.push(...f),
    m.map((o) => (s.startsWith('/') && o === '' ? '/' : o))
  );
}
function Fg(s) {
  s.sort((S, b) =>
    S.score !== b.score
      ? b.score - S.score
      : ly(
          S.routesMeta.map((y) => y.childrenIndex),
          b.routesMeta.map((y) => y.childrenIndex)
        )
  );
}
var $g = /^:[\w-]+$/,
  Wg = 3,
  Ig = 2,
  Pg = 1,
  ey = 10,
  ty = -2,
  gh = (s) => s === '*';
function ny(s, S) {
  let b = s.split('/'),
    y = b.length;
  return (
    b.some(gh) && (y += ty),
    S && (y += Ig),
    b.filter((c) => !gh(c)).reduce((c, a) => c + ($g.test(a) ? Wg : a === '' ? Pg : ey), y)
  );
}
function ly(s, S) {
  return s.length === S.length && s.slice(0, -1).every((y, c) => y === S[c])
    ? s[s.length - 1] - S[S.length - 1]
    : 0;
}
function ay(s, S, b = !1) {
  let { routesMeta: y } = s,
    c = {},
    a = '/',
    f = [];
  for (let m = 0; m < y.length; ++m) {
    let o = y[m],
      v = m === y.length - 1,
      d = a === '/' ? S : S.slice(a.length) || '/',
      h = sr({ path: o.relativePath, caseSensitive: o.caseSensitive, end: v }, d),
      g = o.route;
    if (
      (!h &&
        v &&
        b &&
        !y[y.length - 1].route.index &&
        (h = sr({ path: o.relativePath, caseSensitive: o.caseSensitive, end: !1 }, d)),
      !h)
    )
      return null;
    (Object.assign(c, h.params),
      f.push({
        params: c,
        pathname: gn([a, h.pathname]),
        pathnameBase: oy(gn([a, h.pathnameBase])),
        route: g,
      }),
      h.pathnameBase !== '/' && (a = gn([a, h.pathnameBase])));
  }
  return f;
}
function sr(s, S) {
  typeof s == 'string' && (s = { path: s, caseSensitive: !1, end: !0 });
  let [b, y] = iy(s.path, s.caseSensitive, s.end),
    c = S.match(b);
  if (!c) return null;
  let a = c[0],
    f = a.replace(/(.)\/+$/, '$1'),
    m = c.slice(1);
  return {
    params: y.reduce((v, { paramName: d, isOptional: h }, g) => {
      if (d === '*') {
        let x = m[g] || '';
        f = a.slice(0, a.length - x.length).replace(/(.)\/+$/, '$1');
      }
      const r = m[g];
      return (h && !r ? (v[d] = void 0) : (v[d] = (r || '').replace(/%2F/g, '/')), v);
    }, {}),
    pathname: a,
    pathnameBase: f,
    pattern: s,
  };
}
function iy(s, S = !1, b = !0) {
  Cn(
    s === '*' || !s.endsWith('*') || s.endsWith('/*'),
    `Route path "${s}" will be treated as if it were "${s.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/, '/*')}".`
  );
  let y = [],
    c =
      '^' +
      s
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(/\/:([\w-]+)(\?)?/g, (f, m, o, v, d) => {
          if ((y.push({ paramName: m, isOptional: o != null }), o)) {
            let h = d.charAt(v + f.length);
            return h && h !== '/' ? '/([^\\/]*)' : '(?:/([^\\/]*))?';
          }
          return '/([^\\/]+)';
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    s.endsWith('*')
      ? (y.push({ paramName: '*' }), (c += s === '*' || s === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : b
        ? (c += '\\/*$')
        : s !== '' && s !== '/' && (c += '(?:(?=\\/|$))'),
    [new RegExp(c, S ? void 0 : 'i'), y]
  );
}
function uy(s) {
  try {
    return s
      .split('/')
      .map((S) => decodeURIComponent(S).replace(/\//g, '%2F'))
      .join('/');
  } catch (S) {
    return (
      Cn(
        !1,
        `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${S}).`
      ),
      s
    );
  }
}
function Wn(s, S) {
  if (S === '/') return s;
  if (!s.toLowerCase().startsWith(S.toLowerCase())) return null;
  let b = S.endsWith('/') ? S.length - 1 : S.length,
    y = s.charAt(b);
  return y && y !== '/' ? null : s.slice(b) || '/';
}
var ry = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function sy(s, S = '/') {
  let { pathname: b, search: y = '', hash: c = '' } = typeof s == 'string' ? Ha(s) : s,
    a;
  return (
    b ? ((b = Gh(b)), b.startsWith('/') ? (a = yh(b.substring(1), '/')) : (a = yh(b, S))) : (a = S),
    { pathname: a, search: fy(y), hash: dy(c) }
  );
}
function yh(s, S) {
  let b = cr(S).split('/');
  return (
    s.split('/').forEach((c) => {
      c === '..' ? b.length > 1 && b.pop() : c !== '.' && b.push(c);
    }),
    b.length > 1 ? b.join('/') : '/'
  );
}
function Bc(s, S, b, y) {
  return `Cannot include a '${s}' character in a manually specified \`to.${S}\` field [${JSON.stringify(y)}].  Please separate it out to the \`to.${b}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function cy(s) {
  return s.filter((S, b) => b === 0 || (S.route.path && S.route.path.length > 0));
}
function jh(s) {
  let S = cy(s);
  return S.map((b, y) => (y === S.length - 1 ? b.pathname : b.pathnameBase));
}
function Pc(s, S, b, y = !1) {
  let c;
  typeof s == 'string'
    ? (c = Ha(s))
    : ((c = { ...s }),
      at(!c.pathname || !c.pathname.includes('?'), Bc('?', 'pathname', 'search', c)),
      at(!c.pathname || !c.pathname.includes('#'), Bc('#', 'pathname', 'hash', c)),
      at(!c.search || !c.search.includes('#'), Bc('#', 'search', 'hash', c)));
  let a = s === '' || c.pathname === '',
    f = a ? '/' : c.pathname,
    m;
  if (f == null) m = b;
  else {
    let h = S.length - 1;
    if (!y && f.startsWith('..')) {
      let g = f.split('/');
      for (; g[0] === '..'; ) (g.shift(), (h -= 1));
      c.pathname = g.join('/');
    }
    m = h >= 0 ? S[h] : '/';
  }
  let o = sy(c, m),
    v = f && f !== '/' && f.endsWith('/'),
    d = (a || f === '.') && b.endsWith('/');
  return (!o.pathname.endsWith('/') && (v || d) && (o.pathname += '/'), o);
}
var Gh = (s) => s.replace(/\/\/+/g, '/'),
  gn = (s) => Gh(s.join('/')),
  cr = (s) => s.replace(/\/+$/, ''),
  oy = (s) => cr(s).replace(/^\/*/, '/'),
  fy = (s) => (!s || s === '?' ? '' : s.startsWith('?') ? s : '?' + s),
  dy = (s) => (!s || s === '#' ? '' : s.startsWith('#') ? s : '#' + s),
  my = class {
    constructor(s, S, b, y = !1) {
      ((this.status = s),
        (this.statusText = S || ''),
        (this.internal = y),
        b instanceof Error ? ((this.data = b.toString()), (this.error = b)) : (this.data = b));
    }
  };
function hy(s) {
  return (
    s != null &&
    typeof s.status == 'number' &&
    typeof s.statusText == 'string' &&
    typeof s.internal == 'boolean' &&
    'data' in s
  );
}
function vy(s) {
  let S = s.map((b) => b.route.path).filter(Boolean);
  return gn(S) || '/';
}
var Yh =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function Vh(s, S) {
  let b = s;
  if (typeof b != 'string' || !ry.test(b)) return { absoluteURL: void 0, isExternal: !1, to: b };
  let y = b,
    c = !1;
  if (Yh)
    try {
      let a = new URL(window.location.href),
        f = b.startsWith('//') ? new URL(a.protocol + b) : new URL(b),
        m = Wn(f.pathname, S);
      f.origin === a.origin && m != null ? (b = m + f.search + f.hash) : (c = !0);
    } catch {
      Cn(
        !1,
        `<Link to="${b}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: y, isExternal: c, to: b };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var qh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(qh);
var gy = ['GET', ...qh];
new Set(gy);
var La = H.createContext(null);
La.displayName = 'DataRouter';
var fr = H.createContext(null);
fr.displayName = 'DataRouterState';
var Xh = H.createContext(!1);
function yy() {
  return H.useContext(Xh);
}
var Qh = H.createContext({ isTransitioning: !1 });
Qh.displayName = 'ViewTransition';
var py = H.createContext(new Map());
py.displayName = 'Fetchers';
var xy = H.createContext(null);
xy.displayName = 'Await';
var dn = H.createContext(null);
dn.displayName = 'Navigation';
var Gi = H.createContext(null);
Gi.displayName = 'Location';
var In = H.createContext({ outlet: null, matches: [], isDataRoute: !1 });
In.displayName = 'Route';
var eo = H.createContext(null);
eo.displayName = 'RouteError';
var Zh = 'REACT_ROUTER_ERROR',
  Sy = 'REDIRECT',
  Ey = 'ROUTE_ERROR_RESPONSE';
function by(s) {
  if (s.startsWith(`${Zh}:${Sy}:{`))
    try {
      let S = JSON.parse(s.slice(28));
      if (
        typeof S == 'object' &&
        S &&
        typeof S.status == 'number' &&
        typeof S.statusText == 'string' &&
        typeof S.location == 'string' &&
        typeof S.reloadDocument == 'boolean' &&
        typeof S.replace == 'boolean'
      )
        return S;
    } catch {}
}
function Cy(s) {
  if (s.startsWith(`${Zh}:${Ey}:{`))
    try {
      let S = JSON.parse(s.slice(40));
      if (
        typeof S == 'object' &&
        S &&
        typeof S.status == 'number' &&
        typeof S.statusText == 'string'
      )
        return new my(S.status, S.statusText, S.data);
    } catch {}
}
function My(s, { relative: S } = {}) {
  at(Yi(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: b, navigator: y } = H.useContext(dn),
    { hash: c, pathname: a, search: f } = Vi(s, { relative: S }),
    m = a;
  return (
    b !== '/' && (m = a === '/' ? b : gn([b, a])),
    y.createHref({ pathname: m, search: f, hash: c })
  );
}
function Yi() {
  return H.useContext(Gi) != null;
}
function Pn() {
  return (
    at(Yi(), 'useLocation() may be used only in the context of a <Router> component.'),
    H.useContext(Gi).location
  );
}
var Kh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function kh(s) {
  H.useContext(dn).static || H.useLayoutEffect(s);
}
function Ty() {
  let { isDataRoute: s } = H.useContext(In);
  return s ? jy() : Ry();
}
function Ry() {
  at(Yi(), 'useNavigate() may be used only in the context of a <Router> component.');
  let s = H.useContext(La),
    { basename: S, navigator: b } = H.useContext(dn),
    { matches: y } = H.useContext(In),
    { pathname: c } = Pn(),
    a = JSON.stringify(jh(y)),
    f = H.useRef(!1);
  return (
    kh(() => {
      f.current = !0;
    }),
    H.useCallback(
      (o, v = {}) => {
        if ((Cn(f.current, Kh), !f.current)) return;
        if (typeof o == 'number') {
          b.go(o);
          return;
        }
        let d = Pc(o, JSON.parse(a), c, v.relative === 'path');
        (s == null && S !== '/' && (d.pathname = d.pathname === '/' ? S : gn([S, d.pathname])),
          (v.replace ? b.replace : b.push)(d, v.state, v));
      },
      [S, b, a, c, s]
    )
  );
}
H.createContext(null);
function Vi(s, { relative: S } = {}) {
  let { matches: b } = H.useContext(In),
    { pathname: y } = Pn(),
    c = JSON.stringify(jh(b));
  return H.useMemo(() => Pc(s, JSON.parse(c), y, S === 'path'), [s, c, y, S]);
}
function Ay(s, S) {
  return Jh(s, S);
}
function Jh(s, S, b) {
  var C;
  at(Yi(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: y } = H.useContext(dn),
    { matches: c } = H.useContext(In),
    a = c[c.length - 1],
    f = a ? a.params : {},
    m = a ? a.pathname : '/',
    o = a ? a.pathnameBase : '/',
    v = a && a.route;
  {
    let R = (v && v.path) || '';
    $h(
      m,
      !v || R.endsWith('*') || R.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === '/' ? '*' : `${R}/*`}">.`
    );
  }
  let d = Pn(),
    h;
  if (S) {
    let R = typeof S == 'string' ? Ha(S) : S;
    (at(
      o === '/' || ((C = R.pathname) == null ? void 0 : C.startsWith(o)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${o}" but pathname "${R.pathname}" was given in the \`location\` prop.`
    ),
      (h = R));
  } else h = d;
  let g = h.pathname || '/',
    r = g;
  if (o !== '/') {
    let R = o.replace(/^\//, '').split('/');
    r = '/' + g.replace(/^\//, '').split('/').slice(R.length).join('/');
  }
  let x = Uh(s, { pathname: r });
  (Cn(v || x != null, `No routes matched location "${h.pathname}${h.search}${h.hash}" `),
    Cn(
      x == null ||
        x[x.length - 1].route.element !== void 0 ||
        x[x.length - 1].route.Component !== void 0 ||
        x[x.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let p = zy(
    x &&
      x.map((R) =>
        Object.assign({}, R, {
          params: Object.assign({}, f, R.params),
          pathname: gn([
            o,
            y.encodeLocation
              ? y.encodeLocation(
                  R.pathname.replace(/%/g, '%25').replace(/\?/g, '%3F').replace(/#/g, '%23')
                ).pathname
              : R.pathname,
          ]),
          pathnameBase:
            R.pathnameBase === '/'
              ? o
              : gn([
                  o,
                  y.encodeLocation
                    ? y.encodeLocation(
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
  return S && p
    ? H.createElement(
        Gi.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              unstable_mask: void 0,
              ...h,
            },
            navigationType: 'POP',
          },
        },
        p
      )
    : p;
}
function _y() {
  let s = Ly(),
    S = hy(s) ? `${s.status} ${s.statusText}` : s instanceof Error ? s.message : JSON.stringify(s),
    b = s instanceof Error ? s.stack : null,
    y = 'rgba(200,200,200, 0.5)',
    c = { padding: '0.5rem', backgroundColor: y },
    a = { padding: '2px 4px', backgroundColor: y },
    f = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', s),
    (f = H.createElement(
      H.Fragment,
      null,
      H.createElement('p', null, '💿 Hey developer 👋'),
      H.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        H.createElement('code', { style: a }, 'ErrorBoundary'),
        ' or',
        ' ',
        H.createElement('code', { style: a }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    H.createElement(
      H.Fragment,
      null,
      H.createElement('h2', null, 'Unexpected Application Error!'),
      H.createElement('h3', { style: { fontStyle: 'italic' } }, S),
      b ? H.createElement('pre', { style: c }, b) : null,
      f
    )
  );
}
var Oy = H.createElement(_y, null),
  Fh = class extends H.Component {
    constructor(s) {
      (super(s),
        (this.state = { location: s.location, revalidation: s.revalidation, error: s.error }));
    }
    static getDerivedStateFromError(s) {
      return { error: s };
    }
    static getDerivedStateFromProps(s, S) {
      return S.location !== s.location || (S.revalidation !== 'idle' && s.revalidation === 'idle')
        ? { error: s.error, location: s.location, revalidation: s.revalidation }
        : {
            error: s.error !== void 0 ? s.error : S.error,
            location: S.location,
            revalidation: s.revalidation || S.revalidation,
          };
    }
    componentDidCatch(s, S) {
      this.props.onError
        ? this.props.onError(s, S)
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
        const b = Cy(s.digest);
        b && (s = b);
      }
      let S =
        s !== void 0
          ? H.createElement(
              In.Provider,
              { value: this.props.routeContext },
              H.createElement(eo.Provider, { value: s, children: this.props.component })
            )
          : this.props.children;
      return this.context ? H.createElement(Dy, { error: s }, S) : S;
    }
  };
Fh.contextType = Xh;
var Uc = new WeakMap();
function Dy({ children: s, error: S }) {
  let { basename: b } = H.useContext(dn);
  if (typeof S == 'object' && S && 'digest' in S && typeof S.digest == 'string') {
    let y = by(S.digest);
    if (y) {
      let c = Uc.get(S);
      if (c) throw c;
      let a = Vh(y.location, b);
      if (Yh && !Uc.get(S))
        if (a.isExternal || y.reloadDocument) window.location.href = a.absoluteURL || a.to;
        else {
          const f = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(a.to, { replace: y.replace })
          );
          throw (Uc.set(S, f), f);
        }
      return H.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${a.absoluteURL || a.to}`,
      });
    }
  }
  return s;
}
function wy({ routeContext: s, match: S, children: b }) {
  let y = H.useContext(La);
  return (
    y &&
      y.static &&
      y.staticContext &&
      (S.route.errorElement || S.route.ErrorBoundary) &&
      (y.staticContext._deepestRenderedBoundaryId = S.route.id),
    H.createElement(In.Provider, { value: s }, b)
  );
}
function zy(s, S = [], b) {
  let y = b == null ? void 0 : b.state;
  if (s == null) {
    if (!y) return null;
    if (y.errors) s = y.matches;
    else if (S.length === 0 && !y.initialized && y.matches.length > 0) s = y.matches;
    else return null;
  }
  let c = s,
    a = y == null ? void 0 : y.errors;
  if (a != null) {
    let d = c.findIndex((h) => h.route.id && (a == null ? void 0 : a[h.route.id]) !== void 0);
    (at(
      d >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(',')}`
    ),
      (c = c.slice(0, Math.min(c.length, d + 1))));
  }
  let f = !1,
    m = -1;
  if (b && y) {
    f = y.renderFallback;
    for (let d = 0; d < c.length; d++) {
      let h = c[d];
      if (((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (m = d), h.route.id)) {
        let { loaderData: g, errors: r } = y,
          x = h.route.loader && !g.hasOwnProperty(h.route.id) && (!r || r[h.route.id] === void 0);
        if (h.route.lazy || x) {
          (b.isStatic && (f = !0), m >= 0 ? (c = c.slice(0, m + 1)) : (c = [c[0]]));
          break;
        }
      }
    }
  }
  let o = b == null ? void 0 : b.onError,
    v =
      y && o
        ? (d, h) => {
            var g, r;
            o(d, {
              location: y.location,
              params:
                ((r = (g = y.matches) == null ? void 0 : g[0]) == null ? void 0 : r.params) ?? {},
              unstable_pattern: vy(y.matches),
              errorInfo: h,
            });
          }
        : void 0;
  return c.reduceRight((d, h, g) => {
    let r,
      x = !1,
      p = null,
      C = null;
    y &&
      ((r = a && h.route.id ? a[h.route.id] : void 0),
      (p = h.route.errorElement || Oy),
      f &&
        (m < 0 && g === 0
          ? ($h(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (x = !0),
            (C = null))
          : m === g && ((x = !0), (C = h.route.hydrateFallbackElement || null))));
    let R = S.concat(c.slice(0, g + 1)),
      w = () => {
        let U;
        return (
          r
            ? (U = p)
            : x
              ? (U = C)
              : h.route.Component
                ? (U = H.createElement(h.route.Component, null))
                : h.route.element
                  ? (U = h.route.element)
                  : (U = d),
          H.createElement(wy, {
            match: h,
            routeContext: { outlet: d, matches: R, isDataRoute: y != null },
            children: U,
          })
        );
      };
    return y && (h.route.ErrorBoundary || h.route.errorElement || g === 0)
      ? H.createElement(Fh, {
          location: y.location,
          revalidation: y.revalidation,
          component: p,
          error: r,
          children: w(),
          routeContext: { outlet: null, matches: R, isDataRoute: !0 },
          onError: v,
        })
      : w();
  }, null);
}
function to(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ny(s) {
  let S = H.useContext(La);
  return (at(S, to(s)), S);
}
function By(s) {
  let S = H.useContext(fr);
  return (at(S, to(s)), S);
}
function Uy(s) {
  let S = H.useContext(In);
  return (at(S, to(s)), S);
}
function no(s) {
  let S = Uy(s),
    b = S.matches[S.matches.length - 1];
  return (at(b.route.id, `${s} can only be used on routes that contain a unique "id"`), b.route.id);
}
function Hy() {
  return no('useRouteId');
}
function Ly() {
  var y;
  let s = H.useContext(eo),
    S = By('useRouteError'),
    b = no('useRouteError');
  return s !== void 0 ? s : (y = S.errors) == null ? void 0 : y[b];
}
function jy() {
  let { router: s } = Ny('useNavigate'),
    S = no('useNavigate'),
    b = H.useRef(!1);
  return (
    kh(() => {
      b.current = !0;
    }),
    H.useCallback(
      async (c, a = {}) => {
        (Cn(b.current, Kh),
          b.current &&
            (typeof c == 'number'
              ? await s.navigate(c)
              : await s.navigate(c, { fromRouteId: S, ...a })));
      },
      [s, S]
    )
  );
}
var ph = {};
function $h(s, S, b) {
  !S && !ph[s] && ((ph[s] = !0), Cn(!1, b));
}
H.memo(Gy);
function Gy({ routes: s, future: S, state: b, isStatic: y, onError: c }) {
  return Jh(s, void 0, { state: b, isStatic: y, onError: c });
}
function kc(s) {
  at(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function Yy({
  basename: s = '/',
  children: S = null,
  location: b,
  navigationType: y = 'POP',
  navigator: c,
  static: a = !1,
  unstable_useTransitions: f,
}) {
  at(
    !Yi(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let m = s.replace(/^\/*/, '/'),
    o = H.useMemo(
      () => ({ basename: m, navigator: c, static: a, unstable_useTransitions: f, future: {} }),
      [m, c, a, f]
    );
  typeof b == 'string' && (b = Ha(b));
  let {
      pathname: v = '/',
      search: d = '',
      hash: h = '',
      state: g = null,
      key: r = 'default',
      unstable_mask: x,
    } = b,
    p = H.useMemo(() => {
      let C = Wn(v, m);
      return C == null
        ? null
        : {
            location: { pathname: C, search: d, hash: h, state: g, key: r, unstable_mask: x },
            navigationType: y,
          };
    }, [m, v, d, h, g, r, y, x]);
  return (
    Cn(
      p != null,
      `<Router basename="${m}"> is not able to match the URL "${v}${d}${h}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    p == null
      ? null
      : H.createElement(
          dn.Provider,
          { value: o },
          H.createElement(Gi.Provider, { children: S, value: p })
        )
  );
}
function Vy({ children: s, location: S }) {
  return Ay(Jc(s), S);
}
function Jc(s, S = []) {
  let b = [];
  return (
    H.Children.forEach(s, (y, c) => {
      if (!H.isValidElement(y)) return;
      let a = [...S, c];
      if (y.type === H.Fragment) {
        b.push.apply(b, Jc(y.props.children, a));
        return;
      }
      (at(
        y.type === kc,
        `[${typeof y.type == 'string' ? y.type : y.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        at(!y.props.index || !y.props.children, 'An index route cannot have child routes.'));
      let f = {
        id: y.props.id || a.join('-'),
        caseSensitive: y.props.caseSensitive,
        element: y.props.element,
        Component: y.props.Component,
        index: y.props.index,
        path: y.props.path,
        middleware: y.props.middleware,
        loader: y.props.loader,
        action: y.props.action,
        hydrateFallbackElement: y.props.hydrateFallbackElement,
        HydrateFallback: y.props.HydrateFallback,
        errorElement: y.props.errorElement,
        ErrorBoundary: y.props.ErrorBoundary,
        hasErrorBoundary:
          y.props.hasErrorBoundary === !0 ||
          y.props.ErrorBoundary != null ||
          y.props.errorElement != null,
        shouldRevalidate: y.props.shouldRevalidate,
        handle: y.props.handle,
        lazy: y.props.lazy,
      };
      (y.props.children && (f.children = Jc(y.props.children, a)), b.push(f));
    }),
    b
  );
}
var ir = 'get',
  ur = 'application/x-www-form-urlencoded';
function dr(s) {
  return typeof HTMLElement < 'u' && s instanceof HTMLElement;
}
function qy(s) {
  return dr(s) && s.tagName.toLowerCase() === 'button';
}
function Xy(s) {
  return dr(s) && s.tagName.toLowerCase() === 'form';
}
function Qy(s) {
  return dr(s) && s.tagName.toLowerCase() === 'input';
}
function Zy(s) {
  return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
}
function Ky(s, S) {
  return s.button === 0 && (!S || S === '_self') && !Zy(s);
}
var nr = null;
function ky() {
  if (nr === null)
    try {
      (new FormData(document.createElement('form'), 0), (nr = !1));
    } catch {
      nr = !0;
    }
  return nr;
}
var Jy = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function Hc(s) {
  return s != null && !Jy.has(s)
    ? (Cn(
        !1,
        `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ur}"`
      ),
      null)
    : s;
}
function Fy(s, S) {
  let b, y, c, a, f;
  if (Xy(s)) {
    let m = s.getAttribute('action');
    ((y = m ? Wn(m, S) : null),
      (b = s.getAttribute('method') || ir),
      (c = Hc(s.getAttribute('enctype')) || ur),
      (a = new FormData(s)));
  } else if (qy(s) || (Qy(s) && (s.type === 'submit' || s.type === 'image'))) {
    let m = s.form;
    if (m == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let o = s.getAttribute('formaction') || m.getAttribute('action');
    if (
      ((y = o ? Wn(o, S) : null),
      (b = s.getAttribute('formmethod') || m.getAttribute('method') || ir),
      (c = Hc(s.getAttribute('formenctype')) || Hc(m.getAttribute('enctype')) || ur),
      (a = new FormData(m, s)),
      !ky())
    ) {
      let { name: v, type: d, value: h } = s;
      if (d === 'image') {
        let g = v ? `${v}.` : '';
        (a.append(`${g}x`, '0'), a.append(`${g}y`, '0'));
      } else v && a.append(v, h);
    }
  } else {
    if (dr(s))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((b = ir), (y = null), (c = ur), (f = s));
  }
  return (
    a && c === 'text/plain' && ((f = a), (a = void 0)),
    { action: y, method: b.toLowerCase(), encType: c, formData: a, body: f }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function lo(s, S) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(S);
}
function Wh(s, S, b, y) {
  let c =
    typeof s == 'string'
      ? new URL(s, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : s;
  return (
    b
      ? c.pathname.endsWith('/')
        ? (c.pathname = `${c.pathname}_.${y}`)
        : (c.pathname = `${c.pathname}.${y}`)
      : c.pathname === '/'
        ? (c.pathname = `_root.${y}`)
        : S && Wn(c.pathname, S) === '/'
          ? (c.pathname = `${cr(S)}/_root.${y}`)
          : (c.pathname = `${cr(c.pathname)}.${y}`),
    c
  );
}
async function $y(s, S) {
  if (s.id in S) return S[s.id];
  try {
    let b = await import(s.module);
    return ((S[s.id] = b), b);
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
function Wy(s) {
  return s == null
    ? !1
    : s.href == null
      ? s.rel === 'preload' && typeof s.imageSrcSet == 'string' && typeof s.imageSizes == 'string'
      : typeof s.rel == 'string' && typeof s.href == 'string';
}
async function Iy(s, S, b) {
  let y = await Promise.all(
    s.map(async (c) => {
      let a = S.routes[c.route.id];
      if (a) {
        let f = await $y(a, b);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return np(
    y
      .flat(1)
      .filter(Wy)
      .filter((c) => c.rel === 'stylesheet' || c.rel === 'preload')
      .map((c) =>
        c.rel === 'stylesheet' ? { ...c, rel: 'prefetch', as: 'style' } : { ...c, rel: 'prefetch' }
      )
  );
}
function xh(s, S, b, y, c, a) {
  let f = (o, v) => (b[v] ? o.route.id !== b[v].route.id : !0),
    m = (o, v) => {
      var d;
      return (
        b[v].pathname !== o.pathname ||
        (((d = b[v].route.path) == null ? void 0 : d.endsWith('*')) &&
          b[v].params['*'] !== o.params['*'])
      );
    };
  return a === 'assets'
    ? S.filter((o, v) => f(o, v) || m(o, v))
    : a === 'data'
      ? S.filter((o, v) => {
          var h;
          let d = y.routes[o.route.id];
          if (!d || !d.hasLoader) return !1;
          if (f(o, v) || m(o, v)) return !0;
          if (o.route.shouldRevalidate) {
            let g = o.route.shouldRevalidate({
              currentUrl: new URL(c.pathname + c.search + c.hash, window.origin),
              currentParams: ((h = b[0]) == null ? void 0 : h.params) || {},
              nextUrl: new URL(s, window.origin),
              nextParams: o.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof g == 'boolean') return g;
          }
          return !0;
        })
      : [];
}
function Py(s, S, { includeHydrateFallback: b } = {}) {
  return ep(
    s
      .map((y) => {
        let c = S.routes[y.route.id];
        if (!c) return [];
        let a = [c.module];
        return (
          c.clientActionModule && (a = a.concat(c.clientActionModule)),
          c.clientLoaderModule && (a = a.concat(c.clientLoaderModule)),
          b && c.hydrateFallbackModule && (a = a.concat(c.hydrateFallbackModule)),
          c.imports && (a = a.concat(c.imports)),
          a
        );
      })
      .flat(1)
  );
}
function ep(s) {
  return [...new Set(s)];
}
function tp(s) {
  let S = {},
    b = Object.keys(s).sort();
  for (let y of b) S[y] = s[y];
  return S;
}
function np(s, S) {
  let b = new Set();
  return (
    new Set(S),
    s.reduce((y, c) => {
      let a = JSON.stringify(tp(c));
      return (b.has(a) || (b.add(a), y.push({ key: a, link: c })), y);
    }, [])
  );
}
function ao() {
  let s = H.useContext(La);
  return (lo(s, 'You must render this element inside a <DataRouterContext.Provider> element'), s);
}
function lp() {
  let s = H.useContext(fr);
  return (
    lo(s, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    s
  );
}
var io = H.createContext(void 0);
io.displayName = 'FrameworkContext';
function uo() {
  let s = H.useContext(io);
  return (lo(s, 'You must render this element inside a <HydratedRouter> element'), s);
}
function ap(s, S) {
  let b = H.useContext(io),
    [y, c] = H.useState(!1),
    [a, f] = H.useState(!1),
    { onFocus: m, onBlur: o, onMouseEnter: v, onMouseLeave: d, onTouchStart: h } = S,
    g = H.useRef(null);
  (H.useEffect(() => {
    if ((s === 'render' && f(!0), s === 'viewport')) {
      let p = (R) => {
          R.forEach((w) => {
            f(w.isIntersecting);
          });
        },
        C = new IntersectionObserver(p, { threshold: 0.5 });
      return (
        g.current && C.observe(g.current),
        () => {
          C.disconnect();
        }
      );
    }
  }, [s]),
    H.useEffect(() => {
      if (y) {
        let p = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(p);
        };
      }
    }, [y]));
  let r = () => {
      c(!0);
    },
    x = () => {
      (c(!1), f(!1));
    };
  return b
    ? s !== 'intent'
      ? [a, g, {}]
      : [
          a,
          g,
          {
            onFocus: wi(m, r),
            onBlur: wi(o, x),
            onMouseEnter: wi(v, r),
            onMouseLeave: wi(d, x),
            onTouchStart: wi(h, r),
          },
        ]
    : [!1, g, {}];
}
function wi(s, S) {
  return (b) => {
    (s && s(b), b.defaultPrevented || S(b));
  };
}
function ip({ page: s, ...S }) {
  let b = yy(),
    { router: y } = ao(),
    c = H.useMemo(() => Uh(y.routes, s, y.basename), [y.routes, s, y.basename]);
  return c
    ? b
      ? H.createElement(rp, { page: s, matches: c, ...S })
      : H.createElement(sp, { page: s, matches: c, ...S })
    : null;
}
function up(s) {
  let { manifest: S, routeModules: b } = uo(),
    [y, c] = H.useState([]);
  return (
    H.useEffect(() => {
      let a = !1;
      return (
        Iy(s, S, b).then((f) => {
          a || c(f);
        }),
        () => {
          a = !0;
        }
      );
    }, [s, S, b]),
    y
  );
}
function rp({ page: s, matches: S, ...b }) {
  let y = Pn(),
    { future: c } = uo(),
    { basename: a } = ao(),
    f = H.useMemo(() => {
      if (s === y.pathname + y.search + y.hash) return [];
      let m = Wh(s, a, c.unstable_trailingSlashAwareDataRequests, 'rsc'),
        o = !1,
        v = [];
      for (let d of S)
        typeof d.route.shouldRevalidate == 'function' ? (o = !0) : v.push(d.route.id);
      return (
        o && v.length > 0 && m.searchParams.set('_routes', v.join(',')),
        [m.pathname + m.search]
      );
    }, [a, c.unstable_trailingSlashAwareDataRequests, s, y, S]);
  return H.createElement(
    H.Fragment,
    null,
    f.map((m) => H.createElement('link', { key: m, rel: 'prefetch', as: 'fetch', href: m, ...b }))
  );
}
function sp({ page: s, matches: S, ...b }) {
  let y = Pn(),
    { future: c, manifest: a, routeModules: f } = uo(),
    { basename: m } = ao(),
    { loaderData: o, matches: v } = lp(),
    d = H.useMemo(() => xh(s, S, v, a, y, 'data'), [s, S, v, a, y]),
    h = H.useMemo(() => xh(s, S, v, a, y, 'assets'), [s, S, v, a, y]),
    g = H.useMemo(() => {
      if (s === y.pathname + y.search + y.hash) return [];
      let p = new Set(),
        C = !1;
      if (
        (S.forEach((w) => {
          var G;
          let U = a.routes[w.route.id];
          !U ||
            !U.hasLoader ||
            ((!d.some((M) => M.route.id === w.route.id) &&
              w.route.id in o &&
              (G = f[w.route.id]) != null &&
              G.shouldRevalidate) ||
            U.hasClientLoader
              ? (C = !0)
              : p.add(w.route.id));
        }),
        p.size === 0)
      )
        return [];
      let R = Wh(s, m, c.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        C &&
          p.size > 0 &&
          R.searchParams.set(
            '_routes',
            S.filter((w) => p.has(w.route.id))
              .map((w) => w.route.id)
              .join(',')
          ),
        [R.pathname + R.search]
      );
    }, [m, c.unstable_trailingSlashAwareDataRequests, o, y, a, d, S, s, f]),
    r = H.useMemo(() => Py(h, a), [h, a]),
    x = up(h);
  return H.createElement(
    H.Fragment,
    null,
    g.map((p) => H.createElement('link', { key: p, rel: 'prefetch', as: 'fetch', href: p, ...b })),
    r.map((p) => H.createElement('link', { key: p, rel: 'modulepreload', href: p, ...b })),
    x.map(({ key: p, link: C }) =>
      H.createElement('link', {
        key: p,
        nonce: b.nonce,
        ...C,
        crossOrigin: C.crossOrigin ?? b.crossOrigin,
      })
    )
  );
}
function cp(...s) {
  return (S) => {
    s.forEach((b) => {
      typeof b == 'function' ? b(S) : b != null && (b.current = S);
    });
  };
}
var op =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  op && (window.__reactRouterVersion = '7.14.2');
} catch {}
function fp({ basename: s, children: S, unstable_useTransitions: b, window: y }) {
  let c = H.useRef();
  c.current == null && (c.current = Qg({ window: y, v5Compat: !0 }));
  let a = c.current,
    [f, m] = H.useState({ action: a.action, location: a.location }),
    o = H.useCallback(
      (v) => {
        b === !1 ? m(v) : H.startTransition(() => m(v));
      },
      [b]
    );
  return (
    H.useLayoutEffect(() => a.listen(o), [a, o]),
    H.createElement(Yy, {
      basename: s,
      children: S,
      location: f.location,
      navigationType: f.action,
      navigator: a,
      unstable_useTransitions: b,
    })
  );
}
var Ih = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ph = H.forwardRef(function (
    {
      onClick: S,
      discover: b = 'render',
      prefetch: y = 'none',
      relative: c,
      reloadDocument: a,
      replace: f,
      unstable_mask: m,
      state: o,
      target: v,
      to: d,
      preventScrollReset: h,
      viewTransition: g,
      unstable_defaultShouldRevalidate: r,
      ...x
    },
    p
  ) {
    let { basename: C, navigator: R, unstable_useTransitions: w } = H.useContext(dn),
      U = typeof d == 'string' && Ih.test(d),
      G = Vh(d, C);
    d = G.to;
    let M = My(d, { relative: c }),
      O = Pn(),
      D = null;
    if (m) {
      let le = Pc(m, [], O.unstable_mask ? O.unstable_mask.pathname : '/', !0);
      (C !== '/' && (le.pathname = le.pathname === '/' ? C : gn([C, le.pathname])),
        (D = R.createHref(le)));
    }
    let [_, L, B] = ap(y, x),
      Y = vp(d, {
        replace: f,
        unstable_mask: m,
        state: o,
        target: v,
        preventScrollReset: h,
        relative: c,
        viewTransition: g,
        unstable_defaultShouldRevalidate: r,
        unstable_useTransitions: w,
      });
    function V(le) {
      (S && S(le), le.defaultPrevented || Y(le));
    }
    let F = !(G.isExternal || a),
      ie = H.createElement('a', {
        ...x,
        ...B,
        href: (F ? D : void 0) || G.absoluteURL || M,
        onClick: F ? V : S,
        ref: cp(p, L),
        target: v,
        'data-discover': !U && b === 'render' ? 'true' : void 0,
      });
    return _ && !U ? H.createElement(H.Fragment, null, ie, H.createElement(ip, { page: M })) : ie;
  });
Ph.displayName = 'Link';
var dp = H.forwardRef(function (
  {
    'aria-current': S = 'page',
    caseSensitive: b = !1,
    className: y = '',
    end: c = !1,
    style: a,
    to: f,
    viewTransition: m,
    children: o,
    ...v
  },
  d
) {
  let h = Vi(f, { relative: v.relative }),
    g = Pn(),
    r = H.useContext(fr),
    { navigator: x, basename: p } = H.useContext(dn),
    C = r != null && Sp(h) && m === !0,
    R = x.encodeLocation ? x.encodeLocation(h).pathname : h.pathname,
    w = g.pathname,
    U = r && r.navigation && r.navigation.location ? r.navigation.location.pathname : null;
  (b || ((w = w.toLowerCase()), (U = U ? U.toLowerCase() : null), (R = R.toLowerCase())),
    U && p && (U = Wn(U, p) || U));
  const G = R !== '/' && R.endsWith('/') ? R.length - 1 : R.length;
  let M = w === R || (!c && w.startsWith(R) && w.charAt(G) === '/'),
    O = U != null && (U === R || (!c && U.startsWith(R) && U.charAt(R.length) === '/')),
    D = { isActive: M, isPending: O, isTransitioning: C },
    _ = M ? S : void 0,
    L;
  typeof y == 'function'
    ? (L = y(D))
    : (L = [y, M ? 'active' : null, O ? 'pending' : null, C ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let B = typeof a == 'function' ? a(D) : a;
  return H.createElement(
    Ph,
    { ...v, 'aria-current': _, className: L, ref: d, style: B, to: f, viewTransition: m },
    typeof o == 'function' ? o(D) : o
  );
});
dp.displayName = 'NavLink';
var mp = H.forwardRef(
  (
    {
      discover: s = 'render',
      fetcherKey: S,
      navigate: b,
      reloadDocument: y,
      replace: c,
      state: a,
      method: f = ir,
      action: m,
      onSubmit: o,
      relative: v,
      preventScrollReset: d,
      viewTransition: h,
      unstable_defaultShouldRevalidate: g,
      ...r
    },
    x
  ) => {
    let { unstable_useTransitions: p } = H.useContext(dn),
      C = pp(),
      R = xp(m, { relative: v }),
      w = f.toLowerCase() === 'get' ? 'get' : 'post',
      U = typeof m == 'string' && Ih.test(m),
      G = (M) => {
        if ((o && o(M), M.defaultPrevented)) return;
        M.preventDefault();
        let O = M.nativeEvent.submitter,
          D = (O == null ? void 0 : O.getAttribute('formmethod')) || f,
          _ = () =>
            C(O || M.currentTarget, {
              fetcherKey: S,
              method: D,
              navigate: b,
              replace: c,
              state: a,
              relative: v,
              preventScrollReset: d,
              viewTransition: h,
              unstable_defaultShouldRevalidate: g,
            });
        p && b !== !1 ? H.startTransition(() => _()) : _();
      };
    return H.createElement('form', {
      ref: x,
      method: w,
      action: R,
      onSubmit: y ? o : G,
      ...r,
      'data-discover': !U && s === 'render' ? 'true' : void 0,
    });
  }
);
mp.displayName = 'Form';
function hp(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ev(s) {
  let S = H.useContext(La);
  return (at(S, hp(s)), S);
}
function vp(
  s,
  {
    target: S,
    replace: b,
    unstable_mask: y,
    state: c,
    preventScrollReset: a,
    relative: f,
    viewTransition: m,
    unstable_defaultShouldRevalidate: o,
    unstable_useTransitions: v,
  } = {}
) {
  let d = Ty(),
    h = Pn(),
    g = Vi(s, { relative: f });
  return H.useCallback(
    (r) => {
      if (Ky(r, S)) {
        r.preventDefault();
        let x = b !== void 0 ? b : ji(h) === ji(g),
          p = () =>
            d(s, {
              replace: x,
              unstable_mask: y,
              state: c,
              preventScrollReset: a,
              relative: f,
              viewTransition: m,
              unstable_defaultShouldRevalidate: o,
            });
        v ? H.startTransition(() => p()) : p();
      }
    },
    [h, d, g, b, y, c, S, s, a, f, m, o, v]
  );
}
var gp = 0,
  yp = () => `__${String(++gp)}__`;
function pp() {
  let { router: s } = ev('useSubmit'),
    { basename: S } = H.useContext(dn),
    b = Hy(),
    y = s.fetch,
    c = s.navigate;
  return H.useCallback(
    async (a, f = {}) => {
      let { action: m, method: o, encType: v, formData: d, body: h } = Fy(a, S);
      if (f.navigate === !1) {
        let g = f.fetcherKey || yp();
        await y(g, b, f.action || m, {
          unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
          preventScrollReset: f.preventScrollReset,
          formData: d,
          body: h,
          formMethod: f.method || o,
          formEncType: f.encType || v,
          flushSync: f.flushSync,
        });
      } else
        await c(f.action || m, {
          unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
          preventScrollReset: f.preventScrollReset,
          formData: d,
          body: h,
          formMethod: f.method || o,
          formEncType: f.encType || v,
          replace: f.replace,
          state: f.state,
          fromRouteId: b,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [y, c, S, b]
  );
}
function xp(s, { relative: S } = {}) {
  let { basename: b } = H.useContext(dn),
    y = H.useContext(In);
  at(y, 'useFormAction must be used inside a RouteContext');
  let [c] = y.matches.slice(-1),
    a = { ...Vi(s || '.', { relative: S }) },
    f = Pn();
  if (s == null) {
    a.search = f.search;
    let m = new URLSearchParams(a.search),
      o = m.getAll('index');
    if (o.some((d) => d === '')) {
      (m.delete('index'), o.filter((h) => h).forEach((h) => m.append('index', h)));
      let d = m.toString();
      a.search = d ? `?${d}` : '';
    }
  }
  return (
    (!s || s === '.') &&
      c.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, '?index&') : '?index'),
    b !== '/' && (a.pathname = a.pathname === '/' ? b : gn([b, a.pathname])),
    ji(a)
  );
}
function Sp(s, { relative: S } = {}) {
  let b = H.useContext(Qh);
  at(
    b != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: y } = ev('useViewTransitionState'),
    c = Vi(s, { relative: S });
  if (!b.isTransitioning) return !1;
  let a = Wn(b.currentLocation.pathname, y) || b.currentLocation.pathname,
    f = Wn(b.nextLocation.pathname, y) || b.nextLocation.pathname;
  return sr(c.pathname, f) != null || sr(c.pathname, a) != null;
}
const Ep = 'modulepreload',
  bp = function (s) {
    return '/ochimono-game/' + s;
  },
  Sh = {},
  Cp = function (S, b, y) {
    let c = Promise.resolve();
    if (b && b.length > 0) {
      let f = function (v) {
        return Promise.all(
          v.map((d) =>
            Promise.resolve(d).then(
              (h) => ({ status: 'fulfilled', value: h }),
              (h) => ({ status: 'rejected', reason: h })
            )
          )
        );
      };
      document.getElementsByTagName('link');
      const m = document.querySelector('meta[property=csp-nonce]'),
        o = (m == null ? void 0 : m.nonce) || (m == null ? void 0 : m.getAttribute('nonce'));
      c = f(
        b.map((v) => {
          if (((v = bp(v)), v in Sh)) return;
          Sh[v] = !0;
          const d = v.endsWith('.css'),
            h = d ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${v}"]${h}`)) return;
          const g = document.createElement('link');
          if (
            ((g.rel = d ? 'stylesheet' : Ep),
            d || (g.as = 'script'),
            (g.crossOrigin = ''),
            (g.href = v),
            o && g.setAttribute('nonce', o),
            document.head.appendChild(g),
            d)
          )
            return new Promise((r, x) => {
              (g.addEventListener('load', r),
                g.addEventListener('error', () => x(new Error(`Unable to preload CSS for ${v}`))));
            });
        })
      );
    }
    function a(f) {
      const m = new Event('vite:preloadError', { cancelable: !0 });
      if (((m.payload = f), window.dispatchEvent(m), !m.defaultPrevented)) throw f;
    }
    return c.then((f) => {
      for (const m of f || []) m.status === 'rejected' && a(m.reason);
      return S().catch(a);
    });
  };
function Mp(s = {}) {
  const {
    immediate: S = !1,
    onNeedRefresh: b,
    onOfflineReady: y,
    onRegistered: c,
    onRegisteredSW: a,
    onRegisterError: f,
  } = s;
  let m, o, v;
  const d = async (g = !0) => {
    (await o, v == null || v());
  };
  async function h() {
    if ('serviceWorker' in navigator) {
      if (
        ((m = await Cp(async () => {
          const { Workbox: g } = await import('./workbox-window.prod.es5-BIl4cyR9.js');
          return { Workbox: g };
        }, [])
          .then(
            ({ Workbox: g }) =>
              new g('/ochimono-game/sw.js', { scope: '/ochimono-game/', type: 'classic' })
          )
          .catch((g) => {
            f == null || f(g);
          })),
        !m)
      )
        return;
      v = () => {
        m == null || m.messageSkipWaiting();
      };
      {
        let g = !1;
        const r = () => {
          ((g = !0),
            m == null ||
              m.addEventListener('controlling', (x) => {
                x.isUpdate && window.location.reload();
              }),
            b == null || b());
        };
        (m.addEventListener('installed', (x) => {
          typeof x.isUpdate > 'u'
            ? typeof x.isExternal < 'u' && x.isExternal
              ? r()
              : !g && (y == null || y())
            : x.isUpdate || y == null || y();
        }),
          m.addEventListener('waiting', r));
      }
      m.register({ immediate: S })
        .then((g) => {
          a ? a('/ochimono-game/sw.js', g) : c == null || c(g);
        })
        .catch((g) => {
          f == null || f(g);
        });
    }
  }
  return ((o = h()), d);
}
function Tp(s = {}) {
  const {
      immediate: S = !0,
      onNeedRefresh: b,
      onOfflineReady: y,
      onRegistered: c,
      onRegisteredSW: a,
      onRegisterError: f,
    } = s,
    [m, o] = H.useState(!1),
    [v, d] = H.useState(!1),
    [h] = H.useState(() =>
      Mp({
        immediate: S,
        onOfflineReady() {
          (d(!0), y == null || y());
        },
        onNeedRefresh() {
          (o(!0), b == null || b());
        },
        onRegistered: c,
        onRegisteredSW: a,
        onRegisterError: f,
      })
    );
  return { needRefresh: [m, o], offlineReady: [v, d], updateServiceWorker: h };
}
const Rp = '_banner_1qruq_1',
  Ap = '_message_1qruq_21',
  _p = '_button_1qruq_25',
  Lc = { banner: Rp, message: Ap, button: _p },
  Op = () => {
    const {
      needRefresh: [s],
      updateServiceWorker: S,
    } = Tp();
    return s
      ? I.jsxs('div', {
          className: Lc.banner,
          role: 'status',
          'aria-live': 'polite',
          children: [
            I.jsx('span', { className: Lc.message, children: '新しいバージョンがあります' }),
            I.jsx('button', {
              type: 'button',
              className: Lc.button,
              onClick: () => S(!0),
              children: '更新',
            }),
          ],
        })
      : null;
  },
  Dp = '_index_r8hfh_1',
  wp = { index: Dp },
  zp = '_layout_u1qv8_1',
  Np = '_top_bar_placeholder_u1qv8_10',
  Bp = '_main_u1qv8_15',
  Up = '_field_wrapper_u1qv8_23',
  Hp = '_skill_button_wrapper_u1qv8_28',
  Jl = {
    layout: zp,
    top_bar_placeholder: Np,
    main: Bp,
    field_wrapper: Up,
    skill_button_wrapper: Hp,
  },
  Lp = '_surface_6wr97_1',
  jp = '_canvas_layer_6wr97_11',
  Gp = '_game_over_line_6wr97_22',
  jc = { surface: Lp, canvas_layer: jp, game_over_line: Gp },
  Yp = '_layer_1dvsy_1',
  Vp = '_effect_1dvsy_7',
  qp = '_ring_1dvsy_12',
  Xp = '_score_1dvsy_24',
  Qp = '_special_1dvsy_36',
  zi = { layer: Yp, effect: Vp, ring: qp, score: Xp, special: Qp },
  tv = H.memo(
    H.forwardRef((s, S) => {
      const b = H.useRef(null),
        y = H.useCallback((a) => {
          const f = b.current;
          if (!f) return;
          const m = document.createElement('div');
          ((m.className = `${zi.effect} ${a.isSpecial ? zi.special : ''}`),
            (m.style.left = `${a.x}px`),
            (m.style.top = `${a.y}px`),
            m.setAttribute('aria-hidden', 'true'));
          const o = document.createElement('span');
          ((o.className = zi.ring), m.appendChild(o));
          const v = () => {
            (o.removeEventListener('animationend', v), m.parentNode === f && f.removeChild(m));
          };
          if ((o.addEventListener('animationend', v), a.score > 0)) {
            const d = document.createElement('span');
            ((d.className = zi.score), (d.textContent = `+${a.score}`), m.appendChild(d));
          }
          f.appendChild(m);
        }, []),
        c = H.useCallback(() => {
          const a = b.current;
          if (a) for (; a.firstChild; ) a.removeChild(a.firstChild);
        }, []);
      return (
        H.useImperativeHandle(S, () => ({ add: y, clear: c }), [y, c]),
        I.jsx('div', { ref: b, className: zi.layer, 'aria-hidden': 'true' })
      );
    })
  );
tv.displayName = 'MergeEffect';
const Zp = '_line_yymkz_1',
  Kp = '_preview_wrap_yymkz_11',
  kp = '_preview_yymkz_11',
  Gc = { line: Zp, preview_wrap: Kp, preview: kp },
  Jp = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  nv = H.memo(
    H.forwardRef(({ initialX: s, fieldHeight: S, item: b }, y) => {
      const c = H.useRef(null),
        a = H.useRef(null),
        f = H.useRef((b == null ? void 0 : b.radius) ?? 0);
      if (
        ((f.current = (b == null ? void 0 : b.radius) ?? 0),
        H.useImperativeHandle(
          y,
          () => ({
            setX: (o) => {
              const v = c.current,
                d = a.current;
              (v && (v.style.transform = `translate3d(${o}px, 0, 0)`),
                d && (d.style.transform = `translate3d(${o - f.current}px, 0, 0)`));
            },
          }),
          []
        ),
        !b)
      )
        return null;
      const m = b.radius * 2;
      return I.jsxs(I.Fragment, {
        children: [
          I.jsx('div', {
            ref: c,
            className: Gc.line,
            style: { height: `${S}px`, transform: `translate3d(${s}px, 0, 0)` },
            'aria-hidden': 'true',
          }),
          I.jsx('div', {
            ref: a,
            className: Gc.preview_wrap,
            style: {
              width: `${m}px`,
              height: `${m}px`,
              transform: `translate3d(${s - b.radius}px, 0, 0)`,
            },
            'aria-hidden': 'true',
            children: I.jsx('img', {
              src: Jp(b.svgPath),
              alt: '',
              'aria-hidden': 'true',
              className: Gc.preview,
            }),
          }),
        ],
      });
    })
  );
nv.displayName = 'DropIndicator';
const Fp = (s) => Math.max(0, Math.min(1, s)),
  $p = ({
    canvasContainerRef: s,
    fieldWidth: S,
    fieldHeight: b,
    gameOverLineY: y,
    currentItem: c,
    canInteract: a,
    onDrop: f,
    mergeEffectRef: m,
    isMagnetSelecting: o,
    onMagnetSelect: v,
  }) => {
    const d = H.useRef(null),
      h = H.useRef(null),
      g = H.useRef(0.5),
      r = H.useRef(null),
      x = H.useRef(c);
    x.current = c;
    const p = H.useRef(S);
    p.current = S;
    const C = H.useCallback((_) => {
        const L = x.current,
          B = p.current;
        return L ? Math.max(L.radius, Math.min(B - L.radius, _ * B)) : _ * B;
      }, []),
      R = H.useCallback(() => {
        r.current === null &&
          (r.current = window.requestAnimationFrame(() => {
            var _;
            ((r.current = null), (_ = h.current) == null || _.setX(C(g.current)));
          }));
      }, [C]),
      w = H.useCallback(
        (_) => {
          const L = d.current;
          if (!L) return;
          const B = L.getBoundingClientRect(),
            Y = Fp((_ - B.left) / B.width);
          ((g.current = Y), R());
        },
        [R]
      );
    (H.useEffect(() => {
      ((g.current = 0.5), R());
    }, [c == null ? void 0 : c.level, R]),
      H.useEffect(
        () => () => {
          r.current !== null && (window.cancelAnimationFrame(r.current), (r.current = null));
        },
        []
      ));
    const U = a && !o,
      G = (_) => {
        var L;
        o || (U && (w(_.clientX), (L = d.current) == null || L.setPointerCapture(_.pointerId)));
      },
      M = (_) => {
        if (!o) {
          if (_.buttons === 0 && _.pointerType === 'mouse') {
            w(_.clientX);
            return;
          }
          w(_.clientX);
        }
      },
      O = (_) => {
        var L;
        if (o) {
          const B = d.current;
          if (!B) return;
          const Y = B.getBoundingClientRect();
          v(_.clientX - Y.left, _.clientY - Y.top);
          return;
        }
        U &&
          (w(_.clientX),
          f(g.current),
          (L = d.current) == null || L.releasePointerCapture(_.pointerId));
      },
      D = C(0.5);
    return I.jsxs('div', {
      ref: d,
      className: jc.surface,
      style: { width: `${S}px`, height: `${b}px` },
      onPointerDown: G,
      onPointerMove: M,
      onPointerUp: O,
      role: 'application',
      'aria-label': 'ゲームフィールド',
      children: [
        I.jsx('div', { ref: s, className: jc.canvas_layer }),
        I.jsx('div', {
          className: jc.game_over_line,
          style: { top: `${y}px` },
          'aria-hidden': 'true',
        }),
        U ? I.jsx(nv, { ref: h, initialX: D, fieldHeight: b, item: c }) : null,
        I.jsx(tv, { ref: m }),
      ],
    });
  },
  Wp = '_overlay_efysu_1',
  Ip = '_number_efysu_11',
  Eh = { overlay: Wp, number: Ip },
  lv = H.memo(({ seconds: s }) =>
    s === null
      ? null
      : I.jsx('div', {
          className: Eh.overlay,
          'aria-live': 'assertive',
          'aria-label': `ゲームオーバーまで${s}秒`,
          children: I.jsx('span', { className: Eh.number, children: s }, s),
        })
  );
lv.displayName = 'CountdownOverlay';
const Pp = '_overlay_o79hb_1',
  e1 = '_panel_o79hb_13',
  t1 = '_new_record_o79hb_24',
  n1 = '_title_o79hb_32',
  l1 = '_scores_o79hb_40',
  a1 = '_row_o79hb_46',
  i1 = '_gold_o79hb_64',
  u1 = '_restart_o79hb_69',
  Zn = {
    overlay: Pp,
    panel: e1,
    new_record: t1,
    title: n1,
    scores: l1,
    row: a1,
    gold: i1,
    restart: u1,
  },
  r1 = ({ score: s, bestScore: S, isNewRecord: b, onRestart: y }) =>
    I.jsx('div', {
      className: Zn.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'ゲームオーバー',
      children: I.jsxs('div', {
        className: Zn.panel,
        children: [
          b ? I.jsx('p', { className: Zn.new_record, children: '🎉 新記録！' }) : null,
          I.jsx('h2', { className: Zn.title, children: 'GAME OVER' }),
          I.jsxs('dl', {
            className: Zn.scores,
            children: [
              I.jsxs('div', {
                className: Zn.row,
                children: [
                  I.jsx('dt', { children: 'スコア' }),
                  I.jsx('dd', { className: b ? Zn.gold : '', children: s }),
                ],
              }),
              I.jsxs('div', {
                className: Zn.row,
                children: [I.jsx('dt', { children: 'ベスト' }), I.jsx('dd', { children: S })],
              }),
            ],
          }),
          I.jsx('button', {
            type: 'button',
            className: Zn.restart,
            onClick: y,
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
  Ni = { root: s1, message: c1, icon: o1, text: f1, cancel: d1 },
  av = H.memo(({ active: s, onCancel: S }) =>
    s
      ? I.jsxs('div', {
          className: Ni.root,
          children: [
            I.jsxs('div', {
              className: Ni.message,
              children: [
                I.jsx('span', { className: Ni.icon, children: '🧲' }),
                I.jsx('span', { className: Ni.text, children: '引き寄せたいアイテムをタップ' }),
              ],
            }),
            I.jsx('button', {
              type: 'button',
              className: Ni.cancel,
              onClick: S,
              children: 'キャンセル',
            }),
          ],
        })
      : null
  );
av.displayName = 'MagnetSelectingOverlay';
const m1 = '_backdrop_1weqi_1',
  h1 = '_dialog_1weqi_12',
  v1 = '_title_1weqi_22',
  g1 = '_body_1weqi_30',
  y1 = '_actions_1weqi_36',
  p1 = '_button_1weqi_42',
  x1 = '_yes_1weqi_57',
  S1 = '_no_1weqi_63',
  Kn = { backdrop: m1, dialog: h1, title: v1, body: g1, actions: y1, button: p1, yes: x1, no: S1 },
  iv = H.memo(({ open: s, onYes: S, onNo: b }) =>
    s
      ? I.jsx('div', {
          className: Kn.backdrop,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '中断データの再開確認',
          children: I.jsxs('div', {
            className: Kn.dialog,
            children: [
              I.jsx('h2', { className: Kn.title, children: '中断データが見つかりました' }),
              I.jsx('p', { className: Kn.body, children: '中断したところから再開しますか？' }),
              I.jsxs('div', {
                className: Kn.actions,
                children: [
                  I.jsx('button', {
                    type: 'button',
                    className: `${Kn.button} ${Kn.yes}`,
                    onClick: S,
                    children: 'はい',
                  }),
                  I.jsx('button', {
                    type: 'button',
                    className: `${Kn.button} ${Kn.no}`,
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
iv.displayName = 'ResumeDialog';
const E1 = '_gravity_flip_14l5j_1',
  b1 = '_arrow_14l5j_9',
  bh = { gravity_flip: E1, arrow: b1 },
  uv = H.memo(({ effect: s }) =>
    s === 'gravityFlip'
      ? I.jsx('div', {
          className: bh.gravity_flip,
          'aria-hidden': 'true',
          children: Array.from({ length: 6 }).map((S, b) =>
            I.jsx(
              'span',
              {
                className: bh.arrow,
                style: { left: `${(b + 1) * 14}%`, animationDelay: `${b * 0.12}s` },
                children: '⬆',
              },
              b
            )
          ),
        })
      : null
  );
uv.displayName = 'SkillEffectOverlay';
const C1 = '_overlay_1xsci_1',
  M1 = '_panel_1xsci_12',
  T1 = '_title_1xsci_22',
  R1 = '_lead_1xsci_30',
  A1 = '_start_1xsci_37',
  Bi = { overlay: C1, panel: M1, title: T1, lead: R1, start: A1 },
  _1 = ({ onStart: s }) =>
    I.jsx('div', {
      className: Bi.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'スタート画面',
      children: I.jsxs('div', {
        className: Bi.panel,
        children: [
          I.jsxs('h2', {
            className: Bi.title,
            children: ['💖🍓🐱', I.jsx('br', {}), 'にゃんハートいちごパズル'],
          }),
          I.jsxs('p', {
            className: Bi.lead,
            children: [
              '同じアイテム同士をくっつけて',
              I.jsx('br', {}),
              'にゃんハートいちごをめざそう！',
            ],
          }),
          I.jsx('button', {
            type: 'button',
            className: Bi.start,
            onClick: s,
            children: 'スタート',
          }),
        ],
      }),
    }),
  O1 = '_backdrop_6euhx_1',
  D1 = '_drawer_6euhx_11',
  w1 = '_header_6euhx_23',
  z1 = '_title_6euhx_30',
  N1 = '_close_6euhx_38',
  B1 = '_row_6euhx_54',
  U1 = '_row_label_6euhx_62',
  H1 = '_suspend_6euhx_68',
  L1 = '_footer_6euhx_88',
  j1 = '_version_6euhx_94',
  cn = {
    backdrop: O1,
    drawer: D1,
    header: w1,
    title: z1,
    close: N1,
    row: B1,
    row_label: U1,
    suspend: H1,
    footer: L1,
    version: j1,
  },
  G1 = '_toggle_1ap46_1',
  Y1 = { toggle: G1 },
  rv = H.memo(({ isOn: s, onToggle: S }) =>
    I.jsx('button', {
      type: 'button',
      className: Y1.toggle,
      onClick: S,
      'aria-label': s ? 'サウンドをOFFにする' : 'サウンドをONにする',
      'aria-pressed': s,
      children: I.jsx('span', { 'aria-hidden': 'true', children: s ? '🔊' : '🔇' }),
    })
  );
rv.displayName = 'SoundToggle';
const V1 = '_toggle_15urq_1',
  q1 = { toggle: V1 },
  ro = [{ id: 'gumi', label: 'グミ' }],
  mr = 'gumi',
  so = (s) => typeof s == 'string' && ro.some((S) => S.id === s),
  sv = H.memo(({ value: s, onChange: S }) => {
    const b = (y) => {
      const c = y.target.value;
      so(c) && S(c);
    };
    return I.jsx('select', {
      className: q1.toggle,
      value: s,
      onChange: b,
      'aria-label': 'アセットテーマ',
      children: ro.map((y) => I.jsx('option', { value: y.id, children: y.label }, y.id)),
    });
  });
sv.displayName = 'ThemeToggle';
const cv = H.memo(
  ({
    open: s,
    onClose: S,
    themeId: b,
    onChangeTheme: y,
    isSoundOn: c,
    onToggleSound: a,
    canSuspend: f,
    onSuspend: m,
  }) =>
    s
      ? I.jsx('div', {
          className: cn.backdrop,
          onClick: S,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '設定',
          children: I.jsxs('aside', {
            className: cn.drawer,
            onClick: (o) => o.stopPropagation(),
            children: [
              I.jsxs('header', {
                className: cn.header,
                children: [
                  I.jsx('h2', { className: cn.title, children: '設定' }),
                  I.jsx('button', {
                    type: 'button',
                    className: cn.close,
                    onClick: S,
                    'aria-label': '設定を閉じる',
                    children: '✕',
                  }),
                ],
              }),
              I.jsxs('div', {
                className: cn.row,
                children: [
                  I.jsx('span', { className: cn.row_label, children: 'テーマ' }),
                  I.jsx(sv, { value: b, onChange: y }),
                ],
              }),
              I.jsxs('div', {
                className: cn.row,
                children: [
                  I.jsx('span', { className: cn.row_label, children: 'サウンド' }),
                  I.jsx(rv, { isOn: c, onToggle: a }),
                ],
              }),
              f
                ? I.jsx('button', {
                    type: 'button',
                    className: cn.suspend,
                    onClick: () => {
                      (m(), S());
                    },
                    children: '中断',
                  })
                : null,
              I.jsx('footer', {
                className: cn.footer,
                children: I.jsxs('span', { className: cn.version, children: ['v', '1.0.26'] }),
              }),
            ],
          }),
        })
      : null
);
cv.displayName = 'SettingsDrawer';
const X1 = '_button_12i3t_1',
  Q1 = '_gauge_12i3t_23',
  Z1 = '_gauge_track_12i3t_32',
  K1 = '_gauge_fill_12i3t_39',
  k1 = '_gauge_fill_full_12i3t_47',
  J1 = '_icon_12i3t_52',
  F1 = '_ready_12i3t_60',
  $1 = '_fully_ready_12i3t_65',
  Tl = {
    button: X1,
    gauge: Q1,
    gauge_track: Z1,
    gauge_fill: K1,
    gauge_fill_full: k1,
    icon: J1,
    ready: F1,
    fully_ready: $1,
  },
  or = 32,
  Ch = 40,
  Mh = 110,
  W1 = 360,
  Th = (s) => {
    const S = ((s - 90) * Math.PI) / 180;
    return { x: Ch + or * Math.cos(S), y: Ch + or * Math.sin(S) };
  },
  I1 = (s, S) => {
    const b = Th(s),
      y = Th(S),
      c = S - s > 180 ? 1 : 0;
    return `M ${b.x} ${b.y} A ${or} ${or} 0 ${c} 1 ${y.x} ${y.y}`;
  },
  Yc = 1,
  ov = H.memo(({ gauge: s, segmentMax: S, segmentCount: b, canOpen: y, onClick: c }) => {
    const a = Math.round((s / (S * b)) * 100),
      f = W1 / b,
      m = f - Mh,
      o = Array.from({ length: b }, (h, g) => {
        const r = g * S;
        return Math.max(0, Math.min(S, s - r)) / S;
      }),
      d = o.filter((h) => h >= 1).length === b;
    return I.jsxs('button', {
      type: 'button',
      className: [Tl.button, y ? Tl.ready : '', d ? Tl.fully_ready : ''].filter(Boolean).join(' '),
      onClick: c,
      disabled: !y,
      'aria-label': y ? '必殺技を選択' : `必殺技ゲージ ${a}%`,
      children: [
        I.jsx('svg', {
          className: Tl.gauge,
          viewBox: '0 0 80 80',
          'aria-hidden': 'true',
          children: o.map((h, g) => {
            const r = g * f + m / 2,
              x = r + Mh,
              p = I1(r, x),
              C = h >= 1;
            return I.jsxs(
              'g',
              {
                children: [
                  I.jsx('path', { className: Tl.gauge_track, d: p, pathLength: Yc }),
                  I.jsx('path', {
                    className: `${Tl.gauge_fill} ${C ? Tl.gauge_fill_full : ''}`,
                    d: p,
                    pathLength: Yc,
                    strokeDasharray: `${h} ${Yc - h}`,
                  }),
                ],
              },
              g
            );
          }),
        }),
        I.jsx('span', { className: Tl.icon, 'aria-hidden': 'true', children: '⚡' }),
      ],
    });
  });
ov.displayName = 'SkillButton';
const P1 = '_backdrop_1xhs1_1',
  ex = '_menu_1xhs1_12',
  tx = '_title_1xhs1_21',
  nx = '_choices_1xhs1_30',
  lx = '_choice_1xhs1_30',
  ax = '_choice_disabled_1xhs1_60',
  ix = '_choice_icon_1xhs1_65',
  ux = '_choice_label_1xhs1_72',
  rx = '_choice_desc_1xhs1_79',
  sx = '_choice_cost_1xhs1_85',
  cx = '_cost_pip_1xhs1_93',
  ox = '_cancel_1xhs1_101',
  on = {
    backdrop: P1,
    menu: ex,
    title: tx,
    choices: nx,
    choice: lx,
    choice_disabled: ax,
    choice_icon: ix,
    choice_label: ux,
    choice_desc: rx,
    choice_cost: sx,
    cost_pip: cx,
    cancel: ox,
  },
  Fc = 100,
  $c = 3,
  ft = {
    gaugeMax: Fc * $c,
    segmentMax: Fc,
    segmentCount: $c,
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
  fx = (s) => s,
  fv = { shake: 1, gravityFlip: 1, magnet: $c },
  Ui = (s) => fv[s] * Fc,
  dx = [
    { kind: 'shake', icon: '🌪', label: 'シェイク', description: '盤面を揺らして詰まりを解す' },
    { kind: 'gravityFlip', icon: '⬆️', label: '重力反転', description: '3秒だけ重力を逆さに' },
    {
      kind: 'magnet',
      icon: '🧲',
      label: '同レベル吸引',
      description: 'タップしたアイテムと同レベルを 1 体ランダムに引き寄せ',
    },
  ],
  dv = H.memo(({ open: s, onSelect: S, onClose: b, canUse: y }) =>
    s
      ? I.jsx('div', {
          className: on.backdrop,
          onClick: b,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '必殺技を選択',
          children: I.jsxs('div', {
            className: on.menu,
            onClick: (c) => c.stopPropagation(),
            children: [
              I.jsx('h2', { className: on.title, children: '必殺技を選択' }),
              I.jsx('div', {
                className: on.choices,
                children: dx.map((c) => {
                  const a = fv[c.kind],
                    f = y[c.kind];
                  return I.jsxs(
                    'button',
                    {
                      type: 'button',
                      className: `${on.choice} ${f ? '' : on.choice_disabled}`,
                      onClick: () => f && S(c.kind),
                      disabled: !f,
                      children: [
                        I.jsx('span', {
                          className: on.choice_icon,
                          'aria-hidden': 'true',
                          children: c.icon,
                        }),
                        I.jsx('span', { className: on.choice_label, children: c.label }),
                        I.jsx('span', { className: on.choice_desc, children: c.description }),
                        I.jsx('span', {
                          className: on.choice_cost,
                          'aria-label': `コスト ${a} ゲージ`,
                          children: Array.from({ length: a }, (m, o) =>
                            I.jsx('span', { className: on.cost_pip }, o)
                          ),
                        }),
                      ],
                    },
                    c.kind
                  );
                }),
              }),
              I.jsx('button', {
                type: 'button',
                className: on.cancel,
                onClick: b,
                children: 'キャンセル',
              }),
            ],
          }),
        })
      : null
  );
dv.displayName = 'SkillMenu';
const mx = '_top_bar_15roj_1',
  hx = '_right_15roj_12',
  vx = '_settings_15roj_18',
  Vc = { top_bar: mx, right: hx, settings: vx },
  gx = '_next_1n5pn_1',
  yx = '_label_1n5pn_7',
  px = '_thumb_1n5pn_14',
  xx = '_image_1n5pn_27',
  lr = { next: gx, label: yx, thumb: px, image: xx },
  Sx = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  mv = H.memo(({ item: s }) =>
    I.jsxs('div', {
      className: lr.next,
      children: [
        I.jsx('span', { className: lr.label, children: 'NEXT' }),
        I.jsx('div', {
          className: lr.thumb,
          'data-testid': 'next-item',
          children: s
            ? I.jsx('img', { src: Sx(s.svgPath), alt: s.name, className: lr.image })
            : null,
        }),
      ],
    })
  );
mv.displayName = 'NextItemPreview';
const Ex = '_score_display_pgke7_1',
  bx = '_row_pgke7_7',
  Cx = '_label_pgke7_13',
  Mx = '_value_pgke7_20',
  Tx = '_label_small_pgke7_28',
  Rx = '_value_small_pgke7_35',
  kl = { score_display: Ex, row: bx, label: Cx, value: Mx, label_small: Tx, value_small: Rx },
  hv = H.memo(({ score: s, bestScore: S }) =>
    I.jsxs('div', {
      className: kl.score_display,
      children: [
        I.jsxs('div', {
          className: kl.row,
          children: [
            I.jsx('span', { className: kl.label, children: 'SCORE' }),
            I.jsx('span', { className: kl.value, 'data-testid': 'score-value', children: s }),
          ],
        }),
        I.jsxs('div', {
          className: kl.row,
          children: [
            I.jsx('span', { className: kl.label_small, children: 'BEST' }),
            I.jsx('span', { className: kl.value_small, children: S }),
          ],
        }),
      ],
    })
  );
hv.displayName = 'ScoreDisplay';
const Ax = ({ score: s, bestScore: S, nextItem: b, onOpenSettings: y }) =>
  I.jsxs('header', {
    className: Vc.top_bar,
    children: [
      I.jsx(hv, { score: s, bestScore: S }),
      I.jsxs('div', {
        className: Vc.right,
        children: [
          I.jsx(mv, { item: b }),
          I.jsx('button', {
            type: 'button',
            className: Vc.settings,
            onClick: y,
            'aria-label': '設定を開く',
            children: I.jsx('span', { 'aria-hidden': 'true', children: '⚙' }),
          }),
        ],
      }),
    ],
  });
var rr = { exports: {} };
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
 */ var _x = rr.exports,
  Rh;
function Ox() {
  return (
    Rh ||
      ((Rh = 1),
      (function (s, S) {
        (function (y, c) {
          s.exports = c();
        })(_x, function () {
          return (function (b) {
            var y = {};
            function c(a) {
              if (y[a]) return y[a].exports;
              var f = (y[a] = { i: a, l: !1, exports: {} });
              return (b[a].call(f.exports, f, f.exports, c), (f.l = !0), f.exports);
            }
            return (
              (c.m = b),
              (c.c = y),
              (c.d = function (a, f, m) {
                c.o(a, f) || Object.defineProperty(a, f, { enumerable: !0, get: m });
              }),
              (c.r = function (a) {
                (typeof Symbol < 'u' &&
                  Symbol.toStringTag &&
                  Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' }),
                  Object.defineProperty(a, '__esModule', { value: !0 }));
              }),
              (c.t = function (a, f) {
                if (
                  (f & 1 && (a = c(a)),
                  f & 8 || (f & 4 && typeof a == 'object' && a && a.__esModule))
                )
                  return a;
                var m = Object.create(null);
                if (
                  (c.r(m),
                  Object.defineProperty(m, 'default', { enumerable: !0, value: a }),
                  f & 2 && typeof a != 'string')
                )
                  for (var o in a)
                    c.d(
                      m,
                      o,
                      function (v) {
                        return a[v];
                      }.bind(null, o)
                    );
                return m;
              }),
              (c.n = function (a) {
                var f =
                  a && a.__esModule
                    ? function () {
                        return a.default;
                      }
                    : function () {
                        return a;
                      };
                return (c.d(f, 'a', f), f);
              }),
              (c.o = function (a, f) {
                return Object.prototype.hasOwnProperty.call(a, f);
              }),
              (c.p = ''),
              c((c.s = 20))
            );
          })([
            function (b, y) {
              var c = {};
              ((b.exports = c),
                (function () {
                  ((c._baseDelta = 1e3 / 60),
                    (c._nextId = 0),
                    (c._seed = 0),
                    (c._nowStartTime = +new Date()),
                    (c._warnedOnce = {}),
                    (c._decomp = null),
                    (c.extend = function (f, m) {
                      var o, v;
                      typeof m == 'boolean' ? ((o = 2), (v = m)) : ((o = 1), (v = !0));
                      for (var d = o; d < arguments.length; d++) {
                        var h = arguments[d];
                        if (h)
                          for (var g in h)
                            v &&
                            h[g] &&
                            h[g].constructor === Object &&
                            (!f[g] || f[g].constructor === Object)
                              ? ((f[g] = f[g] || {}), c.extend(f[g], v, h[g]))
                              : (f[g] = h[g]);
                      }
                      return f;
                    }),
                    (c.clone = function (f, m) {
                      return c.extend({}, m, f);
                    }),
                    (c.keys = function (f) {
                      if (Object.keys) return Object.keys(f);
                      var m = [];
                      for (var o in f) m.push(o);
                      return m;
                    }),
                    (c.values = function (f) {
                      var m = [];
                      if (Object.keys) {
                        for (var o = Object.keys(f), v = 0; v < o.length; v++) m.push(f[o[v]]);
                        return m;
                      }
                      for (var d in f) m.push(f[d]);
                      return m;
                    }),
                    (c.get = function (f, m, o, v) {
                      m = m.split('.').slice(o, v);
                      for (var d = 0; d < m.length; d += 1) f = f[m[d]];
                      return f;
                    }),
                    (c.set = function (f, m, o, v, d) {
                      var h = m.split('.').slice(v, d);
                      return ((c.get(f, m, 0, -1)[h[h.length - 1]] = o), o);
                    }),
                    (c.shuffle = function (f) {
                      for (var m = f.length - 1; m > 0; m--) {
                        var o = Math.floor(c.random() * (m + 1)),
                          v = f[m];
                        ((f[m] = f[o]), (f[o] = v));
                      }
                      return f;
                    }),
                    (c.choose = function (f) {
                      return f[Math.floor(c.random() * f.length)];
                    }),
                    (c.isElement = function (f) {
                      return typeof HTMLElement < 'u'
                        ? f instanceof HTMLElement
                        : !!(f && f.nodeType && f.nodeName);
                    }),
                    (c.isArray = function (f) {
                      return Object.prototype.toString.call(f) === '[object Array]';
                    }),
                    (c.isFunction = function (f) {
                      return typeof f == 'function';
                    }),
                    (c.isPlainObject = function (f) {
                      return typeof f == 'object' && f.constructor === Object;
                    }),
                    (c.isString = function (f) {
                      return toString.call(f) === '[object String]';
                    }),
                    (c.clamp = function (f, m, o) {
                      return f < m ? m : f > o ? o : f;
                    }),
                    (c.sign = function (f) {
                      return f < 0 ? -1 : 1;
                    }),
                    (c.now = function () {
                      if (typeof window < 'u' && window.performance) {
                        if (window.performance.now) return window.performance.now();
                        if (window.performance.webkitNow) return window.performance.webkitNow();
                      }
                      return Date.now ? Date.now() : new Date() - c._nowStartTime;
                    }),
                    (c.random = function (f, m) {
                      return (
                        (f = typeof f < 'u' ? f : 0),
                        (m = typeof m < 'u' ? m : 1),
                        f + a() * (m - f)
                      );
                    }));
                  var a = function () {
                    return ((c._seed = (c._seed * 9301 + 49297) % 233280), c._seed / 233280);
                  };
                  ((c.colorToNumber = function (f) {
                    return (
                      (f = f.replace('#', '')),
                      f.length == 3 &&
                        (f =
                          f.charAt(0) +
                          f.charAt(0) +
                          f.charAt(1) +
                          f.charAt(1) +
                          f.charAt(2) +
                          f.charAt(2)),
                      parseInt(f, 16)
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
                      var f = Array.prototype.slice.call(arguments).join(' ');
                      c._warnedOnce[f] || (c.warn(f), (c._warnedOnce[f] = !0));
                    }),
                    (c.deprecated = function (f, m, o) {
                      f[m] = c.chain(function () {
                        c.warnOnce('🔅 deprecated 🔅', o);
                      }, f[m]);
                    }),
                    (c.nextId = function () {
                      return c._nextId++;
                    }),
                    (c.indexOf = function (f, m) {
                      if (f.indexOf) return f.indexOf(m);
                      for (var o = 0; o < f.length; o++) if (f[o] === m) return o;
                      return -1;
                    }),
                    (c.map = function (f, m) {
                      if (f.map) return f.map(m);
                      for (var o = [], v = 0; v < f.length; v += 1) o.push(m(f[v]));
                      return o;
                    }),
                    (c.topologicalSort = function (f) {
                      var m = [],
                        o = [],
                        v = [];
                      for (var d in f) !o[d] && !v[d] && c._topologicalSort(d, o, v, f, m);
                      return m;
                    }),
                    (c._topologicalSort = function (f, m, o, v, d) {
                      var h = v[f] || [];
                      o[f] = !0;
                      for (var g = 0; g < h.length; g += 1) {
                        var r = h[g];
                        o[r] || m[r] || c._topologicalSort(r, m, o, v, d);
                      }
                      ((o[f] = !1), (m[f] = !0), d.push(f));
                    }),
                    (c.chain = function () {
                      for (var f = [], m = 0; m < arguments.length; m += 1) {
                        var o = arguments[m];
                        o._chained ? f.push.apply(f, o._chained) : f.push(o);
                      }
                      var v = function () {
                        for (
                          var d, h = new Array(arguments.length), g = 0, r = arguments.length;
                          g < r;
                          g++
                        )
                          h[g] = arguments[g];
                        for (g = 0; g < f.length; g += 1) {
                          var x = f[g].apply(d, h);
                          typeof x < 'u' && (d = x);
                        }
                        return d;
                      };
                      return ((v._chained = f), v);
                    }),
                    (c.chainPathBefore = function (f, m, o) {
                      return c.set(f, m, c.chain(o, c.get(f, m)));
                    }),
                    (c.chainPathAfter = function (f, m, o) {
                      return c.set(f, m, c.chain(c.get(f, m), o));
                    }),
                    (c.setDecomp = function (f) {
                      c._decomp = f;
                    }),
                    (c.getDecomp = function () {
                      var f = c._decomp;
                      try {
                        (!f && typeof window < 'u' && (f = window.decomp),
                          !f && typeof nh < 'u' && (f = nh.decomp));
                      } catch {
                        f = null;
                      }
                      return f;
                    }));
                })());
            },
            function (b, y) {
              var c = {};
              ((b.exports = c),
                (function () {
                  ((c.create = function (a) {
                    var f = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
                    return (a && c.update(f, a), f);
                  }),
                    (c.update = function (a, f, m) {
                      ((a.min.x = 1 / 0),
                        (a.max.x = -1 / 0),
                        (a.min.y = 1 / 0),
                        (a.max.y = -1 / 0));
                      for (var o = 0; o < f.length; o++) {
                        var v = f[o];
                        (v.x > a.max.x && (a.max.x = v.x),
                          v.x < a.min.x && (a.min.x = v.x),
                          v.y > a.max.y && (a.max.y = v.y),
                          v.y < a.min.y && (a.min.y = v.y));
                      }
                      m &&
                        (m.x > 0 ? (a.max.x += m.x) : (a.min.x += m.x),
                        m.y > 0 ? (a.max.y += m.y) : (a.min.y += m.y));
                    }),
                    (c.contains = function (a, f) {
                      return f.x >= a.min.x && f.x <= a.max.x && f.y >= a.min.y && f.y <= a.max.y;
                    }),
                    (c.overlaps = function (a, f) {
                      return (
                        a.min.x <= f.max.x &&
                        a.max.x >= f.min.x &&
                        a.max.y >= f.min.y &&
                        a.min.y <= f.max.y
                      );
                    }),
                    (c.translate = function (a, f) {
                      ((a.min.x += f.x), (a.max.x += f.x), (a.min.y += f.y), (a.max.y += f.y));
                    }),
                    (c.shift = function (a, f) {
                      var m = a.max.x - a.min.x,
                        o = a.max.y - a.min.y;
                      ((a.min.x = f.x), (a.max.x = f.x + m), (a.min.y = f.y), (a.max.y = f.y + o));
                    }));
                })());
            },
            function (b, y) {
              var c = {};
              ((b.exports = c),
                (function () {
                  ((c.create = function (a, f) {
                    return { x: a || 0, y: f || 0 };
                  }),
                    (c.clone = function (a) {
                      return { x: a.x, y: a.y };
                    }),
                    (c.magnitude = function (a) {
                      return Math.sqrt(a.x * a.x + a.y * a.y);
                    }),
                    (c.magnitudeSquared = function (a) {
                      return a.x * a.x + a.y * a.y;
                    }),
                    (c.rotate = function (a, f, m) {
                      var o = Math.cos(f),
                        v = Math.sin(f);
                      m || (m = {});
                      var d = a.x * o - a.y * v;
                      return ((m.y = a.x * v + a.y * o), (m.x = d), m);
                    }),
                    (c.rotateAbout = function (a, f, m, o) {
                      var v = Math.cos(f),
                        d = Math.sin(f);
                      o || (o = {});
                      var h = m.x + ((a.x - m.x) * v - (a.y - m.y) * d);
                      return ((o.y = m.y + ((a.x - m.x) * d + (a.y - m.y) * v)), (o.x = h), o);
                    }),
                    (c.normalise = function (a) {
                      var f = c.magnitude(a);
                      return f === 0 ? { x: 0, y: 0 } : { x: a.x / f, y: a.y / f };
                    }),
                    (c.dot = function (a, f) {
                      return a.x * f.x + a.y * f.y;
                    }),
                    (c.cross = function (a, f) {
                      return a.x * f.y - a.y * f.x;
                    }),
                    (c.cross3 = function (a, f, m) {
                      return (f.x - a.x) * (m.y - a.y) - (f.y - a.y) * (m.x - a.x);
                    }),
                    (c.add = function (a, f, m) {
                      return (m || (m = {}), (m.x = a.x + f.x), (m.y = a.y + f.y), m);
                    }),
                    (c.sub = function (a, f, m) {
                      return (m || (m = {}), (m.x = a.x - f.x), (m.y = a.y - f.y), m);
                    }),
                    (c.mult = function (a, f) {
                      return { x: a.x * f, y: a.y * f };
                    }),
                    (c.div = function (a, f) {
                      return { x: a.x / f, y: a.y / f };
                    }),
                    (c.perp = function (a, f) {
                      return ((f = f === !0 ? -1 : 1), { x: f * -a.y, y: f * a.x });
                    }),
                    (c.neg = function (a) {
                      return { x: -a.x, y: -a.y };
                    }),
                    (c.angle = function (a, f) {
                      return Math.atan2(f.y - a.y, f.x - a.x);
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
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(2),
                m = c(0);
              (function () {
                ((a.create = function (o, v) {
                  for (var d = [], h = 0; h < o.length; h++) {
                    var g = o[h],
                      r = { x: g.x, y: g.y, index: h, body: v, isInternal: !1 };
                    d.push(r);
                  }
                  return d;
                }),
                  (a.fromPath = function (o, v) {
                    var d = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                      h = [];
                    return (
                      o.replace(d, function (g, r, x) {
                        h.push({ x: parseFloat(r), y: parseFloat(x) });
                      }),
                      a.create(h, v)
                    );
                  }),
                  (a.centre = function (o) {
                    for (
                      var v = a.area(o, !0), d = { x: 0, y: 0 }, h, g, r, x = 0;
                      x < o.length;
                      x++
                    )
                      ((r = (x + 1) % o.length),
                        (h = f.cross(o[x], o[r])),
                        (g = f.mult(f.add(o[x], o[r]), h)),
                        (d = f.add(d, g)));
                    return f.div(d, 6 * v);
                  }),
                  (a.mean = function (o) {
                    for (var v = { x: 0, y: 0 }, d = 0; d < o.length; d++)
                      ((v.x += o[d].x), (v.y += o[d].y));
                    return f.div(v, o.length);
                  }),
                  (a.area = function (o, v) {
                    for (var d = 0, h = o.length - 1, g = 0; g < o.length; g++)
                      ((d += (o[h].x - o[g].x) * (o[h].y + o[g].y)), (h = g));
                    return v ? d / 2 : Math.abs(d) / 2;
                  }),
                  (a.inertia = function (o, v) {
                    for (var d = 0, h = 0, g = o, r, x, p = 0; p < g.length; p++)
                      ((x = (p + 1) % g.length),
                        (r = Math.abs(f.cross(g[x], g[p]))),
                        (d += r * (f.dot(g[x], g[x]) + f.dot(g[x], g[p]) + f.dot(g[p], g[p]))),
                        (h += r));
                    return (v / 6) * (d / h);
                  }),
                  (a.translate = function (o, v, d) {
                    d = typeof d < 'u' ? d : 1;
                    var h = o.length,
                      g = v.x * d,
                      r = v.y * d,
                      x;
                    for (x = 0; x < h; x++) ((o[x].x += g), (o[x].y += r));
                    return o;
                  }),
                  (a.rotate = function (o, v, d) {
                    if (v !== 0) {
                      var h = Math.cos(v),
                        g = Math.sin(v),
                        r = d.x,
                        x = d.y,
                        p = o.length,
                        C,
                        R,
                        w,
                        U;
                      for (U = 0; U < p; U++)
                        ((C = o[U]),
                          (R = C.x - r),
                          (w = C.y - x),
                          (C.x = r + (R * h - w * g)),
                          (C.y = x + (R * g + w * h)));
                      return o;
                    }
                  }),
                  (a.contains = function (o, v) {
                    for (var d = v.x, h = v.y, g = o.length, r = o[g - 1], x, p = 0; p < g; p++) {
                      if (((x = o[p]), (d - r.x) * (x.y - r.y) + (h - r.y) * (r.x - x.x) > 0))
                        return !1;
                      r = x;
                    }
                    return !0;
                  }),
                  (a.scale = function (o, v, d, h) {
                    if (v === 1 && d === 1) return o;
                    h = h || a.centre(o);
                    for (var g, r, x = 0; x < o.length; x++)
                      ((g = o[x]),
                        (r = f.sub(g, h)),
                        (o[x].x = h.x + r.x * v),
                        (o[x].y = h.y + r.y * d));
                    return o;
                  }),
                  (a.chamfer = function (o, v, d, h, g) {
                    (typeof v == 'number' ? (v = [v]) : (v = v || [8]),
                      (d = typeof d < 'u' ? d : -1),
                      (h = h || 2),
                      (g = g || 14));
                    for (var r = [], x = 0; x < o.length; x++) {
                      var p = o[x - 1 >= 0 ? x - 1 : o.length - 1],
                        C = o[x],
                        R = o[(x + 1) % o.length],
                        w = v[x < v.length ? x : v.length - 1];
                      if (w === 0) {
                        r.push(C);
                        continue;
                      }
                      var U = f.normalise({ x: C.y - p.y, y: p.x - C.x }),
                        G = f.normalise({ x: R.y - C.y, y: C.x - R.x }),
                        M = Math.sqrt(2 * Math.pow(w, 2)),
                        O = f.mult(m.clone(U), w),
                        D = f.normalise(f.mult(f.add(U, G), 0.5)),
                        _ = f.sub(C, f.mult(D, M)),
                        L = d;
                      (d === -1 && (L = Math.pow(w, 0.32) * 1.75),
                        (L = m.clamp(L, h, g)),
                        L % 2 === 1 && (L += 1));
                      for (var B = Math.acos(f.dot(U, G)), Y = B / L, V = 0; V < L; V++)
                        r.push(f.add(f.rotate(O, Y * V), _));
                    }
                    return r;
                  }),
                  (a.clockwiseSort = function (o) {
                    var v = a.mean(o);
                    return (
                      o.sort(function (d, h) {
                        return f.angle(v, d) - f.angle(v, h);
                      }),
                      o
                    );
                  }),
                  (a.isConvex = function (o) {
                    var v = 0,
                      d = o.length,
                      h,
                      g,
                      r,
                      x;
                    if (d < 3) return null;
                    for (h = 0; h < d; h++)
                      if (
                        ((g = (h + 1) % d),
                        (r = (h + 2) % d),
                        (x = (o[g].x - o[h].x) * (o[r].y - o[g].y)),
                        (x -= (o[g].y - o[h].y) * (o[r].x - o[g].x)),
                        x < 0 ? (v |= 1) : x > 0 && (v |= 2),
                        v === 3)
                      )
                        return !1;
                    return v !== 0 ? !0 : null;
                  }),
                  (a.hull = function (o) {
                    var v = [],
                      d = [],
                      h,
                      g;
                    for (
                      o = o.slice(0),
                        o.sort(function (r, x) {
                          var p = r.x - x.x;
                          return p !== 0 ? p : r.y - x.y;
                        }),
                        g = 0;
                      g < o.length;
                      g += 1
                    ) {
                      for (
                        h = o[g];
                        d.length >= 2 && f.cross3(d[d.length - 2], d[d.length - 1], h) <= 0;
                      )
                        d.pop();
                      d.push(h);
                    }
                    for (g = o.length - 1; g >= 0; g -= 1) {
                      for (
                        h = o[g];
                        v.length >= 2 && f.cross3(v[v.length - 2], v[v.length - 1], h) <= 0;
                      )
                        v.pop();
                      v.push(h);
                    }
                    return (v.pop(), d.pop(), v.concat(d));
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(3),
                m = c(2),
                o = c(7),
                v = c(0),
                d = c(1),
                h = c(11);
              (function () {
                ((a._timeCorrection = !0),
                  (a._inertiaScale = 4),
                  (a._nextCollidingGroupId = 1),
                  (a._nextNonCollidingGroupId = -1),
                  (a._nextCategory = 1),
                  (a._baseDelta = 1e3 / 60),
                  (a.create = function (r) {
                    var x = {
                        id: v.nextId(),
                        type: 'body',
                        label: 'Body',
                        parts: [],
                        plugin: {},
                        angle: 0,
                        vertices: f.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
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
                      p = v.extend(x, r);
                    return (g(p, r), p);
                  }),
                  (a.nextGroup = function (r) {
                    return r ? a._nextNonCollidingGroupId-- : a._nextCollidingGroupId++;
                  }),
                  (a.nextCategory = function () {
                    return ((a._nextCategory = a._nextCategory << 1), a._nextCategory);
                  }));
                var g = function (r, x) {
                  ((x = x || {}),
                    a.set(r, {
                      bounds: r.bounds || d.create(r.vertices),
                      positionPrev: r.positionPrev || m.clone(r.position),
                      anglePrev: r.anglePrev || r.angle,
                      vertices: r.vertices,
                      parts: r.parts || [r],
                      isStatic: r.isStatic,
                      isSleeping: r.isSleeping,
                      parent: r.parent || r,
                    }),
                    f.rotate(r.vertices, r.angle, r.position),
                    h.rotate(r.axes, r.angle),
                    d.update(r.bounds, r.vertices, r.velocity),
                    a.set(r, {
                      axes: x.axes || r.axes,
                      area: x.area || r.area,
                      mass: x.mass || r.mass,
                      inertia: x.inertia || r.inertia,
                    }));
                  var p = r.isStatic
                      ? '#14151f'
                      : v.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1']),
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
                ((a.set = function (r, x, p) {
                  var C;
                  typeof x == 'string' && ((C = x), (x = {}), (x[C] = p));
                  for (C in x)
                    if (Object.prototype.hasOwnProperty.call(x, C))
                      switch (((p = x[C]), C)) {
                        case 'isStatic':
                          a.setStatic(r, p);
                          break;
                        case 'isSleeping':
                          o.set(r, p);
                          break;
                        case 'mass':
                          a.setMass(r, p);
                          break;
                        case 'density':
                          a.setDensity(r, p);
                          break;
                        case 'inertia':
                          a.setInertia(r, p);
                          break;
                        case 'vertices':
                          a.setVertices(r, p);
                          break;
                        case 'position':
                          a.setPosition(r, p);
                          break;
                        case 'angle':
                          a.setAngle(r, p);
                          break;
                        case 'velocity':
                          a.setVelocity(r, p);
                          break;
                        case 'angularVelocity':
                          a.setAngularVelocity(r, p);
                          break;
                        case 'speed':
                          a.setSpeed(r, p);
                          break;
                        case 'angularSpeed':
                          a.setAngularSpeed(r, p);
                          break;
                        case 'parts':
                          a.setParts(r, p);
                          break;
                        case 'centre':
                          a.setCentre(r, p);
                          break;
                        default:
                          r[C] = p;
                      }
                }),
                  (a.setStatic = function (r, x) {
                    for (var p = 0; p < r.parts.length; p++) {
                      var C = r.parts[p];
                      (x
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
                        (C.isStatic = x));
                    }
                  }),
                  (a.setMass = function (r, x) {
                    var p = r.inertia / (r.mass / 6);
                    ((r.inertia = p * (x / 6)),
                      (r.inverseInertia = 1 / r.inertia),
                      (r.mass = x),
                      (r.inverseMass = 1 / r.mass),
                      (r.density = r.mass / r.area));
                  }),
                  (a.setDensity = function (r, x) {
                    (a.setMass(r, x * r.area), (r.density = x));
                  }),
                  (a.setInertia = function (r, x) {
                    ((r.inertia = x), (r.inverseInertia = 1 / r.inertia));
                  }),
                  (a.setVertices = function (r, x) {
                    (x[0].body === r ? (r.vertices = x) : (r.vertices = f.create(x, r)),
                      (r.axes = h.fromVertices(r.vertices)),
                      (r.area = f.area(r.vertices)),
                      a.setMass(r, r.density * r.area));
                    var p = f.centre(r.vertices);
                    (f.translate(r.vertices, p, -1),
                      a.setInertia(r, a._inertiaScale * f.inertia(r.vertices, r.mass)),
                      f.translate(r.vertices, r.position),
                      d.update(r.bounds, r.vertices, r.velocity));
                  }),
                  (a.setParts = function (r, x, p) {
                    var C;
                    for (
                      x = x.slice(0), r.parts.length = 0, r.parts.push(r), r.parent = r, C = 0;
                      C < x.length;
                      C++
                    ) {
                      var R = x[C];
                      R !== r && ((R.parent = r), r.parts.push(R));
                    }
                    if (r.parts.length !== 1) {
                      if (((p = typeof p < 'u' ? p : !0), p)) {
                        var w = [];
                        for (C = 0; C < x.length; C++) w = w.concat(x[C].vertices);
                        f.clockwiseSort(w);
                        var U = f.hull(w),
                          G = f.centre(U);
                        (a.setVertices(r, U), f.translate(r.vertices, G));
                      }
                      var M = a._totalProperties(r);
                      ((r.area = M.area),
                        (r.parent = r),
                        (r.position.x = M.centre.x),
                        (r.position.y = M.centre.y),
                        (r.positionPrev.x = M.centre.x),
                        (r.positionPrev.y = M.centre.y),
                        a.setMass(r, M.mass),
                        a.setInertia(r, M.inertia),
                        a.setPosition(r, M.centre));
                    }
                  }),
                  (a.setCentre = function (r, x, p) {
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
                  (a.setPosition = function (r, x, p) {
                    var C = m.sub(x, r.position);
                    p
                      ? ((r.positionPrev.x = r.position.x),
                        (r.positionPrev.y = r.position.y),
                        (r.velocity.x = C.x),
                        (r.velocity.y = C.y),
                        (r.speed = m.magnitude(C)))
                      : ((r.positionPrev.x += C.x), (r.positionPrev.y += C.y));
                    for (var R = 0; R < r.parts.length; R++) {
                      var w = r.parts[R];
                      ((w.position.x += C.x),
                        (w.position.y += C.y),
                        f.translate(w.vertices, C),
                        d.update(w.bounds, w.vertices, r.velocity));
                    }
                  }),
                  (a.setAngle = function (r, x, p) {
                    var C = x - r.angle;
                    p
                      ? ((r.anglePrev = r.angle),
                        (r.angularVelocity = C),
                        (r.angularSpeed = Math.abs(C)))
                      : (r.anglePrev += C);
                    for (var R = 0; R < r.parts.length; R++) {
                      var w = r.parts[R];
                      ((w.angle += C),
                        f.rotate(w.vertices, C, r.position),
                        h.rotate(w.axes, C),
                        d.update(w.bounds, w.vertices, r.velocity),
                        R > 0 && m.rotateAbout(w.position, C, r.position, w.position));
                    }
                  }),
                  (a.setVelocity = function (r, x) {
                    var p = r.deltaTime / a._baseDelta;
                    ((r.positionPrev.x = r.position.x - x.x * p),
                      (r.positionPrev.y = r.position.y - x.y * p),
                      (r.velocity.x = (r.position.x - r.positionPrev.x) / p),
                      (r.velocity.y = (r.position.y - r.positionPrev.y) / p),
                      (r.speed = m.magnitude(r.velocity)));
                  }),
                  (a.getVelocity = function (r) {
                    var x = a._baseDelta / r.deltaTime;
                    return {
                      x: (r.position.x - r.positionPrev.x) * x,
                      y: (r.position.y - r.positionPrev.y) * x,
                    };
                  }),
                  (a.getSpeed = function (r) {
                    return m.magnitude(a.getVelocity(r));
                  }),
                  (a.setSpeed = function (r, x) {
                    a.setVelocity(r, m.mult(m.normalise(a.getVelocity(r)), x));
                  }),
                  (a.setAngularVelocity = function (r, x) {
                    var p = r.deltaTime / a._baseDelta;
                    ((r.anglePrev = r.angle - x * p),
                      (r.angularVelocity = (r.angle - r.anglePrev) / p),
                      (r.angularSpeed = Math.abs(r.angularVelocity)));
                  }),
                  (a.getAngularVelocity = function (r) {
                    return ((r.angle - r.anglePrev) * a._baseDelta) / r.deltaTime;
                  }),
                  (a.getAngularSpeed = function (r) {
                    return Math.abs(a.getAngularVelocity(r));
                  }),
                  (a.setAngularSpeed = function (r, x) {
                    a.setAngularVelocity(r, v.sign(a.getAngularVelocity(r)) * x);
                  }),
                  (a.translate = function (r, x, p) {
                    a.setPosition(r, m.add(r.position, x), p);
                  }),
                  (a.rotate = function (r, x, p, C) {
                    if (!p) a.setAngle(r, r.angle + x, C);
                    else {
                      var R = Math.cos(x),
                        w = Math.sin(x),
                        U = r.position.x - p.x,
                        G = r.position.y - p.y;
                      (a.setPosition(r, { x: p.x + (U * R - G * w), y: p.y + (U * w + G * R) }, C),
                        a.setAngle(r, r.angle + x, C));
                    }
                  }),
                  (a.scale = function (r, x, p, C) {
                    var R = 0,
                      w = 0;
                    C = C || r.position;
                    for (var U = 0; U < r.parts.length; U++) {
                      var G = r.parts[U];
                      (f.scale(G.vertices, x, p, C),
                        (G.axes = h.fromVertices(G.vertices)),
                        (G.area = f.area(G.vertices)),
                        a.setMass(G, r.density * G.area),
                        f.translate(G.vertices, { x: -G.position.x, y: -G.position.y }),
                        a.setInertia(G, a._inertiaScale * f.inertia(G.vertices, G.mass)),
                        f.translate(G.vertices, { x: G.position.x, y: G.position.y }),
                        U > 0 && ((R += G.area), (w += G.inertia)),
                        (G.position.x = C.x + (G.position.x - C.x) * x),
                        (G.position.y = C.y + (G.position.y - C.y) * p),
                        d.update(G.bounds, G.vertices, r.velocity));
                    }
                    (r.parts.length > 1 &&
                      ((r.area = R),
                      r.isStatic || (a.setMass(r, r.density * R), a.setInertia(r, w))),
                      r.circleRadius &&
                        (x === p ? (r.circleRadius *= x) : (r.circleRadius = null)));
                  }),
                  (a.update = function (r, x) {
                    x = (typeof x < 'u' ? x : 1e3 / 60) * r.timeScale;
                    var p = x * x,
                      C = a._timeCorrection ? x / (r.deltaTime || x) : 1,
                      R = 1 - r.frictionAir * (x / v._baseDelta),
                      w = (r.position.x - r.positionPrev.x) * C,
                      U = (r.position.y - r.positionPrev.y) * C;
                    ((r.velocity.x = w * R + (r.force.x / r.mass) * p),
                      (r.velocity.y = U * R + (r.force.y / r.mass) * p),
                      (r.positionPrev.x = r.position.x),
                      (r.positionPrev.y = r.position.y),
                      (r.position.x += r.velocity.x),
                      (r.position.y += r.velocity.y),
                      (r.deltaTime = x),
                      (r.angularVelocity =
                        (r.angle - r.anglePrev) * R * C + (r.torque / r.inertia) * p),
                      (r.anglePrev = r.angle),
                      (r.angle += r.angularVelocity));
                    for (var G = 0; G < r.parts.length; G++) {
                      var M = r.parts[G];
                      (f.translate(M.vertices, r.velocity),
                        G > 0 && ((M.position.x += r.velocity.x), (M.position.y += r.velocity.y)),
                        r.angularVelocity !== 0 &&
                          (f.rotate(M.vertices, r.angularVelocity, r.position),
                          h.rotate(M.axes, r.angularVelocity),
                          G > 0 &&
                            m.rotateAbout(M.position, r.angularVelocity, r.position, M.position)),
                        d.update(M.bounds, M.vertices, r.velocity));
                    }
                  }),
                  (a.updateVelocities = function (r) {
                    var x = a._baseDelta / r.deltaTime,
                      p = r.velocity;
                    ((p.x = (r.position.x - r.positionPrev.x) * x),
                      (p.y = (r.position.y - r.positionPrev.y) * x),
                      (r.speed = Math.sqrt(p.x * p.x + p.y * p.y)),
                      (r.angularVelocity = (r.angle - r.anglePrev) * x),
                      (r.angularSpeed = Math.abs(r.angularVelocity)));
                  }),
                  (a.applyForce = function (r, x, p) {
                    var C = { x: x.x - r.position.x, y: x.y - r.position.y };
                    ((r.force.x += p.x), (r.force.y += p.y), (r.torque += C.x * p.y - C.y * p.x));
                  }),
                  (a._totalProperties = function (r) {
                    for (
                      var x = { mass: 0, area: 0, inertia: 0, centre: { x: 0, y: 0 } },
                        p = r.parts.length === 1 ? 0 : 1;
                      p < r.parts.length;
                      p++
                    ) {
                      var C = r.parts[p],
                        R = C.mass !== 1 / 0 ? C.mass : 1;
                      ((x.mass += R),
                        (x.area += C.area),
                        (x.inertia += C.inertia),
                        (x.centre = m.add(x.centre, m.mult(C.position, R))));
                    }
                    return ((x.centre = m.div(x.centre, x.mass)), x);
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(0);
              (function () {
                ((a.on = function (m, o, v) {
                  for (var d = o.split(' '), h, g = 0; g < d.length; g++)
                    ((h = d[g]),
                      (m.events = m.events || {}),
                      (m.events[h] = m.events[h] || []),
                      m.events[h].push(v));
                  return v;
                }),
                  (a.off = function (m, o, v) {
                    if (!o) {
                      m.events = {};
                      return;
                    }
                    typeof o == 'function' && ((v = o), (o = f.keys(m.events).join(' ')));
                    for (var d = o.split(' '), h = 0; h < d.length; h++) {
                      var g = m.events[d[h]],
                        r = [];
                      if (v && g) for (var x = 0; x < g.length; x++) g[x] !== v && r.push(g[x]);
                      m.events[d[h]] = r;
                    }
                  }),
                  (a.trigger = function (m, o, v) {
                    var d,
                      h,
                      g,
                      r,
                      x = m.events;
                    if (x && f.keys(x).length > 0) {
                      (v || (v = {}), (d = o.split(' ')));
                      for (var p = 0; p < d.length; p++)
                        if (((h = d[p]), (g = x[h]), g)) {
                          ((r = f.clone(v, !1)), (r.name = h), (r.source = m));
                          for (var C = 0; C < g.length; C++) g[C].apply(m, [r]);
                        }
                    }
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(5),
                m = c(0),
                o = c(1),
                v = c(4);
              (function () {
                ((a.create = function (d) {
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
                    d
                  );
                }),
                  (a.setModified = function (d, h, g, r) {
                    if (
                      ((d.isModified = h),
                      h &&
                        d.cache &&
                        ((d.cache.allBodies = null),
                        (d.cache.allConstraints = null),
                        (d.cache.allComposites = null)),
                      g && d.parent && a.setModified(d.parent, h, g, r),
                      r)
                    )
                      for (var x = 0; x < d.composites.length; x++) {
                        var p = d.composites[x];
                        a.setModified(p, h, g, r);
                      }
                  }),
                  (a.add = function (d, h) {
                    var g = [].concat(h);
                    f.trigger(d, 'beforeAdd', { object: h });
                    for (var r = 0; r < g.length; r++) {
                      var x = g[r];
                      switch (x.type) {
                        case 'body':
                          if (x.parent !== x) {
                            m.warn(
                              'Composite.add: skipped adding a compound body part (you must add its parent instead)'
                            );
                            break;
                          }
                          a.addBody(d, x);
                          break;
                        case 'constraint':
                          a.addConstraint(d, x);
                          break;
                        case 'composite':
                          a.addComposite(d, x);
                          break;
                        case 'mouseConstraint':
                          a.addConstraint(d, x.constraint);
                          break;
                      }
                    }
                    return (f.trigger(d, 'afterAdd', { object: h }), d);
                  }),
                  (a.remove = function (d, h, g) {
                    var r = [].concat(h);
                    f.trigger(d, 'beforeRemove', { object: h });
                    for (var x = 0; x < r.length; x++) {
                      var p = r[x];
                      switch (p.type) {
                        case 'body':
                          a.removeBody(d, p, g);
                          break;
                        case 'constraint':
                          a.removeConstraint(d, p, g);
                          break;
                        case 'composite':
                          a.removeComposite(d, p, g);
                          break;
                        case 'mouseConstraint':
                          a.removeConstraint(d, p.constraint);
                          break;
                      }
                    }
                    return (f.trigger(d, 'afterRemove', { object: h }), d);
                  }),
                  (a.addComposite = function (d, h) {
                    return (d.composites.push(h), (h.parent = d), a.setModified(d, !0, !0, !1), d);
                  }),
                  (a.removeComposite = function (d, h, g) {
                    var r = m.indexOf(d.composites, h);
                    if (r !== -1) {
                      var x = a.allBodies(h);
                      a.removeCompositeAt(d, r);
                      for (var p = 0; p < x.length; p++) x[p].sleepCounter = 0;
                    }
                    if (g)
                      for (var p = 0; p < d.composites.length; p++)
                        a.removeComposite(d.composites[p], h, !0);
                    return d;
                  }),
                  (a.removeCompositeAt = function (d, h) {
                    return (d.composites.splice(h, 1), a.setModified(d, !0, !0, !1), d);
                  }),
                  (a.addBody = function (d, h) {
                    return (d.bodies.push(h), a.setModified(d, !0, !0, !1), d);
                  }),
                  (a.removeBody = function (d, h, g) {
                    var r = m.indexOf(d.bodies, h);
                    if ((r !== -1 && (a.removeBodyAt(d, r), (h.sleepCounter = 0)), g))
                      for (var x = 0; x < d.composites.length; x++)
                        a.removeBody(d.composites[x], h, !0);
                    return d;
                  }),
                  (a.removeBodyAt = function (d, h) {
                    return (d.bodies.splice(h, 1), a.setModified(d, !0, !0, !1), d);
                  }),
                  (a.addConstraint = function (d, h) {
                    return (d.constraints.push(h), a.setModified(d, !0, !0, !1), d);
                  }),
                  (a.removeConstraint = function (d, h, g) {
                    var r = m.indexOf(d.constraints, h);
                    if ((r !== -1 && a.removeConstraintAt(d, r), g))
                      for (var x = 0; x < d.composites.length; x++)
                        a.removeConstraint(d.composites[x], h, !0);
                    return d;
                  }),
                  (a.removeConstraintAt = function (d, h) {
                    return (d.constraints.splice(h, 1), a.setModified(d, !0, !0, !1), d);
                  }),
                  (a.clear = function (d, h, g) {
                    if (g)
                      for (var r = 0; r < d.composites.length; r++) a.clear(d.composites[r], h, !0);
                    return (
                      h
                        ? (d.bodies = d.bodies.filter(function (x) {
                            return x.isStatic;
                          }))
                        : (d.bodies.length = 0),
                      (d.constraints.length = 0),
                      (d.composites.length = 0),
                      a.setModified(d, !0, !0, !1),
                      d
                    );
                  }),
                  (a.allBodies = function (d) {
                    if (d.cache && d.cache.allBodies) return d.cache.allBodies;
                    for (var h = [].concat(d.bodies), g = 0; g < d.composites.length; g++)
                      h = h.concat(a.allBodies(d.composites[g]));
                    return (d.cache && (d.cache.allBodies = h), h);
                  }),
                  (a.allConstraints = function (d) {
                    if (d.cache && d.cache.allConstraints) return d.cache.allConstraints;
                    for (var h = [].concat(d.constraints), g = 0; g < d.composites.length; g++)
                      h = h.concat(a.allConstraints(d.composites[g]));
                    return (d.cache && (d.cache.allConstraints = h), h);
                  }),
                  (a.allComposites = function (d) {
                    if (d.cache && d.cache.allComposites) return d.cache.allComposites;
                    for (var h = [].concat(d.composites), g = 0; g < d.composites.length; g++)
                      h = h.concat(a.allComposites(d.composites[g]));
                    return (d.cache && (d.cache.allComposites = h), h);
                  }),
                  (a.get = function (d, h, g) {
                    var r, x;
                    switch (g) {
                      case 'body':
                        r = a.allBodies(d);
                        break;
                      case 'constraint':
                        r = a.allConstraints(d);
                        break;
                      case 'composite':
                        r = a.allComposites(d).concat(d);
                        break;
                    }
                    return r
                      ? ((x = r.filter(function (p) {
                          return p.id.toString() === h.toString();
                        })),
                        x.length === 0 ? null : x[0])
                      : null;
                  }),
                  (a.move = function (d, h, g) {
                    return (a.remove(d, h), a.add(g, h), d);
                  }),
                  (a.rebase = function (d) {
                    for (
                      var h = a.allBodies(d).concat(a.allConstraints(d)).concat(a.allComposites(d)),
                        g = 0;
                      g < h.length;
                      g++
                    )
                      h[g].id = m.nextId();
                    return d;
                  }),
                  (a.translate = function (d, h, g) {
                    for (var r = g ? a.allBodies(d) : d.bodies, x = 0; x < r.length; x++)
                      v.translate(r[x], h);
                    return d;
                  }),
                  (a.rotate = function (d, h, g, r) {
                    for (
                      var x = Math.cos(h),
                        p = Math.sin(h),
                        C = r ? a.allBodies(d) : d.bodies,
                        R = 0;
                      R < C.length;
                      R++
                    ) {
                      var w = C[R],
                        U = w.position.x - g.x,
                        G = w.position.y - g.y;
                      (v.setPosition(w, { x: g.x + (U * x - G * p), y: g.y + (U * p + G * x) }),
                        v.rotate(w, h));
                    }
                    return d;
                  }),
                  (a.scale = function (d, h, g, r, x) {
                    for (var p = x ? a.allBodies(d) : d.bodies, C = 0; C < p.length; C++) {
                      var R = p[C],
                        w = R.position.x - r.x,
                        U = R.position.y - r.y;
                      (v.setPosition(R, { x: r.x + w * h, y: r.y + U * g }), v.scale(R, h, g));
                    }
                    return d;
                  }),
                  (a.bounds = function (d) {
                    for (var h = a.allBodies(d), g = [], r = 0; r < h.length; r += 1) {
                      var x = h[r];
                      g.push(x.bounds.min, x.bounds.max);
                    }
                    return o.create(g);
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(4),
                m = c(5),
                o = c(0);
              (function () {
                ((a._motionWakeThreshold = 0.18),
                  (a._motionSleepThreshold = 0.08),
                  (a._minBias = 0.9),
                  (a.update = function (v, d) {
                    for (
                      var h = d / o._baseDelta, g = a._motionSleepThreshold, r = 0;
                      r < v.length;
                      r++
                    ) {
                      var x = v[r],
                        p = f.getSpeed(x),
                        C = f.getAngularSpeed(x),
                        R = p * p + C * C;
                      if (x.force.x !== 0 || x.force.y !== 0) {
                        a.set(x, !1);
                        continue;
                      }
                      var w = Math.min(x.motion, R),
                        U = Math.max(x.motion, R);
                      ((x.motion = a._minBias * w + (1 - a._minBias) * U),
                        x.sleepThreshold > 0 && x.motion < g
                          ? ((x.sleepCounter += 1),
                            x.sleepCounter >= x.sleepThreshold / h && a.set(x, !0))
                          : x.sleepCounter > 0 && (x.sleepCounter -= 1));
                    }
                  }),
                  (a.afterCollisions = function (v) {
                    for (var d = a._motionSleepThreshold, h = 0; h < v.length; h++) {
                      var g = v[h];
                      if (g.isActive) {
                        var r = g.collision,
                          x = r.bodyA.parent,
                          p = r.bodyB.parent;
                        if (
                          !((x.isSleeping && p.isSleeping) || x.isStatic || p.isStatic) &&
                          (x.isSleeping || p.isSleeping)
                        ) {
                          var C = x.isSleeping && !x.isStatic ? x : p,
                            R = C === x ? p : x;
                          !C.isStatic && R.motion > d && a.set(C, !1);
                        }
                      }
                    }
                  }),
                  (a.set = function (v, d) {
                    var h = v.isSleeping;
                    d
                      ? ((v.isSleeping = !0),
                        (v.sleepCounter = v.sleepThreshold),
                        (v.positionImpulse.x = 0),
                        (v.positionImpulse.y = 0),
                        (v.positionPrev.x = v.position.x),
                        (v.positionPrev.y = v.position.y),
                        (v.anglePrev = v.angle),
                        (v.speed = 0),
                        (v.angularSpeed = 0),
                        (v.motion = 0),
                        h || m.trigger(v, 'sleepStart'))
                      : ((v.isSleeping = !1), (v.sleepCounter = 0), h && m.trigger(v, 'sleepEnd'));
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(3),
                m = c(9);
              (function () {
                var o = [],
                  v = { overlap: 0, axis: null },
                  d = { overlap: 0, axis: null };
                ((a.create = function (h, g) {
                  return {
                    pair: null,
                    collided: !1,
                    bodyA: h,
                    bodyB: g,
                    parentA: h.parent,
                    parentB: g.parent,
                    depth: 0,
                    normal: { x: 0, y: 0 },
                    tangent: { x: 0, y: 0 },
                    penetration: { x: 0, y: 0 },
                    supports: [null, null],
                    supportCount: 0,
                  };
                }),
                  (a.collides = function (h, g, r) {
                    if (
                      (a._overlapAxes(v, h.vertices, g.vertices, h.axes),
                      v.overlap <= 0 ||
                        (a._overlapAxes(d, g.vertices, h.vertices, g.axes), d.overlap <= 0))
                    )
                      return null;
                    var x = r && r.table[m.id(h, g)],
                      p;
                    (x
                      ? (p = x.collision)
                      : ((p = a.create(h, g)),
                        (p.collided = !0),
                        (p.bodyA = h.id < g.id ? h : g),
                        (p.bodyB = h.id < g.id ? g : h),
                        (p.parentA = p.bodyA.parent),
                        (p.parentB = p.bodyB.parent)),
                      (h = p.bodyA),
                      (g = p.bodyB));
                    var C;
                    v.overlap < d.overlap ? (C = v) : (C = d);
                    var R = p.normal,
                      w = p.tangent,
                      U = p.penetration,
                      G = p.supports,
                      M = C.overlap,
                      O = C.axis,
                      D = O.x,
                      _ = O.y,
                      L = g.position.x - h.position.x,
                      B = g.position.y - h.position.y;
                    (D * L + _ * B >= 0 && ((D = -D), (_ = -_)),
                      (R.x = D),
                      (R.y = _),
                      (w.x = -_),
                      (w.y = D),
                      (U.x = D * M),
                      (U.y = _ * M),
                      (p.depth = M));
                    var Y = a._findSupports(h, g, R, 1),
                      V = 0;
                    if (
                      (f.contains(h.vertices, Y[0]) && (G[V++] = Y[0]),
                      f.contains(h.vertices, Y[1]) && (G[V++] = Y[1]),
                      V < 2)
                    ) {
                      var F = a._findSupports(g, h, R, -1);
                      (f.contains(g.vertices, F[0]) && (G[V++] = F[0]),
                        V < 2 && f.contains(g.vertices, F[1]) && (G[V++] = F[1]));
                    }
                    return (V === 0 && (G[V++] = Y[0]), (p.supportCount = V), p);
                  }),
                  (a._overlapAxes = function (h, g, r, x) {
                    var p = g.length,
                      C = r.length,
                      R = g[0].x,
                      w = g[0].y,
                      U = r[0].x,
                      G = r[0].y,
                      M = x.length,
                      O = Number.MAX_VALUE,
                      D = 0,
                      _,
                      L,
                      B,
                      Y,
                      V,
                      F;
                    for (V = 0; V < M; V++) {
                      var ie = x[V],
                        le = ie.x,
                        A = ie.y,
                        N = R * le + w * A,
                        q = U * le + G * A,
                        $ = N,
                        ae = q;
                      for (F = 1; F < p; F += 1)
                        ((Y = g[F].x * le + g[F].y * A), Y > $ ? ($ = Y) : Y < N && (N = Y));
                      for (F = 1; F < C; F += 1)
                        ((Y = r[F].x * le + r[F].y * A), Y > ae ? (ae = Y) : Y < q && (q = Y));
                      if (
                        ((L = $ - q),
                        (B = ae - N),
                        (_ = L < B ? L : B),
                        _ < O && ((O = _), (D = V), _ <= 0))
                      )
                        break;
                    }
                    ((h.axis = x[D]), (h.overlap = O));
                  }),
                  (a._findSupports = function (h, g, r, x) {
                    var p = g.vertices,
                      C = p.length,
                      R = h.position.x,
                      w = h.position.y,
                      U = r.x * x,
                      G = r.y * x,
                      M = p[0],
                      O = M,
                      D = U * (R - O.x) + G * (w - O.y),
                      _,
                      L,
                      B;
                    for (B = 1; B < C; B += 1)
                      ((O = p[B]),
                        (L = U * (R - O.x) + G * (w - O.y)),
                        L < D && ((D = L), (M = O)));
                    return (
                      (_ = p[(C + M.index - 1) % C]),
                      (D = U * (R - _.x) + G * (w - _.y)),
                      (O = p[(M.index + 1) % C]),
                      U * (R - O.x) + G * (w - O.y) < D
                        ? ((o[0] = M), (o[1] = O), o)
                        : ((o[0] = M), (o[1] = _), o)
                    );
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(16);
              (function () {
                ((a.create = function (m, o) {
                  var v = m.bodyA,
                    d = m.bodyB,
                    h = {
                      id: a.id(v, d),
                      bodyA: v,
                      bodyB: d,
                      collision: m,
                      contacts: [f.create(), f.create()],
                      contactCount: 0,
                      separation: 0,
                      isActive: !0,
                      isSensor: v.isSensor || d.isSensor,
                      timeCreated: o,
                      timeUpdated: o,
                      inverseMass: 0,
                      friction: 0,
                      frictionStatic: 0,
                      restitution: 0,
                      slop: 0,
                    };
                  return (a.update(h, m, o), h);
                }),
                  (a.update = function (m, o, v) {
                    var d = o.supports,
                      h = o.supportCount,
                      g = m.contacts,
                      r = o.parentA,
                      x = o.parentB;
                    ((m.isActive = !0),
                      (m.timeUpdated = v),
                      (m.collision = o),
                      (m.separation = o.depth),
                      (m.inverseMass = r.inverseMass + x.inverseMass),
                      (m.friction = r.friction < x.friction ? r.friction : x.friction),
                      (m.frictionStatic =
                        r.frictionStatic > x.frictionStatic ? r.frictionStatic : x.frictionStatic),
                      (m.restitution =
                        r.restitution > x.restitution ? r.restitution : x.restitution),
                      (m.slop = r.slop > x.slop ? r.slop : x.slop),
                      (m.contactCount = h),
                      (o.pair = m));
                    var p = d[0],
                      C = g[0],
                      R = d[1],
                      w = g[1];
                    ((w.vertex === p || C.vertex === R) && ((g[1] = C), (g[0] = C = w), (w = g[1])),
                      (C.vertex = p),
                      (w.vertex = R));
                  }),
                  (a.setActive = function (m, o, v) {
                    o
                      ? ((m.isActive = !0), (m.timeUpdated = v))
                      : ((m.isActive = !1), (m.contactCount = 0));
                  }),
                  (a.id = function (m, o) {
                    return m.id < o.id
                      ? m.id.toString(36) + ':' + o.id.toString(36)
                      : o.id.toString(36) + ':' + m.id.toString(36);
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(3),
                m = c(2),
                o = c(7),
                v = c(1),
                d = c(11),
                h = c(0);
              (function () {
                ((a._warming = 0.4),
                  (a._torqueDampen = 1),
                  (a._minLength = 1e-6),
                  (a.create = function (g) {
                    var r = g;
                    (r.bodyA && !r.pointA && (r.pointA = { x: 0, y: 0 }),
                      r.bodyB && !r.pointB && (r.pointB = { x: 0, y: 0 }));
                    var x = r.bodyA ? m.add(r.bodyA.position, r.pointA) : r.pointA,
                      p = r.bodyB ? m.add(r.bodyB.position, r.pointB) : r.pointB,
                      C = m.magnitude(m.sub(x, p));
                    ((r.length = typeof r.length < 'u' ? r.length : C),
                      (r.id = r.id || h.nextId()),
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
                      (r.render = h.extend(R, r.render)),
                      r
                    );
                  }),
                  (a.preSolveAll = function (g) {
                    for (var r = 0; r < g.length; r += 1) {
                      var x = g[r],
                        p = x.constraintImpulse;
                      x.isStatic ||
                        (p.x === 0 && p.y === 0 && p.angle === 0) ||
                        ((x.position.x += p.x), (x.position.y += p.y), (x.angle += p.angle));
                    }
                  }),
                  (a.solveAll = function (g, r) {
                    for (var x = h.clamp(r / h._baseDelta, 0, 1), p = 0; p < g.length; p += 1) {
                      var C = g[p],
                        R = !C.bodyA || (C.bodyA && C.bodyA.isStatic),
                        w = !C.bodyB || (C.bodyB && C.bodyB.isStatic);
                      (R || w) && a.solve(g[p], x);
                    }
                    for (p = 0; p < g.length; p += 1)
                      ((C = g[p]),
                        (R = !C.bodyA || (C.bodyA && C.bodyA.isStatic)),
                        (w = !C.bodyB || (C.bodyB && C.bodyB.isStatic)),
                        !R && !w && a.solve(g[p], x));
                  }),
                  (a.solve = function (g, r) {
                    var x = g.bodyA,
                      p = g.bodyB,
                      C = g.pointA,
                      R = g.pointB;
                    if (!(!x && !p)) {
                      (x &&
                        !x.isStatic &&
                        (m.rotate(C, x.angle - g.angleA, C), (g.angleA = x.angle)),
                        p &&
                          !p.isStatic &&
                          (m.rotate(R, p.angle - g.angleB, R), (g.angleB = p.angle)));
                      var w = C,
                        U = R;
                      if (
                        (x && (w = m.add(x.position, C)),
                        p && (U = m.add(p.position, R)),
                        !(!w || !U))
                      ) {
                        var G = m.sub(w, U),
                          M = m.magnitude(G);
                        M < a._minLength && (M = a._minLength);
                        var O = (M - g.length) / M,
                          D = g.stiffness >= 1 || g.length === 0,
                          _ = D ? g.stiffness * r : g.stiffness * r * r,
                          L = g.damping * r,
                          B = m.mult(G, O * _),
                          Y = (x ? x.inverseMass : 0) + (p ? p.inverseMass : 0),
                          V = (x ? x.inverseInertia : 0) + (p ? p.inverseInertia : 0),
                          F = Y + V,
                          ie,
                          le,
                          A,
                          N,
                          q;
                        if (L > 0) {
                          var $ = m.create();
                          ((A = m.div(G, M)),
                            (q = m.sub(
                              (p && m.sub(p.position, p.positionPrev)) || $,
                              (x && m.sub(x.position, x.positionPrev)) || $
                            )),
                            (N = m.dot(A, q)));
                        }
                        (x &&
                          !x.isStatic &&
                          ((le = x.inverseMass / Y),
                          (x.constraintImpulse.x -= B.x * le),
                          (x.constraintImpulse.y -= B.y * le),
                          (x.position.x -= B.x * le),
                          (x.position.y -= B.y * le),
                          L > 0 &&
                            ((x.positionPrev.x -= L * A.x * N * le),
                            (x.positionPrev.y -= L * A.y * N * le)),
                          (ie =
                            (m.cross(C, B) / F) *
                            a._torqueDampen *
                            x.inverseInertia *
                            (1 - g.angularStiffness)),
                          (x.constraintImpulse.angle -= ie),
                          (x.angle -= ie)),
                          p &&
                            !p.isStatic &&
                            ((le = p.inverseMass / Y),
                            (p.constraintImpulse.x += B.x * le),
                            (p.constraintImpulse.y += B.y * le),
                            (p.position.x += B.x * le),
                            (p.position.y += B.y * le),
                            L > 0 &&
                              ((p.positionPrev.x += L * A.x * N * le),
                              (p.positionPrev.y += L * A.y * N * le)),
                            (ie =
                              (m.cross(R, B) / F) *
                              a._torqueDampen *
                              p.inverseInertia *
                              (1 - g.angularStiffness)),
                            (p.constraintImpulse.angle += ie),
                            (p.angle += ie)));
                      }
                    }
                  }),
                  (a.postSolveAll = function (g) {
                    for (var r = 0; r < g.length; r++) {
                      var x = g[r],
                        p = x.constraintImpulse;
                      if (!(x.isStatic || (p.x === 0 && p.y === 0 && p.angle === 0))) {
                        o.set(x, !1);
                        for (var C = 0; C < x.parts.length; C++) {
                          var R = x.parts[C];
                          (f.translate(R.vertices, p),
                            C > 0 && ((R.position.x += p.x), (R.position.y += p.y)),
                            p.angle !== 0 &&
                              (f.rotate(R.vertices, p.angle, x.position),
                              d.rotate(R.axes, p.angle),
                              C > 0 && m.rotateAbout(R.position, p.angle, x.position, R.position)),
                            v.update(R.bounds, R.vertices, x.velocity));
                        }
                        ((p.angle *= a._warming), (p.x *= a._warming), (p.y *= a._warming));
                      }
                    }
                  }),
                  (a.pointAWorld = function (g) {
                    return {
                      x: (g.bodyA ? g.bodyA.position.x : 0) + (g.pointA ? g.pointA.x : 0),
                      y: (g.bodyA ? g.bodyA.position.y : 0) + (g.pointA ? g.pointA.y : 0),
                    };
                  }),
                  (a.pointBWorld = function (g) {
                    return {
                      x: (g.bodyB ? g.bodyB.position.x : 0) + (g.pointB ? g.pointB.x : 0),
                      y: (g.bodyB ? g.bodyB.position.y : 0) + (g.pointB ? g.pointB.y : 0),
                    };
                  }),
                  (a.currentLength = function (g) {
                    var r = (g.bodyA ? g.bodyA.position.x : 0) + (g.pointA ? g.pointA.x : 0),
                      x = (g.bodyA ? g.bodyA.position.y : 0) + (g.pointA ? g.pointA.y : 0),
                      p = (g.bodyB ? g.bodyB.position.x : 0) + (g.pointB ? g.pointB.x : 0),
                      C = (g.bodyB ? g.bodyB.position.y : 0) + (g.pointB ? g.pointB.y : 0),
                      R = r - p,
                      w = x - C;
                    return Math.sqrt(R * R + w * w);
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(2),
                m = c(0);
              (function () {
                ((a.fromVertices = function (o) {
                  for (var v = {}, d = 0; d < o.length; d++) {
                    var h = (d + 1) % o.length,
                      g = f.normalise({ x: o[h].y - o[d].y, y: o[d].x - o[h].x }),
                      r = g.y === 0 ? 1 / 0 : g.x / g.y;
                    ((r = r.toFixed(3).toString()), (v[r] = g));
                  }
                  return m.values(v);
                }),
                  (a.rotate = function (o, v) {
                    if (v !== 0)
                      for (var d = Math.cos(v), h = Math.sin(v), g = 0; g < o.length; g++) {
                        var r = o[g],
                          x;
                        ((x = r.x * d - r.y * h), (r.y = r.x * h + r.y * d), (r.x = x));
                      }
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(3),
                m = c(0),
                o = c(4),
                v = c(1),
                d = c(2);
              (function () {
                ((a.rectangle = function (h, g, r, x, p) {
                  p = p || {};
                  var C = {
                    label: 'Rectangle Body',
                    position: { x: h, y: g },
                    vertices: f.fromPath('L 0 0 L ' + r + ' 0 L ' + r + ' ' + x + ' L 0 ' + x),
                  };
                  if (p.chamfer) {
                    var R = p.chamfer;
                    ((C.vertices = f.chamfer(
                      C.vertices,
                      R.radius,
                      R.quality,
                      R.qualityMin,
                      R.qualityMax
                    )),
                      delete p.chamfer);
                  }
                  return o.create(m.extend({}, C, p));
                }),
                  (a.trapezoid = function (h, g, r, x, p, C) {
                    ((C = C || {}),
                      p >= 1 && m.warn('Bodies.trapezoid: slope parameter must be < 1.'),
                      (p *= 0.5));
                    var R = (1 - p * 2) * r,
                      w = r * p,
                      U = w + R,
                      G = U + w,
                      M;
                    p < 0.5
                      ? (M = 'L 0 0 L ' + w + ' ' + -x + ' L ' + U + ' ' + -x + ' L ' + G + ' 0')
                      : (M = 'L 0 0 L ' + U + ' ' + -x + ' L ' + G + ' 0');
                    var O = {
                      label: 'Trapezoid Body',
                      position: { x: h, y: g },
                      vertices: f.fromPath(M),
                    };
                    if (C.chamfer) {
                      var D = C.chamfer;
                      ((O.vertices = f.chamfer(
                        O.vertices,
                        D.radius,
                        D.quality,
                        D.qualityMin,
                        D.qualityMax
                      )),
                        delete C.chamfer);
                    }
                    return o.create(m.extend({}, O, C));
                  }),
                  (a.circle = function (h, g, r, x, p) {
                    x = x || {};
                    var C = { label: 'Circle Body', circleRadius: r };
                    p = p || 25;
                    var R = Math.ceil(Math.max(10, Math.min(p, r)));
                    return (R % 2 === 1 && (R += 1), a.polygon(h, g, R, r, m.extend({}, C, x)));
                  }),
                  (a.polygon = function (h, g, r, x, p) {
                    if (((p = p || {}), r < 3)) return a.circle(h, g, x, p);
                    for (var C = (2 * Math.PI) / r, R = '', w = C * 0.5, U = 0; U < r; U += 1) {
                      var G = w + U * C,
                        M = Math.cos(G) * x,
                        O = Math.sin(G) * x;
                      R += 'L ' + M.toFixed(3) + ' ' + O.toFixed(3) + ' ';
                    }
                    var D = {
                      label: 'Polygon Body',
                      position: { x: h, y: g },
                      vertices: f.fromPath(R),
                    };
                    if (p.chamfer) {
                      var _ = p.chamfer;
                      ((D.vertices = f.chamfer(
                        D.vertices,
                        _.radius,
                        _.quality,
                        _.qualityMin,
                        _.qualityMax
                      )),
                        delete p.chamfer);
                    }
                    return o.create(m.extend({}, D, p));
                  }),
                  (a.fromVertices = function (h, g, r, x, p, C, R, w) {
                    var U = m.getDecomp(),
                      G,
                      M,
                      O,
                      D,
                      _,
                      L,
                      B,
                      Y,
                      V,
                      F,
                      ie;
                    for (
                      G = !!(U && U.quickDecomp),
                        x = x || {},
                        O = [],
                        p = typeof p < 'u' ? p : !1,
                        C = typeof C < 'u' ? C : 0.01,
                        R = typeof R < 'u' ? R : 10,
                        w = typeof w < 'u' ? w : 0.01,
                        m.isArray(r[0]) || (r = [r]),
                        F = 0;
                      F < r.length;
                      F += 1
                    )
                      if (
                        ((L = r[F]),
                        (D = f.isConvex(L)),
                        (_ = !D),
                        _ &&
                          !G &&
                          m.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                          ),
                        D || !G)
                      )
                        (D ? (L = f.clockwiseSort(L)) : (L = f.hull(L)),
                          O.push({ position: { x: h, y: g }, vertices: L }));
                      else {
                        var le = L.map(function (ce) {
                          return [ce.x, ce.y];
                        });
                        (U.makeCCW(le),
                          C !== !1 && U.removeCollinearPoints(le, C),
                          w !== !1 && U.removeDuplicatePoints && U.removeDuplicatePoints(le, w));
                        var A = U.quickDecomp(le);
                        for (B = 0; B < A.length; B++) {
                          var N = A[B],
                            q = N.map(function (ce) {
                              return { x: ce[0], y: ce[1] };
                            });
                          (R > 0 && f.area(q) < R) ||
                            O.push({ position: f.centre(q), vertices: q });
                        }
                      }
                    for (B = 0; B < O.length; B++) O[B] = o.create(m.extend(O[B], x));
                    if (p) {
                      var $ = 5;
                      for (B = 0; B < O.length; B++) {
                        var ae = O[B];
                        for (Y = B + 1; Y < O.length; Y++) {
                          var z = O[Y];
                          if (v.overlaps(ae.bounds, z.bounds)) {
                            var Z = ae.vertices,
                              P = z.vertices;
                            for (V = 0; V < ae.vertices.length; V++)
                              for (ie = 0; ie < z.vertices.length; ie++) {
                                var ue = d.magnitudeSquared(d.sub(Z[(V + 1) % Z.length], P[ie])),
                                  se = d.magnitudeSquared(d.sub(Z[V], P[(ie + 1) % P.length]));
                                ue < $ &&
                                  se < $ &&
                                  ((Z[V].isInternal = !0), (P[ie].isInternal = !0));
                              }
                          }
                        }
                      }
                    }
                    return O.length > 1
                      ? ((M = o.create(m.extend({ parts: O.slice(0) }, x))),
                        o.setPosition(M, { x: h, y: g }),
                        M)
                      : O[0];
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(0),
                m = c(8);
              (function () {
                ((a.create = function (o) {
                  var v = { bodies: [], collisions: [], pairs: null };
                  return f.extend(v, o);
                }),
                  (a.setBodies = function (o, v) {
                    o.bodies = v.slice(0);
                  }),
                  (a.clear = function (o) {
                    ((o.bodies = []), (o.collisions = []));
                  }),
                  (a.collisions = function (o) {
                    var v = o.pairs,
                      d = o.bodies,
                      h = d.length,
                      g = a.canCollide,
                      r = m.collides,
                      x = o.collisions,
                      p = 0,
                      C,
                      R;
                    for (d.sort(a._compareBoundsX), C = 0; C < h; C++) {
                      var w = d[C],
                        U = w.bounds,
                        G = w.bounds.max.x,
                        M = w.bounds.max.y,
                        O = w.bounds.min.y,
                        D = w.isStatic || w.isSleeping,
                        _ = w.parts.length,
                        L = _ === 1;
                      for (R = C + 1; R < h; R++) {
                        var B = d[R],
                          Y = B.bounds;
                        if (Y.min.x > G) break;
                        if (
                          !(M < Y.min.y || O > Y.max.y) &&
                          !(D && (B.isStatic || B.isSleeping)) &&
                          g(w.collisionFilter, B.collisionFilter)
                        ) {
                          var V = B.parts.length;
                          if (L && V === 1) {
                            var F = r(w, B, v);
                            F && (x[p++] = F);
                          } else
                            for (var ie = _ > 1 ? 1 : 0, le = V > 1 ? 1 : 0, A = ie; A < _; A++)
                              for (var N = w.parts[A], U = N.bounds, q = le; q < V; q++) {
                                var $ = B.parts[q],
                                  Y = $.bounds;
                                if (
                                  !(
                                    U.min.x > Y.max.x ||
                                    U.max.x < Y.min.x ||
                                    U.max.y < Y.min.y ||
                                    U.min.y > Y.max.y
                                  )
                                ) {
                                  var F = r(N, $, v);
                                  F && (x[p++] = F);
                                }
                              }
                        }
                      }
                    }
                    return (x.length !== p && (x.length = p), x);
                  }),
                  (a.canCollide = function (o, v) {
                    return o.group === v.group && o.group !== 0
                      ? o.group > 0
                      : (o.mask & v.category) !== 0 && (v.mask & o.category) !== 0;
                  }),
                  (a._compareBoundsX = function (o, v) {
                    return o.bounds.min.x - v.bounds.min.x;
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(0);
              (function () {
                ((a.create = function (m) {
                  var o = {};
                  return (
                    m ||
                      f.log(
                        'Mouse.create: element was undefined, defaulting to document.body',
                        'warn'
                      ),
                    (o.element = m || document.body),
                    (o.absolute = { x: 0, y: 0 }),
                    (o.position = { x: 0, y: 0 }),
                    (o.mousedownPosition = { x: 0, y: 0 }),
                    (o.mouseupPosition = { x: 0, y: 0 }),
                    (o.offset = { x: 0, y: 0 }),
                    (o.scale = { x: 1, y: 1 }),
                    (o.wheelDelta = 0),
                    (o.button = -1),
                    (o.pixelRatio = parseInt(o.element.getAttribute('data-pixel-ratio'), 10) || 1),
                    (o.sourceEvents = {
                      mousemove: null,
                      mousedown: null,
                      mouseup: null,
                      mousewheel: null,
                    }),
                    (o.mousemove = function (v) {
                      var d = a._getRelativeMousePosition(v, o.element, o.pixelRatio),
                        h = v.changedTouches;
                      (h && ((o.button = 0), v.preventDefault()),
                        (o.absolute.x = d.x),
                        (o.absolute.y = d.y),
                        (o.position.x = o.absolute.x * o.scale.x + o.offset.x),
                        (o.position.y = o.absolute.y * o.scale.y + o.offset.y),
                        (o.sourceEvents.mousemove = v));
                    }),
                    (o.mousedown = function (v) {
                      var d = a._getRelativeMousePosition(v, o.element, o.pixelRatio),
                        h = v.changedTouches;
                      (h ? ((o.button = 0), v.preventDefault()) : (o.button = v.button),
                        (o.absolute.x = d.x),
                        (o.absolute.y = d.y),
                        (o.position.x = o.absolute.x * o.scale.x + o.offset.x),
                        (o.position.y = o.absolute.y * o.scale.y + o.offset.y),
                        (o.mousedownPosition.x = o.position.x),
                        (o.mousedownPosition.y = o.position.y),
                        (o.sourceEvents.mousedown = v));
                    }),
                    (o.mouseup = function (v) {
                      var d = a._getRelativeMousePosition(v, o.element, o.pixelRatio),
                        h = v.changedTouches;
                      (h && v.preventDefault(),
                        (o.button = -1),
                        (o.absolute.x = d.x),
                        (o.absolute.y = d.y),
                        (o.position.x = o.absolute.x * o.scale.x + o.offset.x),
                        (o.position.y = o.absolute.y * o.scale.y + o.offset.y),
                        (o.mouseupPosition.x = o.position.x),
                        (o.mouseupPosition.y = o.position.y),
                        (o.sourceEvents.mouseup = v));
                    }),
                    (o.mousewheel = function (v) {
                      ((o.wheelDelta = Math.max(-1, Math.min(1, v.wheelDelta || -v.detail))),
                        v.preventDefault(),
                        (o.sourceEvents.mousewheel = v));
                    }),
                    a.setElement(o, o.element),
                    o
                  );
                }),
                  (a.setElement = function (m, o) {
                    ((m.element = o),
                      o.addEventListener('mousemove', m.mousemove, { passive: !0 }),
                      o.addEventListener('mousedown', m.mousedown, { passive: !0 }),
                      o.addEventListener('mouseup', m.mouseup, { passive: !0 }),
                      o.addEventListener('wheel', m.mousewheel, { passive: !1 }),
                      o.addEventListener('touchmove', m.mousemove, { passive: !1 }),
                      o.addEventListener('touchstart', m.mousedown, { passive: !1 }),
                      o.addEventListener('touchend', m.mouseup, { passive: !1 }));
                  }),
                  (a.clearSourceEvents = function (m) {
                    ((m.sourceEvents.mousemove = null),
                      (m.sourceEvents.mousedown = null),
                      (m.sourceEvents.mouseup = null),
                      (m.sourceEvents.mousewheel = null),
                      (m.wheelDelta = 0));
                  }),
                  (a.setOffset = function (m, o) {
                    ((m.offset.x = o.x),
                      (m.offset.y = o.y),
                      (m.position.x = m.absolute.x * m.scale.x + m.offset.x),
                      (m.position.y = m.absolute.y * m.scale.y + m.offset.y));
                  }),
                  (a.setScale = function (m, o) {
                    ((m.scale.x = o.x),
                      (m.scale.y = o.y),
                      (m.position.x = m.absolute.x * m.scale.x + m.offset.x),
                      (m.position.y = m.absolute.y * m.scale.y + m.offset.y));
                  }),
                  (a._getRelativeMousePosition = function (m, o, v) {
                    var d = o.getBoundingClientRect(),
                      h = document.documentElement || document.body.parentNode || document.body,
                      g = window.pageXOffset !== void 0 ? window.pageXOffset : h.scrollLeft,
                      r = window.pageYOffset !== void 0 ? window.pageYOffset : h.scrollTop,
                      x = m.changedTouches,
                      p,
                      C;
                    return (
                      x
                        ? ((p = x[0].pageX - d.left - g), (C = x[0].pageY - d.top - r))
                        : ((p = m.pageX - d.left - g), (C = m.pageY - d.top - r)),
                      {
                        x: p / ((o.clientWidth / (o.width || o.clientWidth)) * v),
                        y: C / ((o.clientHeight / (o.height || o.clientHeight)) * v),
                      }
                    );
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(0);
              (function () {
                ((a._registry = {}),
                  (a.register = function (m) {
                    if (
                      (a.isPlugin(m) ||
                        f.warn(
                          'Plugin.register:',
                          a.toString(m),
                          'does not implement all required fields.'
                        ),
                      m.name in a._registry)
                    ) {
                      var o = a._registry[m.name],
                        v = a.versionParse(m.version).number,
                        d = a.versionParse(o.version).number;
                      v > d
                        ? (f.warn(
                            'Plugin.register:',
                            a.toString(o),
                            'was upgraded to',
                            a.toString(m)
                          ),
                          (a._registry[m.name] = m))
                        : v < d
                          ? f.warn(
                              'Plugin.register:',
                              a.toString(o),
                              'can not be downgraded to',
                              a.toString(m)
                            )
                          : m !== o &&
                            f.warn(
                              'Plugin.register:',
                              a.toString(m),
                              'is already registered to different plugin object'
                            );
                    } else a._registry[m.name] = m;
                    return m;
                  }),
                  (a.resolve = function (m) {
                    return a._registry[a.dependencyParse(m).name];
                  }),
                  (a.toString = function (m) {
                    return typeof m == 'string'
                      ? m
                      : (m.name || 'anonymous') + '@' + (m.version || m.range || '0.0.0');
                  }),
                  (a.isPlugin = function (m) {
                    return m && m.name && m.version && m.install;
                  }),
                  (a.isUsed = function (m, o) {
                    return m.used.indexOf(o) > -1;
                  }),
                  (a.isFor = function (m, o) {
                    var v = m.for && a.dependencyParse(m.for);
                    return !m.for || (o.name === v.name && a.versionSatisfies(o.version, v.range));
                  }),
                  (a.use = function (m, o) {
                    if (((m.uses = (m.uses || []).concat(o || [])), m.uses.length === 0)) {
                      f.warn(
                        'Plugin.use:',
                        a.toString(m),
                        'does not specify any dependencies to install.'
                      );
                      return;
                    }
                    for (
                      var v = a.dependencies(m), d = f.topologicalSort(v), h = [], g = 0;
                      g < d.length;
                      g += 1
                    )
                      if (d[g] !== m.name) {
                        var r = a.resolve(d[g]);
                        if (!r) {
                          h.push('❌ ' + d[g]);
                          continue;
                        }
                        a.isUsed(m, r.name) ||
                          (a.isFor(r, m) ||
                            (f.warn(
                              'Plugin.use:',
                              a.toString(r),
                              'is for',
                              r.for,
                              'but installed on',
                              a.toString(m) + '.'
                            ),
                            (r._warned = !0)),
                          r.install
                            ? r.install(m)
                            : (f.warn(
                                'Plugin.use:',
                                a.toString(r),
                                'does not specify an install function.'
                              ),
                              (r._warned = !0)),
                          r._warned
                            ? (h.push('🔶 ' + a.toString(r)), delete r._warned)
                            : h.push('✅ ' + a.toString(r)),
                          m.used.push(r.name));
                      }
                    h.length > 0 && f.info(h.join('  '));
                  }),
                  (a.dependencies = function (m, o) {
                    var v = a.dependencyParse(m),
                      d = v.name;
                    if (((o = o || {}), !(d in o))) {
                      ((m = a.resolve(m) || m),
                        (o[d] = f.map(m.uses || [], function (g) {
                          a.isPlugin(g) && a.register(g);
                          var r = a.dependencyParse(g),
                            x = a.resolve(g);
                          return (
                            x && !a.versionSatisfies(x.version, r.range)
                              ? (f.warn(
                                  'Plugin.dependencies:',
                                  a.toString(x),
                                  'does not satisfy',
                                  a.toString(r),
                                  'used by',
                                  a.toString(v) + '.'
                                ),
                                (x._warned = !0),
                                (m._warned = !0))
                              : x ||
                                (f.warn(
                                  'Plugin.dependencies:',
                                  a.toString(g),
                                  'used by',
                                  a.toString(v),
                                  'could not be resolved.'
                                ),
                                (m._warned = !0)),
                            r.name
                          );
                        })));
                      for (var h = 0; h < o[d].length; h += 1) a.dependencies(o[d][h], o);
                      return o;
                    }
                  }),
                  (a.dependencyParse = function (m) {
                    if (f.isString(m)) {
                      var o = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                      return (
                        o.test(m) ||
                          f.warn('Plugin.dependencyParse:', m, 'is not a valid dependency string.'),
                        { name: m.split('@')[0], range: m.split('@')[1] || '*' }
                      );
                    }
                    return { name: m.name, range: m.range || m.version };
                  }),
                  (a.versionParse = function (m) {
                    var o = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                    o.test(m) ||
                      f.warn('Plugin.versionParse:', m, 'is not a valid version or range.');
                    var v = o.exec(m),
                      d = Number(v[4]),
                      h = Number(v[5]),
                      g = Number(v[6]);
                    return {
                      isRange: !!(v[1] || v[2]),
                      version: v[3],
                      range: m,
                      operator: v[1] || v[2] || '',
                      major: d,
                      minor: h,
                      patch: g,
                      parts: [d, h, g],
                      prerelease: v[7],
                      number: d * 1e8 + h * 1e4 + g,
                    };
                  }),
                  (a.versionSatisfies = function (m, o) {
                    o = o || '*';
                    var v = a.versionParse(o),
                      d = a.versionParse(m);
                    if (v.isRange) {
                      if (v.operator === '*' || m === '*') return !0;
                      if (v.operator === '>') return d.number > v.number;
                      if (v.operator === '>=') return d.number >= v.number;
                      if (v.operator === '~')
                        return d.major === v.major && d.minor === v.minor && d.patch >= v.patch;
                      if (v.operator === '^')
                        return v.major > 0
                          ? d.major === v.major && d.number >= v.number
                          : v.minor > 0
                            ? d.minor === v.minor && d.patch >= v.patch
                            : d.patch === v.patch;
                    }
                    return m === o || m === '*';
                  }));
              })();
            },
            function (b, y) {
              var c = {};
              ((b.exports = c),
                (function () {
                  c.create = function (a) {
                    return { vertex: a, normalImpulse: 0, tangentImpulse: 0 };
                  };
                })());
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(7),
                m = c(18),
                o = c(13),
                v = c(19),
                d = c(5),
                h = c(6),
                g = c(10),
                r = c(0),
                x = c(4);
              (function () {
                ((a._deltaMax = 1e3 / 60),
                  (a.create = function (p) {
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
                      (R.world = p.world || h.create({ label: 'World' })),
                      (R.pairs = p.pairs || v.create()),
                      (R.detector = p.detector || o.create()),
                      (R.detector.pairs = R.pairs),
                      (R.grid = { buckets: [] }),
                      (R.world.gravity = R.gravity),
                      (R.broadphase = R.grid),
                      (R.metrics = {}),
                      R
                    );
                  }),
                  (a.update = function (p, C) {
                    var R = r.now(),
                      w = p.world,
                      U = p.detector,
                      G = p.pairs,
                      M = p.timing,
                      O = M.timestamp,
                      D;
                    (C > a._deltaMax &&
                      r.warnOnce(
                        'Matter.Engine.update: delta argument is recommended to be less than or equal to',
                        a._deltaMax.toFixed(3),
                        'ms.'
                      ),
                      (C = typeof C < 'u' ? C : r._baseDelta),
                      (C *= M.timeScale),
                      (M.timestamp += C),
                      (M.lastDelta = C));
                    var _ = { timestamp: M.timestamp, delta: C };
                    d.trigger(p, 'beforeUpdate', _);
                    var L = h.allBodies(w),
                      B = h.allConstraints(w);
                    for (
                      w.isModified && (o.setBodies(U, L), h.setModified(w, !1, !1, !0)),
                        p.enableSleeping && f.update(L, C),
                        a._bodiesApplyGravity(L, p.gravity),
                        C > 0 && a._bodiesUpdate(L, C),
                        d.trigger(p, 'beforeSolve', _),
                        g.preSolveAll(L),
                        D = 0;
                      D < p.constraintIterations;
                      D++
                    )
                      g.solveAll(B, C);
                    g.postSolveAll(L);
                    var Y = o.collisions(U);
                    (v.update(G, Y, O),
                      p.enableSleeping && f.afterCollisions(G.list),
                      G.collisionStart.length > 0 &&
                        d.trigger(p, 'collisionStart', {
                          pairs: G.collisionStart,
                          timestamp: M.timestamp,
                          delta: C,
                        }));
                    var V = r.clamp(20 / p.positionIterations, 0, 1);
                    for (m.preSolvePosition(G.list), D = 0; D < p.positionIterations; D++)
                      m.solvePosition(G.list, C, V);
                    for (
                      m.postSolvePosition(L), g.preSolveAll(L), D = 0;
                      D < p.constraintIterations;
                      D++
                    )
                      g.solveAll(B, C);
                    for (
                      g.postSolveAll(L), m.preSolveVelocity(G.list), D = 0;
                      D < p.velocityIterations;
                      D++
                    )
                      m.solveVelocity(G.list, C);
                    return (
                      a._bodiesUpdateVelocities(L),
                      G.collisionActive.length > 0 &&
                        d.trigger(p, 'collisionActive', {
                          pairs: G.collisionActive,
                          timestamp: M.timestamp,
                          delta: C,
                        }),
                      G.collisionEnd.length > 0 &&
                        d.trigger(p, 'collisionEnd', {
                          pairs: G.collisionEnd,
                          timestamp: M.timestamp,
                          delta: C,
                        }),
                      a._bodiesClearForces(L),
                      d.trigger(p, 'afterUpdate', _),
                      (p.timing.lastElapsed = r.now() - R),
                      p
                    );
                  }),
                  (a.merge = function (p, C) {
                    if ((r.extend(p, C), C.world)) {
                      ((p.world = C.world), a.clear(p));
                      for (var R = h.allBodies(p.world), w = 0; w < R.length; w++) {
                        var U = R[w];
                        (f.set(U, !1), (U.id = r.nextId()));
                      }
                    }
                  }),
                  (a.clear = function (p) {
                    (v.clear(p.pairs), o.clear(p.detector));
                  }),
                  (a._bodiesClearForces = function (p) {
                    for (var C = p.length, R = 0; R < C; R++) {
                      var w = p[R];
                      ((w.force.x = 0), (w.force.y = 0), (w.torque = 0));
                    }
                  }),
                  (a._bodiesApplyGravity = function (p, C) {
                    var R = typeof C.scale < 'u' ? C.scale : 0.001,
                      w = p.length;
                    if (!((C.x === 0 && C.y === 0) || R === 0))
                      for (var U = 0; U < w; U++) {
                        var G = p[U];
                        G.isStatic ||
                          G.isSleeping ||
                          ((G.force.y += G.mass * C.y * R), (G.force.x += G.mass * C.x * R));
                      }
                  }),
                  (a._bodiesUpdate = function (p, C) {
                    for (var R = p.length, w = 0; w < R; w++) {
                      var U = p[w];
                      U.isStatic || U.isSleeping || x.update(U, C);
                    }
                  }),
                  (a._bodiesUpdateVelocities = function (p) {
                    for (var C = p.length, R = 0; R < C; R++) x.updateVelocities(p[R]);
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(3),
                m = c(0),
                o = c(1);
              (function () {
                ((a._restingThresh = 2),
                  (a._restingThreshTangent = Math.sqrt(6)),
                  (a._positionDampen = 0.9),
                  (a._positionWarming = 0.8),
                  (a._frictionNormalMultiplier = 5),
                  (a._frictionMaxStatic = Number.MAX_VALUE),
                  (a.preSolvePosition = function (v) {
                    var d,
                      h,
                      g,
                      r = v.length;
                    for (d = 0; d < r; d++)
                      ((h = v[d]),
                        h.isActive &&
                          ((g = h.contactCount),
                          (h.collision.parentA.totalContacts += g),
                          (h.collision.parentB.totalContacts += g)));
                  }),
                  (a.solvePosition = function (v, d, h) {
                    var g,
                      r,
                      x,
                      p,
                      C,
                      R,
                      w,
                      U,
                      G = a._positionDampen * (h || 1),
                      M = m.clamp(d / m._baseDelta, 0, 1),
                      O = v.length;
                    for (g = 0; g < O; g++)
                      ((r = v[g]),
                        !(!r.isActive || r.isSensor) &&
                          ((x = r.collision),
                          (p = x.parentA),
                          (C = x.parentB),
                          (R = x.normal),
                          (r.separation =
                            x.depth +
                            R.x * (C.positionImpulse.x - p.positionImpulse.x) +
                            R.y * (C.positionImpulse.y - p.positionImpulse.y))));
                    for (g = 0; g < O; g++)
                      ((r = v[g]),
                        !(!r.isActive || r.isSensor) &&
                          ((x = r.collision),
                          (p = x.parentA),
                          (C = x.parentB),
                          (R = x.normal),
                          (U = r.separation - r.slop * M),
                          (p.isStatic || C.isStatic) && (U *= 2),
                          p.isStatic ||
                            p.isSleeping ||
                            ((w = G / p.totalContacts),
                            (p.positionImpulse.x += R.x * U * w),
                            (p.positionImpulse.y += R.y * U * w)),
                          C.isStatic ||
                            C.isSleeping ||
                            ((w = G / C.totalContacts),
                            (C.positionImpulse.x -= R.x * U * w),
                            (C.positionImpulse.y -= R.y * U * w))));
                  }),
                  (a.postSolvePosition = function (v) {
                    for (
                      var d = a._positionWarming,
                        h = v.length,
                        g = f.translate,
                        r = o.update,
                        x = 0;
                      x < h;
                      x++
                    ) {
                      var p = v[x],
                        C = p.positionImpulse,
                        R = C.x,
                        w = C.y,
                        U = p.velocity;
                      if (((p.totalContacts = 0), R !== 0 || w !== 0)) {
                        for (var G = 0; G < p.parts.length; G++) {
                          var M = p.parts[G];
                          (g(M.vertices, C),
                            r(M.bounds, M.vertices, U),
                            (M.position.x += R),
                            (M.position.y += w));
                        }
                        ((p.positionPrev.x += R),
                          (p.positionPrev.y += w),
                          R * U.x + w * U.y < 0
                            ? ((C.x = 0), (C.y = 0))
                            : ((C.x *= d), (C.y *= d)));
                      }
                    }
                  }),
                  (a.preSolveVelocity = function (v) {
                    var d = v.length,
                      h,
                      g;
                    for (h = 0; h < d; h++) {
                      var r = v[h];
                      if (!(!r.isActive || r.isSensor)) {
                        var x = r.contacts,
                          p = r.contactCount,
                          C = r.collision,
                          R = C.parentA,
                          w = C.parentB,
                          U = C.normal,
                          G = C.tangent;
                        for (g = 0; g < p; g++) {
                          var M = x[g],
                            O = M.vertex,
                            D = M.normalImpulse,
                            _ = M.tangentImpulse;
                          if (D !== 0 || _ !== 0) {
                            var L = U.x * D + G.x * _,
                              B = U.y * D + G.y * _;
                            (R.isStatic ||
                              R.isSleeping ||
                              ((R.positionPrev.x += L * R.inverseMass),
                              (R.positionPrev.y += B * R.inverseMass),
                              (R.anglePrev +=
                                R.inverseInertia *
                                ((O.x - R.position.x) * B - (O.y - R.position.y) * L))),
                              w.isStatic ||
                                w.isSleeping ||
                                ((w.positionPrev.x -= L * w.inverseMass),
                                (w.positionPrev.y -= B * w.inverseMass),
                                (w.anglePrev -=
                                  w.inverseInertia *
                                  ((O.x - w.position.x) * B - (O.y - w.position.y) * L))));
                          }
                        }
                      }
                    }
                  }),
                  (a.solveVelocity = function (v, d) {
                    var h = d / m._baseDelta,
                      g = h * h,
                      r = g * h,
                      x = -a._restingThresh * h,
                      p = a._restingThreshTangent,
                      C = a._frictionNormalMultiplier * h,
                      R = a._frictionMaxStatic,
                      w = v.length,
                      U,
                      G,
                      M,
                      O;
                    for (M = 0; M < w; M++) {
                      var D = v[M];
                      if (!(!D.isActive || D.isSensor)) {
                        var _ = D.collision,
                          L = _.parentA,
                          B = _.parentB,
                          Y = _.normal.x,
                          V = _.normal.y,
                          F = _.tangent.x,
                          ie = _.tangent.y,
                          le = D.inverseMass,
                          A = D.friction * D.frictionStatic * C,
                          N = D.contacts,
                          q = D.contactCount,
                          $ = 1 / q,
                          ae = L.position.x - L.positionPrev.x,
                          z = L.position.y - L.positionPrev.y,
                          Z = L.angle - L.anglePrev,
                          P = B.position.x - B.positionPrev.x,
                          ue = B.position.y - B.positionPrev.y,
                          se = B.angle - B.anglePrev;
                        for (O = 0; O < q; O++) {
                          var ce = N[O],
                            ve = ce.vertex,
                            Se = ve.x - L.position.x,
                            Ce = ve.y - L.position.y,
                            Be = ve.x - B.position.x,
                            Ye = ve.y - B.position.y,
                            Ve = ae - Ce * Z,
                            st = z + Se * Z,
                            Fe = P - Ye * se,
                            fe = ue + Be * se,
                            Yt = Ve - Fe,
                            pe = st - fe,
                            Ae = Y * Yt + V * pe,
                            Ot = F * Yt + ie * pe,
                            Vt = D.separation + Ae,
                            bt = Math.min(Vt, 1);
                          bt = Vt < 0 ? 0 : bt;
                          var $e = bt * A;
                          Ot < -$e || Ot > $e
                            ? ((G = Ot > 0 ? Ot : -Ot),
                              (U = D.friction * (Ot > 0 ? 1 : -1) * r),
                              U < -G ? (U = -G) : U > G && (U = G))
                            : ((U = Ot), (G = R));
                          var Fl = Se * V - Ce * Y,
                            it = Be * V - Ye * Y,
                            _l = $ / (le + L.inverseInertia * Fl * Fl + B.inverseInertia * it * it),
                            Mn = (1 + D.restitution) * Ae * _l;
                          if (((U *= _l), Ae < x)) ce.normalImpulse = 0;
                          else {
                            var qt = ce.normalImpulse;
                            ((ce.normalImpulse += Mn),
                              ce.normalImpulse > 0 && (ce.normalImpulse = 0),
                              (Mn = ce.normalImpulse - qt));
                          }
                          if (Ot < -p || Ot > p) ce.tangentImpulse = 0;
                          else {
                            var Wt = ce.tangentImpulse;
                            ((ce.tangentImpulse += U),
                              ce.tangentImpulse < -G && (ce.tangentImpulse = -G),
                              ce.tangentImpulse > G && (ce.tangentImpulse = G),
                              (U = ce.tangentImpulse - Wt));
                          }
                          var Tn = Y * Mn + F * U,
                            yn = V * Mn + ie * U;
                          (L.isStatic ||
                            L.isSleeping ||
                            ((L.positionPrev.x += Tn * L.inverseMass),
                            (L.positionPrev.y += yn * L.inverseMass),
                            (L.anglePrev += (Se * yn - Ce * Tn) * L.inverseInertia)),
                            B.isStatic ||
                              B.isSleeping ||
                              ((B.positionPrev.x -= Tn * B.inverseMass),
                              (B.positionPrev.y -= yn * B.inverseMass),
                              (B.anglePrev -= (Be * yn - Ye * Tn) * B.inverseInertia)));
                        }
                      }
                    }
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(9),
                m = c(0);
              (function () {
                ((a.create = function (o) {
                  return m.extend(
                    {
                      table: {},
                      list: [],
                      collisionStart: [],
                      collisionActive: [],
                      collisionEnd: [],
                    },
                    o
                  );
                }),
                  (a.update = function (o, v, d) {
                    var h = f.update,
                      g = f.create,
                      r = f.setActive,
                      x = o.table,
                      p = o.list,
                      C = p.length,
                      R = C,
                      w = o.collisionStart,
                      U = o.collisionEnd,
                      G = o.collisionActive,
                      M = v.length,
                      O = 0,
                      D = 0,
                      _ = 0,
                      L,
                      B,
                      Y;
                    for (Y = 0; Y < M; Y++)
                      ((L = v[Y]),
                        (B = L.pair),
                        B
                          ? (B.isActive && (G[_++] = B), h(B, L, d))
                          : ((B = g(L, d)), (x[B.id] = B), (w[O++] = B), (p[R++] = B)));
                    for (R = 0, C = p.length, Y = 0; Y < C; Y++)
                      ((B = p[Y]),
                        B.timeUpdated >= d
                          ? (p[R++] = B)
                          : (r(B, !1, d),
                            B.collision.bodyA.sleepCounter > 0 && B.collision.bodyB.sleepCounter > 0
                              ? (p[R++] = B)
                              : ((U[D++] = B), delete x[B.id])));
                    (p.length !== R && (p.length = R),
                      w.length !== O && (w.length = O),
                      U.length !== D && (U.length = D),
                      G.length !== _ && (G.length = _));
                  }),
                  (a.clear = function (o) {
                    return (
                      (o.table = {}),
                      (o.list.length = 0),
                      (o.collisionStart.length = 0),
                      (o.collisionActive.length = 0),
                      (o.collisionEnd.length = 0),
                      o
                    );
                  }));
              })();
            },
            function (b, y, c) {
              var a = (b.exports = c(21));
              ((a.Axes = c(11)),
                (a.Bodies = c(12)),
                (a.Body = c(4)),
                (a.Bounds = c(1)),
                (a.Collision = c(8)),
                (a.Common = c(0)),
                (a.Composite = c(6)),
                (a.Composites = c(22)),
                (a.Constraint = c(10)),
                (a.Contact = c(16)),
                (a.Detector = c(13)),
                (a.Engine = c(17)),
                (a.Events = c(5)),
                (a.Grid = c(23)),
                (a.Mouse = c(14)),
                (a.MouseConstraint = c(24)),
                (a.Pair = c(9)),
                (a.Pairs = c(19)),
                (a.Plugin = c(15)),
                (a.Query = c(25)),
                (a.Render = c(26)),
                (a.Resolver = c(18)),
                (a.Runner = c(27)),
                (a.SAT = c(28)),
                (a.Sleeping = c(7)),
                (a.Svg = c(29)),
                (a.Vector = c(2)),
                (a.Vertices = c(3)),
                (a.World = c(30)),
                (a.Engine.run = a.Runner.run),
                a.Common.deprecated(
                  a.Engine,
                  'run',
                  'Engine.run ➤ use Matter.Runner.run(engine) instead'
                ));
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(15),
                m = c(0);
              (function () {
                ((a.name = 'matter-js'),
                  (a.version = '0.20.0'),
                  (a.uses = []),
                  (a.used = []),
                  (a.use = function () {
                    f.use(a, Array.prototype.slice.call(arguments));
                  }),
                  (a.before = function (o, v) {
                    return ((o = o.replace(/^Matter./, '')), m.chainPathBefore(a, o, v));
                  }),
                  (a.after = function (o, v) {
                    return ((o = o.replace(/^Matter./, '')), m.chainPathAfter(a, o, v));
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(6),
                m = c(10),
                o = c(0),
                v = c(4),
                d = c(12),
                h = o.deprecated;
              (function () {
                ((a.stack = function (g, r, x, p, C, R, w) {
                  for (
                    var U = f.create({ label: 'Stack' }), G = g, M = r, O, D = 0, _ = 0;
                    _ < p;
                    _++
                  ) {
                    for (var L = 0, B = 0; B < x; B++) {
                      var Y = w(G, M, B, _, O, D);
                      if (Y) {
                        var V = Y.bounds.max.y - Y.bounds.min.y,
                          F = Y.bounds.max.x - Y.bounds.min.x;
                        (V > L && (L = V),
                          v.translate(Y, { x: F * 0.5, y: V * 0.5 }),
                          (G = Y.bounds.max.x + C),
                          f.addBody(U, Y),
                          (O = Y),
                          (D += 1));
                      } else G += C;
                    }
                    ((M += L + R), (G = g));
                  }
                  return U;
                }),
                  (a.chain = function (g, r, x, p, C, R) {
                    for (var w = g.bodies, U = 1; U < w.length; U++) {
                      var G = w[U - 1],
                        M = w[U],
                        O = G.bounds.max.y - G.bounds.min.y,
                        D = G.bounds.max.x - G.bounds.min.x,
                        _ = M.bounds.max.y - M.bounds.min.y,
                        L = M.bounds.max.x - M.bounds.min.x,
                        B = {
                          bodyA: G,
                          pointA: { x: D * r, y: O * x },
                          bodyB: M,
                          pointB: { x: L * p, y: _ * C },
                        },
                        Y = o.extend(B, R);
                      f.addConstraint(g, m.create(Y));
                    }
                    return ((g.label += ' Chain'), g);
                  }),
                  (a.mesh = function (g, r, x, p, C) {
                    var R = g.bodies,
                      w,
                      U,
                      G,
                      M,
                      O;
                    for (w = 0; w < x; w++) {
                      for (U = 1; U < r; U++)
                        ((G = R[U - 1 + w * r]),
                          (M = R[U + w * r]),
                          f.addConstraint(g, m.create(o.extend({ bodyA: G, bodyB: M }, C))));
                      if (w > 0)
                        for (U = 0; U < r; U++)
                          ((G = R[U + (w - 1) * r]),
                            (M = R[U + w * r]),
                            f.addConstraint(g, m.create(o.extend({ bodyA: G, bodyB: M }, C))),
                            p &&
                              U > 0 &&
                              ((O = R[U - 1 + (w - 1) * r]),
                              f.addConstraint(g, m.create(o.extend({ bodyA: O, bodyB: M }, C)))),
                            p &&
                              U < r - 1 &&
                              ((O = R[U + 1 + (w - 1) * r]),
                              f.addConstraint(g, m.create(o.extend({ bodyA: O, bodyB: M }, C)))));
                    }
                    return ((g.label += ' Mesh'), g);
                  }),
                  (a.pyramid = function (g, r, x, p, C, R, w) {
                    return a.stack(g, r, x, p, C, R, function (U, G, M, O, D, _) {
                      var L = Math.min(p, Math.ceil(x / 2)),
                        B = D ? D.bounds.max.x - D.bounds.min.x : 0;
                      if (!(O > L)) {
                        O = L - O;
                        var Y = O,
                          V = x - 1 - O;
                        if (!(M < Y || M > V)) {
                          _ === 1 && v.translate(D, { x: (M + (x % 2 === 1 ? 1 : -1)) * B, y: 0 });
                          var F = D ? M * B : 0;
                          return w(g + F + M * C, G, M, O, D, _);
                        }
                      }
                    });
                  }),
                  (a.newtonsCradle = function (g, r, x, p, C) {
                    for (var R = f.create({ label: 'Newtons Cradle' }), w = 0; w < x; w++) {
                      var U = 1.9,
                        G = d.circle(g + w * (p * U), r + C, p, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        M = m.create({ pointA: { x: g + w * (p * U), y: r }, bodyB: G });
                      (f.addBody(R, G), f.addConstraint(R, M));
                    }
                    return R;
                  }),
                  h(
                    a,
                    'newtonsCradle',
                    'Composites.newtonsCradle ➤ moved to newtonsCradle example'
                  ),
                  (a.car = function (g, r, x, p, C) {
                    var R = v.nextGroup(!0),
                      w = 20,
                      U = -x * 0.5 + w,
                      G = x * 0.5 - w,
                      M = 0,
                      O = f.create({ label: 'Car' }),
                      D = d.rectangle(g, r, x, p, {
                        collisionFilter: { group: R },
                        chamfer: { radius: p * 0.5 },
                        density: 2e-4,
                      }),
                      _ = d.circle(g + U, r + M, C, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      L = d.circle(g + G, r + M, C, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      B = m.create({
                        bodyB: D,
                        pointB: { x: U, y: M },
                        bodyA: _,
                        stiffness: 1,
                        length: 0,
                      }),
                      Y = m.create({
                        bodyB: D,
                        pointB: { x: G, y: M },
                        bodyA: L,
                        stiffness: 1,
                        length: 0,
                      });
                    return (
                      f.addBody(O, D),
                      f.addBody(O, _),
                      f.addBody(O, L),
                      f.addConstraint(O, B),
                      f.addConstraint(O, Y),
                      O
                    );
                  }),
                  h(a, 'car', 'Composites.car ➤ moved to car example'),
                  (a.softBody = function (g, r, x, p, C, R, w, U, G, M) {
                    ((G = o.extend({ inertia: 1 / 0 }, G)),
                      (M = o.extend({ stiffness: 0.2, render: { type: 'line', anchors: !1 } }, M)));
                    var O = a.stack(g, r, x, p, C, R, function (D, _) {
                      return d.circle(D, _, U, G);
                    });
                    return (a.mesh(O, x, p, w, M), (O.label = 'Soft Body'), O);
                  }),
                  h(a, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples'));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(9),
                m = c(0),
                o = m.deprecated;
              (function () {
                ((a.create = function (v) {
                  var d = {
                    buckets: {},
                    pairs: {},
                    pairsList: [],
                    bucketWidth: 48,
                    bucketHeight: 48,
                  };
                  return m.extend(d, v);
                }),
                  (a.update = function (v, d, h, g) {
                    var r,
                      x,
                      p,
                      C = h.world,
                      R = v.buckets,
                      w,
                      U,
                      G = !1;
                    for (r = 0; r < d.length; r++) {
                      var M = d[r];
                      if (
                        !(M.isSleeping && !g) &&
                        !(
                          C.bounds &&
                          (M.bounds.max.x < C.bounds.min.x ||
                            M.bounds.min.x > C.bounds.max.x ||
                            M.bounds.max.y < C.bounds.min.y ||
                            M.bounds.min.y > C.bounds.max.y)
                        )
                      ) {
                        var O = a._getRegion(v, M);
                        if (!M.region || O.id !== M.region.id || g) {
                          (!M.region || g) && (M.region = O);
                          var D = a._regionUnion(O, M.region);
                          for (x = D.startCol; x <= D.endCol; x++)
                            for (p = D.startRow; p <= D.endRow; p++) {
                              ((U = a._getBucketId(x, p)), (w = R[U]));
                              var _ =
                                  x >= O.startCol &&
                                  x <= O.endCol &&
                                  p >= O.startRow &&
                                  p <= O.endRow,
                                L =
                                  x >= M.region.startCol &&
                                  x <= M.region.endCol &&
                                  p >= M.region.startRow &&
                                  p <= M.region.endRow;
                              (!_ && L && L && w && a._bucketRemoveBody(v, w, M),
                                (M.region === O || (_ && !L) || g) &&
                                  (w || (w = a._createBucket(R, U)), a._bucketAddBody(v, w, M)));
                            }
                          ((M.region = O), (G = !0));
                        }
                      }
                    }
                    G && (v.pairsList = a._createActivePairsList(v));
                  }),
                  o(a, 'update', 'Grid.update ➤ replaced by Matter.Detector'),
                  (a.clear = function (v) {
                    ((v.buckets = {}), (v.pairs = {}), (v.pairsList = []));
                  }),
                  o(a, 'clear', 'Grid.clear ➤ replaced by Matter.Detector'),
                  (a._regionUnion = function (v, d) {
                    var h = Math.min(v.startCol, d.startCol),
                      g = Math.max(v.endCol, d.endCol),
                      r = Math.min(v.startRow, d.startRow),
                      x = Math.max(v.endRow, d.endRow);
                    return a._createRegion(h, g, r, x);
                  }),
                  (a._getRegion = function (v, d) {
                    var h = d.bounds,
                      g = Math.floor(h.min.x / v.bucketWidth),
                      r = Math.floor(h.max.x / v.bucketWidth),
                      x = Math.floor(h.min.y / v.bucketHeight),
                      p = Math.floor(h.max.y / v.bucketHeight);
                    return a._createRegion(g, r, x, p);
                  }),
                  (a._createRegion = function (v, d, h, g) {
                    return {
                      id: v + ',' + d + ',' + h + ',' + g,
                      startCol: v,
                      endCol: d,
                      startRow: h,
                      endRow: g,
                    };
                  }),
                  (a._getBucketId = function (v, d) {
                    return 'C' + v + 'R' + d;
                  }),
                  (a._createBucket = function (v, d) {
                    var h = (v[d] = []);
                    return h;
                  }),
                  (a._bucketAddBody = function (v, d, h) {
                    var g = v.pairs,
                      r = f.id,
                      x = d.length,
                      p;
                    for (p = 0; p < x; p++) {
                      var C = d[p];
                      if (!(h.id === C.id || (h.isStatic && C.isStatic))) {
                        var R = r(h, C),
                          w = g[R];
                        w ? (w[2] += 1) : (g[R] = [h, C, 1]);
                      }
                    }
                    d.push(h);
                  }),
                  (a._bucketRemoveBody = function (v, d, h) {
                    var g = v.pairs,
                      r = f.id,
                      x;
                    d.splice(m.indexOf(d, h), 1);
                    var p = d.length;
                    for (x = 0; x < p; x++) {
                      var C = g[r(h, d[x])];
                      C && (C[2] -= 1);
                    }
                  }),
                  (a._createActivePairsList = function (v) {
                    var d,
                      h = v.pairs,
                      g = m.keys(h),
                      r = g.length,
                      x = [],
                      p;
                    for (p = 0; p < r; p++) ((d = h[g[p]]), d[2] > 0 ? x.push(d) : delete h[g[p]]);
                    return x;
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(3),
                m = c(7),
                o = c(14),
                v = c(5),
                d = c(13),
                h = c(10),
                g = c(6),
                r = c(0),
                x = c(1);
              (function () {
                ((a.create = function (p, C) {
                  var R = (p ? p.mouse : null) || (C ? C.mouse : null);
                  R ||
                    (p && p.render && p.render.canvas
                      ? (R = o.create(p.render.canvas))
                      : C && C.element
                        ? (R = o.create(C.element))
                        : ((R = o.create()),
                          r.warn(
                            'MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected'
                          )));
                  var w = h.create({
                      label: 'Mouse Constraint',
                      pointA: R.position,
                      pointB: { x: 0, y: 0 },
                      length: 0.01,
                      stiffness: 0.1,
                      angularStiffness: 1,
                      render: { strokeStyle: '#90EE90', lineWidth: 3 },
                    }),
                    U = {
                      type: 'mouseConstraint',
                      mouse: R,
                      element: null,
                      body: null,
                      constraint: w,
                      collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                    },
                    G = r.extend(U, C);
                  return (
                    v.on(p, 'beforeUpdate', function () {
                      var M = g.allBodies(p.world);
                      (a.update(G, M), a._triggerEvents(G));
                    }),
                    G
                  );
                }),
                  (a.update = function (p, C) {
                    var R = p.mouse,
                      w = p.constraint,
                      U = p.body;
                    if (R.button === 0) {
                      if (w.bodyB) (m.set(w.bodyB, !1), (w.pointA = R.position));
                      else
                        for (var G = 0; G < C.length; G++)
                          if (
                            ((U = C[G]),
                            x.contains(U.bounds, R.position) &&
                              d.canCollide(U.collisionFilter, p.collisionFilter))
                          )
                            for (var M = U.parts.length > 1 ? 1 : 0; M < U.parts.length; M++) {
                              var O = U.parts[M];
                              if (f.contains(O.vertices, R.position)) {
                                ((w.pointA = R.position),
                                  (w.bodyB = p.body = U),
                                  (w.pointB = {
                                    x: R.position.x - U.position.x,
                                    y: R.position.y - U.position.y,
                                  }),
                                  (w.angleB = U.angle),
                                  m.set(U, !1),
                                  v.trigger(p, 'startdrag', { mouse: R, body: U }));
                                break;
                              }
                            }
                    } else
                      ((w.bodyB = p.body = null),
                        (w.pointB = null),
                        U && v.trigger(p, 'enddrag', { mouse: R, body: U }));
                  }),
                  (a._triggerEvents = function (p) {
                    var C = p.mouse,
                      R = C.sourceEvents;
                    (R.mousemove && v.trigger(p, 'mousemove', { mouse: C }),
                      R.mousedown && v.trigger(p, 'mousedown', { mouse: C }),
                      R.mouseup && v.trigger(p, 'mouseup', { mouse: C }),
                      o.clearSourceEvents(C));
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(2),
                m = c(8),
                o = c(1),
                v = c(12),
                d = c(3);
              (function () {
                ((a.collides = function (h, g) {
                  for (
                    var r = [], x = g.length, p = h.bounds, C = m.collides, R = o.overlaps, w = 0;
                    w < x;
                    w++
                  ) {
                    var U = g[w],
                      G = U.parts.length,
                      M = G === 1 ? 0 : 1;
                    if (R(U.bounds, p))
                      for (var O = M; O < G; O++) {
                        var D = U.parts[O];
                        if (R(D.bounds, p)) {
                          var _ = C(D, h);
                          if (_) {
                            r.push(_);
                            break;
                          }
                        }
                      }
                  }
                  return r;
                }),
                  (a.ray = function (h, g, r, x) {
                    x = x || 1e-100;
                    for (
                      var p = f.angle(g, r),
                        C = f.magnitude(f.sub(g, r)),
                        R = (r.x + g.x) * 0.5,
                        w = (r.y + g.y) * 0.5,
                        U = v.rectangle(R, w, C, x, { angle: p }),
                        G = a.collides(U, h),
                        M = 0;
                      M < G.length;
                      M += 1
                    ) {
                      var O = G[M];
                      O.body = O.bodyB = O.bodyA;
                    }
                    return G;
                  }),
                  (a.region = function (h, g, r) {
                    for (var x = [], p = 0; p < h.length; p++) {
                      var C = h[p],
                        R = o.overlaps(C.bounds, g);
                      ((R && !r) || (!R && r)) && x.push(C);
                    }
                    return x;
                  }),
                  (a.point = function (h, g) {
                    for (var r = [], x = 0; x < h.length; x++) {
                      var p = h[x];
                      if (o.contains(p.bounds, g))
                        for (var C = p.parts.length === 1 ? 0 : 1; C < p.parts.length; C++) {
                          var R = p.parts[C];
                          if (o.contains(R.bounds, g) && d.contains(R.vertices, g)) {
                            r.push(p);
                            break;
                          }
                        }
                    }
                    return r;
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(4),
                m = c(0),
                o = c(6),
                v = c(1),
                d = c(5),
                h = c(2),
                g = c(14);
              (function () {
                var r, x;
                (typeof window < 'u' &&
                  ((r =
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (M) {
                      window.setTimeout(function () {
                        M(m.now());
                      }, 1e3 / 60);
                    }),
                  (x =
                    window.cancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    window.webkitCancelAnimationFrame ||
                    window.msCancelAnimationFrame)),
                  (a._goodFps = 30),
                  (a._goodDelta = 1e3 / 60),
                  (a.create = function (M) {
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
                          hasBounds: !!M.bounds,
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
                      D = m.extend(O, M);
                    return (
                      D.canvas &&
                        ((D.canvas.width = D.options.width || D.canvas.width),
                        (D.canvas.height = D.options.height || D.canvas.height)),
                      (D.mouse = M.mouse),
                      (D.engine = M.engine),
                      (D.canvas = D.canvas || R(D.options.width, D.options.height)),
                      (D.context = D.canvas.getContext('2d')),
                      (D.textures = {}),
                      (D.bounds = D.bounds || {
                        min: { x: 0, y: 0 },
                        max: { x: D.canvas.width, y: D.canvas.height },
                      }),
                      (D.controller = a),
                      (D.options.showBroadphase = !1),
                      D.options.pixelRatio !== 1 && a.setPixelRatio(D, D.options.pixelRatio),
                      m.isElement(D.element) && D.element.appendChild(D.canvas),
                      D
                    );
                  }),
                  (a.run = function (M) {
                    (function O(D) {
                      ((M.frameRequestId = r(O)),
                        p(M, D),
                        a.world(M, D),
                        M.context.setTransform(
                          M.options.pixelRatio,
                          0,
                          0,
                          M.options.pixelRatio,
                          0,
                          0
                        ),
                        (M.options.showStats || M.options.showDebug) && a.stats(M, M.context, D),
                        (M.options.showPerformance || M.options.showDebug) &&
                          a.performance(M, M.context, D),
                        M.context.setTransform(1, 0, 0, 1, 0, 0));
                    })();
                  }),
                  (a.stop = function (M) {
                    x(M.frameRequestId);
                  }),
                  (a.setPixelRatio = function (M, O) {
                    var D = M.options,
                      _ = M.canvas;
                    (O === 'auto' && (O = w(_)),
                      (D.pixelRatio = O),
                      _.setAttribute('data-pixel-ratio', O),
                      (_.width = D.width * O),
                      (_.height = D.height * O),
                      (_.style.width = D.width + 'px'),
                      (_.style.height = D.height + 'px'));
                  }),
                  (a.setSize = function (M, O, D) {
                    ((M.options.width = O),
                      (M.options.height = D),
                      (M.bounds.max.x = M.bounds.min.x + O),
                      (M.bounds.max.y = M.bounds.min.y + D),
                      M.options.pixelRatio !== 1
                        ? a.setPixelRatio(M, M.options.pixelRatio)
                        : ((M.canvas.width = O), (M.canvas.height = D)));
                  }),
                  (a.lookAt = function (M, O, D, _) {
                    ((_ = typeof _ < 'u' ? _ : !0),
                      (O = m.isArray(O) ? O : [O]),
                      (D = D || { x: 0, y: 0 }));
                    for (
                      var L = { min: { x: 1 / 0, y: 1 / 0 }, max: { x: -1 / 0, y: -1 / 0 } }, B = 0;
                      B < O.length;
                      B += 1
                    ) {
                      var Y = O[B],
                        V = Y.bounds ? Y.bounds.min : Y.min || Y.position || Y,
                        F = Y.bounds ? Y.bounds.max : Y.max || Y.position || Y;
                      V &&
                        F &&
                        (V.x < L.min.x && (L.min.x = V.x),
                        F.x > L.max.x && (L.max.x = F.x),
                        V.y < L.min.y && (L.min.y = V.y),
                        F.y > L.max.y && (L.max.y = F.y));
                    }
                    var ie = L.max.x - L.min.x + 2 * D.x,
                      le = L.max.y - L.min.y + 2 * D.y,
                      A = M.canvas.height,
                      N = M.canvas.width,
                      q = N / A,
                      $ = ie / le,
                      ae = 1,
                      z = 1;
                    ($ > q ? (z = $ / q) : (ae = q / $),
                      (M.options.hasBounds = !0),
                      (M.bounds.min.x = L.min.x),
                      (M.bounds.max.x = L.min.x + ie * ae),
                      (M.bounds.min.y = L.min.y),
                      (M.bounds.max.y = L.min.y + le * z),
                      _ &&
                        ((M.bounds.min.x += ie * 0.5 - ie * ae * 0.5),
                        (M.bounds.max.x += ie * 0.5 - ie * ae * 0.5),
                        (M.bounds.min.y += le * 0.5 - le * z * 0.5),
                        (M.bounds.max.y += le * 0.5 - le * z * 0.5)),
                      (M.bounds.min.x -= D.x),
                      (M.bounds.max.x -= D.x),
                      (M.bounds.min.y -= D.y),
                      (M.bounds.max.y -= D.y),
                      M.mouse &&
                        (g.setScale(M.mouse, {
                          x: (M.bounds.max.x - M.bounds.min.x) / M.canvas.width,
                          y: (M.bounds.max.y - M.bounds.min.y) / M.canvas.height,
                        }),
                        g.setOffset(M.mouse, M.bounds.min)));
                  }),
                  (a.startViewTransform = function (M) {
                    var O = M.bounds.max.x - M.bounds.min.x,
                      D = M.bounds.max.y - M.bounds.min.y,
                      _ = O / M.options.width,
                      L = D / M.options.height;
                    (M.context.setTransform(
                      M.options.pixelRatio / _,
                      0,
                      0,
                      M.options.pixelRatio / L,
                      0,
                      0
                    ),
                      M.context.translate(-M.bounds.min.x, -M.bounds.min.y));
                  }),
                  (a.endViewTransform = function (M) {
                    M.context.setTransform(M.options.pixelRatio, 0, 0, M.options.pixelRatio, 0, 0);
                  }),
                  (a.world = function (M, O) {
                    var D = m.now(),
                      _ = M.engine,
                      L = _.world,
                      B = M.canvas,
                      Y = M.context,
                      V = M.options,
                      F = M.timing,
                      ie = o.allBodies(L),
                      le = o.allConstraints(L),
                      A = V.wireframes ? V.wireframeBackground : V.background,
                      N = [],
                      q = [],
                      $,
                      ae = { timestamp: _.timing.timestamp };
                    if (
                      (d.trigger(M, 'beforeRender', ae),
                      M.currentBackground !== A && G(M, A),
                      (Y.globalCompositeOperation = 'source-in'),
                      (Y.fillStyle = 'transparent'),
                      Y.fillRect(0, 0, B.width, B.height),
                      (Y.globalCompositeOperation = 'source-over'),
                      V.hasBounds)
                    ) {
                      for ($ = 0; $ < ie.length; $++) {
                        var z = ie[$];
                        v.overlaps(z.bounds, M.bounds) && N.push(z);
                      }
                      for ($ = 0; $ < le.length; $++) {
                        var Z = le[$],
                          P = Z.bodyA,
                          ue = Z.bodyB,
                          se = Z.pointA,
                          ce = Z.pointB;
                        (P && (se = h.add(P.position, Z.pointA)),
                          ue && (ce = h.add(ue.position, Z.pointB)),
                          !(!se || !ce) &&
                            (v.contains(M.bounds, se) || v.contains(M.bounds, ce)) &&
                            q.push(Z));
                      }
                      (a.startViewTransform(M),
                        M.mouse &&
                          (g.setScale(M.mouse, {
                            x: (M.bounds.max.x - M.bounds.min.x) / M.options.width,
                            y: (M.bounds.max.y - M.bounds.min.y) / M.options.height,
                          }),
                          g.setOffset(M.mouse, M.bounds.min)));
                    } else
                      ((q = le),
                        (N = ie),
                        M.options.pixelRatio !== 1 &&
                          M.context.setTransform(
                            M.options.pixelRatio,
                            0,
                            0,
                            M.options.pixelRatio,
                            0,
                            0
                          ));
                    (!V.wireframes || (_.enableSleeping && V.showSleeping)
                      ? a.bodies(M, N, Y)
                      : (V.showConvexHulls && a.bodyConvexHulls(M, N, Y),
                        a.bodyWireframes(M, N, Y)),
                      V.showBounds && a.bodyBounds(M, N, Y),
                      (V.showAxes || V.showAngleIndicator) && a.bodyAxes(M, N, Y),
                      V.showPositions && a.bodyPositions(M, N, Y),
                      V.showVelocity && a.bodyVelocity(M, N, Y),
                      V.showIds && a.bodyIds(M, N, Y),
                      V.showSeparations && a.separations(M, _.pairs.list, Y),
                      V.showCollisions && a.collisions(M, _.pairs.list, Y),
                      V.showVertexNumbers && a.vertexNumbers(M, N, Y),
                      V.showMousePosition && a.mousePosition(M, M.mouse, Y),
                      a.constraints(q, Y),
                      V.hasBounds && a.endViewTransform(M),
                      d.trigger(M, 'afterRender', ae),
                      (F.lastElapsed = m.now() - D));
                  }),
                  (a.stats = function (M, O, D) {
                    for (
                      var _ = M.engine,
                        L = _.world,
                        B = o.allBodies(L),
                        Y = 0,
                        V = 55,
                        F = 44,
                        ie = 0,
                        le = 0,
                        A = 0;
                      A < B.length;
                      A += 1
                    )
                      Y += B[A].parts.length;
                    var N = {
                      Part: Y,
                      Body: B.length,
                      Cons: o.allConstraints(L).length,
                      Comp: o.allComposites(L).length,
                      Pair: _.pairs.list.length,
                    };
                    ((O.fillStyle = '#0e0f19'),
                      O.fillRect(ie, le, V * 5.5, F),
                      (O.font = '12px Arial'),
                      (O.textBaseline = 'top'),
                      (O.textAlign = 'right'));
                    for (var q in N) {
                      var $ = N[q];
                      ((O.fillStyle = '#aaa'),
                        O.fillText(q, ie + V, le + 8),
                        (O.fillStyle = '#eee'),
                        O.fillText($, ie + V, le + 26),
                        (ie += V));
                    }
                  }),
                  (a.performance = function (M, O) {
                    var D = M.engine,
                      _ = M.timing,
                      L = _.deltaHistory,
                      B = _.elapsedHistory,
                      Y = _.timestampElapsedHistory,
                      V = _.engineDeltaHistory,
                      F = _.engineUpdatesHistory,
                      ie = _.engineElapsedHistory,
                      le = D.timing.lastUpdatesPerFrame,
                      A = D.timing.lastDelta,
                      N = C(L),
                      q = C(B),
                      $ = C(V),
                      ae = C(F),
                      z = C(ie),
                      Z = C(Y),
                      P = Z / N || 0,
                      ue = Math.round(N / A),
                      se = 1e3 / N || 0,
                      ce = 4,
                      ve = 12,
                      Se = 60,
                      Ce = 34,
                      Be = 10,
                      Ye = 69;
                    ((O.fillStyle = '#0e0f19'),
                      O.fillRect(0, 50, ve * 5 + Se * 6 + 22, Ce),
                      a.status(
                        O,
                        Be,
                        Ye,
                        Se,
                        ce,
                        L.length,
                        Math.round(se) + ' fps',
                        se / a._goodFps,
                        function (Ve) {
                          return L[Ve] / N - 1;
                        }
                      ),
                      a.status(
                        O,
                        Be + ve + Se,
                        Ye,
                        Se,
                        ce,
                        V.length,
                        A.toFixed(2) + ' dt',
                        a._goodDelta / A,
                        function (Ve) {
                          return V[Ve] / $ - 1;
                        }
                      ),
                      a.status(
                        O,
                        Be + (ve + Se) * 2,
                        Ye,
                        Se,
                        ce,
                        F.length,
                        le + ' upf',
                        Math.pow(m.clamp(ae / ue || 1, 0, 1), 4),
                        function (Ve) {
                          return F[Ve] / ae - 1;
                        }
                      ),
                      a.status(
                        O,
                        Be + (ve + Se) * 3,
                        Ye,
                        Se,
                        ce,
                        ie.length,
                        z.toFixed(2) + ' ut',
                        1 - (le * z) / a._goodFps,
                        function (Ve) {
                          return ie[Ve] / z - 1;
                        }
                      ),
                      a.status(
                        O,
                        Be + (ve + Se) * 4,
                        Ye,
                        Se,
                        ce,
                        B.length,
                        q.toFixed(2) + ' rt',
                        1 - q / a._goodFps,
                        function (Ve) {
                          return B[Ve] / q - 1;
                        }
                      ),
                      a.status(
                        O,
                        Be + (ve + Se) * 5,
                        Ye,
                        Se,
                        ce,
                        Y.length,
                        P.toFixed(2) + ' x',
                        P * P * P,
                        function (Ve) {
                          return (Y[Ve] / L[Ve] / P || 0) - 1;
                        }
                      ));
                  }),
                  (a.status = function (M, O, D, _, L, B, Y, V, F) {
                    ((M.strokeStyle = '#888'),
                      (M.fillStyle = '#444'),
                      (M.lineWidth = 1),
                      M.fillRect(O, D + 7, _, 1),
                      M.beginPath(),
                      M.moveTo(O, D + 7 - L * m.clamp(0.4 * F(0), -2, 2)));
                    for (var ie = 0; ie < _; ie += 1)
                      M.lineTo(O + ie, D + 7 - (ie < B ? L * m.clamp(0.4 * F(ie), -2, 2) : 0));
                    (M.stroke(),
                      (M.fillStyle = 'hsl(' + m.clamp(25 + 95 * V, 0, 120) + ',100%,60%)'),
                      M.fillRect(O, D - 7, 4, 4),
                      (M.font = '12px Arial'),
                      (M.textBaseline = 'middle'),
                      (M.textAlign = 'right'),
                      (M.fillStyle = '#eee'),
                      M.fillText(Y, O + _, D - 5));
                  }),
                  (a.constraints = function (M, O) {
                    for (var D = O, _ = 0; _ < M.length; _++) {
                      var L = M[_];
                      if (!(!L.render.visible || !L.pointA || !L.pointB)) {
                        var B = L.bodyA,
                          Y = L.bodyB,
                          V,
                          F;
                        if (
                          (B ? (V = h.add(B.position, L.pointA)) : (V = L.pointA),
                          L.render.type === 'pin')
                        )
                          (D.beginPath(), D.arc(V.x, V.y, 3, 0, 2 * Math.PI), D.closePath());
                        else {
                          if (
                            (Y ? (F = h.add(Y.position, L.pointB)) : (F = L.pointB),
                            D.beginPath(),
                            D.moveTo(V.x, V.y),
                            L.render.type === 'spring')
                          )
                            for (
                              var ie = h.sub(F, V),
                                le = h.perp(h.normalise(ie)),
                                A = Math.ceil(m.clamp(L.length / 5, 12, 20)),
                                N,
                                q = 1;
                              q < A;
                              q += 1
                            )
                              ((N = q % 2 === 0 ? 1 : -1),
                                D.lineTo(
                                  V.x + ie.x * (q / A) + le.x * N * 4,
                                  V.y + ie.y * (q / A) + le.y * N * 4
                                ));
                          D.lineTo(F.x, F.y);
                        }
                        (L.render.lineWidth &&
                          ((D.lineWidth = L.render.lineWidth),
                          (D.strokeStyle = L.render.strokeStyle),
                          D.stroke()),
                          L.render.anchors &&
                            ((D.fillStyle = L.render.strokeStyle),
                            D.beginPath(),
                            D.arc(V.x, V.y, 3, 0, 2 * Math.PI),
                            D.arc(F.x, F.y, 3, 0, 2 * Math.PI),
                            D.closePath(),
                            D.fill()));
                      }
                    }
                  }),
                  (a.bodies = function (M, O, D) {
                    var _ = D;
                    M.engine;
                    var L = M.options,
                      B = L.showInternalEdges || !L.wireframes,
                      Y,
                      V,
                      F,
                      ie;
                    for (F = 0; F < O.length; F++)
                      if (((Y = O[F]), !!Y.render.visible)) {
                        for (ie = Y.parts.length > 1 ? 1 : 0; ie < Y.parts.length; ie++)
                          if (((V = Y.parts[ie]), !!V.render.visible)) {
                            if (
                              (L.showSleeping && Y.isSleeping
                                ? (_.globalAlpha = 0.5 * V.render.opacity)
                                : V.render.opacity !== 1 && (_.globalAlpha = V.render.opacity),
                              V.render.sprite && V.render.sprite.texture && !L.wireframes)
                            ) {
                              var le = V.render.sprite,
                                A = U(M, le.texture);
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
                                for (var N = 1; N < V.vertices.length; N++)
                                  (!V.vertices[N - 1].isInternal || B
                                    ? _.lineTo(V.vertices[N].x, V.vertices[N].y)
                                    : _.moveTo(V.vertices[N].x, V.vertices[N].y),
                                    V.vertices[N].isInternal &&
                                      !B &&
                                      _.moveTo(
                                        V.vertices[(N + 1) % V.vertices.length].x,
                                        V.vertices[(N + 1) % V.vertices.length].y
                                      ));
                                (_.lineTo(V.vertices[0].x, V.vertices[0].y), _.closePath());
                              }
                              L.wireframes
                                ? ((_.lineWidth = 1),
                                  (_.strokeStyle = M.options.wireframeStrokeStyle),
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
                  (a.bodyWireframes = function (M, O, D) {
                    var _ = D,
                      L = M.options.showInternalEdges,
                      B,
                      Y,
                      V,
                      F,
                      ie;
                    for (_.beginPath(), V = 0; V < O.length; V++)
                      if (((B = O[V]), !!B.render.visible))
                        for (ie = B.parts.length > 1 ? 1 : 0; ie < B.parts.length; ie++) {
                          for (
                            Y = B.parts[ie], _.moveTo(Y.vertices[0].x, Y.vertices[0].y), F = 1;
                            F < Y.vertices.length;
                            F++
                          )
                            (!Y.vertices[F - 1].isInternal || L
                              ? _.lineTo(Y.vertices[F].x, Y.vertices[F].y)
                              : _.moveTo(Y.vertices[F].x, Y.vertices[F].y),
                              Y.vertices[F].isInternal &&
                                !L &&
                                _.moveTo(
                                  Y.vertices[(F + 1) % Y.vertices.length].x,
                                  Y.vertices[(F + 1) % Y.vertices.length].y
                                ));
                          _.lineTo(Y.vertices[0].x, Y.vertices[0].y);
                        }
                    ((_.lineWidth = 1),
                      (_.strokeStyle = M.options.wireframeStrokeStyle),
                      _.stroke());
                  }),
                  (a.bodyConvexHulls = function (M, O, D) {
                    var _ = D,
                      L,
                      B,
                      Y;
                    for (_.beginPath(), B = 0; B < O.length; B++)
                      if (((L = O[B]), !(!L.render.visible || L.parts.length === 1))) {
                        for (
                          _.moveTo(L.vertices[0].x, L.vertices[0].y), Y = 1;
                          Y < L.vertices.length;
                          Y++
                        )
                          _.lineTo(L.vertices[Y].x, L.vertices[Y].y);
                        _.lineTo(L.vertices[0].x, L.vertices[0].y);
                      }
                    ((_.lineWidth = 1), (_.strokeStyle = 'rgba(255,255,255,0.2)'), _.stroke());
                  }),
                  (a.vertexNumbers = function (M, O, D) {
                    var _ = D,
                      L,
                      B,
                      Y;
                    for (L = 0; L < O.length; L++) {
                      var V = O[L].parts;
                      for (Y = V.length > 1 ? 1 : 0; Y < V.length; Y++) {
                        var F = V[Y];
                        for (B = 0; B < F.vertices.length; B++)
                          ((_.fillStyle = 'rgba(255,255,255,0.2)'),
                            _.fillText(
                              L + '_' + B,
                              F.position.x + (F.vertices[B].x - F.position.x) * 0.8,
                              F.position.y + (F.vertices[B].y - F.position.y) * 0.8
                            ));
                      }
                    }
                  }),
                  (a.mousePosition = function (M, O, D) {
                    var _ = D;
                    ((_.fillStyle = 'rgba(255,255,255,0.8)'),
                      _.fillText(
                        O.position.x + '  ' + O.position.y,
                        O.position.x + 5,
                        O.position.y - 5
                      ));
                  }),
                  (a.bodyBounds = function (M, O, D) {
                    var _ = D;
                    M.engine;
                    var L = M.options;
                    _.beginPath();
                    for (var B = 0; B < O.length; B++) {
                      var Y = O[B];
                      if (Y.render.visible)
                        for (var V = O[B].parts, F = V.length > 1 ? 1 : 0; F < V.length; F++) {
                          var ie = V[F];
                          _.rect(
                            ie.bounds.min.x,
                            ie.bounds.min.y,
                            ie.bounds.max.x - ie.bounds.min.x,
                            ie.bounds.max.y - ie.bounds.min.y
                          );
                        }
                    }
                    (L.wireframes
                      ? (_.strokeStyle = 'rgba(255,255,255,0.08)')
                      : (_.strokeStyle = 'rgba(0,0,0,0.1)'),
                      (_.lineWidth = 1),
                      _.stroke());
                  }),
                  (a.bodyAxes = function (M, O, D) {
                    var _ = D;
                    M.engine;
                    var L = M.options,
                      B,
                      Y,
                      V,
                      F;
                    for (_.beginPath(), Y = 0; Y < O.length; Y++) {
                      var ie = O[Y],
                        le = ie.parts;
                      if (ie.render.visible)
                        if (L.showAxes)
                          for (V = le.length > 1 ? 1 : 0; V < le.length; V++)
                            for (B = le[V], F = 0; F < B.axes.length; F++) {
                              var A = B.axes[F];
                              (_.moveTo(B.position.x, B.position.y),
                                _.lineTo(B.position.x + A.x * 20, B.position.y + A.y * 20));
                            }
                        else
                          for (V = le.length > 1 ? 1 : 0; V < le.length; V++)
                            for (B = le[V], F = 0; F < B.axes.length; F++)
                              (_.moveTo(B.position.x, B.position.y),
                                _.lineTo(
                                  (B.vertices[0].x + B.vertices[B.vertices.length - 1].x) / 2,
                                  (B.vertices[0].y + B.vertices[B.vertices.length - 1].y) / 2
                                ));
                    }
                    (L.wireframes
                      ? ((_.strokeStyle = 'indianred'), (_.lineWidth = 1))
                      : ((_.strokeStyle = 'rgba(255, 255, 255, 0.4)'),
                        (_.globalCompositeOperation = 'overlay'),
                        (_.lineWidth = 2)),
                      _.stroke(),
                      (_.globalCompositeOperation = 'source-over'));
                  }),
                  (a.bodyPositions = function (M, O, D) {
                    var _ = D;
                    M.engine;
                    var L = M.options,
                      B,
                      Y,
                      V,
                      F;
                    for (_.beginPath(), V = 0; V < O.length; V++)
                      if (((B = O[V]), !!B.render.visible))
                        for (F = 0; F < B.parts.length; F++)
                          ((Y = B.parts[F]),
                            _.arc(Y.position.x, Y.position.y, 3, 0, 2 * Math.PI, !1),
                            _.closePath());
                    for (
                      L.wireframes
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
                  (a.bodyVelocity = function (M, O, D) {
                    var _ = D;
                    _.beginPath();
                    for (var L = 0; L < O.length; L++) {
                      var B = O[L];
                      if (B.render.visible) {
                        var Y = f.getVelocity(B);
                        (_.moveTo(B.position.x, B.position.y),
                          _.lineTo(B.position.x + Y.x, B.position.y + Y.y));
                      }
                    }
                    ((_.lineWidth = 3), (_.strokeStyle = 'cornflowerblue'), _.stroke());
                  }),
                  (a.bodyIds = function (M, O, D) {
                    var _ = D,
                      L,
                      B;
                    for (L = 0; L < O.length; L++)
                      if (O[L].render.visible) {
                        var Y = O[L].parts;
                        for (B = Y.length > 1 ? 1 : 0; B < Y.length; B++) {
                          var V = Y[B];
                          ((_.font = '12px Arial'),
                            (_.fillStyle = 'rgba(255,255,255,0.5)'),
                            _.fillText(V.id, V.position.x + 10, V.position.y - 10));
                        }
                      }
                  }),
                  (a.collisions = function (M, O, D) {
                    var _ = D,
                      L = M.options,
                      B,
                      Y,
                      V,
                      F;
                    for (_.beginPath(), V = 0; V < O.length; V++)
                      if (((B = O[V]), !!B.isActive))
                        for (Y = B.collision, F = 0; F < B.contactCount; F++) {
                          var ie = B.contacts[F],
                            le = ie.vertex;
                          _.rect(le.x - 1.5, le.y - 1.5, 3.5, 3.5);
                        }
                    for (
                      L.wireframes
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
                          N = B.contacts[0].vertex.y;
                        (B.contactCount === 2 &&
                          ((A = (B.contacts[0].vertex.x + B.contacts[1].vertex.x) / 2),
                          (N = (B.contacts[0].vertex.y + B.contacts[1].vertex.y) / 2)),
                          Y.bodyB === Y.supports[0].body || Y.bodyA.isStatic === !0
                            ? _.moveTo(A - Y.normal.x * 8, N - Y.normal.y * 8)
                            : _.moveTo(A + Y.normal.x * 8, N + Y.normal.y * 8),
                          _.lineTo(A, N));
                      }
                    (L.wireframes
                      ? (_.strokeStyle = 'rgba(255,165,0,0.7)')
                      : (_.strokeStyle = 'orange'),
                      (_.lineWidth = 1),
                      _.stroke());
                  }),
                  (a.separations = function (M, O, D) {
                    var _ = D,
                      L = M.options,
                      B,
                      Y,
                      V,
                      F,
                      ie;
                    for (_.beginPath(), ie = 0; ie < O.length; ie++)
                      if (((B = O[ie]), !!B.isActive)) {
                        ((Y = B.collision), (V = Y.bodyA), (F = Y.bodyB));
                        var le = 1;
                        (!F.isStatic && !V.isStatic && (le = 0.5),
                          F.isStatic && (le = 0),
                          _.moveTo(F.position.x, F.position.y),
                          _.lineTo(
                            F.position.x - Y.penetration.x * le,
                            F.position.y - Y.penetration.y * le
                          ),
                          (le = 1),
                          !F.isStatic && !V.isStatic && (le = 0.5),
                          V.isStatic && (le = 0),
                          _.moveTo(V.position.x, V.position.y),
                          _.lineTo(
                            V.position.x + Y.penetration.x * le,
                            V.position.y + Y.penetration.y * le
                          ));
                      }
                    (L.wireframes
                      ? (_.strokeStyle = 'rgba(255,165,0,0.5)')
                      : (_.strokeStyle = 'orange'),
                      _.stroke());
                  }),
                  (a.inspector = function (M, O) {
                    M.engine;
                    var D = M.selected,
                      _ = M.render,
                      L = _.options,
                      B;
                    if (L.hasBounds) {
                      var Y = _.bounds.max.x - _.bounds.min.x,
                        V = _.bounds.max.y - _.bounds.min.y,
                        F = Y / _.options.width,
                        ie = V / _.options.height;
                      (O.scale(1 / F, 1 / ie), O.translate(-_.bounds.min.x, -_.bounds.min.y));
                    }
                    for (var le = 0; le < D.length; le++) {
                      var A = D[le].data;
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
                          var N = A.pointA;
                          (A.bodyA && (N = A.pointB),
                            O.beginPath(),
                            O.arc(N.x, N.y, 10, 0, 2 * Math.PI),
                            O.closePath(),
                            O.stroke());
                          break;
                      }
                      (O.setLineDash([]), O.translate(-0.5, -0.5));
                    }
                    (M.selectStart !== null &&
                      (O.translate(0.5, 0.5),
                      (O.lineWidth = 1),
                      (O.strokeStyle = 'rgba(255,165,0,0.6)'),
                      (O.fillStyle = 'rgba(255,165,0,0.1)'),
                      (B = M.selectBounds),
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
                      L.hasBounds && O.setTransform(1, 0, 0, 1, 0, 0));
                  }));
                var p = function (M, O) {
                    var D = M.engine,
                      _ = M.timing,
                      L = _.historySize,
                      B = D.timing.timestamp;
                    ((_.delta = O - _.lastTime || a._goodDelta),
                      (_.lastTime = O),
                      (_.timestampElapsed = B - _.lastTimestamp || 0),
                      (_.lastTimestamp = B),
                      _.deltaHistory.unshift(_.delta),
                      (_.deltaHistory.length = Math.min(_.deltaHistory.length, L)),
                      _.engineDeltaHistory.unshift(D.timing.lastDelta),
                      (_.engineDeltaHistory.length = Math.min(_.engineDeltaHistory.length, L)),
                      _.timestampElapsedHistory.unshift(_.timestampElapsed),
                      (_.timestampElapsedHistory.length = Math.min(
                        _.timestampElapsedHistory.length,
                        L
                      )),
                      _.engineUpdatesHistory.unshift(D.timing.lastUpdatesPerFrame),
                      (_.engineUpdatesHistory.length = Math.min(_.engineUpdatesHistory.length, L)),
                      _.engineElapsedHistory.unshift(D.timing.lastElapsed),
                      (_.engineElapsedHistory.length = Math.min(_.engineElapsedHistory.length, L)),
                      _.elapsedHistory.unshift(_.lastElapsed),
                      (_.elapsedHistory.length = Math.min(_.elapsedHistory.length, L)));
                  },
                  C = function (M) {
                    for (var O = 0, D = 0; D < M.length; D += 1) O += M[D];
                    return O / M.length || 0;
                  },
                  R = function (M, O) {
                    var D = document.createElement('canvas');
                    return (
                      (D.width = M),
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
                  w = function (M) {
                    var O = M.getContext('2d'),
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
                  U = function (M, O) {
                    var D = M.textures[O];
                    return D || ((D = M.textures[O] = new Image()), (D.src = O), D);
                  },
                  G = function (M, O) {
                    var D = O;
                    (/(jpg|gif|png)$/.test(O) && (D = 'url(' + O + ')'),
                      (M.canvas.style.background = D),
                      (M.canvas.style.backgroundSize = 'contain'),
                      (M.currentBackground = O));
                  };
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(5),
                m = c(17),
                o = c(0);
              (function () {
                ((a._maxFrameDelta = 1e3 / 15),
                  (a._frameDeltaFallback = 1e3 / 60),
                  (a._timeBufferMargin = 1.5),
                  (a._elapsedNextEstimate = 1),
                  (a._smoothingLowerBound = 0.1),
                  (a._smoothingUpperBound = 0.9),
                  (a.create = function (d) {
                    var h = {
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
                      g = o.extend(h, d);
                    return ((g.fps = 0), g);
                  }),
                  (a.run = function (d, h) {
                    return (
                      (d.timeBuffer = a._frameDeltaFallback),
                      (function g(r) {
                        ((d.frameRequestId = a._onNextFrame(d, g)),
                          r && d.enabled && a.tick(d, h, r));
                      })(),
                      d
                    );
                  }),
                  (a.tick = function (d, h, g) {
                    var r = o.now(),
                      x = d.delta,
                      p = 0,
                      C = g - d.timeLastTick;
                    if (
                      ((!C || !d.timeLastTick || C > Math.max(a._maxFrameDelta, d.maxFrameTime)) &&
                        (C = d.frameDelta || a._frameDeltaFallback),
                      d.frameDeltaSmoothing)
                    ) {
                      (d.frameDeltaHistory.push(C),
                        (d.frameDeltaHistory = d.frameDeltaHistory.slice(
                          -d.frameDeltaHistorySize
                        )));
                      var R = d.frameDeltaHistory.slice(0).sort(),
                        w = d.frameDeltaHistory.slice(
                          R.length * a._smoothingLowerBound,
                          R.length * a._smoothingUpperBound
                        ),
                        U = v(w);
                      C = U || C;
                    }
                    (d.frameDeltaSnapping && (C = 1e3 / Math.round(1e3 / C)),
                      (d.frameDelta = C),
                      (d.timeLastTick = g),
                      (d.timeBuffer += d.frameDelta),
                      (d.timeBuffer = o.clamp(
                        d.timeBuffer,
                        0,
                        d.frameDelta + x * a._timeBufferMargin
                      )),
                      (d.lastUpdatesDeferred = 0));
                    var G = d.maxUpdates || Math.ceil(d.maxFrameTime / x),
                      M = { timestamp: h.timing.timestamp };
                    (f.trigger(d, 'beforeTick', M), f.trigger(d, 'tick', M));
                    for (var O = o.now(); x > 0 && d.timeBuffer >= x * a._timeBufferMargin; ) {
                      (f.trigger(d, 'beforeUpdate', M),
                        m.update(h, x),
                        f.trigger(d, 'afterUpdate', M),
                        (d.timeBuffer -= x),
                        (p += 1));
                      var D = o.now() - r,
                        _ = o.now() - O,
                        L = D + (a._elapsedNextEstimate * _) / p;
                      if (p >= G || L > d.maxFrameTime) {
                        d.lastUpdatesDeferred = Math.round(
                          Math.max(0, d.timeBuffer / x - a._timeBufferMargin)
                        );
                        break;
                      }
                    }
                    ((h.timing.lastUpdatesPerFrame = p),
                      f.trigger(d, 'afterTick', M),
                      d.frameDeltaHistory.length >= 100 &&
                        (d.lastUpdatesDeferred && Math.round(d.frameDelta / x) > G
                          ? o.warnOnce('Matter.Runner: runner reached runner.maxUpdates, see docs.')
                          : d.lastUpdatesDeferred &&
                            o.warnOnce(
                              'Matter.Runner: runner reached runner.maxFrameTime, see docs.'
                            ),
                        typeof d.isFixed < 'u' &&
                          o.warnOnce('Matter.Runner: runner.isFixed is now redundant, see docs.'),
                        (d.deltaMin || d.deltaMax) &&
                          o.warnOnce(
                            'Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs.'
                          ),
                        d.fps !== 0 &&
                          o.warnOnce(
                            'Matter.Runner: runner.fps was replaced by runner.delta, see docs.'
                          )));
                  }),
                  (a.stop = function (d) {
                    a._cancelNextFrame(d);
                  }),
                  (a._onNextFrame = function (d, h) {
                    if (typeof window < 'u' && window.requestAnimationFrame)
                      d.frameRequestId = window.requestAnimationFrame(h);
                    else
                      throw new Error(
                        'Matter.Runner: missing required global window.requestAnimationFrame.'
                      );
                    return d.frameRequestId;
                  }),
                  (a._cancelNextFrame = function (d) {
                    if (typeof window < 'u' && window.cancelAnimationFrame)
                      window.cancelAnimationFrame(d.frameRequestId);
                    else
                      throw new Error(
                        'Matter.Runner: missing required global window.cancelAnimationFrame.'
                      );
                  }));
                var v = function (d) {
                  for (var h = 0, g = d.length, r = 0; r < g; r += 1) h += d[r];
                  return h / g || 0;
                };
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(8),
                m = c(0),
                o = m.deprecated;
              (function () {
                ((a.collides = function (v, d) {
                  return f.collides(v, d);
                }),
                  o(a, 'collides', 'SAT.collides ➤ replaced by Collision.collides'));
              })();
            },
            function (b, y, c) {
              var a = {};
              ((b.exports = a), c(1));
              var f = c(0);
              (function () {
                ((a.pathToVertices = function (m, o) {
                  typeof window < 'u' &&
                    !('SVGPathSeg' in window) &&
                    f.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
                  var v,
                    d,
                    h,
                    g,
                    r,
                    x,
                    p,
                    C,
                    R,
                    w,
                    U = [],
                    G,
                    M,
                    O = 0,
                    D = 0,
                    _ = 0;
                  o = o || 15;
                  var L = function (Y, V, F) {
                      var ie = F % 2 === 1 && F > 1;
                      if (!R || Y != R.x || V != R.y) {
                        R && ie ? ((G = R.x), (M = R.y)) : ((G = 0), (M = 0));
                        var le = { x: G + Y, y: M + V };
                        ((ie || !R) && (R = le), U.push(le), (D = G + Y), (_ = M + V));
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
                        L(D, _, Y.pathSegType);
                      }
                    };
                  for (
                    a._svgPathToAbsolute(m), h = m.getTotalLength(), x = [], v = 0;
                    v < m.pathSegList.numberOfItems;
                    v += 1
                  )
                    x.push(m.pathSegList.getItem(v));
                  for (p = x.concat(); O < h; ) {
                    if (((w = m.getPathSegAtLength(O)), (r = x[w]), r != C)) {
                      for (; p.length && p[0] != r; ) B(p.shift());
                      C = r;
                    }
                    switch (r.pathSegTypeAsLetter.toUpperCase()) {
                      case 'C':
                      case 'T':
                      case 'S':
                      case 'Q':
                      case 'A':
                        ((g = m.getPointAtLength(O)), L(g.x, g.y, 0));
                        break;
                    }
                    O += o;
                  }
                  for (v = 0, d = p.length; v < d; ++v) B(p[v]);
                  return U;
                }),
                  (a._svgPathToAbsolute = function (m) {
                    for (
                      var o,
                        v,
                        d,
                        h,
                        g,
                        r,
                        x = m.pathSegList,
                        p = 0,
                        C = 0,
                        R = x.numberOfItems,
                        w = 0;
                      w < R;
                      ++w
                    ) {
                      var U = x.getItem(w),
                        G = U.pathSegTypeAsLetter;
                      if (/[MLHVCSQTA]/.test(G)) ('x' in U && (p = U.x), 'y' in U && (C = U.y));
                      else
                        switch (
                          ('x1' in U && (d = p + U.x1),
                          'x2' in U && (g = p + U.x2),
                          'y1' in U && (h = C + U.y1),
                          'y2' in U && (r = C + U.y2),
                          'x' in U && (p += U.x),
                          'y' in U && (C += U.y),
                          G)
                        ) {
                          case 'm':
                            x.replaceItem(m.createSVGPathSegMovetoAbs(p, C), w);
                            break;
                          case 'l':
                            x.replaceItem(m.createSVGPathSegLinetoAbs(p, C), w);
                            break;
                          case 'h':
                            x.replaceItem(m.createSVGPathSegLinetoHorizontalAbs(p), w);
                            break;
                          case 'v':
                            x.replaceItem(m.createSVGPathSegLinetoVerticalAbs(C), w);
                            break;
                          case 'c':
                            x.replaceItem(m.createSVGPathSegCurvetoCubicAbs(p, C, d, h, g, r), w);
                            break;
                          case 's':
                            x.replaceItem(m.createSVGPathSegCurvetoCubicSmoothAbs(p, C, g, r), w);
                            break;
                          case 'q':
                            x.replaceItem(m.createSVGPathSegCurvetoQuadraticAbs(p, C, d, h), w);
                            break;
                          case 't':
                            x.replaceItem(m.createSVGPathSegCurvetoQuadraticSmoothAbs(p, C), w);
                            break;
                          case 'a':
                            x.replaceItem(
                              m.createSVGPathSegArcAbs(
                                p,
                                C,
                                U.r1,
                                U.r2,
                                U.angle,
                                U.largeArcFlag,
                                U.sweepFlag
                              ),
                              w
                            );
                            break;
                          case 'z':
                          case 'Z':
                            ((p = o), (C = v));
                            break;
                        }
                      (G == 'M' || G == 'm') && ((o = p), (v = C));
                    }
                  }));
              })();
            },
            function (b, y, c) {
              var a = {};
              b.exports = a;
              var f = c(6);
              (c(0),
                (function () {
                  ((a.create = f.create),
                    (a.add = f.add),
                    (a.remove = f.remove),
                    (a.clear = f.clear),
                    (a.addComposite = f.addComposite),
                    (a.addBody = f.addBody),
                    (a.addConstraint = f.addConstraint));
                })());
            },
          ]);
        });
      })(rr)),
    rr.exports
  );
}
var Dx = Ox();
const Te = Bh(Dx);
var qc, Ah;
function wx() {
  if (Ah) return qc;
  ((Ah = 1),
    (qc = {
      decomp: D,
      quickDecomp: Y,
      isSimple: L,
      removeCollinearPoints: V,
      removeDuplicatePoints: F,
      makeCCW: x,
    }));
  function s(A, N, q) {
    q = q || 0;
    var $ = [0, 0],
      ae,
      z,
      Z,
      P,
      ue,
      se,
      ce;
    return (
      (ae = A[1][1] - A[0][1]),
      (z = A[0][0] - A[1][0]),
      (Z = ae * A[0][0] + z * A[0][1]),
      (P = N[1][1] - N[0][1]),
      (ue = N[0][0] - N[1][0]),
      (se = P * N[0][0] + ue * N[0][1]),
      (ce = ae * ue - P * z),
      ie(ce, 0, q) || (($[0] = (ue * Z - z * se) / ce), ($[1] = (ae * se - P * Z) / ce)),
      $
    );
  }
  function S(A, N, q, $) {
    var ae = N[0] - A[0],
      z = N[1] - A[1],
      Z = $[0] - q[0],
      P = $[1] - q[1];
    if (Z * z - P * ae === 0) return !1;
    var ue = (ae * (q[1] - A[1]) + z * (A[0] - q[0])) / (Z * z - P * ae),
      se = (Z * (A[1] - q[1]) + P * (q[0] - A[0])) / (P * ae - Z * z);
    return ue >= 0 && ue <= 1 && se >= 0 && se <= 1;
  }
  function b(A, N, q) {
    return (N[0] - A[0]) * (q[1] - A[1]) - (q[0] - A[0]) * (N[1] - A[1]);
  }
  function y(A, N, q) {
    return b(A, N, q) > 0;
  }
  function c(A, N, q) {
    return b(A, N, q) >= 0;
  }
  function a(A, N, q) {
    return b(A, N, q) < 0;
  }
  function f(A, N, q) {
    return b(A, N, q) <= 0;
  }
  var m = [],
    o = [];
  function v(A, N, q, $) {
    if ($) {
      var ae = m,
        z = o;
      ((ae[0] = N[0] - A[0]), (ae[1] = N[1] - A[1]), (z[0] = q[0] - N[0]), (z[1] = q[1] - N[1]));
      var Z = ae[0] * z[0] + ae[1] * z[1],
        P = Math.sqrt(ae[0] * ae[0] + ae[1] * ae[1]),
        ue = Math.sqrt(z[0] * z[0] + z[1] * z[1]),
        se = Math.acos(Z / (P * ue));
      return se < $;
    } else return b(A, N, q) === 0;
  }
  function d(A, N) {
    var q = N[0] - A[0],
      $ = N[1] - A[1];
    return q * q + $ * $;
  }
  function h(A, N) {
    var q = A.length;
    return A[N < 0 ? (N % q) + q : N % q];
  }
  function g(A) {
    A.length = 0;
  }
  function r(A, N, q, $) {
    for (var ae = q; ae < $; ae++) A.push(N[ae]);
  }
  function x(A) {
    for (var N = 0, q = A, $ = 1; $ < A.length; ++$)
      (q[$][1] < q[N][1] || (q[$][1] === q[N][1] && q[$][0] > q[N][0])) && (N = $);
    return y(h(A, N - 1), h(A, N), h(A, N + 1)) ? !1 : (p(A), !0);
  }
  function p(A) {
    for (var N = [], q = A.length, $ = 0; $ !== q; $++) N.push(A.pop());
    for (var $ = 0; $ !== q; $++) A[$] = N[$];
  }
  function C(A, N) {
    return a(h(A, N - 1), h(A, N), h(A, N + 1));
  }
  var R = [],
    w = [];
  function U(A, N, q) {
    var $,
      ae,
      z = R,
      Z = w;
    if (c(h(A, N + 1), h(A, N), h(A, q)) && f(h(A, N - 1), h(A, N), h(A, q))) return !1;
    ae = d(h(A, N), h(A, q));
    for (var P = 0; P !== A.length; ++P)
      if (
        !((P + 1) % A.length === N || P === N) &&
        c(h(A, N), h(A, q), h(A, P + 1)) &&
        f(h(A, N), h(A, q), h(A, P)) &&
        ((z[0] = h(A, N)),
        (z[1] = h(A, q)),
        (Z[0] = h(A, P)),
        (Z[1] = h(A, P + 1)),
        ($ = s(z, Z)),
        d(h(A, N), $) < ae)
      )
        return !1;
    return !0;
  }
  function G(A, N, q) {
    for (var $ = 0; $ !== A.length; ++$)
      if (
        !($ === N || $ === q || ($ + 1) % A.length === N || ($ + 1) % A.length === q) &&
        S(h(A, N), h(A, q), h(A, $), h(A, $ + 1))
      )
        return !1;
    return !0;
  }
  function M(A, N, q, $) {
    var ae = $ || [];
    if ((g(ae), N < q)) for (var z = N; z <= q; z++) ae.push(A[z]);
    else {
      for (var z = 0; z <= q; z++) ae.push(A[z]);
      for (var z = N; z < A.length; z++) ae.push(A[z]);
    }
    return ae;
  }
  function O(A) {
    for (var N = [], q = [], $ = [], ae = [], z = Number.MAX_VALUE, Z = 0; Z < A.length; ++Z)
      if (C(A, Z)) {
        for (var P = 0; P < A.length; ++P)
          if (U(A, Z, P)) {
            ((q = O(M(A, Z, P, ae))), ($ = O(M(A, P, Z, ae))));
            for (var ue = 0; ue < $.length; ue++) q.push($[ue]);
            q.length < z && ((N = q), (z = q.length), N.push([h(A, Z), h(A, P)]));
          }
      }
    return N;
  }
  function D(A) {
    var N = O(A);
    return N.length > 0 ? _(A, N) : [A];
  }
  function _(A, N) {
    if (N.length === 0) return [A];
    if (
      N instanceof Array &&
      N.length &&
      N[0] instanceof Array &&
      N[0].length === 2 &&
      N[0][0] instanceof Array
    ) {
      for (var q = [A], $ = 0; $ < N.length; $++)
        for (var ae = N[$], z = 0; z < q.length; z++) {
          var Z = q[z],
            P = _(Z, ae);
          if (P) {
            (q.splice(z, 1), q.push(P[0], P[1]));
            break;
          }
        }
      return q;
    } else {
      var ae = N,
        $ = A.indexOf(ae[0]),
        z = A.indexOf(ae[1]);
      return $ !== -1 && z !== -1 ? [M(A, $, z), M(A, z, $)] : !1;
    }
  }
  function L(A) {
    var N = A,
      q;
    for (q = 0; q < N.length - 1; q++)
      for (var $ = 0; $ < q - 1; $++) if (S(N[q], N[q + 1], N[$], N[$ + 1])) return !1;
    for (q = 1; q < N.length - 2; q++) if (S(N[0], N[N.length - 1], N[q], N[q + 1])) return !1;
    return !0;
  }
  function B(A, N, q, $, ae) {
    ae = ae || 0;
    var z = N[1] - A[1],
      Z = A[0] - N[0],
      P = z * A[0] + Z * A[1],
      ue = $[1] - q[1],
      se = q[0] - $[0],
      ce = ue * q[0] + se * q[1],
      ve = z * se - ue * Z;
    return ie(ve, 0, ae) ? [0, 0] : [(se * P - Z * ce) / ve, (z * ce - ue * P) / ve];
  }
  function Y(A, N, q, $, ae, z, Z) {
    ((z = z || 100),
      (Z = Z || 0),
      (ae = ae || 25),
      (N = typeof N < 'u' ? N : []),
      (q = q || []),
      ($ = $ || []));
    var P = [0, 0],
      ue = [0, 0],
      se = [0, 0],
      ce = 0,
      ve = 0,
      Se = 0,
      Ce = 0,
      Be = 0,
      Ye = 0,
      Ve = 0,
      st = [],
      Fe = [],
      fe = A,
      Yt = A;
    if (Yt.length < 3) return N;
    if ((Z++, Z > z)) return (console.warn('quickDecomp: max level (' + z + ') reached.'), N);
    for (var pe = 0; pe < A.length; ++pe)
      if (C(fe, pe)) {
        (q.push(fe[pe]), (ce = ve = Number.MAX_VALUE));
        for (var Ae = 0; Ae < A.length; ++Ae)
          (y(h(fe, pe - 1), h(fe, pe), h(fe, Ae)) &&
            f(h(fe, pe - 1), h(fe, pe), h(fe, Ae - 1)) &&
            ((se = B(h(fe, pe - 1), h(fe, pe), h(fe, Ae), h(fe, Ae - 1))),
            a(h(fe, pe + 1), h(fe, pe), se) &&
              ((Se = d(fe[pe], se)), Se < ve && ((ve = Se), (ue = se), (Ye = Ae)))),
            y(h(fe, pe + 1), h(fe, pe), h(fe, Ae + 1)) &&
              f(h(fe, pe + 1), h(fe, pe), h(fe, Ae)) &&
              ((se = B(h(fe, pe + 1), h(fe, pe), h(fe, Ae), h(fe, Ae + 1))),
              y(h(fe, pe - 1), h(fe, pe), se) &&
                ((Se = d(fe[pe], se)), Se < ce && ((ce = Se), (P = se), (Be = Ae)))));
        if (Ye === (Be + 1) % A.length)
          ((se[0] = (ue[0] + P[0]) / 2),
            (se[1] = (ue[1] + P[1]) / 2),
            $.push(se),
            pe < Be
              ? (r(st, fe, pe, Be + 1),
                st.push(se),
                Fe.push(se),
                Ye !== 0 && r(Fe, fe, Ye, fe.length),
                r(Fe, fe, 0, pe + 1))
              : (pe !== 0 && r(st, fe, pe, fe.length),
                r(st, fe, 0, Be + 1),
                st.push(se),
                Fe.push(se),
                r(Fe, fe, Ye, pe + 1)));
        else {
          if ((Ye > Be && (Be += A.length), (Ce = Number.MAX_VALUE), Be < Ye)) return N;
          for (var Ae = Ye; Ae <= Be; ++Ae)
            c(h(fe, pe - 1), h(fe, pe), h(fe, Ae)) &&
              f(h(fe, pe + 1), h(fe, pe), h(fe, Ae)) &&
              ((Se = d(h(fe, pe), h(fe, Ae))),
              Se < Ce && G(fe, pe, Ae) && ((Ce = Se), (Ve = Ae % A.length)));
          pe < Ve
            ? (r(st, fe, pe, Ve + 1), Ve !== 0 && r(Fe, fe, Ve, Yt.length), r(Fe, fe, 0, pe + 1))
            : (pe !== 0 && r(st, fe, pe, Yt.length), r(st, fe, 0, Ve + 1), r(Fe, fe, Ve, pe + 1));
        }
        return (
          st.length < Fe.length
            ? (Y(st, N, q, $, ae, z, Z), Y(Fe, N, q, $, ae, z, Z))
            : (Y(Fe, N, q, $, ae, z, Z), Y(st, N, q, $, ae, z, Z)),
          N
        );
      }
    return (N.push(A), N);
  }
  function V(A, N) {
    for (var q = 0, $ = A.length - 1; A.length > 3 && $ >= 0; --$)
      v(h(A, $ - 1), h(A, $), h(A, $ + 1), N) && (A.splice($ % A.length, 1), q++);
    return q;
  }
  function F(A, N) {
    for (var q = A.length - 1; q >= 1; --q)
      for (var $ = A[q], ae = q - 1; ae >= 0; --ae)
        if (le($, A[ae], N)) {
          A.splice(q, 1);
          continue;
        }
  }
  function ie(A, N, q) {
    return ((q = q || 0), Math.abs(A - N) <= q);
  }
  function le(A, N, q) {
    return ie(A[0], N[0], q) && ie(A[1], N[1], q);
  }
  return qc;
}
var vv = wx();
const zx = Bh(vv),
  Nx = Ng({ __proto__: null, default: zx }, [vv]),
  fn = {
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
  Bx = { 1: 20, 2: 26, 3: 32, 4: 38, 5: 46, 6: 54, 7: 62, 8: 72, 9: 82, 10: 104 },
  Ux = { 1: 0.5, 2: 0.5, 3: 0.45, 4: 0.45, 5: 0.4, 6: 0.4, 7: 0.35, 8: 0.35, 9: 0.3, 10: 0.25 },
  Hx = {
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
  Lx = {
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
  gv = (s, S) => {
    const b = String(S).padStart(2, '0');
    return `images/${s}/level${b}.png`;
  },
  jx = 256,
  _h = {
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
  Gx = (s) => (s * (s + 1)) / 2,
  Yx = (s) => ({
    id: s,
    level: s,
    name: Hx[s],
    theme: Lx[s],
    radius: Bx[s],
    restitution: Ux[s],
    friction: 0.3,
    density: 0.001,
    score: Gx(s),
    svgPath: gv(mr, s),
    color: _h[s].color,
    glowColor: _h[s].glow,
  }),
  Al = 10,
  hr = Object.fromEntries(Array.from({ length: Al }, (s, S) => S + 1).map((s) => [s, Yx(s)]));
Array.from({ length: Al }, (s, S) => hr[S + 1]);
const Xc = 3,
  Vx = 360,
  qx = (s) => Math.min(1, s / Vx),
  Oh = new Map(),
  Jn = (s, S, b = mr) => {
    const y = `${s}|${S}|${b}`,
      c = Oh.get(y);
    if (c) return c;
    const a = hr[s],
      f = { ...a, radius: a.radius * qx(S), svgPath: gv(b, s) };
    return (Oh.set(y, f), f);
  },
  Fn = {
    gravityY: 1.5,
    wallThickness: 150,
    gameOverLineOffset: 80,
    restingVelocityThreshold: 0.5,
    gameOverGracePeriodMs: 1e3,
    gameOverDangerLimitMs: 5e3,
  },
  $n = { wall: 1, item: 2, magnetTarget: 4 },
  yv = $n.wall | $n.item | $n.magnetTarget,
  Xx = $n.wall | $n.magnetTarget,
  pv = typeof window < 'u' && typeof window.localStorage < 'u',
  vr = (s) => {
    if (!pv) return null;
    try {
      return window.localStorage.getItem(s);
    } catch {
      return null;
    }
  },
  gr = (s, S) => {
    if (pv)
      try {
        window.localStorage.setItem(s, S);
      } catch {}
  },
  Qx = () => {
    const s = vr(fn.storageKeys.bestScore);
    if (s === null) return 0;
    const S = Number(s);
    return Number.isFinite(S) ? S : 0;
  },
  Zx = (s) => {
    gr(fn.storageKeys.bestScore, String(s));
  },
  Kx = () => {
    const s = vr(fn.storageKeys.scoreHistory);
    if (s === null) return [];
    try {
      const S = JSON.parse(s);
      return Array.isArray(S) ? S.filter((b) => typeof b == 'number' && Number.isFinite(b)) : [];
    } catch {
      return [];
    }
  },
  kx = (s) => {
    const S = [s, ...Kx()].slice(0, fn.maxScoreHistory);
    return (gr(fn.storageKeys.scoreHistory, JSON.stringify(S)), S);
  },
  Jx = () => {
    const s = vr(fn.storageKeys.isSoundOn);
    return s === null ? !0 : s === 'true';
  },
  Fx = (s) => {
    gr(fn.storageKeys.isSoundOn, String(s));
  },
  $x = () => {
    const s = vr(fn.storageKeys.themeId);
    return so(s) ? s : mr;
  },
  Dh = (s) => {
    gr(fn.storageKeys.themeId, s);
  },
  Wx = () => {
    const [s, S] = H.useState(0),
      [b, y] = H.useState(0),
      [c, a] = H.useState(!1),
      f = H.useRef(0),
      m = H.useRef(0);
    H.useEffect(() => {
      const g = Qx();
      ((m.current = g), y(g));
    }, []);
    const o = H.useCallback((g) => {
        ((f.current += g), S(f.current));
      }, []),
      v = H.useCallback((g) => {
        ((f.current = g), S(g));
      }, []),
      d = H.useCallback(() => {
        ((f.current = 0), S(0), a(!1));
      }, []),
      h = H.useCallback(() => {
        const g = f.current,
          r = g > m.current;
        return (
          r && ((m.current = g), Zx(g), y(g)),
          kx(g),
          a(r),
          { isNewRecord: r, finalScore: g }
        );
      }, []);
    return { score: s, bestScore: b, isNewRecord: c, add: o, setRaw: v, reset: d, finalize: h };
  },
  Ix = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  Px = { merge: 'sounds/punyu.mp3', special: 'sounds/punyu.mp3' },
  eS = 0.7,
  tS = () => {
    if (typeof window > 'u') return null;
    const s = window;
    return s.AudioContext ?? s.webkitAudioContext ?? null;
  },
  nS = () => {
    const [s, S] = H.useState(!0),
      b = H.useRef(null),
      y = H.useRef({});
    (H.useEffect(() => {
      S(Jx());
    }, []),
      H.useEffect(() => {
        const f = tS();
        if (!f) return;
        const m = new f();
        b.current = m;
        let o = !1;
        const v = {};
        return (
          (async () => {
            for (const [d, h] of Object.entries(Px))
              try {
                const r = await (await fetch(Ix(h))).arrayBuffer();
                if (o) return;
                const x = await m.decodeAudioData(r);
                if (o) return;
                v[d] = x;
              } catch {}
            y.current = v;
          })(),
          () => {
            ((o = !0), m.close().catch(() => {}), (b.current = null), (y.current = {}));
          }
        );
      }, []));
    const c = H.useCallback(() => {
        S((f) => {
          const m = !f;
          return (Fx(m), m);
        });
      }, []),
      a = H.useCallback(
        (f) => {
          if (!s) return;
          const m = b.current,
            o = y.current[f];
          if (!m || !o) return;
          m.state === 'suspended' && m.resume().catch(() => {});
          const v = m.createBufferSource();
          v.buffer = o;
          const d = m.createGain();
          ((d.gain.value = eS), v.connect(d).connect(m.destination), v.start(0));
        },
        [s]
      );
    return { isSoundOn: s, toggle: c, play: a };
  },
  xv = (s) => ({
    restitution: s.restitution,
    friction: s.friction,
    density: s.density,
    label: `item-${s.level}`,
    collisionFilter: { category: $n.item, mask: yv },
  }),
  Sv = (s) => {
    for (const S of s.parts) S.render.visible = !1;
  },
  Ev = (s, S, b) => {
    s.plugin.itemData = { level: S, consumed: !1, droppedAt: b };
  },
  lS = (s, S, b, y) => {
    const c = Te.Bodies.circle(S, b, s.radius, xv(s));
    return (Ev(c, s.level, y), Sv(c), c);
  },
  aS = (s, S, b, y, c) => {
    if (c.length < 3) return null;
    const a = Te.Bodies.fromVertices(S, b, [c], xv(s));
    return a ? (Ev(a, s.level, y), Sv(a), a) : null;
  },
  kn = (s) => s.plugin.itemData,
  iS = (s, S) => {
    const b = Fn.wallThickness,
      y = {
        isStatic: !0,
        restitution: 0.2,
        friction: 0.5,
        label: 'wall',
        collisionFilter: { category: $n.wall },
      },
      c = Te.Bodies.rectangle(s / 2, S + b / 2, s + b * 2, b, y),
      a = Te.Bodies.rectangle(-b / 2, S / 2, b, S * 2, y),
      f = Te.Bodies.rectangle(s + b / 2, S / 2, b, S * 2, y),
      m = Te.Bodies.rectangle(s / 2, -b / 2, s + b * 2, b, { ...y, restitution: 0 });
    return { ground: c, leftWall: a, rightWall: f, ceiling: m };
  },
  uS = (s, S) => ({ x: (s.position.x + S.position.x) / 2, y: (s.position.y + S.position.y) / 2 }),
  rS = (s) => (s < 2 || s > Al ? 0 : hr[s].score),
  sS = () => hr[Al].score,
  co = fn.storageKeys.suspended,
  cS = 1,
  $t = (s) => typeof s == 'number' && Number.isFinite(s),
  oS = (s) => {
    if (typeof s != 'object' || s === null) return null;
    const S = s;
    return !$t(S.level) || !$t(S.x) || !$t(S.y)
      ? null
      : {
          level: S.level,
          x: S.x,
          y: S.y,
          vx: $t(S.vx) ? S.vx : 0,
          vy: $t(S.vy) ? S.vy : 0,
          angle: $t(S.angle) ? S.angle : 0,
          angularVelocity: $t(S.angularVelocity) ? S.angularVelocity : 0,
        };
  },
  fS = () => {
    if (typeof window > 'u' || typeof window.localStorage > 'u') return null;
    let s = null;
    try {
      s = window.localStorage.getItem(co);
    } catch {
      return null;
    }
    if (s === null) return null;
    try {
      const S = JSON.parse(s);
      if (typeof S != 'object' || S === null) return null;
      const b = S;
      if (!$t(b.score) || !Array.isArray(b.bodies)) return null;
      const y = [];
      for (const c of b.bodies) {
        const a = oS(c);
        a && y.push(a);
      }
      return {
        version: $t(b.version) ? b.version : 0,
        savedAt: $t(b.savedAt) ? b.savedAt : 0,
        score: b.score,
        themeId: so(b.themeId) ? b.themeId : mr,
        currentItemLevel: $t(b.currentItemLevel) ? b.currentItemLevel : 1,
        nextItemLevel: $t(b.nextItemLevel) ? b.nextItemLevel : 1,
        skillGauge: $t(b.skillGauge) ? b.skillGauge : 0,
        bodies: y,
      };
    } catch {
      return null;
    }
  },
  dS = (s) => {
    if (!(typeof window > 'u' || typeof window.localStorage > 'u'))
      try {
        const S = { ...s, version: cS, savedAt: Date.now() };
        window.localStorage.setItem(co, JSON.stringify(S));
      } catch {}
  },
  mS = () => {
    if (!(typeof window > 'u' || typeof window.localStorage > 'u'))
      try {
        window.localStorage.removeItem(co);
      } catch {}
  },
  hS = 32,
  vS = 14,
  Rl = (s, S) => s * (1 << vS) + S,
  Hi = (s, S) => s[S + 3] >= hS,
  gS = (s, S, b) => {
    const y = [];
    for (let c = 0; c < b; c += 1)
      for (let a = 0; a < S; a += 1) {
        const f = (c * S + a) * 4;
        if (!Hi(s, f)) continue;
        ((c === 0 || !Hi(s, ((c - 1) * S + a) * 4)) &&
          y.push({
            fromKey: Rl(a, c),
            toKey: Rl(a + 1, c),
            from: { x: a, y: c },
            to: { x: a + 1, y: c },
          }),
          (a === S - 1 || !Hi(s, (c * S + (a + 1)) * 4)) &&
            y.push({
              fromKey: Rl(a + 1, c),
              toKey: Rl(a + 1, c + 1),
              from: { x: a + 1, y: c },
              to: { x: a + 1, y: c + 1 },
            }),
          (c === b - 1 || !Hi(s, ((c + 1) * S + a) * 4)) &&
            y.push({
              fromKey: Rl(a + 1, c + 1),
              toKey: Rl(a, c + 1),
              from: { x: a + 1, y: c + 1 },
              to: { x: a, y: c + 1 },
            }),
          (a === 0 || !Hi(s, (c * S + (a - 1)) * 4)) &&
            y.push({
              fromKey: Rl(a, c + 1),
              toKey: Rl(a, c),
              from: { x: a, y: c + 1 },
              to: { x: a, y: c },
            }));
      }
    return y;
  },
  yS = (s) => {
    const S = new Map();
    for (const c of s) {
      const a = S.get(c.fromKey);
      a ? a.push(c) : S.set(c.fromKey, [c]);
    }
    const b = new Set(),
      y = [];
    for (const c of s) {
      if (b.has(c)) continue;
      const a = [];
      let f = c;
      for (; f && !b.has(f); ) {
        (b.add(f), a.push(f.from));
        const m = S.get(f.toKey);
        f = m == null ? void 0 : m.find((o) => !b.has(o));
      }
      a.length >= 3 && y.push(a);
    }
    return y;
  },
  pS = (s, S, b) => {
    const y = b.x - S.x,
      c = b.y - S.y,
      a = Math.hypot(y, c);
    return a === 0
      ? Math.hypot(s.x - S.x, s.y - S.y)
      : Math.abs(c * s.x - y * s.y + b.x * S.y - b.y * S.x) / a;
  },
  Wc = (s, S) => {
    if (s.length <= 2) return s.slice();
    let b = 0,
      y = 0;
    const c = s.length - 1;
    for (let a = 1; a < c; a += 1) {
      const f = pS(s[a], s[0], s[c]);
      f > b && ((b = f), (y = a));
    }
    if (b > S) {
      const a = Wc(s.slice(0, y + 1), S),
        f = Wc(s.slice(y), S);
      return [...a, ...f.slice(1)];
    }
    return [s[0], s[c]];
  },
  xS = (s, S) => {
    if (s.length <= 3) return s;
    const b = [...s, s[0]],
      y = Wc(b, S);
    return (y.pop(), y);
  },
  SS = (s, S = {}) => {
    const b = S.simplifyEpsilon ?? 2,
      y = gS(s.data, s.width, s.height);
    if (y.length === 0) return null;
    const c = yS(y);
    if (c.length === 0) return null;
    let a = c[0];
    for (let f = 1; f < c.length; f += 1) c[f].length > a.length && (a = c[f]);
    return xS(a, b);
  },
  Li = new Map(),
  Qc = new Map(),
  ES = (s) => {
    if (s.length === 0) return { x: 0, y: 0 };
    let S = 0,
      b = 0;
    for (const y of s) ((S += y.x), (b += y.y));
    return { x: S / s.length, y: b / s.length };
  },
  bS = async (s) => {
    const S = s.width,
      b = s.height;
    if (typeof OffscreenCanvas < 'u') {
      const f = new OffscreenCanvas(S, b).getContext('2d');
      if (!f) throw new Error('OffscreenCanvas 2D context unavailable');
      return (f.drawImage(s, 0, 0), f.getImageData(0, 0, S, b));
    }
    const y = document.createElement('canvas');
    ((y.width = S), (y.height = b));
    const c = y.getContext('2d');
    if (!c) throw new Error('Canvas 2D context unavailable');
    return (c.drawImage(s, 0, 0), c.getImageData(0, 0, S, b));
  },
  CS = async (s, S) => {
    const b = Li.get(s);
    if (b !== void 0) return b;
    const y = Qc.get(s);
    if (y) return y;
    const c = (async () => {
      try {
        const a = await bS(S),
          f = SS(a);
        if (!f || f.length < 3) return (Li.set(s, null), null);
        const m = ES(f),
          o = {
            vertices: f,
            centroidOffset: { x: m.x - a.width / 2, y: m.y - a.height / 2 },
            pngWidth: a.width,
            pngHeight: a.height,
          };
        return (Li.set(s, o), o);
      } catch {
        return (Li.set(s, null), null);
      } finally {
        Qc.delete(s);
      }
    })();
    return (Qc.set(s, c), c);
  },
  bv = (s) => Li.get(s) ?? null,
  MS = (s, S) => {
    const b = (S * 2) / s.pngWidth;
    return s.vertices.map((y) => ({
      x: (y.x - s.pngWidth / 2 - s.centroidOffset.x) * b,
      y: (y.y - s.pngHeight / 2 - s.centroidOffset.y) * b,
    }));
  };
Te.Common.setDecomp(Nx);
const wh = new Map(),
  oo = (s) => {
    const S = wh.get(s);
    if (S) return S;
    const b = `/ochimono-game/${s}`.replace(/\/{2,}/g, '/');
    return (wh.set(s, b), b);
  },
  ar = (s, S) => {
    const b = (S.radius * 2) / jx,
      y = oo(S.svgPath),
      c = bv(y),
      a = c ? -c.centroidOffset.x * b : 0,
      f = c ? -c.centroidOffset.y * b : 0;
    s.plugin.itemRender = { textureUrl: y, scale: b, contourOffsetX: a, contourOffsetY: f };
  },
  Zc = (s, S, b, y) => {
    const c = oo(s.svgPath),
      a = bv(c);
    if (a) {
      const f = MS(a, s.radius),
        m = aS(s, S, b, y, f);
      if (m) return m;
    }
    return lS(s, S, b, y);
  },
  zh = new Set(),
  Nh = async (s, S) => {
    for (let b = 1; b <= Al; b += 1) {
      const y = Jn(b, 1, s),
        c = oo(y.svgPath);
      if (!zh.has(c)) {
        zh.add(c);
        try {
          const f = await (await fetch(c)).blob(),
            m = await createImageBitmap(f);
          (S && (S.textures[c] = m), CS(c, m));
        } catch {
          const a = new Image();
          a.src = c;
        }
      }
    }
  },
  TS = ({ fieldWidth: s, fieldHeight: S }) => {
    const b = H.useRef(null),
      y = H.useRef(null),
      c = H.useRef(null),
      a = H.useRef(null),
      f = H.useRef(null),
      [m, o] = H.useState('idle'),
      [v, d] = H.useState(null),
      [h, g] = H.useState(null),
      r = H.useRef(null),
      x = H.useRef(null),
      p = H.useCallback((re) => {
        ((r.current = re), d(re));
      }, []),
      C = H.useCallback((re) => {
        ((x.current = re), g(re));
      }, []),
      R = H.useRef(!0),
      w = H.useRef(0),
      U = H.useRef('idle'),
      G = H.useRef(null),
      M = H.useRef(s),
      O = H.useRef(S),
      [D, _] = H.useState(() => $x()),
      L = H.useRef(D);
    L.current = D;
    const B = Wx(),
      Y = nS(),
      V = H.useRef(B.add);
    V.current = B.add;
    const F = H.useRef(Y.play);
    F.current = Y.play;
    const ie = H.useRef(B.finalize);
    ie.current = B.finalize;
    const [le, A] = H.useState(0),
      N = H.useRef(0),
      q = H.useCallback((re) => {
        ((N.current = re), A(re));
      }, []),
      $ = H.useCallback(
        (re) => {
          const xe = Math.min(ft.gaugeMax, N.current + re);
          xe !== N.current && q(xe);
        },
        [q]
      ),
      ae = H.useRef($);
    ae.current = $;
    const [z, Z] = H.useState(!1),
      [P, ue] = H.useState(!1),
      se = H.useRef(!1),
      [ce, ve] = H.useState(!1),
      Se = H.useRef(!1),
      Ce = H.useRef(null),
      Be = H.useRef(null),
      Ye = H.useRef(null),
      Ve = H.useRef(null),
      st = H.useRef(new Set()),
      Fe = H.useCallback((re) => {
        ((re.collisionFilter.category = $n.magnetTarget),
          (re.collisionFilter.mask = Xx),
          st.current.add(re));
      }, []),
      fe = H.useCallback(() => {
        for (const re of st.current)
          ((re.collisionFilter.category = $n.item), (re.collisionFilter.mask = yv));
        st.current.clear();
      }, []),
      Yt = H.useCallback(() => {
        (fe(),
          (Ye.current = null),
          (Ve.current = null),
          Ce.current === 'magnet' && (Ce.current = null));
      }, [fe]),
      pe = H.useRef(Yt);
    pe.current = Yt;
    const Ae = H.useRef(null),
      [Ot, Vt] = H.useState(null),
      bt = H.useRef(null),
      $e = H.useRef(new Set()),
      Fl = H.useRef(1),
      it = H.useCallback(() => {
        let re;
        return ((re = Math.floor(Math.random() * Xc) + 1), Jn(re, M.current, L.current));
      }, []);
    H.useEffect(() => {
      const re = b.current;
      if (!re) return;
      const xe = M.current,
        ze = O.current,
        Ee = Te.Engine.create({ gravity: { x: 0, y: Fn.gravityY } }),
        me = Te.Render.create({
          element: re,
          engine: Ee,
          options: {
            width: xe,
            height: ze,
            wireframes: !1,
            background: 'transparent',
            pixelRatio: Math.min(1.5, window.devicePixelRatio || 1),
          },
        }),
        { ground: ge, leftWall: Ue, rightWall: He, ceiling: et } = iS(xe, ze);
      ([ge, Ue, He, et].forEach((mt) => {
        mt.render.visible = !1;
      }),
        Te.World.add(Ee.world, [ge, Ue, He, et]));
      const Qe = $e.current,
        dt = () => {
          const mt = me.context,
            pt = me.textures;
          for (const We of Qe) {
            const tt = We.plugin.itemRender;
            if (!tt) continue;
            const zt = pt[tt.textureUrl];
            if (!zt) continue;
            const tl = zt.width,
              xr = zt.height,
              Xi = tl * tt.scale,
              Ga = xr * tt.scale;
            (mt.save(),
              mt.translate(We.position.x, We.position.y),
              mt.rotate(We.angle),
              mt.translate(tt.contourOffsetX, tt.contourOffsetY),
              mt.drawImage(zt, -Xi / 2, -Ga / 2, Xi, Ga),
              mt.restore());
          }
        };
      (Te.Events.on(me, 'afterRender', dt), Te.Render.run(me));
      const lt = Te.Runner.create();
      (Te.Runner.run(lt, Ee), (y.current = Ee), (c.current = me), (a.current = lt));
      for (const mt of ro) Nh(mt.id, me);
      const At = () => {
        document.hidden
          ? (Te.Runner.stop(lt), Te.Render.stop(me))
          : (Te.Render.run(me), Te.Runner.run(lt, Ee));
      };
      return (
        document.addEventListener('visibilitychange', At),
        () => {
          (document.removeEventListener('visibilitychange', At),
            Te.Events.off(me, 'afterRender', dt),
            Te.Runner.stop(lt),
            Te.Render.stop(me),
            Te.World.clear(Ee.world, !1),
            Te.Engine.clear(Ee),
            me.canvas.parentNode && me.canvas.parentNode.removeChild(me.canvas),
            (me.textures = {}),
            (y.current = null),
            (c.current = null),
            (a.current = null),
            Qe.clear());
        }
      );
    }, []);
    const _l = H.useCallback((re, xe) => {
      var dt;
      const ze = y.current;
      if (!ze) return;
      const Ee = kn(re),
        me = kn(xe);
      if (!Ee || !me || Ee.consumed || me.consumed || Ee.level !== me.level) return;
      ((Ee.consumed = !0), (me.consumed = !0));
      const ge = Ee.level + 1,
        Ue = uS(re, xe);
      (Te.World.remove(ze.world, [re, xe]), $e.current.delete(re), $e.current.delete(xe));
      let He = 0,
        et = !1,
        Qe = fx(ge);
      if (ge > Al)
        ((He = sS()), (et = !0), (Qe += ft.bonusOnSpecialElimination), F.current('special'));
      else {
        const lt = Jn(ge, M.current, L.current),
          At = Zc(lt, Ue.x, Ue.y, performance.now());
        (ar(At, lt),
          Te.World.add(ze.world, At),
          $e.current.add(At),
          (He = rS(ge)),
          (et = ge === Al),
          et && (Qe += ft.bonusOnLevel10Created),
          F.current(et ? 'special' : 'merge'));
      }
      (V.current(He),
        ae.current(Qe),
        (dt = f.current) == null || dt.add({ x: Ue.x, y: Ue.y, score: He, isSpecial: et }));
    }, []);
    (H.useEffect(() => {
      const re = y.current;
      if (!re) return;
      const xe = (ze) => {
        for (const Ee of ze.pairs) _l(Ee.bodyA, Ee.bodyB);
      };
      return (
        Te.Events.on(re, 'collisionStart', xe),
        () => {
          Te.Events.off(re, 'collisionStart', xe);
        }
      );
    }, [_l]),
      H.useEffect(() => {
        const re = y.current;
        if (!re) return;
        const xe = Fn.gameOverLineOffset;
        let ze = 0;
        const Ee = () => {
            ((Ae.current = null), bt.current !== null && ((bt.current = null), Vt(null)));
          },
          me = () => {
            if (Ye.current !== null)
              if (performance.now() >= Ye.current) pe.current();
              else {
                const lt = [];
                for (const At of st.current) {
                  const mt = kn(At);
                  mt && !mt.consumed && lt.push(At);
                }
                if (lt.length >= 2) {
                  let At = 0,
                    mt = 0;
                  for (const pt of lt) ((At += pt.position.x), (mt += pt.position.y));
                  ((At /= lt.length), (mt /= lt.length));
                  for (const pt of lt) {
                    const We = At - pt.position.x,
                      tt = mt - pt.position.y,
                      zt = Math.hypot(We, tt);
                    if (zt < 1) continue;
                    const tl = ft.magnet.forceMagnitude * pt.mass;
                    Te.Body.applyForce(pt, pt.position, { x: (We / zt) * tl, y: (tt / zt) * tl });
                  }
                } else pe.current();
              }
            if (U.current !== 'playing') return;
            if (Se.current) {
              Ae.current !== null &&
                ((Ae.current = null), bt.current !== null && ((bt.current = null), Vt(null)));
              return;
            }
            if (((ze = (ze + 1) % 6), ze !== 0)) return;
            const ge = performance.now();
            let Ue = !1;
            for (const dt of $e.current) {
              const lt = kn(dt);
              if (
                !(!lt || lt.consumed) &&
                !(ge - lt.droppedAt < Fn.gameOverGracePeriodMs) &&
                !(Math.abs(dt.velocity.y) > Fn.restingVelocityThreshold) &&
                dt.bounds.min.y < xe
              ) {
                Ue = !0;
                break;
              }
            }
            if (!Ue) {
              Ee();
              return;
            }
            Ae.current === null && (Ae.current = ge);
            const He = ge - Ae.current,
              et = Fn.gameOverDangerLimitMs;
            if (He >= et) {
              (Ee(), (U.current = 'gameover'), o('gameover'));
              const dt = ie.current();
              F.current(dt.isNewRecord ? 'highscore' : 'gameover');
              return;
            }
            const Qe = Math.max(1, Math.ceil((et - He) / 1e3));
            Qe !== bt.current && ((bt.current = Qe), Vt(Qe));
          };
        return (
          Te.Events.on(re, 'afterUpdate', me),
          () => {
            Te.Events.off(re, 'afterUpdate', me);
          }
        );
      }, []),
      H.useEffect(() => {
        if (y.current) {
          Nh(D, c.current);
          for (const Ee of $e.current) {
            const me = kn(Ee);
            if (!me || me.consumed) continue;
            const ge = Jn(me.level, M.current, D);
            ar(Ee, ge);
          }
        }
        const xe = r.current ? Jn(r.current.level, M.current, D) : null,
          ze = x.current ? Jn(x.current.level, M.current, D) : null;
        (p(xe), C(ze));
      }, [D, p, C]));
    const Mn = H.useCallback((re) => {
        (_(re), Dh(re));
      }, []),
      qt = H.useCallback((re) => {
        ((se.current = re), ue(re));
      }, []),
      Wt = H.useCallback(
        (re) => {
          q(Math.max(0, N.current - re));
        },
        [q]
      ),
      Tn = H.useCallback(() => {
        if (!y.current) return;
        Ce.current = 'shake';
        const { impulseMin: xe, impulseMax: ze, upwardBias: Ee } = ft.shake;
        for (const me of $e.current) {
          const ge = kn(me);
          if (!ge || ge.consumed) continue;
          const Ue = Math.random() * Math.PI * 2,
            He = xe + Math.random() * (ze - xe),
            et = Math.cos(Ue) * He * me.mass,
            Qe = (Math.sin(Ue) * He - Ee) * me.mass;
          Te.Body.applyForce(me, me.position, { x: et, y: Qe });
        }
        (F.current('special'), (Ce.current = null));
      }, []),
      yn = H.useCallback(() => {
        const re = y.current;
        if (!re || Be.current !== null) return;
        ((Ce.current = 'gravityFlip'), (Se.current = !0));
        const xe = Fn.gravityY;
        re.gravity.y = xe * ft.gravityFlip.multiplier;
        const ze = new Map(),
          Ee = new Map();
        for (const me of $e.current)
          (ze.set(me, me.frictionAir),
            Ee.set(me, me.restitution),
            (me.frictionAir = ft.gravityFlip.frictionAir),
            Te.Body.setVelocity(me, { x: me.velocity.x, y: ft.gravityFlip.liftKickVelocity }));
        (ve(!0),
          F.current('special'),
          (Be.current = window.setTimeout(() => {
            const me = y.current;
            me && (me.gravity.y = xe * ft.gravityFlip.slamGravityMultiplier);
            for (const ge of $e.current)
              ((ge.frictionAir = ft.gravityFlip.slamFrictionAir),
                Ee.has(ge) || Ee.set(ge, ge.restitution),
                (ge.restitution = ft.gravityFlip.slamRestitution),
                Te.Body.setVelocity(ge, { x: ge.velocity.x, y: ft.gravityFlip.slamKickVelocity }));
            (ve(!1),
              F.current('special'),
              (Be.current = window.setTimeout(() => {
                const ge = y.current;
                ge && (ge.gravity.y = xe);
                for (const Ue of $e.current)
                  ((Ue.frictionAir = ze.get(Ue) ?? 0.01), (Ue.restitution = Ee.get(Ue) ?? 0.4));
                ((Be.current = null),
                  (Se.current = !1),
                  Ce.current === 'gravityFlip' && (Ce.current = null));
              }, ft.gravityFlip.slamDurationMs)));
          }, ft.gravityFlip.durationMs)));
      }, []),
      qi = H.useCallback(() => {
        ((Ce.current = 'magnet'), qt(!0));
      }, [qt]),
      yr = H.useCallback(() => {
        se.current && (qt(!1), (Ce.current = null));
      }, [qt]),
      Ol = H.useCallback(
        (re, xe) => {
          if (!se.current) return;
          const ze = Array.from($e.current),
            Ee = Te.Query.point(ze, { x: re, y: xe });
          if (Ee.length === 0) return;
          const me = Ee[0],
            ge = kn(me);
          if (!ge) return;
          const Ue = ze.filter((et) => {
            if (et === me) return !1;
            const Qe = kn(et);
            return !!Qe && !Qe.consumed && Qe.level === ge.level;
          });
          if (Ue.length === 0) return;
          const He = Ue[Math.floor(Math.random() * Ue.length)];
          (Fe(me),
            Fe(He),
            (Ve.current = ge.level),
            (Ye.current = performance.now() + ft.magnet.durationMs),
            qt(!1),
            F.current('special'),
            Wt(Ui('magnet')));
        },
        [Wt, qt, Fe]
      ),
      Dt = H.useCallback(() => {
        N.current < ft.segmentMax || (U.current === 'playing' && Z(!0));
      }, []),
      pn = H.useCallback(() => {
        Z(!1);
      }, []),
      wt = H.useCallback(
        (re) => {
          const xe = Ui(re);
          N.current < xe ||
            (Z(!1),
            re === 'shake'
              ? (Tn(), Wt(xe))
              : re === 'gravityFlip'
                ? (yn(), Wt(xe))
                : re === 'magnet' && qi());
        },
        [Tn, yn, qi, Wt]
      ),
      el = H.useCallback(() => {
        Be.current !== null && (window.clearTimeout(Be.current), (Be.current = null));
        const re = y.current;
        (re && (re.gravity.y = Fn.gravityY),
          ve(!1),
          (Se.current = !1),
          fe(),
          (Ye.current = null),
          (Ve.current = null),
          (Ce.current = null),
          Z(!1),
          qt(!1),
          q(0));
      }, [qt, q, fe]),
      pr = H.useCallback(
        (re) => {
          const xe = y.current;
          if (!xe || U.current !== 'playing' || !R.current) return;
          const ze = r.current;
          if (!ze) return;
          const Ee = performance.now();
          if (Ee - w.current < fn.dropCooldownMs) return;
          const me = Math.max(0, Math.min(1, re)),
            ge = ze.radius,
            Ue = ge,
            He = M.current - ge,
            et = Ue + me * (He - Ue),
            Qe = ze.radius + 4,
            dt = Zc(ze, et, Qe, Ee);
          (ar(dt, ze),
            Te.World.add(xe.world, dt),
            $e.current.add(dt),
            F.current('drop'),
            (R.current = !1),
            (w.current = Ee),
            G.current !== null && window.clearTimeout(G.current),
            (G.current = window.setTimeout(() => {
              ((G.current = null),
                U.current === 'playing' && (p(x.current), C(it()), (R.current = !0)));
            }, fn.dropCooldownMs)));
        },
        [it, p, C]
      ),
      ja = H.useCallback(() => {
        var re;
        (B.reset(),
          (re = f.current) == null || re.clear(),
          el(),
          (Ae.current = null),
          (bt.current = null),
          Vt(null),
          (Fl.current = 1),
          p(it()),
          C(it()),
          (R.current = !0),
          (w.current = 0),
          (U.current = 'playing'),
          o('playing'));
      }, [B, it, el, p, C]),
      $l = H.useCallback(() => {
        const re = y.current;
        if (re) {
          for (const xe of $e.current) Te.World.remove(re.world, xe);
          $e.current.clear();
        }
        (G.current !== null && (window.clearTimeout(G.current), (G.current = null)), ja());
      }, [ja]),
      Wl = H.useCallback(() => {
        var ze, Ee, me;
        if (U.current !== 'playing') return;
        const re = [];
        for (const ge of $e.current) {
          const Ue = kn(ge);
          !Ue ||
            Ue.consumed ||
            re.push({
              level: Ue.level,
              x: ge.position.x,
              y: ge.position.y,
              vx: ge.velocity.x,
              vy: ge.velocity.y,
              angle: ge.angle,
              angularVelocity: ge.angularVelocity,
            });
        }
        dS({
          score: B.score,
          themeId: L.current,
          currentItemLevel: ((ze = r.current) == null ? void 0 : ze.level) ?? 1,
          nextItemLevel: ((Ee = x.current) == null ? void 0 : Ee.level) ?? 1,
          skillGauge: N.current,
          bodies: re,
        });
        const xe = y.current;
        if (xe) {
          for (const ge of $e.current) Te.World.remove(xe.world, ge);
          $e.current.clear();
        }
        (G.current !== null && (window.clearTimeout(G.current), (G.current = null)),
          (me = f.current) == null || me.clear(),
          el(),
          (Ae.current = null),
          (bt.current = null),
          Vt(null),
          p(null),
          C(null),
          B.reset(),
          (R.current = !0),
          (w.current = 0),
          (U.current = 'idle'),
          o('idle'));
      }, [el, B, p, C]),
      Il = H.useCallback(
        (re) => {
          var Ue;
          const xe = y.current;
          if (!xe) return;
          for (const He of $e.current) Te.World.remove(xe.world, He);
          ($e.current.clear(),
            G.current !== null && (window.clearTimeout(G.current), (G.current = null)),
            (Ue = f.current) == null || Ue.clear(),
            el(),
            (Ae.current = null),
            (bt.current = null),
            Vt(null),
            re.themeId !== L.current && (_(re.themeId), (L.current = re.themeId), Dh(re.themeId)));
          const ze = performance.now();
          for (const He of re.bodies) {
            if (He.level < 1 || He.level > Al) continue;
            const et = Jn(He.level, M.current, re.themeId),
              Qe = Zc(et, He.x, He.y, ze);
            (Te.Body.setVelocity(Qe, { x: He.vx, y: He.vy }),
              Te.Body.setAngle(Qe, He.angle),
              Te.Body.setAngularVelocity(Qe, He.angularVelocity),
              ar(Qe, et),
              Te.World.add(xe.world, Qe),
              $e.current.add(Qe));
          }
          const Ee =
              re.currentItemLevel >= 1 && re.currentItemLevel <= Xc ? re.currentItemLevel : 1,
            me = re.nextItemLevel >= 1 && re.nextItemLevel <= Xc ? re.nextItemLevel : 1;
          (p(Jn(Ee, M.current, re.themeId)), C(Jn(me, M.current, re.themeId)));
          const ge = Math.max(0, Math.min(ft.gaugeMax, re.skillGauge));
          (q(ge),
            B.reset(),
            B.setRaw(Math.max(0, re.score)),
            (R.current = !0),
            (w.current = 0),
            (U.current = 'playing'),
            o('playing'));
        },
        [el, B, p, C, q]
      ),
      Rn = Fn.gameOverLineOffset;
    return {
      status: m,
      score: B.score,
      bestScore: B.bestScore,
      isNewRecord: B.isNewRecord,
      currentItem: v,
      nextItem: h,
      isSoundOn: Y.isSoundOn,
      themeId: D,
      mergeEffectRef: f,
      canvasContainerRef: b,
      drop: pr,
      start: ja,
      restart: $l,
      toggleSound: Y.toggle,
      setThemeId: Mn,
      fieldWidth: s,
      fieldHeight: S,
      gameOverLineY: Rn,
      skillGauge: le,
      skillGaugeMax: ft.gaugeMax,
      skillSegmentMax: ft.segmentMax,
      skillSegmentCount: ft.segmentCount,
      canOpenSkillMenu: le >= ft.segmentMax,
      canUseSkill: {
        shake: le >= Ui('shake'),
        gravityFlip: le >= Ui('gravityFlip'),
        magnet: le >= Ui('magnet'),
      },
      isSkillMenuOpen: z,
      openSkillMenu: Dt,
      closeSkillMenu: pn,
      selectSkill: wt,
      isMagnetSelecting: P,
      cancelMagnetSelecting: yr,
      selectMagnetTarget: Ol,
      isGravityFlipped: ce,
      gameOverCountdown: Ot,
      suspend: Wl,
      resume: Il,
      loadSuspended: fS,
      clearSuspended: mS,
    };
  },
  RS = ({ size: s }) => {
    const S = TS({ fieldWidth: s.width, fieldHeight: s.height }),
      [b, y] = H.useState(!1),
      c = H.useCallback(() => y(!0), []),
      a = H.useCallback(() => y(!1), []),
      [f, m] = H.useState(null),
      o = H.useCallback(() => {
        const h = S.loadSuspended();
        h ? m(h) : S.start();
      }, [S]),
      v = H.useCallback(() => {
        (f && S.resume(f), S.clearSuspended(), m(null));
      }, [S, f]),
      d = H.useCallback(() => {
        (S.clearSuspended(), m(null), S.start());
      }, [S]);
    return I.jsxs(I.Fragment, {
      children: [
        I.jsx(Ax, {
          score: S.score,
          bestScore: S.bestScore,
          nextItem: S.nextItem,
          onOpenSettings: c,
        }),
        I.jsx('main', {
          className: Jl.main,
          children: I.jsxs('div', {
            className: Jl.field_wrapper,
            style: { width: `${s.width}px`, height: `${s.height}px` },
            children: [
              I.jsx($p, {
                canvasContainerRef: S.canvasContainerRef,
                fieldWidth: s.width,
                fieldHeight: s.height,
                gameOverLineY: S.gameOverLineY,
                currentItem: S.currentItem,
                mergeEffectRef: S.mergeEffectRef,
                canInteract: S.status === 'playing',
                onDrop: S.drop,
                isMagnetSelecting: S.isMagnetSelecting,
                onMagnetSelect: S.selectMagnetTarget,
              }),
              I.jsx(uv, { effect: S.isGravityFlipped ? 'gravityFlip' : null }),
              I.jsx(av, { active: S.isMagnetSelecting, onCancel: S.cancelMagnetSelecting }),
              I.jsx(lv, { seconds: S.status === 'playing' ? S.gameOverCountdown : null }),
              S.status === 'playing'
                ? I.jsx('div', {
                    className: Jl.skill_button_wrapper,
                    children: I.jsx(ov, {
                      gauge: S.skillGauge,
                      segmentMax: S.skillSegmentMax,
                      segmentCount: S.skillSegmentCount,
                      canOpen: S.canOpenSkillMenu,
                      onClick: S.openSkillMenu,
                    }),
                  })
                : null,
              S.status === 'idle' ? I.jsx(_1, { onStart: o }) : null,
              S.status === 'gameover'
                ? I.jsx(r1, {
                    score: S.score,
                    bestScore: S.bestScore,
                    isNewRecord: S.isNewRecord,
                    onRestart: S.restart,
                  })
                : null,
            ],
          }),
        }),
        I.jsx(dv, {
          open: S.isSkillMenuOpen,
          onSelect: S.selectSkill,
          onClose: S.closeSkillMenu,
          canUse: S.canUseSkill,
        }),
        I.jsx(cv, {
          open: b,
          onClose: a,
          themeId: S.themeId,
          onChangeTheme: S.setThemeId,
          isSoundOn: S.isSoundOn,
          onToggleSound: S.toggleSound,
          canSuspend: S.status === 'playing',
          onSuspend: S.suspend,
        }),
        I.jsx(iv, { open: f !== null, onYes: v, onNo: d }),
      ],
    });
  },
  AS = () => {
    const s = H.useRef(null),
      [S, b] = H.useState(null);
    return (
      H.useLayoutEffect(() => {
        const y = s.current;
        if (!y) return;
        const c = y.getBoundingClientRect();
        b({ width: Math.floor(c.width), height: Math.floor(c.height) });
      }, []),
      S === null
        ? I.jsxs('div', {
            className: Jl.layout,
            children: [
              I.jsx('div', { className: Jl.top_bar_placeholder, 'aria-hidden': 'true' }),
              I.jsx('main', { ref: s, className: Jl.main }),
            ],
          })
        : I.jsx('div', { className: Jl.layout, children: I.jsx(RS, { size: S }) })
    );
  },
  _S = () => I.jsx('div', { className: wp.index, children: I.jsx(AS, {}) }),
  OS = () => I.jsx('div', { children: I.jsx('h1', { children: 'Not Found' }) });
function DS() {
  return I.jsxs(I.Fragment, {
    children: [
      I.jsxs(Vy, {
        children: [
          I.jsx(kc, { path: '/', element: I.jsx(_S, {}) }),
          I.jsx(kc, { path: '*', element: I.jsx(OS, {}) }),
        ],
      }),
      I.jsx(Op, {}),
    ],
  });
}
const Cv = document.getElementById('root');
if (!Cv) throw new Error('Failed to find #root element');
Xg.createRoot(Cv).render(I.jsx(fp, { basename: '/ochimono-game', children: I.jsx(DS, {}) }));
