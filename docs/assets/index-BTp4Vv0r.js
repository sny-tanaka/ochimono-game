function q0(s, b) {
  for (var x = 0; x < b.length; x++) {
    const y = b[x];
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
  const b = document.createElement('link').relList;
  if (b && b.supports && b.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) y(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === 'childList')
        for (const c of l.addedNodes) c.tagName === 'LINK' && c.rel === 'modulepreload' && y(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function x(o) {
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
    const l = x(o);
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
var Do = { exports: {} },
  wi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sh;
function X0() {
  if (sh) return wi;
  sh = 1;
  var s = Symbol.for('react.transitional.element'),
    b = Symbol.for('react.fragment');
  function x(y, o, l) {
    var c = null;
    if ((l !== void 0 && (c = '' + l), o.key !== void 0 && (c = '' + o.key), 'key' in o)) {
      l = {};
      for (var d in o) d !== 'key' && (l[d] = o[d]);
    } else l = o;
    return ((o = l.ref), { $$typeof: s, type: y, key: c, ref: o !== void 0 ? o : null, props: l });
  }
  return ((wi.Fragment = b), (wi.jsx = x), (wi.jsxs = x), wi);
}
var oh;
function Q0() {
  return (oh || ((oh = 1), (Do.exports = X0())), Do.exports);
}
var W = Q0(),
  wo = { exports: {} },
  zi = {},
  zo = { exports: {} },
  No = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ch;
function Z0() {
  return (
    ch ||
      ((ch = 1),
      (function (s) {
        function b(A, N) {
          var q = A.length;
          A.push(N);
          e: for (; 0 < q; ) {
            var $ = (q - 1) >>> 1,
              le = A[$];
            if (0 < o(le, N)) ((A[$] = N), (A[q] = le), (q = $));
            else break e;
          }
        }
        function x(A) {
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
                se = A[ue];
              if (0 > o(P, q))
                ue < le && 0 > o(se, P)
                  ? ((A[$] = se), (A[ue] = q), ($ = ue))
                  : ((A[$] = P), (A[Z] = q), ($ = Z));
              else if (ue < le && 0 > o(se, q)) ((A[$] = se), (A[ue] = q), ($ = ue));
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
          S = !1,
          p = !1,
          C = !1,
          R = typeof setTimeout == 'function' ? setTimeout : null,
          w = typeof clearTimeout == 'function' ? clearTimeout : null,
          L = typeof setImmediate < 'u' ? setImmediate : null;
        function G(A) {
          for (var N = x(v); N !== null; ) {
            if (N.callback === null) y(v);
            else if (N.startTime <= A) (y(v), (N.sortIndex = N.expirationTime), b(f, N));
            else break;
            N = x(v);
          }
        }
        function M(A) {
          if (((p = !1), G(A), !S))
            if (x(f) !== null) ((S = !0), O || ((O = !0), V()));
            else {
              var N = x(v);
              N !== null && ae(M, N.startTime - A);
            }
        }
        var O = !1,
          D = -1,
          _ = 5,
          H = -1;
        function U() {
          return C ? !0 : !(s.unstable_now() - H < _);
        }
        function Y() {
          if (((C = !1), O)) {
            var A = s.unstable_now();
            H = A;
            var N = !0;
            try {
              e: {
                ((S = !1), p && ((p = !1), w(D), (D = -1)), (r = !0));
                var q = g;
                try {
                  t: {
                    for (G(A), h = x(f); h !== null && !(h.expirationTime > A && U()); ) {
                      var $ = h.callback;
                      if (typeof $ == 'function') {
                        ((h.callback = null), (g = h.priorityLevel));
                        var le = $(h.expirationTime <= A);
                        if (((A = s.unstable_now()), typeof le == 'function')) {
                          ((h.callback = le), G(A), (N = !0));
                          break t;
                        }
                        (h === x(f) && y(f), G(A));
                      } else y(f);
                      h = x(f);
                    }
                    if (h !== null) N = !0;
                    else {
                      var z = x(v);
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
        if (typeof L == 'function')
          V = function () {
            L(Y);
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
                  b(v, A),
                  x(f) === null && A === x(v) && (p ? (w(D), (D = -1)) : (p = !0), ae(M, q - $)))
                : ((A.sortIndex = le), b(f, A), S || r || ((S = !0), O || ((O = !0), V()))),
              A
            );
          }),
          (s.unstable_shouldYield = U),
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
      })(No)),
    No
  );
}
var fh;
function K0() {
  return (fh || ((fh = 1), (zo.exports = Z0())), zo.exports);
}
var Bo = { exports: {} },
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
function k0() {
  if (dh) return Ee;
  dh = 1;
  var s = Symbol.for('react.transitional.element'),
    b = Symbol.for('react.portal'),
    x = Symbol.for('react.fragment'),
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
  function R(z, Z, P) {
    ((this.props = z), (this.context = Z), (this.refs = C), (this.updater = P || S));
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
  function L(z, Z, P) {
    ((this.props = z), (this.context = Z), (this.refs = C), (this.updater = P || S));
  }
  var G = (L.prototype = new w());
  ((G.constructor = L), p(G, R.prototype), (G.isPureReactComponent = !0));
  var M = Array.isArray;
  function O() {}
  var D = { H: null, A: null, T: null, S: null },
    _ = Object.prototype.hasOwnProperty;
  function H(z, Z, P) {
    var ue = P.ref;
    return { $$typeof: s, type: z, key: Z, ref: ue !== void 0 ? ue : null, props: P };
  }
  function U(z, Z) {
    return H(z.type, Z, z.props);
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
  function A(z, Z, P, ue, se) {
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
            case b:
              ve = !0;
              break;
            case m:
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
            A(se, Z, P, '', function (Le) {
              return Le;
            }))
          : se != null &&
            (Y(se) &&
              (se = U(
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
    var xe = ue === '' ? '.' : ue + ':';
    if (M(z))
      for (var Ue = 0; Ue < z.length; Ue++)
        ((ue = z[Ue]), (oe = xe + ie(ue, Ue)), (ve += A(ue, Z, P, oe, se)));
    else if (((Ue = r(z)), typeof Ue == 'function'))
      for (z = Ue.call(z), Ue = 0; !(ue = z.next()).done; )
        ((ue = ue.value), (oe = xe + ie(ue, Ue++)), (ve += A(ue, Z, P, oe, se)));
    else if (oe === 'object') {
      if (typeof z.then == 'function') return A(ae(z), Z, P, ue, se);
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
      A(z, ue, '', '', function (oe) {
        return Z.call(P, oe, se++);
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
    (Ee.Fragment = x),
    (Ee.Profiler = o),
    (Ee.PureComponent = L),
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
        se = z.key;
      if (Z != null)
        for (oe in (Z.key !== void 0 && (se = '' + Z.key), Z))
          !_.call(Z, oe) ||
            oe === 'key' ||
            oe === '__self' ||
            oe === '__source' ||
            (oe === 'ref' && Z.ref === void 0) ||
            (ue[oe] = Z[oe]);
      var oe = arguments.length - 2;
      if (oe === 1) ue.children = P;
      else if (1 < oe) {
        for (var ve = Array(oe), xe = 0; xe < oe; xe++) ve[xe] = arguments[xe + 2];
        ue.children = ve;
      }
      return H(z.type, se, ue);
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
        se = {},
        oe = null;
      if (Z != null)
        for (ue in (Z.key !== void 0 && (oe = '' + Z.key), Z))
          _.call(Z, ue) && ue !== 'key' && ue !== '__self' && ue !== '__source' && (se[ue] = Z[ue]);
      var ve = arguments.length - 2;
      if (ve === 1) se.children = P;
      else if (1 < ve) {
        for (var xe = Array(ve), Ue = 0; Ue < ve; Ue++) xe[Ue] = arguments[Ue + 2];
        se.children = xe;
      }
      if (z && z.defaultProps)
        for (ue in ((ve = z.defaultProps), ve)) se[ue] === void 0 && (se[ue] = ve[ue]);
      return H(z, oe, se);
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
          se = D.S;
        (se !== null && se(P, ue),
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
var mh;
function ac() {
  return (mh || ((mh = 1), (Bo.exports = k0())), Bo.exports);
}
var Uo = { exports: {} },
  At = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hh;
function J0() {
  if (hh) return At;
  hh = 1;
  var s = ac();
  function b(f) {
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
  function x() {}
  var y = {
      d: {
        f: x,
        r: function () {
          throw Error(b(522));
        },
        D: x,
        C: x,
        L: x,
        m: x,
        X: x,
        S: x,
        M: x,
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
      if (!v || (v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)) throw Error(b(299));
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
var vh;
function F0() {
  if (vh) return Uo.exports;
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
      } catch (b) {
        console.error(b);
      }
  }
  return (s(), (Uo.exports = J0()), Uo.exports);
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
function $0() {
  if (gh) return zi;
  gh = 1;
  var s = K0(),
    b = ac(),
    x = F0();
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
    S = Symbol.for('react.portal'),
    p = Symbol.for('react.fragment'),
    C = Symbol.for('react.strict_mode'),
    R = Symbol.for('react.profiler'),
    w = Symbol.for('react.consumer'),
    L = Symbol.for('react.context'),
    G = Symbol.for('react.forward_ref'),
    M = Symbol.for('react.suspense'),
    O = Symbol.for('react.suspense_list'),
    D = Symbol.for('react.memo'),
    _ = Symbol.for('react.lazy'),
    H = Symbol.for('react.activity'),
    U = Symbol.for('react.memo_cache_sentinel'),
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
      case H:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case S:
          return 'Portal';
        case L:
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
    A = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    N = x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
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
    se = z(null),
    oe = z(null),
    ve = z(null);
  function xe(e, t) {
    switch ((P(oe, t), P(se, e), P(ue, null), t.nodeType)) {
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
    (Z(ue), Z(se), Z(oe));
  }
  function Le(e) {
    e.memoizedState !== null && P(ve, e);
    var t = ue.current,
      n = wm(t, e.type);
    t !== n && (P(se, e), P(ue, n));
  }
  function Ye(e) {
    (se.current === e && (Z(ue), Z(se)), ve.current === e && (Z(ve), (Ai._currentValue = q)));
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
  function Dt(e, t) {
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
                  var J = I;
                }
                Reflect.construct(e, [], ne);
              } else {
                try {
                  ne.call();
                } catch (I) {
                  J = I;
                }
                e.call(ne.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (I) {
                J = I;
              }
              (ne = e()) && typeof ne.catch == 'function' && ne.catch(function () {});
            }
          } catch (I) {
            if (I && J && typeof I.stack == 'string') return [I.stack, J.stack];
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
        return Dt(e.type, !1);
      case 11:
        return Dt(e.type.render, !1);
      case 1:
        return Dt(e.type, !0);
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
  var pt = Object.prototype.hasOwnProperty,
    An = s.unstable_scheduleCallback,
    on = s.unstable_cancelCallback,
    wt = s.unstable_shouldYield,
    Pa = s.unstable_requestPaint,
    ut = s.unstable_now,
    zt = s.unstable_getCurrentPriorityLevel,
    ke = s.unstable_ImmediatePriority,
    el = s.unstable_UserBlockingPriority,
    Jt = s.unstable_NormalPriority,
    _n = s.unstable_LowPriority,
    On = s.unstable_IdlePriority,
    Sn = s.log,
    Na = s.unstable_setDisableYieldValue,
    ua = null,
    Rt = null;
  function cn(e) {
    if ((typeof Sn == 'function' && Na(e), Rt && typeof Rt.setStrictMode == 'function'))
      try {
        Rt.setStrictMode(ua, e);
      } catch {}
  }
  var _t = Math.clz32 ? Math.clz32 : xr,
    pr = Math.log,
    Sr = Math.LN2;
  function xr(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((pr(e) / Sr) | 0)) | 0);
  }
  var tl = 256,
    fn = 262144,
    nl = 4194304;
  function dn(e) {
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
      E = e.pingedLanes;
    e = e.warmLanes;
    var T = a & 134217727;
    return (
      T !== 0
        ? ((a = T & ~u),
          a !== 0
            ? (i = dn(a))
            : ((E &= T), E !== 0 ? (i = dn(E)) : n || ((n = T & ~e), n !== 0 && (i = dn(n)))))
        : ((T = a & ~u),
          T !== 0
            ? (i = dn(T))
            : E !== 0
              ? (i = dn(E))
              : n || ((n = a & ~e), n !== 0 && (i = dn(n)))),
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
  function Qi() {
    var e = nl;
    return ((nl <<= 1), (nl & 62914560) === 0 && (nl = 4194304), e);
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
      var ee = 31 - _t(n),
        ne = 1 << ee;
      ((T[ee] = 0), (j[ee] = -1));
      var J = k[ee];
      if (J !== null)
        for (k[ee] = null, ee = 0; ee < J.length; ee++) {
          var I = J[ee];
          I !== null && (I.lane &= -536870913);
        }
      n &= ~ne;
    }
    (a !== 0 && be(e, a, 0),
      u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(E & ~t)));
  }
  function be(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - _t(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function me(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var a = 31 - _t(n),
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
    var e = N.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : eh(e.type));
  }
  function nt(e, t) {
    var n = N.p;
    try {
      return ((N.p = e), t());
    } finally {
      N.p = n;
    }
  }
  var Ne = Math.random().toString(36).slice(2),
    Re = '__reactFiber$' + Ne,
    Ie = '__reactProps$' + Ne,
    Pe = '__reactContainer$' + Ne,
    St = '__reactEvents$' + Ne,
    Dn = '__reactListeners$' + Ne,
    mn = '__reactHandles$' + Ne,
    hn = '__reactResources$' + Ne,
    xn = '__reactMarker$' + Ne;
  function ql(e) {
    (delete e[Re], delete e[Ie], delete e[St], delete e[Dn], delete e[mn]);
  }
  function wn(e) {
    var t = e[Re];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Pe] || n[Re])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = jm(e); e !== null; ) {
            if ((n = e[Re])) return n;
            e = jm(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function zn(e) {
    if ((e = e[Re] || e[Pe])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Xl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(y(33));
  }
  function ll(e) {
    var t = e[hn];
    return (t || (t = e[hn] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function xt(e) {
    e[xn] = !0;
  }
  var yc = new Set(),
    pc = {};
  function Ua(e, t) {
    (il(e, t), il(e + 'Capture', t));
  }
  function il(e, t) {
    for (pc[e] = t, e = 0; e < t.length; e++) yc.add(t[e]);
  }
  var Nv = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Sc = {},
    xc = {};
  function Bv(e) {
    return pt.call(xc, e)
      ? !0
      : pt.call(Sc, e)
        ? !1
        : Nv.test(e)
          ? (xc[e] = !0)
          : ((Sc[e] = !0), !1);
  }
  function Zi(e, t, n) {
    if (Bv(t))
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
  function Ki(e, t, n) {
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
  function Ft(e) {
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
  function Ec(e) {
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
  function br(e) {
    if (!e._valueTracker) {
      var t = Ec(e) ? 'checked' : 'value';
      e._valueTracker = Uv(e, t, '' + e[t]);
    }
  }
  function bc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      a = '';
    return (
      e && (a = Ec(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = a),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function ki(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Lv = /[\n"\\]/g;
  function $t(e) {
    return e.replace(Lv, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Cr(e, t, n, a, i, u, E, T) {
    ((e.name = ''),
      E != null && typeof E != 'function' && typeof E != 'symbol' && typeof E != 'boolean'
        ? (e.type = E)
        : e.removeAttribute('type'),
      t != null
        ? E === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Ft(t))
          : e.value !== '' + Ft(t) && (e.value = '' + Ft(t))
        : (E !== 'submit' && E !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Mr(e, E, Ft(t))
        : n != null
          ? Mr(e, E, Ft(n))
          : a != null && e.removeAttribute('value'),
      i == null && u != null && (e.defaultChecked = !!u),
      i != null && (e.checked = i && typeof i != 'function' && typeof i != 'symbol'),
      T != null && typeof T != 'function' && typeof T != 'symbol' && typeof T != 'boolean'
        ? (e.name = '' + Ft(T))
        : e.removeAttribute('name'));
  }
  function Cc(e, t, n, a, i, u, E, T) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || n != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) {
        br(e);
        return;
      }
      ((n = n != null ? '' + Ft(n) : ''),
        (t = t != null ? '' + Ft(t) : n),
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
      br(e));
  }
  function Mr(e, t, n) {
    (t === 'number' && ki(e.ownerDocument) === e) ||
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
      for (n = '' + Ft(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          ((e[i].selected = !0), a && (e[i].defaultSelected = !0));
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Mc(e, t, n) {
    if (t != null && ((t = '' + Ft(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + Ft(n) : '';
  }
  function Tc(e, t, n, a) {
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
    ((n = Ft(t)),
      (e.defaultValue = n),
      (a = e.textContent),
      a === n && a !== '' && a !== null && (e.value = a),
      br(e));
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
  var Hv = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function Rc(e, t, n) {
    var a = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : a
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || Hv.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function Ac(e, t, n) {
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
      for (var i in t) ((a = t[i]), t.hasOwnProperty(i) && n[i] !== a && Rc(e, i, a));
    } else for (var u in t) t.hasOwnProperty(u) && Rc(e, u, t[u]);
  }
  function Tr(e) {
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
  var jv = new Map([
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
    Gv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ji(e) {
    return Gv.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Bn() {}
  var Rr = null;
  function Ar(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var sl = null,
    ol = null;
  function _c(e) {
    var t = zn(e);
    if (t && (e = t.stateNode)) {
      var n = e[Ie] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Cr(
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
              n = n.querySelectorAll('input[name="' + $t('' + t) + '"][type="radio"]'), t = 0;
              t < n.length;
              t++
            ) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var i = a[Ie] || null;
                if (!i) throw Error(y(90));
                Cr(
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
            for (t = 0; t < n.length; t++) ((a = n[t]), a.form === e.form && bc(a));
          }
          break e;
        case 'textarea':
          Mc(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && ul(e, !!n.multiple, t, !1));
      }
    }
  }
  var _r = !1;
  function Oc(e, t, n) {
    if (_r) return e(t, n);
    _r = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((_r = !1),
        (sl !== null || ol !== null) &&
          (Uu(), sl && ((t = sl), (e = ol), (ol = sl = null), _c(t), e)))
      )
        for (t = 0; t < e.length; t++) _c(e[t]);
    }
  }
  function Ql(e, t) {
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
    if (n && typeof n != 'function') throw Error(y(231, t, typeof n));
    return n;
  }
  var Un = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Or = !1;
  if (Un)
    try {
      var Zl = {};
      (Object.defineProperty(Zl, 'passive', {
        get: function () {
          Or = !0;
        },
      }),
        window.addEventListener('test', Zl, Zl),
        window.removeEventListener('test', Zl, Zl));
    } catch {
      Or = !1;
    }
  var ra = null,
    Dr = null,
    Fi = null;
  function Dc() {
    if (Fi) return Fi;
    var e,
      t = Dr,
      n = t.length,
      a,
      i = 'value' in ra ? ra.value : ra.textContent,
      u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var E = n - e;
    for (a = 1; a <= E && t[n - a] === i[u - a]; a++);
    return (Fi = i.slice(e, 1 < a ? 1 - a : void 0));
  }
  function $i(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Wi() {
    return !0;
  }
  function wc() {
    return !1;
  }
  function Nt(e) {
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
          ? Wi
          : wc),
        (this.isPropagationStopped = wc),
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
            (this.isDefaultPrevented = Wi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Wi));
        },
        persist: function () {},
        isPersistent: Wi,
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
    Ii = Nt(La),
    Kl = h({}, La, { view: 0, detail: 0 }),
    Yv = Nt(Kl),
    wr,
    zr,
    kl,
    Pi = h({}, Kl, {
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
          : (e !== kl &&
              (kl && e.type === 'mousemove'
                ? ((wr = e.screenX - kl.screenX), (zr = e.screenY - kl.screenY))
                : (zr = wr = 0),
              (kl = e)),
            wr);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : zr;
      },
    }),
    zc = Nt(Pi),
    Vv = h({}, Pi, { dataTransfer: 0 }),
    qv = Nt(Vv),
    Xv = h({}, Kl, { relatedTarget: 0 }),
    Nr = Nt(Xv),
    Qv = h({}, La, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Zv = Nt(Qv),
    Kv = h({}, La, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    kv = Nt(Kv),
    Jv = h({}, La, { data: 0 }),
    Nc = Nt(Jv),
    Fv = {
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
    $v = {
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
    Wv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Iv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Wv[e]) ? !!t[e] : !1;
  }
  function Br() {
    return Iv;
  }
  var Pv = h({}, Kl, {
      key: function (e) {
        if (e.key) {
          var t = Fv[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = $i(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? $v[e.keyCode] || 'Unidentified'
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
        return e.type === 'keypress' ? $i(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? $i(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    eg = Nt(Pv),
    tg = h({}, Pi, {
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
    Bc = Nt(tg),
    ng = h({}, Kl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Br,
    }),
    ag = Nt(ng),
    lg = h({}, La, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ig = Nt(lg),
    ug = h({}, Pi, {
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
    rg = Nt(ug),
    sg = h({}, La, { newState: 0, oldState: 0 }),
    og = Nt(sg),
    cg = [9, 13, 27, 32],
    Ur = Un && 'CompositionEvent' in window,
    Jl = null;
  Un && 'documentMode' in document && (Jl = document.documentMode);
  var fg = Un && 'TextEvent' in window && !Jl,
    Uc = Un && (!Ur || (Jl && 8 < Jl && 11 >= Jl)),
    Lc = ' ',
    Hc = !1;
  function jc(e, t) {
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
  function Gc(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var cl = !1;
  function dg(e, t) {
    switch (e) {
      case 'compositionend':
        return Gc(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Hc = !0), Lc);
      case 'textInput':
        return ((e = t.data), e === Lc && Hc ? null : e);
      default:
        return null;
    }
  }
  function mg(e, t) {
    if (cl)
      return e === 'compositionend' || (!Ur && jc(e, t))
        ? ((e = Dc()), (Fi = Dr = ra = null), (cl = !1), e)
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
        return Uc && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var hg = {
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
  function Yc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!hg[e.type] : t === 'textarea';
  }
  function Vc(e, t, n, a) {
    (sl ? (ol ? ol.push(a) : (ol = [a])) : (sl = a),
      (t = qu(t, 'onChange')),
      0 < t.length &&
        ((n = new Ii('onChange', 'change', null, n, a)), e.push({ event: n, listeners: t })));
  }
  var Fl = null,
    $l = null;
  function vg(e) {
    Mm(e, 0);
  }
  function eu(e) {
    var t = Xl(e);
    if (bc(t)) return e;
  }
  function qc(e, t) {
    if (e === 'change') return t;
  }
  var Xc = !1;
  if (Un) {
    var Lr;
    if (Un) {
      var Hr = 'oninput' in document;
      if (!Hr) {
        var Qc = document.createElement('div');
        (Qc.setAttribute('oninput', 'return;'), (Hr = typeof Qc.oninput == 'function'));
      }
      Lr = Hr;
    } else Lr = !1;
    Xc = Lr && (!document.documentMode || 9 < document.documentMode);
  }
  function Zc() {
    Fl && (Fl.detachEvent('onpropertychange', Kc), ($l = Fl = null));
  }
  function Kc(e) {
    if (e.propertyName === 'value' && eu($l)) {
      var t = [];
      (Vc(t, $l, e, Ar(e)), Oc(vg, t));
    }
  }
  function gg(e, t, n) {
    e === 'focusin'
      ? (Zc(), (Fl = t), ($l = n), Fl.attachEvent('onpropertychange', Kc))
      : e === 'focusout' && Zc();
  }
  function yg(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return eu($l);
  }
  function pg(e, t) {
    if (e === 'click') return eu(t);
  }
  function Sg(e, t) {
    if (e === 'input' || e === 'change') return eu(t);
  }
  function xg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Yt = typeof Object.is == 'function' ? Object.is : xg;
  function Wl(e, t) {
    if (Yt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!pt.call(t, i) || !Yt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function kc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Jc(e, t) {
    var n = kc(e);
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
      n = kc(n);
    }
  }
  function Fc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Fc(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function $c(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = ki(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ki(e.document);
    }
    return t;
  }
  function jr(e) {
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
  var Eg = Un && 'documentMode' in document && 11 >= document.documentMode,
    fl = null,
    Gr = null,
    Il = null,
    Yr = !1;
  function Wc(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Yr ||
      fl == null ||
      fl !== ki(a) ||
      ((a = fl),
      'selectionStart' in a && jr(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Il && Wl(Il, a)) ||
        ((Il = a),
        (a = qu(Gr, 'onSelect')),
        0 < a.length &&
          ((t = new Ii('onSelect', 'select', null, t, n)),
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
    Vr = {},
    Ic = {};
  Un &&
    ((Ic = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete dl.animationend.animation,
      delete dl.animationiteration.animation,
      delete dl.animationstart.animation),
    'TransitionEvent' in window || delete dl.transitionend.transition);
  function ja(e) {
    if (Vr[e]) return Vr[e];
    if (!dl[e]) return e;
    var t = dl[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ic) return (Vr[e] = t[n]);
    return e;
  }
  var Pc = ja('animationend'),
    ef = ja('animationiteration'),
    tf = ja('animationstart'),
    bg = ja('transitionrun'),
    Cg = ja('transitionstart'),
    Mg = ja('transitioncancel'),
    nf = ja('transitionend'),
    af = new Map(),
    qr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  qr.push('scrollEnd');
  function vn(e, t) {
    (af.set(e, t), Ua(t, [e]));
  }
  var tu =
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
    Wt = [],
    ml = 0,
    Xr = 0;
  function nu() {
    for (var e = ml, t = (Xr = ml = 0); t < e; ) {
      var n = Wt[t];
      Wt[t++] = null;
      var a = Wt[t];
      Wt[t++] = null;
      var i = Wt[t];
      Wt[t++] = null;
      var u = Wt[t];
      if (((Wt[t++] = null), a !== null && i !== null)) {
        var E = a.pending;
        (E === null ? (i.next = i) : ((i.next = E.next), (E.next = i)), (a.pending = i));
      }
      u !== 0 && lf(n, i, u);
    }
  }
  function au(e, t, n, a) {
    ((Wt[ml++] = e),
      (Wt[ml++] = t),
      (Wt[ml++] = n),
      (Wt[ml++] = a),
      (Xr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function Qr(e, t, n, a) {
    return (au(e, t, n, a), lu(e));
  }
  function Ga(e, t) {
    return (au(e, null, null, t), lu(e));
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
          ((i = 31 - _t(n)),
          (e = u.hiddenUpdates),
          (a = e[i]),
          a === null ? (e[i] = [t]) : a.push(t),
          (t.lane = n | 536870912)),
        u)
      : null;
  }
  function lu(e) {
    if (50 < xi) throw ((xi = 0), (Ps = null), Error(y(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var hl = {};
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
  function Vt(e, t, n, a) {
    return new Tg(e, t, n, a);
  }
  function Zr(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Ln(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Vt(e.tag, t, e.key, e.mode)),
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
  function iu(e, t, n, a, i, u) {
    var E = 0;
    if (((a = e), typeof e == 'function')) Zr(e) && (E = 1);
    else if (typeof e == 'string')
      E = D0(e, n, ue.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case H:
          return ((e = Vt(31, n, t, i)), (e.elementType = H), (e.lanes = u), e);
        case p:
          return Ya(n.children, i, u, t);
        case C:
          ((E = 8), (i |= 24));
          break;
        case R:
          return ((e = Vt(12, n, t, i | 2)), (e.elementType = R), (e.lanes = u), e);
        case M:
          return ((e = Vt(13, n, t, i)), (e.elementType = M), (e.lanes = u), e);
        case O:
          return ((e = Vt(19, n, t, i)), (e.elementType = O), (e.lanes = u), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case L:
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
    return ((t = Vt(E, n, t, i)), (t.elementType = e), (t.type = a), (t.lanes = u), t);
  }
  function Ya(e, t, n, a) {
    return ((e = Vt(7, e, a, t)), (e.lanes = n), e);
  }
  function Kr(e, t, n) {
    return ((e = Vt(6, e, null, t)), (e.lanes = n), e);
  }
  function rf(e) {
    var t = Vt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function kr(e, t, n) {
    return (
      (t = Vt(4, e.children !== null ? e.children : [], e.key, t)),
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
  function It(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = sf.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: qe(t) }), sf.set(e, t), t);
    }
    return { value: e, source: t, stack: qe(t) };
  }
  var vl = [],
    gl = 0,
    uu = null,
    Pl = 0,
    Pt = [],
    en = 0,
    sa = null,
    En = 1,
    bn = '';
  function Hn(e, t) {
    ((vl[gl++] = Pl), (vl[gl++] = uu), (uu = e), (Pl = t));
  }
  function of(e, t, n) {
    ((Pt[en++] = En), (Pt[en++] = bn), (Pt[en++] = sa), (sa = e));
    var a = En;
    e = bn;
    var i = 32 - _t(a) - 1;
    ((a &= ~(1 << i)), (n += 1));
    var u = 32 - _t(t) + i;
    if (30 < u) {
      var E = i - (i % 5);
      ((u = (a & ((1 << E) - 1)).toString(32)),
        (a >>= E),
        (i -= E),
        (En = (1 << (32 - _t(t) + i)) | (n << i) | a),
        (bn = u + e));
    } else ((En = (1 << u) | (n << i) | a), (bn = e));
  }
  function Jr(e) {
    e.return !== null && (Hn(e, 1), of(e, 1, 0));
  }
  function Fr(e) {
    for (; e === uu; ) ((uu = vl[--gl]), (vl[gl] = null), (Pl = vl[--gl]), (vl[gl] = null));
    for (; e === sa; )
      ((sa = Pt[--en]),
        (Pt[en] = null),
        (bn = Pt[--en]),
        (Pt[en] = null),
        (En = Pt[--en]),
        (Pt[en] = null));
  }
  function cf(e, t) {
    ((Pt[en++] = En), (Pt[en++] = bn), (Pt[en++] = sa), (En = t.id), (bn = t.overflow), (sa = e));
  }
  var bt = null,
    at = null,
    Be = !1,
    oa = null,
    tn = !1,
    $r = Error(y(519));
  function ca(e) {
    var t = Error(
      y(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    );
    throw (ei(It(t, e)), $r);
  }
  function ff(e) {
    var t = e.stateNode,
      n = e.type,
      a = e.memoizedProps;
    switch (((t[Re] = e), (t[Ie] = a), n)) {
      case 'dialog':
        (_e('cancel', t), _e('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        _e('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < bi.length; n++) _e(bi[n], t);
        break;
      case 'source':
        _e('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (_e('error', t), _e('load', t));
        break;
      case 'details':
        _e('toggle', t);
        break;
      case 'input':
        (_e('invalid', t),
          Cc(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
        break;
      case 'select':
        _e('invalid', t);
        break;
      case 'textarea':
        (_e('invalid', t), Tc(t, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      a.suppressHydrationWarning === !0 ||
      _m(t.textContent, n)
        ? (a.popover != null && (_e('beforetoggle', t), _e('toggle', t)),
          a.onScroll != null && _e('scroll', t),
          a.onScrollEnd != null && _e('scrollend', t),
          a.onClick != null && (t.onclick = Bn),
          (t = !0))
        : (t = !1),
      t || ca(e, !0));
  }
  function df(e) {
    for (bt = e.return; bt; )
      switch (bt.tag) {
        case 5:
        case 31:
        case 13:
          tn = !1;
          return;
        case 27:
        case 3:
          tn = !0;
          return;
        default:
          bt = bt.return;
      }
  }
  function yl(e) {
    if (e !== bt) return !1;
    if (!Be) return (df(e), (Be = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type), (n = !(n !== 'form' && n !== 'button') || vo(e.type, e.memoizedProps))),
        (n = !n)),
      n && at && ca(e),
      df(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(y(317));
      at = Hm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(y(317));
      at = Hm(e);
    } else
      t === 27
        ? ((t = at), Ma(e.type) ? ((e = xo), (xo = null), (at = e)) : (at = t))
        : (at = bt ? an(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Va() {
    ((at = bt = null), (Be = !1));
  }
  function Wr() {
    var e = oa;
    return (e !== null && (Ht === null ? (Ht = e) : Ht.push.apply(Ht, e), (oa = null)), e);
  }
  function ei(e) {
    oa === null ? (oa = [e]) : oa.push(e);
  }
  var Ir = z(null),
    qa = null,
    jn = null;
  function fa(e, t, n) {
    (P(Ir, t._currentValue), (t._currentValue = n));
  }
  function Gn(e) {
    ((e._currentValue = Ir.current), Z(Ir));
  }
  function Pr(e, t, n) {
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
  function es(e, t, n, a) {
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
                Pr(u.return, n, e),
                a || (E = null));
              break e;
            }
          u = T.next;
        }
      } else if (i.tag === 18) {
        if (((E = i.return), E === null)) throw Error(y(341));
        ((E.lanes |= n), (u = E.alternate), u !== null && (u.lanes |= n), Pr(E, n, e), (E = null));
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
  function pl(e, t, n, a) {
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
          Yt(i.pendingProps.value, E.value) || (e !== null ? e.push(T) : (e = [T]));
        }
      } else if (i === ve.current) {
        if (((E = i.alternate), E === null)) throw Error(y(387));
        E.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(Ai) : (e = [Ai]));
      }
      i = i.return;
    }
    (e !== null && es(t, e, n, a), (t.flags |= 262144));
  }
  function ru(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Yt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Xa(e) {
    ((qa = e), (jn = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function Ct(e) {
    return mf(qa, e);
  }
  function su(e, t) {
    return (qa === null && Xa(e), mf(e, t));
  }
  function mf(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), jn === null)) {
      if (e === null) throw Error(y(308));
      ((jn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else jn = jn.next = t;
    return n;
  }
  var Rg =
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
    Ag = s.unstable_scheduleCallback,
    _g = s.unstable_NormalPriority,
    mt = {
      $$typeof: L,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ts() {
    return { controller: new Rg(), data: new Map(), refCount: 0 };
  }
  function ti(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Ag(_g, function () {
          e.controller.abort();
        }));
  }
  var ni = null,
    ns = 0,
    Sl = 0,
    xl = null;
  function Og(e, t) {
    if (ni === null) {
      var n = (ni = []);
      ((ns = 0),
        (Sl = io()),
        (xl = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (ns++, t.then(hf, hf), t);
  }
  function hf() {
    if (--ns === 0 && ni !== null) {
      xl !== null && (xl.status = 'fulfilled');
      var e = ni;
      ((ni = null), (Sl = 0), (xl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Dg(e, t) {
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
    ((Id = ut()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && Og(e, t),
      vf !== null && vf(e, t));
  };
  var Qa = z(null);
  function as() {
    var e = Qa.current;
    return e !== null ? e : et.pooledCache;
  }
  function ou(e, t) {
    t === null ? P(Qa, Qa.current) : P(Qa, t.pool);
  }
  function gf() {
    var e = as();
    return e === null ? null : { parent: mt._currentValue, pool: e };
  }
  var El = Error(y(460)),
    ls = Error(y(474)),
    cu = Error(y(542)),
    fu = { then: function () {} };
  function yf(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function pf(e, t, n) {
    switch (
      ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(Bn, Bn), (t = n)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), xf(e), e);
      default:
        if (typeof t.status == 'string') t.then(Bn, Bn);
        else {
          if (((e = et), e !== null && 100 < e.shellSuspendCounter)) throw Error(y(482));
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
        throw ((Ka = t), El);
    }
  }
  function Za(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((Ka = n), El) : n;
    }
  }
  var Ka = null;
  function Sf() {
    if (Ka === null) throw Error(y(459));
    var e = Ka;
    return ((Ka = null), e);
  }
  function xf(e) {
    if (e === El || e === cu) throw Error(y(483));
  }
  var bl = null,
    ai = 0;
  function du(e) {
    var t = ai;
    return ((ai += 1), bl === null && (bl = []), pf(bl, e, t));
  }
  function li(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function mu(e, t) {
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
    function E(Q) {
      return (e && Q.alternate === null && (Q.flags |= 67108866), Q);
    }
    function T(Q, X, K, te) {
      return X === null || X.tag !== 6
        ? ((X = Kr(K, Q.mode, te)), (X.return = Q), X)
        : ((X = i(X, K)), (X.return = Q), X);
    }
    function j(Q, X, K, te) {
      var he = K.type;
      return he === p
        ? ee(Q, X, K.props.children, te, K.key)
        : X !== null &&
            (X.elementType === he ||
              (typeof he == 'object' && he !== null && he.$$typeof === _ && Za(he) === X.type))
          ? ((X = i(X, K.props)), li(X, K), (X.return = Q), X)
          : ((X = iu(K.type, K.key, K.props, null, Q.mode, te)), li(X, K), (X.return = Q), X);
    }
    function k(Q, X, K, te) {
      return X === null ||
        X.tag !== 4 ||
        X.stateNode.containerInfo !== K.containerInfo ||
        X.stateNode.implementation !== K.implementation
        ? ((X = kr(K, Q.mode, te)), (X.return = Q), X)
        : ((X = i(X, K.children || [])), (X.return = Q), X);
    }
    function ee(Q, X, K, te, he) {
      return X === null || X.tag !== 7
        ? ((X = Ya(K, Q.mode, te, he)), (X.return = Q), X)
        : ((X = i(X, K)), (X.return = Q), X);
    }
    function ne(Q, X, K) {
      if ((typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint')
        return ((X = Kr('' + X, Q.mode, K)), (X.return = Q), X);
      if (typeof X == 'object' && X !== null) {
        switch (X.$$typeof) {
          case r:
            return ((K = iu(X.type, X.key, X.props, null, Q.mode, K)), li(K, X), (K.return = Q), K);
          case S:
            return ((X = kr(X, Q.mode, K)), (X.return = Q), X);
          case _:
            return ((X = Za(X)), ne(Q, X, K));
        }
        if (ae(X) || V(X)) return ((X = Ya(X, Q.mode, K, null)), (X.return = Q), X);
        if (typeof X.then == 'function') return ne(Q, du(X), K);
        if (X.$$typeof === L) return ne(Q, su(Q, X), K);
        mu(Q, X);
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
          case S:
            return K.key === he ? k(Q, X, K, te) : null;
          case _:
            return ((K = Za(K)), J(Q, X, K, te));
        }
        if (ae(K) || V(K)) return he !== null ? null : ee(Q, X, K, te, null);
        if (typeof K.then == 'function') return J(Q, X, du(K), te);
        if (K.$$typeof === L) return J(Q, X, su(Q, K), te);
        mu(Q, K);
      }
      return null;
    }
    function I(Q, X, K, te, he) {
      if ((typeof te == 'string' && te !== '') || typeof te == 'number' || typeof te == 'bigint')
        return ((Q = Q.get(K) || null), T(X, Q, '' + te, he));
      if (typeof te == 'object' && te !== null) {
        switch (te.$$typeof) {
          case r:
            return ((Q = Q.get(te.key === null ? K : te.key) || null), j(X, Q, te, he));
          case S:
            return ((Q = Q.get(te.key === null ? K : te.key) || null), k(X, Q, te, he));
          case _:
            return ((te = Za(te)), I(Q, X, K, te, he));
        }
        if (ae(te) || V(te)) return ((Q = Q.get(K) || null), ee(X, Q, te, he, null));
        if (typeof te.then == 'function') return I(Q, X, K, du(te), he);
        if (te.$$typeof === L) return I(Q, X, K, su(X, te), he);
        mu(X, te);
      }
      return null;
    }
    function ce(Q, X, K, te) {
      for (
        var he = null, je = null, de = X, Te = (X = 0), De = null;
        de !== null && Te < K.length;
        Te++
      ) {
        de.index > Te ? ((De = de), (de = null)) : (De = de.sibling);
        var Ge = J(Q, de, K[Te], te);
        if (Ge === null) {
          de === null && (de = De);
          break;
        }
        (e && de && Ge.alternate === null && t(Q, de),
          (X = u(Ge, X, Te)),
          je === null ? (he = Ge) : (je.sibling = Ge),
          (je = Ge),
          (de = De));
      }
      if (Te === K.length) return (n(Q, de), Be && Hn(Q, Te), he);
      if (de === null) {
        for (; Te < K.length; Te++)
          ((de = ne(Q, K[Te], te)),
            de !== null &&
              ((X = u(de, X, Te)), je === null ? (he = de) : (je.sibling = de), (je = de)));
        return (Be && Hn(Q, Te), he);
      }
      for (de = a(de); Te < K.length; Te++)
        ((De = I(de, Q, Te, K[Te], te)),
          De !== null &&
            (e && De.alternate !== null && de.delete(De.key === null ? Te : De.key),
            (X = u(De, X, Te)),
            je === null ? (he = De) : (je.sibling = De),
            (je = De)));
      return (
        e &&
          de.forEach(function (Oa) {
            return t(Q, Oa);
          }),
        Be && Hn(Q, Te),
        he
      );
    }
    function ye(Q, X, K, te) {
      if (K == null) throw Error(y(151));
      for (
        var he = null, je = null, de = X, Te = (X = 0), De = null, Ge = K.next();
        de !== null && !Ge.done;
        Te++, Ge = K.next()
      ) {
        de.index > Te ? ((De = de), (de = null)) : (De = de.sibling);
        var Oa = J(Q, de, Ge.value, te);
        if (Oa === null) {
          de === null && (de = De);
          break;
        }
        (e && de && Oa.alternate === null && t(Q, de),
          (X = u(Oa, X, Te)),
          je === null ? (he = Oa) : (je.sibling = Oa),
          (je = Oa),
          (de = De));
      }
      if (Ge.done) return (n(Q, de), Be && Hn(Q, Te), he);
      if (de === null) {
        for (; !Ge.done; Te++, Ge = K.next())
          ((Ge = ne(Q, Ge.value, te)),
            Ge !== null &&
              ((X = u(Ge, X, Te)), je === null ? (he = Ge) : (je.sibling = Ge), (je = Ge)));
        return (Be && Hn(Q, Te), he);
      }
      for (de = a(de); !Ge.done; Te++, Ge = K.next())
        ((Ge = I(de, Q, Te, Ge.value, te)),
          Ge !== null &&
            (e && Ge.alternate !== null && de.delete(Ge.key === null ? Te : Ge.key),
            (X = u(Ge, X, Te)),
            je === null ? (he = Ge) : (je.sibling = Ge),
            (je = Ge)));
      return (
        e &&
          de.forEach(function (V0) {
            return t(Q, V0);
          }),
        Be && Hn(Q, Te),
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
                    (typeof he == 'object' && he !== null && he.$$typeof === _ && Za(he) === X.type)
                  ) {
                    (n(Q, X.sibling), (te = i(X, K.props)), li(te, K), (te.return = Q), (Q = te));
                    break e;
                  }
                  n(Q, X);
                  break;
                } else t(Q, X);
                X = X.sibling;
              }
              K.type === p
                ? ((te = Ya(K.props.children, Q.mode, te, K.key)), (te.return = Q), (Q = te))
                : ((te = iu(K.type, K.key, K.props, null, Q.mode, te)),
                  li(te, K),
                  (te.return = Q),
                  (Q = te));
            }
            return E(Q);
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
              ((te = kr(K, Q.mode, te)), (te.return = Q), (Q = te));
            }
            return E(Q);
          case _:
            return ((K = Za(K)), $e(Q, X, K, te));
        }
        if (ae(K)) return ce(Q, X, K, te);
        if (V(K)) {
          if (((he = V(K)), typeof he != 'function')) throw Error(y(150));
          return ((K = he.call(K)), ye(Q, X, K, te));
        }
        if (typeof K.then == 'function') return $e(Q, X, du(K), te);
        if (K.$$typeof === L) return $e(Q, X, su(Q, K), te);
        mu(Q, K);
      }
      return (typeof K == 'string' && K !== '') || typeof K == 'number' || typeof K == 'bigint'
        ? ((K = '' + K),
          X !== null && X.tag === 6
            ? (n(Q, X.sibling), (te = i(X, K)), (te.return = Q), (Q = te))
            : (n(Q, X), (te = Kr(K, Q.mode, te)), (te.return = Q), (Q = te)),
          E(Q))
        : n(Q, X);
    }
    return function (Q, X, K, te) {
      try {
        ai = 0;
        var he = $e(Q, X, K, te);
        return ((bl = null), he);
      } catch (de) {
        if (de === El || de === cu) throw de;
        var je = Vt(29, de, null, Q.mode);
        return ((je.lanes = te), (je.return = Q), je);
      } finally {
      }
    };
  }
  var ka = Ef(!0),
    bf = Ef(!1),
    da = !1;
  function is(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function us(e, t) {
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
    if (((a = a.shared), (Xe & 2) !== 0)) {
      var i = a.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (a.pending = t),
        (t = lu(e)),
        lf(e, null, n),
        t
      );
    }
    return (au(e, a, t, n), lu(e));
  }
  function ii(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), me(e, n));
    }
  }
  function rs(e, t) {
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
  var ss = !1;
  function ui() {
    if (ss) {
      var e = xl;
      if (e !== null) throw e;
    }
  }
  function ri(e, t, n, a) {
    ss = !1;
    var i = e.updateQueue;
    da = !1;
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
          I = J !== T.lane;
        if (I ? (Oe & J) === J : (a & J) === J) {
          (J !== 0 && J === Sl && (ss = !0),
            ee !== null &&
              (ee = ee.next =
                { lane: 0, tag: T.tag, payload: T.payload, callback: null, next: null }));
          e: {
            var ce = e,
              ye = T;
            J = t;
            var $e = n;
            switch (ye.tag) {
              case 1:
                if (((ce = ye.payload), typeof ce == 'function')) {
                  ne = ce.call($e, ne, J);
                  break e;
                }
                ne = ce;
                break e;
              case 3:
                ce.flags = (ce.flags & -65537) | 128;
              case 0:
                if (
                  ((ce = ye.payload),
                  (J = typeof ce == 'function' ? ce.call($e, ne, J) : ce),
                  J == null)
                )
                  break e;
                ne = h({}, ne, J);
                break e;
              case 2:
                da = !0;
            }
          }
          ((J = T.callback),
            J !== null &&
              ((e.flags |= 64),
              I && (e.flags |= 8192),
              (I = i.callbacks),
              I === null ? (i.callbacks = [J]) : I.push(J)));
        } else
          ((I = { lane: J, tag: T.tag, payload: T.payload, callback: T.callback, next: null }),
            ee === null ? ((k = ee = I), (j = ne)) : (ee = ee.next = I),
            (E |= J));
        if (((T = T.next), T === null)) {
          if (((T = i.shared.pending), T === null)) break;
          ((I = T),
            (T = I.next),
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
        (Sa |= E),
        (e.lanes = E),
        (e.memoizedState = ne));
    }
  }
  function Cf(e, t) {
    if (typeof e != 'function') throw Error(y(191, e));
    e.call(t);
  }
  function Mf(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Cf(n[e], t);
  }
  var Cl = z(null),
    hu = z(0);
  function Tf(e, t) {
    ((e = Jn), P(hu, e), P(Cl, t), (Jn = e | t.baseLanes));
  }
  function os() {
    (P(hu, Jn), P(Cl, Cl.current));
  }
  function cs() {
    ((Jn = hu.current), Z(Cl), Z(hu));
  }
  var qt = z(null),
    nn = null;
  function va(e) {
    var t = e.alternate;
    (P(ct, ct.current & 1),
      P(qt, e),
      nn === null && (t === null || Cl.current !== null || t.memoizedState !== null) && (nn = e));
  }
  function fs(e) {
    (P(ct, ct.current), P(qt, e), nn === null && (nn = e));
  }
  function Rf(e) {
    e.tag === 22 ? (P(ct, ct.current), P(qt, e), nn === null && (nn = e)) : ga();
  }
  function ga() {
    (P(ct, ct.current), P(qt, qt.current));
  }
  function Xt(e) {
    (Z(qt), nn === e && (nn = null), Z(ct));
  }
  var ct = z(0);
  function vu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || po(n) || So(n))) return t;
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
    ht = null,
    gu = !1,
    Ml = !1,
    Ja = !1,
    yu = 0,
    si = 0,
    Tl = null,
    wg = 0;
  function st() {
    throw Error(y(321));
  }
  function ds(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Yt(e[n], t[n])) return !1;
    return !0;
  }
  function ms(e, t, n, a, i, u) {
    return (
      (Yn = u),
      (Ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (A.H = e === null || e.memoizedState === null ? od : _s),
      (Ja = !1),
      (u = n(a, i)),
      (Ja = !1),
      Ml && (u = _f(t, n, a, i)),
      Af(e),
      u
    );
  }
  function Af(e) {
    A.H = fi;
    var t = Je !== null && Je.next !== null;
    if (((Yn = 0), (ht = Je = Ce = null), (gu = !1), (si = 0), (Tl = null), t)) throw Error(y(300));
    e === null || vt || ((e = e.dependencies), e !== null && ru(e) && (vt = !0));
  }
  function _f(e, t, n, a) {
    Ce = e;
    var i = 0;
    do {
      if ((Ml && (Tl = null), (si = 0), (Ml = !1), 25 <= i)) throw Error(y(301));
      if (((i += 1), (ht = Je = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((A.H = cd), (u = t(n, a)));
    } while (Ml);
    return u;
  }
  function zg() {
    var e = A.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? oi(t) : t),
      (e = e.useState()[0]),
      (Je !== null ? Je.memoizedState : null) !== e && (Ce.flags |= 1024),
      t
    );
  }
  function hs() {
    var e = yu !== 0;
    return ((yu = 0), e);
  }
  function vs(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function gs(e) {
    if (gu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      gu = !1;
    }
    ((Yn = 0), (ht = Je = Ce = null), (Ml = !1), (si = yu = 0), (Tl = null));
  }
  function Ot() {
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
      if (e === null) throw Ce.alternate === null ? Error(y(467)) : Error(y(310));
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
  function pu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function oi(e) {
    var t = si;
    return (
      (si += 1),
      Tl === null && (Tl = []),
      (e = pf(Tl, e, t)),
      (t = Ce),
      (ht === null ? t.memoizedState : ht.next) === null &&
        ((t = t.alternate), (A.H = t === null || t.memoizedState === null ? od : _s)),
      e
    );
  }
  function Su(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return oi(e);
      if (e.$$typeof === L) return Ct(e);
    }
    throw Error(y(438, String(e)));
  }
  function ys(e) {
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
      n === null && ((n = pu()), (Ce.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = U;
    return (t.index++, n);
  }
  function Vn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function xu(e) {
    var t = ft();
    return ps(t, Je, e);
  }
  function ps(e, t, n) {
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
        if (ne !== k.lane ? (Oe & ne) === ne : (Yn & ne) === ne) {
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
              ne === Sl && (ee = !0));
          else if ((Yn & J) === J) {
            ((k = k.next), J === Sl && (ee = !0));
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
              (Ce.lanes |= J),
              (Sa |= J));
          ((ne = k.action), Ja && n(u, ne), (u = k.hasEagerState ? k.eagerState : n(u, ne)));
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
            (Ce.lanes |= ne),
            (Sa |= ne));
        k = k.next;
      } while (k !== null && k !== t);
      if (
        (j === null ? (E = u) : (j.next = T),
        !Yt(u, e.memoizedState) && ((vt = !0), ee && ((n = xl), n !== null)))
      )
        throw n;
      ((e.memoizedState = u), (e.baseState = E), (e.baseQueue = j), (a.lastRenderedState = u));
    }
    return (i === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function Ss(e) {
    var t = ft(),
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
      (Yt(u, t.memoizedState) || (vt = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, a];
  }
  function Of(e, t, n) {
    var a = Ce,
      i = ft(),
      u = Be;
    if (u) {
      if (n === void 0) throw Error(y(407));
      n = n();
    } else n = t();
    var E = !Yt((Je || i).memoizedState, n);
    if (
      (E && ((i.memoizedState = n), (vt = !0)),
      (i = i.queue),
      bs(zf.bind(null, a, i, e), [e]),
      i.getSnapshot !== t || E || (ht !== null && ht.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Rl(9, { destroy: void 0 }, wf.bind(null, a, i, n, t), null),
        et === null)
      )
        throw Error(y(349));
      u || (Yn & 127) !== 0 || Df(a, t, n);
    }
    return n;
  }
  function Df(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = pu()), (Ce.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function wf(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), Nf(t) && Bf(e));
  }
  function zf(e, t, n) {
    return n(function () {
      Nf(t) && Bf(e);
    });
  }
  function Nf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Yt(e, n);
    } catch {
      return !0;
    }
  }
  function Bf(e) {
    var t = Ga(e, 2);
    t !== null && jt(t, e, 2);
  }
  function xs(e) {
    var t = Ot();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), Ja)) {
        cn(!0);
        try {
          n();
        } finally {
          cn(!1);
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
  function Uf(e, t, n, a) {
    return ((e.baseState = n), ps(e, Je, typeof a == 'function' ? a : Vn));
  }
  function Ng(e, t, n, a, i) {
    if (Cu(e)) throw Error(y(485));
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
        E = {};
      A.T = E;
      try {
        var T = n(i, a),
          j = A.S;
        (j !== null && j(E, T), Hf(e, t, T));
      } catch (k) {
        Es(e, t, k);
      } finally {
        (u !== null && E.types !== null && (u.types = E.types), (A.T = u));
      }
    } else
      try {
        ((u = n(i, a)), Hf(e, t, u));
      } catch (k) {
        Es(e, t, k);
      }
  }
  function Hf(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (a) {
            jf(e, t, a);
          },
          function (a) {
            return Es(e, t, a);
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
  function Es(e, t, n) {
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
    if (Be) {
      var n = et.formState;
      if (n !== null) {
        e: {
          var a = Ce;
          if (Be) {
            if (at) {
              t: {
                for (var i = at, u = tn; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break t;
                  }
                  if (((i = an(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                ((u = i.data), (i = u === 'F!' || u === 'F' ? i : null));
              }
              if (i) {
                ((at = an(i.nextSibling)), (a = i.data === 'F!'));
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
      (n = Ot()),
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
      (a = xs(!1)),
      (u = As.bind(null, Ce, !1, a.queue)),
      (a = Ot()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = i),
      (n = Ng.bind(null, Ce, i, u, n)),
      (i.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    );
  }
  function qf(e) {
    var t = ft();
    return Xf(t, Je, e);
  }
  function Xf(e, t, n) {
    if (
      ((t = ps(e, t, Yf)[0]),
      (e = xu(Vn)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = oi(t);
      } catch (E) {
        throw E === El ? cu : E;
      }
    else a = t;
    t = ft();
    var i = t.queue,
      u = i.dispatch;
    return (
      n !== t.memoizedState &&
        ((Ce.flags |= 2048), Rl(9, { destroy: void 0 }, Bg.bind(null, i, n), null)),
      [a, u, e]
    );
  }
  function Bg(e, t) {
    e.action = t;
  }
  function Qf(e) {
    var t = ft(),
      n = Je;
    if (n !== null) return Xf(t, n, e);
    (ft(), (t = t.memoizedState), (n = ft()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = e), [t, a, !1]);
  }
  function Rl(e, t, n, a) {
    return (
      (e = { tag: e, create: n, deps: a, inst: t, next: null }),
      (t = Ce.updateQueue),
      t === null && ((t = pu()), (Ce.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Zf() {
    return ft().memoizedState;
  }
  function Eu(e, t, n, a) {
    var i = Ot();
    ((Ce.flags |= e),
      (i.memoizedState = Rl(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a)));
  }
  function bu(e, t, n, a) {
    var i = ft();
    a = a === void 0 ? null : a;
    var u = i.memoizedState.inst;
    Je !== null && a !== null && ds(a, Je.memoizedState.deps)
      ? (i.memoizedState = Rl(t, u, n, a))
      : ((Ce.flags |= e), (i.memoizedState = Rl(1 | t, u, n, a)));
  }
  function Kf(e, t) {
    Eu(8390656, 8, e, t);
  }
  function bs(e, t) {
    bu(2048, 8, e, t);
  }
  function Ug(e) {
    Ce.flags |= 4;
    var t = Ce.updateQueue;
    if (t === null) ((t = pu()), (Ce.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function kf(e) {
    var t = ft().memoizedState;
    return (
      Ug({ ref: t, nextImpl: e }),
      function () {
        if ((Xe & 2) !== 0) throw Error(y(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Jf(e, t) {
    return bu(4, 2, e, t);
  }
  function Ff(e, t) {
    return bu(4, 4, e, t);
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
    ((n = n != null ? n.concat([e]) : null), bu(4, 4, $f.bind(null, t, e), n));
  }
  function Cs() {}
  function If(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && ds(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
  }
  function Pf(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && ds(t, a[1])) return a[0];
    if (((a = e()), Ja)) {
      cn(!0);
      try {
        e();
      } finally {
        cn(!1);
      }
    }
    return ((n.memoizedState = [a, t]), a);
  }
  function Ms(e, t, n) {
    return n === void 0 || ((Yn & 1073741824) !== 0 && (Oe & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = em()), (Ce.lanes |= e), (Sa |= e), n);
  }
  function ed(e, t, n, a) {
    return Yt(n, t)
      ? n
      : Cl.current !== null
        ? ((e = Ms(e, n, a)), Yt(e, t) || (vt = !0), e)
        : (Yn & 42) === 0 || ((Yn & 1073741824) !== 0 && (Oe & 261930) === 0)
          ? ((vt = !0), (e.memoizedState = n))
          : ((e = em()), (Ce.lanes |= e), (Sa |= e), t);
  }
  function td(e, t, n, a, i) {
    var u = N.p;
    N.p = u !== 0 && 8 > u ? u : 8;
    var E = A.T,
      T = {};
    ((A.T = T), As(e, !1, t, n));
    try {
      var j = i(),
        k = A.S;
      if (
        (k !== null && k(T, j), j !== null && typeof j == 'object' && typeof j.then == 'function')
      ) {
        var ee = Dg(j, a);
        ci(e, t, ee, Kt(e));
      } else ci(e, t, a, Kt(e));
    } catch (ne) {
      ci(e, t, { then: function () {}, status: 'rejected', reason: ne }, Kt());
    } finally {
      ((N.p = u), E !== null && T.types !== null && (E.types = T.types), (A.T = E));
    }
  }
  function Lg() {}
  function Ts(e, t, n, a) {
    if (e.tag !== 5) throw Error(y(476));
    var i = nd(e).queue;
    td(
      e,
      i,
      t,
      q,
      n === null
        ? Lg
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
    (t.next === null && (t = e.alternate.memoizedState), ci(e, t.next.queue, {}, Kt()));
  }
  function Rs() {
    return Ct(Ai);
  }
  function ld() {
    return ft().memoizedState;
  }
  function id() {
    return ft().memoizedState;
  }
  function Hg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Kt();
          e = ma(n);
          var a = ha(t, e, n);
          (a !== null && (jt(a, t, n), ii(a, t, n)), (t = { cache: ts() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function jg(e, t, n) {
    var a = Kt();
    ((n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Cu(e) ? rd(t, n) : ((n = Qr(e, t, n, a)), n !== null && (jt(n, e, a), sd(n, t, a))));
  }
  function ud(e, t, n) {
    var a = Kt();
    ci(e, t, n, a);
  }
  function ci(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Cu(e)) rd(t, i);
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
          if (((i.hasEagerState = !0), (i.eagerState = T), Yt(T, E)))
            return (au(e, t, i, 0), et === null && nu(), !1);
        } catch {
        } finally {
        }
      if (((n = Qr(e, t, i, a)), n !== null)) return (jt(n, e, a), sd(n, t, a), !0);
    }
    return !1;
  }
  function As(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: io(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Cu(e))
    ) {
      if (t) throw Error(y(479));
    } else ((t = Qr(e, n, a, 2)), t !== null && jt(t, e, 2));
  }
  function Cu(e) {
    var t = e.alternate;
    return e === Ce || (t !== null && t === Ce);
  }
  function rd(e, t) {
    Ml = gu = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function sd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), me(e, n));
    }
  }
  var fi = {
    readContext: Ct,
    use: Su,
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
  fi.useEffectEvent = st;
  var od = {
      readContext: Ct,
      use: Su,
      useCallback: function (e, t) {
        return ((Ot().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ct,
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
        var n = Ot();
        t = t === void 0 ? null : t;
        var a = e();
        if (Ja) {
          cn(!0);
          try {
            e();
          } finally {
            cn(!1);
          }
        }
        return ((n.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, n) {
        var a = Ot();
        if (n !== void 0) {
          var i = n(t);
          if (Ja) {
            cn(!0);
            try {
              n(t);
            } finally {
              cn(!1);
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
          (e = e.dispatch = jg.bind(null, Ce, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ot();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = xs(e);
        var t = e.queue,
          n = ud.bind(null, Ce, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: Cs,
      useDeferredValue: function (e, t) {
        var n = Ot();
        return Ms(n, e, t);
      },
      useTransition: function () {
        var e = xs(!1);
        return ((e = td.bind(null, Ce, e.queue, !0, !1)), (Ot().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, n) {
        var a = Ce,
          i = Ot();
        if (Be) {
          if (n === void 0) throw Error(y(407));
          n = n();
        } else {
          if (((n = t()), et === null)) throw Error(y(349));
          (Oe & 127) !== 0 || Df(a, t, n);
        }
        i.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (i.queue = u),
          Kf(zf.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          Rl(9, { destroy: void 0 }, wf.bind(null, a, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = Ot(),
          t = et.identifierPrefix;
        if (Be) {
          var n = bn,
            a = En;
          ((n = (a & ~(1 << (32 - _t(a) - 1))).toString(32) + n),
            (t = '_' + t + 'R_' + n),
            (n = yu++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '_'));
        } else ((n = wg++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Rs,
      useFormState: Vf,
      useActionState: Vf,
      useOptimistic: function (e) {
        var t = Ot();
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
      useMemoCache: ys,
      useCacheRefresh: function () {
        return (Ot().memoizedState = Hg.bind(null, Ce));
      },
      useEffectEvent: function (e) {
        var t = Ot(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((Xe & 2) !== 0) throw Error(y(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    _s = {
      readContext: Ct,
      use: Su,
      useCallback: If,
      useContext: Ct,
      useEffect: bs,
      useImperativeHandle: Wf,
      useInsertionEffect: Jf,
      useLayoutEffect: Ff,
      useMemo: Pf,
      useReducer: xu,
      useRef: Zf,
      useState: function () {
        return xu(Vn);
      },
      useDebugValue: Cs,
      useDeferredValue: function (e, t) {
        var n = ft();
        return ed(n, Je.memoizedState, e, t);
      },
      useTransition: function () {
        var e = xu(Vn)[0],
          t = ft().memoizedState;
        return [typeof e == 'boolean' ? e : oi(e), t];
      },
      useSyncExternalStore: Of,
      useId: ld,
      useHostTransitionStatus: Rs,
      useFormState: qf,
      useActionState: qf,
      useOptimistic: function (e, t) {
        var n = ft();
        return Uf(n, Je, e, t);
      },
      useMemoCache: ys,
      useCacheRefresh: id,
    };
  _s.useEffectEvent = kf;
  var cd = {
    readContext: Ct,
    use: Su,
    useCallback: If,
    useContext: Ct,
    useEffect: bs,
    useImperativeHandle: Wf,
    useInsertionEffect: Jf,
    useLayoutEffect: Ff,
    useMemo: Pf,
    useReducer: Ss,
    useRef: Zf,
    useState: function () {
      return Ss(Vn);
    },
    useDebugValue: Cs,
    useDeferredValue: function (e, t) {
      var n = ft();
      return Je === null ? Ms(n, e, t) : ed(n, Je.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Ss(Vn)[0],
        t = ft().memoizedState;
      return [typeof e == 'boolean' ? e : oi(e), t];
    },
    useSyncExternalStore: Of,
    useId: ld,
    useHostTransitionStatus: Rs,
    useFormState: Qf,
    useActionState: Qf,
    useOptimistic: function (e, t) {
      var n = ft();
      return Je !== null ? Uf(n, Je, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: ys,
    useCacheRefresh: id,
  };
  cd.useEffectEvent = kf;
  function Os(e, t, n, a) {
    ((t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : h({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Ds = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = Kt(),
        i = ma(a);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = ha(e, i, a)),
        t !== null && (jt(t, e, a), ii(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = Kt(),
        i = ma(a);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = ha(e, i, a)),
        t !== null && (jt(t, e, a), ii(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Kt(),
        a = ma(n);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = ha(e, a, n)),
        t !== null && (jt(t, e, n), ii(t, e, n)));
    },
  };
  function fd(e, t, n, a, i, u, E) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, u, E)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Wl(n, a) || !Wl(i, u)
          : !0
    );
  }
  function dd(e, t, n, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && Ds.enqueueReplaceState(t, t.state, null));
  }
  function Fa(e, t) {
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
  function md(e) {
    tu(e);
  }
  function hd(e) {
    console.error(e);
  }
  function vd(e) {
    tu(e);
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
  function ws(e, t, n) {
    return (
      (n = ma(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Mu(e, t);
      }),
      n
    );
  }
  function yd(e) {
    return ((e = ma(e)), (e.tag = 3), e);
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
    var E = n.stateNode;
    E !== null &&
      typeof E.componentDidCatch == 'function' &&
      (e.callback = function () {
        (gd(t, n, a),
          typeof i != 'function' && (xa === null ? (xa = new Set([this])) : xa.add(this)));
        var T = a.stack;
        this.componentDidCatch(a.value, { componentStack: T !== null ? T : '' });
      });
  }
  function Gg(e, t, n, a, i) {
    if (((n.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((t = n.alternate), t !== null && pl(t, n, i, !0), (n = qt.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              nn === null ? Lu() : n.alternate === null && ot === 0 && (ot = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = i),
              a === fu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  no(e, a, i)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === fu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                  no(e, a, i)),
              !1
            );
        }
        throw Error(y(435, n.tag));
      }
      return (no(e, a, i), Lu(), !1);
    }
    if (Be)
      return (
        (t = qt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            a !== $r && ((e = Error(y(422), { cause: a })), ei(It(e, n))))
          : (a !== $r && ((t = Error(y(423), { cause: a })), ei(It(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (a = It(a, n)),
            (i = ws(e.stateNode, a, i)),
            rs(e, i),
            ot !== 4 && (ot = 2)),
        !1
      );
    var u = Error(y(520), { cause: a });
    if (((u = It(u, n)), Si === null ? (Si = [u]) : Si.push(u), ot !== 4 && (ot = 2), t === null))
      return !0;
    ((a = It(a, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = i & -i),
            (n.lanes |= e),
            (e = ws(n.stateNode, a, e)),
            rs(n, e),
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
                  (xa === null || !xa.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (i &= -i),
              (n.lanes |= i),
              (i = yd(i)),
              pd(i, e, n, a),
              rs(n, i),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var zs = Error(y(461)),
    vt = !1;
  function Mt(e, t, n, a) {
    t.child = e === null ? bf(t, null, n, a) : ka(t, e.child, n, a);
  }
  function Sd(e, t, n, a, i) {
    n = n.render;
    var u = t.ref;
    if ('ref' in a) {
      var E = {};
      for (var T in a) T !== 'ref' && (E[T] = a[T]);
    } else E = a;
    return (
      Xa(t),
      (a = ms(e, t, n, E, u, i)),
      (T = hs()),
      e !== null && !vt
        ? (vs(e, t, i), qn(e, t, i))
        : (Be && T && Jr(t), (t.flags |= 1), Mt(e, t, a, i), t.child)
    );
  }
  function xd(e, t, n, a, i) {
    if (e === null) {
      var u = n.type;
      return typeof u == 'function' && !Zr(u) && u.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = u), Ed(e, t, u, a, i))
        : ((e = iu(n.type, null, a, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !Ys(e, i))) {
      var E = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Wl), n(E, a) && e.ref === t.ref))
        return qn(e, t, i);
    }
    return ((t.flags |= 1), (e = Ln(u, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Ed(e, t, n, a, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Wl(u, a) && e.ref === t.ref)
        if (((vt = !1), (t.pendingProps = a = u), Ys(e, i))) (e.flags & 131072) !== 0 && (vt = !0);
        else return ((t.lanes = e.lanes), qn(e, t, i));
    }
    return Ns(e, t, n, a, i);
  }
  function bd(e, t, n, a) {
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
          u !== null ? Tf(t, u) : os(),
          Rf(t));
      else return ((a = t.lanes = 536870912), Cd(e, t, u !== null ? u.baseLanes | n : n, n, a));
    } else
      u !== null
        ? (ou(t, u.cachePool), Tf(t, u), ga(), (t.memoizedState = null))
        : (e !== null && ou(t, null), os(), ga());
    return (Mt(e, t, i, n), t.child);
  }
  function di(e, t) {
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
    var u = as();
    return (
      (u = u === null ? null : { parent: mt._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && ou(t, null),
      os(),
      Rf(t),
      e !== null && pl(e, t, a, !0),
      (t.childLanes = i),
      null
    );
  }
  function Tu(e, t) {
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
      ka(t, e.child, null, n),
      (e = Tu(t, t.pendingProps)),
      (e.flags |= 2),
      Xt(t),
      (t.memoizedState = null),
      e
    );
  }
  function Yg(e, t, n) {
    var a = t.pendingProps,
      i = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Be) {
        if (a.mode === 'hidden') return ((e = Tu(t, a)), (t.lanes = 536870912), di(null, e));
        if (
          (fs(t),
          (e = at)
            ? ((e = Lm(e, tn)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: sa !== null ? { id: En, overflow: bn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = rf(e)),
                (n.return = t),
                (t.child = n),
                (bt = t),
                (at = null)))
            : (e = null),
          e === null)
        )
          throw ca(t);
        return ((t.lanes = 536870912), null);
      }
      return Tu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var E = u.dehydrated;
      if ((fs(t), i))
        if (t.flags & 256) ((t.flags &= -257), (t = Md(e, t, n)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(y(558));
      else if ((vt || pl(e, t, n, !1), (i = (n & e.childLanes) !== 0), vt || i)) {
        if (((a = et), a !== null && ((E = Se(a, n)), E !== 0 && E !== u.retryLane)))
          throw ((u.retryLane = E), Ga(e, E), jt(a, e, E), zs);
        (Lu(), (t = Md(e, t, n)));
      } else
        ((e = u.treeContext),
          (at = an(E.nextSibling)),
          (bt = t),
          (Be = !0),
          (oa = null),
          (tn = !1),
          e !== null && cf(t, e),
          (t = Tu(t, a)),
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
  function Ru(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(y(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Ns(e, t, n, a, i) {
    return (
      Xa(t),
      (n = ms(e, t, n, a, void 0, i)),
      (a = hs()),
      e !== null && !vt
        ? (vs(e, t, i), qn(e, t, i))
        : (Be && a && Jr(t), (t.flags |= 1), Mt(e, t, n, i), t.child)
    );
  }
  function Td(e, t, n, a, i, u) {
    return (
      Xa(t),
      (t.updateQueue = null),
      (n = _f(t, a, n, i)),
      Af(e),
      (a = hs()),
      e !== null && !vt
        ? (vs(e, t, u), qn(e, t, u))
        : (Be && a && Jr(t), (t.flags |= 1), Mt(e, t, n, u), t.child)
    );
  }
  function Rd(e, t, n, a, i) {
    if ((Xa(t), t.stateNode === null)) {
      var u = hl,
        E = n.contextType;
      (typeof E == 'object' && E !== null && (u = Ct(E)),
        (u = new n(a, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Ds),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        is(t),
        (E = n.contextType),
        (u.context = typeof E == 'object' && E !== null ? Ct(E) : hl),
        (u.state = t.memoizedState),
        (E = n.getDerivedStateFromProps),
        typeof E == 'function' && (Os(t, n, E, a), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((E = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          E !== u.state && Ds.enqueueReplaceState(u, u.state, null),
          ri(t, a, u, i),
          ui(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var T = t.memoizedProps,
        j = Fa(n, T);
      u.props = j;
      var k = u.context,
        ee = n.contextType;
      ((E = hl), typeof ee == 'object' && ee !== null && (E = Ct(ee)));
      var ne = n.getDerivedStateFromProps;
      ((ee = typeof ne == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (T = t.pendingProps !== T),
        ee ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((T || k !== E) && dd(t, u, a, E)),
        (da = !1));
      var J = t.memoizedState;
      ((u.state = J),
        ri(t, a, u, i),
        ui(),
        (k = t.memoizedState),
        T || J !== k || da
          ? (typeof ne == 'function' && (Os(t, n, ne, a), (k = t.memoizedState)),
            (j = da || fd(t, n, j, a, J, k, E))
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
        us(e, t),
        (E = t.memoizedProps),
        (ee = Fa(n, E)),
        (u.props = ee),
        (ne = t.pendingProps),
        (J = u.context),
        (k = n.contextType),
        (j = hl),
        typeof k == 'object' && k !== null && (j = Ct(k)),
        (T = n.getDerivedStateFromProps),
        (k = typeof T == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((E !== ne || J !== j) && dd(t, u, a, j)),
        (da = !1),
        (J = t.memoizedState),
        (u.state = J),
        ri(t, a, u, i),
        ui());
      var I = t.memoizedState;
      E !== ne || J !== I || da || (e !== null && e.dependencies !== null && ru(e.dependencies))
        ? (typeof T == 'function' && (Os(t, n, T, a), (I = t.memoizedState)),
          (ee =
            da ||
            fd(t, n, ee, a, J, I, j) ||
            (e !== null && e.dependencies !== null && ru(e.dependencies)))
            ? (k ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(a, I, j),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(a, I, j)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (E === e.memoizedProps && J === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (E === e.memoizedProps && J === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = I)),
          (u.props = a),
          (u.state = I),
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
      Ru(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (n = a && typeof n.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = ka(t, e.child, null, i)), (t.child = ka(t, null, n, i)))
            : Mt(e, t, n, i),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = qn(e, t, i)),
      e
    );
  }
  function Ad(e, t, n, a) {
    return (Va(), (t.flags |= 256), Mt(e, t, n, a), t.child);
  }
  var Bs = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Us(e) {
    return { baseLanes: e, cachePool: gf() };
  }
  function Ls(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Zt), e);
  }
  function _d(e, t, n) {
    var a = t.pendingProps,
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
      if (Be) {
        if (
          (i ? va(t) : ga(),
          (e = at)
            ? ((e = Lm(e, tn)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: sa !== null ? { id: En, overflow: bn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = rf(e)),
                (n.return = t),
                (t.child = n),
                (bt = t),
                (at = null)))
            : (e = null),
          e === null)
        )
          throw ca(t);
        return (So(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var T = a.children;
      return (
        (a = a.fallback),
        i
          ? (ga(),
            (i = t.mode),
            (T = Au({ mode: 'hidden', children: T }, i)),
            (a = Ya(a, i, n, null)),
            (T.return = t),
            (a.return = t),
            (T.sibling = a),
            (t.child = T),
            (a = t.child),
            (a.memoizedState = Us(n)),
            (a.childLanes = Ls(e, E, n)),
            (t.memoizedState = Bs),
            di(null, a))
          : (va(t), Hs(t, T))
      );
    }
    var j = e.memoizedState;
    if (j !== null && ((T = j.dehydrated), T !== null)) {
      if (u)
        t.flags & 256
          ? (va(t), (t.flags &= -257), (t = js(e, t, n)))
          : t.memoizedState !== null
            ? (ga(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (ga(),
              (T = a.fallback),
              (i = t.mode),
              (a = Au({ mode: 'visible', children: a.children }, i)),
              (T = Ya(T, i, n, null)),
              (T.flags |= 2),
              (a.return = t),
              (T.return = t),
              (a.sibling = T),
              (t.child = a),
              ka(t, e.child, null, n),
              (a = t.child),
              (a.memoizedState = Us(n)),
              (a.childLanes = Ls(e, E, n)),
              (t.memoizedState = Bs),
              (t = di(null, a)));
      else if ((va(t), So(T))) {
        if (((E = T.nextSibling && T.nextSibling.dataset), E)) var k = E.dgst;
        ((E = k),
          (a = Error(y(419))),
          (a.stack = ''),
          (a.digest = E),
          ei({ value: a, source: null, stack: null }),
          (t = js(e, t, n)));
      } else if ((vt || pl(e, t, n, !1), (E = (n & e.childLanes) !== 0), vt || E)) {
        if (((E = et), E !== null && ((a = Se(E, n)), a !== 0 && a !== j.retryLane)))
          throw ((j.retryLane = a), Ga(e, a), jt(E, e, a), zs);
        (po(T) || Lu(), (t = js(e, t, n)));
      } else
        po(T)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = j.treeContext),
            (at = an(T.nextSibling)),
            (bt = t),
            (Be = !0),
            (oa = null),
            (tn = !1),
            e !== null && cf(t, e),
            (t = Hs(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (ga(),
        (T = a.fallback),
        (i = t.mode),
        (j = e.child),
        (k = j.sibling),
        (a = Ln(j, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = j.subtreeFlags & 65011712),
        k !== null ? (T = Ln(k, T)) : ((T = Ya(T, i, n, null)), (T.flags |= 2)),
        (T.return = t),
        (a.return = t),
        (a.sibling = T),
        (t.child = a),
        di(null, a),
        (a = t.child),
        (T = e.child.memoizedState),
        T === null
          ? (T = Us(n))
          : ((i = T.cachePool),
            i !== null
              ? ((j = mt._currentValue), (i = i.parent !== j ? { parent: j, pool: j } : i))
              : (i = gf()),
            (T = { baseLanes: T.baseLanes | n, cachePool: i })),
        (a.memoizedState = T),
        (a.childLanes = Ls(e, E, n)),
        (t.memoizedState = Bs),
        di(e.child, a))
      : (va(t),
        (n = e.child),
        (e = n.sibling),
        (n = Ln(n, { mode: 'visible', children: a.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((E = t.deletions), E === null ? ((t.deletions = [e]), (t.flags |= 16)) : E.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Hs(e, t) {
    return ((t = Au({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function Au(e, t) {
    return ((e = Vt(22, e, null, t)), (e.lanes = 0), e);
  }
  function js(e, t, n) {
    return (
      ka(t, e.child, null, n),
      (e = Hs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Od(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), Pr(e.return, t, n));
  }
  function Gs(e, t, n, a, i, u) {
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
  function Dd(e, t, n) {
    var a = t.pendingProps,
      i = a.revealOrder,
      u = a.tail;
    a = a.children;
    var E = ct.current,
      T = (E & 2) !== 0;
    if (
      (T ? ((E = (E & 1) | 2), (t.flags |= 128)) : (E &= 1),
      P(ct, E),
      Mt(e, t, a, n),
      (a = Be ? Pl : 0),
      !T && e !== null && (e.flags & 128) !== 0)
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
          ((e = n.alternate), e !== null && vu(e) === null && (i = n), (n = n.sibling));
        ((n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          Gs(t, !1, i, n, u, a));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && vu(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        Gs(t, !0, n, null, u, a);
        break;
      case 'together':
        Gs(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function qn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Sa |= t.lanes), (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((pl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(y(153));
    if (t.child !== null) {
      for (e = t.child, n = Ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = Ln(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Ys(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && ru(e)));
  }
  function Vg(e, t, n) {
    switch (t.tag) {
      case 3:
        (xe(t, t.stateNode.containerInfo), fa(t, mt, e.memoizedState.cache), Va());
        break;
      case 27:
      case 5:
        Le(t);
        break;
      case 4:
        xe(t, t.stateNode.containerInfo);
        break;
      case 10:
        fa(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), fs(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (va(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? _d(e, t, n)
              : (va(t), (e = qn(e, t, n)), e !== null ? e.sibling : null);
        va(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((a = (n & t.childLanes) !== 0),
          a || (pl(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
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
        return ((t.lanes = 0), bd(e, t, n, t.pendingProps));
      case 24:
        fa(t, mt, e.memoizedState.cache);
    }
    return qn(e, t, n);
  }
  function wd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) vt = !0;
      else {
        if (!Ys(e, n) && (t.flags & 128) === 0) return ((vt = !1), Vg(e, t, n));
        vt = (e.flags & 131072) !== 0;
      }
    else ((vt = !1), Be && (t.flags & 1048576) !== 0 && of(t, Pl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Za(t.elementType)), (t.type = e), typeof e == 'function'))
            Zr(e)
              ? ((a = Fa(e, a)), (t.tag = 1), (t = Rd(null, t, e, a, n)))
              : ((t.tag = 0), (t = Ns(null, t, e, a, n)));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === G) {
                ((t.tag = 11), (t = Sd(null, t, e, a, n)));
                break e;
              } else if (i === D) {
                ((t.tag = 14), (t = xd(null, t, e, a, n)));
                break e;
              }
            }
            throw ((t = ie(e) || e), Error(y(306, t, '')));
          }
        }
        return t;
      case 0:
        return Ns(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((a = t.type), (i = Fa(a, t.pendingProps)), Rd(e, t, a, i, n));
      case 3:
        e: {
          if ((xe(t, t.stateNode.containerInfo), e === null)) throw Error(y(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((i = u.element), us(e, t), ri(t, a, null, n));
          var E = t.memoizedState;
          if (
            ((a = E.cache),
            fa(t, mt, a),
            a !== u.cache && es(t, [mt], n, !0),
            ui(),
            (a = E.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: E.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Ad(e, t, a, n);
              break e;
            } else if (a !== i) {
              ((i = It(Error(y(424)), t)), ei(i), (t = Ad(e, t, a, n)));
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
                at = an(e.firstChild),
                  bt = t,
                  Be = !0,
                  oa = null,
                  tn = !0,
                  n = bf(t, null, a, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((Va(), a === i)) {
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
          Ru(e, t),
          e === null
            ? (n = qm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Be ||
                ((n = t.type),
                (e = t.pendingProps),
                (a = Xu(oe.current).createElement(n)),
                (a[Re] = t),
                (a[Ie] = e),
                Tt(a, n, e),
                xt(a),
                (t.stateNode = a))
            : (t.memoizedState = qm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Le(t),
          e === null &&
            Be &&
            ((a = t.stateNode = Gm(t.type, t.pendingProps, oe.current)),
            (bt = t),
            (tn = !0),
            (i = at),
            Ma(t.type) ? ((xo = i), (at = an(a.firstChild))) : (at = i)),
          Mt(e, t, t.pendingProps.children, n),
          Ru(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Be &&
            ((i = a = at) &&
              ((a = y0(a, t.type, t.pendingProps, tn)),
              a !== null
                ? ((t.stateNode = a), (bt = t), (at = an(a.firstChild)), (tn = !1), (i = !0))
                : (i = !1)),
            i || ca(t)),
          Le(t),
          (i = t.type),
          (u = t.pendingProps),
          (E = e !== null ? e.memoizedProps : null),
          (a = u.children),
          vo(i, u) ? (a = null) : E !== null && vo(i, E) && (t.flags |= 32),
          t.memoizedState !== null && ((i = ms(e, t, zg, null, null, n)), (Ai._currentValue = i)),
          Ru(e, t),
          Mt(e, t, a, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Be &&
            ((e = n = at) &&
              ((n = p0(n, t.pendingProps, tn)),
              n !== null ? ((t.stateNode = n), (bt = t), (at = null), (e = !0)) : (e = !1)),
            e || ca(t)),
          null
        );
      case 13:
        return _d(e, t, n);
      case 4:
        return (
          xe(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = ka(t, null, a, n)) : Mt(e, t, a, n),
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
        return ((a = t.pendingProps), fa(t, t.type, a.value), Mt(e, t, a.children, n), t.child);
      case 9:
        return (
          (i = t.type._context),
          (a = t.pendingProps.children),
          Xa(t),
          (i = Ct(i)),
          (a = a(i)),
          (t.flags |= 1),
          Mt(e, t, a, n),
          t.child
        );
      case 14:
        return xd(e, t, t.type, t.pendingProps, n);
      case 15:
        return Ed(e, t, t.type, t.pendingProps, n);
      case 19:
        return Dd(e, t, n);
      case 31:
        return Yg(e, t, n);
      case 22:
        return bd(e, t, n, t.pendingProps);
      case 24:
        return (
          Xa(t),
          (a = Ct(mt)),
          e === null
            ? ((i = as()),
              i === null &&
                ((i = et),
                (u = ts()),
                (i.pooledCache = u),
                u.refCount++,
                u !== null && (i.pooledCacheLanes |= n),
                (i = u)),
              (t.memoizedState = { parent: a, cache: i }),
              is(t),
              fa(t, mt, i))
            : ((e.lanes & n) !== 0 && (us(e, t), ri(t, null, null, n), ui()),
              (i = e.memoizedState),
              (u = t.memoizedState),
              i.parent !== a
                ? ((i = { parent: a, cache: a }),
                  (t.memoizedState = i),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i),
                  fa(t, mt, a))
                : ((a = u.cache), fa(t, mt, a), a !== i.cache && es(t, [mt], n, !0))),
          Mt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(y(156, t.tag));
  }
  function Xn(e) {
    e.flags |= 4;
  }
  function Vs(e, t, n, a, i) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (i & 335544128) === i))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (lm()) e.flags |= 8192;
        else throw ((Ka = fu), ls);
    } else e.flags &= -16777217;
  }
  function zd(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !km(t)))
      if (lm()) e.flags |= 8192;
      else throw ((Ka = fu), ls);
  }
  function _u(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? Qi() : 536870912), (e.lanes |= t), (Dl |= t)));
  }
  function mi(e, t) {
    if (!Be)
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
  function qg(e, t, n) {
    var a = t.pendingProps;
    switch ((Fr(t), t.tag)) {
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
          Gn(mt),
          Ue(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (yl(t)
              ? Xn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Wr())),
          lt(t),
          null
        );
      case 26:
        var i = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (Xn(t), u !== null ? (lt(t), zd(t, u)) : (lt(t), Vs(t, i, null, a, n)))
            : u
              ? u !== e.memoizedState
                ? (Xn(t), lt(t), zd(t, u))
                : (lt(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== a && Xn(t), lt(t), Vs(t, i, e, a, n)),
          null
        );
      case 27:
        if ((Ye(t), (n = oe.current), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Xn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(y(166));
            return (lt(t), null);
          }
          ((e = ue.current), yl(t) ? ff(t) : ((e = Gm(i, a, n)), (t.stateNode = e), Xn(t)));
        }
        return (lt(t), null);
      case 5:
        if ((Ye(t), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Xn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(y(166));
            return (lt(t), null);
          }
          if (((u = ue.current), yl(t))) ff(t);
          else {
            var E = Xu(oe.current);
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
            ((u[Re] = t), (u[Ie] = a));
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
            e: switch ((Tt(u, i, a), i)) {
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
        return (lt(t), Vs(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Xn(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(y(166));
          if (((e = oe.current), yl(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (a = null), (i = bt), i !== null))
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            ((e[Re] = t),
              (e = !!(
                e.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                _m(e.nodeValue, n)
              )),
              e || ca(t, !0));
          } else ((e = Xu(e).createTextNode(a)), (e[Re] = t), (t.stateNode = e));
        }
        return (lt(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = yl(t)), n !== null)) {
            if (e === null) {
              if (!a) throw Error(y(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(y(557));
              e[Re] = t;
            } else (Va(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (lt(t), (e = !1));
          } else
            ((n = Wr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (Xt(t), t) : (Xt(t), null);
          if ((t.flags & 128) !== 0) throw Error(y(558));
        }
        return (lt(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = yl(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(y(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(y(317));
              i[Re] = t;
            } else (Va(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (lt(t), (i = !1));
          } else
            ((i = Wr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i),
              (i = !0));
          if (!i) return t.flags & 256 ? (Xt(t), t) : (Xt(t), null);
        }
        return (
          Xt(t),
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
              _u(t, t.updateQueue),
              lt(t),
              null)
        );
      case 4:
        return (Ue(), e === null && oo(t.stateNode.containerInfo), lt(t), null);
      case 10:
        return (Gn(t.type), lt(t), null);
      case 19:
        if ((Z(ct), (a = t.memoizedState), a === null)) return (lt(t), null);
        if (((i = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (i) mi(a, !1);
          else {
            if (ot !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = vu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      mi(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      _u(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (uf(n, e), (n = n.sibling));
                  return (P(ct, (ct.current & 1) | 2), Be && Hn(t, a.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            a.tail !== null &&
              ut() > Nu &&
              ((t.flags |= 128), (i = !0), mi(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = vu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                _u(t, e),
                mi(a, !0),
                a.tail === null && a.tailMode === 'hidden' && !u.alternate && !Be)
              )
                return (lt(t), null);
            } else
              2 * ut() - a.renderingStartTime > Nu &&
                n !== 536870912 &&
                ((t.flags |= 128), (i = !0), mi(a, !1), (t.lanes = 4194304));
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
            (n = ct.current),
            P(ct, i ? (n & 1) | 2 : n & 1),
            Be && Hn(t, a.treeForkCount),
            e)
          : (lt(t), null);
      case 22:
      case 23:
        return (
          Xt(t),
          cs(),
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
          n !== null && _u(t, n.retryQueue),
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
          e !== null && Z(Qa),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Gn(mt),
          lt(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(y(156, t.tag));
  }
  function Xg(e, t) {
    switch ((Fr(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          Gn(mt),
          Ue(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (Ye(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Xt(t), t.alternate === null)) throw Error(y(340));
          Va();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 13:
        if ((Xt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(y(340));
          Va();
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
          Xt(t),
          cs(),
          e !== null && Z(Qa),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Gn(mt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Nd(e, t) {
    switch ((Fr(t), t.tag)) {
      case 3:
        (Gn(mt), Ue());
        break;
      case 26:
      case 27:
      case 5:
        Ye(t);
        break;
      case 4:
        Ue();
        break;
      case 31:
        t.memoizedState !== null && Xt(t);
        break;
      case 13:
        Xt(t);
        break;
      case 19:
        Z(ct);
        break;
      case 10:
        Gn(t.type);
        break;
      case 22:
      case 23:
        (Xt(t), cs(), e !== null && Z(Qa));
        break;
      case 24:
        Gn(mt);
    }
  }
  function hi(e, t) {
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
      Ke(t, t.return, T);
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
            var E = a.inst,
              T = E.destroy;
            if (T !== void 0) {
              ((E.destroy = void 0), (i = t));
              var j = n,
                k = T;
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
  function Ud(e, t, n) {
    ((n.props = Fa(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      Ke(e, t, a);
    }
  }
  function vi(e, t) {
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
  function Cn(e, t) {
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
  function qs(e, t, n) {
    try {
      var a = e.stateNode;
      (f0(a, e.type, n, t), (a[Ie] = t));
    } catch (i) {
      Ke(e, e.return, i);
    }
  }
  function Hd(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Ma(e.type)) || e.tag === 4
    );
  }
  function Xs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Hd(e.return)) return null;
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
  function Qs(e, t, n) {
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
      for (Qs(e, t, n), e = e.sibling; e !== null; ) (Qs(e, t, n), (e = e.sibling));
  }
  function Ou(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (a !== 4 && (a === 27 && Ma(e.type) && (n = e.stateNode), (e = e.child), e !== null))
      for (Ou(e, t, n), e = e.sibling; e !== null; ) (Ou(e, t, n), (e = e.sibling));
  }
  function jd(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0]);
      (Tt(t, a, n), (t[Re] = e), (t[Ie] = n));
    } catch (u) {
      Ke(e, e.return, u);
    }
  }
  var Qn = !1,
    gt = !1,
    Zs = !1,
    Gd = typeof WeakSet == 'function' ? WeakSet : Set,
    Et = null;
  function Qg(e, t) {
    if (((e = e.containerInfo), (mo = $u), (e = $c(e)), jr(e))) {
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
                var I;
                ne !== n || (i !== 0 && ne.nodeType !== 3) || (T = E + i),
                  ne !== u || (a !== 0 && ne.nodeType !== 3) || (j = E + a),
                  ne.nodeType === 3 && (E += ne.nodeValue.length),
                  (I = ne.firstChild) !== null;
              )
                ((J = ne), (ne = I));
              for (;;) {
                if (ne === e) break t;
                if (
                  (J === n && ++k === i && (T = E),
                  J === u && ++ee === a && (j = E),
                  (I = ne.nextSibling) !== null)
                )
                  break;
                ((ne = J), (J = ne.parentNode));
              }
              ne = I;
            }
            n = T === -1 || j === -1 ? null : { start: T, end: j };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ho = { focusedElem: e, selectionRange: n }, $u = !1, Et = t; Et !== null; )
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
                } catch (ye) {
                  Ke(n, n.return, ye);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) yo(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      yo(e);
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
  function Yd(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Kn(e, n), a & 4 && hi(5, n));
        break;
      case 1:
        if ((Kn(e, n), a & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (E) {
              Ke(n, n.return, E);
            }
          else {
            var i = Fa(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (E) {
              Ke(n, n.return, E);
            }
          }
        (a & 64 && Bd(n), a & 512 && vi(n, n.return));
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
            Mf(e, t);
          } catch (E) {
            Ke(n, n.return, E);
          }
        }
        break;
      case 27:
        t === null && a & 4 && jd(n);
      case 26:
      case 5:
        (Kn(e, n), t === null && a & 4 && Ld(n), a & 512 && vi(n, n.return));
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
            e !== null && ((e = e.dehydrated), e !== null && ((n = Pg.bind(null, n)), S0(e, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || Qn), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || gt), (i = Qn));
          var u = gt;
          ((Qn = a),
            (gt = t) && !u ? kn(e, n, (n.subtreeFlags & 8772) !== 0) : Kn(e, n),
            (Qn = i),
            (gt = u));
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
      e.tag === 5 && ((t = e.stateNode), t !== null && ql(t)),
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
  function Zn(e, t, n) {
    for (n = n.child; n !== null; ) (qd(e, t, n), (n = n.sibling));
  }
  function qd(e, t, n) {
    if (Rt && typeof Rt.onCommitFiberUnmount == 'function')
      try {
        Rt.onCommitFiberUnmount(ua, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (gt || Cn(n, t),
          Zn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        gt || Cn(n, t);
        var a = it,
          i = Bt;
        (Ma(n.type) && ((it = n.stateNode), (Bt = !1)),
          Zn(e, t, n),
          Mi(n.stateNode),
          (it = a),
          (Bt = i));
        break;
      case 5:
        gt || Cn(n, t);
      case 6:
        if (((a = it), (i = Bt), (it = null), Zn(e, t, n), (it = a), (Bt = i), it !== null))
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
              jl(e))
            : Bm(it, n.stateNode));
        break;
      case 4:
        ((a = it),
          (i = Bt),
          (it = n.stateNode.containerInfo),
          (Bt = !0),
          Zn(e, t, n),
          (it = a),
          (Bt = i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ya(2, n, t), gt || ya(4, n, t), Zn(e, t, n));
        break;
      case 1:
        (gt ||
          (Cn(n, t), (a = n.stateNode), typeof a.componentWillUnmount == 'function' && Ud(n, t, a)),
          Zn(e, t, n));
        break;
      case 21:
        Zn(e, t, n);
        break;
      case 22:
        ((gt = (a = gt) || n.memoizedState !== null), Zn(e, t, n), (gt = a));
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
        jl(e);
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
        jl(e);
      } catch (n) {
        Ke(t, t.return, n);
      }
  }
  function Zg(e) {
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
        throw Error(y(435, e.tag));
    }
  }
  function Du(e, t) {
    var n = Zg(e);
    t.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var i = e0.bind(null, e, a);
        a.then(i, i);
      }
    });
  }
  function Ut(e, t) {
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
              if (Ma(T.type)) {
                ((it = T.stateNode), (Bt = !1));
                break e;
              }
              break;
            case 5:
              ((it = T.stateNode), (Bt = !1));
              break e;
            case 3:
            case 4:
              ((it = T.stateNode.containerInfo), (Bt = !0));
              break e;
          }
          T = T.return;
        }
        if (it === null) throw Error(y(160));
        (qd(u, E, i),
          (it = null),
          (Bt = !1),
          (u = i.alternate),
          u !== null && (u.return = null),
          (i.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (Zd(t, e), (t = t.sibling));
  }
  var gn = null;
  function Zd(e, t) {
    var n = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ut(t, e), Lt(e), a & 4 && (ya(3, e, e.return), hi(3, e), ya(5, e, e.return)));
        break;
      case 1:
        (Ut(t, e),
          Lt(e),
          a & 512 && (gt || n === null || Cn(n, n.return)),
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
        var i = gn;
        if ((Ut(t, e), Lt(e), a & 512 && (gt || n === null || Cn(n, n.return)), a & 4)) {
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
                          u[xn] ||
                          u[Re] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = i.createElement(a)),
                          i.head.insertBefore(u, i.querySelector('head > title'))),
                        Tt(u, a, n),
                        (u[Re] = e),
                        xt(u),
                        (a = u));
                      break e;
                    case 'link':
                      var E = Zm('link', 'href', i).get(a + (n.href || ''));
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
                      ((u = i.createElement(a)), Tt(u, a, n), i.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((E = Zm('meta', 'content', i).get(a + (n.content || '')))) {
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
                      ((u = i.createElement(a)), Tt(u, a, n), i.head.appendChild(u));
                      break;
                    default:
                      throw Error(y(468, a));
                  }
                  ((u[Re] = e), xt(u), (a = u));
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
              : a === null && e.stateNode !== null && qs(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Ut(t, e),
          Lt(e),
          a & 512 && (gt || n === null || Cn(n, n.return)),
          n !== null && a & 4 && qs(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((Ut(t, e), Lt(e), a & 512 && (gt || n === null || Cn(n, n.return)), e.flags & 32)) {
          i = e.stateNode;
          try {
            rl(i, '');
          } catch (ce) {
            Ke(e, e.return, ce);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), qs(e, i, n !== null ? n.memoizedProps : i)),
          a & 1024 && (Zs = !0));
        break;
      case 6:
        if ((Ut(t, e), Lt(e), a & 4)) {
          if (e.stateNode === null) throw Error(y(162));
          ((a = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = a;
          } catch (ce) {
            Ke(e, e.return, ce);
          }
        }
        break;
      case 3:
        if (
          ((Ku = null),
          (i = gn),
          (gn = Qu(t.containerInfo)),
          Ut(t, e),
          (gn = i),
          Lt(e),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            jl(t.containerInfo);
          } catch (ce) {
            Ke(e, e.return, ce);
          }
        Zs && ((Zs = !1), Kd(e));
        break;
      case 4:
        ((a = gn), (gn = Qu(e.stateNode.containerInfo)), Ut(t, e), Lt(e), (gn = a));
        break;
      case 12:
        (Ut(t, e), Lt(e));
        break;
      case 31:
        (Ut(t, e),
          Lt(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Du(e, a))));
        break;
      case 13:
        (Ut(t, e),
          Lt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (zu = ut()),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Du(e, a))));
        break;
      case 22:
        i = e.memoizedState !== null;
        var j = n !== null && n.memoizedState !== null,
          k = Qn,
          ee = gt;
        if (((Qn = k || i), (gt = ee || j), Ut(t, e), (gt = ee), (Qn = k), Lt(e), a & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (n === null || j || Qn || gt || $a(e)),
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
                  Ke(j, j.return, ce);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                j = t;
                try {
                  j.stateNode.nodeValue = i ? '' : j.memoizedProps;
                } catch (ce) {
                  Ke(j, j.return, ce);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                j = t;
                try {
                  var I = j.stateNode;
                  i ? Um(I, !0) : Um(j.stateNode, !1);
                } catch (ce) {
                  Ke(j, j.return, ce);
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
          a !== null && ((n = a.retryQueue), n !== null && ((a.retryQueue = null), Du(e, n))));
        break;
      case 19:
        (Ut(t, e),
          Lt(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Du(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ut(t, e), Lt(e));
    }
  }
  function Lt(e) {
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
        if (n == null) throw Error(y(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode,
              u = Xs(e);
            Ou(e, u, i);
            break;
          case 5:
            var E = n.stateNode;
            n.flags & 32 && (rl(E, ''), (n.flags &= -33));
            var T = Xs(e);
            Ou(e, T, E);
            break;
          case 3:
          case 4:
            var j = n.stateNode.containerInfo,
              k = Xs(e);
            Qs(e, k, j);
            break;
          default:
            throw Error(y(161));
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
          (typeof n.componentWillUnmount == 'function' && Ud(t, t.return, n), $a(t));
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
  function kn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        i = e,
        u = t,
        E = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (kn(i, u, n), hi(4, u));
          break;
        case 1:
          if ((kn(i, u, n), (a = u), (i = a.stateNode), typeof i.componentDidMount == 'function'))
            try {
              i.componentDidMount();
            } catch (k) {
              Ke(a, a.return, k);
            }
          if (((a = u), (i = a.updateQueue), i !== null)) {
            var T = a.stateNode;
            try {
              var j = i.shared.hiddenCallbacks;
              if (j !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < j.length; i++) Cf(j[i], T);
            } catch (k) {
              Ke(a, a.return, k);
            }
          }
          (n && E & 64 && Bd(u), vi(u, u.return));
          break;
        case 27:
          jd(u);
        case 26:
        case 5:
          (kn(i, u, n), n && a === null && E & 4 && Ld(u), vi(u, u.return));
          break;
        case 12:
          kn(i, u, n);
          break;
        case 31:
          (kn(i, u, n), n && E & 4 && Xd(i, u));
          break;
        case 13:
          (kn(i, u, n), n && E & 4 && Qd(i, u));
          break;
        case 22:
          (u.memoizedState === null && kn(i, u, n), vi(u, u.return));
          break;
        case 30:
          break;
        default:
          kn(i, u, n);
      }
      t = t.sibling;
    }
  }
  function Ks(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && ti(n)));
  }
  function ks(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && ti(e)));
  }
  function yn(e, t, n, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (kd(e, t, n, a), (t = t.sibling));
  }
  function kd(e, t, n, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (yn(e, t, n, a), i & 2048 && hi(9, t));
        break;
      case 1:
        yn(e, t, n, a);
        break;
      case 3:
        (yn(e, t, n, a),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && ti(e))));
        break;
      case 12:
        if (i & 2048) {
          (yn(e, t, n, a), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              E = u.id,
              T = u.onPostCommit;
            typeof T == 'function' &&
              T(E, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (j) {
            Ke(t, t.return, j);
          }
        } else yn(e, t, n, a);
        break;
      case 31:
        yn(e, t, n, a);
        break;
      case 13:
        yn(e, t, n, a);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (E = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? yn(e, t, n, a)
              : gi(e, t)
            : u._visibility & 2
              ? yn(e, t, n, a)
              : ((u._visibility |= 2), Al(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          i & 2048 && Ks(E, t));
        break;
      case 24:
        (yn(e, t, n, a), i & 2048 && ks(t.alternate, t));
        break;
      default:
        yn(e, t, n, a);
    }
  }
  function Al(e, t, n, a, i) {
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
          (Al(u, E, T, j, i), hi(8, E));
          break;
        case 23:
          break;
        case 22:
          var ee = E.stateNode;
          (E.memoizedState !== null
            ? ee._visibility & 2
              ? Al(u, E, T, j, i)
              : gi(u, E)
            : ((ee._visibility |= 2), Al(u, E, T, j, i)),
            i && k & 2048 && Ks(E.alternate, E));
          break;
        case 24:
          (Al(u, E, T, j, i), i && k & 2048 && ks(E.alternate, E));
          break;
        default:
          Al(u, E, T, j, i);
      }
      t = t.sibling;
    }
  }
  function gi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          a = t,
          i = a.flags;
        switch (a.tag) {
          case 22:
            (gi(n, a), i & 2048 && Ks(a.alternate, a));
            break;
          case 24:
            (gi(n, a), i & 2048 && ks(a.alternate, a));
            break;
          default:
            gi(n, a);
        }
        t = t.sibling;
      }
  }
  var yi = 8192;
  function _l(e, t, n) {
    if (e.subtreeFlags & yi) for (e = e.child; e !== null; ) (Jd(e, t, n), (e = e.sibling));
  }
  function Jd(e, t, n) {
    switch (e.tag) {
      case 26:
        (_l(e, t, n),
          e.flags & yi && e.memoizedState !== null && w0(n, gn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        _l(e, t, n);
        break;
      case 3:
      case 4:
        var a = gn;
        ((gn = Qu(e.stateNode.containerInfo)), _l(e, t, n), (gn = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = yi), (yi = 16777216), _l(e, t, n), (yi = a))
            : _l(e, t, n));
        break;
      default:
        _l(e, t, n);
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
  function pi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((Et = a), Wd(a, e));
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
        (pi(e), e.flags & 2048 && ya(9, e, e.return));
        break;
      case 3:
        pi(e);
        break;
      case 12:
        pi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), wu(e))
          : pi(e);
        break;
      default:
        pi(e);
    }
  }
  function wu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((Et = a), Wd(a, e));
        }
      Fd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (ya(8, t, t.return), wu(t));
          break;
        case 22:
          ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), wu(t)));
          break;
        default:
          wu(t);
      }
      e = e.sibling;
    }
  }
  function Wd(e, t) {
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
          ti(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (Et = a));
      else
        e: for (n = e; Et !== null; ) {
          a = Et;
          var i = a.sibling,
            u = a.return;
          if ((Vd(a), a === n)) {
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
  var Kg = {
      getCacheForType: function (e) {
        var t = Ct(mt),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return Ct(mt).controller.signal;
      },
    },
    kg = typeof WeakMap == 'function' ? WeakMap : Map,
    Xe = 0,
    et = null,
    Ae = null,
    Oe = 0,
    Ze = 0,
    Qt = null,
    pa = !1,
    Ol = !1,
    Js = !1,
    Jn = 0,
    ot = 0,
    Sa = 0,
    Wa = 0,
    Fs = 0,
    Zt = 0,
    Dl = 0,
    Si = null,
    Ht = null,
    $s = !1,
    zu = 0,
    Id = 0,
    Nu = 1 / 0,
    Bu = null,
    xa = null,
    yt = 0,
    Ea = null,
    wl = null,
    Fn = 0,
    Ws = 0,
    Is = null,
    Pd = null,
    xi = 0,
    Ps = null;
  function Kt() {
    return (Xe & 2) !== 0 && Oe !== 0 ? Oe & -Oe : A.T !== null ? io() : He();
  }
  function em() {
    if (Zt === 0)
      if ((Oe & 536870912) === 0 || Be) {
        var e = fn;
        ((fn <<= 1), (fn & 3932160) === 0 && (fn = 262144), (Zt = e));
      } else Zt = 536870912;
    return ((e = qt.current), e !== null && (e.flags |= 32), Zt);
  }
  function jt(e, t, n) {
    (((e === et && (Ze === 2 || Ze === 9)) || e.cancelPendingCommit !== null) &&
      (zl(e, 0), ba(e, Oe, Zt, !1)),
      ge(e, n),
      ((Xe & 2) === 0 || e !== et) &&
        (e === et && ((Xe & 2) === 0 && (Wa |= n), ot === 4 && ba(e, Oe, Zt, !1)), Mn(e)));
  }
  function tm(e, t, n) {
    if ((Xe & 6) !== 0) throw Error(y(327));
    var a = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Ba(e, t),
      i = a ? $g(e, t) : to(e, t, !0),
      u = a;
    do {
      if (i === 0) {
        Ol && !a && ba(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !Jg(n))) {
          ((i = to(e, t, !1)), (u = !1));
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
              i = Si;
              var j = T.current.memoizedState.isDehydrated;
              if ((j && (zl(T, E).flags |= 256), (E = to(T, E, !1)), E !== 2)) {
                if (Js && !j) {
                  ((T.errorRecoveryDisabledLanes |= u), (Wa |= u), (i = 4));
                  break e;
                }
                ((u = Ht), (Ht = i), u !== null && (Ht === null ? (Ht = u) : Ht.push.apply(Ht, u)));
              }
              i = E;
            }
            if (((u = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (zl(e, 0), ba(e, t, 0, !0));
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
              ba(a, t, Zt, !pa);
              break e;
            case 2:
              Ht = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(y(329));
          }
          if ((t & 62914560) === t && ((i = zu + 300 - ut()), 10 < i)) {
            if ((ba(a, t, Zt, !pa), al(a, 0, !0) !== 0)) break e;
            ((Fn = t),
              (a.timeoutHandle = zm(
                nm.bind(null, a, n, Ht, Bu, $s, t, Zt, Wa, Dl, pa, u, 'Throttled', -0, 0),
                i
              )));
            break e;
          }
          nm(a, n, Ht, Bu, $s, t, Zt, Wa, Dl, pa, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Mn(e);
  }
  function nm(e, t, n, a, i, u, E, T, j, k, ee, ne, J, I) {
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
        Jd(t, u, ne));
      var ce = (u & 62914560) === u ? zu - ut() : (u & 4194048) === u ? Id - ut() : 0;
      if (((ce = z0(ne, ce)), ce !== null)) {
        ((Fn = u),
          (e.cancelPendingCommit = ce(
            cm.bind(null, e, t, u, n, a, i, E, T, j, ee, ne, null, J, I)
          )),
          ba(e, u, E, !k));
        return;
      }
    }
    cm(e, t, u, n, a, i, E, T, j);
  }
  function Jg(e) {
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
            if (!Yt(u(), i)) return !1;
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
  function ba(e, t, n, a) {
    ((t &= ~Fs),
      (t &= ~Wa),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var i = t; 0 < i; ) {
      var u = 31 - _t(i),
        E = 1 << u;
      ((a[u] = -1), (i &= ~E));
    }
    n !== 0 && be(e, n, t);
  }
  function Uu() {
    return (Xe & 6) === 0 ? (Ei(0), !1) : !0;
  }
  function eo() {
    if (Ae !== null) {
      if (Ze === 0) var e = Ae.return;
      else ((e = Ae), (jn = qa = null), gs(e), (bl = null), (ai = 0), (e = Ae));
      for (; e !== null; ) (Nd(e.alternate, e), (e = e.return));
      Ae = null;
    }
  }
  function zl(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), h0(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (Fn = 0),
      eo(),
      (et = e),
      (Ae = n = Ln(e.current, null)),
      (Oe = t),
      (Ze = 0),
      (Qt = null),
      (pa = !1),
      (Ol = Ba(e, t)),
      (Js = !1),
      (Dl = Zt = Fs = Wa = Sa = ot = 0),
      (Ht = Si = null),
      ($s = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - _t(a),
          u = 1 << i;
        ((t |= e[i]), (a &= ~u));
      }
    return ((Jn = t), nu(), n);
  }
  function am(e, t) {
    ((Ce = null),
      (A.H = fi),
      t === El || t === cu
        ? ((t = Sf()), (Ze = 3))
        : t === ls
          ? ((t = Sf()), (Ze = 4))
          : (Ze =
              t === zs
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (Qt = t),
      Ae === null && ((ot = 1), Mu(e, It(t, e.current))));
  }
  function lm() {
    var e = qt.current;
    return e === null
      ? !0
      : (Oe & 4194048) === Oe
        ? nn === null
        : (Oe & 62914560) === Oe || (Oe & 536870912) !== 0
          ? e === nn
          : !1;
  }
  function im() {
    var e = A.H;
    return ((A.H = fi), e === null ? fi : e);
  }
  function um() {
    var e = A.A;
    return ((A.A = Kg), e);
  }
  function Lu() {
    ((ot = 4),
      pa || ((Oe & 4194048) !== Oe && qt.current !== null) || (Ol = !0),
      ((Sa & 134217727) === 0 && (Wa & 134217727) === 0) || et === null || ba(et, Oe, Zt, !1));
  }
  function to(e, t, n) {
    var a = Xe;
    Xe |= 2;
    var i = im(),
      u = um();
    ((et !== e || Oe !== t) && ((Bu = null), zl(e, t)), (t = !1));
    var E = ot;
    e: do
      try {
        if (Ze !== 0 && Ae !== null) {
          var T = Ae,
            j = Qt;
          switch (Ze) {
            case 8:
              (eo(), (E = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              qt.current === null && (t = !0);
              var k = Ze;
              if (((Ze = 0), (Qt = null), Nl(e, T, j, k), n && Ol)) {
                E = 0;
                break e;
              }
              break;
            default:
              ((k = Ze), (Ze = 0), (Qt = null), Nl(e, T, j, k));
          }
        }
        (Fg(), (E = ot));
        break;
      } catch (ee) {
        am(e, ee);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (jn = qa = null),
      (Xe = a),
      (A.H = i),
      (A.A = u),
      Ae === null && ((et = null), (Oe = 0), nu()),
      E
    );
  }
  function Fg() {
    for (; Ae !== null; ) rm(Ae);
  }
  function $g(e, t) {
    var n = Xe;
    Xe |= 2;
    var a = im(),
      i = um();
    et !== e || Oe !== t ? ((Bu = null), (Nu = ut() + 500), zl(e, t)) : (Ol = Ba(e, t));
    e: do
      try {
        if (Ze !== 0 && Ae !== null) {
          t = Ae;
          var u = Qt;
          t: switch (Ze) {
            case 1:
              ((Ze = 0), (Qt = null), Nl(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (yf(u)) {
                ((Ze = 0), (Qt = null), sm(t));
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
              yf(u) ? ((Ze = 0), (Qt = null), sm(t)) : ((Ze = 0), (Qt = null), Nl(e, t, u, 7));
              break;
            case 5:
              var E = null;
              switch (Ae.tag) {
                case 26:
                  E = Ae.memoizedState;
                case 5:
                case 27:
                  var T = Ae;
                  if (E ? km(E) : T.stateNode.complete) {
                    ((Ze = 0), (Qt = null));
                    var j = T.sibling;
                    if (j !== null) Ae = j;
                    else {
                      var k = T.return;
                      k !== null ? ((Ae = k), Hu(k)) : (Ae = null);
                    }
                    break t;
                  }
              }
              ((Ze = 0), (Qt = null), Nl(e, t, u, 5));
              break;
            case 6:
              ((Ze = 0), (Qt = null), Nl(e, t, u, 6));
              break;
            case 8:
              (eo(), (ot = 6));
              break e;
            default:
              throw Error(y(462));
          }
        }
        Wg();
        break;
      } catch (ee) {
        am(e, ee);
      }
    while (!0);
    return (
      (jn = qa = null),
      (A.H = a),
      (A.A = i),
      (Xe = n),
      Ae !== null ? 0 : ((et = null), (Oe = 0), nu(), ot)
    );
  }
  function Wg() {
    for (; Ae !== null && !wt(); ) rm(Ae);
  }
  function rm(e) {
    var t = wd(e.alternate, e, Jn);
    ((e.memoizedProps = e.pendingProps), t === null ? Hu(e) : (Ae = t));
  }
  function sm(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Td(n, t, t.pendingProps, t.type, void 0, Oe);
        break;
      case 11:
        t = Td(n, t, t.pendingProps, t.type.render, t.ref, Oe);
        break;
      case 5:
        gs(t);
      default:
        (Nd(n, t), (t = Ae = uf(t, Jn)), (t = wd(n, t, Jn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Hu(e) : (Ae = t));
  }
  function Nl(e, t, n, a) {
    ((jn = qa = null), gs(t), (bl = null), (ai = 0));
    var i = t.return;
    try {
      if (Gg(e, i, t, n, Oe)) {
        ((ot = 1), Mu(e, It(n, e.current)), (Ae = null));
        return;
      }
    } catch (u) {
      if (i !== null) throw ((Ae = i), u);
      ((ot = 1), Mu(e, It(n, e.current)), (Ae = null));
      return;
    }
    t.flags & 32768
      ? (Be || a === 1
          ? (e = !0)
          : Ol || (Oe & 536870912) !== 0
            ? (e = !1)
            : ((pa = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = qt.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        om(t, e))
      : Hu(t);
  }
  function Hu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        om(t, pa);
        return;
      }
      e = t.return;
      var n = qg(t.alternate, t, Jn);
      if (n !== null) {
        Ae = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ae = t;
        return;
      }
      Ae = t = e;
    } while (t !== null);
    ot === 0 && (ot = 5);
  }
  function om(e, t) {
    do {
      var n = Xg(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (Ae = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ae = e;
        return;
      }
      Ae = e = n;
    } while (e !== null);
    ((ot = 6), (Ae = null));
  }
  function cm(e, t, n, a, i, u, E, T, j) {
    e.cancelPendingCommit = null;
    do ju();
    while (yt !== 0);
    if ((Xe & 6) !== 0) throw Error(y(327));
    if (t !== null) {
      if (t === e.current) throw Error(y(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Xr),
        we(e, n, u, E, T, j),
        e === et && ((Ae = et = null), (Oe = 0)),
        (wl = t),
        (Ea = e),
        (Fn = n),
        (Ws = u),
        (Is = i),
        (Pd = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            t0(Jt, function () {
              return (vm(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = A.T), (A.T = null), (i = N.p), (N.p = 2), (E = Xe), (Xe |= 4));
        try {
          Qg(e, t, n);
        } finally {
          ((Xe = E), (N.p = i), (A.T = a));
        }
      }
      ((yt = 1), fm(), dm(), mm());
    }
  }
  function fm() {
    if (yt === 1) {
      yt = 0;
      var e = Ea,
        t = wl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = A.T), (A.T = null));
        var a = N.p;
        N.p = 2;
        var i = Xe;
        Xe |= 4;
        try {
          Zd(t, e);
          var u = ho,
            E = $c(e.containerInfo),
            T = u.focusedElem,
            j = u.selectionRange;
          if (E !== T && T && T.ownerDocument && Fc(T.ownerDocument.documentElement, T)) {
            if (j !== null && jr(T)) {
              var k = j.start,
                ee = j.end;
              if ((ee === void 0 && (ee = k), 'selectionStart' in T))
                ((T.selectionStart = k), (T.selectionEnd = Math.min(ee, T.value.length)));
              else {
                var ne = T.ownerDocument || document,
                  J = (ne && ne.defaultView) || window;
                if (J.getSelection) {
                  var I = J.getSelection(),
                    ce = T.textContent.length,
                    ye = Math.min(j.start, ce),
                    $e = j.end === void 0 ? ye : Math.min(j.end, ce);
                  !I.extend && ye > $e && ((E = $e), ($e = ye), (ye = E));
                  var Q = Jc(T, ye),
                    X = Jc(T, $e);
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
            for (ne = [], I = T; (I = I.parentNode); )
              I.nodeType === 1 && ne.push({ element: I, left: I.scrollLeft, top: I.scrollTop });
            for (typeof T.focus == 'function' && T.focus(), T = 0; T < ne.length; T++) {
              var te = ne[T];
              ((te.element.scrollLeft = te.left), (te.element.scrollTop = te.top));
            }
          }
          (($u = !!mo), (ho = mo = null));
        } finally {
          ((Xe = i), (N.p = a), (A.T = n));
        }
      }
      ((e.current = t), (yt = 2));
    }
  }
  function dm() {
    if (yt === 2) {
      yt = 0;
      var e = Ea,
        t = wl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = A.T), (A.T = null));
        var a = N.p;
        N.p = 2;
        var i = Xe;
        Xe |= 4;
        try {
          Yd(e, t.alternate, t);
        } finally {
          ((Xe = i), (N.p = a), (A.T = n));
        }
      }
      yt = 3;
    }
  }
  function mm() {
    if (yt === 4 || yt === 3) {
      ((yt = 0), Pa());
      var e = Ea,
        t = wl,
        n = Fn,
        a = Pd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (yt = 5)
        : ((yt = 0), (wl = Ea = null), hm(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (xa = null),
        tt(n),
        (t = t.stateNode),
        Rt && typeof Rt.onCommitFiberRoot == 'function')
      )
        try {
          Rt.onCommitFiberRoot(ua, t, void 0, (t.current.flags & 128) === 128);
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
      ((Fn & 3) !== 0 && ju(),
        Mn(e),
        (i = e.pendingLanes),
        (n & 261930) !== 0 && (i & 42) !== 0 ? (e === Ps ? xi++ : ((xi = 0), (Ps = e))) : (xi = 0),
        Ei(0));
    }
  }
  function hm(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), ti(t)));
  }
  function ju() {
    return (fm(), dm(), mm(), vm());
  }
  function vm() {
    if (yt !== 5) return !1;
    var e = Ea,
      t = Ws;
    Ws = 0;
    var n = tt(Fn),
      a = A.T,
      i = N.p;
    try {
      ((N.p = 32 > n ? 32 : n), (A.T = null), (n = Is), (Is = null));
      var u = Ea,
        E = Fn;
      if (((yt = 0), (wl = Ea = null), (Fn = 0), (Xe & 6) !== 0)) throw Error(y(331));
      var T = Xe;
      if (
        ((Xe |= 4),
        $d(u.current),
        kd(u, u.current, E, n),
        (Xe = T),
        Ei(0, !1),
        Rt && typeof Rt.onPostCommitFiberRoot == 'function')
      )
        try {
          Rt.onPostCommitFiberRoot(ua, u);
        } catch {}
      return !0;
    } finally {
      ((N.p = i), (A.T = a), hm(e, t));
    }
  }
  function gm(e, t, n) {
    ((t = It(n, t)),
      (t = ws(e.stateNode, t, 2)),
      (e = ha(e, t, 2)),
      e !== null && (ge(e, 2), Mn(e)));
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
            (typeof a.componentDidCatch == 'function' && (xa === null || !xa.has(a)))
          ) {
            ((e = It(n, e)),
              (n = yd(2)),
              (a = ha(t, n, 2)),
              a !== null && (pd(n, a, t, e), ge(a, 2), Mn(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function no(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new kg();
      var i = new Set();
      a.set(t, i);
    } else ((i = a.get(t)), i === void 0 && ((i = new Set()), a.set(t, i)));
    i.has(n) || ((Js = !0), i.add(n), (e = Ig.bind(null, e, t, n)), t.then(e, e));
  }
  function Ig(e, t, n) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      et === e &&
        (Oe & n) === n &&
        (ot === 4 || (ot === 3 && (Oe & 62914560) === Oe && 300 > ut() - zu)
          ? (Xe & 2) === 0 && zl(e, 0)
          : (Fs |= n),
        Dl === Oe && (Dl = 0)),
      Mn(e));
  }
  function ym(e, t) {
    (t === 0 && (t = Qi()), (e = Ga(e, t)), e !== null && (ge(e, t), Mn(e)));
  }
  function Pg(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), ym(e, n));
  }
  function e0(e, t) {
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
    (a !== null && a.delete(t), ym(e, n));
  }
  function t0(e, t) {
    return An(e, t);
  }
  var Gu = null,
    Bl = null,
    ao = !1,
    Yu = !1,
    lo = !1,
    Ca = 0;
  function Mn(e) {
    (e !== Bl && e.next === null && (Bl === null ? (Gu = Bl = e) : (Bl = Bl.next = e)),
      (Yu = !0),
      ao || ((ao = !0), a0()));
  }
  function Ei(e, t) {
    if (!lo && Yu) {
      lo = !0;
      do
        for (var n = !1, a = Gu; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var E = a.suspendedLanes,
                T = a.pingedLanes;
              ((u = (1 << (31 - _t(42 | e) + 1)) - 1),
                (u &= i & ~(E & ~T)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((n = !0), Em(a, u));
          } else
            ((u = Oe),
              (u = al(
                a,
                a === et ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Ba(a, u) || ((n = !0), Em(a, u)));
          a = a.next;
        }
      while (n);
      lo = !1;
    }
  }
  function n0() {
    pm();
  }
  function pm() {
    Yu = ao = !1;
    var e = 0;
    Ca !== 0 && m0() && (e = Ca);
    for (var t = ut(), n = null, a = Gu; a !== null; ) {
      var i = a.next,
        u = Sm(a, t);
      (u === 0
        ? ((a.next = null), n === null ? (Gu = i) : (n.next = i), i === null && (Bl = n))
        : ((n = a), (e !== 0 || (u & 3) !== 0) && (Yu = !0)),
        (a = i));
    }
    ((yt !== 0 && yt !== 5) || Ei(e), Ca !== 0 && (Ca = 0));
  }
  function Sm(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        i = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var E = 31 - _t(u),
        T = 1 << E,
        j = i[E];
      (j === -1
        ? ((T & n) === 0 || (T & a) !== 0) && (i[E] = Er(T, t))
        : j <= t && (e.expiredLanes |= T),
        (u &= ~T));
    }
    if (
      ((t = et),
      (n = Oe),
      (n = al(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (a = e.callbackNode),
      n === 0 || (e === t && (Ze === 2 || Ze === 9)) || e.cancelPendingCommit !== null)
    )
      return (a !== null && a !== null && on(a), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((n & 3) === 0 || Ba(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((a !== null && on(a), tt(n))) {
        case 2:
        case 8:
          n = el;
          break;
        case 32:
          n = Jt;
          break;
        case 268435456:
          n = On;
          break;
        default:
          n = Jt;
      }
      return (
        (a = xm.bind(null, e)),
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
  function xm(e, t) {
    if (yt !== 0 && yt !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (ju() && e.callbackNode !== n) return null;
    var a = Oe;
    return (
      (a = al(e, e === et ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      a === 0
        ? null
        : (tm(e, a, t),
          Sm(e, ut()),
          e.callbackNode != null && e.callbackNode === n ? xm.bind(null, e) : null)
    );
  }
  function Em(e, t) {
    if (ju()) return null;
    tm(e, t, !0);
  }
  function a0() {
    v0(function () {
      (Xe & 6) !== 0 ? An(ke, n0) : pm();
    });
  }
  function io() {
    if (Ca === 0) {
      var e = Sl;
      (e === 0 && ((e = tl), (tl <<= 1), (tl & 261888) === 0 && (tl = 256)), (Ca = e));
    }
    return Ca;
  }
  function bm(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Ji('' + e);
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
  function l0(e, t, n, a, i) {
    if (t === 'submit' && n && n.stateNode === i) {
      var u = bm((i[Ie] || null).action),
        E = a.submitter;
      E &&
        ((t = (t = E[Ie] || null) ? bm(t.formAction) : E.getAttribute('formAction')),
        t !== null && ((u = t), (E = null)));
      var T = new Ii('action', 'action', null, a, i);
      e.push({
        event: T,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ca !== 0) {
                  var j = E ? Cm(i, E) : new FormData(i);
                  Ts(n, { pending: !0, data: j, method: i.method, action: u }, null, j);
                }
              } else
                typeof u == 'function' &&
                  (T.preventDefault(),
                  (j = E ? Cm(i, E) : new FormData(i)),
                  Ts(n, { pending: !0, data: j, method: i.method, action: u }, u, j));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var uo = 0; uo < qr.length; uo++) {
    var ro = qr[uo],
      i0 = ro.toLowerCase(),
      u0 = ro[0].toUpperCase() + ro.slice(1);
    vn(i0, 'on' + u0);
  }
  (vn(Pc, 'onAnimationEnd'),
    vn(ef, 'onAnimationIteration'),
    vn(tf, 'onAnimationStart'),
    vn('dblclick', 'onDoubleClick'),
    vn('focusin', 'onFocus'),
    vn('focusout', 'onBlur'),
    vn(bg, 'onTransitionRun'),
    vn(Cg, 'onTransitionStart'),
    vn(Mg, 'onTransitionCancel'),
    vn(nf, 'onTransitionEnd'),
    il('onMouseEnter', ['mouseout', 'mouseover']),
    il('onMouseLeave', ['mouseout', 'mouseover']),
    il('onPointerEnter', ['pointerout', 'pointerover']),
    il('onPointerLeave', ['pointerout', 'pointerover']),
    Ua('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Ua(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Ua('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ua('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Ua(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Ua(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var bi =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    r0 = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(bi)
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
          for (var E = a.length - 1; 0 <= E; E--) {
            var T = a[E],
              j = T.instance,
              k = T.currentTarget;
            if (((T = T.listener), j !== u && i.isPropagationStopped())) break e;
            ((u = T), (i.currentTarget = k));
            try {
              u(i);
            } catch (ee) {
              tu(ee);
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
              tu(ee);
            }
            ((i.currentTarget = null), (u = j));
          }
      }
    }
  }
  function _e(e, t) {
    var n = t[St];
    n === void 0 && (n = t[St] = new Set());
    var a = e + '__bubble';
    n.has(a) || (Tm(t, e, 2, !1), n.add(a));
  }
  function so(e, t, n) {
    var a = 0;
    (t && (a |= 4), Tm(n, e, a, t));
  }
  var Vu = '_reactListening' + Math.random().toString(36).slice(2);
  function oo(e) {
    if (!e[Vu]) {
      ((e[Vu] = !0),
        yc.forEach(function (n) {
          n !== 'selectionchange' && (r0.has(n) || so(n, !1, e), so(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vu] || ((t[Vu] = !0), so('selectionchange', !1, t));
    }
  }
  function Tm(e, t, n, a) {
    switch (eh(t)) {
      case 2:
        var i = U0;
        break;
      case 8:
        i = L0;
        break;
      default:
        i = To;
    }
    ((n = i.bind(null, t, n, e)),
      (i = void 0),
      !Or || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
      a
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1));
  }
  function co(e, t, n, a, i) {
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
            if (((E = wn(T)), E === null)) return;
            if (((j = E.tag), j === 5 || j === 6 || j === 26 || j === 27)) {
              a = u = E;
              continue e;
            }
            T = T.parentNode;
          }
        }
        a = a.return;
      }
    Oc(function () {
      var k = u,
        ee = Ar(n),
        ne = [];
      e: {
        var J = af.get(e);
        if (J !== void 0) {
          var I = Ii,
            ce = e;
          switch (e) {
            case 'keypress':
              if ($i(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              I = eg;
              break;
            case 'focusin':
              ((ce = 'focus'), (I = Nr));
              break;
            case 'focusout':
              ((ce = 'blur'), (I = Nr));
              break;
            case 'beforeblur':
            case 'afterblur':
              I = Nr;
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
              I = zc;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              I = qv;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              I = ag;
              break;
            case Pc:
            case ef:
            case tf:
              I = Zv;
              break;
            case nf:
              I = ig;
              break;
            case 'scroll':
            case 'scrollend':
              I = Yv;
              break;
            case 'wheel':
              I = rg;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              I = kv;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              I = Bc;
              break;
            case 'toggle':
            case 'beforetoggle':
              I = og;
          }
          var ye = (t & 4) !== 0,
            $e = !ye && (e === 'scroll' || e === 'scrollend'),
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
                ((te = Ql(X, Q)), te != null && ye.push(Ci(X, te, K))),
              $e)
            )
              break;
            X = X.return;
          }
          0 < ye.length && ((J = new I(J, ce, null, n, ee)), ne.push({ event: J, listeners: ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((J = e === 'mouseover' || e === 'pointerover'),
            (I = e === 'mouseout' || e === 'pointerout'),
            J && n !== Rr && (ce = n.relatedTarget || n.fromElement) && (wn(ce) || ce[Pe]))
          )
            break e;
          if (
            (I || J) &&
            ((J =
              ee.window === ee
                ? ee
                : (J = ee.ownerDocument)
                  ? J.defaultView || J.parentWindow
                  : window),
            I
              ? ((ce = n.relatedTarget || n.toElement),
                (I = k),
                (ce = ce ? wn(ce) : null),
                ce !== null &&
                  (($e = l(ce)), (ye = ce.tag), ce !== $e || (ye !== 5 && ye !== 27 && ye !== 6)) &&
                  (ce = null))
              : ((I = null), (ce = k)),
            I !== ce)
          ) {
            if (
              ((ye = zc),
              (te = 'onMouseLeave'),
              (Q = 'onMouseEnter'),
              (X = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((ye = Bc), (te = 'onPointerLeave'), (Q = 'onPointerEnter'), (X = 'pointer')),
              ($e = I == null ? J : Xl(I)),
              (K = ce == null ? J : Xl(ce)),
              (J = new ye(te, X + 'leave', I, n, ee)),
              (J.target = $e),
              (J.relatedTarget = K),
              (te = null),
              wn(ee) === k &&
                ((ye = new ye(Q, X + 'enter', ce, n, ee)),
                (ye.target = K),
                (ye.relatedTarget = $e),
                (te = ye)),
              ($e = te),
              I && ce)
            )
              t: {
                for (ye = s0, Q = I, X = ce, K = 0, te = Q; te; te = ye(te)) K++;
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
            (I !== null && Rm(ne, J, I, ye, !1),
              ce !== null && $e !== null && Rm(ne, $e, ce, ye, !0));
          }
        }
        e: {
          if (
            ((J = k ? Xl(k) : window),
            (I = J.nodeName && J.nodeName.toLowerCase()),
            I === 'select' || (I === 'input' && J.type === 'file'))
          )
            var je = qc;
          else if (Yc(J))
            if (Xc) je = Sg;
            else {
              je = yg;
              var de = gg;
            }
          else
            ((I = J.nodeName),
              !I || I.toLowerCase() !== 'input' || (J.type !== 'checkbox' && J.type !== 'radio')
                ? k && Tr(k.elementType) && (je = qc)
                : (je = pg));
          if (je && (je = je(e, k))) {
            Vc(ne, je, n, ee);
            break e;
          }
          (de && de(e, J, k),
            e === 'focusout' &&
              k &&
              J.type === 'number' &&
              k.memoizedProps.value != null &&
              Mr(J, 'number', J.value));
        }
        switch (((de = k ? Xl(k) : window), e)) {
          case 'focusin':
            (Yc(de) || de.contentEditable === 'true') && ((fl = de), (Gr = k), (Il = null));
            break;
          case 'focusout':
            Il = Gr = fl = null;
            break;
          case 'mousedown':
            Yr = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Yr = !1), Wc(ne, n, ee));
            break;
          case 'selectionchange':
            if (Eg) break;
          case 'keydown':
          case 'keyup':
            Wc(ne, n, ee);
        }
        var Te;
        if (Ur)
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
          cl
            ? jc(e, n) && (De = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (De = 'onCompositionStart');
        (De &&
          (Uc &&
            n.locale !== 'ko' &&
            (cl || De !== 'onCompositionStart'
              ? De === 'onCompositionEnd' && cl && (Te = Dc())
              : ((ra = ee), (Dr = 'value' in ra ? ra.value : ra.textContent), (cl = !0))),
          (de = qu(k, De)),
          0 < de.length &&
            ((De = new Nc(De, e, null, n, ee)),
            ne.push({ event: De, listeners: de }),
            Te ? (De.data = Te) : ((Te = Gc(n)), Te !== null && (De.data = Te)))),
          (Te = fg ? dg(e, n) : mg(e, n)) &&
            ((De = qu(k, 'onBeforeInput')),
            0 < De.length &&
              ((de = new Nc('onBeforeInput', 'beforeinput', null, n, ee)),
              ne.push({ event: de, listeners: De }),
              (de.data = Te))),
          l0(ne, e, k, n, ee));
      }
      Mm(ne, t);
    });
  }
  function Ci(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function qu(e, t) {
    for (var n = t + 'Capture', a = []; e !== null; ) {
      var i = e,
        u = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          u === null ||
          ((i = Ql(e, n)),
          i != null && a.unshift(Ci(e, i, u)),
          (i = Ql(e, t)),
          i != null && a.push(Ci(e, i, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function s0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Rm(e, t, n, a, i) {
    for (var u = t._reactName, E = []; n !== null && n !== a; ) {
      var T = n,
        j = T.alternate,
        k = T.stateNode;
      if (((T = T.tag), j !== null && j === a)) break;
      ((T !== 5 && T !== 26 && T !== 27) ||
        k === null ||
        ((j = k),
        i
          ? ((k = Ql(n, u)), k != null && E.unshift(Ci(n, k, j)))
          : i || ((k = Ql(n, u)), k != null && E.push(Ci(n, k, j)))),
        (n = n.return));
    }
    E.length !== 0 && e.push({ event: t, listeners: E });
  }
  var o0 = /\r\n?/g,
    c0 = /\u0000|\uFFFD/g;
  function Am(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        o0,
        `
`
      )
      .replace(c0, '');
  }
  function _m(e, t) {
    return ((t = Am(t)), Am(e) === t);
  }
  function Fe(e, t, n, a, i, u) {
    switch (n) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || rl(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && rl(e, '' + a);
        break;
      case 'className':
        Ki(e, 'class', a);
        break;
      case 'tabIndex':
        Ki(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Ki(e, n, a);
        break;
      case 'style':
        Ac(e, a, u);
        break;
      case 'data':
        if (t !== 'object') {
          Ki(e, 'data', a);
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
        ((a = Ji('' + a)), e.setAttribute(n, a));
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
        ((a = Ji('' + a)), e.setAttribute(n, a));
        break;
      case 'onClick':
        a != null && (e.onclick = Bn);
        break;
      case 'onScroll':
        a != null && _e('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && _e('scrollend', e);
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
        ((n = Ji('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
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
        (_e('beforetoggle', e), _e('toggle', e), Zi(e, 'popover', a));
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
        Zi(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = jv.get(n) || n), Zi(e, n, a));
    }
  }
  function fo(e, t, n, a, i, u) {
    switch (n) {
      case 'style':
        Ac(e, a, u);
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
          ? rl(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && rl(e, '' + a);
        break;
      case 'onScroll':
        a != null && _e('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && _e('scrollend', e);
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
        if (!pc.hasOwnProperty(n))
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
            n in e ? (e[n] = a) : a === !0 ? e.setAttribute(n, '') : Zi(e, n, a);
          }
    }
  }
  function Tt(e, t, n) {
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
        (_e('error', e), _e('load', e));
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
                  Fe(e, t, u, E, n, null);
              }
          }
        (i && Fe(e, t, 'srcSet', n.srcSet, n, null), a && Fe(e, t, 'src', n.src, n, null));
        return;
      case 'input':
        _e('invalid', e);
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
                  Fe(e, t, a, ee, n, null);
              }
          }
        Cc(e, u, T, j, k, E, i, !1);
        return;
      case 'select':
        (_e('invalid', e), (a = E = u = null));
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
                Fe(e, t, i, T, n, null);
            }
        ((t = u),
          (n = E),
          (e.multiple = !!a),
          t != null ? ul(e, !!a, t, !1) : n != null && ul(e, !!a, n, !0));
        return;
      case 'textarea':
        (_e('invalid', e), (u = i = a = null));
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
                Fe(e, t, E, T, n, null);
            }
        Tc(e, a, i, u);
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
        (_e('beforetoggle', e), _e('toggle', e), _e('cancel', e), _e('close', e));
        break;
      case 'iframe':
      case 'object':
        _e('load', e);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < bi.length; a++) _e(bi[a], e);
        break;
      case 'image':
        (_e('error', e), _e('load', e));
        break;
      case 'details':
        _e('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (_e('error', e), _e('load', e));
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
                Fe(e, t, k, a, n, null);
            }
        return;
      default:
        if (Tr(t)) {
          for (ee in n)
            n.hasOwnProperty(ee) && ((a = n[ee]), a !== void 0 && fo(e, t, ee, a, n, void 0));
          return;
        }
    }
    for (T in n) n.hasOwnProperty(T) && ((a = n[T]), a != null && Fe(e, t, T, a, n, null));
  }
  function f0(e, t, n, a) {
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
        for (var J in a) {
          var I = a[J];
          if (((ne = n[J]), a.hasOwnProperty(J) && (I != null || ne != null)))
            switch (J) {
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
                E = I;
                break;
              case 'defaultValue':
                T = I;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (I != null) throw Error(y(137, t));
                break;
              default:
                I !== ne && Fe(e, t, J, I, a, ne);
            }
        }
        Cr(e, E, T, j, k, ee, u, i);
        return;
      case 'select':
        I = E = T = J = null;
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
                J = u;
                break;
              case 'defaultValue':
                T = u;
                break;
              case 'multiple':
                E = u;
              default:
                u !== j && Fe(e, t, i, u, a, j);
            }
        ((t = T),
          (n = E),
          (a = I),
          J != null
            ? ul(e, !!n, J, !1)
            : !!a != !!n && (t != null ? ul(e, !!n, t, !0) : ul(e, !!n, n ? [] : '', !1)));
        return;
      case 'textarea':
        I = J = null;
        for (T in n)
          if (((i = n[T]), n.hasOwnProperty(T) && i != null && !a.hasOwnProperty(T)))
            switch (T) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Fe(e, t, T, null, a, i);
            }
        for (E in a)
          if (((i = a[E]), (u = n[E]), a.hasOwnProperty(E) && (i != null || u != null)))
            switch (E) {
              case 'value':
                J = i;
                break;
              case 'defaultValue':
                I = i;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (i != null) throw Error(y(91));
                break;
              default:
                i !== u && Fe(e, t, E, i, a, u);
            }
        Mc(e, J, I);
        return;
      case 'option':
        for (var ce in n)
          if (((J = n[ce]), n.hasOwnProperty(ce) && J != null && !a.hasOwnProperty(ce)))
            switch (ce) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                Fe(e, t, ce, null, a, J);
            }
        for (j in a)
          if (((J = a[j]), (I = n[j]), a.hasOwnProperty(j) && J !== I && (J != null || I != null)))
            switch (j) {
              case 'selected':
                e.selected = J && typeof J != 'function' && typeof J != 'symbol';
                break;
              default:
                Fe(e, t, j, J, a, I);
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
            n.hasOwnProperty(ye) && J != null && !a.hasOwnProperty(ye) && Fe(e, t, ye, null, a, J));
        for (k in a)
          if (((J = a[k]), (I = n[k]), a.hasOwnProperty(k) && J !== I && (J != null || I != null)))
            switch (k) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (J != null) throw Error(y(137, t));
                break;
              default:
                Fe(e, t, k, J, a, I);
            }
        return;
      default:
        if (Tr(t)) {
          for (var $e in n)
            ((J = n[$e]),
              n.hasOwnProperty($e) &&
                J !== void 0 &&
                !a.hasOwnProperty($e) &&
                fo(e, t, $e, void 0, a, J));
          for (ee in a)
            ((J = a[ee]),
              (I = n[ee]),
              !a.hasOwnProperty(ee) ||
                J === I ||
                (J === void 0 && I === void 0) ||
                fo(e, t, ee, J, a, I));
          return;
        }
    }
    for (var Q in n)
      ((J = n[Q]),
        n.hasOwnProperty(Q) && J != null && !a.hasOwnProperty(Q) && Fe(e, t, Q, null, a, J));
    for (ne in a)
      ((J = a[ne]),
        (I = n[ne]),
        !a.hasOwnProperty(ne) || J === I || (J == null && I == null) || Fe(e, t, ne, J, a, I));
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
  function d0() {
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
        if (u && T && Om(E)) {
          for (E = 0, T = i.responseEnd, a += 1; a < n.length; a++) {
            var j = n[a],
              k = j.startTime;
            if (k > T) break;
            var ee = j.transferSize,
              ne = j.initiatorType;
            ee && Om(ne) && ((j = j.responseEnd), (E += ee * (j < T ? 1 : (T - k) / (j - k))));
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
  var mo = null,
    ho = null;
  function Xu(e) {
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
  function vo(e, t) {
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
  var go = null;
  function m0() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === go ? !1 : ((go = e), !0)) : ((go = null), !1);
  }
  var zm = typeof setTimeout == 'function' ? setTimeout : void 0,
    h0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Nm = typeof Promise == 'function' ? Promise : void 0,
    v0 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Nm < 'u'
          ? function (e) {
              return Nm.resolve(null).then(e).catch(g0);
            }
          : zm;
  function g0(e) {
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
            (e.removeChild(i), jl(t));
            return;
          }
          a--;
        } else if (n === '$' || n === '$?' || n === '$~' || n === '$!' || n === '&') a++;
        else if (n === 'html') Mi(e.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = e.ownerDocument.head), Mi(n));
          for (var u = n.firstChild; u; ) {
            var E = u.nextSibling,
              T = u.nodeName;
            (u[xn] ||
              T === 'SCRIPT' ||
              T === 'STYLE' ||
              (T === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(u),
              (u = E));
          }
        } else n === 'body' && Mi(e.ownerDocument.body);
      n = i;
    } while (n);
    jl(t);
  }
  function Um(e, t) {
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
  function yo(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (yo(n), ql(n));
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
  function y0(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (a) {
        if (!e[xn])
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
      if (((e = an(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function p0(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) ||
        ((e = an(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Lm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
        ((e = an(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function po(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function So(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
  }
  function S0(e, t) {
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
  function an(e) {
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
  function Hm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '/$' || n === '/&') {
          if (t === 0) return an(e.nextSibling);
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
    switch (((t = Xu(n)), e)) {
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
  function Mi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    ql(e);
  }
  var ln = new Map(),
    Ym = new Set();
  function Qu(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var $n = N.d;
  N.d = { f: x0, r: E0, D: b0, C: C0, L: M0, m: T0, X: A0, S: R0, M: _0 };
  function x0() {
    var e = $n.f(),
      t = Uu();
    return e || t;
  }
  function E0(e) {
    var t = zn(e);
    t !== null && t.tag === 5 && t.type === 'form' ? ad(t) : $n.r(e);
  }
  var Ul = typeof document > 'u' ? null : document;
  function Vm(e, t, n) {
    var a = Ul;
    if (a && typeof t == 'string' && t) {
      var i = $t(t);
      ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof n == 'string' && (i += '[crossorigin="' + n + '"]'),
        Ym.has(i) ||
          (Ym.add(i),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(i) === null &&
            ((t = a.createElement('link')), Tt(t, 'link', e), xt(t), a.head.appendChild(t))));
    }
  }
  function b0(e) {
    ($n.D(e), Vm('dns-prefetch', e, null));
  }
  function C0(e, t) {
    ($n.C(e, t), Vm('preconnect', e, t));
  }
  function M0(e, t, n) {
    $n.L(e, t, n);
    var a = Ul;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + $t(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((i += '[imagesrcset="' + $t(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (i += '[imagesizes="' + $t(n.imageSizes) + '"]'))
        : (i += '[href="' + $t(e) + '"]');
      var u = i;
      switch (t) {
        case 'style':
          u = Ll(e);
          break;
        case 'script':
          u = Hl(e);
      }
      ln.has(u) ||
        ((e = h(
          { rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t },
          n
        )),
        ln.set(u, e),
        a.querySelector(i) !== null ||
          (t === 'style' && a.querySelector(Ti(u))) ||
          (t === 'script' && a.querySelector(Ri(u))) ||
          ((t = a.createElement('link')), Tt(t, 'link', e), xt(t), a.head.appendChild(t)));
    }
  }
  function T0(e, t) {
    $n.m(e, t);
    var n = Ul;
    if (n && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        i = 'link[rel="modulepreload"][as="' + $t(a) + '"][href="' + $t(e) + '"]',
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
        !ln.has(u) &&
        ((e = h({ rel: 'modulepreload', href: e }, t)), ln.set(u, e), n.querySelector(i) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(Ri(u))) return;
        }
        ((a = n.createElement('link')), Tt(a, 'link', e), xt(a), n.head.appendChild(a));
      }
    }
  }
  function R0(e, t, n) {
    $n.S(e, t, n);
    var a = Ul;
    if (a && e) {
      var i = ll(a).hoistableStyles,
        u = Ll(e);
      t = t || 'default';
      var E = i.get(u);
      if (!E) {
        var T = { loading: 0, preload: null };
        if ((E = a.querySelector(Ti(u)))) T.loading = 5;
        else {
          ((e = h({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = ln.get(u)) && Eo(e, n));
          var j = (E = a.createElement('link'));
          (xt(j),
            Tt(j, 'link', e),
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
            Zu(E, t, a));
        }
        ((E = { type: 'stylesheet', instance: E, count: 1, state: T }), i.set(u, E));
      }
    }
  }
  function A0(e, t) {
    $n.X(e, t);
    var n = Ul;
    if (n && e) {
      var a = ll(n).hoistableScripts,
        i = Hl(e),
        u = a.get(i);
      u ||
        ((u = n.querySelector(Ri(i))),
        u ||
          ((e = h({ src: e, async: !0 }, t)),
          (t = ln.get(i)) && bo(e, t),
          (u = n.createElement('script')),
          xt(u),
          Tt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(i, u));
    }
  }
  function _0(e, t) {
    $n.M(e, t);
    var n = Ul;
    if (n && e) {
      var a = ll(n).hoistableScripts,
        i = Hl(e),
        u = a.get(i);
      u ||
        ((u = n.querySelector(Ri(i))),
        u ||
          ((e = h({ src: e, async: !0, type: 'module' }, t)),
          (t = ln.get(i)) && bo(e, t),
          (u = n.createElement('script')),
          xt(u),
          Tt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(i, u));
    }
  }
  function qm(e, t, n, a) {
    var i = (i = oe.current) ? Qu(i) : null;
    if (!i) throw Error(y(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = Ll(n.href)),
            (n = ll(i).hoistableStyles),
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
          var u = ll(i).hoistableStyles,
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
              (u = i.querySelector(Ti(e))) && !u._p && ((E.instance = u), (E.state.loading = 5)),
              ln.has(e) ||
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
                ln.set(e, n),
                u || O0(i, e, n, E.state))),
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
            ? ((t = Hl(n)),
              (n = ll(i).hoistableScripts),
              (a = n.get(t)),
              a || ((a = { type: 'script', instance: null, count: 0, state: null }), n.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(y(444, e));
    }
  }
  function Ll(e) {
    return 'href="' + $t(e) + '"';
  }
  function Ti(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Xm(e) {
    return h({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function O0(e, t, n, a) {
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
        Tt(t, 'link', n),
        xt(t),
        e.head.appendChild(t));
  }
  function Hl(e) {
    return '[src="' + $t(e) + '"]';
  }
  function Ri(e) {
    return 'script[async]' + e;
  }
  function Qm(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + $t(n.href) + '"]');
          if (a) return ((t.instance = a), xt(a), a);
          var i = h({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            xt(a),
            Tt(a, 'style', i),
            Zu(a, n.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          i = Ll(n.href);
          var u = e.querySelector(Ti(i));
          if (u) return ((t.state.loading |= 4), (t.instance = u), xt(u), u);
          ((a = Xm(n)),
            (i = ln.get(i)) && Eo(a, i),
            (u = (e.ownerDocument || e).createElement('link')),
            xt(u));
          var E = u;
          return (
            (E._p = new Promise(function (T, j) {
              ((E.onload = T), (E.onerror = j));
            })),
            Tt(u, 'link', a),
            (t.state.loading |= 4),
            Zu(u, n.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = Hl(n.src)),
            (i = e.querySelector(Ri(u)))
              ? ((t.instance = i), xt(i), i)
              : ((a = n),
                (i = ln.get(u)) && ((a = h({}, n)), bo(a, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement('script')),
                xt(i),
                Tt(i, 'link', a),
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
        ((a = t.instance), (t.state.loading |= 4), Zu(a, n.precedence, e));
    return t.instance;
  }
  function Zu(e, t, n) {
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
  function Eo(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function bo(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Ku = null;
  function Zm(e, t, n) {
    if (Ku === null) {
      var a = new Map(),
        i = (Ku = new Map());
      i.set(n, a);
    } else ((i = Ku), (a = i.get(n)), a || ((a = new Map()), i.set(n, a)));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var u = n[i];
      if (
        !(u[xn] || u[Re] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
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
  function Km(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null));
  }
  function D0(e, t, n) {
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
  function w0(e, t, n, a) {
    if (
      n.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var i = Ll(a.href),
          u = t.querySelector(Ti(i));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = ku.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = u),
            xt(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = Xm(a)),
          (i = ln.get(i)) && Eo(a, i),
          (u = u.createElement('link')),
          xt(u));
        var E = u;
        ((E._p = new Promise(function (T, j) {
          ((E.onload = T), (E.onerror = j));
        })),
          Tt(u, 'link', a),
          (n.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = ku.bind(e)),
          t.addEventListener('load', n),
          t.addEventListener('error', n)));
    }
  }
  var Co = 0;
  function z0(e, t) {
    return (
      e.stylesheets && e.count === 0 && Fu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && Fu(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Co === 0 && (Co = 62500 * d0());
            var i = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 && (e.stylesheets && Fu(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > Co ? 50 : 800) + t
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
  function ku() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Fu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Ju = null;
  function Fu(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (Ju = new Map()), t.forEach(N0, e), (Ju = null), ku.call(e)));
  }
  function N0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Ju.get(e);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), Ju.set(e, n));
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
        (a = ku.bind(this)),
        i.addEventListener('load', a),
        i.addEventListener('error', a),
        u
          ? u.parentNode.insertBefore(i, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Ai = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0,
  };
  function B0(e, t, n, a, i, u, E, T, j) {
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
      (this.onRecoverableError = E),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = j),
      (this.incompleteTransitions = new Map()));
  }
  function Jm(e, t, n, a, i, u, E, T, j, k, ee, ne) {
    return (
      (e = new B0(e, t, n, E, j, k, ee, ne, T)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = Vt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = ts()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: n, cache: t }),
      is(u),
      e
    );
  }
  function Fm(e) {
    return e ? ((e = hl), e) : hl;
  }
  function $m(e, t, n, a, i, u) {
    ((i = Fm(i)),
      a.context === null ? (a.context = i) : (a.pendingContext = i),
      (a = ma(t)),
      (a.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (n = ha(e, a, t)),
      n !== null && (jt(n, e, t), ii(n, e, t)));
  }
  function Wm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Mo(e, t) {
    (Wm(e, t), (e = e.alternate) && Wm(e, t));
  }
  function Im(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ga(e, 67108864);
      (t !== null && jt(t, e, 67108864), Mo(e, 67108864));
    }
  }
  function Pm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Kt();
      t = ze(t);
      var n = Ga(e, t);
      (n !== null && jt(n, e, t), Mo(e, t));
    }
  }
  var $u = !0;
  function U0(e, t, n, a) {
    var i = A.T;
    A.T = null;
    var u = N.p;
    try {
      ((N.p = 2), To(e, t, n, a));
    } finally {
      ((N.p = u), (A.T = i));
    }
  }
  function L0(e, t, n, a) {
    var i = A.T;
    A.T = null;
    var u = N.p;
    try {
      ((N.p = 8), To(e, t, n, a));
    } finally {
      ((N.p = u), (A.T = i));
    }
  }
  function To(e, t, n, a) {
    if ($u) {
      var i = Ro(a);
      if (i === null) (co(e, t, a, Wu, n), th(e, a));
      else if (j0(i, e, t, n, a)) a.stopPropagation();
      else if ((th(e, a), t & 4 && -1 < H0.indexOf(e))) {
        for (; i !== null; ) {
          var u = zn(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var E = dn(u.pendingLanes);
                  if (E !== 0) {
                    var T = u;
                    for (T.pendingLanes |= 2, T.entangledLanes |= 2; E; ) {
                      var j = 1 << (31 - _t(E));
                      ((T.entanglements[1] |= j), (E &= ~j));
                    }
                    (Mn(u), (Xe & 6) === 0 && ((Nu = ut() + 500), Ei(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((T = Ga(u, 2)), T !== null && jt(T, u, 2), Uu(), Mo(u, 2));
            }
          if (((u = Ro(a)), u === null && co(e, t, a, Wu, n), u === i)) break;
          i = u;
        }
        i !== null && a.stopPropagation();
      } else co(e, t, a, null, n);
    }
  }
  function Ro(e) {
    return ((e = Ar(e)), Ao(e));
  }
  var Wu = null;
  function Ao(e) {
    if (((Wu = null), (e = wn(e)), e !== null)) {
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
    return ((Wu = e), null);
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
        switch (zt()) {
          case ke:
            return 2;
          case el:
            return 8;
          case Jt:
          case _n:
            return 32;
          case On:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var _o = !1,
    Ta = null,
    Ra = null,
    Aa = null,
    _i = new Map(),
    Oi = new Map(),
    _a = [],
    H0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function th(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Ta = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Ra = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Aa = null;
        break;
      case 'pointerover':
      case 'pointerout':
        _i.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Oi.delete(t.pointerId);
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
        t !== null && ((t = zn(t)), t !== null && Im(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function j0(e, t, n, a, i) {
    switch (t) {
      case 'focusin':
        return ((Ta = Di(Ta, e, t, n, a, i)), !0);
      case 'dragenter':
        return ((Ra = Di(Ra, e, t, n, a, i)), !0);
      case 'mouseover':
        return ((Aa = Di(Aa, e, t, n, a, i)), !0);
      case 'pointerover':
        var u = i.pointerId;
        return (_i.set(u, Di(_i.get(u) || null, e, t, n, a, i)), !0);
      case 'gotpointercapture':
        return ((u = i.pointerId), Oi.set(u, Di(Oi.get(u) || null, e, t, n, a, i)), !0);
    }
    return !1;
  }
  function nh(e) {
    var t = wn(e.target);
    if (t !== null) {
      var n = l(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = c(n)), t !== null)) {
            ((e.blockedOn = t),
              nt(e.priority, function () {
                Pm(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              nt(e.priority, function () {
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
  function Iu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ro(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((Rr = a), n.target.dispatchEvent(a), (Rr = null));
      } else return ((t = zn(n)), t !== null && Im(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function ah(e, t, n) {
    Iu(e) && n.delete(t);
  }
  function G0() {
    ((_o = !1),
      Ta !== null && Iu(Ta) && (Ta = null),
      Ra !== null && Iu(Ra) && (Ra = null),
      Aa !== null && Iu(Aa) && (Aa = null),
      _i.forEach(ah),
      Oi.forEach(ah));
  }
  function Pu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      _o || ((_o = !0), s.unstable_scheduleCallback(s.unstable_NormalPriority, G0)));
  }
  var er = null;
  function lh(e) {
    er !== e &&
      ((er = e),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        er === e && (er = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            a = e[t + 1],
            i = e[t + 2];
          if (typeof a != 'function') {
            if (Ao(a || n) === null) continue;
            break;
          }
          var u = zn(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Ts(u, { pending: !0, data: i, method: n.method, action: a }, a, i));
        }
      }));
  }
  function jl(e) {
    function t(j) {
      return Pu(j, e);
    }
    (Ta !== null && Pu(Ta, e),
      Ra !== null && Pu(Ra, e),
      Aa !== null && Pu(Aa, e),
      _i.forEach(t),
      Oi.forEach(t));
    for (var n = 0; n < _a.length; n++) {
      var a = _a[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < _a.length && ((n = _a[0]), n.blockedOn === null); )
      (nh(n), n.blockedOn === null && _a.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var i = n[a],
          u = n[a + 1],
          E = i[Ie] || null;
        if (typeof u == 'function') E || lh(n);
        else if (E) {
          var T = null;
          if (u && u.hasAttribute('formAction')) {
            if (((i = u), (E = u[Ie] || null))) T = E.formAction;
            else if (Ao(i) !== null) continue;
          } else T = E.action;
          (typeof T == 'function' ? (n[a + 1] = T) : (n.splice(a, 3), (a -= 3)), lh(n));
        }
      }
  }
  function ih() {
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
  function Oo(e) {
    this._internalRoot = e;
  }
  ((tr.prototype.render = Oo.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(y(409));
      var n = t.current,
        a = Kt();
      $m(n, a, e, t, null, null);
    }),
    (tr.prototype.unmount = Oo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          ($m(e.current, 2, null, e, null, null), Uu(), (t[Pe] = null));
        }
      }));
  function tr(e) {
    this._internalRoot = e;
  }
  tr.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = He();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < _a.length && t !== 0 && t < _a[n].priority; n++);
      (_a.splice(n, 0, e), n === 0 && nh(e));
    }
  };
  var uh = b.version;
  if (uh !== '19.2.5') throw Error(y(527, uh, '19.2.5'));
  N.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(y(188))
        : ((e = Object.keys(e).join(',')), Error(y(268, e)));
    return ((e = v(t)), (e = e !== null ? m(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var Y0 = {
    bundleType: 0,
    version: '19.2.5',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: A,
    reconcilerVersion: '19.2.5',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var nr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!nr.isDisabled && nr.supportsFiber)
      try {
        ((ua = nr.inject(Y0)), (Rt = nr));
      } catch {}
  }
  return (
    (zi.createRoot = function (e, t) {
      if (!o(e)) throw Error(y(299));
      var n = !1,
        a = '',
        i = md,
        u = hd,
        E = vd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (E = t.onRecoverableError)),
        (t = Jm(e, 1, !1, null, null, n, a, null, i, u, E, ih)),
        (e[Pe] = t.current),
        oo(e),
        new Oo(t)
      );
    }),
    (zi.hydrateRoot = function (e, t, n) {
      if (!o(e)) throw Error(y(299));
      var a = !1,
        i = '',
        u = md,
        E = hd,
        T = vd,
        j = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (E = n.onCaughtError),
          n.onRecoverableError !== void 0 && (T = n.onRecoverableError),
          n.formState !== void 0 && (j = n.formState)),
        (t = Jm(e, 1, !0, t, n ?? null, a, i, j, u, E, T, ih)),
        (t.context = Fm(null)),
        (n = t.current),
        (a = Kt()),
        (a = ze(a)),
        (i = ma(a)),
        (i.callback = null),
        ha(n, i, a),
        (n = a),
        (t.current.lanes = n),
        ge(t, n),
        Mn(t),
        (e[Pe] = t.current),
        oo(e),
        new tr(t)
      );
    }),
    (zi.version = '19.2.5'),
    zi
  );
}
var yh;
function W0() {
  if (yh) return wo.exports;
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
      } catch (b) {
        console.error(b);
      }
  }
  return (s(), (wo.exports = $0()), wo.exports);
}
var I0 = W0(),
  B = ac();
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
function P0(s = {}) {
  function b(y, o) {
    var v;
    let l = (v = o.state) == null ? void 0 : v.masked,
      { pathname: c, search: d, hash: f } = l || y.location;
    return Jo(
      '',
      { pathname: c, search: d, hash: f },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default',
      l
        ? { pathname: y.location.pathname, search: y.location.search, hash: y.location.hash }
        : void 0
    );
  }
  function x(y, o) {
    return typeof o == 'string' ? o : Yi(o);
  }
  return ty(b, x, null, s);
}
function rt(s, b) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(b);
}
function Rn(s, b) {
  if (!s) {
    typeof console < 'u' && console.warn(b);
    try {
      throw new Error(b);
    } catch {}
  }
}
function ey() {
  return Math.random().toString(36).substring(2, 10);
}
function xh(s, b) {
  return {
    usr: s.state,
    key: s.key,
    idx: b,
    masked: s.unstable_mask ? { pathname: s.pathname, search: s.search, hash: s.hash } : void 0,
  };
}
function Jo(s, b, x = null, y, o) {
  return {
    pathname: typeof s == 'string' ? s : s.pathname,
    search: '',
    hash: '',
    ...(typeof b == 'string' ? Yl(b) : b),
    state: x,
    key: (b && b.key) || y || ey(),
    unstable_mask: o,
  };
}
function Yi({ pathname: s = '/', search: b = '', hash: x = '' }) {
  return (
    b && b !== '?' && (s += b.charAt(0) === '?' ? b : '?' + b),
    x && x !== '#' && (s += x.charAt(0) === '#' ? x : '#' + x),
    s
  );
}
function Yl(s) {
  let b = {};
  if (s) {
    let x = s.indexOf('#');
    x >= 0 && ((b.hash = s.substring(x)), (s = s.substring(0, x)));
    let y = s.indexOf('?');
    (y >= 0 && ((b.search = s.substring(y)), (s = s.substring(0, y))), s && (b.pathname = s));
  }
  return b;
}
function ty(s, b, x, y = {}) {
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
    let w = Sh(C) ? C : Jo(p.location, C, R);
    v = m() + 1;
    let L = xh(w, v),
      G = p.createHref(w.unstable_mask || w);
    try {
      c.pushState(L, '', G);
    } catch (M) {
      if (M instanceof DOMException && M.name === 'DataCloneError') throw M;
      o.location.assign(G);
    }
    l && f && f({ action: d, location: p.location, delta: 1 });
  }
  function r(C, R) {
    d = 'REPLACE';
    let w = Sh(C) ? C : Jo(p.location, C, R);
    v = m();
    let L = xh(w, v),
      G = p.createHref(w.unstable_mask || w);
    (c.replaceState(L, '', G), l && f && f({ action: d, location: p.location, delta: 0 }));
  }
  function S(C) {
    return ny(C);
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
        o.addEventListener(ph, h),
        (f = C),
        () => {
          (o.removeEventListener(ph, h), (f = null));
        }
      );
    },
    createHref(C) {
      return b(o, C);
    },
    createURL: S,
    encodeLocation(C) {
      let R = S(C);
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
function ny(s, b = !1) {
  let x = 'http://localhost';
  (typeof window < 'u' &&
    (x = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    rt(x, 'No window.location.(origin|href) available to create URL'));
  let y = typeof s == 'string' ? s : Yi(s);
  return ((y = y.replace(/ $/, '%20')), !b && y.startsWith('//') && (y = x + y), new URL(y, x));
}
function Gh(s, b, x = '/') {
  return ay(s, b, x, !1);
}
function ay(s, b, x, y) {
  let o = typeof b == 'string' ? Yl(b) : b,
    l = aa(o.pathname || '/', x);
  if (l == null) return null;
  let c = Yh(s);
  ly(c);
  let d = null;
  for (let f = 0; d == null && f < c.length; ++f) {
    let v = vy(l);
    d = my(c[f], v, y);
  }
  return d;
}
function Yh(s, b = [], x = [], y = '', o = !1) {
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
    let h = pn([y, m.relativePath]),
      g = x.concat(m);
    (c.children &&
      c.children.length > 0 &&
      (rt(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${h}".`
      ),
      Yh(c.children, b, g, h, f)),
      !(c.path == null && !c.index) && b.push({ path: h, score: fy(h, c.index), routesMeta: g }));
  };
  return (
    s.forEach((c, d) => {
      var f;
      if (c.path === '' || !((f = c.path) != null && f.includes('?'))) l(c, d);
      else for (let v of Vh(c.path)) l(c, d, !0, v);
    }),
    b
  );
}
function Vh(s) {
  let b = s.split('/');
  if (b.length === 0) return [];
  let [x, ...y] = b,
    o = x.endsWith('?'),
    l = x.replace(/\?$/, '');
  if (y.length === 0) return o ? [l, ''] : [l];
  let c = Vh(y.join('/')),
    d = [];
  return (
    d.push(...c.map((f) => (f === '' ? l : [l, f].join('/')))),
    o && d.push(...c),
    d.map((f) => (s.startsWith('/') && f === '' ? '/' : f))
  );
}
function ly(s) {
  s.sort((b, x) =>
    b.score !== x.score
      ? x.score - b.score
      : dy(
          b.routesMeta.map((y) => y.childrenIndex),
          x.routesMeta.map((y) => y.childrenIndex)
        )
  );
}
var iy = /^:[\w-]+$/,
  uy = 3,
  ry = 2,
  sy = 1,
  oy = 10,
  cy = -2,
  Eh = (s) => s === '*';
function fy(s, b) {
  let x = s.split('/'),
    y = x.length;
  return (
    x.some(Eh) && (y += cy),
    b && (y += ry),
    x.filter((o) => !Eh(o)).reduce((o, l) => o + (iy.test(l) ? uy : l === '' ? sy : oy), y)
  );
}
function dy(s, b) {
  return s.length === b.length && s.slice(0, -1).every((y, o) => y === b[o])
    ? s[s.length - 1] - b[b.length - 1]
    : 0;
}
function my(s, b, x = !1) {
  let { routesMeta: y } = s,
    o = {},
    l = '/',
    c = [];
  for (let d = 0; d < y.length; ++d) {
    let f = y[d],
      v = d === y.length - 1,
      m = l === '/' ? b : b.slice(l.length) || '/',
      h = or({ path: f.relativePath, caseSensitive: f.caseSensitive, end: v }, m),
      g = f.route;
    if (
      (!h &&
        v &&
        x &&
        !y[y.length - 1].route.index &&
        (h = or({ path: f.relativePath, caseSensitive: f.caseSensitive, end: !1 }, m)),
      !h)
    )
      return null;
    (Object.assign(o, h.params),
      c.push({
        params: o,
        pathname: pn([l, h.pathname]),
        pathnameBase: Sy(pn([l, h.pathnameBase])),
        route: g,
      }),
      h.pathnameBase !== '/' && (l = pn([l, h.pathnameBase])));
  }
  return c;
}
function or(s, b) {
  typeof s == 'string' && (s = { path: s, caseSensitive: !1, end: !0 });
  let [x, y] = hy(s.path, s.caseSensitive, s.end),
    o = b.match(x);
  if (!o) return null;
  let l = o[0],
    c = l.replace(/(.)\/+$/, '$1'),
    d = o.slice(1);
  return {
    params: y.reduce((v, { paramName: m, isOptional: h }, g) => {
      if (m === '*') {
        let S = d[g] || '';
        c = l.slice(0, l.length - S.length).replace(/(.)\/+$/, '$1');
      }
      const r = d[g];
      return (h && !r ? (v[m] = void 0) : (v[m] = (r || '').replace(/%2F/g, '/')), v);
    }, {}),
    pathname: l,
    pathnameBase: c,
    pattern: s,
  };
}
function hy(s, b = !1, x = !0) {
  Rn(
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
      : x
        ? (o += '\\/*$')
        : s !== '' && s !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, b ? void 0 : 'i'), y]
  );
}
function vy(s) {
  try {
    return s
      .split('/')
      .map((b) => decodeURIComponent(b).replace(/\//g, '%2F'))
      .join('/');
  } catch (b) {
    return (
      Rn(
        !1,
        `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${b}).`
      ),
      s
    );
  }
}
function aa(s, b) {
  if (b === '/') return s;
  if (!s.toLowerCase().startsWith(b.toLowerCase())) return null;
  let x = b.endsWith('/') ? b.length - 1 : b.length,
    y = s.charAt(x);
  return y && y !== '/' ? null : s.slice(x) || '/';
}
var gy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function yy(s, b = '/') {
  let { pathname: x, search: y = '', hash: o = '' } = typeof s == 'string' ? Yl(s) : s,
    l;
  return (
    x ? ((x = Xh(x)), x.startsWith('/') ? (l = bh(x.substring(1), '/')) : (l = bh(x, b))) : (l = b),
    { pathname: l, search: xy(y), hash: Ey(o) }
  );
}
function bh(s, b) {
  let x = cr(b).split('/');
  return (
    s.split('/').forEach((o) => {
      o === '..' ? x.length > 1 && x.pop() : o !== '.' && x.push(o);
    }),
    x.length > 1 ? x.join('/') : '/'
  );
}
function Lo(s, b, x, y) {
  return `Cannot include a '${s}' character in a manually specified \`to.${b}\` field [${JSON.stringify(y)}].  Please separate it out to the \`to.${x}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function py(s) {
  return s.filter((b, x) => x === 0 || (b.route.path && b.route.path.length > 0));
}
function qh(s) {
  let b = py(s);
  return b.map((x, y) => (y === b.length - 1 ? x.pathname : x.pathnameBase));
}
function lc(s, b, x, y = !1) {
  let o;
  typeof s == 'string'
    ? (o = Yl(s))
    : ((o = { ...s }),
      rt(!o.pathname || !o.pathname.includes('?'), Lo('?', 'pathname', 'search', o)),
      rt(!o.pathname || !o.pathname.includes('#'), Lo('#', 'pathname', 'hash', o)),
      rt(!o.search || !o.search.includes('#'), Lo('#', 'search', 'hash', o)));
  let l = s === '' || o.pathname === '',
    c = l ? '/' : o.pathname,
    d;
  if (c == null) d = x;
  else {
    let h = b.length - 1;
    if (!y && c.startsWith('..')) {
      let g = c.split('/');
      for (; g[0] === '..'; ) (g.shift(), (h -= 1));
      o.pathname = g.join('/');
    }
    d = h >= 0 ? b[h] : '/';
  }
  let f = yy(o, d),
    v = c && c !== '/' && c.endsWith('/'),
    m = (l || c === '.') && x.endsWith('/');
  return (!f.pathname.endsWith('/') && (v || m) && (f.pathname += '/'), f);
}
var Xh = (s) => s.replace(/\/\/+/g, '/'),
  pn = (s) => Xh(s.join('/')),
  cr = (s) => s.replace(/\/+$/, ''),
  Sy = (s) => cr(s).replace(/^\/*/, '/'),
  xy = (s) => (!s || s === '?' ? '' : s.startsWith('?') ? s : '?' + s),
  Ey = (s) => (!s || s === '#' ? '' : s.startsWith('#') ? s : '#' + s),
  by = class {
    constructor(s, b, x, y = !1) {
      ((this.status = s),
        (this.statusText = b || ''),
        (this.internal = y),
        x instanceof Error ? ((this.data = x.toString()), (this.error = x)) : (this.data = x));
    }
  };
function Cy(s) {
  return (
    s != null &&
    typeof s.status == 'number' &&
    typeof s.statusText == 'string' &&
    typeof s.internal == 'boolean' &&
    'data' in s
  );
}
function My(s) {
  let b = s.map((x) => x.route.path).filter(Boolean);
  return pn(b) || '/';
}
var Qh =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function Zh(s, b) {
  let x = s;
  if (typeof x != 'string' || !gy.test(x)) return { absoluteURL: void 0, isExternal: !1, to: x };
  let y = x,
    o = !1;
  if (Qh)
    try {
      let l = new URL(window.location.href),
        c = x.startsWith('//') ? new URL(l.protocol + x) : new URL(x),
        d = aa(c.pathname, b);
      c.origin === l.origin && d != null ? (x = d + c.search + c.hash) : (o = !0);
    } catch {
      Rn(
        !1,
        `<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: y, isExternal: o, to: x };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var Kh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Kh);
var Ty = ['GET', ...Kh];
new Set(Ty);
var Vl = B.createContext(null);
Vl.displayName = 'DataRouter';
var dr = B.createContext(null);
dr.displayName = 'DataRouterState';
var kh = B.createContext(!1);
function Ry() {
  return B.useContext(kh);
}
var Jh = B.createContext({ isTransitioning: !1 });
Jh.displayName = 'ViewTransition';
var Ay = B.createContext(new Map());
Ay.displayName = 'Fetchers';
var _y = B.createContext(null);
_y.displayName = 'Await';
var sn = B.createContext(null);
sn.displayName = 'Navigation';
var Vi = B.createContext(null);
Vi.displayName = 'Location';
var la = B.createContext({ outlet: null, matches: [], isDataRoute: !1 });
la.displayName = 'Route';
var ic = B.createContext(null);
ic.displayName = 'RouteError';
var Fh = 'REACT_ROUTER_ERROR',
  Oy = 'REDIRECT',
  Dy = 'ROUTE_ERROR_RESPONSE';
function wy(s) {
  if (s.startsWith(`${Fh}:${Oy}:{`))
    try {
      let b = JSON.parse(s.slice(28));
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
function zy(s) {
  if (s.startsWith(`${Fh}:${Dy}:{`))
    try {
      let b = JSON.parse(s.slice(40));
      if (
        typeof b == 'object' &&
        b &&
        typeof b.status == 'number' &&
        typeof b.statusText == 'string'
      )
        return new by(b.status, b.statusText, b.data);
    } catch {}
}
function Ny(s, { relative: b } = {}) {
  rt(qi(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: x, navigator: y } = B.useContext(sn),
    { hash: o, pathname: l, search: c } = Xi(s, { relative: b }),
    d = l;
  return (
    x !== '/' && (d = l === '/' ? x : pn([x, l])),
    y.createHref({ pathname: d, search: c, hash: o })
  );
}
function qi() {
  return B.useContext(Vi) != null;
}
function ia() {
  return (
    rt(qi(), 'useLocation() may be used only in the context of a <Router> component.'),
    B.useContext(Vi).location
  );
}
var $h =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Wh(s) {
  B.useContext(sn).static || B.useLayoutEffect(s);
}
function By() {
  let { isDataRoute: s } = B.useContext(la);
  return s ? ky() : Uy();
}
function Uy() {
  rt(qi(), 'useNavigate() may be used only in the context of a <Router> component.');
  let s = B.useContext(Vl),
    { basename: b, navigator: x } = B.useContext(sn),
    { matches: y } = B.useContext(la),
    { pathname: o } = ia(),
    l = JSON.stringify(qh(y)),
    c = B.useRef(!1);
  return (
    Wh(() => {
      c.current = !0;
    }),
    B.useCallback(
      (f, v = {}) => {
        if ((Rn(c.current, $h), !c.current)) return;
        if (typeof f == 'number') {
          x.go(f);
          return;
        }
        let m = lc(f, JSON.parse(l), o, v.relative === 'path');
        (s == null && b !== '/' && (m.pathname = m.pathname === '/' ? b : pn([b, m.pathname])),
          (v.replace ? x.replace : x.push)(m, v.state, v));
      },
      [b, x, l, o, s]
    )
  );
}
B.createContext(null);
function Xi(s, { relative: b } = {}) {
  let { matches: x } = B.useContext(la),
    { pathname: y } = ia(),
    o = JSON.stringify(qh(x));
  return B.useMemo(() => lc(s, JSON.parse(o), y, b === 'path'), [s, o, y, b]);
}
function Ly(s, b) {
  return Ih(s, b);
}
function Ih(s, b, x) {
  var C;
  rt(qi(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: y } = B.useContext(sn),
    { matches: o } = B.useContext(la),
    l = o[o.length - 1],
    c = l ? l.params : {},
    d = l ? l.pathname : '/',
    f = l ? l.pathnameBase : '/',
    v = l && l.route;
  {
    let R = (v && v.path) || '';
    ev(
      d,
      !v || R.endsWith('*') || R.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === '/' ? '*' : `${R}/*`}">.`
    );
  }
  let m = ia(),
    h;
  if (b) {
    let R = typeof b == 'string' ? Yl(b) : b;
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
  let S = Gh(s, { pathname: r });
  (Rn(v || S != null, `No routes matched location "${h.pathname}${h.search}${h.hash}" `),
    Rn(
      S == null ||
        S[S.length - 1].route.element !== void 0 ||
        S[S.length - 1].route.Component !== void 0 ||
        S[S.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let p = Vy(
    S &&
      S.map((R) =>
        Object.assign({}, R, {
          params: Object.assign({}, c, R.params),
          pathname: pn([
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
              : pn([
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
    x
  );
  return b && p
    ? B.createElement(
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
              ...h,
            },
            navigationType: 'POP',
          },
        },
        p
      )
    : p;
}
function Hy() {
  let s = Ky(),
    b = Cy(s) ? `${s.status} ${s.statusText}` : s instanceof Error ? s.message : JSON.stringify(s),
    x = s instanceof Error ? s.stack : null,
    y = 'rgba(200,200,200, 0.5)',
    o = { padding: '0.5rem', backgroundColor: y },
    l = { padding: '2px 4px', backgroundColor: y },
    c = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', s),
    (c = B.createElement(
      B.Fragment,
      null,
      B.createElement('p', null, '💿 Hey developer 👋'),
      B.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        B.createElement('code', { style: l }, 'ErrorBoundary'),
        ' or',
        ' ',
        B.createElement('code', { style: l }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    B.createElement(
      B.Fragment,
      null,
      B.createElement('h2', null, 'Unexpected Application Error!'),
      B.createElement('h3', { style: { fontStyle: 'italic' } }, b),
      x ? B.createElement('pre', { style: o }, x) : null,
      c
    )
  );
}
var jy = B.createElement(Hy, null),
  Ph = class extends B.Component {
    constructor(s) {
      (super(s),
        (this.state = { location: s.location, revalidation: s.revalidation, error: s.error }));
    }
    static getDerivedStateFromError(s) {
      return { error: s };
    }
    static getDerivedStateFromProps(s, b) {
      return b.location !== s.location || (b.revalidation !== 'idle' && s.revalidation === 'idle')
        ? { error: s.error, location: s.location, revalidation: s.revalidation }
        : {
            error: s.error !== void 0 ? s.error : b.error,
            location: b.location,
            revalidation: s.revalidation || b.revalidation,
          };
    }
    componentDidCatch(s, b) {
      this.props.onError
        ? this.props.onError(s, b)
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
        const x = zy(s.digest);
        x && (s = x);
      }
      let b =
        s !== void 0
          ? B.createElement(
              la.Provider,
              { value: this.props.routeContext },
              B.createElement(ic.Provider, { value: s, children: this.props.component })
            )
          : this.props.children;
      return this.context ? B.createElement(Gy, { error: s }, b) : b;
    }
  };
Ph.contextType = kh;
var Ho = new WeakMap();
function Gy({ children: s, error: b }) {
  let { basename: x } = B.useContext(sn);
  if (typeof b == 'object' && b && 'digest' in b && typeof b.digest == 'string') {
    let y = wy(b.digest);
    if (y) {
      let o = Ho.get(b);
      if (o) throw o;
      let l = Zh(y.location, x);
      if (Qh && !Ho.get(b))
        if (l.isExternal || y.reloadDocument) window.location.href = l.absoluteURL || l.to;
        else {
          const c = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(l.to, { replace: y.replace })
          );
          throw (Ho.set(b, c), c);
        }
      return B.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${l.absoluteURL || l.to}`,
      });
    }
  }
  return s;
}
function Yy({ routeContext: s, match: b, children: x }) {
  let y = B.useContext(Vl);
  return (
    y &&
      y.static &&
      y.staticContext &&
      (b.route.errorElement || b.route.ErrorBoundary) &&
      (y.staticContext._deepestRenderedBoundaryId = b.route.id),
    B.createElement(la.Provider, { value: s }, x)
  );
}
function Vy(s, b = [], x) {
  let y = x == null ? void 0 : x.state;
  if (s == null) {
    if (!y) return null;
    if (y.errors) s = y.matches;
    else if (b.length === 0 && !y.initialized && y.matches.length > 0) s = y.matches;
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
  if (x && y) {
    c = y.renderFallback;
    for (let m = 0; m < o.length; m++) {
      let h = o[m];
      if (((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (d = m), h.route.id)) {
        let { loaderData: g, errors: r } = y,
          S = h.route.loader && !g.hasOwnProperty(h.route.id) && (!r || r[h.route.id] === void 0);
        if (h.route.lazy || S) {
          (x.isStatic && (c = !0), d >= 0 ? (o = o.slice(0, d + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  }
  let f = x == null ? void 0 : x.onError,
    v =
      y && f
        ? (m, h) => {
            var g, r;
            f(m, {
              location: y.location,
              params:
                ((r = (g = y.matches) == null ? void 0 : g[0]) == null ? void 0 : r.params) ?? {},
              unstable_pattern: My(y.matches),
              errorInfo: h,
            });
          }
        : void 0;
  return o.reduceRight((m, h, g) => {
    let r,
      S = !1,
      p = null,
      C = null;
    y &&
      ((r = l && h.route.id ? l[h.route.id] : void 0),
      (p = h.route.errorElement || jy),
      c &&
        (d < 0 && g === 0
          ? (ev(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (S = !0),
            (C = null))
          : d === g && ((S = !0), (C = h.route.hydrateFallbackElement || null))));
    let R = b.concat(o.slice(0, g + 1)),
      w = () => {
        let L;
        return (
          r
            ? (L = p)
            : S
              ? (L = C)
              : h.route.Component
                ? (L = B.createElement(h.route.Component, null))
                : h.route.element
                  ? (L = h.route.element)
                  : (L = m),
          B.createElement(Yy, {
            match: h,
            routeContext: { outlet: m, matches: R, isDataRoute: y != null },
            children: L,
          })
        );
      };
    return y && (h.route.ErrorBoundary || h.route.errorElement || g === 0)
      ? B.createElement(Ph, {
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
function uc(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function qy(s) {
  let b = B.useContext(Vl);
  return (rt(b, uc(s)), b);
}
function Xy(s) {
  let b = B.useContext(dr);
  return (rt(b, uc(s)), b);
}
function Qy(s) {
  let b = B.useContext(la);
  return (rt(b, uc(s)), b);
}
function rc(s) {
  let b = Qy(s),
    x = b.matches[b.matches.length - 1];
  return (rt(x.route.id, `${s} can only be used on routes that contain a unique "id"`), x.route.id);
}
function Zy() {
  return rc('useRouteId');
}
function Ky() {
  var y;
  let s = B.useContext(ic),
    b = Xy('useRouteError'),
    x = rc('useRouteError');
  return s !== void 0 ? s : (y = b.errors) == null ? void 0 : y[x];
}
function ky() {
  let { router: s } = qy('useNavigate'),
    b = rc('useNavigate'),
    x = B.useRef(!1);
  return (
    Wh(() => {
      x.current = !0;
    }),
    B.useCallback(
      async (o, l = {}) => {
        (Rn(x.current, $h),
          x.current &&
            (typeof o == 'number'
              ? await s.navigate(o)
              : await s.navigate(o, { fromRouteId: b, ...l })));
      },
      [s, b]
    )
  );
}
var Ch = {};
function ev(s, b, x) {
  !b && !Ch[s] && ((Ch[s] = !0), Rn(!1, x));
}
B.memo(Jy);
function Jy({ routes: s, future: b, state: x, isStatic: y, onError: o }) {
  return Ih(s, void 0, { state: x, isStatic: y, onError: o });
}
function Fo(s) {
  rt(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function Fy({
  basename: s = '/',
  children: b = null,
  location: x,
  navigationType: y = 'POP',
  navigator: o,
  static: l = !1,
  unstable_useTransitions: c,
}) {
  rt(
    !qi(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let d = s.replace(/^\/*/, '/'),
    f = B.useMemo(
      () => ({ basename: d, navigator: o, static: l, unstable_useTransitions: c, future: {} }),
      [d, o, l, c]
    );
  typeof x == 'string' && (x = Yl(x));
  let {
      pathname: v = '/',
      search: m = '',
      hash: h = '',
      state: g = null,
      key: r = 'default',
      unstable_mask: S,
    } = x,
    p = B.useMemo(() => {
      let C = aa(v, d);
      return C == null
        ? null
        : {
            location: { pathname: C, search: m, hash: h, state: g, key: r, unstable_mask: S },
            navigationType: y,
          };
    }, [d, v, m, h, g, r, y, S]);
  return (
    Rn(
      p != null,
      `<Router basename="${d}"> is not able to match the URL "${v}${m}${h}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    p == null
      ? null
      : B.createElement(
          sn.Provider,
          { value: f },
          B.createElement(Vi.Provider, { children: b, value: p })
        )
  );
}
function $y({ children: s, location: b }) {
  return Ly($o(s), b);
}
function $o(s, b = []) {
  let x = [];
  return (
    B.Children.forEach(s, (y, o) => {
      if (!B.isValidElement(y)) return;
      let l = [...b, o];
      if (y.type === B.Fragment) {
        x.push.apply(x, $o(y.props.children, l));
        return;
      }
      (rt(
        y.type === Fo,
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
      (y.props.children && (c.children = $o(y.props.children, l)), x.push(c));
    }),
    x
  );
}
var ur = 'get',
  rr = 'application/x-www-form-urlencoded';
function mr(s) {
  return typeof HTMLElement < 'u' && s instanceof HTMLElement;
}
function Wy(s) {
  return mr(s) && s.tagName.toLowerCase() === 'button';
}
function Iy(s) {
  return mr(s) && s.tagName.toLowerCase() === 'form';
}
function Py(s) {
  return mr(s) && s.tagName.toLowerCase() === 'input';
}
function ep(s) {
  return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
}
function tp(s, b) {
  return s.button === 0 && (!b || b === '_self') && !ep(s);
}
var ar = null;
function np() {
  if (ar === null)
    try {
      (new FormData(document.createElement('form'), 0), (ar = !1));
    } catch {
      ar = !0;
    }
  return ar;
}
var ap = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function jo(s) {
  return s != null && !ap.has(s)
    ? (Rn(
        !1,
        `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rr}"`
      ),
      null)
    : s;
}
function lp(s, b) {
  let x, y, o, l, c;
  if (Iy(s)) {
    let d = s.getAttribute('action');
    ((y = d ? aa(d, b) : null),
      (x = s.getAttribute('method') || ur),
      (o = jo(s.getAttribute('enctype')) || rr),
      (l = new FormData(s)));
  } else if (Wy(s) || (Py(s) && (s.type === 'submit' || s.type === 'image'))) {
    let d = s.form;
    if (d == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let f = s.getAttribute('formaction') || d.getAttribute('action');
    if (
      ((y = f ? aa(f, b) : null),
      (x = s.getAttribute('formmethod') || d.getAttribute('method') || ur),
      (o = jo(s.getAttribute('formenctype')) || jo(d.getAttribute('enctype')) || rr),
      (l = new FormData(d, s)),
      !np())
    ) {
      let { name: v, type: m, value: h } = s;
      if (m === 'image') {
        let g = v ? `${v}.` : '';
        (l.append(`${g}x`, '0'), l.append(`${g}y`, '0'));
      } else v && l.append(v, h);
    }
  } else {
    if (mr(s))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((x = ur), (y = null), (o = rr), (c = s));
  }
  return (
    l && o === 'text/plain' && ((c = l), (l = void 0)),
    { action: y, method: x.toLowerCase(), encType: o, formData: l, body: c }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function sc(s, b) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(b);
}
function tv(s, b, x, y) {
  let o =
    typeof s == 'string'
      ? new URL(s, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : s;
  return (
    x
      ? o.pathname.endsWith('/')
        ? (o.pathname = `${o.pathname}_.${y}`)
        : (o.pathname = `${o.pathname}.${y}`)
      : o.pathname === '/'
        ? (o.pathname = `_root.${y}`)
        : b && aa(o.pathname, b) === '/'
          ? (o.pathname = `${cr(b)}/_root.${y}`)
          : (o.pathname = `${cr(o.pathname)}.${y}`),
    o
  );
}
async function ip(s, b) {
  if (s.id in b) return b[s.id];
  try {
    let x = await import(s.module);
    return ((b[s.id] = x), x);
  } catch (x) {
    return (
      console.error(`Error loading route module \`${s.module}\`, reloading page...`),
      console.error(x),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function up(s) {
  return s == null
    ? !1
    : s.href == null
      ? s.rel === 'preload' && typeof s.imageSrcSet == 'string' && typeof s.imageSizes == 'string'
      : typeof s.rel == 'string' && typeof s.href == 'string';
}
async function rp(s, b, x) {
  let y = await Promise.all(
    s.map(async (o) => {
      let l = b.routes[o.route.id];
      if (l) {
        let c = await ip(l, x);
        return c.links ? c.links() : [];
      }
      return [];
    })
  );
  return fp(
    y
      .flat(1)
      .filter(up)
      .filter((o) => o.rel === 'stylesheet' || o.rel === 'preload')
      .map((o) =>
        o.rel === 'stylesheet' ? { ...o, rel: 'prefetch', as: 'style' } : { ...o, rel: 'prefetch' }
      )
  );
}
function Mh(s, b, x, y, o, l) {
  let c = (f, v) => (x[v] ? f.route.id !== x[v].route.id : !0),
    d = (f, v) => {
      var m;
      return (
        x[v].pathname !== f.pathname ||
        (((m = x[v].route.path) == null ? void 0 : m.endsWith('*')) &&
          x[v].params['*'] !== f.params['*'])
      );
    };
  return l === 'assets'
    ? b.filter((f, v) => c(f, v) || d(f, v))
    : l === 'data'
      ? b.filter((f, v) => {
          var h;
          let m = y.routes[f.route.id];
          if (!m || !m.hasLoader) return !1;
          if (c(f, v) || d(f, v)) return !0;
          if (f.route.shouldRevalidate) {
            let g = f.route.shouldRevalidate({
              currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
              currentParams: ((h = x[0]) == null ? void 0 : h.params) || {},
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
function sp(s, b, { includeHydrateFallback: x } = {}) {
  return op(
    s
      .map((y) => {
        let o = b.routes[y.route.id];
        if (!o) return [];
        let l = [o.module];
        return (
          o.clientActionModule && (l = l.concat(o.clientActionModule)),
          o.clientLoaderModule && (l = l.concat(o.clientLoaderModule)),
          x && o.hydrateFallbackModule && (l = l.concat(o.hydrateFallbackModule)),
          o.imports && (l = l.concat(o.imports)),
          l
        );
      })
      .flat(1)
  );
}
function op(s) {
  return [...new Set(s)];
}
function cp(s) {
  let b = {},
    x = Object.keys(s).sort();
  for (let y of x) b[y] = s[y];
  return b;
}
function fp(s, b) {
  let x = new Set();
  return (
    new Set(b),
    s.reduce((y, o) => {
      let l = JSON.stringify(cp(o));
      return (x.has(l) || (x.add(l), y.push({ key: l, link: o })), y);
    }, [])
  );
}
function oc() {
  let s = B.useContext(Vl);
  return (sc(s, 'You must render this element inside a <DataRouterContext.Provider> element'), s);
}
function dp() {
  let s = B.useContext(dr);
  return (
    sc(s, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    s
  );
}
var cc = B.createContext(void 0);
cc.displayName = 'FrameworkContext';
function fc() {
  let s = B.useContext(cc);
  return (sc(s, 'You must render this element inside a <HydratedRouter> element'), s);
}
function mp(s, b) {
  let x = B.useContext(cc),
    [y, o] = B.useState(!1),
    [l, c] = B.useState(!1),
    { onFocus: d, onBlur: f, onMouseEnter: v, onMouseLeave: m, onTouchStart: h } = b,
    g = B.useRef(null);
  (B.useEffect(() => {
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
    B.useEffect(() => {
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
    S = () => {
      (o(!1), c(!1));
    };
  return x
    ? s !== 'intent'
      ? [l, g, {}]
      : [
          l,
          g,
          {
            onFocus: Ni(d, r),
            onBlur: Ni(f, S),
            onMouseEnter: Ni(v, r),
            onMouseLeave: Ni(m, S),
            onTouchStart: Ni(h, r),
          },
        ]
    : [!1, g, {}];
}
function Ni(s, b) {
  return (x) => {
    (s && s(x), x.defaultPrevented || b(x));
  };
}
function hp({ page: s, ...b }) {
  let x = Ry(),
    { router: y } = oc(),
    o = B.useMemo(() => Gh(y.routes, s, y.basename), [y.routes, s, y.basename]);
  return o
    ? x
      ? B.createElement(gp, { page: s, matches: o, ...b })
      : B.createElement(yp, { page: s, matches: o, ...b })
    : null;
}
function vp(s) {
  let { manifest: b, routeModules: x } = fc(),
    [y, o] = B.useState([]);
  return (
    B.useEffect(() => {
      let l = !1;
      return (
        rp(s, b, x).then((c) => {
          l || o(c);
        }),
        () => {
          l = !0;
        }
      );
    }, [s, b, x]),
    y
  );
}
function gp({ page: s, matches: b, ...x }) {
  let y = ia(),
    { future: o } = fc(),
    { basename: l } = oc(),
    c = B.useMemo(() => {
      if (s === y.pathname + y.search + y.hash) return [];
      let d = tv(s, l, o.unstable_trailingSlashAwareDataRequests, 'rsc'),
        f = !1,
        v = [];
      for (let m of b)
        typeof m.route.shouldRevalidate == 'function' ? (f = !0) : v.push(m.route.id);
      return (
        f && v.length > 0 && d.searchParams.set('_routes', v.join(',')),
        [d.pathname + d.search]
      );
    }, [l, o.unstable_trailingSlashAwareDataRequests, s, y, b]);
  return B.createElement(
    B.Fragment,
    null,
    c.map((d) => B.createElement('link', { key: d, rel: 'prefetch', as: 'fetch', href: d, ...x }))
  );
}
function yp({ page: s, matches: b, ...x }) {
  let y = ia(),
    { future: o, manifest: l, routeModules: c } = fc(),
    { basename: d } = oc(),
    { loaderData: f, matches: v } = dp(),
    m = B.useMemo(() => Mh(s, b, v, l, y, 'data'), [s, b, v, l, y]),
    h = B.useMemo(() => Mh(s, b, v, l, y, 'assets'), [s, b, v, l, y]),
    g = B.useMemo(() => {
      if (s === y.pathname + y.search + y.hash) return [];
      let p = new Set(),
        C = !1;
      if (
        (b.forEach((w) => {
          var G;
          let L = l.routes[w.route.id];
          !L ||
            !L.hasLoader ||
            ((!m.some((M) => M.route.id === w.route.id) &&
              w.route.id in f &&
              (G = c[w.route.id]) != null &&
              G.shouldRevalidate) ||
            L.hasClientLoader
              ? (C = !0)
              : p.add(w.route.id));
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
            b
              .filter((w) => p.has(w.route.id))
              .map((w) => w.route.id)
              .join(',')
          ),
        [R.pathname + R.search]
      );
    }, [d, o.unstable_trailingSlashAwareDataRequests, f, y, l, m, b, s, c]),
    r = B.useMemo(() => sp(h, l), [h, l]),
    S = vp(h);
  return B.createElement(
    B.Fragment,
    null,
    g.map((p) => B.createElement('link', { key: p, rel: 'prefetch', as: 'fetch', href: p, ...x })),
    r.map((p) => B.createElement('link', { key: p, rel: 'modulepreload', href: p, ...x })),
    S.map(({ key: p, link: C }) =>
      B.createElement('link', {
        key: p,
        nonce: x.nonce,
        ...C,
        crossOrigin: C.crossOrigin ?? x.crossOrigin,
      })
    )
  );
}
function pp(...s) {
  return (b) => {
    s.forEach((x) => {
      typeof x == 'function' ? x(b) : x != null && (x.current = b);
    });
  };
}
var Sp =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  Sp && (window.__reactRouterVersion = '7.14.2');
} catch {}
function xp({ basename: s, children: b, unstable_useTransitions: x, window: y }) {
  let o = B.useRef();
  o.current == null && (o.current = P0({ window: y, v5Compat: !0 }));
  let l = o.current,
    [c, d] = B.useState({ action: l.action, location: l.location }),
    f = B.useCallback(
      (v) => {
        x === !1 ? d(v) : B.startTransition(() => d(v));
      },
      [x]
    );
  return (
    B.useLayoutEffect(() => l.listen(f), [l, f]),
    B.createElement(Fy, {
      basename: s,
      children: b,
      location: c.location,
      navigationType: c.action,
      navigator: l,
      unstable_useTransitions: x,
    })
  );
}
var nv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  av = B.forwardRef(function (
    {
      onClick: b,
      discover: x = 'render',
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
      ...S
    },
    p
  ) {
    let { basename: C, navigator: R, unstable_useTransitions: w } = B.useContext(sn),
      L = typeof m == 'string' && nv.test(m),
      G = Zh(m, C);
    m = G.to;
    let M = Ny(m, { relative: o }),
      O = ia(),
      D = null;
    if (d) {
      let ae = lc(d, [], O.unstable_mask ? O.unstable_mask.pathname : '/', !0);
      (C !== '/' && (ae.pathname = ae.pathname === '/' ? C : pn([C, ae.pathname])),
        (D = R.createHref(ae)));
    }
    let [_, H, U] = mp(y, S),
      Y = Mp(m, {
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
      (b && b(ae), ae.defaultPrevented || Y(ae));
    }
    let F = !(G.isExternal || l),
      ie = B.createElement('a', {
        ...S,
        ...U,
        href: (F ? D : void 0) || G.absoluteURL || M,
        onClick: F ? V : b,
        ref: pp(p, H),
        target: v,
        'data-discover': !L && x === 'render' ? 'true' : void 0,
      });
    return _ && !L ? B.createElement(B.Fragment, null, ie, B.createElement(hp, { page: M })) : ie;
  });
av.displayName = 'Link';
var Ep = B.forwardRef(function (
  {
    'aria-current': b = 'page',
    caseSensitive: x = !1,
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
  let h = Xi(c, { relative: v.relative }),
    g = ia(),
    r = B.useContext(dr),
    { navigator: S, basename: p } = B.useContext(sn),
    C = r != null && Op(h) && d === !0,
    R = S.encodeLocation ? S.encodeLocation(h).pathname : h.pathname,
    w = g.pathname,
    L = r && r.navigation && r.navigation.location ? r.navigation.location.pathname : null;
  (x || ((w = w.toLowerCase()), (L = L ? L.toLowerCase() : null), (R = R.toLowerCase())),
    L && p && (L = aa(L, p) || L));
  const G = R !== '/' && R.endsWith('/') ? R.length - 1 : R.length;
  let M = w === R || (!o && w.startsWith(R) && w.charAt(G) === '/'),
    O = L != null && (L === R || (!o && L.startsWith(R) && L.charAt(R.length) === '/')),
    D = { isActive: M, isPending: O, isTransitioning: C },
    _ = M ? b : void 0,
    H;
  typeof y == 'function'
    ? (H = y(D))
    : (H = [y, M ? 'active' : null, O ? 'pending' : null, C ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let U = typeof l == 'function' ? l(D) : l;
  return B.createElement(
    av,
    { ...v, 'aria-current': _, className: H, ref: m, style: U, to: c, viewTransition: d },
    typeof f == 'function' ? f(D) : f
  );
});
Ep.displayName = 'NavLink';
var bp = B.forwardRef(
  (
    {
      discover: s = 'render',
      fetcherKey: b,
      navigate: x,
      reloadDocument: y,
      replace: o,
      state: l,
      method: c = ur,
      action: d,
      onSubmit: f,
      relative: v,
      preventScrollReset: m,
      viewTransition: h,
      unstable_defaultShouldRevalidate: g,
      ...r
    },
    S
  ) => {
    let { unstable_useTransitions: p } = B.useContext(sn),
      C = Ap(),
      R = _p(d, { relative: v }),
      w = c.toLowerCase() === 'get' ? 'get' : 'post',
      L = typeof d == 'string' && nv.test(d),
      G = (M) => {
        if ((f && f(M), M.defaultPrevented)) return;
        M.preventDefault();
        let O = M.nativeEvent.submitter,
          D = (O == null ? void 0 : O.getAttribute('formmethod')) || c,
          _ = () =>
            C(O || M.currentTarget, {
              fetcherKey: b,
              method: D,
              navigate: x,
              replace: o,
              state: l,
              relative: v,
              preventScrollReset: m,
              viewTransition: h,
              unstable_defaultShouldRevalidate: g,
            });
        p && x !== !1 ? B.startTransition(() => _()) : _();
      };
    return B.createElement('form', {
      ref: S,
      method: w,
      action: R,
      onSubmit: y ? f : G,
      ...r,
      'data-discover': !L && s === 'render' ? 'true' : void 0,
    });
  }
);
bp.displayName = 'Form';
function Cp(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function lv(s) {
  let b = B.useContext(Vl);
  return (rt(b, Cp(s)), b);
}
function Mp(
  s,
  {
    target: b,
    replace: x,
    unstable_mask: y,
    state: o,
    preventScrollReset: l,
    relative: c,
    viewTransition: d,
    unstable_defaultShouldRevalidate: f,
    unstable_useTransitions: v,
  } = {}
) {
  let m = By(),
    h = ia(),
    g = Xi(s, { relative: c });
  return B.useCallback(
    (r) => {
      if (tp(r, b)) {
        r.preventDefault();
        let S = x !== void 0 ? x : Yi(h) === Yi(g),
          p = () =>
            m(s, {
              replace: S,
              unstable_mask: y,
              state: o,
              preventScrollReset: l,
              relative: c,
              viewTransition: d,
              unstable_defaultShouldRevalidate: f,
            });
        v ? B.startTransition(() => p()) : p();
      }
    },
    [h, m, g, x, y, o, b, s, l, c, d, f, v]
  );
}
var Tp = 0,
  Rp = () => `__${String(++Tp)}__`;
function Ap() {
  let { router: s } = lv('useSubmit'),
    { basename: b } = B.useContext(sn),
    x = Zy(),
    y = s.fetch,
    o = s.navigate;
  return B.useCallback(
    async (l, c = {}) => {
      let { action: d, method: f, encType: v, formData: m, body: h } = lp(l, b);
      if (c.navigate === !1) {
        let g = c.fetcherKey || Rp();
        await y(g, x, c.action || d, {
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
          fromRouteId: x,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [y, o, b, x]
  );
}
function _p(s, { relative: b } = {}) {
  let { basename: x } = B.useContext(sn),
    y = B.useContext(la);
  rt(y, 'useFormAction must be used inside a RouteContext');
  let [o] = y.matches.slice(-1),
    l = { ...Xi(s || '.', { relative: b }) },
    c = ia();
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
    x !== '/' && (l.pathname = l.pathname === '/' ? x : pn([x, l.pathname])),
    Yi(l)
  );
}
function Op(s, { relative: b } = {}) {
  let x = B.useContext(Jh);
  rt(
    x != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: y } = lv('useViewTransitionState'),
    o = Xi(s, { relative: b });
  if (!x.isTransitioning) return !1;
  let l = aa(x.currentLocation.pathname, y) || x.currentLocation.pathname,
    c = aa(x.nextLocation.pathname, y) || x.nextLocation.pathname;
  return or(o.pathname, c) != null || or(o.pathname, l) != null;
}
const Dp = '_index_r8hfh_1',
  wp = { index: Dp },
  zp = '_layout_1m8bs_1',
  Np = '_top_bar_placeholder_1m8bs_10',
  Bp = '_main_1m8bs_15',
  Up = '_field_wrapper_1m8bs_23',
  Lp = '_field_placeholder_1m8bs_28',
  Hp = '_skill_button_wrapper_1m8bs_35',
  Tn = {
    layout: zp,
    top_bar_placeholder: Np,
    main: Bp,
    field_wrapper: Up,
    field_placeholder: Lp,
    skill_button_wrapper: Hp,
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
  Bi = { layer: Vp, effect: qp, ring: Xp, score: Qp, special: Zp },
  iv = B.memo(
    B.forwardRef((s, b) => {
      const x = B.useRef(null),
        y = B.useCallback((l) => {
          const c = x.current;
          if (!c) return;
          const d = document.createElement('div');
          ((d.className = `${Bi.effect} ${l.isSpecial ? Bi.special : ''}`),
            (d.style.left = `${l.x}px`),
            (d.style.top = `${l.y}px`),
            d.setAttribute('aria-hidden', 'true'));
          const f = document.createElement('span');
          ((f.className = Bi.ring), d.appendChild(f));
          const v = () => {
            (f.removeEventListener('animationend', v), d.parentNode === c && c.removeChild(d));
          };
          if ((f.addEventListener('animationend', v), l.score > 0)) {
            const m = document.createElement('span');
            ((m.className = Bi.score), (m.textContent = `+${l.score}`), d.appendChild(m));
          }
          c.appendChild(d);
        }, []),
        o = B.useCallback(() => {
          const l = x.current;
          if (l) for (; l.firstChild; ) l.removeChild(l.firstChild);
        }, []);
      return (
        B.useImperativeHandle(b, () => ({ add: y, clear: o }), [y, o]),
        W.jsx('div', { ref: x, className: Bi.layer, 'aria-hidden': 'true' })
      );
    })
  );
iv.displayName = 'MergeEffect';
const Kp = '_line_1p32x_1',
  kp = '_preview_wrap_1p32x_11',
  Jp = '_preview_1p32x_11',
  Yo = { line: Kp, preview_wrap: kp, preview: Jp },
  Fp = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  uv = B.memo(
    B.forwardRef(({ initialX: s, fieldHeight: b, item: x }, y) => {
      const o = B.useRef(null),
        l = B.useRef(null),
        c = B.useRef((x == null ? void 0 : x.radius) ?? 0);
      if (
        ((c.current = (x == null ? void 0 : x.radius) ?? 0),
        B.useImperativeHandle(
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
        !x)
      )
        return null;
      const d = x.radius * 2;
      return W.jsxs(W.Fragment, {
        children: [
          W.jsx('div', {
            ref: o,
            className: Yo.line,
            style: { height: `${b}px`, transform: `translate3d(${s}px, 0, 0)` },
            'aria-hidden': 'true',
          }),
          W.jsx('div', {
            ref: l,
            className: Yo.preview_wrap,
            style: {
              width: `${d}px`,
              height: `${d}px`,
              transform: `translate3d(${s - x.radius}px, 0, 0)`,
            },
            'aria-hidden': 'true',
            children: W.jsx('img', {
              src: Fp(x.svgPath),
              alt: '',
              'aria-hidden': 'true',
              className: Yo.preview,
            }),
          }),
        ],
      });
    })
  );
uv.displayName = 'DropIndicator';
const $p = (s) => Math.max(0, Math.min(1, s)),
  Wp = ({
    canvasContainerRef: s,
    fieldWidth: b,
    fieldHeight: x,
    gameOverLineY: y,
    currentItem: o,
    canInteract: l,
    onDrop: c,
    mergeEffectRef: d,
    isMagnetSelecting: f,
    onMagnetSelect: v,
  }) => {
    const m = B.useRef(null),
      h = B.useRef(null),
      g = B.useRef(0.5),
      r = B.useRef(null),
      S = B.useRef(o);
    S.current = o;
    const p = B.useRef(b);
    p.current = b;
    const C = B.useCallback((_) => {
        const H = S.current,
          U = p.current;
        return H ? Math.max(H.radius, Math.min(U - H.radius, _ * U)) : _ * U;
      }, []),
      R = B.useCallback(() => {
        r.current === null &&
          (r.current = window.requestAnimationFrame(() => {
            var _;
            ((r.current = null), (_ = h.current) == null || _.setX(C(g.current)));
          }));
      }, [C]),
      w = B.useCallback(
        (_) => {
          const H = m.current;
          if (!H) return;
          const U = H.getBoundingClientRect(),
            Y = $p((_ - U.left) / U.width);
          ((g.current = Y), R());
        },
        [R]
      );
    (B.useEffect(() => {
      ((g.current = 0.5), R());
    }, [o == null ? void 0 : o.level, R]),
      B.useEffect(
        () => () => {
          r.current !== null && (window.cancelAnimationFrame(r.current), (r.current = null));
        },
        []
      ));
    const L = l && !f,
      G = (_) => {
        var H;
        f || (L && (w(_.clientX), (H = m.current) == null || H.setPointerCapture(_.pointerId)));
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
        var H;
        if (f) {
          const U = m.current;
          if (!U) return;
          const Y = U.getBoundingClientRect();
          v(_.clientX - Y.left, _.clientY - Y.top);
          return;
        }
        L &&
          (w(_.clientX),
          c(g.current),
          (H = m.current) == null || H.releasePointerCapture(_.pointerId));
      },
      D = C(0.5);
    return W.jsxs('div', {
      ref: m,
      className: Go.surface,
      style: { width: `${b}px`, height: `${x}px` },
      onPointerDown: G,
      onPointerMove: M,
      onPointerUp: O,
      role: 'application',
      'aria-label': 'ゲームフィールド',
      children: [
        W.jsx('div', { ref: s, className: Go.canvas_layer }),
        W.jsx('div', {
          className: Go.game_over_line,
          style: { top: `${y}px` },
          'aria-hidden': 'true',
        }),
        L ? W.jsx(uv, { ref: h, initialX: D, fieldHeight: x, item: o }) : null,
        W.jsx(iv, { ref: d }),
      ],
    });
  },
  Ip = '_overlay_efysu_1',
  Pp = '_number_efysu_11',
  Th = { overlay: Ip, number: Pp },
  rv = B.memo(({ seconds: s }) =>
    s === null
      ? null
      : W.jsx('div', {
          className: Th.overlay,
          'aria-live': 'assertive',
          'aria-label': `ゲームオーバーまで${s}秒`,
          children: W.jsx('span', { className: Th.number, children: s }, s),
        })
  );
rv.displayName = 'CountdownOverlay';
const e1 = '_overlay_o79hb_1',
  t1 = '_panel_o79hb_13',
  n1 = '_new_record_o79hb_24',
  a1 = '_title_o79hb_32',
  l1 = '_scores_o79hb_40',
  i1 = '_row_o79hb_46',
  u1 = '_gold_o79hb_64',
  r1 = '_restart_o79hb_69',
  Wn = {
    overlay: e1,
    panel: t1,
    new_record: n1,
    title: a1,
    scores: l1,
    row: i1,
    gold: u1,
    restart: r1,
  },
  s1 = ({ score: s, bestScore: b, isNewRecord: x, onRestart: y }) =>
    W.jsx('div', {
      className: Wn.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'ゲームオーバー',
      children: W.jsxs('div', {
        className: Wn.panel,
        children: [
          x ? W.jsx('p', { className: Wn.new_record, children: '🎉 新記録！' }) : null,
          W.jsx('h2', { className: Wn.title, children: 'GAME OVER' }),
          W.jsxs('dl', {
            className: Wn.scores,
            children: [
              W.jsxs('div', {
                className: Wn.row,
                children: [
                  W.jsx('dt', { children: 'スコア' }),
                  W.jsx('dd', { className: x ? Wn.gold : '', children: s }),
                ],
              }),
              W.jsxs('div', {
                className: Wn.row,
                children: [W.jsx('dt', { children: 'ベスト' }), W.jsx('dd', { children: b })],
              }),
            ],
          }),
          W.jsx('button', {
            type: 'button',
            className: Wn.restart,
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
  Ui = { root: o1, message: c1, icon: f1, text: d1, cancel: m1 },
  sv = B.memo(({ active: s, onCancel: b }) =>
    s
      ? W.jsxs('div', {
          className: Ui.root,
          children: [
            W.jsxs('div', {
              className: Ui.message,
              children: [
                W.jsx('span', { className: Ui.icon, children: '🧲' }),
                W.jsx('span', { className: Ui.text, children: '引き寄せたいアイテムをタップ' }),
              ],
            }),
            W.jsx('button', {
              type: 'button',
              className: Ui.cancel,
              onClick: b,
              children: 'キャンセル',
            }),
          ],
        })
      : null
  );
sv.displayName = 'MagnetSelectingOverlay';
const h1 = '_gravity_flip_14l5j_1',
  v1 = '_arrow_14l5j_9',
  Rh = { gravity_flip: h1, arrow: v1 },
  ov = B.memo(({ effect: s }) =>
    s === 'gravityFlip'
      ? W.jsx('div', {
          className: Rh.gravity_flip,
          'aria-hidden': 'true',
          children: Array.from({ length: 6 }).map((b, x) =>
            W.jsx(
              'span',
              {
                className: Rh.arrow,
                style: { left: `${(x + 1) * 14}%`, animationDelay: `${x * 0.12}s` },
                children: '⬆',
              },
              x
            )
          ),
        })
      : null
  );
ov.displayName = 'SkillEffectOverlay';
const g1 = '_backdrop_6euhx_1',
  y1 = '_drawer_6euhx_11',
  p1 = '_header_6euhx_23',
  S1 = '_title_6euhx_30',
  x1 = '_close_6euhx_38',
  E1 = '_row_6euhx_54',
  b1 = '_row_label_6euhx_62',
  C1 = '_suspend_6euhx_68',
  M1 = '_footer_6euhx_88',
  T1 = '_version_6euhx_94',
  un = {
    backdrop: g1,
    drawer: y1,
    header: p1,
    title: S1,
    close: x1,
    row: E1,
    row_label: b1,
    suspend: C1,
    footer: M1,
    version: T1,
  },
  R1 = '_toggle_1ap46_1',
  A1 = { toggle: R1 },
  cv = B.memo(({ isOn: s, onToggle: b }) =>
    W.jsx('button', {
      type: 'button',
      className: A1.toggle,
      onClick: b,
      'aria-label': s ? 'サウンドをOFFにする' : 'サウンドをONにする',
      'aria-pressed': s,
      children: W.jsx('span', { 'aria-hidden': 'true', children: s ? '🔊' : '🔇' }),
    })
  );
cv.displayName = 'SoundToggle';
const _1 = '_toggle_15urq_1',
  O1 = { toggle: _1 },
  dc = [{ id: 'gumi', label: 'グミ' }],
  hr = 'gumi',
  mc = (s) => typeof s == 'string' && dc.some((b) => b.id === s),
  fv = B.memo(({ value: s, onChange: b }) => {
    const x = (y) => {
      const o = y.target.value;
      mc(o) && b(o);
    };
    return W.jsx('select', {
      className: O1.toggle,
      value: s,
      onChange: x,
      'aria-label': 'アセットテーマ',
      children: dc.map((y) => W.jsx('option', { value: y.id, children: y.label }, y.id)),
    });
  });
fv.displayName = 'ThemeToggle';
const hc = B.memo(
  ({
    open: s,
    onClose: b,
    themeId: x,
    onChangeTheme: y,
    isSoundOn: o,
    onToggleSound: l,
    canSuspend: c,
    onSuspend: d,
  }) =>
    s
      ? W.jsx('div', {
          className: un.backdrop,
          onClick: b,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '設定',
          children: W.jsxs('aside', {
            className: un.drawer,
            onClick: (f) => f.stopPropagation(),
            children: [
              W.jsxs('header', {
                className: un.header,
                children: [
                  W.jsx('h2', { className: un.title, children: '設定' }),
                  W.jsx('button', {
                    type: 'button',
                    className: un.close,
                    onClick: b,
                    'aria-label': '設定を閉じる',
                    children: '✕',
                  }),
                ],
              }),
              W.jsxs('div', {
                className: un.row,
                children: [
                  W.jsx('span', { className: un.row_label, children: 'テーマ' }),
                  W.jsx(fv, { value: x, onChange: y }),
                ],
              }),
              W.jsxs('div', {
                className: un.row,
                children: [
                  W.jsx('span', { className: un.row_label, children: 'サウンド' }),
                  W.jsx(cv, { isOn: o, onToggle: l }),
                ],
              }),
              c
                ? W.jsx('button', {
                    type: 'button',
                    className: un.suspend,
                    onClick: () => {
                      (d(), b());
                    },
                    children: '中断',
                  })
                : null,
              W.jsx('footer', {
                className: un.footer,
                children: W.jsxs('span', { className: un.version, children: ['v', '1.0.36'] }),
              }),
            ],
          }),
        })
      : null
);
hc.displayName = 'SettingsDrawer';
const D1 = '_button_12i3t_1',
  w1 = '_gauge_12i3t_23',
  z1 = '_gauge_track_12i3t_32',
  N1 = '_gauge_fill_12i3t_39',
  B1 = '_gauge_fill_full_12i3t_47',
  U1 = '_icon_12i3t_52',
  L1 = '_ready_12i3t_60',
  H1 = '_fully_ready_12i3t_65',
  Da = {
    button: D1,
    gauge: w1,
    gauge_track: z1,
    gauge_fill: N1,
    gauge_fill_full: B1,
    icon: U1,
    ready: L1,
    fully_ready: H1,
  },
  fr = 32,
  Ah = 40,
  _h = 110,
  j1 = 360,
  Oh = (s) => {
    const b = ((s - 90) * Math.PI) / 180;
    return { x: Ah + fr * Math.cos(b), y: Ah + fr * Math.sin(b) };
  },
  G1 = (s, b) => {
    const x = Oh(s),
      y = Oh(b),
      o = b - s > 180 ? 1 : 0;
    return `M ${x.x} ${x.y} A ${fr} ${fr} 0 ${o} 1 ${y.x} ${y.y}`;
  },
  Vo = 1,
  dv = B.memo(({ gauge: s, segmentMax: b, segmentCount: x, canOpen: y, onClick: o }) => {
    const l = Math.round((s / (b * x)) * 100),
      c = j1 / x,
      d = c - _h,
      f = Array.from({ length: x }, (h, g) => {
        const r = g * b;
        return Math.max(0, Math.min(b, s - r)) / b;
      }),
      m = f.filter((h) => h >= 1).length === x;
    return W.jsxs('button', {
      type: 'button',
      className: [Da.button, y ? Da.ready : '', m ? Da.fully_ready : ''].filter(Boolean).join(' '),
      onClick: o,
      disabled: !y,
      'aria-label': y ? '必殺技を選択' : `必殺技ゲージ ${l}%`,
      children: [
        W.jsx('svg', {
          className: Da.gauge,
          viewBox: '0 0 80 80',
          'aria-hidden': 'true',
          children: f.map((h, g) => {
            const r = g * c + d / 2,
              S = r + _h,
              p = G1(r, S),
              C = h >= 1;
            return W.jsxs(
              'g',
              {
                children: [
                  W.jsx('path', { className: Da.gauge_track, d: p, pathLength: Vo }),
                  W.jsx('path', {
                    className: `${Da.gauge_fill} ${C ? Da.gauge_fill_full : ''}`,
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
        W.jsx('span', { className: Da.icon, 'aria-hidden': 'true', children: '⚡' }),
      ],
    });
  });
dv.displayName = 'SkillButton';
const Y1 = '_backdrop_v7sbf_1',
  V1 = '_menu_v7sbf_12',
  q1 = '_title_v7sbf_21',
  X1 = '_choices_v7sbf_30',
  Q1 = '_choice_v7sbf_30',
  Z1 = '_choice_disabled_v7sbf_60',
  K1 = '_choice_icon_v7sbf_65',
  k1 = '_choice_label_v7sbf_72',
  J1 = '_choice_uses_v7sbf_83',
  F1 = '_choice_desc_v7sbf_91',
  $1 = '_choice_cost_v7sbf_97',
  W1 = '_cost_pip_v7sbf_105',
  I1 = '_cancel_v7sbf_113',
  kt = {
    backdrop: Y1,
    menu: V1,
    title: q1,
    choices: X1,
    choice: Q1,
    choice_disabled: Z1,
    choice_icon: K1,
    choice_label: k1,
    choice_uses: J1,
    choice_desc: F1,
    choice_cost: $1,
    cost_pip: W1,
    cancel: I1,
  },
  Wo = 100,
  Io = 3,
  dt = {
    gaugeMax: Wo * Io,
    segmentMax: Wo,
    segmentCount: Io,
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
  P1 = (s) => s,
  mv = { shake: 1, gravityFlip: 2, magnet: Io },
  Gl = 3,
  Li = (s) => mv[s] * Wo,
  eS = [
    { kind: 'shake', icon: '🌪', label: 'シェイク', description: '盤面を揺らして詰まりを解す' },
    { kind: 'gravityFlip', icon: '⬆️', label: '重力反転', description: '3秒だけ重力を逆さに' },
    {
      kind: 'magnet',
      icon: '🧲',
      label: '同レベル吸引',
      description: 'タップしたアイテムと同レベルを 1 体ランダムに引き寄せ',
    },
  ],
  hv = B.memo(
    ({ open: s, onSelect: b, onClose: x, canUse: y, magnetUsesLeft: o, magnetMaxUses: l }) =>
      s
        ? W.jsx('div', {
            className: kt.backdrop,
            onClick: x,
            role: 'dialog',
            'aria-modal': 'true',
            'aria-label': '必殺技を選択',
            children: W.jsxs('div', {
              className: kt.menu,
              onClick: (c) => c.stopPropagation(),
              children: [
                W.jsx('h2', { className: kt.title, children: '必殺技を選択' }),
                W.jsx('div', {
                  className: kt.choices,
                  children: eS.map((c) => {
                    const d = mv[c.kind],
                      f = y[c.kind],
                      v = c.kind === 'magnet';
                    return W.jsxs(
                      'button',
                      {
                        type: 'button',
                        className: `${kt.choice} ${f ? '' : kt.choice_disabled}`,
                        onClick: () => f && b(c.kind),
                        disabled: !f,
                        children: [
                          W.jsx('span', {
                            className: kt.choice_icon,
                            'aria-hidden': 'true',
                            children: c.icon,
                          }),
                          W.jsxs('span', {
                            className: kt.choice_label,
                            children: [
                              c.label,
                              v
                                ? W.jsxs('span', {
                                    className: kt.choice_uses,
                                    'aria-label': `残り ${o} 回 / 最大 ${l} 回`,
                                    children: ['残り ', o, '/', l, ' 回'],
                                  })
                                : null,
                            ],
                          }),
                          W.jsx('span', { className: kt.choice_desc, children: c.description }),
                          W.jsx('span', {
                            className: kt.choice_cost,
                            'aria-label': `コスト ${d} ゲージ`,
                            children: Array.from({ length: d }, (m, h) =>
                              W.jsx('span', { className: kt.cost_pip }, h)
                            ),
                          }),
                        ],
                      },
                      c.kind
                    );
                  }),
                }),
                W.jsx('button', {
                  type: 'button',
                  className: kt.cancel,
                  onClick: x,
                  children: 'キャンセル',
                }),
              ],
            }),
          })
        : null
  );
hv.displayName = 'SkillMenu';
const tS = '_top_bar_15roj_1',
  nS = '_right_15roj_12',
  aS = '_settings_15roj_18',
  qo = { top_bar: tS, right: nS, settings: aS },
  lS = '_next_1n5pn_1',
  iS = '_label_1n5pn_7',
  uS = '_thumb_1n5pn_14',
  rS = '_image_1n5pn_27',
  lr = { next: lS, label: iS, thumb: uS, image: rS },
  sS = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  vv = B.memo(({ item: s }) =>
    W.jsxs('div', {
      className: lr.next,
      children: [
        W.jsx('span', { className: lr.label, children: 'NEXT' }),
        W.jsx('div', {
          className: lr.thumb,
          'data-testid': 'next-item',
          children: s
            ? W.jsx('img', { src: sS(s.svgPath), alt: s.name, className: lr.image })
            : null,
        }),
      ],
    })
  );
vv.displayName = 'NextItemPreview';
const oS = '_score_display_pgke7_1',
  cS = '_row_pgke7_7',
  fS = '_label_pgke7_13',
  dS = '_value_pgke7_20',
  mS = '_label_small_pgke7_28',
  hS = '_value_small_pgke7_35',
  Ia = { score_display: oS, row: cS, label: fS, value: dS, label_small: mS, value_small: hS },
  gv = B.memo(({ score: s, bestScore: b }) =>
    W.jsxs('div', {
      className: Ia.score_display,
      children: [
        W.jsxs('div', {
          className: Ia.row,
          children: [
            W.jsx('span', { className: Ia.label, children: 'SCORE' }),
            W.jsx('span', { className: Ia.value, 'data-testid': 'score-value', children: s }),
          ],
        }),
        W.jsxs('div', {
          className: Ia.row,
          children: [
            W.jsx('span', { className: Ia.label_small, children: 'BEST' }),
            W.jsx('span', { className: Ia.value_small, children: b }),
          ],
        }),
      ],
    })
  );
gv.displayName = 'ScoreDisplay';
const yv = ({ score: s, bestScore: b, nextItem: x, onOpenSettings: y }) =>
  W.jsxs('header', {
    className: qo.top_bar,
    children: [
      W.jsx(gv, { score: s, bestScore: b }),
      W.jsxs('div', {
        className: qo.right,
        children: [
          W.jsx(vv, { item: x }),
          W.jsx('button', {
            type: 'button',
            className: qo.settings,
            onClick: y,
            'aria-label': '設定を開く',
            children: W.jsx('span', { 'aria-hidden': 'true', children: '⚙' }),
          }),
        ],
      }),
    ],
  });
var sr = { exports: {} };
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
 */ var vS = sr.exports,
  Dh;
function gS() {
  return (
    Dh ||
      ((Dh = 1),
      (function (s, b) {
        (function (y, o) {
          s.exports = o();
        })(vS, function () {
          return (function (x) {
            var y = {};
            function o(l) {
              if (y[l]) return y[l].exports;
              var c = (y[l] = { i: l, l: !1, exports: {} });
              return (x[l].call(c.exports, c, c.exports, o), (c.l = !0), c.exports);
            }
            return (
              (o.m = x),
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
            function (x, y) {
              var o = {};
              ((x.exports = o),
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
                          var S = c[g].apply(m, h);
                          typeof S < 'u' && (m = S);
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
                          !c && typeof rh < 'u' && (c = rh.decomp));
                      } catch {
                        c = null;
                      }
                      return c;
                    }));
                })());
            },
            function (x, y) {
              var o = {};
              ((x.exports = o),
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
            function (x, y) {
              var o = {};
              ((x.exports = o),
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
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
                      f.replace(m, function (g, r, S) {
                        h.push({ x: parseFloat(r), y: parseFloat(S) });
                      }),
                      l.create(h, v)
                    );
                  }),
                  (l.centre = function (f) {
                    for (
                      var v = l.area(f, !0), m = { x: 0, y: 0 }, h, g, r, S = 0;
                      S < f.length;
                      S++
                    )
                      ((r = (S + 1) % f.length),
                        (h = c.cross(f[S], f[r])),
                        (g = c.mult(c.add(f[S], f[r]), h)),
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
                    for (var m = 0, h = 0, g = f, r, S, p = 0; p < g.length; p++)
                      ((S = (p + 1) % g.length),
                        (r = Math.abs(c.cross(g[S], g[p]))),
                        (m += r * (c.dot(g[S], g[S]) + c.dot(g[S], g[p]) + c.dot(g[p], g[p]))),
                        (h += r));
                    return (v / 6) * (m / h);
                  }),
                  (l.translate = function (f, v, m) {
                    m = typeof m < 'u' ? m : 1;
                    var h = f.length,
                      g = v.x * m,
                      r = v.y * m,
                      S;
                    for (S = 0; S < h; S++) ((f[S].x += g), (f[S].y += r));
                    return f;
                  }),
                  (l.rotate = function (f, v, m) {
                    if (v !== 0) {
                      var h = Math.cos(v),
                        g = Math.sin(v),
                        r = m.x,
                        S = m.y,
                        p = f.length,
                        C,
                        R,
                        w,
                        L;
                      for (L = 0; L < p; L++)
                        ((C = f[L]),
                          (R = C.x - r),
                          (w = C.y - S),
                          (C.x = r + (R * h - w * g)),
                          (C.y = S + (R * g + w * h)));
                      return f;
                    }
                  }),
                  (l.contains = function (f, v) {
                    for (var m = v.x, h = v.y, g = f.length, r = f[g - 1], S, p = 0; p < g; p++) {
                      if (((S = f[p]), (m - r.x) * (S.y - r.y) + (h - r.y) * (r.x - S.x) > 0))
                        return !1;
                      r = S;
                    }
                    return !0;
                  }),
                  (l.scale = function (f, v, m, h) {
                    if (v === 1 && m === 1) return f;
                    h = h || l.centre(f);
                    for (var g, r, S = 0; S < f.length; S++)
                      ((g = f[S]),
                        (r = c.sub(g, h)),
                        (f[S].x = h.x + r.x * v),
                        (f[S].y = h.y + r.y * m));
                    return f;
                  }),
                  (l.chamfer = function (f, v, m, h, g) {
                    (typeof v == 'number' ? (v = [v]) : (v = v || [8]),
                      (m = typeof m < 'u' ? m : -1),
                      (h = h || 2),
                      (g = g || 14));
                    for (var r = [], S = 0; S < f.length; S++) {
                      var p = f[S - 1 >= 0 ? S - 1 : f.length - 1],
                        C = f[S],
                        R = f[(S + 1) % f.length],
                        w = v[S < v.length ? S : v.length - 1];
                      if (w === 0) {
                        r.push(C);
                        continue;
                      }
                      var L = c.normalise({ x: C.y - p.y, y: p.x - C.x }),
                        G = c.normalise({ x: R.y - C.y, y: C.x - R.x }),
                        M = Math.sqrt(2 * Math.pow(w, 2)),
                        O = c.mult(d.clone(L), w),
                        D = c.normalise(c.mult(c.add(L, G), 0.5)),
                        _ = c.sub(C, c.mult(D, M)),
                        H = m;
                      (m === -1 && (H = Math.pow(w, 0.32) * 1.75),
                        (H = d.clamp(H, h, g)),
                        H % 2 === 1 && (H += 1));
                      for (var U = Math.acos(c.dot(L, G)), Y = U / H, V = 0; V < H; V++)
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
                      S;
                    if (m < 3) return null;
                    for (h = 0; h < m; h++)
                      if (
                        ((g = (h + 1) % m),
                        (r = (h + 2) % m),
                        (S = (f[g].x - f[h].x) * (f[r].y - f[g].y)),
                        (S -= (f[g].y - f[h].y) * (f[r].x - f[g].x)),
                        S < 0 ? (v |= 1) : S > 0 && (v |= 2),
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
                        f.sort(function (r, S) {
                          var p = r.x - S.x;
                          return p !== 0 ? p : r.y - S.y;
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
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
                    var S = {
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
                      p = v.extend(S, r);
                    return (g(p, r), p);
                  }),
                  (l.nextGroup = function (r) {
                    return r ? l._nextNonCollidingGroupId-- : l._nextCollidingGroupId++;
                  }),
                  (l.nextCategory = function () {
                    return ((l._nextCategory = l._nextCategory << 1), l._nextCategory);
                  }));
                var g = function (r, S) {
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
                    h.rotate(r.axes, r.angle),
                    m.update(r.bounds, r.vertices, r.velocity),
                    l.set(r, {
                      axes: S.axes || r.axes,
                      area: S.area || r.area,
                      mass: S.mass || r.mass,
                      inertia: S.inertia || r.inertia,
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
                      (r.axes = h.fromVertices(r.vertices)),
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
                        var w = [];
                        for (C = 0; C < S.length; C++) w = w.concat(S[C].vertices);
                        c.clockwiseSort(w);
                        var L = c.hull(w),
                          G = c.centre(L);
                        (l.setVertices(r, L), c.translate(r.vertices, G));
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
                      var w = r.parts[R];
                      ((w.position.x += C.x),
                        (w.position.y += C.y),
                        c.translate(w.vertices, C),
                        m.update(w.bounds, w.vertices, r.velocity));
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
                      var w = r.parts[R];
                      ((w.angle += C),
                        c.rotate(w.vertices, C, r.position),
                        h.rotate(w.axes, C),
                        m.update(w.bounds, w.vertices, r.velocity),
                        R > 0 && d.rotateAbout(w.position, C, r.position, w.position));
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
                    l.setAngularVelocity(r, v.sign(l.getAngularVelocity(r)) * S);
                  }),
                  (l.translate = function (r, S, p) {
                    l.setPosition(r, d.add(r.position, S), p);
                  }),
                  (l.rotate = function (r, S, p, C) {
                    if (!p) l.setAngle(r, r.angle + S, C);
                    else {
                      var R = Math.cos(S),
                        w = Math.sin(S),
                        L = r.position.x - p.x,
                        G = r.position.y - p.y;
                      (l.setPosition(r, { x: p.x + (L * R - G * w), y: p.y + (L * w + G * R) }, C),
                        l.setAngle(r, r.angle + S, C));
                    }
                  }),
                  (l.scale = function (r, S, p, C) {
                    var R = 0,
                      w = 0;
                    C = C || r.position;
                    for (var L = 0; L < r.parts.length; L++) {
                      var G = r.parts[L];
                      (c.scale(G.vertices, S, p, C),
                        (G.axes = h.fromVertices(G.vertices)),
                        (G.area = c.area(G.vertices)),
                        l.setMass(G, r.density * G.area),
                        c.translate(G.vertices, { x: -G.position.x, y: -G.position.y }),
                        l.setInertia(G, l._inertiaScale * c.inertia(G.vertices, G.mass)),
                        c.translate(G.vertices, { x: G.position.x, y: G.position.y }),
                        L > 0 && ((R += G.area), (w += G.inertia)),
                        (G.position.x = C.x + (G.position.x - C.x) * S),
                        (G.position.y = C.y + (G.position.y - C.y) * p),
                        m.update(G.bounds, G.vertices, r.velocity));
                    }
                    (r.parts.length > 1 &&
                      ((r.area = R),
                      r.isStatic || (l.setMass(r, r.density * R), l.setInertia(r, w))),
                      r.circleRadius &&
                        (S === p ? (r.circleRadius *= S) : (r.circleRadius = null)));
                  }),
                  (l.update = function (r, S) {
                    S = (typeof S < 'u' ? S : 1e3 / 60) * r.timeScale;
                    var p = S * S,
                      C = l._timeCorrection ? S / (r.deltaTime || S) : 1,
                      R = 1 - r.frictionAir * (S / v._baseDelta),
                      w = (r.position.x - r.positionPrev.x) * C,
                      L = (r.position.y - r.positionPrev.y) * C;
                    ((r.velocity.x = w * R + (r.force.x / r.mass) * p),
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
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
                      if (v && g) for (var S = 0; S < g.length; S++) g[S] !== v && r.push(g[S]);
                      d.events[m[h]] = r;
                    }
                  }),
                  (l.trigger = function (d, f, v) {
                    var m,
                      h,
                      g,
                      r,
                      S = d.events;
                    if (S && c.keys(S).length > 0) {
                      (v || (v = {}), (m = f.split(' ')));
                      for (var p = 0; p < m.length; p++)
                        if (((h = m[p]), (g = S[h]), g)) {
                          ((r = c.clone(v, !1)), (r.name = h), (r.source = d));
                          for (var C = 0; C < g.length; C++) g[C].apply(d, [r]);
                        }
                    }
                  }));
              })();
            },
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
                      for (var S = 0; S < m.composites.length; S++) {
                        var p = m.composites[S];
                        l.setModified(p, h, g, r);
                      }
                  }),
                  (l.add = function (m, h) {
                    var g = [].concat(h);
                    c.trigger(m, 'beforeAdd', { object: h });
                    for (var r = 0; r < g.length; r++) {
                      var S = g[r];
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
                    return (c.trigger(m, 'afterAdd', { object: h }), m);
                  }),
                  (l.remove = function (m, h, g) {
                    var r = [].concat(h);
                    c.trigger(m, 'beforeRemove', { object: h });
                    for (var S = 0; S < r.length; S++) {
                      var p = r[S];
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
                      var S = l.allBodies(h);
                      l.removeCompositeAt(m, r);
                      for (var p = 0; p < S.length; p++) S[p].sleepCounter = 0;
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
                      for (var S = 0; S < m.composites.length; S++)
                        l.removeBody(m.composites[S], h, !0);
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
                      for (var S = 0; S < m.composites.length; S++)
                        l.removeConstraint(m.composites[S], h, !0);
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
                    var r, S;
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
                      ? ((S = r.filter(function (p) {
                          return p.id.toString() === h.toString();
                        })),
                        S.length === 0 ? null : S[0])
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
                    for (var r = g ? l.allBodies(m) : m.bodies, S = 0; S < r.length; S++)
                      v.translate(r[S], h);
                    return m;
                  }),
                  (l.rotate = function (m, h, g, r) {
                    for (
                      var S = Math.cos(h),
                        p = Math.sin(h),
                        C = r ? l.allBodies(m) : m.bodies,
                        R = 0;
                      R < C.length;
                      R++
                    ) {
                      var w = C[R],
                        L = w.position.x - g.x,
                        G = w.position.y - g.y;
                      (v.setPosition(w, { x: g.x + (L * S - G * p), y: g.y + (L * p + G * S) }),
                        v.rotate(w, h));
                    }
                    return m;
                  }),
                  (l.scale = function (m, h, g, r, S) {
                    for (var p = S ? l.allBodies(m) : m.bodies, C = 0; C < p.length; C++) {
                      var R = p[C],
                        w = R.position.x - r.x,
                        L = R.position.y - r.y;
                      (v.setPosition(R, { x: r.x + w * h, y: r.y + L * g }), v.scale(R, h, g));
                    }
                    return m;
                  }),
                  (l.bounds = function (m) {
                    for (var h = l.allBodies(m), g = [], r = 0; r < h.length; r += 1) {
                      var S = h[r];
                      g.push(S.bounds.min, S.bounds.max);
                    }
                    return f.create(g);
                  }));
              })();
            },
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
                      var S = v[r],
                        p = c.getSpeed(S),
                        C = c.getAngularSpeed(S),
                        R = p * p + C * C;
                      if (S.force.x !== 0 || S.force.y !== 0) {
                        l.set(S, !1);
                        continue;
                      }
                      var w = Math.min(S.motion, R),
                        L = Math.max(S.motion, R);
                      ((S.motion = l._minBias * w + (1 - l._minBias) * L),
                        S.sleepThreshold > 0 && S.motion < g
                          ? ((S.sleepCounter += 1),
                            S.sleepCounter >= S.sleepThreshold / h && l.set(S, !0))
                          : S.sleepCounter > 0 && (S.sleepCounter -= 1));
                    }
                  }),
                  (l.afterCollisions = function (v) {
                    for (var m = l._motionSleepThreshold, h = 0; h < v.length; h++) {
                      var g = v[h];
                      if (g.isActive) {
                        var r = g.collision,
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
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
                    var S = r && r.table[d.id(h, g)],
                      p;
                    (S
                      ? (p = S.collision)
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
                      L = p.penetration,
                      G = p.supports,
                      M = C.overlap,
                      O = C.axis,
                      D = O.x,
                      _ = O.y,
                      H = g.position.x - h.position.x,
                      U = g.position.y - h.position.y;
                    (D * H + _ * U >= 0 && ((D = -D), (_ = -_)),
                      (R.x = D),
                      (R.y = _),
                      (w.x = -_),
                      (w.y = D),
                      (L.x = D * M),
                      (L.y = _ * M),
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
                  (l._overlapAxes = function (h, g, r, S) {
                    var p = g.length,
                      C = r.length,
                      R = g[0].x,
                      w = g[0].y,
                      L = r[0].x,
                      G = r[0].y,
                      M = S.length,
                      O = Number.MAX_VALUE,
                      D = 0,
                      _,
                      H,
                      U,
                      Y,
                      V,
                      F;
                    for (V = 0; V < M; V++) {
                      var ie = S[V],
                        ae = ie.x,
                        A = ie.y,
                        N = R * ae + w * A,
                        q = L * ae + G * A,
                        $ = N,
                        le = q;
                      for (F = 1; F < p; F += 1)
                        ((Y = g[F].x * ae + g[F].y * A), Y > $ ? ($ = Y) : Y < N && (N = Y));
                      for (F = 1; F < C; F += 1)
                        ((Y = r[F].x * ae + r[F].y * A), Y > le ? (le = Y) : Y < q && (q = Y));
                      if (
                        ((H = $ - q),
                        (U = le - N),
                        (_ = H < U ? H : U),
                        _ < O && ((O = _), (D = V), _ <= 0))
                      )
                        break;
                    }
                    ((h.axis = S[D]), (h.overlap = O));
                  }),
                  (l._findSupports = function (h, g, r, S) {
                    var p = g.vertices,
                      C = p.length,
                      R = h.position.x,
                      w = h.position.y,
                      L = r.x * S,
                      G = r.y * S,
                      M = p[0],
                      O = M,
                      D = L * (R - O.x) + G * (w - O.y),
                      _,
                      H,
                      U;
                    for (U = 1; U < C; U += 1)
                      ((O = p[U]),
                        (H = L * (R - O.x) + G * (w - O.y)),
                        H < D && ((D = H), (M = O)));
                    return (
                      (_ = p[(C + M.index - 1) % C]),
                      (D = L * (R - _.x) + G * (w - _.y)),
                      (O = p[(M.index + 1) % C]),
                      L * (R - O.x) + G * (w - O.y) < D
                        ? ((f[0] = M), (f[1] = O), f)
                        : ((f[0] = M), (f[1] = _), f)
                    );
                  }));
              })();
            },
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
                      S = f.parentB;
                    ((d.isActive = !0),
                      (d.timeUpdated = v),
                      (d.collision = f),
                      (d.separation = f.depth),
                      (d.inverseMass = r.inverseMass + S.inverseMass),
                      (d.friction = r.friction < S.friction ? r.friction : S.friction),
                      (d.frictionStatic =
                        r.frictionStatic > S.frictionStatic ? r.frictionStatic : S.frictionStatic),
                      (d.restitution =
                        r.restitution > S.restitution ? r.restitution : S.restitution),
                      (d.slop = r.slop > S.slop ? r.slop : S.slop),
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
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
                    var S = r.bodyA ? d.add(r.bodyA.position, r.pointA) : r.pointA,
                      p = r.bodyB ? d.add(r.bodyB.position, r.pointB) : r.pointB,
                      C = d.magnitude(d.sub(S, p));
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
                      var S = g[r],
                        p = S.constraintImpulse;
                      S.isStatic ||
                        (p.x === 0 && p.y === 0 && p.angle === 0) ||
                        ((S.position.x += p.x), (S.position.y += p.y), (S.angle += p.angle));
                    }
                  }),
                  (l.solveAll = function (g, r) {
                    for (var S = h.clamp(r / h._baseDelta, 0, 1), p = 0; p < g.length; p += 1) {
                      var C = g[p],
                        R = !C.bodyA || (C.bodyA && C.bodyA.isStatic),
                        w = !C.bodyB || (C.bodyB && C.bodyB.isStatic);
                      (R || w) && l.solve(g[p], S);
                    }
                    for (p = 0; p < g.length; p += 1)
                      ((C = g[p]),
                        (R = !C.bodyA || (C.bodyA && C.bodyA.isStatic)),
                        (w = !C.bodyB || (C.bodyB && C.bodyB.isStatic)),
                        !R && !w && l.solve(g[p], S));
                  }),
                  (l.solve = function (g, r) {
                    var S = g.bodyA,
                      p = g.bodyB,
                      C = g.pointA,
                      R = g.pointB;
                    if (!(!S && !p)) {
                      (S &&
                        !S.isStatic &&
                        (d.rotate(C, S.angle - g.angleA, C), (g.angleA = S.angle)),
                        p &&
                          !p.isStatic &&
                          (d.rotate(R, p.angle - g.angleB, R), (g.angleB = p.angle)));
                      var w = C,
                        L = R;
                      if (
                        (S && (w = d.add(S.position, C)),
                        p && (L = d.add(p.position, R)),
                        !(!w || !L))
                      ) {
                        var G = d.sub(w, L),
                          M = d.magnitude(G);
                        M < l._minLength && (M = l._minLength);
                        var O = (M - g.length) / M,
                          D = g.stiffness >= 1 || g.length === 0,
                          _ = D ? g.stiffness * r : g.stiffness * r * r,
                          H = g.damping * r,
                          U = d.mult(G, O * _),
                          Y = (S ? S.inverseMass : 0) + (p ? p.inverseMass : 0),
                          V = (S ? S.inverseInertia : 0) + (p ? p.inverseInertia : 0),
                          F = Y + V,
                          ie,
                          ae,
                          A,
                          N,
                          q;
                        if (H > 0) {
                          var $ = d.create();
                          ((A = d.div(G, M)),
                            (q = d.sub(
                              (p && d.sub(p.position, p.positionPrev)) || $,
                              (S && d.sub(S.position, S.positionPrev)) || $
                            )),
                            (N = d.dot(A, q)));
                        }
                        (S &&
                          !S.isStatic &&
                          ((ae = S.inverseMass / Y),
                          (S.constraintImpulse.x -= U.x * ae),
                          (S.constraintImpulse.y -= U.y * ae),
                          (S.position.x -= U.x * ae),
                          (S.position.y -= U.y * ae),
                          H > 0 &&
                            ((S.positionPrev.x -= H * A.x * N * ae),
                            (S.positionPrev.y -= H * A.y * N * ae)),
                          (ie =
                            (d.cross(C, U) / F) *
                            l._torqueDampen *
                            S.inverseInertia *
                            (1 - g.angularStiffness)),
                          (S.constraintImpulse.angle -= ie),
                          (S.angle -= ie)),
                          p &&
                            !p.isStatic &&
                            ((ae = p.inverseMass / Y),
                            (p.constraintImpulse.x += U.x * ae),
                            (p.constraintImpulse.y += U.y * ae),
                            (p.position.x += U.x * ae),
                            (p.position.y += U.y * ae),
                            H > 0 &&
                              ((p.positionPrev.x += H * A.x * N * ae),
                              (p.positionPrev.y += H * A.y * N * ae)),
                            (ie =
                              (d.cross(R, U) / F) *
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
                      var S = g[r],
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
                            v.update(R.bounds, R.vertices, S.velocity));
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
                      S = (g.bodyA ? g.bodyA.position.y : 0) + (g.pointA ? g.pointA.y : 0),
                      p = (g.bodyB ? g.bodyB.position.x : 0) + (g.pointB ? g.pointB.x : 0),
                      C = (g.bodyB ? g.bodyB.position.y : 0) + (g.pointB ? g.pointB.y : 0),
                      R = r - p,
                      w = S - C;
                    return Math.sqrt(R * R + w * w);
                  }));
              })();
            },
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
                          S;
                        ((S = r.x * m - r.y * h), (r.y = r.x * h + r.y * m), (r.x = S));
                      }
                  }));
              })();
            },
            function (x, y, o) {
              var l = {};
              x.exports = l;
              var c = o(3),
                d = o(0),
                f = o(4),
                v = o(1),
                m = o(2);
              (function () {
                ((l.rectangle = function (h, g, r, S, p) {
                  p = p || {};
                  var C = {
                    label: 'Rectangle Body',
                    position: { x: h, y: g },
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
                  (l.trapezoid = function (h, g, r, S, p, C) {
                    ((C = C || {}),
                      p >= 1 && d.warn('Bodies.trapezoid: slope parameter must be < 1.'),
                      (p *= 0.5));
                    var R = (1 - p * 2) * r,
                      w = r * p,
                      L = w + R,
                      G = L + w,
                      M;
                    p < 0.5
                      ? (M = 'L 0 0 L ' + w + ' ' + -S + ' L ' + L + ' ' + -S + ' L ' + G + ' 0')
                      : (M = 'L 0 0 L ' + L + ' ' + -S + ' L ' + G + ' 0');
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
                  (l.circle = function (h, g, r, S, p) {
                    S = S || {};
                    var C = { label: 'Circle Body', circleRadius: r };
                    p = p || 25;
                    var R = Math.ceil(Math.max(10, Math.min(p, r)));
                    return (R % 2 === 1 && (R += 1), l.polygon(h, g, R, r, d.extend({}, C, S)));
                  }),
                  (l.polygon = function (h, g, r, S, p) {
                    if (((p = p || {}), r < 3)) return l.circle(h, g, S, p);
                    for (var C = (2 * Math.PI) / r, R = '', w = C * 0.5, L = 0; L < r; L += 1) {
                      var G = w + L * C,
                        M = Math.cos(G) * S,
                        O = Math.sin(G) * S;
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
                  (l.fromVertices = function (h, g, r, S, p, C, R, w) {
                    var L = d.getDecomp(),
                      G,
                      M,
                      O,
                      D,
                      _,
                      H,
                      U,
                      Y,
                      V,
                      F,
                      ie;
                    for (
                      G = !!(L && L.quickDecomp),
                        S = S || {},
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
                        ((H = r[F]),
                        (D = c.isConvex(H)),
                        (_ = !D),
                        _ &&
                          !G &&
                          d.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                          ),
                        D || !G)
                      )
                        (D ? (H = c.clockwiseSort(H)) : (H = c.hull(H)),
                          O.push({ position: { x: h, y: g }, vertices: H }));
                      else {
                        var ae = H.map(function (oe) {
                          return [oe.x, oe.y];
                        });
                        (L.makeCCW(ae),
                          C !== !1 && L.removeCollinearPoints(ae, C),
                          w !== !1 && L.removeDuplicatePoints && L.removeDuplicatePoints(ae, w));
                        var A = L.quickDecomp(ae);
                        for (U = 0; U < A.length; U++) {
                          var N = A[U],
                            q = N.map(function (oe) {
                              return { x: oe[0], y: oe[1] };
                            });
                          (R > 0 && c.area(q) < R) ||
                            O.push({ position: c.centre(q), vertices: q });
                        }
                      }
                    for (U = 0; U < O.length; U++) O[U] = f.create(d.extend(O[U], S));
                    if (p) {
                      var $ = 5;
                      for (U = 0; U < O.length; U++) {
                        var le = O[U];
                        for (Y = U + 1; Y < O.length; Y++) {
                          var z = O[Y];
                          if (v.overlaps(le.bounds, z.bounds)) {
                            var Z = le.vertices,
                              P = z.vertices;
                            for (V = 0; V < le.vertices.length; V++)
                              for (ie = 0; ie < z.vertices.length; ie++) {
                                var ue = m.magnitudeSquared(m.sub(Z[(V + 1) % Z.length], P[ie])),
                                  se = m.magnitudeSquared(m.sub(Z[V], P[(ie + 1) % P.length]));
                                ue < $ &&
                                  se < $ &&
                                  ((Z[V].isInternal = !0), (P[ie].isInternal = !0));
                              }
                          }
                        }
                      }
                    }
                    return O.length > 1
                      ? ((M = f.create(d.extend({ parts: O.slice(0) }, S))),
                        f.setPosition(M, { x: h, y: g }),
                        M)
                      : O[0];
                  }));
              })();
            },
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
                      S = f.collisions,
                      p = 0,
                      C,
                      R;
                    for (m.sort(l._compareBoundsX), C = 0; C < h; C++) {
                      var w = m[C],
                        L = w.bounds,
                        G = w.bounds.max.x,
                        M = w.bounds.max.y,
                        O = w.bounds.min.y,
                        D = w.isStatic || w.isSleeping,
                        _ = w.parts.length,
                        H = _ === 1;
                      for (R = C + 1; R < h; R++) {
                        var U = m[R],
                          Y = U.bounds;
                        if (Y.min.x > G) break;
                        if (
                          !(M < Y.min.y || O > Y.max.y) &&
                          !(D && (U.isStatic || U.isSleeping)) &&
                          g(w.collisionFilter, U.collisionFilter)
                        ) {
                          var V = U.parts.length;
                          if (H && V === 1) {
                            var F = r(w, U, v);
                            F && (S[p++] = F);
                          } else
                            for (var ie = _ > 1 ? 1 : 0, ae = V > 1 ? 1 : 0, A = ie; A < _; A++)
                              for (var N = w.parts[A], L = N.bounds, q = ae; q < V; q++) {
                                var $ = U.parts[q],
                                  Y = $.bounds;
                                if (
                                  !(
                                    L.min.x > Y.max.x ||
                                    L.max.x < Y.min.x ||
                                    L.max.y < Y.min.y ||
                                    L.min.y > Y.max.y
                                  )
                                ) {
                                  var F = r(N, $, v);
                                  F && (S[p++] = F);
                                }
                              }
                        }
                      }
                    }
                    return (S.length !== p && (S.length = p), S);
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
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
                      S = d.changedTouches,
                      p,
                      C;
                    return (
                      S
                        ? ((p = S[0].pageX - m.left - g), (C = S[0].pageY - m.top - r))
                        : ((p = d.pageX - m.left - g), (C = d.pageY - m.top - r)),
                      {
                        x: p / ((f.clientWidth / (f.width || f.clientWidth)) * v),
                        y: C / ((f.clientHeight / (f.height || f.clientHeight)) * v),
                      }
                    );
                  }));
              })();
            },
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
                            S = l.resolve(g);
                          return (
                            S && !l.versionSatisfies(S.version, r.range)
                              ? (c.warn(
                                  'Plugin.dependencies:',
                                  l.toString(S),
                                  'does not satisfy',
                                  l.toString(r),
                                  'used by',
                                  l.toString(v) + '.'
                                ),
                                (S._warned = !0),
                                (d._warned = !0))
                              : S ||
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
            function (x, y) {
              var o = {};
              ((x.exports = o),
                (function () {
                  o.create = function (l) {
                    return { vertex: l, normalImpulse: 0, tangentImpulse: 0 };
                  };
                })());
            },
            function (x, y, o) {
              var l = {};
              x.exports = l;
              var c = o(7),
                d = o(18),
                f = o(13),
                v = o(19),
                m = o(5),
                h = o(6),
                g = o(10),
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
                      L = p.detector,
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
                    var H = h.allBodies(w),
                      U = h.allConstraints(w);
                    for (
                      w.isModified && (f.setBodies(L, H), h.setModified(w, !1, !1, !0)),
                        p.enableSleeping && c.update(H, C),
                        l._bodiesApplyGravity(H, p.gravity),
                        C > 0 && l._bodiesUpdate(H, C),
                        m.trigger(p, 'beforeSolve', _),
                        g.preSolveAll(H),
                        D = 0;
                      D < p.constraintIterations;
                      D++
                    )
                      g.solveAll(U, C);
                    g.postSolveAll(H);
                    var Y = f.collisions(L);
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
                      d.postSolvePosition(H), g.preSolveAll(H), D = 0;
                      D < p.constraintIterations;
                      D++
                    )
                      g.solveAll(U, C);
                    for (
                      g.postSolveAll(H), d.preSolveVelocity(G.list), D = 0;
                      D < p.velocityIterations;
                      D++
                    )
                      d.solveVelocity(G.list, C);
                    return (
                      l._bodiesUpdateVelocities(H),
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
                      l._bodiesClearForces(H),
                      m.trigger(p, 'afterUpdate', _),
                      (p.timing.lastElapsed = r.now() - R),
                      p
                    );
                  }),
                  (l.merge = function (p, C) {
                    if ((r.extend(p, C), C.world)) {
                      ((p.world = C.world), l.clear(p));
                      for (var R = h.allBodies(p.world), w = 0; w < R.length; w++) {
                        var L = R[w];
                        (c.set(L, !1), (L.id = r.nextId()));
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
                      for (var L = 0; L < w; L++) {
                        var G = p[L];
                        G.isStatic ||
                          G.isSleeping ||
                          ((G.force.y += G.mass * C.y * R), (G.force.x += G.mass * C.x * R));
                      }
                  }),
                  (l._bodiesUpdate = function (p, C) {
                    for (var R = p.length, w = 0; w < R; w++) {
                      var L = p[w];
                      L.isStatic || L.isSleeping || S.update(L, C);
                    }
                  }),
                  (l._bodiesUpdateVelocities = function (p) {
                    for (var C = p.length, R = 0; R < C; R++) S.updateVelocities(p[R]);
                  }));
              })();
            },
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
                      S,
                      p,
                      C,
                      R,
                      w,
                      L,
                      G = l._positionDampen * (h || 1),
                      M = d.clamp(m / d._baseDelta, 0, 1),
                      O = v.length;
                    for (g = 0; g < O; g++)
                      ((r = v[g]),
                        !(!r.isActive || r.isSensor) &&
                          ((S = r.collision),
                          (p = S.parentA),
                          (C = S.parentB),
                          (R = S.normal),
                          (r.separation =
                            S.depth +
                            R.x * (C.positionImpulse.x - p.positionImpulse.x) +
                            R.y * (C.positionImpulse.y - p.positionImpulse.y))));
                    for (g = 0; g < O; g++)
                      ((r = v[g]),
                        !(!r.isActive || r.isSensor) &&
                          ((S = r.collision),
                          (p = S.parentA),
                          (C = S.parentB),
                          (R = S.normal),
                          (L = r.separation - r.slop * M),
                          (p.isStatic || C.isStatic) && (L *= 2),
                          p.isStatic ||
                            p.isSleeping ||
                            ((w = G / p.totalContacts),
                            (p.positionImpulse.x += R.x * L * w),
                            (p.positionImpulse.y += R.y * L * w)),
                          C.isStatic ||
                            C.isSleeping ||
                            ((w = G / C.totalContacts),
                            (C.positionImpulse.x -= R.x * L * w),
                            (C.positionImpulse.y -= R.y * L * w))));
                  }),
                  (l.postSolvePosition = function (v) {
                    for (
                      var m = l._positionWarming,
                        h = v.length,
                        g = c.translate,
                        r = f.update,
                        S = 0;
                      S < h;
                      S++
                    ) {
                      var p = v[S],
                        C = p.positionImpulse,
                        R = C.x,
                        w = C.y,
                        L = p.velocity;
                      if (((p.totalContacts = 0), R !== 0 || w !== 0)) {
                        for (var G = 0; G < p.parts.length; G++) {
                          var M = p.parts[G];
                          (g(M.vertices, C),
                            r(M.bounds, M.vertices, L),
                            (M.position.x += R),
                            (M.position.y += w));
                        }
                        ((p.positionPrev.x += R),
                          (p.positionPrev.y += w),
                          R * L.x + w * L.y < 0
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
                        var S = r.contacts,
                          p = r.contactCount,
                          C = r.collision,
                          R = C.parentA,
                          w = C.parentB,
                          L = C.normal,
                          G = C.tangent;
                        for (g = 0; g < p; g++) {
                          var M = S[g],
                            O = M.vertex,
                            D = M.normalImpulse,
                            _ = M.tangentImpulse;
                          if (D !== 0 || _ !== 0) {
                            var H = L.x * D + G.x * _,
                              U = L.y * D + G.y * _;
                            (R.isStatic ||
                              R.isSleeping ||
                              ((R.positionPrev.x += H * R.inverseMass),
                              (R.positionPrev.y += U * R.inverseMass),
                              (R.anglePrev +=
                                R.inverseInertia *
                                ((O.x - R.position.x) * U - (O.y - R.position.y) * H))),
                              w.isStatic ||
                                w.isSleeping ||
                                ((w.positionPrev.x -= H * w.inverseMass),
                                (w.positionPrev.y -= U * w.inverseMass),
                                (w.anglePrev -=
                                  w.inverseInertia *
                                  ((O.x - w.position.x) * U - (O.y - w.position.y) * H))));
                          }
                        }
                      }
                    }
                  }),
                  (l.solveVelocity = function (v, m) {
                    var h = m / d._baseDelta,
                      g = h * h,
                      r = g * h,
                      S = -l._restingThresh * h,
                      p = l._restingThreshTangent,
                      C = l._frictionNormalMultiplier * h,
                      R = l._frictionMaxStatic,
                      w = v.length,
                      L,
                      G,
                      M,
                      O;
                    for (M = 0; M < w; M++) {
                      var D = v[M];
                      if (!(!D.isActive || D.isSensor)) {
                        var _ = D.collision,
                          H = _.parentA,
                          U = _.parentB,
                          Y = _.normal.x,
                          V = _.normal.y,
                          F = _.tangent.x,
                          ie = _.tangent.y,
                          ae = D.inverseMass,
                          A = D.friction * D.frictionStatic * C,
                          N = D.contacts,
                          q = D.contactCount,
                          $ = 1 / q,
                          le = H.position.x - H.positionPrev.x,
                          z = H.position.y - H.positionPrev.y,
                          Z = H.angle - H.anglePrev,
                          P = U.position.x - U.positionPrev.x,
                          ue = U.position.y - U.positionPrev.y,
                          se = U.angle - U.anglePrev;
                        for (O = 0; O < q; O++) {
                          var oe = N[O],
                            ve = oe.vertex,
                            xe = ve.x - H.position.x,
                            Ue = ve.y - H.position.y,
                            Le = ve.x - U.position.x,
                            Ye = ve.y - U.position.y,
                            Ve = le - Ue * Z,
                            We = z + xe * Z,
                            Qe = P - Ye * se,
                            fe = ue + Le * se,
                            Dt = Ve - Qe,
                            pe = We - fe,
                            qe = Y * Dt + V * pe,
                            pt = F * Dt + ie * pe,
                            An = D.separation + qe,
                            on = Math.min(An, 1);
                          on = An < 0 ? 0 : on;
                          var wt = on * A;
                          pt < -wt || pt > wt
                            ? ((G = pt > 0 ? pt : -pt),
                              (L = D.friction * (pt > 0 ? 1 : -1) * r),
                              L < -G ? (L = -G) : L > G && (L = G))
                            : ((L = pt), (G = R));
                          var Pa = xe * V - Ue * Y,
                            ut = Le * V - Ye * Y,
                            zt = $ / (ae + H.inverseInertia * Pa * Pa + U.inverseInertia * ut * ut),
                            ke = (1 + D.restitution) * qe * zt;
                          if (((L *= zt), qe < S)) oe.normalImpulse = 0;
                          else {
                            var el = oe.normalImpulse;
                            ((oe.normalImpulse += ke),
                              oe.normalImpulse > 0 && (oe.normalImpulse = 0),
                              (ke = oe.normalImpulse - el));
                          }
                          if (pt < -p || pt > p) oe.tangentImpulse = 0;
                          else {
                            var Jt = oe.tangentImpulse;
                            ((oe.tangentImpulse += L),
                              oe.tangentImpulse < -G && (oe.tangentImpulse = -G),
                              oe.tangentImpulse > G && (oe.tangentImpulse = G),
                              (L = oe.tangentImpulse - Jt));
                          }
                          var _n = Y * ke + F * L,
                            On = V * ke + ie * L;
                          (H.isStatic ||
                            H.isSleeping ||
                            ((H.positionPrev.x += _n * H.inverseMass),
                            (H.positionPrev.y += On * H.inverseMass),
                            (H.anglePrev += (xe * On - Ue * _n) * H.inverseInertia)),
                            U.isStatic ||
                              U.isSleeping ||
                              ((U.positionPrev.x -= _n * U.inverseMass),
                              (U.positionPrev.y -= On * U.inverseMass),
                              (U.anglePrev -= (Le * On - Ye * _n) * U.inverseInertia)));
                        }
                      }
                    }
                  }));
              })();
            },
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
                      S = f.table,
                      p = f.list,
                      C = p.length,
                      R = C,
                      w = f.collisionStart,
                      L = f.collisionEnd,
                      G = f.collisionActive,
                      M = v.length,
                      O = 0,
                      D = 0,
                      _ = 0,
                      H,
                      U,
                      Y;
                    for (Y = 0; Y < M; Y++)
                      ((H = v[Y]),
                        (U = H.pair),
                        U
                          ? (U.isActive && (G[_++] = U), h(U, H, m))
                          : ((U = g(H, m)), (S[U.id] = U), (w[O++] = U), (p[R++] = U)));
                    for (R = 0, C = p.length, Y = 0; Y < C; Y++)
                      ((U = p[Y]),
                        U.timeUpdated >= m
                          ? (p[R++] = U)
                          : (r(U, !1, m),
                            U.collision.bodyA.sleepCounter > 0 && U.collision.bodyB.sleepCounter > 0
                              ? (p[R++] = U)
                              : ((L[D++] = U), delete S[U.id])));
                    (p.length !== R && (p.length = R),
                      w.length !== O && (w.length = O),
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
            function (x, y, o) {
              var l = (x.exports = o(21));
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
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
            function (x, y, o) {
              var l = {};
              x.exports = l;
              var c = o(6),
                d = o(10),
                f = o(0),
                v = o(4),
                m = o(12),
                h = f.deprecated;
              (function () {
                ((l.stack = function (g, r, S, p, C, R, w) {
                  for (
                    var L = c.create({ label: 'Stack' }), G = g, M = r, O, D = 0, _ = 0;
                    _ < p;
                    _++
                  ) {
                    for (var H = 0, U = 0; U < S; U++) {
                      var Y = w(G, M, U, _, O, D);
                      if (Y) {
                        var V = Y.bounds.max.y - Y.bounds.min.y,
                          F = Y.bounds.max.x - Y.bounds.min.x;
                        (V > H && (H = V),
                          v.translate(Y, { x: F * 0.5, y: V * 0.5 }),
                          (G = Y.bounds.max.x + C),
                          c.addBody(L, Y),
                          (O = Y),
                          (D += 1));
                      } else G += C;
                    }
                    ((M += H + R), (G = g));
                  }
                  return L;
                }),
                  (l.chain = function (g, r, S, p, C, R) {
                    for (var w = g.bodies, L = 1; L < w.length; L++) {
                      var G = w[L - 1],
                        M = w[L],
                        O = G.bounds.max.y - G.bounds.min.y,
                        D = G.bounds.max.x - G.bounds.min.x,
                        _ = M.bounds.max.y - M.bounds.min.y,
                        H = M.bounds.max.x - M.bounds.min.x,
                        U = {
                          bodyA: G,
                          pointA: { x: D * r, y: O * S },
                          bodyB: M,
                          pointB: { x: H * p, y: _ * C },
                        },
                        Y = f.extend(U, R);
                      c.addConstraint(g, d.create(Y));
                    }
                    return ((g.label += ' Chain'), g);
                  }),
                  (l.mesh = function (g, r, S, p, C) {
                    var R = g.bodies,
                      w,
                      L,
                      G,
                      M,
                      O;
                    for (w = 0; w < S; w++) {
                      for (L = 1; L < r; L++)
                        ((G = R[L - 1 + w * r]),
                          (M = R[L + w * r]),
                          c.addConstraint(g, d.create(f.extend({ bodyA: G, bodyB: M }, C))));
                      if (w > 0)
                        for (L = 0; L < r; L++)
                          ((G = R[L + (w - 1) * r]),
                            (M = R[L + w * r]),
                            c.addConstraint(g, d.create(f.extend({ bodyA: G, bodyB: M }, C))),
                            p &&
                              L > 0 &&
                              ((O = R[L - 1 + (w - 1) * r]),
                              c.addConstraint(g, d.create(f.extend({ bodyA: O, bodyB: M }, C)))),
                            p &&
                              L < r - 1 &&
                              ((O = R[L + 1 + (w - 1) * r]),
                              c.addConstraint(g, d.create(f.extend({ bodyA: O, bodyB: M }, C)))));
                    }
                    return ((g.label += ' Mesh'), g);
                  }),
                  (l.pyramid = function (g, r, S, p, C, R, w) {
                    return l.stack(g, r, S, p, C, R, function (L, G, M, O, D, _) {
                      var H = Math.min(p, Math.ceil(S / 2)),
                        U = D ? D.bounds.max.x - D.bounds.min.x : 0;
                      if (!(O > H)) {
                        O = H - O;
                        var Y = O,
                          V = S - 1 - O;
                        if (!(M < Y || M > V)) {
                          _ === 1 && v.translate(D, { x: (M + (S % 2 === 1 ? 1 : -1)) * U, y: 0 });
                          var F = D ? M * U : 0;
                          return w(g + F + M * C, G, M, O, D, _);
                        }
                      }
                    });
                  }),
                  (l.newtonsCradle = function (g, r, S, p, C) {
                    for (var R = c.create({ label: 'Newtons Cradle' }), w = 0; w < S; w++) {
                      var L = 1.9,
                        G = m.circle(g + w * (p * L), r + C, p, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        M = d.create({ pointA: { x: g + w * (p * L), y: r }, bodyB: G });
                      (c.addBody(R, G), c.addConstraint(R, M));
                    }
                    return R;
                  }),
                  h(
                    l,
                    'newtonsCradle',
                    'Composites.newtonsCradle ➤ moved to newtonsCradle example'
                  ),
                  (l.car = function (g, r, S, p, C) {
                    var R = v.nextGroup(!0),
                      w = 20,
                      L = -S * 0.5 + w,
                      G = S * 0.5 - w,
                      M = 0,
                      O = c.create({ label: 'Car' }),
                      D = m.rectangle(g, r, S, p, {
                        collisionFilter: { group: R },
                        chamfer: { radius: p * 0.5 },
                        density: 2e-4,
                      }),
                      _ = m.circle(g + L, r + M, C, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      H = m.circle(g + G, r + M, C, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      U = d.create({
                        bodyB: D,
                        pointB: { x: L, y: M },
                        bodyA: _,
                        stiffness: 1,
                        length: 0,
                      }),
                      Y = d.create({
                        bodyB: D,
                        pointB: { x: G, y: M },
                        bodyA: H,
                        stiffness: 1,
                        length: 0,
                      });
                    return (
                      c.addBody(O, D),
                      c.addBody(O, _),
                      c.addBody(O, H),
                      c.addConstraint(O, U),
                      c.addConstraint(O, Y),
                      O
                    );
                  }),
                  h(l, 'car', 'Composites.car ➤ moved to car example'),
                  (l.softBody = function (g, r, S, p, C, R, w, L, G, M) {
                    ((G = f.extend({ inertia: 1 / 0 }, G)),
                      (M = f.extend({ stiffness: 0.2, render: { type: 'line', anchors: !1 } }, M)));
                    var O = l.stack(g, r, S, p, C, R, function (D, _) {
                      return m.circle(D, _, L, G);
                    });
                    return (l.mesh(O, S, p, w, M), (O.label = 'Soft Body'), O);
                  }),
                  h(l, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples'));
              })();
            },
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
                      S,
                      p,
                      C = h.world,
                      R = v.buckets,
                      w,
                      L,
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
                          for (S = D.startCol; S <= D.endCol; S++)
                            for (p = D.startRow; p <= D.endRow; p++) {
                              ((L = l._getBucketId(S, p)), (w = R[L]));
                              var _ =
                                  S >= O.startCol &&
                                  S <= O.endCol &&
                                  p >= O.startRow &&
                                  p <= O.endRow,
                                H =
                                  S >= M.region.startCol &&
                                  S <= M.region.endCol &&
                                  p >= M.region.startRow &&
                                  p <= M.region.endRow;
                              (!_ && H && H && w && l._bucketRemoveBody(v, w, M),
                                (M.region === O || (_ && !H) || g) &&
                                  (w || (w = l._createBucket(R, L)), l._bucketAddBody(v, w, M)));
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
                      S = Math.max(v.endRow, m.endRow);
                    return l._createRegion(h, g, r, S);
                  }),
                  (l._getRegion = function (v, m) {
                    var h = m.bounds,
                      g = Math.floor(h.min.x / v.bucketWidth),
                      r = Math.floor(h.max.x / v.bucketWidth),
                      S = Math.floor(h.min.y / v.bucketHeight),
                      p = Math.floor(h.max.y / v.bucketHeight);
                    return l._createRegion(g, r, S, p);
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
                      S = m.length,
                      p;
                    for (p = 0; p < S; p++) {
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
                      S;
                    m.splice(d.indexOf(m, h), 1);
                    var p = m.length;
                    for (S = 0; S < p; S++) {
                      var C = g[r(h, m[S])];
                      C && (C[2] -= 1);
                    }
                  }),
                  (l._createActivePairsList = function (v) {
                    var m,
                      h = v.pairs,
                      g = d.keys(h),
                      r = g.length,
                      S = [],
                      p;
                    for (p = 0; p < r; p++) ((m = h[g[p]]), m[2] > 0 ? S.push(m) : delete h[g[p]]);
                    return S;
                  }));
              })();
            },
            function (x, y, o) {
              var l = {};
              x.exports = l;
              var c = o(3),
                d = o(7),
                f = o(14),
                v = o(5),
                m = o(13),
                h = o(10),
                g = o(6),
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
                  var w = h.create({
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
                      constraint: w,
                      collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                    },
                    G = r.extend(L, C);
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
                      L = p.body;
                    if (R.button === 0) {
                      if (w.bodyB) (d.set(w.bodyB, !1), (w.pointA = R.position));
                      else
                        for (var G = 0; G < C.length; G++)
                          if (
                            ((L = C[G]),
                            S.contains(L.bounds, R.position) &&
                              m.canCollide(L.collisionFilter, p.collisionFilter))
                          )
                            for (var M = L.parts.length > 1 ? 1 : 0; M < L.parts.length; M++) {
                              var O = L.parts[M];
                              if (c.contains(O.vertices, R.position)) {
                                ((w.pointA = R.position),
                                  (w.bodyB = p.body = L),
                                  (w.pointB = {
                                    x: R.position.x - L.position.x,
                                    y: R.position.y - L.position.y,
                                  }),
                                  (w.angleB = L.angle),
                                  d.set(L, !1),
                                  v.trigger(p, 'startdrag', { mouse: R, body: L }));
                                break;
                              }
                            }
                    } else
                      ((w.bodyB = p.body = null),
                        (w.pointB = null),
                        L && v.trigger(p, 'enddrag', { mouse: R, body: L }));
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
            function (x, y, o) {
              var l = {};
              x.exports = l;
              var c = o(2),
                d = o(8),
                f = o(1),
                v = o(12),
                m = o(3);
              (function () {
                ((l.collides = function (h, g) {
                  for (
                    var r = [], S = g.length, p = h.bounds, C = d.collides, R = f.overlaps, w = 0;
                    w < S;
                    w++
                  ) {
                    var L = g[w],
                      G = L.parts.length,
                      M = G === 1 ? 0 : 1;
                    if (R(L.bounds, p))
                      for (var O = M; O < G; O++) {
                        var D = L.parts[O];
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
                  (l.ray = function (h, g, r, S) {
                    S = S || 1e-100;
                    for (
                      var p = c.angle(g, r),
                        C = c.magnitude(c.sub(g, r)),
                        R = (r.x + g.x) * 0.5,
                        w = (r.y + g.y) * 0.5,
                        L = v.rectangle(R, w, C, S, { angle: p }),
                        G = l.collides(L, h),
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
                    for (var S = [], p = 0; p < h.length; p++) {
                      var C = h[p],
                        R = f.overlaps(C.bounds, g);
                      ((R && !r) || (!R && r)) && S.push(C);
                    }
                    return S;
                  }),
                  (l.point = function (h, g) {
                    for (var r = [], S = 0; S < h.length; S++) {
                      var p = h[S];
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
            function (x, y, o) {
              var l = {};
              x.exports = l;
              var c = o(4),
                d = o(0),
                f = o(6),
                v = o(1),
                m = o(5),
                h = o(2),
                g = o(14);
              (function () {
                var r, S;
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
                  (S =
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
                    S(M.frameRequestId);
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
                      var H = { min: { x: 1 / 0, y: 1 / 0 }, max: { x: -1 / 0, y: -1 / 0 } }, U = 0;
                      U < O.length;
                      U += 1
                    ) {
                      var Y = O[U],
                        V = Y.bounds ? Y.bounds.min : Y.min || Y.position || Y,
                        F = Y.bounds ? Y.bounds.max : Y.max || Y.position || Y;
                      V &&
                        F &&
                        (V.x < H.min.x && (H.min.x = V.x),
                        F.x > H.max.x && (H.max.x = F.x),
                        V.y < H.min.y && (H.min.y = V.y),
                        F.y > H.max.y && (H.max.y = F.y));
                    }
                    var ie = H.max.x - H.min.x + 2 * D.x,
                      ae = H.max.y - H.min.y + 2 * D.y,
                      A = M.canvas.height,
                      N = M.canvas.width,
                      q = N / A,
                      $ = ie / ae,
                      le = 1,
                      z = 1;
                    ($ > q ? (z = $ / q) : (le = q / $),
                      (M.options.hasBounds = !0),
                      (M.bounds.min.x = H.min.x),
                      (M.bounds.max.x = H.min.x + ie * le),
                      (M.bounds.min.y = H.min.y),
                      (M.bounds.max.y = H.min.y + ae * z),
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
                      H = D / M.options.height;
                    (M.context.setTransform(
                      M.options.pixelRatio / _,
                      0,
                      0,
                      M.options.pixelRatio / H,
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
                      H = _.world,
                      U = M.canvas,
                      Y = M.context,
                      V = M.options,
                      F = M.timing,
                      ie = f.allBodies(H),
                      ae = f.allConstraints(H),
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
                      Y.fillRect(0, 0, U.width, U.height),
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
                          se = Z.pointA,
                          oe = Z.pointB;
                        (P && (se = h.add(P.position, Z.pointA)),
                          ue && (oe = h.add(ue.position, Z.pointB)),
                          !(!se || !oe) &&
                            (v.contains(M.bounds, se) || v.contains(M.bounds, oe)) &&
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
                        H = _.world,
                        U = f.allBodies(H),
                        Y = 0,
                        V = 55,
                        F = 44,
                        ie = 0,
                        ae = 0,
                        A = 0;
                      A < U.length;
                      A += 1
                    )
                      Y += U[A].parts.length;
                    var N = {
                      Part: Y,
                      Body: U.length,
                      Cons: f.allConstraints(H).length,
                      Comp: f.allComposites(H).length,
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
                      H = _.deltaHistory,
                      U = _.elapsedHistory,
                      Y = _.timestampElapsedHistory,
                      V = _.engineDeltaHistory,
                      F = _.engineUpdatesHistory,
                      ie = _.engineElapsedHistory,
                      ae = D.timing.lastUpdatesPerFrame,
                      A = D.timing.lastDelta,
                      N = C(H),
                      q = C(U),
                      $ = C(V),
                      le = C(F),
                      z = C(ie),
                      Z = C(Y),
                      P = Z / N || 0,
                      ue = Math.round(N / A),
                      se = 1e3 / N || 0,
                      oe = 4,
                      ve = 12,
                      xe = 60,
                      Ue = 34,
                      Le = 10,
                      Ye = 69;
                    ((O.fillStyle = '#0e0f19'),
                      O.fillRect(0, 50, ve * 5 + xe * 6 + 22, Ue),
                      l.status(
                        O,
                        Le,
                        Ye,
                        xe,
                        oe,
                        H.length,
                        Math.round(se) + ' fps',
                        se / l._goodFps,
                        function (Ve) {
                          return H[Ve] / N - 1;
                        }
                      ),
                      l.status(
                        O,
                        Le + ve + xe,
                        Ye,
                        xe,
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
                        Le + (ve + xe) * 2,
                        Ye,
                        xe,
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
                        Le + (ve + xe) * 3,
                        Ye,
                        xe,
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
                        Le + (ve + xe) * 4,
                        Ye,
                        xe,
                        oe,
                        U.length,
                        q.toFixed(2) + ' rt',
                        1 - q / l._goodFps,
                        function (Ve) {
                          return U[Ve] / q - 1;
                        }
                      ),
                      l.status(
                        O,
                        Le + (ve + xe) * 5,
                        Ye,
                        xe,
                        oe,
                        Y.length,
                        P.toFixed(2) + ' x',
                        P * P * P,
                        function (Ve) {
                          return (Y[Ve] / H[Ve] / P || 0) - 1;
                        }
                      ));
                  }),
                  (l.status = function (M, O, D, _, H, U, Y, V, F) {
                    ((M.strokeStyle = '#888'),
                      (M.fillStyle = '#444'),
                      (M.lineWidth = 1),
                      M.fillRect(O, D + 7, _, 1),
                      M.beginPath(),
                      M.moveTo(O, D + 7 - H * d.clamp(0.4 * F(0), -2, 2)));
                    for (var ie = 0; ie < _; ie += 1)
                      M.lineTo(O + ie, D + 7 - (ie < U ? H * d.clamp(0.4 * F(ie), -2, 2) : 0));
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
                      var H = M[_];
                      if (!(!H.render.visible || !H.pointA || !H.pointB)) {
                        var U = H.bodyA,
                          Y = H.bodyB,
                          V,
                          F;
                        if (
                          (U ? (V = h.add(U.position, H.pointA)) : (V = H.pointA),
                          H.render.type === 'pin')
                        )
                          (D.beginPath(), D.arc(V.x, V.y, 3, 0, 2 * Math.PI), D.closePath());
                        else {
                          if (
                            (Y ? (F = h.add(Y.position, H.pointB)) : (F = H.pointB),
                            D.beginPath(),
                            D.moveTo(V.x, V.y),
                            H.render.type === 'spring')
                          )
                            for (
                              var ie = h.sub(F, V),
                                ae = h.perp(h.normalise(ie)),
                                A = Math.ceil(d.clamp(H.length / 5, 12, 20)),
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
                        (H.render.lineWidth &&
                          ((D.lineWidth = H.render.lineWidth),
                          (D.strokeStyle = H.render.strokeStyle),
                          D.stroke()),
                          H.render.anchors &&
                            ((D.fillStyle = H.render.strokeStyle),
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
                    var H = M.options,
                      U = H.showInternalEdges || !H.wireframes,
                      Y,
                      V,
                      F,
                      ie;
                    for (F = 0; F < O.length; F++)
                      if (((Y = O[F]), !!Y.render.visible)) {
                        for (ie = Y.parts.length > 1 ? 1 : 0; ie < Y.parts.length; ie++)
                          if (((V = Y.parts[ie]), !!V.render.visible)) {
                            if (
                              (H.showSleeping && Y.isSleeping
                                ? (_.globalAlpha = 0.5 * V.render.opacity)
                                : V.render.opacity !== 1 && (_.globalAlpha = V.render.opacity),
                              V.render.sprite && V.render.sprite.texture && !H.wireframes)
                            ) {
                              var ae = V.render.sprite,
                                A = L(M, ae.texture);
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
                                  (!V.vertices[N - 1].isInternal || U
                                    ? _.lineTo(V.vertices[N].x, V.vertices[N].y)
                                    : _.moveTo(V.vertices[N].x, V.vertices[N].y),
                                    V.vertices[N].isInternal &&
                                      !U &&
                                      _.moveTo(
                                        V.vertices[(N + 1) % V.vertices.length].x,
                                        V.vertices[(N + 1) % V.vertices.length].y
                                      ));
                                (_.lineTo(V.vertices[0].x, V.vertices[0].y), _.closePath());
                              }
                              H.wireframes
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
                      H = M.options.showInternalEdges,
                      U,
                      Y,
                      V,
                      F,
                      ie;
                    for (_.beginPath(), V = 0; V < O.length; V++)
                      if (((U = O[V]), !!U.render.visible))
                        for (ie = U.parts.length > 1 ? 1 : 0; ie < U.parts.length; ie++) {
                          for (
                            Y = U.parts[ie], _.moveTo(Y.vertices[0].x, Y.vertices[0].y), F = 1;
                            F < Y.vertices.length;
                            F++
                          )
                            (!Y.vertices[F - 1].isInternal || H
                              ? _.lineTo(Y.vertices[F].x, Y.vertices[F].y)
                              : _.moveTo(Y.vertices[F].x, Y.vertices[F].y),
                              Y.vertices[F].isInternal &&
                                !H &&
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
                      H,
                      U,
                      Y;
                    for (_.beginPath(), U = 0; U < O.length; U++)
                      if (((H = O[U]), !(!H.render.visible || H.parts.length === 1))) {
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
                  (l.vertexNumbers = function (M, O, D) {
                    var _ = D,
                      H,
                      U,
                      Y;
                    for (H = 0; H < O.length; H++) {
                      var V = O[H].parts;
                      for (Y = V.length > 1 ? 1 : 0; Y < V.length; Y++) {
                        var F = V[Y];
                        for (U = 0; U < F.vertices.length; U++)
                          ((_.fillStyle = 'rgba(255,255,255,0.2)'),
                            _.fillText(
                              H + '_' + U,
                              F.position.x + (F.vertices[U].x - F.position.x) * 0.8,
                              F.position.y + (F.vertices[U].y - F.position.y) * 0.8
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
                    var H = M.options;
                    _.beginPath();
                    for (var U = 0; U < O.length; U++) {
                      var Y = O[U];
                      if (Y.render.visible)
                        for (var V = O[U].parts, F = V.length > 1 ? 1 : 0; F < V.length; F++) {
                          var ie = V[F];
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
                  (l.bodyAxes = function (M, O, D) {
                    var _ = D;
                    M.engine;
                    var H = M.options,
                      U,
                      Y,
                      V,
                      F;
                    for (_.beginPath(), Y = 0; Y < O.length; Y++) {
                      var ie = O[Y],
                        ae = ie.parts;
                      if (ie.render.visible)
                        if (H.showAxes)
                          for (V = ae.length > 1 ? 1 : 0; V < ae.length; V++)
                            for (U = ae[V], F = 0; F < U.axes.length; F++) {
                              var A = U.axes[F];
                              (_.moveTo(U.position.x, U.position.y),
                                _.lineTo(U.position.x + A.x * 20, U.position.y + A.y * 20));
                            }
                        else
                          for (V = ae.length > 1 ? 1 : 0; V < ae.length; V++)
                            for (U = ae[V], F = 0; F < U.axes.length; F++)
                              (_.moveTo(U.position.x, U.position.y),
                                _.lineTo(
                                  (U.vertices[0].x + U.vertices[U.vertices.length - 1].x) / 2,
                                  (U.vertices[0].y + U.vertices[U.vertices.length - 1].y) / 2
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
                  (l.bodyPositions = function (M, O, D) {
                    var _ = D;
                    M.engine;
                    var H = M.options,
                      U,
                      Y,
                      V,
                      F;
                    for (_.beginPath(), V = 0; V < O.length; V++)
                      if (((U = O[V]), !!U.render.visible))
                        for (F = 0; F < U.parts.length; F++)
                          ((Y = U.parts[F]),
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
                      ((U = O[V]),
                        U.render.visible &&
                          (_.arc(U.positionPrev.x, U.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                          _.closePath()));
                    ((_.fillStyle = 'rgba(255,165,0,0.8)'), _.fill());
                  }),
                  (l.bodyVelocity = function (M, O, D) {
                    var _ = D;
                    _.beginPath();
                    for (var H = 0; H < O.length; H++) {
                      var U = O[H];
                      if (U.render.visible) {
                        var Y = c.getVelocity(U);
                        (_.moveTo(U.position.x, U.position.y),
                          _.lineTo(U.position.x + Y.x, U.position.y + Y.y));
                      }
                    }
                    ((_.lineWidth = 3), (_.strokeStyle = 'cornflowerblue'), _.stroke());
                  }),
                  (l.bodyIds = function (M, O, D) {
                    var _ = D,
                      H,
                      U;
                    for (H = 0; H < O.length; H++)
                      if (O[H].render.visible) {
                        var Y = O[H].parts;
                        for (U = Y.length > 1 ? 1 : 0; U < Y.length; U++) {
                          var V = Y[U];
                          ((_.font = '12px Arial'),
                            (_.fillStyle = 'rgba(255,255,255,0.5)'),
                            _.fillText(V.id, V.position.x + 10, V.position.y - 10));
                        }
                      }
                  }),
                  (l.collisions = function (M, O, D) {
                    var _ = D,
                      H = M.options,
                      U,
                      Y,
                      V,
                      F;
                    for (_.beginPath(), V = 0; V < O.length; V++)
                      if (((U = O[V]), !!U.isActive))
                        for (Y = U.collision, F = 0; F < U.contactCount; F++) {
                          var ie = U.contacts[F],
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
                      if (((U = O[V]), !!U.isActive && ((Y = U.collision), U.contactCount > 0))) {
                        var A = U.contacts[0].vertex.x,
                          N = U.contacts[0].vertex.y;
                        (U.contactCount === 2 &&
                          ((A = (U.contacts[0].vertex.x + U.contacts[1].vertex.x) / 2),
                          (N = (U.contacts[0].vertex.y + U.contacts[1].vertex.y) / 2)),
                          Y.bodyB === Y.supports[0].body || Y.bodyA.isStatic === !0
                            ? _.moveTo(A - Y.normal.x * 8, N - Y.normal.y * 8)
                            : _.moveTo(A + Y.normal.x * 8, N + Y.normal.y * 8),
                          _.lineTo(A, N));
                      }
                    (H.wireframes
                      ? (_.strokeStyle = 'rgba(255,165,0,0.7)')
                      : (_.strokeStyle = 'orange'),
                      (_.lineWidth = 1),
                      _.stroke());
                  }),
                  (l.separations = function (M, O, D) {
                    var _ = D,
                      H = M.options,
                      U,
                      Y,
                      V,
                      F,
                      ie;
                    for (_.beginPath(), ie = 0; ie < O.length; ie++)
                      if (((U = O[ie]), !!U.isActive)) {
                        ((Y = U.collision), (V = Y.bodyA), (F = Y.bodyB));
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
                    (H.wireframes
                      ? (_.strokeStyle = 'rgba(255,165,0,0.5)')
                      : (_.strokeStyle = 'orange'),
                      _.stroke());
                  }),
                  (l.inspector = function (M, O) {
                    M.engine;
                    var D = M.selected,
                      _ = M.render,
                      H = _.options,
                      U;
                    if (H.hasBounds) {
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
                          ((U = A.bounds),
                            O.beginPath(),
                            O.rect(
                              Math.floor(U.min.x - 3),
                              Math.floor(U.min.y - 3),
                              Math.floor(U.max.x - U.min.x + 6),
                              Math.floor(U.max.y - U.min.y + 6)
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
                      (U = M.selectBounds),
                      O.beginPath(),
                      O.rect(
                        Math.floor(U.min.x),
                        Math.floor(U.min.y),
                        Math.floor(U.max.x - U.min.x),
                        Math.floor(U.max.y - U.min.y)
                      ),
                      O.closePath(),
                      O.stroke(),
                      O.fill(),
                      O.translate(-0.5, -0.5)),
                      H.hasBounds && O.setTransform(1, 0, 0, 1, 0, 0));
                  }));
                var p = function (M, O) {
                    var D = M.engine,
                      _ = M.timing,
                      H = _.historySize,
                      U = D.timing.timestamp;
                    ((_.delta = O - _.lastTime || l._goodDelta),
                      (_.lastTime = O),
                      (_.timestampElapsed = U - _.lastTimestamp || 0),
                      (_.lastTimestamp = U),
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
                  L = function (M, O) {
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
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
                      S = m.delta,
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
                        L = v(w);
                      C = L || C;
                    }
                    (m.frameDeltaSnapping && (C = 1e3 / Math.round(1e3 / C)),
                      (m.frameDelta = C),
                      (m.timeLastTick = g),
                      (m.timeBuffer += m.frameDelta),
                      (m.timeBuffer = f.clamp(
                        m.timeBuffer,
                        0,
                        m.frameDelta + S * l._timeBufferMargin
                      )),
                      (m.lastUpdatesDeferred = 0));
                    var G = m.maxUpdates || Math.ceil(m.maxFrameTime / S),
                      M = { timestamp: h.timing.timestamp };
                    (c.trigger(m, 'beforeTick', M), c.trigger(m, 'tick', M));
                    for (var O = f.now(); S > 0 && m.timeBuffer >= S * l._timeBufferMargin; ) {
                      (c.trigger(m, 'beforeUpdate', M),
                        d.update(h, S),
                        c.trigger(m, 'afterUpdate', M),
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
                    ((h.timing.lastUpdatesPerFrame = p),
                      c.trigger(m, 'afterTick', M),
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
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
            function (x, y, o) {
              var l = {};
              ((x.exports = l), o(1));
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
                    S,
                    p,
                    C,
                    R,
                    w,
                    L = [],
                    G,
                    M,
                    O = 0,
                    D = 0,
                    _ = 0;
                  f = f || 15;
                  var H = function (Y, V, F) {
                      var ie = F % 2 === 1 && F > 1;
                      if (!R || Y != R.x || V != R.y) {
                        R && ie ? ((G = R.x), (M = R.y)) : ((G = 0), (M = 0));
                        var ae = { x: G + Y, y: M + V };
                        ((ie || !R) && (R = ae), L.push(ae), (D = G + Y), (_ = M + V));
                      }
                    },
                    U = function (Y) {
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
                    l._svgPathToAbsolute(d), h = d.getTotalLength(), S = [], v = 0;
                    v < d.pathSegList.numberOfItems;
                    v += 1
                  )
                    S.push(d.pathSegList.getItem(v));
                  for (p = S.concat(); O < h; ) {
                    if (((w = d.getPathSegAtLength(O)), (r = S[w]), r != C)) {
                      for (; p.length && p[0] != r; ) U(p.shift());
                      C = r;
                    }
                    switch (r.pathSegTypeAsLetter.toUpperCase()) {
                      case 'C':
                      case 'T':
                      case 'S':
                      case 'Q':
                      case 'A':
                        ((g = d.getPointAtLength(O)), H(g.x, g.y, 0));
                        break;
                    }
                    O += f;
                  }
                  for (v = 0, m = p.length; v < m; ++v) U(p[v]);
                  return L;
                }),
                  (l._svgPathToAbsolute = function (d) {
                    for (
                      var f,
                        v,
                        m,
                        h,
                        g,
                        r,
                        S = d.pathSegList,
                        p = 0,
                        C = 0,
                        R = S.numberOfItems,
                        w = 0;
                      w < R;
                      ++w
                    ) {
                      var L = S.getItem(w),
                        G = L.pathSegTypeAsLetter;
                      if (/[MLHVCSQTA]/.test(G)) ('x' in L && (p = L.x), 'y' in L && (C = L.y));
                      else
                        switch (
                          ('x1' in L && (m = p + L.x1),
                          'x2' in L && (g = p + L.x2),
                          'y1' in L && (h = C + L.y1),
                          'y2' in L && (r = C + L.y2),
                          'x' in L && (p += L.x),
                          'y' in L && (C += L.y),
                          G)
                        ) {
                          case 'm':
                            S.replaceItem(d.createSVGPathSegMovetoAbs(p, C), w);
                            break;
                          case 'l':
                            S.replaceItem(d.createSVGPathSegLinetoAbs(p, C), w);
                            break;
                          case 'h':
                            S.replaceItem(d.createSVGPathSegLinetoHorizontalAbs(p), w);
                            break;
                          case 'v':
                            S.replaceItem(d.createSVGPathSegLinetoVerticalAbs(C), w);
                            break;
                          case 'c':
                            S.replaceItem(d.createSVGPathSegCurvetoCubicAbs(p, C, m, h, g, r), w);
                            break;
                          case 's':
                            S.replaceItem(d.createSVGPathSegCurvetoCubicSmoothAbs(p, C, g, r), w);
                            break;
                          case 'q':
                            S.replaceItem(d.createSVGPathSegCurvetoQuadraticAbs(p, C, m, h), w);
                            break;
                          case 't':
                            S.replaceItem(d.createSVGPathSegCurvetoQuadraticSmoothAbs(p, C), w);
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
            function (x, y, o) {
              var l = {};
              x.exports = l;
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
      })(sr)),
    sr.exports
  );
}
var yS = gS();
const Me = jh(yS);
var Xo, wh;
function pS() {
  if (wh) return Xo;
  ((wh = 1),
    (Xo = {
      decomp: D,
      quickDecomp: Y,
      isSimple: H,
      removeCollinearPoints: V,
      removeDuplicatePoints: F,
      makeCCW: S,
    }));
  function s(A, N, q) {
    q = q || 0;
    var $ = [0, 0],
      le,
      z,
      Z,
      P,
      ue,
      se,
      oe;
    return (
      (le = A[1][1] - A[0][1]),
      (z = A[0][0] - A[1][0]),
      (Z = le * A[0][0] + z * A[0][1]),
      (P = N[1][1] - N[0][1]),
      (ue = N[0][0] - N[1][0]),
      (se = P * N[0][0] + ue * N[0][1]),
      (oe = le * ue - P * z),
      ie(oe, 0, q) || (($[0] = (ue * Z - z * se) / oe), ($[1] = (le * se - P * Z) / oe)),
      $
    );
  }
  function b(A, N, q, $) {
    var le = N[0] - A[0],
      z = N[1] - A[1],
      Z = $[0] - q[0],
      P = $[1] - q[1];
    if (Z * z - P * le === 0) return !1;
    var ue = (le * (q[1] - A[1]) + z * (A[0] - q[0])) / (Z * z - P * le),
      se = (Z * (A[1] - q[1]) + P * (q[0] - A[0])) / (P * le - Z * z);
    return ue >= 0 && ue <= 1 && se >= 0 && se <= 1;
  }
  function x(A, N, q) {
    return (N[0] - A[0]) * (q[1] - A[1]) - (q[0] - A[0]) * (N[1] - A[1]);
  }
  function y(A, N, q) {
    return x(A, N, q) > 0;
  }
  function o(A, N, q) {
    return x(A, N, q) >= 0;
  }
  function l(A, N, q) {
    return x(A, N, q) < 0;
  }
  function c(A, N, q) {
    return x(A, N, q) <= 0;
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
        se = Math.acos(Z / (P * ue));
      return se < $;
    } else return x(A, N, q) === 0;
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
  function S(A) {
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
  function L(A, N, q) {
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
        b(h(A, N), h(A, q), h(A, $), h(A, $ + 1))
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
          if (L(A, Z, P)) {
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
  function H(A) {
    var N = A,
      q;
    for (q = 0; q < N.length - 1; q++)
      for (var $ = 0; $ < q - 1; $++) if (b(N[q], N[q + 1], N[$], N[$ + 1])) return !1;
    for (q = 1; q < N.length - 2; q++) if (b(N[0], N[N.length - 1], N[q], N[q + 1])) return !1;
    return !0;
  }
  function U(A, N, q, $, le) {
    le = le || 0;
    var z = N[1] - A[1],
      Z = A[0] - N[0],
      P = z * A[0] + Z * A[1],
      ue = $[1] - q[1],
      se = q[0] - $[0],
      oe = ue * q[0] + se * q[1],
      ve = z * se - ue * Z;
    return ie(ve, 0, le) ? [0, 0] : [(se * P - Z * oe) / ve, (z * oe - ue * P) / ve];
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
      se = [0, 0],
      oe = 0,
      ve = 0,
      xe = 0,
      Ue = 0,
      Le = 0,
      Ye = 0,
      Ve = 0,
      We = [],
      Qe = [],
      fe = A,
      Dt = A;
    if (Dt.length < 3) return N;
    if ((Z++, Z > z)) return (console.warn('quickDecomp: max level (' + z + ') reached.'), N);
    for (var pe = 0; pe < A.length; ++pe)
      if (C(fe, pe)) {
        (q.push(fe[pe]), (oe = ve = Number.MAX_VALUE));
        for (var qe = 0; qe < A.length; ++qe)
          (y(h(fe, pe - 1), h(fe, pe), h(fe, qe)) &&
            c(h(fe, pe - 1), h(fe, pe), h(fe, qe - 1)) &&
            ((se = U(h(fe, pe - 1), h(fe, pe), h(fe, qe), h(fe, qe - 1))),
            l(h(fe, pe + 1), h(fe, pe), se) &&
              ((xe = m(fe[pe], se)), xe < ve && ((ve = xe), (ue = se), (Ye = qe)))),
            y(h(fe, pe + 1), h(fe, pe), h(fe, qe + 1)) &&
              c(h(fe, pe + 1), h(fe, pe), h(fe, qe)) &&
              ((se = U(h(fe, pe + 1), h(fe, pe), h(fe, qe), h(fe, qe + 1))),
              y(h(fe, pe - 1), h(fe, pe), se) &&
                ((xe = m(fe[pe], se)), xe < oe && ((oe = xe), (P = se), (Le = qe)))));
        if (Ye === (Le + 1) % A.length)
          ((se[0] = (ue[0] + P[0]) / 2),
            (se[1] = (ue[1] + P[1]) / 2),
            $.push(se),
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
          if ((Ye > Le && (Le += A.length), (Ue = Number.MAX_VALUE), Le < Ye)) return N;
          for (var qe = Ye; qe <= Le; ++qe)
            o(h(fe, pe - 1), h(fe, pe), h(fe, qe)) &&
              c(h(fe, pe + 1), h(fe, pe), h(fe, qe)) &&
              ((xe = m(h(fe, pe), h(fe, qe))),
              xe < Ue && G(fe, pe, qe) && ((Ue = xe), (Ve = qe % A.length)));
          pe < Ve
            ? (r(We, fe, pe, Ve + 1), Ve !== 0 && r(Qe, fe, Ve, Dt.length), r(Qe, fe, 0, pe + 1))
            : (pe !== 0 && r(We, fe, pe, Dt.length), r(We, fe, 0, Ve + 1), r(Qe, fe, Ve, pe + 1));
        }
        return (
          We.length < Qe.length
            ? (Y(We, N, q, $, le, z, Z), Y(Qe, N, q, $, le, z, Z))
            : (Y(Qe, N, q, $, le, z, Z), Y(We, N, q, $, le, z, Z)),
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
var pv = pS();
const SS = jh(pv),
  xS = q0({ __proto__: null, default: SS }, [pv]),
  rn = {
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
  ES = { 1: 20, 2: 26, 3: 32, 4: 38, 5: 46, 6: 54, 7: 62, 8: 72, 9: 82, 10: 104 },
  bS = { 1: 0.5, 2: 0.5, 3: 0.45, 4: 0.45, 5: 0.4, 6: 0.4, 7: 0.35, 8: 0.35, 9: 0.3, 10: 0.25 },
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
  MS = {
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
  Sv = (s, b) => {
    const x = String(b).padStart(2, '0');
    return `images/${s}/level${x}.png`;
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
  RS = (s) => (s * (s + 1)) / 2,
  AS = (s) => ({
    id: s,
    level: s,
    name: CS[s],
    theme: MS[s],
    radius: ES[s],
    restitution: bS[s],
    friction: 0.3,
    density: 0.001,
    score: RS(s),
    svgPath: Sv(hr, s),
    color: zh[s].color,
    glowColor: zh[s].glow,
  }),
  za = 10,
  vr = Object.fromEntries(Array.from({ length: za }, (s, b) => b + 1).map((s) => [s, AS(s)]));
Array.from({ length: za }, (s, b) => vr[b + 1]);
const Qo = 3,
  _S = 360,
  OS = (s) => Math.min(1, s / _S),
  Nh = new Map(),
  ea = (s, b, x = hr) => {
    const y = `${s}|${b}|${x}`,
      o = Nh.get(y);
    if (o) return o;
    const l = vr[s],
      c = { ...l, radius: l.radius * OS(b), svgPath: Sv(x, s) };
    return (Nh.set(y, c), c);
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
  xv = na.wall | na.item | na.magnetTarget,
  DS = na.wall | na.magnetTarget,
  Ev = typeof window < 'u' && typeof window.localStorage < 'u',
  gr = (s) => {
    if (!Ev) return null;
    try {
      return window.localStorage.getItem(s);
    } catch {
      return null;
    }
  },
  yr = (s, b) => {
    if (Ev)
      try {
        window.localStorage.setItem(s, b);
      } catch {}
  },
  bv = () => {
    const s = gr(rn.storageKeys.bestScore);
    if (s === null) return 0;
    const b = Number(s);
    return Number.isFinite(b) ? b : 0;
  },
  wS = (s) => {
    yr(rn.storageKeys.bestScore, String(s));
  },
  zS = () => {
    const s = gr(rn.storageKeys.scoreHistory);
    if (s === null) return [];
    try {
      const b = JSON.parse(s);
      return Array.isArray(b) ? b.filter((x) => typeof x == 'number' && Number.isFinite(x)) : [];
    } catch {
      return [];
    }
  },
  NS = (s) => {
    const b = [s, ...zS()].slice(0, rn.maxScoreHistory);
    return (yr(rn.storageKeys.scoreHistory, JSON.stringify(b)), b);
  },
  Cv = () => {
    const s = gr(rn.storageKeys.isSoundOn);
    return s === null ? !0 : s === 'true';
  },
  Mv = (s) => {
    yr(rn.storageKeys.isSoundOn, String(s));
  },
  Tv = () => {
    const s = gr(rn.storageKeys.themeId);
    return mc(s) ? s : hr;
  },
  Po = (s) => {
    yr(rn.storageKeys.themeId, s);
  },
  BS = () => {
    const [s, b] = B.useState(0),
      [x, y] = B.useState(0),
      [o, l] = B.useState(!1),
      c = B.useRef(0),
      d = B.useRef(0);
    B.useEffect(() => {
      const g = bv();
      ((d.current = g), y(g));
    }, []);
    const f = B.useCallback((g) => {
        ((c.current += g), b(c.current));
      }, []),
      v = B.useCallback((g) => {
        ((c.current = g), b(g));
      }, []),
      m = B.useCallback(() => {
        ((c.current = 0), b(0), l(!1));
      }, []),
      h = B.useCallback(() => {
        const g = c.current,
          r = g > d.current;
        return (
          r && ((d.current = g), wS(g), y(g)),
          NS(g),
          l(r),
          { isNewRecord: r, finalScore: g }
        );
      }, []);
    return { score: s, bestScore: x, isNewRecord: o, add: f, setRaw: v, reset: m, finalize: h };
  },
  US = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  LS = { merge: 'sounds/punyu.mp3', special: 'sounds/punyu.mp3' },
  HS = 0.7,
  jS = () => {
    if (typeof window > 'u') return null;
    const s = window;
    return s.AudioContext ?? s.webkitAudioContext ?? null;
  },
  GS = () => {
    const [s, b] = B.useState(!0),
      x = B.useRef(null),
      y = B.useRef({});
    (B.useEffect(() => {
      b(Cv());
    }, []),
      B.useEffect(() => {
        const c = jS();
        if (!c) return;
        const d = new c();
        x.current = d;
        let f = !1;
        const v = {};
        return (
          (async () => {
            for (const [m, h] of Object.entries(LS))
              try {
                const r = await (await fetch(US(h))).arrayBuffer();
                if (f) return;
                const S = await d.decodeAudioData(r);
                if (f) return;
                v[m] = S;
              } catch {}
            y.current = v;
          })(),
          () => {
            ((f = !0), d.close().catch(() => {}), (x.current = null), (y.current = {}));
          }
        );
      }, []));
    const o = B.useCallback(() => {
        b((c) => {
          const d = !c;
          return (Mv(d), d);
        });
      }, []),
      l = B.useCallback(
        (c) => {
          if (!s) return;
          const d = x.current,
            f = y.current[c];
          if (!d || !f) return;
          d.state === 'suspended' && d.resume().catch(() => {});
          const v = d.createBufferSource();
          v.buffer = f;
          const m = d.createGain();
          ((m.gain.value = HS), v.connect(m).connect(d.destination), v.start(0));
        },
        [s]
      );
    return { isSoundOn: s, toggle: o, play: l };
  },
  Rv = (s) => ({
    restitution: s.restitution,
    friction: s.friction,
    density: s.density,
    label: `item-${s.level}`,
    collisionFilter: { category: na.item, mask: xv },
  }),
  Av = (s) => {
    for (const b of s.parts) b.render.visible = !1;
  },
  _v = (s, b, x) => {
    s.plugin.itemData = { level: b, consumed: !1, droppedAt: x };
  },
  YS = (s, b, x, y) => {
    const o = Me.Bodies.circle(b, x, s.radius, Rv(s));
    return (_v(o, s.level, y), Av(o), o);
  },
  VS = (s, b, x, y, o) => {
    if (o.length < 3) return null;
    const l = Me.Bodies.fromVertices(b, x, [o], Rv(s));
    return l ? (_v(l, s.level, y), Av(l), l) : null;
  },
  ec = (s) => (s.parent && s.parent !== s ? s.parent : s),
  In = (s) => ec(s).plugin.itemData,
  qS = (s, b) => {
    const x = ta.wallThickness,
      y = {
        isStatic: !0,
        restitution: 0.2,
        friction: 0.5,
        label: 'wall',
        collisionFilter: { category: na.wall },
      },
      o = Me.Bodies.rectangle(s / 2, b + x / 2, s + x * 2, x, y),
      l = Me.Bodies.rectangle(-x / 2, b / 2, x, b * 2, y),
      c = Me.Bodies.rectangle(s + x / 2, b / 2, x, b * 2, y),
      d = Me.Bodies.rectangle(s / 2, -x / 2, s + x * 2, x, { ...y, restitution: 0 });
    return { ground: o, leftWall: l, rightWall: c, ceiling: d };
  },
  XS = (s, b) => ({ x: (s.position.x + b.position.x) / 2, y: (s.position.y + b.position.y) / 2 }),
  QS = (s) => (s < 2 || s > za ? 0 : vr[s].score),
  ZS = () => vr[za].score,
  vc = rn.storageKeys.suspended,
  KS = 1,
  Gt = (s) => typeof s == 'number' && Number.isFinite(s),
  kS = (s) => {
    if (typeof s != 'object' || s === null) return null;
    const b = s;
    return !Gt(b.level) || !Gt(b.x) || !Gt(b.y)
      ? null
      : {
          level: b.level,
          x: b.x,
          y: b.y,
          vx: Gt(b.vx) ? b.vx : 0,
          vy: Gt(b.vy) ? b.vy : 0,
          angle: Gt(b.angle) ? b.angle : 0,
          angularVelocity: Gt(b.angularVelocity) ? b.angularVelocity : 0,
        };
  },
  Ov = () => {
    if (typeof window > 'u' || typeof window.localStorage > 'u') return null;
    let s = null;
    try {
      s = window.localStorage.getItem(vc);
    } catch {
      return null;
    }
    if (s === null) return null;
    try {
      const b = JSON.parse(s);
      if (typeof b != 'object' || b === null) return null;
      const x = b;
      if (!Gt(x.score) || !Array.isArray(x.bodies)) return null;
      const y = [];
      for (const o of x.bodies) {
        const l = kS(o);
        l && y.push(l);
      }
      return {
        version: Gt(x.version) ? x.version : 0,
        savedAt: Gt(x.savedAt) ? x.savedAt : 0,
        score: x.score,
        themeId: mc(x.themeId) ? x.themeId : hr,
        currentItemLevel: Gt(x.currentItemLevel) ? x.currentItemLevel : 1,
        nextItemLevel: Gt(x.nextItemLevel) ? x.nextItemLevel : 1,
        skillGauge: Gt(x.skillGauge) ? x.skillGauge : 0,
        magnetUsesLeft: Gt(x.magnetUsesLeft) ? x.magnetUsesLeft : void 0,
        bodies: y,
      };
    } catch {
      return null;
    }
  },
  JS = (s) => {
    if (!(typeof window > 'u' || typeof window.localStorage > 'u'))
      try {
        const b = { ...s, version: KS, savedAt: Date.now() };
        window.localStorage.setItem(vc, JSON.stringify(b));
      } catch {}
  },
  tc = () => {
    if (!(typeof window > 'u' || typeof window.localStorage > 'u'))
      try {
        window.localStorage.removeItem(vc);
      } catch {}
  },
  FS = 32,
  $S = 14,
  wa = (s, b) => s * (1 << $S) + b,
  Hi = (s, b) => s[b + 3] >= FS,
  WS = (s, b, x) => {
    const y = [];
    for (let o = 0; o < x; o += 1)
      for (let l = 0; l < b; l += 1) {
        const c = (o * b + l) * 4;
        if (!Hi(s, c)) continue;
        ((o === 0 || !Hi(s, ((o - 1) * b + l) * 4)) &&
          y.push({
            fromKey: wa(l, o),
            toKey: wa(l + 1, o),
            from: { x: l, y: o },
            to: { x: l + 1, y: o },
          }),
          (l === b - 1 || !Hi(s, (o * b + (l + 1)) * 4)) &&
            y.push({
              fromKey: wa(l + 1, o),
              toKey: wa(l + 1, o + 1),
              from: { x: l + 1, y: o },
              to: { x: l + 1, y: o + 1 },
            }),
          (o === x - 1 || !Hi(s, ((o + 1) * b + l) * 4)) &&
            y.push({
              fromKey: wa(l + 1, o + 1),
              toKey: wa(l, o + 1),
              from: { x: l + 1, y: o + 1 },
              to: { x: l, y: o + 1 },
            }),
          (l === 0 || !Hi(s, (o * b + (l - 1)) * 4)) &&
            y.push({
              fromKey: wa(l, o + 1),
              toKey: wa(l, o),
              from: { x: l, y: o + 1 },
              to: { x: l, y: o },
            }));
      }
    return y;
  },
  IS = (s) => {
    const b = new Map();
    for (const o of s) {
      const l = b.get(o.fromKey);
      l ? l.push(o) : b.set(o.fromKey, [o]);
    }
    const x = new Set(),
      y = [];
    for (const o of s) {
      if (x.has(o)) continue;
      const l = [];
      let c = o;
      for (; c && !x.has(c); ) {
        (x.add(c), l.push(c.from));
        const d = b.get(c.toKey);
        c = d == null ? void 0 : d.find((f) => !x.has(f));
      }
      l.length >= 3 && y.push(l);
    }
    return y;
  },
  PS = (s, b, x) => {
    const y = x.x - b.x,
      o = x.y - b.y,
      l = Math.hypot(y, o);
    return l === 0
      ? Math.hypot(s.x - b.x, s.y - b.y)
      : Math.abs(o * s.x - y * s.y + x.x * b.y - x.y * b.x) / l;
  },
  nc = (s, b) => {
    if (s.length <= 2) return s.slice();
    let x = 0,
      y = 0;
    const o = s.length - 1;
    for (let l = 1; l < o; l += 1) {
      const c = PS(s[l], s[0], s[o]);
      c > x && ((x = c), (y = l));
    }
    if (x > b) {
      const l = nc(s.slice(0, y + 1), b),
        c = nc(s.slice(y), b);
      return [...l, ...c.slice(1)];
    }
    return [s[0], s[o]];
  },
  ex = (s, b) => {
    if (s.length <= 3) return s;
    const x = [...s, s[0]],
      y = nc(x, b);
    return (y.pop(), y);
  },
  tx = (s, b = {}) => {
    const x = b.simplifyEpsilon ?? 2,
      y = WS(s.data, s.width, s.height);
    if (y.length === 0) return null;
    const o = IS(y);
    if (o.length === 0) return null;
    let l = o[0];
    for (let c = 1; c < o.length; c += 1) o[c].length > l.length && (l = o[c]);
    return ex(l, x);
  },
  Gi = new Map(),
  Zo = new Map(),
  nx = (s) => {
    const b = s.length;
    if (b === 0) return { x: 0, y: 0 };
    if (b < 3) {
      let l = 0,
        c = 0;
      for (const d of s) ((l += d.x), (c += d.y));
      return { x: l / b, y: c / b };
    }
    let x = 0,
      y = 0,
      o = 0;
    for (let l = 0; l < b; l += 1) {
      const c = s[l],
        d = s[(l + 1) % b],
        f = c.x * d.y - d.x * c.y;
      ((x += (c.x + d.x) * f), (y += (c.y + d.y) * f), (o += f));
    }
    if (o === 0) {
      let l = 0,
        c = 0;
      for (const d of s) ((l += d.x), (c += d.y));
      return { x: l / b, y: c / b };
    }
    return { x: x / (3 * o), y: y / (3 * o) };
  },
  ax = async (s) => {
    const b = s.width,
      x = s.height;
    if (typeof OffscreenCanvas < 'u') {
      const c = new OffscreenCanvas(b, x).getContext('2d');
      if (!c) throw new Error('OffscreenCanvas 2D context unavailable');
      return (c.drawImage(s, 0, 0), c.getImageData(0, 0, b, x));
    }
    const y = document.createElement('canvas');
    ((y.width = b), (y.height = x));
    const o = y.getContext('2d');
    if (!o) throw new Error('Canvas 2D context unavailable');
    return (o.drawImage(s, 0, 0), o.getImageData(0, 0, b, x));
  },
  lx = async (s, b) => {
    const x = Gi.get(s);
    if (x !== void 0) return x;
    const y = Zo.get(s);
    if (y) return y;
    const o = (async () => {
      try {
        const l = await ax(b),
          c = tx(l);
        if (!c || c.length < 3) return (Gi.set(s, null), null);
        const d = nx(c),
          f = {
            vertices: c,
            centroidOffset: { x: d.x - l.width / 2, y: d.y - l.height / 2 },
            pngWidth: l.width,
            pngHeight: l.height,
          };
        return (Gi.set(s, f), f);
      } catch {
        return (Gi.set(s, null), null);
      } finally {
        Zo.delete(s);
      }
    })();
    return (Zo.set(s, o), o);
  },
  Dv = (s) => Gi.get(s) ?? null,
  ix = (s, b) => {
    const x = (b * 2) / s.pngWidth;
    return s.vertices.map((y) => ({
      x: (y.x - s.pngWidth / 2 - s.centroidOffset.x) * x,
      y: (y.y - s.pngHeight / 2 - s.centroidOffset.y) * x,
    }));
  };
Me.Common.setDecomp(xS);
const Bh = new Map(),
  gc = (s) => {
    const b = Bh.get(s);
    if (b) return b;
    const x = `/ochimono-game/${s}`.replace(/\/{2,}/g, '/');
    return (Bh.set(s, x), x);
  },
  ir = (s, b) => {
    const x = (b.radius * 2) / TS,
      y = gc(b.svgPath),
      o = Dv(y),
      l = o ? -o.centroidOffset.x * x : 0,
      c = o ? -o.centroidOffset.y * x : 0;
    s.plugin.itemRender = { textureUrl: y, scale: x, contourOffsetX: l, contourOffsetY: c };
  },
  Ko = (s, b, x, y) => {
    const o = gc(s.svgPath),
      l = Dv(o);
    if (l) {
      const c = ix(l, s.radius),
        d = VS(s, b, x, y, c);
      if (d) return d;
    }
    return YS(s, b, x, y);
  },
  Uh = new Set(),
  Lh = async (s, b) => {
    for (let x = 1; x <= za; x += 1) {
      const y = ea(x, 1, s),
        o = gc(y.svgPath);
      if (!Uh.has(o)) {
        Uh.add(o);
        try {
          const c = await (await fetch(o)).blob(),
            d = await createImageBitmap(c);
          (b && (b.textures[o] = d), lx(o, d));
        } catch {
          const l = new Image();
          l.src = o;
        }
      }
    }
  },
  ux = ({ fieldWidth: s, fieldHeight: b }) => {
    const x = B.useRef(null),
      y = B.useRef(null),
      o = B.useRef(null),
      l = B.useRef(null),
      c = B.useRef(null),
      [d, f] = B.useState('idle'),
      [v, m] = B.useState(null),
      [h, g] = B.useState(null),
      r = B.useRef(null),
      S = B.useRef(null),
      p = B.useCallback((re) => {
        ((r.current = re), m(re));
      }, []),
      C = B.useCallback((re) => {
        ((S.current = re), g(re));
      }, []),
      R = B.useRef(!0),
      w = B.useRef(0),
      L = B.useRef('idle'),
      G = B.useRef(null),
      M = B.useRef(s),
      O = B.useRef(b),
      [D, _] = B.useState(() => Tv()),
      H = B.useRef(D);
    H.current = D;
    const U = BS(),
      Y = GS(),
      V = B.useRef(U.add);
    V.current = U.add;
    const F = B.useRef(Y.play);
    F.current = Y.play;
    const ie = B.useRef(U.finalize);
    ie.current = U.finalize;
    const [ae, A] = B.useState(0),
      N = B.useRef(0),
      q = B.useCallback((re) => {
        ((N.current = re), A(re));
      }, []),
      $ = B.useCallback(
        (re) => {
          const ge = Math.min(dt.gaugeMax, N.current + re);
          ge !== N.current && q(ge);
        },
        [q]
      ),
      le = B.useRef($);
    le.current = $;
    const [z, Z] = B.useState(!1),
      [P, ue] = B.useState(!1),
      se = B.useRef(!1),
      [oe, ve] = B.useState(!1),
      [xe, Ue] = B.useState(Gl),
      Le = B.useRef(Gl),
      Ye = B.useCallback((re) => {
        ((Le.current = re), Ue(re));
      }, []),
      Ve = B.useRef(!1),
      We = B.useRef(null),
      Qe = B.useRef(null),
      fe = B.useRef(null),
      Dt = B.useRef(null),
      pe = B.useRef(new Set()),
      qe = B.useCallback((re) => {
        for (const ge of re.parts)
          ((ge.collisionFilter.category = na.magnetTarget), (ge.collisionFilter.mask = DS));
        pe.current.add(re);
      }, []),
      pt = B.useCallback(() => {
        for (const re of pe.current)
          for (const ge of re.parts)
            ((ge.collisionFilter.category = na.item), (ge.collisionFilter.mask = xv));
        pe.current.clear();
      }, []),
      An = B.useCallback(() => {
        (pt(),
          (fe.current = null),
          (Dt.current = null),
          We.current === 'magnet' && (We.current = null));
      }, [pt]),
      on = B.useRef(An);
    on.current = An;
    const wt = B.useRef(null),
      [Pa, ut] = B.useState(null),
      zt = B.useRef(null),
      ke = B.useRef(new Set()),
      el = B.useRef(1),
      Jt = B.useCallback(() => {
        let re;
        return ((re = Math.floor(Math.random() * Qo) + 1), ea(re, M.current, H.current));
      }, []);
    B.useEffect(() => {
      const re = x.current;
      if (!re) return;
      const ge = M.current,
        we = O.current,
        be = Me.Engine.create({ gravity: { x: 0, y: ta.gravityY } }),
        me = Me.Render.create({
          element: re,
          engine: be,
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
        Me.World.add(be.world, [Se, ze, tt, He]));
      const nt = ke.current,
        Ne = () => {
          const Pe = me.context,
            St = me.textures;
          for (const Dn of nt) {
            const mn = Dn.plugin.itemRender;
            if (!mn) continue;
            const hn = St[mn.textureUrl];
            if (!hn) continue;
            const xn = hn.width,
              ql = hn.height,
              wn = xn * mn.scale,
              zn = ql * mn.scale;
            (Pe.save(),
              Pe.translate(Dn.position.x, Dn.position.y),
              Pe.rotate(Dn.angle),
              Pe.translate(mn.contourOffsetX, mn.contourOffsetY),
              Pe.drawImage(hn, -wn / 2, -zn / 2, wn, zn),
              Pe.restore());
          }
        };
      (Me.Events.on(me, 'afterRender', Ne), Me.Render.run(me));
      const Re = Me.Runner.create();
      (Me.Runner.run(Re, be), (y.current = be), (o.current = me), (l.current = Re));
      for (const Pe of dc) Lh(Pe.id, me);
      const Ie = () => {
        document.hidden
          ? (Me.Runner.stop(Re), Me.Render.stop(me))
          : (Me.Render.run(me), Me.Runner.run(Re, be));
      };
      return (
        document.addEventListener('visibilitychange', Ie),
        () => {
          (document.removeEventListener('visibilitychange', Ie),
            Me.Events.off(me, 'afterRender', Ne),
            Me.Runner.stop(Re),
            Me.Render.stop(me),
            Me.World.clear(be.world, !1),
            Me.Engine.clear(be),
            me.canvas.parentNode && me.canvas.parentNode.removeChild(me.canvas),
            (me.textures = {}),
            (y.current = null),
            (o.current = null),
            (l.current = null),
            nt.clear());
        }
      );
    }, []);
    const _n = B.useCallback((re, ge) => {
      var Ie;
      const we = y.current;
      if (!we) return;
      const be = ec(re),
        me = ec(ge),
        Se = In(be),
        ze = In(me);
      if (!Se || !ze || Se.consumed || ze.consumed || Se.level !== ze.level) return;
      ((Se.consumed = !0), (ze.consumed = !0));
      const tt = Se.level + 1,
        He = XS(be, me);
      (Me.World.remove(we.world, [be, me]), ke.current.delete(be), ke.current.delete(me));
      let nt = 0,
        Ne = !1,
        Re = P1(tt);
      if (tt > za)
        ((nt = ZS()), (Ne = !0), (Re += dt.bonusOnSpecialElimination), F.current('special'));
      else {
        const Pe = ea(tt, M.current, H.current),
          St = Ko(Pe, He.x, He.y, performance.now());
        (ir(St, Pe),
          Me.World.add(we.world, St),
          ke.current.add(St),
          (nt = QS(tt)),
          (Ne = tt === za),
          Ne && (Re += dt.bonusOnLevel10Created),
          F.current(Ne ? 'special' : 'merge'));
      }
      (V.current(nt),
        le.current(Re),
        (Ie = c.current) == null || Ie.add({ x: He.x, y: He.y, score: nt, isSpecial: Ne }));
    }, []);
    (B.useEffect(() => {
      const re = y.current;
      if (!re) return;
      const ge = (we) => {
        for (const be of we.pairs) _n(be.bodyA, be.bodyB);
      };
      return (
        Me.Events.on(re, 'collisionStart', ge),
        () => {
          Me.Events.off(re, 'collisionStart', ge);
        }
      );
    }, [_n]),
      B.useEffect(() => {
        const re = y.current;
        if (!re) return;
        const ge = ta.gameOverLineOffset;
        let we = 0;
        const be = () => {
            ((wt.current = null), zt.current !== null && ((zt.current = null), ut(null)));
          },
          me = () => {
            if (fe.current !== null)
              if (performance.now() >= fe.current) on.current();
              else {
                const Re = [];
                for (const Ie of pe.current) {
                  const Pe = In(Ie);
                  Pe && !Pe.consumed && Re.push(Ie);
                }
                if (Re.length >= 2) {
                  let Ie = 0,
                    Pe = 0;
                  for (const St of Re) ((Ie += St.position.x), (Pe += St.position.y));
                  ((Ie /= Re.length), (Pe /= Re.length));
                  for (const St of Re) {
                    const Dn = Ie - St.position.x,
                      mn = Pe - St.position.y,
                      hn = Math.hypot(Dn, mn);
                    if (hn < 1) continue;
                    const xn = dt.magnet.forceMagnitude * St.mass;
                    Me.Body.applyForce(St, St.position, { x: (Dn / hn) * xn, y: (mn / hn) * xn });
                  }
                } else on.current();
              }
            if (L.current !== 'playing') return;
            if (Ve.current) {
              wt.current !== null &&
                ((wt.current = null), zt.current !== null && ((zt.current = null), ut(null)));
              return;
            }
            if (((we = (we + 1) % 6), we !== 0)) return;
            const Se = performance.now();
            let ze = !1;
            for (const Ne of ke.current) {
              const Re = In(Ne);
              if (
                !(!Re || Re.consumed) &&
                !(Se - Re.droppedAt < ta.gameOverGracePeriodMs) &&
                !(Math.abs(Ne.velocity.y) > ta.restingVelocityThreshold) &&
                Ne.bounds.min.y < ge
              ) {
                ze = !0;
                break;
              }
            }
            if (!ze) {
              be();
              return;
            }
            wt.current === null && (wt.current = Se);
            const tt = Se - wt.current,
              He = ta.gameOverDangerLimitMs;
            if (tt >= He) {
              (be(), (L.current = 'gameover'), f('gameover'));
              const Ne = ie.current();
              F.current(Ne.isNewRecord ? 'highscore' : 'gameover');
              return;
            }
            const nt = Math.max(1, Math.ceil((He - tt) / 1e3));
            nt !== zt.current && ((zt.current = nt), ut(nt));
          };
        return (
          Me.Events.on(re, 'afterUpdate', me),
          () => {
            Me.Events.off(re, 'afterUpdate', me);
          }
        );
      }, []),
      B.useEffect(() => {
        if (y.current) {
          Lh(D, o.current);
          for (const be of ke.current) {
            const me = In(be);
            if (!me || me.consumed) continue;
            const Se = ea(me.level, M.current, D);
            ir(be, Se);
          }
        }
        const ge = r.current ? ea(r.current.level, M.current, D) : null,
          we = S.current ? ea(S.current.level, M.current, D) : null;
        (p(ge), C(we));
      }, [D, p, C]));
    const On = B.useCallback((re) => {
        (_(re), Po(re));
      }, []),
      Sn = B.useCallback((re) => {
        ((se.current = re), ue(re));
      }, []),
      Na = B.useCallback(
        (re) => {
          q(Math.max(0, N.current - re));
        },
        [q]
      ),
      ua = B.useCallback(() => {
        if (!y.current) return;
        We.current = 'shake';
        const { impulseMin: ge, impulseMax: we, upwardBias: be } = dt.shake;
        for (const me of ke.current) {
          const Se = In(me);
          if (!Se || Se.consumed) continue;
          const ze = Math.random() * Math.PI * 2,
            tt = ge + Math.random() * (we - ge),
            He = Math.cos(ze) * tt * me.mass,
            nt = (Math.sin(ze) * tt - be) * me.mass;
          Me.Body.applyForce(me, me.position, { x: He, y: nt });
        }
        (F.current('special'), (We.current = null));
      }, []),
      Rt = B.useCallback(() => {
        const re = y.current;
        if (!re || Qe.current !== null) return;
        ((We.current = 'gravityFlip'), (Ve.current = !0));
        const ge = ta.gravityY;
        re.gravity.y = ge * dt.gravityFlip.multiplier;
        const we = new Map(),
          be = new Map();
        for (const me of ke.current)
          (we.set(me, me.frictionAir),
            be.set(me, me.restitution),
            (me.frictionAir = dt.gravityFlip.frictionAir),
            Me.Body.setVelocity(me, { x: me.velocity.x, y: dt.gravityFlip.liftKickVelocity }));
        (ve(!0),
          F.current('special'),
          (Qe.current = window.setTimeout(() => {
            const me = y.current;
            me && (me.gravity.y = ge * dt.gravityFlip.slamGravityMultiplier);
            for (const Se of ke.current)
              ((Se.frictionAir = dt.gravityFlip.slamFrictionAir),
                be.has(Se) || be.set(Se, Se.restitution),
                (Se.restitution = dt.gravityFlip.slamRestitution),
                Me.Body.setVelocity(Se, { x: Se.velocity.x, y: dt.gravityFlip.slamKickVelocity }));
            (ve(!1),
              F.current('special'),
              (Qe.current = window.setTimeout(() => {
                const Se = y.current;
                Se && (Se.gravity.y = ge);
                for (const ze of ke.current)
                  ((ze.frictionAir = we.get(ze) ?? 0.01), (ze.restitution = be.get(ze) ?? 0.4));
                ((Qe.current = null),
                  (Ve.current = !1),
                  We.current === 'gravityFlip' && (We.current = null));
              }, dt.gravityFlip.slamDurationMs)));
          }, dt.gravityFlip.durationMs)));
      }, []),
      cn = B.useCallback(() => {
        ((We.current = 'magnet'), Sn(!0));
      }, [Sn]),
      _t = B.useCallback(() => {
        se.current && (Sn(!1), (We.current = null));
      }, [Sn]),
      pr = B.useCallback(
        (re, ge) => {
          if (!se.current) return;
          const we = Array.from(ke.current),
            be = Me.Query.point(we, { x: re, y: ge });
          if (be.length === 0) return;
          const me = be[0],
            Se = In(me);
          if (!Se) return;
          const ze = we.filter((He) => {
            if (He === me) return !1;
            const nt = In(He);
            return !!nt && !nt.consumed && nt.level === Se.level;
          });
          if (ze.length === 0 || Le.current <= 0) return;
          const tt = ze[Math.floor(Math.random() * ze.length)];
          (qe(me),
            qe(tt),
            (Dt.current = Se.level),
            (fe.current = performance.now() + dt.magnet.durationMs),
            Ye(Le.current - 1),
            Sn(!1),
            F.current('special'),
            Na(Li('magnet')));
        },
        [Na, Sn, Ye, qe]
      ),
      Sr = B.useCallback(() => {
        N.current < dt.segmentMax || (L.current === 'playing' && Z(!0));
      }, []),
      xr = B.useCallback(() => {
        Z(!1);
      }, []),
      tl = B.useCallback(
        (re) => {
          const ge = Li(re);
          N.current < ge ||
            (re === 'magnet' && Le.current <= 0) ||
            (Z(!1),
            re === 'shake'
              ? (ua(), Na(ge))
              : re === 'gravityFlip'
                ? (Rt(), Na(ge))
                : re === 'magnet' && cn());
        },
        [ua, Rt, cn, Na]
      ),
      fn = B.useCallback(() => {
        Qe.current !== null && (window.clearTimeout(Qe.current), (Qe.current = null));
        const re = y.current;
        (re && (re.gravity.y = ta.gravityY),
          ve(!1),
          (Ve.current = !1),
          pt(),
          (fe.current = null),
          (Dt.current = null),
          (We.current = null),
          Z(!1),
          Sn(!1),
          q(0));
      }, [Sn, q, pt]),
      nl = B.useCallback(
        (re) => {
          const ge = y.current;
          if (!ge || L.current !== 'playing' || !R.current) return;
          const we = r.current;
          if (!we) return;
          const be = performance.now();
          if (be - w.current < rn.dropCooldownMs) return;
          const me = Math.max(0, Math.min(1, re)),
            Se = we.radius,
            ze = Se,
            tt = M.current - Se,
            He = ze + me * (tt - ze),
            nt = we.radius + 4,
            Ne = Ko(we, He, nt, be);
          (ir(Ne, we),
            Me.World.add(ge.world, Ne),
            ke.current.add(Ne),
            F.current('drop'),
            (R.current = !1),
            (w.current = be),
            G.current !== null && window.clearTimeout(G.current),
            (G.current = window.setTimeout(() => {
              ((G.current = null),
                L.current === 'playing' && (p(S.current), C(Jt()), (R.current = !0)));
            }, rn.dropCooldownMs)));
        },
        [Jt, p, C]
      ),
      dn = B.useCallback(() => {
        var re;
        (U.reset(),
          (re = c.current) == null || re.clear(),
          fn(),
          (wt.current = null),
          (zt.current = null),
          ut(null),
          (el.current = 1),
          Ye(Gl),
          p(Jt()),
          C(Jt()),
          (R.current = !0),
          (w.current = 0),
          (L.current = 'playing'),
          f('playing'));
      }, [U, Jt, fn, p, Ye, C]),
      al = B.useCallback(() => {
        const re = y.current;
        if (re) {
          for (const ge of ke.current) Me.World.remove(re.world, ge);
          ke.current.clear();
        }
        (G.current !== null && (window.clearTimeout(G.current), (G.current = null)), dn());
      }, [dn]),
      Ba = B.useCallback(() => {
        var we, be, me;
        if (L.current !== 'playing') return;
        const re = [];
        for (const Se of ke.current) {
          const ze = In(Se);
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
          score: U.score,
          themeId: H.current,
          currentItemLevel: ((we = r.current) == null ? void 0 : we.level) ?? 1,
          nextItemLevel: ((be = S.current) == null ? void 0 : be.level) ?? 1,
          skillGauge: N.current,
          magnetUsesLeft: Le.current,
          bodies: re,
        });
        const ge = y.current;
        if (ge) {
          for (const Se of ke.current) Me.World.remove(ge.world, Se);
          ke.current.clear();
        }
        (G.current !== null && (window.clearTimeout(G.current), (G.current = null)),
          (me = c.current) == null || me.clear(),
          fn(),
          (wt.current = null),
          (zt.current = null),
          ut(null),
          p(null),
          C(null),
          U.reset(),
          (R.current = !0),
          (w.current = 0),
          (L.current = 'idle'),
          f('idle'));
      }, [fn, U, p, C]),
      Er = B.useCallback(
        (re) => {
          var tt;
          const ge = y.current;
          if (!ge) return;
          for (const He of ke.current) Me.World.remove(ge.world, He);
          (ke.current.clear(),
            G.current !== null && (window.clearTimeout(G.current), (G.current = null)),
            (tt = c.current) == null || tt.clear(),
            fn(),
            (wt.current = null),
            (zt.current = null),
            ut(null),
            re.themeId !== H.current && (_(re.themeId), (H.current = re.themeId), Po(re.themeId)));
          const we = performance.now();
          for (const He of re.bodies) {
            if (He.level < 1 || He.level > za) continue;
            const nt = ea(He.level, M.current, re.themeId),
              Ne = Ko(nt, He.x, He.y, we);
            (Me.Body.setVelocity(Ne, { x: He.vx, y: He.vy }),
              Me.Body.setAngle(Ne, He.angle),
              Me.Body.setAngularVelocity(Ne, He.angularVelocity),
              ir(Ne, nt),
              Me.World.add(ge.world, Ne),
              ke.current.add(Ne));
          }
          const be =
              re.currentItemLevel >= 1 && re.currentItemLevel <= Qo ? re.currentItemLevel : 1,
            me = re.nextItemLevel >= 1 && re.nextItemLevel <= Qo ? re.nextItemLevel : 1;
          (p(ea(be, M.current, re.themeId)), C(ea(me, M.current, re.themeId)));
          const Se = Math.max(0, Math.min(dt.gaugeMax, re.skillGauge));
          q(Se);
          const ze = Math.max(0, Math.min(Gl, re.magnetUsesLeft ?? Gl));
          (Ye(ze),
            U.reset(),
            U.setRaw(Math.max(0, re.score)),
            (R.current = !0),
            (w.current = 0),
            (L.current = 'playing'),
            f('playing'));
        },
        [fn, U, p, Ye, C, q]
      ),
      Qi = ta.gameOverLineOffset;
    return {
      status: d,
      score: U.score,
      bestScore: U.bestScore,
      isNewRecord: U.isNewRecord,
      currentItem: v,
      nextItem: h,
      isSoundOn: Y.isSoundOn,
      themeId: D,
      mergeEffectRef: c,
      canvasContainerRef: x,
      drop: nl,
      start: dn,
      restart: al,
      toggleSound: Y.toggle,
      setThemeId: On,
      fieldWidth: s,
      fieldHeight: b,
      gameOverLineY: Qi,
      skillGauge: ae,
      skillGaugeMax: dt.gaugeMax,
      skillSegmentMax: dt.segmentMax,
      skillSegmentCount: dt.segmentCount,
      canOpenSkillMenu: ae >= dt.segmentMax,
      canUseSkill: {
        shake: ae >= Li('shake'),
        gravityFlip: ae >= Li('gravityFlip'),
        magnet: ae >= Li('magnet') && xe > 0,
      },
      magnetUsesLeft: xe,
      magnetMaxUses: Gl,
      isSkillMenuOpen: z,
      openSkillMenu: Sr,
      closeSkillMenu: xr,
      selectSkill: tl,
      isMagnetSelecting: P,
      cancelMagnetSelecting: _t,
      selectMagnetTarget: pr,
      isGravityFlipped: oe,
      gameOverCountdown: Pa,
      suspend: Ba,
      resume: Er,
      loadSuspended: Ov,
      clearSuspended: tc,
    };
  },
  rx = ({ size: s, initialResume: b }) => {
    const x = ux({ fieldWidth: s.width, fieldHeight: s.height }),
      [y, o] = B.useState(!1),
      l = B.useCallback(() => o(!0), []),
      c = B.useCallback(() => o(!1), []),
      d = B.useRef(!1);
    return (
      B.useEffect(() => {
        d.current || ((d.current = !0), b ? x.resume(b) : x.start());
      }, [x, b]),
      W.jsxs(W.Fragment, {
        children: [
          W.jsx(yv, {
            score: x.score,
            bestScore: x.bestScore,
            nextItem: x.nextItem,
            onOpenSettings: l,
          }),
          W.jsx('main', {
            className: Tn.main,
            children: W.jsxs('div', {
              className: Tn.field_wrapper,
              style: { width: `${s.width}px`, height: `${s.height}px` },
              children: [
                W.jsx(Wp, {
                  canvasContainerRef: x.canvasContainerRef,
                  fieldWidth: s.width,
                  fieldHeight: s.height,
                  gameOverLineY: x.gameOverLineY,
                  currentItem: x.currentItem,
                  mergeEffectRef: x.mergeEffectRef,
                  canInteract: x.status === 'playing',
                  onDrop: x.drop,
                  isMagnetSelecting: x.isMagnetSelecting,
                  onMagnetSelect: x.selectMagnetTarget,
                }),
                W.jsx(ov, { effect: x.isGravityFlipped ? 'gravityFlip' : null }),
                W.jsx(sv, { active: x.isMagnetSelecting, onCancel: x.cancelMagnetSelecting }),
                W.jsx(rv, { seconds: x.status === 'playing' ? x.gameOverCountdown : null }),
                x.status === 'playing'
                  ? W.jsx('div', {
                      className: Tn.skill_button_wrapper,
                      children: W.jsx(dv, {
                        gauge: x.skillGauge,
                        segmentMax: x.skillSegmentMax,
                        segmentCount: x.skillSegmentCount,
                        canOpen: x.canOpenSkillMenu,
                        onClick: x.openSkillMenu,
                      }),
                    })
                  : null,
                x.status === 'gameover'
                  ? W.jsx(s1, {
                      score: x.score,
                      bestScore: x.bestScore,
                      isNewRecord: x.isNewRecord,
                      onRestart: x.restart,
                    })
                  : null,
              ],
            }),
          }),
          W.jsx(hv, {
            open: x.isSkillMenuOpen,
            onSelect: x.selectSkill,
            onClose: x.closeSkillMenu,
            canUse: x.canUseSkill,
            magnetUsesLeft: x.magnetUsesLeft,
            magnetMaxUses: x.magnetMaxUses,
          }),
          W.jsx(hc, {
            open: y,
            onClose: c,
            themeId: x.themeId,
            onChangeTheme: x.setThemeId,
            isSoundOn: x.isSoundOn,
            onToggleSound: x.toggleSound,
            canSuspend: x.status === 'playing',
            onSuspend: x.suspend,
          }),
        ],
      })
    );
  },
  sx = ({ initialResume: s }) => {
    const b = B.useRef(null),
      [x, y] = B.useState(null);
    return (
      B.useLayoutEffect(() => {
        const o = b.current;
        if (!o) return;
        const l = o.getBoundingClientRect();
        y({ width: Math.floor(l.width), height: Math.floor(l.height) });
      }, []),
      x === null
        ? W.jsxs('div', {
            className: Tn.layout,
            children: [
              W.jsx('div', { className: Tn.top_bar_placeholder, 'aria-hidden': 'true' }),
              W.jsx('main', { ref: b, className: Tn.main }),
            ],
          })
        : W.jsx('div', { className: Tn.layout, children: W.jsx(rx, { size: x, initialResume: s }) })
    );
  },
  ox = 'modulepreload',
  cx = function (s) {
    return '/ochimono-game/' + s;
  },
  Hh = {},
  fx = function (b, x, y) {
    let o = Promise.resolve();
    if (x && x.length > 0) {
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
        x.map((v) => {
          if (((v = cx(v)), v in Hh)) return;
          Hh[v] = !0;
          const m = v.endsWith('.css'),
            h = m ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${v}"]${h}`)) return;
          const g = document.createElement('link');
          if (
            ((g.rel = m ? 'stylesheet' : ox),
            m || (g.as = 'script'),
            (g.crossOrigin = ''),
            (g.href = v),
            f && g.setAttribute('nonce', f),
            document.head.appendChild(g),
            m)
          )
            return new Promise((r, S) => {
              (g.addEventListener('load', r),
                g.addEventListener('error', () => S(new Error(`Unable to preload CSS for ${v}`))));
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
      return b().catch(l);
    });
  };
function dx(s = {}) {
  const {
    immediate: b = !1,
    onNeedRefresh: x,
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
        ((d = await fx(async () => {
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
              d.addEventListener('controlling', (S) => {
                S.isUpdate && window.location.reload();
              }),
            x == null || x());
        };
        (d.addEventListener('installed', (S) => {
          typeof S.isUpdate > 'u'
            ? typeof S.isExternal < 'u' && S.isExternal
              ? r()
              : !g && (y == null || y())
            : S.isUpdate || y == null || y();
        }),
          d.addEventListener('waiting', r));
      }
      d.register({ immediate: b })
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
function mx(s = {}) {
  const {
      immediate: b = !0,
      onNeedRefresh: x,
      onOfflineReady: y,
      onRegistered: o,
      onRegisteredSW: l,
      onRegisterError: c,
    } = s,
    [d, f] = B.useState(!1),
    [v, m] = B.useState(!1),
    [h] = B.useState(() =>
      dx({
        immediate: b,
        onOfflineReady() {
          (m(!0), y == null || y());
        },
        onNeedRefresh() {
          (f(!0), x == null || x());
        },
        onRegistered: o,
        onRegisteredSW: l,
        onRegisterError: c,
      })
    );
  return { needRefresh: [d, f], offlineReady: [v, m], updateServiceWorker: h };
}
const hx = '_banner_1qruq_1',
  vx = '_message_1qruq_21',
  gx = '_button_1qruq_25',
  ko = { banner: hx, message: vx, button: gx },
  yx = () => {
    const {
      needRefresh: [s],
      updateServiceWorker: b,
    } = mx();
    return s
      ? W.jsxs('div', {
          className: ko.banner,
          role: 'status',
          'aria-live': 'polite',
          children: [
            W.jsx('span', { className: ko.message, children: '新しいバージョンがあります' }),
            W.jsx('button', {
              type: 'button',
              className: ko.button,
              onClick: () => b(!0),
              children: '更新',
            }),
          ],
        })
      : null;
  },
  px = '_backdrop_1weqi_1',
  Sx = '_dialog_1weqi_12',
  xx = '_title_1weqi_22',
  Ex = '_body_1weqi_30',
  bx = '_actions_1weqi_36',
  Cx = '_button_1weqi_42',
  Mx = '_yes_1weqi_57',
  Tx = '_no_1weqi_63',
  Pn = { backdrop: px, dialog: Sx, title: xx, body: Ex, actions: bx, button: Cx, yes: Mx, no: Tx },
  wv = B.memo(({ open: s, onYes: b, onNo: x }) =>
    s
      ? W.jsx('div', {
          className: Pn.backdrop,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '中断データの再開確認',
          children: W.jsxs('div', {
            className: Pn.dialog,
            children: [
              W.jsx('h2', { className: Pn.title, children: '中断データが見つかりました' }),
              W.jsx('p', { className: Pn.body, children: '中断したところから再開しますか？' }),
              W.jsxs('div', {
                className: Pn.actions,
                children: [
                  W.jsx('button', {
                    type: 'button',
                    className: `${Pn.button} ${Pn.yes}`,
                    onClick: b,
                    children: 'はい',
                  }),
                  W.jsx('button', {
                    type: 'button',
                    className: `${Pn.button} ${Pn.no}`,
                    onClick: x,
                    children: 'いいえ',
                  }),
                ],
              }),
            ],
          }),
        })
      : null
  );
wv.displayName = 'ResumeDialog';
const Rx = '_overlay_1xsci_1',
  Ax = '_panel_1xsci_12',
  _x = '_title_1xsci_22',
  Ox = '_lead_1xsci_30',
  Dx = '_start_1xsci_37',
  ji = { overlay: Rx, panel: Ax, title: _x, lead: Ox, start: Dx },
  wx = ({ onStart: s }) =>
    W.jsx('div', {
      className: ji.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'スタート画面',
      children: W.jsxs('div', {
        className: ji.panel,
        children: [
          W.jsxs('h2', {
            className: ji.title,
            children: ['💖🍓🐱', W.jsx('br', {}), 'にゃんハートいちごパズル'],
          }),
          W.jsxs('p', {
            className: ji.lead,
            children: [
              '同じアイテム同士をくっつけて',
              W.jsx('br', {}),
              'にゃんハートいちごをめざそう！',
            ],
          }),
          W.jsx('button', {
            type: 'button',
            className: ji.start,
            onClick: s,
            children: 'スタート',
          }),
        ],
      }),
    }),
  zx = ({ onStart: s, onResume: b }) => {
    const [x] = B.useState(() => bv()),
      [y, o] = B.useState(() => Tv()),
      [l, c] = B.useState(() => Cv()),
      d = B.useCallback((w) => {
        (Po(w), o(w));
      }, []),
      f = B.useCallback(() => {
        c((w) => {
          const L = !w;
          return (Mv(L), L);
        });
      }, []),
      [v, m] = B.useState(!1),
      h = B.useCallback(() => m(!0), []),
      g = B.useCallback(() => m(!1), []),
      [r, S] = B.useState(null),
      p = B.useCallback(() => {
        const w = Ov();
        w ? S(w) : s();
      }, [s]),
      C = B.useCallback(() => {
        if (!r) return;
        const w = r;
        (S(null), tc(), b(w));
      }, [r, b]),
      R = B.useCallback(() => {
        (tc(), S(null), s());
      }, [s]);
    return W.jsxs('div', {
      className: Tn.layout,
      children: [
        W.jsx(yv, { score: 0, bestScore: x, nextItem: null, onOpenSettings: h }),
        W.jsx('main', {
          className: Tn.main,
          children: W.jsx('div', {
            className: Tn.field_placeholder,
            children: W.jsx(wx, { onStart: p }),
          }),
        }),
        W.jsx(yx, {}),
        W.jsx(hc, {
          open: v,
          onClose: g,
          themeId: y,
          onChangeTheme: d,
          isSoundOn: l,
          onToggleSound: f,
          canSuspend: !1,
          onSuspend: () => {},
        }),
        W.jsx(wv, { open: r !== null, onYes: C, onNo: R }),
      ],
    });
  },
  Nx = () => {
    const [s, b] = B.useState({ kind: 'pre-start' }),
      x = B.useCallback(() => {
        b({ kind: 'in-game', resume: null });
      }, []),
      y = B.useCallback((o) => {
        b({ kind: 'in-game', resume: o });
      }, []);
    return s.kind === 'pre-start'
      ? W.jsx(zx, { onStart: x, onResume: y })
      : W.jsx(sx, { initialResume: s.resume });
  },
  Bx = () => W.jsx('div', { className: wp.index, children: W.jsx(Nx, {}) }),
  Ux = () => W.jsx('div', { children: W.jsx('h1', { children: 'Not Found' }) });
function Lx() {
  return W.jsxs($y, {
    children: [
      W.jsx(Fo, { path: '/', element: W.jsx(Bx, {}) }),
      W.jsx(Fo, { path: '*', element: W.jsx(Ux, {}) }),
    ],
  });
}
const zv = document.getElementById('root');
if (!zv) throw new Error('Failed to find #root element');
I0.createRoot(zv).render(W.jsx(xp, { basename: '/ochimono-game', children: W.jsx(Lx, {}) }));
