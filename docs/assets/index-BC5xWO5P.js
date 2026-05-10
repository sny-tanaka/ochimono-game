function Bg(s, S) {
  for (var b = 0; b < S.length; b++) {
    const y = S[b];
    if (typeof y != 'string' && !Array.isArray(y)) {
      for (const o in y)
        if (o !== 'default' && !(o in s)) {
          const l = Object.getOwnPropertyDescriptor(y, o);
          l && Object.defineProperty(s, o, l.get ? l : { enumerable: !0, get: () => y[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const S = document.createElement('link').relList;
  if (S && S.supports && S.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) y(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === 'childList')
        for (const c of l.addedNodes) c.tagName === 'LINK' && c.rel === 'modulepreload' && y(c);
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
  function y(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = b(o);
    fetch(o.href, l);
  }
})();
var ah =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function Uh(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, 'default') ? s.default : s;
}
var Oo = { exports: {} },
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
function Ug() {
  if (lh) return Oi;
  lh = 1;
  var s = Symbol.for('react.transitional.element'),
    S = Symbol.for('react.fragment');
  function b(y, o, l) {
    var c = null;
    if ((l !== void 0 && (c = '' + l), o.key !== void 0 && (c = '' + o.key), 'key' in o)) {
      l = {};
      for (var d in o) d !== 'key' && (l[d] = o[d]);
    } else l = o;
    return ((o = l.ref), { $$typeof: s, type: y, key: c, ref: o !== void 0 ? o : null, props: l });
  }
  return ((Oi.Fragment = S), (Oi.jsx = b), (Oi.jsxs = b), Oi);
}
var ih;
function Hg() {
  return (ih || ((ih = 1), (Oo.exports = Ug())), Oo.exports);
}
var I = Hg(),
  Do = { exports: {} },
  Di = {},
  wo = { exports: {} },
  zo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uh;
function Lg() {
  return (
    uh ||
      ((uh = 1),
      (function (s) {
        function S(A, N) {
          var q = A.length;
          A.push(N);
          e: for (; 0 < q; ) {
            var $ = (q - 1) >>> 1,
              le = A[$];
            if (0 < o(le, N)) ((A[$] = N), (A[q] = le), (q = $));
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
            e: for (var $ = 0, le = A.length, z = le >>> 1; $ < z; ) {
              var Z = 2 * ($ + 1) - 1,
                P = A[Z],
                ue = Z + 1,
                re = A[ue];
              if (0 > o(P, q))
                ue < le && 0 > o(re, P)
                  ? ((A[$] = re), (A[ue] = q), ($ = ue))
                  : ((A[$] = P), (A[Z] = q), ($ = Z));
              else if (ue < le && 0 > o(re, q)) ((A[$] = re), (A[ue] = q), ($ = ue));
              else break e;
            }
          }
          return N;
        }
        function o(A, N) {
          var q = A.sortIndex - N.sortIndex;
          return q !== 0 ? q : A.id - N.id;
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
          v = [],
          m = 1,
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
            else if (N.startTime <= A) (y(v), (N.sortIndex = N.expirationTime), S(f, N));
            else break;
            N = b(v);
          }
        }
        function M(A) {
          if (((p = !1), G(A), !x))
            if (b(f) !== null) ((x = !0), O || ((O = !0), V()));
            else {
              var N = b(v);
              N !== null && ae(M, N.startTime - A);
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
                    for (G(A), h = b(f); h !== null && !(h.expirationTime > A && B()); ) {
                      var $ = h.callback;
                      if (typeof $ == 'function') {
                        ((h.callback = null), (g = h.priorityLevel));
                        var le = $(h.expirationTime <= A);
                        if (((A = s.unstable_now()), typeof le == 'function')) {
                          ((h.callback = le), G(A), (N = !0));
                          break t;
                        }
                        (h === b(f) && y(f), G(A));
                      } else y(f);
                      h = b(f);
                    }
                    if (h !== null) N = !0;
                    else {
                      var z = b(v);
                      (z !== null && ae(M, z.startTime - A), (N = !1));
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
        function ae(A, N) {
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
                callback: N,
                priorityLevel: A,
                startTime: q,
                expirationTime: le,
                sortIndex: -1,
              }),
              q > $
                ? ((A.sortIndex = q),
                  S(v, A),
                  b(f) === null && A === b(v) && (p ? (w(D), (D = -1)) : (p = !0), ae(M, q - $)))
                : ((A.sortIndex = le), S(f, A), x || r || ((x = !0), O || ((O = !0), V()))),
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
      })(zo)),
    zo
  );
}
var rh;
function jg() {
  return (rh || ((rh = 1), (wo.exports = Lg())), wo.exports);
}
var No = { exports: {} },
  Ee = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sh;
function Gg() {
  if (sh) return Ee;
  sh = 1;
  var s = Symbol.for('react.transitional.element'),
    S = Symbol.for('react.portal'),
    b = Symbol.for('react.fragment'),
    y = Symbol.for('react.strict_mode'),
    o = Symbol.for('react.profiler'),
    l = Symbol.for('react.consumer'),
    c = Symbol.for('react.context'),
    d = Symbol.for('react.forward_ref'),
    f = Symbol.for('react.suspense'),
    v = Symbol.for('react.memo'),
    m = Symbol.for('react.lazy'),
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
  function ae(z) {
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
  function A(z, Z, P, ue, re) {
    var oe = typeof z;
    (oe === 'undefined' || oe === 'boolean') && (z = null);
    var ve = !1;
    if (z === null) ve = !0;
    else
      switch (oe) {
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
            case m:
              return ((ve = z._init), A(ve(z._payload), Z, P, ue, re));
          }
      }
    if (ve)
      return (
        (re = re(z)),
        (ve = ue === '' ? '.' + ie(z, 0) : ue),
        M(re)
          ? ((P = ''),
            ve != null && (P = ve.replace(F, '$&/') + '/'),
            A(re, Z, P, '', function (Be) {
              return Be;
            }))
          : re != null &&
            (Y(re) &&
              (re = B(
                re,
                P +
                  (re.key == null || (z && z.key === re.key)
                    ? ''
                    : ('' + re.key).replace(F, '$&/') + '/') +
                  ve
              )),
            Z.push(re)),
        1
      );
    ve = 0;
    var Se = ue === '' ? '.' : ue + ':';
    if (M(z))
      for (var Ce = 0; Ce < z.length; Ce++)
        ((ue = z[Ce]), (oe = Se + ie(ue, Ce)), (ve += A(ue, Z, P, oe, re)));
    else if (((Ce = r(z)), typeof Ce == 'function'))
      for (z = Ce.call(z), Ce = 0; !(ue = z.next()).done; )
        ((ue = ue.value), (oe = Se + ie(ue, Ce++)), (ve += A(ue, Z, P, oe, re)));
    else if (oe === 'object') {
      if (typeof z.then == 'function') return A(ae(z), Z, P, ue, re);
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
      re = 0;
    return (
      A(z, ue, '', '', function (oe) {
        return Z.call(P, oe, re++);
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
    le = {
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
    (Ee.Activity = h),
    (Ee.Children = le),
    (Ee.Component = R),
    (Ee.Fragment = b),
    (Ee.Profiler = o),
    (Ee.PureComponent = U),
    (Ee.StrictMode = y),
    (Ee.Suspense = f),
    (Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D),
    (Ee.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (z) {
        return D.H.useMemoCache(z);
      },
    }),
    (Ee.cache = function (z) {
      return function () {
        return z.apply(null, arguments);
      };
    }),
    (Ee.cacheSignal = function () {
      return null;
    }),
    (Ee.cloneElement = function (z, Z, P) {
      if (z == null) throw Error('The argument must be a React element, but you passed ' + z + '.');
      var ue = p({}, z.props),
        re = z.key;
      if (Z != null)
        for (oe in (Z.key !== void 0 && (re = '' + Z.key), Z))
          !_.call(Z, oe) ||
            oe === 'key' ||
            oe === '__self' ||
            oe === '__source' ||
            (oe === 'ref' && Z.ref === void 0) ||
            (ue[oe] = Z[oe]);
      var oe = arguments.length - 2;
      if (oe === 1) ue.children = P;
      else if (1 < oe) {
        for (var ve = Array(oe), Se = 0; Se < oe; Se++) ve[Se] = arguments[Se + 2];
        ue.children = ve;
      }
      return L(z.type, re, ue);
    }),
    (Ee.createContext = function (z) {
      return (
        (z = {
          $$typeof: c,
          _currentValue: z,
          _currentValue2: z,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (z.Provider = z),
        (z.Consumer = { $$typeof: l, _context: z }),
        z
      );
    }),
    (Ee.createElement = function (z, Z, P) {
      var ue,
        re = {},
        oe = null;
      if (Z != null)
        for (ue in (Z.key !== void 0 && (oe = '' + Z.key), Z))
          _.call(Z, ue) && ue !== 'key' && ue !== '__self' && ue !== '__source' && (re[ue] = Z[ue]);
      var ve = arguments.length - 2;
      if (ve === 1) re.children = P;
      else if (1 < ve) {
        for (var Se = Array(ve), Ce = 0; Ce < ve; Ce++) Se[Ce] = arguments[Ce + 2];
        re.children = Se;
      }
      if (z && z.defaultProps)
        for (ue in ((ve = z.defaultProps), ve)) re[ue] === void 0 && (re[ue] = ve[ue]);
      return L(z, oe, re);
    }),
    (Ee.createRef = function () {
      return { current: null };
    }),
    (Ee.forwardRef = function (z) {
      return { $$typeof: d, render: z };
    }),
    (Ee.isValidElement = Y),
    (Ee.lazy = function (z) {
      return { $$typeof: m, _payload: { _status: -1, _result: z }, _init: q };
    }),
    (Ee.memo = function (z, Z) {
      return { $$typeof: v, type: z, compare: Z === void 0 ? null : Z };
    }),
    (Ee.startTransition = function (z) {
      var Z = D.T,
        P = {};
      D.T = P;
      try {
        var ue = z(),
          re = D.S;
        (re !== null && re(P, ue),
          typeof ue == 'object' && ue !== null && typeof ue.then == 'function' && ue.then(O, $));
      } catch (oe) {
        $(oe);
      } finally {
        (Z !== null && P.types !== null && (Z.types = P.types), (D.T = Z));
      }
    }),
    (Ee.unstable_useCacheRefresh = function () {
      return D.H.useCacheRefresh();
    }),
    (Ee.use = function (z) {
      return D.H.use(z);
    }),
    (Ee.useActionState = function (z, Z, P) {
      return D.H.useActionState(z, Z, P);
    }),
    (Ee.useCallback = function (z, Z) {
      return D.H.useCallback(z, Z);
    }),
    (Ee.useContext = function (z) {
      return D.H.useContext(z);
    }),
    (Ee.useDebugValue = function () {}),
    (Ee.useDeferredValue = function (z, Z) {
      return D.H.useDeferredValue(z, Z);
    }),
    (Ee.useEffect = function (z, Z) {
      return D.H.useEffect(z, Z);
    }),
    (Ee.useEffectEvent = function (z) {
      return D.H.useEffectEvent(z);
    }),
    (Ee.useId = function () {
      return D.H.useId();
    }),
    (Ee.useImperativeHandle = function (z, Z, P) {
      return D.H.useImperativeHandle(z, Z, P);
    }),
    (Ee.useInsertionEffect = function (z, Z) {
      return D.H.useInsertionEffect(z, Z);
    }),
    (Ee.useLayoutEffect = function (z, Z) {
      return D.H.useLayoutEffect(z, Z);
    }),
    (Ee.useMemo = function (z, Z) {
      return D.H.useMemo(z, Z);
    }),
    (Ee.useOptimistic = function (z, Z) {
      return D.H.useOptimistic(z, Z);
    }),
    (Ee.useReducer = function (z, Z, P) {
      return D.H.useReducer(z, Z, P);
    }),
    (Ee.useRef = function (z) {
      return D.H.useRef(z);
    }),
    (Ee.useState = function (z) {
      return D.H.useState(z);
    }),
    (Ee.useSyncExternalStore = function (z, Z, P) {
      return D.H.useSyncExternalStore(z, Z, P);
    }),
    (Ee.useTransition = function () {
      return D.H.useTransition();
    }),
    (Ee.version = '19.2.5'),
    Ee
  );
}
var oh;
function ec() {
  return (oh || ((oh = 1), (No.exports = Gg())), No.exports);
}
var Bo = { exports: {} },
  At = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ch;
function Yg() {
  if (ch) return At;
  ch = 1;
  var s = ec();
  function S(f) {
    var v = 'https://react.dev/errors/' + f;
    if (1 < arguments.length) {
      v += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++) v += '&args[]=' + encodeURIComponent(arguments[m]);
    }
    return (
      'Minified React error #' +
      f +
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
    o = Symbol.for('react.portal');
  function l(f, v, m) {
    var h = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: h == null ? null : '' + h,
      children: f,
      containerInfo: v,
      implementation: m,
    };
  }
  var c = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(f, v) {
    if (f === 'font') return '';
    if (typeof v == 'string') return v === 'use-credentials' ? v : '';
  }
  return (
    (At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y),
    (At.createPortal = function (f, v) {
      var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!v || (v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)) throw Error(S(299));
      return l(f, v, null, m);
    }),
    (At.flushSync = function (f) {
      var v = c.T,
        m = y.p;
      try {
        if (((c.T = null), (y.p = 2), f)) return f();
      } finally {
        ((c.T = v), (y.p = m), y.d.f());
      }
    }),
    (At.preconnect = function (f, v) {
      typeof f == 'string' &&
        (v
          ? ((v = v.crossOrigin),
            (v = typeof v == 'string' ? (v === 'use-credentials' ? v : '') : void 0))
          : (v = null),
        y.d.C(f, v));
    }),
    (At.prefetchDNS = function (f) {
      typeof f == 'string' && y.d.D(f);
    }),
    (At.preinit = function (f, v) {
      if (typeof f == 'string' && v && typeof v.as == 'string') {
        var m = v.as,
          h = d(m, v.crossOrigin),
          g = typeof v.integrity == 'string' ? v.integrity : void 0,
          r = typeof v.fetchPriority == 'string' ? v.fetchPriority : void 0;
        m === 'style'
          ? y.d.S(f, typeof v.precedence == 'string' ? v.precedence : void 0, {
              crossOrigin: h,
              integrity: g,
              fetchPriority: r,
            })
          : m === 'script' &&
            y.d.X(f, {
              crossOrigin: h,
              integrity: g,
              fetchPriority: r,
              nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
            });
      }
    }),
    (At.preinitModule = function (f, v) {
      if (typeof f == 'string')
        if (typeof v == 'object' && v !== null) {
          if (v.as == null || v.as === 'script') {
            var m = d(v.as, v.crossOrigin);
            y.d.M(f, {
              crossOrigin: m,
              integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
              nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
            });
          }
        } else v == null && y.d.M(f);
    }),
    (At.preload = function (f, v) {
      if (typeof f == 'string' && typeof v == 'object' && v !== null && typeof v.as == 'string') {
        var m = v.as,
          h = d(m, v.crossOrigin);
        y.d.L(f, m, {
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
    (At.preloadModule = function (f, v) {
      if (typeof f == 'string')
        if (v) {
          var m = d(v.as, v.crossOrigin);
          y.d.m(f, {
            as: typeof v.as == 'string' && v.as !== 'script' ? v.as : void 0,
            crossOrigin: m,
            integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
          });
        } else y.d.m(f);
    }),
    (At.requestFormReset = function (f) {
      y.d.r(f);
    }),
    (At.unstable_batchedUpdates = function (f, v) {
      return f(v);
    }),
    (At.useFormState = function (f, v, m) {
      return c.H.useFormState(f, v, m);
    }),
    (At.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (At.version = '19.2.5'),
    At
  );
}
var fh;
function Vg() {
  if (fh) return Bo.exports;
  fh = 1;
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
  return (s(), (Bo.exports = Yg()), Bo.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dh;
function qg() {
  if (dh) return Di;
  dh = 1;
  var s = jg(),
    S = ec(),
    b = Vg();
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
    if (l(e) !== e) throw Error(y(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = l(e)), t === null)) throw Error(y(188));
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
        throw Error(y(188));
      }
      if (n.return !== a.return) ((n = i), (a = u));
      else {
        for (var E = !1, T = i.child; T; ) {
          if (T === n) {
            ((E = !0), (n = i), (a = u));
            break;
          }
          if (T === a) {
            ((E = !0), (a = i), (n = u));
            break;
          }
          T = T.sibling;
        }
        if (!E) {
          for (T = u.child; T; ) {
            if (T === n) {
              ((E = !0), (n = u), (a = i));
              break;
            }
            if (T === a) {
              ((E = !0), (a = u), (n = i));
              break;
            }
            T = T.sibling;
          }
          if (!E) throw Error(y(189));
        }
      }
      if (n.alternate !== a) throw Error(y(190));
    }
    if (n.tag !== 3) throw Error(y(188));
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
  var ae = Array.isArray,
    A = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    N = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = { pending: !1, data: null, method: null, action: null },
    $ = [],
    le = -1;
  function z(e) {
    return { current: e };
  }
  function Z(e) {
    0 > le || ((e.current = $[le]), ($[le] = null), le--);
  }
  function P(e, t) {
    (le++, ($[le] = e.current), (e.current = t));
  }
  var ue = z(null),
    re = z(null),
    oe = z(null),
    ve = z(null);
  function Se(e, t) {
    switch ((P(oe, t), P(re, e), P(ue, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Rm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = Rm(t)), (e = Am(t, e)));
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
    (Z(ue), Z(re), Z(oe));
  }
  function Be(e) {
    e.memoizedState !== null && P(ve, e);
    var t = ue.current,
      n = Am(t, e.type);
    t !== n && (P(re, e), P(ue, n));
  }
  function Ye(e) {
    (re.current === e && (Z(ue), Z(re)), ve.current === e && (Z(ve), (Ti._currentValue = q)));
  }
  var Ve, ft;
  function Fe(e) {
    if (Ve === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((Ve = (t && t[1]) || ''),
          (ft =
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
      ft
    );
  }
  var fe = !1;
  function Yt(e, t) {
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
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var i = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name');
      i &&
        i.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var u = a.DetermineComponentFrameRoot(),
        E = u[0],
        T = u[1];
      if (E && T) {
        var j = E.split(`
`),
          k = T.split(`
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
    return (n = e ? e.displayName || e.name : '') ? Fe(n) : '';
  }
  function xe(e, t) {
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
      do ((t += xe(e, n)), (n = e), (e = e.return));
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
  var _t = Object.prototype.hasOwnProperty,
    Vt = s.unstable_scheduleCallback,
    bt = s.unstable_cancelCallback,
    $e = s.unstable_shouldYield,
    Fa = s.unstable_requestPaint,
    st = s.unstable_now,
    _a = s.unstable_getCurrentPriorityLevel,
    Mn = s.unstable_ImmediatePriority,
    qt = s.unstable_UserBlockingPriority,
    Wt = s.unstable_NormalPriority,
    Tn = s.unstable_LowPriority,
    yn = s.unstable_IdlePriority,
    qi = s.log,
    yr = s.unstable_setDisableYieldValue,
    Oa = null,
    Ot = null;
  function pn(e) {
    if ((typeof qi == 'function' && yr(e), Ot && typeof Ot.setStrictMode == 'function'))
      try {
        Ot.setStrictMode(Oa, e);
      } catch {}
  }
  var Dt = Math.clz32 ? Math.clz32 : jl,
    ea = Math.log,
    pr = Math.LN2;
  function jl(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((ea(e) / pr) | 0)) | 0);
  }
  var $a = 256,
    Wa = 262144,
    Ia = 4194304;
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
  function se(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0,
      u = e.suspendedLanes,
      E = e.pingedLanes;
    e = e.warmLanes;
    var T = a & 134217727;
    return (
      T !== 0
        ? ((a = T & ~u),
          a !== 0
            ? (i = Rn(a))
            : ((E &= T), E !== 0 ? (i = Rn(E)) : n || ((n = T & ~e), n !== 0 && (i = Rn(n)))))
        : ((T = a & ~u),
          T !== 0
            ? (i = Rn(T))
            : E !== 0
              ? (i = Rn(E))
              : n || ((n = a & ~e), n !== 0 && (i = Rn(n)))),
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
  function ye(e, t) {
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
  function be() {
    var e = Ia;
    return ((Ia <<= 1), (Ia & 62914560) === 0 && (Ia = 4194304), e);
  }
  function me(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ge(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Ue(e, t, n, a, i, u) {
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
      var ee = 31 - Dt(n),
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
    (a !== 0 && He(e, a, 0),
      u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(E & ~t)));
  }
  function He(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - Dt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function at(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var a = 31 - Dt(n),
        i = 1 << a;
      ((i & t) | (e[a] & t) && (e[a] |= t), (n &= ~i));
    }
  }
  function qe(e, t) {
    var n = t & -t;
    return ((n = (n & 42) !== 0 ? 1 : lt(n)), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n);
  }
  function lt(e) {
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
  function et(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function wt() {
    var e = N.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : $m(e.type));
  }
  function it(e, t) {
    var n = N.p;
    try {
      return ((N.p = e), t());
    } finally {
      N.p = n;
    }
  }
  var ut = Math.random().toString(36).slice(2),
    We = '__reactFiber$' + ut,
    tt = '__reactProps$' + ut,
    zt = '__reactContainer$' + ut,
    ta = '__reactEvents$' + ut,
    xr = '__reactListeners$' + ut,
    Xi = '__reactHandles$' + ut,
    Gl = '__reactResources$' + ut,
    Yl = '__reactMarker$' + ut;
  function Sr(e) {
    (delete e[We], delete e[tt], delete e[ta], delete e[xr], delete e[Xi]);
  }
  function Pa(e) {
    var t = e[We];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[zt] || n[We])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Bm(e); e !== null; ) {
            if ((n = e[We])) return n;
            e = Bm(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function el(e) {
    if ((e = e[We] || e[zt])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Vl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(y(33));
  }
  function tl(e) {
    var t = e[Gl];
    return (t || (t = e[Gl] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function St(e) {
    e[Yl] = !0;
  }
  var mc = new Set(),
    hc = {};
  function Da(e, t) {
    (nl(e, t), nl(e + 'Capture', t));
  }
  function nl(e, t) {
    for (hc[e] = t, e = 0; e < t.length; e++) mc.add(t[e]);
  }
  var Tv = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    vc = {},
    gc = {};
  function Rv(e) {
    return _t.call(gc, e)
      ? !0
      : _t.call(vc, e)
        ? !1
        : Tv.test(e)
          ? (gc[e] = !0)
          : ((vc[e] = !0), !1);
  }
  function Qi(e, t, n) {
    if (Rv(t))
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
  function An(e, t, n, a) {
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
  function yc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Av(e, t, n) {
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
          set: function (E) {
            ((n = '' + E), u.call(this, E));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
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
      var t = yc(e) ? 'checked' : 'value';
      e._valueTracker = Av(e, t, '' + e[t]);
    }
  }
  function pc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      a = '';
    return (
      e && (a = yc(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = a),
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
  var _v = /[\n"\\]/g;
  function Pt(e) {
    return e.replace(_v, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function br(e, t, n, a, i, u, E, T) {
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
          : a != null && e.removeAttribute('value'),
      i == null && u != null && (e.defaultChecked = !!u),
      i != null && (e.checked = i && typeof i != 'function' && typeof i != 'symbol'),
      T != null && typeof T != 'function' && typeof T != 'symbol' && typeof T != 'boolean'
        ? (e.name = '' + It(T))
        : e.removeAttribute('name'));
  }
  function xc(e, t, n, a, i, u, E, T) {
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
    ((a = a ?? i),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (e.checked = T ? e.checked : !!a),
      (e.defaultChecked = !!a),
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
  function al(e, t, n, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        ((i = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && a && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + It(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          ((e[i].selected = !0), a && (e[i].defaultSelected = !0));
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Sc(e, t, n) {
    if (t != null && ((t = '' + It(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + It(n) : '';
  }
  function Ec(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(y(92));
        if (ae(a)) {
          if (1 < a.length) throw Error(y(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ''), (t = n));
    }
    ((n = It(t)),
      (e.defaultValue = n),
      (a = e.textContent),
      a === n && a !== '' && a !== null && (e.value = a),
      Er(e));
  }
  function ll(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ov = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function bc(e, t, n) {
    var a = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : a
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || Ov.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function Cc(e, t, n) {
    if (t != null && typeof t != 'object') throw Error(y(62));
    if (((e = e.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0
            ? e.setProperty(a, '')
            : a === 'float'
              ? (e.cssFloat = '')
              : (e[a] = ''));
      for (var i in t) ((a = t[i]), t.hasOwnProperty(i) && n[i] !== a && bc(e, i, a));
    } else for (var u in t) t.hasOwnProperty(u) && bc(e, u, t[u]);
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
  var Dv = new Map([
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
    wv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ki(e) {
    return wv.test('' + e)
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
  var il = null,
    ul = null;
  function Mc(e) {
    var t = el(e);
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
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var i = a[tt] || null;
                if (!i) throw Error(y(90));
                br(
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
            for (t = 0; t < n.length; t++) ((a = n[t]), a.form === e.form && pc(a));
          }
          break e;
        case 'textarea':
          Sc(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && al(e, !!n.multiple, t, !1));
      }
    }
  }
  var Ar = !1;
  function Tc(e, t, n) {
    if (Ar) return e(t, n);
    Ar = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Ar = !1),
        (il !== null || ul !== null) &&
          (Bu(), il && ((t = il), (e = ul), (ul = il = null), Mc(t), e)))
      )
        for (t = 0; t < e.length; t++) Mc(e[t]);
    }
  }
  function ql(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[tt] || null;
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
      var Xl = {};
      (Object.defineProperty(Xl, 'passive', {
        get: function () {
          _r = !0;
        },
      }),
        window.addEventListener('test', Xl, Xl),
        window.removeEventListener('test', Xl, Xl));
    } catch {
      _r = !1;
    }
  var na = null,
    Or = null,
    Ji = null;
  function Rc() {
    if (Ji) return Ji;
    var e,
      t = Or,
      n = t.length,
      a,
      i = 'value' in na ? na.value : na.textContent,
      u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var E = n - e;
    for (a = 1; a <= E && t[n - a] === i[u - a]; a++);
    return (Ji = i.slice(e, 1 < a ? 1 - a : void 0));
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
  function Ac() {
    return !1;
  }
  function Bt(e) {
    function t(n, a, i, u, E) {
      ((this._reactName = n),
        (this._targetInst = i),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = E),
        (this.currentTarget = null));
      for (var T in e) e.hasOwnProperty(T) && ((n = e[T]), (this[T] = n ? n(u) : u[T]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? $i
          : Ac),
        (this.isPropagationStopped = Ac),
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
  var wa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Wi = Bt(wa),
    Ql = h({}, wa, { view: 0, detail: 0 }),
    zv = Bt(Ql),
    Dr,
    wr,
    Zl,
    Ii = h({}, Ql, {
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
          : (e !== Zl &&
              (Zl && e.type === 'mousemove'
                ? ((Dr = e.screenX - Zl.screenX), (wr = e.screenY - Zl.screenY))
                : (wr = Dr = 0),
              (Zl = e)),
            Dr);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : wr;
      },
    }),
    _c = Bt(Ii),
    Nv = h({}, Ii, { dataTransfer: 0 }),
    Bv = Bt(Nv),
    Uv = h({}, Ql, { relatedTarget: 0 }),
    zr = Bt(Uv),
    Hv = h({}, wa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Lv = Bt(Hv),
    jv = h({}, wa, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Gv = Bt(jv),
    Yv = h({}, wa, { data: 0 }),
    Oc = Bt(Yv),
    Vv = {
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
    qv = {
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
    Xv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Qv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Xv[e]) ? !!t[e] : !1;
  }
  function Nr() {
    return Qv;
  }
  var Zv = h({}, Ql, {
      key: function (e) {
        if (e.key) {
          var t = Vv[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Fi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? qv[e.keyCode] || 'Unidentified'
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
    Kv = Bt(Zv),
    kv = h({}, Ii, {
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
    Dc = Bt(kv),
    Jv = h({}, Ql, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Nr,
    }),
    Fv = Bt(Jv),
    $v = h({}, wa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wv = Bt($v),
    Iv = h({}, Ii, {
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
    Pv = Bt(Iv),
    e0 = h({}, wa, { newState: 0, oldState: 0 }),
    t0 = Bt(e0),
    n0 = [9, 13, 27, 32],
    Br = On && 'CompositionEvent' in window,
    Kl = null;
  On && 'documentMode' in document && (Kl = document.documentMode);
  var a0 = On && 'TextEvent' in window && !Kl,
    wc = On && (!Br || (Kl && 8 < Kl && 11 >= Kl)),
    zc = ' ',
    Nc = !1;
  function Bc(e, t) {
    switch (e) {
      case 'keyup':
        return n0.indexOf(t.keyCode) !== -1;
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
  function Uc(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var rl = !1;
  function l0(e, t) {
    switch (e) {
      case 'compositionend':
        return Uc(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Nc = !0), zc);
      case 'textInput':
        return ((e = t.data), e === zc && Nc ? null : e);
      default:
        return null;
    }
  }
  function i0(e, t) {
    if (rl)
      return e === 'compositionend' || (!Br && Bc(e, t))
        ? ((e = Rc()), (Ji = Or = na = null), (rl = !1), e)
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
        return wc && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var u0 = {
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
  function Hc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!u0[e.type] : t === 'textarea';
  }
  function Lc(e, t, n, a) {
    (il ? (ul ? ul.push(a) : (ul = [a])) : (il = a),
      (t = Vu(t, 'onChange')),
      0 < t.length &&
        ((n = new Wi('onChange', 'change', null, n, a)), e.push({ event: n, listeners: t })));
  }
  var kl = null,
    Jl = null;
  function r0(e) {
    Sm(e, 0);
  }
  function Pi(e) {
    var t = Vl(e);
    if (pc(t)) return e;
  }
  function jc(e, t) {
    if (e === 'change') return t;
  }
  var Gc = !1;
  if (On) {
    var Ur;
    if (On) {
      var Hr = 'oninput' in document;
      if (!Hr) {
        var Yc = document.createElement('div');
        (Yc.setAttribute('oninput', 'return;'), (Hr = typeof Yc.oninput == 'function'));
      }
      Ur = Hr;
    } else Ur = !1;
    Gc = Ur && (!document.documentMode || 9 < document.documentMode);
  }
  function Vc() {
    kl && (kl.detachEvent('onpropertychange', qc), (Jl = kl = null));
  }
  function qc(e) {
    if (e.propertyName === 'value' && Pi(Jl)) {
      var t = [];
      (Lc(t, Jl, e, Rr(e)), Tc(r0, t));
    }
  }
  function s0(e, t, n) {
    e === 'focusin'
      ? (Vc(), (kl = t), (Jl = n), kl.attachEvent('onpropertychange', qc))
      : e === 'focusout' && Vc();
  }
  function o0(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Pi(Jl);
  }
  function c0(e, t) {
    if (e === 'click') return Pi(t);
  }
  function f0(e, t) {
    if (e === 'input' || e === 'change') return Pi(t);
  }
  function d0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Xt = typeof Object.is == 'function' ? Object.is : d0;
  function Fl(e, t) {
    if (Xt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!_t.call(t, i) || !Xt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Xc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Qc(e, t) {
    var n = Xc(e);
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
      n = Xc(n);
    }
  }
  function Zc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Zc(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Kc(e) {
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
  var m0 = On && 'documentMode' in document && 11 >= document.documentMode,
    sl = null,
    jr = null,
    $l = null,
    Gr = !1;
  function kc(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Gr ||
      sl == null ||
      sl !== Ki(a) ||
      ((a = sl),
      'selectionStart' in a && Lr(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      ($l && Fl($l, a)) ||
        (($l = a),
        (a = Vu(jr, 'onSelect')),
        0 < a.length &&
          ((t = new Wi('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: a }),
          (t.target = sl))));
  }
  function za(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var ol = {
      animationend: za('Animation', 'AnimationEnd'),
      animationiteration: za('Animation', 'AnimationIteration'),
      animationstart: za('Animation', 'AnimationStart'),
      transitionrun: za('Transition', 'TransitionRun'),
      transitionstart: za('Transition', 'TransitionStart'),
      transitioncancel: za('Transition', 'TransitionCancel'),
      transitionend: za('Transition', 'TransitionEnd'),
    },
    Yr = {},
    Jc = {};
  On &&
    ((Jc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ol.animationend.animation,
      delete ol.animationiteration.animation,
      delete ol.animationstart.animation),
    'TransitionEvent' in window || delete ol.transitionend.transition);
  function Na(e) {
    if (Yr[e]) return Yr[e];
    if (!ol[e]) return e;
    var t = ol[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Jc) return (Yr[e] = t[n]);
    return e;
  }
  var Fc = Na('animationend'),
    $c = Na('animationiteration'),
    Wc = Na('animationstart'),
    h0 = Na('transitionrun'),
    v0 = Na('transitionstart'),
    g0 = Na('transitioncancel'),
    Ic = Na('transitionend'),
    Pc = new Map(),
    Vr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  Vr.push('scrollEnd');
  function mn(e, t) {
    (Pc.set(e, t), Da(t, [e]));
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
    cl = 0,
    qr = 0;
  function tu() {
    for (var e = cl, t = (qr = cl = 0); t < e; ) {
      var n = en[t];
      en[t++] = null;
      var a = en[t];
      en[t++] = null;
      var i = en[t];
      en[t++] = null;
      var u = en[t];
      if (((en[t++] = null), a !== null && i !== null)) {
        var E = a.pending;
        (E === null ? (i.next = i) : ((i.next = E.next), (E.next = i)), (a.pending = i));
      }
      u !== 0 && ef(n, i, u);
    }
  }
  function nu(e, t, n, a) {
    ((en[cl++] = e),
      (en[cl++] = t),
      (en[cl++] = n),
      (en[cl++] = a),
      (qr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function Xr(e, t, n, a) {
    return (nu(e, t, n, a), au(e));
  }
  function Ba(e, t) {
    return (nu(e, null, null, t), au(e));
  }
  function ef(e, t, n) {
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
          ((i = 31 - Dt(n)),
          (e = u.hiddenUpdates),
          (a = e[i]),
          a === null ? (e[i] = [t]) : a.push(t),
          (t.lane = n | 536870912)),
        u)
      : null;
  }
  function au(e) {
    if (50 < pi) throw ((pi = 0), (Is = null), Error(y(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var fl = {};
  function y0(e, t, n, a) {
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
    return new y0(e, t, n, a);
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
  function tf(e, t) {
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
  function lu(e, t, n, a, i, u) {
    var E = 0;
    if (((a = e), typeof e == 'function')) Qr(e) && (E = 1);
    else if (typeof e == 'string')
      E = bg(e, n, ue.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case L:
          return ((e = Qt(31, n, t, i)), (e.elementType = L), (e.lanes = u), e);
        case p:
          return Ua(n.children, i, u, t);
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
                ((E = 16), (a = null));
                break e;
            }
          ((E = 29), (n = Error(y(130, e === null ? 'null' : typeof e, ''))), (a = null));
      }
    return ((t = Qt(E, n, t, i)), (t.elementType = e), (t.type = a), (t.lanes = u), t);
  }
  function Ua(e, t, n, a) {
    return ((e = Qt(7, e, a, t)), (e.lanes = n), e);
  }
  function Zr(e, t, n) {
    return ((e = Qt(6, e, null, t)), (e.lanes = n), e);
  }
  function nf(e) {
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
  var af = new WeakMap();
  function tn(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = af.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: Ae(t) }), af.set(e, t), t);
    }
    return { value: e, source: t, stack: Ae(t) };
  }
  var dl = [],
    ml = 0,
    iu = null,
    Wl = 0,
    nn = [],
    an = 0,
    aa = null,
    xn = 1,
    Sn = '';
  function wn(e, t) {
    ((dl[ml++] = Wl), (dl[ml++] = iu), (iu = e), (Wl = t));
  }
  function lf(e, t, n) {
    ((nn[an++] = xn), (nn[an++] = Sn), (nn[an++] = aa), (aa = e));
    var a = xn;
    e = Sn;
    var i = 32 - Dt(a) - 1;
    ((a &= ~(1 << i)), (n += 1));
    var u = 32 - Dt(t) + i;
    if (30 < u) {
      var E = i - (i % 5);
      ((u = (a & ((1 << E) - 1)).toString(32)),
        (a >>= E),
        (i -= E),
        (xn = (1 << (32 - Dt(t) + i)) | (n << i) | a),
        (Sn = u + e));
    } else ((xn = (1 << u) | (n << i) | a), (Sn = e));
  }
  function kr(e) {
    e.return !== null && (wn(e, 1), lf(e, 1, 0));
  }
  function Jr(e) {
    for (; e === iu; ) ((iu = dl[--ml]), (dl[ml] = null), (Wl = dl[--ml]), (dl[ml] = null));
    for (; e === aa; )
      ((aa = nn[--an]),
        (nn[an] = null),
        (Sn = nn[--an]),
        (nn[an] = null),
        (xn = nn[--an]),
        (nn[an] = null));
  }
  function uf(e, t) {
    ((nn[an++] = xn), (nn[an++] = Sn), (nn[an++] = aa), (xn = t.id), (Sn = t.overflow), (aa = e));
  }
  var Ct = null,
    Ie = null,
    Ne = !1,
    la = null,
    ln = !1,
    Fr = Error(y(519));
  function ia(e) {
    var t = Error(
      y(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    );
    throw (Il(tn(t, e)), Fr);
  }
  function rf(e) {
    var t = e.stateNode,
      n = e.type,
      a = e.memoizedProps;
    switch (((t[We] = e), (t[tt] = a), n)) {
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
          xc(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
        break;
      case 'select':
        Oe('invalid', t);
        break;
      case 'textarea':
        (Oe('invalid', t), Ec(t, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      a.suppressHydrationWarning === !0 ||
      Mm(t.textContent, n)
        ? (a.popover != null && (Oe('beforetoggle', t), Oe('toggle', t)),
          a.onScroll != null && Oe('scroll', t),
          a.onScrollEnd != null && Oe('scrollend', t),
          a.onClick != null && (t.onclick = _n),
          (t = !0))
        : (t = !1),
      t || ia(e, !0));
  }
  function sf(e) {
    for (Ct = e.return; Ct; )
      switch (Ct.tag) {
        case 5:
        case 31:
        case 13:
          ln = !1;
          return;
        case 27:
        case 3:
          ln = !0;
          return;
        default:
          Ct = Ct.return;
      }
  }
  function hl(e) {
    if (e !== Ct) return !1;
    if (!Ne) return (sf(e), (Ne = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type), (n = !(n !== 'form' && n !== 'button') || ho(e.type, e.memoizedProps))),
        (n = !n)),
      n && Ie && ia(e),
      sf(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(y(317));
      Ie = Nm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(y(317));
      Ie = Nm(e);
    } else
      t === 27
        ? ((t = Ie), xa(e.type) ? ((e = xo), (xo = null), (Ie = e)) : (Ie = t))
        : (Ie = Ct ? rn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Ha() {
    ((Ie = Ct = null), (Ne = !1));
  }
  function $r() {
    var e = la;
    return (e !== null && (jt === null ? (jt = e) : jt.push.apply(jt, e), (la = null)), e);
  }
  function Il(e) {
    la === null ? (la = [e]) : la.push(e);
  }
  var Wr = z(null),
    La = null,
    zn = null;
  function ua(e, t, n) {
    (P(Wr, t._currentValue), (t._currentValue = n));
  }
  function Nn(e) {
    ((e._currentValue = Wr.current), Z(Wr));
  }
  function Ir(e, t, n) {
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
  function Pr(e, t, n, a) {
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
                a || (E = null));
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
  function vl(e, t, n, a) {
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
    (e !== null && Pr(t, e, n, a), (t.flags |= 262144));
  }
  function uu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Xt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function ja(e) {
    ((La = e), (zn = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function Mt(e) {
    return of(La, e);
  }
  function ru(e, t) {
    return (La === null && ja(e), of(e, t));
  }
  function of(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), zn === null)) {
      if (e === null) throw Error(y(308));
      ((zn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else zn = zn.next = t;
    return n;
  }
  var p0 =
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
    x0 = s.unstable_scheduleCallback,
    S0 = s.unstable_NormalPriority,
    vt = {
      $$typeof: U,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function es() {
    return { controller: new p0(), data: new Map(), refCount: 0 };
  }
  function Pl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        x0(S0, function () {
          e.controller.abort();
        }));
  }
  var ei = null,
    ts = 0,
    gl = 0,
    yl = null;
  function E0(e, t) {
    if (ei === null) {
      var n = (ei = []);
      ((ts = 0),
        (gl = lo()),
        (yl = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (ts++, t.then(cf, cf), t);
  }
  function cf() {
    if (--ts === 0 && ei !== null) {
      yl !== null && (yl.status = 'fulfilled');
      var e = ei;
      ((ei = null), (gl = 0), (yl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function b0(e, t) {
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
  var ff = A.S;
  A.S = function (e, t) {
    ((Jd = st()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && E0(e, t),
      ff !== null && ff(e, t));
  };
  var Ga = z(null);
  function ns() {
    var e = Ga.current;
    return e !== null ? e : Je.pooledCache;
  }
  function su(e, t) {
    t === null ? P(Ga, Ga.current) : P(Ga, t.pool);
  }
  function df() {
    var e = ns();
    return e === null ? null : { parent: vt._currentValue, pool: e };
  }
  var pl = Error(y(460)),
    as = Error(y(474)),
    ou = Error(y(542)),
    cu = { then: function () {} };
  function mf(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function hf(e, t, n) {
    switch (
      ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(_n, _n), (t = n)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), gf(e), e);
      default:
        if (typeof t.status == 'string') t.then(_n, _n);
        else {
          if (((e = Je), e !== null && 100 < e.shellSuspendCounter)) throw Error(y(482));
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
            throw ((e = t.reason), gf(e), e);
        }
        throw ((Va = t), pl);
    }
  }
  function Ya(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((Va = n), pl) : n;
    }
  }
  var Va = null;
  function vf() {
    if (Va === null) throw Error(y(459));
    var e = Va;
    return ((Va = null), e);
  }
  function gf(e) {
    if (e === pl || e === ou) throw Error(y(483));
  }
  var xl = null,
    ti = 0;
  function fu(e) {
    var t = ti;
    return ((ti += 1), xl === null && (xl = []), hf(xl, e, t));
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
  function yf(e) {
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
              (typeof he == 'object' && he !== null && he.$$typeof === _ && Ya(he) === X.type))
          ? ((X = i(X, K.props)), ni(X, K), (X.return = Q), X)
          : ((X = lu(K.type, K.key, K.props, null, Q.mode, te)), ni(X, K), (X.return = Q), X);
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
        ? ((X = Ua(K, Q.mode, te, he)), (X.return = Q), X)
        : ((X = i(X, K)), (X.return = Q), X);
    }
    function ne(Q, X, K) {
      if ((typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint')
        return ((X = Zr('' + X, Q.mode, K)), (X.return = Q), X);
      if (typeof X == 'object' && X !== null) {
        switch (X.$$typeof) {
          case r:
            return ((K = lu(X.type, X.key, X.props, null, Q.mode, K)), ni(K, X), (K.return = Q), K);
          case x:
            return ((X = Kr(X, Q.mode, K)), (X.return = Q), X);
          case _:
            return ((X = Ya(X)), ne(Q, X, K));
        }
        if (ae(X) || V(X)) return ((X = Ua(X, Q.mode, K, null)), (X.return = Q), X);
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
            return ((K = Ya(K)), J(Q, X, K, te));
        }
        if (ae(K) || V(K)) return he !== null ? null : ee(Q, X, K, te, null);
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
            return ((te = Ya(te)), W(Q, X, K, te, he));
        }
        if (ae(te) || V(te)) return ((Q = Q.get(K) || null), ee(X, Q, te, he, null));
        if (typeof te.then == 'function') return W(Q, X, K, fu(te), he);
        if (te.$$typeof === U) return W(Q, X, K, ru(X, te), he);
        du(X, te);
      }
      return null;
    }
    function ce(Q, X, K, te) {
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
      for (de = a(de); Re < K.length; Re++)
        ((we = W(de, Q, Re, K[Re], te)),
          we !== null &&
            (e && we.alternate !== null && de.delete(we.key === null ? Re : we.key),
            (X = u(we, X, Re)),
            Le === null ? (he = we) : (Le.sibling = we),
            (Le = we)));
      return (
        e &&
          de.forEach(function (Ma) {
            return t(Q, Ma);
          }),
        Ne && wn(Q, Re),
        he
      );
    }
    function pe(Q, X, K, te) {
      if (K == null) throw Error(y(151));
      for (
        var he = null, Le = null, de = X, Re = (X = 0), we = null, je = K.next();
        de !== null && !je.done;
        Re++, je = K.next()
      ) {
        de.index > Re ? ((we = de), (de = null)) : (we = de.sibling);
        var Ma = J(Q, de, je.value, te);
        if (Ma === null) {
          de === null && (de = we);
          break;
        }
        (e && de && Ma.alternate === null && t(Q, de),
          (X = u(Ma, X, Re)),
          Le === null ? (he = Ma) : (Le.sibling = Ma),
          (Le = Ma),
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
      for (de = a(de); !je.done; Re++, je = K.next())
        ((je = W(de, Q, Re, je.value, te)),
          je !== null &&
            (e && je.alternate !== null && de.delete(je.key === null ? Re : je.key),
            (X = u(je, X, Re)),
            Le === null ? (he = je) : (Le.sibling = je),
            (Le = je)));
      return (
        e &&
          de.forEach(function (Ng) {
            return t(Q, Ng);
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
                    (typeof he == 'object' && he !== null && he.$$typeof === _ && Ya(he) === X.type)
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
                ? ((te = Ua(K.props.children, Q.mode, te, K.key)), (te.return = Q), (Q = te))
                : ((te = lu(K.type, K.key, K.props, null, Q.mode, te)),
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
            return ((K = Ya(K)), ke(Q, X, K, te));
        }
        if (ae(K)) return ce(Q, X, K, te);
        if (V(K)) {
          if (((he = V(K)), typeof he != 'function')) throw Error(y(150));
          return ((K = he.call(K)), pe(Q, X, K, te));
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
        return ((xl = null), he);
      } catch (de) {
        if (de === pl || de === ou) throw de;
        var Le = Qt(29, de, null, Q.mode);
        return ((Le.lanes = te), (Le.return = Q), Le);
      } finally {
      }
    };
  }
  var qa = yf(!0),
    pf = yf(!1),
    ra = !1;
  function ls(e) {
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
  function sa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function oa(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Ge & 2) !== 0)) {
      var i = a.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (a.pending = t),
        (t = au(e)),
        ef(e, null, n),
        t
      );
    }
    return (nu(e, a, t, n), au(e));
  }
  function ai(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), at(e, n));
    }
  }
  function us(e, t) {
    var n = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
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
  var rs = !1;
  function li() {
    if (rs) {
      var e = yl;
      if (e !== null) throw e;
    }
  }
  function ii(e, t, n, a) {
    rs = !1;
    var i = e.updateQueue;
    ra = !1;
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
        if (W ? (De & J) === J : (a & J) === J) {
          (J !== 0 && J === gl && (rs = !0),
            ee !== null &&
              (ee = ee.next =
                { lane: 0, tag: T.tag, payload: T.payload, callback: null, next: null }));
          e: {
            var ce = e,
              pe = T;
            J = t;
            var ke = n;
            switch (pe.tag) {
              case 1:
                if (((ce = pe.payload), typeof ce == 'function')) {
                  ne = ce.call(ke, ne, J);
                  break e;
                }
                ne = ce;
                break e;
              case 3:
                ce.flags = (ce.flags & -65537) | 128;
              case 0:
                if (
                  ((ce = pe.payload),
                  (J = typeof ce == 'function' ? ce.call(ke, ne, J) : ce),
                  J == null)
                )
                  break e;
                ne = h({}, ne, J);
                break e;
              case 2:
                ra = !0;
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
        (ha |= E),
        (e.lanes = E),
        (e.memoizedState = ne));
    }
  }
  function xf(e, t) {
    if (typeof e != 'function') throw Error(y(191, e));
    e.call(t);
  }
  function Sf(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) xf(n[e], t);
  }
  var Sl = z(null),
    mu = z(0);
  function Ef(e, t) {
    ((e = qn), P(mu, e), P(Sl, t), (qn = e | t.baseLanes));
  }
  function ss() {
    (P(mu, qn), P(Sl, Sl.current));
  }
  function os() {
    ((qn = mu.current), Z(Sl), Z(mu));
  }
  var Zt = z(null),
    un = null;
  function ca(e) {
    var t = e.alternate;
    (P(dt, dt.current & 1),
      P(Zt, e),
      un === null && (t === null || Sl.current !== null || t.memoizedState !== null) && (un = e));
  }
  function cs(e) {
    (P(dt, dt.current), P(Zt, e), un === null && (un = e));
  }
  function bf(e) {
    e.tag === 22 ? (P(dt, dt.current), P(Zt, e), un === null && (un = e)) : fa();
  }
  function fa() {
    (P(dt, dt.current), P(Zt, Zt.current));
  }
  function Kt(e) {
    (Z(Zt), un === e && (un = null), Z(dt));
  }
  var dt = z(0);
  function hu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || yo(n) || po(n))) return t;
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
    gt = null,
    vu = !1,
    El = !1,
    Xa = !1,
    gu = 0,
    ui = 0,
    bl = null,
    C0 = 0;
  function ot() {
    throw Error(y(321));
  }
  function fs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Xt(e[n], t[n])) return !1;
    return !0;
  }
  function ds(e, t, n, a, i, u) {
    return (
      (Bn = u),
      (Me = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (A.H = e === null || e.memoizedState === null ? id : As),
      (Xa = !1),
      (u = n(a, i)),
      (Xa = !1),
      El && (u = Mf(t, n, a, i)),
      Cf(e),
      u
    );
  }
  function Cf(e) {
    A.H = oi;
    var t = Ze !== null && Ze.next !== null;
    if (((Bn = 0), (gt = Ze = Me = null), (vu = !1), (ui = 0), (bl = null), t)) throw Error(y(300));
    e === null || yt || ((e = e.dependencies), e !== null && uu(e) && (yt = !0));
  }
  function Mf(e, t, n, a) {
    Me = e;
    var i = 0;
    do {
      if ((El && (bl = null), (ui = 0), (El = !1), 25 <= i)) throw Error(y(301));
      if (((i += 1), (gt = Ze = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((A.H = ud), (u = t(n, a)));
    } while (El);
    return u;
  }
  function M0() {
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
    ((Bn = 0), (gt = Ze = Me = null), (El = !1), (ui = gu = 0), (bl = null));
  }
  function Nt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (gt === null ? (Me.memoizedState = gt = e) : (gt = gt.next = e), gt);
  }
  function mt() {
    if (Ze === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ze.next;
    var t = gt === null ? Me.memoizedState : gt.next;
    if (t !== null) ((gt = t), (Ze = e));
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
        gt === null ? (Me.memoizedState = gt = e) : (gt = gt.next = e));
    }
    return gt;
  }
  function yu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ri(e) {
    var t = ui;
    return (
      (ui += 1),
      bl === null && (bl = []),
      (e = hf(bl, e, t)),
      (t = Me),
      (gt === null ? t.memoizedState : gt.next) === null &&
        ((t = t.alternate), (A.H = t === null || t.memoizedState === null ? id : As)),
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
      var a = Me.alternate;
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
      n === null && ((n = yu()), (Me.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = B;
    return (t.index++, n);
  }
  function Un(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function xu(e) {
    var t = mt();
    return ys(t, Ze, e);
  }
  function ys(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(y(311));
    a.lastRenderedReducer = n;
    var i = e.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (i !== null) {
        var E = i.next;
        ((i.next = u.next), (u.next = E));
      }
      ((t.baseQueue = i = u), (a.pending = null));
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
              ne === gl && (ee = !0));
          else if ((Bn & J) === J) {
            ((k = k.next), J === gl && (ee = !0));
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
              (ha |= J));
          ((ne = k.action), Xa && n(u, ne), (u = k.hasEagerState ? k.eagerState : n(u, ne)));
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
            (ha |= ne));
        k = k.next;
      } while (k !== null && k !== t);
      if (
        (j === null ? (E = u) : (j.next = T),
        !Xt(u, e.memoizedState) && ((yt = !0), ee && ((n = yl), n !== null)))
      )
        throw n;
      ((e.memoizedState = u), (e.baseState = E), (e.baseQueue = j), (a.lastRenderedState = u));
    }
    return (i === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function ps(e) {
    var t = mt(),
      n = t.queue;
    if (n === null) throw Error(y(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch,
      i = n.pending,
      u = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var E = (i = i.next);
      do ((u = e(u, E.action)), (E = E.next));
      while (E !== i);
      (Xt(u, t.memoizedState) || (yt = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, a];
  }
  function Tf(e, t, n) {
    var a = Me,
      i = mt(),
      u = Ne;
    if (u) {
      if (n === void 0) throw Error(y(407));
      n = n();
    } else n = t();
    var E = !Xt((Ze || i).memoizedState, n);
    if (
      (E && ((i.memoizedState = n), (yt = !0)),
      (i = i.queue),
      Es(_f.bind(null, a, i, e), [e]),
      i.getSnapshot !== t || E || (gt !== null && gt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Cl(9, { destroy: void 0 }, Af.bind(null, a, i, n, t), null),
        Je === null)
      )
        throw Error(y(349));
      u || (Bn & 127) !== 0 || Rf(a, t, n);
    }
    return n;
  }
  function Rf(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Me.updateQueue),
      t === null
        ? ((t = yu()), (Me.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Af(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), Of(t) && Df(e));
  }
  function _f(e, t, n) {
    return n(function () {
      Of(t) && Df(e);
    });
  }
  function Of(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Xt(e, n);
    } catch {
      return !0;
    }
  }
  function Df(e) {
    var t = Ba(e, 2);
    t !== null && Gt(t, e, 2);
  }
  function xs(e) {
    var t = Nt();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), Xa)) {
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
  function wf(e, t, n, a) {
    return ((e.baseState = n), ys(e, Ze, typeof a == 'function' ? a : Un));
  }
  function T0(e, t, n, a, i) {
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
        a(u),
        (n = t.pending),
        n === null
          ? ((u.next = t.pending = u), zf(t, u))
          : ((u.next = n.next), (t.pending = n.next = u)));
    }
  }
  function zf(e, t) {
    var n = t.action,
      a = t.payload,
      i = e.state;
    if (t.isTransition) {
      var u = A.T,
        E = {};
      A.T = E;
      try {
        var T = n(i, a),
          j = A.S;
        (j !== null && j(E, T), Nf(e, t, T));
      } catch (k) {
        Ss(e, t, k);
      } finally {
        (u !== null && E.types !== null && (u.types = E.types), (A.T = u));
      }
    } else
      try {
        ((u = n(i, a)), Nf(e, t, u));
      } catch (k) {
        Ss(e, t, k);
      }
  }
  function Nf(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (a) {
            Bf(e, t, a);
          },
          function (a) {
            return Ss(e, t, a);
          }
        )
      : Bf(e, t, n);
  }
  function Bf(e, t, n) {
    ((t.status = 'fulfilled'),
      (t.value = n),
      Uf(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), zf(e, n))));
  }
  function Ss(e, t, n) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = 'rejected'), (t.reason = n), Uf(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function Uf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Hf(e, t) {
    return t;
  }
  function Lf(e, t) {
    if (Ne) {
      var n = Je.formState;
      if (n !== null) {
        e: {
          var a = Me;
          if (Ne) {
            if (Ie) {
              t: {
                for (var i = Ie, u = ln; i.nodeType !== 8; ) {
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
                ((Ie = rn(i.nextSibling)), (a = i.data === 'F!'));
                break e;
              }
            }
            ia(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return (
      (n = Nt()),
      (n.memoizedState = n.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Hf,
        lastRenderedState: t,
      }),
      (n.queue = a),
      (n = nd.bind(null, Me, a)),
      (a.dispatch = n),
      (a = xs(!1)),
      (u = Rs.bind(null, Me, !1, a.queue)),
      (a = Nt()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = i),
      (n = T0.bind(null, Me, i, u, n)),
      (i.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    );
  }
  function jf(e) {
    var t = mt();
    return Gf(t, Ze, e);
  }
  function Gf(e, t, n) {
    if (
      ((t = ys(e, t, Hf)[0]),
      (e = xu(Un)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = ri(t);
      } catch (E) {
        throw E === pl ? ou : E;
      }
    else a = t;
    t = mt();
    var i = t.queue,
      u = i.dispatch;
    return (
      n !== t.memoizedState &&
        ((Me.flags |= 2048), Cl(9, { destroy: void 0 }, R0.bind(null, i, n), null)),
      [a, u, e]
    );
  }
  function R0(e, t) {
    e.action = t;
  }
  function Yf(e) {
    var t = mt(),
      n = Ze;
    if (n !== null) return Gf(t, n, e);
    (mt(), (t = t.memoizedState), (n = mt()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = e), [t, a, !1]);
  }
  function Cl(e, t, n, a) {
    return (
      (e = { tag: e, create: n, deps: a, inst: t, next: null }),
      (t = Me.updateQueue),
      t === null && ((t = yu()), (Me.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Vf() {
    return mt().memoizedState;
  }
  function Su(e, t, n, a) {
    var i = Nt();
    ((Me.flags |= e),
      (i.memoizedState = Cl(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a)));
  }
  function Eu(e, t, n, a) {
    var i = mt();
    a = a === void 0 ? null : a;
    var u = i.memoizedState.inst;
    Ze !== null && a !== null && fs(a, Ze.memoizedState.deps)
      ? (i.memoizedState = Cl(t, u, n, a))
      : ((Me.flags |= e), (i.memoizedState = Cl(1 | t, u, n, a)));
  }
  function qf(e, t) {
    Su(8390656, 8, e, t);
  }
  function Es(e, t) {
    Eu(2048, 8, e, t);
  }
  function A0(e) {
    Me.flags |= 4;
    var t = Me.updateQueue;
    if (t === null) ((t = yu()), (Me.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function Xf(e) {
    var t = mt().memoizedState;
    return (
      A0({ ref: t, nextImpl: e }),
      function () {
        if ((Ge & 2) !== 0) throw Error(y(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Qf(e, t) {
    return Eu(4, 2, e, t);
  }
  function Zf(e, t) {
    return Eu(4, 4, e, t);
  }
  function Kf(e, t) {
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
  function kf(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), Eu(4, 4, Kf.bind(null, t, e), n));
  }
  function bs() {}
  function Jf(e, t) {
    var n = mt();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && fs(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
  }
  function Ff(e, t) {
    var n = mt();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && fs(t, a[1])) return a[0];
    if (((a = e()), Xa)) {
      pn(!0);
      try {
        e();
      } finally {
        pn(!1);
      }
    }
    return ((n.memoizedState = [a, t]), a);
  }
  function Cs(e, t, n) {
    return n === void 0 || ((Bn & 1073741824) !== 0 && (De & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = $d()), (Me.lanes |= e), (ha |= e), n);
  }
  function $f(e, t, n, a) {
    return Xt(n, t)
      ? n
      : Sl.current !== null
        ? ((e = Cs(e, n, a)), Xt(e, t) || (yt = !0), e)
        : (Bn & 42) === 0 || ((Bn & 1073741824) !== 0 && (De & 261930) === 0)
          ? ((yt = !0), (e.memoizedState = n))
          : ((e = $d()), (Me.lanes |= e), (ha |= e), t);
  }
  function Wf(e, t, n, a, i) {
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
        var ee = b0(j, a);
        si(e, t, ee, Ft(e));
      } else si(e, t, a, Ft(e));
    } catch (ne) {
      si(e, t, { then: function () {}, status: 'rejected', reason: ne }, Ft());
    } finally {
      ((N.p = u), E !== null && T.types !== null && (E.types = T.types), (A.T = E));
    }
  }
  function _0() {}
  function Ms(e, t, n, a) {
    if (e.tag !== 5) throw Error(y(476));
    var i = If(e).queue;
    Wf(
      e,
      i,
      t,
      q,
      n === null
        ? _0
        : function () {
            return (Pf(e), n(a));
          }
    );
  }
  function If(e) {
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
  function Pf(e) {
    var t = If(e);
    (t.next === null && (t = e.alternate.memoizedState), si(e, t.next.queue, {}, Ft()));
  }
  function Ts() {
    return Mt(Ti);
  }
  function ed() {
    return mt().memoizedState;
  }
  function td() {
    return mt().memoizedState;
  }
  function O0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Ft();
          e = sa(n);
          var a = oa(t, e, n);
          (a !== null && (Gt(a, t, n), ai(a, t, n)), (t = { cache: es() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function D0(e, t, n) {
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
      bu(e) ? ad(t, n) : ((n = Xr(e, t, n, a)), n !== null && (Gt(n, e, a), ld(n, t, a))));
  }
  function nd(e, t, n) {
    var a = Ft();
    si(e, t, n, a);
  }
  function si(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (bu(e)) ad(t, i);
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
      if (((n = Xr(e, t, i, a)), n !== null)) return (Gt(n, e, a), ld(n, t, a), !0);
    }
    return !1;
  }
  function Rs(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: lo(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      bu(e))
    ) {
      if (t) throw Error(y(479));
    } else ((t = Xr(e, n, a, 2)), t !== null && Gt(t, e, 2));
  }
  function bu(e) {
    var t = e.alternate;
    return e === Me || (t !== null && t === Me);
  }
  function ad(e, t) {
    El = vu = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function ld(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), at(e, n));
    }
  }
  var oi = {
    readContext: Mt,
    use: pu,
    useCallback: ot,
    useContext: ot,
    useEffect: ot,
    useImperativeHandle: ot,
    useLayoutEffect: ot,
    useInsertionEffect: ot,
    useMemo: ot,
    useReducer: ot,
    useRef: ot,
    useState: ot,
    useDebugValue: ot,
    useDeferredValue: ot,
    useTransition: ot,
    useSyncExternalStore: ot,
    useId: ot,
    useHostTransitionStatus: ot,
    useFormState: ot,
    useActionState: ot,
    useOptimistic: ot,
    useMemoCache: ot,
    useCacheRefresh: ot,
  };
  oi.useEffectEvent = ot;
  var id = {
      readContext: Mt,
      use: pu,
      useCallback: function (e, t) {
        return ((Nt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Mt,
      useEffect: qf,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null), Su(4194308, 4, Kf.bind(null, t, e), n));
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
        var a = e();
        if (Xa) {
          pn(!0);
          try {
            e();
          } finally {
            pn(!1);
          }
        }
        return ((n.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, n) {
        var a = Nt();
        if (n !== void 0) {
          var i = n(t);
          if (Xa) {
            pn(!0);
            try {
              n(t);
            } finally {
              pn(!1);
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
          (e = e.dispatch = D0.bind(null, Me, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Nt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = xs(e);
        var t = e.queue,
          n = nd.bind(null, Me, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: bs,
      useDeferredValue: function (e, t) {
        var n = Nt();
        return Cs(n, e, t);
      },
      useTransition: function () {
        var e = xs(!1);
        return ((e = Wf.bind(null, Me, e.queue, !0, !1)), (Nt().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, n) {
        var a = Me,
          i = Nt();
        if (Ne) {
          if (n === void 0) throw Error(y(407));
          n = n();
        } else {
          if (((n = t()), Je === null)) throw Error(y(349));
          (De & 127) !== 0 || Rf(a, t, n);
        }
        i.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (i.queue = u),
          qf(_f.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          Cl(9, { destroy: void 0 }, Af.bind(null, a, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = Nt(),
          t = Je.identifierPrefix;
        if (Ne) {
          var n = Sn,
            a = xn;
          ((n = (a & ~(1 << (32 - Dt(a) - 1))).toString(32) + n),
            (t = '_' + t + 'R_' + n),
            (n = gu++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '_'));
        } else ((n = C0++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Ts,
      useFormState: Lf,
      useActionState: Lf,
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
        return (Nt().memoizedState = O0.bind(null, Me));
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
      useCallback: Jf,
      useContext: Mt,
      useEffect: Es,
      useImperativeHandle: kf,
      useInsertionEffect: Qf,
      useLayoutEffect: Zf,
      useMemo: Ff,
      useReducer: xu,
      useRef: Vf,
      useState: function () {
        return xu(Un);
      },
      useDebugValue: bs,
      useDeferredValue: function (e, t) {
        var n = mt();
        return $f(n, Ze.memoizedState, e, t);
      },
      useTransition: function () {
        var e = xu(Un)[0],
          t = mt().memoizedState;
        return [typeof e == 'boolean' ? e : ri(e), t];
      },
      useSyncExternalStore: Tf,
      useId: ed,
      useHostTransitionStatus: Ts,
      useFormState: jf,
      useActionState: jf,
      useOptimistic: function (e, t) {
        var n = mt();
        return wf(n, Ze, e, t);
      },
      useMemoCache: gs,
      useCacheRefresh: td,
    };
  As.useEffectEvent = Xf;
  var ud = {
    readContext: Mt,
    use: pu,
    useCallback: Jf,
    useContext: Mt,
    useEffect: Es,
    useImperativeHandle: kf,
    useInsertionEffect: Qf,
    useLayoutEffect: Zf,
    useMemo: Ff,
    useReducer: ps,
    useRef: Vf,
    useState: function () {
      return ps(Un);
    },
    useDebugValue: bs,
    useDeferredValue: function (e, t) {
      var n = mt();
      return Ze === null ? Cs(n, e, t) : $f(n, Ze.memoizedState, e, t);
    },
    useTransition: function () {
      var e = ps(Un)[0],
        t = mt().memoizedState;
      return [typeof e == 'boolean' ? e : ri(e), t];
    },
    useSyncExternalStore: Tf,
    useId: ed,
    useHostTransitionStatus: Ts,
    useFormState: Yf,
    useActionState: Yf,
    useOptimistic: function (e, t) {
      var n = mt();
      return Ze !== null ? wf(n, Ze, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: gs,
    useCacheRefresh: td,
  };
  ud.useEffectEvent = Xf;
  function _s(e, t, n, a) {
    ((t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : h({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Os = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = Ft(),
        i = sa(a);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = oa(e, i, a)),
        t !== null && (Gt(t, e, a), ai(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = Ft(),
        i = sa(a);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = oa(e, i, a)),
        t !== null && (Gt(t, e, a), ai(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ft(),
        a = sa(n);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = oa(e, a, n)),
        t !== null && (Gt(t, e, n), ai(t, e, n)));
    },
  };
  function rd(e, t, n, a, i, u, E) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, u, E)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Fl(n, a) || !Fl(i, u)
          : !0
    );
  }
  function sd(e, t, n, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && Os.enqueueReplaceState(t, t.state, null));
  }
  function Qa(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var a in t) a !== 'ref' && (n[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = h({}, n));
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
    }
    return n;
  }
  function od(e) {
    eu(e);
  }
  function cd(e) {
    console.error(e);
  }
  function fd(e) {
    eu(e);
  }
  function Cu(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function dd(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Ds(e, t, n) {
    return (
      (n = sa(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Cu(e, t);
      }),
      n
    );
  }
  function md(e) {
    return ((e = sa(e)), (e.tag = 3), e);
  }
  function hd(e, t, n, a) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == 'function') {
      var u = a.value;
      ((e.payload = function () {
        return i(u);
      }),
        (e.callback = function () {
          dd(t, n, a);
        }));
    }
    var E = n.stateNode;
    E !== null &&
      typeof E.componentDidCatch == 'function' &&
      (e.callback = function () {
        (dd(t, n, a),
          typeof i != 'function' && (va === null ? (va = new Set([this])) : va.add(this)));
        var T = a.stack;
        this.componentDidCatch(a.value, { componentStack: T !== null ? T : '' });
      });
  }
  function w0(e, t, n, a, i) {
    if (((n.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((t = n.alternate), t !== null && vl(t, n, i, !0), (n = Zt.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              un === null ? Uu() : n.alternate === null && ct === 0 && (ct = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = i),
              a === cu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  to(e, a, i)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === cu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                  to(e, a, i)),
              !1
            );
        }
        throw Error(y(435, n.tag));
      }
      return (to(e, a, i), Uu(), !1);
    }
    if (Ne)
      return (
        (t = Zt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            a !== Fr && ((e = Error(y(422), { cause: a })), Il(tn(e, n))))
          : (a !== Fr && ((t = Error(y(423), { cause: a })), Il(tn(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (a = tn(a, n)),
            (i = Ds(e.stateNode, a, i)),
            us(e, i),
            ct !== 4 && (ct = 2)),
        !1
      );
    var u = Error(y(520), { cause: a });
    if (((u = tn(u, n)), yi === null ? (yi = [u]) : yi.push(u), ct !== 4 && (ct = 2), t === null))
      return !0;
    ((a = tn(a, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = i & -i),
            (n.lanes |= e),
            (e = Ds(n.stateNode, a, e)),
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
                  (va === null || !va.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (i &= -i),
              (n.lanes |= i),
              (i = md(i)),
              hd(i, e, n, a),
              us(n, i),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ws = Error(y(461)),
    yt = !1;
  function Tt(e, t, n, a) {
    t.child = e === null ? pf(t, null, n, a) : qa(t, e.child, n, a);
  }
  function vd(e, t, n, a, i) {
    n = n.render;
    var u = t.ref;
    if ('ref' in a) {
      var E = {};
      for (var T in a) T !== 'ref' && (E[T] = a[T]);
    } else E = a;
    return (
      ja(t),
      (a = ds(e, t, n, E, u, i)),
      (T = ms()),
      e !== null && !yt
        ? (hs(e, t, i), Hn(e, t, i))
        : (Ne && T && kr(t), (t.flags |= 1), Tt(e, t, a, i), t.child)
    );
  }
  function gd(e, t, n, a, i) {
    if (e === null) {
      var u = n.type;
      return typeof u == 'function' && !Qr(u) && u.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = u), yd(e, t, u, a, i))
        : ((e = lu(n.type, null, a, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !Gs(e, i))) {
      var E = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Fl), n(E, a) && e.ref === t.ref))
        return Hn(e, t, i);
    }
    return ((t.flags |= 1), (e = Dn(u, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function yd(e, t, n, a, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Fl(u, a) && e.ref === t.ref)
        if (((yt = !1), (t.pendingProps = a = u), Gs(e, i))) (e.flags & 131072) !== 0 && (yt = !0);
        else return ((t.lanes = e.lanes), Hn(e, t, i));
    }
    return zs(e, t, n, a, i);
  }
  function pd(e, t, n, a) {
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
        return xd(e, t, u, n, a);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && su(t, u !== null ? u.cachePool : null),
          u !== null ? Ef(t, u) : ss(),
          bf(t));
      else return ((a = t.lanes = 536870912), xd(e, t, u !== null ? u.baseLanes | n : n, n, a));
    } else
      u !== null
        ? (su(t, u.cachePool), Ef(t, u), fa(), (t.memoizedState = null))
        : (e !== null && su(t, null), ss(), fa());
    return (Tt(e, t, i, n), t.child);
  }
  function ci(e, t) {
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
  function xd(e, t, n, a, i) {
    var u = ns();
    return (
      (u = u === null ? null : { parent: vt._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && su(t, null),
      ss(),
      bf(t),
      e !== null && vl(e, t, a, !0),
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
  function Sd(e, t, n) {
    return (
      qa(t, e.child, null, n),
      (e = Mu(t, t.pendingProps)),
      (e.flags |= 2),
      Kt(t),
      (t.memoizedState = null),
      e
    );
  }
  function z0(e, t, n) {
    var a = t.pendingProps,
      i = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Ne) {
        if (a.mode === 'hidden') return ((e = Mu(t, a)), (t.lanes = 536870912), ci(null, e));
        if (
          (cs(t),
          (e = Ie)
            ? ((e = zm(e, ln)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: aa !== null ? { id: xn, overflow: Sn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = nf(e)),
                (n.return = t),
                (t.child = n),
                (Ct = t),
                (Ie = null)))
            : (e = null),
          e === null)
        )
          throw ia(t);
        return ((t.lanes = 536870912), null);
      }
      return Mu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var E = u.dehydrated;
      if ((cs(t), i))
        if (t.flags & 256) ((t.flags &= -257), (t = Sd(e, t, n)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(y(558));
      else if ((yt || vl(e, t, n, !1), (i = (n & e.childLanes) !== 0), yt || i)) {
        if (((a = Je), a !== null && ((E = qe(a, n)), E !== 0 && E !== u.retryLane)))
          throw ((u.retryLane = E), Ba(e, E), Gt(a, e, E), ws);
        (Uu(), (t = Sd(e, t, n)));
      } else
        ((e = u.treeContext),
          (Ie = rn(E.nextSibling)),
          (Ct = t),
          (Ne = !0),
          (la = null),
          (ln = !1),
          e !== null && uf(t, e),
          (t = Mu(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Dn(e.child, { mode: a.mode, children: a.children })),
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
  function zs(e, t, n, a, i) {
    return (
      ja(t),
      (n = ds(e, t, n, a, void 0, i)),
      (a = ms()),
      e !== null && !yt
        ? (hs(e, t, i), Hn(e, t, i))
        : (Ne && a && kr(t), (t.flags |= 1), Tt(e, t, n, i), t.child)
    );
  }
  function Ed(e, t, n, a, i, u) {
    return (
      ja(t),
      (t.updateQueue = null),
      (n = Mf(t, a, n, i)),
      Cf(e),
      (a = ms()),
      e !== null && !yt
        ? (hs(e, t, u), Hn(e, t, u))
        : (Ne && a && kr(t), (t.flags |= 1), Tt(e, t, n, u), t.child)
    );
  }
  function bd(e, t, n, a, i) {
    if ((ja(t), t.stateNode === null)) {
      var u = fl,
        E = n.contextType;
      (typeof E == 'object' && E !== null && (u = Mt(E)),
        (u = new n(a, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Os),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        ls(t),
        (E = n.contextType),
        (u.context = typeof E == 'object' && E !== null ? Mt(E) : fl),
        (u.state = t.memoizedState),
        (E = n.getDerivedStateFromProps),
        typeof E == 'function' && (_s(t, n, E, a), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((E = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          E !== u.state && Os.enqueueReplaceState(u, u.state, null),
          ii(t, a, u, i),
          li(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var T = t.memoizedProps,
        j = Qa(n, T);
      u.props = j;
      var k = u.context,
        ee = n.contextType;
      ((E = fl), typeof ee == 'object' && ee !== null && (E = Mt(ee)));
      var ne = n.getDerivedStateFromProps;
      ((ee = typeof ne == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (T = t.pendingProps !== T),
        ee ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((T || k !== E) && sd(t, u, a, E)),
        (ra = !1));
      var J = t.memoizedState;
      ((u.state = J),
        ii(t, a, u, i),
        li(),
        (k = t.memoizedState),
        T || J !== k || ra
          ? (typeof ne == 'function' && (_s(t, n, ne, a), (k = t.memoizedState)),
            (j = ra || rd(t, n, j, a, J, k, E))
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
            (u.context = E),
            (a = j))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1)));
    } else {
      ((u = t.stateNode),
        is(e, t),
        (E = t.memoizedProps),
        (ee = Qa(n, E)),
        (u.props = ee),
        (ne = t.pendingProps),
        (J = u.context),
        (k = n.contextType),
        (j = fl),
        typeof k == 'object' && k !== null && (j = Mt(k)),
        (T = n.getDerivedStateFromProps),
        (k = typeof T == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((E !== ne || J !== j) && sd(t, u, a, j)),
        (ra = !1),
        (J = t.memoizedState),
        (u.state = J),
        ii(t, a, u, i),
        li());
      var W = t.memoizedState;
      E !== ne || J !== W || ra || (e !== null && e.dependencies !== null && uu(e.dependencies))
        ? (typeof T == 'function' && (_s(t, n, T, a), (W = t.memoizedState)),
          (ee =
            ra ||
            rd(t, n, ee, a, J, W, j) ||
            (e !== null && e.dependencies !== null && uu(e.dependencies)))
            ? (k ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(a, W, j),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(a, W, j)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (E === e.memoizedProps && J === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (E === e.memoizedProps && J === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = W)),
          (u.props = a),
          (u.state = W),
          (u.context = j),
          (a = ee))
        : (typeof u.componentDidUpdate != 'function' ||
            (E === e.memoizedProps && J === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (E === e.memoizedProps && J === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Tu(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (n = a && typeof n.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = qa(t, e.child, null, i)), (t.child = qa(t, null, n, i)))
            : Tt(e, t, n, i),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Hn(e, t, i)),
      e
    );
  }
  function Cd(e, t, n, a) {
    return (Ha(), (t.flags |= 256), Tt(e, t, n, a), t.child);
  }
  var Ns = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Bs(e) {
    return { baseLanes: e, cachePool: df() };
  }
  function Us(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Jt), e);
  }
  function Md(e, t, n) {
    var a = t.pendingProps,
      i = !1,
      u = (t.flags & 128) !== 0,
      E;
    if (
      ((E = u) || (E = e !== null && e.memoizedState === null ? !1 : (dt.current & 2) !== 0),
      E && ((i = !0), (t.flags &= -129)),
      (E = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ne) {
        if (
          (i ? ca(t) : fa(),
          (e = Ie)
            ? ((e = zm(e, ln)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: aa !== null ? { id: xn, overflow: Sn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = nf(e)),
                (n.return = t),
                (t.child = n),
                (Ct = t),
                (Ie = null)))
            : (e = null),
          e === null)
        )
          throw ia(t);
        return (po(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var T = a.children;
      return (
        (a = a.fallback),
        i
          ? (fa(),
            (i = t.mode),
            (T = Ru({ mode: 'hidden', children: T }, i)),
            (a = Ua(a, i, n, null)),
            (T.return = t),
            (a.return = t),
            (T.sibling = a),
            (t.child = T),
            (a = t.child),
            (a.memoizedState = Bs(n)),
            (a.childLanes = Us(e, E, n)),
            (t.memoizedState = Ns),
            ci(null, a))
          : (ca(t), Hs(t, T))
      );
    }
    var j = e.memoizedState;
    if (j !== null && ((T = j.dehydrated), T !== null)) {
      if (u)
        t.flags & 256
          ? (ca(t), (t.flags &= -257), (t = Ls(e, t, n)))
          : t.memoizedState !== null
            ? (fa(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (fa(),
              (T = a.fallback),
              (i = t.mode),
              (a = Ru({ mode: 'visible', children: a.children }, i)),
              (T = Ua(T, i, n, null)),
              (T.flags |= 2),
              (a.return = t),
              (T.return = t),
              (a.sibling = T),
              (t.child = a),
              qa(t, e.child, null, n),
              (a = t.child),
              (a.memoizedState = Bs(n)),
              (a.childLanes = Us(e, E, n)),
              (t.memoizedState = Ns),
              (t = ci(null, a)));
      else if ((ca(t), po(T))) {
        if (((E = T.nextSibling && T.nextSibling.dataset), E)) var k = E.dgst;
        ((E = k),
          (a = Error(y(419))),
          (a.stack = ''),
          (a.digest = E),
          Il({ value: a, source: null, stack: null }),
          (t = Ls(e, t, n)));
      } else if ((yt || vl(e, t, n, !1), (E = (n & e.childLanes) !== 0), yt || E)) {
        if (((E = Je), E !== null && ((a = qe(E, n)), a !== 0 && a !== j.retryLane)))
          throw ((j.retryLane = a), Ba(e, a), Gt(E, e, a), ws);
        (yo(T) || Uu(), (t = Ls(e, t, n)));
      } else
        yo(T)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = j.treeContext),
            (Ie = rn(T.nextSibling)),
            (Ct = t),
            (Ne = !0),
            (la = null),
            (ln = !1),
            e !== null && uf(t, e),
            (t = Hs(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (fa(),
        (T = a.fallback),
        (i = t.mode),
        (j = e.child),
        (k = j.sibling),
        (a = Dn(j, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = j.subtreeFlags & 65011712),
        k !== null ? (T = Dn(k, T)) : ((T = Ua(T, i, n, null)), (T.flags |= 2)),
        (T.return = t),
        (a.return = t),
        (a.sibling = T),
        (t.child = a),
        ci(null, a),
        (a = t.child),
        (T = e.child.memoizedState),
        T === null
          ? (T = Bs(n))
          : ((i = T.cachePool),
            i !== null
              ? ((j = vt._currentValue), (i = i.parent !== j ? { parent: j, pool: j } : i))
              : (i = df()),
            (T = { baseLanes: T.baseLanes | n, cachePool: i })),
        (a.memoizedState = T),
        (a.childLanes = Us(e, E, n)),
        (t.memoizedState = Ns),
        ci(e.child, a))
      : (ca(t),
        (n = e.child),
        (e = n.sibling),
        (n = Dn(n, { mode: 'visible', children: a.children })),
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
      qa(t, e.child, null, n),
      (e = Hs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Td(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), Ir(e.return, t, n));
  }
  function js(e, t, n, a, i, u) {
    var E = e.memoizedState;
    E === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: i,
          treeForkCount: u,
        })
      : ((E.isBackwards = t),
        (E.rendering = null),
        (E.renderingStartTime = 0),
        (E.last = a),
        (E.tail = n),
        (E.tailMode = i),
        (E.treeForkCount = u));
  }
  function Rd(e, t, n) {
    var a = t.pendingProps,
      i = a.revealOrder,
      u = a.tail;
    a = a.children;
    var E = dt.current,
      T = (E & 2) !== 0;
    if (
      (T ? ((E = (E & 1) | 2), (t.flags |= 128)) : (E &= 1),
      P(dt, E),
      Tt(e, t, a, n),
      (a = Ne ? Wl : 0),
      !T && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Td(e, n, t);
        else if (e.tag === 19) Td(e, n, t);
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
          js(t, !1, i, n, u, a));
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
        js(t, !0, n, null, u, a);
        break;
      case 'together':
        js(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Hn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (ha |= t.lanes), (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((vl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
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
  function N0(e, t, n) {
    switch (t.tag) {
      case 3:
        (Se(t, t.stateNode.containerInfo), ua(t, vt, e.memoizedState.cache), Ha());
        break;
      case 27:
      case 5:
        Be(t);
        break;
      case 4:
        Se(t, t.stateNode.containerInfo);
        break;
      case 10:
        ua(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), cs(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ca(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Md(e, t, n)
              : (ca(t), (e = Hn(e, t, n)), e !== null ? e.sibling : null);
        ca(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((a = (n & t.childLanes) !== 0),
          a || (vl(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
          i)
        ) {
          if (a) return Rd(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          P(dt, dt.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), pd(e, t, n, t.pendingProps));
      case 24:
        ua(t, vt, e.memoizedState.cache);
    }
    return Hn(e, t, n);
  }
  function Ad(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) yt = !0;
      else {
        if (!Gs(e, n) && (t.flags & 128) === 0) return ((yt = !1), N0(e, t, n));
        yt = (e.flags & 131072) !== 0;
      }
    else ((yt = !1), Ne && (t.flags & 1048576) !== 0 && lf(t, Wl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Ya(t.elementType)), (t.type = e), typeof e == 'function'))
            Qr(e)
              ? ((a = Qa(e, a)), (t.tag = 1), (t = bd(null, t, e, a, n)))
              : ((t.tag = 0), (t = zs(null, t, e, a, n)));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === G) {
                ((t.tag = 11), (t = vd(null, t, e, a, n)));
                break e;
              } else if (i === D) {
                ((t.tag = 14), (t = gd(null, t, e, a, n)));
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
        return ((a = t.type), (i = Qa(a, t.pendingProps)), bd(e, t, a, i, n));
      case 3:
        e: {
          if ((Se(t, t.stateNode.containerInfo), e === null)) throw Error(y(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((i = u.element), is(e, t), ii(t, a, null, n));
          var E = t.memoizedState;
          if (
            ((a = E.cache),
            ua(t, vt, a),
            a !== u.cache && Pr(t, [vt], n, !0),
            li(),
            (a = E.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: E.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Cd(e, t, a, n);
              break e;
            } else if (a !== i) {
              ((i = tn(Error(y(424)), t)), Il(i), (t = Cd(e, t, a, n)));
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
                  la = null,
                  ln = !0,
                  n = pf(t, null, a, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((Ha(), a === i)) {
              t = Hn(e, t, n);
              break e;
            }
            Tt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Tu(e, t),
          e === null
            ? (n = jm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Ne ||
                ((n = t.type),
                (e = t.pendingProps),
                (a = qu(oe.current).createElement(n)),
                (a[We] = t),
                (a[tt] = e),
                Rt(a, n, e),
                St(a),
                (t.stateNode = a))
            : (t.memoizedState = jm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Be(t),
          e === null &&
            Ne &&
            ((a = t.stateNode = Um(t.type, t.pendingProps, oe.current)),
            (Ct = t),
            (ln = !0),
            (i = Ie),
            xa(t.type) ? ((xo = i), (Ie = rn(a.firstChild))) : (Ie = i)),
          Tt(e, t, t.pendingProps.children, n),
          Tu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ne &&
            ((i = a = Ie) &&
              ((a = og(a, t.type, t.pendingProps, ln)),
              a !== null
                ? ((t.stateNode = a), (Ct = t), (Ie = rn(a.firstChild)), (ln = !1), (i = !0))
                : (i = !1)),
            i || ia(t)),
          Be(t),
          (i = t.type),
          (u = t.pendingProps),
          (E = e !== null ? e.memoizedProps : null),
          (a = u.children),
          ho(i, u) ? (a = null) : E !== null && ho(i, E) && (t.flags |= 32),
          t.memoizedState !== null && ((i = ds(e, t, M0, null, null, n)), (Ti._currentValue = i)),
          Tu(e, t),
          Tt(e, t, a, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ne &&
            ((e = n = Ie) &&
              ((n = cg(n, t.pendingProps, ln)),
              n !== null ? ((t.stateNode = n), (Ct = t), (Ie = null), (e = !0)) : (e = !1)),
            e || ia(t)),
          null
        );
      case 13:
        return Md(e, t, n);
      case 4:
        return (
          Se(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = qa(t, null, a, n)) : Tt(e, t, a, n),
          t.child
        );
      case 11:
        return vd(e, t, t.type, t.pendingProps, n);
      case 7:
        return (Tt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Tt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Tt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return ((a = t.pendingProps), ua(t, t.type, a.value), Tt(e, t, a.children, n), t.child);
      case 9:
        return (
          (i = t.type._context),
          (a = t.pendingProps.children),
          ja(t),
          (i = Mt(i)),
          (a = a(i)),
          (t.flags |= 1),
          Tt(e, t, a, n),
          t.child
        );
      case 14:
        return gd(e, t, t.type, t.pendingProps, n);
      case 15:
        return yd(e, t, t.type, t.pendingProps, n);
      case 19:
        return Rd(e, t, n);
      case 31:
        return z0(e, t, n);
      case 22:
        return pd(e, t, n, t.pendingProps);
      case 24:
        return (
          ja(t),
          (a = Mt(vt)),
          e === null
            ? ((i = ns()),
              i === null &&
                ((i = Je),
                (u = es()),
                (i.pooledCache = u),
                u.refCount++,
                u !== null && (i.pooledCacheLanes |= n),
                (i = u)),
              (t.memoizedState = { parent: a, cache: i }),
              ls(t),
              ua(t, vt, i))
            : ((e.lanes & n) !== 0 && (is(e, t), ii(t, null, null, n), li()),
              (i = e.memoizedState),
              (u = t.memoizedState),
              i.parent !== a
                ? ((i = { parent: a, cache: a }),
                  (t.memoizedState = i),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i),
                  ua(t, vt, a))
                : ((a = u.cache), ua(t, vt, a), a !== i.cache && Pr(t, [vt], n, !0))),
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
  function Ys(e, t, n, a, i) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (i & 335544128) === i))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (em()) e.flags |= 8192;
        else throw ((Va = cu), as);
    } else e.flags &= -16777217;
  }
  function _d(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Xm(t)))
      if (em()) e.flags |= 8192;
      else throw ((Va = cu), as);
  }
  function Au(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? be() : 536870912), (e.lanes |= t), (Al |= t)));
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
          for (var a = null; n !== null; ) (n.alternate !== null && (a = n), (n = n.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Pe(e) {
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
  function B0(e, t, n) {
    var a = t.pendingProps;
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
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Nn(vt),
          Ce(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (hl(t)
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
            ? (Ln(t), u !== null ? (Pe(t), _d(t, u)) : (Pe(t), Ys(t, i, null, a, n)))
            : u
              ? u !== e.memoizedState
                ? (Ln(t), Pe(t), _d(t, u))
                : (Pe(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== a && Ln(t), Pe(t), Ys(t, i, e, a, n)),
          null
        );
      case 27:
        if ((Ye(t), (n = oe.current), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Ln(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(y(166));
            return (Pe(t), null);
          }
          ((e = ue.current), hl(t) ? rf(t) : ((e = Um(i, a, n)), (t.stateNode = e), Ln(t)));
        }
        return (Pe(t), null);
      case 5:
        if ((Ye(t), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Ln(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(y(166));
            return (Pe(t), null);
          }
          if (((u = ue.current), hl(t))) rf(t);
          else {
            var E = qu(oe.current);
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
                      typeof a.is == 'string'
                        ? E.createElement('select', { is: a.is })
                        : E.createElement('select')),
                      a.multiple ? (u.multiple = !0) : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == 'string'
                        ? E.createElement(i, { is: a.is })
                        : E.createElement(i);
                }
            }
            ((u[We] = t), (u[tt] = a));
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
            a && Ln(t);
          }
        }
        return (Pe(t), Ys(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Ln(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(y(166));
          if (((e = oe.current), hl(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (a = null), (i = Ct), i !== null))
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            ((e[We] = t),
              (e = !!(
                e.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Mm(e.nodeValue, n)
              )),
              e || ia(t, !0));
          } else ((e = qu(e).createTextNode(a)), (e[We] = t), (t.stateNode = e));
        }
        return (Pe(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = hl(t)), n !== null)) {
            if (e === null) {
              if (!a) throw Error(y(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(y(557));
              e[We] = t;
            } else (Ha(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
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
          ((a = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = hl(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(y(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(y(317));
              i[We] = t;
            } else (Ha(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
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
              Au(t, t.updateQueue),
              Pe(t),
              null)
        );
      case 4:
        return (Ce(), e === null && so(t.stateNode.containerInfo), Pe(t), null);
      case 10:
        return (Nn(t.type), Pe(t), null);
      case 19:
        if ((Z(dt), (a = t.memoizedState), a === null)) return (Pe(t), null);
        if (((i = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (i) fi(a, !1);
          else {
            if (ct !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = hu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      fi(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Au(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (tf(n, e), (n = n.sibling));
                  return (P(dt, (dt.current & 1) | 2), Ne && wn(t, a.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            a.tail !== null &&
              st() > zu &&
              ((t.flags |= 128), (i = !0), fi(a, !1), (t.lanes = 4194304));
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
                fi(a, !0),
                a.tail === null && a.tailMode === 'hidden' && !u.alternate && !Ne)
              )
                return (Pe(t), null);
            } else
              2 * st() - a.renderingStartTime > zu &&
                n !== 536870912 &&
                ((t.flags |= 128), (i = !0), fi(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = a.last), e !== null ? (e.sibling = u) : (t.child = u), (a.last = u));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = st()),
            (e.sibling = null),
            (n = dt.current),
            P(dt, i ? (n & 1) | 2 : n & 1),
            Ne && wn(t, a.treeForkCount),
            e)
          : (Pe(t), null);
      case 22:
      case 23:
        return (
          Kt(t),
          os(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
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
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== n && (t.flags |= 2048),
          e !== null && Z(Ga),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Nn(vt),
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
  function U0(e, t) {
    switch ((Jr(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          Nn(vt),
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
          Ha();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 13:
        if ((Kt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(y(340));
          Ha();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Z(dt), null);
      case 4:
        return (Ce(), null);
      case 10:
        return (Nn(t.type), null);
      case 22:
      case 23:
        return (
          Kt(t),
          os(),
          e !== null && Z(Ga),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Nn(vt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Od(e, t) {
    switch ((Jr(t), t.tag)) {
      case 3:
        (Nn(vt), Ce());
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
        Z(dt);
        break;
      case 10:
        Nn(t.type);
        break;
      case 22:
      case 23:
        (Kt(t), os(), e !== null && Z(Ga));
        break;
      case 24:
        Nn(vt);
    }
  }
  function di(e, t) {
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
              E = n.inst;
            ((a = u()), (E.destroy = a));
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (T) {
      Qe(t, t.return, T);
    }
  }
  function da(e, t, n) {
    try {
      var a = t.updateQueue,
        i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var E = a.inst,
              T = E.destroy;
            if (T !== void 0) {
              ((E.destroy = void 0), (i = t));
              var j = n,
                k = T;
              try {
                k();
              } catch (ee) {
                Qe(i, j, ee);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (ee) {
      Qe(t, t.return, ee);
    }
  }
  function Dd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Sf(t, n);
      } catch (a) {
        Qe(e, e.return, a);
      }
    }
  }
  function wd(e, t, n) {
    ((n.props = Qa(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      Qe(e, t, a);
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
  function En(e, t) {
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
  function zd(e) {
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
  function Vs(e, t, n) {
    try {
      var a = e.stateNode;
      (ag(a, e.type, n, t), (a[tt] = t));
    } catch (i) {
      Qe(e, e.return, i);
    }
  }
  function Nd(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && xa(e.type)) || e.tag === 4
    );
  }
  function qs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Nd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if ((e.tag === 27 && xa(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Xs(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = _n)));
    else if (
      a !== 4 &&
      (a === 27 && xa(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (Xs(e, t, n), e = e.sibling; e !== null; ) (Xs(e, t, n), (e = e.sibling));
  }
  function _u(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (a !== 4 && (a === 27 && xa(e.type) && (n = e.stateNode), (e = e.child), e !== null))
      for (_u(e, t, n), e = e.sibling; e !== null; ) (_u(e, t, n), (e = e.sibling));
  }
  function Bd(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0]);
      (Rt(t, a, n), (t[We] = e), (t[tt] = n));
    } catch (u) {
      Qe(e, e.return, u);
    }
  }
  var jn = !1,
    pt = !1,
    Qs = !1,
    Ud = typeof WeakSet == 'function' ? WeakSet : Set,
    Et = null;
  function H0(e, t) {
    if (((e = e.containerInfo), (fo = Fu), (e = Kc(e)), Lr(e))) {
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
                  ne !== u || (a !== 0 && ne.nodeType !== 3) || (j = E + a),
                  ne.nodeType === 3 && (E += ne.nodeValue.length),
                  (W = ne.firstChild) !== null;
              )
                ((J = ne), (ne = W));
              for (;;) {
                if (ne === e) break t;
                if (
                  (J === n && ++k === i && (T = E),
                  J === u && ++ee === a && (j = E),
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
    for (mo = { focusedElem: e, selectionRange: n }, Fu = !1, Et = t; Et !== null; )
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
                  var ce = Qa(n.type, i);
                  ((e = a.getSnapshotBeforeUpdate(ce, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (pe) {
                  Qe(n, n.return, pe);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) go(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      go(e);
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
  function Hd(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Yn(e, n), a & 4 && di(5, n));
        break;
      case 1:
        if ((Yn(e, n), a & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (E) {
              Qe(n, n.return, E);
            }
          else {
            var i = Qa(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (E) {
              Qe(n, n.return, E);
            }
          }
        (a & 64 && Dd(n), a & 512 && mi(n, n.return));
        break;
      case 3:
        if ((Yn(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
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
            Sf(e, t);
          } catch (E) {
            Qe(n, n.return, E);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Bd(n);
      case 26:
      case 5:
        (Yn(e, n), t === null && a & 4 && zd(n), a & 512 && mi(n, n.return));
        break;
      case 12:
        Yn(e, n);
        break;
      case 31:
        (Yn(e, n), a & 4 && Gd(e, n));
        break;
      case 13:
        (Yn(e, n),
          a & 4 && Yd(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((n = Z0.bind(null, n)), fg(e, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || jn), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || pt), (i = jn));
          var u = pt;
          ((jn = a),
            (pt = t) && !u ? Vn(e, n, (n.subtreeFlags & 8772) !== 0) : Yn(e, n),
            (jn = i),
            (pt = u));
        }
        break;
      case 30:
        break;
      default:
        Yn(e, n);
    }
  }
  function Ld(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Ld(t)),
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
    for (n = n.child; n !== null; ) (jd(e, t, n), (n = n.sibling));
  }
  function jd(e, t, n) {
    if (Ot && typeof Ot.onCommitFiberUnmount == 'function')
      try {
        Ot.onCommitFiberUnmount(Oa, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (pt || En(n, t),
          Gn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        pt || En(n, t);
        var a = nt,
          i = Ut;
        (xa(n.type) && ((nt = n.stateNode), (Ut = !1)),
          Gn(e, t, n),
          bi(n.stateNode),
          (nt = a),
          (Ut = i));
        break;
      case 5:
        pt || En(n, t);
      case 6:
        if (((a = nt), (i = Ut), (nt = null), Gn(e, t, n), (nt = a), (Ut = i), nt !== null))
          if (Ut)
            try {
              (nt.nodeType === 9
                ? nt.body
                : nt.nodeName === 'HTML'
                  ? nt.ownerDocument.body
                  : nt
              ).removeChild(n.stateNode);
            } catch (u) {
              Qe(n, t, u);
            }
          else
            try {
              nt.removeChild(n.stateNode);
            } catch (u) {
              Qe(n, t, u);
            }
        break;
      case 18:
        nt !== null &&
          (Ut
            ? ((e = nt),
              Dm(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                n.stateNode
              ),
              Ul(e))
            : Dm(nt, n.stateNode));
        break;
      case 4:
        ((a = nt),
          (i = Ut),
          (nt = n.stateNode.containerInfo),
          (Ut = !0),
          Gn(e, t, n),
          (nt = a),
          (Ut = i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (da(2, n, t), pt || da(4, n, t), Gn(e, t, n));
        break;
      case 1:
        (pt ||
          (En(n, t), (a = n.stateNode), typeof a.componentWillUnmount == 'function' && wd(n, t, a)),
          Gn(e, t, n));
        break;
      case 21:
        Gn(e, t, n);
        break;
      case 22:
        ((pt = (a = pt) || n.memoizedState !== null), Gn(e, t, n), (pt = a));
        break;
      default:
        Gn(e, t, n);
    }
  }
  function Gd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Ul(e);
      } catch (n) {
        Qe(t, t.return, n);
      }
    }
  }
  function Yd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ul(e);
      } catch (n) {
        Qe(t, t.return, n);
      }
  }
  function L0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Ud()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Ud()),
          t
        );
      default:
        throw Error(y(435, e.tag));
    }
  }
  function Ou(e, t) {
    var n = L0(e);
    t.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var i = K0.bind(null, e, a);
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
          E = t,
          T = E;
        e: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
              if (xa(T.type)) {
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
        (jd(u, E, i),
          (nt = null),
          (Ut = !1),
          (u = i.alternate),
          u !== null && (u.return = null),
          (i.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (Vd(t, e), (t = t.sibling));
  }
  var hn = null;
  function Vd(e, t) {
    var n = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ht(t, e), Lt(e), a & 4 && (da(3, e, e.return), di(3, e), da(5, e, e.return)));
        break;
      case 1:
        (Ht(t, e),
          Lt(e),
          a & 512 && (pt || n === null || En(n, n.return)),
          a & 64 &&
            jn &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var i = hn;
        if ((Ht(t, e), Lt(e), a & 512 && (pt || n === null || En(n, n.return)), a & 4)) {
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
                          u[Yl] ||
                          u[We] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = i.createElement(a)),
                          i.head.insertBefore(u, i.querySelector('head > title'))),
                        Rt(u, a, n),
                        (u[We] = e),
                        St(u),
                        (a = u));
                      break e;
                    case 'link':
                      var E = Vm('link', 'href', i).get(a + (n.href || ''));
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
                      ((u = i.createElement(a)), Rt(u, a, n), i.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((E = Vm('meta', 'content', i).get(a + (n.content || '')))) {
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
                      ((u = i.createElement(a)), Rt(u, a, n), i.head.appendChild(u));
                      break;
                    default:
                      throw Error(y(468, a));
                  }
                  ((u[We] = e), St(u), (a = u));
                }
                e.stateNode = a;
              } else qm(i, e.type, e.stateNode);
            else e.stateNode = Ym(i, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                a === null ? qm(i, e.type, e.stateNode) : Ym(i, a, e.memoizedProps))
              : a === null && e.stateNode !== null && Vs(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Ht(t, e),
          Lt(e),
          a & 512 && (pt || n === null || En(n, n.return)),
          n !== null && a & 4 && Vs(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((Ht(t, e), Lt(e), a & 512 && (pt || n === null || En(n, n.return)), e.flags & 32)) {
          i = e.stateNode;
          try {
            ll(i, '');
          } catch (ce) {
            Qe(e, e.return, ce);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), Vs(e, i, n !== null ? n.memoizedProps : i)),
          a & 1024 && (Qs = !0));
        break;
      case 6:
        if ((Ht(t, e), Lt(e), a & 4)) {
          if (e.stateNode === null) throw Error(y(162));
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
          ((Zu = null),
          (i = hn),
          (hn = Xu(t.containerInfo)),
          Ht(t, e),
          (hn = i),
          Lt(e),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ul(t.containerInfo);
          } catch (ce) {
            Qe(e, e.return, ce);
          }
        Qs && ((Qs = !1), qd(e));
        break;
      case 4:
        ((a = hn), (hn = Xu(e.stateNode.containerInfo)), Ht(t, e), Lt(e), (hn = a));
        break;
      case 12:
        (Ht(t, e), Lt(e));
        break;
      case 31:
        (Ht(t, e),
          Lt(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Ou(e, a))));
        break;
      case 13:
        (Ht(t, e),
          Lt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (wu = st()),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Ou(e, a))));
        break;
      case 22:
        i = e.memoizedState !== null;
        var j = n !== null && n.memoizedState !== null,
          k = jn,
          ee = pt;
        if (((jn = k || i), (pt = ee || j), Ht(t, e), (pt = ee), (jn = k), Lt(e), a & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (n === null || j || jn || pt || Za(e)),
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
                } catch (ce) {
                  Qe(j, j.return, ce);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                j = t;
                try {
                  j.stateNode.nodeValue = i ? '' : j.memoizedProps;
                } catch (ce) {
                  Qe(j, j.return, ce);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                j = t;
                try {
                  var W = j.stateNode;
                  i ? wm(W, !0) : wm(j.stateNode, !1);
                } catch (ce) {
                  Qe(j, j.return, ce);
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
          a !== null && ((n = a.retryQueue), n !== null && ((a.retryQueue = null), Ou(e, n))));
        break;
      case 19:
        (Ht(t, e),
          Lt(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Ou(e, a))));
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
        for (var n, a = e.return; a !== null; ) {
          if (Nd(a)) {
            n = a;
            break;
          }
          a = a.return;
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
            n.flags & 32 && (ll(E, ''), (n.flags &= -33));
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
        Qe(e, e.return, ee);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function qd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (qd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function Yn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Hd(e, t.alternate, t), (t = t.sibling));
  }
  function Za(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (da(4, t, t.return), Za(t));
          break;
        case 1:
          En(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == 'function' && wd(t, t.return, n), Za(t));
          break;
        case 27:
          bi(t.stateNode);
        case 26:
        case 5:
          (En(t, t.return), Za(t));
          break;
        case 22:
          t.memoizedState === null && Za(t);
          break;
        case 30:
          Za(t);
          break;
        default:
          Za(t);
      }
      e = e.sibling;
    }
  }
  function Vn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
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
          if ((Vn(i, u, n), (a = u), (i = a.stateNode), typeof i.componentDidMount == 'function'))
            try {
              i.componentDidMount();
            } catch (k) {
              Qe(a, a.return, k);
            }
          if (((a = u), (i = a.updateQueue), i !== null)) {
            var T = a.stateNode;
            try {
              var j = i.shared.hiddenCallbacks;
              if (j !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < j.length; i++) xf(j[i], T);
            } catch (k) {
              Qe(a, a.return, k);
            }
          }
          (n && E & 64 && Dd(u), mi(u, u.return));
          break;
        case 27:
          Bd(u);
        case 26:
        case 5:
          (Vn(i, u, n), n && a === null && E & 4 && zd(u), mi(u, u.return));
          break;
        case 12:
          Vn(i, u, n);
          break;
        case 31:
          (Vn(i, u, n), n && E & 4 && Gd(i, u));
          break;
        case 13:
          (Vn(i, u, n), n && E & 4 && Yd(i, u));
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
      e !== n && (e != null && e.refCount++, n != null && Pl(n)));
  }
  function Ks(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Pl(e)));
  }
  function vn(e, t, n, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Xd(e, t, n, a), (t = t.sibling));
  }
  function Xd(e, t, n, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (vn(e, t, n, a), i & 2048 && di(9, t));
        break;
      case 1:
        vn(e, t, n, a);
        break;
      case 3:
        (vn(e, t, n, a),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Pl(e))));
        break;
      case 12:
        if (i & 2048) {
          (vn(e, t, n, a), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              E = u.id,
              T = u.onPostCommit;
            typeof T == 'function' &&
              T(E, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (j) {
            Qe(t, t.return, j);
          }
        } else vn(e, t, n, a);
        break;
      case 31:
        vn(e, t, n, a);
        break;
      case 13:
        vn(e, t, n, a);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (E = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? vn(e, t, n, a)
              : hi(e, t)
            : u._visibility & 2
              ? vn(e, t, n, a)
              : ((u._visibility |= 2), Ml(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          i & 2048 && Zs(E, t));
        break;
      case 24:
        (vn(e, t, n, a), i & 2048 && Ks(t.alternate, t));
        break;
      default:
        vn(e, t, n, a);
    }
  }
  function Ml(e, t, n, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e,
        E = t,
        T = n,
        j = a,
        k = E.flags;
      switch (E.tag) {
        case 0:
        case 11:
        case 15:
          (Ml(u, E, T, j, i), di(8, E));
          break;
        case 23:
          break;
        case 22:
          var ee = E.stateNode;
          (E.memoizedState !== null
            ? ee._visibility & 2
              ? Ml(u, E, T, j, i)
              : hi(u, E)
            : ((ee._visibility |= 2), Ml(u, E, T, j, i)),
            i && k & 2048 && Zs(E.alternate, E));
          break;
        case 24:
          (Ml(u, E, T, j, i), i && k & 2048 && Ks(E.alternate, E));
          break;
        default:
          Ml(u, E, T, j, i);
      }
      t = t.sibling;
    }
  }
  function hi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          a = t,
          i = a.flags;
        switch (a.tag) {
          case 22:
            (hi(n, a), i & 2048 && Zs(a.alternate, a));
            break;
          case 24:
            (hi(n, a), i & 2048 && Ks(a.alternate, a));
            break;
          default:
            hi(n, a);
        }
        t = t.sibling;
      }
  }
  var vi = 8192;
  function Tl(e, t, n) {
    if (e.subtreeFlags & vi) for (e = e.child; e !== null; ) (Qd(e, t, n), (e = e.sibling));
  }
  function Qd(e, t, n) {
    switch (e.tag) {
      case 26:
        (Tl(e, t, n),
          e.flags & vi && e.memoizedState !== null && Cg(n, hn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Tl(e, t, n);
        break;
      case 3:
      case 4:
        var a = hn;
        ((hn = Xu(e.stateNode.containerInfo)), Tl(e, t, n), (hn = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = vi), (vi = 16777216), Tl(e, t, n), (vi = a))
            : Tl(e, t, n));
        break;
      default:
        Tl(e, t, n);
    }
  }
  function Zd(e) {
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
          var a = t[n];
          ((Et = a), kd(a, e));
        }
      Zd(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Kd(e), (e = e.sibling));
  }
  function Kd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (gi(e), e.flags & 2048 && da(9, e, e.return));
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
          var a = t[n];
          ((Et = a), kd(a, e));
        }
      Zd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (da(8, t, t.return), Du(t));
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
  function kd(e, t) {
    for (; Et !== null; ) {
      var n = Et;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          da(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Pl(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (Et = a));
      else
        e: for (n = e; Et !== null; ) {
          a = Et;
          var i = a.sibling,
            u = a.return;
          if ((Ld(a), a === n)) {
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
  var j0 = {
      getCacheForType: function (e) {
        var t = Mt(vt),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return Mt(vt).controller.signal;
      },
    },
    G0 = typeof WeakMap == 'function' ? WeakMap : Map,
    Ge = 0,
    Je = null,
    _e = null,
    De = 0,
    Xe = 0,
    kt = null,
    ma = !1,
    Rl = !1,
    ks = !1,
    qn = 0,
    ct = 0,
    ha = 0,
    Ka = 0,
    Js = 0,
    Jt = 0,
    Al = 0,
    yi = null,
    jt = null,
    Fs = !1,
    wu = 0,
    Jd = 0,
    zu = 1 / 0,
    Nu = null,
    va = null,
    xt = 0,
    ga = null,
    _l = null,
    Xn = 0,
    $s = 0,
    Ws = null,
    Fd = null,
    pi = 0,
    Is = null;
  function Ft() {
    return (Ge & 2) !== 0 && De !== 0 ? De & -De : A.T !== null ? lo() : wt();
  }
  function $d() {
    if (Jt === 0)
      if ((De & 536870912) === 0 || Ne) {
        var e = Wa;
        ((Wa <<= 1), (Wa & 3932160) === 0 && (Wa = 262144), (Jt = e));
      } else Jt = 536870912;
    return ((e = Zt.current), e !== null && (e.flags |= 32), Jt);
  }
  function Gt(e, t, n) {
    (((e === Je && (Xe === 2 || Xe === 9)) || e.cancelPendingCommit !== null) &&
      (Ol(e, 0), ya(e, De, Jt, !1)),
      ge(e, n),
      ((Ge & 2) === 0 || e !== Je) &&
        (e === Je && ((Ge & 2) === 0 && (Ka |= n), ct === 4 && ya(e, De, Jt, !1)), bn(e)));
  }
  function Wd(e, t, n) {
    if ((Ge & 6) !== 0) throw Error(y(327));
    var a = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || ye(e, t),
      i = a ? q0(e, t) : eo(e, t, !0),
      u = a;
    do {
      if (i === 0) {
        Rl && !a && ya(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !Y0(n))) {
          ((i = eo(e, t, !1)), (u = !1));
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
              if ((j && (Ol(T, E).flags |= 256), (E = eo(T, E, !1)), E !== 2)) {
                if (ks && !j) {
                  ((T.errorRecoveryDisabledLanes |= u), (Ka |= u), (i = 4));
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
          (Ol(e, 0), ya(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (u = i), u)) {
            case 0:
            case 1:
              throw Error(y(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ya(a, t, Jt, !ma);
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
          if ((t & 62914560) === t && ((i = wu + 300 - st()), 10 < i)) {
            if ((ya(a, t, Jt, !ma), se(a, 0, !0) !== 0)) break e;
            ((Xn = t),
              (a.timeoutHandle = _m(
                Id.bind(null, a, n, jt, Nu, Fs, t, Jt, Ka, Al, ma, u, 'Throttled', -0, 0),
                i
              )));
            break e;
          }
          Id(a, n, jt, Nu, Fs, t, Jt, Ka, Al, ma, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    bn(e);
  }
  function Id(e, t, n, a, i, u, E, T, j, k, ee, ne, J, W) {
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
        Qd(t, u, ne));
      var ce = (u & 62914560) === u ? wu - st() : (u & 4194048) === u ? Jd - st() : 0;
      if (((ce = Mg(ne, ce)), ce !== null)) {
        ((Xn = u),
          (e.cancelPendingCommit = ce(
            um.bind(null, e, t, u, n, a, i, E, T, j, ee, ne, null, J, W)
          )),
          ya(e, u, E, !k));
        return;
      }
    }
    um(e, t, u, n, a, i, E, T, j);
  }
  function Y0(e) {
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
  function ya(e, t, n, a) {
    ((t &= ~Js),
      (t &= ~Ka),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var i = t; 0 < i; ) {
      var u = 31 - Dt(i),
        E = 1 << u;
      ((a[u] = -1), (i &= ~E));
    }
    n !== 0 && He(e, n, t);
  }
  function Bu() {
    return (Ge & 6) === 0 ? (xi(0), !1) : !0;
  }
  function Ps() {
    if (_e !== null) {
      if (Xe === 0) var e = _e.return;
      else ((e = _e), (zn = La = null), vs(e), (xl = null), (ti = 0), (e = _e));
      for (; e !== null; ) (Od(e.alternate, e), (e = e.return));
      _e = null;
    }
  }
  function Ol(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), ug(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (Xn = 0),
      Ps(),
      (Je = e),
      (_e = n = Dn(e.current, null)),
      (De = t),
      (Xe = 0),
      (kt = null),
      (ma = !1),
      (Rl = ye(e, t)),
      (ks = !1),
      (Al = Jt = Js = Ka = ha = ct = 0),
      (jt = yi = null),
      (Fs = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - Dt(a),
          u = 1 << i;
        ((t |= e[i]), (a &= ~u));
      }
    return ((qn = t), tu(), n);
  }
  function Pd(e, t) {
    ((Me = null),
      (A.H = oi),
      t === pl || t === ou
        ? ((t = vf()), (Xe = 3))
        : t === as
          ? ((t = vf()), (Xe = 4))
          : (Xe =
              t === ws
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (kt = t),
      _e === null && ((ct = 1), Cu(e, tn(t, e.current))));
  }
  function em() {
    var e = Zt.current;
    return e === null
      ? !0
      : (De & 4194048) === De
        ? un === null
        : (De & 62914560) === De || (De & 536870912) !== 0
          ? e === un
          : !1;
  }
  function tm() {
    var e = A.H;
    return ((A.H = oi), e === null ? oi : e);
  }
  function nm() {
    var e = A.A;
    return ((A.A = j0), e);
  }
  function Uu() {
    ((ct = 4),
      ma || ((De & 4194048) !== De && Zt.current !== null) || (Rl = !0),
      ((ha & 134217727) === 0 && (Ka & 134217727) === 0) || Je === null || ya(Je, De, Jt, !1));
  }
  function eo(e, t, n) {
    var a = Ge;
    Ge |= 2;
    var i = tm(),
      u = nm();
    ((Je !== e || De !== t) && ((Nu = null), Ol(e, t)), (t = !1));
    var E = ct;
    e: do
      try {
        if (Xe !== 0 && _e !== null) {
          var T = _e,
            j = kt;
          switch (Xe) {
            case 8:
              (Ps(), (E = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Zt.current === null && (t = !0);
              var k = Xe;
              if (((Xe = 0), (kt = null), Dl(e, T, j, k), n && Rl)) {
                E = 0;
                break e;
              }
              break;
            default:
              ((k = Xe), (Xe = 0), (kt = null), Dl(e, T, j, k));
          }
        }
        (V0(), (E = ct));
        break;
      } catch (ee) {
        Pd(e, ee);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (zn = La = null),
      (Ge = a),
      (A.H = i),
      (A.A = u),
      _e === null && ((Je = null), (De = 0), tu()),
      E
    );
  }
  function V0() {
    for (; _e !== null; ) am(_e);
  }
  function q0(e, t) {
    var n = Ge;
    Ge |= 2;
    var a = tm(),
      i = nm();
    Je !== e || De !== t ? ((Nu = null), (zu = st() + 500), Ol(e, t)) : (Rl = ye(e, t));
    e: do
      try {
        if (Xe !== 0 && _e !== null) {
          t = _e;
          var u = kt;
          t: switch (Xe) {
            case 1:
              ((Xe = 0), (kt = null), Dl(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (mf(u)) {
                ((Xe = 0), (kt = null), lm(t));
                break;
              }
              ((t = function () {
                ((Xe !== 2 && Xe !== 9) || Je !== e || (Xe = 7), bn(e));
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
              mf(u) ? ((Xe = 0), (kt = null), lm(t)) : ((Xe = 0), (kt = null), Dl(e, t, u, 7));
              break;
            case 5:
              var E = null;
              switch (_e.tag) {
                case 26:
                  E = _e.memoizedState;
                case 5:
                case 27:
                  var T = _e;
                  if (E ? Xm(E) : T.stateNode.complete) {
                    ((Xe = 0), (kt = null));
                    var j = T.sibling;
                    if (j !== null) _e = j;
                    else {
                      var k = T.return;
                      k !== null ? ((_e = k), Hu(k)) : (_e = null);
                    }
                    break t;
                  }
              }
              ((Xe = 0), (kt = null), Dl(e, t, u, 5));
              break;
            case 6:
              ((Xe = 0), (kt = null), Dl(e, t, u, 6));
              break;
            case 8:
              (Ps(), (ct = 6));
              break e;
            default:
              throw Error(y(462));
          }
        }
        X0();
        break;
      } catch (ee) {
        Pd(e, ee);
      }
    while (!0);
    return (
      (zn = La = null),
      (A.H = a),
      (A.A = i),
      (Ge = n),
      _e !== null ? 0 : ((Je = null), (De = 0), tu(), ct)
    );
  }
  function X0() {
    for (; _e !== null && !$e(); ) am(_e);
  }
  function am(e) {
    var t = Ad(e.alternate, e, qn);
    ((e.memoizedProps = e.pendingProps), t === null ? Hu(e) : (_e = t));
  }
  function lm(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ed(n, t, t.pendingProps, t.type, void 0, De);
        break;
      case 11:
        t = Ed(n, t, t.pendingProps, t.type.render, t.ref, De);
        break;
      case 5:
        vs(t);
      default:
        (Od(n, t), (t = _e = tf(t, qn)), (t = Ad(n, t, qn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Hu(e) : (_e = t));
  }
  function Dl(e, t, n, a) {
    ((zn = La = null), vs(t), (xl = null), (ti = 0));
    var i = t.return;
    try {
      if (w0(e, i, t, n, De)) {
        ((ct = 1), Cu(e, tn(n, e.current)), (_e = null));
        return;
      }
    } catch (u) {
      if (i !== null) throw ((_e = i), u);
      ((ct = 1), Cu(e, tn(n, e.current)), (_e = null));
      return;
    }
    t.flags & 32768
      ? (Ne || a === 1
          ? (e = !0)
          : Rl || (De & 536870912) !== 0
            ? (e = !1)
            : ((ma = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Zt.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        im(t, e))
      : Hu(t);
  }
  function Hu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        im(t, ma);
        return;
      }
      e = t.return;
      var n = B0(t.alternate, t, qn);
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
  function im(e, t) {
    do {
      var n = U0(e.alternate, e);
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
  function um(e, t, n, a, i, u, E, T, j) {
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
        (_l = t),
        (ga = e),
        (Xn = n),
        ($s = u),
        (Ws = i),
        (Fd = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            k0(Wt, function () {
              return (fm(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = A.T), (A.T = null), (i = N.p), (N.p = 2), (E = Ge), (Ge |= 4));
        try {
          H0(e, t, n);
        } finally {
          ((Ge = E), (N.p = i), (A.T = a));
        }
      }
      ((xt = 1), rm(), sm(), om());
    }
  }
  function rm() {
    if (xt === 1) {
      xt = 0;
      var e = ga,
        t = _l,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = A.T), (A.T = null));
        var a = N.p;
        N.p = 2;
        var i = Ge;
        Ge |= 4;
        try {
          Vd(t, e);
          var u = mo,
            E = Kc(e.containerInfo),
            T = u.focusedElem,
            j = u.selectionRange;
          if (E !== T && T && T.ownerDocument && Zc(T.ownerDocument.documentElement, T)) {
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
                    ce = T.textContent.length,
                    pe = Math.min(j.start, ce),
                    ke = j.end === void 0 ? pe : Math.min(j.end, ce);
                  !W.extend && pe > ke && ((E = ke), (ke = pe), (pe = E));
                  var Q = Qc(T, pe),
                    X = Qc(T, ke);
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
                      pe > ke
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
          ((Fu = !!fo), (mo = fo = null));
        } finally {
          ((Ge = i), (N.p = a), (A.T = n));
        }
      }
      ((e.current = t), (xt = 2));
    }
  }
  function sm() {
    if (xt === 2) {
      xt = 0;
      var e = ga,
        t = _l,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = A.T), (A.T = null));
        var a = N.p;
        N.p = 2;
        var i = Ge;
        Ge |= 4;
        try {
          Hd(e, t.alternate, t);
        } finally {
          ((Ge = i), (N.p = a), (A.T = n));
        }
      }
      xt = 3;
    }
  }
  function om() {
    if (xt === 4 || xt === 3) {
      ((xt = 0), Fa());
      var e = ga,
        t = _l,
        n = Xn,
        a = Fd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (xt = 5)
        : ((xt = 0), (_l = ga = null), cm(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (va = null),
        et(n),
        (t = t.stateNode),
        Ot && typeof Ot.onCommitFiberRoot == 'function')
      )
        try {
          Ot.onCommitFiberRoot(Oa, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = A.T), (i = N.p), (N.p = 2), (A.T = null));
        try {
          for (var u = e.onRecoverableError, E = 0; E < a.length; E++) {
            var T = a[E];
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
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Pl(t)));
  }
  function Lu() {
    return (rm(), sm(), om(), fm());
  }
  function fm() {
    if (xt !== 5) return !1;
    var e = ga,
      t = $s;
    $s = 0;
    var n = et(Xn),
      a = A.T,
      i = N.p;
    try {
      ((N.p = 32 > n ? 32 : n), (A.T = null), (n = Ws), (Ws = null));
      var u = ga,
        E = Xn;
      if (((xt = 0), (_l = ga = null), (Xn = 0), (Ge & 6) !== 0)) throw Error(y(331));
      var T = Ge;
      if (
        ((Ge |= 4),
        Kd(u.current),
        Xd(u, u.current, E, n),
        (Ge = T),
        xi(0, !1),
        Ot && typeof Ot.onPostCommitFiberRoot == 'function')
      )
        try {
          Ot.onPostCommitFiberRoot(Oa, u);
        } catch {}
      return !0;
    } finally {
      ((N.p = i), (A.T = a), cm(e, t));
    }
  }
  function dm(e, t, n) {
    ((t = tn(n, t)),
      (t = Ds(e.stateNode, t, 2)),
      (e = oa(e, t, 2)),
      e !== null && (ge(e, 2), bn(e)));
  }
  function Qe(e, t, n) {
    if (e.tag === 3) dm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          dm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (va === null || !va.has(a)))
          ) {
            ((e = tn(n, e)),
              (n = md(2)),
              (a = oa(t, n, 2)),
              a !== null && (hd(n, a, t, e), ge(a, 2), bn(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function to(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new G0();
      var i = new Set();
      a.set(t, i);
    } else ((i = a.get(t)), i === void 0 && ((i = new Set()), a.set(t, i)));
    i.has(n) || ((ks = !0), i.add(n), (e = Q0.bind(null, e, t, n)), t.then(e, e));
  }
  function Q0(e, t, n) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Je === e &&
        (De & n) === n &&
        (ct === 4 || (ct === 3 && (De & 62914560) === De && 300 > st() - wu)
          ? (Ge & 2) === 0 && Ol(e, 0)
          : (Js |= n),
        Al === De && (Al = 0)),
      bn(e));
  }
  function mm(e, t) {
    (t === 0 && (t = be()), (e = Ba(e, t)), e !== null && (ge(e, t), bn(e)));
  }
  function Z0(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), mm(e, n));
  }
  function K0(e, t) {
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
        throw Error(y(314));
    }
    (a !== null && a.delete(t), mm(e, n));
  }
  function k0(e, t) {
    return Vt(e, t);
  }
  var ju = null,
    wl = null,
    no = !1,
    Gu = !1,
    ao = !1,
    pa = 0;
  function bn(e) {
    (e !== wl && e.next === null && (wl === null ? (ju = wl = e) : (wl = wl.next = e)),
      (Gu = !0),
      no || ((no = !0), F0()));
  }
  function xi(e, t) {
    if (!ao && Gu) {
      ao = !0;
      do
        for (var n = !1, a = ju; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var E = a.suspendedLanes,
                T = a.pingedLanes;
              ((u = (1 << (31 - Dt(42 | e) + 1)) - 1),
                (u &= i & ~(E & ~T)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((n = !0), ym(a, u));
          } else
            ((u = De),
              (u = se(
                a,
                a === Je ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || ye(a, u) || ((n = !0), ym(a, u)));
          a = a.next;
        }
      while (n);
      ao = !1;
    }
  }
  function J0() {
    hm();
  }
  function hm() {
    Gu = no = !1;
    var e = 0;
    pa !== 0 && ig() && (e = pa);
    for (var t = st(), n = null, a = ju; a !== null; ) {
      var i = a.next,
        u = vm(a, t);
      (u === 0
        ? ((a.next = null), n === null ? (ju = i) : (n.next = i), i === null && (wl = n))
        : ((n = a), (e !== 0 || (u & 3) !== 0) && (Gu = !0)),
        (a = i));
    }
    ((xt !== 0 && xt !== 5) || xi(e), pa !== 0 && (pa = 0));
  }
  function vm(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        i = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var E = 31 - Dt(u),
        T = 1 << E,
        j = i[E];
      (j === -1
        ? ((T & n) === 0 || (T & a) !== 0) && (i[E] = ze(T, t))
        : j <= t && (e.expiredLanes |= T),
        (u &= ~T));
    }
    if (
      ((t = Je),
      (n = De),
      (n = se(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (a = e.callbackNode),
      n === 0 || (e === t && (Xe === 2 || Xe === 9)) || e.cancelPendingCommit !== null)
    )
      return (a !== null && a !== null && bt(a), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((n & 3) === 0 || ye(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((a !== null && bt(a), et(n))) {
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
        (a = gm.bind(null, e)),
        (n = Vt(n, a)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      a !== null && a !== null && bt(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function gm(e, t) {
    if (xt !== 0 && xt !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Lu() && e.callbackNode !== n) return null;
    var a = De;
    return (
      (a = se(e, e === Je ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      a === 0
        ? null
        : (Wd(e, a, t),
          vm(e, st()),
          e.callbackNode != null && e.callbackNode === n ? gm.bind(null, e) : null)
    );
  }
  function ym(e, t) {
    if (Lu()) return null;
    Wd(e, t, !0);
  }
  function F0() {
    rg(function () {
      (Ge & 6) !== 0 ? Vt(Mn, J0) : hm();
    });
  }
  function lo() {
    if (pa === 0) {
      var e = gl;
      (e === 0 && ((e = $a), ($a <<= 1), ($a & 261888) === 0 && ($a = 256)), (pa = e));
    }
    return pa;
  }
  function pm(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : ki('' + e);
  }
  function xm(e, t) {
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
  function $0(e, t, n, a, i) {
    if (t === 'submit' && n && n.stateNode === i) {
      var u = pm((i[tt] || null).action),
        E = a.submitter;
      E &&
        ((t = (t = E[tt] || null) ? pm(t.formAction) : E.getAttribute('formAction')),
        t !== null && ((u = t), (E = null)));
      var T = new Wi('action', 'action', null, a, i);
      e.push({
        event: T,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (pa !== 0) {
                  var j = E ? xm(i, E) : new FormData(i);
                  Ms(n, { pending: !0, data: j, method: i.method, action: u }, null, j);
                }
              } else
                typeof u == 'function' &&
                  (T.preventDefault(),
                  (j = E ? xm(i, E) : new FormData(i)),
                  Ms(n, { pending: !0, data: j, method: i.method, action: u }, u, j));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var io = 0; io < Vr.length; io++) {
    var uo = Vr[io],
      W0 = uo.toLowerCase(),
      I0 = uo[0].toUpperCase() + uo.slice(1);
    mn(W0, 'on' + I0);
  }
  (mn(Fc, 'onAnimationEnd'),
    mn($c, 'onAnimationIteration'),
    mn(Wc, 'onAnimationStart'),
    mn('dblclick', 'onDoubleClick'),
    mn('focusin', 'onFocus'),
    mn('focusout', 'onBlur'),
    mn(h0, 'onTransitionRun'),
    mn(v0, 'onTransitionStart'),
    mn(g0, 'onTransitionCancel'),
    mn(Ic, 'onTransitionEnd'),
    nl('onMouseEnter', ['mouseout', 'mouseover']),
    nl('onMouseLeave', ['mouseout', 'mouseover']),
    nl('onPointerEnter', ['pointerout', 'pointerover']),
    nl('onPointerLeave', ['pointerout', 'pointerover']),
    Da('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Da(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Da('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Da('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Da(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Da(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var Si =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    P0 = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Si)
    );
  function Sm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
        i = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var E = a.length - 1; 0 <= E; E--) {
            var T = a[E],
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
          for (E = 0; E < a.length; E++) {
            if (
              ((T = a[E]),
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
    var n = t[ta];
    n === void 0 && (n = t[ta] = new Set());
    var a = e + '__bubble';
    n.has(a) || (Em(t, e, 2, !1), n.add(a));
  }
  function ro(e, t, n) {
    var a = 0;
    (t && (a |= 4), Em(n, e, a, t));
  }
  var Yu = '_reactListening' + Math.random().toString(36).slice(2);
  function so(e) {
    if (!e[Yu]) {
      ((e[Yu] = !0),
        mc.forEach(function (n) {
          n !== 'selectionchange' && (P0.has(n) || ro(n, !1, e), ro(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Yu] || ((t[Yu] = !0), ro('selectionchange', !1, t));
    }
  }
  function Em(e, t, n, a) {
    switch ($m(t)) {
      case 2:
        var i = Ag;
        break;
      case 8:
        i = _g;
        break;
      default:
        i = Mo;
    }
    ((n = i.bind(null, t, n, e)),
      (i = void 0),
      !_r || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
      a
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1));
  }
  function oo(e, t, n, a, i) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var E = a.tag;
        if (E === 3 || E === 4) {
          var T = a.stateNode.containerInfo;
          if (T === i) break;
          if (E === 4)
            for (E = a.return; E !== null; ) {
              var j = E.tag;
              if ((j === 3 || j === 4) && E.stateNode.containerInfo === i) return;
              E = E.return;
            }
          for (; T !== null; ) {
            if (((E = Pa(T)), E === null)) return;
            if (((j = E.tag), j === 5 || j === 6 || j === 26 || j === 27)) {
              a = u = E;
              continue e;
            }
            T = T.parentNode;
          }
        }
        a = a.return;
      }
    Tc(function () {
      var k = u,
        ee = Rr(n),
        ne = [];
      e: {
        var J = Pc.get(e);
        if (J !== void 0) {
          var W = Wi,
            ce = e;
          switch (e) {
            case 'keypress':
              if (Fi(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              W = Kv;
              break;
            case 'focusin':
              ((ce = 'focus'), (W = zr));
              break;
            case 'focusout':
              ((ce = 'blur'), (W = zr));
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
              W = _c;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              W = Bv;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              W = Fv;
              break;
            case Fc:
            case $c:
            case Wc:
              W = Lv;
              break;
            case Ic:
              W = Wv;
              break;
            case 'scroll':
            case 'scrollend':
              W = zv;
              break;
            case 'wheel':
              W = Pv;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              W = Gv;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              W = Dc;
              break;
            case 'toggle':
            case 'beforetoggle':
              W = t0;
          }
          var pe = (t & 4) !== 0,
            ke = !pe && (e === 'scroll' || e === 'scrollend'),
            Q = pe ? (J !== null ? J + 'Capture' : null) : J;
          pe = [];
          for (var X = k, K; X !== null; ) {
            var te = X;
            if (
              ((K = te.stateNode),
              (te = te.tag),
              (te !== 5 && te !== 26 && te !== 27) ||
                K === null ||
                Q === null ||
                ((te = ql(X, Q)), te != null && pe.push(Ei(X, te, K))),
              ke)
            )
              break;
            X = X.return;
          }
          0 < pe.length && ((J = new W(J, ce, null, n, ee)), ne.push({ event: J, listeners: pe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((J = e === 'mouseover' || e === 'pointerover'),
            (W = e === 'mouseout' || e === 'pointerout'),
            J && n !== Tr && (ce = n.relatedTarget || n.fromElement) && (Pa(ce) || ce[zt]))
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
              ? ((ce = n.relatedTarget || n.toElement),
                (W = k),
                (ce = ce ? Pa(ce) : null),
                ce !== null &&
                  ((ke = l(ce)), (pe = ce.tag), ce !== ke || (pe !== 5 && pe !== 27 && pe !== 6)) &&
                  (ce = null))
              : ((W = null), (ce = k)),
            W !== ce)
          ) {
            if (
              ((pe = _c),
              (te = 'onMouseLeave'),
              (Q = 'onMouseEnter'),
              (X = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((pe = Dc), (te = 'onPointerLeave'), (Q = 'onPointerEnter'), (X = 'pointer')),
              (ke = W == null ? J : Vl(W)),
              (K = ce == null ? J : Vl(ce)),
              (J = new pe(te, X + 'leave', W, n, ee)),
              (J.target = ke),
              (J.relatedTarget = K),
              (te = null),
              Pa(ee) === k &&
                ((pe = new pe(Q, X + 'enter', ce, n, ee)),
                (pe.target = K),
                (pe.relatedTarget = ke),
                (te = pe)),
              (ke = te),
              W && ce)
            )
              t: {
                for (pe = eg, Q = W, X = ce, K = 0, te = Q; te; te = pe(te)) K++;
                te = 0;
                for (var he = X; he; he = pe(he)) te++;
                for (; 0 < K - te; ) ((Q = pe(Q)), K--);
                for (; 0 < te - K; ) ((X = pe(X)), te--);
                for (; K--; ) {
                  if (Q === X || (X !== null && Q === X.alternate)) {
                    pe = Q;
                    break t;
                  }
                  ((Q = pe(Q)), (X = pe(X)));
                }
                pe = null;
              }
            else pe = null;
            (W !== null && bm(ne, J, W, pe, !1),
              ce !== null && ke !== null && bm(ne, ke, ce, pe, !0));
          }
        }
        e: {
          if (
            ((J = k ? Vl(k) : window),
            (W = J.nodeName && J.nodeName.toLowerCase()),
            W === 'select' || (W === 'input' && J.type === 'file'))
          )
            var Le = jc;
          else if (Hc(J))
            if (Gc) Le = f0;
            else {
              Le = o0;
              var de = s0;
            }
          else
            ((W = J.nodeName),
              !W || W.toLowerCase() !== 'input' || (J.type !== 'checkbox' && J.type !== 'radio')
                ? k && Mr(k.elementType) && (Le = jc)
                : (Le = c0));
          if (Le && (Le = Le(e, k))) {
            Lc(ne, Le, n, ee);
            break e;
          }
          (de && de(e, J, k),
            e === 'focusout' &&
              k &&
              J.type === 'number' &&
              k.memoizedProps.value != null &&
              Cr(J, 'number', J.value));
        }
        switch (((de = k ? Vl(k) : window), e)) {
          case 'focusin':
            (Hc(de) || de.contentEditable === 'true') && ((sl = de), (jr = k), ($l = null));
            break;
          case 'focusout':
            $l = jr = sl = null;
            break;
          case 'mousedown':
            Gr = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Gr = !1), kc(ne, n, ee));
            break;
          case 'selectionchange':
            if (m0) break;
          case 'keydown':
          case 'keyup':
            kc(ne, n, ee);
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
          rl
            ? Bc(e, n) && (we = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (we = 'onCompositionStart');
        (we &&
          (wc &&
            n.locale !== 'ko' &&
            (rl || we !== 'onCompositionStart'
              ? we === 'onCompositionEnd' && rl && (Re = Rc())
              : ((na = ee), (Or = 'value' in na ? na.value : na.textContent), (rl = !0))),
          (de = Vu(k, we)),
          0 < de.length &&
            ((we = new Oc(we, e, null, n, ee)),
            ne.push({ event: we, listeners: de }),
            Re ? (we.data = Re) : ((Re = Uc(n)), Re !== null && (we.data = Re)))),
          (Re = a0 ? l0(e, n) : i0(e, n)) &&
            ((we = Vu(k, 'onBeforeInput')),
            0 < we.length &&
              ((de = new Oc('onBeforeInput', 'beforeinput', null, n, ee)),
              ne.push({ event: de, listeners: we }),
              (de.data = Re))),
          $0(ne, e, k, n, ee));
      }
      Sm(ne, t);
    });
  }
  function Ei(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Vu(e, t) {
    for (var n = t + 'Capture', a = []; e !== null; ) {
      var i = e,
        u = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          u === null ||
          ((i = ql(e, n)),
          i != null && a.unshift(Ei(e, i, u)),
          (i = ql(e, t)),
          i != null && a.push(Ei(e, i, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function eg(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function bm(e, t, n, a, i) {
    for (var u = t._reactName, E = []; n !== null && n !== a; ) {
      var T = n,
        j = T.alternate,
        k = T.stateNode;
      if (((T = T.tag), j !== null && j === a)) break;
      ((T !== 5 && T !== 26 && T !== 27) ||
        k === null ||
        ((j = k),
        i
          ? ((k = ql(n, u)), k != null && E.unshift(Ei(n, k, j)))
          : i || ((k = ql(n, u)), k != null && E.push(Ei(n, k, j)))),
        (n = n.return));
    }
    E.length !== 0 && e.push({ event: t, listeners: E });
  }
  var tg = /\r\n?/g,
    ng = /\u0000|\uFFFD/g;
  function Cm(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        tg,
        `
`
      )
      .replace(ng, '');
  }
  function Mm(e, t) {
    return ((t = Cm(t)), Cm(e) === t);
  }
  function Ke(e, t, n, a, i, u) {
    switch (n) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || ll(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && ll(e, '' + a);
        break;
      case 'className':
        Zi(e, 'class', a);
        break;
      case 'tabIndex':
        Zi(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Zi(e, n, a);
        break;
      case 'style':
        Cc(e, a, u);
        break;
      case 'data':
        if (t !== 'object') {
          Zi(e, 'data', a);
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
        ((a = ki('' + a)), e.setAttribute(n, a));
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
              ? (t !== 'input' && Ke(e, t, 'name', i.name, i, null),
                Ke(e, t, 'formEncType', i.formEncType, i, null),
                Ke(e, t, 'formMethod', i.formMethod, i, null),
                Ke(e, t, 'formTarget', i.formTarget, i, null))
              : (Ke(e, t, 'encType', i.encType, i, null),
                Ke(e, t, 'method', i.method, i, null),
                Ke(e, t, 'target', i.target, i, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        ((a = ki('' + a)), e.setAttribute(n, a));
        break;
      case 'onClick':
        a != null && (e.onclick = _n);
        break;
      case 'onScroll':
        a != null && Oe('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && Oe('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(y(61));
          if (((n = a.__html), n != null)) {
            if (i.children != null) throw Error(y(60));
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
        ((n = ki('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
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
        (Oe('beforetoggle', e), Oe('toggle', e), Qi(e, 'popover', a));
        break;
      case 'xlinkActuate':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        An(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        An(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        An(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        Qi(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = Dv.get(n) || n), Qi(e, n, a));
    }
  }
  function co(e, t, n, a, i, u) {
    switch (n) {
      case 'style':
        Cc(e, a, u);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(y(61));
          if (((n = a.__html), n != null)) {
            if (i.children != null) throw Error(y(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'children':
        typeof a == 'string'
          ? ll(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && ll(e, '' + a);
        break;
      case 'onScroll':
        a != null && Oe('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && Oe('scrollend', e);
        break;
      case 'onClick':
        a != null && (e.onclick = _n);
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
        if (!hc.hasOwnProperty(n))
          e: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((i = n.endsWith('Capture')),
              (t = n.slice(2, i ? n.length - 7 : void 0)),
              (u = e[tt] || null),
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
            n in e ? (e[n] = a) : a === !0 ? e.setAttribute(n, '') : Qi(e, n, a);
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
        var a = !1,
          i = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var E = n[u];
            if (E != null)
              switch (u) {
                case 'src':
                  a = !0;
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
        (i && Ke(e, t, 'srcSet', n.srcSet, n, null), a && Ke(e, t, 'src', n.src, n, null));
        return;
      case 'input':
        Oe('invalid', e);
        var T = (u = E = i = null),
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
                  Ke(e, t, a, ee, n, null);
              }
          }
        xc(e, u, T, j, k, E, i, !1);
        return;
      case 'select':
        (Oe('invalid', e), (a = E = u = null));
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
                a = T;
              default:
                Ke(e, t, i, T, n, null);
            }
        ((t = u),
          (n = E),
          (e.multiple = !!a),
          t != null ? al(e, !!a, t, !1) : n != null && al(e, !!a, n, !0));
        return;
      case 'textarea':
        (Oe('invalid', e), (u = i = a = null));
        for (E in n)
          if (n.hasOwnProperty(E) && ((T = n[E]), T != null))
            switch (E) {
              case 'value':
                a = T;
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
        Ec(e, a, i, u);
        return;
      case 'option':
        for (j in n)
          if (n.hasOwnProperty(j) && ((a = n[j]), a != null))
            switch (j) {
              case 'selected':
                e.selected = a && typeof a != 'function' && typeof a != 'symbol';
                break;
              default:
                Ke(e, t, j, a, n, null);
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
        for (a = 0; a < Si.length; a++) Oe(Si[a], e);
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
          if (n.hasOwnProperty(k) && ((a = n[k]), a != null))
            switch (k) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(y(137, t));
              default:
                Ke(e, t, k, a, n, null);
            }
        return;
      default:
        if (Mr(t)) {
          for (ee in n)
            n.hasOwnProperty(ee) && ((a = n[ee]), a !== void 0 && co(e, t, ee, a, n, void 0));
          return;
        }
    }
    for (T in n) n.hasOwnProperty(T) && ((a = n[T]), a != null && Ke(e, t, T, a, n, null));
  }
  function ag(e, t, n, a) {
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
                a.hasOwnProperty(W) || Ke(e, t, W, null, a, ne);
            }
        }
        for (var J in a) {
          var W = a[J];
          if (((ne = n[J]), a.hasOwnProperty(J) && (W != null || ne != null)))
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
                W !== ne && Ke(e, t, J, W, a, ne);
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
                a.hasOwnProperty(u) || Ke(e, t, u, null, a, j);
            }
        for (i in a)
          if (((u = a[i]), (j = n[i]), a.hasOwnProperty(i) && (u != null || j != null)))
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
                u !== j && Ke(e, t, i, u, a, j);
            }
        ((t = T),
          (n = E),
          (a = W),
          J != null
            ? al(e, !!n, J, !1)
            : !!a != !!n && (t != null ? al(e, !!n, t, !0) : al(e, !!n, n ? [] : '', !1)));
        return;
      case 'textarea':
        W = J = null;
        for (T in n)
          if (((i = n[T]), n.hasOwnProperty(T) && i != null && !a.hasOwnProperty(T)))
            switch (T) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Ke(e, t, T, null, a, i);
            }
        for (E in a)
          if (((i = a[E]), (u = n[E]), a.hasOwnProperty(E) && (i != null || u != null)))
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
                i !== u && Ke(e, t, E, i, a, u);
            }
        Sc(e, J, W);
        return;
      case 'option':
        for (var ce in n)
          if (((J = n[ce]), n.hasOwnProperty(ce) && J != null && !a.hasOwnProperty(ce)))
            switch (ce) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                Ke(e, t, ce, null, a, J);
            }
        for (j in a)
          if (((J = a[j]), (W = n[j]), a.hasOwnProperty(j) && J !== W && (J != null || W != null)))
            switch (j) {
              case 'selected':
                e.selected = J && typeof J != 'function' && typeof J != 'symbol';
                break;
              default:
                Ke(e, t, j, J, a, W);
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
          ((J = n[pe]),
            n.hasOwnProperty(pe) && J != null && !a.hasOwnProperty(pe) && Ke(e, t, pe, null, a, J));
        for (k in a)
          if (((J = a[k]), (W = n[k]), a.hasOwnProperty(k) && J !== W && (J != null || W != null)))
            switch (k) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (J != null) throw Error(y(137, t));
                break;
              default:
                Ke(e, t, k, J, a, W);
            }
        return;
      default:
        if (Mr(t)) {
          for (var ke in n)
            ((J = n[ke]),
              n.hasOwnProperty(ke) &&
                J !== void 0 &&
                !a.hasOwnProperty(ke) &&
                co(e, t, ke, void 0, a, J));
          for (ee in a)
            ((J = a[ee]),
              (W = n[ee]),
              !a.hasOwnProperty(ee) ||
                J === W ||
                (J === void 0 && W === void 0) ||
                co(e, t, ee, J, a, W));
          return;
        }
    }
    for (var Q in n)
      ((J = n[Q]),
        n.hasOwnProperty(Q) && J != null && !a.hasOwnProperty(Q) && Ke(e, t, Q, null, a, J));
    for (ne in a)
      ((J = a[ne]),
        (W = n[ne]),
        !a.hasOwnProperty(ne) || J === W || (J == null && W == null) || Ke(e, t, ne, J, a, W));
  }
  function Tm(e) {
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
        var e = 0, t = 0, n = performance.getEntriesByType('resource'), a = 0;
        a < n.length;
        a++
      ) {
        var i = n[a],
          u = i.transferSize,
          E = i.initiatorType,
          T = i.duration;
        if (u && T && Tm(E)) {
          for (E = 0, T = i.responseEnd, a += 1; a < n.length; a++) {
            var j = n[a],
              k = j.startTime;
            if (k > T) break;
            var ee = j.transferSize,
              ne = j.initiatorType;
            ee && Tm(ne) && ((j = j.responseEnd), (E += ee * (j < T ? 1 : (T - k) / (j - k))));
          }
          if ((--a, (t += (8 * (u + E)) / (i.duration / 1e3)), e++, 10 < e)) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && ((e = navigator.connection.downlink), typeof e == 'number')
      ? e
      : 5;
  }
  var fo = null,
    mo = null;
  function qu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Rm(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Am(e, t) {
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
  function ho(e, t) {
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
  var vo = null;
  function ig() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === vo ? !1 : ((vo = e), !0)) : ((vo = null), !1);
  }
  var _m = typeof setTimeout == 'function' ? setTimeout : void 0,
    ug = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Om = typeof Promise == 'function' ? Promise : void 0,
    rg =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Om < 'u'
          ? function (e) {
              return Om.resolve(null).then(e).catch(sg);
            }
          : _m;
  function sg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function xa(e) {
    return e === 'head';
  }
  function Dm(e, t) {
    var n = t,
      a = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === '/$' || n === '/&')) {
          if (a === 0) {
            (e.removeChild(i), Ul(t));
            return;
          }
          a--;
        } else if (n === '$' || n === '$?' || n === '$~' || n === '$!' || n === '&') a++;
        else if (n === 'html') bi(e.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = e.ownerDocument.head), bi(n));
          for (var u = n.firstChild; u; ) {
            var E = u.nextSibling,
              T = u.nodeName;
            (u[Yl] ||
              T === 'SCRIPT' ||
              T === 'STYLE' ||
              (T === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(u),
              (u = E));
          }
        } else n === 'body' && bi(e.ownerDocument.body);
      n = i;
    } while (n);
    Ul(t);
  }
  function wm(e, t) {
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
  function go(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (go(n), Sr(n));
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
  function og(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (a) {
        if (!e[Yl])
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
  function zm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
        ((e = rn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function yo(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function po(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
  }
  function fg(e, t) {
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
  var xo = null;
  function Nm(e) {
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
  function Bm(e) {
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
  function Um(e, t, n) {
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
    Hm = new Set();
  function Xu(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Qn = N.d;
  N.d = { f: dg, r: mg, D: hg, C: vg, L: gg, m: yg, X: xg, S: pg, M: Sg };
  function dg() {
    var e = Qn.f(),
      t = Bu();
    return e || t;
  }
  function mg(e) {
    var t = el(e);
    t !== null && t.tag === 5 && t.type === 'form' ? Pf(t) : Qn.r(e);
  }
  var zl = typeof document > 'u' ? null : document;
  function Lm(e, t, n) {
    var a = zl;
    if (a && typeof t == 'string' && t) {
      var i = Pt(t);
      ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof n == 'string' && (i += '[crossorigin="' + n + '"]'),
        Hm.has(i) ||
          (Hm.add(i),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(i) === null &&
            ((t = a.createElement('link')), Rt(t, 'link', e), St(t), a.head.appendChild(t))));
    }
  }
  function hg(e) {
    (Qn.D(e), Lm('dns-prefetch', e, null));
  }
  function vg(e, t) {
    (Qn.C(e, t), Lm('preconnect', e, t));
  }
  function gg(e, t, n) {
    Qn.L(e, t, n);
    var a = zl;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + Pt(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((i += '[imagesrcset="' + Pt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (i += '[imagesizes="' + Pt(n.imageSizes) + '"]'))
        : (i += '[href="' + Pt(e) + '"]');
      var u = i;
      switch (t) {
        case 'style':
          u = Nl(e);
          break;
        case 'script':
          u = Bl(e);
      }
      sn.has(u) ||
        ((e = h(
          { rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t },
          n
        )),
        sn.set(u, e),
        a.querySelector(i) !== null ||
          (t === 'style' && a.querySelector(Ci(u))) ||
          (t === 'script' && a.querySelector(Mi(u))) ||
          ((t = a.createElement('link')), Rt(t, 'link', e), St(t), a.head.appendChild(t)));
    }
  }
  function yg(e, t) {
    Qn.m(e, t);
    var n = zl;
    if (n && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        i = 'link[rel="modulepreload"][as="' + Pt(a) + '"][href="' + Pt(e) + '"]',
        u = i;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Bl(e);
      }
      if (
        !sn.has(u) &&
        ((e = h({ rel: 'modulepreload', href: e }, t)), sn.set(u, e), n.querySelector(i) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(Mi(u))) return;
        }
        ((a = n.createElement('link')), Rt(a, 'link', e), St(a), n.head.appendChild(a));
      }
    }
  }
  function pg(e, t, n) {
    Qn.S(e, t, n);
    var a = zl;
    if (a && e) {
      var i = tl(a).hoistableStyles,
        u = Nl(e);
      t = t || 'default';
      var E = i.get(u);
      if (!E) {
        var T = { loading: 0, preload: null };
        if ((E = a.querySelector(Ci(u)))) T.loading = 5;
        else {
          ((e = h({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = sn.get(u)) && So(e, n));
          var j = (E = a.createElement('link'));
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
            Qu(E, t, a));
        }
        ((E = { type: 'stylesheet', instance: E, count: 1, state: T }), i.set(u, E));
      }
    }
  }
  function xg(e, t) {
    Qn.X(e, t);
    var n = zl;
    if (n && e) {
      var a = tl(n).hoistableScripts,
        i = Bl(e),
        u = a.get(i);
      u ||
        ((u = n.querySelector(Mi(i))),
        u ||
          ((e = h({ src: e, async: !0 }, t)),
          (t = sn.get(i)) && Eo(e, t),
          (u = n.createElement('script')),
          St(u),
          Rt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(i, u));
    }
  }
  function Sg(e, t) {
    Qn.M(e, t);
    var n = zl;
    if (n && e) {
      var a = tl(n).hoistableScripts,
        i = Bl(e),
        u = a.get(i);
      u ||
        ((u = n.querySelector(Mi(i))),
        u ||
          ((e = h({ src: e, async: !0, type: 'module' }, t)),
          (t = sn.get(i)) && Eo(e, t),
          (u = n.createElement('script')),
          St(u),
          Rt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(i, u));
    }
  }
  function jm(e, t, n, a) {
    var i = (i = oe.current) ? Xu(i) : null;
    if (!i) throw Error(y(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = Nl(n.href)),
            (n = tl(i).hoistableStyles),
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
          e = Nl(n.href);
          var u = tl(i).hoistableStyles,
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
                u || Eg(i, e, n, E.state))),
            t && a === null)
          )
            throw Error(y(528, ''));
          return E;
        }
        if (t && a !== null) throw Error(y(529, ''));
        return null;
      case 'script':
        return (
          (t = n.async),
          (n = n.src),
          typeof n == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = Bl(n)),
              (n = tl(i).hoistableScripts),
              (a = n.get(t)),
              a || ((a = { type: 'script', instance: null, count: 0, state: null }), n.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(y(444, e));
    }
  }
  function Nl(e) {
    return 'href="' + Pt(e) + '"';
  }
  function Ci(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Gm(e) {
    return h({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function Eg(e, t, n, a) {
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
        St(t),
        e.head.appendChild(t));
  }
  function Bl(e) {
    return '[src="' + Pt(e) + '"]';
  }
  function Mi(e) {
    return 'script[async]' + e;
  }
  function Ym(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + Pt(n.href) + '"]');
          if (a) return ((t.instance = a), St(a), a);
          var i = h({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            St(a),
            Rt(a, 'style', i),
            Qu(a, n.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          i = Nl(n.href);
          var u = e.querySelector(Ci(i));
          if (u) return ((t.state.loading |= 4), (t.instance = u), St(u), u);
          ((a = Gm(n)),
            (i = sn.get(i)) && So(a, i),
            (u = (e.ownerDocument || e).createElement('link')),
            St(u));
          var E = u;
          return (
            (E._p = new Promise(function (T, j) {
              ((E.onload = T), (E.onerror = j));
            })),
            Rt(u, 'link', a),
            (t.state.loading |= 4),
            Qu(u, n.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = Bl(n.src)),
            (i = e.querySelector(Mi(u)))
              ? ((t.instance = i), St(i), i)
              : ((a = n),
                (i = sn.get(u)) && ((a = h({}, n)), Eo(a, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement('script')),
                St(i),
                Rt(i, 'link', a),
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
        ((a = t.instance), (t.state.loading |= 4), Qu(a, n.precedence, e));
    return t.instance;
  }
  function Qu(e, t, n) {
    for (
      var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        i = a.length ? a[a.length - 1] : null,
        u = i,
        E = 0;
      E < a.length;
      E++
    ) {
      var T = a[E];
      if (T.dataset.precedence === t) u = T;
      else if (u !== i) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function So(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Eo(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Zu = null;
  function Vm(e, t, n) {
    if (Zu === null) {
      var a = new Map(),
        i = (Zu = new Map());
      i.set(n, a);
    } else ((i = Zu), (a = i.get(n)), a || ((a = new Map()), i.set(n, a)));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var u = n[i];
      if (
        !(u[Yl] || u[We] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var E = u.getAttribute(t) || '';
        E = e + E;
        var T = a.get(E);
        T ? T.push(u) : a.set(E, [u]);
      }
    }
    return a;
  }
  function qm(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null));
  }
  function bg(e, t, n) {
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
  function Xm(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function Cg(e, t, n, a) {
    if (
      n.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var i = Nl(a.href),
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
          (a = Gm(a)),
          (i = sn.get(i)) && So(a, i),
          (u = u.createElement('link')),
          St(u));
        var E = u;
        ((E._p = new Promise(function (T, j) {
          ((E.onload = T), (E.onerror = j));
        })),
          Rt(u, 'link', a),
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
  var bo = 0;
  function Mg(e, t) {
    return (
      e.stylesheets && e.count === 0 && Ju(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && Ju(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && bo === 0 && (bo = 62500 * lg());
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
              (e.imgBytes > bo ? 50 : 800) + t
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
        (e.count++, (ku = new Map()), t.forEach(Tg, e), (ku = null), Ku.call(e)));
  }
  function Tg(e, t) {
    if (!(t.state.loading & 4)) {
      var n = ku.get(e);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), ku.set(e, n));
        for (
          var i = e.querySelectorAll('link[data-precedence],style[data-precedence]'), u = 0;
          u < i.length;
          u++
        ) {
          var E = i[u];
          (E.nodeName === 'LINK' || E.getAttribute('media') !== 'not all') &&
            (n.set(E.dataset.precedence, E), (a = E));
        }
        a && n.set(null, a);
      }
      ((i = t.instance),
        (E = i.getAttribute('data-precedence')),
        (u = n.get(E) || a),
        u === a && n.set(null, i),
        n.set(E, i),
        this.count++,
        (a = Ku.bind(this)),
        i.addEventListener('load', a),
        i.addEventListener('error', a),
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
  function Rg(e, t, n, a, i, u, E, T, j) {
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
      (this.identifierPrefix = a),
      (this.onUncaughtError = i),
      (this.onCaughtError = u),
      (this.onRecoverableError = E),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = j),
      (this.incompleteTransitions = new Map()));
  }
  function Qm(e, t, n, a, i, u, E, T, j, k, ee, ne) {
    return (
      (e = new Rg(e, t, n, E, j, k, ee, ne, T)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = Qt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = es()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: n, cache: t }),
      ls(u),
      e
    );
  }
  function Zm(e) {
    return e ? ((e = fl), e) : fl;
  }
  function Km(e, t, n, a, i, u) {
    ((i = Zm(i)),
      a.context === null ? (a.context = i) : (a.pendingContext = i),
      (a = sa(t)),
      (a.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (n = oa(e, a, t)),
      n !== null && (Gt(n, e, t), ai(n, e, t)));
  }
  function km(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Co(e, t) {
    (km(e, t), (e = e.alternate) && km(e, t));
  }
  function Jm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ba(e, 67108864);
      (t !== null && Gt(t, e, 67108864), Co(e, 67108864));
    }
  }
  function Fm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ft();
      t = lt(t);
      var n = Ba(e, t);
      (n !== null && Gt(n, e, t), Co(e, t));
    }
  }
  var Fu = !0;
  function Ag(e, t, n, a) {
    var i = A.T;
    A.T = null;
    var u = N.p;
    try {
      ((N.p = 2), Mo(e, t, n, a));
    } finally {
      ((N.p = u), (A.T = i));
    }
  }
  function _g(e, t, n, a) {
    var i = A.T;
    A.T = null;
    var u = N.p;
    try {
      ((N.p = 8), Mo(e, t, n, a));
    } finally {
      ((N.p = u), (A.T = i));
    }
  }
  function Mo(e, t, n, a) {
    if (Fu) {
      var i = To(a);
      if (i === null) (oo(e, t, a, $u, n), Wm(e, a));
      else if (Dg(i, e, t, n, a)) a.stopPropagation();
      else if ((Wm(e, a), t & 4 && -1 < Og.indexOf(e))) {
        for (; i !== null; ) {
          var u = el(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var E = Rn(u.pendingLanes);
                  if (E !== 0) {
                    var T = u;
                    for (T.pendingLanes |= 2, T.entangledLanes |= 2; E; ) {
                      var j = 1 << (31 - Dt(E));
                      ((T.entanglements[1] |= j), (E &= ~j));
                    }
                    (bn(u), (Ge & 6) === 0 && ((zu = st() + 500), xi(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((T = Ba(u, 2)), T !== null && Gt(T, u, 2), Bu(), Co(u, 2));
            }
          if (((u = To(a)), u === null && oo(e, t, a, $u, n), u === i)) break;
          i = u;
        }
        i !== null && a.stopPropagation();
      } else oo(e, t, a, null, n);
    }
  }
  function To(e) {
    return ((e = Rr(e)), Ro(e));
  }
  var $u = null;
  function Ro(e) {
    if ((($u = null), (e = Pa(e)), e !== null)) {
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
    return (($u = e), null);
  }
  function $m(e) {
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
        switch (_a()) {
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
  var Ao = !1,
    Sa = null,
    Ea = null,
    ba = null,
    Ri = new Map(),
    Ai = new Map(),
    Ca = [],
    Og =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function Wm(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Sa = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Ea = null;
        break;
      case 'mouseover':
      case 'mouseout':
        ba = null;
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
  function _i(e, t, n, a, i, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [i],
        }),
        t !== null && ((t = el(t)), t !== null && Jm(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function Dg(e, t, n, a, i) {
    switch (t) {
      case 'focusin':
        return ((Sa = _i(Sa, e, t, n, a, i)), !0);
      case 'dragenter':
        return ((Ea = _i(Ea, e, t, n, a, i)), !0);
      case 'mouseover':
        return ((ba = _i(ba, e, t, n, a, i)), !0);
      case 'pointerover':
        var u = i.pointerId;
        return (Ri.set(u, _i(Ri.get(u) || null, e, t, n, a, i)), !0);
      case 'gotpointercapture':
        return ((u = i.pointerId), Ai.set(u, _i(Ai.get(u) || null, e, t, n, a, i)), !0);
    }
    return !1;
  }
  function Im(e) {
    var t = Pa(e.target);
    if (t !== null) {
      var n = l(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = c(n)), t !== null)) {
            ((e.blockedOn = t),
              it(e.priority, function () {
                Fm(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              it(e.priority, function () {
                Fm(n);
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
      var n = To(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((Tr = a), n.target.dispatchEvent(a), (Tr = null));
      } else return ((t = el(n)), t !== null && Jm(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Pm(e, t, n) {
    Wu(e) && n.delete(t);
  }
  function wg() {
    ((Ao = !1),
      Sa !== null && Wu(Sa) && (Sa = null),
      Ea !== null && Wu(Ea) && (Ea = null),
      ba !== null && Wu(ba) && (ba = null),
      Ri.forEach(Pm),
      Ai.forEach(Pm));
  }
  function Iu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ao || ((Ao = !0), s.unstable_scheduleCallback(s.unstable_NormalPriority, wg)));
  }
  var Pu = null;
  function eh(e) {
    Pu !== e &&
      ((Pu = e),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        Pu === e && (Pu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            a = e[t + 1],
            i = e[t + 2];
          if (typeof a != 'function') {
            if (Ro(a || n) === null) continue;
            break;
          }
          var u = el(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Ms(u, { pending: !0, data: i, method: n.method, action: a }, a, i));
        }
      }));
  }
  function Ul(e) {
    function t(j) {
      return Iu(j, e);
    }
    (Sa !== null && Iu(Sa, e),
      Ea !== null && Iu(Ea, e),
      ba !== null && Iu(ba, e),
      Ri.forEach(t),
      Ai.forEach(t));
    for (var n = 0; n < Ca.length; n++) {
      var a = Ca[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Ca.length && ((n = Ca[0]), n.blockedOn === null); )
      (Im(n), n.blockedOn === null && Ca.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var i = n[a],
          u = n[a + 1],
          E = i[tt] || null;
        if (typeof u == 'function') E || eh(n);
        else if (E) {
          var T = null;
          if (u && u.hasAttribute('formAction')) {
            if (((i = u), (E = u[tt] || null))) T = E.formAction;
            else if (Ro(i) !== null) continue;
          } else T = E.action;
          (typeof T == 'function' ? (n[a + 1] = T) : (n.splice(a, 3), (a -= 3)), eh(n));
        }
      }
  }
  function th() {
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
  function _o(e) {
    this._internalRoot = e;
  }
  ((er.prototype.render = _o.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(y(409));
      var n = t.current,
        a = Ft();
      Km(n, a, e, t, null, null);
    }),
    (er.prototype.unmount = _o.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Km(e.current, 2, null, e, null, null), Bu(), (t[zt] = null));
        }
      }));
  function er(e) {
    this._internalRoot = e;
  }
  er.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = wt();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ca.length && t !== 0 && t < Ca[n].priority; n++);
      (Ca.splice(n, 0, e), n === 0 && Im(e));
    }
  };
  var nh = S.version;
  if (nh !== '19.2.5') throw Error(y(527, nh, '19.2.5'));
  N.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(y(188))
        : ((e = Object.keys(e).join(',')), Error(y(268, e)));
    return ((e = v(t)), (e = e !== null ? m(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var zg = {
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
        ((Oa = tr.inject(zg)), (Ot = tr));
      } catch {}
  }
  return (
    (Di.createRoot = function (e, t) {
      if (!o(e)) throw Error(y(299));
      var n = !1,
        a = '',
        i = od,
        u = cd,
        E = fd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (E = t.onRecoverableError)),
        (t = Qm(e, 1, !1, null, null, n, a, null, i, u, E, th)),
        (e[zt] = t.current),
        so(e),
        new _o(t)
      );
    }),
    (Di.hydrateRoot = function (e, t, n) {
      if (!o(e)) throw Error(y(299));
      var a = !1,
        i = '',
        u = od,
        E = cd,
        T = fd,
        j = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (E = n.onCaughtError),
          n.onRecoverableError !== void 0 && (T = n.onRecoverableError),
          n.formState !== void 0 && (j = n.formState)),
        (t = Qm(e, 1, !0, t, n ?? null, a, i, j, u, E, T, th)),
        (t.context = Zm(null)),
        (n = t.current),
        (a = Ft()),
        (a = lt(a)),
        (i = sa(a)),
        (i.callback = null),
        oa(n, i, a),
        (n = a),
        (t.current.lanes = n),
        ge(t, n),
        bn(t),
        (e[zt] = t.current),
        so(e),
        new er(t)
      );
    }),
    (Di.version = '19.2.5'),
    Di
  );
}
var mh;
function Xg() {
  if (mh) return Do.exports;
  mh = 1;
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
  return (s(), (Do.exports = qg()), Do.exports);
}
var Qg = Xg(),
  H = ec();
/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var hh = 'popstate';
function vh(s) {
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
function Zg(s = {}) {
  function S(y, o) {
    var v;
    let l = (v = o.state) == null ? void 0 : v.masked,
      { pathname: c, search: d, hash: f } = l || y.location;
    return ko(
      '',
      { pathname: c, search: d, hash: f },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default',
      l
        ? { pathname: y.location.pathname, search: y.location.search, hash: y.location.hash }
        : void 0
    );
  }
  function b(y, o) {
    return typeof o == 'string' ? o : ji(o);
  }
  return kg(S, b, null, s);
}
function rt(s, S) {
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
function Kg() {
  return Math.random().toString(36).substring(2, 10);
}
function gh(s, S) {
  return {
    usr: s.state,
    key: s.key,
    idx: S,
    masked: s.unstable_mask ? { pathname: s.pathname, search: s.search, hash: s.hash } : void 0,
  };
}
function ko(s, S, b = null, y, o) {
  return {
    pathname: typeof s == 'string' ? s : s.pathname,
    search: '',
    hash: '',
    ...(typeof S == 'string' ? Hl(S) : S),
    state: b,
    key: (S && S.key) || y || Kg(),
    unstable_mask: o,
  };
}
function ji({ pathname: s = '/', search: S = '', hash: b = '' }) {
  return (
    S && S !== '?' && (s += S.charAt(0) === '?' ? S : '?' + S),
    b && b !== '#' && (s += b.charAt(0) === '#' ? b : '#' + b),
    s
  );
}
function Hl(s) {
  let S = {};
  if (s) {
    let b = s.indexOf('#');
    b >= 0 && ((S.hash = s.substring(b)), (s = s.substring(0, b)));
    let y = s.indexOf('?');
    (y >= 0 && ((S.search = s.substring(y)), (s = s.substring(0, y))), s && (S.pathname = s));
  }
  return S;
}
function kg(s, S, b, y = {}) {
  let { window: o = document.defaultView, v5Compat: l = !1 } = y,
    c = o.history,
    d = 'POP',
    f = null,
    v = m();
  v == null && ((v = 0), c.replaceState({ ...c.state, idx: v }, ''));
  function m() {
    return (c.state || { idx: null }).idx;
  }
  function h() {
    d = 'POP';
    let C = m(),
      R = C == null ? null : C - v;
    ((v = C), f && f({ action: d, location: p.location, delta: R }));
  }
  function g(C, R) {
    d = 'PUSH';
    let w = vh(C) ? C : ko(p.location, C, R);
    v = m() + 1;
    let U = gh(w, v),
      G = p.createHref(w.unstable_mask || w);
    try {
      c.pushState(U, '', G);
    } catch (M) {
      if (M instanceof DOMException && M.name === 'DataCloneError') throw M;
      o.location.assign(G);
    }
    l && f && f({ action: d, location: p.location, delta: 1 });
  }
  function r(C, R) {
    d = 'REPLACE';
    let w = vh(C) ? C : ko(p.location, C, R);
    v = m();
    let U = gh(w, v),
      G = p.createHref(w.unstable_mask || w);
    (c.replaceState(U, '', G), l && f && f({ action: d, location: p.location, delta: 0 }));
  }
  function x(C) {
    return Jg(C);
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
        o.addEventListener(hh, h),
        (f = C),
        () => {
          (o.removeEventListener(hh, h), (f = null));
        }
      );
    },
    createHref(C) {
      return S(o, C);
    },
    createURL: x,
    encodeLocation(C) {
      let R = x(C);
      return { pathname: R.pathname, search: R.search, hash: R.hash };
    },
    push: g,
    replace: r,
    go(C) {
      return c.go(C);
    },
  };
  return p;
}
function Jg(s, S = !1) {
  let b = 'http://localhost';
  (typeof window < 'u' &&
    (b = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    rt(b, 'No window.location.(origin|href) available to create URL'));
  let y = typeof s == 'string' ? s : ji(s);
  return ((y = y.replace(/ $/, '%20')), !S && y.startsWith('//') && (y = b + y), new URL(y, b));
}
function Hh(s, S, b = '/') {
  return Fg(s, S, b, !1);
}
function Fg(s, S, b, y) {
  let o = typeof S == 'string' ? Hl(S) : S,
    l = Wn(o.pathname || '/', b);
  if (l == null) return null;
  let c = Lh(s);
  $g(c);
  let d = null;
  for (let f = 0; d == null && f < c.length; ++f) {
    let v = ry(l);
    d = iy(c[f], v, y);
  }
  return d;
}
function Lh(s, S = [], b = [], y = '', o = !1) {
  let l = (c, d, f = o, v) => {
    let m = {
      relativePath: v === void 0 ? c.path || '' : v,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: d,
      route: c,
    };
    if (m.relativePath.startsWith('/')) {
      if (!m.relativePath.startsWith(y) && f) return;
      (rt(
        m.relativePath.startsWith(y),
        `Absolute route path "${m.relativePath}" nested under path "${y}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (m.relativePath = m.relativePath.slice(y.length)));
    }
    let h = gn([y, m.relativePath]),
      g = b.concat(m);
    (c.children &&
      c.children.length > 0 &&
      (rt(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${h}".`
      ),
      Lh(c.children, S, g, h, f)),
      !(c.path == null && !c.index) && S.push({ path: h, score: ay(h, c.index), routesMeta: g }));
  };
  return (
    s.forEach((c, d) => {
      var f;
      if (c.path === '' || !((f = c.path) != null && f.includes('?'))) l(c, d);
      else for (let v of jh(c.path)) l(c, d, !0, v);
    }),
    S
  );
}
function jh(s) {
  let S = s.split('/');
  if (S.length === 0) return [];
  let [b, ...y] = S,
    o = b.endsWith('?'),
    l = b.replace(/\?$/, '');
  if (y.length === 0) return o ? [l, ''] : [l];
  let c = jh(y.join('/')),
    d = [];
  return (
    d.push(...c.map((f) => (f === '' ? l : [l, f].join('/')))),
    o && d.push(...c),
    d.map((f) => (s.startsWith('/') && f === '' ? '/' : f))
  );
}
function $g(s) {
  s.sort((S, b) =>
    S.score !== b.score
      ? b.score - S.score
      : ly(
          S.routesMeta.map((y) => y.childrenIndex),
          b.routesMeta.map((y) => y.childrenIndex)
        )
  );
}
var Wg = /^:[\w-]+$/,
  Ig = 3,
  Pg = 2,
  ey = 1,
  ty = 10,
  ny = -2,
  yh = (s) => s === '*';
function ay(s, S) {
  let b = s.split('/'),
    y = b.length;
  return (
    b.some(yh) && (y += ny),
    S && (y += Pg),
    b.filter((o) => !yh(o)).reduce((o, l) => o + (Wg.test(l) ? Ig : l === '' ? ey : ty), y)
  );
}
function ly(s, S) {
  return s.length === S.length && s.slice(0, -1).every((y, o) => y === S[o])
    ? s[s.length - 1] - S[S.length - 1]
    : 0;
}
function iy(s, S, b = !1) {
  let { routesMeta: y } = s,
    o = {},
    l = '/',
    c = [];
  for (let d = 0; d < y.length; ++d) {
    let f = y[d],
      v = d === y.length - 1,
      m = l === '/' ? S : S.slice(l.length) || '/',
      h = sr({ path: f.relativePath, caseSensitive: f.caseSensitive, end: v }, m),
      g = f.route;
    if (
      (!h &&
        v &&
        b &&
        !y[y.length - 1].route.index &&
        (h = sr({ path: f.relativePath, caseSensitive: f.caseSensitive, end: !1 }, m)),
      !h)
    )
      return null;
    (Object.assign(o, h.params),
      c.push({
        params: o,
        pathname: gn([l, h.pathname]),
        pathnameBase: fy(gn([l, h.pathnameBase])),
        route: g,
      }),
      h.pathnameBase !== '/' && (l = gn([l, h.pathnameBase])));
  }
  return c;
}
function sr(s, S) {
  typeof s == 'string' && (s = { path: s, caseSensitive: !1, end: !0 });
  let [b, y] = uy(s.path, s.caseSensitive, s.end),
    o = S.match(b);
  if (!o) return null;
  let l = o[0],
    c = l.replace(/(.)\/+$/, '$1'),
    d = o.slice(1);
  return {
    params: y.reduce((v, { paramName: m, isOptional: h }, g) => {
      if (m === '*') {
        let x = d[g] || '';
        c = l.slice(0, l.length - x.length).replace(/(.)\/+$/, '$1');
      }
      const r = d[g];
      return (h && !r ? (v[m] = void 0) : (v[m] = (r || '').replace(/%2F/g, '/')), v);
    }, {}),
    pathname: l,
    pathnameBase: c,
    pattern: s,
  };
}
function uy(s, S = !1, b = !0) {
  Cn(
    s === '*' || !s.endsWith('*') || s.endsWith('/*'),
    `Route path "${s}" will be treated as if it were "${s.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/, '/*')}".`
  );
  let y = [],
    o =
      '^' +
      s
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(/\/:([\w-]+)(\?)?/g, (c, d, f, v, m) => {
          if ((y.push({ paramName: d, isOptional: f != null }), f)) {
            let h = m.charAt(v + c.length);
            return h && h !== '/' ? '/([^\\/]*)' : '(?:/([^\\/]*))?';
          }
          return '/([^\\/]+)';
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    s.endsWith('*')
      ? (y.push({ paramName: '*' }), (o += s === '*' || s === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : b
        ? (o += '\\/*$')
        : s !== '' && s !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, S ? void 0 : 'i'), y]
  );
}
function ry(s) {
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
var sy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function oy(s, S = '/') {
  let { pathname: b, search: y = '', hash: o = '' } = typeof s == 'string' ? Hl(s) : s,
    l;
  return (
    b ? ((b = Yh(b)), b.startsWith('/') ? (l = ph(b.substring(1), '/')) : (l = ph(b, S))) : (l = S),
    { pathname: l, search: dy(y), hash: my(o) }
  );
}
function ph(s, S) {
  let b = or(S).split('/');
  return (
    s.split('/').forEach((o) => {
      o === '..' ? b.length > 1 && b.pop() : o !== '.' && b.push(o);
    }),
    b.length > 1 ? b.join('/') : '/'
  );
}
function Uo(s, S, b, y) {
  return `Cannot include a '${s}' character in a manually specified \`to.${S}\` field [${JSON.stringify(y)}].  Please separate it out to the \`to.${b}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function cy(s) {
  return s.filter((S, b) => b === 0 || (S.route.path && S.route.path.length > 0));
}
function Gh(s) {
  let S = cy(s);
  return S.map((b, y) => (y === S.length - 1 ? b.pathname : b.pathnameBase));
}
function tc(s, S, b, y = !1) {
  let o;
  typeof s == 'string'
    ? (o = Hl(s))
    : ((o = { ...s }),
      rt(!o.pathname || !o.pathname.includes('?'), Uo('?', 'pathname', 'search', o)),
      rt(!o.pathname || !o.pathname.includes('#'), Uo('#', 'pathname', 'hash', o)),
      rt(!o.search || !o.search.includes('#'), Uo('#', 'search', 'hash', o)));
  let l = s === '' || o.pathname === '',
    c = l ? '/' : o.pathname,
    d;
  if (c == null) d = b;
  else {
    let h = S.length - 1;
    if (!y && c.startsWith('..')) {
      let g = c.split('/');
      for (; g[0] === '..'; ) (g.shift(), (h -= 1));
      o.pathname = g.join('/');
    }
    d = h >= 0 ? S[h] : '/';
  }
  let f = oy(o, d),
    v = c && c !== '/' && c.endsWith('/'),
    m = (l || c === '.') && b.endsWith('/');
  return (!f.pathname.endsWith('/') && (v || m) && (f.pathname += '/'), f);
}
var Yh = (s) => s.replace(/\/\/+/g, '/'),
  gn = (s) => Yh(s.join('/')),
  or = (s) => s.replace(/\/+$/, ''),
  fy = (s) => or(s).replace(/^\/*/, '/'),
  dy = (s) => (!s || s === '?' ? '' : s.startsWith('?') ? s : '?' + s),
  my = (s) => (!s || s === '#' ? '' : s.startsWith('#') ? s : '#' + s),
  hy = class {
    constructor(s, S, b, y = !1) {
      ((this.status = s),
        (this.statusText = S || ''),
        (this.internal = y),
        b instanceof Error ? ((this.data = b.toString()), (this.error = b)) : (this.data = b));
    }
  };
function vy(s) {
  return (
    s != null &&
    typeof s.status == 'number' &&
    typeof s.statusText == 'string' &&
    typeof s.internal == 'boolean' &&
    'data' in s
  );
}
function gy(s) {
  let S = s.map((b) => b.route.path).filter(Boolean);
  return gn(S) || '/';
}
var Vh =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function qh(s, S) {
  let b = s;
  if (typeof b != 'string' || !sy.test(b)) return { absoluteURL: void 0, isExternal: !1, to: b };
  let y = b,
    o = !1;
  if (Vh)
    try {
      let l = new URL(window.location.href),
        c = b.startsWith('//') ? new URL(l.protocol + b) : new URL(b),
        d = Wn(c.pathname, S);
      c.origin === l.origin && d != null ? (b = d + c.search + c.hash) : (o = !0);
    } catch {
      Cn(
        !1,
        `<Link to="${b}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: y, isExternal: o, to: b };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var Xh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Xh);
var yy = ['GET', ...Xh];
new Set(yy);
var Ll = H.createContext(null);
Ll.displayName = 'DataRouter';
var fr = H.createContext(null);
fr.displayName = 'DataRouterState';
var Qh = H.createContext(!1);
function py() {
  return H.useContext(Qh);
}
var Zh = H.createContext({ isTransitioning: !1 });
Zh.displayName = 'ViewTransition';
var xy = H.createContext(new Map());
xy.displayName = 'Fetchers';
var Sy = H.createContext(null);
Sy.displayName = 'Await';
var dn = H.createContext(null);
dn.displayName = 'Navigation';
var Gi = H.createContext(null);
Gi.displayName = 'Location';
var In = H.createContext({ outlet: null, matches: [], isDataRoute: !1 });
In.displayName = 'Route';
var nc = H.createContext(null);
nc.displayName = 'RouteError';
var Kh = 'REACT_ROUTER_ERROR',
  Ey = 'REDIRECT',
  by = 'ROUTE_ERROR_RESPONSE';
function Cy(s) {
  if (s.startsWith(`${Kh}:${Ey}:{`))
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
function My(s) {
  if (s.startsWith(`${Kh}:${by}:{`))
    try {
      let S = JSON.parse(s.slice(40));
      if (
        typeof S == 'object' &&
        S &&
        typeof S.status == 'number' &&
        typeof S.statusText == 'string'
      )
        return new hy(S.status, S.statusText, S.data);
    } catch {}
}
function Ty(s, { relative: S } = {}) {
  rt(Yi(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: b, navigator: y } = H.useContext(dn),
    { hash: o, pathname: l, search: c } = Vi(s, { relative: S }),
    d = l;
  return (
    b !== '/' && (d = l === '/' ? b : gn([b, l])),
    y.createHref({ pathname: d, search: c, hash: o })
  );
}
function Yi() {
  return H.useContext(Gi) != null;
}
function Pn() {
  return (
    rt(Yi(), 'useLocation() may be used only in the context of a <Router> component.'),
    H.useContext(Gi).location
  );
}
var kh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Jh(s) {
  H.useContext(dn).static || H.useLayoutEffect(s);
}
function Ry() {
  let { isDataRoute: s } = H.useContext(In);
  return s ? Gy() : Ay();
}
function Ay() {
  rt(Yi(), 'useNavigate() may be used only in the context of a <Router> component.');
  let s = H.useContext(Ll),
    { basename: S, navigator: b } = H.useContext(dn),
    { matches: y } = H.useContext(In),
    { pathname: o } = Pn(),
    l = JSON.stringify(Gh(y)),
    c = H.useRef(!1);
  return (
    Jh(() => {
      c.current = !0;
    }),
    H.useCallback(
      (f, v = {}) => {
        if ((Cn(c.current, kh), !c.current)) return;
        if (typeof f == 'number') {
          b.go(f);
          return;
        }
        let m = tc(f, JSON.parse(l), o, v.relative === 'path');
        (s == null && S !== '/' && (m.pathname = m.pathname === '/' ? S : gn([S, m.pathname])),
          (v.replace ? b.replace : b.push)(m, v.state, v));
      },
      [S, b, l, o, s]
    )
  );
}
H.createContext(null);
function Vi(s, { relative: S } = {}) {
  let { matches: b } = H.useContext(In),
    { pathname: y } = Pn(),
    o = JSON.stringify(Gh(b));
  return H.useMemo(() => tc(s, JSON.parse(o), y, S === 'path'), [s, o, y, S]);
}
function _y(s, S) {
  return Fh(s, S);
}
function Fh(s, S, b) {
  var C;
  rt(Yi(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: y } = H.useContext(dn),
    { matches: o } = H.useContext(In),
    l = o[o.length - 1],
    c = l ? l.params : {},
    d = l ? l.pathname : '/',
    f = l ? l.pathnameBase : '/',
    v = l && l.route;
  {
    let R = (v && v.path) || '';
    Wh(
      d,
      !v || R.endsWith('*') || R.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === '/' ? '*' : `${R}/*`}">.`
    );
  }
  let m = Pn(),
    h;
  if (S) {
    let R = typeof S == 'string' ? Hl(S) : S;
    (rt(
      f === '/' || ((C = R.pathname) == null ? void 0 : C.startsWith(f)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${R.pathname}" was given in the \`location\` prop.`
    ),
      (h = R));
  } else h = m;
  let g = h.pathname || '/',
    r = g;
  if (f !== '/') {
    let R = f.replace(/^\//, '').split('/');
    r = '/' + g.replace(/^\//, '').split('/').slice(R.length).join('/');
  }
  let x = Hh(s, { pathname: r });
  (Cn(v || x != null, `No routes matched location "${h.pathname}${h.search}${h.hash}" `),
    Cn(
      x == null ||
        x[x.length - 1].route.element !== void 0 ||
        x[x.length - 1].route.Component !== void 0 ||
        x[x.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let p = Ny(
    x &&
      x.map((R) =>
        Object.assign({}, R, {
          params: Object.assign({}, c, R.params),
          pathname: gn([
            f,
            y.encodeLocation
              ? y.encodeLocation(
                  R.pathname.replace(/%/g, '%25').replace(/\?/g, '%3F').replace(/#/g, '%23')
                ).pathname
              : R.pathname,
          ]),
          pathnameBase:
            R.pathnameBase === '/'
              ? f
              : gn([
                  f,
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
    o,
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
function Oy() {
  let s = jy(),
    S = vy(s) ? `${s.status} ${s.statusText}` : s instanceof Error ? s.message : JSON.stringify(s),
    b = s instanceof Error ? s.stack : null,
    y = 'rgba(200,200,200, 0.5)',
    o = { padding: '0.5rem', backgroundColor: y },
    l = { padding: '2px 4px', backgroundColor: y },
    c = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', s),
    (c = H.createElement(
      H.Fragment,
      null,
      H.createElement('p', null, '💿 Hey developer 👋'),
      H.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        H.createElement('code', { style: l }, 'ErrorBoundary'),
        ' or',
        ' ',
        H.createElement('code', { style: l }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    H.createElement(
      H.Fragment,
      null,
      H.createElement('h2', null, 'Unexpected Application Error!'),
      H.createElement('h3', { style: { fontStyle: 'italic' } }, S),
      b ? H.createElement('pre', { style: o }, b) : null,
      c
    )
  );
}
var Dy = H.createElement(Oy, null),
  $h = class extends H.Component {
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
        const b = My(s.digest);
        b && (s = b);
      }
      let S =
        s !== void 0
          ? H.createElement(
              In.Provider,
              { value: this.props.routeContext },
              H.createElement(nc.Provider, { value: s, children: this.props.component })
            )
          : this.props.children;
      return this.context ? H.createElement(wy, { error: s }, S) : S;
    }
  };
$h.contextType = Qh;
var Ho = new WeakMap();
function wy({ children: s, error: S }) {
  let { basename: b } = H.useContext(dn);
  if (typeof S == 'object' && S && 'digest' in S && typeof S.digest == 'string') {
    let y = Cy(S.digest);
    if (y) {
      let o = Ho.get(S);
      if (o) throw o;
      let l = qh(y.location, b);
      if (Vh && !Ho.get(S))
        if (l.isExternal || y.reloadDocument) window.location.href = l.absoluteURL || l.to;
        else {
          const c = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(l.to, { replace: y.replace })
          );
          throw (Ho.set(S, c), c);
        }
      return H.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${l.absoluteURL || l.to}`,
      });
    }
  }
  return s;
}
function zy({ routeContext: s, match: S, children: b }) {
  let y = H.useContext(Ll);
  return (
    y &&
      y.static &&
      y.staticContext &&
      (S.route.errorElement || S.route.ErrorBoundary) &&
      (y.staticContext._deepestRenderedBoundaryId = S.route.id),
    H.createElement(In.Provider, { value: s }, b)
  );
}
function Ny(s, S = [], b) {
  let y = b == null ? void 0 : b.state;
  if (s == null) {
    if (!y) return null;
    if (y.errors) s = y.matches;
    else if (S.length === 0 && !y.initialized && y.matches.length > 0) s = y.matches;
    else return null;
  }
  let o = s,
    l = y == null ? void 0 : y.errors;
  if (l != null) {
    let m = o.findIndex((h) => h.route.id && (l == null ? void 0 : l[h.route.id]) !== void 0);
    (rt(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(l).join(',')}`
    ),
      (o = o.slice(0, Math.min(o.length, m + 1))));
  }
  let c = !1,
    d = -1;
  if (b && y) {
    c = y.renderFallback;
    for (let m = 0; m < o.length; m++) {
      let h = o[m];
      if (((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (d = m), h.route.id)) {
        let { loaderData: g, errors: r } = y,
          x = h.route.loader && !g.hasOwnProperty(h.route.id) && (!r || r[h.route.id] === void 0);
        if (h.route.lazy || x) {
          (b.isStatic && (c = !0), d >= 0 ? (o = o.slice(0, d + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  }
  let f = b == null ? void 0 : b.onError,
    v =
      y && f
        ? (m, h) => {
            var g, r;
            f(m, {
              location: y.location,
              params:
                ((r = (g = y.matches) == null ? void 0 : g[0]) == null ? void 0 : r.params) ?? {},
              unstable_pattern: gy(y.matches),
              errorInfo: h,
            });
          }
        : void 0;
  return o.reduceRight((m, h, g) => {
    let r,
      x = !1,
      p = null,
      C = null;
    y &&
      ((r = l && h.route.id ? l[h.route.id] : void 0),
      (p = h.route.errorElement || Dy),
      c &&
        (d < 0 && g === 0
          ? (Wh(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (x = !0),
            (C = null))
          : d === g && ((x = !0), (C = h.route.hydrateFallbackElement || null))));
    let R = S.concat(o.slice(0, g + 1)),
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
                  : (U = m),
          H.createElement(zy, {
            match: h,
            routeContext: { outlet: m, matches: R, isDataRoute: y != null },
            children: U,
          })
        );
      };
    return y && (h.route.ErrorBoundary || h.route.errorElement || g === 0)
      ? H.createElement($h, {
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
function ac(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function By(s) {
  let S = H.useContext(Ll);
  return (rt(S, ac(s)), S);
}
function Uy(s) {
  let S = H.useContext(fr);
  return (rt(S, ac(s)), S);
}
function Hy(s) {
  let S = H.useContext(In);
  return (rt(S, ac(s)), S);
}
function lc(s) {
  let S = Hy(s),
    b = S.matches[S.matches.length - 1];
  return (rt(b.route.id, `${s} can only be used on routes that contain a unique "id"`), b.route.id);
}
function Ly() {
  return lc('useRouteId');
}
function jy() {
  var y;
  let s = H.useContext(nc),
    S = Uy('useRouteError'),
    b = lc('useRouteError');
  return s !== void 0 ? s : (y = S.errors) == null ? void 0 : y[b];
}
function Gy() {
  let { router: s } = By('useNavigate'),
    S = lc('useNavigate'),
    b = H.useRef(!1);
  return (
    Jh(() => {
      b.current = !0;
    }),
    H.useCallback(
      async (o, l = {}) => {
        (Cn(b.current, kh),
          b.current &&
            (typeof o == 'number'
              ? await s.navigate(o)
              : await s.navigate(o, { fromRouteId: S, ...l })));
      },
      [s, S]
    )
  );
}
var xh = {};
function Wh(s, S, b) {
  !S && !xh[s] && ((xh[s] = !0), Cn(!1, b));
}
H.memo(Yy);
function Yy({ routes: s, future: S, state: b, isStatic: y, onError: o }) {
  return Fh(s, void 0, { state: b, isStatic: y, onError: o });
}
function Jo(s) {
  rt(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function Vy({
  basename: s = '/',
  children: S = null,
  location: b,
  navigationType: y = 'POP',
  navigator: o,
  static: l = !1,
  unstable_useTransitions: c,
}) {
  rt(
    !Yi(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let d = s.replace(/^\/*/, '/'),
    f = H.useMemo(
      () => ({ basename: d, navigator: o, static: l, unstable_useTransitions: c, future: {} }),
      [d, o, l, c]
    );
  typeof b == 'string' && (b = Hl(b));
  let {
      pathname: v = '/',
      search: m = '',
      hash: h = '',
      state: g = null,
      key: r = 'default',
      unstable_mask: x,
    } = b,
    p = H.useMemo(() => {
      let C = Wn(v, d);
      return C == null
        ? null
        : {
            location: { pathname: C, search: m, hash: h, state: g, key: r, unstable_mask: x },
            navigationType: y,
          };
    }, [d, v, m, h, g, r, y, x]);
  return (
    Cn(
      p != null,
      `<Router basename="${d}"> is not able to match the URL "${v}${m}${h}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    p == null
      ? null
      : H.createElement(
          dn.Provider,
          { value: f },
          H.createElement(Gi.Provider, { children: S, value: p })
        )
  );
}
function qy({ children: s, location: S }) {
  return _y(Fo(s), S);
}
function Fo(s, S = []) {
  let b = [];
  return (
    H.Children.forEach(s, (y, o) => {
      if (!H.isValidElement(y)) return;
      let l = [...S, o];
      if (y.type === H.Fragment) {
        b.push.apply(b, Fo(y.props.children, l));
        return;
      }
      (rt(
        y.type === Jo,
        `[${typeof y.type == 'string' ? y.type : y.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        rt(!y.props.index || !y.props.children, 'An index route cannot have child routes.'));
      let c = {
        id: y.props.id || l.join('-'),
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
      (y.props.children && (c.children = Fo(y.props.children, l)), b.push(c));
    }),
    b
  );
}
var ir = 'get',
  ur = 'application/x-www-form-urlencoded';
function dr(s) {
  return typeof HTMLElement < 'u' && s instanceof HTMLElement;
}
function Xy(s) {
  return dr(s) && s.tagName.toLowerCase() === 'button';
}
function Qy(s) {
  return dr(s) && s.tagName.toLowerCase() === 'form';
}
function Zy(s) {
  return dr(s) && s.tagName.toLowerCase() === 'input';
}
function Ky(s) {
  return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
}
function ky(s, S) {
  return s.button === 0 && (!S || S === '_self') && !Ky(s);
}
var nr = null;
function Jy() {
  if (nr === null)
    try {
      (new FormData(document.createElement('form'), 0), (nr = !1));
    } catch {
      nr = !0;
    }
  return nr;
}
var Fy = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function Lo(s) {
  return s != null && !Fy.has(s)
    ? (Cn(
        !1,
        `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ur}"`
      ),
      null)
    : s;
}
function $y(s, S) {
  let b, y, o, l, c;
  if (Qy(s)) {
    let d = s.getAttribute('action');
    ((y = d ? Wn(d, S) : null),
      (b = s.getAttribute('method') || ir),
      (o = Lo(s.getAttribute('enctype')) || ur),
      (l = new FormData(s)));
  } else if (Xy(s) || (Zy(s) && (s.type === 'submit' || s.type === 'image'))) {
    let d = s.form;
    if (d == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let f = s.getAttribute('formaction') || d.getAttribute('action');
    if (
      ((y = f ? Wn(f, S) : null),
      (b = s.getAttribute('formmethod') || d.getAttribute('method') || ir),
      (o = Lo(s.getAttribute('formenctype')) || Lo(d.getAttribute('enctype')) || ur),
      (l = new FormData(d, s)),
      !Jy())
    ) {
      let { name: v, type: m, value: h } = s;
      if (m === 'image') {
        let g = v ? `${v}.` : '';
        (l.append(`${g}x`, '0'), l.append(`${g}y`, '0'));
      } else v && l.append(v, h);
    }
  } else {
    if (dr(s))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((b = ir), (y = null), (o = ur), (c = s));
  }
  return (
    l && o === 'text/plain' && ((c = l), (l = void 0)),
    { action: y, method: b.toLowerCase(), encType: o, formData: l, body: c }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function ic(s, S) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(S);
}
function Ih(s, S, b, y) {
  let o =
    typeof s == 'string'
      ? new URL(s, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : s;
  return (
    b
      ? o.pathname.endsWith('/')
        ? (o.pathname = `${o.pathname}_.${y}`)
        : (o.pathname = `${o.pathname}.${y}`)
      : o.pathname === '/'
        ? (o.pathname = `_root.${y}`)
        : S && Wn(o.pathname, S) === '/'
          ? (o.pathname = `${or(S)}/_root.${y}`)
          : (o.pathname = `${or(o.pathname)}.${y}`),
    o
  );
}
async function Wy(s, S) {
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
function Iy(s) {
  return s == null
    ? !1
    : s.href == null
      ? s.rel === 'preload' && typeof s.imageSrcSet == 'string' && typeof s.imageSizes == 'string'
      : typeof s.rel == 'string' && typeof s.href == 'string';
}
async function Py(s, S, b) {
  let y = await Promise.all(
    s.map(async (o) => {
      let l = S.routes[o.route.id];
      if (l) {
        let c = await Wy(l, b);
        return c.links ? c.links() : [];
      }
      return [];
    })
  );
  return ap(
    y
      .flat(1)
      .filter(Iy)
      .filter((o) => o.rel === 'stylesheet' || o.rel === 'preload')
      .map((o) =>
        o.rel === 'stylesheet' ? { ...o, rel: 'prefetch', as: 'style' } : { ...o, rel: 'prefetch' }
      )
  );
}
function Sh(s, S, b, y, o, l) {
  let c = (f, v) => (b[v] ? f.route.id !== b[v].route.id : !0),
    d = (f, v) => {
      var m;
      return (
        b[v].pathname !== f.pathname ||
        (((m = b[v].route.path) == null ? void 0 : m.endsWith('*')) &&
          b[v].params['*'] !== f.params['*'])
      );
    };
  return l === 'assets'
    ? S.filter((f, v) => c(f, v) || d(f, v))
    : l === 'data'
      ? S.filter((f, v) => {
          var h;
          let m = y.routes[f.route.id];
          if (!m || !m.hasLoader) return !1;
          if (c(f, v) || d(f, v)) return !0;
          if (f.route.shouldRevalidate) {
            let g = f.route.shouldRevalidate({
              currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
              currentParams: ((h = b[0]) == null ? void 0 : h.params) || {},
              nextUrl: new URL(s, window.origin),
              nextParams: f.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof g == 'boolean') return g;
          }
          return !0;
        })
      : [];
}
function ep(s, S, { includeHydrateFallback: b } = {}) {
  return tp(
    s
      .map((y) => {
        let o = S.routes[y.route.id];
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
function tp(s) {
  return [...new Set(s)];
}
function np(s) {
  let S = {},
    b = Object.keys(s).sort();
  for (let y of b) S[y] = s[y];
  return S;
}
function ap(s, S) {
  let b = new Set();
  return (
    new Set(S),
    s.reduce((y, o) => {
      let l = JSON.stringify(np(o));
      return (b.has(l) || (b.add(l), y.push({ key: l, link: o })), y);
    }, [])
  );
}
function uc() {
  let s = H.useContext(Ll);
  return (ic(s, 'You must render this element inside a <DataRouterContext.Provider> element'), s);
}
function lp() {
  let s = H.useContext(fr);
  return (
    ic(s, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    s
  );
}
var rc = H.createContext(void 0);
rc.displayName = 'FrameworkContext';
function sc() {
  let s = H.useContext(rc);
  return (ic(s, 'You must render this element inside a <HydratedRouter> element'), s);
}
function ip(s, S) {
  let b = H.useContext(rc),
    [y, o] = H.useState(!1),
    [l, c] = H.useState(!1),
    { onFocus: d, onBlur: f, onMouseEnter: v, onMouseLeave: m, onTouchStart: h } = S,
    g = H.useRef(null);
  (H.useEffect(() => {
    if ((s === 'render' && c(!0), s === 'viewport')) {
      let p = (R) => {
          R.forEach((w) => {
            c(w.isIntersecting);
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
          c(!0);
        }, 100);
        return () => {
          clearTimeout(p);
        };
      }
    }, [y]));
  let r = () => {
      o(!0);
    },
    x = () => {
      (o(!1), c(!1));
    };
  return b
    ? s !== 'intent'
      ? [l, g, {}]
      : [
          l,
          g,
          {
            onFocus: wi(d, r),
            onBlur: wi(f, x),
            onMouseEnter: wi(v, r),
            onMouseLeave: wi(m, x),
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
function up({ page: s, ...S }) {
  let b = py(),
    { router: y } = uc(),
    o = H.useMemo(() => Hh(y.routes, s, y.basename), [y.routes, s, y.basename]);
  return o
    ? b
      ? H.createElement(sp, { page: s, matches: o, ...S })
      : H.createElement(op, { page: s, matches: o, ...S })
    : null;
}
function rp(s) {
  let { manifest: S, routeModules: b } = sc(),
    [y, o] = H.useState([]);
  return (
    H.useEffect(() => {
      let l = !1;
      return (
        Py(s, S, b).then((c) => {
          l || o(c);
        }),
        () => {
          l = !0;
        }
      );
    }, [s, S, b]),
    y
  );
}
function sp({ page: s, matches: S, ...b }) {
  let y = Pn(),
    { future: o } = sc(),
    { basename: l } = uc(),
    c = H.useMemo(() => {
      if (s === y.pathname + y.search + y.hash) return [];
      let d = Ih(s, l, o.unstable_trailingSlashAwareDataRequests, 'rsc'),
        f = !1,
        v = [];
      for (let m of S)
        typeof m.route.shouldRevalidate == 'function' ? (f = !0) : v.push(m.route.id);
      return (
        f && v.length > 0 && d.searchParams.set('_routes', v.join(',')),
        [d.pathname + d.search]
      );
    }, [l, o.unstable_trailingSlashAwareDataRequests, s, y, S]);
  return H.createElement(
    H.Fragment,
    null,
    c.map((d) => H.createElement('link', { key: d, rel: 'prefetch', as: 'fetch', href: d, ...b }))
  );
}
function op({ page: s, matches: S, ...b }) {
  let y = Pn(),
    { future: o, manifest: l, routeModules: c } = sc(),
    { basename: d } = uc(),
    { loaderData: f, matches: v } = lp(),
    m = H.useMemo(() => Sh(s, S, v, l, y, 'data'), [s, S, v, l, y]),
    h = H.useMemo(() => Sh(s, S, v, l, y, 'assets'), [s, S, v, l, y]),
    g = H.useMemo(() => {
      if (s === y.pathname + y.search + y.hash) return [];
      let p = new Set(),
        C = !1;
      if (
        (S.forEach((w) => {
          var G;
          let U = l.routes[w.route.id];
          !U ||
            !U.hasLoader ||
            ((!m.some((M) => M.route.id === w.route.id) &&
              w.route.id in f &&
              (G = c[w.route.id]) != null &&
              G.shouldRevalidate) ||
            U.hasClientLoader
              ? (C = !0)
              : p.add(w.route.id));
        }),
        p.size === 0)
      )
        return [];
      let R = Ih(s, d, o.unstable_trailingSlashAwareDataRequests, 'data');
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
    }, [d, o.unstable_trailingSlashAwareDataRequests, f, y, l, m, S, s, c]),
    r = H.useMemo(() => ep(h, l), [h, l]),
    x = rp(h);
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
var fp =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  fp && (window.__reactRouterVersion = '7.14.2');
} catch {}
function dp({ basename: s, children: S, unstable_useTransitions: b, window: y }) {
  let o = H.useRef();
  o.current == null && (o.current = Zg({ window: y, v5Compat: !0 }));
  let l = o.current,
    [c, d] = H.useState({ action: l.action, location: l.location }),
    f = H.useCallback(
      (v) => {
        b === !1 ? d(v) : H.startTransition(() => d(v));
      },
      [b]
    );
  return (
    H.useLayoutEffect(() => l.listen(f), [l, f]),
    H.createElement(Vy, {
      basename: s,
      children: S,
      location: c.location,
      navigationType: c.action,
      navigator: l,
      unstable_useTransitions: b,
    })
  );
}
var Ph = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ev = H.forwardRef(function (
    {
      onClick: S,
      discover: b = 'render',
      prefetch: y = 'none',
      relative: o,
      reloadDocument: l,
      replace: c,
      unstable_mask: d,
      state: f,
      target: v,
      to: m,
      preventScrollReset: h,
      viewTransition: g,
      unstable_defaultShouldRevalidate: r,
      ...x
    },
    p
  ) {
    let { basename: C, navigator: R, unstable_useTransitions: w } = H.useContext(dn),
      U = typeof m == 'string' && Ph.test(m),
      G = qh(m, C);
    m = G.to;
    let M = Ty(m, { relative: o }),
      O = Pn(),
      D = null;
    if (d) {
      let ae = tc(d, [], O.unstable_mask ? O.unstable_mask.pathname : '/', !0);
      (C !== '/' && (ae.pathname = ae.pathname === '/' ? C : gn([C, ae.pathname])),
        (D = R.createHref(ae)));
    }
    let [_, L, B] = ip(y, x),
      Y = gp(m, {
        replace: c,
        unstable_mask: d,
        state: f,
        target: v,
        preventScrollReset: h,
        relative: o,
        viewTransition: g,
        unstable_defaultShouldRevalidate: r,
        unstable_useTransitions: w,
      });
    function V(ae) {
      (S && S(ae), ae.defaultPrevented || Y(ae));
    }
    let F = !(G.isExternal || l),
      ie = H.createElement('a', {
        ...x,
        ...B,
        href: (F ? D : void 0) || G.absoluteURL || M,
        onClick: F ? V : S,
        ref: cp(p, L),
        target: v,
        'data-discover': !U && b === 'render' ? 'true' : void 0,
      });
    return _ && !U ? H.createElement(H.Fragment, null, ie, H.createElement(up, { page: M })) : ie;
  });
ev.displayName = 'Link';
var mp = H.forwardRef(function (
  {
    'aria-current': S = 'page',
    caseSensitive: b = !1,
    className: y = '',
    end: o = !1,
    style: l,
    to: c,
    viewTransition: d,
    children: f,
    ...v
  },
  m
) {
  let h = Vi(c, { relative: v.relative }),
    g = Pn(),
    r = H.useContext(fr),
    { navigator: x, basename: p } = H.useContext(dn),
    C = r != null && Ep(h) && d === !0,
    R = x.encodeLocation ? x.encodeLocation(h).pathname : h.pathname,
    w = g.pathname,
    U = r && r.navigation && r.navigation.location ? r.navigation.location.pathname : null;
  (b || ((w = w.toLowerCase()), (U = U ? U.toLowerCase() : null), (R = R.toLowerCase())),
    U && p && (U = Wn(U, p) || U));
  const G = R !== '/' && R.endsWith('/') ? R.length - 1 : R.length;
  let M = w === R || (!o && w.startsWith(R) && w.charAt(G) === '/'),
    O = U != null && (U === R || (!o && U.startsWith(R) && U.charAt(R.length) === '/')),
    D = { isActive: M, isPending: O, isTransitioning: C },
    _ = M ? S : void 0,
    L;
  typeof y == 'function'
    ? (L = y(D))
    : (L = [y, M ? 'active' : null, O ? 'pending' : null, C ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let B = typeof l == 'function' ? l(D) : l;
  return H.createElement(
    ev,
    { ...v, 'aria-current': _, className: L, ref: m, style: B, to: c, viewTransition: d },
    typeof f == 'function' ? f(D) : f
  );
});
mp.displayName = 'NavLink';
var hp = H.forwardRef(
  (
    {
      discover: s = 'render',
      fetcherKey: S,
      navigate: b,
      reloadDocument: y,
      replace: o,
      state: l,
      method: c = ir,
      action: d,
      onSubmit: f,
      relative: v,
      preventScrollReset: m,
      viewTransition: h,
      unstable_defaultShouldRevalidate: g,
      ...r
    },
    x
  ) => {
    let { unstable_useTransitions: p } = H.useContext(dn),
      C = xp(),
      R = Sp(d, { relative: v }),
      w = c.toLowerCase() === 'get' ? 'get' : 'post',
      U = typeof d == 'string' && Ph.test(d),
      G = (M) => {
        if ((f && f(M), M.defaultPrevented)) return;
        M.preventDefault();
        let O = M.nativeEvent.submitter,
          D = (O == null ? void 0 : O.getAttribute('formmethod')) || c,
          _ = () =>
            C(O || M.currentTarget, {
              fetcherKey: S,
              method: D,
              navigate: b,
              replace: o,
              state: l,
              relative: v,
              preventScrollReset: m,
              viewTransition: h,
              unstable_defaultShouldRevalidate: g,
            });
        p && b !== !1 ? H.startTransition(() => _()) : _();
      };
    return H.createElement('form', {
      ref: x,
      method: w,
      action: R,
      onSubmit: y ? f : G,
      ...r,
      'data-discover': !U && s === 'render' ? 'true' : void 0,
    });
  }
);
hp.displayName = 'Form';
function vp(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function tv(s) {
  let S = H.useContext(Ll);
  return (rt(S, vp(s)), S);
}
function gp(
  s,
  {
    target: S,
    replace: b,
    unstable_mask: y,
    state: o,
    preventScrollReset: l,
    relative: c,
    viewTransition: d,
    unstable_defaultShouldRevalidate: f,
    unstable_useTransitions: v,
  } = {}
) {
  let m = Ry(),
    h = Pn(),
    g = Vi(s, { relative: c });
  return H.useCallback(
    (r) => {
      if (ky(r, S)) {
        r.preventDefault();
        let x = b !== void 0 ? b : ji(h) === ji(g),
          p = () =>
            m(s, {
              replace: x,
              unstable_mask: y,
              state: o,
              preventScrollReset: l,
              relative: c,
              viewTransition: d,
              unstable_defaultShouldRevalidate: f,
            });
        v ? H.startTransition(() => p()) : p();
      }
    },
    [h, m, g, b, y, o, S, s, l, c, d, f, v]
  );
}
var yp = 0,
  pp = () => `__${String(++yp)}__`;
function xp() {
  let { router: s } = tv('useSubmit'),
    { basename: S } = H.useContext(dn),
    b = Ly(),
    y = s.fetch,
    o = s.navigate;
  return H.useCallback(
    async (l, c = {}) => {
      let { action: d, method: f, encType: v, formData: m, body: h } = $y(l, S);
      if (c.navigate === !1) {
        let g = c.fetcherKey || pp();
        await y(g, b, c.action || d, {
          unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
          preventScrollReset: c.preventScrollReset,
          formData: m,
          body: h,
          formMethod: c.method || f,
          formEncType: c.encType || v,
          flushSync: c.flushSync,
        });
      } else
        await o(c.action || d, {
          unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
          preventScrollReset: c.preventScrollReset,
          formData: m,
          body: h,
          formMethod: c.method || f,
          formEncType: c.encType || v,
          replace: c.replace,
          state: c.state,
          fromRouteId: b,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [y, o, S, b]
  );
}
function Sp(s, { relative: S } = {}) {
  let { basename: b } = H.useContext(dn),
    y = H.useContext(In);
  rt(y, 'useFormAction must be used inside a RouteContext');
  let [o] = y.matches.slice(-1),
    l = { ...Vi(s || '.', { relative: S }) },
    c = Pn();
  if (s == null) {
    l.search = c.search;
    let d = new URLSearchParams(l.search),
      f = d.getAll('index');
    if (f.some((m) => m === '')) {
      (d.delete('index'), f.filter((h) => h).forEach((h) => d.append('index', h)));
      let m = d.toString();
      l.search = m ? `?${m}` : '';
    }
  }
  return (
    (!s || s === '.') &&
      o.route.index &&
      (l.search = l.search ? l.search.replace(/^\?/, '?index&') : '?index'),
    b !== '/' && (l.pathname = l.pathname === '/' ? b : gn([b, l.pathname])),
    ji(l)
  );
}
function Ep(s, { relative: S } = {}) {
  let b = H.useContext(Zh);
  rt(
    b != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: y } = tv('useViewTransitionState'),
    o = Vi(s, { relative: S });
  if (!b.isTransitioning) return !1;
  let l = Wn(b.currentLocation.pathname, y) || b.currentLocation.pathname,
    c = Wn(b.nextLocation.pathname, y) || b.nextLocation.pathname;
  return sr(o.pathname, c) != null || sr(o.pathname, l) != null;
}
const bp = 'modulepreload',
  Cp = function (s) {
    return '/ochimono-game/' + s;
  },
  Eh = {},
  Mp = function (S, b, y) {
    let o = Promise.resolve();
    if (b && b.length > 0) {
      let c = function (v) {
        return Promise.all(
          v.map((m) =>
            Promise.resolve(m).then(
              (h) => ({ status: 'fulfilled', value: h }),
              (h) => ({ status: 'rejected', reason: h })
            )
          )
        );
      };
      document.getElementsByTagName('link');
      const d = document.querySelector('meta[property=csp-nonce]'),
        f = (d == null ? void 0 : d.nonce) || (d == null ? void 0 : d.getAttribute('nonce'));
      o = c(
        b.map((v) => {
          if (((v = Cp(v)), v in Eh)) return;
          Eh[v] = !0;
          const m = v.endsWith('.css'),
            h = m ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${v}"]${h}`)) return;
          const g = document.createElement('link');
          if (
            ((g.rel = m ? 'stylesheet' : bp),
            m || (g.as = 'script'),
            (g.crossOrigin = ''),
            (g.href = v),
            f && g.setAttribute('nonce', f),
            document.head.appendChild(g),
            m)
          )
            return new Promise((r, x) => {
              (g.addEventListener('load', r),
                g.addEventListener('error', () => x(new Error(`Unable to preload CSS for ${v}`))));
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
      return S().catch(l);
    });
  };
function Tp(s = {}) {
  const {
    immediate: S = !1,
    onNeedRefresh: b,
    onOfflineReady: y,
    onRegistered: o,
    onRegisteredSW: l,
    onRegisterError: c,
  } = s;
  let d, f, v;
  const m = async (g = !0) => {
    (await f, v == null || v());
  };
  async function h() {
    if ('serviceWorker' in navigator) {
      if (
        ((d = await Mp(async () => {
          const { Workbox: g } = await import('./workbox-window.prod.es5-BIl4cyR9.js');
          return { Workbox: g };
        }, [])
          .then(
            ({ Workbox: g }) =>
              new g('/ochimono-game/sw.js', { scope: '/ochimono-game/', type: 'classic' })
          )
          .catch((g) => {
            c == null || c(g);
          })),
        !d)
      )
        return;
      v = () => {
        d == null || d.messageSkipWaiting();
      };
      {
        let g = !1;
        const r = () => {
          ((g = !0),
            d == null ||
              d.addEventListener('controlling', (x) => {
                x.isUpdate && window.location.reload();
              }),
            b == null || b());
        };
        (d.addEventListener('installed', (x) => {
          typeof x.isUpdate > 'u'
            ? typeof x.isExternal < 'u' && x.isExternal
              ? r()
              : !g && (y == null || y())
            : x.isUpdate || y == null || y();
        }),
          d.addEventListener('waiting', r));
      }
      d.register({ immediate: S })
        .then((g) => {
          l ? l('/ochimono-game/sw.js', g) : o == null || o(g);
        })
        .catch((g) => {
          c == null || c(g);
        });
    }
  }
  return ((f = h()), m);
}
function Rp(s = {}) {
  const {
      immediate: S = !0,
      onNeedRefresh: b,
      onOfflineReady: y,
      onRegistered: o,
      onRegisteredSW: l,
      onRegisterError: c,
    } = s,
    [d, f] = H.useState(!1),
    [v, m] = H.useState(!1),
    [h] = H.useState(() =>
      Tp({
        immediate: S,
        onOfflineReady() {
          (m(!0), y == null || y());
        },
        onNeedRefresh() {
          (f(!0), b == null || b());
        },
        onRegistered: o,
        onRegisteredSW: l,
        onRegisterError: c,
      })
    );
  return { needRefresh: [d, f], offlineReady: [v, m], updateServiceWorker: h };
}
const Ap = '_banner_1qruq_1',
  _p = '_message_1qruq_21',
  Op = '_button_1qruq_25',
  jo = { banner: Ap, message: _p, button: Op },
  Dp = () => {
    const {
      needRefresh: [s],
      updateServiceWorker: S,
    } = Rp();
    return s
      ? I.jsxs('div', {
          className: jo.banner,
          role: 'status',
          'aria-live': 'polite',
          children: [
            I.jsx('span', { className: jo.message, children: '新しいバージョンがあります' }),
            I.jsx('button', {
              type: 'button',
              className: jo.button,
              onClick: () => S(!0),
              children: '更新',
            }),
          ],
        })
      : null;
  },
  wp = '_index_r8hfh_1',
  zp = { index: wp },
  Np = '_layout_149jh_1',
  Bp = '_top_bar_placeholder_149jh_10',
  Up = '_main_149jh_15',
  Hp = '_field_wrapper_149jh_23',
  Lp = '_skill_button_wrapper_149jh_28',
  Ja = {
    layout: Np,
    top_bar_placeholder: Bp,
    main: Up,
    field_wrapper: Hp,
    skill_button_wrapper: Lp,
  },
  jp = '_surface_6wr97_1',
  Gp = '_canvas_layer_6wr97_11',
  Yp = '_game_over_line_6wr97_22',
  Go = { surface: jp, canvas_layer: Gp, game_over_line: Yp },
  Vp = '_layer_1dvsy_1',
  qp = '_effect_1dvsy_7',
  Xp = '_ring_1dvsy_12',
  Qp = '_score_1dvsy_24',
  Zp = '_special_1dvsy_36',
  zi = { layer: Vp, effect: qp, ring: Xp, score: Qp, special: Zp },
  nv = H.memo(
    H.forwardRef((s, S) => {
      const b = H.useRef(null),
        y = H.useCallback((l) => {
          const c = b.current;
          if (!c) return;
          const d = document.createElement('div');
          ((d.className = `${zi.effect} ${l.isSpecial ? zi.special : ''}`),
            (d.style.left = `${l.x}px`),
            (d.style.top = `${l.y}px`),
            d.setAttribute('aria-hidden', 'true'));
          const f = document.createElement('span');
          ((f.className = zi.ring), d.appendChild(f));
          const v = () => {
            (f.removeEventListener('animationend', v), d.parentNode === c && c.removeChild(d));
          };
          if ((f.addEventListener('animationend', v), l.score > 0)) {
            const m = document.createElement('span');
            ((m.className = zi.score), (m.textContent = `+${l.score}`), d.appendChild(m));
          }
          c.appendChild(d);
        }, []),
        o = H.useCallback(() => {
          const l = b.current;
          if (l) for (; l.firstChild; ) l.removeChild(l.firstChild);
        }, []);
      return (
        H.useImperativeHandle(S, () => ({ add: y, clear: o }), [y, o]),
        I.jsx('div', { ref: b, className: zi.layer, 'aria-hidden': 'true' })
      );
    })
  );
nv.displayName = 'MergeEffect';
const Kp = '_line_yymkz_1',
  kp = '_preview_wrap_yymkz_11',
  Jp = '_preview_yymkz_11',
  Yo = { line: Kp, preview_wrap: kp, preview: Jp },
  Fp = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  av = H.memo(
    H.forwardRef(({ initialX: s, fieldHeight: S, item: b }, y) => {
      const o = H.useRef(null),
        l = H.useRef(null),
        c = H.useRef((b == null ? void 0 : b.radius) ?? 0);
      if (
        ((c.current = (b == null ? void 0 : b.radius) ?? 0),
        H.useImperativeHandle(
          y,
          () => ({
            setX: (f) => {
              const v = o.current,
                m = l.current;
              (v && (v.style.transform = `translate3d(${f}px, 0, 0)`),
                m && (m.style.transform = `translate3d(${f - c.current}px, 0, 0)`));
            },
          }),
          []
        ),
        !b)
      )
        return null;
      const d = b.radius * 2;
      return I.jsxs(I.Fragment, {
        children: [
          I.jsx('div', {
            ref: o,
            className: Yo.line,
            style: { height: `${S}px`, transform: `translate3d(${s}px, 0, 0)` },
            'aria-hidden': 'true',
          }),
          I.jsx('div', {
            ref: l,
            className: Yo.preview_wrap,
            style: {
              width: `${d}px`,
              height: `${d}px`,
              transform: `translate3d(${s - b.radius}px, 0, 0)`,
            },
            'aria-hidden': 'true',
            children: I.jsx('img', {
              src: Fp(b.svgPath),
              alt: '',
              'aria-hidden': 'true',
              className: Yo.preview,
            }),
          }),
        ],
      });
    })
  );
av.displayName = 'DropIndicator';
const $p = (s) => Math.max(0, Math.min(1, s)),
  Wp = ({
    canvasContainerRef: s,
    fieldWidth: S,
    fieldHeight: b,
    gameOverLineY: y,
    currentItem: o,
    canInteract: l,
    onDrop: c,
    mergeEffectRef: d,
    isMagnetSelecting: f,
    onMagnetSelect: v,
  }) => {
    const m = H.useRef(null),
      h = H.useRef(null),
      g = H.useRef(0.5),
      r = H.useRef(null),
      x = H.useRef(o);
    x.current = o;
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
          const L = m.current;
          if (!L) return;
          const B = L.getBoundingClientRect(),
            Y = $p((_ - B.left) / B.width);
          ((g.current = Y), R());
        },
        [R]
      );
    (H.useEffect(() => {
      ((g.current = 0.5), R());
    }, [o == null ? void 0 : o.level, R]),
      H.useEffect(
        () => () => {
          r.current !== null && (window.cancelAnimationFrame(r.current), (r.current = null));
        },
        []
      ));
    const U = l && !f,
      G = (_) => {
        var L;
        f || (U && (w(_.clientX), (L = m.current) == null || L.setPointerCapture(_.pointerId)));
      },
      M = (_) => {
        if (!f) {
          if (_.buttons === 0 && _.pointerType === 'mouse') {
            w(_.clientX);
            return;
          }
          w(_.clientX);
        }
      },
      O = (_) => {
        var L;
        if (f) {
          const B = m.current;
          if (!B) return;
          const Y = B.getBoundingClientRect();
          v(_.clientX - Y.left, _.clientY - Y.top);
          return;
        }
        U &&
          (w(_.clientX),
          c(g.current),
          (L = m.current) == null || L.releasePointerCapture(_.pointerId));
      },
      D = C(0.5);
    return I.jsxs('div', {
      ref: m,
      className: Go.surface,
      style: { width: `${S}px`, height: `${b}px` },
      onPointerDown: G,
      onPointerMove: M,
      onPointerUp: O,
      role: 'application',
      'aria-label': 'ゲームフィールド',
      children: [
        I.jsx('div', { ref: s, className: Go.canvas_layer }),
        I.jsx('div', {
          className: Go.game_over_line,
          style: { top: `${y}px` },
          'aria-hidden': 'true',
        }),
        U ? I.jsx(av, { ref: h, initialX: D, fieldHeight: b, item: o }) : null,
        I.jsx(nv, { ref: d }),
      ],
    });
  },
  Ip = '_overlay_efysu_1',
  Pp = '_number_efysu_11',
  bh = { overlay: Ip, number: Pp },
  lv = H.memo(({ seconds: s }) =>
    s === null
      ? null
      : I.jsx('div', {
          className: bh.overlay,
          'aria-live': 'assertive',
          'aria-label': `ゲームオーバーまで${s}秒`,
          children: I.jsx('span', { className: bh.number, children: s }, s),
        })
  );
lv.displayName = 'CountdownOverlay';
const e1 = '_overlay_o79hb_1',
  t1 = '_panel_o79hb_13',
  n1 = '_new_record_o79hb_24',
  a1 = '_title_o79hb_32',
  l1 = '_scores_o79hb_40',
  i1 = '_row_o79hb_46',
  u1 = '_gold_o79hb_64',
  r1 = '_restart_o79hb_69',
  Zn = {
    overlay: e1,
    panel: t1,
    new_record: n1,
    title: a1,
    scores: l1,
    row: i1,
    gold: u1,
    restart: r1,
  },
  s1 = ({ score: s, bestScore: S, isNewRecord: b, onRestart: y }) =>
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
  o1 = '_root_1svqx_1',
  c1 = '_message_1svqx_13',
  f1 = '_icon_1svqx_30',
  d1 = '_text_1svqx_34',
  m1 = '_cancel_1svqx_38',
  Ni = { root: o1, message: c1, icon: f1, text: d1, cancel: m1 },
  iv = H.memo(({ active: s, onCancel: S }) =>
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
iv.displayName = 'MagnetSelectingOverlay';
const h1 = '_backdrop_1weqi_1',
  v1 = '_dialog_1weqi_12',
  g1 = '_title_1weqi_22',
  y1 = '_body_1weqi_30',
  p1 = '_actions_1weqi_36',
  x1 = '_button_1weqi_42',
  S1 = '_yes_1weqi_57',
  E1 = '_no_1weqi_63',
  Kn = { backdrop: h1, dialog: v1, title: g1, body: y1, actions: p1, button: x1, yes: S1, no: E1 },
  uv = H.memo(({ open: s, onYes: S, onNo: b }) =>
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
uv.displayName = 'ResumeDialog';
const b1 = '_gravity_flip_14l5j_1',
  C1 = '_arrow_14l5j_9',
  Ch = { gravity_flip: b1, arrow: C1 },
  rv = H.memo(({ effect: s }) =>
    s === 'gravityFlip'
      ? I.jsx('div', {
          className: Ch.gravity_flip,
          'aria-hidden': 'true',
          children: Array.from({ length: 6 }).map((S, b) =>
            I.jsx(
              'span',
              {
                className: Ch.arrow,
                style: { left: `${(b + 1) * 14}%`, animationDelay: `${b * 0.12}s` },
                children: '⬆',
              },
              b
            )
          ),
        })
      : null
  );
rv.displayName = 'SkillEffectOverlay';
const M1 = '_overlay_1xsci_1',
  T1 = '_panel_1xsci_12',
  R1 = '_title_1xsci_22',
  A1 = '_lead_1xsci_30',
  _1 = '_start_1xsci_37',
  Bi = { overlay: M1, panel: T1, title: R1, lead: A1, start: _1 },
  O1 = ({ onStart: s }) =>
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
  D1 = '_backdrop_6euhx_1',
  w1 = '_drawer_6euhx_11',
  z1 = '_header_6euhx_23',
  N1 = '_title_6euhx_30',
  B1 = '_close_6euhx_38',
  U1 = '_row_6euhx_54',
  H1 = '_row_label_6euhx_62',
  L1 = '_suspend_6euhx_68',
  j1 = '_footer_6euhx_88',
  G1 = '_version_6euhx_94',
  on = {
    backdrop: D1,
    drawer: w1,
    header: z1,
    title: N1,
    close: B1,
    row: U1,
    row_label: H1,
    suspend: L1,
    footer: j1,
    version: G1,
  },
  Y1 = '_toggle_1ap46_1',
  V1 = { toggle: Y1 },
  sv = H.memo(({ isOn: s, onToggle: S }) =>
    I.jsx('button', {
      type: 'button',
      className: V1.toggle,
      onClick: S,
      'aria-label': s ? 'サウンドをOFFにする' : 'サウンドをONにする',
      'aria-pressed': s,
      children: I.jsx('span', { 'aria-hidden': 'true', children: s ? '🔊' : '🔇' }),
    })
  );
sv.displayName = 'SoundToggle';
const q1 = '_toggle_15urq_1',
  X1 = { toggle: q1 },
  oc = [{ id: 'gumi', label: 'グミ' }],
  mr = 'gumi',
  cc = (s) => typeof s == 'string' && oc.some((S) => S.id === s),
  ov = H.memo(({ value: s, onChange: S }) => {
    const b = (y) => {
      const o = y.target.value;
      cc(o) && S(o);
    };
    return I.jsx('select', {
      className: X1.toggle,
      value: s,
      onChange: b,
      'aria-label': 'アセットテーマ',
      children: oc.map((y) => I.jsx('option', { value: y.id, children: y.label }, y.id)),
    });
  });
ov.displayName = 'ThemeToggle';
const cv = H.memo(
  ({
    open: s,
    onClose: S,
    themeId: b,
    onChangeTheme: y,
    isSoundOn: o,
    onToggleSound: l,
    canSuspend: c,
    onSuspend: d,
  }) =>
    s
      ? I.jsx('div', {
          className: on.backdrop,
          onClick: S,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '設定',
          children: I.jsxs('aside', {
            className: on.drawer,
            onClick: (f) => f.stopPropagation(),
            children: [
              I.jsxs('header', {
                className: on.header,
                children: [
                  I.jsx('h2', { className: on.title, children: '設定' }),
                  I.jsx('button', {
                    type: 'button',
                    className: on.close,
                    onClick: S,
                    'aria-label': '設定を閉じる',
                    children: '✕',
                  }),
                ],
              }),
              I.jsxs('div', {
                className: on.row,
                children: [
                  I.jsx('span', { className: on.row_label, children: 'テーマ' }),
                  I.jsx(ov, { value: b, onChange: y }),
                ],
              }),
              I.jsxs('div', {
                className: on.row,
                children: [
                  I.jsx('span', { className: on.row_label, children: 'サウンド' }),
                  I.jsx(sv, { isOn: o, onToggle: l }),
                ],
              }),
              c
                ? I.jsx('button', {
                    type: 'button',
                    className: on.suspend,
                    onClick: () => {
                      (d(), S());
                    },
                    children: '中断',
                  })
                : null,
              I.jsx('footer', {
                className: on.footer,
                children: I.jsxs('span', { className: on.version, children: ['v', '1.0.32'] }),
              }),
            ],
          }),
        })
      : null
);
cv.displayName = 'SettingsDrawer';
const Q1 = '_button_12i3t_1',
  Z1 = '_gauge_12i3t_23',
  K1 = '_gauge_track_12i3t_32',
  k1 = '_gauge_fill_12i3t_39',
  J1 = '_gauge_fill_full_12i3t_47',
  F1 = '_icon_12i3t_52',
  $1 = '_ready_12i3t_60',
  W1 = '_fully_ready_12i3t_65',
  Ta = {
    button: Q1,
    gauge: Z1,
    gauge_track: K1,
    gauge_fill: k1,
    gauge_fill_full: J1,
    icon: F1,
    ready: $1,
    fully_ready: W1,
  },
  cr = 32,
  Mh = 40,
  Th = 110,
  I1 = 360,
  Rh = (s) => {
    const S = ((s - 90) * Math.PI) / 180;
    return { x: Mh + cr * Math.cos(S), y: Mh + cr * Math.sin(S) };
  },
  P1 = (s, S) => {
    const b = Rh(s),
      y = Rh(S),
      o = S - s > 180 ? 1 : 0;
    return `M ${b.x} ${b.y} A ${cr} ${cr} 0 ${o} 1 ${y.x} ${y.y}`;
  },
  Vo = 1,
  fv = H.memo(({ gauge: s, segmentMax: S, segmentCount: b, canOpen: y, onClick: o }) => {
    const l = Math.round((s / (S * b)) * 100),
      c = I1 / b,
      d = c - Th,
      f = Array.from({ length: b }, (h, g) => {
        const r = g * S;
        return Math.max(0, Math.min(S, s - r)) / S;
      }),
      m = f.filter((h) => h >= 1).length === b;
    return I.jsxs('button', {
      type: 'button',
      className: [Ta.button, y ? Ta.ready : '', m ? Ta.fully_ready : ''].filter(Boolean).join(' '),
      onClick: o,
      disabled: !y,
      'aria-label': y ? '必殺技を選択' : `必殺技ゲージ ${l}%`,
      children: [
        I.jsx('svg', {
          className: Ta.gauge,
          viewBox: '0 0 80 80',
          'aria-hidden': 'true',
          children: f.map((h, g) => {
            const r = g * c + d / 2,
              x = r + Th,
              p = P1(r, x),
              C = h >= 1;
            return I.jsxs(
              'g',
              {
                children: [
                  I.jsx('path', { className: Ta.gauge_track, d: p, pathLength: Vo }),
                  I.jsx('path', {
                    className: `${Ta.gauge_fill} ${C ? Ta.gauge_fill_full : ''}`,
                    d: p,
                    pathLength: Vo,
                    strokeDasharray: `${h} ${Vo - h}`,
                  }),
                ],
              },
              g
            );
          }),
        }),
        I.jsx('span', { className: Ta.icon, 'aria-hidden': 'true', children: '⚡' }),
      ],
    });
  });
fv.displayName = 'SkillButton';
const ex = '_backdrop_1xhs1_1',
  tx = '_menu_1xhs1_12',
  nx = '_title_1xhs1_21',
  ax = '_choices_1xhs1_30',
  lx = '_choice_1xhs1_30',
  ix = '_choice_disabled_1xhs1_60',
  ux = '_choice_icon_1xhs1_65',
  rx = '_choice_label_1xhs1_72',
  sx = '_choice_desc_1xhs1_79',
  ox = '_choice_cost_1xhs1_85',
  cx = '_cost_pip_1xhs1_93',
  fx = '_cancel_1xhs1_101',
  cn = {
    backdrop: ex,
    menu: tx,
    title: nx,
    choices: ax,
    choice: lx,
    choice_disabled: ix,
    choice_icon: ux,
    choice_label: rx,
    choice_desc: sx,
    choice_cost: ox,
    cost_pip: cx,
    cancel: fx,
  },
  $o = 100,
  Wo = 3,
  ht = {
    gaugeMax: $o * Wo,
    segmentMax: $o,
    segmentCount: Wo,
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
  dx = (s) => s,
  dv = { shake: 1, gravityFlip: 1, magnet: Wo },
  Ui = (s) => dv[s] * $o,
  mx = [
    { kind: 'shake', icon: '🌪', label: 'シェイク', description: '盤面を揺らして詰まりを解す' },
    { kind: 'gravityFlip', icon: '⬆️', label: '重力反転', description: '3秒だけ重力を逆さに' },
    {
      kind: 'magnet',
      icon: '🧲',
      label: '同レベル吸引',
      description: 'タップしたアイテムと同レベルを 1 体ランダムに引き寄せ',
    },
  ],
  mv = H.memo(({ open: s, onSelect: S, onClose: b, canUse: y }) =>
    s
      ? I.jsx('div', {
          className: cn.backdrop,
          onClick: b,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '必殺技を選択',
          children: I.jsxs('div', {
            className: cn.menu,
            onClick: (o) => o.stopPropagation(),
            children: [
              I.jsx('h2', { className: cn.title, children: '必殺技を選択' }),
              I.jsx('div', {
                className: cn.choices,
                children: mx.map((o) => {
                  const l = dv[o.kind],
                    c = y[o.kind];
                  return I.jsxs(
                    'button',
                    {
                      type: 'button',
                      className: `${cn.choice} ${c ? '' : cn.choice_disabled}`,
                      onClick: () => c && S(o.kind),
                      disabled: !c,
                      children: [
                        I.jsx('span', {
                          className: cn.choice_icon,
                          'aria-hidden': 'true',
                          children: o.icon,
                        }),
                        I.jsx('span', { className: cn.choice_label, children: o.label }),
                        I.jsx('span', { className: cn.choice_desc, children: o.description }),
                        I.jsx('span', {
                          className: cn.choice_cost,
                          'aria-label': `コスト ${l} ゲージ`,
                          children: Array.from({ length: l }, (d, f) =>
                            I.jsx('span', { className: cn.cost_pip }, f)
                          ),
                        }),
                      ],
                    },
                    o.kind
                  );
                }),
              }),
              I.jsx('button', {
                type: 'button',
                className: cn.cancel,
                onClick: b,
                children: 'キャンセル',
              }),
            ],
          }),
        })
      : null
  );
mv.displayName = 'SkillMenu';
const hx = '_top_bar_15roj_1',
  vx = '_right_15roj_12',
  gx = '_settings_15roj_18',
  qo = { top_bar: hx, right: vx, settings: gx },
  yx = '_next_1n5pn_1',
  px = '_label_1n5pn_7',
  xx = '_thumb_1n5pn_14',
  Sx = '_image_1n5pn_27',
  ar = { next: yx, label: px, thumb: xx, image: Sx },
  Ex = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  hv = H.memo(({ item: s }) =>
    I.jsxs('div', {
      className: ar.next,
      children: [
        I.jsx('span', { className: ar.label, children: 'NEXT' }),
        I.jsx('div', {
          className: ar.thumb,
          'data-testid': 'next-item',
          children: s
            ? I.jsx('img', { src: Ex(s.svgPath), alt: s.name, className: ar.image })
            : null,
        }),
      ],
    })
  );
hv.displayName = 'NextItemPreview';
const bx = '_score_display_pgke7_1',
  Cx = '_row_pgke7_7',
  Mx = '_label_pgke7_13',
  Tx = '_value_pgke7_20',
  Rx = '_label_small_pgke7_28',
  Ax = '_value_small_pgke7_35',
  ka = { score_display: bx, row: Cx, label: Mx, value: Tx, label_small: Rx, value_small: Ax },
  vv = H.memo(({ score: s, bestScore: S }) =>
    I.jsxs('div', {
      className: ka.score_display,
      children: [
        I.jsxs('div', {
          className: ka.row,
          children: [
            I.jsx('span', { className: ka.label, children: 'SCORE' }),
            I.jsx('span', { className: ka.value, 'data-testid': 'score-value', children: s }),
          ],
        }),
        I.jsxs('div', {
          className: ka.row,
          children: [
            I.jsx('span', { className: ka.label_small, children: 'BEST' }),
            I.jsx('span', { className: ka.value_small, children: S }),
          ],
        }),
      ],
    })
  );
vv.displayName = 'ScoreDisplay';
const _x = ({ score: s, bestScore: S, nextItem: b, onOpenSettings: y }) =>
  I.jsxs('header', {
    className: qo.top_bar,
    children: [
      I.jsx(vv, { score: s, bestScore: S }),
      I.jsxs('div', {
        className: qo.right,
        children: [
          I.jsx(hv, { item: b }),
          I.jsx('button', {
            type: 'button',
            className: qo.settings,
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
 */ var Ox = rr.exports,
  Ah;
function Dx() {
  return (
    Ah ||
      ((Ah = 1),
      (function (s, S) {
        (function (y, o) {
          s.exports = o();
        })(Ox, function () {
          return (function (b) {
            var y = {};
            function o(l) {
              if (y[l]) return y[l].exports;
              var c = (y[l] = { i: l, l: !1, exports: {} });
              return (b[l].call(c.exports, c, c.exports, o), (c.l = !0), c.exports);
            }
            return (
              (o.m = b),
              (o.c = y),
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
                      function (v) {
                        return l[v];
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
            function (b, y) {
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
                      var f, v;
                      typeof d == 'boolean' ? ((f = 2), (v = d)) : ((f = 1), (v = !0));
                      for (var m = f; m < arguments.length; m++) {
                        var h = arguments[m];
                        if (h)
                          for (var g in h)
                            v &&
                            h[g] &&
                            h[g].constructor === Object &&
                            (!c[g] || c[g].constructor === Object)
                              ? ((c[g] = c[g] || {}), o.extend(c[g], v, h[g]))
                              : (c[g] = h[g]);
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
                        for (var f = Object.keys(c), v = 0; v < f.length; v++) d.push(c[f[v]]);
                        return d;
                      }
                      for (var m in c) d.push(c[m]);
                      return d;
                    }),
                    (o.get = function (c, d, f, v) {
                      d = d.split('.').slice(f, v);
                      for (var m = 0; m < d.length; m += 1) c = c[d[m]];
                      return c;
                    }),
                    (o.set = function (c, d, f, v, m) {
                      var h = d.split('.').slice(v, m);
                      return ((o.get(c, d, 0, -1)[h[h.length - 1]] = f), f);
                    }),
                    (o.shuffle = function (c) {
                      for (var d = c.length - 1; d > 0; d--) {
                        var f = Math.floor(o.random() * (d + 1)),
                          v = c[d];
                        ((c[d] = c[f]), (c[f] = v));
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
                      for (var f = [], v = 0; v < c.length; v += 1) f.push(d(c[v]));
                      return f;
                    }),
                    (o.topologicalSort = function (c) {
                      var d = [],
                        f = [],
                        v = [];
                      for (var m in c) !f[m] && !v[m] && o._topologicalSort(m, f, v, c, d);
                      return d;
                    }),
                    (o._topologicalSort = function (c, d, f, v, m) {
                      var h = v[c] || [];
                      f[c] = !0;
                      for (var g = 0; g < h.length; g += 1) {
                        var r = h[g];
                        f[r] || d[r] || o._topologicalSort(r, d, f, v, m);
                      }
                      ((f[c] = !1), (d[c] = !0), m.push(c));
                    }),
                    (o.chain = function () {
                      for (var c = [], d = 0; d < arguments.length; d += 1) {
                        var f = arguments[d];
                        f._chained ? c.push.apply(c, f._chained) : c.push(f);
                      }
                      var v = function () {
                        for (
                          var m, h = new Array(arguments.length), g = 0, r = arguments.length;
                          g < r;
                          g++
                        )
                          h[g] = arguments[g];
                        for (g = 0; g < c.length; g += 1) {
                          var x = c[g].apply(m, h);
                          typeof x < 'u' && (m = x);
                        }
                        return m;
                      };
                      return ((v._chained = c), v);
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
                          !c && typeof ah < 'u' && (c = ah.decomp));
                      } catch {
                        c = null;
                      }
                      return c;
                    }));
                })());
            },
            function (b, y) {
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
                        var v = c[f];
                        (v.x > l.max.x && (l.max.x = v.x),
                          v.x < l.min.x && (l.min.x = v.x),
                          v.y > l.max.y && (l.max.y = v.y),
                          v.y < l.min.y && (l.min.y = v.y));
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
            function (b, y) {
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
                        v = Math.sin(c);
                      d || (d = {});
                      var m = l.x * f - l.y * v;
                      return ((d.y = l.x * v + l.y * f), (d.x = m), d);
                    }),
                    (o.rotateAbout = function (l, c, d, f) {
                      var v = Math.cos(c),
                        m = Math.sin(c);
                      f || (f = {});
                      var h = d.x + ((l.x - d.x) * v - (l.y - d.y) * m);
                      return ((f.y = d.y + ((l.x - d.x) * m + (l.y - d.y) * v)), (f.x = h), f);
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
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(2),
                d = o(0);
              (function () {
                ((l.create = function (f, v) {
                  for (var m = [], h = 0; h < f.length; h++) {
                    var g = f[h],
                      r = { x: g.x, y: g.y, index: h, body: v, isInternal: !1 };
                    m.push(r);
                  }
                  return m;
                }),
                  (l.fromPath = function (f, v) {
                    var m = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                      h = [];
                    return (
                      f.replace(m, function (g, r, x) {
                        h.push({ x: parseFloat(r), y: parseFloat(x) });
                      }),
                      l.create(h, v)
                    );
                  }),
                  (l.centre = function (f) {
                    for (
                      var v = l.area(f, !0), m = { x: 0, y: 0 }, h, g, r, x = 0;
                      x < f.length;
                      x++
                    )
                      ((r = (x + 1) % f.length),
                        (h = c.cross(f[x], f[r])),
                        (g = c.mult(c.add(f[x], f[r]), h)),
                        (m = c.add(m, g)));
                    return c.div(m, 6 * v);
                  }),
                  (l.mean = function (f) {
                    for (var v = { x: 0, y: 0 }, m = 0; m < f.length; m++)
                      ((v.x += f[m].x), (v.y += f[m].y));
                    return c.div(v, f.length);
                  }),
                  (l.area = function (f, v) {
                    for (var m = 0, h = f.length - 1, g = 0; g < f.length; g++)
                      ((m += (f[h].x - f[g].x) * (f[h].y + f[g].y)), (h = g));
                    return v ? m / 2 : Math.abs(m) / 2;
                  }),
                  (l.inertia = function (f, v) {
                    for (var m = 0, h = 0, g = f, r, x, p = 0; p < g.length; p++)
                      ((x = (p + 1) % g.length),
                        (r = Math.abs(c.cross(g[x], g[p]))),
                        (m += r * (c.dot(g[x], g[x]) + c.dot(g[x], g[p]) + c.dot(g[p], g[p]))),
                        (h += r));
                    return (v / 6) * (m / h);
                  }),
                  (l.translate = function (f, v, m) {
                    m = typeof m < 'u' ? m : 1;
                    var h = f.length,
                      g = v.x * m,
                      r = v.y * m,
                      x;
                    for (x = 0; x < h; x++) ((f[x].x += g), (f[x].y += r));
                    return f;
                  }),
                  (l.rotate = function (f, v, m) {
                    if (v !== 0) {
                      var h = Math.cos(v),
                        g = Math.sin(v),
                        r = m.x,
                        x = m.y,
                        p = f.length,
                        C,
                        R,
                        w,
                        U;
                      for (U = 0; U < p; U++)
                        ((C = f[U]),
                          (R = C.x - r),
                          (w = C.y - x),
                          (C.x = r + (R * h - w * g)),
                          (C.y = x + (R * g + w * h)));
                      return f;
                    }
                  }),
                  (l.contains = function (f, v) {
                    for (var m = v.x, h = v.y, g = f.length, r = f[g - 1], x, p = 0; p < g; p++) {
                      if (((x = f[p]), (m - r.x) * (x.y - r.y) + (h - r.y) * (r.x - x.x) > 0))
                        return !1;
                      r = x;
                    }
                    return !0;
                  }),
                  (l.scale = function (f, v, m, h) {
                    if (v === 1 && m === 1) return f;
                    h = h || l.centre(f);
                    for (var g, r, x = 0; x < f.length; x++)
                      ((g = f[x]),
                        (r = c.sub(g, h)),
                        (f[x].x = h.x + r.x * v),
                        (f[x].y = h.y + r.y * m));
                    return f;
                  }),
                  (l.chamfer = function (f, v, m, h, g) {
                    (typeof v == 'number' ? (v = [v]) : (v = v || [8]),
                      (m = typeof m < 'u' ? m : -1),
                      (h = h || 2),
                      (g = g || 14));
                    for (var r = [], x = 0; x < f.length; x++) {
                      var p = f[x - 1 >= 0 ? x - 1 : f.length - 1],
                        C = f[x],
                        R = f[(x + 1) % f.length],
                        w = v[x < v.length ? x : v.length - 1];
                      if (w === 0) {
                        r.push(C);
                        continue;
                      }
                      var U = c.normalise({ x: C.y - p.y, y: p.x - C.x }),
                        G = c.normalise({ x: R.y - C.y, y: C.x - R.x }),
                        M = Math.sqrt(2 * Math.pow(w, 2)),
                        O = c.mult(d.clone(U), w),
                        D = c.normalise(c.mult(c.add(U, G), 0.5)),
                        _ = c.sub(C, c.mult(D, M)),
                        L = m;
                      (m === -1 && (L = Math.pow(w, 0.32) * 1.75),
                        (L = d.clamp(L, h, g)),
                        L % 2 === 1 && (L += 1));
                      for (var B = Math.acos(c.dot(U, G)), Y = B / L, V = 0; V < L; V++)
                        r.push(c.add(c.rotate(O, Y * V), _));
                    }
                    return r;
                  }),
                  (l.clockwiseSort = function (f) {
                    var v = l.mean(f);
                    return (
                      f.sort(function (m, h) {
                        return c.angle(v, m) - c.angle(v, h);
                      }),
                      f
                    );
                  }),
                  (l.isConvex = function (f) {
                    var v = 0,
                      m = f.length,
                      h,
                      g,
                      r,
                      x;
                    if (m < 3) return null;
                    for (h = 0; h < m; h++)
                      if (
                        ((g = (h + 1) % m),
                        (r = (h + 2) % m),
                        (x = (f[g].x - f[h].x) * (f[r].y - f[g].y)),
                        (x -= (f[g].y - f[h].y) * (f[r].x - f[g].x)),
                        x < 0 ? (v |= 1) : x > 0 && (v |= 2),
                        v === 3)
                      )
                        return !1;
                    return v !== 0 ? !0 : null;
                  }),
                  (l.hull = function (f) {
                    var v = [],
                      m = [],
                      h,
                      g;
                    for (
                      f = f.slice(0),
                        f.sort(function (r, x) {
                          var p = r.x - x.x;
                          return p !== 0 ? p : r.y - x.y;
                        }),
                        g = 0;
                      g < f.length;
                      g += 1
                    ) {
                      for (
                        h = f[g];
                        m.length >= 2 && c.cross3(m[m.length - 2], m[m.length - 1], h) <= 0;
                      )
                        m.pop();
                      m.push(h);
                    }
                    for (g = f.length - 1; g >= 0; g -= 1) {
                      for (
                        h = f[g];
                        v.length >= 2 && c.cross3(v[v.length - 2], v[v.length - 1], h) <= 0;
                      )
                        v.pop();
                      v.push(h);
                    }
                    return (v.pop(), m.pop(), v.concat(m));
                  }));
              })();
            },
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(3),
                d = o(2),
                f = o(7),
                v = o(0),
                m = o(1),
                h = o(11);
              (function () {
                ((l._timeCorrection = !0),
                  (l._inertiaScale = 4),
                  (l._nextCollidingGroupId = 1),
                  (l._nextNonCollidingGroupId = -1),
                  (l._nextCategory = 1),
                  (l._baseDelta = 1e3 / 60),
                  (l.create = function (r) {
                    var x = {
                        id: v.nextId(),
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
                      p = v.extend(x, r);
                    return (g(p, r), p);
                  }),
                  (l.nextGroup = function (r) {
                    return r ? l._nextNonCollidingGroupId-- : l._nextCollidingGroupId++;
                  }),
                  (l.nextCategory = function () {
                    return ((l._nextCategory = l._nextCategory << 1), l._nextCategory);
                  }));
                var g = function (r, x) {
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
                    c.rotate(r.vertices, r.angle, r.position),
                    h.rotate(r.axes, r.angle),
                    m.update(r.bounds, r.vertices, r.velocity),
                    l.set(r, {
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
                ((l.set = function (r, x, p) {
                  var C;
                  typeof x == 'string' && ((C = x), (x = {}), (x[C] = p));
                  for (C in x)
                    if (Object.prototype.hasOwnProperty.call(x, C))
                      switch (((p = x[C]), C)) {
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
                  (l.setStatic = function (r, x) {
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
                    (x[0].body === r ? (r.vertices = x) : (r.vertices = c.create(x, r)),
                      (r.axes = h.fromVertices(r.vertices)),
                      (r.area = c.area(r.vertices)),
                      l.setMass(r, r.density * r.area));
                    var p = c.centre(r.vertices);
                    (c.translate(r.vertices, p, -1),
                      l.setInertia(r, l._inertiaScale * c.inertia(r.vertices, r.mass)),
                      c.translate(r.vertices, r.position),
                      m.update(r.bounds, r.vertices, r.velocity));
                  }),
                  (l.setParts = function (r, x, p) {
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
                        c.clockwiseSort(w);
                        var U = c.hull(w),
                          G = c.centre(U);
                        (l.setVertices(r, U), c.translate(r.vertices, G));
                      }
                      var M = l._totalProperties(r);
                      ((r.area = M.area),
                        (r.parent = r),
                        (r.position.x = M.centre.x),
                        (r.position.y = M.centre.y),
                        (r.positionPrev.x = M.centre.x),
                        (r.positionPrev.y = M.centre.y),
                        l.setMass(r, M.mass),
                        l.setInertia(r, M.inertia),
                        l.setPosition(r, M.centre));
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
                    var C = d.sub(x, r.position);
                    p
                      ? ((r.positionPrev.x = r.position.x),
                        (r.positionPrev.y = r.position.y),
                        (r.velocity.x = C.x),
                        (r.velocity.y = C.y),
                        (r.speed = d.magnitude(C)))
                      : ((r.positionPrev.x += C.x), (r.positionPrev.y += C.y));
                    for (var R = 0; R < r.parts.length; R++) {
                      var w = r.parts[R];
                      ((w.position.x += C.x),
                        (w.position.y += C.y),
                        c.translate(w.vertices, C),
                        m.update(w.bounds, w.vertices, r.velocity));
                    }
                  }),
                  (l.setAngle = function (r, x, p) {
                    var C = x - r.angle;
                    p
                      ? ((r.anglePrev = r.angle),
                        (r.angularVelocity = C),
                        (r.angularSpeed = Math.abs(C)))
                      : (r.anglePrev += C);
                    for (var R = 0; R < r.parts.length; R++) {
                      var w = r.parts[R];
                      ((w.angle += C),
                        c.rotate(w.vertices, C, r.position),
                        h.rotate(w.axes, C),
                        m.update(w.bounds, w.vertices, r.velocity),
                        R > 0 && d.rotateAbout(w.position, C, r.position, w.position));
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
                    l.setAngularVelocity(r, v.sign(l.getAngularVelocity(r)) * x);
                  }),
                  (l.translate = function (r, x, p) {
                    l.setPosition(r, d.add(r.position, x), p);
                  }),
                  (l.rotate = function (r, x, p, C) {
                    if (!p) l.setAngle(r, r.angle + x, C);
                    else {
                      var R = Math.cos(x),
                        w = Math.sin(x),
                        U = r.position.x - p.x,
                        G = r.position.y - p.y;
                      (l.setPosition(r, { x: p.x + (U * R - G * w), y: p.y + (U * w + G * R) }, C),
                        l.setAngle(r, r.angle + x, C));
                    }
                  }),
                  (l.scale = function (r, x, p, C) {
                    var R = 0,
                      w = 0;
                    C = C || r.position;
                    for (var U = 0; U < r.parts.length; U++) {
                      var G = r.parts[U];
                      (c.scale(G.vertices, x, p, C),
                        (G.axes = h.fromVertices(G.vertices)),
                        (G.area = c.area(G.vertices)),
                        l.setMass(G, r.density * G.area),
                        c.translate(G.vertices, { x: -G.position.x, y: -G.position.y }),
                        l.setInertia(G, l._inertiaScale * c.inertia(G.vertices, G.mass)),
                        c.translate(G.vertices, { x: G.position.x, y: G.position.y }),
                        U > 0 && ((R += G.area), (w += G.inertia)),
                        (G.position.x = C.x + (G.position.x - C.x) * x),
                        (G.position.y = C.y + (G.position.y - C.y) * p),
                        m.update(G.bounds, G.vertices, r.velocity));
                    }
                    (r.parts.length > 1 &&
                      ((r.area = R),
                      r.isStatic || (l.setMass(r, r.density * R), l.setInertia(r, w))),
                      r.circleRadius &&
                        (x === p ? (r.circleRadius *= x) : (r.circleRadius = null)));
                  }),
                  (l.update = function (r, x) {
                    x = (typeof x < 'u' ? x : 1e3 / 60) * r.timeScale;
                    var p = x * x,
                      C = l._timeCorrection ? x / (r.deltaTime || x) : 1,
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
                      (c.translate(M.vertices, r.velocity),
                        G > 0 && ((M.position.x += r.velocity.x), (M.position.y += r.velocity.y)),
                        r.angularVelocity !== 0 &&
                          (c.rotate(M.vertices, r.angularVelocity, r.position),
                          h.rotate(M.axes, r.angularVelocity),
                          G > 0 &&
                            d.rotateAbout(M.position, r.angularVelocity, r.position, M.position)),
                        m.update(M.bounds, M.vertices, r.velocity));
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
                    var C = { x: x.x - r.position.x, y: x.y - r.position.y };
                    ((r.force.x += p.x), (r.force.y += p.y), (r.torque += C.x * p.y - C.y * p.x));
                  }),
                  (l._totalProperties = function (r) {
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
                        (x.centre = d.add(x.centre, d.mult(C.position, R))));
                    }
                    return ((x.centre = d.div(x.centre, x.mass)), x);
                  }));
              })();
            },
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(0);
              (function () {
                ((l.on = function (d, f, v) {
                  for (var m = f.split(' '), h, g = 0; g < m.length; g++)
                    ((h = m[g]),
                      (d.events = d.events || {}),
                      (d.events[h] = d.events[h] || []),
                      d.events[h].push(v));
                  return v;
                }),
                  (l.off = function (d, f, v) {
                    if (!f) {
                      d.events = {};
                      return;
                    }
                    typeof f == 'function' && ((v = f), (f = c.keys(d.events).join(' ')));
                    for (var m = f.split(' '), h = 0; h < m.length; h++) {
                      var g = d.events[m[h]],
                        r = [];
                      if (v && g) for (var x = 0; x < g.length; x++) g[x] !== v && r.push(g[x]);
                      d.events[m[h]] = r;
                    }
                  }),
                  (l.trigger = function (d, f, v) {
                    var m,
                      h,
                      g,
                      r,
                      x = d.events;
                    if (x && c.keys(x).length > 0) {
                      (v || (v = {}), (m = f.split(' ')));
                      for (var p = 0; p < m.length; p++)
                        if (((h = m[p]), (g = x[h]), g)) {
                          ((r = c.clone(v, !1)), (r.name = h), (r.source = d));
                          for (var C = 0; C < g.length; C++) g[C].apply(d, [r]);
                        }
                    }
                  }));
              })();
            },
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(5),
                d = o(0),
                f = o(1),
                v = o(4);
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
                  (l.setModified = function (m, h, g, r) {
                    if (
                      ((m.isModified = h),
                      h &&
                        m.cache &&
                        ((m.cache.allBodies = null),
                        (m.cache.allConstraints = null),
                        (m.cache.allComposites = null)),
                      g && m.parent && l.setModified(m.parent, h, g, r),
                      r)
                    )
                      for (var x = 0; x < m.composites.length; x++) {
                        var p = m.composites[x];
                        l.setModified(p, h, g, r);
                      }
                  }),
                  (l.add = function (m, h) {
                    var g = [].concat(h);
                    c.trigger(m, 'beforeAdd', { object: h });
                    for (var r = 0; r < g.length; r++) {
                      var x = g[r];
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
                    return (c.trigger(m, 'afterAdd', { object: h }), m);
                  }),
                  (l.remove = function (m, h, g) {
                    var r = [].concat(h);
                    c.trigger(m, 'beforeRemove', { object: h });
                    for (var x = 0; x < r.length; x++) {
                      var p = r[x];
                      switch (p.type) {
                        case 'body':
                          l.removeBody(m, p, g);
                          break;
                        case 'constraint':
                          l.removeConstraint(m, p, g);
                          break;
                        case 'composite':
                          l.removeComposite(m, p, g);
                          break;
                        case 'mouseConstraint':
                          l.removeConstraint(m, p.constraint);
                          break;
                      }
                    }
                    return (c.trigger(m, 'afterRemove', { object: h }), m);
                  }),
                  (l.addComposite = function (m, h) {
                    return (m.composites.push(h), (h.parent = m), l.setModified(m, !0, !0, !1), m);
                  }),
                  (l.removeComposite = function (m, h, g) {
                    var r = d.indexOf(m.composites, h);
                    if (r !== -1) {
                      var x = l.allBodies(h);
                      l.removeCompositeAt(m, r);
                      for (var p = 0; p < x.length; p++) x[p].sleepCounter = 0;
                    }
                    if (g)
                      for (var p = 0; p < m.composites.length; p++)
                        l.removeComposite(m.composites[p], h, !0);
                    return m;
                  }),
                  (l.removeCompositeAt = function (m, h) {
                    return (m.composites.splice(h, 1), l.setModified(m, !0, !0, !1), m);
                  }),
                  (l.addBody = function (m, h) {
                    return (m.bodies.push(h), l.setModified(m, !0, !0, !1), m);
                  }),
                  (l.removeBody = function (m, h, g) {
                    var r = d.indexOf(m.bodies, h);
                    if ((r !== -1 && (l.removeBodyAt(m, r), (h.sleepCounter = 0)), g))
                      for (var x = 0; x < m.composites.length; x++)
                        l.removeBody(m.composites[x], h, !0);
                    return m;
                  }),
                  (l.removeBodyAt = function (m, h) {
                    return (m.bodies.splice(h, 1), l.setModified(m, !0, !0, !1), m);
                  }),
                  (l.addConstraint = function (m, h) {
                    return (m.constraints.push(h), l.setModified(m, !0, !0, !1), m);
                  }),
                  (l.removeConstraint = function (m, h, g) {
                    var r = d.indexOf(m.constraints, h);
                    if ((r !== -1 && l.removeConstraintAt(m, r), g))
                      for (var x = 0; x < m.composites.length; x++)
                        l.removeConstraint(m.composites[x], h, !0);
                    return m;
                  }),
                  (l.removeConstraintAt = function (m, h) {
                    return (m.constraints.splice(h, 1), l.setModified(m, !0, !0, !1), m);
                  }),
                  (l.clear = function (m, h, g) {
                    if (g)
                      for (var r = 0; r < m.composites.length; r++) l.clear(m.composites[r], h, !0);
                    return (
                      h
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
                    for (var h = [].concat(m.bodies), g = 0; g < m.composites.length; g++)
                      h = h.concat(l.allBodies(m.composites[g]));
                    return (m.cache && (m.cache.allBodies = h), h);
                  }),
                  (l.allConstraints = function (m) {
                    if (m.cache && m.cache.allConstraints) return m.cache.allConstraints;
                    for (var h = [].concat(m.constraints), g = 0; g < m.composites.length; g++)
                      h = h.concat(l.allConstraints(m.composites[g]));
                    return (m.cache && (m.cache.allConstraints = h), h);
                  }),
                  (l.allComposites = function (m) {
                    if (m.cache && m.cache.allComposites) return m.cache.allComposites;
                    for (var h = [].concat(m.composites), g = 0; g < m.composites.length; g++)
                      h = h.concat(l.allComposites(m.composites[g]));
                    return (m.cache && (m.cache.allComposites = h), h);
                  }),
                  (l.get = function (m, h, g) {
                    var r, x;
                    switch (g) {
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
                          return p.id.toString() === h.toString();
                        })),
                        x.length === 0 ? null : x[0])
                      : null;
                  }),
                  (l.move = function (m, h, g) {
                    return (l.remove(m, h), l.add(g, h), m);
                  }),
                  (l.rebase = function (m) {
                    for (
                      var h = l.allBodies(m).concat(l.allConstraints(m)).concat(l.allComposites(m)),
                        g = 0;
                      g < h.length;
                      g++
                    )
                      h[g].id = d.nextId();
                    return m;
                  }),
                  (l.translate = function (m, h, g) {
                    for (var r = g ? l.allBodies(m) : m.bodies, x = 0; x < r.length; x++)
                      v.translate(r[x], h);
                    return m;
                  }),
                  (l.rotate = function (m, h, g, r) {
                    for (
                      var x = Math.cos(h),
                        p = Math.sin(h),
                        C = r ? l.allBodies(m) : m.bodies,
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
                    return m;
                  }),
                  (l.scale = function (m, h, g, r, x) {
                    for (var p = x ? l.allBodies(m) : m.bodies, C = 0; C < p.length; C++) {
                      var R = p[C],
                        w = R.position.x - r.x,
                        U = R.position.y - r.y;
                      (v.setPosition(R, { x: r.x + w * h, y: r.y + U * g }), v.scale(R, h, g));
                    }
                    return m;
                  }),
                  (l.bounds = function (m) {
                    for (var h = l.allBodies(m), g = [], r = 0; r < h.length; r += 1) {
                      var x = h[r];
                      g.push(x.bounds.min, x.bounds.max);
                    }
                    return f.create(g);
                  }));
              })();
            },
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(4),
                d = o(5),
                f = o(0);
              (function () {
                ((l._motionWakeThreshold = 0.18),
                  (l._motionSleepThreshold = 0.08),
                  (l._minBias = 0.9),
                  (l.update = function (v, m) {
                    for (
                      var h = m / f._baseDelta, g = l._motionSleepThreshold, r = 0;
                      r < v.length;
                      r++
                    ) {
                      var x = v[r],
                        p = c.getSpeed(x),
                        C = c.getAngularSpeed(x),
                        R = p * p + C * C;
                      if (x.force.x !== 0 || x.force.y !== 0) {
                        l.set(x, !1);
                        continue;
                      }
                      var w = Math.min(x.motion, R),
                        U = Math.max(x.motion, R);
                      ((x.motion = l._minBias * w + (1 - l._minBias) * U),
                        x.sleepThreshold > 0 && x.motion < g
                          ? ((x.sleepCounter += 1),
                            x.sleepCounter >= x.sleepThreshold / h && l.set(x, !0))
                          : x.sleepCounter > 0 && (x.sleepCounter -= 1));
                    }
                  }),
                  (l.afterCollisions = function (v) {
                    for (var m = l._motionSleepThreshold, h = 0; h < v.length; h++) {
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
                          !C.isStatic && R.motion > m && l.set(C, !1);
                        }
                      }
                    }
                  }),
                  (l.set = function (v, m) {
                    var h = v.isSleeping;
                    m
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
                        h || d.trigger(v, 'sleepStart'))
                      : ((v.isSleeping = !1), (v.sleepCounter = 0), h && d.trigger(v, 'sleepEnd'));
                  }));
              })();
            },
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(3),
                d = o(9);
              (function () {
                var f = [],
                  v = { overlap: 0, axis: null },
                  m = { overlap: 0, axis: null };
                ((l.create = function (h, g) {
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
                  (l.collides = function (h, g, r) {
                    if (
                      (l._overlapAxes(v, h.vertices, g.vertices, h.axes),
                      v.overlap <= 0 ||
                        (l._overlapAxes(m, g.vertices, h.vertices, g.axes), m.overlap <= 0))
                    )
                      return null;
                    var x = r && r.table[d.id(h, g)],
                      p;
                    (x
                      ? (p = x.collision)
                      : ((p = l.create(h, g)),
                        (p.collided = !0),
                        (p.bodyA = h.id < g.id ? h : g),
                        (p.bodyB = h.id < g.id ? g : h),
                        (p.parentA = p.bodyA.parent),
                        (p.parentB = p.bodyB.parent)),
                      (h = p.bodyA),
                      (g = p.bodyB));
                    var C;
                    v.overlap < m.overlap ? (C = v) : (C = m);
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
                    var Y = l._findSupports(h, g, R, 1),
                      V = 0;
                    if (
                      (c.contains(h.vertices, Y[0]) && (G[V++] = Y[0]),
                      c.contains(h.vertices, Y[1]) && (G[V++] = Y[1]),
                      V < 2)
                    ) {
                      var F = l._findSupports(g, h, R, -1);
                      (c.contains(g.vertices, F[0]) && (G[V++] = F[0]),
                        V < 2 && c.contains(g.vertices, F[1]) && (G[V++] = F[1]));
                    }
                    return (V === 0 && (G[V++] = Y[0]), (p.supportCount = V), p);
                  }),
                  (l._overlapAxes = function (h, g, r, x) {
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
                        ae = ie.x,
                        A = ie.y,
                        N = R * ae + w * A,
                        q = U * ae + G * A,
                        $ = N,
                        le = q;
                      for (F = 1; F < p; F += 1)
                        ((Y = g[F].x * ae + g[F].y * A), Y > $ ? ($ = Y) : Y < N && (N = Y));
                      for (F = 1; F < C; F += 1)
                        ((Y = r[F].x * ae + r[F].y * A), Y > le ? (le = Y) : Y < q && (q = Y));
                      if (
                        ((L = $ - q),
                        (B = le - N),
                        (_ = L < B ? L : B),
                        _ < O && ((O = _), (D = V), _ <= 0))
                      )
                        break;
                    }
                    ((h.axis = x[D]), (h.overlap = O));
                  }),
                  (l._findSupports = function (h, g, r, x) {
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
                        ? ((f[0] = M), (f[1] = O), f)
                        : ((f[0] = M), (f[1] = _), f)
                    );
                  }));
              })();
            },
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(16);
              (function () {
                ((l.create = function (d, f) {
                  var v = d.bodyA,
                    m = d.bodyB,
                    h = {
                      id: l.id(v, m),
                      bodyA: v,
                      bodyB: m,
                      collision: d,
                      contacts: [c.create(), c.create()],
                      contactCount: 0,
                      separation: 0,
                      isActive: !0,
                      isSensor: v.isSensor || m.isSensor,
                      timeCreated: f,
                      timeUpdated: f,
                      inverseMass: 0,
                      friction: 0,
                      frictionStatic: 0,
                      restitution: 0,
                      slop: 0,
                    };
                  return (l.update(h, d, f), h);
                }),
                  (l.update = function (d, f, v) {
                    var m = f.supports,
                      h = f.supportCount,
                      g = d.contacts,
                      r = f.parentA,
                      x = f.parentB;
                    ((d.isActive = !0),
                      (d.timeUpdated = v),
                      (d.collision = f),
                      (d.separation = f.depth),
                      (d.inverseMass = r.inverseMass + x.inverseMass),
                      (d.friction = r.friction < x.friction ? r.friction : x.friction),
                      (d.frictionStatic =
                        r.frictionStatic > x.frictionStatic ? r.frictionStatic : x.frictionStatic),
                      (d.restitution =
                        r.restitution > x.restitution ? r.restitution : x.restitution),
                      (d.slop = r.slop > x.slop ? r.slop : x.slop),
                      (d.contactCount = h),
                      (f.pair = d));
                    var p = m[0],
                      C = g[0],
                      R = m[1],
                      w = g[1];
                    ((w.vertex === p || C.vertex === R) && ((g[1] = C), (g[0] = C = w), (w = g[1])),
                      (C.vertex = p),
                      (w.vertex = R));
                  }),
                  (l.setActive = function (d, f, v) {
                    f
                      ? ((d.isActive = !0), (d.timeUpdated = v))
                      : ((d.isActive = !1), (d.contactCount = 0));
                  }),
                  (l.id = function (d, f) {
                    return d.id < f.id
                      ? d.id.toString(36) + ':' + f.id.toString(36)
                      : f.id.toString(36) + ':' + d.id.toString(36);
                  }));
              })();
            },
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(3),
                d = o(2),
                f = o(7),
                v = o(1),
                m = o(11),
                h = o(0);
              (function () {
                ((l._warming = 0.4),
                  (l._torqueDampen = 1),
                  (l._minLength = 1e-6),
                  (l.create = function (g) {
                    var r = g;
                    (r.bodyA && !r.pointA && (r.pointA = { x: 0, y: 0 }),
                      r.bodyB && !r.pointB && (r.pointB = { x: 0, y: 0 }));
                    var x = r.bodyA ? d.add(r.bodyA.position, r.pointA) : r.pointA,
                      p = r.bodyB ? d.add(r.bodyB.position, r.pointB) : r.pointB,
                      C = d.magnitude(d.sub(x, p));
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
                  (l.preSolveAll = function (g) {
                    for (var r = 0; r < g.length; r += 1) {
                      var x = g[r],
                        p = x.constraintImpulse;
                      x.isStatic ||
                        (p.x === 0 && p.y === 0 && p.angle === 0) ||
                        ((x.position.x += p.x), (x.position.y += p.y), (x.angle += p.angle));
                    }
                  }),
                  (l.solveAll = function (g, r) {
                    for (var x = h.clamp(r / h._baseDelta, 0, 1), p = 0; p < g.length; p += 1) {
                      var C = g[p],
                        R = !C.bodyA || (C.bodyA && C.bodyA.isStatic),
                        w = !C.bodyB || (C.bodyB && C.bodyB.isStatic);
                      (R || w) && l.solve(g[p], x);
                    }
                    for (p = 0; p < g.length; p += 1)
                      ((C = g[p]),
                        (R = !C.bodyA || (C.bodyA && C.bodyA.isStatic)),
                        (w = !C.bodyB || (C.bodyB && C.bodyB.isStatic)),
                        !R && !w && l.solve(g[p], x));
                  }),
                  (l.solve = function (g, r) {
                    var x = g.bodyA,
                      p = g.bodyB,
                      C = g.pointA,
                      R = g.pointB;
                    if (!(!x && !p)) {
                      (x &&
                        !x.isStatic &&
                        (d.rotate(C, x.angle - g.angleA, C), (g.angleA = x.angle)),
                        p &&
                          !p.isStatic &&
                          (d.rotate(R, p.angle - g.angleB, R), (g.angleB = p.angle)));
                      var w = C,
                        U = R;
                      if (
                        (x && (w = d.add(x.position, C)),
                        p && (U = d.add(p.position, R)),
                        !(!w || !U))
                      ) {
                        var G = d.sub(w, U),
                          M = d.magnitude(G);
                        M < l._minLength && (M = l._minLength);
                        var O = (M - g.length) / M,
                          D = g.stiffness >= 1 || g.length === 0,
                          _ = D ? g.stiffness * r : g.stiffness * r * r,
                          L = g.damping * r,
                          B = d.mult(G, O * _),
                          Y = (x ? x.inverseMass : 0) + (p ? p.inverseMass : 0),
                          V = (x ? x.inverseInertia : 0) + (p ? p.inverseInertia : 0),
                          F = Y + V,
                          ie,
                          ae,
                          A,
                          N,
                          q;
                        if (L > 0) {
                          var $ = d.create();
                          ((A = d.div(G, M)),
                            (q = d.sub(
                              (p && d.sub(p.position, p.positionPrev)) || $,
                              (x && d.sub(x.position, x.positionPrev)) || $
                            )),
                            (N = d.dot(A, q)));
                        }
                        (x &&
                          !x.isStatic &&
                          ((ae = x.inverseMass / Y),
                          (x.constraintImpulse.x -= B.x * ae),
                          (x.constraintImpulse.y -= B.y * ae),
                          (x.position.x -= B.x * ae),
                          (x.position.y -= B.y * ae),
                          L > 0 &&
                            ((x.positionPrev.x -= L * A.x * N * ae),
                            (x.positionPrev.y -= L * A.y * N * ae)),
                          (ie =
                            (d.cross(C, B) / F) *
                            l._torqueDampen *
                            x.inverseInertia *
                            (1 - g.angularStiffness)),
                          (x.constraintImpulse.angle -= ie),
                          (x.angle -= ie)),
                          p &&
                            !p.isStatic &&
                            ((ae = p.inverseMass / Y),
                            (p.constraintImpulse.x += B.x * ae),
                            (p.constraintImpulse.y += B.y * ae),
                            (p.position.x += B.x * ae),
                            (p.position.y += B.y * ae),
                            L > 0 &&
                              ((p.positionPrev.x += L * A.x * N * ae),
                              (p.positionPrev.y += L * A.y * N * ae)),
                            (ie =
                              (d.cross(R, B) / F) *
                              l._torqueDampen *
                              p.inverseInertia *
                              (1 - g.angularStiffness)),
                            (p.constraintImpulse.angle += ie),
                            (p.angle += ie)));
                      }
                    }
                  }),
                  (l.postSolveAll = function (g) {
                    for (var r = 0; r < g.length; r++) {
                      var x = g[r],
                        p = x.constraintImpulse;
                      if (!(x.isStatic || (p.x === 0 && p.y === 0 && p.angle === 0))) {
                        f.set(x, !1);
                        for (var C = 0; C < x.parts.length; C++) {
                          var R = x.parts[C];
                          (c.translate(R.vertices, p),
                            C > 0 && ((R.position.x += p.x), (R.position.y += p.y)),
                            p.angle !== 0 &&
                              (c.rotate(R.vertices, p.angle, x.position),
                              m.rotate(R.axes, p.angle),
                              C > 0 && d.rotateAbout(R.position, p.angle, x.position, R.position)),
                            v.update(R.bounds, R.vertices, x.velocity));
                        }
                        ((p.angle *= l._warming), (p.x *= l._warming), (p.y *= l._warming));
                      }
                    }
                  }),
                  (l.pointAWorld = function (g) {
                    return {
                      x: (g.bodyA ? g.bodyA.position.x : 0) + (g.pointA ? g.pointA.x : 0),
                      y: (g.bodyA ? g.bodyA.position.y : 0) + (g.pointA ? g.pointA.y : 0),
                    };
                  }),
                  (l.pointBWorld = function (g) {
                    return {
                      x: (g.bodyB ? g.bodyB.position.x : 0) + (g.pointB ? g.pointB.x : 0),
                      y: (g.bodyB ? g.bodyB.position.y : 0) + (g.pointB ? g.pointB.y : 0),
                    };
                  }),
                  (l.currentLength = function (g) {
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
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(2),
                d = o(0);
              (function () {
                ((l.fromVertices = function (f) {
                  for (var v = {}, m = 0; m < f.length; m++) {
                    var h = (m + 1) % f.length,
                      g = c.normalise({ x: f[h].y - f[m].y, y: f[m].x - f[h].x }),
                      r = g.y === 0 ? 1 / 0 : g.x / g.y;
                    ((r = r.toFixed(3).toString()), (v[r] = g));
                  }
                  return d.values(v);
                }),
                  (l.rotate = function (f, v) {
                    if (v !== 0)
                      for (var m = Math.cos(v), h = Math.sin(v), g = 0; g < f.length; g++) {
                        var r = f[g],
                          x;
                        ((x = r.x * m - r.y * h), (r.y = r.x * h + r.y * m), (r.x = x));
                      }
                  }));
              })();
            },
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(3),
                d = o(0),
                f = o(4),
                v = o(1),
                m = o(2);
              (function () {
                ((l.rectangle = function (h, g, r, x, p) {
                  p = p || {};
                  var C = {
                    label: 'Rectangle Body',
                    position: { x: h, y: g },
                    vertices: c.fromPath('L 0 0 L ' + r + ' 0 L ' + r + ' ' + x + ' L 0 ' + x),
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
                  (l.trapezoid = function (h, g, r, x, p, C) {
                    ((C = C || {}),
                      p >= 1 && d.warn('Bodies.trapezoid: slope parameter must be < 1.'),
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
                      vertices: c.fromPath(M),
                    };
                    if (C.chamfer) {
                      var D = C.chamfer;
                      ((O.vertices = c.chamfer(
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
                  (l.circle = function (h, g, r, x, p) {
                    x = x || {};
                    var C = { label: 'Circle Body', circleRadius: r };
                    p = p || 25;
                    var R = Math.ceil(Math.max(10, Math.min(p, r)));
                    return (R % 2 === 1 && (R += 1), l.polygon(h, g, R, r, d.extend({}, C, x)));
                  }),
                  (l.polygon = function (h, g, r, x, p) {
                    if (((p = p || {}), r < 3)) return l.circle(h, g, x, p);
                    for (var C = (2 * Math.PI) / r, R = '', w = C * 0.5, U = 0; U < r; U += 1) {
                      var G = w + U * C,
                        M = Math.cos(G) * x,
                        O = Math.sin(G) * x;
                      R += 'L ' + M.toFixed(3) + ' ' + O.toFixed(3) + ' ';
                    }
                    var D = {
                      label: 'Polygon Body',
                      position: { x: h, y: g },
                      vertices: c.fromPath(R),
                    };
                    if (p.chamfer) {
                      var _ = p.chamfer;
                      ((D.vertices = c.chamfer(
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
                  (l.fromVertices = function (h, g, r, x, p, C, R, w) {
                    var U = d.getDecomp(),
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
                        d.isArray(r[0]) || (r = [r]),
                        F = 0;
                      F < r.length;
                      F += 1
                    )
                      if (
                        ((L = r[F]),
                        (D = c.isConvex(L)),
                        (_ = !D),
                        _ &&
                          !G &&
                          d.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                          ),
                        D || !G)
                      )
                        (D ? (L = c.clockwiseSort(L)) : (L = c.hull(L)),
                          O.push({ position: { x: h, y: g }, vertices: L }));
                      else {
                        var ae = L.map(function (oe) {
                          return [oe.x, oe.y];
                        });
                        (U.makeCCW(ae),
                          C !== !1 && U.removeCollinearPoints(ae, C),
                          w !== !1 && U.removeDuplicatePoints && U.removeDuplicatePoints(ae, w));
                        var A = U.quickDecomp(ae);
                        for (B = 0; B < A.length; B++) {
                          var N = A[B],
                            q = N.map(function (oe) {
                              return { x: oe[0], y: oe[1] };
                            });
                          (R > 0 && c.area(q) < R) ||
                            O.push({ position: c.centre(q), vertices: q });
                        }
                      }
                    for (B = 0; B < O.length; B++) O[B] = f.create(d.extend(O[B], x));
                    if (p) {
                      var $ = 5;
                      for (B = 0; B < O.length; B++) {
                        var le = O[B];
                        for (Y = B + 1; Y < O.length; Y++) {
                          var z = O[Y];
                          if (v.overlaps(le.bounds, z.bounds)) {
                            var Z = le.vertices,
                              P = z.vertices;
                            for (V = 0; V < le.vertices.length; V++)
                              for (ie = 0; ie < z.vertices.length; ie++) {
                                var ue = m.magnitudeSquared(m.sub(Z[(V + 1) % Z.length], P[ie])),
                                  re = m.magnitudeSquared(m.sub(Z[V], P[(ie + 1) % P.length]));
                                ue < $ &&
                                  re < $ &&
                                  ((Z[V].isInternal = !0), (P[ie].isInternal = !0));
                              }
                          }
                        }
                      }
                    }
                    return O.length > 1
                      ? ((M = f.create(d.extend({ parts: O.slice(0) }, x))),
                        f.setPosition(M, { x: h, y: g }),
                        M)
                      : O[0];
                  }));
              })();
            },
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(0),
                d = o(8);
              (function () {
                ((l.create = function (f) {
                  var v = { bodies: [], collisions: [], pairs: null };
                  return c.extend(v, f);
                }),
                  (l.setBodies = function (f, v) {
                    f.bodies = v.slice(0);
                  }),
                  (l.clear = function (f) {
                    ((f.bodies = []), (f.collisions = []));
                  }),
                  (l.collisions = function (f) {
                    var v = f.pairs,
                      m = f.bodies,
                      h = m.length,
                      g = l.canCollide,
                      r = d.collides,
                      x = f.collisions,
                      p = 0,
                      C,
                      R;
                    for (m.sort(l._compareBoundsX), C = 0; C < h; C++) {
                      var w = m[C],
                        U = w.bounds,
                        G = w.bounds.max.x,
                        M = w.bounds.max.y,
                        O = w.bounds.min.y,
                        D = w.isStatic || w.isSleeping,
                        _ = w.parts.length,
                        L = _ === 1;
                      for (R = C + 1; R < h; R++) {
                        var B = m[R],
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
                            for (var ie = _ > 1 ? 1 : 0, ae = V > 1 ? 1 : 0, A = ie; A < _; A++)
                              for (var N = w.parts[A], U = N.bounds, q = ae; q < V; q++) {
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
                  (l.canCollide = function (f, v) {
                    return f.group === v.group && f.group !== 0
                      ? f.group > 0
                      : (f.mask & v.category) !== 0 && (v.mask & f.category) !== 0;
                  }),
                  (l._compareBoundsX = function (f, v) {
                    return f.bounds.min.x - v.bounds.min.x;
                  }));
              })();
            },
            function (b, y, o) {
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
                    (f.mousemove = function (v) {
                      var m = l._getRelativeMousePosition(v, f.element, f.pixelRatio),
                        h = v.changedTouches;
                      (h && ((f.button = 0), v.preventDefault()),
                        (f.absolute.x = m.x),
                        (f.absolute.y = m.y),
                        (f.position.x = f.absolute.x * f.scale.x + f.offset.x),
                        (f.position.y = f.absolute.y * f.scale.y + f.offset.y),
                        (f.sourceEvents.mousemove = v));
                    }),
                    (f.mousedown = function (v) {
                      var m = l._getRelativeMousePosition(v, f.element, f.pixelRatio),
                        h = v.changedTouches;
                      (h ? ((f.button = 0), v.preventDefault()) : (f.button = v.button),
                        (f.absolute.x = m.x),
                        (f.absolute.y = m.y),
                        (f.position.x = f.absolute.x * f.scale.x + f.offset.x),
                        (f.position.y = f.absolute.y * f.scale.y + f.offset.y),
                        (f.mousedownPosition.x = f.position.x),
                        (f.mousedownPosition.y = f.position.y),
                        (f.sourceEvents.mousedown = v));
                    }),
                    (f.mouseup = function (v) {
                      var m = l._getRelativeMousePosition(v, f.element, f.pixelRatio),
                        h = v.changedTouches;
                      (h && v.preventDefault(),
                        (f.button = -1),
                        (f.absolute.x = m.x),
                        (f.absolute.y = m.y),
                        (f.position.x = f.absolute.x * f.scale.x + f.offset.x),
                        (f.position.y = f.absolute.y * f.scale.y + f.offset.y),
                        (f.mouseupPosition.x = f.position.x),
                        (f.mouseupPosition.y = f.position.y),
                        (f.sourceEvents.mouseup = v));
                    }),
                    (f.mousewheel = function (v) {
                      ((f.wheelDelta = Math.max(-1, Math.min(1, v.wheelDelta || -v.detail))),
                        v.preventDefault(),
                        (f.sourceEvents.mousewheel = v));
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
                  (l._getRelativeMousePosition = function (d, f, v) {
                    var m = f.getBoundingClientRect(),
                      h = document.documentElement || document.body.parentNode || document.body,
                      g = window.pageXOffset !== void 0 ? window.pageXOffset : h.scrollLeft,
                      r = window.pageYOffset !== void 0 ? window.pageYOffset : h.scrollTop,
                      x = d.changedTouches,
                      p,
                      C;
                    return (
                      x
                        ? ((p = x[0].pageX - m.left - g), (C = x[0].pageY - m.top - r))
                        : ((p = d.pageX - m.left - g), (C = d.pageY - m.top - r)),
                      {
                        x: p / ((f.clientWidth / (f.width || f.clientWidth)) * v),
                        y: C / ((f.clientHeight / (f.height || f.clientHeight)) * v),
                      }
                    );
                  }));
              })();
            },
            function (b, y, o) {
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
                        v = l.versionParse(d.version).number,
                        m = l.versionParse(f.version).number;
                      v > m
                        ? (c.warn(
                            'Plugin.register:',
                            l.toString(f),
                            'was upgraded to',
                            l.toString(d)
                          ),
                          (l._registry[d.name] = d))
                        : v < m
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
                    var v = d.for && l.dependencyParse(d.for);
                    return !d.for || (f.name === v.name && l.versionSatisfies(f.version, v.range));
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
                      var v = l.dependencies(d), m = c.topologicalSort(v), h = [], g = 0;
                      g < m.length;
                      g += 1
                    )
                      if (m[g] !== d.name) {
                        var r = l.resolve(m[g]);
                        if (!r) {
                          h.push('❌ ' + m[g]);
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
                            ? (h.push('🔶 ' + l.toString(r)), delete r._warned)
                            : h.push('✅ ' + l.toString(r)),
                          d.used.push(r.name));
                      }
                    h.length > 0 && c.info(h.join('  '));
                  }),
                  (l.dependencies = function (d, f) {
                    var v = l.dependencyParse(d),
                      m = v.name;
                    if (((f = f || {}), !(m in f))) {
                      ((d = l.resolve(d) || d),
                        (f[m] = c.map(d.uses || [], function (g) {
                          l.isPlugin(g) && l.register(g);
                          var r = l.dependencyParse(g),
                            x = l.resolve(g);
                          return (
                            x && !l.versionSatisfies(x.version, r.range)
                              ? (c.warn(
                                  'Plugin.dependencies:',
                                  l.toString(x),
                                  'does not satisfy',
                                  l.toString(r),
                                  'used by',
                                  l.toString(v) + '.'
                                ),
                                (x._warned = !0),
                                (d._warned = !0))
                              : x ||
                                (c.warn(
                                  'Plugin.dependencies:',
                                  l.toString(g),
                                  'used by',
                                  l.toString(v),
                                  'could not be resolved.'
                                ),
                                (d._warned = !0)),
                            r.name
                          );
                        })));
                      for (var h = 0; h < f[m].length; h += 1) l.dependencies(f[m][h], f);
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
                    var v = f.exec(d),
                      m = Number(v[4]),
                      h = Number(v[5]),
                      g = Number(v[6]);
                    return {
                      isRange: !!(v[1] || v[2]),
                      version: v[3],
                      range: d,
                      operator: v[1] || v[2] || '',
                      major: m,
                      minor: h,
                      patch: g,
                      parts: [m, h, g],
                      prerelease: v[7],
                      number: m * 1e8 + h * 1e4 + g,
                    };
                  }),
                  (l.versionSatisfies = function (d, f) {
                    f = f || '*';
                    var v = l.versionParse(f),
                      m = l.versionParse(d);
                    if (v.isRange) {
                      if (v.operator === '*' || d === '*') return !0;
                      if (v.operator === '>') return m.number > v.number;
                      if (v.operator === '>=') return m.number >= v.number;
                      if (v.operator === '~')
                        return m.major === v.major && m.minor === v.minor && m.patch >= v.patch;
                      if (v.operator === '^')
                        return v.major > 0
                          ? m.major === v.major && m.number >= v.number
                          : v.minor > 0
                            ? m.minor === v.minor && m.patch >= v.patch
                            : m.patch === v.patch;
                    }
                    return d === f || d === '*';
                  }));
              })();
            },
            function (b, y) {
              var o = {};
              ((b.exports = o),
                (function () {
                  o.create = function (l) {
                    return { vertex: l, normalImpulse: 0, tangentImpulse: 0 };
                  };
                })());
            },
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(7),
                d = o(18),
                f = o(13),
                v = o(19),
                m = o(5),
                h = o(6),
                g = o(10),
                r = o(0),
                x = o(4);
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
                      (R.world = p.world || h.create({ label: 'World' })),
                      (R.pairs = p.pairs || v.create()),
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
                      w = p.world,
                      U = p.detector,
                      G = p.pairs,
                      M = p.timing,
                      O = M.timestamp,
                      D;
                    (C > l._deltaMax &&
                      r.warnOnce(
                        'Matter.Engine.update: delta argument is recommended to be less than or equal to',
                        l._deltaMax.toFixed(3),
                        'ms.'
                      ),
                      (C = typeof C < 'u' ? C : r._baseDelta),
                      (C *= M.timeScale),
                      (M.timestamp += C),
                      (M.lastDelta = C));
                    var _ = { timestamp: M.timestamp, delta: C };
                    m.trigger(p, 'beforeUpdate', _);
                    var L = h.allBodies(w),
                      B = h.allConstraints(w);
                    for (
                      w.isModified && (f.setBodies(U, L), h.setModified(w, !1, !1, !0)),
                        p.enableSleeping && c.update(L, C),
                        l._bodiesApplyGravity(L, p.gravity),
                        C > 0 && l._bodiesUpdate(L, C),
                        m.trigger(p, 'beforeSolve', _),
                        g.preSolveAll(L),
                        D = 0;
                      D < p.constraintIterations;
                      D++
                    )
                      g.solveAll(B, C);
                    g.postSolveAll(L);
                    var Y = f.collisions(U);
                    (v.update(G, Y, O),
                      p.enableSleeping && c.afterCollisions(G.list),
                      G.collisionStart.length > 0 &&
                        m.trigger(p, 'collisionStart', {
                          pairs: G.collisionStart,
                          timestamp: M.timestamp,
                          delta: C,
                        }));
                    var V = r.clamp(20 / p.positionIterations, 0, 1);
                    for (d.preSolvePosition(G.list), D = 0; D < p.positionIterations; D++)
                      d.solvePosition(G.list, C, V);
                    for (
                      d.postSolvePosition(L), g.preSolveAll(L), D = 0;
                      D < p.constraintIterations;
                      D++
                    )
                      g.solveAll(B, C);
                    for (
                      g.postSolveAll(L), d.preSolveVelocity(G.list), D = 0;
                      D < p.velocityIterations;
                      D++
                    )
                      d.solveVelocity(G.list, C);
                    return (
                      l._bodiesUpdateVelocities(L),
                      G.collisionActive.length > 0 &&
                        m.trigger(p, 'collisionActive', {
                          pairs: G.collisionActive,
                          timestamp: M.timestamp,
                          delta: C,
                        }),
                      G.collisionEnd.length > 0 &&
                        m.trigger(p, 'collisionEnd', {
                          pairs: G.collisionEnd,
                          timestamp: M.timestamp,
                          delta: C,
                        }),
                      l._bodiesClearForces(L),
                      m.trigger(p, 'afterUpdate', _),
                      (p.timing.lastElapsed = r.now() - R),
                      p
                    );
                  }),
                  (l.merge = function (p, C) {
                    if ((r.extend(p, C), C.world)) {
                      ((p.world = C.world), l.clear(p));
                      for (var R = h.allBodies(p.world), w = 0; w < R.length; w++) {
                        var U = R[w];
                        (c.set(U, !1), (U.id = r.nextId()));
                      }
                    }
                  }),
                  (l.clear = function (p) {
                    (v.clear(p.pairs), f.clear(p.detector));
                  }),
                  (l._bodiesClearForces = function (p) {
                    for (var C = p.length, R = 0; R < C; R++) {
                      var w = p[R];
                      ((w.force.x = 0), (w.force.y = 0), (w.torque = 0));
                    }
                  }),
                  (l._bodiesApplyGravity = function (p, C) {
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
                  (l._bodiesUpdate = function (p, C) {
                    for (var R = p.length, w = 0; w < R; w++) {
                      var U = p[w];
                      U.isStatic || U.isSleeping || x.update(U, C);
                    }
                  }),
                  (l._bodiesUpdateVelocities = function (p) {
                    for (var C = p.length, R = 0; R < C; R++) x.updateVelocities(p[R]);
                  }));
              })();
            },
            function (b, y, o) {
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
                  (l.preSolvePosition = function (v) {
                    var m,
                      h,
                      g,
                      r = v.length;
                    for (m = 0; m < r; m++)
                      ((h = v[m]),
                        h.isActive &&
                          ((g = h.contactCount),
                          (h.collision.parentA.totalContacts += g),
                          (h.collision.parentB.totalContacts += g)));
                  }),
                  (l.solvePosition = function (v, m, h) {
                    var g,
                      r,
                      x,
                      p,
                      C,
                      R,
                      w,
                      U,
                      G = l._positionDampen * (h || 1),
                      M = d.clamp(m / d._baseDelta, 0, 1),
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
                  (l.postSolvePosition = function (v) {
                    for (
                      var m = l._positionWarming,
                        h = v.length,
                        g = c.translate,
                        r = f.update,
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
                            : ((C.x *= m), (C.y *= m)));
                      }
                    }
                  }),
                  (l.preSolveVelocity = function (v) {
                    var m = v.length,
                      h,
                      g;
                    for (h = 0; h < m; h++) {
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
                  (l.solveVelocity = function (v, m) {
                    var h = m / d._baseDelta,
                      g = h * h,
                      r = g * h,
                      x = -l._restingThresh * h,
                      p = l._restingThreshTangent,
                      C = l._frictionNormalMultiplier * h,
                      R = l._frictionMaxStatic,
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
                          ae = D.inverseMass,
                          A = D.friction * D.frictionStatic * C,
                          N = D.contacts,
                          q = D.contactCount,
                          $ = 1 / q,
                          le = L.position.x - L.positionPrev.x,
                          z = L.position.y - L.positionPrev.y,
                          Z = L.angle - L.anglePrev,
                          P = B.position.x - B.positionPrev.x,
                          ue = B.position.y - B.positionPrev.y,
                          re = B.angle - B.anglePrev;
                        for (O = 0; O < q; O++) {
                          var oe = N[O],
                            ve = oe.vertex,
                            Se = ve.x - L.position.x,
                            Ce = ve.y - L.position.y,
                            Be = ve.x - B.position.x,
                            Ye = ve.y - B.position.y,
                            Ve = le - Ce * Z,
                            ft = z + Se * Z,
                            Fe = P - Ye * re,
                            fe = ue + Be * re,
                            Yt = Ve - Fe,
                            xe = ft - fe,
                            Ae = Y * Yt + V * xe,
                            _t = F * Yt + ie * xe,
                            Vt = D.separation + Ae,
                            bt = Math.min(Vt, 1);
                          bt = Vt < 0 ? 0 : bt;
                          var $e = bt * A;
                          _t < -$e || _t > $e
                            ? ((G = _t > 0 ? _t : -_t),
                              (U = D.friction * (_t > 0 ? 1 : -1) * r),
                              U < -G ? (U = -G) : U > G && (U = G))
                            : ((U = _t), (G = R));
                          var Fa = Se * V - Ce * Y,
                            st = Be * V - Ye * Y,
                            _a = $ / (ae + L.inverseInertia * Fa * Fa + B.inverseInertia * st * st),
                            Mn = (1 + D.restitution) * Ae * _a;
                          if (((U *= _a), Ae < x)) oe.normalImpulse = 0;
                          else {
                            var qt = oe.normalImpulse;
                            ((oe.normalImpulse += Mn),
                              oe.normalImpulse > 0 && (oe.normalImpulse = 0),
                              (Mn = oe.normalImpulse - qt));
                          }
                          if (_t < -p || _t > p) oe.tangentImpulse = 0;
                          else {
                            var Wt = oe.tangentImpulse;
                            ((oe.tangentImpulse += U),
                              oe.tangentImpulse < -G && (oe.tangentImpulse = -G),
                              oe.tangentImpulse > G && (oe.tangentImpulse = G),
                              (U = oe.tangentImpulse - Wt));
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
            function (b, y, o) {
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
                  (l.update = function (f, v, m) {
                    var h = c.update,
                      g = c.create,
                      r = c.setActive,
                      x = f.table,
                      p = f.list,
                      C = p.length,
                      R = C,
                      w = f.collisionStart,
                      U = f.collisionEnd,
                      G = f.collisionActive,
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
                          ? (B.isActive && (G[_++] = B), h(B, L, m))
                          : ((B = g(L, m)), (x[B.id] = B), (w[O++] = B), (p[R++] = B)));
                    for (R = 0, C = p.length, Y = 0; Y < C; Y++)
                      ((B = p[Y]),
                        B.timeUpdated >= m
                          ? (p[R++] = B)
                          : (r(B, !1, m),
                            B.collision.bodyA.sleepCounter > 0 && B.collision.bodyB.sleepCounter > 0
                              ? (p[R++] = B)
                              : ((U[D++] = B), delete x[B.id])));
                    (p.length !== R && (p.length = R),
                      w.length !== O && (w.length = O),
                      U.length !== D && (U.length = D),
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
            function (b, y, o) {
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
            function (b, y, o) {
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
                  (l.before = function (f, v) {
                    return ((f = f.replace(/^Matter./, '')), d.chainPathBefore(l, f, v));
                  }),
                  (l.after = function (f, v) {
                    return ((f = f.replace(/^Matter./, '')), d.chainPathAfter(l, f, v));
                  }));
              })();
            },
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(6),
                d = o(10),
                f = o(0),
                v = o(4),
                m = o(12),
                h = f.deprecated;
              (function () {
                ((l.stack = function (g, r, x, p, C, R, w) {
                  for (
                    var U = c.create({ label: 'Stack' }), G = g, M = r, O, D = 0, _ = 0;
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
                          c.addBody(U, Y),
                          (O = Y),
                          (D += 1));
                      } else G += C;
                    }
                    ((M += L + R), (G = g));
                  }
                  return U;
                }),
                  (l.chain = function (g, r, x, p, C, R) {
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
                        Y = f.extend(B, R);
                      c.addConstraint(g, d.create(Y));
                    }
                    return ((g.label += ' Chain'), g);
                  }),
                  (l.mesh = function (g, r, x, p, C) {
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
                          c.addConstraint(g, d.create(f.extend({ bodyA: G, bodyB: M }, C))));
                      if (w > 0)
                        for (U = 0; U < r; U++)
                          ((G = R[U + (w - 1) * r]),
                            (M = R[U + w * r]),
                            c.addConstraint(g, d.create(f.extend({ bodyA: G, bodyB: M }, C))),
                            p &&
                              U > 0 &&
                              ((O = R[U - 1 + (w - 1) * r]),
                              c.addConstraint(g, d.create(f.extend({ bodyA: O, bodyB: M }, C)))),
                            p &&
                              U < r - 1 &&
                              ((O = R[U + 1 + (w - 1) * r]),
                              c.addConstraint(g, d.create(f.extend({ bodyA: O, bodyB: M }, C)))));
                    }
                    return ((g.label += ' Mesh'), g);
                  }),
                  (l.pyramid = function (g, r, x, p, C, R, w) {
                    return l.stack(g, r, x, p, C, R, function (U, G, M, O, D, _) {
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
                  (l.newtonsCradle = function (g, r, x, p, C) {
                    for (var R = c.create({ label: 'Newtons Cradle' }), w = 0; w < x; w++) {
                      var U = 1.9,
                        G = m.circle(g + w * (p * U), r + C, p, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        M = d.create({ pointA: { x: g + w * (p * U), y: r }, bodyB: G });
                      (c.addBody(R, G), c.addConstraint(R, M));
                    }
                    return R;
                  }),
                  h(
                    l,
                    'newtonsCradle',
                    'Composites.newtonsCradle ➤ moved to newtonsCradle example'
                  ),
                  (l.car = function (g, r, x, p, C) {
                    var R = v.nextGroup(!0),
                      w = 20,
                      U = -x * 0.5 + w,
                      G = x * 0.5 - w,
                      M = 0,
                      O = c.create({ label: 'Car' }),
                      D = m.rectangle(g, r, x, p, {
                        collisionFilter: { group: R },
                        chamfer: { radius: p * 0.5 },
                        density: 2e-4,
                      }),
                      _ = m.circle(g + U, r + M, C, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      L = m.circle(g + G, r + M, C, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      B = d.create({
                        bodyB: D,
                        pointB: { x: U, y: M },
                        bodyA: _,
                        stiffness: 1,
                        length: 0,
                      }),
                      Y = d.create({
                        bodyB: D,
                        pointB: { x: G, y: M },
                        bodyA: L,
                        stiffness: 1,
                        length: 0,
                      });
                    return (
                      c.addBody(O, D),
                      c.addBody(O, _),
                      c.addBody(O, L),
                      c.addConstraint(O, B),
                      c.addConstraint(O, Y),
                      O
                    );
                  }),
                  h(l, 'car', 'Composites.car ➤ moved to car example'),
                  (l.softBody = function (g, r, x, p, C, R, w, U, G, M) {
                    ((G = f.extend({ inertia: 1 / 0 }, G)),
                      (M = f.extend({ stiffness: 0.2, render: { type: 'line', anchors: !1 } }, M)));
                    var O = l.stack(g, r, x, p, C, R, function (D, _) {
                      return m.circle(D, _, U, G);
                    });
                    return (l.mesh(O, x, p, w, M), (O.label = 'Soft Body'), O);
                  }),
                  h(l, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples'));
              })();
            },
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(9),
                d = o(0),
                f = d.deprecated;
              (function () {
                ((l.create = function (v) {
                  var m = {
                    buckets: {},
                    pairs: {},
                    pairsList: [],
                    bucketWidth: 48,
                    bucketHeight: 48,
                  };
                  return d.extend(m, v);
                }),
                  (l.update = function (v, m, h, g) {
                    var r,
                      x,
                      p,
                      C = h.world,
                      R = v.buckets,
                      w,
                      U,
                      G = !1;
                    for (r = 0; r < m.length; r++) {
                      var M = m[r];
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
                        var O = l._getRegion(v, M);
                        if (!M.region || O.id !== M.region.id || g) {
                          (!M.region || g) && (M.region = O);
                          var D = l._regionUnion(O, M.region);
                          for (x = D.startCol; x <= D.endCol; x++)
                            for (p = D.startRow; p <= D.endRow; p++) {
                              ((U = l._getBucketId(x, p)), (w = R[U]));
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
                              (!_ && L && L && w && l._bucketRemoveBody(v, w, M),
                                (M.region === O || (_ && !L) || g) &&
                                  (w || (w = l._createBucket(R, U)), l._bucketAddBody(v, w, M)));
                            }
                          ((M.region = O), (G = !0));
                        }
                      }
                    }
                    G && (v.pairsList = l._createActivePairsList(v));
                  }),
                  f(l, 'update', 'Grid.update ➤ replaced by Matter.Detector'),
                  (l.clear = function (v) {
                    ((v.buckets = {}), (v.pairs = {}), (v.pairsList = []));
                  }),
                  f(l, 'clear', 'Grid.clear ➤ replaced by Matter.Detector'),
                  (l._regionUnion = function (v, m) {
                    var h = Math.min(v.startCol, m.startCol),
                      g = Math.max(v.endCol, m.endCol),
                      r = Math.min(v.startRow, m.startRow),
                      x = Math.max(v.endRow, m.endRow);
                    return l._createRegion(h, g, r, x);
                  }),
                  (l._getRegion = function (v, m) {
                    var h = m.bounds,
                      g = Math.floor(h.min.x / v.bucketWidth),
                      r = Math.floor(h.max.x / v.bucketWidth),
                      x = Math.floor(h.min.y / v.bucketHeight),
                      p = Math.floor(h.max.y / v.bucketHeight);
                    return l._createRegion(g, r, x, p);
                  }),
                  (l._createRegion = function (v, m, h, g) {
                    return {
                      id: v + ',' + m + ',' + h + ',' + g,
                      startCol: v,
                      endCol: m,
                      startRow: h,
                      endRow: g,
                    };
                  }),
                  (l._getBucketId = function (v, m) {
                    return 'C' + v + 'R' + m;
                  }),
                  (l._createBucket = function (v, m) {
                    var h = (v[m] = []);
                    return h;
                  }),
                  (l._bucketAddBody = function (v, m, h) {
                    var g = v.pairs,
                      r = c.id,
                      x = m.length,
                      p;
                    for (p = 0; p < x; p++) {
                      var C = m[p];
                      if (!(h.id === C.id || (h.isStatic && C.isStatic))) {
                        var R = r(h, C),
                          w = g[R];
                        w ? (w[2] += 1) : (g[R] = [h, C, 1]);
                      }
                    }
                    m.push(h);
                  }),
                  (l._bucketRemoveBody = function (v, m, h) {
                    var g = v.pairs,
                      r = c.id,
                      x;
                    m.splice(d.indexOf(m, h), 1);
                    var p = m.length;
                    for (x = 0; x < p; x++) {
                      var C = g[r(h, m[x])];
                      C && (C[2] -= 1);
                    }
                  }),
                  (l._createActivePairsList = function (v) {
                    var m,
                      h = v.pairs,
                      g = d.keys(h),
                      r = g.length,
                      x = [],
                      p;
                    for (p = 0; p < r; p++) ((m = h[g[p]]), m[2] > 0 ? x.push(m) : delete h[g[p]]);
                    return x;
                  }));
              })();
            },
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(3),
                d = o(7),
                f = o(14),
                v = o(5),
                m = o(13),
                h = o(10),
                g = o(6),
                r = o(0),
                x = o(1);
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
                      (l.update(G, M), l._triggerEvents(G));
                    }),
                    G
                  );
                }),
                  (l.update = function (p, C) {
                    var R = p.mouse,
                      w = p.constraint,
                      U = p.body;
                    if (R.button === 0) {
                      if (w.bodyB) (d.set(w.bodyB, !1), (w.pointA = R.position));
                      else
                        for (var G = 0; G < C.length; G++)
                          if (
                            ((U = C[G]),
                            x.contains(U.bounds, R.position) &&
                              m.canCollide(U.collisionFilter, p.collisionFilter))
                          )
                            for (var M = U.parts.length > 1 ? 1 : 0; M < U.parts.length; M++) {
                              var O = U.parts[M];
                              if (c.contains(O.vertices, R.position)) {
                                ((w.pointA = R.position),
                                  (w.bodyB = p.body = U),
                                  (w.pointB = {
                                    x: R.position.x - U.position.x,
                                    y: R.position.y - U.position.y,
                                  }),
                                  (w.angleB = U.angle),
                                  d.set(U, !1),
                                  v.trigger(p, 'startdrag', { mouse: R, body: U }));
                                break;
                              }
                            }
                    } else
                      ((w.bodyB = p.body = null),
                        (w.pointB = null),
                        U && v.trigger(p, 'enddrag', { mouse: R, body: U }));
                  }),
                  (l._triggerEvents = function (p) {
                    var C = p.mouse,
                      R = C.sourceEvents;
                    (R.mousemove && v.trigger(p, 'mousemove', { mouse: C }),
                      R.mousedown && v.trigger(p, 'mousedown', { mouse: C }),
                      R.mouseup && v.trigger(p, 'mouseup', { mouse: C }),
                      f.clearSourceEvents(C));
                  }));
              })();
            },
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(2),
                d = o(8),
                f = o(1),
                v = o(12),
                m = o(3);
              (function () {
                ((l.collides = function (h, g) {
                  for (
                    var r = [], x = g.length, p = h.bounds, C = d.collides, R = f.overlaps, w = 0;
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
                  (l.ray = function (h, g, r, x) {
                    x = x || 1e-100;
                    for (
                      var p = c.angle(g, r),
                        C = c.magnitude(c.sub(g, r)),
                        R = (r.x + g.x) * 0.5,
                        w = (r.y + g.y) * 0.5,
                        U = v.rectangle(R, w, C, x, { angle: p }),
                        G = l.collides(U, h),
                        M = 0;
                      M < G.length;
                      M += 1
                    ) {
                      var O = G[M];
                      O.body = O.bodyB = O.bodyA;
                    }
                    return G;
                  }),
                  (l.region = function (h, g, r) {
                    for (var x = [], p = 0; p < h.length; p++) {
                      var C = h[p],
                        R = f.overlaps(C.bounds, g);
                      ((R && !r) || (!R && r)) && x.push(C);
                    }
                    return x;
                  }),
                  (l.point = function (h, g) {
                    for (var r = [], x = 0; x < h.length; x++) {
                      var p = h[x];
                      if (f.contains(p.bounds, g))
                        for (var C = p.parts.length === 1 ? 0 : 1; C < p.parts.length; C++) {
                          var R = p.parts[C];
                          if (f.contains(R.bounds, g) && m.contains(R.vertices, g)) {
                            r.push(p);
                            break;
                          }
                        }
                    }
                    return r;
                  }));
              })();
            },
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(4),
                d = o(0),
                f = o(6),
                v = o(1),
                m = o(5),
                h = o(2),
                g = o(14);
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
                        M(d.now());
                      }, 1e3 / 60);
                    }),
                  (x =
                    window.cancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    window.webkitCancelAnimationFrame ||
                    window.msCancelAnimationFrame)),
                  (l._goodFps = 30),
                  (l._goodDelta = 1e3 / 60),
                  (l.create = function (M) {
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
                      D = d.extend(O, M);
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
                      (D.controller = l),
                      (D.options.showBroadphase = !1),
                      D.options.pixelRatio !== 1 && l.setPixelRatio(D, D.options.pixelRatio),
                      d.isElement(D.element) && D.element.appendChild(D.canvas),
                      D
                    );
                  }),
                  (l.run = function (M) {
                    (function O(D) {
                      ((M.frameRequestId = r(O)),
                        p(M, D),
                        l.world(M, D),
                        M.context.setTransform(
                          M.options.pixelRatio,
                          0,
                          0,
                          M.options.pixelRatio,
                          0,
                          0
                        ),
                        (M.options.showStats || M.options.showDebug) && l.stats(M, M.context, D),
                        (M.options.showPerformance || M.options.showDebug) &&
                          l.performance(M, M.context, D),
                        M.context.setTransform(1, 0, 0, 1, 0, 0));
                    })();
                  }),
                  (l.stop = function (M) {
                    x(M.frameRequestId);
                  }),
                  (l.setPixelRatio = function (M, O) {
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
                  (l.setSize = function (M, O, D) {
                    ((M.options.width = O),
                      (M.options.height = D),
                      (M.bounds.max.x = M.bounds.min.x + O),
                      (M.bounds.max.y = M.bounds.min.y + D),
                      M.options.pixelRatio !== 1
                        ? l.setPixelRatio(M, M.options.pixelRatio)
                        : ((M.canvas.width = O), (M.canvas.height = D)));
                  }),
                  (l.lookAt = function (M, O, D, _) {
                    ((_ = typeof _ < 'u' ? _ : !0),
                      (O = d.isArray(O) ? O : [O]),
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
                      ae = L.max.y - L.min.y + 2 * D.y,
                      A = M.canvas.height,
                      N = M.canvas.width,
                      q = N / A,
                      $ = ie / ae,
                      le = 1,
                      z = 1;
                    ($ > q ? (z = $ / q) : (le = q / $),
                      (M.options.hasBounds = !0),
                      (M.bounds.min.x = L.min.x),
                      (M.bounds.max.x = L.min.x + ie * le),
                      (M.bounds.min.y = L.min.y),
                      (M.bounds.max.y = L.min.y + ae * z),
                      _ &&
                        ((M.bounds.min.x += ie * 0.5 - ie * le * 0.5),
                        (M.bounds.max.x += ie * 0.5 - ie * le * 0.5),
                        (M.bounds.min.y += ae * 0.5 - ae * z * 0.5),
                        (M.bounds.max.y += ae * 0.5 - ae * z * 0.5)),
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
                  (l.startViewTransform = function (M) {
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
                  (l.endViewTransform = function (M) {
                    M.context.setTransform(M.options.pixelRatio, 0, 0, M.options.pixelRatio, 0, 0);
                  }),
                  (l.world = function (M, O) {
                    var D = d.now(),
                      _ = M.engine,
                      L = _.world,
                      B = M.canvas,
                      Y = M.context,
                      V = M.options,
                      F = M.timing,
                      ie = f.allBodies(L),
                      ae = f.allConstraints(L),
                      A = V.wireframes ? V.wireframeBackground : V.background,
                      N = [],
                      q = [],
                      $,
                      le = { timestamp: _.timing.timestamp };
                    if (
                      (m.trigger(M, 'beforeRender', le),
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
                      for ($ = 0; $ < ae.length; $++) {
                        var Z = ae[$],
                          P = Z.bodyA,
                          ue = Z.bodyB,
                          re = Z.pointA,
                          oe = Z.pointB;
                        (P && (re = h.add(P.position, Z.pointA)),
                          ue && (oe = h.add(ue.position, Z.pointB)),
                          !(!re || !oe) &&
                            (v.contains(M.bounds, re) || v.contains(M.bounds, oe)) &&
                            q.push(Z));
                      }
                      (l.startViewTransform(M),
                        M.mouse &&
                          (g.setScale(M.mouse, {
                            x: (M.bounds.max.x - M.bounds.min.x) / M.options.width,
                            y: (M.bounds.max.y - M.bounds.min.y) / M.options.height,
                          }),
                          g.setOffset(M.mouse, M.bounds.min)));
                    } else
                      ((q = ae),
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
                      ? l.bodies(M, N, Y)
                      : (V.showConvexHulls && l.bodyConvexHulls(M, N, Y),
                        l.bodyWireframes(M, N, Y)),
                      V.showBounds && l.bodyBounds(M, N, Y),
                      (V.showAxes || V.showAngleIndicator) && l.bodyAxes(M, N, Y),
                      V.showPositions && l.bodyPositions(M, N, Y),
                      V.showVelocity && l.bodyVelocity(M, N, Y),
                      V.showIds && l.bodyIds(M, N, Y),
                      V.showSeparations && l.separations(M, _.pairs.list, Y),
                      V.showCollisions && l.collisions(M, _.pairs.list, Y),
                      V.showVertexNumbers && l.vertexNumbers(M, N, Y),
                      V.showMousePosition && l.mousePosition(M, M.mouse, Y),
                      l.constraints(q, Y),
                      V.hasBounds && l.endViewTransform(M),
                      m.trigger(M, 'afterRender', le),
                      (F.lastElapsed = d.now() - D));
                  }),
                  (l.stats = function (M, O, D) {
                    for (
                      var _ = M.engine,
                        L = _.world,
                        B = f.allBodies(L),
                        Y = 0,
                        V = 55,
                        F = 44,
                        ie = 0,
                        ae = 0,
                        A = 0;
                      A < B.length;
                      A += 1
                    )
                      Y += B[A].parts.length;
                    var N = {
                      Part: Y,
                      Body: B.length,
                      Cons: f.allConstraints(L).length,
                      Comp: f.allComposites(L).length,
                      Pair: _.pairs.list.length,
                    };
                    ((O.fillStyle = '#0e0f19'),
                      O.fillRect(ie, ae, V * 5.5, F),
                      (O.font = '12px Arial'),
                      (O.textBaseline = 'top'),
                      (O.textAlign = 'right'));
                    for (var q in N) {
                      var $ = N[q];
                      ((O.fillStyle = '#aaa'),
                        O.fillText(q, ie + V, ae + 8),
                        (O.fillStyle = '#eee'),
                        O.fillText($, ie + V, ae + 26),
                        (ie += V));
                    }
                  }),
                  (l.performance = function (M, O) {
                    var D = M.engine,
                      _ = M.timing,
                      L = _.deltaHistory,
                      B = _.elapsedHistory,
                      Y = _.timestampElapsedHistory,
                      V = _.engineDeltaHistory,
                      F = _.engineUpdatesHistory,
                      ie = _.engineElapsedHistory,
                      ae = D.timing.lastUpdatesPerFrame,
                      A = D.timing.lastDelta,
                      N = C(L),
                      q = C(B),
                      $ = C(V),
                      le = C(F),
                      z = C(ie),
                      Z = C(Y),
                      P = Z / N || 0,
                      ue = Math.round(N / A),
                      re = 1e3 / N || 0,
                      oe = 4,
                      ve = 12,
                      Se = 60,
                      Ce = 34,
                      Be = 10,
                      Ye = 69;
                    ((O.fillStyle = '#0e0f19'),
                      O.fillRect(0, 50, ve * 5 + Se * 6 + 22, Ce),
                      l.status(
                        O,
                        Be,
                        Ye,
                        Se,
                        oe,
                        L.length,
                        Math.round(re) + ' fps',
                        re / l._goodFps,
                        function (Ve) {
                          return L[Ve] / N - 1;
                        }
                      ),
                      l.status(
                        O,
                        Be + ve + Se,
                        Ye,
                        Se,
                        oe,
                        V.length,
                        A.toFixed(2) + ' dt',
                        l._goodDelta / A,
                        function (Ve) {
                          return V[Ve] / $ - 1;
                        }
                      ),
                      l.status(
                        O,
                        Be + (ve + Se) * 2,
                        Ye,
                        Se,
                        oe,
                        F.length,
                        ae + ' upf',
                        Math.pow(d.clamp(le / ue || 1, 0, 1), 4),
                        function (Ve) {
                          return F[Ve] / le - 1;
                        }
                      ),
                      l.status(
                        O,
                        Be + (ve + Se) * 3,
                        Ye,
                        Se,
                        oe,
                        ie.length,
                        z.toFixed(2) + ' ut',
                        1 - (ae * z) / l._goodFps,
                        function (Ve) {
                          return ie[Ve] / z - 1;
                        }
                      ),
                      l.status(
                        O,
                        Be + (ve + Se) * 4,
                        Ye,
                        Se,
                        oe,
                        B.length,
                        q.toFixed(2) + ' rt',
                        1 - q / l._goodFps,
                        function (Ve) {
                          return B[Ve] / q - 1;
                        }
                      ),
                      l.status(
                        O,
                        Be + (ve + Se) * 5,
                        Ye,
                        Se,
                        oe,
                        Y.length,
                        P.toFixed(2) + ' x',
                        P * P * P,
                        function (Ve) {
                          return (Y[Ve] / L[Ve] / P || 0) - 1;
                        }
                      ));
                  }),
                  (l.status = function (M, O, D, _, L, B, Y, V, F) {
                    ((M.strokeStyle = '#888'),
                      (M.fillStyle = '#444'),
                      (M.lineWidth = 1),
                      M.fillRect(O, D + 7, _, 1),
                      M.beginPath(),
                      M.moveTo(O, D + 7 - L * d.clamp(0.4 * F(0), -2, 2)));
                    for (var ie = 0; ie < _; ie += 1)
                      M.lineTo(O + ie, D + 7 - (ie < B ? L * d.clamp(0.4 * F(ie), -2, 2) : 0));
                    (M.stroke(),
                      (M.fillStyle = 'hsl(' + d.clamp(25 + 95 * V, 0, 120) + ',100%,60%)'),
                      M.fillRect(O, D - 7, 4, 4),
                      (M.font = '12px Arial'),
                      (M.textBaseline = 'middle'),
                      (M.textAlign = 'right'),
                      (M.fillStyle = '#eee'),
                      M.fillText(Y, O + _, D - 5));
                  }),
                  (l.constraints = function (M, O) {
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
                                ae = h.perp(h.normalise(ie)),
                                A = Math.ceil(d.clamp(L.length / 5, 12, 20)),
                                N,
                                q = 1;
                              q < A;
                              q += 1
                            )
                              ((N = q % 2 === 0 ? 1 : -1),
                                D.lineTo(
                                  V.x + ie.x * (q / A) + ae.x * N * 4,
                                  V.y + ie.y * (q / A) + ae.y * N * 4
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
                  (l.bodies = function (M, O, D) {
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
                              var ae = V.render.sprite,
                                A = U(M, ae.texture);
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
                  (l.bodyWireframes = function (M, O, D) {
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
                  (l.bodyConvexHulls = function (M, O, D) {
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
                  (l.vertexNumbers = function (M, O, D) {
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
                  (l.mousePosition = function (M, O, D) {
                    var _ = D;
                    ((_.fillStyle = 'rgba(255,255,255,0.8)'),
                      _.fillText(
                        O.position.x + '  ' + O.position.y,
                        O.position.x + 5,
                        O.position.y - 5
                      ));
                  }),
                  (l.bodyBounds = function (M, O, D) {
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
                  (l.bodyAxes = function (M, O, D) {
                    var _ = D;
                    M.engine;
                    var L = M.options,
                      B,
                      Y,
                      V,
                      F;
                    for (_.beginPath(), Y = 0; Y < O.length; Y++) {
                      var ie = O[Y],
                        ae = ie.parts;
                      if (ie.render.visible)
                        if (L.showAxes)
                          for (V = ae.length > 1 ? 1 : 0; V < ae.length; V++)
                            for (B = ae[V], F = 0; F < B.axes.length; F++) {
                              var A = B.axes[F];
                              (_.moveTo(B.position.x, B.position.y),
                                _.lineTo(B.position.x + A.x * 20, B.position.y + A.y * 20));
                            }
                        else
                          for (V = ae.length > 1 ? 1 : 0; V < ae.length; V++)
                            for (B = ae[V], F = 0; F < B.axes.length; F++)
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
                  (l.bodyPositions = function (M, O, D) {
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
                  (l.bodyVelocity = function (M, O, D) {
                    var _ = D;
                    _.beginPath();
                    for (var L = 0; L < O.length; L++) {
                      var B = O[L];
                      if (B.render.visible) {
                        var Y = c.getVelocity(B);
                        (_.moveTo(B.position.x, B.position.y),
                          _.lineTo(B.position.x + Y.x, B.position.y + Y.y));
                      }
                    }
                    ((_.lineWidth = 3), (_.strokeStyle = 'cornflowerblue'), _.stroke());
                  }),
                  (l.bodyIds = function (M, O, D) {
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
                  (l.collisions = function (M, O, D) {
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
                            ae = ie.vertex;
                          _.rect(ae.x - 1.5, ae.y - 1.5, 3.5, 3.5);
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
                  (l.separations = function (M, O, D) {
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
                        var ae = 1;
                        (!F.isStatic && !V.isStatic && (ae = 0.5),
                          F.isStatic && (ae = 0),
                          _.moveTo(F.position.x, F.position.y),
                          _.lineTo(
                            F.position.x - Y.penetration.x * ae,
                            F.position.y - Y.penetration.y * ae
                          ),
                          (ae = 1),
                          !F.isStatic && !V.isStatic && (ae = 0.5),
                          V.isStatic && (ae = 0),
                          _.moveTo(V.position.x, V.position.y),
                          _.lineTo(
                            V.position.x + Y.penetration.x * ae,
                            V.position.y + Y.penetration.y * ae
                          ));
                      }
                    (L.wireframes
                      ? (_.strokeStyle = 'rgba(255,165,0,0.5)')
                      : (_.strokeStyle = 'orange'),
                      _.stroke());
                  }),
                  (l.inspector = function (M, O) {
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
                    ((_.delta = O - _.lastTime || l._goodDelta),
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
            function (b, y, o) {
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
                      g = f.extend(h, m);
                    return ((g.fps = 0), g);
                  }),
                  (l.run = function (m, h) {
                    return (
                      (m.timeBuffer = l._frameDeltaFallback),
                      (function g(r) {
                        ((m.frameRequestId = l._onNextFrame(m, g)),
                          r && m.enabled && l.tick(m, h, r));
                      })(),
                      m
                    );
                  }),
                  (l.tick = function (m, h, g) {
                    var r = f.now(),
                      x = m.delta,
                      p = 0,
                      C = g - m.timeLastTick;
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
                        w = m.frameDeltaHistory.slice(
                          R.length * l._smoothingLowerBound,
                          R.length * l._smoothingUpperBound
                        ),
                        U = v(w);
                      C = U || C;
                    }
                    (m.frameDeltaSnapping && (C = 1e3 / Math.round(1e3 / C)),
                      (m.frameDelta = C),
                      (m.timeLastTick = g),
                      (m.timeBuffer += m.frameDelta),
                      (m.timeBuffer = f.clamp(
                        m.timeBuffer,
                        0,
                        m.frameDelta + x * l._timeBufferMargin
                      )),
                      (m.lastUpdatesDeferred = 0));
                    var G = m.maxUpdates || Math.ceil(m.maxFrameTime / x),
                      M = { timestamp: h.timing.timestamp };
                    (c.trigger(m, 'beforeTick', M), c.trigger(m, 'tick', M));
                    for (var O = f.now(); x > 0 && m.timeBuffer >= x * l._timeBufferMargin; ) {
                      (c.trigger(m, 'beforeUpdate', M),
                        d.update(h, x),
                        c.trigger(m, 'afterUpdate', M),
                        (m.timeBuffer -= x),
                        (p += 1));
                      var D = f.now() - r,
                        _ = f.now() - O,
                        L = D + (l._elapsedNextEstimate * _) / p;
                      if (p >= G || L > m.maxFrameTime) {
                        m.lastUpdatesDeferred = Math.round(
                          Math.max(0, m.timeBuffer / x - l._timeBufferMargin)
                        );
                        break;
                      }
                    }
                    ((h.timing.lastUpdatesPerFrame = p),
                      c.trigger(m, 'afterTick', M),
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
                  (l._onNextFrame = function (m, h) {
                    if (typeof window < 'u' && window.requestAnimationFrame)
                      m.frameRequestId = window.requestAnimationFrame(h);
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
                var v = function (m) {
                  for (var h = 0, g = m.length, r = 0; r < g; r += 1) h += m[r];
                  return h / g || 0;
                };
              })();
            },
            function (b, y, o) {
              var l = {};
              b.exports = l;
              var c = o(8),
                d = o(0),
                f = d.deprecated;
              (function () {
                ((l.collides = function (v, m) {
                  return c.collides(v, m);
                }),
                  f(l, 'collides', 'SAT.collides ➤ replaced by Collision.collides'));
              })();
            },
            function (b, y, o) {
              var l = {};
              ((b.exports = l), o(1));
              var c = o(0);
              (function () {
                ((l.pathToVertices = function (d, f) {
                  typeof window < 'u' &&
                    !('SVGPathSeg' in window) &&
                    c.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
                  var v,
                    m,
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
                  f = f || 15;
                  var L = function (Y, V, F) {
                      var ie = F % 2 === 1 && F > 1;
                      if (!R || Y != R.x || V != R.y) {
                        R && ie ? ((G = R.x), (M = R.y)) : ((G = 0), (M = 0));
                        var ae = { x: G + Y, y: M + V };
                        ((ie || !R) && (R = ae), U.push(ae), (D = G + Y), (_ = M + V));
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
                    l._svgPathToAbsolute(d), h = d.getTotalLength(), x = [], v = 0;
                    v < d.pathSegList.numberOfItems;
                    v += 1
                  )
                    x.push(d.pathSegList.getItem(v));
                  for (p = x.concat(); O < h; ) {
                    if (((w = d.getPathSegAtLength(O)), (r = x[w]), r != C)) {
                      for (; p.length && p[0] != r; ) B(p.shift());
                      C = r;
                    }
                    switch (r.pathSegTypeAsLetter.toUpperCase()) {
                      case 'C':
                      case 'T':
                      case 'S':
                      case 'Q':
                      case 'A':
                        ((g = d.getPointAtLength(O)), L(g.x, g.y, 0));
                        break;
                    }
                    O += f;
                  }
                  for (v = 0, m = p.length; v < m; ++v) B(p[v]);
                  return U;
                }),
                  (l._svgPathToAbsolute = function (d) {
                    for (
                      var f,
                        v,
                        m,
                        h,
                        g,
                        r,
                        x = d.pathSegList,
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
                          ('x1' in U && (m = p + U.x1),
                          'x2' in U && (g = p + U.x2),
                          'y1' in U && (h = C + U.y1),
                          'y2' in U && (r = C + U.y2),
                          'x' in U && (p += U.x),
                          'y' in U && (C += U.y),
                          G)
                        ) {
                          case 'm':
                            x.replaceItem(d.createSVGPathSegMovetoAbs(p, C), w);
                            break;
                          case 'l':
                            x.replaceItem(d.createSVGPathSegLinetoAbs(p, C), w);
                            break;
                          case 'h':
                            x.replaceItem(d.createSVGPathSegLinetoHorizontalAbs(p), w);
                            break;
                          case 'v':
                            x.replaceItem(d.createSVGPathSegLinetoVerticalAbs(C), w);
                            break;
                          case 'c':
                            x.replaceItem(d.createSVGPathSegCurvetoCubicAbs(p, C, m, h, g, r), w);
                            break;
                          case 's':
                            x.replaceItem(d.createSVGPathSegCurvetoCubicSmoothAbs(p, C, g, r), w);
                            break;
                          case 'q':
                            x.replaceItem(d.createSVGPathSegCurvetoQuadraticAbs(p, C, m, h), w);
                            break;
                          case 't':
                            x.replaceItem(d.createSVGPathSegCurvetoQuadraticSmoothAbs(p, C), w);
                            break;
                          case 'a':
                            x.replaceItem(
                              d.createSVGPathSegArcAbs(
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
                            ((p = f), (C = v));
                            break;
                        }
                      (G == 'M' || G == 'm') && ((f = p), (v = C));
                    }
                  }));
              })();
            },
            function (b, y, o) {
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
      })(rr)),
    rr.exports
  );
}
var wx = Dx();
const Te = Uh(wx);
var Xo, _h;
function zx() {
  if (_h) return Xo;
  ((_h = 1),
    (Xo = {
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
      le,
      z,
      Z,
      P,
      ue,
      re,
      oe;
    return (
      (le = A[1][1] - A[0][1]),
      (z = A[0][0] - A[1][0]),
      (Z = le * A[0][0] + z * A[0][1]),
      (P = N[1][1] - N[0][1]),
      (ue = N[0][0] - N[1][0]),
      (re = P * N[0][0] + ue * N[0][1]),
      (oe = le * ue - P * z),
      ie(oe, 0, q) || (($[0] = (ue * Z - z * re) / oe), ($[1] = (le * re - P * Z) / oe)),
      $
    );
  }
  function S(A, N, q, $) {
    var le = N[0] - A[0],
      z = N[1] - A[1],
      Z = $[0] - q[0],
      P = $[1] - q[1];
    if (Z * z - P * le === 0) return !1;
    var ue = (le * (q[1] - A[1]) + z * (A[0] - q[0])) / (Z * z - P * le),
      re = (Z * (A[1] - q[1]) + P * (q[0] - A[0])) / (P * le - Z * z);
    return ue >= 0 && ue <= 1 && re >= 0 && re <= 1;
  }
  function b(A, N, q) {
    return (N[0] - A[0]) * (q[1] - A[1]) - (q[0] - A[0]) * (N[1] - A[1]);
  }
  function y(A, N, q) {
    return b(A, N, q) > 0;
  }
  function o(A, N, q) {
    return b(A, N, q) >= 0;
  }
  function l(A, N, q) {
    return b(A, N, q) < 0;
  }
  function c(A, N, q) {
    return b(A, N, q) <= 0;
  }
  var d = [],
    f = [];
  function v(A, N, q, $) {
    if ($) {
      var le = d,
        z = f;
      ((le[0] = N[0] - A[0]), (le[1] = N[1] - A[1]), (z[0] = q[0] - N[0]), (z[1] = q[1] - N[1]));
      var Z = le[0] * z[0] + le[1] * z[1],
        P = Math.sqrt(le[0] * le[0] + le[1] * le[1]),
        ue = Math.sqrt(z[0] * z[0] + z[1] * z[1]),
        re = Math.acos(Z / (P * ue));
      return re < $;
    } else return b(A, N, q) === 0;
  }
  function m(A, N) {
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
    for (var le = q; le < $; le++) A.push(N[le]);
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
    return l(h(A, N - 1), h(A, N), h(A, N + 1));
  }
  var R = [],
    w = [];
  function U(A, N, q) {
    var $,
      le,
      z = R,
      Z = w;
    if (o(h(A, N + 1), h(A, N), h(A, q)) && c(h(A, N - 1), h(A, N), h(A, q))) return !1;
    le = m(h(A, N), h(A, q));
    for (var P = 0; P !== A.length; ++P)
      if (
        !((P + 1) % A.length === N || P === N) &&
        o(h(A, N), h(A, q), h(A, P + 1)) &&
        c(h(A, N), h(A, q), h(A, P)) &&
        ((z[0] = h(A, N)),
        (z[1] = h(A, q)),
        (Z[0] = h(A, P)),
        (Z[1] = h(A, P + 1)),
        ($ = s(z, Z)),
        m(h(A, N), $) < le)
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
    var le = $ || [];
    if ((g(le), N < q)) for (var z = N; z <= q; z++) le.push(A[z]);
    else {
      for (var z = 0; z <= q; z++) le.push(A[z]);
      for (var z = N; z < A.length; z++) le.push(A[z]);
    }
    return le;
  }
  function O(A) {
    for (var N = [], q = [], $ = [], le = [], z = Number.MAX_VALUE, Z = 0; Z < A.length; ++Z)
      if (C(A, Z)) {
        for (var P = 0; P < A.length; ++P)
          if (U(A, Z, P)) {
            ((q = O(M(A, Z, P, le))), ($ = O(M(A, P, Z, le))));
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
        for (var le = N[$], z = 0; z < q.length; z++) {
          var Z = q[z],
            P = _(Z, le);
          if (P) {
            (q.splice(z, 1), q.push(P[0], P[1]));
            break;
          }
        }
      return q;
    } else {
      var le = N,
        $ = A.indexOf(le[0]),
        z = A.indexOf(le[1]);
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
  function B(A, N, q, $, le) {
    le = le || 0;
    var z = N[1] - A[1],
      Z = A[0] - N[0],
      P = z * A[0] + Z * A[1],
      ue = $[1] - q[1],
      re = q[0] - $[0],
      oe = ue * q[0] + re * q[1],
      ve = z * re - ue * Z;
    return ie(ve, 0, le) ? [0, 0] : [(re * P - Z * oe) / ve, (z * oe - ue * P) / ve];
  }
  function Y(A, N, q, $, le, z, Z) {
    ((z = z || 100),
      (Z = Z || 0),
      (le = le || 25),
      (N = typeof N < 'u' ? N : []),
      (q = q || []),
      ($ = $ || []));
    var P = [0, 0],
      ue = [0, 0],
      re = [0, 0],
      oe = 0,
      ve = 0,
      Se = 0,
      Ce = 0,
      Be = 0,
      Ye = 0,
      Ve = 0,
      ft = [],
      Fe = [],
      fe = A,
      Yt = A;
    if (Yt.length < 3) return N;
    if ((Z++, Z > z)) return (console.warn('quickDecomp: max level (' + z + ') reached.'), N);
    for (var xe = 0; xe < A.length; ++xe)
      if (C(fe, xe)) {
        (q.push(fe[xe]), (oe = ve = Number.MAX_VALUE));
        for (var Ae = 0; Ae < A.length; ++Ae)
          (y(h(fe, xe - 1), h(fe, xe), h(fe, Ae)) &&
            c(h(fe, xe - 1), h(fe, xe), h(fe, Ae - 1)) &&
            ((re = B(h(fe, xe - 1), h(fe, xe), h(fe, Ae), h(fe, Ae - 1))),
            l(h(fe, xe + 1), h(fe, xe), re) &&
              ((Se = m(fe[xe], re)), Se < ve && ((ve = Se), (ue = re), (Ye = Ae)))),
            y(h(fe, xe + 1), h(fe, xe), h(fe, Ae + 1)) &&
              c(h(fe, xe + 1), h(fe, xe), h(fe, Ae)) &&
              ((re = B(h(fe, xe + 1), h(fe, xe), h(fe, Ae), h(fe, Ae + 1))),
              y(h(fe, xe - 1), h(fe, xe), re) &&
                ((Se = m(fe[xe], re)), Se < oe && ((oe = Se), (P = re), (Be = Ae)))));
        if (Ye === (Be + 1) % A.length)
          ((re[0] = (ue[0] + P[0]) / 2),
            (re[1] = (ue[1] + P[1]) / 2),
            $.push(re),
            xe < Be
              ? (r(ft, fe, xe, Be + 1),
                ft.push(re),
                Fe.push(re),
                Ye !== 0 && r(Fe, fe, Ye, fe.length),
                r(Fe, fe, 0, xe + 1))
              : (xe !== 0 && r(ft, fe, xe, fe.length),
                r(ft, fe, 0, Be + 1),
                ft.push(re),
                Fe.push(re),
                r(Fe, fe, Ye, xe + 1)));
        else {
          if ((Ye > Be && (Be += A.length), (Ce = Number.MAX_VALUE), Be < Ye)) return N;
          for (var Ae = Ye; Ae <= Be; ++Ae)
            o(h(fe, xe - 1), h(fe, xe), h(fe, Ae)) &&
              c(h(fe, xe + 1), h(fe, xe), h(fe, Ae)) &&
              ((Se = m(h(fe, xe), h(fe, Ae))),
              Se < Ce && G(fe, xe, Ae) && ((Ce = Se), (Ve = Ae % A.length)));
          xe < Ve
            ? (r(ft, fe, xe, Ve + 1), Ve !== 0 && r(Fe, fe, Ve, Yt.length), r(Fe, fe, 0, xe + 1))
            : (xe !== 0 && r(ft, fe, xe, Yt.length), r(ft, fe, 0, Ve + 1), r(Fe, fe, Ve, xe + 1));
        }
        return (
          ft.length < Fe.length
            ? (Y(ft, N, q, $, le, z, Z), Y(Fe, N, q, $, le, z, Z))
            : (Y(Fe, N, q, $, le, z, Z), Y(ft, N, q, $, le, z, Z)),
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
      for (var $ = A[q], le = q - 1; le >= 0; --le)
        if (ae($, A[le], N)) {
          A.splice(q, 1);
          continue;
        }
  }
  function ie(A, N, q) {
    return ((q = q || 0), Math.abs(A - N) <= q);
  }
  function ae(A, N, q) {
    return ie(A[0], N[0], q) && ie(A[1], N[1], q);
  }
  return Xo;
}
var gv = zx();
const Nx = Uh(gv),
  Bx = Bg({ __proto__: null, default: Nx }, [gv]),
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
  Ux = { 1: 20, 2: 26, 3: 32, 4: 38, 5: 46, 6: 54, 7: 62, 8: 72, 9: 82, 10: 104 },
  Hx = { 1: 0.5, 2: 0.5, 3: 0.45, 4: 0.45, 5: 0.4, 6: 0.4, 7: 0.35, 8: 0.35, 9: 0.3, 10: 0.25 },
  Lx = {
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
  jx = {
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
  yv = (s, S) => {
    const b = String(S).padStart(2, '0');
    return `images/${s}/level${b}.png`;
  },
  Gx = 256,
  Oh = {
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
  Yx = (s) => (s * (s + 1)) / 2,
  Vx = (s) => ({
    id: s,
    level: s,
    name: Lx[s],
    theme: jx[s],
    radius: Ux[s],
    restitution: Hx[s],
    friction: 0.3,
    density: 0.001,
    score: Yx(s),
    svgPath: yv(mr, s),
    color: Oh[s].color,
    glowColor: Oh[s].glow,
  }),
  Aa = 10,
  hr = Object.fromEntries(Array.from({ length: Aa }, (s, S) => S + 1).map((s) => [s, Vx(s)]));
Array.from({ length: Aa }, (s, S) => hr[S + 1]);
const Qo = 3,
  qx = 360,
  Xx = (s) => Math.min(1, s / qx),
  Dh = new Map(),
  Jn = (s, S, b = mr) => {
    const y = `${s}|${S}|${b}`,
      o = Dh.get(y);
    if (o) return o;
    const l = hr[s],
      c = { ...l, radius: l.radius * Xx(S), svgPath: yv(b, s) };
    return (Dh.set(y, c), c);
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
  pv = $n.wall | $n.item | $n.magnetTarget,
  Qx = $n.wall | $n.magnetTarget,
  xv = typeof window < 'u' && typeof window.localStorage < 'u',
  vr = (s) => {
    if (!xv) return null;
    try {
      return window.localStorage.getItem(s);
    } catch {
      return null;
    }
  },
  gr = (s, S) => {
    if (xv)
      try {
        window.localStorage.setItem(s, S);
      } catch {}
  },
  Zx = () => {
    const s = vr(fn.storageKeys.bestScore);
    if (s === null) return 0;
    const S = Number(s);
    return Number.isFinite(S) ? S : 0;
  },
  Kx = (s) => {
    gr(fn.storageKeys.bestScore, String(s));
  },
  kx = () => {
    const s = vr(fn.storageKeys.scoreHistory);
    if (s === null) return [];
    try {
      const S = JSON.parse(s);
      return Array.isArray(S) ? S.filter((b) => typeof b == 'number' && Number.isFinite(b)) : [];
    } catch {
      return [];
    }
  },
  Jx = (s) => {
    const S = [s, ...kx()].slice(0, fn.maxScoreHistory);
    return (gr(fn.storageKeys.scoreHistory, JSON.stringify(S)), S);
  },
  Fx = () => {
    const s = vr(fn.storageKeys.isSoundOn);
    return s === null ? !0 : s === 'true';
  },
  $x = (s) => {
    gr(fn.storageKeys.isSoundOn, String(s));
  },
  Wx = () => {
    const s = vr(fn.storageKeys.themeId);
    return cc(s) ? s : mr;
  },
  wh = (s) => {
    gr(fn.storageKeys.themeId, s);
  },
  Ix = () => {
    const [s, S] = H.useState(0),
      [b, y] = H.useState(0),
      [o, l] = H.useState(!1),
      c = H.useRef(0),
      d = H.useRef(0);
    H.useEffect(() => {
      const g = Zx();
      ((d.current = g), y(g));
    }, []);
    const f = H.useCallback((g) => {
        ((c.current += g), S(c.current));
      }, []),
      v = H.useCallback((g) => {
        ((c.current = g), S(g));
      }, []),
      m = H.useCallback(() => {
        ((c.current = 0), S(0), l(!1));
      }, []),
      h = H.useCallback(() => {
        const g = c.current,
          r = g > d.current;
        return (
          r && ((d.current = g), Kx(g), y(g)),
          Jx(g),
          l(r),
          { isNewRecord: r, finalScore: g }
        );
      }, []);
    return { score: s, bestScore: b, isNewRecord: o, add: f, setRaw: v, reset: m, finalize: h };
  },
  Px = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  eS = { merge: 'sounds/punyu.mp3', special: 'sounds/punyu.mp3' },
  tS = 0.7,
  nS = () => {
    if (typeof window > 'u') return null;
    const s = window;
    return s.AudioContext ?? s.webkitAudioContext ?? null;
  },
  aS = () => {
    const [s, S] = H.useState(!0),
      b = H.useRef(null),
      y = H.useRef({});
    (H.useEffect(() => {
      S(Fx());
    }, []),
      H.useEffect(() => {
        const c = nS();
        if (!c) return;
        const d = new c();
        b.current = d;
        let f = !1;
        const v = {};
        return (
          (async () => {
            for (const [m, h] of Object.entries(eS))
              try {
                const r = await (await fetch(Px(h))).arrayBuffer();
                if (f) return;
                const x = await d.decodeAudioData(r);
                if (f) return;
                v[m] = x;
              } catch {}
            y.current = v;
          })(),
          () => {
            ((f = !0), d.close().catch(() => {}), (b.current = null), (y.current = {}));
          }
        );
      }, []));
    const o = H.useCallback(() => {
        S((c) => {
          const d = !c;
          return ($x(d), d);
        });
      }, []),
      l = H.useCallback(
        (c) => {
          if (!s) return;
          const d = b.current,
            f = y.current[c];
          if (!d || !f) return;
          d.state === 'suspended' && d.resume().catch(() => {});
          const v = d.createBufferSource();
          v.buffer = f;
          const m = d.createGain();
          ((m.gain.value = tS), v.connect(m).connect(d.destination), v.start(0));
        },
        [s]
      );
    return { isSoundOn: s, toggle: o, play: l };
  },
  Sv = (s) => ({
    restitution: s.restitution,
    friction: s.friction,
    density: s.density,
    label: `item-${s.level}`,
    collisionFilter: { category: $n.item, mask: pv },
  }),
  Ev = (s) => {
    for (const S of s.parts) S.render.visible = !1;
  },
  bv = (s, S, b) => {
    s.plugin.itemData = { level: S, consumed: !1, droppedAt: b };
  },
  lS = (s, S, b, y) => {
    const o = Te.Bodies.circle(S, b, s.radius, Sv(s));
    return (bv(o, s.level, y), Ev(o), o);
  },
  iS = (s, S, b, y, o) => {
    if (o.length < 3) return null;
    const l = Te.Bodies.fromVertices(S, b, [o], Sv(s));
    return l ? (bv(l, s.level, y), Ev(l), l) : null;
  },
  Io = (s) => (s.parent && s.parent !== s ? s.parent : s),
  kn = (s) => Io(s).plugin.itemData,
  uS = (s, S) => {
    const b = Fn.wallThickness,
      y = {
        isStatic: !0,
        restitution: 0.2,
        friction: 0.5,
        label: 'wall',
        collisionFilter: { category: $n.wall },
      },
      o = Te.Bodies.rectangle(s / 2, S + b / 2, s + b * 2, b, y),
      l = Te.Bodies.rectangle(-b / 2, S / 2, b, S * 2, y),
      c = Te.Bodies.rectangle(s + b / 2, S / 2, b, S * 2, y),
      d = Te.Bodies.rectangle(s / 2, -b / 2, s + b * 2, b, { ...y, restitution: 0 });
    return { ground: o, leftWall: l, rightWall: c, ceiling: d };
  },
  rS = (s, S) => ({ x: (s.position.x + S.position.x) / 2, y: (s.position.y + S.position.y) / 2 }),
  sS = (s) => (s < 2 || s > Aa ? 0 : hr[s].score),
  oS = () => hr[Aa].score,
  fc = fn.storageKeys.suspended,
  cS = 1,
  $t = (s) => typeof s == 'number' && Number.isFinite(s),
  fS = (s) => {
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
  dS = () => {
    if (typeof window > 'u' || typeof window.localStorage > 'u') return null;
    let s = null;
    try {
      s = window.localStorage.getItem(fc);
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
      for (const o of b.bodies) {
        const l = fS(o);
        l && y.push(l);
      }
      return {
        version: $t(b.version) ? b.version : 0,
        savedAt: $t(b.savedAt) ? b.savedAt : 0,
        score: b.score,
        themeId: cc(b.themeId) ? b.themeId : mr,
        currentItemLevel: $t(b.currentItemLevel) ? b.currentItemLevel : 1,
        nextItemLevel: $t(b.nextItemLevel) ? b.nextItemLevel : 1,
        skillGauge: $t(b.skillGauge) ? b.skillGauge : 0,
        bodies: y,
      };
    } catch {
      return null;
    }
  },
  mS = (s) => {
    if (!(typeof window > 'u' || typeof window.localStorage > 'u'))
      try {
        const S = { ...s, version: cS, savedAt: Date.now() };
        window.localStorage.setItem(fc, JSON.stringify(S));
      } catch {}
  },
  hS = () => {
    if (!(typeof window > 'u' || typeof window.localStorage > 'u'))
      try {
        window.localStorage.removeItem(fc);
      } catch {}
  },
  vS = 32,
  gS = 14,
  Ra = (s, S) => s * (1 << gS) + S,
  Hi = (s, S) => s[S + 3] >= vS,
  yS = (s, S, b) => {
    const y = [];
    for (let o = 0; o < b; o += 1)
      for (let l = 0; l < S; l += 1) {
        const c = (o * S + l) * 4;
        if (!Hi(s, c)) continue;
        ((o === 0 || !Hi(s, ((o - 1) * S + l) * 4)) &&
          y.push({
            fromKey: Ra(l, o),
            toKey: Ra(l + 1, o),
            from: { x: l, y: o },
            to: { x: l + 1, y: o },
          }),
          (l === S - 1 || !Hi(s, (o * S + (l + 1)) * 4)) &&
            y.push({
              fromKey: Ra(l + 1, o),
              toKey: Ra(l + 1, o + 1),
              from: { x: l + 1, y: o },
              to: { x: l + 1, y: o + 1 },
            }),
          (o === b - 1 || !Hi(s, ((o + 1) * S + l) * 4)) &&
            y.push({
              fromKey: Ra(l + 1, o + 1),
              toKey: Ra(l, o + 1),
              from: { x: l + 1, y: o + 1 },
              to: { x: l, y: o + 1 },
            }),
          (l === 0 || !Hi(s, (o * S + (l - 1)) * 4)) &&
            y.push({
              fromKey: Ra(l, o + 1),
              toKey: Ra(l, o),
              from: { x: l, y: o + 1 },
              to: { x: l, y: o },
            }));
      }
    return y;
  },
  pS = (s) => {
    const S = new Map();
    for (const o of s) {
      const l = S.get(o.fromKey);
      l ? l.push(o) : S.set(o.fromKey, [o]);
    }
    const b = new Set(),
      y = [];
    for (const o of s) {
      if (b.has(o)) continue;
      const l = [];
      let c = o;
      for (; c && !b.has(c); ) {
        (b.add(c), l.push(c.from));
        const d = S.get(c.toKey);
        c = d == null ? void 0 : d.find((f) => !b.has(f));
      }
      l.length >= 3 && y.push(l);
    }
    return y;
  },
  xS = (s, S, b) => {
    const y = b.x - S.x,
      o = b.y - S.y,
      l = Math.hypot(y, o);
    return l === 0
      ? Math.hypot(s.x - S.x, s.y - S.y)
      : Math.abs(o * s.x - y * s.y + b.x * S.y - b.y * S.x) / l;
  },
  Po = (s, S) => {
    if (s.length <= 2) return s.slice();
    let b = 0,
      y = 0;
    const o = s.length - 1;
    for (let l = 1; l < o; l += 1) {
      const c = xS(s[l], s[0], s[o]);
      c > b && ((b = c), (y = l));
    }
    if (b > S) {
      const l = Po(s.slice(0, y + 1), S),
        c = Po(s.slice(y), S);
      return [...l, ...c.slice(1)];
    }
    return [s[0], s[o]];
  },
  SS = (s, S) => {
    if (s.length <= 3) return s;
    const b = [...s, s[0]],
      y = Po(b, S);
    return (y.pop(), y);
  },
  ES = (s, S = {}) => {
    const b = S.simplifyEpsilon ?? 2,
      y = yS(s.data, s.width, s.height);
    if (y.length === 0) return null;
    const o = pS(y);
    if (o.length === 0) return null;
    let l = o[0];
    for (let c = 1; c < o.length; c += 1) o[c].length > l.length && (l = o[c]);
    return SS(l, b);
  },
  Li = new Map(),
  Zo = new Map(),
  bS = (s) => {
    const S = s.length;
    if (S === 0) return { x: 0, y: 0 };
    if (S < 3) {
      let l = 0,
        c = 0;
      for (const d of s) ((l += d.x), (c += d.y));
      return { x: l / S, y: c / S };
    }
    let b = 0,
      y = 0,
      o = 0;
    for (let l = 0; l < S; l += 1) {
      const c = s[l],
        d = s[(l + 1) % S],
        f = c.x * d.y - d.x * c.y;
      ((b += (c.x + d.x) * f), (y += (c.y + d.y) * f), (o += f));
    }
    if (o === 0) {
      let l = 0,
        c = 0;
      for (const d of s) ((l += d.x), (c += d.y));
      return { x: l / S, y: c / S };
    }
    return { x: b / (3 * o), y: y / (3 * o) };
  },
  CS = async (s) => {
    const S = s.width,
      b = s.height;
    if (typeof OffscreenCanvas < 'u') {
      const c = new OffscreenCanvas(S, b).getContext('2d');
      if (!c) throw new Error('OffscreenCanvas 2D context unavailable');
      return (c.drawImage(s, 0, 0), c.getImageData(0, 0, S, b));
    }
    const y = document.createElement('canvas');
    ((y.width = S), (y.height = b));
    const o = y.getContext('2d');
    if (!o) throw new Error('Canvas 2D context unavailable');
    return (o.drawImage(s, 0, 0), o.getImageData(0, 0, S, b));
  },
  MS = async (s, S) => {
    const b = Li.get(s);
    if (b !== void 0) return b;
    const y = Zo.get(s);
    if (y) return y;
    const o = (async () => {
      try {
        const l = await CS(S),
          c = ES(l);
        if (!c || c.length < 3) return (Li.set(s, null), null);
        const d = bS(c),
          f = {
            vertices: c,
            centroidOffset: { x: d.x - l.width / 2, y: d.y - l.height / 2 },
            pngWidth: l.width,
            pngHeight: l.height,
          };
        return (Li.set(s, f), f);
      } catch {
        return (Li.set(s, null), null);
      } finally {
        Zo.delete(s);
      }
    })();
    return (Zo.set(s, o), o);
  },
  Cv = (s) => Li.get(s) ?? null,
  TS = (s, S) => {
    const b = (S * 2) / s.pngWidth;
    return s.vertices.map((y) => ({
      x: (y.x - s.pngWidth / 2 - s.centroidOffset.x) * b,
      y: (y.y - s.pngHeight / 2 - s.centroidOffset.y) * b,
    }));
  };
Te.Common.setDecomp(Bx);
const zh = new Map(),
  dc = (s) => {
    const S = zh.get(s);
    if (S) return S;
    const b = `/ochimono-game/${s}`.replace(/\/{2,}/g, '/');
    return (zh.set(s, b), b);
  },
  lr = (s, S) => {
    const b = (S.radius * 2) / Gx,
      y = dc(S.svgPath),
      o = Cv(y),
      l = o ? -o.centroidOffset.x * b : 0,
      c = o ? -o.centroidOffset.y * b : 0;
    s.plugin.itemRender = { textureUrl: y, scale: b, contourOffsetX: l, contourOffsetY: c };
  },
  Ko = (s, S, b, y) => {
    const o = dc(s.svgPath),
      l = Cv(o);
    if (l) {
      const c = TS(l, s.radius),
        d = iS(s, S, b, y, c);
      if (d) return d;
    }
    return lS(s, S, b, y);
  },
  Nh = new Set(),
  Bh = async (s, S) => {
    for (let b = 1; b <= Aa; b += 1) {
      const y = Jn(b, 1, s),
        o = dc(y.svgPath);
      if (!Nh.has(o)) {
        Nh.add(o);
        try {
          const c = await (await fetch(o)).blob(),
            d = await createImageBitmap(c);
          (S && (S.textures[o] = d), MS(o, d));
        } catch {
          const l = new Image();
          l.src = o;
        }
      }
    }
  },
  RS = ({ fieldWidth: s, fieldHeight: S }) => {
    const b = H.useRef(null),
      y = H.useRef(null),
      o = H.useRef(null),
      l = H.useRef(null),
      c = H.useRef(null),
      [d, f] = H.useState('idle'),
      [v, m] = H.useState(null),
      [h, g] = H.useState(null),
      r = H.useRef(null),
      x = H.useRef(null),
      p = H.useCallback((se) => {
        ((r.current = se), m(se));
      }, []),
      C = H.useCallback((se) => {
        ((x.current = se), g(se));
      }, []),
      R = H.useRef(!0),
      w = H.useRef(0),
      U = H.useRef('idle'),
      G = H.useRef(null),
      M = H.useRef(s),
      O = H.useRef(S),
      [D, _] = H.useState(() => Wx()),
      L = H.useRef(D);
    L.current = D;
    const B = Ix(),
      Y = aS(),
      V = H.useRef(B.add);
    V.current = B.add;
    const F = H.useRef(Y.play);
    F.current = Y.play;
    const ie = H.useRef(B.finalize);
    ie.current = B.finalize;
    const [ae, A] = H.useState(0),
      N = H.useRef(0),
      q = H.useCallback((se) => {
        ((N.current = se), A(se));
      }, []),
      $ = H.useCallback(
        (se) => {
          const ye = Math.min(ht.gaugeMax, N.current + se);
          ye !== N.current && q(ye);
        },
        [q]
      ),
      le = H.useRef($);
    le.current = $;
    const [z, Z] = H.useState(!1),
      [P, ue] = H.useState(!1),
      re = H.useRef(!1),
      [oe, ve] = H.useState(!1),
      Se = H.useRef(!1),
      Ce = H.useRef(null),
      Be = H.useRef(null),
      Ye = H.useRef(null),
      Ve = H.useRef(null),
      ft = H.useRef(new Set()),
      Fe = H.useCallback((se) => {
        for (const ye of se.parts)
          ((ye.collisionFilter.category = $n.magnetTarget), (ye.collisionFilter.mask = Qx));
        ft.current.add(se);
      }, []),
      fe = H.useCallback(() => {
        for (const se of ft.current)
          for (const ye of se.parts)
            ((ye.collisionFilter.category = $n.item), (ye.collisionFilter.mask = pv));
        ft.current.clear();
      }, []),
      Yt = H.useCallback(() => {
        (fe(),
          (Ye.current = null),
          (Ve.current = null),
          Ce.current === 'magnet' && (Ce.current = null));
      }, [fe]),
      xe = H.useRef(Yt);
    xe.current = Yt;
    const Ae = H.useRef(null),
      [_t, Vt] = H.useState(null),
      bt = H.useRef(null),
      $e = H.useRef(new Set()),
      Fa = H.useRef(1),
      st = H.useCallback(() => {
        let se;
        return ((se = Math.floor(Math.random() * Qo) + 1), Jn(se, M.current, L.current));
      }, []);
    H.useEffect(() => {
      const se = b.current;
      if (!se) return;
      const ye = M.current,
        ze = O.current,
        be = Te.Engine.create({ gravity: { x: 0, y: Fn.gravityY } }),
        me = Te.Render.create({
          element: se,
          engine: be,
          options: {
            width: ye,
            height: ze,
            wireframes: !1,
            background: 'transparent',
            pixelRatio: Math.min(1.5, window.devicePixelRatio || 1),
          },
        }),
        { ground: ge, leftWall: Ue, rightWall: He, ceiling: at } = uS(ye, ze);
      ([ge, Ue, He, at].forEach((it) => {
        it.render.visible = !1;
      }),
        Te.World.add(be.world, [ge, Ue, He, at]));
      const qe = $e.current,
        lt = () => {
          const it = me.context,
            ut = me.textures;
          for (const We of qe) {
            const tt = We.plugin.itemRender;
            if (!tt) continue;
            const zt = ut[tt.textureUrl];
            if (!zt) continue;
            const ta = zt.width,
              xr = zt.height,
              Xi = ta * tt.scale,
              Gl = xr * tt.scale;
            (it.save(),
              it.translate(We.position.x, We.position.y),
              it.rotate(We.angle),
              it.translate(tt.contourOffsetX, tt.contourOffsetY),
              it.drawImage(zt, -Xi / 2, -Gl / 2, Xi, Gl),
              it.restore());
          }
        };
      (Te.Events.on(me, 'afterRender', lt), Te.Render.run(me));
      const et = Te.Runner.create();
      (Te.Runner.run(et, be), (y.current = be), (o.current = me), (l.current = et));
      for (const it of oc) Bh(it.id, me);
      const wt = () => {
        document.hidden
          ? (Te.Runner.stop(et), Te.Render.stop(me))
          : (Te.Render.run(me), Te.Runner.run(et, be));
      };
      return (
        document.addEventListener('visibilitychange', wt),
        () => {
          (document.removeEventListener('visibilitychange', wt),
            Te.Events.off(me, 'afterRender', lt),
            Te.Runner.stop(et),
            Te.Render.stop(me),
            Te.World.clear(be.world, !1),
            Te.Engine.clear(be),
            me.canvas.parentNode && me.canvas.parentNode.removeChild(me.canvas),
            (me.textures = {}),
            (y.current = null),
            (o.current = null),
            (l.current = null),
            qe.clear());
        }
      );
    }, []);
    const _a = H.useCallback((se, ye) => {
      var wt;
      const ze = y.current;
      if (!ze) return;
      const be = Io(se),
        me = Io(ye),
        ge = kn(be),
        Ue = kn(me);
      if (!ge || !Ue || ge.consumed || Ue.consumed || ge.level !== Ue.level) return;
      ((ge.consumed = !0), (Ue.consumed = !0));
      const He = ge.level + 1,
        at = rS(be, me);
      (Te.World.remove(ze.world, [be, me]), $e.current.delete(be), $e.current.delete(me));
      let qe = 0,
        lt = !1,
        et = dx(He);
      if (He > Aa)
        ((qe = oS()), (lt = !0), (et += ht.bonusOnSpecialElimination), F.current('special'));
      else {
        const it = Jn(He, M.current, L.current),
          ut = Ko(it, at.x, at.y, performance.now());
        (lr(ut, it),
          Te.World.add(ze.world, ut),
          $e.current.add(ut),
          (qe = sS(He)),
          (lt = He === Aa),
          lt && (et += ht.bonusOnLevel10Created),
          F.current(lt ? 'special' : 'merge'));
      }
      (V.current(qe),
        le.current(et),
        (wt = c.current) == null || wt.add({ x: at.x, y: at.y, score: qe, isSpecial: lt }));
    }, []);
    (H.useEffect(() => {
      const se = y.current;
      if (!se) return;
      const ye = (ze) => {
        for (const be of ze.pairs) _a(be.bodyA, be.bodyB);
      };
      return (
        Te.Events.on(se, 'collisionStart', ye),
        () => {
          Te.Events.off(se, 'collisionStart', ye);
        }
      );
    }, [_a]),
      H.useEffect(() => {
        const se = y.current;
        if (!se) return;
        const ye = Fn.gameOverLineOffset;
        let ze = 0;
        const be = () => {
            ((Ae.current = null), bt.current !== null && ((bt.current = null), Vt(null)));
          },
          me = () => {
            if (Ye.current !== null)
              if (performance.now() >= Ye.current) xe.current();
              else {
                const et = [];
                for (const wt of ft.current) {
                  const it = kn(wt);
                  it && !it.consumed && et.push(wt);
                }
                if (et.length >= 2) {
                  let wt = 0,
                    it = 0;
                  for (const ut of et) ((wt += ut.position.x), (it += ut.position.y));
                  ((wt /= et.length), (it /= et.length));
                  for (const ut of et) {
                    const We = wt - ut.position.x,
                      tt = it - ut.position.y,
                      zt = Math.hypot(We, tt);
                    if (zt < 1) continue;
                    const ta = ht.magnet.forceMagnitude * ut.mass;
                    Te.Body.applyForce(ut, ut.position, { x: (We / zt) * ta, y: (tt / zt) * ta });
                  }
                } else xe.current();
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
            for (const lt of $e.current) {
              const et = kn(lt);
              if (
                !(!et || et.consumed) &&
                !(ge - et.droppedAt < Fn.gameOverGracePeriodMs) &&
                !(Math.abs(lt.velocity.y) > Fn.restingVelocityThreshold) &&
                lt.bounds.min.y < ye
              ) {
                Ue = !0;
                break;
              }
            }
            if (!Ue) {
              be();
              return;
            }
            Ae.current === null && (Ae.current = ge);
            const He = ge - Ae.current,
              at = Fn.gameOverDangerLimitMs;
            if (He >= at) {
              (be(), (U.current = 'gameover'), f('gameover'));
              const lt = ie.current();
              F.current(lt.isNewRecord ? 'highscore' : 'gameover');
              return;
            }
            const qe = Math.max(1, Math.ceil((at - He) / 1e3));
            qe !== bt.current && ((bt.current = qe), Vt(qe));
          };
        return (
          Te.Events.on(se, 'afterUpdate', me),
          () => {
            Te.Events.off(se, 'afterUpdate', me);
          }
        );
      }, []),
      H.useEffect(() => {
        if (y.current) {
          Bh(D, o.current);
          for (const be of $e.current) {
            const me = kn(be);
            if (!me || me.consumed) continue;
            const ge = Jn(me.level, M.current, D);
            lr(be, ge);
          }
        }
        const ye = r.current ? Jn(r.current.level, M.current, D) : null,
          ze = x.current ? Jn(x.current.level, M.current, D) : null;
        (p(ye), C(ze));
      }, [D, p, C]));
    const Mn = H.useCallback((se) => {
        (_(se), wh(se));
      }, []),
      qt = H.useCallback((se) => {
        ((re.current = se), ue(se));
      }, []),
      Wt = H.useCallback(
        (se) => {
          q(Math.max(0, N.current - se));
        },
        [q]
      ),
      Tn = H.useCallback(() => {
        if (!y.current) return;
        Ce.current = 'shake';
        const { impulseMin: ye, impulseMax: ze, upwardBias: be } = ht.shake;
        for (const me of $e.current) {
          const ge = kn(me);
          if (!ge || ge.consumed) continue;
          const Ue = Math.random() * Math.PI * 2,
            He = ye + Math.random() * (ze - ye),
            at = Math.cos(Ue) * He * me.mass,
            qe = (Math.sin(Ue) * He - be) * me.mass;
          Te.Body.applyForce(me, me.position, { x: at, y: qe });
        }
        (F.current('special'), (Ce.current = null));
      }, []),
      yn = H.useCallback(() => {
        const se = y.current;
        if (!se || Be.current !== null) return;
        ((Ce.current = 'gravityFlip'), (Se.current = !0));
        const ye = Fn.gravityY;
        se.gravity.y = ye * ht.gravityFlip.multiplier;
        const ze = new Map(),
          be = new Map();
        for (const me of $e.current)
          (ze.set(me, me.frictionAir),
            be.set(me, me.restitution),
            (me.frictionAir = ht.gravityFlip.frictionAir),
            Te.Body.setVelocity(me, { x: me.velocity.x, y: ht.gravityFlip.liftKickVelocity }));
        (ve(!0),
          F.current('special'),
          (Be.current = window.setTimeout(() => {
            const me = y.current;
            me && (me.gravity.y = ye * ht.gravityFlip.slamGravityMultiplier);
            for (const ge of $e.current)
              ((ge.frictionAir = ht.gravityFlip.slamFrictionAir),
                be.has(ge) || be.set(ge, ge.restitution),
                (ge.restitution = ht.gravityFlip.slamRestitution),
                Te.Body.setVelocity(ge, { x: ge.velocity.x, y: ht.gravityFlip.slamKickVelocity }));
            (ve(!1),
              F.current('special'),
              (Be.current = window.setTimeout(() => {
                const ge = y.current;
                ge && (ge.gravity.y = ye);
                for (const Ue of $e.current)
                  ((Ue.frictionAir = ze.get(Ue) ?? 0.01), (Ue.restitution = be.get(Ue) ?? 0.4));
                ((Be.current = null),
                  (Se.current = !1),
                  Ce.current === 'gravityFlip' && (Ce.current = null));
              }, ht.gravityFlip.slamDurationMs)));
          }, ht.gravityFlip.durationMs)));
      }, []),
      qi = H.useCallback(() => {
        ((Ce.current = 'magnet'), qt(!0));
      }, [qt]),
      yr = H.useCallback(() => {
        re.current && (qt(!1), (Ce.current = null));
      }, [qt]),
      Oa = H.useCallback(
        (se, ye) => {
          if (!re.current) return;
          const ze = Array.from($e.current),
            be = Te.Query.point(ze, { x: se, y: ye });
          if (be.length === 0) return;
          const me = be[0],
            ge = kn(me);
          if (!ge) return;
          const Ue = ze.filter((at) => {
            if (at === me) return !1;
            const qe = kn(at);
            return !!qe && !qe.consumed && qe.level === ge.level;
          });
          if (Ue.length === 0) return;
          const He = Ue[Math.floor(Math.random() * Ue.length)];
          (Fe(me),
            Fe(He),
            (Ve.current = ge.level),
            (Ye.current = performance.now() + ht.magnet.durationMs),
            qt(!1),
            F.current('special'),
            Wt(Ui('magnet')));
        },
        [Wt, qt, Fe]
      ),
      Ot = H.useCallback(() => {
        N.current < ht.segmentMax || (U.current === 'playing' && Z(!0));
      }, []),
      pn = H.useCallback(() => {
        Z(!1);
      }, []),
      Dt = H.useCallback(
        (se) => {
          const ye = Ui(se);
          N.current < ye ||
            (Z(!1),
            se === 'shake'
              ? (Tn(), Wt(ye))
              : se === 'gravityFlip'
                ? (yn(), Wt(ye))
                : se === 'magnet' && qi());
        },
        [Tn, yn, qi, Wt]
      ),
      ea = H.useCallback(() => {
        Be.current !== null && (window.clearTimeout(Be.current), (Be.current = null));
        const se = y.current;
        (se && (se.gravity.y = Fn.gravityY),
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
        (se) => {
          const ye = y.current;
          if (!ye || U.current !== 'playing' || !R.current) return;
          const ze = r.current;
          if (!ze) return;
          const be = performance.now();
          if (be - w.current < fn.dropCooldownMs) return;
          const me = Math.max(0, Math.min(1, se)),
            ge = ze.radius,
            Ue = ge,
            He = M.current - ge,
            at = Ue + me * (He - Ue),
            qe = ze.radius + 4,
            lt = Ko(ze, at, qe, be);
          (lr(lt, ze),
            Te.World.add(ye.world, lt),
            $e.current.add(lt),
            F.current('drop'),
            (R.current = !1),
            (w.current = be),
            G.current !== null && window.clearTimeout(G.current),
            (G.current = window.setTimeout(() => {
              ((G.current = null),
                U.current === 'playing' && (p(x.current), C(st()), (R.current = !0)));
            }, fn.dropCooldownMs)));
        },
        [st, p, C]
      ),
      jl = H.useCallback(() => {
        var se;
        (B.reset(),
          (se = c.current) == null || se.clear(),
          ea(),
          (Ae.current = null),
          (bt.current = null),
          Vt(null),
          (Fa.current = 1),
          p(st()),
          C(st()),
          (R.current = !0),
          (w.current = 0),
          (U.current = 'playing'),
          f('playing'));
      }, [B, st, ea, p, C]),
      $a = H.useCallback(() => {
        const se = y.current;
        if (se) {
          for (const ye of $e.current) Te.World.remove(se.world, ye);
          $e.current.clear();
        }
        (G.current !== null && (window.clearTimeout(G.current), (G.current = null)), jl());
      }, [jl]),
      Wa = H.useCallback(() => {
        var ze, be, me;
        if (U.current !== 'playing') return;
        const se = [];
        for (const ge of $e.current) {
          const Ue = kn(ge);
          !Ue ||
            Ue.consumed ||
            se.push({
              level: Ue.level,
              x: ge.position.x,
              y: ge.position.y,
              vx: ge.velocity.x,
              vy: ge.velocity.y,
              angle: ge.angle,
              angularVelocity: ge.angularVelocity,
            });
        }
        mS({
          score: B.score,
          themeId: L.current,
          currentItemLevel: ((ze = r.current) == null ? void 0 : ze.level) ?? 1,
          nextItemLevel: ((be = x.current) == null ? void 0 : be.level) ?? 1,
          skillGauge: N.current,
          bodies: se,
        });
        const ye = y.current;
        if (ye) {
          for (const ge of $e.current) Te.World.remove(ye.world, ge);
          $e.current.clear();
        }
        (G.current !== null && (window.clearTimeout(G.current), (G.current = null)),
          (me = c.current) == null || me.clear(),
          ea(),
          (Ae.current = null),
          (bt.current = null),
          Vt(null),
          p(null),
          C(null),
          B.reset(),
          (R.current = !0),
          (w.current = 0),
          (U.current = 'idle'),
          f('idle'));
      }, [ea, B, p, C]),
      Ia = H.useCallback(
        (se) => {
          var Ue;
          const ye = y.current;
          if (!ye) return;
          for (const He of $e.current) Te.World.remove(ye.world, He);
          ($e.current.clear(),
            G.current !== null && (window.clearTimeout(G.current), (G.current = null)),
            (Ue = c.current) == null || Ue.clear(),
            ea(),
            (Ae.current = null),
            (bt.current = null),
            Vt(null),
            se.themeId !== L.current && (_(se.themeId), (L.current = se.themeId), wh(se.themeId)));
          const ze = performance.now();
          for (const He of se.bodies) {
            if (He.level < 1 || He.level > Aa) continue;
            const at = Jn(He.level, M.current, se.themeId),
              qe = Ko(at, He.x, He.y, ze);
            (Te.Body.setVelocity(qe, { x: He.vx, y: He.vy }),
              Te.Body.setAngle(qe, He.angle),
              Te.Body.setAngularVelocity(qe, He.angularVelocity),
              lr(qe, at),
              Te.World.add(ye.world, qe),
              $e.current.add(qe));
          }
          const be =
              se.currentItemLevel >= 1 && se.currentItemLevel <= Qo ? se.currentItemLevel : 1,
            me = se.nextItemLevel >= 1 && se.nextItemLevel <= Qo ? se.nextItemLevel : 1;
          (p(Jn(be, M.current, se.themeId)), C(Jn(me, M.current, se.themeId)));
          const ge = Math.max(0, Math.min(ht.gaugeMax, se.skillGauge));
          (q(ge),
            B.reset(),
            B.setRaw(Math.max(0, se.score)),
            (R.current = !0),
            (w.current = 0),
            (U.current = 'playing'),
            f('playing'));
        },
        [ea, B, p, C, q]
      ),
      Rn = Fn.gameOverLineOffset;
    return {
      status: d,
      score: B.score,
      bestScore: B.bestScore,
      isNewRecord: B.isNewRecord,
      currentItem: v,
      nextItem: h,
      isSoundOn: Y.isSoundOn,
      themeId: D,
      mergeEffectRef: c,
      canvasContainerRef: b,
      drop: pr,
      start: jl,
      restart: $a,
      toggleSound: Y.toggle,
      setThemeId: Mn,
      fieldWidth: s,
      fieldHeight: S,
      gameOverLineY: Rn,
      skillGauge: ae,
      skillGaugeMax: ht.gaugeMax,
      skillSegmentMax: ht.segmentMax,
      skillSegmentCount: ht.segmentCount,
      canOpenSkillMenu: ae >= ht.segmentMax,
      canUseSkill: {
        shake: ae >= Ui('shake'),
        gravityFlip: ae >= Ui('gravityFlip'),
        magnet: ae >= Ui('magnet'),
      },
      isSkillMenuOpen: z,
      openSkillMenu: Ot,
      closeSkillMenu: pn,
      selectSkill: Dt,
      isMagnetSelecting: P,
      cancelMagnetSelecting: yr,
      selectMagnetTarget: Oa,
      isGravityFlipped: oe,
      gameOverCountdown: _t,
      suspend: Wa,
      resume: Ia,
      loadSuspended: dS,
      clearSuspended: hS,
    };
  },
  AS = ({ size: s }) => {
    const S = RS({ fieldWidth: s.width, fieldHeight: s.height }),
      [b, y] = H.useState(!1),
      o = H.useCallback(() => y(!0), []),
      l = H.useCallback(() => y(!1), []),
      [c, d] = H.useState(null),
      f = H.useCallback(() => {
        const h = S.loadSuspended();
        h ? d(h) : S.start();
      }, [S]),
      v = H.useCallback(() => {
        (c && S.resume(c), S.clearSuspended(), d(null));
      }, [S, c]),
      m = H.useCallback(() => {
        (S.clearSuspended(), d(null), S.start());
      }, [S]);
    return I.jsxs(I.Fragment, {
      children: [
        I.jsx(_x, {
          score: S.score,
          bestScore: S.bestScore,
          nextItem: S.nextItem,
          onOpenSettings: o,
        }),
        I.jsx('main', {
          className: Ja.main,
          children: I.jsxs('div', {
            className: Ja.field_wrapper,
            style: { width: `${s.width}px`, height: `${s.height}px` },
            children: [
              I.jsx(Wp, {
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
              I.jsx(rv, { effect: S.isGravityFlipped ? 'gravityFlip' : null }),
              I.jsx(iv, { active: S.isMagnetSelecting, onCancel: S.cancelMagnetSelecting }),
              I.jsx(lv, { seconds: S.status === 'playing' ? S.gameOverCountdown : null }),
              S.status === 'playing'
                ? I.jsx('div', {
                    className: Ja.skill_button_wrapper,
                    children: I.jsx(fv, {
                      gauge: S.skillGauge,
                      segmentMax: S.skillSegmentMax,
                      segmentCount: S.skillSegmentCount,
                      canOpen: S.canOpenSkillMenu,
                      onClick: S.openSkillMenu,
                    }),
                  })
                : null,
              S.status === 'idle' ? I.jsx(O1, { onStart: f }) : null,
              S.status === 'gameover'
                ? I.jsx(s1, {
                    score: S.score,
                    bestScore: S.bestScore,
                    isNewRecord: S.isNewRecord,
                    onRestart: S.restart,
                  })
                : null,
            ],
          }),
        }),
        I.jsx(mv, {
          open: S.isSkillMenuOpen,
          onSelect: S.selectSkill,
          onClose: S.closeSkillMenu,
          canUse: S.canUseSkill,
        }),
        I.jsx(cv, {
          open: b,
          onClose: l,
          themeId: S.themeId,
          onChangeTheme: S.setThemeId,
          isSoundOn: S.isSoundOn,
          onToggleSound: S.toggleSound,
          canSuspend: S.status === 'playing',
          onSuspend: S.suspend,
        }),
        I.jsx(uv, { open: c !== null, onYes: v, onNo: m }),
      ],
    });
  },
  _S = () => {
    const s = H.useRef(null),
      [S, b] = H.useState(null);
    return (
      H.useLayoutEffect(() => {
        const y = s.current;
        if (!y) return;
        const o = y.getBoundingClientRect();
        b({ width: Math.floor(o.width), height: Math.floor(o.height) });
      }, []),
      S === null
        ? I.jsxs('div', {
            className: Ja.layout,
            children: [
              I.jsx('div', { className: Ja.top_bar_placeholder, 'aria-hidden': 'true' }),
              I.jsx('main', { ref: s, className: Ja.main }),
            ],
          })
        : I.jsx('div', { className: Ja.layout, children: I.jsx(AS, { size: S }) })
    );
  },
  OS = () => I.jsx('div', { className: zp.index, children: I.jsx(_S, {}) }),
  DS = () => I.jsx('div', { children: I.jsx('h1', { children: 'Not Found' }) });
function wS() {
  return I.jsxs(I.Fragment, {
    children: [
      I.jsxs(qy, {
        children: [
          I.jsx(Jo, { path: '/', element: I.jsx(OS, {}) }),
          I.jsx(Jo, { path: '*', element: I.jsx(DS, {}) }),
        ],
      }),
      I.jsx(Dp, {}),
    ],
  });
}
const Mv = document.getElementById('root');
if (!Mv) throw new Error('Failed to find #root element');
Qg.createRoot(Mv).render(I.jsx(dp, { basename: '/ochimono-game', children: I.jsx(wS, {}) }));
